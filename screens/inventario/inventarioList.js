import React from "react";
import { View } from 'react-native';
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../../components/headerButton";

const InventarioListScreen = props => {
    return (
        <View>

        </View>
    );
}

InventarioListScreen.navigationOptions = ({ navigation }) => {
    return {
        headerTitle: 'Lista de Inventário',
        headerLeft: (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item title="Menu" iconName="ios-arrow-back" onPress={() => { navigation.goBack() }} />
            </HeaderButtons>
        )

    }
}

export default InventarioListScreen;