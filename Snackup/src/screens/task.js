
import { onValue, ref, db } from "@/config/firebaseconfig";
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button } from 'react-native';


const MyComponent = () => {
  const [campo1, setCampo1] = useState('');
  const [campo2, setCampo2] = useState('');

  useEffect(() => {
    const starCountRef = ref(db, 'tabela/campo1');
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      setCampo1(data);
    });
  }, []);

  const handleCampo1Change = (text) => {
    setCampo1(text);
    set(ref(db, 'tabela/campo1'), text);
  };

  const handleCampo2Change = (text) => {
    setCampo2(text);
    set(ref(db, 'tabela/campo2'), text);
  };

  return (
    <View>
      <TextInput
        placeholder="Campo 1"
        value={campo1}
        onChangeText={handleCampo1Change}
      />
      <TextInput
        placeholder="Campo 2"
        value={campo2}
        onChangeText={handleCampo2Change}
      />
      <Text>Valor do Campo 2: {campo2}</Text>
    </View>
  );
};

export default MyComponent;
