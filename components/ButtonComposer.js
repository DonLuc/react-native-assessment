import React, {Component} from 'react';
import {
  TouchableHighlight,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

class ButtonComposer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableHighlight>
        <TouchableOpacity style={this.props.btnStyle}>
          <Text style={styles.btnText}>Press Me</Text>
        </TouchableOpacity>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  btnText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});

export default ButtonComposer;
