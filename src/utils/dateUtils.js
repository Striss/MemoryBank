export const getDaysUntilNextBirthday = (birthDate) => {
  const today = new Date();
  const birth = new Date(birthDate);
  const currentYear = today.getFullYear();

  let nextBirthday = new Date(currentYear, birth.getMonth(), birth.getDate());

  // If birthday already passed this year, use next year
  if (nextBirthday < today) {
    nextBirthday.setFullYear(currentYear + 1);
  }

  const diffTime = nextBirthday - today;
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // days
};


// Function to calculate age from birth date
export const calculateAge = (birthDate) => {
  const birth = new Date(birthDate);
  const today = new Date();
  let age = today.getFullYear() - birth.getFullYear();
  const m = today.getMonth() - birth.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  return age;
};


export const extractBirthDateWithoutYear = (birthDate) => {
  const [year, month, day] = birthDate.split("-").map(Number);
  const date = new Date(year, month - 1, day); // month is 0-based

  const monthName = date.toLocaleString("default", { month: "long" });
  return `${monthName} ${day}`;
};


// Calculates how far we are from last birthday to next
export const calculateBirthdayProgress = (birthDate) => {
  const today = new Date();
  const birth = new Date(birthDate);

  const currentYearBirthday = new Date(today.getFullYear(), birth.getMonth(), birth.getDate());
  let nextBirthday = new Date(currentYearBirthday);
  if (today > currentYearBirthday) {
    nextBirthday.setFullYear(today.getFullYear() + 1);
  }

  const lastBirthday = new Date(nextBirthday);
  lastBirthday.setFullYear(nextBirthday.getFullYear() - 1);

  const progress =
    (today - lastBirthday) / (nextBirthday - lastBirthday);

  return Math.min(Math.max(progress, 0), 1);
};