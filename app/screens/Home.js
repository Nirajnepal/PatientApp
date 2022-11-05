import React from "react";
import { View, StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import { globalStyles } from "../../styles/global";

// export default function Home(){
//     return (
//         <View style={globalStyles.container}>
//             <Text style={globalStyles.titleText}>Home Screen</Text>
//         </View>
//     )
// }

class Home extends React.Component {
    constructor(props){
        super(props);
    }

    openPatientDetails = () => {
        const { navigation } = this.props
        navigation.navigate('PatientDetails');
    }

    render(){
        return (
            <>
                <View style="{globalStyles.container}">
                    <TouchableOpacity onPress={ this.openPatientDetails }>
                        <Text style={globalStyles.titleText}>Home Screen</Text>
                    </TouchableOpacity>
                </View>
            </>
        )
    }
}

export default Home;

