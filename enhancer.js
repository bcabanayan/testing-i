// for reference

module.exports = {
    success: (item) => {
        if (item.enhancement === 0) {
            item.name = item.name;
            if (item.enhancement <= 19) {
                item.enhancement = item.enhancement + 1;
            }
        }
        return item;
    },

    fail: (item) => {

    },

    repair: (item) => {

    }
}