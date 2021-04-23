import React from 'react';
import {
    StyleSheet,
    Text
} from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import Colors from '../styles/Colors';
import fonts from '../styles/fonts';

interface EnvironmentButtonProps extends RectButtonProps {
    title: string;
    active?: boolean;
}

export function EnvironmentButton({
    title,
    active = false,
    ...rest
} : EnvironmentButtonProps){
    return(
        <RectButton
            style={[
                styles.container,
                active && styles.containerActive
            ]}
            {...rest}
        >
            <Text 
                style={[
                    styles.text,
                    active && styles.textActive
                ]}
            >
                {title}
            </Text>

        </RectButton>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.shape,
        width: 76,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
        marginHorizontal: 5
    },
    containerActive: {
        backgroundColor: Colors.green_light
    },
    text: {
        color: Colors.heading,
        fontFamily: fonts.text
    },
    textActive: {
        fontFamily: fonts.heading,
        color: Colors.green_dark,
    }
});