import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AvatarFoto from '../../assets/avatar.jpeg'

export default function Avatar() {
    return (
        <Image source={AvatarFoto} style={styles.gambar} />
    )
}

const styles = StyleSheet.create({
    gambar: {
        width: 150,
        height: 150,
        borderRadius: 20
    },
})