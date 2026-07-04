/* VerkRadar MVP single-page app.
   No backend required. Uses localStorage and mock data.
   Later: replace storage functions with Supabase queries.
*/

const SUPABASE_URL = "https://asojxjbsgqbfpbepojzh.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFzb2p4amJzZ3FiZnBiZXBvanpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAwNTU2NjgsImV4cCI6MjA5NTYzMTY2OH0.yPA34VbqWqKrBPespmHr5AojYzjhy3kGRxswO9XdAd0";

const supabaseClient =
  window.supabase && SUPABASE_URL && SUPABASE_ANON_KEY && SUPABASE_ANON_KEY !== "PASTE_MY_ANON_PUBLIC_KEY_HERE"
    ? window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
    : null;

const MISSING_DEADLINE_RISK = "Deadline not available in feed — verify on source page.";
const EXTRACTED_PROJECT_DEADLINE_RISK = "No formal tender deadline extracted — verify source article.";

const STORAGE_KEYS = {
  profile: "verkradar_profile",
  saved: "verkradar_saved_opportunities",
  ignored: "verkradar_ignored_opportunities",
  language: "verkradar_language"
};

const translations = {
  is: {
    navDashboard: "Mælaborð",
    navReport: "Yfirlit",
    navPricing: "Verð",
    navSettings: "Stillingar",
    navHowItWorks: "Hvernig virkar þetta",
    navSampleReport: "Sýnishorn",
    login: "Innskráning",
    logout: "Skrá út",
    getStarted: "Byrja",
    createProfile: "Stofna prófíl",
    companyProfile: "Fyrirtækjaprófíll",
    noCompanyProfile: "Enginn fyrirtækjaprófíll",
    openMenu: "Opna valmynd",
    closeMenu: "Loka valmynd",
    privacyPolicy: "Persónuvernd",
    termsOfService: "Skilmálar",
    dataSources: "Gagnaheimildir",
    cookies: "Vafrakökur",
    security: "Öryggi",
    footerText: "Vöktun útboða og viðskiptatækifæra fyrir fyrirtæki. VerkRadar hjálpar ykkur að finna og yfirfara opinber tækifæri, en frumgögn eru alltaf endanleg heimild.",
    loadingLabel: "Hleð VerkRadar",
    heroEyebrow: "Útboðsgreind fyrir verktaka og þjónustufyrirtæki",
    heroTitle: "Finnið verðmæt útboð áður en skilafresturinn rennur út.",
    heroText: "VerkRadar vaktar útboðsvefi, sveitarfélög og opinberar heimildir og raðar tækifærum eftir því hvað skiptir ykkar fyrirtæki máli.",
    createFreeDemoProfile: "Fá ókeypis prufu-yfirlit",
    viewSampleReport: "Skoða sýnishorn",
    proofStrong: "Fyrir verktaka, iðnfyrirtæki og þjónustuaðila.",
    proofText: "Vöktun á opinberum heimildum, sveitarfélögum og útboðsvefjum - sett fram sem forgangsraðað yfirlit.",
    bestOpenMatch: "Vöktun í dag",
    tender: "Útboð",
    deadlineRisk: "Rennur út fljótlega",
    daysLeft: "{count} dagar eftir",
    problemEyebrow: "Vandinn",
    problemTitle: "Útboð tapast oft áður en tilboðsgerðin byrjar.",
    problemOneTitle: "Útboð birtast á mörgum mismunandi stöðum.",
    problemOneText: "Sveitarfélög, stofnanir og útboðsvefir birta tækifæri á ólíkum síðum og í ólíkum sniðum.",
    problemTwoTitle: "Skilafrestir geta verið stuttir.",
    problemTwoText: "Það tekur tíma að finna hvað passar við ykkar verkflokka, svæði og stærð verkefna.",
    targetEyebrow: "Fyrir hverja?",
    targetTitle: "Byggt fyrir íslensk fyrirtæki sem þurfa að finna rétt verkefni fyrr.",
    targetText: "VerkRadar hentar fyrirtækjum sem vilja vakta útboð, verðfyrirspurnir og verkefnavísbendingar án þess að opna sömu vefi handvirkt á hverjum degi.",
    solutionEyebrow: "Lausnin",
    solutionTitle: "Eitt skýrt yfirlit í stað dreifðrar leitar.",
    solutionText: "VerkRadar breytir útboðshávaða í forgangsraðaðan lista yfir tækifæri sem fyrirtækið ætti að skoða.",
    createProfileStep: "1. Stofnið prófíl",
    createProfileStepText: "Segið VerkRadar hvaða þjónustu, svæði, lykilorð og verkefnastærðir henta ykkur.",
    matchProjectsStep: "2. Samsvara verkefnum",
    matchProjectsStepText: "Kerfið metur hvert tækifæri gagnvart fyrirtækjaprófílnum.",
    getReportStep: "3. Fáið yfirlit",
    getReportStepText: "Fáið skýrt yfirlit með frestum, ástæðum samsvörunar og næstu skrefum.",
    sampleReportEyebrow: "Sýnishorn",
    sampleReportTitle: "Stuttlisti sem sýnir hvað er þess virði að skoða.",
    sampleReportText: "Sýnishornið sýnir hvernig VerkRadar raðar útboðum og verkefnum eftir þjónustu, svæði, fresti og ástæðum samsvörunar.",
    sourceDisclaimer: "VerkRadar hjálpar til við að forgangsraða tækifærum. Upprunaleg útboðsgögn eru alltaf endanleg heimild.",
    tryDemoTitle: "Prófið sýnimælaborðið.",
    tryDemoText: "Hlaðið sýnifyrirtæki og sjáið hvernig samsvörunin virkar.",
    loadDemoCompany: "Hlaða sýnifyrirtæki",
    authLoginTitle: "Skrá inn í VerkRadar",
    authLoginSubtitle: "Fáið aðgang að mælaborði, vistuðum tækifærum og vikuyfirlitum.",
    email: "Netfang",
    password: "Lykilorð",
    forgotPassword: "Gleymt lykilorð?",
    loggingIn: "Skrái inn...",
    newToVerkRadar: "Ný hjá VerkRadar?",
    createAccount: "Stofna aðgang",
    createAccountTitle: "Stofna VerkRadar aðgang",
    createAccountSubtitle: "Byrjið á að stofna aðgang. Síðan stofnið þið fyrirtækjaprófíl.",
    creating: "Stofna...",
    alreadyHaveAccount: "Ertu þegar með aðgang?",
    passwordReset: "Endurstilla lykilorð",
    resetPasswordTitle: "Endurstilla lykilorð",
    resetPasswordSubtitle: "Sláið inn netfang og VerkRadar sendir öruggan hlekk ef aðgangur er til.",
    sending: "Sendi...",
    sendResetLink: "Senda hlekk",
    rememberedPassword: "Manstu lykilorðið?",
    backToLogin: "Til baka í innskráningu",
    newPassword: "Nýtt lykilorð",
    chooseNewPassword: "Veldu nýtt lykilorð",
    resetPasswordHelp: "Settu nýtt lykilorð fyrir VerkRadar aðganginn. Ef hlekkurinn er útrunninn skaltu biðja um nýjan.",
    confirmNewPassword: "Staðfesta nýtt lykilorð",
    updating: "Uppfæri...",
    updatePassword: "Uppfæra lykilorð",
    needNewLink: "Þarftu nýjan hlekk?",
    sendAnotherResetLink: "Senda annan hlekk",
    onboarding: "Uppsetning",
    onboardingTitle: "Stofna fyrirtækjaprófíl",
    onboardingText: "Þetta notar samsvörunarkerfið til að finna viðeigandi tækifæri.",
    companyBasics: "1. Grunnupplýsingar",
    companyName: "Fyrirtækisnafn",
    contactEmail: "Tengiliðanetfang",
    website: "Vefsíða",
    industry: "Atvinnugrein",
    servicesAndKeywords: "2. Þjónusta og leitarorð",
    servicesHint: "Byrjið á þjónustunni sem þið viljið raunverulega bjóða í.",
    servicesLabel: "Hvaða þjónustu bjóðið þið? Veljið tillögur eða sláið inn eigin, aðskildar með kommu.",
    servicesHelper: "Skráið þjónustuna sem fyrirtækið selur. Nákvæmari þjónusta gefur betri samsvaranir.",
    extraWords: "Aukaorð sem VerkRadar á að leita að í útboðum.",
    includeKeywordsHelper: "Notið orð sem birtast oft í tækifærum sem þið viljið fá.",
    excludeWords: "Orð sem ættu að lækka eða fjarlægja slæmar samsvaranir.",
    excludeKeywordsHelper: "Orð sem ættu að lækka eða fjarlægja slæmar samsvaranir.",
    suggestedServicesFor: "Tillögur að þjónustu fyrir {industry}",
    suggestedKeywordsFor: "Tillögur að leitarorðum fyrir {industry}",
    selectIndustryForServices: "Veljið atvinnugrein til að sjá þjónustutillögur",
    selectIndustryForKeywords: "Veljið atvinnugrein til að sjá leitarorðatillögur",
    locationsTitle: "3. Svæði",
    locationsHint: "Notið Allt landið fyrir landsdekkandi útboð. Notið ferðastillingar ef þið getið boðið utan heimasvæðis fyrir rétt verkefni.",
    baseLocation: "Heimasvæði",
    baseLocationPlaceholder: "Dæmi: Austurland",
    serviceAreas: "Þjónustusvæði, aðskilin með kommu",
    serviceAreasPlaceholder: "Dæmi: Austurland, Allt landið",
    travelScope: "Ferðir og umfang",
    willingToTravel: "Tilbúin að ferðast fyrir rétt verkefni",
    includeNational: "Sýna landsdekkandi tækifæri",
    includeRemote: "Sýna fjarvinnu / netverkefni",
    minimumTravelValue: "Lágmarksverðmæti fyrir ferðalög",
    projectSize: "4. Verkefnastærð",
    minimumValue: "Lágmarksverðmæti",
    maximumValue: "Hámarksverðmæti",
    showUnknownValue: "Sýna tækifæri þó verðmæti vanti",
    reportPreferences: "5. Yfirlitsstillingar",
    frequency: "Tíðni",
    weekly: "Vikulega",
    daily: "Daglega",
    reportDay: "Dagur yfirlits",
    deadlineReminders: "Áminningar um skilafresti",
    includeLowConfidence: "Sýna óvissar samsvaranir",
    saveProfile: "Vista prófíl",
    saving: "Vista...",
    saved: "Vistað",
    dashboard: "Mælaborð",
    welcomeCompany: "Velkomin, {company}",
    dashboardIntro: "Forgangsraðaðar tækifærasamsvaranir út frá þjónustu, svæðum og leitarorðum. {refresh}",
    matchesLastRefreshed: "Síðast uppfært {time}.",
    matchesAutoRefresh: "Samsvaranir uppfærast sjálfkrafa eftir vistun prófíls.",
    refreshMatches: "Uppfæra samsvaranir",
    refreshing: "Uppfæri...",
    viewWeeklyReport: "Skoða yfirlit",
    strongMatches: "Sterkar samsvaranir",
    closingSoon: "Rennur út fljótlega",
    savedLabel: "Vistað",
    totalPotentialValue: "Áætlað heildarverðmæti",
    searchOpportunities: "Leita í tækifærum...",
    savedOnly: "Aðeins vistað",
    improveProfile: "Bæta prófíl",
    includeNationalOpportunities: "Sýna landsdekkandi tækifæri",
    showAllStoredMatches: "Sýna allar samsvaranir",
    inspectAllOpportunities: "Skoða öll tækifæri",
    details: "Nánar",
    save: "Vista",
    ignore: "Hunsa",
    originalLanguage: "Upprunalegt tungumál",
    extractedProject: "Útdregið verkefni",
    reportTitle: "Útboðs- og verkefnayfirlit",
    weeklyReport: "Yfirlit",
    saveReport: "Vista yfirlit",
    savingReport: "Vista...",
    downloadPdf: "Sækja PDF",
    copyReport: "Afrita yfirlit",
    reportArchive: "Yfirlitssafn",
    savedReports: "Vistuð yfirlit",
    loadingSavedReports: "Hleð vistuð yfirlit...",
    noSavedReports: "Engin vistuð yfirlit enn.",
    viewReport: "Skoða yfirlit",
    closeReport: "Loka yfirliti",
    generatedBy: "Útbúið af VerkRadar",
    reportForCompany: "Útboðs- og verkefnayfirlit fyrir {company}",
    openTenders: "Opin útboð / verðfyrirspurnir",
    upcomingOpportunities: "Möguleg væntanleg tækifæri",
    openTendersDescription: "Skýr útboðs- eða verðfyrirspurnarmerki. Yfirfarið frumgögn áður en brugðist er við.",
    upcomingDescription: "Væntanleg útboðs- eða verkefnamerki með skýrum vísbendingum.",
    reportFooter: "VerkRadar hjálpar til við að forgangsraða yfirferð opinberra tækifæra. Staðfestið alltaf útboðsgögn, skilafresti, kröfur og hæfi á upprunalegri heimild áður en brugðist er við.",
    buyer: "Kaupandi",
    source: "Heimild",
    description: "Lýsing",
    requirements: "Kröfur",
    noSpecificRequirements: "Engar sérstakar kröfur skráðar.",
    noDescription: "Engin lýsing tiltæk.",
    noMatchReasons: "Engar ástæður samsvörunar tiltækar.",
    matchReasons: "Ástæður samsvörunar",
    opportunityInfo: "Upplýsingar um tækifæri",
    extraction: "Útdráttur",
    sourceArticle: "Heimildargrein",
    parentArticle: "Upprunagrein",
    openSourceArticle: "Opna heimildargrein",
    extractedRegion: "Útdregið svæði",
    projectNumber: "Verknúmer",
    tenderState: "Staða útboðs",
    quality: "Gæði",
    category: "Flokkur",
    type: "Tegund",
    published: "Birt",
    cpv: "CPV",
    recommendedNextSteps: "Ráðlögð næstu skref",
    noMajorRisks: "Engar stórar áhættur greindar í þessum gögnum.",
    openSourceAndConfirm: "Opnið upprunalega heimild og staðfestið hæfi.",
    removeFromSaved: "Fjarlægja úr vistuðum",
    saveOpportunity: "Vista tækifæri",
    markNotRelevant: "Merkja sem ekki viðeigandi",
    publicProcurement: "Opinbert útboð",
    area: "Svæði",
    deadline: "Skilafrestur",
    estimatedValue: "Áætlað verðmæti",
    notFound: "Fannst ekki",
    notListed: "Ekki gefið upp",
    unknownBuyer: "Óþekktur kaupandi",
    allIceland: "Allt landið",
    whyThisMatters: "Af hverju þetta gæti skipt máli",
    risksToCheck: "Atriði til að staðfesta",
    openSource: "Opna heimild",
    sourceLinkMissing: "Heimildartengil vantar",
    strongMatch: "Sterk samsvörun",
    goodMatch: "Góð samsvörun",
    possibleMatch: "Möguleg samsvörun",
    weakMatch: "Veik samsvörun",
    confirmedTender: "Staðfest útboð",
    likelyOpportunity: "Líklegt tækifæri",
    earlySignal: "Væntanlegt tækifæri",
    needsReview: "Þarfnast staðfestingar",
    tenderAwarded: "Útboði lokið / samið",
    tenderAlreadyAnnounced: "Útboð þegar auglýst",
    upcomingTender: "Væntanlegt útboð",
    projectSignal: "Verkefnavísbending",
    nationalOpportunity: "Landsdekkandi tækifæri",
    localMatch: "Staðbundin samsvörun",
    mentionsService: "Nefnir þjónustu ykkar: {value}",
    containsKeyword: "Inniheldur leitarorð: {value}",
    procurement: "innkaup"
  },
  en: {
    navDashboard: "Dashboard",
    navReport: "Report",
    navPricing: "Pricing",
    navSettings: "Settings",
    navHowItWorks: "How it works",
    navSampleReport: "Sample report",
    login: "Login",
    logout: "Logout",
    getStarted: "Get started",
    createProfile: "Create profile",
    companyProfile: "Company profile",
    noCompanyProfile: "No company profile",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",
    dataSources: "Data Sources",
    cookies: "Cookies",
    security: "Security",
    footerText: "Tender and opportunity monitoring for businesses. VerkRadar helps you find and review public opportunities, but source documents remain the authority.",
    loadingLabel: "Loading VerkRadar",
    heroEyebrow: "Tender intelligence for working contractors",
    heroTitle: "Stop losing valuable jobs to tabs you never opened.",
    heroText: "VerkRadar checks tender portals, municipal pages and public sources, then ranks the jobs worth pricing before the deadline moves on.",
    createFreeDemoProfile: "Get a free trial report",
    viewSampleReport: "View sample report",
    proofStrong: "Contractors find relevant opportunities faster.",
    proofText: "Top matches often include tenders outside the main databases.",
    bestOpenMatch: "New opportunities",
    tender: "Tender",
    deadlineRisk: "Deadline risk",
    daysLeft: "{count} days left",
    problemEyebrow: "The problem",
    problemTitle: "Opportunities are often lost before bidding starts.",
    problemOneTitle: "Deadlines show up after your crew is already booked.",
    problemOneText: "A short response window becomes a scramble, or a valuable contract never gets priced.",
    problemTwoTitle: "The search takes longer than the go/no-go call.",
    problemTwoText: "Owners spend hours opening low-fit tenders instead of seeing value, location, requirements and match reasons in one view.",
    targetEyebrow: "Who it is for",
    targetTitle: "Built for Icelandic companies that need to find the right jobs earlier.",
    targetText: "VerkRadar is for teams that want to monitor tenders, quote requests and project signals without checking the same websites manually every day.",
    solutionEyebrow: "The solution",
    solutionTitle: "One clear report instead of scattered searching.",
    solutionText: "VerkRadar turns tender noise into a ranked list of opportunities your business should actually check.",
    createProfileStep: "1. Create profile",
    createProfileStepText: "Tell VerkRadar your services, locations, keywords and project size.",
    matchProjectsStep: "2. Match projects",
    matchProjectsStepText: "The system scores each opportunity against your business profile.",
    getReportStep: "3. Get report",
    getReportStepText: "Receive a clear weekly report with deadlines and next steps.",
    sampleReportEyebrow: "Sample report",
    sampleReportTitle: "A shortlist that shows what is worth checking.",
    sampleReportText: "Preview how VerkRadar ranks tenders and projects by services, region, deadline and match reasons.",
    sourceDisclaimer: "VerkRadar helps prioritize opportunity review. Original tender documents are always the final authority.",
    tryDemoTitle: "Try the demo dashboard now.",
    tryDemoText: "Load a sample company profile and see how the matching works.",
    loadDemoCompany: "Load demo company",
    authLoginTitle: "Login to VerkRadar",
    authLoginSubtitle: "Access your company dashboard, saved opportunities and weekly reports.",
    email: "Email",
    password: "Password",
    forgotPassword: "Forgot password?",
    loggingIn: "Logging in...",
    newToVerkRadar: "New to VerkRadar?",
    createAccount: "Create account",
    createAccountTitle: "Create your VerkRadar account",
    createAccountSubtitle: "Start by creating an account. Then you’ll create your company profile.",
    creating: "Creating...",
    alreadyHaveAccount: "Already have an account?",
    passwordReset: "Password reset",
    resetPasswordTitle: "Reset your password",
    resetPasswordSubtitle: "Enter your email and VerkRadar will send a secure reset link if the account exists.",
    sending: "Sending...",
    sendResetLink: "Send reset link",
    rememberedPassword: "Remembered your password?",
    backToLogin: "Back to login",
    newPassword: "New password",
    chooseNewPassword: "Choose a new password",
    resetPasswordHelp: "Set a new password for your VerkRadar account. If the link has expired, request a new reset link.",
    confirmNewPassword: "Confirm new password",
    updating: "Updating...",
    updatePassword: "Update password",
    needNewLink: "Need a new link?",
    sendAnotherResetLink: "Send another reset link",
    onboarding: "Onboarding",
    onboardingTitle: "Create your company profile",
    onboardingText: "This is what the matching system uses to find relevant opportunities.",
    companyBasics: "1. Company basics",
    companyName: "Company name",
    contactEmail: "Contact email",
    website: "Website",
    industry: "Industry",
    servicesAndKeywords: "2. Services and keywords",
    servicesHint: "Start with the services you would actually want to bid on.",
    servicesLabel: "What services do you offer? Choose suggestions or type your own, separated by commas.",
    servicesHelper: "Add the services your company actually sells. More specific services create better matches.",
    extraWords: "Extra words VerkRadar should look for in notices.",
    includeKeywordsHelper: "Use words that often appear in opportunities you want.",
    excludeWords: "Words that should lower or remove bad matches.",
    excludeKeywordsHelper: "Words that should lower or remove bad matches.",
    suggestedServicesFor: "Suggested services for {industry}",
    suggestedKeywordsFor: "Suggested keywords for {industry}",
    selectIndustryForServices: "Select an industry to see service suggestions",
    selectIndustryForKeywords: "Select an industry to see keyword suggestions",
    locationsTitle: "3. Locations",
    locationsHint: "Use All Iceland for national tenders. Use travel settings when you can bid outside your base area for the right project size.",
    baseLocation: "Base location",
    baseLocationPlaceholder: "Example: East Iceland",
    serviceAreas: "Service areas, comma separated",
    serviceAreasPlaceholder: "Example: East Iceland, All Iceland",
    travelScope: "Travel and scope",
    willingToTravel: "Willing to travel for the right project",
    includeNational: "Include national / All Iceland opportunities",
    includeRemote: "Include remote / online opportunities",
    minimumTravelValue: "Minimum project value for travel",
    projectSize: "4. Project size",
    minimumValue: "Minimum value",
    maximumValue: "Maximum value",
    showUnknownValue: "Show opportunities even if value is unknown",
    reportPreferences: "5. Report preferences",
    frequency: "Frequency",
    weekly: "Weekly",
    daily: "Daily",
    reportDay: "Report day",
    deadlineReminders: "Deadline reminders",
    includeLowConfidence: "Include low-confidence matches",
    saveProfile: "Save profile",
    saving: "Saving...",
    saved: "Saved",
    dashboard: "Dashboard",
    welcomeCompany: "Welcome, {company}",
    dashboardIntro: "Ranked project opportunities based on your services, locations and keywords. {refresh}",
    matchesLastRefreshed: "Last refreshed {time}.",
    matchesAutoRefresh: "Matches refresh automatically after profile saves.",
    refreshMatches: "Refresh matches",
    refreshing: "Refreshing...",
    viewWeeklyReport: "View report",
    strongMatches: "Strong matches",
    closingSoon: "Closing soon",
    savedLabel: "Saved",
    totalPotentialValue: "Total potential value",
    searchOpportunities: "Search opportunities...",
    savedOnly: "Saved only",
    improveProfile: "Improve profile",
    includeNationalOpportunities: "Include national opportunities",
    showAllStoredMatches: "Show all matches",
    inspectAllOpportunities: "Inspect all opportunities",
    details: "Details",
    save: "Save",
    ignore: "Ignore",
    originalLanguage: "Original language",
    extractedProject: "Extracted project",
    reportTitle: "Tender and opportunity report",
    weeklyReport: "Report",
    saveReport: "Save report",
    savingReport: "Saving...",
    downloadPdf: "Download PDF",
    copyReport: "Copy report",
    reportArchive: "Report archive",
    savedReports: "Saved reports",
    loadingSavedReports: "Loading saved reports...",
    noSavedReports: "No saved reports yet.",
    viewReport: "View report",
    closeReport: "Close report",
    generatedBy: "Generated by VerkRadar",
    reportForCompany: "Tender and opportunity report for {company}",
    openTenders: "Open tenders / quote requests",
    upcomingOpportunities: "Possible upcoming opportunities",
    openTendersDescription: "Clear procurement intent. Review source documents before acting.",
    upcomingDescription: "Upcoming procurement or project signals with clear evidence.",
    reportFooter: "VerkRadar helps prioritise public opportunity review. Always check the original source documents, deadlines, requirements and eligibility before acting.",
    buyer: "Buyer",
    source: "Source",
    description: "Description",
    requirements: "Requirements",
    noSpecificRequirements: "No specific requirements listed.",
    noDescription: "No description available.",
    noMatchReasons: "No match reasons available.",
    matchReasons: "Match reasons",
    opportunityInfo: "Opportunity info",
    extraction: "Extraction",
    sourceArticle: "Source article",
    parentArticle: "Parent article",
    openSourceArticle: "Open source article",
    extractedRegion: "Extracted region",
    projectNumber: "Project number",
    tenderState: "Tender state",
    quality: "Quality",
    category: "Category",
    type: "Type",
    published: "Published",
    cpv: "CPV",
    recommendedNextSteps: "Recommended next steps",
    noMajorRisks: "No major risks detected in this data.",
    openSourceAndConfirm: "Open the source notice and confirm eligibility.",
    removeFromSaved: "Remove from saved",
    saveOpportunity: "Save opportunity",
    markNotRelevant: "Mark not relevant",
    publicProcurement: "Public procurement",
    area: "Location",
    deadline: "Deadline",
    estimatedValue: "Estimated value",
    notFound: "Not found",
    notListed: "Not listed",
    unknownBuyer: "Unknown buyer",
    allIceland: "All Iceland",
    whyThisMatters: "Why this matters",
    risksToCheck: "Risks / things to check",
    openSource: "Open source",
    sourceLinkMissing: "Source link missing",
    strongMatch: "Strong match",
    goodMatch: "Good match",
    possibleMatch: "Possible match",
    weakMatch: "Weak match",
    confirmedTender: "Confirmed tender",
    likelyOpportunity: "Likely opportunity",
    earlySignal: "Early signal",
    needsReview: "Needs review",
    tenderAwarded: "Tender awarded",
    tenderAlreadyAnnounced: "Tender already announced",
    upcomingTender: "Upcoming tender",
    projectSignal: "Project signal",
    nationalOpportunity: "National opportunity",
    localMatch: "Local match",
    mentionsService: "Mentions your service: {value}",
    containsKeyword: "Contains your keyword: {value}",
    procurement: "procurement"
  }
};

function getInitialLanguage() {
  const stored = localStorage.getItem(STORAGE_KEYS.language);
  return stored === "en" || stored === "is" ? stored : "is";
}

function t(key, params = {}) {
  const dictionary = translations[state?.language || "is"] || translations.is;
  const fallback = translations.en[key] || translations.is[key] || key;
  return String(dictionary[key] || fallback).replace(/\{(\w+)\}/g, (_, name) => params[name] ?? "");
}

function setLanguage(language) {
  state.language = language === "en" ? "en" : "is";
  localStorage.setItem(STORAGE_KEYS.language, state.language);
  render();
}

const defaultProfile = {
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
  includeLowConfidence: false
};

const PROFILE_LOAD_TIMEOUT_MS = 12000;

function getEmptyProfile() {
  return {
    companyName: "",
    contactEmail: state.user?.email || "",
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
    includeLowConfidence: false
  };
}

let state = {
  route: location.hash.replace("#", "") || "/",
  language: getInitialLanguage(),
  user: null,
  currentUser: null,
  isAdmin: false,
  authLoading: true,
  isBooting: true,
  authLoaded: false,
  profileLoaded: false,
  adminLoaded: false,
  bootError: null,
  authMessage: null,
  authForm: {
    email: "",
    password: "",
    newPassword: "",
    confirmPassword: ""
  },
  authSubmitting: false,
  isSavingProfile: false,
  profileSaved: false,
  profileSaveMessage: null,
  profileSaveError: null,
  profile: null,
  profileDraft: null,
  profileDraftDirty: false,
  profileLoading: false,
  profileLoadError: null,
  companyId: null,
  opportunities: [],
  storedMatches: [],
  opportunityActions: [],
  saved: loadArray(STORAGE_KEYS.saved),
  ignored: loadArray(STORAGE_KEYS.ignored),
  filters: {
    search: "",
    label: "recommended",
    category: "all",
    location: "all",
    type: "all",
    savedOnly: false
  },
  tedImportMode: "nordic",
  dropdown: {
    openKey: null,
    focusedIndex: 0
  },
  importStatus: null,
  importLoading: false,
  connectorImportStatus: null,
  connectorImportLoading: false,
  connectorTestingSourceId: null,
  importedTedOpportunities: [],
  importedTedOpportunitiesLoading: false,
  importedTedOpportunitiesLoaded: false,
  importedTedOpportunitiesError: null,
  importRuns: [],
  importRunsLoading: false,
  importRunsLoaded: false,
  importRunsError: null,
  adminReports: [],
  adminReportsLoading: false,
  adminReportsLoaded: false,
  adminReportsError: null,
  selectedAdminReport: null,
  selectedAdminReportLoading: false,
  selectedAdminReportError: null,
  sourceCoverage: [],
  sourceCoverageLoading: false,
  sourceCoverageLoaded: false,
  sourceCoverageError: null,
  expandedSourceId: null,
  adminCompanies: [],
  adminCompaniesLoading: false,
  adminCompaniesLoaded: false,
  adminCompaniesError: null,
  adminCompanyActions: {},
  selectedAdminCompanyId: null,
  adminActiveTab: "overview",
  adminCompanyFilters: {
    search: "",
    industry: "all",
    profileStatus: "all",
    plan: "all"
  },
  adminReportMode: "new_only",
  adminOpportunityFilters: {
    source: "all",
    status: "all",
    country: "all",
    search: "",
    tedOnly: false,
    manualOnly: false,
    showDemoTest: false
  },
  adminOpportunityDraft: createEmptyAdminOpportunityDraft(),
  matchStatus: null,
  matchingLoading: false,
  lastMatchedAt: null,
  reports: [],
  reportsLoaded: false,
  reportsLoadError: null,
  reportArchiveLoading: false,
  reportSaveLoading: false,
  reportMessage: null,
  selectedReportId: null,
  selectedAdminReportId: null,
  adminMessage: null,
  adminSubmitting: false,
  adminDeletingId: null,
  adminUpdatingId: null,
  isLoadingOpportunities: false,
  opportunityLoadError: null,
  isMobileMenuOpen: false,
  profileMenuOpen: false,
  selectedOpportunityId: null,
  toast: null
};

if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

function clearLocalProfileState() {
  localStorage.removeItem("verkradar_profile");
  localStorage.removeItem("verkradar_local_user_id");
  localStorage.removeItem("verkradar_saved_opportunities");
  localStorage.removeItem("verkradar_ignored_opportunities");
  state.profile = null;
  state.profileDraft = null;
  state.profileDraftDirty = false;
  state.currentUser = null;
  state.companyId = null;
  state.storedMatches = [];
  state.opportunityActions = [];
  state.reports = [];
  state.reportsLoaded = false;
  state.reportsLoadError = null;
  state.reportMessage = null;
  state.selectedReportId = null;
  state.profileSaved = false;
  state.profileSaveMessage = null;
  state.profileSaveError = null;
  state.saved = [];
  state.ignored = [];
  state.importRuns = [];
  state.importRunsLoading = false;
  state.importRunsLoaded = false;
  state.importRunsError = null;
  state.importedTedOpportunities = [];
  state.importedTedOpportunitiesLoading = false;
  state.importedTedOpportunitiesLoaded = false;
  state.importedTedOpportunitiesError = null;
  state.adminReports = [];
  state.adminReportsLoading = false;
  state.adminReportsLoaded = false;
  state.adminReportsError = null;
  state.selectedAdminReport = null;
  state.selectedAdminReportLoading = false;
  state.selectedAdminReportError = null;
  state.sourceCoverage = [];
  state.sourceCoverageLoading = false;
  state.sourceCoverageLoaded = false;
  state.sourceCoverageError = null;
  state.adminCompanies = [];
  state.adminCompaniesLoading = false;
  state.adminCompaniesLoaded = false;
  state.adminCompaniesError = null;
  state.selectedAdminCompanyId = null;
  state.lastMatchedAt = null;
}

function createEmptyAdminOpportunityDraft() {
  return {
    title: "",
    buyer: "",
    sourceName: "",
    category: "",
    type: "tender",
    deadline: "",
    published_date: "",
    location: "",
    estimated_value: "",
    url: "",
    cpv_code: "",
    difficulty: "medium",
    status: "open",
    description: "",
    requirements: "",
    keywords: ""
  };
}

function updateAdminOpportunityDraftFromForm(formData) {
  const nextDraft = createEmptyAdminOpportunityDraft();
  Object.keys(nextDraft).forEach((key) => {
    nextDraft[key] = String(formData.get(key) || "");
  });
  state.adminOpportunityDraft = nextDraft;
}

let suppressNextHashChange = false;

window.addEventListener("hashchange", () => {
  const nextRoute = location.hash.replace("#", "") || "/";
  const routeChanged = nextRoute !== state.route;

  if (suppressNextHashChange && nextRoute === state.route) {
    suppressNextHashChange = false;
    return;
  }
  suppressNextHashChange = false;

  if (["/login", "/signup", "/forgot-password", "/reset-password"].includes(nextRoute) && nextRoute !== state.route) {
    state.authMessage = null;
    state.authSubmitting = false;
  }

  state.route = nextRoute;
  state.isMobileMenuOpen = false;
  state.profileMenuOpen = false;
  if (routeChanged) clearOpportunityDetailsState();
  document.body.classList.remove("mobile-menu-active");
  render();
  scrollToPageTop();
  afterRouteRender();
});

document.addEventListener("click", (event) => {
  if (state.dropdown.openKey && !event.target.closest?.(".custom-select")) {
    closeDropdown();
  }

  if (state.profileMenuOpen && !event.target.closest?.(".profile-menu")) {
    state.profileMenuOpen = false;
    render();
  }

  if (event.target.classList?.contains("modal-backdrop")) {
    event.preventDefault();
    if (state.selectedAdminCompanyId) {
      state.selectedAdminCompanyId = null;
      render();
      return;
    }
    closeDetails();
    return;
  }

  if (state.isMobileMenuOpen && !event.target.closest?.(".site-header")) {
    closeMobileMenu();
    return;
  }

  const action = event.target.closest?.("[data-action]");
  if (!action) return;

  const name = action.dataset.action;
  const id = action.dataset.id;

  if (name === "close-modal") {
    event.preventDefault();
    event.stopPropagation();
    if (state.selectedAdminCompanyId) {
      state.selectedAdminCompanyId = null;
      render();
      return;
    }
    closeDetails();
    return;
  }

  if (name === "toggle-mobile-menu") {
    event.preventDefault();
    if (state.isMobileMenuOpen) closeMobileMenu();
    else openMobileMenu();
    return;
  }

  if (name === "mobile-nav") {
    event.preventDefault();
    mobileNavigate(action.dataset.href);
    return;
  }

  if (name === "mobile-scroll-to") {
    event.preventDefault();
    mobileScrollTo(action.dataset.target);
    return;
  }

  if (name === "toggle-profile-menu") {
    event.preventDefault();
    if (state.isMobileMenuOpen || isMobileViewport()) {
      state.profileMenuOpen = false;
      render();
      return;
    }
    state.profileMenuOpen = !state.profileMenuOpen;
    render();
    return;
  }

  if (name === "toggle-language") {
    event.preventDefault();
    setLanguage(state.language === "is" ? "en" : "is");
    return;
  }

  if (name === "toggle-dropdown") {
    event.preventDefault();
    const key = action.dataset.key;
    const isOpen = state.dropdown.openKey === key;
    state.dropdown.openKey = isOpen ? null : key;
    state.dropdown.focusedIndex = getSelectedFilterIndex(key);
    render();
    if (!isOpen) focusDropdownOption();
    return;
  }

  if (name === "select-filter") {
    event.preventDefault();
    const key = action.dataset.key;
    const value = action.dataset.value;
    if (action.dataset.profileField) {
      initializeProfileDraft();
      state.profileDraft[action.dataset.profileField] = value;
      markProfileDraftDirty();
    } else {
      state.filters[key] = value;
    }
    state.dropdown.openKey = null;
    state.dropdown.focusedIndex = 0;
    render();
    return;
  }

  if (name === "toggle-profile-suggestion") {
    event.preventDefault();
    toggleProfileSuggestion(action.dataset.field, action.dataset.value);
    return;
  }

  if (name === "scroll-to") {
    event.preventDefault();
    state.isMobileMenuOpen = false;
    state.profileMenuOpen = false;
    document.body.classList.remove("mobile-menu-active");
    const targetId = action.dataset.target;
    if (!targetId) return;
    if (state.route !== "/") {
      navigate("/");
      setTimeout(() => scrollToSection(targetId), 50);
    } else {
      render();
      setTimeout(() => scrollToSection(targetId), 0);
    }
    return;
  }

  if (name === "go") {
    event.preventDefault();
    state.isMobileMenuOpen = false;
    state.profileMenuOpen = false;
    document.body.classList.remove("mobile-menu-active");
    navigate(action.dataset.href);
    return;
  }
  if (name === "save") toggleSave(id);
  if (name === "ignore") ignoreOpportunity(id);
  if (name === "unignore") unignoreOpportunity(id);
  if (name === "details") openDetails(id);
  if (name === "admin-report-override") {
    updateOpportunityReportOverride(id, action.dataset.override || "");
    return;
  }
  if (name === "copy-report") copyReport();
  if (name === "download-report-pdf") downloadReportPdf();
  if (name === "download-admin-report-pdf") {
    downloadAdminReportPdf();
    return;
  }
  if (name === "save-report") saveCurrentReport();
  if (name === "archive-report") {
    archiveReport(id);
    return;
  }
  if (name === "view-report") {
    state.selectedReportId = id;
    render();
  }
  if (name === "close-archive-report") {
    state.selectedReportId = null;
    render();
  }
  if (name === "view-admin-report") {
    state.selectedAdminReportId = id;
    state.selectedAdminReport = null;
    state.selectedAdminReportError = null;
    state.adminActiveTab = "reports";
    render();
    loadAdminReportDetails(id);
    return;
  }
  if (name === "close-admin-report") {
    state.selectedAdminReportId = null;
    state.selectedAdminReport = null;
    state.selectedAdminReportError = null;
    render();
    return;
  }
  if (name === "copy-admin-report") {
    copyAdminReportText(id);
    return;
  }
  if (name === "admin-tab") {
    state.adminActiveTab = action.dataset.tab || "overview";
    state.selectedAdminCompanyId = null;
    state.selectedAdminReportId = null;
    render();
  }
  if (name === "view-admin-company") {
    state.selectedAdminCompanyId = id;
    render();
  }
  if (name === "close-admin-company") {
    state.selectedAdminCompanyId = null;
    render();
  }
  if (name === "admin-refresh-company-matches") {
    refreshAdminCompanyMatches(id);
    return;
  }
  if (name === "admin-generate-company-report") {
    generateAdminCompanyReport(id);
    return;
  }
  if (name === "import-ted") importTedNotices();
  if (name === "import-source-connectors") importSourceConnectors();
  if (name === "test-source-connector") importSourceConnectors(id);
  if (name === "toggle-source-items") {
    state.expandedSourceId = state.expandedSourceId === id ? null : id;
    render();
  }
  if (name === "refresh-admin-status") refreshAdminOperationsData();
  if (name === "hide-imported-opportunity") updateOpportunityStatus(id, "hidden");
  if (name === "mark-imported-relevant") updateOpportunityStatus(id, "open");
  if (name === "run-matching") runMatchingForCurrentCompany();
  if (name === "retry-settings-profile") retrySettingsProfileLoad();
  if (name === "show-all-matches") {
    state.filters.label = "all";
    render();
  }
  if (name === "show-all-opportunities") {
    state.filters.label = "all_opportunities";
    render();
  }
  if (name === "include-national-opportunities") {
    initializeProfileDraft();
    state.profileDraft.nationalProjects = true;
    if (!state.profileDraft.locations.includes("All Iceland")) {
      state.profileDraft.locations = [...state.profileDraft.locations, "All Iceland"];
    }
    markProfileDraftDirty();
    navigate("/settings");
  }
  if (name === "delete-opportunity") deleteOpportunity(id);
  if (name === "logout") {
    state.profileMenuOpen = false;
    if (state.isMobileMenuOpen) {
      closeMobileMenu(() => signOut());
      return;
    }
    signOut();
  }
  if (name === "load-demo") {
    if (state.user) {
      saveCompanyProfile(defaultProfile)
        .then(() => navigate("/dashboard"))
        .catch((error) => {
          console.error("Failed to load demo profile:", error);
          state.profileSaveError = formatSupabaseError(error);
          render();
        });
    } else {
      saveProfile(defaultProfile);
      state.profile = defaultProfile;
      navigate("/dashboard");
    }
  }
  if (name === "reset") {
    clearLocalProfileState();
    navigate("/");
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && state.isMobileMenuOpen) {
    event.preventDefault();
    closeMobileMenu();
    return;
  }

  if (event.key === "Escape" && state.profileMenuOpen) {
    event.preventDefault();
    state.profileMenuOpen = false;
    render();
    return;
  }

  if (event.key === "Escape" && state.selectedOpportunityId) {
    event.preventDefault();
    closeDetails();
    return;
  }

  if (event.key === "Escape" && state.selectedAdminCompanyId) {
    event.preventDefault();
    state.selectedAdminCompanyId = null;
    render();
    return;
  }

  const dropdownRoot = event.target.closest?.(".custom-select");
  const activeKey = dropdownRoot?.dataset.key || state.dropdown.openKey;
  if (!activeKey) return;

  const options = getFilterOptions(activeKey);
  const isOpen = state.dropdown.openKey === activeKey;

  if (event.key === "Escape" && isOpen) {
    event.preventDefault();
    closeDropdown();
    focusDropdownTrigger(activeKey);
    return;
  }

  if ((event.key === "ArrowDown" || event.key === "ArrowUp") && !isOpen) {
    event.preventDefault();
    state.dropdown.openKey = activeKey;
    state.dropdown.focusedIndex = getSelectedFilterIndex(activeKey);
    render();
    focusDropdownOption();
    return;
  }

  if (!isOpen) return;

  if (event.key === "ArrowDown" || event.key === "ArrowUp") {
    event.preventDefault();
    const direction = event.key === "ArrowDown" ? 1 : -1;
    state.dropdown.focusedIndex = (state.dropdown.focusedIndex + direction + options.length) % options.length;
    render();
    focusDropdownOption();
    return;
  }

  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    const option = options[state.dropdown.focusedIndex];
    if (!option) return;
    const profileField = dropdownRoot?.querySelector?.("[data-profile-field]")?.dataset.profileField;
    if (profileField) {
      initializeProfileDraft();
      state.profileDraft[profileField] = option.value;
      markProfileDraftDirty();
    } else {
      state.filters[activeKey] = option.value;
    }
    state.dropdown.openKey = null;
    state.dropdown.focusedIndex = 0;
    render();
    focusDropdownTrigger(activeKey);
  }
});

document.addEventListener("input", (event) => {
  const authField = event.target.closest?.("[data-auth-field]");
  if (authField) {
    state.authForm[authField.dataset.authField] = authField.value;
    return;
  }

  const field = event.target.closest?.("[data-profile-field]");
  if (field) {
    initializeProfileDraft();
    const key = field.dataset.profileField;
    if (field.type === "checkbox") {
      state.profileDraft[key] = field.checked;
    } else if (field.dataset.profileArray === "true") {
      state.profileDraft[key] = splitInput(field.value);
    } else if (field.dataset.profileNumber === "true") {
      state.profileDraft[key] = field.value;
    } else {
      state.profileDraft[key] = field.value;
    }
    markProfileDraftDirty();
    return;
  }

  if (event.target.matches("[data-filter]")) {
    const key = event.target.dataset.filter;
    if (event.target.type === "checkbox") {
      state.filters[key] = event.target.checked;
    } else {
      state.filters[key] = event.target.value;
    }
    render();
  }

  if (event.target.matches("[data-admin-filter]")) {
    const key = event.target.dataset.adminFilter;
    if (event.target.type === "checkbox") {
      state.adminOpportunityFilters[key] = event.target.checked;
      if (key === "tedOnly" && event.target.checked) state.adminOpportunityFilters.manualOnly = false;
      if (key === "manualOnly" && event.target.checked) state.adminOpportunityFilters.tedOnly = false;
    } else {
      state.adminOpportunityFilters[key] = event.target.value;
    }
    render();
  }

  if (event.target.matches("[data-admin-opportunity-field]")) {
    const key = event.target.dataset.adminOpportunityField;
    state.adminOpportunityDraft = {
      ...createEmptyAdminOpportunityDraft(),
      ...(state.adminOpportunityDraft || {}),
      [key]: event.target.value
    };
    return;
  }

  if (event.target.matches("[data-admin-company-filter]")) {
    const key = event.target.dataset.adminCompanyFilter;
    state.adminCompanyFilters[key] = event.target.value;
    render();
  }

  if (event.target.matches("[data-admin-report-mode]")) {
    state.adminReportMode = event.target.value === "all_current" ? "all_current" : "new_only";
    render();
  }
});

document.addEventListener("change", (event) => {
  if (event.target.matches("[data-import-mode]")) {
    state.tedImportMode = event.target.value;
    render();
    return;
  }

  if (event.target.matches("[data-profile-location]")) {
    initializeProfileDraft();
    state.profileDraft.locations = Array.from(document.querySelectorAll("[data-profile-location]:checked"))
      .map((input) => input.value);
    markProfileDraftDirty();
    return;
  }

  const field = event.target.closest?.("[data-profile-field]");
  if (!field) return;
  initializeProfileDraft();
  const key = field.dataset.profileField;
  state.profileDraft[key] = field.type === "checkbox" ? field.checked : field.value;
  markProfileDraftDirty();
});

document.addEventListener("submit", async (event) => {
  if (event.target.id === "login-form") {
    event.preventDefault();
    const form = new FormData(event.target);
    signIn(form.get("email"), form.get("password"));
    return;
  }

  if (event.target.id === "signup-form") {
    event.preventDefault();
    const form = new FormData(event.target);
    signUp(form.get("email"), form.get("password"));
    return;
  }

  if (event.target.id === "forgot-password-form") {
    event.preventDefault();
    const form = new FormData(event.target);
    sendPasswordResetEmail(form.get("email"));
    return;
  }

  if (event.target.id === "reset-password-form") {
    event.preventDefault();
    const form = new FormData(event.target);
    updatePasswordFromReset(form.get("newPassword"), form.get("confirmPassword"));
    return;
  }

  if (event.target.id === "admin-opportunity-form") {
    event.preventDefault();
    const form = new FormData(event.target);
    updateAdminOpportunityDraftFromForm(form);
    addOpportunity(form, event.target);
    return;
  }

  if (event.target.id === "profile-form") {
    event.preventDefault();
    state.profileSaved = false;
    updateProfileDraftFromForm(event.target);
    const profile = normalizeProfileDraftForSave();

    if (!profile.companyName || !profile.contactEmail || !profile.industry) {
      showToast("Please fill in company name, email and industry.", "error");
      return;
    }

    state.isSavingProfile = true;
    state.profileSaved = false;
    state.profileSaveMessage = null;
    state.profileSaveError = null;
    render();

    const shouldRedirect = state.route !== "/settings";
    try {
      await saveCompanyProfile(profile);
      await loadProfileFromSupabase({ overwriteDraft: true });
      if (state.profileLoadError) {
        throw new Error(`Profile saved, but the saved profile could not be reloaded. ${state.profileLoadError}`);
      }
      state.profileSaveMessage = "Refreshing matches...";
      state.profileSaveError = null;
      render();
      const matchedCount = await runMatchingForCurrentCompany();
      if (state.matchStatus?.type === "error") {
        state.profileSaveMessage = "Profile saved, but matching could not be refreshed. Try Run matching.";
      } else {
        const plural = matchedCount === 1 ? "opportunity" : "opportunities";
        state.profileSaveMessage = shouldRedirect
          ? `Profile saved — ${matchedCount} relevant ${plural} found. Redirecting...`
          : `Profile saved — ${matchedCount} relevant ${plural} found.`;
      }
      state.profileSaved = true;
      render();
      clearTimeout(window.__profileSavedTimeout);
      window.__profileSavedTimeout = setTimeout(() => {
        state.profileSaved = false;
        render();
      }, 1800);
      if (shouldRedirect) {
        setTimeout(() => navigate("/dashboard"), 800);
      }
    } catch (error) {
      console.error("Failed to save company profile:", error);
      state.profileSaveError = formatSupabaseError(error);
      state.profileSaveMessage = null;
      state.profileSaved = false;
    } finally {
      state.isSavingProfile = false;
      render();
    }
  }
});

window.addEventListener("focus", handleAppFocusReturn);
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible") handleAppFocusReturn();
});

function handleAppFocusReturn() {
  if (state.route !== "/settings") return;
  if (state.profileDraftDirty) {
    state.profileLoading = false;
    state.profileLoaded = true;
    render();
  }
}

function openMobileMenu() {
  updateMobileMenuOffset();
  state.isMobileMenuOpen = true;
  state.profileMenuOpen = false;
  document.body.classList.add("mobile-menu-active");
  render();
}

function closeMobileMenu(callback) {
  if (!state.isMobileMenuOpen) {
    if (typeof callback === "function") callback();
    return;
  }

  state.isMobileMenuOpen = false;
  state.profileMenuOpen = false;
  document.body.classList.remove("mobile-menu-active");
  render();

  if (typeof callback === "function") {
    setTimeout(callback, 260);
  }
}

function mobileNavigate(route) {
  if (!route) return;
  if (!state.isMobileMenuOpen) {
    navigate(route);
    return;
  }
  closeMobileMenu(() => navigate(route));
}

function mobileScrollTo(targetId) {
  if (!targetId) return;
  const scrollAfterClose = () => {
    if (state.route !== "/") {
      navigate("/");
      setTimeout(() => scrollToSection(targetId), 50);
    } else {
      render();
      setTimeout(() => scrollToSection(targetId), 0);
    }
  };

  if (!state.isMobileMenuOpen) {
    scrollAfterClose();
    return;
  }
  closeMobileMenu(scrollAfterClose);
}

function isMobileViewport() {
  return typeof window !== "undefined" && window.matchMedia?.("(max-width: 920px)").matches;
}

function updateMobileMenuOffset() {
  const header = document.querySelector(".site-header");
  if (!header) return;
  document.documentElement.style.setProperty("--header-height", `${Math.ceil(header.getBoundingClientRect().height)}px`);
}

function navigate(route) {
  route = route || "/";
  const authRoutes = ["/login", "/signup", "/forgot-password", "/reset-password"];

  if (authRoutes.includes(route) && route !== state.route) {
    state.authMessage = null;
    state.authSubmitting = false;
  }

  state.isMobileMenuOpen = false;
  state.profileMenuOpen = false;
  document.body.classList.remove("mobile-menu-active");

  if (state.route === route) {
    render();
    scrollToPageTop();
    afterRouteRender();
    return;
  }

  clearOpportunityDetailsState();
  state.route = route;
  suppressNextHashChange = true;
  location.hash = route;
  render();
  scrollToPageTop();
  afterRouteRender();
}

function getPostAuthRoute() {
  if (!state.user && !state.currentUser) return "/";
  return state.profile ? "/dashboard" : "/onboarding";
}

function isPublicAuthEntryRoute(route = state.route) {
  const normalized = String(route || "");
  if (isPasswordRecoveryRoute(normalized)) return false;
  return ["/", "/login", "/signup", "/forgot-password"].includes(normalized) ||
    normalized.startsWith("access_token=") ||
    normalized.startsWith("code=") ||
    normalized.includes("type=signup") ||
    normalized.includes("type=email_change");
}

function isPasswordRecoveryRoute(route = state.route) {
  const normalized = String(route || "");
  return normalized === "/reset-password" ||
    normalized.startsWith("/reset-password") ||
    normalized.includes("type=recovery");
}

function replaceHashRoute(route) {
  state.route = route;
  if (location.hash.replace("#", "") !== route) {
    history.replaceState(null, "", `#${route}`);
  }
}

function redirectAuthenticatedPublicRoute({ replace = false } = {}) {
  if (!state.user && !state.currentUser) return false;
  if (!isPublicAuthEntryRoute()) return false;
  const targetRoute = getPostAuthRoute();
  state.authMessage = null;
  if (replace) replaceHashRoute(targetRoute);
  else navigate(targetRoute);
  return true;
}

function afterRouteRender() {
  if (state.route === "/report" && state.companyId && !state.reportsLoaded && !state.reportArchiveLoading) {
    loadReportsForCurrentCompany();
  }
  if (state.route === "/admin" && state.isAdmin) {
    if (!state.importRunsLoaded && !state.importRunsLoading) loadImportRunsForAdmin();
    if (!state.adminReportsLoaded && !state.adminReportsLoading) loadAdminReports();
    if (!state.sourceCoverageLoaded && !state.sourceCoverageLoading) loadSourceCoverageForAdmin();
    if (!state.adminCompaniesLoaded && !state.adminCompaniesLoading) loadAdminCompanies();
    if (!state.importedTedOpportunitiesLoaded && !state.importedTedOpportunitiesLoading) loadNewestImportedTedOpportunities().then(render).catch((error) => {
      console.error("Failed to load latest TED opportunities:", error);
    });
  }
}

function scrollToPageTop() {
  window.scrollTo(0, 0);
}

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

async function loadOpportunities() {
  state.isLoadingOpportunities = true;
  state.opportunityLoadError = null;
  render();

  try {
    if (!supabaseClient) {
      throw new Error("Supabase client not configured");
    }

    const { data, error } = await supabaseClient
      .from("opportunities")
      .select("*, sources(name, source_type)")
      .eq("status", "open")
      .order("deadline", { ascending: true });

    if (error) throw error;

    if (!data || data.length === 0) {
      state.opportunities = window.VERKRADAR_OPPORTUNITIES || [];
      state.storedMatches = [];
      state.opportunityLoadError = "Using demo data. Supabase has no opportunities yet.";
    } else {
      state.opportunities = data.map(mapSupabaseOpportunity);
      state.opportunityLoadError = null;
      if (state.companyId) {
        await loadOpportunityActionsForCurrentCompany();
        await loadStoredMatchesForCurrentCompany();
      }
    }
  } catch (err) {
    console.error("Failed to load Supabase opportunities:", err);
    state.opportunities = window.VERKRADAR_OPPORTUNITIES || [];
    state.storedMatches = [];
    state.opportunityLoadError = "Using demo data. Supabase connection failed.";
  } finally {
    state.isLoadingOpportunities = false;
    render();
  }
}

async function loadImportRunsForAdmin() {
  if (!supabaseClient || !state.isAdmin) {
    state.importRuns = [];
    state.importRunsLoaded = true;
    return;
  }

  state.importRunsLoading = true;
  state.importRunsError = null;
  render();

  try {
    const { data, error } = await supabaseClient
      .from("import_runs")
      .select("*")
      .order("started_at", { ascending: false })
      .limit(10);

    if (error) throw error;
    state.importRuns = data || [];
    state.importRunsLoaded = true;
  } catch (error) {
    console.error("Failed to load import runs:", error);
    state.importRuns = [];
    state.importRunsError = formatSupabaseError(error);
  } finally {
    state.importRunsLoading = false;
    state.importRunsLoaded = true;
    render();
  }
}

async function loadAdminReports() {
  if (!supabaseClient || !state.isAdmin) {
    state.adminReports = [];
    state.adminReportsLoaded = true;
    return;
  }

  state.adminReportsLoading = true;
  state.adminReportsError = null;
  render();

  try {
    const { data, error } = await supabaseClient
      .from("reports")
      .select(`
        id,
        title,
        company_id,
        period_start,
        period_end,
        summary,
        text_content,
        html_content,
        status,
        created_at,
        companies (
          company_name
        ),
        report_items (
          id,
          opportunity_id,
          match_score,
          match_reasons,
          risks,
          sort_order,
          opportunities (
            *,
            sources (
              name,
              source_type
            )
          )
        )
      `)
      .order("created_at", { ascending: false })
      .limit(10);

    if (error) throw error;
    state.adminReports = data || [];
    state.adminReportsLoaded = true;
  } catch (error) {
    console.error("Failed to load admin reports:", error);
    state.adminReports = [];
    state.adminReportsError = formatSupabaseError(error);
  } finally {
    state.adminReportsLoading = false;
    state.adminReportsLoaded = true;
    render();
  }
}

async function loadAdminReportDetails(reportId) {
  if (!supabaseClient || !state.isAdmin || !reportId) return;

  state.selectedAdminReportLoading = true;
  state.selectedAdminReportError = null;
  render();

  try {
    const { data, error } = await supabaseClient
      .from("reports")
      .select(`
        id,
        title,
        company_id,
        period_start,
        period_end,
        summary,
        text_content,
        html_content,
        status,
        created_at,
        companies (
          company_name
        ),
        report_items (
          id,
          opportunity_id,
          match_score,
          match_reasons,
          risks,
          sort_order,
          opportunities (
            *,
            sources (
              name,
              source_type
            )
          )
        )
      `)
      .eq("id", reportId)
      .single();

    if (error) throw error;
    if (state.selectedAdminReportId === reportId) {
      state.selectedAdminReport = data;
    }
  } catch (error) {
    console.error("Failed to load admin report details:", error);
    if (state.selectedAdminReportId === reportId) {
      state.selectedAdminReport = null;
      state.selectedAdminReportError = formatSupabaseError(error);
    }
  } finally {
    if (state.selectedAdminReportId === reportId) {
      state.selectedAdminReportLoading = false;
      render();
    }
  }
}

async function loadSourceCoverageForAdmin() {
  if (!supabaseClient || !state.isAdmin) {
    state.sourceCoverage = [];
    state.sourceCoverageLoaded = true;
    return;
  }

  state.sourceCoverageLoading = true;
  state.sourceCoverageError = null;
  render();

  try {
    const { data, error } = await supabaseClient
      .from("sources")
      .select(`
        id,
        name,
        source_type,
        base_url,
        is_active,
        notes,
        source_status (
          status,
          last_checked_at,
          last_success_at,
          last_error,
          fetched_count,
          inserted_count,
          updated_count,
          active_opportunities_count
        ),
        source_connectors (
          connector_type,
          endpoint_url,
          enabled,
          include_keywords,
          exclude_keywords,
          require_any_keyword,
          status,
          last_checked_at,
          last_success_at,
          last_error,
          notes
        )
      `)
      .order("name", { ascending: true });

    if (error) throw error;
    const sources = (data || []).map((source) => ({
      ...source,
      source_status: Array.isArray(source.source_status) ? source.source_status[0] : source.source_status,
      source_connectors: Array.isArray(source.source_connectors) ? source.source_connectors[0] : source.source_connectors
    }));
    const sourceIds = sources.map((source) => source.id).filter(Boolean);
    let opportunitiesBySource = {};

    if (sourceIds.length) {
      const { data: opportunityRows, error: opportunityError } = await supabaseClient
        .from("opportunities")
        .select("id, source_id, title, buyer, deadline, status, url, raw_payload, created_at, published_date")
        .in("source_id", sourceIds)
        .eq("status", "open")
        .order("created_at", { ascending: false })
        .limit(500);

      if (opportunityError) throw opportunityError;
      opportunitiesBySource = (opportunityRows || []).reduce((acc, opportunity) => {
        if (!acc[opportunity.source_id]) acc[opportunity.source_id] = [];
        acc[opportunity.source_id].push(opportunity);
        return acc;
      }, {});
    }

    state.sourceCoverage = sources.map((source) => {
      const opportunities = opportunitiesBySource[source.id] || [];
      return {
        ...source,
        opportunityStats: getSourceOpportunityStats(opportunities),
        latestOpportunities: opportunities.slice(0, 8)
      };
    });
    state.sourceCoverageLoaded = true;
  } catch (error) {
    console.error("Failed to load source coverage:", error);
    state.sourceCoverage = [];
    state.sourceCoverageError = formatSupabaseError(error);
  } finally {
    state.sourceCoverageLoading = false;
    state.sourceCoverageLoaded = true;
    render();
  }
}

async function loadAdminCompanies() {
  if (!supabaseClient || !state.isAdmin) {
    state.adminCompanies = [];
    state.adminCompaniesLoaded = true;
    return;
  }

  state.adminCompaniesLoading = true;
  state.adminCompaniesError = null;
  render();

  try {
    const { data: companies, error } = await supabaseClient
      .from("companies")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) throw error;

    const companyRows = companies || [];
    const companyIds = companyRows.map((company) => company.id).filter(Boolean);
    let services = [];
    let locations = [];
    let keywords = [];
    let matches = [];
    let reports = [];

    if (companyIds.length) {
      const [servicesResult, locationsResult, keywordsResult, matchesResult, reportsResult] = await Promise.all([
        supabaseClient.from("company_services").select("company_id, service").in("company_id", companyIds),
        supabaseClient.from("company_locations").select("company_id, location").in("company_id", companyIds),
        supabaseClient.from("company_keywords").select("company_id, keyword, type").in("company_id", companyIds),
        supabaseClient.from("opportunity_matches").select("company_id, opportunity_id, match_score, match_label, opportunities(title, buyer, source_id, sources(name))").in("company_id", companyIds),
        supabaseClient.from("reports").select("id, company_id, title, created_at, period_start, period_end, status").in("company_id", companyIds).order("created_at", { ascending: false })
      ]);

      services = servicesResult.error ? [] : servicesResult.data || [];
      locations = locationsResult.error ? [] : locationsResult.data || [];
      keywords = keywordsResult.error ? [] : keywordsResult.data || [];
      matches = matchesResult.error ? [] : matchesResult.data || [];
      reports = reportsResult.error ? [] : reportsResult.data || [];
    }

    state.adminCompanies = companyRows.map((company) => mapAdminCompany(company, {
      services: services.filter((row) => row.company_id === company.id),
      locations: locations.filter((row) => row.company_id === company.id),
      keywords: keywords.filter((row) => row.company_id === company.id),
      matches: matches.filter((row) => row.company_id === company.id),
      reports: reports.filter((row) => row.company_id === company.id)
    }));
    state.adminCompaniesLoaded = true;
  } catch (error) {
    console.error("Failed to load admin companies:", error);
    state.adminCompanies = [];
    state.adminCompaniesError = formatSupabaseError(error);
  } finally {
    state.adminCompaniesLoading = false;
    state.adminCompaniesLoaded = true;
    render();
  }
}

function mapAdminCompany(company, related) {
  const services = cleanStringArray((related.services || []).map((row) => row.service));
  const locations = cleanStringArray((related.locations || []).map((row) => row.location));
  const includeKeywords = cleanStringArray((related.keywords || []).filter((row) => row.type === "include").map((row) => row.keyword));
  const excludeKeywords = cleanStringArray((related.keywords || []).filter((row) => row.type === "exclude").map((row) => row.keyword));
  const reports = related.reports || [];
  const matches = related.matches || [];
  const complete = Boolean(company.company_name && company.contact_email && company.industry && services.length && (locations.length || company.base_location || cleanStringArray(company.service_areas).length));

  return {
    id: company.id,
    ownerId: company.owner_id || "",
    companyName: company.company_name || "Unnamed company",
    contactEmail: company.contact_email || "",
    website: company.website || "",
    industry: company.industry || "",
    plan: company.plan || company.subscription_plan || "Demo",
    profileStatus: complete ? "Complete" : "Incomplete",
    createdAt: company.created_at,
    services,
    locations,
    includeKeywords,
    excludeKeywords,
    baseLocation: company.base_location || "",
    serviceAreas: cleanStringArray(company.service_areas),
    willingToTravel: Boolean(company.willing_to_travel),
    nationalProjects: Boolean(company.national_projects),
    remoteProjects: Boolean(company.remote_projects),
    minimumProjectValueForTravel: company.minimum_project_value_for_travel,
    minProjectValue: company.min_project_value,
    maxProjectValue: company.max_project_value,
    allowUnknownValue: Boolean(company.allow_unknown_value),
    includeLowConfidence: Boolean(company.include_low_confidence),
    reportFrequency: company.report_frequency || "weekly",
    reportDay: company.report_day || "monday",
    deadlineReminders: Boolean(company.deadline_reminders),
    matchCount: matches.length,
    savedCount: 0,
    latestReportDate: reports[0]?.created_at || "",
    latestMatches: matches.slice(0, 8),
    latestReports: reports.slice(0, 5)
  };
}

function setAdminCompanyAction(companyId, action) {
  state.adminCompanyActions = {
    ...(state.adminCompanyActions || {}),
    [companyId]: action
  };
}

function clearAdminCompanyAction(companyId) {
  const next = { ...(state.adminCompanyActions || {}) };
  delete next[companyId];
  state.adminCompanyActions = next;
}

async function refreshAdminCompanyMatches(companyId, options = {}) {
  if (!state.isAdmin) {
    state.adminMessage = { type: "error", text: "You do not have access to this action." };
    render();
    return [];
  }

  const company = (state.adminCompanies || []).find((item) => item.id === companyId);
  if (!company) {
    state.adminMessage = { type: "error", text: "Company not found. Refresh Admin companies and try again." };
    render();
    return [];
  }

  if (!options.skipAction) setAdminCompanyAction(companyId, "refresh");
  if (!options.silent) {
    state.adminMessage = null;
    render();
  }

  try {
    const payload = await runAdminCompanyAction(companyId, "refresh_matches");
    const refreshedCount = Number(payload.matches_refreshed || 0);

    await loadAdminCompanies();
    if (state.companyId === companyId) await loadStoredMatchesForCurrentCompany();
    if (!options.silent) {
      state.adminMessage = {
        type: "success",
        text: `Refreshed ${refreshedCount} eligible matches for ${company.companyName}.`
      };
      showToast("Company matches refreshed", "success");
      render();
    }
    return payload;
  } catch (error) {
    console.error("Failed to refresh admin company matches:", error);
    state.adminMessage = {
      type: "error",
      text: `Failed to refresh matches for ${company.companyName}. ${formatSupabaseError(error)}`
    };
    render();
    if (options.throwOnError) throw error;
    return [];
  } finally {
    if (!options.skipAction) {
      clearAdminCompanyAction(companyId);
      render();
    }
  }
}

async function generateAdminCompanyReport(companyId) {
  if (!state.isAdmin) {
    state.adminMessage = { type: "error", text: "You do not have access to this action." };
    render();
    return;
  }

  const company = (state.adminCompanies || []).find((item) => item.id === companyId);
  if (!company) {
    state.adminMessage = { type: "error", text: "Company not found. Refresh Admin companies and try again." };
    render();
    return;
  }

  setAdminCompanyAction(companyId, "report");
  state.adminMessage = null;
  render();

  try {
    const payload = await runAdminCompanyAction(companyId, "generate_report", {
      reportMode: state.adminReportMode || "new_only"
    });
    if (!payload.report_created) {
      state.adminMessage = {
        type: "error",
        text: getAdminNoReportMessage(payload, company.companyName)
      };
      render();
      return;
    }

    await Promise.all([loadAdminReports(), loadAdminCompanies()]);
    if (state.companyId === companyId) await loadReportsForCurrentCompany();
    state.adminMessage = {
      type: "success",
      text: `Generated ${formatAdminReportMode(payload.report_mode || state.adminReportMode)} report for ${company.companyName} with ${Number(payload.report_items || 0)} item${Number(payload.report_items || 0) === 1 ? "" : "s"}. Open the Reports tab to review it.`
    };
    showToast("Company report generated", "success");
  } catch (error) {
    console.error("Failed to generate admin company report:", error);
    state.adminMessage = {
      type: "error",
      text: `Failed to generate report for ${company.companyName}. ${formatSupabaseError(error)}`
    };
  } finally {
    clearAdminCompanyAction(companyId);
    render();
  }
}

async function runAdminCompanyAction(companyId, action, extra = {}) {
  const endpoint = getAdminCompanyActionsEndpoint();
  if (!endpoint) {
    throw new Error("Admin company actions are not configured. Set window.VERKRADAR_ADMIN_COMPANY_ACTIONS_URL or window.VERKRADAR_SUPABASE_URL.");
  }

  const response = await fetch(endpoint, {
    method: "POST",
    headers: await getTedImportHeaders(),
    body: JSON.stringify({ companyId, action, ...extra })
  });
  const payload = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(payload.error || `Admin company action failed with status ${response.status}`);
  }
  return payload;
}

function formatAdminReportMode(mode) {
  return mode === "all_current" ? "all current matches" : "new opportunities";
}

function getAdminNoReportMessage(payload, companyName) {
  const mode = payload?.report_mode || state.adminReportMode || "new_only";
  if (state.language === "is") {
    return mode === "new_only"
      ? "Engin ný tækifæri fundust síðan síðasta yfirlit."
      : `Engin viðeigandi tækifæri fundust fyrir ${companyName}.`;
  }
  return payload?.message || `No customer-report-ready matches found for ${companyName}.`;
}

async function refreshAdminOperationsData() {
  if (!state.isAdmin) return;
  await Promise.all([
    loadImportRunsForAdmin(),
    loadNewestImportedTedOpportunities(),
    loadAdminReports(),
    loadSourceCoverageForAdmin(),
    loadAdminCompanies()
  ]);
  showToast("Automation status refreshed", "success");
  render();
}

function mapSupabaseOpportunity(row) {
  const rawPayload = row.raw_payload && typeof row.raw_payload === "object" ? row.raw_payload : {};
  const sourceName = row.sources?.name || rawPayload.source_name || "";
  const qualityStatus = normalizeOpportunityQualityStatus(rawPayload.quality_status || rawPayload.qualityStatus, {
    source: sourceName,
    sourceType: row.sources?.source_type || "",
    title: row.title || "",
    description: row.description || "",
    rawPayload
  });
  const intent = getOpportunityIntent({
    source: sourceName,
    sourceType: row.sources?.source_type || "",
    title: row.title || "",
    description: row.description || "",
    category: row.category || "",
    keywords: Array.isArray(row.keywords) ? row.keywords : [],
    qualityStatus,
    rawPayload
  });
  return {
    id: row.id,
    externalId: row.external_id || "",
    countryCode: row.country_code || "",
    title: row.title,
    buyer: getCleanOpportunityBuyer(row.buyer, sourceName),
    source: sourceName || "Supabase",
    sourceType: row.sources?.source_type || "",
    category: row.category || "Other",
    type: row.type || "tender",
    description: row.description || "",
    deadline: row.deadline,
    publishedDate: row.published_date,
    createdAt: row.created_at,
    location: row.location || "Unknown",
    estimatedValue: row.estimated_value,
    currency: row.currency || "ISK",
    url: row.url || "",
    cpvCode: row.cpv_code || "",
    requirements: Array.isArray(row.requirements) ? row.requirements : [],
    keywords: Array.isArray(row.keywords) ? row.keywords : [],
    difficulty: row.difficulty || "medium",
    status: row.status || "open",
    qualityStatus,
    intent,
    rawPayload
  };
}

function mapStoredMatch(row) {
  const opp = mapSupabaseOpportunity(row.opportunities || {});
  return {
    ...opp,
    matchScore: Number(row.match_score || 0),
    matchLabel: row.match_label || getMatchLabel(Number(row.match_score || 0)),
    matchReasons: sanitizeMatchReasons(opp, Array.isArray(row.match_reasons) ? row.match_reasons : []),
    risks: Array.isArray(row.risks) ? row.risks : [],
    nextSteps: Array.isArray(row.next_steps) ? row.next_steps : []
  };
}

function isDashboardVisibleOpportunity(opp) {
  if (!opp || opp.status !== "open") return false;
  if (!opp.url || opp.url === "#") return false;
  if (daysUntilDeadline(opp.deadline) < 0) return false;
  if (isDemoTestOpportunity(opp)) return false;
  if (opp.rawPayload?.extraction_method === "parent_article_with_child_opportunities") return false;
  if (isSecondaryDuplicateOpportunity(opp)) return false;
  if (isStaleCustomerOpportunity(opp)) return false;
  if (!isTedOpportunity(opp)) return true;
  const country = getOpportunityCountryCode(opp);
  return ["IS", "NO", "DK", "SE", "FI"].includes(country);
}

function isDemoTestOpportunity(opp) {
  const source = normalizeLocationText(opp?.source || "");
  const title = normalizeLocationText(opp?.title || "");
  const externalId = normalizeLocationText(opp?.externalId || "");
  const sourceType = normalizeLocationText(opp?.sourceType || "");
  const rawPayload = opp?.rawPayload || {};
  const haystack = `${source} ${title} ${externalId} ${sourceType}`;

  if (rawPayload.is_demo === true || rawPayload.demo === true) return true;
  if (source === "private lead" || source.includes("private lead")) return true;
  if (source === "grant portal" || source.includes("grant portal")) return true;
  if (source === "manual test") return true;
  if (source.includes("manual test")) return true;
  if (["demo", "test", "sample", "mock", "fake"].some((value) => sourceType.includes(value))) return true;
  if (/\b(demo|test|sample|mock|fake|manual)\b/.test(haystack)) return true;
  if (title.includes("manual test")) return true;
  if (title.includes("municipal websites example")) return true;
  if (externalId.includes("demo") || externalId.includes("test")) return true;
  return false;
}

function normalizeOpportunityQualityStatus(status, opp = {}) {
  const value = String(status || "").toLowerCase();
  const intentOverride = normalizeOpportunityIntent(opp?.rawPayload?.opportunity_intent || opp?.rawPayload?.intent);
  if (intentOverride === "confirmed_tender") return "confirmed_tender";
  if (intentOverride === "early_opportunity" || intentOverride === "market_signal") return "early_signal";
  if (intentOverride === "news_context" || intentOverride === "not_opportunity") return "needs_review";
  if (isTedOpportunity(opp)) return "confirmed_tender";
  if (isVegagerdinExtractedProject(opp)) {
    const tenderState = getVegagerdinExtractedTenderState(opp);
    if (["tender_awarded", "awarded", "already_tendered", "announced"].includes(tenderState)) return "confirmed_tender";
    if (tenderState === "upcoming_tender") return "early_signal";
    return "needs_review";
  }
  if (value === "early_signal" || value === "needs_review") return value;
  const text = getOpportunityQualityText(opp);
  if (containsAnyNormalizedPhrase(text, ["senn í útboð", "senn i utbod"])) return "early_signal";
  if (containsConfirmedTenderIntent(text)) return "confirmed_tender";
  if (containsTitleNewsIntent(opp?.title || "") && !containsConfirmedTenderIntent(text)) return "needs_review";
  if (containsEarlySignalIntent(text)) return "early_signal";
  if (containsObviousNewsIntent(text)) return "needs_review";
  if (value === "confirmed_tender" || value === "likely_opportunity" || value === "verified") return "needs_review";
  return "needs_review";
}

function normalizeOpportunityIntent(value) {
  const normalized = String(value || "").toLowerCase().trim();
  const aliases = {
    confirmed: "confirmed_tender",
    confirmed_tender: "confirmed_tender",
    likely_opportunity: "confirmed_tender",
    verified: "confirmed_tender",
    early_signal: "early_opportunity",
    early_opportunity: "early_opportunity",
    upcoming_tender: "early_opportunity",
    market_signal: "market_signal",
    project_signal: "market_signal",
    needs_review: "market_signal",
    news_context: "news_context",
    news: "news_context",
    noise: "not_opportunity",
    not_opportunity: "not_opportunity",
    stale_opportunity: "not_opportunity",
    stale: "not_opportunity",
    expired: "not_opportunity",
  };
  return aliases[normalized] || "";
}

function getOpportunityIntent(opp = {}) {
  const override = normalizeOpportunityIntent(opp?.rawPayload?.opportunity_intent || opp?.rawPayload?.intent);
  const adminStatus = String(opp?.rawPayload?.admin_report_status || "").toLowerCase();
  if (adminStatus === "include") return "confirmed_tender";
  if (["hidden", "hide", "noise", "deleted"].includes(adminStatus)) return override || "not_opportunity";
  if (override) return override;
  if (isTedOpportunity(opp)) return "confirmed_tender";

  const text = getOpportunityQualityText(opp);
  const title = opp?.title || "";
  if (isVegagerdinExtractedProject(opp)) {
    const tenderState = getVegagerdinExtractedTenderState(opp);
    if (["tender_awarded", "awarded", "already_tendered", "announced"].includes(tenderState)) return "confirmed_tender";
    if (tenderState === "upcoming_tender") return "early_opportunity";
    return "market_signal";
  }
  if (containsConfirmedTenderIntent(text)) return "confirmed_tender";
  if (containsTitleNewsIntent(title) || containsObviousNewsIntent(text)) return "news_context";
  if (containsEarlyOpportunityIntent(text)) return "early_opportunity";
  if (containsMarketSignalIntent(text)) return "market_signal";
  return "market_signal";
}

function isVegagerdinExtractedProject(opp) {
  return opp?.rawPayload?.extraction_method === "vegagerdin_article_project_parser";
}

function getVegagerdinExtractedTenderState(opp) {
  const stored = String(opp?.rawPayload?.tender_state || "").trim();
  const inferred = inferVegagerdinExtractedTenderState(opp);
  const aliases = {
    awarded: "tender_awarded",
    open_or_published: "announced",
    planned_tender: "upcoming_tender",
    unclear: "project_signal"
  };
  const normalizedStored = aliases[stored] || stored;
  if (inferred === "tender_awarded") return "tender_awarded";
  if (inferred === "already_tendered" && !["tender_awarded", "announced"].includes(normalizedStored)) return "already_tendered";
  if (inferred === "announced" && !["tender_awarded", "already_tendered"].includes(normalizedStored)) return "announced";
  if (inferred === "upcoming_tender" && ["", "project_signal", "needs_review", "unclear"].includes(normalizedStored)) return "upcoming_tender";
  if (normalizedStored) return normalizedStored;
  return inferred;
}

function inferVegagerdinExtractedTenderState(opp) {
  const text = getOpportunityQualityText(opp);
  if (containsAnyNormalizedPhrase(text, [
    "lægstbjóðandi",
    "laegstbjodandi",
    "samningur var",
    "samið var",
    "samid var",
    "skrifað var undir verksamning",
    "skrifad var undir verksamning"
  ])) {
    return "tender_awarded";
  }
  if (containsAnyNormalizedPhrase(text, [
    "útboð var auglýst",
    "utbod var auglyst",
    "útboðið var auglýst",
    "utbodid var auglyst",
    "útboð hefur farið fram",
    "utbod hefur farid fram",
    "útboðið hefur farið fram",
    "utbodid hefur farid fram",
    "boðið út",
    "bodid ut",
    "verkið var boðið út",
    "verkid var bodid ut",
    "útboð var opnað",
    "utbod var opnad",
    "tilboð opnuð",
    "tilbod opnud"
  ])) {
    return "already_tendered";
  }
  if (containsAnyNormalizedPhrase(text, [
    "óskað eftir tilboðum",
    "oskad eftir tilbodum",
    "tilboðsfrestur",
    "tilbodsfrestur",
    "skilafrestur",
    "verðfyrirspurn",
    "verdfyrirspurn",
    "rammasamningur",
    "forval"
  ])) {
    return "announced";
  }
  if (containsAnyNormalizedPhrase(text, [
    "áætlað útboð",
    "aaetlad utbod",
    "áætlað er að bjóða út",
    "aaetlad er ad bjoda ut",
    "fyrirhugað útboð",
    "fyrirhugad utbod",
    "senn í útboð",
    "senn i utbod",
    "útboð verður",
    "utbod verdur"
  ])) {
    return "upcoming_tender";
  }
  return "project_signal";
}

function getOpportunityQualityText(opp) {
  return normalizeLocationText([
    opp?.title,
    opp?.description,
    opp?.category,
    opp?.source,
    ...(Array.isArray(opp?.keywords) ? opp.keywords : [])
  ].filter(Boolean).join(" "));
}

function containsAnyNormalizedPhrase(text, phrases) {
  const normalized = normalizeLocationText(text);
  return phrases.some((phrase) => normalized.includes(normalizeLocationText(phrase)));
}

function containsConfirmedTenderIntent(text) {
  return containsAnyNormalizedPhrase(text, [
    "útboð",
    "utbod",
    "útboðsauglýsing",
    "utbodsauglysing",
    "tilboð",
    "tilboðum",
    "tilbod",
    "tilbodum",
    "óskað eftir tilboðum",
    "oskad eftir tilbodum",
    "verðfyrirspurn",
    "verdfyrirspurn",
    "innkaup",
    "rammasamningur",
    "forval",
    "tender",
    "procurement",
    "skilafrestur",
    "útboðsgögn",
    "utbodsgogn"
  ]);
}

function isStaleCustomerOpportunity(opp = {}) {
  const payload = opp.rawPayload || {};
  if (payload.stale_status === "stale_or_expired" || payload.opportunity_intent === "stale_opportunity") return true;
  return getStaleOpportunityInfo({
    title: opp.title,
    description: opp.description,
    content: [
      opp.category,
      opp.source,
      Array.isArray(opp.keywords) ? opp.keywords.join(" ") : "",
    ].filter(Boolean).join(" "),
    publishedDate: opp.publishedDate,
    deadline: opp.deadline,
    sourceName: opp.source,
    sourceType: opp.sourceType,
    connectorType: payload.connector_type,
  }).isStale;
}

function getStaleOpportunityInfo(input = {}) {
  const deadline = String(input.deadline || "").slice(0, 10);
  if (deadline && daysUntilDeadline(deadline) >= 0) {
    return { isStale: false, reason: "", thresholdDays: null, ageDays: null, oldYears: [], expiredKeywords: [] };
  }

  const text = normalizeLocationText([input.title, input.description, input.content].filter(Boolean).join(" "));
  const oldYears = getOldYearsFromText(text);
  const expiredKeywords = getExpiredResultKeywordsFromText(text);
  const publishedDate = parseIsoDate(input.publishedDate);
  const ageDays = publishedDate ? Math.floor((Date.now() - new Date(`${publishedDate}T00:00:00Z`).getTime()) / 86400000) : null;
  const thresholdDays = isStrictStaleSource(input) ? 45 : 60;

  if (oldYears.length) {
    return { isStale: true, reason: `Old year detected (${oldYears.join(", ")}) and no future deadline found.`, thresholdDays, ageDays, oldYears, expiredKeywords };
  }
  if (expiredKeywords.length) {
    return { isStale: true, reason: `Expired/result wording detected (${expiredKeywords.slice(0, 3).join(", ")}) and no future deadline found.`, thresholdDays, ageDays, oldYears, expiredKeywords };
  }
  if (ageDays !== null && ageDays > thresholdDays) {
    return { isStale: true, reason: `Published ${ageDays} days ago with no current deadline.`, thresholdDays, ageDays, oldYears, expiredKeywords };
  }
  return { isStale: false, reason: "", thresholdDays, ageDays, oldYears, expiredKeywords };
}

function isStrictStaleSource(input = {}) {
  const text = normalizeLocationText(`${input.sourceName || ""} ${input.sourceType || ""} ${input.connectorType || ""}`);
  return String(input.connectorType || "") === "rss_feed" && [
    "municipal",
    "sveitarfelag",
    "akranes",
    "borgarbyggd",
    "arborg",
    "selfoss",
    "gardabaer",
    "reykjanesbaer",
    "hafnarfjordur",
    "mosfellsbaer",
    "kopavogur",
    "mulathing",
    "fjardabyggd",
  ].some((value) => text.includes(normalizeLocationText(value)));
}

function getOldYearsFromText(text) {
  const currentYear = new Date().getUTCFullYear();
  const years = new Set();
  String(text || "").replace(/\b(20[0-9]{2})\b/g, (_match, yearValue) => {
    const year = Number(yearValue);
    if (year >= 2020 && year < currentYear) years.add(year);
    return yearValue;
  });
  return Array.from(years).sort();
}

function getExpiredResultKeywordsFromText(text) {
  const phrases = [
    "niðurstaða útboðs",
    "nidurstada utbods",
    "niðurstöður útboðs",
    "nidurstodur utbods",
    "opnun tilboða",
    "opnun tilboda",
    "tilboð opnuð",
    "tilbod opnud",
    "lokið",
    "lokid",
    "lokið útboði",
    "lokid utbodi",
    "búið",
    "buid",
    "útrunnið",
    "ut runnid",
    "eldri útboð",
    "eldri utbod",
    "útboðssaga",
    "utbodssaga",
    "samningur gerður",
    "samningur gerdur",
    "verksamningur",
    "awarded",
    "tender results",
    "contract awarded",
    "expired",
  ];
  return phrases.filter((phrase) => containsAnyNormalizedPhrase(text, [phrase]));
}

function parseIsoDate(value) {
  if (!value) return "";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  return date.toISOString().slice(0, 10);
}

function containsEarlyOpportunityIntent(text) {
  return containsAnyNormalizedPhrase(text, [
    "senn í útboð",
    "senn i utbod",
    "áætlað útboð",
    "aaetlad utbod",
    "áætlað er að bjóða út",
    "aaetlad er ad bjoda ut",
    "fyrirhugað útboð",
    "fyrirhugad utbod",
    "markaðskönnun",
    "markadskonnun",
    "rfi"
  ]);
}

function containsEarlySignalIntent(text) {
  if (containsEarlyOpportunityIntent(text)) return true;
  return containsAnyNormalizedPhrase(text, [
    "áætlaðar framkvæmdir",
    "aaetladar framkvaemdir",
    "fyrirhugaðar framkvæmdir",
    "fyrirhugadar framkvaemdir",
    "framkvæmdir hefjast",
    "framkvaemdir hefjast",
    "malbikunarframkvæmdir",
    "malbikunarframkvaemdir",
    "vegaframkvæmdir",
    "vegaframkvaemdir",
    "brúargerð",
    "bruargerd",
    "jarðvinna",
    "jardvinna",
    "gatnagerð",
    "gatnagerd"
  ]);
}

function containsMarketSignalIntent(text) {
  return containsAnyNormalizedPhrase(text, [
    "áætlaðar framkvæmdir",
    "aaetladar framkvaemdir",
    "fyrirhugaðar framkvæmdir",
    "fyrirhugadar framkvaemdir",
    "framkvæmdir hefjast",
    "framkvaemdir hefjast",
    "malbikunarframkvæmdir",
    "malbikunarframkvaemdir",
    "vegaframkvæmdir",
    "vegaframkvaemdir",
    "brúargerð",
    "bruargerd",
    "jarðvinna",
    "jardvinna",
    "gatnagerð",
    "gatnagerd",
    "fræsing",
    "fraesing"
  ]);
}

function containsTitleNewsIntent(title) {
  return containsAnyNormalizedPhrase(title, [
    "lokun",
    "lokað",
    "lokad",
    "lokanir",
    "umferð",
    "umferd",
    "tafir",
    "hjáleið",
    "hjaleid",
    "akstursleið",
    "akstursleid",
    "vegfarendur",
    "frétt",
    "frett",
    "myndband",
    "tekur á sig mynd",
    "tekur a sig mynd",
    "opið aftur",
    "opid aftur"
  ]);
}

function containsObviousNewsIntent(text) {
  return containsAnyNormalizedPhrase(text, [
    "lokun",
    "lokanir",
    "umferð",
    "umferd",
    "dagskrá",
    "dagskra",
    "skráning",
    "skraning",
    "myndband",
    "ráðstefna",
    "radstefna",
    "kynningarfundur",
    "tilkynning",
    "fundur",
    "fjölskylduganga",
    "fjolskylduganga",
    "tafir",
    "kynnt",
    "styrkur",
    "frétt",
    "frett",
    "viðburður",
    "vidburdur"
  ]);
}

function getOpportunityCountryCode(opp) {
  const direct = normalizeCountryCode(opp.countryCode);
  if (direct) return direct;

  const location = String(opp.location || "");
  const normalized = normalizeLocationText(location);
  if (
    normalized.includes("iceland") ||
    normalized.includes("island") ||
    normalized.includes("reykjavik") ||
    normalized.includes("capital area") ||
    normalized.includes("hofudborgarsvaedid") ||
    normalized.includes("east iceland") ||
    normalized.includes("west iceland") ||
    normalized.includes("north iceland") ||
    normalized.includes("south iceland") ||
    normalized.includes("sudurnes")
  ) return "IS";
  if (normalized.includes("norway")) return "NO";
  if (normalized.includes("denmark")) return "DK";
  if (normalized.includes("sweden")) return "SE";
  if (normalized.includes("finland")) return "FI";
  return "";
}

function normalizeCountryCode(value) {
  const normalized = String(value || "").trim().toUpperCase();
  const aliases = {
    IS: "IS",
    ISL: "IS",
    ICELAND: "IS",
    ÍSLAND: "IS",
    NO: "NO",
    NOR: "NO",
    NORWAY: "NO",
    DK: "DK",
    DNK: "DK",
    DENMARK: "DK",
    SE: "SE",
    SWE: "SE",
    SWEDEN: "SE",
    FI: "FI",
    FIN: "FI",
    FINLAND: "FI",
  };
  return aliases[normalized] || "";
}

function sanitizeMatchReasons(opp, reasons) {
  if (isIcelandicOpportunity(opp)) return reasons;
  return reasons.filter((reason) => !/^Located in your selected region:/i.test(String(reason || "")));
}

function clearAuthForm() {
  state.authForm = {
    email: "",
    password: "",
    newPassword: "",
    confirmPassword: ""
  };
}

function clearResetPasswordFields() {
  state.authForm.newPassword = "";
  state.authForm.confirmPassword = "";
}

function getTedImportEndpoint() {
  if (window.VERKRADAR_TED_IMPORT_URL) return window.VERKRADAR_TED_IMPORT_URL;
  if (window.VERKRADAR_SUPABASE_URL) return `${window.VERKRADAR_SUPABASE_URL}/functions/v1/import-ted`;
  if (SUPABASE_URL) return `${SUPABASE_URL}/functions/v1/import-ted`;
  return null;
}

function getSourceConnectorImportEndpoint() {
  if (window.VERKRADAR_SOURCE_CONNECTOR_IMPORT_URL) return window.VERKRADAR_SOURCE_CONNECTOR_IMPORT_URL;
  if (window.VERKRADAR_SUPABASE_URL) return `${window.VERKRADAR_SUPABASE_URL}/functions/v1/import-source-connectors`;
  if (SUPABASE_URL) return `${SUPABASE_URL}/functions/v1/import-source-connectors`;
  return null;
}

function getAdminCompanyActionsEndpoint() {
  if (window.VERKRADAR_ADMIN_COMPANY_ACTIONS_URL) return window.VERKRADAR_ADMIN_COMPANY_ACTIONS_URL;
  if (window.VERKRADAR_SUPABASE_URL) return `${window.VERKRADAR_SUPABASE_URL}/functions/v1/admin-company-actions`;
  if (SUPABASE_URL) return `${SUPABASE_URL}/functions/v1/admin-company-actions`;
  return null;
}

async function importTedNotices() {
  if (!state.isAdmin) {
    state.importStatus = { errors: ["You do not have access to import TED notices."] };
    render();
    return;
  }

  const endpoint = getTedImportEndpoint();
  if (!endpoint) {
    state.importStatus = {
      errors: ["TED importer is not configured. Set window.VERKRADAR_TED_IMPORT_URL or window.VERKRADAR_SUPABASE_URL for this environment."],
    };
    render();
    return;
  }

  state.importLoading = true;
  state.importStatus = null;
  state.importedTedOpportunities = [];
  render();

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: await getTedImportHeaders(),
      body: JSON.stringify({ limit: 50, importMode: state.tedImportMode }),
    });
    const payload = await response.json();
    state.importStatus = response.ok ? payload : { ...payload, errors: payload.errors || [`Import failed with status ${response.status}`] };
    if (response.ok) {
      await loadOpportunities();
      const matchedCount = state.companyId ? await runMatchingForCurrentCompany() : Number(payload.matched || 0);
      await loadNewestImportedTedOpportunities();
      if (state.isAdmin) {
        await loadImportRunsForAdmin();
        await loadAdminReports();
      }
      state.importStatus = { ...state.importStatus, matched: matchedCount };
      showToast("TED import completed", "success");
    }
  } catch (error) {
    state.importStatus = { errors: [error instanceof Error ? error.message : String(error)] };
  } finally {
    state.importLoading = false;
    render();
  }
}

async function importSourceConnectors(sourceId = "") {
  if (!state.isAdmin) {
    state.connectorImportStatus = { errors: ["You do not have access to run source imports."] };
    render();
    return;
  }

  const endpoint = getSourceConnectorImportEndpoint();
  if (!endpoint) {
    state.connectorImportStatus = {
      errors: ["Source connector importer is not configured. Set window.VERKRADAR_SOURCE_CONNECTOR_IMPORT_URL or window.VERKRADAR_SUPABASE_URL for this environment."],
    };
    render();
    return;
  }

  state.connectorImportLoading = !sourceId;
  state.connectorTestingSourceId = sourceId || null;
  state.connectorImportStatus = null;
  render();

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: await getTedImportHeaders(),
      body: JSON.stringify({ limit: 50, sourceId: sourceId || undefined }),
    });
    const payload = await response.json();
    state.connectorImportStatus = response.ok ? payload : { ...payload, errors: payload.errors || [`Source import failed with status ${response.status}`] };
    if (response.ok) {
      await loadOpportunities();
      await refreshAdminOperationsData();
      showToast(sourceId ? "Source test completed" : "Automatic source imports completed", "success");
    }
  } catch (error) {
    state.connectorImportStatus = { errors: [error instanceof Error ? error.message : String(error)] };
  } finally {
    state.connectorImportLoading = false;
    state.connectorTestingSourceId = null;
    render();
  }
}

async function loadNewestImportedTedOpportunities() {
  if (!supabaseClient) {
    state.importedTedOpportunities = [];
    state.importedTedOpportunitiesLoaded = true;
    return;
  }

  state.importedTedOpportunitiesLoading = true;
  state.importedTedOpportunitiesError = null;

  try {
    const { data: sources, error: sourceError } = await supabaseClient
      .from("sources")
      .select("id, name")
      .in("name", ["TED Iceland/Nordic", "EU TED", "Tenders Electronic Daily"]);

    if (sourceError) throw sourceError;

    const sourceIds = (sources || []).map((source) => source.id).filter(Boolean);
    if (!sourceIds.length) {
      state.importedTedOpportunities = [];
      return;
    }

    const { data, error } = await supabaseClient
      .from("opportunities")
      .select("*, sources(name, source_type)")
      .in("source_id", sourceIds)
      .order("created_at", { ascending: false })
      .limit(10);

    if (error) throw error;
    state.importedTedOpportunities = (data || []).map(mapSupabaseOpportunity);
  } catch (error) {
    console.error("Failed to load latest TED opportunities:", error);
    state.importedTedOpportunities = [];
    state.importedTedOpportunitiesError = formatSupabaseError(error);
  } finally {
    state.importedTedOpportunitiesLoading = false;
    state.importedTedOpportunitiesLoaded = true;
  }
}

async function getTedImportHeaders() {
  const headers = { "content-type": "application/json" };
  const anonKey = window.VERKRADAR_SUPABASE_ANON_KEY || SUPABASE_ANON_KEY;
  if (anonKey && anonKey !== "PASTE_MY_ANON_PUBLIC_KEY_HERE") {
    headers.apikey = anonKey;
  }

  const { data, error } = supabaseClient
    ? await supabaseClient.auth.getSession()
    : { data: { session: null }, error: null };
  if (error) throw error;
  const accessToken = data.session?.access_token;
  if (!accessToken) {
    throw new Error("You must be logged in to run this admin action.");
  }

  headers.authorization = `Bearer ${accessToken}`;
  return headers;
}

function getAuthRedirectUrl() {
  return window.location.origin;
}

function getPasswordResetRedirectUrl() {
  return `${window.location.origin}/#/reset-password`;
}

async function signUp(email, password) {
  state.authSubmitting = true;
  state.authMessage = null;
  render();

  try {
    if (!supabaseClient) throw new Error("Supabase client is not configured.");
    const { data, error } = await supabaseClient.auth.signUp({
      email: String(email || "").trim(),
      password: String(password || ""),
      options: {
        emailRedirectTo: getAuthRedirectUrl()
      }
    });
    if (error) throw error;
    clearLocalProfileState();
    if (!data.session?.user) {
      state.user = null;
      state.authMessage = { type: "success", text: "Account created. Check your email to confirm your account." };
      clearAuthForm();
      render();
      return;
    }
    state.user = data.session.user;
    state.currentUser = state.user;
    state.profileDraft = null;
    state.profileDraftDirty = false;
    await checkAdminAccess(state.user);
    state.authMessage = { type: "success", text: "Account created." };
    await loadProfileFromSupabase({ overwriteDraft: true });
    clearAuthForm();
    navigate(getPostAuthRoute());
  } catch (error) {
    console.error("Signup failed:", error);
    state.authMessage = { type: "error", text: formatAuthError(error, "signup") };
    render();
  } finally {
    state.authSubmitting = false;
    render();
  }
}

async function signIn(email, password) {
  state.authSubmitting = true;
  state.authMessage = null;
  render();

  try {
    if (!supabaseClient) throw new Error("Supabase client is not configured.");
    const { data, error } = await supabaseClient.auth.signInWithPassword({
      email: String(email || "").trim(),
      password: String(password || "")
    });
    if (error) throw error;
    state.user = data.user || await getCurrentUser();
    state.currentUser = state.user;
    state.profileDraft = null;
    state.profileDraftDirty = false;
    await checkAdminAccess(state.user);
    await loadProfileFromSupabase({ overwriteDraft: true });
    clearAuthForm();
    navigate(getPostAuthRoute());
  } catch (error) {
    console.error("Login failed:", error);
    state.authMessage = { type: "error", text: formatAuthError(error, "login") };
    render();
  } finally {
    state.authSubmitting = false;
    render();
  }
}

async function sendPasswordResetEmail(email) {
  state.authSubmitting = true;
  state.authMessage = null;
  render();

  try {
    if (!supabaseClient) throw new Error("Supabase client is not configured.");
    const { error } = await supabaseClient.auth.resetPasswordForEmail(String(email || "").trim(), {
      redirectTo: getPasswordResetRedirectUrl()
    });
    if (error) throw error;
    state.authMessage = {
      type: "success",
      text: "If an account exists for this email, a reset link has been sent."
    };
  } catch (error) {
    console.error("Password reset request failed:", error);
    state.authMessage = {
      type: "error",
      text: "We could not send a reset link right now. Please try again."
    };
  } finally {
    state.authSubmitting = false;
    render();
  }
}

async function updatePasswordFromReset(newPassword, confirmPassword) {
  const password = String(newPassword || "");
  const confirm = String(confirmPassword || "");

  if (!password) {
    state.authMessage = { type: "error", text: "Enter a new password." };
    render();
    return;
  }
  if (password.length < 8) {
    state.authMessage = { type: "error", text: "Password must be at least 8 characters." };
    render();
    return;
  }
  if (password !== confirm) {
    state.authMessage = { type: "error", text: "Passwords do not match." };
    render();
    return;
  }

  state.authSubmitting = true;
  state.authMessage = null;
  render();

  try {
    if (!supabaseClient) throw new Error("Supabase client is not configured.");
    const { error } = await supabaseClient.auth.updateUser({ password });
    if (error) throw error;
    clearResetPasswordFields();
    navigate("/login");
    state.authMessage = { type: "success", text: "Password updated. You can now log in." };
    render();
  } catch (error) {
    console.error("Password update failed:", error);
    state.authMessage = {
      type: "error",
      text: "This reset link may be expired or invalid. Request a new reset link and try again."
    };
    render();
  } finally {
    state.authSubmitting = false;
    render();
  }
}

async function signOut() {
  try {
    if (supabaseClient) {
      const { error } = await supabaseClient.auth.signOut();
      if (error) throw error;
    }
  } catch (error) {
    console.error("Logout failed:", error);
  } finally {
    state.user = null;
    state.currentUser = null;
    state.isAdmin = false;
    state.authLoaded = true;
    state.adminLoaded = true;
    state.profileLoaded = true;
    clearLocalProfileState();
    navigate("/");
    render();
  }
}

async function getCurrentUser() {
  if (!supabaseClient) return null;
  const { data, error } = await supabaseClient.auth.getUser();
  if (error) {
    console.error("Failed to get current user:", error);
    return null;
  }
  return data.user || null;
}

async function checkAdminAccess(user = state.user) {
  if (!supabaseClient || !user) {
    state.isAdmin = false;
    return false;
  }

  try {
    const { data, error } = await supabaseClient
      .from("admin_users")
      .select("user_id")
      .eq("user_id", user.id)
      .maybeSingle();

    if (error) throw error;
    state.isAdmin = Boolean(data?.user_id);
    return state.isAdmin;
  } catch (error) {
    console.error("Failed to check admin access:", error);
    state.isAdmin = false;
    return false;
  }
}

function requireAuthPage() {
  return renderShell(`
    <section class="empty-state">
      <h1>Log in to continue</h1>
      <p>This page is available after you sign in.</p>
      <button class="btn btn-primary" data-action="go" data-href="/login">Login</button>
      <button class="btn btn-secondary" data-action="go" data-href="/signup">Create account</button>
    </section>
  `);
}

function requireAdminPage() {
  return renderShell(`
    <section class="empty-state">
      <h1>You do not have access to this page.</h1>
      <p>Admin access is limited to approved VerkRadar admin users.</p>
    </section>
  `);
}

let hasBooted = false;
let authListenerRegistered = false;

async function loadCurrentSession() {
  if (!supabaseClient) {
    state.user = null;
    state.currentUser = null;
    return null;
  }

  const { data, error } = await supabaseClient.auth.getSession();
  if (error) throw error;
  state.user = data.session?.user || null;
  state.currentUser = state.user;
  return state.user;
}

async function checkAdminStatus() {
  state.adminLoaded = false;
  await checkAdminAccess(state.currentUser || state.user);
  state.adminLoaded = true;
}

async function loadProfileFromSupabase(options = {}) {
  const { overwriteDraft = false, showGlobalLoading = false } = options;
  const shouldShowGlobalLoading = showGlobalLoading || (!state.profile && !state.profileDraftDirty);
  if (shouldShowGlobalLoading) state.profileLoaded = false;
  state.profileLoading = true;
  state.profileLoadError = null;

  try {
    await withTimeout(
      loadCompanyProfile({ overwriteDraft }),
      PROFILE_LOAD_TIMEOUT_MS,
      "Profile loading took too long. Please retry."
    );
  } catch (error) {
    console.error("Failed to load profile from Supabase:", error);
    state.profileLoadError = formatSupabaseError(error);
  } finally {
    state.profileLoading = false;
    state.profileLoaded = true;
  }
}

function withTimeout(promise, timeoutMs, message) {
  let timeoutId;
  const timeout = new Promise((_, reject) => {
    timeoutId = setTimeout(() => reject(new Error(message)), timeoutMs);
  });
  return Promise.race([promise, timeout]).finally(() => clearTimeout(timeoutId));
}

async function retrySettingsProfileLoad() {
  if (state.isSavingProfile) return;
  state.profileLoadError = null;
  state.profileLoading = true;
  render();
  try {
    await loadProfileFromSupabase({ overwriteDraft: true });
  } catch (error) {
    console.error("Settings profile retry failed:", error);
    state.profileLoadError = formatSupabaseError(error);
  } finally {
    state.profileLoading = false;
    state.profileLoaded = true;
    render();
    afterRouteRender();
  }
}

function registerAuthListener() {
  if (!supabaseClient || authListenerRegistered) return;
  authListenerRegistered = true;

  supabaseClient.auth.onAuthStateChange(async (event, session) => {
    if (!hasBooted) return;

    state.user = session?.user || null;
    state.currentUser = state.user;

    if (state.user) {
      if (event === "PASSWORD_RECOVERY") {
        state.authLoaded = true;
        state.adminLoaded = true;
        state.profileLoaded = true;
        state.authMessage = null;
        navigate("/reset-password");
        return;
      }
      try {
        await checkAdminStatus();
        if (!(state.route === "/settings" && state.profileDraftDirty)) {
          await loadProfileFromSupabase();
        } else {
          state.profileLoaded = true;
        }
      } catch (error) {
        console.error("Auth profile refresh failed:", error);
        state.profileLoadError = formatSupabaseError(error);
        state.adminLoaded = true;
        state.profileLoaded = true;
      }
      if (redirectAuthenticatedPublicRoute()) return;
      render();
      afterRouteRender();
      return;
    }

    state.isAdmin = false;
    state.profile = null;
    state.profileDraft = null;
    state.profileDraftDirty = false;
    state.profileLoading = false;
    state.profileLoadError = null;
    state.companyId = null;
    state.storedMatches = [];
    state.reports = [];
    state.reportsLoaded = false;
    state.reportsLoadError = null;
    state.selectedReportId = null;
    state.authLoaded = true;
    state.adminLoaded = true;
    state.profileLoaded = true;
    if (event === "SIGNED_OUT") navigate("/");
    render();
    afterRouteRender();
  });
}

async function bootApp() {
  state.isBooting = true;
  state.authLoaded = false;
  state.profileLoaded = false;
  state.adminLoaded = false;
  state.bootError = null;
  render();

  try {
    registerAuthListener();
    await loadCurrentSession();
    state.authLoaded = true;

    if (state.currentUser) {
      await checkAdminStatus();
      await loadProfileFromSupabase({ overwriteDraft: true, showGlobalLoading: true });
    } else {
      state.profile = null;
      state.profileDraft = null;
      state.profileDraftDirty = false;
      state.profileLoading = false;
      state.profileLoadError = null;
      state.companyId = null;
      state.isAdmin = false;
      state.adminLoaded = true;
      state.profileLoaded = true;
    }
  } catch (error) {
    console.error("Boot failed:", error);
    state.bootError = formatSupabaseError(error);
    state.authLoaded = true;
    state.adminLoaded = true;
    state.profileLoaded = true;
  } finally {
    state.authLoading = false;
    state.isBooting = false;
    hasBooted = true;
    if (isPasswordRecoveryRoute()) replaceHashRoute("/reset-password");
    else redirectAuthenticatedPublicRoute({ replace: true });
    render();
    afterRouteRender();
  }
}

async function loadCompanyProfile(options = {}) {
  const { overwriteDraft = false } = options;
  if (!supabaseClient || !state.user) {
    state.profile = null;
    if (overwriteDraft || !state.profileDraftDirty) state.profileDraft = null;
    render();
    return;
  }

  try {
    const { data: company, error } = await supabaseClient
      .from("companies")
      .select("*")
      .eq("owner_id", state.user.id)
      .maybeSingle();

    if (error) throw error;
    if (!company) {
      state.companyId = null;
      state.storedMatches = [];
      state.reports = [];
      state.reportsLoaded = false;
      state.reportsLoadError = null;
      state.selectedReportId = null;
      state.profile = null;
      if (overwriteDraft || !state.profileDraftDirty) state.profileDraft = null;
      state.profileLoadError = null;
      render();
      afterRouteRender();
      return;
    }

    if (state.profileDraftDirty && state.companyId && state.companyId !== company.id && !overwriteDraft) {
      const shouldSwitch = window.confirm("You have unsaved profile changes. Switch company profile and discard those edits?");
      if (!shouldSwitch) {
        state.profileLoadError = "Unsaved changes were kept. Save or reload before switching company profiles.";
        render();
        afterRouteRender();
        return;
      }
      state.profileDraftDirty = false;
    }

    const [servicesResult, locationsResult, keywordsResult] = await Promise.all([
      supabaseClient.from("company_services").select("service").eq("company_id", company.id),
      supabaseClient.from("company_locations").select("location").eq("company_id", company.id),
      supabaseClient.from("company_keywords").select("keyword, type").eq("company_id", company.id)
    ]);

    if (servicesResult.error) throw servicesResult.error;
    if (locationsResult.error) throw locationsResult.error;
    if (keywordsResult.error) throw keywordsResult.error;

    if (state.companyId !== company.id) {
      state.reports = [];
      state.reportsLoaded = false;
      state.reportsLoadError = null;
      state.selectedReportId = null;
    }
    state.companyId = company.id;
    const loadedProfile = mapSupabaseCompanyProfile(
      company,
      servicesResult.data || [],
      locationsResult.data || [],
      keywordsResult.data || []
    );
    state.profile = loadedProfile;
    if (overwriteDraft || !state.profileDraftDirty) {
      replaceProfileDraftFromProfile(loadedProfile);
    }
    state.profileLoadError = null;
    saveProfile(state.profile);
    await loadOpportunityActionsForCurrentCompany();
    await loadStoredMatchesForCurrentCompany();
    render();
    afterRouteRender();
  } catch (error) {
    console.error("Failed to load Supabase company profile:", error);
    state.profileLoadError = formatSupabaseError(error);
    if (!state.profileDraftDirty) {
      state.companyId = null;
      state.storedMatches = [];
      state.reports = [];
      state.reportsLoaded = false;
      state.reportsLoadError = null;
      state.selectedReportId = null;
      state.profile = null;
    }
    if (!state.profileDraftDirty) state.profileDraft = null;
    render();
    afterRouteRender();
  }
}

async function saveCompanyProfile(profile) {
  if (!supabaseClient) {
    throw new Error("Supabase client is not configured.");
  }
  const cleanProfile = {
    ...profile,
    companyName: String(profile.companyName || "").trim(),
    contactEmail: String(profile.contactEmail || "").trim(),
    website: String(profile.website || "").trim(),
    industry: String(profile.industry || "").trim(),
    services: cleanStringArray(profile.services),
    locations: cleanStringArray(profile.locations),
    includeKeywords: cleanStringArray(profile.includeKeywords),
    excludeKeywords: cleanStringArray(profile.excludeKeywords),
    baseLocation: String(profile.baseLocation || "").trim(),
    serviceAreas: cleanStringArray(profile.serviceAreas),
    willingToTravel: Boolean(profile.willingToTravel),
    nationalProjects: Boolean(profile.nationalProjects),
    remoteProjects: Boolean(profile.remoteProjects),
    minimumProjectValueForTravel: nullableNumber(profile.minimumProjectValueForTravel),
    minProjectValue: nullableNumber(profile.minProjectValue),
    maxProjectValue: nullableNumber(profile.maxProjectValue),
    allowUnknownValue: Boolean(profile.allowUnknownValue),
    reportFrequency: profile.reportFrequency || "weekly",
    reportDay: profile.reportDay || "monday",
    deadlineReminders: Boolean(profile.deadlineReminders),
    includeLowConfidence: Boolean(profile.includeLowConfidence)
  };
  const { data: { user }, error: userError } = await supabaseClient.auth.getUser();
  if (userError) throw userError;
  if (!user) {
    throw new Error("You must be logged in to save a company profile.");
  }
  state.user = user;

  const { data: company, error: companyError } = await supabaseClient
    .from("companies")
    .upsert({
      owner_id: user.id,
      company_name: cleanProfile.companyName,
      contact_email: cleanProfile.contactEmail || user.email,
      website: cleanProfile.website || null,
      industry: cleanProfile.industry,
      base_location: cleanProfile.baseLocation || null,
      service_areas: cleanProfile.serviceAreas,
      willing_to_travel: cleanProfile.willingToTravel,
      national_projects: cleanProfile.nationalProjects,
      remote_projects: cleanProfile.remoteProjects,
      minimum_project_value_for_travel: cleanProfile.minimumProjectValueForTravel,
      min_project_value: cleanProfile.minProjectValue,
      max_project_value: cleanProfile.maxProjectValue,
      allow_unknown_value: cleanProfile.allowUnknownValue,
      report_frequency: cleanProfile.reportFrequency,
      report_day: cleanProfile.reportDay,
      deadline_reminders: cleanProfile.deadlineReminders,
      include_low_confidence: cleanProfile.includeLowConfidence
    }, { onConflict: "owner_id" })
    .select()
    .single();

  if (companyError) {
    console.error("Company upsert error:", companyError);
    throw companyError;
  }
  if (state.companyId !== company.id) {
    state.reports = [];
    state.reportsLoaded = false;
    state.reportsLoadError = null;
    state.selectedReportId = null;
  }
  state.companyId = company.id;

  const deleteResults = await Promise.all([
    supabaseClient.from("company_services").delete().eq("company_id", company.id),
    supabaseClient.from("company_locations").delete().eq("company_id", company.id),
    supabaseClient.from("company_keywords").delete().eq("company_id", company.id)
  ]);
  const deleteError = deleteResults.find((result) => result.error)?.error;
  if (deleteError) throw deleteError;

  const serviceRows = cleanProfile.services
    .map((service) => ({
      company_id: company.id,
      service
    }));
  const locationRows = cleanProfile.locations
    .map((location) => ({
      company_id: company.id,
      location
    }));
  const keywordRows = [
    ...cleanProfile.includeKeywords.map((keyword) => ({
      company_id: company.id,
      keyword,
      type: "include"
    })),
    ...cleanProfile.excludeKeywords.map((keyword) => ({
      company_id: company.id,
      keyword,
      type: "exclude"
    }))
  ];

  if (serviceRows.length) {
    const { error } = await supabaseClient.from("company_services").insert(serviceRows);
    if (error) throw error;
  }
  if (locationRows.length) {
    const { error } = await supabaseClient.from("company_locations").insert(locationRows);
    if (error) throw error;
  }
  if (keywordRows.length) {
    const { error } = await supabaseClient.from("company_keywords").insert(keywordRows);
    if (error) throw error;
  }

  state.profile = cleanProfile;
  saveProfile(cleanProfile);
}

function mapSupabaseCompanyProfile(company, services, locations, keywords) {
  return {
    companyName: company.company_name || "",
    contactEmail: company.contact_email || "",
    website: company.website || "",
    industry: company.industry || "",
    services: cleanStringArray(services.map((row) => row.service)),
    includeKeywords: cleanStringArray(keywords.filter((row) => row.type === "include").map((row) => row.keyword)),
    excludeKeywords: cleanStringArray(keywords.filter((row) => row.type === "exclude").map((row) => row.keyword)),
    locations: cleanStringArray(locations.map((row) => row.location)),
    baseLocation: company.base_location || "",
    serviceAreas: cleanStringArray(company.service_areas),
    willingToTravel: Boolean(company.willing_to_travel),
    nationalProjects: Boolean(company.national_projects),
    remoteProjects: Boolean(company.remote_projects),
    minimumProjectValueForTravel: company.minimum_project_value_for_travel == null ? null : Number(company.minimum_project_value_for_travel),
    minProjectValue: company.min_project_value == null ? null : Number(company.min_project_value),
    maxProjectValue: company.max_project_value == null ? null : Number(company.max_project_value),
    allowUnknownValue: Boolean(company.allow_unknown_value),
    reportFrequency: company.report_frequency || "weekly",
    reportDay: company.report_day || "monday",
    deadlineReminders: Boolean(company.deadline_reminders),
    includeLowConfidence: Boolean(company.include_low_confidence)
  };
}

async function loadStoredMatchesForCurrentCompany() {
  if (!supabaseClient || !state.companyId) {
    state.storedMatches = [];
    return;
  }

  try {
    const { data, error } = await supabaseClient
      .from("opportunity_matches")
      .select("*, opportunities(*, sources(name, source_type))")
      .eq("company_id", state.companyId)
      .order("match_score", { ascending: false });

    if (error) throw error;
    const matchedAtValues = (data || [])
      .map((row) => row.calculated_at || row.updated_at || row.created_at)
      .filter(Boolean)
      .map((value) => new Date(value).getTime())
      .filter((value) => !Number.isNaN(value));
    state.lastMatchedAt = matchedAtValues.length
      ? new Date(Math.max(...matchedAtValues)).toISOString()
      : null;
    state.storedMatches = (data || [])
      .filter((row) => row.opportunities)
      .map(mapStoredMatch)
      .filter(isCustomerMatchEligibleOpportunity)
      .filter(isDashboardVisibleOpportunity);
  } catch (error) {
    console.error("Failed to load stored opportunity matches. Falling back to frontend matching:", error);
    state.storedMatches = [];
    state.lastMatchedAt = null;
  }
}

async function loadReportsForCurrentCompany() {
  if (!state.companyId) return;
  if (state.reportArchiveLoading) return;

  state.reportArchiveLoading = true;
  state.reportsLoadError = null;
  render();

  try {
    if (!supabaseClient) {
      throw new Error("Supabase client is not configured.");
    }

    const { data, error } = await supabaseClient
      .from("reports")
      .select(`
        *,
        report_items (
          id,
          opportunity_id,
          match_score,
          match_reasons,
          risks,
          sort_order,
          opportunities (
            *,
            sources (
              name,
              source_type
            )
          )
        )
      `)
      .eq("company_id", state.companyId)
      .is("archived_at", null)
      .order("created_at", { ascending: false });

    if (error) throw error;
    state.reports = data || [];
    state.reportsLoaded = true;
  } catch (error) {
    console.error("Failed to load reports:", error);
    state.reportsLoadError = formatSupabaseError(error);
    state.reports = [];
    state.reportsLoaded = true;
  } finally {
    state.reportArchiveLoading = false;
    render();
  }
}

async function saveCurrentReport() {
  if (!state.user) {
    state.reportMessage = { type: "error", text: "Log in to save reports." };
    render();
    return;
  }
  if (!state.companyId) {
    state.reportMessage = { type: "error", text: "Create a company profile before saving reports." };
    render();
    return;
  }

  const matches = getReportMatches();
  if (!matches.length) {
    state.reportMessage = { type: "error", text: "No useful matches above the report threshold yet." };
    render();
    return;
  }
  const report = buildReportContent(state.profile, matches);
  state.reportSaveLoading = true;
  state.reportMessage = null;
  render();

  try {
    const { data: savedReport, error: reportError } = await supabaseClient
      .from("reports")
      .insert({
        company_id: state.companyId,
        title: report.title,
        period_start: report.periodStart,
        period_end: report.periodEnd,
        summary: report.summary,
        text_content: report.textContent,
        html_content: report.htmlContent,
        status: "draft"
      })
      .select("id")
      .single();

    if (reportError) throw reportError;

    const itemRows = matches
      .filter((opp) => isUuid(opp.id))
      .map((opp, index) => ({
        report_id: savedReport.id,
        opportunity_id: opp.id,
        match_score: opp.matchScore,
        match_reasons: opp.matchReasons || [],
        risks: opp.risks || [],
        sort_order: index + 1
      }));

    if (itemRows.length) {
      const { error: itemsError } = await supabaseClient.from("report_items").insert(itemRows);
      if (itemsError) throw itemsError;
    }

    state.reportMessage = { type: "success", text: "Report saved" };
    await loadReportsForCurrentCompany();
    showToast("Report saved", "success");
  } catch (error) {
    console.error("Failed to save report:", error);
    state.reportMessage = { type: "error", text: `Failed to save report. ${formatSupabaseError(error)}` };
  } finally {
    state.reportSaveLoading = false;
    render();
  }
}

async function archiveReport(reportId) {
  if (!reportId || !supabaseClient || !state.user) return;
  const confirmed = window.confirm(state.language === "is"
    ? "Ertu viss um að þú viljir fela þetta yfirlit? Þetta er ekki hægt að afturkalla í mælaborðinu."
    : "Are you sure you want to hide this report? This cannot be undone from the dashboard.");
  if (!confirmed) return;

  state.reportArchiveLoading = true;
  state.reportMessage = null;
  render();

  try {
    const { error } = await supabaseClient
      .from("reports")
      .update({
        archived_at: new Date().toISOString(),
        archived_by: state.user.id
      })
      .eq("id", reportId)
      .eq("company_id", state.companyId);

    if (error) throw error;
    if (state.selectedReportId === reportId) state.selectedReportId = null;
    state.reports = state.reports.filter((report) => report.id !== reportId);
    state.reportMessage = {
      type: "success",
      text: state.language === "is" ? "Yfirlitið var falið." : "Report hidden."
    };
    showToast(state.language === "is" ? "Yfirlit falið" : "Report hidden", "success");
  } catch (error) {
    console.error("Failed to archive report:", error);
    state.reportMessage = {
      type: "error",
      text: state.language === "is"
        ? `Gat ekki falið yfirlitið. ${formatSupabaseError(error)}`
        : `Could not hide report. ${formatSupabaseError(error)}`
    };
  } finally {
    state.reportArchiveLoading = false;
    render();
  }
}

async function runMatchingForCurrentCompany() {
  state.matchingLoading = true;
  state.matchStatus = null;
  render();

  try {
    if (!supabaseClient) {
      throw new Error("Supabase client is not configured.");
    }

    const user = state.user || await getCurrentUser();
    if (!user) throw new Error("You must be logged in to run matching.");
    state.user = user;
    const { data: company, error: companyError } = await supabaseClient
      .from("companies")
      .select("*")
      .eq("owner_id", user.id)
      .maybeSingle();
    if (companyError) throw companyError;
    if (!company) throw new Error("No Supabase company profile found. Save onboarding first.");

    state.companyId = company.id;
    const [servicesResult, locationsResult, keywordsResult, opportunitiesResult] = await Promise.all([
      supabaseClient.from("company_services").select("service").eq("company_id", company.id),
      supabaseClient.from("company_locations").select("location").eq("company_id", company.id),
      supabaseClient.from("company_keywords").select("keyword, type").eq("company_id", company.id),
      supabaseClient.from("opportunities").select("*, sources(name, source_type)").eq("status", "open")
    ]);

    if (servicesResult.error) throw servicesResult.error;
    if (locationsResult.error) throw locationsResult.error;
    if (keywordsResult.error) throw keywordsResult.error;
    if (opportunitiesResult.error) throw opportunitiesResult.error;

    const profile = mapSupabaseCompanyProfile(
      company,
      servicesResult.data || [],
      locationsResult.data || [],
      keywordsResult.data || []
    );
    const wasDraftDirty = state.profileDraftDirty;
    const matched = (opportunitiesResult.data || [])
      .map(mapSupabaseOpportunity)
      .filter(isDashboardVisibleOpportunity)
      .map((opportunity) => calculateMatch(profile, opportunity))
      .filter((match) => match.matchScore >= 50);

    const rows = matched.map((match) => ({
      company_id: company.id,
      opportunity_id: match.id,
      match_score: match.matchScore,
      match_label: match.matchLabel,
      match_reasons: match.matchReasons,
      risks: match.risks,
      next_steps: match.nextSteps,
      calculated_at: new Date().toISOString()
    }));

    const { error: deleteError } = await supabaseClient
      .from("opportunity_matches")
      .delete()
      .eq("company_id", company.id);
    if (deleteError) throw deleteError;

    if (rows.length) {
      const { error: insertError } = await supabaseClient
        .from("opportunity_matches")
        .insert(rows);
      if (insertError) throw insertError;
    }

    state.profile = profile;
    saveProfile(profile);
    if (!wasDraftDirty) {
      replaceProfileDraftFromProfile(profile);
    }
    const plural = rows.length === 1 ? "match" : "matches";
    state.matchStatus = { type: "success", text: `Matching complete — ${rows.length} stored ${plural} found.` };
    await loadOpportunities();
    await loadOpportunityActionsForCurrentCompany();
    await loadStoredMatchesForCurrentCompany();
    return rows.length;
  } catch (error) {
    console.error("Failed to run matching:", error);
    state.matchStatus = { type: "error", text: `Failed to run matching. ${formatSupabaseError(error)}` };
    return 0;
  } finally {
    state.matchingLoading = false;
    render();
  }
}

async function addOpportunity(formData, formElement) {
  if (!state.isAdmin) {
    state.adminMessage = { type: "error", text: "You do not have access to this page." };
    render();
    return;
  }

  state.adminSubmitting = true;
  state.adminMessage = null;
  render();

  try {
    if (!supabaseClient) {
      throw new Error("Supabase client is not configured.");
    }

    const values = Object.fromEntries(formData.entries());
    const sourceName = String(values.sourceName || values.source || "Manual").trim() || "Manual";
    const title = String(values.title || "").trim();
    if (!title) throw new Error("Title is required.");
    const description = String(values.description || "").trim() || `Manual opportunity: ${title}`;

    const sourceId = await getOrCreateSource(sourceName);
    const insertPayload = {
      source_id: sourceId,
      external_id: `manual-${Date.now()}`,
      title: title,
      buyer: String(values.buyer || "").trim() || null,
      category: String(values.category || "").trim() || null,
      type: String(values.type || "").trim() || "tender",
      description,
      deadline: values.deadline || null,
      published_date: values.publishedDate || values.published_date || null,
      location: String(values.location || "").trim() || null,
      estimated_value: values.estimatedValue || values.estimated_value ? Number(values.estimatedValue || values.estimated_value) : null,
      currency: "ISK",
      url: values.url || null,
      cpv_code: values.cpvCode || values.cpv_code || null,
      requirements: parseCommaList(values.requirements),
      keywords: parseCommaList(values.keywords),
      difficulty: String(values.difficulty || "").trim() || "medium",
      status: String(values.status || "").trim() || "open",
      raw_payload: {
        created_from: "admin",
        source_name: sourceName
      }
    };

    const { error } = await supabaseClient
      .from("opportunities")
      .insert(insertPayload)
      .select()
      .single();
    if (error) {
      console.error("Supabase insert error:", error);
      throw new Error(`${error.message} (${error.code})`);
    }

    state.adminMessage = { type: "success", text: "Opportunity saved to Supabase." };
    state.adminOpportunityDraft = createEmptyAdminOpportunityDraft();
    formElement?.reset();
    await loadOpportunities();
    if (state.companyId) await runMatchingForCurrentCompany();
    showToast("Opportunity added", "success");
  } catch (error) {
    const message = formatSupabaseError(error);
    console.error("Failed to add opportunity. If this is an RLS error, allow anon insert/select during development:", error);
    state.adminMessage = { type: "error", text: `Failed to save opportunity. ${message}` };
    render();
  } finally {
    state.adminSubmitting = false;
    render();
  }
}

async function deleteOpportunity(id) {
  if (!state.isAdmin) {
    state.adminMessage = { type: "error", text: "You do not have access to this page." };
    render();
    return;
  }

  state.adminDeletingId = id;
  state.adminMessage = null;
  render();

  try {
    if (!supabaseClient) {
      throw new Error("Supabase client is not configured.");
    }

    const { error } = await supabaseClient.from("opportunities").delete().eq("id", id);
    if (error) throw error;

    state.saved = state.saved.filter((savedId) => savedId !== id);
    state.ignored = state.ignored.filter((ignoredId) => ignoredId !== id);
    saveArray(STORAGE_KEYS.saved, state.saved);
    saveArray(STORAGE_KEYS.ignored, state.ignored);
    state.adminMessage = { type: "success", text: "Opportunity deleted from Supabase." };
    await loadOpportunities();
    await loadNewestImportedTedOpportunities();
    showToast("Opportunity deleted", "success");
  } catch (error) {
    const message = formatSupabaseError(error);
    console.error("Failed to delete opportunity. If this is an RLS error, allow anon delete/select during development:", error);
    state.adminMessage = { type: "error", text: `Failed to delete opportunity. ${message}` };
    render();
  } finally {
    state.adminDeletingId = null;
    render();
  }
}

async function updateOpportunityStatus(id, status) {
  if (!state.isAdmin) {
    state.adminMessage = { type: "error", text: "You do not have access to this page." };
    render();
    return;
  }

  state.adminUpdatingId = id;
  state.adminMessage = null;
  render();

  try {
    if (!supabaseClient) {
      throw new Error("Supabase client is not configured.");
    }

    const { error } = await supabaseClient
      .from("opportunities")
      .update({ status })
      .eq("id", id);
    if (error) throw error;

    state.adminMessage = { type: "success", text: status === "open" ? "Opportunity marked relevant." : "Opportunity hidden." };
    await loadOpportunities();
    await loadNewestImportedTedOpportunities();
    showToast(status === "open" ? "Marked relevant" : "Opportunity hidden", "success");
  } catch (error) {
    const message = formatSupabaseError(error);
    console.error("Failed to update opportunity status:", error);
    state.adminMessage = { type: "error", text: `Failed to update opportunity. ${message}` };
    render();
  } finally {
    state.adminUpdatingId = null;
    render();
  }
}

async function updateOpportunityReportOverride(id, override) {
  if (!state.isAdmin) {
    state.adminMessage = { type: "error", text: "You do not have access to this page." };
    render();
    return;
  }

  const opp = state.opportunities.find((item) => item.id === id);
  if (!opp) return;

  const overrideMap = {
    include: {
      opportunity_intent: "confirmed_tender",
      quality_status: "confirmed_tender",
      hidden_from_reports: false,
      admin_report_status: "include"
    },
    hide: {
      hidden_from_reports: true,
      admin_report_status: "hidden"
    },
    noise: {
      opportunity_intent: "not_opportunity",
      quality_status: "needs_review",
      hidden_from_reports: true,
      admin_report_status: "noise"
    },
    confirmed_tender: {
      opportunity_intent: "confirmed_tender",
      quality_status: "confirmed_tender",
      hidden_from_reports: false,
      admin_report_status: "include"
    },
    early_opportunity: {
      opportunity_intent: "early_opportunity",
      quality_status: "early_signal",
      hidden_from_reports: false,
      admin_report_status: "include"
    }
  };
  const patch = overrideMap[override];
  if (!patch) return;

  state.adminUpdatingId = id;
  state.adminMessage = null;
  render();

  try {
    if (!supabaseClient) {
      throw new Error("Supabase client is not configured.");
    }

    const rawPayload = {
      ...(opp.rawPayload || {}),
      ...patch,
      admin_reviewed_at: new Date().toISOString()
    };
    const { error } = await supabaseClient
      .from("opportunities")
      .update({ raw_payload: rawPayload })
      .eq("id", id);
    if (error) throw error;

    state.adminMessage = { type: "success", text: "Report visibility updated." };
    await loadOpportunities();
    showToast("Report visibility updated", "success");
  } catch (error) {
    const message = formatSupabaseError(error);
    console.error("Failed to update report visibility:", error);
    state.adminMessage = { type: "error", text: `Failed to update report visibility. ${message}` };
    render();
  } finally {
    state.adminUpdatingId = null;
    render();
  }
}

async function getOrCreateSource(sourceName) {
  if (!supabaseClient) {
    throw new Error("Supabase client is not configured");
  }

  const cleanName = sourceName && sourceName.trim()
    ? sourceName.trim()
    : "Manual";

  const { data: existing, error: selectError } = await supabaseClient
    .from("sources")
    .select("id")
    .eq("name", cleanName)
    .maybeSingle();

  if (selectError) {
    console.error("Source select error:", selectError);
    throw selectError;
  }

  if (existing && existing.id) {
    return existing.id;
  }

  const { data: created, error: insertError } = await supabaseClient
    .from("sources")
    .insert({
      name: cleanName,
      source_type: "manual",
      is_active: true,
      notes: "Created from VerkRadar admin page"
    })
    .select("id")
    .single();

  if (insertError) {
    console.error("Source insert error:", insertError);
    throw insertError;
  }

  return created.id;
}

function parseCommaList(value) {
  return String(value || "")
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

function formatSupabaseError(error) {
  if (!error) return "Unknown error";
  if (typeof error === "string") return error;
  return [
    error.message,
    error.details,
    error.hint,
    error.code
  ].filter(Boolean).join(" ");
}

function formatAuthError(error, mode = "login") {
  const message = String(error?.message || error || "").toLowerCase();
  const code = String(error?.code || error?.status || "").toLowerCase();

  if (
    message.includes("invalid login credentials") ||
    message.includes("invalid_credentials") ||
    code.includes("invalid_credentials")
  ) {
    return "Email or password is incorrect.";
  }

  if (message.includes("email not confirmed")) {
    return "Please confirm your email before logging in.";
  }

  if (message.includes("user already registered") || message.includes("already registered")) {
    return "An account with this email already exists. Try logging in instead.";
  }

  if (message.includes("password") && message.includes("characters")) {
    return "Password must be at least 6 characters.";
  }

  if (message.includes("rate limit") || message.includes("too many")) {
    return "Too many attempts. Please wait a moment and try again.";
  }

  if (mode === "signup") {
    return "Could not create account. Please check your email and password.";
  }

  return "Could not log in. Please try again.";
}

function showToast(message, type = "success") {
  state.toast = {
    message,
    type
  };
  render();

  clearTimeout(window.__toastTimeout);
  window.__toastTimeout = setTimeout(() => {
    state.toast = null;
    render();
  }, 2500);
}

function loadProfile() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.profile);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function saveProfile(profile) {
  localStorage.setItem(STORAGE_KEYS.profile, JSON.stringify(profile));
}

function loadArray(key) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveArray(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function splitInput(value) {
  return String(value || "")
    .split(",")
    .map((x) => x.trim())
    .filter(Boolean);
}

function cleanStringArray(value) {
  const values = Array.isArray(value) ? value : splitInput(value);
  return Array.from(new Set(
    values
      .map((item) => String(item || "").trim())
      .filter(Boolean)
  ));
}

function arrayFieldText(value) {
  return cleanStringArray(value).join(", ");
}

function nullableNumber(value) {
  if (value == null || value === "") return null;
  const number = Number(value);
  return Number.isFinite(number) ? number : null;
}

const PROFILE_SUGGESTIONS = {
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

function normalizeSuggestionValue(value) {
  return String(value || "").trim().toLowerCase();
}

function getProfileSuggestions(field, industry = state.profileDraft?.industry) {
  return PROFILE_SUGGESTIONS[field]?.[industry] || [];
}

function toggleProfileSuggestion(field, value) {
  if (!["services", "includeKeywords", "excludeKeywords"].includes(field) || !value) return;
  initializeProfileDraft();
  const currentValues = Array.isArray(state.profileDraft[field]) ? state.profileDraft[field] : [];
  const normalized = normalizeSuggestionValue(value);
  const exists = currentValues.some((item) => normalizeSuggestionValue(item) === normalized);
  state.profileDraft[field] = exists
    ? currentValues.filter((item) => normalizeSuggestionValue(item) !== normalized)
    : [...currentValues, value];
  markProfileDraftDirty();
  render();
}

function renderSuggestionChips({ field, title, values, selectedValues }) {
  if (!values.length) return "";
  const selected = Array.isArray(selectedValues) ? selectedValues : [];
  return `
    <div class="suggestion-group">
      <div class="suggestion-group-head">
        <span>${escapeHtml(title)}</span>
      </div>
      <div class="suggestion-chips">
        ${values.map((value) => {
          const isSelected = selected.some((item) => normalizeSuggestionValue(item) === normalizeSuggestionValue(value));
          return `
            <button
              type="button"
              class="suggestion-chip ${isSelected ? "is-selected" : ""}"
              data-action="toggle-profile-suggestion"
              data-field="${escapeHtml(field)}"
              data-value="${escapeHtml(value)}"
              aria-pressed="${isSelected ? "true" : "false"}"
            >${escapeHtml(value)}</button>
          `;
        }).join("")}
      </div>
    </div>
  `;
}

function initializeProfileDraft() {
  if (state.profileDraft) return;

  if (state.profile) {
    state.profileDraft = cloneProfileForDraft(state.profile);
    return;
  }

  state.profileDraft = getEmptyProfile();
}

function cloneProfileForDraft(profile) {
  return {
    ...profile,
    services: cleanStringArray(profile.services),
    includeKeywords: cleanStringArray(profile.includeKeywords),
    excludeKeywords: cleanStringArray(profile.excludeKeywords),
    locations: cleanStringArray(profile.locations),
    serviceAreas: cleanStringArray(profile.serviceAreas)
  };
}

function markProfileDraftDirty() {
  state.profileDraftDirty = true;
  state.profileSaved = false;
  state.profileSaveMessage = null;
  state.profileSaveError = null;
}

function replaceProfileDraftFromProfile(profile) {
  state.profileDraft = cloneProfileForDraft(profile || getEmptyProfile());
  state.profileDraftDirty = false;
}

function updateProfileDraftFromForm(formElement) {
  initializeProfileDraft();
  const form = new FormData(formElement);
  const nextDraft = { ...state.profileDraft };
  if (hasFormControl(formElement, "companyName")) nextDraft.companyName = String(form.get("companyName") || "").trim();
  if (hasFormControl(formElement, "contactEmail")) nextDraft.contactEmail = String(form.get("contactEmail") || "").trim();
  if (hasFormControl(formElement, "website")) nextDraft.website = String(form.get("website") || "").trim();
  if (hasFormControl(formElement, "industry")) nextDraft.industry = String(form.get("industry") || "");
  if (hasFormControl(formElement, "services")) nextDraft.services = splitInput(form.get("services"));
  if (hasFormControl(formElement, "includeKeywords")) nextDraft.includeKeywords = splitInput(form.get("includeKeywords"));
  if (hasFormControl(formElement, "excludeKeywords")) nextDraft.excludeKeywords = splitInput(form.get("excludeKeywords"));
  if (hasFormControl(formElement, "locations")) nextDraft.locations = form.getAll("locations");
  if (hasFormControl(formElement, "baseLocation")) nextDraft.baseLocation = String(form.get("baseLocation") || "");
  if (hasFormControl(formElement, "serviceAreas")) nextDraft.serviceAreas = splitInput(form.get("serviceAreas"));
  if (hasFormControl(formElement, "willingToTravel")) nextDraft.willingToTravel = form.get("willingToTravel") === "on";
  if (hasFormControl(formElement, "nationalProjects")) nextDraft.nationalProjects = form.get("nationalProjects") === "on";
  if (hasFormControl(formElement, "remoteProjects")) nextDraft.remoteProjects = form.get("remoteProjects") === "on";
  if (hasFormControl(formElement, "minimumProjectValueForTravel")) nextDraft.minimumProjectValueForTravel = String(form.get("minimumProjectValueForTravel") || "");
  if (hasFormControl(formElement, "minProjectValue")) nextDraft.minProjectValue = String(form.get("minProjectValue") || "");
  if (hasFormControl(formElement, "maxProjectValue")) nextDraft.maxProjectValue = String(form.get("maxProjectValue") || "");
  if (hasFormControl(formElement, "allowUnknownValue")) nextDraft.allowUnknownValue = form.get("allowUnknownValue") === "on";
  if (hasFormControl(formElement, "reportFrequency")) nextDraft.reportFrequency = String(form.get("reportFrequency") || "weekly");
  if (hasFormControl(formElement, "reportDay")) nextDraft.reportDay = String(form.get("reportDay") || "monday");
  if (hasFormControl(formElement, "deadlineReminders")) nextDraft.deadlineReminders = form.get("deadlineReminders") === "on";
  if (hasFormControl(formElement, "includeLowConfidence")) nextDraft.includeLowConfidence = form.get("includeLowConfidence") === "on";
  state.profileDraft = nextDraft;
  markProfileDraftDirty();
}

function hasFormControl(formElement, name) {
  return Boolean(formElement.querySelector(`[name="${CSS.escape(name)}"]`));
}

function normalizeProfileDraftForSave() {
  initializeProfileDraft();
  return {
    ...state.profileDraft,
    companyName: String(state.profileDraft.companyName || "").trim(),
    contactEmail: String(state.profileDraft.contactEmail || "").trim(),
    website: String(state.profileDraft.website || "").trim(),
    industry: String(state.profileDraft.industry || ""),
    services: cleanStringArray(state.profileDraft.services),
    includeKeywords: cleanStringArray(state.profileDraft.includeKeywords),
    excludeKeywords: cleanStringArray(state.profileDraft.excludeKeywords),
    locations: cleanStringArray(state.profileDraft.locations),
    baseLocation: String(state.profileDraft.baseLocation || ""),
    serviceAreas: cleanStringArray(state.profileDraft.serviceAreas),
    willingToTravel: Boolean(state.profileDraft.willingToTravel),
    nationalProjects: Boolean(state.profileDraft.nationalProjects),
    remoteProjects: Boolean(state.profileDraft.remoteProjects),
    minimumProjectValueForTravel: nullableNumber(state.profileDraft.minimumProjectValueForTravel),
    minProjectValue: nullableNumber(state.profileDraft.minProjectValue),
    maxProjectValue: nullableNumber(state.profileDraft.maxProjectValue)
  };
}

function textIncludes(text, keyword) {
  return String(text || "").toLowerCase().includes(String(keyword || "").toLowerCase());
}

function opportunityText(opp) {
  return [opp.title, opp.description, opp.category, opp.location, ...(opp.keywords || [])].join(" ").toLowerCase();
}

const CIVIL_STRONG_SERVICE_TERMS = [
  "jarðvinna",
  "gatnagerð",
  "lóðarframkvæmdir",
  "lagnavinna",
  "lagnir",
  "fráveita",
  "vatnslagnir",
  "regnvatnslagnir",
  "malbikun",
  "gangstétt",
  "gangstéttir",
  "stígar",
  "bílastæði",
  "vegagerð",
  "gröftur",
  "jarðvegsskipti",
  "undirbygging",
  "yfirborðsfrágangur",
  "hellulögn",
  "kantsteinn",
  "snjómokstur",
  "gatnaframkvæmdir"
];

const CIVIL_WEAK_GENERIC_TERMS = [
  "framkvæmdir",
  "framkvæmd",
  "útboð",
  "verðfyrirspurn",
  "tilboð",
  "viðhald",
  "verktaki",
  "verk"
];

const CIVIL_INDOOR_DOWNGRADE_TERMS = [
  "innanhússfrágangur",
  "innanhúss",
  "smíði",
  "smíðavinna",
  "málun",
  "gólfefni",
  "innréttingar",
  "raflagnir",
  "pípulagnir",
  "leikskóli",
  "skóli",
  "húsnæði",
  "byggingarvinna"
];

const CIVIL_INDOOR_ALLOWED_SERVICE_TERMS = [
  "innanhússfrágangur",
  "innanhúss",
  "smíði",
  "smíðavinna",
  "málun",
  "gólfefni",
  "innréttingar",
  "raflagnir",
  "pípulagnir",
  "byggingarvinna"
];

function normalizeMatchText(value) {
  return normalizeLocationText(value);
}

function normalizedContainsAny(text, terms) {
  const normalized = normalizeMatchText(text);
  return terms.some((term) => normalized.includes(normalizeMatchText(term)));
}

function isCivilWeakGenericTerm(value) {
  const normalized = normalizeMatchText(value);
  return CIVIL_WEAK_GENERIC_TERMS.some((term) => normalized === normalizeMatchText(term));
}

function rankMatchTerm(value) {
  const normalized = normalizeMatchText(value);
  if (CIVIL_STRONG_SERVICE_TERMS.some((term) => normalized === normalizeMatchText(term))) return 0;
  if (CIVIL_STRONG_SERVICE_TERMS.some((term) => normalized.includes(normalizeMatchText(term)) || normalizeMatchText(term).includes(normalized))) return 1;
  if (isCivilWeakGenericTerm(value)) return 10;
  return 3;
}

function sortMatchTermsBySpecificity(values) {
  return [...values].sort((a, b) => rankMatchTerm(a) - rankMatchTerm(b) || String(b).length - String(a).length || String(a).localeCompare(String(b)));
}

function getStrongCivilTermsInText(text) {
  const normalizedText = normalizeMatchText(text);
  return CIVIL_STRONG_SERVICE_TERMS.filter((term) => normalizedText.includes(normalizeMatchText(term)));
}

function promoteWeakGenericHitsToSpecificCivilTerms(hits, opportunityTextValue) {
  const strongTerms = getStrongCivilTermsInText(opportunityTextValue);
  if (!strongTerms.length || !hits.some(isCivilWeakGenericTerm)) return hits;
  const nonWeakHits = hits.filter((hit) => !isCivilWeakGenericTerm(hit));
  return [...new Set([...strongTerms, ...nonWeakHits])];
}

function isCivilContractorProfile(profile = {}) {
  const profileText = [
    profile.industry,
    ...(Array.isArray(profile.services) ? profile.services : []),
    ...(Array.isArray(profile.includeKeywords) ? profile.includeKeywords : [])
  ].filter(Boolean).join(" ");
  return normalizedContainsAny(profileText, [
    ...CIVIL_STRONG_SERVICE_TERMS,
    "construction",
    "contractor",
    "verktaki",
    "mannvirki",
    "jarðtækni"
  ]);
}

function hasExplicitIndoorService(profile = {}) {
  const profileText = [
    ...(Array.isArray(profile.services) ? profile.services : []),
    ...(Array.isArray(profile.includeKeywords) ? profile.includeKeywords : [])
  ].filter(Boolean).join(" ");
  return normalizedContainsAny(profileText, CIVIL_INDOOR_ALLOWED_SERVICE_TERMS);
}

function getCivilContractorFit(profile, opp, serviceHits, keywordHits) {
  const isCivilProfile = isCivilContractorProfile(profile);
  if (!isCivilProfile) {
    return {
      isCivilProfile: false,
      serviceHits,
      keywordHits,
      hasWeakOnlyFit: false,
      hasIndoorMismatch: false
    };
  }

  const text = opportunityText(opp);
  const hasStrongCivilTerm = normalizedContainsAny(text, CIVIL_STRONG_SERVICE_TERMS);
  const hasIndoorTerm = normalizedContainsAny(text, CIVIL_INDOOR_DOWNGRADE_TERMS);
  const allowsIndoorWork = hasExplicitIndoorService(profile);
  const serviceHitsAreWeakOnly = serviceHits.length > 0 && serviceHits.every(isCivilWeakGenericTerm);
  const keywordHitsAreWeakOnly = keywordHits.length > 0 && keywordHits.every(isCivilWeakGenericTerm);
  const hasAnySpecificHit = [...serviceHits, ...keywordHits].some((hit) => !isCivilWeakGenericTerm(hit));

  const shouldScoreWeakTerms = hasStrongCivilTerm || hasAnySpecificHit;
  const filteredServiceHits = shouldScoreWeakTerms
    ? promoteWeakGenericHitsToSpecificCivilTerms(serviceHits, text)
    : serviceHits.filter((service) => !isCivilWeakGenericTerm(service));
  const filteredKeywordHits = shouldScoreWeakTerms
    ? promoteWeakGenericHitsToSpecificCivilTerms(keywordHits, text)
    : keywordHits.filter((keyword) => !isCivilWeakGenericTerm(keyword));

  return {
    isCivilProfile: true,
    serviceHits: sortMatchTermsBySpecificity(filteredServiceHits),
    keywordHits: sortMatchTermsBySpecificity(filteredKeywordHits),
    hasWeakOnlyFit: !hasStrongCivilTerm && !hasAnySpecificHit && (serviceHitsAreWeakOnly || keywordHitsAreWeakOnly),
    hasIndoorMismatch: hasIndoorTerm && !hasStrongCivilTerm && !allowsIndoorWork
  };
}

function isNationalOpportunity(opp) {
  const location = normalizeLocationText(opp.location);
  const text = normalizeLocationText(`${opp.title} ${opp.description} ${opp.location}`);
  if ([
    "all iceland",
    "iceland",
    "island"
  ].some((value) => location.includes(value))) return true;
  return [
    "national",
    "landsvist",
    "nationwide"
  ].some((value) => text.includes(value));
}

function selectedProfileLocations(profile) {
  return [
    ...(profile.locations || []),
    ...(profile.serviceAreas || []),
    profile.baseLocation
  ].filter(Boolean);
}

function localLocationMatches(profile, opp) {
  const selectedLocations = selectedProfileLocations(profile);
  if (!selectedLocations.length) return false;
  const country = getOpportunityCountryCode(opp);
  if (selectedLocations.includes("All Iceland")) {
    const opportunityLocation = normalizeLocationText(opp.location);
    return country === "IS" || opportunityLocation.includes("iceland") || opportunityLocation.includes("island");
  }
  if (selectedLocations.includes("Remote / Online") && opp.location === "Remote / Online") return true;
  if (!country) return false;
  if (country !== "IS" && selectedLocations.some((location) => normalizeLocationText(location).includes("iceland"))) return false;

  const opportunityLocation = normalizeLocationText(opp.location);
  return selectedLocations.some((loc) => {
    const selected = normalizeLocationText(loc);
    if (!selected) return false;
    if (selected === opportunityLocation) return true;
    if (selected === "reykjavik" && ["reykjavik", "capital area", "hofudborgarsvaedid"].includes(opportunityLocation)) return true;
    return opportunityLocation.includes(selected) || selected.includes(opportunityLocation);
  });
}

function getLocationMatchCategory(profile, opp) {
  if (!profile) return "outside_area_low_confidence";
  if (localLocationMatches(profile, opp)) return "local_match";
  if (profile.locations?.includes("Remote / Online") && opp.location === "Remote / Online") {
    return "remote_match";
  }
  if (isNationalOpportunity(opp) && (isIcelandicOpportunity(opp) || getOpportunityCountryCode(opp) === "IS")) {
    return "national_match";
  }
  if (opp.location === "Remote / Online" && profile.remoteProjects) return "remote_match";
  if (isIcelandicOpportunity(opp) && (profile.nationalProjects || profile.willingToTravel)) {
    return "outside_area_possible";
  }
  return "outside_area_low_confidence";
}

function locationMatches(profile, opp) {
  return ["local_match", "national_match", "remote_match", "outside_area_possible"].includes(getLocationMatchCategory(profile, opp));
}

function locationMatchReason(profile, opp) {
  const category = getLocationMatchCategory(profile, opp);
  if (category === "local_match") return "Local match";
  if (category === "national_match") return "National opportunity";
  if (category === "remote_match") return "Remote opportunity";
  if (category === "outside_area_possible") return "Outside base area but travel allowed";
  if (category === "outside_area_low_confidence") return "Outside selected area; low-confidence location match";
  return null;
}

function isIcelandicOpportunity(opp) {
  const country = getOpportunityCountryCode(opp);
  if (country === "IS") return true;
  const location = normalizeLocationText(opp.location);
  return [
    "iceland",
    "island",
    "all iceland",
    "reykjavik",
    "capital area",
    "hofudborgarsvaedid",
    "east iceland",
    "west iceland",
    "north iceland",
    "south iceland",
    "sudurnes",
  ].some((value) => location.includes(value));
}

function isEuRegionCode(value) {
  return /^[A-Z]{2}[A-Z0-9]{2,4}$/i.test(String(value || "").trim());
}

function normalizeLocationText(value) {
  return String(value || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/æ/g, "ae")
    .replace(/[ðþ]/g, (char) => char === "ð" ? "d" : "th")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function valueMatches(profile, opp) {
  if (!opp.estimatedValue) return Boolean(profile.allowUnknownValue);
  if (profile.minProjectValue && opp.estimatedValue < profile.minProjectValue) return false;
  if (profile.maxProjectValue && opp.estimatedValue > profile.maxProjectValue) return false;
  return true;
}

function categoryMatches(profile, opp) {
  const industry = String(profile.industry || "").toLowerCase();
  const category = String(opp.category || "").toLowerCase();
  return category.includes(industry) || industry.includes(category);
}

function calculateMatch(profile, opp) {
  if (!profile) {
    return {
      ...opp,
      matchScore: 0,
      matchLabel: "Weak match",
      matchReasons: [],
      risks: [],
      nextSteps: []
    };
  }

  const text = opportunityText(opp);
  let score = 0;
  const reasons = [];
  const risks = [];

  if (categoryMatches(profile, opp)) {
    score += 35;
    reasons.push(`Matches your ${profile.industry} industry`);
  }

  const serviceHits = (profile.services || []).filter((service) => textIncludes(text, service));
  const keywordHits = (profile.includeKeywords || []).filter((keyword) => textIncludes(text, keyword));
  const civilFit = getCivilContractorFit(profile, opp, serviceHits, keywordHits);

  for (const service of civilFit.serviceHits) {
    score += 10;
    reasons.push(`Mentions your service: ${service}`);
  }

  for (const keyword of civilFit.keywordHits) {
    score += 8;
    reasons.push(`Contains your keyword: ${keyword}`);
  }

  const locationCategory = getLocationMatchCategory(profile, opp);
  const locationReason = locationMatchReason(profile, opp);
  if (locationCategory === "local_match") {
    score += 22;
    reasons.push(locationReason);
  } else if (locationCategory === "national_match") {
    score += 16;
    reasons.push(locationReason);
  } else if (locationCategory === "remote_match") {
    score += 14;
    reasons.push(locationReason);
  } else if (locationCategory === "outside_area_possible") {
    const travelMinimum = Number(profile.minimumProjectValueForTravel || 0);
    const belowTravelMinimum = travelMinimum && opp.estimatedValue && Number(opp.estimatedValue) < travelMinimum;
    score += belowTravelMinimum ? -4 : 4;
    reasons.push(locationReason);
    risks.push(belowTravelMinimum
      ? "Outside base area and below your preferred travel project value"
      : "Check travel cost, project size and delivery capacity");
  } else {
    score -= 8;
    risks.push("Outside selected area; location match is low confidence");
  }

  if (valueMatches(profile, opp)) {
    score += 10;
    if (opp.estimatedValue) reasons.push("Project value is inside your preferred range");
  } else {
    score -= 25;
    risks.push("Estimated project value is outside your preferred range");
  }

  const days = daysUntilDeadline(opp.deadline);
  if (!opp.deadline) {
    risks.push(getOpportunityMissingDeadlineRisk(opp));
  } else if (days >= 0 && days <= 30) {
    score += 8;
    reasons.push("Deadline is coming up soon");
  } else if (days < 0) {
    score -= 50;
    risks.push("Deadline has passed");
  }

  for (const keyword of profile.excludeKeywords || []) {
    if (textIncludes(text, keyword)) {
      score -= 18;
      risks.push(`Contains exclude keyword: ${keyword}`);
    }
  }

  if ((opp.requirements || []).some((r) => textIncludes(r, "certification") || textIncludes(r, "license"))) {
    risks.push("May require certification or license documentation");
  }
  if (opp.difficulty === "high") {
    risks.push("This appears to be a higher-complexity opportunity");
  }

  if (civilFit.hasWeakOnlyFit) {
    score = Math.min(score, 40);
    risks.push("Only broad construction/procurement terms matched; verify fit");
  }

  if (civilFit.hasIndoorMismatch) {
    score = Math.min(score - 20, 40);
    risks.push("Appears to be indoor/building finishing work outside your core civil services");
  }

  score = Math.max(0, Math.min(100, Math.round(score)));

  return {
    ...opp,
    matchScore: score,
    matchLabel: getMatchLabel(score),
    matchReasons: reasons.slice(0, 5),
    risks: [...new Set(risks)].slice(0, 4),
    nextSteps: [
      "Open the source documents",
      "Confirm mandatory requirements",
      "Check capacity and profitability",
      "Prepare questions before the deadline"
    ]
  };
}

function reconcileStoredMatchForCurrentProfile(opp) {
  if (!state.profile || !isCivilContractorProfile(state.profile)) return opp;
  const recalculated = calculateMatch(state.profile, opp);
  if (Number(recalculated.matchScore || 0) >= Number(opp.matchScore || 0)) return opp;
  return {
    ...opp,
    matchScore: recalculated.matchScore,
    matchLabel: recalculated.matchLabel,
    matchReasons: recalculated.matchReasons,
    risks: recalculated.risks,
    nextSteps: recalculated.nextSteps
  };
}

function getMatchLabel(score) {
  if (score >= 85) return "Strong match";
  if (score >= 65) return "Good match";
  if (score >= 45) return "Possible match";
  return "Weak match";
}

function getMatchedOpportunities() {
  if (state.storedMatches.length) {
    return state.storedMatches
      .filter(isCustomerMatchEligibleOpportunity)
      .filter(isStrictDashboardEligibleOpportunity)
      .filter(isDashboardVisibleOpportunity)
      .filter((opp) => !state.ignored.includes(opp.id))
      .map(reconcileStoredMatchForCurrentProfile)
      .sort((a, b) => b.matchScore - a.matchScore || daysUntilDeadline(a.deadline) - daysUntilDeadline(b.deadline));
  }

  const profile = state.profile || (state.user ? null : defaultProfile);
  if (!profile) return [];
  return state.opportunities
    .filter(isCustomerMatchEligibleOpportunity)
    .map((opp) => calculateMatch(profile, opp))
    .filter(isStrictDashboardEligibleOpportunity)
    .filter(isDashboardVisibleOpportunity)
    .filter((opp) => !state.ignored.includes(opp.id))
    .sort((a, b) => b.matchScore - a.matchScore || daysUntilDeadline(a.deadline) - daysUntilDeadline(b.deadline));
}

function getStoredDashboardMatches() {
  return state.storedMatches
    .filter(isCustomerMatchEligibleOpportunity)
    .filter(isStrictDashboardEligibleOpportunity)
    .filter(isDashboardVisibleOpportunity)
    .filter((opp) => !state.ignored.includes(opp.id))
    .sort((a, b) => b.matchScore - a.matchScore || daysUntilDeadline(a.deadline) - daysUntilDeadline(b.deadline));
}

function getAvailableDashboardOpportunities() {
  const profile = state.profile || (state.user ? null : defaultProfile);
  if (!profile) return [];
  return state.opportunities
    .filter(isCustomerMatchEligibleOpportunity)
    .map((opp) => calculateMatch(profile, opp))
    .filter(isStrictDashboardEligibleOpportunity)
    .filter(isDashboardVisibleOpportunity)
    .filter((opp) => !state.ignored.includes(opp.id))
    .sort((a, b) => {
      const qualityDiff = getOpportunityQualityRank(a) - getOpportunityQualityRank(b);
      if (qualityDiff) return qualityDiff;
      return b.matchScore - a.matchScore || daysUntilDeadline(a.deadline) - daysUntilDeadline(b.deadline);
    });
}

function isStrictDashboardEligibleOpportunity(opp) {
  if (state.isAdmin && state.filters.label === "all_opportunities") return true;
  return isStrictCustomerReportEligible(opp);
}

function getDashboardOpportunityById(id) {
  return [
    ...getStoredDashboardMatches(),
    ...getAvailableDashboardOpportunities(),
  ].find((item) => item.id === id);
}

function getFilteredMatches() {
  const matches = ["all_opportunities", "needs_review"].includes(state.filters.label)
    ? getAvailableDashboardOpportunities()
    : getStoredDashboardMatches();
  const baseMatches = getDashboardFilterBaseMatches(matches);

  if (state.filters.label === "recommended") {
    const recommended = baseMatches.filter(isRecommendedDashboardMatch);
    const fallback = baseMatches.filter(isFallbackDashboardMatch);
    return sortDashboardMatches(recommended.length ? recommended : fallback);
  }

  return sortDashboardMatches(baseMatches.filter(matchesSelectedLabelFilter));
}

function getDashboardFilterBaseMatches(matches) {
  return matches.filter((opp) => {
    const search = state.filters.search.toLowerCase();
    if (search && !opportunityText(opp).includes(search)) return false;
    if (state.filters.category !== "all" && opp.category !== state.filters.category) return false;
    if (state.filters.location !== "all" && opp.location !== state.filters.location) return false;
    if (state.filters.type !== "all" && opp.type !== state.filters.type) return false;
    if (state.filters.savedOnly && !state.saved.includes(opp.id)) return false;
    return true;
  });
}

function matchesSelectedLabelFilter(opp) {
  const selected = state.filters.label;
  if (selected === "all") return true;
  if (selected === "all_opportunities") return true;
  if (selected === "needs_review") return normalizeOpportunityQualityStatus(opp.qualityStatus, opp) === "needs_review";
  if (selected === "recommended") return isRecommendedDashboardMatch(opp);
  if (selected === "strong") return opp.matchLabel === "Strong match" || opp.matchScore >= 85;
  if (selected === "possible") return ["Possible match", "Weak match"].includes(opp.matchLabel) || opp.matchScore < 65;
  return opp.matchLabel === selected;
}

function isRecommendedDashboardMatch(opp) {
  if (!isRecommendedScore(opp)) return false;
  if (isCustomerReportExcludedIntent(opp)) return false;
  if (opp.matchScore >= 85 || opp.matchLabel === "Strong match") return true;
  if (normalizeOpportunityQualityStatus(opp.qualityStatus, opp) === "needs_review") return false;
  if (containsObviousNewsIntent(getOpportunityQualityText(opp))) return false;
  return true;
}

function isFallbackDashboardMatch(opp) {
  if (!isRecommendedScore(opp)) return false;
  if (isCustomerReportExcludedIntent(opp)) return false;
  if (opp.matchScore >= 85 || opp.matchLabel === "Strong match") return true;
  if (normalizeOpportunityQualityStatus(opp.qualityStatus, opp) === "needs_review") return false;
  if (containsObviousNewsIntent(getOpportunityQualityText(opp))) return false;
  return true;
}

function isRecommendedScore(opp) {
  return ["Strong match", "Good match", "Possible match"].includes(opp.matchLabel) || opp.matchScore >= 45;
}

function sortDashboardMatches(matches) {
  return [...matches].sort((a, b) => {
    const qualityDiff = getOpportunityQualityRank(a) - getOpportunityQualityRank(b);
    if (qualityDiff) return qualityDiff;
    return b.matchScore - a.matchScore || daysUntilDeadline(a.deadline) - daysUntilDeadline(b.deadline);
  });
}

function getOpportunityQualityRank(opp) {
  const intent = getOpportunityIntent(opp);
  if (intent === "confirmed_tender") return 0;
  if (intent === "early_opportunity") return 1;
  if (intent === "market_signal") return 2;
  if (intent === "news_context") return 8;
  if (intent === "not_opportunity") return 9;
  const status = normalizeOpportunityQualityStatus(opp.qualityStatus, opp);
  if (status === "confirmed_tender") return 0;
  if (status === "early_signal") return 1;
  return 2;
}

function getDashboardFilterSummary({ visibleCount, storedMatchCount, filteredStoredCount, availableCount, recommendedCount, strongCount, companyName }) {
  const selected = state.filters.label;
  if (state.language === "is") {
    if (selected === "all_opportunities") return `${availableCount} tækifæri eru til í kerfinu. Sýni ${visibleCount} sýnileg tækifæri til yfirferðar.`;
    if (selected === "needs_review") return `${availableCount} tækifæri eru til í kerfinu. Sýni ${visibleCount} atriði sem þarf að staðfesta.`;
    if (selected === "all") return `${storedMatchCount} tækifæri fundust sem gætu passað við ${companyName}. Sýni ${visibleCount}.`;
    if (selected === "strong") return `${storedMatchCount} tækifæri fundust sem gætu passað við ${companyName}. Sýni ${visibleCount} sterkar samsvaranir.`;
    if (selected === "recommended") {
      if (!visibleCount) {
        if (strongCount > 0) return `${strongCount} sterkar samsvaranir eru til fyrir ${companyName}, en þær eru faldar af núverandi síum.`;
        if (filteredStoredCount > 0) return `${filteredStoredCount} tækifæri eru falin af gæðasíum. Notið Allar samsvaranir eða Þarfnast staðfestingar til að skoða þau.`;
        return `Engar ráðlagðar samsvaranir fyrir ${companyName} enn. ${availableCount} tækifæri eru til í kerfinu, en ekkert passar nógu sterkt við þennan prófíl.`;
      }
      return `${storedMatchCount} tækifæri fundust sem gætu passað við ${companyName}. Sýni ${visibleCount} ráðlögð eða möguleg tækifæri.`;
    }
    if (selected === "possible") return `${storedMatchCount} tækifæri fundust sem gætu passað við ${companyName}. Sýni ${visibleCount} mögulegar eða veikar samsvaranir.`;
    return `${storedMatchCount} tækifæri fundust sem gætu passað við ${companyName}. Sýni ${visibleCount} tækifæri.`;
  }
  if (selected === "all_opportunities") {
    return `${availableCount} opportunities are available in the system. Showing ${visibleCount} visible opportunities for inspection.`;
  }
  if (selected === "needs_review") {
    return `${availableCount} opportunities are available in the system. Showing ${visibleCount} needs-review opportunities.`;
  }
  if (selected === "all") return `${storedMatchCount} opportunities may fit ${companyName}. Showing all ${visibleCount}.`;
  if (selected === "strong") return `${storedMatchCount} opportunities may fit ${companyName}. Showing ${visibleCount} strong matches.`;
  if (selected === "recommended") {
    if (!visibleCount) {
      if (strongCount > 0) {
        return `${strongCount} strong ${strongCount === 1 ? "match exists" : "matches exist"} for ${companyName}, but ${strongCount === 1 ? "it is" : "they are"} hidden by your current filters.`;
      }
      if (filteredStoredCount > 0) {
        return `${filteredStoredCount} ${filteredStoredCount === 1 ? "opportunity is" : "opportunities are"} hidden from Recommended by quality checks. Use All matches or Needs review to inspect them.`;
      }
      return `No recommended matches for ${companyName} yet. ${availableCount} opportunities are available in the system, but none match this profile strongly enough.`;
    }
    return `${storedMatchCount} opportunities may fit ${companyName}. Showing ${visibleCount} recommended or possible matches.`;
  }
  if (selected === "possible") return `${storedMatchCount} opportunities may fit ${companyName}. Showing ${visibleCount} possible or weak matches.`;
  return `${storedMatchCount} opportunities may fit ${companyName}. Showing ${visibleCount} ${selected.toLowerCase()} opportunities.`;
}

async function loadOpportunityActionsForCurrentCompany() {
  if (!supabaseClient || !state.companyId) {
    state.opportunityActions = [];
    return;
  }

  try {
    const { data, error } = await supabaseClient
      .from("company_opportunity_actions")
      .select("id, company_id, opportunity_id, action_type, note, created_at, updated_at")
      .eq("company_id", state.companyId);

    if (error) throw error;
    state.opportunityActions = data || [];
    state.saved = state.opportunityActions
      .filter((action) => ["saved", "watched"].includes(action.action_type))
      .map((action) => action.opportunity_id);
    state.ignored = state.opportunityActions
      .filter((action) => action.action_type === "ignored")
      .map((action) => action.opportunity_id);
  } catch (error) {
    console.error("Failed to load company opportunity actions:", error);
    state.opportunityActions = [];
    state.saved = [];
    state.ignored = [];
  }
}

async function setCompanyOpportunityAction(opportunityId, actionType) {
  if (!supabaseClient || !state.companyId) {
    if (actionType === "saved" || actionType === "watched") {
      state.saved = Array.from(new Set([...state.saved, opportunityId]));
      state.ignored = state.ignored.filter((id) => id !== opportunityId);
    }
    if (actionType === "ignored") {
      state.ignored = Array.from(new Set([...state.ignored, opportunityId]));
      state.saved = state.saved.filter((id) => id !== opportunityId);
    }
    saveArray(STORAGE_KEYS.saved, state.saved);
    saveArray(STORAGE_KEYS.ignored, state.ignored);
    return;
  }

  const { error } = await supabaseClient
    .from("company_opportunity_actions")
    .upsert({
      company_id: state.companyId,
      opportunity_id: opportunityId,
      action_type: actionType,
      updated_at: new Date().toISOString()
    }, { onConflict: "company_id,opportunity_id" });

  if (error) throw error;
  await loadOpportunityActionsForCurrentCompany();
}

async function clearCompanyOpportunityAction(opportunityId) {
  if (!supabaseClient || !state.companyId) {
    state.saved = state.saved.filter((id) => id !== opportunityId);
    state.ignored = state.ignored.filter((id) => id !== opportunityId);
    saveArray(STORAGE_KEYS.saved, state.saved);
    saveArray(STORAGE_KEYS.ignored, state.ignored);
    return;
  }

  const { error } = await supabaseClient
    .from("company_opportunity_actions")
    .delete()
    .eq("company_id", state.companyId)
    .eq("opportunity_id", opportunityId);

  if (error) throw error;
  await loadOpportunityActionsForCurrentCompany();
}

async function toggleSave(id) {
  let message = "Opportunity saved";
  try {
    if (state.saved.includes(id)) {
      await clearCompanyOpportunityAction(id);
      message = "Removed from saved";
    } else {
      await setCompanyOpportunityAction(id, "saved");
    }
    showToast(message, "success");
    render();
  } catch (error) {
    console.error("Failed to update saved opportunity:", error);
    showToast("Could not update saved opportunity", "error");
  }
}

async function ignoreOpportunity(id) {
  try {
    await setCompanyOpportunityAction(id, "ignored");
    if (state.selectedOpportunityId === id) state.selectedOpportunityId = null;
    showToast("Opportunity hidden", "success");
    render();
  } catch (error) {
    console.error("Failed to ignore opportunity:", error);
    showToast("Could not hide opportunity", "error");
  }
}

async function unignoreOpportunity(id) {
  try {
    await clearCompanyOpportunityAction(id);
    render();
  } catch (error) {
    console.error("Failed to unignore opportunity:", error);
    showToast("Could not restore opportunity", "error");
  }
}

function openDetails(id) {
  state.selectedOpportunityId = id;
  document.body.classList.add("modal-open");
  render();
}

function closeDetails() {
  clearOpportunityDetailsState();
  render();
}

function clearOpportunityDetailsState() {
  state.selectedOpportunityId = null;
  document.body.classList.remove("modal-open");
}

function syncDetailsFromState() {
  if (!state.selectedOpportunityId) {
    document.body.classList.remove("modal-open");
    return;
  }
  const opp = getDashboardOpportunityById(state.selectedOpportunityId);
  if (!opp) {
    state.selectedOpportunityId = null;
    document.body.classList.remove("modal-open");
    return;
  }
  document.body.classList.add("modal-open");
}

function daysUntilDeadline(dateString) {
  if (!dateString) return 999;
  const today = new Date();
  const d = new Date(dateString + "T00:00:00");
  if (Number.isNaN(d.getTime())) return 999;
  const ms = d - new Date(today.getFullYear(), today.getMonth(), today.getDate());
  return Math.ceil(ms / (1000 * 60 * 60 * 24));
}

function getDeadlineDisplay(value) {
  if (!value) {
    return {
      label: MISSING_DEADLINE_RISK,
      className: "deadline danger"
    };
  }

  const days = daysUntilDeadline(value);
  if (days === 999) {
    return {
      label: MISSING_DEADLINE_RISK,
      className: "deadline danger"
    };
  }

  return {
    label: `${days} days left`,
    className: days <= 14 ? "deadline danger" : "deadline"
  };
}

function formatOpportunityDeadline(value) {
  return value ? formatShortDate(value) : MISSING_DEADLINE_RISK;
}

function formatOpportunityDeadlineForReport(opp) {
  return opp?.deadline ? formatCustomerReportDate(opp.deadline) : formatReportRisk(getOpportunityMissingDeadlineRisk(opp));
}

function getOpportunityMissingDeadlineRisk(opp) {
  if (isVegagerdinExtractedProject(opp)) {
    const tenderState = getVegagerdinExtractedTenderState(opp);
    if (["tender_awarded", "awarded", "already_tendered", "announced"].includes(tenderState)) {
      return "Tender appears already announced/awarded — verify source article.";
    }
    if (tenderState === "upcoming_tender") {
      return "Formal tender deadline not found yet — monitor source article.";
    }
    return EXTRACTED_PROJECT_DEADLINE_RISK;
  }
  const rawWarning = String(opp?.rawPayload?.deadline_warning || "").trim();
  if (rawWarning) return rawWarning;
  return MISSING_DEADLINE_RISK;
}

function getOpportunityDeadlineDisplay(opp) {
  if (!opp?.deadline) {
    return {
      label: getOpportunityMissingDeadlineRisk(opp),
      className: "deadline danger"
    };
  }
  return getDeadlineDisplay(opp.deadline);
}

function formatISK(value) {
  if (!value) return state.language === "is" ? "Ekki gefið upp" : "Value unknown";
  return new Intl.NumberFormat("is-IS").format(value) + " kr";
}

function formatEstimatedValue(value, currency = "ISK") {
  if (!value) return state.language === "is" ? "Ekki gefið upp" : "Value unknown";
  const code = currency || "ISK";
  const suffix = code === "ISK" ? "kr" : code;
  return `${new Intl.NumberFormat("is-IS").format(value)} ${suffix}`;
}

function formatShortDate(value) {
  if (!value) return "No deadline";
  const date = new Date(`${value}T00:00:00`);
  if (Number.isNaN(date.getTime())) return String(value);
  return new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "short",
    day: "2-digit"
  }).format(date);
}

function formatDateTime(value) {
  if (!value) return "Unknown date";
  return new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "short",
    day: "2-digit"
  }).format(new Date(value));
}

function isUuid(value) {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(String(value || ""));
}

function categories() {
  return [...new Set(state.opportunities.map((o) => o.category))].sort();
}

function locations() {
  return [...new Set(state.opportunities.map((o) => o.location))].sort();
}

function types() {
  return [...new Set(state.opportunities.map((o) => o.type))].sort();
}

function badgeClass(label) {
  if (label === "Strong match") return "badge strong";
  if (label === "Good match") return "badge good";
  if (label === "Possible match") return "badge possible";
  return "badge weak";
}

function render() {
  const app = document.getElementById("app");
  const route = state.route;

  let html = "";
  if (state.isBooting || !state.authLoaded || !state.profileLoaded || !state.adminLoaded) html = renderLoadingPage();
  else if (route === "/") html = renderLanding();
  else if (route === "/login") html = renderLogin();
  else if (route === "/signup") html = renderSignup();
  else if (route === "/forgot-password") html = renderForgotPassword();
  else if (route === "/reset-password") html = renderResetPassword();
  else if (route === "/onboarding") html = renderOnboarding();
  else if (route === "/dashboard") html = state.user ? renderDashboard() : requireAuthPage();
  else if (route === "/report") html = state.user ? renderReport() : requireAuthPage();
  else if (route === "/pricing") html = renderPricing();
  else if (route === "/privacy") html = renderPrivacyPolicy();
  else if (route === "/terms") html = renderTermsOfService();
  else if (route === "/data-sources") html = renderDataSourcesPage();
  else if (route === "/cookies") html = renderCookiePolicy();
  else if (route === "/security") html = renderSecurityPage();
  else if (route === "/settings") html = state.user ? renderSettings() : requireAuthPage();
  else if (route === "/admin") html = state.user ? (state.isAdmin ? renderAdmin() : requireAdminPage()) : requireAuthPage();
  else html = renderLanding();

  app.innerHTML = html;
  if (state.selectedOpportunityId) {
    const opp = getDashboardOpportunityById(state.selectedOpportunityId);
    if (opp) {
      document.body.classList.add("modal-open");
      app.insertAdjacentHTML("beforeend", renderOpportunityModal(opp));
    } else {
      syncDetailsFromState();
    }
  } else {
    syncDetailsFromState();
  }
}

function renderLoadingPage() {
  return renderShell(`
    <div class="app-loader">
      <div class="loader-mark" aria-label="${escapeHtml(t("loadingLabel"))}">
        <span></span>
      </div>
    </div>
  `);
}

function renderShell(content) {
  const isLoggedIn = Boolean(state.user);
  const hasProfile = Boolean(state.profile);
  const navItems = isLoggedIn
    ? [
        [t("navDashboard"), "/dashboard"],
        [t("navReport"), "/report"],
        [t("navSettings"), "/settings"]
      ]
    : [
        [t("navHowItWorks"), "#how-it-works"],
        [t("navSampleReport"), "#sample-report"],
        [t("navPricing"), "/pricing"]
      ];
  const headerCta = getHeaderCta(isLoggedIn, hasProfile);

  return `
    <header class="site-header ${state.isMobileMenuOpen ? "is-menu-open" : ""}">
      <div class="header-top">
        <button class="brand" data-action="go" data-href="/">
          <img class="brand-logo" src="./logo.png" alt="VerkRadar" />
        </button>
        <button
          class="menu-toggle"
          type="button"
          data-action="toggle-mobile-menu"
          aria-label="${state.isMobileMenuOpen ? t("closeMenu") : t("openMenu")}"
          aria-expanded="${state.isMobileMenuOpen ? "true" : "false"}"
          aria-controls="mobile-menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div class="header-menu" id="site-menu">
        <nav class="site-nav">
          ${navItems.map(([label, href]) => href.startsWith("#")
            ? `<button data-action="scroll-to" data-target="${href.slice(1)}">${label}</button>`
            : `<button data-action="go" data-href="${href}" ${state.route === href ? 'class="active"' : ""}>${label}</button>`
          ).join("")}
        </nav>
        <div class="header-actions">
          <button class="language-toggle" type="button" data-action="toggle-language" aria-label="Switch language">
            <span class="${state.language === "is" ? "active" : ""}">IS</span>
            <span class="${state.language === "en" ? "active" : ""}">EN</span>
          </button>
          ${!isLoggedIn ? `<button class="btn btn-secondary header-login-btn btn-login" data-action="go" data-href="/login">${t("login")}</button>` : ""}
          ${headerCta ? `<button class="btn btn-primary" data-action="go" data-href="${headerCta.href}">${headerCta.label}</button>` : ""}
          ${isLoggedIn && !state.isMobileMenuOpen ? renderProfileMenu() : ""}
        </div>
      </div>
      ${renderMobileMenuPanel(navItems, headerCta, isLoggedIn)}
    </header>
    <main>${content}</main>
    ${renderFooter()}
    ${state.toast ? `
      <div class="toast toast-${state.toast.type}">
        <span class="toast-dot"></span>
        <span>${escapeHtml(state.toast.message)}</span>
      </div>
    ` : ""}
  `;
}

function renderFooter() {
  const links = [
    [t("privacyPolicy"), "/privacy"],
    [t("termsOfService"), "/terms"],
    [t("dataSources"), "/data-sources"],
    [t("cookies"), "/cookies"],
    [t("security"), "/security"]
  ];
  return `
    <footer class="site-footer">
      <div>
        <strong>VerkRadar</strong>
        <p>${escapeHtml(t("footerText"))}</p>
      </div>
      <nav aria-label="Legal and trust pages">
        ${links.map(([label, href]) => `<button type="button" data-action="go" data-href="${href}">${label}</button>`).join("")}
      </nav>
    </footer>
  `;
}

function renderLegalPage({ eyebrow, title, intro, sections }) {
  return renderShell(`
    <section class="legal-page">
      <div class="legal-hero">
        <p class="eyebrow">${escapeHtml(eyebrow)}</p>
        <h1>${escapeHtml(title)}</h1>
        <p>${escapeHtml(intro)}</p>
        <span>Last updated: June 4, 2026</span>
      </div>
      <div class="legal-layout">
        ${sections.map((section) => `
          <section class="legal-section">
            <h2>${escapeHtml(section.title)}</h2>
            <div class="legal-content">${section.content}</div>
          </section>
        `).join("")}
      </div>
    </section>
  `);
}

function legalParagraphs(items) {
  return items.map((item) => `<p>${escapeHtml(item)}</p>`).join("");
}

function legalList(items) {
  return `<ul>${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;
}

function renderPrivacyPolicy() {
  return renderLegalPage({
    eyebrow: "Legal",
    title: "Privacy Policy",
    intro: "This policy explains how VerkRadar handles account, company profile and opportunity matching data. It is written for clarity and is not a substitute for final legal advice.",
    sections: [
      {
        title: "Who operates VerkRadar",
        content: legalParagraphs([
          "VerkRadar is operated by [LEGAL COMPANY NAME], located in Iceland. You can contact us at support@verkradar.is.",
          "VerkRadar is a B2B tender and opportunity monitoring tool. Businesses use it to create company profiles, monitor public sources, match opportunities and generate reports."
        ])
      },
      {
        title: "Data we collect",
        content: legalParagraphs([
          "We collect account and authentication data, such as email address, login session information and security-related records.",
          "We collect company profile data, including company name, contact email, website, industry, services, keywords, locations, project value preferences and report preferences.",
          "We store product activity needed to run the service, including saved or ignored opportunities, matching results, generated reports, import runs and admin review actions."
        ])
      },
      {
        title: "Public opportunity data",
        content: legalParagraphs([
          "VerkRadar imports and stores public procurement and opportunity data from sources such as EU TED, Útboðsvefur, municipal pages, public tender portals, public websites and manual entries.",
          "This source data may include buyer names, titles, descriptions, deadlines, locations, estimated values, CPV codes, source links and original source payloads."
        ])
      },
      {
        title: "How we use data",
        content: legalList([
          "To create and manage user accounts.",
          "To match public opportunities against company profiles.",
          "To generate dashboards, reports and saved opportunity lists.",
          "To provide support, troubleshoot issues and protect the service.",
          "To improve source quality, matching logic and service reliability."
        ])
      },
      {
        title: "Legal basis in the EEA",
        content: legalParagraphs([
          "For GDPR/EEA purposes, we process data mainly to deliver the service requested by users and companies.",
          "We may also process data based on legitimate interests, such as securing the service, improving matching quality and maintaining import logs. Where a legal obligation applies, we process data to meet that obligation. Where consent is required, we will ask for it."
        ])
      },
      {
        title: "Storage and processors",
        content: legalParagraphs([
          "VerkRadar uses Supabase for database, authentication and related infrastructure. We may use other service providers for hosting, monitoring, email or support as the product develops.",
          "We do not sell company profile data. We share data only where needed to operate the service, comply with law or protect VerkRadar and its users."
        ])
      },
      {
        title: "Retention",
        content: legalParagraphs([
          "We keep account and company data while the account is active or while needed to provide the service.",
          "When deletion is requested, we will delete or anonymize data where legally and technically possible. Some records may be retained for security, audit, billing or legal reasons."
        ])
      },
      {
        title: "Your rights",
        content: legalParagraphs([
          "Depending on your location, you may have rights to access, correct, delete, restrict or receive a copy of your data, object to processing and complain to a data protection authority.",
          "To exercise rights, contact support@verkradar.is. We may need to verify your identity before acting on a request."
        ])
      },
      {
        title: "Security",
        content: legalParagraphs([
          "We use authentication, access controls, database row-level security, Edge Function secrets and limited admin access to protect data.",
          "No system is perfectly secure. If you believe you found a vulnerability, contact support@verkradar.is."
        ])
      },
      {
        title: "Contact",
        content: legalParagraphs([
          "General support and legal contact: support@verkradar.is",
        ])
      }
    ]
  });
}

function renderTermsOfService() {
  return renderLegalPage({
    eyebrow: "Legal",
    title: "Terms of Service",
    intro: "These terms describe how businesses may use VerkRadar. They are plain-language product terms and include placeholders that should be reviewed before production use.",
    sections: [
      {
        title: "Service scope",
        content: legalParagraphs([
          "VerkRadar monitors public tender and opportunity sources, matches opportunities to company profiles and generates dashboards or reports.",
          "The service is an assistance and monitoring tool. It does not replace reading the original tender documents or getting professional advice."
        ])
      },
      {
        title: "User responsibilities",
        content: legalList([
          "Provide accurate account and company profile information.",
          "Check original source documents, requirements, certifications, deadlines, pricing and eligibility before acting.",
          "Keep login credentials secure and use the service only for lawful business purposes."
        ])
      },
      {
        title: "No professional advice",
        content: legalParagraphs([
          "VerkRadar does not provide legal, procurement, financial, tax or bidding advice.",
          "Reports and match scores are recommendations to help prioritise review. They are not final decisions and do not confirm eligibility or compliance."
        ])
      },
      {
        title: "No guarantees",
        content: legalParagraphs([
          "We do not guarantee complete source coverage, perfect data, perfect matching, eligibility for any tender, contract award, uninterrupted uptime or financial results.",
          "Deadlines, values and requirements may change at the original source. Users must verify the source before making business decisions."
        ])
      },
      {
        title: "Acceptable use",
        content: legalList([
          "Do not misuse the service, attempt unauthorized access or interfere with systems.",
          "Do not reverse engineer, scrape abusively, spam, upload illegal content or use VerkRadar for unlawful activity.",
          "Do not attempt to bypass access controls, rate limits or security features."
        ])
      },
      {
        title: "Subscriptions, billing and cancellation",
        content: legalParagraphs([
          "Pricing, billing, cancellation and refund terms are defined on the pricing/order page or in a written agreement with the customer.",
          "If paid plans are introduced or changed, applicable commercial terms will be shown before purchase or renewal where required."
        ])
      },
      {
        title: "Suspension and termination",
        content: legalParagraphs([
          "Users may cancel according to the applicable subscription or written agreement.",
          "VerkRadar may suspend or terminate access for misuse, non-payment, security risk or violation of these terms."
        ])
      },
      {
        title: "Limitation of liability",
        content: legalParagraphs([
          "To the maximum extent allowed by law, VerkRadar is not liable for missed deadlines, incorrect source data, lost business, lost profits or decisions made based on reports or matches.",
          "Users remain responsible for tender review, bidding decisions and compliance with procurement requirements."
        ])
      },
      {
        title: "Changes and governing law",
        content: legalParagraphs([
          "We may update these terms by posting a new version or notifying users where appropriate.",
          "These terms are governed by Icelandic law, unless another law is required by applicable mandatory rules."
        ])
      },
      {
        title: "Contact",
        content: legalParagraphs([
          "General support and legal contact: support@verkradar.is",
        ])
      }
    ]
  });
}

function renderDataSourcesPage() {
  return renderLegalPage({
    eyebrow: "Trust",
    title: "Data Sources & Accuracy Disclaimer",
    intro: "VerkRadar helps businesses monitor public opportunities, but the original source remains the authority.",
    sections: [
      {
        title: "Sources we may monitor",
        content: legalParagraphs([
          "Sources may include EU TED, Útboðsvefur, municipal pages, public tender portals, public websites and manually added opportunities.",
          "The set of sources may change over time as we add, remove or improve import coverage."
        ])
      },
      {
        title: "Source data can be imperfect",
        content: legalList([
          "Source data may be incomplete, delayed, duplicated or changed after import.",
          "Some notices may appear in their original language.",
          "Deadlines, values, locations, buyer names and requirements can change at the original source.",
          "Imported fields may be missing or normalized differently depending on the source."
        ])
      },
      {
        title: "Matching scores are recommendations",
        content: legalParagraphs([
          "Match scores are designed to help users prioritize review. They are not guarantees of relevance, eligibility, compliance or contract success.",
          "A low score may still be worth reviewing, and a high score may still be unsuitable after reading the source documents."
        ])
      },
      {
        title: "Always open the source document",
        content: legalParagraphs([
          "Before acting on any opportunity, open the original source link and review the official documents, deadline, submission method, certifications, pricing requirements and eligibility criteria.",
          "Use VerkRadar as a shortlist and monitoring layer, not as the final procurement record."
        ])
      }
    ]
  });
}

function renderCookiePolicy() {
  return renderLegalPage({
    eyebrow: "Legal",
    title: "Cookie Policy",
    intro: "This page explains how VerkRadar uses cookies and browser storage. At this stage, the product uses essential storage for authentication and app functionality.",
    sections: [
      {
        title: "Essential cookies and storage",
        content: legalParagraphs([
          "VerkRadar uses essential browser storage for login sessions, Supabase Auth/session handling and app preferences needed to provide the service.",
          "Local storage may also be used for saved interface state, demo profile data or basic product preferences."
        ])
      },
      {
        title: "Analytics and tracking",
        content: legalParagraphs([
          "If analytics, advertising or optional tracking tools are added later, this policy should be updated to explain what is used and whether consent is required.",
          "Do not assume analytics are active unless they are clearly listed here or in the product."
        ])
      },
      {
        title: "Controlling storage",
        content: legalParagraphs([
          "You can control or clear cookies and local storage in your browser settings.",
          "Disabling essential cookies or storage may prevent login, session persistence or parts of the app from working correctly."
        ])
      }
    ]
  });
}

function renderSecurityPage() {
  return renderLegalPage({
    eyebrow: "Trust",
    title: "Security & Data Handling",
    intro: "This page explains the practical controls VerkRadar uses to handle account, company and opportunity data. It does not claim certifications that VerkRadar has not obtained.",
    sections: [
      {
        title: "Authentication and account access",
        content: legalParagraphs([
          "User access is handled through Supabase Auth. Users must sign in to access protected dashboard, report, settings and admin areas.",
          "Company profiles are connected to account ownership so users only manage their own company data unless they have admin access."
        ])
      },
      {
        title: "Role-based and admin access",
        content: legalParagraphs([
          "Admin access is limited to users listed as administrators. Admin tools are used to monitor imports, review opportunities and manage manual entries.",
          "Admin access should be granted only to people who need it for operations or support."
        ])
      },
      {
        title: "Database policies",
        content: legalParagraphs([
          "The application uses database row-level security policies to separate user-owned data from admin operations.",
          "Public opportunity data may be visible to authenticated or public users depending on the product view, while company-specific profile and report data is protected."
        ])
      },
      {
        title: "Secrets and automation",
        content: legalParagraphs([
          "Automation runs through server-side functions. Secrets for Edge Functions and scheduled imports are kept server-side and should not be exposed in browser code.",
          "Import runs are logged so administrators can review success, errors, inserted rows, matches and generated reports."
        ])
      },
      {
        title: "Backups, logs and monitoring",
        content: legalParagraphs([
          "Infrastructure providers such as Supabase may maintain backups, logs and operational records according to their platform settings and policies.",
          "VerkRadar keeps operational logs where needed to troubleshoot imports, matching, reports and security issues."
        ])
      },
      {
        title: "Responsible disclosure",
        content: legalParagraphs([
          "If you believe you found a security issue, contact support@verkradar.is with a clear description and steps to reproduce.",
          "Please do not access, modify or delete data that does not belong to you while investigating a potential issue."
        ])
      }
    ]
  });
}

function renderMobileMenuPanel(navItems, headerCta, isLoggedIn) {
  const mobileNavItems = isLoggedIn
    ? [
        [t("navDashboard"), "/dashboard"],
        [t("navReport"), "/report"],
        [t("navSettings"), "/settings"]
      ]
    : navItems;
  const linkItems = mobileNavItems.map(([label, href]) => href.startsWith("#")
    ? `<button type="button" data-action="mobile-scroll-to" data-target="${href.slice(1)}">${label}</button>`
    : `<button type="button" data-action="mobile-nav" data-href="${href}">${label}</button>`
  ).join("");

  return `
    <nav class="mobile-menu-panel" id="mobile-menu">
      <div class="mobile-menu-scroll">
        <div class="mobile-language-block">
          <span>${state.language === "is" ? "Tungumál" : "Language"}</span>
          <button class="language-toggle mobile-language-toggle" type="button" data-action="toggle-language" aria-label="Switch language">
            <span class="${state.language === "is" ? "active" : ""}">IS</span>
            <span class="${state.language === "en" ? "active" : ""}">EN</span>
          </button>
        </div>
      <div class="mobile-menu-links">
        ${linkItems}
        ${isLoggedIn && state.isAdmin ? `<button type="button" data-action="mobile-nav" data-href="/admin">Admin</button>` : ""}
      </div>
      ${renderMobileAccountSection(headerCta, isLoggedIn)}
      </div>
    </nav>
  `;
}

function renderMobileAccountSection(headerCta, isLoggedIn) {
  if (!isLoggedIn) {
    return `
      <div class="mobile-account-section">
        ${headerCta ? `<button class="btn btn-primary mobile-cta" type="button" data-action="mobile-nav" data-href="${headerCta.href}">${headerCta.label}</button>` : ""}
        <button class="btn btn-secondary" type="button" data-action="mobile-nav" data-href="/login">${t("login")}</button>
      </div>
    `;
  }

  const companyName = state.profile?.companyName || t("noCompanyProfile");
  const email = state.user?.email || "";
  const initials = getProfileInitials(companyName, email);

  return `
    <div class="mobile-account-section">
      <div class="mobile-account-header">
        <span class="profile-avatar">${escapeHtml(initials)}</span>
        <div>
          <strong>${escapeHtml(companyName)}</strong>
          <small>${escapeHtml(email)}</small>
        </div>
      </div>
      <div class="mobile-account-actions">
        <button type="button" data-action="mobile-nav" data-href="/dashboard">${t("navDashboard")}</button>
        ${state.profile
          ? `<button type="button" data-action="mobile-nav" data-href="/settings">${t("navSettings")}</button>`
          : `<button type="button" data-action="mobile-nav" data-href="/onboarding">${t("createProfile")}</button>`
        }
        ${state.isAdmin ? `<button type="button" data-action="mobile-nav" data-href="/admin">Admin</button>` : ""}
        <button type="button" class="mobile-logout" data-action="logout">${t("logout")}</button>
      </div>
    </div>
  `;
}

function getHeaderCta(isLoggedIn, hasProfile) {
  if (!isLoggedIn) return { href: "/signup", label: t("getStarted") };
  if (!hasProfile) return { href: "/onboarding", label: t("createProfile") };
  return null;
}

function renderProfileMenu() {
  const companyName = state.profile?.companyName || t("noCompanyProfile");
  const email = state.user?.email || "";
  const initials = getProfileInitials(companyName, email);

  return `
    <div class="profile-menu">
      <button type="button" class="profile-pill" data-action="toggle-profile-menu" aria-haspopup="menu" aria-expanded="${state.profileMenuOpen ? "true" : "false"}">
        <span class="profile-avatar">${escapeHtml(initials)}</span>
        <span class="profile-name">${escapeHtml(companyName)}</span>
        <span class="profile-chevron" aria-hidden="true"></span>
      </button>

      ${state.profileMenuOpen && !state.isMobileMenuOpen && !isMobileViewport() ? `
        <div class="profile-dropdown" role="menu">
          <div class="profile-dropdown-header">
            <strong>${escapeHtml(companyName)}</strong>
            <small>${escapeHtml(email)}</small>
          </div>
          <div class="profile-dropdown-divider"></div>
          ${state.profile ? `
            <button type="button" data-action="go" data-href="/dashboard" role="menuitem">${t("navDashboard")}</button>
            <button type="button" data-action="go" data-href="/settings" role="menuitem">${t("navSettings")}</button>
            ${state.isAdmin ? `<button type="button" data-action="go" data-href="/admin" role="menuitem">Admin</button>` : ""}
          ` : `
            <button type="button" data-action="go" data-href="/onboarding" role="menuitem">${t("createProfile")}</button>
            ${state.isAdmin ? `<button type="button" data-action="go" data-href="/admin" role="menuitem">Admin</button>` : ""}
          `}
          <div class="profile-dropdown-divider"></div>
          <button type="button" class="danger" data-action="logout" role="menuitem">${t("logout")}</button>
        </div>
      ` : ""}
    </div>
  `;
}

function getProfileInitials(companyName, email) {
  const source = companyName && !["No company profile", t("noCompanyProfile")].includes(companyName) ? companyName : email || "VR";
  return source
    .split(/[^a-zA-Z0-9áéíóúýþæöðÁÉÍÓÚÝÞÆÖÐ]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase() || "VR";
}

function requireProfilePage(title, message) {
  return renderShell(`
    <section class="empty-state">
      <h1>${escapeHtml(title)}</h1>
      <p>${escapeHtml(message)}</p>
      <button class="btn btn-primary" data-action="go" data-href="/onboarding">${escapeHtml(t("createProfile"))}</button>
      <button class="btn btn-secondary" data-action="load-demo">${escapeHtml(t("loadDemoCompany"))}</button>
    </section>
  `);
}

function renderAuthMessage() {
  if (!state.authMessage) return "";
  return `
    <div class="admin-message ${state.authMessage.type === "error" ? "is-error" : "is-success"}">
      ${escapeHtml(state.authMessage.text)}
    </div>
  `;
}

function renderLogin() {
  if (state.user) return requireProfilePage(state.language === "is" ? "Þú ert þegar skráð(ur) inn" : "Already logged in", state.language === "is" ? "Opnaðu mælaborðið eða breyttu fyrirtækjaprófílnum." : "Open your dashboard or edit your company profile.");

  return renderShell(`
    <section class="auth-page">
      <div class="auth-layout">
        <div class="auth-copy">
          <p class="eyebrow">${escapeHtml(t("login"))}</p>
          <h1>${escapeHtml(t("authLoginTitle"))}</h1>
          <p>${escapeHtml(t("authLoginSubtitle"))}</p>
        </div>

        <div class="auth-form-column">
          ${renderAuthMessage()}
          <form id="login-form" class="auth-card">
            <label class="form-group">${escapeHtml(t("email"))} <input type="email" name="email" data-auth-field="email" value="${escapeHtml(state.authForm.email)}" autocomplete="email" required /></label>
            <label class="form-group">${escapeHtml(t("password"))} <input type="password" name="password" data-auth-field="password" value="${escapeHtml(state.authForm.password)}" autocomplete="current-password" required /></label>
            <p class="auth-help-link"><button type="button" data-action="go" data-href="/forgot-password">${escapeHtml(t("forgotPassword"))}</button></p>
            <div class="auth-actions">
              <button class="btn btn-primary btn-large" type="submit" ${state.authSubmitting ? "disabled" : ""}>
                ${state.authSubmitting ? escapeHtml(t("loggingIn")) : escapeHtml(t("login"))}
              </button>
            </div>
            <p class="auth-switch">${escapeHtml(t("newToVerkRadar"))} <button type="button" data-action="go" data-href="/signup">${escapeHtml(t("createAccount"))}</button></p>
          </form>
        </div>
      </div>
    </section>
  `);
}

function renderForgotPassword() {
  if (state.user) return requireProfilePage(state.language === "is" ? "Þú ert þegar skráð(ur) inn" : "Already logged in", state.language === "is" ? "Opnaðu mælaborðið eða breyttu fyrirtækjaprófílnum." : "Open your dashboard or edit your company profile.");

  return renderShell(`
    <section class="auth-page">
      <div class="auth-layout">
        <div class="auth-copy">
          <p class="eyebrow">${escapeHtml(t("passwordReset"))}</p>
          <h1>${escapeHtml(t("resetPasswordTitle"))}</h1>
          <p>${escapeHtml(t("resetPasswordSubtitle"))}</p>
        </div>

        <div class="auth-form-column">
          ${renderAuthMessage()}
          <form id="forgot-password-form" class="auth-card">
            <label class="form-group">${escapeHtml(t("email"))} <input type="email" name="email" data-auth-field="email" value="${escapeHtml(state.authForm.email)}" autocomplete="email" required /></label>
            <div class="auth-actions">
              <button class="btn btn-primary btn-large" type="submit" ${state.authSubmitting ? "disabled" : ""}>
                ${state.authSubmitting ? escapeHtml(t("sending")) : escapeHtml(t("sendResetLink"))}
              </button>
            </div>
            <p class="auth-switch">${escapeHtml(t("rememberedPassword"))} <button type="button" data-action="go" data-href="/login">${escapeHtml(t("backToLogin"))}</button></p>
          </form>
        </div>
      </div>
    </section>
  `);
}

function renderResetPassword() {
  return renderShell(`
    <section class="auth-page">
      <div class="auth-layout">
        <div class="auth-copy">
          <p class="eyebrow">${escapeHtml(t("newPassword"))}</p>
          <h1>${escapeHtml(t("chooseNewPassword"))}</h1>
          <p>${escapeHtml(t("resetPasswordHelp"))}</p>
        </div>

        <div class="auth-form-column">
          ${renderAuthMessage()}
          <form id="reset-password-form" class="auth-card">
            <label class="form-group">${escapeHtml(t("newPassword"))} <input type="password" name="newPassword" data-auth-field="newPassword" value="${escapeHtml(state.authForm.newPassword)}" autocomplete="new-password" minlength="8" required /></label>
            <label class="form-group">${escapeHtml(t("confirmNewPassword"))} <input type="password" name="confirmPassword" data-auth-field="confirmPassword" value="${escapeHtml(state.authForm.confirmPassword)}" autocomplete="new-password" minlength="8" required /></label>
            <div class="auth-actions">
              <button class="btn btn-primary btn-large" type="submit" ${state.authSubmitting ? "disabled" : ""}>
                ${state.authSubmitting ? escapeHtml(t("updating")) : escapeHtml(t("updatePassword"))}
              </button>
            </div>
            <p class="auth-switch">${escapeHtml(t("needNewLink"))} <button type="button" data-action="go" data-href="/forgot-password">${escapeHtml(t("sendAnotherResetLink"))}</button></p>
            <p class="auth-switch">${escapeHtml(t("backToLogin"))} <button type="button" data-action="go" data-href="/login">${escapeHtml(t("login"))}</button></p>
          </form>
        </div>
      </div>
    </section>
  `);
}

function renderSignup() {
  if (state.user) return requireProfilePage(state.language === "is" ? "Þú ert þegar skráð(ur) inn" : "Already logged in", state.language === "is" ? "Opnaðu mælaborðið eða breyttu fyrirtækjaprófílnum." : "Open your dashboard or edit your company profile.");

  return renderShell(`
    <section class="auth-page">
      <div class="auth-layout">
        <div class="auth-copy">
          <p class="eyebrow">${escapeHtml(t("createAccount"))}</p>
          <h1>${escapeHtml(t("createAccountTitle"))}</h1>
          <p>${escapeHtml(t("createAccountSubtitle"))}</p>
        </div>

        <div class="auth-form-column">
          ${renderAuthMessage()}
          <form id="signup-form" class="auth-card">
            <label class="form-group">${escapeHtml(t("email"))} <input type="email" name="email" data-auth-field="email" value="${escapeHtml(state.authForm.email)}" autocomplete="email" required /></label>
            <label class="form-group">${escapeHtml(t("password"))} <input type="password" name="password" data-auth-field="password" value="${escapeHtml(state.authForm.password)}" autocomplete="new-password" minlength="6" required /></label>
            <div class="auth-actions">
              <button class="btn btn-primary btn-large" type="submit" ${state.authSubmitting ? "disabled" : ""}>
                ${state.authSubmitting ? escapeHtml(t("creating")) : escapeHtml(t("createAccount"))}
              </button>
            </div>
            <p class="auth-switch">${escapeHtml(t("alreadyHaveAccount"))} <button type="button" data-action="go" data-href="/login">${escapeHtml(t("login"))}</button></p>
          </form>
        </div>
      </div>
    </section>
  `);
}

function renderImportStatus() {
  if (!state.importLoading && !state.importStatus) return "";

  if (state.importLoading) {
    return `<section class="import-panel"><strong>Importing TED notices...</strong><p>Fetching recent TED notices and refreshing matches.</p></section>`;
  }

  const status = state.importStatus || {};
  const errors = Array.isArray(status.errors) ? status.errors : [];
  const importedRows = state.importedTedOpportunities || [];

  return `
    <section class="import-panel">
      ${state.importStatus ? `
        <div class="import-stats">
          <span><strong>${Number(status.fetched || 0)}</strong> fetched</span>
          <span><strong>${Number(status.inserted || 0)}</strong> inserted</span>
          <span><strong>${Number(status.updated || 0)}</strong> updated</span>
          <span><strong>${Number(status.skipped || 0)}</strong> skipped</span>
          <span><strong>${Number(status.matched || 0)}</strong> matches</span>
          <span><strong>${Number(status.reports_generated || 0)}</strong> reports</span>
        </div>
        ${errors.length ? `<ul class="risk-list">${errors.map((error) => `<li>${escapeHtml(error)}</li>`).join("")}</ul>` : `<p>TED import completed.</p>`}
        ${!errors.length ? `
          <div class="import-result-head">
            <h3>Newest imported TED opportunities</h3>
            <button class="btn btn-secondary" type="button" data-action="go" data-href="/dashboard">View imported opportunities on dashboard</button>
          </div>
          ${importedRows.length ? `
            <div class="imported-opportunities">
              ${importedRows.map(renderImportedTedRow).join("")}
            </div>
          ` : `<div class="empty-card">No imported TED opportunities were returned by the latest-results query.</div>`}
        ` : ""}
      ` : ""}
    </section>
  `;
}

function renderConnectorImportStatus() {
  if (!state.connectorImportLoading && !state.connectorTestingSourceId && !state.connectorImportStatus) return "";

  if (state.connectorImportLoading || state.connectorTestingSourceId) {
    return `<section class="import-panel"><strong>Running automatic source imports...</strong><p>Fetching enabled RSS/WordPress connectors and refreshing matches when new rows are saved.</p></section>`;
  }

  const status = state.connectorImportStatus || {};
  const errors = Array.isArray(status.errors) ? status.errors : [];

  return `
    <section class="import-panel">
      <div class="import-stats">
        <span><strong>${Number(status.fetched || 0)}</strong> fetched</span>
        <span><strong>${Number(status.inserted || 0)}</strong> inserted</span>
        <span><strong>${Number(status.updated || 0)}</strong> updated</span>
        <span><strong>${Number(status.skipped || 0)}</strong> skipped</span>
        <span><strong>${Number(status.matched || 0)}</strong> matches</span>
        <span><strong>${Number(status.reports_generated || 0)}</strong> reports</span>
      </div>
      ${errors.length ? `<ul class="risk-list">${errors.map((error) => `<li>${escapeHtml(error)}</li>`).join("")}</ul>` : `<p>Automatic source import completed.</p>`}
    </section>
  `;
}

function renderImportRunRow(run) {
  return `
    <div class="import-run-row">
      <div>
        <strong>${escapeHtml(run.status || "unknown")}</strong>
        <p>${escapeHtml(formatDateTime(run.started_at || run.finished_at || ""))} · ${escapeHtml(run.run_type || "ted-import")}</p>
      </div>
      <div class="import-run-metrics">
        <span>${Number(run.fetched || 0)} fetched</span>
        <span>${Number(run.inserted || 0)} inserted</span>
        <span>${Number(run.updated || 0)} updated</span>
        <span>${Number(run.matched || 0)} matched</span>
        <span>${Number(run.reports_generated || 0)} reports</span>
      </div>
      ${run.error ? `<p class="import-run-error">${escapeHtml(run.error)}</p>` : ""}
    </div>
  `;
}

function renderImportedTedRow(opp) {
  const hasUrl = opp.url && opp.url !== "#";
  const isUpdating = state.adminUpdatingId === opp.id;
  const isDeleting = state.adminDeletingId === opp.id;

  return `
    <div class="imported-opportunity-row">
      <div class="imported-opportunity-main">
        <h4>${escapeHtml(opp.title)}</h4>
        <span class="source-pill language-pill">Original language</span>
        <p>${escapeHtml(formatOpportunityBuyer(opp))}</p>
      </div>
      <dl>
        <div>
          <dt>Country / location</dt>
          <dd>${escapeHtml([opp.countryCode, opp.location].filter(Boolean).join(" / ") || "Unknown")}</dd>
        </div>
        <div>
          <dt>Deadline</dt>
          <dd>${escapeHtml(formatShortDate(opp.deadline))}</dd>
        </div>
        <div>
          <dt>URL</dt>
          <dd>${hasUrl ? `<a href="${escapeHtml(opp.url)}" target="_blank" rel="noreferrer">Open TED</a>` : "No URL"}</dd>
        </div>
        <div>
          <dt>Status</dt>
          <dd>${escapeHtml(opp.status || "Unknown")}</dd>
        </div>
        <div>
          <dt>Imported source</dt>
          <dd>${escapeHtml(opp.source || "Unknown")}</dd>
        </div>
        <div>
          <dt>External ID</dt>
          <dd>${escapeHtml(opp.externalId || "Unknown")}</dd>
        </div>
      </dl>
      <div class="imported-opportunity-actions">
        <button class="btn btn-secondary" type="button" data-action="hide-imported-opportunity" data-id="${escapeHtml(opp.id)}" ${isUpdating || opp.status === "hidden" ? "disabled" : ""}>
          ${isUpdating ? "Updating..." : "Hide"}
        </button>
        <button class="btn btn-secondary" type="button" data-action="mark-imported-relevant" data-id="${escapeHtml(opp.id)}" ${isUpdating || opp.status === "open" ? "disabled" : ""}>
          ${isUpdating ? "Updating..." : "Mark relevant"}
        </button>
        <button class="btn btn-ghost" type="button" data-action="delete-opportunity" data-id="${escapeHtml(opp.id)}" ${isDeleting ? "disabled" : ""}>
          ${isDeleting ? "Deleting..." : "Delete"}
        </button>
      </div>
    </div>
  `;
}

function getLatestImportRun() {
  return (state.importRuns || [])[0] || null;
}

function getRunStatusClass(status) {
  const normalized = String(status || "").toLowerCase();
  if (["success", "completed", "complete", "connected"].includes(normalized)) return "is-success";
  if (["running", "started", "pending", "planned"].includes(normalized)) return "is-running";
  if (["error", "failed", "failure"].includes(normalized)) return "is-error";
  return "";
}

function renderAutomationStatusCard() {
  const latest = getLatestImportRun();

  if (state.importRunsLoading && !latest) {
    return `
      <section class="ops-card automation-status-card">
        <div class="card-header">
          <div>
            <h2>Automation status</h2>
            <p>Loading latest automation run...</p>
          </div>
        </div>
      </section>
    `;
  }

  if (!latest) {
    return `
      <section class="ops-card automation-status-card">
        <div class="card-header">
          <div>
            <h2>Automation status</h2>
            <p>No automation runs yet.</p>
          </div>
        </div>
        ${state.importRunsError ? `<div class="admin-message is-error">${escapeHtml(state.importRunsError)}</div>` : ""}
      </section>
    `;
  }

  const statusClass = getRunStatusClass(latest.status);
  return `
    <section class="ops-card automation-status-card">
      <div class="card-header">
        <div>
          <h2>Automation status</h2>
          <p>Latest import and matching pipeline run.</p>
        </div>
        <span class="status-pill ${statusClass}">${escapeHtml(latest.status || "unknown")}</span>
      </div>
      <div class="ops-metrics">
        <div><span>Type</span><strong>${escapeHtml(latest.run_type || "ted-import")}</strong></div>
        <div><span>Mode</span><strong>${escapeHtml(latest.import_mode || "unknown")}</strong></div>
        <div><span>Fetched</span><strong>${Number(latest.fetched || 0)}</strong></div>
        <div><span>Inserted</span><strong>${Number(latest.inserted || 0)}</strong></div>
        <div><span>Updated</span><strong>${Number(latest.updated || 0)}</strong></div>
        <div><span>Skipped</span><strong>${Number(latest.skipped || 0)}</strong></div>
        <div><span>Matched</span><strong>${Number(latest.matched || 0)}</strong></div>
        <div><span>Reports</span><strong>${Number(latest.reports_generated || 0)}</strong></div>
        <div><span>Started</span><strong>${escapeHtml(formatDateTime(latest.started_at))}</strong></div>
        <div><span>Finished</span><strong>${escapeHtml(formatDateTime(latest.finished_at))}</strong></div>
      </div>
      ${latest.error ? `<div class="admin-message is-error">${escapeHtml(latest.error)}</div>` : ""}
      ${renderImportRunDebug(latest)}
    </section>
  `;
}

function getEdgeFunctionLogsUrl() {
  const baseUrl = window.VERKRADAR_SUPABASE_URL || SUPABASE_URL || "";
  const match = String(baseUrl).match(/^https:\/\/([^.]+)\.supabase\.co/i);
  if (!match) return "";
  return `https://supabase.com/dashboard/project/${match[1]}/functions/import-ted/logs`;
}

function renderAutomationActions() {
  const logsUrl = getEdgeFunctionLogsUrl();
  return `
    <section class="ops-card">
      <div class="card-header">
        <div>
          <h2>Automation actions</h2>
          <p>Run the pipeline manually or refresh the operations view.</p>
        </div>
      </div>
      <div class="automation-actions">
        <button class="btn btn-primary" type="button" data-action="import-ted" ${state.importLoading ? "disabled" : ""}>
          ${state.importLoading ? "Running TED import..." : "Run TED import now"}
        </button>
        <button class="btn btn-secondary" type="button" data-action="import-source-connectors" ${state.connectorImportLoading ? "disabled" : ""}>
          ${state.connectorImportLoading ? "Running source imports..." : "Run automatic source imports now"}
        </button>
        <button class="btn btn-secondary" type="button" data-action="refresh-admin-status" ${(state.importRunsLoading || state.adminReportsLoading) ? "disabled" : ""}>
          ${(state.importRunsLoading || state.adminReportsLoading) ? "Refreshing..." : "Refresh status"}
        </button>
        ${logsUrl ? `<a class="btn btn-secondary" href="${escapeHtml(logsUrl)}" target="_blank" rel="noreferrer">View Edge Function logs</a>` : ""}
      </div>
      <label class="import-mode-control">
        Import mode
        <select data-import-mode ${state.importLoading ? "disabled" : ""}>
          <option value="nordic" ${state.tedImportMode === "nordic" ? "selected" : ""}>Nordic only</option>
          <option value="iceland" ${state.tedImportMode === "iceland" ? "selected" : ""}>Iceland only</option>
          <option value="eu-broad" ${state.tedImportMode === "eu-broad" ? "selected" : ""}>EU broad test</option>
        </select>
      </label>
      ${renderImportStatus()}
      ${renderConnectorImportStatus()}
    </section>
  `;
}

function renderLatestImportRunsTable() {
  const rows = state.importRuns || [];
  return `
    <section class="ops-card">
      <div class="card-header">
        <div>
          <h2>Latest import runs</h2>
          <p>Last ${rows.length || 0} recorded automation runs.</p>
        </div>
      </div>
      ${state.importRunsError ? `<div class="admin-message is-error">${escapeHtml(state.importRunsError)}</div>` : ""}
      ${state.importRunsLoading && !rows.length ? `<div class="empty-card">Loading import runs...</div>` : rows.length ? `
        <div class="ops-table-wrap">
          <table class="ops-table">
            <thead>
              <tr>
                <th>Time</th>
                <th>Type</th>
                <th>Status</th>
                <th>Fetched</th>
                <th>Inserted</th>
                <th>Updated</th>
                <th>Skipped</th>
                <th>Matched</th>
                <th>Reports</th>
                <th>Error</th>
              </tr>
            </thead>
            <tbody>
              ${rows.map(renderImportRunTableRow).join("")}
            </tbody>
          </table>
        </div>
      ` : `<div class="empty-card">No automation runs yet.</div>`}
    </section>
  `;
}

function renderImportRunTableRow(run) {
  const debug = renderImportRunDebug(run, { compact: true });
  return `
    <tr>
      <td>${escapeHtml(formatDateTime(run.started_at || run.finished_at))}</td>
      <td>${escapeHtml(run.run_type || "ted-import")}</td>
      <td><span class="status-pill ${getRunStatusClass(run.status)}">${escapeHtml(run.status || "unknown")}</span></td>
      <td>${Number(run.fetched || 0)}</td>
      <td>${Number(run.inserted || 0)}</td>
      <td>${Number(run.updated || 0)}</td>
      <td>${Number(run.skipped || 0)}</td>
      <td>${Number(run.matched || 0)}</td>
      <td>${Number(run.reports_generated || 0)}</td>
      <td>${run.error ? escapeHtml(run.error) : ""}</td>
    </tr>
    ${debug ? `
      <tr class="import-run-debug-row">
        <td colspan="10">${debug}</td>
      </tr>
    ` : ""}
  `;
}

function getImportRunDetails(run) {
  const details = run?.details;
  if (!details) return {};
  if (typeof details === "string") {
    try {
      return JSON.parse(details) || {};
    } catch {
      return {};
    }
  }
  return typeof details === "object" ? details : {};
}

function renderImportRunDebug(run, options = {}) {
  const details = getImportRunDetails(run);
  const skipReasons = details.skip_reasons && typeof details.skip_reasons === "object" ? details.skip_reasons : {};
  const samples = Array.isArray(details.skipped_samples) ? details.skipped_samples : [];
  const perSource = Array.isArray(details.per_source) ? details.per_source : [];
  const reasonEntries = Object.entries(skipReasons)
    .filter(([, count]) => Number(count) > 0)
    .sort((a, b) => Number(b[1]) - Number(a[1]))
    .slice(0, 5);

  if (!reasonEntries.length && !samples.length && !perSource.length) return "";

  return `
    <div class="import-debug ${options.compact ? "is-compact" : ""}">
      <div class="import-debug-header">
        <strong>Skip diagnostics</strong>
        <span>${Number(run.skipped || 0)} skipped · ${Number(details.connectors_checked || perSource.length || 0)} connector${Number(details.connectors_checked || perSource.length || 0) === 1 ? "" : "s"}</span>
      </div>
      ${perSource.length ? `
        <div class="import-per-source">
          ${perSource.slice(0, 8).map((source) => `
            <div>
              <strong>${escapeHtml(source.source_name || "Unknown source")}</strong>
              <span>${Number(source.fetched || 0)} fetched</span>
              <span>${Number(source.inserted || 0)} inserted</span>
              <span>${Number(source.updated || 0)} updated</span>
              <span>${Number(source.skipped || 0)} skipped</span>
              <span>${Number(source.matched || 0)} matched</span>
            </div>
          `).join("")}
        </div>
      ` : ""}
      ${reasonEntries.length ? `
        <div class="import-skip-reasons">
          ${reasonEntries.map(([reason, count]) => `
            <span><strong>${Number(count)}</strong> ${escapeHtml(formatImportSkipReason(reason))}</span>
          `).join("")}
        </div>
      ` : ""}
      ${samples.length ? `
        <div class="import-skip-samples">
          ${samples.slice(0, 10).map((sample) => `
            <div>
              <strong>${escapeHtml(sample.source_name || sample.source || "Unknown source")}</strong>
              <span>${escapeHtml(sample.title || "Untitled item")}</span>
              <em>${escapeHtml(formatImportSkipReason(sample.reason || "skipped"))}${sample.matchedKeyword ? `: ${escapeHtml(sample.matchedKeyword)}` : ""}${sample.final_quality_status ? ` · ${escapeHtml(formatQualityStatus(sample.final_quality_status))}` : ""}</em>
            </div>
          `).join("")}
        </div>
      ` : ""}
    </div>
  `;
}

function formatImportSkipReason(reason) {
  const labels = {
    missing_title: "missing title",
    missing_url: "missing URL",
    duplicate_existing_opportunity: "duplicate existing opportunity",
    no_include_keyword_match: "no include keyword match",
    matched_exclude_keyword: "matched exclude keyword",
    low_quality_needs_review: "low quality needs review",
    unsupported_connector: "unsupported connector",
    parse_failed: "parse failed",
    fetch_failed: "fetch failed",
  };
  return labels[reason] || String(reason || "skipped").replaceAll("_", " ");
}

function renderLatestTedOpportunities() {
  const rows = state.importedTedOpportunities || [];
  return `
    <section class="ops-card">
      <div class="card-header">
        <div>
          <h2>Latest TED opportunities</h2>
          <p>Newest imported EU TED rows for review.</p>
        </div>
      </div>
      ${state.importedTedOpportunitiesError ? `<div class="admin-message is-error">${escapeHtml(state.importedTedOpportunitiesError)}</div>` : ""}
      ${state.importedTedOpportunitiesLoading && !rows.length ? `<div class="empty-card">Loading TED opportunities...</div>` : rows.length ? `
        <div class="imported-opportunities">
          ${rows.map(renderImportedTedRow).join("")}
        </div>
      ` : `<div class="empty-card">No TED opportunities loaded yet.</div>`}
    </section>
  `;
}

function renderLatestGeneratedReports() {
  const rows = state.adminReports || [];
  return `
    <section class="ops-card">
      <div class="card-header">
        <div>
          <h2>Latest reports generated</h2>
          <p>Newest saved weekly report records.</p>
        </div>
      </div>
      ${state.adminReportsError ? `<div class="admin-message is-error">${escapeHtml(state.adminReportsError)}</div>` : ""}
      ${state.adminReportsLoading && !rows.length ? `<div class="empty-card">Loading reports...</div>` : rows.length ? `
        <div class="ops-table-wrap">
          <table class="ops-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Company</th>
                <th>Created</th>
                <th>Period</th>
                <th>Status</th>
                <th>Items</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              ${rows.map(renderAdminReportRow).join("")}
            </tbody>
          </table>
        </div>
      ` : `<div class="empty-card">No generated reports yet.</div>`}
      ${state.selectedAdminReportId ? renderAdminReportDetails() : ""}
    </section>
  `;
}

function formatSourceType(type) {
  const labels = {
    eu_ted: "EU TED",
    ted: "EU TED",
    api: "EU TED",
    utbodsvefur: "Útboðsvefur",
    municipal_website: "Municipal websites",
    public_institution_page: "Public institution pages",
    private_manual: "Private/manual leads",
    manual: "Private/manual leads",
    tender_portal: "Tender portals"
  };
  return labels[type] || type || "Unknown";
}

function formatConnectorType(type) {
  const labels = {
    ted_api: "TED API",
    rss_feed: "RSS feed",
    wordpress_rest: "WordPress REST",
    official_api: "Official API",
    page_monitor_allowed: "Allowed page monitor",
    manual_fallback: "Manual fallback",
    planned: "Planned",
    permission_required: "Permission required"
  };
  return labels[type] || type || "Planned";
}

function getSourceOpportunityStats(opportunities = []) {
  return opportunities.reduce((stats, opportunity) => {
    const rawPayload = opportunity.raw_payload && typeof opportunity.raw_payload === "object" ? opportunity.raw_payload : {};
    const quality = normalizeOpportunityQualityStatus(rawPayload.quality_status || rawPayload.qualityStatus, opportunity);
    stats.active += 1;
    if (quality === "confirmed_tender") stats.confirmed += 1;
    else if (quality === "early_signal") stats.early += 1;
    else stats.needsReview += 1;
    return stats;
  }, {
    active: 0,
    confirmed: 0,
    early: 0,
    needsReview: 0
  });
}

function getSourceCoverageStatus(source) {
  const status = source.source_status || {};
  const connector = source.source_connectors || {};
  const rawStatus = String(connector.status || status.status || "").toLowerCase();
  const connectorType = String(connector.connector_type || "").toLowerCase();

  if (rawStatus.includes("error")) {
    return { label: "Error", className: "is-error", tone: "error" };
  }

  if (rawStatus === "permission_required" || connectorType === "permission_required") {
    return { label: "Permission required", className: "is-permission", tone: "planned" };
  }

  if (connector.enabled && ["connected", "success", "completed", "complete"].includes(rawStatus)) {
    return { label: "Connected", className: "is-success", tone: "connected" };
  }

  if (connector.enabled && ["rss_feed", "wordpress_rest", "ted_api"].includes(connectorType)) {
    return { label: "Connected", className: "is-success", tone: "connected" };
  }

  if (rawStatus === "planned" || connectorType === "planned") {
    return { label: "Planned", className: "is-planned", tone: "planned" };
  }

  return { label: "Disabled", className: "is-disabled", tone: "disabled" };
}

function renderSourceCoverageSection() {
  const rows = state.sourceCoverage || [];
  return `
    <section class="ops-card">
      <div class="card-header">
        <div>
          <h2>Source coverage</h2>
          <p>Connected and planned lead sources for Icelandic opportunity coverage.</p>
        </div>
      </div>
      ${state.sourceCoverageError ? `<div class="admin-message is-error">${escapeHtml(state.sourceCoverageError)}</div>` : ""}
      ${state.sourceCoverageLoading && !rows.length ? `<div class="empty-card">Loading source coverage...</div>` : rows.length ? `
        <div class="ops-table-wrap">
          <table class="ops-table">
            <thead>
              <tr>
                <th>Source</th>
                <th>Source type</th>
                <th>Connector</th>
                <th>Enabled</th>
                <th>Status</th>
                <th>Last success</th>
                <th>Last error</th>
                <th>Active</th>
                <th>Confirmed</th>
                <th>Early</th>
                <th>Needs review</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              ${rows.map(renderSourceCoverageRow).join("")}
            </tbody>
          </table>
        </div>
      ` : `<div class="empty-card">No sources configured yet.</div>`}
    </section>
  `;
}

function renderSourceCoverageRow(source) {
  const status = source.source_status || {};
  const connector = source.source_connectors || {};
  const coverageStatus = getSourceCoverageStatus(source);
  const canTestConnector = connector.enabled && ["rss_feed", "wordpress_rest"].includes(connector.connector_type);
  const isTesting = state.connectorTestingSourceId === source.id;
  const stats = source.opportunityStats || { active: Number(status.active_opportunities_count || 0), confirmed: 0, early: 0, needsReview: 0 };
  const latest = source.latestOpportunities || [];
  const isExpanded = state.expandedSourceId === source.id;
  const lastError = connector.last_error || status.last_error || "";
  const rowClass = coverageStatus.tone === "connected" ? "source-row-connected" : "source-row-muted";
  return `
    <tr class="${rowClass}">
      <td>
        <strong>${escapeHtml(source.name || "Unknown source")}</strong>
        ${connector.endpoint_url || source.base_url ? `<br><a href="${escapeHtml(connector.endpoint_url || source.base_url)}" target="_blank" rel="noreferrer">${escapeHtml(connector.endpoint_url || source.base_url)}</a>` : ""}
      </td>
      <td>${escapeHtml(formatSourceType(source.source_type))}</td>
      <td>
        <strong>${escapeHtml(formatConnectorType(connector.connector_type))}</strong>
        ${connector.require_any_keyword === false ? `<br><span>Keyword match optional</span>` : `<br><span>Requires keyword match</span>`}
        ${Array.isArray(connector.include_keywords) && connector.include_keywords.length ? `<br><span>Includes: ${escapeHtml(connector.include_keywords.slice(0, 5).join(", "))}${connector.include_keywords.length > 5 ? "..." : ""}</span>` : ""}
        ${Array.isArray(connector.exclude_keywords) && connector.exclude_keywords.length ? `<br><span>Excludes: ${escapeHtml(connector.exclude_keywords.slice(0, 5).join(", "))}${connector.exclude_keywords.length > 5 ? "..." : ""}</span>` : ""}
      </td>
      <td>
        <span class="status-pill ${connector.enabled ? "is-success" : "is-disabled"}">${connector.enabled ? "Enabled" : "Disabled"}</span>
      </td>
      <td><span class="status-pill ${coverageStatus.className}">${escapeHtml(coverageStatus.label)}</span></td>
      <td>${escapeHtml(formatDateTime(connector.last_success_at || status.last_success_at))}</td>
      <td>${lastError ? escapeHtml(lastError) : `<span class="muted-text">None</span>`}</td>
      <td>${Number(stats.active || 0)}</td>
      <td>${Number(stats.confirmed || 0)}</td>
      <td>${Number(stats.early || 0)}</td>
      <td>${Number(stats.needsReview || 0)}</td>
      <td>
        <button class="btn btn-secondary btn-small" type="button" data-action="test-source-connector" data-id="${escapeHtml(source.id)}" ${(!canTestConnector || isTesting || state.connectorImportLoading) ? "disabled" : ""}>
          ${isTesting ? "Testing..." : "Test source"}
        </button>
        <button class="btn btn-ghost btn-small" type="button" data-action="toggle-source-items" data-id="${escapeHtml(source.id)}" ${!latest.length ? "disabled" : ""}>
          ${isExpanded ? "Hide items" : "View latest items"}
        </button>
      </td>
    </tr>
    ${isExpanded ? renderSourceLatestItemsRow(source) : ""}
  `;
}

function renderSourceLatestItemsRow(source) {
  const latest = source.latestOpportunities || [];
  return `
    <tr class="source-items-row">
      <td colspan="12">
        <div class="source-items-panel">
          <div class="source-items-header">
            <strong>Latest active items</strong>
            <span>${latest.length} shown</span>
          </div>
          ${latest.length ? `
            <div class="source-items-list">
              ${latest.map((opportunity) => {
                const rawPayload = opportunity.raw_payload && typeof opportunity.raw_payload === "object" ? opportunity.raw_payload : {};
                const quality = normalizeOpportunityQualityStatus(rawPayload.quality_status || rawPayload.qualityStatus, opportunity);
                return `
                  <div class="source-item">
                    <div>
                      <strong>${escapeHtml(opportunity.title || "Untitled opportunity")}</strong>
                      <span>${escapeHtml(formatReportMetadataValue("buyer", getCleanOpportunityBuyer(opportunity.buyer, source.name)))} · ${escapeHtml(formatOpportunityDeadline(opportunity.deadline))}</span>
                    </div>
                    <span class="quality-badge ${escapeHtml(quality)}">${escapeHtml(formatQualityStatus(quality))}</span>
                    ${opportunity.url ? `<a class="btn btn-ghost btn-small" href="${escapeHtml(opportunity.url)}" target="_blank" rel="noreferrer">Open</a>` : ""}
                  </div>
                `;
              }).join("")}
            </div>
          ` : `<div class="empty-card">No active items for this source.</div>`}
        </div>
      </td>
    </tr>
  `;
}

function renderAdminReportRow(report) {
  const companyName = report.companies?.company_name || "Unknown company";
  const itemCount = Array.isArray(report.report_items) ? report.report_items.length : 0;
  return `
    <tr>
      <td>${escapeHtml(getCustomerReportTitle(report, companyName))}</td>
      <td>${escapeHtml(companyName)}</td>
      <td>${escapeHtml(formatDateTime(report.created_at))}</td>
      <td>${escapeHtml(`${formatShortDate(report.period_start)} - ${formatShortDate(report.period_end)}`)}</td>
      <td>${escapeHtml(report.status || "draft")}</td>
      <td>${itemCount}</td>
      <td>
        <div class="admin-row-actions">
          <button class="btn btn-secondary btn-small" type="button" data-action="view-admin-report" data-id="${escapeHtml(report.id)}">View report</button>
          <button class="btn btn-ghost btn-small" type="button" data-action="copy-admin-report" data-id="${escapeHtml(report.id)}">Copy text</button>
          <button class="btn btn-ghost btn-small" type="button" data-action="view-admin-report" data-id="${escapeHtml(report.id)}">Open for PDF</button>
        </div>
      </td>
    </tr>
  `;
}

function renderAdminReportDetails() {
  const listReport = (state.adminReports || []).find((item) => item.id === state.selectedAdminReportId);
  const report = state.selectedAdminReport?.id === state.selectedAdminReportId ? state.selectedAdminReport : listReport;
  if (!report && !state.selectedAdminReportLoading && !state.selectedAdminReportError) return "";
  if (!report) {
    return `
      <div class="modal-backdrop">
        <div class="modal admin-report-modal" role="dialog" aria-modal="true">
          <div class="modal-header">
            <div>
              <span class="status-pill is-success">generated</span>
              <h2>Loading report</h2>
              <p>Loading saved report items...</p>
            </div>
            <button type="button" class="icon-btn modal-close-btn" data-action="close-admin-report" aria-label="Close report">×</button>
          </div>
          <div class="modal-body">
            ${state.selectedAdminReportError ? `<div class="admin-message is-error">${escapeHtml(state.selectedAdminReportError)}</div>` : `<div class="empty-card">Loading saved report items...</div>`}
          </div>
        </div>
      </div>
    `;
  }
  const companyName = report.companies?.company_name || "Unknown company";
  const itemCount = Array.isArray(report.report_items) ? report.report_items.length : 0;
  const cleanTitle = getCustomerReportTitle(report, companyName);
  return `
    <div class="modal-backdrop">
      <div class="modal admin-report-modal" role="dialog" aria-modal="true">
        <div class="modal-header">
          <div>
            <span class="status-pill is-success">${escapeHtml(report.status || "generated")}</span>
            <h2>${escapeHtml(cleanTitle)}</h2>
            <p>${escapeHtml(companyName)} · ${escapeHtml(`${formatShortDate(report.period_start)} - ${formatShortDate(report.period_end)}`)} · ${escapeHtml(formatDateTime(report.created_at))}</p>
          </div>
          <button type="button" class="icon-btn modal-close-btn" data-action="close-admin-report" aria-label="Close report">×</button>
        </div>
        <div class="modal-body">
          <div class="admin-report-actions">
            <button class="btn btn-primary" type="button" data-action="download-admin-report-pdf" ${state.selectedAdminReportLoading ? "disabled" : ""}>Download PDF</button>
            <button class="btn btn-secondary" type="button" data-action="copy-admin-report" data-id="${escapeHtml(report.id)}">Copy text/email summary</button>
            <button class="btn btn-ghost" type="button" data-action="close-admin-report">Close</button>
          </div>

          ${state.selectedAdminReportLoading ? `<div class="empty-card">Loading saved report items...</div>` : ""}
          ${state.selectedAdminReportError ? `<div class="admin-message is-error">${escapeHtml(state.selectedAdminReportError)}</div>` : ""}
          ${!state.selectedAdminReportLoading ? renderAdminReportMetadataStrip(report, itemCount, companyName) : ""}

          ${!state.selectedAdminReportLoading && itemCount ? renderSavedReportPreview(report, { companyName }, {
            id: "admin-report-preview",
            closeButton: false,
            includeTextArea: false
          }) : !state.selectedAdminReportLoading ? `
            <div class="empty-card">No new eligible opportunities in this report.</div>
          ` : ""}

          ${!state.selectedAdminReportLoading && itemCount ? renderAdminReportItems(report) : ""}
        </div>
      </div>
    </div>
  `;
}

function renderAdminReportMetadataStrip(report, itemCount, companyName) {
  const mode = report.status === "generated_all_current"
    ? "all_current"
    : report.status === "generated_new_only"
      ? "new_only"
      : report.status || "draft";
  return `
    <div class="admin-report-meta-strip">
      <span><strong>Company</strong>${escapeHtml(companyName || "Unknown company")}</span>
      <span><strong>Period</strong>${escapeHtml(`${formatShortDate(report.period_start)} - ${formatShortDate(report.period_end)}`)}</span>
      <span><strong>Generated at</strong>${escapeHtml(formatDateTime(report.created_at))}</span>
      <span><strong>Mode</strong>${escapeHtml(mode)}</span>
      <span><strong>Items</strong>${Number(itemCount || 0)}</span>
    </div>
  `;
}

function renderAdminReportItems(report) {
  const items = Array.isArray(report.report_items) ? [...report.report_items] : [];
  const sortedItems = items.sort((a, b) => Number(a.sort_order || 0) - Number(b.sort_order || 0));
  return `
    <section class="admin-report-items">
      <h3>Report items</h3>
      <div class="admin-report-item-list">
        ${sortedItems.map((item) => renderAdminReportItem(item)).join("")}
      </div>
    </section>
  `;
}

function renderAdminReportItem(item) {
  const opp = item.opportunities ? mapSupabaseOpportunity(item.opportunities) : null;
  if (!opp) {
    return `<article class="admin-report-item"><p>Opportunity data is no longer available.</p></article>`;
  }
  const safeUrl = getSafeExternalUrl(opp.url);
  const deadline = getOpportunityDeadlineDisplay(opp);
  return `
    <article class="admin-report-item">
      <div class="opportunity-badges">
        <span class="source-pill source-badge">${escapeHtml(formatReportQualityLabel(getOpportunityQualityLabel(opp)))}</span>
        <span class="${badgeClass(getMatchLabel(Number(item.match_score || 0)))}">${escapeHtml(formatReportMatchLabel(getMatchLabel(Number(item.match_score || 0))))} · ${Number(item.match_score || 0)}</span>
      </div>
      <h4>${escapeHtml(opp.title)}</h4>
      <div class="admin-report-meta-grid">
        <span><strong>${escapeHtml(t("buyer"))}</strong>${escapeHtml(formatOpportunityBuyer(opp))}</span>
        <span><strong>${escapeHtml(t("source"))}</strong>${escapeHtml(formatReportMetadataValue("source", opp.source))}</span>
        <span><strong>${escapeHtml(t("area"))}</strong>${escapeHtml(formatOpportunityLocation(opp))}</span>
        <span><strong>${escapeHtml(t("deadline"))}</strong>${escapeHtml(deadline.label)}</span>
        <span><strong>${escapeHtml(t("estimatedValue"))}</strong>${escapeHtml(opp.estimatedValue ? formatISK(opp.estimatedValue) : t("notListed"))}</span>
      </div>
      <p>${escapeHtml(opp.description || "")}</p>
      ${safeUrl ? `<a class="btn btn-secondary btn-small" href="${escapeHtml(safeUrl)}" target="_blank" rel="noreferrer">${escapeHtml(t("openSource"))}</a>` : ""}
    </article>
  `;
}

async function copyAdminReportText(reportId) {
  const report = state.selectedAdminReport?.id === reportId
    ? state.selectedAdminReport
    : (state.adminReports || []).find((item) => item.id === reportId);
  if (!report) {
    showToast("Report not found", "error");
    return;
  }
  const companyName = report.companies?.company_name || "Company";
  const detailedMatches = getSavedReportItemMatches(report);
  const text = detailedMatches.length
    ? generateSavedReportText(report, companyName, detailedMatches)
    : report.text_content || stripHtmlFromString(normalizeSavedReportHtml(report));
  try {
    await navigator.clipboard.writeText(text);
    showToast("Report text copied", "success");
  } catch (error) {
    console.error("Failed to copy admin report:", error);
    showToast("Could not copy report text", "error");
  }
}

function getFilteredAdminOpportunities() {
  const filters = state.adminOpportunityFilters;
  return (state.opportunities || []).filter((opp) => {
    const isTed = isTedOpportunity(opp);
    if (filters.tedOnly && !isTed) return false;
    if (filters.manualOnly && isTed) return false;
    if (!filters.showDemoTest && isDemoTestOpportunity(opp)) return false;
    if (filters.source !== "all" && opp.source !== filters.source) return false;
    if (filters.status !== "all" && opp.status !== filters.status) return false;
    const country = getOpportunityCountryCode(opp) || opp.countryCode || "Unknown";
    if (filters.country !== "all" && country !== filters.country) return false;
    const search = normalizeLocationText(filters.search);
    if (search) {
      const haystack = normalizeLocationText(`${opp.title} ${opp.buyer} ${opp.externalId} ${opp.location}`);
      if (!haystack.includes(search)) return false;
    }
    return true;
  });
}

function getAdminFilterOptions(items, getter) {
  return Array.from(new Set(items.map(getter).filter(Boolean))).sort((a, b) => String(a).localeCompare(String(b)));
}

function renderAdminOpportunityFilters(opportunities) {
  const filters = state.adminOpportunityFilters;
  const sources = getAdminFilterOptions(state.opportunities || [], (opp) => opp.source || "Unknown");
  const statuses = getAdminFilterOptions(state.opportunities || [], (opp) => opp.status || "Unknown");
  const countries = getAdminFilterOptions(state.opportunities || [], (opp) => getOpportunityCountryCode(opp) || opp.countryCode || "Unknown");
  return `
    <div class="admin-filters">
      <input data-admin-filter="search" value="${escapeHtml(filters.search)}" placeholder="Search title, buyer, external ID..." />
      <select data-admin-filter="source">
        <option value="all">All sources</option>
        ${sources.map((source) => `<option value="${escapeHtml(source)}" ${filters.source === source ? "selected" : ""}>${escapeHtml(source)}</option>`).join("")}
      </select>
      <select data-admin-filter="status">
        <option value="all">All statuses</option>
        ${statuses.map((status) => `<option value="${escapeHtml(status)}" ${filters.status === status ? "selected" : ""}>${escapeHtml(status)}</option>`).join("")}
      </select>
      <select data-admin-filter="country">
        <option value="all">All countries</option>
        ${countries.map((country) => `<option value="${escapeHtml(country)}" ${filters.country === country ? "selected" : ""}>${escapeHtml(country)}</option>`).join("")}
      </select>
      <label class="checkbox compact"><input type="checkbox" data-admin-filter="tedOnly" ${filters.tedOnly ? "checked" : ""}/><span>TED only</span></label>
      <label class="checkbox compact"><input type="checkbox" data-admin-filter="manualOnly" ${filters.manualOnly ? "checked" : ""}/><span>Manual only</span></label>
      <label class="checkbox compact"><input type="checkbox" data-admin-filter="showDemoTest" ${filters.showDemoTest ? "checked" : ""}/><span>Show demo/test opportunities</span></label>
    </div>
    <p class="admin-filter-count">${opportunities.length} of ${(state.opportunities || []).length} opportunities shown.</p>
  `;
}

function renderLanding() {
  const isIcelandic = state.language === "is";
  const heroSamples = isIcelandic
    ? [
        { title: "Sementsreitur - Gatnagerð og lagnir", type: "Útboð", score: "86% samsvörun", value: "5 ný tækifæri" },
        { title: "Vífilstaðavegur - gatnagerð og lagnir", type: "Útboð", score: "Sterk samsvörun" },
        { title: "Verðfyrirspurn - Sandbakki - gatnagerð", type: "Verðfyrirspurn", score: "2 rennur út fljótlega" }
      ]
    : [
        { title: "Civil works and utilities at Sementsreitur", type: "Tender", score: "86% match", value: "5 new opportunities" },
        { title: "Roadworks and utilities on Vífilstaðavegur", type: "Tender", score: "Strong match" },
        { title: "Quote request - Sandbakki roadworks", type: "Quote request", score: "2 closing soon" }
      ];
  const targetCards = isIcelandic
    ? [
        ["Jarðvinna og gatnagerð", "Útboð um vegi, lóðir, bílastæði, stíga og jarðvegsvinnu."],
        ["Lagnavinna og fráveita", "Verkefni um lagnir, dælustöðvar, fráveitu, vatn og hitaveitu."],
        ["Malbikun og lóðarframkvæmdir", "Gatnagerð, yfirborðsfrágangur, gangstéttir og viðhald."],
        ["Rafverktakar", "Raflagnir, brunakerfi, lýsing, öryggiskerfi og hleðslustöðvar."],
        ["Ræstingar og þjónusta", "Reglulegir þjónustusamningar, húsþjónusta og rekstrarverkefni."],
        ["Verkfræðistofur og ráðgjafar", "Hönnun, eftirlit, ráðgjöf og verkefnastjórnun þegar það á við."]
      ]
    : [
        ["Earthworks and roadworks", "Tenders for roads, plots, parking areas, paths and earthworks."],
        ["Utilities and drainage", "Projects for pipes, pumping stations, drainage, water and heating utilities."],
        ["Paving and site works", "Road construction, surface finishing, sidewalks and maintenance."],
        ["Electrical contractors", "Wiring, fire alarms, lighting, security systems and chargers."],
        ["Cleaning and services", "Recurring service contracts, facility services and operations work."],
        ["Engineering and advisors", "Design, supervision, consulting and project management where relevant."]
      ];
  return renderShell(`
    <section class="hero">
      <div class="hero-copy">
        <p class="eyebrow">${escapeHtml(t("heroEyebrow"))}</p>
        <h1>${escapeHtml(t("heroTitle"))}</h1>
        <p class="hero-text">
          ${escapeHtml(t("heroText"))}
        </p>
        <div class="hero-actions">
          <button class="btn btn-primary btn-large" data-action="go" data-href="/onboarding">${escapeHtml(t("createFreeDemoProfile"))} <span aria-hidden="true">&rarr;</span></button>
          <button class="btn btn-secondary btn-large" data-action="scroll-to" data-target="sample-report">${escapeHtml(t("viewSampleReport"))}</button>
        </div>
        <div class="proof-lines" aria-label="Product proof">
          <strong>${escapeHtml(t("proofStrong"))}</strong>
          <span>${escapeHtml(t("proofText"))}</span>
        </div>
      </div>
      <div class="product-shot hero-card" aria-label="VerkRadar product preview">
        <div class="shot-topbar">
          <span>VERKRADAR / JARÐTÆKNI EHF.</span>
          <span>${new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "short" })}</span>
        </div>
        <div class="shot-metric">
          <span>${escapeHtml(t("bestOpenMatch"))}</span>
          <strong>${escapeHtml(isIcelandic ? "5 ný tækifæri" : "5 new opportunities")}</strong>
        </div>
        <div class="shot-row is-active">
          <div>
            <span class="shot-label">${escapeHtml(heroSamples[0].type)}</span>
            <h3>${escapeHtml(heroSamples[0].title)}</h3>
          </div>
          <strong>${escapeHtml(heroSamples[0].score)}</strong>
        </div>
        ${heroSamples.slice(1, 3).map((opp) => `
          <div class="shot-row">
            <div>
              <span class="shot-label">${escapeHtml(opp.type)}</span>
              <h3>${escapeHtml(opp.title)}</h3>
            </div>
            <strong>${escapeHtml(opp.score)}</strong>
          </div>
        `).join("")}
        <div class="shot-footer">
          <span>${escapeHtml(t("deadlineRisk"))}</span>
          <strong>${escapeHtml(isIcelandic ? "2 tækifæri" : "2 items")}</strong>
        </div>
      </div>
    </section>

    <section class="problem-section">
      <div class="section-copy">
        <p class="eyebrow">${escapeHtml(t("problemEyebrow"))}</p>
        <h2>${escapeHtml(t("problemTitle"))}</h2>
      </div>
      <div class="problem-table">
        <div class="problem-row">
          <span>01</span>
          <h3>${escapeHtml(t("problemOneTitle"))}</h3>
          <p>${escapeHtml(t("problemOneText"))}</p>
        </div>
        <div class="problem-row">
          <span>02</span>
          <h3>${escapeHtml(t("problemTwoTitle"))}</h3>
          <p>${escapeHtml(t("problemTwoText"))}</p>
        </div>
      </div>
    </section>

    <section class="section target-section">
      <div class="section-copy">
        <p class="eyebrow">${escapeHtml(t("targetEyebrow"))}</p>
        <h2>${escapeHtml(t("targetTitle"))}</h2>
        <p>${escapeHtml(t("targetText"))}</p>
      </div>
      <div class="feature-grid target-grid">
        ${targetCards.map(([title, text]) => `
          <div class="feature-card">
            <h3>${escapeHtml(title)}</h3>
            <p>${escapeHtml(text)}</p>
          </div>
        `).join("")}
      </div>
    </section>

    <section id="how-it-works" class="section section-grid reversed how-it-works-section">
      <div class="feature-grid">
        <div class="feature-card"><h3>${escapeHtml(t("createProfileStep"))}</h3><p>${escapeHtml(t("createProfileStepText"))}</p></div>
        <div class="feature-card"><h3>${escapeHtml(t("matchProjectsStep"))}</h3><p>${escapeHtml(t("matchProjectsStepText"))}</p></div>
        <div class="feature-card"><h3>${escapeHtml(t("getReportStep"))}</h3><p>${escapeHtml(t("getReportStepText"))}</p></div>
      </div>
      <div class="section-copy">
        <p class="eyebrow">${escapeHtml(t("solutionEyebrow"))}</p>
        <h2>${escapeHtml(t("solutionTitle"))}</h2>
        <p>${escapeHtml(t("solutionText"))}</p>
      </div>
    </section>

    <section id="sample-report" class="section sample-report-section public-sample-report-page">
      <div class="section-copy">
        <p class="eyebrow">${escapeHtml(t("sampleReportEyebrow"))}</p>
        <h2>${escapeHtml(t("sampleReportTitle"))}</h2>
        <p>${escapeHtml(t("sampleReportText"))}</p>
      </div>
      <div class="public-report-preview">
        <div class="report-topbar">
          <span>${escapeHtml(t("reportTitle"))}</span>
          <span>Jarðtækni ehf.</span>
        </div>
        <article class="report-item">
          <h3>${escapeHtml(isIcelandic ? "Gatnagerð og lagnir á Akranesi" : "Roadworks and utilities in Akranes")}</h3>
          <p><strong>${escapeHtml(t("buyer"))}:</strong> ${escapeHtml(isIcelandic ? "Akraneskaupstaður" : "Akranes Municipality")}</p>
          <p><strong>${escapeHtml(t("deadline"))}:</strong> ${escapeHtml(t("daysLeft", { count: 18 }))} · <strong>${escapeHtml(t("possibleMatch"))}:</strong> 92/100</p>
          <ul>
            <li>${escapeHtml(isIcelandic ? "Nefnir gatnagerð og lagnir sem passa við verkflokka fyrirtækisins." : "Mentions roadworks and utilities that match the company profile.")}</li>
            <li>${escapeHtml(isIcelandic ? "Svæðið er innan valins þjónustusvæðis." : "The area is inside the selected service region.")}</li>
            <li>${escapeHtml(isIcelandic ? "Verkefnið er þess virði að staðfesta í upprunalegum útboðsgögnum." : "The project is worth verifying in the original tender documents.")}</li>
          </ul>
          <p><strong>${escapeHtml(t("openSource"))}:</strong> ${isIcelandic ? "Opnið heimild og staðfestið skilafrest, kröfur og gögn." : "Open the source and confirm deadline, requirements and documents."}</p>
        </article>
        <article class="report-item">
          <h3>${escapeHtml(isIcelandic ? "Lóðarframkvæmdir við Myllubakkaskóla" : "Site works at Myllubakkaskóli")}</h3>
          <p><strong>${escapeHtml(t("buyer"))}:</strong> ${escapeHtml(isIcelandic ? "Reykjanesbær" : "Reykjanesbær Municipality")}</p>
          <p><strong>${escapeHtml(t("deadline"))}:</strong> ${escapeHtml(t("daysLeft", { count: 24 }))} · <strong>${escapeHtml(t("possibleMatch"))}:</strong> 86/100</p>
          <ul>
            <li>${escapeHtml(isIcelandic ? "Inniheldur leitarorð: lóðarframkvæmdir, yfirborðsfrágangur." : "Contains keywords: site works, surface finishing.")}</li>
            <li>${escapeHtml(isIcelandic ? "Passar við jarðvinnu, frágang og verk á lóðum." : "Fits earthworks, finishing and site work services.")}</li>
          </ul>
        </article>
        <article class="report-item">
          <h3>${escapeHtml(isIcelandic ? "Verðfyrirspurn - Sandbakki - gatnagerð" : "Quote request - Sandbakki roadworks")}</h3>
          <p><strong>${escapeHtml(t("buyer"))}:</strong> ${escapeHtml(isIcelandic ? "Opinber verkkaupi" : "Public buyer")}</p>
          <p><strong>${escapeHtml(t("deadline"))}:</strong> ${escapeHtml(t("daysLeft", { count: 11 }))} · <strong>${escapeHtml(t("possibleMatch"))}:</strong> 83/100</p>
          <ul>
            <li>${escapeHtml(isIcelandic ? "Skýr verðfyrirspurn með gatnagerð í titli." : "Clear quote request with roadworks in the title.")}</li>
            <li>${escapeHtml(isIcelandic ? "Stuttur frestur, því þarf að bregðast hratt við." : "Short deadline, so it needs quick review.")}</li>
          </ul>
        </article>
        <p class="source-disclaimer">${escapeHtml(t("sourceDisclaimer"))}</p>
      </div>
    </section>

    <section class="cta-panel">
      <h2>${escapeHtml(t("tryDemoTitle"))}</h2>
      <p>${escapeHtml(t("tryDemoText"))}</p>
      <button class="btn btn-primary" data-action="load-demo">${escapeHtml(t("loadDemoCompany"))}</button>
    </section>
  `);
}

function renderOnboarding() {
  if (!state.user) return requireAuthPage();

  initializeProfileDraft();
  return renderShell(`
    <section class="page-head">
      <p class="eyebrow">${escapeHtml(t("onboarding"))}</p>
      <h1>${escapeHtml(t("onboardingTitle"))}</h1>
      <p>${escapeHtml(t("onboardingText"))}</p>
    </section>

    ${renderProfileForm()}
  `);
}

function renderProfileForm() {
  initializeProfileDraft();
  return `
    <form id="profile-form" class="form-card settings-profile-form">
      ${renderProfileBasicsSection()}
      ${renderProfileServicesSection()}
      ${renderProfileLocationsSection()}
      ${renderProfileValueSection()}
      ${renderProfileReportsSection()}
      ${renderProfileFormActions()}
    </form>
  `;
}

function renderProfileBasicsSection() {
  const p = state.profileDraft || getEmptyProfile();
  const selectedIndustry = p.industry || "";
  return `
    <div class="form-section">
      <h2>${escapeHtml(t("companyBasics"))}</h2>
      <div class="form-grid">
        <label>${escapeHtml(t("companyName"))}<input name="companyName" data-profile-field="companyName" value="${escapeHtml(p.companyName || "")}" required /></label>
        <label>${escapeHtml(t("contactEmail"))}<input name="contactEmail" type="email" data-profile-field="contactEmail" value="${escapeHtml(p.contactEmail || "")}" required /></label>
        <label>${escapeHtml(t("website"))}<input name="website" data-profile-field="website" value="${escapeHtml(p.website || "")}" /></label>
        <label class="custom-select-field">${escapeHtml(t("industry"))}
          <input id="industry-input" type="hidden" name="industry" value="${escapeHtml(selectedIndustry)}" required />
          ${renderCustomDropdown({
            key: "industry",
            value: selectedIndustry,
            options: getFilterOptions("industry"),
            profileField: "industry"
          })}
        </label>
      </div>
    </div>
  `;
}

function renderProfileServicesSection() {
  const p = state.profileDraft || getEmptyProfile();
  const selectedIndustry = p.industry || "";
  const serviceSuggestions = getProfileSuggestions("services", selectedIndustry);
  const keywordSuggestions = getProfileSuggestions("includeKeywords", selectedIndustry);
  return `
    <div class="form-section">
      <h2>${escapeHtml(t("servicesAndKeywords"))}</h2>
      <p class="form-section-hint">${escapeHtml(t("servicesHint"))}</p>
      <label>${escapeHtml(t("servicesLabel"))}
        <textarea name="services" data-profile-field="services" data-profile-array="true" rows="3">${escapeHtml(arrayFieldText(p.services))}</textarea>
      </label>
      <p class="field-helper">${escapeHtml(t("servicesHelper"))}</p>
      ${renderSuggestionChips({
        field: "services",
        title: selectedIndustry ? t("suggestedServicesFor", { industry: selectedIndustry }) : t("selectIndustryForServices"),
        values: serviceSuggestions,
        selectedValues: p.services || []
      })}
      <div class="form-grid keyword-grid">
        <label class="profile-keyword-field">${escapeHtml(t("extraWords"))}
          <input name="includeKeywords" data-profile-field="includeKeywords" data-profile-array="true" value="${escapeHtml(arrayFieldText(p.includeKeywords))}" />
          <span class="field-helper inline-helper">${escapeHtml(t("includeKeywordsHelper"))}</span>
        </label>
        <label class="profile-keyword-field">${escapeHtml(t("excludeWords"))}
          <input name="excludeKeywords" data-profile-field="excludeKeywords" data-profile-array="true" value="${escapeHtml(arrayFieldText(p.excludeKeywords))}" />
          <span class="field-helper inline-helper">${escapeHtml(t("excludeKeywordsHelper"))}</span>
        </label>
      </div>
      ${renderSuggestionChips({
        field: "includeKeywords",
        title: selectedIndustry ? t("suggestedKeywordsFor", { industry: selectedIndustry }) : t("selectIndustryForKeywords"),
        values: keywordSuggestions,
        selectedValues: p.includeKeywords || []
      })}
    </div>
  `;
}

function renderProfileLocationsSection() {
  const p = state.profileDraft || getEmptyProfile();
  const locationOptions = ["Reykjavík", "Capital Area", "Suðurnes", "South Iceland", "West Iceland", "North Iceland", "East Iceland", "Westfjords", "All Iceland", "Remote / Online"];
  return `
    <div class="form-section">
      <h2>${escapeHtml(t("locationsTitle"))}</h2>
      <p class="form-section-hint">${escapeHtml(t("locationsHint"))}</p>
      <div class="form-grid">
        <label>${escapeHtml(t("baseLocation"))}
          <input name="baseLocation" data-profile-field="baseLocation" value="${escapeHtml(p.baseLocation || "")}" placeholder="${escapeHtml(t("baseLocationPlaceholder"))}" />
        </label>
        <label>${escapeHtml(t("serviceAreas"))}
          <input name="serviceAreas" data-profile-field="serviceAreas" data-profile-array="true" value="${escapeHtml(arrayFieldText(p.serviceAreas))}" placeholder="${escapeHtml(t("serviceAreasPlaceholder"))}" />
        </label>
      </div>
      <div class="checkbox-grid">
        ${locationOptions.map((loc) => `
          <label class="checkbox">
            <input type="checkbox" name="locations" value="${loc}" data-profile-location ${(p.locations || []).includes(loc) ? "checked" : ""} />
            <span>${escapeHtml(formatCustomerLocation(loc))}</span>
          </label>
        `).join("")}
      </div>
      <div class="profile-travel-panel">
        <h3>${escapeHtml(t("travelScope"))}</h3>
        <div class="profile-travel-grid">
          <label class="checkbox inline"><input type="checkbox" name="willingToTravel" data-profile-field="willingToTravel" ${p.willingToTravel ? "checked" : ""} /><span>${escapeHtml(t("willingToTravel"))}</span></label>
          <label class="checkbox inline"><input type="checkbox" name="nationalProjects" data-profile-field="nationalProjects" ${p.nationalProjects ? "checked" : ""} /><span>${escapeHtml(t("includeNational"))}</span></label>
          <label class="checkbox inline"><input type="checkbox" name="remoteProjects" data-profile-field="remoteProjects" ${p.remoteProjects ? "checked" : ""} /><span>${escapeHtml(t("includeRemote"))}</span></label>
          <label>${escapeHtml(t("minimumTravelValue"))}
            <input name="minimumProjectValueForTravel" type="number" data-profile-field="minimumProjectValueForTravel" data-profile-number="true" value="${p.minimumProjectValueForTravel || ""}" />
          </label>
        </div>
      </div>
    </div>
  `;
}

function renderProfileValueSection() {
  const p = state.profileDraft || getEmptyProfile();
  return `
    <div class="form-section">
      <h2>${escapeHtml(t("projectSize"))}</h2>
      <div class="form-grid">
        <label>${escapeHtml(t("minimumValue"))}<input name="minProjectValue" type="number" data-profile-field="minProjectValue" data-profile-number="true" value="${p.minProjectValue || ""}" /></label>
        <label>${escapeHtml(t("maximumValue"))}<input name="maxProjectValue" type="number" data-profile-field="maxProjectValue" data-profile-number="true" value="${p.maxProjectValue || ""}" /></label>
      </div>
      <label class="checkbox inline">
        <input type="checkbox" name="allowUnknownValue" data-profile-field="allowUnknownValue" ${p.allowUnknownValue ? "checked" : ""} />
        <span>${escapeHtml(t("showUnknownValue"))}</span>
      </label>
    </div>
  `;
}

function renderProfileReportsSection() {
  const p = state.profileDraft || getEmptyProfile();
  return `
    <div class="form-section">
      <h2>${escapeHtml(t("reportPreferences"))}</h2>
      <div class="form-grid">
        <label>${escapeHtml(t("frequency"))}
          <select name="reportFrequency" data-profile-field="reportFrequency">
            <option ${p.reportFrequency === "weekly" ? "selected" : ""} value="weekly">${escapeHtml(t("weekly"))}</option>
            <option ${p.reportFrequency === "daily" ? "selected" : ""} value="daily">${escapeHtml(t("daily"))}</option>
          </select>
        </label>
        <label>${escapeHtml(t("reportDay"))}
          <select name="reportDay" data-profile-field="reportDay">
            ${["monday", "tuesday", "wednesday", "thursday", "friday"].map((x) => `<option ${p.reportDay === x ? "selected" : ""} value="${x}">${capitalize(x)}</option>`).join("")}
          </select>
        </label>
      </div>
      <label class="checkbox inline"><input type="checkbox" name="deadlineReminders" data-profile-field="deadlineReminders" ${p.deadlineReminders ? "checked" : ""} /><span>${escapeHtml(t("deadlineReminders"))}</span></label>
      <label class="checkbox inline"><input type="checkbox" name="includeLowConfidence" data-profile-field="includeLowConfidence" ${p.includeLowConfidence ? "checked" : ""} /><span>${escapeHtml(t("includeLowConfidence"))}</span></label>
    </div>
  `;
}

function renderProfileFormActions() {
  return `
    <div class="form-actions">
      <button
        type="submit"
        class="btn btn-primary btn-large"
        ${state.isSavingProfile ? "disabled" : ""}
      >
        ${state.isSavingProfile ? escapeHtml(t("saving")) : state.profileSaved ? escapeHtml(t("saved")) : escapeHtml(t("saveProfile"))}
      </button>
    </div>
    ${state.profileSaveMessage ? `
      <div class="form-message success">
        ${escapeHtml(state.profileSaveMessage)}
      </div>
    ` : ""}
    ${state.profileSaveError ? `
      <div class="form-message error">
        ${escapeHtml(state.profileSaveError)}
      </div>
    ` : ""}
  `;
}

function getFilterOptions(key) {
  if (key === "industry") {
    return [
      "Construction",
      "Electrical",
      "Cleaning",
      "IT / Web / Software",
      "Architecture / Engineering",
      "Consulting",
      "Transport",
      "Equipment / Machinery",
      "Landscaping",
      "Security",
      "Other"
    ].map((industry) => ({ value: industry, label: industry }));
  }

  if (key === "label") {
    return [
      { value: "strong", label: state.language === "is" ? "Aðeins sterkar" : "Strong only" },
      { value: "recommended", label: state.language === "is" ? "Mælt með" : "Recommended" },
      { value: "all", label: state.language === "is" ? "Allar samsvaranir" : "All matches" },
      { value: "all_opportunities", label: state.language === "is" ? "Öll tækifæri" : "All opportunities" },
      { value: "needs_review", label: t("needsReview") },
      { value: "possible", label: state.language === "is" ? "Mögulegar samsvaranir" : "Possible matches" },
      { value: "Good match", label: t("goodMatch") },
      { value: "Weak match", label: t("weakMatch") }
    ];
  }

  if (key === "category") {
    return [
      { value: "all", label: state.language === "is" ? "Allir flokkar" : "All categories" },
      ...categories().map((value) => ({ value, label: value }))
    ];
  }

  if (key === "location") {
    return [
      { value: "all", label: state.language === "is" ? "Öll svæði" : "All locations" },
      ...locations().map((value) => ({ value, label: formatCustomerLocation(value) }))
    ];
  }

  if (key === "type") {
    return [
      { value: "all", label: state.language === "is" ? "Allar tegundir" : "All types" },
      ...types().map((value) => ({ value, label: capitalize(value.replace("-", " ")) }))
    ];
  }

  return [];
}

function getSelectedFilterIndex(key) {
  const options = getFilterOptions(key);
  const selectedValue = key === "industry" ? (state.profileDraft?.industry || state.profile?.industry || "") : state.filters[key];
  const index = options.findIndex((option) => option.value === selectedValue);
  return Math.max(0, index);
}

function getFilterLabel(key) {
  const options = getFilterOptions(key);
  const selectedValue = key === "industry" ? (state.profileDraft?.industry || state.profile?.industry || "") : state.filters[key];
  return options.find((option) => option.value === selectedValue)?.label || (key === "industry" ? "Select industry" : options[0]?.label) || "";
}

function renderFilterDropdown(key) {
  return renderCustomDropdown({
    key,
    value: state.filters[key],
    options: getFilterOptions(key)
  });
}

function renderCustomDropdown({ key, value, options, profileField = "" }) {
  const isOpen = state.dropdown.openKey === key;
  const selectedValue = value;
  const selectedIndex = Math.max(0, options.findIndex((option) => option.value === selectedValue));
  const focusedIndex = isOpen ? state.dropdown.focusedIndex : selectedIndex;
  const triggerId = `filter-${key}-trigger`;
  const listId = `filter-${key}-list`;
  const selectedLabel = options.find((option) => option.value === selectedValue)?.label || (key === "industry" ? "Select industry" : options[0]?.label) || "";

  return `
    <div class="custom-select ${isOpen ? "is-open" : ""}" data-key="${key}">
      <button
        type="button"
        id="${triggerId}"
        class="custom-select-trigger"
        data-action="toggle-dropdown"
        data-key="${key}"
        aria-haspopup="listbox"
        aria-expanded="${isOpen}"
        aria-controls="${listId}"
      >
        <span>${escapeHtml(selectedLabel)}</span>
        <span class="custom-select-arrow" aria-hidden="true"></span>
      </button>
      ${isOpen ? `
        <div class="custom-select-menu" id="${listId}" role="listbox" aria-labelledby="${triggerId}">
          ${options.map((option, index) => {
            const selected = option.value === selectedValue;
            const focused = index === focusedIndex;
            return `
              <button
                type="button"
                class="custom-select-option ${selected ? "is-selected" : ""} ${focused ? "is-focused" : ""}"
                data-action="select-filter"
                data-key="${key}"
                data-value="${escapeHtml(option.value)}"
                ${profileField ? `data-profile-field="${escapeHtml(profileField)}"` : ""}
                role="option"
                aria-selected="${selected}"
              >
                <span>${escapeHtml(option.label)}</span>
                ${selected ? `<span class="custom-select-check" aria-hidden="true">✓</span>` : ""}
              </button>
            `;
          }).join("")}
        </div>
      ` : ""}
    </div>
  `;
}

function closeDropdown() {
  state.dropdown.openKey = null;
  state.dropdown.focusedIndex = 0;
  render();
}

function focusDropdownOption() {
  requestAnimationFrame(() => {
    document.querySelector(".custom-select-option.is-focused")?.focus();
  });
}

function focusDropdownTrigger(key) {
  requestAnimationFrame(() => {
    document.querySelector(`[data-action="toggle-dropdown"][data-key="${key}"]`)?.focus();
  });
}

function renderDashboard() {
  if (!state.user) return requireAuthPage();

  if (!state.profile) {
    return requireProfilePage(
      state.language === "is" ? "Stofnaðu prófíl fyrst" : "Create a profile first",
      state.language === "is" ? "Mælaborðið þarf fyrirtækjaprófíl til að reikna samsvaranir." : "The dashboard needs a company profile so it can calculate opportunity matches."
    );
  }

  const matches = getFilteredMatches();
  const allMatches = getStoredDashboardMatches();
  const filteredStoredMatches = getDashboardFilterBaseMatches(allMatches);
  const availableOpportunities = getAvailableDashboardOpportunities();
  const strong = filteredStoredMatches.filter((o) => o.matchScore >= 85).length;
  const closingSoon = filteredStoredMatches.filter((o) => daysUntilDeadline(o.deadline) <= 14 && daysUntilDeadline(o.deadline) >= 0).length;
  const savedCount = state.saved.length;
  const totalValue = filteredStoredMatches.filter((o) => o.matchScore >= 65).reduce((sum, o) => sum + (o.estimatedValue || 0), 0);
  const recommendedCount = filteredStoredMatches.filter(isRecommendedDashboardMatch).length;
  const filterSummary = getDashboardFilterSummary({
    visibleCount: matches.length,
    storedMatchCount: allMatches.length,
    filteredStoredCount: filteredStoredMatches.length,
    availableCount: availableOpportunities.length,
    recommendedCount,
    strongCount: strong,
    companyName: state.profile.companyName,
  });
  const matchRefreshText = state.lastMatchedAt
    ? t("matchesLastRefreshed", { time: formatDateTime(state.lastMatchedAt) })
    : t("matchesAutoRefresh");

  return renderShell(`
    <section class="dashboard-head">
      <div>
        <p class="eyebrow">${escapeHtml(t("dashboard"))}</p>
        <h1>${escapeHtml(t("welcomeCompany", { company: state.profile.companyName }))}</h1>
        <p>${escapeHtml(t("dashboardIntro", { refresh: matchRefreshText }))}</p>
      </div>
      <div class="dashboard-actions">
        ${state.isAdmin ? `
          <button class="btn btn-primary" data-action="run-matching" ${state.matchingLoading ? "disabled" : ""}>
            ${state.matchingLoading ? escapeHtml(t("refreshing")) : escapeHtml(t("refreshMatches"))}
          </button>
        ` : ""}
        <button class="btn btn-secondary" data-action="go" data-href="/report">${escapeHtml(t("viewWeeklyReport"))}</button>
      </div>
    </section>

    ${state.matchStatus ? `
      <div class="admin-message ${state.matchStatus.type === "error" ? "is-error" : "is-success"}">
        ${escapeHtml(state.matchStatus.text)}
      </div>
    ` : ""}

    ${state.opportunityLoadError ? `
      <div class="note-panel">
        ${escapeHtml(state.opportunityLoadError)}
      </div>
    ` : ""}

    <section class="stats-grid">
      <div class="stat-card"><span>${escapeHtml(t("strongMatches"))}</span><strong>${strong}</strong></div>
      <div class="stat-card"><span>${escapeHtml(t("closingSoon"))}</span><strong>${closingSoon}</strong></div>
      <div class="stat-card"><span>${escapeHtml(t("savedLabel"))}</span><strong>${savedCount}</strong></div>
      <div class="stat-card"><span>${escapeHtml(t("totalPotentialValue"))}</span><strong>${formatISK(totalValue)}</strong></div>
    </section>

    <section class="filters">
      <input data-filter="search" value="${escapeHtml(state.filters.search)}" placeholder="${escapeHtml(t("searchOpportunities"))}" />
      ${renderFilterDropdown("label")}
      ${renderFilterDropdown("category")}
      ${renderFilterDropdown("location")}
      ${renderFilterDropdown("type")}
      <label class="checkbox compact"><input type="checkbox" data-filter="savedOnly" ${state.filters.savedOnly ? "checked" : ""}/><span>${escapeHtml(t("savedOnly"))}</span></label>
    </section>

    <div class="note-panel dashboard-filter-summary">
      ${escapeHtml(filterSummary)}
    </div>

    <section class="opportunity-list">
      ${matches.length ? matches.map(renderOpportunityCard).join("") : renderDashboardEmptyState(state.profile, state.filters.label, {
        availableCount: availableOpportunities.length,
        storedMatchCount: allMatches.length,
        filteredStoredCount: filteredStoredMatches.length,
        recommendedCount,
        strongCount: strong,
      })}
    </section>
  `);
}

function getDashboardProfileSuggestions(profile) {
  const suggestions = [];
  const locations = Array.isArray(profile?.locations) ? profile.locations : [];
  const services = Array.isArray(profile?.services) ? profile.services : [];
  const includeKeywords = Array.isArray(profile?.includeKeywords) ? profile.includeKeywords : [];
  const excludeKeywords = Array.isArray(profile?.excludeKeywords) ? profile.excludeKeywords : [];
  const hasAllIceland = locations.some((location) => normalizeLocationText(location) === "all iceland");
  const excludesReykjavik = excludeKeywords.some((keyword) => {
    const normalized = normalizeLocationText(keyword);
    return normalized.includes("reykjavik") || normalized.includes("capital area");
  });

  if (!hasAllIceland) {
    suggestions.push(state.language === "is" ? "Bætið við Allt landið til að ná landsdekkandi útboðum og rammasamningum." : "Add All Iceland to catch national tenders and framework agreements.");
  }
  if (!profile?.nationalProjects) {
    suggestions.push(state.language === "is" ? "Kveikið á landsdekkandi verkefnum svo slík tækifæri birtist sem mögulegar samsvaranir." : "Enable national projects so All Iceland opportunities appear as possible matches.");
  }
  if (services.length < 5) {
    suggestions.push(state.language === "is" ? "Bætið við nákvæmari þjónustu svo VerkRadar þekki betur útboð sem passa við ykkar vinnu." : "Add more specific services so VerkRadar can recognize notices that fit your work.");
  }
  if (excludesReykjavik) {
    suggestions.push(state.language === "is" ? "Yfirfarið útilokunarorð fyrir Reykjavík eða höfuðborgarsvæðið. Þau geta falið útboð sem fyrirtæki utan svæðisins geta samt boðið í." : "Review exclude keywords for Reykjavík or Capital Area. They may hide tenders that companies outside Reykjavík can still bid on.");
  }
  if (includeKeywords.length < 4) {
    suggestions.push(state.language === "is" ? "Bætið við fleiri leitarorðum, sérstaklega íslenskum hugtökum sem kaupendur nota í útboðum." : "Add more include keywords, including Icelandic terms buyers may use in notices.");
  }

  if (!suggestions.length) {
    suggestions.push(state.language === "is" ? "Yfirfarið þjónustu, svæði og leitarorð svo þau lýsi verkefnunum sem þið viljið raunverulega bjóða í." : "Review services, locations and keywords to make sure they describe the work you actually want to bid on.");
  }

  return suggestions;
}

function getDashboardEmptyCopy(filter, context = {}) {
  if (state.language === "is") {
    if (filter === "all") {
      return { eyebrow: "Engar samsvaranir", title: "Engin tækifæri fundust fyrir þennan prófíl enn.", body: "Víkkið þjónustu, svæði eða leitarorð til að finna fleiri tækifæri." };
    }
    if (filter === "all_opportunities") {
      return { eyebrow: "Engin tækifæri", title: "Engin tiltæk tækifæri enn.", body: "Flytjið inn fleiri heimildir eða skoðið heimildayfirlit í Admin." };
    }
    if (filter === "needs_review") {
      return { eyebrow: "Ekkert þarf staðfestingu", title: "Engin tækifæri þarfnast staðfestingar núna.", body: "Tækifæri úr breiðum heimildum sem þarf að yfirfara birtast hér." };
    }
    if (filter === "strong") {
      return { eyebrow: "Engar sterkar samsvaranir", title: "Engar sterkar samsvaranir enn.", body: "Þið gætuð samt átt gagnlegar mögulegar samsvaranir. Prófið Mælt með eða Allar samsvaranir." };
    }
    if (filter === "possible" || filter === "Possible match" || filter === "Weak match") {
      return { eyebrow: "Engar mögulegar samsvaranir", title: "Engar mögulegar samsvaranir enn.", body: "Prófið að víkka þjónustu, svæði eða leitarorð til að finna óvissari tækifæri." };
    }
    return { eyebrow: "Engar ráðlagðar samsvaranir", title: getRecommendedEmptyTitle(context), body: getRecommendedEmptyBody(context) };
  }
  if (filter === "all") {
    return {
      eyebrow: "No matches",
      title: "No opportunities found for this profile yet.",
      body: "Broaden your services, locations or keywords to find more opportunities."
    };
  }
  if (filter === "all_opportunities") {
    return {
      eyebrow: "No opportunities",
      title: "No available opportunities yet.",
      body: "Import more sources or check Admin source coverage."
    };
  }
  if (filter === "needs_review") {
    return {
      eyebrow: "No needs-review items",
      title: "No needs-review opportunities right now.",
      body: "Broad-feed opportunities that need manual verification will appear here."
    };
  }
  if (filter === "strong") {
    return {
      eyebrow: "No strong matches",
      title: "No strong matches yet.",
      body: "You may still have useful possible matches. Switch to Recommended or All matches to review them."
    };
  }
  if (filter === "possible" || filter === "Possible match" || filter === "Weak match") {
    return {
      eyebrow: "No possible matches",
      title: "No possible matches yet.",
      body: "Try broadening your services, locations or keywords to find lower-confidence opportunities."
    };
  }
  return {
    eyebrow: "No recommended matches",
    title: getRecommendedEmptyTitle(context),
    body: getRecommendedEmptyBody(context)
  };
}

function getRecommendedEmptyTitle(context = {}) {
  const companyName = context.companyName || (state.language === "is" ? "þennan prófíl" : "this profile");
  if (Number(context.strongCount || 0) > 0) {
    if (state.language === "is") return `${context.strongCount} sterkar samsvaranir eru faldar af síum.`;
    return `${context.strongCount} strong ${Number(context.strongCount) === 1 ? "match is" : "matches are"} hidden by filters.`;
  }
  if (state.language === "is") return `Engar ráðlagðar samsvaranir fyrir ${companyName} enn.`;
  return `No recommended matches for ${companyName} yet.`;
}

function getRecommendedEmptyBody(context = {}) {
  const strongCount = Number(context.strongCount || 0);
  const filteredStoredCount = Number(context.filteredStoredCount || 0);
  const availableCount = Number(context.availableCount || 0);
  if (strongCount > 0) {
    if (state.language === "is") return "Hreinsið leit/flokka/svæðissíur eða slökkvið á Aðeins vistað til að sjá sterku samsvaranirnar.";
    return "Clear search/category/location filters or turn off Saved only to see the strong matches.";
  }
  if (filteredStoredCount > 0) {
    if (state.language === "is") return `${filteredStoredCount} tækifæri eru til, en falin af gæðasíum. Notið Allar samsvaranir eða Þarfnast staðfestingar til að skoða þau.`;
    return `${filteredStoredCount} ${filteredStoredCount === 1 ? "opportunity is" : "opportunities are"} available, but hidden from Recommended by quality checks. Use All matches or Needs review to inspect them.`;
  }
  if (state.language === "is") return `${availableCount} tækifæri eru til í kerfinu, en ekkert passar nógu sterkt við þennan prófíl.`;
  return `${availableCount} opportunities are available in the system, but none match this profile strongly enough.`;
}

function renderDashboardEmptyState(profile, filter = state.filters.label, context = {}) {
  const suggestions = getDashboardProfileSuggestions(profile);
  const copy = getDashboardEmptyCopy(filter, {
    ...context,
    companyName: profile?.companyName,
  });
  return `
    <div class="dashboard-empty-state">
      <div>
        <p class="eyebrow">${escapeHtml(copy.eyebrow)}</p>
        <h2>${escapeHtml(copy.title)}</h2>
        <p>${escapeHtml(copy.body)}</p>
      </div>
      <ul>
        ${suggestions.map((suggestion) => `<li>${escapeHtml(suggestion)}</li>`).join("")}
      </ul>
      <div class="dashboard-empty-actions">
        <button class="btn btn-primary" type="button" data-action="go" data-href="/settings">${escapeHtml(t("improveProfile"))}</button>
        <button class="btn btn-secondary" type="button" data-action="include-national-opportunities">${escapeHtml(t("includeNationalOpportunities"))}</button>
        <button class="btn btn-secondary" type="button" data-action="show-all-matches">${escapeHtml(t("showAllStoredMatches"))}</button>
        <button class="btn btn-secondary" type="button" data-action="show-all-opportunities">${escapeHtml(t("inspectAllOpportunities"))}</button>
      </div>
    </div>
  `;
}

function renderOpportunityCard(opp) {
  const saved = state.saved.includes(opp.id);
  const days = daysUntilDeadline(opp.deadline);
  const deadline = getOpportunityDeadlineDisplay(opp);
  return `
    <article class="opportunity-card">
      <div class="opp-main">
        <div class="opp-top">
          <div class="opportunity-badges">
            <span class="source-pill source-badge">${escapeHtml(opp.source)}</span>
            ${renderQualityBadge(opp)}
            ${renderExtractedArticleBadge(opp)}
            ${isTedOpportunity(opp) ? `<span class="source-pill source-badge muted-badge">${escapeHtml(t("originalLanguage"))}</span>` : ""}
          </div>
          <span class="${badgeClass(opp.matchLabel)}">${escapeHtml(formatReportMatchLabel(opp.matchLabel))} · ${opp.matchScore}</span>
        </div>
        <h3>${escapeHtml(opp.title)}</h3>
        <p>${escapeHtml(opp.description)}</p>
        <div class="meta-row">
          <span>${escapeHtml(formatOpportunityBuyer(opp))}</span>
          <span>${escapeHtml(formatOpportunityLocation(opp))}</span>
          <span>${formatISK(opp.estimatedValue)}</span>
          <span class="${deadline.className}">${escapeHtml(deadline.label)}</span>
        </div>
        <div class="reason-row">
          ${opp.matchReasons.slice(0, 3).map((r) => `<span>${escapeHtml(formatReportReason(r))}</span>`).join("")}
        </div>
      </div>
      <div class="opp-actions">
        <button class="btn btn-secondary" data-action="details" data-id="${opp.id}">${escapeHtml(t("details"))}</button>
        <button class="btn ${saved ? "btn-primary" : "btn-secondary"}" data-action="save" data-id="${opp.id}">${saved ? escapeHtml(t("saved")) : escapeHtml(t("save"))}</button>
        <button class="btn btn-ghost" data-action="ignore" data-id="${opp.id}">${escapeHtml(t("ignore"))}</button>
      </div>
    </article>
  `;
}

function isTedOpportunity(opp) {
  return /ted|tenders electronic daily/i.test(String(opp.source || ""));
}

function formatQualityStatus(status) {
  const value = normalizeOpportunityQualityStatus(status);
  const labels = {
    confirmed_tender: "Confirmed tender",
    early_signal: "Early signal",
    needs_review: "Needs review"
  };
  return labels[value] || capitalize(value.replace(/_/g, " "));
}

function formatOpportunityIntent(intent) {
  const labels = {
    confirmed_tender: "Confirmed tender",
    early_opportunity: "Early opportunity",
    market_signal: "Market signal",
    news_context: "News context",
    not_opportunity: "Not an opportunity"
  };
  return labels[normalizeOpportunityIntent(intent) || intent] || capitalize(String(intent || "market_signal").replace(/_/g, " "));
}

function getOpportunityQualityLabel(opp) {
  const intent = getOpportunityIntent(opp);
  if (intent === "news_context" || intent === "not_opportunity" || intent === "market_signal") {
    return formatOpportunityIntent(intent);
  }
  if (isVegagerdinExtractedProject(opp)) {
    return formatTenderState(getVegagerdinExtractedTenderState(opp));
  }
  return formatQualityStatus(normalizeOpportunityQualityStatus(opp.qualityStatus, opp));
}

function renderQualityBadge(opp) {
  const status = getOpportunityIntent(opp) || normalizeOpportunityQualityStatus(opp.qualityStatus, opp);
  return `<span class="source-pill source-badge quality-badge ${escapeHtml(status)}">${escapeHtml(formatReportQualityLabel(getOpportunityQualityLabel(opp)))}</span>`;
}

function renderExtractedArticleBadge(opp) {
  if (opp?.rawPayload?.extraction_method !== "vegagerdin_article_project_parser") return "";
  const region = opp.rawPayload?.region ? ` · ${opp.rawPayload.region}` : "";
  return `<span class="source-pill source-badge muted-badge">${escapeHtml(t("extractedProject"))}${escapeHtml(region)}</span>`;
}

function renderTenderStateBadge(opp) {
  if (!isVegagerdinExtractedProject(opp)) return "";
  const stateValue = getVegagerdinExtractedTenderState(opp);
  const labels = {
    tender_awarded: t("tenderAwarded"),
    awarded: t("tenderAwarded"),
    already_tendered: t("tenderAlreadyAnnounced"),
    announced: t("tenderAlreadyAnnounced"),
    upcoming_tender: t("upcomingTender"),
    project_signal: t("projectSignal")
  };
  const label = labels[stateValue] || "";
  return label ? `<span class="source-pill source-badge muted-badge">${escapeHtml(label)}</span>` : "";
}

function formatTenderState(value) {
  const labels = {
    tender_awarded: t("tenderAwarded"),
    awarded: t("tenderAwarded"),
    already_tendered: t("tenderAlreadyAnnounced"),
    announced: t("tenderAlreadyAnnounced"),
    upcoming_tender: t("upcomingTender"),
    project_signal: t("projectSignal"),
    open_or_published: t("tenderAlreadyAnnounced"),
    planned_tender: t("upcomingTender"),
    unclear: t("projectSignal")
  };
  return labels[String(value || "")] || capitalize(String(value || "").replace(/_/g, " "));
}

function renderQualityWarning(opp) {
  const intent = getOpportunityIntent(opp);
  if (intent === "news_context" || intent === "not_opportunity") {
    return `<div class="note-panel quality-warning">${escapeHtml(state.language === "is" ? "Þetta lítur út eins og frétta- eða umferðarefni, ekki tækifæri fyrir viðskiptavin." : "This looks like news or traffic context, not a customer-facing opportunity.")}</div>`;
  }
  if (normalizeOpportunityQualityStatus(opp.qualityStatus, opp) !== "needs_review") return "";
  if (isVegagerdinExtractedProject(opp)) {
    return `<div class="note-panel quality-warning">${escapeHtml(state.language === "is" ? "Útdregin verkefnavísbending — staðfestið útboðstímasetningu í heimildargrein." : "Extracted project signal — verify tender timing in the source article.")}</div>`;
  }
  return `<div class="note-panel quality-warning">${escapeHtml(state.language === "is" ? "Innflutt úr breiðum straumi — staðfestið á upprunasíðu." : "Imported from broad feed — verify source page.")}</div>`;
}

function renderOpportunityModal(opp) {
  const saved = state.saved.includes(opp.id);
  const deadline = getOpportunityDeadlineDisplay(opp);
  const requirements = Array.isArray(opp.requirements) ? opp.requirements : [];
  const matchReasons = Array.isArray(opp.matchReasons) ? opp.matchReasons : [];
  const risks = Array.isArray(opp.risks) ? opp.risks : [];
  const nextSteps = Array.isArray(opp.nextSteps) ? opp.nextSteps : [];
  return `
    <div class="modal-backdrop">
      <div class="modal" role="dialog" aria-modal="true">
        <div class="modal-header">
          <div>
            <div class="opportunity-badges">
              <span class="${badgeClass(opp.matchLabel)}">${escapeHtml(formatReportMatchLabel(opp.matchLabel))} · ${opp.matchScore}</span>
              ${renderQualityBadge(opp)}
              ${renderExtractedArticleBadge(opp)}
            </div>
            <h2>${escapeHtml(opp.title)}</h2>
            <p>${escapeHtml(formatOpportunityModalValue("buyer", opp.buyer))} · ${escapeHtml(formatOpportunityLocation(opp))} · ${opp.estimatedValue ? formatISK(opp.estimatedValue) : t("notListed")}</p>
          </div>
          <button type="button" class="icon-btn modal-close-btn" data-action="close-modal" aria-label="Close details">×</button>
        </div>

        <div class="modal-body">
          <div class="modal-grid">
            <section>
              ${renderQualityWarning(opp)}
              <h3>${escapeHtml(t("description"))}</h3>
              <p>${escapeHtml(opp.description || t("noDescription"))}</p>
              <h3>${escapeHtml(t("requirements"))}</h3>
              <ul class="check-list">
                ${(requirements.length ? requirements : [t("noSpecificRequirements")]).map((r) => `<li>${escapeHtml(r)}</li>`).join("")}
              </ul>
              <h3>${escapeHtml(t("matchReasons"))}</h3>
              <ul class="check-list">
                ${(matchReasons.length ? matchReasons.map(formatReportReason) : [t("noMatchReasons")]).map((r) => `<li>${escapeHtml(r)}</li>`).join("")}
              </ul>
            </section>

            <aside class="side-panel">
              <h3>${escapeHtml(t("opportunityInfo"))}</h3>
              <p><strong>${escapeHtml(t("source"))}:</strong> ${escapeHtml(formatOpportunityModalValue("source", opp.source))}</p>
              ${isVegagerdinExtractedProject(opp) ? `<p><strong>${escapeHtml(t("extraction"))}:</strong> ${escapeHtml(state.language === "is" ? "Útdregið úr grein Vegagerðarinnar" : "Extracted from Vegagerðin article")}</p>` : ""}
              ${opp.rawPayload?.parent_article_title ? `<p><strong>${escapeHtml(t("sourceArticle"))}:</strong> ${escapeHtml(opp.rawPayload.parent_article_title)}</p>` : ""}
              ${opp.rawPayload?.parent_url ? `<p><strong>${escapeHtml(t("parentArticle"))}:</strong> <a href="${escapeHtml(opp.rawPayload.parent_url)}" target="_blank" rel="noreferrer">${escapeHtml(t("openSourceArticle"))}</a></p>` : ""}
              ${opp.rawPayload?.region ? `<p><strong>${escapeHtml(t("extractedRegion"))}:</strong> ${escapeHtml(opp.rawPayload.region)}</p>` : ""}
              ${opp.rawPayload?.project_number ? `<p><strong>${escapeHtml(t("projectNumber"))}:</strong> ${escapeHtml(opp.rawPayload.project_number)}</p>` : ""}
              ${isVegagerdinExtractedProject(opp) ? `<p><strong>${escapeHtml(t("tenderState"))}:</strong> ${escapeHtml(formatTenderState(getVegagerdinExtractedTenderState(opp)))}</p>` : ""}
              <p><strong>${escapeHtml(t("quality"))}:</strong> ${escapeHtml(formatReportQualityLabel(getOpportunityQualityLabel(opp)))}</p>
              <p><strong>${escapeHtml(t("category"))}:</strong> ${escapeHtml(formatOpportunityModalValue("category", opp.category))}</p>
              <p><strong>${escapeHtml(t("type"))}:</strong> ${escapeHtml(formatOpportunityModalValue("type", opp.type))}</p>
              <p><strong>${escapeHtml(t("deadline"))}:</strong> <span class="${deadline.className}">${escapeHtml(formatReportRisk(deadline.label))}</span></p>
              <p><strong>${escapeHtml(t("published"))}:</strong> ${escapeHtml(opp.publishedDate)}</p>
              <p><strong>${escapeHtml(t("cpv"))}:</strong> ${escapeHtml(opp.cpvCode || "—")}</p>

              <h3>${escapeHtml(t("risksToCheck"))}</h3>
              <ul class="risk-list">
                ${(risks.length ? risks.map(formatReportRisk) : [t("noMajorRisks")]).map((r) => `<li>${escapeHtml(r)}</li>`).join("")}
              </ul>

              <h3>${escapeHtml(t("recommendedNextSteps"))}</h3>
              <ol class="steps-list">
                ${(nextSteps.length ? nextSteps : [t("openSourceAndConfirm")]).map((s) => `<li>${escapeHtml(s)}</li>`).join("")}
              </ol>

              <div class="button-stack">
                <button class="btn btn-primary" data-action="save" data-id="${opp.id}">${saved ? escapeHtml(t("removeFromSaved")) : escapeHtml(t("saveOpportunity"))}</button>
                <a class="btn btn-secondary" href="${escapeHtml(opp.url)}" target="_blank" rel="noreferrer">${escapeHtml(t("openSource"))}</a>
                <button class="btn btn-ghost" data-action="ignore" data-id="${opp.id}">${escapeHtml(t("markNotRelevant"))}</button>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderAdmin() {
  if (!state.user) return requireAuthPage();
  if (!state.isAdmin) return requireAdminPage();

  const opportunities = getFilteredAdminOpportunities();
  const selectedCompany = state.adminCompanies.find((company) => company.id === state.selectedAdminCompanyId);

  return renderShell(`
    <section class="page-head">
      <p class="eyebrow">Admin</p>
      <h1>Operations dashboard</h1>
      <p>Admin tools for monitoring imports, reviewing customers, managing sources and handling manual entries.</p>
    </section>

    ${state.adminMessage ? `
      <div class="admin-message ${state.adminMessage.type === "error" ? "is-error" : "is-success"}">
        ${escapeHtml(state.adminMessage.text)}
      </div>
    ` : ""}

    ${state.opportunityLoadError ? `
      <div class="note-panel">
        ${escapeHtml(state.opportunityLoadError)}
      </div>
    ` : ""}

    ${renderAdminTabs()}
    ${renderAdminActiveTab(opportunities)}
    ${selectedCompany ? renderAdminCompanyDetails(selectedCompany) : ""}
  `);
}

function renderAdminTabs() {
  const tabs = [
    ["overview", "Overview"],
    ["companies", "Companies"],
    ["sources", "Sources/imports"],
    ["opportunities", "Opportunities"],
    ["reports", "Reports"]
  ];
  return `
    <div class="admin-tabs" role="tablist" aria-label="Admin sections">
      ${tabs.map(([key, label]) => `
        <button type="button" class="${state.adminActiveTab === key ? "is-active" : ""}" data-action="admin-tab" data-tab="${key}">
          ${escapeHtml(label)}
        </button>
      `).join("")}
    </div>
  `;
}

function renderAdminActiveTab(opportunities) {
  if (state.adminActiveTab === "companies") return renderAdminCompaniesSection();
  if (state.adminActiveTab === "sources") {
    return `
      ${renderAutomationStatusCard()}
      ${renderAutomationActions()}
      ${renderSourceCoverageSection()}
      ${renderLatestImportRunsTable()}
      ${renderLatestTedOpportunities()}
    `;
  }
  if (state.adminActiveTab === "opportunities") return renderAdminOpportunitiesSection(opportunities);
  if (state.adminActiveTab === "reports") return renderLatestGeneratedReports();
  return `
    ${renderAdminOverview()}
    ${renderAutomationStatusCard()}
    ${renderAdminCompaniesSection(true)}
  `;
}

function renderAdminOverview() {
  const companies = state.adminCompanies || [];
  const opportunities = state.opportunities || [];
  const latest = getLatestImportRun();
  const completeCompanies = companies.filter((company) => company.profileStatus === "Complete").length;
  const incompleteCompanies = Math.max(0, companies.length - completeCompanies);
  return `
    <section class="ops-card">
      <div class="card-header">
        <div>
          <h2>Admin overview</h2>
          <p>Customer, opportunity and automation health at a glance.</p>
        </div>
      </div>
      <div class="ops-metrics admin-overview-metrics">
        <div><span>Total companies</span><strong>${companies.length}</strong></div>
        <div><span>Completed profiles</span><strong>${completeCompanies}</strong></div>
        <div><span>Incomplete profiles</span><strong>${incompleteCompanies}</strong></div>
        <div><span>Stored opportunities</span><strong>${opportunities.length}</strong></div>
        <div><span>Confirmed tenders</span><strong>${opportunities.filter((opp) => normalizeOpportunityQualityStatus(opp.qualityStatus, opp) === "confirmed_tender").length}</strong></div>
        <div><span>Early signals</span><strong>${opportunities.filter((opp) => normalizeOpportunityQualityStatus(opp.qualityStatus, opp) === "early_signal").length}</strong></div>
        <div><span>Needs review</span><strong>${opportunities.filter((opp) => normalizeOpportunityQualityStatus(opp.qualityStatus, opp) === "needs_review").length}</strong></div>
        <div><span>Latest import status</span><strong>${escapeHtml(latest?.status || "No runs")}</strong></div>
      </div>
    </section>
  `;
}

function getFilteredAdminCompanies() {
  const filters = state.adminCompanyFilters;
  return (state.adminCompanies || []).filter((company) => {
    const search = normalizeLocationText(filters.search);
    if (search) {
      const haystack = normalizeLocationText(`${company.companyName} ${company.contactEmail} ${company.industry}`);
      if (!haystack.includes(search)) return false;
    }
    if (filters.industry !== "all" && company.industry !== filters.industry) return false;
    if (filters.profileStatus !== "all" && company.profileStatus !== filters.profileStatus) return false;
    if (filters.plan !== "all" && company.plan !== filters.plan) return false;
    return true;
  });
}

function renderAdminCompaniesSection(compact = false) {
  const companies = compact ? (state.adminCompanies || []).slice(0, 5) : getFilteredAdminCompanies();
  return `
    <section class="ops-card">
      <div class="card-header">
        <div>
          <h2>Companies / users</h2>
          <p>${state.adminCompaniesLoading ? "Loading companies..." : `${companies.length} shown from ${(state.adminCompanies || []).length} total companies.`}</p>
        </div>
        ${compact ? "" : `
          <label class="admin-inline-control">
            <span>Report mode</span>
            <select data-admin-report-mode>
              <option value="new_only" ${state.adminReportMode !== "all_current" ? "selected" : ""}>New opportunities report</option>
              <option value="all_current" ${state.adminReportMode === "all_current" ? "selected" : ""}>All current matches report</option>
            </select>
          </label>
        `}
      </div>
      ${state.adminCompaniesError ? `<div class="admin-message is-error">${escapeHtml(state.adminCompaniesError)}</div>` : ""}
      ${compact ? "" : renderAdminCompanyFilters()}
      ${state.adminCompaniesLoading && !companies.length ? `<div class="empty-card">Loading companies...</div>` : companies.length ? `
        <div class="ops-table-wrap">
          <table class="ops-table admin-companies-table">
            <thead>
              <tr>
                <th>Company</th>
                <th>Industry</th>
                <th>Plan</th>
                <th>Profile</th>
                <th>Created</th>
                <th>Matches</th>
                <th>Saved</th>
                <th>Last report</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              ${companies.map(renderAdminCompanyRow).join("")}
            </tbody>
          </table>
        </div>
      ` : `<div class="empty-card">No companies found.</div>`}
    </section>
  `;
}

function renderAdminCompanyFilters() {
  const companies = state.adminCompanies || [];
  const industries = getAdminFilterOptions(companies, (company) => company.industry);
  const plans = getAdminFilterOptions(companies, (company) => company.plan);
  const filters = state.adminCompanyFilters;
  return `
    <div class="admin-filters admin-company-filters">
      <input data-admin-company-filter="search" value="${escapeHtml(filters.search)}" placeholder="Search company or email..." />
      <select data-admin-company-filter="industry">
        <option value="all">All industries</option>
        ${industries.map((industry) => `<option value="${escapeHtml(industry)}" ${filters.industry === industry ? "selected" : ""}>${escapeHtml(industry)}</option>`).join("")}
      </select>
      <select data-admin-company-filter="profileStatus">
        <option value="all">All profiles</option>
        ${["Complete", "Incomplete"].map((status) => `<option value="${status}" ${filters.profileStatus === status ? "selected" : ""}>${status}</option>`).join("")}
      </select>
      <select data-admin-company-filter="plan">
        <option value="all">All plans</option>
        ${plans.map((plan) => `<option value="${escapeHtml(plan)}" ${filters.plan === plan ? "selected" : ""}>${escapeHtml(plan)}</option>`).join("")}
      </select>
    </div>
  `;
}

function renderAdminCompanyRow(company) {
  const actionState = state.adminCompanyActions?.[company.id] || "";
  const refreshing = actionState === "refresh";
  const generating = actionState === "report";
  const busy = Boolean(actionState);
  return `
    <tr>
      <td><strong>${escapeHtml(company.companyName)}</strong><br><span>${escapeHtml(company.contactEmail || "No email")}</span></td>
      <td>${escapeHtml(company.industry || "Unknown")}</td>
      <td>${escapeHtml(company.plan || "Demo")}</td>
      <td><span class="status-pill ${company.profileStatus === "Complete" ? "is-success" : "is-running"}">${escapeHtml(company.profileStatus)}</span></td>
      <td>${escapeHtml(formatDateTime(company.createdAt))}</td>
      <td>${company.matchCount}</td>
      <td>${company.savedCount ? company.savedCount : "Not tracked"}</td>
      <td>${company.latestReportDate ? escapeHtml(formatDateTime(company.latestReportDate)) : "No reports"}</td>
      <td>
        <div class="admin-row-actions">
          <button class="btn btn-secondary btn-small" type="button" data-action="view-admin-company" data-id="${escapeHtml(company.id)}" ${busy ? "disabled" : ""}>View details</button>
          <button class="btn btn-ghost btn-small" type="button" data-action="admin-refresh-company-matches" data-id="${escapeHtml(company.id)}" ${busy ? "disabled" : ""}>${refreshing ? "Refreshing..." : "Refresh matches"}</button>
          <button class="btn btn-ghost btn-small" type="button" data-action="admin-generate-company-report" data-id="${escapeHtml(company.id)}" ${busy ? "disabled" : ""}>${generating ? "Generating..." : "Generate report"}</button>
        </div>
      </td>
    </tr>
  `;
}

function renderAdminOpportunitiesSection(opportunities) {
  const draft = {
    ...createEmptyAdminOpportunityDraft(),
    ...(state.adminOpportunityDraft || {})
  };
  return `
    <form class="form-card admin-form" id="admin-opportunity-form">
      <div class="form-section">
        <h2>Add opportunity</h2>
        <div class="form-grid">
          <label>Title <input name="title" data-admin-opportunity-field="title" value="${escapeHtml(draft.title)}" required /></label>
          <label>Buyer <input name="buyer" data-admin-opportunity-field="buyer" value="${escapeHtml(draft.buyer)}" /></label>
          <label>Source name <input name="sourceName" data-admin-opportunity-field="sourceName" value="${escapeHtml(draft.sourceName)}" required /></label>
          <label>Category <input name="category" data-admin-opportunity-field="category" value="${escapeHtml(draft.category)}" /></label>
          <label>Type <input name="type" data-admin-opportunity-field="type" value="${escapeHtml(draft.type)}" /></label>
          <label>Deadline <input type="date" name="deadline" data-admin-opportunity-field="deadline" value="${escapeHtml(draft.deadline)}" /></label>
          <label>Published date <input type="date" name="published_date" data-admin-opportunity-field="published_date" value="${escapeHtml(draft.published_date)}" /></label>
          <label>Location <input name="location" data-admin-opportunity-field="location" value="${escapeHtml(draft.location)}" /></label>
          <label>Estimated value <input type="number" min="0" step="1" name="estimated_value" data-admin-opportunity-field="estimated_value" value="${escapeHtml(draft.estimated_value)}" /></label>
          <label>URL <input type="url" name="url" data-admin-opportunity-field="url" value="${escapeHtml(draft.url)}" /></label>
          <label>CPV code <input name="cpv_code" data-admin-opportunity-field="cpv_code" value="${escapeHtml(draft.cpv_code)}" /></label>
          <label>Difficulty <input name="difficulty" data-admin-opportunity-field="difficulty" value="${escapeHtml(draft.difficulty)}" /></label>
          <label>Status <input name="status" data-admin-opportunity-field="status" value="${escapeHtml(draft.status)}" /></label>
        </div>
        <label>Description <textarea name="description" data-admin-opportunity-field="description" rows="4">${escapeHtml(draft.description)}</textarea></label>
        <label>Requirements comma-separated <textarea name="requirements" data-admin-opportunity-field="requirements" rows="3">${escapeHtml(draft.requirements)}</textarea></label>
        <label>Keywords comma-separated <textarea name="keywords" data-admin-opportunity-field="keywords" rows="3">${escapeHtml(draft.keywords)}</textarea></label>
      </div>

      <div class="form-actions">
        <button class="btn btn-primary btn-large" type="submit" ${state.adminSubmitting ? "disabled" : ""}>
          ${state.adminSubmitting ? "Saving..." : "Add opportunity"}
        </button>
      </div>
    </form>

    <section class="admin-list">
      <div class="card-header">
        <div>
          <h2>Existing opportunities</h2>
          <p>${(state.opportunities || []).length} loaded ${state.opportunityLoadError ? "from fallback data" : "from Supabase"}.</p>
        </div>
      </div>
      ${renderAdminOpportunityFilters(opportunities)}
      ${opportunities.length ? opportunities.map(renderAdminOpportunityRow).join("") : `<div class="empty-card">No opportunities loaded.</div>`}
    </section>
  `;
}

function renderAdminCompanyDetails(company) {
  const projectRange = [
    company.minProjectValue ? formatISK(company.minProjectValue) : "No minimum",
    company.maxProjectValue ? formatISK(company.maxProjectValue) : "No maximum"
  ].join(" - ");
  const safeWebsite = getSafeExternalUrl(company.website);
  return `
    <div class="modal-backdrop">
      <div class="modal admin-company-modal" role="dialog" aria-modal="true">
        <div class="modal-header">
          <div>
            <span class="status-pill ${company.profileStatus === "Complete" ? "is-success" : "is-running"}">${escapeHtml(company.profileStatus)}</span>
            <h2>${escapeHtml(company.companyName)}</h2>
            <p>${escapeHtml(company.contactEmail || "No contact email")} · ${escapeHtml(company.industry || "Unknown industry")}</p>
          </div>
          <button type="button" class="icon-btn modal-close-btn" data-action="close-admin-company" aria-label="Close company details">×</button>
        </div>
        <div class="modal-body">
          <div class="admin-detail-grid">
            <section class="side-panel">
              <h3>Company basics</h3>
              <p><strong>Email:</strong> ${escapeHtml(company.contactEmail || "Unknown")}</p>
              <p><strong>Website:</strong> ${safeWebsite ? `<a href="${escapeHtml(safeWebsite)}" target="_blank" rel="noreferrer">${escapeHtml(company.website)}</a>` : escapeHtml(company.website || "Not listed")}</p>
              <p><strong>Industry:</strong> ${escapeHtml(company.industry || "Unknown")}</p>
              <p><strong>Plan:</strong> ${escapeHtml(company.plan || "Demo")}</p>
              <p><strong>Created:</strong> ${escapeHtml(formatDateTime(company.createdAt))}</p>

              <h3>Project preferences</h3>
              <p><strong>Project size:</strong> ${escapeHtml(projectRange)}</p>
              <p><strong>Unknown value:</strong> ${company.allowUnknownValue ? "Allowed" : "Not preferred"}</p>
              <p><strong>Travel:</strong> ${company.willingToTravel ? "Yes" : "No"}</p>
              <p><strong>National:</strong> ${company.nationalProjects ? "Yes" : "No"}</p>
              <p><strong>Remote:</strong> ${company.remoteProjects ? "Yes" : "No"}</p>
            </section>

            <section class="side-panel">
              <h3>Services</h3>
              ${renderAdminTagList(company.services, "No services saved.")}
              <h3>Include keywords</h3>
              ${renderAdminTagList(company.includeKeywords, "No include keywords saved.")}
              <h3>Exclude keywords</h3>
              ${renderAdminTagList(company.excludeKeywords, "No exclude keywords saved.")}
            </section>

            <section class="side-panel">
              <h3>Locations and service areas</h3>
              <p><strong>Base:</strong> ${escapeHtml(company.baseLocation || "Not set")}</p>
              ${renderAdminTagList([...company.locations, ...company.serviceAreas], "No locations saved.")}
              <h3>Reports</h3>
              <p><strong>Frequency:</strong> ${escapeHtml(company.reportFrequency)}</p>
              <p><strong>Day:</strong> ${escapeHtml(company.reportDay)}</p>
              <p><strong>Deadline reminders:</strong> ${company.deadlineReminders ? "On" : "Off"}</p>
            </section>

            <section class="side-panel">
              <h3>Latest matches</h3>
              ${company.latestMatches.length ? `
                <ul class="admin-detail-list">
                  ${company.latestMatches.map((match) => `
                    <li>
                      <strong>${escapeHtml(match.opportunities?.title || "Opportunity")}</strong>
                      <span>${Number(match.match_score || 0)} · ${escapeHtml(match.match_label || getMatchLabel(Number(match.match_score || 0)))}</span>
                    </li>
                  `).join("")}
                </ul>
              ` : `<p>No stored matches yet.</p>`}
              <h3>Latest reports</h3>
              ${company.latestReports.length ? `
                <ul class="admin-detail-list">
                  ${company.latestReports.map((report) => `
                    <li>
                      <strong>${escapeHtml(report.title || "Report")}</strong>
                      <span>${escapeHtml(formatDateTime(report.created_at))}</span>
                    </li>
                  `).join("")}
                </ul>
              ` : `<p>No reports generated yet.</p>`}
            </section>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderAdminTagList(values, emptyText) {
  const items = cleanStringArray(values);
  if (!items.length) return `<p>${escapeHtml(emptyText)}</p>`;
  return `<div class="admin-tag-list">${items.map((item) => `<span>${escapeHtml(item)}</span>`).join("")}</div>`;
}

function renderAdminOpportunityRow(opp) {
  const isUpdating = state.adminUpdatingId === opp.id;
  const intent = getOpportunityIntent(opp);
  const hiddenFromReports = opp.rawPayload?.hidden_from_reports === true ||
    ["hidden", "noise", "deleted"].includes(String(opp.rawPayload?.admin_report_status || "").toLowerCase());
  const duplicateReason = isSecondaryDuplicateOpportunity(opp)
    ? (opp.rawPayload?.duplicate_reason || `Duplicate of ${opp.rawPayload?.canonical_opportunity_id || opp.rawPayload?.duplicate_of || "canonical opportunity"}`)
    : "";
  const staleInfo = getStaleOpportunityInfo({
    title: opp.title,
    description: opp.description,
    content: `${opp.category || ""} ${opp.source || ""} ${Array.isArray(opp.keywords) ? opp.keywords.join(" ") : ""}`,
    publishedDate: opp.publishedDate,
    deadline: opp.deadline,
    sourceName: opp.source,
    sourceType: opp.sourceType,
    connectorType: opp.rawPayload?.connector_type,
  });
  const staleReason = opp.rawPayload?.stale_reason || (staleInfo.isStale ? staleInfo.reason : "");
  return `
    <div class="admin-row">
      <div>
        <h3>${escapeHtml(opp.title)}</h3>
        <p>${escapeHtml(formatOpportunityBuyer(opp))} · ${escapeHtml(opp.source)} · ${escapeHtml(formatOpportunityLocation(opp))} · ${escapeHtml(opp.status)}</p>
        <p>Quality: ${escapeHtml(getOpportunityQualityLabel(opp))} · Intent: ${escapeHtml(formatOpportunityIntent(intent))}${hiddenFromReports ? " · Hidden from reports" : ""}${duplicateReason ? ` · Duplicate: ${escapeHtml(duplicateReason)}` : ""}${staleReason ? ` · Stale / expired: ${escapeHtml(staleReason)}` : ""}</p>
      </div>
      <div class="admin-row-actions">
        <button class="btn btn-ghost btn-small" data-action="admin-report-override" data-override="confirmed_tender" data-id="${escapeHtml(opp.id)}" ${isUpdating ? "disabled" : ""}>Confirmed tender</button>
        <button class="btn btn-ghost btn-small" data-action="admin-report-override" data-override="early_opportunity" data-id="${escapeHtml(opp.id)}" ${isUpdating ? "disabled" : ""}>Early opportunity</button>
        <button class="btn btn-ghost btn-small" data-action="admin-report-override" data-override="include" data-id="${escapeHtml(opp.id)}" ${isUpdating ? "disabled" : ""}>Include in reports</button>
        <button class="btn btn-ghost btn-small" data-action="admin-report-override" data-override="noise" data-id="${escapeHtml(opp.id)}" ${isUpdating ? "disabled" : ""}>News/noise</button>
        <button class="btn btn-ghost btn-small" data-action="admin-report-override" data-override="hide" data-id="${escapeHtml(opp.id)}" ${isUpdating ? "disabled" : ""}>Hide from reports</button>
        <button
          class="btn btn-ghost btn-small"
          data-action="delete-opportunity"
          data-id="${escapeHtml(opp.id)}"
          ${state.adminDeletingId === opp.id ? "disabled" : ""}
        >
          ${state.adminDeletingId === opp.id ? "Deleting..." : "Delete"}
        </button>
      </div>
    </div>
  `;
}

function renderReport() {
  if (!state.user) return requireAuthPage();

  if (!state.profile) {
    return requireProfilePage(
      "Create a profile first",
      "The report needs a company profile so it can generate relevant opportunity matches."
    );
  }

  const profile = state.profile;
  const matches = getReportMatches();
  const report = buildReportContent(profile, matches);
  const selectedReport = state.reports.find((item) => item.id === state.selectedReportId);
  const archiveStatus = state.reportArchiveLoading
    ? t("loadingSavedReports")
    : state.language === "is" ? `${state.reports.length} vistuð yfirlit.` : `${state.reports.length} saved report${state.reports.length === 1 ? "" : "s"}.`;
  const archiveContent = state.reportArchiveLoading
    ? `<div class="empty-card">${escapeHtml(t("loadingSavedReports"))}</div>`
    : state.reportsLoadError
      ? `<div class="admin-message is-error">Failed to load reports. ${escapeHtml(state.reportsLoadError)}</div>`
      : state.reportsLoaded && state.reports.length === 0
        ? `<div class="empty-card">${escapeHtml(t("noSavedReports"))}</div>`
        : state.reports.map(renderReportArchiveRow).join("");

  return renderShell(`
    <section class="dashboard-head">
      <div>
        <p class="eyebrow">${escapeHtml(t("weeklyReport"))}</p>
        <h1>${escapeHtml(t("reportTitle"))}</h1>
        <p>${escapeHtml(profile.companyName || "Your company")} · ${escapeHtml(formatReportDateRange(report.periodStart, report.periodEnd))}</p>
        <p class="muted-copy">${escapeHtml(state.language === "is" ? "Sýnir öll núverandi viðeigandi tækifæri, ekki aðeins ný frá síðasta vistaða yfirliti." : "Showing all current eligible matches, not only new items since the last saved report.")}</p>
      </div>
      <div class="dashboard-actions">
        <button class="btn btn-primary" data-action="save-report" ${state.reportSaveLoading ? "disabled" : ""}>
          ${state.reportSaveLoading ? escapeHtml(t("savingReport")) : escapeHtml(t("saveReport"))}
        </button>
        <button class="btn btn-secondary" data-action="download-report-pdf">${escapeHtml(t("downloadPdf"))}</button>
        <button class="btn btn-secondary" data-action="copy-report">${escapeHtml(t("copyReport"))}</button>
      </div>
    </section>

    ${state.reportMessage ? `
      <div class="admin-message ${state.reportMessage.type === "error" ? "is-error" : "is-success"}">
        ${escapeHtml(state.reportMessage.text)}
      </div>
    ` : ""}

    ${renderReportPreview(report, {
      id: "report-preview",
      contactEmail: profile.contactEmail,
      companyName: profile.companyName
    })}

    <section class="report-archive">
      <div class="card-header">
        <div>
          <p class="eyebrow">${escapeHtml(t("reportArchive"))}</p>
          <h2>${escapeHtml(t("savedReports"))}</h2>
          <p>${archiveStatus}</p>
        </div>
      </div>
      ${archiveContent}
    </section>

    ${selectedReport ? renderSavedReportPreview(selectedReport, profile) : ""}
  `);
}

function renderReportArchiveRow(report) {
  const itemCount = Array.isArray(report.report_items) ? report.report_items.length : Number(report.itemCount || 0);
  const companyName = state.profile?.companyName || report.companies?.company_name || "Company";
  const created = state.language === "is" ? formatCustomerReportDate(report.created_at) : formatShortDate(report.created_at);
  const itemLabel = state.language === "is"
    ? `${itemCount} ${itemCount === 1 ? "tækifæri" : "tækifæri"}`
    : `${itemCount} item${itemCount === 1 ? "" : "s"}`;
  return `
    <div class="report-archive-row">
      <div>
        <h3>${escapeHtml(getCustomerReportTitle(report, companyName))}</h3>
        <p>${escapeHtml(created)} · ${escapeHtml(itemLabel)} · ${escapeHtml(formatReportArchiveStatus(report.status))}</p>
      </div>
      <div class="admin-row-actions">
        <button class="btn btn-secondary" data-action="view-report" data-id="${escapeHtml(report.id)}">${escapeHtml(t("viewReport"))}</button>
        <button class="btn btn-ghost btn-small" data-action="archive-report" data-id="${escapeHtml(report.id)}">${escapeHtml(state.language === "is" ? "Fela yfirlit" : "Hide report")}</button>
      </div>
    </div>
  `;
}

function formatReportArchiveStatus(status) {
  const value = String(status || "draft");
  if (state.language === "is") {
    const map = {
      generated_all_current: "Heildaryfirlit",
      generated_new_only: "Ný tækifæri",
      draft: "Vistað yfirlit"
    };
    return map[value] || value;
  }
  const map = {
    generated_all_current: "All current",
    generated_new_only: "New opportunities",
    draft: "Saved report"
  };
  return map[value] || value;
}

function renderReportPreview(report, options = {}) {
  const id = options.id ? ` id="${escapeHtml(options.id)}"` : "";
  return `
    <section class="report-preview"${id}>
      <div class="report-meta-bar">
        <div>
          <span>${escapeHtml(t("generatedBy"))}</span>
          <strong>${escapeHtml(report.title || t("reportTitle"))}</strong>
        </div>
        <div>
          <span>${escapeHtml(options.companyName || state.profile?.companyName || "Company")}</span>
          <strong>${escapeHtml(formatReportDateRange(report.periodStart, report.periodEnd))}</strong>
        </div>
      </div>
      <div class="report-body">
        ${report.htmlContent}
        ${options.closeButton ? `<button class="btn btn-secondary report-close-btn" data-action="close-archive-report">${escapeHtml(t("closeReport"))}</button>` : ""}
      </div>
      ${report.textContent && options.includeTextArea !== false ? `<textarea id="report-text" class="hidden-textarea">${escapeHtml(report.textContent)}</textarea>` : ""}
    </section>
  `;
}

function renderSavedReportPreview(savedReport, profile, options = {}) {
  const periodStart = savedReport.period_start || savedReport.created_at?.slice(0, 10) || new Date().toISOString().slice(0, 10);
  const periodEnd = savedReport.period_end || savedReport.created_at?.slice(0, 10) || new Date().toISOString().slice(0, 10);
  const companyName = profile.companyName || savedReport.companies?.company_name || "Company";
  const detailedMatches = getSavedReportItemMatches(savedReport);
  const htmlContent = detailedMatches.length
    ? buildSavedReportItemsHtml(detailedMatches)
    : normalizeSavedReportHtml(savedReport);
  const textContent = detailedMatches.length
    ? generateSavedReportText(savedReport, companyName, detailedMatches)
    : savedReport.text_content || "";
  return renderReportPreview({
    title: getCustomerReportTitle(savedReport, companyName),
    periodStart,
    periodEnd,
    htmlContent,
    textContent
  }, {
    companyName,
    closeButton: options.closeButton !== undefined ? options.closeButton : true,
    includeTextArea: options.includeTextArea !== undefined ? options.includeTextArea : false,
    id: options.id || ""
  });
}

function normalizeSavedReportHtml(savedReport) {
  if (savedReport.html_content && savedReport.html_content.includes("report-cover")) {
    return sanitizeReportHtml(savedReport.html_content);
  }

  const periodStart = savedReport.period_start || savedReport.created_at?.slice(0, 10) || new Date().toISOString().slice(0, 10);
  const periodEnd = savedReport.period_end || savedReport.created_at?.slice(0, 10) || new Date().toISOString().slice(0, 10);
  const fallbackContent = savedReport.html_content
    ? sanitizeReportHtml(savedReport.html_content)
    : `<pre>${escapeHtml(savedReport.text_content || "Ekkert efni var vistað fyrir þetta yfirlit.")}</pre>`;
  return `
    <div class="report-cover">
      <div class="report-kicker">Útbúið af VerkRadar</div>
      <p class="eyebrow">Vistað yfirlit</p>
      <h2>${escapeHtml(savedReport.title || "Vistað yfirlit")}</h2>
      <p>${escapeHtml(formatReportDateRange(periodStart, periodEnd))}</p>
      <p>${escapeHtml(savedReport.summary || "Þetta eldra vistaða yfirlit er birt í nýju skýrslusniði.")}</p>
    </div>
    <div class="report-legacy-content">
      ${fallbackContent}
    </div>
  `;
}

function getCustomerReportTitle(report, companyName) {
  const cleanCompany = String(companyName || report?.companies?.company_name || "Company").trim();
  return t("reportForCompany", { company: cleanCompany });
}

function getSavedReportItemMatches(savedReport) {
  const items = Array.isArray(savedReport?.report_items) ? [...savedReport.report_items] : [];
  return items
    .sort((a, b) => Number(a.sort_order || 0) - Number(b.sort_order || 0))
    .map((item) => {
      if (!item.opportunities) return null;
      const opp = mapSupabaseOpportunity(item.opportunities);
      return {
        ...opp,
        matchScore: Number(item.match_score || 0),
        matchLabel: getMatchLabel(Number(item.match_score || 0)),
        matchReasons: sanitizeMatchReasons(opp, Array.isArray(item.match_reasons) ? item.match_reasons : []),
        risks: Array.isArray(item.risks) && item.risks.length
          ? item.risks
          : (Array.isArray(opp.rawPayload?.risks) ? opp.rawPayload.risks : []),
        nextSteps: []
      };
    })
    .filter(Boolean);
}

function buildSavedReportItemsHtml(matches) {
  const sections = getSavedReportSections(matches);
  return `
    ${sections.confirmed.length ? renderReportOpportunitySection(t("openTenders"), t("openTendersDescription"), sections.confirmed) : ""}
    ${sections.early.length ? renderReportOpportunitySection(t("upcomingOpportunities"), t("upcomingDescription"), sections.early) : ""}
    ${sections.review.length ? renderReportOpportunitySection(t("needsReview"), state.language === "is" ? "Atriði úr vistuðu yfirliti sem þarf að staðfesta á heimild." : "Saved report items that should be verified at the source.", sections.review) : ""}
    <p class="report-footer-note">${escapeHtml(t("reportFooter"))}</p>
  `;
}

function getSavedReportSections(matches) {
  const sections = {
    confirmed: [],
    early: [],
    review: []
  };

  matches.forEach((opp) => {
    const placement = getReportOpportunityPlacement(opp);
    if (placement === "confirmed") sections.confirmed.push(opp);
    else if (placement === "early") sections.early.push(opp);
    else if (placement !== "excluded") sections.review.push(opp);
  });

  return sections;
}

function sanitizeReportHtml(html) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(String(html || ""), "text/html");
  const allowedTags = new Set([
    "A", "ARTICLE", "DIV", "EM", "H2", "H3", "H4", "H5", "LI", "OL", "P", "PRE", "SECTION", "SPAN", "STRONG", "UL"
  ]);
  const allowedAttrs = new Set(["aria-hidden", "class", "href", "rel", "target"]);

  doc.body.querySelectorAll("*").forEach((node) => {
    if (!allowedTags.has(node.tagName)) {
      node.replaceWith(...Array.from(node.childNodes));
      return;
    }

    Array.from(node.attributes).forEach((attr) => {
      if (!allowedAttrs.has(attr.name)) {
        node.removeAttribute(attr.name);
        return;
      }
      if (attr.name === "href") {
        const safeUrl = getSafeExternalUrl(attr.value);
        if (safeUrl) node.setAttribute("href", safeUrl);
        else node.removeAttribute("href");
      }
    });
  });

  return doc.body.innerHTML;
}

function stripHtmlFromString(html) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(String(html || ""), "text/html");
  return doc.body.textContent?.replace(/\s+/g, " ").trim() || "";
}

function getSafeExternalUrl(value) {
  const url = String(value || "").trim();
  if (/^https?:\/\//i.test(url)) return url;
  return "";
}

function getReportMatches(mode = "all_current", previouslyReportedIds = new Set()) {
  return buildCurrentReportMatches({ mode, previouslyReportedIds });
}

function buildCurrentReportMatches({ mode = "all_current", previouslyReportedIds = new Set() } = {}) {
  const matches = getMatchedOpportunities()
    .filter((opp) => opp.matchScore >= 50)
    .filter(isStrictCustomerReportEligible);
  const modeMatches = mode === "new_only"
    ? matches.filter((opp) => !previouslyReportedIds.has(opp.id))
    : matches;
  const sections = getReportSections(modeMatches);
  return [
    ...sections.confirmed,
    ...sections.early,
  ];
}

function buildReportContent(profile, matches) {
  const now = new Date();
  const periodEnd = now.toISOString().slice(0, 10);
  const start = new Date(now);
  start.setDate(start.getDate() - 7);
  const periodStart = start.toISOString().slice(0, 10);
  const title = t("reportForCompany", { company: profile.companyName });
  const sections = getReportSections(matches);
  const coreCount = sections.confirmed.length + sections.early.length;
  const summary = state.language === "is"
    ? `${coreCount} viðeigandi útboðs- eða verðfyrirspurnaratriði fundust fyrir ${profile.companyName}.`
    : `${coreCount} relevant tender/quote-request ${coreCount === 1 ? "item" : "items"} found for ${profile.companyName}.`;
  const textContent = generateWeeklyReport(profile, matches);
  const htmlContent = `
    <div class="report-cover">
      <div class="report-kicker">${escapeHtml(t("generatedBy"))}</div>
      <p class="eyebrow">${escapeHtml(t("reportTitle"))}</p>
      <h2>${escapeHtml(title)}</h2>
      <p>${escapeHtml(formatReportDateRange(periodStart, periodEnd))}</p>
      <p>${escapeHtml(summary)} ${matches[0] ? escapeHtml(state.language === "is" ? `Sterkasta sýnilega atriðið er ${matches[0].title}.` : `The strongest visible item is ${matches[0].title}.`) : escapeHtml(state.language === "is" ? "Engin skýr útboð eða verðfyrirspurnir fundust fyrir þetta tímabil." : "No strict report-ready tenders or quote requests were found for this period.")}</p>
    </div>

    <div class="report-summary-grid">
      ${renderReportSummaryCard(t("openTenders"), sections.confirmed.length)}
      ${renderReportSummaryCard(t("upcomingOpportunities"), sections.early.length)}
    </div>

    ${renderReportOpportunitySection(t("openTenders"), t("openTendersDescription"), sections.confirmed)}
    ${sections.early.length ? renderReportOpportunitySection(t("upcomingOpportunities"), t("upcomingDescription"), sections.early) : ""}

    <p class="report-footer-note">${escapeHtml(t("reportFooter"))}</p>
  `;

  return {
    title,
    periodStart,
    periodEnd,
    summary,
    textContent,
    htmlContent
  };
}

function formatReportDateRange(start, end) {
  return `${formatCustomerReportDate(start)} – ${formatCustomerReportDate(end)}`;
}

function formatCustomerReportDate(value) {
  if (!value) return "Engin dagsetning";
  const date = new Date(`${String(value).slice(0, 10)}T00:00:00`);
  if (Number.isNaN(date.getTime())) return String(value);
  if (state.language === "en") {
    return new Intl.DateTimeFormat("en-GB", {
      year: "numeric",
      month: "short",
      day: "2-digit"
    }).format(date);
  }
  const months = [
    "janúar",
    "febrúar",
    "mars",
    "apríl",
    "maí",
    "júní",
    "júlí",
    "ágúst",
    "september",
    "október",
    "nóvember",
    "desember"
  ];
  return `${date.getDate()}. ${months[date.getMonth()]} ${date.getFullYear()}`;
}

function getReportSections(matches) {
  const buckets = {
    confirmed: [],
    early: [],
  };
  const seen = new Set();

  sortCustomerReportMatches(matches).forEach((opp) => {
    const placement = getReportOpportunityPlacement(opp);
    if (placement === "excluded") return;
    if (seen.has(opp.id)) return;
    seen.add(opp.id);

    if (placement === "confirmed") buckets.confirmed.push(opp);
    else if (placement === "early") buckets.early.push(opp);
  });

  const mainBudget = 8;
  let remainingMain = mainBudget;
  for (const key of ["confirmed", "early"]) {
    const kept = buckets[key].slice(0, remainingMain);
    buckets[key] = kept;
    remainingMain = Math.max(0, remainingMain - kept.length);
  }

  return buckets;
}

function getReportOpportunityPlacement(opp) {
  if (!isStrictCustomerReportEligible(opp)) return "excluded";
  const intent = getOpportunityIntent(opp);
  if (intent === "confirmed_tender") return "confirmed";
  if (intent === "early_opportunity") return "early";
  const quality = normalizeOpportunityQualityStatus(opp.qualityStatus, opp);
  if (quality === "confirmed_tender") return "confirmed";
  if (quality === "early_signal") return "early";
  return "excluded";
}

function isReportEligibleOpportunity(opp) {
  return isStrictCustomerReportEligible(opp);
}

function isStrictCustomerReportEligible(opp) {
  if (!opp || isDemoTestOpportunity(opp)) return false;
  if (!isDashboardVisibleOpportunity(opp)) return false;
  if (isCustomerReportExcludedIntent(opp)) return false;
  if (isAlreadyAwardedOrTenderedReportItem(opp)) return false;
  if (isDesignConsultingOnlyForCurrentProfile(opp)) return false;
  if (containsTitleNewsIntent(opp.title || "") && !hasOpenTenderOrQuoteIntent(opp)) return false;

  const intent = getOpportunityIntent(opp);
  if (intent === "confirmed_tender") return hasOpenTenderOrQuoteIntent(opp) || isProcurementSource(opp);
  if (intent === "early_opportunity") return hasUpcomingTenderIntent(opp);

  const quality = normalizeOpportunityQualityStatus(opp.qualityStatus, opp);
  if (quality === "confirmed_tender") return hasOpenTenderOrQuoteIntent(opp) || isProcurementSource(opp);
  if (quality === "early_signal") return hasUpcomingTenderIntent(opp);
  return false;
}

function isCustomerReportExcludedIntent(opp) {
  const payload = opp?.rawPayload || {};
  const adminStatus = String(payload.admin_report_status || "").toLowerCase();
  if (adminStatus === "include") return false;
  if (payload.hidden_from_reports === true) return true;
  if (["hidden", "hide", "noise", "deleted"].includes(adminStatus)) return true;
  if (isSecondaryDuplicateOpportunity(opp)) return true;
  if (isStaleCustomerOpportunity(opp)) return true;
  const intent = getOpportunityIntent(opp);
  return intent === "news_context" || intent === "not_opportunity";
}

function isSecondaryDuplicateOpportunity(opp = {}) {
  const payload = opp.rawPayload || {};
  const canonicalId = String(payload.canonical_opportunity_id || "");
  return payload.is_duplicate === true ||
    Boolean(payload.duplicate_of) ||
    (Boolean(canonicalId) && Boolean(opp.id) && canonicalId !== String(opp.id));
}

function sortCustomerReportMatches(matches) {
  return [...matches].sort((a, b) => {
    const placementDiff = getStrictReportRank(a) - getStrictReportRank(b);
    if (placementDiff) return placementDiff;
    const procurementDiff = Number(isProcurementSource(b)) - Number(isProcurementSource(a));
    if (procurementDiff) return procurementDiff;
    const intentDiff = Number(hasOpenTenderOrQuoteIntent(b)) - Number(hasOpenTenderOrQuoteIntent(a));
    if (intentDiff) return intentDiff;
    return b.matchScore - a.matchScore || daysUntilDeadline(a.deadline) - daysUntilDeadline(b.deadline);
  });
}

function getStrictReportRank(opp) {
  if (isAlreadyAwardedOrTenderedReportItem(opp)) return 99;
  const intent = getOpportunityIntent(opp);
  if (intent === "confirmed_tender") return 0;
  if (intent === "early_opportunity") return 1;
  return 10;
}

function isAlreadyAwardedOrTenderedReportItem(opp) {
  const tenderState = isVegagerdinExtractedProject(opp) ? getVegagerdinExtractedTenderState(opp) : String(opp?.rawPayload?.tender_state || "").toLowerCase();
  if (["tender_awarded", "awarded", "already_tendered"].includes(tenderState)) return true;
  return containsAnyNormalizedPhrase(getOpportunityQualityText(opp), [
    "lægstbjóðandi",
    "laegstbjodandi",
    "samningur gerður",
    "samningur gerdur",
    "samningur var",
    "samið var",
    "samid var",
    "útboð hefur farið fram",
    "utbod hefur farid fram",
    "útboð var auglýst",
    "utbod var auglyst",
  ]);
}

function hasOpenTenderOrQuoteIntent(opp) {
  return containsAnyNormalizedPhrase(getOpportunityQualityText(opp), [
    "útboð",
    "utbod",
    "útboðsauglýsing",
    "utbodsauglysing",
    "tilboð",
    "tilbod",
    "tilboðum",
    "tilbodum",
    "óskað eftir tilboðum",
    "oskad eftir tilbodum",
    "verðfyrirspurn",
    "verdfyrirspurn",
    "forval",
    "skilafrestur",
    "útboðsgögn",
    "utbodsgogn",
    "quote request",
    "request for quote",
    "tender",
    "procurement",
  ]);
}

function hasUpcomingTenderIntent(opp) {
  return containsAnyNormalizedPhrase(getOpportunityQualityText(opp), [
    "senn í útboð",
    "senn i utbod",
    "áætlað útboð",
    "aaetlad utbod",
    "áætlað er að bjóða út",
    "aaetlad er ad bjoda ut",
    "fyrirhugað útboð",
    "fyrirhugad utbod",
  ]);
}

function isProcurementSource(opp) {
  const source = normalizeLocationText(opp?.source || "");
  return [
    "rikiskaup",
    "ríkiskaup",
    "utbodsvefur",
    "útboðsvefur",
    "ted",
    "tenders electronic daily",
    "procurement",
    "tender portal",
  ].some((trusted) => source.includes(normalizeLocationText(trusted)));
}

function isDesignConsultingOnlyForCurrentProfile(opp) {
  return isDesignConsultingOnlyForProfile(state.profile || {}, opp);
}

function isDesignConsultingOnlyForProfile(profile, opp) {
  const text = getOpportunityQualityText(opp);
  const hasDesignOnlyTerm = containsAnyNormalizedPhrase(text, [
    "for og verkhönnun",
    "for og verkhonnun",
    "verkhönnun",
    "verkhonnun",
    "forhönnun",
    "forhonnun",
    "verkfræðiráðgjöf",
    "verkfraediradgjof",
    "ráðgjöf",
    "radgjof",
    "útboðsgögn hönnun",
    "utbodsgogn honnun",
  ]);
  const hasGeneralDesignTerm = containsAnyNormalizedPhrase(text, ["hönnun", "honnun"]);
  const hasPhysicalWorkTerm = containsAnyNormalizedPhrase(text, [
    "framkvæmdir",
    "framkvaemdir",
    "lóðarframkvæmdir",
    "lodarframkvaemdir",
    "gatnagerð",
    "gatnagerd",
    "lagnir",
    "jarðvinna",
    "jardvinna",
    "malbikun",
    "bygging",
    "viðhald",
    "vidhald",
    "endurbætur",
    "endurbaetur",
  ]);
  const supervisionOnly = containsAnyNormalizedPhrase(text, ["eftirlit"]) && !hasPhysicalWorkTerm;

  if (!hasDesignOnlyTerm && !(hasGeneralDesignTerm && !hasPhysicalWorkTerm) && !supervisionOnly) return false;

  const profileServiceText = normalizeLocationText([
    profile.industry,
    ...(Array.isArray(profile.services) ? profile.services : []),
  ].filter(Boolean).join(" "));
  return !containsAnyNormalizedPhrase(profileServiceText, [
    "hönnun",
    "honnun",
    "ráðgjöf",
    "radgjof",
    "verkfræðiráðgjöf",
    "verkfraediradgjof",
    "verkfræði",
    "verkfraedi",
    "eftirlit",
    "verkefnastjórnun",
    "verkefnastjornun",
    "útboðsgögn",
    "utbodsgogn",
    "engineering",
    "design",
    "consulting",
    "project management",
    "supervision",
  ]);
}

function isCustomerMatchEligibleOpportunity(opp) {
  if (!opp) return false;
  const payload = opp.rawPayload || {};
  const adminStatus = String(payload.admin_report_status || "").toLowerCase();
  if (adminStatus === "include") return true;
  if (isCustomerReportExcludedIntent(opp)) return false;
  const tenderState = String(payload.tender_state || "").toLowerCase();
  if (["tender_awarded", "awarded", "already_tendered"].includes(tenderState)) return false;
  if (isStaleCustomerOpportunity(opp)) return false;
  if (containsTitleNewsIntent(opp.title || "") && !containsConfirmedTenderIntent(getOpportunityQualityText(opp))) return false;
  return true;
}

function isSavedOrWatchedOpportunity(opp) {
  return state.saved.includes(opp.id) ||
    (state.opportunityActions || []).some((action) =>
      action.opportunity_id === opp.id && ["saved", "watched"].includes(action.action_type)
    );
}

function isReportNoiseWithoutTenderIntent(opp) {
  return isVegagerdinNoiseOpportunity(opp) && !hasStrongTenderIntentForReport(opp);
}

function isVegagerdinNoiseOpportunity(opp) {
  if (!/vegagerðin|vegagerdin/i.test(String(opp?.source || ""))) return false;
  return containsAnyNormalizedPhrase(getOpportunityQualityText(opp), [
    "lokun",
    "lokanir",
    "tafir",
    "umferð",
    "umferd",
    "hámarkshraði",
    "hamarkshradi",
    "myndband",
    "fjölskylduganga",
    "fjolskylduganga",
    "kynningarfundur",
  ]);
}

function hasStrongTenderIntentForReport(opp) {
  return containsAnyNormalizedPhrase(getOpportunityQualityText(opp), [
    "útboð",
    "utbod",
    "boðið út",
    "bodid ut",
    "útboð var auglýst",
    "utbod var auglyst",
    "lægstbjóðandi",
    "laegstbjodandi",
    "samningur var",
    "senn í útboð",
    "senn i utbod",
    "áætlað útboð",
    "aaetlad utbod",
  ]);
}

function hasClearConstructionProjectTerms(opp) {
  return containsAnyNormalizedPhrase(getOpportunityQualityText(opp), [
    "framkvæmdir",
    "framkvaemdir",
    "viðhald",
    "vidhald",
    "jarðvinna",
    "jardvinna",
    "gatnagerð",
    "gatnagerd",
    "malbikun",
    "brú",
    "bru",
    "lagnir",
    "bygging",
    "endurbætur",
    "endurbaetur",
  ]);
}

function isTrustedReportSource(opp) {
  const source = normalizeLocationText(opp?.source || "");
  return [
    "vegagerdin",
    "vegagerðin",
    "rikiskaup",
    "ríkiskaup",
    "utbodsvefur",
    "útboðsvefur",
    "ted iceland/nordic",
    "gardabaer municipality",
    "garðabær municipality",
    "akureyri municipality",
    "hafnarfjordur municipality",
    "múlaþing",
    "mulathing",
    "reykjanesbaer",
    "reykjanesbær",
  ].some((trusted) => source.includes(normalizeLocationText(trusted)));
}

function renderReportSummaryCard(label, value) {
  return `
    <div class="report-summary-card">
      <span>${escapeHtml(label)}</span>
      <strong>${value}</strong>
    </div>
  `;
}

function renderReportOpportunitySection(title, description, opportunities) {
  return `
    <section class="report-section">
      <div class="report-section-head">
        <h3>${escapeHtml(title)}</h3>
        <p>${escapeHtml(description)}</p>
      </div>
      ${opportunities.length
        ? opportunities.map(renderReportOpportunityItem).join("")
        : `<div class="report-empty">${escapeHtml(state.language === "is" ? "Engin atriði í þessum hluta." : "No items in this section.")}</div>`}
    </section>
  `;
}

function renderReportOpportunityItem(opp) {
  const valueKnown = Boolean(opp.estimatedValue);
  const risks = getReportRisks(opp);
  const deadlineText = opp.deadline ? formatCustomerReportDate(opp.deadline) : t("notFound");
  const valueText = valueKnown ? formatISK(opp.estimatedValue) : t("notListed");
  const sourceUrl = getSafeExternalUrl(opp.url);
  return `
    <article class="report-item">
      <div class="report-item-top">
        ${renderReportQualityBadge(opp)}
        <span class="${badgeClass(opp.matchLabel)}">${escapeHtml(formatReportMatchLabel(opp.matchLabel))} · ${opp.matchScore}</span>
      </div>
      <h4>${escapeHtml(opp.title)}</h4>
      <div class="report-facts">
        <span><strong>${escapeHtml(t("buyer"))}</strong>${escapeHtml(formatOpportunityBuyer(opp))}</span>
        <span><strong>${escapeHtml(t("source"))}</strong>${escapeHtml(formatReportMetadataValue("source", opp.source))}</span>
        <span><strong>${escapeHtml(t("area"))}</strong>${escapeHtml(formatOpportunityLocation(opp))}</span>
        <span><strong>${escapeHtml(t("deadline"))}</strong><em>${escapeHtml(deadlineText)}</em></span>
        <span><strong>${escapeHtml(t("estimatedValue"))}</strong><em>${escapeHtml(valueText)}</em></span>
      </div>
      <div class="report-detail-grid">
        <div>
          <h5>${escapeHtml(t("whyThisMatters"))}</h5>
          <ul>${(opp.matchReasons.length ? opp.matchReasons : ["Matched to your profile by service, location or keyword overlap."]).slice(0, 4).map((reason) => `<li>${escapeHtml(formatReportReason(reason))}</li>`).join("")}</ul>
        </div>
        <div>
          <h5>${escapeHtml(t("risksToCheck"))}</h5>
          <ul>${risks.slice(0, 5).map((risk) => `<li>${escapeHtml(formatReportRisk(risk))}</li>`).join("")}</ul>
        </div>
      </div>
      ${sourceUrl ? `<a class="report-source-link" href="${escapeHtml(sourceUrl)}" target="_blank" rel="noopener">${escapeHtml(t("openSource"))} <span aria-hidden="true">↗</span></a>` : `<span class="report-source-link is-disabled">${escapeHtml(t("sourceLinkMissing"))}</span>`}
    </article>
  `;
}

function renderReportQualityBadge(opp) {
  const status = normalizeOpportunityQualityStatus(opp.qualityStatus, opp);
  return `<span class="report-quality ${escapeHtml(status)}">${escapeHtml(formatReportQualityLabel(getOpportunityQualityLabel(opp)))}</span>`;
}

function formatReportQualityLabel(label) {
  const map = {
    "Confirmed tender": t("confirmedTender"),
    "Likely opportunity": t("likelyOpportunity"),
    "Early signal": t("earlySignal"),
    "Needs review": t("needsReview"),
    "Tender awarded": t("tenderAwarded"),
    "Tender already announced": t("tenderAlreadyAnnounced"),
    "Upcoming tender": t("upcomingTender"),
    "Project signal": t("projectSignal"),
    "Original language": t("originalLanguage")
  };
  return map[label] || label || "";
}

function formatReportMatchLabel(label) {
  const map = {
    "Strong match": t("strongMatch"),
    "Good match": t("goodMatch"),
    "Possible match": t("possibleMatch"),
    "Weak match": t("weakMatch")
  };
  return map[label] || label || "";
}

function formatReportMetadataValue(type, value) {
  const text = String(value || "").trim();
  if (!text) return type === "buyer" ? t("unknownBuyer") : t("notListed");
  if (type === "buyer") {
    if (isInvalidBuyerName(text)) return t("unknownBuyer");
    if (text.toLowerCase() === "unknown buyer") return t("unknownBuyer");
  }
  if (type === "location" && text.toLowerCase() === "all iceland") return t("allIceland");
  if (type === "source") return text.replace(/\bprocurement\b/gi, t("procurement"));
  return text;
}

function isInvalidBuyerName(value) {
  const normalized = normalizeLocationText(value);
  if (!normalized) return true;
  if ([
    "admin",
    "administrator",
    "ritstjori",
    "editor",
    "noreply",
    "no reply",
    "wordpress",
    "wp admin",
    "user",
    "test"
  ].includes(normalized)) return true;
  if (normalized.includes("noreply")) return true;
  if (/^wp\s*[-_]?\s*\d+$/.test(normalized)) return true;
  return false;
}

function inferBuyerFromSourceName(sourceName) {
  const source = String(sourceName || "").trim();
  const normalized = normalizeLocationText(source);
  if (!normalized) return "";
  if (normalized.includes("borgarbyggd")) return "Borgarbyggð";
  if (normalized.includes("akranes")) return "Akraneskaupstaður";
  if (normalized.includes("faxafloahafnir")) return "Faxaflóahafnir";
  if (normalized.includes("gardabaer")) return "Garðabær";
  if (normalized.includes("reykjanesbaer")) return "Reykjanesbær";
  if (normalized.includes("kopavogur")) return "Kópavogur";
  if (normalized.includes("hafnarfjordur")) return "Hafnarfjarðarbær";
  if (normalized.includes("mosfellsbaer")) return "Mosfellsbær";
  if (normalized.includes("arborg")) return "Sveitarfélagið Árborg";
  if (normalized.includes("fjardabyggd")) return "Fjarðabyggð";
  if (normalized.includes("mulathing")) return "Múlaþing";
  if (normalized.includes("garðabaer")) return "Garðabær";
  if (normalized.includes("rikiskaup") || normalized.includes("utbodsvefur")) return "";
  return "";
}

function getCleanOpportunityBuyer(buyer, sourceName) {
  const text = String(buyer || "").trim();
  if (text && !isInvalidBuyerName(text) && text.toLowerCase() !== "unknown buyer") return text;
  return inferBuyerFromSourceName(sourceName) || "Unknown buyer";
}

function formatOpportunityBuyer(opp) {
  const sourceName = opp?.source || opp?.rawPayload?.source_name || "";
  return formatReportMetadataValue("buyer", getCleanOpportunityBuyer(opp?.buyer, sourceName));
}

function formatOpportunityLocation(opp) {
  const sourceName = opp?.source || opp?.rawPayload?.source_name || "";
  const sourceLocation = inferLocationFromSourceName(sourceName);
  if (sourceLocation) return sourceLocation;
  return formatReportMetadataValue("location", opp?.location);
}

function inferLocationFromSourceName(sourceName) {
  const normalized = normalizeLocationText(sourceName);
  if (!normalized) return "";
  if (normalized.includes("borgarbyggd")) return "Borgarbyggð / Vesturland";
  if (normalized.includes("akranes")) return "Akranes / Vesturland";
  if (normalized.includes("faxafloahafnir")) return "Höfuðborgarsvæðið";
  if (normalized.includes("arborg")) return "Árborg / Suðurland";
  return "";
}

function formatOpportunityModalValue(type, value) {
  const text = formatReportMetadataValue(type, value);
  if (state.language !== "is") return text;
  const normalized = String(text || "").trim().toLowerCase();
  const map = {
    "public procurement": t("publicProcurement"),
    "procurement": t("procurement"),
    "tender": t("tender")
  };
  return map[normalized] || text.replace(/\bpublic procurement\b/gi, t("publicProcurement")).replace(/\btender\b/gi, t("tender"));
}

function formatCustomerLocation(value) {
  const text = String(value || "").trim();
  if (state.language === "is") {
    const map = {
      "Capital Area": "Höfuðborgarsvæðið",
      "South Iceland": "Suðurland",
      "West Iceland": "Vesturland",
      "North Iceland": "Norðurland",
      "East Iceland": "Austurland",
      "Westfjords": "Vestfirðir",
      "All Iceland": t("allIceland"),
      "Remote / Online": "Fjarvinna / netverkefni"
    };
    return map[text] || text;
  }
  return text;
}

function formatReportReason(reason) {
  const text = String(reason || "");
  const servicePrefix = "Mentions your service:";
  const keywordPrefix = "Contains your keyword:";
  if (text.startsWith(servicePrefix)) {
    return t("mentionsService", { value: text.slice(servicePrefix.length).trim() });
  }
  if (text.startsWith(keywordPrefix)) {
    return t("containsKeyword", { value: text.slice(keywordPrefix.length).trim() });
  }

  const map = {
    "National opportunity": t("nationalOpportunity"),
    "Local match": t("localMatch"),
    "Located in your selected region": t("localMatch"),
    "Project value is inside your preferred range": state.language === "is" ? "Áætlað verðmæti er innan óskaðs bils" : "Project value is inside your preferred range",
    "Deadline is coming up soon": state.language === "is" ? "Skilafrestur nálgast" : "Deadline is coming up soon",
    "Matched to your company profile.": state.language === "is" ? "Passar við fyrirtækjaprófílinn." : "Matched to your company profile.",
    "Matched to your profile by service, location or keyword overlap.": state.language === "is" ? "Passar við þjónustu, svæði eða lykilorð í prófílnum." : "Matched to your profile by service, location or keyword overlap."
  };
  return map[text] || text || "";
}

function formatReportRisk(risk) {
  if (state.language !== "is") return risk || "";
  const map = {
    "Deadline not available in feed — verify on source page.": "Skilafrestur fannst ekki í gögnunum — staðfestið á upprunasíðu.",
    "Deadline not available in source — verify page.": "Skilafrestur fannst ekki í heimild - staðfestið á upprunalegri síðu.",
    "No formal tender deadline extracted — verify source article.": "Formlegur skilafrestur fannst ekki - staðfestið í heimildargrein.",
    "Formal tender deadline not found yet — monitor source article.": "Formlegur skilafrestur fannst ekki enn - fylgist með heimildargrein.",
    "Tender appears already announced/awarded — verify source article.": "Útboð virðist þegar auglýst eða afgreitt - staðfestið í heimildargrein.",
    "Estimated value is not listed in the imported data.": "Áætlað verðmæti er ekki gefið upp í innfluttum gögnum.",
    "Open the source page and confirm mandatory requirements.": "Opnið upprunalega heimild og staðfestið skyldukröfur.",
    "Extracted project signal — verify tender timing in the source article.": "Útdregin verkefnavísbending - staðfestið útboðstímasetningu í heimildargrein.",
    "Imported from broad feed — verify that this is a real tender or business opportunity.": "Innflutt úr breiðum fréttastraumi - staðfestið að þetta sé raunverulegt útboð eða viðskiptatækifæri."
  };
  return map[risk] || risk || "";
}

function getReportRisks(opp) {
  const risks = Array.isArray(opp.risks) && opp.risks.length
    ? [...opp.risks]
    : ["Open the source page and confirm mandatory requirements."];
  if (!opp.deadline) risks.unshift(getOpportunityMissingDeadlineRisk(opp));
  if (!opp.estimatedValue) risks.push("Estimated value is not listed in the imported data.");
  if (normalizeOpportunityQualityStatus(opp.qualityStatus, opp) === "needs_review") {
    risks.push(isVegagerdinExtractedProject(opp)
      ? "Extracted project signal — verify tender timing in the source article."
      : "Imported from broad feed — verify that this is a real tender or business opportunity.");
  }
  return [...new Set(risks.map((risk) => String(risk || "").trim()).filter(Boolean))];
}

function generateWeeklyReport(profile, matches) {
  const sections = getReportSections(matches);
  const orderedMatches = [
    ...sections.confirmed,
    ...sections.early,
  ];
  return `${t("reportForCompany", { company: profile.companyName })}
${state.language === "is" ? "Tímabil" : "Date range"}: ${formatReportDateRange(new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10), new Date().toISOString().slice(0, 10))}

${state.language === "is" ? "Samantekt" : "Summary"}:
- ${t("openTenders")}: ${sections.confirmed.length}
- ${t("upcomingOpportunities")}: ${sections.early.length}

${orderedMatches.length ? orderedMatches.map((opp, i) => `${i + 1}. ${opp.title}
${state.language === "is" ? "Gæði" : "Quality"}: ${formatReportQualityLabel(getOpportunityQualityLabel(opp))}
${t("buyer")}: ${formatOpportunityBuyer(opp)}
${t("source")}: ${formatReportMetadataValue("source", opp.source)}
${t("area")}: ${formatOpportunityLocation(opp)}
${t("deadline")}: ${opp.deadline ? formatCustomerReportDate(opp.deadline) : t("notFound")}
${t("estimatedValue")}: ${opp.estimatedValue ? formatISK(opp.estimatedValue) : t("notListed")}
${state.language === "is" ? "Samsvörun" : "Match"}: ${opp.matchScore}/100 (${formatReportMatchLabel(opp.matchLabel)})
${t("whyThisMatters")}:
${(opp.matchReasons.length ? opp.matchReasons : ["Matched to your company profile."]).map((r) => `- ${formatReportReason(r)}`).join("\n")}
${t("risksToCheck")}:
${getReportRisks(opp).map((r) => `- ${formatReportRisk(r)}`).join("\n")}
${state.language === "is" ? "Næsta skref" : "Next step"}:
${opp.url ? `${t("openSource")}: ${opp.url}` : (state.language === "is" ? "Finnið og staðfestið upprunalega heimild áður en brugðist er við." : "Find and verify the original source page before acting.")}
`).join("\n") : (state.language === "is" ? "Engin skýr útboð eða verðfyrirspurnir fundust fyrir þetta tímabil." : "No report-ready matches were found for this period.")}

VerkRadar`;
}

function generateSavedReportText(savedReport, companyName, matches) {
  const periodStart = savedReport.period_start || savedReport.created_at?.slice(0, 10) || new Date().toISOString().slice(0, 10);
  const periodEnd = savedReport.period_end || savedReport.created_at?.slice(0, 10) || new Date().toISOString().slice(0, 10);
  const title = getCustomerReportTitle(savedReport, companyName);
  const sections = getSavedReportSections(matches);
  const orderedMatches = [
    ...sections.confirmed,
    ...sections.early,
    ...sections.review,
  ];

  return `${title}
${state.language === "is" ? "Tímabil" : "Date range"}: ${formatReportDateRange(periodStart, periodEnd)}

${orderedMatches.length ? orderedMatches.map((opp, i) => `${i + 1}. ${opp.title}
${state.language === "is" ? "Gæði" : "Quality"}: ${formatReportQualityLabel(getOpportunityQualityLabel(opp))}
${t("buyer")}: ${formatOpportunityBuyer(opp)}
${t("source")}: ${formatReportMetadataValue("source", opp.source)}
${t("area")}: ${formatOpportunityLocation(opp)}
${t("deadline")}: ${opp.deadline ? formatCustomerReportDate(opp.deadline) : t("notFound")}
${t("estimatedValue")}: ${opp.estimatedValue ? formatISK(opp.estimatedValue) : t("notListed")}
${state.language === "is" ? "Samsvörun" : "Match"}: ${opp.matchScore}/100 (${formatReportMatchLabel(opp.matchLabel)})
${t("whyThisMatters")}:
${(opp.matchReasons.length ? opp.matchReasons : ["Matched to your company profile."]).map((r) => `- ${formatReportReason(r)}`).join("\n")}
${t("risksToCheck")}:
${getReportRisks(opp).map((r) => `- ${formatReportRisk(r)}`).join("\n")}
${opp.url ? `${t("openSource")}: ${opp.url}` : ""}
`).join("\n") : (state.language === "is" ? "Engin atriði eru vistuð í þessu yfirliti." : "No items are saved in this report.")}

${t("reportFooter")}`;
}

async function copyReport() {
  const profile = state.profile || getEmptyProfile();
  const text = generateWeeklyReport(profile, getReportMatches());

  try {
    await navigator.clipboard.writeText(text);
    showToast("Report copied", "success");
  } catch (error) {
    console.error("Failed to copy report:", error);
    showToast("Could not copy report", "error");
  }
}

function downloadReportPdf(reportElementId = "report-preview", reportCompanyName = "") {
  const reportNode = document.getElementById(reportElementId);
  if (!reportNode) {
    showToast("No report available to export", "error");
    return;
  }

  const profile = state.profile || getEmptyProfile();
  const reportClone = reportNode.cloneNode(true);
  reportClone.classList.add("pdf-compact-report");
  reportClone.querySelectorAll("textarea, .report-close-btn").forEach((node) => node.remove());
  const metaBar = reportClone.querySelector(".report-meta-bar");
  if (metaBar) {
    const reportTitle = metaBar.querySelector("div:first-child strong")?.textContent?.trim() || t("reportForCompany", { company: reportCompanyName || profile.companyName || "Company" });
    const companyName = metaBar.querySelector("div:last-child span")?.textContent?.trim() || reportCompanyName || profile.companyName || "Company";
    const reportRange = metaBar.querySelector("div:last-child strong")?.textContent?.trim() || "";
    const logoSrc = document.querySelector(".brand-logo")?.src || document.querySelector('link[rel="icon"]')?.href || "";
    metaBar.innerHTML = "";

    const headerText = document.createElement("div");
    headerText.className = "pdf-report-header-text";
    const generated = document.createElement("span");
    generated.textContent = t("generatedBy");
    const title = document.createElement("strong");
    title.textContent = reportTitle || t("reportForCompany", { company: companyName });
    const range = document.createElement("em");
    range.textContent = reportRange;
    headerText.append(generated, title, range);
    metaBar.appendChild(headerText);

    if (logoSrc) {
      const logo = document.createElement("img");
      logo.className = "pdf-report-logo";
      logo.src = logoSrc;
      logo.alt = "VerkRadar";
      metaBar.appendChild(logo);
    }
  }
  const summaryGrid = reportClone.querySelector(".report-summary-grid");
  if (summaryGrid) {
    summaryGrid.remove();
  }
  const dateRange = reportNode.querySelector(".report-meta-bar div:last-child strong")?.textContent || new Date().toISOString().slice(0, 10);
  const fileName = makeReportPdfFileName(reportCompanyName || profile.companyName || "company", dateRange);
  const stylesheetLinks = Array.from(document.querySelectorAll('link[rel="stylesheet"]'))
    .map((link) => `<link rel="stylesheet" href="${escapeHtml(link.href)}">`)
    .join("");
  const pdfWindow = window.open("", "_blank", "width=1100,height=900");

  if (!pdfWindow) {
    showToast("Allow popups to download the report PDF", "error");
    return;
  }

  pdfWindow.document.open();
  pdfWindow.document.write(`<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(fileName)}</title>
  ${stylesheetLinks}
  <style>
    @page { size: A4; margin: 10mm; }
    html, body { background: #ffffff !important; }
    body { margin: 0; color: #111827; font-size: 10px; }
    .pdf-export-shell { max-width: 100%; margin: 0 auto; }
    .report-preview { border: 0 !important; border-radius: 0 !important; box-shadow: none !important; margin: 0 !important; max-width: none !important; }
    .report-meta-bar {
      align-items: flex-start !important;
      background: #ffffff !important;
      border-bottom: 1px solid #d1d5db !important;
      color: #374151 !important;
      display: flex !important;
      justify-content: flex-start !important;
      gap: 12px !important;
      min-height: 39px !important;
      padding: 0 58px 5px 0 !important;
      position: relative !important;
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
    }
    .pdf-report-header-text {
      display: grid !important;
      gap: 2px !important;
      min-width: 0 !important;
      text-align: left !important;
    }
    .report-meta-bar span { font-size: 8px !important; }
    .report-meta-bar strong { color: #111827 !important; }
    .report-meta-bar strong { font-size: 10px !important; line-height: 1.15 !important; }
    .report-meta-bar em {
      color: #64748b !important;
      font-size: 8px !important;
      font-style: normal !important;
      font-weight: 700 !important;
    }
    .pdf-report-logo {
      display: block !important;
      height: 38px !important;
      max-height: 38px !important;
      object-fit: contain !important;
      opacity: 1 !important;
      position: absolute !important;
      right: 0 !important;
      top: 0 !important;
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
      width: auto !important;
    }
    .report-body { padding: 0 !important; }
    .report-cover { display: none !important; }
    .pdf-compact-summary {
      border-bottom: 1px solid #e5e7eb !important;
      color: #334155 !important;
      font-size: 9px !important;
      font-weight: 800 !important;
      margin: 5px 0 7px !important;
      padding: 0 0 5px !important;
    }
    .report-summary-grid { display: none !important; }
    .report-section { margin: 6px 0 0 !important; }
    .report-section-head {
      border-bottom: 0 !important;
      box-shadow: none !important;
      margin-bottom: 3px !important;
      padding-bottom: 2px !important;
    }
    .report-section-head::after { display: none !important; }
    .report-section-head h3 { font-size: 11px !important; margin: 0 !important; }
    .report-section-head p { display: none !important; }
    .report-empty { display: none !important; }
    .report-item {
      break-inside: avoid !important;
      border-radius: 8px !important;
      margin: 0 0 5px !important;
      padding: 7px !important;
    }
    .report-item-top { margin-bottom: 3px !important; }
    .report-quality,
    .report-item .badge {
      font-size: 8px !important;
      padding: 3px 6px !important;
    }
    .report-item h4 {
      font-size: 11px !important;
      line-height: 1.16 !important;
      margin: 0 0 4px !important;
    }
    .report-facts {
      gap: 3px !important;
      grid-template-columns: repeat(5, minmax(0, 1fr)) !important;
      margin: 0 0 4px !important;
    }
    .report-facts span {
      border-radius: 5px !important;
      font-size: 8px !important;
      min-height: auto !important;
      padding: 4px !important;
    }
    .report-facts strong { font-size: 6px !important; margin-bottom: 1px !important; }
    .report-facts em { font-size: 8px !important; }
    .report-detail-grid {
      gap: 5px !important;
      grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
      margin-top: 4px !important;
    }
    .report-detail-grid h5 {
      display: inline !important;
      font-size: 7px !important;
      margin: 0 3px 0 0 !important;
    }
    .report-detail-grid h5::after { content: ":"; }
    .report-detail-grid ul {
      display: inline !important;
      margin: 0 !important;
      padding: 0 !important;
    }
    .report-detail-grid li {
      background: transparent !important;
      border: 0 !important;
      border-radius: 0 !important;
      color: #334155 !important;
      display: inline !important;
      font-size: 8px !important;
      line-height: 1.25 !important;
      padding: 0 !important;
    }
    .report-detail-grid li + li::before { content: "; "; }
    .report-detail-grid > div:last-child li { color: #7c2d12 !important; }
    .report-source-link {
      border-radius: 6px !important;
      break-inside: avoid;
      display: inline-flex !important;
      font-size: 8px !important;
      margin-top: 5px !important;
      padding: 4px 7px !important;
    }
    .report-footer-note {
      border-top: 1px solid #d1d5db !important;
      font-size: 8px !important;
      margin-top: 6px !important;
      padding-top: 4px !important;
    }
    .hidden-textarea, .report-close-btn { display: none !important; }
  </style>
</head>
<body>
  <main class="pdf-export-shell">
    ${reportClone.outerHTML}
  </main>
  <script>
    window.addEventListener("load", () => {
      document.title = ${JSON.stringify(fileName)};
      setTimeout(() => {
        window.focus();
        window.print();
      }, 250);
    });
  <\/script>
</body>
</html>`);
  pdfWindow.document.close();
}

function downloadAdminReportPdf() {
  const report = state.selectedAdminReport?.id === state.selectedAdminReportId
    ? state.selectedAdminReport
    : (state.adminReports || []).find((item) => item.id === state.selectedAdminReportId);
  downloadReportPdf("admin-report-preview", report?.companies?.company_name || "Company");
}

function makeReportPdfFileName(companyName, dateRange) {
  const company = slugifyFilePart(companyName) || "company";
  const range = slugifyFilePart(String(dateRange || "").replace(/\s+to\s+/i, "-")) || new Date().toISOString().slice(0, 10);
  return `VerkRadar-report-${company}-${range}.pdf`;
}

function slugifyFilePart(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/gi, "-")
    .replace(/^-+|-+$/g, "")
    .toLowerCase();
}

function renderPricing() {
  return renderShell(`
    <section class="page-head">
      <p class="eyebrow">Pricing</p>
      <h1>Simple pricing for the MVP</h1>
      <p>Start manual-assisted, then automate as the product grows.</p>
    </section>

    <section class="pricing-grid">
      ${pricingCard("Starter", "9.900 kr", ["Weekly report", "Up to 5 matched opportunities/week", "Basic matching", "Deadline reminders", "1 company profile"])}
      ${pricingCard("Growth", "19.900 kr", ["Everything in Starter", "More sources", "AI-style summaries", "Strong/Good/Possible match labels", "Saved opportunities", "Report archive"], true)}
      ${pricingCard("Pro", "39.900 kr", ["Everything in Growth", "Tender document summaries", "Requirements checklist", "Risk warnings", "Bid preparation checklist", "Priority support"])}
    </section>
  `);
}

function pricingCard(name, price, items, highlighted = false) {
  return `
    <div class="pricing-card ${highlighted ? "highlighted" : ""}">
      ${highlighted ? `<span class="popular">Best for most businesses</span>` : ""}
      <h2>${name}</h2>
      <p class="price">${price}<span>/month</span></p>
      <ul class="check-list">
        ${items.map((i) => `<li>${i}</li>`).join("")}
      </ul>
      <button class="btn pricing-cta ${highlighted ? "btn-primary" : "btn-secondary"}" data-action="go" data-href="/onboarding">Create demo profile</button>
    </div>
  `;
}

function renderSettings() {
  if (!state.user) return requireAuthPage();

  if (state.profileLoading && !state.profile && !state.profileDraft) {
    return renderShell(`
      <section class="empty-state">
        <div class="loader-mark" aria-label="${escapeHtml(state.language === "is" ? "Hleð fyrirtækjaprófíl" : "Loading company profile")}"></div>
        <h1>${escapeHtml(state.language === "is" ? "Hleð fyrirtækjaprófíl..." : "Loading company profile...")}</h1>
        <p>${escapeHtml(state.language === "is" ? "Sæki vistaðan fyrirtækjaprófíl." : "Checking your saved company profile.")}</p>
        <button class="btn btn-secondary" type="button" data-action="retry-settings-profile">${escapeHtml(state.language === "is" ? "Reyna aftur" : "Retry")}</button>
      </section>
    `);
  }

  if (state.profileLoadError && !state.profile && !state.profileDraft) {
    return renderShell(`
      <section class="empty-state">
        <h1>${escapeHtml(state.language === "is" ? "Gat ekki hlaðið stillingum" : "Could not load Settings")}</h1>
        <p>${escapeHtml(state.profileLoadError)}</p>
        <button class="btn btn-primary" type="button" data-action="retry-settings-profile">${escapeHtml(state.language === "is" ? "Reyna aftur" : "Retry")}</button>
      </section>
    `);
  }

  if (!state.profile && !state.profileDraft) {
    return requireProfilePage(
      state.language === "is" ? "Stofnaðu prófíl fyrst" : "Create a profile first",
      state.language === "is" ? "Stillingar eru tiltækar eftir að fyrirtækjaprófíll hefur verið stofnaður." : "Settings are available after you create a company profile."
    );
  }

  return renderShell(`
    <section class="page-head">
      <p class="eyebrow">${escapeHtml(t("navSettings"))}</p>
      <h1>${escapeHtml(state.language === "is" ? "Breyta prófíl" : "Edit profile")}</h1>
      <p>${escapeHtml(state.language === "is" ? "Uppfærið fyrirtækjaprófíl og samsvörunarstillingar." : "Update your company profile and matching preferences.")}</p>
      ${state.profileDraftDirty ? `<div class="form-message warning">${escapeHtml(state.language === "is" ? "Óvistaðar breytingar" : "Unsaved changes")}</div>` : ""}
      ${state.profileLoadError ? `
        <div class="form-message error">
          ${escapeHtml(state.profileLoadError)}
          <button class="btn btn-secondary" type="button" data-action="retry-settings-profile">${escapeHtml(state.language === "is" ? "Reyna aftur" : "Retry")}</button>
        </div>
      ` : ""}
    </section>
    ${renderProfileForm()}
    ${canShowDemoReset() ? `<section class="danger-zone">
      <h2>Reset demo</h2>
      <p>This clears localStorage profile, saved and ignored opportunities.</p>
      <button class="btn btn-ghost" data-action="reset">Reset all demo data</button>
    </section>` : ""}
  `);
}

function canShowDemoReset() {
  return Boolean(state.isAdmin || ["localhost", "127.0.0.1", ""].includes(window.location.hostname));
}

function renderIgnored() {
  return state.ignored.map((id) => {
    const opp = state.opportunities.find((o) => o.id === id);
    return opp ? `<button data-action="unignore" data-id="${id}">Unignore ${opp.title}</button>` : "";
  }).join("");
}

function renderOpportunitySummaryForCopy() {}

function generateOpportunitySummary(opp) {
  return `${opp.title}
${t("buyer")}: ${formatOpportunityBuyer(opp)}
${t("deadline")}: ${formatOpportunityDeadlineForReport(opp)}
${state.language === "is" ? "Samsvörun" : "Match"}: ${opp.matchScore}/100 (${formatReportMatchLabel(opp.matchLabel)})
${t("whyThisMatters")}:
${opp.matchReasons.map((r) => `- ${formatReportReason(r)}`).join("\n")}
${state.language === "is" ? "Næsta skref" : "Next step"}: ${state.language === "is" ? "Opnið upprunalega heimild og staðfestið kröfur." : "Open source documents and confirm requirements."}`;
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeJs(value) {
  return String(value ?? "")
    .replaceAll("\\", "\\\\")
    .replaceAll("'", "\\'")
    .replaceAll("\n", "\\n");
}

function capitalize(value) {
  return String(value || "").charAt(0).toUpperCase() + String(value || "").slice(1);
}

bootApp();
loadOpportunities();
