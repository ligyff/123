var obj = JSON.parse($response.body);

const id = obj.account_ordering;
obj.accounts.default.account.plan_type = "plus";
obj.accounts.default.account.has_previously_paid_subscription = true;
obj.accounts.default.account.processor = {
    "a001": {
        "has_customer_object": true
    },
    "b001": {
        "has_transaction_history": false
    },
    "c001": {
        "has_transaction_history": false
    }
};

obj.accounts.default.features = [
    "dalle_generate_single_prompt",
    "arkose_gpt_35_experiment",
    "browsing_available",
    "disable_plus_upgrade_ui",
    "dalle_3",
    "breeze_available",
    "arkose_enabled",
    "bizmo_settings",
    "conversation_bot_arkose",
    "shareable_links",
    "starter_prompts",
    "plugins_available",
    "unified_tool_ui",
    "all_tools",
    "invite_referral",
    "code_interpreter_available",
    "disable_team_upgrade_ui",
    "allow_url_thread_creation",
    "gizmo_live",
    "gizmo_create",
    "model_switcher",
    "gizmo_ui",
    "beta_features",
    "new_plugin_oauth_endpoint",
    "chat_preferences_available",
    "disable_upgrade_ui",
    "privacy_policy_nov_2023",
    "user_settings_announcements"
];

obj.accounts.default.entitlement = {
    "subscription_id": "3e7d7b26-3c0b-401e-b361-123777666cqy",
    "has_active_subscription": true,
    "subscription_plan": "chatgptplusplan",
    "expires_at": "2029-12-13T13:43:25+00:00"
};

obj.accounts.default.last_active_subscription = {
    "subscription_id": "3e7d7b26-3c0b-401e-b361-123777666cqy",
    "purchase_origin_platform": "chatgpt_not_purchased",
    "will_renew": true
};

obj.accounts["dcd05b61-c00a-4b72-abe5-43f236c3093f"] = obj.accounts.default;


$done({body: JSON.stringify(obj)});
