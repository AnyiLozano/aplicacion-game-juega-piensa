import { lazy } from "react";


const Home = lazy(() => import('./Home'));
const Register = lazy(() => import('./Register'));
const Login = lazy(() => import('./Login'));
const Politica = lazy(() => import('./Politica')); 
const Welcome = lazy(() => import('./Welcome')); 

const useViews = () => {
    return {
        Home,
        Register,
        Login,
        Politica,
        Welcome
    };
};

export default useViews;