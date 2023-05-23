import React from 'react'
// import './React.css'
import Content1 from './Content-Components/Text/Content-1'
import Content2 from './Content-Components/Text/Content-2'
import Content3 from './Content-Components/Text/Content-3'
import Content4 from './Content-Components/Text/Content-4'
import NF from './Content-Components/NotFound/NotFound'
import { Routes, Route } from "react-router-dom"
import Chats from './Content-Components/Chats/Chats'
import Dialog3 from './Content-Components/Chats-Messages/Dialog-3'
import Dialog4 from './Content-Components/Chats-Messages/Dialog-4'
import Dialog1Container from './Content-Components/Chats-Messages/Dialog-1-Container'
import Dialog2Container from './Content-Components/Chats-Messages/Dialog-2-Container'
import FindUsersContainer from './Content-Components/FindUsers/FindUsers-Container'
import ProfileContainer from './Content-Components/Profile/Profile-Container'
import Login from './Content-Components/Login/Login'

function Content(props) {
  return (
    <div className="content__block">
      <Routes>
        <Route path="*" element={<NF />} />
        <Route path="/" element={<Content1 title="Content-1" />} />
        <Route path="/2" element={<Content2 title="Content-2" />} />
        <Route path="/3" element={<Content3 title="Content-3" />} />
        <Route path="/4" element={<Content4 title="Content-4" />} />
        <Route path="/find-users" element={<FindUsersContainer />} />
        <Route path="/profile/:userId" element={<ProfileContainer />} />
        <Route path="/login" element={<Login />} />
        <Route path="/chats" element={<Chats chatsList={props.dialogsPage.chatsList} />} />
        <Route path="chats/1" element={<Dialog1Container />} />
        <Route path="chats/2" element={<Dialog2Container />} />
        <Route path="chats/3" element={<Dialog3 chatsList={props.dialogsPage.chatsList} messagesList={props.dialogsPage.allMessagesList[2]} />} />
        <Route path="chats/4" element={<Dialog4 chatsList={props.dialogsPage.chatsList} messagesList={props.dialogsPage.allMessagesList[3]} />} />
      </Routes>
    </div>
  );
};

export default Content;