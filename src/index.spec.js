import { describe, it, expect, beforeEach, vi } from 'vitest';

import {
    fortawesomeFreeRegularShortcode,
    fortawesomeFreeRegularPlugin,
} from './index';

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

describe("test 'fortawesomeFreeRegularPlugin()'", () => {
    it('should be a defined function', () => {
        expect(fortawesomeFreeRegularPlugin).not.toBeUndefined();
        expect(fortawesomeFreeRegularPlugin).toBeType('function');
    });

    describe('test the plugin', () => {
        const mockAddShortcode = vi.fn();
        const eleventyConfig = {
            addShortcode: mockAddShortcode,
        };

        beforeEach(() => {
            mockAddShortcode.mockReset();
        });

        it("should call 'eleventyConfig.addShortcode()'", () => {
            fortawesomeFreeRegularPlugin(eleventyConfig);
            expect(mockAddShortcode).toBeCalledTimes(1);
        });

        it("should call 'eleventyConfig.addShortcode()' with the expected arguments", () => {
            fortawesomeFreeRegularPlugin(eleventyConfig);
            expect(mockAddShortcode).toBeCalledWith(
                'fortawesomeRegular',
                fortawesomeFreeRegularShortcode,
            );
        });
    });
});
