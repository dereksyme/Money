import getAllFrequenciesByFrequencyType from '../App/lib/frequency.js'
let l = console.log

describe('Frequency', () => {
    let expectedFrequencies
    beforeEach(() => {
        expectedFrequencies = {
            "weeklyAmount": 100,
            "biWeeklyAmount": 200,
            "monthlyAmount": 433.33,
            "quarterlyAmount": 1300,
            "annualAmount": 5200
        }
    })

    it('should return frequencies based on $100 weekly', () => {
        const weeklyFrequency = getAllFrequenciesByFrequencyType('weekly', 100)
        expect(weeklyFrequency).toEqual(expectedFrequencies)
    })

    it('should return frequencies based on $200 biweekly', () => {
        const weeklyFrequency = getAllFrequenciesByFrequencyType('biweekly', 200)
        expect(weeklyFrequency).toEqual(expectedFrequencies)
    })

    it('should return frequencies based on $433.33 monthly', () => {
        const frequencies = getAllFrequenciesByFrequencyType('monthly', 433.33)
        //rounding required to deal with rounding in constants in calendar conversions file
        frequencies.annualAmount = Math.ceil(frequencies.annualAmount)
        frequencies.quarterlyAmount = Math.ceil(frequencies.quarterlyAmount)
        expect(frequencies).toEqual(expectedFrequencies)
    })

    it('should return frequencies based on $1300 quarterly', () => {
        const weeklyFrequency = getAllFrequenciesByFrequencyType('quarterly', 1300)
        expect(weeklyFrequency).toEqual(expectedFrequencies)
    })

    it('should return frequencies based on $5200 annually', () => {
        const weeklyFrequency = getAllFrequenciesByFrequencyType('annually', 5200)
        l(weeklyFrequency)
        expect(weeklyFrequency).toEqual(expectedFrequencies)
    })
})