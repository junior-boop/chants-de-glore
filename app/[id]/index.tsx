import { Header_Page } from "@/components/header";
import { Stack, useLocalSearchParams } from "expo-router";
import { useEffect } from "react";
import { ScrollView, Text, View, useWindowDimensions } from "react-native";

import RenderHtml from 'react-native-render-html';


export default function Page(){
    const params = useLocalSearchParams()

    const source = {
        html: `
        <html style = 'font-size : 18px'>
            <p style='text-align:center;'>
        Hello World!
      </p>
        </html>
      `
      };

    const { width } = useWindowDimensions()

    useEffect(() => {
        console.log(params)  
    }, [])
    return(
        <View>
            <Stack screenOptions={{
                headerShown : false,
                gestureEnabled : true,
                animation : 'slide_from_left', 
                animationDuration : 1000
            }} />
            <Header_Page />
            <ScrollView>
                <View>

                </View>
                <RenderHtml 
                    
                    contentWidth={width}
                    source={source}
                />
            </ScrollView>
        </View>
    )
}