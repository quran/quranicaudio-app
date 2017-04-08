export default (seconds) => {
  const date = new Date(null);
  date.setSeconds(seconds); // specify value for SECONDS here
  const time = date.toISOString().substr(11, 8);
  return time;
};
