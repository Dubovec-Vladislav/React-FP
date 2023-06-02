import headerReducer, { addLink } from "./header-reducer";


test('length of headerLinksList should be incremented', () => {
  let state = {
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
  let action = addLink();

  let newState = headerReducer(state, action);

  expect(newState.headerLinksList.length).toBe(7);
});