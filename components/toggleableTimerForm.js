import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';

import TimerForm from './timerForm';
import TimerButton from './timerButton';

const ToggleableTimerForm = ({onFormSumit}) => {
  const [isOpen, setOpen] = useState(false);

  const handerFormSubmit = (timer) => {
    onFormSumit(timer);
    setOpen(false);    
  }

  return (
    <View style={[styles.container, isOpen && styles.buttonPadding]}>
      {isOpen ? (
        <TimerForm onFormClose={setOpen} onFormSubmit={handerFormSubmit} />
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
