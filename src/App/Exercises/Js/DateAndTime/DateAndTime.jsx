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
  return <div>DateAndTime</div>;
};
