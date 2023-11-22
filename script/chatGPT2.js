var obj = JSON.parse($response.body);

obj={
    "models": [
        {
            "slug": "text-davinci-002-render-sha",
            "max_tokens": 8191,
            "title": "Default (GPT-3.5)",
            "description": "Our fastest model, great for most everyday tasks.",
            "tags": [
                "gpt3.5"
            ],
            "capabilities": {},
            "product_features": {}
        },
        {
            "slug": "gpt-4",
            "max_tokens": 32767,
            "title": "GPT-4 (All Tools)",
            "description": "Browsing, Advanced Data Analysis, and DALL·E are now built into GPT-4",
            "tags": [
                "gpt4"
            ],
            "capabilities": {},
            "product_features": {
                "attachments": {
                    "type": "retrieval",
                    "accepted_mime_types": [
                        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                        "application/json",
                        "text/x-c++",
                        "text/x-java",
                        "text/x-csharp",
                        "application/msword",
                        "text/x-tex",
                        "application/x-latext",
                        "text/x-c",
                        "text/x-php",
                        "text/plain",
                        "text/markdown",
                        "application/pdf",
                        "text/x-sh",
                        "text/x-script.python",
                        "text/x-typescript",
                        "text/x-ruby",
                        "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                        "text/html",
                        "text/javascript"
                    ],
                    "image_mime_types": [
                        "image/jpeg",
                        "image/png",
                        "image/gif",
                        "image/webp"
                    ],
                    "can_accept_all_mime_types": true
                }
            },
            "enabled_tools": [
                "tools",
                "tools2"
            ]
        },
        {
            "slug": "gpt-4-browsing",
            "max_tokens": 8191,
            "title": "Web Browsing",
            "description": "An experimental model that knows when and how to browse the internet",
            "tags": [
                "gpt4",
                "beta"
            ],
            "capabilities": {},
            "product_features": {},
            "enabled_tools": [
                "tools"
            ]
        },
        {
            "slug": "gpt-4-code-interpreter",
            "max_tokens": 8192,
            "title": "Advanced Data Analysis",
            "description": "An experimental model that can solve tasks by generating Python code and executing it in a Jupyter notebook.\nYou can upload any kind of file, and ask model to analyse it, or produce a new file which you can download.",
            "tags": [
                "gpt4",
                "beta"
            ],
            "capabilities": {},
            "product_features": {
                "attachments": {
                    "type": "code_interpreter",
                    "can_accept_all_mime_types": false
                }
            },
            "enabled_tools": [
                "tools2"
            ]
        },
        {
            "slug": "gpt-4-plugins",
            "max_tokens": 8192,
            "title": "Plugins",
            "description": "An experimental model that knows when and how to use plugins",
            "tags": [
                "gpt4",
                "beta"
            ],
            "capabilities": {},
            "product_features": {},
            "enabled_tools": [
                "tools3"
            ]
        },
        {
            "slug": "gpt-4-gizmo",
            "max_tokens": 32767,
            "title": "GPTs",
            "description": "Browsing, Advanced Data Analysis, and DALL·E are now built into GPT-4",
            "tags": [
                "gpt4",
                "confidential",
                "hidden",
                "plus"
            ],
            "capabilities": {},
            "product_features": {
                "attachments": {
                    "type": "retrieval",
                    "accepted_mime_types": [
                        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                        "application/json",
                        "text/x-c++",
                        "text/x-java",
                        "text/x-csharp",
                        "application/msword",
                        "text/x-tex",
                        "application/x-latext",
                        "text/x-c",
                        "text/x-php",
                        "text/plain",
                        "text/markdown",
                        "application/pdf",
                        "text/x-sh",
                        "text/x-script.python",
                        "text/x-typescript",
                        "text/x-ruby",
                        "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                        "text/html",
                        "text/javascript"
                    ],
                    "image_mime_types": [
                        "image/jpeg",
                        "image/png",
                        "image/gif",
                        "image/webp"
                    ],
                    "can_accept_all_mime_types": true
                }
            },
            "enabled_tools": [
                "tools",
                "tools2"
            ]
        },
        {
            "slug": "gpt-4-magic-create",
            "max_tokens": 32767,
            "title": "GPT Creator",
            "description": "Browsing, Advanced Data Analysis, and DALL·E are now built into GPT-4",
            "tags": [
                "gpt4",
                "confidential",
                "hidden",
                "plus"
            ],
            "capabilities": {},
            "product_features": {
                "attachments": {
                    "type": "retrieval",
                    "accepted_mime_types": [
                        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                        "application/json",
                        "text/x-c++",
                        "text/x-java",
                        "text/x-csharp",
                        "application/msword",
                        "text/x-tex",
                        "application/x-latext",
                        "text/x-c",
                        "text/x-php",
                        "text/plain",
                        "text/markdown",
                        "application/pdf",
                        "text/x-sh",
                        "text/x-script.python",
                        "text/x-typescript",
                        "text/x-ruby",
                        "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                        "text/html",
                        "text/javascript"
                    ],
                    "image_mime_types": [
                        "image/jpeg",
                        "image/png",
                        "image/gif",
                        "image/webp"
                    ],
                    "can_accept_all_mime_types": true
                }
            },
            "enabled_tools": [
                "tools",
                "tools2"
            ]
        },
        {
            "slug": "gpt-4-dalle",
            "max_tokens": 4095,
            "title": "DALL·E 3",
            "description": "Try out GPT-4 with DALL·E 3",
            "tags": [
                "gpt4",
                "beta"
            ],
            "capabilities": {},
            "product_features": {}
        }
    ],
    "categories": [
        {
            "category": "gpt_3.5",
            "human_category_name": "GPT-3.5",
            "subscription_level": "free",
            "default_model": "text-davinci-002-render-sha",
            "code_interpreter_model": "text-davinci-002-render-sha-code-interpreter",
            "plugins_model": "text-davinci-002-render-sha-plugins"
        },
        {
            "category": "gpt_4",
            "human_category_name": "GPT-4",
            "subscription_level": "plus",
            "default_model": "gpt-4",
            "browsing_model": "gpt-4-browsing",
            "code_interpreter_model": "gpt-4-code-interpreter",
            "plugins_model": "gpt-4-plugins",
            "dalle_model": "gpt-4-dalle"
        }
    ]
}

$done({body: JSON.stringify(obj)});
