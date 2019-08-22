import React, { Component } from "react";
import { useNetInfo } from "@react-native-community/netinfo";

import styles from "./style";
import { Keyboard, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

const LoginScreen = props => {

  const onLoginPress = () => {
    props.navigation.navigate('Home')
  }

  const netInfo = useNetInfo();

  const textWarning = <Text style={styles.textWarning}> Sem conexão com a Internet </Text>
  const textOk = <Text style={styles.textOk}> Conectado a Internet </Text>

  return (
    <KeyboardAvoidingView style={styles.containerView} behavior="padding">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.loginScreenContainer}>
          <View style={styles.loginFormView}>
            <Text style={styles.logoText}>AGEM</Text>
            <TextInput placeholder="Cpf" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />
            <TextInput placeholder="Senha" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} secureTextEntry={true} />
            <Button
              disabled={netInfo.isConnected ? false : true}
              buttonStyle={styles.loginButton}
              onPress={() => onLoginPress()}
              title="Acessar"
            />
          </View>
          {netInfo.isConnected ? textOk : textWarning}
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );

}

export default LoginScreen;
