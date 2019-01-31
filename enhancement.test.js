const enhancement = require('./enhancement.js');

describe('enhancement success', () => {
    test('enhancement level 0 displays nothing before name', () => {
        expect(enhancement.success({enhancement: 0, name: 'itemName'}).toEqual({enhancement: 1, name:'[+1]itemName'}));
    });
    test('maximum enhancement is level 20 (PEN)', () => {
        expect(enhancement.success({enhancement: 20})).toEqual({enhancement: 20});
    }); 
    test('success causes enhancement increase by 1', () => {
        expect(enhancement.success({enhancement: 1})).toEqual({enhancement: 2});
    }); 
    test('name updated to reflect new success level', () => {
        expect(enhancement.success({name: '[DUO]itemName', enhancement: 17})).toEqual({name: '[TRI]itemName', enhancement: 18});
    }); 
    test('enhancement display changes from numerals to PRI at enhancement level 16', () => {
        expect(enhancement.success({name: '[+15]itemName', enhancement: 15})).toEqual({name: '[PRI]itemName', enhancement: 16});
    }); 
});


describe('enhancement fail', () => {
    test('enhancing armor up to 5 cannot fail', () => {
        expect(enhancement.fail({type: 'armor', enhancement: 4})).toEqual({type: 'armor', enhancement: 6});
    });
    test('enhancing weapon up to 7 cannot fail', () => {
        expect(enhancement.fail({type: 'weapon', enhancement: 6})).toEqual({type: 'weapon', enhancement: 7});
    });
    test('durability cannot be less than 20 when the enhancement between 0 and 14', () => {
        expect(enhancement.fail({enhancement: 13, durability: 20})).toEqual({enhancement: 13, durability: 20});
    });
    test('durability cannot be less than 0 when the enhancement between 15 and 19', () => {
        expect(enhancement.fail({enhancement: 16, durability: 0})).toEqual({enhancement: 16, durability: 0});
    });
    test(' durability decreased by 5 if enhancement between 0 and 14', () => {
        expect(enhancement.fail({enhancement: 12, durability: 95})).toEqual({enhancement: 12, durability: 90});
    });
    test(' durability decreased by 10 if enhancement greater than 14', () => {
        expect(enhancement.fail({enhancement: 16, durability: 90})).toEqual({enhancement: 16, durability: 80});
    });
});

describe('item repair', () => {

});