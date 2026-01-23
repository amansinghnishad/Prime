import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiError } from '../utils/ApiError.js';
import { Task } from '../models/task.model.js';
import { ApiResponse } from '../utils/ApiResponse.js';

const createTask = asyncHandler(async (req, res) => {
    const { title, content, status } = req.body;

    if (!title || !content) {
        throw new ApiError(400, "Title and content are required");
    }

    const task = await Task.create({
        title,
        content,
        status: status || "pending",
        owner: req.user._id
    });
    console.log("Task created:", task._id);


    return res.status(201).json(
        new ApiResponse(200, task, "Task created successfully")
    );
});

const getTasks = asyncHandler(async (req, res) => {
    const tasks = await Task.find({ owner: req.user._id }).sort({ createdAt: -1 });

    return res.status(200).json(
        new ApiResponse(200, tasks, "Tasks fetched successfully")
    );
});

const getTaskById = asyncHandler(async (req, res) => {
    const { taskId } = req.params;
    const task = await Task.findOne({ _id: taskId, owner: req.user._id });

    if (!task) {
        throw new ApiError(404, "Task not found");
    }

    return res.status(200).json(
        new ApiResponse(200, task, "Task fetched successfully")
    );
});

const updateTask = asyncHandler(async (req, res) => {
    const { taskId } = req.params;
    const { title, content, status } = req.body;

    const task = await Task.findOneAndUpdate(
        { _id: taskId, owner: req.user._id },
        {
            $set: {
                title,
                content,
                status
            }
        },
        { new: true }
    );

    if (!task) {
        throw new ApiError(404, "Task not found");
    }

    return res.status(200).json(
        new ApiResponse(200, task, "Task updated successfully")
    );
});

const deleteTask = asyncHandler(async (req, res) => {
    const { taskId } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskId, owner: req.user._id });

    if (!task) {
        throw new ApiError(404, "Task not found");
    }

    return res.status(200).json(
        new ApiResponse(200, {}, "Task deleted successfully")
    );
});

export { createTask, getTasks, getTaskById, updateTask, deleteTask };
