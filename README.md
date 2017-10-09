# react-component-boilerplate
A boilerplate setup to build a React component that can immediately be made into a module. See commands below to get set up.

## Set up with the following commands

`npm run build` - This will build the module and throw it into the root `build` folder

`npm  link` - Will create a symlink for the NPM package so other Node environments can access it

`npm link react-component-boilerplate` - This will tie the symlink to the project we're currently in so that we can use it in our test environemnt!

`npm run dev` - Runs a webpack dev server that'll host the component. You can also run `npm run watch` in an adjacent console and edit the component while the webpack dev server hot reloads from the changes you make to the source.

Once you're satisfied with your component find an available name on NPM and `npm publish` away.

### Enjoy!
