// for reference

module.exports = {
    success: (item) => {
        if (item.enhancement <= 19) {
            if ((item.enhancement <= 14 && item.durability >= 25) || (item.enhancement > 14 && item.durability >= 10)) {
                item.enhancement = item.enhancement + 1;
                if (item.enhancement >= 1 && item.enhancement <= 15) {
                    let namePrefix = '[+' + item.enhancement.toString() + ']';
                    item.namePrefix = namePrefix;
                    item.name = namePrefix + item.baseName;
                }
                else if (item.enhancement === 16) {
                    let namePrefix = '[PRI]';
                    item.namePrefix = namePrefix;
                    item.name = namePrefix + item.baseName;
                }
                else if (item.enhancement === 17) {
                    let namePrefix = '[DUO]';
                    item.namePrefix = namePrefix;
                    item.name = namePrefix + item.baseName;
                }
                else if (item.enhancement === 18) {
                    let namePrefix = '[TRI]';
                    item.namePrefix = namePrefix;
                    item.name = namePrefix + item.baseName;
                }
                else if (item.enhancement === 19) {
                    let namePrefix = '[TET]';
                    item.namePrefix = namePrefix;
                    item.name = namePrefix + item.baseName;
                }
            }
            else if (item.enhancement === 20) {
                let namePrefix = '[PEN]';
                item.namePrefix = namePrefix;
                item.name = namePrefix + item.baseName;
            }
            }
        return item;
    },

    fail: (item) => {
        if ((item.enhancement <= 5 && item.type === 'armor') || (item.enhancement <= 7 && item.type === 'weapon')) {
            item.enhancement = item.enhancement + 1;
            return item;
        }
        else if (item.durability <= 20 && item.enhancement <= 14) {
            return item;
        }
        else if (item.durability <= 0 && (item.enhancement >= 15 && item.enhancement <= 19)) {
            return item;
        }
        else if (item.enhancement <= 14) {
            item.durability = item.durability - 5;
        }
        else if (item.enhancement > 14) {
            item.durability = item.durability - 10;
            if (item.enhancement > 16) {
                item.enhancement = item.enhancement - 1; 
            }
        }
        return item;
    },

    repair: (item) => {
        item.durability = 100;
        return item;
    }
}