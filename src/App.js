import { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
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
    <View>
      {data ? (
        <View>
        {data.map(item => (
          <View key={item.id}>
            <Text>{item.name_ja}</Text>
            <Text>{item.address_ja}</Text>
        </View>
      ))}
    </View>
      ) : (
        <Text>Loading data...</Text>
      )}
    </View>
  );
};
