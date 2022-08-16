import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SignIn } from './screens/SignIn';
import { SignUp } from './screens/SignUp';

const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator initialRouteName="Welcome">
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
        </Stack.Navigator>
    )
}