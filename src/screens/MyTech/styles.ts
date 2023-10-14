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
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 24
    },
    subHeaderSpan: {
        flexDirection: 'row',
        alignItems:'center',
        gap: 8
    },
    subHeaderText: {
        color: themes.colors.blue
    },
    counter: {
        backgroundColor: themes.colors.gray_400,
        width: 25,
        height: 19,
        padding: 8,
        borderRadius: 8
    },
    warningMessage: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 48
    },
    warningMessageText: {
        color: themes.colors.gray_300
    },
    tech: {

    }
})

export default styles;