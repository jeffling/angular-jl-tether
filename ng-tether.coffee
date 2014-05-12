###
  AngularJS wrapper for HubSpots's Tether
###

Tether = require 'tether'
prefix = 'ngTether'

ngTetherDire = () ->
  restrict: 'A'
  link: (scope, element, attrs) ->
    tetherOptions = {}

    # pluck out relevant keys from the attributes and remove prefix
    for own key, value of attrs
      if key isnt prefix and (key.indexOf prefix) isnt -1
        strippedKey = key.replace prefix, ''
        optionKey = strippedKey[0].toLowerCase() + strippedKey.slice 1
        tetherOptions[optionKey] = value

    # extract out 'tetherOptions' attribute and merge to top level
    if tetherOptions.options?
      evaledOptions = (scope.$eval tetherOptions.options) || {}
      delete tetherOptions.options
      for own key, value of evaledOptions
        tetherOptions[key] = value

    # the default element will be element[0]
    if not tetherOptions.element?
      tetherOptions.element = element[0]

    tetherHandle = new Tether tetherOptions

    tetherHandle.position() # initial reposition

    # hsTether attribute exists, fill it with the Tether object
    if attrs[prefix]?
      scope[attrs[prefix]] = tetherHandle

module.exports = angular.module 'ngTether', []
.directive prefix, ngTetherDire
