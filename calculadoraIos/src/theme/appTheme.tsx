/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

// son los estilos GLOBALES de la app
export const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    backgroundColor: 'black',
  },
  calculadoraContainer: {
    /* el horizontal ajusta de los costados */
    paddingHorizontal: 20,
    flex: 1,
    justifyContent: 'flex-end',
  },
  resCalculadora: {
    color: 'white',
    fontSize: 60,
    textAlign: 'right',
  },
  resPequenioCalculadora: {
    color: 'white',
    fontSize: 30,
    textAlign: 'right',
  },
  fila: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 18,
    paddingHorizontal: 10,
  },
  botonCalculadora: {
    height: 80,
    width: 80,
    backgroundColor: '#2d2d2d',
    borderRadius: 100,
    justifyContent: 'center',
  },
  textoBotonCalculadora: {
    textAlign: 'center',
    padding: 10,
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
