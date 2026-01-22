import { Clock, Loader, CheckCircle } from 'lucide-react';

const STATUS_META = {
    pending: {
        label: 'Pending',
        icon: Clock,
        color: 'text-gray-600',
    },
    'in-progress': {
        label: 'In Progress',
        icon: Loader,
        color: 'text-blue-600',
    },
    completed: {
        label: 'Completed',
        icon: CheckCircle,
        color: 'text-green-600',
    },
};

const TaskCard = ({ task, onStatusChange }) => {
    const statusMeta = STATUS_META[task.status];
    const StatusIcon = statusMeta.icon;

    return (
        <div className="flex items-start justify-between rounded-xl border border-gray-200 bg-white p-4 shadow-sm hover:shadow-md transition">

            <div className="flex-1">
                <h3 className="text-base font-semibold text-gray-900">
                    {task.title}
                </h3>

                <p className="mt-1 text-sm text-gray-600 line-clamp-2">
                    {task.content}
                </p>

                <p className="mt-2 text-xs text-gray-400">
                    Created on {new Date(task.createdAt).toLocaleDateString()}
                </p>
            </div>

            {/* Status Selector */}
            <div className="ml-4">
                <div className="flex items-center gap-1 text-xs font-medium">
                    <StatusIcon className={`h-4 w-4 ${statusMeta.color}`} />
                    <select
                        value={task.status}
                        onChange={(e) => onStatusChange(task._id, e.target.value)}
                        className="rounded-md border border-gray-200 bg-gray-50 px-2 py-1 text-xs focus:outline-none focus:ring-1 focus:ring-indigo-500"
                    >
                        <option value="pending">Pending</option>
                        <option value="in-progress">In Progress</option>
                        <option value="completed">Completed</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default TaskCard;
