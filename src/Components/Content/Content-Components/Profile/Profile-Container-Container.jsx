import React from 'react'
// import './React.css'
import { useParams } from 'react-router-dom';
import ProfileContainer from './Profile-Container';

function ProfileContainerContainer(props) {
    return (
        <ProfileContainer {...props} urlParams={useParams()}/>
    );
};

export default ProfileContainerContainer;