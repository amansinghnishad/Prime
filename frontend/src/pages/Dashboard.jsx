import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import DashboardLayout from '../components/layout/DashboardLayout';

import useNotes from '../hooks/useNotes';
import NotesGrid from '../components/notes/NotesGrid';
import NotesEmpty from '../components/notes/NotesEmpty';

import useTasks from '../hooks/useTasks';
import TasksGrid from '../components/tasks/TasksGrid';
import TasksEmpty from '../components/tasks/TasksEmpty';

import CreateNoteModal from '../components/notes/CreateNoteModal';
import CreateTaskModal from '../components/tasks/CreateTaskModal';
import { Plus } from 'lucide-react';

const Dashboard = () => {
    const { user } = useAuth();

    const { notes, loading: notesLoading, refetch: refetchNotes } = useNotes();
    const { tasks, loading: tasksLoading, refetch: refetchTasks, updateTaskStatus, } = useTasks();

    const [noteOpen, setNoteOpen] = useState(false);
    const [taskOpen, setTaskOpen] = useState(false);



    return (
        <DashboardLayout>

            <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900">
                    Welcome back, {user?.fullName} 👋
                </h2>
                <p className="mt-1 text-sm text-gray-500">
                    Your workspace overview
                </p>
            </div>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[45%_1px_45%]">

                {/* Notes */}
                <section>
                    <div className="mb-4 text-center">
                        <h3 className="text-xl font-semibold text-gray-900">Notes</h3>

                        <button
                            onClick={() => setNoteOpen(true)}
                            className="mt-2 inline-flex items-center gap-2 rounded-full bg-teal-500 px-4 py-1.5 text-sm font-medium text-white hover:bg-teal-600"
                        >
                            <Plus className="h-4 w-4" />
                            Create Note
                        </button>
                    </div>

                    {notesLoading ? (
                        <p className="text-center text-gray-500">Loading notes...</p>
                    ) : notes.length === 0 ? (
                        <NotesEmpty />
                    ) : (
                        <NotesGrid notes={notes} />
                    )}
                </section>

                <div className="hidden lg:block bg-gray-200" />

                {/* Tasks */}
                <section>
                    <div className="mb-4 text-center">
                        <h3 className="text-xl font-semibold text-gray-900">Tasks</h3>

                        <button
                            onClick={() => setTaskOpen(true)}
                            className="mt-2 inline-flex items-center gap-2 rounded-full bg-indigo-500 px-4 py-1.5 text-sm font-medium text-white hover:bg-indigo-600"
                        >
                            <Plus className="h-4 w-4" />
                            Create Task
                        </button>
                    </div>

                    {tasksLoading ? (
                        <p className="text-center text-gray-500">Loading tasks...</p>
                    ) : tasks.length === 0 ? (
                        <TasksEmpty />
                    ) : (
                        <TasksGrid
                            tasks={tasks}
                            onStatusChange={updateTaskStatus}
                        />
                    )}
                </section>

            </div>



            <CreateNoteModal
                open={noteOpen}
                onClose={() => setNoteOpen(false)}
                onCreated={refetchNotes}
            />

            <CreateTaskModal
                open={taskOpen}
                onClose={() => setTaskOpen(false)}
                onCreated={refetchTasks}
            />

        </DashboardLayout>
    );
};

export default Dashboard;
