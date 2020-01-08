const maker = require('./index')
describe('maker', () => {
    const exampleInput = [
        {
            name: null,
            id: 2343242,
        },
        {
            name: 'Henry',
            id: undefined,
        },
        {
            name: 'Kathy',
            id: 312323,
        },
    ]
    const results = maker(exampleInput)

    results.forEach((result, index) => {
        test(`result ${index}: returns an array of objects with name and id properties`, () => {
            expect(result.name).toBeTruthy();
            expect(result.id).toBeTruthy();
        })
    })

    test('that objects in the array without a defined name or null should be given a default name of unknown', () => {
        expect(results[0].name).toBe('unknown');
    });

    test('should not contain users without ids', () => {
        const containsUser = results.some((result) => result.name === exampleInput[1].name)
        expect(containsUser).toBe(false);
    });
});
