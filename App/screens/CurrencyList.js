import React, { useContext } from 'react';
import { StatusBar, View, FlatList, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Entypo } from '@expo/vector-icons';

import colors from '../constants/colors';
import currencies from '../data/currencies.json';
import { RowItem, Separator } from '../components/RowItem';
import { ConversionContext } from "../util/ConversionContext";

export default function CurrencyList({ navigation, route = {} }) {

    const insets = useSafeAreaInsets();

    const params = route.params || {};    
    const { setBaseCurrency, setQuoteCurrency, baseCurrency, quoteCurrency } = useContext(ConversionContext)

    return(
        <View style={{flex: 1, backgroundColor: colors.white}}>
            <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
            <FlatList
                data={currencies}
                renderItem={({ item }) => {
                    let selected = false; //by default it becomes true only for base and quote currencies
                    if (params.isBaseCurrency && item === baseCurrency){
                        selected = true;
                    } else if (!params.isBaseCurrency && item === quoteCurrency){
                        selected = true;
                    }

                    return(
                        <RowItem
                            title={ item }
                            onPress={() => {
                                if (params.isBaseCurrency){
                                    setBaseCurrency(item);
                                } else {
                                    setQuoteCurrency(item);
                                }
                                navigation.pop();
                            }}
                            rightIcon={
                                selected && (
                                <View style={styles.icon}>
                                    <Entypo name="check" size={20} color={colors.white} />
                                </View>
                            )}
                        />
                    )
                }}
                keyExtractor={(item) => item}
                ItemSeparatorComponent={() => <Separator />}
                style={{paddingBottom: insets.bottom}}
            />     
        </View>
    )
}

/*ListFooterComponent={() => {
    <View style={{ paddingBottom: insets.bottom }} />
}}*/

const styles = StyleSheet.create({
    icon: {
        backgroundColor: colors.blue,
        width: 30,
        height: 30,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
    }
})