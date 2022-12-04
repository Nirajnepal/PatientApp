import React from 'react'
import { View, TextInput, Button, StyleSheet} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {useNavigation, StackActions} from "@react-navigation/native";

class AddPatientScreen extends React.Component {

    constructor(){
        super();
        this.state={
            first_name: '',
            last_name: '',
            address: '',
            date_of_birth: '',
            department: '',
            doctor: '',
        }
    }

    async submit(){
        try {
            const response = await fetch("http://192.168.5.10:8080/api/patients",{
                method: 'Post',
                headers: { 
                    'Accept': 'application/json', 
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    first_name: this.state.first_name,
                    last_name: this.state.last_name,
                    address: this.state.address,
                    date_of_birth: this.state.date_of_birth,
                    department: this.state.department,
                    doctor: this.state.doctor  
                })
            })
            let responsePatients = await response.json()    
            // console.log(responsePatients); 
            if(response.ok){
                const { navigation } = this.props
                navigation.dispatch(StackActions.replace('PatientDetails', responsePatients));   
            } 
            else{
                throw new Error()
            }   
        } catch (err) {
            console.log(err)
        }
    }

    
    
    render(){
        return(
            <ScrollView keyboardShouldPersistTaps='always'>
            <View style = {styles.container}>
            <TextInput 
            placeholder='Enter First Name'
            onChangeText={(text)=> this.setState({first_name:text})}
            style = {styles.textField}>                
            </TextInput>

            <TextInput 
            placeholder='Enter Last Name'
            onChangeText={(text)=> this.setState({last_name:text})}
            style = {styles.textField}>                
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
            </View>
            </ScrollView>
        );
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

export default AddPatientScreen
