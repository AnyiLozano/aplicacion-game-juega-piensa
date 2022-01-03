import { StyleSheet } from "react-native";

const WelcomeStyles = StyleSheet.create({
    view: {
        position: "absolute",
        top: '7.5%',
        left: '5.5%',
        width: '89%',
        height: '85%'
    },
    title: {
        marginTop: '7%',
        height: 40
    },
    title_text: {
        fontSize: 40,
        paddingTop: '2%',
        textTransform: 'uppercase',
        color: "#F0AD1A",
    },
});

export default WelcomeStyles;