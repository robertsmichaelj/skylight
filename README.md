# Skylight

##### Cross Promotional Zone for Bodybuilding.com Product Pages

</br>

## Features

* Choose where to insert Skylight instance
* Choose what the header reads
* Choose the number of cells to show
* Choose which URLs to pull information from

<br />

## Usage
**1. Add script tags at bottom of product block and initialize zone**

```javascript
<link rel="stylesheet" href="https://www.bodybuilding.com/scripts/skylight.min.js" />
<script>
    var crossMerch = new Skylight({
        products: [
            "/store/opt/cas.html",
            "/store/opt/oatsandwhey.html",
            "/store/opt/whey.html"
        ]
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
products: | products: [</br>&nbsp;&nbsp;&nbsp;&nbsp;"/store/opt/whey.html",</br>&nbsp;&nbsp;&nbsp;&nbsp;"/store/opt/natwhey.html",</br>&nbsp;&nbsp;&nbsp;&nbsp;"/store/opt/cas.html"</br>] | What Products should show in zone?

