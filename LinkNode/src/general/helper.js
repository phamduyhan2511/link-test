import ehealth from 'general/i3app';
import moment from 'moment';

export const ajax = {
    get: ehealth.ajax.get,
    post: ehealth.ajax.post,
}
export const guid = {
    get: ehealth.guid.get
}

export function equalDate(a, b){
    return a.getDate() == b.getDate() && a.getMonth() == b.getMonth() && a.getYear() == b.getYear();
}
export function getDates(startDate, stopDate) {
    var dateArray = new Array();
    var currentDate = startDate;
    while (equalDate(currentDate, stopDate) || currentDate < stopDate) {
        dateArray.push(currentDate)
        currentDate = currentDate.addDays(1);
    }
    return dateArray;
}
export function getDateOfWeekTitle(day){
    if ([1, 2, 3, 4, 5, 6].includes(day)){
        return `Th${day + 1}`;
    }
    return `CN`;
}
export function displayDate(date, format = 'DD/MM/YYYY'){
    return date ? moment(date).format(format) : "-";
}
export function displayFullDate(date){
    return moment(date).format('DD/MM/YYYY HH:mm:ss');
}