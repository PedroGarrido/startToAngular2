# Start with Typescript and Angular

This repository has the work of t
Este repositorio tiene como objectivo dar cabida al trabajo realizado durante los primeros días de formación.


### Which is neccesary to install?

#### Editor
We use as editor [**Atom**](https://atom.io/), adding plugins:
* [script](https://atom.io/packages/script)
* [atom-typescript](https://atom.io/packages/atom-typescript)

#### Npm
Make sure you have Node version >= 5.0 and NPM >= 3

Also, install the follow **npm** packages:
* [ts-node](https://www.npmjs.com/package/ts-node)
* [typescript](https://www.npmjs.com/package/typescript)

Add to environment variable PATH:
```
C:\Users\{own_user}\.npm-global\
```
by user "Run" of Windowsç
```
 rundll32 sysdm.cpl,EditEnvironmentVariables
 ```

#### Create yout first ts.config
Execute this command:
```
tsc --init
```
And include this line as first line of ts.config
```json
'compileOnSave':true
```

#### First example in typescript
For run this by Ctrl+Shift+b.
```javascript
let username: string = 'Anders';
console.log('Hi, world: ', username);
```
