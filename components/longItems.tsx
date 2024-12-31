import { StyleSheet, Text, View, Dimensions, Pressable } from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, useRouter } from "expo-router";
import Data  from "../database/liste.json"

const w = Dimensions.get('window').width

const audio_color = "#00B828"
const bg_color = '#fffa'
const star = '#FF9500'

export default function LongItems({ data } : { data : any}){
    const router = useRouter()
    return(
        
            <Pressable
                onPress={() => router.navigate({
                    pathname : '/[id]',
                    params : {
                        id : 1
                    }
                })}
                style = {sytle.longItems}>

                <View style ={sytle.partiNombre}>
                    <Text style = {sytle.Identif}>{data.id < 10 ? `0${data.id}` : data.id}</Text>
                </View>
                <View style = {sytle.partiTitre}>
                    <Text style ={sytle.titre}>{data.titre}</Text>
                </View>
                <View style = {sytle.partiAudo}>
                    {
                        data.audioDownload === true ? <MaterialIcons name="audiotrack" size={24} color={audio_color} /> : null
                    }
                </View>
            </Pressable>
    )
}

export function Items ({data}: { data : any}){
    const router = useRouter()
    return(
        
            <Pressable
                onPress={() => router.navigate({
                    pathname : '/[id]',
                    params : {
                        id : 1
                    }
                })}
            style = {sytle.items}>
                {
                    data.isFavor === true ? <FontAwesome name="star" size={15} color={star} style = {{ position : 'absolute', top : 6}} /> : null
                }

                <Text style = {{ fontSize : 36, fontWeight : '900', }}>{data.id}</Text>
                {
                    data.audioDownload === true ? <View style = {sytle.audioIndicator}></View> : null
                }
            </Pressable>
    )
}


export function ListeItems (){
    const data = Data
    return(
        <View style = {{ flexDirection : 'row', flexWrap : 'wrap', gap : 16, flexGrow: 1}}>
            {
                data.map((el , key) => <Items data = {el} key = {key} />)
            }
        </View>
    )
}

const sytle = StyleSheet.create({
    longItems : {
        height : 77, 
        borderRadius : 12, 
        backgroundColor : bg_color,
        flexDirection : 'row', 
        marginBottom : 12
    }, 
    partiNombre : {
        height : '100%', 
        width : 82, 
        alignItems : 'center',
        justifyContent : 'center', 
    }, 
    Identif : {
        fontSize : 36, 
        fontWeight : '900',
    }, 
    partiTitre : {
        height : '100%',
        flex : 1, 
        justifyContent : 'center',
    },
    titre : {
        fontSize : 20, 
        fontWeight : '800', 
    },
    partiAudo : {
        width : 76,
        height: '100%', 
        alignItems : 'center', 
        justifyContent : 'center', 
    }, 
    items : { 
        width : (w - 32 - 48) / 4, 
        height : (w - 32 - 48) / 4,
        aspectRatio : 1, 
        alignItems : 'center', 
        justifyContent : 'center', 
        position : 'relative',
        backgroundColor : bg_color, 
        borderRadius : 12
    },
    audioIndicator :{
        position : 'absolute',
        right : 5,
        bottom : 5, 
        width : 12, 
        height : 12,
        aspectRatio : 1, 
        borderRadius : 9, 
        backgroundColor : audio_color,
    }

})