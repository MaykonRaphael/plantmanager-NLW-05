import React from 'react';
import {
    View,
    Modal,
    ModalProps,
    Text,
    TouchableHighlight,
} from 'react-native';
import { SvgFromUri } from 'react-native-svg';
import { RectButtonProps } from 'react-native-gesture-handler';

import { styles } from './styles';

interface PlantsProps extends RectButtonProps {
    data: {
        name: string;
        photo: string;
        hour: string;
    };
    closeModal: () => void;
    handleRemove: () => void;
}

export function DeleteModal({data, closeModal, handleRemove, ...rest}: PlantsProps & ModalProps) {
    return(
        <Modal
            transparent
            animationType="slide"
            {...rest}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <View style={styles.image}>
                        <SvgFromUri
                            uri={data.photo}
                            width={120}
                            height={120}
                        />
                    </View>
                    <Text style={styles.modalText}>Deseja mesmo deletar sua</Text>
                    <Text style={styles.text}>{data.name}</Text>

                    <View style={{flexDirection: 'row'}}>
                        <TouchableHighlight
                            style={styles.cancelButton}
                            onPress={closeModal}
                        >
                            <Text style={styles.cancelText}>Cancelar</Text>
                        </TouchableHighlight>

                        <TouchableHighlight
                            style={styles.deleteButton}
                            onPress={handleRemove}
                        >
                            <Text style={styles.deleteText}>Deletar</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </View>
        </Modal>
    );
}