
$(document).ready(function(){

  window.setTimeout(function(){
    $("#topics").vgrid({
        useLoadImageEvent: true,
        time: 400,
        delay: 20,
        fadeIn: {
            time: 500,
            delay: 50
        }
    });
  }, 1000);

  $(document).on('click', '#topics i', function () {
    var user_storage = $(this).prev().children().text();

    console.log(user_storage);

    var data = $(this).parent().html();

    console.log(data);



//------------------------
    // var segmenter = new TinySegmenter();

    // var segs = segmenter.segment(user_storage);

    // console.log(segs);

    // function squeeze(){
    //   var search_text = "の";
    //   segs.some(function(v, i){
    //       if (v==search_text) segs.splice(i,1);
    //   });
    //   console.log(segs);
    //   // var data_num = segs.indexOf(search_text);

    //   console.log("======抽出======");
    //   // console.log(segs[data_num]);

    //   console.log("======ローカルストレージに保存======");
    //   // var word = segs[data_num];
    //   // var datalist = {
    //   //   key: word
    //   // }
    //   // window.localStorage.setItem("setdata", JSON.stringify(datalist));
    // }

    // squeeze() ;

//------------------------

  });

  $(document).on('click', '#personal', function () {
    $(".personal-area").animate(
        {
            bottom: "0%"
        },
        "slow", "easeInQuart"
    );
  });

  $(document).on('click', '.close', function () {
    $(".personal-area").animate(
        {
            bottom: "-70%"
        },
        "slow", "easeInQuart"
    );
  });

});
