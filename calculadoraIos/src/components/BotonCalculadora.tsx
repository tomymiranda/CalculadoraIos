/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../theme/appTheme';

interface Props {
  texto: string;
  color?: string;
}

export const BotonCalculadora = ({texto, color}:Props) => {
  return (
    <View style={{... styles.botonCalculadora, backgroundColor:color}}>
      <Text style={styles.textoBotonCalculadora}>{texto}</Text>
    </View>
  );
};
