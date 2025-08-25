import { GoalCard } from "./GoalCard";

export const GoalsDashboard = () => {
  const goals = [
    { id: 1, title: "🏃 Exercise", progress: 80, detail: "4/5 workouts done", color: "bg-green-500" },
    { id: 2, title: "📖 Reading", progress: 60, detail: "120/200 pages", color: "bg-blue-500" },
    { id: 3, title: "💻 Coding", progress: 50, detail: "5/10 problems solved", color: "bg-purple-500" },
    { id: 2, title: "📖 Earn 1 lakhs", progress: 10, detail: "120/200 pages", color: "bg-red-500" },
  ];

  const dailyGoals = [
    "Meditate for 10 min",
    "Read 20 pages",
    "Write a journal entry",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">🎯 My Goals Dashboard</h2>

      <div className="p-5 bg-white rounded-2xl shadow-lg border hover:shadow-xl transition mb-5">
        <p className="text-sm text-gray-600 mt-1"><b>Total Goals:</b> {goals.length}</p>
      </div>

      {/* Grid Goals */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {goals.map((goal) => (
          <GoalCard key={goal.id} goal={goal} />
        ))}
      </div>

      {/* Daily Goals Checklist */}
      <div className="max-w-xl bg-white p-6 rounded-2xl shadow-lg border">
        <h2 className="text-lg font-bold text-gray-800 mb-4">📋 Daily Goals</h2>
        <ul className="space-y-3">
          {dailyGoals.map((task, i) => (
            <li
              key={i}
              className="flex items-center bg-gray-100 rounded-xl px-4 py-2 hover:bg-gray-200 transition"
            >
              <input
                type="checkbox"
                className="w-5 h-5 text-blue-600 rounded focus:ring-blue-400"
              />
              <span className="ml-3 text-gray-700">{task}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
