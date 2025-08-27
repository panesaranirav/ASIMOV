import express from "express";
import { payNow } from "../controllers/paymentController.js";

const router = express.Router();
router.post("/", payNow);

export default router;
