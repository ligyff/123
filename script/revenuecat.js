var res_new = {};
var res_old = JSON.parse(typeof $response != "undefined" && $response.body || null);

console.log("原始数据--------" + JSON.stringify(res_old));

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
    console.log("StressWatch");
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
} else if (bundleId === 'com.floatingislandapps.grow') {
    console.log("Grow");
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
} else if (bundleId === 'com.neybox.Pillow') {
    console.log("Pillow");
    res_new = {
        "request_date_ms": 1709216291274,
        "request_date": "2024-02-29T14:18:11Z",
        "subscriber": {
            "non_subscriptions": {},
            "first_seen": "2023-12-18T01:21:48Z",
            "original_application_version": "206",
            "other_purchases": {},
            "management_url": "https://apps.apple.com/account/subscriptions",
            "subscriptions": {
                "com.neybox.pillow.premium.year": {
                    "original_purchase_date": "2024-02-29T12:36:23Z",
                    "expires_date": "2099-03-07T12:36:22Z",
                    "is_sandbox": false,
                    "refunded_at": null,
                    "store_transaction_id": "520001628931954",
                    "unsubscribe_detected_at": "2024-02-29T12:44:06Z",
                    "grace_period_expires_date": null,
                    "period_type": "trial",
                    "purchase_date": "2099-02-29T12:36:22Z",
                    "billing_issues_detected_at": null,
                    "ownership_type": "PURCHASED",
                    "store": "app_store",
                    "auto_resume_date": null
                }
            },
            "entitlements": {
                "premium": {
                    "grace_period_expires_date": null,
                    "purchase_date": "2024-02-29T12:36:22Z",
                    "product_identifier": "com.neybox.pillow.premium.year",
                    "expires_date": "2099-03-07T12:36:22Z"
                }
            },
            "original_purchase_date": "2019-10-09T18:11:11Z",
            "original_app_user_id": "$RCAnonymousID:a9a737ebd8dd4ed6ae0eca1d9ee0f272",
            "last_seen": "2024-02-29T12:02:01Z"
        }
    }
}


console.log("修改数据--------" + JSON.stringify(res_new));

$done({body: JSON.stringify(res_new)});