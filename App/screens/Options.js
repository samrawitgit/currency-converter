import React from 'react';
import { SafeAreaView, ScrollView, Linking, Alert, StatusBar } from "react-native";
import { Entypo } from '@expo/vector-icons';
import colors from '../constants/colors';

import { RowItem, Separator } from '../components/RowItem';

const openLink = (url) => {
    return Linking.openURL(url).catch(() => {
        Alert.alert('Sorry, something went wrong.','Please try again later');
    })
}

export default function Options() {
    return(
        <SafeAreaView style={{flex: 1}}>
            <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
            <ScrollView>
                <RowItem 
                    title="Theme"
                    onPress={() => alert('todo!')}
                    rightIcon={
                        <Entypo name="chevron-right" size={20} color={colors.blue} />
                    } 
                />

                <Separator />

                <RowItem 
                    title="React Native Basics"
                    onPress={() => 
                    openLink(
                        'https://reactnativeschool.com'
                    )}
                    rightIcon={
                        <Entypo name="export" size={20} color={colors.blue} />
                    } 
                />

                <Separator />

                <RowItem 
                    title="React Native by Example"
                    onPress={() => 
                    openLink(
                        'https://reactnativebyexample.com'
                    )}
                    rightIcon={
                        <Entypo name="export" size={20} color={colors.blue} />
                    } 
                />
            </ScrollView>
        </SafeAreaView>
    );
}