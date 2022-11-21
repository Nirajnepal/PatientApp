import React from 'react'
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {useNavigation} from "@react-navigation/native";

class EditPatientScreen extends React.Component {

    constructor(props){
        super(props);
        this.state={
            data: props.route.params.data,
            first_name: '',
            last_name: '',
            address: '',
            date_of_birth: '',
            department: '',
            doctor: '',
        }
        // this.onPress = this.onPress.bind(this);
        // console.log(this.state);
    }

    submit = () => {
        console.log("Hello")
    }
    
    render(){
        return (
            <ScrollView>
                {editPatient(this.state.data)}
            </ScrollView>     
        );

         function editPatient(patientDetails){
            return <View style = {styles.container}>

            <TextInput 
            onChangeText={(json)=> this.setState({patientDetails:JSON})}
            style = {styles.textField}
            value={patientDetails.first_name} >              
            </TextInput>

            <TextInput 
            placeholder='Enter Last Name'
            onChangeText={(text)=> this.setState({last_name:text})}
            style = {styles.textField}
            value={patientDetails.last_name}>                
            </TextInput>

            <TextInput 
            placeholder='Enter Address'
            onChangeText={(text)=> this.setState({address:text})}
            style = {styles.textField}
            value={patientDetails.address}>                
            </TextInput>

            <TextInput 
            placeholder='Enter Date Of Birth'
            onChangeText={(text)=> this.setState({date_of_birth:text})}
            style = {styles.textField}
            value={patientDetails.date_of_birth}>                
            </TextInput>

            <TextInput 
            placeholder='Enter Department'
            onChangeText={(text)=> this.setState({department:text})}
            style = {styles.textField}
            value={patientDetails.department}>                
            </TextInput>

            <TextInput 
            placeholder='Enter Doctor'
            onChangeText={(text)=> this.setState({doctor:text})}
            style = {styles.textField}
            value={patientDetails.doctor}>                
            </TextInput>
            <Button title='Submit' onPress={() => this.submit.bind(this)} style = {styles.button}/>
            
            </View>;
        }
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      margin: 20
    },
    textField:{
        borderWidth: 2,
        borderRadius: 12,
        borderColor: 'black',
        padding: 20,
        margin: 10
    },
    button:{    
        elevation: 8,
        backgroundColor: "#009688",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12
    }
});

export default EditPatientScreen
