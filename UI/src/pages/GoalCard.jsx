import React, { useState, useEffect, useRef } from "react";
import { EllipsisVerticalIcon } from "lucide-react";
import { Link , useNavigate} from "react-router-dom";

export const GoalCard = ({ goal, deleteGoal }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);


  function navigateToEditGoal(goalId){
    navigate("/goals/edit/"+goalId);
  }

  return (
    
    <div
      key={goal.id}
      className="relative p-6 bg-white rounded-2xl shadow-lg border hover:shadow-xl transition">
      <div className="absolute top-2 right-2">
        <EllipsisVerticalIcon
          onClick={() => setMenuOpen(!menuOpen)}
          className="w-4 h-4 text-gray-500 hover:text-gray-700 cursor-pointer"
        />

        {menuOpen && (
          <div className="absolute right-0 w-15 bg-white border rounded-md shadow-md z-50">
            <button className="w-full text-left px-3 py-1 text-gray-700 hover:bg-gray-100" onClick={e => navigateToEditGoal(goal.id)}>
              ✏️
            </button>
            <button className="w-full text-left px-3 py-1 text-red-600 hover:bg-red-50" onClick={e => deleteGoal(goal)}>
              🗑️
            </button>
          </div>
        )}
      </div>

      {/* Card Content */}
      
      <Link to={`/goals/view/${goal.id}`} className="text-white">
      <h3 className="text-lg font-bold text-gray-900">{goal.title}</h3>
      <p className="text-sm text-gray-600 mt-1">{goal.detail}</p>

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 h-2 mt-3 rounded-full">
        <div
          className="bg-blue-500 h-2 rounded-full"
          style={{ width: `${goal.progress}%` }}
        />
      </div>
      <p className="text-xs text-gray-500 mt-2">{goal.progress}% Complete</p>
      </Link>
    </div>
    
  );
};
