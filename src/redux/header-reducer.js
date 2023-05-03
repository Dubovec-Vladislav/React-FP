const UPDATE_NEW_LINK = 'UPDATE-NEW-LINK';
const ADD_HEADER_LINK = 'ADD-HEADER-LINK';

let initialState = {
    headerLinksList: [
        { id: 0, path: "/", title: "Content1" },
        { id: 1, path: "/2", title: "Content2" },
        { id: 2, path: "/3", title: "Content3" },
        { id: 3, path: "/4", title: "Content4" },
        { id: 4, path: "/chats", title: "Chats" },
    ],
    newLink: 'New link',
};

const headerReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_LINK:
            {
                let copyState = { ...state };

                copyState.newLink = action.newLink; // Updating new link field
                return copyState;
            }
        case ADD_HEADER_LINK:
            {
                let copyState = { ...state };
                copyState.headerLinksList = [...state.headerLinksList];

                let _newHeaderLink = { id: 5, path: "/5", title: state.newLink }; // Creating a new link
                copyState.headerLinksList.push(_newHeaderLink); // Adding a new link to the list
                copyState.newLink = ''; // Clear new link field
                return copyState;
            }
        default:
            return state;
    }
};

export const updateNewLinkActionCreator = (newLink) => {
    return {
        type: UPDATE_NEW_LINK,
        newLink: newLink,
    }
};

export const addLinkActionCreator = () => {
    return {
        type: ADD_HEADER_LINK,
    }
};

export default headerReducer;