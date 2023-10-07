function getDayOfTheWeek(utc) {
  const currentDateInMilliseconds = utc * 1000;
  const dateObject = new Date(currentDateInMilliseconds);

  const currentDayIndex = dateObject.getDay();

  let day;

  switch (currentDayIndex) {
    case 0:
      day = "Duminică";
      break;
    case 1:
      day = "Luni";
      break;
    case 2:
      day = "Marți";
      break;
    case 3:
      day = "Miercuri";
      break;
    case 4:
      day = "Joi";
      break;
    case 5:
      day = "Vineri";
      break;
    case 6:
      day = "Sâmbătă";
      break;
    default:
      throw new Error("Indexul trebuie sa fie intre 0 si 6.");
  }

  return day;
}

function getTime(utc) {
  const currentDateInMilliseconds = utc * 1000;
  const date = new Date(currentDateInMilliseconds);
  let hour = date.getHours();
  let minute = date.getMinutes();

  if (hour < 10) {
    hour = `0${hour}`;
  }

  if (minute < 10) {
    minute = `0${minute}`;
  }

  return `${hour}:${minute}`;
}
