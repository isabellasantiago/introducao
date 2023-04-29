import { useState } from 'react';
import { Text, View, Button } from 'react-native';

export default function App() {
  const [texto, setTexto] = useState(0);

  return (
    <View style={{
      bordercolor: 'black',
      borderWidth: 1,
      width: '100%',
      alignItems: 'center',
      padding: 20,
    }}>
      <Text
        style={{
          width: '80%',
          borderColor: "#CCC",
          borderWidth: 1,
          textAlign: 'center',
          backgroundColor: "#DDD",
          padding: 8,
          borderRadius: 8,
          marginBottom: 4
        }}
      >
        {texto}
      </Text>
      <View style={{ width: '80%'}}>
        <Button 
          title="OK"
          onPress={() => setTexto(texto + 1)}
        />
      </View>
    </View>
  );
}