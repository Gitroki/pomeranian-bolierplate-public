export const DateAndTime = () => {
  // Aktualna data
  const currentDate = new Date();
  console.log('Current date: ' + currentDate);
  // Tworzenie timestampu z aktualnej daty
  const timestamp = Date.now();
  console.log('Timestamp: ' + timestamp);
  const dateString = '2023-08-28T14:30:00.000Z';
  // Zamiana stringa na timestamp
  const parsedData = Date.parse(dateString);
  console.log(parsedData);

  const currentTimestamp = new Date().getTime();
  const weekendTimestamp = new Date('2023-09-15 22:00:00').getTime();
  const timeToWeekend = weekendTimestamp - currentTimestamp;
  const daysLeft = Math.floor(timeToWeekend / (1000 * 60 * 60 * 24));
  const hoursLeft = Math.floor(timeToWeekend / (1000 * 60 * 60));
  const minutesLeft = Math.floor(timeToWeekend / (1000 * 60));

  console.log(minutesLeft);
  return <div>DateAndTime</div>;
};
