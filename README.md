# amenities-module

> Project description

## Related Projects

  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

1. (see ### Database Setup below for instructions on installing mysql and creating a user)
  - 

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development (**all incomplete**)

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

### Database Setup
1. Install mysql5.7, if not already installed. Two commons options are Native Packages and Brew:
  a. Native Packages - https://dev.mysql.com/doc/refman/5.7/en/osx-installation-pkg.html
  b. Brew - 

2. Ensure that MySQL Server is running on your computer (`mysql.server start`)

3. Create the database and tables by running the **xyz** script to load the `schema.sql` file.
  - *NOTE* You may also need to modify the `user`, `root`, and `password` properties inside `database-mysql/config.js`.

4. Test that table rows exist in the b4b_amenities database and amenities table by running in the mysql shell: 
`USE b4b_amenities`; 
`SELECT * FROM amenities`;  


### Bundle with Webpack


### start a server with nodemon