(function(){
    if(!window.bookmarlet){
        bookmarlet_js=document.body.appendChild(document.createElement(`script`));
        bookmarlet_js.src = `https://127.0.0.1:8000/static/js/bookmarklet.js?r=`+Math.floor(Math.random()*99999999);
        console.log(bookmarlet_js.script); 
        window.bookmarlet = true;
    }else{
        bookmarkletLaunch();
    }
})();