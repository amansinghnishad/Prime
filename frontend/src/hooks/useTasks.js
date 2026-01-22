import { useEffect, useState } from 'react';
import { tasksApi } from '../api/tasks.api';

const useTasks = () => {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchTasks = async () => {
        try {
            const res = await tasksApi.getAll();
            const tasksData = Array.isArray(res.data?.message) ? res.data.message : [];
            setTasks(tasksData);
        } catch (error) {
            console.error('Fetch tasks failed:', error);
            setTasks([]);
        } finally {
            setLoading(false);
        }
    };

    const updateTaskStatus = async (taskId, status) => {
        try {
            await tasksApi.update(taskId, { status });

            setTasks((prev) =>
                prev.map((task) =>
                    task._id === taskId ? { ...task, status } : task
                )
            );
        } catch (error) {
            console.error('Update status failed:', error);
        }
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    return {
        tasks,
        loading,
        refetch: fetchTasks,
        updateTaskStatus,
    };
};

export default useTasks;
