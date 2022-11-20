import React from 'react'
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {useNavigation} from "@react-navigation/native";

class EditPatientScreen extends React.Component {

    constructor(props){
        super(props);
        this.state={
            data: props.route.params
        }
        console.log(this.state.data.data);
    }

    async submit(){
        try {
            const response = await fetch("http://192.168.5.10:8080/api/patients",{
                method: 'Post',
                headers: { 
                    'Accept': 'application/json', 
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(this.state)
            })
            let responsePatients = await response.json()
            // console.log(responsePatients);
            if(responsePatients._id){
                const { navigation } = this.props
                navigation.navigate('PatientDetails', responsePatients);
            }
        } catch (err) {
            console.log({ message: err.message })
        }
        // const { navigation } = this.props
        // navigation.navigate('PatientDetails', patient);
    }
    
    render(){
        return (
            <ScrollView>
                {editPatient(this.state)}
            </ScrollView>     
        );

         function editPatient(patientDetails){
            return <View style = {styles.container}>

            <TextInput 
            onChangeText={(text)=> this.setState({first_name:text})}
            style = {styles.textField}
            value={patientDetails.data.data.first_name} >              
            </TextInput>

            <TextInput 
            placeholder='Enter Last Name'
            onChangeText={(text)=> this.setState({last_name:text})}
            style = {styles.textField}
            value={patientDetails.data.data.last_name}>                
            </TextInput>

            <TextInput 
            placeholder='Enter Address'
            onChangeText={(text)=> this.setState({address:text})}
            style = {styles.textField}>                
            </TextInput>

            <TextInput 
            placeholder='Enter Date Of Birth'
            onChangeText={(text)=> this.setState({date_of_birth:text})}
            style = {styles.textField}>                
            </TextInput>

            <TextInput 
            placeholder='Enter Department'
            onChangeText={(text)=> this.setState({department:text})}
            style = {styles.textField}>                
            </TextInput>

            <TextInput 
            placeholder='Enter Doctor'
            onChangeText={(text)=> this.setState({doctor:text})}
            style = {styles.textField}>                
            </TextInput>

            <Button title='Submit' onPress={() => this.submit()} style = {styles.button}/>
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
