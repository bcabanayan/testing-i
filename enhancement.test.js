const enhancement = require('./enhancement.js');

describe('enhancement success', () => {
    test('enhancement level increases by 1', () => {
        expect(enhancement.success({enhancement: 1})).toEqual({enhancement: 2});
    }); 
    test('name updated to reflect new success level', () => {
        expect(enhancement.success({name: '[DUO]itemName', enhancement: 17})).toEqual({name: '[TRI]itemName', enhancement: 18});
    }); 
    test('maximum enhancement is level 20 (PEN)', () => {
        expect(enhancement.success({enhancement: 20})).toEqual({enhancement: 20});
    }); 
    test('enhancement display changes from numerals to PRI at enhancement level 16', () => {
        expect(enhancement.success({name: '[+15]itemName', enhancement: 15})).toEqual({name: '[PRI]itemName', enhancement: 16});
    }); 
});


describe('enhancement failure', () => {

});

describe('item repair', () => {

});