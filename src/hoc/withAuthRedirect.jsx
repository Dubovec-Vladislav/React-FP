import React from 'react'
import { connect } from 'react-redux';
import { useNavigate } from "react-router-dom"

function mapStateToPropsForRedirect(state) {
    return {
        isAuth: state.auth.isAuth,
    };
};

function withAuthRedirect(Component) {
    function RedirectComponent(props) {
        const navigate = useNavigate();
        React.useEffect(() => {
            if (!props.isAuth) navigate('/login');
        });
        if (props.isAuth) return <Component {...props} />
    }

    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);

    return ConnectedAuthRedirectComponent;
};

export default withAuthRedirect;