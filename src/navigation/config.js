import { CardStyleInterpolators } from '@react-navigation/stack';

export const navigationConfigs = {
    cardStyle: {
        backgroundColor: 'white',
    },
    headerShown: false,
    gestureEnabled: true,
    // gestureDirection: 'default',
    cardShadowEnabled: true,
    cardOverlayEnabled: true,
    cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
};


export const config = {
  cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS
  };

