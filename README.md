# Click the Fox! Game
---
### Considerations

The App is prefetching the images in the initializing phase, I decided for this approach since it gives a better user experience for the user without any delay or loading images when the user is playing.\
The UI is composed by few steps:
- Initializing screen: loading for fetching and caching images 
- Welcome screen: the user enter/edit the name
- Game screen: the user plays
- Scorebard screen: the last 7 highest scores are showed, if the same player in the same day get the same score and this record was already present in the scoreboard, the new record will override the previous one, no duplication. If a user plays in different days and get the same score, they will be inserted in the table because they have different dates.

The results are stored in localstorage for persistence of data.

The app is fully covered by test using Jest and RTL.

One last thing, if in console and test you see this warning: `react-dom.development.js:86 Warning: Invalid ARIA attribute ariaHidden. Did you mean aria-hidden?`, it is due to a problem with particular set of `react-icons`, there is a pull request opened to fix this warning https://github.com/react-icons/react-icons/pull/630.

## Available Scripts
node version: `>=18.0.0`

In the project directory, you can run:

### `npm install` or `yarn`
Install all the dependencies

### `npm start` or `yarn start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.

### `npm test` or `yarn test`
Launches the test runner in the interactive watch mode.

### `npm run build` or `yarn build`
Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

---

#### If you feel the need to extend the webpack config you can use this command.

### `npm run eject` or `yarn eject`
**Note: this is a one-way operation. Once you `eject`, you can’t go back!**
