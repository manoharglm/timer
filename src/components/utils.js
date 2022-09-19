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

export const getTimeForTimezone = async (timeZone = "Asia/kolkata") => {
  const response = await fetch(
    `https://timeapi.io/api/Time/current/zone?timeZone=${timeZone}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    }
  );
  const data = await response.json();
  return data;
};

export const getTimeZoneName = (zone) => {
  switch (zone) {
    case "PST":
      return "America/Los_Angeles";
    case "IST":
      return "Asia/kolkata";
    default:
      return "Asia/kolkata";
  }
};
