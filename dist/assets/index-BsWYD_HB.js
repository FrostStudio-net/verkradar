(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={profile:`verkradar_profile`,saved:`verkradar_saved_opportunities`,ignored:`verkradar_ignored_opportunities`,language:`verkradar_language`,selectedPlan:`verkradar_selected_plan`},t={is:{navDashboard:`Mælaborð`,navReport:`Yfirlit`,navPricing:`Verðskrá`,navSettings:`Stillingar`,navHowItWorks:`Hvernig virkar þetta`,navSampleReport:`Sýnishorn`,login:`Innskráning`,logout:`Skrá út`,getStarted:`Byrja`,setupCompany:`Setja upp fyrirtæki`,createProfile:`Stofna prófíl`,companyProfile:`Fyrirtækjaprófíll`,noCompanyProfile:`Ekkert fyrirtæki`,openMenu:`Opna valmynd`,closeMenu:`Loka valmynd`,privacyPolicy:`Persónuvernd`,termsOfService:`Skilmálar`,dataSources:`Gagnaheimildir`,cookies:`Vafrakökur`,security:`Öryggi`,contact:`Hafa samband`,footerText:`Vöktun útboða og viðskiptatækifæra fyrir fyrirtæki. VerkRadar hjálpar ykkur að finna og yfirfara opinber tækifæri, en frumgögn eru alltaf endanleg heimild.`,loadingLabel:`Hleð VerkRadar`,heroEyebrow:`Útboðsgreind fyrir verktaka og þjónustufyrirtæki`,heroTitle:`Finnið verðmæt útboð áður en skilafresturinn rennur út.`,heroText:`VerkRadar vaktar opinberar heimildir og skilar stuttu yfirliti yfir verkefni sem passa við ykkar verkflokka og svæði.`,createFreeDemoProfile:`Fá ókeypis prufu-yfirlit`,viewSampleReport:`Skoða sýnishorn`,proofStrong:`Fyrir verktaka, iðnfyrirtæki og þjónustuaðila.`,proofText:`Vöktun á opinberum heimildum, sveitarfélögum og útboðsvefjum - sett fram sem forgangsraðað yfirlit.`,bestOpenMatch:`Stutt yfirlit`,tender:`Útboð`,deadlineRisk:`Rennur út fljótlega`,daysLeft:`{count} dagar eftir`,problemEyebrow:`Vandinn`,problemTitle:`Útboð tapast oft áður en tilboðsgerðin byrjar.`,problemOneTitle:`Útboð birtast á mörgum mismunandi stöðum.`,problemOneText:`Sveitarfélög, stofnanir og útboðsvefir birta tækifæri á ólíkum síðum og í ólíkum sniðum.`,problemTwoTitle:`Skilafrestir geta verið stuttir.`,problemTwoText:`Það tekur tíma að finna hvað passar við ykkar verkflokka, svæði og stærð verkefna.`,targetEyebrow:`Fyrir hverja?`,targetTitle:`Byggt fyrir íslensk fyrirtæki sem þurfa að finna rétt verkefni fyrr.`,targetText:`VerkRadar hentar fyrirtækjum sem vilja vakta útboð, verðfyrirspurnir og verkefnavísbendingar án þess að opna sömu vefi handvirkt á hverjum degi.`,solutionEyebrow:`Lausnin`,solutionTitle:`Eitt skýrt yfirlit í stað dreifðrar leitar.`,solutionText:`VerkRadar breytir útboðshávaða í forgangsraðaðan lista yfir tækifæri sem fyrirtækið ætti að skoða.`,createProfileStep:`1. Stofnið prófíl`,createProfileStepText:`Segið VerkRadar hvaða þjónustu, svæði, lykilorð og verkefnastærðir henta ykkur.`,matchProjectsStep:`2. Samsvara verkefnum`,matchProjectsStepText:`Kerfið metur hvert tækifæri gagnvart fyrirtækjaprófílnum.`,getReportStep:`3. Fáið yfirlit`,getReportStepText:`Fáið skýrt yfirlit með frestum, ástæðum samsvörunar og næstu skrefum.`,sampleReportEyebrow:`Sýnishorn`,sampleReportTitle:`Stuttlisti sem sýnir hvað er þess virði að skoða.`,sampleReportText:`Sýnishornið sýnir hvernig VerkRadar raðar útboðum og verkefnum eftir þjónustu, svæði, fresti og ástæðum samsvörunar.`,sourceDisclaimer:`VerkRadar hjálpar til við að forgangsraða tækifærum. Upprunaleg útboðsgögn eru alltaf endanleg heimild.`,pricingEyebrow:`VERÐSKRÁ`,pricingHeadline:`Verðskrá sem hentar öllum stærðum`,pricingSubtitle:`Byrjið með skýru yfirliti og bætið við sjálfvirkni eftir þörfum.`,pricingStarter:`Grunnur`,pricingGrowth:`Vöxtur`,pricingPro:`Sérsniðið`,pricingMonth:`/mán.`,pricingBadge:`Hentar flestum fyrirtækjum`,pricingCta:`Fá prufuaðgang`,pricingTrialNoCard:`Engin greiðslukort krafist í prufu.`,pricingWeeklyReport:`Vikulegt yfirlit`,pricingFiveMatches:`Allt að 5 samsvaranir á viku`,pricingBasicMatching:`Grunnsamsvörun`,pricingDeadlineReminders:`Áminningar um skilafresti`,pricingOneProfile:`1 fyrirtækjaprófíll`,pricingEverythingStarter:`Allt í Grunni`,pricingMoreSources:`Fleiri heimildir`,pricingSummaries:`Stutt samantekt á tækifærum`,pricingLabels:`Sterk/góð/möguleg samsvörun`,pricingSaved:`Vistuð tækifæri`,pricingArchive:`Yfirlitssafn`,pricingEverythingGrowth:`Allt í Vexti`,pricingDocumentSummaries:`Samantektir útboðsgagna`,pricingRequirements:`Gátlisti fyrir kröfur`,pricingRiskWarnings:`Áhættuvísbendingar`,pricingBidChecklist:`Gátlisti fyrir tilboðsgerð`,pricingPrioritySupport:`Forgangsþjónusta`,tryDemoTitle:`Prófið sýnimælaborðið.`,tryDemoText:`Hlaðið sýnifyrirtæki og sjáið hvernig samsvörunin virkar.`,loadDemoCompany:`Hlaða sýnifyrirtæki`,authLoginTitle:`Skrá inn í VerkRadar`,authLoginSubtitle:`Fáið aðgang að mælaborði, vistuðum tækifærum og vikuyfirlitum.`,email:`Netfang`,password:`Lykilorð`,forgotPassword:`Gleymt lykilorð?`,loggingIn:`Skrái inn...`,newToVerkRadar:`Ný hjá VerkRadar?`,createAccount:`Stofna aðgang`,createAccountTitle:`Stofna VerkRadar aðgang`,createAccountSubtitle:`Byrjið á að stofna aðgang. Síðan stofnið þið fyrirtækjaprófíl.`,authRequiredTitle:`Skráðu þig inn til að halda áfram`,authRequiredText:`Þessi síða er aðgengileg eftir innskráningu.`,alreadyLoggedInTitle:`Þú ert þegar skráð(ur) inn`,alreadyLoggedInText:`Beini þér á næsta skref.`,signupCreatedConfirm:`Aðgangur stofnaður. Athugaðu tölvupóstinn þinn til að staðfesta aðganginn.`,signupExistingAccount:`Þetta netfang er þegar með aðgang. Skráðu þig inn eða endurstilltu lykilorð.`,signupNeutralNextSteps:`Ef aðgangur er til fyrir þetta netfang færðu tölvupóst með næstu skrefum. Annars hefur nýr aðgangur verið stofnaður.`,emailOrPasswordIncorrect:`Netfang eða lykilorð er rangt.`,confirmEmailBeforeLogin:`Staðfestu netfangið þitt áður en þú skráir þig inn.`,passwordTooShort:`Lykilorð þarf að vera að minnsta kosti 6 stafir.`,tooManyAttempts:`Of margar tilraunir. Bíddu aðeins og reyndu aftur.`,couldNotCreateAccount:`Gat ekki stofnað aðgang. Athugaðu netfang og lykilorð.`,couldNotLogin:`Gat ekki skráð þig inn. Reyndu aftur.`,creating:`Stofna...`,alreadyHaveAccount:`Ertu þegar með aðgang?`,passwordReset:`Endurstilla lykilorð`,resetPasswordTitle:`Endurstilla lykilorð`,resetPasswordSubtitle:`Sláið inn netfang og VerkRadar sendir öruggan hlekk ef aðgangur er til.`,sending:`Sendi...`,sendResetLink:`Senda hlekk`,rememberedPassword:`Manstu lykilorðið?`,backToLogin:`Til baka í innskráningu`,newPassword:`Nýtt lykilorð`,chooseNewPassword:`Veldu nýtt lykilorð`,resetPasswordHelp:`Settu nýtt lykilorð fyrir VerkRadar aðganginn. Ef hlekkurinn er útrunninn skaltu biðja um nýjan.`,confirmNewPassword:`Staðfesta nýtt lykilorð`,updating:`Uppfæri...`,updatePassword:`Uppfæra lykilorð`,needNewLink:`Þarftu nýjan hlekk?`,sendAnotherResetLink:`Senda annan hlekk`,onboarding:`UPPSETNING`,onboardingTitle:`Settu upp fyrirtækið`,onboardingText:`Segðu okkur hvað fyrirtækið gerir svo VerkRadar geti fundið viðeigandi tækifæri.`,companyBasics:`1. Grunnupplýsingar`,companyName:`Fyrirtækisnafn`,kennitala:`Kennitala`,contactEmail:`Tengiliðanetfang`,billingEmail:`Netfang fyrir reikninga`,contactName:`Nafn tengiliðar`,phone:`Sími`,address:`Heimilisfang`,website:`Vefsíða`,industry:`Atvinnugrein`,selectIndustry:`Veldu atvinnugrein`,selectedPlan:`Valin áskrift`,plan_basic:`Grunnur`,plan_pro:`Pro`,plan_priority:`Forgangur`,servicesAndKeywords:`2. Þjónustur og leitarorð`,servicesHint:`Bætið við þjónustu sem þið bjóðið raunverulega upp á. Veldu mikilvægustu atriðin fyrst.`,servicesLabel:`Þjónustur`,servicesHelper:`Skráið þjónustuna sem fyrirtækið selur. Nákvæmari þjónusta gefur betri samsvaranir.`,extraWords:`Leitarorð`,includeKeywordsHelper:`Notið orð sem birtast oft í tækifærum sem þið viljið fá.`,excludeWords:`Orð sem ættu að lækka eða fjarlægja slæmar samsvaranir.`,excludeKeywordsHelper:`Orð sem ættu að lækka eða fjarlægja slæmar samsvaranir.`,suggestedServicesFor:`Tillögur að þjónustu fyrir {industry}`,suggestedKeywordsFor:`Tillögur að leitarorðum fyrir {industry}`,selectIndustryForServices:`Veljið atvinnugrein til að sjá þjónustutillögur`,selectIndustryForKeywords:`Veljið atvinnugrein til að sjá leitarorðatillögur`,locationsTitle:`3. Svæði`,locationsHint:`Notið Allt landið fyrir landsdekkandi útboð. Notið ferðastillingar ef þið getið boðið utan heimasvæðis fyrir rétt verkefni.`,baseLocation:`Heimasvæði`,baseLocationPlaceholder:`Dæmi: Austurland`,serviceAreas:`Þjónustusvæði, aðskilin með kommu`,serviceAreasPlaceholder:`Dæmi: Austurland, Allt landið`,travelScope:`Ferðir og umfang`,willingToTravel:`Tilbúin að ferðast fyrir rétt verkefni`,includeNational:`Sýna landsdekkandi tækifæri`,includeRemote:`Sýna fjarvinnu / netverkefni`,minimumTravelValue:`Lágmarksverðmæti fyrir ferðalög`,projectSize:`4. Stillingar`,minimumValue:`Lágmarksverðmæti`,maximumValue:`Hámarksverðmæti`,showUnknownValue:`Sýna tækifæri þó verðmæti vanti`,reportPreferences:`Yfirlitsstillingar`,frequency:`Tíðni`,weekly:`Vikulega`,daily:`Daglega`,reportDay:`Dagur yfirlits`,deadlineReminders:`Áminningar um skilafresti`,includeLowConfidence:`Sýna óvissar samsvaranir`,saveProfile:`Vista prófíl`,saving:`Vista...`,saved:`Vistað`,dashboard:`Mælaborð`,welcomeCompany:`Velkomin, {company}`,dashboardIntro:`Forgangsraðaðar tækifærasamsvaranir út frá þjónustu, svæðum og leitarorðum. {refresh}`,matchesLastRefreshed:`Síðast uppfært {time}.`,matchesAutoRefresh:`Samsvaranir uppfærast sjálfkrafa eftir vistun prófíls.`,refreshMatches:`Uppfæra samsvaranir`,refreshing:`Uppfæri...`,viewWeeklyReport:`Skoða yfirlit`,strongMatches:`Sterkar samsvaranir`,closingSoon:`Rennur út fljótlega`,savedLabel:`Vistað`,totalPotentialValue:`Áætlað heildarverðmæti`,searchOpportunities:`Leita í tækifærum...`,savedOnly:`Aðeins vistað`,improveProfile:`Bæta prófíl`,includeNationalOpportunities:`Sýna landsdekkandi tækifæri`,showAllStoredMatches:`Sýna allar samsvaranir`,inspectAllOpportunities:`Skoða öll tækifæri`,details:`Nánar`,save:`Vista`,ignore:`Hunsa`,originalLanguage:`Upprunalegt tungumál`,extractedProject:`Útdregið verkefni`,reportTitle:`Útboðs- og verkefnayfirlit`,setupCompanyFirst:`Settu fyrst upp fyrirtækið`,reportNeedsProfile:`Yfirlitið þarf fyrirtækjaprófíl til að geta fundið viðeigandi tækifæri.`,dashboardNeedsProfile:`Mælaborðið þarf fyrirtækjaprófíl til að reikna viðeigandi samsvaranir.`,weeklyReport:`Yfirlit`,saveReport:`Vista yfirlit`,savingReport:`Vista...`,downloadPdf:`Sækja PDF`,copyReport:`Afrita yfirlit`,reportArchive:`Yfirlitssafn`,savedReports:`Vistuð yfirlit`,loadingSavedReports:`Hleð vistuð yfirlit...`,noSavedReports:`Engin vistuð yfirlit enn.`,viewReport:`Skoða yfirlit`,closeReport:`Loka yfirliti`,generatedBy:`Útbúið af VerkRadar`,reportForCompany:`Útboðs- og verkefnayfirlit fyrir {company}`,openTenders:`Opin útboð / verðfyrirspurnir`,upcomingOpportunities:`Möguleg væntanleg tækifæri`,openTendersDescription:`Skýr útboðs- eða verðfyrirspurnarmerki. Yfirfarið frumgögn áður en brugðist er við.`,upcomingDescription:`Væntanleg útboðs- eða verkefnamerki með skýrum vísbendingum.`,reportFooter:`VerkRadar hjálpar til við að forgangsraða yfirferð opinberra tækifæra. Staðfestið alltaf útboðsgögn, skilafresti, kröfur og hæfi á upprunalegri heimild áður en brugðist er við.`,buyer:`Kaupandi`,source:`Heimild`,description:`Lýsing`,requirements:`Kröfur`,noSpecificRequirements:`Engar sérstakar kröfur skráðar.`,noDescription:`Engin lýsing tiltæk.`,noMatchReasons:`Engar ástæður samsvörunar tiltækar.`,matchReasons:`Ástæður samsvörunar`,opportunityInfo:`Upplýsingar um tækifæri`,extraction:`Útdráttur`,sourceArticle:`Heimildargrein`,parentArticle:`Upprunagrein`,openSourceArticle:`Opna heimildargrein`,extractedRegion:`Útdregið svæði`,projectNumber:`Verknúmer`,tenderState:`Staða útboðs`,quality:`Gæði`,category:`Flokkur`,type:`Tegund`,published:`Birt`,cpv:`CPV`,recommendedNextSteps:`Ráðlögð næstu skref`,noMajorRisks:`Engar stórar áhættur greindar í þessum gögnum.`,openSourceAndConfirm:`Opnið upprunalega heimild og staðfestið hæfi.`,removeFromSaved:`Fjarlægja úr vistuðum`,saveOpportunity:`Vista tækifæri`,markNotRelevant:`Merkja sem ekki viðeigandi`,publicProcurement:`Opinbert útboð`,area:`Svæði`,deadline:`Skilafrestur`,estimatedValue:`Áætlað verðmæti`,notFound:`Fannst ekki`,notListed:`Ekki gefið upp`,unknownBuyer:`Óþekktur kaupandi`,allIceland:`Allt landið`,whyThisMatters:`Af hverju þetta gæti skipt máli`,risksToCheck:`Atriði til að staðfesta`,openSource:`Opna heimild`,sourceLinkMissing:`Heimildartengil vantar`,strongMatch:`Sterk samsvörun`,goodMatch:`Góð samsvörun`,possibleMatch:`Möguleg samsvörun`,weakMatch:`Veik samsvörun`,confirmedTender:`Staðfest útboð`,likelyOpportunity:`Líklegt tækifæri`,earlySignal:`Væntanlegt tækifæri`,needsReview:`Þarfnast staðfestingar`,tenderAwarded:`Útboði lokið / samið`,tenderAlreadyAnnounced:`Útboð þegar auglýst`,upcomingTender:`Væntanlegt útboð`,projectSignal:`Verkefnavísbending`,nationalOpportunity:`Landsdekkandi tækifæri`,localMatch:`Staðbundin samsvörun`,mentionsService:`Nefnir þjónustu ykkar: {value}`,containsKeyword:`Inniheldur leitarorð: {value}`,procurement:`innkaup`},en:{navDashboard:`Dashboard`,navReport:`Report`,navPricing:`Pricing`,navSettings:`Settings`,navHowItWorks:`How it works`,navSampleReport:`Sample report`,login:`Login`,logout:`Logout`,getStarted:`Get started`,setupCompany:`Set up company`,createProfile:`Create profile`,companyProfile:`Company profile`,noCompanyProfile:`No company`,openMenu:`Open menu`,closeMenu:`Close menu`,privacyPolicy:`Privacy`,termsOfService:`Terms`,dataSources:`Data sources`,cookies:`Cookies`,security:`Security`,contact:`Contact`,footerText:`Tender and opportunity monitoring for businesses. VerkRadar helps you find and review public opportunities, but source documents remain the authority.`,loadingLabel:`Loading VerkRadar`,heroEyebrow:`Tender intelligence for working contractors`,heroTitle:`Stop losing valuable jobs to tabs you never opened.`,heroText:`VerkRadar monitors public sources and returns a short project shortlist matched to your trades and service areas.`,createFreeDemoProfile:`Get a free trial report`,viewSampleReport:`View sample report`,proofStrong:`Contractors find relevant opportunities faster.`,proofText:`Top matches often include tenders outside the main databases.`,bestOpenMatch:`Shortlist`,tender:`Tender`,deadlineRisk:`Deadline risk`,daysLeft:`{count} days left`,problemEyebrow:`The problem`,problemTitle:`Opportunities are often lost before bidding starts.`,problemOneTitle:`Deadlines show up after your crew is already booked.`,problemOneText:`A short response window becomes a scramble, or a valuable contract never gets priced.`,problemTwoTitle:`The search takes longer than the go/no-go call.`,problemTwoText:`Owners spend hours opening low-fit tenders instead of seeing value, location, requirements and match reasons in one view.`,targetEyebrow:`Who it is for`,targetTitle:`Built for Icelandic companies that need to find the right jobs earlier.`,targetText:`VerkRadar is for teams that want to monitor tenders, quote requests and project signals without checking the same websites manually every day.`,solutionEyebrow:`The solution`,solutionTitle:`One clear report instead of scattered searching.`,solutionText:`VerkRadar turns tender noise into a ranked list of opportunities your business should actually check.`,createProfileStep:`1. Create profile`,createProfileStepText:`Tell VerkRadar your services, locations, keywords and project size.`,matchProjectsStep:`2. Match projects`,matchProjectsStepText:`The system scores each opportunity against your business profile.`,getReportStep:`3. Get report`,getReportStepText:`Receive a clear weekly report with deadlines and next steps.`,sampleReportEyebrow:`Sample report`,sampleReportTitle:`A shortlist that shows what is worth checking.`,sampleReportText:`Preview how VerkRadar ranks tenders and projects by services, region, deadline and match reasons.`,sourceDisclaimer:`VerkRadar helps prioritize opportunity review. Original tender documents are always the final authority.`,pricingEyebrow:`PRICING`,pricingHeadline:`Pricing built for teams of all sizes`,pricingSubtitle:`Start with a clear report and add automation as needed.`,pricingStarter:`Starter`,pricingGrowth:`Growth`,pricingPro:`Custom`,pricingMonth:`/month`,pricingBadge:`Best for most businesses`,pricingCta:`Get trial access`,pricingTrialNoCard:`No credit card required for the trial.`,pricingWeeklyReport:`Weekly report`,pricingFiveMatches:`Up to 5 matched opportunities/week`,pricingBasicMatching:`Basic matching`,pricingDeadlineReminders:`Deadline reminders`,pricingOneProfile:`1 company profile`,pricingEverythingStarter:`Everything in Starter`,pricingMoreSources:`More sources`,pricingSummaries:`Opportunity summaries`,pricingLabels:`Strong/Good/Possible match labels`,pricingSaved:`Saved opportunities`,pricingArchive:`Report archive`,pricingEverythingGrowth:`Everything in Growth`,pricingDocumentSummaries:`Tender document summaries`,pricingRequirements:`Requirements checklist`,pricingRiskWarnings:`Risk warnings`,pricingBidChecklist:`Bid preparation checklist`,pricingPrioritySupport:`Priority support`,tryDemoTitle:`Try the demo dashboard now.`,tryDemoText:`Load a sample company profile and see how the matching works.`,loadDemoCompany:`Load demo company`,authLoginTitle:`Login to VerkRadar`,authLoginSubtitle:`Access your company dashboard, saved opportunities and weekly reports.`,email:`Email`,password:`Password`,forgotPassword:`Forgot password?`,loggingIn:`Logging in...`,newToVerkRadar:`New to VerkRadar?`,createAccount:`Create account`,createAccountTitle:`Create your VerkRadar account`,createAccountSubtitle:`Start by creating an account. Then you’ll create your company profile.`,authRequiredTitle:`Log in to continue`,authRequiredText:`This page is available after you sign in.`,alreadyLoggedInTitle:`Already logged in`,alreadyLoggedInText:`Redirecting you to the next step.`,signupCreatedConfirm:`Account created. Check your email to confirm your account.`,signupExistingAccount:`This email already has an account. Log in or reset your password.`,signupNeutralNextSteps:`If an account exists for this email, you’ll receive an email with next steps. Otherwise, a new account has been created.`,emailOrPasswordIncorrect:`Email or password is incorrect.`,confirmEmailBeforeLogin:`Please confirm your email before logging in.`,passwordTooShort:`Password must be at least 6 characters.`,tooManyAttempts:`Too many attempts. Please wait a moment and try again.`,couldNotCreateAccount:`Could not create account. Please check your email and password.`,couldNotLogin:`Could not log in. Please try again.`,creating:`Creating...`,alreadyHaveAccount:`Already have an account?`,passwordReset:`Password reset`,resetPasswordTitle:`Reset your password`,resetPasswordSubtitle:`Enter your email and VerkRadar will send a secure reset link if the account exists.`,sending:`Sending...`,sendResetLink:`Send reset link`,rememberedPassword:`Remembered your password?`,backToLogin:`Back to login`,newPassword:`New password`,chooseNewPassword:`Choose a new password`,resetPasswordHelp:`Set a new password for your VerkRadar account. If the link has expired, request a new reset link.`,confirmNewPassword:`Confirm new password`,updating:`Updating...`,updatePassword:`Update password`,needNewLink:`Need a new link?`,sendAnotherResetLink:`Send another reset link`,onboarding:`SETUP`,onboardingTitle:`Set up your company`,onboardingText:`Tell us what your company does so VerkRadar can find relevant opportunities.`,companyBasics:`1. Basic information`,companyName:`Company name`,kennitala:`Kennitala`,contactEmail:`Contact email`,billingEmail:`Billing email`,contactName:`Contact name`,phone:`Phone`,address:`Address`,website:`Website`,industry:`Industry`,selectIndustry:`Select industry`,selectedPlan:`Selected plan`,plan_basic:`Basic`,plan_pro:`Pro`,plan_priority:`Priority`,servicesAndKeywords:`2. Services and keywords`,servicesHint:`Add services you actually provide. Start with the most important ones.`,servicesLabel:`Services`,servicesHelper:`Add the services your company actually sells. More specific services create better matches.`,extraWords:`Keywords`,includeKeywordsHelper:`Use words that often appear in opportunities you want.`,excludeWords:`Words that should lower or remove bad matches.`,excludeKeywordsHelper:`Words that should lower or remove bad matches.`,suggestedServicesFor:`Suggested services for {industry}`,suggestedKeywordsFor:`Suggested keywords for {industry}`,selectIndustryForServices:`Select an industry to see service suggestions`,selectIndustryForKeywords:`Select an industry to see keyword suggestions`,locationsTitle:`3. Locations`,locationsHint:`Use All Iceland for national tenders. Use travel settings when you can bid outside your base area for the right project size.`,baseLocation:`Base location`,baseLocationPlaceholder:`Example: East Iceland`,serviceAreas:`Service areas, comma separated`,serviceAreasPlaceholder:`Example: East Iceland, All Iceland`,travelScope:`Travel and scope`,willingToTravel:`Willing to travel for the right project`,includeNational:`Include national / All Iceland opportunities`,includeRemote:`Include remote / online opportunities`,minimumTravelValue:`Minimum project value for travel`,projectSize:`4. Settings`,minimumValue:`Minimum value`,maximumValue:`Maximum value`,showUnknownValue:`Show opportunities even if value is unknown`,reportPreferences:`Report preferences`,frequency:`Frequency`,weekly:`Weekly`,daily:`Daily`,reportDay:`Report day`,deadlineReminders:`Deadline reminders`,includeLowConfidence:`Include low-confidence matches`,saveProfile:`Save profile`,saving:`Saving...`,saved:`Saved`,dashboard:`Dashboard`,welcomeCompany:`Welcome, {company}`,dashboardIntro:`Ranked project opportunities based on your services, locations and keywords. {refresh}`,matchesLastRefreshed:`Last refreshed {time}.`,matchesAutoRefresh:`Matches refresh automatically after profile saves.`,refreshMatches:`Refresh matches`,refreshing:`Refreshing...`,viewWeeklyReport:`View report`,strongMatches:`Strong matches`,closingSoon:`Closing soon`,savedLabel:`Saved`,totalPotentialValue:`Total potential value`,searchOpportunities:`Search opportunities...`,savedOnly:`Saved only`,improveProfile:`Improve profile`,includeNationalOpportunities:`Include national opportunities`,showAllStoredMatches:`Show all matches`,inspectAllOpportunities:`Inspect all opportunities`,details:`Details`,save:`Save`,ignore:`Ignore`,originalLanguage:`Original language`,extractedProject:`Extracted project`,reportTitle:`Tender and opportunity report`,setupCompanyFirst:`Set up your company first`,reportNeedsProfile:`The report needs a company profile before it can generate relevant opportunity matches.`,dashboardNeedsProfile:`The dashboard needs a company profile so it can calculate relevant opportunity matches.`,weeklyReport:`Report`,saveReport:`Save report`,savingReport:`Saving...`,downloadPdf:`Download PDF`,copyReport:`Copy report`,reportArchive:`Report archive`,savedReports:`Saved reports`,loadingSavedReports:`Loading saved reports...`,noSavedReports:`No saved reports yet.`,viewReport:`View report`,closeReport:`Close report`,generatedBy:`Generated by VerkRadar`,reportForCompany:`Tender and opportunity report for {company}`,openTenders:`Open tenders / quote requests`,upcomingOpportunities:`Possible upcoming opportunities`,openTendersDescription:`Clear procurement intent. Review source documents before acting.`,upcomingDescription:`Upcoming procurement or project signals with clear evidence.`,reportFooter:`VerkRadar helps prioritise public opportunity review. Always check the original source documents, deadlines, requirements and eligibility before acting.`,buyer:`Buyer`,source:`Source`,description:`Description`,requirements:`Requirements`,noSpecificRequirements:`No specific requirements listed.`,noDescription:`No description available.`,noMatchReasons:`No match reasons available.`,matchReasons:`Match reasons`,opportunityInfo:`Opportunity info`,extraction:`Extraction`,sourceArticle:`Source article`,parentArticle:`Parent article`,openSourceArticle:`Open source article`,extractedRegion:`Extracted region`,projectNumber:`Project number`,tenderState:`Tender state`,quality:`Quality`,category:`Category`,type:`Type`,published:`Published`,cpv:`CPV`,recommendedNextSteps:`Recommended next steps`,noMajorRisks:`No major risks detected in this data.`,openSourceAndConfirm:`Open the source notice and confirm eligibility.`,removeFromSaved:`Remove from saved`,saveOpportunity:`Save opportunity`,markNotRelevant:`Mark not relevant`,publicProcurement:`Public procurement`,area:`Location`,deadline:`Deadline`,estimatedValue:`Estimated value`,notFound:`Not found`,notListed:`Not listed`,unknownBuyer:`Unknown buyer`,allIceland:`All Iceland`,whyThisMatters:`Why this matters`,risksToCheck:`Risks / things to check`,openSource:`Open source`,sourceLinkMissing:`Source link missing`,strongMatch:`Strong match`,goodMatch:`Good match`,possibleMatch:`Possible match`,weakMatch:`Weak match`,confirmedTender:`Confirmed tender`,likelyOpportunity:`Likely opportunity`,earlySignal:`Early signal`,needsReview:`Needs review`,tenderAwarded:`Tender awarded`,tenderAlreadyAnnounced:`Tender already announced`,upcomingTender:`Upcoming tender`,projectSignal:`Project signal`,nationalOpportunity:`National opportunity`,localMatch:`Local match`,mentionsService:`Mentions your service: {value}`,containsKeyword:`Contains your keyword: {value}`,procurement:`procurement`}};function n(e){let t=localStorage.getItem(e.language);return t===`en`||t===`is`?t:`is`}function r(e,n,r={}){let i=t[e||`is`]||t.is,a=t.en[n]||t.is[n]||n;return String(i[n]||a).replace(/\{(\w+)\}/g,(e,t)=>r[t]??``)}var i={services:{Electrical:[`raflagnir`,`rafvirki`,`brunakerfi`,`öryggiskerfi`,`lýsing`,`viðhald`,`þjónusta`,`hleðslustöðvar`,`töflusmíði`,`rafmagnseftirlit`],"IT / Web / Software":[`vefsíðugerð`,`vefhönnun`,`hugbúnaðarþróun`,`kerfisþróun`,`vefverslun`,`aðgengi`,`CMS`,`gagnagrunnar`,`viðhald`,`ráðgjöf`],Cleaning:[`Office cleaning`,`School cleaning`,`Facility cleaning`,`Window cleaning`,`Deep cleaning`,`Floor care`,`Municipal cleaning`,`Regular cleaning contracts`],Transport:[`Passenger transport`,`Goods transport`,`Healthcare transport`,`School transport`,`Shuttle services`,`Delivery services`,`Framework transport services`],Construction:[`jarðvinna`,`gatnagerð`,`vegagerð`,`malbikun`,`brúargerð`,`lagnavinna`,`framkvæmdir`,`viðhald`,`steypa`,`húsbyggingar`,`þakvinna`]},includeKeywords:{Electrical:[`rafmagn`,`rafvirki`,`brunakerfi`,`hleðslustöð`,`öryggiskerfi`,`myndavélakerfi`,`lýsing`,`viðhald`,`lagnir`,`neyðarlýsing`]}},a={companyName:`RafFix ehf.`,contactEmail:`owner@raffix.is`,website:`https://raffix.is`,industry:`Electrical`,services:[`electrical installation`,`maintenance`,`fire alarm systems`,`EV chargers`],includeKeywords:[`charging`,`inspection`,`public buildings`],excludeKeywords:[`telecom`,`snow removal`],locations:[`Reykjavík`,`Capital Area`,`Suðurnes`,`Remote / Online`],minProjectValue:5e5,maxProjectValue:3e7,allowUnknownValue:!0,reportFrequency:`weekly`,reportDay:`monday`,deadlineReminders:!0,includeLowConfidence:!1,autoAlertMode:`auto_safe_only`};function o(e=``){return{companyName:``,kennitala:``,contactEmail:e||``,billingEmail:e||``,contactName:``,phone:``,address:``,website:``,industry:``,selectedPlan:`basic`,billingStatus:`trial`,trialStartedAt:``,trialEndsAt:``,services:[],includeKeywords:[],excludeKeywords:[],locations:[],baseLocation:``,serviceAreas:[],willingToTravel:!1,nationalProjects:!1,remoteProjects:!1,minimumProjectValueForTravel:``,minProjectValue:``,maxProjectValue:``,allowUnknownValue:!0,reportFrequency:`weekly`,reportDay:`monday`,deadlineReminders:!0,includeLowConfidence:!1,autoAlertMode:`auto_safe_only`}}function s(e,t=`is`){let n=t===`is`;return{privacy:n?{eyebrow:`Lög og traust`,title:`Persónuvernd`,intro:`Hér er útskýrt á einföldu máli hvaða gögn VerkRadar vistar og hvernig þau eru notuð til að veita þjónustuna.`,sections:[[`Persónuvernd`,[`VerkRadar er vöktunar- og yfirlitskerfi fyrir fyrirtæki. Kerfið notar gögn sem notandi setur inn og opinber gögn um útboð og verkefni til að hjálpa fyrirtækjum að finna það sem gæti passað.`]],[`Hvaða gögn eru vistuð`,[`VerkRadar getur vistað fyrirtækjaheiti, tengiliðanetfang, vefslóð, atvinnugrein, þjónustuflokka, staðsetningar, leitarorð, stillingar, vistuð og hunsuð verkefni, samsvaranir og yfirlit.`,`Kerfið vistar einnig innskráningar- og lotugögn sem þarf til að halda notendum innskráðum og vernda aðgang.`]],[`Innskráning og aðgangur`,[`Notendur skrá sig inn með auðkenndum aðgangi. Aðgangur að mælaborði, stillingum og skýrslum er tengdur við notanda og fyrirtæki eftir því sem við á.`]],[`Fyrirtækjaprófíll og stillingar`,[`Fyrirtækjaprófíllinn er notaður til að bera opinber verkefni saman við þjónustu, svæði, lykilorð og óskir fyrirtækisins. Betri prófíll gefur yfirleitt betri samsvörun.`]],[`Vistuð og hunsuð tækifæri`,[`VerkRadar getur vistað hvaða verkefni notandi vistar, fylgist með eða hunsar. Þetta er notað til að bæta upplifun, síur og yfirlit.`]],[`Vafrakökur og vafrageymsla`,[`VerkRadar notar nauðsynlega vafrageymslu, lotugeymslu og sambærilega virkni fyrir innskráningu, Supabase Auth lotur, tungumál, stillingar og grunnvirkni appsins.`,`Við gerum ekki ráð fyrir auglýsinga- eða rekjanlegri markaðssetningargeymslu í þessari útgáfu. Ef greiningar eða auglýsingatól verða síðar bætt við þarf að uppfæra þessa lýsingu.`]],[`Hafa samband`,[`Spurningar um persónuvernd eða gögn má senda á info@froststudio.net.`]]]}:{eyebrow:`Legal and trust`,title:`Privacy`,intro:`This page explains in practical terms what VerkRadar stores and how that data is used to provide the service.`,sections:[[`Privacy`,[`VerkRadar is a monitoring and reporting tool for businesses. It uses user-entered company data and public tender/project data to help companies find relevant opportunities.`]],[`What data is stored`,[`VerkRadar may store company name, contact email, website, industry, service categories, locations, keywords, settings, saved and ignored opportunities, matches, and reports.`,`The system also stores login and session data needed to keep users signed in and protect account access.`]],[`Login and access`,[`Users log in with authenticated accounts. Access to dashboards, settings, and reports is connected to the user and company where applicable.`]],[`Company profile and settings`,[`The company profile is used to compare public opportunities against services, locations, keywords, and company preferences. A better profile usually creates better matches.`]],[`Saved and ignored opportunities`,[`VerkRadar may store which opportunities a user saves, watches, or ignores. This is used to improve the experience, filters, and reports.`]],[`Cookies and browser storage`,[`VerkRadar uses essential browser storage, session storage, and similar functionality for login, Supabase Auth sessions, language, preferences, and core app functionality.`,`We do not currently claim to use advertising or marketing tracking storage in this version. If analytics or advertising tools are added later, this section should be updated.`]],[`Contact`,[`Questions about privacy or data can be sent to info@froststudio.net.`]]]},terms:n?{eyebrow:`Lög og traust`,title:`Skilmálar`,intro:`Þessir skilmálar lýsa notkun VerkRadar á einföldu máli. Þeir eru ekki endanleg lögfræðiráðgjöf.`,sections:[[`Skilmálar`,[`Með því að nota VerkRadar samþykkir notandi að nota þjónustuna á ábyrgan hátt og staðfesta alltaf upplýsingar á upprunalegri heimild áður en brugðist er við.`]],[`Þjónustan`,[`VerkRadar vaktar opinberar heimildir, útboðsvefi, sveitarfélagssíður og aðrar heimildir þar sem það er heimilt og tæknilega mögulegt. Kerfið raðar verkefnum eftir fyrirtækjaprófíl og býr til mælaborð eða yfirlit.`]],[`Upprunaleg gögn eru endanleg heimild`,[`VerkRadar hjálpar til við að forgangsraða yfirferð opinberra tækifæra. Upprunaleg útboðsgögn, skilafrestir, kröfur og hæfisskilyrði á upprunalegri heimild eru alltaf endanleg heimild.`]],[`Engin trygging um fullkomna vöktun`,[`VerkRadar tryggir ekki að öll útboð finnist, að öll gögn séu fullkomin, að samsvörun sé alltaf rétt eða að fyrirtæki uppfylli skilyrði eða vinni verk.`]],[`Prufuaðgangur og verð`,[`Prufuaðgangur, verð, greiðslur og uppsagnir ráðast af verðsíðu, pöntunarsíðu eða skriflegu samkomulagi hverju sinni.`]],[`Uppsögn`,[`Notandi getur óskað eftir lokun eða breytingu á aðgangi. VerkRadar getur takmarkað aðgang ef þjónustan er misnotuð, greiðslur vantar eða öryggisáhætta kemur upp.`]],[`Ábyrgðartakmörkun`,[`VerkRadar ber ekki ábyrgð á töpuðum skilafrestum, röngum upplýsingum á upprunalegum heimildum, viðskiptatapi eða ákvörðunum sem teknar eru út frá yfirlitum án staðfestingar á frumgögnum.`]],[`Hafa samband`,[`Spurningar um skilmála má senda á info@froststudio.net.`]]]}:{eyebrow:`Legal and trust`,title:`Terms`,intro:`These terms describe VerkRadar use in plain language. They are not final legal advice.`,sections:[[`Terms`,[`By using VerkRadar, users agree to use the service responsibly and always verify information at the original source before acting.`]],[`The service`,[`VerkRadar monitors public sources, procurement portals, municipal pages, and other sources where allowed and technically feasible. The system ranks opportunities against company profiles and creates dashboards or reports.`]],[`Original data is the final authority`,[`VerkRadar helps prioritize review of public opportunities. Original tender documents, deadlines, requirements, and eligibility criteria at the original source are always the final authority.`]],[`No guarantee of complete monitoring`,[`VerkRadar does not guarantee that every tender is found, that all data is complete, that matching is always correct, or that a company is eligible for or will win any contract.`]],[`Trial access and pricing`,[`Trial access, pricing, billing, and cancellation are governed by the pricing page, order page, or written agreement in effect at the time.`]],[`Cancellation`,[`A user may request account changes or cancellation. VerkRadar may restrict access if the service is misused, payment is missing, or a security risk arises.`]],[`Limitation of liability`,[`VerkRadar is not responsible for missed deadlines, incorrect information at original sources, business losses, or decisions made from reports without checking source documents.`]],[`Contact`,[`Questions about these terms can be sent to info@froststudio.net.`]]]},data:n?{eyebrow:`Gagnaheimildir`,title:`Gagnaheimildir`,intro:`VerkRadar notar opinberar heimildir til að hjálpa fyrirtækjum að finna verkefni sem gætu skipt máli.`,sections:[[`Gagnaheimildir`,[`Kerfið safnar og samræmir opinberar upplýsingar þar sem slíkt er heimilt og tæknilega mögulegt.`]],[`Opinberar heimildir`,[`Heimildir geta verið útboðsvefir, opinberar stofnanir, RSS straumar, sveitarfélagssíður og aðrar opinberar síður.`]],[`Sveitarfélög og útboðsvefir`,[`VerkRadar getur vaktað sveitarfélög, innkaupa- og útboðsvefi og sértækar síður fyrir framkvæmdir, þjónustu eða innkaup.`]],[`Evrópsk útboð ef við á`,[`Evrópsk útboð geta verið sótt úr TED eða sambærilegum heimildum þegar þau eiga við markaðinn og fyrirtækjaprófíla.`]],[`Takmarkanir gagna`,[`Sumar heimildir veita ekki fulla skilafresti, verðmæti, kaupanda eða útboðsgögn í véllesanlegu formi. Gögn geta verið seinkuð, ófullkomin, tvítekin eða breytt á upprunalegri síðu.`]],[`Leiðréttingar`,[`Ef þú sérð rangar eða úreltar upplýsingar má senda ábendingu á info@froststudio.net. Opnið alltaf upprunalega heimild áður en brugðist er við.`]]]}:{eyebrow:`Data sources`,title:`Data sources`,intro:`VerkRadar uses public sources to help businesses find projects that may matter.`,sections:[[`Data sources`,[`The system collects and normalizes public information where allowed and technically feasible.`]],[`Public sources`,[`Sources can include procurement portals, public institutions, RSS feeds, municipal pages, and other official public pages.`]],[`Municipalities and procurement portals`,[`VerkRadar may monitor municipalities, procurement/tender portals, and specific pages for construction, services, or purchasing.`]],[`European tenders where applicable`,[`European tenders may be imported from TED or similar sources when relevant to the market and company profiles.`]],[`Data limitations`,[`Some sources do not provide full deadlines, values, buyer data, or tender documents in machine-readable form. Data may be delayed, incomplete, duplicated, or changed at the original source.`]],[`Corrections`,[`If you see incorrect or outdated information, send a correction to info@froststudio.net. Always open the original source before acting.`]]]},security:n?{eyebrow:`Öryggi`,title:`Öryggi`,intro:`VerkRadar notar innskráningu, aðgangsstýringu og aðskilnað gagna til að vernda fyrirtækjaupplýsingar.`,sections:[[`Öryggi`,[`Við reynum að halda öryggisupplýsingum hagnýtum og heiðarlegum. VerkRadar fullyrðir ekki um vottanir sem hafa ekki verið fengnar.`]],[`Innskráning`,[`Notendur skrá sig inn með auðkenndum aðgangi. Innskráning og lotur eru hluti af grunnvirkni appsins.`]],[`Aðgangsstýring`,[`Aðgangur að fyrirtækjagögnum, samsvörunum og skýrslum er aðgreindur eftir notanda og fyrirtæki þar sem það á við.`]],[`Fyrirtækjagögn`,[`Fyrirtækjaprófílar, stillingar og vistuð/hunsuð verkefni eru notuð til að veita þjónustuna og ættu ekki að vera sýnileg öðrum viðskiptavinum.`]],[`Admin aðgangur`,[`Admin verkfæri eru takmörkuð við skilgreinda stjórnendur og eru notuð til að fylgjast með heimildum, innflutningi, fyrirtækjum og handvirkri yfirferð.`]],[`Tilkynna vandamál`,[`Öryggisspurningar eða ábendingar má senda á info@froststudio.net.`]]]}:{eyebrow:`Security`,title:`Security`,intro:`VerkRadar uses authentication, access control, and data separation to protect company information.`,sections:[[`Security`,[`We try to keep security information practical and honest. VerkRadar does not claim certifications it has not obtained.`]],[`Login`,[`Users log in with authenticated accounts. Login and sessions are part of the app’s core functionality.`]],[`Access control`,[`Access to company data, matches, and reports is separated by user and company where applicable.`]],[`Company data`,[`Company profiles, settings, and saved/ignored opportunities are used to provide the service and should not be visible to other customers.`]],[`Admin access`,[`Admin tools are restricted to defined administrators and are used to monitor sources, imports, companies, and manual review.`]],[`Report an issue`,[`Security questions or reports can be sent to info@froststudio.net.`]]]},contact:n?{eyebrow:`Hafa samband`,title:`Hafa samband`,intro:`Viltu prófa VerkRadar, spyrja um vöktun eða benda á leiðréttingu?`,sections:[[`VerkRadar / Frost Studio`,[`Netfang: info@froststudio.net`,`Tengiliður: Kristján Jakob`]]]}:{eyebrow:`Contact`,title:`Contact`,intro:`Want to try VerkRadar, ask about monitoring, or report a correction?`,sections:[[`VerkRadar / Frost Studio`,[`Email: info@froststudio.net`,`Contact person: Kristján Jakob`]]]}}[e]}var c=`https://asojxjbsgqbfpbepojzh.supabase.co`,l=window.supabase?window.supabase.createClient(c,`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFzb2p4amJzZ3FiZnBiZXBvanpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAwNTU2NjgsImV4cCI6MjA5NTYzMTY2OH0.yPA34VbqWqKrBPespmHr5AojYzjhy3kGRxswO9XdAd0`):null,u=`verkradar_pending_invite_token`;function d(e){return String(e||``).trim().toLowerCase()}function f(){return window.VERKRADAR_COMPANY_INVITE_URL?window.VERKRADAR_COMPANY_INVITE_URL:window.VERKRADAR_SUPABASE_URL?`${window.VERKRADAR_SUPABASE_URL}/functions/v1/company-invite`:`${c}/functions/v1/company-invite`}function p(e){let t=String(e||``),n=t.includes(`?`)?t.slice(t.indexOf(`?`)+1):``;return new URLSearchParams(n).get(`token`)||new URLSearchParams(n).get(`invite`)||``}function m(){try{return localStorage.getItem(u)||``}catch{return``}}function h(e){let t=String(e||``).trim();try{t&&localStorage.setItem(u,t)}catch{}return t}function ee(){try{localStorage.removeItem(u)}catch{}}function g(e){let t=String(e||``).trim();return t?`${window.location.origin}/#/accept-invite?token=${encodeURIComponent(t)}`:``}async function te(e){let t=f();if(!t)throw Error(`Company invite function is not configured.`);let n=await fetch(t,{method:`POST`,headers:ie(),body:JSON.stringify({preview:!0,token:e})}),r=await v(n);if(!n.ok)throw Error(r.error||r.message||`Invite preview failed with status ${n.status}`);return r}async function _(e){let t=f();if(!t)throw Error(`Company invite function is not configured.`);let n=await fetch(t,{method:`POST`,headers:await ae(),body:JSON.stringify({accept:!0,token:e})}),r=await v(n);if(!n.ok){let e=Error(r.error||r.message||`Invite acceptance failed with status ${n.status}`);throw e.details=r,e}return r}async function ne(e,t,n={}){let r=String(n.token||``).trim();if(r)return[await _(r)];let i=d(t?.email);if(!e||!t?.id||!i||n.allowEmailClaim!==!0)return[];let{data:a,error:o}=await e.from(`company_members`).select(`id, company_id, email, role, status`).eq(`email_normalized`,i).eq(`status`,`invited`);if(o)throw o;let s=a||[];if(!s.length)return[];let c=[];for(let n of s){let{data:r,error:a}=await e.from(`company_members`).update({user_id:t.id,status:`active`,accepted_at:new Date().toISOString(),revoked_at:null,updated_at:new Date().toISOString()}).eq(`id`,n.id).eq(`email_normalized`,i).eq(`status`,`invited`).select(`id, company_id, email, role, status, accepted_at`).maybeSingle();if(a)throw a;r&&c.push(r)}return c}async function re(e,t){if(!e||!t?.id)return[];let{data:n,error:r}=await e.from(`company_members`).select(`id, company_id, email, role, status, accepted_at`).eq(`user_id`,t.id).eq(`status`,`active`).order(`accepted_at`,{ascending:!0});if(r)throw r;return n||[]}function ie(){let e={"content-type":`application/json`},t=window.VERKRADAR_SUPABASE_ANON_KEY||`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFzb2p4amJzZ3FiZnBiZXBvanpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAwNTU2NjgsImV4cCI6MjA5NTYzMTY2OH0.yPA34VbqWqKrBPespmHr5AojYzjhy3kGRxswO9XdAd0`;return t&&(e.apikey=t),e}async function ae(){let e=ie(),{data:t,error:n}=l?await l.auth.getSession():{data:{session:null},error:null};if(n)throw n;let r=t.session?.access_token;if(!r)throw Error(`You must be logged in to accept this invite.`);return e.authorization=`Bearer ${r}`,e}async function v(e){let t=await e.text();if(!t)return{};try{return JSON.parse(t)}catch{return{error:t}}}function y(){return window.VERKRADAR_DAILY_PIPELINE_URL?window.VERKRADAR_DAILY_PIPELINE_URL:window.VERKRADAR_SUPABASE_URL?`${window.VERKRADAR_SUPABASE_URL}/functions/v1/daily-pipeline`:`${c}/functions/v1/daily-pipeline`}async function b(){let e=y();if(!e)throw Error(`Daily pipeline function is not configured. Set window.VERKRADAR_DAILY_PIPELINE_URL or window.VERKRADAR_SUPABASE_URL.`);let t=await oe(),n=await fetch(e,{method:`POST`,headers:t,body:JSON.stringify({runDailyPipeline:!0})}),r=await se(n);if(!n.ok&&n.status!==207)throw Error(r.error||r.message||`Daily pipeline failed with status ${n.status}`);return r}async function oe(){let e={"content-type":`application/json`},t=window.VERKRADAR_SUPABASE_ANON_KEY||`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFzb2p4amJzZ3FiZnBiZXBvanpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAwNTU2NjgsImV4cCI6MjA5NTYzMTY2OH0.yPA34VbqWqKrBPespmHr5AojYzjhy3kGRxswO9XdAd0`;t&&(e.apikey=t);let{data:n,error:r}=l?await l.auth.getSession():{data:{session:null},error:null};if(r)throw r;let i=n.session?.access_token;if(!i)throw Error(`You must be logged in as an admin to run the daily pipeline.`);return e.authorization=`Bearer ${i}`,e}async function se(e){let t=await e.text();if(!t)return{};try{return JSON.parse(t)}catch{return{error:t}}}function ce(){return window.VERKRADAR_AI_REVIEW_MATCH_URL?window.VERKRADAR_AI_REVIEW_MATCH_URL:window.VERKRADAR_SUPABASE_URL?`${window.VERKRADAR_SUPABASE_URL}/functions/v1/ai-review-match`:`${c}/functions/v1/ai-review-match`}async function le(e,t={}){let n=ce();if(!n)throw Error(`AI review function is not configured. Set window.VERKRADAR_AI_REVIEW_MATCH_URL or window.VERKRADAR_SUPABASE_URL.`);let r=await he(),i=await fetch(n,{method:`POST`,headers:r,body:JSON.stringify({matchId:e,force:t.force===!0})}),a=await ge(i);if(!i.ok)throw Error(a.error||a.message||`AI review failed with status ${i.status}`);return a}async function ue(e,t={}){let n=ce();if(!n)throw Error(`AI review function is not configured. Set window.VERKRADAR_AI_REVIEW_MATCH_URL or window.VERKRADAR_SUPABASE_URL.`);let r=await he(),i=await fetch(n,{method:`POST`,headers:r,body:JSON.stringify({batch:!0,companyId:e,limit:Math.max(1,Math.min(20,Number(t.limit||10))),force:t.force===!0,revalidate:t.revalidate===!0})}),a=await ge(i);if(!i.ok)throw Error(a.error||a.message||`AI review batch failed with status ${i.status}`);return a}async function de(e={}){let t=ce();if(!t)throw Error(`AI review function is not configured. Set window.VERKRADAR_AI_REVIEW_MATCH_URL or window.VERKRADAR_SUPABASE_URL.`);let n=await he(),r=await fetch(t,{method:`POST`,headers:n,body:JSON.stringify({auto:!0,limit:Math.max(1,Math.min(10,Number(e.limit||10)))})}),i=await ge(r);if(!r.ok)throw Error(i.error||i.message||`Automatic AI review failed with status ${r.status}`);return i}async function fe(e,t){let n=ce();if(!n)throw Error(`AI review function is not configured. Set window.VERKRADAR_AI_REVIEW_MATCH_URL or window.VERKRADAR_SUPABASE_URL.`);let r=await he(),i=await fetch(n,{method:`POST`,headers:r,body:JSON.stringify({setCompanyAutoAiReviewEnabled:!0,company_id:e,enabled:t===!0})}),a=await ge(i);if(!i.ok)throw Error(a.error||a.message||`Auto AI toggle failed with status ${i.status}`);return a}async function pe(){if(!l)return{reviewsToday:0,estimatedCostToday:0,remainingReviewsToday:50};let e=new Date;e.setUTCHours(0,0,0,0);let{data:t,error:n}=await l.from(`ai_usage_log`).select(`opportunity_id, estimated_cost`).gte(`created_at`,e.toISOString());if(n)throw n;let r=t||[],i=r.filter(e=>e.opportunity_id).length;return{reviewsToday:i,estimatedCostToday:r.reduce((e,t)=>e+Number(t.estimated_cost||0),0),remainingReviewsToday:Math.max(0,50-i)}}function me(e){let t=Number(e||0);return`$${t.toFixed(t>=1?2:4)}`}async function he(){let e={"content-type":`application/json`},t=window.VERKRADAR_SUPABASE_ANON_KEY||`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFzb2p4amJzZ3FiZnBiZXBvanpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAwNTU2NjgsImV4cCI6MjA5NTYzMTY2OH0.yPA34VbqWqKrBPespmHr5AojYzjhy3kGRxswO9XdAd0`;t&&(e.apikey=t);let{data:n,error:r}=l?await l.auth.getSession():{data:{session:null},error:null};if(r)throw r;let i=n.session?.access_token;if(!i)throw Error(`You must be logged in as an admin to run AI review.`);return e.authorization=`Bearer ${i}`,e}async function ge(e){let t=await e.text();if(!t)return{};try{return JSON.parse(t)}catch{return{error:t}}}function _e(e){let t=String(e?.fit||``),n=Number(e?.confidence||0),r=e?.send_to_client===!0||e?.sendToClient===!0;return n<.65?`needs_review`:t===`strong`&&r?`ready_for_admin`:t===`possible`&&r?`possible`:t===`weak`||t===`no_fit`?`low_priority`:`needs_review`}function ve(e,t,n=null){let r=new Map,i=new Map;for(let e of t||[]){let t=String(e.company_id||``),n=String(e.opportunity_id||``),a=String(e.match_id||``);t&&n&&r.set(`${t}:${n}`,e),a&&i.set(a,e)}return(e||[]).map(e=>{let t=`${String(e.company_id||``)}:${String(e.opportunity_id||``)}`,a=r.get(t)||i.get(String(e.id||``));return a?{...e,ai_review_status:_e(a),ai_review_fit:a.fit||e.ai_review_fit,ai_review_confidence:a.confidence??e.ai_review_confidence,ai_reviewed_at:a.updated_at||a.created_at||e.ai_reviewed_at,ai_review_send_to_client:a.send_to_client===!0,ai_review_reason:a.reason||``,ai_review_profile_hash:a.reviewed_profile_hash||``,ai_review_profile_stale:we(a,n),ai_review_found:!0,ai_review_saved:!0}:{...e,ai_review_found:!1}})}function ye(e,t=null){let n=Te(t,e);if(n.outsideServiceArea)return{bucket:`outside_service_area`,label:`Outside service area`,tone:`warning`,clientReady:!1,reason:n.reason||`Outside current service area.`};let r=Ce(e?.ai_review_skipped_reason),i=String(e?.ai_review_fit||``),a=Number(e?.ai_review_confidence||0),o=e?.ai_review_found===!0||e?.ai_review_saved===!0||!!i,s=String(e?.ai_review_status||`not_reviewed`);return r===`outside_service_area`?{bucket:`outside_service_area`,label:`Outside service area`,tone:`warning`,clientReady:!1,reason:`Skipped by batch review because the opportunity is outside the company service area.`}:o?e?.ai_review_profile_stale===!0?{bucket:`needs_review`,label:`AI review may be stale`,tone:`warning`,clientReady:!1,confidence:a}:i===`strong`&&e?.ai_review_send_to_client===!0?{bucket:`ai_recommended`,label:`AI recommended`,tone:`success`,clientReady:!0,confidence:a}:i===`possible`?{bucket:`ai_possible`,label:`AI possible`,tone:`notice`,clientReady:e?.ai_review_send_to_client===!0,confidence:a}:i===`weak`||i===`no_fit`||s===`low_priority`?{bucket:`low_priority`,label:i===`no_fit`?`AI: no fit`:`AI: weak fit`,tone:`muted`,clientReady:!1,confidence:a}:{bucket:`needs_review`,label:`Needs review`,tone:`warning`,clientReady:!1,confidence:a}:r?{bucket:r,label:Se(r),tone:r===`already_reviewed`?`notice`:`warning`,clientReady:!1,reason:Se(r)}:s===`needs_review`||String(e?.safety_status||``)===`needs_review`?{bucket:`needs_review`,label:`Needs review`,tone:`warning`,clientReady:!1}:{bucket:`not_reviewed`,label:`Not AI reviewed`,tone:`muted`,clientReady:!1}}function be(e,t,n=null){return(e||[]).filter(e=>{let r=ye(e,n);return t===`ai_recommended`?r.bucket===`ai_recommended`:t===`ai_possible`?r.bucket===`ai_possible`:t===`needs_review`?r.bucket===`needs_review`:t===`outside_service_area`?r.bucket===`outside_service_area`:t===`not_reviewed`?r.bucket===`not_reviewed`:!0})}function xe(e){let t=JSON.stringify({services:De([...e?.services||[],...e?.includeKeywords||[],...(e?.excludeKeywords||[]).map(e=>`exclude:${e}`)]),locations:De([e?.baseLocation,...e?.locations||[],...e?.serviceAreas||[],e?.willingToTravel?`willing_to_travel:true`:`willing_to_travel:false`,e?.nationalProjects?`national_projects:true`:`national_projects:false`])}),n=5381;for(let e=0;e<t.length;e+=1)n=(n<<5)+n+t.charCodeAt(e),n|=0;return`profile_${Math.abs(n)}`}function Se(e){return{outside_service_area:`Outside service area`,already_reviewed:`Already reviewed`,expired:`Expired`,missing_deadline:`Missing deadline`,expired_or_missing_deadline:`Expired or missing deadline`,score_too_low:`Score too low`,manually_rejected:`Manually rejected`}[Ce(e)]||`Skipped`}function Ce(e){return String(e||``).trim().toLowerCase().replace(/[\s-]+/g,`_`)}function we(e,t){if(!e||!t)return!1;let n=String(e.reviewed_profile_hash||``);return!!(n&&n!==xe(t))}function Te(e,t){if(!e||e.nationalProjects===!0||e.willingToTravel===!0)return{outsideServiceArea:!1,reason:``};let n=Oe([e.baseLocation,...e.serviceAreas||[],...e.locations||[]].join(` `));if(!n||/all iceland|allt land|national|landsdekkandi/.test(n))return{outsideServiceArea:!1,reason:``};let r=t?.opportunities||{},i=r.raw_payload&&typeof r.raw_payload==`object`?r.raw_payload:{},a=Oe([r.title,r.location,i.region,i.extracted_location].join(` `));if(!a)return{outsideServiceArea:!1,reason:`Opportunity location unclear`};if(/(dalvik|akureyri|boggvisbraut|birkiholar|north iceland|nordurland)/.test(a)&&!/(dalvik|akureyri|north iceland|nordurland)/.test(n)||/(olafsvik|snaefellsnes|stykkisholmur|grundarfjordur)/.test(a)&&!/(olafsvik|snaefellsnes|stykkisholmur|grundarfjordur)/.test(n))return{outsideServiceArea:!0,reason:`Outside current service area`};let o=Ee(n),s=Ee(a);return!o.length||!s.length?{outsideServiceArea:!1,reason:``}:{outsideServiceArea:!s.some(e=>o.includes(e)),reason:`Outside current service area`}}function Ee(e){return[[`capital_area`,/reykjavik|capital area|hofudborg|gardabaer|kopavogur|seltjarnarnes|mosfellsbaer/],[`south`,/selfoss|arborg|sudurland|hveragerdi|olfus|rangarthing/],[`west_corridor`,/akranes|borgarnes|borgarbyggd|hvalfjordur/],[`north`,/dalvik|akureyri|nordurland|birkiholar|boggvisbraut/],[`snaefellsnes`,/olafsvik|snaefellsnes|stykkisholmur|grundarfjordur/]].filter(([,t])=>t.test(e)).map(([e])=>e)}function De(e){return Array.from(new Set((e||[]).map(e=>Oe(e)).filter(Boolean))).sort()}function Oe(e){return String(e||``).toLowerCase().normalize(`NFD`).replace(/[\u0300-\u036f]/g,``).replace(/þ/g,`th`).replace(/ð/g,`d`).replace(/æ/g,`ae`).replace(/ö/g,`o`).replace(/[^a-z0-9\s/-]/g,` `).replace(/\s+/g,` `).trim()}function ke(e){let{escapeHtml:t,isRunning:n=!1,result:r=null}=e;return`
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
      ${r?Ae(r,t):``}
    </section>
  `}function Ae(e,t){return`
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
  `}function je(e,t){let{escapeHtml:n,formatDateTime:r,inviteEmail:i=``,inviteLink:a=``,actionState:o=``}=t,s=Array.isArray(e.members)?e.members:[],c=s.filter(e=>e.status===`active`),l=s.filter(e=>e.status===`invited`),u=c.length?`Active`:l.length?`Invited`:`Not invited`,d=!!o;return`
    <section class="side-panel admin-company-access-panel">
      <h3>Customer access</h3>
      <p><strong>Access status:</strong> ${n(u)}</p>
      <p class="muted-text">Create an invite link, copy it, and send it manually. VerkRadar does not send invite emails yet.</p>
      ${s.length?`
        <ul class="admin-detail-list admin-company-access-list">
          ${s.map(e=>Me(e,{escapeHtml:n,formatDateTime:r,busy:d})).join(``)}
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
        <button class="btn btn-secondary btn-small" type="button" data-action="admin-invite-company-customer" data-id="${n(e.id)}" ${d?`disabled`:``}>
          ${o===`invite`?`Creating link...`:l.length?`Regenerate invite link`:`Create invite link`}
        </button>
        ${a?`
          <div class="admin-invite-link-box">
            <input type="text" readonly value="${n(a)}" aria-label="Invite link" />
            <button class="btn btn-ghost btn-small" type="button" data-action="admin-copy-company-invite-link" data-id="${n(e.id)}">Copy invite link</button>
          </div>
        `:``}
      </div>
      <p class="muted-text">Aðgangur að fyrirtæki er afturkallaður, en innskráningaraðgangi notandans er ekki eytt.</p>
    </section>
  `}function Me(e,t){let{escapeHtml:n,formatDateTime:r,busy:i}=t,a=e.status===`revoked`,o=e.status===`active`?`is-success`:e.status===`invited`?`is-running`:``;return`
    <li>
      <div>
        <strong>${n(e.email||`Unknown email`)}</strong>
        <span>${n(e.role||`member`)} · <span class="status-pill ${o}">${n(e.status||`unknown`)}</span></span>
        <span>${e.accepted_at?`Accepted ${n(r(e.accepted_at))}`:`Invited ${n(r(e.invited_at))}`}</span>
        ${e.expires_at&&e.status===`invited`?`<span>Invite expires ${n(r(e.expires_at))}</span>`:``}
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
  `}function Ne(e){let{escapeHtml:t,invite:n=null,loading:r=!1,error:i=``,user:a=null,accepting:o=!1,signupHref:s=`/signup`,loginHref:c=`/login`,language:l=`is`}=e,u=l===`is`,d=u?`Aðgangsboð í VerkRadar`:`VerkRadar invite`,f=u?`Sæki aðgangsboð...`:`Loading invite...`,p=u?`Fyrirtæki`:`Company`,m=u?`Boðið netfang`:`Invited email`,h=u?`Innskráning`:`Login`,ee=u?`Stofna aðgang`:`Create account`,g=u?`Tengja aðgang`:`Accept invite`,te=u?`Notaðu sama netfang og aðgangsboðið var sent á. Eftir innskráningu tengist aðgangurinn við fyrirliggjandi fyrirtækjaprófíl.`:`Use the same email address this invite was created for. After login, your account will be connected to the existing company profile.`;return`
    <section class="auth-page">
      <div class="auth-layout">
        <div class="auth-copy">
          <p class="eyebrow">${t(u?`AÐGANGUR`:`ACCESS`)}</p>
          <h1>${t(d)}</h1>
          <p>${t(te)}</p>
        </div>
        <div class="auth-form-column">
          <div class="auth-card invite-card">
            ${r?`<p>${t(f)}</p>`:``}
            ${i?`<div class="admin-message is-error">${t(i)}</div>`:``}
            ${n?`
              <div class="invite-summary">
                <p><strong>${t(p)}:</strong> ${t(n.company_name||``)}</p>
                <p><strong>${t(m)}:</strong> ${t(n.email||``)}</p>
              </div>
              ${a?`
                <button class="btn btn-primary btn-large" type="button" data-action="accept-company-invite" ${o?`disabled`:``}>
                  ${t(o?u?`Tengi...`:`Accepting...`:g)}
                </button>
              `:`
                <div class="auth-actions">
                  <button class="btn btn-primary btn-large" type="button" data-action="go" data-href="${t(s)}">${t(ee)}</button>
                  <button class="btn btn-secondary btn-large" type="button" data-action="go" data-href="${t(c)}">${t(h)}</button>
                </div>
              `}
            `:``}
          </div>
        </div>
      </div>
    </section>
  `}function Pe({authMessage:e,escapeHtml:t}){if(!e)return``;let n=Array.isArray(e.actions)?e.actions:[];return`
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
  `}function Fe({t:e,escapeHtml:t,authForm:n,authSubmitting:r,authMessage:i,signupHref:a=`/signup`,forgotPasswordHref:o=`/forgot-password`}){return`
    <section class="auth-page">
      <div class="auth-layout">
        <div class="auth-copy">
          <p class="eyebrow">${t(e(`login`))}</p>
          <h1>${t(e(`authLoginTitle`))}</h1>
          <p>${t(e(`authLoginSubtitle`))}</p>
        </div>

        <div class="auth-form-column">
          ${Pe({authMessage:i,escapeHtml:t})}
          <form id="login-form" class="auth-card">
            <label class="form-group">${t(e(`email`))} <input type="email" name="email" data-auth-field="email" value="${t(n.email)}" autocomplete="email" required /></label>
            <label class="form-group">${t(e(`password`))} <input type="password" name="password" data-auth-field="password" value="${t(n.password)}" autocomplete="current-password" required /></label>
            <p class="auth-help-link"><button type="button" data-action="go" data-href="${t(o)}">${t(e(`forgotPassword`))}</button></p>
            <div class="auth-actions">
              <button class="btn btn-primary btn-large" type="submit" ${r?`disabled`:``}>
                ${t(e(r?`loggingIn`:`login`))}
              </button>
            </div>
            <p class="auth-switch">${t(e(`newToVerkRadar`))} <button type="button" data-action="go" data-href="${t(a)}">${t(e(`createAccount`))}</button></p>
          </form>
        </div>
      </div>
    </section>
  `}function Ie({t:e,escapeHtml:t,authForm:n,authSubmitting:r,authMessage:i}){return`
    <section class="auth-page">
      <div class="auth-layout">
        <div class="auth-copy">
          <p class="eyebrow">${t(e(`passwordReset`))}</p>
          <h1>${t(e(`resetPasswordTitle`))}</h1>
          <p>${t(e(`resetPasswordSubtitle`))}</p>
        </div>

        <div class="auth-form-column">
          ${Pe({authMessage:i,escapeHtml:t})}
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
  `}function Le({t:e,escapeHtml:t,authForm:n,authSubmitting:r,authMessage:i}){return`
    <section class="auth-page">
      <div class="auth-layout">
        <div class="auth-copy">
          <p class="eyebrow">${t(e(`newPassword`))}</p>
          <h1>${t(e(`chooseNewPassword`))}</h1>
          <p>${t(e(`resetPasswordHelp`))}</p>
        </div>

        <div class="auth-form-column">
          ${Pe({authMessage:i,escapeHtml:t})}
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
  `}function Re({t:e,escapeHtml:t,authForm:n,authSubmitting:r,authMessage:i,loginHref:a=`/login`}){return`
    <section class="auth-page">
      <div class="auth-layout">
        <div class="auth-copy">
          <p class="eyebrow">${t(e(`createAccount`))}</p>
          <h1>${t(e(`createAccountTitle`))}</h1>
          <p>${t(e(`createAccountSubtitle`))}</p>
        </div>

        <div class="auth-form-column">
          ${Pe({authMessage:i,escapeHtml:t})}
          <form id="signup-form" class="auth-card">
            <label class="form-group">${t(e(`email`))} <input type="email" name="email" data-auth-field="email" value="${t(n.email)}" autocomplete="email" required /></label>
            <label class="form-group">${t(e(`password`))} <input type="password" name="password" data-auth-field="password" value="${t(n.password)}" autocomplete="new-password" minlength="6" required /></label>
            <div class="auth-actions">
              <button class="btn btn-primary btn-large" type="submit" ${r?`disabled`:``}>
                ${t(e(r?`creating`:`createAccount`))}
              </button>
            </div>
            <p class="auth-switch">${t(e(`alreadyHaveAccount`))} <button type="button" data-action="go" data-href="${t(a)}">${t(e(`login`))}</button></p>
          </form>
        </div>
      </div>
    </section>
  `}function ze(e){let{escapeHtml:t,usageSummary:n=null,lastResult:r=null,isRunning:i=!1,formatAiUsageCost:a=e=>`$${Number(e||0).toFixed(4)}`}=e;return`
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
      ${n?He(n,{escapeHtml:t,formatAiUsageCost:a}):``}
      ${r?We(r,t):``}
    </section>
  `}function Be(e,t){let{escapeHtml:n}=t,r=e.latestMatches||[];return r.length?`
    <ul class="admin-detail-list admin-ai-aware-match-list">
      ${r.map(t=>Ke(t,{escapeHtml:n,company:e})).join(``)}
    </ul>
  `:`<p>No stored matches yet.</p>`}function Ve(e,t){let{escapeHtml:n,formatDateTime:r,formatAiUsageCost:i=e=>`$${Number(e||0).toFixed(4)}`,actionState:a=``,filter:o=`not_reviewed`,lastResult:s=null,usageSummary:c=null}=t,l=be(e.latestMatches||[],o,e);return`
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

      ${c?He(c,{escapeHtml:n,formatAiUsageCost:i}):``}
      ${s?Ue(s,n):``}

      <label class="admin-inline-control admin-company-ai-filter">
        <span>AI review filter</span>
        <select data-admin-company-ai-filter>
          ${[[`ai_recommended`,`AI recommended`],[`ai_possible`,`AI possible`],[`needs_review`,`Needs review`],[`outside_service_area`,`Outside service area`],[`not_reviewed`,`Not AI reviewed`]].map(([e,t])=>`<option value="${e}" ${o===e?`selected`:``}>${t}</option>`).join(``)}
        </select>
      </label>

      ${l.length?`
        <ul class="admin-detail-list admin-ai-match-list">
          ${l.map(t=>qe(t,{escapeHtml:n,formatDateTime:r,company:e})).join(``)}
        </ul>
      `:`<p class="muted-text">No matches for this AI review filter.</p>`}
    </section>
  `}function He(e,{escapeHtml:t,formatAiUsageCost:n}){return`
    <div class="admin-ai-usage-summary">
      <span><strong>AI usage today</strong></span>
      <span>${Number(e.reviewsToday||0)} reviews today</span>
      <span>${t(n(e.estimatedCostToday||0))} estimated cost</span>
      <span>${Number(e.remainingReviewsToday||0)} reviews remaining</span>
    </div>
  `}function Ue(e,t){return`
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
  `}function We(e,t){return`
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
    ${Ge(e.company_diagnostics||[],t)}
  `}function Ge(e,t){return e.length?`
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
  `:``}function Ke(e,{escapeHtml:t,company:n}){let r=e.opportunities||{},i=ye(e,n),a=Number(e.match_score||0);return`
    <li class="admin-ai-aware-match ${t(i.tone||`muted`)}">
      <strong>${t(r.title||`Opportunity`)}</strong>
      <span>
        <b>${t(i.label)}</b>
        ${i.confidence?` · ${Math.round(i.confidence*100)}%`:``}
        · Rule score ${a}
        ${i.bucket===`outside_service_area`?` · Rule label suppressed`:` · ${t(e.match_label||`Match`)}`}
      </span>
      ${e.ai_review_skipped_reason?`<small>Skipped: ${t(Se(e.ai_review_skipped_reason))}</small>`:``}
      ${e.ai_review_profile_stale?`<small>AI review may be stale because the company profile changed.</small>`:``}
    </li>
  `}function qe(e,{escapeHtml:t,formatDateTime:n,company:r}){let i=e.opportunities||{},a=ye(e,r),o=a.confidence?` · ${Math.round(a.confidence*100)}%`:``,s=e.ai_reviewed_at?` · ${n(e.ai_reviewed_at)}`:``,c=e.ai_review_skipped_reason?` · Skipped: ${Se(e.ai_review_skipped_reason)}`:``;return`
    <li class="admin-ai-match-row ${t(a.tone||`muted`)}">
      <strong>${t(i.title||`Opportunity`)}</strong>
      <span>${t(a.label)}${t(o)}${t(s)}${t(c)}</span>
      ${e.ai_review_profile_stale?`<span>AI review may be stale because the company profile changed.</span>`:``}
      <span>Rule score ${Number(e.match_score||0)} · ${t(e.match_label||`Match`)}</span>
      <span class="admin-ai-debug">company_id=${t(e.company_id||``)} · opportunity_id=${t(e.opportunity_id||``)} · ai_review_found=${e.ai_review_found===!0?`true`:`false`}</span>
    </li>
  `}function Je({copy:e,suggestions:t,labels:n,escapeHtml:r}){return`
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
  `}function Ye({profile:e,matches:t,stats:n,filters:r,filterSummary:i,matchStatus:a,opportunityLoadError:o,isAdmin:s,matchingLoading:c,labels:l,renderFilterDropdown:u,renderOpportunityCard:d,renderEmptyState:f,escapeHtml:p}){return`
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
  `}function Xe({opp:e,saved:t,deadline:n,sourceBadgeHtml:r,qualityBadgeHtml:i,safetyBadgeHtml:a,extractedBadgeHtml:o,originalLanguageBadgeHtml:s,matchBadgeClass:c,matchLabel:l,buyer:u,location:d,value:f,reasons:p,labels:m,escapeHtml:h}){return`
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
  `}function Ze({opp:e,saved:t,deadline:n,requirements:r,matchReasons:i,risks:a,safetyReasons:o,nextSteps:s,matchBadgeClass:c,matchLabel:l,qualityBadgeHtml:u,safetyBadgeHtml:d,extractedBadgeHtml:f,qualityWarningHtml:p,buyerSummary:m,location:h,value:ee,sourceUrl:g,extractedDetails:te,qualityLabel:_,safetyStatusLine:ne,category:re,type:ie,publishedDate:ae,cpvCode:v,labels:y,escapeHtml:b}){return`
    <div class="modal-backdrop">
      <div class="modal" role="dialog" aria-modal="true">
        <div class="modal-header">
          <div>
            <div class="opportunity-badges">
              <span class="${c}">${b(l)} · ${e.matchScore}</span>
              ${u}
              ${d}
              ${f}
            </div>
            <h2>${b(e.title)}</h2>
            <p>${b(m)} · ${b(h)} · ${ee}</p>
          </div>
          <button type="button" class="icon-btn modal-close-btn" data-action="close-modal" aria-label="Close details">×</button>
        </div>

        <div class="modal-body">
          <div class="modal-grid">
            <section>
              ${p}
              <h3>${b(y.description)}</h3>
              <p>${b(e.description||y.noDescription)}</p>
              <h3>${b(y.requirements)}</h3>
              <ul class="check-list">
                ${(r.length?r:[y.noSpecificRequirements]).map(e=>`<li>${b(e)}</li>`).join(``)}
              </ul>
              <h3>${b(y.matchReasons)}</h3>
              <ul class="check-list">
                ${(i.length?i:[y.noMatchReasons]).map(e=>`<li>${b(e)}</li>`).join(``)}
              </ul>
            </section>

            <aside class="side-panel">
              <h3>${b(y.opportunityInfo)}</h3>
              <p><strong>${b(y.source)}:</strong> ${b(y.sourceValue)}</p>
              ${te}
              <p><strong>${b(y.quality)}:</strong> ${b(_)}</p>
              ${ne}
              <p><strong>${b(y.category)}:</strong> ${b(re)}</p>
              <p><strong>${b(y.type)}:</strong> ${b(ie)}</p>
              <p><strong>${b(y.deadline)}:</strong> <span class="${n.className}">${b(y.deadlineLabel)}</span></p>
              <p><strong>${b(y.published)}:</strong> ${b(ae)}</p>
              <p><strong>${b(y.cpv)}:</strong> ${b(v||`—`)}</p>

              <h3>${b(y.risksToCheck)}</h3>
              <ul class="risk-list">
                ${(o.length?o:a).map(e=>`<li>${b(e)}</li>`).join(``)}
              </ul>

              <h3>${b(y.recommendedNextSteps)}</h3>
              <ol class="steps-list">
                ${(s.length?s:[y.openSourceAndConfirm]).map(e=>`<li>${b(e)}</li>`).join(``)}
              </ol>

              <div class="button-stack">
                <button class="btn btn-primary" data-action="save" data-id="${e.id}">${b(t?y.removeFromSaved:y.saveOpportunity)}</button>
                <a class="btn btn-secondary" href="${b(g)}" target="_blank" rel="noreferrer">${b(y.openSource)}</a>
                <button class="btn btn-ghost" data-action="ignore" data-id="${e.id}">${b(y.markNotRelevant)}</button>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  `}function Qe(e,t){return e.map(e=>`<p>${t(e)}</p>`).join(``)}function $e({language:e,escapeHtml:t,eyebrow:n,title:r,intro:i,sections:a}){let o=e===`is`?`Síðast uppfært`:`Last updated`,s=e===`is`?`4. júní 2026`:`June 4, 2026`;return`
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
            <div class="legal-content">${Qe(n,t)}</div>
          </section>
        `).join(``)}
      </div>
    </section>
  `}function et({t:e,escapeHtml:t,language:n,trialHref:r}){let i=n===`is`,a=i?[{title:`Gatnagerð og lagnir við nýtt hverfi`,type:`1`,score:`Sterk samsvörun · Skilafrestur eftir 10 daga`},{title:`Lóðarframkvæmdir við skóla`,type:`2`,score:`Passar við lóðarvinnu · Staðfesta gögn`},{title:`Bílastæði og yfirborðsfrágangur`,type:`3`,score:`Möguleg samsvörun · Opna heimild`}]:[{title:`Roadworks and utilities for a new neighborhood`,type:`1`,score:`Strong match · Deadline in 10 days`},{title:`Site works at a school`,type:`2`,score:`Fits site work · Verify documents`},{title:`Parking area and surface finishing`,type:`3`,score:`Possible match · Open source`}],o=i?[[`Jarðvinna og gatnagerð`,`Útboð um vegi, lóðir, bílastæði, stíga og jarðvegsvinnu.`],[`Lagnavinna og fráveita`,`Verkefni um lagnir, dælustöðvar, fráveitu, vatn og hitaveitu.`],[`Malbikun og lóðarframkvæmdir`,`Gatnagerð, yfirborðsfrágangur, gangstéttir og viðhald.`],[`Rafverktakar`,`Raflagnir, brunakerfi, lýsing, öryggiskerfi og hleðslustöðvar.`],[`Ræstingar og þjónusta`,`Reglulegir þjónustusamningar, húsþjónusta og rekstrarverkefni.`],[`Verkfræðistofur og ráðgjafar`,`Hönnun, eftirlit, ráðgjöf og verkefnastjórnun þegar það á við.`]]:[[`Earthworks and roadworks`,`Tenders for roads, plots, parking areas, paths and earthworks.`],[`Utilities and drainage`,`Projects for pipes, pumping stations, drainage, water and heating utilities.`],[`Paving and site works`,`Road construction, surface finishing, sidewalks and maintenance.`],[`Electrical contractors`,`Wiring, fire alarms, lighting, security systems and chargers.`],[`Cleaning and services`,`Recurring service contracts, facility services and operations work.`],[`Engineering and advisors`,`Design, supervision, consulting and project management where relevant.`]];return`
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
  `}function tt({t:e,escapeHtml:t,trialHref:n}){let r=[{key:`basic`,name:e(`pricingStarter`),price:`9.900 kr`,items:[e(`pricingWeeklyReport`),e(`pricingFiveMatches`),e(`pricingBasicMatching`),e(`pricingDeadlineReminders`),e(`pricingOneProfile`)]},{key:`pro`,name:e(`pricingGrowth`),price:`19.900 kr`,highlighted:!0,items:[e(`pricingEverythingStarter`),e(`pricingMoreSources`),e(`pricingSummaries`),e(`pricingLabels`),e(`pricingSaved`),e(`pricingArchive`)]},{key:`priority`,name:e(`pricingPro`),price:`29.900 kr`,items:[e(`pricingEverythingGrowth`),e(`pricingDocumentSummaries`),e(`pricingRequirements`),e(`pricingRiskWarnings`),e(`pricingBidChecklist`),e(`pricingPrioritySupport`)]}];return`
    <section class="page-head">
      <p class="eyebrow">${t(e(`pricingEyebrow`))}</p>
      <h1>${t(e(`pricingHeadline`))}</h1>
      <p>${t(e(`pricingSubtitle`))}</p>
    </section>

    <section class="pricing-grid">
      ${r.map(r=>nt(r,{t:e,escapeHtml:t,trialHref:n})).join(``)}
    </section>
  `}function nt(e,{t,escapeHtml:n,trialHref:r}){let i=!!e.highlighted,a=`${r}${String(r).includes(`?`)?`&`:`?`}plan=${encodeURIComponent(e.key||`basic`)}`;return`
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
  `}var rt=[`Reykjavík`,`Capital Area`,`Suðurnes`,`South Iceland`,`West Iceland`,`North Iceland`,`East Iceland`,`Westfjords`,`All Iceland`,`Remote / Online`];function it(e){let{t,escapeHtml:n,profileDraft:r,renderCustomDropdown:i,getFilterOptions:a}=e,o=r.industry||``;return`
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
  `}function at(e){let{t,escapeHtml:n,profileDraft:r,arrayFieldText:i,getProfileSuggestions:a,renderSuggestionChips:o}=e,s=r.industry||``,c=a(`services`,s),l=a(`includeKeywords`,s);return`
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
  `}function ot(e){let{t,escapeHtml:n,profileDraft:r,arrayFieldText:i,formatCustomerLocation:a}=e;return`
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
        ${rt.map(e=>`
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
  `}function st(e){let{t,escapeHtml:n,profileDraft:r}=e;return`
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
  `}function ct(e){let{t,escapeHtml:n,capitalize:r,profileDraft:i}=e;return`
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
  `}function lt(e){let{t,escapeHtml:n,hasProfile:r,isSavingProfile:i,profileSaved:a,profileSaveMessage:o,profileSaveError:s}=e,c=t(r?`saveProfile`:`createProfile`);return`
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
  `}function ut(e){return`
    <form id="profile-form" class="form-card settings-profile-form">
      ${it(e)}
      ${at(e)}
      ${ot(e)}
      ${st(e)}
      ${ct(e)}
      ${lt(e)}
    </form>
  `}function dt({report:e,title:t,created:n,itemLabel:r,statusLabel:i,hideLabel:a,viewLabel:o,escapeHtml:s}){return`
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
  `}function ft({report:e,options:t={},companyName:n,dateRange:r,generatedByLabel:i,reportTitleLabel:a,closeLabel:o,escapeHtml:s}){return`
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
  `}function pt({label:e,value:t,escapeHtml:n}){return`
    <div class="report-summary-card">
      <span>${n(e)}</span>
      <strong>${t}</strong>
    </div>
  `}function mt({title:e,description:t,opportunities:n,emptyText:r,renderOpportunityItem:i,escapeHtml:a}){return`
    <section class="report-section">
      <div class="report-section-head">
        <h3>${a(e)}</h3>
        <p>${a(t)}</p>
      </div>
      ${n.length?n.map(i).join(``):`<div class="report-empty">${a(r)}</div>`}
    </section>
  `}function ht({opp:e,valueText:t,deadlineText:n,sourceUrl:r,risks:i,fallbackReason:a,qualityBadgeHtml:o,matchBadgeClass:s,matchLabel:c,statusText:l,buyerLabel:u,buyerValue:d,sourceLabel:f,sourceValue:p,areaLabel:m,areaValue:h,deadlineLabel:ee,valueLabel:g,whyLabel:te,risksLabel:_,openSourceLabel:ne,sourceMissingLabel:re,formatReason:ie,formatRisk:ae,escapeHtml:v}){let y=(e.matchReasons.length?e.matchReasons:[a]).slice(0,4);return`
    <article class="report-item">
      <div class="report-item-top">
        ${o}
        <span class="${s}">${v(c)} ${e.matchScore}</span>
      </div>
      <h4>${v(e.title)}</h4>
      ${l?`<p class="report-item-status">${v(l)}</p>`:``}
      <div class="report-facts">
        <span><strong>${v(u)}</strong>${v(d)}</span>
        <span><strong>${v(f)}</strong>${v(p)}</span>
        <span><strong>${v(m)}</strong>${v(h)}</span>
        <span><strong>${v(ee)}</strong><em>${v(n)}</em></span>
        <span><strong>${v(g)}</strong><em>${v(t)}</em></span>
      </div>
      <div class="report-detail-grid">
        <div>
          <h5>${v(te)}</h5>
          <ul>${y.map(e=>`<li>${v(ie(e))}</li>`).join(``)}</ul>
        </div>
        <div>
          <h5>${v(_)}</h5>
          <ul>${i.slice(0,5).map(e=>`<li>${v(ae(e))}</li>`).join(``)}</ul>
        </div>
      </div>
      ${r?`<a class="report-source-link" href="${v(r)}" target="_blank" rel="noopener">${v(ne)} <span aria-hidden="true">↗</span></a>`:`<span class="report-source-link is-disabled">${v(re)}</span>`}
    </article>
  `}function gt({status:e,label:t,escapeHtml:n}){return`<span class="report-quality ${n(e)}">${n(t)}</span>`}function _t({t:e,escapeHtml:t,language:n,profileDraftDirty:r,profileLoadError:i,showDemoReset:a,profileFormHtml:o}){return`
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
  `}var vt=[[`Tender and opportunity report`,`Útboðs- og verkefnayfirlit`],[`Weekly Opportunity Report`,`Útboðs- og verkefnayfirlit`],[`Open tenders / quote requests`,`Opin útboð / verðfyrirspurnir`],[`Possible upcoming opportunities`,`Möguleg væntanleg tækifæri`],[`Needs review`,`Þarfnast staðfestingar`],[`Strong match`,`Sterk samsvörun`],[`Good match`,`Góð samsvörun`],[`Possible match`,`Möguleg samsvörun`],[`Weak match`,`Veik samsvörun`],[`Quality`,`Gæði`],[`Buyer`,`Kaupandi`],[`Source`,`Heimild`],[`Location`,`Svæði`],[`Deadline`,`Skilafrestur`],[`Estimated value`,`Áætlað verðmæti`],[`Value`,`Áætlað verðmæti`],[`Why this matters`,`Af hverju þetta gæti skipt máli`],[`Why this fits`,`Af hverju þetta gæti skipt máli`],[`Risks / things to check`,`Atriði til að staðfesta`],[`Open source`,`Opna heimild`],[`Unknown buyer`,`Óþekktur kaupandi`],[`All Iceland`,`Allt landið`],[`Not found`,`Fannst ekki`],[`Not listed`,`Ekki gefið upp`]];function yt(e,t){return t===`is`?vt.reduce((e,[t,n])=>e.replaceAll(t,n),String(e||``)):e}function bt(e){return Array.from(new Set((e||[]).map(e=>String(e||``).trim()).filter(Boolean)))}function xt(e){return String(e||``).replace(/^mentions your service:\s*/i,``).replace(/^contains your keyword:\s*/i,``).replace(/^mentions core service:\s*/i,``).replace(/^nefnir þjónustu ykkar:\s*/i,``).replace(/^inniheldur leitarorð:\s*/i,``).replace(/^nefnir lykilþjónustu:\s*/i,``).trim()}function x(e,t=`is`){let n=t!==`en`;return{downloadPdf:n?`Sækja PDF`:`Download PDF`,copyReportEmail:n?`Afrita skýrslupóst`:`Copy report email`,markAsSent:n?`Merkja sem sent`:`Mark as sent`,marking:n?`Merkir...`:`Marking...`,close:n?`Loka`:`Close`,sentStatus:n?`Sendingarstaða`:`Sent status`,notSent:n?`Ekki sent`:`Not sent`,sentOn:n?`Sent`:`Sent on`,company:n?`Fyrirtæki`:`Company`,period:n?`Tímabil`:`Period`,generatedAt:n?`Útbúið`:`Generated at`,mode:n?`Gerð`:`Mode`,items:n?`Fjöldi`:`Items`,currentActive:n?`Núverandi virk tækifæri`:`Current active opportunities`,newOpportunities:n?`Ný tækifæri`:`New opportunities`,reasons:n?`Ástæður`:`Reasons`,openSource:n?`Opna heimild`:`Open source`,verifyBadge:n?`Staðfesta gögn`:`Verify documents`,verifyTenderDocs:n?`Staðfesta útboðsgögn`:`Verify tender documents`,verificationSentence:n?`Staðfesta þarf útboðsgögn áður en brugðist er við.`:`Tender documents should be verified before taking action.`,matchScore:n?`Samsvörun`:`Match`,strongMatchScore:n?`Sterk samsvörun`:`Strong match`,openActiveTitle:n?`Opin útboð / virk tækifæri`:`Open tenders / active opportunities`,openActiveDescription:n?`Opin útboð eða virk verðfyrirspurnaratriði með skilafresti. Yfirfarið frumgögn áður en brugðist er við.`:`Open tenders or active quote-request items with deadlines. Review source documents before acting.`,possibleTitle:n?`Möguleg tækifæri til skoðunar`:`Possible opportunities to review`,possibleDescription:n?`Tækifæri sem gætu átt við, en þar sem þarf að staðfesta umfang, kröfur eða hlutverk fyrirtækisins.`:`Opportunities that may fit, but where scope, requirements, or company role should be verified.`,earlyTitle:n?`Væntanleg verkefni / early signals`:`Upcoming projects / early signals`,earlyDescription:n?`Vísbendingar um möguleg framtíðarverkefni sem eru ekki endilega formleg útboð ennþá.`:`Signals for possible future projects that may not be formal tenders yet.`}[e]||e}function St(e=`is`){return x(`verificationSentence`,e)}function Ct(e,t=`is`){let n=Number(e?.matchScore||e?.match_score||0)>=85;return t===`en`?n?`Strong match`:`Match`:n?`Sterk samsvörun`:`Samsvörun`}function wt(e,t=`is`){let n=String(e?.aiReviewFit||e?.ai_review_fit||``).toLowerCase()===`strong`||Number(e?.matchScore||e?.match_score||0)>=85;return t===`en`?n?`Recommended — tender documents should be verified`:`Possible opportunity — tender documents should be verified`:n?`Mælt með — staðfesta þarf útboðsgögn`:`Mögulegt tækifæri — staðfesta þarf útboðsgögn`}function Tt(e,t=`is`){let n=String(e?.aiReviewFit||e?.ai_review_fit||``).toLowerCase();return t===`en`?n===`strong`||Number(e?.matchScore||0)>=85?`Recommended`:n===`possible`?`Possible opportunity`:String(e?.reportSection||``)===`early`?`Upcoming signal`:`Verify documents`:n===`strong`||Number(e?.matchScore||0)>=85?`Mælt með`:n===`possible`?`Mögulegt tækifæri`:String(e?.reportSection||``)===`early`?`Væntanlegt / merki`:`Staðfesta útboðsgögn`}function Et(e=[],t=`is`){let n=[],r=new Set;for(let i of e||[]){let e=String(i||``).trim();if(!e)continue;let a=e.toLowerCase();if(a.includes(`winter/snow service fit`)){n.push(t===`is`?`Passar við vetrarþjónustu/snjómokstur; staðfestið umfang og getu.`:`Winter/snow service fit; verify capacity and scope.`);continue}if(a.includes(`deadline is valid and in the future`)){n.push(t===`is`?`Skilafrestur er í framtíðinni.`:`Deadline is valid and in the future.`);continue}if(a.includes(`location matches company service areas`)){n.push(t===`is`?`Staðsetning passar við þjónustusvæði.`:`Location matches company service areas.`);continue}if(a.includes(`verify capacity and scope`)){n.push(t===`is`?`Staðfestið umfang og getu.`:`Verify capacity and scope.`);continue}let o=xt(e),s=o.toLowerCase();if(!o||r.has(s))continue;r.add(s);let c=t===`is`&&/passar|nefnir|stað|skilafrestur|þjónustu|umfang/i.test(o);n.push(t===`is`?c?o:`Passar við þjónustu eða leitarorð: ${o}`:/matches|mentions|deadline|location|verify/i.test(o)?o:`Matches service or keyword: ${o}`)}return bt(n).slice(0,4)}function Dt(e,t=`is`){let n=String(e||``).trim();if(!n)return``;let r=n.toLowerCase();if(t!==`en`){if(r.includes(`deadline not available`))return`Skilafrestur fannst ekki í innfluttum gögnum — staðfestið á upprunasíðu.`;if(r.includes(`open the source documents`))return`Opna útboðsgögn.`;if(r.includes(`confirm mandatory requirements`))return`Staðfesta kröfur og hæfisskilyrði.`;if(r.includes(`check capacity and profitability`))return`Meta getu og arðsemi.`;if(r.includes(`prepare questions before the deadline`))return`Undirbúa fyrirspurnir fyrir skilafrest.`;if(r.includes(`verify capacity and scope`))return`Staðfestið umfang og getu.`}return n}function Ot({companyName:e,matches:t,language:n=`is`}){let r=n!==`en`,i=r?`Sæll/Sæl,

VerkRadar fann eftirfarandi tækifæri sem gætu passað við ykkar þjónustu:`:`Hi,

VerkRadar found the following opportunities that may fit your services:`,a=r?`Staðfestið alltaf útboðsgögn, skilafresti og kröfur á upprunalegri heimild áður en brugðist er við.

Kv.
Kristján`:`Always verify the tender documents, deadlines, requirements, and eligibility on the original source before taking action.

Best,
Kristján`;return`${i}\n\n${(t||[]).map(e=>{let t=Et(e.matchReasons||e.reasons||[],n),i=t.length?t.map(e=>`- ${e}`).join(`
`):`- ${r?`Passar við fyrirtækjaprófílinn.`:`Matches the company profile.`}`;return r?`${e.title}
Útboðsaðili: ${e.buyer||`Óþekktur kaupandi`}
Skilafrestur: ${e.deadline||`Fannst ekki`}
Staða: ${wt(e,n)}

Af hverju þetta gæti passað:
${i}

Heimild:
${e.url||`Engin heimild skráð`}`:`${e.title}
Buyer: ${e.buyer||`Unknown buyer`}
Deadline: ${e.deadline||`Not found`}
Status: ${wt(e,n)}

Why this may fit:
${i}

Source:
${e.url||`No source URL listed`}`}).join(`

`)||(r?`Engin atriði eru í þessu yfirliti.`:`No items are included in this report.`)}\n\n${a}`}function kt(e){return String(e||``).toLowerCase()}function At(e){return Array.isArray(e)?e.map(e=>String(e||``).trim()).filter(Boolean):[]}function jt(e){return Array.from(new Set((e||[]).map(e=>String(e||``).trim()).filter(Boolean)))}function Mt(e){return e?new Date(e).getTime():NaN}function Nt(e){let t=Mt(e);if(Number.isNaN(t))return!0;let n=new Date;return n.setHours(0,0,0,0),t<n.getTime()}function Pt(e={}){return{aiReviewFit:kt(e.fit),aiReviewConfidence:Number(e.confidence||0),aiReviewSendToClient:e.send_to_client===!0||e.sendToClient===!0,aiReviewReason:String(e.reason||``),aiFitReasons:At(e.fit_reasons||e.fitReasons),aiRisksOrQuestions:At(e.risks_or_questions||e.risksOrQuestions),aiSuggestedClientSummary:String(e.suggested_client_summary||e.suggestedClientSummary||``),aiReviewedAt:e.updated_at||e.created_at||``}}function Ft(e,t){let n=new Map;for(let e of t||[]){let t=String(e.opportunity_id||e.opportunityId||``);t&&n.set(t,Pt(e))}return(e||[]).map(e=>{let t=n.get(String(e.id||e.opportunity_id||``));return t?{...e,...t,matchReasons:jt([t.aiSuggestedClientSummary,...t.aiFitReasons,...Array.isArray(e.matchReasons)?e.matchReasons:[]]),risks:jt([...t.aiRisksOrQuestions,...Array.isArray(e.risks)?e.risks:[]])}:e})}function It(e){return Lt(e)!==`excluded`}function Lt(e){let t=kt(e?.aiReviewFit||e?.ai_review_fit);if(!e?.deadline||Nt(e.deadline))return`excluded`;let n=e?.aiReviewSendToClient===!0||e?.ai_review_send_to_client===!0;if(String(e?.aiReviewSkippedReason||e?.ai_review_skipped_reason||``).toLowerCase()===`outside_service_area`||[e?.aiReviewReason,...At(e?.aiRisksOrQuestions||e?.risks_or_questions)].join(` `).toLowerCase().includes(`outside service area`))return`excluded`;if(t)return[`weak`,`no_fit`].includes(t)?`excluded`:t===`strong`&&n?`ai_strong`:t===`possible`&&n?`ai_possible`:`excluded`;let r=String(e?.safetyStatus||e?.safety_status||`auto_approved`).toLowerCase();if(r===`hidden`||r===`needs_review`)return`excluded`;let i=Number(e?.matchScore||e?.match_score||0),a=String(e?.matchLabel||e?.match_label||``).toLowerCase();return i>=75||a.includes(`strong`)||a.includes(`good`)?`rule_fallback`:`excluded`}function Rt(e){let t=Lt(e);return zt(e)&&(t===`ai_strong`||t===`ai_possible`||t===`rule_fallback`)?`confirmed`:t===`ai_possible`||t===`rule_fallback`?`early`:`excluded`}function zt(e){return!!e?.deadline&&!Nt(e.deadline)}function Bt(e){return[...e||[]].filter(It).sort((e,t)=>{let n={ai_strong:0,ai_possible:1,rule_fallback:2},r=Lt(e),i=Lt(t);return(n[r]??9)-(n[i]??9)||Number(t.aiReviewConfidence||t.ai_review_confidence||0)-Number(e.aiReviewConfidence||e.ai_review_confidence||0)||Number(t.matchScore||t.match_score||0)-Number(e.matchScore||e.match_score||0)||Mt(e.deadline)-Mt(t.deadline)})}function S(e){if(!e)return 999;let t=new Date,n=new Date(`${e}T00:00:00`);if(Number.isNaN(n.getTime()))return 999;let r=n-new Date(t.getFullYear(),t.getMonth(),t.getDate());return Math.ceil(r/(1e3*60*60*24))}function Vt(e){if(!e)return`No deadline`;let t=new Date(`${e}T00:00:00`);return Number.isNaN(t.getTime())?String(e):new Intl.DateTimeFormat(`en-GB`,{year:`numeric`,month:`short`,day:`2-digit`}).format(t)}function C(e){return e?new Intl.DateTimeFormat(`en-GB`,{year:`numeric`,month:`short`,day:`2-digit`}).format(new Date(e)):`Unknown date`}function Ht(e){return Array.from(new Set((e||[]).map(e=>String(e||``).trim()).filter(Boolean)))}function Ut(e){return String(e||``).split(`,`).map(e=>e.trim()).filter(Boolean)}function w(e){return Ht(Array.isArray(e)?e:Ut(e))}function Wt(e){return Ut(e)}function T(e){return String(e||``).toLowerCase().normalize(`NFD`).replace(/[\u0300-\u036f]/g,``).replace(/æ/g,`ae`).replace(/[ðþ]/g,e=>e===`ð`?`d`:`th`).replace(/[^a-z0-9]+/g,` `).trim()}function E(e){return String(e??``).replaceAll(`&`,`&amp;`).replaceAll(`<`,`&lt;`).replaceAll(`>`,`&gt;`).replaceAll(`"`,`&quot;`).replaceAll(`'`,`&#039;`)}function Gt(e){return String(e||``).charAt(0).toUpperCase()+String(e||``).slice(1)}function Kt(e){return/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(String(e||``))}function qt(e){let t=String(e||``).trim();return/^https?:\/\//i.test(t)?t:``}function Jt(e,t=`ISK`){if(!e)return``;let n=t||`ISK`,r=n===`ISK`?`kr`:n;return`${new Intl.NumberFormat(`is-IS`).format(e)} ${r}`}function Yt(e,t){let n=t||(e=>e);return{"Confirmed tender":n(`confirmedTender`),"Likely opportunity":n(`likelyOpportunity`),"Early signal":n(`earlySignal`),"Needs review":n(`needsReview`),"Tender awarded":n(`tenderAwarded`),"Tender already announced":n(`tenderAlreadyAnnounced`),"Upcoming tender":n(`upcomingTender`),"Project signal":n(`projectSignal`),"Original language":n(`originalLanguage`)}[e]||e||``}function Xt(e,t){let n=t||(e=>e);return{"Strong match":n(`strongMatch`),"Good match":n(`goodMatch`),"Possible match":n(`possibleMatch`),"Weak match":n(`weakMatch`)}[e]||e||``}function Zt(e,t,n){let r=n||(e=>e),i=String(t||``).trim();return i?e===`buyer`&&(Qt(i)||i.toLowerCase()===`unknown buyer`)?r(`unknownBuyer`):e===`location`&&i.toLowerCase()===`all iceland`?r(`allIceland`):e===`source`?i.replace(/\bprocurement\b/gi,r(`procurement`)):i:r(e===`buyer`?`unknownBuyer`:`notListed`)}function Qt(e){let t=T(e);return!!(!t||[`admin`,`administrator`,`ritstjori`,`editor`,`noreply`,`no reply`,`wordpress`,`wp admin`,`user`,`test`].includes(t)||t.includes(`noreply`)||/^wp\s*[-_]?\s*\d+$/.test(t))}function $t(e){let t=T(e);return t?t.includes(`borgarbyggd`)?`Borgarbyggð`:t.includes(`akranes`)?`Akraneskaupstaður`:t.includes(`faxafloahafnir`)?`Faxaflóahafnir`:t.includes(`gardabaer`)?`Garðabær`:t.includes(`reykjanesbaer`)?`Reykjanesbær`:t.includes(`kopavogur`)?`Kópavogur`:t.includes(`hafnarfjordur`)?`Hafnarfjarðarbær`:t.includes(`mosfellsbaer`)?`Mosfellsbær`:t.includes(`arborg`)?`Sveitarfélagið Árborg`:t.includes(`fjardabyggd`)?`Fjarðabyggð`:t.includes(`mulathing`)?`Múlaþing`:t.includes(`garðabaer`)?`Garðabær`:(t.includes(`rikiskaup`)||t.includes(`utbodsvefur`),``):``}function en(e,t,n={}){let r=String(e||``).trim();if(/reykjavíkurborg/i.test(r))return`Reykjavíkurborg`;if(r&&!Qt(r)&&r.toLowerCase()!==`unknown buyer`)return r;let i=String(n.extracted_buyer||n.buyer||``).trim();return/reykjavíkurborg/i.test(i)?`Reykjavíkurborg`:i&&!Qt(i)&&i.toLowerCase()!==`unknown buyer`?i:$t(t)||`Unknown buyer`}function tn(e){let t=T(e);return t?t.includes(`borgarbyggd`)?`Borgarbyggð / Vesturland`:t.includes(`akranes`)?`Akranes / Vesturland`:t.includes(`faxafloahafnir`)?`Höfuðborgarsvæðið`:t.includes(`arborg`)?`Árborg / Suðurland`:``:``}function nn(e,t,n){let r=String(e||``).trim();return t===`is`&&{"Capital Area":`Höfuðborgarsvæðið`,"South Iceland":`Suðurland`,"West Iceland":`Vesturland`,"North Iceland":`Norðurland`,"East Iceland":`Austurland`,Westfjords:`Vestfirðir`,"All Iceland":(n||(e=>e))(`allIceland`),"Remote / Online":`Fjarvinna / netverkefni`}[r]||r}function rn(e,t,{language:n=`en`,translate:r}={}){let i=r||(e=>e),a=Zt(e,t,i);if(n!==`is`)return a;let o=String(a||``).trim().toLowerCase();return{"public procurement":i(`publicProcurement`),procurement:i(`procurement`),tender:i(`tender`)}[o]||a.replace(/\bpublic procurement\b/gi,i(`publicProcurement`)).replace(/\btender\b/gi,i(`tender`))}function an(e,{language:t=`en`,translate:n}={}){let r=n||((e,t={})=>t.value?`${e}: ${t.value}`:e),i=String(e||``);return i.startsWith(`Mentions your service:`)?r(`mentionsService`,{value:i.slice(22).trim()}):i.startsWith(`Contains your keyword:`)?r(`containsKeyword`,{value:i.slice(22).trim()}):{"National opportunity":r(`nationalOpportunity`),"Local match":r(`localMatch`),"Located in your selected region":r(`localMatch`),"Project value is inside your preferred range":t===`is`?`Áætlað verðmæti er innan óskaðs bils`:`Project value is inside your preferred range`,"Deadline is coming up soon":t===`is`?`Skilafrestur nálgast`:`Deadline is coming up soon`,"Matched to your company profile.":t===`is`?`Passar við fyrirtækjaprófílinn.`:`Matched to your company profile.`,"Matched to your profile by service, location or keyword overlap.":t===`is`?`Passar við þjónustu, svæði eða lykilorð í prófílnum.`:`Matched to your profile by service, location or keyword overlap.`}[i]||i||``}function on(e,t=`en`){return t===`is`?{"Deadline not available in feed — verify on source page.":`Skilafrestur fannst ekki í innfluttum gögnum — staðfestið á upprunasíðu.`,"Deadline not available in imported data — verify on source page.":`Skilafrestur fannst ekki í innfluttum gögnum — staðfestið á upprunasíðu.`,"Deadline not available in source — verify page.":`Skilafrestur fannst ekki í heimild - staðfestið á upprunalegri síðu.`,"No formal tender deadline extracted — verify source article.":`Formlegur skilafrestur fannst ekki - staðfestið í heimildargrein.`,"Formal tender deadline not found yet — monitor source article.":`Formlegur skilafrestur fannst ekki enn - fylgist með heimildargrein.`,"Tender appears already announced/awarded — verify source article.":`Útboð virðist þegar auglýst eða afgreitt - staðfestið í heimildargrein.`,"Estimated value is not listed in the imported data.":`Áætlað verðmæti er ekki gefið upp í innfluttum gögnum.`,"Open the source page and confirm mandatory requirements.":`Opnið upprunalega heimild og staðfestið skyldukröfur.`,"Extracted project signal — verify tender timing in the source article.":`Útdregin verkefnavísbending - staðfestið útboðstímasetningu í heimildargrein.`,"Imported from broad feed — verify that this is a real tender or business opportunity.":`Innflutt úr breiðum fréttastraumi - staðfestið að þetta sé raunverulegt útboð eða viðskiptatækifæri.`}[e]||e||``:e||``}function sn(e,t=`en`){return t===`is`?{"Open the source documents":`Opna útboðsgögn`,"Confirm mandatory requirements":`Staðfesta kröfur og hæfisskilyrði`,"Check capacity and profitability":`Meta getu og arðsemi`,"Prepare questions before the deadline":`Undirbúa fyrirspurnir fyrir skilafrest`,"Open source documents and confirm requirements.":`Opna útboðsgögn og staðfesta kröfur.`}[e]||e||``:e||``}var cn=`Deadline not available in imported data — verify on source page.`,ln=`No formal tender deadline extracted — verify source article.`;function un(){return n(e)}function D(e,t={}){return r(O?.language||`is`,e,t)}function dn(t){O.language=t===`en`?`en`:`is`,localStorage.setItem(e.language,O.language),Z()}var fn=a,pn=12e3;function mn(){return o(O.user?.email||``)}var O={route:location.hash.replace(`#`,``)||`/`,language:un(),pendingSignupPlan:xn(location.hash.replace(`#`,``)||`/`)||vn(),pendingInviteToken:p(location.hash.replace(`#`,``)||`/`)||m(),invitePreview:null,invitePreviewLoading:!1,invitePreviewError:null,invitePreviewErrorToken:``,inviteAccepting:!1,user:null,currentUser:null,isAdmin:!1,authLoading:!0,isBooting:!0,authLoaded:!1,profileLoaded:!1,adminLoaded:!1,bootError:null,authMessage:null,authForm:{email:``,password:``,newPassword:``,confirmPassword:``},authSubmitting:!1,isSavingProfile:!1,profileSaved:!1,profileSaveMessage:null,profileSaveError:null,profile:null,companyMembership:null,profileDraft:null,profileDraftDirty:!1,profileLoading:!1,profileLoadError:null,companyId:null,opportunities:[],storedMatches:[],opportunityActions:[],saved:Ri(e.saved),ignored:Ri(e.ignored),filters:{search:``,label:`recommended`,category:`all`,location:`all`,type:`all`,savedOnly:!1},tedImportMode:`nordic`,dropdown:{openKey:null,focusedIndex:0},importStatus:null,importLoading:!1,connectorImportStatus:null,connectorImportLoading:!1,connectorTestingSourceId:null,importedTedOpportunities:[],importedTedOpportunitiesLoading:!1,importedTedOpportunitiesLoaded:!1,importedTedOpportunitiesError:null,importRuns:[],importRunsLoading:!1,importRunsLoaded:!1,importRunsError:null,adminReports:[],adminReportsLoading:!1,adminReportsLoaded:!1,adminReportsError:null,selectedAdminReport:null,selectedAdminReportLoading:!1,selectedAdminReportError:null,sourceCoverage:[],sourceCoverageLoading:!1,sourceCoverageLoaded:!1,sourceCoverageError:null,expandedSourceId:null,adminCompanies:[],adminCompaniesLoading:!1,adminCompaniesLoaded:!1,adminCompaniesError:null,adminReviewMatches:[],adminReviewLoading:!1,adminReviewLoaded:!1,adminReviewError:null,adminReviewActions:{},adminAiReviewActions:{},adminAiReviewError:null,adminCompanyAiReviewActions:{},adminCompanyAiReviewResults:{},adminCompanyAiReviewFilter:`not_reviewed`,adminCompanyActions:{},adminCompanyAccessActions:{},adminCompanyInviteDrafts:{},adminCompanyInviteLinks:{},adminReportDeliveryActions:{},selectedAdminCompanyId:null,adminActiveTab:`overview`,adminCompanyFilters:{search:``,industry:`all`,profileStatus:`all`,plan:`all`},adminReportMode:`all_current`,adminOpportunityFilters:{source:`all`,missingDeadlineSource:`all`,status:`all`,country:`all`,search:``,debugCompanyId:``,tedOnly:!1,manualOnly:!1,showDemoTest:!1},adminOpportunityDraft:Tn(),matchStatus:null,matchingLoading:!1,lastMatchedAt:null,reports:[],reportsLoaded:!1,reportsLoadError:null,reportArchiveLoading:!1,reportSaveLoading:!1,reportMessage:null,selectedReportId:null,selectedAdminReportId:null,adminMessage:null,adminSubmitting:!1,adminDeletingId:null,adminUpdatingId:null,isLoadingOpportunities:!1,opportunityLoadError:null,isMobileMenuOpen:!1,profileMenuOpen:!1,selectedOpportunityId:null,toast:null};function hn(e=O.route){return String(e||`/`).split(`?`)[0]||`/`}function gn(e=O.route){let t=String(e||``).split(`?`)[1]||``;return new URLSearchParams(t)}function _n(e){let t=String(e||``).trim().toLowerCase();return[`basic`,`pro`,`priority`].includes(t)?t:``}function vn(){try{return _n(localStorage.getItem(e.selectedPlan))}catch{return``}}function yn(t){let n=_n(t);try{n&&localStorage.setItem(e.selectedPlan,n)}catch{}return n}function bn(){try{localStorage.removeItem(e.selectedPlan)}catch{}}function xn(e=O.route){return _n(gn(e).get(`plan`))}function Sn(e=O.route){let t=xn(e);t&&(O.pendingSignupPlan=yn(t))}function Cn(e=O.route){let t=p(e);t&&t!==O.pendingInviteToken&&(O.pendingInviteToken=h(t),O.invitePreview=null,O.invitePreviewError=null,O.invitePreviewErrorToken=``)}function k(e){let t=O.pendingInviteToken||p(O.route);return t?`${e}?invite=${encodeURIComponent(t)}`:e}`scrollRestoration`in history&&(history.scrollRestoration=`manual`);function wn(){localStorage.removeItem(`verkradar_profile`),localStorage.removeItem(`verkradar_local_user_id`),localStorage.removeItem(`verkradar_saved_opportunities`),localStorage.removeItem(`verkradar_ignored_opportunities`),O.profile=null,O.profileDraft=null,O.profileDraftDirty=!1,O.currentUser=null,O.companyId=null,O.storedMatches=[],O.opportunityActions=[],O.reports=[],O.reportsLoaded=!1,O.reportsLoadError=null,O.reportMessage=null,O.selectedReportId=null,O.profileSaved=!1,O.profileSaveMessage=null,O.profileSaveError=null,O.saved=[],O.ignored=[],O.importRuns=[],O.importRunsLoading=!1,O.importRunsLoaded=!1,O.importRunsError=null,O.importedTedOpportunities=[],O.importedTedOpportunitiesLoading=!1,O.importedTedOpportunitiesLoaded=!1,O.importedTedOpportunitiesError=null,O.adminReports=[],O.adminReportsLoading=!1,O.adminReportsLoaded=!1,O.adminReportsError=null,O.selectedAdminReport=null,O.selectedAdminReportLoading=!1,O.selectedAdminReportError=null,O.sourceCoverage=[],O.sourceCoverageLoading=!1,O.sourceCoverageLoaded=!1,O.sourceCoverageError=null,O.adminCompanies=[],O.adminCompaniesLoading=!1,O.adminCompaniesLoaded=!1,O.adminCompaniesError=null,O.selectedAdminCompanyId=null,O.lastMatchedAt=null}function Tn(){return{title:``,buyer:``,sourceName:``,category:``,type:`tender`,deadline:``,published_date:``,location:``,estimated_value:``,url:``,cpv_code:``,difficulty:`medium`,status:`open`,description:``,requirements:``,keywords:``}}function En(e){let t=Tn();Object.keys(t).forEach(n=>{t[n]=String(e.get(n)||``)}),O.adminOpportunityDraft=t}var Dn=!1;window.addEventListener(`hashchange`,()=>{let e=location.hash.replace(`#`,``)||`/`,t=hn(e),n=e!==O.route;if(Dn&&e===O.route){Dn=!1;return}Dn=!1,[`/login`,`/signup`,`/forgot-password`,`/reset-password`].includes(t)&&e!==O.route&&(O.authMessage=null,O.authSubmitting=!1),O.route=e,Sn(e),Cn(e),O.isMobileMenuOpen=!1,O.profileMenuOpen=!1,n&&eo(),document.body.classList.remove(`mobile-menu-active`),Z(),Vn(),j()}),document.addEventListener(`click`,e=>{if(O.dropdown.openKey&&!e.target.closest?.(`.custom-select`)&&Ps(),O.profileMenuOpen&&!e.target.closest?.(`.profile-menu`)&&(O.profileMenuOpen=!1,Z()),e.target.classList?.contains(`modal-backdrop`)){if(e.preventDefault(),O.selectedAdminCompanyId){O.selectedAdminCompanyId=null,Z();return}$a();return}if(O.isMobileMenuOpen&&!e.target.closest?.(`.site-header`)){An();return}let t=e.target.closest?.(`[data-action]`);if(!t)return;let n=t.dataset.action,r=t.dataset.id;if(n===`close-modal`){if(e.preventDefault(),e.stopPropagation(),O.selectedAdminCompanyId){O.selectedAdminCompanyId=null,Z();return}$a();return}if(n===`toggle-mobile-menu`){e.preventDefault(),O.isMobileMenuOpen?An():kn();return}if(n===`mobile-nav`){e.preventDefault(),jn(t.dataset.href);return}if(n===`mobile-scroll-to`){e.preventDefault(),Mn(t.dataset.target);return}if(n===`toggle-profile-menu`){if(e.preventDefault(),O.isMobileMenuOpen||Nn()){O.profileMenuOpen=!1,Z();return}O.profileMenuOpen=!O.profileMenuOpen,Z();return}if(n===`toggle-language`){e.preventDefault(),dn(O.language===`is`?`en`:`is`);return}if(n===`toggle-dropdown`){e.preventDefault();let n=t.dataset.key,r=O.dropdown.openKey===n;O.dropdown.openKey=r?null:n,O.dropdown.focusedIndex=js(n),Z(),r||Fs();return}if(n===`select-filter`){e.preventDefault();let n=t.dataset.key,r=t.dataset.value;t.dataset.profileField?(W(),O.profileDraft[t.dataset.profileField]=r,G()):O.filters[n]=r,O.dropdown.openKey=null,O.dropdown.focusedIndex=0,Z();return}if(n===`toggle-profile-suggestion`){e.preventDefault(),Wi(t.dataset.field,t.dataset.value);return}if(n===`scroll-to`){e.preventDefault(),O.isMobileMenuOpen=!1,O.profileMenuOpen=!1,document.body.classList.remove(`mobile-menu-active`);let n=t.dataset.target;if(!n)return;O.route===`/`?(Z(),setTimeout(()=>Hn(n),0)):(A(`/`),setTimeout(()=>Hn(n),50));return}if(n===`go`){e.preventDefault(),O.isMobileMenuOpen=!1,O.profileMenuOpen=!1,document.body.classList.remove(`mobile-menu-active`),A(t.dataset.href);return}if(n===`accept-company-invite`){Ro();return}if(n===`save`&&Ya(r),n===`ignore`&&Xa(r),n===`unignore`&&Za(r),n===`details`&&Qa(r),n===`admin-report-override`){Ni(r,t.dataset.override||``);return}if(n===`copy-report`&&Pl(),n===`download-report-pdf`&&Fl(),n===`download-admin-report-pdf`){Il();return}if(n===`save-report`&&Di(),n===`archive-report`){Oi(r);return}if(n===`view-report`&&(O.selectedReportId=r,Z()),n===`close-archive-report`&&(O.selectedReportId=null,Z()),n===`view-admin-report`){O.selectedAdminReportId=r,O.selectedAdminReport=null,O.selectedAdminReportError=null,O.adminActiveTab=`reports`,Z(),Gn(r);return}if(n===`close-admin-report`){O.selectedAdminReportId=null,O.selectedAdminReport=null,O.selectedAdminReportError=null,Z();return}if(n===`copy-admin-report`){ps(r);return}if(n===`mark-admin-report-sent`){ms(r);return}if(n===`admin-tab`&&(O.adminActiveTab=t.dataset.tab||`overview`,O.selectedAdminCompanyId=null,O.selectedAdminReportId=null,Z()),n===`view-admin-company`&&(O.selectedAdminCompanyId=r,Z()),n===`close-admin-company`&&(O.selectedAdminCompanyId=null,Z()),n===`admin-refresh-company-matches`){ar(r);return}if(n===`admin-generate-company-report`){or(r);return}if(n===`admin-review-match`){sr(r,t.dataset.companyId||``,t.dataset.reviewAction||``);return}if(n===`admin-ai-review-match`){cr(r,{force:t.dataset.force===`true`});return}if(n===`admin-ai-review-company`){lr(r,{force:t.dataset.force===`true`});return}if(n===`admin-run-auto-ai-review`){ur();return}if(n===`admin-run-daily-pipeline`){dr();return}if(n===`admin-toggle-company-auto-ai`){fr(r,t.dataset.enabled===`true`);return}if(n===`admin-invite-company-customer`){nr(r);return}if(n===`admin-revoke-company-access`){rr(r,t.dataset.memberId||``);return}if(n===`admin-copy-company-invite-link`){ir(r);return}if(n===`import-ted`&&Xr(),n===`import-source-connectors`&&Zr(),n===`test-source-connector`&&Zr(r),n===`toggle-source-items`&&(O.expandedSourceId=O.expandedSourceId===r?null:r,Z()),n===`refresh-admin-status`&&gr(),n===`hide-imported-opportunity`&&Mi(r,`hidden`),n===`mark-imported-relevant`&&Mi(r,`open`),n===`run-matching`&&ki(),n===`retry-settings-profile`&&vi(),n===`show-all-matches`&&(O.filters.label=`all`,Z()),n===`show-all-opportunities`&&(O.filters.label=`all_opportunities`,Z()),n===`include-national-opportunities`&&(W(),O.profileDraft.nationalProjects=!0,O.profileDraft.locations.includes(`All Iceland`)||(O.profileDraft.locations=[...O.profileDraft.locations,`All Iceland`]),G(),A(`/settings`)),n===`delete-opportunity`&&ji(r),n===`logout`){if(O.profileMenuOpen=!1,O.isMobileMenuOpen){An(()=>ci());return}ci()}n===`load-demo`&&(O.user?Ci(fn).then(()=>A(`/dashboard`)).catch(e=>{console.error(`Failed to load demo profile:`,e),O.profileSaveError=H(e),Z()}):(Li(fn),O.profile=fn,A(`/dashboard`))),n===`reset`&&(wn(),A(`/`))}),document.addEventListener(`keydown`,e=>{if(e.key===`Escape`&&O.isMobileMenuOpen){e.preventDefault(),An();return}if(e.key===`Escape`&&O.profileMenuOpen){e.preventDefault(),O.profileMenuOpen=!1,Z();return}if(e.key===`Escape`&&O.selectedOpportunityId){e.preventDefault(),$a();return}if(e.key===`Escape`&&O.selectedAdminCompanyId){e.preventDefault(),O.selectedAdminCompanyId=null,Z();return}let t=e.target.closest?.(`.custom-select`),n=t?.dataset.key||O.dropdown.openKey;if(!n)return;let r=As(n),i=O.dropdown.openKey===n;if(e.key===`Escape`&&i){e.preventDefault(),Ps(),Is(n);return}if((e.key===`ArrowDown`||e.key===`ArrowUp`)&&!i){e.preventDefault(),O.dropdown.openKey=n,O.dropdown.focusedIndex=js(n),Z(),Fs();return}if(i){if(e.key===`ArrowDown`||e.key===`ArrowUp`){e.preventDefault();let t=e.key===`ArrowDown`?1:-1;O.dropdown.focusedIndex=(O.dropdown.focusedIndex+t+r.length)%r.length,Z(),Fs();return}if(e.key===`Enter`||e.key===` `){e.preventDefault();let i=r[O.dropdown.focusedIndex];if(!i)return;let a=t?.querySelector?.(`[data-profile-field]`)?.dataset.profileField;a?(W(),O.profileDraft[a]=i.value,G()):O.filters[n]=i.value,O.dropdown.openKey=null,O.dropdown.focusedIndex=0,Z(),Is(n)}}}),document.addEventListener(`input`,e=>{let t=e.target.closest?.(`[data-auth-field]`);if(t){O.authForm[t.dataset.authField]=t.value;return}let n=e.target.closest?.(`[data-profile-field]`);if(n){W();let e=n.dataset.profileField;n.type===`checkbox`?O.profileDraft[e]=n.checked:n.dataset.profileArray===`true`?O.profileDraft[e]=Ut(n.value):(n.dataset.profileNumber,O.profileDraft[e]=n.value),G();return}if(e.target.matches(`[data-filter]`)){let t=e.target.dataset.filter;e.target.type===`checkbox`?O.filters[t]=e.target.checked:O.filters[t]=e.target.value,Z()}if(e.target.matches(`[data-admin-filter]`)){let t=e.target.dataset.adminFilter;e.target.type===`checkbox`?(O.adminOpportunityFilters[t]=e.target.checked,t===`tedOnly`&&e.target.checked&&(O.adminOpportunityFilters.manualOnly=!1),t===`manualOnly`&&e.target.checked&&(O.adminOpportunityFilters.tedOnly=!1)):O.adminOpportunityFilters[t]=e.target.value,po(e.target);return}if(e.target.matches(`[data-admin-opportunity-field]`)){let t=e.target.dataset.adminOpportunityField;O.adminOpportunityDraft={...Tn(),...O.adminOpportunityDraft||{},[t]:e.target.value};return}if(e.target.matches(`[data-admin-company-filter]`)){let t=e.target.dataset.adminCompanyFilter;O.adminCompanyFilters[t]=e.target.value,po(e.target);return}if(e.target.matches(`[data-admin-company-invite-email]`)){let t=e.target.dataset.id||``;t&&(O.adminCompanyInviteDrafts={...O.adminCompanyInviteDrafts||{},[t]:e.target.value});return}e.target.matches(`[data-admin-report-mode]`)&&(O.adminReportMode=e.target.value===`all_current`?`all_current`:`new_only`,Z()),e.target.matches(`[data-admin-company-ai-filter]`)&&(O.adminCompanyAiReviewFilter=e.target.value||`not_reviewed`,po(e.target))}),document.addEventListener(`change`,e=>{if(e.target.matches(`[data-admin-filter]`)){let t=e.target.dataset.adminFilter;e.target.type===`checkbox`?(O.adminOpportunityFilters[t]=e.target.checked,t===`tedOnly`&&e.target.checked&&(O.adminOpportunityFilters.manualOnly=!1),t===`manualOnly`&&e.target.checked&&(O.adminOpportunityFilters.tedOnly=!1)):O.adminOpportunityFilters[t]=e.target.value,po(e.target);return}if(e.target.matches(`[data-import-mode]`)){O.tedImportMode=e.target.value,Z();return}if(e.target.matches(`[data-admin-company-ai-filter]`)){O.adminCompanyAiReviewFilter=e.target.value||`not_reviewed`,po(e.target);return}if(e.target.matches(`[data-profile-location]`)){W(),O.profileDraft.locations=Array.from(document.querySelectorAll(`[data-profile-location]:checked`)).map(e=>e.value),G();return}let t=e.target.closest?.(`[data-profile-field]`);if(!t)return;W();let n=t.dataset.profileField;O.profileDraft[n]=t.type===`checkbox`?t.checked:t.value,G()}),document.addEventListener(`submit`,async e=>{if(e.target.id===`login-form`){e.preventDefault();let t=new FormData(e.target);ai(t.get(`email`),t.get(`password`));return}if(e.target.id===`signup-form`){e.preventDefault();let t=new FormData(e.target);ii(t.get(`email`),t.get(`password`));return}if(e.target.id===`forgot-password-form`){e.preventDefault(),oi(new FormData(e.target).get(`email`));return}if(e.target.id===`reset-password-form`){e.preventDefault();let t=new FormData(e.target);si(t.get(`newPassword`),t.get(`confirmPassword`));return}if(e.target.id===`admin-opportunity-form`){e.preventDefault();let t=new FormData(e.target);En(t),Ai(t,e.target);return}if(e.target.id===`profile-form`){e.preventDefault(),O.profileSaved=!1,Ji(e.target);let t=Yi();if(!t.companyName||!t.kennitala||!t.contactEmail||!t.billingEmail||!t.contactName||!t.phone||!t.address||!t.industry){U(O.language===`is`?`Fylltu út fyrirtækisnafn, kennitölu, reikningsupplýsingar, tengilið og atvinnugrein.`:`Please fill in company name, kennitala, billing details, contact details and industry.`,`error`);return}O.isSavingProfile=!0,O.profileSaved=!1,O.profileSaveMessage=null,O.profileSaveError=null,Z();let n=O.route!==`/settings`;try{if(await Ci(t),await gi({overwriteDraft:!0}),O.profileLoadError)throw Error(`Profile saved, but the saved profile could not be reloaded. ${O.profileLoadError}`);O.profileSaveMessage=`Refreshing matches...`,O.profileSaveError=null,Z();let e=await ki();if(O.matchStatus?.type===`error`)O.profileSaveMessage=`Profile saved, but matching could not be refreshed. Try Run matching.`;else{let t=e===1?`opportunity`:`opportunities`;O.profileSaveMessage=n?`Profile saved — ${e} relevant ${t} found. Redirecting...`:`Profile saved — ${e} relevant ${t} found.`}O.profileSaved=!0,Z(),clearTimeout(window.__profileSavedTimeout),window.__profileSavedTimeout=setTimeout(()=>{O.profileSaved=!1,Z()},1800),n&&setTimeout(()=>A(`/dashboard`),800)}catch(e){console.error(`Failed to save company profile:`,e),O.profileSaveError=H(e),O.profileSaveMessage=null,O.profileSaved=!1}finally{O.isSavingProfile=!1,Z()}}}),window.addEventListener(`focus`,On),document.addEventListener(`visibilitychange`,()=>{document.visibilityState===`visible`&&On()});function On(){O.route===`/settings`&&O.profileDraftDirty&&(O.profileLoading=!1,O.profileLoaded=!0,Z())}function kn(){Pn(),O.isMobileMenuOpen=!0,O.profileMenuOpen=!1,document.body.classList.add(`mobile-menu-active`),Z()}function An(e){if(!O.isMobileMenuOpen){typeof e==`function`&&e();return}O.isMobileMenuOpen=!1,O.profileMenuOpen=!1,document.body.classList.remove(`mobile-menu-active`),Z(),typeof e==`function`&&setTimeout(e,260)}function jn(e){if(e){if(!O.isMobileMenuOpen){A(e);return}An(()=>A(e))}}function Mn(e){if(!e)return;let t=()=>{O.route===`/`?(Z(),setTimeout(()=>Hn(e),0)):(A(`/`),setTimeout(()=>Hn(e),50))};if(!O.isMobileMenuOpen){t();return}An(t)}function Nn(){return typeof window<`u`&&window.matchMedia?.(`(max-width: 920px)`).matches}function Pn(){let e=document.querySelector(`.site-header`);e&&document.documentElement.style.setProperty(`--header-height`,`${Math.ceil(e.getBoundingClientRect().height)}px`)}function A(e){e||=`/`;let t=[`/login`,`/signup`,`/forgot-password`,`/reset-password`],n=hn(e);if(t.includes(n)&&e!==O.route&&(O.authMessage=null,O.authSubmitting=!1),O.isMobileMenuOpen=!1,O.profileMenuOpen=!1,document.body.classList.remove(`mobile-menu-active`),O.route===e){Z(),Vn(),j();return}eo(),O.route=e,Sn(e),Cn(e),Dn=!0,location.hash=e,Z(),Vn(),j()}function Fn(){return!O.user&&!O.currentUser?`/`:O.pendingInviteToken?`/accept-invite?token=${encodeURIComponent(O.pendingInviteToken)}`:O.profile?`/dashboard`:`/onboarding`}function In(){return!O.user&&!O.currentUser?`/signup`:O.profile?`/dashboard`:`/onboarding`}function Ln(e=O.route){let t=String(e||``);if(Rn(t))return!1;let n=hn(t);return[`/`,`/login`,`/signup`,`/forgot-password`].includes(n)||t.startsWith(`access_token=`)||t.startsWith(`code=`)||t.includes(`type=signup`)||t.includes(`type=email_change`)}function Rn(e=O.route){let t=String(e||``);return t===`/reset-password`||t.startsWith(`/reset-password`)||t.includes(`type=recovery`)}function zn(e){O.route=e,location.hash.replace(`#`,``)!==e&&history.replaceState(null,``,`#${e}`)}function Bn({replace:e=!1}={}){if(!O.user&&!O.currentUser||!Ln())return!1;let t=Fn();return O.authMessage=null,e?zn(t):A(t),!0}function j(){hn(O.route)===`/accept-invite`&&Lo(),O.route===`/report`&&O.companyId&&!O.reportsLoaded&&!O.reportArchiveLoading&&Ei(),O.route===`/admin`&&O.isAdmin&&(!O.importRunsLoaded&&!O.importRunsLoading&&Un(),!O.adminReportsLoaded&&!O.adminReportsLoading&&Wn(),!O.sourceCoverageLoaded&&!O.sourceCoverageLoading&&qn(),!O.adminCompaniesLoaded&&!O.adminCompaniesLoading&&N(),!O.adminReviewLoaded&&!O.adminReviewLoading&&P(),!O.importedTedOpportunitiesLoaded&&!O.importedTedOpportunitiesLoading&&Qr().then(Z).catch(e=>{console.error(`Failed to load latest TED opportunities:`,e)}))}function Vn(){window.scrollTo(0,0)}function Hn(e){let t=document.getElementById(e);t&&t.scrollIntoView({behavior:`smooth`,block:`start`})}async function M(){O.isLoadingOpportunities=!0,O.opportunityLoadError=null,Z();try{if(!l)throw Error(`Supabase client not configured`);let{data:e,error:t}=await l.from(`opportunities`).select(`*, sources(name, source_type)`).eq(`status`,`open`).order(`deadline`,{ascending:!0});if(t)throw t;!e||e.length===0?(O.opportunities=window.VERKRADAR_OPPORTUNITIES||[],O.storedMatches=[],O.opportunityLoadError=`Using demo data. Supabase has no opportunities yet.`):(O.opportunities=e.map(_r),O.opportunityLoadError=null,O.companyId&&(await Ka(),await Ti()))}catch(e){console.error(`Failed to load Supabase opportunities:`,e),O.opportunities=window.VERKRADAR_OPPORTUNITIES||[],O.storedMatches=[],O.opportunityLoadError=`Using demo data. Supabase connection failed.`}finally{O.isLoadingOpportunities=!1,Z()}}async function Un(){if(!l||!O.isAdmin){O.importRuns=[],O.importRunsLoaded=!0;return}O.importRunsLoading=!0,O.importRunsError=null,Z();try{let{data:e,error:t}=await l.from(`import_runs`).select(`*`).order(`started_at`,{ascending:!1}).limit(10);if(t)throw t;O.importRuns=e||[],O.importRunsLoaded=!0}catch(e){console.error(`Failed to load import runs:`,e),O.importRuns=[],O.importRunsError=H(e)}finally{O.importRunsLoading=!1,O.importRunsLoaded=!0,Z()}}async function Wn(){if(!l||!O.isAdmin){O.adminReports=[],O.adminReportsLoaded=!0;return}O.adminReportsLoading=!0,O.adminReportsError=null,Z();try{let{data:e,error:t}=await l.from(`reports`).select(`
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
      `).order(`created_at`,{ascending:!1}).limit(10);if(t)throw t;O.adminReports=e||[],O.adminReportsLoaded=!0}catch(e){console.error(`Failed to load admin reports:`,e),O.adminReports=[],O.adminReportsError=H(e)}finally{O.adminReportsLoading=!1,O.adminReportsLoaded=!0,Z()}}async function Gn(e){if(!(!l||!O.isAdmin||!e)){O.selectedAdminReportLoading=!0,O.selectedAdminReportError=null,Z();try{let{data:t,error:n}=await l.from(`reports`).select(`
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
      `).eq(`id`,e).single();if(n)throw n;await Kn(t),O.selectedAdminReportId===e&&(O.selectedAdminReport=t)}catch(t){console.error(`Failed to load admin report details:`,t),O.selectedAdminReportId===e&&(O.selectedAdminReport=null,O.selectedAdminReportError=H(t))}finally{O.selectedAdminReportId===e&&(O.selectedAdminReportLoading=!1,Z())}}}async function Kn(e){let t=Array.isArray(e?.report_items)?e.report_items:[],n=t.map(e=>e.opportunity_id).filter(Boolean);if(!l||!e?.company_id||!n.length)return;let{data:r,error:i}=await l.from(`company_opportunity_sends`).select(`opportunity_id, sent_at, created_at, channel`).eq(`company_id`,e.company_id).in(`opportunity_id`,n).in(`channel`,[`manual_email`,`automated_email`]);if(i){console.warn(`Failed to load report sent status:`,i);return}let a=new Map((r||[]).map(e=>[String(e.opportunity_id),e]));t.forEach(e=>{let t=a.get(String(e.opportunity_id));e.sent_at=t?.sent_at||t?.created_at||``,e.delivery_type=t?.channel||``})}async function qn(){if(!l||!O.isAdmin){O.sourceCoverage=[],O.sourceCoverageLoaded=!0;return}O.sourceCoverageLoading=!0,O.sourceCoverageError=null,Z();try{let{data:e,error:t}=await l.from(`sources`).select(`
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
      `).order(`name`,{ascending:!0});if(t)throw t;let n=(e||[]).map(e=>({...e,source_status:Array.isArray(e.source_status)?e.source_status[0]:e.source_status,source_connectors:Array.isArray(e.source_connectors)?e.source_connectors[0]:e.source_connectors})),r=n.map(e=>e.id).filter(Boolean),i={};if(r.length){let{data:e,error:t}=await l.from(`opportunities`).select(`id, source_id, title, buyer, deadline, status, url, raw_payload, created_at, published_date`).in(`source_id`,r).eq(`status`,`open`).order(`created_at`,{ascending:!1}).limit(500);if(t)throw t;i=(e||[]).reduce((e,t)=>(e[t.source_id]||(e[t.source_id]=[]),e[t.source_id].push(t),e),{})}O.sourceCoverage=n.map(e=>{let t=i[e.id]||[];return{...e,opportunityStats:rs(t),latestOpportunities:t.slice(0,8)}}),O.sourceCoverageLoaded=!0}catch(e){console.error(`Failed to load source coverage:`,e),O.sourceCoverage=[],O.sourceCoverageError=H(e)}finally{O.sourceCoverageLoading=!1,O.sourceCoverageLoaded=!0,Z()}}async function N(){if(!l||!O.isAdmin){O.adminCompanies=[],O.adminCompaniesLoaded=!0;return}O.adminCompaniesLoading=!0,O.adminCompaniesError=null,Z();try{O.adminAiUsageSummary=await pe().catch(e=>(console.warn(`Failed to load AI usage summary:`,e),null));let{data:e,error:t}=await l.from(`companies`).select(`*`).order(`created_at`,{ascending:!1});if(t)throw t;let n=e||[],r=n.map(e=>e.id).filter(Boolean),i=[],a=[],o=[],s=[],c=[],u=[],d=[];if(r.length){let[e,t,n,f,p,m,h]=await Promise.all([l.from(`company_services`).select(`company_id, service`).in(`company_id`,r),l.from(`company_locations`).select(`company_id, location`).in(`company_id`,r),l.from(`company_keywords`).select(`company_id, keyword, type`).in(`company_id`,r),l.from(`opportunity_matches`).select(`id, company_id, opportunity_id, match_score, match_label, safety_status, ai_review_status, ai_review_fit, ai_review_confidence, ai_reviewed_at, ai_review_skipped_reason, opportunities(title, buyer, location, raw_payload, source_id, sources(name))`).in(`company_id`,r),l.from(`reports`).select(`id, company_id, title, created_at, period_start, period_end, status`).in(`company_id`,r).order(`created_at`,{ascending:!1}),l.from(`ai_match_reviews`).select(`id, company_id, opportunity_id, match_id, fit, confidence, send_to_client, reason, reviewed_profile_hash, profile_updated_at, company_services_snapshot, company_locations_snapshot, created_at, updated_at`).in(`company_id`,r),l.from(`company_members`).select(`id, company_id, user_id, email, role, status, invited_at, accepted_at, revoked_at, expires_at`).in(`company_id`,r).order(`created_at`,{ascending:!1})]);i=e.error?[]:e.data||[],a=t.error?[]:t.data||[],o=n.error?[]:n.data||[],s=f.error?[]:f.data||[],c=p.error?[]:p.data||[],u=m.error?[]:m.data||[],d=h.error?[]:h.data||[]}O.adminCompanies=n.map(e=>{let t=i.filter(t=>t.company_id===e.id),n=a.filter(t=>t.company_id===e.id),r=o.filter(t=>t.company_id===e.id),l={services:w(t.map(e=>e.service)),locations:w(n.map(e=>e.location)),includeKeywords:w(r.filter(e=>e.type===`include`).map(e=>e.keyword)),excludeKeywords:w(r.filter(e=>e.type===`exclude`).map(e=>e.keyword)),baseLocation:e.base_location||``,serviceAreas:w(e.service_areas),willingToTravel:!!e.willing_to_travel,nationalProjects:!!e.national_projects};return Xn(e,{services:t,locations:n,keywords:r,matches:ve(s.filter(t=>t.company_id===e.id),u.filter(t=>t.company_id===e.id),l),reports:c.filter(t=>t.company_id===e.id),members:d.filter(t=>t.company_id===e.id)})}),O.adminCompaniesLoaded=!0}catch(e){console.error(`Failed to load admin companies:`,e),O.adminCompanies=[],O.adminCompaniesError=H(e)}finally{O.adminCompaniesLoading=!1,O.adminCompaniesLoaded=!0,Z()}}async function P(){if(!l||!O.isAdmin){O.adminReviewMatches=[],O.adminReviewLoaded=!0;return}O.adminReviewLoading=!0,O.adminReviewError=null,Z();try{let{data:e,error:t}=await l.from(`opportunity_matches`).select(`
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
      `).eq(`safety_status`,`needs_review`).eq(`review_required`,!0).order(`calculated_at`,{ascending:!1}).limit(100);if(t)throw t;let n=e||[],r=Ht(n.map(e=>e.company_id)),i=Ht(n.map(e=>e.opportunity_id)),a=[];if(r.length&&i.length){let{data:e,error:t}=await l.from(`ai_match_reviews`).select(`*`).in(`company_id`,r).in(`opportunity_id`,i);if(t)throw t;a=e||[]}let o=new Map(a.map(e=>[`${e.company_id}:${e.opportunity_id}`,e]));O.adminReviewMatches=n.map(e=>Jn(e,o.get(`${e.company_id}:${e.opportunity_id}`))),O.adminReviewLoaded=!0}catch(e){console.error(`Failed to load admin review queue:`,e),O.adminReviewMatches=[],O.adminReviewError=H(e)}finally{O.adminReviewLoading=!1,O.adminReviewLoaded=!0,Z()}}function Jn(e,t=null){let n=_r(e.opportunities||{});return{id:e.id,companyId:e.company_id,opportunityId:e.opportunity_id,companyName:e.companies?.company_name||`Unknown company`,opportunity:n,matchScore:Number(e.match_score||0),matchLabel:e.match_label||Aa(Number(e.match_score||0)),matchReasons:Ur(n,Array.isArray(e.match_reasons)?e.match_reasons:[]),risks:Array.isArray(e.risks)?e.risks:[],safetyStatus:e.safety_status||`needs_review`,safetyReasons:Array.isArray(e.safety_reasons)?e.safety_reasons:[],alertEligible:!!e.alert_eligible,reviewRequired:!!e.review_required,calculatedAt:e.calculated_at,aiReview:t?Yn(t):null}}function Yn(e){return{id:e.id,fit:e.fit||`weak`,confidence:Number(e.confidence||0),sendToClient:!!e.send_to_client,reason:e.reason||``,fitReasons:Array.isArray(e.fit_reasons)?e.fit_reasons.map(String):[],risksOrQuestions:Array.isArray(e.risks_or_questions)?e.risks_or_questions.map(String):[],suggestedClientSummary:e.suggested_client_summary||``,model:e.model||``,createdAt:e.created_at||``,updatedAt:e.updated_at||``}}function Xn(e,t){let n=w((t.services||[]).map(e=>e.service)),r=w((t.locations||[]).map(e=>e.location)),i=w((t.keywords||[]).filter(e=>e.type===`include`).map(e=>e.keyword)),a=w((t.keywords||[]).filter(e=>e.type===`exclude`).map(e=>e.keyword)),o=t.reports||[],s=(t.matches||[]).filter(e=>e.safety_status!==`hidden`),c=(t.members||[]).map(e=>({id:e.id,company_id:e.company_id,user_id:e.user_id||``,email:e.email||``,role:e.role||`member`,status:e.status||`invited`,invited_at:e.invited_at||``,accepted_at:e.accepted_at||``,revoked_at:e.revoked_at||``,expires_at:e.expires_at||``})),l=!!(e.company_name&&e.contact_email&&e.industry&&n.length&&(r.length||e.base_location||w(e.service_areas).length));return{id:e.id,ownerId:e.owner_id||``,companyName:e.company_name||`Unnamed company`,contactEmail:e.contact_email||``,kennitala:e.kennitala||``,billingEmail:e.billing_email||``,contactName:e.contact_name||``,phone:e.phone||``,address:e.address||``,website:e.website||``,industry:e.industry||``,plan:e.selected_plan||e.plan||e.subscription_plan||`Demo`,selectedPlan:e.selected_plan||e.plan||``,billingStatus:e.billing_status||``,trialStartedAt:e.trial_started_at||``,trialEndsAt:e.trial_ends_at||``,profileStatus:l?`Complete`:`Incomplete`,createdAt:e.created_at,services:n,locations:r,includeKeywords:i,excludeKeywords:a,baseLocation:e.base_location||``,serviceAreas:w(e.service_areas),willingToTravel:!!e.willing_to_travel,nationalProjects:!!e.national_projects,remoteProjects:!!e.remote_projects,minimumProjectValueForTravel:e.minimum_project_value_for_travel,minProjectValue:e.min_project_value,maxProjectValue:e.max_project_value,allowUnknownValue:!!e.allow_unknown_value,includeLowConfidence:!!e.include_low_confidence,autoAlertMode:e.auto_alert_mode||`auto_safe_only`,reportFrequency:e.report_frequency||`weekly`,reportDay:e.report_day||`monday`,deadlineReminders:!!e.deadline_reminders,autoAiReviewEnabled:!!e.auto_ai_review_enabled,members:c,matchCount:s.length,savedCount:0,latestReportDate:o[0]?.created_at||``,latestMatches:s.slice(0,30),latestReports:o.slice(0,5)}}function Zn(e,t){O.adminCompanyActions={...O.adminCompanyActions||{},[e]:t}}function Qn(e){let t={...O.adminCompanyActions||{}};delete t[e],O.adminCompanyActions=t}function $n(e){return O.adminCompanyInviteDrafts?.[e.id]??(e.billingEmail||e.contactEmail||``)}function er(e,t){O.adminCompanyAccessActions={...O.adminCompanyAccessActions||{},[e]:t}}function tr(e){let t={...O.adminCompanyAccessActions||{}};delete t[e],O.adminCompanyAccessActions=t}async function nr(e){if(!O.isAdmin||!e)return;let t=d($n((O.adminCompanies||[]).find(t=>t.id===e)||{id:e}));if(!t){O.adminMessage={type:`error`,text:`Enter a customer email before inviting access.`},Z();return}er(e,`invite`),O.adminMessage=null,Z();try{let n=await pr(e,`invite_customer`,{email:t}),r=g(n.invite_token||``);await N(),O.adminCompanyInviteLinks={...O.adminCompanyInviteLinks||{},[e]:r},O.adminCompanyInviteDrafts={...O.adminCompanyInviteDrafts||{},[e]:``},O.adminMessage={type:`success`,text:`Invite link created for ${n.member?.email||t}. Copy it and send it manually.`},U(`Invite link created`,`success`)}catch(e){console.error(`Failed to invite company customer:`,e),O.adminMessage={type:`error`,text:`Failed to invite customer access. ${H(e)}`}}finally{tr(e),Z()}}async function rr(e,t){if(!(!O.isAdmin||!e||!t)){er(e,`revoke`),O.adminMessage=null,Z();try{await pr(e,`revoke_customer_access`,{memberId:t}),await N(),O.adminMessage={type:`success`,text:`Customer access revoked.`},U(`Customer access revoked`,`success`)}catch(e){console.error(`Failed to revoke company access:`,e),O.adminMessage={type:`error`,text:`Failed to revoke customer access. ${H(e)}`}}finally{tr(e),Z()}}}async function ir(e){let t=O.adminCompanyInviteLinks?.[e]||``;if(!t){U(`Create or regenerate an invite link first.`,`error`);return}try{await navigator.clipboard.writeText(t),U(`Invite link copied`,`success`)}catch(e){console.error(`Failed to copy invite link:`,e),U(`Could not copy invite link`,`error`)}}async function ar(e,t={}){if(!O.isAdmin)return O.adminMessage={type:`error`,text:`You do not have access to this action.`},Z(),[];let n=(O.adminCompanies||[]).find(t=>t.id===e);if(!n)return O.adminMessage={type:`error`,text:`Company not found. Refresh Admin companies and try again.`},Z(),[];t.skipAction||Zn(e,`refresh`),t.silent||(O.adminMessage=null,Z());try{let r=await pr(e,`refresh_matches`),i=Number(r.matches_refreshed||0);return await Promise.all([N(),P()]),O.companyId===e&&await Ti(),t.silent||(O.adminMessage={type:`success`,text:`Refreshed ${i} eligible matches for ${n.companyName}.`},U(`Company matches refreshed`,`success`),Z()),r}catch(e){if(console.error(`Failed to refresh admin company matches:`,e),O.adminMessage={type:`error`,text:`Failed to refresh matches for ${n.companyName}. ${H(e)}`},Z(),t.throwOnError)throw e;return[]}finally{t.skipAction||(Qn(e),Z())}}async function or(e){if(!O.isAdmin){O.adminMessage={type:`error`,text:`You do not have access to this action.`},Z();return}let t=(O.adminCompanies||[]).find(t=>t.id===e);if(!t){O.adminMessage={type:`error`,text:`Company not found. Refresh Admin companies and try again.`},Z();return}Zn(e,`report`),O.adminMessage=null,Z();try{let n=await pr(e,`generate_report`,{reportMode:O.adminReportMode||`all_current`});if(!n.report_created){O.adminMessage={type:`error`,text:hr(n,t.companyName)},Z();return}await Promise.all([Wn(),N(),P()]),O.companyId===e&&await Ei(),O.adminMessage={type:`success`,text:`Generated ${mr(n.report_mode||O.adminReportMode)} report for ${t.companyName} with ${Number(n.report_items||0)} item${Number(n.report_items||0)===1?``:`s`}. Open the Reports tab to review it.`},U(`Company report generated`,`success`)}catch(e){console.error(`Failed to generate admin company report:`,e),O.adminMessage={type:`error`,text:`Failed to generate report for ${t.companyName}. ${H(e)}`}}finally{Qn(e),Z()}}async function sr(e,t,n){if(!O.isAdmin){O.adminMessage={type:`error`,text:`You do not have access to this action.`},Z();return}if(!e||!t||![`approve`,`reject`].includes(n)){O.adminMessage={type:`error`,text:`Missing review action details.`},Z();return}O.adminReviewActions={...O.adminReviewActions||{},[e]:n},O.adminMessage=null,Z();try{let r=await pr(t,`review_match`,{matchId:e,reviewAction:n});await Promise.all([P(),N()]),O.companyId===t&&await Ti(),O.adminMessage={type:`success`,text:r.message||(n===`approve`?`Match approved for customer reports.`:`Match rejected and hidden.`)},U(n===`approve`?`Match approved`:`Match rejected`,`success`)}catch(e){console.error(`Failed to review admin match:`,e),O.adminMessage={type:`error`,text:`Failed to ${n} match. ${H(e)}`}}finally{let t={...O.adminReviewActions||{}};delete t[e],O.adminReviewActions=t,Z()}}async function cr(e,t={}){if(!O.isAdmin){O.adminMessage={type:`error`,text:`You do not have access to this action.`},Z();return}if(!e){O.adminMessage={type:`error`,text:`Missing match ID for AI review.`},Z();return}O.adminAiReviewActions={...O.adminAiReviewActions||{},[e]:!0},O.adminAiReviewError=null,O.adminMessage=null,Z();try{let n=await le(e,{force:t.force===!0});await P(),await N(),O.adminMessage={type:`success`,text:n.cached?`Loaded cached AI review.`:t.force?`AI review re-run completed.`:`AI review completed.`},U(n.cached?`AI review loaded`:t.force?`AI review re-run completed`:`AI review completed`,`success`)}catch(e){console.error(`Failed to run AI match review:`,e),O.adminAiReviewError=H(e),O.adminMessage={type:`error`,text:`AI review failed. ${H(e)}`}}finally{let t={...O.adminAiReviewActions||{}};delete t[e],O.adminAiReviewActions=t,Z()}}async function lr(e,t={}){if(!O.isAdmin){O.adminMessage={type:`error`,text:`You do not have access to this action.`},Z();return}if(!e){O.adminMessage={type:`error`,text:`Missing company ID for AI review batch.`},Z();return}O.adminCompanyAiReviewActions={...O.adminCompanyAiReviewActions||{},[e]:!0},O.adminMessage=null,Z();try{let n=await ue(e,{limit:10,force:t.force===!0,revalidate:t.force===!0});O.adminCompanyAiReviewResults={...O.adminCompanyAiReviewResults||{},[e]:n},await Promise.all([N(),P()]),O.companyId===e&&await Ti(),O.adminMessage={type:`success`,text:`${t.force?`AI revalidation`:`AI batch`} reviewed ${Number(n.reviewed||0)} matches. ${Number(n.skipped||0)} skipped.`},U(t.force?`AI company revalidation completed`:`AI company review completed`,`success`)}catch(e){console.error(`Failed to run company AI review batch:`,e),O.adminMessage={type:`error`,text:`AI company review failed. ${H(e)}`}}finally{let t={...O.adminCompanyAiReviewActions||{}};delete t[e],O.adminCompanyAiReviewActions=t,Z()}}async function ur(){if(!O.isAdmin){O.adminMessage={type:`error`,text:`You do not have access to this action.`},Z();return}O.adminAutomaticAiReviewLoading=!0,O.adminMessage=null,Z();try{let e=await de({limit:10});O.adminAutomaticAiReviewResult=e,await Promise.all([N(),P()]),O.adminMessage={type:`success`,text:`Automatic AI review created ${Number(e.ai_reviews_created||0)} reviews across ${Number(e.companies_checked||0)} companies.`},U(`Automatic AI review completed`,`success`)}catch(e){console.error(`Failed to run automatic AI review:`,e),O.adminMessage={type:`error`,text:`Automatic AI review failed. ${H(e)}`}}finally{O.adminAutomaticAiReviewLoading=!1,Z()}}async function dr(){if(O.isAdmin){O.adminDailyPipelineLoading=!0,O.adminMessage=null,Z();try{let e=await b();O.adminDailyPipelineResult=e,await Promise.all([gr(),N(),P()]),O.adminMessage={type:e.errors?.length?`error`:`success`,text:`Daily pipeline finished: ${Number(e.sources_imported||0)} sources, ${Number(e.companies_refreshed||0)} companies, ${Number(e.ai_reviews_created||0)} AI reviews.`}}catch(e){console.error(`Failed to run daily pipeline:`,e),O.adminMessage={type:`error`,text:`Daily pipeline failed. ${H(e)}`}}finally{O.adminDailyPipelineLoading=!1,Z()}}}async function fr(e,t){if(!O.isAdmin||!e)return;let n=(O.adminCompanies||[]).find(t=>t.id===e);O.adminMessage=null,Z();try{await fe(e,t),O.adminCompanies=(O.adminCompanies||[]).map(n=>n.id===e?{...n,autoAiReviewEnabled:t}:n),await N(),O.adminMessage={type:`success`,text:`Automatic AI review ${t?`enabled`:`disabled`} for company.`},Z()}catch(t){console.error(`Failed to toggle company automatic AI review:`,t);let r=t?.details||{};O.adminMessage={type:`error`,text:`Failed to update automatic AI review setting. ${H(t)} Debug: company_id=${e}; company=${n?.companyName||`unknown`}; email=${n?.contactEmail||`unknown`}; returned_rows=${r.rowCount??`unknown`}; returned_data=${r.dataReturned===!1?`false`:`unknown`}.`},Z()}}async function pr(e,t,n={}){let r=Jr();if(!r)throw Error(`Admin company actions are not configured. Set window.VERKRADAR_ADMIN_COMPANY_ACTIONS_URL or window.VERKRADAR_SUPABASE_URL.`);let i=await fetch(r,{method:`POST`,headers:await $r(),body:JSON.stringify({companyId:e,action:t,...n})}),a=await i.json().catch(()=>({}));if(!i.ok)throw Error(a.error||`Admin company action failed with status ${i.status}`);return a}function mr(e){return e===`all_current`?`current active opportunities`:`new opportunities`}function hr(e,t){let n=e?.report_mode||O.adminReportMode||`all_current`;return e?.message||(n===`new_only`?`No new eligible opportunities found since the previous report.`:`No customer-report-ready matches found for ${t}.`)}async function gr(){O.isAdmin&&(await Promise.all([Un(),Qr(),Wn(),qn(),N(),P()]),U(`Automation status refreshed`,`success`),Z())}function _r(e){let t=e.raw_payload&&typeof e.raw_payload==`object`?e.raw_payload:{},n=e.sources?.name||t.source_name||``,r=I(t.quality_status||t.qualityStatus,{source:n,sourceType:e.sources?.source_type||``,title:e.title||``,description:yr(e.description||``,t,n,e.title||``),rawPayload:t}),i=L({source:n,sourceType:e.sources?.source_type||``,title:e.title||``,description:e.description||``,category:e.category||``,keywords:Array.isArray(e.keywords)?e.keywords:[],qualityStatus:r,rawPayload:t});return{id:e.id,externalId:e.external_id||``,countryCode:e.country_code||``,title:e.title,buyer:en(e.buyer,n,t),source:n||`Supabase`,sourceType:e.sources?.source_type||``,category:e.category||`Other`,type:e.type||`tender`,description:e.description||``,deadline:e.deadline,deadlineAt:t.deadline_at||``,publishedDate:e.published_date,createdAt:e.created_at,location:Cr(e.location||`Unknown`,t,n,e.title||``,e.description||``),estimatedValue:e.estimated_value,currency:e.currency||`ISK`,url:e.url||``,cpvCode:e.cpv_code||``,requirements:Array.isArray(e.requirements)?e.requirements:[],keywords:Array.isArray(e.keywords)?e.keywords:[],difficulty:e.difficulty||`medium`,status:e.status||`open`,qualityStatus:r,intent:i,rawPayload:t}}function vr(e){let t=_r(e.opportunities||{});return{...t,matchScore:Number(e.match_score||0),matchLabel:e.match_label||Aa(Number(e.match_score||0)),matchReasons:Ur(t,Array.isArray(e.match_reasons)?e.match_reasons:[]),risks:Array.isArray(e.risks)?e.risks:[],nextSteps:Array.isArray(e.next_steps)?e.next_steps:[],safetyStatus:e.safety_status||`needs_review`,safetyReasons:Array.isArray(e.safety_reasons)?e.safety_reasons:[],alertEligible:!!e.alert_eligible,reviewRequired:!!e.review_required,reviewedAt:e.reviewed_at||``,reviewNote:e.review_note||``}}function yr(e,t={},n=``,r=``){t=t&&typeof t==`object`?t:{};let i=String(e||``).replace(/\s+/g,` `).trim(),a=T(n);if(!i)return``;if(a.includes(`rikiskaup`)||a.includes(`utbodsvefur`)){let e=br(i,t,r);if(e)return e;if(xr(i)||Sr(i))return O.language===`is`?`Útboðstilkynning flutt inn af Útboðsvef. Opnið upprunasíðuna til að staðfesta kaupanda, skilafrest, kröfur og útboðsgögn.`:`Procurement notice imported from Útboðsvefur. Open the source page to confirm buyer, deadline, requirements and tender documents.`}return i}function br(e,t={},n=``){t=t&&typeof t==`object`?t:{};let r=String(e||``).replace(/\s+/g,` `).trim();if(!r)return``;let i=[r.search(/F\.h\.[^.]{0,280}ósk(?:að|ar) eftir tilboðum/i),r.search(/(?:Reykjavíkurborg|sveitarfélag|bærinn|kaupandi)[^.]{0,280}ósk(?:að|ar) eftir tilboðum/i),r.search(/óskar eftir tilboðum|óskað eftir tilboðum|oskar eftir tilbodum|oskad eftir tilbodum/i),r.search(/verkefnið felst|verkið felst|verkið felur|gatna-|gatnagerð|stígagerð/i)].filter(e=>e>=0);if(!i.length)return``;let a=Math.min(...i),o=r.slice(a).search(/\s+(Nánari upplýsingar|Útboðsgögn afhent|Opnun tilboða|Opnun tilboda|Auglýsandi|Flokkar|Tengdar fréttir|Fjöldi útboð)\b/i),s=o>120?a+o:a+1200,c=[r.slice(a,s).trim()],l=t.extracted_deadline_text||t.deadline_text||``;l&&!c[0].includes(String(l))&&c.push(`Skilafrestur: ${l}`);let u=Ht(c).join(` `).replace(/^(Útboðsvefur\s*){1,}/i,``).replace(/\s+/g,` `).trim();return Sr(u)?``:u||n}function xr(e){return/Procurement notice imported from Útboðsvefur|Open the source page for full buyer details/i.test(String(e||``))}function Sr(e){let t=String(e||``);return[`Framkvæmdasýslan`,`Ríkiseignir`,`Garðabær`,`Grímsnes`,`Fjöldi útboð`,`Útboðsvefur.is - Opinber útboð`].filter(e=>t.includes(e)).length>=3||/^Útboðsvefur\s+Útboðsvefur\.is/i.test(t)}function Cr(e,t={},n=``,r=``,i=``){let a=wr(`${r} ${i} ${JSON.stringify(t||{})}`),o=String(e||``).trim();return a&&(!o||/unknown|all iceland|iceland/i.test(o))?a:o||a||`Unknown`}function wr(e){let t=T(e);return t.includes(`vogabyggd`)||t.includes(`reykjavikurborg`)||t.includes(`strandstigur`)?`Reykjavík / Höfuðborgarsvæðið`:``}function F(e){if(!e||e.status!==`open`||!e.url||e.url===`#`||S(e.deadline)<0||Tr(e)||e.rawPayload?.extraction_method===`parent_article_with_child_opportunities`||il(e)||Ar(e))return!1;if(!Ws(e))return!0;let t=Vr(e);return[`IS`,`NO`,`DK`,`SE`,`FI`].includes(t)}function Tr(e){let t=T(e?.source||``),n=T(e?.title||``),r=T(e?.externalId||``),i=T(e?.sourceType||``),a=e?.rawPayload||{},o=`${t} ${n} ${r} ${i}`;return!!(a.is_demo===!0||a.demo===!0||t===`private lead`||t.includes(`private lead`)||t===`grant portal`||t.includes(`grant portal`)||t===`manual test`||t.includes(`manual test`)||[`demo`,`test`,`sample`,`mock`,`fake`].some(e=>i.includes(e))||/\b(demo|test|sample|mock|fake|manual)\b/.test(o)||n.includes(`manual test`)||n.includes(`municipal websites example`)||r.includes(`demo`)||r.includes(`test`))}function I(e,t={}){let n=String(e||``).toLowerCase(),r=Er(t?.rawPayload?.opportunity_intent||t?.rawPayload?.intent);if(r===`confirmed_tender`)return`confirmed_tender`;if(r===`early_opportunity`||r===`market_signal`)return`early_signal`;if(r===`news_context`||r===`not_opportunity`)return`needs_review`;if(Ws(t))return`confirmed_tender`;if(R(t)){let e=Dr(t);return[`tender_awarded`,`awarded`,`already_tendered`,`announced`].includes(e)?`confirmed_tender`:e===`upcoming_tender`?`early_signal`:`needs_review`}if(n===`early_signal`||n===`needs_review`)return n;let i=z(t);return B(i,[`senn í útboð`,`senn i utbod`])?`early_signal`:kr(i)?`confirmed_tender`:zr(t?.title||``)&&!kr(i)?`needs_review`:Lr(i)?`early_signal`:(Br(i),`needs_review`)}function Er(e){return{confirmed:`confirmed_tender`,confirmed_tender:`confirmed_tender`,likely_opportunity:`confirmed_tender`,verified:`confirmed_tender`,early_signal:`early_opportunity`,early_opportunity:`early_opportunity`,upcoming_tender:`early_opportunity`,market_signal:`market_signal`,project_signal:`market_signal`,needs_review:`market_signal`,news_context:`news_context`,news:`news_context`,noise:`not_opportunity`,not_opportunity:`not_opportunity`,stale_opportunity:`not_opportunity`,stale:`not_opportunity`,expired:`not_opportunity`}[String(e||``).toLowerCase().trim()]||``}function L(e={}){let t=Er(e?.rawPayload?.opportunity_intent||e?.rawPayload?.intent),n=String(e?.rawPayload?.admin_report_status||``).toLowerCase();if(n===`include`)return`confirmed_tender`;if([`hidden`,`hide`,`noise`,`deleted`].includes(n))return t||`not_opportunity`;if(t)return t;if(Ws(e))return`confirmed_tender`;let r=z(e),i=e?.title||``;if(R(e)){let t=Dr(e);return[`tender_awarded`,`awarded`,`already_tendered`,`announced`].includes(t)?`confirmed_tender`:t===`upcoming_tender`?`early_opportunity`:`market_signal`}return kr(r)?`confirmed_tender`:zr(i)||Br(r)?`news_context`:Ir(r)?`early_opportunity`:(Rr(r),`market_signal`)}function R(e){return e?.rawPayload?.extraction_method===`vegagerdin_article_project_parser`}function Dr(e){let t=String(e?.rawPayload?.tender_state||``).trim(),n=Or(e),r={awarded:`tender_awarded`,open_or_published:`announced`,planned_tender:`upcoming_tender`,unclear:`project_signal`}[t]||t;return n===`tender_awarded`?`tender_awarded`:n===`already_tendered`&&![`tender_awarded`,`announced`].includes(r)?`already_tendered`:n===`announced`&&![`tender_awarded`,`already_tendered`].includes(r)?`announced`:n===`upcoming_tender`&&[``,`project_signal`,`needs_review`,`unclear`].includes(r)?`upcoming_tender`:r||n}function Or(e){let t=z(e);return B(t,[`lægstbjóðandi`,`laegstbjodandi`,`samningur var`,`samið var`,`samid var`,`skrifað var undir verksamning`,`skrifad var undir verksamning`])?`tender_awarded`:B(t,[`útboð var auglýst`,`utbod var auglyst`,`útboðið var auglýst`,`utbodid var auglyst`,`útboð hefur farið fram`,`utbod hefur farid fram`,`útboðið hefur farið fram`,`utbodid hefur farid fram`,`boðið út`,`bodid ut`,`verkið var boðið út`,`verkid var bodid ut`,`útboð var opnað`,`utbod var opnad`,`tilboð opnuð`,`tilbod opnud`])?`already_tendered`:B(t,[`óskað eftir tilboðum`,`oskad eftir tilbodum`,`tilboðsfrestur`,`tilbodsfrestur`,`skilafrestur`,`verðfyrirspurn`,`verdfyrirspurn`,`rammasamningur`,`forval`])?`announced`:B(t,[`áætlað útboð`,`aaetlad utbod`,`áætlað er að bjóða út`,`aaetlad er ad bjoda ut`,`fyrirhugað útboð`,`fyrirhugad utbod`,`senn í útboð`,`senn i utbod`,`útboð verður`,`utbod verdur`])?`upcoming_tender`:`project_signal`}function z(e){return T([e?.title,e?.description,e?.category,e?.source,...Array.isArray(e?.keywords)?e.keywords:[]].filter(Boolean).join(` `))}function B(e,t){let n=T(e);return t.some(e=>n.includes(T(e)))}function kr(e){return B(e,[`útboð`,`utbod`,`útboðsauglýsing`,`utbodsauglysing`,`tilboð`,`tilboðum`,`tilbod`,`tilbodum`,`óskað eftir tilboðum`,`oskad eftir tilbodum`,`verðfyrirspurn`,`verdfyrirspurn`,`innkaup`,`rammasamningur`,`forval`,`tender`,`procurement`,`skilafrestur`,`útboðsgögn`,`utbodsgogn`])}function Ar(e={}){let t=e.rawPayload||{};return t.stale_status===`stale_or_expired`||t.opportunity_intent===`stale_opportunity`?!0:jr({title:e.title,description:e.description,content:[e.category,e.source,Array.isArray(e.keywords)?e.keywords.join(` `):``].filter(Boolean).join(` `),publishedDate:e.publishedDate,deadline:e.deadline,sourceName:e.source,sourceType:e.sourceType,connectorType:t.connector_type}).isStale}function jr(e={}){let t=String(e.deadline||``).slice(0,10);if(t&&S(t)>=0)return{isStale:!1,reason:``,thresholdDays:null,ageDays:null,oldYears:[],expiredKeywords:[]};let n=T([e.title,e.description,e.content].filter(Boolean).join(` `)),r=Nr(n),i=Pr(n),a=Fr(e.publishedDate),o=a?Math.floor((Date.now()-new Date(`${a}T00:00:00Z`).getTime())/864e5):null,s=Mr(e)?45:60;return r.length?{isStale:!0,reason:`Old year detected (${r.join(`, `)}) and no future deadline found.`,thresholdDays:s,ageDays:o,oldYears:r,expiredKeywords:i}:i.length?{isStale:!0,reason:`Expired/result wording detected (${i.slice(0,3).join(`, `)}) and no future deadline found.`,thresholdDays:s,ageDays:o,oldYears:r,expiredKeywords:i}:o!==null&&o>s?{isStale:!0,reason:`Published ${o} days ago with no current deadline.`,thresholdDays:s,ageDays:o,oldYears:r,expiredKeywords:i}:{isStale:!1,reason:``,thresholdDays:s,ageDays:o,oldYears:r,expiredKeywords:i}}function Mr(e={}){let t=T(`${e.sourceName||``} ${e.sourceType||``} ${e.connectorType||``}`);return String(e.connectorType||``)===`rss_feed`&&[`municipal`,`sveitarfelag`,`akranes`,`borgarbyggd`,`arborg`,`selfoss`,`gardabaer`,`reykjanesbaer`,`hafnarfjordur`,`mosfellsbaer`,`kopavogur`,`mulathing`,`fjardabyggd`].some(e=>t.includes(T(e)))}function Nr(e){let t=new Date().getUTCFullYear(),n=new Set;return String(e||``).replace(/\b(20[0-9]{2})\b/g,(e,r)=>{let i=Number(r);return i>=2020&&i<t&&n.add(i),r}),Array.from(n).sort()}function Pr(e){return`niðurstaða útboðs.nidurstada utbods.niðurstöður útboðs.nidurstodur utbods.opnun tilboða.opnun tilboda.tilboð opnuð.tilbod opnud.lokið.lokid.lokið útboði.lokid utbodi.búið.buid.útrunnið.ut runnid.eldri útboð.eldri utbod.útboðssaga.utbodssaga.samningur gerður.samningur gerdur.verksamningur.awarded.tender results.contract awarded.expired`.split(`.`).filter(t=>B(e,[t]))}function Fr(e){if(!e)return``;let t=new Date(e);return Number.isNaN(t.getTime())?``:t.toISOString().slice(0,10)}function Ir(e){return B(e,[`senn í útboð`,`senn i utbod`,`áætlað útboð`,`aaetlad utbod`,`áætlað er að bjóða út`,`aaetlad er ad bjoda ut`,`fyrirhugað útboð`,`fyrirhugad utbod`,`markaðskönnun`,`markadskonnun`,`rfi`])}function Lr(e){return Ir(e)?!0:B(e,[`áætlaðar framkvæmdir`,`aaetladar framkvaemdir`,`fyrirhugaðar framkvæmdir`,`fyrirhugadar framkvaemdir`,`framkvæmdir hefjast`,`framkvaemdir hefjast`,`malbikunarframkvæmdir`,`malbikunarframkvaemdir`,`vegaframkvæmdir`,`vegaframkvaemdir`,`brúargerð`,`bruargerd`,`jarðvinna`,`jardvinna`,`gatnagerð`,`gatnagerd`])}function Rr(e){return B(e,[`áætlaðar framkvæmdir`,`aaetladar framkvaemdir`,`fyrirhugaðar framkvæmdir`,`fyrirhugadar framkvaemdir`,`framkvæmdir hefjast`,`framkvaemdir hefjast`,`malbikunarframkvæmdir`,`malbikunarframkvaemdir`,`vegaframkvæmdir`,`vegaframkvaemdir`,`brúargerð`,`bruargerd`,`jarðvinna`,`jardvinna`,`gatnagerð`,`gatnagerd`,`fræsing`,`fraesing`])}function zr(e){return B(e,[`lokun`,`lokað`,`lokad`,`lokanir`,`umferð`,`umferd`,`tafir`,`hjáleið`,`hjaleid`,`akstursleið`,`akstursleid`,`vegfarendur`,`frétt`,`frett`,`myndband`,`tekur á sig mynd`,`tekur a sig mynd`,`opið aftur`,`opid aftur`])}function Br(e){return B(e,[`lokun`,`lokanir`,`umferð`,`umferd`,`dagskrá`,`dagskra`,`skráning`,`skraning`,`myndband`,`ráðstefna`,`radstefna`,`kynningarfundur`,`tilkynning`,`fundur`,`fjölskylduganga`,`fjolskylduganga`,`tafir`,`kynnt`,`styrkur`,`frétt`,`frett`,`viðburður`,`vidburdur`])}function Vr(e){let t=Hr(e.countryCode);if(t)return t;let n=T(Ca(e));return n.includes(`iceland`)||n.includes(`island`)||n.includes(`reykjavik`)||n.includes(`capital area`)||n.includes(`hofudborgarsvaedid`)||n.includes(`east iceland`)||n.includes(`west iceland`)||n.includes(`north iceland`)||n.includes(`south iceland`)||n.includes(`sudurnes`)?`IS`:n.includes(`norway`)?`NO`:n.includes(`denmark`)?`DK`:n.includes(`sweden`)?`SE`:n.includes(`finland`)?`FI`:``}function Hr(e){return{IS:`IS`,ISL:`IS`,ICELAND:`IS`,ÍSLAND:`IS`,NO:`NO`,NOR:`NO`,NORWAY:`NO`,DK:`DK`,DNK:`DK`,DENMARK:`DK`,SE:`SE`,SWE:`SE`,SWEDEN:`SE`,FI:`FI`,FIN:`FI`,FINLAND:`FI`}[String(e||``).trim().toUpperCase()]||``}function Ur(e,t){return Sa(e)?t:t.filter(e=>!/^Located in your selected region:/i.test(String(e||``)))}function Wr(){O.authForm={email:``,password:``,newPassword:``,confirmPassword:``}}function Gr(){O.authForm.newPassword=``,O.authForm.confirmPassword=``}function Kr(){return window.VERKRADAR_TED_IMPORT_URL?window.VERKRADAR_TED_IMPORT_URL:window.VERKRADAR_SUPABASE_URL?`${window.VERKRADAR_SUPABASE_URL}/functions/v1/import-ted`:`${c}/functions/v1/import-ted`}function qr(){return window.VERKRADAR_SOURCE_CONNECTOR_IMPORT_URL?window.VERKRADAR_SOURCE_CONNECTOR_IMPORT_URL:window.VERKRADAR_SUPABASE_URL?`${window.VERKRADAR_SUPABASE_URL}/functions/v1/import-source-connectors`:`${c}/functions/v1/import-source-connectors`}function Jr(){return window.VERKRADAR_ADMIN_COMPANY_ACTIONS_URL?window.VERKRADAR_ADMIN_COMPANY_ACTIONS_URL:window.VERKRADAR_SUPABASE_URL?`${window.VERKRADAR_SUPABASE_URL}/functions/v1/admin-company-actions`:`${c}/functions/v1/admin-company-actions`}async function Yr(e){let t=await e.text();if(!t)return{};try{return JSON.parse(t)}catch{return{errors:[t]}}}async function Xr(){if(!O.isAdmin){O.importStatus={errors:[`You do not have access to import TED notices.`]},Z();return}let e=Kr();if(!e){O.importStatus={errors:[`TED importer is not configured. Set window.VERKRADAR_TED_IMPORT_URL or window.VERKRADAR_SUPABASE_URL for this environment.`]},Z();return}O.importLoading=!0,O.importStatus=null,O.importedTedOpportunities=[],Z();try{let t=await fetch(e,{method:`POST`,headers:await $r(),body:JSON.stringify({limit:50,importMode:O.tedImportMode})}),n=await Yr(t);if(O.importStatus=t.ok?n:{...n,errors:n.errors||[`Import failed with status ${t.status}`]},t.ok){await M();let e=O.companyId?await ki():Number(n.matched||0);await Qr(),O.isAdmin&&(await Un(),await Wn()),O.importStatus={...O.importStatus,matched:e},U(`TED import completed`,`success`)}}catch(e){O.importStatus={errors:[e instanceof Error?e.message:String(e)]}}finally{O.importLoading=!1,Z()}}async function Zr(e=``){if(!O.isAdmin){O.connectorImportStatus={errors:[`You do not have access to run source imports.`]},Z();return}let t=qr();if(!t){O.connectorImportStatus={errors:[`Source connector importer is not configured. Set window.VERKRADAR_SOURCE_CONNECTOR_IMPORT_URL or window.VERKRADAR_SUPABASE_URL for this environment.`]},Z();return}O.connectorImportLoading=!e,O.connectorTestingSourceId=e||null,O.connectorImportStatus=null,Z();try{let n=await fetch(t,{method:`POST`,headers:await $r(),body:JSON.stringify({limit:e?50:20,maxSources:e?1:6,sourceId:e||void 0,refreshMatches:!!e,generateReports:!1})}),r=await Yr(n),i=Array.isArray(r.errors)?r.errors:[],a=Array.isArray(r.failedSources)?r.failedSources:[];O.connectorImportStatus=n.ok?{...r,failedSources:a}:{...r,failedSources:a,errors:i.length?i:[`Source import failed with status ${n.status}${n.statusText?` ${n.statusText}`:``}`]},n.ok&&(await M(),await gr(),U(e?`Source test completed`:`Automatic source imports completed`,`success`))}catch(e){O.connectorImportStatus={errors:[e instanceof Error?e.message:String(e)]}}finally{O.connectorImportLoading=!1,O.connectorTestingSourceId=null,Z()}}async function Qr(){if(!l){O.importedTedOpportunities=[],O.importedTedOpportunitiesLoaded=!0;return}O.importedTedOpportunitiesLoading=!0,O.importedTedOpportunitiesError=null;try{let{data:e,error:t}=await l.from(`sources`).select(`id, name`).in(`name`,[`TED Iceland/Nordic`,`EU TED`,`Tenders Electronic Daily`]);if(t)throw t;let n=(e||[]).map(e=>e.id).filter(Boolean);if(!n.length){O.importedTedOpportunities=[];return}let{data:r,error:i}=await l.from(`opportunities`).select(`*, sources(name, source_type)`).in(`source_id`,n).order(`created_at`,{ascending:!1}).limit(10);if(i)throw i;O.importedTedOpportunities=(r||[]).map(_r)}catch(e){console.error(`Failed to load latest TED opportunities:`,e),O.importedTedOpportunities=[],O.importedTedOpportunitiesError=H(e)}finally{O.importedTedOpportunitiesLoading=!1,O.importedTedOpportunitiesLoaded=!0}}async function $r(){let e={"content-type":`application/json`},t=window.VERKRADAR_SUPABASE_ANON_KEY||`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFzb2p4amJzZ3FiZnBiZXBvanpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAwNTU2NjgsImV4cCI6MjA5NTYzMTY2OH0.yPA34VbqWqKrBPespmHr5AojYzjhy3kGRxswO9XdAd0`;t&&t!==`PASTE_MY_ANON_PUBLIC_KEY_HERE`&&(e.apikey=t);let{data:n,error:r}=l?await l.auth.getSession():{data:{session:null},error:null};if(r)throw r;let i=n.session?.access_token;if(!i)throw Error(`You must be logged in to run this admin action.`);return e.authorization=`Bearer ${i}`,e}function ei(){return O.pendingInviteToken?`${window.location.origin}/#/accept-invite?token=${encodeURIComponent(O.pendingInviteToken)}`:`${window.location.origin}/#/onboarding`}function ti(){return`${window.location.origin}/#/reset-password`}function ni(e){let t=e?.user?.identities;return Array.isArray(t)&&t.length===0}function ri(){return[{label:D(`login`),href:k(`/login`),variant:`primary`},{label:D(`forgotPassword`),href:k(`/forgot-password`),variant:`secondary`}]}async function ii(e,t){Sn(),O.authSubmitting=!0,O.authMessage=null,Z();try{if(!l)throw Error(`Supabase client is not configured.`);let{data:n,error:r}=await l.auth.signUp({email:String(e||``).trim(),password:String(t||``),options:{emailRedirectTo:ei()}});if(r)throw r;if(wn(),ni(n)){O.user=null,O.currentUser=null,O.authMessage={type:`error`,text:D(`signupExistingAccount`),actions:ri()},O.authForm.password=``,Z();return}if(!n.session?.user){O.user=null,O.currentUser=null,O.authMessage={type:`success`,text:Array.isArray(n?.user?.identities)&&n.user.identities.length>0?D(`signupCreatedConfirm`):D(`signupNeutralNextSteps`)},O.authForm.password=``,Z();return}O.user=n.session.user,O.currentUser=O.user,O.profileDraft=null,O.profileDraftDirty=!1,await ui(O.user),O.authMessage={type:`success`,text:D(`signupCreatedConfirm`)},await gi({overwriteDraft:!0}),Wr(),A(Fn())}catch(e){console.error(`Signup failed:`,e);let t=Ii(e);O.authMessage={type:`error`,text:Fi(e,`signup`),actions:t?ri():[]},Z()}finally{O.authSubmitting=!1,Z()}}async function ai(e,t){O.authSubmitting=!0,O.authMessage=null,Z();try{if(!l)throw Error(`Supabase client is not configured.`);let{data:n,error:r}=await l.auth.signInWithPassword({email:String(e||``).trim(),password:String(t||``)});if(r)throw r;O.user=n.user||await li(),O.currentUser=O.user,O.profileDraft=null,O.profileDraftDirty=!1,await ui(O.user),await gi({overwriteDraft:!0}),Wr(),A(Fn())}catch(e){console.error(`Login failed:`,e),O.authMessage={type:`error`,text:Fi(e,`login`)},Z()}finally{O.authSubmitting=!1,Z()}}async function oi(e){O.authSubmitting=!0,O.authMessage=null,Z();try{if(!l)throw Error(`Supabase client is not configured.`);let{error:t}=await l.auth.resetPasswordForEmail(String(e||``).trim(),{redirectTo:ti()});if(t)throw t;O.authMessage={type:`success`,text:`If an account exists for this email, a reset link has been sent.`}}catch(e){console.error(`Password reset request failed:`,e),O.authMessage={type:`error`,text:`We could not send a reset link right now. Please try again.`}}finally{O.authSubmitting=!1,Z()}}async function si(e,t){let n=String(e||``),r=String(t||``);if(!n){O.authMessage={type:`error`,text:`Enter a new password.`},Z();return}if(n.length<8){O.authMessage={type:`error`,text:`Password must be at least 8 characters.`},Z();return}if(n!==r){O.authMessage={type:`error`,text:`Passwords do not match.`},Z();return}O.authSubmitting=!0,O.authMessage=null,Z();try{if(!l)throw Error(`Supabase client is not configured.`);let{error:e}=await l.auth.updateUser({password:n});if(e)throw e;Gr(),A(`/login`),O.authMessage={type:`success`,text:`Password updated. You can now log in.`},Z()}catch(e){console.error(`Password update failed:`,e),O.authMessage={type:`error`,text:`This reset link may be expired or invalid. Request a new reset link and try again.`},Z()}finally{O.authSubmitting=!1,Z()}}async function ci(){try{if(l){let{error:e}=await l.auth.signOut();if(e)throw e}}catch(e){console.error(`Logout failed:`,e)}finally{O.user=null,O.currentUser=null,O.isAdmin=!1,O.authLoaded=!0,O.adminLoaded=!0,O.profileLoaded=!0,wn(),A(`/`),Z()}}async function li(){if(!l)return null;let{data:e,error:t}=await l.auth.getUser();return t?(console.error(`Failed to get current user:`,t),null):e.user||null}async function ui(e=O.user){if(!l||!e)return O.isAdmin=!1,!1;try{let{data:t,error:n}=await l.from(`admin_users`).select(`user_id`).eq(`user_id`,e.id).maybeSingle();if(n)throw n;return O.isAdmin=!!t?.user_id,O.isAdmin}catch(e){return console.error(`Failed to check admin access:`,e),O.isAdmin=!1,!1}}function V(){return Q(`
    <section class="empty-state">
      <h1>${E(D(`authRequiredTitle`))}</h1>
      <p>${E(D(`authRequiredText`))}</p>
      <button class="btn btn-primary" data-action="go" data-href="/login">${E(D(`login`))}</button>
      <button class="btn btn-secondary" data-action="go" data-href="/signup">${E(D(`createAccount`))}</button>
    </section>
  `)}function di(){return Q(`
    <section class="empty-state">
      <h1>You do not have access to this page.</h1>
      <p>Admin access is limited to approved VerkRadar admin users.</p>
    </section>
  `)}var fi=!1,pi=!1;async function mi(){if(!l)return O.user=null,O.currentUser=null,null;let{data:e,error:t}=await l.auth.getSession();if(t)throw t;return O.user=e.session?.user||null,O.currentUser=O.user,O.user}async function hi(){O.adminLoaded=!1,await ui(O.currentUser||O.user),O.adminLoaded=!0}async function gi(e={}){let{overwriteDraft:t=!1,showGlobalLoading:n=!1}=e;(n||!O.profile&&!O.profileDraftDirty)&&(O.profileLoaded=!1),O.profileLoading=!0,O.profileLoadError=null;try{await _i(Si({overwriteDraft:t}),pn,`Profile loading took too long. Please retry.`)}catch(e){console.error(`Failed to load profile from Supabase:`,e),O.profileLoadError=H(e)}finally{O.profileLoading=!1,O.profileLoaded=!0}}function _i(e,t,n){let r,i=new Promise((e,i)=>{r=setTimeout(()=>i(Error(n)),t)});return Promise.race([e,i]).finally(()=>clearTimeout(r))}async function vi(){if(!O.isSavingProfile){O.profileLoadError=null,O.profileLoading=!0,Z();try{await gi({overwriteDraft:!0})}catch(e){console.error(`Settings profile retry failed:`,e),O.profileLoadError=H(e)}finally{O.profileLoading=!1,O.profileLoaded=!0,Z(),j()}}}function yi(){!l||pi||(pi=!0,l.auth.onAuthStateChange(async(e,t)=>{if(fi){if(O.user=t?.user||null,O.currentUser=O.user,O.user){if(e===`PASSWORD_RECOVERY`){O.authLoaded=!0,O.adminLoaded=!0,O.profileLoaded=!0,O.authMessage=null,A(`/reset-password`);return}try{await hi(),O.route===`/settings`&&O.profileDraftDirty?O.profileLoaded=!0:await gi()}catch(e){console.error(`Auth profile refresh failed:`,e),O.profileLoadError=H(e),O.adminLoaded=!0,O.profileLoaded=!0}if(Bn())return;Z(),j();return}O.isAdmin=!1,O.profile=null,O.companyMembership=null,O.profileDraft=null,O.profileDraftDirty=!1,O.profileLoading=!1,O.profileLoadError=null,O.companyId=null,O.storedMatches=[],O.reports=[],O.reportsLoaded=!1,O.reportsLoadError=null,O.selectedReportId=null,O.authLoaded=!0,O.adminLoaded=!0,O.profileLoaded=!0,e===`SIGNED_OUT`&&A(`/`),Z(),j()}}))}async function bi(){O.isBooting=!0,O.authLoaded=!1,O.profileLoaded=!1,O.adminLoaded=!1,O.bootError=null,Z();try{yi(),await mi(),O.authLoaded=!0,O.currentUser?(await hi(),await gi({overwriteDraft:!0,showGlobalLoading:!0})):(O.profile=null,O.companyMembership=null,O.profileDraft=null,O.profileDraftDirty=!1,O.profileLoading=!1,O.profileLoadError=null,O.companyId=null,O.isAdmin=!1,O.adminLoaded=!0,O.profileLoaded=!0)}catch(e){console.error(`Boot failed:`,e),O.bootError=H(e),O.authLoaded=!0,O.adminLoaded=!0,O.profileLoaded=!0}finally{O.authLoading=!1,O.isBooting=!1,fi=!0,Rn()?zn(`/reset-password`):Bn({replace:!0}),Z(),j()}}async function xi(){if(!l||!O.user)return{company:null,membership:null};let{data:e,error:t}=await l.from(`companies`).select(`*`).eq(`owner_id`,O.user.id).maybeSingle();if(t)throw t;if(e)return{company:e,membership:null};let n=(await re(l,O.user))[0]||null;if(!n?.company_id)return{company:null,membership:null};let{data:r,error:i}=await l.from(`companies`).select(`*`).eq(`id`,n.company_id).maybeSingle();if(i)throw i;return{company:r||null,membership:n}}async function Si(e={}){let{overwriteDraft:t=!1}=e;if(!l||!O.user){O.profile=null,O.companyMembership=null,(t||!O.profileDraftDirty)&&(O.profileDraft=null),Z();return}try{await ne(l,O.user).catch(e=>(console.warn(`Failed to claim invited company memberships:`,e),[]));let{company:e,membership:n}=await xi();if(!e){O.companyId=null,O.companyMembership=null,O.storedMatches=[],O.reports=[],O.reportsLoaded=!1,O.reportsLoadError=null,O.selectedReportId=null,O.profile=null,(t||!O.profileDraftDirty)&&(O.profileDraft=null),O.profileLoadError=null,Z(),j();return}if(O.profileDraftDirty&&O.companyId&&O.companyId!==e.id&&!t){if(!window.confirm(`You have unsaved profile changes. Switch company profile and discard those edits?`)){O.profileLoadError=`Unsaved changes were kept. Save or reload before switching company profiles.`,Z(),j();return}O.profileDraftDirty=!1}let[r,i,a]=await Promise.all([l.from(`company_services`).select(`service`).eq(`company_id`,e.id),l.from(`company_locations`).select(`location`).eq(`company_id`,e.id),l.from(`company_keywords`).select(`keyword, type`).eq(`company_id`,e.id)]);if(r.error)throw r.error;if(i.error)throw i.error;if(a.error)throw a.error;O.companyId!==e.id&&(O.reports=[],O.reportsLoaded=!1,O.reportsLoadError=null,O.selectedReportId=null),O.companyId=e.id,O.companyMembership=n||null;let o=wi(e,r.data||[],i.data||[],a.data||[]);O.profile=o,(t||!O.profileDraftDirty)&&qi(o),O.profileLoadError=null,Li(O.profile),await Ka(),await Ti(),Z(),j()}catch(e){console.error(`Failed to load Supabase company profile:`,e),O.profileLoadError=H(e),O.profileDraftDirty||(O.companyId=null,O.companyMembership=null,O.storedMatches=[],O.reports=[],O.reportsLoaded=!1,O.reportsLoadError=null,O.selectedReportId=null,O.profile=null),O.profileDraftDirty||(O.profileDraft=null),Z(),j()}}async function Ci(e){if(!l)throw Error(`Supabase client is not configured.`);let t={...e,companyName:String(e.companyName||``).trim(),kennitala:String(e.kennitala||``).trim(),contactEmail:String(e.contactEmail||``).trim(),billingEmail:String(e.billingEmail||``).trim(),contactName:String(e.contactName||``).trim(),phone:String(e.phone||``).trim(),address:String(e.address||``).trim(),website:String(e.website||``).trim(),industry:String(e.industry||``).trim(),selectedPlan:_n(e.selectedPlan||O.pendingSignupPlan||O.profile?.selectedPlan||O.profile?.plan)||`basic`,billingStatus:e.billingStatus||O.profile?.billingStatus||`trial`,trialStartedAt:e.trialStartedAt||O.profile?.trialStartedAt||new Date().toISOString(),trialEndsAt:e.trialEndsAt||O.profile?.trialEndsAt||new Date(Date.now()+336*60*60*1e3).toISOString(),services:w(e.services),locations:w(e.locations),includeKeywords:w(e.includeKeywords),excludeKeywords:w(e.excludeKeywords),baseLocation:String(e.baseLocation||``).trim(),serviceAreas:w(e.serviceAreas),willingToTravel:!!e.willingToTravel,nationalProjects:!!e.nationalProjects,remoteProjects:!!e.remoteProjects,minimumProjectValueForTravel:Vi(e.minimumProjectValueForTravel),minProjectValue:Vi(e.minProjectValue),maxProjectValue:Vi(e.maxProjectValue),allowUnknownValue:!!e.allowUnknownValue,reportFrequency:e.reportFrequency||`weekly`,reportDay:e.reportDay||`monday`,deadlineReminders:!!e.deadlineReminders,includeLowConfidence:!!e.includeLowConfidence,autoAlertMode:e.autoAlertMode||`auto_safe_only`},{data:{user:n},error:r}=await l.auth.getUser();if(r)throw r;if(!n)throw Error(`You must be logged in to save a company profile.`);O.user=n;let i={company_name:t.companyName,contact_email:t.contactEmail||n.email,kennitala:t.kennitala||null,billing_email:t.billingEmail||t.contactEmail||n.email,contact_name:t.contactName||null,phone:t.phone||null,address:t.address||null,website:t.website||null,industry:t.industry,plan:t.selectedPlan,selected_plan:t.selectedPlan,billing_status:t.billingStatus,trial_started_at:t.trialStartedAt,trial_ends_at:t.trialEndsAt,base_location:t.baseLocation||null,service_areas:t.serviceAreas,willing_to_travel:t.willingToTravel,national_projects:t.nationalProjects,remote_projects:t.remoteProjects,minimum_project_value_for_travel:t.minimumProjectValueForTravel,min_project_value:t.minProjectValue,max_project_value:t.maxProjectValue,allow_unknown_value:t.allowUnknownValue,report_frequency:t.reportFrequency,report_day:t.reportDay,deadline_reminders:t.deadlineReminders,include_low_confidence:t.includeLowConfidence,auto_alert_mode:t.autoAlertMode},{data:a,error:o}=await(O.companyId?l.from(`companies`).update(i).eq(`id`,O.companyId).select().single():l.from(`companies`).upsert({...i,owner_id:n.id},{onConflict:`owner_id`}).select().single());if(o)throw console.error(`Company upsert error:`,o),o;O.companyId!==a.id&&(O.reports=[],O.reportsLoaded=!1,O.reportsLoadError=null,O.selectedReportId=null),O.companyId=a.id;let s=(await Promise.all([l.from(`company_services`).delete().eq(`company_id`,a.id),l.from(`company_locations`).delete().eq(`company_id`,a.id),l.from(`company_keywords`).delete().eq(`company_id`,a.id)])).find(e=>e.error)?.error;if(s)throw s;let c=t.services.map(e=>({company_id:a.id,service:e})),u=t.locations.map(e=>({company_id:a.id,location:e})),d=[...t.includeKeywords.map(e=>({company_id:a.id,keyword:e,type:`include`})),...t.excludeKeywords.map(e=>({company_id:a.id,keyword:e,type:`exclude`}))];if(c.length){let{error:e}=await l.from(`company_services`).insert(c);if(e)throw e}if(u.length){let{error:e}=await l.from(`company_locations`).insert(u);if(e)throw e}if(d.length){let{error:e}=await l.from(`company_keywords`).insert(d);if(e)throw e}O.profile=t,O.pendingSignupPlan=``,bn(),Li(t)}function wi(e,t,n,r){return{id:e.id||``,ownerId:e.owner_id||``,companyName:e.company_name||``,kennitala:e.kennitala||``,contactEmail:e.contact_email||``,billingEmail:e.billing_email||e.contact_email||``,contactName:e.contact_name||``,phone:e.phone||``,address:e.address||``,website:e.website||``,industry:e.industry||``,plan:e.plan||e.selected_plan||`basic`,selectedPlan:e.selected_plan||e.plan||`basic`,billingStatus:e.billing_status||`trial`,trialStartedAt:e.trial_started_at||``,trialEndsAt:e.trial_ends_at||``,services:w(t.map(e=>e.service)),includeKeywords:w(r.filter(e=>e.type===`include`).map(e=>e.keyword)),excludeKeywords:w(r.filter(e=>e.type===`exclude`).map(e=>e.keyword)),locations:w(n.map(e=>e.location)),baseLocation:e.base_location||``,serviceAreas:w(e.service_areas),willingToTravel:!!e.willing_to_travel,nationalProjects:!!e.national_projects,remoteProjects:!!e.remote_projects,minimumProjectValueForTravel:e.minimum_project_value_for_travel==null?null:Number(e.minimum_project_value_for_travel),minProjectValue:e.min_project_value==null?null:Number(e.min_project_value),maxProjectValue:e.max_project_value==null?null:Number(e.max_project_value),allowUnknownValue:!!e.allow_unknown_value,reportFrequency:e.report_frequency||`weekly`,reportDay:e.report_day||`monday`,deadlineReminders:!!e.deadline_reminders,includeLowConfidence:!!e.include_low_confidence,autoAlertMode:e.auto_alert_mode||`auto_safe_only`}}async function Ti(){if(!l||!O.companyId){O.storedMatches=[];return}try{let{data:e,error:t}=await l.from(`opportunity_matches`).select(`*, opportunities(*, sources(name, source_type))`).eq(`company_id`,O.companyId).order(`match_score`,{ascending:!1});if(t)throw t;let n=(e||[]).map(e=>e.calculated_at||e.updated_at||e.created_at).filter(Boolean).map(e=>new Date(e).getTime()).filter(e=>!Number.isNaN(e));O.lastMatchedAt=n.length?new Date(Math.max(...n)).toISOString():null;let r=(e||[]).filter(e=>e.opportunities).map(vr).filter(_l).filter(F),i=r.map(e=>e.id).filter(Boolean),a=[];if(i.length){let{data:e,error:t}=await l.from(`ai_match_reviews`).select(`company_id, opportunity_id, fit, confidence, send_to_client, reason, fit_reasons, risks_or_questions, suggested_client_summary, created_at, updated_at`).eq(`company_id`,O.companyId).in(`opportunity_id`,i);t&&console.warn(`Failed to load AI reviews for report ranking:`,t),a=e||[]}O.storedMatches=Ft(r,a)}catch(e){console.error(`Failed to load stored opportunity matches. Falling back to frontend matching:`,e),O.storedMatches=[],O.lastMatchedAt=null}}async function Ei(){if(O.companyId&&!O.reportArchiveLoading){O.reportArchiveLoading=!0,O.reportsLoadError=null,Z();try{if(!l)throw Error(`Supabase client is not configured.`);let{data:e,error:t}=await l.from(`reports`).select(`
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
      `).eq(`company_id`,O.companyId).is(`archived_at`,null).order(`created_at`,{ascending:!1});if(t)throw t;O.reports=e||[],O.reportsLoaded=!0}catch(e){console.error(`Failed to load reports:`,e),O.reportsLoadError=H(e),O.reports=[],O.reportsLoaded=!0}finally{O.reportArchiveLoading=!1,Z()}}}async function Di(){if(!O.user){O.reportMessage={type:`error`,text:`Log in to save reports.`},Z();return}if(!O.companyId){O.reportMessage={type:`error`,text:`Create a company profile before saving reports.`},Z();return}let e=Jc();if(!e.length){O.reportMessage={type:`error`,text:`No useful matches above the report threshold yet.`},Z();return}let t=Xc(O.profile,e);O.reportSaveLoading=!0,O.reportMessage=null,Z();try{let{data:n,error:r}=await l.from(`reports`).insert({company_id:O.companyId,title:t.title,period_start:t.periodStart,period_end:t.periodEnd,summary:t.summary,text_content:t.textContent,html_content:t.htmlContent,status:`draft`}).select(`id`).single();if(r)throw r;let i=e.filter(e=>Kt(e.id)).map((e,t)=>({report_id:n.id,opportunity_id:e.id,match_score:e.matchScore,match_reasons:e.matchReasons||[],risks:e.risks||[],sort_order:t+1}));if(i.length){let{error:e}=await l.from(`report_items`).insert(i);if(e)throw e}O.reportMessage={type:`success`,text:`Report saved`},await Ei(),U(`Report saved`,`success`)}catch(e){console.error(`Failed to save report:`,e),O.reportMessage={type:`error`,text:`Failed to save report. ${H(e)}`}}finally{O.reportSaveLoading=!1,Z()}}async function Oi(e){if(!(!e||!l||!O.user)&&window.confirm(O.language===`is`?`Ertu viss um að þú viljir fela þetta yfirlit? Þetta er ekki hægt að afturkalla í mælaborðinu.`:`Are you sure you want to hide this report? This cannot be undone from the dashboard.`)){O.reportArchiveLoading=!0,O.reportMessage=null,Z();try{let{error:t}=await l.from(`reports`).update({archived_at:new Date().toISOString(),archived_by:O.user.id}).eq(`id`,e).eq(`company_id`,O.companyId);if(t)throw t;O.selectedReportId===e&&(O.selectedReportId=null),O.reports=O.reports.filter(t=>t.id!==e),O.reportMessage={type:`success`,text:O.language===`is`?`Yfirlitið var falið.`:`Report hidden.`},U(O.language===`is`?`Yfirlit falið`:`Report hidden`,`success`)}catch(e){console.error(`Failed to archive report:`,e),O.reportMessage={type:`error`,text:O.language===`is`?`Gat ekki falið yfirlitið. ${H(e)}`:`Could not hide report. ${H(e)}`}}finally{O.reportArchiveLoading=!1,Z()}}}async function ki(){O.matchingLoading=!0,O.matchStatus=null,Z();try{if(!l)throw Error(`Supabase client is not configured.`);let e=O.user||await li();if(!e)throw Error(`You must be logged in to run matching.`);O.user=e;let{company:t}=await xi();if(!t)throw Error(`No Supabase company profile found. Save onboarding first.`);O.companyId=t.id;let[n,r,i,a]=await Promise.all([l.from(`company_services`).select(`service`).eq(`company_id`,t.id),l.from(`company_locations`).select(`location`).eq(`company_id`,t.id),l.from(`company_keywords`).select(`keyword, type`).eq(`company_id`,t.id),l.from(`opportunities`).select(`*, sources(name, source_type)`).eq(`status`,`open`)]);if(n.error)throw n.error;if(r.error)throw r.error;if(i.error)throw i.error;if(a.error)throw a.error;let o=wi(t,n.data||[],r.data||[],i.data||[]),s=O.profileDraftDirty,c=(a.data||[]).map(_r).filter(F).map(e=>Oa(o,e)).filter(e=>e.matchScore>=50).map(e=>({company_id:t.id,opportunity_id:e.id,match_score:e.matchScore,match_label:e.matchLabel,match_reasons:e.matchReasons,risks:e.risks,next_steps:e.nextSteps,calculated_at:new Date().toISOString()})),{error:u}=await l.from(`opportunity_matches`).delete().eq(`company_id`,t.id);if(u)throw u;if(c.length){let{error:e}=await l.from(`opportunity_matches`).insert(c);if(e)throw e}O.profile=o,Li(o),s||qi(o);let d=c.length===1?`match`:`matches`;return O.matchStatus={type:`success`,text:`Matching complete — ${c.length} stored ${d} found.`},await M(),await Ka(),await Ti(),c.length}catch(e){return console.error(`Failed to run matching:`,e),O.matchStatus={type:`error`,text:`Failed to run matching. ${H(e)}`},0}finally{O.matchingLoading=!1,Z()}}async function Ai(e,t){if(!O.isAdmin){O.adminMessage={type:`error`,text:`You do not have access to this page.`},Z();return}O.adminSubmitting=!0,O.adminMessage=null,Z();try{if(!l)throw Error(`Supabase client is not configured.`);let n=Object.fromEntries(e.entries()),r=String(n.sourceName||n.source||`Manual`).trim()||`Manual`,i=String(n.title||``).trim();if(!i)throw Error(`Title is required.`);let a=String(n.description||``).trim()||`Manual opportunity: ${i}`,o={source_id:await Pi(r),external_id:`manual-${Date.now()}`,title:i,buyer:String(n.buyer||``).trim()||null,category:String(n.category||``).trim()||null,type:String(n.type||``).trim()||`tender`,description:a,deadline:n.deadline||null,published_date:n.publishedDate||n.published_date||null,location:String(n.location||``).trim()||null,estimated_value:n.estimatedValue||n.estimated_value?Number(n.estimatedValue||n.estimated_value):null,currency:`ISK`,url:n.url||null,cpv_code:n.cpvCode||n.cpv_code||null,requirements:Wt(n.requirements),keywords:Wt(n.keywords),difficulty:String(n.difficulty||``).trim()||`medium`,status:String(n.status||``).trim()||`open`,raw_payload:{created_from:`admin`,source_name:r}},{error:s}=await l.from(`opportunities`).insert(o).select().single();if(s)throw console.error(`Supabase insert error:`,s),Error(`${s.message} (${s.code})`);O.adminMessage={type:`success`,text:`Opportunity saved to Supabase.`},O.adminOpportunityDraft=Tn(),t?.reset(),await M(),O.companyId&&await ki(),U(`Opportunity added`,`success`)}catch(e){let t=H(e);console.error(`Failed to add opportunity. If this is an RLS error, allow anon insert/select during development:`,e),O.adminMessage={type:`error`,text:`Failed to save opportunity. ${t}`},Z()}finally{O.adminSubmitting=!1,Z()}}async function ji(t){if(!O.isAdmin){O.adminMessage={type:`error`,text:`You do not have access to this page.`},Z();return}O.adminDeletingId=t,O.adminMessage=null,Z();try{if(!l)throw Error(`Supabase client is not configured.`);let{error:n}=await l.from(`opportunities`).delete().eq(`id`,t);if(n)throw n;O.saved=O.saved.filter(e=>e!==t),O.ignored=O.ignored.filter(e=>e!==t),zi(e.saved,O.saved),zi(e.ignored,O.ignored),O.adminMessage={type:`success`,text:`Opportunity deleted from Supabase.`},await M(),await Qr(),U(`Opportunity deleted`,`success`)}catch(e){let t=H(e);console.error(`Failed to delete opportunity. If this is an RLS error, allow anon delete/select during development:`,e),O.adminMessage={type:`error`,text:`Failed to delete opportunity. ${t}`},Z()}finally{O.adminDeletingId=null,Z()}}async function Mi(e,t){if(!O.isAdmin){O.adminMessage={type:`error`,text:`You do not have access to this page.`},Z();return}O.adminUpdatingId=e,O.adminMessage=null,Z();try{if(!l)throw Error(`Supabase client is not configured.`);let{error:n}=await l.from(`opportunities`).update({status:t}).eq(`id`,e);if(n)throw n;O.adminMessage={type:`success`,text:t===`open`?`Opportunity marked relevant.`:`Opportunity hidden.`},await M(),await Qr(),U(t===`open`?`Marked relevant`:`Opportunity hidden`,`success`)}catch(e){let t=H(e);console.error(`Failed to update opportunity status:`,e),O.adminMessage={type:`error`,text:`Failed to update opportunity. ${t}`},Z()}finally{O.adminUpdatingId=null,Z()}}async function Ni(e,t){if(!O.isAdmin){O.adminMessage={type:`error`,text:`You do not have access to this page.`},Z();return}let n=O.opportunities.find(t=>t.id===e);if(!n)return;let r={include:{opportunity_intent:`confirmed_tender`,quality_status:`confirmed_tender`,hidden_from_reports:!1,admin_report_status:`include`},hide:{hidden_from_reports:!0,admin_report_status:`hidden`},noise:{opportunity_intent:`not_opportunity`,quality_status:`needs_review`,hidden_from_reports:!0,admin_report_status:`noise`},confirmed_tender:{opportunity_intent:`confirmed_tender`,quality_status:`confirmed_tender`,hidden_from_reports:!1,admin_report_status:`include`},early_opportunity:{opportunity_intent:`early_opportunity`,quality_status:`early_signal`,hidden_from_reports:!1,admin_report_status:`include`}}[t];if(r){O.adminUpdatingId=e,O.adminMessage=null,Z();try{if(!l)throw Error(`Supabase client is not configured.`);let t={...n.rawPayload||{},...r,admin_reviewed_at:new Date().toISOString()},{error:i}=await l.from(`opportunities`).update({raw_payload:t}).eq(`id`,e);if(i)throw i;O.adminMessage={type:`success`,text:`Report visibility updated.`},await M(),U(`Report visibility updated`,`success`)}catch(e){let t=H(e);console.error(`Failed to update report visibility:`,e),O.adminMessage={type:`error`,text:`Failed to update report visibility. ${t}`},Z()}finally{O.adminUpdatingId=null,Z()}}}async function Pi(e){if(!l)throw Error(`Supabase client is not configured`);let t=e&&e.trim()?e.trim():`Manual`,{data:n,error:r}=await l.from(`sources`).select(`id`).eq(`name`,t).maybeSingle();if(r)throw console.error(`Source select error:`,r),r;if(n&&n.id)return n.id;let{data:i,error:a}=await l.from(`sources`).insert({name:t,source_type:`manual`,is_active:!0,notes:`Created from VerkRadar admin page`}).select(`id`).single();if(a)throw console.error(`Source insert error:`,a),a;return i.id}function H(e){return e?typeof e==`string`?e:[e.message,e.details,e.hint,e.code].filter(Boolean).join(` `):`Unknown error`}function Fi(e,t=`login`){let n=String(e?.message||e||``).toLowerCase(),r=String(e?.code||e?.status||``).toLowerCase();return n.includes(`invalid login credentials`)||n.includes(`invalid_credentials`)||r.includes(`invalid_credentials`)?D(`emailOrPasswordIncorrect`):n.includes(`email not confirmed`)?D(`confirmEmailBeforeLogin`):Ii(e)?D(`signupExistingAccount`):n.includes(`password`)&&n.includes(`characters`)?D(`passwordTooShort`):n.includes(`rate limit`)||n.includes(`too many`)?D(`tooManyAttempts`):D(t===`signup`?`couldNotCreateAccount`:`couldNotLogin`)}function Ii(e){let t=String(e?.message||e||``).toLowerCase(),n=String(e?.code||e?.status||``).toLowerCase();return t.includes(`user already registered`)||t.includes(`already registered`)||t.includes(`already exists`)||n.includes(`user_already_exists`)||n.includes(`email_exists`)}function U(e,t=`success`){O.toast={message:e,type:t},Z(),clearTimeout(window.__toastTimeout),window.__toastTimeout=setTimeout(()=>{O.toast=null,Z()},2500)}function Li(t){localStorage.setItem(e.profile,JSON.stringify(t))}function Ri(e){try{let t=localStorage.getItem(e);return t?JSON.parse(t):[]}catch{return[]}}function zi(e,t){localStorage.setItem(e,JSON.stringify(t))}function Bi(e){return w(e).join(`, `)}function Vi(e){if(e==null||e===``)return null;let t=Number(e);return Number.isFinite(t)?t:null}function Hi(e){return String(e||``).trim().toLowerCase()}function Ui(e,t=O.profileDraft?.industry){return i[e]?.[t]||[]}function Wi(e,t){if(![`services`,`includeKeywords`,`excludeKeywords`].includes(e)||!t)return;W();let n=Array.isArray(O.profileDraft[e])?O.profileDraft[e]:[],r=Hi(t),i=n.some(e=>Hi(e)===r);O.profileDraft[e]=i?n.filter(e=>Hi(e)!==r):[...n,t],G(),Z()}function Gi({field:e,title:t,values:n,selectedValues:r}){if(!n.length)return``;let i=Array.isArray(r)?r:[];return`
    <div class="suggestion-group">
      <div class="suggestion-group-head">
        <span>${E(t)}</span>
      </div>
      <div class="suggestion-chips">
        ${n.map(t=>{let n=i.some(e=>Hi(e)===Hi(t));return`
            <button
              type="button"
              class="suggestion-chip ${n?`is-selected`:``}"
              data-action="toggle-profile-suggestion"
              data-field="${E(e)}"
              data-value="${E(t)}"
              aria-pressed="${n?`true`:`false`}"
            >${E(t)}</button>
          `}).join(``)}
      </div>
    </div>
  `}function W(){if(!O.profileDraft){if(O.profile){O.profileDraft=Ki(O.profile);return}O.profileDraft=mn(),O.pendingSignupPlan&&(O.profileDraft.selectedPlan=O.pendingSignupPlan)}}function Ki(e){return{...e,services:w(e.services),includeKeywords:w(e.includeKeywords),excludeKeywords:w(e.excludeKeywords),locations:w(e.locations),serviceAreas:w(e.serviceAreas)}}function G(){O.profileDraftDirty=!0,O.profileSaved=!1,O.profileSaveMessage=null,O.profileSaveError=null}function qi(e){O.profileDraft=Ki(e||mn()),O.profileDraftDirty=!1}function Ji(e){W();let t=new FormData(e),n={...O.profileDraft};K(e,`companyName`)&&(n.companyName=String(t.get(`companyName`)||``).trim()),K(e,`kennitala`)&&(n.kennitala=String(t.get(`kennitala`)||``).trim()),K(e,`contactEmail`)&&(n.contactEmail=String(t.get(`contactEmail`)||``).trim()),K(e,`billingEmail`)&&(n.billingEmail=String(t.get(`billingEmail`)||``).trim()),K(e,`contactName`)&&(n.contactName=String(t.get(`contactName`)||``).trim()),K(e,`phone`)&&(n.phone=String(t.get(`phone`)||``).trim()),K(e,`address`)&&(n.address=String(t.get(`address`)||``).trim()),K(e,`website`)&&(n.website=String(t.get(`website`)||``).trim()),K(e,`selectedPlan`)&&(n.selectedPlan=_n(t.get(`selectedPlan`))||`basic`),K(e,`industry`)&&(n.industry=String(t.get(`industry`)||``)),K(e,`services`)&&(n.services=Ut(t.get(`services`))),K(e,`includeKeywords`)&&(n.includeKeywords=Ut(t.get(`includeKeywords`))),K(e,`excludeKeywords`)&&(n.excludeKeywords=Ut(t.get(`excludeKeywords`))),K(e,`locations`)&&(n.locations=t.getAll(`locations`)),K(e,`baseLocation`)&&(n.baseLocation=String(t.get(`baseLocation`)||``)),K(e,`serviceAreas`)&&(n.serviceAreas=Ut(t.get(`serviceAreas`))),K(e,`willingToTravel`)&&(n.willingToTravel=t.get(`willingToTravel`)===`on`),K(e,`nationalProjects`)&&(n.nationalProjects=t.get(`nationalProjects`)===`on`),K(e,`remoteProjects`)&&(n.remoteProjects=t.get(`remoteProjects`)===`on`),K(e,`minimumProjectValueForTravel`)&&(n.minimumProjectValueForTravel=String(t.get(`minimumProjectValueForTravel`)||``)),K(e,`minProjectValue`)&&(n.minProjectValue=String(t.get(`minProjectValue`)||``)),K(e,`maxProjectValue`)&&(n.maxProjectValue=String(t.get(`maxProjectValue`)||``)),K(e,`allowUnknownValue`)&&(n.allowUnknownValue=t.get(`allowUnknownValue`)===`on`),K(e,`reportFrequency`)&&(n.reportFrequency=String(t.get(`reportFrequency`)||`weekly`)),K(e,`reportDay`)&&(n.reportDay=String(t.get(`reportDay`)||`monday`)),K(e,`deadlineReminders`)&&(n.deadlineReminders=t.get(`deadlineReminders`)===`on`),K(e,`includeLowConfidence`)&&(n.includeLowConfidence=t.get(`includeLowConfidence`)===`on`),O.profileDraft=n,G()}function K(e,t){return!!e.querySelector(`[name="${CSS.escape(t)}"]`)}function Yi(){return W(),{...O.profileDraft,companyName:String(O.profileDraft.companyName||``).trim(),kennitala:String(O.profileDraft.kennitala||``).trim(),contactEmail:String(O.profileDraft.contactEmail||``).trim(),billingEmail:String(O.profileDraft.billingEmail||``).trim(),contactName:String(O.profileDraft.contactName||``).trim(),phone:String(O.profileDraft.phone||``).trim(),address:String(O.profileDraft.address||``).trim(),website:String(O.profileDraft.website||``).trim(),selectedPlan:_n(O.profileDraft.selectedPlan||O.pendingSignupPlan)||`basic`,industry:String(O.profileDraft.industry||``),services:w(O.profileDraft.services),includeKeywords:w(O.profileDraft.includeKeywords),excludeKeywords:w(O.profileDraft.excludeKeywords),locations:w(O.profileDraft.locations),baseLocation:String(O.profileDraft.baseLocation||``),serviceAreas:w(O.profileDraft.serviceAreas),willingToTravel:!!O.profileDraft.willingToTravel,nationalProjects:!!O.profileDraft.nationalProjects,remoteProjects:!!O.profileDraft.remoteProjects,minimumProjectValueForTravel:Vi(O.profileDraft.minimumProjectValueForTravel),minProjectValue:Vi(O.profileDraft.minProjectValue),maxProjectValue:Vi(O.profileDraft.maxProjectValue)}}function Xi(e,t){return String(e||``).toLowerCase().includes(String(t||``).toLowerCase())}function Zi(e){return[e.title,e.description,e.category,e.location,...e.keywords||[]].join(` `).toLowerCase()}var Qi=`jarðvinna.gatnagerð.gatna- og stígagerð.gatna og stígagerð.stígagerð.lóðarframkvæmdir.lagnavinna.lagnir.fráveita.fráveitulagnir.vatnsveita.hitaveita.vatnslagnir.regnvatnslagnir.drenlagnir.endurnýjun lagna.brunnar.dælubrunnar.malbikun.gangstétt.gangstéttir.stígar.bílastæði.vegagerð.gröftur.fyllingar.grjóthleðsla.jarðvegsskipti.undirbygging.yfirborðsfrágangur.hellulögn.hellulagnir.kantsteinn.kantsteinar.landmótun.afvötnun.jarðvegsvinna.útiframkvæmdir.gatnaframkvæmdir`.split(`.`),$i=[`snjómokstur`,`snjóruðningur`,`hálkuvarnir`,`vetrarþjónusta`,`gangstéttir`,`stofnanalóðir`],ea=[`framkvæmdir`,`framkvæmd`,`útboð`,`verðfyrirspurn`,`tilboð`,`viðhald`,`verktaki`,`verk`],ta=[`innanhússfrágangur`,`innanhúss`,`smíði`,`smíðavinna`,`málun`,`gólfefni`,`innréttingar`,`raflagnir`,`pípulagnir`,`leikskóli`,`skóli`,`húsnæði`,`byggingarvinna`],na=[`innanhússfrágangur`,`innanhúss`,`smíði`,`smíðavinna`,`málun`,`gólfefni`,`innréttingar`,`raflagnir`,`pípulagnir`,`byggingarvinna`],ra=[`for- og verkhönnun`,`verkhönnun`,`forhönnun`,`hönnun`,`ráðgjöf`,`verkfræðiráðgjöf`,`eftirlit`,`umsjón`,`verkefnastjórn`,`verkefnastjórnun`],ia=[`hönnun`,`for- og verkhönnun`,`verkhönnun`,`forhönnun`,`ráðgjöf`,`verkfræðiráðgjöf`,`eftirlit`,`umsjón`,`verkefnastjórn`,`verkefnastjórnun`],aa=[`jarðvinna`,`jarðvegsvinna`,`gatnagerð`,`gatna- og stígagerð`,`stígagerð`,`vegagerð`,`lóðarframkvæmdir`,`gröftur`,`jarðvegsskipti`,`fyllingar`,`afvötnun`,`landmótun`,`yfirborðsfrágangur`,`malbikun`,`útiframkvæmdir`];function q(e){return T(e)}function J(e,t){let n=q(e);return t.some(e=>n.includes(q(e)))}function Y(e){let t=q(e);return ea.some(e=>t===q(e))}function oa(e){let t=q(e);return Qi.some(e=>t===q(e))?0:Qi.some(e=>t.includes(q(e))||q(e).includes(t))?1:$i.some(e=>t===q(e))?2:Y(e)?10:3}function sa(e){return[...e].sort((e,t)=>oa(e)-oa(t)||String(t).length-String(e).length||String(e).localeCompare(String(t)))}function ca(e){let t=q(e);return Qi.filter(e=>t.includes(q(e)))}function la(e){let t=q(e);return $i.filter(e=>t.includes(q(e)))}function ua(e,t){let n=ca(t);if(!n.length||!e.some(Y))return e;let r=e.filter(e=>!Y(e));return[...new Set([...n,...r])]}function da(e={}){return J([e.industry,...Array.isArray(e.services)?e.services:[],...Array.isArray(e.includeKeywords)?e.includeKeywords:[]].filter(Boolean).join(` `),[...Qi,...$i,`construction`,`contractor`,`verktaki`,`mannvirki`,`jarðtækni`])}function fa(e={}){return J([...Array.isArray(e.services)?e.services:[],...Array.isArray(e.includeKeywords)?e.includeKeywords:[]].filter(Boolean).join(` `),$i)}function pa(e={}){return J([...Array.isArray(e.services)?e.services:[],...Array.isArray(e.includeKeywords)?e.includeKeywords:[]].filter(Boolean).join(` `),na)}function ma(e={}){return J([...Array.isArray(e.services)?e.services:[],...Array.isArray(e.includeKeywords)?e.includeKeywords:[]].filter(Boolean).join(` `),ia)}function ha(e={}){return J([e.industry,...Array.isArray(e.services)?e.services:[],...Array.isArray(e.includeKeywords)?e.includeKeywords:[]].filter(Boolean).join(` `),aa)}function ga(e,t,n,r){if(!da(e))return{isCivilProfile:!1,serviceHits:n,keywordHits:r,hasWeakOnlyFit:!1,hasIndoorMismatch:!1,hasConsultingMismatch:!1,hasSecondaryOnlyFit:!1,hasPromotedBroadFit:!1,hasWinterOnlyFit:!1};let i=Zi(t),a=J(i,Qi),o=J(i,$i),s=fa(e),c=o&&s,l=J(i,ta),u=pa(e),d=J(i,ra),f=ma(e),p=ca(i),m=c?la(i):[],h=n.length>0&&n.every(Y),ee=r.length>0&&r.every(Y),g=[...n,...r].some(e=>!Y(e)),te=[...n,...r].some(Y),_=!g&&te&&a,ne=_||c?[...new Set([...n,..._?p:[],...m])]:n,re=a||c||g,ie=re&&_?ua(ne,i):ne.filter(e=>!Y(e)),ae=re&&_?ua(r,i):r.filter(e=>!Y(e)),v=[...new Set([...ie,...ae].filter(e=>!Y(e)))],y=!ha(e);return{isCivilProfile:!0,serviceHits:sa(ie),keywordHits:sa(ae),hasWeakOnlyFit:!a&&!c&&!g&&(h||ee),hasIndoorMismatch:l&&!a&&!u,hasConsultingMismatch:d&&!f,hasWinterOnlyFit:c&&!a,hasSecondaryOnlyFit:g&&y&&v.length<=2&&p.length>=3,hasPromotedBroadFit:_}}function _a(e){let t=T(e.location);if(wa(t)&&Ta(e))return!1;let n=T(`${e.title} ${e.description} ${e.location}`);return[`all iceland`,`iceland`,`island`].some(e=>t.includes(e))?!0:[`national`,`landsvist`,`nationwide`].some(e=>n.includes(e))}function va(e){return[...e.locations||[],...e.serviceAreas||[],e.baseLocation].filter(Boolean)}function ya(e,t){let n=va(e);if(!n.length)return!1;let r=Vr(t);if(n.includes(`All Iceland`)){let e=T(Ca(t));return r===`IS`||e.includes(`iceland`)||e.includes(`island`)}if(n.includes(`Remote / Online`)&&Ca(t)===`Remote / Online`)return!0;if(!r||r!==`IS`&&n.some(e=>T(e).includes(`iceland`)))return!1;let i=T(Ca(t));return n.some(e=>{let t=T(e);return t?t===i||t===`reykjavik`&&[`reykjavik`,`capital area`,`hofudborgarsvaedid`].includes(i)||t===`capital area`&&[`reykjavik`,`capital area`,`hofudborgarsvaedid`].includes(i)?!0:i.includes(t)||t.includes(i):!1})}function ba(e,t){return e?ya(e,t)?`local_match`:e.locations?.includes(`Remote / Online`)&&Ca(t)===`Remote / Online`?`remote_match`:_a(t)&&(Sa(t)||Vr(t)===`IS`)?`national_match`:Ca(t)===`Remote / Online`&&e.remoteProjects?`remote_match`:Sa(t)&&(e.nationalProjects||e.willingToTravel)?`outside_area_possible`:`outside_area_low_confidence`:`outside_area_low_confidence`}function xa(e,t){let n=ba(e,t);return n===`local_match`?`Local match`:n===`national_match`?`National opportunity`:n===`remote_match`?`Remote opportunity`:n===`outside_area_possible`?`Outside base area but travel allowed`:n===`outside_area_low_confidence`?`Outside selected area; low-confidence location match`:null}function Sa(e){if(Vr(e)===`IS`)return!0;let t=T(Ca(e));return[`iceland`,`island`,`all iceland`,`reykjavik`,`capital area`,`hofudborgarsvaedid`,`east iceland`,`west iceland`,`north iceland`,`south iceland`,`sudurnes`].some(e=>t.includes(e))}function Ca(e={}){let t=String(e.location||``).trim(),n=T(t);return t&&!wa(n)?t:Ta(e)||t}function wa(e){return!e||e===`unknown`||e===`all iceland`||e===`iceland`||e===`island`}function Ta(e={}){let t=e.rawPayload&&typeof e.rawPayload==`object`?e.rawPayload:{},n=T([e.title,e.description,e.buyer,t.buyer,t.extracted_buyer,t.source_name,t.extracted_location,t.location].filter(Boolean).join(` `));return n.includes(`reykjavik`)||n.includes(`reykjavikurborg`)||n.includes(`hofudborgarsvaedid`)?`Reykjavík / Höfuðborgarsvæðið`:``}function Ea(e,t){return t.estimatedValue?!(e.minProjectValue&&t.estimatedValue<e.minProjectValue||e.maxProjectValue&&t.estimatedValue>e.maxProjectValue):!!e.allowUnknownValue}function Da(e,t){let n=String(e.industry||``).toLowerCase(),r=String(t.category||``).toLowerCase();return r.includes(n)||n.includes(r)}function Oa(e,t){if(!e)return{...t,matchScore:0,matchLabel:`Weak match`,matchReasons:[],risks:[],nextSteps:[]};let n=Zi(t),r=0,i=[],a=[];Da(e,t)&&(r+=35,i.push(`Matches your ${e.industry} industry`));let o=ga(e,t,(e.services||[]).filter(e=>Xi(n,e)),(e.includeKeywords||[]).filter(e=>Xi(n,e)));for(let e of o.serviceHits)r+=10,i.push(`Mentions your service: ${e}`);for(let e of o.keywordHits)r+=8,i.push(`Contains your keyword: ${e}`);let s=ba(e,t),c=xa(e,t);if(s===`local_match`)r+=22,i.push(c);else if(s===`national_match`)r+=16,i.push(c);else if(s===`remote_match`)r+=14,i.push(c);else if(s===`outside_area_possible`){let n=Number(e.minimumProjectValueForTravel||0),o=n&&t.estimatedValue&&Number(t.estimatedValue)<n;r+=o?-4:4,i.push(c),a.push(o?`Outside base area and below your preferred travel project value`:`Check travel cost, project size and delivery capacity`)}else r-=8,a.push(`Outside selected area; location match is low confidence`);o.hasWinterOnlyFit&&s===`local_match`&&(r+=12,i.push(`Local winter service fit`)),Ea(e,t)?(r+=10,t.estimatedValue&&i.push(`Project value is inside your preferred range`)):(r-=25,a.push(`Estimated project value is outside your preferred range`));let l=S(t.deadline);t.deadline?l>=0&&l<=30?(r+=8,i.push(`Deadline is coming up soon`)):l<0&&(r-=50,a.push(`Deadline has passed`)):a.push(oo(t));for(let t of e.excludeKeywords||[])Xi(n,t)&&(r-=18,a.push(`Contains exclude keyword: ${t}`));return(t.requirements||[]).some(e=>Xi(e,`certification`)||Xi(e,`license`))&&a.push(`May require certification or license documentation`),t.difficulty===`high`&&a.push(`This appears to be a higher-complexity opportunity`),o.hasWeakOnlyFit&&(r=Math.min(r,40),a.push(`Only broad construction/procurement terms matched; verify fit`)),o.hasIndoorMismatch&&(r=Math.min(r-20,40),a.push(`Appears to be indoor/building finishing work outside your core civil services`)),o.hasConsultingMismatch&&(r=Math.min(r-30,35),a.push(`Appears to be design, consulting, supervision, or project management work outside your execution services`)),o.hasSecondaryOnlyFit&&(r=Math.min(r,84),a.push(`Secondary service match in a broader infrastructure tender; verify scope`)),o.hasPromotedBroadFit&&(r=Math.min(r,72),a.push(`Broad construction terms matched; verify the specific work type`)),o.hasWinterOnlyFit&&(r=Math.min(r,68),a.push(`Winter/snow service fit; verify capacity and scope`)),r=Math.max(0,Math.min(100,Math.round(r))),{...t,matchScore:r,matchLabel:Aa(r),matchReasons:i.slice(0,5),risks:[...new Set(a)].slice(0,4),nextSteps:[`Open the source documents`,`Confirm mandatory requirements`,`Check capacity and profitability`,`Prepare questions before the deadline`]}}function ka(e){if(!O.profile||!da(O.profile))return e;let t=Oa(O.profile,e);return Number(t.matchScore||0)>=Number(e.matchScore||0)?e:{...e,matchScore:t.matchScore,matchLabel:t.matchLabel,matchReasons:t.matchReasons,risks:t.risks,nextSteps:t.nextSteps}}function Aa(e){return e>=85?`Strong match`:e>=65?`Good match`:e>=45?`Possible match`:`Weak match`}function ja(){if(O.storedMatches.length)return O.storedMatches.filter(_l).filter(Pa).filter(F).filter(e=>!O.ignored.includes(e.id)).map(ka).sort((e,t)=>t.matchScore-e.matchScore||S(e.deadline)-S(t.deadline));let e=O.profile||(O.user?null:fn);return e?O.opportunities.filter(_l).map(t=>Oa(e,t)).filter(Pa).filter(F).filter(e=>!O.ignored.includes(e.id)).sort((e,t)=>t.matchScore-e.matchScore||S(e.deadline)-S(t.deadline)):[]}function Ma(){return O.storedMatches.filter(_l).filter(Pa).filter(F).filter(e=>!O.ignored.includes(e.id)).sort((e,t)=>t.matchScore-e.matchScore||S(e.deadline)-S(t.deadline))}function Na(){let e=O.profile||(O.user?null:fn);return e?O.opportunities.filter(_l).map(t=>Oa(e,t)).filter(Pa).filter(F).filter(e=>!O.ignored.includes(e.id)).sort((e,t)=>Wa(e)-Wa(t)||t.matchScore-e.matchScore||S(e.deadline)-S(t.deadline)):[]}function Pa(e){return O.isAdmin&&O.filters.label===`all_opportunities`?!0:nl(e)}function Fa(e={}){return String(e.safetyStatus||e.safety_status||`auto_approved`)}function Ia(e){return[...Ma(),...Na()].find(t=>t.id===e)}function La(){let e=Ra([`all_opportunities`,`needs_review`].includes(O.filters.label)?Na():Ma());if(O.filters.label===`recommended`){let t=e.filter(Ba),n=e.filter(Va);return Ua(t.length?t:n)}return Ua(e.filter(za))}function Ra(e){return e.filter(e=>{let t=O.filters.search.toLowerCase();return!(t&&!Zi(e).includes(t)||O.filters.category!==`all`&&e.category!==O.filters.category||O.filters.location!==`all`&&e.location!==O.filters.location||O.filters.type!==`all`&&e.type!==O.filters.type||O.filters.savedOnly&&!O.saved.includes(e.id))})}function za(e){let t=O.filters.label;return t===`all`||t===`all_opportunities`?!0:t===`needs_review`?I(e.qualityStatus,e)===`needs_review`:t===`recommended`?Ba(e):t===`strong`?e.matchLabel===`Strong match`||e.matchScore>=85:t===`possible`?[`Possible match`,`Weak match`].includes(e.matchLabel)||e.matchScore<65:e.matchLabel===t}function Ba(e){return!Ha(e)||rl(e)?!1:e.matchScore>=85||e.matchLabel===`Strong match`?!0:!(I(e.qualityStatus,e)===`needs_review`||Br(z(e)))}function Va(e){return!Ha(e)||rl(e)?!1:e.matchScore>=85||e.matchLabel===`Strong match`?!0:!(I(e.qualityStatus,e)===`needs_review`||Br(z(e)))}function Ha(e){return[`Strong match`,`Good match`,`Possible match`].includes(e.matchLabel)||e.matchScore>=45}function Ua(e){return[...e].sort((e,t)=>Wa(e)-Wa(t)||t.matchScore-e.matchScore||S(e.deadline)-S(t.deadline))}function Wa(e){let t=L(e);if(t===`confirmed_tender`)return 0;if(t===`early_opportunity`)return 1;if(t===`market_signal`)return 2;if(t===`news_context`)return 8;if(t===`not_opportunity`)return 9;let n=I(e.qualityStatus,e);return n===`confirmed_tender`?0:n===`early_signal`?1:2}function Ga({visibleCount:e,storedMatchCount:t,filteredStoredCount:n,availableCount:r,recommendedCount:i,strongCount:a,companyName:o}){let s=O.filters.label;return O.language===`is`?s===`all_opportunities`?`${r} tækifæri eru til í kerfinu. Sýni ${e} sýnileg tækifæri til yfirferðar.`:s===`needs_review`?`${r} tækifæri eru til í kerfinu. Sýni ${e} atriði sem þarf að staðfesta.`:s===`all`?`${t} tækifæri fundust sem gætu passað við ${o}. Sýni ${e}.`:s===`strong`?`${t} tækifæri fundust sem gætu passað við ${o}. Sýni ${e} sterkar samsvaranir.`:s===`recommended`?e?`${t} tækifæri fundust sem gætu passað við ${o}. Sýni ${e} ráðlögð eða möguleg tækifæri.`:a>0?`${a} sterkar samsvaranir eru til fyrir ${o}, en þær eru faldar af núverandi síum.`:n>0?`${n} tækifæri eru falin af gæðasíum. Notið Allar samsvaranir eða Þarfnast staðfestingar til að skoða þau.`:`Engar ráðlagðar samsvaranir fyrir ${o} enn. ${r} tækifæri eru til í kerfinu, en ekkert passar nógu sterkt við þennan prófíl.`:s===`possible`?`${t} tækifæri fundust sem gætu passað við ${o}. Sýni ${e} mögulegar eða veikar samsvaranir.`:`${t} tækifæri fundust sem gætu passað við ${o}. Sýni ${e} tækifæri.`:s===`all_opportunities`?`${r} opportunities are available in the system. Showing ${e} visible opportunities for inspection.`:s===`needs_review`?`${r} opportunities are available in the system. Showing ${e} needs-review opportunities.`:s===`all`?`${t} opportunities may fit ${o}. Showing all ${e}.`:s===`strong`?`${t} opportunities may fit ${o}. Showing ${e} strong matches.`:s===`recommended`?e?`${t} opportunities may fit ${o}. Showing ${e} recommended or possible matches.`:a>0?`${a} strong ${a===1?`match exists`:`matches exist`} for ${o}, but ${a===1?`it is`:`they are`} hidden by your current filters.`:n>0?`${n} ${n===1?`opportunity is`:`opportunities are`} hidden from Recommended by quality checks. Use All matches or Needs review to inspect them.`:`No recommended matches for ${o} yet. ${r} opportunities are available in the system, but none match this profile strongly enough.`:s===`possible`?`${t} opportunities may fit ${o}. Showing ${e} possible or weak matches.`:`${t} opportunities may fit ${o}. Showing ${e} ${s.toLowerCase()} opportunities.`}async function Ka(){if(!l||!O.companyId){O.opportunityActions=[];return}try{let{data:e,error:t}=await l.from(`company_opportunity_actions`).select(`id, company_id, opportunity_id, action_type, note, created_at, updated_at`).eq(`company_id`,O.companyId);if(t)throw t;O.opportunityActions=e||[],O.saved=O.opportunityActions.filter(e=>[`saved`,`watched`].includes(e.action_type)).map(e=>e.opportunity_id),O.ignored=O.opportunityActions.filter(e=>e.action_type===`ignored`).map(e=>e.opportunity_id)}catch(e){console.error(`Failed to load company opportunity actions:`,e),O.opportunityActions=[],O.saved=[],O.ignored=[]}}async function qa(t,n){if(!l||!O.companyId){(n===`saved`||n===`watched`)&&(O.saved=Array.from(new Set([...O.saved,t])),O.ignored=O.ignored.filter(e=>e!==t)),n===`ignored`&&(O.ignored=Array.from(new Set([...O.ignored,t])),O.saved=O.saved.filter(e=>e!==t)),zi(e.saved,O.saved),zi(e.ignored,O.ignored);return}let{error:r}=await l.from(`company_opportunity_actions`).upsert({company_id:O.companyId,opportunity_id:t,action_type:n,updated_at:new Date().toISOString()},{onConflict:`company_id,opportunity_id`});if(r)throw r;await Ka()}async function Ja(t){if(!l||!O.companyId){O.saved=O.saved.filter(e=>e!==t),O.ignored=O.ignored.filter(e=>e!==t),zi(e.saved,O.saved),zi(e.ignored,O.ignored);return}let{error:n}=await l.from(`company_opportunity_actions`).delete().eq(`company_id`,O.companyId).eq(`opportunity_id`,t);if(n)throw n;await Ka()}async function Ya(e){let t=`Opportunity saved`;try{O.saved.includes(e)?(await Ja(e),t=`Removed from saved`):await qa(e,`saved`),U(t,`success`),Z()}catch(e){console.error(`Failed to update saved opportunity:`,e),U(`Could not update saved opportunity`,`error`)}}async function Xa(e){try{await qa(e,`ignored`),O.selectedOpportunityId===e&&(O.selectedOpportunityId=null),U(`Opportunity hidden`,`success`),Z()}catch(e){console.error(`Failed to ignore opportunity:`,e),U(`Could not hide opportunity`,`error`)}}async function Za(e){try{await Ja(e),Z()}catch(e){console.error(`Failed to unignore opportunity:`,e),U(`Could not restore opportunity`,`error`)}}function Qa(e){O.selectedOpportunityId=e,document.body.classList.add(`modal-open`),Z()}function $a(){eo(),Z()}function eo(){O.selectedOpportunityId=null,document.body.classList.remove(`modal-open`)}function to(){if(!O.selectedOpportunityId){document.body.classList.remove(`modal-open`);return}if(!Ia(O.selectedOpportunityId)){O.selectedOpportunityId=null,document.body.classList.remove(`modal-open`);return}document.body.classList.add(`modal-open`)}function no(e){if(!e)return{label:$(cn),className:`deadline danger`};let t=S(e);return t===999?{label:$(cn),className:`deadline danger`}:{label:D(`daysLeft`,{count:t}),className:t<=14?`deadline danger`:`deadline`}}function ro(e){let t=String(e||``).trim().match(/^(\d{4}-\d{2}-\d{2})T(\d{2}):(\d{2})/);return t?`${Qc(t[1])} kl. ${t[2]}:${t[3]}`:``}function io(e){return e?Vt(e):$(cn)}function ao(e){return e?.deadlineAt?ro(e.deadlineAt):e?.deadline?Qc(e.deadline):$(oo(e))}function oo(e){if(R(e)){let t=Dr(e);return[`tender_awarded`,`awarded`,`already_tendered`,`announced`].includes(t)?`Tender appears already announced/awarded — verify source article.`:t===`upcoming_tender`?`Formal tender deadline not found yet — monitor source article.`:ln}return String(e?.rawPayload?.deadline_warning||``).trim()||cn}function so(e){if(!e?.deadline)return{label:$(oo(e)),className:`deadline danger`};let t=ro(e.deadlineAt);return t?{label:t,className:S(e.deadline)<=14?`deadline danger`:`deadline`}:no(e.deadline)}function X(e){return e?Jt(e,`ISK`):O.language===`is`?`Ekki gefið upp`:`Value unknown`}function co(){return[...new Set(O.opportunities.map(e=>e.category))].sort()}function lo(){return[...new Set(O.opportunities.map(e=>e.location))].sort()}function uo(){return[...new Set(O.opportunities.map(e=>e.type))].sort()}function fo(e){return e===`Strong match`?`badge strong`:e===`Good match`?`badge good`:e===`Possible match`?`badge possible`:`badge weak`}function Z(){let e=document.getElementById(`app`),t=hn(O.route),n=``;if(n=O.isBooting||!O.authLoaded||!O.profileLoaded||!O.adminLoaded?go():t===`/`?Ds():t===`/login`?No():t===`/signup`?zo():t===`/forgot-password`?Po():t===`/reset-password`?Fo():t===`/accept-invite`?Io():t===`/onboarding`?Os():t===`/dashboard`?O.user?Ls():V():t===`/report`?O.user?Fc():V():t===`/pricing`?zl():t===`/privacy`?xo():t===`/terms`?So():t===`/data-sources`?Co():t===`/cookies`?wo():t===`/security`?To():t===`/contact`?Eo():t===`/settings`?O.user?Bl():V():t===`/admin`?O.user?O.isAdmin?rc():di():V():Ds(),e.innerHTML=n,O.selectedOpportunityId){let t=Ia(O.selectedOpportunityId);t?(document.body.classList.add(`modal-open`),e.insertAdjacentHTML(`beforeend`,nc(t))):to()}else to()}function po(e){let t=window.scrollX,n=window.scrollY,r=mo(e),i=typeof e.selectionStart==`number`?e.selectionStart:null,a=typeof e.selectionEnd==`number`?e.selectionEnd:null;Z(),requestAnimationFrame(()=>{if(window.scrollTo(t,n),!r)return;let e=document.querySelector(r);e&&(e.focus({preventScroll:!0}),i!==null&&a!==null&&typeof e.setSelectionRange==`function`&&[`text`,`search`,`email`,`url`,`tel`,`password`,``].includes(e.type||``)&&e.setSelectionRange(i,a))})}function mo(e){return e?.dataset?e.dataset.adminFilter?`[data-admin-filter="${ho(e.dataset.adminFilter)}"]`:e.dataset.adminCompanyFilter?`[data-admin-company-filter="${ho(e.dataset.adminCompanyFilter)}"]`:``:``}function ho(e){return window.CSS?.escape?window.CSS.escape(String(e)):String(e).replace(/["\\]/g,`\\$&`)}function go(){return Q(`
    <div class="app-loader">
      <div class="loader-mark" aria-label="${E(D(`loadingLabel`))}">
        <span></span>
      </div>
    </div>
  `)}function Q(e){let t=!!O.user,n=!!O.profile,r=_o(t,n),i=ko(t,n);return`
    <header class="site-header ${O.isMobileMenuOpen?`is-menu-open`:``}">
      <div class="header-top">
        <button class="brand" data-action="go" data-href="/">
          <img class="brand-logo" src="./logo.png" alt="VerkRadar" />
        </button>
        <div class="mobile-header-actions">
          <button class="language-toggle mobile-header-language-toggle" type="button" data-action="toggle-language" aria-label="Switch language">
            <span class="${O.language===`is`?`active`:``}">IS</span>
            <span class="${O.language===`en`?`active`:``}">EN</span>
          </button>
          <button
            class="menu-toggle"
            type="button"
            data-action="toggle-mobile-menu"
            aria-label="${O.isMobileMenuOpen?D(`closeMenu`):D(`openMenu`)}"
            aria-expanded="${O.isMobileMenuOpen?`true`:`false`}"
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
          ${r.map(([e,t])=>t.startsWith(`#`)?`<button data-action="scroll-to" data-target="${t.slice(1)}">${e}</button>`:`<button data-action="go" data-href="${t}" ${O.route===t?`class="active"`:``}>${e}</button>`).join(``)}
        </nav>
        <div class="header-actions">
          <button class="language-toggle" type="button" data-action="toggle-language" aria-label="Switch language">
            <span class="${O.language===`is`?`active`:``}">IS</span>
            <span class="${O.language===`en`?`active`:``}">EN</span>
          </button>
          ${t?``:`<button class="btn btn-secondary header-login-btn btn-login" data-action="go" data-href="/login">${D(`login`)}</button>`}
          ${i?`<button class="btn btn-primary" data-action="go" data-href="${i.href}">${i.label}</button>`:``}
          ${t&&!O.isMobileMenuOpen?Ao():``}
        </div>
      </div>
      ${Do(r,i,t)}
    </header>
    <main>${e}</main>
    ${vo()}
    ${O.toast?`
      <div class="toast toast-${O.toast.type}">
        <span class="toast-dot"></span>
        <span>${E(O.toast.message)}</span>
      </div>
    `:``}
  `}function _o(e=!!O.user,t=!!O.profile){let n=e?t?[[D(`navDashboard`),`/dashboard`],[D(`navReport`),`/report`],[D(`navSettings`),`/settings`]]:[[D(`setupCompany`),`/onboarding`],[D(`navSettings`),`/settings`]]:[[D(`navHowItWorks`),`#how-it-works`],[D(`navSampleReport`),`#sample-report`],[D(`navPricing`),`/pricing`]];return e&&O.isAdmin&&n.push([`Admin`,`/admin`]),n}function vo(){let e=[[D(`privacyPolicy`),`/privacy`],[D(`termsOfService`),`/terms`],[D(`dataSources`),`/data-sources`],[D(`security`),`/security`],[D(`contact`),`/contact`]];return`
    <footer class="site-footer">
      <div>
        <strong>VerkRadar</strong>
        <p>${E(D(`footerText`))}</p>
      </div>
      <nav aria-label="Legal and trust pages">
        ${e.map(([e,t])=>`<button type="button" data-action="go" data-href="${t}">${e}</button>`).join(``)}
      </nav>
    </footer>
  `}function yo(e){return s(e,O.language)}function bo(e){let t=yo(e);return Q($e({language:O.language,escapeHtml:E,eyebrow:t.eyebrow,title:t.title,intro:t.intro,sections:t.sections}))}function xo(){return bo(`privacy`)}function So(){return bo(`terms`)}function Co(){return bo(`data`)}function wo(){return xo()}function To(){return bo(`security`)}function Eo(){return bo(`contact`)}function Do(e,t,n){return`
    <nav class="mobile-menu-panel" id="mobile-menu">
      <div class="mobile-menu-scroll">
      <div class="mobile-menu-links">
        ${e.map(([e,t])=>t.startsWith(`#`)?`<button type="button" data-action="mobile-scroll-to" data-target="${t.slice(1)}">${e}</button>`:`<button type="button" data-action="mobile-nav" data-href="${t}">${e}</button>`).join(``)}
      </div>
      ${Oo(t,n)}
      </div>
    </nav>
  `}function Oo(e,t){if(!t)return`
      <div class="mobile-account-section">
        ${e?`<button class="btn btn-primary mobile-cta" type="button" data-action="mobile-nav" data-href="${e.href}">${e.label}</button>`:``}
        <button class="btn btn-secondary" type="button" data-action="mobile-nav" data-href="/login">${D(`login`)}</button>
      </div>
    `;let n=O.profile?.companyName||D(`noCompanyProfile`),r=O.user?.email||``;return`
    <div class="mobile-account-section">
      <div class="mobile-account-header">
        <span class="profile-avatar">${E(jo(n,r))}</span>
        <div>
          <strong>${E(n)}</strong>
          <small>${E(r)}</small>
        </div>
      </div>
      <div class="mobile-account-actions">
        ${O.profile?`<button type="button" data-action="mobile-nav" data-href="/dashboard">${D(`navDashboard`)}</button>
             <button type="button" data-action="mobile-nav" data-href="/settings">${D(`navSettings`)}</button>`:`<button type="button" data-action="mobile-nav" data-href="/onboarding">${D(`setupCompany`)}</button>
             <button type="button" data-action="mobile-nav" data-href="/settings">${D(`navSettings`)}</button>`}
        <button type="button" class="mobile-logout" data-action="logout">${D(`logout`)}</button>
      </div>
    </div>
  `}function ko(e,t){return e?t?null:{href:`/onboarding`,label:D(`createProfile`)}:{href:`/signup`,label:D(`getStarted`)}}function Ao(){let e=O.profile?.companyName||D(`noCompanyProfile`),t=O.user?.email||``,n=jo(e,t);return`
    <div class="profile-menu">
      <button type="button" class="profile-pill" data-action="toggle-profile-menu" aria-haspopup="menu" aria-expanded="${O.profileMenuOpen?`true`:`false`}">
        <span class="profile-avatar">${E(n)}</span>
        <span class="profile-name">${E(e)}</span>
        <span class="profile-chevron" aria-hidden="true"></span>
      </button>

      ${O.profileMenuOpen&&!O.isMobileMenuOpen&&!Nn()?`
        <div class="profile-dropdown" role="menu">
          <div class="profile-dropdown-header">
            <strong>${E(e)}</strong>
            <small>${E(t)}</small>
          </div>
          <div class="profile-dropdown-divider"></div>
          ${O.profile?`
            <button type="button" data-action="go" data-href="/dashboard" role="menuitem">${D(`navDashboard`)}</button>
            <button type="button" data-action="go" data-href="/settings" role="menuitem">${D(`navSettings`)}</button>
            ${O.isAdmin?`<button type="button" data-action="go" data-href="/admin" role="menuitem">Admin</button>`:``}
          `:`
            <button type="button" data-action="go" data-href="/onboarding" role="menuitem">${D(`createProfile`)}</button>
            ${O.isAdmin?`<button type="button" data-action="go" data-href="/admin" role="menuitem">Admin</button>`:``}
          `}
          <div class="profile-dropdown-divider"></div>
          <button type="button" class="danger" data-action="logout" role="menuitem">${D(`logout`)}</button>
        </div>
      `:``}
    </div>
  `}function jo(e,t){return(e&&![`No company profile`,D(`noCompanyProfile`)].includes(e)?e:t||`VR`).split(/[^a-zA-Z0-9áéíóúýþæöðÁÉÍÓÚÝÞÆÖÐ]+/).filter(Boolean).slice(0,2).map(e=>e[0]).join(``).toUpperCase()||`VR`}function Mo(e,t){return Q(`
    <section class="empty-state">
      <h1>${E(e)}</h1>
      <p>${E(t)}</p>
      <button class="btn btn-primary" data-action="go" data-href="/onboarding">${E(D(`createProfile`))}</button>
      <button class="btn btn-secondary" data-action="load-demo">${E(D(`loadDemoCompany`))}</button>
    </section>
  `)}function No(){return O.user?Mo(O.language===`is`?`Þú ert þegar skráð(ur) inn`:`Already logged in`,O.language===`is`?`Opnaðu mælaborðið eða breyttu fyrirtækjaprófílnum.`:`Open your dashboard or edit your company profile.`):Q(Fe({t:D,escapeHtml:E,authForm:O.authForm,authSubmitting:O.authSubmitting,authMessage:O.authMessage,signupHref:k(`/signup`),forgotPasswordHref:k(`/forgot-password`)}))}function Po(){return O.user?Mo(O.language===`is`?`Þú ert þegar skráð(ur) inn`:`Already logged in`,O.language===`is`?`Opnaðu mælaborðið eða breyttu fyrirtækjaprófílnum.`:`Open your dashboard or edit your company profile.`):Q(Ie({t:D,escapeHtml:E,authForm:O.authForm,authSubmitting:O.authSubmitting,authMessage:O.authMessage}))}function Fo(){return Q(Le({t:D,escapeHtml:E,authForm:O.authForm,authSubmitting:O.authSubmitting,authMessage:O.authMessage}))}function Io(){let e=O.pendingInviteToken||p(O.route);return e&&e!==O.pendingInviteToken&&(O.pendingInviteToken=h(e)),Q(Ne({escapeHtml:E,invite:O.invitePreview,loading:O.invitePreviewLoading,error:O.invitePreviewError,user:O.user,accepting:O.inviteAccepting,signupHref:k(`/signup`),loginHref:k(`/login`),language:O.language}))}async function Lo(){let e=O.pendingInviteToken||p(O.route);if(!(!e||O.invitePreviewLoading)&&!(O.invitePreview?.token===e||O.invitePreviewErrorToken===e)){O.pendingInviteToken=h(e),O.invitePreviewLoading=!0,O.invitePreviewError=null,Z();try{let t=await te(e);O.invitePreview={...t,token:e},O.authForm.email=t.email||O.authForm.email}catch(t){console.error(`Failed to preview company invite:`,t),O.invitePreview=null,O.invitePreviewErrorToken=e,O.invitePreviewError=O.language===`is`?`Aðgangsboðið fannst ekki eða er útrunnið. ${H(t)}`:`Invite not found or expired. ${H(t)}`}finally{O.invitePreviewLoading=!1,Z()}}}async function Ro(){let e=O.pendingInviteToken||p(O.route);if(e){if(!O.user){A(k(`/login`));return}O.inviteAccepting=!0,O.invitePreviewError=null,Z();try{await _(e),ee(),O.pendingInviteToken=``,O.invitePreview=null,O.invitePreviewError=null,await gi({overwriteDraft:!0}),A(`/dashboard`)}catch(e){console.error(`Failed to accept company invite:`,e);let t=e?.details?.invited_email||O.invitePreview?.email||``;O.invitePreviewError=e?.details?.code===`email_mismatch`&&t?O.language===`is`?`Þessi aðgangsboð var sent á ${t}. Skráðu þig inn með því netfangi.`:`This invite was sent to ${t}. Log in with that email address.`:H(e)}finally{O.inviteAccepting=!1,Z()}}}function zo(){if(O.user){let e=Fn();return setTimeout(()=>A(e),0),Q(`
      <section class="empty-state">
        <h1>${E(D(`alreadyLoggedInTitle`))}</h1>
        <p>${E(D(`alreadyLoggedInText`))}</p>
      </section>
    `)}return Q(Re({t:D,escapeHtml:E,authForm:O.authForm,authSubmitting:O.authSubmitting,authMessage:O.authMessage,loginHref:k(`/login`)}))}function Bo(){if(!O.importLoading&&!O.importStatus)return``;if(O.importLoading)return`<section class="import-panel"><strong>Importing TED notices...</strong><p>Fetching recent TED notices and refreshing matches.</p></section>`;let e=O.importStatus||{},t=Array.isArray(e.errors)?e.errors:[],n=O.importedTedOpportunities||[];return`
    <section class="import-panel">
      ${O.importStatus?`
        <div class="import-stats">
          <span><strong>${Number(e.fetched||0)}</strong> fetched</span>
          <span><strong>${Number(e.inserted||0)}</strong> inserted</span>
          <span><strong>${Number(e.updated||0)}</strong> updated</span>
          <span><strong>${Number(e.skipped||0)}</strong> skipped</span>
          <span><strong>${Number(e.matched||0)}</strong> matches</span>
          <span><strong>${Number(e.reports_generated||0)}</strong> reports</span>
        </div>
        ${t.length?`<ul class="risk-list">${t.map(e=>`<li>${E(e)}</li>`).join(``)}</ul>`:`<p>TED import completed.</p>`}
        ${t.length?``:`
          <div class="import-result-head">
            <h3>Newest imported TED opportunities</h3>
            <button class="btn btn-secondary" type="button" data-action="go" data-href="/dashboard">View imported opportunities on dashboard</button>
          </div>
          ${n.length?`
            <div class="imported-opportunities">
              ${n.map(Ho).join(``)}
            </div>
          `:`<div class="empty-card">No imported TED opportunities were returned by the latest-results query.</div>`}
        `}
      `:``}
    </section>
  `}function Vo(){if(!O.connectorImportLoading&&!O.connectorTestingSourceId&&!O.connectorImportStatus)return``;if(O.connectorImportLoading||O.connectorTestingSourceId)return`<section class="import-panel"><strong>Running automatic source imports...</strong><p>Fetching enabled source connectors in a limited batch. Refresh matches separately after imports finish.</p></section>`;let e=O.connectorImportStatus||{},t=Array.isArray(e.errors)?e.errors:[],n=Array.isArray(e.failedSources)?e.failedSources:[],r=Array.isArray(e.timedOutSources)?e.timedOutSources:[],i=t.length||n.length||r.length,a=Number.isFinite(Number(e.sources_processed))?`<p>${Number(e.sources_processed||0)} source${Number(e.sources_processed||0)===1?``:`s`} processed${Number(e.sources_remaining||0)?` · ${Number(e.sources_remaining||0)} remaining for next run`:``}.</p>`:``;return`
    <section class="import-panel">
      <div class="import-stats">
        <span><strong>${Number(e.fetched||0)}</strong> fetched</span>
        <span><strong>${Number(e.inserted||0)}</strong> inserted</span>
        <span><strong>${Number(e.updated||0)}</strong> updated</span>
        <span><strong>${Number(e.skipped||0)}</strong> skipped</span>
        <span><strong>${Number(e.matched||0)}</strong> matches</span>
        <span><strong>${Number(e.reports_generated||0)}</strong> reports</span>
      </div>
      ${e.message?`<p>${E(e.message)}</p>`:a}
      ${e.matching_skipped?`<p>Matching was skipped for this batch to stay within Edge Function CPU limits. Refresh company matches from Admin after imports finish.</p>`:``}
      ${e.reports_skipped?`<p>Report generation was skipped for this batch.</p>`:``}
      ${n.length?`
        <div class="import-failure-list">
          <h3>${n.length} source${n.length===1?``:`s`} failed</h3>
          ${n.map(e=>`
            <div class="import-failure-row">
              <strong>${E(e.source||`Unknown source`)}</strong>
              <p>${E(e.message||e.error||`Unknown source import error`)}</p>
              ${e.endpoint_url?`<small>${E(e.endpoint_url)}</small>`:``}
            </div>
          `).join(``)}
        </div>
      `:``}
      ${r.length?`
        <div class="import-failure-list">
          <h3>${r.length} source${r.length===1?``:`s`} timed out or were skipped</h3>
          ${r.map(e=>`
            <div class="import-failure-row">
              <strong>${E(e.source||`Unknown source`)}</strong>
              <p>${E(e.message||e.reason||`Skipped because the source import was close to the runtime limit`)}</p>
              ${e.endpoint_url?`<small>${E(e.endpoint_url)}</small>`:``}
            </div>
          `).join(``)}
        </div>
      `:``}
      ${t.length?`<ul class="risk-list">${t.map(e=>`<li>${E(e)}</li>`).join(``)}</ul>`:``}
      ${i?`<p>Automatic source import completed with source-level failures. Successful sources were still imported.</p>`:`<p>Automatic source import completed.</p>`}
    </section>
  `}function Ho(e){let t=e.url&&e.url!==`#`,n=O.adminUpdatingId===e.id,r=O.adminDeletingId===e.id;return`
    <div class="imported-opportunity-row">
      <div class="imported-opportunity-main">
        <h4>${E(e.title)}</h4>
        <span class="source-pill language-pill">Original language</span>
        <p>${E(Tl(e))}</p>
      </div>
      <dl>
        <div>
          <dt>Country / location</dt>
          <dd>${E([e.countryCode,e.location].filter(Boolean).join(` / `)||`Unknown`)}</dd>
        </div>
        <div>
          <dt>Deadline</dt>
          <dd>${E(Vt(e.deadline))}</dd>
        </div>
        <div>
          <dt>URL</dt>
          <dd>${t?`<a href="${E(e.url)}" target="_blank" rel="noreferrer">Open TED</a>`:`No URL`}</dd>
        </div>
        <div>
          <dt>Status</dt>
          <dd>${E(e.status||`Unknown`)}</dd>
        </div>
        <div>
          <dt>Imported source</dt>
          <dd>${E(e.source||`Unknown`)}</dd>
        </div>
        <div>
          <dt>External ID</dt>
          <dd>${E(e.externalId||`Unknown`)}</dd>
        </div>
      </dl>
      <div class="imported-opportunity-actions">
        <button class="btn btn-secondary" type="button" data-action="hide-imported-opportunity" data-id="${E(e.id)}" ${n||e.status===`hidden`?`disabled`:``}>
          ${n?`Updating...`:`Hide`}
        </button>
        <button class="btn btn-secondary" type="button" data-action="mark-imported-relevant" data-id="${E(e.id)}" ${n||e.status===`open`?`disabled`:``}>
          ${n?`Updating...`:`Mark relevant`}
        </button>
        <button class="btn btn-ghost" type="button" data-action="delete-opportunity" data-id="${E(e.id)}" ${r?`disabled`:``}>
          ${r?`Deleting...`:`Delete`}
        </button>
      </div>
    </div>
  `}function Uo(){return(O.importRuns||[])[0]||null}function Wo(e){let t=String(e||``).toLowerCase();return[`success`,`completed`,`complete`,`connected`].includes(t)?`is-success`:[`running`,`started`,`pending`,`planned`].includes(t)?`is-running`:[`error`,`failed`,`failure`].includes(t)?`is-error`:``}function Go(){let e=Uo();return O.importRunsLoading&&!e?`
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
        <span class="status-pill ${Wo(e.status)}">${E(e.status||`unknown`)}</span>
      </div>
      <div class="ops-metrics">
        <div><span>Type</span><strong>${E(e.run_type||`ted-import`)}</strong></div>
        <div><span>Mode</span><strong>${E(e.import_mode||`unknown`)}</strong></div>
        <div><span>Fetched</span><strong>${Number(e.fetched||0)}</strong></div>
        <div><span>Inserted</span><strong>${Number(e.inserted||0)}</strong></div>
        <div><span>Updated</span><strong>${Number(e.updated||0)}</strong></div>
        <div><span>Skipped</span><strong>${Number(e.skipped||0)}</strong></div>
        <div><span>Matched</span><strong>${Number(e.matched||0)}</strong></div>
        <div><span>Reports</span><strong>${Number(e.reports_generated||0)}</strong></div>
        <div><span>Started</span><strong>${E(C(e.started_at))}</strong></div>
        <div><span>Finished</span><strong>${E(C(e.finished_at))}</strong></div>
      </div>
      ${e.error?`<div class="admin-message is-error">${E(e.error)}</div>`:``}
      ${Zo(e)}
    </section>
  `:`
      <section class="ops-card automation-status-card">
        <div class="card-header">
          <div>
            <h2>Automation status</h2>
            <p>No automation runs yet.</p>
          </div>
        </div>
        ${O.importRunsError?`<div class="admin-message is-error">${E(O.importRunsError)}</div>`:``}
      </section>
    `}function Ko(){let e=window.VERKRADAR_SUPABASE_URL||`https://asojxjbsgqbfpbepojzh.supabase.co`,t=String(e).match(/^https:\/\/([^.]+)\.supabase\.co/i);return t?`https://supabase.com/dashboard/project/${t[1]}/functions/import-ted/logs`:``}function qo(){let e=Ko();return`
    <section class="ops-card">
      <div class="card-header">
        <div>
          <h2>Automation actions</h2>
          <p>Run the pipeline manually or refresh the operations view.</p>
        </div>
      </div>
      <div class="automation-actions">
        <button class="btn btn-primary" type="button" data-action="import-ted" ${O.importLoading?`disabled`:``}>
          ${O.importLoading?`Running TED import...`:`Run TED import now`}
        </button>
        <button class="btn btn-secondary" type="button" data-action="import-source-connectors" ${O.connectorImportLoading?`disabled`:``}>
          ${O.connectorImportLoading?`Running source imports...`:`Run automatic source imports now`}
        </button>
        <button class="btn btn-secondary" type="button" data-action="refresh-admin-status" ${O.importRunsLoading||O.adminReportsLoading?`disabled`:``}>
          ${O.importRunsLoading||O.adminReportsLoading?`Refreshing...`:`Refresh status`}
        </button>
        ${e?`<a class="btn btn-secondary" href="${E(e)}" target="_blank" rel="noreferrer">View Edge Function logs</a>`:``}
      </div>
      <label class="import-mode-control">
        Import mode
        <select data-import-mode ${O.importLoading?`disabled`:``}>
          <option value="nordic" ${O.tedImportMode===`nordic`?`selected`:``}>Nordic only</option>
          <option value="iceland" ${O.tedImportMode===`iceland`?`selected`:``}>Iceland only</option>
          <option value="eu-broad" ${O.tedImportMode===`eu-broad`?`selected`:``}>EU broad test</option>
        </select>
      </label>
      ${Bo()}
      ${Vo()}
    </section>
  `}function Jo(){let e=O.importRuns||[];return`
    <section class="ops-card">
      <div class="card-header">
        <div>
          <h2>Latest import runs</h2>
          <p>Last ${e.length||0} recorded automation runs.</p>
        </div>
      </div>
      ${O.importRunsError?`<div class="admin-message is-error">${E(O.importRunsError)}</div>`:``}
      ${O.importRunsLoading&&!e.length?`<div class="empty-card">Loading import runs...</div>`:e.length?`
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
              ${e.map(Yo).join(``)}
            </tbody>
          </table>
        </div>
      `:`<div class="empty-card">No automation runs yet.</div>`}
    </section>
  `}function Yo(e){let t=Zo(e,{compact:!0});return`
    <tr>
      <td>${E(C(e.started_at||e.finished_at))}</td>
      <td>${E(e.run_type||`ted-import`)}</td>
      <td><span class="status-pill ${Wo(e.status)}">${E(e.status||`unknown`)}</span></td>
      <td>${Number(e.fetched||0)}</td>
      <td>${Number(e.inserted||0)}</td>
      <td>${Number(e.updated||0)}</td>
      <td>${Number(e.skipped||0)}</td>
      <td>${Number(e.matched||0)}</td>
      <td>${Number(e.reports_generated||0)}</td>
      <td>${e.error?E(e.error):``}</td>
    </tr>
    ${t?`
      <tr class="import-run-debug-row">
        <td colspan="10">${t}</td>
      </tr>
    `:``}
  `}function Xo(e){let t=e?.details;if(!t)return{};if(typeof t==`string`)try{return JSON.parse(t)||{}}catch{return{}}return typeof t==`object`?t:{}}function Zo(e,t={}){let n=Xo(e),r=n.skip_reasons&&typeof n.skip_reasons==`object`?n.skip_reasons:{},i=Array.isArray(n.skipped_samples)?n.skipped_samples:[],a=Array.isArray(n.per_source)?n.per_source:[],o=Object.entries(r).filter(([,e])=>Number(e)>0).sort((e,t)=>Number(t[1])-Number(e[1])).slice(0,5);return!o.length&&!i.length&&!a.length?``:`
    <div class="import-debug ${t.compact?`is-compact`:``}">
      <div class="import-debug-header">
        <strong>Skip diagnostics</strong>
        <span>${Number(e.skipped||0)} skipped · ${Number(n.connectors_checked||a.length||0)} connector${Number(n.connectors_checked||a.length||0)===1?``:`s`}</span>
      </div>
      ${a.length?`
        <div class="import-per-source">
          ${a.slice(0,8).map(e=>`
            <div>
              <strong>${E(e.source_name||`Unknown source`)}</strong>
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
            <span><strong>${Number(t)}</strong> ${E(Qo(e))}</span>
          `).join(``)}
        </div>
      `:``}
      ${i.length?`
        <div class="import-skip-samples">
          ${i.slice(0,10).map(e=>`
            <div>
              <strong>${E(e.source_name||e.source||`Unknown source`)}</strong>
              <span>${E(e.title||`Untitled item`)}</span>
              <em>${E(Qo(e.reason||`skipped`))}${e.matchedKeyword?`: ${E(e.matchedKeyword)}`:``}${e.final_quality_status?` · ${E(Gs(e.final_quality_status))}`:``}</em>
            </div>
          `).join(``)}
        </div>
      `:``}
    </div>
  `}function Qo(e){return{missing_title:`missing title`,missing_url:`missing URL`,duplicate_existing_opportunity:`duplicate existing opportunity`,no_include_keyword_match:`no include keyword match`,matched_exclude_keyword:`matched exclude keyword`,low_quality_needs_review:`low quality needs review`,unsupported_connector:`unsupported connector`,parse_failed:`parse failed`,fetch_failed:`fetch failed`}[e]||String(e||`skipped`).replaceAll(`_`,` `)}function $o(){let e=O.importedTedOpportunities||[];return`
    <section class="ops-card">
      <div class="card-header">
        <div>
          <h2>Latest TED opportunities</h2>
          <p>Newest imported EU TED rows for review.</p>
        </div>
      </div>
      ${O.importedTedOpportunitiesError?`<div class="admin-message is-error">${E(O.importedTedOpportunitiesError)}</div>`:``}
      ${O.importedTedOpportunitiesLoading&&!e.length?`<div class="empty-card">Loading TED opportunities...</div>`:e.length?`
        <div class="imported-opportunities">
          ${e.map(Ho).join(``)}
        </div>
      `:`<div class="empty-card">No TED opportunities loaded yet.</div>`}
    </section>
  `}function es(){let e=O.adminReports||[];return`
    <section class="ops-card">
      <div class="card-header">
        <div>
          <h2>Latest reports generated</h2>
          <p>Newest saved weekly report records.</p>
        </div>
      </div>
      ${O.adminReportsError?`<div class="admin-message is-error">${E(O.adminReportsError)}</div>`:``}
      ${O.adminReportsLoading&&!e.length?`<div class="empty-card">Loading reports...</div>`:e.length?`
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
              ${e.map(cs).join(``)}
            </tbody>
          </table>
        </div>
      `:`<div class="empty-card">No generated reports yet.</div>`}
      ${O.selectedAdminReportId?ls():``}
    </section>
  `}function ts(e){return{eu_ted:`EU TED`,ted:`EU TED`,api:`EU TED`,utbodsvefur:`Útboðsvefur`,municipal_website:`Municipal websites`,public_institution_page:`Public institution pages`,private_manual:`Private/manual leads`,manual:`Private/manual leads`,tender_portal:`Tender portals`}[e]||e||`Unknown`}function ns(e){return{ted_api:`TED API`,rss_feed:`RSS feed`,wordpress_rest:`WordPress REST`,official_api:`Official API`,page_monitor_allowed:`Allowed page monitor`,manual_fallback:`Manual fallback`,planned:`Planned`,permission_required:`Permission required`}[e]||e||`Planned`}function rs(e=[]){return e.reduce((e,t)=>{let n=t.raw_payload&&typeof t.raw_payload==`object`?t.raw_payload:{},r=I(n.quality_status||n.qualityStatus,t);return e.active+=1,r===`confirmed_tender`?e.confirmed+=1:r===`early_signal`?e.early+=1:e.needsReview+=1,e},{active:0,confirmed:0,early:0,needsReview:0})}function is(e){let t=e.source_status||{},n=e.source_connectors||{},r=String(n.status||t.status||``).toLowerCase(),i=String(n.connector_type||``).toLowerCase();return r.includes(`error`)?{label:`Error`,className:`is-error`,tone:`error`}:r===`permission_required`||i===`permission_required`?{label:`Permission required`,className:`is-permission`,tone:`planned`}:n.enabled&&[`connected`,`success`,`completed`,`complete`].includes(r)||n.enabled&&[`rss_feed`,`wordpress_rest`,`ted_api`].includes(i)?{label:`Connected`,className:`is-success`,tone:`connected`}:r===`planned`||i===`planned`?{label:`Planned`,className:`is-planned`,tone:`planned`}:{label:`Disabled`,className:`is-disabled`,tone:`disabled`}}function as(){let e=O.sourceCoverage||[];return`
    <section class="ops-card">
      <div class="card-header">
        <div>
          <h2>Source coverage</h2>
          <p>Connected and planned lead sources for Icelandic opportunity coverage.</p>
        </div>
      </div>
      ${O.sourceCoverageError?`<div class="admin-message is-error">${E(O.sourceCoverageError)}</div>`:``}
      ${O.sourceCoverageLoading&&!e.length?`<div class="empty-card">Loading source coverage...</div>`:e.length?`
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
              ${e.map(os).join(``)}
            </tbody>
          </table>
        </div>
      `:`<div class="empty-card">No sources configured yet.</div>`}
    </section>
  `}function os(e){let t=e.source_status||{},n=e.source_connectors||{},r=is(e),i=n.enabled&&[`rss_feed`,`wordpress_rest`].includes(n.connector_type),a=O.connectorTestingSourceId===e.id,o=e.opportunityStats||{active:Number(t.active_opportunities_count||0),confirmed:0,early:0,needsReview:0},s=e.latestOpportunities||[],c=O.expandedSourceId===e.id,l=n.last_error||t.last_error||``;return`
    <tr class="${r.tone===`connected`?`source-row-connected`:`source-row-muted`}">
      <td>
        <strong>${E(e.name||`Unknown source`)}</strong>
        ${n.endpoint_url||e.base_url?`<br><a href="${E(n.endpoint_url||e.base_url)}" target="_blank" rel="noreferrer">${E(n.endpoint_url||e.base_url)}</a>`:``}
      </td>
      <td>${E(ts(e.source_type))}</td>
      <td>
        <strong>${E(ns(n.connector_type))}</strong>
        ${n.require_any_keyword===!1?`<br><span>Keyword match optional</span>`:`<br><span>Requires keyword match</span>`}
        ${Array.isArray(n.include_keywords)&&n.include_keywords.length?`<br><span>Includes: ${E(n.include_keywords.slice(0,5).join(`, `))}${n.include_keywords.length>5?`...`:``}</span>`:``}
        ${Array.isArray(n.exclude_keywords)&&n.exclude_keywords.length?`<br><span>Excludes: ${E(n.exclude_keywords.slice(0,5).join(`, `))}${n.exclude_keywords.length>5?`...`:``}</span>`:``}
      </td>
      <td>
        <span class="status-pill ${n.enabled?`is-success`:`is-disabled`}">${n.enabled?`Enabled`:`Disabled`}</span>
      </td>
      <td><span class="status-pill ${r.className}">${E(r.label)}</span></td>
      <td>${E(C(n.last_success_at||t.last_success_at))}</td>
      <td>${l?E(l):`<span class="muted-text">None</span>`}</td>
      <td>${Number(o.active||0)}</td>
      <td>${Number(o.confirmed||0)}</td>
      <td>${Number(o.early||0)}</td>
      <td>${Number(o.needsReview||0)}</td>
      <td>
        <button class="btn btn-secondary btn-small" type="button" data-action="test-source-connector" data-id="${E(e.id)}" ${!i||a||O.connectorImportLoading?`disabled`:``}>
          ${a?`Testing...`:`Test source`}
        </button>
        <button class="btn btn-ghost btn-small" type="button" data-action="toggle-source-items" data-id="${E(e.id)}" ${s.length?``:`disabled`}>
          ${c?`Hide items`:`View latest items`}
        </button>
      </td>
    </tr>
    ${c?ss(e):``}
  `}function ss(e){let t=e.latestOpportunities||[];return`
    <tr class="source-items-row">
      <td colspan="12">
        <div class="source-items-panel">
          <div class="source-items-header">
            <strong>Latest active items</strong>
            <span>${t.length} shown</span>
          </div>
          ${t.length?`
            <div class="source-items-list">
              ${t.map(t=>{let n=t.raw_payload&&typeof t.raw_payload==`object`?t.raw_payload:{},r=I(n.quality_status||n.qualityStatus,t);return`
                  <div class="source-item">
                    <div>
                      <strong>${E(t.title||`Untitled opportunity`)}</strong>
                      <span>${E(wl(`buyer`,en(t.buyer,e.name)))} · ${E(io(t.deadline))}</span>
                    </div>
                    <span class="quality-badge ${E(r)}">${E(Gs(r))}</span>
                    ${t.url?`<a class="btn btn-ghost btn-small" href="${E(t.url)}" target="_blank" rel="noreferrer">Open</a>`:``}
                  </div>
                `}).join(``)}
            </div>
          `:`<div class="empty-card">No active items for this source.</div>`}
        </div>
      </td>
    </tr>
  `}function cs(e){let t=e.companies?.company_name||`Unknown company`,n=Array.isArray(e.report_items)?e.report_items.length:0;return`
    <tr>
      <td>${E(Uc(e,t))}</td>
      <td>${E(t)}</td>
      <td>${E(C(e.created_at))}</td>
      <td>${E(`${Vt(e.period_start)} - ${Vt(e.period_end)}`)}</td>
      <td>${E(e.status||`draft`)}</td>
      <td>${n}</td>
      <td>
        <div class="admin-row-actions">
          <button class="btn btn-secondary btn-small" type="button" data-action="view-admin-report" data-id="${E(e.id)}">${E(O.language===`is`?`Skoða yfirlit`:`View report`)}</button>
          <button class="btn btn-ghost btn-small" type="button" data-action="copy-admin-report" data-id="${E(e.id)}">${E(x(`copyReportEmail`,O.language))}</button>
          <button class="btn btn-ghost btn-small" type="button" data-action="view-admin-report" data-id="${E(e.id)}">${E(O.language===`is`?`Opna fyrir PDF`:`Open for PDF`)}</button>
        </div>
      </td>
    </tr>
  `}function ls(){let e=(O.adminReports||[]).find(e=>e.id===O.selectedAdminReportId),t=O.selectedAdminReport?.id===O.selectedAdminReportId?O.selectedAdminReport:e;if(!t&&!O.selectedAdminReportLoading&&!O.selectedAdminReportError)return``;if(!t)return`
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
            ${O.selectedAdminReportError?`<div class="admin-message is-error">${E(O.selectedAdminReportError)}</div>`:`<div class="empty-card">Loading saved report items...</div>`}
          </div>
        </div>
      </div>
    `;let n=t.companies?.company_name||`Unknown company`,r=Array.isArray(t.report_items)?t.report_items.length:0,i=Uc(t,n);return`
    <div class="modal-backdrop">
      <div class="modal admin-report-modal" role="dialog" aria-modal="true">
        <div class="modal-header">
          <div>
            <span class="status-pill is-success">${E(Lc(t.status))}</span>
            <h2>${E(i)}</h2>
            <p>${E(n)} · ${E(Zc(t.period_start,t.period_end))} · ${E(C(t.created_at))}</p>
          </div>
          <button type="button" class="icon-btn modal-close-btn" data-action="close-admin-report" aria-label="Close report">×</button>
        </div>
        <div class="modal-body">
          <div class="admin-report-actions">
            <button class="btn btn-primary" type="button" data-action="download-admin-report-pdf" ${O.selectedAdminReportLoading?`disabled`:``}>${E(x(`downloadPdf`,O.language))}</button>
            <button class="btn btn-secondary" type="button" data-action="copy-admin-report" data-id="${E(t.id)}">${E(x(`copyReportEmail`,O.language))}</button>
            <button class="btn btn-secondary" type="button" data-action="mark-admin-report-sent" data-id="${E(t.id)}" ${O.adminReportDeliveryActions[t.id]===`sent`?`disabled`:``}>${E(O.adminReportDeliveryActions[t.id]===`sent`?x(`marking`,O.language):x(`markAsSent`,O.language))}</button>
            <button class="btn btn-ghost" type="button" data-action="close-admin-report">${E(x(`close`,O.language))}</button>
          </div>

          ${O.selectedAdminReportLoading?`<div class="empty-card">Loading saved report items...</div>`:``}
          ${O.selectedAdminReportError?`<div class="admin-message is-error">${E(O.selectedAdminReportError)}</div>`:``}
          ${O.selectedAdminReportLoading?``:us(t,r,n)}

          ${!O.selectedAdminReportLoading&&r?zc(t,{companyName:n},{id:`admin-report-preview`,closeButton:!1,includeTextArea:!1}):O.selectedAdminReportLoading?``:`
            <div class="empty-card">${E(O.language===`is`?`Engin virk tækifæri eru í þessu yfirliti.`:`No active eligible opportunities in this report.`)}</div>
          `}

          ${!O.selectedAdminReportLoading&&r?ds(t):``}
        </div>
      </div>
    </div>
  `}function us(e,t,n){let r=e.status===`generated_all_current`?`all_current`:e.status===`generated_new_only`?`new_only`:e.status||`draft`;return`
    <div class="admin-report-meta-strip">
      <span><strong>${E(x(`company`,O.language))}:</strong> ${E(n||`Unknown company`)}</span>
      <span><strong>${E(x(`period`,O.language))}:</strong> ${E(Zc(e.period_start,e.period_end))}</span>
      <span><strong>${E(x(`generatedAt`,O.language))}:</strong> ${E(C(e.created_at))}</span>
      <span><strong>${E(x(`mode`,O.language))}:</strong> ${E(x(r===`all_current`?`currentActive`:`newOpportunities`,O.language))}</span>
      <span><strong>${E(x(`items`,O.language))}:</strong> ${Number(t||0)}</span>
    </div>
  `}function ds(e){let t=(Array.isArray(e.report_items)?[...e.report_items]:[]).sort((e,t)=>Number(e.sort_order||0)-Number(t.sort_order||0));return`
    <section class="admin-report-items">
      <h3>${E(O.language===`is`?`Atriði í yfirliti`:`Report items`)}</h3>
      <div class="admin-report-item-list">
        ${t.map(e=>fs(e)).join(``)}
      </div>
    </section>
  `}function fs(e){let t=e.opportunities?_r(e.opportunities):null;if(!t)return`<article class="admin-report-item"><p>${E(O.language===`is`?`Gögn um tækifæri eru ekki lengur aðgengileg.`:`Opportunity data is no longer available.`)}</p></article>`;let n=qt(t.url),r=so(t),i=Et(Array.isArray(e.match_reasons)?e.match_reasons:[],O.language);return`
    <article class="admin-report-item">
      <div class="opportunity-badges">
        <span class="source-pill source-badge">${E(Tt({matchScore:Number(e.match_score||0)},O.language))}</span>
        <span class="${fo(Aa(Number(e.match_score||0)))}">${E(`${Ct({matchScore:Number(e.match_score||0)},O.language)} ${Number(e.match_score||0)}`)}</span>
      </div>
      <h4>${E(t.title)}</h4>
      <p><strong>${E(O.language===`is`?`Staða`:`Status`)}:</strong> ${E(Tt({matchScore:Number(e.match_score||0)},O.language))}</p>
      <p>${E(St(O.language))}</p>
      <div class="admin-report-meta-grid">
        <span><strong>${E(D(`buyer`))}</strong>${E(Tl(t))}</span>
        <span><strong>${E(D(`source`))}</strong>${E(wl(`source`,t.source))}</span>
        <span><strong>${E(D(`area`))}</strong>${E(El(t))}</span>
        <span><strong>${E(D(`deadline`))}</strong>${E(r.label)}</span>
        <span><strong>${E(D(`estimatedValue`))}</strong>${E(t.estimatedValue?X(t.estimatedValue):D(`notListed`))}</span>
        <span><strong>${E(x(`sentStatus`,O.language))}</strong>${E(e.sent_at?`${x(`sentOn`,O.language)} ${C(e.sent_at)}`:x(`notSent`,O.language))}</span>
      </div>
      ${i.length?`<div><strong>${E(x(`reasons`,O.language))}</strong><ul>${i.map(e=>`<li>${E(e)}</li>`).join(``)}</ul></div>`:``}
      <p>${E(t.description||``)}</p>
      ${n?`<a class="btn btn-secondary btn-small" href="${E(n)}" target="_blank" rel="noreferrer">${E(x(`openSource`,O.language))}</a>`:``}
    </article>
  `}async function ps(e){let t=O.selectedAdminReport?.id===e?O.selectedAdminReport:(O.adminReports||[]).find(t=>t.id===e);if(!t){U(`Report not found`,`error`);return}let n=t.companies?.company_name||`Company`,r=Wc(t),i=Ot({companyName:n,language:O.language,matches:r.map(e=>({...e,buyer:Tl(e),deadline:ao(e),matchReasons:Et(e.matchReasons,O.language)}))});try{await navigator.clipboard.writeText(i),U(`Report email copied`,`success`)}catch(e){console.error(`Failed to copy admin report:`,e),U(`Could not copy report email`,`error`)}}async function ms(e){let t=O.selectedAdminReport?.id===e?O.selectedAdminReport:(O.adminReports||[]).find(t=>t.id===e);if(!t?.company_id){U(`Report not found`,`error`);return}O.adminReportDeliveryActions[e]=`sent`,Z();try{let n=await pr(t.company_id,`mark_report_sent`,{reportId:e});await Gn(e),U(`Marked ${Number(n.marked_sent||0)} report item${Number(n.marked_sent||0)===1?``:`s`} as sent`,`success`)}catch(e){console.error(`Failed to mark report as sent:`,e),U(`Could not mark report as sent. ${H(e)}`,`error`)}finally{delete O.adminReportDeliveryActions[e],Z()}}function hs(){let e=O.adminOpportunityFilters;return(O.opportunities||[]).filter(t=>{let n=Ws(t);if(e.tedOnly&&!n||e.manualOnly&&n||!e.showDemoTest&&Tr(t)||e.source!==`all`&&t.source!==e.source||e.status!==`all`&&t.status!==e.status)return!1;let r=Vr(t)||t.countryCode||`Unknown`;if(e.country!==`all`&&r!==e.country)return!1;let i=T(e.search);return!(i&&!T(`${t.title} ${t.buyer} ${t.externalId} ${t.location}`).includes(i))})}function gs(e,t){return Array.from(new Set(e.map(t).filter(Boolean))).sort((e,t)=>String(e).localeCompare(String(t)))}function _s(e){let t=O.adminOpportunityFilters,n=gs(O.opportunities||[],e=>e.source||`Unknown`),r=gs(O.opportunities||[],e=>e.status||`Unknown`),i=gs(O.opportunities||[],e=>Vr(e)||e.countryCode||`Unknown`),a=O.adminCompanies||[];return`
    <div class="admin-filters">
      <input data-admin-filter="search" value="${E(t.search)}" placeholder="Search title, buyer, external ID..." />
      <select data-admin-filter="source">
        <option value="all">All sources</option>
        ${n.map(e=>`<option value="${E(e)}" ${t.source===e?`selected`:``}>${E(e)}</option>`).join(``)}
      </select>
      <select data-admin-filter="status">
        <option value="all">All statuses</option>
        ${r.map(e=>`<option value="${E(e)}" ${t.status===e?`selected`:``}>${E(e)}</option>`).join(``)}
      </select>
      <select data-admin-filter="country">
        <option value="all">All countries</option>
        ${i.map(e=>`<option value="${E(e)}" ${t.country===e?`selected`:``}>${E(e)}</option>`).join(``)}
      </select>
      <select data-admin-filter="debugCompanyId">
        <option value="">Match debug company...</option>
        ${a.map(e=>`<option value="${E(e.id)}" ${t.debugCompanyId===e.id?`selected`:``}>${E(e.companyName)}</option>`).join(``)}
      </select>
      <label class="checkbox compact"><input type="checkbox" data-admin-filter="tedOnly" ${t.tedOnly?`checked`:``}/><span>TED only</span></label>
      <label class="checkbox compact"><input type="checkbox" data-admin-filter="manualOnly" ${t.manualOnly?`checked`:``}/><span>Manual only</span></label>
      <label class="checkbox compact"><input type="checkbox" data-admin-filter="showDemoTest" ${t.showDemoTest?`checked`:``}/><span>Show demo/test opportunities</span></label>
    </div>
    <p class="admin-filter-count">${e.length} of ${(O.opportunities||[]).length} opportunities shown.</p>
  `}function vs(e){return!!(e?.deadline||e?.deadlineAt||e?.rawPayload?.deadline_at||e?.rawPayload?.deadlineAt)}function ys(){let e=O.adminOpportunityFilters?.missingDeadlineSource||`all`;return(O.opportunities||[]).filter(e=>!vs(e)).filter(e=>!Tr(e)).filter(t=>e===`all`||t.source===e).sort((e,t)=>String(e.source||``).localeCompare(String(t.source||``))||String(e.title||``).localeCompare(String(t.title||``)))}function bs(){let e=[`Ríkiskaup / island.is procurement`,`Vegagerðin`,`Akranes útboð`,`Garðabær Municipality`],t=gs((O.opportunities||[]).filter(e=>!vs(e)),e=>e.source||`Unknown`);return Ht([...e,...t])}function xs(e){let t=e?.rawPayload||{},n=String(e?.url||t.source_url||t.link||``).trim();if(!n)return{label:`No source URL`,isSafe:!1};let r;try{r=new URL(n)}catch{return{label:`Invalid URL`,isSafe:!1}}if(![`http:`,`https:`].includes(r.protocol))return{label:`Unsupported protocol: ${r.protocol}`,isSafe:!1};let i=r.hostname.replace(/^www\./i,``).toLowerCase(),a=[`utbodsvefur.is`,`vegagerdin.is`,`akranes.is`,`gardabaer.is`,`borgarbyggd.is`,`arborg.is`,`faxafloahafnir.is`,`reykjavik.is`,`hafnarfjordur.is`,`reykjanesbaer.is`,`mulathing.is`,`akureyri.is`].some(e=>i===e||i.endsWith(`.${e}`));return{label:a?`Yes (${i})`:`Unknown host (${i})`,isSafe:a}}function Ss(e){let t=e?.rawPayload||{},n=t.deadline_debug&&typeof t.deadline_debug==`object`?t.deadline_debug:{},r=[t.deadline_debug_reason,t.deadline_reenrichment_error,n.source?`debug source: ${n.source}`:``,n.extractedText?`extracted: ${n.extractedText}`:``,n.parserVersion?`parser: ${n.parserVersion}`:``,t.stale_reason?`stale: ${t.stale_reason}`:``].filter(Boolean);return r.length?r.join(` · `):`Still missing after import/re-enrichment, or no debug reason stored yet.`}function Cs(){let e=ys(),t=ws(e),n=e.reduce((e,t)=>{let n=t.source||`Unknown`;return e[n]||(e[n]=[]),e[n].push(t),e},{}),r=Object.keys(n).sort((e,t)=>e.localeCompare(t)),i=O.adminOpportunityFilters?.missingDeadlineSource||`all`,a=bs();return`
    <section class="ops-card admin-debug-card">
      <div class="card-header">
        <div>
          <h2>Missing deadline debug</h2>
          <p>${e.length} opportunities missing deadlines${i===`all`?``:` for ${E(i)}`}. Grouped by source.</p>
          <p class="admin-filter-count">
            total=${t.total} · alert_eligible=false=${t.alertFalse} · alert_eligible not false=${t.alertNotFalse} · confirmed_tender=${t.confirmedTender} · needs_review=${t.needsReview}
          </p>
        </div>
        <label class="admin-inline-control">
          <span>Source</span>
          <select data-admin-filter="missingDeadlineSource">
            <option value="all">All sources</option>
            ${a.map(e=>`<option value="${E(e)}" ${i===e?`selected`:``}>${E(e)}</option>`).join(``)}
          </select>
        </label>
      </div>
      ${r.length?r.map(e=>Ts(e,n[e])).join(``):`<div class="empty-card">No missing-deadline opportunities for this filter.</div>`}
    </section>
  `}function ws(e){return(e||[]).reduce((e,t)=>{let n=t?.rawPayload||{},r=String(n.alert_eligible??``).toLowerCase(),i=String(n.quality_status||``).toLowerCase();return e.total+=1,r===`false`?e.alertFalse+=1:e.alertNotFalse+=1,i===`confirmed_tender`&&(e.confirmedTender+=1),i===`needs_review`&&(e.needsReview+=1),e},{total:0,alertFalse:0,alertNotFalse:0,confirmedTender:0,needsReview:0})}function Ts(e,t){return`
    <div class="missing-deadline-source-group">
      <h3>${E(e)} <span class="muted">(${t.length})</span></h3>
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
            ${t.map(Es).join(``)}
          </tbody>
        </table>
      </div>
    </div>
  `}function Es(e){let t=xs(e),n=qt(e.url||e.rawPayload?.source_url||``),r=e.rawPayload?.safety_status||e.rawPayload?.quality_status||qs(e),i=e.rawPayload?.alert_eligible,a=i===!0?`true`:`false`,o=String(i??``).toLowerCase()===`false`?``:`<br><span class="status-pill is-warning">Missing deadline alert flag needs fix</span>`,s=Ss(e);return`
    <tr>
      <td><code>${E(String(e.id||``))}</code><br><span>${E(e.externalId||`No external ID`)}</span></td>
      <td><strong>${E(e.title||`Untitled`)}</strong><br><span>${E(e.source||`Unknown source`)}</span></td>
      <td>${n?`<a href="${E(n)}" target="_blank" rel="noreferrer" title="${E(n)}">${E(n)}</a>`:`No source URL`}</td>
      <td>${e.publishedDate?E(C(e.publishedDate)):`Not listed`}</td>
      <td>${E(r||`unknown`)}<br><span>alert_eligible=${E(a)}</span>${o}</td>
      <td><span class="status-pill ${t.isSafe?`is-success`:`is-running`}">${E(t.label)}</span></td>
      <td title="${E(s)}">${E(s)}</td>
    </tr>
  `}function Ds(){return Q(et({t:D,escapeHtml:E,language:O.language,trialHref:In()}))}function Os(){return O.user?(W(),Q(`
    <section class="page-head pricing-head">
      <p class="eyebrow">${E(D(`onboarding`))}</p>
      <h1>${E(D(`onboardingTitle`))}</h1>
      <p>${E(D(`onboardingText`))}</p>
    </section>

    ${ks()}
  `)):V()}function ks(){return W(),ut({t:D,escapeHtml:E,capitalize:Gt,arrayFieldText:Bi,formatCustomerLocation:Ol,getFilterOptions:As,getProfileSuggestions:Ui,renderCustomDropdown:Ns,renderSuggestionChips:Gi,profileDraft:O.profileDraft||mn(),hasProfile:!!O.profile,isSavingProfile:O.isSavingProfile,profileSaved:O.profileSaved,profileSaveMessage:O.profileSaveMessage,profileSaveError:O.profileSaveError})}function As(e){return e===`industry`?[`Construction`,`Electrical`,`Cleaning`,`IT / Web / Software`,`Architecture / Engineering`,`Consulting`,`Transport`,`Equipment / Machinery`,`Landscaping`,`Security`,`Other`].map(e=>({value:e,label:e})):e===`label`?[{value:`strong`,label:O.language===`is`?`Aðeins sterkar`:`Strong only`},{value:`recommended`,label:O.language===`is`?`Mælt með`:`Recommended`},{value:`all`,label:O.language===`is`?`Allar samsvaranir`:`All matches`},{value:`all_opportunities`,label:O.language===`is`?`Öll tækifæri`:`All opportunities`},{value:`needs_review`,label:D(`needsReview`)},{value:`possible`,label:O.language===`is`?`Mögulegar samsvaranir`:`Possible matches`},{value:`Good match`,label:D(`goodMatch`)},{value:`Weak match`,label:D(`weakMatch`)}]:e===`category`?[{value:`all`,label:O.language===`is`?`Allir flokkar`:`All categories`},...co().map(e=>({value:e,label:e}))]:e===`location`?[{value:`all`,label:O.language===`is`?`Öll svæði`:`All locations`},...lo().map(e=>({value:e,label:Ol(e)}))]:e===`type`?[{value:`all`,label:O.language===`is`?`Allar tegundir`:`All types`},...uo().map(e=>({value:e,label:Gt(e.replace(`-`,` `))}))]:[]}function js(e){let t=As(e),n=e===`industry`?O.profileDraft?.industry||O.profile?.industry||``:O.filters[e],r=t.findIndex(e=>e.value===n);return Math.max(0,r)}function Ms(e){return Ns({key:e,value:O.filters[e],options:As(e)})}function Ns({key:e,value:t,options:n,profileField:r=``}){let i=O.dropdown.openKey===e,a=t,o=Math.max(0,n.findIndex(e=>e.value===a)),s=i?O.dropdown.focusedIndex:o,c=`filter-${e}-trigger`,l=`filter-${e}-list`,u=n.find(e=>e.value===a)?.label||(e===`industry`?D(`selectIndustry`):n[0]?.label)||``;return`
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
        <span>${E(u)}</span>
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
                data-value="${E(t.value)}"
                ${r?`data-profile-field="${E(r)}"`:``}
                role="option"
                aria-selected="${i}"
              >
                <span>${E(t.label)}</span>
                ${i?`<span class="custom-select-check" aria-hidden="true">✓</span>`:``}
              </button>
            `}).join(``)}
        </div>
      `:``}
    </div>
  `}function Ps(){O.dropdown.openKey=null,O.dropdown.focusedIndex=0,Z()}function Fs(){requestAnimationFrame(()=>{document.querySelector(`.custom-select-option.is-focused`)?.focus()})}function Is(e){requestAnimationFrame(()=>{document.querySelector(`[data-action="toggle-dropdown"][data-key="${e}"]`)?.focus()})}function Ls(){if(!O.user)return V();if(!O.profile)return Mo(D(`setupCompanyFirst`),D(`dashboardNeedsProfile`));let e=La(),t=Ma(),n=Ra(t),r=Na(),i=n.filter(e=>e.matchScore>=85).length,a=n.filter(e=>S(e.deadline)<=14&&S(e.deadline)>=0).length,o=O.saved.length,s=n.filter(e=>e.matchScore>=65).reduce((e,t)=>e+(t.estimatedValue||0),0),c=n.filter(Ba).length,l=Ga({visibleCount:e.length,storedMatchCount:t.length,filteredStoredCount:n.length,availableCount:r.length,recommendedCount:c,strongCount:i,companyName:O.profile.companyName}),u=O.lastMatchedAt?D(`matchesLastRefreshed`,{time:C(O.lastMatchedAt)}):D(`matchesAutoRefresh`);return Q(Ye({profile:O.profile,matches:e,stats:{strong:i,closingSoon:a,savedCount:o,totalValue:X(s)},filters:O.filters,filterSummary:l,matchStatus:O.matchStatus,opportunityLoadError:O.opportunityLoadError,isAdmin:O.isAdmin,matchingLoading:O.matchingLoading,labels:{dashboard:D(`dashboard`),welcomeCompany:D(`welcomeCompany`,{company:O.profile.companyName}),dashboardIntro:D(`dashboardIntro`,{refresh:u}),refreshing:D(`refreshing`),refreshMatches:D(`refreshMatches`),viewWeeklyReport:D(`viewWeeklyReport`),strongMatches:D(`strongMatches`),closingSoon:D(`closingSoon`),savedLabel:D(`savedLabel`),totalPotentialValue:D(`totalPotentialValue`),searchOpportunities:D(`searchOpportunities`),savedOnly:D(`savedOnly`)},renderFilterDropdown:Ms,renderOpportunityCard:Us,renderEmptyState:()=>Hs(O.profile,O.filters.label,{availableCount:r.length,storedMatchCount:t.length,filteredStoredCount:n.length,recommendedCount:c,strongCount:i}),escapeHtml:E}))}function Rs(e){let t=[],n=Array.isArray(e?.locations)?e.locations:[],r=Array.isArray(e?.services)?e.services:[],i=Array.isArray(e?.includeKeywords)?e.includeKeywords:[],a=Array.isArray(e?.excludeKeywords)?e.excludeKeywords:[],o=n.some(e=>T(e)===`all iceland`),s=a.some(e=>{let t=T(e);return t.includes(`reykjavik`)||t.includes(`capital area`)});return o||t.push(O.language===`is`?`Bætið við Allt landið til að ná landsdekkandi útboðum og rammasamningum.`:`Add All Iceland to catch national tenders and framework agreements.`),e?.nationalProjects||t.push(O.language===`is`?`Kveikið á landsdekkandi verkefnum svo slík tækifæri birtist sem mögulegar samsvaranir.`:`Enable national projects so All Iceland opportunities appear as possible matches.`),r.length<5&&t.push(O.language===`is`?`Bætið við nákvæmari þjónustu svo VerkRadar þekki betur útboð sem passa við ykkar vinnu.`:`Add more specific services so VerkRadar can recognize notices that fit your work.`),s&&t.push(O.language===`is`?`Yfirfarið útilokunarorð fyrir Reykjavík eða höfuðborgarsvæðið. Þau geta falið útboð sem fyrirtæki utan svæðisins geta samt boðið í.`:`Review exclude keywords for Reykjavík or Capital Area. They may hide tenders that companies outside Reykjavík can still bid on.`),i.length<4&&t.push(O.language===`is`?`Bætið við fleiri leitarorðum, sérstaklega íslenskum hugtökum sem kaupendur nota í útboðum.`:`Add more include keywords, including Icelandic terms buyers may use in notices.`),t.length||t.push(O.language===`is`?`Yfirfarið þjónustu, svæði og leitarorð svo þau lýsi verkefnunum sem þið viljið raunverulega bjóða í.`:`Review services, locations and keywords to make sure they describe the work you actually want to bid on.`),t}function zs(e,t={}){return O.language===`is`?e===`all`?{eyebrow:`Engar samsvaranir`,title:`Engin tækifæri fundust fyrir þennan prófíl enn.`,body:`Víkkið þjónustu, svæði eða leitarorð til að finna fleiri tækifæri.`}:e===`all_opportunities`?{eyebrow:`Engin tækifæri`,title:`Engin tiltæk tækifæri enn.`,body:`Flytjið inn fleiri heimildir eða skoðið heimildayfirlit í Admin.`}:e===`needs_review`?{eyebrow:`Ekkert þarf staðfestingu`,title:`Engin tækifæri þarfnast staðfestingar núna.`,body:`Tækifæri úr breiðum heimildum sem þarf að yfirfara birtast hér.`}:e===`strong`?{eyebrow:`Engar sterkar samsvaranir`,title:`Engar sterkar samsvaranir enn.`,body:`Þið gætuð samt átt gagnlegar mögulegar samsvaranir. Prófið Mælt með eða Allar samsvaranir.`}:e===`possible`||e===`Possible match`||e===`Weak match`?{eyebrow:`Engar mögulegar samsvaranir`,title:`Engar mögulegar samsvaranir enn.`,body:`Prófið að víkka þjónustu, svæði eða leitarorð til að finna óvissari tækifæri.`}:{eyebrow:`Engar ráðlagðar samsvaranir`,title:Bs(t),body:Vs(t)}:e===`all`?{eyebrow:`No matches`,title:`No opportunities found for this profile yet.`,body:`Broaden your services, locations or keywords to find more opportunities.`}:e===`all_opportunities`?{eyebrow:`No opportunities`,title:`No available opportunities yet.`,body:`Import more sources or check Admin source coverage.`}:e===`needs_review`?{eyebrow:`No needs-review items`,title:`No needs-review opportunities right now.`,body:`Broad-feed opportunities that need manual verification will appear here.`}:e===`strong`?{eyebrow:`No strong matches`,title:`No strong matches yet.`,body:`You may still have useful possible matches. Switch to Recommended or All matches to review them.`}:e===`possible`||e===`Possible match`||e===`Weak match`?{eyebrow:`No possible matches`,title:`No possible matches yet.`,body:`Try broadening your services, locations or keywords to find lower-confidence opportunities.`}:{eyebrow:`No recommended matches`,title:Bs(t),body:Vs(t)}}function Bs(e={}){let t=e.companyName||(O.language===`is`?`þennan prófíl`:`this profile`);return Number(e.strongCount||0)>0?O.language===`is`?`${e.strongCount} sterkar samsvaranir eru faldar af síum.`:`${e.strongCount} strong ${Number(e.strongCount)===1?`match is`:`matches are`} hidden by filters.`:O.language===`is`?`Engar ráðlagðar samsvaranir fyrir ${t} enn.`:`No recommended matches for ${t} yet.`}function Vs(e={}){let t=Number(e.strongCount||0),n=Number(e.filteredStoredCount||0),r=Number(e.availableCount||0);return t>0?O.language===`is`?`Hreinsið leit/flokka/svæðissíur eða slökkvið á Aðeins vistað til að sjá sterku samsvaranirnar.`:`Clear search/category/location filters or turn off Saved only to see the strong matches.`:n>0?O.language===`is`?`${n} tækifæri eru til, en falin af gæðasíum. Notið Allar samsvaranir eða Þarfnast staðfestingar til að skoða þau.`:`${n} ${n===1?`opportunity is`:`opportunities are`} available, but hidden from Recommended by quality checks. Use All matches or Needs review to inspect them.`:O.language===`is`?`${r} tækifæri eru til í kerfinu, en ekkert passar nógu sterkt við þennan prófíl.`:`${r} opportunities are available in the system, but none match this profile strongly enough.`}function Hs(e,t=O.filters.label,n={}){let r=Rs(e);return Je({copy:zs(t,{...n,companyName:e?.companyName}),suggestions:r,labels:{improveProfile:D(`improveProfile`),includeNationalOpportunities:D(`includeNationalOpportunities`),showAllStoredMatches:D(`showAllStoredMatches`),inspectAllOpportunities:D(`inspectAllOpportunities`)},escapeHtml:E})}function Us(e){return Xe({opp:e,saved:O.saved.includes(e.id),deadline:so(e),sourceBadgeHtml:`<span class="source-pill source-badge">${E(e.source)}</span>`,qualityBadgeHtml:Js(e),safetyBadgeHtml:Ys(e),extractedBadgeHtml:$s(e),originalLanguageBadgeHtml:Ws(e)?`<span class="source-pill source-badge muted-badge">${E(D(`originalLanguage`))}</span>`:``,matchBadgeClass:fo(e.matchLabel),matchLabel:Cl(e.matchLabel),buyer:Tl(e),location:El(e),value:X(e.estimatedValue),reasons:e.matchReasons.slice(0,3).map(kl),labels:{details:D(`details`),saved:D(`saved`),save:D(`save`),ignore:D(`ignore`)},escapeHtml:E})}function Ws(e){return/ted|tenders electronic daily/i.test(String(e.source||``))}function Gs(e){let t=I(e);return{confirmed_tender:`Confirmed tender`,early_signal:`Early signal`,needs_review:`Needs review`}[t]||Gt(t.replace(/_/g,` `))}function Ks(e){return{confirmed_tender:`Confirmed tender`,early_opportunity:`Early opportunity`,market_signal:`Market signal`,news_context:`News context`,not_opportunity:`Not an opportunity`}[Er(e)||e]||Gt(String(e||`market_signal`).replace(/_/g,` `))}function qs(e){let t=L(e);return t===`news_context`||t===`not_opportunity`||t===`market_signal`?Ks(t):R(e)?ec(Dr(e)):Gs(I(e.qualityStatus,e))}function Js(e){return`<span class="source-pill source-badge quality-badge ${E(L(e)||I(e.qualityStatus,e))}">${E(Sl(qs(e)))}</span>`}function Ys(e){if(!e||!e.safetyStatus)return``;let t=Fa(e);return`<span class="source-pill source-badge safety-badge ${E(t)}">${E(Xs(t))}</span>`}function Xs(e){let t=String(e||``).toLowerCase();return(O.language===`is`?{auto_approved:`Sjálfkrafa samþykkt`,needs_review:`Þarfnast yfirferðar`,hidden:`Falið`}:{auto_approved:`Auto-approved`,needs_review:`Needs review`,hidden:`Hidden`})[t]||Gt(t.replace(/_/g,` `))}function Zs(e){return e?O.language===`is`?`Hæft í tilkynningu`:`Alert eligible`:O.language===`is`?`Ekki hæft í tilkynningu`:`Not alert eligible`}function Qs(e){let t=String(e||``);return O.language===`is`?{"Valid future deadline found":`Gildur framtíðarskilafrestur fannst`,"Recent high-intent procurement signal":`Nýlegt merki frá sterkri útboðsheimild`,"Strong service/work-type fit":`Sterk samsvörun við þjónustu eða verkflokk`,"No reliable deadline was found":`Áreiðanlegur skilafrestur fannst ekki`,"Buyer is missing or generic":`Kaupandi vantar eða er of almennur`,"Match depends on broad or low-confidence terms":`Samsvörun byggir á breiðum eða óvissum orðum`,"Possible service mismatch for this company profile":`Mögulegt ósamræmi við þjónustu fyrirtækisins`,"Mentions design, consulting, supervision, or project management terms":`Inniheldur orð tengd hönnun, ráðgjöf, eftirliti eða verkefnastjórnun`,"Tender appears already awarded or already tendered":`Útboð virðist þegar auglýst eða útboði lokið`,"Stale or expired opportunity signal":`Gamalt eða útrunnið tækifæri`,"Current opportunity is plausible but needs review before customer alerts":`Tækifærið gæti átt við en þarf yfirferð áður en það fer í tilkynningu`,"Admin override includes this opportunity in customer reports":`Admin hefur samþykkt birtingu í viðskiptavinayfirlitum`,"Excluded by customer eligibility, duplicate, stale, hidden, demo, or expired filters":`Falið vegna reglna um birtingu, afrit, aldur, prófunargögn eða útrunnið tækifæri`}[t]||$(t):t}function $s(e){if(e?.rawPayload?.extraction_method!==`vegagerdin_article_project_parser`)return``;let t=e.rawPayload?.region?` · ${e.rawPayload.region}`:``;return`<span class="source-pill source-badge muted-badge">${E(D(`extractedProject`))}${E(t)}</span>`}function ec(e){return{tender_awarded:D(`tenderAwarded`),awarded:D(`tenderAwarded`),already_tendered:D(`tenderAlreadyAnnounced`),announced:D(`tenderAlreadyAnnounced`),upcoming_tender:D(`upcomingTender`),project_signal:D(`projectSignal`),open_or_published:D(`tenderAlreadyAnnounced`),planned_tender:D(`upcomingTender`),unclear:D(`projectSignal`)}[String(e||``)]||Gt(String(e||``).replace(/_/g,` `))}function tc(e){let t=L(e);return t===`news_context`||t===`not_opportunity`?`<div class="note-panel quality-warning">${E(O.language===`is`?`Þetta lítur út eins og frétta- eða umferðarefni, ekki tækifæri fyrir viðskiptavin.`:`This looks like news or traffic context, not a customer-facing opportunity.`)}</div>`:I(e.qualityStatus,e)===`needs_review`?R(e)?`<div class="note-panel quality-warning">${E(O.language===`is`?`Útdregin verkefnavísbending — staðfestið útboðstímasetningu í heimildargrein.`:`Extracted project signal — verify tender timing in the source article.`)}</div>`:`<div class="note-panel quality-warning">${E(O.language===`is`?`Innflutt úr breiðum straumi — staðfestið á upprunasíðu.`:`Imported from broad feed — verify source page.`)}</div>`:``}function nc(e){let t=O.saved.includes(e.id),n=so(e),r=Array.isArray(e.requirements)?e.requirements:[],i=Array.isArray(e.matchReasons)?e.matchReasons:[],a=Array.isArray(e.risks)?e.risks:[],o=Array.isArray(e.nextSteps)?e.nextSteps:[],s=[R(e)?`<p><strong>${E(D(`extraction`))}:</strong> ${E(O.language===`is`?`Útdregið úr grein Vegagerðarinnar`:`Extracted from Vegagerðin article`)}</p>`:``,e.rawPayload?.parent_article_title?`<p><strong>${E(D(`sourceArticle`))}:</strong> ${E(e.rawPayload.parent_article_title)}</p>`:``,e.rawPayload?.parent_url?`<p><strong>${E(D(`parentArticle`))}:</strong> <a href="${E(e.rawPayload.parent_url)}" target="_blank" rel="noreferrer">${E(D(`openSourceArticle`))}</a></p>`:``,e.rawPayload?.region?`<p><strong>${E(D(`extractedRegion`))}:</strong> ${E(e.rawPayload.region)}</p>`:``,e.rawPayload?.project_number?`<p><strong>${E(D(`projectNumber`))}:</strong> ${E(e.rawPayload.project_number)}</p>`:``,R(e)?`<p><strong>${E(D(`tenderState`))}:</strong> ${E(ec(Dr(e)))}</p>`:``].join(``);return Ze({opp:e,saved:t,deadline:n,requirements:r,matchReasons:i.length?i.map(kl):[],risks:a.length?a.map($):[D(`noMajorRisks`)],safetyReasons:[...Array.isArray(e.safetyReasons)?e.safetyReasons:[],...a.length?a.map($):[D(`noMajorRisks`)]].map(Qs),nextSteps:o.map(Al),matchBadgeClass:fo(e.matchLabel),matchLabel:Cl(e.matchLabel),qualityBadgeHtml:Js(e),safetyBadgeHtml:Ys(e),extractedBadgeHtml:$s(e),qualityWarningHtml:tc(e),buyerSummary:Dl(`buyer`,e.buyer),location:El(e),value:e.estimatedValue?X(e.estimatedValue):D(`notListed`),sourceUrl:e.url,extractedDetails:s,qualityLabel:Sl(qs(e)),safetyStatusLine:e.safetyStatus?`<p><strong>${E(O.language===`is`?`Öryggisflokkun`:`Safety status`)}:</strong> ${E(Xs(e.safetyStatus))} · ${E(Zs(e.alertEligible))}</p>`:``,category:Dl(`category`,e.category),type:Dl(`type`,e.type),publishedDate:e.publishedDate,cpvCode:e.cpvCode,labels:{description:D(`description`),noDescription:D(`noDescription`),requirements:D(`requirements`),noSpecificRequirements:D(`noSpecificRequirements`),matchReasons:D(`matchReasons`),noMatchReasons:D(`noMatchReasons`),opportunityInfo:D(`opportunityInfo`),source:D(`source`),sourceValue:Dl(`source`,e.source),quality:D(`quality`),category:D(`category`),type:D(`type`),deadline:D(`deadline`),deadlineLabel:$(n.label),published:D(`published`),cpv:D(`cpv`),risksToCheck:D(`risksToCheck`),recommendedNextSteps:D(`recommendedNextSteps`),openSourceAndConfirm:D(`openSourceAndConfirm`),removeFromSaved:D(`removeFromSaved`),saveOpportunity:D(`saveOpportunity`),openSource:D(`openSource`),markNotRelevant:D(`markNotRelevant`)},escapeHtml:E})}function rc(){if(!O.user)return V();if(!O.isAdmin)return di();let e=hs(),t=O.adminCompanies.find(e=>e.id===O.selectedAdminCompanyId);return Q(`
    <section class="page-head">
      <p class="eyebrow">Admin</p>
      <h1>Operations dashboard</h1>
      <p>Admin tools for monitoring imports, reviewing customers, managing sources and handling manual entries.</p>
    </section>

    ${O.adminMessage?`
      <div class="admin-message ${O.adminMessage.type===`error`?`is-error`:`is-success`}">
        ${E(O.adminMessage.text)}
      </div>
    `:``}

    ${O.opportunityLoadError?`
      <div class="note-panel">
        ${E(O.opportunityLoadError)}
      </div>
    `:``}

    ${ic()}
    ${ac(e)}
    ${t?Dc(t):``}
  `)}function ic(){return`
    <div class="admin-tabs" role="tablist" aria-label="Admin sections">
      ${[[`overview`,`Overview`],[`companies`,`Companies`],[`review`,`Review Queue`],[`sources`,`Sources/imports`],[`opportunities`,`Opportunities`],[`reports`,`Reports`]].map(([e,t])=>`
        <button type="button" class="${O.adminActiveTab===e?`is-active`:``}" data-action="admin-tab" data-tab="${e}">
          ${E(t)}
        </button>
      `).join(``)}
    </div>
  `}function ac(e){return O.adminActiveTab===`companies`?Cc():O.adminActiveTab===`review`?sc():O.adminActiveTab===`sources`?`
      ${Go()}
      ${qo()}
      ${as()}
      ${Jo()}
      ${$o()}
    `:O.adminActiveTab===`opportunities`?Ec(e):O.adminActiveTab===`reports`?es():`
    ${oc()}
    ${ke({escapeHtml:E,isRunning:!!O.adminDailyPipelineLoading,result:O.adminDailyPipelineResult||null})}
    ${ze({escapeHtml:E,usageSummary:O.adminAiUsageSummary||null,lastResult:O.adminAutomaticAiReviewResult||null,isRunning:!!O.adminAutomaticAiReviewLoading,formatAiUsageCost:me})}
    ${Go()}
    ${Cc(!0)}
  `}function oc(){let e=O.adminCompanies||[],t=O.opportunities||[],n=Uo(),r=e.filter(e=>e.profileStatus===`Complete`).length,i=Math.max(0,e.length-r);return`
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
        <div><span>Confirmed tenders</span><strong>${t.filter(e=>I(e.qualityStatus,e)===`confirmed_tender`).length}</strong></div>
        <div><span>Early signals</span><strong>${t.filter(e=>I(e.qualityStatus,e)===`early_signal`).length}</strong></div>
        <div><span>Needs review</span><strong>${t.filter(e=>I(e.qualityStatus,e)===`needs_review`).length}</strong></div>
        <div><span>Latest import status</span><strong>${E(n?.status||`No runs`)}</strong></div>
      </div>
    </section>
  `}function sc(){let e=O.adminReviewMatches||[],t=cc();return`
    <section class="ops-card">
      <div class="card-header">
        <div>
          <h2>${E(t.title)}</h2>
          <p>${O.adminReviewLoading?E(t.loading):E(t.count(e.length))}</p>
        </div>
        <button class="btn btn-ghost btn-small" type="button" data-action="refresh-admin-status">Refresh</button>
      </div>
      ${O.adminReviewError?`<div class="admin-message is-error">${E(O.adminReviewError)}</div>`:``}
      ${O.adminReviewLoading&&!e.length?`<div class="empty-card">${E(t.loading)}</div>`:e.length?`
        <div class="admin-review-list">
          ${e.map(vc).join(``)}
        </div>
      `:`<div class="empty-card">${E(t.empty)}</div>`}
    </section>
  `}function cc(){return{title:`Review Queue`,loading:`Loading review queue...`,empty:`No uncertain matches need review.`,count:e=>`${e} uncertain match${e===1?``:`es`} need review.`,opportunity:`Opportunity`,company:`Company`,source:`Source`,buyer:`Buyer`,region:`Region`,deadline:`Deadline`,score:`Score`,safety:`Safety`,alert:`Alert`,safetyReasons:`Safety reasons`,matchReasons:`Match reasons`,aiReview:`AI review`,aiReviewButton:`AI review`,aiReviewing:`Reviewing...`,aiFit:`Fit`,aiConfidence:`Confidence`,aiSend:`Send to client`,aiSummary:`Suggested client summary`,aiNoReview:`No AI review saved yet.`,approve:`Approve`,approving:`Approving...`,reject:`Reject`,rejecting:`Rejecting...`,noSource:`No source URL`,hidden:`Hidden from reports`,notHidden:`Not hidden from reports`,sourceUrl:`Source URL`}}function lc(e){let t=e?.source||e?.rawPayload?.source_name||``;return en(e?.buyer,t,e?.rawPayload||{})||`Unknown buyer`}function uc(e){return tn(e?.source||e?.rawPayload?.source_name||``)||e?.location||`Unknown`}function dc(e){let t=String(e?.deadlineAt||e?.rawPayload?.deadline_at||``).trim().match(/^(\d{4}-\d{2}-\d{2})[T\s](\d{2}):(\d{2})/);return t?`${t[1]} ${t[2]}:${t[3]}`:e?.deadline?Vt(e.deadline):`Deadline not available in imported data — verify on source page.`}function fc(e){let t=String(e||``).toLowerCase();return{auto_approved:`Auto-approved`,needs_review:`Needs review`,hidden:`Hidden`}[t]||Gt(t.replace(/_/g,` `))}function pc(e){return e?`Alert eligible`:`Not alert eligible`}function mc(e){return e?`Review required`:`Review not required`}function hc(e){let t=String(e||``).trim();return{"Strong match":`Strong match`,"Good match":`Good match`,"Possible match":`Possible match`,"Weak match":`Weak match`}[t]||t||`Possible match`}function gc(e){return String(e||``).trim()}function _c(e){return String(e||``).trim()}function vc(e){let t=e.opportunity||{},n=O.adminReviewActions?.[e.id]||``,r=!!O.adminAiReviewActions?.[e.id],i=qt(t.url),a=cc(),o=e.safetyReasons.length?e.safetyReasons:[`Needs admin review`],s=e.matchReasons.length?e.matchReasons:[`Profile match`];return`
    <article class="admin-review-card">
      <div class="admin-review-card-top">
        <div class="admin-review-title-block">
          <span class="eyebrow">${E(a.opportunity)}</span>
          <h3>${E(t.title||`Untitled opportunity`)}</h3>
          <p>${E(a.company)}: <strong>${E(e.companyName)}</strong></p>
          <p>${E(a.source)}: <strong>${E(t.source||`Unknown source`)}</strong></p>
          ${i?`<p class="admin-source-url"><span>${E(a.sourceUrl)}:</span> ${E(i)}</p>`:``}
        </div>
        <div class="admin-review-source-action">
          ${i?`<a class="btn btn-secondary btn-small" href="${E(i)}" target="_blank" rel="noopener">Open source ↗</a>`:`<span class="admin-chip">${E(a.noSource)}</span>`}
        </div>
      </div>

      <div class="admin-review-meta-grid">
        ${xc(a.buyer,lc(t))}
        ${xc(a.region,uc(t))}
        ${xc(a.deadline,dc(t))}
        ${xc(a.score,`${hc(e.matchLabel)} · ${Number(e.matchScore||0)}`)}
        ${xc(a.safety,fc(e.safetyStatus))}
        ${xc(a.alert,`${pc(e.alertEligible)} · ${mc(e.reviewRequired)}`)}
      </div>

      <div class="admin-review-reasons">
        <section class="admin-review-reason-box is-warning">
          <h4>${E(a.safetyReasons)}</h4>
          <ul>
            ${o.map(e=>`<li>${E(e)}</li>`).join(``)}
          </ul>
        </section>
        <section class="admin-review-reason-box">
          <h4>${E(a.matchReasons)}</h4>
          <ul>
            ${s.map(e=>`<li>${E(e)}</li>`).join(``)}
          </ul>
        </section>
      </div>

      ${yc(e,a)}

      <div class="admin-review-actions">
        <span class="admin-review-hidden-state">${E(t.rawPayload?.hidden_from_reports===!0?a.hidden:a.notHidden)}</span>
        <div class="admin-row-actions">
          <button class="btn btn-secondary btn-small" data-action="admin-ai-review-match" data-id="${E(e.id)}" data-force="${e.aiReview?`true`:`false`}" ${n||r?`disabled`:``}>${E(r?a.aiReviewing:e.aiReview?`Re-run AI review`:a.aiReviewButton)}</button>
          <button class="btn btn-ghost btn-small" data-action="admin-review-match" data-review-action="approve" data-id="${E(e.id)}" data-company-id="${E(e.companyId)}" ${n||r?`disabled`:``}>${E(n===`approve`?a.approving:a.approve)}</button>
          <button class="btn btn-ghost btn-small" data-action="admin-review-match" data-review-action="reject" data-id="${E(e.id)}" data-company-id="${E(e.companyId)}" ${n||r?`disabled`:``}>${E(n===`reject`?a.rejecting:a.reject)}</button>
        </div>
      </div>
    </article>
  `}function yc(e,t){let n=e.aiReview;return n?`
    <section class="admin-ai-review-box">
      <div class="admin-ai-review-header">
        <h4>${E(t.aiReview)}</h4>
        <span>${E(n.model||`model not listed`)} · ${n.updatedAt?E(C(n.updatedAt)):``}</span>
      </div>
      <div class="admin-ai-review-meta">
        <span><strong>${E(t.aiFit)}</strong>${E(bc(n.fit))}</span>
        <span><strong>${E(t.aiConfidence)}</strong>${Math.round(Number(n.confidence||0)*100)}%</span>
        <span><strong>${E(t.aiSend)}</strong>${n.sendToClient?`Yes`:`No`}</span>
      </div>
      <p>${E(n.reason||``)}</p>
      ${n.fitReasons.length?`<p><strong>Fit reasons:</strong> ${n.fitReasons.map(e=>`<span class="admin-chip">${E(e)}</span>`).join(` `)}</p>`:``}
      ${n.risksOrQuestions.length?`<p><strong>Risks/questions:</strong> ${n.risksOrQuestions.map(e=>`<span class="admin-chip">${E(e)}</span>`).join(` `)}</p>`:``}
      ${n.suggestedClientSummary?`<p><strong>${E(t.aiSummary)}:</strong> ${E(n.suggestedClientSummary)}</p>`:``}
    </section>
  `:`
      <section class="admin-ai-review-box is-empty">
        <div class="admin-ai-review-header">
          <h4>${E(t.aiReview)}</h4>
          <span>${E(t.aiNoReview)}</span>
        </div>
      </section>
    `}function bc(e){return{strong:`Strong`,possible:`Possible`,weak:`Weak`,no_fit:`No fit`}[String(e||``)]||`Weak`}function xc(e,t){return`
    <div class="admin-review-meta-item">
      <span>${E(e)}</span>
      <strong>${E(t||`—`)}</strong>
    </div>
  `}function Sc(){let e=O.adminCompanyFilters;return(O.adminCompanies||[]).filter(t=>{let n=T(e.search);return!(n&&!T(`${t.companyName} ${t.contactEmail} ${t.industry}`).includes(n)||e.industry!==`all`&&t.industry!==e.industry||e.profileStatus!==`all`&&t.profileStatus!==e.profileStatus||e.plan!==`all`&&t.plan!==e.plan)})}function Cc(e=!1){let t=e?(O.adminCompanies||[]).slice(0,5):Sc();return`
    <section class="ops-card">
      <div class="card-header">
        <div>
          <h2>Companies / users</h2>
          <p>${O.adminCompaniesLoading?`Loading companies...`:`${t.length} shown from ${(O.adminCompanies||[]).length} total companies.`}</p>
        </div>
        ${e?``:`
          <label class="admin-inline-control">
            <span>Report mode</span>
            <select data-admin-report-mode>
              <option value="new_only" ${O.adminReportMode===`new_only`?`selected`:``}>New opportunities report</option>
              <option value="all_current" ${O.adminReportMode===`all_current`?`selected`:``}>Current active opportunities report</option>
            </select>
          </label>
        `}
      </div>
      ${O.adminCompaniesError?`<div class="admin-message is-error">${E(O.adminCompaniesError)}</div>`:``}
      ${e?``:wc()}
      ${O.adminCompaniesLoading&&!t.length?`<div class="empty-card">Loading companies...</div>`:t.length?`
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
              ${t.map(Tc).join(``)}
            </tbody>
          </table>
        </div>
      `:`<div class="empty-card">No companies found.</div>`}
    </section>
  `}function wc(){let e=O.adminCompanies||[],t=gs(e,e=>e.industry),n=gs(e,e=>e.plan),r=O.adminCompanyFilters;return`
    <div class="admin-filters admin-company-filters">
      <input data-admin-company-filter="search" value="${E(r.search)}" placeholder="Search company or email..." />
      <select data-admin-company-filter="industry">
        <option value="all">All industries</option>
        ${t.map(e=>`<option value="${E(e)}" ${r.industry===e?`selected`:``}>${E(e)}</option>`).join(``)}
      </select>
      <select data-admin-company-filter="profileStatus">
        <option value="all">All profiles</option>
        ${[`Complete`,`Incomplete`].map(e=>`<option value="${e}" ${r.profileStatus===e?`selected`:``}>${e}</option>`).join(``)}
      </select>
      <select data-admin-company-filter="plan">
        <option value="all">All plans</option>
        ${n.map(e=>`<option value="${E(e)}" ${r.plan===e?`selected`:``}>${E(e)}</option>`).join(``)}
      </select>
    </div>
  `}function Tc(e){let t=O.adminCompanyActions?.[e.id]||``,n=t===`refresh`,r=t===`report`,i=!!t;return`
    <tr>
      <td><strong>${E(e.companyName)}</strong><br><span>${E(e.contactEmail||`No email`)}</span></td>
      <td>${E(e.industry||`Unknown`)}</td>
      <td>${E(e.plan||`Demo`)}</td>
      <td><span class="status-pill ${e.profileStatus===`Complete`?`is-success`:`is-running`}">${E(e.profileStatus)}</span></td>
      <td>${E(C(e.createdAt))}</td>
      <td>${e.matchCount}</td>
      <td>${e.savedCount?e.savedCount:`Not tracked`}</td>
      <td>${e.latestReportDate?E(C(e.latestReportDate)):`No reports`}</td>
      <td>
        <div class="admin-row-actions">
          <button class="btn btn-secondary btn-small" type="button" data-action="view-admin-company" data-id="${E(e.id)}" ${i?`disabled`:``}>View details</button>
          <button class="btn btn-ghost btn-small" type="button" data-action="admin-refresh-company-matches" data-id="${E(e.id)}" ${i?`disabled`:``}>${n?`Refreshing...`:`Refresh matches`}</button>
          <button class="btn btn-ghost btn-small" type="button" data-action="admin-generate-company-report" data-id="${E(e.id)}" ${i?`disabled`:``}>${r?`Generating...`:`Generate report`}</button>
        </div>
      </td>
    </tr>
  `}function Ec(e){let t={...Tn(),...O.adminOpportunityDraft||{}};return`
    <section class="admin-list">
      <div class="card-header">
        <div>
          <h2>Existing opportunities</h2>
          <p>${(O.opportunities||[]).length} loaded ${O.opportunityLoadError?`from fallback data`:`from Supabase`}.</p>
        </div>
      </div>
      ${_s(e)}
      ${e.length?e.map(kc).join(``):`<div class="empty-card">No opportunities loaded.</div>`}
    </section>

    <form class="form-card admin-form" id="admin-opportunity-form">
      <div class="form-section">
        <h2>Add opportunity</h2>
        <div class="form-grid">
          <label>Title <input name="title" data-admin-opportunity-field="title" value="${E(t.title)}" required /></label>
          <label>Buyer <input name="buyer" data-admin-opportunity-field="buyer" value="${E(t.buyer)}" /></label>
          <label>Source name <input name="sourceName" data-admin-opportunity-field="sourceName" value="${E(t.sourceName)}" required /></label>
          <label>Category <input name="category" data-admin-opportunity-field="category" value="${E(t.category)}" /></label>
          <label>Type <input name="type" data-admin-opportunity-field="type" value="${E(t.type)}" /></label>
          <label>Deadline <input type="date" name="deadline" data-admin-opportunity-field="deadline" value="${E(t.deadline)}" /></label>
          <label>Published date <input type="date" name="published_date" data-admin-opportunity-field="published_date" value="${E(t.published_date)}" /></label>
          <label>Location <input name="location" data-admin-opportunity-field="location" value="${E(t.location)}" /></label>
          <label>Estimated value <input type="number" min="0" step="1" name="estimated_value" data-admin-opportunity-field="estimated_value" value="${E(t.estimated_value)}" /></label>
          <label>URL <input type="url" name="url" data-admin-opportunity-field="url" value="${E(t.url)}" /></label>
          <label>CPV code <input name="cpv_code" data-admin-opportunity-field="cpv_code" value="${E(t.cpv_code)}" /></label>
          <label>Difficulty <input name="difficulty" data-admin-opportunity-field="difficulty" value="${E(t.difficulty)}" /></label>
          <label>Status <input name="status" data-admin-opportunity-field="status" value="${E(t.status)}" /></label>
        </div>
        <label>Description <textarea name="description" data-admin-opportunity-field="description" rows="4">${E(t.description)}</textarea></label>
        <label>Requirements comma-separated <textarea name="requirements" data-admin-opportunity-field="requirements" rows="3">${E(t.requirements)}</textarea></label>
        <label>Keywords comma-separated <textarea name="keywords" data-admin-opportunity-field="keywords" rows="3">${E(t.keywords)}</textarea></label>
      </div>

      <div class="form-actions">
        <button class="btn btn-primary btn-large" type="submit" ${O.adminSubmitting?`disabled`:``}>
          ${O.adminSubmitting?`Saving...`:`Add opportunity`}
        </button>
      </div>
    </form>

    ${Cs()}
  `}function Dc(e){let t=[e.minProjectValue?X(e.minProjectValue):`No minimum`,e.maxProjectValue?X(e.maxProjectValue):`No maximum`].join(` - `),n=qt(e.website);return`
    <div class="modal-backdrop">
      <div class="modal admin-company-modal" role="dialog" aria-modal="true">
        <div class="modal-header">
          <div>
            <span class="status-pill ${e.profileStatus===`Complete`?`is-success`:`is-running`}">${E(e.profileStatus)}</span>
            <h2>${E(e.companyName)}</h2>
            <p>${E(e.contactEmail||`No contact email`)} · ${E(e.industry||`Unknown industry`)}</p>
          </div>
          <button type="button" class="icon-btn modal-close-btn" data-action="close-admin-company" aria-label="Close company details">×</button>
        </div>
        <div class="modal-body">
          <div class="admin-detail-grid">
            <section class="side-panel">
              <h3>Company basics</h3>
              <p><strong>Email:</strong> ${E(e.contactEmail||`Unknown`)}</p>
              <p><strong>Contact name:</strong> ${E(e.contactName||`Not listed`)}</p>
              <p><strong>Phone:</strong> ${E(e.phone||`Not listed`)}</p>
              <p><strong>Kennitala:</strong> ${E(e.kennitala||`Not listed`)}</p>
              <p><strong>Address:</strong> ${E(e.address||`Not listed`)}</p>
              <p><strong>Website:</strong> ${n?`<a href="${E(n)}" target="_blank" rel="noreferrer">${E(e.website)}</a>`:E(e.website||`Not listed`)}</p>
              <p><strong>Industry:</strong> ${E(e.industry||`Unknown`)}</p>
              <p><strong>Created:</strong> ${E(C(e.createdAt))}</p>

              <h3>Billing</h3>
              <p><strong>Selected plan:</strong> ${E(e.selectedPlan||e.plan||`Not selected`)}</p>
              <p><strong>Billing status:</strong> ${E(e.billingStatus||`Not set`)}</p>
              <p><strong>Billing email:</strong> ${E(e.billingEmail||e.contactEmail||`Not listed`)}</p>
              <p><strong>Trial started:</strong> ${e.trialStartedAt?E(C(e.trialStartedAt)):`Not set`}</p>
              <p><strong>Trial ends:</strong> ${e.trialEndsAt?E(C(e.trialEndsAt)):`Not set`}</p>

              <h3>Project preferences</h3>
              <p><strong>Project size:</strong> ${E(t)}</p>
              <p><strong>Unknown value:</strong> ${e.allowUnknownValue?`Allowed`:`Not preferred`}</p>
              <p><strong>Travel:</strong> ${e.willingToTravel?`Yes`:`No`}</p>
              <p><strong>National:</strong> ${e.nationalProjects?`Yes`:`No`}</p>
              <p><strong>Remote:</strong> ${e.remoteProjects?`Yes`:`No`}</p>
            </section>

            <section class="side-panel">
              <h3>Services</h3>
              ${Oc(e.services,`No services saved.`)}
              <h3>Include keywords</h3>
              ${Oc(e.includeKeywords,`No include keywords saved.`)}
              <h3>Exclude keywords</h3>
              ${Oc(e.excludeKeywords,`No exclude keywords saved.`)}
            </section>

            <section class="side-panel">
              <h3>Locations and service areas</h3>
              <p><strong>Base:</strong> ${E(e.baseLocation||`Not set`)}</p>
              ${Oc([...e.locations,...e.serviceAreas],`No locations saved.`)}
              <h3>Reports</h3>
              <p><strong>Frequency:</strong> ${E(e.reportFrequency)}</p>
              <p><strong>Day:</strong> ${E(e.reportDay)}</p>
              <p><strong>Deadline reminders:</strong> ${e.deadlineReminders?`On`:`Off`}</p>
            </section>

            ${je(e,{escapeHtml:E,formatDateTime:C,inviteEmail:$n(e),inviteLink:O.adminCompanyInviteLinks?.[e.id]||``,actionState:O.adminCompanyAccessActions?.[e.id]||``})}

            <section class="side-panel">
              <h3>Latest matches</h3>
              ${Be(e,{escapeHtml:E})}
              <h3>Latest reports</h3>
              ${e.latestReports.length?`
                <ul class="admin-detail-list">
                  ${e.latestReports.map(e=>`
                    <li>
                      <strong>${E(e.title||`Report`)}</strong>
                      <span>${E(C(e.created_at))}</span>
                    </li>
                  `).join(``)}
                </ul>
              `:`<p>No reports generated yet.</p>`}
            </section>

            ${Ve(e,{escapeHtml:E,formatDateTime:C,actionState:O.adminCompanyAiReviewActions?.[e.id]?`running`:``,filter:O.adminCompanyAiReviewFilter,lastResult:O.adminCompanyAiReviewResults?.[e.id]||null,usageSummary:O.adminAiUsageSummary||null,formatAiUsageCost:me})}
          </div>
        </div>
      </div>
    </div>
  `}function Oc(e,t){let n=w(e);return n.length?`<div class="admin-tag-list">${n.map(e=>`<span>${E(e)}</span>`).join(``)}</div>`:`<p>${E(t)}</p>`}function kc(e){let t=O.adminUpdatingId===e.id,n=L(e),r=e.rawPayload?.hidden_from_reports===!0||[`hidden`,`noise`,`deleted`].includes(String(e.rawPayload?.admin_report_status||``).toLowerCase()),i=il(e)?e.rawPayload?.duplicate_reason||`Duplicate of ${e.rawPayload?.canonical_opportunity_id||e.rawPayload?.duplicate_of||`canonical opportunity`}`:``,a=jr({title:e.title,description:e.description,content:`${e.category||``} ${e.source||``} ${Array.isArray(e.keywords)?e.keywords.join(` `):``}`,publishedDate:e.publishedDate,deadline:e.deadline,sourceName:e.source,sourceType:e.sourceType,connectorType:e.rawPayload?.connector_type}),o=e.rawPayload?.stale_reason||(a.isStale?a.reason:``),s=qt(e.url||e.rawPayload?.source_url||``);return`
    <div class="admin-row">
      <div>
        <h3>${E(e.title)}</h3>
        <p><strong>Source:</strong> ${E(e.source||`Unknown source`)} · <strong>Buyer:</strong> ${E(lc(e))} · <strong>Region:</strong> ${E(uc(e))} · <strong>Status:</strong> ${E(e.status)}</p>
        <p><strong>Source URL:</strong> ${s?`<a href="${E(s)}" target="_blank" rel="noreferrer">${E(s)}</a>`:`Not listed`} · <strong>External ID:</strong> ${E(e.externalId||`Not listed`)}</p>
        <p>Quality: ${E(qs(e))} · Intent: ${E(Ks(n))}${r?` · Hidden from reports`:``}${i?` · Duplicate: ${E(i)}`:``}${o?` · Stale / expired: ${E(o)}`:``}</p>
        <p>Debug: hidden_from_reports=${e.rawPayload?.hidden_from_reports===!0?`true`:`false`} · admin_report_status=${E(e.rawPayload?.admin_report_status||`none`)} · stale_status=${E(e.rawPayload?.stale_status||`none`)}</p>
        ${Ac(e)}
      </div>
      <div class="admin-row-actions">
        <button class="btn btn-ghost btn-small" data-action="admin-report-override" data-override="confirmed_tender" data-id="${E(e.id)}" ${t?`disabled`:``}>Confirmed tender</button>
        <button class="btn btn-ghost btn-small" data-action="admin-report-override" data-override="early_opportunity" data-id="${E(e.id)}" ${t?`disabled`:``}>Early opportunity</button>
        <button class="btn btn-ghost btn-small" data-action="admin-report-override" data-override="include" data-id="${E(e.id)}" ${t?`disabled`:``}>Include in reports</button>
        <button class="btn btn-ghost btn-small" data-action="admin-report-override" data-override="noise" data-id="${E(e.id)}" ${t?`disabled`:``}>News/noise</button>
        <button class="btn btn-ghost btn-small" data-action="admin-report-override" data-override="hide" data-id="${E(e.id)}" ${t?`disabled`:``}>Hide from reports</button>
        <button
          class="btn btn-ghost btn-small"
          data-action="delete-opportunity"
          data-id="${E(e.id)}"
          ${O.adminDeletingId===e.id?`disabled`:``}
        >
          ${O.adminDeletingId===e.id?`Deleting...`:`Delete`}
        </button>
      </div>
    </div>
  `}function Ac(e){let t=O.adminOpportunityFilters?.debugCompanyId||``;if(!t)return``;let n=(O.adminCompanies||[]).find(e=>e.id===t);if(!n)return`<div class="admin-debug-panel">Match debug: selected company not loaded.</div>`;let r=Oa(n,e),i=Pc(e,r),a=w(n.services).join(`, `)||`No services`,o=w(n.includeKeywords).join(`, `)||`No include keywords`,s=jc(n,e),c=Mc(n,e),l=Nc(n,e,r),u=classifyMatchSafety(n,r);return`
    <div class="admin-debug-panel">
      <p><strong>Match debug for ${E(n.companyName)}:</strong> score ${Number(r.matchScore||0)} · ${E(hc(r.matchLabel))}</p>
      <p><strong>Services:</strong> ${E(a)}</p>
      <p><strong>Keywords:</strong> ${E(o)}</p>
      <p><strong>Matched terms:</strong> ${s.length?s.map(e=>`<span class="admin-chip">${E(e)}</span>`).join(` `):`None`}</p>
      <p><strong>Missing profile terms:</strong> ${c.length?c.map(e=>`<span class="admin-chip">${E(e)}</span>`).join(` `):`None`}</p>
      <p><strong>Score contribution:</strong> ${l.map(e=>`<span class="admin-chip">${E(e)}</span>`).join(` `)}</p>
      <p><strong>Matched terms/reasons:</strong> ${(r.matchReasons||[]).map(e=>`<span class="admin-chip">${E(gc(e))}</span>`).join(` `)||`None`}</p>
      <p><strong>Risks:</strong> ${(r.risks||[]).map(e=>`<span class="admin-chip">${E(_c(e))}</span>`).join(` `)||`None`}</p>
      <p><strong>Safety:</strong> <span class="admin-chip">${E(fc(u.safetyStatus))}</span> <span class="admin-chip">${E(pc(u.alertEligible))}</span> ${(u.safetyReasons||[]).map(e=>`<span class="admin-chip">${E(e)}</span>`).join(` `)}</p>
      <p><strong>Excluded by:</strong> ${i.length?i.map(e=>`<span class="admin-chip">${E(e)}</span>`).join(` `):`<span class="admin-chip">Not excluded by local dashboard/report filters</span>`}</p>
    </div>
  `}function jc(e,t){let n=Zi(t);return sa(Ht([...w(e.services).filter(e=>Xi(n,e)),...w(e.includeKeywords).filter(e=>Xi(n,e)),...ca(n),...fa(e)?la(n):[]]))}function Mc(e,t){let n=Zi(t);return sa(Ht([...w(e.services),...w(e.includeKeywords)].filter(e=>e&&!Xi(n,e)))).slice(0,12)}function Nc(e,t,n){let r=[],i=(n.matchReasons||[]).filter(e=>/^Mentions your service:/i.test(e)).length,a=(n.matchReasons||[]).filter(e=>/^Contains your keyword:/i.test(e)).length;Da(e,t)&&r.push(`+35 industry/category`),i&&r.push(`+${Math.min(35,i*10)} services`),a&&r.push(`+${Math.min(25,a*8)} keywords`);let o=ba(e,t);return o===`local_match`?r.push(`+22 local`):o===`national_match`?r.push(`+16 national`):o===`remote_match`?r.push(`+14 remote`):o===`outside_area_possible`?r.push(`+4 travel possible`):r.push(`-8 low-confidence location`),t.deadline&&S(t.deadline)>=0&&S(t.deadline)<=30&&r.push(`+8 closing soon`),(n.risks||[]).some(e=>/broad construction/i.test(e))&&r.push(`capped broad fit`),(n.risks||[]).some(e=>/winter|snow/i.test(e))&&r.push(`capped winter fit`),(n.risks||[]).some(e=>/indoor|finishing/i.test(e))&&r.push(`downgraded indoor mismatch`),r.length?r:[`No positive score contribution`]}function Pc(e,t){let n=[];return Number(t.matchScore||0)<50&&n.push(`score_below_50 (${Number(t.matchScore||0)})`),_l(e)||n.push(`customer_match_ineligible`),F(e)||n.push(`dashboard_not_visible`),Fa(e)===`hidden`&&n.push(`safety_status_hidden`),pl(O.adminCompanies?.find(e=>e.id===O.adminOpportunityFilters?.debugCompanyId)||{},e)&&n.push(`needs_review_wrong_type_for_company`),ml(O.adminCompanies?.find(e=>e.id===O.adminOpportunityFilters?.debugCompanyId)||{},e)&&n.push(`design_consulting_or_supervision_only`),e.rawPayload?.hidden_from_reports===!0&&n.push(`hidden_from_reports`),il(e)&&n.push(`duplicate_secondary`),Ar(e)&&n.push(`stale_or_expired`),Tr(e)&&n.push(`demo_or_test`),n}function Fc(){if(!O.user)return V();if(!O.profile)return Mo(D(`setupCompanyFirst`),D(`reportNeedsProfile`));let e=O.profile,t=Xc(e,Jc()),n=O.reports.find(e=>e.id===O.selectedReportId),r=O.reportArchiveLoading?D(`loadingSavedReports`):O.language===`is`?`${O.reports.length} vistuð yfirlit.`:`${O.reports.length} saved report${O.reports.length===1?``:`s`}.`,i=O.reportArchiveLoading?`<div class="empty-card">${E(D(`loadingSavedReports`))}</div>`:O.reportsLoadError?`<div class="admin-message is-error">Failed to load reports. ${E(O.reportsLoadError)}</div>`:O.reportsLoaded&&O.reports.length===0?`<div class="empty-card">${E(D(`noSavedReports`))}</div>`:O.reports.map(Ic).join(``);return Q(`
    <section class="dashboard-head">
      <div>
        <p class="eyebrow">${E(D(`weeklyReport`))}</p>
        <h1>${E(D(`reportTitle`))}</h1>
        <p>${E(e.companyName||`Your company`)} · ${E(Zc(t.periodStart,t.periodEnd))}</p>
        <p class="muted-copy">${E(O.language===`is`?`Sýnir öll núverandi viðeigandi tækifæri, ekki aðeins ný frá síðasta vistaða yfirliti.`:`Showing all current eligible matches, not only new items since the last saved report.`)}</p>
      </div>
      <div class="dashboard-actions">
        <button class="btn btn-primary" data-action="save-report" ${O.reportSaveLoading?`disabled`:``}>
          ${O.reportSaveLoading?E(D(`savingReport`)):E(D(`saveReport`))}
        </button>
        <button class="btn btn-secondary" data-action="download-report-pdf">${E(D(`downloadPdf`))}</button>
        <button class="btn btn-secondary" data-action="copy-report">${E(D(`copyReport`))}</button>
      </div>
    </section>

    ${O.reportMessage?`
      <div class="admin-message ${O.reportMessage.type===`error`?`is-error`:`is-success`}">
        ${E(O.reportMessage.text)}
      </div>
    `:``}

    ${Rc(t,{id:`report-preview`,contactEmail:e.contactEmail,companyName:e.companyName})}

    <section class="report-archive">
      <div class="card-header">
        <div>
          <p class="eyebrow">${E(D(`reportArchive`))}</p>
          <h2>${E(D(`savedReports`))}</h2>
          <p>${r}</p>
        </div>
      </div>
      ${i}
    </section>

    ${n?zc(n,e):``}
  `)}function Ic(e){let t=Array.isArray(e.report_items)?e.report_items.length:Number(e.itemCount||0),n=O.profile?.companyName||e.companies?.company_name||`Company`,r=O.language===`is`?Qc(e.created_at):Vt(e.created_at),i=O.language===`is`?`${t} tækifæri`:`${t} item${t===1?``:`s`}`;return dt({report:e,title:Uc(e,n),created:r,itemLabel:i,statusLabel:Lc(e.status),hideLabel:O.language===`is`?`Fela yfirlit`:`Hide report`,viewLabel:D(`viewReport`),escapeHtml:E})}function Lc(e){let t=String(e||`draft`);return O.language===`is`?{generated_all_current:`Heildaryfirlit`,generated_new_only:`Ný tækifæri`,draft:`Vistað yfirlit`}[t]||t:{generated_all_current:`All current`,generated_new_only:`New opportunities`,draft:`Saved report`}[t]||t}function Rc(e,t={}){return ft({report:e,options:t,companyName:t.companyName||O.profile?.companyName||`Company`,dateRange:Zc(e.periodStart,e.periodEnd),generatedByLabel:D(`generatedBy`),reportTitleLabel:D(`reportTitle`),closeLabel:D(`closeReport`),escapeHtml:E})}function zc(e,t,n={}){let r=e.period_start||e.created_at?.slice(0,10)||new Date().toISOString().slice(0,10),i=e.period_end||e.created_at?.slice(0,10)||new Date().toISOString().slice(0,10),a=t.companyName||e.companies?.company_name||`Company`,o=Wc(e),s=o.length?Gc(o):Bc(e),c=o.length?Nl(e,a,o):Hc(e.text_content||``);return Rc({title:Uc(e,a),periodStart:r,periodEnd:i,htmlContent:s,textContent:c},{companyName:a,closeButton:n.closeButton===void 0?!0:n.closeButton,includeTextArea:n.includeTextArea===void 0?!1:n.includeTextArea,id:n.id||``})}function Bc(e){if(e.html_content&&e.html_content.includes(`report-cover`))return Vc(qc(e.html_content));let t=e.period_start||e.created_at?.slice(0,10)||new Date().toISOString().slice(0,10),n=e.period_end||e.created_at?.slice(0,10)||new Date().toISOString().slice(0,10),r=e.html_content?Vc(qc(e.html_content)):`<pre>${E(e.text_content||`Ekkert efni var vistað fyrir þetta yfirlit.`)}</pre>`;return`
    <div class="report-cover">
      <div class="report-kicker">Útbúið af VerkRadar</div>
      <p class="eyebrow">Vistað yfirlit</p>
      <h2>${E(e.title||`Vistað yfirlit`)}</h2>
      <p>${E(Zc(t,n))}</p>
      <p>${E(e.summary||`Þetta eldra vistaða yfirlit er birt í nýju skýrslusniði.`)}</p>
    </div>
    <div class="report-legacy-content">
      ${r}
    </div>
  `}function Vc(e){return yt(e,O.language)}function Hc(e){return yt(e,O.language)}function Uc(e,t){return D(`reportForCompany`,{company:String(t||e?.companies?.company_name||`Company`).trim()})}function Wc(e){return(Array.isArray(e?.report_items)?[...e.report_items]:[]).sort((e,t)=>Number(e.sort_order||0)-Number(t.sort_order||0)).map(e=>{if(!e.opportunities)return null;let t=_r(e.opportunities);return{...t,matchScore:Number(e.match_score||0),matchLabel:Aa(Number(e.match_score||0)),matchReasons:Ur(t,Array.isArray(e.match_reasons)?e.match_reasons:[]),risks:Array.isArray(e.risks)&&e.risks.length?e.risks:Array.isArray(t.rawPayload?.risks)?t.rawPayload.risks:[],nextSteps:[]}}).filter(Boolean)}function Gc(e){let t=Kc(e);return`
    ${t.confirmed.length?yl(x(`openActiveTitle`,O.language),x(`openActiveDescription`,O.language),t.confirmed):``}
    ${t.possible.length?yl(x(`possibleTitle`,O.language),x(`possibleDescription`,O.language),t.possible):``}
    ${t.early.length?yl(x(`earlyTitle`,O.language),x(`earlyDescription`,O.language),t.early):``}
    <p class="report-footer-note">${E(D(`reportFooter`))}</p>
  `}function Kc(e){let t={confirmed:[],possible:[],early:[],review:[]};return e.forEach(e=>{let n=el(e);n===`confirmed`?t.confirmed.push(e):n===`possible`?t.possible.push(e):n===`early`?t.early.push(e):n!==`excluded`&&t.review.push(e)}),t}function qc(e){let t=new DOMParser().parseFromString(String(e||``),`text/html`),n=new Set([`A`,`ARTICLE`,`DIV`,`EM`,`H2`,`H3`,`H4`,`H5`,`LI`,`OL`,`P`,`PRE`,`SECTION`,`SPAN`,`STRONG`,`UL`]),r=new Set([`aria-hidden`,`class`,`href`,`rel`,`target`]);return t.body.querySelectorAll(`*`).forEach(e=>{if(!n.has(e.tagName)){e.replaceWith(...Array.from(e.childNodes));return}Array.from(e.attributes).forEach(t=>{if(!r.has(t.name)){e.removeAttribute(t.name);return}if(t.name===`href`){let n=qt(t.value);n?e.setAttribute(`href`,n):e.removeAttribute(`href`)}})}),t.body.innerHTML}function Jc(e=`all_current`,t=new Set){return Yc({mode:e,previouslyReportedIds:t})}function Yc({mode:e=`all_current`,previouslyReportedIds:t=new Set}={}){let n=ja().filter(e=>e.matchScore>=50).filter(e=>tl(e,`all_current`));return Bt(e===`new_only`?n.filter(e=>!t.has(e.id)):n).slice(0,8)}function Xc(e,t){let n=new Date,r=n.toISOString().slice(0,10),i=new Date(n);i.setDate(i.getDate()-7);let a=i.toISOString().slice(0,10),o=D(`reportForCompany`,{company:e.companyName}),s=$c(t),c=s.confirmed.length+s.possible.length+s.early.length,l=O.language===`is`?`${c} viðeigandi útboðs- eða verðfyrirspurnaratriði fundust fyrir ${e.companyName}.`:`${c} relevant tender/quote-request ${c===1?`item`:`items`} found for ${e.companyName}.`;return{title:o,periodStart:a,periodEnd:r,summary:l,textContent:Ml(e,t),htmlContent:`
    <div class="report-cover">
      <div class="report-kicker">${E(D(`generatedBy`))}</div>
      <p class="eyebrow">${E(D(`reportTitle`))}</p>
      <h2>${E(o)}</h2>
      <p>${E(Zc(a,r))}</p>
      <p>${E(l)} ${t[0]?E(O.language===`is`?`Sterkasta sýnilega atriðið er ${t[0].title}.`:`The strongest visible item is ${t[0].title}.`):E(O.language===`is`?`Engin skýr útboð eða verðfyrirspurnir fundust fyrir þetta tímabil.`:`No strict report-ready tenders or quote requests were found for this period.`)}</p>
    </div>

    <div class="report-summary-grid">
      ${vl(x(`openActiveTitle`,O.language),s.confirmed.length)}
      ${vl(x(`possibleTitle`,O.language),s.possible.length)}
    </div>

    ${yl(x(`openActiveTitle`,O.language),x(`openActiveDescription`,O.language),s.confirmed)}
    ${s.possible.length?yl(x(`possibleTitle`,O.language),x(`possibleDescription`,O.language),s.possible):``}
    ${s.early.length?yl(x(`earlyTitle`,O.language),x(`earlyDescription`,O.language),s.early):``}

    <p class="report-footer-note">${E(D(`reportFooter`))}</p>
  `}}function Zc(e,t){return`${Qc(e)} – ${Qc(t)}`}function Qc(e){if(!e)return`Engin dagsetning`;let t=new Date(`${String(e).slice(0,10)}T00:00:00`);return Number.isNaN(t.getTime())?String(e):O.language===`en`?new Intl.DateTimeFormat(`en-GB`,{year:`numeric`,month:`short`,day:`2-digit`}).format(t):`${t.getDate()}. ${[`janúar`,`febrúar`,`mars`,`apríl`,`maí`,`júní`,`júlí`,`ágúst`,`september`,`október`,`nóvember`,`desember`][t.getMonth()]} ${t.getFullYear()}`}function $c(e){let t={confirmed:[],possible:[],early:[]},n=new Set,r=Bt(e);(r.length?r:al(e)).forEach(e=>{let r=el(e);r!==`excluded`&&(n.has(e.id)||(n.add(e.id),r===`confirmed`?t.confirmed.push(e):r===`possible`?t.possible.push(e):r===`early`&&t.early.push(e)))});let i=8;for(let e of[`confirmed`,`possible`,`early`]){let n=t[e].slice(0,i);t[e]=n,i=Math.max(0,i-n.length)}return t}function el(e){let t=Rt(e);if(t!==`excluded`||e?.aiReviewFit||e?.ai_review_fit)return t;if(!nl(e))return`excluded`;if(zt(e))return`confirmed`;let n=L(e);if(n===`confirmed_tender`)return`confirmed`;if(n===`early_opportunity`)return`early`;let r=I(e.qualityStatus,e);return r===`confirmed_tender`?`confirmed`:r===`early_signal`?`early`:`excluded`}function tl(e,t=`all_current`){return nl(e)?t===`new_only`?Fa(e)===`auto_approved`&&e.alertEligible!==!1:Fa(e)!==`hidden`:!1}function nl(e){if(!e||Tr(e)||Fa(e)===`hidden`||!F(e)||rl(e)||sl(e)||dl(e)||fl(e)||zr(e.title||``)&&!cl(e))return!1;let t=L(e);if(t===`confirmed_tender`)return cl(e)||ul(e);if(t===`early_opportunity`)return ll(e);let n=I(e.qualityStatus,e);return n===`confirmed_tender`?cl(e)||ul(e):n===`early_signal`?ll(e):!1}function rl(e){let t=e?.rawPayload||{},n=String(t.admin_report_status||``).toLowerCase();if(n===`include`)return!1;if(t.hidden_from_reports===!0||[`hidden`,`hide`,`noise`,`deleted`].includes(n)||il(e)||Ar(e))return!0;let r=L(e);return r===`news_context`||r===`not_opportunity`}function il(e={}){let t=e.rawPayload||{},n=String(t.canonical_opportunity_id||``);return t.is_duplicate===!0||!!t.duplicate_of||!!n&&!!e.id&&n!==String(e.id)}function al(e){return[...e].sort((e,t)=>ol(e)-ol(t)||Number(ul(t))-Number(ul(e))||Number(cl(t))-Number(cl(e))||t.matchScore-e.matchScore||S(e.deadline)-S(t.deadline))}function ol(e){if(sl(e))return 99;let t=L(e);return t===`confirmed_tender`?0:t===`early_opportunity`?1:10}function sl(e){let t=R(e)?Dr(e):String(e?.rawPayload?.tender_state||``).toLowerCase();return[`tender_awarded`,`awarded`,`already_tendered`].includes(t)?!0:B(z(e),[`lægstbjóðandi`,`laegstbjodandi`,`samningur gerður`,`samningur gerdur`,`samningur var`,`samið var`,`samid var`,`útboð hefur farið fram`,`utbod hefur farid fram`,`útboð var auglýst`,`utbod var auglyst`])}function cl(e){return B(z(e),[`útboð`,`utbod`,`útboðsauglýsing`,`utbodsauglysing`,`tilboð`,`tilbod`,`tilboðum`,`tilbodum`,`óskað eftir tilboðum`,`oskad eftir tilbodum`,`verðfyrirspurn`,`verdfyrirspurn`,`forval`,`skilafrestur`,`útboðsgögn`,`utbodsgogn`,`quote request`,`request for quote`,`tender`,`procurement`])}function ll(e){return B(z(e),[`senn í útboð`,`senn i utbod`,`áætlað útboð`,`aaetlad utbod`,`áætlað er að bjóða út`,`aaetlad er ad bjoda ut`,`fyrirhugað útboð`,`fyrirhugad utbod`])}function ul(e){let t=T(e?.source||``);return[`rikiskaup`,`ríkiskaup`,`utbodsvefur`,`útboðsvefur`,`ted`,`tenders electronic daily`,`procurement`,`tender portal`].some(e=>t.includes(T(e)))}function dl(e){return ml(O.profile||{},e)}function fl(e){return pl(O.profile||{},e)}function pl(e,t){return Fa(t)!==`needs_review`||!gl([...Array.isArray(t?.safetyReasons)?t.safetyReasons:[],...Array.isArray(t?.risks)?t.risks:[],...Array.isArray(t?.rawPayload?.safety_reasons)?t.rawPayload.safety_reasons:[],...Array.isArray(t?.rawPayload?.risks)?t.rawPayload.risks:[]].filter(Boolean).join(` `))?!1:!hl(e)}function ml(e,t){let n=z(t),r=B(n,[`for og verkhönnun`,`for og verkhonnun`,`verkhönnun`,`verkhonnun`,`forhönnun`,`forhonnun`,`verkfræðiráðgjöf`,`verkfraediradgjof`,`ráðgjöf`,`radgjof`,`umsjón`,`umsjon`,`verkefnastjórn`,`verkefnastjorn`,`útboðsgögn hönnun`,`utbodsgogn honnun`]),i=B(n,[`hönnun`,`honnun`]),a=B(n,[`lóðarframkvæmdir`,`lodarframkvaemdir`,`gatnagerð`,`gatnagerd`,`stígagerð`,`stigagerd`,`lagnir`,`regnvatnslagnir`,`jarðvinna`,`jardvinna`,`jarðvegsskipti`,`jardvegsskipti`,`fyllingar`,`grjóthleðsla`,`grjothledsla`,`malbikun`,`hellulögn`,`hellulogn`,`kantsteinar`,`landmótun`,`landmotun`,`yfirborðsfrágangur`,`yfirbordsfragangur`,`bílastæði`,`bilastaedi`]),o=B(n,[`eftirlit`,`umsjón`,`umsjon`,`verkefnastjórn`,`verkefnastjorn`])&&!a;return!r&&!(i&&!a)&&!o?!1:!hl(e)}function hl(e={}){return B([e.industry,...Array.isArray(e.services)?e.services:[],...Array.isArray(e.includeKeywords)?e.includeKeywords:[]].filter(Boolean).join(` `),[`hönnun`,`honnun`,`ráðgjöf`,`radgjof`,`verkfræðiráðgjöf`,`verkfraediradgjof`,`verkfræði`,`verkfraedi`,`eftirlit`,`verkefnastjórnun`,`verkefnastjornun`,`útboðsgögn`,`utbodsgogn`,`engineering`,`design`,`consulting`,`project management`,`supervision`])}function gl(e){return B(String(e||``),[`hönnun`,`honnun`,`ráðgjöf`,`radgjof`,`verkfræðiráðgjöf`,`verkfraediradgjof`,`eftirlit`,`umsjón`,`umsjon`,`verkefnastjórn`,`verkefnastjorn`,`design`,`consulting`,`supervision`,`inspection`,`project management`])}function _l(e){if(!e)return!1;let t=e.rawPayload||{};if(String(t.admin_report_status||``).toLowerCase()===`include`)return!0;if(rl(e))return!1;let n=String(t.tender_state||``).toLowerCase();return!([`tender_awarded`,`awarded`,`already_tendered`].includes(n)||Ar(e)||zr(e.title||``)&&!kr(z(e)))}function vl(e,t){return pt({label:e,value:t,escapeHtml:E})}function yl(e,t,n){return mt({title:e,description:t,opportunities:n,emptyText:O.language===`is`?`Engin atriði í þessum hluta.`:`No items in this section.`,renderOpportunityItem:bl,escapeHtml:E})}function bl(e){let t=!!e.estimatedValue,n={...e,matchReasons:Et(e.matchReasons,O.language)},r=jl(e).map(e=>Dt(e,O.language)).filter(Boolean),i=e.deadline?Qc(e.deadline):D(`notFound`);return ht({opp:n,valueText:t?X(e.estimatedValue):D(`notListed`),deadlineText:i,sourceUrl:qt(e.url),risks:r,fallbackReason:O.language===`is`?`Passar við fyrirtækjaprófílinn.`:`Matches your company profile.`,qualityBadgeHtml:xl(n),matchBadgeClass:fo(e.matchLabel),matchLabel:Ct(e,O.language),statusText:St(O.language),buyerLabel:D(`buyer`),buyerValue:Tl(e),sourceLabel:D(`source`),sourceValue:wl(`source`,e.source),areaLabel:D(`area`),areaValue:El(e),deadlineLabel:D(`deadline`),valueLabel:D(`estimatedValue`),whyLabel:D(`whyThisMatters`),risksLabel:D(`risksToCheck`),openSourceLabel:D(`openSource`),sourceMissingLabel:D(`sourceLinkMissing`),formatReason:kl,formatRisk:$,escapeHtml:E})}function xl(e){return gt({status:`verify`,label:Tt(e,O.language),escapeHtml:E})}function Sl(e){return Yt(e,D)}function Cl(e){return Xt(e,D)}function wl(e,t){return Zt(e,t,D)}function Tl(e){let t=e?.source||e?.rawPayload?.source_name||``;return wl(`buyer`,en(e?.buyer,t,e?.rawPayload||{}))}function El(e){return tn(e?.source||e?.rawPayload?.source_name||``)||wl(`location`,e?.location)}function Dl(e,t){return rn(e,t,{language:O.language,translate:D})}function Ol(e){return nn(e,O.language,D)}function kl(e){return Et([an(e,{language:O.language,translate:D})],O.language)[0]||``}function $(e){return Dt(on(e,O.language),O.language)}function Al(e){return sn(e,O.language)}function jl(e){let t=Array.isArray(e.risks)&&e.risks.length?[...e.risks]:[`Open the source page and confirm mandatory requirements.`];return e.deadline||t.unshift(oo(e)),e.estimatedValue||t.push(`Estimated value is not listed in the imported data.`),I(e.qualityStatus,e)===`needs_review`&&t.push(R(e)?`Extracted project signal — verify tender timing in the source article.`:`Imported from broad feed — verify that this is a real tender or business opportunity.`),[...new Set(t.map(e=>String(e||``).trim()).filter(Boolean))]}function Ml(e,t){let n=$c(t),r=[...n.confirmed,...n.possible,...n.early];return`${D(`reportForCompany`,{company:e.companyName})}
${O.language===`is`?`Tímabil`:`Date range`}: ${Zc(new Date(Date.now()-10080*60*1e3).toISOString().slice(0,10),new Date().toISOString().slice(0,10))}

${O.language===`is`?`Samantekt`:`Summary`}:
- ${x(`openActiveTitle`,O.language)}: ${n.confirmed.length}
- ${x(`possibleTitle`,O.language)}: ${n.possible.length}
- ${x(`earlyTitle`,O.language)}: ${n.early.length}

${r.length?r.map((e,t)=>`${t+1}. ${e.title}
${O.language===`is`?`Staða`:`Status`}: ${wt(e,O.language)}
${D(`buyer`)}: ${Tl(e)}
${D(`source`)}: ${wl(`source`,e.source)}
${D(`area`)}: ${El(e)}
${D(`deadline`)}: ${ao(e)}
${D(`estimatedValue`)}: ${e.estimatedValue?X(e.estimatedValue):D(`notListed`)}
${D(`whyThisMatters`)}:
${Et(e.matchReasons.length?e.matchReasons:[`Matched to your company profile.`],O.language).map(e=>`- ${e}`).join(`
`)}
${D(`risksToCheck`)}:
${jl(e).map(e=>`- ${Dt($(e),O.language)}`).join(`
`)}
${O.language===`is`?`Næsta skref`:`Next step`}:
${e.url?`${D(`openSource`)}: ${e.url}`:O.language===`is`?`Finnið og staðfestið upprunalega heimild áður en brugðist er við.`:`Find and verify the original source page before acting.`}
`).join(`
`):O.language===`is`?`Engin skýr útboð eða verðfyrirspurnir fundust fyrir þetta tímabil.`:`No report-ready matches were found for this period.`}

VerkRadar`}function Nl(e,t,n){let r=e.period_start||e.created_at?.slice(0,10)||new Date().toISOString().slice(0,10),i=e.period_end||e.created_at?.slice(0,10)||new Date().toISOString().slice(0,10),a=Uc(e,t),o=Kc(n),s=[...o.confirmed,...o.possible,...o.early,...o.review];return`${a}
${O.language===`is`?`Tímabil`:`Date range`}: ${Zc(r,i)}

${s.length?s.map((e,t)=>`${t+1}. ${e.title}
${O.language===`is`?`Staða`:`Status`}: ${wt(e,O.language)}
${D(`buyer`)}: ${Tl(e)}
${D(`source`)}: ${wl(`source`,e.source)}
${D(`area`)}: ${El(e)}
${D(`deadline`)}: ${ao(e)}
${D(`estimatedValue`)}: ${e.estimatedValue?X(e.estimatedValue):D(`notListed`)}
${D(`whyThisMatters`)}:
${Et(e.matchReasons.length?e.matchReasons:[`Matched to your company profile.`],O.language).map(e=>`- ${e}`).join(`
`)}
${D(`risksToCheck`)}:
${jl(e).map(e=>`- ${Dt($(e),O.language)}`).join(`
`)}
${e.url?`${D(`openSource`)}: ${e.url}`:``}
`).join(`
`):O.language===`is`?`Engin atriði eru vistuð í þessu yfirliti.`:`No items are saved in this report.`}

${D(`reportFooter`)}`}async function Pl(){let e=Ml(O.profile||mn(),Jc());try{await navigator.clipboard.writeText(e),U(`Report copied`,`success`)}catch(e){console.error(`Failed to copy report:`,e),U(`Could not copy report`,`error`)}}function Fl(e=`report-preview`,t=``){let n=document.getElementById(e);if(!n){U(`No report available to export`,`error`);return}let r=O.profile||mn(),i=n.cloneNode(!0);i.classList.add(`pdf-compact-report`),i.querySelectorAll(`textarea, .report-close-btn`).forEach(e=>e.remove());let a=i.querySelector(`.report-meta-bar`);if(a){let e=a.querySelector(`div:first-child strong`)?.textContent?.trim()||D(`reportForCompany`,{company:t||r.companyName||`Company`}),n=a.querySelector(`div:last-child span`)?.textContent?.trim()||t||r.companyName||`Company`,i=a.querySelector(`div:last-child strong`)?.textContent?.trim()||``,o=document.querySelector(`.brand-logo`)?.src||document.querySelector(`link[rel="icon"]`)?.href||``;a.innerHTML=``;let s=document.createElement(`div`);s.className=`pdf-report-header-text`;let c=document.createElement(`span`);c.textContent=D(`generatedBy`);let l=document.createElement(`strong`);l.textContent=e||D(`reportForCompany`,{company:n});let u=document.createElement(`em`);if(u.textContent=i,s.append(c,l,u),a.appendChild(s),o){let e=document.createElement(`img`);e.className=`pdf-report-logo`,e.src=o,e.alt=`VerkRadar`,a.appendChild(e)}}let o=i.querySelector(`.report-summary-grid`);o&&o.remove();let s=n.querySelector(`.report-meta-bar div:last-child strong`)?.textContent||new Date().toISOString().slice(0,10),c=Ll(t||r.companyName||`company`,s),l=Array.from(document.querySelectorAll(`link[rel="stylesheet"]`)).map(e=>`<link rel="stylesheet" href="${E(e.href)}">`).join(``),u=window.open(``,`_blank`,`width=1100,height=900`);if(!u){U(`Allow popups to download the report PDF`,`error`);return}u.document.open(),u.document.write(`<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${E(c)}</title>
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
</html>`),u.document.close()}function Il(){Fl(`admin-report-preview`,(O.selectedAdminReport?.id===O.selectedAdminReportId?O.selectedAdminReport:(O.adminReports||[]).find(e=>e.id===O.selectedAdminReportId))?.companies?.company_name||`Company`)}function Ll(e,t){return`VerkRadar-report-${Rl(e)||`company`}-${Rl(String(t||``).replace(/\s+to\s+/i,`-`))||new Date().toISOString().slice(0,10)}.pdf`}function Rl(e){return String(e||``).normalize(`NFD`).replace(/[\u0300-\u036f]/g,``).replace(/[^a-z0-9]+/gi,`-`).replace(/^-+|-+$/g,``).toLowerCase()}function zl(){return Q(tt({t:D,escapeHtml:E,trialHref:`/signup`}))}function Bl(){return O.user?O.profileLoading&&!O.profile&&!O.profileDraft?Q(`
      <section class="empty-state">
        <div class="loader-mark" aria-label="${E(O.language===`is`?`Hleð fyrirtækjaprófíl`:`Loading company profile`)}"></div>
        <h1>${E(O.language===`is`?`Hleð fyrirtækjaprófíl...`:`Loading company profile...`)}</h1>
        <p>${E(O.language===`is`?`Sæki vistaðan fyrirtækjaprófíl.`:`Checking your saved company profile.`)}</p>
        <button class="btn btn-secondary" type="button" data-action="retry-settings-profile">${E(O.language===`is`?`Reyna aftur`:`Retry`)}</button>
      </section>
    `):O.profileLoadError&&!O.profile&&!O.profileDraft?Q(`
      <section class="empty-state">
        <h1>${E(O.language===`is`?`Gat ekki hlaðið stillingum`:`Could not load Settings`)}</h1>
        <p>${E(O.profileLoadError)}</p>
        <button class="btn btn-primary" type="button" data-action="retry-settings-profile">${E(O.language===`is`?`Reyna aftur`:`Retry`)}</button>
      </section>
    `):!O.profile&&!O.profileDraft?Mo(D(`setupCompanyFirst`),O.language===`is`?`Stillingar eru tiltækar eftir að fyrirtækið hefur verið sett upp.`:`Settings are available after you set up your company.`):Q(_t({t:D,escapeHtml:E,language:O.language,profileDraftDirty:O.profileDraftDirty,profileLoadError:O.profileLoadError,showDemoReset:Vl(),profileFormHtml:ks()})):V()}function Vl(){return!!(O.isAdmin||[`localhost`,`127.0.0.1`,``].includes(window.location.hostname))}bi(),M();