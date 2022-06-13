const defaultQuests = [
    {
        questName: "Eat a dog",
        questDesc: "Not your own",
        questLevel: 2,
        category: "adventure",
        id: "fff"
    }
]

const questReducer = (state = defaultQuests, action) => {
    switch(action.type){
        case 'ADD_QUEST':
            return [
                ...state,
                action.quest
            ];
        case 'COMPLETE_QUEST':
            console.log("maybe",action.id);
            return state.filter(({id}) => {
                return id !== action.id;
            });
        case 'REMOVE_QUEST':
            return state.filter(({id}) => {
                return id !== action.id;
            });
        default:
            return state;
    };
};

export default questReducer;