const getDayInitial = (date: Date): string => {
    const dayName = date.toLocaleDateString('en-US', { weekday: 'long' });
    return dayName.charAt(0);
};

export default getDayInitial