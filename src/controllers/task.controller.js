import { getPagination } from "../libs/getPagination";
import Task from "../models/Task";

export const findAllTasks = async (req, res) => {
  const { size, page, title } = req.query;
  const condition = title
    ? {
        title: { $regex: new RegExp(title), $options: "i" },
      }
    : {};
  const { limit, offset } = getPagination(page, size);
  try {
    res.send(await Task.paginate(condition, { offset, limit }));
  } catch (error) {
    res.status(500).json(error);
  }
};

export const createTask = async (req, res) => {
  const { title, description } = req.body;
  if (!title) {
    res.status(500).json({ message: "Path `title` is required." });
  }

  try {
    const newTask = await new Task({ title, description }).save();
    res.json(newTask);
  } catch (error) {
    res.json(error);
  }
};

export const findTaskById = async (req, res) => {
  const id = req.params.id;
  try {
    const task = await Task.findById(id);
    if (!task) {
      res.status(404).json({ msg: "Task Not Found" });
    }
    res.json(task);
  } catch (error) {
    res.json(error);
  }
};

export const updateTaskById = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!task) {
      res.json({ msg: "Update failed" });
    }

    res.json(task);
  } catch (error) {
    res.json(error);
  }
};

export const deleteTaskById = async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ msg: "Task deleted" });
  } catch (error) {
    res.json(error);
  }
};
