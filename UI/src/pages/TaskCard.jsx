export const TaskCard = ({task, removeGoalTask}) => {
    return (
        <div className="mb-4">  
          <div class="w-full bg-gradient-to-r from-blue-50 to-indigo-50 border border-indigo-200 rounded-lg shadow-sm p-3 flex flex-col gap-1 text-xs hover:shadow-md hover:-translate-y-0.5 transition-all">
            <div class="flex justify-between items-center">
                <div class="flex items-left gap-2">
                <p contenteditable="true" class="font-semibold text-gray-800 focus:outline-none focus:ring-1 focus:ring-indigo-400 px-1 rounded">
                    {task.title}
                </p>
                </div>
                <div class="flex items-center gap-2">
                <span class="px-2 py-0.5 rounded-full text-[10px] font-medium bg-yellow-100 text-yellow-700">{task.status}</span>
                <button class="px-1 py-0.5 rounded bg-blue-100 text-blue-600 hover:bg-blue-200">✏️</button>
                <button class="px-1 py-0.5 rounded bg-red-100 text-red-600 hover:bg-red-200" onClick={() => removeGoalTask(task.id)}>❌</button>
                </div>
            </div>

            <p contenteditable="true" class="text-gray-600 focus:outline-none focus:ring-1 focus:ring-indigo-400 px-1 py-0.5 rounded">
                {task.note}
            </p>

            <div class="flex justify-between text-gray-600">
                <div class="flex items-center gap-1">
                <span class="font-medium text-gray-700">Start:</span>
                <input type="date" class="border rounded px-1 text-[10px] focus:ring-1 focus:ring-indigo-400" value={task.startDate}/>
                </div>
                <div class="flex items-center gap-1">
                <span class="font-medium text-gray-700">End:</span>
                <input type="date" class="border rounded px-1 text-[10px] focus:ring-1 focus:ring-indigo-400" value={task.endDate}/>
                </div>
            </div>
            </div>


        </div>
    )
}