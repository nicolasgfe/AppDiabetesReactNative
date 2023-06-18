import { NativeStackNavigationProp } from "@react-navigation/native-stack"

export type AppStackParamList = {
  Home: undefined,
  HistoryScreen: undefined
}

export type AppNavigatorProps = NativeStackNavigationProp<AppStackParamList>