import DatePicker from "react-datepicker";
import { useState } from "react";

export const TaskCard = ({task, addTask, removeGoalTask}) => {

    return (
        <div className="w-full max-w-md bg-white border border-gray-200 rounded-md shadow-sm p-2 mb-2 flex items-start justify-between text-sm hover:shadow transition">
            <div className="flex flex-1 items-start">
                <input type="checkbox" 
                    className="mt-1 mr-2 w-4 h-4 accent-blue-500"
                    checked={task?.completed ? true : false} 
                    value={task?.completed ? true:false} 
                    onChange={e => {
                        task.completed = e.target.value;
                        addTask(task)}
                    }
                />
                <div className="flex flex-col flex-1">
                    <input 
                        type="text" 
                        placeholder="Title..."
                        className="w-full font-medium text-gray-800 text-sm px-1 py-0.5 rounded border-b border-gray-200 focus:outline-none"
                        value={task?.title}
                        onChange={e => {
                            task.title = e.target.value;
                            addTask(task)}}/>
                    <textarea 
                        placeholder="Note..." 
                        rows="3"
                        oninput="this.style.height = 'auto'; this.style.height = (this.scrollHeight) + 'px';"
                        className="w-full text-gray-600 text-xs px-1 py-0.5 rounded mt-1 resize-none border-b border-gray-200 focus:outline-none" 
                        value={task?.note}
                        onChange={e => {
                            task.note = e.target.value;
                            addTask(task)}}/>

                    <div className="flex gap-1 mt-1">
                        <DatePicker
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-900 
                                    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholderText="Start date" 
                            id="startDate"
                            selected={task?.startDate}
                            onSelect={date => {
                                task.startDate = date;
                                addTask(task);
                            }}/>

                        <DatePicker
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-900 
                                    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholderText="End date" 
                            id="endDate"
                            selected={task?.endDate}
                            onSelect={date => {
                                task.endDate = date;
                                addTask(task);
                            }}/>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-1 ml-2">
                <button className="p-1 bg-blue-50 hover:bg-blue-100 rounded text-xs">✏️</button>
                <button className="p-1 bg-red-50 hover:bg-red-100 rounded text-xs">❌</button>
            </div>
    </div>

    )
}