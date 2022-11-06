import { createStackNavigator } from '@react-navigation/stack';
import Home from "../app/screens/Home";
import PatientDetails from "../app/screens/PatientDetails";
import PatientsLists from '../app/screens/patientLists';
import AddPatientScreen from "../app/screens/addPatient";

const Stack = createStackNavigator()

export default function Navigator() {
  return (
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={ Home } />
        <Stack.Screen name='PatientDetails' component={ PatientDetails } />
        <Stack.Screen name='PatientLists' component={ PatientsLists } />
        <Stack.Screen name='Add Patients' component={ AddPatientScreen } />
      </Stack.Navigator>
  );
}
