import React from "react";
import { View, StyleSheet, Text, Image } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";

class Home extends React.Component {
    constructor(){
        super();
    }

    openPatientDetails = () => {
        const { navigation } = this.props
        navigation.navigate('Patient Lists');
    }

    addPatientScreen = () => {
        const { navigation } = this.props
        navigation.navigate('Add Patients');
    }

    render(){
        return (
            <View style={styles.container}>
                <View style ={styles.aa}>
                <TouchableOpacity style = {styles.button} onPress = {this.openPatientDetails}>
                <Image testID="userImage" source={require('../../assets/user.png')} style={[styles.imageStyle]} />
                <Text style={styles.labelStyle}>Patients</Text>
                </TouchableOpacity>

                <TouchableOpacity style = {styles.button} onPress = {this.addPatientScreen}>
                <Image  testID="addImage" source={require('../../assets/addPatient.png')} style={[styles.imageStyle]} />
                <Text style={styles.labelStyle}>Add Patient</Text>
                </TouchableOpacity>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        // flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: 10, 
    },
    aa:{
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: 10, 
        justifyContent: 'center'
    },
    button: {
        paddingHorizontal: 10,
        paddingVertical: 30,
        alignItems: "center",
        backgroundColor: "#FFFFFF",
        borderRadius: 20,
        margin : 10,
      },
    labelStyle:{
        fontSize: 16,
        letterSpacing: 2.0,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    imageStyle:{
        height:50,resizeMode: 'contain',marginBottom: 10 
      },
      imageStyleMarginRight:{
        height:50,resizeMode: 'contain', marginLeft: 20
      },
});

export default Home;

