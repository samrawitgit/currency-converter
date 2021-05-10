import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import colors from "../constants/colors";

//component that returns a customizable row item, takes in text and optional icon
export const RowItem = ({ title, rightIcon, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.row}>
            <Text style={styles.title}>{ title }</Text>
            {rightIcon}    
        </TouchableOpacity>
    )
};

export const Separator = () => {
    return (
        <View style={styles.separator} />
    )
}

const styles = StyleSheet.create({
    row:{
        paddingHorizontal: 20,
        paddingVertical: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',      
        backgroundColor: colors.white,
    },
    title:{
        color: colors.text,
        fontSize: 16,
    },
    separator: {
        backgroundColor: colors.border,
        height: StyleSheet.hairlineWidth,
        marginLeft: 20,
    }
})