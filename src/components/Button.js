import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import GlobalStyles from '../utils/GlobalStyles';

export default function Button({ backgroundColor, textColor, buttonStyle, textStyle, text, onPress, disabled }) {
    const backgroundColors = (color) => {
        switch (color) {
            case 'main':
                return GlobalStyles.colors.main;
            case 'black':
                return GlobalStyles.colors.black;
            case 'gray':
                return GlobalStyles.colors.gray;
            case 'white':
                return GlobalStyles.colors.white;
            default:
                return color;
        }
    }

    const textColors = (color) => {
        switch (color) {
            case 'main':
                return GlobalStyles.colors.main;
            case 'black':
                return GlobalStyles.colors.black;
            case 'gray':
                return GlobalStyles.colors.gray;
            case 'white':
                return GlobalStyles.colors.white;
            default:
                return color;
        }
    }

    if (backgroundColor === 'gradient') {
        return (
            <LinearGradient
                style={[styles.submitButton, buttonStyle]}
                colors={['#A2B2FC', '#FFF1BE']}
                locations={[0.15, 1.37]}
                start={{ x: 0.8, y: 0.8 }}
                end={{ x: -0.2, y: -0.2 }}
            >
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => onPress()}
                    disabled={disabled}
                >
                    <Text
                        style={[styles.submitButtonText, { color: textColors(textColor) }, textStyle]}
                    >
                        {text}
                    </Text>
                </TouchableOpacity>
            </LinearGradient>
        );
    } else {
        return (
            <TouchableOpacity
                style={[styles.submitButton, { backgroundColor: backgroundColors(backgroundColor) }, buttonStyle]}
                activeOpacity={0.8}
                onPress={() => onPress()}
                disabled={disabled}
            >
                <Text
                    style={[styles.submitButtonText, { color: textColors(textColor) }, textStyle]}
                >
                    {text}
                </Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    submitButton: {
        width: '75%',
        borderRadius: 25,
        height: 43,
        alignItems: 'center',
        justifyContent: 'center',
    },
    submitButtonText: {
        ...GlobalStyles.h5,
    }
});