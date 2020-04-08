export const initialState =   [
    {
item: 'Learn about reducers',
completed: false,
id: 3892987589
}
]

export const reducerFunction = (state, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            return [  
                ...state, {             
                    item: action.payload,
                    completed: false,
                    id: Date.now()
                    
            }]
        case "REMOVE_ITEM":
            return {

            }
        case "TOGGLE_COMPLETE":
            return state.filter(item => !item.completed);
        default: 
            return state
    }
}