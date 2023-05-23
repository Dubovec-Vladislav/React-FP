const UPDATE_NEW_LINK = 'UPDATE-NEW-LINK';
const ADD_HEADER_LINK = 'ADD-HEADER-LINK';

let initialState = {
    headerLinksList: [
        { id: 0, path: "/", title: "Content1" },
        { id: 1, path: "/2", title: "Content2" },
        { id: 2, path: "/3", title: "Content3" },
        { id: 3, path: "/4", title: "Content4" },
        { id: 4, path: "/chats", title: "Chats" },
        { id: 5, path: "/find-users", title: "Find-Users" },
        { id: 6, path: "/login", title: "Login" },
    ],
    newLink: 'New link',
};

const headerReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_LINK:
            return { ...state, newLink: action.newLink, };
        case ADD_HEADER_LINK:
            let headerLinksListLength = state.headerLinksList.length
            let stateCopy = {
                ...state,
                headerLinksList: [
                    ...state.headerLinksList,
                    { id: headerLinksListLength, path: `/${headerLinksListLength}`, title: state.newLink }
                ],
                newLink: '',
            };
            return stateCopy;
        default:
            return state;
    }
};

export const updateNewLink = (newLink) => ({ type: UPDATE_NEW_LINK, newLink: newLink, });
export const addLink = () => ({ type: ADD_HEADER_LINK, });

export default headerReducer;