import { useEffect, useState } from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import getData from './components/api';

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
    <SafeAreaView style={{ flex: 1 }}>
      {data ? (
        <ScrollView style={{ flex: 1 }}>
          {data.map(item => (
            <View key={item.id} style={{ flex: 1 }}>
              <Text style={{ fontSize: 20 }}>{item.name_ja}</Text>
              <Text style={{ fontSize: 16 }}>{item.address_ja}</Text>
            </View>
          ))}
        </ScrollView>
      ) : (
        <Text>Loading data...</Text>
      )}
    </SafeAreaView>
  );
};