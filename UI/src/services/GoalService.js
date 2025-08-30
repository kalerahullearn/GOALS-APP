import { CommonUtils } from "../utils/CommonUtils";

export const GoalService = {
    getGoals: (status) => {
        return GoalsStorage.getAllGoals().filter(goal => goal.status === status);
    },

    addGoal: (goal) => {
        console.log("Goal added:", goal);
        GoalsStorage.addGoal(goal);
    },

    getGoal: (id) => {
        return GoalsStorage.getGoal(id);
    },

    updateGoal: (goal) => {
        GoalsStorage.updateGoal(goal);
    },

    deleteGoal: (id) => {
        GoalsStorage.removeGoal(id);
    }
};

const GoalsStorage = {
    getAllGoals: () => {
        return JSON.parse(localStorage.getItem("goals")) || [];
    },
    setGoals: (goals) => {
        localStorage.setItem("goals", JSON.stringify(goals));
    },
    addGoal: (goal) => {
        goal = {...goal, progress: GoalsStorage.calculateProgress(goal)};
        const allGoals = GoalsStorage.getAllGoals();
        allGoals.push(goal);
        GoalsStorage.setGoals(allGoals);
    },
    updateGoal: (goal) => {
        goal = {...goal, progress: GoalsStorage.calculateProgress(goal)};
        const allGoals = GoalsStorage.getAllGoals();
        const goalsUpdated = allGoals.map(gl => {
            return gl.id == goal.id ? {...gl, ...goal}: gl;
        });
        GoalsStorage.setGoals(goalsUpdated);
    },
    removeGoal: (id) => {
        const allGoals = GoalsStorage.getAllGoals();
        const filteredOut = allGoals.filter(goal => goal.id != id);
        GoalsStorage.setGoals(filteredOut);
    },
    getGoal: (id) => {
        const allGoals = GoalsStorage.getAllGoals();
        return allGoals.find(goal => goal.id == id);
    },
    calculateProgress: (goal) => {
        const tasksCompleted = goal.tasks.filter(task => task.completed);
        const totalTargetDays = CommonUtils.calculateDaysBetweenDates(goal.startDate, goal.endDate);
        let totalCompletedDays = 0;
        for(var i=0;i<tasksCompleted.length;i++){
            totalCompletedDays += CommonUtils.calculateDaysBetweenDates(tasksCompleted[i].startDate, tasksCompleted[i].endDate);
        }
        return Math.ceil((totalCompletedDays/totalTargetDays) * 100);
    }
}