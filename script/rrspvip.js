var obj = JSON.parse($response.body);

    obj.data.user.vipInfo = {
        "level": "5",
        "valid": true,
        "expiredTime": "2099-05-26T05:05:04Z"
    },
    obj.data.user.vipLevel ="5"

$done({body: JSON.stringify(obj)});
