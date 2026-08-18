import { Stack } from "expo-router";
import {useFonts} from "expo-font";

export default function RootLayout() {

  const [fontLoaded] = useFonts({
    'Poppins_Regular': require('@/assets/fonts/Poppins/Poppins-Regular.ttf'),
    'Poppins_Medium': require('@/assets/fonts/Poppins/Poppins-Medium.ttf'),
    'Poppins_SemiBold': require('@/assets/fonts/Poppins/Poppins-SemiBold.ttf'),
    'Poppins_Bold': require('@/assets/fonts/Poppins/Poppins-Bold.ttf'),
    'Poppins_ExtraBold': require('@/assets/fonts/Poppins/Poppins-ExtraBold.ttf'),
    'Poppins_Black': require('@/assets/fonts/Poppins/Poppins-Black.ttf'),
    'Poppins_Thin': require('@/assets/fonts/Poppins/Poppins-Thin.ttf'),
    'Poppins_Light': require('@/assets/fonts/Poppins/Poppins-Light.ttf'),
    'Poppins_Italic': require('@/assets/fonts/Poppins/Poppins-Italic.ttf'),
    'Poppins_ExtraLight': require('@/assets/fonts/Poppins/Poppins-ExtraLight.ttf'),
  })

  return <Stack
    screenOptions={{
      headerShown: false,
      contentStyle: {backgroundColor: "#fff"},
    }}
  />;
}
