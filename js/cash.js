function iswx(){
    if (!$('.inputBox').val()){
        return
    }
    var tuBiao = document.getElementsByClassName('headPortrait')[0]
    if (tuBiao.style.backgroundImage !== 'url("./img/radio_select.png")'){
        
        tuBiao.style.backgroundImage = "url('./img/radio_select.png')"
        // document.getElementsByClassName('headPortrait')[0].style.background
        // console.log(tuBiao.style.backgroundImage)
        if ($('.inputBox').val()){
            document.getElementsByClassName('tiXianBtn')[0].style.backgroundColor = '#457AEC'
        }
        
    }
    else{
        document.getElementsByClassName('headPortrait')[0].style.backgroundImage = "url('./img/radio_unse.png')"
        document.getElementsByClassName('tiXianBtn')[0].style.backgroundColor = 'rgba(221,221,221,1)'
    }
}