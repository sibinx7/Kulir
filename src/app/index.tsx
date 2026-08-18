import {Text, View, StyleSheet, FlatList, ImageBackground, Pressable} from "react-native";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import {HomeMainMenu} from "@/constants/menus";
import {IHomeMainMenuItem} from "@/interfaces/menu";


const homneMainMenuRender  = ({item}:{item: IHomeMainMenuItem}) => {
  return <Pressable className={``}>
    <Text className={`text-white font-bold font-poppins`}>{item.title}</Text>
  </Pressable>
}

const homeBackground = require("@/assets/images/backgrounds/kulir-home-background.png");
export default function Index() {

  const homeMenu  = HomeMainMenu;

  return (
    <ImageBackground
      source={homeBackground}
      style={styles.background}
      resizeMode="cover"
    >
    <SafeAreaProvider>
      <View style={{flex: 1}} >
        <SafeAreaView style={{flex: 1}}>
          <View style={{height: 20}} >
            <FlatList horizontal={true} className={`flex mr-2 ml-2`} data={homeMenu} renderItem={homneMainMenuRender}/>
          </View>
          <View style={styles.container}>
            <Text>Edit src/app/index.tsx to edit this screen.</Text>
          </View>
        </SafeAreaView>
      </View>
    </SafeAreaProvider>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
