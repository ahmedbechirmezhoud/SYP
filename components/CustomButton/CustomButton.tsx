import { Pressable, View, Text, StyleProp, ViewStyle } from "react-native";
import { styles } from './style';

interface ICustomButton {
    title: string;
    bgColor?: string;
    color?: string;
    width?: string;
    style?: any; // StyleProp<ViewStyle>;
    onPress: () => void
}

export default function CustomButton({ title, bgColor, color, onPress, width, style }: ICustomButton) {
    return (
        <Pressable onPress={onPress}>
            <View style={{ ...styles.button, backgroundColor: bgColor ?? "white", width: width ?? "100%", ...style }}>
                <Text style={{ color: color ?? "#F98B25", textAlign: "center", fontWeight: "bold" }}>{title}</Text>
            </View>
        </Pressable>
    )
}