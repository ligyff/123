/******************************

脚本名称: 车票票——解锁订阅
下载地址：https://is.gd/nENrwn
脚本作者：彭于晏💞
更新时间：2023年8月11日
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

更多资源请微信搜索小程序【屌丝博客】

*******************************

[rewrite_local]

https://api.revenuecat.com/v1/(receipts|subscribers)/* url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/cpp.js

[mitm] 

hostname = api.revenuecat.com

*******************************/

var objc = JSON.parse($response.body);

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
        "expires_date" : "2024-12-16T10:33:17Z",
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
        "expires_date" : "2024-12-16T10:33:17Z"
      }
    },
    "original_purchase_date" : "2023-12-06T10:28:48Z",
    "original_app_user_id" : "$RCAnonymousID:1a9fc0d945ac4f0cafa17608ee6d3e93",
    "last_seen" : "2023-12-13T06:00:52Z"
  }
}


$done({body : JSON.stringify(objc)});
