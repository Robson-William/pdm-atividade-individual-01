import { StyleSheet} from 'react-native';
import themes from '../../global/styles/themes';

const styles = StyleSheet.create({
    tech: {
        flexDirection: 'row',
        backgroundColor: themes.colors.gray_400,
        justifyContent: 'center',
        borderRadius: 8,
        margin: 40,
        height: 64,
        padding: 12,
        gap: 8
    },
    techButtonDone: {
        backgroundColor: themes.colors.gray_600,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: themes.colors.blue,
        width: 24,
        height: 24,
        borderRadius: 24
    },
    techContent: {
        color: themes.colors.gray_100,
        overflow: 'scroll'
    }
})

export default styles;