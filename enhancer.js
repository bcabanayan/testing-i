// for reference

module.exports = {
    success: (item) => {
        if (item.enhancement <= 19) {
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
        return item;
    },

    fail: (item) => {

    },

    repair: (item) => {

    }
}