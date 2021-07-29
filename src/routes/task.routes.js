import { Router } from "express";
import * as taskCtrl from "../controllers/task.controller";
const router = Router();

router.post("/", taskCtrl.createTask);

router.get("/", taskCtrl.findAllTasks);

router.get("/:id", taskCtrl.findTaskById);

router.put("/:id", taskCtrl.updateTaskById);

router.delete("/:id", taskCtrl.deleteTaskById);

export default router;
