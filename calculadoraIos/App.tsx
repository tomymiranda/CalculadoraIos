import React from 'react';
import {SafeAreaViewBase} from 'react-native';
import {CalculadoraScreen} from './src/components/CalculadoraScreen';
import {styles} from './src/theme/appTheme';

const App = () => {
  return (
    <SafeAreaViewBase style={styles.fondo}>
      <CalculadoraScreen />
    </SafeAreaViewBase>
  );
};
export default App;
