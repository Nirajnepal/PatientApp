import React from "react";
import { StyleSheet, Text, View, ScrollView, Image, Divider, Button, Modal } from 'react-native';
import {useNavigation, StackActions, NavigationAction, useIsFocused, NavigationEvents} from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";

let context;

class PatientDetails extends React.Component{
    constructor(props){
        super(props);
        context = this
        this.state = {
            data: props.route.params,
            isVisible: false,
            patientRecord: '',
            isRecordVisible: false,
            refresh: 0
        };
        
    }

    // function to navigate to edit patient screen with patient details
    editPatientDetails = (item) => {
      const {navigation} = this.props
      navigation.navigate('Edit Patients', item);
    }

    // hide show modal
    displayModal(show){
      this.setState({isVisible: show})
    }

    //Function to toggle the display records
    displayRecords(show){
      this.setState({isRecordVisible: !show})
    }

    //Function to fetch records of patient records
    async showUserRecordsAPICall(id){
      try {
        const response = await fetch("http://192.168.5.10:8080/api/patients/"+id+"/records")
        const patientRecordJson = await response.json()
        this.setState({patientRecord: patientRecordJson})
      } catch (error) {
        
      }
    }

    // function to navigate to add patient records screen with user id
    addPatientsRecord = () => {
      const {navigation} = this.props
      navigation.navigate('Add Record', this.state.data._id);
    }

    // function to navigate to edit patient records screen with record details
    editPatientsRecord = (item) => {
      const {navigation} = this.props
      navigation.navigate('Edit Record', item);
    }

    // function to delete patient details along with patient record
    async deletePatientDetails() {
      try {
       const response =await fetch("http://192.168.5.10:8080/api/patients/"+this.state.data._id,{
         method: 'DELETE',
         headers: { 
             'Accept': 'application/json', 
             'Content-Type': 'application/json',
           }
         })
       const responseRecord = await fetch("http://192.168.5.10:8080/api/patients/"+this.state.data._id+"/records",{
         method: 'DELETE',
         headers: { 
             'Accept': 'application/json', 
             'Content-Type': 'application/json',
           }
         })
         if(response.ok || responseRecord.ok){
           const { navigation } = this.props
           navigation.dispatch(StackActions.replace('Patient Lists', {})); 
         }
      } catch (err) {
         console.log(err);
      }
     }

     // function to delete patient record
     async deletePatientRecord(){
      const responseRecord = await fetch("http://192.168.5.10:8080/api/patients/"+this.state.data._id+"/records",{
         method: 'DELETE',
         headers: { 
             'Accept': 'application/json', 
             'Content-Type': 'application/json',
           }
         })
         if(responseRecord.ok){
          const { navigation } = this.props
          navigation.dispatch(StackActions.replace('Patient Details', this.state.data)); 
        }
     }


    render(){
        return (
        <ScrollView style={styles.container} keyboardShouldPersistTaps='always'>
            <View style={{marginTop: 20}}/>

            { profileImage() }

          <View style={{flexDirection: "row", marginTop: 20}}>
          <TouchableOpacity style={styles.editButton} onPress = {() => this.editPatientDetails(this.state.data) }>
              <Text style={[styles.editlabelText]}>Edit</Text>
            </TouchableOpacity>

            <Modal
                animationType = {"slide"}
                transparent={false}
                visible={this.state.isVisible}
                >
                <View style={styles.modalContainer}>
                  <Text style = { styles.text }>
                      Are you sure?</Text>
                  <Text 
                    style={styles.closeText}
                    onPress={() => {
                      this.displayModal(!this.state.isVisible);}}>Cancel</Text>
                  <Text 
                    style={styles.closeText}
                    onPress={() => {
                      this.deletePatientDetails()}}>Yes</Text>
                </View>
            </Modal>

            <TouchableOpacity style={styles.deleteButton} onPress = {() => this.displayModal(true)}>
              <Text style={[styles.deleteLabelText]}>Delete</Text>
            </TouchableOpacity>
          </View>

            <Text style={styles.centerText}>Patient Information</Text>

            { generalInfo(this.state.data) }

            <Button 
              title='View Records' 
              onPress={() => { 
                this.showUserRecordsAPICall(this.state.data._id); 
                this.displayRecords(this.state.recordDetails = !this.state.recordDetails)
              }} 
              style = {styles.button}
            />

            { this.state.isRecordVisible && this.state.patientRecord._id && recordsInfo(this.state.patientRecord)}
            { this.state.isRecordVisible && this.state.patientRecord.message && addRecordsInfo(this.state.patientRecord)}
            
        </ScrollView>
    );

    // Function to display general info of patients
    function generalInfo(patientDetails) {
        return <View style={[styles.contentView]}>
        <Text style={styles.labelText}>Name: { [patientDetails.first_name, patientDetails.last_name ].join(' ') }</Text>
        <View style={[styles.dividerLine]} />

        <Text style={[styles.labelText]}>Address:  {patientDetails.address}</Text>
        <View style={[styles.dividerLine]} />
        <Text style={styles.labelText}>D.O.B:     {patientDetails.date_of_birth}</Text>
        <View style={[styles.dividerLine]} />
        <Text style={styles.labelText}>Doctor:      {patientDetails.doctor}</Text>
        <View style={[styles.dividerLine]} />
        <Text style={styles.labelText}>Department:       {patientDetails.department}</Text>
        </View>;
    }

    // Functions to display records information of patients
    function recordsInfo(recordDetails) {
      return <View style={[styles.contentView]}>
      <Text style={styles.labelText}>Nurse Name: {recordDetails.nurse_name}</Text>
      <View style={[styles.dividerLine]} />
      <Text style={[styles.labelText]}>Date Record Added: {recordDetails.date}</Text>
      <View style={[styles.dividerLine]} />
      <Text style={styles.labelText}>Blood Pressure: {recordDetails.blood_pressure}</Text>
      <View style={[styles.dividerLine]} />
      <Text style={styles.labelText}>Blood Oxygen Level: {recordDetails.blood_oxygen_level}</Text>
      <View style={[styles.dividerLine]} />
      <Text style={styles.labelText}>Heartbeat Rate: {recordDetails.heartbeat_rate}</Text>
      <View style={[styles.dividerLine]} />
      <Text style={styles.labelText}>Height: {recordDetails.height}</Text>
      <View style={[styles.dividerLine]} />
      <Text style={styles.labelText}>Weight: {recordDetails.weight}</Text>
      <View style={{flexDirection: "row", marginBottom: 5}}>
        <TouchableOpacity style={styles.editPatientRecord}>
          <Text style={[styles.editlabelText]} onPress={() =>  context.editPatientsRecord(recordDetails)  }>Edit Record</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.deletePatientRecord}>
          <Text style={[styles.deleteLabelText]} onPress={() => context.displayModal(true) }>Delete Record</Text>
        </TouchableOpacity>
      </View>
      <Modal
          animationType = {"slide"}
          transparent={false}
          visible={context.state.isVisible}
          >
          <View style={styles.modalContainer}>
            <Text style = { styles.text }>
                Are you sure?</Text>
            <Text 
              style={styles.closeText}
              onPress={() => {
                context.displayModal(!context.state.isVisible);}}>Cancel</Text>
            <Text 
              style={styles.closeText}
              onPress={() => {
                context.deletePatientRecord()}}>Yes</Text>
          </View>
      </Modal>
      </View>;
    }

    // Function to show the option to add records of the patient
    function addRecordsInfo(recordDetails) {
      return <View style={[styles.contentView]} keyboardShouldPersistTaps='always'>
      <View style={[styles.dividerLine]} />
      <Text style={styles.labelText}>{recordDetails.message}</Text>
      <TouchableOpacity style={styles.addPatientRecord}>
        <Text style={[styles.addLabelText]} onPress={() =>  context.addPatientsRecord()  }>Add Record</Text>
      </TouchableOpacity>
      </View>;
    }

    // Function to show the default profile image 
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
    color: '#80669d'
  },
  additionalCenterText :{
    textAlign: 'center',
    fontSize: 20
  },
  editButton: {
    backgroundColor: '#55c2da',
    width: 55,
    marginLeft: 10,
    textAlign: "center",
    color: 'red',
    borderRadius: 5
  },
  editlabelText:{
    color: 'white',
    textAlign: "center",
    margin: 7
  },
  deleteButton: {
    backgroundColor: '#dd7973',
    width: 55,
    marginLeft: 10,
    textAlign: "center",
    color: 'red',
    borderRadius: 5
  },
  deleteLabelText:{
    color: 'white',
    textAlign: "center",
    margin: 7
  },
  editPatientRecord: {
    backgroundColor: '#55c2da',
    width: 110,
    marginLeft: 10,
    textAlign: "center",
    color: 'red',
    borderRadius: 5
  },
  deletePatientRecord: {
    backgroundColor: '#dd7973',
    width: 110,
    marginLeft: 10,
    textAlign: "center",
    color: 'red',
    borderRadius: 5
  },
  addPatientRecord:{
    backgroundColor: '#5adbb5',
    width: 110,
    marginLeft: 125,
    marginBottom: 10,
    textAlign: "center",
    color: 'red',
    borderRadius: 5
  },
  addLabelText:{
    color: 'white',
    textAlign: "center",
    margin: 7
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
  },
  closeText: {
    fontSize: 24,
    color: '#00479e',
    textAlign: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 300,
    width: 400,
    backgroundColor: '#ffffff',
    minHeight: 100
  }
});

export default PatientDetails

