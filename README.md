# Skylight

##### Cross Promotional Zone for Bodybuilding.com Product Pages

<br />
![Skylight Example Screenshot](/imgs/skylightScreen.png)
<br />

## Features

* Choose where to insert Skylight instance
* Choose what the header reads from a list of headers below (or make your own)
* Choose the number of cells to show
* Choose which URLs to pull information from

<br />

## Usage
**1. Add script tags at bottom of product block and initialize zone**

```javascript
<script type="text/javascript" src="https://www.bodybuilding.com/scripts/skylight.min.js"/>
<script>
    var crossMerch = new Skylight({
        products: [
            "/store/opt/cas.html",
            "/store/opt/oatsandwhey.html",
            "/store/opt/whey.html"
        ],
        skyZone: 1
    });
</script>
```
<br />

## Options


### Initialization Options

Options | Default | Description
------------ | ------------- | -------------
sibling: | "#vendor-content" | Name of container to append Skylight in.
beforeSibling: | false | Should Skylight put widget directly before its target sibling?
afterSibling: | true | Should Skylight put widget directly after its target sibling?
headerOverride: | "You May Prefer This" | What should the header of Skylight say?
numOfCells: | 3 | How many cells should show in zone?
products: | products: [<br>&nbsp;&nbsp;&nbsp;&nbsp;"/store/opt/whey.html",<br />&nbsp;&nbsp;&nbsp;&nbsp;"/store/opt/natwhey.html",<br />&nbsp;&nbsp;&nbsp;&nbsp;"/store/opt/cas.html"<br />] | What Products should show in zone?
skyZone: | 1 | Header Zones. Which header should display for this widget?
skyZoneHeaders: | skyZoneHeaders: [<br>&nbsp;&nbsp;&nbsp;&nbsp;"You May Prefer This",<br />&nbsp;&nbsp;&nbsp;&nbsp;"Bought With",<br />&nbsp;&nbsp;&nbsp;&nbsp;"empty",<br />&nbsp;&nbsp;&nbsp;&nbsp;"empty",<br>&nbsp;&nbsp;&nbsp;&nbsp;"empty"</br>] | Set number of 'zone' the widget lives in, this will give it's header.


### Current Headers

1. "You May Prefer This",
2. "Bought With",
3. "empty",
4. "empty",
5. "empty"

