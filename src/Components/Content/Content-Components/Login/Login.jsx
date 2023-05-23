import React from 'react'
// import './React.css'
import { Form, Field, } from 'react-final-form'
import style from './Login.module.css'
import { connect } from 'react-redux';
import { loginMe, logoutMe } from '../../../../redux/auth-reducer'

function Login(props) {
    return (
        <div className="login__block">
            {props.errorMessage}
            <div className={style.title}>Login</div>
            <LoginForm loginMe={props.loginMe} />
            <button onClick={props.logoutMe}>Exit</button>
        </div>
    );
};

function LoginForm(props) {

    const initialData = {
        // firstName: 'Vlad',
        // bio: 'Vvvvv',
        // phone: 12345,
    };

    const onSubmit = (values) => {
        props.loginMe(values.email, values.password, values.rememberMe);
        // window.alert(JSON.stringify(values, 0, 2));
    };

    const validate = (values) => {
        const errors = {};

        if (!values.email) {
            errors.email = 'Please input your email';
        };

        if (!values.password) {
            errors.password = 'Please input your password';
        };

        // if (values.bio && values.bio.length < 5) {
        //     errors.bio = 'Too short';
        // };

        // if (values.phone && values.phone.length < 5) {
        //     errors.phone = 'Too short';
        // };

        // if (values.rememberMe !== true) {
        //     errors.rememberMe = 'Check';
        // };

        return errors;
    };

    return (
        <Form
            onSubmit={onSubmit}
            validate={validate}
            initialValues={initialData}
            render={({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                    <div className={style.item}>
                        <Field name="email" type="email">
                            {({ input, meta }) => (
                                <>
                                    <label className={style.label}>Email</label>
                                    <input className={meta.touched && meta.error ? `${style.input} + ${style.touched}` : style.input} type="email" {...input} placeholder="Email" />
                                    {meta.touched && meta.error && <span className={style.error}>{meta.error}</span>}
                                </>
                            )}
                        </Field>
                    </div>
                    <div className={style.item}>
                        <Field name="password" type="password">
                            {({ input, meta }) => (
                                <>
                                    <label className={style.label}>Password</label>
                                    <input className={meta.touched && meta.error ? `${style.input} + ${style.touched}` : style.input} type="password" {...input} placeholder="Password" />
                                    {meta.touched && meta.error && <span className={style.error}>{meta.error}</span>}
                                </>
                            )}
                        </Field>
                    </div>
                    <div className={style.item}>
                        <Field name="rememberMe" type="checkbox">
                            {({ input, meta }) => (
                                <>
                                    <label className={style.label}>Remember me</label>
                                    <input className={style.input} type="checkbox" {...input} />
                                    {meta.touched && meta.error && <span>{meta.error}</span>}
                                </>
                            )}
                        </Field>
                    </div>
                    {/* <div className={style.item}>
                        <Field name="captcha" type="checkbox">
                            {({ input, meta }) => (
                                <>
                                    <label className={style.label}>Captcha</label>
                                    <input className={style.input} type="checkbox" {...input} />
                                    {meta.touched && meta.error && <span>{meta.error}</span>}
                                </>
                            )}
                        </Field>
                    </div>
                    <div>
                        <Field name="bio">
                            {({ input, meta }) => (
                                <div>
                                    <label>Bio</label>
                                    <textarea {...input} />
                                    {meta.touched && meta.error && <span>{meta.error}</span>}
                                </div>
                            )}
                        </Field>
                    </div>
                    <div>
                        <Field name="phone">
                            {({ input, meta }) => (
                                <div>
                                    <label>Phone</label>
                                    <input type="text" {...input} placeholder="Phone" />
                                    {meta.touched && meta.error && <span>{meta.error}</span>}
                                </div>
                            )}
                        </Field>
                    </div>
                    <div>
                        <Field name="rememberMe">
                            {({ input, meta }) => (
                                <div>
                                    <label>rememberMe</label>
                                    <input type="checkbox" {...input} />
                                    {meta.touched && meta.error && <span>{meta.error}</span>}
                                </div>
                            )}
                        </Field>
                    </div> */}
                    <button type="submit">Submit</button>
                </form>
            )}
        />
    );
}

function mapStateToProps(state) {
    return {
        errorMessage: state.auth.errorMessage,
    }
}

export default connect(mapStateToProps, { loginMe, logoutMe, })(Login);