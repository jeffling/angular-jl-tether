ng-tether
=========

Tether wrapper for Angular, so you can use it in directives declaratively. **Tether is included**
Not to be mistaken for a very cool project called [`angular-tether`](https://github.com/nissoh/angular-tether) that is in the process of Tether in angular.

# Usage

```html
<div ng-tether ng-tether-options="{
    target: '.target',
    attachment: 'top left',
    targetAttachment: 'top right'
}" class="element"></div>
```

or

```html
<div ng-tether ng-tether-target=".target" ng-tether-attachment="top left"
 ng-tether-target-attachment="top right" class="element"></div>
```

# Building

`npm run deps` to get the dependencies
`npm run dist` to build
`npm run watch` to continuously build

I've never been to the Empire State building
