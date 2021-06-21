import { CardStyleInterpolators } from '@react-navigation/stack';

const navigationConfigs = {
    cardStyle: {
        backgroundColor: 'white',
    },
    headerShown: false,
    gestureEnabled: true,
    // gestureDirection: 'default',
    cardShadowEnabled: true,
    cardOverlayEnabled: true,
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
};

export default navigationConfigs;
