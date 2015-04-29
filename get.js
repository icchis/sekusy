
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

  var user_storage = '';
  var data = '';

  $(document).on('click', '#topics i', function () {

    user_storage += $(this).prev().children().text();
    user_storage += ",";

    data += $(this).parent().html();
    data += ",";

    // var myObj = new Object();
    // var user_storage = "";
   //  var user_storage = new Array();
   //  user_storage.push(current_storage);

   //  console.log(user_storage);

   //  var storageArray = new Array();

   //  for( var i=0 ; i < user_storage.length ; i++ ) {
   //    // if( user_storage[i].length > 0 ) {
   //       storageArray.push( user_storage[i] );
   //    // }
   // }
   // user_storage = user_storage + user_storage;

    console.log(user_storage);

    var datalist = {
        sekusy: user_storage,
        fav: data
    }

    console.log("データを保存しました");

    window.localStorage.setItem("setdata", JSON.stringify(datalist));

    console.log(datalist);


    //保存データを表示する
    // display();

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
    var d = JSON.parse(window.localStorage.getItem("setdata"));

    console.log(d.sekusy);
    console.log(d.fav);

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
