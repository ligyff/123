/******************************

脚本名称: 车票票——解锁订阅
失效

*******************************

[rewrite_local]

https://api.revenuecat.com/v1/(receipts|subscribers)/* url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/cpp.js

[mitm] 

hostname = api.revenuecat.com

*******************************/

var objc = JSON.parse($response.body);

var currentUtcTime = objc.request_date;

var timestamp =objc.request_date_ms;

    objc = {
  "request_date_ms" : 1702464168646,
  "request_date" : "2023-12-13T10:42:48Z",
  "subscriber" : {
    "non_subscriptions" : {

    },
    "first_seen" : "2023-12-13T06:00:52Z",
    "original_application_version" : "1",
    "other_purchases" : {

    },
    "management_url" : "https://apps.apple.com/account/subscriptions",
    "subscriptions" : {
      "eticket_with_watch_6m_3d0" : {
        "original_purchase_date" : "2023-12-13T10:33:18Z",
        "expires_date" : "2023-12-16T10:33:17Z",
        "is_sandbox" : false,
        "refunded_at" : null,
        "store_transaction_id" : "520001547916370",
        "unsubscribe_detected_at" : null,
        "grace_period_expires_date" : null,
        "period_type" : "trial",
        "purchase_date" : "2023-12-13T10:33:17Z",
        "billing_issues_detected_at" : null,
        "ownership_type" : "PURCHASED",
        "store" : "app_store",
        "auto_resume_date" : null
      }
    },
    "entitlements" : {
      "vip+watch_vip" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2023-12-13T10:33:17Z",
        "product_identifier" : "eticket_with_watch_6m_3d0",
        "expires_date" : "2023-12-16T10:33:17Z"
      }
    },
    "original_purchase_date" : "2023-12-06T10:28:48Z",
    "original_app_user_id" : "$RCAnonymousID:1a9fc0d945ac4f0cafa17608ee6d3e93",
    "last_seen" : "2023-12-13T06:00:52Z"
  }
}

objc.request_date=currentUtcTime;
objc.request_date_ms =timestamp;

// 创建一个表示今天日期的 Date 对象
var today = new Date();
var year = today.getFullYear();
var month = String(today.getMonth() + 1).padStart(2, '0');
var day = String(today.getDate()).padStart(2, '0');
// 构造新的日期字符串
var today1 = year + '-' + month + '-' + day;

// 将日期增加3天
today.setDate(today.getDate() + 3);
// 获取增加3天后的年、月、日
var year1 = today.getFullYear();
var month1 = String(today.getMonth() + 1).padStart(2, '0');
var day1 = String(today.getDate()).padStart(2, '0');

// 构造新的日期字符串
var threeDaysLater1 = year1 + '-' + month1 + '-' + day1;


$done({body : JSON.stringify(objc).replaceAll('2023-12-13', today1).replaceAll('2023-12-16',threeDaysLater1)});
