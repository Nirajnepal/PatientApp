import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, Image } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";

const DATA = [
  {
    id: '1',
    title: 'First Item',
  },
  {
    id: '2',
    title: 'Second Item',
  },
  {
    id: '3',
    title: 'Third Item',
  },
];



class PatientsLists extends React.Component {

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
        <Text style={styles.title}>{item.title}</Text>
    </View>
    </TouchableOpacity>
    </>
  );

  
    render(){
    return (
        <SafeAreaView style={styles.container}>
        <FlatList
            data={DATA}
            renderItem={this.renderItem}
            keyExtractor={item => item.id}
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