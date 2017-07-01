var t1=0, t2=0, srcImg1T1, srcImg2T1, srcImg1T2, srcImg2T2;

var $botaoMaisTime1 = document.querySelector('#btn-mais-time1');
var $botaoMaisTime2 = document.querySelector('#btn-mais-time2');

var $botaoMenosTime1 = document.querySelector('#btn-menos-time1');
var $botaoMenosTime2 = document.querySelector('#btn-menos-time2');

var $img1Time1 = document.querySelector('#img1-time1');
var $img2Time1 = document.querySelector('#img2-time1');

var $img1Time2 = document.querySelector('#img1-time2');
var $img2Time2 = document.querySelector('#img2-time2');

$botaoMaisTime1.addEventListener('click',function() {
    (t1 < 100) ? t1++ : t1;
    setPontuacaoTime1(t1);
});

$botaoMaisTime2.addEventListener('click',function() {
    (t2 < 100) ? t2++ : t2;
    setPontuacaoTime2(t2);
});


$botaoMenosTime1.addEventListener('click',function() {
    (t1 > -1) ? t1-- : t1;
    setPontuacaoTime1(t1);
});

$botaoMenosTime2.addEventListener('click',function() {
    (t2 > -1) ? t2-- : t2;
    setPontuacaoTime2(t2);
});

function setPontuacaoTime1(x) {
    if ((x > 99) || (x < 0)) {
        srcImg1T1='none.png';
        srcImg2T1='none.png';
    } else {
        srcImg1T1 = (x % 10) + '.png';
        srcImg2T1 = (Math.floor(x / 10)) + '.png';
    }
    $img1Time1.setAttribute('src', './img/' + srcImg1T1);
    $img2Time1.setAttribute('src', './img/' + srcImg2T1);
}

function setPontuacaoTime2(x) {
    if ((x > 99) || (x < 0)) {
        srcImg1T2='none.png';
        srcImg2T2='none.png';
    } else {
        srcImg1T2 = (x % 10) + '.png';
        srcImg2T2 = (Math.floor(x / 10)) + '.png';
    }
    $img1Time2.setAttribute('src', './img/' + srcImg1T2);
    $img2Time2.setAttribute('src', './img/' + srcImg2T2);
}
