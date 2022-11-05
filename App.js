import 'react-native-gesture-handler';
import React, { useState } from 'react';
import Navigator from './routes/homeStack'
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
 return (
    <NavigationContainer>
        <Navigator/>
    </NavigationContainer>  
 )
}


