const getSleepHours = (day) => {
  switch (day) {
    case 'monday':
      return 8;
    case 'tuesday':
      return 7;
    case 'wednesday':
      return 6;
    case 'thursday':
      return 5;
    case 'friday':
      return 7;
    case 'saturday':
      return 9;
    case 'sunday':
      return 8;
    default:
      return 'Invalid day';
  }
};

const getActualSleepHours = () =>
  getSleepHours('monday') +
  getSleepHours('tuesday') +
  getSleepHours('wednesday') +
  getSleepHours('thursday') +
  getSleepHours('friday') +
  getSleepHours('saturday') +
  getSleepHours('sunday');

const getIdealSleepHours = (idealHours = 8) => idealHours * 7;

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();

  if (actualSleepHours === idealSleepHours) {
    console.log('You got the perfect amount of sleep.');
  } else if (actualSleepHours > idealSleepHours) {
    console.log(
      `You got ${actualSleepHours - idealSleepHours} more hours of sleep than needed.`
    );
  } else {
    console.log(
      `You need ${idealSleepHours - actualSleepHours} more hours of sleep.`
    );
  }
};

calculateSleepDebt();

// Extra Practice

// Alternate implementation of getActualSleepHours() without calling getSleepHours()
const getActualSleepHoursAlt = () => 8 + 7 + 6 + 5 + 7 + 9 + 8;

// Alternate implementation of getIdealSleepHours() with a parameter
const getIdealSleepHoursAlt = (idealHours) => idealHours * 7;
