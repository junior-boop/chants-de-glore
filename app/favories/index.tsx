import { Header_Favories } from "@/components/header";
import { useMemo, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import Data from '@/database/liste.json'
import LongItems from "@/components/longItems";


export default function FavoriesPage(){
    const [data, setData] = useState(Data)

    const favor = useMemo(() => {
        return data.filter(el => el.isFavor === true)
    }, [data])
    return(
        <View>
            <Header_Favories />
            <ScrollView contentContainerStyle = {{ paddingHorizontal : 16, paddingBottom : 100, paddingTop : 12}}>
                {
                    favor.map((el, key) => <LongItems data={el} key = {key}/>)
                }
            </ScrollView>
        </View>
    )
}