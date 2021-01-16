import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Login, HomePage, SearchPage } from './pages'
import { SearchInput } from './components'
const Stack = createStackNavigator()

function Router() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login" >
                <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="HomePage" component={HomePage} options={{ headerShown: false }} />
                <Stack.Screen name="SearchPage" component={SearchPage} options={{ headerTitle: props => <SearchInput />, headerStyle: { backgroundColor: "#f2f2f2" } }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router