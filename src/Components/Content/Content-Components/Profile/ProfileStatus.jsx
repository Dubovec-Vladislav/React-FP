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

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateUserStatus(status);
  };

  return (
    <div className="status__block">
      {!editMode ? (
        <div onDoubleClick={() => setEditMode(true)}>{props.status || '-----'}</div>
      ) : (
        <textarea
          onChange={(e) => setStatus(e.currentTarget.value)}
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