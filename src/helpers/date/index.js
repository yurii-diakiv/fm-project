import moment from 'moment';

const getDatesDifference = (startDate, endDate) => moment(endDate).diff(startDate, 'days');

export {
    getDatesDifference
};
