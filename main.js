
// 初期設定
var disp_entry_count = 60;

// RSS URL
var site = new Array();

site[0] = {
    title:'fc2人気トレンド',
    url:'http://video.fc2.com/a/feed_ranking.php?m=week',
    disp_entry:5
};

site[1] = {
    title:'エロなう',
    url:'http://rsseronow.blog.fc2.com/?xml',
    disp_entry:15
};

site[2] = {
    title:'無料エロ動画',
    url:'http://xvideos.ero1.biz/index.rdf',
    disp_entry:15
};

site[3] = {
    title:'無料AV動画',
    url:'http://xvideo-jp.com/feed',
    disp_entry:15
};

site[4] = {
    title:'天国エロ動画',
    url:'http://www.tengokudouga.com/tengokuErodougaRss.xml',
    disp_entry:15
};

site[5] = {
    title:'えろつべ',
    url:'http://erotube.org/atom.xml',
    disp_entry:15
};

site[6] = {
    title:'ero oppai 無料動画',
    url:'http://ero-oppai.com/feed/',
    disp_entry:15
};


var channel = new Array();
var entry = new Array();
var entries = new Array();
var Feed = "";

google.load("feeds", "1");
function init() {

    var site_count = 0;

    for (var i=0; i<site.length; i++){

        var feed = new google.feeds.Feed(site[i]['url']);
        feed.setNumEntries(site[i]['disp_entry'])
        feed.load(function(rss) {
            if (!rss.error) {

                channel['title'] = rss.feed.title;
                channel['link'] = rss.feed.link;
                channel['favicon'] = "http://favicon.hatena.ne.jp/?url=" + channel['link'];
                channel['description'] = rss.feed.description;
                channel['author'] = rss.feed.author;

                // RSSから記事の情報を配列に格納
                for (var j=0; j<rss.feed.entries.length; j++){

                    var feed_entry = rss.feed.entries[j];
                    var entry = {
                        site_title : channel['title'],
                        site_link : channel['link'],
                        site_favicon : channel['favicon'],
                        title : feed_entry.title,
                        link : feed_entry.link,
                        content : feed_entry.content,
                        contentSnippet : feed_entry.contentSnippet,
                        publishedDate : feed_entry.publishedDate
                    };

                    var date = new Date(entry['publishedDate']);
                    entry['time'] = date.getTime();
                    var yy = date.getYear();
                    var mm = date.getMonth() + 1;
                    var dd = date.getDate();
                    if (yy < 2000) { yy += 1900; }
                    if (mm < 10) { mm = "0" + mm; }
                    if (dd < 10) { dd = "0" + dd; }
                    entry['date'] = yy + "年" + mm + "月" + dd + "日";

                    entry['img'] = entry['content'].match(/src="(.*?)"/igm);

                    if (entry['img'] != null) {
                        for (var k=0; k<entry['img'].length; k++){
                            entry['img'][k] = entry['img'][k].replace(/src=/ig, "");
                            entry['img'][k] = entry['img'][k].replace(/"/ig, "");
                        }
                    }
                    entries.push(entry);
                }
            }
            site_count++;
            if (site.length == site_count){ disp(); }
        });
    }
}

function disp() {

    entries.sort (function (b1, b2) { return b1.time < b2.time ? 1 : -1; } );

    for (var l=0; l<disp_entry_count; l++){
        if (entries.length < l+1){ break; }

        if (entries[l]['img'] != null) { Feed += '<li><a target="_blank" href="'+ entries[l]['link'] + '"><img class="box" src="' + entries[l]['img'][0] + '"></a>'; }
        Feed += '<h4>'
                    + ''
                    + '<a href="' + entries[l]['site_link'] + '">' + entries[l]['site_title'] + '</a></h4>'
                    + '<h3>'
                    + '<a target="_blank" href="'+ entries[l]['link'] + '">' + entries[l]['title'] + '</a>'
                    + '</h3><i class="fa fa-heartbeat"></i></li>';
    }

    $('#topics').append( Feed );
}

google.setOnLoadCallback(init);


