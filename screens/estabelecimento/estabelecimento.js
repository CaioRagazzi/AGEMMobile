import React from 'react'
import { View, StyleSheet, Platform } from "react-native";
import RNPickerSelect from 'react-native-picker-select';
import { Button } from 'react-native-elements';

const EstabelecimentoSelecttScreen = props => {

    return (
        <View style={styles.loginScreenContainer}>
            <View style={ Platform.OS == 'ios' ? {height: 30} : '' }>
                <RNPickerSelect
                    onValueChange={(value) => console.log(value)}
                    items={[
                        { label: 'Football', value: 'football' },
                        { label: 'Baseball', value: 'baseball' },
                        { label: 'Hockey', value: 'hockey' },
                    ]}
                />
            </View>
            <Button
                onPress={() => console.log('teste')}
                title="Próximo"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    loginScreenContainer: {
        flex: 1,
        justifyContent: 'center'
    },
})

export default EstabelecimentoSelecttScreen

