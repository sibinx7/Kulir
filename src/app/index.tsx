import {Text, View, StyleSheet, FlatList} from "react-native";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import {HomeMainMenu} from "@/constants/menus";
import {IHomeMainMenuItem} from "@/interfaces/menu";


const homneMainMenuRender  = ({item}:{item: IHomeMainMenuItem}) => {
  return <Text>{item.title}</Text>
}
export default function Index() {

  const homeMenu  = HomeMainMenu;

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View style={{height: 20}} >
          <FlatList horizontal={true} data={homeMenu} renderItem={homneMainMenuRender}/>
        </View>
        <View style={styles.container}>
          <Text>Edit src/app/index.tsx to edit this screen.</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
