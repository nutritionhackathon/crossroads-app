import React from "react";
import { View, FlatList, Text } from "react-native";
import HistoryEntry from "../components/HistoryEntry";
import Button from '../components/Button';

export default function History({navigation}) {
    // either store these locally or use a database in backend
    const entries = [
        {title: 'First'},
        {title: 'Second'},
        {title: 'Third'},
        {title: 'Fourth'},
        {title: 'Fifth'},
        {title: 'Sixth'},
    ];

    return (
        <>
            <View style={{ paddingTop: 40, alignItems: 'center', backgroundColor:"#fffbef", width:"100%", paddingBottom:10, borderColor:"black", borderWidth:2}}>
                <Text style={{fontSize : 30}}>History</Text>
            </View>
            <View style={{ flex: 1, width: "100%"}}>
                <FlatList style={{}} data={entries} renderItem={({item}) => <HistoryEntry navigation={navigation} text={item.title} imageURI={'../assets/goodExample.png'} />} />
            </View>
            <View style={{alignItems: 'center', justifyContent: 'center', padding: "2%"}}>
                <Button title="Return Home" onPress={() => { navigation.goBack()}} />
            </View>
        </>
    );
}
