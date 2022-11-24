import Tag from "../models/Tag.js";
import createError from "../utility/createError.js";
/**
 * create tag
 * @access public
 * @route /api/v1/tag
 * @method POST
 */

export const createTag = async (req, res, next) => {
  try {
    const { name } = req.body;
    if (!name) {
      next(createError(400, "All fields are required"));
    } else {
      const tag = await Tag.create({ ...req.body });
      res.status(200).json({
        message: "Tag created",
        tag,
      });
    }
  } catch (error) {
    next(error);
  }
};

/**
 * get single tag
 * @access public
 * @route /api/v1/tag/:id
 * @method GET
 */

export const getSingleTag = async (req, res, next) => {
  try {
    const { id } = req.params;
    const tag = await Tag.findById(id);
    if (!tag) {
      next(createError(404, "Tag not found"));
    }
    if (tag) {
      res.status(200).json({
        message: "Success",
        tag,
      });
    }
  } catch (error) {
    next(error);
  }
};

/**
 * update tag
 * @access public
 * @route /api/v1/tag/:id
 * @method Update
 */

export const updateTag = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!id) {
      next(createError(400, "Tag not found"));
    }
    if (id) {
      const tag = await Tag.findByIdAndUpdate(id, {
        ...req.body,
      });
      res.status(200).json({
        message: "Tag updated successfully",
        tag,
      });
    }
  } catch (error) {
    next(error);
  }
};

/**
 * delete tag
 * @access public
 * @route /api/v1/tag/:id
 * @method DELETE
 */
export const deleteTag = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!id) {
      next(createError(400, "Tag not found"));
    }
    if (id) {
      const tag = await Tag.findByIdAndDelete(id);
      if (!tag) {
        next(createError(400, "Tag not found"));
      } else {
        res.status(200).json({
          message: "Tag deleted successfully",
        });
      }
    }
  } catch (error) {
    next(error);
  }
};

/**
 * Get all  tag
 * @access public
 * @route /api/v1/tag
 * @method GET
 */
export const getAllTag = async (req, res, next) => {
  try {
    const tag = await Tag.find();
    if (!tag) {
      next(createError(404, "Tag not found"));
    }
    if (tag) {
      res.status(200).json({
        message: "Success",
        tag,
      });
    }
  } catch (error) {
    next(error);
  }
};
