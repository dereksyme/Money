import getAllFrequenciesByFrequencyType from '../App/lib/frequency.js'


describe('Frequency', () => {
    
    const expectedFrequencies = {
        "weeklyAmount": 100,
        "biWeeklyAmount": 200,
        "monthlyAmount": 433.33,
        "quarterlyAmount": 1300,
        "annualAmount": 5200
    }

    it('should return frequencies based on $100 weekly', () => {
        const weeklyFrequency = getAllFrequenciesByFrequencyType('weekly', 100)
        expect(weeklyFrequency).toEqual(expectedFrequencies)
    })

    it('should return frequencies based on $200 biweekly', () => {
        const weeklyFrequency = getAllFrequenciesByFrequencyType('biweekly', 200)
        expect(weeklyFrequency).toEqual(expectedFrequencies)
    })

    it('should return frequencies based on $433.33 monthly', () => {
        const weeklyFrequency = getAllFrequenciesByFrequencyType('monthly', 433.333333)
        expect(weeklyFrequency).toEqual(expectedFrequencies)
    })
})