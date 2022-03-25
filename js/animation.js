$(document).ready(function () {  
  let text;
  let image;
  $(".box").hover(
    function () {
      text = this.getElementsByClassName("text")[0];
      image = this.getElementsByClassName("image")[0];

      imgCSS(image,0);
      textBoxCSS(text,100);
      textCSS(text.getElementsByTagName("h3"),20);
      textCSS(text.getElementsByTagName("p"),15);
    },
    function () {
      imgCSS(image,100);
      textBoxCSS(text,0);
      textCSS(text.getElementsByTagName("h3"),0);
      textCSS(text.getElementsByTagName("p"),0);
    });

    function textBoxCSS(point,hight){
      $(point).css({
        "height": `${hight}px`,
        "transition" : "all .5s ease",
      })
    }
    function imgCSS(point,grayscale){
      $(point).css({
        "filter": `grayscale(${grayscale}%)`,
        "transition" : "all 0.5s ease",
      })
    }
    function textCSS(point,opacity){
      $(point).css({
        "font-size": `${opacity}px`,
        "transition" : "all 0.3s ease"
      })
    }
});
