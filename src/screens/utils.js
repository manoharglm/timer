export const getUniqueId = () =>
  Date.now().toString(36) + Math.random().toString(36).slice(2);

export const convertSecondsToHMS = (seconds) => {
  const convert = (x) => {
    return x < 10 ? "0" + x : x;
  };
  return (
    convert(parseInt(seconds / (60 * 60))) +
    ":" +
    convert(parseInt((seconds / 60) % 60)) +
    ":" +
    convert(seconds % 60)
  );
};
