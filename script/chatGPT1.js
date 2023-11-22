var obj = JSON.parse($response.body);


obj.breeze = true;
obj.dalle = true;
obj.code_interpreter = true;
obj.plugins = true;
obj.workspace_gpt_custom_actions = true;
obj.sunshine = true;
obj.browsing = false;

$done({body: JSON.stringify(obj)});
