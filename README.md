# Moneytree ESLint shared configuration

ESLint rules that cover both safety-related rules and code-style, as used by [Moneytree](https://www.getmoneytree.com/).

## How to setup

In your project, install this configuration:

```sh
npm install --save-dev @moneytree/eslint-config-nodejs
```

Create a configuration file for ESLint with at least the following line in it.

YAML:

```yaml
extends: "@moneytree/eslint-config-nodejs"
```

JSON:

```json
{
  "extends": "@moneytree/eslint-config-nodejs"
}
```

## Fine-tuning

If you find that your project needs slightly different rules, or if you introduce this configuration into an existing
project that may break too many rules, you can override the configuration. Especially in the latter case, we would
suggest leaving the rule in place, but turning it into a warning instead, so that you can gradually update your codebase
and in the future turn that rule into an error again.

All rules are defined as a number or an array of which the first value is a number. That special first number is the
level at which you want to apply the rule:

- 0: do not enforce rule
- 1: warning (only prints, does not make the lint check fail)
- 2: error (the lint check will fail)

To change a rule, simply rewrite the rule in your own configuration file, and adjust the level as you wish.

## License

MIT
