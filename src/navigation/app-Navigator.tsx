import { NativeStackNavigationOptions, createNativeStackNavigator } from "@react-navigation/native-stack"
import { AppStackParamList } from "./interface"
import { useTheme } from "native-base"
import HomeScreen from "../screens/Home/HomeScreen"

const Stack = createNativeStackNavigator<AppStackParamList>()

const AppNavigator = () => {
  const { colors } = useTheme();

  const navigatorScreenOptions: NativeStackNavigationOptions ={
      navigationBarHidden: true,
      statusBarColor: '#0e003d',
      headerStyle: {backgroundColor: colors.primary[500]},
      headerTintColor: '#ffffff'
  }
  return(
      <Stack.Navigator screenOptions={navigatorScreenOptions}>
        <Stack.Screen name="Home" component={HomeScreen}/>
        {/* <Stack.Screen name="Register" component={RegisterScreen}/> */}
      </Stack.Navigator>
  )
}

export default AppNavigator