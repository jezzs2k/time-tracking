import React from 'react';
import {View, StyleSheet} from 'react-native';

import TimerFormFieldIntem from './timerFormFieldItem';
import TimerButton from './timerButton';

const TimerForm = ({id}) => {
  const submitText = id ? 'Update' : 'Create';

  return (
    <View style={styles.formContainer}>
      <TimerFormFieldIntem title="Title" />
      <TimerFormFieldIntem title="Project" />
      <TimerButton
        title={submitText}
        small={true}
        styleButton={styles.styleButtonCreate}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: 'white',
    borderColor: '#D6D7DA',
    borderWidth: 2,
    borderRadius: 10,
    padding: 15,
    margin: 15,
    marginBottom: 0,
  },
  styleButtonCreate: {
    borderWidth: 2,
    borderColor: 'green',
  },
});

export default TimerForm;
