
import { StyleSheet, Text, View,TextInput,Image,StatusBar } from 'react-native';
import { styles } from './styles';  
import { useState } from 'react';

import IllustrationImg from '../../src/assets/illustration.png'

export  function SignIn() {
   

  return (
    <View style={styles.container}>
        <Image source={IllustrationImg} style={styles.image} resizeMode='stretch'/>
        <View style={styles.content}>
          <Text style={styles.title}>
             Organize {`\n`}
             Suas Jogatinas{`\n`}
             facilmente
          </Text>
        </View>
    </View>
  );
}


