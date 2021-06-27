import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
        backgroundColor: 'rgba(0,0,0,0.7)',
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        width: 265,
        height: 322,
    },
    openButton: {
        backgroundColor: theme.colors.red,
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    modalText: {
        fontFamily: theme.fonts.complement,
        textAlign: 'center',
        color: theme.colors.heading,
        fontSize: 15,
    },
    text: {
        marginBottom: 15,
        textAlign: 'center',
        fontFamily: theme.fonts.heading,
        color: theme.colors.heading,
        fontSize: 15,
    },
    image: {
        backgroundColor: theme.colors.shape,
        borderRadius: 15,
        marginBottom: 20,
    },
    cancelButton: {
        backgroundColor: theme.colors.shape,
        width: 96,
        height: 48,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'space-around',
        marginLeft: 5,
    },
    cancelText: {
        fontFamily: theme.fonts.text,
        fontSize: 15,
        color: theme.colors.heading,
    },
    deleteButton: {
        backgroundColor: '#FAF5F5',
        width: 96,
        height: 48,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'space-around',
        marginLeft: 5,
    },
    deleteText: {
        fontFamily: theme.fonts.text,
        fontSize: 15,
        color: theme.colors.red,
    },
});