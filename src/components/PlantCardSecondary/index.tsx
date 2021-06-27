import { Feather } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import Animated from 'react-native-reanimated';
import { SvgFromUri } from 'react-native-svg';

import { DeleteModal } from '../DeleteModal';
import { styles } from './styles';
import { theme } from '../../global/styles/theme';

interface PlantsProps extends RectButtonProps {
    data: {
        name: string;
        photo: string;
        hour: string;
    };

    openModal: () => void;
    handleRemove: () => void;
}

export function PlantCardSecondary ({ data, openModal, handleRemove, ...rest } : PlantsProps) {
    const [ openDeleteModal, setOpenDeleteModal ] = useState(false);

    function handleOpenDeleteModal() {
        setOpenDeleteModal(true);
    }

    function handleCloseDeleteModal() {
        setOpenDeleteModal(false);
    }

    return(
        <Swipeable
            overshootRight={false}
            renderRightActions={() => (
                <Animated.View>
                    <View>
                        <RectButton
                            style={styles.buttonRemove}
                            onPress={handleOpenDeleteModal}
                        >
                            <Feather
                                name="trash"
                                size={32}
                                color={theme.colors.white}
                            />

                        </RectButton>
                    </View>
                </Animated.View>
            )}
        >
            <RectButton
                style={styles.container}
                {...rest}
            >
                <SvgFromUri
                    uri={data.photo}
                    width={50}
                    height={50}
                />

                <Text style={styles.title}>
                    {data.name}
                </Text>

                
                <View style={styles.details}>
                    <Text style={styles.timeLabel}>
                        Regar às
                    </Text>
                    <Text style={styles.time}>
                        {data.hour}
                    </Text>
                </View>
            </RectButton>

            <DeleteModal
                data={data}
                visible={openDeleteModal}
                closeModal={handleCloseDeleteModal}
                handleRemove={handleRemove}
            />
        </Swipeable>
    );
}