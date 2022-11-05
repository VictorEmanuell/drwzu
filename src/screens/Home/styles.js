import { StyleSheet } from 'react-native';

import GlobalStyles from '../../utils/GlobalStyles';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Platform.OS === 'android' ? 25 : 0,
    },
});