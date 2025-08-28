import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link, useParams } from "react-router-dom";
import { GoalService } from "../services/GoalService";
import { MasterService } from "../services/MasterService";
import { TaskCard } from "./TaskCard";


export const ViewGoal = () => {
  
  const [goal, setGoal] = useState({});
  const [goalCategories, setGoalCategories] = useState([]);
  const {goalId} = useParams();

  useEffect(() => {
    setGoalCategories(MasterService.getGoalCategories());
    setGoal(GoalService.getGoal(goalId));
  }, [goalId])

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-gray-100 to-gray-200 p-6">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">➕ View Goal</h2>

        <div className="mb-4">
          <label className="block text-sm font-medium text-left text-gray-700">Goal Title</label>
          <input
            type="text"
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg 
                      text-gray-900 placeholder-gray-400
                      focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter goal title"
            id="title"
            readOnly
            value={goal?.title || ""}
          />
        </div>

        {/* Description */}
        <div className="mb-4">
          <label className="block text-sm font-medium  text-left text-gray-700">Description</label>
          <textarea
            rows={3}
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg 
                      text-gray-900 placeholder-gray-400
                      focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter goal description"
            id="description"
            readOnly
            value={goal?.description || ""}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-left text-gray-700">
            Category
          </label>
          <select
            id="category"
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg 
                      text-gray-900 placeholder-gray-400
                      focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            readOnly
            value={goal?.category || ""}>
            <option value="" disabled>Select category</option>
            {
              goalCategories.map((cat) => {
                return <option key={cat} value={cat}>{cat}</option>
              })
            }
            
          </select>
        </div>

        {/* Start & End Date */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium  text-left text-gray-700">Start Date</label>
            <DatePicker
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-900 
                        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholderText="Select start date" 
              id="startDate"
              value={goal?.startDate || ""}
              readOnly/>
          </div>
          <div>
            <label className="block text-sm font-medium text-left text-gray-700">End Date</label>
            <DatePicker
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-900 
                        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholderText="Select end date" 
              id="endDate"
              value={goal?.endDate || ""}
              readOnly />
          </div>
          <div>
            <label className="block text-sm font-medium text-left text-gray-700 mt-7">120 Days</label>
          </div>
        </div>
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-left text-gray-700">Tasks</label>
             {goal?.tasks?.map(task => (
                <TaskCard key={task.id} task={task}/>
            ))}
        </div>

        <div className="flex justify-end gap-3">
            <Link to={"/"} className="text-white">
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">
              Cancel
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
