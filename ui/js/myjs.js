$(document).ready(function() {
        //banner
        var $dianul_li = $('.dianul li');
        $("#banner .maonimen div div").css("background-image","url("+getUrl(0)+")");
        console.log(getUrl(0))
        $(".maonimen div div").each(
            function(){
                var a = $(this).index() % 8 * 240;
                var b = parseInt($(this).index() / 8) * 133.33;
                $(this).css(
                    {
                        "left":a -460,
                        "top": b,
                        "background-position":(-a) + "px " + (-b) + "px"
                    }
                );
            }
        );

        var nowimg = 0;
        var bannerAuto = setInterval(nextAuto,5000);
        var bannerAutoTime;

        $dianul_li.click(function(){
            clearInterval(bannerAuto);
            clearTimeout(bannerAutoTime);
            var index = $dianul_li.index(this);
            if(nowimg == index){
                $dianul_li.css("pointer-events","auto");
            }else{
                nowimg =index;
                $(this).addClass('cur').siblings().removeClass('cur');
                $(".zhentu").css("background","url(" + getUrl(index) + ") no-repeat center");
                dong(index);
                bannerAutoTime=setTimeout(
                    function(){
                        bannerAuto = setInterval(nextAuto,5000);
                    }
                    ,3000);
                $dianul_li.css("pointer-events","none");
            }
        });

        function nextAuto(){
            if(nowimg < 1){
                nowimg ++;
            }else{
                nowimg = 0;
            }
            dong(nowimg);
            $dianul_li.eq(nowimg).addClass('cur').siblings().removeClass('cur');
        }

        function dong(num){
            $(".maonimen div div").css("transition","1s");
            $(".maonimen").addClass("fei");
            $(".zhentu").css("background","url(" + getUrl(num) + ") no-repeat center");
            setTimeout(function(){
                $(".maonimen div div").css("transition","none");
                $(".maonimen div div").css("background-image","url(" + getUrl(num) + ")");
                $(".maonimen").removeClass("fei");
                $dianul_li.css("pointer-events","auto");
            },1000);
        }

        function getUrl(num){
            return rootUrl+"/"+$dianul_li.eq(num).attr("data-imgurl");
        }

    }
);