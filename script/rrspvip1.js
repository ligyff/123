var obj = JSON.parse($response.body);

obj.data.sortedItems = [
    {
        "qualityDescription": "高清",
        "qualityCode": "SD",
        "canPlay": true,
        "initialQuality": false,
        "canShowLogin": false,
        "canShowVip": false
    },
    {
        "qualityDescription": "超清",
        "qualityCode": "HD",
        "canPlay": true,
        "initialQuality": false,
        "canShowLogin": false,
        "canShowVip": false
    },
    {
        "qualityDescription": "AI原画",
        "qualityCode": "AI_OD",
        "canPlay": true,
        "initialQuality": true,
        "canShowLogin": false,
        "canShowVip": true
    }
],
    obj.data.watchInfo.m3u8.sortedItems=[
        {
            "qualityDescription": "高清",
            "qualityCode": "SD",
            "canPlay": true,
            "initialQuality": false,
            "canShowLogin": false,
            "canShowVip": false
        },
        {
            "qualityDescription": "超清",
            "qualityCode": "HD",
            "canPlay": true,
            "initialQuality": false,
            "canShowLogin": false,
            "canShowVip": false
        },
        {
            "qualityDescription": "AI原画",
            "qualityCode": "AI_OD",
            "canPlay": true,
            "initialQuality": true,
            "canShowLogin": false,
            "canShowVip": true
        }
    ],

    $done({body: JSON.stringify(obj)});
