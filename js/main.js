$(function(){
    $('[label-batter]').label_better({
    position: "top",
    animationTime: 500,
    easing: "ease-in-out",
    offset: 20
  });
})

var gotoPage = function (d) {
 if(d==0){
     $('.login-section').hide();
     $('.signup-section').show();
 }   
 if(d==1){
    $('.login-section').show();
     $('.signup-section').hide();
 }
}