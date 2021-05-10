import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import colors from '../constants/colors';

export default function Button({ text, onPress }) {
    return(
        <TouchableOpacity onPress={ onPress } style={styles.button}>
            <Image 
                source={ require('../assets/images/reverse.png') }
                style={styles.buttonIcon}
                resizeMode='contain'
            />
            <Text style={styles.buttonText}>{ text }</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20
        
    },
    buttonIcon: {
        marginRight: 10,
        width: 20,
        height: 20
    },
    buttonText:{
        color: colors.white,
        fontSize: 16
    }
})