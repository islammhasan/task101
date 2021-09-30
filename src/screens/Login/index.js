import React, {useState, useLayoutEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Container, PrimaryButton, PrimaryInput} from '../../components';
import CheckBox from '@react-native-community/checkbox';
import {styles} from './styles';

export const Login = ({navigation}) => {
  const [switchTabs, SetSwitchTabs] = useState(true);
  const [loginUser, setLoginUser] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [regUser, setRegUser] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [regPassword, setRegPassword] = useState('');
  const [togglePasswordRem, setTogglePasswordRem] = useState(false);
  const [toggleTerms, setToggleTerms] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  const signIn = () => {
    if (loginUser.length >= 1 && loginPassword.length >= 1) {
      navigation.navigate('Profile', {loginUser});
    } else {
      alert('Please fill all fields');
    }
  };

  const registerUser = () => {
    if (
      regUser.length >= 1 &&
      regPassword.length >= 1 &&
      regEmail.length >= 1 &&
      toggleTerms == true
    ) {
      navigation.navigate('Profile', {regUser});
    } else {
      alert('Please fill all fields');
    }
  };

  return (
    <Container style={styles.Container}>
      <View style={styles.switcherContainer}>
        <TouchableOpacity
          onPress={() => SetSwitchTabs(true)}
          style={[styles.switcherBtn, switchTabs && styles.activeSwitcher]}
          activeOpacity={0.8}>
          <Text numberOfLines={1} style={styles.switcherTxt}>
            Log in
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => SetSwitchTabs(false)}
          style={[styles.switcherBtn, !switchTabs && styles.activeSwitcher]}
          activeOpacity={0.8}>
          <Text numberOfLines={1} style={styles.switcherTxt}>
            Register
          </Text>
        </TouchableOpacity>
      </View>
      {switchTabs ? (
        <View style={styles.switchContent}>
          <PrimaryInput
            value={loginUser}
            onChangeText={loginUser => setLoginUser(loginUser)}
            placeholder="Username"
          />
          <PrimaryInput
            value={loginPassword}
            onChangeText={loginPassword => setLoginPassword(loginPassword)}
            placeholder="Enter Password"
            secureTextEntry={true}
          />
          <View style={styles.toggleStyle}>
            <CheckBox
              disabled={false}
              value={togglePasswordRem}
              onValueChange={toggleRem => setTogglePasswordRem(toggleRem)}
            />
            <Text numberOfLines={1} style={styles.toggleTxtStyle}>
              Remember Password
            </Text>
          </View>
          <PrimaryButton
            onPress={signIn}
            btnTxt="Log in"
            style={styles.btnStyle}
          />
        </View>
      ) : (
        <View style={styles.switchContent}>
          <PrimaryInput
            value={regUser}
            onChangeText={regUser => setRegUser(regUser)}
            placeholder="Username"
          />
          <PrimaryInput
            value={regEmail}
            onChangeText={regEmail => setRegEmail(regEmail)}
            keyboardType="email-address"
            placeholder="Email"
          />
          <PrimaryInput
            value={regPassword}
            onChangeText={regPassword => setRegPassword(regPassword)}
            placeholder="Enter Password"
            secureTextEntry={true}
          />
          <View style={styles.toggleStyle}>
            <CheckBox
              disabled={false}
              value={toggleTerms}
              onValueChange={toggleTerm => setToggleTerms(toggleTerm)}
            />
            <Text numberOfLines={1} style={styles.toggleTxtStyle}>
              I agree to the Terms and Conditions
            </Text>
          </View>
          <PrimaryButton
            onPress={registerUser}
            btnTxt="Register"
            style={styles.btnStyle}
          />
        </View>
      )}
    </Container>
  );
};
