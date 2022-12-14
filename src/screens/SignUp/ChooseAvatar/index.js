import { useRef, useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ImageBackground,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';

import { AntDesign } from '@expo/vector-icons';
import { styles } from './styles';

import Button from '../../../components/Button';
import DefaultAvatar from '../../../assets/defaultAvatar.png'

export function ChooseAvatar(props) {
    const navigation = useNavigation();

    const [image, setImage] = useState(null);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });

        if (!result.cancelled) {
            setImage(result.uri);
        }
    };

    console.log(props.route.params, image)

    return (
        <View style={styles.container}>
            <Text style={styles.chooseAvatarText}>Escolha seu avatar</Text>

            <ImageBackground
                style={styles.chooseAvatarButton}
                source={!image ? DefaultAvatar : { uri: image }}
                imageStyle={styles.avatarImageStyle}
            >
                <TouchableOpacity
                    style={styles.chooseAvatarAdd}
                    activeOpacity={0.92}
                    onPress={pickImage}
                >
                    <AntDesign name="plus" size={24} color="white" />
                </TouchableOpacity>
            </ImageBackground>

            <Button
                buttonStyle={styles.chooseAvatarContinue}
                text={'Continuar'}
                textColor="white"
                backgroundColor={'black'}
                onPress={() => navigation.navigate('Home')}
            >

            </Button>
        </View >
    );
}