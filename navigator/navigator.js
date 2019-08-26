import React from 'react'
import { createSwitchNavigator, createStackNavigator, createAppContainer, createDrawerNavigator } from 'react-navigation';
import LoginScreen from "../screens/login/login";
import LoadingScreen from "../screens/loading/loading";
import HomeScreen from "../screens/home/homeScreen";
import InventarioListScreen from "../screens/inventario/inventarioList";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/headerButton";
import { AsyncStorage } from "react-native";

const AuthStack = createStackNavigator(
    {
        SignIn: {
            screen: LoginScreen
        },
    },
    {
        defaultNavigationOptions: {
            header: null
        }
    }
)

const AppStack = createStackNavigator({
    Home: {
        screen: HomeScreen
    },
    InventarioList: {
        screen: InventarioListScreen
    }
},
    {
        defaultNavigationOptions: ({ navigation }) => {
            return {
                headerRight:
                    (
                        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                            <Item title="teste" iconName="ios-log-out" onPress={() => {
                                AsyncStorage.clear()
                                navigation.navigate('SignIn')
                            }}
                            />
                        </HeaderButtons>
                    ),
                headerLeft:
                    (
                        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                            <Item title="Menu" iconName="ios-menu" onPress={() => { navigation.toggleDrawer(); }} />
                        </HeaderButtons>
                    )
            }
        }
    })

const DrawerStack = createDrawerNavigator({
    App: AppStack
}
);

const MainSwitchNavigator = createSwitchNavigator({
    Auth: AuthStack,
    App: DrawerStack
});


export default createAppContainer(MainSwitchNavigator)