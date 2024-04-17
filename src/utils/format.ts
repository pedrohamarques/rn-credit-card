/**
 * @param  string data
 * @returns string
 * @description Adds a space after 4 digits.
 */
export function formatCreditCardNumber(data: string) {
    return data.replace(/(\d{4})(?=\d)/g, "$1 ");
}

/**
 * @param string date
 * @returns string
 * @description Adds a foward slash after 2 digits.
 */
export function formatExpiringDate(date: string) {
    return date.replace(/(\d{2})(?=\d)/g, "$1/");
}
