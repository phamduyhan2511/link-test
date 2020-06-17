import defaultMoment from "moment";
import { IUtils } from "@date-io/core/IUtils";
interface Opts {
    locale?: string;
    instance?: typeof defaultMoment;
    /** @deprecated */
    moment?: typeof defaultMoment;
}
declare type Moment = defaultMoment.Moment;
export default class MomentUtils implements IUtils<defaultMoment.Moment> {
    moment: typeof defaultMoment;
    locale?: string;
    yearFormat: string;
    yearMonthFormat: string;
    dateTime12hFormat: string;
    dateTime24hFormat: string;
    time12hFormat: string;
    time24hFormat: string;
    dateFormat: string;
    constructor({ locale, instance, moment }?: Opts);
    parse(value: string, format: string): defaultMoment.Moment;
    date(value?: any): defaultMoment.Moment;
    isValid(value: any): boolean;
    isNull(date: Moment): boolean;
    getDiff(date: Moment, comparing: Moment | string): number;
    isAfter(date: Moment, value: Moment): boolean;
    isBefore(date: Moment, value: Moment): boolean;
    isAfterDay(date: Moment, value: Moment): boolean;
    isBeforeDay(date: Moment, value: Moment): boolean;
    isBeforeYear(date: Moment, value: Moment): boolean;
    isAfterYear(date: Moment, value: Moment): boolean;
    startOfDay(date: Moment): defaultMoment.Moment;
    endOfDay(date: Moment): defaultMoment.Moment;
    format(date: Moment, formatString: string): string;
    formatNumber(numberToFormat: string): string;
    getHours(date: Moment): number;
    addDays(date: Moment, count: number): defaultMoment.Moment;
    setHours(date: Moment, count: number): defaultMoment.Moment;
    getMinutes(date: Moment): number;
    setMinutes(date: Moment, count: number): defaultMoment.Moment;
    getSeconds(date: Moment): number;
    setSeconds(date: Moment, count: number): defaultMoment.Moment;
    getMonth(date: Moment): number;
    isSameDay(date: Moment, comparing: Moment): boolean;
    setMonth(date: Moment, count: number): defaultMoment.Moment;
    getMeridiemText(ampm: "am" | "pm"): "AM" | "PM";
    startOfMonth(date: Moment): defaultMoment.Moment;
    endOfMonth(date: Moment): defaultMoment.Moment;
    getNextMonth(date: Moment): defaultMoment.Moment;
    getPreviousMonth(date: Moment): defaultMoment.Moment;
    getMonthArray(date: Moment): defaultMoment.Moment[];
    getYear(date: Moment): number;
    setYear(date: Moment, year: number): defaultMoment.Moment;
    mergeDateAndTime(date: Moment, time: Moment): defaultMoment.Moment;
    getWeekdays(): string[];
    isEqual(value: any, comparing: any): boolean;
    getWeekArray(date: Moment): defaultMoment.Moment[][];
    getYearRange(start: Moment, end: Moment): defaultMoment.Moment[];
    getCalendarHeaderText(date: Moment): string;
    getYearText(date: Moment): string;
    getDatePickerHeaderText(date: Moment): string;
    getDateTimePickerHeaderText(date: Moment): string;
    getMonthText(date: Moment): string;
    getDayText(date: Moment): string;
    getHourText(date: Moment, ampm: boolean): string;
    getMinuteText(date: Moment): string;
    getSecondText(date: Moment): string;
}
export {};
