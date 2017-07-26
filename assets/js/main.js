function main() {
    this.lang="";
}
main.prototype= function(){
    init = function(){
        changeLanguage('en');
    },
    changeLanguage = function(lang) {
        
        var langLength =$(".lkey").length;
        for(var i=0;i<langLength;i++) {
            var lkey=$('.lkey').eq(i).attr('id');
            if(lang=="tm"){
                $('.lkey').eq(i).html(tm_language[lkey]);   
            }
            else if(lang=="en") {
                $('.lkey').eq(i).html(en_language[lkey]);   
            }
        }
    }
    return {
        init:init,
        changeLanguage:changeLanguage
    };
}();

window.onload = function() {
    g_main.init();
    
}

var g_main=new main();