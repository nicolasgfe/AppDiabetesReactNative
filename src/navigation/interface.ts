import { NativeStackNavigationProp } from "@react-navigation/native-stack"

export type AppStackParamList = {
  Home: undefined,
  HistoryScreen: undefined
  Glucose: undefined,
  NutritionHints: undefined,
  ExerciseHints: undefined
}

export type AppNavigatorProps = NativeStackNavigationProp<AppStackParamList>