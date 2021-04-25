# Reference Sheet for Vue.js

## HTML Ref

`{{ value }}`
    A Vue data property in the Vue app. Any changes to the property will be reflected where this statement is placed

`{{ doThis() }}`
    Refers to a method outlined in the Vue methods block

`v-on:click="thing"` == `@click="thing"`
    Applies a click listener to the respective HTML element and will execute the 'thing'

`v-bind.value="thing"` == `:value="thing"`
    Binds a Vue object to the HTML element, any changes to the object will reactivity display in the application

`v-model="item"`
    Combination of `v-bind` and `v-on` that binds a Vue data property and watches for changes 

`v-for="item in items"`
    Iterates through a data array to provide interpolateable items. Default attributes for `item` are `key, value, index`

`v-if="logic"`
    Renders the HTML element if based on the logic return via either data property or methods. Must be true or false

`v-else`
    Must come after a v-if statement, and will function as the typical JS if, else if, else logic 

`ref="item"`
    Uses `item` to provide JS side references called by `this.$refs.item` to point to a specific DOM element

`<component-name></component-name>`
    Refers to the component created in the Vue application

`<component thing-name="">`
    Allows data to be transferred to component via props, HTML pass should be hypened, Vue props should be camel case. Requires `v-bind` to pass through non-string values.

## JS Ref

`Vue.createApp({})`
    Creation of the Vue Application, requires mounting onto a target location

`.mount('#location'), .unmount('#location')`
    Calls the Vue application and mounts it on the target location via HTML id tag, and unmounting

`###.component('itemID-component', {VueApp});`
    Creates a component on the create vue app, syntax is a multiwork identifier. Contains a the standard Vue data, methods & template properties

`data () { return {} },` 
    The Vue Data blocks, containing all the data properties to be used in the Vue App

`methods: {}`
    Contains all the functions to be called in the application

`computed: {}`
    Similar to methods however caches the values until their dependencies are altered

`watch: {}`
    Watches changes in data properties and executes logic upon those changes. Useful for reseting inputs, or contextual value pushes

`_array_.unshift(item)`
    Adds `item` to the start of the selected array

`template: `
    An object to pass through HTML templates to the DOM

`this.$refs._item_`
    Refers to a specifc DOM element with key `item` 

`beforeCreate(), created (), beforeMount(), mounted(), beforeUpdate(), updated(), beforeUnmount (), unmounted ()`
    Inserts code in that particular phase of the Vue lifecycle

`props:{}`
    Creates the props block of an application. If the data is a Javascript object of key value pairs, you can use v-bind="item" to pass through instead, Vue will automatically intepolate the pairs.

```
props:{
    item: {
        type: String,
        required: true,
        default: '0',
        validator: function(value){
            return logic
        }
    }
}
```

`this.$emit('name')`
    Emits the component that is called via name

`emits: { key: function()},`
    Part of the component constructors used to list the emitted items within the components. Can contain validation logic.

## CLI Commands

`vue create %name%`
    Creation of a project environment in a folder within the current folder. Default templates are enabled.

`npm run server`
    Runs the webserver and enables the CLI debugging tools

`npm run build`
    Builds the project and outputs the consolidates files