import { useState } from 'react';
import Modal from '../ui/Modal';
import { notesApi } from '../../api/notes.api';

const CreateNoteModal = ({ open, onClose, onCreated }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await notesApi.create({ title, content });
            onCreated?.();
            onClose();
            setTitle('');
            setContent('');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Modal open={open} title="Create Note" onClose={onClose}>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    required
                    placeholder="Title"
                    className="w-full rounded-lg border px-3 py-2"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <textarea
                    required
                    rows={4}
                    placeholder="Write your note..."
                    className="w-full rounded-lg border px-3 py-2"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />

                <button
                    disabled={loading}
                    className="w-full rounded-lg bg-teal-500 py-2 text-white hover:bg-teal-600"
                >
                    {loading ? 'Creating...' : 'Create Note'}
                </button>
            </form>
        </Modal>
    );
};

export default CreateNoteModal;
