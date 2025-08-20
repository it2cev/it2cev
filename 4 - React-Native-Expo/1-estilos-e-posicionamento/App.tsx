import { StyleSheet, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box} />
      <View style={styles.box2} />
      <View style={styles.box3} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#f0f0f0',
  },
  box: {
    flex:1,
    width: 100,
    height: 100,
    backgroundColor: 'blue',
  },
  box2: {
    flex:2,
    width: 100,
    height: 100,
    backgroundColor: 'red',
  },
  box3: {
    flex:3,
    width: 100,
    height: 100,
    backgroundColor: 'green',
  },
});
