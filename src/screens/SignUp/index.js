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
  const marginAnimatedWelcome = useRef(new Animated.Value(100)).current;
  const marginAnimatedSignInOptions = useRef(new Animated.Value(50)).current;

  const navigation = useNavigation();

  Animated.timing(fadeInUp, {
    toValue: 0,
    duration: 250,
    useNativeDriver: false
  }).start();

  Animated.timing(marginAnimatedWelcome, {
    toValue: 65,
    duration: 500,
    useNativeDriver: false
  }).start();

  Animated.timing(marginAnimatedSignInOptions, {
    toValue: 30,
    duration: 700,
    useNativeDriver: false
  }).start();

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior='height'>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Animated.View style={[styles.welcome, { marginTop: marginAnimatedWelcome }]}>
            <Text style={styles.welcomeText}>Bem-Vindo</Text>
            <Text style={styles.signInText}>Entre para começar</Text>
          </Animated.View>

          <Animated.View style={[styles.signInWithOAuth, { marginTop: marginAnimatedSignInOptions }]}>
            <TouchableOpacity
              style={styles.buttonGoogle}
              activeOpacity={0.8}
              onPress={() => ''}
            >
              <Image
                style={styles.googleIcon}
                source={require('../../assets/google.png')}
              />
              <Text style={styles.googleText}>Entrar com Google</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttonMeta}
              activeOpacity={0.8}
              onPress={() => ''}
            >
              <Image
                style={styles.metaIcon}
                source={require('../../assets/meta.png')}
              />
              <Text style={styles.metaText}>Entrar com meta</Text>
            </TouchableOpacity>
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
                onPress={() => ''}
                disabled={loginInput.length && passwordInput.length && confirmPasswordInput.length > 0 ? false : true}
              />
            </LinearGradient>
          </Animated.View>
        </View >
      </TouchableWithoutFeedback >
    </KeyboardAvoidingView>
  );
}