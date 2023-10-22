import { StyleSheet } from "react-native";
import themes from "../../global/styles/themes";

const styles = StyleSheet.create({
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
        justifyContent: 'center',
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
    }
})

export default styles;