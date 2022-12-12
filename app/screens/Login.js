import React, {useContext, useState} from 'react';
import {
  Button,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import {StackActions} from "@react-navigation/native";

const LoginScreen = ({navigation}) => {
    const [userInfo, setUserInfo] = useState({
        email: '',
        password: '',
      });

    const [error, setError] = useState('');

    
    const isValidObjField = (obj) => {
        return Object.values(obj).every(value => value.trim())
    }
    
    const updateError = (error, stateUpdater) => {    
        stateUpdater(error)
        setTimeout(() => {
            stateUpdater(' ')
        }, 2500);
      }
    
      const {email, password} = userInfo
    
      const handleOnChangeText = (value, fieldName) => {
        setUserInfo({...userInfo, [fieldName]: value})
      }
    
      const isValidEmail = (value) => {
        const regx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
        return regx.test(value)
      }

    const isValidForm = () => {
    if (!isValidObjField(userInfo))
        return updateError('All fields are required!', setError);

    if (!isValidEmail(email)) return updateError('Invalid email!', setError);

    if (!password.trim() || password.length < 8)
        return updateError('Password is too short!', setError);

    return true;
    };

    const submitForm =  async () => {
        if (isValidForm()) {
            try {
                const response = await fetch("http://192.168.5.10:8080/api/login",{
                    method: 'Post',
                    headers: { 
                        'Accept': 'application/json', 
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        ...userInfo 
                    })
                })
                let responseUser = await response.json()    
                if(responseUser.success) {
                    navigation.dispatch(
                        StackActions.replace('Home', { })
                      )
                }else{
                    return updateError('Please check your email and password', setError)
                }
            } catch (err) {
                console.log(err)
            }
        }
      };
    

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
      { error ?<Text style={ styles.error }>{error}</Text> : null}
        <TextInput
          style={styles.input}
          value={email}
          placeholder="Enter email"
          onChangeText={(value) => handleOnChangeText(value, 'email')}
          autoCapitalize='none'
        />

        <TextInput
          style={styles.input}
          value={password}
          placeholder="Enter password"
          onChangeText={(value) => handleOnChangeText(value, 'password')}
          secureTextEntry
          autoCapitalize='none'
        />

        <Button
          title="Login"
          onPress={submitForm}
        />

        <View style={{flexDirection: 'row', marginTop: 20}}>
          <Text>Don't have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.link}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {
    width: '80%',
  },
  input: {
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#bbb',
    borderRadius: 5,
    paddingHorizontal: 14,
  },
  link: {
    color: 'blue',
  },
  error: {
    color: 'red', 
    fontSize: 18, 
    textAlign:'center', 
    paddingBottom: 20
  }
});

export default LoginScreen;
