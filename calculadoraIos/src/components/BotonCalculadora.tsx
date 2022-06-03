/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../theme/appTheme';

interface Props {
  texto: string;
  color?: string;
  ancho?: boolean;
  //no se puede dejar como ? una funcion q se pasa como props porq no se puede pasar como parametro algo q puede llegar como indefinido
  action: ( numeroTexto: string ) => void;
}

export const BotonCalculadora = ({texto, color = '#2D2D2D', ancho = false, action }:Props) => {
  return (
    <TouchableOpacity
      onPress={() => action(texto)}>
      <View style={{... styles.botonCalculadora, backgroundColor:color, width: (ancho) ? 180: 80 }}>
        <Text style={{... styles.textoBotonCalculadora,
            color:(color==='#9B9B9B')? 'black':'white'}}>{texto}</Text>
      </View>
    </TouchableOpacity>
    
  );
};
