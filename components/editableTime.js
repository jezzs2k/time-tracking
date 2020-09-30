import React, {useState} from 'react';

import TimerForm from './timerForm';
import Timer from './timer';

const EditTableTime = ({id, title, project, elapsed, isOpen}) => {
  const [editFormOpen, setEditFormOpen] = useState(false);

  if (editFormOpen) {
    return <TimerForm id={id} title={title} project={project} />;
  }

  return (
    <Timer title={title} project={project} elapsed={elapsed} isOpen={isOpen} />
  );
};

export default EditTableTime;
