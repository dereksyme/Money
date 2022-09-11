
import roundTo2Decimals from './roundTo2Decimals.js'
import {
    WEEKS_IN_BIWEEKLY_PERIOD,
    WEEKS_IN_MONTH,
    WEEKS_IN_QUARTER,
    WEEKS_IN_YEAR,
    BIWEEKLY_PERIDS_IN_MONTH,
    BIWEEKLY_PERIDS_IN_QUARTER,
    BIWEEKLY_PERIODS_IN_YEAR,
    MONTHS_IN_QUARTER,
    MONTHS_IN_YEAR,
    QUARTERS_IN_YEAR
} from './calendarConversions.js'

//const roundTo2Decimals = num => Math.round(num * 100) / 100 //https://stackoverflow.com/questions/11832914/how-to-round-to-at-most-2-decimal-places-if-necessary
 
let l = console.log

const getAnnuallyByWeekly = weeklyAmount => roundTo2Decimals(weeklyAmount * WEEKS_IN_YEAR)
const getAnnuallyByBiWeekly = biWeeklyAmount => roundTo2Decimals(biWeeklyAmount * BIWEEKLY_PERIODS_IN_YEAR)
const getAnnuallyByMonthly = monthlyAmount => roundTo2Decimals(monthlyAmount * MONTHS_IN_YEAR)
const getAnnuallyByQuarterly = quarterlyAmount => roundTo2Decimals(quarterlyAmount * QUARTERS_IN_YEAR)

const getQuarterlyByWeekly = weeklyAmount => roundTo2Decimals(weeklyAmount * WEEKS_IN_QUARTER)
const getQuarterlyByBiWeekly = biWeeklyAmount => roundTo2Decimals(biWeeklyAmount * BIWEEKLY_PERIDS_IN_QUARTER)
const getQuarterlyByMonthly = monthlyAmount => roundTo2Decimals(monthlyAmount * MONTHS_IN_QUARTER)
const getQuarterlyByAnnually = annualAmount => roundTo2Decimals(annualAmount / QUARTERS_IN_YEAR)

const getMonthlyByWeekly = weeklyAmount => roundTo2Decimals(weeklyAmount * WEEKS_IN_MONTH)
const getMonthlyByBiWeekly = biWeeklyAmount => roundTo2Decimals(biWeeklyAmount * BIWEEKLY_PERIDS_IN_MONTH)
const getMonthlyByQuarterly = quarterlyAmount =>  roundTo2Decimals(quarterlyAmount / MONTHS_IN_QUARTER)
const getMonthlyByAnnually = annualAmount =>  roundTo2Decimals(annualAmount / MONTHS_IN_YEAR)

const getBiWeeklyByWeekly = biWeeklyAmount => roundTo2Decimals(biWeeklyAmount * WEEKS_IN_BIWEEKLY_PERIOD)
const getBiWeeklyByMonthly = monthlyAmount => roundTo2Decimals(monthlyAmount / BIWEEKLY_PERIDS_IN_MONTH)
const getBiWeeklyByQuarterly = quarterlyAmount => roundTo2Decimals(quarterlyAmount / BIWEEKLY_PERIDS_IN_QUARTER)
const getBiWeeklyByAnnually = annualAmount => roundTo2Decimals(annualAmount / BIWEEKLY_PERIODS_IN_YEAR)

const getWeeklyByBiWeekly = biWeeklyAmount => roundTo2Decimals(biWeeklyAmount / WEEKS_IN_BIWEEKLY_PERIOD)
const getWeeklyByMonthly = monthlyAmount => roundTo2Decimals(monthlyAmount / WEEKS_IN_MONTH)
const getWeeklyByQuarterly = quarterlyAmount => roundTo2Decimals(quarterlyAmount / WEEKS_IN_QUARTER)
const getWeeklyByAnnually = annualAmount => roundTo2Decimals(annualAmount / WEEKS_IN_YEAR)

const getAllFrequenciesByWeeklyAmount = amount => {
    return {
        weeklyAmount: amount,
        biWeeklyAmount: getBiWeeklyByWeekly(amount),
        monthlyAmount: getMonthlyByWeekly(amount),
        quarterlyAmount: getQuarterlyByWeekly(amount),
        annualAmount: getAnnuallyByWeekly(amount),
    }
}

const getAllFrequenciesByBiWeeklyAmount = amount => {
    return {
        weeklyAmount: getWeeklyByBiWeekly(amount),
        biWeeklyAmount: amount,
        monthlyAmount: getMonthlyByBiWeekly(amount),
        quarterlyAmount: getQuarterlyByBiWeekly(amount),
        annualAmount: getAnnuallyByBiWeekly(amount),
    }
}

const getAllFrequenciesByMonthlyAmount = amount => {
    return {
        weeklyAmount: getWeeklyByMonthly(amount),
        biWeeklyAmount: getBiWeeklyByMonthly(amount),
        monthlyAmount: amount,
        quarterlyAmount: getQuarterlyByMonthly(amount),
        annualAmount: getAnnuallyByMonthly(amount),
    }
}

const getAllFrequenciesByQuarterlyAmount = amount => {
    return {
        weeklyAmount: getWeeklyByQuarterly(amount),
        biWeeklyAmount: getBiWeeklyByQuarterly(amount),
        monthlyAmount: getMonthlyByQuarterly(amount),
        quarterlyAmount: amount,
        annualAmount: getAnnuallyByQuarterly(amount),
    }
}

const getAllFrequenciesByAnnualAmount = amount => {
    return {
        weeklyAmount: getWeeklyByAnnually(amount),
        biWeeklyAmount: getBiWeeklyByAnnually(amount),
        monthlyAmount: getMonthlyByAnnually(amount),
        quarterlyAmount: getQuarterlyByAnnually(amount),
        annualAmount: amount,
    }
}

const getAllFrequenciesByFrequencyType = (frequencyType, amount) => {
    amount = parseFloat(amount)
    switch (frequencyType) {
        case 'weekly':
            return getAllFrequenciesByWeeklyAmount(amount)
        case 'biweekly':
            return getAllFrequenciesByBiWeeklyAmount(amount)
        case 'monthly':
            return getAllFrequenciesByMonthlyAmount(amount)
        case 'quarterly':
            return getAllFrequenciesByQuarterlyAmount(amount)
            break;
        case 'annually':
            return getAllFrequenciesByAnnualAmount(amount)
        default:
            return { err: 'invalid frequency type'}
    }
}

export default getAllFrequenciesByFrequencyType
