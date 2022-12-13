# psf-ssp-indexer

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com) [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

This is a blockchain indexer and REST API for logging BCH blockchain entries that follow the [PSF006 Simple Store Protocol](https://github.com/Permissionless-Software-Foundation/specifications/blob/master/ps006-simple-store-protocol.md). It is forked from the [psf-slp-indexer](https://github.com/Permissionless-Software-Foundation/psf-slp-indexer).

## Development Status

Current status: **Alpha**

This project is using conventional development milestones:
- Alpha = Under active development. Bugs are expected, things are expected to break.
- Beta = Some bugs still exist, but code is mature enough for careful roll-out into production.
- Production = Code has been heavily tested and code commits have slowed in frequency. App is ready for normal operators.

## Features

- Written in [standard JavaScript](https://www.npmjs.com/package/standard), using the [Clean Architecture](https://troutsblog.com/blog/clean-architecture) design pattern.
- 100% unit test coverage. This allows for operational reliability and easy code collaboration.
- [GPLv2](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html) Licensed to encourage wide adoption and free use throughout the BCH ecosystem.
- [LevelDB](https://github.com/google/leveldb) used for fast, efficient indexing and querying.
- Drastically reduced memory usage, compared to SLPDB.
- Fast indexing using transaction maps.
- Docker container for easy deployment and horizontal scaling.

## Requirements

- Ubuntu Linux OS v20.4+
- node **^14.17.0**
- npm **^7.13.0**

## Installation

Customize the [ssp-indexer.sh](./slp-indexer.sh) bash shell script to point to the a BCH full node with the standard JSON RPC. [docker-bchn](https://github.com/Permissionless-Software-Foundation/docker-bchn) is recommended.

```
git clone https://github.com/Permissionless-Software-Foundation/psf-ssp-indexer
cd psf-ssp-indexer
npm install
./ssp-indexer.sh
```

**See the [developer documentation](./dev-docs) for more information.**

## Usage

- `npm start` Start server on live mode
- `npm run docs` Generate API documentation
- `npm test` Run mocha tests
- `docker-compose build` Build a 'production' Docker container
- `docker-compose up` Run the docker container

## License

[GPLv2](./LICENSE.md)
