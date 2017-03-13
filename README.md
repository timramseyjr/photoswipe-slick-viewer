# Photoswipe/SlickJs Image Viewer

A integration plugin that seamlessly uses the two components for one viewer

## Requirements

* jQuery
* [slickjs](http://kenwheeler.github.io/slick/)
* [photoswipe](http://photoswipe.com/documentation/getting-started.html)

## Install
If using gulp
```
1. Open gulpfile.js and change value of storecode variable
2. run 'gulp' from command line
3. Upload lib.zip to files section that is in aabaco folder
4. Paste contents of head.txt from that same folder into stores head
```

~OR~
```
1. Open tlwimageSkin.css in aabaco/lib directory and copy/replace storecode
2. Zip lib directory and upload to files sections
3. Add the following to the HEAD
```

Add jQuery
```
<script type="text/javascript" src="//code.jquery.com/jquery-1.11.0.min.js"></script>
```
Add Slick
```
<script type="text/javascript" src="//lib.store.yahoo.net/lib/$storecode$/slick.min.js"></script>
```
Add Photoswipe and connection plugin
```
<script src="//lib.store.yahoo.net/lib/$storecode$/tlw.ps.min.js"></script>
```
Add Connection .css file includes default photoswipe and slick themes.
```
<link rel="stylesheet" type="text/css" href="//lib.store.yahoo.net/lib/$storecode$/tlwimageSkin.css"/>
```

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
    appendMobileOnlyViewer:false, //Set to true and pass in mobims imageObject from RTML template or another object with all the images.  It will add another div under main image div with all the images so you can show it on smaller devices only.
    useSlick:true //Whether or not to use slick.  Setting to false will only use photoswipe, but will need to be fleshed out for actual implementations
```

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

Template tlw-image-viewer.rtml

Usage
```
//howmany - How far to count
//imagevar - variable name of addition images
//startnum - where to start.  If useinset below then start at 0
//addimageseperator - seperator between imagevar and startnum
//medh - height of medium image pad-image
//medw - width of medium image pad-image
//smh - height of small image pad-image
//smw - width of small image pad-image
//useinset - whether or not to start with @inset.  Set startnum to 0
//responsiveobject - this is used in responsive projects when we are not writing out DOM, but building a Object of the images
(howmany imagevar startnum addimageseperator medh medw smh smw useinset responsiveobject)
 
 CALL :tlw-image-viewer 
    8
    "image"
    2
    nil
    400
    400
    35
    35
    nil
    nil
```

## Demo

http://test-st51-truelight.stores.yahoo.net/photoswipe.html

http://test-st51-truelight.stores.yahoo.net/test-image-viewer.html

##To Do

Expand plugin to integrate in existing responsive site implementations