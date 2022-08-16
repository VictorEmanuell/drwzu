import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text } from 'react-native';

import AppLoading from 'expo-app-loading';
import { useFonts, Ubuntu_400Regular, Ubuntu_500Medium } from '@expo-google-fonts/ubuntu';

import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/routes';

export default function App() {

  let [fontsLoaded] = useFonts({
    Ubuntu_400Regular,
    Ubuntu_500Medium
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </SafeAreaView>
  );
}


import { LogBox } from 'react-native';

LogBox.ignoreAllLogs();