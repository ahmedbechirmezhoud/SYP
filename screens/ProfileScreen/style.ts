import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: Colors["backgroundColor"]
    },
    QRImage: {
        marginTop: "30%",
        padding: 10,
        borderRadius: 10,
        alignItems :"center",
        backgroundColor: "#fff",          
    },
    currentUser: {
        marginTop: 40,
        width: "90%",
        textAlign: "left",
        paddingLeft: 30,
        // paddingRight: 30
    },
    welcome: {
        color: Colors["primaryColor"],
        fontWeight: "bold",
        fontSize: 20, 
        textTransform: "uppercase"
    },
    changeIDSection: {
        marginTop: 80,
        width: "100%",
        paddingLeft: 60,
        paddingRight: 60,

    },
    inputArea: {
        width: '100%',
        backgroundColor: "#FEF8EE",
        marginTop: 10,
        paddingLeft: 10,
        borderRadius: 5,
        height: 35,
        borderColor: Colors["tintColorLight"],
        borderWidth: 2
    },
    currentIDContainer: {
        display: "flex",
        flexDirection: "row",
        marginTop: 3,
    },
    currentIDTitle: {
        color: Colors["tintColorLight"],
    },
    currentID: {
        color: Colors["tintColorLight"],
        fontWeight: "bold",
        fontStyle: "italic",
    },
    customizeExp: {
        fontSize: 13.5,
        marginTop: 3,
        color: Colors["text"]
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#525252"
    },
    buttonContainer: {
        marginLeft: "20%",
        marginRight: "20%",
        width: "100%",
        marginTop: 10,
    },
});
