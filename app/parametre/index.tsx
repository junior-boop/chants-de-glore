import { Header_Parametre } from "@/components/header";
import { router, Stack } from "expo-router";
import { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Parametre(){
    const [langue, setLangue] = useState(0)

    useEffect(() => {
        if(langue === 0){
            setLangue(1)
        }else{
            setLangue(0)
        }
    }, [])
    return(
        <View style = {{ flex :1, backgroundColor : '#E1E1D7'}}>
            <Stack screenOptions={{
                    headerShown : false,
                    gestureEnabled : true,
                  }} />
            <Header_Parametre />
            <View style = {{ paddingHorizontal : 16}}>
                <Pressable onPress={() => router.push('/favories')} style = {{ height : 69, paddingHorizontal : 12, justifyContent : 'center', borderWidth:1, borderBottomColor : '#4B4B3B40', borderTopColor : 'transparent', borderRightColor : 'transparent', borderLeftColor : 'transparent'}}>
                    <Text style = {{ fontSize: 18}}>Liste des favoris </Text>
                </Pressable>
                <View style = {{ height : 69, borderWidth:1, borderBottomColor : '#4B4B3B40', borderTopColor : 'transparent', borderRightColor : 'transparent', borderLeftColor : 'transparent', flexDirection : 'row', justifyContent : 'space-between', alignItems : 'center'}}>
                    <Text style = {{ fontSize: 18,paddingLeft : 12 }}>Langue</Text>
                    <View  style = {{paddingRight : 12, flexDirection : 'row', alignItems : 'center', gap : 5, borderColor : 'transparent', borderWidth : 1}}>
                        <Pressable onPress={() => setLangue(0) } style = {langue === 0 ? style.select : style.normal}>
                            <Text style = {langue === 0 ? style.selectText : style.normatText}>FR</Text>
                        </Pressable>
                        <Pressable onPress={() => setLangue(1) } style = { langue === 1 ? style.select : style.normal}>
                            <Text style = { langue === 1 ? style.selectText : style.normatText}>EN</Text>
                        </Pressable>
                    </View>
                </View>
                <Pressable style = {{ height : 69, paddingHorizontal : 12, justifyContent : 'center', borderWidth:1, borderBottomColor : '#4B4B3B40', borderTopColor : 'transparent', borderRightColor : 'transparent', borderLeftColor : 'transparent'}}>
                    <Text style = {{ fontSize: 18}}>A Propos de nous</Text>
                </Pressable>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    normal : { width : 42, borderRadius : 7,  height : 42, justifyContent : 'center', alignItems : 'center' },
    select : { width : 42, borderRadius : 7, backgroundColor : "#4B4B3B", height : 42, justifyContent : 'center', alignItems : 'center' },
    normatText : { fontSize : 18, color : '#4B4B3B', fontWeight:'800'}, 
    selectText : { fontSize : 18, color : "white", fontWeight:'800'}
})