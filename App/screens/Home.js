import React, { useState, useContext } from 'react';
import { View, StyleSheet, StatusBar, Image, Dimensions, Text, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native'
import { format } from 'date-fns';
import { Entypo } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

import colors from '../constants/colors';
import ConversionInput from '../components/ConversionInput';
import Button from '../components/Button';
import KeyboardSpacer from '../components/KeyboardSpacer';
import { ConversionContext } from "../util/ConversionContext";

const screen = Dimensions.get('window')

export default function Home({ navigation }) {
    const { 
        baseCurrency,
        quoteCurrency,
        swapCurrencies,
        date,
        rates,
        isLoading,
    } = useContext(ConversionContext);

    const [value, setValue] = useState('100');
    const [scrollEnabled, setScrollEnabled] = useState(false);
    
    const conversionRate = rates[quoteCurrency];

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor={colors.blue} />
            <ScrollView scrollEnabled={scrollEnabled}>

                <SafeAreaView style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.push('Options')}>
                        <Entypo name="cog" size={32} color={colors.white} />
                    </TouchableOpacity>   
                </SafeAreaView>

                <View style={styles.content}>
                    <View style={styles.logoContainer}>
                        <Image 
                            source={ require('../assets/images/background.png') }
                            style={styles.logoBackground}
                          resizeMode='contain'
                        />
                        <Image 
                            source={ require('../assets/images/logo.png') }
                            style={styles.logo}
                            resizeMode='contain'
                        />
                    </View>

                    <Text style={styles.textHeader}>Currency Converter</Text>

                    {isLoading ? 
                    (
                        <ActivityIndicator color={colors.white} size="large" />
                    ) : (   
                        <>             
                            <View style={styles.inputContainer}>
                                <ConversionInput 
                                    text={baseCurrency}
                                    onButtonPress={() => 
                                        navigation.push('CurrencyList', { 
                                            title: 'Base Currency', 
                                            isBaseCurrency: true,
                                        })
                                    }
                                    value={value}
                                    keyboardType="numeric"
                                    onChangeText={(text) => setValue(text)}
                                />

                                <ConversionInput 
                                    text={quoteCurrency}
                                    onButtonPress={() => 
                                        navigation.push('CurrencyList', { 
                                            title: 'Quote Currency', 
                                            isBaseCurrency: false,
                                        })
                                    }
                                    value={
                                        value && `${(parseFloat(value) * conversionRate).toFixed(2) }`
                                    }
                                    keyboardType="numeric"
                                    editable={false}
                                />
                            </View>
                        
                            <Text style={styles.text}>
                            {`1 ${baseCurrency} = ${conversionRate} ${quoteCurrency} as of ${
                                date && format(new Date(date),"MMM do, yyyy")
                            }.`}
                            </Text>

                            <Button
                                text="Reverse Currencies"
                                onPress={() => swapCurrencies()}
                            />
                        </>
                    )}
                    
                    <KeyboardSpacer onToggle={(visible) => setScrollEnabled(visible)} />
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.blue,
    },
    content: {
        paddingTop: screen.height * 0.01,
    },
    logoContainer:{
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: -40
    },
    logoBackground: {
        width: screen.width * 0.45,
        height: screen.height * 0.45,
    },
    logo: {
        position: 'absolute',
        width: screen.width * 0.25,
        height: screen.height * 0.25,
    },
    textHeader: {
        color: colors.white,
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10
    },
    text: {
        color: colors.white,
        fontSize: 14,
        textAlign: 'center'
    },
    inputContainer: {
        marginBottom: 10,
    },
    header: {
        alignItems: 'flex-end',
        marginHorizontal: 20,
        marginTop: 10
    }
})
