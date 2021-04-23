import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    StatusBar,
    Platform,
    View,
    Text
} from 'react-native';
import { useNavigation } from '@react-navigation/core';

import { Button } from '../components/Button';
import Colors from '../styles/Colors';
import fonts from '../styles/fonts';

export function Confirmation(){

    const navigation = useNavigation();

    function handleMoveOn(){
        navigation.navigate('PlantSelect');
    }

    return(
        <>
        <StatusBar barStyle='dark-content' backgroundColor='white'/>
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.emoji}>
                    😄
                </Text>
                <Text style={styles.title}>
                    Prontinho
                </Text>
                <Text style={styles.subtitle}>
                    Agora vamos começar a cuidar das suas{'\n'}
                    plantinhas com muito cuidado.
                </Text>

                <View style={styles.footer}>
                    <Button
                        title="Começar"
                        onPress={handleMoveOn}
                    />
                </View>

            </View>


        </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        padding: 30
    },
    title: {
        fontSize: 22,
        fontFamily: fonts.heading,
        textAlign: 'center',
        color: Colors.heading,
        lineHeight: 38,
        marginTop: 15
    },
    subtitle: {
        fontFamily: fonts.text,
        textAlign: 'center',
        fontSize: 17,
        paddingHorizontal: 10,
        color: Colors.heading
    },
    emoji: {
        fontSize: 78,
        paddingVertical: 20
    },
    footer: {
        width: '100%',
        paddingHorizontal: 50,
        marginTop: 20
    }
});