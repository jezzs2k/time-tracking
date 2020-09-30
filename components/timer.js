import React, { useState } from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {millisecondsToHuman} from '../utils/millisecondsToHuman';

import TimerButton from './timerButton';

const Timer = ({id, title, project, elapsed, isRunning, onEditPress, onRemovePress, onStartPress, onStopPress}) => {  
  const timeCounter = millisecondsToHuman(elapsed);

  const handleStartPress = () => {  
    onStartPress(id);
  };

  const handleStopPress = () => {
    onStopPress(id);
  };

  const handlerRemoveTimer = () => {
    onRemovePress(id);
  }

  const renderButtonAction = () => {
    if(isRunning){
      return <TimerButton
              title={'Stop'}
              styleButton={styles.styleButtonStop}
              styleText={styles.styleTextStop}
              onPress={handleStopPress}
             /> 
    }

    return <TimerButton
            title={'Start'}
            styleButton={styles.styleButtonStart}
            styleText={styles.styleTextStart}
            onPress={handleStartPress}
           />
}

  return (
    <View style={styles.timerContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.titleProject}>{project}</Text>
      <Text style={styles.elapsed}>{timeCounter}</Text>
      <View style={styles.buttonGroup}>
        <TimerButton
          title={'Edit'}
          styleButton={{...styles.buttonStyleNomal, marginRight: 8}}
          styleText={styles.textStyleNomal}
          onPress={onEditPress}
        />
        <TimerButton
          title={'Remove'}
          styleButton={{...styles.buttonStyleNomal, marginLeft: 8}}
          styleText={styles.textStyleNomal}
          onPress={handlerRemoveTimer}
        />
      </View>
      {renderButtonAction()}  
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
  styleButtonStop: {
    borderColor: '#DB2828',
  },
  styleTextStop: {
    color: '#DB2828',
  },
});

export default Timer;
