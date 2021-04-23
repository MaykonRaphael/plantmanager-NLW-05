import React from 'react';
import { SafeAreaView,
    Text,
    Image,
    StyleSheet,
    Platform,
    StatusBar,
    TouchableOpacity,
    Dimensions,
    View
} from 'react-native';
import { Feather } from '@expo/vector-icons';

import wateringImg from '../assets/watering.png';
import Colors from '../styles/Colors';
import Fonts from '../styles/fonts';
import { useNavigation } from '@react-navigation/core';

export function Welcome(){

    const navigation = useNavigation();

    function handleStart(){
        navigation.navigate('UserIdentification')
    }

    return(
        <>
        <StatusBar barStyle='dark-content' backgroundColor={Colors.background}/>
        <SafeAreaView style={styles.container}>
            <View style={styles.wrapper}>
                <Text style={styles.title}>
                    Gerencie {'\n'}
                    suas plantas de {'\n'}
                    forma fácil
                </Text>

                    <Image 
                        source={wateringImg}
                        style={styles.image}
                        resizeMode="contain"
                    />

                <Text style={styles.subtitle}>
                    Não esqueça mais de regar suas plantas.
                    Nós cuidamos de lembrar você sempre que precisar.
                </Text>

                <TouchableOpacity 
                    style={styles.button}
                    activeOpacity={0.7}
                    onPress={handleStart}
                >
                    <Feather
                        name="chevron-right"
                        style={styles.buttonicon}/>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    },
    wrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingHorizontal: 30
    },
    title: {
        fontSize: 28,
        textAlign: 'center',
        color: Colors.heading,
        marginTop: 38,
        fontFamily: Fonts.heading,
        lineHeight: 34
    },
    subtitle: {
        textAlign: 'center',
        fontSize: 18,
        paddingHorizontal: 20,
        color: Colors.heading,
        fontFamily: Fonts.text
    },
    image: {
        height: Dimensions.get('window').width * 0.7
    },
    button: {
        backgroundColor: Colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        marginBottom: 10,
        height: 56,
        width: 56
    },
    buttonicon: {
        fontSize: 32,
        color: Colors.white
    }
})