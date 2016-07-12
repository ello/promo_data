# Promotion metadata for the webapp

The data files live in `data/*.json`.

To change the data, simply edit the `.json` files, and run the tests for
validation.

## Setup

Running the tests locally isn't strictly required, but may be useful for rapid feedback:

### Prerequisites
To run the validation tests, a working Node 4.3+ installation is required.

### To install packages

In the `promo_data` folder, run 

```sh
$ npm install
```

### To run the tests

```sh
$ npm test
```


Then you're good!

## Effecting the changes

- Open a new Pull Request containing the changes to the `.json` files
- Wait for tests to pass on Circle (the pull request will acquire a green check mark)
- After the PR is reviewed, merge to master
- The data will be automatically deployed to staging (ello.ninja) after this point
- once approved, use the /promo slack command in the support-bot channel and they will be promoted to production
