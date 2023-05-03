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
                let stateCopy = { ...state };

                stateCopy.newLink = action.newLink; // Updating new link field
                return stateCopy;
            }
        case ADD_HEADER_LINK:
            {
                let stateCopy = {
                    ...state,
                    headerLinksList: [...state.headerLinksList],
                };

                let headerLinksListLenght = stateCopy.headerLinksList.length
                let newHeaderLink = { id: headerLinksListLenght, path: `/${headerLinksListLenght}`, title: state.newLink }; // Creating a new link
                stateCopy.headerLinksList.push(newHeaderLink); // Adding a new link to the list
                stateCopy.newLink = ''; // Clear new link field
                return stateCopy;
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