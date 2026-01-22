import { useState } from 'react';
import Modal from '../ui/Modal';
import { tasksApi } from '../../api/tasks.api';

const CreateTaskModal = ({ open, onClose, onCreated }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [status, setStatus] = useState('pending');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await tasksApi.create({ title, content, status });
            onCreated?.();
            onClose();
            setTitle('');
            setContent('');
            setStatus('pending');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Modal open={open} title="Create Task" onClose={onClose}>
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
                    rows={3}
                    placeholder="Task details..."
                    className="w-full rounded-lg border px-3 py-2"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />

                <select
                    className="w-full rounded-lg border px-3 py-2"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                >
                    <option value="pending">Pending</option>
                    <option value="in-progress">In Progress</option>
                    <option value="completed">Completed</option>
                </select>

                <button
                    disabled={loading}
                    className="w-full rounded-lg bg-indigo-500 py-2 text-white hover:bg-indigo-600"
                >
                    {loading ? 'Creating...' : 'Create Task'}
                </button>
            </form>
        </Modal>
    );
};

export default CreateTaskModal;
