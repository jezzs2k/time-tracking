import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';

import TimerForm from './timerForm';
import TimerButton from './timerButton';

const ToggleableTimerForm = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <View style={[styles.container, isOpen && styles.buttonPadding]}>
      {isOpen ? (
        <TimerForm />
      ) : (
        <TimerButton
          styleButton={{marginHorizontal: 8}}
          title={'+'}
          onPress={() => setOpen(true)}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
  },
  buttonPadding: {
    paddingHorizontal: 15,
  },
});

export default ToggleableTimerForm;
