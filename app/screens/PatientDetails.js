import React from "react";
import { View, StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import { globalStyles } from "../../styles/global";

// export default function Home(){
//     return (
//         <View style={globalStyles.container}>
//             <Text style={globalStyles.titleText}>Patient Details Screen</Text>
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     container: {
//         padding: 24
//     },
//     titleText: {
//         fontSize: 18,
//     }
// })

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

