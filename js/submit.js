$(document).ready(function(){
    $('input').on('input propertychange',function(){
        if ($('#name').val()){
          if ($('#phone').val()){
              document.getElementsByClassName('foot-1')[0].style.background = 'rgba(69,122,236,1)'
              $('.foot-1').on('click',function(){
                  var phone = $('#phone').val()
                  if ($('#type').text() == '请选择任务类型'){
                    console.log($('#type').text())
                    var tanchuang = document.getElementsByClassName('tanChuang')[0]
                    $('.tanChuang').html('请选择任务类型')
                    tanchuang.style.display = 'block'
                    setTimeout(function(){
                      remove()
                    // $('.tanChuang').click()
                    },1500)
                  }
    
                  else if(!(/^1[3456789]\d{9}$/.test(phone))){ 
                    var tanchuang = document.getElementsByClassName('tanChuang')[0]
                    $('.tanChuang').html('手机号码有误，请重填') 
                    tanchuang.style.display = 'block'
                    setTimeout(function(){
                        // $('.tanChuang').click()
                      remove()
                    },1500)          
                  } 
              })             
          }
        }
      })
    
    
      

})
