import React, {useState} from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';

import EditableTime from './components/editableTime';
import TimerForm from './components/timerForm';
import ToggleableTimerForm from './components/toggleableTimerForm';
import Timer from './components/timer';

const App = () => {
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
      elapsed: 1273998,
      isRunning: false,
    },
  ]);
  return (
    <View style={styles.containerApp}>
      <Text style={styles.timerTitle}>Timers</Text>
      <ScrollView>
        <ToggleableTimerForm />
        {timers.map(({title, project, id, elapsed, isRunning}) => (
          <EditableTime
            key={id}
            id={id}
            title={title}
            project={project}
            elapsed={elapsed}
            isRunning={isRunning}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  containerApp: {},
  timerTitle: {},
});

export default App;
