import { StyleSheet, Platform } from "react-native"

export default StyleSheet.create({
    Container: {
        flex: 1,
        paddingHorizontal: 25,
        paddingTop: 50,
        paddingBottom: 20
    },
    CenterContainer: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    Title: {
        fontSize: 28,
        fontFamily: Platform.OS === 'ios' ? 'Georgia' : 'serif',
        letterSpacing: 2,
        textAlign: "center",
        textTransform: "uppercase"
    },
    BodyText: {
        fontSize: 16,
        lineHeight: 26,
        textAlign: "center",
        fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'sans-serif-light',
        marginBottom: 15
    },
    Divider: {
        height: 1,
        width: "70%",
        marginVertical: 20
    },
    Quote: {
        fontStyle: "italic",
        textAlign: "center",
        fontSize: 15,
        marginTop: 15,
        letterSpacing: 1
    },
    ImagemCena: {
        width: "100%",
        height: 220,
        resizeMode: "cover",
        borderRadius: 12,
        marginBottom: 25,
        borderWidth: 1,
        borderColor: "rgba(255,255,255,0.15)"
    }
})
