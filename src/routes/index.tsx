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
        Welcome,
        Settings,
        Instructions2,
        Instructions3,
        Instructions,
        Level1
    } = useViews();

    const { useScreenHooks } = useControllers();
    const { useWelcome } = useScreenHooks();
    const { login } = useWelcome();

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
        },
        {
            name: "Settings",
            component: Settings
        },
        {
            name: "Instructions",
            component: Instructions
        },
        {
            name: "Instructions2",
            component: Instructions2
        },
        {
            name: "Instructions3",
            component: Instructions3
        },
        {
            name: "Level1",
            component: Level1
        },
    ]

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={login.token !== "" ? "Welcome" : "Home"}>
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