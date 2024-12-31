import { StyleSheet, Text, Touchable, TouchableOpacity, View } from "react-native";
import Feather from '@expo/vector-icons/Feather';
import { useRouter } from "expo-router";
export default function Search (){
    const router = useRouter()
    return(
        <TouchableOpacity onPress={() => router.navigate('/search')}>
            <View style = {style.search}>
                <Feather name="search" size={24} color="#4B4B3B" />
                <Text style = {style.text}>Rechercher un titre</Text>
            </View>
        </TouchableOpacity>
    )
}


const style = StyleSheet.create({
    search : {
        height : 67, 
        flexDirection : 'row',
        alignItems : 'center',
        gap : 16, 
        paddingHorizontal : 16, 
        borderRightColor : 'transparent',
        borderLeftColor : 'transparent',
        borderWidth : 1,
        borderBottomColor : '#CACAAD', 
        borderTopColor : '#CACAAD',
    }, 
    text : {
        fontSize : 18,
        fontWeight : 'bold',
        color : "#4B4B3B"
    }
})