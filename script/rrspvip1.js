var obj = JSON.parse($response.body);

obj.data.sortedItems = [
    {
        "qualityDescription": "高清",
        "qualityCode": "SD",
        "canPlay": true,
        "initialQuality": true,
        "canShowLogin": true,
        "canShowVip": false
    },
    {
        "qualityDescription": "超清",
        "qualityCode": "HD",
        "canPlay": true,
        "initialQuality": false,
        "canShowLogin": true,
        "canShowVip": false
    },
    {
        "qualityDescription": "AI原画",
        "qualityCode": "AI_OD",
        "canPlay": true,
        "initialQuality": false,
        "canShowLogin": true,
        "canShowVip": true
    },
    {
        "qualityDescription": "4K",
        "qualityCode": "UHD4K",
        "canPlay": true,
        "initialQuality": false,
        "canShowLogin": true,
        "canShowVip": true
    }
];
obj.data.watchInfo.sortedItems = [
    {
        "qualityDescription": "高清",
        "qualityCode": "SD",
        "canPlay": true,
        "initialQuality": true,
        "canShowLogin": true,
        "canShowVip": false
    },
    {
        "qualityDescription": "超清",
        "qualityCode": "HD",
        "canPlay": true,
        "initialQuality": false,
        "canShowLogin": true,
        "canShowVip": false
    },
    {
        "qualityDescription": "AI原画",
        "qualityCode": "AI_OD",
        "canPlay": true,
        "initialQuality": false,
        "canShowLogin": true,
        "canShowVip": true
    }
]

$done({body: JSON.stringify(obj)});
