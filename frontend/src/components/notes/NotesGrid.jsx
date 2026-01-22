import NoteCard from './NoteCard';

const NotesGrid = ({ notes = [] }) => {
    if (!Array.isArray(notes)) return null;

    return (
        <div className="space-y-4">
            {notes.map((note) => (
                <NoteCard key={note._id} note={note} />
            ))}
        </div>
    );
};

export default NotesGrid;
