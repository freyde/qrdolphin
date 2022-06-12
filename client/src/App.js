import React, { useEffect } from 'react';
import {
  Switch,
  useColorMode,
  HStack,
  Text,
  NativeBaseProvider,
  extendTheme,
  theme as nbTheme
} from 'native-base';
import { Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './screens/Splash';
import Home from './screens/Home';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import ForgotPassword from './screens/ForgotPassword';
import Gallery from './screens/Gallery';


const theme = extendTheme({
  colors: {
    primary: nbTheme.colors.blue,
  }
});
const Stack = createNativeStackNavigator();

 // Color Switch Component for testing purposes
 function ToggleDarkMode() {
  const {colorMode, toggleColorMode} = useColorMode();
  return (
    <HStack
      space={2}
      alignItems="center"
      pl="4"
      _light={{
        bg: 'white'
      }}
      _dark={{
        bg: 'black'
      }}
    >
      <Text>Dark</Text>
      <Switch
        isChecked={colorMode === 'light'}
        onToggle={toggleColorMode}
        aria-label={
          colorMode === 'light' ? 'switch to dark mode' : 'switch to light mode'
        }
      />
      <Text>Light</Text>
    </HStack>
  );
}

const App = () => {
  useEffect(() => {
    if (Platform.OS === 'web') {
      const iconFontStyles = `@font-face {
          src: url(${require('react-native-vector-icons/Fonts/Ionicons.ttf')});
          font-family: "Ionicons";
        }`;

      // Create stylesheet
      const style = document.createElement('style');
      style.appendChild(document.createTextNode(iconFontStyles));

      // Inject stylesheet
      document.head.appendChild(style);
    }
  }, []);

  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}} >
          <Stack.Screen name="Splash" component={Splash} options={{ title: '' }} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Gallery" component={Gallery} />
          <Stack.Screen name="SignIn" component={SignIn} options={{ title: 'Sign In' }} />
          <Stack.Screen name="SignUp" component={SignUp} options={{ title: 'Sign Up' }}/>
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ title: 'Forgot Password' }} />
        </Stack.Navigator>
      </NavigationContainer>
      <ToggleDarkMode />
    </NativeBaseProvider>
  );
}

export default App;