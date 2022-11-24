import User from "../models/User.js";
import createError from "../utility/createError.js";
import { hassPassword, hassPasswordVerify } from "../utility/hash.js";
import { sendActivationLink } from "../utility/sendMail.js";
import { createToken } from "../utility/token.js";
import { isEmail } from "../utility/validate.js";
import cookie from 'js-cookie';

/**
 * @access public
 * @route /api/user/register
 * @method POST
 */
export const register = async (req, res, next) => {

  try {
    const { first_name, email, password } = req.body;

    if (!first_name || !email || !password) {
      next(createError(400, "All fields are required"));
    }
    // check email validate
    if (!isEmail(email)) {
      next(createError(400, "Invalid email"));
    }

    // check email unique
    const checkEmail = await User.findOne({ email });
    if (checkEmail) {
      next(createError(400, "Email already exists"));
    }

    const user = await User.create({
      ...req.body,
      password: hassPassword(password),
    });

    if (user) {
      // create token
      const token = createToken({ id: user._id }, "30d");
      // create activation link 
      sendActivationLink(user.email, {
        name: user.first_name,
        link: `${process.env.APP_URL}:${process.env.PORT}/api/v1/user/activate/${token}`
      });

      res.status(200).json({
        message: "Registration successfull",
        user,
        token,
      });
    }
  } catch (error) {
    // next(createError(400, "There was a server side error"))
    console.log(error);
  }
};








/**
 * @access public
 * @route /api/user/login
 * @method POST
 */
export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      next(createError(400, "All fields are required"));
    }
    if (!isEmail(email)) {
      next(createError(400, "Invalid Email Address"));
    }

    // email check
    const loginUser = await User.findOne({ email });
    if (!loginUser) {
      next(createError(400, "Invalid Email"));
    }
    
      if (!hassPasswordVerify(password, loginUser.password)) {
        next(createError(400, "Wrong password"));
      } else {
        // create token
        const token = createToken({ id: loginUser._id }, "364d");
        
        res.status(200).cookie("authToken", token).json({
          message: 'User login successfull',
          user: loginUser,
          token
        })
      }
    
  } catch (error) {
    // next(createError(400, "There was a server side error"))
    console.log(error);
  }
};



export const loggedInUser = (req,res, next) => {

}