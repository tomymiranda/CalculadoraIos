/* eslint-disable prettier/prettier */
import React from 'react';
import { useState } from 'react';
import {Text, View} from 'react-native';
import { BotonCalculadora } from '../components/BotonCalculadora';
import { styles } from '../theme/appTheme';

export const CalculadoraScreen = () => {
  
  const [numeroAnterior, setNumeroAnterior] = useState('');
  const [numero, setNumero] = useState('0');
  
  const limpiarPantalla = () => {
    setNumero('0');
  }

  const agregarNumero = (numero:string) => {
    setNumero(numero + numeroAnterior)
  }

  return (
    <View style={styles.calculadoraContainer}>
      <Text style={styles.resPequenioCalculadora}>{numeroAnterior}</Text>
      <Text style={styles.resCalculadora} numberOfLines={1} adjustsFontSizeToFit >{numero}</Text>

      <View style={styles.fila}>
        <BotonCalculadora texto="C" color="#9b9b9b" action ={limpiarPantalla}/>
        <BotonCalculadora texto="+/-" color="#9b9b9b" action ={limpiarPantalla} />
        <BotonCalculadora texto="del" color="#9b9b9b" action ={limpiarPantalla} />
        <BotonCalculadora texto="/" color="#ff9427" action ={limpiarPantalla} />
      </View>

      <View style={styles.fila}>
        <BotonCalculadora texto="7"  action = {agregarNumero}/>
        <BotonCalculadora texto="8"  action = {agregarNumero} />
        <BotonCalculadora texto="9"  action = {agregarNumero} />
        <BotonCalculadora texto="X" color="#ff9427" action ={limpiarPantalla}/>
      </View>

      <View style={styles.fila}>
        <BotonCalculadora texto="4"  action = {agregarNumero} />
        <BotonCalculadora texto="5"  action = {agregarNumero} />
        <BotonCalculadora texto="6"  action = {agregarNumero} />
        <BotonCalculadora texto="-" color="#ff9427" action ={limpiarPantalla} />
      </View>

      <View style={styles.fila}>
        <BotonCalculadora texto="1"  action = {agregarNumero} />
        <BotonCalculadora texto="2"  action = {agregarNumero} />
        <BotonCalculadora texto="3"  action = {agregarNumero} />
        <BotonCalculadora texto="+" color="#ff9427" action ={limpiarPantalla} />
      </View>
      
      <View style={styles.fila}>
        <BotonCalculadora texto="0" ancho  action = {agregarNumero} />
        <BotonCalculadora texto="."  action = {agregarNumero} />
        <BotonCalculadora texto="=" color="#ff9427" action ={limpiarPantalla} />
      </View>
    </View>
  );
};
