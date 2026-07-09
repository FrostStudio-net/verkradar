(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={profile:`verkradar_profile`,saved:`verkradar_saved_opportunities`,ignored:`verkradar_ignored_opportunities`,language:`verkradar_language`,selectedPlan:`verkradar_selected_plan`},t={is:{navDashboard:`Mælaborð`,navReport:`Yfirlit`,navPricing:`Verðskrá`,navSettings:`Stillingar`,navHowItWorks:`Hvernig virkar þetta`,navSampleReport:`Sýnishorn`,login:`Innskráning`,logout:`Skrá út`,getStarted:`Byrja`,setupCompany:`Setja upp fyrirtæki`,createProfile:`Stofna prófíl`,companyProfile:`Fyrirtækjaprófíll`,noCompanyProfile:`Ekkert fyrirtæki`,openMenu:`Opna valmynd`,closeMenu:`Loka valmynd`,privacyPolicy:`Persónuvernd`,termsOfService:`Skilmálar`,dataSources:`Gagnaheimildir`,cookies:`Vafrakökur`,security:`Öryggi`,contact:`Hafa samband`,footerText:`Vöktun útboða og viðskiptatækifæra fyrir fyrirtæki. VerkRadar hjálpar ykkur að finna og yfirfara opinber tækifæri, en frumgögn eru alltaf endanleg heimild.`,loadingLabel:`Hleð VerkRadar`,heroEyebrow:`Útboðsgreind fyrir verktaka og þjónustufyrirtæki`,heroTitle:`Finnið verðmæt útboð áður en skilafresturinn rennur út.`,heroText:`VerkRadar vaktar opinberar heimildir og skilar stuttu yfirliti yfir verkefni sem passa við ykkar verkflokka og svæði.`,createFreeDemoProfile:`Fá ókeypis prufu-yfirlit`,viewSampleReport:`Skoða sýnishorn`,proofStrong:`Fyrir verktaka, iðnfyrirtæki og þjónustuaðila.`,proofText:`Vöktun á opinberum heimildum, sveitarfélögum og útboðsvefjum - sett fram sem forgangsraðað yfirlit.`,bestOpenMatch:`Stutt yfirlit`,tender:`Útboð`,deadlineRisk:`Rennur út fljótlega`,daysLeft:`{count} dagar eftir`,problemEyebrow:`Vandinn`,problemTitle:`Útboð tapast oft áður en tilboðsgerðin byrjar.`,problemOneTitle:`Útboð birtast á mörgum mismunandi stöðum.`,problemOneText:`Sveitarfélög, stofnanir og útboðsvefir birta tækifæri á ólíkum síðum og í ólíkum sniðum.`,problemTwoTitle:`Skilafrestir geta verið stuttir.`,problemTwoText:`Það tekur tíma að finna hvað passar við ykkar verkflokka, svæði og stærð verkefna.`,targetEyebrow:`Fyrir hverja?`,targetTitle:`Byggt fyrir íslensk fyrirtæki sem þurfa að finna rétt verkefni fyrr.`,targetText:`VerkRadar hentar fyrirtækjum sem vilja vakta útboð, verðfyrirspurnir og verkefnavísbendingar án þess að opna sömu vefi handvirkt á hverjum degi.`,solutionEyebrow:`Lausnin`,solutionTitle:`Eitt skýrt yfirlit í stað dreifðrar leitar.`,solutionText:`VerkRadar breytir útboðshávaða í forgangsraðaðan lista yfir tækifæri sem fyrirtækið ætti að skoða.`,createProfileStep:`1. Stofnið prófíl`,createProfileStepText:`Segið VerkRadar hvaða þjónustu, svæði, lykilorð og verkefnastærðir henta ykkur.`,matchProjectsStep:`2. Samsvara verkefnum`,matchProjectsStepText:`Kerfið metur hvert tækifæri gagnvart fyrirtækjaprófílnum.`,getReportStep:`3. Fáið yfirlit`,getReportStepText:`Fáið skýrt yfirlit með frestum, ástæðum samsvörunar og næstu skrefum.`,sampleReportEyebrow:`Sýnishorn`,sampleReportTitle:`Stuttlisti sem sýnir hvað er þess virði að skoða.`,sampleReportText:`Sýnishornið sýnir hvernig VerkRadar raðar útboðum og verkefnum eftir þjónustu, svæði, fresti og ástæðum samsvörunar.`,sourceDisclaimer:`VerkRadar hjálpar til við að forgangsraða tækifærum. Upprunaleg útboðsgögn eru alltaf endanleg heimild.`,pricingEyebrow:`VERÐSKRÁ`,pricingHeadline:`Verðskrá sem hentar öllum stærðum`,pricingSubtitle:`Byrjið með skýru yfirliti og bætið við sjálfvirkni eftir þörfum.`,pricingStarter:`Grunnur`,pricingGrowth:`Vöxtur`,pricingPro:`Sérsniðið`,pricingMonth:`/mán.`,pricingBadge:`Hentar flestum fyrirtækjum`,pricingCta:`Fá prufuaðgang`,pricingTrialNoCard:`Engin greiðslukort krafist í prufu.`,pricingWeeklyReport:`Vikulegt yfirlit`,pricingFiveMatches:`Allt að 5 samsvaranir á viku`,pricingBasicMatching:`Grunnsamsvörun`,pricingDeadlineReminders:`Áminningar um skilafresti`,pricingOneProfile:`1 fyrirtækjaprófíll`,pricingEverythingStarter:`Allt í Grunni`,pricingMoreSources:`Fleiri heimildir`,pricingSummaries:`Stutt samantekt á tækifærum`,pricingLabels:`Sterk/góð/möguleg samsvörun`,pricingSaved:`Vistuð tækifæri`,pricingArchive:`Yfirlitssafn`,pricingEverythingGrowth:`Allt í Vexti`,pricingDocumentSummaries:`Samantektir útboðsgagna`,pricingRequirements:`Gátlisti fyrir kröfur`,pricingRiskWarnings:`Áhættuvísbendingar`,pricingBidChecklist:`Gátlisti fyrir tilboðsgerð`,pricingPrioritySupport:`Forgangsþjónusta`,tryDemoTitle:`Prófið sýnimælaborðið.`,tryDemoText:`Hlaðið sýnifyrirtæki og sjáið hvernig samsvörunin virkar.`,loadDemoCompany:`Hlaða sýnifyrirtæki`,authLoginTitle:`Skrá inn í VerkRadar`,authLoginSubtitle:`Fáið aðgang að mælaborði, vistuðum tækifærum og vikuyfirlitum.`,email:`Netfang`,password:`Lykilorð`,forgotPassword:`Gleymt lykilorð?`,loggingIn:`Skrái inn...`,newToVerkRadar:`Ný hjá VerkRadar?`,createAccount:`Stofna aðgang`,createAccountTitle:`Stofna VerkRadar aðgang`,createAccountSubtitle:`Byrjið á að stofna aðgang. Síðan stofnið þið fyrirtækjaprófíl.`,authRequiredTitle:`Skráðu þig inn til að halda áfram`,authRequiredText:`Þessi síða er aðgengileg eftir innskráningu.`,alreadyLoggedInTitle:`Þú ert þegar skráð(ur) inn`,alreadyLoggedInText:`Beini þér á næsta skref.`,signupCreatedConfirm:`Aðgangur stofnaður. Athugaðu tölvupóstinn þinn til að staðfesta aðganginn.`,signupExistingAccount:`Þetta netfang er þegar með aðgang. Skráðu þig inn eða endurstilltu lykilorð.`,signupNeutralNextSteps:`Ef aðgangur er til fyrir þetta netfang færðu tölvupóst með næstu skrefum. Annars hefur nýr aðgangur verið stofnaður.`,emailOrPasswordIncorrect:`Netfang eða lykilorð er rangt.`,confirmEmailBeforeLogin:`Staðfestu netfangið þitt áður en þú skráir þig inn.`,passwordTooShort:`Lykilorð þarf að vera að minnsta kosti 6 stafir.`,tooManyAttempts:`Of margar tilraunir. Bíddu aðeins og reyndu aftur.`,couldNotCreateAccount:`Gat ekki stofnað aðgang. Athugaðu netfang og lykilorð.`,couldNotLogin:`Gat ekki skráð þig inn. Reyndu aftur.`,creating:`Stofna...`,alreadyHaveAccount:`Ertu þegar með aðgang?`,passwordReset:`Endurstilla lykilorð`,resetPasswordTitle:`Endurstilla lykilorð`,resetPasswordSubtitle:`Sláið inn netfang og VerkRadar sendir öruggan hlekk ef aðgangur er til.`,sending:`Sendi...`,sendResetLink:`Senda hlekk`,rememberedPassword:`Manstu lykilorðið?`,backToLogin:`Til baka í innskráningu`,newPassword:`Nýtt lykilorð`,chooseNewPassword:`Veldu nýtt lykilorð`,resetPasswordHelp:`Settu nýtt lykilorð fyrir VerkRadar aðganginn. Ef hlekkurinn er útrunninn skaltu biðja um nýjan.`,confirmNewPassword:`Staðfesta nýtt lykilorð`,updating:`Uppfæri...`,updatePassword:`Uppfæra lykilorð`,needNewLink:`Þarftu nýjan hlekk?`,sendAnotherResetLink:`Senda annan hlekk`,onboarding:`UPPSETNING`,onboardingTitle:`Settu upp fyrirtækið`,onboardingText:`Segðu okkur hvað fyrirtækið gerir svo VerkRadar geti fundið viðeigandi tækifæri.`,companyBasics:`1. Grunnupplýsingar`,companyName:`Fyrirtækisnafn`,kennitala:`Kennitala`,contactEmail:`Tengiliðanetfang`,billingEmail:`Netfang fyrir reikninga`,contactName:`Nafn tengiliðar`,phone:`Sími`,address:`Heimilisfang`,website:`Vefsíða`,industry:`Atvinnugrein`,selectIndustry:`Veldu atvinnugrein`,selectedPlan:`Valin áskrift`,plan_basic:`Grunnur`,plan_pro:`Pro`,plan_priority:`Forgangur`,servicesAndKeywords:`2. Þjónustur og leitarorð`,servicesHint:`Bætið við þjónustu sem þið bjóðið raunverulega upp á. Veldu mikilvægustu atriðin fyrst.`,servicesLabel:`Þjónustur`,servicesHelper:`Skráið þjónustuna sem fyrirtækið selur. Nákvæmari þjónusta gefur betri samsvaranir.`,extraWords:`Leitarorð`,includeKeywordsHelper:`Notið orð sem birtast oft í tækifærum sem þið viljið fá.`,excludeWords:`Orð sem ættu að lækka eða fjarlægja slæmar samsvaranir.`,excludeKeywordsHelper:`Orð sem ættu að lækka eða fjarlægja slæmar samsvaranir.`,suggestedServicesFor:`Tillögur að þjónustu fyrir {industry}`,suggestedKeywordsFor:`Tillögur að leitarorðum fyrir {industry}`,selectIndustryForServices:`Veljið atvinnugrein til að sjá þjónustutillögur`,selectIndustryForKeywords:`Veljið atvinnugrein til að sjá leitarorðatillögur`,locationsTitle:`3. Svæði`,locationsHint:`Notið Allt landið fyrir landsdekkandi útboð. Notið ferðastillingar ef þið getið boðið utan heimasvæðis fyrir rétt verkefni.`,baseLocation:`Heimasvæði`,baseLocationPlaceholder:`Dæmi: Austurland`,serviceAreas:`Þjónustusvæði, aðskilin með kommu`,serviceAreasPlaceholder:`Dæmi: Austurland, Allt landið`,travelScope:`Ferðir og umfang`,willingToTravel:`Tilbúin að ferðast fyrir rétt verkefni`,includeNational:`Sýna landsdekkandi tækifæri`,includeRemote:`Sýna fjarvinnu / netverkefni`,minimumTravelValue:`Lágmarksverðmæti fyrir ferðalög`,projectSize:`4. Stillingar`,minimumValue:`Lágmarksverðmæti`,maximumValue:`Hámarksverðmæti`,showUnknownValue:`Sýna tækifæri þó verðmæti vanti`,reportPreferences:`Yfirlitsstillingar`,frequency:`Tíðni`,weekly:`Vikulega`,daily:`Daglega`,reportDay:`Dagur yfirlits`,deadlineReminders:`Áminningar um skilafresti`,includeLowConfidence:`Sýna óvissar samsvaranir`,saveProfile:`Vista prófíl`,saving:`Vista...`,saved:`Vistað`,dashboard:`Mælaborð`,welcomeCompany:`Velkomin, {company}`,dashboardIntro:`Forgangsraðaðar tækifærasamsvaranir út frá þjónustu, svæðum og leitarorðum. {refresh}`,matchesLastRefreshed:`Síðast uppfært {time}.`,matchesAutoRefresh:`Samsvaranir uppfærast sjálfkrafa eftir vistun prófíls.`,refreshMatches:`Uppfæra samsvaranir`,refreshing:`Uppfæri...`,viewWeeklyReport:`Skoða yfirlit`,strongMatches:`Sterkar samsvaranir`,closingSoon:`Rennur út fljótlega`,savedLabel:`Vistað`,totalPotentialValue:`Áætlað heildarverðmæti`,searchOpportunities:`Leita í tækifærum...`,savedOnly:`Aðeins vistað`,improveProfile:`Bæta prófíl`,includeNationalOpportunities:`Sýna landsdekkandi tækifæri`,showAllStoredMatches:`Sýna allar samsvaranir`,inspectAllOpportunities:`Skoða öll tækifæri`,details:`Nánar`,save:`Vista`,ignore:`Hunsa`,originalLanguage:`Upprunalegt tungumál`,extractedProject:`Útdregið verkefni`,reportTitle:`Útboðs- og verkefnayfirlit`,setupCompanyFirst:`Settu fyrst upp fyrirtækið`,reportNeedsProfile:`Yfirlitið þarf fyrirtækjaprófíl til að geta fundið viðeigandi tækifæri.`,dashboardNeedsProfile:`Mælaborðið þarf fyrirtækjaprófíl til að reikna viðeigandi samsvaranir.`,weeklyReport:`Yfirlit`,saveReport:`Vista yfirlit`,savingReport:`Vista...`,downloadPdf:`Sækja PDF`,copyReport:`Afrita yfirlit`,reportArchive:`Yfirlitssafn`,savedReports:`Vistuð yfirlit`,loadingSavedReports:`Hleð vistuð yfirlit...`,noSavedReports:`Engin vistuð yfirlit enn.`,viewReport:`Skoða yfirlit`,closeReport:`Loka yfirliti`,generatedBy:`Útbúið af VerkRadar`,reportForCompany:`Útboðs- og verkefnayfirlit fyrir {company}`,openTenders:`Opin útboð / verðfyrirspurnir`,upcomingOpportunities:`Möguleg væntanleg tækifæri`,openTendersDescription:`Skýr útboðs- eða verðfyrirspurnarmerki. Yfirfarið frumgögn áður en brugðist er við.`,upcomingDescription:`Væntanleg útboðs- eða verkefnamerki með skýrum vísbendingum.`,reportFooter:`VerkRadar hjálpar til við að forgangsraða yfirferð opinberra tækifæra. Staðfestið alltaf útboðsgögn, skilafresti, kröfur og hæfi á upprunalegri heimild áður en brugðist er við.`,buyer:`Kaupandi`,source:`Heimild`,description:`Lýsing`,requirements:`Kröfur`,noSpecificRequirements:`Engar sérstakar kröfur skráðar.`,noDescription:`Engin lýsing tiltæk.`,noMatchReasons:`Engar ástæður samsvörunar tiltækar.`,matchReasons:`Ástæður samsvörunar`,opportunityInfo:`Upplýsingar um tækifæri`,extraction:`Útdráttur`,sourceArticle:`Heimildargrein`,parentArticle:`Upprunagrein`,openSourceArticle:`Opna heimildargrein`,extractedRegion:`Útdregið svæði`,projectNumber:`Verknúmer`,tenderState:`Staða útboðs`,quality:`Gæði`,category:`Flokkur`,type:`Tegund`,published:`Birt`,cpv:`CPV`,recommendedNextSteps:`Ráðlögð næstu skref`,noMajorRisks:`Engar stórar áhættur greindar í þessum gögnum.`,openSourceAndConfirm:`Opnið upprunalega heimild og staðfestið hæfi.`,removeFromSaved:`Fjarlægja úr vistuðum`,saveOpportunity:`Vista tækifæri`,markNotRelevant:`Merkja sem ekki viðeigandi`,publicProcurement:`Opinbert útboð`,area:`Svæði`,deadline:`Skilafrestur`,estimatedValue:`Áætlað verðmæti`,notFound:`Fannst ekki`,notListed:`Ekki gefið upp`,unknownBuyer:`Óþekktur kaupandi`,allIceland:`Allt landið`,whyThisMatters:`Af hverju þetta gæti skipt máli`,risksToCheck:`Atriði til að staðfesta`,openSource:`Opna heimild`,sourceLinkMissing:`Heimildartengil vantar`,strongMatch:`Sterk samsvörun`,goodMatch:`Góð samsvörun`,possibleMatch:`Möguleg samsvörun`,weakMatch:`Veik samsvörun`,confirmedTender:`Staðfest útboð`,likelyOpportunity:`Líklegt tækifæri`,earlySignal:`Væntanlegt tækifæri`,needsReview:`Þarfnast staðfestingar`,tenderAwarded:`Útboði lokið / samið`,tenderAlreadyAnnounced:`Útboð þegar auglýst`,upcomingTender:`Væntanlegt útboð`,projectSignal:`Verkefnavísbending`,nationalOpportunity:`Landsdekkandi tækifæri`,localMatch:`Staðbundin samsvörun`,mentionsService:`Nefnir þjónustu ykkar: {value}`,containsKeyword:`Inniheldur leitarorð: {value}`,procurement:`innkaup`},en:{navDashboard:`Dashboard`,navReport:`Report`,navPricing:`Pricing`,navSettings:`Settings`,navHowItWorks:`How it works`,navSampleReport:`Sample report`,login:`Login`,logout:`Logout`,getStarted:`Get started`,setupCompany:`Set up company`,createProfile:`Create profile`,companyProfile:`Company profile`,noCompanyProfile:`No company`,openMenu:`Open menu`,closeMenu:`Close menu`,privacyPolicy:`Privacy`,termsOfService:`Terms`,dataSources:`Data sources`,cookies:`Cookies`,security:`Security`,contact:`Contact`,footerText:`Tender and opportunity monitoring for businesses. VerkRadar helps you find and review public opportunities, but source documents remain the authority.`,loadingLabel:`Loading VerkRadar`,heroEyebrow:`Tender intelligence for working contractors`,heroTitle:`Stop losing valuable jobs to tabs you never opened.`,heroText:`VerkRadar monitors public sources and returns a short project shortlist matched to your trades and service areas.`,createFreeDemoProfile:`Get a free trial report`,viewSampleReport:`View sample report`,proofStrong:`Contractors find relevant opportunities faster.`,proofText:`Top matches often include tenders outside the main databases.`,bestOpenMatch:`Shortlist`,tender:`Tender`,deadlineRisk:`Deadline risk`,daysLeft:`{count} days left`,problemEyebrow:`The problem`,problemTitle:`Opportunities are often lost before bidding starts.`,problemOneTitle:`Deadlines show up after your crew is already booked.`,problemOneText:`A short response window becomes a scramble, or a valuable contract never gets priced.`,problemTwoTitle:`The search takes longer than the go/no-go call.`,problemTwoText:`Owners spend hours opening low-fit tenders instead of seeing value, location, requirements and match reasons in one view.`,targetEyebrow:`Who it is for`,targetTitle:`Built for Icelandic companies that need to find the right jobs earlier.`,targetText:`VerkRadar is for teams that want to monitor tenders, quote requests and project signals without checking the same websites manually every day.`,solutionEyebrow:`The solution`,solutionTitle:`One clear report instead of scattered searching.`,solutionText:`VerkRadar turns tender noise into a ranked list of opportunities your business should actually check.`,createProfileStep:`1. Create profile`,createProfileStepText:`Tell VerkRadar your services, locations, keywords and project size.`,matchProjectsStep:`2. Match projects`,matchProjectsStepText:`The system scores each opportunity against your business profile.`,getReportStep:`3. Get report`,getReportStepText:`Receive a clear weekly report with deadlines and next steps.`,sampleReportEyebrow:`Sample report`,sampleReportTitle:`A shortlist that shows what is worth checking.`,sampleReportText:`Preview how VerkRadar ranks tenders and projects by services, region, deadline and match reasons.`,sourceDisclaimer:`VerkRadar helps prioritize opportunity review. Original tender documents are always the final authority.`,pricingEyebrow:`PRICING`,pricingHeadline:`Pricing built for teams of all sizes`,pricingSubtitle:`Start with a clear report and add automation as needed.`,pricingStarter:`Starter`,pricingGrowth:`Growth`,pricingPro:`Custom`,pricingMonth:`/month`,pricingBadge:`Best for most businesses`,pricingCta:`Get trial access`,pricingTrialNoCard:`No credit card required for the trial.`,pricingWeeklyReport:`Weekly report`,pricingFiveMatches:`Up to 5 matched opportunities/week`,pricingBasicMatching:`Basic matching`,pricingDeadlineReminders:`Deadline reminders`,pricingOneProfile:`1 company profile`,pricingEverythingStarter:`Everything in Starter`,pricingMoreSources:`More sources`,pricingSummaries:`Opportunity summaries`,pricingLabels:`Strong/Good/Possible match labels`,pricingSaved:`Saved opportunities`,pricingArchive:`Report archive`,pricingEverythingGrowth:`Everything in Growth`,pricingDocumentSummaries:`Tender document summaries`,pricingRequirements:`Requirements checklist`,pricingRiskWarnings:`Risk warnings`,pricingBidChecklist:`Bid preparation checklist`,pricingPrioritySupport:`Priority support`,tryDemoTitle:`Try the demo dashboard now.`,tryDemoText:`Load a sample company profile and see how the matching works.`,loadDemoCompany:`Load demo company`,authLoginTitle:`Login to VerkRadar`,authLoginSubtitle:`Access your company dashboard, saved opportunities and weekly reports.`,email:`Email`,password:`Password`,forgotPassword:`Forgot password?`,loggingIn:`Logging in...`,newToVerkRadar:`New to VerkRadar?`,createAccount:`Create account`,createAccountTitle:`Create your VerkRadar account`,createAccountSubtitle:`Start by creating an account. Then you’ll create your company profile.`,authRequiredTitle:`Log in to continue`,authRequiredText:`This page is available after you sign in.`,alreadyLoggedInTitle:`Already logged in`,alreadyLoggedInText:`Redirecting you to the next step.`,signupCreatedConfirm:`Account created. Check your email to confirm your account.`,signupExistingAccount:`This email already has an account. Log in or reset your password.`,signupNeutralNextSteps:`If an account exists for this email, you’ll receive an email with next steps. Otherwise, a new account has been created.`,emailOrPasswordIncorrect:`Email or password is incorrect.`,confirmEmailBeforeLogin:`Please confirm your email before logging in.`,passwordTooShort:`Password must be at least 6 characters.`,tooManyAttempts:`Too many attempts. Please wait a moment and try again.`,couldNotCreateAccount:`Could not create account. Please check your email and password.`,couldNotLogin:`Could not log in. Please try again.`,creating:`Creating...`,alreadyHaveAccount:`Already have an account?`,passwordReset:`Password reset`,resetPasswordTitle:`Reset your password`,resetPasswordSubtitle:`Enter your email and VerkRadar will send a secure reset link if the account exists.`,sending:`Sending...`,sendResetLink:`Send reset link`,rememberedPassword:`Remembered your password?`,backToLogin:`Back to login`,newPassword:`New password`,chooseNewPassword:`Choose a new password`,resetPasswordHelp:`Set a new password for your VerkRadar account. If the link has expired, request a new reset link.`,confirmNewPassword:`Confirm new password`,updating:`Updating...`,updatePassword:`Update password`,needNewLink:`Need a new link?`,sendAnotherResetLink:`Send another reset link`,onboarding:`SETUP`,onboardingTitle:`Set up your company`,onboardingText:`Tell us what your company does so VerkRadar can find relevant opportunities.`,companyBasics:`1. Basic information`,companyName:`Company name`,kennitala:`Kennitala`,contactEmail:`Contact email`,billingEmail:`Billing email`,contactName:`Contact name`,phone:`Phone`,address:`Address`,website:`Website`,industry:`Industry`,selectIndustry:`Select industry`,selectedPlan:`Selected plan`,plan_basic:`Basic`,plan_pro:`Pro`,plan_priority:`Priority`,servicesAndKeywords:`2. Services and keywords`,servicesHint:`Add services you actually provide. Start with the most important ones.`,servicesLabel:`Services`,servicesHelper:`Add the services your company actually sells. More specific services create better matches.`,extraWords:`Keywords`,includeKeywordsHelper:`Use words that often appear in opportunities you want.`,excludeWords:`Words that should lower or remove bad matches.`,excludeKeywordsHelper:`Words that should lower or remove bad matches.`,suggestedServicesFor:`Suggested services for {industry}`,suggestedKeywordsFor:`Suggested keywords for {industry}`,selectIndustryForServices:`Select an industry to see service suggestions`,selectIndustryForKeywords:`Select an industry to see keyword suggestions`,locationsTitle:`3. Locations`,locationsHint:`Use All Iceland for national tenders. Use travel settings when you can bid outside your base area for the right project size.`,baseLocation:`Base location`,baseLocationPlaceholder:`Example: East Iceland`,serviceAreas:`Service areas, comma separated`,serviceAreasPlaceholder:`Example: East Iceland, All Iceland`,travelScope:`Travel and scope`,willingToTravel:`Willing to travel for the right project`,includeNational:`Include national / All Iceland opportunities`,includeRemote:`Include remote / online opportunities`,minimumTravelValue:`Minimum project value for travel`,projectSize:`4. Settings`,minimumValue:`Minimum value`,maximumValue:`Maximum value`,showUnknownValue:`Show opportunities even if value is unknown`,reportPreferences:`Report preferences`,frequency:`Frequency`,weekly:`Weekly`,daily:`Daily`,reportDay:`Report day`,deadlineReminders:`Deadline reminders`,includeLowConfidence:`Include low-confidence matches`,saveProfile:`Save profile`,saving:`Saving...`,saved:`Saved`,dashboard:`Dashboard`,welcomeCompany:`Welcome, {company}`,dashboardIntro:`Ranked project opportunities based on your services, locations and keywords. {refresh}`,matchesLastRefreshed:`Last refreshed {time}.`,matchesAutoRefresh:`Matches refresh automatically after profile saves.`,refreshMatches:`Refresh matches`,refreshing:`Refreshing...`,viewWeeklyReport:`View report`,strongMatches:`Strong matches`,closingSoon:`Closing soon`,savedLabel:`Saved`,totalPotentialValue:`Total potential value`,searchOpportunities:`Search opportunities...`,savedOnly:`Saved only`,improveProfile:`Improve profile`,includeNationalOpportunities:`Include national opportunities`,showAllStoredMatches:`Show all matches`,inspectAllOpportunities:`Inspect all opportunities`,details:`Details`,save:`Save`,ignore:`Ignore`,originalLanguage:`Original language`,extractedProject:`Extracted project`,reportTitle:`Tender and opportunity report`,setupCompanyFirst:`Set up your company first`,reportNeedsProfile:`The report needs a company profile before it can generate relevant opportunity matches.`,dashboardNeedsProfile:`The dashboard needs a company profile so it can calculate relevant opportunity matches.`,weeklyReport:`Report`,saveReport:`Save report`,savingReport:`Saving...`,downloadPdf:`Download PDF`,copyReport:`Copy report`,reportArchive:`Report archive`,savedReports:`Saved reports`,loadingSavedReports:`Loading saved reports...`,noSavedReports:`No saved reports yet.`,viewReport:`View report`,closeReport:`Close report`,generatedBy:`Generated by VerkRadar`,reportForCompany:`Tender and opportunity report for {company}`,openTenders:`Open tenders / quote requests`,upcomingOpportunities:`Possible upcoming opportunities`,openTendersDescription:`Clear procurement intent. Review source documents before acting.`,upcomingDescription:`Upcoming procurement or project signals with clear evidence.`,reportFooter:`VerkRadar helps prioritise public opportunity review. Always check the original source documents, deadlines, requirements and eligibility before acting.`,buyer:`Buyer`,source:`Source`,description:`Description`,requirements:`Requirements`,noSpecificRequirements:`No specific requirements listed.`,noDescription:`No description available.`,noMatchReasons:`No match reasons available.`,matchReasons:`Match reasons`,opportunityInfo:`Opportunity info`,extraction:`Extraction`,sourceArticle:`Source article`,parentArticle:`Parent article`,openSourceArticle:`Open source article`,extractedRegion:`Extracted region`,projectNumber:`Project number`,tenderState:`Tender state`,quality:`Quality`,category:`Category`,type:`Type`,published:`Published`,cpv:`CPV`,recommendedNextSteps:`Recommended next steps`,noMajorRisks:`No major risks detected in this data.`,openSourceAndConfirm:`Open the source notice and confirm eligibility.`,removeFromSaved:`Remove from saved`,saveOpportunity:`Save opportunity`,markNotRelevant:`Mark not relevant`,publicProcurement:`Public procurement`,area:`Location`,deadline:`Deadline`,estimatedValue:`Estimated value`,notFound:`Not found`,notListed:`Not listed`,unknownBuyer:`Unknown buyer`,allIceland:`All Iceland`,whyThisMatters:`Why this matters`,risksToCheck:`Risks / things to check`,openSource:`Open source`,sourceLinkMissing:`Source link missing`,strongMatch:`Strong match`,goodMatch:`Good match`,possibleMatch:`Possible match`,weakMatch:`Weak match`,confirmedTender:`Confirmed tender`,likelyOpportunity:`Likely opportunity`,earlySignal:`Early signal`,needsReview:`Needs review`,tenderAwarded:`Tender awarded`,tenderAlreadyAnnounced:`Tender already announced`,upcomingTender:`Upcoming tender`,projectSignal:`Project signal`,nationalOpportunity:`National opportunity`,localMatch:`Local match`,mentionsService:`Mentions your service: {value}`,containsKeyword:`Contains your keyword: {value}`,procurement:`procurement`}};function n(e){let t=localStorage.getItem(e.language);return t===`en`||t===`is`?t:`is`}function r(e,n,r={}){let i=t[e||`is`]||t.is,a=t.en[n]||t.is[n]||n;return String(i[n]||a).replace(/\{(\w+)\}/g,(e,t)=>r[t]??``)}var i={services:{Electrical:[`raflagnir`,`rafvirki`,`brunakerfi`,`öryggiskerfi`,`lýsing`,`viðhald`,`þjónusta`,`hleðslustöðvar`,`töflusmíði`,`rafmagnseftirlit`],"IT / Web / Software":[`vefsíðugerð`,`vefhönnun`,`hugbúnaðarþróun`,`kerfisþróun`,`vefverslun`,`aðgengi`,`CMS`,`gagnagrunnar`,`viðhald`,`ráðgjöf`],Cleaning:[`Office cleaning`,`School cleaning`,`Facility cleaning`,`Window cleaning`,`Deep cleaning`,`Floor care`,`Municipal cleaning`,`Regular cleaning contracts`],Transport:[`Passenger transport`,`Goods transport`,`Healthcare transport`,`School transport`,`Shuttle services`,`Delivery services`,`Framework transport services`],Construction:[`jarðvinna`,`gatnagerð`,`vegagerð`,`malbikun`,`brúargerð`,`lagnavinna`,`framkvæmdir`,`viðhald`,`steypa`,`húsbyggingar`,`þakvinna`]},includeKeywords:{Electrical:[`rafmagn`,`rafvirki`,`brunakerfi`,`hleðslustöð`,`öryggiskerfi`,`myndavélakerfi`,`lýsing`,`viðhald`,`lagnir`,`neyðarlýsing`]}},a={companyName:`RafFix ehf.`,contactEmail:`owner@raffix.is`,website:`https://raffix.is`,industry:`Electrical`,services:[`electrical installation`,`maintenance`,`fire alarm systems`,`EV chargers`],includeKeywords:[`charging`,`inspection`,`public buildings`],excludeKeywords:[`telecom`,`snow removal`],locations:[`Reykjavík`,`Capital Area`,`Suðurnes`,`Remote / Online`],minProjectValue:5e5,maxProjectValue:3e7,allowUnknownValue:!0,reportFrequency:`weekly`,reportDay:`monday`,deadlineReminders:!0,includeLowConfidence:!1,autoAlertMode:`auto_safe_only`};function o(e=``){return{companyName:``,kennitala:``,contactEmail:e||``,billingEmail:e||``,contactName:``,phone:``,address:``,website:``,industry:``,selectedPlan:`basic`,billingStatus:`trial`,trialStartedAt:``,trialEndsAt:``,services:[],includeKeywords:[],excludeKeywords:[],locations:[],baseLocation:``,serviceAreas:[],willingToTravel:!1,nationalProjects:!1,remoteProjects:!1,minimumProjectValueForTravel:``,minProjectValue:``,maxProjectValue:``,allowUnknownValue:!0,reportFrequency:`weekly`,reportDay:`monday`,deadlineReminders:!0,includeLowConfidence:!1,autoAlertMode:`auto_safe_only`}}function s(e,t=`is`){let n=t===`is`;return{privacy:n?{eyebrow:`Lög og traust`,title:`Persónuvernd`,intro:`Hér er útskýrt á einföldu máli hvaða gögn VerkRadar vistar og hvernig þau eru notuð til að veita þjónustuna.`,sections:[[`Persónuvernd`,[`VerkRadar er vöktunar- og yfirlitskerfi fyrir fyrirtæki. Kerfið notar gögn sem notandi setur inn og opinber gögn um útboð og verkefni til að hjálpa fyrirtækjum að finna það sem gæti passað.`]],[`Hvaða gögn eru vistuð`,[`VerkRadar getur vistað fyrirtækjaheiti, tengiliðanetfang, vefslóð, atvinnugrein, þjónustuflokka, staðsetningar, leitarorð, stillingar, vistuð og hunsuð verkefni, samsvaranir og yfirlit.`,`Kerfið vistar einnig innskráningar- og lotugögn sem þarf til að halda notendum innskráðum og vernda aðgang.`]],[`Innskráning og aðgangur`,[`Notendur skrá sig inn með auðkenndum aðgangi. Aðgangur að mælaborði, stillingum og skýrslum er tengdur við notanda og fyrirtæki eftir því sem við á.`]],[`Fyrirtækjaprófíll og stillingar`,[`Fyrirtækjaprófíllinn er notaður til að bera opinber verkefni saman við þjónustu, svæði, lykilorð og óskir fyrirtækisins. Betri prófíll gefur yfirleitt betri samsvörun.`]],[`Vistuð og hunsuð tækifæri`,[`VerkRadar getur vistað hvaða verkefni notandi vistar, fylgist með eða hunsar. Þetta er notað til að bæta upplifun, síur og yfirlit.`]],[`Vafrakökur og vafrageymsla`,[`VerkRadar notar nauðsynlega vafrageymslu, lotugeymslu og sambærilega virkni fyrir innskráningu, Supabase Auth lotur, tungumál, stillingar og grunnvirkni appsins.`,`Við gerum ekki ráð fyrir auglýsinga- eða rekjanlegri markaðssetningargeymslu í þessari útgáfu. Ef greiningar eða auglýsingatól verða síðar bætt við þarf að uppfæra þessa lýsingu.`]],[`Hafa samband`,[`Spurningar um persónuvernd eða gögn má senda á info@froststudio.net.`]]]}:{eyebrow:`Legal and trust`,title:`Privacy`,intro:`This page explains in practical terms what VerkRadar stores and how that data is used to provide the service.`,sections:[[`Privacy`,[`VerkRadar is a monitoring and reporting tool for businesses. It uses user-entered company data and public tender/project data to help companies find relevant opportunities.`]],[`What data is stored`,[`VerkRadar may store company name, contact email, website, industry, service categories, locations, keywords, settings, saved and ignored opportunities, matches, and reports.`,`The system also stores login and session data needed to keep users signed in and protect account access.`]],[`Login and access`,[`Users log in with authenticated accounts. Access to dashboards, settings, and reports is connected to the user and company where applicable.`]],[`Company profile and settings`,[`The company profile is used to compare public opportunities against services, locations, keywords, and company preferences. A better profile usually creates better matches.`]],[`Saved and ignored opportunities`,[`VerkRadar may store which opportunities a user saves, watches, or ignores. This is used to improve the experience, filters, and reports.`]],[`Cookies and browser storage`,[`VerkRadar uses essential browser storage, session storage, and similar functionality for login, Supabase Auth sessions, language, preferences, and core app functionality.`,`We do not currently claim to use advertising or marketing tracking storage in this version. If analytics or advertising tools are added later, this section should be updated.`]],[`Contact`,[`Questions about privacy or data can be sent to info@froststudio.net.`]]]},terms:n?{eyebrow:`Lög og traust`,title:`Skilmálar`,intro:`Þessir skilmálar lýsa notkun VerkRadar á einföldu máli. Þeir eru ekki endanleg lögfræðiráðgjöf.`,sections:[[`Skilmálar`,[`Með því að nota VerkRadar samþykkir notandi að nota þjónustuna á ábyrgan hátt og staðfesta alltaf upplýsingar á upprunalegri heimild áður en brugðist er við.`]],[`Þjónustan`,[`VerkRadar vaktar opinberar heimildir, útboðsvefi, sveitarfélagssíður og aðrar heimildir þar sem það er heimilt og tæknilega mögulegt. Kerfið raðar verkefnum eftir fyrirtækjaprófíl og býr til mælaborð eða yfirlit.`]],[`Upprunaleg gögn eru endanleg heimild`,[`VerkRadar hjálpar til við að forgangsraða yfirferð opinberra tækifæra. Upprunaleg útboðsgögn, skilafrestir, kröfur og hæfisskilyrði á upprunalegri heimild eru alltaf endanleg heimild.`]],[`Engin trygging um fullkomna vöktun`,[`VerkRadar tryggir ekki að öll útboð finnist, að öll gögn séu fullkomin, að samsvörun sé alltaf rétt eða að fyrirtæki uppfylli skilyrði eða vinni verk.`]],[`Prufuaðgangur og verð`,[`Prufuaðgangur, verð, greiðslur og uppsagnir ráðast af verðsíðu, pöntunarsíðu eða skriflegu samkomulagi hverju sinni.`]],[`Uppsögn`,[`Notandi getur óskað eftir lokun eða breytingu á aðgangi. VerkRadar getur takmarkað aðgang ef þjónustan er misnotuð, greiðslur vantar eða öryggisáhætta kemur upp.`]],[`Ábyrgðartakmörkun`,[`VerkRadar ber ekki ábyrgð á töpuðum skilafrestum, röngum upplýsingum á upprunalegum heimildum, viðskiptatapi eða ákvörðunum sem teknar eru út frá yfirlitum án staðfestingar á frumgögnum.`]],[`Hafa samband`,[`Spurningar um skilmála má senda á info@froststudio.net.`]]]}:{eyebrow:`Legal and trust`,title:`Terms`,intro:`These terms describe VerkRadar use in plain language. They are not final legal advice.`,sections:[[`Terms`,[`By using VerkRadar, users agree to use the service responsibly and always verify information at the original source before acting.`]],[`The service`,[`VerkRadar monitors public sources, procurement portals, municipal pages, and other sources where allowed and technically feasible. The system ranks opportunities against company profiles and creates dashboards or reports.`]],[`Original data is the final authority`,[`VerkRadar helps prioritize review of public opportunities. Original tender documents, deadlines, requirements, and eligibility criteria at the original source are always the final authority.`]],[`No guarantee of complete monitoring`,[`VerkRadar does not guarantee that every tender is found, that all data is complete, that matching is always correct, or that a company is eligible for or will win any contract.`]],[`Trial access and pricing`,[`Trial access, pricing, billing, and cancellation are governed by the pricing page, order page, or written agreement in effect at the time.`]],[`Cancellation`,[`A user may request account changes or cancellation. VerkRadar may restrict access if the service is misused, payment is missing, or a security risk arises.`]],[`Limitation of liability`,[`VerkRadar is not responsible for missed deadlines, incorrect information at original sources, business losses, or decisions made from reports without checking source documents.`]],[`Contact`,[`Questions about these terms can be sent to info@froststudio.net.`]]]},data:n?{eyebrow:`Gagnaheimildir`,title:`Gagnaheimildir`,intro:`VerkRadar notar opinberar heimildir til að hjálpa fyrirtækjum að finna verkefni sem gætu skipt máli.`,sections:[[`Gagnaheimildir`,[`Kerfið safnar og samræmir opinberar upplýsingar þar sem slíkt er heimilt og tæknilega mögulegt.`]],[`Opinberar heimildir`,[`Heimildir geta verið útboðsvefir, opinberar stofnanir, RSS straumar, sveitarfélagssíður og aðrar opinberar síður.`]],[`Sveitarfélög og útboðsvefir`,[`VerkRadar getur vaktað sveitarfélög, innkaupa- og útboðsvefi og sértækar síður fyrir framkvæmdir, þjónustu eða innkaup.`]],[`Evrópsk útboð ef við á`,[`Evrópsk útboð geta verið sótt úr TED eða sambærilegum heimildum þegar þau eiga við markaðinn og fyrirtækjaprófíla.`]],[`Takmarkanir gagna`,[`Sumar heimildir veita ekki fulla skilafresti, verðmæti, kaupanda eða útboðsgögn í véllesanlegu formi. Gögn geta verið seinkuð, ófullkomin, tvítekin eða breytt á upprunalegri síðu.`]],[`Leiðréttingar`,[`Ef þú sérð rangar eða úreltar upplýsingar má senda ábendingu á info@froststudio.net. Opnið alltaf upprunalega heimild áður en brugðist er við.`]]]}:{eyebrow:`Data sources`,title:`Data sources`,intro:`VerkRadar uses public sources to help businesses find projects that may matter.`,sections:[[`Data sources`,[`The system collects and normalizes public information where allowed and technically feasible.`]],[`Public sources`,[`Sources can include procurement portals, public institutions, RSS feeds, municipal pages, and other official public pages.`]],[`Municipalities and procurement portals`,[`VerkRadar may monitor municipalities, procurement/tender portals, and specific pages for construction, services, or purchasing.`]],[`European tenders where applicable`,[`European tenders may be imported from TED or similar sources when relevant to the market and company profiles.`]],[`Data limitations`,[`Some sources do not provide full deadlines, values, buyer data, or tender documents in machine-readable form. Data may be delayed, incomplete, duplicated, or changed at the original source.`]],[`Corrections`,[`If you see incorrect or outdated information, send a correction to info@froststudio.net. Always open the original source before acting.`]]]},security:n?{eyebrow:`Öryggi`,title:`Öryggi`,intro:`VerkRadar notar innskráningu, aðgangsstýringu og aðskilnað gagna til að vernda fyrirtækjaupplýsingar.`,sections:[[`Öryggi`,[`Við reynum að halda öryggisupplýsingum hagnýtum og heiðarlegum. VerkRadar fullyrðir ekki um vottanir sem hafa ekki verið fengnar.`]],[`Innskráning`,[`Notendur skrá sig inn með auðkenndum aðgangi. Innskráning og lotur eru hluti af grunnvirkni appsins.`]],[`Aðgangsstýring`,[`Aðgangur að fyrirtækjagögnum, samsvörunum og skýrslum er aðgreindur eftir notanda og fyrirtæki þar sem það á við.`]],[`Fyrirtækjagögn`,[`Fyrirtækjaprófílar, stillingar og vistuð/hunsuð verkefni eru notuð til að veita þjónustuna og ættu ekki að vera sýnileg öðrum viðskiptavinum.`]],[`Admin aðgangur`,[`Admin verkfæri eru takmörkuð við skilgreinda stjórnendur og eru notuð til að fylgjast með heimildum, innflutningi, fyrirtækjum og handvirkri yfirferð.`]],[`Tilkynna vandamál`,[`Öryggisspurningar eða ábendingar má senda á info@froststudio.net.`]]]}:{eyebrow:`Security`,title:`Security`,intro:`VerkRadar uses authentication, access control, and data separation to protect company information.`,sections:[[`Security`,[`We try to keep security information practical and honest. VerkRadar does not claim certifications it has not obtained.`]],[`Login`,[`Users log in with authenticated accounts. Login and sessions are part of the app’s core functionality.`]],[`Access control`,[`Access to company data, matches, and reports is separated by user and company where applicable.`]],[`Company data`,[`Company profiles, settings, and saved/ignored opportunities are used to provide the service and should not be visible to other customers.`]],[`Admin access`,[`Admin tools are restricted to defined administrators and are used to monitor sources, imports, companies, and manual review.`]],[`Report an issue`,[`Security questions or reports can be sent to info@froststudio.net.`]]]},contact:n?{eyebrow:`Hafa samband`,title:`Hafa samband`,intro:`Viltu prófa VerkRadar, spyrja um vöktun eða benda á leiðréttingu?`,sections:[[`VerkRadar / Frost Studio`,[`Netfang: info@froststudio.net`,`Tengiliður: Kristján Jakob`]]]}:{eyebrow:`Contact`,title:`Contact`,intro:`Want to try VerkRadar, ask about monitoring, or report a correction?`,sections:[[`VerkRadar / Frost Studio`,[`Email: info@froststudio.net`,`Contact person: Kristján Jakob`]]]}}[e]}function c(e){return String(e||``).trim().toLowerCase()}async function l(e,t){let n=c(t?.email);if(!e||!t?.id||!n)return[];let{data:r,error:i}=await e.from(`company_members`).select(`id, company_id, email, role, status`).eq(`email_normalized`,n).eq(`status`,`invited`);if(i)throw i;let a=r||[];if(!a.length)return[];let o=[];for(let r of a){let{data:i,error:a}=await e.from(`company_members`).update({user_id:t.id,status:`active`,accepted_at:new Date().toISOString(),revoked_at:null,updated_at:new Date().toISOString()}).eq(`id`,r.id).eq(`email_normalized`,n).eq(`status`,`invited`).select(`id, company_id, email, role, status, accepted_at`).maybeSingle();if(a)throw a;i&&o.push(i)}return o}async function u(e,t){if(!e||!t?.id)return[];let{data:n,error:r}=await e.from(`company_members`).select(`id, company_id, email, role, status, accepted_at`).eq(`user_id`,t.id).eq(`status`,`active`).order(`accepted_at`,{ascending:!0});if(r)throw r;return n||[]}var d=`https://asojxjbsgqbfpbepojzh.supabase.co`,f=window.supabase?window.supabase.createClient(d,`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFzb2p4amJzZ3FiZnBiZXBvanpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAwNTU2NjgsImV4cCI6MjA5NTYzMTY2OH0.yPA34VbqWqKrBPespmHr5AojYzjhy3kGRxswO9XdAd0`):null;function p(){return window.VERKRADAR_DAILY_PIPELINE_URL?window.VERKRADAR_DAILY_PIPELINE_URL:window.VERKRADAR_SUPABASE_URL?`${window.VERKRADAR_SUPABASE_URL}/functions/v1/daily-pipeline`:`${d}/functions/v1/daily-pipeline`}async function m(){let e=p();if(!e)throw Error(`Daily pipeline function is not configured. Set window.VERKRADAR_DAILY_PIPELINE_URL or window.VERKRADAR_SUPABASE_URL.`);let t=await h(),n=await fetch(e,{method:`POST`,headers:t,body:JSON.stringify({runDailyPipeline:!0})}),r=await ee(n);if(!n.ok&&n.status!==207)throw Error(r.error||r.message||`Daily pipeline failed with status ${n.status}`);return r}async function h(){let e={"content-type":`application/json`},t=window.VERKRADAR_SUPABASE_ANON_KEY||`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFzb2p4amJzZ3FiZnBiZXBvanpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAwNTU2NjgsImV4cCI6MjA5NTYzMTY2OH0.yPA34VbqWqKrBPespmHr5AojYzjhy3kGRxswO9XdAd0`;t&&(e.apikey=t);let{data:n,error:r}=f?await f.auth.getSession():{data:{session:null},error:null};if(r)throw r;let i=n.session?.access_token;if(!i)throw Error(`You must be logged in as an admin to run the daily pipeline.`);return e.authorization=`Bearer ${i}`,e}async function ee(e){let t=await e.text();if(!t)return{};try{return JSON.parse(t)}catch{return{error:t}}}function g(){return window.VERKRADAR_AI_REVIEW_MATCH_URL?window.VERKRADAR_AI_REVIEW_MATCH_URL:window.VERKRADAR_SUPABASE_URL?`${window.VERKRADAR_SUPABASE_URL}/functions/v1/ai-review-match`:`${d}/functions/v1/ai-review-match`}async function te(e,t={}){let n=g();if(!n)throw Error(`AI review function is not configured. Set window.VERKRADAR_AI_REVIEW_MATCH_URL or window.VERKRADAR_SUPABASE_URL.`);let r=await _(),i=await fetch(n,{method:`POST`,headers:r,body:JSON.stringify({matchId:e,force:t.force===!0})}),a=await v(i);if(!i.ok)throw Error(a.error||a.message||`AI review failed with status ${i.status}`);return a}async function ne(e,t={}){let n=g();if(!n)throw Error(`AI review function is not configured. Set window.VERKRADAR_AI_REVIEW_MATCH_URL or window.VERKRADAR_SUPABASE_URL.`);let r=await _(),i=await fetch(n,{method:`POST`,headers:r,body:JSON.stringify({batch:!0,companyId:e,limit:Math.max(1,Math.min(20,Number(t.limit||10))),force:t.force===!0,revalidate:t.revalidate===!0})}),a=await v(i);if(!i.ok)throw Error(a.error||a.message||`AI review batch failed with status ${i.status}`);return a}async function re(e={}){let t=g();if(!t)throw Error(`AI review function is not configured. Set window.VERKRADAR_AI_REVIEW_MATCH_URL or window.VERKRADAR_SUPABASE_URL.`);let n=await _(),r=await fetch(t,{method:`POST`,headers:n,body:JSON.stringify({auto:!0,limit:Math.max(1,Math.min(10,Number(e.limit||10)))})}),i=await v(r);if(!r.ok)throw Error(i.error||i.message||`Automatic AI review failed with status ${r.status}`);return i}async function ie(e,t){let n=g();if(!n)throw Error(`AI review function is not configured. Set window.VERKRADAR_AI_REVIEW_MATCH_URL or window.VERKRADAR_SUPABASE_URL.`);let r=await _(),i=await fetch(n,{method:`POST`,headers:r,body:JSON.stringify({setCompanyAutoAiReviewEnabled:!0,company_id:e,enabled:t===!0})}),a=await v(i);if(!i.ok)throw Error(a.error||a.message||`Auto AI toggle failed with status ${i.status}`);return a}async function ae(){if(!f)return{reviewsToday:0,estimatedCostToday:0,remainingReviewsToday:50};let e=new Date;e.setUTCHours(0,0,0,0);let{data:t,error:n}=await f.from(`ai_usage_log`).select(`opportunity_id, estimated_cost`).gte(`created_at`,e.toISOString());if(n)throw n;let r=t||[],i=r.filter(e=>e.opportunity_id).length;return{reviewsToday:i,estimatedCostToday:r.reduce((e,t)=>e+Number(t.estimated_cost||0),0),remainingReviewsToday:Math.max(0,50-i)}}function oe(e){let t=Number(e||0);return`$${t.toFixed(t>=1?2:4)}`}async function _(){let e={"content-type":`application/json`},t=window.VERKRADAR_SUPABASE_ANON_KEY||`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFzb2p4amJzZ3FiZnBiZXBvanpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAwNTU2NjgsImV4cCI6MjA5NTYzMTY2OH0.yPA34VbqWqKrBPespmHr5AojYzjhy3kGRxswO9XdAd0`;t&&(e.apikey=t);let{data:n,error:r}=f?await f.auth.getSession():{data:{session:null},error:null};if(r)throw r;let i=n.session?.access_token;if(!i)throw Error(`You must be logged in as an admin to run AI review.`);return e.authorization=`Bearer ${i}`,e}async function v(e){let t=await e.text();if(!t)return{};try{return JSON.parse(t)}catch{return{error:t}}}function y(e){let t=String(e?.fit||``),n=Number(e?.confidence||0),r=e?.send_to_client===!0||e?.sendToClient===!0;return n<.65?`needs_review`:t===`strong`&&r?`ready_for_admin`:t===`possible`&&r?`possible`:t===`weak`||t===`no_fit`?`low_priority`:`needs_review`}function se(e,t,n=null){let r=new Map,i=new Map;for(let e of t||[]){let t=String(e.company_id||``),n=String(e.opportunity_id||``),a=String(e.match_id||``);t&&n&&r.set(`${t}:${n}`,e),a&&i.set(a,e)}return(e||[]).map(e=>{let t=`${String(e.company_id||``)}:${String(e.opportunity_id||``)}`,a=r.get(t)||i.get(String(e.id||``));return a?{...e,ai_review_status:y(a),ai_review_fit:a.fit||e.ai_review_fit,ai_review_confidence:a.confidence??e.ai_review_confidence,ai_reviewed_at:a.updated_at||a.created_at||e.ai_reviewed_at,ai_review_send_to_client:a.send_to_client===!0,ai_review_reason:a.reason||``,ai_review_profile_hash:a.reviewed_profile_hash||``,ai_review_profile_stale:pe(a,n),ai_review_found:!0,ai_review_saved:!0}:{...e,ai_review_found:!1}})}function ce(e,t=null){let n=me(t,e);if(n.outsideServiceArea)return{bucket:`outside_service_area`,label:`Outside service area`,tone:`warning`,clientReady:!1,reason:n.reason||`Outside current service area.`};let r=fe(e?.ai_review_skipped_reason),i=String(e?.ai_review_fit||``),a=Number(e?.ai_review_confidence||0),o=e?.ai_review_found===!0||e?.ai_review_saved===!0||!!i,s=String(e?.ai_review_status||`not_reviewed`);return r===`outside_service_area`?{bucket:`outside_service_area`,label:`Outside service area`,tone:`warning`,clientReady:!1,reason:`Skipped by batch review because the opportunity is outside the company service area.`}:o?e?.ai_review_profile_stale===!0?{bucket:`needs_review`,label:`AI review may be stale`,tone:`warning`,clientReady:!1,confidence:a}:i===`strong`&&e?.ai_review_send_to_client===!0?{bucket:`ai_recommended`,label:`AI recommended`,tone:`success`,clientReady:!0,confidence:a}:i===`possible`?{bucket:`ai_possible`,label:`AI possible`,tone:`notice`,clientReady:e?.ai_review_send_to_client===!0,confidence:a}:i===`weak`||i===`no_fit`||s===`low_priority`?{bucket:`low_priority`,label:i===`no_fit`?`AI: no fit`:`AI: weak fit`,tone:`muted`,clientReady:!1,confidence:a}:{bucket:`needs_review`,label:`Needs review`,tone:`warning`,clientReady:!1,confidence:a}:r?{bucket:r,label:de(r),tone:r===`already_reviewed`?`notice`:`warning`,clientReady:!1,reason:de(r)}:s===`needs_review`||String(e?.safety_status||``)===`needs_review`?{bucket:`needs_review`,label:`Needs review`,tone:`warning`,clientReady:!1}:{bucket:`not_reviewed`,label:`Not AI reviewed`,tone:`muted`,clientReady:!1}}function le(e,t,n=null){return(e||[]).filter(e=>{let r=ce(e,n);return t===`ai_recommended`?r.bucket===`ai_recommended`:t===`ai_possible`?r.bucket===`ai_possible`:t===`needs_review`?r.bucket===`needs_review`:t===`outside_service_area`?r.bucket===`outside_service_area`:t===`not_reviewed`?r.bucket===`not_reviewed`:!0})}function ue(e){let t=JSON.stringify({services:ge([...e?.services||[],...e?.includeKeywords||[],...(e?.excludeKeywords||[]).map(e=>`exclude:${e}`)]),locations:ge([e?.baseLocation,...e?.locations||[],...e?.serviceAreas||[],e?.willingToTravel?`willing_to_travel:true`:`willing_to_travel:false`,e?.nationalProjects?`national_projects:true`:`national_projects:false`])}),n=5381;for(let e=0;e<t.length;e+=1)n=(n<<5)+n+t.charCodeAt(e),n|=0;return`profile_${Math.abs(n)}`}function de(e){return{outside_service_area:`Outside service area`,already_reviewed:`Already reviewed`,expired:`Expired`,missing_deadline:`Missing deadline`,expired_or_missing_deadline:`Expired or missing deadline`,score_too_low:`Score too low`,manually_rejected:`Manually rejected`}[fe(e)]||`Skipped`}function fe(e){return String(e||``).trim().toLowerCase().replace(/[\s-]+/g,`_`)}function pe(e,t){if(!e||!t)return!1;let n=String(e.reviewed_profile_hash||``);return!!(n&&n!==ue(t))}function me(e,t){if(!e||e.nationalProjects===!0||e.willingToTravel===!0)return{outsideServiceArea:!1,reason:``};let n=_e([e.baseLocation,...e.serviceAreas||[],...e.locations||[]].join(` `));if(!n||/all iceland|allt land|national|landsdekkandi/.test(n))return{outsideServiceArea:!1,reason:``};let r=t?.opportunities||{},i=r.raw_payload&&typeof r.raw_payload==`object`?r.raw_payload:{},a=_e([r.title,r.location,i.region,i.extracted_location].join(` `));if(!a)return{outsideServiceArea:!1,reason:`Opportunity location unclear`};if(/(dalvik|akureyri|boggvisbraut|birkiholar|north iceland|nordurland)/.test(a)&&!/(dalvik|akureyri|north iceland|nordurland)/.test(n)||/(olafsvik|snaefellsnes|stykkisholmur|grundarfjordur)/.test(a)&&!/(olafsvik|snaefellsnes|stykkisholmur|grundarfjordur)/.test(n))return{outsideServiceArea:!0,reason:`Outside current service area`};let o=he(n),s=he(a);return!o.length||!s.length?{outsideServiceArea:!1,reason:``}:{outsideServiceArea:!s.some(e=>o.includes(e)),reason:`Outside current service area`}}function he(e){return[[`capital_area`,/reykjavik|capital area|hofudborg|gardabaer|kopavogur|seltjarnarnes|mosfellsbaer/],[`south`,/selfoss|arborg|sudurland|hveragerdi|olfus|rangarthing/],[`west_corridor`,/akranes|borgarnes|borgarbyggd|hvalfjordur/],[`north`,/dalvik|akureyri|nordurland|birkiholar|boggvisbraut/],[`snaefellsnes`,/olafsvik|snaefellsnes|stykkisholmur|grundarfjordur/]].filter(([,t])=>t.test(e)).map(([e])=>e)}function ge(e){return Array.from(new Set((e||[]).map(e=>_e(e)).filter(Boolean))).sort()}function _e(e){return String(e||``).toLowerCase().normalize(`NFD`).replace(/[\u0300-\u036f]/g,``).replace(/þ/g,`th`).replace(/ð/g,`d`).replace(/æ/g,`ae`).replace(/ö/g,`o`).replace(/[^a-z0-9\s/-]/g,` `).replace(/\s+/g,` `).trim()}function ve(e){let{escapeHtml:t,isRunning:n=!1,result:r=null}=e;return`
    <section class="ops-card admin-daily-pipeline-panel">
      <div class="card-header">
        <div>
          <h2>Daily pipeline</h2>
          <p>Runs source imports, refreshes active customer matches, then runs automatic AI review. No emails are sent.</p>
        </div>
        <button class="btn btn-primary" type="button" data-action="admin-run-daily-pipeline" ${n?`disabled`:``}>
          ${n?`Running daily pipeline...`:`Run daily pipeline now`}
        </button>
      </div>
      ${r?ye(r,t):``}
    </section>
  `}function ye(e,t){return`
    <div class="admin-ai-batch-result admin-daily-pipeline-summary">
      <strong>Latest daily pipeline</strong>
      <span>${Number(e.sources_imported||0)} sources imported</span>
      <span>${Number(e.opportunities_inserted||0)} inserted</span>
      <span>${Number(e.opportunities_updated||0)} updated</span>
      <span>${Number(e.companies_refreshed||0)} companies refreshed</span>
      <span>${Number(e.matches_created_updated||0)} matches refreshed</span>
      <span>${Number(e.ai_companies_checked||0)} AI companies checked</span>
      <span>${Number(e.ai_reviews_created||0)} AI reviews created</span>
      <span>${Number(e.skipped_already_reviewed||0)} already reviewed</span>
      <span>${Number(e.skipped_outside_service_area||0)} outside service area</span>
      <span>${Number(e.skipped_missing_deadline||0)} missing deadline</span>
      <span>${Number(e.skipped_expired||0)} expired</span>
    </div>
    ${Array.isArray(e.errors)&&e.errors.length?`
      <div class="admin-message is-error">
        ${e.errors.map(e=>`<div>${t(e)}</div>`).join(``)}
      </div>
    `:``}
  `}function be(e,t){let{escapeHtml:n,formatDateTime:r,inviteEmail:i=``,actionState:a=``}=t,o=Array.isArray(e.members)?e.members:[],s=o.filter(e=>e.status===`active`),c=o.filter(e=>e.status===`invited`),l=s.length?`Active`:c.length?`Invited`:`Not invited`,u=!!a;return`
    <section class="side-panel admin-company-access-panel">
      <h3>Customer access</h3>
      <p><strong>Access status:</strong> ${n(l)}</p>
      ${o.length?`
        <ul class="admin-detail-list admin-company-access-list">
          ${o.map(e=>xe(e,{escapeHtml:n,formatDateTime:r,busy:u})).join(``)}
        </ul>
      `:`<p>No customer access has been invited yet.</p>`}
      <div class="admin-access-invite">
        <label>
          <span>Customer email</span>
          <input
            type="email"
            data-admin-company-invite-email
            data-id="${n(e.id)}"
            value="${n(i)}"
            placeholder="${n(e.billingEmail||e.contactEmail||`customer@example.com`)}"
          />
        </label>
        <button class="btn btn-secondary btn-small" type="button" data-action="admin-invite-company-customer" data-id="${n(e.id)}" ${u?`disabled`:``}>
          ${a===`invite`?`Inviting...`:c.length?`Resend invite`:`Invite customer`}
        </button>
      </div>
    </section>
  `}function xe(e,t){let{escapeHtml:n,formatDateTime:r,busy:i}=t,a=e.status===`revoked`,o=e.status===`active`?`is-success`:e.status===`invited`?`is-running`:``;return`
    <li>
      <div>
        <strong>${n(e.email||`Unknown email`)}</strong>
        <span>${n(e.role||`member`)} · <span class="status-pill ${o}">${n(e.status||`unknown`)}</span></span>
        <span>${e.accepted_at?`Accepted ${n(r(e.accepted_at))}`:`Invited ${n(r(e.invited_at))}`}</span>
      </div>
      ${a?``:`
        <button
          class="btn btn-ghost btn-small"
          type="button"
          data-action="admin-revoke-company-access"
          data-id="${n(e.company_id)}"
          data-member-id="${n(e.id)}"
          ${i?`disabled`:``}
        >
          Revoke access
        </button>
      `}
    </li>
  `}function Se({authMessage:e,escapeHtml:t}){if(!e)return``;let n=Array.isArray(e.actions)?e.actions:[];return`
    <div class="admin-message ${e.type===`error`?`is-error`:`is-success`}">
      <span>${t(e.text)}</span>
      ${n.length?`
        <div class="auth-message-actions">
          ${n.map(e=>`
            <button type="button" class="btn btn-${e.variant===`primary`?`primary`:`secondary`}" data-action="go" data-href="${t(e.href)}">
              ${t(e.label)}
            </button>
          `).join(``)}
        </div>
      `:``}
    </div>
  `}function Ce({t:e,escapeHtml:t,authForm:n,authSubmitting:r,authMessage:i}){return`
    <section class="auth-page">
      <div class="auth-layout">
        <div class="auth-copy">
          <p class="eyebrow">${t(e(`login`))}</p>
          <h1>${t(e(`authLoginTitle`))}</h1>
          <p>${t(e(`authLoginSubtitle`))}</p>
        </div>

        <div class="auth-form-column">
          ${Se({authMessage:i,escapeHtml:t})}
          <form id="login-form" class="auth-card">
            <label class="form-group">${t(e(`email`))} <input type="email" name="email" data-auth-field="email" value="${t(n.email)}" autocomplete="email" required /></label>
            <label class="form-group">${t(e(`password`))} <input type="password" name="password" data-auth-field="password" value="${t(n.password)}" autocomplete="current-password" required /></label>
            <p class="auth-help-link"><button type="button" data-action="go" data-href="/forgot-password">${t(e(`forgotPassword`))}</button></p>
            <div class="auth-actions">
              <button class="btn btn-primary btn-large" type="submit" ${r?`disabled`:``}>
                ${t(e(r?`loggingIn`:`login`))}
              </button>
            </div>
            <p class="auth-switch">${t(e(`newToVerkRadar`))} <button type="button" data-action="go" data-href="/signup">${t(e(`createAccount`))}</button></p>
          </form>
        </div>
      </div>
    </section>
  `}function we({t:e,escapeHtml:t,authForm:n,authSubmitting:r,authMessage:i}){return`
    <section class="auth-page">
      <div class="auth-layout">
        <div class="auth-copy">
          <p class="eyebrow">${t(e(`passwordReset`))}</p>
          <h1>${t(e(`resetPasswordTitle`))}</h1>
          <p>${t(e(`resetPasswordSubtitle`))}</p>
        </div>

        <div class="auth-form-column">
          ${Se({authMessage:i,escapeHtml:t})}
          <form id="forgot-password-form" class="auth-card">
            <label class="form-group">${t(e(`email`))} <input type="email" name="email" data-auth-field="email" value="${t(n.email)}" autocomplete="email" required /></label>
            <div class="auth-actions">
              <button class="btn btn-primary btn-large" type="submit" ${r?`disabled`:``}>
                ${t(e(r?`sending`:`sendResetLink`))}
              </button>
            </div>
            <p class="auth-switch">${t(e(`rememberedPassword`))} <button type="button" data-action="go" data-href="/login">${t(e(`backToLogin`))}</button></p>
          </form>
        </div>
      </div>
    </section>
  `}function Te({t:e,escapeHtml:t,authForm:n,authSubmitting:r,authMessage:i}){return`
    <section class="auth-page">
      <div class="auth-layout">
        <div class="auth-copy">
          <p class="eyebrow">${t(e(`newPassword`))}</p>
          <h1>${t(e(`chooseNewPassword`))}</h1>
          <p>${t(e(`resetPasswordHelp`))}</p>
        </div>

        <div class="auth-form-column">
          ${Se({authMessage:i,escapeHtml:t})}
          <form id="reset-password-form" class="auth-card">
            <label class="form-group">${t(e(`newPassword`))} <input type="password" name="newPassword" data-auth-field="newPassword" value="${t(n.newPassword)}" autocomplete="new-password" minlength="8" required /></label>
            <label class="form-group">${t(e(`confirmNewPassword`))} <input type="password" name="confirmPassword" data-auth-field="confirmPassword" value="${t(n.confirmPassword)}" autocomplete="new-password" minlength="8" required /></label>
            <div class="auth-actions">
              <button class="btn btn-primary btn-large" type="submit" ${r?`disabled`:``}>
                ${t(e(r?`updating`:`updatePassword`))}
              </button>
            </div>
            <p class="auth-switch">${t(e(`needNewLink`))} <button type="button" data-action="go" data-href="/forgot-password">${t(e(`sendAnotherResetLink`))}</button></p>
            <p class="auth-switch">${t(e(`backToLogin`))} <button type="button" data-action="go" data-href="/login">${t(e(`login`))}</button></p>
          </form>
        </div>
      </div>
    </section>
  `}function Ee({t:e,escapeHtml:t,authForm:n,authSubmitting:r,authMessage:i}){return`
    <section class="auth-page">
      <div class="auth-layout">
        <div class="auth-copy">
          <p class="eyebrow">${t(e(`createAccount`))}</p>
          <h1>${t(e(`createAccountTitle`))}</h1>
          <p>${t(e(`createAccountSubtitle`))}</p>
        </div>

        <div class="auth-form-column">
          ${Se({authMessage:i,escapeHtml:t})}
          <form id="signup-form" class="auth-card">
            <label class="form-group">${t(e(`email`))} <input type="email" name="email" data-auth-field="email" value="${t(n.email)}" autocomplete="email" required /></label>
            <label class="form-group">${t(e(`password`))} <input type="password" name="password" data-auth-field="password" value="${t(n.password)}" autocomplete="new-password" minlength="6" required /></label>
            <div class="auth-actions">
              <button class="btn btn-primary btn-large" type="submit" ${r?`disabled`:``}>
                ${t(e(r?`creating`:`createAccount`))}
              </button>
            </div>
            <p class="auth-switch">${t(e(`alreadyHaveAccount`))} <button type="button" data-action="go" data-href="/login">${t(e(`login`))}</button></p>
          </form>
        </div>
      </div>
    </section>
  `}function De(e){let{escapeHtml:t,usageSummary:n=null,lastResult:r=null,isRunning:i=!1,formatAiUsageCost:a=e=>`$${Number(e||0).toFixed(4)}`}=e;return`
    <section class="ops-card admin-auto-ai-panel">
      <div class="card-header">
        <div>
          <h2>Automatic AI review</h2>
          <p>Admin-triggered pass for new eligible matches across enabled active/trial companies. Max 10 per run.</p>
        </div>
        <button class="btn btn-secondary btn-small" type="button" data-action="admin-run-auto-ai-review" ${i?`disabled`:``}>
          ${i?`Running automatic AI review...`:`Run automatic AI review now`}
        </button>
      </div>
      ${n?Ae(n,{escapeHtml:t,formatAiUsageCost:a}):``}
      ${r?Me(r,t):``}
    </section>
  `}function Oe(e,t){let{escapeHtml:n}=t,r=e.latestMatches||[];return r.length?`
    <ul class="admin-detail-list admin-ai-aware-match-list">
      ${r.map(t=>Pe(t,{escapeHtml:n,company:e})).join(``)}
    </ul>
  `:`<p>No stored matches yet.</p>`}function ke(e,t){let{escapeHtml:n,formatDateTime:r,formatAiUsageCost:i=e=>`$${Number(e||0).toFixed(4)}`,actionState:a=``,filter:o=`not_reviewed`,lastResult:s=null,usageSummary:c=null}=t,l=le(e.latestMatches||[],o,e);return`
    <section class="side-panel admin-company-ai-panel">
      <div class="admin-company-ai-header">
        <div>
          <h3>AI match review</h3>
          <p>Run a controlled AI review for current eligible matches. Max 10 per run.</p>
          <p><strong>Auto AI:</strong> ${e.autoAiReviewEnabled?`Enabled`:`Disabled`}</p>
        </div>
        <button class="btn btn-secondary btn-small" type="button" data-action="admin-ai-review-company" data-id="${n(e.id)}" ${a?`disabled`:``}>
          ${a?`Running AI review...`:`Run AI review for this company`}
        </button>
        <button class="btn btn-ghost btn-small" type="button" data-action="admin-ai-review-company" data-id="${n(e.id)}" data-force="true" ${a?`disabled`:``}>
          ${a?`Revalidating...`:`Re-run AI review for this company`}
        </button>
        <button class="btn btn-ghost btn-small" type="button" data-action="admin-toggle-company-auto-ai" data-id="${n(e.id)}" data-enabled="${e.autoAiReviewEnabled?`false`:`true`}">
          ${e.autoAiReviewEnabled?`Disable auto AI`:`Enable auto AI`}
        </button>
      </div>

      ${c?Ae(c,{escapeHtml:n,formatAiUsageCost:i}):``}
      ${s?je(s,n):``}

      <label class="admin-inline-control admin-company-ai-filter">
        <span>AI review filter</span>
        <select data-admin-company-ai-filter>
          ${[[`ai_recommended`,`AI recommended`],[`ai_possible`,`AI possible`],[`needs_review`,`Needs review`],[`outside_service_area`,`Outside service area`],[`not_reviewed`,`Not AI reviewed`]].map(([e,t])=>`<option value="${e}" ${o===e?`selected`:``}>${t}</option>`).join(``)}
        </select>
      </label>

      ${l.length?`
        <ul class="admin-detail-list admin-ai-match-list">
          ${l.map(t=>Fe(t,{escapeHtml:n,formatDateTime:r,company:e})).join(``)}
        </ul>
      `:`<p class="muted-text">No matches for this AI review filter.</p>`}
    </section>
  `}function Ae(e,{escapeHtml:t,formatAiUsageCost:n}){return`
    <div class="admin-ai-usage-summary">
      <span><strong>AI usage today</strong></span>
      <span>${Number(e.reviewsToday||0)} reviews today</span>
      <span>${t(n(e.estimatedCostToday||0))} estimated cost</span>
      <span>${Number(e.remainingReviewsToday||0)} reviews remaining</span>
    </div>
  `}function je(e,t){return`
    <div class="admin-ai-batch-result">
      <strong>Last batch</strong>
      <span>${Number(e.reviewed||0)} reviewed</span>
      <span>${Number(e.strong||0)} strong</span>
      <span>${Number(e.possible||0)} possible</span>
      <span>${Number(e.weak_or_no_fit||0)} weak/no fit</span>
      <span>${Number(e.skipped||0)} skipped</span>
      <span>${Number(e.skipped_outside_service_area||0)} outside service area</span>
      <span>${Number(e.skipped_already_reviewed||0)} already reviewed</span>
      <span>${Number(e.skipped_expired_or_missing_deadline||0)} expired/missing deadline</span>
      <span>${Number(e.skipped_score_too_low||0)} score too low</span>
      <span>${Number(e.skipped_manually_rejected||0)} manually rejected</span>
      ${e.estimated_cost?`<span>${t(e.estimated_cost)}</span>`:``}
    </div>
  `}function Me(e,t){return`
    <div class="admin-ai-batch-result">
      <strong>Last automatic run</strong>
      <span>${Number(e.companies_checked||0)} companies checked</span>
      <span>${Number(e.total_companies_found||0)} total companies</span>
      <span>${Number(e.enabled_companies_found||0)} auto AI enabled</span>
      <span>${Number(e.eligible_companies||0)} eligible companies</span>
      <span>${Number(e.matches_checked||0)} matches checked</span>
      <span>${Number(e.ai_reviews_created||0)} AI reviews created</span>
      <span>${Number(e.skipped_expired||0)} expired</span>
      <span>${Number(e.skipped_missing_deadline||0)} missing deadline</span>
      <span>${Number(e.skipped_outside_service_area||0)} outside service area</span>
      <span>${Number(e.skipped_already_reviewed||0)} already reviewed</span>
      <span>${Number(e.skipped_usage_limit||0)} usage limit</span>
      <span>${Number(e.skipped_no_candidate_matches||0)} no candidate matches</span>
      <span>${Number(e.daily_usage_remaining||0)} daily reviews remaining</span>
      ${e.error?`<span>${t(e.error)}</span>`:``}
    </div>
    ${Ne(e.company_diagnostics||[],t)}
  `}function Ne(e,t){return e.length?`
    <div class="admin-ai-diagnostics">
      ${e.slice(0,8).map(e=>`
        <div>
          <strong>${t(e.company_name||`Company`)}</strong>
          <span>${t(e.reason||`checked`)}</span>
          <span>${Number(e.candidate_matches_found||0)} candidates · ${Number(e.reviewed_count||0)} reviewed</span>
          <span>${Number(e.skipped_already_reviewed||0)} already reviewed · ${Number(e.skipped_missing_deadline||0)} missing deadline · ${Number(e.skipped_outside_service_area||0)} outside area · ${Number(e.skipped_score_too_low||0)} low score</span>
        </div>
      `).join(``)}
    </div>
  `:``}function Pe(e,{escapeHtml:t,company:n}){let r=e.opportunities||{},i=ce(e,n),a=Number(e.match_score||0);return`
    <li class="admin-ai-aware-match ${t(i.tone||`muted`)}">
      <strong>${t(r.title||`Opportunity`)}</strong>
      <span>
        <b>${t(i.label)}</b>
        ${i.confidence?` · ${Math.round(i.confidence*100)}%`:``}
        · Rule score ${a}
        ${i.bucket===`outside_service_area`?` · Rule label suppressed`:` · ${t(e.match_label||`Match`)}`}
      </span>
      ${e.ai_review_skipped_reason?`<small>Skipped: ${t(de(e.ai_review_skipped_reason))}</small>`:``}
      ${e.ai_review_profile_stale?`<small>AI review may be stale because the company profile changed.</small>`:``}
    </li>
  `}function Fe(e,{escapeHtml:t,formatDateTime:n,company:r}){let i=e.opportunities||{},a=ce(e,r),o=a.confidence?` · ${Math.round(a.confidence*100)}%`:``,s=e.ai_reviewed_at?` · ${n(e.ai_reviewed_at)}`:``,c=e.ai_review_skipped_reason?` · Skipped: ${de(e.ai_review_skipped_reason)}`:``;return`
    <li class="admin-ai-match-row ${t(a.tone||`muted`)}">
      <strong>${t(i.title||`Opportunity`)}</strong>
      <span>${t(a.label)}${t(o)}${t(s)}${t(c)}</span>
      ${e.ai_review_profile_stale?`<span>AI review may be stale because the company profile changed.</span>`:``}
      <span>Rule score ${Number(e.match_score||0)} · ${t(e.match_label||`Match`)}</span>
      <span class="admin-ai-debug">company_id=${t(e.company_id||``)} · opportunity_id=${t(e.opportunity_id||``)} · ai_review_found=${e.ai_review_found===!0?`true`:`false`}</span>
    </li>
  `}function Ie({copy:e,suggestions:t,labels:n,escapeHtml:r}){return`
    <div class="dashboard-empty-state">
      <div>
        <p class="eyebrow">${r(e.eyebrow)}</p>
        <h2>${r(e.title)}</h2>
        <p>${r(e.body)}</p>
      </div>
      <ul>
        ${t.map(e=>`<li>${r(e)}</li>`).join(``)}
      </ul>
      <div class="dashboard-empty-actions">
        <button class="btn btn-primary" type="button" data-action="go" data-href="/settings">${r(n.improveProfile)}</button>
        <button class="btn btn-secondary" type="button" data-action="include-national-opportunities">${r(n.includeNationalOpportunities)}</button>
        <button class="btn btn-secondary" type="button" data-action="show-all-matches">${r(n.showAllStoredMatches)}</button>
        <button class="btn btn-secondary" type="button" data-action="show-all-opportunities">${r(n.inspectAllOpportunities)}</button>
      </div>
    </div>
  `}function Le({profile:e,matches:t,stats:n,filters:r,filterSummary:i,matchStatus:a,opportunityLoadError:o,isAdmin:s,matchingLoading:c,labels:l,renderFilterDropdown:u,renderOpportunityCard:d,renderEmptyState:f,escapeHtml:p}){return`
    <section class="dashboard-head">
      <div>
        <p class="eyebrow">${p(l.dashboard)}</p>
        <h1>${p(l.welcomeCompany)}</h1>
        <p>${p(l.dashboardIntro)}</p>
      </div>
      <div class="dashboard-actions">
        ${s?`
          <button class="btn btn-primary" data-action="run-matching" ${c?`disabled`:``}>
            ${p(c?l.refreshing:l.refreshMatches)}
          </button>
        `:``}
        <button class="btn btn-secondary" data-action="go" data-href="/report">${p(l.viewWeeklyReport)}</button>
      </div>
    </section>

    ${a?`
      <div class="admin-message ${a.type===`error`?`is-error`:`is-success`}">
        ${p(a.text)}
      </div>
    `:``}

    ${o?`
      <div class="note-panel">
        ${p(o)}
      </div>
    `:``}

    <section class="stats-grid">
      <div class="stat-card"><span>${p(l.strongMatches)}</span><strong>${n.strong}</strong></div>
      <div class="stat-card"><span>${p(l.closingSoon)}</span><strong>${n.closingSoon}</strong></div>
      <div class="stat-card"><span>${p(l.savedLabel)}</span><strong>${n.savedCount}</strong></div>
      <div class="stat-card"><span>${p(l.totalPotentialValue)}</span><strong>${n.totalValue}</strong></div>
    </section>

    <section class="filters">
      <input data-filter="search" value="${p(r.search)}" placeholder="${p(l.searchOpportunities)}" />
      ${u(`label`)}
      ${u(`category`)}
      ${u(`location`)}
      ${u(`type`)}
      <label class="checkbox compact"><input type="checkbox" data-filter="savedOnly" ${r.savedOnly?`checked`:``}/><span>${p(l.savedOnly)}</span></label>
    </section>

    <div class="note-panel dashboard-filter-summary">
      ${p(i)}
    </div>

    <section class="opportunity-list">
      ${t.length?t.map(d).join(``):f(e)}
    </section>
  `}function Re({opp:e,saved:t,deadline:n,sourceBadgeHtml:r,qualityBadgeHtml:i,safetyBadgeHtml:a,extractedBadgeHtml:o,originalLanguageBadgeHtml:s,matchBadgeClass:c,matchLabel:l,buyer:u,location:d,value:f,reasons:p,labels:m,escapeHtml:h}){return`
    <article class="opportunity-card">
      <div class="opp-main">
        <div class="opp-top">
          <div class="opportunity-badges">
            ${r}
            ${i}
            ${a}
            ${o}
            ${s}
          </div>
          <span class="${c}">${h(l)} · ${e.matchScore}</span>
        </div>
        <h3>${h(e.title)}</h3>
        <p>${h(e.description)}</p>
        <div class="meta-row">
          <span>${h(u)}</span>
          <span>${h(d)}</span>
          <span>${f}</span>
          <span class="${n.className}">${h(n.label)}</span>
        </div>
        <div class="reason-row">
          ${p.slice(0,3).map(e=>`<span>${h(e)}</span>`).join(``)}
        </div>
      </div>
      <div class="opp-actions">
        <button class="btn btn-secondary" data-action="details" data-id="${e.id}">${h(m.details)}</button>
        <button class="btn ${t?`btn-primary`:`btn-secondary`}" data-action="save" data-id="${e.id}">${h(t?m.saved:m.save)}</button>
        <button class="btn btn-ghost" data-action="ignore" data-id="${e.id}">${h(m.ignore)}</button>
      </div>
    </article>
  `}function ze({opp:e,saved:t,deadline:n,requirements:r,matchReasons:i,risks:a,safetyReasons:o,nextSteps:s,matchBadgeClass:c,matchLabel:l,qualityBadgeHtml:u,safetyBadgeHtml:d,extractedBadgeHtml:f,qualityWarningHtml:p,buyerSummary:m,location:h,value:ee,sourceUrl:g,extractedDetails:te,qualityLabel:ne,safetyStatusLine:re,category:ie,type:ae,publishedDate:oe,cpvCode:_,labels:v,escapeHtml:y}){return`
    <div class="modal-backdrop">
      <div class="modal" role="dialog" aria-modal="true">
        <div class="modal-header">
          <div>
            <div class="opportunity-badges">
              <span class="${c}">${y(l)} · ${e.matchScore}</span>
              ${u}
              ${d}
              ${f}
            </div>
            <h2>${y(e.title)}</h2>
            <p>${y(m)} · ${y(h)} · ${ee}</p>
          </div>
          <button type="button" class="icon-btn modal-close-btn" data-action="close-modal" aria-label="Close details">×</button>
        </div>

        <div class="modal-body">
          <div class="modal-grid">
            <section>
              ${p}
              <h3>${y(v.description)}</h3>
              <p>${y(e.description||v.noDescription)}</p>
              <h3>${y(v.requirements)}</h3>
              <ul class="check-list">
                ${(r.length?r:[v.noSpecificRequirements]).map(e=>`<li>${y(e)}</li>`).join(``)}
              </ul>
              <h3>${y(v.matchReasons)}</h3>
              <ul class="check-list">
                ${(i.length?i:[v.noMatchReasons]).map(e=>`<li>${y(e)}</li>`).join(``)}
              </ul>
            </section>

            <aside class="side-panel">
              <h3>${y(v.opportunityInfo)}</h3>
              <p><strong>${y(v.source)}:</strong> ${y(v.sourceValue)}</p>
              ${te}
              <p><strong>${y(v.quality)}:</strong> ${y(ne)}</p>
              ${re}
              <p><strong>${y(v.category)}:</strong> ${y(ie)}</p>
              <p><strong>${y(v.type)}:</strong> ${y(ae)}</p>
              <p><strong>${y(v.deadline)}:</strong> <span class="${n.className}">${y(v.deadlineLabel)}</span></p>
              <p><strong>${y(v.published)}:</strong> ${y(oe)}</p>
              <p><strong>${y(v.cpv)}:</strong> ${y(_||`—`)}</p>

              <h3>${y(v.risksToCheck)}</h3>
              <ul class="risk-list">
                ${(o.length?o:a).map(e=>`<li>${y(e)}</li>`).join(``)}
              </ul>

              <h3>${y(v.recommendedNextSteps)}</h3>
              <ol class="steps-list">
                ${(s.length?s:[v.openSourceAndConfirm]).map(e=>`<li>${y(e)}</li>`).join(``)}
              </ol>

              <div class="button-stack">
                <button class="btn btn-primary" data-action="save" data-id="${e.id}">${y(t?v.removeFromSaved:v.saveOpportunity)}</button>
                <a class="btn btn-secondary" href="${y(g)}" target="_blank" rel="noreferrer">${y(v.openSource)}</a>
                <button class="btn btn-ghost" data-action="ignore" data-id="${e.id}">${y(v.markNotRelevant)}</button>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  `}function Be(e,t){return e.map(e=>`<p>${t(e)}</p>`).join(``)}function Ve({language:e,escapeHtml:t,eyebrow:n,title:r,intro:i,sections:a}){let o=e===`is`?`Síðast uppfært`:`Last updated`,s=e===`is`?`4. júní 2026`:`June 4, 2026`;return`
    <section class="legal-page">
      <div class="legal-hero">
        <p class="eyebrow">${t(n)}</p>
        <h1>${t(r)}</h1>
        <p>${t(i)}</p>
        <span>${t(o)}: ${t(s)}</span>
      </div>
      <div class="legal-layout">
        ${a.map(([e,n])=>`
          <section class="legal-section">
            <h2>${t(e)}</h2>
            <div class="legal-content">${Be(n,t)}</div>
          </section>
        `).join(``)}
      </div>
    </section>
  `}function He({t:e,escapeHtml:t,language:n,trialHref:r}){let i=n===`is`,a=i?[{title:`Gatnagerð og lagnir við nýtt hverfi`,type:`1`,score:`Sterk samsvörun · Skilafrestur eftir 10 daga`},{title:`Lóðarframkvæmdir við skóla`,type:`2`,score:`Passar við lóðarvinnu · Staðfesta gögn`},{title:`Bílastæði og yfirborðsfrágangur`,type:`3`,score:`Möguleg samsvörun · Opna heimild`}]:[{title:`Roadworks and utilities for a new neighborhood`,type:`1`,score:`Strong match · Deadline in 10 days`},{title:`Site works at a school`,type:`2`,score:`Fits site work · Verify documents`},{title:`Parking area and surface finishing`,type:`3`,score:`Possible match · Open source`}],o=i?[[`Jarðvinna og gatnagerð`,`Útboð um vegi, lóðir, bílastæði, stíga og jarðvegsvinnu.`],[`Lagnavinna og fráveita`,`Verkefni um lagnir, dælustöðvar, fráveitu, vatn og hitaveitu.`],[`Malbikun og lóðarframkvæmdir`,`Gatnagerð, yfirborðsfrágangur, gangstéttir og viðhald.`],[`Rafverktakar`,`Raflagnir, brunakerfi, lýsing, öryggiskerfi og hleðslustöðvar.`],[`Ræstingar og þjónusta`,`Reglulegir þjónustusamningar, húsþjónusta og rekstrarverkefni.`],[`Verkfræðistofur og ráðgjafar`,`Hönnun, eftirlit, ráðgjöf og verkefnastjórnun þegar það á við.`]]:[[`Earthworks and roadworks`,`Tenders for roads, plots, parking areas, paths and earthworks.`],[`Utilities and drainage`,`Projects for pipes, pumping stations, drainage, water and heating utilities.`],[`Paving and site works`,`Road construction, surface finishing, sidewalks and maintenance.`],[`Electrical contractors`,`Wiring, fire alarms, lighting, security systems and chargers.`],[`Cleaning and services`,`Recurring service contracts, facility services and operations work.`],[`Engineering and advisors`,`Design, supervision, consulting and project management where relevant.`]];return`
    <section class="hero">
      <div class="hero-copy">
        <p class="eyebrow">${t(e(`heroEyebrow`))}</p>
        <h1>${t(e(`heroTitle`))}</h1>
        <p class="hero-text">
          ${t(e(`heroText`))}
        </p>
        <div class="hero-actions">
          <button class="btn btn-primary btn-large" data-action="go" data-href="${t(r)}">${t(e(`createFreeDemoProfile`))} <span aria-hidden="true">&rarr;</span></button>
          <button class="btn btn-secondary btn-large" data-action="scroll-to" data-target="sample-report">${t(e(`viewSampleReport`))}</button>
        </div>
        <div class="proof-lines" aria-label="Product proof">
          <strong>${t(e(`proofStrong`))}</strong>
          <span>${t(e(`proofText`))}</span>
        </div>
      </div>
      <div class="product-shot hero-card" aria-label="VerkRadar product preview">
        <div class="shot-topbar">
          <span>VERKRADAR / ${t(i?`JARÐVINNUFYRIRTÆKI EHF.`:`CIVIL CONTRACTOR LTD.`)}</span>
          <span>${new Date().toLocaleDateString(i?`is-IS`:`en-GB`,{day:`2-digit`,month:`short`})}</span>
        </div>
        <div class="shot-metric">
          <span>${t(e(`bestOpenMatch`))}</span>
          <strong>${t(i?`3 verkefni sem passa`:`3 matching projects`)}</strong>
        </div>
        <div class="shot-row is-active">
          <div>
            <span class="shot-label">${t(a[0].type)}</span>
            <h3>${t(a[0].title)}</h3>
            <p>${t(a[0].score)}</p>
          </div>
        </div>
        ${a.slice(1,3).map(e=>`
          <div class="shot-row">
            <div>
              <span class="shot-label">${t(e.type)}</span>
              <h3>${t(e.title)}</h3>
              <p>${t(e.score)}</p>
            </div>
          </div>
        `).join(``)}
        <div class="shot-footer">
          <span>${t(e(`deadlineRisk`))}</span>
          <strong>${t(i?`2 verkefni`:`2 projects`)}</strong>
        </div>
      </div>
    </section>

    <section class="problem-section">
      <div class="section-copy">
        <p class="eyebrow">${t(e(`problemEyebrow`))}</p>
        <h2>${t(e(`problemTitle`))}</h2>
      </div>
      <div class="problem-table">
        <div class="problem-row">
          <span>01</span>
          <h3>${t(e(`problemOneTitle`))}</h3>
          <p>${t(e(`problemOneText`))}</p>
        </div>
        <div class="problem-row">
          <span>02</span>
          <h3>${t(e(`problemTwoTitle`))}</h3>
          <p>${t(e(`problemTwoText`))}</p>
        </div>
      </div>
    </section>

    <section class="section target-section">
      <div class="section-copy">
        <p class="eyebrow">${t(e(`targetEyebrow`))}</p>
        <h2>${t(e(`targetTitle`))}</h2>
        <p>${t(e(`targetText`))}</p>
      </div>
      <div class="feature-grid target-grid">
        ${o.map(([e,n])=>`
          <div class="feature-card">
            <h3>${t(e)}</h3>
            <p>${t(n)}</p>
          </div>
        `).join(``)}
      </div>
    </section>

    <section id="how-it-works" class="section section-grid reversed how-it-works-section">
      <div class="feature-grid">
        <div class="feature-card"><h3>${t(e(`createProfileStep`))}</h3><p>${t(e(`createProfileStepText`))}</p></div>
        <div class="feature-card"><h3>${t(e(`matchProjectsStep`))}</h3><p>${t(e(`matchProjectsStepText`))}</p></div>
        <div class="feature-card"><h3>${t(e(`getReportStep`))}</h3><p>${t(e(`getReportStepText`))}</p></div>
      </div>
      <div class="section-copy">
        <p class="eyebrow">${t(e(`solutionEyebrow`))}</p>
        <h2>${t(e(`solutionTitle`))}</h2>
        <p>${t(e(`solutionText`))}</p>
      </div>
    </section>

    <section id="sample-report" class="section sample-report-section public-sample-report-page">
      <div class="section-copy">
        <p class="eyebrow">${t(e(`sampleReportEyebrow`))}</p>
        <h2>${t(e(`sampleReportTitle`))}</h2>
        <p>${t(e(`sampleReportText`))}</p>
      </div>
      <div class="public-report-preview">
        <div class="report-topbar">
          <span>${t(e(`reportTitle`))}</span>
          <span>Jarðtækni ehf.</span>
        </div>
        <article class="report-item">
          <h3>${t(i?`Gatnagerð og lagnir á Akranesi`:`Roadworks and utilities in Akranes`)}</h3>
          <p><strong>${t(e(`buyer`))}:</strong> ${t(i?`Akraneskaupstaður`:`Akranes Municipality`)}</p>
          <p><strong>${t(e(`deadline`))}:</strong> ${t(e(`daysLeft`,{count:18}))} · <strong>${t(e(`possibleMatch`))}:</strong> 92/100</p>
          <ul>
            <li>${t(i?`Nefnir gatnagerð og lagnir sem passa við verkflokka fyrirtækisins.`:`Mentions roadworks and utilities that match the company profile.`)}</li>
            <li>${t(i?`Svæðið er innan valins þjónustusvæðis.`:`The area is inside the selected service region.`)}</li>
            <li>${t(i?`Verkefnið er þess virði að staðfesta í upprunalegum útboðsgögnum.`:`The project is worth verifying in the original tender documents.`)}</li>
          </ul>
          <p><strong>${t(e(`openSource`))}:</strong> ${i?`Opnið heimild og staðfestið skilafrest, kröfur og gögn.`:`Open the source and confirm deadline, requirements and documents.`}</p>
        </article>
        <article class="report-item">
          <h3>${t(i?`Lóðarframkvæmdir við Myllubakkaskóla`:`Site works at Myllubakkaskóli`)}</h3>
          <p><strong>${t(e(`buyer`))}:</strong> ${t(i?`Reykjanesbær`:`Reykjanesbær Municipality`)}</p>
          <p><strong>${t(e(`deadline`))}:</strong> ${t(e(`daysLeft`,{count:24}))} · <strong>${t(e(`possibleMatch`))}:</strong> 86/100</p>
          <ul>
            <li>${t(i?`Inniheldur leitarorð: lóðarframkvæmdir, yfirborðsfrágangur.`:`Contains keywords: site works, surface finishing.`)}</li>
            <li>${t(i?`Passar við jarðvinnu, frágang og verk á lóðum.`:`Fits earthworks, finishing and site work services.`)}</li>
          </ul>
        </article>
        <article class="report-item">
          <h3>${t(i?`Verðfyrirspurn - Sandbakki - gatnagerð`:`Quote request - Sandbakki roadworks`)}</h3>
          <p><strong>${t(e(`buyer`))}:</strong> ${t(i?`Opinber verkkaupi`:`Public buyer`)}</p>
          <p><strong>${t(e(`deadline`))}:</strong> ${t(e(`daysLeft`,{count:11}))} · <strong>${t(e(`possibleMatch`))}:</strong> 83/100</p>
          <ul>
            <li>${t(i?`Skýr verðfyrirspurn með gatnagerð í titli.`:`Clear quote request with roadworks in the title.`)}</li>
            <li>${t(i?`Stuttur frestur, því þarf að bregðast hratt við.`:`Short deadline, so it needs quick review.`)}</li>
          </ul>
        </article>
        <p class="source-disclaimer">${t(e(`sourceDisclaimer`))}</p>
      </div>
    </section>

    <section class="cta-panel">
      <h2>${t(e(`tryDemoTitle`))}</h2>
      <p>${t(e(`tryDemoText`))}</p>
      <button class="btn btn-primary" data-action="load-demo">${t(e(`loadDemoCompany`))}</button>
    </section>
  `}function Ue({t:e,escapeHtml:t,trialHref:n}){let r=[{key:`basic`,name:e(`pricingStarter`),price:`9.900 kr`,items:[e(`pricingWeeklyReport`),e(`pricingFiveMatches`),e(`pricingBasicMatching`),e(`pricingDeadlineReminders`),e(`pricingOneProfile`)]},{key:`pro`,name:e(`pricingGrowth`),price:`19.900 kr`,highlighted:!0,items:[e(`pricingEverythingStarter`),e(`pricingMoreSources`),e(`pricingSummaries`),e(`pricingLabels`),e(`pricingSaved`),e(`pricingArchive`)]},{key:`priority`,name:e(`pricingPro`),price:`29.900 kr`,items:[e(`pricingEverythingGrowth`),e(`pricingDocumentSummaries`),e(`pricingRequirements`),e(`pricingRiskWarnings`),e(`pricingBidChecklist`),e(`pricingPrioritySupport`)]}];return`
    <section class="page-head">
      <p class="eyebrow">${t(e(`pricingEyebrow`))}</p>
      <h1>${t(e(`pricingHeadline`))}</h1>
      <p>${t(e(`pricingSubtitle`))}</p>
    </section>

    <section class="pricing-grid">
      ${r.map(r=>We(r,{t:e,escapeHtml:t,trialHref:n})).join(``)}
    </section>
  `}function We(e,{t,escapeHtml:n,trialHref:r}){let i=!!e.highlighted,a=`${r}${String(r).includes(`?`)?`&`:`?`}plan=${encodeURIComponent(e.key||`basic`)}`;return`
    <div class="pricing-card ${i?`highlighted`:``}">
      ${i?`<span class="popular">${n(t(`pricingBadge`))}</span>`:``}
      <h2>${n(e.name)}</h2>
      <p class="price">${n(e.price)}<span>${n(t(`pricingMonth`))}</span></p>
      <ul class="check-list">
        ${e.items.map(e=>`<li>${n(e)}</li>`).join(``)}
      </ul>
      <button class="btn pricing-cta ${i?`btn-primary`:`btn-secondary`}" data-action="go" data-href="${n(a)}">${n(t(`pricingCta`))}</button>
      <p class="pricing-trial-note">${n(t(`pricingTrialNoCard`))}</p>
    </div>
  `}var Ge=[`Reykjavík`,`Capital Area`,`Suðurnes`,`South Iceland`,`West Iceland`,`North Iceland`,`East Iceland`,`Westfjords`,`All Iceland`,`Remote / Online`];function Ke(e){let{t,escapeHtml:n,profileDraft:r,renderCustomDropdown:i,getFilterOptions:a}=e,o=r.industry||``;return`
    <div class="form-section">
      <h2>${n(t(`companyBasics`))}</h2>
      <div class="form-grid">
        <label>${n(t(`companyName`))}<input name="companyName" data-profile-field="companyName" value="${n(r.companyName||``)}" required /></label>
        <label>${n(t(`kennitala`))}<input name="kennitala" data-profile-field="kennitala" value="${n(r.kennitala||``)}" required /></label>
        <label>${n(t(`contactEmail`))}<input name="contactEmail" type="email" data-profile-field="contactEmail" value="${n(r.contactEmail||``)}" required /></label>
        <label>${n(t(`billingEmail`))}<input name="billingEmail" type="email" data-profile-field="billingEmail" value="${n(r.billingEmail||``)}" required /></label>
        <label>${n(t(`contactName`))}<input name="contactName" data-profile-field="contactName" value="${n(r.contactName||``)}" required /></label>
        <label>${n(t(`phone`))}<input name="phone" data-profile-field="phone" value="${n(r.phone||``)}" required /></label>
        <label>${n(t(`address`))}<input name="address" data-profile-field="address" value="${n(r.address||``)}" required /></label>
        <label>${n(t(`website`))}<input name="website" data-profile-field="website" value="${n(r.website||``)}" /></label>
        <label>${n(t(`selectedPlan`))}
          <select name="selectedPlan" data-profile-field="selectedPlan">
            ${[`basic`,`pro`,`priority`].map(e=>`<option value="${e}" ${String(r.selectedPlan||`basic`)===e?`selected`:``}>${n(t(`plan_${e}`))}</option>`).join(``)}
          </select>
        </label>
        <label class="custom-select-field">${n(t(`industry`))}
          <input id="industry-input" type="hidden" name="industry" value="${n(o)}" required />
          ${i({key:`industry`,value:o,options:a(`industry`),profileField:`industry`})}
        </label>
      </div>
    </div>
  `}function qe(e){let{t,escapeHtml:n,profileDraft:r,arrayFieldText:i,getProfileSuggestions:a,renderSuggestionChips:o}=e,s=r.industry||``,c=a(`services`,s),l=a(`includeKeywords`,s);return`
    <div class="form-section">
      <h2>${n(t(`servicesAndKeywords`))}</h2>
      <p class="form-section-hint">${n(t(`servicesHint`))}</p>
      <label>${n(t(`servicesLabel`))}
        <textarea name="services" data-profile-field="services" data-profile-array="true" rows="3">${n(i(r.services))}</textarea>
      </label>
      <p class="field-helper">${n(t(`servicesHelper`))}</p>
      ${o({field:`services`,title:s?t(`suggestedServicesFor`,{industry:s}):t(`selectIndustryForServices`),values:c,selectedValues:r.services||[]})}
      <div class="form-grid keyword-grid">
        <label class="profile-keyword-field">${n(t(`extraWords`))}
          <input name="includeKeywords" data-profile-field="includeKeywords" data-profile-array="true" value="${n(i(r.includeKeywords))}" />
          <span class="field-helper inline-helper">${n(t(`includeKeywordsHelper`))}</span>
        </label>
        <label class="profile-keyword-field">${n(t(`excludeWords`))}
          <input name="excludeKeywords" data-profile-field="excludeKeywords" data-profile-array="true" value="${n(i(r.excludeKeywords))}" />
          <span class="field-helper inline-helper">${n(t(`excludeKeywordsHelper`))}</span>
        </label>
      </div>
      ${o({field:`includeKeywords`,title:s?t(`suggestedKeywordsFor`,{industry:s}):t(`selectIndustryForKeywords`),values:l,selectedValues:r.includeKeywords||[]})}
    </div>
  `}function Je(e){let{t,escapeHtml:n,profileDraft:r,arrayFieldText:i,formatCustomerLocation:a}=e;return`
    <div class="form-section">
      <h2>${n(t(`locationsTitle`))}</h2>
      <p class="form-section-hint">${n(t(`locationsHint`))}</p>
      <div class="form-grid">
        <label>${n(t(`baseLocation`))}
          <input name="baseLocation" data-profile-field="baseLocation" value="${n(r.baseLocation||``)}" placeholder="${n(t(`baseLocationPlaceholder`))}" />
        </label>
        <label>${n(t(`serviceAreas`))}
          <input name="serviceAreas" data-profile-field="serviceAreas" data-profile-array="true" value="${n(i(r.serviceAreas))}" placeholder="${n(t(`serviceAreasPlaceholder`))}" />
        </label>
      </div>
      <div class="checkbox-grid">
        ${Ge.map(e=>`
          <label class="checkbox">
            <input type="checkbox" name="locations" value="${e}" data-profile-location ${(r.locations||[]).includes(e)?`checked`:``} />
            <span>${n(a(e))}</span>
          </label>
        `).join(``)}
      </div>
      <div class="profile-travel-panel">
        <h3>${n(t(`travelScope`))}</h3>
        <div class="profile-travel-grid">
          <label class="checkbox inline"><input type="checkbox" name="willingToTravel" data-profile-field="willingToTravel" ${r.willingToTravel?`checked`:``} /><span>${n(t(`willingToTravel`))}</span></label>
          <label class="checkbox inline"><input type="checkbox" name="nationalProjects" data-profile-field="nationalProjects" ${r.nationalProjects?`checked`:``} /><span>${n(t(`includeNational`))}</span></label>
          <label class="checkbox inline"><input type="checkbox" name="remoteProjects" data-profile-field="remoteProjects" ${r.remoteProjects?`checked`:``} /><span>${n(t(`includeRemote`))}</span></label>
          <label>${n(t(`minimumTravelValue`))}
            <input name="minimumProjectValueForTravel" type="number" data-profile-field="minimumProjectValueForTravel" data-profile-number="true" value="${r.minimumProjectValueForTravel||``}" />
          </label>
        </div>
      </div>
    </div>
  `}function Ye(e){let{t,escapeHtml:n,profileDraft:r}=e;return`
    <div class="form-section">
      <h2>${n(t(`projectSize`))}</h2>
      <div class="form-grid">
        <label>${n(t(`minimumValue`))}<input name="minProjectValue" type="number" data-profile-field="minProjectValue" data-profile-number="true" value="${r.minProjectValue||``}" /></label>
        <label>${n(t(`maximumValue`))}<input name="maxProjectValue" type="number" data-profile-field="maxProjectValue" data-profile-number="true" value="${r.maxProjectValue||``}" /></label>
      </div>
      <label class="checkbox inline">
        <input type="checkbox" name="allowUnknownValue" data-profile-field="allowUnknownValue" ${r.allowUnknownValue?`checked`:``} />
        <span>${n(t(`showUnknownValue`))}</span>
      </label>
    </div>
  `}function Xe(e){let{t,escapeHtml:n,capitalize:r,profileDraft:i}=e;return`
    <div class="form-section">
      <h2>${n(t(`reportPreferences`))}</h2>
      <div class="form-grid">
        <label>${n(t(`frequency`))}
          <select name="reportFrequency" data-profile-field="reportFrequency">
            <option ${i.reportFrequency===`weekly`?`selected`:``} value="weekly">${n(t(`weekly`))}</option>
            <option ${i.reportFrequency===`daily`?`selected`:``} value="daily">${n(t(`daily`))}</option>
          </select>
        </label>
        <label>${n(t(`reportDay`))}
          <select name="reportDay" data-profile-field="reportDay">
            ${[`monday`,`tuesday`,`wednesday`,`thursday`,`friday`].map(e=>`<option ${i.reportDay===e?`selected`:``} value="${e}">${r(e)}</option>`).join(``)}
          </select>
        </label>
      </div>
      <label class="checkbox inline"><input type="checkbox" name="deadlineReminders" data-profile-field="deadlineReminders" ${i.deadlineReminders?`checked`:``} /><span>${n(t(`deadlineReminders`))}</span></label>
      <label class="checkbox inline"><input type="checkbox" name="includeLowConfidence" data-profile-field="includeLowConfidence" ${i.includeLowConfidence?`checked`:``} /><span>${n(t(`includeLowConfidence`))}</span></label>
    </div>
  `}function Ze(e){let{t,escapeHtml:n,hasProfile:r,isSavingProfile:i,profileSaved:a,profileSaveMessage:o,profileSaveError:s}=e,c=t(r?`saveProfile`:`createProfile`);return`
    <div class="form-actions">
      <button
        type="submit"
        class="btn btn-primary btn-large"
        ${i?`disabled`:``}
      >
        ${n(i?t(`saving`):a?t(`saved`):c)}
      </button>
    </div>
    ${o?`
      <div class="form-message success">
        ${n(o)}
      </div>
    `:``}
    ${s?`
      <div class="form-message error">
        ${n(s)}
      </div>
    `:``}
  `}function Qe(e){return`
    <form id="profile-form" class="form-card settings-profile-form">
      ${Ke(e)}
      ${qe(e)}
      ${Je(e)}
      ${Ye(e)}
      ${Xe(e)}
      ${Ze(e)}
    </form>
  `}function $e({report:e,title:t,created:n,itemLabel:r,statusLabel:i,hideLabel:a,viewLabel:o,escapeHtml:s}){return`
    <div class="report-archive-row">
      <div>
        <h3>${s(t)}</h3>
        <p>${s(n)} · ${s(r)} · ${s(i)}</p>
      </div>
      <div class="admin-row-actions">
        <button class="btn btn-secondary" data-action="view-report" data-id="${s(e.id)}">${s(o)}</button>
        <button class="btn btn-ghost btn-small" data-action="archive-report" data-id="${s(e.id)}">${s(a)}</button>
      </div>
    </div>
  `}function et({report:e,options:t={},companyName:n,dateRange:r,generatedByLabel:i,reportTitleLabel:a,closeLabel:o,escapeHtml:s}){return`
    <section class="report-preview"${t.id?` id="${s(t.id)}"`:``}>
      <div class="report-meta-bar">
        <div>
          <span>${s(i)}</span>
          <strong>${s(e.title||a)}</strong>
        </div>
        <div>
          <span>${s(n)}</span>
          <strong>${s(r)}</strong>
        </div>
      </div>
      <div class="report-body">
        ${e.htmlContent}
        ${t.closeButton?`<button class="btn btn-secondary report-close-btn" data-action="close-archive-report">${s(o)}</button>`:``}
      </div>
      ${e.textContent&&t.includeTextArea!==!1?`<textarea id="report-text" class="hidden-textarea">${s(e.textContent)}</textarea>`:``}
    </section>
  `}function tt({label:e,value:t,escapeHtml:n}){return`
    <div class="report-summary-card">
      <span>${n(e)}</span>
      <strong>${t}</strong>
    </div>
  `}function nt({title:e,description:t,opportunities:n,emptyText:r,renderOpportunityItem:i,escapeHtml:a}){return`
    <section class="report-section">
      <div class="report-section-head">
        <h3>${a(e)}</h3>
        <p>${a(t)}</p>
      </div>
      ${n.length?n.map(i).join(``):`<div class="report-empty">${a(r)}</div>`}
    </section>
  `}function rt({opp:e,valueText:t,deadlineText:n,sourceUrl:r,risks:i,fallbackReason:a,qualityBadgeHtml:o,matchBadgeClass:s,matchLabel:c,statusText:l,buyerLabel:u,buyerValue:d,sourceLabel:f,sourceValue:p,areaLabel:m,areaValue:h,deadlineLabel:ee,valueLabel:g,whyLabel:te,risksLabel:ne,openSourceLabel:re,sourceMissingLabel:ie,formatReason:ae,formatRisk:oe,escapeHtml:_}){let v=(e.matchReasons.length?e.matchReasons:[a]).slice(0,4);return`
    <article class="report-item">
      <div class="report-item-top">
        ${o}
        <span class="${s}">${_(c)} ${e.matchScore}</span>
      </div>
      <h4>${_(e.title)}</h4>
      ${l?`<p class="report-item-status">${_(l)}</p>`:``}
      <div class="report-facts">
        <span><strong>${_(u)}</strong>${_(d)}</span>
        <span><strong>${_(f)}</strong>${_(p)}</span>
        <span><strong>${_(m)}</strong>${_(h)}</span>
        <span><strong>${_(ee)}</strong><em>${_(n)}</em></span>
        <span><strong>${_(g)}</strong><em>${_(t)}</em></span>
      </div>
      <div class="report-detail-grid">
        <div>
          <h5>${_(te)}</h5>
          <ul>${v.map(e=>`<li>${_(ae(e))}</li>`).join(``)}</ul>
        </div>
        <div>
          <h5>${_(ne)}</h5>
          <ul>${i.slice(0,5).map(e=>`<li>${_(oe(e))}</li>`).join(``)}</ul>
        </div>
      </div>
      ${r?`<a class="report-source-link" href="${_(r)}" target="_blank" rel="noopener">${_(re)} <span aria-hidden="true">↗</span></a>`:`<span class="report-source-link is-disabled">${_(ie)}</span>`}
    </article>
  `}function it({status:e,label:t,escapeHtml:n}){return`<span class="report-quality ${n(e)}">${n(t)}</span>`}function at({t:e,escapeHtml:t,language:n,profileDraftDirty:r,profileLoadError:i,showDemoReset:a,profileFormHtml:o}){return`
    <section class="page-head">
      <p class="eyebrow">${t(e(`navSettings`))}</p>
      <h1>${t(n===`is`?`Breyta prófíl`:`Edit profile`)}</h1>
      <p>${t(n===`is`?`Uppfærið fyrirtækjaprófíl og samsvörunarstillingar.`:`Update your company profile and matching preferences.`)}</p>
      ${r?`<div class="form-message warning">${t(n===`is`?`Óvistaðar breytingar`:`Unsaved changes`)}</div>`:``}
      ${i?`
        <div class="form-message error">
          ${t(i)}
          <button class="btn btn-secondary" type="button" data-action="retry-settings-profile">${t(n===`is`?`Reyna aftur`:`Retry`)}</button>
        </div>
      `:``}
    </section>
    ${o}
    ${a?`<section class="danger-zone">
      <h2>Reset demo</h2>
      <p>This clears localStorage profile, saved and ignored opportunities.</p>
      <button class="btn btn-ghost" data-action="reset">Reset all demo data</button>
    </section>`:``}
  `}var ot=[[`Tender and opportunity report`,`Útboðs- og verkefnayfirlit`],[`Weekly Opportunity Report`,`Útboðs- og verkefnayfirlit`],[`Open tenders / quote requests`,`Opin útboð / verðfyrirspurnir`],[`Possible upcoming opportunities`,`Möguleg væntanleg tækifæri`],[`Needs review`,`Þarfnast staðfestingar`],[`Strong match`,`Sterk samsvörun`],[`Good match`,`Góð samsvörun`],[`Possible match`,`Möguleg samsvörun`],[`Weak match`,`Veik samsvörun`],[`Quality`,`Gæði`],[`Buyer`,`Kaupandi`],[`Source`,`Heimild`],[`Location`,`Svæði`],[`Deadline`,`Skilafrestur`],[`Estimated value`,`Áætlað verðmæti`],[`Value`,`Áætlað verðmæti`],[`Why this matters`,`Af hverju þetta gæti skipt máli`],[`Why this fits`,`Af hverju þetta gæti skipt máli`],[`Risks / things to check`,`Atriði til að staðfesta`],[`Open source`,`Opna heimild`],[`Unknown buyer`,`Óþekktur kaupandi`],[`All Iceland`,`Allt landið`],[`Not found`,`Fannst ekki`],[`Not listed`,`Ekki gefið upp`]];function st(e,t){return t===`is`?ot.reduce((e,[t,n])=>e.replaceAll(t,n),String(e||``)):e}function ct(e){return Array.from(new Set((e||[]).map(e=>String(e||``).trim()).filter(Boolean)))}function lt(e){return String(e||``).replace(/^mentions your service:\s*/i,``).replace(/^contains your keyword:\s*/i,``).replace(/^mentions core service:\s*/i,``).replace(/^nefnir þjónustu ykkar:\s*/i,``).replace(/^inniheldur leitarorð:\s*/i,``).replace(/^nefnir lykilþjónustu:\s*/i,``).trim()}function b(e,t=`is`){let n=t!==`en`;return{downloadPdf:n?`Sækja PDF`:`Download PDF`,copyReportEmail:n?`Afrita skýrslupóst`:`Copy report email`,markAsSent:n?`Merkja sem sent`:`Mark as sent`,marking:n?`Merkir...`:`Marking...`,close:n?`Loka`:`Close`,sentStatus:n?`Sendingarstaða`:`Sent status`,notSent:n?`Ekki sent`:`Not sent`,sentOn:n?`Sent`:`Sent on`,company:n?`Fyrirtæki`:`Company`,period:n?`Tímabil`:`Period`,generatedAt:n?`Útbúið`:`Generated at`,mode:n?`Gerð`:`Mode`,items:n?`Fjöldi`:`Items`,currentActive:n?`Núverandi virk tækifæri`:`Current active opportunities`,newOpportunities:n?`Ný tækifæri`:`New opportunities`,reasons:n?`Ástæður`:`Reasons`,openSource:n?`Opna heimild`:`Open source`,verifyBadge:n?`Staðfesta gögn`:`Verify documents`,verifyTenderDocs:n?`Staðfesta útboðsgögn`:`Verify tender documents`,verificationSentence:n?`Staðfesta þarf útboðsgögn áður en brugðist er við.`:`Tender documents should be verified before taking action.`,matchScore:n?`Samsvörun`:`Match`,strongMatchScore:n?`Sterk samsvörun`:`Strong match`,openActiveTitle:n?`Opin útboð / virk tækifæri`:`Open tenders / active opportunities`,openActiveDescription:n?`Opin útboð eða virk verðfyrirspurnaratriði með skilafresti. Yfirfarið frumgögn áður en brugðist er við.`:`Open tenders or active quote-request items with deadlines. Review source documents before acting.`,possibleTitle:n?`Möguleg tækifæri til skoðunar`:`Possible opportunities to review`,possibleDescription:n?`Tækifæri sem gætu átt við, en þar sem þarf að staðfesta umfang, kröfur eða hlutverk fyrirtækisins.`:`Opportunities that may fit, but where scope, requirements, or company role should be verified.`,earlyTitle:n?`Væntanleg verkefni / early signals`:`Upcoming projects / early signals`,earlyDescription:n?`Vísbendingar um möguleg framtíðarverkefni sem eru ekki endilega formleg útboð ennþá.`:`Signals for possible future projects that may not be formal tenders yet.`}[e]||e}function ut(e=`is`){return b(`verificationSentence`,e)}function dt(e,t=`is`){let n=Number(e?.matchScore||e?.match_score||0)>=85;return t===`en`?n?`Strong match`:`Match`:n?`Sterk samsvörun`:`Samsvörun`}function ft(e,t=`is`){let n=String(e?.aiReviewFit||e?.ai_review_fit||``).toLowerCase()===`strong`||Number(e?.matchScore||e?.match_score||0)>=85;return t===`en`?n?`Recommended — tender documents should be verified`:`Possible opportunity — tender documents should be verified`:n?`Mælt með — staðfesta þarf útboðsgögn`:`Mögulegt tækifæri — staðfesta þarf útboðsgögn`}function pt(e,t=`is`){let n=String(e?.aiReviewFit||e?.ai_review_fit||``).toLowerCase();return t===`en`?n===`strong`||Number(e?.matchScore||0)>=85?`Recommended`:n===`possible`?`Possible opportunity`:String(e?.reportSection||``)===`early`?`Upcoming signal`:`Verify documents`:n===`strong`||Number(e?.matchScore||0)>=85?`Mælt með`:n===`possible`?`Mögulegt tækifæri`:String(e?.reportSection||``)===`early`?`Væntanlegt / merki`:`Staðfesta útboðsgögn`}function mt(e=[],t=`is`){let n=[],r=new Set;for(let i of e||[]){let e=String(i||``).trim();if(!e)continue;let a=e.toLowerCase();if(a.includes(`winter/snow service fit`)){n.push(t===`is`?`Passar við vetrarþjónustu/snjómokstur; staðfestið umfang og getu.`:`Winter/snow service fit; verify capacity and scope.`);continue}if(a.includes(`deadline is valid and in the future`)){n.push(t===`is`?`Skilafrestur er í framtíðinni.`:`Deadline is valid and in the future.`);continue}if(a.includes(`location matches company service areas`)){n.push(t===`is`?`Staðsetning passar við þjónustusvæði.`:`Location matches company service areas.`);continue}if(a.includes(`verify capacity and scope`)){n.push(t===`is`?`Staðfestið umfang og getu.`:`Verify capacity and scope.`);continue}let o=lt(e),s=o.toLowerCase();if(!o||r.has(s))continue;r.add(s);let c=t===`is`&&/passar|nefnir|stað|skilafrestur|þjónustu|umfang/i.test(o);n.push(t===`is`?c?o:`Passar við þjónustu eða leitarorð: ${o}`:/matches|mentions|deadline|location|verify/i.test(o)?o:`Matches service or keyword: ${o}`)}return ct(n).slice(0,4)}function ht(e,t=`is`){let n=String(e||``).trim();if(!n)return``;let r=n.toLowerCase();if(t!==`en`){if(r.includes(`deadline not available`))return`Skilafrestur fannst ekki í innfluttum gögnum — staðfestið á upprunasíðu.`;if(r.includes(`open the source documents`))return`Opna útboðsgögn.`;if(r.includes(`confirm mandatory requirements`))return`Staðfesta kröfur og hæfisskilyrði.`;if(r.includes(`check capacity and profitability`))return`Meta getu og arðsemi.`;if(r.includes(`prepare questions before the deadline`))return`Undirbúa fyrirspurnir fyrir skilafrest.`;if(r.includes(`verify capacity and scope`))return`Staðfestið umfang og getu.`}return n}function gt({companyName:e,matches:t,language:n=`is`}){let r=n!==`en`,i=r?`Sæll/Sæl,

VerkRadar fann eftirfarandi tækifæri sem gætu passað við ykkar þjónustu:`:`Hi,

VerkRadar found the following opportunities that may fit your services:`,a=r?`Staðfestið alltaf útboðsgögn, skilafresti og kröfur á upprunalegri heimild áður en brugðist er við.

Kv.
Kristján`:`Always verify the tender documents, deadlines, requirements, and eligibility on the original source before taking action.

Best,
Kristján`;return`${i}\n\n${(t||[]).map(e=>{let t=mt(e.matchReasons||e.reasons||[],n),i=t.length?t.map(e=>`- ${e}`).join(`
`):`- ${r?`Passar við fyrirtækjaprófílinn.`:`Matches the company profile.`}`;return r?`${e.title}
Útboðsaðili: ${e.buyer||`Óþekktur kaupandi`}
Skilafrestur: ${e.deadline||`Fannst ekki`}
Staða: ${ft(e,n)}

Af hverju þetta gæti passað:
${i}

Heimild:
${e.url||`Engin heimild skráð`}`:`${e.title}
Buyer: ${e.buyer||`Unknown buyer`}
Deadline: ${e.deadline||`Not found`}
Status: ${ft(e,n)}

Why this may fit:
${i}

Source:
${e.url||`No source URL listed`}`}).join(`

`)||(r?`Engin atriði eru í þessu yfirliti.`:`No items are included in this report.`)}\n\n${a}`}function _t(e){return String(e||``).toLowerCase()}function vt(e){return Array.isArray(e)?e.map(e=>String(e||``).trim()).filter(Boolean):[]}function yt(e){return Array.from(new Set((e||[]).map(e=>String(e||``).trim()).filter(Boolean)))}function bt(e){return e?new Date(e).getTime():NaN}function xt(e){let t=bt(e);if(Number.isNaN(t))return!0;let n=new Date;return n.setHours(0,0,0,0),t<n.getTime()}function St(e={}){return{aiReviewFit:_t(e.fit),aiReviewConfidence:Number(e.confidence||0),aiReviewSendToClient:e.send_to_client===!0||e.sendToClient===!0,aiReviewReason:String(e.reason||``),aiFitReasons:vt(e.fit_reasons||e.fitReasons),aiRisksOrQuestions:vt(e.risks_or_questions||e.risksOrQuestions),aiSuggestedClientSummary:String(e.suggested_client_summary||e.suggestedClientSummary||``),aiReviewedAt:e.updated_at||e.created_at||``}}function Ct(e,t){let n=new Map;for(let e of t||[]){let t=String(e.opportunity_id||e.opportunityId||``);t&&n.set(t,St(e))}return(e||[]).map(e=>{let t=n.get(String(e.id||e.opportunity_id||``));return t?{...e,...t,matchReasons:yt([t.aiSuggestedClientSummary,...t.aiFitReasons,...Array.isArray(e.matchReasons)?e.matchReasons:[]]),risks:yt([...t.aiRisksOrQuestions,...Array.isArray(e.risks)?e.risks:[]])}:e})}function wt(e){return Tt(e)!==`excluded`}function Tt(e){let t=_t(e?.aiReviewFit||e?.ai_review_fit);if(!e?.deadline||xt(e.deadline))return`excluded`;let n=e?.aiReviewSendToClient===!0||e?.ai_review_send_to_client===!0;if(String(e?.aiReviewSkippedReason||e?.ai_review_skipped_reason||``).toLowerCase()===`outside_service_area`||[e?.aiReviewReason,...vt(e?.aiRisksOrQuestions||e?.risks_or_questions)].join(` `).toLowerCase().includes(`outside service area`))return`excluded`;if(t)return[`weak`,`no_fit`].includes(t)?`excluded`:t===`strong`&&n?`ai_strong`:t===`possible`&&n?`ai_possible`:`excluded`;let r=String(e?.safetyStatus||e?.safety_status||`auto_approved`).toLowerCase();if(r===`hidden`||r===`needs_review`)return`excluded`;let i=Number(e?.matchScore||e?.match_score||0),a=String(e?.matchLabel||e?.match_label||``).toLowerCase();return i>=75||a.includes(`strong`)||a.includes(`good`)?`rule_fallback`:`excluded`}function Et(e){let t=Tt(e);return Dt(e)&&(t===`ai_strong`||t===`ai_possible`||t===`rule_fallback`)?`confirmed`:t===`ai_possible`||t===`rule_fallback`?`early`:`excluded`}function Dt(e){return!!e?.deadline&&!xt(e.deadline)}function Ot(e){return[...e||[]].filter(wt).sort((e,t)=>{let n={ai_strong:0,ai_possible:1,rule_fallback:2},r=Tt(e),i=Tt(t);return(n[r]??9)-(n[i]??9)||Number(t.aiReviewConfidence||t.ai_review_confidence||0)-Number(e.aiReviewConfidence||e.ai_review_confidence||0)||Number(t.matchScore||t.match_score||0)-Number(e.matchScore||e.match_score||0)||bt(e.deadline)-bt(t.deadline)})}function x(e){if(!e)return 999;let t=new Date,n=new Date(`${e}T00:00:00`);if(Number.isNaN(n.getTime()))return 999;let r=n-new Date(t.getFullYear(),t.getMonth(),t.getDate());return Math.ceil(r/(1e3*60*60*24))}function kt(e){if(!e)return`No deadline`;let t=new Date(`${e}T00:00:00`);return Number.isNaN(t.getTime())?String(e):new Intl.DateTimeFormat(`en-GB`,{year:`numeric`,month:`short`,day:`2-digit`}).format(t)}function S(e){return e?new Intl.DateTimeFormat(`en-GB`,{year:`numeric`,month:`short`,day:`2-digit`}).format(new Date(e)):`Unknown date`}function At(e){return Array.from(new Set((e||[]).map(e=>String(e||``).trim()).filter(Boolean)))}function jt(e){return String(e||``).split(`,`).map(e=>e.trim()).filter(Boolean)}function C(e){return At(Array.isArray(e)?e:jt(e))}function Mt(e){return jt(e)}function w(e){return String(e||``).toLowerCase().normalize(`NFD`).replace(/[\u0300-\u036f]/g,``).replace(/æ/g,`ae`).replace(/[ðþ]/g,e=>e===`ð`?`d`:`th`).replace(/[^a-z0-9]+/g,` `).trim()}function T(e){return String(e??``).replaceAll(`&`,`&amp;`).replaceAll(`<`,`&lt;`).replaceAll(`>`,`&gt;`).replaceAll(`"`,`&quot;`).replaceAll(`'`,`&#039;`)}function Nt(e){return String(e||``).charAt(0).toUpperCase()+String(e||``).slice(1)}function Pt(e){return/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(String(e||``))}function Ft(e){let t=String(e||``).trim();return/^https?:\/\//i.test(t)?t:``}function It(e,t=`ISK`){if(!e)return``;let n=t||`ISK`,r=n===`ISK`?`kr`:n;return`${new Intl.NumberFormat(`is-IS`).format(e)} ${r}`}function Lt(e,t){let n=t||(e=>e);return{"Confirmed tender":n(`confirmedTender`),"Likely opportunity":n(`likelyOpportunity`),"Early signal":n(`earlySignal`),"Needs review":n(`needsReview`),"Tender awarded":n(`tenderAwarded`),"Tender already announced":n(`tenderAlreadyAnnounced`),"Upcoming tender":n(`upcomingTender`),"Project signal":n(`projectSignal`),"Original language":n(`originalLanguage`)}[e]||e||``}function Rt(e,t){let n=t||(e=>e);return{"Strong match":n(`strongMatch`),"Good match":n(`goodMatch`),"Possible match":n(`possibleMatch`),"Weak match":n(`weakMatch`)}[e]||e||``}function zt(e,t,n){let r=n||(e=>e),i=String(t||``).trim();return i?e===`buyer`&&(Bt(i)||i.toLowerCase()===`unknown buyer`)?r(`unknownBuyer`):e===`location`&&i.toLowerCase()===`all iceland`?r(`allIceland`):e===`source`?i.replace(/\bprocurement\b/gi,r(`procurement`)):i:r(e===`buyer`?`unknownBuyer`:`notListed`)}function Bt(e){let t=w(e);return!!(!t||[`admin`,`administrator`,`ritstjori`,`editor`,`noreply`,`no reply`,`wordpress`,`wp admin`,`user`,`test`].includes(t)||t.includes(`noreply`)||/^wp\s*[-_]?\s*\d+$/.test(t))}function Vt(e){let t=w(e);return t?t.includes(`borgarbyggd`)?`Borgarbyggð`:t.includes(`akranes`)?`Akraneskaupstaður`:t.includes(`faxafloahafnir`)?`Faxaflóahafnir`:t.includes(`gardabaer`)?`Garðabær`:t.includes(`reykjanesbaer`)?`Reykjanesbær`:t.includes(`kopavogur`)?`Kópavogur`:t.includes(`hafnarfjordur`)?`Hafnarfjarðarbær`:t.includes(`mosfellsbaer`)?`Mosfellsbær`:t.includes(`arborg`)?`Sveitarfélagið Árborg`:t.includes(`fjardabyggd`)?`Fjarðabyggð`:t.includes(`mulathing`)?`Múlaþing`:t.includes(`garðabaer`)?`Garðabær`:(t.includes(`rikiskaup`)||t.includes(`utbodsvefur`),``):``}function Ht(e,t,n={}){let r=String(e||``).trim();if(/reykjavíkurborg/i.test(r))return`Reykjavíkurborg`;if(r&&!Bt(r)&&r.toLowerCase()!==`unknown buyer`)return r;let i=String(n.extracted_buyer||n.buyer||``).trim();return/reykjavíkurborg/i.test(i)?`Reykjavíkurborg`:i&&!Bt(i)&&i.toLowerCase()!==`unknown buyer`?i:Vt(t)||`Unknown buyer`}function Ut(e){let t=w(e);return t?t.includes(`borgarbyggd`)?`Borgarbyggð / Vesturland`:t.includes(`akranes`)?`Akranes / Vesturland`:t.includes(`faxafloahafnir`)?`Höfuðborgarsvæðið`:t.includes(`arborg`)?`Árborg / Suðurland`:``:``}function Wt(e,t,n){let r=String(e||``).trim();return t===`is`&&{"Capital Area":`Höfuðborgarsvæðið`,"South Iceland":`Suðurland`,"West Iceland":`Vesturland`,"North Iceland":`Norðurland`,"East Iceland":`Austurland`,Westfjords:`Vestfirðir`,"All Iceland":(n||(e=>e))(`allIceland`),"Remote / Online":`Fjarvinna / netverkefni`}[r]||r}function Gt(e,t,{language:n=`en`,translate:r}={}){let i=r||(e=>e),a=zt(e,t,i);if(n!==`is`)return a;let o=String(a||``).trim().toLowerCase();return{"public procurement":i(`publicProcurement`),procurement:i(`procurement`),tender:i(`tender`)}[o]||a.replace(/\bpublic procurement\b/gi,i(`publicProcurement`)).replace(/\btender\b/gi,i(`tender`))}function Kt(e,{language:t=`en`,translate:n}={}){let r=n||((e,t={})=>t.value?`${e}: ${t.value}`:e),i=String(e||``);return i.startsWith(`Mentions your service:`)?r(`mentionsService`,{value:i.slice(22).trim()}):i.startsWith(`Contains your keyword:`)?r(`containsKeyword`,{value:i.slice(22).trim()}):{"National opportunity":r(`nationalOpportunity`),"Local match":r(`localMatch`),"Located in your selected region":r(`localMatch`),"Project value is inside your preferred range":t===`is`?`Áætlað verðmæti er innan óskaðs bils`:`Project value is inside your preferred range`,"Deadline is coming up soon":t===`is`?`Skilafrestur nálgast`:`Deadline is coming up soon`,"Matched to your company profile.":t===`is`?`Passar við fyrirtækjaprófílinn.`:`Matched to your company profile.`,"Matched to your profile by service, location or keyword overlap.":t===`is`?`Passar við þjónustu, svæði eða lykilorð í prófílnum.`:`Matched to your profile by service, location or keyword overlap.`}[i]||i||``}function qt(e,t=`en`){return t===`is`?{"Deadline not available in feed — verify on source page.":`Skilafrestur fannst ekki í innfluttum gögnum — staðfestið á upprunasíðu.`,"Deadline not available in imported data — verify on source page.":`Skilafrestur fannst ekki í innfluttum gögnum — staðfestið á upprunasíðu.`,"Deadline not available in source — verify page.":`Skilafrestur fannst ekki í heimild - staðfestið á upprunalegri síðu.`,"No formal tender deadline extracted — verify source article.":`Formlegur skilafrestur fannst ekki - staðfestið í heimildargrein.`,"Formal tender deadline not found yet — monitor source article.":`Formlegur skilafrestur fannst ekki enn - fylgist með heimildargrein.`,"Tender appears already announced/awarded — verify source article.":`Útboð virðist þegar auglýst eða afgreitt - staðfestið í heimildargrein.`,"Estimated value is not listed in the imported data.":`Áætlað verðmæti er ekki gefið upp í innfluttum gögnum.`,"Open the source page and confirm mandatory requirements.":`Opnið upprunalega heimild og staðfestið skyldukröfur.`,"Extracted project signal — verify tender timing in the source article.":`Útdregin verkefnavísbending - staðfestið útboðstímasetningu í heimildargrein.`,"Imported from broad feed — verify that this is a real tender or business opportunity.":`Innflutt úr breiðum fréttastraumi - staðfestið að þetta sé raunverulegt útboð eða viðskiptatækifæri.`}[e]||e||``:e||``}function Jt(e,t=`en`){return t===`is`?{"Open the source documents":`Opna útboðsgögn`,"Confirm mandatory requirements":`Staðfesta kröfur og hæfisskilyrði`,"Check capacity and profitability":`Meta getu og arðsemi`,"Prepare questions before the deadline":`Undirbúa fyrirspurnir fyrir skilafrest`,"Open source documents and confirm requirements.":`Opna útboðsgögn og staðfesta kröfur.`}[e]||e||``:e||``}var Yt=`Deadline not available in imported data — verify on source page.`,Xt=`No formal tender deadline extracted — verify source article.`;function Zt(){return n(e)}function E(e,t={}){return r(D?.language||`is`,e,t)}function Qt(t){D.language=t===`en`?`en`:`is`,localStorage.setItem(e.language,D.language),X()}var $t=a,en=12e3;function tn(){return o(D.user?.email||``)}var D={route:location.hash.replace(`#`,``)||`/`,language:Zt(),pendingSignupPlan:ln(location.hash.replace(`#`,``)||`/`)||on(),user:null,currentUser:null,isAdmin:!1,authLoading:!0,isBooting:!0,authLoaded:!1,profileLoaded:!1,adminLoaded:!1,bootError:null,authMessage:null,authForm:{email:``,password:``,newPassword:``,confirmPassword:``},authSubmitting:!1,isSavingProfile:!1,profileSaved:!1,profileSaveMessage:null,profileSaveError:null,profile:null,companyMembership:null,profileDraft:null,profileDraftDirty:!1,profileLoading:!1,profileLoadError:null,companyId:null,opportunities:[],storedMatches:[],opportunityActions:[],saved:wi(e.saved),ignored:wi(e.ignored),filters:{search:``,label:`recommended`,category:`all`,location:`all`,type:`all`,savedOnly:!1},tedImportMode:`nordic`,dropdown:{openKey:null,focusedIndex:0},importStatus:null,importLoading:!1,connectorImportStatus:null,connectorImportLoading:!1,connectorTestingSourceId:null,importedTedOpportunities:[],importedTedOpportunitiesLoading:!1,importedTedOpportunitiesLoaded:!1,importedTedOpportunitiesError:null,importRuns:[],importRunsLoading:!1,importRunsLoaded:!1,importRunsError:null,adminReports:[],adminReportsLoading:!1,adminReportsLoaded:!1,adminReportsError:null,selectedAdminReport:null,selectedAdminReportLoading:!1,selectedAdminReportError:null,sourceCoverage:[],sourceCoverageLoading:!1,sourceCoverageLoaded:!1,sourceCoverageError:null,expandedSourceId:null,adminCompanies:[],adminCompaniesLoading:!1,adminCompaniesLoaded:!1,adminCompaniesError:null,adminReviewMatches:[],adminReviewLoading:!1,adminReviewLoaded:!1,adminReviewError:null,adminReviewActions:{},adminAiReviewActions:{},adminAiReviewError:null,adminCompanyAiReviewActions:{},adminCompanyAiReviewResults:{},adminCompanyAiReviewFilter:`not_reviewed`,adminCompanyActions:{},adminCompanyAccessActions:{},adminCompanyInviteDrafts:{},adminReportDeliveryActions:{},selectedAdminCompanyId:null,adminActiveTab:`overview`,adminCompanyFilters:{search:``,industry:`all`,profileStatus:`all`,plan:`all`},adminReportMode:`all_current`,adminOpportunityFilters:{source:`all`,missingDeadlineSource:`all`,status:`all`,country:`all`,search:``,debugCompanyId:``,tedOnly:!1,manualOnly:!1,showDemoTest:!1},adminOpportunityDraft:fn(),matchStatus:null,matchingLoading:!1,lastMatchedAt:null,reports:[],reportsLoaded:!1,reportsLoadError:null,reportArchiveLoading:!1,reportSaveLoading:!1,reportMessage:null,selectedReportId:null,selectedAdminReportId:null,adminMessage:null,adminSubmitting:!1,adminDeletingId:null,adminUpdatingId:null,isLoadingOpportunities:!1,opportunityLoadError:null,isMobileMenuOpen:!1,profileMenuOpen:!1,selectedOpportunityId:null,toast:null};function nn(e=D.route){return String(e||`/`).split(`?`)[0]||`/`}function rn(e=D.route){let t=String(e||``).split(`?`)[1]||``;return new URLSearchParams(t)}function an(e){let t=String(e||``).trim().toLowerCase();return[`basic`,`pro`,`priority`].includes(t)?t:``}function on(){try{return an(localStorage.getItem(e.selectedPlan))}catch{return``}}function sn(t){let n=an(t);try{n&&localStorage.setItem(e.selectedPlan,n)}catch{}return n}function cn(){try{localStorage.removeItem(e.selectedPlan)}catch{}}function ln(e=D.route){return an(rn(e).get(`plan`))}function un(e=D.route){let t=ln(e);t&&(D.pendingSignupPlan=sn(t))}`scrollRestoration`in history&&(history.scrollRestoration=`manual`);function dn(){localStorage.removeItem(`verkradar_profile`),localStorage.removeItem(`verkradar_local_user_id`),localStorage.removeItem(`verkradar_saved_opportunities`),localStorage.removeItem(`verkradar_ignored_opportunities`),D.profile=null,D.profileDraft=null,D.profileDraftDirty=!1,D.currentUser=null,D.companyId=null,D.storedMatches=[],D.opportunityActions=[],D.reports=[],D.reportsLoaded=!1,D.reportsLoadError=null,D.reportMessage=null,D.selectedReportId=null,D.profileSaved=!1,D.profileSaveMessage=null,D.profileSaveError=null,D.saved=[],D.ignored=[],D.importRuns=[],D.importRunsLoading=!1,D.importRunsLoaded=!1,D.importRunsError=null,D.importedTedOpportunities=[],D.importedTedOpportunitiesLoading=!1,D.importedTedOpportunitiesLoaded=!1,D.importedTedOpportunitiesError=null,D.adminReports=[],D.adminReportsLoading=!1,D.adminReportsLoaded=!1,D.adminReportsError=null,D.selectedAdminReport=null,D.selectedAdminReportLoading=!1,D.selectedAdminReportError=null,D.sourceCoverage=[],D.sourceCoverageLoading=!1,D.sourceCoverageLoaded=!1,D.sourceCoverageError=null,D.adminCompanies=[],D.adminCompaniesLoading=!1,D.adminCompaniesLoaded=!1,D.adminCompaniesError=null,D.selectedAdminCompanyId=null,D.lastMatchedAt=null}function fn(){return{title:``,buyer:``,sourceName:``,category:``,type:`tender`,deadline:``,published_date:``,location:``,estimated_value:``,url:``,cpv_code:``,difficulty:`medium`,status:`open`,description:``,requirements:``,keywords:``}}function pn(e){let t=fn();Object.keys(t).forEach(n=>{t[n]=String(e.get(n)||``)}),D.adminOpportunityDraft=t}var mn=!1;window.addEventListener(`hashchange`,()=>{let e=location.hash.replace(`#`,``)||`/`,t=nn(e),n=e!==D.route;if(mn&&e===D.route){mn=!1;return}mn=!1,[`/login`,`/signup`,`/forgot-password`,`/reset-password`].includes(t)&&e!==D.route&&(D.authMessage=null,D.authSubmitting=!1),D.route=e,un(e),D.isMobileMenuOpen=!1,D.profileMenuOpen=!1,n&&za(),document.body.classList.remove(`mobile-menu-active`),X(),On(),k()}),document.addEventListener(`click`,e=>{if(D.dropdown.openKey&&!e.target.closest?.(`.custom-select`)&&gs(),D.profileMenuOpen&&!e.target.closest?.(`.profile-menu`)&&(D.profileMenuOpen=!1,X()),e.target.classList?.contains(`modal-backdrop`)){if(e.preventDefault(),D.selectedAdminCompanyId){D.selectedAdminCompanyId=null,X();return}Ra();return}if(D.isMobileMenuOpen&&!e.target.closest?.(`.site-header`)){_n();return}let t=e.target.closest?.(`[data-action]`);if(!t)return;let n=t.dataset.action,r=t.dataset.id;if(n===`close-modal`){if(e.preventDefault(),e.stopPropagation(),D.selectedAdminCompanyId){D.selectedAdminCompanyId=null,X();return}Ra();return}if(n===`toggle-mobile-menu`){e.preventDefault(),D.isMobileMenuOpen?_n():gn();return}if(n===`mobile-nav`){e.preventDefault(),vn(t.dataset.href);return}if(n===`mobile-scroll-to`){e.preventDefault(),yn(t.dataset.target);return}if(n===`toggle-profile-menu`){if(e.preventDefault(),D.isMobileMenuOpen||bn()){D.profileMenuOpen=!1,X();return}D.profileMenuOpen=!D.profileMenuOpen,X();return}if(n===`toggle-language`){e.preventDefault(),Qt(D.language===`is`?`en`:`is`);return}if(n===`toggle-dropdown`){e.preventDefault();let n=t.dataset.key,r=D.dropdown.openKey===n;D.dropdown.openKey=r?null:n,D.dropdown.focusedIndex=ps(n),X(),r||_s();return}if(n===`select-filter`){e.preventDefault();let n=t.dataset.key,r=t.dataset.value;t.dataset.profileField?(H(),D.profileDraft[t.dataset.profileField]=r,U()):D.filters[n]=r,D.dropdown.openKey=null,D.dropdown.focusedIndex=0,X();return}if(n===`toggle-profile-suggestion`){e.preventDefault(),Ai(t.dataset.field,t.dataset.value);return}if(n===`scroll-to`){e.preventDefault(),D.isMobileMenuOpen=!1,D.profileMenuOpen=!1,document.body.classList.remove(`mobile-menu-active`);let n=t.dataset.target;if(!n)return;D.route===`/`?(X(),setTimeout(()=>kn(n),0)):(O(`/`),setTimeout(()=>kn(n),50));return}if(n===`go`){e.preventDefault(),D.isMobileMenuOpen=!1,D.profileMenuOpen=!1,document.body.classList.remove(`mobile-menu-active`),O(t.dataset.href);return}if(n===`save`&&Pa(r),n===`ignore`&&Fa(r),n===`unignore`&&Ia(r),n===`details`&&La(r),n===`admin-report-override`){yi(r,t.dataset.override||``);return}if(n===`copy-report`&&hl(),n===`download-report-pdf`&&gl(),n===`download-admin-report-pdf`){_l();return}if(n===`save-report`&&pi(),n===`archive-report`){mi(r);return}if(n===`view-report`&&(D.selectedReportId=r,X()),n===`close-archive-report`&&(D.selectedReportId=null,X()),n===`view-admin-report`){D.selectedAdminReportId=r,D.selectedAdminReport=null,D.selectedAdminReportError=null,D.adminActiveTab=`reports`,X(),Mn(r);return}if(n===`close-admin-report`){D.selectedAdminReportId=null,D.selectedAdminReport=null,D.selectedAdminReportError=null,X();return}if(n===`copy-admin-report`){Yo(r);return}if(n===`mark-admin-report-sent`){Xo(r);return}if(n===`admin-tab`&&(D.adminActiveTab=t.dataset.tab||`overview`,D.selectedAdminCompanyId=null,D.selectedAdminReportId=null,X()),n===`view-admin-company`&&(D.selectedAdminCompanyId=r,X()),n===`close-admin-company`&&(D.selectedAdminCompanyId=null,X()),n===`admin-refresh-company-matches`){Gn(r);return}if(n===`admin-generate-company-report`){Kn(r);return}if(n===`admin-review-match`){qn(r,t.dataset.companyId||``,t.dataset.reviewAction||``);return}if(n===`admin-ai-review-match`){Jn(r,{force:t.dataset.force===`true`});return}if(n===`admin-ai-review-company`){Yn(r,{force:t.dataset.force===`true`});return}if(n===`admin-run-auto-ai-review`){Xn();return}if(n===`admin-run-daily-pipeline`){Zn();return}if(n===`admin-toggle-company-auto-ai`){Qn(r,t.dataset.enabled===`true`);return}if(n===`admin-invite-company-customer`){Un(r);return}if(n===`admin-revoke-company-access`){Wn(r,t.dataset.memberId||``);return}if(n===`import-ted`&&Ir(),n===`import-source-connectors`&&Lr(),n===`test-source-connector`&&Lr(r),n===`toggle-source-items`&&(D.expandedSourceId=D.expandedSourceId===r?null:r,X()),n===`refresh-admin-status`&&nr(),n===`hide-imported-opportunity`&&vi(r,`hidden`),n===`mark-imported-relevant`&&vi(r,`open`),n===`run-matching`&&hi(),n===`retry-settings-profile`&&ii(),n===`show-all-matches`&&(D.filters.label=`all`,X()),n===`show-all-opportunities`&&(D.filters.label=`all_opportunities`,X()),n===`include-national-opportunities`&&(H(),D.profileDraft.nationalProjects=!0,D.profileDraft.locations.includes(`All Iceland`)||(D.profileDraft.locations=[...D.profileDraft.locations,`All Iceland`]),U(),O(`/settings`)),n===`delete-opportunity`&&_i(r),n===`logout`){if(D.profileMenuOpen=!1,D.isMobileMenuOpen){_n(()=>Jr());return}Jr()}n===`load-demo`&&(D.user?li($t).then(()=>O(`/dashboard`)).catch(e=>{console.error(`Failed to load demo profile:`,e),D.profileSaveError=B(e),X()}):(Ci($t),D.profile=$t,O(`/dashboard`))),n===`reset`&&(dn(),O(`/`))}),document.addEventListener(`keydown`,e=>{if(e.key===`Escape`&&D.isMobileMenuOpen){e.preventDefault(),_n();return}if(e.key===`Escape`&&D.profileMenuOpen){e.preventDefault(),D.profileMenuOpen=!1,X();return}if(e.key===`Escape`&&D.selectedOpportunityId){e.preventDefault(),Ra();return}if(e.key===`Escape`&&D.selectedAdminCompanyId){e.preventDefault(),D.selectedAdminCompanyId=null,X();return}let t=e.target.closest?.(`.custom-select`),n=t?.dataset.key||D.dropdown.openKey;if(!n)return;let r=fs(n),i=D.dropdown.openKey===n;if(e.key===`Escape`&&i){e.preventDefault(),gs(),vs(n);return}if((e.key===`ArrowDown`||e.key===`ArrowUp`)&&!i){e.preventDefault(),D.dropdown.openKey=n,D.dropdown.focusedIndex=ps(n),X(),_s();return}if(i){if(e.key===`ArrowDown`||e.key===`ArrowUp`){e.preventDefault();let t=e.key===`ArrowDown`?1:-1;D.dropdown.focusedIndex=(D.dropdown.focusedIndex+t+r.length)%r.length,X(),_s();return}if(e.key===`Enter`||e.key===` `){e.preventDefault();let i=r[D.dropdown.focusedIndex];if(!i)return;let a=t?.querySelector?.(`[data-profile-field]`)?.dataset.profileField;a?(H(),D.profileDraft[a]=i.value,U()):D.filters[n]=i.value,D.dropdown.openKey=null,D.dropdown.focusedIndex=0,X(),vs(n)}}}),document.addEventListener(`input`,e=>{let t=e.target.closest?.(`[data-auth-field]`);if(t){D.authForm[t.dataset.authField]=t.value;return}let n=e.target.closest?.(`[data-profile-field]`);if(n){H();let e=n.dataset.profileField;n.type===`checkbox`?D.profileDraft[e]=n.checked:n.dataset.profileArray===`true`?D.profileDraft[e]=jt(n.value):(n.dataset.profileNumber,D.profileDraft[e]=n.value),U();return}if(e.target.matches(`[data-filter]`)){let t=e.target.dataset.filter;e.target.type===`checkbox`?D.filters[t]=e.target.checked:D.filters[t]=e.target.value,X()}if(e.target.matches(`[data-admin-filter]`)){let t=e.target.dataset.adminFilter;e.target.type===`checkbox`?(D.adminOpportunityFilters[t]=e.target.checked,t===`tedOnly`&&e.target.checked&&(D.adminOpportunityFilters.manualOnly=!1),t===`manualOnly`&&e.target.checked&&(D.adminOpportunityFilters.tedOnly=!1)):D.adminOpportunityFilters[t]=e.target.value,Za(e.target);return}if(e.target.matches(`[data-admin-opportunity-field]`)){let t=e.target.dataset.adminOpportunityField;D.adminOpportunityDraft={...fn(),...D.adminOpportunityDraft||{},[t]:e.target.value};return}if(e.target.matches(`[data-admin-company-filter]`)){let t=e.target.dataset.adminCompanyFilter;D.adminCompanyFilters[t]=e.target.value,Za(e.target);return}if(e.target.matches(`[data-admin-company-invite-email]`)){let t=e.target.dataset.id||``;t&&(D.adminCompanyInviteDrafts={...D.adminCompanyInviteDrafts||{},[t]:e.target.value});return}e.target.matches(`[data-admin-report-mode]`)&&(D.adminReportMode=e.target.value===`all_current`?`all_current`:`new_only`,X()),e.target.matches(`[data-admin-company-ai-filter]`)&&(D.adminCompanyAiReviewFilter=e.target.value||`not_reviewed`,Za(e.target))}),document.addEventListener(`change`,e=>{if(e.target.matches(`[data-admin-filter]`)){let t=e.target.dataset.adminFilter;e.target.type===`checkbox`?(D.adminOpportunityFilters[t]=e.target.checked,t===`tedOnly`&&e.target.checked&&(D.adminOpportunityFilters.manualOnly=!1),t===`manualOnly`&&e.target.checked&&(D.adminOpportunityFilters.tedOnly=!1)):D.adminOpportunityFilters[t]=e.target.value,Za(e.target);return}if(e.target.matches(`[data-import-mode]`)){D.tedImportMode=e.target.value,X();return}if(e.target.matches(`[data-admin-company-ai-filter]`)){D.adminCompanyAiReviewFilter=e.target.value||`not_reviewed`,Za(e.target);return}if(e.target.matches(`[data-profile-location]`)){H(),D.profileDraft.locations=Array.from(document.querySelectorAll(`[data-profile-location]:checked`)).map(e=>e.value),U();return}let t=e.target.closest?.(`[data-profile-field]`);if(!t)return;H();let n=t.dataset.profileField;D.profileDraft[n]=t.type===`checkbox`?t.checked:t.value,U()}),document.addEventListener(`submit`,async e=>{if(e.target.id===`login-form`){e.preventDefault();let t=new FormData(e.target);Gr(t.get(`email`),t.get(`password`));return}if(e.target.id===`signup-form`){e.preventDefault();let t=new FormData(e.target);Wr(t.get(`email`),t.get(`password`));return}if(e.target.id===`forgot-password-form`){e.preventDefault(),Kr(new FormData(e.target).get(`email`));return}if(e.target.id===`reset-password-form`){e.preventDefault();let t=new FormData(e.target);qr(t.get(`newPassword`),t.get(`confirmPassword`));return}if(e.target.id===`admin-opportunity-form`){e.preventDefault();let t=new FormData(e.target);pn(t),gi(t,e.target);return}if(e.target.id===`profile-form`){e.preventDefault(),D.profileSaved=!1,Pi(e.target);let t=Fi();if(!t.companyName||!t.kennitala||!t.contactEmail||!t.billingEmail||!t.contactName||!t.phone||!t.address||!t.industry){V(D.language===`is`?`Fylltu út fyrirtækisnafn, kennitölu, reikningsupplýsingar, tengilið og atvinnugrein.`:`Please fill in company name, kennitala, billing details, contact details and industry.`,`error`);return}D.isSavingProfile=!0,D.profileSaved=!1,D.profileSaveMessage=null,D.profileSaveError=null,X();let n=D.route!==`/settings`;try{if(await li(t),await ni({overwriteDraft:!0}),D.profileLoadError)throw Error(`Profile saved, but the saved profile could not be reloaded. ${D.profileLoadError}`);D.profileSaveMessage=`Refreshing matches...`,D.profileSaveError=null,X();let e=await hi();if(D.matchStatus?.type===`error`)D.profileSaveMessage=`Profile saved, but matching could not be refreshed. Try Run matching.`;else{let t=e===1?`opportunity`:`opportunities`;D.profileSaveMessage=n?`Profile saved — ${e} relevant ${t} found. Redirecting...`:`Profile saved — ${e} relevant ${t} found.`}D.profileSaved=!0,X(),clearTimeout(window.__profileSavedTimeout),window.__profileSavedTimeout=setTimeout(()=>{D.profileSaved=!1,X()},1800),n&&setTimeout(()=>O(`/dashboard`),800)}catch(e){console.error(`Failed to save company profile:`,e),D.profileSaveError=B(e),D.profileSaveMessage=null,D.profileSaved=!1}finally{D.isSavingProfile=!1,X()}}}),window.addEventListener(`focus`,hn),document.addEventListener(`visibilitychange`,()=>{document.visibilityState===`visible`&&hn()});function hn(){D.route===`/settings`&&D.profileDraftDirty&&(D.profileLoading=!1,D.profileLoaded=!0,X())}function gn(){xn(),D.isMobileMenuOpen=!0,D.profileMenuOpen=!1,document.body.classList.add(`mobile-menu-active`),X()}function _n(e){if(!D.isMobileMenuOpen){typeof e==`function`&&e();return}D.isMobileMenuOpen=!1,D.profileMenuOpen=!1,document.body.classList.remove(`mobile-menu-active`),X(),typeof e==`function`&&setTimeout(e,260)}function vn(e){if(e){if(!D.isMobileMenuOpen){O(e);return}_n(()=>O(e))}}function yn(e){if(!e)return;let t=()=>{D.route===`/`?(X(),setTimeout(()=>kn(e),0)):(O(`/`),setTimeout(()=>kn(e),50))};if(!D.isMobileMenuOpen){t();return}_n(t)}function bn(){return typeof window<`u`&&window.matchMedia?.(`(max-width: 920px)`).matches}function xn(){let e=document.querySelector(`.site-header`);e&&document.documentElement.style.setProperty(`--header-height`,`${Math.ceil(e.getBoundingClientRect().height)}px`)}function O(e){e||=`/`;let t=[`/login`,`/signup`,`/forgot-password`,`/reset-password`],n=nn(e);if(t.includes(n)&&e!==D.route&&(D.authMessage=null,D.authSubmitting=!1),D.isMobileMenuOpen=!1,D.profileMenuOpen=!1,document.body.classList.remove(`mobile-menu-active`),D.route===e){X(),On(),k();return}za(),D.route=e,un(e),mn=!0,location.hash=e,X(),On(),k()}function Sn(){return!D.user&&!D.currentUser?`/`:D.profile?`/dashboard`:`/onboarding`}function Cn(){return!D.user&&!D.currentUser?`/signup`:D.profile?`/dashboard`:`/onboarding`}function wn(e=D.route){let t=String(e||``);if(Tn(t))return!1;let n=nn(t);return[`/`,`/login`,`/signup`,`/forgot-password`].includes(n)||t.startsWith(`access_token=`)||t.startsWith(`code=`)||t.includes(`type=signup`)||t.includes(`type=email_change`)}function Tn(e=D.route){let t=String(e||``);return t===`/reset-password`||t.startsWith(`/reset-password`)||t.includes(`type=recovery`)}function En(e){D.route=e,location.hash.replace(`#`,``)!==e&&history.replaceState(null,``,`#${e}`)}function Dn({replace:e=!1}={}){if(!D.user&&!D.currentUser||!wn())return!1;let t=Sn();return D.authMessage=null,e?En(t):O(t),!0}function k(){D.route===`/report`&&D.companyId&&!D.reportsLoaded&&!D.reportArchiveLoading&&fi(),D.route===`/admin`&&D.isAdmin&&(!D.importRunsLoaded&&!D.importRunsLoading&&An(),!D.adminReportsLoaded&&!D.adminReportsLoading&&jn(),!D.sourceCoverageLoaded&&!D.sourceCoverageLoading&&Pn(),!D.adminCompaniesLoaded&&!D.adminCompaniesLoading&&j(),!D.adminReviewLoaded&&!D.adminReviewLoading&&M(),!D.importedTedOpportunitiesLoaded&&!D.importedTedOpportunitiesLoading&&Rr().then(X).catch(e=>{console.error(`Failed to load latest TED opportunities:`,e)}))}function On(){window.scrollTo(0,0)}function kn(e){let t=document.getElementById(e);t&&t.scrollIntoView({behavior:`smooth`,block:`start`})}async function A(){D.isLoadingOpportunities=!0,D.opportunityLoadError=null,X();try{if(!f)throw Error(`Supabase client not configured`);let{data:e,error:t}=await f.from(`opportunities`).select(`*, sources(name, source_type)`).eq(`status`,`open`).order(`deadline`,{ascending:!0});if(t)throw t;!e||e.length===0?(D.opportunities=window.VERKRADAR_OPPORTUNITIES||[],D.storedMatches=[],D.opportunityLoadError=`Using demo data. Supabase has no opportunities yet.`):(D.opportunities=e.map(rr),D.opportunityLoadError=null,D.companyId&&(await ja(),await di()))}catch(e){console.error(`Failed to load Supabase opportunities:`,e),D.opportunities=window.VERKRADAR_OPPORTUNITIES||[],D.storedMatches=[],D.opportunityLoadError=`Using demo data. Supabase connection failed.`}finally{D.isLoadingOpportunities=!1,X()}}async function An(){if(!f||!D.isAdmin){D.importRuns=[],D.importRunsLoaded=!0;return}D.importRunsLoading=!0,D.importRunsError=null,X();try{let{data:e,error:t}=await f.from(`import_runs`).select(`*`).order(`started_at`,{ascending:!1}).limit(10);if(t)throw t;D.importRuns=e||[],D.importRunsLoaded=!0}catch(e){console.error(`Failed to load import runs:`,e),D.importRuns=[],D.importRunsError=B(e)}finally{D.importRunsLoading=!1,D.importRunsLoaded=!0,X()}}async function jn(){if(!f||!D.isAdmin){D.adminReports=[],D.adminReportsLoaded=!0;return}D.adminReportsLoading=!0,D.adminReportsError=null,X();try{let{data:e,error:t}=await f.from(`reports`).select(`
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
      `).order(`created_at`,{ascending:!1}).limit(10);if(t)throw t;D.adminReports=e||[],D.adminReportsLoaded=!0}catch(e){console.error(`Failed to load admin reports:`,e),D.adminReports=[],D.adminReportsError=B(e)}finally{D.adminReportsLoading=!1,D.adminReportsLoaded=!0,X()}}async function Mn(e){if(!(!f||!D.isAdmin||!e)){D.selectedAdminReportLoading=!0,D.selectedAdminReportError=null,X();try{let{data:t,error:n}=await f.from(`reports`).select(`
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
      `).eq(`id`,e).single();if(n)throw n;await Nn(t),D.selectedAdminReportId===e&&(D.selectedAdminReport=t)}catch(t){console.error(`Failed to load admin report details:`,t),D.selectedAdminReportId===e&&(D.selectedAdminReport=null,D.selectedAdminReportError=B(t))}finally{D.selectedAdminReportId===e&&(D.selectedAdminReportLoading=!1,X())}}}async function Nn(e){let t=Array.isArray(e?.report_items)?e.report_items:[],n=t.map(e=>e.opportunity_id).filter(Boolean);if(!f||!e?.company_id||!n.length)return;let{data:r,error:i}=await f.from(`company_opportunity_sends`).select(`opportunity_id, sent_at, created_at, channel`).eq(`company_id`,e.company_id).in(`opportunity_id`,n).in(`channel`,[`manual_email`,`automated_email`]);if(i){console.warn(`Failed to load report sent status:`,i);return}let a=new Map((r||[]).map(e=>[String(e.opportunity_id),e]));t.forEach(e=>{let t=a.get(String(e.opportunity_id));e.sent_at=t?.sent_at||t?.created_at||``,e.delivery_type=t?.channel||``})}async function Pn(){if(!f||!D.isAdmin){D.sourceCoverage=[],D.sourceCoverageLoaded=!0;return}D.sourceCoverageLoading=!0,D.sourceCoverageError=null,X();try{let{data:e,error:t}=await f.from(`sources`).select(`
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
      `).order(`name`,{ascending:!0});if(t)throw t;let n=(e||[]).map(e=>({...e,source_status:Array.isArray(e.source_status)?e.source_status[0]:e.source_status,source_connectors:Array.isArray(e.source_connectors)?e.source_connectors[0]:e.source_connectors})),r=n.map(e=>e.id).filter(Boolean),i={};if(r.length){let{data:e,error:t}=await f.from(`opportunities`).select(`id, source_id, title, buyer, deadline, status, url, raw_payload, created_at, published_date`).in(`source_id`,r).eq(`status`,`open`).order(`created_at`,{ascending:!1}).limit(500);if(t)throw t;i=(e||[]).reduce((e,t)=>(e[t.source_id]||(e[t.source_id]=[]),e[t.source_id].push(t),e),{})}D.sourceCoverage=n.map(e=>{let t=i[e.id]||[];return{...e,opportunityStats:zo(t),latestOpportunities:t.slice(0,8)}}),D.sourceCoverageLoaded=!0}catch(e){console.error(`Failed to load source coverage:`,e),D.sourceCoverage=[],D.sourceCoverageError=B(e)}finally{D.sourceCoverageLoading=!1,D.sourceCoverageLoaded=!0,X()}}async function j(){if(!f||!D.isAdmin){D.adminCompanies=[],D.adminCompaniesLoaded=!0;return}D.adminCompaniesLoading=!0,D.adminCompaniesError=null,X();try{D.adminAiUsageSummary=await ae().catch(e=>(console.warn(`Failed to load AI usage summary:`,e),null));let{data:e,error:t}=await f.from(`companies`).select(`*`).order(`created_at`,{ascending:!1});if(t)throw t;let n=e||[],r=n.map(e=>e.id).filter(Boolean),i=[],a=[],o=[],s=[],c=[],l=[],u=[];if(r.length){let[e,t,n,d,p,m,h]=await Promise.all([f.from(`company_services`).select(`company_id, service`).in(`company_id`,r),f.from(`company_locations`).select(`company_id, location`).in(`company_id`,r),f.from(`company_keywords`).select(`company_id, keyword, type`).in(`company_id`,r),f.from(`opportunity_matches`).select(`id, company_id, opportunity_id, match_score, match_label, safety_status, ai_review_status, ai_review_fit, ai_review_confidence, ai_reviewed_at, ai_review_skipped_reason, opportunities(title, buyer, location, raw_payload, source_id, sources(name))`).in(`company_id`,r),f.from(`reports`).select(`id, company_id, title, created_at, period_start, period_end, status`).in(`company_id`,r).order(`created_at`,{ascending:!1}),f.from(`ai_match_reviews`).select(`id, company_id, opportunity_id, match_id, fit, confidence, send_to_client, reason, reviewed_profile_hash, profile_updated_at, company_services_snapshot, company_locations_snapshot, created_at, updated_at`).in(`company_id`,r),f.from(`company_members`).select(`id, company_id, user_id, email, role, status, invited_at, accepted_at, revoked_at`).in(`company_id`,r).order(`created_at`,{ascending:!1})]);i=e.error?[]:e.data||[],a=t.error?[]:t.data||[],o=n.error?[]:n.data||[],s=d.error?[]:d.data||[],c=p.error?[]:p.data||[],l=m.error?[]:m.data||[],u=h.error?[]:h.data||[]}D.adminCompanies=n.map(e=>{let t=i.filter(t=>t.company_id===e.id),n=a.filter(t=>t.company_id===e.id),r=o.filter(t=>t.company_id===e.id),d={services:C(t.map(e=>e.service)),locations:C(n.map(e=>e.location)),includeKeywords:C(r.filter(e=>e.type===`include`).map(e=>e.keyword)),excludeKeywords:C(r.filter(e=>e.type===`exclude`).map(e=>e.keyword)),baseLocation:e.base_location||``,serviceAreas:C(e.service_areas),willingToTravel:!!e.willing_to_travel,nationalProjects:!!e.national_projects};return Ln(e,{services:t,locations:n,keywords:r,matches:se(s.filter(t=>t.company_id===e.id),l.filter(t=>t.company_id===e.id),d),reports:c.filter(t=>t.company_id===e.id),members:u.filter(t=>t.company_id===e.id)})}),D.adminCompaniesLoaded=!0}catch(e){console.error(`Failed to load admin companies:`,e),D.adminCompanies=[],D.adminCompaniesError=B(e)}finally{D.adminCompaniesLoading=!1,D.adminCompaniesLoaded=!0,X()}}async function M(){if(!f||!D.isAdmin){D.adminReviewMatches=[],D.adminReviewLoaded=!0;return}D.adminReviewLoading=!0,D.adminReviewError=null,X();try{let{data:e,error:t}=await f.from(`opportunity_matches`).select(`
        id,
        company_id,
        opportunity_id,
        match_score,
        match_label,
        match_reasons,
        risks,
        safety_status,
        safety_reasons,
        alert_eligible,
        review_required,
        calculated_at,
        companies (
          company_name
        ),
        opportunities (
          *,
          sources (
            name,
            source_type
          )
        )
      `).eq(`safety_status`,`needs_review`).eq(`review_required`,!0).order(`calculated_at`,{ascending:!1}).limit(100);if(t)throw t;let n=e||[],r=At(n.map(e=>e.company_id)),i=At(n.map(e=>e.opportunity_id)),a=[];if(r.length&&i.length){let{data:e,error:t}=await f.from(`ai_match_reviews`).select(`*`).in(`company_id`,r).in(`opportunity_id`,i);if(t)throw t;a=e||[]}let o=new Map(a.map(e=>[`${e.company_id}:${e.opportunity_id}`,e]));D.adminReviewMatches=n.map(e=>Fn(e,o.get(`${e.company_id}:${e.opportunity_id}`))),D.adminReviewLoaded=!0}catch(e){console.error(`Failed to load admin review queue:`,e),D.adminReviewMatches=[],D.adminReviewError=B(e)}finally{D.adminReviewLoading=!1,D.adminReviewLoaded=!0,X()}}function Fn(e,t=null){let n=rr(e.opportunities||{});return{id:e.id,companyId:e.company_id,opportunityId:e.opportunity_id,companyName:e.companies?.company_name||`Unknown company`,opportunity:n,matchScore:Number(e.match_score||0),matchLabel:e.match_label||ha(Number(e.match_score||0)),matchReasons:kr(n,Array.isArray(e.match_reasons)?e.match_reasons:[]),risks:Array.isArray(e.risks)?e.risks:[],safetyStatus:e.safety_status||`needs_review`,safetyReasons:Array.isArray(e.safety_reasons)?e.safety_reasons:[],alertEligible:!!e.alert_eligible,reviewRequired:!!e.review_required,calculatedAt:e.calculated_at,aiReview:t?In(t):null}}function In(e){return{id:e.id,fit:e.fit||`weak`,confidence:Number(e.confidence||0),sendToClient:!!e.send_to_client,reason:e.reason||``,fitReasons:Array.isArray(e.fit_reasons)?e.fit_reasons.map(String):[],risksOrQuestions:Array.isArray(e.risks_or_questions)?e.risks_or_questions.map(String):[],suggestedClientSummary:e.suggested_client_summary||``,model:e.model||``,createdAt:e.created_at||``,updatedAt:e.updated_at||``}}function Ln(e,t){let n=C((t.services||[]).map(e=>e.service)),r=C((t.locations||[]).map(e=>e.location)),i=C((t.keywords||[]).filter(e=>e.type===`include`).map(e=>e.keyword)),a=C((t.keywords||[]).filter(e=>e.type===`exclude`).map(e=>e.keyword)),o=t.reports||[],s=(t.matches||[]).filter(e=>e.safety_status!==`hidden`),c=(t.members||[]).map(e=>({id:e.id,company_id:e.company_id,user_id:e.user_id||``,email:e.email||``,role:e.role||`member`,status:e.status||`invited`,invited_at:e.invited_at||``,accepted_at:e.accepted_at||``,revoked_at:e.revoked_at||``})),l=!!(e.company_name&&e.contact_email&&e.industry&&n.length&&(r.length||e.base_location||C(e.service_areas).length));return{id:e.id,ownerId:e.owner_id||``,companyName:e.company_name||`Unnamed company`,contactEmail:e.contact_email||``,kennitala:e.kennitala||``,billingEmail:e.billing_email||``,contactName:e.contact_name||``,phone:e.phone||``,address:e.address||``,website:e.website||``,industry:e.industry||``,plan:e.selected_plan||e.plan||e.subscription_plan||`Demo`,selectedPlan:e.selected_plan||e.plan||``,billingStatus:e.billing_status||``,trialStartedAt:e.trial_started_at||``,trialEndsAt:e.trial_ends_at||``,profileStatus:l?`Complete`:`Incomplete`,createdAt:e.created_at,services:n,locations:r,includeKeywords:i,excludeKeywords:a,baseLocation:e.base_location||``,serviceAreas:C(e.service_areas),willingToTravel:!!e.willing_to_travel,nationalProjects:!!e.national_projects,remoteProjects:!!e.remote_projects,minimumProjectValueForTravel:e.minimum_project_value_for_travel,minProjectValue:e.min_project_value,maxProjectValue:e.max_project_value,allowUnknownValue:!!e.allow_unknown_value,includeLowConfidence:!!e.include_low_confidence,autoAlertMode:e.auto_alert_mode||`auto_safe_only`,reportFrequency:e.report_frequency||`weekly`,reportDay:e.report_day||`monday`,deadlineReminders:!!e.deadline_reminders,autoAiReviewEnabled:!!e.auto_ai_review_enabled,members:c,matchCount:s.length,savedCount:0,latestReportDate:o[0]?.created_at||``,latestMatches:s.slice(0,30),latestReports:o.slice(0,5)}}function Rn(e,t){D.adminCompanyActions={...D.adminCompanyActions||{},[e]:t}}function zn(e){let t={...D.adminCompanyActions||{}};delete t[e],D.adminCompanyActions=t}function Bn(e){return D.adminCompanyInviteDrafts?.[e.id]??(e.billingEmail||e.contactEmail||``)}function Vn(e,t){D.adminCompanyAccessActions={...D.adminCompanyAccessActions||{},[e]:t}}function Hn(e){let t={...D.adminCompanyAccessActions||{}};delete t[e],D.adminCompanyAccessActions=t}async function Un(e){if(!D.isAdmin||!e)return;let t=(D.adminCompanies||[]).find(t=>t.id===e),n=c(Bn(t||{id:e}));if(!n){D.adminMessage={type:`error`,text:`Enter a customer email before inviting access.`},X();return}Vn(e,`invite`),D.adminMessage=null,X();try{let r=await $n(e,`invite_customer`,{email:n});await j(),D.adminCompanyInviteDrafts={...D.adminCompanyInviteDrafts||{},[e]:``},D.adminMessage={type:`success`,text:`Invited ${r.member?.email||n} to ${t?.companyName||`company dashboard access`}.`},V(`Customer access invited`,`success`)}catch(e){console.error(`Failed to invite company customer:`,e),D.adminMessage={type:`error`,text:`Failed to invite customer access. ${B(e)}`}}finally{Hn(e),X()}}async function Wn(e,t){if(!(!D.isAdmin||!e||!t)){Vn(e,`revoke`),D.adminMessage=null,X();try{await $n(e,`revoke_customer_access`,{memberId:t}),await j(),D.adminMessage={type:`success`,text:`Customer access revoked.`},V(`Customer access revoked`,`success`)}catch(e){console.error(`Failed to revoke company access:`,e),D.adminMessage={type:`error`,text:`Failed to revoke customer access. ${B(e)}`}}finally{Hn(e),X()}}}async function Gn(e,t={}){if(!D.isAdmin)return D.adminMessage={type:`error`,text:`You do not have access to this action.`},X(),[];let n=(D.adminCompanies||[]).find(t=>t.id===e);if(!n)return D.adminMessage={type:`error`,text:`Company not found. Refresh Admin companies and try again.`},X(),[];t.skipAction||Rn(e,`refresh`),t.silent||(D.adminMessage=null,X());try{let r=await $n(e,`refresh_matches`),i=Number(r.matches_refreshed||0);return await Promise.all([j(),M()]),D.companyId===e&&await di(),t.silent||(D.adminMessage={type:`success`,text:`Refreshed ${i} eligible matches for ${n.companyName}.`},V(`Company matches refreshed`,`success`),X()),r}catch(e){if(console.error(`Failed to refresh admin company matches:`,e),D.adminMessage={type:`error`,text:`Failed to refresh matches for ${n.companyName}. ${B(e)}`},X(),t.throwOnError)throw e;return[]}finally{t.skipAction||(zn(e),X())}}async function Kn(e){if(!D.isAdmin){D.adminMessage={type:`error`,text:`You do not have access to this action.`},X();return}let t=(D.adminCompanies||[]).find(t=>t.id===e);if(!t){D.adminMessage={type:`error`,text:`Company not found. Refresh Admin companies and try again.`},X();return}Rn(e,`report`),D.adminMessage=null,X();try{let n=await $n(e,`generate_report`,{reportMode:D.adminReportMode||`all_current`});if(!n.report_created){D.adminMessage={type:`error`,text:tr(n,t.companyName)},X();return}await Promise.all([jn(),j(),M()]),D.companyId===e&&await fi(),D.adminMessage={type:`success`,text:`Generated ${er(n.report_mode||D.adminReportMode)} report for ${t.companyName} with ${Number(n.report_items||0)} item${Number(n.report_items||0)===1?``:`s`}. Open the Reports tab to review it.`},V(`Company report generated`,`success`)}catch(e){console.error(`Failed to generate admin company report:`,e),D.adminMessage={type:`error`,text:`Failed to generate report for ${t.companyName}. ${B(e)}`}}finally{zn(e),X()}}async function qn(e,t,n){if(!D.isAdmin){D.adminMessage={type:`error`,text:`You do not have access to this action.`},X();return}if(!e||!t||![`approve`,`reject`].includes(n)){D.adminMessage={type:`error`,text:`Missing review action details.`},X();return}D.adminReviewActions={...D.adminReviewActions||{},[e]:n},D.adminMessage=null,X();try{let r=await $n(t,`review_match`,{matchId:e,reviewAction:n});await Promise.all([M(),j()]),D.companyId===t&&await di(),D.adminMessage={type:`success`,text:r.message||(n===`approve`?`Match approved for customer reports.`:`Match rejected and hidden.`)},V(n===`approve`?`Match approved`:`Match rejected`,`success`)}catch(e){console.error(`Failed to review admin match:`,e),D.adminMessage={type:`error`,text:`Failed to ${n} match. ${B(e)}`}}finally{let t={...D.adminReviewActions||{}};delete t[e],D.adminReviewActions=t,X()}}async function Jn(e,t={}){if(!D.isAdmin){D.adminMessage={type:`error`,text:`You do not have access to this action.`},X();return}if(!e){D.adminMessage={type:`error`,text:`Missing match ID for AI review.`},X();return}D.adminAiReviewActions={...D.adminAiReviewActions||{},[e]:!0},D.adminAiReviewError=null,D.adminMessage=null,X();try{let n=await te(e,{force:t.force===!0});await M(),await j(),D.adminMessage={type:`success`,text:n.cached?`Loaded cached AI review.`:t.force?`AI review re-run completed.`:`AI review completed.`},V(n.cached?`AI review loaded`:t.force?`AI review re-run completed`:`AI review completed`,`success`)}catch(e){console.error(`Failed to run AI match review:`,e),D.adminAiReviewError=B(e),D.adminMessage={type:`error`,text:`AI review failed. ${B(e)}`}}finally{let t={...D.adminAiReviewActions||{}};delete t[e],D.adminAiReviewActions=t,X()}}async function Yn(e,t={}){if(!D.isAdmin){D.adminMessage={type:`error`,text:`You do not have access to this action.`},X();return}if(!e){D.adminMessage={type:`error`,text:`Missing company ID for AI review batch.`},X();return}D.adminCompanyAiReviewActions={...D.adminCompanyAiReviewActions||{},[e]:!0},D.adminMessage=null,X();try{let n=await ne(e,{limit:10,force:t.force===!0,revalidate:t.force===!0});D.adminCompanyAiReviewResults={...D.adminCompanyAiReviewResults||{},[e]:n},await Promise.all([j(),M()]),D.companyId===e&&await di(),D.adminMessage={type:`success`,text:`${t.force?`AI revalidation`:`AI batch`} reviewed ${Number(n.reviewed||0)} matches. ${Number(n.skipped||0)} skipped.`},V(t.force?`AI company revalidation completed`:`AI company review completed`,`success`)}catch(e){console.error(`Failed to run company AI review batch:`,e),D.adminMessage={type:`error`,text:`AI company review failed. ${B(e)}`}}finally{let t={...D.adminCompanyAiReviewActions||{}};delete t[e],D.adminCompanyAiReviewActions=t,X()}}async function Xn(){if(!D.isAdmin){D.adminMessage={type:`error`,text:`You do not have access to this action.`},X();return}D.adminAutomaticAiReviewLoading=!0,D.adminMessage=null,X();try{let e=await re({limit:10});D.adminAutomaticAiReviewResult=e,await Promise.all([j(),M()]),D.adminMessage={type:`success`,text:`Automatic AI review created ${Number(e.ai_reviews_created||0)} reviews across ${Number(e.companies_checked||0)} companies.`},V(`Automatic AI review completed`,`success`)}catch(e){console.error(`Failed to run automatic AI review:`,e),D.adminMessage={type:`error`,text:`Automatic AI review failed. ${B(e)}`}}finally{D.adminAutomaticAiReviewLoading=!1,X()}}async function Zn(){if(D.isAdmin){D.adminDailyPipelineLoading=!0,D.adminMessage=null,X();try{let e=await m();D.adminDailyPipelineResult=e,await Promise.all([nr(),j(),M()]),D.adminMessage={type:e.errors?.length?`error`:`success`,text:`Daily pipeline finished: ${Number(e.sources_imported||0)} sources, ${Number(e.companies_refreshed||0)} companies, ${Number(e.ai_reviews_created||0)} AI reviews.`}}catch(e){console.error(`Failed to run daily pipeline:`,e),D.adminMessage={type:`error`,text:`Daily pipeline failed. ${B(e)}`}}finally{D.adminDailyPipelineLoading=!1,X()}}}async function Qn(e,t){if(!D.isAdmin||!e)return;let n=(D.adminCompanies||[]).find(t=>t.id===e);D.adminMessage=null,X();try{await ie(e,t),D.adminCompanies=(D.adminCompanies||[]).map(n=>n.id===e?{...n,autoAiReviewEnabled:t}:n),await j(),D.adminMessage={type:`success`,text:`Automatic AI review ${t?`enabled`:`disabled`} for company.`},X()}catch(t){console.error(`Failed to toggle company automatic AI review:`,t);let r=t?.details||{};D.adminMessage={type:`error`,text:`Failed to update automatic AI review setting. ${B(t)} Debug: company_id=${e}; company=${n?.companyName||`unknown`}; email=${n?.contactEmail||`unknown`}; returned_rows=${r.rowCount??`unknown`}; returned_data=${r.dataReturned===!1?`false`:`unknown`}.`},X()}}async function $n(e,t,n={}){let r=Pr();if(!r)throw Error(`Admin company actions are not configured. Set window.VERKRADAR_ADMIN_COMPANY_ACTIONS_URL or window.VERKRADAR_SUPABASE_URL.`);let i=await fetch(r,{method:`POST`,headers:await zr(),body:JSON.stringify({companyId:e,action:t,...n})}),a=await i.json().catch(()=>({}));if(!i.ok)throw Error(a.error||`Admin company action failed with status ${i.status}`);return a}function er(e){return e===`all_current`?`current active opportunities`:`new opportunities`}function tr(e,t){let n=e?.report_mode||D.adminReportMode||`all_current`;return e?.message||(n===`new_only`?`No new eligible opportunities found since the previous report.`:`No customer-report-ready matches found for ${t}.`)}async function nr(){D.isAdmin&&(await Promise.all([An(),Rr(),jn(),Pn(),j(),M()]),V(`Automation status refreshed`,`success`),X())}function rr(e){let t=e.raw_payload&&typeof e.raw_payload==`object`?e.raw_payload:{},n=e.sources?.name||t.source_name||``,r=P(t.quality_status||t.qualityStatus,{source:n,sourceType:e.sources?.source_type||``,title:e.title||``,description:ar(e.description||``,t,n,e.title||``),rawPayload:t}),i=F({source:n,sourceType:e.sources?.source_type||``,title:e.title||``,description:e.description||``,category:e.category||``,keywords:Array.isArray(e.keywords)?e.keywords:[],qualityStatus:r,rawPayload:t});return{id:e.id,externalId:e.external_id||``,countryCode:e.country_code||``,title:e.title,buyer:Ht(e.buyer,n,t),source:n||`Supabase`,sourceType:e.sources?.source_type||``,category:e.category||`Other`,type:e.type||`tender`,description:e.description||``,deadline:e.deadline,deadlineAt:t.deadline_at||``,publishedDate:e.published_date,createdAt:e.created_at,location:lr(e.location||`Unknown`,t,n,e.title||``,e.description||``),estimatedValue:e.estimated_value,currency:e.currency||`ISK`,url:e.url||``,cpvCode:e.cpv_code||``,requirements:Array.isArray(e.requirements)?e.requirements:[],keywords:Array.isArray(e.keywords)?e.keywords:[],difficulty:e.difficulty||`medium`,status:e.status||`open`,qualityStatus:r,intent:i,rawPayload:t}}function ir(e){let t=rr(e.opportunities||{});return{...t,matchScore:Number(e.match_score||0),matchLabel:e.match_label||ha(Number(e.match_score||0)),matchReasons:kr(t,Array.isArray(e.match_reasons)?e.match_reasons:[]),risks:Array.isArray(e.risks)?e.risks:[],nextSteps:Array.isArray(e.next_steps)?e.next_steps:[],safetyStatus:e.safety_status||`needs_review`,safetyReasons:Array.isArray(e.safety_reasons)?e.safety_reasons:[],alertEligible:!!e.alert_eligible,reviewRequired:!!e.review_required,reviewedAt:e.reviewed_at||``,reviewNote:e.review_note||``}}function ar(e,t={},n=``,r=``){t=t&&typeof t==`object`?t:{};let i=String(e||``).replace(/\s+/g,` `).trim(),a=w(n);if(!i)return``;if(a.includes(`rikiskaup`)||a.includes(`utbodsvefur`)){let e=or(i,t,r);if(e)return e;if(sr(i)||cr(i))return D.language===`is`?`Útboðstilkynning flutt inn af Útboðsvef. Opnið upprunasíðuna til að staðfesta kaupanda, skilafrest, kröfur og útboðsgögn.`:`Procurement notice imported from Útboðsvefur. Open the source page to confirm buyer, deadline, requirements and tender documents.`}return i}function or(e,t={},n=``){t=t&&typeof t==`object`?t:{};let r=String(e||``).replace(/\s+/g,` `).trim();if(!r)return``;let i=[r.search(/F\.h\.[^.]{0,280}ósk(?:að|ar) eftir tilboðum/i),r.search(/(?:Reykjavíkurborg|sveitarfélag|bærinn|kaupandi)[^.]{0,280}ósk(?:að|ar) eftir tilboðum/i),r.search(/óskar eftir tilboðum|óskað eftir tilboðum|oskar eftir tilbodum|oskad eftir tilbodum/i),r.search(/verkefnið felst|verkið felst|verkið felur|gatna-|gatnagerð|stígagerð/i)].filter(e=>e>=0);if(!i.length)return``;let a=Math.min(...i),o=r.slice(a).search(/\s+(Nánari upplýsingar|Útboðsgögn afhent|Opnun tilboða|Opnun tilboda|Auglýsandi|Flokkar|Tengdar fréttir|Fjöldi útboð)\b/i),s=o>120?a+o:a+1200,c=[r.slice(a,s).trim()],l=t.extracted_deadline_text||t.deadline_text||``;l&&!c[0].includes(String(l))&&c.push(`Skilafrestur: ${l}`);let u=At(c).join(` `).replace(/^(Útboðsvefur\s*){1,}/i,``).replace(/\s+/g,` `).trim();return cr(u)?``:u||n}function sr(e){return/Procurement notice imported from Útboðsvefur|Open the source page for full buyer details/i.test(String(e||``))}function cr(e){let t=String(e||``);return[`Framkvæmdasýslan`,`Ríkiseignir`,`Garðabær`,`Grímsnes`,`Fjöldi útboð`,`Útboðsvefur.is - Opinber útboð`].filter(e=>t.includes(e)).length>=3||/^Útboðsvefur\s+Útboðsvefur\.is/i.test(t)}function lr(e,t={},n=``,r=``,i=``){let a=ur(`${r} ${i} ${JSON.stringify(t||{})}`),o=String(e||``).trim();return a&&(!o||/unknown|all iceland|iceland/i.test(o))?a:o||a||`Unknown`}function ur(e){let t=w(e);return t.includes(`vogabyggd`)||t.includes(`reykjavikurborg`)||t.includes(`strandstigur`)?`Reykjavík / Höfuðborgarsvæðið`:``}function N(e){if(!e||e.status!==`open`||!e.url||e.url===`#`||x(e.deadline)<0||dr(e)||e.rawPayload?.extraction_method===`parent_article_with_child_opportunities`||zc(e)||gr(e))return!1;if(!Es(e))return!0;let t=Dr(e);return[`IS`,`NO`,`DK`,`SE`,`FI`].includes(t)}function dr(e){let t=w(e?.source||``),n=w(e?.title||``),r=w(e?.externalId||``),i=w(e?.sourceType||``),a=e?.rawPayload||{},o=`${t} ${n} ${r} ${i}`;return!!(a.is_demo===!0||a.demo===!0||t===`private lead`||t.includes(`private lead`)||t===`grant portal`||t.includes(`grant portal`)||t===`manual test`||t.includes(`manual test`)||[`demo`,`test`,`sample`,`mock`,`fake`].some(e=>i.includes(e))||/\b(demo|test|sample|mock|fake|manual)\b/.test(o)||n.includes(`manual test`)||n.includes(`municipal websites example`)||r.includes(`demo`)||r.includes(`test`))}function P(e,t={}){let n=String(e||``).toLowerCase(),r=fr(t?.rawPayload?.opportunity_intent||t?.rawPayload?.intent);if(r===`confirmed_tender`)return`confirmed_tender`;if(r===`early_opportunity`||r===`market_signal`)return`early_signal`;if(r===`news_context`||r===`not_opportunity`)return`needs_review`;if(Es(t))return`confirmed_tender`;if(I(t)){let e=pr(t);return[`tender_awarded`,`awarded`,`already_tendered`,`announced`].includes(e)?`confirmed_tender`:e===`upcoming_tender`?`early_signal`:`needs_review`}if(n===`early_signal`||n===`needs_review`)return n;let i=L(t);return R(i,[`senn í útboð`,`senn i utbod`])?`early_signal`:hr(i)?`confirmed_tender`:Tr(t?.title||``)&&!hr(i)?`needs_review`:Cr(i)?`early_signal`:(Er(i),`needs_review`)}function fr(e){return{confirmed:`confirmed_tender`,confirmed_tender:`confirmed_tender`,likely_opportunity:`confirmed_tender`,verified:`confirmed_tender`,early_signal:`early_opportunity`,early_opportunity:`early_opportunity`,upcoming_tender:`early_opportunity`,market_signal:`market_signal`,project_signal:`market_signal`,needs_review:`market_signal`,news_context:`news_context`,news:`news_context`,noise:`not_opportunity`,not_opportunity:`not_opportunity`,stale_opportunity:`not_opportunity`,stale:`not_opportunity`,expired:`not_opportunity`}[String(e||``).toLowerCase().trim()]||``}function F(e={}){let t=fr(e?.rawPayload?.opportunity_intent||e?.rawPayload?.intent),n=String(e?.rawPayload?.admin_report_status||``).toLowerCase();if(n===`include`)return`confirmed_tender`;if([`hidden`,`hide`,`noise`,`deleted`].includes(n))return t||`not_opportunity`;if(t)return t;if(Es(e))return`confirmed_tender`;let r=L(e),i=e?.title||``;if(I(e)){let t=pr(e);return[`tender_awarded`,`awarded`,`already_tendered`,`announced`].includes(t)?`confirmed_tender`:t===`upcoming_tender`?`early_opportunity`:`market_signal`}return hr(r)?`confirmed_tender`:Tr(i)||Er(r)?`news_context`:Sr(r)?`early_opportunity`:(wr(r),`market_signal`)}function I(e){return e?.rawPayload?.extraction_method===`vegagerdin_article_project_parser`}function pr(e){let t=String(e?.rawPayload?.tender_state||``).trim(),n=mr(e),r={awarded:`tender_awarded`,open_or_published:`announced`,planned_tender:`upcoming_tender`,unclear:`project_signal`}[t]||t;return n===`tender_awarded`?`tender_awarded`:n===`already_tendered`&&![`tender_awarded`,`announced`].includes(r)?`already_tendered`:n===`announced`&&![`tender_awarded`,`already_tendered`].includes(r)?`announced`:n===`upcoming_tender`&&[``,`project_signal`,`needs_review`,`unclear`].includes(r)?`upcoming_tender`:r||n}function mr(e){let t=L(e);return R(t,[`lægstbjóðandi`,`laegstbjodandi`,`samningur var`,`samið var`,`samid var`,`skrifað var undir verksamning`,`skrifad var undir verksamning`])?`tender_awarded`:R(t,[`útboð var auglýst`,`utbod var auglyst`,`útboðið var auglýst`,`utbodid var auglyst`,`útboð hefur farið fram`,`utbod hefur farid fram`,`útboðið hefur farið fram`,`utbodid hefur farid fram`,`boðið út`,`bodid ut`,`verkið var boðið út`,`verkid var bodid ut`,`útboð var opnað`,`utbod var opnad`,`tilboð opnuð`,`tilbod opnud`])?`already_tendered`:R(t,[`óskað eftir tilboðum`,`oskad eftir tilbodum`,`tilboðsfrestur`,`tilbodsfrestur`,`skilafrestur`,`verðfyrirspurn`,`verdfyrirspurn`,`rammasamningur`,`forval`])?`announced`:R(t,[`áætlað útboð`,`aaetlad utbod`,`áætlað er að bjóða út`,`aaetlad er ad bjoda ut`,`fyrirhugað útboð`,`fyrirhugad utbod`,`senn í útboð`,`senn i utbod`,`útboð verður`,`utbod verdur`])?`upcoming_tender`:`project_signal`}function L(e){return w([e?.title,e?.description,e?.category,e?.source,...Array.isArray(e?.keywords)?e.keywords:[]].filter(Boolean).join(` `))}function R(e,t){let n=w(e);return t.some(e=>n.includes(w(e)))}function hr(e){return R(e,[`útboð`,`utbod`,`útboðsauglýsing`,`utbodsauglysing`,`tilboð`,`tilboðum`,`tilbod`,`tilbodum`,`óskað eftir tilboðum`,`oskad eftir tilbodum`,`verðfyrirspurn`,`verdfyrirspurn`,`innkaup`,`rammasamningur`,`forval`,`tender`,`procurement`,`skilafrestur`,`útboðsgögn`,`utbodsgogn`])}function gr(e={}){let t=e.rawPayload||{};return t.stale_status===`stale_or_expired`||t.opportunity_intent===`stale_opportunity`?!0:_r({title:e.title,description:e.description,content:[e.category,e.source,Array.isArray(e.keywords)?e.keywords.join(` `):``].filter(Boolean).join(` `),publishedDate:e.publishedDate,deadline:e.deadline,sourceName:e.source,sourceType:e.sourceType,connectorType:t.connector_type}).isStale}function _r(e={}){let t=String(e.deadline||``).slice(0,10);if(t&&x(t)>=0)return{isStale:!1,reason:``,thresholdDays:null,ageDays:null,oldYears:[],expiredKeywords:[]};let n=w([e.title,e.description,e.content].filter(Boolean).join(` `)),r=yr(n),i=br(n),a=xr(e.publishedDate),o=a?Math.floor((Date.now()-new Date(`${a}T00:00:00Z`).getTime())/864e5):null,s=vr(e)?45:60;return r.length?{isStale:!0,reason:`Old year detected (${r.join(`, `)}) and no future deadline found.`,thresholdDays:s,ageDays:o,oldYears:r,expiredKeywords:i}:i.length?{isStale:!0,reason:`Expired/result wording detected (${i.slice(0,3).join(`, `)}) and no future deadline found.`,thresholdDays:s,ageDays:o,oldYears:r,expiredKeywords:i}:o!==null&&o>s?{isStale:!0,reason:`Published ${o} days ago with no current deadline.`,thresholdDays:s,ageDays:o,oldYears:r,expiredKeywords:i}:{isStale:!1,reason:``,thresholdDays:s,ageDays:o,oldYears:r,expiredKeywords:i}}function vr(e={}){let t=w(`${e.sourceName||``} ${e.sourceType||``} ${e.connectorType||``}`);return String(e.connectorType||``)===`rss_feed`&&[`municipal`,`sveitarfelag`,`akranes`,`borgarbyggd`,`arborg`,`selfoss`,`gardabaer`,`reykjanesbaer`,`hafnarfjordur`,`mosfellsbaer`,`kopavogur`,`mulathing`,`fjardabyggd`].some(e=>t.includes(w(e)))}function yr(e){let t=new Date().getUTCFullYear(),n=new Set;return String(e||``).replace(/\b(20[0-9]{2})\b/g,(e,r)=>{let i=Number(r);return i>=2020&&i<t&&n.add(i),r}),Array.from(n).sort()}function br(e){return`niðurstaða útboðs.nidurstada utbods.niðurstöður útboðs.nidurstodur utbods.opnun tilboða.opnun tilboda.tilboð opnuð.tilbod opnud.lokið.lokid.lokið útboði.lokid utbodi.búið.buid.útrunnið.ut runnid.eldri útboð.eldri utbod.útboðssaga.utbodssaga.samningur gerður.samningur gerdur.verksamningur.awarded.tender results.contract awarded.expired`.split(`.`).filter(t=>R(e,[t]))}function xr(e){if(!e)return``;let t=new Date(e);return Number.isNaN(t.getTime())?``:t.toISOString().slice(0,10)}function Sr(e){return R(e,[`senn í útboð`,`senn i utbod`,`áætlað útboð`,`aaetlad utbod`,`áætlað er að bjóða út`,`aaetlad er ad bjoda ut`,`fyrirhugað útboð`,`fyrirhugad utbod`,`markaðskönnun`,`markadskonnun`,`rfi`])}function Cr(e){return Sr(e)?!0:R(e,[`áætlaðar framkvæmdir`,`aaetladar framkvaemdir`,`fyrirhugaðar framkvæmdir`,`fyrirhugadar framkvaemdir`,`framkvæmdir hefjast`,`framkvaemdir hefjast`,`malbikunarframkvæmdir`,`malbikunarframkvaemdir`,`vegaframkvæmdir`,`vegaframkvaemdir`,`brúargerð`,`bruargerd`,`jarðvinna`,`jardvinna`,`gatnagerð`,`gatnagerd`])}function wr(e){return R(e,[`áætlaðar framkvæmdir`,`aaetladar framkvaemdir`,`fyrirhugaðar framkvæmdir`,`fyrirhugadar framkvaemdir`,`framkvæmdir hefjast`,`framkvaemdir hefjast`,`malbikunarframkvæmdir`,`malbikunarframkvaemdir`,`vegaframkvæmdir`,`vegaframkvaemdir`,`brúargerð`,`bruargerd`,`jarðvinna`,`jardvinna`,`gatnagerð`,`gatnagerd`,`fræsing`,`fraesing`])}function Tr(e){return R(e,[`lokun`,`lokað`,`lokad`,`lokanir`,`umferð`,`umferd`,`tafir`,`hjáleið`,`hjaleid`,`akstursleið`,`akstursleid`,`vegfarendur`,`frétt`,`frett`,`myndband`,`tekur á sig mynd`,`tekur a sig mynd`,`opið aftur`,`opid aftur`])}function Er(e){return R(e,[`lokun`,`lokanir`,`umferð`,`umferd`,`dagskrá`,`dagskra`,`skráning`,`skraning`,`myndband`,`ráðstefna`,`radstefna`,`kynningarfundur`,`tilkynning`,`fundur`,`fjölskylduganga`,`fjolskylduganga`,`tafir`,`kynnt`,`styrkur`,`frétt`,`frett`,`viðburður`,`vidburdur`])}function Dr(e){let t=Or(e.countryCode);if(t)return t;let n=w(ca(e));return n.includes(`iceland`)||n.includes(`island`)||n.includes(`reykjavik`)||n.includes(`capital area`)||n.includes(`hofudborgarsvaedid`)||n.includes(`east iceland`)||n.includes(`west iceland`)||n.includes(`north iceland`)||n.includes(`south iceland`)||n.includes(`sudurnes`)?`IS`:n.includes(`norway`)?`NO`:n.includes(`denmark`)?`DK`:n.includes(`sweden`)?`SE`:n.includes(`finland`)?`FI`:``}function Or(e){return{IS:`IS`,ISL:`IS`,ICELAND:`IS`,ÍSLAND:`IS`,NO:`NO`,NOR:`NO`,NORWAY:`NO`,DK:`DK`,DNK:`DK`,DENMARK:`DK`,SE:`SE`,SWE:`SE`,SWEDEN:`SE`,FI:`FI`,FIN:`FI`,FINLAND:`FI`}[String(e||``).trim().toUpperCase()]||``}function kr(e,t){return sa(e)?t:t.filter(e=>!/^Located in your selected region:/i.test(String(e||``)))}function Ar(){D.authForm={email:``,password:``,newPassword:``,confirmPassword:``}}function jr(){D.authForm.newPassword=``,D.authForm.confirmPassword=``}function Mr(){return window.VERKRADAR_TED_IMPORT_URL?window.VERKRADAR_TED_IMPORT_URL:window.VERKRADAR_SUPABASE_URL?`${window.VERKRADAR_SUPABASE_URL}/functions/v1/import-ted`:`${d}/functions/v1/import-ted`}function Nr(){return window.VERKRADAR_SOURCE_CONNECTOR_IMPORT_URL?window.VERKRADAR_SOURCE_CONNECTOR_IMPORT_URL:window.VERKRADAR_SUPABASE_URL?`${window.VERKRADAR_SUPABASE_URL}/functions/v1/import-source-connectors`:`${d}/functions/v1/import-source-connectors`}function Pr(){return window.VERKRADAR_ADMIN_COMPANY_ACTIONS_URL?window.VERKRADAR_ADMIN_COMPANY_ACTIONS_URL:window.VERKRADAR_SUPABASE_URL?`${window.VERKRADAR_SUPABASE_URL}/functions/v1/admin-company-actions`:`${d}/functions/v1/admin-company-actions`}async function Fr(e){let t=await e.text();if(!t)return{};try{return JSON.parse(t)}catch{return{errors:[t]}}}async function Ir(){if(!D.isAdmin){D.importStatus={errors:[`You do not have access to import TED notices.`]},X();return}let e=Mr();if(!e){D.importStatus={errors:[`TED importer is not configured. Set window.VERKRADAR_TED_IMPORT_URL or window.VERKRADAR_SUPABASE_URL for this environment.`]},X();return}D.importLoading=!0,D.importStatus=null,D.importedTedOpportunities=[],X();try{let t=await fetch(e,{method:`POST`,headers:await zr(),body:JSON.stringify({limit:50,importMode:D.tedImportMode})}),n=await Fr(t);if(D.importStatus=t.ok?n:{...n,errors:n.errors||[`Import failed with status ${t.status}`]},t.ok){await A();let e=D.companyId?await hi():Number(n.matched||0);await Rr(),D.isAdmin&&(await An(),await jn()),D.importStatus={...D.importStatus,matched:e},V(`TED import completed`,`success`)}}catch(e){D.importStatus={errors:[e instanceof Error?e.message:String(e)]}}finally{D.importLoading=!1,X()}}async function Lr(e=``){if(!D.isAdmin){D.connectorImportStatus={errors:[`You do not have access to run source imports.`]},X();return}let t=Nr();if(!t){D.connectorImportStatus={errors:[`Source connector importer is not configured. Set window.VERKRADAR_SOURCE_CONNECTOR_IMPORT_URL or window.VERKRADAR_SUPABASE_URL for this environment.`]},X();return}D.connectorImportLoading=!e,D.connectorTestingSourceId=e||null,D.connectorImportStatus=null,X();try{let n=await fetch(t,{method:`POST`,headers:await zr(),body:JSON.stringify({limit:e?50:20,maxSources:e?1:6,sourceId:e||void 0,refreshMatches:!!e,generateReports:!1})}),r=await Fr(n),i=Array.isArray(r.errors)?r.errors:[],a=Array.isArray(r.failedSources)?r.failedSources:[];D.connectorImportStatus=n.ok?{...r,failedSources:a}:{...r,failedSources:a,errors:i.length?i:[`Source import failed with status ${n.status}${n.statusText?` ${n.statusText}`:``}`]},n.ok&&(await A(),await nr(),V(e?`Source test completed`:`Automatic source imports completed`,`success`))}catch(e){D.connectorImportStatus={errors:[e instanceof Error?e.message:String(e)]}}finally{D.connectorImportLoading=!1,D.connectorTestingSourceId=null,X()}}async function Rr(){if(!f){D.importedTedOpportunities=[],D.importedTedOpportunitiesLoaded=!0;return}D.importedTedOpportunitiesLoading=!0,D.importedTedOpportunitiesError=null;try{let{data:e,error:t}=await f.from(`sources`).select(`id, name`).in(`name`,[`TED Iceland/Nordic`,`EU TED`,`Tenders Electronic Daily`]);if(t)throw t;let n=(e||[]).map(e=>e.id).filter(Boolean);if(!n.length){D.importedTedOpportunities=[];return}let{data:r,error:i}=await f.from(`opportunities`).select(`*, sources(name, source_type)`).in(`source_id`,n).order(`created_at`,{ascending:!1}).limit(10);if(i)throw i;D.importedTedOpportunities=(r||[]).map(rr)}catch(e){console.error(`Failed to load latest TED opportunities:`,e),D.importedTedOpportunities=[],D.importedTedOpportunitiesError=B(e)}finally{D.importedTedOpportunitiesLoading=!1,D.importedTedOpportunitiesLoaded=!0}}async function zr(){let e={"content-type":`application/json`},t=window.VERKRADAR_SUPABASE_ANON_KEY||`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFzb2p4amJzZ3FiZnBiZXBvanpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAwNTU2NjgsImV4cCI6MjA5NTYzMTY2OH0.yPA34VbqWqKrBPespmHr5AojYzjhy3kGRxswO9XdAd0`;t&&t!==`PASTE_MY_ANON_PUBLIC_KEY_HERE`&&(e.apikey=t);let{data:n,error:r}=f?await f.auth.getSession():{data:{session:null},error:null};if(r)throw r;let i=n.session?.access_token;if(!i)throw Error(`You must be logged in to run this admin action.`);return e.authorization=`Bearer ${i}`,e}function Br(){return`${window.location.origin}/#/onboarding`}function Vr(){return`${window.location.origin}/#/reset-password`}function Hr(e){let t=e?.user?.identities;return Array.isArray(t)&&t.length===0}function Ur(){return[{label:E(`login`),href:`/login`,variant:`primary`},{label:E(`forgotPassword`),href:`/forgot-password`,variant:`secondary`}]}async function Wr(e,t){un(),D.authSubmitting=!0,D.authMessage=null,X();try{if(!f)throw Error(`Supabase client is not configured.`);let{data:n,error:r}=await f.auth.signUp({email:String(e||``).trim(),password:String(t||``),options:{emailRedirectTo:Br()}});if(r)throw r;if(dn(),Hr(n)){D.user=null,D.currentUser=null,D.authMessage={type:`error`,text:E(`signupExistingAccount`),actions:Ur()},D.authForm.password=``,X();return}if(!n.session?.user){D.user=null,D.currentUser=null,D.authMessage={type:`success`,text:Array.isArray(n?.user?.identities)&&n.user.identities.length>0?E(`signupCreatedConfirm`):E(`signupNeutralNextSteps`)},D.authForm.password=``,X();return}D.user=n.session.user,D.currentUser=D.user,D.profileDraft=null,D.profileDraftDirty=!1,await Xr(D.user),D.authMessage={type:`success`,text:E(`signupCreatedConfirm`)},await ni({overwriteDraft:!0}),Ar(),O(Sn())}catch(e){console.error(`Signup failed:`,e);let t=Si(e);D.authMessage={type:`error`,text:xi(e,`signup`),actions:t?Ur():[]},X()}finally{D.authSubmitting=!1,X()}}async function Gr(e,t){D.authSubmitting=!0,D.authMessage=null,X();try{if(!f)throw Error(`Supabase client is not configured.`);let{data:n,error:r}=await f.auth.signInWithPassword({email:String(e||``).trim(),password:String(t||``)});if(r)throw r;D.user=n.user||await Yr(),D.currentUser=D.user,D.profileDraft=null,D.profileDraftDirty=!1,await Xr(D.user),await ni({overwriteDraft:!0}),Ar(),O(Sn())}catch(e){console.error(`Login failed:`,e),D.authMessage={type:`error`,text:xi(e,`login`)},X()}finally{D.authSubmitting=!1,X()}}async function Kr(e){D.authSubmitting=!0,D.authMessage=null,X();try{if(!f)throw Error(`Supabase client is not configured.`);let{error:t}=await f.auth.resetPasswordForEmail(String(e||``).trim(),{redirectTo:Vr()});if(t)throw t;D.authMessage={type:`success`,text:`If an account exists for this email, a reset link has been sent.`}}catch(e){console.error(`Password reset request failed:`,e),D.authMessage={type:`error`,text:`We could not send a reset link right now. Please try again.`}}finally{D.authSubmitting=!1,X()}}async function qr(e,t){let n=String(e||``),r=String(t||``);if(!n){D.authMessage={type:`error`,text:`Enter a new password.`},X();return}if(n.length<8){D.authMessage={type:`error`,text:`Password must be at least 8 characters.`},X();return}if(n!==r){D.authMessage={type:`error`,text:`Passwords do not match.`},X();return}D.authSubmitting=!0,D.authMessage=null,X();try{if(!f)throw Error(`Supabase client is not configured.`);let{error:e}=await f.auth.updateUser({password:n});if(e)throw e;jr(),O(`/login`),D.authMessage={type:`success`,text:`Password updated. You can now log in.`},X()}catch(e){console.error(`Password update failed:`,e),D.authMessage={type:`error`,text:`This reset link may be expired or invalid. Request a new reset link and try again.`},X()}finally{D.authSubmitting=!1,X()}}async function Jr(){try{if(f){let{error:e}=await f.auth.signOut();if(e)throw e}}catch(e){console.error(`Logout failed:`,e)}finally{D.user=null,D.currentUser=null,D.isAdmin=!1,D.authLoaded=!0,D.adminLoaded=!0,D.profileLoaded=!0,dn(),O(`/`),X()}}async function Yr(){if(!f)return null;let{data:e,error:t}=await f.auth.getUser();return t?(console.error(`Failed to get current user:`,t),null):e.user||null}async function Xr(e=D.user){if(!f||!e)return D.isAdmin=!1,!1;try{let{data:t,error:n}=await f.from(`admin_users`).select(`user_id`).eq(`user_id`,e.id).maybeSingle();if(n)throw n;return D.isAdmin=!!t?.user_id,D.isAdmin}catch(e){return console.error(`Failed to check admin access:`,e),D.isAdmin=!1,!1}}function z(){return Z(`
    <section class="empty-state">
      <h1>${T(E(`authRequiredTitle`))}</h1>
      <p>${T(E(`authRequiredText`))}</p>
      <button class="btn btn-primary" data-action="go" data-href="/login">${T(E(`login`))}</button>
      <button class="btn btn-secondary" data-action="go" data-href="/signup">${T(E(`createAccount`))}</button>
    </section>
  `)}function Zr(){return Z(`
    <section class="empty-state">
      <h1>You do not have access to this page.</h1>
      <p>Admin access is limited to approved VerkRadar admin users.</p>
    </section>
  `)}var Qr=!1,$r=!1;async function ei(){if(!f)return D.user=null,D.currentUser=null,null;let{data:e,error:t}=await f.auth.getSession();if(t)throw t;return D.user=e.session?.user||null,D.currentUser=D.user,D.user}async function ti(){D.adminLoaded=!1,await Xr(D.currentUser||D.user),D.adminLoaded=!0}async function ni(e={}){let{overwriteDraft:t=!1,showGlobalLoading:n=!1}=e;(n||!D.profile&&!D.profileDraftDirty)&&(D.profileLoaded=!1),D.profileLoading=!0,D.profileLoadError=null;try{await ri(ci({overwriteDraft:t}),en,`Profile loading took too long. Please retry.`)}catch(e){console.error(`Failed to load profile from Supabase:`,e),D.profileLoadError=B(e)}finally{D.profileLoading=!1,D.profileLoaded=!0}}function ri(e,t,n){let r,i=new Promise((e,i)=>{r=setTimeout(()=>i(Error(n)),t)});return Promise.race([e,i]).finally(()=>clearTimeout(r))}async function ii(){if(!D.isSavingProfile){D.profileLoadError=null,D.profileLoading=!0,X();try{await ni({overwriteDraft:!0})}catch(e){console.error(`Settings profile retry failed:`,e),D.profileLoadError=B(e)}finally{D.profileLoading=!1,D.profileLoaded=!0,X(),k()}}}function ai(){!f||$r||($r=!0,f.auth.onAuthStateChange(async(e,t)=>{if(Qr){if(D.user=t?.user||null,D.currentUser=D.user,D.user){if(e===`PASSWORD_RECOVERY`){D.authLoaded=!0,D.adminLoaded=!0,D.profileLoaded=!0,D.authMessage=null,O(`/reset-password`);return}try{await ti(),D.route===`/settings`&&D.profileDraftDirty?D.profileLoaded=!0:await ni()}catch(e){console.error(`Auth profile refresh failed:`,e),D.profileLoadError=B(e),D.adminLoaded=!0,D.profileLoaded=!0}if(Dn())return;X(),k();return}D.isAdmin=!1,D.profile=null,D.companyMembership=null,D.profileDraft=null,D.profileDraftDirty=!1,D.profileLoading=!1,D.profileLoadError=null,D.companyId=null,D.storedMatches=[],D.reports=[],D.reportsLoaded=!1,D.reportsLoadError=null,D.selectedReportId=null,D.authLoaded=!0,D.adminLoaded=!0,D.profileLoaded=!0,e===`SIGNED_OUT`&&O(`/`),X(),k()}}))}async function oi(){D.isBooting=!0,D.authLoaded=!1,D.profileLoaded=!1,D.adminLoaded=!1,D.bootError=null,X();try{ai(),await ei(),D.authLoaded=!0,D.currentUser?(await ti(),await ni({overwriteDraft:!0,showGlobalLoading:!0})):(D.profile=null,D.companyMembership=null,D.profileDraft=null,D.profileDraftDirty=!1,D.profileLoading=!1,D.profileLoadError=null,D.companyId=null,D.isAdmin=!1,D.adminLoaded=!0,D.profileLoaded=!0)}catch(e){console.error(`Boot failed:`,e),D.bootError=B(e),D.authLoaded=!0,D.adminLoaded=!0,D.profileLoaded=!0}finally{D.authLoading=!1,D.isBooting=!1,Qr=!0,Tn()?En(`/reset-password`):Dn({replace:!0}),X(),k()}}async function si(){if(!f||!D.user)return{company:null,membership:null};let{data:e,error:t}=await f.from(`companies`).select(`*`).eq(`owner_id`,D.user.id).maybeSingle();if(t)throw t;if(e)return{company:e,membership:null};let n=(await u(f,D.user))[0]||null;if(!n?.company_id)return{company:null,membership:null};let{data:r,error:i}=await f.from(`companies`).select(`*`).eq(`id`,n.company_id).maybeSingle();if(i)throw i;return{company:r||null,membership:n}}async function ci(e={}){let{overwriteDraft:t=!1}=e;if(!f||!D.user){D.profile=null,D.companyMembership=null,(t||!D.profileDraftDirty)&&(D.profileDraft=null),X();return}try{await l(f,D.user).catch(e=>(console.warn(`Failed to claim invited company memberships:`,e),[]));let{company:e,membership:n}=await si();if(!e){D.companyId=null,D.companyMembership=null,D.storedMatches=[],D.reports=[],D.reportsLoaded=!1,D.reportsLoadError=null,D.selectedReportId=null,D.profile=null,(t||!D.profileDraftDirty)&&(D.profileDraft=null),D.profileLoadError=null,X(),k();return}if(D.profileDraftDirty&&D.companyId&&D.companyId!==e.id&&!t){if(!window.confirm(`You have unsaved profile changes. Switch company profile and discard those edits?`)){D.profileLoadError=`Unsaved changes were kept. Save or reload before switching company profiles.`,X(),k();return}D.profileDraftDirty=!1}let[r,i,a]=await Promise.all([f.from(`company_services`).select(`service`).eq(`company_id`,e.id),f.from(`company_locations`).select(`location`).eq(`company_id`,e.id),f.from(`company_keywords`).select(`keyword, type`).eq(`company_id`,e.id)]);if(r.error)throw r.error;if(i.error)throw i.error;if(a.error)throw a.error;D.companyId!==e.id&&(D.reports=[],D.reportsLoaded=!1,D.reportsLoadError=null,D.selectedReportId=null),D.companyId=e.id,D.companyMembership=n||null;let o=ui(e,r.data||[],i.data||[],a.data||[]);D.profile=o,(t||!D.profileDraftDirty)&&Ni(o),D.profileLoadError=null,Ci(D.profile),await ja(),await di(),X(),k()}catch(e){console.error(`Failed to load Supabase company profile:`,e),D.profileLoadError=B(e),D.profileDraftDirty||(D.companyId=null,D.companyMembership=null,D.storedMatches=[],D.reports=[],D.reportsLoaded=!1,D.reportsLoadError=null,D.selectedReportId=null,D.profile=null),D.profileDraftDirty||(D.profileDraft=null),X(),k()}}async function li(e){if(!f)throw Error(`Supabase client is not configured.`);let t={...e,companyName:String(e.companyName||``).trim(),kennitala:String(e.kennitala||``).trim(),contactEmail:String(e.contactEmail||``).trim(),billingEmail:String(e.billingEmail||``).trim(),contactName:String(e.contactName||``).trim(),phone:String(e.phone||``).trim(),address:String(e.address||``).trim(),website:String(e.website||``).trim(),industry:String(e.industry||``).trim(),selectedPlan:an(e.selectedPlan||D.pendingSignupPlan||D.profile?.selectedPlan||D.profile?.plan)||`basic`,billingStatus:e.billingStatus||D.profile?.billingStatus||`trial`,trialStartedAt:e.trialStartedAt||D.profile?.trialStartedAt||new Date().toISOString(),trialEndsAt:e.trialEndsAt||D.profile?.trialEndsAt||new Date(Date.now()+336*60*60*1e3).toISOString(),services:C(e.services),locations:C(e.locations),includeKeywords:C(e.includeKeywords),excludeKeywords:C(e.excludeKeywords),baseLocation:String(e.baseLocation||``).trim(),serviceAreas:C(e.serviceAreas),willingToTravel:!!e.willingToTravel,nationalProjects:!!e.nationalProjects,remoteProjects:!!e.remoteProjects,minimumProjectValueForTravel:Di(e.minimumProjectValueForTravel),minProjectValue:Di(e.minProjectValue),maxProjectValue:Di(e.maxProjectValue),allowUnknownValue:!!e.allowUnknownValue,reportFrequency:e.reportFrequency||`weekly`,reportDay:e.reportDay||`monday`,deadlineReminders:!!e.deadlineReminders,includeLowConfidence:!!e.includeLowConfidence,autoAlertMode:e.autoAlertMode||`auto_safe_only`},{data:{user:n},error:r}=await f.auth.getUser();if(r)throw r;if(!n)throw Error(`You must be logged in to save a company profile.`);D.user=n;let i={company_name:t.companyName,contact_email:t.contactEmail||n.email,kennitala:t.kennitala||null,billing_email:t.billingEmail||t.contactEmail||n.email,contact_name:t.contactName||null,phone:t.phone||null,address:t.address||null,website:t.website||null,industry:t.industry,plan:t.selectedPlan,selected_plan:t.selectedPlan,billing_status:t.billingStatus,trial_started_at:t.trialStartedAt,trial_ends_at:t.trialEndsAt,base_location:t.baseLocation||null,service_areas:t.serviceAreas,willing_to_travel:t.willingToTravel,national_projects:t.nationalProjects,remote_projects:t.remoteProjects,minimum_project_value_for_travel:t.minimumProjectValueForTravel,min_project_value:t.minProjectValue,max_project_value:t.maxProjectValue,allow_unknown_value:t.allowUnknownValue,report_frequency:t.reportFrequency,report_day:t.reportDay,deadline_reminders:t.deadlineReminders,include_low_confidence:t.includeLowConfidence,auto_alert_mode:t.autoAlertMode},{data:a,error:o}=await(D.companyId?f.from(`companies`).update(i).eq(`id`,D.companyId).select().single():f.from(`companies`).upsert({...i,owner_id:n.id},{onConflict:`owner_id`}).select().single());if(o)throw console.error(`Company upsert error:`,o),o;D.companyId!==a.id&&(D.reports=[],D.reportsLoaded=!1,D.reportsLoadError=null,D.selectedReportId=null),D.companyId=a.id;let s=(await Promise.all([f.from(`company_services`).delete().eq(`company_id`,a.id),f.from(`company_locations`).delete().eq(`company_id`,a.id),f.from(`company_keywords`).delete().eq(`company_id`,a.id)])).find(e=>e.error)?.error;if(s)throw s;let c=t.services.map(e=>({company_id:a.id,service:e})),l=t.locations.map(e=>({company_id:a.id,location:e})),u=[...t.includeKeywords.map(e=>({company_id:a.id,keyword:e,type:`include`})),...t.excludeKeywords.map(e=>({company_id:a.id,keyword:e,type:`exclude`}))];if(c.length){let{error:e}=await f.from(`company_services`).insert(c);if(e)throw e}if(l.length){let{error:e}=await f.from(`company_locations`).insert(l);if(e)throw e}if(u.length){let{error:e}=await f.from(`company_keywords`).insert(u);if(e)throw e}D.profile=t,D.pendingSignupPlan=``,cn(),Ci(t)}function ui(e,t,n,r){return{id:e.id||``,ownerId:e.owner_id||``,companyName:e.company_name||``,kennitala:e.kennitala||``,contactEmail:e.contact_email||``,billingEmail:e.billing_email||e.contact_email||``,contactName:e.contact_name||``,phone:e.phone||``,address:e.address||``,website:e.website||``,industry:e.industry||``,plan:e.plan||e.selected_plan||`basic`,selectedPlan:e.selected_plan||e.plan||`basic`,billingStatus:e.billing_status||`trial`,trialStartedAt:e.trial_started_at||``,trialEndsAt:e.trial_ends_at||``,services:C(t.map(e=>e.service)),includeKeywords:C(r.filter(e=>e.type===`include`).map(e=>e.keyword)),excludeKeywords:C(r.filter(e=>e.type===`exclude`).map(e=>e.keyword)),locations:C(n.map(e=>e.location)),baseLocation:e.base_location||``,serviceAreas:C(e.service_areas),willingToTravel:!!e.willing_to_travel,nationalProjects:!!e.national_projects,remoteProjects:!!e.remote_projects,minimumProjectValueForTravel:e.minimum_project_value_for_travel==null?null:Number(e.minimum_project_value_for_travel),minProjectValue:e.min_project_value==null?null:Number(e.min_project_value),maxProjectValue:e.max_project_value==null?null:Number(e.max_project_value),allowUnknownValue:!!e.allow_unknown_value,reportFrequency:e.report_frequency||`weekly`,reportDay:e.report_day||`monday`,deadlineReminders:!!e.deadline_reminders,includeLowConfidence:!!e.include_low_confidence,autoAlertMode:e.auto_alert_mode||`auto_safe_only`}}async function di(){if(!f||!D.companyId){D.storedMatches=[];return}try{let{data:e,error:t}=await f.from(`opportunity_matches`).select(`*, opportunities(*, sources(name, source_type))`).eq(`company_id`,D.companyId).order(`match_score`,{ascending:!1});if(t)throw t;let n=(e||[]).map(e=>e.calculated_at||e.updated_at||e.created_at).filter(Boolean).map(e=>new Date(e).getTime()).filter(e=>!Number.isNaN(e));D.lastMatchedAt=n.length?new Date(Math.max(...n)).toISOString():null;let r=(e||[]).filter(e=>e.opportunities).map(ir).filter(Qc).filter(N),i=r.map(e=>e.id).filter(Boolean),a=[];if(i.length){let{data:e,error:t}=await f.from(`ai_match_reviews`).select(`company_id, opportunity_id, fit, confidence, send_to_client, reason, fit_reasons, risks_or_questions, suggested_client_summary, created_at, updated_at`).eq(`company_id`,D.companyId).in(`opportunity_id`,i);t&&console.warn(`Failed to load AI reviews for report ranking:`,t),a=e||[]}D.storedMatches=Ct(r,a)}catch(e){console.error(`Failed to load stored opportunity matches. Falling back to frontend matching:`,e),D.storedMatches=[],D.lastMatchedAt=null}}async function fi(){if(D.companyId&&!D.reportArchiveLoading){D.reportArchiveLoading=!0,D.reportsLoadError=null,X();try{if(!f)throw Error(`Supabase client is not configured.`);let{data:e,error:t}=await f.from(`reports`).select(`
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
      `).eq(`company_id`,D.companyId).is(`archived_at`,null).order(`created_at`,{ascending:!1});if(t)throw t;D.reports=e||[],D.reportsLoaded=!0}catch(e){console.error(`Failed to load reports:`,e),D.reportsLoadError=B(e),D.reports=[],D.reportsLoaded=!0}finally{D.reportArchiveLoading=!1,X()}}}async function pi(){if(!D.user){D.reportMessage={type:`error`,text:`Log in to save reports.`},X();return}if(!D.companyId){D.reportMessage={type:`error`,text:`Create a company profile before saving reports.`},X();return}let e=Ac();if(!e.length){D.reportMessage={type:`error`,text:`No useful matches above the report threshold yet.`},X();return}let t=Mc(D.profile,e);D.reportSaveLoading=!0,D.reportMessage=null,X();try{let{data:n,error:r}=await f.from(`reports`).insert({company_id:D.companyId,title:t.title,period_start:t.periodStart,period_end:t.periodEnd,summary:t.summary,text_content:t.textContent,html_content:t.htmlContent,status:`draft`}).select(`id`).single();if(r)throw r;let i=e.filter(e=>Pt(e.id)).map((e,t)=>({report_id:n.id,opportunity_id:e.id,match_score:e.matchScore,match_reasons:e.matchReasons||[],risks:e.risks||[],sort_order:t+1}));if(i.length){let{error:e}=await f.from(`report_items`).insert(i);if(e)throw e}D.reportMessage={type:`success`,text:`Report saved`},await fi(),V(`Report saved`,`success`)}catch(e){console.error(`Failed to save report:`,e),D.reportMessage={type:`error`,text:`Failed to save report. ${B(e)}`}}finally{D.reportSaveLoading=!1,X()}}async function mi(e){if(!(!e||!f||!D.user)&&window.confirm(D.language===`is`?`Ertu viss um að þú viljir fela þetta yfirlit? Þetta er ekki hægt að afturkalla í mælaborðinu.`:`Are you sure you want to hide this report? This cannot be undone from the dashboard.`)){D.reportArchiveLoading=!0,D.reportMessage=null,X();try{let{error:t}=await f.from(`reports`).update({archived_at:new Date().toISOString(),archived_by:D.user.id}).eq(`id`,e).eq(`company_id`,D.companyId);if(t)throw t;D.selectedReportId===e&&(D.selectedReportId=null),D.reports=D.reports.filter(t=>t.id!==e),D.reportMessage={type:`success`,text:D.language===`is`?`Yfirlitið var falið.`:`Report hidden.`},V(D.language===`is`?`Yfirlit falið`:`Report hidden`,`success`)}catch(e){console.error(`Failed to archive report:`,e),D.reportMessage={type:`error`,text:D.language===`is`?`Gat ekki falið yfirlitið. ${B(e)}`:`Could not hide report. ${B(e)}`}}finally{D.reportArchiveLoading=!1,X()}}}async function hi(){D.matchingLoading=!0,D.matchStatus=null,X();try{if(!f)throw Error(`Supabase client is not configured.`);let e=D.user||await Yr();if(!e)throw Error(`You must be logged in to run matching.`);D.user=e;let{company:t}=await si();if(!t)throw Error(`No Supabase company profile found. Save onboarding first.`);D.companyId=t.id;let[n,r,i,a]=await Promise.all([f.from(`company_services`).select(`service`).eq(`company_id`,t.id),f.from(`company_locations`).select(`location`).eq(`company_id`,t.id),f.from(`company_keywords`).select(`keyword, type`).eq(`company_id`,t.id),f.from(`opportunities`).select(`*, sources(name, source_type)`).eq(`status`,`open`)]);if(n.error)throw n.error;if(r.error)throw r.error;if(i.error)throw i.error;if(a.error)throw a.error;let o=ui(t,n.data||[],r.data||[],i.data||[]),s=D.profileDraftDirty,c=(a.data||[]).map(rr).filter(N).map(e=>pa(o,e)).filter(e=>e.matchScore>=50).map(e=>({company_id:t.id,opportunity_id:e.id,match_score:e.matchScore,match_label:e.matchLabel,match_reasons:e.matchReasons,risks:e.risks,next_steps:e.nextSteps,calculated_at:new Date().toISOString()})),{error:l}=await f.from(`opportunity_matches`).delete().eq(`company_id`,t.id);if(l)throw l;if(c.length){let{error:e}=await f.from(`opportunity_matches`).insert(c);if(e)throw e}D.profile=o,Ci(o),s||Ni(o);let u=c.length===1?`match`:`matches`;return D.matchStatus={type:`success`,text:`Matching complete — ${c.length} stored ${u} found.`},await A(),await ja(),await di(),c.length}catch(e){return console.error(`Failed to run matching:`,e),D.matchStatus={type:`error`,text:`Failed to run matching. ${B(e)}`},0}finally{D.matchingLoading=!1,X()}}async function gi(e,t){if(!D.isAdmin){D.adminMessage={type:`error`,text:`You do not have access to this page.`},X();return}D.adminSubmitting=!0,D.adminMessage=null,X();try{if(!f)throw Error(`Supabase client is not configured.`);let n=Object.fromEntries(e.entries()),r=String(n.sourceName||n.source||`Manual`).trim()||`Manual`,i=String(n.title||``).trim();if(!i)throw Error(`Title is required.`);let a=String(n.description||``).trim()||`Manual opportunity: ${i}`,o={source_id:await bi(r),external_id:`manual-${Date.now()}`,title:i,buyer:String(n.buyer||``).trim()||null,category:String(n.category||``).trim()||null,type:String(n.type||``).trim()||`tender`,description:a,deadline:n.deadline||null,published_date:n.publishedDate||n.published_date||null,location:String(n.location||``).trim()||null,estimated_value:n.estimatedValue||n.estimated_value?Number(n.estimatedValue||n.estimated_value):null,currency:`ISK`,url:n.url||null,cpv_code:n.cpvCode||n.cpv_code||null,requirements:Mt(n.requirements),keywords:Mt(n.keywords),difficulty:String(n.difficulty||``).trim()||`medium`,status:String(n.status||``).trim()||`open`,raw_payload:{created_from:`admin`,source_name:r}},{error:s}=await f.from(`opportunities`).insert(o).select().single();if(s)throw console.error(`Supabase insert error:`,s),Error(`${s.message} (${s.code})`);D.adminMessage={type:`success`,text:`Opportunity saved to Supabase.`},D.adminOpportunityDraft=fn(),t?.reset(),await A(),D.companyId&&await hi(),V(`Opportunity added`,`success`)}catch(e){let t=B(e);console.error(`Failed to add opportunity. If this is an RLS error, allow anon insert/select during development:`,e),D.adminMessage={type:`error`,text:`Failed to save opportunity. ${t}`},X()}finally{D.adminSubmitting=!1,X()}}async function _i(t){if(!D.isAdmin){D.adminMessage={type:`error`,text:`You do not have access to this page.`},X();return}D.adminDeletingId=t,D.adminMessage=null,X();try{if(!f)throw Error(`Supabase client is not configured.`);let{error:n}=await f.from(`opportunities`).delete().eq(`id`,t);if(n)throw n;D.saved=D.saved.filter(e=>e!==t),D.ignored=D.ignored.filter(e=>e!==t),Ti(e.saved,D.saved),Ti(e.ignored,D.ignored),D.adminMessage={type:`success`,text:`Opportunity deleted from Supabase.`},await A(),await Rr(),V(`Opportunity deleted`,`success`)}catch(e){let t=B(e);console.error(`Failed to delete opportunity. If this is an RLS error, allow anon delete/select during development:`,e),D.adminMessage={type:`error`,text:`Failed to delete opportunity. ${t}`},X()}finally{D.adminDeletingId=null,X()}}async function vi(e,t){if(!D.isAdmin){D.adminMessage={type:`error`,text:`You do not have access to this page.`},X();return}D.adminUpdatingId=e,D.adminMessage=null,X();try{if(!f)throw Error(`Supabase client is not configured.`);let{error:n}=await f.from(`opportunities`).update({status:t}).eq(`id`,e);if(n)throw n;D.adminMessage={type:`success`,text:t===`open`?`Opportunity marked relevant.`:`Opportunity hidden.`},await A(),await Rr(),V(t===`open`?`Marked relevant`:`Opportunity hidden`,`success`)}catch(e){let t=B(e);console.error(`Failed to update opportunity status:`,e),D.adminMessage={type:`error`,text:`Failed to update opportunity. ${t}`},X()}finally{D.adminUpdatingId=null,X()}}async function yi(e,t){if(!D.isAdmin){D.adminMessage={type:`error`,text:`You do not have access to this page.`},X();return}let n=D.opportunities.find(t=>t.id===e);if(!n)return;let r={include:{opportunity_intent:`confirmed_tender`,quality_status:`confirmed_tender`,hidden_from_reports:!1,admin_report_status:`include`},hide:{hidden_from_reports:!0,admin_report_status:`hidden`},noise:{opportunity_intent:`not_opportunity`,quality_status:`needs_review`,hidden_from_reports:!0,admin_report_status:`noise`},confirmed_tender:{opportunity_intent:`confirmed_tender`,quality_status:`confirmed_tender`,hidden_from_reports:!1,admin_report_status:`include`},early_opportunity:{opportunity_intent:`early_opportunity`,quality_status:`early_signal`,hidden_from_reports:!1,admin_report_status:`include`}}[t];if(r){D.adminUpdatingId=e,D.adminMessage=null,X();try{if(!f)throw Error(`Supabase client is not configured.`);let t={...n.rawPayload||{},...r,admin_reviewed_at:new Date().toISOString()},{error:i}=await f.from(`opportunities`).update({raw_payload:t}).eq(`id`,e);if(i)throw i;D.adminMessage={type:`success`,text:`Report visibility updated.`},await A(),V(`Report visibility updated`,`success`)}catch(e){let t=B(e);console.error(`Failed to update report visibility:`,e),D.adminMessage={type:`error`,text:`Failed to update report visibility. ${t}`},X()}finally{D.adminUpdatingId=null,X()}}}async function bi(e){if(!f)throw Error(`Supabase client is not configured`);let t=e&&e.trim()?e.trim():`Manual`,{data:n,error:r}=await f.from(`sources`).select(`id`).eq(`name`,t).maybeSingle();if(r)throw console.error(`Source select error:`,r),r;if(n&&n.id)return n.id;let{data:i,error:a}=await f.from(`sources`).insert({name:t,source_type:`manual`,is_active:!0,notes:`Created from VerkRadar admin page`}).select(`id`).single();if(a)throw console.error(`Source insert error:`,a),a;return i.id}function B(e){return e?typeof e==`string`?e:[e.message,e.details,e.hint,e.code].filter(Boolean).join(` `):`Unknown error`}function xi(e,t=`login`){let n=String(e?.message||e||``).toLowerCase(),r=String(e?.code||e?.status||``).toLowerCase();return n.includes(`invalid login credentials`)||n.includes(`invalid_credentials`)||r.includes(`invalid_credentials`)?E(`emailOrPasswordIncorrect`):n.includes(`email not confirmed`)?E(`confirmEmailBeforeLogin`):Si(e)?E(`signupExistingAccount`):n.includes(`password`)&&n.includes(`characters`)?E(`passwordTooShort`):n.includes(`rate limit`)||n.includes(`too many`)?E(`tooManyAttempts`):E(t===`signup`?`couldNotCreateAccount`:`couldNotLogin`)}function Si(e){let t=String(e?.message||e||``).toLowerCase(),n=String(e?.code||e?.status||``).toLowerCase();return t.includes(`user already registered`)||t.includes(`already registered`)||t.includes(`already exists`)||n.includes(`user_already_exists`)||n.includes(`email_exists`)}function V(e,t=`success`){D.toast={message:e,type:t},X(),clearTimeout(window.__toastTimeout),window.__toastTimeout=setTimeout(()=>{D.toast=null,X()},2500)}function Ci(t){localStorage.setItem(e.profile,JSON.stringify(t))}function wi(e){try{let t=localStorage.getItem(e);return t?JSON.parse(t):[]}catch{return[]}}function Ti(e,t){localStorage.setItem(e,JSON.stringify(t))}function Ei(e){return C(e).join(`, `)}function Di(e){if(e==null||e===``)return null;let t=Number(e);return Number.isFinite(t)?t:null}function Oi(e){return String(e||``).trim().toLowerCase()}function ki(e,t=D.profileDraft?.industry){return i[e]?.[t]||[]}function Ai(e,t){if(![`services`,`includeKeywords`,`excludeKeywords`].includes(e)||!t)return;H();let n=Array.isArray(D.profileDraft[e])?D.profileDraft[e]:[],r=Oi(t),i=n.some(e=>Oi(e)===r);D.profileDraft[e]=i?n.filter(e=>Oi(e)!==r):[...n,t],U(),X()}function ji({field:e,title:t,values:n,selectedValues:r}){if(!n.length)return``;let i=Array.isArray(r)?r:[];return`
    <div class="suggestion-group">
      <div class="suggestion-group-head">
        <span>${T(t)}</span>
      </div>
      <div class="suggestion-chips">
        ${n.map(t=>{let n=i.some(e=>Oi(e)===Oi(t));return`
            <button
              type="button"
              class="suggestion-chip ${n?`is-selected`:``}"
              data-action="toggle-profile-suggestion"
              data-field="${T(e)}"
              data-value="${T(t)}"
              aria-pressed="${n?`true`:`false`}"
            >${T(t)}</button>
          `}).join(``)}
      </div>
    </div>
  `}function H(){if(!D.profileDraft){if(D.profile){D.profileDraft=Mi(D.profile);return}D.profileDraft=tn(),D.pendingSignupPlan&&(D.profileDraft.selectedPlan=D.pendingSignupPlan)}}function Mi(e){return{...e,services:C(e.services),includeKeywords:C(e.includeKeywords),excludeKeywords:C(e.excludeKeywords),locations:C(e.locations),serviceAreas:C(e.serviceAreas)}}function U(){D.profileDraftDirty=!0,D.profileSaved=!1,D.profileSaveMessage=null,D.profileSaveError=null}function Ni(e){D.profileDraft=Mi(e||tn()),D.profileDraftDirty=!1}function Pi(e){H();let t=new FormData(e),n={...D.profileDraft};W(e,`companyName`)&&(n.companyName=String(t.get(`companyName`)||``).trim()),W(e,`kennitala`)&&(n.kennitala=String(t.get(`kennitala`)||``).trim()),W(e,`contactEmail`)&&(n.contactEmail=String(t.get(`contactEmail`)||``).trim()),W(e,`billingEmail`)&&(n.billingEmail=String(t.get(`billingEmail`)||``).trim()),W(e,`contactName`)&&(n.contactName=String(t.get(`contactName`)||``).trim()),W(e,`phone`)&&(n.phone=String(t.get(`phone`)||``).trim()),W(e,`address`)&&(n.address=String(t.get(`address`)||``).trim()),W(e,`website`)&&(n.website=String(t.get(`website`)||``).trim()),W(e,`selectedPlan`)&&(n.selectedPlan=an(t.get(`selectedPlan`))||`basic`),W(e,`industry`)&&(n.industry=String(t.get(`industry`)||``)),W(e,`services`)&&(n.services=jt(t.get(`services`))),W(e,`includeKeywords`)&&(n.includeKeywords=jt(t.get(`includeKeywords`))),W(e,`excludeKeywords`)&&(n.excludeKeywords=jt(t.get(`excludeKeywords`))),W(e,`locations`)&&(n.locations=t.getAll(`locations`)),W(e,`baseLocation`)&&(n.baseLocation=String(t.get(`baseLocation`)||``)),W(e,`serviceAreas`)&&(n.serviceAreas=jt(t.get(`serviceAreas`))),W(e,`willingToTravel`)&&(n.willingToTravel=t.get(`willingToTravel`)===`on`),W(e,`nationalProjects`)&&(n.nationalProjects=t.get(`nationalProjects`)===`on`),W(e,`remoteProjects`)&&(n.remoteProjects=t.get(`remoteProjects`)===`on`),W(e,`minimumProjectValueForTravel`)&&(n.minimumProjectValueForTravel=String(t.get(`minimumProjectValueForTravel`)||``)),W(e,`minProjectValue`)&&(n.minProjectValue=String(t.get(`minProjectValue`)||``)),W(e,`maxProjectValue`)&&(n.maxProjectValue=String(t.get(`maxProjectValue`)||``)),W(e,`allowUnknownValue`)&&(n.allowUnknownValue=t.get(`allowUnknownValue`)===`on`),W(e,`reportFrequency`)&&(n.reportFrequency=String(t.get(`reportFrequency`)||`weekly`)),W(e,`reportDay`)&&(n.reportDay=String(t.get(`reportDay`)||`monday`)),W(e,`deadlineReminders`)&&(n.deadlineReminders=t.get(`deadlineReminders`)===`on`),W(e,`includeLowConfidence`)&&(n.includeLowConfidence=t.get(`includeLowConfidence`)===`on`),D.profileDraft=n,U()}function W(e,t){return!!e.querySelector(`[name="${CSS.escape(t)}"]`)}function Fi(){return H(),{...D.profileDraft,companyName:String(D.profileDraft.companyName||``).trim(),kennitala:String(D.profileDraft.kennitala||``).trim(),contactEmail:String(D.profileDraft.contactEmail||``).trim(),billingEmail:String(D.profileDraft.billingEmail||``).trim(),contactName:String(D.profileDraft.contactName||``).trim(),phone:String(D.profileDraft.phone||``).trim(),address:String(D.profileDraft.address||``).trim(),website:String(D.profileDraft.website||``).trim(),selectedPlan:an(D.profileDraft.selectedPlan||D.pendingSignupPlan)||`basic`,industry:String(D.profileDraft.industry||``),services:C(D.profileDraft.services),includeKeywords:C(D.profileDraft.includeKeywords),excludeKeywords:C(D.profileDraft.excludeKeywords),locations:C(D.profileDraft.locations),baseLocation:String(D.profileDraft.baseLocation||``),serviceAreas:C(D.profileDraft.serviceAreas),willingToTravel:!!D.profileDraft.willingToTravel,nationalProjects:!!D.profileDraft.nationalProjects,remoteProjects:!!D.profileDraft.remoteProjects,minimumProjectValueForTravel:Di(D.profileDraft.minimumProjectValueForTravel),minProjectValue:Di(D.profileDraft.minProjectValue),maxProjectValue:Di(D.profileDraft.maxProjectValue)}}function G(e,t){return String(e||``).toLowerCase().includes(String(t||``).toLowerCase())}function Ii(e){return[e.title,e.description,e.category,e.location,...e.keywords||[]].join(` `).toLowerCase()}var Li=`jarðvinna.gatnagerð.gatna- og stígagerð.gatna og stígagerð.stígagerð.lóðarframkvæmdir.lagnavinna.lagnir.fráveita.fráveitulagnir.vatnsveita.hitaveita.vatnslagnir.regnvatnslagnir.drenlagnir.endurnýjun lagna.brunnar.dælubrunnar.malbikun.gangstétt.gangstéttir.stígar.bílastæði.vegagerð.gröftur.fyllingar.grjóthleðsla.jarðvegsskipti.undirbygging.yfirborðsfrágangur.hellulögn.hellulagnir.kantsteinn.kantsteinar.landmótun.afvötnun.jarðvegsvinna.útiframkvæmdir.gatnaframkvæmdir`.split(`.`),Ri=[`snjómokstur`,`snjóruðningur`,`hálkuvarnir`,`vetrarþjónusta`,`gangstéttir`,`stofnanalóðir`],zi=[`framkvæmdir`,`framkvæmd`,`útboð`,`verðfyrirspurn`,`tilboð`,`viðhald`,`verktaki`,`verk`],Bi=[`innanhússfrágangur`,`innanhúss`,`smíði`,`smíðavinna`,`málun`,`gólfefni`,`innréttingar`,`raflagnir`,`pípulagnir`,`leikskóli`,`skóli`,`húsnæði`,`byggingarvinna`],Vi=[`innanhússfrágangur`,`innanhúss`,`smíði`,`smíðavinna`,`málun`,`gólfefni`,`innréttingar`,`raflagnir`,`pípulagnir`,`byggingarvinna`],Hi=[`for- og verkhönnun`,`verkhönnun`,`forhönnun`,`hönnun`,`ráðgjöf`,`verkfræðiráðgjöf`,`eftirlit`,`umsjón`,`verkefnastjórn`,`verkefnastjórnun`],Ui=[`hönnun`,`for- og verkhönnun`,`verkhönnun`,`forhönnun`,`ráðgjöf`,`verkfræðiráðgjöf`,`eftirlit`,`umsjón`,`verkefnastjórn`,`verkefnastjórnun`],Wi=[`jarðvinna`,`jarðvegsvinna`,`gatnagerð`,`gatna- og stígagerð`,`stígagerð`,`vegagerð`,`lóðarframkvæmdir`,`gröftur`,`jarðvegsskipti`,`fyllingar`,`afvötnun`,`landmótun`,`yfirborðsfrágangur`,`malbikun`,`útiframkvæmdir`];function K(e){return w(e)}function q(e,t){let n=K(e);return t.some(e=>n.includes(K(e)))}function J(e){let t=K(e);return zi.some(e=>t===K(e))}function Gi(e){let t=K(e);return Li.some(e=>t===K(e))?0:Li.some(e=>t.includes(K(e))||K(e).includes(t))?1:Ri.some(e=>t===K(e))?2:J(e)?10:3}function Ki(e){return[...e].sort((e,t)=>Gi(e)-Gi(t)||String(t).length-String(e).length||String(e).localeCompare(String(t)))}function qi(e){let t=K(e);return Li.filter(e=>t.includes(K(e)))}function Ji(e){let t=K(e);return Ri.filter(e=>t.includes(K(e)))}function Yi(e,t){let n=qi(t);if(!n.length||!e.some(J))return e;let r=e.filter(e=>!J(e));return[...new Set([...n,...r])]}function Xi(e={}){return q([e.industry,...Array.isArray(e.services)?e.services:[],...Array.isArray(e.includeKeywords)?e.includeKeywords:[]].filter(Boolean).join(` `),[...Li,...Ri,`construction`,`contractor`,`verktaki`,`mannvirki`,`jarðtækni`])}function Zi(e={}){return q([...Array.isArray(e.services)?e.services:[],...Array.isArray(e.includeKeywords)?e.includeKeywords:[]].filter(Boolean).join(` `),Ri)}function Qi(e={}){return q([...Array.isArray(e.services)?e.services:[],...Array.isArray(e.includeKeywords)?e.includeKeywords:[]].filter(Boolean).join(` `),Vi)}function $i(e={}){return q([...Array.isArray(e.services)?e.services:[],...Array.isArray(e.includeKeywords)?e.includeKeywords:[]].filter(Boolean).join(` `),Ui)}function ea(e={}){return q([e.industry,...Array.isArray(e.services)?e.services:[],...Array.isArray(e.includeKeywords)?e.includeKeywords:[]].filter(Boolean).join(` `),Wi)}function ta(e,t,n,r){if(!Xi(e))return{isCivilProfile:!1,serviceHits:n,keywordHits:r,hasWeakOnlyFit:!1,hasIndoorMismatch:!1,hasConsultingMismatch:!1,hasSecondaryOnlyFit:!1,hasPromotedBroadFit:!1,hasWinterOnlyFit:!1};let i=Ii(t),a=q(i,Li),o=q(i,Ri),s=Zi(e),c=o&&s,l=q(i,Bi),u=Qi(e),d=q(i,Hi),f=$i(e),p=qi(i),m=c?Ji(i):[],h=n.length>0&&n.every(J),ee=r.length>0&&r.every(J),g=[...n,...r].some(e=>!J(e)),te=[...n,...r].some(J),ne=!g&&te&&a,re=ne||c?[...new Set([...n,...ne?p:[],...m])]:n,ie=a||c||g,ae=ie&&ne?Yi(re,i):re.filter(e=>!J(e)),oe=ie&&ne?Yi(r,i):r.filter(e=>!J(e)),_=[...new Set([...ae,...oe].filter(e=>!J(e)))],v=!ea(e);return{isCivilProfile:!0,serviceHits:Ki(ae),keywordHits:Ki(oe),hasWeakOnlyFit:!a&&!c&&!g&&(h||ee),hasIndoorMismatch:l&&!a&&!u,hasConsultingMismatch:d&&!f,hasWinterOnlyFit:c&&!a,hasSecondaryOnlyFit:g&&v&&_.length<=2&&p.length>=3,hasPromotedBroadFit:ne}}function na(e){let t=w(e.location);if(la(t)&&ua(e))return!1;let n=w(`${e.title} ${e.description} ${e.location}`);return[`all iceland`,`iceland`,`island`].some(e=>t.includes(e))?!0:[`national`,`landsvist`,`nationwide`].some(e=>n.includes(e))}function ra(e){return[...e.locations||[],...e.serviceAreas||[],e.baseLocation].filter(Boolean)}function ia(e,t){let n=ra(e);if(!n.length)return!1;let r=Dr(t);if(n.includes(`All Iceland`)){let e=w(ca(t));return r===`IS`||e.includes(`iceland`)||e.includes(`island`)}if(n.includes(`Remote / Online`)&&ca(t)===`Remote / Online`)return!0;if(!r||r!==`IS`&&n.some(e=>w(e).includes(`iceland`)))return!1;let i=w(ca(t));return n.some(e=>{let t=w(e);return t?t===i||t===`reykjavik`&&[`reykjavik`,`capital area`,`hofudborgarsvaedid`].includes(i)||t===`capital area`&&[`reykjavik`,`capital area`,`hofudborgarsvaedid`].includes(i)?!0:i.includes(t)||t.includes(i):!1})}function aa(e,t){return e?ia(e,t)?`local_match`:e.locations?.includes(`Remote / Online`)&&ca(t)===`Remote / Online`?`remote_match`:na(t)&&(sa(t)||Dr(t)===`IS`)?`national_match`:ca(t)===`Remote / Online`&&e.remoteProjects?`remote_match`:sa(t)&&(e.nationalProjects||e.willingToTravel)?`outside_area_possible`:`outside_area_low_confidence`:`outside_area_low_confidence`}function oa(e,t){let n=aa(e,t);return n===`local_match`?`Local match`:n===`national_match`?`National opportunity`:n===`remote_match`?`Remote opportunity`:n===`outside_area_possible`?`Outside base area but travel allowed`:n===`outside_area_low_confidence`?`Outside selected area; low-confidence location match`:null}function sa(e){if(Dr(e)===`IS`)return!0;let t=w(ca(e));return[`iceland`,`island`,`all iceland`,`reykjavik`,`capital area`,`hofudborgarsvaedid`,`east iceland`,`west iceland`,`north iceland`,`south iceland`,`sudurnes`].some(e=>t.includes(e))}function ca(e={}){let t=String(e.location||``).trim(),n=w(t);return t&&!la(n)?t:ua(e)||t}function la(e){return!e||e===`unknown`||e===`all iceland`||e===`iceland`||e===`island`}function ua(e={}){let t=e.rawPayload&&typeof e.rawPayload==`object`?e.rawPayload:{},n=w([e.title,e.description,e.buyer,t.buyer,t.extracted_buyer,t.source_name,t.extracted_location,t.location].filter(Boolean).join(` `));return n.includes(`reykjavik`)||n.includes(`reykjavikurborg`)||n.includes(`hofudborgarsvaedid`)?`Reykjavík / Höfuðborgarsvæðið`:``}function da(e,t){return t.estimatedValue?!(e.minProjectValue&&t.estimatedValue<e.minProjectValue||e.maxProjectValue&&t.estimatedValue>e.maxProjectValue):!!e.allowUnknownValue}function fa(e,t){let n=String(e.industry||``).toLowerCase(),r=String(t.category||``).toLowerCase();return r.includes(n)||n.includes(r)}function pa(e,t){if(!e)return{...t,matchScore:0,matchLabel:`Weak match`,matchReasons:[],risks:[],nextSteps:[]};let n=Ii(t),r=0,i=[],a=[];fa(e,t)&&(r+=35,i.push(`Matches your ${e.industry} industry`));let o=ta(e,t,(e.services||[]).filter(e=>G(n,e)),(e.includeKeywords||[]).filter(e=>G(n,e)));for(let e of o.serviceHits)r+=10,i.push(`Mentions your service: ${e}`);for(let e of o.keywordHits)r+=8,i.push(`Contains your keyword: ${e}`);let s=aa(e,t),c=oa(e,t);if(s===`local_match`)r+=22,i.push(c);else if(s===`national_match`)r+=16,i.push(c);else if(s===`remote_match`)r+=14,i.push(c);else if(s===`outside_area_possible`){let n=Number(e.minimumProjectValueForTravel||0),o=n&&t.estimatedValue&&Number(t.estimatedValue)<n;r+=o?-4:4,i.push(c),a.push(o?`Outside base area and below your preferred travel project value`:`Check travel cost, project size and delivery capacity`)}else r-=8,a.push(`Outside selected area; location match is low confidence`);o.hasWinterOnlyFit&&s===`local_match`&&(r+=12,i.push(`Local winter service fit`)),da(e,t)?(r+=10,t.estimatedValue&&i.push(`Project value is inside your preferred range`)):(r-=25,a.push(`Estimated project value is outside your preferred range`));let l=x(t.deadline);t.deadline?l>=0&&l<=30?(r+=8,i.push(`Deadline is coming up soon`)):l<0&&(r-=50,a.push(`Deadline has passed`)):a.push(Ga(t));for(let t of e.excludeKeywords||[])G(n,t)&&(r-=18,a.push(`Contains exclude keyword: ${t}`));return(t.requirements||[]).some(e=>G(e,`certification`)||G(e,`license`))&&a.push(`May require certification or license documentation`),t.difficulty===`high`&&a.push(`This appears to be a higher-complexity opportunity`),o.hasWeakOnlyFit&&(r=Math.min(r,40),a.push(`Only broad construction/procurement terms matched; verify fit`)),o.hasIndoorMismatch&&(r=Math.min(r-20,40),a.push(`Appears to be indoor/building finishing work outside your core civil services`)),o.hasConsultingMismatch&&(r=Math.min(r-30,35),a.push(`Appears to be design, consulting, supervision, or project management work outside your execution services`)),o.hasSecondaryOnlyFit&&(r=Math.min(r,84),a.push(`Secondary service match in a broader infrastructure tender; verify scope`)),o.hasPromotedBroadFit&&(r=Math.min(r,72),a.push(`Broad construction terms matched; verify the specific work type`)),o.hasWinterOnlyFit&&(r=Math.min(r,68),a.push(`Winter/snow service fit; verify capacity and scope`)),r=Math.max(0,Math.min(100,Math.round(r))),{...t,matchScore:r,matchLabel:ha(r),matchReasons:i.slice(0,5),risks:[...new Set(a)].slice(0,4),nextSteps:[`Open the source documents`,`Confirm mandatory requirements`,`Check capacity and profitability`,`Prepare questions before the deadline`]}}function ma(e){if(!D.profile||!Xi(D.profile))return e;let t=pa(D.profile,e);return Number(t.matchScore||0)>=Number(e.matchScore||0)?e:{...e,matchScore:t.matchScore,matchLabel:t.matchLabel,matchReasons:t.matchReasons,risks:t.risks,nextSteps:t.nextSteps}}function ha(e){return e>=85?`Strong match`:e>=65?`Good match`:e>=45?`Possible match`:`Weak match`}function ga(){if(D.storedMatches.length)return D.storedMatches.filter(Qc).filter(ya).filter(N).filter(e=>!D.ignored.includes(e.id)).map(ma).sort((e,t)=>t.matchScore-e.matchScore||x(e.deadline)-x(t.deadline));let e=D.profile||(D.user?null:$t);return e?D.opportunities.filter(Qc).map(t=>pa(e,t)).filter(ya).filter(N).filter(e=>!D.ignored.includes(e.id)).sort((e,t)=>t.matchScore-e.matchScore||x(e.deadline)-x(t.deadline)):[]}function _a(){return D.storedMatches.filter(Qc).filter(ya).filter(N).filter(e=>!D.ignored.includes(e.id)).sort((e,t)=>t.matchScore-e.matchScore||x(e.deadline)-x(t.deadline))}function va(){let e=D.profile||(D.user?null:$t);return e?D.opportunities.filter(Qc).map(t=>pa(e,t)).filter(ya).filter(N).filter(e=>!D.ignored.includes(e.id)).sort((e,t)=>ka(e)-ka(t)||t.matchScore-e.matchScore||x(e.deadline)-x(t.deadline)):[]}function ya(e){return D.isAdmin&&D.filters.label===`all_opportunities`?!0:Lc(e)}function ba(e={}){return String(e.safetyStatus||e.safety_status||`auto_approved`)}function xa(e){return[..._a(),...va()].find(t=>t.id===e)}function Sa(){let e=Ca([`all_opportunities`,`needs_review`].includes(D.filters.label)?va():_a());if(D.filters.label===`recommended`){let t=e.filter(Ta),n=e.filter(Ea);return Oa(t.length?t:n)}return Oa(e.filter(wa))}function Ca(e){return e.filter(e=>{let t=D.filters.search.toLowerCase();return!(t&&!Ii(e).includes(t)||D.filters.category!==`all`&&e.category!==D.filters.category||D.filters.location!==`all`&&e.location!==D.filters.location||D.filters.type!==`all`&&e.type!==D.filters.type||D.filters.savedOnly&&!D.saved.includes(e.id))})}function wa(e){let t=D.filters.label;return t===`all`||t===`all_opportunities`?!0:t===`needs_review`?P(e.qualityStatus,e)===`needs_review`:t===`recommended`?Ta(e):t===`strong`?e.matchLabel===`Strong match`||e.matchScore>=85:t===`possible`?[`Possible match`,`Weak match`].includes(e.matchLabel)||e.matchScore<65:e.matchLabel===t}function Ta(e){return!Da(e)||Rc(e)?!1:e.matchScore>=85||e.matchLabel===`Strong match`?!0:!(P(e.qualityStatus,e)===`needs_review`||Er(L(e)))}function Ea(e){return!Da(e)||Rc(e)?!1:e.matchScore>=85||e.matchLabel===`Strong match`?!0:!(P(e.qualityStatus,e)===`needs_review`||Er(L(e)))}function Da(e){return[`Strong match`,`Good match`,`Possible match`].includes(e.matchLabel)||e.matchScore>=45}function Oa(e){return[...e].sort((e,t)=>ka(e)-ka(t)||t.matchScore-e.matchScore||x(e.deadline)-x(t.deadline))}function ka(e){let t=F(e);if(t===`confirmed_tender`)return 0;if(t===`early_opportunity`)return 1;if(t===`market_signal`)return 2;if(t===`news_context`)return 8;if(t===`not_opportunity`)return 9;let n=P(e.qualityStatus,e);return n===`confirmed_tender`?0:n===`early_signal`?1:2}function Aa({visibleCount:e,storedMatchCount:t,filteredStoredCount:n,availableCount:r,recommendedCount:i,strongCount:a,companyName:o}){let s=D.filters.label;return D.language===`is`?s===`all_opportunities`?`${r} tækifæri eru til í kerfinu. Sýni ${e} sýnileg tækifæri til yfirferðar.`:s===`needs_review`?`${r} tækifæri eru til í kerfinu. Sýni ${e} atriði sem þarf að staðfesta.`:s===`all`?`${t} tækifæri fundust sem gætu passað við ${o}. Sýni ${e}.`:s===`strong`?`${t} tækifæri fundust sem gætu passað við ${o}. Sýni ${e} sterkar samsvaranir.`:s===`recommended`?e?`${t} tækifæri fundust sem gætu passað við ${o}. Sýni ${e} ráðlögð eða möguleg tækifæri.`:a>0?`${a} sterkar samsvaranir eru til fyrir ${o}, en þær eru faldar af núverandi síum.`:n>0?`${n} tækifæri eru falin af gæðasíum. Notið Allar samsvaranir eða Þarfnast staðfestingar til að skoða þau.`:`Engar ráðlagðar samsvaranir fyrir ${o} enn. ${r} tækifæri eru til í kerfinu, en ekkert passar nógu sterkt við þennan prófíl.`:s===`possible`?`${t} tækifæri fundust sem gætu passað við ${o}. Sýni ${e} mögulegar eða veikar samsvaranir.`:`${t} tækifæri fundust sem gætu passað við ${o}. Sýni ${e} tækifæri.`:s===`all_opportunities`?`${r} opportunities are available in the system. Showing ${e} visible opportunities for inspection.`:s===`needs_review`?`${r} opportunities are available in the system. Showing ${e} needs-review opportunities.`:s===`all`?`${t} opportunities may fit ${o}. Showing all ${e}.`:s===`strong`?`${t} opportunities may fit ${o}. Showing ${e} strong matches.`:s===`recommended`?e?`${t} opportunities may fit ${o}. Showing ${e} recommended or possible matches.`:a>0?`${a} strong ${a===1?`match exists`:`matches exist`} for ${o}, but ${a===1?`it is`:`they are`} hidden by your current filters.`:n>0?`${n} ${n===1?`opportunity is`:`opportunities are`} hidden from Recommended by quality checks. Use All matches or Needs review to inspect them.`:`No recommended matches for ${o} yet. ${r} opportunities are available in the system, but none match this profile strongly enough.`:s===`possible`?`${t} opportunities may fit ${o}. Showing ${e} possible or weak matches.`:`${t} opportunities may fit ${o}. Showing ${e} ${s.toLowerCase()} opportunities.`}async function ja(){if(!f||!D.companyId){D.opportunityActions=[];return}try{let{data:e,error:t}=await f.from(`company_opportunity_actions`).select(`id, company_id, opportunity_id, action_type, note, created_at, updated_at`).eq(`company_id`,D.companyId);if(t)throw t;D.opportunityActions=e||[],D.saved=D.opportunityActions.filter(e=>[`saved`,`watched`].includes(e.action_type)).map(e=>e.opportunity_id),D.ignored=D.opportunityActions.filter(e=>e.action_type===`ignored`).map(e=>e.opportunity_id)}catch(e){console.error(`Failed to load company opportunity actions:`,e),D.opportunityActions=[],D.saved=[],D.ignored=[]}}async function Ma(t,n){if(!f||!D.companyId){(n===`saved`||n===`watched`)&&(D.saved=Array.from(new Set([...D.saved,t])),D.ignored=D.ignored.filter(e=>e!==t)),n===`ignored`&&(D.ignored=Array.from(new Set([...D.ignored,t])),D.saved=D.saved.filter(e=>e!==t)),Ti(e.saved,D.saved),Ti(e.ignored,D.ignored);return}let{error:r}=await f.from(`company_opportunity_actions`).upsert({company_id:D.companyId,opportunity_id:t,action_type:n,updated_at:new Date().toISOString()},{onConflict:`company_id,opportunity_id`});if(r)throw r;await ja()}async function Na(t){if(!f||!D.companyId){D.saved=D.saved.filter(e=>e!==t),D.ignored=D.ignored.filter(e=>e!==t),Ti(e.saved,D.saved),Ti(e.ignored,D.ignored);return}let{error:n}=await f.from(`company_opportunity_actions`).delete().eq(`company_id`,D.companyId).eq(`opportunity_id`,t);if(n)throw n;await ja()}async function Pa(e){let t=`Opportunity saved`;try{D.saved.includes(e)?(await Na(e),t=`Removed from saved`):await Ma(e,`saved`),V(t,`success`),X()}catch(e){console.error(`Failed to update saved opportunity:`,e),V(`Could not update saved opportunity`,`error`)}}async function Fa(e){try{await Ma(e,`ignored`),D.selectedOpportunityId===e&&(D.selectedOpportunityId=null),V(`Opportunity hidden`,`success`),X()}catch(e){console.error(`Failed to ignore opportunity:`,e),V(`Could not hide opportunity`,`error`)}}async function Ia(e){try{await Na(e),X()}catch(e){console.error(`Failed to unignore opportunity:`,e),V(`Could not restore opportunity`,`error`)}}function La(e){D.selectedOpportunityId=e,document.body.classList.add(`modal-open`),X()}function Ra(){za(),X()}function za(){D.selectedOpportunityId=null,document.body.classList.remove(`modal-open`)}function Ba(){if(!D.selectedOpportunityId){document.body.classList.remove(`modal-open`);return}if(!xa(D.selectedOpportunityId)){D.selectedOpportunityId=null,document.body.classList.remove(`modal-open`);return}document.body.classList.add(`modal-open`)}function Va(e){if(!e)return{label:$(Yt),className:`deadline danger`};let t=x(e);return t===999?{label:$(Yt),className:`deadline danger`}:{label:E(`daysLeft`,{count:t}),className:t<=14?`deadline danger`:`deadline`}}function Ha(e){let t=String(e||``).trim().match(/^(\d{4}-\d{2}-\d{2})T(\d{2}):(\d{2})/);return t?`${Nc(t[1])} kl. ${t[2]}:${t[3]}`:``}function Ua(e){return e?kt(e):$(Yt)}function Wa(e){return e?.deadlineAt?Ha(e.deadlineAt):e?.deadline?Nc(e.deadline):$(Ga(e))}function Ga(e){if(I(e)){let t=pr(e);return[`tender_awarded`,`awarded`,`already_tendered`,`announced`].includes(t)?`Tender appears already announced/awarded — verify source article.`:t===`upcoming_tender`?`Formal tender deadline not found yet — monitor source article.`:Xt}return String(e?.rawPayload?.deadline_warning||``).trim()||Yt}function Ka(e){if(!e?.deadline)return{label:$(Ga(e)),className:`deadline danger`};let t=Ha(e.deadlineAt);return t?{label:t,className:x(e.deadline)<=14?`deadline danger`:`deadline`}:Va(e.deadline)}function Y(e){return e?It(e,`ISK`):D.language===`is`?`Ekki gefið upp`:`Value unknown`}function qa(){return[...new Set(D.opportunities.map(e=>e.category))].sort()}function Ja(){return[...new Set(D.opportunities.map(e=>e.location))].sort()}function Ya(){return[...new Set(D.opportunities.map(e=>e.type))].sort()}function Xa(e){return e===`Strong match`?`badge strong`:e===`Good match`?`badge good`:e===`Possible match`?`badge possible`:`badge weak`}function X(){let e=document.getElementById(`app`),t=nn(D.route),n=``;if(n=D.isBooting||!D.authLoaded||!D.profileLoaded||!D.adminLoaded?eo():t===`/`?ls():t===`/login`?vo():t===`/signup`?xo():t===`/forgot-password`?yo():t===`/reset-password`?bo():t===`/onboarding`?us():t===`/dashboard`?D.user?ys():z():t===`/report`?D.user?_c():z():t===`/pricing`?bl():t===`/privacy`?ao():t===`/terms`?oo():t===`/data-sources`?so():t===`/cookies`?co():t===`/security`?lo():t===`/contact`?uo():t===`/settings`?D.user?xl():z():t===`/admin`?D.user?D.isAdmin?zs():Zr():z():ls(),e.innerHTML=n,D.selectedOpportunityId){let t=xa(D.selectedOpportunityId);t?(document.body.classList.add(`modal-open`),e.insertAdjacentHTML(`beforeend`,Rs(t))):Ba()}else Ba()}function Za(e){let t=window.scrollX,n=window.scrollY,r=Qa(e),i=typeof e.selectionStart==`number`?e.selectionStart:null,a=typeof e.selectionEnd==`number`?e.selectionEnd:null;X(),requestAnimationFrame(()=>{if(window.scrollTo(t,n),!r)return;let e=document.querySelector(r);e&&(e.focus({preventScroll:!0}),i!==null&&a!==null&&typeof e.setSelectionRange==`function`&&[`text`,`search`,`email`,`url`,`tel`,`password`,``].includes(e.type||``)&&e.setSelectionRange(i,a))})}function Qa(e){return e?.dataset?e.dataset.adminFilter?`[data-admin-filter="${$a(e.dataset.adminFilter)}"]`:e.dataset.adminCompanyFilter?`[data-admin-company-filter="${$a(e.dataset.adminCompanyFilter)}"]`:``:``}function $a(e){return window.CSS?.escape?window.CSS.escape(String(e)):String(e).replace(/["\\]/g,`\\$&`)}function eo(){return Z(`
    <div class="app-loader">
      <div class="loader-mark" aria-label="${T(E(`loadingLabel`))}">
        <span></span>
      </div>
    </div>
  `)}function Z(e){let t=!!D.user,n=!!D.profile,r=to(t,n),i=mo(t,n);return`
    <header class="site-header ${D.isMobileMenuOpen?`is-menu-open`:``}">
      <div class="header-top">
        <button class="brand" data-action="go" data-href="/">
          <img class="brand-logo" src="./logo.png" alt="VerkRadar" />
        </button>
        <div class="mobile-header-actions">
          <button class="language-toggle mobile-header-language-toggle" type="button" data-action="toggle-language" aria-label="Switch language">
            <span class="${D.language===`is`?`active`:``}">IS</span>
            <span class="${D.language===`en`?`active`:``}">EN</span>
          </button>
          <button
            class="menu-toggle"
            type="button"
            data-action="toggle-mobile-menu"
            aria-label="${D.isMobileMenuOpen?E(`closeMenu`):E(`openMenu`)}"
            aria-expanded="${D.isMobileMenuOpen?`true`:`false`}"
            aria-controls="mobile-menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
      <div class="header-menu" id="site-menu">
        <nav class="site-nav">
          ${r.map(([e,t])=>t.startsWith(`#`)?`<button data-action="scroll-to" data-target="${t.slice(1)}">${e}</button>`:`<button data-action="go" data-href="${t}" ${D.route===t?`class="active"`:``}>${e}</button>`).join(``)}
        </nav>
        <div class="header-actions">
          <button class="language-toggle" type="button" data-action="toggle-language" aria-label="Switch language">
            <span class="${D.language===`is`?`active`:``}">IS</span>
            <span class="${D.language===`en`?`active`:``}">EN</span>
          </button>
          ${t?``:`<button class="btn btn-secondary header-login-btn btn-login" data-action="go" data-href="/login">${E(`login`)}</button>`}
          ${i?`<button class="btn btn-primary" data-action="go" data-href="${i.href}">${i.label}</button>`:``}
          ${t&&!D.isMobileMenuOpen?ho():``}
        </div>
      </div>
      ${fo(r,i,t)}
    </header>
    <main>${e}</main>
    ${no()}
    ${D.toast?`
      <div class="toast toast-${D.toast.type}">
        <span class="toast-dot"></span>
        <span>${T(D.toast.message)}</span>
      </div>
    `:``}
  `}function to(e=!!D.user,t=!!D.profile){let n=e?t?[[E(`navDashboard`),`/dashboard`],[E(`navReport`),`/report`],[E(`navSettings`),`/settings`]]:[[E(`setupCompany`),`/onboarding`],[E(`navSettings`),`/settings`]]:[[E(`navHowItWorks`),`#how-it-works`],[E(`navSampleReport`),`#sample-report`],[E(`navPricing`),`/pricing`]];return e&&D.isAdmin&&n.push([`Admin`,`/admin`]),n}function no(){let e=[[E(`privacyPolicy`),`/privacy`],[E(`termsOfService`),`/terms`],[E(`dataSources`),`/data-sources`],[E(`security`),`/security`],[E(`contact`),`/contact`]];return`
    <footer class="site-footer">
      <div>
        <strong>VerkRadar</strong>
        <p>${T(E(`footerText`))}</p>
      </div>
      <nav aria-label="Legal and trust pages">
        ${e.map(([e,t])=>`<button type="button" data-action="go" data-href="${t}">${e}</button>`).join(``)}
      </nav>
    </footer>
  `}function ro(e){return s(e,D.language)}function io(e){let t=ro(e);return Z(Ve({language:D.language,escapeHtml:T,eyebrow:t.eyebrow,title:t.title,intro:t.intro,sections:t.sections}))}function ao(){return io(`privacy`)}function oo(){return io(`terms`)}function so(){return io(`data`)}function co(){return ao()}function lo(){return io(`security`)}function uo(){return io(`contact`)}function fo(e,t,n){return`
    <nav class="mobile-menu-panel" id="mobile-menu">
      <div class="mobile-menu-scroll">
      <div class="mobile-menu-links">
        ${e.map(([e,t])=>t.startsWith(`#`)?`<button type="button" data-action="mobile-scroll-to" data-target="${t.slice(1)}">${e}</button>`:`<button type="button" data-action="mobile-nav" data-href="${t}">${e}</button>`).join(``)}
      </div>
      ${po(t,n)}
      </div>
    </nav>
  `}function po(e,t){if(!t)return`
      <div class="mobile-account-section">
        ${e?`<button class="btn btn-primary mobile-cta" type="button" data-action="mobile-nav" data-href="${e.href}">${e.label}</button>`:``}
        <button class="btn btn-secondary" type="button" data-action="mobile-nav" data-href="/login">${E(`login`)}</button>
      </div>
    `;let n=D.profile?.companyName||E(`noCompanyProfile`),r=D.user?.email||``;return`
    <div class="mobile-account-section">
      <div class="mobile-account-header">
        <span class="profile-avatar">${T(go(n,r))}</span>
        <div>
          <strong>${T(n)}</strong>
          <small>${T(r)}</small>
        </div>
      </div>
      <div class="mobile-account-actions">
        ${D.profile?`<button type="button" data-action="mobile-nav" data-href="/dashboard">${E(`navDashboard`)}</button>
             <button type="button" data-action="mobile-nav" data-href="/settings">${E(`navSettings`)}</button>`:`<button type="button" data-action="mobile-nav" data-href="/onboarding">${E(`setupCompany`)}</button>
             <button type="button" data-action="mobile-nav" data-href="/settings">${E(`navSettings`)}</button>`}
        <button type="button" class="mobile-logout" data-action="logout">${E(`logout`)}</button>
      </div>
    </div>
  `}function mo(e,t){return e?t?null:{href:`/onboarding`,label:E(`createProfile`)}:{href:`/signup`,label:E(`getStarted`)}}function ho(){let e=D.profile?.companyName||E(`noCompanyProfile`),t=D.user?.email||``,n=go(e,t);return`
    <div class="profile-menu">
      <button type="button" class="profile-pill" data-action="toggle-profile-menu" aria-haspopup="menu" aria-expanded="${D.profileMenuOpen?`true`:`false`}">
        <span class="profile-avatar">${T(n)}</span>
        <span class="profile-name">${T(e)}</span>
        <span class="profile-chevron" aria-hidden="true"></span>
      </button>

      ${D.profileMenuOpen&&!D.isMobileMenuOpen&&!bn()?`
        <div class="profile-dropdown" role="menu">
          <div class="profile-dropdown-header">
            <strong>${T(e)}</strong>
            <small>${T(t)}</small>
          </div>
          <div class="profile-dropdown-divider"></div>
          ${D.profile?`
            <button type="button" data-action="go" data-href="/dashboard" role="menuitem">${E(`navDashboard`)}</button>
            <button type="button" data-action="go" data-href="/settings" role="menuitem">${E(`navSettings`)}</button>
            ${D.isAdmin?`<button type="button" data-action="go" data-href="/admin" role="menuitem">Admin</button>`:``}
          `:`
            <button type="button" data-action="go" data-href="/onboarding" role="menuitem">${E(`createProfile`)}</button>
            ${D.isAdmin?`<button type="button" data-action="go" data-href="/admin" role="menuitem">Admin</button>`:``}
          `}
          <div class="profile-dropdown-divider"></div>
          <button type="button" class="danger" data-action="logout" role="menuitem">${E(`logout`)}</button>
        </div>
      `:``}
    </div>
  `}function go(e,t){return(e&&![`No company profile`,E(`noCompanyProfile`)].includes(e)?e:t||`VR`).split(/[^a-zA-Z0-9áéíóúýþæöðÁÉÍÓÚÝÞÆÖÐ]+/).filter(Boolean).slice(0,2).map(e=>e[0]).join(``).toUpperCase()||`VR`}function _o(e,t){return Z(`
    <section class="empty-state">
      <h1>${T(e)}</h1>
      <p>${T(t)}</p>
      <button class="btn btn-primary" data-action="go" data-href="/onboarding">${T(E(`createProfile`))}</button>
      <button class="btn btn-secondary" data-action="load-demo">${T(E(`loadDemoCompany`))}</button>
    </section>
  `)}function vo(){return D.user?_o(D.language===`is`?`Þú ert þegar skráð(ur) inn`:`Already logged in`,D.language===`is`?`Opnaðu mælaborðið eða breyttu fyrirtækjaprófílnum.`:`Open your dashboard or edit your company profile.`):Z(Ce({t:E,escapeHtml:T,authForm:D.authForm,authSubmitting:D.authSubmitting,authMessage:D.authMessage}))}function yo(){return D.user?_o(D.language===`is`?`Þú ert þegar skráð(ur) inn`:`Already logged in`,D.language===`is`?`Opnaðu mælaborðið eða breyttu fyrirtækjaprófílnum.`:`Open your dashboard or edit your company profile.`):Z(we({t:E,escapeHtml:T,authForm:D.authForm,authSubmitting:D.authSubmitting,authMessage:D.authMessage}))}function bo(){return Z(Te({t:E,escapeHtml:T,authForm:D.authForm,authSubmitting:D.authSubmitting,authMessage:D.authMessage}))}function xo(){if(D.user){let e=Sn();return setTimeout(()=>O(e),0),Z(`
      <section class="empty-state">
        <h1>${T(E(`alreadyLoggedInTitle`))}</h1>
        <p>${T(E(`alreadyLoggedInText`))}</p>
      </section>
    `)}return Z(Ee({t:E,escapeHtml:T,authForm:D.authForm,authSubmitting:D.authSubmitting,authMessage:D.authMessage}))}function So(){if(!D.importLoading&&!D.importStatus)return``;if(D.importLoading)return`<section class="import-panel"><strong>Importing TED notices...</strong><p>Fetching recent TED notices and refreshing matches.</p></section>`;let e=D.importStatus||{},t=Array.isArray(e.errors)?e.errors:[],n=D.importedTedOpportunities||[];return`
    <section class="import-panel">
      ${D.importStatus?`
        <div class="import-stats">
          <span><strong>${Number(e.fetched||0)}</strong> fetched</span>
          <span><strong>${Number(e.inserted||0)}</strong> inserted</span>
          <span><strong>${Number(e.updated||0)}</strong> updated</span>
          <span><strong>${Number(e.skipped||0)}</strong> skipped</span>
          <span><strong>${Number(e.matched||0)}</strong> matches</span>
          <span><strong>${Number(e.reports_generated||0)}</strong> reports</span>
        </div>
        ${t.length?`<ul class="risk-list">${t.map(e=>`<li>${T(e)}</li>`).join(``)}</ul>`:`<p>TED import completed.</p>`}
        ${t.length?``:`
          <div class="import-result-head">
            <h3>Newest imported TED opportunities</h3>
            <button class="btn btn-secondary" type="button" data-action="go" data-href="/dashboard">View imported opportunities on dashboard</button>
          </div>
          ${n.length?`
            <div class="imported-opportunities">
              ${n.map(wo).join(``)}
            </div>
          `:`<div class="empty-card">No imported TED opportunities were returned by the latest-results query.</div>`}
        `}
      `:``}
    </section>
  `}function Co(){if(!D.connectorImportLoading&&!D.connectorTestingSourceId&&!D.connectorImportStatus)return``;if(D.connectorImportLoading||D.connectorTestingSourceId)return`<section class="import-panel"><strong>Running automatic source imports...</strong><p>Fetching enabled source connectors in a limited batch. Refresh matches separately after imports finish.</p></section>`;let e=D.connectorImportStatus||{},t=Array.isArray(e.errors)?e.errors:[],n=Array.isArray(e.failedSources)?e.failedSources:[],r=Array.isArray(e.timedOutSources)?e.timedOutSources:[],i=t.length||n.length||r.length,a=Number.isFinite(Number(e.sources_processed))?`<p>${Number(e.sources_processed||0)} source${Number(e.sources_processed||0)===1?``:`s`} processed${Number(e.sources_remaining||0)?` · ${Number(e.sources_remaining||0)} remaining for next run`:``}.</p>`:``;return`
    <section class="import-panel">
      <div class="import-stats">
        <span><strong>${Number(e.fetched||0)}</strong> fetched</span>
        <span><strong>${Number(e.inserted||0)}</strong> inserted</span>
        <span><strong>${Number(e.updated||0)}</strong> updated</span>
        <span><strong>${Number(e.skipped||0)}</strong> skipped</span>
        <span><strong>${Number(e.matched||0)}</strong> matches</span>
        <span><strong>${Number(e.reports_generated||0)}</strong> reports</span>
      </div>
      ${e.message?`<p>${T(e.message)}</p>`:a}
      ${e.matching_skipped?`<p>Matching was skipped for this batch to stay within Edge Function CPU limits. Refresh company matches from Admin after imports finish.</p>`:``}
      ${e.reports_skipped?`<p>Report generation was skipped for this batch.</p>`:``}
      ${n.length?`
        <div class="import-failure-list">
          <h3>${n.length} source${n.length===1?``:`s`} failed</h3>
          ${n.map(e=>`
            <div class="import-failure-row">
              <strong>${T(e.source||`Unknown source`)}</strong>
              <p>${T(e.message||e.error||`Unknown source import error`)}</p>
              ${e.endpoint_url?`<small>${T(e.endpoint_url)}</small>`:``}
            </div>
          `).join(``)}
        </div>
      `:``}
      ${r.length?`
        <div class="import-failure-list">
          <h3>${r.length} source${r.length===1?``:`s`} timed out or were skipped</h3>
          ${r.map(e=>`
            <div class="import-failure-row">
              <strong>${T(e.source||`Unknown source`)}</strong>
              <p>${T(e.message||e.reason||`Skipped because the source import was close to the runtime limit`)}</p>
              ${e.endpoint_url?`<small>${T(e.endpoint_url)}</small>`:``}
            </div>
          `).join(``)}
        </div>
      `:``}
      ${t.length?`<ul class="risk-list">${t.map(e=>`<li>${T(e)}</li>`).join(``)}</ul>`:``}
      ${i?`<p>Automatic source import completed with source-level failures. Successful sources were still imported.</p>`:`<p>Automatic source import completed.</p>`}
    </section>
  `}function wo(e){let t=e.url&&e.url!==`#`,n=D.adminUpdatingId===e.id,r=D.adminDeletingId===e.id;return`
    <div class="imported-opportunity-row">
      <div class="imported-opportunity-main">
        <h4>${T(e.title)}</h4>
        <span class="source-pill language-pill">Original language</span>
        <p>${T(ol(e))}</p>
      </div>
      <dl>
        <div>
          <dt>Country / location</dt>
          <dd>${T([e.countryCode,e.location].filter(Boolean).join(` / `)||`Unknown`)}</dd>
        </div>
        <div>
          <dt>Deadline</dt>
          <dd>${T(kt(e.deadline))}</dd>
        </div>
        <div>
          <dt>URL</dt>
          <dd>${t?`<a href="${T(e.url)}" target="_blank" rel="noreferrer">Open TED</a>`:`No URL`}</dd>
        </div>
        <div>
          <dt>Status</dt>
          <dd>${T(e.status||`Unknown`)}</dd>
        </div>
        <div>
          <dt>Imported source</dt>
          <dd>${T(e.source||`Unknown`)}</dd>
        </div>
        <div>
          <dt>External ID</dt>
          <dd>${T(e.externalId||`Unknown`)}</dd>
        </div>
      </dl>
      <div class="imported-opportunity-actions">
        <button class="btn btn-secondary" type="button" data-action="hide-imported-opportunity" data-id="${T(e.id)}" ${n||e.status===`hidden`?`disabled`:``}>
          ${n?`Updating...`:`Hide`}
        </button>
        <button class="btn btn-secondary" type="button" data-action="mark-imported-relevant" data-id="${T(e.id)}" ${n||e.status===`open`?`disabled`:``}>
          ${n?`Updating...`:`Mark relevant`}
        </button>
        <button class="btn btn-ghost" type="button" data-action="delete-opportunity" data-id="${T(e.id)}" ${r?`disabled`:``}>
          ${r?`Deleting...`:`Delete`}
        </button>
      </div>
    </div>
  `}function To(){return(D.importRuns||[])[0]||null}function Eo(e){let t=String(e||``).toLowerCase();return[`success`,`completed`,`complete`,`connected`].includes(t)?`is-success`:[`running`,`started`,`pending`,`planned`].includes(t)?`is-running`:[`error`,`failed`,`failure`].includes(t)?`is-error`:``}function Do(){let e=To();return D.importRunsLoading&&!e?`
      <section class="ops-card automation-status-card">
        <div class="card-header">
          <div>
            <h2>Automation status</h2>
            <p>Loading latest automation run...</p>
          </div>
        </div>
      </section>
    `:e?`
    <section class="ops-card automation-status-card">
      <div class="card-header">
        <div>
          <h2>Automation status</h2>
          <p>Latest import and matching pipeline run.</p>
        </div>
        <span class="status-pill ${Eo(e.status)}">${T(e.status||`unknown`)}</span>
      </div>
      <div class="ops-metrics">
        <div><span>Type</span><strong>${T(e.run_type||`ted-import`)}</strong></div>
        <div><span>Mode</span><strong>${T(e.import_mode||`unknown`)}</strong></div>
        <div><span>Fetched</span><strong>${Number(e.fetched||0)}</strong></div>
        <div><span>Inserted</span><strong>${Number(e.inserted||0)}</strong></div>
        <div><span>Updated</span><strong>${Number(e.updated||0)}</strong></div>
        <div><span>Skipped</span><strong>${Number(e.skipped||0)}</strong></div>
        <div><span>Matched</span><strong>${Number(e.matched||0)}</strong></div>
        <div><span>Reports</span><strong>${Number(e.reports_generated||0)}</strong></div>
        <div><span>Started</span><strong>${T(S(e.started_at))}</strong></div>
        <div><span>Finished</span><strong>${T(S(e.finished_at))}</strong></div>
      </div>
      ${e.error?`<div class="admin-message is-error">${T(e.error)}</div>`:``}
      ${No(e)}
    </section>
  `:`
      <section class="ops-card automation-status-card">
        <div class="card-header">
          <div>
            <h2>Automation status</h2>
            <p>No automation runs yet.</p>
          </div>
        </div>
        ${D.importRunsError?`<div class="admin-message is-error">${T(D.importRunsError)}</div>`:``}
      </section>
    `}function Oo(){let e=window.VERKRADAR_SUPABASE_URL||`https://asojxjbsgqbfpbepojzh.supabase.co`,t=String(e).match(/^https:\/\/([^.]+)\.supabase\.co/i);return t?`https://supabase.com/dashboard/project/${t[1]}/functions/import-ted/logs`:``}function ko(){let e=Oo();return`
    <section class="ops-card">
      <div class="card-header">
        <div>
          <h2>Automation actions</h2>
          <p>Run the pipeline manually or refresh the operations view.</p>
        </div>
      </div>
      <div class="automation-actions">
        <button class="btn btn-primary" type="button" data-action="import-ted" ${D.importLoading?`disabled`:``}>
          ${D.importLoading?`Running TED import...`:`Run TED import now`}
        </button>
        <button class="btn btn-secondary" type="button" data-action="import-source-connectors" ${D.connectorImportLoading?`disabled`:``}>
          ${D.connectorImportLoading?`Running source imports...`:`Run automatic source imports now`}
        </button>
        <button class="btn btn-secondary" type="button" data-action="refresh-admin-status" ${D.importRunsLoading||D.adminReportsLoading?`disabled`:``}>
          ${D.importRunsLoading||D.adminReportsLoading?`Refreshing...`:`Refresh status`}
        </button>
        ${e?`<a class="btn btn-secondary" href="${T(e)}" target="_blank" rel="noreferrer">View Edge Function logs</a>`:``}
      </div>
      <label class="import-mode-control">
        Import mode
        <select data-import-mode ${D.importLoading?`disabled`:``}>
          <option value="nordic" ${D.tedImportMode===`nordic`?`selected`:``}>Nordic only</option>
          <option value="iceland" ${D.tedImportMode===`iceland`?`selected`:``}>Iceland only</option>
          <option value="eu-broad" ${D.tedImportMode===`eu-broad`?`selected`:``}>EU broad test</option>
        </select>
      </label>
      ${So()}
      ${Co()}
    </section>
  `}function Ao(){let e=D.importRuns||[];return`
    <section class="ops-card">
      <div class="card-header">
        <div>
          <h2>Latest import runs</h2>
          <p>Last ${e.length||0} recorded automation runs.</p>
        </div>
      </div>
      ${D.importRunsError?`<div class="admin-message is-error">${T(D.importRunsError)}</div>`:``}
      ${D.importRunsLoading&&!e.length?`<div class="empty-card">Loading import runs...</div>`:e.length?`
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
              ${e.map(jo).join(``)}
            </tbody>
          </table>
        </div>
      `:`<div class="empty-card">No automation runs yet.</div>`}
    </section>
  `}function jo(e){let t=No(e,{compact:!0});return`
    <tr>
      <td>${T(S(e.started_at||e.finished_at))}</td>
      <td>${T(e.run_type||`ted-import`)}</td>
      <td><span class="status-pill ${Eo(e.status)}">${T(e.status||`unknown`)}</span></td>
      <td>${Number(e.fetched||0)}</td>
      <td>${Number(e.inserted||0)}</td>
      <td>${Number(e.updated||0)}</td>
      <td>${Number(e.skipped||0)}</td>
      <td>${Number(e.matched||0)}</td>
      <td>${Number(e.reports_generated||0)}</td>
      <td>${e.error?T(e.error):``}</td>
    </tr>
    ${t?`
      <tr class="import-run-debug-row">
        <td colspan="10">${t}</td>
      </tr>
    `:``}
  `}function Mo(e){let t=e?.details;if(!t)return{};if(typeof t==`string`)try{return JSON.parse(t)||{}}catch{return{}}return typeof t==`object`?t:{}}function No(e,t={}){let n=Mo(e),r=n.skip_reasons&&typeof n.skip_reasons==`object`?n.skip_reasons:{},i=Array.isArray(n.skipped_samples)?n.skipped_samples:[],a=Array.isArray(n.per_source)?n.per_source:[],o=Object.entries(r).filter(([,e])=>Number(e)>0).sort((e,t)=>Number(t[1])-Number(e[1])).slice(0,5);return!o.length&&!i.length&&!a.length?``:`
    <div class="import-debug ${t.compact?`is-compact`:``}">
      <div class="import-debug-header">
        <strong>Skip diagnostics</strong>
        <span>${Number(e.skipped||0)} skipped · ${Number(n.connectors_checked||a.length||0)} connector${Number(n.connectors_checked||a.length||0)===1?``:`s`}</span>
      </div>
      ${a.length?`
        <div class="import-per-source">
          ${a.slice(0,8).map(e=>`
            <div>
              <strong>${T(e.source_name||`Unknown source`)}</strong>
              <span>${Number(e.fetched||0)} fetched</span>
              <span>${Number(e.inserted||0)} inserted</span>
              <span>${Number(e.updated||0)} updated</span>
              <span>${Number(e.skipped||0)} skipped</span>
              <span>${Number(e.matched||0)} matched</span>
            </div>
          `).join(``)}
        </div>
      `:``}
      ${o.length?`
        <div class="import-skip-reasons">
          ${o.map(([e,t])=>`
            <span><strong>${Number(t)}</strong> ${T(Po(e))}</span>
          `).join(``)}
        </div>
      `:``}
      ${i.length?`
        <div class="import-skip-samples">
          ${i.slice(0,10).map(e=>`
            <div>
              <strong>${T(e.source_name||e.source||`Unknown source`)}</strong>
              <span>${T(e.title||`Untitled item`)}</span>
              <em>${T(Po(e.reason||`skipped`))}${e.matchedKeyword?`: ${T(e.matchedKeyword)}`:``}${e.final_quality_status?` · ${T(Ds(e.final_quality_status))}`:``}</em>
            </div>
          `).join(``)}
        </div>
      `:``}
    </div>
  `}function Po(e){return{missing_title:`missing title`,missing_url:`missing URL`,duplicate_existing_opportunity:`duplicate existing opportunity`,no_include_keyword_match:`no include keyword match`,matched_exclude_keyword:`matched exclude keyword`,low_quality_needs_review:`low quality needs review`,unsupported_connector:`unsupported connector`,parse_failed:`parse failed`,fetch_failed:`fetch failed`}[e]||String(e||`skipped`).replaceAll(`_`,` `)}function Fo(){let e=D.importedTedOpportunities||[];return`
    <section class="ops-card">
      <div class="card-header">
        <div>
          <h2>Latest TED opportunities</h2>
          <p>Newest imported EU TED rows for review.</p>
        </div>
      </div>
      ${D.importedTedOpportunitiesError?`<div class="admin-message is-error">${T(D.importedTedOpportunitiesError)}</div>`:``}
      ${D.importedTedOpportunitiesLoading&&!e.length?`<div class="empty-card">Loading TED opportunities...</div>`:e.length?`
        <div class="imported-opportunities">
          ${e.map(wo).join(``)}
        </div>
      `:`<div class="empty-card">No TED opportunities loaded yet.</div>`}
    </section>
  `}function Io(){let e=D.adminReports||[];return`
    <section class="ops-card">
      <div class="card-header">
        <div>
          <h2>Latest reports generated</h2>
          <p>Newest saved weekly report records.</p>
        </div>
      </div>
      ${D.adminReportsError?`<div class="admin-message is-error">${T(D.adminReportsError)}</div>`:``}
      ${D.adminReportsLoading&&!e.length?`<div class="empty-card">Loading reports...</div>`:e.length?`
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
              ${e.map(Wo).join(``)}
            </tbody>
          </table>
        </div>
      `:`<div class="empty-card">No generated reports yet.</div>`}
      ${D.selectedAdminReportId?Go():``}
    </section>
  `}function Lo(e){return{eu_ted:`EU TED`,ted:`EU TED`,api:`EU TED`,utbodsvefur:`Útboðsvefur`,municipal_website:`Municipal websites`,public_institution_page:`Public institution pages`,private_manual:`Private/manual leads`,manual:`Private/manual leads`,tender_portal:`Tender portals`}[e]||e||`Unknown`}function Ro(e){return{ted_api:`TED API`,rss_feed:`RSS feed`,wordpress_rest:`WordPress REST`,official_api:`Official API`,page_monitor_allowed:`Allowed page monitor`,manual_fallback:`Manual fallback`,planned:`Planned`,permission_required:`Permission required`}[e]||e||`Planned`}function zo(e=[]){return e.reduce((e,t)=>{let n=t.raw_payload&&typeof t.raw_payload==`object`?t.raw_payload:{},r=P(n.quality_status||n.qualityStatus,t);return e.active+=1,r===`confirmed_tender`?e.confirmed+=1:r===`early_signal`?e.early+=1:e.needsReview+=1,e},{active:0,confirmed:0,early:0,needsReview:0})}function Bo(e){let t=e.source_status||{},n=e.source_connectors||{},r=String(n.status||t.status||``).toLowerCase(),i=String(n.connector_type||``).toLowerCase();return r.includes(`error`)?{label:`Error`,className:`is-error`,tone:`error`}:r===`permission_required`||i===`permission_required`?{label:`Permission required`,className:`is-permission`,tone:`planned`}:n.enabled&&[`connected`,`success`,`completed`,`complete`].includes(r)||n.enabled&&[`rss_feed`,`wordpress_rest`,`ted_api`].includes(i)?{label:`Connected`,className:`is-success`,tone:`connected`}:r===`planned`||i===`planned`?{label:`Planned`,className:`is-planned`,tone:`planned`}:{label:`Disabled`,className:`is-disabled`,tone:`disabled`}}function Vo(){let e=D.sourceCoverage||[];return`
    <section class="ops-card">
      <div class="card-header">
        <div>
          <h2>Source coverage</h2>
          <p>Connected and planned lead sources for Icelandic opportunity coverage.</p>
        </div>
      </div>
      ${D.sourceCoverageError?`<div class="admin-message is-error">${T(D.sourceCoverageError)}</div>`:``}
      ${D.sourceCoverageLoading&&!e.length?`<div class="empty-card">Loading source coverage...</div>`:e.length?`
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
              ${e.map(Ho).join(``)}
            </tbody>
          </table>
        </div>
      `:`<div class="empty-card">No sources configured yet.</div>`}
    </section>
  `}function Ho(e){let t=e.source_status||{},n=e.source_connectors||{},r=Bo(e),i=n.enabled&&[`rss_feed`,`wordpress_rest`].includes(n.connector_type),a=D.connectorTestingSourceId===e.id,o=e.opportunityStats||{active:Number(t.active_opportunities_count||0),confirmed:0,early:0,needsReview:0},s=e.latestOpportunities||[],c=D.expandedSourceId===e.id,l=n.last_error||t.last_error||``;return`
    <tr class="${r.tone===`connected`?`source-row-connected`:`source-row-muted`}">
      <td>
        <strong>${T(e.name||`Unknown source`)}</strong>
        ${n.endpoint_url||e.base_url?`<br><a href="${T(n.endpoint_url||e.base_url)}" target="_blank" rel="noreferrer">${T(n.endpoint_url||e.base_url)}</a>`:``}
      </td>
      <td>${T(Lo(e.source_type))}</td>
      <td>
        <strong>${T(Ro(n.connector_type))}</strong>
        ${n.require_any_keyword===!1?`<br><span>Keyword match optional</span>`:`<br><span>Requires keyword match</span>`}
        ${Array.isArray(n.include_keywords)&&n.include_keywords.length?`<br><span>Includes: ${T(n.include_keywords.slice(0,5).join(`, `))}${n.include_keywords.length>5?`...`:``}</span>`:``}
        ${Array.isArray(n.exclude_keywords)&&n.exclude_keywords.length?`<br><span>Excludes: ${T(n.exclude_keywords.slice(0,5).join(`, `))}${n.exclude_keywords.length>5?`...`:``}</span>`:``}
      </td>
      <td>
        <span class="status-pill ${n.enabled?`is-success`:`is-disabled`}">${n.enabled?`Enabled`:`Disabled`}</span>
      </td>
      <td><span class="status-pill ${r.className}">${T(r.label)}</span></td>
      <td>${T(S(n.last_success_at||t.last_success_at))}</td>
      <td>${l?T(l):`<span class="muted-text">None</span>`}</td>
      <td>${Number(o.active||0)}</td>
      <td>${Number(o.confirmed||0)}</td>
      <td>${Number(o.early||0)}</td>
      <td>${Number(o.needsReview||0)}</td>
      <td>
        <button class="btn btn-secondary btn-small" type="button" data-action="test-source-connector" data-id="${T(e.id)}" ${!i||a||D.connectorImportLoading?`disabled`:``}>
          ${a?`Testing...`:`Test source`}
        </button>
        <button class="btn btn-ghost btn-small" type="button" data-action="toggle-source-items" data-id="${T(e.id)}" ${s.length?``:`disabled`}>
          ${c?`Hide items`:`View latest items`}
        </button>
      </td>
    </tr>
    ${c?Uo(e):``}
  `}function Uo(e){let t=e.latestOpportunities||[];return`
    <tr class="source-items-row">
      <td colspan="12">
        <div class="source-items-panel">
          <div class="source-items-header">
            <strong>Latest active items</strong>
            <span>${t.length} shown</span>
          </div>
          ${t.length?`
            <div class="source-items-list">
              ${t.map(t=>{let n=t.raw_payload&&typeof t.raw_payload==`object`?t.raw_payload:{},r=P(n.quality_status||n.qualityStatus,t);return`
                  <div class="source-item">
                    <div>
                      <strong>${T(t.title||`Untitled opportunity`)}</strong>
                      <span>${T(al(`buyer`,Ht(t.buyer,e.name)))} · ${T(Ua(t.deadline))}</span>
                    </div>
                    <span class="quality-badge ${T(r)}">${T(Ds(r))}</span>
                    ${t.url?`<a class="btn btn-ghost btn-small" href="${T(t.url)}" target="_blank" rel="noreferrer">Open</a>`:``}
                  </div>
                `}).join(``)}
            </div>
          `:`<div class="empty-card">No active items for this source.</div>`}
        </div>
      </td>
    </tr>
  `}function Wo(e){let t=e.companies?.company_name||`Unknown company`,n=Array.isArray(e.report_items)?e.report_items.length:0;return`
    <tr>
      <td>${T(Tc(e,t))}</td>
      <td>${T(t)}</td>
      <td>${T(S(e.created_at))}</td>
      <td>${T(`${kt(e.period_start)} - ${kt(e.period_end)}`)}</td>
      <td>${T(e.status||`draft`)}</td>
      <td>${n}</td>
      <td>
        <div class="admin-row-actions">
          <button class="btn btn-secondary btn-small" type="button" data-action="view-admin-report" data-id="${T(e.id)}">${T(D.language===`is`?`Skoða yfirlit`:`View report`)}</button>
          <button class="btn btn-ghost btn-small" type="button" data-action="copy-admin-report" data-id="${T(e.id)}">${T(b(`copyReportEmail`,D.language))}</button>
          <button class="btn btn-ghost btn-small" type="button" data-action="view-admin-report" data-id="${T(e.id)}">${T(D.language===`is`?`Opna fyrir PDF`:`Open for PDF`)}</button>
        </div>
      </td>
    </tr>
  `}function Go(){let e=(D.adminReports||[]).find(e=>e.id===D.selectedAdminReportId),t=D.selectedAdminReport?.id===D.selectedAdminReportId?D.selectedAdminReport:e;if(!t&&!D.selectedAdminReportLoading&&!D.selectedAdminReportError)return``;if(!t)return`
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
            ${D.selectedAdminReportError?`<div class="admin-message is-error">${T(D.selectedAdminReportError)}</div>`:`<div class="empty-card">Loading saved report items...</div>`}
          </div>
        </div>
      </div>
    `;let n=t.companies?.company_name||`Unknown company`,r=Array.isArray(t.report_items)?t.report_items.length:0,i=Tc(t,n);return`
    <div class="modal-backdrop">
      <div class="modal admin-report-modal" role="dialog" aria-modal="true">
        <div class="modal-header">
          <div>
            <span class="status-pill is-success">${T(yc(t.status))}</span>
            <h2>${T(i)}</h2>
            <p>${T(n)} · ${T(Q(t.period_start,t.period_end))} · ${T(S(t.created_at))}</p>
          </div>
          <button type="button" class="icon-btn modal-close-btn" data-action="close-admin-report" aria-label="Close report">×</button>
        </div>
        <div class="modal-body">
          <div class="admin-report-actions">
            <button class="btn btn-primary" type="button" data-action="download-admin-report-pdf" ${D.selectedAdminReportLoading?`disabled`:``}>${T(b(`downloadPdf`,D.language))}</button>
            <button class="btn btn-secondary" type="button" data-action="copy-admin-report" data-id="${T(t.id)}">${T(b(`copyReportEmail`,D.language))}</button>
            <button class="btn btn-secondary" type="button" data-action="mark-admin-report-sent" data-id="${T(t.id)}" ${D.adminReportDeliveryActions[t.id]===`sent`?`disabled`:``}>${T(D.adminReportDeliveryActions[t.id]===`sent`?b(`marking`,D.language):b(`markAsSent`,D.language))}</button>
            <button class="btn btn-ghost" type="button" data-action="close-admin-report">${T(b(`close`,D.language))}</button>
          </div>

          ${D.selectedAdminReportLoading?`<div class="empty-card">Loading saved report items...</div>`:``}
          ${D.selectedAdminReportError?`<div class="admin-message is-error">${T(D.selectedAdminReportError)}</div>`:``}
          ${D.selectedAdminReportLoading?``:Ko(t,r,n)}

          ${!D.selectedAdminReportLoading&&r?xc(t,{companyName:n},{id:`admin-report-preview`,closeButton:!1,includeTextArea:!1}):D.selectedAdminReportLoading?``:`
            <div class="empty-card">${T(D.language===`is`?`Engin virk tækifæri eru í þessu yfirliti.`:`No active eligible opportunities in this report.`)}</div>
          `}

          ${!D.selectedAdminReportLoading&&r?qo(t):``}
        </div>
      </div>
    </div>
  `}function Ko(e,t,n){let r=e.status===`generated_all_current`?`all_current`:e.status===`generated_new_only`?`new_only`:e.status||`draft`;return`
    <div class="admin-report-meta-strip">
      <span><strong>${T(b(`company`,D.language))}:</strong> ${T(n||`Unknown company`)}</span>
      <span><strong>${T(b(`period`,D.language))}:</strong> ${T(Q(e.period_start,e.period_end))}</span>
      <span><strong>${T(b(`generatedAt`,D.language))}:</strong> ${T(S(e.created_at))}</span>
      <span><strong>${T(b(`mode`,D.language))}:</strong> ${T(b(r===`all_current`?`currentActive`:`newOpportunities`,D.language))}</span>
      <span><strong>${T(b(`items`,D.language))}:</strong> ${Number(t||0)}</span>
    </div>
  `}function qo(e){let t=(Array.isArray(e.report_items)?[...e.report_items]:[]).sort((e,t)=>Number(e.sort_order||0)-Number(t.sort_order||0));return`
    <section class="admin-report-items">
      <h3>${T(D.language===`is`?`Atriði í yfirliti`:`Report items`)}</h3>
      <div class="admin-report-item-list">
        ${t.map(e=>Jo(e)).join(``)}
      </div>
    </section>
  `}function Jo(e){let t=e.opportunities?rr(e.opportunities):null;if(!t)return`<article class="admin-report-item"><p>${T(D.language===`is`?`Gögn um tækifæri eru ekki lengur aðgengileg.`:`Opportunity data is no longer available.`)}</p></article>`;let n=Ft(t.url),r=Ka(t),i=mt(Array.isArray(e.match_reasons)?e.match_reasons:[],D.language);return`
    <article class="admin-report-item">
      <div class="opportunity-badges">
        <span class="source-pill source-badge">${T(pt({matchScore:Number(e.match_score||0)},D.language))}</span>
        <span class="${Xa(ha(Number(e.match_score||0)))}">${T(`${dt({matchScore:Number(e.match_score||0)},D.language)} ${Number(e.match_score||0)}`)}</span>
      </div>
      <h4>${T(t.title)}</h4>
      <p><strong>${T(D.language===`is`?`Staða`:`Status`)}:</strong> ${T(pt({matchScore:Number(e.match_score||0)},D.language))}</p>
      <p>${T(ut(D.language))}</p>
      <div class="admin-report-meta-grid">
        <span><strong>${T(E(`buyer`))}</strong>${T(ol(t))}</span>
        <span><strong>${T(E(`source`))}</strong>${T(al(`source`,t.source))}</span>
        <span><strong>${T(E(`area`))}</strong>${T(sl(t))}</span>
        <span><strong>${T(E(`deadline`))}</strong>${T(r.label)}</span>
        <span><strong>${T(E(`estimatedValue`))}</strong>${T(t.estimatedValue?Y(t.estimatedValue):E(`notListed`))}</span>
        <span><strong>${T(b(`sentStatus`,D.language))}</strong>${T(e.sent_at?`${b(`sentOn`,D.language)} ${S(e.sent_at)}`:b(`notSent`,D.language))}</span>
      </div>
      ${i.length?`<div><strong>${T(b(`reasons`,D.language))}</strong><ul>${i.map(e=>`<li>${T(e)}</li>`).join(``)}</ul></div>`:``}
      <p>${T(t.description||``)}</p>
      ${n?`<a class="btn btn-secondary btn-small" href="${T(n)}" target="_blank" rel="noreferrer">${T(b(`openSource`,D.language))}</a>`:``}
    </article>
  `}async function Yo(e){let t=D.selectedAdminReport?.id===e?D.selectedAdminReport:(D.adminReports||[]).find(t=>t.id===e);if(!t){V(`Report not found`,`error`);return}let n=t.companies?.company_name||`Company`,r=Ec(t),i=gt({companyName:n,language:D.language,matches:r.map(e=>({...e,buyer:ol(e),deadline:Wa(e),matchReasons:mt(e.matchReasons,D.language)}))});try{await navigator.clipboard.writeText(i),V(`Report email copied`,`success`)}catch(e){console.error(`Failed to copy admin report:`,e),V(`Could not copy report email`,`error`)}}async function Xo(e){let t=D.selectedAdminReport?.id===e?D.selectedAdminReport:(D.adminReports||[]).find(t=>t.id===e);if(!t?.company_id){V(`Report not found`,`error`);return}D.adminReportDeliveryActions[e]=`sent`,X();try{let n=await $n(t.company_id,`mark_report_sent`,{reportId:e});await Mn(e),V(`Marked ${Number(n.marked_sent||0)} report item${Number(n.marked_sent||0)===1?``:`s`} as sent`,`success`)}catch(e){console.error(`Failed to mark report as sent:`,e),V(`Could not mark report as sent. ${B(e)}`,`error`)}finally{delete D.adminReportDeliveryActions[e],X()}}function Zo(){let e=D.adminOpportunityFilters;return(D.opportunities||[]).filter(t=>{let n=Es(t);if(e.tedOnly&&!n||e.manualOnly&&n||!e.showDemoTest&&dr(t)||e.source!==`all`&&t.source!==e.source||e.status!==`all`&&t.status!==e.status)return!1;let r=Dr(t)||t.countryCode||`Unknown`;if(e.country!==`all`&&r!==e.country)return!1;let i=w(e.search);return!(i&&!w(`${t.title} ${t.buyer} ${t.externalId} ${t.location}`).includes(i))})}function Qo(e,t){return Array.from(new Set(e.map(t).filter(Boolean))).sort((e,t)=>String(e).localeCompare(String(t)))}function $o(e){let t=D.adminOpportunityFilters,n=Qo(D.opportunities||[],e=>e.source||`Unknown`),r=Qo(D.opportunities||[],e=>e.status||`Unknown`),i=Qo(D.opportunities||[],e=>Dr(e)||e.countryCode||`Unknown`),a=D.adminCompanies||[];return`
    <div class="admin-filters">
      <input data-admin-filter="search" value="${T(t.search)}" placeholder="Search title, buyer, external ID..." />
      <select data-admin-filter="source">
        <option value="all">All sources</option>
        ${n.map(e=>`<option value="${T(e)}" ${t.source===e?`selected`:``}>${T(e)}</option>`).join(``)}
      </select>
      <select data-admin-filter="status">
        <option value="all">All statuses</option>
        ${r.map(e=>`<option value="${T(e)}" ${t.status===e?`selected`:``}>${T(e)}</option>`).join(``)}
      </select>
      <select data-admin-filter="country">
        <option value="all">All countries</option>
        ${i.map(e=>`<option value="${T(e)}" ${t.country===e?`selected`:``}>${T(e)}</option>`).join(``)}
      </select>
      <select data-admin-filter="debugCompanyId">
        <option value="">Match debug company...</option>
        ${a.map(e=>`<option value="${T(e.id)}" ${t.debugCompanyId===e.id?`selected`:``}>${T(e.companyName)}</option>`).join(``)}
      </select>
      <label class="checkbox compact"><input type="checkbox" data-admin-filter="tedOnly" ${t.tedOnly?`checked`:``}/><span>TED only</span></label>
      <label class="checkbox compact"><input type="checkbox" data-admin-filter="manualOnly" ${t.manualOnly?`checked`:``}/><span>Manual only</span></label>
      <label class="checkbox compact"><input type="checkbox" data-admin-filter="showDemoTest" ${t.showDemoTest?`checked`:``}/><span>Show demo/test opportunities</span></label>
    </div>
    <p class="admin-filter-count">${e.length} of ${(D.opportunities||[]).length} opportunities shown.</p>
  `}function es(e){return!!(e?.deadline||e?.deadlineAt||e?.rawPayload?.deadline_at||e?.rawPayload?.deadlineAt)}function ts(){let e=D.adminOpportunityFilters?.missingDeadlineSource||`all`;return(D.opportunities||[]).filter(e=>!es(e)).filter(e=>!dr(e)).filter(t=>e===`all`||t.source===e).sort((e,t)=>String(e.source||``).localeCompare(String(t.source||``))||String(e.title||``).localeCompare(String(t.title||``)))}function ns(){let e=[`Ríkiskaup / island.is procurement`,`Vegagerðin`,`Akranes útboð`,`Garðabær Municipality`],t=Qo((D.opportunities||[]).filter(e=>!es(e)),e=>e.source||`Unknown`);return At([...e,...t])}function rs(e){let t=e?.rawPayload||{},n=String(e?.url||t.source_url||t.link||``).trim();if(!n)return{label:`No source URL`,isSafe:!1};let r;try{r=new URL(n)}catch{return{label:`Invalid URL`,isSafe:!1}}if(![`http:`,`https:`].includes(r.protocol))return{label:`Unsupported protocol: ${r.protocol}`,isSafe:!1};let i=r.hostname.replace(/^www\./i,``).toLowerCase(),a=[`utbodsvefur.is`,`vegagerdin.is`,`akranes.is`,`gardabaer.is`,`borgarbyggd.is`,`arborg.is`,`faxafloahafnir.is`,`reykjavik.is`,`hafnarfjordur.is`,`reykjanesbaer.is`,`mulathing.is`,`akureyri.is`].some(e=>i===e||i.endsWith(`.${e}`));return{label:a?`Yes (${i})`:`Unknown host (${i})`,isSafe:a}}function is(e){let t=e?.rawPayload||{},n=t.deadline_debug&&typeof t.deadline_debug==`object`?t.deadline_debug:{},r=[t.deadline_debug_reason,t.deadline_reenrichment_error,n.source?`debug source: ${n.source}`:``,n.extractedText?`extracted: ${n.extractedText}`:``,n.parserVersion?`parser: ${n.parserVersion}`:``,t.stale_reason?`stale: ${t.stale_reason}`:``].filter(Boolean);return r.length?r.join(` · `):`Still missing after import/re-enrichment, or no debug reason stored yet.`}function as(){let e=ts(),t=os(e),n=e.reduce((e,t)=>{let n=t.source||`Unknown`;return e[n]||(e[n]=[]),e[n].push(t),e},{}),r=Object.keys(n).sort((e,t)=>e.localeCompare(t)),i=D.adminOpportunityFilters?.missingDeadlineSource||`all`,a=ns();return`
    <section class="ops-card admin-debug-card">
      <div class="card-header">
        <div>
          <h2>Missing deadline debug</h2>
          <p>${e.length} opportunities missing deadlines${i===`all`?``:` for ${T(i)}`}. Grouped by source.</p>
          <p class="admin-filter-count">
            total=${t.total} · alert_eligible=false=${t.alertFalse} · alert_eligible not false=${t.alertNotFalse} · confirmed_tender=${t.confirmedTender} · needs_review=${t.needsReview}
          </p>
        </div>
        <label class="admin-inline-control">
          <span>Source</span>
          <select data-admin-filter="missingDeadlineSource">
            <option value="all">All sources</option>
            ${a.map(e=>`<option value="${T(e)}" ${i===e?`selected`:``}>${T(e)}</option>`).join(``)}
          </select>
        </label>
      </div>
      ${r.length?r.map(e=>ss(e,n[e])).join(``):`<div class="empty-card">No missing-deadline opportunities for this filter.</div>`}
    </section>
  `}function os(e){return(e||[]).reduce((e,t)=>{let n=t?.rawPayload||{},r=String(n.alert_eligible??``).toLowerCase(),i=String(n.quality_status||``).toLowerCase();return e.total+=1,r===`false`?e.alertFalse+=1:e.alertNotFalse+=1,i===`confirmed_tender`&&(e.confirmedTender+=1),i===`needs_review`&&(e.needsReview+=1),e},{total:0,alertFalse:0,alertNotFalse:0,confirmedTender:0,needsReview:0})}function ss(e,t){return`
    <div class="missing-deadline-source-group">
      <h3>${T(e)} <span class="muted">(${t.length})</span></h3>
      <div class="ops-table-wrap">
        <table class="ops-table missing-deadline-table">
          <thead>
            <tr>
              <th>ID / external</th>
              <th>Title</th>
              <th>Source URL</th>
              <th>Published</th>
              <th>Safety</th>
              <th>Fetchable</th>
              <th>Reason</th>
            </tr>
          </thead>
          <tbody>
            ${t.map(cs).join(``)}
          </tbody>
        </table>
      </div>
    </div>
  `}function cs(e){let t=rs(e),n=Ft(e.url||e.rawPayload?.source_url||``),r=e.rawPayload?.safety_status||e.rawPayload?.quality_status||ks(e),i=e.rawPayload?.alert_eligible,a=i===!0?`true`:`false`,o=String(i??``).toLowerCase()===`false`?``:`<br><span class="status-pill is-warning">Missing deadline alert flag needs fix</span>`,s=is(e);return`
    <tr>
      <td><code>${T(String(e.id||``))}</code><br><span>${T(e.externalId||`No external ID`)}</span></td>
      <td><strong>${T(e.title||`Untitled`)}</strong><br><span>${T(e.source||`Unknown source`)}</span></td>
      <td>${n?`<a href="${T(n)}" target="_blank" rel="noreferrer" title="${T(n)}">${T(n)}</a>`:`No source URL`}</td>
      <td>${e.publishedDate?T(S(e.publishedDate)):`Not listed`}</td>
      <td>${T(r||`unknown`)}<br><span>alert_eligible=${T(a)}</span>${o}</td>
      <td><span class="status-pill ${t.isSafe?`is-success`:`is-running`}">${T(t.label)}</span></td>
      <td title="${T(s)}">${T(s)}</td>
    </tr>
  `}function ls(){return Z(He({t:E,escapeHtml:T,language:D.language,trialHref:Cn()}))}function us(){return D.user?(H(),Z(`
    <section class="page-head pricing-head">
      <p class="eyebrow">${T(E(`onboarding`))}</p>
      <h1>${T(E(`onboardingTitle`))}</h1>
      <p>${T(E(`onboardingText`))}</p>
    </section>

    ${ds()}
  `)):z()}function ds(){return H(),Qe({t:E,escapeHtml:T,capitalize:Nt,arrayFieldText:Ei,formatCustomerLocation:ll,getFilterOptions:fs,getProfileSuggestions:ki,renderCustomDropdown:hs,renderSuggestionChips:ji,profileDraft:D.profileDraft||tn(),hasProfile:!!D.profile,isSavingProfile:D.isSavingProfile,profileSaved:D.profileSaved,profileSaveMessage:D.profileSaveMessage,profileSaveError:D.profileSaveError})}function fs(e){return e===`industry`?[`Construction`,`Electrical`,`Cleaning`,`IT / Web / Software`,`Architecture / Engineering`,`Consulting`,`Transport`,`Equipment / Machinery`,`Landscaping`,`Security`,`Other`].map(e=>({value:e,label:e})):e===`label`?[{value:`strong`,label:D.language===`is`?`Aðeins sterkar`:`Strong only`},{value:`recommended`,label:D.language===`is`?`Mælt með`:`Recommended`},{value:`all`,label:D.language===`is`?`Allar samsvaranir`:`All matches`},{value:`all_opportunities`,label:D.language===`is`?`Öll tækifæri`:`All opportunities`},{value:`needs_review`,label:E(`needsReview`)},{value:`possible`,label:D.language===`is`?`Mögulegar samsvaranir`:`Possible matches`},{value:`Good match`,label:E(`goodMatch`)},{value:`Weak match`,label:E(`weakMatch`)}]:e===`category`?[{value:`all`,label:D.language===`is`?`Allir flokkar`:`All categories`},...qa().map(e=>({value:e,label:e}))]:e===`location`?[{value:`all`,label:D.language===`is`?`Öll svæði`:`All locations`},...Ja().map(e=>({value:e,label:ll(e)}))]:e===`type`?[{value:`all`,label:D.language===`is`?`Allar tegundir`:`All types`},...Ya().map(e=>({value:e,label:Nt(e.replace(`-`,` `))}))]:[]}function ps(e){let t=fs(e),n=e===`industry`?D.profileDraft?.industry||D.profile?.industry||``:D.filters[e],r=t.findIndex(e=>e.value===n);return Math.max(0,r)}function ms(e){return hs({key:e,value:D.filters[e],options:fs(e)})}function hs({key:e,value:t,options:n,profileField:r=``}){let i=D.dropdown.openKey===e,a=t,o=Math.max(0,n.findIndex(e=>e.value===a)),s=i?D.dropdown.focusedIndex:o,c=`filter-${e}-trigger`,l=`filter-${e}-list`,u=n.find(e=>e.value===a)?.label||(e===`industry`?E(`selectIndustry`):n[0]?.label)||``;return`
    <div class="custom-select ${i?`is-open`:``}" data-key="${e}">
      <button
        type="button"
        id="${c}"
        class="custom-select-trigger"
        data-action="toggle-dropdown"
        data-key="${e}"
        aria-haspopup="listbox"
        aria-expanded="${i}"
        aria-controls="${l}"
      >
        <span>${T(u)}</span>
        <span class="custom-select-arrow" aria-hidden="true"></span>
      </button>
      ${i?`
        <div class="custom-select-menu" id="${l}" role="listbox" aria-labelledby="${c}">
          ${n.map((t,n)=>{let i=t.value===a;return`
              <button
                type="button"
                class="custom-select-option ${i?`is-selected`:``} ${n===s?`is-focused`:``}"
                data-action="select-filter"
                data-key="${e}"
                data-value="${T(t.value)}"
                ${r?`data-profile-field="${T(r)}"`:``}
                role="option"
                aria-selected="${i}"
              >
                <span>${T(t.label)}</span>
                ${i?`<span class="custom-select-check" aria-hidden="true">✓</span>`:``}
              </button>
            `}).join(``)}
        </div>
      `:``}
    </div>
  `}function gs(){D.dropdown.openKey=null,D.dropdown.focusedIndex=0,X()}function _s(){requestAnimationFrame(()=>{document.querySelector(`.custom-select-option.is-focused`)?.focus()})}function vs(e){requestAnimationFrame(()=>{document.querySelector(`[data-action="toggle-dropdown"][data-key="${e}"]`)?.focus()})}function ys(){if(!D.user)return z();if(!D.profile)return _o(E(`setupCompanyFirst`),E(`dashboardNeedsProfile`));let e=Sa(),t=_a(),n=Ca(t),r=va(),i=n.filter(e=>e.matchScore>=85).length,a=n.filter(e=>x(e.deadline)<=14&&x(e.deadline)>=0).length,o=D.saved.length,s=n.filter(e=>e.matchScore>=65).reduce((e,t)=>e+(t.estimatedValue||0),0),c=n.filter(Ta).length,l=Aa({visibleCount:e.length,storedMatchCount:t.length,filteredStoredCount:n.length,availableCount:r.length,recommendedCount:c,strongCount:i,companyName:D.profile.companyName}),u=D.lastMatchedAt?E(`matchesLastRefreshed`,{time:S(D.lastMatchedAt)}):E(`matchesAutoRefresh`);return Z(Le({profile:D.profile,matches:e,stats:{strong:i,closingSoon:a,savedCount:o,totalValue:Y(s)},filters:D.filters,filterSummary:l,matchStatus:D.matchStatus,opportunityLoadError:D.opportunityLoadError,isAdmin:D.isAdmin,matchingLoading:D.matchingLoading,labels:{dashboard:E(`dashboard`),welcomeCompany:E(`welcomeCompany`,{company:D.profile.companyName}),dashboardIntro:E(`dashboardIntro`,{refresh:u}),refreshing:E(`refreshing`),refreshMatches:E(`refreshMatches`),viewWeeklyReport:E(`viewWeeklyReport`),strongMatches:E(`strongMatches`),closingSoon:E(`closingSoon`),savedLabel:E(`savedLabel`),totalPotentialValue:E(`totalPotentialValue`),searchOpportunities:E(`searchOpportunities`),savedOnly:E(`savedOnly`)},renderFilterDropdown:ms,renderOpportunityCard:Ts,renderEmptyState:()=>ws(D.profile,D.filters.label,{availableCount:r.length,storedMatchCount:t.length,filteredStoredCount:n.length,recommendedCount:c,strongCount:i}),escapeHtml:T}))}function bs(e){let t=[],n=Array.isArray(e?.locations)?e.locations:[],r=Array.isArray(e?.services)?e.services:[],i=Array.isArray(e?.includeKeywords)?e.includeKeywords:[],a=Array.isArray(e?.excludeKeywords)?e.excludeKeywords:[],o=n.some(e=>w(e)===`all iceland`),s=a.some(e=>{let t=w(e);return t.includes(`reykjavik`)||t.includes(`capital area`)});return o||t.push(D.language===`is`?`Bætið við Allt landið til að ná landsdekkandi útboðum og rammasamningum.`:`Add All Iceland to catch national tenders and framework agreements.`),e?.nationalProjects||t.push(D.language===`is`?`Kveikið á landsdekkandi verkefnum svo slík tækifæri birtist sem mögulegar samsvaranir.`:`Enable national projects so All Iceland opportunities appear as possible matches.`),r.length<5&&t.push(D.language===`is`?`Bætið við nákvæmari þjónustu svo VerkRadar þekki betur útboð sem passa við ykkar vinnu.`:`Add more specific services so VerkRadar can recognize notices that fit your work.`),s&&t.push(D.language===`is`?`Yfirfarið útilokunarorð fyrir Reykjavík eða höfuðborgarsvæðið. Þau geta falið útboð sem fyrirtæki utan svæðisins geta samt boðið í.`:`Review exclude keywords for Reykjavík or Capital Area. They may hide tenders that companies outside Reykjavík can still bid on.`),i.length<4&&t.push(D.language===`is`?`Bætið við fleiri leitarorðum, sérstaklega íslenskum hugtökum sem kaupendur nota í útboðum.`:`Add more include keywords, including Icelandic terms buyers may use in notices.`),t.length||t.push(D.language===`is`?`Yfirfarið þjónustu, svæði og leitarorð svo þau lýsi verkefnunum sem þið viljið raunverulega bjóða í.`:`Review services, locations and keywords to make sure they describe the work you actually want to bid on.`),t}function xs(e,t={}){return D.language===`is`?e===`all`?{eyebrow:`Engar samsvaranir`,title:`Engin tækifæri fundust fyrir þennan prófíl enn.`,body:`Víkkið þjónustu, svæði eða leitarorð til að finna fleiri tækifæri.`}:e===`all_opportunities`?{eyebrow:`Engin tækifæri`,title:`Engin tiltæk tækifæri enn.`,body:`Flytjið inn fleiri heimildir eða skoðið heimildayfirlit í Admin.`}:e===`needs_review`?{eyebrow:`Ekkert þarf staðfestingu`,title:`Engin tækifæri þarfnast staðfestingar núna.`,body:`Tækifæri úr breiðum heimildum sem þarf að yfirfara birtast hér.`}:e===`strong`?{eyebrow:`Engar sterkar samsvaranir`,title:`Engar sterkar samsvaranir enn.`,body:`Þið gætuð samt átt gagnlegar mögulegar samsvaranir. Prófið Mælt með eða Allar samsvaranir.`}:e===`possible`||e===`Possible match`||e===`Weak match`?{eyebrow:`Engar mögulegar samsvaranir`,title:`Engar mögulegar samsvaranir enn.`,body:`Prófið að víkka þjónustu, svæði eða leitarorð til að finna óvissari tækifæri.`}:{eyebrow:`Engar ráðlagðar samsvaranir`,title:Ss(t),body:Cs(t)}:e===`all`?{eyebrow:`No matches`,title:`No opportunities found for this profile yet.`,body:`Broaden your services, locations or keywords to find more opportunities.`}:e===`all_opportunities`?{eyebrow:`No opportunities`,title:`No available opportunities yet.`,body:`Import more sources or check Admin source coverage.`}:e===`needs_review`?{eyebrow:`No needs-review items`,title:`No needs-review opportunities right now.`,body:`Broad-feed opportunities that need manual verification will appear here.`}:e===`strong`?{eyebrow:`No strong matches`,title:`No strong matches yet.`,body:`You may still have useful possible matches. Switch to Recommended or All matches to review them.`}:e===`possible`||e===`Possible match`||e===`Weak match`?{eyebrow:`No possible matches`,title:`No possible matches yet.`,body:`Try broadening your services, locations or keywords to find lower-confidence opportunities.`}:{eyebrow:`No recommended matches`,title:Ss(t),body:Cs(t)}}function Ss(e={}){let t=e.companyName||(D.language===`is`?`þennan prófíl`:`this profile`);return Number(e.strongCount||0)>0?D.language===`is`?`${e.strongCount} sterkar samsvaranir eru faldar af síum.`:`${e.strongCount} strong ${Number(e.strongCount)===1?`match is`:`matches are`} hidden by filters.`:D.language===`is`?`Engar ráðlagðar samsvaranir fyrir ${t} enn.`:`No recommended matches for ${t} yet.`}function Cs(e={}){let t=Number(e.strongCount||0),n=Number(e.filteredStoredCount||0),r=Number(e.availableCount||0);return t>0?D.language===`is`?`Hreinsið leit/flokka/svæðissíur eða slökkvið á Aðeins vistað til að sjá sterku samsvaranirnar.`:`Clear search/category/location filters or turn off Saved only to see the strong matches.`:n>0?D.language===`is`?`${n} tækifæri eru til, en falin af gæðasíum. Notið Allar samsvaranir eða Þarfnast staðfestingar til að skoða þau.`:`${n} ${n===1?`opportunity is`:`opportunities are`} available, but hidden from Recommended by quality checks. Use All matches or Needs review to inspect them.`:D.language===`is`?`${r} tækifæri eru til í kerfinu, en ekkert passar nógu sterkt við þennan prófíl.`:`${r} opportunities are available in the system, but none match this profile strongly enough.`}function ws(e,t=D.filters.label,n={}){let r=bs(e);return Ie({copy:xs(t,{...n,companyName:e?.companyName}),suggestions:r,labels:{improveProfile:E(`improveProfile`),includeNationalOpportunities:E(`includeNationalOpportunities`),showAllStoredMatches:E(`showAllStoredMatches`),inspectAllOpportunities:E(`inspectAllOpportunities`)},escapeHtml:T})}function Ts(e){return Re({opp:e,saved:D.saved.includes(e.id),deadline:Ka(e),sourceBadgeHtml:`<span class="source-pill source-badge">${T(e.source)}</span>`,qualityBadgeHtml:As(e),safetyBadgeHtml:js(e),extractedBadgeHtml:Fs(e),originalLanguageBadgeHtml:Es(e)?`<span class="source-pill source-badge muted-badge">${T(E(`originalLanguage`))}</span>`:``,matchBadgeClass:Xa(e.matchLabel),matchLabel:il(e.matchLabel),buyer:ol(e),location:sl(e),value:Y(e.estimatedValue),reasons:e.matchReasons.slice(0,3).map(ul),labels:{details:E(`details`),saved:E(`saved`),save:E(`save`),ignore:E(`ignore`)},escapeHtml:T})}function Es(e){return/ted|tenders electronic daily/i.test(String(e.source||``))}function Ds(e){let t=P(e);return{confirmed_tender:`Confirmed tender`,early_signal:`Early signal`,needs_review:`Needs review`}[t]||Nt(t.replace(/_/g,` `))}function Os(e){return{confirmed_tender:`Confirmed tender`,early_opportunity:`Early opportunity`,market_signal:`Market signal`,news_context:`News context`,not_opportunity:`Not an opportunity`}[fr(e)||e]||Nt(String(e||`market_signal`).replace(/_/g,` `))}function ks(e){let t=F(e);return t===`news_context`||t===`not_opportunity`||t===`market_signal`?Os(t):I(e)?Is(pr(e)):Ds(P(e.qualityStatus,e))}function As(e){return`<span class="source-pill source-badge quality-badge ${T(F(e)||P(e.qualityStatus,e))}">${T(rl(ks(e)))}</span>`}function js(e){if(!e||!e.safetyStatus)return``;let t=ba(e);return`<span class="source-pill source-badge safety-badge ${T(t)}">${T(Ms(t))}</span>`}function Ms(e){let t=String(e||``).toLowerCase();return(D.language===`is`?{auto_approved:`Sjálfkrafa samþykkt`,needs_review:`Þarfnast yfirferðar`,hidden:`Falið`}:{auto_approved:`Auto-approved`,needs_review:`Needs review`,hidden:`Hidden`})[t]||Nt(t.replace(/_/g,` `))}function Ns(e){return e?D.language===`is`?`Hæft í tilkynningu`:`Alert eligible`:D.language===`is`?`Ekki hæft í tilkynningu`:`Not alert eligible`}function Ps(e){let t=String(e||``);return D.language===`is`?{"Valid future deadline found":`Gildur framtíðarskilafrestur fannst`,"Recent high-intent procurement signal":`Nýlegt merki frá sterkri útboðsheimild`,"Strong service/work-type fit":`Sterk samsvörun við þjónustu eða verkflokk`,"No reliable deadline was found":`Áreiðanlegur skilafrestur fannst ekki`,"Buyer is missing or generic":`Kaupandi vantar eða er of almennur`,"Match depends on broad or low-confidence terms":`Samsvörun byggir á breiðum eða óvissum orðum`,"Possible service mismatch for this company profile":`Mögulegt ósamræmi við þjónustu fyrirtækisins`,"Mentions design, consulting, supervision, or project management terms":`Inniheldur orð tengd hönnun, ráðgjöf, eftirliti eða verkefnastjórnun`,"Tender appears already awarded or already tendered":`Útboð virðist þegar auglýst eða útboði lokið`,"Stale or expired opportunity signal":`Gamalt eða útrunnið tækifæri`,"Current opportunity is plausible but needs review before customer alerts":`Tækifærið gæti átt við en þarf yfirferð áður en það fer í tilkynningu`,"Admin override includes this opportunity in customer reports":`Admin hefur samþykkt birtingu í viðskiptavinayfirlitum`,"Excluded by customer eligibility, duplicate, stale, hidden, demo, or expired filters":`Falið vegna reglna um birtingu, afrit, aldur, prófunargögn eða útrunnið tækifæri`}[t]||$(t):t}function Fs(e){if(e?.rawPayload?.extraction_method!==`vegagerdin_article_project_parser`)return``;let t=e.rawPayload?.region?` · ${e.rawPayload.region}`:``;return`<span class="source-pill source-badge muted-badge">${T(E(`extractedProject`))}${T(t)}</span>`}function Is(e){return{tender_awarded:E(`tenderAwarded`),awarded:E(`tenderAwarded`),already_tendered:E(`tenderAlreadyAnnounced`),announced:E(`tenderAlreadyAnnounced`),upcoming_tender:E(`upcomingTender`),project_signal:E(`projectSignal`),open_or_published:E(`tenderAlreadyAnnounced`),planned_tender:E(`upcomingTender`),unclear:E(`projectSignal`)}[String(e||``)]||Nt(String(e||``).replace(/_/g,` `))}function Ls(e){let t=F(e);return t===`news_context`||t===`not_opportunity`?`<div class="note-panel quality-warning">${T(D.language===`is`?`Þetta lítur út eins og frétta- eða umferðarefni, ekki tækifæri fyrir viðskiptavin.`:`This looks like news or traffic context, not a customer-facing opportunity.`)}</div>`:P(e.qualityStatus,e)===`needs_review`?I(e)?`<div class="note-panel quality-warning">${T(D.language===`is`?`Útdregin verkefnavísbending — staðfestið útboðstímasetningu í heimildargrein.`:`Extracted project signal — verify tender timing in the source article.`)}</div>`:`<div class="note-panel quality-warning">${T(D.language===`is`?`Innflutt úr breiðum straumi — staðfestið á upprunasíðu.`:`Imported from broad feed — verify source page.`)}</div>`:``}function Rs(e){let t=D.saved.includes(e.id),n=Ka(e),r=Array.isArray(e.requirements)?e.requirements:[],i=Array.isArray(e.matchReasons)?e.matchReasons:[],a=Array.isArray(e.risks)?e.risks:[],o=Array.isArray(e.nextSteps)?e.nextSteps:[],s=[I(e)?`<p><strong>${T(E(`extraction`))}:</strong> ${T(D.language===`is`?`Útdregið úr grein Vegagerðarinnar`:`Extracted from Vegagerðin article`)}</p>`:``,e.rawPayload?.parent_article_title?`<p><strong>${T(E(`sourceArticle`))}:</strong> ${T(e.rawPayload.parent_article_title)}</p>`:``,e.rawPayload?.parent_url?`<p><strong>${T(E(`parentArticle`))}:</strong> <a href="${T(e.rawPayload.parent_url)}" target="_blank" rel="noreferrer">${T(E(`openSourceArticle`))}</a></p>`:``,e.rawPayload?.region?`<p><strong>${T(E(`extractedRegion`))}:</strong> ${T(e.rawPayload.region)}</p>`:``,e.rawPayload?.project_number?`<p><strong>${T(E(`projectNumber`))}:</strong> ${T(e.rawPayload.project_number)}</p>`:``,I(e)?`<p><strong>${T(E(`tenderState`))}:</strong> ${T(Is(pr(e)))}</p>`:``].join(``);return ze({opp:e,saved:t,deadline:n,requirements:r,matchReasons:i.length?i.map(ul):[],risks:a.length?a.map($):[E(`noMajorRisks`)],safetyReasons:[...Array.isArray(e.safetyReasons)?e.safetyReasons:[],...a.length?a.map($):[E(`noMajorRisks`)]].map(Ps),nextSteps:o.map(dl),matchBadgeClass:Xa(e.matchLabel),matchLabel:il(e.matchLabel),qualityBadgeHtml:As(e),safetyBadgeHtml:js(e),extractedBadgeHtml:Fs(e),qualityWarningHtml:Ls(e),buyerSummary:cl(`buyer`,e.buyer),location:sl(e),value:e.estimatedValue?Y(e.estimatedValue):E(`notListed`),sourceUrl:e.url,extractedDetails:s,qualityLabel:rl(ks(e)),safetyStatusLine:e.safetyStatus?`<p><strong>${T(D.language===`is`?`Öryggisflokkun`:`Safety status`)}:</strong> ${T(Ms(e.safetyStatus))} · ${T(Ns(e.alertEligible))}</p>`:``,category:cl(`category`,e.category),type:cl(`type`,e.type),publishedDate:e.publishedDate,cpvCode:e.cpvCode,labels:{description:E(`description`),noDescription:E(`noDescription`),requirements:E(`requirements`),noSpecificRequirements:E(`noSpecificRequirements`),matchReasons:E(`matchReasons`),noMatchReasons:E(`noMatchReasons`),opportunityInfo:E(`opportunityInfo`),source:E(`source`),sourceValue:cl(`source`,e.source),quality:E(`quality`),category:E(`category`),type:E(`type`),deadline:E(`deadline`),deadlineLabel:$(n.label),published:E(`published`),cpv:E(`cpv`),risksToCheck:E(`risksToCheck`),recommendedNextSteps:E(`recommendedNextSteps`),openSourceAndConfirm:E(`openSourceAndConfirm`),removeFromSaved:E(`removeFromSaved`),saveOpportunity:E(`saveOpportunity`),openSource:E(`openSource`),markNotRelevant:E(`markNotRelevant`)},escapeHtml:T})}function zs(){if(!D.user)return z();if(!D.isAdmin)return Zr();let e=Zo(),t=D.adminCompanies.find(e=>e.id===D.selectedAdminCompanyId);return Z(`
    <section class="page-head">
      <p class="eyebrow">Admin</p>
      <h1>Operations dashboard</h1>
      <p>Admin tools for monitoring imports, reviewing customers, managing sources and handling manual entries.</p>
    </section>

    ${D.adminMessage?`
      <div class="admin-message ${D.adminMessage.type===`error`?`is-error`:`is-success`}">
        ${T(D.adminMessage.text)}
      </div>
    `:``}

    ${D.opportunityLoadError?`
      <div class="note-panel">
        ${T(D.opportunityLoadError)}
      </div>
    `:``}

    ${Bs()}
    ${Vs(e)}
    ${t?lc(t):``}
  `)}function Bs(){return`
    <div class="admin-tabs" role="tablist" aria-label="Admin sections">
      ${[[`overview`,`Overview`],[`companies`,`Companies`],[`review`,`Review Queue`],[`sources`,`Sources/imports`],[`opportunities`,`Opportunities`],[`reports`,`Reports`]].map(([e,t])=>`
        <button type="button" class="${D.adminActiveTab===e?`is-active`:``}" data-action="admin-tab" data-tab="${e}">
          ${T(t)}
        </button>
      `).join(``)}
    </div>
  `}function Vs(e){return D.adminActiveTab===`companies`?ac():D.adminActiveTab===`review`?Us():D.adminActiveTab===`sources`?`
      ${Do()}
      ${ko()}
      ${Vo()}
      ${Ao()}
      ${Fo()}
    `:D.adminActiveTab===`opportunities`?cc(e):D.adminActiveTab===`reports`?Io():`
    ${Hs()}
    ${ve({escapeHtml:T,isRunning:!!D.adminDailyPipelineLoading,result:D.adminDailyPipelineResult||null})}
    ${De({escapeHtml:T,usageSummary:D.adminAiUsageSummary||null,lastResult:D.adminAutomaticAiReviewResult||null,isRunning:!!D.adminAutomaticAiReviewLoading,formatAiUsageCost:oe})}
    ${Do()}
    ${ac(!0)}
  `}function Hs(){let e=D.adminCompanies||[],t=D.opportunities||[],n=To(),r=e.filter(e=>e.profileStatus===`Complete`).length,i=Math.max(0,e.length-r);return`
    <section class="ops-card">
      <div class="card-header">
        <div>
          <h2>Admin overview</h2>
          <p>Customer, opportunity and automation health at a glance.</p>
        </div>
      </div>
      <div class="ops-metrics admin-overview-metrics">
        <div><span>Total companies</span><strong>${e.length}</strong></div>
        <div><span>Completed profiles</span><strong>${r}</strong></div>
        <div><span>Incomplete profiles</span><strong>${i}</strong></div>
        <div><span>Stored opportunities</span><strong>${t.length}</strong></div>
        <div><span>Confirmed tenders</span><strong>${t.filter(e=>P(e.qualityStatus,e)===`confirmed_tender`).length}</strong></div>
        <div><span>Early signals</span><strong>${t.filter(e=>P(e.qualityStatus,e)===`early_signal`).length}</strong></div>
        <div><span>Needs review</span><strong>${t.filter(e=>P(e.qualityStatus,e)===`needs_review`).length}</strong></div>
        <div><span>Latest import status</span><strong>${T(n?.status||`No runs`)}</strong></div>
      </div>
    </section>
  `}function Us(){let e=D.adminReviewMatches||[],t=Ws();return`
    <section class="ops-card">
      <div class="card-header">
        <div>
          <h2>${T(t.title)}</h2>
          <p>${D.adminReviewLoading?T(t.loading):T(t.count(e.length))}</p>
        </div>
        <button class="btn btn-ghost btn-small" type="button" data-action="refresh-admin-status">Refresh</button>
      </div>
      ${D.adminReviewError?`<div class="admin-message is-error">${T(D.adminReviewError)}</div>`:``}
      ${D.adminReviewLoading&&!e.length?`<div class="empty-card">${T(t.loading)}</div>`:e.length?`
        <div class="admin-review-list">
          ${e.map(ec).join(``)}
        </div>
      `:`<div class="empty-card">${T(t.empty)}</div>`}
    </section>
  `}function Ws(){return{title:`Review Queue`,loading:`Loading review queue...`,empty:`No uncertain matches need review.`,count:e=>`${e} uncertain match${e===1?``:`es`} need review.`,opportunity:`Opportunity`,company:`Company`,source:`Source`,buyer:`Buyer`,region:`Region`,deadline:`Deadline`,score:`Score`,safety:`Safety`,alert:`Alert`,safetyReasons:`Safety reasons`,matchReasons:`Match reasons`,aiReview:`AI review`,aiReviewButton:`AI review`,aiReviewing:`Reviewing...`,aiFit:`Fit`,aiConfidence:`Confidence`,aiSend:`Send to client`,aiSummary:`Suggested client summary`,aiNoReview:`No AI review saved yet.`,approve:`Approve`,approving:`Approving...`,reject:`Reject`,rejecting:`Rejecting...`,noSource:`No source URL`,hidden:`Hidden from reports`,notHidden:`Not hidden from reports`,sourceUrl:`Source URL`}}function Gs(e){let t=e?.source||e?.rawPayload?.source_name||``;return Ht(e?.buyer,t,e?.rawPayload||{})||`Unknown buyer`}function Ks(e){return Ut(e?.source||e?.rawPayload?.source_name||``)||e?.location||`Unknown`}function qs(e){let t=String(e?.deadlineAt||e?.rawPayload?.deadline_at||``).trim().match(/^(\d{4}-\d{2}-\d{2})[T\s](\d{2}):(\d{2})/);return t?`${t[1]} ${t[2]}:${t[3]}`:e?.deadline?kt(e.deadline):`Deadline not available in imported data — verify on source page.`}function Js(e){let t=String(e||``).toLowerCase();return{auto_approved:`Auto-approved`,needs_review:`Needs review`,hidden:`Hidden`}[t]||Nt(t.replace(/_/g,` `))}function Ys(e){return e?`Alert eligible`:`Not alert eligible`}function Xs(e){return e?`Review required`:`Review not required`}function Zs(e){let t=String(e||``).trim();return{"Strong match":`Strong match`,"Good match":`Good match`,"Possible match":`Possible match`,"Weak match":`Weak match`}[t]||t||`Possible match`}function Qs(e){return String(e||``).trim()}function $s(e){return String(e||``).trim()}function ec(e){let t=e.opportunity||{},n=D.adminReviewActions?.[e.id]||``,r=!!D.adminAiReviewActions?.[e.id],i=Ft(t.url),a=Ws(),o=e.safetyReasons.length?e.safetyReasons:[`Needs admin review`],s=e.matchReasons.length?e.matchReasons:[`Profile match`];return`
    <article class="admin-review-card">
      <div class="admin-review-card-top">
        <div class="admin-review-title-block">
          <span class="eyebrow">${T(a.opportunity)}</span>
          <h3>${T(t.title||`Untitled opportunity`)}</h3>
          <p>${T(a.company)}: <strong>${T(e.companyName)}</strong></p>
          <p>${T(a.source)}: <strong>${T(t.source||`Unknown source`)}</strong></p>
          ${i?`<p class="admin-source-url"><span>${T(a.sourceUrl)}:</span> ${T(i)}</p>`:``}
        </div>
        <div class="admin-review-source-action">
          ${i?`<a class="btn btn-secondary btn-small" href="${T(i)}" target="_blank" rel="noopener">Open source ↗</a>`:`<span class="admin-chip">${T(a.noSource)}</span>`}
        </div>
      </div>

      <div class="admin-review-meta-grid">
        ${rc(a.buyer,Gs(t))}
        ${rc(a.region,Ks(t))}
        ${rc(a.deadline,qs(t))}
        ${rc(a.score,`${Zs(e.matchLabel)} · ${Number(e.matchScore||0)}`)}
        ${rc(a.safety,Js(e.safetyStatus))}
        ${rc(a.alert,`${Ys(e.alertEligible)} · ${Xs(e.reviewRequired)}`)}
      </div>

      <div class="admin-review-reasons">
        <section class="admin-review-reason-box is-warning">
          <h4>${T(a.safetyReasons)}</h4>
          <ul>
            ${o.map(e=>`<li>${T(e)}</li>`).join(``)}
          </ul>
        </section>
        <section class="admin-review-reason-box">
          <h4>${T(a.matchReasons)}</h4>
          <ul>
            ${s.map(e=>`<li>${T(e)}</li>`).join(``)}
          </ul>
        </section>
      </div>

      ${tc(e,a)}

      <div class="admin-review-actions">
        <span class="admin-review-hidden-state">${T(t.rawPayload?.hidden_from_reports===!0?a.hidden:a.notHidden)}</span>
        <div class="admin-row-actions">
          <button class="btn btn-secondary btn-small" data-action="admin-ai-review-match" data-id="${T(e.id)}" data-force="${e.aiReview?`true`:`false`}" ${n||r?`disabled`:``}>${T(r?a.aiReviewing:e.aiReview?`Re-run AI review`:a.aiReviewButton)}</button>
          <button class="btn btn-ghost btn-small" data-action="admin-review-match" data-review-action="approve" data-id="${T(e.id)}" data-company-id="${T(e.companyId)}" ${n||r?`disabled`:``}>${T(n===`approve`?a.approving:a.approve)}</button>
          <button class="btn btn-ghost btn-small" data-action="admin-review-match" data-review-action="reject" data-id="${T(e.id)}" data-company-id="${T(e.companyId)}" ${n||r?`disabled`:``}>${T(n===`reject`?a.rejecting:a.reject)}</button>
        </div>
      </div>
    </article>
  `}function tc(e,t){let n=e.aiReview;return n?`
    <section class="admin-ai-review-box">
      <div class="admin-ai-review-header">
        <h4>${T(t.aiReview)}</h4>
        <span>${T(n.model||`model not listed`)} · ${n.updatedAt?T(S(n.updatedAt)):``}</span>
      </div>
      <div class="admin-ai-review-meta">
        <span><strong>${T(t.aiFit)}</strong>${T(nc(n.fit))}</span>
        <span><strong>${T(t.aiConfidence)}</strong>${Math.round(Number(n.confidence||0)*100)}%</span>
        <span><strong>${T(t.aiSend)}</strong>${n.sendToClient?`Yes`:`No`}</span>
      </div>
      <p>${T(n.reason||``)}</p>
      ${n.fitReasons.length?`<p><strong>Fit reasons:</strong> ${n.fitReasons.map(e=>`<span class="admin-chip">${T(e)}</span>`).join(` `)}</p>`:``}
      ${n.risksOrQuestions.length?`<p><strong>Risks/questions:</strong> ${n.risksOrQuestions.map(e=>`<span class="admin-chip">${T(e)}</span>`).join(` `)}</p>`:``}
      ${n.suggestedClientSummary?`<p><strong>${T(t.aiSummary)}:</strong> ${T(n.suggestedClientSummary)}</p>`:``}
    </section>
  `:`
      <section class="admin-ai-review-box is-empty">
        <div class="admin-ai-review-header">
          <h4>${T(t.aiReview)}</h4>
          <span>${T(t.aiNoReview)}</span>
        </div>
      </section>
    `}function nc(e){return{strong:`Strong`,possible:`Possible`,weak:`Weak`,no_fit:`No fit`}[String(e||``)]||`Weak`}function rc(e,t){return`
    <div class="admin-review-meta-item">
      <span>${T(e)}</span>
      <strong>${T(t||`—`)}</strong>
    </div>
  `}function ic(){let e=D.adminCompanyFilters;return(D.adminCompanies||[]).filter(t=>{let n=w(e.search);return!(n&&!w(`${t.companyName} ${t.contactEmail} ${t.industry}`).includes(n)||e.industry!==`all`&&t.industry!==e.industry||e.profileStatus!==`all`&&t.profileStatus!==e.profileStatus||e.plan!==`all`&&t.plan!==e.plan)})}function ac(e=!1){let t=e?(D.adminCompanies||[]).slice(0,5):ic();return`
    <section class="ops-card">
      <div class="card-header">
        <div>
          <h2>Companies / users</h2>
          <p>${D.adminCompaniesLoading?`Loading companies...`:`${t.length} shown from ${(D.adminCompanies||[]).length} total companies.`}</p>
        </div>
        ${e?``:`
          <label class="admin-inline-control">
            <span>Report mode</span>
            <select data-admin-report-mode>
              <option value="new_only" ${D.adminReportMode===`new_only`?`selected`:``}>New opportunities report</option>
              <option value="all_current" ${D.adminReportMode===`all_current`?`selected`:``}>Current active opportunities report</option>
            </select>
          </label>
        `}
      </div>
      ${D.adminCompaniesError?`<div class="admin-message is-error">${T(D.adminCompaniesError)}</div>`:``}
      ${e?``:oc()}
      ${D.adminCompaniesLoading&&!t.length?`<div class="empty-card">Loading companies...</div>`:t.length?`
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
              ${t.map(sc).join(``)}
            </tbody>
          </table>
        </div>
      `:`<div class="empty-card">No companies found.</div>`}
    </section>
  `}function oc(){let e=D.adminCompanies||[],t=Qo(e,e=>e.industry),n=Qo(e,e=>e.plan),r=D.adminCompanyFilters;return`
    <div class="admin-filters admin-company-filters">
      <input data-admin-company-filter="search" value="${T(r.search)}" placeholder="Search company or email..." />
      <select data-admin-company-filter="industry">
        <option value="all">All industries</option>
        ${t.map(e=>`<option value="${T(e)}" ${r.industry===e?`selected`:``}>${T(e)}</option>`).join(``)}
      </select>
      <select data-admin-company-filter="profileStatus">
        <option value="all">All profiles</option>
        ${[`Complete`,`Incomplete`].map(e=>`<option value="${e}" ${r.profileStatus===e?`selected`:``}>${e}</option>`).join(``)}
      </select>
      <select data-admin-company-filter="plan">
        <option value="all">All plans</option>
        ${n.map(e=>`<option value="${T(e)}" ${r.plan===e?`selected`:``}>${T(e)}</option>`).join(``)}
      </select>
    </div>
  `}function sc(e){let t=D.adminCompanyActions?.[e.id]||``,n=t===`refresh`,r=t===`report`,i=!!t;return`
    <tr>
      <td><strong>${T(e.companyName)}</strong><br><span>${T(e.contactEmail||`No email`)}</span></td>
      <td>${T(e.industry||`Unknown`)}</td>
      <td>${T(e.plan||`Demo`)}</td>
      <td><span class="status-pill ${e.profileStatus===`Complete`?`is-success`:`is-running`}">${T(e.profileStatus)}</span></td>
      <td>${T(S(e.createdAt))}</td>
      <td>${e.matchCount}</td>
      <td>${e.savedCount?e.savedCount:`Not tracked`}</td>
      <td>${e.latestReportDate?T(S(e.latestReportDate)):`No reports`}</td>
      <td>
        <div class="admin-row-actions">
          <button class="btn btn-secondary btn-small" type="button" data-action="view-admin-company" data-id="${T(e.id)}" ${i?`disabled`:``}>View details</button>
          <button class="btn btn-ghost btn-small" type="button" data-action="admin-refresh-company-matches" data-id="${T(e.id)}" ${i?`disabled`:``}>${n?`Refreshing...`:`Refresh matches`}</button>
          <button class="btn btn-ghost btn-small" type="button" data-action="admin-generate-company-report" data-id="${T(e.id)}" ${i?`disabled`:``}>${r?`Generating...`:`Generate report`}</button>
        </div>
      </td>
    </tr>
  `}function cc(e){let t={...fn(),...D.adminOpportunityDraft||{}};return`
    <section class="admin-list">
      <div class="card-header">
        <div>
          <h2>Existing opportunities</h2>
          <p>${(D.opportunities||[]).length} loaded ${D.opportunityLoadError?`from fallback data`:`from Supabase`}.</p>
        </div>
      </div>
      ${$o(e)}
      ${e.length?e.map(dc).join(``):`<div class="empty-card">No opportunities loaded.</div>`}
    </section>

    <form class="form-card admin-form" id="admin-opportunity-form">
      <div class="form-section">
        <h2>Add opportunity</h2>
        <div class="form-grid">
          <label>Title <input name="title" data-admin-opportunity-field="title" value="${T(t.title)}" required /></label>
          <label>Buyer <input name="buyer" data-admin-opportunity-field="buyer" value="${T(t.buyer)}" /></label>
          <label>Source name <input name="sourceName" data-admin-opportunity-field="sourceName" value="${T(t.sourceName)}" required /></label>
          <label>Category <input name="category" data-admin-opportunity-field="category" value="${T(t.category)}" /></label>
          <label>Type <input name="type" data-admin-opportunity-field="type" value="${T(t.type)}" /></label>
          <label>Deadline <input type="date" name="deadline" data-admin-opportunity-field="deadline" value="${T(t.deadline)}" /></label>
          <label>Published date <input type="date" name="published_date" data-admin-opportunity-field="published_date" value="${T(t.published_date)}" /></label>
          <label>Location <input name="location" data-admin-opportunity-field="location" value="${T(t.location)}" /></label>
          <label>Estimated value <input type="number" min="0" step="1" name="estimated_value" data-admin-opportunity-field="estimated_value" value="${T(t.estimated_value)}" /></label>
          <label>URL <input type="url" name="url" data-admin-opportunity-field="url" value="${T(t.url)}" /></label>
          <label>CPV code <input name="cpv_code" data-admin-opportunity-field="cpv_code" value="${T(t.cpv_code)}" /></label>
          <label>Difficulty <input name="difficulty" data-admin-opportunity-field="difficulty" value="${T(t.difficulty)}" /></label>
          <label>Status <input name="status" data-admin-opportunity-field="status" value="${T(t.status)}" /></label>
        </div>
        <label>Description <textarea name="description" data-admin-opportunity-field="description" rows="4">${T(t.description)}</textarea></label>
        <label>Requirements comma-separated <textarea name="requirements" data-admin-opportunity-field="requirements" rows="3">${T(t.requirements)}</textarea></label>
        <label>Keywords comma-separated <textarea name="keywords" data-admin-opportunity-field="keywords" rows="3">${T(t.keywords)}</textarea></label>
      </div>

      <div class="form-actions">
        <button class="btn btn-primary btn-large" type="submit" ${D.adminSubmitting?`disabled`:``}>
          ${D.adminSubmitting?`Saving...`:`Add opportunity`}
        </button>
      </div>
    </form>

    ${as()}
  `}function lc(e){let t=[e.minProjectValue?Y(e.minProjectValue):`No minimum`,e.maxProjectValue?Y(e.maxProjectValue):`No maximum`].join(` - `),n=Ft(e.website);return`
    <div class="modal-backdrop">
      <div class="modal admin-company-modal" role="dialog" aria-modal="true">
        <div class="modal-header">
          <div>
            <span class="status-pill ${e.profileStatus===`Complete`?`is-success`:`is-running`}">${T(e.profileStatus)}</span>
            <h2>${T(e.companyName)}</h2>
            <p>${T(e.contactEmail||`No contact email`)} · ${T(e.industry||`Unknown industry`)}</p>
          </div>
          <button type="button" class="icon-btn modal-close-btn" data-action="close-admin-company" aria-label="Close company details">×</button>
        </div>
        <div class="modal-body">
          <div class="admin-detail-grid">
            <section class="side-panel">
              <h3>Company basics</h3>
              <p><strong>Email:</strong> ${T(e.contactEmail||`Unknown`)}</p>
              <p><strong>Contact name:</strong> ${T(e.contactName||`Not listed`)}</p>
              <p><strong>Phone:</strong> ${T(e.phone||`Not listed`)}</p>
              <p><strong>Kennitala:</strong> ${T(e.kennitala||`Not listed`)}</p>
              <p><strong>Address:</strong> ${T(e.address||`Not listed`)}</p>
              <p><strong>Website:</strong> ${n?`<a href="${T(n)}" target="_blank" rel="noreferrer">${T(e.website)}</a>`:T(e.website||`Not listed`)}</p>
              <p><strong>Industry:</strong> ${T(e.industry||`Unknown`)}</p>
              <p><strong>Created:</strong> ${T(S(e.createdAt))}</p>

              <h3>Billing</h3>
              <p><strong>Selected plan:</strong> ${T(e.selectedPlan||e.plan||`Not selected`)}</p>
              <p><strong>Billing status:</strong> ${T(e.billingStatus||`Not set`)}</p>
              <p><strong>Billing email:</strong> ${T(e.billingEmail||e.contactEmail||`Not listed`)}</p>
              <p><strong>Trial started:</strong> ${e.trialStartedAt?T(S(e.trialStartedAt)):`Not set`}</p>
              <p><strong>Trial ends:</strong> ${e.trialEndsAt?T(S(e.trialEndsAt)):`Not set`}</p>

              <h3>Project preferences</h3>
              <p><strong>Project size:</strong> ${T(t)}</p>
              <p><strong>Unknown value:</strong> ${e.allowUnknownValue?`Allowed`:`Not preferred`}</p>
              <p><strong>Travel:</strong> ${e.willingToTravel?`Yes`:`No`}</p>
              <p><strong>National:</strong> ${e.nationalProjects?`Yes`:`No`}</p>
              <p><strong>Remote:</strong> ${e.remoteProjects?`Yes`:`No`}</p>
            </section>

            <section class="side-panel">
              <h3>Services</h3>
              ${uc(e.services,`No services saved.`)}
              <h3>Include keywords</h3>
              ${uc(e.includeKeywords,`No include keywords saved.`)}
              <h3>Exclude keywords</h3>
              ${uc(e.excludeKeywords,`No exclude keywords saved.`)}
            </section>

            <section class="side-panel">
              <h3>Locations and service areas</h3>
              <p><strong>Base:</strong> ${T(e.baseLocation||`Not set`)}</p>
              ${uc([...e.locations,...e.serviceAreas],`No locations saved.`)}
              <h3>Reports</h3>
              <p><strong>Frequency:</strong> ${T(e.reportFrequency)}</p>
              <p><strong>Day:</strong> ${T(e.reportDay)}</p>
              <p><strong>Deadline reminders:</strong> ${e.deadlineReminders?`On`:`Off`}</p>
            </section>

            ${be(e,{escapeHtml:T,formatDateTime:S,inviteEmail:Bn(e),actionState:D.adminCompanyAccessActions?.[e.id]||``})}

            <section class="side-panel">
              <h3>Latest matches</h3>
              ${Oe(e,{escapeHtml:T})}
              <h3>Latest reports</h3>
              ${e.latestReports.length?`
                <ul class="admin-detail-list">
                  ${e.latestReports.map(e=>`
                    <li>
                      <strong>${T(e.title||`Report`)}</strong>
                      <span>${T(S(e.created_at))}</span>
                    </li>
                  `).join(``)}
                </ul>
              `:`<p>No reports generated yet.</p>`}
            </section>

            ${ke(e,{escapeHtml:T,formatDateTime:S,actionState:D.adminCompanyAiReviewActions?.[e.id]?`running`:``,filter:D.adminCompanyAiReviewFilter,lastResult:D.adminCompanyAiReviewResults?.[e.id]||null,usageSummary:D.adminAiUsageSummary||null,formatAiUsageCost:oe})}
          </div>
        </div>
      </div>
    </div>
  `}function uc(e,t){let n=C(e);return n.length?`<div class="admin-tag-list">${n.map(e=>`<span>${T(e)}</span>`).join(``)}</div>`:`<p>${T(t)}</p>`}function dc(e){let t=D.adminUpdatingId===e.id,n=F(e),r=e.rawPayload?.hidden_from_reports===!0||[`hidden`,`noise`,`deleted`].includes(String(e.rawPayload?.admin_report_status||``).toLowerCase()),i=zc(e)?e.rawPayload?.duplicate_reason||`Duplicate of ${e.rawPayload?.canonical_opportunity_id||e.rawPayload?.duplicate_of||`canonical opportunity`}`:``,a=_r({title:e.title,description:e.description,content:`${e.category||``} ${e.source||``} ${Array.isArray(e.keywords)?e.keywords.join(` `):``}`,publishedDate:e.publishedDate,deadline:e.deadline,sourceName:e.source,sourceType:e.sourceType,connectorType:e.rawPayload?.connector_type}),o=e.rawPayload?.stale_reason||(a.isStale?a.reason:``),s=Ft(e.url||e.rawPayload?.source_url||``);return`
    <div class="admin-row">
      <div>
        <h3>${T(e.title)}</h3>
        <p><strong>Source:</strong> ${T(e.source||`Unknown source`)} · <strong>Buyer:</strong> ${T(Gs(e))} · <strong>Region:</strong> ${T(Ks(e))} · <strong>Status:</strong> ${T(e.status)}</p>
        <p><strong>Source URL:</strong> ${s?`<a href="${T(s)}" target="_blank" rel="noreferrer">${T(s)}</a>`:`Not listed`} · <strong>External ID:</strong> ${T(e.externalId||`Not listed`)}</p>
        <p>Quality: ${T(ks(e))} · Intent: ${T(Os(n))}${r?` · Hidden from reports`:``}${i?` · Duplicate: ${T(i)}`:``}${o?` · Stale / expired: ${T(o)}`:``}</p>
        <p>Debug: hidden_from_reports=${e.rawPayload?.hidden_from_reports===!0?`true`:`false`} · admin_report_status=${T(e.rawPayload?.admin_report_status||`none`)} · stale_status=${T(e.rawPayload?.stale_status||`none`)}</p>
        ${fc(e)}
      </div>
      <div class="admin-row-actions">
        <button class="btn btn-ghost btn-small" data-action="admin-report-override" data-override="confirmed_tender" data-id="${T(e.id)}" ${t?`disabled`:``}>Confirmed tender</button>
        <button class="btn btn-ghost btn-small" data-action="admin-report-override" data-override="early_opportunity" data-id="${T(e.id)}" ${t?`disabled`:``}>Early opportunity</button>
        <button class="btn btn-ghost btn-small" data-action="admin-report-override" data-override="include" data-id="${T(e.id)}" ${t?`disabled`:``}>Include in reports</button>
        <button class="btn btn-ghost btn-small" data-action="admin-report-override" data-override="noise" data-id="${T(e.id)}" ${t?`disabled`:``}>News/noise</button>
        <button class="btn btn-ghost btn-small" data-action="admin-report-override" data-override="hide" data-id="${T(e.id)}" ${t?`disabled`:``}>Hide from reports</button>
        <button
          class="btn btn-ghost btn-small"
          data-action="delete-opportunity"
          data-id="${T(e.id)}"
          ${D.adminDeletingId===e.id?`disabled`:``}
        >
          ${D.adminDeletingId===e.id?`Deleting...`:`Delete`}
        </button>
      </div>
    </div>
  `}function fc(e){let t=D.adminOpportunityFilters?.debugCompanyId||``;if(!t)return``;let n=(D.adminCompanies||[]).find(e=>e.id===t);if(!n)return`<div class="admin-debug-panel">Match debug: selected company not loaded.</div>`;let r=pa(n,e),i=gc(e,r),a=C(n.services).join(`, `)||`No services`,o=C(n.includeKeywords).join(`, `)||`No include keywords`,s=pc(n,e),c=mc(n,e),l=hc(n,e,r),u=classifyMatchSafety(n,r);return`
    <div class="admin-debug-panel">
      <p><strong>Match debug for ${T(n.companyName)}:</strong> score ${Number(r.matchScore||0)} · ${T(Zs(r.matchLabel))}</p>
      <p><strong>Services:</strong> ${T(a)}</p>
      <p><strong>Keywords:</strong> ${T(o)}</p>
      <p><strong>Matched terms:</strong> ${s.length?s.map(e=>`<span class="admin-chip">${T(e)}</span>`).join(` `):`None`}</p>
      <p><strong>Missing profile terms:</strong> ${c.length?c.map(e=>`<span class="admin-chip">${T(e)}</span>`).join(` `):`None`}</p>
      <p><strong>Score contribution:</strong> ${l.map(e=>`<span class="admin-chip">${T(e)}</span>`).join(` `)}</p>
      <p><strong>Matched terms/reasons:</strong> ${(r.matchReasons||[]).map(e=>`<span class="admin-chip">${T(Qs(e))}</span>`).join(` `)||`None`}</p>
      <p><strong>Risks:</strong> ${(r.risks||[]).map(e=>`<span class="admin-chip">${T($s(e))}</span>`).join(` `)||`None`}</p>
      <p><strong>Safety:</strong> <span class="admin-chip">${T(Js(u.safetyStatus))}</span> <span class="admin-chip">${T(Ys(u.alertEligible))}</span> ${(u.safetyReasons||[]).map(e=>`<span class="admin-chip">${T(e)}</span>`).join(` `)}</p>
      <p><strong>Excluded by:</strong> ${i.length?i.map(e=>`<span class="admin-chip">${T(e)}</span>`).join(` `):`<span class="admin-chip">Not excluded by local dashboard/report filters</span>`}</p>
    </div>
  `}function pc(e,t){let n=Ii(t);return Ki(At([...C(e.services).filter(e=>G(n,e)),...C(e.includeKeywords).filter(e=>G(n,e)),...qi(n),...Zi(e)?Ji(n):[]]))}function mc(e,t){let n=Ii(t);return Ki(At([...C(e.services),...C(e.includeKeywords)].filter(e=>e&&!G(n,e)))).slice(0,12)}function hc(e,t,n){let r=[],i=(n.matchReasons||[]).filter(e=>/^Mentions your service:/i.test(e)).length,a=(n.matchReasons||[]).filter(e=>/^Contains your keyword:/i.test(e)).length;fa(e,t)&&r.push(`+35 industry/category`),i&&r.push(`+${Math.min(35,i*10)} services`),a&&r.push(`+${Math.min(25,a*8)} keywords`);let o=aa(e,t);return o===`local_match`?r.push(`+22 local`):o===`national_match`?r.push(`+16 national`):o===`remote_match`?r.push(`+14 remote`):o===`outside_area_possible`?r.push(`+4 travel possible`):r.push(`-8 low-confidence location`),t.deadline&&x(t.deadline)>=0&&x(t.deadline)<=30&&r.push(`+8 closing soon`),(n.risks||[]).some(e=>/broad construction/i.test(e))&&r.push(`capped broad fit`),(n.risks||[]).some(e=>/winter|snow/i.test(e))&&r.push(`capped winter fit`),(n.risks||[]).some(e=>/indoor|finishing/i.test(e))&&r.push(`downgraded indoor mismatch`),r.length?r:[`No positive score contribution`]}function gc(e,t){let n=[];return Number(t.matchScore||0)<50&&n.push(`score_below_50 (${Number(t.matchScore||0)})`),Qc(e)||n.push(`customer_match_ineligible`),N(e)||n.push(`dashboard_not_visible`),ba(e)===`hidden`&&n.push(`safety_status_hidden`),Jc(D.adminCompanies?.find(e=>e.id===D.adminOpportunityFilters?.debugCompanyId)||{},e)&&n.push(`needs_review_wrong_type_for_company`),Yc(D.adminCompanies?.find(e=>e.id===D.adminOpportunityFilters?.debugCompanyId)||{},e)&&n.push(`design_consulting_or_supervision_only`),e.rawPayload?.hidden_from_reports===!0&&n.push(`hidden_from_reports`),zc(e)&&n.push(`duplicate_secondary`),gr(e)&&n.push(`stale_or_expired`),dr(e)&&n.push(`demo_or_test`),n}function _c(){if(!D.user)return z();if(!D.profile)return _o(E(`setupCompanyFirst`),E(`reportNeedsProfile`));let e=D.profile,t=Mc(e,Ac()),n=D.reports.find(e=>e.id===D.selectedReportId),r=D.reportArchiveLoading?E(`loadingSavedReports`):D.language===`is`?`${D.reports.length} vistuð yfirlit.`:`${D.reports.length} saved report${D.reports.length===1?``:`s`}.`,i=D.reportArchiveLoading?`<div class="empty-card">${T(E(`loadingSavedReports`))}</div>`:D.reportsLoadError?`<div class="admin-message is-error">Failed to load reports. ${T(D.reportsLoadError)}</div>`:D.reportsLoaded&&D.reports.length===0?`<div class="empty-card">${T(E(`noSavedReports`))}</div>`:D.reports.map(vc).join(``);return Z(`
    <section class="dashboard-head">
      <div>
        <p class="eyebrow">${T(E(`weeklyReport`))}</p>
        <h1>${T(E(`reportTitle`))}</h1>
        <p>${T(e.companyName||`Your company`)} · ${T(Q(t.periodStart,t.periodEnd))}</p>
        <p class="muted-copy">${T(D.language===`is`?`Sýnir öll núverandi viðeigandi tækifæri, ekki aðeins ný frá síðasta vistaða yfirliti.`:`Showing all current eligible matches, not only new items since the last saved report.`)}</p>
      </div>
      <div class="dashboard-actions">
        <button class="btn btn-primary" data-action="save-report" ${D.reportSaveLoading?`disabled`:``}>
          ${D.reportSaveLoading?T(E(`savingReport`)):T(E(`saveReport`))}
        </button>
        <button class="btn btn-secondary" data-action="download-report-pdf">${T(E(`downloadPdf`))}</button>
        <button class="btn btn-secondary" data-action="copy-report">${T(E(`copyReport`))}</button>
      </div>
    </section>

    ${D.reportMessage?`
      <div class="admin-message ${D.reportMessage.type===`error`?`is-error`:`is-success`}">
        ${T(D.reportMessage.text)}
      </div>
    `:``}

    ${bc(t,{id:`report-preview`,contactEmail:e.contactEmail,companyName:e.companyName})}

    <section class="report-archive">
      <div class="card-header">
        <div>
          <p class="eyebrow">${T(E(`reportArchive`))}</p>
          <h2>${T(E(`savedReports`))}</h2>
          <p>${r}</p>
        </div>
      </div>
      ${i}
    </section>

    ${n?xc(n,e):``}
  `)}function vc(e){let t=Array.isArray(e.report_items)?e.report_items.length:Number(e.itemCount||0),n=D.profile?.companyName||e.companies?.company_name||`Company`,r=D.language===`is`?Nc(e.created_at):kt(e.created_at),i=D.language===`is`?`${t} tækifæri`:`${t} item${t===1?``:`s`}`;return $e({report:e,title:Tc(e,n),created:r,itemLabel:i,statusLabel:yc(e.status),hideLabel:D.language===`is`?`Fela yfirlit`:`Hide report`,viewLabel:E(`viewReport`),escapeHtml:T})}function yc(e){let t=String(e||`draft`);return D.language===`is`?{generated_all_current:`Heildaryfirlit`,generated_new_only:`Ný tækifæri`,draft:`Vistað yfirlit`}[t]||t:{generated_all_current:`All current`,generated_new_only:`New opportunities`,draft:`Saved report`}[t]||t}function bc(e,t={}){return et({report:e,options:t,companyName:t.companyName||D.profile?.companyName||`Company`,dateRange:Q(e.periodStart,e.periodEnd),generatedByLabel:E(`generatedBy`),reportTitleLabel:E(`reportTitle`),closeLabel:E(`closeReport`),escapeHtml:T})}function xc(e,t,n={}){let r=e.period_start||e.created_at?.slice(0,10)||new Date().toISOString().slice(0,10),i=e.period_end||e.created_at?.slice(0,10)||new Date().toISOString().slice(0,10),a=t.companyName||e.companies?.company_name||`Company`,o=Ec(e),s=o.length?Dc(o):Sc(e),c=o.length?ml(e,a,o):wc(e.text_content||``);return bc({title:Tc(e,a),periodStart:r,periodEnd:i,htmlContent:s,textContent:c},{companyName:a,closeButton:n.closeButton===void 0?!0:n.closeButton,includeTextArea:n.includeTextArea===void 0?!1:n.includeTextArea,id:n.id||``})}function Sc(e){if(e.html_content&&e.html_content.includes(`report-cover`))return Cc(kc(e.html_content));let t=e.period_start||e.created_at?.slice(0,10)||new Date().toISOString().slice(0,10),n=e.period_end||e.created_at?.slice(0,10)||new Date().toISOString().slice(0,10),r=e.html_content?Cc(kc(e.html_content)):`<pre>${T(e.text_content||`Ekkert efni var vistað fyrir þetta yfirlit.`)}</pre>`;return`
    <div class="report-cover">
      <div class="report-kicker">Útbúið af VerkRadar</div>
      <p class="eyebrow">Vistað yfirlit</p>
      <h2>${T(e.title||`Vistað yfirlit`)}</h2>
      <p>${T(Q(t,n))}</p>
      <p>${T(e.summary||`Þetta eldra vistaða yfirlit er birt í nýju skýrslusniði.`)}</p>
    </div>
    <div class="report-legacy-content">
      ${r}
    </div>
  `}function Cc(e){return st(e,D.language)}function wc(e){return st(e,D.language)}function Tc(e,t){return E(`reportForCompany`,{company:String(t||e?.companies?.company_name||`Company`).trim()})}function Ec(e){return(Array.isArray(e?.report_items)?[...e.report_items]:[]).sort((e,t)=>Number(e.sort_order||0)-Number(t.sort_order||0)).map(e=>{if(!e.opportunities)return null;let t=rr(e.opportunities);return{...t,matchScore:Number(e.match_score||0),matchLabel:ha(Number(e.match_score||0)),matchReasons:kr(t,Array.isArray(e.match_reasons)?e.match_reasons:[]),risks:Array.isArray(e.risks)&&e.risks.length?e.risks:Array.isArray(t.rawPayload?.risks)?t.rawPayload.risks:[],nextSteps:[]}}).filter(Boolean)}function Dc(e){let t=Oc(e);return`
    ${t.confirmed.length?el(b(`openActiveTitle`,D.language),b(`openActiveDescription`,D.language),t.confirmed):``}
    ${t.possible.length?el(b(`possibleTitle`,D.language),b(`possibleDescription`,D.language),t.possible):``}
    ${t.early.length?el(b(`earlyTitle`,D.language),b(`earlyDescription`,D.language),t.early):``}
    <p class="report-footer-note">${T(E(`reportFooter`))}</p>
  `}function Oc(e){let t={confirmed:[],possible:[],early:[],review:[]};return e.forEach(e=>{let n=Fc(e);n===`confirmed`?t.confirmed.push(e):n===`possible`?t.possible.push(e):n===`early`?t.early.push(e):n!==`excluded`&&t.review.push(e)}),t}function kc(e){let t=new DOMParser().parseFromString(String(e||``),`text/html`),n=new Set([`A`,`ARTICLE`,`DIV`,`EM`,`H2`,`H3`,`H4`,`H5`,`LI`,`OL`,`P`,`PRE`,`SECTION`,`SPAN`,`STRONG`,`UL`]),r=new Set([`aria-hidden`,`class`,`href`,`rel`,`target`]);return t.body.querySelectorAll(`*`).forEach(e=>{if(!n.has(e.tagName)){e.replaceWith(...Array.from(e.childNodes));return}Array.from(e.attributes).forEach(t=>{if(!r.has(t.name)){e.removeAttribute(t.name);return}if(t.name===`href`){let n=Ft(t.value);n?e.setAttribute(`href`,n):e.removeAttribute(`href`)}})}),t.body.innerHTML}function Ac(e=`all_current`,t=new Set){return jc({mode:e,previouslyReportedIds:t})}function jc({mode:e=`all_current`,previouslyReportedIds:t=new Set}={}){let n=ga().filter(e=>e.matchScore>=50).filter(e=>Ic(e,`all_current`));return Ot(e===`new_only`?n.filter(e=>!t.has(e.id)):n).slice(0,8)}function Mc(e,t){let n=new Date,r=n.toISOString().slice(0,10),i=new Date(n);i.setDate(i.getDate()-7);let a=i.toISOString().slice(0,10),o=E(`reportForCompany`,{company:e.companyName}),s=Pc(t),c=s.confirmed.length+s.possible.length+s.early.length,l=D.language===`is`?`${c} viðeigandi útboðs- eða verðfyrirspurnaratriði fundust fyrir ${e.companyName}.`:`${c} relevant tender/quote-request ${c===1?`item`:`items`} found for ${e.companyName}.`;return{title:o,periodStart:a,periodEnd:r,summary:l,textContent:pl(e,t),htmlContent:`
    <div class="report-cover">
      <div class="report-kicker">${T(E(`generatedBy`))}</div>
      <p class="eyebrow">${T(E(`reportTitle`))}</p>
      <h2>${T(o)}</h2>
      <p>${T(Q(a,r))}</p>
      <p>${T(l)} ${t[0]?T(D.language===`is`?`Sterkasta sýnilega atriðið er ${t[0].title}.`:`The strongest visible item is ${t[0].title}.`):T(D.language===`is`?`Engin skýr útboð eða verðfyrirspurnir fundust fyrir þetta tímabil.`:`No strict report-ready tenders or quote requests were found for this period.`)}</p>
    </div>

    <div class="report-summary-grid">
      ${$c(b(`openActiveTitle`,D.language),s.confirmed.length)}
      ${$c(b(`possibleTitle`,D.language),s.possible.length)}
    </div>

    ${el(b(`openActiveTitle`,D.language),b(`openActiveDescription`,D.language),s.confirmed)}
    ${s.possible.length?el(b(`possibleTitle`,D.language),b(`possibleDescription`,D.language),s.possible):``}
    ${s.early.length?el(b(`earlyTitle`,D.language),b(`earlyDescription`,D.language),s.early):``}

    <p class="report-footer-note">${T(E(`reportFooter`))}</p>
  `}}function Q(e,t){return`${Nc(e)} – ${Nc(t)}`}function Nc(e){if(!e)return`Engin dagsetning`;let t=new Date(`${String(e).slice(0,10)}T00:00:00`);return Number.isNaN(t.getTime())?String(e):D.language===`en`?new Intl.DateTimeFormat(`en-GB`,{year:`numeric`,month:`short`,day:`2-digit`}).format(t):`${t.getDate()}. ${[`janúar`,`febrúar`,`mars`,`apríl`,`maí`,`júní`,`júlí`,`ágúst`,`september`,`október`,`nóvember`,`desember`][t.getMonth()]} ${t.getFullYear()}`}function Pc(e){let t={confirmed:[],possible:[],early:[]},n=new Set,r=Ot(e);(r.length?r:Bc(e)).forEach(e=>{let r=Fc(e);r!==`excluded`&&(n.has(e.id)||(n.add(e.id),r===`confirmed`?t.confirmed.push(e):r===`possible`?t.possible.push(e):r===`early`&&t.early.push(e)))});let i=8;for(let e of[`confirmed`,`possible`,`early`]){let n=t[e].slice(0,i);t[e]=n,i=Math.max(0,i-n.length)}return t}function Fc(e){let t=Et(e);if(t!==`excluded`||e?.aiReviewFit||e?.ai_review_fit)return t;if(!Lc(e))return`excluded`;if(Dt(e))return`confirmed`;let n=F(e);if(n===`confirmed_tender`)return`confirmed`;if(n===`early_opportunity`)return`early`;let r=P(e.qualityStatus,e);return r===`confirmed_tender`?`confirmed`:r===`early_signal`?`early`:`excluded`}function Ic(e,t=`all_current`){return Lc(e)?t===`new_only`?ba(e)===`auto_approved`&&e.alertEligible!==!1:ba(e)!==`hidden`:!1}function Lc(e){if(!e||dr(e)||ba(e)===`hidden`||!N(e)||Rc(e)||Hc(e)||Kc(e)||qc(e)||Tr(e.title||``)&&!Uc(e))return!1;let t=F(e);if(t===`confirmed_tender`)return Uc(e)||Gc(e);if(t===`early_opportunity`)return Wc(e);let n=P(e.qualityStatus,e);return n===`confirmed_tender`?Uc(e)||Gc(e):n===`early_signal`?Wc(e):!1}function Rc(e){let t=e?.rawPayload||{},n=String(t.admin_report_status||``).toLowerCase();if(n===`include`)return!1;if(t.hidden_from_reports===!0||[`hidden`,`hide`,`noise`,`deleted`].includes(n)||zc(e)||gr(e))return!0;let r=F(e);return r===`news_context`||r===`not_opportunity`}function zc(e={}){let t=e.rawPayload||{},n=String(t.canonical_opportunity_id||``);return t.is_duplicate===!0||!!t.duplicate_of||!!n&&!!e.id&&n!==String(e.id)}function Bc(e){return[...e].sort((e,t)=>Vc(e)-Vc(t)||Number(Gc(t))-Number(Gc(e))||Number(Uc(t))-Number(Uc(e))||t.matchScore-e.matchScore||x(e.deadline)-x(t.deadline))}function Vc(e){if(Hc(e))return 99;let t=F(e);return t===`confirmed_tender`?0:t===`early_opportunity`?1:10}function Hc(e){let t=I(e)?pr(e):String(e?.rawPayload?.tender_state||``).toLowerCase();return[`tender_awarded`,`awarded`,`already_tendered`].includes(t)?!0:R(L(e),[`lægstbjóðandi`,`laegstbjodandi`,`samningur gerður`,`samningur gerdur`,`samningur var`,`samið var`,`samid var`,`útboð hefur farið fram`,`utbod hefur farid fram`,`útboð var auglýst`,`utbod var auglyst`])}function Uc(e){return R(L(e),[`útboð`,`utbod`,`útboðsauglýsing`,`utbodsauglysing`,`tilboð`,`tilbod`,`tilboðum`,`tilbodum`,`óskað eftir tilboðum`,`oskad eftir tilbodum`,`verðfyrirspurn`,`verdfyrirspurn`,`forval`,`skilafrestur`,`útboðsgögn`,`utbodsgogn`,`quote request`,`request for quote`,`tender`,`procurement`])}function Wc(e){return R(L(e),[`senn í útboð`,`senn i utbod`,`áætlað útboð`,`aaetlad utbod`,`áætlað er að bjóða út`,`aaetlad er ad bjoda ut`,`fyrirhugað útboð`,`fyrirhugad utbod`])}function Gc(e){let t=w(e?.source||``);return[`rikiskaup`,`ríkiskaup`,`utbodsvefur`,`útboðsvefur`,`ted`,`tenders electronic daily`,`procurement`,`tender portal`].some(e=>t.includes(w(e)))}function Kc(e){return Yc(D.profile||{},e)}function qc(e){return Jc(D.profile||{},e)}function Jc(e,t){return ba(t)!==`needs_review`||!Zc([...Array.isArray(t?.safetyReasons)?t.safetyReasons:[],...Array.isArray(t?.risks)?t.risks:[],...Array.isArray(t?.rawPayload?.safety_reasons)?t.rawPayload.safety_reasons:[],...Array.isArray(t?.rawPayload?.risks)?t.rawPayload.risks:[]].filter(Boolean).join(` `))?!1:!Xc(e)}function Yc(e,t){let n=L(t),r=R(n,[`for og verkhönnun`,`for og verkhonnun`,`verkhönnun`,`verkhonnun`,`forhönnun`,`forhonnun`,`verkfræðiráðgjöf`,`verkfraediradgjof`,`ráðgjöf`,`radgjof`,`umsjón`,`umsjon`,`verkefnastjórn`,`verkefnastjorn`,`útboðsgögn hönnun`,`utbodsgogn honnun`]),i=R(n,[`hönnun`,`honnun`]),a=R(n,[`lóðarframkvæmdir`,`lodarframkvaemdir`,`gatnagerð`,`gatnagerd`,`stígagerð`,`stigagerd`,`lagnir`,`regnvatnslagnir`,`jarðvinna`,`jardvinna`,`jarðvegsskipti`,`jardvegsskipti`,`fyllingar`,`grjóthleðsla`,`grjothledsla`,`malbikun`,`hellulögn`,`hellulogn`,`kantsteinar`,`landmótun`,`landmotun`,`yfirborðsfrágangur`,`yfirbordsfragangur`,`bílastæði`,`bilastaedi`]),o=R(n,[`eftirlit`,`umsjón`,`umsjon`,`verkefnastjórn`,`verkefnastjorn`])&&!a;return!r&&!(i&&!a)&&!o?!1:!Xc(e)}function Xc(e={}){return R([e.industry,...Array.isArray(e.services)?e.services:[],...Array.isArray(e.includeKeywords)?e.includeKeywords:[]].filter(Boolean).join(` `),[`hönnun`,`honnun`,`ráðgjöf`,`radgjof`,`verkfræðiráðgjöf`,`verkfraediradgjof`,`verkfræði`,`verkfraedi`,`eftirlit`,`verkefnastjórnun`,`verkefnastjornun`,`útboðsgögn`,`utbodsgogn`,`engineering`,`design`,`consulting`,`project management`,`supervision`])}function Zc(e){return R(String(e||``),[`hönnun`,`honnun`,`ráðgjöf`,`radgjof`,`verkfræðiráðgjöf`,`verkfraediradgjof`,`eftirlit`,`umsjón`,`umsjon`,`verkefnastjórn`,`verkefnastjorn`,`design`,`consulting`,`supervision`,`inspection`,`project management`])}function Qc(e){if(!e)return!1;let t=e.rawPayload||{};if(String(t.admin_report_status||``).toLowerCase()===`include`)return!0;if(Rc(e))return!1;let n=String(t.tender_state||``).toLowerCase();return!([`tender_awarded`,`awarded`,`already_tendered`].includes(n)||gr(e)||Tr(e.title||``)&&!hr(L(e)))}function $c(e,t){return tt({label:e,value:t,escapeHtml:T})}function el(e,t,n){return nt({title:e,description:t,opportunities:n,emptyText:D.language===`is`?`Engin atriði í þessum hluta.`:`No items in this section.`,renderOpportunityItem:tl,escapeHtml:T})}function tl(e){let t=!!e.estimatedValue,n={...e,matchReasons:mt(e.matchReasons,D.language)},r=fl(e).map(e=>ht(e,D.language)).filter(Boolean),i=e.deadline?Nc(e.deadline):E(`notFound`);return rt({opp:n,valueText:t?Y(e.estimatedValue):E(`notListed`),deadlineText:i,sourceUrl:Ft(e.url),risks:r,fallbackReason:D.language===`is`?`Passar við fyrirtækjaprófílinn.`:`Matches your company profile.`,qualityBadgeHtml:nl(n),matchBadgeClass:Xa(e.matchLabel),matchLabel:dt(e,D.language),statusText:ut(D.language),buyerLabel:E(`buyer`),buyerValue:ol(e),sourceLabel:E(`source`),sourceValue:al(`source`,e.source),areaLabel:E(`area`),areaValue:sl(e),deadlineLabel:E(`deadline`),valueLabel:E(`estimatedValue`),whyLabel:E(`whyThisMatters`),risksLabel:E(`risksToCheck`),openSourceLabel:E(`openSource`),sourceMissingLabel:E(`sourceLinkMissing`),formatReason:ul,formatRisk:$,escapeHtml:T})}function nl(e){return it({status:`verify`,label:pt(e,D.language),escapeHtml:T})}function rl(e){return Lt(e,E)}function il(e){return Rt(e,E)}function al(e,t){return zt(e,t,E)}function ol(e){let t=e?.source||e?.rawPayload?.source_name||``;return al(`buyer`,Ht(e?.buyer,t,e?.rawPayload||{}))}function sl(e){return Ut(e?.source||e?.rawPayload?.source_name||``)||al(`location`,e?.location)}function cl(e,t){return Gt(e,t,{language:D.language,translate:E})}function ll(e){return Wt(e,D.language,E)}function ul(e){return mt([Kt(e,{language:D.language,translate:E})],D.language)[0]||``}function $(e){return ht(qt(e,D.language),D.language)}function dl(e){return Jt(e,D.language)}function fl(e){let t=Array.isArray(e.risks)&&e.risks.length?[...e.risks]:[`Open the source page and confirm mandatory requirements.`];return e.deadline||t.unshift(Ga(e)),e.estimatedValue||t.push(`Estimated value is not listed in the imported data.`),P(e.qualityStatus,e)===`needs_review`&&t.push(I(e)?`Extracted project signal — verify tender timing in the source article.`:`Imported from broad feed — verify that this is a real tender or business opportunity.`),[...new Set(t.map(e=>String(e||``).trim()).filter(Boolean))]}function pl(e,t){let n=Pc(t),r=[...n.confirmed,...n.possible,...n.early];return`${E(`reportForCompany`,{company:e.companyName})}
${D.language===`is`?`Tímabil`:`Date range`}: ${Q(new Date(Date.now()-10080*60*1e3).toISOString().slice(0,10),new Date().toISOString().slice(0,10))}

${D.language===`is`?`Samantekt`:`Summary`}:
- ${b(`openActiveTitle`,D.language)}: ${n.confirmed.length}
- ${b(`possibleTitle`,D.language)}: ${n.possible.length}
- ${b(`earlyTitle`,D.language)}: ${n.early.length}

${r.length?r.map((e,t)=>`${t+1}. ${e.title}
${D.language===`is`?`Staða`:`Status`}: ${ft(e,D.language)}
${E(`buyer`)}: ${ol(e)}
${E(`source`)}: ${al(`source`,e.source)}
${E(`area`)}: ${sl(e)}
${E(`deadline`)}: ${Wa(e)}
${E(`estimatedValue`)}: ${e.estimatedValue?Y(e.estimatedValue):E(`notListed`)}
${E(`whyThisMatters`)}:
${mt(e.matchReasons.length?e.matchReasons:[`Matched to your company profile.`],D.language).map(e=>`- ${e}`).join(`
`)}
${E(`risksToCheck`)}:
${fl(e).map(e=>`- ${ht($(e),D.language)}`).join(`
`)}
${D.language===`is`?`Næsta skref`:`Next step`}:
${e.url?`${E(`openSource`)}: ${e.url}`:D.language===`is`?`Finnið og staðfestið upprunalega heimild áður en brugðist er við.`:`Find and verify the original source page before acting.`}
`).join(`
`):D.language===`is`?`Engin skýr útboð eða verðfyrirspurnir fundust fyrir þetta tímabil.`:`No report-ready matches were found for this period.`}

VerkRadar`}function ml(e,t,n){let r=e.period_start||e.created_at?.slice(0,10)||new Date().toISOString().slice(0,10),i=e.period_end||e.created_at?.slice(0,10)||new Date().toISOString().slice(0,10),a=Tc(e,t),o=Oc(n),s=[...o.confirmed,...o.possible,...o.early,...o.review];return`${a}
${D.language===`is`?`Tímabil`:`Date range`}: ${Q(r,i)}

${s.length?s.map((e,t)=>`${t+1}. ${e.title}
${D.language===`is`?`Staða`:`Status`}: ${ft(e,D.language)}
${E(`buyer`)}: ${ol(e)}
${E(`source`)}: ${al(`source`,e.source)}
${E(`area`)}: ${sl(e)}
${E(`deadline`)}: ${Wa(e)}
${E(`estimatedValue`)}: ${e.estimatedValue?Y(e.estimatedValue):E(`notListed`)}
${E(`whyThisMatters`)}:
${mt(e.matchReasons.length?e.matchReasons:[`Matched to your company profile.`],D.language).map(e=>`- ${e}`).join(`
`)}
${E(`risksToCheck`)}:
${fl(e).map(e=>`- ${ht($(e),D.language)}`).join(`
`)}
${e.url?`${E(`openSource`)}: ${e.url}`:``}
`).join(`
`):D.language===`is`?`Engin atriði eru vistuð í þessu yfirliti.`:`No items are saved in this report.`}

${E(`reportFooter`)}`}async function hl(){let e=pl(D.profile||tn(),Ac());try{await navigator.clipboard.writeText(e),V(`Report copied`,`success`)}catch(e){console.error(`Failed to copy report:`,e),V(`Could not copy report`,`error`)}}function gl(e=`report-preview`,t=``){let n=document.getElementById(e);if(!n){V(`No report available to export`,`error`);return}let r=D.profile||tn(),i=n.cloneNode(!0);i.classList.add(`pdf-compact-report`),i.querySelectorAll(`textarea, .report-close-btn`).forEach(e=>e.remove());let a=i.querySelector(`.report-meta-bar`);if(a){let e=a.querySelector(`div:first-child strong`)?.textContent?.trim()||E(`reportForCompany`,{company:t||r.companyName||`Company`}),n=a.querySelector(`div:last-child span`)?.textContent?.trim()||t||r.companyName||`Company`,i=a.querySelector(`div:last-child strong`)?.textContent?.trim()||``,o=document.querySelector(`.brand-logo`)?.src||document.querySelector(`link[rel="icon"]`)?.href||``;a.innerHTML=``;let s=document.createElement(`div`);s.className=`pdf-report-header-text`;let c=document.createElement(`span`);c.textContent=E(`generatedBy`);let l=document.createElement(`strong`);l.textContent=e||E(`reportForCompany`,{company:n});let u=document.createElement(`em`);if(u.textContent=i,s.append(c,l,u),a.appendChild(s),o){let e=document.createElement(`img`);e.className=`pdf-report-logo`,e.src=o,e.alt=`VerkRadar`,a.appendChild(e)}}let o=i.querySelector(`.report-summary-grid`);o&&o.remove();let s=n.querySelector(`.report-meta-bar div:last-child strong`)?.textContent||new Date().toISOString().slice(0,10),c=vl(t||r.companyName||`company`,s),l=Array.from(document.querySelectorAll(`link[rel="stylesheet"]`)).map(e=>`<link rel="stylesheet" href="${T(e.href)}">`).join(``),u=window.open(``,`_blank`,`width=1100,height=900`);if(!u){V(`Allow popups to download the report PDF`,`error`);return}u.document.open(),u.document.write(`<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${T(c)}</title>
  ${l}
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
    ${i.outerHTML}
  </main>
  <script>
    window.addEventListener("load", () => {
      document.title = ${JSON.stringify(c)};
      setTimeout(() => {
        window.focus();
        window.print();
      }, 250);
    });
  <\/script>
</body>
</html>`),u.document.close()}function _l(){gl(`admin-report-preview`,(D.selectedAdminReport?.id===D.selectedAdminReportId?D.selectedAdminReport:(D.adminReports||[]).find(e=>e.id===D.selectedAdminReportId))?.companies?.company_name||`Company`)}function vl(e,t){return`VerkRadar-report-${yl(e)||`company`}-${yl(String(t||``).replace(/\s+to\s+/i,`-`))||new Date().toISOString().slice(0,10)}.pdf`}function yl(e){return String(e||``).normalize(`NFD`).replace(/[\u0300-\u036f]/g,``).replace(/[^a-z0-9]+/gi,`-`).replace(/^-+|-+$/g,``).toLowerCase()}function bl(){return Z(Ue({t:E,escapeHtml:T,trialHref:`/signup`}))}function xl(){return D.user?D.profileLoading&&!D.profile&&!D.profileDraft?Z(`
      <section class="empty-state">
        <div class="loader-mark" aria-label="${T(D.language===`is`?`Hleð fyrirtækjaprófíl`:`Loading company profile`)}"></div>
        <h1>${T(D.language===`is`?`Hleð fyrirtækjaprófíl...`:`Loading company profile...`)}</h1>
        <p>${T(D.language===`is`?`Sæki vistaðan fyrirtækjaprófíl.`:`Checking your saved company profile.`)}</p>
        <button class="btn btn-secondary" type="button" data-action="retry-settings-profile">${T(D.language===`is`?`Reyna aftur`:`Retry`)}</button>
      </section>
    `):D.profileLoadError&&!D.profile&&!D.profileDraft?Z(`
      <section class="empty-state">
        <h1>${T(D.language===`is`?`Gat ekki hlaðið stillingum`:`Could not load Settings`)}</h1>
        <p>${T(D.profileLoadError)}</p>
        <button class="btn btn-primary" type="button" data-action="retry-settings-profile">${T(D.language===`is`?`Reyna aftur`:`Retry`)}</button>
      </section>
    `):!D.profile&&!D.profileDraft?_o(E(`setupCompanyFirst`),D.language===`is`?`Stillingar eru tiltækar eftir að fyrirtækið hefur verið sett upp.`:`Settings are available after you set up your company.`):Z(at({t:E,escapeHtml:T,language:D.language,profileDraftDirty:D.profileDraftDirty,profileLoadError:D.profileLoadError,showDemoReset:Sl(),profileFormHtml:ds()})):z()}function Sl(){return!!(D.isAdmin||[`localhost`,`127.0.0.1`,``].includes(window.location.hostname))}oi(),A();