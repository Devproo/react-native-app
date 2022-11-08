import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, theme } from 'react-native'
import { DefaultTheme, NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useFonts } from 'expo-font'
import Home from './screens/Home'
import Details from './screens/Details'


export default function App() {
  const stack = createNativeStackNavigator()
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      backgroundColor: 'transparent',
    },
  }
  const [loaded] = useFonts({
    interBold: require('./assets/fonts/Inter-Bold.ttf'),
    interSemiBold: require('./assets/fonts/Inter-SemiBold.ttf'),
    interLight: require('./assets/fonts/Inter-Light.ttf'),
    interMedium: require('./assets/fonts/Inter-Medium.ttf'),
    interRegular: require('./assets/fonts/Inter-Regular.ttf'),
  })
  if (!loaded) return null
  return (
    <NavigationContainer theme={theme}>
      <stack.Navigator screenOptions={{ headerShown: true }}>
        <stack.Screen name='Home' component={Home} />
        <stack.Screen name='Details' component={Details} />
      </stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
