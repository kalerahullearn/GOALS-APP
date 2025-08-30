import { Routes, Route } from "react-router-dom";
import KanbanDashboard from "../pages/KanbanDashboard";
import {AddGoal} from "../pages/AddGoal.jsx";
import {ViewGoal} from "../pages/ViewGoal.jsx";
import { EditGoal } from "../pages/EditGoal.jsx";

export const GoalRoutes = () => {
    return(
        <div>
            <Routes>
                <Route path="/" element={<KanbanDashboard />}/>   
                <Route path="/to-do" element={<div>Not found</div>} />
                <Route path="/goals" element={<AddGoal />} />
                <Route path="/goals/view/:goalId" element={<ViewGoal />} />
                <Route path="/goals/edit/:goalId" element={<EditGoal />} />
            </Routes>
        </div>
    );
}