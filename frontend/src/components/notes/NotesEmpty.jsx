const NotesEmpty = () => {
    return (
        <div className="rounded-2xl border border-dashed border-gray-200 bg-white p-10 text-center">
            <h3 className="text-lg font-semibold text-gray-700">
                No notes yet
            </h3>
            <p className="mt-2 text-sm text-gray-500">
                Create your first note to get started.
            </p>
        </div>
    );
};

export default NotesEmpty;
