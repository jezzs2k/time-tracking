import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, ScrollView, KeyboardAvoidingView} from 'react-native';
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';
import {newTimer} from './utils/newTimer'

import EditableTime from './components/editableTime';
import ToggleableTimerForm from './components/toggleableTimerForm';



const App = () => {
  const TIME_INTERVAL = 1000;
  const [timers, setTimers] = useState([
    {
      title: 'Mow the lawn',
      project: 'House Chores',
      id: uuidv4(),
      elapsed: 5456099,
      isRunning: true,
    },
    {
      title: 'Bake squash',
      project: 'Kitchen Chores',
      id: uuidv4(),
      elapsed: 1986999999,
      isRunning: false,
    },
  ]);

  const handerCreateTimer = (timer) => {
    const timer_new = newTimer(timer);

    setTimers((timers) => ([...timers, timer_new]));
  };

  const handerUpdateTimer = (timer) => {
    setTimers(timers => (timers.map(item => {
      if (item.id === timer.id) {
        return {...item, ...timer};
      }else{
        return item;
      }
    })))
  };

  useEffect(() => {
    const interval = setInterval(() => {
    setTimers((timers) => timers.map((timer) => ({
      ...timer,
      elapsed: timer.isRunning ? timer.elapsed + TIME_INTERVAL : timer.elapsed,
      })));
   }, TIME_INTERVAL)
   return () => clearInterval(interval)
  }, [])

  const handleRemoveTimer = (id) => setTimers((timers => timers.filter(item => item.id !== id)));

  const handleStopTimer = (id) => {
    setTimers((timers) => timers.map((timer) => {
      return timer.id === id ? {
        ...timer,
        isRunning: false
      } : timer
    })); 
  };
  
  const handleStartTimer = (id) => {
    setTimers((timers) => timers.map((timer) => {
      return timer.id === id ? {
        ...timer,
        isRunning: true
      } : timer
    })); 
  };


  return (
    <View style={styles.containerApp}>
      <Text style={styles.timerTitleHeader}>Timers</Text>
      <KeyboardAvoidingView 
      behavior="padding">
        <ScrollView>
          <ToggleableTimerForm onFormSumit={handerCreateTimer} />
          {timers.map(({title, project, id, elapsed, isRunning}) => (
            <EditableTime
              key={id}
              id={id}
              title={title}
              project={project}
              elapsed={elapsed}
              isRunning={isRunning}
              onFormSubmit={handerUpdateTimer}
              onRemovePress={handleRemoveTimer}
              onStartPress={handleStartTimer}
              onStopPress={handleStopTimer}
            />
          ))}
        </ScrollView>
      </KeyboardAvoidingView>
      
    </View>
  );
};

const styles = StyleSheet.create({
  containerApp: { 
    padding: 8,
    paddingVertical: 50,
  },
  timerTitleHeader:{
      fontSize: 26,
      textAlign: 'center',
      fontWeight: '700',
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
  },
});

export default App;
