# vuejs-course
VueJS Course

## [Section 1](/section_1/index.html)

Course introduction: event bindings and interpolation

## [Section 2](/section_2/index.html)

Overview of the four main Vue app elements:
```
- data
- methods
- computed
- watch
```
as well as some of the HTML Vue directives: 
```
- v-on (shorthand is '@')
- v-bind (shorthand is ':')
- v-model
- v-once
```
as well as going over some of the underlying elements of reactivity within the Vue framework. This expands into a self-contained, reactive application for both content and styling. This section contains 4 assignments:
```
- 1: Interpolation and Methods
- 2: Event bindings and modifiers
- 3: Reactivity
- 4: Dynamic Stylings
```

## [Section 3](/section_3/index.html)

A short section covering `v-if, v-else` Vue directives to enable conditional, reactive and dynamically styled applications

## [Section 4](/section_4/index.html)

The first major application: Monster Slayer. The specification are two health bars, four buttons: 'attack, special, heal, surrender', and a battle log. Upon depletion of a healthbar, a trigger state will display either 'Victory or Defeat'

## Section 5

How Vue works and JS comparisons, covering Vue Templates and Refs. Further information on the Vue lifecyle and where one can run code when needed:
```
- createApp
- beforeCreate(): Initalises the Vue App
- created(): This step compiles the template
- beforeMount(): Initalised and constructed virtual DOM ready to mount
- mounted(): This mounts the instance in the browser

-- data changes
--- beforeUpdate(): Processes any updates to data 
--- updated(): Passes the updated information through to the DOM

-- Instance Unmounted
--- beforeUnmount(): Triggers logic before unmounting the Vue App
--- unmounted(): Runs logic on a successful unmount condition
```

## [Section 6] (/section_6/index.html)

Components to compartmentalise interactivity to HTML templates with data and logic, that can be encapsulated and reused. All the logic within remains standalone within that component, useful for list item interactivity for example.

## Section 7

Introduction to the Vue CLI, moving from single page applications to the multiple page application environment through the CLI and development servers. Vue CLI requires NodeJS/npm

## Section 8

Learning how Vue handles props and data pass through. Props can not be changed within the component and returned, changes are local. A props can be converted into a component data property, this is not advised. Use of the `$emit` functionality to bind a parent function into the child application to allow upwards data propogration

## Section 9

More on components, global v local registration and scoping styles to local components. Local registration is the prefered way forward, unless it's a heavily reused component. Introduction to slots, components that apply special cases to the DOM `Teleport, KeepAlive`, the Vue Style guide and folder structure considerations.

### Dependancies

NodeJS - v16.0.0
@vue/cli - 4.5.12

