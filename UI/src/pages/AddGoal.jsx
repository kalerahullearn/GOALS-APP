import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link, useNavigate } from "react-router-dom";
import { GoalService } from "../services/GoalService";
import { MasterService } from "../services/MasterService";
import { TaskCard } from "./TaskCard";
import { IDGenerator } from "../utils/IDGenerator";
import { CommonUtils } from "../utils/CommonUtils";


export const AddGoal = () => {
  
  const [goal, setGoal] = useState({});
  const [goalCategories, setGoalCategories] = useState([]);
  const [totalDays, setTotalDays] = useState(0);
  const navigate = useNavigate();

  useEffect(() =>{
    setGoalCategories(MasterService.getGoalCategories());
    calculateTotalDays();
  }, [goal.startDate, goal.endDate])
  
  function calculateTotalDays(){
    setTotalDays(CommonUtils.calculateDaysBetweenDates(goal.startDate, goal.endDate));
  }

  function addTask(task){
    goal.tasks.map(t => {
        if(t.id === task.id){
            return task;
        }
        return t;
    });
    setGoal({...goal});
  }

  function handleNewBlankTask() {
    const newTask = {id: IDGenerator.generateID(), title: "", note: "", completed: false};
    setGoal({...goal, tasks: [...(goal.tasks || []), newTask]});
  }

  function handleSaveGoal(){
    goal.status = "ready";
    goal.progress = 0;
    goal.id = IDGenerator.generateID();
    GoalService.addGoal(goal);
    navigate("/");
  }

  function removeGoalTask(taskId){
    const tasksAfterRemoval = goal.tasks.filter(task => task.id != taskId);
    goal.tasks = tasksAfterRemoval;
    setGoal({...goal});
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

        <div className="mb-4">
          <label className="block text-sm font-medium text-left text-gray-700">
            Category
          </label>
          <select
            id="category"
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg 
                      text-gray-900 placeholder-gray-400
                      focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={goal.category || ""}
            onChange={(e) => setGoal({ ...goal, category: e.target.value })}
          >
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
              selected={CommonUtils.formatDate(goal?.startDate)}
              onSelect={date => setGoal({...goal, startDate:date})}/>
          </div>
          <div>
            <label className="block text-sm font-medium text-left text-gray-700">End Date</label>
            <DatePicker
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-900 
                        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholderText="Select end date" 
              id="endDate"
              selected={CommonUtils.formatDate(goal?.endDate)}
              onSelect={date => setGoal({...goal, endDate:date})}/>
          </div>
          <div>
            <label className="block text-sm font-medium text-left text-gray-700 mt-7">{totalDays} Days</label>
          </div>
        </div>
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-left text-gray-700">Tasks</label>
             {goal.tasks?.map(task => (
                <TaskCard key={task.id} readOnly={false} task={task} addTask={addTask} removeGoalTask={removeGoalTask}/>
            ))}
        </div>

        <div className="mb-4">
          
           
          <div className="flex justify-end mt-4">
            <button
              className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium
                        text-gray-600 border border-gray-300 rounded-lg
                        hover:bg-gray-100 hover:text-gray-800
                        focus:outline-none focus:ring-2 focus:ring-gray-300 transition"
                        onClick={handleNewBlankTask} >
              ➕ Add Task
            </button>
          </div>
        </div>

        <div className="flex justify-end gap-3">
          <Link to={"/"} className="text-white">
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">
              Cancel
            </button>
          </Link>
          
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700" onClick={handleSaveGoal}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
