import { defineConfig } from "eslint/config";
import typescript from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";

export default defineConfig([
    {
        files: ['src/*.ts'],
        languageOptions: {
            parser: typescriptParser,
            parserOptions: {
                project: './tsconfig.json'
            }
        },
        plugins: {
            '@typescript-eslint': typescript
        },
        rules: {
            quotes: ["error", "double", { avoidEscape: true }],
            semi: "error",
            "array-callback-return": ["error"],
            "space-before-function-paren": ["error", {
                anonymous: "always",
                named: "never",
                asyncArrow: "always"
            }],
            "prefer-const": "error",
            "no-duplicate-imports": ["error"],
            "no-irregular-whitespace": "off",

            "object-curly-spacing": ["error", "always"],
            "key-spacing": ["error", {
                beforeColon: false,
                afterColon: true
            }],

            "keyword-spacing": ["error", {
                before: true,
                after: true
            }],

            "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
            "@typescript-eslint/explicit-function-return-type": "off",
            "@typescript-eslint/no-explicit-any": "warn",
            "@typescript-eslint/consistent-type-imports": "error"
        },
    },
    {
        ignores: ['dist/**', 'node_modules/**']
    }
]);
