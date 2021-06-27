import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.shape,
        width: 76,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
        marginHorizontal: 5
    },
    containerActive: {
        backgroundColor: theme.colors.green_light
    },
    text: {
        color: theme.colors.heading,
        fontFamily: theme.fonts.text
    },
    textActive: {
        fontFamily: theme.fonts.heading,
        color: theme.colors.green_dark,
    }
});