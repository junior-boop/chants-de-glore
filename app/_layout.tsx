import { Slot, Stack } from "expo-router";
import { StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaView style = {{ flex : 1, backgroundColor : '#E1E1D7'}}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#E1E1D7'} />
      <Slot />
    </SafeAreaView>
  );
}
