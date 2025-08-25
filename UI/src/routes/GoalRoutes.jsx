import { Routes, Route } from "react-router-dom";
import KanbanDashboard from "../pages/KanbanDashboard";
import {AddGoal} from "../pages/AddGoal.jsx";

export const GoalRoutes = () => {
    return(
        <div>
            <Routes>
                <Route path="/" element={<KanbanDashboard />}/>   
                <Route path="/to-do" element={<div>Not found</div>} />
                <Route path="/add/goal" element={<AddGoal />} />
            </Routes>
        </div>
    );
}