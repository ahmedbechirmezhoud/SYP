import { StyleSheet } from "react-native";
import Window from '../../constants/Layout';


export const styles = StyleSheet.create({
    inputArea: {
        width: '100%',
        backgroundColor: "white",
        marginTop: 15,
        paddingLeft: 10,
        borderRadius: 5,
        height: 35
    },
    identifierContainer: {
        width: '100%',
        paddingLeft: 40,
        paddingRight: 40
    },
    root: {
        display: "flex",
        width: "100%",
        height: "100%",
        justifyContent: "space-between"
    },
    footer: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        paddingLeft: 25,
        paddingRight: 25,
        paddingBottom: 20,
        justifyContent: "space-between"
    },
    logo: {
        width: Window.window.width * 0.35,
        resizeMode: 'contain'
    },
    white: {
        color: "#FFFAF4"
    },
    skipBtn: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },
    skipBtnText: {
        marginRight: 10
    },
    skip: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 10
    },
    continue: {
        fontSize: 8
    },
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        justifyContent: "flex-start",
        width: '100%',
        marginTop: '10%',
    },
    marginBot: {
        marginBottom: "5%",
    },
    welcomeTextContainer: {
        textAlign: "left",
        width: "100%",
        paddingLeft: 30,
        // paddingRight: "10%",
        marginTop: "3%"
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#FFFAF4"
    },
    syp_congress: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#FFFAF4"
    },
    linearGradient: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        height: "100%",
        width: "100%",
    },
    bgImageStyle: {
        width: '100%',
        height: '100%',
        opacity: 0.45,
        position: "absolute",
    },
    bgImageContainer: {
        position: "absolute",
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'flex-start'
    },
});
