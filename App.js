// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, ListProduct, TentangKami } from './pages'

const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen
                    name="ListProduct"
                    component={ListProduct}
                    options={{
                        title: "Daftar Product",
                        // headerShown: false
                    }}
                />
                <Stack.Screen name="TentangKami" component={TentangKami} options={{ title: "Tentang Kami" }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;