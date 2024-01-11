var obj = JSON.parse($response.body);

var headers = $request.headers;
var userAgent = headers['User-Agent'];
console.log("revenuecat-------------------------" + userAgent)
if (userAgent.indexOf('Grow')) {
    console.log("Grow:" + userAgent)
    obj = {
        "request_date_ms": 1662599120248,
        "request_date": "2022-09-08T01:05:20Z",
        "subscriber": {
            "non_subscriptions": {},
            "first_seen": "2022-09-08T01:04:03Z",
            "original_application_version": "810",
            "other_purchases": {},
            "management_url": "https://apps.apple.com/account/subscriptions",
            "subscriptions": {
                "grow_1y_128": {
                    "is_sandbox": false,
                    "ownership_type": "PURCHASED",
                    "billing_issues_detected_at": null,
                    "period_type": "trial",
                    "expires_date": "9999-09-15T01:04:17Z",
                    "grace_period_expires_date": null,
                    "unsubscribe_detected_at": "2022-09-08T01:05:19Z",
                    "original_purchase_date": "2022-09-08T01:04:18Z",
                    "purchase_date": "2022-09-08T01:04:17Z",
                    "store": "app_store"
                }
            },
            "entitlements": {
                "grow.pro": {
                    "grace_period_expires_date": null,
                    "purchase_date": "2022-09-08T01:04:17Z",
                    "product_identifier": "grow_1y_128",
                    "expires_date": "9999-09-15T01:04:17Z"
                }
            },
            "original_purchase_date": "2022-09-07T13:05:43Z",
            "original_app_user_id": "$RCAnonymousID:1a143bf1ce22484ca9927aa9bb41727f",
            "last_seen": "2022-09-08T01:04:03Z"
        }
    }
}


$done({body: JSON.stringify(obj)});