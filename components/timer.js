import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

import TimerButton from './timerButton';

const Timer = ({title, project}) => {
  return (
    <View style={styles.timerContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.titleProject}>{project}</Text>
      <Text style={styles.elapsed}>11:44:60</Text>
      <View style={styles.buttonGroup}>
        <TimerButton
          title={'Edit'}
          styleButton={{...styles.buttonStyleNomal, marginRight: 8}}
          styleText={styles.textStyleNomal}
        />
        <TimerButton
          title={'Remove'}
          styleButton={{...styles.buttonStyleNomal, marginLeft: 8}}
          styleText={styles.textStyleNomal}
        />
      </View>
      <TimerButton
        title={'Start'}
        styleButton={styles.styleButtonStart}
        styleText={styles.styleTextStart}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  timerContainer: {
    backgroundColor: 'white',
    borderColor: '#D6D7DA',
    borderWidth: 2,
    borderRadius: 10,
    padding: 15,
    margin: 15,
    marginBottom: 0,
  },
  titleProject: {
    fontSize: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: '800',
  },
  elapsed: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 15,
  },
  buttonGroup: {
    flexDirection: 'row',
  },
  buttonStyleNomal: {
    borderColor: 'blue',
    borderWidth: 2,
    flex: 1,
  },
  textStyleNomal: {
    color: 'blue',
  },
  styleButtonStart: {
    borderColor: '#21BA45',
    borderWidth: 2,
  },
  styleTextStart: {
    color: '#21BA45',
  },
});

export default Timer;
