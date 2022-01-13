import { Button, Center, Image, View } from "native-base";
import React, { FC } from "react";
import { IAlertProps } from "../../models/interfaces/components/Alert";
import AlertStyles from './Alert.style';
import alertFiles from "./AlertFiles";

const Alert: FC<IAlertProps> = (props): JSX.Element => {
    const {
        type,
        level,
        question,
        show,
        navigation,
        view
    } = props;

    const questionFile: any = alertFiles.find((item: any) => item.level === level && item.question === question);

    if (type === "success") {
        return (
            <View style={AlertStyles.view}>
                <Button onPress={() => navigation.navigate(view)} style={[AlertStyles.button, { display: show ? "flex" : "none" }]}>
                    <Image
                        source={require("../../assets/images/AlertBackground.png")}
                        alt="Background Alert"
                        style={AlertStyles.background}
                    />
                    <Center style={AlertStyles.image}> 
                        <Image
                            source={questionFile.type[type]}
                            alt="Time Out Alert"
                        />
                    </Center>
                </Button>
            </View>
        )
    } else if (type === "error") {
        return (
            <View style={AlertStyles.view}>
                <Button onPress={() => navigation.navigate(view)} style={[AlertStyles.button, { display: show ? "flex" : "none" }]}>
                    <Image
                        source={require("../../assets/images/AlertBackground.png")}
                        alt="Background Alert"
                        style={AlertStyles.background}
                    />
                    <Center style={AlertStyles.image}> 
                        <Image
                            source={questionFile.type[type]}
                            alt="Time Out Alert"
                        />
                    </Center>
                </Button>
            </View>
        )
    } else {
        return (
            <View style={AlertStyles.view}>
                <Button onPress={() => navigation.navigate(view)} style={[AlertStyles.button, { display: show ? "flex" : "none" }]}>
                    <Image
                        source={require("../../assets/images/AlertBackground.png")}
                        alt="Background Alert"
                        style={AlertStyles.background}
                    />
                    <Center style={AlertStyles.image}> 
                        <Image
                            source={questionFile.type[type]}
                            alt="Time Out Alert"
                        />
                    </Center>
                </Button>
            </View>
        )
    }
}

export default Alert;