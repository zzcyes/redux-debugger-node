const initialState = {
    todoList: [{
            id: 1,
            text: '1234',
            status: 'todo'
        },
        {
            id: 2,
            text: '1234',
            status: 'done'
        },
    ],
};

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case "todo/add":
            return state.todoList.concat(action.payload);
        case "todo/update":
            return state.todoList.map(item => {
                if (item.id === action.payload.id) {
                    return {
                        ...item,
                        ...action.payload,
                    };
                }
                return item;
            });
        case "todo/remove":
            return state.todoList.filter(
                (item) => item.id !== action.payload
            );
        default:
            return state;
    }
};

module.exports = { todoReducer: Reducer }