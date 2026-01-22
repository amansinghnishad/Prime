import { Pin } from 'lucide-react';

const NoteCard = ({ note }) => {
    return (
        <div className="flex items-start justify-between rounded-xl border border-gray-200 bg-white p-4 shadow-sm hover:shadow-md transition">

            {/* Left content */}
            <div className="flex-1">
                <h3 className="text-base font-semibold text-gray-900">
                    {note.title}
                </h3>

                <p className="mt-1 text-sm text-gray-600 line-clamp-2">
                    {note.content}
                </p>

                <p className="mt-2 text-xs text-gray-400">
                    {new Date(note.createdAt).toLocaleDateString()}
                </p>
            </div>

            {/* Right */}
            {note.isPinned && (
                <Pin className="ml-4 h-4 w-4 text-teal-500" />
            )}
        </div>
    );
};

export default NoteCard;
