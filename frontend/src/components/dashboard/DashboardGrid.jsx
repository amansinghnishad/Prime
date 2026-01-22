import DashboardCard from './DashboardCard';

const DashboardGrid = ({ items }) => {
    return (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
                <DashboardCard
                    key={item.id}
                    title={item.title}
                    description={item.description}
                    action={item.action}
                />
            ))}
        </div>
    );
};

export default DashboardGrid;
