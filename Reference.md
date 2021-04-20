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

`v-if="logic"`
    Renders the HTML element if based on the logic return via either data property or methods. Must be true or false

`v-else`
    Must come after a v-if statement, and will function as the typical JS if, else if, else logic 


## JS Ref

`Vue.createApp({})`
    Creation of the Vue Application, requires mounting onto a target location

`.mount('#location')`
    Calls the Vue application and mounts it on the target location via HTML id tag 

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