import React, { useState, useEffect } from "react";
import { useNetInfo } from "@react-native-community/netinfo";
import Toast from 'react-native-root-toast';
import axios from 'axios';
import styles from "./style";
import { Keyboard, Text, View, TextInput, TouchableWithoutFeedback, KeyboardAvoidingView, AsyncStorage } from 'react-native';
import { Button } from 'react-native-elements';

const LoginScreen = props => {

  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setisLoading] = useState(false)

  useEffect(() => { chekIfLogged() }, []);

  const chekIfLogged = async () => {
    const tokenString = await AsyncStorage.getItem('token')
    if (tokenString){
      props.navigation.navigate('EstabelecimentoSelect')
    }    
  }

  const onLoginPress = async () => {
    Keyboard.dismiss()
    setisLoading(true)

    axios.post('https://jithub.firebaseapp.com/api/user/login',
      {
        cpf: login,
        password: password
      }
    )
      .then(async response => {
        if (response.status == 200) {
          await AsyncStorage.setItem('user', response.data.user.cpf);
          await AsyncStorage.setItem('token', response.data.token);
          setisLoading(false)
          props.navigation.navigate('EstabelecimentoSelect')
        }
      })
      .catch(err => {
        Toast.show('Login e/ou senha inválidos!', {
          duration: Toast.durations.LONG,
          position: 50,
          shadow: true,
          animation: true,
          hideOnPress: true,
          delay: 0,
          backgroundColor: '#ff0000'
        });
        setisLoading(false)
      })
  }

  const netInfo = useNetInfo();

  const textWarning = <Text style={styles.textWarning}> Sem conexão com a Internet </Text>
  const textOk = <Text style={styles.textOk}> Conectado a Internet </Text>

  return (

    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.loginScreenContainer}>
        <View style={styles.loginFormView}>
          <Text style={styles.logoText}>AGEM</Text>
          <KeyboardAvoidingView style={styles.containerView} behavior="padding">
            <TextInput placeholder="Cpf" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} value={login} onChangeText={setLogin} />
            <TextInput placeholder="Senha" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} secureTextEntry={true} value={password} onChangeText={setPassword} />
              <Button
                disabled={netInfo.isConnected ? false : true}
                buttonStyle={styles.loginButton}
                onPress={() => onLoginPress()}
                loading={isLoading}
                title="Acessar"
              />
          </KeyboardAvoidingView>
        </View>
        {netInfo.isConnected ? textOk : textWarning}
      </View>
    </TouchableWithoutFeedback >
  );

}

export default LoginScreen;
