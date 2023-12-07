import { View, StyleSheet } from "react-native"
import React, { useState } from "react"
import { TapBar, ModalCustom, TaskList } from "./src/components"


const App = () => {

    const [textValue, setTextValue] = useState("")
    const [taskList, setTaskList] = useState([])
    const [selectedItem, setSelectedItem] = useState({})
    const [modalVisible, setModalVisible] = useState(false)

    const handleAddTask = () => {
        setTaskList(currentValue => [
            ...currentValue,
            {
                id: new Date(),
                task: textValue,
                completed: "Pendiente"
            }
        ])
        setTextValue("")
    }

    const handleSelectItem = (item) => {
        setSelectedItem(item)
        setModalVisible(true)
    }

    const handleDeleteItem = () => {
        setTaskList(current => current.filter(item => item.id !== selectedItem.id))
        setModalVisible(false)
    }

    const handleCancelItem = () => {
        setModalVisible(false)
        setSelectedItem({})
    }

    const handleCompleteItem = () => {
        const index = taskList.findIndex(item => item === selectedItem)
        taskList[index].completed = "Completado"
        setModalVisible(false)
    }

    return (
        <View style={styles.container}>
            <TapBar
                textValue={textValue}
                setTextValue={setTextValue}
                handleAddTask={handleAddTask}
            />
            <TaskList
                taskList={taskList}
                handleSelectItem={handleSelectItem}
            />
            <ModalCustom
                modalVisible={modalVisible}
                selectedItem={selectedItem}
                handleDeleteItem={handleDeleteItem}
                handleCancelItem={handleCancelItem}
                handleCompleteItem={handleCompleteItem}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 80,
        paddingTop:20,
        alignItems: "center",
        backgroundColor:'#008b8b',
    }
})

export default App;