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
        color: themes.colors.blue,
        fontFamily: themes.fonts.default_font_bold
    },
    counter: {
        backgroundColor: themes.colors.gray_400,
        justifyContent: 'center',
        height: 19,
        padding: 8,
        borderRadius: 8
    },
    counterText: {
        color: themes.colors.gray_100,
        fontFamily: themes.fonts.default_font_bold
    },
    warningMessage: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 12,
        borderStyle: 'solid',
        borderTopWidth: 1,
        borderTopColor: themes.colors.gray_300,
        paddingTop: 48
    },
    warningMessageText: {
        color: themes.colors.gray_300
    }
})

export default styles;