import {
  Button,
  Center,
  Image,
  ScrollView,
  Text,
  View,
} from 'native-base';
import React, {FC} from 'react';
import {Dimensions} from 'react-native';
import {Col, Grid} from 'react-native-easy-grid';
import {justifyContent} from 'styled-system';
import useComponents from '../../components';
import useControllers from '../../controllers';
import LoginStyles from './login.style';

const Login: FC<{navigation: any}> = ({navigation}) => {
  // Components
  const {Inputs} = useComponents();
  const {BasicInput} = Inputs;

  // Controllers
  const {useScreenHooks} = useControllers();
  const {useRegister, useLogin} = useScreenHooks();

  const {control, handleLogin, handleSubmit} = useLogin(navigation);

  return (
    <ScrollView>
      <Image
        source={require('../../assets/images/Group.png')}
        style={{
          width: '100%',
          height: Dimensions.get('screen').height,
          flex: 1,
          resizeMode: 'stretch',
        }}
        alt="register"
      />
      <View style={LoginStyles.view}>
        <Center style={LoginStyles.title}>
          <Text style={LoginStyles.title_text}>Iniciar sesión</Text>
        </Center>
        <Col style={LoginStyles.containerInput}>
          <BasicInput
            control={control}
            label="Nombre y Apellido"
            name="fullname"
            placeholder=""
            rules={{}}
          />
          <Center style={LoginStyles.container_button}>
            <Button
              style={LoginStyles.button}
              onPress={handleSubmit(handleLogin)}>
              <Text style={LoginStyles.button_text}>{'Continuar >'}</Text>
            </Button>
            <Button
              style={[LoginStyles.button, { marginTop: '5%' }]}
              onPress={() => navigation.navigate('Home')}>
              <Text style={LoginStyles.button_text}>{' < Regresar '}</Text>
            </Button>
          </Center>
        </Col>
      </View>   
    </ScrollView>
  );
};

export default Login;
