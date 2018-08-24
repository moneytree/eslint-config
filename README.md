# Moneytree ESLint shared configuration

ESLint configuration that covers both safety and code-style [rules](https://eslint.org/docs/rules/), as used by
[Moneytree](https://www.getmoneytree.com/).

## How to setup

In your project, install this configuration:

```sh
npm install --save-dev @moneytree/eslint-config
```

Choose a configuration to use in your project (or a folder somewhere inside your project). Available options:

- [`nodejs`](./eslintrc/nodejs.yml): Recommended base Node.js configuration.
- [`nodejs-bin`](./eslintrc/nodejs-bin.yml): Extends `nodejs` to specialize for Node.js CLI scripts.
- [`nodejs-test`](./eslintrc/nodejs-test.yml): Extends `nodejs` to specialize for Node.js unit test scripts.

Now refer to that configuration in your own ESLint configuration file, by extending from it:

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

> Replace "nodejs" by the configuration of your choice.

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

## Plugins

Depending on additional libraries you use, like testing frameworks, there may be some very interesting ESLint plugins
for your project that you may want to add to your configuration. Check them out over at
[Awesome ESLint](https://github.com/dustinspecker/awesome-eslint#plugins).

## Supported ESLint version

We attempt to keep the rules compatible and complete with regards to the latest version of ESLint. Sometimes we will
inevitably fall behind a little. If you want to know which versions of ESLint we cover, please refer to the version of
the ESLint peer-dependency in [package.json](./package.json).

## Contributing

### Versioning

We try to be [semver](https://semver.org/)-ish in how we version this project. To create a version-bump commit, simply
run `npm version patch`, `npm version minor` or `npm version major`.

*patch* should get bumped when:

- New configuration file variations are introduced (like `nodejs-bin` in the example above).

*minor* should get bumped when:

- Rules are changed.
- Rules are added.
- The `eslint` peer-dependency's minimal version is raised (which is usually when rules are added).

*major* should get bumped when:

- A major version bump of ESLint occurs that has significant impact on the users of this configuration.
- A massive overhaul of the project happens, implying changes to installation and/or integration.
- New peer-dependencies are required.

## License

MIT
