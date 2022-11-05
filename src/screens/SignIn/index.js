import { useRef, useState } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, Animated, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { useNavigation } from '@react-navigation/native';

import { styles } from './styles';

import Button from '../../components/Button';

export function SignIn() {
  const [loginInput, setLoginInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  const fadeInUp = useRef(new Animated.Value(-1000)).current;

  const navigation = useNavigation();

  Animated.timing(fadeInUp, {
    toValue: 0,
    duration: 800,
    useNativeDriver: false
  }).start();

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior='height' keyboardVerticalOffset={60}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.welcome}>
            <Text style={styles.welcomeText}>Bem-Vindo</Text>
            <Text style={styles.signInText}>Entre para começar</Text>
          </View>

          <View style={styles.signInWithOAuth}>
            <TouchableOpacity
              style={styles.buttonGoogle}
              activeOpacity={0.9}
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
              activeOpacity={0.9}
              onPress={() => ''}
            >
              <Image
                style={styles.metaIcon}
                source={require('../../assets/meta.png')}
              />
              <Text style={styles.metaText}>Entrar com meta</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.createAccount}>
            <Text style={styles.createAccountText}>Não tem uma conta?</Text>
            <TouchableOpacity
              style={styles.createAccountButton}
              activeOpacity={0.8}
              onPress={() => navigation.navigate('SignUp')}
            >
              <Text style={styles.createAccountButtonText}>Cadastre-se!</Text>
            </TouchableOpacity>
          </View>

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
              <TouchableOpacity
                style={styles.forgotPasswordButton}
                activeOpacity={0.5}
                onPress={() => ''}
              >
                <Text style={styles.forgotPasswordText}>esquecei a senha</Text>
              </TouchableOpacity>

              <Button
                backgroundColor={loginInput.length && passwordInput.length > 0 ? 'black' : 'gray'}
                textColor={'white'}
                text={'Continuar'}
                buttonStyle={{ marginTop: 50 }}
                disabled={loginInput.length && passwordInput.length > 0 ? false : true}
                onPress={() => navigation.navigate('Home')}
              />
            </LinearGradient>
          </Animated.View>
        </View >
      </TouchableWithoutFeedback >
    </KeyboardAvoidingView>
  );
}