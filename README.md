# Photoswipe/SlickJs Image Viewer

A integration plugin that seamlessly uses the two components for one viewer

## Install

Add jQuery
```
<script type="text/javascript" src="//code.jquery.com/jquery-1.11.0.min.js"></script>
```
Add Slick
```
<script type="text/javascript" src="//lib.store.yahoo.net/lib/test-st51-truelight/slick.min.js"></script>
or
<script type="text/javascript" src="//cdn.jsdelivr.net/jquery.slick/1.6.0/slick.min.js"></script>
```
Add Photoswipe
```
<script src="https://lib.store.yahoo.net/lib/test-st51-truelight/ps.all.pack.min.js"></script>
```
Add Connection Plugin - .css file includes default photoswipe and slick themes.
```
<script src="https://lib.store.yahoo.net/lib/test-st51-truelight/tlwimageViewer.js"></script>
<link rel="stylesheet" type="text/css" href="https://lib.store.yahoo.net/lib/test-st51-truelight/tlwimageSkin.css"/>
```

Open tlwimageSkin and find replace 'test-st51-trueligh' with the stores account and upload /lib file

##To Do

Expand plugin to integrate in existing responsive site implementations

## Requirements

* jQuery
* slickjs
* photoswipe

## Usage

```js
$('.tlwViewer').tlw_ImageViewer();
```

## Options

```js
    swipeBottomAlts:true, //Show Bottom Alts in photoswipe
    slickBottomAlts:true, //Show Bottom Alts in slick.  If you don't want anything(dots), you also need to set dots to false in slickOptions
    pswpHtml:'', //Can be used to override photoswipe container
    psOptions:{ // All of photoswipe options http://photoswipe.com/documentation/options.html
        bgOpacity: 0.9,
        showHideOpacity: true,
        shareEl:false,
        fullscreenEl:false,
        closeOnScroll:false,
        clickToCloseNonZoomable:false
    },
    slickOptions:{ // All of slick options http://kenwheeler.github.io/slick/
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: true,
                }
            }
        ],
        dots: true,
        infinite: false
    },
    imageObjects:null, //This can be used to send an objects of images to override DOM build.  The intent is for responsive addition implementation
    appendForMobile:false, //Usage to come
    useSlick:true //Whether or not to use slick.  Setting to false will only use photoswipe, but will need to be fleshed out for actual implementations
```

## Callbacks

*None at this time*

## HTML

```
<div class="tlwViewer">
    <div>
        <a href="http://ep.yimg.com/ay/rewilliams/linteater-rotary-dryer-vent-cleaning-kit-16.gif" data-orig-height="450" data-orig-width="342">
            <img src="http://ep.yimg.com/ay/rewilliams/linteater-rotary-dryer-vent-cleaning-kit-88.gif" data-med-height="500" data-med-width="500" data-sm-height="50" data-sm-width="50" data-sm-img="http://ep.yimg.com/ay/rewilliams/linteater-rotary-dryer-vent-cleaning-kit-104.gif">
        </a>
    </div>
    <div>
        <a href="http://ep.yimg.com/ay/rewilliams/linteater-rotary-dryer-vent-cleaning-kit-17.gif" data-orig-height="413" data-orig-width="520">
            <img src="http://ep.yimg.com/ay/rewilliams/linteater-rotary-dryer-vent-cleaning-kit-90.gif" data-med-height="500" data-med-width="500" data-sm-height="50" data-sm-width="50" data-sm-img="http://ep.yimg.com/ay/rewilliams/linteater-rotary-dryer-vent-cleaning-kit-105.gif">
        </a>
    </div>
    <div>
        <a href="http://ep.yimg.com/ay/rewilliams/linteater-rotary-dryer-vent-cleaning-kit-72.gif" data-orig-height="275" data-orig-width="288">
            <img src="http://ep.yimg.com/ay/rewilliams/linteater-rotary-dryer-vent-cleaning-kit-92.gif" data-med-height="500" data-med-width="500" data-sm-height="50" data-sm-width="50" data-sm-img="http://ep.yimg.com/ay/rewilliams/linteater-rotary-dryer-vent-cleaning-kit-106.gif">
        </a>
    </div>
    <div>
        <a href="http://ep.yimg.com/ay/rewilliams/linteater-rotary-dryer-vent-cleaning-kit-74.gif" data-orig-height="564" data-orig-width="564">
            <img src="http://ep.yimg.com/ay/rewilliams/linteater-rotary-dryer-vent-cleaning-kit-94.gif" data-med-height="500" data-med-width="500" data-sm-height="50" data-sm-width="50" data-sm-img="http://ep.yimg.com/ay/rewilliams/linteater-rotary-dryer-vent-cleaning-kit-107.gif">
        </a>
    </div>
    <div>
        <a href="http://ep.yimg.com/ay/rewilliams/linteater-rotary-dryer-vent-cleaning-kit-77.gif" data-orig-height="491" data-orig-width="670">
            <img src="http://ep.yimg.com/ay/rewilliams/linteater-rotary-dryer-vent-cleaning-kit-96.gif" data-med-height="500" data-med-width="500" data-sm-height="50" data-sm-width="50" data-sm-img="http://ep.yimg.com/ay/rewilliams/linteater-rotary-dryer-vent-cleaning-kit-108.gif">
        </a>
    </div>
    <div>
        <a href="http://ep.yimg.com/ay/rewilliams/linteater-rotary-dryer-vent-cleaning-kit-79.gif" data-orig-height="549" data-orig-width="553">
            <img src="http://ep.yimg.com/ay/rewilliams/linteater-rotary-dryer-vent-cleaning-kit-98.gif" data-med-height="500" data-med-width="500" data-sm-height="50" data-sm-width="50" data-sm-img="http://ep.yimg.com/ay/rewilliams/linteater-rotary-dryer-vent-cleaning-kit-109.gif">
        </a>
    </div>
    <div>
        <a href="http://ep.yimg.com/ay/rewilliams/linteater-rotary-dryer-vent-cleaning-kit-82.gif" data-orig-height="667" data-orig-width="487">
            <img src="http://ep.yimg.com/ay/rewilliams/linteater-rotary-dryer-vent-cleaning-kit-100.gif" data-med-height="500" data-med-width="500" data-sm-height="50" data-sm-width="50" data-sm-img="http://ep.yimg.com/ay/rewilliams/linteater-rotary-dryer-vent-cleaning-kit-110.gif">
        </a>
    </div>
    <div>
        <a href="http://ep.yimg.com/ay/rewilliams/linteater-rotary-dryer-vent-cleaning-kit-85.gif" data-orig-height="450" data-orig-width="184">
            <img src="http://ep.yimg.com/ay/rewilliams/linteater-rotary-dryer-vent-cleaning-kit-102.gif" data-med-height="500" data-med-width="500" data-sm-height="50" data-sm-width="50" data-sm-img="http://ep.yimg.com/ay/rewilliams/linteater-rotary-dryer-vent-cleaning-kit-111.gif">
        </a>
    </div>
</div>
```

## RTML

Template to be built with first implementation

## Demo

http://test-st51-truelight.stores.yahoo.net/photoswipe.html