import { StyleSheet, Platform } from 'react-native';

import GlobalStyles from '../../utils/GlobalStyles';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Platform.OS === 'android' ? 25 : 0,
    },
    welcome: {
        padding: 10,
        alignItems: 'center',
        marginTop: '20%'
    },
    welcomeText: {
        ...GlobalStyles.h1,
    },
    signInText: {
        ...GlobalStyles.h5,
        color: GlobalStyles.colors.gray,
    },
    signInWithOAuth: {
        width: '75%',
        marginTop: '10%',
        justifyContent: 'space-between',
    },
    buttonGoogle: {
        borderRadius: 25,
        height: 43,
        backgroundColor: GlobalStyles.colors.white,
        flexDirection: 'row',
        alignItems: 'center',
        elevation: 4,
        marginVertical: '5%'
    },
    googleIcon: {
        width: 28,
        height: 28,
        marginLeft: 15
    },
    googleText: {
        ...GlobalStyles.h5,
        marginLeft: 15
    },
    buttonMeta: {
        borderRadius: 25,
        height: 43,
        backgroundColor: '#2079FF',
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: '5%'
    },
    metaIcon: {
        width: 28,
        height: 28,
        marginLeft: 15
    },
    metaText: {
        ...GlobalStyles.h5,
        color: GlobalStyles.colors.white,
        marginLeft: 15
    },
    createAccount: {
        flexDirection: 'row',
        marginTop: '5%',
        marginBottom: '20%'
    },
    createAccountText: {
        ...GlobalStyles.h5,
    },
    createAccountButton: {
        marginLeft: 4
    },
    createAccountButtonText: {
        ...GlobalStyles.h5,
        color: '#2079FF'
    },
    containerForm: {
        width: '100%',
        flexGrow: 1
    },
    containerFormGradient: {
        flexGrow: 1,
        paddingVertical: 50,
        alignItems: 'center',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
    },
    formTextInput: {
        width: '75%',
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: GlobalStyles.colors.white,
        color: GlobalStyles.colors.white,
        marginBottom: 45,
        ...GlobalStyles.h5,
    },
    forgotPasswordButton: {
        width: '75%',
        alignItems: 'flex-end',
        marginTop: -40
    },
    forgotPasswordText: {
        ...GlobalStyles.h6,
        color: GlobalStyles.colors.white,
    },
    submitButton: {
        width: '75%',
        borderRadius: 25,
        height: 43,
        backgroundColor: GlobalStyles.colors.gray,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50
    },
    submitButtonText: {
        ...GlobalStyles.h5,
        color: GlobalStyles.colors.white,
        marginBottom: '5%'
    }
});