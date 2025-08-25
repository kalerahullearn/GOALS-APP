import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
import { GoalService } from "../services/GoalService";


export const AddGoal = () => {
  
  const [goal, setGoal] = useState({});
  
  function handleAddTask() {
    const newTask = {id: Date.now(), text: "", completed: false};
    setGoal({...goal, tasks: [...(goal.tasks || []), newTask]});
  }

  function handleSaveGoal(){
    GoalService.addGoal(goal);
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-gray-100 to-gray-200 p-6">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">➕ Add New Goal</h2>

        <div className="mb-4">
          <label className="block text-sm font-medium text-left text-gray-700">Goal Title</label>
          <input
            type="text"
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg 
                      text-gray-900 placeholder-gray-400
                      focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter goal title"
            id="title"
            onChange={e => setGoal({...goal, title:e.target.value})}
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
            onChange={e => setGoal({...goal, description: e.target.value})}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-1 mb-6">
          <label className="block text-sm font-medium text-left text-gray-700">
            Category
          </label>
          <select
            id="category"
            className="w-60 mt-1 px-1 py-2 border border-gray-300 rounded-lg 
                      text-gray-900 placeholder-gray-400
                      focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={goal.category || ""}
            onChange={(e) => setGoal({ ...goal, category: e.target.value })}
          >
            <option value="" disabled>Select category</option>
            <option value="Finance">Finance</option>
            <option value="Career">Career</option>
            <option value="Health">Health</option>
            <option value="Personal">Personal</option>
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
              selected={goal.startDate}
              onSelect={date => setGoal({...goal, startDate:date})}/>
          </div>
          <div>
            <label className="block text-sm font-medium text-left text-gray-700">End Date</label>
            <DatePicker
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-900 
                        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholderText="Select end date" 
              id="endDate"
              selected={goal.endDate}
              onSelect={date => setGoal({...goal, endDate:date})}/>
          </div>
          <div>
            <label className="block text-sm font-medium text-left text-gray-700 mt-7">120 Days</label>
          </div>
        </div>
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-left text-gray-700">Tasks</label>
            
            {goal.tasks?.map(task => (
                <div key={task.id} className="flex items-center gap-2 mt-2">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-blue-600"
                    value={task.completed}
                    onChange={e => {
                      task.completed = !task.completed;
                      setGoal({...goal});
                    }}/>
                  
                  <input
                    type="text"
                    value={task.text}
                    onChange={e => {
                      task.text = e.target.value;
                      setGoal({...goal});
                    }}
                    className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg 
                          text-gray-900 placeholder-gray-400
                          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"/>
                </div>
            ))}
          <div className="flex justify-end mt-4">
            <button
              className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium
                        text-gray-600 border border-gray-300 rounded-lg
                        hover:bg-gray-100 hover:text-gray-800
                        focus:outline-none focus:ring-2 focus:ring-gray-300 transition"
                        onClick={handleAddTask} >
              ➕ Add Task
            </button>
          </div>
        </div>

        <div className="flex justify-end gap-3">
          <button
            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">
            <Link to={"/"}>Cancel</Link>
          </button>
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700" onClick={handleSaveGoal}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
