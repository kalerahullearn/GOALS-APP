import React, {useState, useEffect} from "react";
import { GoalCard } from "./GoalCard";
import { GoalService } from "../services/GoalService";
import { PlusIcon } from "lucide-react"; //
import { Link } from "react-router-dom";

export default function KanbanDashboard() {

  const [ready, setReady] = useState([]);
  const [inProgress, setInProgress] = useState([]);
  const [completed, setCompleted] = useState([]);


  useEffect(() => {
    setReady(GoalService.getGoals("ready"));
    setInProgress(GoalService.getGoals("inprogress"));
    setCompleted(GoalService.getGoals("completed"));

  }, [])
  

  const Column = ({ title, goals, color }) => (
    <div className="flex-1 bg-gray-50 rounded-2xl p-4 shadow-inner border">
      <h2 className={`text-lg font-bold mb-4 ${color}`}>{title}</h2>
      <div className="space-y-4">
        {goals.map((goal) => (
            <GoalCard key={goal.id} goal={goal} />
        ))}
      </div>
    </div>
  );

  return (
    <>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold text-gray-800">📌 Goals Board</h2>
        <Link to={"/goal/"} className="text-white">
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-xl shadow hover:bg-blue-700 transition">
            <PlusIcon className="w-4 h-4" />
            Add Goal
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Column title="🟢 Ready" goals={ready} color="text-green-600" />
        <Column title="🟡 In Progress" goals={inProgress} color="text-yellow-600" />
        <Column title="🔵 Completed" goals={completed} color="text-blue-600" />
      </div>
    </>
  );
}
