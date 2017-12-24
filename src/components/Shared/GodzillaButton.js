import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';

const styles = StyleSheet.create({
  button: {
    height: 47,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    paddingHorizontal: 15,
    opacity: 1,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 15,
  }
});

export default class GodzillaButton extends Component {
  render() {
    const {
      onPress,
      label,
      backgroundColor,
      textColor,
      disabled
    } = this.props;

    return (
      <TouchableOpacity
        style = {[ styles.button, {backgroundColor} ]}
        onPress = { () => onPress() }
        disabled = {disabled} >

        <Text style = {[styles.buttonText, {color: textColor}]}>{label}</Text>
      </TouchableOpacity>
    )
  }
}
