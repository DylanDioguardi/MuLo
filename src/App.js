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
          <Text>Loading data...</Text>
        )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});