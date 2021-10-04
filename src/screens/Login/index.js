import React, {useState, useLayoutEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {
  Container,
  LoginIcon,
  PrimaryButton,
  PrimaryInput,
} from '../../components';
import CheckBox from '@react-native-community/checkbox';
import {styles} from './styles';
import {strings} from '../../strings';
import {images} from '../../assets/images';
import auth from '@react-native-firebase/auth';
import {LoginManager, AccessToken, Profile} from 'react-native-fbsdk-next';

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

  async function facebookAuth() {
    try {
      // Attempt login with permissions
      const result = await LoginManager.logInWithPermissions([
        'public_profile',
        'email',
      ]);

      if (result.isCancelled) {
        throw 'User cancelled the login process';
      }

      // Once signed in, get the users AccesToken
      const data = await AccessToken.getCurrentAccessToken();

      if (!data) {
        throw 'Something went wrong obtaining access token';
      }

      // Create a Firebase credential with the AccessToken
      const facebookCredential = auth.FacebookAuthProvider.credential(
        data.accessToken,
      );

      // Sign-in the user with the credential
      await auth().signInWithCredential(facebookCredential);
    } catch (error) {
      console.log(error);
    }
  }

  const signinWithFacebook = async () => {
    facebookAuth().then(() =>
      console.log('Signedin with Facebook!'),
    );
    const profileInfo = await Profile.getCurrentProfile();
    const {name, imageURL} = profileInfo;
    navigation.navigate('Profile', {name, imageURL});
  };

  return (
    <Container style={styles.Container}>
      <View style={styles.switcherContainer}>
        <TouchableOpacity
          onPress={() => SetSwitchTabs(true)}
          style={[styles.switcherBtn, switchTabs && styles.activeSwitcher]}
          activeOpacity={0.8}>
          <Text numberOfLines={1} style={styles.switcherTxt}>
            {strings.login}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => SetSwitchTabs(false)}
          style={[styles.switcherBtn, !switchTabs && styles.activeSwitcher]}
          activeOpacity={0.8}>
          <Text numberOfLines={1} style={styles.switcherTxt}>
            {strings.register}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.socialLoginContainer}>
        <LoginIcon img={images.facebook} onPress={signinWithFacebook} />
        <LoginIcon img={images.twitter} />
        <LoginIcon img={images.google} />
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
              {strings.rememberPassword}
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
              {strings.terms}
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
