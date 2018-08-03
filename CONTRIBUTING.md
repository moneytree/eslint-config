# Contributing to this project

## How to Contribute in Issues

For any issue, there are fundamentally three ways an individual can contribute:

- By opening the issue for discussion: For instance, if you believe that you have uncovered a bug, creating a new issue in the issue tracker is the way to report it.
- By helping to triage the issue: This can be done either by providing supporting details (a test case that demonstrates a bug), or providing suggestions on how to address the issue.
- By helping to resolve the issue: Typically this is done either in the form of demonstrating that the issue reported is not a problem after all, or more often, by opening a Pull Request that fixes the problem.

## How to Contribute to the code base through a Pull Request

You can contribute to the code base in many ways:

- Write tests
- Write or improve documentation
- Fix bugs
- Add or improve a feature

When you fix a bug, or change a feature, we ask that you write unit tests to demonstrate the problem, and the solution.

These are the steps to follow in order to make a contribution to the code base:

1. Fork the GitHub project.
2. Clone your fork to your local development environment.
3. Create and checkout a new git branch.
4. Run “npm install” to set up the environment.
5. Make your change and if applicable, write tests.
6. Commit your changes.
7. Push your branch to GitHub.
8. On GitHub, make your pull request from your branch.

You will probably get feedback or requests for changes to your Pull Request. This is a big part of the submission process so don't be discouraged! Some contributors may sign off on the Pull Request right away, others may have more detailed comments or feedback. This is a necessary part of the process in order to evaluate whether the changes are correct and necessary.

### Adding configurations

To add a configuration `foo`, you need to add 2 files:

1. `foo.js` in the root folder of the project. Simply copy an existing .js file and change the YAML filename mentioned in it.
2. `eslintrc/foo.yml` containing all the configuration you want to expose.

### Developer's Certificate of Origin 1.1

By making a contribution to this project, I certify that:

(a) The contribution was created in whole or in part by me and I
    have the right to submit it under the open source license
    indicated in the file; or

(b) The contribution is based upon previous work that, to the best
    of my knowledge, is covered under an appropriate open source
    license and I have the right under that license to submit that
    work with modifications, whether created in whole or in part
    by me, under the same open source license (unless I am
    permitted to submit under a different license), as indicated
    in the file; or

(c) The contribution was provided directly to me by some other
    person who certified (a), (b) or (c) and I have not modified
    it.

(d) I understand and agree that this project and the contribution
    are public and that a record of the contribution (including all
    personal information I submit with it, including my sign-off) is
    maintained indefinitely and may be redistributed consistent with
    this project or the open source license(s) involved.
