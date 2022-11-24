import jwt from "jsonwebtoken"


/**
 * create jwt 
 */



export const createToken = (payload , exp ) => {
    return  jwt.sign(payload, process.env.JWT_SECRET_KEY, {expiresIn: exp})
}