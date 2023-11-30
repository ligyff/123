var obj = JSON.parse($response.body);

obj.data.user.vipInfo = {
    "level": "1",
    "valid": true,
    "expiredTime": 1832358790000
};
obj.data.user.vipLevel = "1";
obj.data.user.medalList =[
    {
        "imgUrl": "http://img.qwapp.top/cover/20200424/o_1587720799676.png",
        "id": 1,
        "endTime": "2024-11-23 18:46:30",
        "name": "大魔王"
    }
];
obj.data.user.vipMedal = {
    "imgUrl": "http://img.qwapp.top/cover/20200424/o_1587720799676.png",
    "id": 1,
    "endTime": "2024-11-23 18:46:30",
    "isExpired": false,
    "name": "大魔王"
};
obj.data.user.privilegeList = [
    {
        "action": "play",
        "effectObject": "video",
        "id": null,
        "createTimeStr": "",
        "updateTime": null,
        "function": "originalPainting",
        "func": "originalPainting",
        "endTime": 1732358790000,
        "description": "解锁原画",
        "createTime": null,
        "icon": "jiesuoyuanhua"
    },
    {
        "action": "sale",
        "effectObject": "mall",
        "id": null,
        "createTimeStr": "",
        "updateTime": null,
        "function": "mallDiscount",
        "func": "mallDiscount",
        "endTime": 1732358790000,
        "description": "龙醇商城九折",
        "createTime": null,
        "icon": "longchunshangcheng"
    },
    {
        "action": "write",
        "effectObject": "article",
        "id": null,
        "createTimeStr": "",
        "updateTime": null,
        "function": "highLight",
        "func": "highLight",
        "endTime": 1732358790000,
        "description": "高亮发帖",
        "createTime": null,
        "icon": "gaoliangfatie"
    },
    {
        "action": "show",
        "effectObject": "nickName",
        "id": null,
        "createTimeStr": "",
        "updateTime": null,
        "function": "nameHighLight",
        "func": "nameHighLight",
        "endTime": 1732358790000,
        "description": "高亮昵称",
        "createTime": null,
        "icon": "gaoliangnicheng"
    },
    {
        "action": "write",
        "effectObject": "comment",
        "id": null,
        "createTimeStr": "",
        "updateTime": null,
        "function": "highLight",
        "func": "highLight",
        "endTime": 1732358790000,
        "description": "高亮评论回复",
        "createTime": null,
        "icon": "huifu"
    },
    {
        "action": "send",
        "effectObject": "danmu",
        "id": null,
        "createTimeStr": "",
        "updateTime": null,
        "function": "superBarrageBlue",
        "func": "superBarrageBlue",
        "endTime": 1732358790000,
        "description": "超级弹幕",
        "createTime": null,
        "icon": "chaojidanmu"
    },
    {
        "action": "play",
        "effectObject": "video",
        "id": null,
        "createTimeStr": "",
        "updateTime": null,
        "function": "vipVideo",
        "func": "vipVideo",
        "endTime": 1732358790000,
        "description": "勋章专享剧集",
        "createTime": null,
        "icon": "zhuanxiangjuji"
    },
    {
        "action": "play",
        "effectObject": "growth",
        "id": null,
        "createTimeStr": "",
        "updateTime": null,
        "function": "0.4",
        "func": "0.4",
        "endTime": 1732358790000,
        "description": "看剧经验+40%",
        "createTime": null,
        "icon": "jingyanzhijiacheng"
    },
    {
        "action": "play",
        "effectObject": "video",
        "id": null,
        "createTimeStr": "",
        "updateTime": null,
        "function": "noLimit",
        "func": "noLimit",
        "endTime": 1732358790000,
        "description": "看剧无限制",
        "createTime": null,
        "icon": "kanjuwuxianzhi"
    },
    {
        "action": "play",
        "effectObject": "video",
        "id": null,
        "createTimeStr": "",
        "updateTime": null,
        "function": "noAd",
        "func": "noAd",
        "endTime": 1732358790000,
        "description": "看剧无广告",
        "createTime": null,
        "icon": "kanjuwuguanggao"
    }
];
obj.data.user.changedValue=15;


$done({body: JSON.stringify(obj)});
