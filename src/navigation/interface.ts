import { NativeStackNavigationProp } from "@react-navigation/native-stack"

export type AppStackParamList = {
  Home: undefined,
  HistoryScreen: undefined
  Glucose: undefined,
}

export type AppNavigatorProps = NativeStackNavigationProp<AppStackParamList>