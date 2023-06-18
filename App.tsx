import { NavigationContainer } from "@react-navigation/native"
import AppThemeProvider from "./src/theme/AppThemeProvider";
import { AppNavigator } from "./src/navigation";
import HintScreen from "./src/screens/HintScreen/HintScreen"

const App = () => {
  return(
    // <HintScreen/>
    <AppThemeProvider>
      <NavigationContainer>
        <AppNavigator/>
      </NavigationContainer>
    </AppThemeProvider>
  )
}

export default App;