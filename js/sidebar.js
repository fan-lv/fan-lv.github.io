"use strict";!function(){$("#side-button").on("click",function(){$("#side-button").hasClass("close")?($("#side-button").removeClass("close"),$("#sidebar").velocity("stop").velocity({left:"-300px"},800,"spring"),$("#main-container").velocity("stop").velocity({marginLeft:"0px"},800,"spring")):($("#side-button").addClass("close"),$("#sidebar").velocity("stop").velocity({left:"0px"},800,"spring"),$("#main-container").velocity("stop").velocity({marginLeft:"300px"},800,"spring"))}),$(".toggle-sidebar-info span").on("click",function(){var t=$(this).attr("data-toggle");$(this).attr("data-toggle",$(this).text()),$(this).text(t),$("#sidebar .author-info").is(":visible")?$("#sidebar .author-info").velocity("stop").velocity({left:"80px",opacity:0},{duration:300,display:"none",easing:"ease-in",complete:function(){$("#sidebar .sidebar-toc").velocity("stop").velocity({opacity:1,left:0},{duration:500,display:"block",easing:"ease-out"})}}):$("#sidebar .sidebar-toc").velocity("stop").velocity({opacity:0,left:"-80px"},{duration:300,display:"none",easing:"ease-in",complete:function(){$("#sidebar .author-info").velocity("stop").velocity({left:"0px",opacity:1},{duration:500,display:"flex",easing:"ease-out"})}})});var t,e=document.getElementsByClassName("toc-link");for(var i in e){e.hasOwnProperty(i)&&(t=decodeURI(e[i].getAttribute("href")),e[i].href=t)}}();