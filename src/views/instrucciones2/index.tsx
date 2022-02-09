import { Button, Center, Image, Stack, Text, View } from "native-base";
import React, { FC } from "react";
import useComponents from "../../components";
import useControllers from "../../controllers";
import { IGeneralProps } from "../../models/interfaces/general";
import Instrucciones22Styles from './instruciones22.style';

const Instrucciones2: FC<IGeneralProps> = (props) => {

    // Components
    const { Navigation } = useComponents();

    // Controller
    const { useScreenHooks } = useControllers();
    const { useWelcome } = useScreenHooks();
    const { user, navigation } = useWelcome();

    return (
        <React.Fragment>
            <Image
                source={require('../../assets/images/politicas.png')}
                alt="Welcome's Background"
                style={{ width: "100%", flex: 1, resizeMode: 'stretch' }}
            />
            <View style={Instrucciones22Styles.view}>
                <Button 
                    style={Instrucciones22Styles.subContent} 
                    variant="unstyled"
                    onPress={() => navigation.navigate('Level3')}
                >
                    <Image
                        source={require('../../assets/images/manos.png')}
                        alt="Welcome's Background"
                        style={{}}
                    />
                </Button>
            </View>
            <Navigation page="instructions" />
        </React.Fragment>
    );
}

export default Instrucciones2;  