import React from "react";
import { View, StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import { globalStyles } from "../../styles/global";


class PatientDetails extends React.Component{

    render(){
        return (
            <>
                <View style={globalStyles.container}>
                    <TouchableOpacity>
                        <Text style={globalStyles.titleText}>Patient Details Screen</Text>
                    </TouchableOpacity>
                </View>
            </>
        )
    }
}

export default PatientDetails

