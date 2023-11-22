var obj = JSON.parse($response.body);


obj={
    "beta_settings": {
        "plugins": true,
        "browsing": true,
        "code_interpreter": true,
        "breeze": true
    },
    "announcements": {
        "oai/apps/hasSeenOnboarding": "2023-10-31T11:21:24.759014",
        "oai/apps/hasSeenGptVisionAnnouncement/2023-09-18": "2023-11-01T03:39:20.738479",
        "oai/apps/hasSeenPluginsDisclaimer": "2023-11-03T08:34:12.174472",
        "oai/apps/hasUserContextFirstTime/2023-06-29": "2023-11-03T08:36:35.229433",
        "oai/apps/hasSeenGizmoGPTsOnboarding": "2023-11-10T06:39:30.958540",
        "oai/apps/hasSeenGizmoOnboarding": "2023-11-10T07:01:29.126550"
    },
    "eligible_announcements": [
        "oai/apps/hasSeenMultiToolAnnouncement",
        "oai/apps/hasSeenLocaleBanner",
        "oai/apps/hasSeenTemporaryChatOnboarding",
        "oai/apps/hasSeenMemoryOnboarding"
    ],
    "settings": {
        "sunshine": true
    }
}


$done({body: JSON.stringify(obj)});
