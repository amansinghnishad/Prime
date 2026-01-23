import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiError } from '../utils/ApiError.js';
import { Note } from '../models/note.model.js';
import { ApiResponse } from '../utils/ApiResponse.js';

const createNote = asyncHandler(async (req, res) => {
    const { title, content, isPinned } = req.body;

    if (!title || !content) {
        throw new ApiError(400, "Title and content are required");
    }

    const note = await Note.create({
        title,
        content,
        isPinned: isPinned || false,
        owner: req.user._id
    });
    console.log("Note created:", note._id);


    return res.status(201).json(
        new ApiResponse(200, note, "Note created successfully")
    );
});

const getNotes = asyncHandler(async (req, res) => {
    const notes = await Note.find({ owner: req.user._id }).sort({ isPinned: -1, createdAt: -1 });

    return res.status(200).json(
        new ApiResponse(200, notes, "Notes fetched successfully")
    );
});

const getNoteById = asyncHandler(async (req, res) => {
    const { noteId } = req.params;
    const note = await Note.findOne({ _id: noteId, owner: req.user._id });

    if (!note) {
        throw new ApiError(404, "Note not found");
    }

    return res.status(200).json(
        new ApiResponse(200, note, "Note fetched successfully")
    );
});

const updateNote = asyncHandler(async (req, res) => {
    const { noteId } = req.params;
    const { title, content, isPinned } = req.body;

    const note = await Note.findOneAndUpdate(
        { _id: noteId, owner: req.user._id },
        {
            $set: {
                title,
                content,
                isPinned
            }
        },
        { new: true }
    );

    if (!note) {
        throw new ApiError(404, "Note not found");
    }

    return res.status(200).json(
        new ApiResponse(200, note, "Note updated successfully")
    );
});

const deleteNote = asyncHandler(async (req, res) => {
    const { noteId } = req.params;
    const note = await Note.findOneAndDelete({ _id: noteId, owner: req.user._id });

    if (!note) {
        throw new ApiError(404, "Note not found");
    }

    return res.status(200).json(
        new ApiResponse(200, {}, "Note deleted successfully")
    );
});

export { createNote, getNotes, getNoteById, updateNote, deleteNote };
