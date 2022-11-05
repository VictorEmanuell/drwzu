import { StyleSheet, Platform, Dimensions } from 'react-native';

import GlobalStyles from '../../../utils/GlobalStyles';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingTop: Platform.OS === 'android' ? 25 : 0,
    },
    chooseAvatarText: {
        ...GlobalStyles.h3,
    },
    chooseAvatarButton: {
        backgroundColor: GlobalStyles.colors.gray,
        padding: 90,
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
        justifyContent: 'flex-end',
        elevation: 2,
        top: -80
    },
    avatarImageStyle: {
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
    },
    chooseAvatarAdd: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: GlobalStyles.colors.main,
        padding: 8,
        position: 'absolute',
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
        alignSelf: 'flex-end',
        elevation: 2
    },
    chooseAvatarContinue: {
        marginBottom: '5%'
    }
})