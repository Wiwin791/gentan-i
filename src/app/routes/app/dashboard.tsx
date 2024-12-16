export const DashboardRoute = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">Statistics</h2>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Standard Working Time</span>
              <span>455</span>
            </div>
            <div className="flex justify-between">
              <span>eff. Target</span>
              <span>437</span>
            </div>
            <div className="flex justify-between">
              <span>Ave. Workload</span>
              <span>455</span>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">Recent Activity</h2>
          <ul className="space-y-2">
            <li className="flex justify-between">
              <span>New user registration</span>
              <span>2m ago</span>
            </li>
            <li className="flex justify-between">
              <span>Project updated</span>
              <span>15m ago</span>
            </li>
            <li className="flex justify-between">
              <span>Payment received</span>
              <span>1h ago</span>
            </li>
          </ul>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">Quick Actions</h2>
          <div className="space-y-2">
            <button className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
              Create New Project
            </button>
            <button className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600">
              Generate Report
            </button>
            <button className="w-full bg-purple-500 text-white p-2 rounded hover:bg-purple-600">
              View Analytics
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
