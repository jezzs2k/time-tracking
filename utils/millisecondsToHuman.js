export const millisecondsToHuman = (millisec) => {
  const seconds = Math.floor((millisec / 1000) % 60);
  const minutes = Math.floor((millisec / (1000 * 60)) % 60);
  const hours = Math.floor((millisec / (1000 * 60 * 60)) % 24);
  let days = Math.floor(millisec / (1000 * 60 * 60 * 60 * 24));

  if (hours === 23 && minutes === 59 && seconds === 59) {
    days = days + 1;
  }

  return `${days && days} : ${hours && hours} : ${minutes} : ${seconds}`;
};
