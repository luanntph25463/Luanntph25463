var arrayAnh = [];
var chiso = 0;
function loadAnh() {
  for (var i = 0; i <= 6; i++) {
    arrayAnh[i] = new Image();
    arrayAnh[i].src = "https://picsum.photos/700/20"+i;
    document.slide.src = arrayAnh[0].src;
  }
}
function next() {
  if (chiso < 6) {
    chiso++;
    document.slide.src = arrayAnh[chiso].src;
  } else {
    chiso = chiso - 6;
    document.slide.src = arrayAnh[chiso].src;
  }

}
function back() {
  if (chiso > 0) {
    chiso--;
    document.slide.src = arrayAnh[chiso].src;
  } else {
    chiso = chiso + 6;
    document.slide.src = arrayAnh[chiso].src;
  }

}
var dem = 0;
var anh = ['https://picsum.photos/700/200','https://picsum.photos/700/205','https://picsum.photos/700/206','https://picsum.photos/700/207','https://picsum.photos/700/201','https://picsum.photos/700/202','https://picsum.photos/700/203','https://picsum.photos/700/204']
function slideshows(){
  document.getElementById('slideshow').src= anh[chiso];
  chiso++;
  if(chiso==anh.length){
    chiso =0;
  }
  setTimeout("slideshows()",1000);
}

var arrayAnhs = [];
var index = 0;
function loadAnhs() {
  for (var i = 0; i <= 6; i++) {
    arrayAnhs[i] = new Image();
    arrayAnhs[i].src = "https://picsum.photos/968/20"+i;
    document.slides.src = arrayAnhs[0].src;
  }
}
function nexts() {
  if (index < 6) {
    index++;
    document.slides.src = arrayAnhs[index].src;
  } else {
    index = index - 6;
    document.slides.src = arrayAnhs[index].src;
  }

}
function backs() {
  if (index > 0) {
    index--;
    document.slides.src = arrayAnhs[index].src;
  } else {
    index = index + 6;
    document.slides.src = arrayAnhs[index].src;
  }

}
var index = 0;
var anhs = ['https://picsum.photos/968/200','https://picsum.photos/968/205','https://picsum.photos/968/206','https://picsum.photos/968/207','https://picsum.photos/968/201','https://picsum.photos/968/202','https://picsum.photos/968/203','https://picsum.photos/968/204']
function slideshowss(){
  document.getElementById('slideshows').src= anhs[index];
  index++;
  if(index==anhs.length){
    index =0;
  }
  setTimeout("slideshows()",1000);
}


