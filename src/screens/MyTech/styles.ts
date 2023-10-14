import { StyleSheet } from "react-native";
import themes from "../../global/styles/themes";

const styles = StyleSheet.create({
    header: {
        flex: 1,
        backgroundColor: themes.colors.gray_700,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerText: {
        color: themes.colors.blue,
        fontSize: 20
    },
    inputBox: {
        flex: 0.3,
        flexDirection: 'row',
        justifyContent: 'center',
        top: '-7%',
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
    listBody: {
        flex: 3
    },
    subHeader: {

    },
    tech: {

    }
})

export default styles;