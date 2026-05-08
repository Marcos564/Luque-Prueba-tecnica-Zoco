import express from "express";
import { getBars, deleteBar, addBars } from "../services/barService.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.json(getBars());
});

router.post("/", (req, res) => {
  const result = addBars([req.body]);
  res.json(result);
});

router.delete("/:id", (req, res) => {
  deleteBar(req.params.id);
  res.json({ ok: true });
});



export default router;