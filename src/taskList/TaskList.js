import { StyleSheet, FlatList, View } from 'react-native'
import React from 'react'
import RenderList from './RenderList'

const TaskList = ({taskList, handleSelectItem}) => {
    return (
        <View style={styles.containerTask}>
            <FlatList
                style={styles.FlatList}
                data={taskList}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <RenderList item={item} handleSelectItem={handleSelectItem} />}
            />
        </View>
    )
}

export default TaskList

const styles = StyleSheet.create({
    containerTask: {
        flex: 1,
        alignItems: "center",
        width: "100%"
    },
    FlatList: {
        width: "80%",
        marginTop: 10,
    },
})