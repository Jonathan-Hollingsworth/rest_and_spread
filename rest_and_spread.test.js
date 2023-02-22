describe('Refactored filterOutOdds', () => {
    it('Should return the same values', () =>{
        expect(filterOutOdds(5,10,15,20)).toEqual(noOdds(5,10,15,20))
        expect(filterOutOdds(2,4,5,6,8)).toEqual(noOdds(2,4,5,6,8))
    })
})
describe('findMin', () => {
    it('Should return the lowest value', () => {
        expect(findMin(12,3,5.5,22)).toEqual(3)
        expect(findMin(12,99,5)).toEqual(5)
        expect(findMin(32,8,33,5.5,4,50)).toEqual(4)
    })
    it('Should return undefined', () => {
        expect(findMin()).toEqual(undefined)
    })
})
describe('mergeObjects', () => {
    it('Should return a combined object',() => {
        expect(mergeObjects({a:1, b:2},{c:3, d:4})).toEqual({a:1, b:2, c:3, d:4})
        expect(mergeObjects({empty:true},{useful:false})).toEqual({empty:true,useful:false})
    })
})
describe('doubleAndReturnArgs', () => {
    it('Should return an array and doubled numbers',() => {
        expect(doubleAndReturnArgs([1,2,3,4],5,15)).toEqual([1,2,3,4,10,30])
        expect(doubleAndReturnArgs([1,2],10,50)).toEqual([1,2,20,100])
    })
    it('Should only return an array', () => {
        expect(doubleAndReturnArgs([1,2,3,4,5])).toEqual([1,2,3,4,5])
        expect(doubleAndReturnArgs([2,4,6,8,10])).toEqual([2,4,6,8,10])
    })
})
describe('Arrow Functions', () => {
    describe('removeRandom', () => {
        it('Should reduce length by 1', () => {
            expect(removeRandom([2,true,null,'you',122])).toHaveSize(4)
            expect(removeRandom([2,true,null,'you',122,999,1200])).toHaveSize(6)
            expect(removeRandom([2,null,'you'])).toHaveSize(2)
        })
    })
    describe('extend', () => {
        it('Should contain all elements', () => {
            expect(extend([5,10],[15,20])).toEqual([5,10,15,20])
            expect(extend([5,true],['15',false])).toEqual([5,true,'15',false])
        })
    })
    describe('addKeyVal', () => {
        it('Should add a new key to an object', () => {
            expect(addKeyVal({Name: null}, 'score', 12)).toEqual({Name: null, score: 12})
            expect(addKeyVal({score: 14, home: undefined}, 'social', true)).toEqual({score: 14, home: undefined, social: true})
        })
    })
    describe('removeKey', () => {
        it('Should remove the key from the object', () => {
            expect(removeKey({Name: null, score: 12}, 'Name')).toEqual({score: 12})
            expect(removeKey({score: 14, home: undefined, social: true}, 'home')).toEqual({score: 14, social: true})
        })
    })
    describe('combine', () => {
        it('Should combine both objects together', () => {
            expect(combine({Name: null, score: 12},{home: undefined, social: true})).toEqual({Name: null, score: 12, home: undefined, social: true})
        })
    })
    describe('update', () => {
        it('Should update a currently existing key in an object', () => {
            expect(update({Name: null, score: 12, home: undefined, social: true}, 'score', 14)).toEqual({Name: null, score: 14, home: undefined, social: true})
            expect(update({score: 14, social: true}, 'social', false)).toEqual({score: 14, social: false})
        })
    })
})