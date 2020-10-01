export const millisecondsToHuman = (millisec) => {
  const seconds = Math.floor((millisec / 1000) % 60);
  const minutes = Math.floor((millisec / (1000 * 60)) % 60);
  let hours = Math.floor((millisec / (1000 * 60 * 60 * 60)));
  let days = Math.floor(millisec / (1000 * 60 * 60 * 60 * 24));

  if (hours >= 24) {
    hours = hours - 24 * days;
  }

  return `${days && days} : ${hours && hours} : ${minutes} : ${seconds}`;
};
