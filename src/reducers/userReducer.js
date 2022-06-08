const defaultPlayerState = {
    firstName: "Alonso",
    points: 0,
    pastPoints:0,
    level: 0
}

const userReducer = (state = defaultPlayerState, action) => {
    switch(action.type) {
        case 'EDIT_NAME':
            return [
                ...state,
                action.firstName
            ];
        case 'ADD_POINTS':
            return {
                ...state,
                pastPoints: action.pastAmount,
                points: action.amount
            };
        case 'LEVEL_UP':
            return {
                ...state,
                level: action.level
            };
        default:
            return state;
    }

};

export default userReducer;