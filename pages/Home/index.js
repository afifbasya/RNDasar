import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
// import { useNavigation } from '@react-navigation/native'

export default function Home({ navigation }) {

    // const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text>Home</Text>

            <View style={styles.wrapperButton}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('ListProduct')}
                >
                    <Text>List Product</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('TentangKami')}
                >
                    <Text>Tentang Kami</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    wrapperButton: {
        flexDirection: 'row',
        gap: 10,
        marginTop: 10
    },
    button: {
        backgroundColor: '#93CAED',
        padding: 10,
    }
})