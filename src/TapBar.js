import { StyleSheet, TextInput, View, Button } from 'react-native'
import React from 'react'

const TapBar = ({textValue, setTextValue, handleAddTask}) => {
    return (
        <View style={styles.containerTopNav}>
            <TextInput
                style={styles.input}
                placeholder="Añadir Tarea"
                value={textValue}
                onChangeText={setTextValue}
            />
            <Button title="Add" onPress={handleAddTask} />
        </View>
    )
}

export default TapBar

const styles = StyleSheet.create({
    containerTopNav: {
        flexDirection: "row",
        width: "80%",
        gap: 10
    },
    input: {
        borderWidth: 1,
        width: "80%",
        borderRadius: 5,
        paddingLeft: 10,
    },
})