import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image, Divider } from 'react-native';


class PatientDetails extends React.Component{

render(){
    return (
    <SafeAreaView style={styles.container}>
        <View style={{marginTop: 20}}/>
        {profileImage()}
        <Text style={styles.centerText}>Patient Information</Text>
        {generalInfo()}
    </SafeAreaView>
    );

  function generalInfo() {
    return <View style={[styles.contentView]}>
      <Text style={styles.labelText}>Name:        Krisuv Bohara</Text>
      <View style={[styles.dividerLine]} />

      <Text style={[styles.labelText]}>Address:   Toronto, Canada</Text>
      <View style={[styles.dividerLine]} />
      <Text style={styles.labelText}>College:     Centennial College</Text>
      <View style={[styles.dividerLine]} />
      <Text style={styles.labelText}>Laptop:      MSI</Text>
      <View style={[styles.dividerLine]} />
      <Text style={styles.labelText}>Stack:         React Native</Text>
    </View>;
  }

  function profileImage() {
    return <View style={[styles.imageView]}>
      <Image source={require('../../assets/user.png')} style={[styles.imageStyle]} />
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

