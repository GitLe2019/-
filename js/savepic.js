
$(document).ready(function(){
            let w = $('.pic').width(); //图片宽度
            let h = $('.pic').height(); //图片高度
            console.log(w+"    "+h);
            var pic = $(".pic").get(0); //将jQuery对象转换为dom对象
            function getOS() { // 获取当前操作系统
                var os;
                if (navigator.userAgent.indexOf('Android') > -1 || navigator.userAgent.indexOf('Linux') > -1) {
                    os = 'Android';
                } else if (navigator.userAgent.indexOf('iPhone') > -1||navigator.userAgent.indexOf('iPad') > -1) {
                    os = 'iOS';
                } else if (navigator.userAgent.indexOf('Windows Phone') > -1) {
                    os = 'WP';
                } else {
                    os = 'Others';
                }
                return os;
            }
            console.log("操作系统"+getOS());

            // 转成canvas，最后用于生成图片
            setTimeout(function(){


                    // 调用html2canvas插件
                    html2canvas(pic,{useCORS: true}).then(function(canvas) {
                        // canvas宽度
                        var canvasWidth = canvas.width;
                        // canvas高度
                        var canvasHeight = canvas.height;
                        // 控制台查看绘制区域的宽高
                        console.log(canvasWidth+"    "+canvasHeight);

                        

                        // 渲染canvas，这个时候将我们用于生成图片的区域隐藏
                        $(".pic").hide();
                            // 下面注释内容为测试内容，测试时可以去掉注释，方便查看生成的canvas区域
                            // $(".pic").after(canvas);

                            // 调用Canvas2Image插件
                            let w = $('.pic').width(); //图片宽度
                            // let h = $(window).height(); //图片高度
                            // 这里因为我们生成图片区域高度为400，所以这里我们直接指定
                            let h = $('.pic').height();
                            console.log(w,h)

                            // 将canvas转为图片
                            // var img = new Image()

                            img = Canvas2Image.convertToImage(canvas, w, h);
                            img.setAttribute("crossOrigin",'Anonymous')
                            console.log(img.src)
                            // 渲染图片，并且加到页面中查看效果
                            // $(".pic").after(img);
                            // downloadedImg.onload = () => {
                            //     context.drawImage(downloadedImg, 0, 0, 750, 1164);
                            // }
                            $(".pic").after(img);


                                // 保存
                                let type = "png"; //图片类型
                                let f = "DNF"; //图片文件名，自定义名称
                                w = (w === '') ? canvasWidth : w; //判断输入宽高是否为空，为空时保持原来的值
                                h = (h === '') ? canvasHeight : h;

                                // 这里的判断用于区分移动端和pc端
                                if(getOS()=="Others")
                                {
                                // 调用Canvas2Image插件
                                Canvas2Image.saveAsImage(canvas, w, h, type, f);
                                }
                    });
                
            },100)


             // 点击按钮提示用户长按保存图片
                $('.preservation').click(function() {
                    var tanchuang = document.getElementsByClassName('tanChuang')[0]
                    $('.tanChuang').html('长按保存图片')
                    tanchuang.style.display = 'block'
                    setTimeout(function(){
                      remove()
                    // $('.tanChuang').click()
                    },1500)
                });
})

