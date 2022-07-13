import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Separator,
} from 'react-native';
import {connect} from 'react-redux';
import {useDispatch, useSelector} from 'react-redux';

function Home({navigation}) {
  const username = useSelector(state => state.app.username);
  return (
    <View style={styles.container}>
      <Text style={styles.sessionText}>Logged In user: {username}</Text>
      <Text style={styles.title}>Welcome {username}</Text>
      <Button
        title="Goto button variations"
        onPress={() => navigation.navigate('ButtonVariations')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'grey',
  },
  sessionText: {
    textAlign: 'right',
    fontSize: 10,
    color: 'green',
    fontWeight: '500',
  },
  title: {
    fontSize: 20,
    margin: 10,
    textAlign: 'center',
  },
});

export default Home;
