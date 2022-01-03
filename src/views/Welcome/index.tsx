import useControllers from "../../controllers";
import { Center, Image, Text, View } from "native-base";
import React, { FC } from "react";
import WelcomeStyles from './welcome.style';

const Welcome : FC<{navigation: any}> = ({navigation}) => {
    const redirect = () : void => {
        navigation.navigate('Home');
    }

    const redirectLogin = () : void => {
        navigation.navigate('Login');
    }

    // Controller
    const { useScreenHooks } = useControllers();
    const { useWelcome } = useScreenHooks();
    const { login, handleLogout } = useWelcome(redirect, redirectLogin);
    const { user } = login;

    return (
        <React.Fragment>
            <Image
                source={require('../../assets/images/Group.png')}
                alt="Welcome's Background"
                style={{ width: "100%", flex: 1, resizeMode: 'stretch' }}
            />
            <View style={WelcomeStyles.view}>
                <Center style={WelcomeStyles.title}>
                    <Text style={WelcomeStyles.title_text}>Bienvenido</Text>
                </Center>
                <Center style={WelcomeStyles.title}>
                    <Text style={WelcomeStyles.title_text}>{user?.fullname}</Text>
                </Center>
                <Center style={WelcomeStyles.title}>
                    <Text style={WelcomeStyles.title_text} onPress={handleLogout}>Cerrar Sesion</Text>
                </Center>
            </View>
        </React.Fragment>
    );
}

export default Welcome;
