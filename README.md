
jl-tether (formerly ng-tether)
=========

[Tether](http://tether.io) wrapper for Angular, so you can use it in directives declaratively. **Tether is included**

Not to be mistaken for a very cool project called [`angular-tether`](https://github.com/nissoh/angular-tether) that is in the process of implementing Tether in angular.

# Install

`bower install jl-tether` or `npm install jl-tether`

# Usage

Include `jlTether` as an angular module dependency, then

```html
<div jl-tether jl-tether-options="{
    target: '.target',
    attachment: 'top left',
    targetAttachment: 'top right'
}"></div>
```

or

```html
<div jl-tether 
 jl-tether-target=".target" 
 jl-tether-attachment="top left"
 jl-tether-target-attachment="top right"></div>
```

You can grab a reference to the Tether object if you want by passing a string into `jl-tether`. 

```html
<div jl-tether="ngTetherReference" 
 jl-tether-target=".target" 
 jl-tether-attachment="top left"
 jl-tether-target-attachment="top right"></div>
```

`ngTetherReference` will now be in `$scope`. You can do things like

```html
<div ng-click="ngTetherReference.destroy()">kind of a button</div>
```

To destroy it. 

You can see the [Tether docs](http://tether.io) for a full list of options and api functions. 


# Building

`npm run deps` to get the dependencies  
`npm run dist` to build  
`npm run watch` to continuously build   

