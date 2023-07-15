# TorShopping

### Tasks :

- Creating a simple dashboard and integrating those api based on those requirements.

  - Creating Login page where each user can login his email and password
  - Create a section department (CRUD Operation) create and edit and delete with
    the view department based on user role and permissions.
  - you need our collection api to above requirements:
    <br/>
    collection api : https://documenter.getpostman.com/view/26825367/2s946e9stn
    <br/>
    baseURL: https://tmaua.tornest.net:1337/
  - we have these users which each of one have a different permission and roles, you need allow only that actions can do which he has, and prevent that actions which he don't has permission
    ```
    User List :
    Manager Email : manager@tornet.co
    Editor Email : editor@tornet.co
    Viewer : viewer@tornet.co
    password for all emails : password
    ```

- convert Figma design to webApp
  please create a landing page based on this figma.
  https://www.figma.com/file/3UMtSt6Zdnm1UdaFYMMOk1/Shopping-Website-(Community)?type=design&node-id=2%3A221&mode=design&t=mvDECHgQcNYQ9MgL-1

#### Requirements :

- Using Vue js for creating dashboard and landing page.
- using (state management (Vuex or Pinia)) if needed.
- best practice coding and reusing code

## Project setup

```
# npm
npm install
```

### Compiles and hot-reloads for development

```
# npm
npm run dev

```

### Compiles and minifies for production

```

# npm
npm run build

```

### Lints and fixes files

```

# npm
npm run lint

```

### Customize configuration

See [Configuration Reference](https://vitejs.dev/config/).

## Engine Locking

We would like for all developers working on this project to use the same Node engine and package manager we are using.
To do that we create two new files:

- `.nvmrc` - Will tell other users of the project which version of Node is used
- `.npmrc` - Will tell other users of the project which package manager is used

We are using `Node v19.8.1 Hydrogen` and `npm` for this project so we set those values like so:

`.nvmrc`

```.nvmrc
lts/hydrogen
```

`.npmrc`

```
legacy-peer-deps=true
engine-strict=true
```

You can check your version of Node with `node --version` and make sure you are setting the correct one. A list of Node
version codenames can be found [here](https://github.com/nodejs/Release/blob/main/CODENAMES.md)

Note that the use of `engine-strict` didn't specifically say anything about `npm`, we do that in `package.json`:

`package.json`

```json
"name": "TorShopping",
"version": "0.0.0",
"private": true,
"engines": {
"node": ">=19.8.1",
"yarn": "kindly-use-npm",
"npm": ">=9.5.1"
},
```
