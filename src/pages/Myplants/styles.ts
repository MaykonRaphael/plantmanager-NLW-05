import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 30,
        paddingTop: 50,
        backgroundColor: theme.colors.background,
    },
    spotlight: {
        backgroundColor: theme.colors.blue_light,
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
        color: theme.colors.blue,
        paddingHorizontal: 20
    },
    plants: {
        flex: 1,
        width: '100%'
    },
    plantsTitle: {
        fontSize: 24,
        fontFamily: theme.fonts.heading,
        color: theme.colors.heading,
        marginVertical: 20
    },
    emptyList: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        borderRadius: 20,
        backgroundColor: theme.colors.shape,
        height: 110,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    emptyListTitle: {
        fontFamily: theme.fonts.heading,
        color: theme.colors.heading,
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
        color: theme.colors.heading,
        fontFamily: theme.fonts.text
    },
    text: {
        fontSize: 32,
        fontFamily: theme.fonts.heading,
        color: theme.colors.heading,
        lineHeight: 40
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 40
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    openButton: {
        backgroundColor: '#F194FF',
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});