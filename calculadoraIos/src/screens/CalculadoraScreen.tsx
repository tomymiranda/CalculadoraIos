/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View} from 'react-native';
import { BotonCalculadora } from '../components/BotonCalculadora';
import { styles } from '../theme/appTheme';

export const CalculadoraScreen = () => {
  return (
    <View style={styles.calculadoraContainer}>
      <Text style={styles.resPequenioCalculadora}>1500.00</Text>
      <Text style={styles.resCalculadora}>1500.00</Text>

      <View style={styles.fila}>
        <BotonCalculadora texto="C" color="#9b9b9b" />
        <BotonCalculadora texto="+/-" color="#9b9b9b" />
        <BotonCalculadora texto="del" color="#9b9b9b" />
        <BotonCalculadora texto="/" color="#ff9427" />

        {/* 2d2d2d gris oscuro  ff9427 naranja*/}
      </View>
    </View>
  );
};
