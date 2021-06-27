import React from 'react';
import {
    SafeAreaView,
    Text,
    Image,
    StatusBar,
    TouchableOpacity,
    View
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';

import wateringImg from '../../assets/watering.png';
import { theme } from '../../global/styles/theme';
import { styles } from './styles';

export function Welcome() {
    const navigation = useNavigation();

    function handleStart() {
        navigation.navigate('UserIdentification');
    }

    return(
        <>
        <StatusBar barStyle='dark-content' backgroundColor={theme.colors.background}/>
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
                    Não esqueça mais de regar suas {'\n'} plantas.
                    Nós cuidamos de lembrar você sempre que precisar.
                </Text>

                <TouchableOpacity 
                    style={styles.button}
                    activeOpacity={0.7}
                    onPress={handleStart}
                >
                    <Text>
                        <Feather
                            name="chevron-right"
                            style={styles.buttonIcon}
                        />
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
        </>
    );
}