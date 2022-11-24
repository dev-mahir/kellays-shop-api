import Color from "../models/Color.js";
import createError from "../utility/createError.js";

/**
 * create color
 * @access public
 * @route /api/v1/color
 * @method POST
 */

export const createColor = async (req, res, next) => {
  try {
    const { name } = req.body;
    if (!name) {
      next(createError(400, "All fields are required"));
    } else {
      const color = await Color.create({ ...req.body });
      res.status(200).json({
        message: "Color created",
        color,
      });
    }
  } catch (error) {
    next(error);
  }
};


/**
 * get single color
 * @access public
 * @route /api/v1/color/:id
 * @method GET
 */

export const getSingleColor = async (req, res, next) => {
  try {
    const { id } = req.params;
    const color = await Color.findById(id);
    if (!color) {
      next(createError(404, "Color not found"));
    }
    if (color) {
      res.status(200).json({
        message: "Success",
        color,
      });
    }
  } catch (error) {
    next(error);
  }
};





/**
 * update color
 * @access public
 * @route /api/v1/color/:id
 * @method Update
 */

export const updateColor = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!id) {
      next(createError(400, "Color not found"));
    }
    if (id) {
      const color = await Color.findByIdAndUpdate(id, {
        ...req.body,
      });
      res.status(200).json({
        message: "Color updated successfully",
      });
    }
  } catch (error) {
    next(error);
  }
};





/**
 * delete color
 * @access public
 * @route /api/v1/color/:id
 * @method DELETE
 */
export const deleteColor = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!id) {
      next(createError(400, "Color not found"));
    }
    if (id) {
      const color = await Color.findByIdAndDelete(id);
      if (!color) {
        next(createError(400, "Color not found"));
      } else {
        res.status(200).json({
          message: "Color deleted successfully",
        });
      }
    }
  } catch (error) {
    next(error);
  }
};



/**
 * Get all  color
 * @access public
 * @route /api/v1/color
 * @method GET
 */
export const getAllColor = async (req, res, next) => {
  try {
    const color = await Color.find();
    if (!color) {
      next(createError(404, "Color not found"));
    }
    if (color) {
      res.status(200).json(color);
    }
  } catch (error) {
    next(error);
  }
};
