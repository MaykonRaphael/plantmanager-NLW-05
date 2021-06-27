import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    Image,
    FlatList,
    Alert,
} from 'react-native';
import { formatDistance } from 'date-fns';
import { pt } from 'date-fns/locale';

import { PlantProps, loadPlant, removePlant } from '../../libs/storage';
import { PlantCardSecondary } from '../../components/PlantCardSecondary';
import { Load } from '../../components/Load';

import waterdrop from '../../assets/waterdrop.png';
import userImg from '../../assets/plant.png';
import { styles } from './styles';

export function MyPlants() {
    const [ myPlants, setMyPlants ] = useState<PlantProps[]>([]);
    const [ loading, setLoading ] = useState(true);
    const [ nextWatered, setNextWatered ] = useState<string>();
    const [ openDeleteModal, setOpenDeleteModal ] = useState(false);

    function handleOpenDeleteModal() {
        setOpenDeleteModal(true);
        console.log(openDeleteModal);
    }

    async function handleRemove(plant: PlantProps) {
        try {
            await removePlant(plant.id);

            setMyPlants((oldData) =>
                oldData.filter((item) => item.id !== plant.id)
            );

        } catch (error) {
            Alert.alert("Não foi possível remover! 😥");
        }
    }

    useEffect(() => {
        async function loadStorageData(){
            const plantsStoraged = await loadPlant();

            if(plantsStoraged.length > 0){
                const nextTime = formatDistance(
                    new Date(plantsStoraged[0].dateTimeNotification).getTime(),
                    new Date().getTime(),
                    {
                        locale: pt,
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
                    <Text style={styles.text}>Plantinhas</Text>
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
                    Próximas Regadas
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
                            openModal={handleOpenDeleteModal}
                            handleRemove={() => {
                                handleRemove(item)
                            }}
                        />
                    )}
                    showsVerticalScrollIndicator={false}
                    // contentContainerStyle={{ flex: 1}}
                />
            </View>
        </View>
    );
}