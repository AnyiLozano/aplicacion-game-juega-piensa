import useControllers from "../../controllers";
import { Button, Center, HStack, Image, Stack, Text, View } from "native-base";
import React, { FC } from "react";
import FelicidadesN1Styles from './felicidades.style'
import useComponents from '../../components/index';

const FelicidadesN1: FC<{ navigation: any }> = ({ navigation }) => {
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
            <View style={FelicidadesN1Styles.view}>
                <Stack style={FelicidadesN1Styles.titleContent}>
                    <HStack display="flex" justifyContent="space-between">
                        <View>
                            <Image
                                source={require('../../assets/images/felicidades.png')}
                                alt="Welcome's Image"
                            />
                            <Image
                                source={require('../../assets/images/felicidadtext.png')}
                                alt="Welcome's Image"
                                style={{ marginTop: '-14%', marginLeft: '30%' }}
                            />
                        </View>
                    </HStack>
                </Stack>
                <Stack style={FelicidadesN1Styles.tabsContent}>
                    <HStack display="flex" justifyContent="center">
                        <View>
                            <Button variant="unstyled" onPress={() => navigation.navigate('Level1')}>
                                <Image
                                    source={require('../../assets/images/volverjugar.png')}
                                    alt="Welcome's Image"
                                    style={{ marginTop: '22%' }}
                                />
                            </Button>
                        </View>
                        <View>
                            <Button variant="unstyled" onPress={() => { }}>
                                <Image
                                    source={require('../../assets/images/nivel1.png')}
                                    alt="Welcome's Image"
                                />
                            </Button>
                        </View>
                        <View>
                            <Button variant="unstyled" onPress={() => navigation.navigate('Instruciones2')}>
                                <Image
                                    source={require('../../assets/images/nivel2.png')}
                                    alt="Welcome's Image"
                                    style={{ marginTop: '13%' }}
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

export default FelicidadesN1;



