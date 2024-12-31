import { Text, View } from "react-native";



export default function Titre ({ titre }: { titre : string}){
    return(
        <View style  = {{ paddingHorizontal : 16, marginBottom : 12}}>
            <View>
                <Text style ={{ fontSize: 15, fontWeight : '800'}}>{titre}</Text>
            </View>
        </View>
    )
}