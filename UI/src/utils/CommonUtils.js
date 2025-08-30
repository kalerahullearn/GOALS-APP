export const CommonUtils = {
    formatDate: (dateString) => {
        const date  = new Date(dateString);
        return date.toLocaleDateString();
    },
    
    calculateDaysBetweenDates: (startDateString, endDateString) => {
        if(startDateString == null || endDateString == null) return 0;
        const startDate = new Date(startDateString);
        const endDate = new Date(endDateString);
        const timeDiff = Math.abs(endDate-startDate);
        const diffDays = Math.ceil(timeDiff / (1000 * 60 * 60 * 24)); 
        return diffDays+1;
    }
}