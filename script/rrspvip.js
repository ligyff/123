var obj = JSON.parse($response.body);

    obj.data.user.vipInfo = {
        "level": "5",
        "valid": true,
        "expiredTime": "2099-05-26"
    },
    obj.data.user.vipLevel ="5"

$done({body: JSON.stringify(obj)});
