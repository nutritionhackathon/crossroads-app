import React from "react";
import { View, FlatList } from "react-native";
import HistoryEntry from "../components/HistoryEntry";
import Button from '../components/Button';
import TitleBar from '../components/TitleBar'

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
            <TitleBar title="History" />
            <View style={{ flex: 1, width: "100%"}}>
                <FlatList data={entries} renderItem={({item}) => <HistoryEntry navigation={navigation} text={item.title} imageURI='../assets/goodExample.png' />} />
            </View>
            <View style={{alignItems: 'center', justifyContent: 'center', padding: "2%"}}>
                <Button title="Return Home" onPress={() => { navigation.goBack()}} />
            </View>
        </>
    );
}
