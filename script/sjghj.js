/*************************************
@Zoo
时间规划局

日期:2023.04.15
[rewrite_local]
^https:\/\/buy\.itunes\.apple\.com\/verifyReceipt url script-response-body https://raw.githubusercontent.com/ligengying/123/master/script/sjghj.js
hostname = buy.itunes.apple.com
**************************************/
var obj = JSON.parse($response.body);
   
    obj.receipt.in_app =[
       {
         "quantity" : "1",
         "purchase_date_ms" : "1669774799000",
         "expires_date" : "2285-12-09 05:53:19 Etc/GMT",
         "expires_date_pst" : "2285-12-09 05:53:19 America/Los_Angeles",
         "is_in_intro_offer_period" : "false",
         "transaction_id" : "310001268099674",
         "is_trial_period" : "true",
         "original_transaction_id" : "310001268099674",
         "purchase_date" : "2022-11-30 02:19:59 Etc/GMT",
         "product_id" : "com.vitalii.water.sub.premium8",
         "original_purchase_date_pst" : "2022-11-29 18:20:00 America/Los_Angeles",
         "in_app_ownership_type" : "PURCHASED",
         "original_purchase_date_ms" : "1669774800000",
         "web_order_line_item_id" : "310000584029126",
         "expires_date_ms" : "9970033999000",
         "purchase_date_pst" : "2022-11-29 18:19:59 America/Los_Angeles",
         "original_purchase_date" : "2022-11-30 02:20:00 Etc/GMT"
       }
     ]
