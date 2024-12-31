import { Header_Search } from "@/components/header";
import { Stack } from "expo-router";
import { useEffect, useMemo, useState } from "react";
import { ScrollView, Text, View } from "react-native";

import Data from '@/database/liste.json'
import LongItems from "@/components/longItems";

export default function SearchPage(){
    const [value, setValue] = useState('')
    const [data, setData] = useState(Data)


    const handleValue = (text : string) => {
        setValue(text)
    }

    const filteredTitles = useMemo(() => {
        const searchRegex = new RegExp(value, 'i');
        if(value.length === 0){
            return []
        } else {
            return data.filter(title => searchRegex.test(title.titre));
        }

        
      }, [value]);

    useEffect(() => {
        // filtre des titres de chaque chants dans la base de donnee

    }, [value])
    return(
        <View style = {{ flex : 1, backgroundColor : '#E1E1D7'}}>
            <Stack />
            <Header_Search value={value} onChangeText={handleValue} />
            <ScrollView contentContainerStyle = {{ paddingHorizontal : 16, paddingBottom : 100, paddingTop : 12}}>
                {
                    filteredTitles.map((el, key) => <LongItems data={el} key = {key}/>)
                }
            </ScrollView>
        </View>
    )
}