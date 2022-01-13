import useControllers from "../../controllers";
import { Button, Center, HStack, Image, Stack, Text, View } from "native-base";
import React, { FC } from "react";
import FelicidadesN3Styles from './felicidades3.style';
import useComponents from '../../components/index';


const FelicidadesN3: FC<{ navigation: any }> = ({ navigation }) => {
    const redirect = (): void => {
        navigation.navigate('Home');
    }

    const redirectLogin = (): void => {
        navigation.navigate('Login');
    }

    // Controller
    const { useScreenHooks } = useControllers();
    const { useWelcome } = useScreenHooks();
    const { login } = useWelcome(redirect, redirectLogin);
    const { user } = login;

    // Components
    const { Navigation } = useComponents();

    return (
        <React.Fragment>
            <Image
                source={require('../../assets/images/polity2.png')}
                alt="Welcome's Background"
                style={{ width: "100%", flex: 1, resizeMode: 'stretch' }}
            />
            <View style={FelicidadesN3Styles.view}>
                <Stack style={FelicidadesN3Styles.titleContent}>
                    <HStack display="flex" justifyContent="space-between">
                        <View>
                            <Image
                                source={require('../../assets/images/felicidades.png')}
                                alt="Welcome's Image"
                            />
                            <Image
                                source={require('../../assets/images/exitosa.png')}
                                alt="Welcome's Image"
                                style={{ marginTop: '-13%', marginLeft: '28%' }}
                            />
                        </View>
                    </HStack>
                </Stack>
                <Stack style={FelicidadesN3Styles.tabsContent}>
                    <HStack display="flex" justifyContent="center">
                        <View>
                            <Button variant="unstyled" onPress={() => navigation.navigate('Level3')}>
                                <Image
                                    source={require('../../assets/images/volverjugar.png')}
                                    alt="Welcome's Image"
                                    style={{ marginTop: '50%' }}
                                />
                            </Button>
                        </View>
                        <View>
                            <Button variant="unstyled" onPress={() => navigation.navigate('Instrucciones1')}>
                                <Image
                                    source={require('../../assets/images/nivel3final.png')}
                                    alt="Welcome's Image"
                                    style={{ marginTop: '38%' }}
                                />
                            </Button>
                        </View>
                    </HStack>
                </Stack>
            </View>
            <Navigation navigation={navigation}/>
        </React.Fragment>
    );
}

export default FelicidadesN3;



