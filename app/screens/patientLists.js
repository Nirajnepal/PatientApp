import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, Image } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";

class PatientsLists extends React.Component {

    constructor(){
      super();
      this.state = {
        data: []
      }
    }

    componentDidMount(){
      this.apiCall();
    }

    async apiCall(){
      try {
        let response = await fetch("http://192.168.5.10:8080/api/patients");
        let responseJson =  await response.json()
        this.setState({ data: responseJson })
      } catch (err) {
        console.log("sadadssadasdsadasdasd console.log(sadadssadasdsadasdasd)")
        console.warn({ message: err.message })
      }

    }

    patientDetails = () => {
        const { navigation } = this.props
        navigation.navigate('PatientDetails');
    }

   renderItem = ({ item }) => (
    <>
    <TouchableOpacity onPress={this.patientDetails}>
    <View style = {styles.item}>
        <Image source={require('../../assets/user.png')} style={[styles.imageStyle]} />
        <Text>       </Text>
        <Text style={styles.title}>{[item.first_name,item.last_name].join(' ')}</Text>
    </View>
    </TouchableOpacity>
    </>
    );

  
    render(){
    return (
        <SafeAreaView style={styles.container}>
        {this.state.data == null ? <Text>Empty </Text> :
        <FlatList
            data={this.state.data}
            renderItem={this.renderItem}
            keyExtractor={item => item._id}
        />
    }
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