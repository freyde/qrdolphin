import React from 'react';
import {
  Switch,
  useColorMode,
  HStack,
  Text,
  NativeBaseProvider,
  extendTheme,
  theme as nbTheme
} from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './screens/Splash';
import Home from './screens/Home';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import ForgotPassword from './screens/ForgotPassword';


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
  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}} >
          <Stack.Screen name="Splash" component={Splash} options={{ title: '' }} />
          <Stack.Screen name="Home" component={Home} options={{ title: 'Home' }} />
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