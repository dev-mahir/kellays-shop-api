import express from "express";
import {
  createSize,
  deleteSize,
  getAllSize,
  getSingleSize,
  updateSize,
} from "../controllers/sizeController.js";

// init router
const router = express.Router();

// size routes
router.post("/", createSize);
router.get("/", getAllSize);
router.get("/:id", getSingleSize);
router.patch("/:id", updateSize);
router.delete("/:id", deleteSize);

export default router;
