function maker(initialArray) {
    return initialArray.reduce((acc, val) => {
        if (!val.id) return acc;
        if (!val.name) {
            val.name = 'unknown';
        }
        acc.push(val)
        return acc;
    }, []);
    // take an array of objects with an a name and ID
    // if an item is missing an ID filter
    // if missing name add 'unknown' as default
    return initialArray;
}

module.exports = maker;
