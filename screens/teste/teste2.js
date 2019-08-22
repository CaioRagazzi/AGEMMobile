import React from "react";
import { View, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../../components/headerButton";

const Teste2Screen = props => {
    return (
        <View style={styles.Container}>

        </View>
    );
}

Teste2Screen.navigationOptions = ({ navigation }) => {
    return {
        headerTitle: 'Teste 2',
        headerLeft:
            (
                <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                    <Item title="Voltar" iconName="ios-arrow-round-back" onPress={() => { navigation.goBack() }} />
                </HeaderButtons>
            )
    }
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        justifyContent: "center",
        alignContent: "center"
    }
})

export default Teste2Screen;
