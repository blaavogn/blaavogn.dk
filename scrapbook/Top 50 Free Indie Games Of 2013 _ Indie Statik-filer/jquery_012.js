




/*
     FILE ARCHIVED ON 2:59:28 jul 16, 2014 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 23:09:41 feb 14, 2015.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
(function(d){d.fn.fitVids=function(e){var c={customSelector:null},b=document.createElement("div"),f=document.getElementsByTagName("base")[0]||document.getElementsByTagName("script")[0];b.className="fit-vids-style";b.innerHTML="&shy;<style>         .fluid-width-video-wrapper {        width: 100%;                     position: relative;              padding: 0;                      }                                   .fluid-width-video-wrapper iframe,  .fluid-width-video-wrapper object,  .fluid-width-video-wrapper embed {  position: absolute;              top: 0;                          left: 0;                         width: 100%;                     height: 100%;                    }                                   </style>";f.parentNode.insertBefore(b,f);e&&d.extend(c,e);return this.each(function(){var b=["iframe[src*='player.vimeo.com']","iframe[src*='www.youtube.com']","iframe[src*='www.kickstarter.com']","object","embed"];c.customSelector&&b.push(c.customSelector);d(this).find(b.join(",")).each(function(){var a=d(this);if(!("embed"==this.tagName.toLowerCase()&&a.parent("object").length||a.parent(".fluid-width-video-wrapper").length)){var b=("object"==this.tagName.toLowerCase()?a.attr("height"):a.height())/a.width();if(!a.attr("id")){var c="fitvid"+Math.floor(999999*Math.random());a.attr("id",c)}a.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top",100*b+"%");a.removeAttr("height").removeAttr("width")}})})}})(jQuery);