import { createStackNavigator } from '@react-navigation/stack';
import Home from "../app/screens/Home";
import PatientDetails from '../app/screens/patients/patientDetails';
import PatientsLists from '../app/screens/patients/patientLists';
import AddPatientScreen from "../app/screens/patients/addPatient";
import EditPatientScreen from "../app/screens/patients/editPatient";
import AddPatientRecordScreen from "../app/screens/patients-records/addPatientsRecord.js"
import EditPatientRecordScreen from "../app/screens/patients-records/editPatientsRecord.js"

const Stack = createStackNavigator()

export default function Navigator() {
  return (
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={ Home } />
        <Stack.Screen name='Patient Details' component={ PatientDetails } />
        <Stack.Screen name='Patient Lists' component={ PatientsLists } />
        <Stack.Screen name='Edit Patients' component={ EditPatientScreen } />
        <Stack.Screen name='Add Patients' component={ AddPatientScreen } />
        <Stack.Screen name='Add Record' component={ AddPatientRecordScreen } />
        <Stack.Screen name='Edit Record' component={ EditPatientRecordScreen } />
      </Stack.Navigator>
  );
}
