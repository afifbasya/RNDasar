import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function Contoh() {
    const [title, setTitle] = useState("Ini adalah Judul");
    const [statusJudul, setStatus] = useState("Belum Diganti");

    // useEffect(() => {
    //     console.log("Dijalankan ketika component contoh dipasang");
    // }, [])

    // useEffect(() => {
    //     return () => {
    //         console.log("Dijalankan ketika component itu dicopot")
    //     }
    // }, [])

    useEffect(() => {
        if (title !== "Ini adalah Judul") {
            console.log("Dijalankan ketika ada perubahan state yaitu judul");
            setStatus("Judul Sudah diganti")
        }
    }, [title])

    return (
        <View>
            <Text>{title}</Text>

            <TouchableOpacity style={styles.button} onPress={() => setTitle("Ini adalah Judul 2")}>
                <Text style={{ color: 'white' }}>Ganti Judul</Text>
            </TouchableOpacity>


            <Text>{statusJudul}</Text>


        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        marginTop: 20,
        backgroundColor: 'black',
        padding: 10,
        alignItems: 'center'
    }
})