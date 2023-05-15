import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const makanan = [
    {
        id: 1,
        nama: "Mie Ayam",
        harga: 10000
    },
    {
        id: 2,
        nama: "Bakso",
        harga: 15000
    },
    {
        id: 3,
        nama: "Nasi Kucing",
        harga: 3000
    },
    {
        id: 4,
        nama: "Sate Ayam",
        harga: 20000
    },
    {
        id: 5,
        nama: "Ketoprak",
        harga: 14000
    },
]

export default function App() {

    const total = makanan.reduce((total_harga, item) => total_harga + item.harga, 0)

    return (
        <View style={styles.container}>
            <Text style={{ marginBottom: 10 }}>Mapping Data</Text>
            {makanan.map((item) => {
                return (
                    <View key={item.id} style={styles.item}>
                        <Text>{item.nama}</Text>
                        <Text>Rp. {item.harga}</Text>
                    </View>
                )
            })}

            <Text style={{ marginBottom: 10 }}>Filter Data</Text>
            {makanan.filter((item) => item.harga <= 10000).map((item) => {
                return (
                    <View key={item.id} style={styles.item}>
                        <Text>{item.nama}</Text>
                        <Text>Rp. {item.harga}</Text>
                    </View>
                )
            })}

            <Text>Total Harga : Rp. {total}</Text>
            <Text>Cari Makanan "Bakso" : {makanan.find((item) => item.nama === "Bakso")?.nama}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 30
    },
    item: {
        borderWidth: 1,
        padding: 10,
        marginBottom: 10
    }
})