import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Contoh } from './components';

export default function App() {
    const [show, setShow] = useState(true);

    return (
        <View style={styles.container}>
            <Text>Belajar useEffect</Text>
            {show ? <Contoh /> : null}

            {/* <TouchableOpacity style={styles.button} onPress={() => setShow(!show)}>
                <Text style={{ color: 'white' }}>Tampilkan</Text>
            </TouchableOpacity> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 30
    },
    button: {
        marginTop: 20,
        backgroundColor: 'black',
        padding: 10,
        alignItems: 'center'
    }
})