import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import { Platform } from 'react-native';
import { PlantSelect } from '../pages/PlantSelect';
import { MyPlants } from '../pages/Myplants';

import { theme } from '../global/styles/theme';

const AppTab = createBottomTabNavigator();

const AuthRoutes: React.FC = () => {
    return(
        <AppTab.Navigator
            tabBarOptions={{
                activeTintColor: theme.colors.green,
                inactiveTintColor: theme.colors.heading,
                labelPosition: 'beside-icon',
                style: {
                    height: 60
                },
            }}
        >
            <AppTab.Screen
                name="Nova Planta"
                component={PlantSelect}
                options={{
                    tabBarIcon: (({ size, color }) => (
                        <MaterialIcons
                            name="add-circle-outline"
                            size={size}
                            color={color}
                        />
                    ))
                }}
            />
            <AppTab.Screen
                name="Minhas Plantas"
                component={MyPlants}
                options={{
                    tabBarIcon: (({ size, color }) => (
                        <MaterialIcons
                            name="format-list-bulleted"
                            size={size}
                            color={color}
                        />
                    ))
                }}
            />
        </AppTab.Navigator>
    )
}
export default AuthRoutes;