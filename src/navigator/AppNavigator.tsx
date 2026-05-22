import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Onboarding1 from '../screens/Onboarding1'
import Onboarding2 from '../screens/Onboarding2'
import SignInScreen from '../screens/SignInScreen'
import TabNavigator from './TabNavigator'
import SignUpScreen from '../screens/SignUpScreen'

const Stack = createNativeStackNavigator()

const AppNavigator = () => {

  return (

    <Stack.Navigator screenOptions={{ headerShown: false }}>

      <Stack.Screen
        name='Onboarding1'
        component={Onboarding1}
      />

      <Stack.Screen
        name='Onboarding2'
        component={Onboarding2}
      />

      <Stack.Screen
        name='SignUp'
        component={SignUpScreen}
      />

      <Stack.Screen
        name='SignIn'
        component={SignInScreen}
      />

      <Stack.Screen
        name='MainTabs'
        component={TabNavigator}
      />

    </Stack.Navigator>

  )
}

export default AppNavigator