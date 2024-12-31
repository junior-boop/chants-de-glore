import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from "expo-router";
import FontAwesome from '@expo/vector-icons/FontAwesome';

import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function Header(){
    const router = useRouter()
    return(
        <View style = {style.header}>
            <View style = {{ flexDirection : 'row', justifyContent : 'space-between', alignItems : 'center'}}>
                <Text style = {{ fontSize : 24, fontWeight : 'bold'}}>Chants de Gloire</Text>
                <TouchableOpacity onPress={() => router.push('/parametre')}>
                    <Ionicons name="settings-sharp" size={24} color="black" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export function Header_Parametre(){
    const router = useRouter()
    return(
        <View style = {style.header}>
            <View style = {{ flexDirection : 'row', alignItems : 'center', gap : 16, borderWidth : 1, borderColor : 'transparent'}}>
                <TouchableOpacity onPress = { () => router.back() }>
                    <Ionicons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
                <Text style = {{ fontSize : 24, fontWeight : '800'}}>Parametres</Text>
            </View>
        </View>
    )
} 
export function Header_Favories(){
    const router = useRouter()
    return(
        <View style = {style.header}>
            <View style = {{ flexDirection : 'row', alignItems : 'center', gap : 16, borderWidth : 1, borderColor : 'transparent'}}>
                <TouchableOpacity onPress = { () => router.back() }>
                    <Ionicons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
                <Text style = {{ fontSize : 24, fontWeight : '800'}}>Les Favories</Text>
            </View>
        </View>
    )
} 
export function Header_Page(){
    const router = useRouter()
    return(
        <View style = {style.header}>
            <View style = {{ flexDirection : 'row', alignItems : 'center', justifyContent:'space-between', gap : 16, borderWidth : 1, borderColor : 'transparent'}}>
                <TouchableOpacity onPress = { () => router.replace('/') }>
                    <Ionicons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <MaterialIcons name="star-purple500" size={24} color="black" />
                </TouchableOpacity>
            </View>
        </View>
    )
} 

export function Header_Search({value, onChangeText}: {value : string, onChangeText : (text : string) => void}){
    const router = useRouter()
    return(
        <View style = {style.header}>
            <View style = {{ flexDirection : 'row', alignItems : 'center', gap : 16, borderWidth : 1, borderColor : 'transparent'}}>
                <TouchableOpacity onPress = { () => router.back() }>
                    <Ionicons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
                <View style = {{ flex : 1}}>
                    <TextInput
                        placeholder="Rechercher un titre"
                        placeholderTextColor = '#4B4B3B'
                        value={value}
                        onChangeText={onChangeText}

                        style = {{
                            fontSize: 18,
                            paddingVertical : 5 
                        }}
                        autoFocus
                    />
                </View>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    header : {
        paddingHorizontal : 16,
        borderColor : 'transparent',
        borderWidth : 1,
        height : 72,
        justifyContent : 'flex-end',
        paddingBottom : 16,
    },
    
})