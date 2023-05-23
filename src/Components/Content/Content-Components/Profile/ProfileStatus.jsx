import React, { useState, useEffect } from 'react';
// import './React.css'


const ProfileStatus = (props) => {
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    useEffect(() => {
        if (status !== props.status) {
            setStatus(props.status);
        }
    }, [props.status]);

    const activateEditMode = () => {
        setEditMode(true);
    };

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateUserStatus(status);
    };

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    };

    return (
        <div className="status__block">
            {!editMode ? (
                <div onDoubleClick={activateEditMode}>{props.status || '-----'}</div>
            ) : (
                <textarea
                    onChange={onStatusChange}
                    onBlur={deactivateEditMode}
                    value={status}
                    type="text"
                    autoFocus
                    rows="5"
                    cols="100"
                />
            )}
        </div>
    );
};

export default ProfileStatus;