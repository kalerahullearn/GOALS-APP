import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link, useParams } from "react-router-dom";
import { GoalService } from "../services/GoalService";
import { MasterService } from "../services/MasterService";
import { CommonUtils } from "../utils/CommonUtils";
import { TaskCardView } from "./TaskCardView";
import { ProgressBar } from "../compoenents/ProgressBar";


export const ViewGoal = () => {
  const [goal, setGoal] = useState({});
  const [goalCategories, setGoalCategories] = useState([]);
  const [totalDays, setTotalDays] = useState(0);
  const { goalId } = useParams();

  useEffect(() => {
    setGoalCategories(MasterService.getGoalCategories());
    setGoal(GoalService.getGoal(goalId));
  }, [goalId]);

  useEffect(() => {
    setTotalDays(CommonUtils.calculateDaysBetweenDates(goal.startDate, goal.endDate));
  }, [goal.startDate, goal.endDate]);

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-gray-100 to-gray-200 p-6">
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">View Goal</h2>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* LEFT SIDE → Goal details */}
          <div>
            {/* Goal Title */}
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
            <div className="mb-4 mt-10">
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

            {/* Category */}
            <div className="grid grid-cols-1 md:grid-cols-7 mt-10 mb-4">
              <label className="block text-sm font-medium text-gray-700 text-left">Category</label>
              <p className="mt-1 inline-block px-3 py-1 rounded-lg bg-blue-100 text-blue-700 text-sm text-left">
                {goal.category}
              </p>
            </div>

            {/* Start & End Date */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 mt-10">
              <div>
                <label className="block text-sm font-medium text-left text-gray-700">Start Date</label>
                <DatePicker
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-900 
                            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholderText="Select start date"
                  id="startDate"
                  value={CommonUtils.formatDate(goal?.startDate)}
                  readOnly
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-left text-gray-700">End Date</label>
                <DatePicker
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-900 
                            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholderText="Select end date"
                  id="endDate"
                  value={CommonUtils.formatDate(goal?.endDate)}
                  readOnly
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-left text-gray-700 mt-7">{totalDays} Days</label>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mt-15 mb-18">
              <ProgressBar progress={goal.progress} />
            </div>
          </div>

          {/* RIGHT SIDE → Tasks */}
          <div className="pl-6 border-l border-gray-300">
            <label className="block text-sm font-medium text-left text-gray-700 mb-3">Tasks</label>
            <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
              {goal?.tasks?.map((task) => (
                <TaskCardView key={task.id} readOnly={true} task={task} />
              ))}
            </div>
          </div>
        </div>

        {/* Footer buttons */}
        <div className="flex justify-end gap-3 mt-8">
          <Link to={"/"} className="text-white">
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">
              Back
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
