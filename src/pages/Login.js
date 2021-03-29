import React, {useState, useContext} from 'react';
import {Redirect} from 'react-router-dom';
import Hyperlink from "../common/Hyperlink";
import {Form, Formik} from "formik";
import * as Yup from 'yup';
import FormSuccess from "../components/FormSuccess";
import FormError from "../components/FormError";
import Label from "../common/Label";
import FormInput from "../components/FormImput";
import GradientButton from "../common/GradientButton";
import {publicFetch} from "../utils/fetch";
import {AuthContext} from "../context/AuthContext";


const LoginSchema = Yup.object().shape({
    email: Yup.string().required('Email is required'),
    password: Yup.string().required('Password is required')
});

const Login = () => {
    const authContext = useContext(AuthContext);
    const [loginSuccess, setLoginSuccess] = useState();
    const [loginError, setLoginError] = useState();
    const [redirectOnLogin, setRedirectOnLogin] = useState(false);
    const [loginLoading, setLoginLoading] = useState(false);


    const submitCredentials = async credentials => {
        console.log(credentials, 'credentiale login');
        try {
            setLoginLoading(true);
            const {data} = await publicFetch.post(`v1/auth/login`, credentials);
            console.log(data, 'data from login');
            authContext.setAuthState(data);
            setLoginSuccess(true);
            setLoginError(null);
            setTimeout(() => {
                setRedirectOnLogin(true);
            }, 900);
        } catch (error) {
            setLoginLoading(false);
            const {data} = error.response;
            setLoginError(data.message);
            setLoginSuccess(null)
        }
    }


    return (
        <>
            {redirectOnLogin && <Redirect to="/dashboard"/>}
            <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full">
                    <div>
                        <h2 className="mb-2 text-center text-3xl leading-9 font-extrabold text-gray-900">
                            Log in in your account
                        </h2>
                        <p className="text-gray-600 text-center">
                            Don't have an account?
                            <Hyperlink to="signup"
                                       text="Sin up now"/>
                        </p>
                    </div>

                    <Formik initialValues={{
                        email: '',
                        password: ''
                    }} onSubmit={values =>
                        submitCredentials(values)
                    }
                            validationSchema={LoginSchema}
                    >
                        {() => (
                            <Form className="mt-8">
                                {loginSuccess && (
                                    <FormSuccess text={loginSuccess}/>
                                )}
                                {loginError && (
                                    <FormError text={loginError}/>
                                )}
                                <div>
                                    <div className="mb-2">
                                        <div className="mb-1">
                                            <Label text="Email"/>
                                        </div>
                                        <FormInput
                                            ariaLabel="Email"
                                            name="email"
                                            type="text"
                                            placeholder="Email"
                                        />
                                    </div>
                                    <div>
                                        <div className="mb-1">
                                            <Label text="Password"/>
                                        </div>
                                        <FormInput
                                            ariaLabel="Password"
                                            name="password"
                                            type="password"
                                            placeholder="Password"
                                        />
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <GradientButton
                                        type="submit"
                                        text="Log in"
                                        loading={loginLoading}
                                    />
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </>
    )
}

export default Login;

