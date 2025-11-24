import { defineConfig } from "eslint/config";

export default defineConfig([
    {
        rules: {
            semi: "error",
            "array-callback-return": ["error"],
            "space-before-function-paren": ["error", "never"],
            "prefer-const": "error",
            "no-duplicate-imports": ["error"],
            "no-irregular-whitespace": "off",
            "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
        },
    },
]);
