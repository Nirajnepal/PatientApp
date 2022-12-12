import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, Image } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import {useNavigatio, StackActions, useIsFocused} from "@react-navigation/native";

class PatientsLists extends React.Component {

    constructor(props){
      super(props);
      
      this.state = {
        data: [],
      };
      console.log(this.state.data);
    }

    componentDidMount(){
      this.apiCall()
    }

    //Function to fetch patient details
    async apiCall(){
      try {
        let response = await fetch("http://192.168.5.10:8080/api/patients")
        let responseJson =  await response.json()
        console.log(responseJson);
        this.setState({ data: responseJson })
      } catch (err) {
        console.warn({ message: err.message })
      }
    }

    // function to navigate to patient details screen with props
    patientDetails = (item) => {
        const { navigation } = this.props
        navigation.dispatch(
          StackActions.replace('Patient Details', item)
        )
    }

   renderItem = ({ item }) => (
    <>
    <TouchableOpacity onPress = {() => this.patientDetails(item) }>
    <View style = {styles.item}>
        <Image source={require('../../../assets/user.png')} style={[styles.imageStyle]} />
        <Text>       </Text>
        <Text style={styles.title}>{[item.first_name,item.last_name].join(' ')}</Text>
    </View>
    </TouchableOpacity>
    </>
    );

  
    render(){
    return (
        <SafeAreaView style={styles.container}>
        <FlatList
            data={this.state.data}
            renderItem={this.renderItem}
            keyExtractor={item => item._id}
        />
        </SafeAreaView>
    );
    }
    }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 10,
  },

  item: {
    backgroundColor: 'white',
    padding: 20,
    marginVertical: 8,
    borderRadius: 20,
    flexDirection: 'row',
    marginHorizontal: 16,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  imageStyle:{
    height:40,resizeMode: 'contain',width: 40
  },
  title: {
    fontSize: 15,
    letterSpacing: 1,
    fontWeight : '600'
  },
});

export default PatientsLists;