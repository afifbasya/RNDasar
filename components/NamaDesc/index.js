import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function NamaDesc({ nama }) {
    return (
        <View>
            <Text style={styles.nama}>{nama}</Text>
            <Text>Saya sebagai Programmer yang Multitalenta</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    nama: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 10
    },
})