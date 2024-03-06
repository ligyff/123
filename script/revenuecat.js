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

    res_old.subscriber.subscriptions.grow_1y_128.expires_date = "9999-01-05T03:52:21Z";
    res_old.subscriber.entitlements["grow.pro"].expires_date = "9999-01-05T03:52:21Z";
    res_new = res_old
} else if (bundleId === 'com.neybox.Pillow') {
    console.log("Pillow");

    res_old.subscriber.subscriptions["com.neybox.pillow.premium.year"].expires_date = "9999-03-07T12:36:22Z";
    res_old.subscriber.entitlements.premium.expires_date = "9999-03-07T12:36:22Z";
    res_new = res_old
} else if (bundleId === 'com.floatingislandapps.happydays') {
    console.log("happydays");

    res_new = {
        "offerings": [
            {
                "metadata": null,
                "description": "standard",
                "identifier": "default",
                "packages": [
                    {
                        "platform_product_identifier": "happy_099_1m",
                        "identifier": "$rc_monthly"
                    },
                    {
                        "platform_product_identifier": "happy_449_1y",
                        "identifier": "$rc_annual"
                    },
                    {
                        "platform_product_identifier": "happy_999_lifetime",
                        "identifier": "$rc_lifetime"
                    }
                ]
            },
            {
                "metadata": null,
                "description": "Origin Price",
                "identifier": "origin",
                "packages": [
                    {
                        "platform_product_identifier": "happy_999_lifetime_original",
                        "identifier": "$rc_lifetime"
                    }
                ]
            }
        ],
        "current_offering_id": "default"
    }

}

console.log("修改数据--------" + JSON.stringify(res_new));

$done({body: JSON.stringify(res_new)});