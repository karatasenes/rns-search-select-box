import { StyleProp, ViewStyle, TextStyle } from "react-native";
import React from "react";
interface Props {
    selectedText: string;
    onSelect?: (select: object) => void;
    data: Array<{
        id: number;
        value: string;
    }>;
    style?: StyleProp<ViewStyle>;
    itemTextStyle?: StyleProp<TextStyle>;
    selectedTouchableStyle?: StyleProp<ViewStyle>;
    selectedTextStyle?: StyleProp<TextStyle>;
    arrowColor?: string;
    arrowSize?: number;
    modalStyle?: StyleProp<ViewStyle>;
    modalContainerStyle?: StyleProp<ViewStyle>;
    searchBoxStyle?: StyleProp<ViewStyle>;
}
declare const RNSearchSelectBox: React.FC<Props>;
export default RNSearchSelectBox;
