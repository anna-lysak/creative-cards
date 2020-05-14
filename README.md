# Creative-Cards application

> Creative-cards app - project created in frames of learning Vue.js, Firebase used for storing images
>
> Currently project is deployed to AWS S3: http://creative-cards.s3-website.eu-central-1.amazonaws.com/
## Installation instructions
- Install node.js (if you don't have any). For this,

Install Node Version Manager (nvm):
``` bash
$curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
```
Install latest stable Node version (at this moment it is 12.16.2):
```bash
$nvm install 12.16.2
```
Check node and npm installation by:
``` bash
$node -v
$npm -v
```
it should print out node and npm versions.

- Install vue-cli globally:
``` bash
$npm install -g @vue/cli

```
- Change directory to your project directory:
``` bash
$cd creative-cards/ui
```
- Create vue project (Omit this):
``` bash
$vue init webpack-simple ui
```
- Install all dependencies required for this project:
``` bash
$npm install
```
- Create firebase DataBase for this project here: https://firebase.google.com/ and follow the instructions (choose Web Page option).
Create .env file and save your firebase settings to it (use keys names from .env.sample).

- Now you should be able to run development server:
``` bash
$npm run dev
```
- Build for production with minification:
``` bash
$npm run build
```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
