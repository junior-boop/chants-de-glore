import { Header_Page } from "@/components/header";
import { Stack, useLocalSearchParams } from "expo-router";
import { Pressable, ScrollView, Text, View, useWindowDimensions } from "react-native";

import RenderHtml from 'react-native-render-html';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Page(){
    const params = useLocalSearchParams()
    const Id = parseInt(params.id as string) 


    const source = {
        html: `
        ${params.content}
      `
      };

    const { width } = useWindowDimensions()

    const tagsStyles = {
        body : {
            padding : "0 20px 200px"
        },
        h1: {
          color: '#2ecc71',
          fontSize: 24,
          marginVertical: 10,
        },
        p: {
          color: '#34495e',
          lineHeight: 20,
        },
        b: {
          color: '#e74c3c',
        },
        
      };

      const baseStyle = {
        fontSize: 20,
      };

    
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
                <View style = {{ paddingLeft : 20, marginBottom : 20}}>
                    <View style = {{ flexDirection : 'row', alignItems : 'center', borderWidth : 1, borderColor : 'transparent', gap : 18}}>
                        <Text style = {{ fontSize : 48, fontWeight : '900'}}>{Id < 10 ? `0${params.id}` : params.id}</Text>
                        <Pressable style = {{ width : 42, height: 42, backgroundColor : '#4B4B3B', alignItems : 'center', justifyContent : 'center', borderRadius : 21}}>
                            <Ionicons name="musical-notes" size={24} color="white" />
                        </Pressable>
                    </View>
                    <View>
                        <Text style = {{ fontSize : 36, width : '90%'}}>{params.titre}</Text>
                    </View>
                </View>
                <RenderHtml 
                    //@ts-ignore
                    tagsStyles={tagsStyles}
                    baseStyle={baseStyle}
                    contentWidth={width}
                    source={source}
                />
            </ScrollView>
        </View>
    )
}