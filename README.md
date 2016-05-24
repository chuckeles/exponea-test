# Exponea Dashboard

The job interview task to build a dashboard.

I was given a mock of a dashboard. My task was to try to implement it using technologies
I know. The point was to show myself.

## Directory Structure

`bower_components` and `node_modules` are self-explanatory. `build` contains CSS and JS assets
built by Gulp. `directives` has HTML templates for the directives. `js` is source for JS. `partials`
contains route templates. And finally, `sass` has SASS source files.

## Up and Running

First install dependencies.

```
npm install -g bower gulp
npm install
bower install
```

Gulp is the manager here. Just run `gulp` to run the server and visit `localhost:3000`.
See the `gulpfile.js` for all Gulp tasks and their explanations.
