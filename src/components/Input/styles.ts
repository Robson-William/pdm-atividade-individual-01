import { StyleSheet} from 'react-native';
import themes from '../../global/styles/themes';

const styles = StyleSheet.create({
    inputBox: {
        flex: 0.3,
        flexDirection: 'row',
        justifyContent: 'center',
        top: '-4%',
        gap: 4
    },
    input: {
        backgroundColor: themes.colors.gray_500,
        borderColor: themes.colors.gray_700,
        borderRadius: 6,
        width: '65%',
        padding: 16
    },
    inputButton: {
        backgroundColor: themes.colors.blue_dark,
        borderRadius: 6,
        width: 18,
        height: 18,
        padding: 24
    },
})

export default styles;