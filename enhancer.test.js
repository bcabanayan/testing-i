const enhancer = require('./enhancer.js');

describe('enhancement success', () => {
    test('enhancement level 0 displays nothing before name', () => {
        expect(enhancer
            .success({
                durability: 50, 
                enhancement: 0, 
                name: 'itemName',
                baseName: 'itemName', 
                namePrefix: ''
            }))
            .toEqual({
                durability: 50, 
                enhancement: 1, 
                name:'[+1]itemName', 
                baseName: 'itemName', 
                namePrefix: '[+1]'
            });
    });
    test('maximum enhancement is level 20 (PEN)', () => {
        expect(enhancer
            .success({
                baseName: 'itemName', 
                namePrefix: '[PEN]', 
                name: '[PEN]itemName', 
                enhancement: 20}))
            .toEqual({
                baseName: 'itemName', 
                namePrefix: '[PEN]', 
                name: '[PEN]itemName', 
                enhancement: 20});
    }); 
    test('success causes enhancement increase by 1', () => {
        expect(enhancer
            .success({
                durability: 50, 
                name: '[+1]itemName', 
                enhancement: 1, 
                baseName: 'itemName', 
                namePrefix: '[+1]'}))
            .toEqual({
                durability: 50, 
                name: '[+2]itemName', 
                enhancement: 2, 
                baseName: 'itemName', 
                namePrefix: '[+2]'});
    }); 
    test('name updated to reflect new success level', () => {
        expect(enhancer
            .success({
                durability: 50, 
                namePrefix: '[DUO]', 
                baseName:'itemName',
                name: '[DUO]itemName', 
                enhancement: 17}))
            .toEqual({
                durability: 50, 
                namePrefix: '[TRI]', 
                baseName:'itemName', 
                name: '[TRI]itemName', 
                enhancement: 18});
    }); 
    test('enhancement display changes from numerals to PRI at enhancement level 16', () => {
        expect(enhancer
            .success({
                durability: 50, 
                namePrefix: '[+15]', 
                baseName:'itemName', 
                name: '[+15]itemName', 
                enhancement: 15}))
            .toEqual({
                durability: 50, 
                namePrefix: '[PRI]', 
                baseName:'itemName', 
                name: '[PRI]itemName', 
                enhancement: 16});
    }); 
    test('item at enhancement 14 or lower cannot be enhanced if durability below 25', () => {
        expect(enhancer
            .success({
                enhancement: 12, 
                durability: 20}))
            .toEqual({
                enhancement: 12, 
                durability: 20});
    }); 
    test('item at enhancement 15 or higher cannot be enhanced if durability below 10', () => {
        expect(enhancer
            .success({
                enhancement: 15, 
                durability: 9}))
            .toEqual({
                enhancement: 15, 
                durability: 9});
    }); 
});


describe('enhancement fail', () => {
    test('enhancing armor up to 5 cannot fail', () => {
        expect(enhancer
            .fail({
                type: 'armor', 
                enhancement: 4
            }))
            .toEqual({
                type: 'armor', 
                enhancement: 5
            });
    });
    test('enhancing weapon up to 7 cannot fail', () => {
        expect(enhancer
            .fail({
                type: 'weapon', 
                enhancement: 6
            }))
            .toEqual({
                type: 'weapon', 
                enhancement: 7
            });
    });
    test('durability cannot be less than 20 when the enhancement between 0 and 14', () => {
        expect(enhancer
            .fail({
                enhancement: 13, 
                durability: 20
            }))
            .toEqual({
                enhancement: 13, 
                durability: 20
            });
    });
    test('durability cannot be less than 0 when the enhancement between 15 and 19', () => {
        expect(enhancer
            .fail({
                enhancement: 16, 
                durability: 0
            }))
            .toEqual({
                enhancement: 16, 
                durability: 0
            });
    });
    test(' durability decreased by 5 if enhancement between 0 and 14', () => {
        expect(enhancer
            .fail({
                enhancement: 12, 
                durability: 95
            }))
            .toEqual({
                enhancement: 12, 
                durability: 90
            });
    });
    test(' durability decreased by 10 if enhancement greater than 14', () => {
        expect(enhancer
            .fail({
                enhancement: 16, 
                durability: 90
            }))
            .toEqual({
                enhancement: 16, 
                durability: 80
            });
    });
    test('enhancement decreased by 1 if enhancement greater than 16', () => {
        expect(enhancer
            .fail({
                enhancement: 17,
                durability: 90,
                name: '[DUO]itemName',
                baseName: 'itemName',
                namePrefix: '[DUO]'
            }))
            .toEqual({
                enhancement: 16,
                durability: 80,
                name: '[PRI]itemName',
                baseName: 'itemName',
                namePrefix: '[PRI]'
            });
    });
    test('name changes if enhancement decreases', () => {
        expect(enhancer
            .fail({
                enhancement: 18, 
                name: '[TRI]itemName',
                baseName: 'itemName',
                durability: 50,
                namePrefix: '[TRI]'
            }))
            .toEqual({
                enhancement: 17, 
                name: '[DUO]itemName',
                baseName: 'itemName',
                durability: 40,
                namePrefix: '[DUO]'
            });
    }); 
});

describe('item repair', () => {
    test('restores durability to 100', () => {
        expect(enhancer
            .repair({
                durability: 20
            }))
            .toEqual({
                durability: 100
            });
    }); 
});