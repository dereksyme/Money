import createBill from '../App/lib/createExpense.js'

describe('Bills', () => {
    it('should create bill with id, amount, and frequency', () => {
        const bill = createBill('testBill', 102.00, 'biweekly')
        expect(bill).toEqual({
            id: 'testBill',
            amount: 102,
            frequency: 'biweekly'
        })
    })
})