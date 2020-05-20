import React from 'react';
import { Text, View } from 'react-native';

export default function Exemplo1() {
  return (
    <View style={{
      padding: 20, 
      flexDirection: 'row',
      justifyContent: 'space-around', 
      alignItems: 'stretch',
      height: 300,
      width: '100%'
      }}>
        <View style={{
          backgroundColor: '#f68',
          alignItems: 'center',
          flex: 1,
          justifyContent:'center'
        }}>
            <Text>1</Text>
        </View>
        <View style={{
          backgroundColor: '#A99856',
          alignItems: 'center',
          justifyContent:'center',
          flex: 5
        }}>
            <Text>2</Text>
        </View>
        <View style={{
          backgroundColor: '#f68158',
          alignItems: 'center',
          flex: 2,
          justifyContent:'center'
        }}>
            <Text>3</Text>
        </View>
    </View>
  );
}
