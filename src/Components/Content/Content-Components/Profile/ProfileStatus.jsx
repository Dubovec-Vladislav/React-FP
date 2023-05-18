import React from 'react'
// import './React.css'

class ProfileStatus extends React.Component {
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status,
            });
        }
    };

    state = {
        editMode: false,
        status: this.props.status,
    };

    activateEditMode = () => {
        this.setState({ editMode: true });
    };

    deactivateEditMode = () => {
        this.setState({ editMode: false });
        this.props.updateUserStatus(this.state.status);
    };

    onStatusChange = (e) => {
        this.setState({ status: e.currentTarget.value });
    };

    render() {
        return (
            <div className="status__block">
                {!this.state.editMode
                    ?
                    <div onDoubleClick={this.activateEditMode}>{this.props.status || "-----"}</div>
                    :
                    <textarea onChange={this.onStatusChange} onBlur={this.deactivateEditMode} value={this.state.status} type="text" autoFocus rows="5" cols="100" />
                }
            </div>
        );
    }
};

export default ProfileStatus;