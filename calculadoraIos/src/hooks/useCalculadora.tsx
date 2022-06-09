/* eslint-disable prettier/prettier */
import {useState, useRef} from 'react';

//los hooks es mejor usarlos para las funciones

enum Operaciones {
  sumar = '+',
  restar = '-',
  multiplicar = '*',
  dividir = '/',
}

export const useCalculadora = () => {
  const [numeroAnterior, setNumeroAnterior] = useState('');
  const [numero, setNumero] = useState('0');
  const ultOperacion = useRef<Operaciones>();

  const limpiarPantalla = () => {
    setNumero('0');
    setNumeroAnterior('0');
  };

  const agregarNumero = (numeroAAgregar: string) => {
    //no hay doble punto
    if (numero.includes('.') && numeroAAgregar === '.') {
      return;
    }

    if (numero.startsWith('0') || numero.startsWith('-0')) {
      //punto decimal
      if (numeroAAgregar === '.') {
        setNumero(numero + numeroAAgregar);

        //evalua si es otro cero y hay un punto
      } else if (numeroAAgregar === '0' && numero.includes('.')) {
        setNumero(numero + numeroAAgregar);

        //evalua si es diferente de 0 y no tiene un punto
      } else if (numeroAAgregar !== '0' && !numero.includes('.')) {
        setNumero(numeroAAgregar);

        //evita el 000.00
      } else if (numeroAAgregar === '0' && !numero.includes('.')) {
        setNumero(numero);
      } else {
        setNumero(numero + numeroAAgregar);
      }
    } else {
      setNumero(numero + numeroAAgregar);
    }
  };

  const positivoNegativo = () => {
    if (numero.includes('-')) {
      setNumero(numero.replace('-', ''));
    } else {
      setNumero('-' + numero);
    }
  };

  const borrarElUltimoDigito = () => {
    let negativo = '';
    let temp = numero;

    if (numero.includes('-')) {
      negativo = '-';
      temp = numero.substring(1);
    }
    if (temp.length > 1) {
      setNumero(negativo + temp.slice(0, -1));
    } else {
      setNumero('0');
    }
  };

  const cambiarNumeroPorElAnterior = () => {
    if (numero.endsWith('.')) {
      setNumeroAnterior(numero.slice(0, -1));
    } else {
      setNumeroAnterior(numero);
    }
    setNumero('0');
  };

  const btnDividir = () => {
    cambiarNumeroPorElAnterior();
    ultOperacion.current = Operaciones.dividir;
  };

  const btnMultiplicar = () => {
    cambiarNumeroPorElAnterior();
    ultOperacion.current = Operaciones.multiplicar;
  };

  const btnRestar = () => {
    cambiarNumeroPorElAnterior();
    ultOperacion.current = Operaciones.restar;
  };

  const btnSumar = () => {
    cambiarNumeroPorElAnterior();
    ultOperacion.current = Operaciones.sumar;
  };

  const calcular = () => {
    const num1 = Number(numero);
    const num2 = Number(numeroAnterior);

    switch (ultOperacion.current) {
      case Operaciones.sumar:
        setNumero(String(num1 + num2));
        break;

      case Operaciones.restar:
        setNumero(String(num2 - num1));
        break;

      case Operaciones.multiplicar:
        setNumero(String(num1 * num2));
        break;

      case Operaciones.dividir:
        setNumero(String(num2 / num1));
        break;

      default:
        break;
    }
    setNumeroAnterior('0');
  };

  return {
    numero,
    numeroAnterior,
    limpiarPantalla,
    agregarNumero,
    positivoNegativo,
    borrarElUltimoDigito,
    cambiarNumeroPorElAnterior,
    btnDividir,
    btnMultiplicar,
    btnRestar,
    btnSumar,
    calcular,
  };
};
