import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const RenderList = ({item, handleSelectItem}) => {
    return (
        <TouchableOpacity style={styles.ContainerRenderList} onPress={() => handleSelectItem(item)}>
            <Text>{item.task}</Text>
            <Text>{item.completed}</Text>
        </TouchableOpacity>
    )
}

export default RenderList

const styles = StyleSheet.create({
    ContainerRenderList: {
        backgroundColor: "#cccccc",
        borderWidth: 1,
        alignItems: "center",
        paddingVertical: 15,
        marginTop: 10,
        borderRadius: 10,
    },
})