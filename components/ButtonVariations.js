import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import ButtonComposer from './ButtonComposer';
import SwipableButton from './SwipableButton';
function ButtonVariations() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>4 Variations of a button</Text>

      <ButtonComposer btnStyle={styles.btnOutlined} />
      <ButtonComposer btnStyle={styles.btnGrey} />

      <SwipableButton />
    </View>
  );
}

const button = {
  alignItems: 'center',
  justifyContent: 'center',
  paddingVertical: 12,
  paddingHorizontal: 32,
  borderRadius: 4,
  elevation: 3,
  marginVertical: 5,
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'black',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },

  btnOutlined: {
    backgroundColor: 'black',
    ...button,
  },
  btnGrey: {
    backgroundColor: '#34434a',
    ...button,
  },

  btnBlue: {
    backgroundColor: 'blue',
    ...button,
  },

  btnText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  sessionText: {
    textAlign: 'right',
    fontSize: 10,
    color: 'green',
    fontWeight: '500',
  },
  title: {
    fontSize: 18,
    margin: 10,
    textAlign: 'center',
    color: '#fdc522',
  },
});

export default ButtonVariations;
