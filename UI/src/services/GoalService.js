export const GoalService = {
    getGoals: (status) => {
        const goals = [
            { id: 1, title: "🏃 Exercise", detail: "Plan 5 workouts", status: "ready", progress: 0, category: "Health" },
            { id: 2, title: "📖 Reading", detail: "Pick 3 books", status: "ready", progress: 0, category: "Finance"  },
            { id: 3, title: "💻 Coding", detail: "Solve 5 problems", status: "inprogress", progress: 50, category: "Career" },
            { id: 4, title: "📝 Portfolio", detail: "Write case studies", status: "inprogress", progress: 30, category: "Personal" },
            { id: 5, title: "🛒 Shopping", detail: "Buy groceries", status: "completed", progress: 100, category: "Career" },
            { id: 6, title: "📂 Resume", detail: "Update LinkedIn", status: "completed", progress: 100, category: "Health" },
        ];
        return goals.filter(goal => goal.status === status);
    },

    addGoal: (goal) => {
        console.log("Goal added:", goal);
        GoalService.getGoals().push(goal);
    }
};