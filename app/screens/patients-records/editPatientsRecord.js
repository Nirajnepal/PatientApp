import React from 'react'
import { View, TextInput, Button, StyleSheet} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {useNavigation, StackActions} from "@react-navigation/native";

class EditPatientRecordScreen extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            date: props.route.params.date,
            nurse_name: props.route.params.nurse_name,
            blood_pressure: props.route.params.blood_pressure,
            blood_oxygen_level: props.route.params.blood_oxygen_level,
            heartbeat_rate: props.route.params.heartbeat_rate,
            height: props.route.params.height,
            weight: props.route.params.weight,
            user_id: props.route.params.user_id
        }
        console.log(this.state.nurse_name);
    }

    async submit(){
        console.log(this.state.user_id);
        try {
            const response = await fetch("http://192.168.5.10:8080/api/patients/"+this.state.user_id+"/records",{
                method: 'PATCH',
                headers: { 
                    'Accept': 'application/json', 
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    date: this.state.date,
                    nurse_name: this.state.nurse_name,
                    blood_pressure: this.state.blood_pressure,
                    blood_oxygen_level: this.state.blood_oxygen_level,
                    heartbeat_rate: this.state.heartbeat_rate,
                    height: this.state.height, 
                    weight: this.state.weight  
                })
            })
            let responseRecords = await response.json()    
            console.log(responseRecords); 
            if(response.ok){
                const { navigation } = this.props
                navigation.dispatch(StackActions.replace('Patient Lists'));   
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
            placeholder='Enter Date'
            onChangeText={(text)=> this.setState({date:text})}
            style = {styles.textField}
            value={this.state.date}>                
            </TextInput>

            <TextInput 
            placeholder='Enter Nurse Name'
            onChangeText={(text)=> this.setState({nurse_name:text})}
            style = {styles.textField}
            value={this.state.nurse_name}>                
            </TextInput>

            <TextInput 
            placeholder='Enter Blood Pressure (120/80)'
            onChangeText={(text)=> this.setState({blood_pressure:text})}
            style = {styles.textField}
            value={this.state.blood_pressure}>                
            </TextInput>

            <TextInput 
            placeholder='Enter Blood Oxygen Level'
            onChangeText={(text)=> this.setState({blood_oxygen_level:text})}
            style = {styles.textField}
            value={this.state.blood_oxygen_level}>                
            </TextInput>

            <TextInput 
            placeholder='Enter Heartbeat Rate'
            onChangeText={(text)=> this.setState({heartbeat_rate:text})}
            style = {styles.textField}
            value={this.state.heartbeat_rate}>                
            </TextInput>

            <TextInput 
            placeholder='Enter Height in CM'
            onChangeText={(text)=> this.setState({height:text})}
            style = {styles.textField}
            value={this.state.height}>                
            </TextInput>

            <TextInput 
            placeholder='Enter Weight in KG'
            onChangeText={(text)=> this.setState({weight:text})}
            style = {styles.textField}
            value={this.state.weight}>                
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

export default EditPatientRecordScreen