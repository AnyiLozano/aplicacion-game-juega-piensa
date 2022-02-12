import { Button, Center, HStack, Image, Stack, View } from "native-base";
import React, { FC, useCallback, useEffect, useState } from "react";
import useComponents from '../../components/index';
import Conteo1Styles from "./Conteo1.style";

const Conteo1: FC<{ navigation: any }> = ({ navigation }) => {
    // States
    const [showTree, setShowTree] = useState<boolean>(false);
    const [showTwo, setShowTwo] = useState<boolean>(false);
    const [showOne, setShowOne] = useState<boolean>(false);

    // Lets
    const Sound = require('react-native-sound');
    let step: number = 1;
    let CronometerSound = require('../../assets/audio/inciar-3-2-1.mp3');


    // Constants
    const changeSteps = useCallback(() => {
        const i = setInterval(() => {
            if (step === 1) {
                let launchConometerSound = new Sound(CronometerSound, (error: boolean) => {
                    if(!error){
                        launchConometerSound.play();
                    }else{
                        console.log('No se pudo cargar el audio');
                    }
                });
                setShowTree(true);
                step++;
            } else if (step === 2) {
                setShowTwo(true);
                step++;
            } else if (step === 3) {
                setShowOne(true);
                step++;
            } else {
                clearInterval(i);
                navigation.navigate("Vamos1");
            }
        }, 1000)
    }, [step]);

    // Effects
    useEffect(() => {
        changeSteps();
    }, [changeSteps]);

    // Components
    const { Navigation } = useComponents();

    return (
        <React.Fragment>
            <Image
                source={require('../../assets/images/conteo.png')}
                alt="Welcome's Background"
                style={{ width: "100%", flex: 1, resizeMode: 'stretch' }}
            />
            <View style={Conteo1Styles.view}>
                <Stack style={Conteo1Styles.tabsContent}>
                    <HStack display="flex" justifyContent="center">
                    <View>
                            {
                                showTree && (
                                    <Button variant="unstyled">
                                        <Image
                                            source={require('../../assets/images/tres.png')}
                                            alt="Welcome's Image"
                                            style={{ marginTop: '55%' }}
                                        />
                                    </Button>
                                )
                            }
                        </View>
                        <View>
                            {
                                showTwo && (
                                    <Button variant="unstyled">
                                        <Image
                                            source={require('../../assets/images/dos.png')}
                                            alt="Welcome's Image"
                                            style={{ marginTop: '59%' }}
                                        />
                                    </Button>
                                )
                            }
                        </View>
                        <View>
                            {
                                showOne && (
                                    <Button variant="unstyled">
                                        <Image
                                            source={require('../../assets/images/uno.png')}
                                            alt="Welcome's Image"
                                            style={{ marginTop: '59%' }}
                                        />
                                    </Button>
                                )
                            }
                        </View>
                    </HStack>
                </Stack>
            </View>
            <Navigation/>
        </React.Fragment>
    );
}

export default Conteo1;