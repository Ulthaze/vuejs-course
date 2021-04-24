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

## Section 6

Components to compartmentalise interactivity to HTML templates with data and logic, that can be encapsulated and reused. All the logic within remains standalone within that component, useful for list item interactivity for example.
