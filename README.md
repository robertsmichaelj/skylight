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
appendTo: | "#vendor-content" | Name of container to append Skylight in.
headerText: | "You May Prefer This" | What should the header of Skylight say?
numOfCells: | 3 | How many cells should show in zone?
products: | products: [<br>&nbsp;&nbsp;&nbsp;&nbsp;"/store/opt/whey.html",<br />&nbsp;&nbsp;&nbsp;&nbsp;"/store/opt/natwhey.html",<br />&nbsp;&nbsp;&nbsp;&nbsp;"/store/opt/cas.html"<br />] | What Products should show in zone?
skyZone: | 1 | Header Zones. Which header should display for this widget?

### Current Headers

1. "You May Prefer This",
2. "Buy These Instead",
3. "You Buy NOW!",
4. "You May Prefer This",
5. "You May Prefer This"

