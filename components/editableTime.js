import React, {useState} from 'react';

import TimerForm from './timerForm';
import Timer from './timer';

const EditTableTime = ({id, title, project, elapsed, isRunning,isOpen, onFormSubmit, onRemovePress, onStartPress, onStopPress}) => {
  const [editFormOpen, setEditFormOpen] = useState(false);

  const handleSubmit = (timer) => {
    onFormSubmit(timer);
    setEditFormOpen(false);
  };

  if (editFormOpen) {
    return <TimerForm id={id} title={title} project={project} onFormSubmit={handleSubmit} onFormClose={setEditFormOpen} />;
  }

  return (
    <Timer id={id} title={title} isRunning={isRunning} project={project} elapsed={elapsed} isOpen={isOpen} onEditPress={() => setEditFormOpen(true)} onRemovePress={onRemovePress} onStartPress={onStartPress} onStopPress={onStopPress}/>
  );
};

export default EditTableTime;
