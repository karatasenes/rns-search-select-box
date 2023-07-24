import { View, Text, Pressable, StyleSheet, Modal, TextInput, Dimensions, ScrollView, TouchableOpacity } from "react-native";
import { AntDesign } from 'react-native-vector-icons';
import { useState, useEffect } from "react";
import React from "react";
const RNSearchSelectBox = ({ selectedText, onSelect, data, style, itemTextStyle, selectedTextStyle, arrowColor, arrowSize, modalStyle, modalContainerStyle, searchBoxStyle, selectedTouchableStyle }) => {
    const [showModal, setShowModal] = useState(false);
    const [pivot, setPivot] = useState(data);
    const [onSearch, setSearch] = useState("");
    useEffect(() => {
        var filter = data.filter(x => x.value.includes(onSearch));
        setPivot(filter);
    }, [onSearch]);
    return (<View style={[styles.container, style]}>
            <Modal visible={showModal} transparent={true} animationType="fade">
            <View style={[styles.modalSt, modalStyle]}>
                <View style={[styles.modalContainer, modalContainerStyle]}>
                    <TextInput placeholder="Search.." style={[styles.search, searchBoxStyle]} onChangeText={setSearch}/>
                    <ScrollView style={{ flex: 1 }}>
                        {pivot.map((e, index) => {
            return (<TouchableOpacity key={index} style={[styles.touchable, selectedTouchableStyle]} onPress={() => {
                    onSelect(e);
                    setShowModal(!showModal);
                }}>
                                    <Text style={itemTextStyle}>{e.value}</Text>
                                </TouchableOpacity>);
        })}
                </ScrollView>
                </View>

            </View>

            </Modal>
            <Pressable onPress={() => setShowModal(!showModal)} style={styles.buttonStyle}>
                <Text style={[styles.selectText, selectedTextStyle]}>{selectedText}</Text>
                    <AntDesign name="caretdown" size={arrowSize ? arrowSize : 24} color={arrowColor ? arrowColor : "gray"}/>
                </Pressable>
        </View>);
};
export default RNSearchSelectBox;
const styles = StyleSheet.create({
    container: {
        width: "75%",
        borderWidth: 2,
        borderColor: "gray",
        height: 50,
        marginLeft: 45,
        marginRight: 45
    },
    buttonStyle: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        alignItems: "center"
    },
    selectText: {
        color: "gray",
        fontSize: 15
    },
    modalSt: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        color: "black",
    },
    modalContainer: {
        position: "absolute",
        zIndex: 100,
        width: Dimensions.get("window").width * 0.8,
        height: Dimensions.get("screen").height * 0.8,
        backgroundColor: "white",
        margin: 50,
        borderRadius: 20
    },
    search: {
        borderWidth: 1,
        marginTop: 50,
        padding: 10,
        width: "90%",
        marginRight: "auto",
        marginLeft: "auto",
        borderRadius: 10
    },
    touchable: {
        width: "90%",
        borderColor: "gray",
        borderRadius: 10,
        marginRight: "auto",
        marginLeft: "auto",
        borderWidth: 1,
        marginTop: 5,
        padding: 10
    }
});
