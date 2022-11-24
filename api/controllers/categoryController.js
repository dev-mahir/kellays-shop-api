import Category from "../models/Category.js";
import createError from "../utility/createError.js";
/**
 * create category
 * @access public
 * @route /api/v1/category
 * @method POST
 */

export const createCategory = async (req, res, next) => {
  try {
    const { name } = req.body;
    if (!name) {
      next(createError(400, "All fields are required"));
    } else {
      const category = await Category.create({ ...req.body });
      res.status(200).json({
        message: "Category created",
        category,
      });
    }
  } catch (error) {
    next(error);
  }
};

/**
 * get single category
 * @access public
 * @route /api/v1/category/:id
 * @method GET
 */

export const getSingleCategory = async (req, res, next) => {
  try {
    const { id } = req.params;
    const category = await Category.findById(id);
    if (!category) {
      next(createError(404, "Category not found"));
    }
    if (category) {
      res.status(200).json({
        message: "Success",
        category,
      });
    }
  } catch (error) {
    next(error);
  }
};

/**
 * update category
 * @access public
 * @route /api/v1/category/:id
 * @method Update
 */

export const updateCategory = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!id) {
      next(createError(400, "Category not found"));
    }
    if (id) {
      const category = await Category.findByIdAndUpdate(id, {
        ...req.body,
      });
      res.status(200).json({
        message: "Category updated successfully"
        
      });
    }
  } catch (error) {
    next(error);
  }
};

/**
 * delete category
 * @access public
 * @route /api/v1/category/:id
 * @method DELETE
 */
export const deleteCategory = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!id) {
      next(createError(400, "Category not found"));
    }
    if (id) {
      const category = await Category.findByIdAndDelete(id);
      if (!category) {
        next(createError(400, "Category not found"));
      } else {
        res.status(200).json({
          message: "Category deleted successfully",
        });
      }
    }
  } catch (error) {
    next(error);
  }
};

/**
 * Get all  category
 * @access public
 * @route /api/v1/category
 * @method GET
 */
export const getAllCategory = async (req, res, next) => {
  try {
    const category = await Category.find();
    if (!category) {
      next(createError(404, "Category not found"));
    }
    if (category) {
      res.status(200).json(category);
    }
  } catch (error) {
    next(error);
  }
};
