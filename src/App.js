import './App.css';
import React, {useContext} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from "react-router-dom";
import Login from "./pages/Login";
import {AuthContext, AuthProvider} from "./context/AuthContext";
import Home from "./pages/Home";
import AppShell from "./AppShell";
import Dashboard from "./pages/Dashboard";


const UnauthenticatedRoutes = () => (
    <Switch>
        <Route path="/login">
            <Login/>
        </Route>
        <Route exact path="/">
            <Home/>
        </Route>
    </Switch>
)

const AuthenticatedRoutes = ({children, ...rest}) => {
    const auth = useContext(AuthContext);

    return (
        <Route {...rest}
               render={() =>
                   auth.isAuthenticated() ? (
                       <AppShell>{children}</AppShell>
                   ) : (
                       <Redirect to="/"/>
                   )
               }
        >
        </Route>
    )
}

const AppRoutes = () => {
    return (
        <>
            <Switch>
                <AuthenticatedRoutes path="/dashboard">
                    <Dashboard/>
                </AuthenticatedRoutes>
                <UnauthenticatedRoutes/>
            </Switch>
        </>
    )
}

function App() {
    return (
        <Router>
            <AuthProvider>
                <div className="bg-gray-100">
                    <AppRoutes/>
                </div>
            </AuthProvider>
        </Router>
    );
}

export default App;
