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

let l = console.log

const getAnnuallyByWeekly = weeklyAmount => weeklyAmount * WEEKS_IN_YEAR
const getAnnuallyByBiWeekly = biWeeklyAmount => biWeeklyAmount * BIWEEKLY_PERIODS_IN_YEAR
const getAnnuallyByMonthly = monthlyAmount => monthlyAmount * MONTHS_IN_YEAR
const getAnnuallyByQuarterly = quarterlyAmount => quarterlyAmount * QUARTERS_IN_YEAR

const getQuarterlyByWeekly = weeklyAmount => weeklyAmount * WEEKS_IN_QUARTER
const getQuarterlyByBiWeekly = biWeeklyAmount => biWeeklyAmount * BIWEEKLY_PERIDS_IN_QUARTER
const getQuarterlyByMonthly = monthlyAmount => monthlyAmount * MONTH_IN_QUARTER
const getQuarterlyByAnnually = annualAmount => annualAmount / QUARTERS_IN_YEAR

const getMonthlyByWeekly = weeklyAmount => weeklyAmount * WEEKS_IN_MONTH
const getMonthlyByBiWeekly = biWeeklyAmount => biWeeklyAmount * BIWEEKLY_PERIDS_IN_MONTH 
const getMonthlyByQuarterly = quarterlyAmount =>  quarterlyAmount / MONTHS_IN_QUARTER
const getMonthlyByAnnually = annualAmount =>  annualAmount / MONTHS_IN_YEAR

const getBiWeeklyByWeekly = biWeeklyAmount => biWeeklyAmount * WEEKS_IN_BIWEEKLY_PERIOD
const getBiWeeklyByMonthly = monthlyAmount => monthlyAmount / BIWEEKLY_PERIDS_IN_MONTH
const getBiWeeklyByQuarterly = quarterlyAmount => quarterlyAmount / BIWEEKLY_PERIDS_IN_QUARTER
const getBiWeeklyByAnnually = annualAmount => annualAmount / BIWEEKLY_PERIODS_IN_YEAR

const getWeeklyByBiWeekly = biWeeklyAmount => biWeeklyAmount / WEEKS_IN_BIWEEKLY_PERIOD
const getWeeklyByMonthly = monthlyAmount => monthlyAmount / WEEKS_IN_MONTH
const getWeeklyByQuarterly = quarterlyAmount => quarterlyAmount / WEEKS_IN_QUARTER
const getWeeklyByAnnually = annualAmount => annualAmount / WEEKS_IN_YEAR

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

export default getAllFrequenciesByFrequencyType = (frequencyType, amount) => {
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

l(getAllFrequenciesByFrequencyType('annually', 100))
//User unit testing to prove
