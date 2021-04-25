import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    FlatList
} from 'react-native';
import { formatDistance } from 'date-fns';
import { pt } from 'date-fns/locale';

import { Header } from '../components/Header';
import { PlantProps, loadPlant } from '../libs/storage';
import { PlantCardSecondary } from '../components/PlantCardSecondary';

import waterdrop from '../assets/waterdrop.png';
import Colors from '../styles/Colors';
import fonts from '../styles/fonts';

export function MyPlants() {

    const [myPlants, setMyPlants] = useState<PlantProps[]>([]);
    const [loading, setLoading] = useState(true);
    const [nextWatered, setNextWatered] = useState<string>();

    useEffect(() => {
        async function loadingStorageData(){
            const plantStoraged = await loadPlant();

            const nexTime = formatDistance(
                new Date(plantStoraged[0].dateTimeNotification).getTime(),
                new Date().getTime(),
                { locale: pt }
            );

            setNextWatered(
                `Nâo esquece de regar a ${plantStoraged[0].name} à ${nexTime}.`
            )

            setMyPlants(plantStoraged);
            setLoading(false);
        }

        loadingStorageData();
    },[]);

    return(
        <View style={styles.container}>
            <Header/>

            <View style={styles.spotlight}>
                <Image
                    source={waterdrop}
                    style={styles.spotlightImage}
                />
                <Text style={styles.spotlightText}>
                    {nextWatered}
                </Text>
            </View>

            <View style={styles.plants}>
                <Text style={styles.plantsTitle}>
                    Proximas Regadas
                </Text>

                <FlatList
                    data={myPlants}
                    keyExtractor={( item ) => String(item.id)}
                    renderItem={({ item }) => (
                        <PlantCardSecondary data={ item }/>
                    )}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ flex: 1}}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 30,
        paddingTop: 50,
        backgroundColor: Colors.background
    },
    spotlight: {
        backgroundColor: Colors.blue_light,
        paddingHorizontal: 20,
        borderRadius: 20,
        height: 110,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    spotlightImage: {
        width: 60,
        height: 60
    },
    spotlightText: {
        flex: 1,
        color: Colors.blue,
        paddingHorizontal: 20,
        fontFamily: fonts.text,
    },
    plants: {
        flex: 1,
        width: '100%'
    },
    plantsTitle: {
        fontSize: 24,
        fontFamily: fonts.heading,
        color: Colors.heading,
        marginVertical: 20
    }
});