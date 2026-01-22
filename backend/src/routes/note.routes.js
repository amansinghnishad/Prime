import { Router } from 'express';
import { createNote, getNotes, getNoteById, updateNote, deleteNote } from '../controllers/note.controller.js';
import { verifyJWT } from '../middleware/auth.middleware.js';

const router = Router();

router.use(verifyJWT); // Apply verifyJWT to all routes in this file

router.route("/").get(getNotes).post(createNote);
router.route("/:noteId").get(getNoteById).patch(updateNote).delete(deleteNote);

export default router;
