import React from 'react';
import {Text, View, TextInput, StyleSheet} from 'react-native';

const TimerFormFieldItem = ({title, value, handerInput}) => {
  return (
    <>
      <View style={styles.attributeContainer}>
        <Text style={styles.textInputTitle}>
          {title} <Text style={styles.requiredLable}>*</Text>
        </Text>
      </View>
      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.textInput}
          underlineColorAndroid="transparent"
          defaultValue={''}
          value={value}
          onChangeText={handerInput}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  attributeContainer: {
    marginVertical: 8,
  },
  textInputTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  textInputContainer: {
    borderColor: '#D6D7DA',
    borderRadius: 2,
    borderWidth: 1,
    marginBottom: 5,
  },
  textInput: {
    height: 30,
    padding: 5,
    fontSize: 12,
  },
  requiredLable: {
    color: 'red',
  },
});

export default TimerFormFieldItem;
