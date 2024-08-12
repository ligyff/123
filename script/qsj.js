/*

You：APTV
love：store
me：@ios151
Ts：仅供学习，请勿转载售卖




[rewrite_local]
^https?:\/\/api\.revenuecat\.com\/v1\/(subscribers\/[^\/]+$|receipts$) url script-response-body https://raw.githubusercontent.com/Yu9191/Rewrite/main/aptv.js


[MITM]
hostname = api.revenuecat.com

*/

var objc = JSON.parse($response.body);

    objc = {
      "code" : 200,
      "message" : "成功",
      "data" : {
        "avatarFrame" : "",
        "location" : "北京",
        "birthday" : null,
        "userAvatar" : "https://img.allhistory.com/avatar/default/5fb3c3716bfd2f3ba9740bfd.png",
        "focusNum" : 0,
        "relationType" : -1,
        "isFavorOpen" : false,
        "accountStatus" : "ACTIVE",
        "school" : null,
        "likeNum" : 0,
        "background" : "https://img.allhistory.com/content/backgroundmountain_2022-05-13.png",
        "signature" : "",
        "userInfo" : {
          "authorAvatar" : "https://img.allhistory.com/avatar/default/5fb3c3716bfd2f3ba9740bfd.png",
          "authorName" : "AH7232040557741",
          "identification" : "",
          "grade" : 0,
          "authorId" : 7114109,
          "avatarFrames" : [
            "https://img.allhistory.com/resource/app/default_avatar_white_frame.png"
          ]
        },
        "h5ShareUrl" : "https://m2.allhistory.com/my?userId=7114109&type=0",
        "fansNum" : 0,
        "gender" : 0,
        "grade" : 0,
        "circles" : [

        ],
        "ladderVip" : {
          "vipCardId" : "100071141094",
          "linkUrl" : "https://m2.allhistory.com/buyVip?sortType=2&fullScreen=true",
          "price" : "最低0.36元/天",
          "title" : "学习会员",
          "newLinkUrl" : "https://m2.allhistory.com/buyVip?sortType=2&fullScreen=true",
          "expireTime" : "6666-06-06T06:06:06Z",
          "renewLinkUrl" : "https://m2.allhistory.com/buyVip/member?fullScreen=true",
          "vip" : true,
          "subTitle" : "多项特权+海量付费内容"
        },
        "isLikeOpen" : true,
        "identification" : "",
        "userName" : "AH7232040557741",
        "isYoungOpen" : false,
        "award" : {
          "levelName" : "童生",
          "totalMedalNum" : 0,
          "level" : 1,
          "medalNum" : 0,
          "medalList" : [

          ]
        },
        "address" : null,
        "userId" : 7114109
      },
      "traceReqId" : "07cae2e6bf5647ae8fc385cafbd51272.474.17232123453297031"
    }

$done({body : JSON.stringify(objc)});
