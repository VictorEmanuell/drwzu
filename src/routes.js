import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SignIn } from './screens/SignIn';
import { SignUp } from './screens/SignUp';
import { ChooseAvatar } from './screens/SignUp/ChooseAvatar';

const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator initialRouteName="SignIn">
            <Stack.Screen
                name="SignIn"
                component={SignIn}
                options={{
                    headerShown: false,
                    animation: 'fade_from_bottom'
                }}
            />
            <Stack.Screen
                name="SignUp"
                component={SignUp}
                options={{
                    headerShown: false,
                    animation: 'none'
                }}
            />
            <Stack.Screen
                name="ChooseAvatar"
                component={ChooseAvatar}
                options={{
                    headerShown: false,
                    animation: 'slide_from_right'
                }}
            />
        </Stack.Navigator>
    )
}