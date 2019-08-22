import React from "react";
import { View, StyleSheet, Button } from 'react-native';

const TesteScreen = props => {    
    return (
        <View style={styles.Container}>
            <Button title="vai pra 2" onPress={() => {props.navigation.navigate('Teste2')}} />
        </View>
    );
}

TesteScreen.navigationOptions = () => {
    return {
        headerTitle: 'Teste'
    }
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        justifyContent: "center",
        alignContent: "center"
    }
})

export default TesteScreen;
