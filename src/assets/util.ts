/**
 * Checks if today is a given birthday.
 * @param {string} birthdateString - Recommended format: 'YYYY-MM-DD'
 * @return {boolean} True if today is birthday, otherwise false.
 */
export function isToday(birthdateString: string): boolean {
  const birthdate = new Date(birthdateString)
  const today = new Date()

  return (
    birthdate.getMonth() === today.getMonth() &&
    birthdate.getDate() === today.getDate()
  )
}

/**
 * Calculates age from given date. Taken from
 * https://stackoverflow.com/questions/4060004/calculate-age-given-the-birth-date-in-the-format-yyyymmdd
 * @param {string} dateString - Recommended format: 'YYYY-MM-DD'
 * @return {number} The calculated age.
 */
export function getAge(dateString: string): number {
  const today = new Date()
  const birthDate = new Date(dateString)
  let age = today.getFullYear() - birthDate.getFullYear()
  const m = today.getMonth() - birthDate.getMonth()
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age -= 1
  }
  return age
}
