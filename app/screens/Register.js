import React, {useContext, useState} from 'react';
import {
  Button,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import {useNavigation, StackActions} from "@react-navigation/native";

const isValidObjField = (obj) => {
    return Object.values(obj).every(value => value.trim())
}

const RegisterScreen = ({navigation}) => {
  const [userInfo, setUserInfo] = useState({
    full_name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [error, setError] = useState('')

  const updateError = (error, stateUpdater) => {    
    stateUpdater(error)
    setTimeout(() => {
        stateUpdater(' ')
    }, 2500);
  }

  const {full_name, email, password, confirmPassword} = userInfo

  const handleOnChangeText = (value, fieldName) => {
    setUserInfo({...userInfo, [fieldName]: value})
  }

  const isValidEmail = (value) => {
    const regx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
    return regx.test(value)
  }

  const isValidForm = () => {
    // we will accept only if all of the fields have value
    if (!isValidObjField(userInfo))
      return updateError('All fields are required!', setError);
    // if valid name with 3 or more characters
    if (!full_name.trim() || full_name.length < 3)
      return updateError('Invalid name!', setError);
    // only valid email id is allowed
    if (!isValidEmail(email)) return updateError('Invalid email!', setError);
    // password must have 8 or more characters
    if (!password.trim() || password.length < 8)
      return updateError('Password is less then 8 characters!', setError);
    // password and confirm password must be the same
    if (password !== confirmPassword)
      return updateError('Password does not match!', setError);

    return true;
  }

  const submitForm =  async () => {
    const {full_name, email, password, confirmPassword} = userInfo

    if (isValidForm()) {
        try {
            const response = await fetch("http://192.168.5.10:8080/api/register",{
                method: 'Post',
                headers: { 
                    'Accept': 'application/json', 
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    full_name: full_name,
                    email: email,
                    password: password,
                    confirmPassword: confirmPassword
                })
            })
            
            let responseUser = await response.json()    
            if(response.ok) {
                navigation.dispatch(
                  StackActions.replace('Login', { })
                )
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
          value={full_name}
          placeholder="Enter name"
          onChangeText={(value) => handleOnChangeText(value, 'full_name')}
        />

        <TextInput
          style={styles.input}
          value={email}
          autoCapitalize="none"
          placeholder="Enter email"
          onChangeText={(value) => handleOnChangeText(value, 'email')}
        />

        <TextInput
          style={styles.input}
          value={password}
          autoCapitalize="none"
          secureTextEntry
          placeholder="Enter password"
          onChangeText={(value) => handleOnChangeText(value, 'password')}
        />

        <TextInput
          style={styles.input}
          value={confirmPassword}
          autoCapitalize="none"
          placeholder="Confirm password"
          onChangeText={(value) => handleOnChangeText(value, 'confirmPassword')}
          secureTextEntry
        />

        <Button
          title="Register"
          onPress={submitForm}
        />

        <View style={{flexDirection: 'row', marginTop: 20}}>
          <Text>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.link}>Login</Text>
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

export default RegisterScreen;
