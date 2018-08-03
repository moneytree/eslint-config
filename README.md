# Moneytree ESLint shared configuration

ESLint configuration that covers both safety and code-style [rules](https://eslint.org/docs/rules/), as used by
[Moneytree](https://www.getmoneytree.com/).

## How to setup

In your project, install this configuration:

```sh
npm install --save-dev @moneytree/eslint-config
```

Create a configuration file for ESLint with at least the following line in it.

YAML:

```yaml
extends: "@moneytree/eslint-config/nodejs"
```

JSON:

```json
{
  "extends": "@moneytree/eslint-config/nodejs"
}
```

## Fine-tuning

If you find that your project needs slightly different rules, or if you introduce this configuration into an existing
project that may break too many rules, you can override the configuration. Especially in the latter case, we would
suggest leaving the rule in place, but turning it into a warning instead, so that you can gradually update your code
base and in the future turn that rule into an error again.

All rules are defined as a number or an array of which the first value is a number. That special first number is the
level at which you want to apply the rule:

- 0: do not enforce rule
- 1: warning (only prints, does not make the lint check fail)
- 2: error (the lint check will fail)

To change a rule, simply rewrite the rule in your own configuration file, and adjust the level as you wish.

To see the original rules, please refer to YAML files in the [eslintrc](./eslintrc/) folder, that are named after the
configuration you extend (eg: `nodejs`).

## Plugins

Depending on additional libraries you use, like testing frameworks, there may be some very interesting ESLint plugins
for your project that you may want to add to your configuration. Check them out over at
[Awesome ESLint](https://github.com/dustinspecker/awesome-eslint#plugins).

## Supported ESLint version

We attempt to keep the rules compatible and complete with regards to the latest version of ESLint. Sometimes we will
inevitably fall behind a little. If you want to know which versions of ESLint we cover, please refer to the version of
the ESLint peer-dependency in [package.json](./package.json).

## License

MIT
