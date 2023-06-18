import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function ListProduct() {

    const [makanans, setMakanan] = useState([]);

    useEffect(() => {
        fetch('http://192.168.148.104/api/makanan')
            .then(response => response.json())
            .then(json => setMakanan(json.data))
    }, [])

    return (
        <View style={styles.container}>
            {makanans.map((makanan) => {
                return (
                    <View key={makanan.id} style={styles.card}>
                        <Text>{makanan.nama}</Text>
                        <Text>{makanan.harga}</Text>
                    </View>
                )
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        marginBottom: 10,
        backgroundColor: 'white',
        padding: 10,
        borderWidth: 1
    },
    container: {
        padding: 20
    }
})