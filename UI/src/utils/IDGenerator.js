export const IDGenerator = {
    generateID: () => {
        return Date.now() + Math.floor(Math.random() * 1000);
    }
}