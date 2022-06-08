export const completeQuest = (id) => ({
    type: 'COMPLETE_QUEST',
    id
});

export const addPoints = (pastAmount, amount) => ({
    type: 'ADD_POINTS',
    pastAmount,
    amount
});

export const levelUp = (level) => ({
    type: 'LEVEL_UP',
    level
});