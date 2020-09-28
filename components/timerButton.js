import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

const TimerButton = ({styleButton, small, onPress, title, styleText}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={[styles.buttonContainer, styleButton]}
      onPress={onPress}>
      <Text
        style={[
          styles.buttonText,
          small ? styles.styleSmall : styles.styleLarge,
          styleText,
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 10,
    minWidth: 100,
    borderWidth: 2,
    borderRadius: 3,
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  styleSmall: {
    fontSize: 14,
    padding: 5,
  },
  styleLarge: {
    fontSize: 16,
    padding: 10,
  },
});

export default TimerButton;
