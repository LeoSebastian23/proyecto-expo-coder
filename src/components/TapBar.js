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
        gap: 10,
        backgroundColor:'#bdb76b',
        padding:10,
        borderRadius: 5,
    },
    input: {
        fontSize:20,
        width: "80%",
        borderRadius: 5,
        borderBottomWidth:2,
        paddingLeft: 5,
    },
})