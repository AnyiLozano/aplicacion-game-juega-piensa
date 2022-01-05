import { lazy } from "react";


const Home = lazy(() => import('./Home'));
const Register = lazy(() => import('./Register'));
const Login = lazy(() => import('./Login'));
const Politica = lazy(() => import('./Politica')); 
const Welcome = lazy(() => import('./Welcome')); 
const Settings = lazy(() => import('./settings')); 
const Instructions = lazy(() => import('./Instructions')); 
const Instructions2 = lazy(() => import('./Instructions2')); 
const Instructions3 = lazy(() => import('./Instructions3')); 
const Level1 = lazy(() => import('./Level1')); 

const useViews = () => {
    return {
        Home,
        Register,
        Login,
        Politica,
        Welcome,
        Settings,
        Instructions,
        Instructions2,
        Instructions3,
        Level1,
    };
};

export default useViews;