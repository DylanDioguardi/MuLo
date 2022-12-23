import { useEffect, useState } from 'react';
import { StyleSheet, View, Text} from 'react-native';
import getData from './components/api';
import Map from './components/map';

export default function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const data = await getData();
      setData(data);
    }
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      {data ? (
          <Map data={data} />
        ) : (
          <View style={styles.textContainer}>
            <Text style={styles.text}> Loading data...</Text>
          </View>
        )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  textContainer: {
    alignItems: 'center',
    backgroundColor: '#000',
  },
  text: {
    color: '#0f0',
    backgroundColor: '#000',
    textAlign: 'center'
  }
});