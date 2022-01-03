import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import _ from "lodash";
import React from "react";
import useViews from "../views";
import useControllers from '../controllers';

const Stack = createNativeStackNavigator();

const Routes = () => {
    const {
        Home,
        Register,
        Login,
        Politica,
        Welcome
    } = useViews();

    const { useScreenHooks } = useControllers();
    const { useWelcome } = useScreenHooks();
    const { login } = useWelcome();
    const { user } = login;

    const routes = [
        {
            name: "Home",
            component: Home
        },
        {
            name: "Register",
            component: Register
        },
        {
            name: "Login",
            component: Login
        },
        {
            name: "Politica",
            component: Politica
        },
        {
            name: "Welcome",
            component: Welcome
        }
    ]

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={ login.token !== "" ? "Welcome" : "Home" }>
                {
                    _.map(routes, (item: any, index: number) => {
                        return (
                            <Stack.Screen
                                key={index}
                                name={item.name}
                                component={item.component}
                            />
                        )
                    })
                }
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;