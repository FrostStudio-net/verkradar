(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={profile:`verkradar_profile`,saved:`verkradar_saved_opportunities`,ignored:`verkradar_ignored_opportunities`,language:`verkradar_language`,selectedPlan:`verkradar_selected_plan`},t={is:{navDashboard:`Mælaborð`,navReport:`Yfirlit`,navPricing:`Verðskrá`,navSettings:`Stillingar`,navHowItWorks:`Hvernig virkar þetta`,navSampleReport:`Sýnishorn`,login:`Innskráning`,logout:`Skrá út`,getStarted:`Byrja`,setupCompany:`Setja upp fyrirtæki`,createProfile:`Stofna prófíl`,companyProfile:`Fyrirtækjaprófíll`,noCompanyProfile:`Ekkert fyrirtæki`,openMenu:`Opna valmynd`,closeMenu:`Loka valmynd`,privacyPolicy:`Persónuvernd`,termsOfService:`Skilmálar`,dataSources:`Gagnaheimildir`,cookies:`Vafrakökur`,security:`Öryggi`,contact:`Hafa samband`,footerText:`Vöktun útboða og viðskiptatækifæra fyrir fyrirtæki. VerkRadar hjálpar ykkur að finna og yfirfara opinber tækifæri, en frumgögn eru alltaf endanleg heimild.`,loadingLabel:`Hleð VerkRadar`,heroEyebrow:`Útboðsgreind fyrir verktaka og þjónustufyrirtæki`,heroTitle:`Finnið verðmæt útboð áður en skilafresturinn rennur út.`,heroText:`VerkRadar vaktar opinberar heimildir og skilar stuttu yfirliti yfir verkefni sem passa við ykkar verkflokka og svæði.`,createFreeDemoProfile:`Fá ókeypis prufu-yfirlit`,viewSampleReport:`Skoða sýnishorn`,proofStrong:`Fyrir verktaka, iðnfyrirtæki og þjónustuaðila.`,proofText:`Vöktun á opinberum heimildum, sveitarfélögum og útboðsvefjum - sett fram sem forgangsraðað yfirlit.`,bestOpenMatch:`Stutt yfirlit`,tender:`Útboð`,deadlineRisk:`Rennur út fljótlega`,daysLeft:`{count} dagar eftir`,problemEyebrow:`Vandinn`,problemTitle:`Útboð tapast oft áður en tilboðsgerðin byrjar.`,problemOneTitle:`Útboð birtast á mörgum mismunandi stöðum.`,problemOneText:`Sveitarfélög, stofnanir og útboðsvefir birta tækifæri á ólíkum síðum og í ólíkum sniðum.`,problemTwoTitle:`Skilafrestir geta verið stuttir.`,problemTwoText:`Það tekur tíma að finna hvað passar við ykkar verkflokka, svæði og stærð verkefna.`,targetEyebrow:`Fyrir hverja?`,targetTitle:`Byggt fyrir íslensk fyrirtæki sem þurfa að finna rétt verkefni fyrr.`,targetText:`VerkRadar hentar fyrirtækjum sem vilja vakta útboð, verðfyrirspurnir og verkefnavísbendingar án þess að opna sömu vefi handvirkt á hverjum degi.`,solutionEyebrow:`Lausnin`,solutionTitle:`Eitt skýrt yfirlit í stað dreifðrar leitar.`,solutionText:`VerkRadar breytir útboðshávaða í forgangsraðaðan lista yfir tækifæri sem fyrirtækið ætti að skoða.`,createProfileStep:`1. Stofnið prófíl`,createProfileStepText:`Segið VerkRadar hvaða þjónustu, svæði, lykilorð og verkefnastærðir henta ykkur.`,matchProjectsStep:`2. Samsvara verkefnum`,matchProjectsStepText:`Kerfið metur hvert tækifæri gagnvart fyrirtækjaprófílnum.`,getReportStep:`3. Fáið yfirlit`,getReportStepText:`Fáið skýrt yfirlit með frestum, ástæðum samsvörunar og næstu skrefum.`,sampleReportEyebrow:`Sýnishorn`,sampleReportTitle:`Stuttlisti sem sýnir hvað er þess virði að skoða.`,sampleReportText:`Sýnishornið sýnir hvernig VerkRadar raðar útboðum og verkefnum eftir þjónustu, svæði, fresti og ástæðum samsvörunar.`,sourceDisclaimer:`VerkRadar hjálpar til við að forgangsraða tækifærum. Upprunaleg útboðsgögn eru alltaf endanleg heimild.`,pricingEyebrow:`VERÐSKRÁ`,pricingHeadline:`Verðskrá sem hentar öllum stærðum`,pricingSubtitle:`Byrjið með skýru yfirliti og bætið við sjálfvirkni eftir þörfum.`,pricingStarter:`Grunnur`,pricingGrowth:`Vöxtur`,pricingPro:`Sérsniðið`,pricingMonth:`/mán.`,pricingBadge:`Hentar flestum fyrirtækjum`,pricingCta:`Fá prufuaðgang`,pricingTrialNoCard:`Engin greiðslukort krafist í prufu.`,pricingWeeklyReport:`Vikulegt yfirlit`,pricingFiveMatches:`Allt að 5 samsvaranir á viku`,pricingBasicMatching:`Grunnsamsvörun`,pricingDeadlineReminders:`Áminningar um skilafresti`,pricingOneProfile:`1 fyrirtækjaprófíll`,pricingEverythingStarter:`Allt í Grunni`,pricingMoreSources:`Fleiri heimildir`,pricingSummaries:`Stutt samantekt á tækifærum`,pricingLabels:`Sterk/góð/möguleg samsvörun`,pricingSaved:`Vistuð tækifæri`,pricingArchive:`Yfirlitssafn`,pricingEverythingGrowth:`Allt í Vexti`,pricingDocumentSummaries:`Samantektir útboðsgagna`,pricingRequirements:`Gátlisti fyrir kröfur`,pricingRiskWarnings:`Áhættuvísbendingar`,pricingBidChecklist:`Gátlisti fyrir tilboðsgerð`,pricingPrioritySupport:`Forgangsþjónusta`,tryDemoTitle:`Prófið sýnimælaborðið.`,tryDemoText:`Hlaðið sýnifyrirtæki og sjáið hvernig samsvörunin virkar.`,loadDemoCompany:`Hlaða sýnifyrirtæki`,authLoginTitle:`Skrá inn í VerkRadar`,authLoginSubtitle:`Fáið aðgang að mælaborði, vistuðum tækifærum og vikuyfirlitum.`,email:`Netfang`,password:`Lykilorð`,forgotPassword:`Gleymt lykilorð?`,loggingIn:`Skrái inn...`,newToVerkRadar:`Ný hjá VerkRadar?`,createAccount:`Stofna aðgang`,createAccountTitle:`Stofna VerkRadar aðgang`,createAccountSubtitle:`Byrjið á að stofna aðgang. Síðan stofnið þið fyrirtækjaprófíl.`,authRequiredTitle:`Skráðu þig inn til að halda áfram`,authRequiredText:`Þessi síða er aðgengileg eftir innskráningu.`,alreadyLoggedInTitle:`Þú ert þegar skráð(ur) inn`,alreadyLoggedInText:`Beini þér á næsta skref.`,signupCreatedConfirm:`Aðgangur stofnaður. Athugaðu tölvupóstinn þinn til að staðfesta aðganginn.`,signupExistingAccount:`Þetta netfang er þegar með aðgang. Skráðu þig inn eða endurstilltu lykilorð.`,signupNeutralNextSteps:`Ef aðgangur er til fyrir þetta netfang færðu tölvupóst með næstu skrefum. Annars hefur nýr aðgangur verið stofnaður.`,emailOrPasswordIncorrect:`Netfang eða lykilorð er rangt.`,confirmEmailBeforeLogin:`Staðfestu netfangið þitt áður en þú skráir þig inn.`,passwordTooShort:`Lykilorð þarf að vera að minnsta kosti 6 stafir.`,tooManyAttempts:`Of margar tilraunir. Bíddu aðeins og reyndu aftur.`,couldNotCreateAccount:`Gat ekki stofnað aðgang. Athugaðu netfang og lykilorð.`,couldNotLogin:`Gat ekki skráð þig inn. Reyndu aftur.`,creating:`Stofna...`,alreadyHaveAccount:`Ertu þegar með aðgang?`,passwordReset:`Endurstilla lykilorð`,resetPasswordTitle:`Endurstilla lykilorð`,resetPasswordSubtitle:`Sláið inn netfang og VerkRadar sendir öruggan hlekk ef aðgangur er til.`,sending:`Sendi...`,sendResetLink:`Senda hlekk`,rememberedPassword:`Manstu lykilorðið?`,backToLogin:`Til baka í innskráningu`,newPassword:`Nýtt lykilorð`,chooseNewPassword:`Veldu nýtt lykilorð`,resetPasswordHelp:`Settu nýtt lykilorð fyrir VerkRadar aðganginn. Ef hlekkurinn er útrunninn skaltu biðja um nýjan.`,confirmNewPassword:`Staðfesta nýtt lykilorð`,updating:`Uppfæri...`,updatePassword:`Uppfæra lykilorð`,needNewLink:`Þarftu nýjan hlekk?`,sendAnotherResetLink:`Senda annan hlekk`,onboarding:`UPPSETNING`,onboardingTitle:`Settu upp fyrirtækið`,onboardingText:`Segðu okkur hvað fyrirtækið gerir svo VerkRadar geti fundið viðeigandi tækifæri.`,companyBasics:`1. Grunnupplýsingar`,companyName:`Fyrirtækisnafn`,kennitala:`Kennitala`,contactEmail:`Tengiliðanetfang`,billingEmail:`Netfang fyrir reikninga`,contactName:`Nafn tengiliðar`,phone:`Sími`,address:`Heimilisfang`,website:`Vefsíða`,industry:`Atvinnugrein`,selectIndustry:`Veldu atvinnugrein`,selectedPlan:`Valin áskrift`,plan_basic:`Grunnur`,plan_pro:`Pro`,plan_priority:`Forgangur`,servicesAndKeywords:`2. Þjónustur og leitarorð`,servicesHint:`Bætið við þjónustu sem þið bjóðið raunverulega upp á. Veldu mikilvægustu atriðin fyrst.`,servicesLabel:`Þjónustur`,servicesHelper:`Skráið þjónustuna sem fyrirtækið selur. Nákvæmari þjónusta gefur betri samsvaranir.`,extraWords:`Leitarorð`,includeKeywordsHelper:`Notið orð sem birtast oft í tækifærum sem þið viljið fá.`,excludeWords:`Orð sem ættu að lækka eða fjarlægja slæmar samsvaranir.`,excludeKeywordsHelper:`Orð sem ættu að lækka eða fjarlægja slæmar samsvaranir.`,suggestedServicesFor:`Tillögur að þjónustu fyrir {industry}`,suggestedKeywordsFor:`Tillögur að leitarorðum fyrir {industry}`,selectIndustryForServices:`Veljið atvinnugrein til að sjá þjónustutillögur`,selectIndustryForKeywords:`Veljið atvinnugrein til að sjá leitarorðatillögur`,locationsTitle:`3. Svæði`,locationsHint:`Notið Allt landið fyrir landsdekkandi útboð. Notið ferðastillingar ef þið getið boðið utan heimasvæðis fyrir rétt verkefni.`,baseLocation:`Heimasvæði`,baseLocationPlaceholder:`Dæmi: Austurland`,serviceAreas:`Þjónustusvæði, aðskilin með kommu`,serviceAreasPlaceholder:`Dæmi: Austurland, Allt landið`,travelScope:`Ferðir og umfang`,willingToTravel:`Tilbúin að ferðast fyrir rétt verkefni`,includeNational:`Sýna landsdekkandi tækifæri`,includeRemote:`Sýna fjarvinnu / netverkefni`,minimumTravelValue:`Lágmarksverðmæti fyrir ferðalög`,projectSize:`4. Stillingar`,minimumValue:`Lágmarksverðmæti`,maximumValue:`Hámarksverðmæti`,showUnknownValue:`Sýna tækifæri þó verðmæti vanti`,reportPreferences:`Yfirlitsstillingar`,frequency:`Tíðni`,weekly:`Vikulega`,daily:`Daglega`,reportDay:`Dagur yfirlits`,deadlineReminders:`Áminningar um skilafresti`,includeLowConfidence:`Sýna óvissar samsvaranir`,saveProfile:`Vista prófíl`,saving:`Vista...`,saved:`Vistað`,dashboard:`Mælaborð`,welcomeCompany:`Velkomin, {company}`,dashboardIntro:`Forgangsraðaðar tækifærasamsvaranir út frá þjónustu, svæðum og leitarorðum. {refresh}`,matchesLastRefreshed:`Síðast uppfært {time}.`,matchesAutoRefresh:`Samsvaranir uppfærast sjálfkrafa eftir vistun prófíls.`,refreshMatches:`Uppfæra samsvaranir`,refreshing:`Uppfæri...`,viewWeeklyReport:`Skoða yfirlit`,strongMatches:`Sterkar samsvaranir`,closingSoon:`Rennur út fljótlega`,savedLabel:`Vistað`,totalPotentialValue:`Áætlað heildarverðmæti`,searchOpportunities:`Leita í tækifærum...`,savedOnly:`Aðeins vistað`,improveProfile:`Bæta prófíl`,includeNationalOpportunities:`Sýna landsdekkandi tækifæri`,showAllStoredMatches:`Sýna allar samsvaranir`,inspectAllOpportunities:`Skoða öll tækifæri`,details:`Nánar`,save:`Vista`,ignore:`Hunsa`,originalLanguage:`Upprunalegt tungumál`,extractedProject:`Útdregið verkefni`,reportTitle:`Útboðs- og verkefnayfirlit`,setupCompanyFirst:`Settu fyrst upp fyrirtækið`,reportNeedsProfile:`Yfirlitið þarf fyrirtækjaprófíl til að geta fundið viðeigandi tækifæri.`,dashboardNeedsProfile:`Mælaborðið þarf fyrirtækjaprófíl til að reikna viðeigandi samsvaranir.`,weeklyReport:`Yfirlit`,saveReport:`Vista yfirlit`,savingReport:`Vista...`,downloadPdf:`Sækja PDF`,copyReport:`Afrita yfirlit`,reportArchive:`Yfirlitssafn`,savedReports:`Vistuð yfirlit`,loadingSavedReports:`Hleð vistuð yfirlit...`,noSavedReports:`Engin vistuð yfirlit enn.`,viewReport:`Skoða yfirlit`,closeReport:`Loka yfirliti`,generatedBy:`Útbúið af VerkRadar`,reportForCompany:`Útboðs- og verkefnayfirlit fyrir {company}`,openTenders:`Opin útboð / verðfyrirspurnir`,upcomingOpportunities:`Möguleg væntanleg tækifæri`,openTendersDescription:`Skýr útboðs- eða verðfyrirspurnarmerki. Yfirfarið frumgögn áður en brugðist er við.`,upcomingDescription:`Væntanleg útboðs- eða verkefnamerki með skýrum vísbendingum.`,reportFooter:`VerkRadar hjálpar til við að forgangsraða yfirferð opinberra tækifæra. Staðfestið alltaf útboðsgögn, skilafresti, kröfur og hæfi á upprunalegri heimild áður en brugðist er við.`,buyer:`Kaupandi`,source:`Heimild`,description:`Lýsing`,requirements:`Kröfur`,noSpecificRequirements:`Engar sérstakar kröfur skráðar.`,noDescription:`Engin lýsing tiltæk.`,noMatchReasons:`Engar ástæður samsvörunar tiltækar.`,matchReasons:`Ástæður samsvörunar`,opportunityInfo:`Upplýsingar um tækifæri`,extraction:`Útdráttur`,sourceArticle:`Heimildargrein`,parentArticle:`Upprunagrein`,openSourceArticle:`Opna heimildargrein`,extractedRegion:`Útdregið svæði`,projectNumber:`Verknúmer`,tenderState:`Staða útboðs`,quality:`Gæði`,category:`Flokkur`,type:`Tegund`,published:`Birt`,cpv:`CPV`,recommendedNextSteps:`Ráðlögð næstu skref`,noMajorRisks:`Engar stórar áhættur greindar í þessum gögnum.`,openSourceAndConfirm:`Opnið upprunalega heimild og staðfestið hæfi.`,removeFromSaved:`Fjarlægja úr vistuðum`,saveOpportunity:`Vista tækifæri`,markNotRelevant:`Merkja sem ekki viðeigandi`,publicProcurement:`Opinbert útboð`,area:`Svæði`,deadline:`Skilafrestur`,estimatedValue:`Áætlað verðmæti`,notFound:`Fannst ekki`,notListed:`Ekki gefið upp`,unknownBuyer:`Óþekktur kaupandi`,allIceland:`Allt landið`,whyThisMatters:`Af hverju þetta gæti skipt máli`,risksToCheck:`Atriði til að staðfesta`,openSource:`Opna heimild`,sourceLinkMissing:`Heimildartengil vantar`,strongMatch:`Sterk samsvörun`,goodMatch:`Góð samsvörun`,possibleMatch:`Möguleg samsvörun`,weakMatch:`Veik samsvörun`,confirmedTender:`Staðfest útboð`,likelyOpportunity:`Líklegt tækifæri`,earlySignal:`Væntanlegt tækifæri`,needsReview:`Þarfnast staðfestingar`,tenderAwarded:`Útboði lokið / samið`,tenderAlreadyAnnounced:`Útboð þegar auglýst`,upcomingTender:`Væntanlegt útboð`,projectSignal:`Verkefnavísbending`,nationalOpportunity:`Landsdekkandi tækifæri`,localMatch:`Staðbundin samsvörun`,mentionsService:`Nefnir þjónustu ykkar: {value}`,containsKeyword:`Inniheldur leitarorð: {value}`,procurement:`innkaup`},en:{navDashboard:`Dashboard`,navReport:`Report`,navPricing:`Pricing`,navSettings:`Settings`,navHowItWorks:`How it works`,navSampleReport:`Sample report`,login:`Login`,logout:`Logout`,getStarted:`Get started`,setupCompany:`Set up company`,createProfile:`Create profile`,companyProfile:`Company profile`,noCompanyProfile:`No company`,openMenu:`Open menu`,closeMenu:`Close menu`,privacyPolicy:`Privacy`,termsOfService:`Terms`,dataSources:`Data sources`,cookies:`Cookies`,security:`Security`,contact:`Contact`,footerText:`Tender and opportunity monitoring for businesses. VerkRadar helps you find and review public opportunities, but source documents remain the authority.`,loadingLabel:`Loading VerkRadar`,heroEyebrow:`Tender intelligence for working contractors`,heroTitle:`Stop losing valuable jobs to tabs you never opened.`,heroText:`VerkRadar monitors public sources and returns a short project shortlist matched to your trades and service areas.`,createFreeDemoProfile:`Get a free trial report`,viewSampleReport:`View sample report`,proofStrong:`Contractors find relevant opportunities faster.`,proofText:`Top matches often include tenders outside the main databases.`,bestOpenMatch:`Shortlist`,tender:`Tender`,deadlineRisk:`Deadline risk`,daysLeft:`{count} days left`,problemEyebrow:`The problem`,problemTitle:`Opportunities are often lost before bidding starts.`,problemOneTitle:`Deadlines show up after your crew is already booked.`,problemOneText:`A short response window becomes a scramble, or a valuable contract never gets priced.`,problemTwoTitle:`The search takes longer than the go/no-go call.`,problemTwoText:`Owners spend hours opening low-fit tenders instead of seeing value, location, requirements and match reasons in one view.`,targetEyebrow:`Who it is for`,targetTitle:`Built for Icelandic companies that need to find the right jobs earlier.`,targetText:`VerkRadar is for teams that want to monitor tenders, quote requests and project signals without checking the same websites manually every day.`,solutionEyebrow:`The solution`,solutionTitle:`One clear report instead of scattered searching.`,solutionText:`VerkRadar turns tender noise into a ranked list of opportunities your business should actually check.`,createProfileStep:`1. Create profile`,createProfileStepText:`Tell VerkRadar your services, locations, keywords and project size.`,matchProjectsStep:`2. Match projects`,matchProjectsStepText:`The system scores each opportunity against your business profile.`,getReportStep:`3. Get report`,getReportStepText:`Receive a clear weekly report with deadlines and next steps.`,sampleReportEyebrow:`Sample report`,sampleReportTitle:`A shortlist that shows what is worth checking.`,sampleReportText:`Preview how VerkRadar ranks tenders and projects by services, region, deadline and match reasons.`,sourceDisclaimer:`VerkRadar helps prioritize opportunity review. Original tender documents are always the final authority.`,pricingEyebrow:`PRICING`,pricingHeadline:`Pricing built for teams of all sizes`,pricingSubtitle:`Start with a clear report and add automation as needed.`,pricingStarter:`Starter`,pricingGrowth:`Growth`,pricingPro:`Custom`,pricingMonth:`/month`,pricingBadge:`Best for most businesses`,pricingCta:`Get trial access`,pricingTrialNoCard:`No credit card required for the trial.`,pricingWeeklyReport:`Weekly report`,pricingFiveMatches:`Up to 5 matched opportunities/week`,pricingBasicMatching:`Basic matching`,pricingDeadlineReminders:`Deadline reminders`,pricingOneProfile:`1 company profile`,pricingEverythingStarter:`Everything in Starter`,pricingMoreSources:`More sources`,pricingSummaries:`Opportunity summaries`,pricingLabels:`Strong/Good/Possible match labels`,pricingSaved:`Saved opportunities`,pricingArchive:`Report archive`,pricingEverythingGrowth:`Everything in Growth`,pricingDocumentSummaries:`Tender document summaries`,pricingRequirements:`Requirements checklist`,pricingRiskWarnings:`Risk warnings`,pricingBidChecklist:`Bid preparation checklist`,pricingPrioritySupport:`Priority support`,tryDemoTitle:`Try the demo dashboard now.`,tryDemoText:`Load a sample company profile and see how the matching works.`,loadDemoCompany:`Load demo company`,authLoginTitle:`Login to VerkRadar`,authLoginSubtitle:`Access your company dashboard, saved opportunities and weekly reports.`,email:`Email`,password:`Password`,forgotPassword:`Forgot password?`,loggingIn:`Logging in...`,newToVerkRadar:`New to VerkRadar?`,createAccount:`Create account`,createAccountTitle:`Create your VerkRadar account`,createAccountSubtitle:`Start by creating an account. Then you’ll create your company profile.`,authRequiredTitle:`Log in to continue`,authRequiredText:`This page is available after you sign in.`,alreadyLoggedInTitle:`Already logged in`,alreadyLoggedInText:`Redirecting you to the next step.`,signupCreatedConfirm:`Account created. Check your email to confirm your account.`,signupExistingAccount:`This email already has an account. Log in or reset your password.`,signupNeutralNextSteps:`If an account exists for this email, you’ll receive an email with next steps. Otherwise, a new account has been created.`,emailOrPasswordIncorrect:`Email or password is incorrect.`,confirmEmailBeforeLogin:`Please confirm your email before logging in.`,passwordTooShort:`Password must be at least 6 characters.`,tooManyAttempts:`Too many attempts. Please wait a moment and try again.`,couldNotCreateAccount:`Could not create account. Please check your email and password.`,couldNotLogin:`Could not log in. Please try again.`,creating:`Creating...`,alreadyHaveAccount:`Already have an account?`,passwordReset:`Password reset`,resetPasswordTitle:`Reset your password`,resetPasswordSubtitle:`Enter your email and VerkRadar will send a secure reset link if the account exists.`,sending:`Sending...`,sendResetLink:`Send reset link`,rememberedPassword:`Remembered your password?`,backToLogin:`Back to login`,newPassword:`New password`,chooseNewPassword:`Choose a new password`,resetPasswordHelp:`Set a new password for your VerkRadar account. If the link has expired, request a new reset link.`,confirmNewPassword:`Confirm new password`,updating:`Updating...`,updatePassword:`Update password`,needNewLink:`Need a new link?`,sendAnotherResetLink:`Send another reset link`,onboarding:`SETUP`,onboardingTitle:`Set up your company`,onboardingText:`Tell us what your company does so VerkRadar can find relevant opportunities.`,companyBasics:`1. Basic information`,companyName:`Company name`,kennitala:`Kennitala`,contactEmail:`Contact email`,billingEmail:`Billing email`,contactName:`Contact name`,phone:`Phone`,address:`Address`,website:`Website`,industry:`Industry`,selectIndustry:`Select industry`,selectedPlan:`Selected plan`,plan_basic:`Basic`,plan_pro:`Pro`,plan_priority:`Priority`,servicesAndKeywords:`2. Services and keywords`,servicesHint:`Add services you actually provide. Start with the most important ones.`,servicesLabel:`Services`,servicesHelper:`Add the services your company actually sells. More specific services create better matches.`,extraWords:`Keywords`,includeKeywordsHelper:`Use words that often appear in opportunities you want.`,excludeWords:`Words that should lower or remove bad matches.`,excludeKeywordsHelper:`Words that should lower or remove bad matches.`,suggestedServicesFor:`Suggested services for {industry}`,suggestedKeywordsFor:`Suggested keywords for {industry}`,selectIndustryForServices:`Select an industry to see service suggestions`,selectIndustryForKeywords:`Select an industry to see keyword suggestions`,locationsTitle:`3. Locations`,locationsHint:`Use All Iceland for national tenders. Use travel settings when you can bid outside your base area for the right project size.`,baseLocation:`Base location`,baseLocationPlaceholder:`Example: East Iceland`,serviceAreas:`Service areas, comma separated`,serviceAreasPlaceholder:`Example: East Iceland, All Iceland`,travelScope:`Travel and scope`,willingToTravel:`Willing to travel for the right project`,includeNational:`Include national / All Iceland opportunities`,includeRemote:`Include remote / online opportunities`,minimumTravelValue:`Minimum project value for travel`,projectSize:`4. Settings`,minimumValue:`Minimum value`,maximumValue:`Maximum value`,showUnknownValue:`Show opportunities even if value is unknown`,reportPreferences:`Report preferences`,frequency:`Frequency`,weekly:`Weekly`,daily:`Daily`,reportDay:`Report day`,deadlineReminders:`Deadline reminders`,includeLowConfidence:`Include low-confidence matches`,saveProfile:`Save profile`,saving:`Saving...`,saved:`Saved`,dashboard:`Dashboard`,welcomeCompany:`Welcome, {company}`,dashboardIntro:`Ranked project opportunities based on your services, locations and keywords. {refresh}`,matchesLastRefreshed:`Last refreshed {time}.`,matchesAutoRefresh:`Matches refresh automatically after profile saves.`,refreshMatches:`Refresh matches`,refreshing:`Refreshing...`,viewWeeklyReport:`View report`,strongMatches:`Strong matches`,closingSoon:`Closing soon`,savedLabel:`Saved`,totalPotentialValue:`Total potential value`,searchOpportunities:`Search opportunities...`,savedOnly:`Saved only`,improveProfile:`Improve profile`,includeNationalOpportunities:`Include national opportunities`,showAllStoredMatches:`Show all matches`,inspectAllOpportunities:`Inspect all opportunities`,details:`Details`,save:`Save`,ignore:`Ignore`,originalLanguage:`Original language`,extractedProject:`Extracted project`,reportTitle:`Tender and opportunity report`,setupCompanyFirst:`Set up your company first`,reportNeedsProfile:`The report needs a company profile before it can generate relevant opportunity matches.`,dashboardNeedsProfile:`The dashboard needs a company profile so it can calculate relevant opportunity matches.`,weeklyReport:`Report`,saveReport:`Save report`,savingReport:`Saving...`,downloadPdf:`Download PDF`,copyReport:`Copy report`,reportArchive:`Report archive`,savedReports:`Saved reports`,loadingSavedReports:`Loading saved reports...`,noSavedReports:`No saved reports yet.`,viewReport:`View report`,closeReport:`Close report`,generatedBy:`Generated by VerkRadar`,reportForCompany:`Tender and opportunity report for {company}`,openTenders:`Open tenders / quote requests`,upcomingOpportunities:`Possible upcoming opportunities`,openTendersDescription:`Clear procurement intent. Review source documents before acting.`,upcomingDescription:`Upcoming procurement or project signals with clear evidence.`,reportFooter:`VerkRadar helps prioritise public opportunity review. Always check the original source documents, deadlines, requirements and eligibility before acting.`,buyer:`Buyer`,source:`Source`,description:`Description`,requirements:`Requirements`,noSpecificRequirements:`No specific requirements listed.`,noDescription:`No description available.`,noMatchReasons:`No match reasons available.`,matchReasons:`Match reasons`,opportunityInfo:`Opportunity info`,extraction:`Extraction`,sourceArticle:`Source article`,parentArticle:`Parent article`,openSourceArticle:`Open source article`,extractedRegion:`Extracted region`,projectNumber:`Project number`,tenderState:`Tender state`,quality:`Quality`,category:`Category`,type:`Type`,published:`Published`,cpv:`CPV`,recommendedNextSteps:`Recommended next steps`,noMajorRisks:`No major risks detected in this data.`,openSourceAndConfirm:`Open the source notice and confirm eligibility.`,removeFromSaved:`Remove from saved`,saveOpportunity:`Save opportunity`,markNotRelevant:`Mark not relevant`,publicProcurement:`Public procurement`,area:`Location`,deadline:`Deadline`,estimatedValue:`Estimated value`,notFound:`Not found`,notListed:`Not listed`,unknownBuyer:`Unknown buyer`,allIceland:`All Iceland`,whyThisMatters:`Why this matters`,risksToCheck:`Risks / things to check`,openSource:`Open source`,sourceLinkMissing:`Source link missing`,strongMatch:`Strong match`,goodMatch:`Good match`,possibleMatch:`Possible match`,weakMatch:`Weak match`,confirmedTender:`Confirmed tender`,likelyOpportunity:`Likely opportunity`,earlySignal:`Early signal`,needsReview:`Needs review`,tenderAwarded:`Tender awarded`,tenderAlreadyAnnounced:`Tender already announced`,upcomingTender:`Upcoming tender`,projectSignal:`Project signal`,nationalOpportunity:`National opportunity`,localMatch:`Local match`,mentionsService:`Mentions your service: {value}`,containsKeyword:`Contains your keyword: {value}`,procurement:`procurement`}};function n(e){let t=localStorage.getItem(e.language);return t===`en`||t===`is`?t:`is`}function r(e,n,r={}){let i=t[e||`is`]||t.is,a=t.en[n]||t.is[n]||n;return String(i[n]||a).replace(/\{(\w+)\}/g,(e,t)=>r[t]??``)}var i={services:{Electrical:[`raflagnir`,`rafvirki`,`brunakerfi`,`öryggiskerfi`,`lýsing`,`viðhald`,`þjónusta`,`hleðslustöðvar`,`töflusmíði`,`rafmagnseftirlit`],"IT / Web / Software":[`vefsíðugerð`,`vefhönnun`,`hugbúnaðarþróun`,`kerfisþróun`,`vefverslun`,`aðgengi`,`CMS`,`gagnagrunnar`,`viðhald`,`ráðgjöf`],Cleaning:[`Office cleaning`,`School cleaning`,`Facility cleaning`,`Window cleaning`,`Deep cleaning`,`Floor care`,`Municipal cleaning`,`Regular cleaning contracts`],Transport:[`Passenger transport`,`Goods transport`,`Healthcare transport`,`School transport`,`Shuttle services`,`Delivery services`,`Framework transport services`],Construction:[`jarðvinna`,`gatnagerð`,`vegagerð`,`malbikun`,`brúargerð`,`lagnavinna`,`framkvæmdir`,`viðhald`,`steypa`,`húsbyggingar`,`þakvinna`]},includeKeywords:{Electrical:[`rafmagn`,`rafvirki`,`brunakerfi`,`hleðslustöð`,`öryggiskerfi`,`myndavélakerfi`,`lýsing`,`viðhald`,`lagnir`,`neyðarlýsing`]}},a={companyName:`RafFix ehf.`,contactEmail:`owner@raffix.is`,website:`https://raffix.is`,industry:`Electrical`,services:[`electrical installation`,`maintenance`,`fire alarm systems`,`EV chargers`],includeKeywords:[`charging`,`inspection`,`public buildings`],excludeKeywords:[`telecom`,`snow removal`],locations:[`Reykjavík`,`Capital Area`,`Suðurnes`,`Remote / Online`],minProjectValue:5e5,maxProjectValue:3e7,allowUnknownValue:!0,reportFrequency:`weekly`,reportDay:`monday`,deadlineReminders:!0,includeLowConfidence:!1,autoAlertMode:`auto_safe_only`};function o(e=``){return{companyName:``,kennitala:``,contactEmail:e||``,billingEmail:e||``,contactName:``,phone:``,address:``,website:``,industry:``,selectedPlan:`basic`,billingStatus:`trial`,trialStartedAt:``,trialEndsAt:``,services:[],includeKeywords:[],excludeKeywords:[],locations:[],baseLocation:``,serviceAreas:[],willingToTravel:!1,nationalProjects:!1,remoteProjects:!1,minimumProjectValueForTravel:``,minProjectValue:``,maxProjectValue:``,allowUnknownValue:!0,reportFrequency:`weekly`,reportDay:`monday`,deadlineReminders:!0,includeLowConfidence:!1,autoAlertMode:`auto_safe_only`}}function s(e,t=`is`){let n=t===`is`;return{privacy:n?{eyebrow:`Lög og traust`,title:`Persónuvernd`,intro:`Hér er útskýrt á einföldu máli hvaða gögn VerkRadar vistar og hvernig þau eru notuð til að veita þjónustuna.`,sections:[[`Persónuvernd`,[`VerkRadar er vöktunar- og yfirlitskerfi fyrir fyrirtæki. Kerfið notar gögn sem notandi setur inn og opinber gögn um útboð og verkefni til að hjálpa fyrirtækjum að finna það sem gæti passað.`]],[`Hvaða gögn eru vistuð`,[`VerkRadar getur vistað fyrirtækjaheiti, tengiliðanetfang, vefslóð, atvinnugrein, þjónustuflokka, staðsetningar, leitarorð, stillingar, vistuð og hunsuð verkefni, samsvaranir og yfirlit.`,`Kerfið vistar einnig innskráningar- og lotugögn sem þarf til að halda notendum innskráðum og vernda aðgang.`]],[`Innskráning og aðgangur`,[`Notendur skrá sig inn með auðkenndum aðgangi. Aðgangur að mælaborði, stillingum og skýrslum er tengdur við notanda og fyrirtæki eftir því sem við á.`]],[`Fyrirtækjaprófíll og stillingar`,[`Fyrirtækjaprófíllinn er notaður til að bera opinber verkefni saman við þjónustu, svæði, lykilorð og óskir fyrirtækisins. Betri prófíll gefur yfirleitt betri samsvörun.`]],[`Vistuð og hunsuð tækifæri`,[`VerkRadar getur vistað hvaða verkefni notandi vistar, fylgist með eða hunsar. Þetta er notað til að bæta upplifun, síur og yfirlit.`]],[`Vafrakökur og vafrageymsla`,[`VerkRadar notar nauðsynlega vafrageymslu, lotugeymslu og sambærilega virkni fyrir innskráningu, Supabase Auth lotur, tungumál, stillingar og grunnvirkni appsins.`,`Við gerum ekki ráð fyrir auglýsinga- eða rekjanlegri markaðssetningargeymslu í þessari útgáfu. Ef greiningar eða auglýsingatól verða síðar bætt við þarf að uppfæra þessa lýsingu.`]],[`Hafa samband`,[`Spurningar um persónuvernd eða gögn má senda á info@froststudio.net.`]]]}:{eyebrow:`Legal and trust`,title:`Privacy`,intro:`This page explains in practical terms what VerkRadar stores and how that data is used to provide the service.`,sections:[[`Privacy`,[`VerkRadar is a monitoring and reporting tool for businesses. It uses user-entered company data and public tender/project data to help companies find relevant opportunities.`]],[`What data is stored`,[`VerkRadar may store company name, contact email, website, industry, service categories, locations, keywords, settings, saved and ignored opportunities, matches, and reports.`,`The system also stores login and session data needed to keep users signed in and protect account access.`]],[`Login and access`,[`Users log in with authenticated accounts. Access to dashboards, settings, and reports is connected to the user and company where applicable.`]],[`Company profile and settings`,[`The company profile is used to compare public opportunities against services, locations, keywords, and company preferences. A better profile usually creates better matches.`]],[`Saved and ignored opportunities`,[`VerkRadar may store which opportunities a user saves, watches, or ignores. This is used to improve the experience, filters, and reports.`]],[`Cookies and browser storage`,[`VerkRadar uses essential browser storage, session storage, and similar functionality for login, Supabase Auth sessions, language, preferences, and core app functionality.`,`We do not currently claim to use advertising or marketing tracking storage in this version. If analytics or advertising tools are added later, this section should be updated.`]],[`Contact`,[`Questions about privacy or data can be sent to info@froststudio.net.`]]]},terms:n?{eyebrow:`Lög og traust`,title:`Skilmálar`,intro:`Þessir skilmálar lýsa notkun VerkRadar á einföldu máli. Þeir eru ekki endanleg lögfræðiráðgjöf.`,sections:[[`Skilmálar`,[`Með því að nota VerkRadar samþykkir notandi að nota þjónustuna á ábyrgan hátt og staðfesta alltaf upplýsingar á upprunalegri heimild áður en brugðist er við.`]],[`Þjónustan`,[`VerkRadar vaktar opinberar heimildir, útboðsvefi, sveitarfélagssíður og aðrar heimildir þar sem það er heimilt og tæknilega mögulegt. Kerfið raðar verkefnum eftir fyrirtækjaprófíl og býr til mælaborð eða yfirlit.`]],[`Upprunaleg gögn eru endanleg heimild`,[`VerkRadar hjálpar til við að forgangsraða yfirferð opinberra tækifæra. Upprunaleg útboðsgögn, skilafrestir, kröfur og hæfisskilyrði á upprunalegri heimild eru alltaf endanleg heimild.`]],[`Engin trygging um fullkomna vöktun`,[`VerkRadar tryggir ekki að öll útboð finnist, að öll gögn séu fullkomin, að samsvörun sé alltaf rétt eða að fyrirtæki uppfylli skilyrði eða vinni verk.`]],[`Prufuaðgangur og verð`,[`Prufuaðgangur, verð, greiðslur og uppsagnir ráðast af verðsíðu, pöntunarsíðu eða skriflegu samkomulagi hverju sinni.`]],[`Uppsögn`,[`Notandi getur óskað eftir lokun eða breytingu á aðgangi. VerkRadar getur takmarkað aðgang ef þjónustan er misnotuð, greiðslur vantar eða öryggisáhætta kemur upp.`]],[`Ábyrgðartakmörkun`,[`VerkRadar ber ekki ábyrgð á töpuðum skilafrestum, röngum upplýsingum á upprunalegum heimildum, viðskiptatapi eða ákvörðunum sem teknar eru út frá yfirlitum án staðfestingar á frumgögnum.`]],[`Hafa samband`,[`Spurningar um skilmála má senda á info@froststudio.net.`]]]}:{eyebrow:`Legal and trust`,title:`Terms`,intro:`These terms describe VerkRadar use in plain language. They are not final legal advice.`,sections:[[`Terms`,[`By using VerkRadar, users agree to use the service responsibly and always verify information at the original source before acting.`]],[`The service`,[`VerkRadar monitors public sources, procurement portals, municipal pages, and other sources where allowed and technically feasible. The system ranks opportunities against company profiles and creates dashboards or reports.`]],[`Original data is the final authority`,[`VerkRadar helps prioritize review of public opportunities. Original tender documents, deadlines, requirements, and eligibility criteria at the original source are always the final authority.`]],[`No guarantee of complete monitoring`,[`VerkRadar does not guarantee that every tender is found, that all data is complete, that matching is always correct, or that a company is eligible for or will win any contract.`]],[`Trial access and pricing`,[`Trial access, pricing, billing, and cancellation are governed by the pricing page, order page, or written agreement in effect at the time.`]],[`Cancellation`,[`A user may request account changes or cancellation. VerkRadar may restrict access if the service is misused, payment is missing, or a security risk arises.`]],[`Limitation of liability`,[`VerkRadar is not responsible for missed deadlines, incorrect information at original sources, business losses, or decisions made from reports without checking source documents.`]],[`Contact`,[`Questions about these terms can be sent to info@froststudio.net.`]]]},data:n?{eyebrow:`Gagnaheimildir`,title:`Gagnaheimildir`,intro:`VerkRadar notar opinberar heimildir til að hjálpa fyrirtækjum að finna verkefni sem gætu skipt máli.`,sections:[[`Gagnaheimildir`,[`Kerfið safnar og samræmir opinberar upplýsingar þar sem slíkt er heimilt og tæknilega mögulegt.`]],[`Opinberar heimildir`,[`Heimildir geta verið útboðsvefir, opinberar stofnanir, RSS straumar, sveitarfélagssíður og aðrar opinberar síður.`]],[`Sveitarfélög og útboðsvefir`,[`VerkRadar getur vaktað sveitarfélög, innkaupa- og útboðsvefi og sértækar síður fyrir framkvæmdir, þjónustu eða innkaup.`]],[`Evrópsk útboð ef við á`,[`Evrópsk útboð geta verið sótt úr TED eða sambærilegum heimildum þegar þau eiga við markaðinn og fyrirtækjaprófíla.`]],[`Takmarkanir gagna`,[`Sumar heimildir veita ekki fulla skilafresti, verðmæti, kaupanda eða útboðsgögn í véllesanlegu formi. Gögn geta verið seinkuð, ófullkomin, tvítekin eða breytt á upprunalegri síðu.`]],[`Leiðréttingar`,[`Ef þú sérð rangar eða úreltar upplýsingar má senda ábendingu á info@froststudio.net. Opnið alltaf upprunalega heimild áður en brugðist er við.`]]]}:{eyebrow:`Data sources`,title:`Data sources`,intro:`VerkRadar uses public sources to help businesses find projects that may matter.`,sections:[[`Data sources`,[`The system collects and normalizes public information where allowed and technically feasible.`]],[`Public sources`,[`Sources can include procurement portals, public institutions, RSS feeds, municipal pages, and other official public pages.`]],[`Municipalities and procurement portals`,[`VerkRadar may monitor municipalities, procurement/tender portals, and specific pages for construction, services, or purchasing.`]],[`European tenders where applicable`,[`European tenders may be imported from TED or similar sources when relevant to the market and company profiles.`]],[`Data limitations`,[`Some sources do not provide full deadlines, values, buyer data, or tender documents in machine-readable form. Data may be delayed, incomplete, duplicated, or changed at the original source.`]],[`Corrections`,[`If you see incorrect or outdated information, send a correction to info@froststudio.net. Always open the original source before acting.`]]]},security:n?{eyebrow:`Öryggi`,title:`Öryggi`,intro:`VerkRadar notar innskráningu, aðgangsstýringu og aðskilnað gagna til að vernda fyrirtækjaupplýsingar.`,sections:[[`Öryggi`,[`Við reynum að halda öryggisupplýsingum hagnýtum og heiðarlegum. VerkRadar fullyrðir ekki um vottanir sem hafa ekki verið fengnar.`]],[`Innskráning`,[`Notendur skrá sig inn með auðkenndum aðgangi. Innskráning og lotur eru hluti af grunnvirkni appsins.`]],[`Aðgangsstýring`,[`Aðgangur að fyrirtækjagögnum, samsvörunum og skýrslum er aðgreindur eftir notanda og fyrirtæki þar sem það á við.`]],[`Fyrirtækjagögn`,[`Fyrirtækjaprófílar, stillingar og vistuð/hunsuð verkefni eru notuð til að veita þjónustuna og ættu ekki að vera sýnileg öðrum viðskiptavinum.`]],[`Admin aðgangur`,[`Admin verkfæri eru takmörkuð við skilgreinda stjórnendur og eru notuð til að fylgjast með heimildum, innflutningi, fyrirtækjum og handvirkri yfirferð.`]],[`Tilkynna vandamál`,[`Öryggisspurningar eða ábendingar má senda á info@froststudio.net.`]]]}:{eyebrow:`Security`,title:`Security`,intro:`VerkRadar uses authentication, access control, and data separation to protect company information.`,sections:[[`Security`,[`We try to keep security information practical and honest. VerkRadar does not claim certifications it has not obtained.`]],[`Login`,[`Users log in with authenticated accounts. Login and sessions are part of the app’s core functionality.`]],[`Access control`,[`Access to company data, matches, and reports is separated by user and company where applicable.`]],[`Company data`,[`Company profiles, settings, and saved/ignored opportunities are used to provide the service and should not be visible to other customers.`]],[`Admin access`,[`Admin tools are restricted to defined administrators and are used to monitor sources, imports, companies, and manual review.`]],[`Report an issue`,[`Security questions or reports can be sent to info@froststudio.net.`]]]},contact:n?{eyebrow:`Hafa samband`,title:`Hafa samband`,intro:`Viltu prófa VerkRadar, spyrja um vöktun eða benda á leiðréttingu?`,sections:[[`VerkRadar / Frost Studio`,[`Netfang: info@froststudio.net`,`Tengiliður: Kristján Jakob`]]]}:{eyebrow:`Contact`,title:`Contact`,intro:`Want to try VerkRadar, ask about monitoring, or report a correction?`,sections:[[`VerkRadar / Frost Studio`,[`Email: info@froststudio.net`,`Contact person: Kristján Jakob`]]]}}[e]}function c({authMessage:e,escapeHtml:t}){if(!e)return``;let n=Array.isArray(e.actions)?e.actions:[];return`
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
  `}function l({t:e,escapeHtml:t,authForm:n,authSubmitting:r,authMessage:i}){return`
    <section class="auth-page">
      <div class="auth-layout">
        <div class="auth-copy">
          <p class="eyebrow">${t(e(`login`))}</p>
          <h1>${t(e(`authLoginTitle`))}</h1>
          <p>${t(e(`authLoginSubtitle`))}</p>
        </div>

        <div class="auth-form-column">
          ${c({authMessage:i,escapeHtml:t})}
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
  `}function u({t:e,escapeHtml:t,authForm:n,authSubmitting:r,authMessage:i}){return`
    <section class="auth-page">
      <div class="auth-layout">
        <div class="auth-copy">
          <p class="eyebrow">${t(e(`passwordReset`))}</p>
          <h1>${t(e(`resetPasswordTitle`))}</h1>
          <p>${t(e(`resetPasswordSubtitle`))}</p>
        </div>

        <div class="auth-form-column">
          ${c({authMessage:i,escapeHtml:t})}
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
  `}function d({t:e,escapeHtml:t,authForm:n,authSubmitting:r,authMessage:i}){return`
    <section class="auth-page">
      <div class="auth-layout">
        <div class="auth-copy">
          <p class="eyebrow">${t(e(`newPassword`))}</p>
          <h1>${t(e(`chooseNewPassword`))}</h1>
          <p>${t(e(`resetPasswordHelp`))}</p>
        </div>

        <div class="auth-form-column">
          ${c({authMessage:i,escapeHtml:t})}
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
  `}function ee({t:e,escapeHtml:t,authForm:n,authSubmitting:r,authMessage:i}){return`
    <section class="auth-page">
      <div class="auth-layout">
        <div class="auth-copy">
          <p class="eyebrow">${t(e(`createAccount`))}</p>
          <h1>${t(e(`createAccountTitle`))}</h1>
          <p>${t(e(`createAccountSubtitle`))}</p>
        </div>

        <div class="auth-form-column">
          ${c({authMessage:i,escapeHtml:t})}
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
  `}function f({copy:e,suggestions:t,labels:n,escapeHtml:r}){return`
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
  `}function p({profile:e,matches:t,stats:n,filters:r,filterSummary:i,matchStatus:a,opportunityLoadError:o,isAdmin:s,matchingLoading:c,labels:l,renderFilterDropdown:u,renderOpportunityCard:d,renderEmptyState:ee,escapeHtml:f}){return`
    <section class="dashboard-head">
      <div>
        <p class="eyebrow">${f(l.dashboard)}</p>
        <h1>${f(l.welcomeCompany)}</h1>
        <p>${f(l.dashboardIntro)}</p>
      </div>
      <div class="dashboard-actions">
        ${s?`
          <button class="btn btn-primary" data-action="run-matching" ${c?`disabled`:``}>
            ${f(c?l.refreshing:l.refreshMatches)}
          </button>
        `:``}
        <button class="btn btn-secondary" data-action="go" data-href="/report">${f(l.viewWeeklyReport)}</button>
      </div>
    </section>

    ${a?`
      <div class="admin-message ${a.type===`error`?`is-error`:`is-success`}">
        ${f(a.text)}
      </div>
    `:``}

    ${o?`
      <div class="note-panel">
        ${f(o)}
      </div>
    `:``}

    <section class="stats-grid">
      <div class="stat-card"><span>${f(l.strongMatches)}</span><strong>${n.strong}</strong></div>
      <div class="stat-card"><span>${f(l.closingSoon)}</span><strong>${n.closingSoon}</strong></div>
      <div class="stat-card"><span>${f(l.savedLabel)}</span><strong>${n.savedCount}</strong></div>
      <div class="stat-card"><span>${f(l.totalPotentialValue)}</span><strong>${n.totalValue}</strong></div>
    </section>

    <section class="filters">
      <input data-filter="search" value="${f(r.search)}" placeholder="${f(l.searchOpportunities)}" />
      ${u(`label`)}
      ${u(`category`)}
      ${u(`location`)}
      ${u(`type`)}
      <label class="checkbox compact"><input type="checkbox" data-filter="savedOnly" ${r.savedOnly?`checked`:``}/><span>${f(l.savedOnly)}</span></label>
    </section>

    <div class="note-panel dashboard-filter-summary">
      ${f(i)}
    </div>

    <section class="opportunity-list">
      ${t.length?t.map(d).join(``):ee(e)}
    </section>
  `}function m({opp:e,saved:t,deadline:n,sourceBadgeHtml:r,qualityBadgeHtml:i,safetyBadgeHtml:a,extractedBadgeHtml:o,originalLanguageBadgeHtml:s,matchBadgeClass:c,matchLabel:l,buyer:u,location:d,value:ee,reasons:f,labels:p,escapeHtml:m}){return`
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
          <span class="${c}">${m(l)} · ${e.matchScore}</span>
        </div>
        <h3>${m(e.title)}</h3>
        <p>${m(e.description)}</p>
        <div class="meta-row">
          <span>${m(u)}</span>
          <span>${m(d)}</span>
          <span>${ee}</span>
          <span class="${n.className}">${m(n.label)}</span>
        </div>
        <div class="reason-row">
          ${f.slice(0,3).map(e=>`<span>${m(e)}</span>`).join(``)}
        </div>
      </div>
      <div class="opp-actions">
        <button class="btn btn-secondary" data-action="details" data-id="${e.id}">${m(p.details)}</button>
        <button class="btn ${t?`btn-primary`:`btn-secondary`}" data-action="save" data-id="${e.id}">${m(t?p.saved:p.save)}</button>
        <button class="btn btn-ghost" data-action="ignore" data-id="${e.id}">${m(p.ignore)}</button>
      </div>
    </article>
  `}function te({opp:e,saved:t,deadline:n,requirements:r,matchReasons:i,risks:a,safetyReasons:o,nextSteps:s,matchBadgeClass:c,matchLabel:l,qualityBadgeHtml:u,safetyBadgeHtml:d,extractedBadgeHtml:ee,qualityWarningHtml:f,buyerSummary:p,location:m,value:te,sourceUrl:h,extractedDetails:ne,qualityLabel:g,safetyStatusLine:re,category:ie,type:ae,publishedDate:_,cpvCode:oe,labels:v,escapeHtml:y}){return`
    <div class="modal-backdrop">
      <div class="modal" role="dialog" aria-modal="true">
        <div class="modal-header">
          <div>
            <div class="opportunity-badges">
              <span class="${c}">${y(l)} · ${e.matchScore}</span>
              ${u}
              ${d}
              ${ee}
            </div>
            <h2>${y(e.title)}</h2>
            <p>${y(p)} · ${y(m)} · ${te}</p>
          </div>
          <button type="button" class="icon-btn modal-close-btn" data-action="close-modal" aria-label="Close details">×</button>
        </div>

        <div class="modal-body">
          <div class="modal-grid">
            <section>
              ${f}
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
              ${ne}
              <p><strong>${y(v.quality)}:</strong> ${y(g)}</p>
              ${re}
              <p><strong>${y(v.category)}:</strong> ${y(ie)}</p>
              <p><strong>${y(v.type)}:</strong> ${y(ae)}</p>
              <p><strong>${y(v.deadline)}:</strong> <span class="${n.className}">${y(v.deadlineLabel)}</span></p>
              <p><strong>${y(v.published)}:</strong> ${y(_)}</p>
              <p><strong>${y(v.cpv)}:</strong> ${y(oe||`—`)}</p>

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
                <a class="btn btn-secondary" href="${y(h)}" target="_blank" rel="noreferrer">${y(v.openSource)}</a>
                <button class="btn btn-ghost" data-action="ignore" data-id="${e.id}">${y(v.markNotRelevant)}</button>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  `}function h(e,t){return e.map(e=>`<p>${t(e)}</p>`).join(``)}function ne({language:e,escapeHtml:t,eyebrow:n,title:r,intro:i,sections:a}){let o=e===`is`?`Síðast uppfært`:`Last updated`,s=e===`is`?`4. júní 2026`:`June 4, 2026`;return`
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
            <div class="legal-content">${h(n,t)}</div>
          </section>
        `).join(``)}
      </div>
    </section>
  `}function g({t:e,escapeHtml:t,language:n,trialHref:r}){let i=n===`is`,a=i?[{title:`Gatnagerð og lagnir við nýtt hverfi`,type:`1`,score:`Sterk samsvörun · Skilafrestur eftir 10 daga`},{title:`Lóðarframkvæmdir við skóla`,type:`2`,score:`Passar við lóðarvinnu · Staðfesta gögn`},{title:`Bílastæði og yfirborðsfrágangur`,type:`3`,score:`Möguleg samsvörun · Opna heimild`}]:[{title:`Roadworks and utilities for a new neighborhood`,type:`1`,score:`Strong match · Deadline in 10 days`},{title:`Site works at a school`,type:`2`,score:`Fits site work · Verify documents`},{title:`Parking area and surface finishing`,type:`3`,score:`Possible match · Open source`}],o=i?[[`Jarðvinna og gatnagerð`,`Útboð um vegi, lóðir, bílastæði, stíga og jarðvegsvinnu.`],[`Lagnavinna og fráveita`,`Verkefni um lagnir, dælustöðvar, fráveitu, vatn og hitaveitu.`],[`Malbikun og lóðarframkvæmdir`,`Gatnagerð, yfirborðsfrágangur, gangstéttir og viðhald.`],[`Rafverktakar`,`Raflagnir, brunakerfi, lýsing, öryggiskerfi og hleðslustöðvar.`],[`Ræstingar og þjónusta`,`Reglulegir þjónustusamningar, húsþjónusta og rekstrarverkefni.`],[`Verkfræðistofur og ráðgjafar`,`Hönnun, eftirlit, ráðgjöf og verkefnastjórnun þegar það á við.`]]:[[`Earthworks and roadworks`,`Tenders for roads, plots, parking areas, paths and earthworks.`],[`Utilities and drainage`,`Projects for pipes, pumping stations, drainage, water and heating utilities.`],[`Paving and site works`,`Road construction, surface finishing, sidewalks and maintenance.`],[`Electrical contractors`,`Wiring, fire alarms, lighting, security systems and chargers.`],[`Cleaning and services`,`Recurring service contracts, facility services and operations work.`],[`Engineering and advisors`,`Design, supervision, consulting and project management where relevant.`]];return`
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
  `}function re({t:e,escapeHtml:t,trialHref:n}){let r=[{key:`basic`,name:e(`pricingStarter`),price:`9.900 kr`,items:[e(`pricingWeeklyReport`),e(`pricingFiveMatches`),e(`pricingBasicMatching`),e(`pricingDeadlineReminders`),e(`pricingOneProfile`)]},{key:`pro`,name:e(`pricingGrowth`),price:`19.900 kr`,highlighted:!0,items:[e(`pricingEverythingStarter`),e(`pricingMoreSources`),e(`pricingSummaries`),e(`pricingLabels`),e(`pricingSaved`),e(`pricingArchive`)]},{key:`priority`,name:e(`pricingPro`),price:`29.900 kr`,items:[e(`pricingEverythingGrowth`),e(`pricingDocumentSummaries`),e(`pricingRequirements`),e(`pricingRiskWarnings`),e(`pricingBidChecklist`),e(`pricingPrioritySupport`)]}];return`
    <section class="page-head">
      <p class="eyebrow">${t(e(`pricingEyebrow`))}</p>
      <h1>${t(e(`pricingHeadline`))}</h1>
      <p>${t(e(`pricingSubtitle`))}</p>
    </section>

    <section class="pricing-grid">
      ${r.map(r=>ie(r,{t:e,escapeHtml:t,trialHref:n})).join(``)}
    </section>
  `}function ie(e,{t,escapeHtml:n,trialHref:r}){let i=!!e.highlighted,a=`${r}${String(r).includes(`?`)?`&`:`?`}plan=${encodeURIComponent(e.key||`basic`)}`;return`
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
  `}var ae=[`Reykjavík`,`Capital Area`,`Suðurnes`,`South Iceland`,`West Iceland`,`North Iceland`,`East Iceland`,`Westfjords`,`All Iceland`,`Remote / Online`];function _(e){let{t,escapeHtml:n,profileDraft:r,renderCustomDropdown:i,getFilterOptions:a}=e,o=r.industry||``;return`
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
  `}function oe(e){let{t,escapeHtml:n,profileDraft:r,arrayFieldText:i,getProfileSuggestions:a,renderSuggestionChips:o}=e,s=r.industry||``,c=a(`services`,s),l=a(`includeKeywords`,s);return`
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
  `}function v(e){let{t,escapeHtml:n,profileDraft:r,arrayFieldText:i,formatCustomerLocation:a}=e;return`
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
        ${ae.map(e=>`
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
  `}function y(e){let{t,escapeHtml:n,profileDraft:r}=e;return`
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
  `}function se(e){let{t,escapeHtml:n,capitalize:r,profileDraft:i}=e;return`
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
  `}function ce(e){let{t,escapeHtml:n,hasProfile:r,isSavingProfile:i,profileSaved:a,profileSaveMessage:o,profileSaveError:s}=e,c=t(r?`saveProfile`:`createProfile`);return`
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
  `}function le(e){return`
    <form id="profile-form" class="form-card settings-profile-form">
      ${_(e)}
      ${oe(e)}
      ${v(e)}
      ${y(e)}
      ${se(e)}
      ${ce(e)}
    </form>
  `}function ue({report:e,title:t,created:n,itemLabel:r,statusLabel:i,hideLabel:a,viewLabel:o,escapeHtml:s}){return`
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
  `}function de({report:e,options:t={},companyName:n,dateRange:r,generatedByLabel:i,reportTitleLabel:a,closeLabel:o,escapeHtml:s}){return`
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
  `}function fe({label:e,value:t,escapeHtml:n}){return`
    <div class="report-summary-card">
      <span>${n(e)}</span>
      <strong>${t}</strong>
    </div>
  `}function pe({title:e,description:t,opportunities:n,emptyText:r,renderOpportunityItem:i,escapeHtml:a}){return`
    <section class="report-section">
      <div class="report-section-head">
        <h3>${a(e)}</h3>
        <p>${a(t)}</p>
      </div>
      ${n.length?n.map(i).join(``):`<div class="report-empty">${a(r)}</div>`}
    </section>
  `}function me({opp:e,valueText:t,deadlineText:n,sourceUrl:r,risks:i,fallbackReason:a,qualityBadgeHtml:o,matchBadgeClass:s,matchLabel:c,buyerLabel:l,buyerValue:u,sourceLabel:d,sourceValue:ee,areaLabel:f,areaValue:p,deadlineLabel:m,valueLabel:te,whyLabel:h,risksLabel:ne,openSourceLabel:g,sourceMissingLabel:re,formatReason:ie,formatRisk:ae,escapeHtml:_}){let oe=(e.matchReasons.length?e.matchReasons:[a]).slice(0,4);return`
    <article class="report-item">
      <div class="report-item-top">
        ${o}
        <span class="${s}">${_(c)} · ${e.matchScore}</span>
      </div>
      <h4>${_(e.title)}</h4>
      <div class="report-facts">
        <span><strong>${_(l)}</strong>${_(u)}</span>
        <span><strong>${_(d)}</strong>${_(ee)}</span>
        <span><strong>${_(f)}</strong>${_(p)}</span>
        <span><strong>${_(m)}</strong><em>${_(n)}</em></span>
        <span><strong>${_(te)}</strong><em>${_(t)}</em></span>
      </div>
      <div class="report-detail-grid">
        <div>
          <h5>${_(h)}</h5>
          <ul>${oe.map(e=>`<li>${_(ie(e))}</li>`).join(``)}</ul>
        </div>
        <div>
          <h5>${_(ne)}</h5>
          <ul>${i.slice(0,5).map(e=>`<li>${_(ae(e))}</li>`).join(``)}</ul>
        </div>
      </div>
      ${r?`<a class="report-source-link" href="${_(r)}" target="_blank" rel="noopener">${_(g)} <span aria-hidden="true">↗</span></a>`:`<span class="report-source-link is-disabled">${_(re)}</span>`}
    </article>
  `}function he({status:e,label:t,escapeHtml:n}){return`<span class="report-quality ${n(e)}">${n(t)}</span>`}function ge({t:e,escapeHtml:t,language:n,profileDraftDirty:r,profileLoadError:i,showDemoReset:a,profileFormHtml:o}){return`
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
  `}var _e=[[`Tender and opportunity report`,`Útboðs- og verkefnayfirlit`],[`Weekly Opportunity Report`,`Útboðs- og verkefnayfirlit`],[`Open tenders / quote requests`,`Opin útboð / verðfyrirspurnir`],[`Possible upcoming opportunities`,`Möguleg væntanleg tækifæri`],[`Needs review`,`Þarfnast staðfestingar`],[`Strong match`,`Sterk samsvörun`],[`Good match`,`Góð samsvörun`],[`Possible match`,`Möguleg samsvörun`],[`Weak match`,`Veik samsvörun`],[`Quality`,`Gæði`],[`Buyer`,`Kaupandi`],[`Source`,`Heimild`],[`Location`,`Svæði`],[`Deadline`,`Skilafrestur`],[`Estimated value`,`Áætlað verðmæti`],[`Value`,`Áætlað verðmæti`],[`Why this matters`,`Af hverju þetta gæti skipt máli`],[`Why this fits`,`Af hverju þetta gæti skipt máli`],[`Risks / things to check`,`Atriði til að staðfesta`],[`Open source`,`Opna heimild`],[`Unknown buyer`,`Óþekktur kaupandi`],[`All Iceland`,`Allt landið`],[`Not found`,`Fannst ekki`],[`Not listed`,`Ekki gefið upp`]];function ve(e,t){return t===`is`?_e.reduce((e,[t,n])=>e.replaceAll(t,n),String(e||``)):e}var ye=`https://asojxjbsgqbfpbepojzh.supabase.co`,b=window.supabase?window.supabase.createClient(ye,`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFzb2p4amJzZ3FiZnBiZXBvanpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAwNTU2NjgsImV4cCI6MjA5NTYzMTY2OH0.yPA34VbqWqKrBPespmHr5AojYzjhy3kGRxswO9XdAd0`):null;function x(e){if(!e)return 999;let t=new Date,n=new Date(`${e}T00:00:00`);if(Number.isNaN(n.getTime()))return 999;let r=n-new Date(t.getFullYear(),t.getMonth(),t.getDate());return Math.ceil(r/(1e3*60*60*24))}function S(e){if(!e)return`No deadline`;let t=new Date(`${e}T00:00:00`);return Number.isNaN(t.getTime())?String(e):new Intl.DateTimeFormat(`en-GB`,{year:`numeric`,month:`short`,day:`2-digit`}).format(t)}function C(e){return e?new Intl.DateTimeFormat(`en-GB`,{year:`numeric`,month:`short`,day:`2-digit`}).format(new Date(e)):`Unknown date`}function be(e){return Array.from(new Set((e||[]).map(e=>String(e||``).trim()).filter(Boolean)))}function w(e){return String(e||``).split(`,`).map(e=>e.trim()).filter(Boolean)}function T(e){return be(Array.isArray(e)?e:w(e))}function xe(e){return w(e)}function E(e){return String(e||``).toLowerCase().normalize(`NFD`).replace(/[\u0300-\u036f]/g,``).replace(/æ/g,`ae`).replace(/[ðþ]/g,e=>e===`ð`?`d`:`th`).replace(/[^a-z0-9]+/g,` `).trim()}function D(e){return String(e??``).replaceAll(`&`,`&amp;`).replaceAll(`<`,`&lt;`).replaceAll(`>`,`&gt;`).replaceAll(`"`,`&quot;`).replaceAll(`'`,`&#039;`)}function Se(e){return String(e||``).charAt(0).toUpperCase()+String(e||``).slice(1)}function Ce(e){return/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(String(e||``))}function we(e){return new DOMParser().parseFromString(String(e||``),`text/html`).body.textContent?.replace(/\s+/g,` `).trim()||``}function Te(e){let t=String(e||``).trim();return/^https?:\/\//i.test(t)?t:``}function Ee(e,t=`ISK`){if(!e)return``;let n=t||`ISK`,r=n===`ISK`?`kr`:n;return`${new Intl.NumberFormat(`is-IS`).format(e)} ${r}`}function De(e,t){let n=t||(e=>e);return{"Confirmed tender":n(`confirmedTender`),"Likely opportunity":n(`likelyOpportunity`),"Early signal":n(`earlySignal`),"Needs review":n(`needsReview`),"Tender awarded":n(`tenderAwarded`),"Tender already announced":n(`tenderAlreadyAnnounced`),"Upcoming tender":n(`upcomingTender`),"Project signal":n(`projectSignal`),"Original language":n(`originalLanguage`)}[e]||e||``}function Oe(e,t){let n=t||(e=>e);return{"Strong match":n(`strongMatch`),"Good match":n(`goodMatch`),"Possible match":n(`possibleMatch`),"Weak match":n(`weakMatch`)}[e]||e||``}function ke(e,t,n){let r=n||(e=>e),i=String(t||``).trim();return i?e===`buyer`&&(Ae(i)||i.toLowerCase()===`unknown buyer`)?r(`unknownBuyer`):e===`location`&&i.toLowerCase()===`all iceland`?r(`allIceland`):e===`source`?i.replace(/\bprocurement\b/gi,r(`procurement`)):i:r(e===`buyer`?`unknownBuyer`:`notListed`)}function Ae(e){let t=E(e);return!!(!t||[`admin`,`administrator`,`ritstjori`,`editor`,`noreply`,`no reply`,`wordpress`,`wp admin`,`user`,`test`].includes(t)||t.includes(`noreply`)||/^wp\s*[-_]?\s*\d+$/.test(t))}function je(e){let t=E(e);return t?t.includes(`borgarbyggd`)?`Borgarbyggð`:t.includes(`akranes`)?`Akraneskaupstaður`:t.includes(`faxafloahafnir`)?`Faxaflóahafnir`:t.includes(`gardabaer`)?`Garðabær`:t.includes(`reykjanesbaer`)?`Reykjanesbær`:t.includes(`kopavogur`)?`Kópavogur`:t.includes(`hafnarfjordur`)?`Hafnarfjarðarbær`:t.includes(`mosfellsbaer`)?`Mosfellsbær`:t.includes(`arborg`)?`Sveitarfélagið Árborg`:t.includes(`fjardabyggd`)?`Fjarðabyggð`:t.includes(`mulathing`)?`Múlaþing`:t.includes(`garðabaer`)?`Garðabær`:(t.includes(`rikiskaup`)||t.includes(`utbodsvefur`),``):``}function Me(e,t,n={}){let r=String(e||``).trim();if(/reykjavíkurborg/i.test(r))return`Reykjavíkurborg`;if(r&&!Ae(r)&&r.toLowerCase()!==`unknown buyer`)return r;let i=String(n.extracted_buyer||n.buyer||``).trim();return/reykjavíkurborg/i.test(i)?`Reykjavíkurborg`:i&&!Ae(i)&&i.toLowerCase()!==`unknown buyer`?i:je(t)||`Unknown buyer`}function Ne(e){let t=E(e);return t?t.includes(`borgarbyggd`)?`Borgarbyggð / Vesturland`:t.includes(`akranes`)?`Akranes / Vesturland`:t.includes(`faxafloahafnir`)?`Höfuðborgarsvæðið`:t.includes(`arborg`)?`Árborg / Suðurland`:``:``}function Pe(e,t,n){let r=String(e||``).trim();return t===`is`&&{"Capital Area":`Höfuðborgarsvæðið`,"South Iceland":`Suðurland`,"West Iceland":`Vesturland`,"North Iceland":`Norðurland`,"East Iceland":`Austurland`,Westfjords:`Vestfirðir`,"All Iceland":(n||(e=>e))(`allIceland`),"Remote / Online":`Fjarvinna / netverkefni`}[r]||r}function Fe(e,t,{language:n=`en`,translate:r}={}){let i=r||(e=>e),a=ke(e,t,i);if(n!==`is`)return a;let o=String(a||``).trim().toLowerCase();return{"public procurement":i(`publicProcurement`),procurement:i(`procurement`),tender:i(`tender`)}[o]||a.replace(/\bpublic procurement\b/gi,i(`publicProcurement`)).replace(/\btender\b/gi,i(`tender`))}function Ie(e,{language:t=`en`,translate:n}={}){let r=n||((e,t={})=>t.value?`${e}: ${t.value}`:e),i=String(e||``);return i.startsWith(`Mentions your service:`)?r(`mentionsService`,{value:i.slice(22).trim()}):i.startsWith(`Contains your keyword:`)?r(`containsKeyword`,{value:i.slice(22).trim()}):{"National opportunity":r(`nationalOpportunity`),"Local match":r(`localMatch`),"Located in your selected region":r(`localMatch`),"Project value is inside your preferred range":t===`is`?`Áætlað verðmæti er innan óskaðs bils`:`Project value is inside your preferred range`,"Deadline is coming up soon":t===`is`?`Skilafrestur nálgast`:`Deadline is coming up soon`,"Matched to your company profile.":t===`is`?`Passar við fyrirtækjaprófílinn.`:`Matched to your company profile.`,"Matched to your profile by service, location or keyword overlap.":t===`is`?`Passar við þjónustu, svæði eða lykilorð í prófílnum.`:`Matched to your profile by service, location or keyword overlap.`}[i]||i||``}function Le(e,t=`en`){return t===`is`?{"Deadline not available in feed — verify on source page.":`Skilafrestur fannst ekki í innfluttum gögnum — staðfestið á upprunasíðu.`,"Deadline not available in imported data — verify on source page.":`Skilafrestur fannst ekki í innfluttum gögnum — staðfestið á upprunasíðu.`,"Deadline not available in source — verify page.":`Skilafrestur fannst ekki í heimild - staðfestið á upprunalegri síðu.`,"No formal tender deadline extracted — verify source article.":`Formlegur skilafrestur fannst ekki - staðfestið í heimildargrein.`,"Formal tender deadline not found yet — monitor source article.":`Formlegur skilafrestur fannst ekki enn - fylgist með heimildargrein.`,"Tender appears already announced/awarded — verify source article.":`Útboð virðist þegar auglýst eða afgreitt - staðfestið í heimildargrein.`,"Estimated value is not listed in the imported data.":`Áætlað verðmæti er ekki gefið upp í innfluttum gögnum.`,"Open the source page and confirm mandatory requirements.":`Opnið upprunalega heimild og staðfestið skyldukröfur.`,"Extracted project signal — verify tender timing in the source article.":`Útdregin verkefnavísbending - staðfestið útboðstímasetningu í heimildargrein.`,"Imported from broad feed — verify that this is a real tender or business opportunity.":`Innflutt úr breiðum fréttastraumi - staðfestið að þetta sé raunverulegt útboð eða viðskiptatækifæri.`}[e]||e||``:e||``}function Re(e,t=`en`){return t===`is`?{"Open the source documents":`Opna útboðsgögn`,"Confirm mandatory requirements":`Staðfesta kröfur og hæfisskilyrði`,"Check capacity and profitability":`Meta getu og arðsemi`,"Prepare questions before the deadline":`Undirbúa fyrirspurnir fyrir skilafrest`,"Open source documents and confirm requirements.":`Opna útboðsgögn og staðfesta kröfur.`}[e]||e||``:e||``}var ze=`Deadline not available in imported data — verify on source page.`,Be=`No formal tender deadline extracted — verify source article.`;function Ve(){return n(e)}function O(e,t={}){return r(k?.language||`is`,e,t)}function He(t){k.language=t===`en`?`en`:`is`,localStorage.setItem(e.language,k.language),X()}var Ue=a,We=12e3;function Ge(){return o(k.user?.email||``)}var k={route:location.hash.replace(`#`,``)||`/`,language:Ve(),pendingSignupPlan:Qe(location.hash.replace(`#`,``)||`/`)||Ye(),user:null,currentUser:null,isAdmin:!1,authLoading:!0,isBooting:!0,authLoaded:!1,profileLoaded:!1,adminLoaded:!1,bootError:null,authMessage:null,authForm:{email:``,password:``,newPassword:``,confirmPassword:``},authSubmitting:!1,isSavingProfile:!1,profileSaved:!1,profileSaveMessage:null,profileSaveError:null,profile:null,profileDraft:null,profileDraftDirty:!1,profileLoading:!1,profileLoadError:null,companyId:null,opportunities:[],storedMatches:[],opportunityActions:[],saved:rr(e.saved),ignored:rr(e.ignored),filters:{search:``,label:`recommended`,category:`all`,location:`all`,type:`all`,savedOnly:!1},tedImportMode:`nordic`,dropdown:{openKey:null,focusedIndex:0},importStatus:null,importLoading:!1,connectorImportStatus:null,connectorImportLoading:!1,connectorTestingSourceId:null,importedTedOpportunities:[],importedTedOpportunitiesLoading:!1,importedTedOpportunitiesLoaded:!1,importedTedOpportunitiesError:null,importRuns:[],importRunsLoading:!1,importRunsLoaded:!1,importRunsError:null,adminReports:[],adminReportsLoading:!1,adminReportsLoaded:!1,adminReportsError:null,selectedAdminReport:null,selectedAdminReportLoading:!1,selectedAdminReportError:null,sourceCoverage:[],sourceCoverageLoading:!1,sourceCoverageLoaded:!1,sourceCoverageError:null,expandedSourceId:null,adminCompanies:[],adminCompaniesLoading:!1,adminCompaniesLoaded:!1,adminCompaniesError:null,adminReviewMatches:[],adminReviewLoading:!1,adminReviewLoaded:!1,adminReviewError:null,adminReviewActions:{},adminCompanyActions:{},selectedAdminCompanyId:null,adminActiveTab:`overview`,adminCompanyFilters:{search:``,industry:`all`,profileStatus:`all`,plan:`all`},adminReportMode:`new_only`,adminOpportunityFilters:{source:`all`,missingDeadlineSource:`all`,status:`all`,country:`all`,search:``,debugCompanyId:``,tedOnly:!1,manualOnly:!1,showDemoTest:!1},adminOpportunityDraft:tt(),matchStatus:null,matchingLoading:!1,lastMatchedAt:null,reports:[],reportsLoaded:!1,reportsLoadError:null,reportArchiveLoading:!1,reportSaveLoading:!1,reportMessage:null,selectedReportId:null,selectedAdminReportId:null,adminMessage:null,adminSubmitting:!1,adminDeletingId:null,adminUpdatingId:null,isLoadingOpportunities:!1,opportunityLoadError:null,isMobileMenuOpen:!1,profileMenuOpen:!1,selectedOpportunityId:null,toast:null};function Ke(e=k.route){return String(e||`/`).split(`?`)[0]||`/`}function qe(e=k.route){let t=String(e||``).split(`?`)[1]||``;return new URLSearchParams(t)}function Je(e){let t=String(e||``).trim().toLowerCase();return[`basic`,`pro`,`priority`].includes(t)?t:``}function Ye(){try{return Je(localStorage.getItem(e.selectedPlan))}catch{return``}}function Xe(t){let n=Je(t);try{n&&localStorage.setItem(e.selectedPlan,n)}catch{}return n}function Ze(){try{localStorage.removeItem(e.selectedPlan)}catch{}}function Qe(e=k.route){return Je(qe(e).get(`plan`))}function $e(e=k.route){let t=Qe(e);t&&(k.pendingSignupPlan=Xe(t))}`scrollRestoration`in history&&(history.scrollRestoration=`manual`);function et(){localStorage.removeItem(`verkradar_profile`),localStorage.removeItem(`verkradar_local_user_id`),localStorage.removeItem(`verkradar_saved_opportunities`),localStorage.removeItem(`verkradar_ignored_opportunities`),k.profile=null,k.profileDraft=null,k.profileDraftDirty=!1,k.currentUser=null,k.companyId=null,k.storedMatches=[],k.opportunityActions=[],k.reports=[],k.reportsLoaded=!1,k.reportsLoadError=null,k.reportMessage=null,k.selectedReportId=null,k.profileSaved=!1,k.profileSaveMessage=null,k.profileSaveError=null,k.saved=[],k.ignored=[],k.importRuns=[],k.importRunsLoading=!1,k.importRunsLoaded=!1,k.importRunsError=null,k.importedTedOpportunities=[],k.importedTedOpportunitiesLoading=!1,k.importedTedOpportunitiesLoaded=!1,k.importedTedOpportunitiesError=null,k.adminReports=[],k.adminReportsLoading=!1,k.adminReportsLoaded=!1,k.adminReportsError=null,k.selectedAdminReport=null,k.selectedAdminReportLoading=!1,k.selectedAdminReportError=null,k.sourceCoverage=[],k.sourceCoverageLoading=!1,k.sourceCoverageLoaded=!1,k.sourceCoverageError=null,k.adminCompanies=[],k.adminCompaniesLoading=!1,k.adminCompaniesLoaded=!1,k.adminCompaniesError=null,k.selectedAdminCompanyId=null,k.lastMatchedAt=null}function tt(){return{title:``,buyer:``,sourceName:``,category:``,type:`tender`,deadline:``,published_date:``,location:``,estimated_value:``,url:``,cpv_code:``,difficulty:`medium`,status:`open`,description:``,requirements:``,keywords:``}}function nt(e){let t=tt();Object.keys(t).forEach(n=>{t[n]=String(e.get(n)||``)}),k.adminOpportunityDraft=t}var rt=!1;window.addEventListener(`hashchange`,()=>{let e=location.hash.replace(`#`,``)||`/`,t=Ke(e),n=e!==k.route;if(rt&&e===k.route){rt=!1;return}rt=!1,[`/login`,`/signup`,`/forgot-password`,`/reset-password`].includes(t)&&e!==k.route&&(k.authMessage=null,k.authSubmitting=!1),k.route=e,$e(e),k.isMobileMenuOpen=!1,k.profileMenuOpen=!1,n&&vi(),document.body.classList.remove(`mobile-menu-active`),X(),_t(),j()}),document.addEventListener(`click`,e=>{if(k.dropdown.openKey&&!e.target.closest?.(`.custom-select`)&&qa(),k.profileMenuOpen&&!e.target.closest?.(`.profile-menu`)&&(k.profileMenuOpen=!1,X()),e.target.classList?.contains(`modal-backdrop`)){if(e.preventDefault(),k.selectedAdminCompanyId){k.selectedAdminCompanyId=null,X();return}_i();return}if(k.isMobileMenuOpen&&!e.target.closest?.(`.site-header`)){ot();return}let t=e.target.closest?.(`[data-action]`);if(!t)return;let n=t.dataset.action,r=t.dataset.id;if(n===`close-modal`){if(e.preventDefault(),e.stopPropagation(),k.selectedAdminCompanyId){k.selectedAdminCompanyId=null,X();return}_i();return}if(n===`toggle-mobile-menu`){e.preventDefault(),k.isMobileMenuOpen?ot():at();return}if(n===`mobile-nav`){e.preventDefault(),st(t.dataset.href);return}if(n===`mobile-scroll-to`){e.preventDefault(),ct(t.dataset.target);return}if(n===`toggle-profile-menu`){if(e.preventDefault(),k.isMobileMenuOpen||lt()){k.profileMenuOpen=!1,X();return}k.profileMenuOpen=!k.profileMenuOpen,X();return}if(n===`toggle-language`){e.preventDefault(),He(k.language===`is`?`en`:`is`);return}if(n===`toggle-dropdown`){e.preventDefault();let n=t.dataset.key,r=k.dropdown.openKey===n;k.dropdown.openKey=r?null:n,k.dropdown.focusedIndex=Wa(n),X(),r||Ja();return}if(n===`select-filter`){e.preventDefault();let n=t.dataset.key,r=t.dataset.value;t.dataset.profileField?(H(),k.profileDraft[t.dataset.profileField]=r,U()):k.filters[n]=r,k.dropdown.openKey=null,k.dropdown.focusedIndex=0,X();return}if(n===`toggle-profile-suggestion`){e.preventDefault(),lr(t.dataset.field,t.dataset.value);return}if(n===`scroll-to`){e.preventDefault(),k.isMobileMenuOpen=!1,k.profileMenuOpen=!1,document.body.classList.remove(`mobile-menu-active`);let n=t.dataset.target;if(!n)return;k.route===`/`?(X(),setTimeout(()=>vt(n),0)):(A(`/`),setTimeout(()=>vt(n),50));return}if(n===`go`){e.preventDefault(),k.isMobileMenuOpen=!1,k.profileMenuOpen=!1,document.body.classList.remove(`mobile-menu-active`),A(t.dataset.href);return}if(n===`save`&&pi(r),n===`ignore`&&mi(r),n===`unignore`&&hi(r),n===`details`&&gi(r),n===`admin-report-override`){Qn(r,t.dataset.override||``);return}if(n===`copy-report`&&Gs(),n===`download-report-pdf`&&Ks(),n===`download-admin-report-pdf`){qs();return}if(n===`save-report`&&Kn(),n===`archive-report`){qn(r);return}if(n===`view-report`&&(k.selectedReportId=r,X()),n===`close-archive-report`&&(k.selectedReportId=null,X()),n===`view-admin-report`){k.selectedAdminReportId=r,k.selectedAdminReport=null,k.selectedAdminReportError=null,k.adminActiveTab=`reports`,X(),xt(r);return}if(n===`close-admin-report`){k.selectedAdminReportId=null,k.selectedAdminReport=null,k.selectedAdminReportError=null,X();return}if(n===`copy-admin-report`){Da(r);return}if(n===`admin-tab`&&(k.adminActiveTab=t.dataset.tab||`overview`,k.selectedAdminCompanyId=null,k.selectedAdminReportId=null,X()),n===`view-admin-company`&&(k.selectedAdminCompanyId=r,X()),n===`close-admin-company`&&(k.selectedAdminCompanyId=null,X()),n===`admin-refresh-company-matches`){kt(r);return}if(n===`admin-generate-company-report`){At(r);return}if(n===`admin-review-match`){jt(r,t.dataset.companyId||``,t.dataset.reviewAction||``);return}if(n===`import-ted`&&gn(),n===`import-source-connectors`&&_n(),n===`test-source-connector`&&_n(r),n===`toggle-source-items`&&(k.expandedSourceId=k.expandedSourceId===r?null:r,X()),n===`refresh-admin-status`&&Ft(),n===`hide-imported-opportunity`&&Zn(r,`hidden`),n===`mark-imported-relevant`&&Zn(r,`open`),n===`run-matching`&&Jn(),n===`retry-settings-profile`&&Rn(),n===`show-all-matches`&&(k.filters.label=`all`,X()),n===`show-all-opportunities`&&(k.filters.label=`all_opportunities`,X()),n===`include-national-opportunities`&&(H(),k.profileDraft.nationalProjects=!0,k.profileDraft.locations.includes(`All Iceland`)||(k.profileDraft.locations=[...k.profileDraft.locations,`All Iceland`]),U(),A(`/settings`)),n===`delete-opportunity`&&Xn(r),n===`logout`){if(k.profileMenuOpen=!1,k.isMobileMenuOpen){ot(()=>On());return}On()}n===`load-demo`&&(k.user?Hn(Ue).then(()=>A(`/dashboard`)).catch(e=>{console.error(`Failed to load demo profile:`,e),k.profileSaveError=B(e),X()}):(nr(Ue),k.profile=Ue,A(`/dashboard`))),n===`reset`&&(et(),A(`/`))}),document.addEventListener(`keydown`,e=>{if(e.key===`Escape`&&k.isMobileMenuOpen){e.preventDefault(),ot();return}if(e.key===`Escape`&&k.profileMenuOpen){e.preventDefault(),k.profileMenuOpen=!1,X();return}if(e.key===`Escape`&&k.selectedOpportunityId){e.preventDefault(),_i();return}if(e.key===`Escape`&&k.selectedAdminCompanyId){e.preventDefault(),k.selectedAdminCompanyId=null,X();return}let t=e.target.closest?.(`.custom-select`),n=t?.dataset.key||k.dropdown.openKey;if(!n)return;let r=Ua(n),i=k.dropdown.openKey===n;if(e.key===`Escape`&&i){e.preventDefault(),qa(),Ya(n);return}if((e.key===`ArrowDown`||e.key===`ArrowUp`)&&!i){e.preventDefault(),k.dropdown.openKey=n,k.dropdown.focusedIndex=Wa(n),X(),Ja();return}if(i){if(e.key===`ArrowDown`||e.key===`ArrowUp`){e.preventDefault();let t=e.key===`ArrowDown`?1:-1;k.dropdown.focusedIndex=(k.dropdown.focusedIndex+t+r.length)%r.length,X(),Ja();return}if(e.key===`Enter`||e.key===` `){e.preventDefault();let i=r[k.dropdown.focusedIndex];if(!i)return;let a=t?.querySelector?.(`[data-profile-field]`)?.dataset.profileField;a?(H(),k.profileDraft[a]=i.value,U()):k.filters[n]=i.value,k.dropdown.openKey=null,k.dropdown.focusedIndex=0,X(),Ya(n)}}}),document.addEventListener(`input`,e=>{let t=e.target.closest?.(`[data-auth-field]`);if(t){k.authForm[t.dataset.authField]=t.value;return}let n=e.target.closest?.(`[data-profile-field]`);if(n){H();let e=n.dataset.profileField;n.type===`checkbox`?k.profileDraft[e]=n.checked:n.dataset.profileArray===`true`?k.profileDraft[e]=w(n.value):(n.dataset.profileNumber,k.profileDraft[e]=n.value),U();return}if(e.target.matches(`[data-filter]`)){let t=e.target.dataset.filter;e.target.type===`checkbox`?k.filters[t]=e.target.checked:k.filters[t]=e.target.value,X()}if(e.target.matches(`[data-admin-filter]`)){let t=e.target.dataset.adminFilter;e.target.type===`checkbox`?(k.adminOpportunityFilters[t]=e.target.checked,t===`tedOnly`&&e.target.checked&&(k.adminOpportunityFilters.manualOnly=!1),t===`manualOnly`&&e.target.checked&&(k.adminOpportunityFilters.tedOnly=!1)):k.adminOpportunityFilters[t]=e.target.value,Ai(e.target);return}if(e.target.matches(`[data-admin-opportunity-field]`)){let t=e.target.dataset.adminOpportunityField;k.adminOpportunityDraft={...tt(),...k.adminOpportunityDraft||{},[t]:e.target.value};return}if(e.target.matches(`[data-admin-company-filter]`)){let t=e.target.dataset.adminCompanyFilter;k.adminCompanyFilters[t]=e.target.value,Ai(e.target);return}e.target.matches(`[data-admin-report-mode]`)&&(k.adminReportMode=e.target.value===`all_current`?`all_current`:`new_only`,X())}),document.addEventListener(`change`,e=>{if(e.target.matches(`[data-admin-filter]`)){let t=e.target.dataset.adminFilter;e.target.type===`checkbox`?(k.adminOpportunityFilters[t]=e.target.checked,t===`tedOnly`&&e.target.checked&&(k.adminOpportunityFilters.manualOnly=!1),t===`manualOnly`&&e.target.checked&&(k.adminOpportunityFilters.tedOnly=!1)):k.adminOpportunityFilters[t]=e.target.value,Ai(e.target);return}if(e.target.matches(`[data-import-mode]`)){k.tedImportMode=e.target.value,X();return}if(e.target.matches(`[data-profile-location]`)){H(),k.profileDraft.locations=Array.from(document.querySelectorAll(`[data-profile-location]:checked`)).map(e=>e.value),U();return}let t=e.target.closest?.(`[data-profile-field]`);if(!t)return;H();let n=t.dataset.profileField;k.profileDraft[n]=t.type===`checkbox`?t.checked:t.value,U()}),document.addEventListener(`submit`,async e=>{if(e.target.id===`login-form`){e.preventDefault();let t=new FormData(e.target);Tn(t.get(`email`),t.get(`password`));return}if(e.target.id===`signup-form`){e.preventDefault();let t=new FormData(e.target);wn(t.get(`email`),t.get(`password`));return}if(e.target.id===`forgot-password-form`){e.preventDefault(),En(new FormData(e.target).get(`email`));return}if(e.target.id===`reset-password-form`){e.preventDefault();let t=new FormData(e.target);Dn(t.get(`newPassword`),t.get(`confirmPassword`));return}if(e.target.id===`admin-opportunity-form`){e.preventDefault();let t=new FormData(e.target);nt(t),Yn(t,e.target);return}if(e.target.id===`profile-form`){e.preventDefault(),k.profileSaved=!1,pr(e.target);let t=mr();if(!t.companyName||!t.kennitala||!t.contactEmail||!t.billingEmail||!t.contactName||!t.phone||!t.address||!t.industry){V(k.language===`is`?`Fylltu út fyrirtækisnafn, kennitölu, reikningsupplýsingar, tengilið og atvinnugrein.`:`Please fill in company name, kennitala, billing details, contact details and industry.`,`error`);return}k.isSavingProfile=!0,k.profileSaved=!1,k.profileSaveMessage=null,k.profileSaveError=null,X();let n=k.route!==`/settings`;try{if(await Hn(t),await In({overwriteDraft:!0}),k.profileLoadError)throw Error(`Profile saved, but the saved profile could not be reloaded. ${k.profileLoadError}`);k.profileSaveMessage=`Refreshing matches...`,k.profileSaveError=null,X();let e=await Jn();if(k.matchStatus?.type===`error`)k.profileSaveMessage=`Profile saved, but matching could not be refreshed. Try Run matching.`;else{let t=e===1?`opportunity`:`opportunities`;k.profileSaveMessage=n?`Profile saved — ${e} relevant ${t} found. Redirecting...`:`Profile saved — ${e} relevant ${t} found.`}k.profileSaved=!0,X(),clearTimeout(window.__profileSavedTimeout),window.__profileSavedTimeout=setTimeout(()=>{k.profileSaved=!1,X()},1800),n&&setTimeout(()=>A(`/dashboard`),800)}catch(e){console.error(`Failed to save company profile:`,e),k.profileSaveError=B(e),k.profileSaveMessage=null,k.profileSaved=!1}finally{k.isSavingProfile=!1,X()}}}),window.addEventListener(`focus`,it),document.addEventListener(`visibilitychange`,()=>{document.visibilityState===`visible`&&it()});function it(){k.route===`/settings`&&k.profileDraftDirty&&(k.profileLoading=!1,k.profileLoaded=!0,X())}function at(){ut(),k.isMobileMenuOpen=!0,k.profileMenuOpen=!1,document.body.classList.add(`mobile-menu-active`),X()}function ot(e){if(!k.isMobileMenuOpen){typeof e==`function`&&e();return}k.isMobileMenuOpen=!1,k.profileMenuOpen=!1,document.body.classList.remove(`mobile-menu-active`),X(),typeof e==`function`&&setTimeout(e,260)}function st(e){if(e){if(!k.isMobileMenuOpen){A(e);return}ot(()=>A(e))}}function ct(e){if(!e)return;let t=()=>{k.route===`/`?(X(),setTimeout(()=>vt(e),0)):(A(`/`),setTimeout(()=>vt(e),50))};if(!k.isMobileMenuOpen){t();return}ot(t)}function lt(){return typeof window<`u`&&window.matchMedia?.(`(max-width: 920px)`).matches}function ut(){let e=document.querySelector(`.site-header`);e&&document.documentElement.style.setProperty(`--header-height`,`${Math.ceil(e.getBoundingClientRect().height)}px`)}function A(e){e||=`/`;let t=[`/login`,`/signup`,`/forgot-password`,`/reset-password`],n=Ke(e);if(t.includes(n)&&e!==k.route&&(k.authMessage=null,k.authSubmitting=!1),k.isMobileMenuOpen=!1,k.profileMenuOpen=!1,document.body.classList.remove(`mobile-menu-active`),k.route===e){X(),_t(),j();return}vi(),k.route=e,$e(e),rt=!0,location.hash=e,X(),_t(),j()}function dt(){return!k.user&&!k.currentUser?`/`:k.profile?`/dashboard`:`/onboarding`}function ft(){return!k.user&&!k.currentUser?`/signup`:k.profile?`/dashboard`:`/onboarding`}function pt(e=k.route){let t=String(e||``);if(mt(t))return!1;let n=Ke(t);return[`/`,`/login`,`/signup`,`/forgot-password`].includes(n)||t.startsWith(`access_token=`)||t.startsWith(`code=`)||t.includes(`type=signup`)||t.includes(`type=email_change`)}function mt(e=k.route){let t=String(e||``);return t===`/reset-password`||t.startsWith(`/reset-password`)||t.includes(`type=recovery`)}function ht(e){k.route=e,location.hash.replace(`#`,``)!==e&&history.replaceState(null,``,`#${e}`)}function gt({replace:e=!1}={}){if(!k.user&&!k.currentUser||!pt())return!1;let t=dt();return k.authMessage=null,e?ht(t):A(t),!0}function j(){k.route===`/report`&&k.companyId&&!k.reportsLoaded&&!k.reportArchiveLoading&&Gn(),k.route===`/admin`&&k.isAdmin&&(!k.importRunsLoaded&&!k.importRunsLoading&&yt(),!k.adminReportsLoaded&&!k.adminReportsLoading&&bt(),!k.sourceCoverageLoaded&&!k.sourceCoverageLoading&&St(),!k.adminCompaniesLoaded&&!k.adminCompaniesLoading&&Ct(),!k.adminReviewLoaded&&!k.adminReviewLoading&&wt(),!k.importedTedOpportunitiesLoaded&&!k.importedTedOpportunitiesLoading&&vn().then(X).catch(e=>{console.error(`Failed to load latest TED opportunities:`,e)}))}function _t(){window.scrollTo(0,0)}function vt(e){let t=document.getElementById(e);t&&t.scrollIntoView({behavior:`smooth`,block:`start`})}async function M(){k.isLoadingOpportunities=!0,k.opportunityLoadError=null,X();try{if(!b)throw Error(`Supabase client not configured`);let{data:e,error:t}=await b.from(`opportunities`).select(`*, sources(name, source_type)`).eq(`status`,`open`).order(`deadline`,{ascending:!0});if(t)throw t;!e||e.length===0?(k.opportunities=window.VERKRADAR_OPPORTUNITIES||[],k.storedMatches=[],k.opportunityLoadError=`Using demo data. Supabase has no opportunities yet.`):(k.opportunities=e.map(It),k.opportunityLoadError=null,k.companyId&&(await ui(),await Wn()))}catch(e){console.error(`Failed to load Supabase opportunities:`,e),k.opportunities=window.VERKRADAR_OPPORTUNITIES||[],k.storedMatches=[],k.opportunityLoadError=`Using demo data. Supabase connection failed.`}finally{k.isLoadingOpportunities=!1,X()}}async function yt(){if(!b||!k.isAdmin){k.importRuns=[],k.importRunsLoaded=!0;return}k.importRunsLoading=!0,k.importRunsError=null,X();try{let{data:e,error:t}=await b.from(`import_runs`).select(`*`).order(`started_at`,{ascending:!1}).limit(10);if(t)throw t;k.importRuns=e||[],k.importRunsLoaded=!0}catch(e){console.error(`Failed to load import runs:`,e),k.importRuns=[],k.importRunsError=B(e)}finally{k.importRunsLoading=!1,k.importRunsLoaded=!0,X()}}async function bt(){if(!b||!k.isAdmin){k.adminReports=[],k.adminReportsLoaded=!0;return}k.adminReportsLoading=!0,k.adminReportsError=null,X();try{let{data:e,error:t}=await b.from(`reports`).select(`
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
      `).order(`created_at`,{ascending:!1}).limit(10);if(t)throw t;k.adminReports=e||[],k.adminReportsLoaded=!0}catch(e){console.error(`Failed to load admin reports:`,e),k.adminReports=[],k.adminReportsError=B(e)}finally{k.adminReportsLoading=!1,k.adminReportsLoaded=!0,X()}}async function xt(e){if(!(!b||!k.isAdmin||!e)){k.selectedAdminReportLoading=!0,k.selectedAdminReportError=null,X();try{let{data:t,error:n}=await b.from(`reports`).select(`
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
      `).eq(`id`,e).single();if(n)throw n;k.selectedAdminReportId===e&&(k.selectedAdminReport=t)}catch(t){console.error(`Failed to load admin report details:`,t),k.selectedAdminReportId===e&&(k.selectedAdminReport=null,k.selectedAdminReportError=B(t))}finally{k.selectedAdminReportId===e&&(k.selectedAdminReportLoading=!1,X())}}}async function St(){if(!b||!k.isAdmin){k.sourceCoverage=[],k.sourceCoverageLoaded=!0;return}k.sourceCoverageLoading=!0,k.sourceCoverageError=null,X();try{let{data:e,error:t}=await b.from(`sources`).select(`
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
      `).order(`name`,{ascending:!0});if(t)throw t;let n=(e||[]).map(e=>({...e,source_status:Array.isArray(e.source_status)?e.source_status[0]:e.source_status,source_connectors:Array.isArray(e.source_connectors)?e.source_connectors[0]:e.source_connectors})),r=n.map(e=>e.id).filter(Boolean),i={};if(r.length){let{data:e,error:t}=await b.from(`opportunities`).select(`id, source_id, title, buyer, deadline, status, url, raw_payload, created_at, published_date`).in(`source_id`,r).eq(`status`,`open`).order(`created_at`,{ascending:!1}).limit(500);if(t)throw t;i=(e||[]).reduce((e,t)=>(e[t.source_id]||(e[t.source_id]=[]),e[t.source_id].push(t),e),{})}k.sourceCoverage=n.map(e=>{let t=i[e.id]||[];return{...e,opportunityStats:_a(t),latestOpportunities:t.slice(0,8)}}),k.sourceCoverageLoaded=!0}catch(e){console.error(`Failed to load source coverage:`,e),k.sourceCoverage=[],k.sourceCoverageError=B(e)}finally{k.sourceCoverageLoading=!1,k.sourceCoverageLoaded=!0,X()}}async function Ct(){if(!b||!k.isAdmin){k.adminCompanies=[],k.adminCompaniesLoaded=!0;return}k.adminCompaniesLoading=!0,k.adminCompaniesError=null,X();try{let{data:e,error:t}=await b.from(`companies`).select(`*`).order(`created_at`,{ascending:!1});if(t)throw t;let n=e||[],r=n.map(e=>e.id).filter(Boolean),i=[],a=[],o=[],s=[],c=[];if(r.length){let[e,t,n,l,u]=await Promise.all([b.from(`company_services`).select(`company_id, service`).in(`company_id`,r),b.from(`company_locations`).select(`company_id, location`).in(`company_id`,r),b.from(`company_keywords`).select(`company_id, keyword, type`).in(`company_id`,r),b.from(`opportunity_matches`).select(`company_id, opportunity_id, match_score, match_label, safety_status, opportunities(title, buyer, source_id, sources(name))`).in(`company_id`,r),b.from(`reports`).select(`id, company_id, title, created_at, period_start, period_end, status`).in(`company_id`,r).order(`created_at`,{ascending:!1})]);i=e.error?[]:e.data||[],a=t.error?[]:t.data||[],o=n.error?[]:n.data||[],s=l.error?[]:l.data||[],c=u.error?[]:u.data||[]}k.adminCompanies=n.map(e=>Et(e,{services:i.filter(t=>t.company_id===e.id),locations:a.filter(t=>t.company_id===e.id),keywords:o.filter(t=>t.company_id===e.id),matches:s.filter(t=>t.company_id===e.id),reports:c.filter(t=>t.company_id===e.id)})),k.adminCompaniesLoaded=!0}catch(e){console.error(`Failed to load admin companies:`,e),k.adminCompanies=[],k.adminCompaniesError=B(e)}finally{k.adminCompaniesLoading=!1,k.adminCompaniesLoaded=!0,X()}}async function wt(){if(!b||!k.isAdmin){k.adminReviewMatches=[],k.adminReviewLoaded=!0;return}k.adminReviewLoading=!0,k.adminReviewError=null,X();try{let{data:e,error:t}=await b.from(`opportunity_matches`).select(`
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
      `).eq(`safety_status`,`needs_review`).eq(`review_required`,!0).order(`calculated_at`,{ascending:!1}).limit(100);if(t)throw t;k.adminReviewMatches=(e||[]).map(Tt),k.adminReviewLoaded=!0}catch(e){console.error(`Failed to load admin review queue:`,e),k.adminReviewMatches=[],k.adminReviewError=B(e)}finally{k.adminReviewLoading=!1,k.adminReviewLoaded=!0,X()}}function Tt(e){let t=It(e.opportunities||{});return{id:e.id,companyId:e.company_id,opportunityId:e.opportunity_id,companyName:e.companies?.company_name||`Unknown company`,opportunity:t,matchScore:Number(e.match_score||0),matchLabel:e.match_label||Jr(Number(e.match_score||0)),matchReasons:ln(t,Array.isArray(e.match_reasons)?e.match_reasons:[]),risks:Array.isArray(e.risks)?e.risks:[],safetyStatus:e.safety_status||`needs_review`,safetyReasons:Array.isArray(e.safety_reasons)?e.safety_reasons:[],alertEligible:!!e.alert_eligible,reviewRequired:!!e.review_required,calculatedAt:e.calculated_at}}function Et(e,t){let n=T((t.services||[]).map(e=>e.service)),r=T((t.locations||[]).map(e=>e.location)),i=T((t.keywords||[]).filter(e=>e.type===`include`).map(e=>e.keyword)),a=T((t.keywords||[]).filter(e=>e.type===`exclude`).map(e=>e.keyword)),o=t.reports||[],s=(t.matches||[]).filter(e=>e.safety_status!==`hidden`),c=!!(e.company_name&&e.contact_email&&e.industry&&n.length&&(r.length||e.base_location||T(e.service_areas).length));return{id:e.id,ownerId:e.owner_id||``,companyName:e.company_name||`Unnamed company`,contactEmail:e.contact_email||``,kennitala:e.kennitala||``,billingEmail:e.billing_email||``,contactName:e.contact_name||``,phone:e.phone||``,address:e.address||``,website:e.website||``,industry:e.industry||``,plan:e.selected_plan||e.plan||e.subscription_plan||`Demo`,selectedPlan:e.selected_plan||e.plan||``,billingStatus:e.billing_status||``,trialStartedAt:e.trial_started_at||``,trialEndsAt:e.trial_ends_at||``,profileStatus:c?`Complete`:`Incomplete`,createdAt:e.created_at,services:n,locations:r,includeKeywords:i,excludeKeywords:a,baseLocation:e.base_location||``,serviceAreas:T(e.service_areas),willingToTravel:!!e.willing_to_travel,nationalProjects:!!e.national_projects,remoteProjects:!!e.remote_projects,minimumProjectValueForTravel:e.minimum_project_value_for_travel,minProjectValue:e.min_project_value,maxProjectValue:e.max_project_value,allowUnknownValue:!!e.allow_unknown_value,includeLowConfidence:!!e.include_low_confidence,autoAlertMode:e.auto_alert_mode||`auto_safe_only`,reportFrequency:e.report_frequency||`weekly`,reportDay:e.report_day||`monday`,deadlineReminders:!!e.deadline_reminders,matchCount:s.length,savedCount:0,latestReportDate:o[0]?.created_at||``,latestMatches:s.slice(0,8),latestReports:o.slice(0,5)}}function Dt(e,t){k.adminCompanyActions={...k.adminCompanyActions||{},[e]:t}}function Ot(e){let t={...k.adminCompanyActions||{}};delete t[e],k.adminCompanyActions=t}async function kt(e,t={}){if(!k.isAdmin)return k.adminMessage={type:`error`,text:`You do not have access to this action.`},X(),[];let n=(k.adminCompanies||[]).find(t=>t.id===e);if(!n)return k.adminMessage={type:`error`,text:`Company not found. Refresh Admin companies and try again.`},X(),[];t.skipAction||Dt(e,`refresh`),t.silent||(k.adminMessage=null,X());try{let r=await Mt(e,`refresh_matches`),i=Number(r.matches_refreshed||0);return await Promise.all([Ct(),wt()]),k.companyId===e&&await Wn(),t.silent||(k.adminMessage={type:`success`,text:`Refreshed ${i} eligible matches for ${n.companyName}.`},V(`Company matches refreshed`,`success`),X()),r}catch(e){if(console.error(`Failed to refresh admin company matches:`,e),k.adminMessage={type:`error`,text:`Failed to refresh matches for ${n.companyName}. ${B(e)}`},X(),t.throwOnError)throw e;return[]}finally{t.skipAction||(Ot(e),X())}}async function At(e){if(!k.isAdmin){k.adminMessage={type:`error`,text:`You do not have access to this action.`},X();return}let t=(k.adminCompanies||[]).find(t=>t.id===e);if(!t){k.adminMessage={type:`error`,text:`Company not found. Refresh Admin companies and try again.`},X();return}Dt(e,`report`),k.adminMessage=null,X();try{let n=await Mt(e,`generate_report`,{reportMode:k.adminReportMode||`new_only`});if(!n.report_created){k.adminMessage={type:`error`,text:Pt(n,t.companyName)},X();return}await Promise.all([bt(),Ct(),wt()]),k.companyId===e&&await Gn(),k.adminMessage={type:`success`,text:`Generated ${Nt(n.report_mode||k.adminReportMode)} report for ${t.companyName} with ${Number(n.report_items||0)} item${Number(n.report_items||0)===1?``:`s`}. Open the Reports tab to review it.`},V(`Company report generated`,`success`)}catch(e){console.error(`Failed to generate admin company report:`,e),k.adminMessage={type:`error`,text:`Failed to generate report for ${t.companyName}. ${B(e)}`}}finally{Ot(e),X()}}async function jt(e,t,n){if(!k.isAdmin){k.adminMessage={type:`error`,text:`You do not have access to this action.`},X();return}if(!e||!t||![`approve`,`reject`].includes(n)){k.adminMessage={type:`error`,text:`Missing review action details.`},X();return}k.adminReviewActions={...k.adminReviewActions||{},[e]:n},k.adminMessage=null,X();try{let r=await Mt(t,`review_match`,{matchId:e,reviewAction:n});await Promise.all([wt(),Ct()]),k.companyId===t&&await Wn(),k.adminMessage={type:`success`,text:r.message||(n===`approve`?`Match approved for customer reports.`:`Match rejected and hidden.`)},V(n===`approve`?`Match approved`:`Match rejected`,`success`)}catch(e){console.error(`Failed to review admin match:`,e),k.adminMessage={type:`error`,text:`Failed to ${n} match. ${B(e)}`}}finally{let t={...k.adminReviewActions||{}};delete t[e],k.adminReviewActions=t,X()}}async function Mt(e,t,n={}){let r=mn();if(!r)throw Error(`Admin company actions are not configured. Set window.VERKRADAR_ADMIN_COMPANY_ACTIONS_URL or window.VERKRADAR_SUPABASE_URL.`);let i=await fetch(r,{method:`POST`,headers:await yn(),body:JSON.stringify({companyId:e,action:t,...n})}),a=await i.json().catch(()=>({}));if(!i.ok)throw Error(a.error||`Admin company action failed with status ${i.status}`);return a}function Nt(e){return e===`all_current`?`all current matches`:`new opportunities`}function Pt(e,t){let n=e?.report_mode||k.adminReportMode||`new_only`;return e?.message||(n===`new_only`?`No new eligible opportunities found since the previous report.`:`No customer-report-ready matches found for ${t}.`)}async function Ft(){k.isAdmin&&(await Promise.all([yt(),vn(),bt(),St(),Ct(),wt()]),V(`Automation status refreshed`,`success`),X())}function It(e){let t=e.raw_payload&&typeof e.raw_payload==`object`?e.raw_payload:{},n=e.sources?.name||t.source_name||``,r=P(t.quality_status||t.qualityStatus,{source:n,sourceType:e.sources?.source_type||``,title:e.title||``,description:Rt(e.description||``,t,n,e.title||``),rawPayload:t}),i=F({source:n,sourceType:e.sources?.source_type||``,title:e.title||``,description:e.description||``,category:e.category||``,keywords:Array.isArray(e.keywords)?e.keywords:[],qualityStatus:r,rawPayload:t});return{id:e.id,externalId:e.external_id||``,countryCode:e.country_code||``,title:e.title,buyer:Me(e.buyer,n,t),source:n||`Supabase`,sourceType:e.sources?.source_type||``,category:e.category||`Other`,type:e.type||`tender`,description:e.description||``,deadline:e.deadline,deadlineAt:t.deadline_at||``,publishedDate:e.published_date,createdAt:e.created_at,location:Ht(e.location||`Unknown`,t,n,e.title||``,e.description||``),estimatedValue:e.estimated_value,currency:e.currency||`ISK`,url:e.url||``,cpvCode:e.cpv_code||``,requirements:Array.isArray(e.requirements)?e.requirements:[],keywords:Array.isArray(e.keywords)?e.keywords:[],difficulty:e.difficulty||`medium`,status:e.status||`open`,qualityStatus:r,intent:i,rawPayload:t}}function Lt(e){let t=It(e.opportunities||{});return{...t,matchScore:Number(e.match_score||0),matchLabel:e.match_label||Jr(Number(e.match_score||0)),matchReasons:ln(t,Array.isArray(e.match_reasons)?e.match_reasons:[]),risks:Array.isArray(e.risks)?e.risks:[],nextSteps:Array.isArray(e.next_steps)?e.next_steps:[],safetyStatus:e.safety_status||`needs_review`,safetyReasons:Array.isArray(e.safety_reasons)?e.safety_reasons:[],alertEligible:!!e.alert_eligible,reviewRequired:!!e.review_required,reviewedAt:e.reviewed_at||``,reviewNote:e.review_note||``}}function Rt(e,t={},n=``,r=``){t=t&&typeof t==`object`?t:{};let i=String(e||``).replace(/\s+/g,` `).trim(),a=E(n);if(!i)return``;if(a.includes(`rikiskaup`)||a.includes(`utbodsvefur`)){let e=zt(i,t,r);if(e)return e;if(Bt(i)||Vt(i))return k.language===`is`?`Útboðstilkynning flutt inn af Útboðsvef. Opnið upprunasíðuna til að staðfesta kaupanda, skilafrest, kröfur og útboðsgögn.`:`Procurement notice imported from Útboðsvefur. Open the source page to confirm buyer, deadline, requirements and tender documents.`}return i}function zt(e,t={},n=``){t=t&&typeof t==`object`?t:{};let r=String(e||``).replace(/\s+/g,` `).trim();if(!r)return``;let i=[r.search(/F\.h\.[^.]{0,280}ósk(?:að|ar) eftir tilboðum/i),r.search(/(?:Reykjavíkurborg|sveitarfélag|bærinn|kaupandi)[^.]{0,280}ósk(?:að|ar) eftir tilboðum/i),r.search(/óskar eftir tilboðum|óskað eftir tilboðum|oskar eftir tilbodum|oskad eftir tilbodum/i),r.search(/verkefnið felst|verkið felst|verkið felur|gatna-|gatnagerð|stígagerð/i)].filter(e=>e>=0);if(!i.length)return``;let a=Math.min(...i),o=r.slice(a).search(/\s+(Nánari upplýsingar|Útboðsgögn afhent|Opnun tilboða|Opnun tilboda|Auglýsandi|Flokkar|Tengdar fréttir|Fjöldi útboð)\b/i),s=o>120?a+o:a+1200,c=[r.slice(a,s).trim()],l=t.extracted_deadline_text||t.deadline_text||``;l&&!c[0].includes(String(l))&&c.push(`Skilafrestur: ${l}`);let u=be(c).join(` `).replace(/^(Útboðsvefur\s*){1,}/i,``).replace(/\s+/g,` `).trim();return Vt(u)?``:u||n}function Bt(e){return/Procurement notice imported from Útboðsvefur|Open the source page for full buyer details/i.test(String(e||``))}function Vt(e){let t=String(e||``);return[`Framkvæmdasýslan`,`Ríkiseignir`,`Garðabær`,`Grímsnes`,`Fjöldi útboð`,`Útboðsvefur.is - Opinber útboð`].filter(e=>t.includes(e)).length>=3||/^Útboðsvefur\s+Útboðsvefur\.is/i.test(t)}function Ht(e,t={},n=``,r=``,i=``){let a=Ut(`${r} ${i} ${JSON.stringify(t||{})}`),o=String(e||``).trim();return a&&(!o||/unknown|all iceland|iceland/i.test(o))?a:o||a||`Unknown`}function Ut(e){let t=E(e);return t.includes(`vogabyggd`)||t.includes(`reykjavikurborg`)||t.includes(`strandstigur`)?`Reykjavík / Höfuðborgarsvæðið`:``}function N(e){if(!e||e.status!==`open`||!e.url||e.url===`#`||x(e.deadline)<0||Wt(e)||e.rawPayload?.extraction_method===`parent_article_with_child_opportunities`||hs(e)||Yt(e))return!1;if(!ro(e))return!0;let t=sn(e);return[`IS`,`NO`,`DK`,`SE`,`FI`].includes(t)}function Wt(e){let t=E(e?.source||``),n=E(e?.title||``),r=E(e?.externalId||``),i=E(e?.sourceType||``),a=e?.rawPayload||{},o=`${t} ${n} ${r} ${i}`;return!!(a.is_demo===!0||a.demo===!0||t===`private lead`||t.includes(`private lead`)||t===`grant portal`||t.includes(`grant portal`)||t===`manual test`||t.includes(`manual test`)||[`demo`,`test`,`sample`,`mock`,`fake`].some(e=>i.includes(e))||/\b(demo|test|sample|mock|fake|manual)\b/.test(o)||n.includes(`manual test`)||n.includes(`municipal websites example`)||r.includes(`demo`)||r.includes(`test`))}function P(e,t={}){let n=String(e||``).toLowerCase(),r=Gt(t?.rawPayload?.opportunity_intent||t?.rawPayload?.intent);if(r===`confirmed_tender`)return`confirmed_tender`;if(r===`early_opportunity`||r===`market_signal`)return`early_signal`;if(r===`news_context`||r===`not_opportunity`)return`needs_review`;if(ro(t))return`confirmed_tender`;if(I(t)){let e=Kt(t);return[`tender_awarded`,`awarded`,`already_tendered`,`announced`].includes(e)?`confirmed_tender`:e===`upcoming_tender`?`early_signal`:`needs_review`}if(n===`early_signal`||n===`needs_review`)return n;let i=L(t);return R(i,[`senn í útboð`,`senn i utbod`])?`early_signal`:Jt(i)?`confirmed_tender`:an(t?.title||``)&&!Jt(i)?`needs_review`:nn(i)?`early_signal`:(on(i),`needs_review`)}function Gt(e){return{confirmed:`confirmed_tender`,confirmed_tender:`confirmed_tender`,likely_opportunity:`confirmed_tender`,verified:`confirmed_tender`,early_signal:`early_opportunity`,early_opportunity:`early_opportunity`,upcoming_tender:`early_opportunity`,market_signal:`market_signal`,project_signal:`market_signal`,needs_review:`market_signal`,news_context:`news_context`,news:`news_context`,noise:`not_opportunity`,not_opportunity:`not_opportunity`,stale_opportunity:`not_opportunity`,stale:`not_opportunity`,expired:`not_opportunity`}[String(e||``).toLowerCase().trim()]||``}function F(e={}){let t=Gt(e?.rawPayload?.opportunity_intent||e?.rawPayload?.intent),n=String(e?.rawPayload?.admin_report_status||``).toLowerCase();if(n===`include`)return`confirmed_tender`;if([`hidden`,`hide`,`noise`,`deleted`].includes(n))return t||`not_opportunity`;if(t)return t;if(ro(e))return`confirmed_tender`;let r=L(e),i=e?.title||``;if(I(e)){let t=Kt(e);return[`tender_awarded`,`awarded`,`already_tendered`,`announced`].includes(t)?`confirmed_tender`:t===`upcoming_tender`?`early_opportunity`:`market_signal`}return Jt(r)?`confirmed_tender`:an(i)||on(r)?`news_context`:tn(r)?`early_opportunity`:(rn(r),`market_signal`)}function I(e){return e?.rawPayload?.extraction_method===`vegagerdin_article_project_parser`}function Kt(e){let t=String(e?.rawPayload?.tender_state||``).trim(),n=qt(e),r={awarded:`tender_awarded`,open_or_published:`announced`,planned_tender:`upcoming_tender`,unclear:`project_signal`}[t]||t;return n===`tender_awarded`?`tender_awarded`:n===`already_tendered`&&![`tender_awarded`,`announced`].includes(r)?`already_tendered`:n===`announced`&&![`tender_awarded`,`already_tendered`].includes(r)?`announced`:n===`upcoming_tender`&&[``,`project_signal`,`needs_review`,`unclear`].includes(r)?`upcoming_tender`:r||n}function qt(e){let t=L(e);return R(t,[`lægstbjóðandi`,`laegstbjodandi`,`samningur var`,`samið var`,`samid var`,`skrifað var undir verksamning`,`skrifad var undir verksamning`])?`tender_awarded`:R(t,[`útboð var auglýst`,`utbod var auglyst`,`útboðið var auglýst`,`utbodid var auglyst`,`útboð hefur farið fram`,`utbod hefur farid fram`,`útboðið hefur farið fram`,`utbodid hefur farid fram`,`boðið út`,`bodid ut`,`verkið var boðið út`,`verkid var bodid ut`,`útboð var opnað`,`utbod var opnad`,`tilboð opnuð`,`tilbod opnud`])?`already_tendered`:R(t,[`óskað eftir tilboðum`,`oskad eftir tilbodum`,`tilboðsfrestur`,`tilbodsfrestur`,`skilafrestur`,`verðfyrirspurn`,`verdfyrirspurn`,`rammasamningur`,`forval`])?`announced`:R(t,[`áætlað útboð`,`aaetlad utbod`,`áætlað er að bjóða út`,`aaetlad er ad bjoda ut`,`fyrirhugað útboð`,`fyrirhugad utbod`,`senn í útboð`,`senn i utbod`,`útboð verður`,`utbod verdur`])?`upcoming_tender`:`project_signal`}function L(e){return E([e?.title,e?.description,e?.category,e?.source,...Array.isArray(e?.keywords)?e.keywords:[]].filter(Boolean).join(` `))}function R(e,t){let n=E(e);return t.some(e=>n.includes(E(e)))}function Jt(e){return R(e,[`útboð`,`utbod`,`útboðsauglýsing`,`utbodsauglysing`,`tilboð`,`tilboðum`,`tilbod`,`tilbodum`,`óskað eftir tilboðum`,`oskad eftir tilbodum`,`verðfyrirspurn`,`verdfyrirspurn`,`innkaup`,`rammasamningur`,`forval`,`tender`,`procurement`,`skilafrestur`,`útboðsgögn`,`utbodsgogn`])}function Yt(e={}){let t=e.rawPayload||{};return t.stale_status===`stale_or_expired`||t.opportunity_intent===`stale_opportunity`?!0:Xt({title:e.title,description:e.description,content:[e.category,e.source,Array.isArray(e.keywords)?e.keywords.join(` `):``].filter(Boolean).join(` `),publishedDate:e.publishedDate,deadline:e.deadline,sourceName:e.source,sourceType:e.sourceType,connectorType:t.connector_type}).isStale}function Xt(e={}){let t=String(e.deadline||``).slice(0,10);if(t&&x(t)>=0)return{isStale:!1,reason:``,thresholdDays:null,ageDays:null,oldYears:[],expiredKeywords:[]};let n=E([e.title,e.description,e.content].filter(Boolean).join(` `)),r=Qt(n),i=$t(n),a=en(e.publishedDate),o=a?Math.floor((Date.now()-new Date(`${a}T00:00:00Z`).getTime())/864e5):null,s=Zt(e)?45:60;return r.length?{isStale:!0,reason:`Old year detected (${r.join(`, `)}) and no future deadline found.`,thresholdDays:s,ageDays:o,oldYears:r,expiredKeywords:i}:i.length?{isStale:!0,reason:`Expired/result wording detected (${i.slice(0,3).join(`, `)}) and no future deadline found.`,thresholdDays:s,ageDays:o,oldYears:r,expiredKeywords:i}:o!==null&&o>s?{isStale:!0,reason:`Published ${o} days ago with no current deadline.`,thresholdDays:s,ageDays:o,oldYears:r,expiredKeywords:i}:{isStale:!1,reason:``,thresholdDays:s,ageDays:o,oldYears:r,expiredKeywords:i}}function Zt(e={}){let t=E(`${e.sourceName||``} ${e.sourceType||``} ${e.connectorType||``}`);return String(e.connectorType||``)===`rss_feed`&&[`municipal`,`sveitarfelag`,`akranes`,`borgarbyggd`,`arborg`,`selfoss`,`gardabaer`,`reykjanesbaer`,`hafnarfjordur`,`mosfellsbaer`,`kopavogur`,`mulathing`,`fjardabyggd`].some(e=>t.includes(E(e)))}function Qt(e){let t=new Date().getUTCFullYear(),n=new Set;return String(e||``).replace(/\b(20[0-9]{2})\b/g,(e,r)=>{let i=Number(r);return i>=2020&&i<t&&n.add(i),r}),Array.from(n).sort()}function $t(e){return`niðurstaða útboðs.nidurstada utbods.niðurstöður útboðs.nidurstodur utbods.opnun tilboða.opnun tilboda.tilboð opnuð.tilbod opnud.lokið.lokid.lokið útboði.lokid utbodi.búið.buid.útrunnið.ut runnid.eldri útboð.eldri utbod.útboðssaga.utbodssaga.samningur gerður.samningur gerdur.verksamningur.awarded.tender results.contract awarded.expired`.split(`.`).filter(t=>R(e,[t]))}function en(e){if(!e)return``;let t=new Date(e);return Number.isNaN(t.getTime())?``:t.toISOString().slice(0,10)}function tn(e){return R(e,[`senn í útboð`,`senn i utbod`,`áætlað útboð`,`aaetlad utbod`,`áætlað er að bjóða út`,`aaetlad er ad bjoda ut`,`fyrirhugað útboð`,`fyrirhugad utbod`,`markaðskönnun`,`markadskonnun`,`rfi`])}function nn(e){return tn(e)?!0:R(e,[`áætlaðar framkvæmdir`,`aaetladar framkvaemdir`,`fyrirhugaðar framkvæmdir`,`fyrirhugadar framkvaemdir`,`framkvæmdir hefjast`,`framkvaemdir hefjast`,`malbikunarframkvæmdir`,`malbikunarframkvaemdir`,`vegaframkvæmdir`,`vegaframkvaemdir`,`brúargerð`,`bruargerd`,`jarðvinna`,`jardvinna`,`gatnagerð`,`gatnagerd`])}function rn(e){return R(e,[`áætlaðar framkvæmdir`,`aaetladar framkvaemdir`,`fyrirhugaðar framkvæmdir`,`fyrirhugadar framkvaemdir`,`framkvæmdir hefjast`,`framkvaemdir hefjast`,`malbikunarframkvæmdir`,`malbikunarframkvaemdir`,`vegaframkvæmdir`,`vegaframkvaemdir`,`brúargerð`,`bruargerd`,`jarðvinna`,`jardvinna`,`gatnagerð`,`gatnagerd`,`fræsing`,`fraesing`])}function an(e){return R(e,[`lokun`,`lokað`,`lokad`,`lokanir`,`umferð`,`umferd`,`tafir`,`hjáleið`,`hjaleid`,`akstursleið`,`akstursleid`,`vegfarendur`,`frétt`,`frett`,`myndband`,`tekur á sig mynd`,`tekur a sig mynd`,`opið aftur`,`opid aftur`])}function on(e){return R(e,[`lokun`,`lokanir`,`umferð`,`umferd`,`dagskrá`,`dagskra`,`skráning`,`skraning`,`myndband`,`ráðstefna`,`radstefna`,`kynningarfundur`,`tilkynning`,`fundur`,`fjölskylduganga`,`fjolskylduganga`,`tafir`,`kynnt`,`styrkur`,`frétt`,`frett`,`viðburður`,`vidburdur`])}function sn(e){let t=cn(e.countryCode);if(t)return t;let n=E(Vr(e));return n.includes(`iceland`)||n.includes(`island`)||n.includes(`reykjavik`)||n.includes(`capital area`)||n.includes(`hofudborgarsvaedid`)||n.includes(`east iceland`)||n.includes(`west iceland`)||n.includes(`north iceland`)||n.includes(`south iceland`)||n.includes(`sudurnes`)?`IS`:n.includes(`norway`)?`NO`:n.includes(`denmark`)?`DK`:n.includes(`sweden`)?`SE`:n.includes(`finland`)?`FI`:``}function cn(e){return{IS:`IS`,ISL:`IS`,ICELAND:`IS`,ÍSLAND:`IS`,NO:`NO`,NOR:`NO`,NORWAY:`NO`,DK:`DK`,DNK:`DK`,DENMARK:`DK`,SE:`SE`,SWE:`SE`,SWEDEN:`SE`,FI:`FI`,FIN:`FI`,FINLAND:`FI`}[String(e||``).trim().toUpperCase()]||``}function ln(e,t){return Br(e)?t:t.filter(e=>!/^Located in your selected region:/i.test(String(e||``)))}function un(){k.authForm={email:``,password:``,newPassword:``,confirmPassword:``}}function dn(){k.authForm.newPassword=``,k.authForm.confirmPassword=``}function fn(){return window.VERKRADAR_TED_IMPORT_URL?window.VERKRADAR_TED_IMPORT_URL:window.VERKRADAR_SUPABASE_URL?`${window.VERKRADAR_SUPABASE_URL}/functions/v1/import-ted`:`${ye}/functions/v1/import-ted`}function pn(){return window.VERKRADAR_SOURCE_CONNECTOR_IMPORT_URL?window.VERKRADAR_SOURCE_CONNECTOR_IMPORT_URL:window.VERKRADAR_SUPABASE_URL?`${window.VERKRADAR_SUPABASE_URL}/functions/v1/import-source-connectors`:`${ye}/functions/v1/import-source-connectors`}function mn(){return window.VERKRADAR_ADMIN_COMPANY_ACTIONS_URL?window.VERKRADAR_ADMIN_COMPANY_ACTIONS_URL:window.VERKRADAR_SUPABASE_URL?`${window.VERKRADAR_SUPABASE_URL}/functions/v1/admin-company-actions`:`${ye}/functions/v1/admin-company-actions`}async function hn(e){let t=await e.text();if(!t)return{};try{return JSON.parse(t)}catch{return{errors:[t]}}}async function gn(){if(!k.isAdmin){k.importStatus={errors:[`You do not have access to import TED notices.`]},X();return}let e=fn();if(!e){k.importStatus={errors:[`TED importer is not configured. Set window.VERKRADAR_TED_IMPORT_URL or window.VERKRADAR_SUPABASE_URL for this environment.`]},X();return}k.importLoading=!0,k.importStatus=null,k.importedTedOpportunities=[],X();try{let t=await fetch(e,{method:`POST`,headers:await yn(),body:JSON.stringify({limit:50,importMode:k.tedImportMode})}),n=await hn(t);if(k.importStatus=t.ok?n:{...n,errors:n.errors||[`Import failed with status ${t.status}`]},t.ok){await M();let e=k.companyId?await Jn():Number(n.matched||0);await vn(),k.isAdmin&&(await yt(),await bt()),k.importStatus={...k.importStatus,matched:e},V(`TED import completed`,`success`)}}catch(e){k.importStatus={errors:[e instanceof Error?e.message:String(e)]}}finally{k.importLoading=!1,X()}}async function _n(e=``){if(!k.isAdmin){k.connectorImportStatus={errors:[`You do not have access to run source imports.`]},X();return}let t=pn();if(!t){k.connectorImportStatus={errors:[`Source connector importer is not configured. Set window.VERKRADAR_SOURCE_CONNECTOR_IMPORT_URL or window.VERKRADAR_SUPABASE_URL for this environment.`]},X();return}k.connectorImportLoading=!e,k.connectorTestingSourceId=e||null,k.connectorImportStatus=null,X();try{let n=await fetch(t,{method:`POST`,headers:await yn(),body:JSON.stringify({limit:e?50:20,maxSources:e?1:6,sourceId:e||void 0,refreshMatches:!!e,generateReports:!1})}),r=await hn(n),i=Array.isArray(r.errors)?r.errors:[],a=Array.isArray(r.failedSources)?r.failedSources:[];k.connectorImportStatus=n.ok?{...r,failedSources:a}:{...r,failedSources:a,errors:i.length?i:[`Source import failed with status ${n.status}${n.statusText?` ${n.statusText}`:``}`]},n.ok&&(await M(),await Ft(),V(e?`Source test completed`:`Automatic source imports completed`,`success`))}catch(e){k.connectorImportStatus={errors:[e instanceof Error?e.message:String(e)]}}finally{k.connectorImportLoading=!1,k.connectorTestingSourceId=null,X()}}async function vn(){if(!b){k.importedTedOpportunities=[],k.importedTedOpportunitiesLoaded=!0;return}k.importedTedOpportunitiesLoading=!0,k.importedTedOpportunitiesError=null;try{let{data:e,error:t}=await b.from(`sources`).select(`id, name`).in(`name`,[`TED Iceland/Nordic`,`EU TED`,`Tenders Electronic Daily`]);if(t)throw t;let n=(e||[]).map(e=>e.id).filter(Boolean);if(!n.length){k.importedTedOpportunities=[];return}let{data:r,error:i}=await b.from(`opportunities`).select(`*, sources(name, source_type)`).in(`source_id`,n).order(`created_at`,{ascending:!1}).limit(10);if(i)throw i;k.importedTedOpportunities=(r||[]).map(It)}catch(e){console.error(`Failed to load latest TED opportunities:`,e),k.importedTedOpportunities=[],k.importedTedOpportunitiesError=B(e)}finally{k.importedTedOpportunitiesLoading=!1,k.importedTedOpportunitiesLoaded=!0}}async function yn(){let e={"content-type":`application/json`},t=window.VERKRADAR_SUPABASE_ANON_KEY||`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFzb2p4amJzZ3FiZnBiZXBvanpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAwNTU2NjgsImV4cCI6MjA5NTYzMTY2OH0.yPA34VbqWqKrBPespmHr5AojYzjhy3kGRxswO9XdAd0`;t&&t!==`PASTE_MY_ANON_PUBLIC_KEY_HERE`&&(e.apikey=t);let{data:n,error:r}=b?await b.auth.getSession():{data:{session:null},error:null};if(r)throw r;let i=n.session?.access_token;if(!i)throw Error(`You must be logged in to run this admin action.`);return e.authorization=`Bearer ${i}`,e}function bn(){return`${window.location.origin}/#/onboarding`}function xn(){return`${window.location.origin}/#/reset-password`}function Sn(e){let t=e?.user?.identities;return Array.isArray(t)&&t.length===0}function Cn(){return[{label:O(`login`),href:`/login`,variant:`primary`},{label:O(`forgotPassword`),href:`/forgot-password`,variant:`secondary`}]}async function wn(e,t){$e(),k.authSubmitting=!0,k.authMessage=null,X();try{if(!b)throw Error(`Supabase client is not configured.`);let{data:n,error:r}=await b.auth.signUp({email:String(e||``).trim(),password:String(t||``),options:{emailRedirectTo:bn()}});if(r)throw r;if(et(),Sn(n)){k.user=null,k.currentUser=null,k.authMessage={type:`error`,text:O(`signupExistingAccount`),actions:Cn()},k.authForm.password=``,X();return}if(!n.session?.user){k.user=null,k.currentUser=null,k.authMessage={type:`success`,text:Array.isArray(n?.user?.identities)&&n.user.identities.length>0?O(`signupCreatedConfirm`):O(`signupNeutralNextSteps`)},k.authForm.password=``,X();return}k.user=n.session.user,k.currentUser=k.user,k.profileDraft=null,k.profileDraftDirty=!1,await An(k.user),k.authMessage={type:`success`,text:O(`signupCreatedConfirm`)},await In({overwriteDraft:!0}),un(),A(dt())}catch(e){console.error(`Signup failed:`,e);let t=tr(e);k.authMessage={type:`error`,text:er(e,`signup`),actions:t?Cn():[]},X()}finally{k.authSubmitting=!1,X()}}async function Tn(e,t){k.authSubmitting=!0,k.authMessage=null,X();try{if(!b)throw Error(`Supabase client is not configured.`);let{data:n,error:r}=await b.auth.signInWithPassword({email:String(e||``).trim(),password:String(t||``)});if(r)throw r;k.user=n.user||await kn(),k.currentUser=k.user,k.profileDraft=null,k.profileDraftDirty=!1,await An(k.user),await In({overwriteDraft:!0}),un(),A(dt())}catch(e){console.error(`Login failed:`,e),k.authMessage={type:`error`,text:er(e,`login`)},X()}finally{k.authSubmitting=!1,X()}}async function En(e){k.authSubmitting=!0,k.authMessage=null,X();try{if(!b)throw Error(`Supabase client is not configured.`);let{error:t}=await b.auth.resetPasswordForEmail(String(e||``).trim(),{redirectTo:xn()});if(t)throw t;k.authMessage={type:`success`,text:`If an account exists for this email, a reset link has been sent.`}}catch(e){console.error(`Password reset request failed:`,e),k.authMessage={type:`error`,text:`We could not send a reset link right now. Please try again.`}}finally{k.authSubmitting=!1,X()}}async function Dn(e,t){let n=String(e||``),r=String(t||``);if(!n){k.authMessage={type:`error`,text:`Enter a new password.`},X();return}if(n.length<8){k.authMessage={type:`error`,text:`Password must be at least 8 characters.`},X();return}if(n!==r){k.authMessage={type:`error`,text:`Passwords do not match.`},X();return}k.authSubmitting=!0,k.authMessage=null,X();try{if(!b)throw Error(`Supabase client is not configured.`);let{error:e}=await b.auth.updateUser({password:n});if(e)throw e;dn(),A(`/login`),k.authMessage={type:`success`,text:`Password updated. You can now log in.`},X()}catch(e){console.error(`Password update failed:`,e),k.authMessage={type:`error`,text:`This reset link may be expired or invalid. Request a new reset link and try again.`},X()}finally{k.authSubmitting=!1,X()}}async function On(){try{if(b){let{error:e}=await b.auth.signOut();if(e)throw e}}catch(e){console.error(`Logout failed:`,e)}finally{k.user=null,k.currentUser=null,k.isAdmin=!1,k.authLoaded=!0,k.adminLoaded=!0,k.profileLoaded=!0,et(),A(`/`),X()}}async function kn(){if(!b)return null;let{data:e,error:t}=await b.auth.getUser();return t?(console.error(`Failed to get current user:`,t),null):e.user||null}async function An(e=k.user){if(!b||!e)return k.isAdmin=!1,!1;try{let{data:t,error:n}=await b.from(`admin_users`).select(`user_id`).eq(`user_id`,e.id).maybeSingle();if(n)throw n;return k.isAdmin=!!t?.user_id,k.isAdmin}catch(e){return console.error(`Failed to check admin access:`,e),k.isAdmin=!1,!1}}function z(){return Z(`
    <section class="empty-state">
      <h1>${D(O(`authRequiredTitle`))}</h1>
      <p>${D(O(`authRequiredText`))}</p>
      <button class="btn btn-primary" data-action="go" data-href="/login">${D(O(`login`))}</button>
      <button class="btn btn-secondary" data-action="go" data-href="/signup">${D(O(`createAccount`))}</button>
    </section>
  `)}function jn(){return Z(`
    <section class="empty-state">
      <h1>You do not have access to this page.</h1>
      <p>Admin access is limited to approved VerkRadar admin users.</p>
    </section>
  `)}var Mn=!1,Nn=!1;async function Pn(){if(!b)return k.user=null,k.currentUser=null,null;let{data:e,error:t}=await b.auth.getSession();if(t)throw t;return k.user=e.session?.user||null,k.currentUser=k.user,k.user}async function Fn(){k.adminLoaded=!1,await An(k.currentUser||k.user),k.adminLoaded=!0}async function In(e={}){let{overwriteDraft:t=!1,showGlobalLoading:n=!1}=e;(n||!k.profile&&!k.profileDraftDirty)&&(k.profileLoaded=!1),k.profileLoading=!0,k.profileLoadError=null;try{await Ln(Vn({overwriteDraft:t}),We,`Profile loading took too long. Please retry.`)}catch(e){console.error(`Failed to load profile from Supabase:`,e),k.profileLoadError=B(e)}finally{k.profileLoading=!1,k.profileLoaded=!0}}function Ln(e,t,n){let r,i=new Promise((e,i)=>{r=setTimeout(()=>i(Error(n)),t)});return Promise.race([e,i]).finally(()=>clearTimeout(r))}async function Rn(){if(!k.isSavingProfile){k.profileLoadError=null,k.profileLoading=!0,X();try{await In({overwriteDraft:!0})}catch(e){console.error(`Settings profile retry failed:`,e),k.profileLoadError=B(e)}finally{k.profileLoading=!1,k.profileLoaded=!0,X(),j()}}}function zn(){!b||Nn||(Nn=!0,b.auth.onAuthStateChange(async(e,t)=>{if(Mn){if(k.user=t?.user||null,k.currentUser=k.user,k.user){if(e===`PASSWORD_RECOVERY`){k.authLoaded=!0,k.adminLoaded=!0,k.profileLoaded=!0,k.authMessage=null,A(`/reset-password`);return}try{await Fn(),k.route===`/settings`&&k.profileDraftDirty?k.profileLoaded=!0:await In()}catch(e){console.error(`Auth profile refresh failed:`,e),k.profileLoadError=B(e),k.adminLoaded=!0,k.profileLoaded=!0}if(gt())return;X(),j();return}k.isAdmin=!1,k.profile=null,k.profileDraft=null,k.profileDraftDirty=!1,k.profileLoading=!1,k.profileLoadError=null,k.companyId=null,k.storedMatches=[],k.reports=[],k.reportsLoaded=!1,k.reportsLoadError=null,k.selectedReportId=null,k.authLoaded=!0,k.adminLoaded=!0,k.profileLoaded=!0,e===`SIGNED_OUT`&&A(`/`),X(),j()}}))}async function Bn(){k.isBooting=!0,k.authLoaded=!1,k.profileLoaded=!1,k.adminLoaded=!1,k.bootError=null,X();try{zn(),await Pn(),k.authLoaded=!0,k.currentUser?(await Fn(),await In({overwriteDraft:!0,showGlobalLoading:!0})):(k.profile=null,k.profileDraft=null,k.profileDraftDirty=!1,k.profileLoading=!1,k.profileLoadError=null,k.companyId=null,k.isAdmin=!1,k.adminLoaded=!0,k.profileLoaded=!0)}catch(e){console.error(`Boot failed:`,e),k.bootError=B(e),k.authLoaded=!0,k.adminLoaded=!0,k.profileLoaded=!0}finally{k.authLoading=!1,k.isBooting=!1,Mn=!0,mt()?ht(`/reset-password`):gt({replace:!0}),X(),j()}}async function Vn(e={}){let{overwriteDraft:t=!1}=e;if(!b||!k.user){k.profile=null,(t||!k.profileDraftDirty)&&(k.profileDraft=null),X();return}try{let{data:e,error:n}=await b.from(`companies`).select(`*`).eq(`owner_id`,k.user.id).maybeSingle();if(n)throw n;if(!e){k.companyId=null,k.storedMatches=[],k.reports=[],k.reportsLoaded=!1,k.reportsLoadError=null,k.selectedReportId=null,k.profile=null,(t||!k.profileDraftDirty)&&(k.profileDraft=null),k.profileLoadError=null,X(),j();return}if(k.profileDraftDirty&&k.companyId&&k.companyId!==e.id&&!t){if(!window.confirm(`You have unsaved profile changes. Switch company profile and discard those edits?`)){k.profileLoadError=`Unsaved changes were kept. Save or reload before switching company profiles.`,X(),j();return}k.profileDraftDirty=!1}let[r,i,a]=await Promise.all([b.from(`company_services`).select(`service`).eq(`company_id`,e.id),b.from(`company_locations`).select(`location`).eq(`company_id`,e.id),b.from(`company_keywords`).select(`keyword, type`).eq(`company_id`,e.id)]);if(r.error)throw r.error;if(i.error)throw i.error;if(a.error)throw a.error;k.companyId!==e.id&&(k.reports=[],k.reportsLoaded=!1,k.reportsLoadError=null,k.selectedReportId=null),k.companyId=e.id;let o=Un(e,r.data||[],i.data||[],a.data||[]);k.profile=o,(t||!k.profileDraftDirty)&&fr(o),k.profileLoadError=null,nr(k.profile),await ui(),await Wn(),X(),j()}catch(e){console.error(`Failed to load Supabase company profile:`,e),k.profileLoadError=B(e),k.profileDraftDirty||(k.companyId=null,k.storedMatches=[],k.reports=[],k.reportsLoaded=!1,k.reportsLoadError=null,k.selectedReportId=null,k.profile=null),k.profileDraftDirty||(k.profileDraft=null),X(),j()}}async function Hn(e){if(!b)throw Error(`Supabase client is not configured.`);let t={...e,companyName:String(e.companyName||``).trim(),kennitala:String(e.kennitala||``).trim(),contactEmail:String(e.contactEmail||``).trim(),billingEmail:String(e.billingEmail||``).trim(),contactName:String(e.contactName||``).trim(),phone:String(e.phone||``).trim(),address:String(e.address||``).trim(),website:String(e.website||``).trim(),industry:String(e.industry||``).trim(),selectedPlan:Je(e.selectedPlan||k.pendingSignupPlan||k.profile?.selectedPlan||k.profile?.plan)||`basic`,billingStatus:e.billingStatus||k.profile?.billingStatus||`trial`,trialStartedAt:e.trialStartedAt||k.profile?.trialStartedAt||new Date().toISOString(),trialEndsAt:e.trialEndsAt||k.profile?.trialEndsAt||new Date(Date.now()+336*60*60*1e3).toISOString(),services:T(e.services),locations:T(e.locations),includeKeywords:T(e.includeKeywords),excludeKeywords:T(e.excludeKeywords),baseLocation:String(e.baseLocation||``).trim(),serviceAreas:T(e.serviceAreas),willingToTravel:!!e.willingToTravel,nationalProjects:!!e.nationalProjects,remoteProjects:!!e.remoteProjects,minimumProjectValueForTravel:or(e.minimumProjectValueForTravel),minProjectValue:or(e.minProjectValue),maxProjectValue:or(e.maxProjectValue),allowUnknownValue:!!e.allowUnknownValue,reportFrequency:e.reportFrequency||`weekly`,reportDay:e.reportDay||`monday`,deadlineReminders:!!e.deadlineReminders,includeLowConfidence:!!e.includeLowConfidence,autoAlertMode:e.autoAlertMode||`auto_safe_only`},{data:{user:n},error:r}=await b.auth.getUser();if(r)throw r;if(!n)throw Error(`You must be logged in to save a company profile.`);k.user=n;let{data:i,error:a}=await b.from(`companies`).upsert({owner_id:n.id,company_name:t.companyName,contact_email:t.contactEmail||n.email,kennitala:t.kennitala||null,billing_email:t.billingEmail||t.contactEmail||n.email,contact_name:t.contactName||null,phone:t.phone||null,address:t.address||null,website:t.website||null,industry:t.industry,plan:t.selectedPlan,selected_plan:t.selectedPlan,billing_status:t.billingStatus,trial_started_at:t.trialStartedAt,trial_ends_at:t.trialEndsAt,base_location:t.baseLocation||null,service_areas:t.serviceAreas,willing_to_travel:t.willingToTravel,national_projects:t.nationalProjects,remote_projects:t.remoteProjects,minimum_project_value_for_travel:t.minimumProjectValueForTravel,min_project_value:t.minProjectValue,max_project_value:t.maxProjectValue,allow_unknown_value:t.allowUnknownValue,report_frequency:t.reportFrequency,report_day:t.reportDay,deadline_reminders:t.deadlineReminders,include_low_confidence:t.includeLowConfidence,auto_alert_mode:t.autoAlertMode},{onConflict:`owner_id`}).select().single();if(a)throw console.error(`Company upsert error:`,a),a;k.companyId!==i.id&&(k.reports=[],k.reportsLoaded=!1,k.reportsLoadError=null,k.selectedReportId=null),k.companyId=i.id;let o=(await Promise.all([b.from(`company_services`).delete().eq(`company_id`,i.id),b.from(`company_locations`).delete().eq(`company_id`,i.id),b.from(`company_keywords`).delete().eq(`company_id`,i.id)])).find(e=>e.error)?.error;if(o)throw o;let s=t.services.map(e=>({company_id:i.id,service:e})),c=t.locations.map(e=>({company_id:i.id,location:e})),l=[...t.includeKeywords.map(e=>({company_id:i.id,keyword:e,type:`include`})),...t.excludeKeywords.map(e=>({company_id:i.id,keyword:e,type:`exclude`}))];if(s.length){let{error:e}=await b.from(`company_services`).insert(s);if(e)throw e}if(c.length){let{error:e}=await b.from(`company_locations`).insert(c);if(e)throw e}if(l.length){let{error:e}=await b.from(`company_keywords`).insert(l);if(e)throw e}k.profile=t,k.pendingSignupPlan=``,Ze(),nr(t)}function Un(e,t,n,r){return{companyName:e.company_name||``,kennitala:e.kennitala||``,contactEmail:e.contact_email||``,billingEmail:e.billing_email||e.contact_email||``,contactName:e.contact_name||``,phone:e.phone||``,address:e.address||``,website:e.website||``,industry:e.industry||``,plan:e.plan||e.selected_plan||`basic`,selectedPlan:e.selected_plan||e.plan||`basic`,billingStatus:e.billing_status||`trial`,trialStartedAt:e.trial_started_at||``,trialEndsAt:e.trial_ends_at||``,services:T(t.map(e=>e.service)),includeKeywords:T(r.filter(e=>e.type===`include`).map(e=>e.keyword)),excludeKeywords:T(r.filter(e=>e.type===`exclude`).map(e=>e.keyword)),locations:T(n.map(e=>e.location)),baseLocation:e.base_location||``,serviceAreas:T(e.service_areas),willingToTravel:!!e.willing_to_travel,nationalProjects:!!e.national_projects,remoteProjects:!!e.remote_projects,minimumProjectValueForTravel:e.minimum_project_value_for_travel==null?null:Number(e.minimum_project_value_for_travel),minProjectValue:e.min_project_value==null?null:Number(e.min_project_value),maxProjectValue:e.max_project_value==null?null:Number(e.max_project_value),allowUnknownValue:!!e.allow_unknown_value,reportFrequency:e.report_frequency||`weekly`,reportDay:e.report_day||`monday`,deadlineReminders:!!e.deadline_reminders,includeLowConfidence:!!e.include_low_confidence,autoAlertMode:e.auto_alert_mode||`auto_safe_only`}}async function Wn(){if(!b||!k.companyId){k.storedMatches=[];return}try{let{data:e,error:t}=await b.from(`opportunity_matches`).select(`*, opportunities(*, sources(name, source_type))`).eq(`company_id`,k.companyId).order(`match_score`,{ascending:!1});if(t)throw t;let n=(e||[]).map(e=>e.calculated_at||e.updated_at||e.created_at).filter(Boolean).map(e=>new Date(e).getTime()).filter(e=>!Number.isNaN(e));k.lastMatchedAt=n.length?new Date(Math.max(...n)).toISOString():null,k.storedMatches=(e||[]).filter(e=>e.opportunities).map(Lt).filter(Os).filter(N)}catch(e){console.error(`Failed to load stored opportunity matches. Falling back to frontend matching:`,e),k.storedMatches=[],k.lastMatchedAt=null}}async function Gn(){if(k.companyId&&!k.reportArchiveLoading){k.reportArchiveLoading=!0,k.reportsLoadError=null,X();try{if(!b)throw Error(`Supabase client is not configured.`);let{data:e,error:t}=await b.from(`reports`).select(`
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
      `).eq(`company_id`,k.companyId).is(`archived_at`,null).order(`created_at`,{ascending:!1});if(t)throw t;k.reports=e||[],k.reportsLoaded=!0}catch(e){console.error(`Failed to load reports:`,e),k.reportsLoadError=B(e),k.reports=[],k.reportsLoaded=!0}finally{k.reportArchiveLoading=!1,X()}}}async function Kn(){if(!k.user){k.reportMessage={type:`error`,text:`Log in to save reports.`},X();return}if(!k.companyId){k.reportMessage={type:`error`,text:`Create a company profile before saving reports.`},X();return}let e=as();if(!e.length){k.reportMessage={type:`error`,text:`No useful matches above the report threshold yet.`},X();return}let t=ss(k.profile,e);k.reportSaveLoading=!0,k.reportMessage=null,X();try{let{data:n,error:r}=await b.from(`reports`).insert({company_id:k.companyId,title:t.title,period_start:t.periodStart,period_end:t.periodEnd,summary:t.summary,text_content:t.textContent,html_content:t.htmlContent,status:`draft`}).select(`id`).single();if(r)throw r;let i=e.filter(e=>Ce(e.id)).map((e,t)=>({report_id:n.id,opportunity_id:e.id,match_score:e.matchScore,match_reasons:e.matchReasons||[],risks:e.risks||[],sort_order:t+1}));if(i.length){let{error:e}=await b.from(`report_items`).insert(i);if(e)throw e}k.reportMessage={type:`success`,text:`Report saved`},await Gn(),V(`Report saved`,`success`)}catch(e){console.error(`Failed to save report:`,e),k.reportMessage={type:`error`,text:`Failed to save report. ${B(e)}`}}finally{k.reportSaveLoading=!1,X()}}async function qn(e){if(!(!e||!b||!k.user)&&window.confirm(k.language===`is`?`Ertu viss um að þú viljir fela þetta yfirlit? Þetta er ekki hægt að afturkalla í mælaborðinu.`:`Are you sure you want to hide this report? This cannot be undone from the dashboard.`)){k.reportArchiveLoading=!0,k.reportMessage=null,X();try{let{error:t}=await b.from(`reports`).update({archived_at:new Date().toISOString(),archived_by:k.user.id}).eq(`id`,e).eq(`company_id`,k.companyId);if(t)throw t;k.selectedReportId===e&&(k.selectedReportId=null),k.reports=k.reports.filter(t=>t.id!==e),k.reportMessage={type:`success`,text:k.language===`is`?`Yfirlitið var falið.`:`Report hidden.`},V(k.language===`is`?`Yfirlit falið`:`Report hidden`,`success`)}catch(e){console.error(`Failed to archive report:`,e),k.reportMessage={type:`error`,text:k.language===`is`?`Gat ekki falið yfirlitið. ${B(e)}`:`Could not hide report. ${B(e)}`}}finally{k.reportArchiveLoading=!1,X()}}}async function Jn(){k.matchingLoading=!0,k.matchStatus=null,X();try{if(!b)throw Error(`Supabase client is not configured.`);let e=k.user||await kn();if(!e)throw Error(`You must be logged in to run matching.`);k.user=e;let{data:t,error:n}=await b.from(`companies`).select(`*`).eq(`owner_id`,e.id).maybeSingle();if(n)throw n;if(!t)throw Error(`No Supabase company profile found. Save onboarding first.`);k.companyId=t.id;let[r,i,a,o]=await Promise.all([b.from(`company_services`).select(`service`).eq(`company_id`,t.id),b.from(`company_locations`).select(`location`).eq(`company_id`,t.id),b.from(`company_keywords`).select(`keyword, type`).eq(`company_id`,t.id),b.from(`opportunities`).select(`*, sources(name, source_type)`).eq(`status`,`open`)]);if(r.error)throw r.error;if(i.error)throw i.error;if(a.error)throw a.error;if(o.error)throw o.error;let s=Un(t,r.data||[],i.data||[],a.data||[]),c=k.profileDraftDirty,l=(o.data||[]).map(It).filter(N).map(e=>Kr(s,e)).filter(e=>e.matchScore>=50).map(e=>({company_id:t.id,opportunity_id:e.id,match_score:e.matchScore,match_label:e.matchLabel,match_reasons:e.matchReasons,risks:e.risks,next_steps:e.nextSteps,calculated_at:new Date().toISOString()})),{error:u}=await b.from(`opportunity_matches`).delete().eq(`company_id`,t.id);if(u)throw u;if(l.length){let{error:e}=await b.from(`opportunity_matches`).insert(l);if(e)throw e}k.profile=s,nr(s),c||fr(s);let d=l.length===1?`match`:`matches`;return k.matchStatus={type:`success`,text:`Matching complete — ${l.length} stored ${d} found.`},await M(),await ui(),await Wn(),l.length}catch(e){return console.error(`Failed to run matching:`,e),k.matchStatus={type:`error`,text:`Failed to run matching. ${B(e)}`},0}finally{k.matchingLoading=!1,X()}}async function Yn(e,t){if(!k.isAdmin){k.adminMessage={type:`error`,text:`You do not have access to this page.`},X();return}k.adminSubmitting=!0,k.adminMessage=null,X();try{if(!b)throw Error(`Supabase client is not configured.`);let n=Object.fromEntries(e.entries()),r=String(n.sourceName||n.source||`Manual`).trim()||`Manual`,i=String(n.title||``).trim();if(!i)throw Error(`Title is required.`);let a=String(n.description||``).trim()||`Manual opportunity: ${i}`,o={source_id:await $n(r),external_id:`manual-${Date.now()}`,title:i,buyer:String(n.buyer||``).trim()||null,category:String(n.category||``).trim()||null,type:String(n.type||``).trim()||`tender`,description:a,deadline:n.deadline||null,published_date:n.publishedDate||n.published_date||null,location:String(n.location||``).trim()||null,estimated_value:n.estimatedValue||n.estimated_value?Number(n.estimatedValue||n.estimated_value):null,currency:`ISK`,url:n.url||null,cpv_code:n.cpvCode||n.cpv_code||null,requirements:xe(n.requirements),keywords:xe(n.keywords),difficulty:String(n.difficulty||``).trim()||`medium`,status:String(n.status||``).trim()||`open`,raw_payload:{created_from:`admin`,source_name:r}},{error:s}=await b.from(`opportunities`).insert(o).select().single();if(s)throw console.error(`Supabase insert error:`,s),Error(`${s.message} (${s.code})`);k.adminMessage={type:`success`,text:`Opportunity saved to Supabase.`},k.adminOpportunityDraft=tt(),t?.reset(),await M(),k.companyId&&await Jn(),V(`Opportunity added`,`success`)}catch(e){let t=B(e);console.error(`Failed to add opportunity. If this is an RLS error, allow anon insert/select during development:`,e),k.adminMessage={type:`error`,text:`Failed to save opportunity. ${t}`},X()}finally{k.adminSubmitting=!1,X()}}async function Xn(t){if(!k.isAdmin){k.adminMessage={type:`error`,text:`You do not have access to this page.`},X();return}k.adminDeletingId=t,k.adminMessage=null,X();try{if(!b)throw Error(`Supabase client is not configured.`);let{error:n}=await b.from(`opportunities`).delete().eq(`id`,t);if(n)throw n;k.saved=k.saved.filter(e=>e!==t),k.ignored=k.ignored.filter(e=>e!==t),ir(e.saved,k.saved),ir(e.ignored,k.ignored),k.adminMessage={type:`success`,text:`Opportunity deleted from Supabase.`},await M(),await vn(),V(`Opportunity deleted`,`success`)}catch(e){let t=B(e);console.error(`Failed to delete opportunity. If this is an RLS error, allow anon delete/select during development:`,e),k.adminMessage={type:`error`,text:`Failed to delete opportunity. ${t}`},X()}finally{k.adminDeletingId=null,X()}}async function Zn(e,t){if(!k.isAdmin){k.adminMessage={type:`error`,text:`You do not have access to this page.`},X();return}k.adminUpdatingId=e,k.adminMessage=null,X();try{if(!b)throw Error(`Supabase client is not configured.`);let{error:n}=await b.from(`opportunities`).update({status:t}).eq(`id`,e);if(n)throw n;k.adminMessage={type:`success`,text:t===`open`?`Opportunity marked relevant.`:`Opportunity hidden.`},await M(),await vn(),V(t===`open`?`Marked relevant`:`Opportunity hidden`,`success`)}catch(e){let t=B(e);console.error(`Failed to update opportunity status:`,e),k.adminMessage={type:`error`,text:`Failed to update opportunity. ${t}`},X()}finally{k.adminUpdatingId=null,X()}}async function Qn(e,t){if(!k.isAdmin){k.adminMessage={type:`error`,text:`You do not have access to this page.`},X();return}let n=k.opportunities.find(t=>t.id===e);if(!n)return;let r={include:{opportunity_intent:`confirmed_tender`,quality_status:`confirmed_tender`,hidden_from_reports:!1,admin_report_status:`include`},hide:{hidden_from_reports:!0,admin_report_status:`hidden`},noise:{opportunity_intent:`not_opportunity`,quality_status:`needs_review`,hidden_from_reports:!0,admin_report_status:`noise`},confirmed_tender:{opportunity_intent:`confirmed_tender`,quality_status:`confirmed_tender`,hidden_from_reports:!1,admin_report_status:`include`},early_opportunity:{opportunity_intent:`early_opportunity`,quality_status:`early_signal`,hidden_from_reports:!1,admin_report_status:`include`}}[t];if(r){k.adminUpdatingId=e,k.adminMessage=null,X();try{if(!b)throw Error(`Supabase client is not configured.`);let t={...n.rawPayload||{},...r,admin_reviewed_at:new Date().toISOString()},{error:i}=await b.from(`opportunities`).update({raw_payload:t}).eq(`id`,e);if(i)throw i;k.adminMessage={type:`success`,text:`Report visibility updated.`},await M(),V(`Report visibility updated`,`success`)}catch(e){let t=B(e);console.error(`Failed to update report visibility:`,e),k.adminMessage={type:`error`,text:`Failed to update report visibility. ${t}`},X()}finally{k.adminUpdatingId=null,X()}}}async function $n(e){if(!b)throw Error(`Supabase client is not configured`);let t=e&&e.trim()?e.trim():`Manual`,{data:n,error:r}=await b.from(`sources`).select(`id`).eq(`name`,t).maybeSingle();if(r)throw console.error(`Source select error:`,r),r;if(n&&n.id)return n.id;let{data:i,error:a}=await b.from(`sources`).insert({name:t,source_type:`manual`,is_active:!0,notes:`Created from VerkRadar admin page`}).select(`id`).single();if(a)throw console.error(`Source insert error:`,a),a;return i.id}function B(e){return e?typeof e==`string`?e:[e.message,e.details,e.hint,e.code].filter(Boolean).join(` `):`Unknown error`}function er(e,t=`login`){let n=String(e?.message||e||``).toLowerCase(),r=String(e?.code||e?.status||``).toLowerCase();return n.includes(`invalid login credentials`)||n.includes(`invalid_credentials`)||r.includes(`invalid_credentials`)?O(`emailOrPasswordIncorrect`):n.includes(`email not confirmed`)?O(`confirmEmailBeforeLogin`):tr(e)?O(`signupExistingAccount`):n.includes(`password`)&&n.includes(`characters`)?O(`passwordTooShort`):n.includes(`rate limit`)||n.includes(`too many`)?O(`tooManyAttempts`):O(t===`signup`?`couldNotCreateAccount`:`couldNotLogin`)}function tr(e){let t=String(e?.message||e||``).toLowerCase(),n=String(e?.code||e?.status||``).toLowerCase();return t.includes(`user already registered`)||t.includes(`already registered`)||t.includes(`already exists`)||n.includes(`user_already_exists`)||n.includes(`email_exists`)}function V(e,t=`success`){k.toast={message:e,type:t},X(),clearTimeout(window.__toastTimeout),window.__toastTimeout=setTimeout(()=>{k.toast=null,X()},2500)}function nr(t){localStorage.setItem(e.profile,JSON.stringify(t))}function rr(e){try{let t=localStorage.getItem(e);return t?JSON.parse(t):[]}catch{return[]}}function ir(e,t){localStorage.setItem(e,JSON.stringify(t))}function ar(e){return T(e).join(`, `)}function or(e){if(e==null||e===``)return null;let t=Number(e);return Number.isFinite(t)?t:null}function sr(e){return String(e||``).trim().toLowerCase()}function cr(e,t=k.profileDraft?.industry){return i[e]?.[t]||[]}function lr(e,t){if(![`services`,`includeKeywords`,`excludeKeywords`].includes(e)||!t)return;H();let n=Array.isArray(k.profileDraft[e])?k.profileDraft[e]:[],r=sr(t),i=n.some(e=>sr(e)===r);k.profileDraft[e]=i?n.filter(e=>sr(e)!==r):[...n,t],U(),X()}function ur({field:e,title:t,values:n,selectedValues:r}){if(!n.length)return``;let i=Array.isArray(r)?r:[];return`
    <div class="suggestion-group">
      <div class="suggestion-group-head">
        <span>${D(t)}</span>
      </div>
      <div class="suggestion-chips">
        ${n.map(t=>{let n=i.some(e=>sr(e)===sr(t));return`
            <button
              type="button"
              class="suggestion-chip ${n?`is-selected`:``}"
              data-action="toggle-profile-suggestion"
              data-field="${D(e)}"
              data-value="${D(t)}"
              aria-pressed="${n?`true`:`false`}"
            >${D(t)}</button>
          `}).join(``)}
      </div>
    </div>
  `}function H(){if(!k.profileDraft){if(k.profile){k.profileDraft=dr(k.profile);return}k.profileDraft=Ge(),k.pendingSignupPlan&&(k.profileDraft.selectedPlan=k.pendingSignupPlan)}}function dr(e){return{...e,services:T(e.services),includeKeywords:T(e.includeKeywords),excludeKeywords:T(e.excludeKeywords),locations:T(e.locations),serviceAreas:T(e.serviceAreas)}}function U(){k.profileDraftDirty=!0,k.profileSaved=!1,k.profileSaveMessage=null,k.profileSaveError=null}function fr(e){k.profileDraft=dr(e||Ge()),k.profileDraftDirty=!1}function pr(e){H();let t=new FormData(e),n={...k.profileDraft};W(e,`companyName`)&&(n.companyName=String(t.get(`companyName`)||``).trim()),W(e,`kennitala`)&&(n.kennitala=String(t.get(`kennitala`)||``).trim()),W(e,`contactEmail`)&&(n.contactEmail=String(t.get(`contactEmail`)||``).trim()),W(e,`billingEmail`)&&(n.billingEmail=String(t.get(`billingEmail`)||``).trim()),W(e,`contactName`)&&(n.contactName=String(t.get(`contactName`)||``).trim()),W(e,`phone`)&&(n.phone=String(t.get(`phone`)||``).trim()),W(e,`address`)&&(n.address=String(t.get(`address`)||``).trim()),W(e,`website`)&&(n.website=String(t.get(`website`)||``).trim()),W(e,`selectedPlan`)&&(n.selectedPlan=Je(t.get(`selectedPlan`))||`basic`),W(e,`industry`)&&(n.industry=String(t.get(`industry`)||``)),W(e,`services`)&&(n.services=w(t.get(`services`))),W(e,`includeKeywords`)&&(n.includeKeywords=w(t.get(`includeKeywords`))),W(e,`excludeKeywords`)&&(n.excludeKeywords=w(t.get(`excludeKeywords`))),W(e,`locations`)&&(n.locations=t.getAll(`locations`)),W(e,`baseLocation`)&&(n.baseLocation=String(t.get(`baseLocation`)||``)),W(e,`serviceAreas`)&&(n.serviceAreas=w(t.get(`serviceAreas`))),W(e,`willingToTravel`)&&(n.willingToTravel=t.get(`willingToTravel`)===`on`),W(e,`nationalProjects`)&&(n.nationalProjects=t.get(`nationalProjects`)===`on`),W(e,`remoteProjects`)&&(n.remoteProjects=t.get(`remoteProjects`)===`on`),W(e,`minimumProjectValueForTravel`)&&(n.minimumProjectValueForTravel=String(t.get(`minimumProjectValueForTravel`)||``)),W(e,`minProjectValue`)&&(n.minProjectValue=String(t.get(`minProjectValue`)||``)),W(e,`maxProjectValue`)&&(n.maxProjectValue=String(t.get(`maxProjectValue`)||``)),W(e,`allowUnknownValue`)&&(n.allowUnknownValue=t.get(`allowUnknownValue`)===`on`),W(e,`reportFrequency`)&&(n.reportFrequency=String(t.get(`reportFrequency`)||`weekly`)),W(e,`reportDay`)&&(n.reportDay=String(t.get(`reportDay`)||`monday`)),W(e,`deadlineReminders`)&&(n.deadlineReminders=t.get(`deadlineReminders`)===`on`),W(e,`includeLowConfidence`)&&(n.includeLowConfidence=t.get(`includeLowConfidence`)===`on`),k.profileDraft=n,U()}function W(e,t){return!!e.querySelector(`[name="${CSS.escape(t)}"]`)}function mr(){return H(),{...k.profileDraft,companyName:String(k.profileDraft.companyName||``).trim(),kennitala:String(k.profileDraft.kennitala||``).trim(),contactEmail:String(k.profileDraft.contactEmail||``).trim(),billingEmail:String(k.profileDraft.billingEmail||``).trim(),contactName:String(k.profileDraft.contactName||``).trim(),phone:String(k.profileDraft.phone||``).trim(),address:String(k.profileDraft.address||``).trim(),website:String(k.profileDraft.website||``).trim(),selectedPlan:Je(k.profileDraft.selectedPlan||k.pendingSignupPlan)||`basic`,industry:String(k.profileDraft.industry||``),services:T(k.profileDraft.services),includeKeywords:T(k.profileDraft.includeKeywords),excludeKeywords:T(k.profileDraft.excludeKeywords),locations:T(k.profileDraft.locations),baseLocation:String(k.profileDraft.baseLocation||``),serviceAreas:T(k.profileDraft.serviceAreas),willingToTravel:!!k.profileDraft.willingToTravel,nationalProjects:!!k.profileDraft.nationalProjects,remoteProjects:!!k.profileDraft.remoteProjects,minimumProjectValueForTravel:or(k.profileDraft.minimumProjectValueForTravel),minProjectValue:or(k.profileDraft.minProjectValue),maxProjectValue:or(k.profileDraft.maxProjectValue)}}function G(e,t){return String(e||``).toLowerCase().includes(String(t||``).toLowerCase())}function hr(e){return[e.title,e.description,e.category,e.location,...e.keywords||[]].join(` `).toLowerCase()}var gr=`jarðvinna.gatnagerð.gatna- og stígagerð.gatna og stígagerð.stígagerð.lóðarframkvæmdir.lagnavinna.lagnir.fráveita.fráveitulagnir.vatnsveita.hitaveita.vatnslagnir.regnvatnslagnir.drenlagnir.endurnýjun lagna.brunnar.dælubrunnar.malbikun.gangstétt.gangstéttir.stígar.bílastæði.vegagerð.gröftur.fyllingar.grjóthleðsla.jarðvegsskipti.undirbygging.yfirborðsfrágangur.hellulögn.hellulagnir.kantsteinn.kantsteinar.landmótun.afvötnun.jarðvegsvinna.útiframkvæmdir.gatnaframkvæmdir`.split(`.`),_r=[`snjómokstur`,`snjóruðningur`,`hálkuvarnir`,`vetrarþjónusta`,`gangstéttir`,`stofnanalóðir`],vr=[`framkvæmdir`,`framkvæmd`,`útboð`,`verðfyrirspurn`,`tilboð`,`viðhald`,`verktaki`,`verk`],yr=[`innanhússfrágangur`,`innanhúss`,`smíði`,`smíðavinna`,`málun`,`gólfefni`,`innréttingar`,`raflagnir`,`pípulagnir`,`leikskóli`,`skóli`,`húsnæði`,`byggingarvinna`],br=[`innanhússfrágangur`,`innanhúss`,`smíði`,`smíðavinna`,`málun`,`gólfefni`,`innréttingar`,`raflagnir`,`pípulagnir`,`byggingarvinna`],xr=[`for- og verkhönnun`,`verkhönnun`,`forhönnun`,`hönnun`,`ráðgjöf`,`verkfræðiráðgjöf`,`eftirlit`,`umsjón`,`verkefnastjórn`,`verkefnastjórnun`],Sr=[`hönnun`,`for- og verkhönnun`,`verkhönnun`,`forhönnun`,`ráðgjöf`,`verkfræðiráðgjöf`,`eftirlit`,`umsjón`,`verkefnastjórn`,`verkefnastjórnun`],Cr=[`jarðvinna`,`jarðvegsvinna`,`gatnagerð`,`gatna- og stígagerð`,`stígagerð`,`vegagerð`,`lóðarframkvæmdir`,`gröftur`,`jarðvegsskipti`,`fyllingar`,`afvötnun`,`landmótun`,`yfirborðsfrágangur`,`malbikun`,`útiframkvæmdir`];function K(e){return E(e)}function q(e,t){let n=K(e);return t.some(e=>n.includes(K(e)))}function J(e){let t=K(e);return vr.some(e=>t===K(e))}function wr(e){let t=K(e);return gr.some(e=>t===K(e))?0:gr.some(e=>t.includes(K(e))||K(e).includes(t))?1:_r.some(e=>t===K(e))?2:J(e)?10:3}function Tr(e){return[...e].sort((e,t)=>wr(e)-wr(t)||String(t).length-String(e).length||String(e).localeCompare(String(t)))}function Er(e){let t=K(e);return gr.filter(e=>t.includes(K(e)))}function Dr(e){let t=K(e);return _r.filter(e=>t.includes(K(e)))}function Or(e,t){let n=Er(t);if(!n.length||!e.some(J))return e;let r=e.filter(e=>!J(e));return[...new Set([...n,...r])]}function kr(e={}){return q([e.industry,...Array.isArray(e.services)?e.services:[],...Array.isArray(e.includeKeywords)?e.includeKeywords:[]].filter(Boolean).join(` `),[...gr,..._r,`construction`,`contractor`,`verktaki`,`mannvirki`,`jarðtækni`])}function Ar(e={}){return q([...Array.isArray(e.services)?e.services:[],...Array.isArray(e.includeKeywords)?e.includeKeywords:[]].filter(Boolean).join(` `),_r)}function jr(e={}){return q([...Array.isArray(e.services)?e.services:[],...Array.isArray(e.includeKeywords)?e.includeKeywords:[]].filter(Boolean).join(` `),br)}function Mr(e={}){return q([...Array.isArray(e.services)?e.services:[],...Array.isArray(e.includeKeywords)?e.includeKeywords:[]].filter(Boolean).join(` `),Sr)}function Nr(e={}){return q([e.industry,...Array.isArray(e.services)?e.services:[],...Array.isArray(e.includeKeywords)?e.includeKeywords:[]].filter(Boolean).join(` `),Cr)}function Pr(e,t,n,r){if(!kr(e))return{isCivilProfile:!1,serviceHits:n,keywordHits:r,hasWeakOnlyFit:!1,hasIndoorMismatch:!1,hasConsultingMismatch:!1,hasSecondaryOnlyFit:!1,hasPromotedBroadFit:!1,hasWinterOnlyFit:!1};let i=hr(t),a=q(i,gr),o=q(i,_r),s=Ar(e),c=o&&s,l=q(i,yr),u=jr(e),d=q(i,xr),ee=Mr(e),f=Er(i),p=c?Dr(i):[],m=n.length>0&&n.every(J),te=r.length>0&&r.every(J),h=[...n,...r].some(e=>!J(e)),ne=[...n,...r].some(J),g=!h&&ne&&a,re=g||c?[...new Set([...n,...g?f:[],...p])]:n,ie=a||c||h,ae=ie&&g?Or(re,i):re.filter(e=>!J(e)),_=ie&&g?Or(r,i):r.filter(e=>!J(e)),oe=[...new Set([...ae,..._].filter(e=>!J(e)))],v=!Nr(e);return{isCivilProfile:!0,serviceHits:Tr(ae),keywordHits:Tr(_),hasWeakOnlyFit:!a&&!c&&!h&&(m||te),hasIndoorMismatch:l&&!a&&!u,hasConsultingMismatch:d&&!ee,hasWinterOnlyFit:c&&!a,hasSecondaryOnlyFit:h&&v&&oe.length<=2&&f.length>=3,hasPromotedBroadFit:g}}function Fr(e){let t=E(e.location);if(Hr(t)&&Ur(e))return!1;let n=E(`${e.title} ${e.description} ${e.location}`);return[`all iceland`,`iceland`,`island`].some(e=>t.includes(e))?!0:[`national`,`landsvist`,`nationwide`].some(e=>n.includes(e))}function Ir(e){return[...e.locations||[],...e.serviceAreas||[],e.baseLocation].filter(Boolean)}function Lr(e,t){let n=Ir(e);if(!n.length)return!1;let r=sn(t);if(n.includes(`All Iceland`)){let e=E(Vr(t));return r===`IS`||e.includes(`iceland`)||e.includes(`island`)}if(n.includes(`Remote / Online`)&&Vr(t)===`Remote / Online`)return!0;if(!r||r!==`IS`&&n.some(e=>E(e).includes(`iceland`)))return!1;let i=E(Vr(t));return n.some(e=>{let t=E(e);return t?t===i||t===`reykjavik`&&[`reykjavik`,`capital area`,`hofudborgarsvaedid`].includes(i)||t===`capital area`&&[`reykjavik`,`capital area`,`hofudborgarsvaedid`].includes(i)?!0:i.includes(t)||t.includes(i):!1})}function Rr(e,t){return e?Lr(e,t)?`local_match`:e.locations?.includes(`Remote / Online`)&&Vr(t)===`Remote / Online`?`remote_match`:Fr(t)&&(Br(t)||sn(t)===`IS`)?`national_match`:Vr(t)===`Remote / Online`&&e.remoteProjects?`remote_match`:Br(t)&&(e.nationalProjects||e.willingToTravel)?`outside_area_possible`:`outside_area_low_confidence`:`outside_area_low_confidence`}function zr(e,t){let n=Rr(e,t);return n===`local_match`?`Local match`:n===`national_match`?`National opportunity`:n===`remote_match`?`Remote opportunity`:n===`outside_area_possible`?`Outside base area but travel allowed`:n===`outside_area_low_confidence`?`Outside selected area; low-confidence location match`:null}function Br(e){if(sn(e)===`IS`)return!0;let t=E(Vr(e));return[`iceland`,`island`,`all iceland`,`reykjavik`,`capital area`,`hofudborgarsvaedid`,`east iceland`,`west iceland`,`north iceland`,`south iceland`,`sudurnes`].some(e=>t.includes(e))}function Vr(e={}){let t=String(e.location||``).trim(),n=E(t);return t&&!Hr(n)?t:Ur(e)||t}function Hr(e){return!e||e===`unknown`||e===`all iceland`||e===`iceland`||e===`island`}function Ur(e={}){let t=e.rawPayload&&typeof e.rawPayload==`object`?e.rawPayload:{},n=E([e.title,e.description,e.buyer,t.buyer,t.extracted_buyer,t.source_name,t.extracted_location,t.location].filter(Boolean).join(` `));return n.includes(`reykjavik`)||n.includes(`reykjavikurborg`)||n.includes(`hofudborgarsvaedid`)?`Reykjavík / Höfuðborgarsvæðið`:``}function Wr(e,t){return t.estimatedValue?!(e.minProjectValue&&t.estimatedValue<e.minProjectValue||e.maxProjectValue&&t.estimatedValue>e.maxProjectValue):!!e.allowUnknownValue}function Gr(e,t){let n=String(e.industry||``).toLowerCase(),r=String(t.category||``).toLowerCase();return r.includes(n)||n.includes(r)}function Kr(e,t){if(!e)return{...t,matchScore:0,matchLabel:`Weak match`,matchReasons:[],risks:[],nextSteps:[]};let n=hr(t),r=0,i=[],a=[];Gr(e,t)&&(r+=35,i.push(`Matches your ${e.industry} industry`));let o=Pr(e,t,(e.services||[]).filter(e=>G(n,e)),(e.includeKeywords||[]).filter(e=>G(n,e)));for(let e of o.serviceHits)r+=10,i.push(`Mentions your service: ${e}`);for(let e of o.keywordHits)r+=8,i.push(`Contains your keyword: ${e}`);let s=Rr(e,t),c=zr(e,t);if(s===`local_match`)r+=22,i.push(c);else if(s===`national_match`)r+=16,i.push(c);else if(s===`remote_match`)r+=14,i.push(c);else if(s===`outside_area_possible`){let n=Number(e.minimumProjectValueForTravel||0),o=n&&t.estimatedValue&&Number(t.estimatedValue)<n;r+=o?-4:4,i.push(c),a.push(o?`Outside base area and below your preferred travel project value`:`Check travel cost, project size and delivery capacity`)}else r-=8,a.push(`Outside selected area; location match is low confidence`);o.hasWinterOnlyFit&&s===`local_match`&&(r+=12,i.push(`Local winter service fit`)),Wr(e,t)?(r+=10,t.estimatedValue&&i.push(`Project value is inside your preferred range`)):(r-=25,a.push(`Estimated project value is outside your preferred range`));let l=x(t.deadline);t.deadline?l>=0&&l<=30?(r+=8,i.push(`Deadline is coming up soon`)):l<0&&(r-=50,a.push(`Deadline has passed`)):a.push(wi(t));for(let t of e.excludeKeywords||[])G(n,t)&&(r-=18,a.push(`Contains exclude keyword: ${t}`));return(t.requirements||[]).some(e=>G(e,`certification`)||G(e,`license`))&&a.push(`May require certification or license documentation`),t.difficulty===`high`&&a.push(`This appears to be a higher-complexity opportunity`),o.hasWeakOnlyFit&&(r=Math.min(r,40),a.push(`Only broad construction/procurement terms matched; verify fit`)),o.hasIndoorMismatch&&(r=Math.min(r-20,40),a.push(`Appears to be indoor/building finishing work outside your core civil services`)),o.hasConsultingMismatch&&(r=Math.min(r-30,35),a.push(`Appears to be design, consulting, supervision, or project management work outside your execution services`)),o.hasSecondaryOnlyFit&&(r=Math.min(r,84),a.push(`Secondary service match in a broader infrastructure tender; verify scope`)),o.hasPromotedBroadFit&&(r=Math.min(r,72),a.push(`Broad construction terms matched; verify the specific work type`)),o.hasWinterOnlyFit&&(r=Math.min(r,68),a.push(`Winter/snow service fit; verify capacity and scope`)),r=Math.max(0,Math.min(100,Math.round(r))),{...t,matchScore:r,matchLabel:Jr(r),matchReasons:i.slice(0,5),risks:[...new Set(a)].slice(0,4),nextSteps:[`Open the source documents`,`Confirm mandatory requirements`,`Check capacity and profitability`,`Prepare questions before the deadline`]}}function qr(e){if(!k.profile||!kr(k.profile))return e;let t=Kr(k.profile,e);return Number(t.matchScore||0)>=Number(e.matchScore||0)?e:{...e,matchScore:t.matchScore,matchLabel:t.matchLabel,matchReasons:t.matchReasons,risks:t.risks,nextSteps:t.nextSteps}}function Jr(e){return e>=85?`Strong match`:e>=65?`Good match`:e>=45?`Possible match`:`Weak match`}function Yr(){if(k.storedMatches.length)return k.storedMatches.filter(Os).filter(Qr).filter(N).filter(e=>!k.ignored.includes(e.id)).map(qr).sort((e,t)=>t.matchScore-e.matchScore||x(e.deadline)-x(t.deadline));let e=k.profile||(k.user?null:Ue);return e?k.opportunities.filter(Os).map(t=>Kr(e,t)).filter(Qr).filter(N).filter(e=>!k.ignored.includes(e.id)).sort((e,t)=>t.matchScore-e.matchScore||x(e.deadline)-x(t.deadline)):[]}function Xr(){return k.storedMatches.filter(Os).filter(Qr).filter(N).filter(e=>!k.ignored.includes(e.id)).sort((e,t)=>t.matchScore-e.matchScore||x(e.deadline)-x(t.deadline))}function Zr(){let e=k.profile||(k.user?null:Ue);return e?k.opportunities.filter(Os).map(t=>Kr(e,t)).filter(Qr).filter(N).filter(e=>!k.ignored.includes(e.id)).sort((e,t)=>ci(e)-ci(t)||t.matchScore-e.matchScore||x(e.deadline)-x(t.deadline)):[]}function Qr(e){return k.isAdmin&&k.filters.label===`all_opportunities`?!0:ps(e)}function $r(e={}){return String(e.safetyStatus||e.safety_status||`auto_approved`)}function ei(e){return[...Xr(),...Zr()].find(t=>t.id===e)}function ti(){let e=ni([`all_opportunities`,`needs_review`].includes(k.filters.label)?Zr():Xr());if(k.filters.label===`recommended`){let t=e.filter(ii),n=e.filter(ai);return si(t.length?t:n)}return si(e.filter(ri))}function ni(e){return e.filter(e=>{let t=k.filters.search.toLowerCase();return!(t&&!hr(e).includes(t)||k.filters.category!==`all`&&e.category!==k.filters.category||k.filters.location!==`all`&&e.location!==k.filters.location||k.filters.type!==`all`&&e.type!==k.filters.type||k.filters.savedOnly&&!k.saved.includes(e.id))})}function ri(e){let t=k.filters.label;return t===`all`||t===`all_opportunities`?!0:t===`needs_review`?P(e.qualityStatus,e)===`needs_review`:t===`recommended`?ii(e):t===`strong`?e.matchLabel===`Strong match`||e.matchScore>=85:t===`possible`?[`Possible match`,`Weak match`].includes(e.matchLabel)||e.matchScore<65:e.matchLabel===t}function ii(e){return!oi(e)||ms(e)?!1:e.matchScore>=85||e.matchLabel===`Strong match`?!0:!(P(e.qualityStatus,e)===`needs_review`||on(L(e)))}function ai(e){return!oi(e)||ms(e)?!1:e.matchScore>=85||e.matchLabel===`Strong match`?!0:!(P(e.qualityStatus,e)===`needs_review`||on(L(e)))}function oi(e){return[`Strong match`,`Good match`,`Possible match`].includes(e.matchLabel)||e.matchScore>=45}function si(e){return[...e].sort((e,t)=>ci(e)-ci(t)||t.matchScore-e.matchScore||x(e.deadline)-x(t.deadline))}function ci(e){let t=F(e);if(t===`confirmed_tender`)return 0;if(t===`early_opportunity`)return 1;if(t===`market_signal`)return 2;if(t===`news_context`)return 8;if(t===`not_opportunity`)return 9;let n=P(e.qualityStatus,e);return n===`confirmed_tender`?0:n===`early_signal`?1:2}function li({visibleCount:e,storedMatchCount:t,filteredStoredCount:n,availableCount:r,recommendedCount:i,strongCount:a,companyName:o}){let s=k.filters.label;return k.language===`is`?s===`all_opportunities`?`${r} tækifæri eru til í kerfinu. Sýni ${e} sýnileg tækifæri til yfirferðar.`:s===`needs_review`?`${r} tækifæri eru til í kerfinu. Sýni ${e} atriði sem þarf að staðfesta.`:s===`all`?`${t} tækifæri fundust sem gætu passað við ${o}. Sýni ${e}.`:s===`strong`?`${t} tækifæri fundust sem gætu passað við ${o}. Sýni ${e} sterkar samsvaranir.`:s===`recommended`?e?`${t} tækifæri fundust sem gætu passað við ${o}. Sýni ${e} ráðlögð eða möguleg tækifæri.`:a>0?`${a} sterkar samsvaranir eru til fyrir ${o}, en þær eru faldar af núverandi síum.`:n>0?`${n} tækifæri eru falin af gæðasíum. Notið Allar samsvaranir eða Þarfnast staðfestingar til að skoða þau.`:`Engar ráðlagðar samsvaranir fyrir ${o} enn. ${r} tækifæri eru til í kerfinu, en ekkert passar nógu sterkt við þennan prófíl.`:s===`possible`?`${t} tækifæri fundust sem gætu passað við ${o}. Sýni ${e} mögulegar eða veikar samsvaranir.`:`${t} tækifæri fundust sem gætu passað við ${o}. Sýni ${e} tækifæri.`:s===`all_opportunities`?`${r} opportunities are available in the system. Showing ${e} visible opportunities for inspection.`:s===`needs_review`?`${r} opportunities are available in the system. Showing ${e} needs-review opportunities.`:s===`all`?`${t} opportunities may fit ${o}. Showing all ${e}.`:s===`strong`?`${t} opportunities may fit ${o}. Showing ${e} strong matches.`:s===`recommended`?e?`${t} opportunities may fit ${o}. Showing ${e} recommended or possible matches.`:a>0?`${a} strong ${a===1?`match exists`:`matches exist`} for ${o}, but ${a===1?`it is`:`they are`} hidden by your current filters.`:n>0?`${n} ${n===1?`opportunity is`:`opportunities are`} hidden from Recommended by quality checks. Use All matches or Needs review to inspect them.`:`No recommended matches for ${o} yet. ${r} opportunities are available in the system, but none match this profile strongly enough.`:s===`possible`?`${t} opportunities may fit ${o}. Showing ${e} possible or weak matches.`:`${t} opportunities may fit ${o}. Showing ${e} ${s.toLowerCase()} opportunities.`}async function ui(){if(!b||!k.companyId){k.opportunityActions=[];return}try{let{data:e,error:t}=await b.from(`company_opportunity_actions`).select(`id, company_id, opportunity_id, action_type, note, created_at, updated_at`).eq(`company_id`,k.companyId);if(t)throw t;k.opportunityActions=e||[],k.saved=k.opportunityActions.filter(e=>[`saved`,`watched`].includes(e.action_type)).map(e=>e.opportunity_id),k.ignored=k.opportunityActions.filter(e=>e.action_type===`ignored`).map(e=>e.opportunity_id)}catch(e){console.error(`Failed to load company opportunity actions:`,e),k.opportunityActions=[],k.saved=[],k.ignored=[]}}async function di(t,n){if(!b||!k.companyId){(n===`saved`||n===`watched`)&&(k.saved=Array.from(new Set([...k.saved,t])),k.ignored=k.ignored.filter(e=>e!==t)),n===`ignored`&&(k.ignored=Array.from(new Set([...k.ignored,t])),k.saved=k.saved.filter(e=>e!==t)),ir(e.saved,k.saved),ir(e.ignored,k.ignored);return}let{error:r}=await b.from(`company_opportunity_actions`).upsert({company_id:k.companyId,opportunity_id:t,action_type:n,updated_at:new Date().toISOString()},{onConflict:`company_id,opportunity_id`});if(r)throw r;await ui()}async function fi(t){if(!b||!k.companyId){k.saved=k.saved.filter(e=>e!==t),k.ignored=k.ignored.filter(e=>e!==t),ir(e.saved,k.saved),ir(e.ignored,k.ignored);return}let{error:n}=await b.from(`company_opportunity_actions`).delete().eq(`company_id`,k.companyId).eq(`opportunity_id`,t);if(n)throw n;await ui()}async function pi(e){let t=`Opportunity saved`;try{k.saved.includes(e)?(await fi(e),t=`Removed from saved`):await di(e,`saved`),V(t,`success`),X()}catch(e){console.error(`Failed to update saved opportunity:`,e),V(`Could not update saved opportunity`,`error`)}}async function mi(e){try{await di(e,`ignored`),k.selectedOpportunityId===e&&(k.selectedOpportunityId=null),V(`Opportunity hidden`,`success`),X()}catch(e){console.error(`Failed to ignore opportunity:`,e),V(`Could not hide opportunity`,`error`)}}async function hi(e){try{await fi(e),X()}catch(e){console.error(`Failed to unignore opportunity:`,e),V(`Could not restore opportunity`,`error`)}}function gi(e){k.selectedOpportunityId=e,document.body.classList.add(`modal-open`),X()}function _i(){vi(),X()}function vi(){k.selectedOpportunityId=null,document.body.classList.remove(`modal-open`)}function yi(){if(!k.selectedOpportunityId){document.body.classList.remove(`modal-open`);return}if(!ei(k.selectedOpportunityId)){k.selectedOpportunityId=null,document.body.classList.remove(`modal-open`);return}document.body.classList.add(`modal-open`)}function bi(e){if(!e)return{label:$(ze),className:`deadline danger`};let t=x(e);return t===999?{label:$(ze),className:`deadline danger`}:{label:O(`daysLeft`,{count:t}),className:t<=14?`deadline danger`:`deadline`}}function xi(e){let t=String(e||``).trim().match(/^(\d{4}-\d{2}-\d{2})T(\d{2}):(\d{2})/);return t?`${ls(t[1])} kl. ${t[2]}:${t[3]}`:``}function Si(e){return e?S(e):$(ze)}function Ci(e){return e?.deadlineAt?xi(e.deadlineAt):e?.deadline?ls(e.deadline):$(wi(e))}function wi(e){if(I(e)){let t=Kt(e);return[`tender_awarded`,`awarded`,`already_tendered`,`announced`].includes(t)?`Tender appears already announced/awarded — verify source article.`:t===`upcoming_tender`?`Formal tender deadline not found yet — monitor source article.`:Be}return String(e?.rawPayload?.deadline_warning||``).trim()||ze}function Ti(e){if(!e?.deadline)return{label:$(wi(e)),className:`deadline danger`};let t=xi(e.deadlineAt);return t?{label:t,className:x(e.deadline)<=14?`deadline danger`:`deadline`}:bi(e.deadline)}function Y(e){return e?Ee(e,`ISK`):k.language===`is`?`Ekki gefið upp`:`Value unknown`}function Ei(){return[...new Set(k.opportunities.map(e=>e.category))].sort()}function Di(){return[...new Set(k.opportunities.map(e=>e.location))].sort()}function Oi(){return[...new Set(k.opportunities.map(e=>e.type))].sort()}function ki(e){return e===`Strong match`?`badge strong`:e===`Good match`?`badge good`:e===`Possible match`?`badge possible`:`badge weak`}function X(){let e=document.getElementById(`app`),t=Ke(k.route),n=``;if(n=k.isBooting||!k.authLoaded||!k.profileLoaded||!k.adminLoaded?Ni():t===`/`?Ba():t===`/login`?Xi():t===`/signup`?$i():t===`/forgot-password`?Zi():t===`/reset-password`?Qi():t===`/onboarding`?Va():t===`/dashboard`?k.user?Xa():z():t===`/report`?k.user?Ko():z():t===`/pricing`?Xs():t===`/privacy`?Ri():t===`/terms`?zi():t===`/data-sources`?Bi():t===`/cookies`?Vi():t===`/security`?Hi():t===`/contact`?Ui():t===`/settings`?k.user?Zs():z():t===`/admin`?k.user?k.isAdmin?go():jn():z():Ba(),e.innerHTML=n,k.selectedOpportunityId){let t=ei(k.selectedOpportunityId);t?(document.body.classList.add(`modal-open`),e.insertAdjacentHTML(`beforeend`,ho(t))):yi()}else yi()}function Ai(e){let t=window.scrollX,n=window.scrollY,r=ji(e),i=typeof e.selectionStart==`number`?e.selectionStart:null,a=typeof e.selectionEnd==`number`?e.selectionEnd:null;X(),requestAnimationFrame(()=>{if(window.scrollTo(t,n),!r)return;let e=document.querySelector(r);e&&(e.focus({preventScroll:!0}),i!==null&&a!==null&&typeof e.setSelectionRange==`function`&&[`text`,`search`,`email`,`url`,`tel`,`password`,``].includes(e.type||``)&&e.setSelectionRange(i,a))})}function ji(e){return e?.dataset?e.dataset.adminFilter?`[data-admin-filter="${Mi(e.dataset.adminFilter)}"]`:e.dataset.adminCompanyFilter?`[data-admin-company-filter="${Mi(e.dataset.adminCompanyFilter)}"]`:``:``}function Mi(e){return window.CSS?.escape?window.CSS.escape(String(e)):String(e).replace(/["\\]/g,`\\$&`)}function Ni(){return Z(`
    <div class="app-loader">
      <div class="loader-mark" aria-label="${D(O(`loadingLabel`))}">
        <span></span>
      </div>
    </div>
  `)}function Z(e){let t=!!k.user,n=!!k.profile,r=Pi(t,n),i=Ki(t,n);return`
    <header class="site-header ${k.isMobileMenuOpen?`is-menu-open`:``}">
      <div class="header-top">
        <button class="brand" data-action="go" data-href="/">
          <img class="brand-logo" src="./logo.png" alt="VerkRadar" />
        </button>
        <div class="mobile-header-actions">
          <button class="language-toggle mobile-header-language-toggle" type="button" data-action="toggle-language" aria-label="Switch language">
            <span class="${k.language===`is`?`active`:``}">IS</span>
            <span class="${k.language===`en`?`active`:``}">EN</span>
          </button>
          <button
            class="menu-toggle"
            type="button"
            data-action="toggle-mobile-menu"
            aria-label="${k.isMobileMenuOpen?O(`closeMenu`):O(`openMenu`)}"
            aria-expanded="${k.isMobileMenuOpen?`true`:`false`}"
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
          ${r.map(([e,t])=>t.startsWith(`#`)?`<button data-action="scroll-to" data-target="${t.slice(1)}">${e}</button>`:`<button data-action="go" data-href="${t}" ${k.route===t?`class="active"`:``}>${e}</button>`).join(``)}
        </nav>
        <div class="header-actions">
          <button class="language-toggle" type="button" data-action="toggle-language" aria-label="Switch language">
            <span class="${k.language===`is`?`active`:``}">IS</span>
            <span class="${k.language===`en`?`active`:``}">EN</span>
          </button>
          ${t?``:`<button class="btn btn-secondary header-login-btn btn-login" data-action="go" data-href="/login">${O(`login`)}</button>`}
          ${i?`<button class="btn btn-primary" data-action="go" data-href="${i.href}">${i.label}</button>`:``}
          ${t&&!k.isMobileMenuOpen?qi():``}
        </div>
      </div>
      ${Wi(r,i,t)}
    </header>
    <main>${e}</main>
    ${Fi()}
    ${k.toast?`
      <div class="toast toast-${k.toast.type}">
        <span class="toast-dot"></span>
        <span>${D(k.toast.message)}</span>
      </div>
    `:``}
  `}function Pi(e=!!k.user,t=!!k.profile){let n=e?t?[[O(`navDashboard`),`/dashboard`],[O(`navReport`),`/report`],[O(`navSettings`),`/settings`]]:[[O(`setupCompany`),`/onboarding`],[O(`navSettings`),`/settings`]]:[[O(`navHowItWorks`),`#how-it-works`],[O(`navSampleReport`),`#sample-report`],[O(`navPricing`),`/pricing`]];return e&&k.isAdmin&&n.push([`Admin`,`/admin`]),n}function Fi(){let e=[[O(`privacyPolicy`),`/privacy`],[O(`termsOfService`),`/terms`],[O(`dataSources`),`/data-sources`],[O(`security`),`/security`],[O(`contact`),`/contact`]];return`
    <footer class="site-footer">
      <div>
        <strong>VerkRadar</strong>
        <p>${D(O(`footerText`))}</p>
      </div>
      <nav aria-label="Legal and trust pages">
        ${e.map(([e,t])=>`<button type="button" data-action="go" data-href="${t}">${e}</button>`).join(``)}
      </nav>
    </footer>
  `}function Ii(e){return s(e,k.language)}function Li(e){let t=Ii(e);return Z(ne({language:k.language,escapeHtml:D,eyebrow:t.eyebrow,title:t.title,intro:t.intro,sections:t.sections}))}function Ri(){return Li(`privacy`)}function zi(){return Li(`terms`)}function Bi(){return Li(`data`)}function Vi(){return Ri()}function Hi(){return Li(`security`)}function Ui(){return Li(`contact`)}function Wi(e,t,n){return`
    <nav class="mobile-menu-panel" id="mobile-menu">
      <div class="mobile-menu-scroll">
      <div class="mobile-menu-links">
        ${e.map(([e,t])=>t.startsWith(`#`)?`<button type="button" data-action="mobile-scroll-to" data-target="${t.slice(1)}">${e}</button>`:`<button type="button" data-action="mobile-nav" data-href="${t}">${e}</button>`).join(``)}
      </div>
      ${Gi(t,n)}
      </div>
    </nav>
  `}function Gi(e,t){if(!t)return`
      <div class="mobile-account-section">
        ${e?`<button class="btn btn-primary mobile-cta" type="button" data-action="mobile-nav" data-href="${e.href}">${e.label}</button>`:``}
        <button class="btn btn-secondary" type="button" data-action="mobile-nav" data-href="/login">${O(`login`)}</button>
      </div>
    `;let n=k.profile?.companyName||O(`noCompanyProfile`),r=k.user?.email||``;return`
    <div class="mobile-account-section">
      <div class="mobile-account-header">
        <span class="profile-avatar">${D(Ji(n,r))}</span>
        <div>
          <strong>${D(n)}</strong>
          <small>${D(r)}</small>
        </div>
      </div>
      <div class="mobile-account-actions">
        ${k.profile?`<button type="button" data-action="mobile-nav" data-href="/dashboard">${O(`navDashboard`)}</button>
             <button type="button" data-action="mobile-nav" data-href="/settings">${O(`navSettings`)}</button>`:`<button type="button" data-action="mobile-nav" data-href="/onboarding">${O(`setupCompany`)}</button>
             <button type="button" data-action="mobile-nav" data-href="/settings">${O(`navSettings`)}</button>`}
        <button type="button" class="mobile-logout" data-action="logout">${O(`logout`)}</button>
      </div>
    </div>
  `}function Ki(e,t){return e?t?null:{href:`/onboarding`,label:O(`createProfile`)}:{href:`/signup`,label:O(`getStarted`)}}function qi(){let e=k.profile?.companyName||O(`noCompanyProfile`),t=k.user?.email||``,n=Ji(e,t);return`
    <div class="profile-menu">
      <button type="button" class="profile-pill" data-action="toggle-profile-menu" aria-haspopup="menu" aria-expanded="${k.profileMenuOpen?`true`:`false`}">
        <span class="profile-avatar">${D(n)}</span>
        <span class="profile-name">${D(e)}</span>
        <span class="profile-chevron" aria-hidden="true"></span>
      </button>

      ${k.profileMenuOpen&&!k.isMobileMenuOpen&&!lt()?`
        <div class="profile-dropdown" role="menu">
          <div class="profile-dropdown-header">
            <strong>${D(e)}</strong>
            <small>${D(t)}</small>
          </div>
          <div class="profile-dropdown-divider"></div>
          ${k.profile?`
            <button type="button" data-action="go" data-href="/dashboard" role="menuitem">${O(`navDashboard`)}</button>
            <button type="button" data-action="go" data-href="/settings" role="menuitem">${O(`navSettings`)}</button>
            ${k.isAdmin?`<button type="button" data-action="go" data-href="/admin" role="menuitem">Admin</button>`:``}
          `:`
            <button type="button" data-action="go" data-href="/onboarding" role="menuitem">${O(`createProfile`)}</button>
            ${k.isAdmin?`<button type="button" data-action="go" data-href="/admin" role="menuitem">Admin</button>`:``}
          `}
          <div class="profile-dropdown-divider"></div>
          <button type="button" class="danger" data-action="logout" role="menuitem">${O(`logout`)}</button>
        </div>
      `:``}
    </div>
  `}function Ji(e,t){return(e&&![`No company profile`,O(`noCompanyProfile`)].includes(e)?e:t||`VR`).split(/[^a-zA-Z0-9áéíóúýþæöðÁÉÍÓÚÝÞÆÖÐ]+/).filter(Boolean).slice(0,2).map(e=>e[0]).join(``).toUpperCase()||`VR`}function Yi(e,t){return Z(`
    <section class="empty-state">
      <h1>${D(e)}</h1>
      <p>${D(t)}</p>
      <button class="btn btn-primary" data-action="go" data-href="/onboarding">${D(O(`createProfile`))}</button>
      <button class="btn btn-secondary" data-action="load-demo">${D(O(`loadDemoCompany`))}</button>
    </section>
  `)}function Xi(){return k.user?Yi(k.language===`is`?`Þú ert þegar skráð(ur) inn`:`Already logged in`,k.language===`is`?`Opnaðu mælaborðið eða breyttu fyrirtækjaprófílnum.`:`Open your dashboard or edit your company profile.`):Z(l({t:O,escapeHtml:D,authForm:k.authForm,authSubmitting:k.authSubmitting,authMessage:k.authMessage}))}function Zi(){return k.user?Yi(k.language===`is`?`Þú ert þegar skráð(ur) inn`:`Already logged in`,k.language===`is`?`Opnaðu mælaborðið eða breyttu fyrirtækjaprófílnum.`:`Open your dashboard or edit your company profile.`):Z(u({t:O,escapeHtml:D,authForm:k.authForm,authSubmitting:k.authSubmitting,authMessage:k.authMessage}))}function Qi(){return Z(d({t:O,escapeHtml:D,authForm:k.authForm,authSubmitting:k.authSubmitting,authMessage:k.authMessage}))}function $i(){if(k.user){let e=dt();return setTimeout(()=>A(e),0),Z(`
      <section class="empty-state">
        <h1>${D(O(`alreadyLoggedInTitle`))}</h1>
        <p>${D(O(`alreadyLoggedInText`))}</p>
      </section>
    `)}return Z(ee({t:O,escapeHtml:D,authForm:k.authForm,authSubmitting:k.authSubmitting,authMessage:k.authMessage}))}function ea(){if(!k.importLoading&&!k.importStatus)return``;if(k.importLoading)return`<section class="import-panel"><strong>Importing TED notices...</strong><p>Fetching recent TED notices and refreshing matches.</p></section>`;let e=k.importStatus||{},t=Array.isArray(e.errors)?e.errors:[],n=k.importedTedOpportunities||[];return`
    <section class="import-panel">
      ${k.importStatus?`
        <div class="import-stats">
          <span><strong>${Number(e.fetched||0)}</strong> fetched</span>
          <span><strong>${Number(e.inserted||0)}</strong> inserted</span>
          <span><strong>${Number(e.updated||0)}</strong> updated</span>
          <span><strong>${Number(e.skipped||0)}</strong> skipped</span>
          <span><strong>${Number(e.matched||0)}</strong> matches</span>
          <span><strong>${Number(e.reports_generated||0)}</strong> reports</span>
        </div>
        ${t.length?`<ul class="risk-list">${t.map(e=>`<li>${D(e)}</li>`).join(``)}</ul>`:`<p>TED import completed.</p>`}
        ${t.length?``:`
          <div class="import-result-head">
            <h3>Newest imported TED opportunities</h3>
            <button class="btn btn-secondary" type="button" data-action="go" data-href="/dashboard">View imported opportunities on dashboard</button>
          </div>
          ${n.length?`
            <div class="imported-opportunities">
              ${n.map(na).join(``)}
            </div>
          `:`<div class="empty-card">No imported TED opportunities were returned by the latest-results query.</div>`}
        `}
      `:``}
    </section>
  `}function ta(){if(!k.connectorImportLoading&&!k.connectorTestingSourceId&&!k.connectorImportStatus)return``;if(k.connectorImportLoading||k.connectorTestingSourceId)return`<section class="import-panel"><strong>Running automatic source imports...</strong><p>Fetching enabled source connectors in a limited batch. Refresh matches separately after imports finish.</p></section>`;let e=k.connectorImportStatus||{},t=Array.isArray(e.errors)?e.errors:[],n=Array.isArray(e.failedSources)?e.failedSources:[],r=Array.isArray(e.timedOutSources)?e.timedOutSources:[],i=t.length||n.length||r.length,a=Number.isFinite(Number(e.sources_processed))?`<p>${Number(e.sources_processed||0)} source${Number(e.sources_processed||0)===1?``:`s`} processed${Number(e.sources_remaining||0)?` · ${Number(e.sources_remaining||0)} remaining for next run`:``}.</p>`:``;return`
    <section class="import-panel">
      <div class="import-stats">
        <span><strong>${Number(e.fetched||0)}</strong> fetched</span>
        <span><strong>${Number(e.inserted||0)}</strong> inserted</span>
        <span><strong>${Number(e.updated||0)}</strong> updated</span>
        <span><strong>${Number(e.skipped||0)}</strong> skipped</span>
        <span><strong>${Number(e.matched||0)}</strong> matches</span>
        <span><strong>${Number(e.reports_generated||0)}</strong> reports</span>
      </div>
      ${e.message?`<p>${D(e.message)}</p>`:a}
      ${e.matching_skipped?`<p>Matching was skipped for this batch to stay within Edge Function CPU limits. Refresh company matches from Admin after imports finish.</p>`:``}
      ${e.reports_skipped?`<p>Report generation was skipped for this batch.</p>`:``}
      ${n.length?`
        <div class="import-failure-list">
          <h3>${n.length} source${n.length===1?``:`s`} failed</h3>
          ${n.map(e=>`
            <div class="import-failure-row">
              <strong>${D(e.source||`Unknown source`)}</strong>
              <p>${D(e.message||e.error||`Unknown source import error`)}</p>
              ${e.endpoint_url?`<small>${D(e.endpoint_url)}</small>`:``}
            </div>
          `).join(``)}
        </div>
      `:``}
      ${r.length?`
        <div class="import-failure-list">
          <h3>${r.length} source${r.length===1?``:`s`} timed out or were skipped</h3>
          ${r.map(e=>`
            <div class="import-failure-row">
              <strong>${D(e.source||`Unknown source`)}</strong>
              <p>${D(e.message||e.reason||`Skipped because the source import was close to the runtime limit`)}</p>
              ${e.endpoint_url?`<small>${D(e.endpoint_url)}</small>`:``}
            </div>
          `).join(``)}
        </div>
      `:``}
      ${t.length?`<ul class="risk-list">${t.map(e=>`<li>${D(e)}</li>`).join(``)}</ul>`:``}
      ${i?`<p>Automatic source import completed with source-level failures. Successful sources were still imported.</p>`:`<p>Automatic source import completed.</p>`}
    </section>
  `}function na(e){let t=e.url&&e.url!==`#`,n=k.adminUpdatingId===e.id,r=k.adminDeletingId===e.id;return`
    <div class="imported-opportunity-row">
      <div class="imported-opportunity-main">
        <h4>${D(e.title)}</h4>
        <span class="source-pill language-pill">Original language</span>
        <p>${D(Is(e))}</p>
      </div>
      <dl>
        <div>
          <dt>Country / location</dt>
          <dd>${D([e.countryCode,e.location].filter(Boolean).join(` / `)||`Unknown`)}</dd>
        </div>
        <div>
          <dt>Deadline</dt>
          <dd>${D(S(e.deadline))}</dd>
        </div>
        <div>
          <dt>URL</dt>
          <dd>${t?`<a href="${D(e.url)}" target="_blank" rel="noreferrer">Open TED</a>`:`No URL`}</dd>
        </div>
        <div>
          <dt>Status</dt>
          <dd>${D(e.status||`Unknown`)}</dd>
        </div>
        <div>
          <dt>Imported source</dt>
          <dd>${D(e.source||`Unknown`)}</dd>
        </div>
        <div>
          <dt>External ID</dt>
          <dd>${D(e.externalId||`Unknown`)}</dd>
        </div>
      </dl>
      <div class="imported-opportunity-actions">
        <button class="btn btn-secondary" type="button" data-action="hide-imported-opportunity" data-id="${D(e.id)}" ${n||e.status===`hidden`?`disabled`:``}>
          ${n?`Updating...`:`Hide`}
        </button>
        <button class="btn btn-secondary" type="button" data-action="mark-imported-relevant" data-id="${D(e.id)}" ${n||e.status===`open`?`disabled`:``}>
          ${n?`Updating...`:`Mark relevant`}
        </button>
        <button class="btn btn-ghost" type="button" data-action="delete-opportunity" data-id="${D(e.id)}" ${r?`disabled`:``}>
          ${r?`Deleting...`:`Delete`}
        </button>
      </div>
    </div>
  `}function ra(){return(k.importRuns||[])[0]||null}function ia(e){let t=String(e||``).toLowerCase();return[`success`,`completed`,`complete`,`connected`].includes(t)?`is-success`:[`running`,`started`,`pending`,`planned`].includes(t)?`is-running`:[`error`,`failed`,`failure`].includes(t)?`is-error`:``}function aa(){let e=ra();return k.importRunsLoading&&!e?`
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
        <span class="status-pill ${ia(e.status)}">${D(e.status||`unknown`)}</span>
      </div>
      <div class="ops-metrics">
        <div><span>Type</span><strong>${D(e.run_type||`ted-import`)}</strong></div>
        <div><span>Mode</span><strong>${D(e.import_mode||`unknown`)}</strong></div>
        <div><span>Fetched</span><strong>${Number(e.fetched||0)}</strong></div>
        <div><span>Inserted</span><strong>${Number(e.inserted||0)}</strong></div>
        <div><span>Updated</span><strong>${Number(e.updated||0)}</strong></div>
        <div><span>Skipped</span><strong>${Number(e.skipped||0)}</strong></div>
        <div><span>Matched</span><strong>${Number(e.matched||0)}</strong></div>
        <div><span>Reports</span><strong>${Number(e.reports_generated||0)}</strong></div>
        <div><span>Started</span><strong>${D(C(e.started_at))}</strong></div>
        <div><span>Finished</span><strong>${D(C(e.finished_at))}</strong></div>
      </div>
      ${e.error?`<div class="admin-message is-error">${D(e.error)}</div>`:``}
      ${da(e)}
    </section>
  `:`
      <section class="ops-card automation-status-card">
        <div class="card-header">
          <div>
            <h2>Automation status</h2>
            <p>No automation runs yet.</p>
          </div>
        </div>
        ${k.importRunsError?`<div class="admin-message is-error">${D(k.importRunsError)}</div>`:``}
      </section>
    `}function oa(){let e=window.VERKRADAR_SUPABASE_URL||`https://asojxjbsgqbfpbepojzh.supabase.co`,t=String(e).match(/^https:\/\/([^.]+)\.supabase\.co/i);return t?`https://supabase.com/dashboard/project/${t[1]}/functions/import-ted/logs`:``}function sa(){let e=oa();return`
    <section class="ops-card">
      <div class="card-header">
        <div>
          <h2>Automation actions</h2>
          <p>Run the pipeline manually or refresh the operations view.</p>
        </div>
      </div>
      <div class="automation-actions">
        <button class="btn btn-primary" type="button" data-action="import-ted" ${k.importLoading?`disabled`:``}>
          ${k.importLoading?`Running TED import...`:`Run TED import now`}
        </button>
        <button class="btn btn-secondary" type="button" data-action="import-source-connectors" ${k.connectorImportLoading?`disabled`:``}>
          ${k.connectorImportLoading?`Running source imports...`:`Run automatic source imports now`}
        </button>
        <button class="btn btn-secondary" type="button" data-action="refresh-admin-status" ${k.importRunsLoading||k.adminReportsLoading?`disabled`:``}>
          ${k.importRunsLoading||k.adminReportsLoading?`Refreshing...`:`Refresh status`}
        </button>
        ${e?`<a class="btn btn-secondary" href="${D(e)}" target="_blank" rel="noreferrer">View Edge Function logs</a>`:``}
      </div>
      <label class="import-mode-control">
        Import mode
        <select data-import-mode ${k.importLoading?`disabled`:``}>
          <option value="nordic" ${k.tedImportMode===`nordic`?`selected`:``}>Nordic only</option>
          <option value="iceland" ${k.tedImportMode===`iceland`?`selected`:``}>Iceland only</option>
          <option value="eu-broad" ${k.tedImportMode===`eu-broad`?`selected`:``}>EU broad test</option>
        </select>
      </label>
      ${ea()}
      ${ta()}
    </section>
  `}function ca(){let e=k.importRuns||[];return`
    <section class="ops-card">
      <div class="card-header">
        <div>
          <h2>Latest import runs</h2>
          <p>Last ${e.length||0} recorded automation runs.</p>
        </div>
      </div>
      ${k.importRunsError?`<div class="admin-message is-error">${D(k.importRunsError)}</div>`:``}
      ${k.importRunsLoading&&!e.length?`<div class="empty-card">Loading import runs...</div>`:e.length?`
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
              ${e.map(la).join(``)}
            </tbody>
          </table>
        </div>
      `:`<div class="empty-card">No automation runs yet.</div>`}
    </section>
  `}function la(e){let t=da(e,{compact:!0});return`
    <tr>
      <td>${D(C(e.started_at||e.finished_at))}</td>
      <td>${D(e.run_type||`ted-import`)}</td>
      <td><span class="status-pill ${ia(e.status)}">${D(e.status||`unknown`)}</span></td>
      <td>${Number(e.fetched||0)}</td>
      <td>${Number(e.inserted||0)}</td>
      <td>${Number(e.updated||0)}</td>
      <td>${Number(e.skipped||0)}</td>
      <td>${Number(e.matched||0)}</td>
      <td>${Number(e.reports_generated||0)}</td>
      <td>${e.error?D(e.error):``}</td>
    </tr>
    ${t?`
      <tr class="import-run-debug-row">
        <td colspan="10">${t}</td>
      </tr>
    `:``}
  `}function ua(e){let t=e?.details;if(!t)return{};if(typeof t==`string`)try{return JSON.parse(t)||{}}catch{return{}}return typeof t==`object`?t:{}}function da(e,t={}){let n=ua(e),r=n.skip_reasons&&typeof n.skip_reasons==`object`?n.skip_reasons:{},i=Array.isArray(n.skipped_samples)?n.skipped_samples:[],a=Array.isArray(n.per_source)?n.per_source:[],o=Object.entries(r).filter(([,e])=>Number(e)>0).sort((e,t)=>Number(t[1])-Number(e[1])).slice(0,5);return!o.length&&!i.length&&!a.length?``:`
    <div class="import-debug ${t.compact?`is-compact`:``}">
      <div class="import-debug-header">
        <strong>Skip diagnostics</strong>
        <span>${Number(e.skipped||0)} skipped · ${Number(n.connectors_checked||a.length||0)} connector${Number(n.connectors_checked||a.length||0)===1?``:`s`}</span>
      </div>
      ${a.length?`
        <div class="import-per-source">
          ${a.slice(0,8).map(e=>`
            <div>
              <strong>${D(e.source_name||`Unknown source`)}</strong>
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
            <span><strong>${Number(t)}</strong> ${D(fa(e))}</span>
          `).join(``)}
        </div>
      `:``}
      ${i.length?`
        <div class="import-skip-samples">
          ${i.slice(0,10).map(e=>`
            <div>
              <strong>${D(e.source_name||e.source||`Unknown source`)}</strong>
              <span>${D(e.title||`Untitled item`)}</span>
              <em>${D(fa(e.reason||`skipped`))}${e.matchedKeyword?`: ${D(e.matchedKeyword)}`:``}${e.final_quality_status?` · ${D(io(e.final_quality_status))}`:``}</em>
            </div>
          `).join(``)}
        </div>
      `:``}
    </div>
  `}function fa(e){return{missing_title:`missing title`,missing_url:`missing URL`,duplicate_existing_opportunity:`duplicate existing opportunity`,no_include_keyword_match:`no include keyword match`,matched_exclude_keyword:`matched exclude keyword`,low_quality_needs_review:`low quality needs review`,unsupported_connector:`unsupported connector`,parse_failed:`parse failed`,fetch_failed:`fetch failed`}[e]||String(e||`skipped`).replaceAll(`_`,` `)}function pa(){let e=k.importedTedOpportunities||[];return`
    <section class="ops-card">
      <div class="card-header">
        <div>
          <h2>Latest TED opportunities</h2>
          <p>Newest imported EU TED rows for review.</p>
        </div>
      </div>
      ${k.importedTedOpportunitiesError?`<div class="admin-message is-error">${D(k.importedTedOpportunitiesError)}</div>`:``}
      ${k.importedTedOpportunitiesLoading&&!e.length?`<div class="empty-card">Loading TED opportunities...</div>`:e.length?`
        <div class="imported-opportunities">
          ${e.map(na).join(``)}
        </div>
      `:`<div class="empty-card">No TED opportunities loaded yet.</div>`}
    </section>
  `}function ma(){let e=k.adminReports||[];return`
    <section class="ops-card">
      <div class="card-header">
        <div>
          <h2>Latest reports generated</h2>
          <p>Newest saved weekly report records.</p>
        </div>
      </div>
      ${k.adminReportsError?`<div class="admin-message is-error">${D(k.adminReportsError)}</div>`:``}
      ${k.adminReportsLoading&&!e.length?`<div class="empty-card">Loading reports...</div>`:e.length?`
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
              ${e.map(Sa).join(``)}
            </tbody>
          </table>
        </div>
      `:`<div class="empty-card">No generated reports yet.</div>`}
      ${k.selectedAdminReportId?Ca():``}
    </section>
  `}function ha(e){return{eu_ted:`EU TED`,ted:`EU TED`,api:`EU TED`,utbodsvefur:`Útboðsvefur`,municipal_website:`Municipal websites`,public_institution_page:`Public institution pages`,private_manual:`Private/manual leads`,manual:`Private/manual leads`,tender_portal:`Tender portals`}[e]||e||`Unknown`}function ga(e){return{ted_api:`TED API`,rss_feed:`RSS feed`,wordpress_rest:`WordPress REST`,official_api:`Official API`,page_monitor_allowed:`Allowed page monitor`,manual_fallback:`Manual fallback`,planned:`Planned`,permission_required:`Permission required`}[e]||e||`Planned`}function _a(e=[]){return e.reduce((e,t)=>{let n=t.raw_payload&&typeof t.raw_payload==`object`?t.raw_payload:{},r=P(n.quality_status||n.qualityStatus,t);return e.active+=1,r===`confirmed_tender`?e.confirmed+=1:r===`early_signal`?e.early+=1:e.needsReview+=1,e},{active:0,confirmed:0,early:0,needsReview:0})}function va(e){let t=e.source_status||{},n=e.source_connectors||{},r=String(n.status||t.status||``).toLowerCase(),i=String(n.connector_type||``).toLowerCase();return r.includes(`error`)?{label:`Error`,className:`is-error`,tone:`error`}:r===`permission_required`||i===`permission_required`?{label:`Permission required`,className:`is-permission`,tone:`planned`}:n.enabled&&[`connected`,`success`,`completed`,`complete`].includes(r)||n.enabled&&[`rss_feed`,`wordpress_rest`,`ted_api`].includes(i)?{label:`Connected`,className:`is-success`,tone:`connected`}:r===`planned`||i===`planned`?{label:`Planned`,className:`is-planned`,tone:`planned`}:{label:`Disabled`,className:`is-disabled`,tone:`disabled`}}function ya(){let e=k.sourceCoverage||[];return`
    <section class="ops-card">
      <div class="card-header">
        <div>
          <h2>Source coverage</h2>
          <p>Connected and planned lead sources for Icelandic opportunity coverage.</p>
        </div>
      </div>
      ${k.sourceCoverageError?`<div class="admin-message is-error">${D(k.sourceCoverageError)}</div>`:``}
      ${k.sourceCoverageLoading&&!e.length?`<div class="empty-card">Loading source coverage...</div>`:e.length?`
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
              ${e.map(ba).join(``)}
            </tbody>
          </table>
        </div>
      `:`<div class="empty-card">No sources configured yet.</div>`}
    </section>
  `}function ba(e){let t=e.source_status||{},n=e.source_connectors||{},r=va(e),i=n.enabled&&[`rss_feed`,`wordpress_rest`].includes(n.connector_type),a=k.connectorTestingSourceId===e.id,o=e.opportunityStats||{active:Number(t.active_opportunities_count||0),confirmed:0,early:0,needsReview:0},s=e.latestOpportunities||[],c=k.expandedSourceId===e.id,l=n.last_error||t.last_error||``;return`
    <tr class="${r.tone===`connected`?`source-row-connected`:`source-row-muted`}">
      <td>
        <strong>${D(e.name||`Unknown source`)}</strong>
        ${n.endpoint_url||e.base_url?`<br><a href="${D(n.endpoint_url||e.base_url)}" target="_blank" rel="noreferrer">${D(n.endpoint_url||e.base_url)}</a>`:``}
      </td>
      <td>${D(ha(e.source_type))}</td>
      <td>
        <strong>${D(ga(n.connector_type))}</strong>
        ${n.require_any_keyword===!1?`<br><span>Keyword match optional</span>`:`<br><span>Requires keyword match</span>`}
        ${Array.isArray(n.include_keywords)&&n.include_keywords.length?`<br><span>Includes: ${D(n.include_keywords.slice(0,5).join(`, `))}${n.include_keywords.length>5?`...`:``}</span>`:``}
        ${Array.isArray(n.exclude_keywords)&&n.exclude_keywords.length?`<br><span>Excludes: ${D(n.exclude_keywords.slice(0,5).join(`, `))}${n.exclude_keywords.length>5?`...`:``}</span>`:``}
      </td>
      <td>
        <span class="status-pill ${n.enabled?`is-success`:`is-disabled`}">${n.enabled?`Enabled`:`Disabled`}</span>
      </td>
      <td><span class="status-pill ${r.className}">${D(r.label)}</span></td>
      <td>${D(C(n.last_success_at||t.last_success_at))}</td>
      <td>${l?D(l):`<span class="muted-text">None</span>`}</td>
      <td>${Number(o.active||0)}</td>
      <td>${Number(o.confirmed||0)}</td>
      <td>${Number(o.early||0)}</td>
      <td>${Number(o.needsReview||0)}</td>
      <td>
        <button class="btn btn-secondary btn-small" type="button" data-action="test-source-connector" data-id="${D(e.id)}" ${!i||a||k.connectorImportLoading?`disabled`:``}>
          ${a?`Testing...`:`Test source`}
        </button>
        <button class="btn btn-ghost btn-small" type="button" data-action="toggle-source-items" data-id="${D(e.id)}" ${s.length?``:`disabled`}>
          ${c?`Hide items`:`View latest items`}
        </button>
      </td>
    </tr>
    ${c?xa(e):``}
  `}function xa(e){let t=e.latestOpportunities||[];return`
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
                      <strong>${D(t.title||`Untitled opportunity`)}</strong>
                      <span>${D(Fs(`buyer`,Me(t.buyer,e.name)))} · ${D(Si(t.deadline))}</span>
                    </div>
                    <span class="quality-badge ${D(r)}">${D(io(r))}</span>
                    ${t.url?`<a class="btn btn-ghost btn-small" href="${D(t.url)}" target="_blank" rel="noreferrer">Open</a>`:``}
                  </div>
                `}).join(``)}
            </div>
          `:`<div class="empty-card">No active items for this source.</div>`}
        </div>
      </td>
    </tr>
  `}function Sa(e){let t=e.companies?.company_name||`Unknown company`,n=Array.isArray(e.report_items)?e.report_items.length:0;return`
    <tr>
      <td>${D(es(e,t))}</td>
      <td>${D(t)}</td>
      <td>${D(C(e.created_at))}</td>
      <td>${D(`${S(e.period_start)} - ${S(e.period_end)}`)}</td>
      <td>${D(e.status||`draft`)}</td>
      <td>${n}</td>
      <td>
        <div class="admin-row-actions">
          <button class="btn btn-secondary btn-small" type="button" data-action="view-admin-report" data-id="${D(e.id)}">View report</button>
          <button class="btn btn-ghost btn-small" type="button" data-action="copy-admin-report" data-id="${D(e.id)}">Copy text</button>
          <button class="btn btn-ghost btn-small" type="button" data-action="view-admin-report" data-id="${D(e.id)}">Open for PDF</button>
        </div>
      </td>
    </tr>
  `}function Ca(){let e=(k.adminReports||[]).find(e=>e.id===k.selectedAdminReportId),t=k.selectedAdminReport?.id===k.selectedAdminReportId?k.selectedAdminReport:e;if(!t&&!k.selectedAdminReportLoading&&!k.selectedAdminReportError)return``;if(!t)return`
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
            ${k.selectedAdminReportError?`<div class="admin-message is-error">${D(k.selectedAdminReportError)}</div>`:`<div class="empty-card">Loading saved report items...</div>`}
          </div>
        </div>
      </div>
    `;let n=t.companies?.company_name||`Unknown company`,r=Array.isArray(t.report_items)?t.report_items.length:0,i=es(t,n);return`
    <div class="modal-backdrop">
      <div class="modal admin-report-modal" role="dialog" aria-modal="true">
        <div class="modal-header">
          <div>
            <span class="status-pill is-success">${D(t.status||`generated`)}</span>
            <h2>${D(i)}</h2>
            <p>${D(n)} · ${D(`${S(t.period_start)} - ${S(t.period_end)}`)} · ${D(C(t.created_at))}</p>
          </div>
          <button type="button" class="icon-btn modal-close-btn" data-action="close-admin-report" aria-label="Close report">×</button>
        </div>
        <div class="modal-body">
          <div class="admin-report-actions">
            <button class="btn btn-primary" type="button" data-action="download-admin-report-pdf" ${k.selectedAdminReportLoading?`disabled`:``}>Download PDF</button>
            <button class="btn btn-secondary" type="button" data-action="copy-admin-report" data-id="${D(t.id)}">Copy text/email summary</button>
            <button class="btn btn-ghost" type="button" data-action="close-admin-report">Close</button>
          </div>

          ${k.selectedAdminReportLoading?`<div class="empty-card">Loading saved report items...</div>`:``}
          ${k.selectedAdminReportError?`<div class="admin-message is-error">${D(k.selectedAdminReportError)}</div>`:``}
          ${k.selectedAdminReportLoading?``:wa(t,r,n)}

          ${!k.selectedAdminReportLoading&&r?Xo(t,{companyName:n},{id:`admin-report-preview`,closeButton:!1,includeTextArea:!1}):k.selectedAdminReportLoading?``:`
            <div class="empty-card">No new eligible opportunities in this report.</div>
          `}

          ${!k.selectedAdminReportLoading&&r?Ta(t):``}
        </div>
      </div>
    </div>
  `}function wa(e,t,n){let r=e.status===`generated_all_current`?`all_current`:e.status===`generated_new_only`?`new_only`:e.status||`draft`;return`
    <div class="admin-report-meta-strip">
      <span><strong>Company</strong>${D(n||`Unknown company`)}</span>
      <span><strong>Period</strong>${D(`${S(e.period_start)} - ${S(e.period_end)}`)}</span>
      <span><strong>Generated at</strong>${D(C(e.created_at))}</span>
      <span><strong>Mode</strong>${D(r)}</span>
      <span><strong>Items</strong>${Number(t||0)}</span>
    </div>
  `}function Ta(e){return`
    <section class="admin-report-items">
      <h3>Report items</h3>
      <div class="admin-report-item-list">
        ${(Array.isArray(e.report_items)?[...e.report_items]:[]).sort((e,t)=>Number(e.sort_order||0)-Number(t.sort_order||0)).map(e=>Ea(e)).join(``)}
      </div>
    </section>
  `}function Ea(e){let t=e.opportunities?It(e.opportunities):null;if(!t)return`<article class="admin-report-item"><p>Opportunity data is no longer available.</p></article>`;let n=Te(t.url),r=Ti(t);return`
    <article class="admin-report-item">
      <div class="opportunity-badges">
        <span class="source-pill source-badge">${D(Ns(Q(t)))}</span>
        <span class="${ki(Jr(Number(e.match_score||0)))}">${D(Ps(Jr(Number(e.match_score||0))))} · ${Number(e.match_score||0)}</span>
      </div>
      <h4>${D(t.title)}</h4>
      <div class="admin-report-meta-grid">
        <span><strong>${D(O(`buyer`))}</strong>${D(Is(t))}</span>
        <span><strong>${D(O(`source`))}</strong>${D(Fs(`source`,t.source))}</span>
        <span><strong>${D(O(`area`))}</strong>${D(Ls(t))}</span>
        <span><strong>${D(O(`deadline`))}</strong>${D(r.label)}</span>
        <span><strong>${D(O(`estimatedValue`))}</strong>${D(t.estimatedValue?Y(t.estimatedValue):O(`notListed`))}</span>
      </div>
      <p>${D(t.description||``)}</p>
      ${n?`<a class="btn btn-secondary btn-small" href="${D(n)}" target="_blank" rel="noreferrer">${D(O(`openSource`))}</a>`:``}
    </article>
  `}async function Da(e){let t=k.selectedAdminReport?.id===e?k.selectedAdminReport:(k.adminReports||[]).find(t=>t.id===e);if(!t){V(`Report not found`,`error`);return}let n=t.companies?.company_name||`Company`,r=ts(t),i=r.length?Ws(t,n,r):t.text_content||we(Zo(t));try{await navigator.clipboard.writeText(i),V(`Report text copied`,`success`)}catch(e){console.error(`Failed to copy admin report:`,e),V(`Could not copy report text`,`error`)}}function Oa(){let e=k.adminOpportunityFilters;return(k.opportunities||[]).filter(t=>{let n=ro(t);if(e.tedOnly&&!n||e.manualOnly&&n||!e.showDemoTest&&Wt(t)||e.source!==`all`&&t.source!==e.source||e.status!==`all`&&t.status!==e.status)return!1;let r=sn(t)||t.countryCode||`Unknown`;if(e.country!==`all`&&r!==e.country)return!1;let i=E(e.search);return!(i&&!E(`${t.title} ${t.buyer} ${t.externalId} ${t.location}`).includes(i))})}function ka(e,t){return Array.from(new Set(e.map(t).filter(Boolean))).sort((e,t)=>String(e).localeCompare(String(t)))}function Aa(e){let t=k.adminOpportunityFilters,n=ka(k.opportunities||[],e=>e.source||`Unknown`),r=ka(k.opportunities||[],e=>e.status||`Unknown`),i=ka(k.opportunities||[],e=>sn(e)||e.countryCode||`Unknown`),a=k.adminCompanies||[];return`
    <div class="admin-filters">
      <input data-admin-filter="search" value="${D(t.search)}" placeholder="Search title, buyer, external ID..." />
      <select data-admin-filter="source">
        <option value="all">All sources</option>
        ${n.map(e=>`<option value="${D(e)}" ${t.source===e?`selected`:``}>${D(e)}</option>`).join(``)}
      </select>
      <select data-admin-filter="status">
        <option value="all">All statuses</option>
        ${r.map(e=>`<option value="${D(e)}" ${t.status===e?`selected`:``}>${D(e)}</option>`).join(``)}
      </select>
      <select data-admin-filter="country">
        <option value="all">All countries</option>
        ${i.map(e=>`<option value="${D(e)}" ${t.country===e?`selected`:``}>${D(e)}</option>`).join(``)}
      </select>
      <select data-admin-filter="debugCompanyId">
        <option value="">Match debug company...</option>
        ${a.map(e=>`<option value="${D(e.id)}" ${t.debugCompanyId===e.id?`selected`:``}>${D(e.companyName)}</option>`).join(``)}
      </select>
      <label class="checkbox compact"><input type="checkbox" data-admin-filter="tedOnly" ${t.tedOnly?`checked`:``}/><span>TED only</span></label>
      <label class="checkbox compact"><input type="checkbox" data-admin-filter="manualOnly" ${t.manualOnly?`checked`:``}/><span>Manual only</span></label>
      <label class="checkbox compact"><input type="checkbox" data-admin-filter="showDemoTest" ${t.showDemoTest?`checked`:``}/><span>Show demo/test opportunities</span></label>
    </div>
    <p class="admin-filter-count">${e.length} of ${(k.opportunities||[]).length} opportunities shown.</p>
  `}function ja(e){return!!(e?.deadline||e?.deadlineAt||e?.rawPayload?.deadline_at||e?.rawPayload?.deadlineAt)}function Ma(){let e=k.adminOpportunityFilters?.missingDeadlineSource||`all`;return(k.opportunities||[]).filter(e=>!ja(e)).filter(e=>!Wt(e)).filter(t=>e===`all`||t.source===e).sort((e,t)=>String(e.source||``).localeCompare(String(t.source||``))||String(e.title||``).localeCompare(String(t.title||``)))}function Na(){let e=[`Ríkiskaup / island.is procurement`,`Vegagerðin`,`Akranes útboð`,`Garðabær Municipality`],t=ka((k.opportunities||[]).filter(e=>!ja(e)),e=>e.source||`Unknown`);return be([...e,...t])}function Pa(e){let t=e?.rawPayload||{},n=String(e?.url||t.source_url||t.link||``).trim();if(!n)return{label:`No source URL`,isSafe:!1};let r;try{r=new URL(n)}catch{return{label:`Invalid URL`,isSafe:!1}}if(![`http:`,`https:`].includes(r.protocol))return{label:`Unsupported protocol: ${r.protocol}`,isSafe:!1};let i=r.hostname.replace(/^www\./i,``).toLowerCase(),a=[`utbodsvefur.is`,`vegagerdin.is`,`akranes.is`,`gardabaer.is`,`borgarbyggd.is`,`arborg.is`,`faxafloahafnir.is`,`reykjavik.is`,`hafnarfjordur.is`,`reykjanesbaer.is`,`mulathing.is`,`akureyri.is`].some(e=>i===e||i.endsWith(`.${e}`));return{label:a?`Yes (${i})`:`Unknown host (${i})`,isSafe:a}}function Fa(e){let t=e?.rawPayload||{},n=t.deadline_debug&&typeof t.deadline_debug==`object`?t.deadline_debug:{},r=[t.deadline_debug_reason,t.deadline_reenrichment_error,n.source?`debug source: ${n.source}`:``,n.extractedText?`extracted: ${n.extractedText}`:``,n.parserVersion?`parser: ${n.parserVersion}`:``,t.stale_reason?`stale: ${t.stale_reason}`:``].filter(Boolean);return r.length?r.join(` · `):`Still missing after import/re-enrichment, or no debug reason stored yet.`}function Ia(){let e=Ma(),t=La(e),n=e.reduce((e,t)=>{let n=t.source||`Unknown`;return e[n]||(e[n]=[]),e[n].push(t),e},{}),r=Object.keys(n).sort((e,t)=>e.localeCompare(t)),i=k.adminOpportunityFilters?.missingDeadlineSource||`all`,a=Na();return`
    <section class="ops-card admin-debug-card">
      <div class="card-header">
        <div>
          <h2>Missing deadline debug</h2>
          <p>${e.length} opportunities missing deadlines${i===`all`?``:` for ${D(i)}`}. Grouped by source.</p>
          <p class="admin-filter-count">
            total=${t.total} · alert_eligible=false=${t.alertFalse} · alert_eligible not false=${t.alertNotFalse} · confirmed_tender=${t.confirmedTender} · needs_review=${t.needsReview}
          </p>
        </div>
        <label class="admin-inline-control">
          <span>Source</span>
          <select data-admin-filter="missingDeadlineSource">
            <option value="all">All sources</option>
            ${a.map(e=>`<option value="${D(e)}" ${i===e?`selected`:``}>${D(e)}</option>`).join(``)}
          </select>
        </label>
      </div>
      ${r.length?r.map(e=>Ra(e,n[e])).join(``):`<div class="empty-card">No missing-deadline opportunities for this filter.</div>`}
    </section>
  `}function La(e){return(e||[]).reduce((e,t)=>{let n=t?.rawPayload||{},r=String(n.alert_eligible??``).toLowerCase(),i=String(n.quality_status||``).toLowerCase();return e.total+=1,r===`false`?e.alertFalse+=1:e.alertNotFalse+=1,i===`confirmed_tender`&&(e.confirmedTender+=1),i===`needs_review`&&(e.needsReview+=1),e},{total:0,alertFalse:0,alertNotFalse:0,confirmedTender:0,needsReview:0})}function Ra(e,t){return`
    <div class="missing-deadline-source-group">
      <h3>${D(e)} <span class="muted">(${t.length})</span></h3>
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
            ${t.map(za).join(``)}
          </tbody>
        </table>
      </div>
    </div>
  `}function za(e){let t=Pa(e),n=Te(e.url||e.rawPayload?.source_url||``),r=e.rawPayload?.safety_status||e.rawPayload?.quality_status||Q(e),i=e.rawPayload?.alert_eligible,a=i===!0?`true`:`false`,o=String(i??``).toLowerCase()===`false`?``:`<br><span class="status-pill is-warning">Missing deadline alert flag needs fix</span>`;return`
    <tr>
      <td><code>${D(String(e.id||``))}</code><br><span>${D(e.externalId||`No external ID`)}</span></td>
      <td><strong>${D(e.title||`Untitled`)}</strong><br><span>${D(e.source||`Unknown source`)}</span></td>
      <td>${n?`<a href="${D(n)}" target="_blank" rel="noreferrer">${D(n)}</a>`:`No source URL`}</td>
      <td>${e.publishedDate?D(C(e.publishedDate)):`Not listed`}</td>
      <td>${D(r||`unknown`)}<br><span>alert_eligible=${D(a)}</span>${o}</td>
      <td><span class="status-pill ${t.isSafe?`is-success`:`is-running`}">${D(t.label)}</span></td>
      <td>${D(Fa(e))}</td>
    </tr>
  `}function Ba(){return Z(g({t:O,escapeHtml:D,language:k.language,trialHref:ft()}))}function Va(){return k.user?(H(),Z(`
    <section class="page-head pricing-head">
      <p class="eyebrow">${D(O(`onboarding`))}</p>
      <h1>${D(O(`onboardingTitle`))}</h1>
      <p>${D(O(`onboardingText`))}</p>
    </section>

    ${Ha()}
  `)):z()}function Ha(){return H(),le({t:O,escapeHtml:D,capitalize:Se,arrayFieldText:ar,formatCustomerLocation:zs,getFilterOptions:Ua,getProfileSuggestions:cr,renderCustomDropdown:Ka,renderSuggestionChips:ur,profileDraft:k.profileDraft||Ge(),hasProfile:!!k.profile,isSavingProfile:k.isSavingProfile,profileSaved:k.profileSaved,profileSaveMessage:k.profileSaveMessage,profileSaveError:k.profileSaveError})}function Ua(e){return e===`industry`?[`Construction`,`Electrical`,`Cleaning`,`IT / Web / Software`,`Architecture / Engineering`,`Consulting`,`Transport`,`Equipment / Machinery`,`Landscaping`,`Security`,`Other`].map(e=>({value:e,label:e})):e===`label`?[{value:`strong`,label:k.language===`is`?`Aðeins sterkar`:`Strong only`},{value:`recommended`,label:k.language===`is`?`Mælt með`:`Recommended`},{value:`all`,label:k.language===`is`?`Allar samsvaranir`:`All matches`},{value:`all_opportunities`,label:k.language===`is`?`Öll tækifæri`:`All opportunities`},{value:`needs_review`,label:O(`needsReview`)},{value:`possible`,label:k.language===`is`?`Mögulegar samsvaranir`:`Possible matches`},{value:`Good match`,label:O(`goodMatch`)},{value:`Weak match`,label:O(`weakMatch`)}]:e===`category`?[{value:`all`,label:k.language===`is`?`Allir flokkar`:`All categories`},...Ei().map(e=>({value:e,label:e}))]:e===`location`?[{value:`all`,label:k.language===`is`?`Öll svæði`:`All locations`},...Di().map(e=>({value:e,label:zs(e)}))]:e===`type`?[{value:`all`,label:k.language===`is`?`Allar tegundir`:`All types`},...Oi().map(e=>({value:e,label:Se(e.replace(`-`,` `))}))]:[]}function Wa(e){let t=Ua(e),n=e===`industry`?k.profileDraft?.industry||k.profile?.industry||``:k.filters[e],r=t.findIndex(e=>e.value===n);return Math.max(0,r)}function Ga(e){return Ka({key:e,value:k.filters[e],options:Ua(e)})}function Ka({key:e,value:t,options:n,profileField:r=``}){let i=k.dropdown.openKey===e,a=t,o=Math.max(0,n.findIndex(e=>e.value===a)),s=i?k.dropdown.focusedIndex:o,c=`filter-${e}-trigger`,l=`filter-${e}-list`,u=n.find(e=>e.value===a)?.label||(e===`industry`?O(`selectIndustry`):n[0]?.label)||``;return`
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
        <span>${D(u)}</span>
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
                data-value="${D(t.value)}"
                ${r?`data-profile-field="${D(r)}"`:``}
                role="option"
                aria-selected="${i}"
              >
                <span>${D(t.label)}</span>
                ${i?`<span class="custom-select-check" aria-hidden="true">✓</span>`:``}
              </button>
            `}).join(``)}
        </div>
      `:``}
    </div>
  `}function qa(){k.dropdown.openKey=null,k.dropdown.focusedIndex=0,X()}function Ja(){requestAnimationFrame(()=>{document.querySelector(`.custom-select-option.is-focused`)?.focus()})}function Ya(e){requestAnimationFrame(()=>{document.querySelector(`[data-action="toggle-dropdown"][data-key="${e}"]`)?.focus()})}function Xa(){if(!k.user)return z();if(!k.profile)return Yi(O(`setupCompanyFirst`),O(`dashboardNeedsProfile`));let e=ti(),t=Xr(),n=ni(t),r=Zr(),i=n.filter(e=>e.matchScore>=85).length,a=n.filter(e=>x(e.deadline)<=14&&x(e.deadline)>=0).length,o=k.saved.length,s=n.filter(e=>e.matchScore>=65).reduce((e,t)=>e+(t.estimatedValue||0),0),c=n.filter(ii).length,l=li({visibleCount:e.length,storedMatchCount:t.length,filteredStoredCount:n.length,availableCount:r.length,recommendedCount:c,strongCount:i,companyName:k.profile.companyName}),u=k.lastMatchedAt?O(`matchesLastRefreshed`,{time:C(k.lastMatchedAt)}):O(`matchesAutoRefresh`);return Z(p({profile:k.profile,matches:e,stats:{strong:i,closingSoon:a,savedCount:o,totalValue:Y(s)},filters:k.filters,filterSummary:l,matchStatus:k.matchStatus,opportunityLoadError:k.opportunityLoadError,isAdmin:k.isAdmin,matchingLoading:k.matchingLoading,labels:{dashboard:O(`dashboard`),welcomeCompany:O(`welcomeCompany`,{company:k.profile.companyName}),dashboardIntro:O(`dashboardIntro`,{refresh:u}),refreshing:O(`refreshing`),refreshMatches:O(`refreshMatches`),viewWeeklyReport:O(`viewWeeklyReport`),strongMatches:O(`strongMatches`),closingSoon:O(`closingSoon`),savedLabel:O(`savedLabel`),totalPotentialValue:O(`totalPotentialValue`),searchOpportunities:O(`searchOpportunities`),savedOnly:O(`savedOnly`)},renderFilterDropdown:Ga,renderOpportunityCard:no,renderEmptyState:()=>to(k.profile,k.filters.label,{availableCount:r.length,storedMatchCount:t.length,filteredStoredCount:n.length,recommendedCount:c,strongCount:i}),escapeHtml:D}))}function Za(e){let t=[],n=Array.isArray(e?.locations)?e.locations:[],r=Array.isArray(e?.services)?e.services:[],i=Array.isArray(e?.includeKeywords)?e.includeKeywords:[],a=Array.isArray(e?.excludeKeywords)?e.excludeKeywords:[],o=n.some(e=>E(e)===`all iceland`),s=a.some(e=>{let t=E(e);return t.includes(`reykjavik`)||t.includes(`capital area`)});return o||t.push(k.language===`is`?`Bætið við Allt landið til að ná landsdekkandi útboðum og rammasamningum.`:`Add All Iceland to catch national tenders and framework agreements.`),e?.nationalProjects||t.push(k.language===`is`?`Kveikið á landsdekkandi verkefnum svo slík tækifæri birtist sem mögulegar samsvaranir.`:`Enable national projects so All Iceland opportunities appear as possible matches.`),r.length<5&&t.push(k.language===`is`?`Bætið við nákvæmari þjónustu svo VerkRadar þekki betur útboð sem passa við ykkar vinnu.`:`Add more specific services so VerkRadar can recognize notices that fit your work.`),s&&t.push(k.language===`is`?`Yfirfarið útilokunarorð fyrir Reykjavík eða höfuðborgarsvæðið. Þau geta falið útboð sem fyrirtæki utan svæðisins geta samt boðið í.`:`Review exclude keywords for Reykjavík or Capital Area. They may hide tenders that companies outside Reykjavík can still bid on.`),i.length<4&&t.push(k.language===`is`?`Bætið við fleiri leitarorðum, sérstaklega íslenskum hugtökum sem kaupendur nota í útboðum.`:`Add more include keywords, including Icelandic terms buyers may use in notices.`),t.length||t.push(k.language===`is`?`Yfirfarið þjónustu, svæði og leitarorð svo þau lýsi verkefnunum sem þið viljið raunverulega bjóða í.`:`Review services, locations and keywords to make sure they describe the work you actually want to bid on.`),t}function Qa(e,t={}){return k.language===`is`?e===`all`?{eyebrow:`Engar samsvaranir`,title:`Engin tækifæri fundust fyrir þennan prófíl enn.`,body:`Víkkið þjónustu, svæði eða leitarorð til að finna fleiri tækifæri.`}:e===`all_opportunities`?{eyebrow:`Engin tækifæri`,title:`Engin tiltæk tækifæri enn.`,body:`Flytjið inn fleiri heimildir eða skoðið heimildayfirlit í Admin.`}:e===`needs_review`?{eyebrow:`Ekkert þarf staðfestingu`,title:`Engin tækifæri þarfnast staðfestingar núna.`,body:`Tækifæri úr breiðum heimildum sem þarf að yfirfara birtast hér.`}:e===`strong`?{eyebrow:`Engar sterkar samsvaranir`,title:`Engar sterkar samsvaranir enn.`,body:`Þið gætuð samt átt gagnlegar mögulegar samsvaranir. Prófið Mælt með eða Allar samsvaranir.`}:e===`possible`||e===`Possible match`||e===`Weak match`?{eyebrow:`Engar mögulegar samsvaranir`,title:`Engar mögulegar samsvaranir enn.`,body:`Prófið að víkka þjónustu, svæði eða leitarorð til að finna óvissari tækifæri.`}:{eyebrow:`Engar ráðlagðar samsvaranir`,title:$a(t),body:eo(t)}:e===`all`?{eyebrow:`No matches`,title:`No opportunities found for this profile yet.`,body:`Broaden your services, locations or keywords to find more opportunities.`}:e===`all_opportunities`?{eyebrow:`No opportunities`,title:`No available opportunities yet.`,body:`Import more sources or check Admin source coverage.`}:e===`needs_review`?{eyebrow:`No needs-review items`,title:`No needs-review opportunities right now.`,body:`Broad-feed opportunities that need manual verification will appear here.`}:e===`strong`?{eyebrow:`No strong matches`,title:`No strong matches yet.`,body:`You may still have useful possible matches. Switch to Recommended or All matches to review them.`}:e===`possible`||e===`Possible match`||e===`Weak match`?{eyebrow:`No possible matches`,title:`No possible matches yet.`,body:`Try broadening your services, locations or keywords to find lower-confidence opportunities.`}:{eyebrow:`No recommended matches`,title:$a(t),body:eo(t)}}function $a(e={}){let t=e.companyName||(k.language===`is`?`þennan prófíl`:`this profile`);return Number(e.strongCount||0)>0?k.language===`is`?`${e.strongCount} sterkar samsvaranir eru faldar af síum.`:`${e.strongCount} strong ${Number(e.strongCount)===1?`match is`:`matches are`} hidden by filters.`:k.language===`is`?`Engar ráðlagðar samsvaranir fyrir ${t} enn.`:`No recommended matches for ${t} yet.`}function eo(e={}){let t=Number(e.strongCount||0),n=Number(e.filteredStoredCount||0),r=Number(e.availableCount||0);return t>0?k.language===`is`?`Hreinsið leit/flokka/svæðissíur eða slökkvið á Aðeins vistað til að sjá sterku samsvaranirnar.`:`Clear search/category/location filters or turn off Saved only to see the strong matches.`:n>0?k.language===`is`?`${n} tækifæri eru til, en falin af gæðasíum. Notið Allar samsvaranir eða Þarfnast staðfestingar til að skoða þau.`:`${n} ${n===1?`opportunity is`:`opportunities are`} available, but hidden from Recommended by quality checks. Use All matches or Needs review to inspect them.`:k.language===`is`?`${r} tækifæri eru til í kerfinu, en ekkert passar nógu sterkt við þennan prófíl.`:`${r} opportunities are available in the system, but none match this profile strongly enough.`}function to(e,t=k.filters.label,n={}){let r=Za(e);return f({copy:Qa(t,{...n,companyName:e?.companyName}),suggestions:r,labels:{improveProfile:O(`improveProfile`),includeNationalOpportunities:O(`includeNationalOpportunities`),showAllStoredMatches:O(`showAllStoredMatches`),inspectAllOpportunities:O(`inspectAllOpportunities`)},escapeHtml:D})}function no(e){return m({opp:e,saved:k.saved.includes(e.id),deadline:Ti(e),sourceBadgeHtml:`<span class="source-pill source-badge">${D(e.source)}</span>`,qualityBadgeHtml:oo(e),safetyBadgeHtml:so(e),extractedBadgeHtml:fo(e),originalLanguageBadgeHtml:ro(e)?`<span class="source-pill source-badge muted-badge">${D(O(`originalLanguage`))}</span>`:``,matchBadgeClass:ki(e.matchLabel),matchLabel:Ps(e.matchLabel),buyer:Is(e),location:Ls(e),value:Y(e.estimatedValue),reasons:e.matchReasons.slice(0,3).map(Bs),labels:{details:O(`details`),saved:O(`saved`),save:O(`save`),ignore:O(`ignore`)},escapeHtml:D})}function ro(e){return/ted|tenders electronic daily/i.test(String(e.source||``))}function io(e){let t=P(e);return{confirmed_tender:`Confirmed tender`,early_signal:`Early signal`,needs_review:`Needs review`}[t]||Se(t.replace(/_/g,` `))}function ao(e){return{confirmed_tender:`Confirmed tender`,early_opportunity:`Early opportunity`,market_signal:`Market signal`,news_context:`News context`,not_opportunity:`Not an opportunity`}[Gt(e)||e]||Se(String(e||`market_signal`).replace(/_/g,` `))}function Q(e){let t=F(e);return t===`news_context`||t===`not_opportunity`||t===`market_signal`?ao(t):I(e)?po(Kt(e)):io(P(e.qualityStatus,e))}function oo(e){return`<span class="source-pill source-badge quality-badge ${D(F(e)||P(e.qualityStatus,e))}">${D(Ns(Q(e)))}</span>`}function so(e){if(!e||!e.safetyStatus)return``;let t=$r(e);return`<span class="source-pill source-badge safety-badge ${D(t)}">${D(co(t))}</span>`}function co(e){let t=String(e||``).toLowerCase();return(k.language===`is`?{auto_approved:`Sjálfkrafa samþykkt`,needs_review:`Þarfnast yfirferðar`,hidden:`Falið`}:{auto_approved:`Auto-approved`,needs_review:`Needs review`,hidden:`Hidden`})[t]||Se(t.replace(/_/g,` `))}function lo(e){return e?k.language===`is`?`Hæft í tilkynningu`:`Alert eligible`:k.language===`is`?`Ekki hæft í tilkynningu`:`Not alert eligible`}function uo(e){let t=String(e||``);return k.language===`is`?{"Valid future deadline found":`Gildur framtíðarskilafrestur fannst`,"Recent high-intent procurement signal":`Nýlegt merki frá sterkri útboðsheimild`,"Strong service/work-type fit":`Sterk samsvörun við þjónustu eða verkflokk`,"No reliable deadline was found":`Áreiðanlegur skilafrestur fannst ekki`,"Buyer is missing or generic":`Kaupandi vantar eða er of almennur`,"Match depends on broad or low-confidence terms":`Samsvörun byggir á breiðum eða óvissum orðum`,"Possible service mismatch for this company profile":`Mögulegt ósamræmi við þjónustu fyrirtækisins`,"Mentions design, consulting, supervision, or project management terms":`Inniheldur orð tengd hönnun, ráðgjöf, eftirliti eða verkefnastjórnun`,"Tender appears already awarded or already tendered":`Útboð virðist þegar auglýst eða útboði lokið`,"Stale or expired opportunity signal":`Gamalt eða útrunnið tækifæri`,"Current opportunity is plausible but needs review before customer alerts":`Tækifærið gæti átt við en þarf yfirferð áður en það fer í tilkynningu`,"Admin override includes this opportunity in customer reports":`Admin hefur samþykkt birtingu í viðskiptavinayfirlitum`,"Excluded by customer eligibility, duplicate, stale, hidden, demo, or expired filters":`Falið vegna reglna um birtingu, afrit, aldur, prófunargögn eða útrunnið tækifæri`}[t]||$(t):t}function fo(e){if(e?.rawPayload?.extraction_method!==`vegagerdin_article_project_parser`)return``;let t=e.rawPayload?.region?` · ${e.rawPayload.region}`:``;return`<span class="source-pill source-badge muted-badge">${D(O(`extractedProject`))}${D(t)}</span>`}function po(e){return{tender_awarded:O(`tenderAwarded`),awarded:O(`tenderAwarded`),already_tendered:O(`tenderAlreadyAnnounced`),announced:O(`tenderAlreadyAnnounced`),upcoming_tender:O(`upcomingTender`),project_signal:O(`projectSignal`),open_or_published:O(`tenderAlreadyAnnounced`),planned_tender:O(`upcomingTender`),unclear:O(`projectSignal`)}[String(e||``)]||Se(String(e||``).replace(/_/g,` `))}function mo(e){let t=F(e);return t===`news_context`||t===`not_opportunity`?`<div class="note-panel quality-warning">${D(k.language===`is`?`Þetta lítur út eins og frétta- eða umferðarefni, ekki tækifæri fyrir viðskiptavin.`:`This looks like news or traffic context, not a customer-facing opportunity.`)}</div>`:P(e.qualityStatus,e)===`needs_review`?I(e)?`<div class="note-panel quality-warning">${D(k.language===`is`?`Útdregin verkefnavísbending — staðfestið útboðstímasetningu í heimildargrein.`:`Extracted project signal — verify tender timing in the source article.`)}</div>`:`<div class="note-panel quality-warning">${D(k.language===`is`?`Innflutt úr breiðum straumi — staðfestið á upprunasíðu.`:`Imported from broad feed — verify source page.`)}</div>`:``}function ho(e){let t=k.saved.includes(e.id),n=Ti(e),r=Array.isArray(e.requirements)?e.requirements:[],i=Array.isArray(e.matchReasons)?e.matchReasons:[],a=Array.isArray(e.risks)?e.risks:[],o=Array.isArray(e.nextSteps)?e.nextSteps:[],s=[I(e)?`<p><strong>${D(O(`extraction`))}:</strong> ${D(k.language===`is`?`Útdregið úr grein Vegagerðarinnar`:`Extracted from Vegagerðin article`)}</p>`:``,e.rawPayload?.parent_article_title?`<p><strong>${D(O(`sourceArticle`))}:</strong> ${D(e.rawPayload.parent_article_title)}</p>`:``,e.rawPayload?.parent_url?`<p><strong>${D(O(`parentArticle`))}:</strong> <a href="${D(e.rawPayload.parent_url)}" target="_blank" rel="noreferrer">${D(O(`openSourceArticle`))}</a></p>`:``,e.rawPayload?.region?`<p><strong>${D(O(`extractedRegion`))}:</strong> ${D(e.rawPayload.region)}</p>`:``,e.rawPayload?.project_number?`<p><strong>${D(O(`projectNumber`))}:</strong> ${D(e.rawPayload.project_number)}</p>`:``,I(e)?`<p><strong>${D(O(`tenderState`))}:</strong> ${D(po(Kt(e)))}</p>`:``].join(``);return te({opp:e,saved:t,deadline:n,requirements:r,matchReasons:i.length?i.map(Bs):[],risks:a.length?a.map($):[O(`noMajorRisks`)],safetyReasons:[...Array.isArray(e.safetyReasons)?e.safetyReasons:[],...a.length?a.map($):[O(`noMajorRisks`)]].map(uo),nextSteps:o.map(Vs),matchBadgeClass:ki(e.matchLabel),matchLabel:Ps(e.matchLabel),qualityBadgeHtml:oo(e),safetyBadgeHtml:so(e),extractedBadgeHtml:fo(e),qualityWarningHtml:mo(e),buyerSummary:Rs(`buyer`,e.buyer),location:Ls(e),value:e.estimatedValue?Y(e.estimatedValue):O(`notListed`),sourceUrl:e.url,extractedDetails:s,qualityLabel:Ns(Q(e)),safetyStatusLine:e.safetyStatus?`<p><strong>${D(k.language===`is`?`Öryggisflokkun`:`Safety status`)}:</strong> ${D(co(e.safetyStatus))} · ${D(lo(e.alertEligible))}</p>`:``,category:Rs(`category`,e.category),type:Rs(`type`,e.type),publishedDate:e.publishedDate,cpvCode:e.cpvCode,labels:{description:O(`description`),noDescription:O(`noDescription`),requirements:O(`requirements`),noSpecificRequirements:O(`noSpecificRequirements`),matchReasons:O(`matchReasons`),noMatchReasons:O(`noMatchReasons`),opportunityInfo:O(`opportunityInfo`),source:O(`source`),sourceValue:Rs(`source`,e.source),quality:O(`quality`),category:O(`category`),type:O(`type`),deadline:O(`deadline`),deadlineLabel:$(n.label),published:O(`published`),cpv:O(`cpv`),risksToCheck:O(`risksToCheck`),recommendedNextSteps:O(`recommendedNextSteps`),openSourceAndConfirm:O(`openSourceAndConfirm`),removeFromSaved:O(`removeFromSaved`),saveOpportunity:O(`saveOpportunity`),openSource:O(`openSource`),markNotRelevant:O(`markNotRelevant`)},escapeHtml:D})}function go(){if(!k.user)return z();if(!k.isAdmin)return jn();let e=Oa(),t=k.adminCompanies.find(e=>e.id===k.selectedAdminCompanyId);return Z(`
    <section class="page-head">
      <p class="eyebrow">Admin</p>
      <h1>Operations dashboard</h1>
      <p>Admin tools for monitoring imports, reviewing customers, managing sources and handling manual entries.</p>
    </section>

    ${k.adminMessage?`
      <div class="admin-message ${k.adminMessage.type===`error`?`is-error`:`is-success`}">
        ${D(k.adminMessage.text)}
      </div>
    `:``}

    ${k.opportunityLoadError?`
      <div class="note-panel">
        ${D(k.opportunityLoadError)}
      </div>
    `:``}

    ${_o()}
    ${vo(e)}
    ${t?Ro(t):``}
  `)}function _o(){return`
    <div class="admin-tabs" role="tablist" aria-label="Admin sections">
      ${[[`overview`,`Overview`],[`companies`,`Companies`],[`review`,`Review Queue`],[`sources`,`Sources/imports`],[`opportunities`,`Opportunities`],[`reports`,`Reports`]].map(([e,t])=>`
        <button type="button" class="${k.adminActiveTab===e?`is-active`:``}" data-action="admin-tab" data-tab="${e}">
          ${D(t)}
        </button>
      `).join(``)}
    </div>
  `}function vo(e){return k.adminActiveTab===`companies`?Po():k.adminActiveTab===`review`?bo():k.adminActiveTab===`sources`?`
      ${aa()}
      ${sa()}
      ${ya()}
      ${ca()}
      ${pa()}
    `:k.adminActiveTab===`opportunities`?Lo(e):k.adminActiveTab===`reports`?ma():`
    ${yo()}
    ${aa()}
    ${Po(!0)}
  `}function yo(){let e=k.adminCompanies||[],t=k.opportunities||[],n=ra(),r=e.filter(e=>e.profileStatus===`Complete`).length,i=Math.max(0,e.length-r);return`
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
        <div><span>Latest import status</span><strong>${D(n?.status||`No runs`)}</strong></div>
      </div>
    </section>
  `}function bo(){let e=k.adminReviewMatches||[],t=xo();return`
    <section class="ops-card">
      <div class="card-header">
        <div>
          <h2>${D(t.title)}</h2>
          <p>${k.adminReviewLoading?D(t.loading):D(t.count(e.length))}</p>
        </div>
        <button class="btn btn-ghost btn-small" type="button" data-action="refresh-admin-status">Refresh</button>
      </div>
      ${k.adminReviewError?`<div class="admin-message is-error">${D(k.adminReviewError)}</div>`:``}
      ${k.adminReviewLoading&&!e.length?`<div class="empty-card">${D(t.loading)}</div>`:e.length?`
        <div class="admin-review-list">
          ${e.map(jo).join(``)}
        </div>
      `:`<div class="empty-card">${D(t.empty)}</div>`}
    </section>
  `}function xo(){return{title:`Review Queue`,loading:`Loading review queue...`,empty:`No uncertain matches need review.`,count:e=>`${e} uncertain match${e===1?``:`es`} need review.`,opportunity:`Opportunity`,company:`Company`,source:`Source`,buyer:`Buyer`,region:`Region`,deadline:`Deadline`,score:`Score`,safety:`Safety`,alert:`Alert`,safetyReasons:`Safety reasons`,matchReasons:`Match reasons`,approve:`Approve`,approving:`Approving...`,reject:`Reject`,rejecting:`Rejecting...`,noSource:`No source URL`,hidden:`Hidden from reports`,notHidden:`Not hidden from reports`,sourceUrl:`Source URL`}}function So(e){let t=e?.source||e?.rawPayload?.source_name||``;return Me(e?.buyer,t,e?.rawPayload||{})||`Unknown buyer`}function Co(e){return Ne(e?.source||e?.rawPayload?.source_name||``)||e?.location||`Unknown`}function wo(e){let t=String(e?.deadlineAt||e?.rawPayload?.deadline_at||``).trim().match(/^(\d{4}-\d{2}-\d{2})[T\s](\d{2}):(\d{2})/);return t?`${t[1]} ${t[2]}:${t[3]}`:e?.deadline?S(e.deadline):`Deadline not available in imported data — verify on source page.`}function To(e){let t=String(e||``).toLowerCase();return{auto_approved:`Auto-approved`,needs_review:`Needs review`,hidden:`Hidden`}[t]||Se(t.replace(/_/g,` `))}function Eo(e){return e?`Alert eligible`:`Not alert eligible`}function Do(e){return e?`Review required`:`Review not required`}function Oo(e){let t=String(e||``).trim();return{"Strong match":`Strong match`,"Good match":`Good match`,"Possible match":`Possible match`,"Weak match":`Weak match`}[t]||t||`Possible match`}function ko(e){return String(e||``).trim()}function Ao(e){return String(e||``).trim()}function jo(e){let t=e.opportunity||{},n=k.adminReviewActions?.[e.id]||``,r=Te(t.url),i=xo(),a=e.safetyReasons.length?e.safetyReasons:[`Needs admin review`],o=e.matchReasons.length?e.matchReasons:[`Profile match`];return`
    <article class="admin-review-card">
      <div class="admin-review-card-top">
        <div class="admin-review-title-block">
          <span class="eyebrow">${D(i.opportunity)}</span>
          <h3>${D(t.title||`Untitled opportunity`)}</h3>
          <p>${D(i.company)}: <strong>${D(e.companyName)}</strong></p>
          <p>${D(i.source)}: <strong>${D(t.source||`Unknown source`)}</strong></p>
          ${r?`<p class="admin-source-url"><span>${D(i.sourceUrl)}:</span> ${D(r)}</p>`:``}
        </div>
        <div class="admin-review-source-action">
          ${r?`<a class="btn btn-secondary btn-small" href="${D(r)}" target="_blank" rel="noopener">Open source ↗</a>`:`<span class="admin-chip">${D(i.noSource)}</span>`}
        </div>
      </div>

      <div class="admin-review-meta-grid">
        ${Mo(i.buyer,So(t))}
        ${Mo(i.region,Co(t))}
        ${Mo(i.deadline,wo(t))}
        ${Mo(i.score,`${Oo(e.matchLabel)} · ${Number(e.matchScore||0)}`)}
        ${Mo(i.safety,To(e.safetyStatus))}
        ${Mo(i.alert,`${Eo(e.alertEligible)} · ${Do(e.reviewRequired)}`)}
      </div>

      <div class="admin-review-reasons">
        <section class="admin-review-reason-box is-warning">
          <h4>${D(i.safetyReasons)}</h4>
          <ul>
            ${a.map(e=>`<li>${D(e)}</li>`).join(``)}
          </ul>
        </section>
        <section class="admin-review-reason-box">
          <h4>${D(i.matchReasons)}</h4>
          <ul>
            ${o.map(e=>`<li>${D(e)}</li>`).join(``)}
          </ul>
        </section>
      </div>

      <div class="admin-review-actions">
        <span class="admin-review-hidden-state">${D(t.rawPayload?.hidden_from_reports===!0?i.hidden:i.notHidden)}</span>
        <div class="admin-row-actions">
          <button class="btn btn-ghost btn-small" data-action="admin-review-match" data-review-action="approve" data-id="${D(e.id)}" data-company-id="${D(e.companyId)}" ${n?`disabled`:``}>${D(n===`approve`?i.approving:i.approve)}</button>
          <button class="btn btn-ghost btn-small" data-action="admin-review-match" data-review-action="reject" data-id="${D(e.id)}" data-company-id="${D(e.companyId)}" ${n?`disabled`:``}>${D(n===`reject`?i.rejecting:i.reject)}</button>
        </div>
      </div>
    </article>
  `}function Mo(e,t){return`
    <div class="admin-review-meta-item">
      <span>${D(e)}</span>
      <strong>${D(t||`—`)}</strong>
    </div>
  `}function No(){let e=k.adminCompanyFilters;return(k.adminCompanies||[]).filter(t=>{let n=E(e.search);return!(n&&!E(`${t.companyName} ${t.contactEmail} ${t.industry}`).includes(n)||e.industry!==`all`&&t.industry!==e.industry||e.profileStatus!==`all`&&t.profileStatus!==e.profileStatus||e.plan!==`all`&&t.plan!==e.plan)})}function Po(e=!1){let t=e?(k.adminCompanies||[]).slice(0,5):No();return`
    <section class="ops-card">
      <div class="card-header">
        <div>
          <h2>Companies / users</h2>
          <p>${k.adminCompaniesLoading?`Loading companies...`:`${t.length} shown from ${(k.adminCompanies||[]).length} total companies.`}</p>
        </div>
        ${e?``:`
          <label class="admin-inline-control">
            <span>Report mode</span>
            <select data-admin-report-mode>
              <option value="new_only" ${k.adminReportMode===`all_current`?``:`selected`}>New opportunities report</option>
              <option value="all_current" ${k.adminReportMode===`all_current`?`selected`:``}>All current matches report</option>
            </select>
          </label>
        `}
      </div>
      ${k.adminCompaniesError?`<div class="admin-message is-error">${D(k.adminCompaniesError)}</div>`:``}
      ${e?``:Fo()}
      ${k.adminCompaniesLoading&&!t.length?`<div class="empty-card">Loading companies...</div>`:t.length?`
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
              ${t.map(Io).join(``)}
            </tbody>
          </table>
        </div>
      `:`<div class="empty-card">No companies found.</div>`}
    </section>
  `}function Fo(){let e=k.adminCompanies||[],t=ka(e,e=>e.industry),n=ka(e,e=>e.plan),r=k.adminCompanyFilters;return`
    <div class="admin-filters admin-company-filters">
      <input data-admin-company-filter="search" value="${D(r.search)}" placeholder="Search company or email..." />
      <select data-admin-company-filter="industry">
        <option value="all">All industries</option>
        ${t.map(e=>`<option value="${D(e)}" ${r.industry===e?`selected`:``}>${D(e)}</option>`).join(``)}
      </select>
      <select data-admin-company-filter="profileStatus">
        <option value="all">All profiles</option>
        ${[`Complete`,`Incomplete`].map(e=>`<option value="${e}" ${r.profileStatus===e?`selected`:``}>${e}</option>`).join(``)}
      </select>
      <select data-admin-company-filter="plan">
        <option value="all">All plans</option>
        ${n.map(e=>`<option value="${D(e)}" ${r.plan===e?`selected`:``}>${D(e)}</option>`).join(``)}
      </select>
    </div>
  `}function Io(e){let t=k.adminCompanyActions?.[e.id]||``,n=t===`refresh`,r=t===`report`,i=!!t;return`
    <tr>
      <td><strong>${D(e.companyName)}</strong><br><span>${D(e.contactEmail||`No email`)}</span></td>
      <td>${D(e.industry||`Unknown`)}</td>
      <td>${D(e.plan||`Demo`)}</td>
      <td><span class="status-pill ${e.profileStatus===`Complete`?`is-success`:`is-running`}">${D(e.profileStatus)}</span></td>
      <td>${D(C(e.createdAt))}</td>
      <td>${e.matchCount}</td>
      <td>${e.savedCount?e.savedCount:`Not tracked`}</td>
      <td>${e.latestReportDate?D(C(e.latestReportDate)):`No reports`}</td>
      <td>
        <div class="admin-row-actions">
          <button class="btn btn-secondary btn-small" type="button" data-action="view-admin-company" data-id="${D(e.id)}" ${i?`disabled`:``}>View details</button>
          <button class="btn btn-ghost btn-small" type="button" data-action="admin-refresh-company-matches" data-id="${D(e.id)}" ${i?`disabled`:``}>${n?`Refreshing...`:`Refresh matches`}</button>
          <button class="btn btn-ghost btn-small" type="button" data-action="admin-generate-company-report" data-id="${D(e.id)}" ${i?`disabled`:``}>${r?`Generating...`:`Generate report`}</button>
        </div>
      </td>
    </tr>
  `}function Lo(e){let t={...tt(),...k.adminOpportunityDraft||{}};return`
    <form class="form-card admin-form" id="admin-opportunity-form">
      <div class="form-section">
        <h2>Add opportunity</h2>
        <div class="form-grid">
          <label>Title <input name="title" data-admin-opportunity-field="title" value="${D(t.title)}" required /></label>
          <label>Buyer <input name="buyer" data-admin-opportunity-field="buyer" value="${D(t.buyer)}" /></label>
          <label>Source name <input name="sourceName" data-admin-opportunity-field="sourceName" value="${D(t.sourceName)}" required /></label>
          <label>Category <input name="category" data-admin-opportunity-field="category" value="${D(t.category)}" /></label>
          <label>Type <input name="type" data-admin-opportunity-field="type" value="${D(t.type)}" /></label>
          <label>Deadline <input type="date" name="deadline" data-admin-opportunity-field="deadline" value="${D(t.deadline)}" /></label>
          <label>Published date <input type="date" name="published_date" data-admin-opportunity-field="published_date" value="${D(t.published_date)}" /></label>
          <label>Location <input name="location" data-admin-opportunity-field="location" value="${D(t.location)}" /></label>
          <label>Estimated value <input type="number" min="0" step="1" name="estimated_value" data-admin-opportunity-field="estimated_value" value="${D(t.estimated_value)}" /></label>
          <label>URL <input type="url" name="url" data-admin-opportunity-field="url" value="${D(t.url)}" /></label>
          <label>CPV code <input name="cpv_code" data-admin-opportunity-field="cpv_code" value="${D(t.cpv_code)}" /></label>
          <label>Difficulty <input name="difficulty" data-admin-opportunity-field="difficulty" value="${D(t.difficulty)}" /></label>
          <label>Status <input name="status" data-admin-opportunity-field="status" value="${D(t.status)}" /></label>
        </div>
        <label>Description <textarea name="description" data-admin-opportunity-field="description" rows="4">${D(t.description)}</textarea></label>
        <label>Requirements comma-separated <textarea name="requirements" data-admin-opportunity-field="requirements" rows="3">${D(t.requirements)}</textarea></label>
        <label>Keywords comma-separated <textarea name="keywords" data-admin-opportunity-field="keywords" rows="3">${D(t.keywords)}</textarea></label>
      </div>

      <div class="form-actions">
        <button class="btn btn-primary btn-large" type="submit" ${k.adminSubmitting?`disabled`:``}>
          ${k.adminSubmitting?`Saving...`:`Add opportunity`}
        </button>
      </div>
    </form>

    ${Ia()}

    <section class="admin-list">
      <div class="card-header">
        <div>
          <h2>Existing opportunities</h2>
          <p>${(k.opportunities||[]).length} loaded ${k.opportunityLoadError?`from fallback data`:`from Supabase`}.</p>
        </div>
      </div>
      ${Aa(e)}
      ${e.length?e.map(Bo).join(``):`<div class="empty-card">No opportunities loaded.</div>`}
    </section>
  `}function Ro(e){let t=[e.minProjectValue?Y(e.minProjectValue):`No minimum`,e.maxProjectValue?Y(e.maxProjectValue):`No maximum`].join(` - `),n=Te(e.website);return`
    <div class="modal-backdrop">
      <div class="modal admin-company-modal" role="dialog" aria-modal="true">
        <div class="modal-header">
          <div>
            <span class="status-pill ${e.profileStatus===`Complete`?`is-success`:`is-running`}">${D(e.profileStatus)}</span>
            <h2>${D(e.companyName)}</h2>
            <p>${D(e.contactEmail||`No contact email`)} · ${D(e.industry||`Unknown industry`)}</p>
          </div>
          <button type="button" class="icon-btn modal-close-btn" data-action="close-admin-company" aria-label="Close company details">×</button>
        </div>
        <div class="modal-body">
          <div class="admin-detail-grid">
            <section class="side-panel">
              <h3>Company basics</h3>
              <p><strong>Email:</strong> ${D(e.contactEmail||`Unknown`)}</p>
              <p><strong>Contact name:</strong> ${D(e.contactName||`Not listed`)}</p>
              <p><strong>Phone:</strong> ${D(e.phone||`Not listed`)}</p>
              <p><strong>Kennitala:</strong> ${D(e.kennitala||`Not listed`)}</p>
              <p><strong>Address:</strong> ${D(e.address||`Not listed`)}</p>
              <p><strong>Website:</strong> ${n?`<a href="${D(n)}" target="_blank" rel="noreferrer">${D(e.website)}</a>`:D(e.website||`Not listed`)}</p>
              <p><strong>Industry:</strong> ${D(e.industry||`Unknown`)}</p>
              <p><strong>Created:</strong> ${D(C(e.createdAt))}</p>

              <h3>Billing</h3>
              <p><strong>Selected plan:</strong> ${D(e.selectedPlan||e.plan||`Not selected`)}</p>
              <p><strong>Billing status:</strong> ${D(e.billingStatus||`Not set`)}</p>
              <p><strong>Billing email:</strong> ${D(e.billingEmail||e.contactEmail||`Not listed`)}</p>
              <p><strong>Trial started:</strong> ${e.trialStartedAt?D(C(e.trialStartedAt)):`Not set`}</p>
              <p><strong>Trial ends:</strong> ${e.trialEndsAt?D(C(e.trialEndsAt)):`Not set`}</p>

              <h3>Project preferences</h3>
              <p><strong>Project size:</strong> ${D(t)}</p>
              <p><strong>Unknown value:</strong> ${e.allowUnknownValue?`Allowed`:`Not preferred`}</p>
              <p><strong>Travel:</strong> ${e.willingToTravel?`Yes`:`No`}</p>
              <p><strong>National:</strong> ${e.nationalProjects?`Yes`:`No`}</p>
              <p><strong>Remote:</strong> ${e.remoteProjects?`Yes`:`No`}</p>
            </section>

            <section class="side-panel">
              <h3>Services</h3>
              ${zo(e.services,`No services saved.`)}
              <h3>Include keywords</h3>
              ${zo(e.includeKeywords,`No include keywords saved.`)}
              <h3>Exclude keywords</h3>
              ${zo(e.excludeKeywords,`No exclude keywords saved.`)}
            </section>

            <section class="side-panel">
              <h3>Locations and service areas</h3>
              <p><strong>Base:</strong> ${D(e.baseLocation||`Not set`)}</p>
              ${zo([...e.locations,...e.serviceAreas],`No locations saved.`)}
              <h3>Reports</h3>
              <p><strong>Frequency:</strong> ${D(e.reportFrequency)}</p>
              <p><strong>Day:</strong> ${D(e.reportDay)}</p>
              <p><strong>Deadline reminders:</strong> ${e.deadlineReminders?`On`:`Off`}</p>
            </section>

            <section class="side-panel">
              <h3>Latest matches</h3>
              ${e.latestMatches.length?`
                <ul class="admin-detail-list">
                  ${e.latestMatches.map(e=>`
                    <li>
                      <strong>${D(e.opportunities?.title||`Opportunity`)}</strong>
                      <span>${Number(e.match_score||0)} · ${D(e.match_label||Jr(Number(e.match_score||0)))}</span>
                    </li>
                  `).join(``)}
                </ul>
              `:`<p>No stored matches yet.</p>`}
              <h3>Latest reports</h3>
              ${e.latestReports.length?`
                <ul class="admin-detail-list">
                  ${e.latestReports.map(e=>`
                    <li>
                      <strong>${D(e.title||`Report`)}</strong>
                      <span>${D(C(e.created_at))}</span>
                    </li>
                  `).join(``)}
                </ul>
              `:`<p>No reports generated yet.</p>`}
            </section>
          </div>
        </div>
      </div>
    </div>
  `}function zo(e,t){let n=T(e);return n.length?`<div class="admin-tag-list">${n.map(e=>`<span>${D(e)}</span>`).join(``)}</div>`:`<p>${D(t)}</p>`}function Bo(e){let t=k.adminUpdatingId===e.id,n=F(e),r=e.rawPayload?.hidden_from_reports===!0||[`hidden`,`noise`,`deleted`].includes(String(e.rawPayload?.admin_report_status||``).toLowerCase()),i=hs(e)?e.rawPayload?.duplicate_reason||`Duplicate of ${e.rawPayload?.canonical_opportunity_id||e.rawPayload?.duplicate_of||`canonical opportunity`}`:``,a=Xt({title:e.title,description:e.description,content:`${e.category||``} ${e.source||``} ${Array.isArray(e.keywords)?e.keywords.join(` `):``}`,publishedDate:e.publishedDate,deadline:e.deadline,sourceName:e.source,sourceType:e.sourceType,connectorType:e.rawPayload?.connector_type}),o=e.rawPayload?.stale_reason||(a.isStale?a.reason:``),s=Te(e.url||e.rawPayload?.source_url||``);return`
    <div class="admin-row">
      <div>
        <h3>${D(e.title)}</h3>
        <p><strong>Source:</strong> ${D(e.source||`Unknown source`)} · <strong>Buyer:</strong> ${D(So(e))} · <strong>Region:</strong> ${D(Co(e))} · <strong>Status:</strong> ${D(e.status)}</p>
        <p><strong>Source URL:</strong> ${s?`<a href="${D(s)}" target="_blank" rel="noreferrer">${D(s)}</a>`:`Not listed`} · <strong>External ID:</strong> ${D(e.externalId||`Not listed`)}</p>
        <p>Quality: ${D(Q(e))} · Intent: ${D(ao(n))}${r?` · Hidden from reports`:``}${i?` · Duplicate: ${D(i)}`:``}${o?` · Stale / expired: ${D(o)}`:``}</p>
        <p>Debug: hidden_from_reports=${e.rawPayload?.hidden_from_reports===!0?`true`:`false`} · admin_report_status=${D(e.rawPayload?.admin_report_status||`none`)} · stale_status=${D(e.rawPayload?.stale_status||`none`)}</p>
        ${Vo(e)}
      </div>
      <div class="admin-row-actions">
        <button class="btn btn-ghost btn-small" data-action="admin-report-override" data-override="confirmed_tender" data-id="${D(e.id)}" ${t?`disabled`:``}>Confirmed tender</button>
        <button class="btn btn-ghost btn-small" data-action="admin-report-override" data-override="early_opportunity" data-id="${D(e.id)}" ${t?`disabled`:``}>Early opportunity</button>
        <button class="btn btn-ghost btn-small" data-action="admin-report-override" data-override="include" data-id="${D(e.id)}" ${t?`disabled`:``}>Include in reports</button>
        <button class="btn btn-ghost btn-small" data-action="admin-report-override" data-override="noise" data-id="${D(e.id)}" ${t?`disabled`:``}>News/noise</button>
        <button class="btn btn-ghost btn-small" data-action="admin-report-override" data-override="hide" data-id="${D(e.id)}" ${t?`disabled`:``}>Hide from reports</button>
        <button
          class="btn btn-ghost btn-small"
          data-action="delete-opportunity"
          data-id="${D(e.id)}"
          ${k.adminDeletingId===e.id?`disabled`:``}
        >
          ${k.adminDeletingId===e.id?`Deleting...`:`Delete`}
        </button>
      </div>
    </div>
  `}function Vo(e){let t=k.adminOpportunityFilters?.debugCompanyId||``;if(!t)return``;let n=(k.adminCompanies||[]).find(e=>e.id===t);if(!n)return`<div class="admin-debug-panel">Match debug: selected company not loaded.</div>`;let r=Kr(n,e),i=Go(e,r),a=T(n.services).join(`, `)||`No services`,o=T(n.includeKeywords).join(`, `)||`No include keywords`,s=Ho(n,e),c=Uo(n,e),l=Wo(n,e,r),u=classifyMatchSafety(n,r);return`
    <div class="admin-debug-panel">
      <p><strong>Match debug for ${D(n.companyName)}:</strong> score ${Number(r.matchScore||0)} · ${D(Oo(r.matchLabel))}</p>
      <p><strong>Services:</strong> ${D(a)}</p>
      <p><strong>Keywords:</strong> ${D(o)}</p>
      <p><strong>Matched terms:</strong> ${s.length?s.map(e=>`<span class="admin-chip">${D(e)}</span>`).join(` `):`None`}</p>
      <p><strong>Missing profile terms:</strong> ${c.length?c.map(e=>`<span class="admin-chip">${D(e)}</span>`).join(` `):`None`}</p>
      <p><strong>Score contribution:</strong> ${l.map(e=>`<span class="admin-chip">${D(e)}</span>`).join(` `)}</p>
      <p><strong>Matched terms/reasons:</strong> ${(r.matchReasons||[]).map(e=>`<span class="admin-chip">${D(ko(e))}</span>`).join(` `)||`None`}</p>
      <p><strong>Risks:</strong> ${(r.risks||[]).map(e=>`<span class="admin-chip">${D(Ao(e))}</span>`).join(` `)||`None`}</p>
      <p><strong>Safety:</strong> <span class="admin-chip">${D(To(u.safetyStatus))}</span> <span class="admin-chip">${D(Eo(u.alertEligible))}</span> ${(u.safetyReasons||[]).map(e=>`<span class="admin-chip">${D(e)}</span>`).join(` `)}</p>
      <p><strong>Excluded by:</strong> ${i.length?i.map(e=>`<span class="admin-chip">${D(e)}</span>`).join(` `):`<span class="admin-chip">Not excluded by local dashboard/report filters</span>`}</p>
    </div>
  `}function Ho(e,t){let n=hr(t);return Tr(be([...T(e.services).filter(e=>G(n,e)),...T(e.includeKeywords).filter(e=>G(n,e)),...Er(n),...Ar(e)?Dr(n):[]]))}function Uo(e,t){let n=hr(t);return Tr(be([...T(e.services),...T(e.includeKeywords)].filter(e=>e&&!G(n,e)))).slice(0,12)}function Wo(e,t,n){let r=[],i=(n.matchReasons||[]).filter(e=>/^Mentions your service:/i.test(e)).length,a=(n.matchReasons||[]).filter(e=>/^Contains your keyword:/i.test(e)).length;Gr(e,t)&&r.push(`+35 industry/category`),i&&r.push(`+${Math.min(35,i*10)} services`),a&&r.push(`+${Math.min(25,a*8)} keywords`);let o=Rr(e,t);return o===`local_match`?r.push(`+22 local`):o===`national_match`?r.push(`+16 national`):o===`remote_match`?r.push(`+14 remote`):o===`outside_area_possible`?r.push(`+4 travel possible`):r.push(`-8 low-confidence location`),t.deadline&&x(t.deadline)>=0&&x(t.deadline)<=30&&r.push(`+8 closing soon`),(n.risks||[]).some(e=>/broad construction/i.test(e))&&r.push(`capped broad fit`),(n.risks||[]).some(e=>/winter|snow/i.test(e))&&r.push(`capped winter fit`),(n.risks||[]).some(e=>/indoor|finishing/i.test(e))&&r.push(`downgraded indoor mismatch`),r.length?r:[`No positive score contribution`]}function Go(e,t){let n=[];return Number(t.matchScore||0)<50&&n.push(`score_below_50 (${Number(t.matchScore||0)})`),Os(e)||n.push(`customer_match_ineligible`),N(e)||n.push(`dashboard_not_visible`),$r(e)===`hidden`&&n.push(`safety_status_hidden`),ws(k.adminCompanies?.find(e=>e.id===k.adminOpportunityFilters?.debugCompanyId)||{},e)&&n.push(`needs_review_wrong_type_for_company`),Ts(k.adminCompanies?.find(e=>e.id===k.adminOpportunityFilters?.debugCompanyId)||{},e)&&n.push(`design_consulting_or_supervision_only`),e.rawPayload?.hidden_from_reports===!0&&n.push(`hidden_from_reports`),hs(e)&&n.push(`duplicate_secondary`),Yt(e)&&n.push(`stale_or_expired`),Wt(e)&&n.push(`demo_or_test`),n}function Ko(){if(!k.user)return z();if(!k.profile)return Yi(O(`setupCompanyFirst`),O(`reportNeedsProfile`));let e=k.profile,t=ss(e,as()),n=k.reports.find(e=>e.id===k.selectedReportId),r=k.reportArchiveLoading?O(`loadingSavedReports`):k.language===`is`?`${k.reports.length} vistuð yfirlit.`:`${k.reports.length} saved report${k.reports.length===1?``:`s`}.`,i=k.reportArchiveLoading?`<div class="empty-card">${D(O(`loadingSavedReports`))}</div>`:k.reportsLoadError?`<div class="admin-message is-error">Failed to load reports. ${D(k.reportsLoadError)}</div>`:k.reportsLoaded&&k.reports.length===0?`<div class="empty-card">${D(O(`noSavedReports`))}</div>`:k.reports.map(qo).join(``);return Z(`
    <section class="dashboard-head">
      <div>
        <p class="eyebrow">${D(O(`weeklyReport`))}</p>
        <h1>${D(O(`reportTitle`))}</h1>
        <p>${D(e.companyName||`Your company`)} · ${D(cs(t.periodStart,t.periodEnd))}</p>
        <p class="muted-copy">${D(k.language===`is`?`Sýnir öll núverandi viðeigandi tækifæri, ekki aðeins ný frá síðasta vistaða yfirliti.`:`Showing all current eligible matches, not only new items since the last saved report.`)}</p>
      </div>
      <div class="dashboard-actions">
        <button class="btn btn-primary" data-action="save-report" ${k.reportSaveLoading?`disabled`:``}>
          ${k.reportSaveLoading?D(O(`savingReport`)):D(O(`saveReport`))}
        </button>
        <button class="btn btn-secondary" data-action="download-report-pdf">${D(O(`downloadPdf`))}</button>
        <button class="btn btn-secondary" data-action="copy-report">${D(O(`copyReport`))}</button>
      </div>
    </section>

    ${k.reportMessage?`
      <div class="admin-message ${k.reportMessage.type===`error`?`is-error`:`is-success`}">
        ${D(k.reportMessage.text)}
      </div>
    `:``}

    ${Yo(t,{id:`report-preview`,contactEmail:e.contactEmail,companyName:e.companyName})}

    <section class="report-archive">
      <div class="card-header">
        <div>
          <p class="eyebrow">${D(O(`reportArchive`))}</p>
          <h2>${D(O(`savedReports`))}</h2>
          <p>${r}</p>
        </div>
      </div>
      ${i}
    </section>

    ${n?Xo(n,e):``}
  `)}function qo(e){let t=Array.isArray(e.report_items)?e.report_items.length:Number(e.itemCount||0),n=k.profile?.companyName||e.companies?.company_name||`Company`,r=k.language===`is`?ls(e.created_at):S(e.created_at),i=k.language===`is`?`${t} tækifæri`:`${t} item${t===1?``:`s`}`;return ue({report:e,title:es(e,n),created:r,itemLabel:i,statusLabel:Jo(e.status),hideLabel:k.language===`is`?`Fela yfirlit`:`Hide report`,viewLabel:O(`viewReport`),escapeHtml:D})}function Jo(e){let t=String(e||`draft`);return k.language===`is`?{generated_all_current:`Heildaryfirlit`,generated_new_only:`Ný tækifæri`,draft:`Vistað yfirlit`}[t]||t:{generated_all_current:`All current`,generated_new_only:`New opportunities`,draft:`Saved report`}[t]||t}function Yo(e,t={}){return de({report:e,options:t,companyName:t.companyName||k.profile?.companyName||`Company`,dateRange:cs(e.periodStart,e.periodEnd),generatedByLabel:O(`generatedBy`),reportTitleLabel:O(`reportTitle`),closeLabel:O(`closeReport`),escapeHtml:D})}function Xo(e,t,n={}){let r=e.period_start||e.created_at?.slice(0,10)||new Date().toISOString().slice(0,10),i=e.period_end||e.created_at?.slice(0,10)||new Date().toISOString().slice(0,10),a=t.companyName||e.companies?.company_name||`Company`,o=ts(e),s=o.length?ns(o):Zo(e),c=o.length?Ws(e,a,o):$o(e.text_content||``);return Yo({title:es(e,a),periodStart:r,periodEnd:i,htmlContent:s,textContent:c},{companyName:a,closeButton:n.closeButton===void 0?!0:n.closeButton,includeTextArea:n.includeTextArea===void 0?!1:n.includeTextArea,id:n.id||``})}function Zo(e){if(e.html_content&&e.html_content.includes(`report-cover`))return Qo(is(e.html_content));let t=e.period_start||e.created_at?.slice(0,10)||new Date().toISOString().slice(0,10),n=e.period_end||e.created_at?.slice(0,10)||new Date().toISOString().slice(0,10),r=e.html_content?Qo(is(e.html_content)):`<pre>${D(e.text_content||`Ekkert efni var vistað fyrir þetta yfirlit.`)}</pre>`;return`
    <div class="report-cover">
      <div class="report-kicker">Útbúið af VerkRadar</div>
      <p class="eyebrow">Vistað yfirlit</p>
      <h2>${D(e.title||`Vistað yfirlit`)}</h2>
      <p>${D(cs(t,n))}</p>
      <p>${D(e.summary||`Þetta eldra vistaða yfirlit er birt í nýju skýrslusniði.`)}</p>
    </div>
    <div class="report-legacy-content">
      ${r}
    </div>
  `}function Qo(e){return ve(e,k.language)}function $o(e){return ve(e,k.language)}function es(e,t){return O(`reportForCompany`,{company:String(t||e?.companies?.company_name||`Company`).trim()})}function ts(e){return(Array.isArray(e?.report_items)?[...e.report_items]:[]).sort((e,t)=>Number(e.sort_order||0)-Number(t.sort_order||0)).map(e=>{if(!e.opportunities)return null;let t=It(e.opportunities);return{...t,matchScore:Number(e.match_score||0),matchLabel:Jr(Number(e.match_score||0)),matchReasons:ln(t,Array.isArray(e.match_reasons)?e.match_reasons:[]),risks:Array.isArray(e.risks)&&e.risks.length?e.risks:Array.isArray(t.rawPayload?.risks)?t.rawPayload.risks:[],nextSteps:[]}}).filter(Boolean)}function ns(e){let t=rs(e);return`
    ${t.confirmed.length?As(O(`openTenders`),O(`openTendersDescription`),t.confirmed):``}
    ${t.early.length?As(O(`upcomingOpportunities`),O(`upcomingDescription`),t.early):``}
    ${t.review.length?As(O(`needsReview`),k.language===`is`?`Atriði úr vistuðu yfirliti sem þarf að staðfesta á heimild.`:`Saved report items that should be verified at the source.`,t.review):``}
    <p class="report-footer-note">${D(O(`reportFooter`))}</p>
  `}function rs(e){let t={confirmed:[],early:[],review:[]};return e.forEach(e=>{let n=ds(e);n===`confirmed`?t.confirmed.push(e):n===`early`?t.early.push(e):n!==`excluded`&&t.review.push(e)}),t}function is(e){let t=new DOMParser().parseFromString(String(e||``),`text/html`),n=new Set([`A`,`ARTICLE`,`DIV`,`EM`,`H2`,`H3`,`H4`,`H5`,`LI`,`OL`,`P`,`PRE`,`SECTION`,`SPAN`,`STRONG`,`UL`]),r=new Set([`aria-hidden`,`class`,`href`,`rel`,`target`]);return t.body.querySelectorAll(`*`).forEach(e=>{if(!n.has(e.tagName)){e.replaceWith(...Array.from(e.childNodes));return}Array.from(e.attributes).forEach(t=>{if(!r.has(t.name)){e.removeAttribute(t.name);return}if(t.name===`href`){let n=Te(t.value);n?e.setAttribute(`href`,n):e.removeAttribute(`href`)}})}),t.body.innerHTML}function as(e=`all_current`,t=new Set){return os({mode:e,previouslyReportedIds:t})}function os({mode:e=`all_current`,previouslyReportedIds:t=new Set}={}){let n=Yr().filter(e=>e.matchScore>=50).filter(t=>fs(t,e)),r=us(e===`new_only`?n.filter(e=>!t.has(e.id)):n);return[...r.confirmed,...r.early]}function ss(e,t){let n=new Date,r=n.toISOString().slice(0,10),i=new Date(n);i.setDate(i.getDate()-7);let a=i.toISOString().slice(0,10),o=O(`reportForCompany`,{company:e.companyName}),s=us(t),c=s.confirmed.length+s.early.length,l=k.language===`is`?`${c} viðeigandi útboðs- eða verðfyrirspurnaratriði fundust fyrir ${e.companyName}.`:`${c} relevant tender/quote-request ${c===1?`item`:`items`} found for ${e.companyName}.`;return{title:o,periodStart:a,periodEnd:r,summary:l,textContent:Us(e,t),htmlContent:`
    <div class="report-cover">
      <div class="report-kicker">${D(O(`generatedBy`))}</div>
      <p class="eyebrow">${D(O(`reportTitle`))}</p>
      <h2>${D(o)}</h2>
      <p>${D(cs(a,r))}</p>
      <p>${D(l)} ${t[0]?D(k.language===`is`?`Sterkasta sýnilega atriðið er ${t[0].title}.`:`The strongest visible item is ${t[0].title}.`):D(k.language===`is`?`Engin skýr útboð eða verðfyrirspurnir fundust fyrir þetta tímabil.`:`No strict report-ready tenders or quote requests were found for this period.`)}</p>
    </div>

    <div class="report-summary-grid">
      ${ks(O(`openTenders`),s.confirmed.length)}
      ${ks(O(`upcomingOpportunities`),s.early.length)}
    </div>

    ${As(O(`openTenders`),O(`openTendersDescription`),s.confirmed)}
    ${s.early.length?As(O(`upcomingOpportunities`),O(`upcomingDescription`),s.early):``}

    <p class="report-footer-note">${D(O(`reportFooter`))}</p>
  `}}function cs(e,t){return`${ls(e)} – ${ls(t)}`}function ls(e){if(!e)return`Engin dagsetning`;let t=new Date(`${String(e).slice(0,10)}T00:00:00`);return Number.isNaN(t.getTime())?String(e):k.language===`en`?new Intl.DateTimeFormat(`en-GB`,{year:`numeric`,month:`short`,day:`2-digit`}).format(t):`${t.getDate()}. ${[`janúar`,`febrúar`,`mars`,`apríl`,`maí`,`júní`,`júlí`,`ágúst`,`september`,`október`,`nóvember`,`desember`][t.getMonth()]} ${t.getFullYear()}`}function us(e){let t={confirmed:[],early:[]},n=new Set;gs(e).forEach(e=>{let r=ds(e);r!==`excluded`&&(n.has(e.id)||(n.add(e.id),r===`confirmed`?t.confirmed.push(e):r===`early`&&t.early.push(e)))});let r=8;for(let e of[`confirmed`,`early`]){let n=t[e].slice(0,r);t[e]=n,r=Math.max(0,r-n.length)}return t}function ds(e){if(!ps(e))return`excluded`;let t=F(e);if(t===`confirmed_tender`)return`confirmed`;if(t===`early_opportunity`)return`early`;let n=P(e.qualityStatus,e);return n===`confirmed_tender`?`confirmed`:n===`early_signal`?`early`:`excluded`}function fs(e,t=`all_current`){return ps(e)?t===`new_only`?$r(e)===`auto_approved`&&e.alertEligible!==!1:$r(e)!==`hidden`:!1}function ps(e){if(!e||Wt(e)||$r(e)===`hidden`||!N(e)||ms(e)||vs(e)||Ss(e)||Cs(e)||an(e.title||``)&&!ys(e))return!1;let t=F(e);if(t===`confirmed_tender`)return ys(e)||xs(e);if(t===`early_opportunity`)return bs(e);let n=P(e.qualityStatus,e);return n===`confirmed_tender`?ys(e)||xs(e):n===`early_signal`?bs(e):!1}function ms(e){let t=e?.rawPayload||{},n=String(t.admin_report_status||``).toLowerCase();if(n===`include`)return!1;if(t.hidden_from_reports===!0||[`hidden`,`hide`,`noise`,`deleted`].includes(n)||hs(e)||Yt(e))return!0;let r=F(e);return r===`news_context`||r===`not_opportunity`}function hs(e={}){let t=e.rawPayload||{},n=String(t.canonical_opportunity_id||``);return t.is_duplicate===!0||!!t.duplicate_of||!!n&&!!e.id&&n!==String(e.id)}function gs(e){return[...e].sort((e,t)=>_s(e)-_s(t)||Number(xs(t))-Number(xs(e))||Number(ys(t))-Number(ys(e))||t.matchScore-e.matchScore||x(e.deadline)-x(t.deadline))}function _s(e){if(vs(e))return 99;let t=F(e);return t===`confirmed_tender`?0:t===`early_opportunity`?1:10}function vs(e){let t=I(e)?Kt(e):String(e?.rawPayload?.tender_state||``).toLowerCase();return[`tender_awarded`,`awarded`,`already_tendered`].includes(t)?!0:R(L(e),[`lægstbjóðandi`,`laegstbjodandi`,`samningur gerður`,`samningur gerdur`,`samningur var`,`samið var`,`samid var`,`útboð hefur farið fram`,`utbod hefur farid fram`,`útboð var auglýst`,`utbod var auglyst`])}function ys(e){return R(L(e),[`útboð`,`utbod`,`útboðsauglýsing`,`utbodsauglysing`,`tilboð`,`tilbod`,`tilboðum`,`tilbodum`,`óskað eftir tilboðum`,`oskad eftir tilbodum`,`verðfyrirspurn`,`verdfyrirspurn`,`forval`,`skilafrestur`,`útboðsgögn`,`utbodsgogn`,`quote request`,`request for quote`,`tender`,`procurement`])}function bs(e){return R(L(e),[`senn í útboð`,`senn i utbod`,`áætlað útboð`,`aaetlad utbod`,`áætlað er að bjóða út`,`aaetlad er ad bjoda ut`,`fyrirhugað útboð`,`fyrirhugad utbod`])}function xs(e){let t=E(e?.source||``);return[`rikiskaup`,`ríkiskaup`,`utbodsvefur`,`útboðsvefur`,`ted`,`tenders electronic daily`,`procurement`,`tender portal`].some(e=>t.includes(E(e)))}function Ss(e){return Ts(k.profile||{},e)}function Cs(e){return ws(k.profile||{},e)}function ws(e,t){return $r(t)!==`needs_review`||!Ds([...Array.isArray(t?.safetyReasons)?t.safetyReasons:[],...Array.isArray(t?.risks)?t.risks:[],...Array.isArray(t?.rawPayload?.safety_reasons)?t.rawPayload.safety_reasons:[],...Array.isArray(t?.rawPayload?.risks)?t.rawPayload.risks:[]].filter(Boolean).join(` `))?!1:!Es(e)}function Ts(e,t){let n=L(t),r=R(n,[`for og verkhönnun`,`for og verkhonnun`,`verkhönnun`,`verkhonnun`,`forhönnun`,`forhonnun`,`verkfræðiráðgjöf`,`verkfraediradgjof`,`ráðgjöf`,`radgjof`,`umsjón`,`umsjon`,`verkefnastjórn`,`verkefnastjorn`,`útboðsgögn hönnun`,`utbodsgogn honnun`]),i=R(n,[`hönnun`,`honnun`]),a=R(n,[`lóðarframkvæmdir`,`lodarframkvaemdir`,`gatnagerð`,`gatnagerd`,`stígagerð`,`stigagerd`,`lagnir`,`regnvatnslagnir`,`jarðvinna`,`jardvinna`,`jarðvegsskipti`,`jardvegsskipti`,`fyllingar`,`grjóthleðsla`,`grjothledsla`,`malbikun`,`hellulögn`,`hellulogn`,`kantsteinar`,`landmótun`,`landmotun`,`yfirborðsfrágangur`,`yfirbordsfragangur`,`bílastæði`,`bilastaedi`]),o=R(n,[`eftirlit`,`umsjón`,`umsjon`,`verkefnastjórn`,`verkefnastjorn`])&&!a;return!r&&!(i&&!a)&&!o?!1:!Es(e)}function Es(e={}){return R([e.industry,...Array.isArray(e.services)?e.services:[],...Array.isArray(e.includeKeywords)?e.includeKeywords:[]].filter(Boolean).join(` `),[`hönnun`,`honnun`,`ráðgjöf`,`radgjof`,`verkfræðiráðgjöf`,`verkfraediradgjof`,`verkfræði`,`verkfraedi`,`eftirlit`,`verkefnastjórnun`,`verkefnastjornun`,`útboðsgögn`,`utbodsgogn`,`engineering`,`design`,`consulting`,`project management`,`supervision`])}function Ds(e){return R(String(e||``),[`hönnun`,`honnun`,`ráðgjöf`,`radgjof`,`verkfræðiráðgjöf`,`verkfraediradgjof`,`eftirlit`,`umsjón`,`umsjon`,`verkefnastjórn`,`verkefnastjorn`,`design`,`consulting`,`supervision`,`inspection`,`project management`])}function Os(e){if(!e)return!1;let t=e.rawPayload||{};if(String(t.admin_report_status||``).toLowerCase()===`include`)return!0;if(ms(e))return!1;let n=String(t.tender_state||``).toLowerCase();return!([`tender_awarded`,`awarded`,`already_tendered`].includes(n)||Yt(e)||an(e.title||``)&&!Jt(L(e)))}function ks(e,t){return fe({label:e,value:t,escapeHtml:D})}function As(e,t,n){return pe({title:e,description:t,opportunities:n,emptyText:k.language===`is`?`Engin atriði í þessum hluta.`:`No items in this section.`,renderOpportunityItem:js,escapeHtml:D})}function js(e){let t=!!e.estimatedValue,n=Hs(e),r=e.deadline?ls(e.deadline):O(`notFound`);return me({opp:e,valueText:t?Y(e.estimatedValue):O(`notListed`),deadlineText:r,sourceUrl:Te(e.url),risks:n,fallbackReason:`Matched to your profile by service, location or keyword overlap.`,qualityBadgeHtml:Ms(e),matchBadgeClass:ki(e.matchLabel),matchLabel:Ps(e.matchLabel),buyerLabel:O(`buyer`),buyerValue:Is(e),sourceLabel:O(`source`),sourceValue:Fs(`source`,e.source),areaLabel:O(`area`),areaValue:Ls(e),deadlineLabel:O(`deadline`),valueLabel:O(`estimatedValue`),whyLabel:O(`whyThisMatters`),risksLabel:O(`risksToCheck`),openSourceLabel:O(`openSource`),sourceMissingLabel:O(`sourceLinkMissing`),formatReason:Bs,formatRisk:$,escapeHtml:D})}function Ms(e){return he({status:P(e.qualityStatus,e),label:Ns(Q(e)),escapeHtml:D})}function Ns(e){return De(e,O)}function Ps(e){return Oe(e,O)}function Fs(e,t){return ke(e,t,O)}function Is(e){let t=e?.source||e?.rawPayload?.source_name||``;return Fs(`buyer`,Me(e?.buyer,t,e?.rawPayload||{}))}function Ls(e){return Ne(e?.source||e?.rawPayload?.source_name||``)||Fs(`location`,e?.location)}function Rs(e,t){return Fe(e,t,{language:k.language,translate:O})}function zs(e){return Pe(e,k.language,O)}function Bs(e){return Ie(e,{language:k.language,translate:O})}function $(e){return Le(e,k.language)}function Vs(e){return Re(e,k.language)}function Hs(e){let t=Array.isArray(e.risks)&&e.risks.length?[...e.risks]:[`Open the source page and confirm mandatory requirements.`];return e.deadline||t.unshift(wi(e)),e.estimatedValue||t.push(`Estimated value is not listed in the imported data.`),P(e.qualityStatus,e)===`needs_review`&&t.push(I(e)?`Extracted project signal — verify tender timing in the source article.`:`Imported from broad feed — verify that this is a real tender or business opportunity.`),[...new Set(t.map(e=>String(e||``).trim()).filter(Boolean))]}function Us(e,t){let n=us(t),r=[...n.confirmed,...n.early];return`${O(`reportForCompany`,{company:e.companyName})}
${k.language===`is`?`Tímabil`:`Date range`}: ${cs(new Date(Date.now()-10080*60*1e3).toISOString().slice(0,10),new Date().toISOString().slice(0,10))}

${k.language===`is`?`Samantekt`:`Summary`}:
- ${O(`openTenders`)}: ${n.confirmed.length}
- ${O(`upcomingOpportunities`)}: ${n.early.length}

${r.length?r.map((e,t)=>`${t+1}. ${e.title}
${k.language===`is`?`Gæði`:`Quality`}: ${Ns(Q(e))}
${O(`buyer`)}: ${Is(e)}
${O(`source`)}: ${Fs(`source`,e.source)}
${O(`area`)}: ${Ls(e)}
${O(`deadline`)}: ${Ci(e)}
${O(`estimatedValue`)}: ${e.estimatedValue?Y(e.estimatedValue):O(`notListed`)}
${k.language===`is`?`Samsvörun`:`Match`}: ${e.matchScore}/100 (${Ps(e.matchLabel)})
${O(`whyThisMatters`)}:
${(e.matchReasons.length?e.matchReasons:[`Matched to your company profile.`]).map(e=>`- ${Bs(e)}`).join(`
`)}
${O(`risksToCheck`)}:
${Hs(e).map(e=>`- ${$(e)}`).join(`
`)}
${k.language===`is`?`Næsta skref`:`Next step`}:
${e.url?`${O(`openSource`)}: ${e.url}`:k.language===`is`?`Finnið og staðfestið upprunalega heimild áður en brugðist er við.`:`Find and verify the original source page before acting.`}
`).join(`
`):k.language===`is`?`Engin skýr útboð eða verðfyrirspurnir fundust fyrir þetta tímabil.`:`No report-ready matches were found for this period.`}

VerkRadar`}function Ws(e,t,n){let r=e.period_start||e.created_at?.slice(0,10)||new Date().toISOString().slice(0,10),i=e.period_end||e.created_at?.slice(0,10)||new Date().toISOString().slice(0,10),a=es(e,t),o=rs(n),s=[...o.confirmed,...o.early,...o.review];return`${a}
${k.language===`is`?`Tímabil`:`Date range`}: ${cs(r,i)}

${s.length?s.map((e,t)=>`${t+1}. ${e.title}
${k.language===`is`?`Gæði`:`Quality`}: ${Ns(Q(e))}
${O(`buyer`)}: ${Is(e)}
${O(`source`)}: ${Fs(`source`,e.source)}
${O(`area`)}: ${Ls(e)}
${O(`deadline`)}: ${Ci(e)}
${O(`estimatedValue`)}: ${e.estimatedValue?Y(e.estimatedValue):O(`notListed`)}
${k.language===`is`?`Samsvörun`:`Match`}: ${e.matchScore}/100 (${Ps(e.matchLabel)})
${O(`whyThisMatters`)}:
${(e.matchReasons.length?e.matchReasons:[`Matched to your company profile.`]).map(e=>`- ${Bs(e)}`).join(`
`)}
${O(`risksToCheck`)}:
${Hs(e).map(e=>`- ${$(e)}`).join(`
`)}
${e.url?`${O(`openSource`)}: ${e.url}`:``}
`).join(`
`):k.language===`is`?`Engin atriði eru vistuð í þessu yfirliti.`:`No items are saved in this report.`}

${O(`reportFooter`)}`}async function Gs(){let e=Us(k.profile||Ge(),as());try{await navigator.clipboard.writeText(e),V(`Report copied`,`success`)}catch(e){console.error(`Failed to copy report:`,e),V(`Could not copy report`,`error`)}}function Ks(e=`report-preview`,t=``){let n=document.getElementById(e);if(!n){V(`No report available to export`,`error`);return}let r=k.profile||Ge(),i=n.cloneNode(!0);i.classList.add(`pdf-compact-report`),i.querySelectorAll(`textarea, .report-close-btn`).forEach(e=>e.remove());let a=i.querySelector(`.report-meta-bar`);if(a){let e=a.querySelector(`div:first-child strong`)?.textContent?.trim()||O(`reportForCompany`,{company:t||r.companyName||`Company`}),n=a.querySelector(`div:last-child span`)?.textContent?.trim()||t||r.companyName||`Company`,i=a.querySelector(`div:last-child strong`)?.textContent?.trim()||``,o=document.querySelector(`.brand-logo`)?.src||document.querySelector(`link[rel="icon"]`)?.href||``;a.innerHTML=``;let s=document.createElement(`div`);s.className=`pdf-report-header-text`;let c=document.createElement(`span`);c.textContent=O(`generatedBy`);let l=document.createElement(`strong`);l.textContent=e||O(`reportForCompany`,{company:n});let u=document.createElement(`em`);if(u.textContent=i,s.append(c,l,u),a.appendChild(s),o){let e=document.createElement(`img`);e.className=`pdf-report-logo`,e.src=o,e.alt=`VerkRadar`,a.appendChild(e)}}let o=i.querySelector(`.report-summary-grid`);o&&o.remove();let s=n.querySelector(`.report-meta-bar div:last-child strong`)?.textContent||new Date().toISOString().slice(0,10),c=Js(t||r.companyName||`company`,s),l=Array.from(document.querySelectorAll(`link[rel="stylesheet"]`)).map(e=>`<link rel="stylesheet" href="${D(e.href)}">`).join(``),u=window.open(``,`_blank`,`width=1100,height=900`);if(!u){V(`Allow popups to download the report PDF`,`error`);return}u.document.open(),u.document.write(`<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${D(c)}</title>
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
</html>`),u.document.close()}function qs(){Ks(`admin-report-preview`,(k.selectedAdminReport?.id===k.selectedAdminReportId?k.selectedAdminReport:(k.adminReports||[]).find(e=>e.id===k.selectedAdminReportId))?.companies?.company_name||`Company`)}function Js(e,t){return`VerkRadar-report-${Ys(e)||`company`}-${Ys(String(t||``).replace(/\s+to\s+/i,`-`))||new Date().toISOString().slice(0,10)}.pdf`}function Ys(e){return String(e||``).normalize(`NFD`).replace(/[\u0300-\u036f]/g,``).replace(/[^a-z0-9]+/gi,`-`).replace(/^-+|-+$/g,``).toLowerCase()}function Xs(){return Z(re({t:O,escapeHtml:D,trialHref:`/signup`}))}function Zs(){return k.user?k.profileLoading&&!k.profile&&!k.profileDraft?Z(`
      <section class="empty-state">
        <div class="loader-mark" aria-label="${D(k.language===`is`?`Hleð fyrirtækjaprófíl`:`Loading company profile`)}"></div>
        <h1>${D(k.language===`is`?`Hleð fyrirtækjaprófíl...`:`Loading company profile...`)}</h1>
        <p>${D(k.language===`is`?`Sæki vistaðan fyrirtækjaprófíl.`:`Checking your saved company profile.`)}</p>
        <button class="btn btn-secondary" type="button" data-action="retry-settings-profile">${D(k.language===`is`?`Reyna aftur`:`Retry`)}</button>
      </section>
    `):k.profileLoadError&&!k.profile&&!k.profileDraft?Z(`
      <section class="empty-state">
        <h1>${D(k.language===`is`?`Gat ekki hlaðið stillingum`:`Could not load Settings`)}</h1>
        <p>${D(k.profileLoadError)}</p>
        <button class="btn btn-primary" type="button" data-action="retry-settings-profile">${D(k.language===`is`?`Reyna aftur`:`Retry`)}</button>
      </section>
    `):!k.profile&&!k.profileDraft?Yi(O(`setupCompanyFirst`),k.language===`is`?`Stillingar eru tiltækar eftir að fyrirtækið hefur verið sett upp.`:`Settings are available after you set up your company.`):Z(ge({t:O,escapeHtml:D,language:k.language,profileDraftDirty:k.profileDraftDirty,profileLoadError:k.profileLoadError,showDemoReset:Qs(),profileFormHtml:Ha()})):z()}function Qs(){return!!(k.isAdmin||[`localhost`,`127.0.0.1`,``].includes(window.location.hostname))}Bn(),M();