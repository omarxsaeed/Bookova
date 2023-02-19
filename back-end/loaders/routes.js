import { Router } from "express";

const router = Router();

router.get("/test", (req, res) => {
  res.json("Server's Running!");
});

export default router;
