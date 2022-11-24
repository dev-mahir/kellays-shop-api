import Size from "../models/Size.js";
import createError from "../utility/createError.js";





/**
 * create size
 * @access public
 * @route /api/v1/size
 * @method POST
 */

export const createSize = async (req, res, next) => {
  try {
    const { name } = req.body;
    if (!name) {
      next(createError(400, "All fields are required"));
    } else {
      const size = await Size.create({ ...req.body });
      res.status(200).json({
        message: "size created",
        size,
      });
    }
  } catch (error) {
    next(error);
  }
};


/**
 * get single size
 * @access public
 * @route /api/v1/size/:id
 * @method GET
 */

export const getSingleSize = async (req, res, next) => {
  try {
    const { id } = req.params;
    const size = await Size.findById(id);
    if (!size) {
      next(createError(404, "size not found"));
    }
    if (size) {
      res.status(200).json({
        message: "Success",
        size,
      });
    }
  } catch (error) {
    next(error);
  }
};





/**
 * update size
 * @access public
 * @route /api/v1/size/:id
 * @method Update
 */

export const updateSize = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!id) {
      next(createError(400, "Size not found"));
    }
    if (id) {
      const size = await Size.findByIdAndUpdate(id, {
        ...req.body,
      });
      res.status(200).json({
        message: "size updated successfully",
      });
    }
  } catch (error) {
    next(error);
  }
};





/**
 * delete size
 * @access public
 * @route /api/v1/size/:id
 * @method DELETE
 */
export const deleteSize = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!id) {
      next(createError(400, "size not found"));
    }
    if (id) {
      const size = await Size.findByIdAndDelete(id);
      if (!size) {
        next(createError(400, "size not found"));
      } else {
        res.status(200).json({
          message: "Size deleted successfully",
        });
      }
    }
  } catch (error) {
    next(error);
  }
};



/**
 * Get all  size
 * @access public
 * @route /api/v1/size
 * @method GET
 */
export const getAllSize  = async (req, res, next) => {
  try {
    const size = await Size.find();
    if (!size) {
      next(createError(404, "Size not found"));
    }
    if (size) {
      res.status(200).json(size);
    }
  } catch (error) {
    next(error);
  }
};
