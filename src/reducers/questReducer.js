const defaultQuests = [
    {
        id: 1,
        questName: 'Nude Beach',
        questDesc: 'Go to a nude beach in Florida',
        questLevel: 2,
        category: 'adventure'
    },
    {
        id: 2,
        questName: 'Fly a kite',
        questDesc: 'purchase a kite and fly it',
        questLevel: 0,
        category: 'knowledge'
    },
    {
        id: 3,
        questName: 'Loose 10 pounds',
        questDesc: 'Get to working on the body',
        questLevel: 1,
        category: 'health'
    }
];

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