import React, {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';

import TimerFormFieldItem from './timerFormFieldItem';
import TimerButton from './timerButton';

const TimerForm = ({id, title, project, onFormClose, onFormSubmit}) => {
  const submitText = id ? 'Update' : 'Create';
  const [state, setState] = useState({
    title: '',
    project: '',
  });

  const handerChangeTitle = (text) => {
    setState((state) => ({...state, title: text}));
  };

  const handerChangeProject = (text) => {
    setState((state) => ({...state, project: text}));
  };

  const handerSubmit = () => {
    const {title, project} = state;
    onFormSubmit({id, title , project});
  }

  useEffect(() => {
    if (title) {
      setState((state) => ({...state, title: title}));      
    }

    if (project) {
      setState((state) => ({...state, project: project}));
    }

  }, [title, project])

  return (
    <View style={styles.formContainer}>
      <TimerFormFieldItem
        value={state.title}
        handerInput={handerChangeTitle}
        title="Title"
      />
      <TimerFormFieldItem
        value={state.project}
        handerInput={handerChangeProject}
        title="Project"
      />
      <View style={styles.buttonGroup}>
        <TimerButton
          title={submitText}
          small={true}
          styleButton={styles.styleButtonCreate}
          textStyle={styles.textStyle}
          onPress={handerSubmit}
        />
        <TimerButton
          title={'Cancel'}
          small={true}
          styleButton={styles.styleButtonCancel}
          textStyle={styles.textStyle}
          onPress={() => onFormClose(false)}
        />
      </View>
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
    borderColor: '#eeeeee',
    backgroundColor: '#21BA45',
  },
  styleButtonCancel: {
    borderWidth: 2,
    borderColor: '#eeeeee',
    backgroundColor: '#DB2828',
  },
  textStyle: {
    color: 'white',
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default TimerForm;
