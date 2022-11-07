import React from 'react'
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


class EditPatientScreen extends React.Component {

    constructor(){
        super();
        this.state={
            firstName: '',
            lastName: '',
            address: '',
            dob: '',
            department: '',
            doctor: '',
        }
    }

    submit(){
        
    }
    

    render(){
        return(
            <ScrollView>
            <View style = {styles.container}>

            <TextInput 
            placeholder='Enter First Name'
            onChangeText={(text)=> this.setState({firstName:text})}
            style = {styles.textField}>                
            </TextInput>

            <TextInput 
            placeholder='Enter Last Name'
            onChangeText={(text)=> this.setState({lastName:text})}
            style = {styles.textField}>                
            </TextInput>

            <TextInput 
            placeholder='Enter Address'
            onChangeText={(text)=> this.setState({address:text})}
            style = {styles.textField}>                
            </TextInput>

            <TextInput 
            placeholder='Enter Date Of Birth'
            onChangeText={(text)=> this.setState({dob:text})}
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

            <Button title='Submit' onPress={this.submit()} style = {styles.button}/>
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
        borderRadius: 10,
    },
});

export default EditPatientScreen
