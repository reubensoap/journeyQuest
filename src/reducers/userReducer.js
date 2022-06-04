const defaultPlayerState = {
    firstName: "Alonso",
    points: 0,
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
            return [
                ...state,
                action.points
            ];
        default:
            return state;
    }

};

export default userReducer;