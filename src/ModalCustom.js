import { StyleSheet, Text, View, Modal, Button } from 'react-native'
import React from 'react'

const ModalCustom = ({
    modalVisible,
    selectedItem,
    handleDeleteItem,
    handleCancelItem,
    handleCompleteItem
}) => {
    return (
        <Modal
            visible={modalVisible}
            transparent={true}
        >
            <View style={styles.containerModal}>
                <View style={styles.containerCard}>
                    <Text>Seleccionaste:</Text>
                    <Text style={styles.textSelected}>{selectedItem.task}</Text>
                    <View style={styles.containerBoxButton}>
                        <Button title="Borrar" onPress={handleDeleteItem} />
                        <Button title="Cancelar" onPress={handleCancelItem} />
                        <Button title="Completado" onPress={handleCompleteItem} />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default ModalCustom

const styles = StyleSheet.create({
    containerModal: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ccccccaa"
    },
    containerCard: {
        backgroundColor: "#fff",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingVertical: 30,
        borderWidth: 1,
        borderRadius: 10,
        gap: 15,
    },
    textSelected: {
        fontWeight: "bold",
    },
    containerBoxButton: {
        flexDirection: "row",
        gap: 10,
    }
})