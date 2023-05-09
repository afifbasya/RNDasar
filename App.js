import { Image, StyleSheet, Text, View } from 'react-native';
import Avatar from './assets/avatar.jpeg'

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Image
        source={{ uri: "https://avatars.githubusercontent.com/u/22425167?v=4" }}
        style={styles.gambar}
      /> */}
      <Image source={Avatar} style={styles.gambar} />

      <Text style={styles.nama}>Muhammad Afifuddin</Text>
      <Text>Saya sebagai Programmer yang Multitalenta</Text>

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
  gambar: {
    width: 150,
    height: 150,
    borderRadius: 20
  },
  nama: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10
  },
  pekerjaan: {
    marginTop: 20
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

