import moment from 'moment';

/**
 * Format currency value to 2 dp
 *
 * @param {string} value currency amount
 * @returns {sring} currency amount string formatted to 2 dp
 */
export function formatCurrency(value) {
  if (!value) return value;

  // handle cents
  if (value % 1 !== 0) {
    return parseFloat(value)
      .toFixed(2)
      .replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
  }

  return value.toLocaleString(navigator.language);
}

/**
 * Format Unix date to D MMM YYYY format
 *
 * @param {string} date date string
 * @returns {string} formattedDate Date in D MMM YYYY format
 */
export function formatDate(date) {
  if (!date) {
    return date;
  }

  const formattedDate = moment(date).format('D MMM YYYY');
  return formattedDate;
}

/**
 * Format Unix date to D MMM YYYY format
 *
 * @param {number} date date string
 * @returns {string} formattedDate Date in D MMM YYYY format
 */
export function formatUnixDate(date) {
  if (!date) {
    return date;
  }

  const formattedDate = moment.unix(date).format('D MMM YYYY');
  return formattedDate;
}

/**
 * Format Unix date to D MMM YYYY @ H:mm format
 *
 * @param {number} date date string
 * @returns {string} formattedDate Date in D MMM YYYY format
 */
export function formatDateTime(date) {
  if (!date) {
    return date;
  }

  const formattedDate = moment(date).format('D MMM YYYY @ H:mm');
  return formattedDate;
}

/**
 * Format Unix date to D MMM YYYY @ H:mm format
 *
 * @param {number} date date string
 * @returns {string} formattedDate Date in D MMM YYYY @ H:mm format
 */
export function formatUnixDateTime(date) {
  if (!date) {
    return date;
  }

  return moment.unix(date).format('D MMM YYYY @ H:mm');
}

export function formatDateMonthTime(date) {
  if (!date) {
    return date;
  }

  return {
    date: moment(date).format('D MMM'),
    time: moment(date).format('H:mm'),
  };
}

/**
 * Tests whether an email is in the format x@y.z
 *
 * @param {email} email email string
 * @returns {boolean} valid true when valid, false otherwise
 */

export function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; //eslint-disable-line
  const valid = re.test(email);
  return valid;
}
