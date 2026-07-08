export const PROFILE_SUGGESTIONS = {
  services: {
    Electrical: [
      "raflagnir",
      "rafvirki",
      "brunakerfi",
      "öryggiskerfi",
      "lýsing",
      "viðhald",
      "þjónusta",
      "hleðslustöðvar",
      "töflusmíði",
      "rafmagnseftirlit"
    ],
    "IT / Web / Software": [
      "vefsíðugerð",
      "vefhönnun",
      "hugbúnaðarþróun",
      "kerfisþróun",
      "vefverslun",
      "aðgengi",
      "CMS",
      "gagnagrunnar",
      "viðhald",
      "ráðgjöf"
    ],
    Cleaning: [
      "Office cleaning",
      "School cleaning",
      "Facility cleaning",
      "Window cleaning",
      "Deep cleaning",
      "Floor care",
      "Municipal cleaning",
      "Regular cleaning contracts"
    ],
    Transport: [
      "Passenger transport",
      "Goods transport",
      "Healthcare transport",
      "School transport",
      "Shuttle services",
      "Delivery services",
      "Framework transport services"
    ],
    Construction: [
      "jarðvinna",
      "gatnagerð",
      "vegagerð",
      "malbikun",
      "brúargerð",
      "lagnavinna",
      "framkvæmdir",
      "viðhald",
      "steypa",
      "húsbyggingar",
      "þakvinna"
    ]
  },
  includeKeywords: {
    Electrical: [
      "rafmagn",
      "rafvirki",
      "brunakerfi",
      "hleðslustöð",
      "öryggiskerfi",
      "myndavélakerfi",
      "lýsing",
      "viðhald",
      "lagnir",
      "neyðarlýsing"
    ]
  }
};

export const DEFAULT_PROFILE = {
  companyName: "RafFix ehf.",
  contactEmail: "owner@raffix.is",
  website: "https://raffix.is",
  industry: "Electrical",
  services: ["electrical installation", "maintenance", "fire alarm systems", "EV chargers"],
  includeKeywords: ["charging", "inspection", "public buildings"],
  excludeKeywords: ["telecom", "snow removal"],
  locations: ["Reykjavík", "Capital Area", "Suðurnes", "Remote / Online"],
  minProjectValue: 500000,
  maxProjectValue: 30000000,
  allowUnknownValue: true,
  reportFrequency: "weekly",
  reportDay: "monday",
  deadlineReminders: true,
  includeLowConfidence: false,
  autoAlertMode: "auto_safe_only"
};

export function createEmptyProfile(userEmail = "") {
  return {
    companyName: "",
    contactEmail: userEmail || "",
    website: "",
    industry: "",
    services: [],
    includeKeywords: [],
    excludeKeywords: [],
    locations: [],
    baseLocation: "",
    serviceAreas: [],
    willingToTravel: false,
    nationalProjects: false,
    remoteProjects: false,
    minimumProjectValueForTravel: "",
    minProjectValue: "",
    maxProjectValue: "",
    allowUnknownValue: true,
    reportFrequency: "weekly",
    reportDay: "monday",
    deadlineReminders: true,
    includeLowConfidence: false,
    autoAlertMode: "auto_safe_only"
  };
}
