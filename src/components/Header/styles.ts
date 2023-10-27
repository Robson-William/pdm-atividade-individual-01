import { StyleSheet} from 'react-native';
import themes from '../../global/styles/themes';

const styles = StyleSheet.create({
    header: {
        flex: 1,
        backgroundColor: themes.colors.gray_700,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerText: {
        color: themes.colors.blue,
        fontFamily: themes.fonts.default_font_bold,
        fontSize: 20,
    },
})

export default styles;