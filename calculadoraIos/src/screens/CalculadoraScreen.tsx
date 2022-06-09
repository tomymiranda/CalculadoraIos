/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View} from 'react-native';
import { BotonCalculadora } from '../components/BotonCalculadora';
import { styles } from '../theme/appTheme';
import { useCalculadora } from '../hooks/useCalculadora';

export const CalculadoraScreen = () => {

  
  //se importa funciones de useCalculadora hook
  const {
    numeroAnterior,
    numero,
    limpiarPantalla,
    agregarNumero,
    positivoNegativo,
    borrarElUltimoDigito,
    btnSumar,
    btnRestar,
    btnMultiplicar,
    btnDividir,
    calcular,
  } = useCalculadora();

  return (
    <View style={styles.calculadoraContainer}>
      {numeroAnterior !== '0' && (
        <Text style={styles.resPequenioCalculadora}>{numeroAnterior}</Text>
      )}
      <Text
        style={styles.resCalculadora}
        numberOfLines={1}
        adjustsFontSizeToFit>
        {numero}
      </Text>

      <View style={styles.fila}>
        <BotonCalculadora texto="C" color="#9b9b9b" action={limpiarPantalla} />
        <BotonCalculadora
          texto="+/-"
          color="#9b9b9b"
          action={positivoNegativo}
        />
        <BotonCalculadora
          texto="del"
          color="#9b9b9b"
          action={borrarElUltimoDigito}
        />
        <BotonCalculadora texto="/" color="#ff9427" action={btnDividir} />
      </View>

      <View style={styles.fila}>
        <BotonCalculadora texto="7" action={agregarNumero} />
        <BotonCalculadora texto="8" action={agregarNumero} />
        <BotonCalculadora texto="9" action={agregarNumero} />
        <BotonCalculadora texto="X" color="#ff9427" action={btnMultiplicar} />
      </View>

      <View style={styles.fila}>
        <BotonCalculadora texto="4" action={agregarNumero} />
        <BotonCalculadora texto="5" action={agregarNumero} />
        <BotonCalculadora texto="6" action={agregarNumero} />
        <BotonCalculadora texto="-" color="#ff9427" action={btnRestar} />
      </View>

      <View style={styles.fila}>
        <BotonCalculadora texto="1" action={agregarNumero} />
        <BotonCalculadora texto="2" action={agregarNumero} />
        <BotonCalculadora texto="3" action={agregarNumero} />
        <BotonCalculadora texto="+" color="#ff9427" action={btnSumar} />
      </View>

      <View style={styles.fila}>
        <BotonCalculadora texto="0" ancho action={agregarNumero} />
        <BotonCalculadora texto="." action={agregarNumero} />
        <BotonCalculadora texto="=" color="#ff9427" action={calcular} />
      </View>
    </View>
  );
};
