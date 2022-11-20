import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image, Divider } from 'react-native';
import {useNavigation} from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";

class PatientDetails extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: props.route.params,
        };
        // console.log(props);
    }

    editPatientDetails = (item) => {
      const { navigation } = this.props
      navigation.navigate('Edit Patients', item);
    }



    render(){
        return (
        <SafeAreaView style={styles.container}>
            <View style={{marginTop: 20}}/>
            { profileImage() }
            <TouchableOpacity onPress = {() => this.editPatientDetails(this.state) }>
              <Text style={[styles.labelText]}>Edit</Text>
            </TouchableOpacity>
            <Text style={styles.centerText}>Patient Information</Text>
            { generalInfo(this.state) }
        </SafeAreaView>
    );

    function generalInfo(patientDetails) {
        return <View style={[styles.contentView]}>
        
       
        <Text style={[styles.labelText]}>Delete</Text>
        <Text style={styles.labelText}>Name: { [patientDetails.data.first_name, patientDetails.data.last_name ].join(' ') }</Text>
        <View style={[styles.dividerLine]} />

        <Text style={[styles.labelText]}>Address:  {patientDetails.data.address}</Text>
        <View style={[styles.dividerLine]} />
        <Text style={styles.labelText}>D.O.B:     {patientDetails.data.date_of_birth}</Text>
        <View style={[styles.dividerLine]} />
        <Text style={styles.labelText}>Doctor:      {patientDetails.data.doctor}</Text>
        <View style={[styles.dividerLine]} />
        <Text style={styles.labelText}>Department:       {patientDetails.data.department}</Text>
        </View>;
    }

    function profileImage() {
        return <View style={[styles.imageView]}>
        <Image source={require('../../../assets/user.png')} style={[styles.imageStyle]} />
        </View>;
    }
    };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E6E7E9"
  },
  contentView :{
    borderRadius: 10,
    margin: 20,
    backgroundColor: "white",
    flexDirection: 'column',
    justifyContent: 'space-evenly'
  },
  
  centerText :{
    marginTop: 20,
    textAlign: 'center',
    fontSize: 20,
    letterSpacing: 2.0,
    fontWeight: 'bold',
  },
  additionalCenterText :{
    textAlign: 'center',
    fontSize: 20
  },
  labelText:{
    color: 'black', padding: 10, letterSpacing: 0.5
  },
  imageView:{
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle:{
    width:150, height:150,resizeMode: 'contain', marginTop: 50, borderRadius: 40
  },
  dividerLine:{
    borderBottomColor: 'grey',
    borderBottomWidth: StyleSheet.hairlineWidth,
  }
});

export default PatientDetails

