/* Copyright (C) True Light, LLC - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * 2017
 */
(function($){
    if(!$.TLW){
        $.TLW = new Object();
    };
    $.TLW.ImageViewer = function(el, options){
        var base = this;
        base.$el = $(el);
        base.el = el;
        base.cssClass = base.$el.attr('class');
        base.$el.data("TLW.ImageViewer", base);
        base.init = function(){
            if(!$.fn.slick && base.options.useSlick){
                throw new Error("Slick JS is not installed, but required to use this viewer");
            }
            if(typeof PhotoSwipe === 'undefined'){
                throw new Error("Photoswipe is not installed, but required to use this viewer");
            }
            base.options = $.extend({},$.TLW.ImageViewer.defaultOptions, options);
            base.origImgObjects = base.options.imageObjects != null ? base.options.imageObjects :base.imageObject();
            base.initalSetup();
            if(base.options.swipeBottomAlts) {
                base.buildAlts();
            }
            if(base.options.useSlick){
                base.slick();
            }
        };
        base.initalSetup = function(){
            $('body').append(base.pswpHtml());
            if(base.options.appendForMobile){
                base.$el.after('<div class="mobileAppend"></div>');
            }
            $('body').on('click', '.' + base.cssClass + ' a', function (event) {
                event.preventDefault();
                var currentIndex = base.options.useSlick ? base.$el.slick('slickCurrentSlide') : $(this).parent().index();
                base.photoSwipe(currentIndex);
            });
            if(base.options.slickBottomAlts){
                base.$el.addClass('slickImgAlts')
            }
        }
        base.photoSwipe = function (index){
            var options = $.extend({},base.options.psOptions,{
                index:index
            });
            var pswp = $('.pswp')[0];
            var lightBox = new PhotoSwipe(pswp, PhotoSwipeUI_Default, base.origImgObjects, options);
            lightBox.listen('gettingData', function (index, item) {
                item.src = item.originalImage.src;
                item.w = item.originalImage.w;
                item.h = item.originalImage.h;
            });
            if(base.options.swipeBottomAlts) {
                lightBox.listen('afterChange', function () {
                    $('.alts a').removeClass('active');
                    $('.sp' + lightBox.getCurrentIndex()).addClass('active');
                });
                $('body').on('click', '.alts a', function (event) {
                    event.preventDefault();
                    lightBox.goTo($(this).data('index'));
                });
                //remove click event to prevent memory leak
                lightBox.listen('close', function () {
                    $('body').off('click', '.alts a');
                });
            }
            lightBox.init();
        };
        base.buildAlts = function(){
            $('.pswp__scroll-wrap').append('<div class="altbar"><div class="alts"></div></div>');
            $.each(base.origImgObjects, function (idx, obj) {
                $('.altbar .alts').append('<a class="sp' + idx + '" data-index="' + idx + '"><img src="' + obj.smallImage.src + '" /></a>');
            });
        };
        base.imageObject = function(){
            var imgArray = [];
            base.$el.children('div').each(function(){
                var link = $(this).find('a');
                var image = $(this).find('img');
                var imageObj = {
                    mediumImage:{
                        src: image.attr('src'),
                        w: image.data('med-width'),
                        h: image.data('med-height')
                    },
                    smallImage:{
                        src: image.data('sm-img'),
                        w: image.data('sm-width'),
                        h: image.data('sm-height')
                    },
                    originalImage:{
                        src: link.attr('href'),
                        w: link.data('orig-width'),
                        h: link.data('orig-height')
                    }
                }
                imgArray.push(imageObj);
            });
            return imgArray;
        };
        base.slick = function(){
            if(base.options.slickBottomAlts){
                var slickOptions = $.extend({},base.options.slickOptions,{
                    customPaging: function (slick, index) {
                        return '<img src="' + base.origImgObjects[index].smallImage.src + '" /><button type="button" data-role="none">' + (index + 1) + '</button>'
                    }
                });
            }else{
                var slickOptions = base.options.slickOptions;
            }
            var slick = base.$el.slick(slickOptions);
            return slick;
        };
        base.pswpHtml = function(){
            var pswpHtml = '<div class="pswp" tabindex="-1" role="dialog" aria-hidden="true"> \
                                    <div class="pswp__bg"></div> \
                                    <div class="pswp__scroll-wrap"> \
                                        <div class="pswp__container"> \
                                            <div class="pswp__item"></div> \
                                            <div class="pswp__item"></div> \
                                            <div class="pswp__item"></div> \
                                        </div> \
                                        <div class="pswp__ui pswp__ui--hidden"> \
                                            <div class="pswp__top-bar"> \
                                                <div class="pswp__counter"></div> \
                                                <button class="pswp__button pswp__button--close" title="Close (Esc)"></button> \
                                                <button class="pswp__button pswp__button--share" title="Share"></button> \
                                                <button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button> \
                                                <button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button> \
                                                <div class="pswp__preloader"> \
                                                    <div class="pswp__preloader__icn"> \
                                                        <div class="pswp__preloader__cut"> \
                                                            <div class="pswp__preloader__donut"></div> \
                                                        </div> \
                                                    </div> \
                                                </div> \
                                            </div> \
                                            <div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap"> \
                                                <div class="pswp__share-tooltip"></div> \
                                            </div> \
                                            <button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"></button> \
                                            <button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)"></button> \
                                            <div class="pswp__caption"> \
                                                <div class="pswp__caption__center"></div> \
                                            </div> \
                                        </div> \
                                    </div> \
                                </div>';
            if(base.options.pswpHtml !== ''){
                pswpHtml = base.options.pswpHtml;
            }
            return pswpHtml;
        }
        base.init();
    };
    $.TLW.ImageViewer.defaultOptions = {
        swipeBottomAlts:true,
        slickBottomAlts:true,
        pswpHtml:'',
        psOptions:{
            bgOpacity: 0.9,
            showHideOpacity: true,
            shareEl:false,
            fullscreenEl:false,
            closeOnScroll:false,
            clickToCloseNonZoomable:false
        },
        slickOptions:{
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
        imageObjects:null,
        appendForMobile:false,
        useSlick:true
    };
    $.fn.tlw_ImageViewer = function(options){
        return this.each(function(){
            (new $.TLW.ImageViewer(this, options));
        });
    };
})(jQuery);