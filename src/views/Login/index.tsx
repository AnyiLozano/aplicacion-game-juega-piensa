import { Alert, Box, Button, Center, CloseIcon, HStack, IconButton, Image, InputLeftAddon, Row, ScrollView, SimpleGrid, Stack, Text, View, VStack } from "native-base";
import React, { FC } from "react";
import { Col, Grid } from "react-native-easy-grid";
import { justifyContent } from "styled-system";
import useComponents from '../../components';
import useControllers from '../../controllers';
import LoginStyles from './login.style';

const Login: FC<{ navigation: any }> = ({ navigation }) => {
    // Components
    const { Inputs } = useComponents();
    const { BasicInput } = Inputs;

    // Controllers
    const { useScreenHooks } = useControllers();
    const { useRegister, useLogin } = useScreenHooks();
    const {
        isValid,
        isError,
        setShowAlert,
        showAlert,
        subtitleAlert,
        titleAlert
    } = useRegister({ navigation });

    const {
        control,
        handleLogin,
        handleSubmit
    } = useLogin(navigation);

    return (
        <ScrollView>
            <Image source={require('../../assets/images/Group.png')} style={{ width: "100%", flex: 1, resizeMode: 'stretch' }} alt="register" />
            <View style={LoginStyles.view}>
                <Center style={LoginStyles.title}>
                    <Text style={LoginStyles.title_text}>Iniciar sesión</Text>
                </Center>
                <Col style={LoginStyles.containerInput}>
                    <BasicInput
                        control={control}
                        label="Nombres & Apellidos"
                        name="fullname"
                        placeholder=""
                        rules={{}}
                    />
                    <Center style={LoginStyles.container_button}>
                        <Button
                            style={LoginStyles.button}
                            onPress={handleSubmit(handleLogin)}
                        >
                            <Text style={LoginStyles.button_text}>{"Continuar >"}</Text>
                        </Button>
                    </Center>
                </Col>

                {/* <Col style={{ width: '50%', display: 'flex', justifyContent: 'center' }}>
                    <Center>
                        <BasicInput
                            control={control}
                            label="Nombres & apellidos"
                            name="fullname"
                            placeholder=""
                            rules={{}}
                        />
                    </Center>
                </Col>
                <Center style={RegisterStyles.container_button}>
                    <Button
                        style={RegisterStyles.button}
                        onPress={handleSubmit(handleLogin)}
                        disabled={!isValid}
                    >
                        <Text style={RegisterStyles.button_text}>{"Continuar >"}</Text>
                    </Button>
                </Center>
                {
                    showAlert && (
                        <Stack space={3} w="100%" position="absolute" style={{ bottom: '0%' }}>
                            <Alert w="100%" status={isError ? "error" : "success"}>
                                <VStack space={1} flexShrink={1} w="100%" alignItems="center">
                                    <Alert.Icon size="md" />
                                    <Text
                                        fontSize="md"
                                        fontWeight="medium"
                                        _dark={{
                                            color: "coolGray.800",
                                        }}
                                    >
                                        {titleAlert}
                                    </Text>

                                    <Box
                                        _text={{
                                            textAlign: "center",
                                        }}
                                        _dark={{
                                            _text: {
                                                color: "coolGray.600",
                                            },
                                        }}
                                    >
                                        {subtitleAlert}
                                    </Box>
                                    {
                                        !isError && (
                                            <Center>
                                                <Button
                                                    onPress={() => {
                                                        setShowAlert(false);
                                                        navigation.navigate('Login')
                                                    }}
                                                    style={RegisterStyles.login_button}
                                                >
                                                    <Text style={RegisterStyles.text_button_login}>Ingresar Ahora</Text>
                                                </Button>
                                            </Center>
                                        )
                                    }
                                </VStack>
                            </Alert>
                        </Stack>
                    )
                } */}
            </View>
        </ScrollView>
    );
}

export default Login;