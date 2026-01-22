import { useEffect, useState } from 'react';
import { notesApi } from '../api/notes.api';

const useNotes = () => {
    const [notes, setNotes] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchNotes = async () => {
        try {
            const res = await notesApi.getAll();

            console.log('NOTES RESPONSE:', res.data);

            const notesData = Array.isArray(res.data?.message)
                ? res.data.message
                : [];

            setNotes(notesData);
        } catch (error) {
            console.error('Fetch notes failed:', error);
            setNotes([]);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchNotes();
    }, []);

    return {
        notes,
        loading,
        refetch: fetchNotes,
    };
};

export default useNotes;
