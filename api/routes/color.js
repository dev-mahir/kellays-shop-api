import express from "express";
import {
  createColor,
  deleteColor,
  getAllColor,
  getSingleColor,
  updateColor,
} from "../controllers/colorController.js";

// init router
const router = express.Router();

// product routes
router.post("/", createColor);
router.get("/", getAllColor);
router.get("/:id", getSingleColor);
router.patch("/:id", updateColor);
router.delete("/:id", deleteColor);

export default router;
