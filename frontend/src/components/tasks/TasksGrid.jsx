import TaskCard from './TaskCard';

const TasksGrid = ({ tasks = [], onStatusChange }) => {
    if (!Array.isArray(tasks)) return null;

    return (
        <div className="space-y-4">
            {tasks.map((task) => (
                <TaskCard
                    key={task._id}
                    task={task}
                    onStatusChange={onStatusChange}
                />
            ))}
        </div>
    );
};

export default TasksGrid;
