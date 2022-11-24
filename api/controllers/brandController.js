import Brand from "../models/Brand.js";
import createError from "../utility/createError.js";







/**
 * create brand
 * @access public
 * @route /api/v1/brand
 * @method POST
 */

export const createBrand = async (req, res, next) => {
  try {
    const { name } = req.body;
    if (!name) {
      next(createError(400, "All fields are required"));
    } else {
      const brand = await Brand.create({ ...req.body });
      res.status(200).json({
        message: "Brand created",
        brand,
      });
    }
  } catch (error) {
    next(error);
  }
};


/**
 * get single brand
 * @access public
 * @route /api/v1/brand/:id
 * @method GET
 */

export const getSingleBrand = async (req, res, next) => {
  try {
    const { id } = req.params;
    const brand = await Brand.findById(id);
    if (!brand) {
      next(createError(404, "Brand not found"));
    }
    if (brand) {
      res.status(200).json({
        message: "Success",
        brand,
      });
    }
  } catch (error) {
    next(error);
  }
};





/**
 * update brand
 * @access public
 * @route /api/v1/brand/:id
 * @method Update
 */

export const updateBrand = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!id) {
      next(createError(400, "Brand not found"));
    }
    if (id) {
      const brand = await Brand.findByIdAndUpdate(id, {
        ...req.body,
      });
      res.status(200).json({
        message: "Brand updated successfully",
      });
    }
  } catch (error) {
    next(error);
  }
};





/**
 * delete brand
 * @access public
 * @route /api/v1/brand/:id
 * @method DELETE
 */
export const deleteBrand = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!id) {
      next(createError(400, "Brand not found"));
    }
    if (id) {
      const brand = await Brand.findByIdAndDelete(id);
      if (!brand) {
        next(createError(400, "Brand not found"));
      } else {
        res.status(200).json({
          message: "Brand deleted successfully",
        });
      }
    }
  } catch (error) {
    next(error);
  }
};



/**
 * Get all  brand
 * @access public
 * @route /api/v1/brand
 * @method GET
 */
export const getAllBrand = async (req, res, next) => {
  try {
    const brand = await Brand.find();
    if (!brand) {
      next(createError(404, "Brand not found"));
    }
    if (brand) {
      res.status(200).json(brand);
    }
  } catch (error) {
    next(error);
  }
};
