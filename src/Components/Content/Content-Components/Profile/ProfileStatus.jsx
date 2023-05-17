import React from 'react'
// import './React.css'

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
    };

    activateEditMode = () => {
        this.setState({ editMode: true });
    };

    deactivateEditMode = () => {
        this.setState({ editMode: false });
    };

    // newStatus = React.createRef();

    render() {
        return (
            <div className="status__block">
                {!this.state.editMode
                    ?
                    <div onDoubleClick={this.activateEditMode}>{this.props.status}</div>
                    :
                    <input onBlur={this.deactivateEditMode} value={this.props.status} type="text" autoFocus />
                    // <input type="text" value={this.props.status} ref={newStatus} onChange={() => this.props.setUserStatus(this.newStatus.current.value)} />
                }
            </div>
        );
    }
};

export default ProfileStatus;