const goals = [
            { id: 1, title: "🏃 Exercise", detail: "Plan 5 workouts", status: "ready", progress: 0, category: "Health" },
            { id: 2, title: "📖 Reading", detail: "Pick 3 books", status: "ready", progress: 0, category: "Finance"  },
            { id: 3, title: "💻 Coding", detail: "Solve 5 problems", status: "inprogress", progress: 50, category: "Career" },
            { id: 4, title: "📝 Portfolio", detail: "Write case studies", status: "inprogress", progress: 30, category: "Personal" },
            { id: 5, title: "🛒 Shopping", detail: "Buy groceries", status: "completed", progress: 100, category: "Career" },
            { id: 6, title: "📂 Resume", detail: "Update LinkedIn", status: "completed", progress: 100, category: "Health" },
        ];

export const GoalService = {
    
    getGoals: (status) => {
        return GoalsStorage.getAllGoals().filter(goal => goal.status === status);
    },

    addGoal: (goal) => {
        console.log("Goal added:", goal);
        const allGoals = GoalsStorage.getAllGoals();
        allGoals.push(goal);
        GoalsStorage.setGoals(allGoals);
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
        const allGoals = getAllGoals();
        const filteredOut = allGoals.filter(goal => goal.id != id);
        setGoals(filteredOut);
    },
    getGoal: (id) => {
        const allGoals = getAllGoals();
        return allGoals.find(goal => goal.id == id);
    }
}