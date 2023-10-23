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
        fontSize: 20,
        fontWeight: 'bold'
    },
})

export default styles;