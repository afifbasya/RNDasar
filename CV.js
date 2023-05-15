import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';
import { Avatar, NamaDesc, Pekerjaan } from './components'

export default function App() {
  const [show, setShow] = useState(true);
  const [nama, setNama] = useState("Muhammad Afifuddin");

  const handleChange = () => {
    setShow(!show)
  }

  return (
    <View style={styles.container}>

      <Avatar />
      <NamaDesc nama={nama} />

      {show ? (
        <Pekerjaan />
      ) : null}


      <TouchableOpacity
        style={styles.button}
        onPress={() => handleChange()}
      >
        <Text style={{ color: 'white' }}>{show ? "Sembunyikan" : "Tampilkan"}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#93CAED',
    padding: 30
    // margin: 30
  },
  button: {
    marginTop: 20,
    backgroundColor: 'black',
    padding: 10,
    alignItems: 'center'
  }
});

