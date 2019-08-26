import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Button } from 'react-native-elements';

const HomeScreen = props => {
    return (
        <View style={styles.container}>
            <View style={{ padding: 10 }}>
                <Button
                    title="Inventário"
                    raised
                    type='outline'
                    buttonStyle={{ width: 150, height: 100 }}
                    onPress={() => props.navigation.navigate('InventarioList')}
                />
            </View>
        </View>
    );
}

HomeScreen.navigationOptions = () => {
    return {
        headerTitle: 'Home'
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default HomeScreen;
