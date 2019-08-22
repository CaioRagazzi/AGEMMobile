import React from "react";
import { View, ActivityIndicator, StyleSheet } from 'react-native';

const LoadingScreen = props => {

    setTimeout(function(){ props.navigation.navigate('SignIn') }, 3000);    

    return (
        <View style={styles.loginScreenContainer}>
            <View style={styles.loginFormView}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    loginScreenContainer: {
        flex: 1
    },
    loginFormView: {
        flex: 1,
        justifyContent: "center",
        alignContent: "center"
    }
})

export default LoadingScreen;
