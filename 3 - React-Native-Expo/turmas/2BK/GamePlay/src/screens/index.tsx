
import { StyleSheet, Text, View,TextInput,Image } from 'react-native';
import { styles } from './styles';  
import { useState } from 'react';

import IllustrationImg from '../../src/assets/illustration.png'

export  function SignIn() {
   

  return (
    <View style={styles.container}>
        <Image source={IllustrationImg}/>
    </View>
  );
}


