import express from "express";
import morgan from "morgan";
import cors from "cors";
import taskRoutes from "./routes/task.routes";

const app = express();
app.set("port", process.env.PORT || 3000);

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/tasks", taskRoutes);

export default app;
