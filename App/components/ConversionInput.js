import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput} from 'react-native';
import colors from '../constants/colors';

export default function ConversionInput({ text, onButtonPress, ...props }) {

    const containerStyles = [styles.container];

    if (props.editable === false){
        containerStyles.push(styles.containerDisabled);
    }

    return (
        <View style={containerStyles}>
            <TouchableOpacity onPress={onButtonPress} style={styles.button}>
                <Text style={styles.buttonText}>{text}</Text>
            </TouchableOpacity>
            <TextInput style={styles.input} {...props} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        marginVertical: 10,
        marginHorizontal: 20,
        borderRadius: 5,
        flexDirection: 'row',
    },
    containerDisabled: {
        backgroundColor: colors.offWhite,
    },
    button: {
        padding: 15,
        borderRightColor: colors.border,
        borderRightWidth: 1,
        backgroundColor: colors.white,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
    },
    buttonText: {
        fontSize: 18,
        color: colors.blue,
        fontWeight: 'bold',
    },
    input: {
        flex: 1,
        padding: 10,
        fontSize: 16,
        color: colors.textLight,
    }
})
