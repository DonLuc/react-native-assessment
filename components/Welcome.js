import React from 'react';
import {StyleSheet, Text, View, Button, TextInput} from 'react-native';
import {useDispatch} from 'react-redux';
import {STORE_NAME} from '../constants';

function Welcome({navigation}) {
  const [username, onChangeText] = React.useState('');
  const dispatch = useDispatch();
  function storeUsername() {
    if (username.length > 0) {
      dispatch({type: STORE_NAME, payload: username});
      navigation.navigate('Home');
    } else {
      alert('Please provide your username!');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>INVESTEC ASSESSMENT: </Text>
      <TextInput
        defaultValue={username}
        placeholder="Please provide username"
        onChangeText={onChangeText}></TextInput>
      <Button title="Proceed" onPress={() => storeUsername()} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'grey',
  },
  title: {
    fontSize: 20,
    margin: 10,
    textAlign: 'center',
  },
});

export default Welcome;
