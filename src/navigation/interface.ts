import { NativeStackNavigationProp } from "@react-navigation/native-stack"

export type AppStackParamList = {
  Home: undefined,
  History: undefined,
  Glucose: undefined,
  Exercise_tips: undefined,
  Nutrition_tips: undefined,

}

export type AppNavigatorProps = NativeStackNavigationProp<AppStackParamList>