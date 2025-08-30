
export const GoalService = {
    getGoals: (status) => {
        return GoalsStorage.getAllGoals().filter(goal => goal.status === status);
    },

    addGoal: (goal) => {
        console.log("Goal added:", goal);
        const allGoals = GoalsStorage.getAllGoals();
        allGoals.push(goal);
        GoalsStorage.setGoals(allGoals);
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

    removeGoal: (id) => {
        const allGoals = GoalsStorage.getAllGoals();
        const filteredOut = allGoals.filter(goal => goal.id != id);
        GoalsStorage.setGoals(filteredOut);
    },
    getGoal: (id) => {
        const allGoals = GoalsStorage.getAllGoals();
        return allGoals.find(goal => goal.id == id);
    },
    updateGoal: (goal) => {
        const allGoals = GoalsStorage.getAllGoals();
        const goalsUpdated = allGoals.map(gl => {
            return gl.id == goal.id ? {...gl, ...goal}: gl;
        });
        GoalsStorage.setGoals(goalsUpdated);
    }
}