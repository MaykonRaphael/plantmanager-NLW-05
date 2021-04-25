import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    FlatList,
    Alert
} from 'react-native';
import { formatDistance } from 'date-fns';
import { pt } from 'date-fns/locale';

import { Header } from '../components/Header';
import { PlantProps, loadPlant, removePlant } from '../libs/storage';
import { PlantCardSecondary } from '../components/PlantCardSecondary';
import { Load } from '../components/Load';

import waterdrop from '../assets/waterdrop.png';
import userImg from '../assets/Maykon.png';
import Colors from '../styles/Colors';
import fonts from '../styles/fonts';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export function MyPlants() {

    const [myPlants, setMyPlants] = useState<PlantProps[]>([]);
    const [loading, setLoading] = useState(true);
    const [nextWatered, setNextWatered] = useState<string>();

    function handleRemove(plant: PlantProps){
        Alert.alert("Remover", `Deseja remover a ${plant.name}?`, [
            {
                text: "Não 🙏",
                style: "cancel",
            },
            {
                text: "Sim 😥",
                onPress: async () => {
                    try {
                        await removePlant(plant.id);

                        setMyPlants((oldData) =>
                            oldData.filter((item) => item.id !== plant.id)
                        );

                    } catch (error) {
                        Alert.alert("Não foi possivel remover! 😥");
                    }
                },
            },
        ]);
    }

    useEffect(() => {
        async function loadStorageData(){
            const plantsStoraged = await loadPlant();

            if(plantsStoraged.length > 0){
                const nextTime = formatDistance(
                    new Date(plantsStoraged[0].dateTimeNotification).getTime(),
                    new Date().getTime(),
                    {
                        locale: pt
                    }
                );

                setNextWatered(
                    `Regue sua ${plantsStoraged[0].name} daqui a ${nextTime}.`
                );

                setMyPlants(plantsStoraged);
            } else {
                setMyPlants([]);
            }
            setLoading(false);
        }

        loadStorageData();
    },[]);

    if(loading) return <Load/>

    return(
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <View>
                    <Text style={styles.greeting}>Minhas</Text>
                    <Text style={styles.text}>
                        Plantinhas
                    </Text>
                </View>

                <Image source={userImg} style={styles.image}/>
            </View>

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
                    ListEmptyComponent={() => (
                        <View style={styles.emptyList}>
                            <Text style={styles.emoji}>
                                😞
                            </Text>
                            <Text style={styles.emptyListTitle}>
                                Nenhuma plantinha cadastrada!
                            </Text>
                        </View>
                    )}
                    keyExtractor={( item ) => String(item.id)}
                    renderItem={({ item }) => (
                        <PlantCardSecondary
                            data={ item }
                            handleRemove={() => {handleRemove(item)}}
                        />
                    )}
                    showsVerticalScrollIndicator={false}
                    // contentContainerStyle={{ flex: 1}}
                />
            </View>
        </View>
    );
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
        paddingHorizontal: 20
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
    },
    emptyList: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        borderRadius: 20,
        backgroundColor: Colors.shape,
        height: 110,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    emptyListTitle: {
        fontFamily: fonts.heading,
        color: Colors.heading,
        fontSize: 20,
        marginHorizontal: 20
    },
    emoji: {
        fontSize: 40,
        marginHorizontal: 20
    },
    headerContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 30
    },
    greeting: {
        fontSize: 32,
        color: Colors.heading,
        fontFamily: fonts.text
    },
    text: {
        fontSize: 32,
        fontFamily: fonts.heading,
        color: Colors.heading,
        lineHeight: 40
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 40
    }
});