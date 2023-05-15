import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Pekerjaan() {
    return (
        <View style={styles.pekerjaan}>
            <Text>Pekerjaaan :</Text>
            <View style={styles.item}>
                <Text>Front End Developer</Text>
                <Text>di Bussan Auto Finance</Text>
            </View>
            <View style={styles.item}>
                <Text>Mobile Developer</Text>
                <Text>di Prospark</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    pekerjaan: {
        marginTop: 20
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
})