import { NavigationContainer } from '@react-navigation/native';
import { createAppContainer } from '@react-navigation/stack';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "../app/screens/Home";
import PatientDetails from "../app/screens/PatientDetails";

const Stack = createStackNavigator()

export default function Navigator() {
  return NavigationContainer =  (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='PatientDetails' component={PatientDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );

}
