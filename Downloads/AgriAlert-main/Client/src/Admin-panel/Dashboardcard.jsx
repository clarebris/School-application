const DashboardCard = ({ title, value }) => {
  return (
    <div className="bg-white p-4 rounded  shadow">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
};

export default DashboardCard;