var obj = JSON.parse($response.body);

$done({body: JSON.stringify(obj).replace(false, true)});
