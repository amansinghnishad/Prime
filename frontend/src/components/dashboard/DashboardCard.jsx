const DashboardCard = ({ title, description, action }) => {
    return (
        <div className="rounded-2xl bg-white p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-lg font-semibold text-gray-900">
                {title}
            </h3>

            <p className="mt-2 text-sm text-gray-500">
                {description}
            </p>

            {action && (
                <div className="mt-4">
                    {action}
                </div>
            )}
        </div>
    );
};

export default DashboardCard;
