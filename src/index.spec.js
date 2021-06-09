import { fortawesomeFreeRegularShortcode } from './index';

describe("test 'fortawesomeFreeRegularShortcode()'", () => {
    it('should be a defined function', () => {
        expect(fortawesomeFreeRegularShortcode).not.toBeUndefined();
        expect(fortawesomeFreeRegularShortcode).toBeType('function');
    });

    it('should return a defined string', () => {
        const result = fortawesomeFreeRegularShortcode('bell', 'social-icon');
        expect(result).not.toBeUndefined();
        expect(result).toBeType('string');
        expect(result.length).not.toBe(0);
    });
});
