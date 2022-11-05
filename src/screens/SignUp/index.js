import { useRef, useState } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, Animated, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { useNavigation } from '@react-navigation/native';

import { styles } from './styles';

import Button from '../../components/Button';

export function SignUp() {
  const [loginInput, setLoginInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [confirmPasswordInput, setConfirmPasswordInput] = useState('');

  const fadeInUp = useRef(new Animated.Value(-130)).current;
  const marginAnimatedWelcome = useRef(new Animated.Value(80)).current;

  const navigation = useNavigation();

  Animated.timing(fadeInUp, {
    toValue: 0,
    duration: 250,
    useNativeDriver: false
  }).start();

  Animated.timing(marginAnimatedWelcome, {
    toValue: 100,
    duration: 800,
    useNativeDriver: false
  }).start();

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior='height'>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Animated.View style={[styles.welcome, { marginTop: marginAnimatedWelcome }]}>
            <Text style={styles.welcomeText}>Bem-Vindo</Text>
            <Text style={styles.signInText}>Cadastre-se para começar</Text>
          </Animated.View>

          <Animated.View
            style={[styles.containerForm, { bottom: fadeInUp }]}
          >
            <LinearGradient
              colors={['#A2B2FC', '#FFF1BE']}
              locations={[0.15, 1.37]}
              start={{ x: 0.8, y: 0.8 }}
              end={{ x: -0.2, y: -0.2 }}
              style={styles.containerFormGradient}
            >
              <TextInput
                style={[styles.formTextInput, { color: 'white' }]}
                placeholder=' Login'
                placeholderTextColor='#FFFFFF'
                autoCorrect={false}
                onChangeText={(content) => setLoginInput(content)}
              />
              <TextInput
                style={[styles.formTextInput, { color: 'white' }]}
                placeholder=' Senha'
                placeholderTextColor='#FFFFFF'
                secureTextEntry={true}
                textContentType={'password'}
                autoCorrect={false}
                onChangeText={(content) => setPasswordInput(content)}
              />
              <TextInput
                style={[styles.formTextInput, { color: 'white' }]}
                placeholder=' Confirme a senha'
                placeholderTextColor='#FFFFFF'
                secureTextEntry={true}
                textContentType={'password'}
                autoCorrect={false}
                onChangeText={(content) => setConfirmPasswordInput(content)}
              />
              <TouchableOpacity
                style={styles.haveAccountButton}
                activeOpacity={0.5}
                onPress={() => navigation.navigate('SignIn')}
              >
                <Text style={styles.haveAccountText}>Já possui uma conta? Acesse!</Text>
              </TouchableOpacity>

              <Button
                backgroundColor={loginInput.length && passwordInput.length && confirmPasswordInput.length > 0 ? 'black' : 'gray'}
                textColor={'white'}
                text={'Continuar'}
                buttonStyle={{ marginTop: 50 }}
                onPress={() => {
                  navigation.navigate('ChooseAvatar', {
                    login: loginInput,
                    password: passwordInput
                  })
                }}
                disabled={loginInput.length && passwordInput.length && confirmPasswordInput.length > 0 ? false : true}
              />
            </LinearGradient>
          </Animated.View>
        </View >
      </TouchableWithoutFeedback >
    </KeyboardAvoidingView>
  );
}