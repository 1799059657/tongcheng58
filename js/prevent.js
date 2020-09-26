setHtmlFontSize();
var prevent = (...rest) => {
        var timer = null;
        
        return function () {
            if (timer != null) {
                clearInterval(timer)
            }
            timer = setTimeout(rest[0],rest[1]);
        }
    }
    window.onresize = prevent(setHtmlFontSize, 500);

    function setHtmlFontSize() {
        var DWidth = document.documentElement.offsetWidth;
        var newFontSize = DWidth * 100 / 750;
        document.documentElement.style.fontSize = newFontSize + 'px';
        console.log(DWidth);
        
    }