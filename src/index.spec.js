import { fortawesomeBrandsShortcode } from './index';

describe("test 'fortawesomeBrandsShortcode()'", () => {
    it('should be a defined function', () => {
        expect(fortawesomeBrandsShortcode).not.toBeUndefined();
        expect(fortawesomeBrandsShortcode).toBeType('function');
    });

    it('should return a defined string', () => {
        const result = fortawesomeBrandsShortcode('github', 'social-icon');
        expect(result).not.toBeUndefined();
        expect(result).toBeType('string');
    });
});
