import moment from 'moment';

const getDatesDifference = (startDate, endDate) => moment(endDate).diff(startDate, 'days');
const getDatesDifferenceInMonths = (startDate, endDate) => moment(endDate).diff(startDate, 'months');
const getDatesDifferenceInYears = (startDate, endDate) => moment(endDate).diff(startDate, 'years');

export {
    getDatesDifference,
    getDatesDifferenceInMonths,
    getDatesDifferenceInYears
};
