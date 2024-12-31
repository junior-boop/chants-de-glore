import Header from "@/components/header";
import LongItems, { Items, ListeItems } from "@/components/longItems";
import Search from "@/components/search";
import Titre from "@/components/titre";
import { Stack } from "expo-router";
import { ScrollView, Text, View } from "react-native";

export default function Index() {
  return (
    <View style = {{ flex : 1, }} >
      <Stack screenOptions={{
        headerShown : false,
        gestureEnabled : true,
      }} />
      <Header />
      <ScrollView
        contentContainerStyle = {{
          paddingBottom : 100
        }}
      >
      <View style = {{ paddingHorizontal : 16, marginTop : 12, marginBottom : 30}}>
        <Search />
      </View>
      {/* <Titre titre= {'Recents'} />
      <View style = {{ paddingHorizontal : 16, marginBottom : 30}}>
        <LongItems />
        <LongItems />
      </View> */}
      <Titre titre= {'Chants'} />
      <View style = {{ paddingHorizontal : 16,}}>
        <ListeItems />
      </View>
      </ScrollView>
    </View>
  );
}
