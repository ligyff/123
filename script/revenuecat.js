var res_new = {};
var res_old = JSON.parse(typeof $response != "undefined" && $response.body || null);

console.log("原始数据--------"+JSON.stringify(res_old));

var headers = $request.headers;
var userAgent = headers['User-Agent'];
var bundleId = headers['X-Client-Bundle-ID'];
console.log("revenuecat-------------------------" + userAgent)
console.log("revenuecat-------------------------" + bundleId)

if (typeof $response == "undefined") {
    delete $request.headers["x-revenuecat-etag"];
    delete $request.headers["X-RevenueCat-ETag"];

    res_new.headers = $request.headers;
} else if (bundleId === 'com.ideation.Stress') {
    console.log("StressWatch  userAgent:" + userAgent);
    console.log("StressWatch  bundleId:" + bundleId);
    res_new = {
        "request_date_ms": 1704970859633,
        "request_date": "2024-01-11T11:00:59Z",
        "subscriber": {
            "non_subscriptions": {},
            "first_seen": "2024-01-07T15:15:50Z",
            "original_application_version": null,
            "other_purchases": {},
            "management_url": null,
            "subscriptions": {
                "stress_membership_lifetime": {
                    "store": "app_store",
                    "purchase_date": "2023-02-23T02:33:33Z",
                    "ownership_type": "PURCHASED",
                    "original_purchase_date": "2023-02-23T02:33:33Z",
                    "expires_date": "9999-09-09T09:09:09Z"
                }
            },
            "entitlements": {
                "StressWatch Pro": {
                    "store": "app_store",
                    "purchase_date": "2023-02-23T02:33:33Z",
                    "ownership_type": "PURCHASED",
                    "original_purchase_date": "2023-02-23T02:33:33Z",
                    "product_identifier": "stress_membership_lifetime",
                    "expires_date": "9999-09-09T09:09:09Z"
                }
            },
            "original_purchase_date": null,
            "original_app_user_id": "$RCAnonymousID:fe1a1f5d1a4442cc9a7efecd899fbe76",
            "last_seen": "2024-01-11T10:59:27Z"
        }
    }
} else if (userAgent.indexOf('Grow')) {
    console.log("Grow  userAgent:" + userAgent);
    console.log("Grow  bundleId:" + bundleId);
    res_new = {
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


console.log("修改数据--------"+JSON.stringify(res_new));

$done({body: JSON.stringify(res_new)});