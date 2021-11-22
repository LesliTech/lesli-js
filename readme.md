<p align="center">
	<a href="https://www.lesli.tech" target="_blank">
		<img width="175" alt="LesliTech logo" src="./docs/lesli-js-logo.svg" />
	</a>
</p>

<h3 align="center">JavaScript utilities for JavaScript applications</h3>

<hr/>

Version 0.2.0  


#### Structure
--------
```text
lesli-js  
└── src/  
     ├── debug/  
     │    ├── browser.js  
     │    ├── nodejs.js  
     │    ├── utils.js  
     │    └── index.js  
     └── colors/  
          ├── palette.js  
          ├── graphs.js  
          └── index.js  

```


#### Installation
--------
```console
npm install lesli-js --save
```


#### Usage
--------
```js

// instance the Lesli JS tools
var leslijs = require("lesli-js")

// print pretty yet useful debug messages
leslijs.debug.msg("Hello, test debug message")
leslijs.debug.info("Message with 'info' style")
leslijs.debug.hr() // just a separator line

// make Lesli debug messages globally in your app
window.debug = leslijs.debug

//--

// get standard colors based on the Lesli color palette
leslijs.colors.blue()

// get color with a specific variant
leslijs.colors.blue(500)

// get color directly from the palette
leslijs.colors.pallete.blue['500']

// work with the entire color palette as JSON
leslijs.colors.pallete

```


### License  
------
Software developed in [Guatemala](http://visitguatemala.com/) distributed under the *General Public License v 3.0* you can read the full license [here](http://www.gnu.org/licenses/gpl-3.0.html)

<p align="center">
	<a href="https://www.lesli.tech" target="_blank">
		<img alt="LesliTech logo" width="150" src="https://cdn.lesli.tech/leslitech/brand/leslitech-logo.svg" />
	</a>
</p>
