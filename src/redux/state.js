let state = {
    headerLinksList: [
        { id: 0, path: "/", title: "Content1" },
        { id: 1, path: "/2", title: "Content2" },
        { id: 2, path: "/3", title: "Content3" },
        { id: 3, path: "/4", title: "Content4" },
        { id: 4, path: "/chats", title: "Chats" },
    ],
    chatsList: [
        { id: 0, chatId: "1", chatName: "Дмитрий" },
        { id: 1, chatId: "2", chatName: "Александр" },
        { id: 2, chatId: "3", chatName: "Григорий" },
        { id: 3, chatId: "4", chatName: "Вячеслав" },
    ],
    allMessagesList: [
        [
            { id: 0, messageTitle: "Дмитрий", messageText: "Lorem ipsum dolor sit amet." },
            { id: 1, messageTitle: "Вы", messageText: "Consectetur adipisicing elit. Ullam, nihil." },
            { id: 2, messageTitle: "Вы", messageText: "Veritatis doloribus culpa officiis quo magnam mollitia tempore porro necessitatibus? Assumenda, rem!" },
            { id: 3, messageTitle: "Дмитрий", messageText: "Adipisicing elit. Modi libero impedit sunt, est eos saepe." },
            { id: 4, messageTitle: "Вы", messageText: "Libero doloribus culpa officiis" },
            { id: 5, messageTitle: "Дмитрий", messageText: "Officiis quo magnam mollitia culpa officiis" },
        ],
        [
            { id: 0, messageTitle: "Александр", messageText: "Lorem ipsum dolor sit amet." },
            { id: 1, messageTitle: "Александр", messageText: "Consectetur adipisicing elit. Ullam, nihil." },
            { id: 2, messageTitle: "Вы", messageText: "Veritatis doloribus culpa officiis quo magnam mollitia tempore porro necessitatibus? Assumenda, rem!" },
            { id: 3, messageTitle: "Вы", messageText: "Adipisicing elit. Modi libero impedit sunt, est eos saepe." },
        ],
        [
            { id: 0, messageTitle: "Григорий", messageText: "Consectetur adipisicing elit. Ullam, nihil." },
            { id: 1, messageTitle: "Григорий", messageText: "Adipisicing elit. Modi libero impedit sunt, est eos saepe." },
            { id: 2, messageTitle: "Вы", messageText: "Lorem ipsum dolor sit amet." },
            { id: 3, messageTitle: "Вы", messageText: "Veritatis doloribus culpa officiis quo magnam mollitia tempore porro necessitatibus? Assumenda, rem!" },
        ],
        [
            { id: 0, messageTitle: "Вы", messageText: "Veritatis doloribus culpa officiis quo magnam mollitia tempore porro necessitatibus? Assumenda, rem!" },
            { id: 1, messageTitle: "Вячеслав", messageText: "Adipisicing elit. Modi libero impedit sunt, est eos saepe." },
            { id: 2, messageTitle: "Вы", messageText: "Consectetur adipisicing elit. Ullam, nihil." },
            { id: 3, messageTitle: "Вячеслав", messageText: "Lorem ipsum dolor sit amet." },
            { id: 4, messageTitle: "Вячеслав", messageText: "Officiis quo magnam mollitia culpa officiis" },
        ],
    ],
};

export let addHeaderLink = (headerLinkName) => {
    let newHeaderLink = {
        id: 5, path: "/5", title: headerLinkName,
    };
    state.headerLinksList.push();
};

export default state;