const enhancement = require('./enhancement.js');

describe('enhancement success', () => {
    test('enhancement level increases by 1', () => {
        expect(enhancement.success({enhancement: 1})).toEqual({enhancement: 2});
    }); 
    test('name updated to reflect new success level', () => {
        expect(enhancement.success({name: '[DUO]itemName'})).toEqual({name: '[TRI]itemName'});
    }); 
});

describe('enhancement failure', () => {

});

describe('item repair', () => {

});