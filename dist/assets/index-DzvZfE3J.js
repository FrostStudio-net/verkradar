(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={profile:`verkradar_profile`,saved:`verkradar_saved_opportunities`,ignored:`verkradar_ignored_opportunities`,language:`verkradar_language`},t={is:{navDashboard:`Mælaborð`,navReport:`Yfirlit`,navPricing:`Verðskrá`,navSettings:`Stillingar`,navHowItWorks:`Hvernig virkar þetta`,navSampleReport:`Sýnishorn`,login:`Innskráning`,logout:`Skrá út`,getStarted:`Byrja`,setupCompany:`Setja upp fyrirtæki`,createProfile:`Stofna prófíl`,companyProfile:`Fyrirtækjaprófíll`,noCompanyProfile:`Ekkert fyrirtæki`,openMenu:`Opna valmynd`,closeMenu:`Loka valmynd`,privacyPolicy:`Persónuvernd`,termsOfService:`Skilmálar`,dataSources:`Gagnaheimildir`,cookies:`Vafrakökur`,security:`Öryggi`,contact:`Hafa samband`,footerText:`Vöktun útboða og viðskiptatækifæra fyrir fyrirtæki. VerkRadar hjálpar ykkur að finna og yfirfara opinber tækifæri, en frumgögn eru alltaf endanleg heimild.`,loadingLabel:`Hleð VerkRadar`,heroEyebrow:`Útboðsgreind fyrir verktaka og þjónustufyrirtæki`,heroTitle:`Finnið verðmæt útboð áður en skilafresturinn rennur út.`,heroText:`VerkRadar vaktar opinberar heimildir og skilar stuttu yfirliti yfir verkefni sem passa við ykkar verkflokka og svæði.`,createFreeDemoProfile:`Fá ókeypis prufu-yfirlit`,viewSampleReport:`Skoða sýnishorn`,proofStrong:`Fyrir verktaka, iðnfyrirtæki og þjónustuaðila.`,proofText:`Vöktun á opinberum heimildum, sveitarfélögum og útboðsvefjum - sett fram sem forgangsraðað yfirlit.`,bestOpenMatch:`Stutt yfirlit`,tender:`Útboð`,deadlineRisk:`Rennur út fljótlega`,daysLeft:`{count} dagar eftir`,problemEyebrow:`Vandinn`,problemTitle:`Útboð tapast oft áður en tilboðsgerðin byrjar.`,problemOneTitle:`Útboð birtast á mörgum mismunandi stöðum.`,problemOneText:`Sveitarfélög, stofnanir og útboðsvefir birta tækifæri á ólíkum síðum og í ólíkum sniðum.`,problemTwoTitle:`Skilafrestir geta verið stuttir.`,problemTwoText:`Það tekur tíma að finna hvað passar við ykkar verkflokka, svæði og stærð verkefna.`,targetEyebrow:`Fyrir hverja?`,targetTitle:`Byggt fyrir íslensk fyrirtæki sem þurfa að finna rétt verkefni fyrr.`,targetText:`VerkRadar hentar fyrirtækjum sem vilja vakta útboð, verðfyrirspurnir og verkefnavísbendingar án þess að opna sömu vefi handvirkt á hverjum degi.`,solutionEyebrow:`Lausnin`,solutionTitle:`Eitt skýrt yfirlit í stað dreifðrar leitar.`,solutionText:`VerkRadar breytir útboðshávaða í forgangsraðaðan lista yfir tækifæri sem fyrirtækið ætti að skoða.`,createProfileStep:`1. Stofnið prófíl`,createProfileStepText:`Segið VerkRadar hvaða þjónustu, svæði, lykilorð og verkefnastærðir henta ykkur.`,matchProjectsStep:`2. Samsvara verkefnum`,matchProjectsStepText:`Kerfið metur hvert tækifæri gagnvart fyrirtækjaprófílnum.`,getReportStep:`3. Fáið yfirlit`,getReportStepText:`Fáið skýrt yfirlit með frestum, ástæðum samsvörunar og næstu skrefum.`,sampleReportEyebrow:`Sýnishorn`,sampleReportTitle:`Stuttlisti sem sýnir hvað er þess virði að skoða.`,sampleReportText:`Sýnishornið sýnir hvernig VerkRadar raðar útboðum og verkefnum eftir þjónustu, svæði, fresti og ástæðum samsvörunar.`,sourceDisclaimer:`VerkRadar hjálpar til við að forgangsraða tækifærum. Upprunaleg útboðsgögn eru alltaf endanleg heimild.`,pricingEyebrow:`VERÐSKRÁ`,pricingHeadline:`Einföld verðskrá fyrir fyrstu útgáfu`,pricingSubtitle:`Byrjið með skýru yfirliti og bætið við sjálfvirkni eftir þörfum.`,pricingStarter:`Grunnur`,pricingGrowth:`Vöxtur`,pricingPro:`Sérsniðið`,pricingMonth:`/mán.`,pricingBadge:`Hentar flestum fyrirtækjum`,pricingCta:`Fá prufuaðgang`,pricingTrialNoCard:`Engin greiðslukort krafist í prufu.`,pricingWeeklyReport:`Vikulegt yfirlit`,pricingFiveMatches:`Allt að 5 samsvaranir á viku`,pricingBasicMatching:`Grunnsamsvörun`,pricingDeadlineReminders:`Áminningar um skilafresti`,pricingOneProfile:`1 fyrirtækjaprófíll`,pricingEverythingStarter:`Allt í Grunni`,pricingMoreSources:`Fleiri heimildir`,pricingSummaries:`Stutt samantekt á tækifærum`,pricingLabels:`Sterk/góð/möguleg samsvörun`,pricingSaved:`Vistuð tækifæri`,pricingArchive:`Yfirlitssafn`,pricingEverythingGrowth:`Allt í Vexti`,pricingDocumentSummaries:`Samantektir útboðsgagna`,pricingRequirements:`Gátlisti fyrir kröfur`,pricingRiskWarnings:`Áhættuvísbendingar`,pricingBidChecklist:`Gátlisti fyrir tilboðsgerð`,pricingPrioritySupport:`Forgangsþjónusta`,tryDemoTitle:`Prófið sýnimælaborðið.`,tryDemoText:`Hlaðið sýnifyrirtæki og sjáið hvernig samsvörunin virkar.`,loadDemoCompany:`Hlaða sýnifyrirtæki`,authLoginTitle:`Skrá inn í VerkRadar`,authLoginSubtitle:`Fáið aðgang að mælaborði, vistuðum tækifærum og vikuyfirlitum.`,email:`Netfang`,password:`Lykilorð`,forgotPassword:`Gleymt lykilorð?`,loggingIn:`Skrái inn...`,newToVerkRadar:`Ný hjá VerkRadar?`,createAccount:`Stofna aðgang`,createAccountTitle:`Stofna VerkRadar aðgang`,createAccountSubtitle:`Byrjið á að stofna aðgang. Síðan stofnið þið fyrirtækjaprófíl.`,authRequiredTitle:`Skráðu þig inn til að halda áfram`,authRequiredText:`Þessi síða er aðgengileg eftir innskráningu.`,alreadyLoggedInTitle:`Þú ert þegar skráð(ur) inn`,alreadyLoggedInText:`Beini þér á næsta skref.`,signupCreatedConfirm:`Aðgangur stofnaður. Athugaðu tölvupóstinn þinn til að staðfesta aðganginn.`,signupExistingAccount:`Þetta netfang er þegar með aðgang. Skráðu þig inn eða endurstilltu lykilorð.`,signupNeutralNextSteps:`Ef aðgangur er til fyrir þetta netfang færðu tölvupóst með næstu skrefum. Annars hefur nýr aðgangur verið stofnaður.`,emailOrPasswordIncorrect:`Netfang eða lykilorð er rangt.`,confirmEmailBeforeLogin:`Staðfestu netfangið þitt áður en þú skráir þig inn.`,passwordTooShort:`Lykilorð þarf að vera að minnsta kosti 6 stafir.`,tooManyAttempts:`Of margar tilraunir. Bíddu aðeins og reyndu aftur.`,couldNotCreateAccount:`Gat ekki stofnað aðgang. Athugaðu netfang og lykilorð.`,couldNotLogin:`Gat ekki skráð þig inn. Reyndu aftur.`,creating:`Stofna...`,alreadyHaveAccount:`Ertu þegar með aðgang?`,passwordReset:`Endurstilla lykilorð`,resetPasswordTitle:`Endurstilla lykilorð`,resetPasswordSubtitle:`Sláið inn netfang og VerkRadar sendir öruggan hlekk ef aðgangur er til.`,sending:`Sendi...`,sendResetLink:`Senda hlekk`,rememberedPassword:`Manstu lykilorðið?`,backToLogin:`Til baka í innskráningu`,newPassword:`Nýtt lykilorð`,chooseNewPassword:`Veldu nýtt lykilorð`,resetPasswordHelp:`Settu nýtt lykilorð fyrir VerkRadar aðganginn. Ef hlekkurinn er útrunninn skaltu biðja um nýjan.`,confirmNewPassword:`Staðfesta nýtt lykilorð`,updating:`Uppfæri...`,updatePassword:`Uppfæra lykilorð`,needNewLink:`Þarftu nýjan hlekk?`,sendAnotherResetLink:`Senda annan hlekk`,onboarding:`UPPSETNING`,onboardingTitle:`Settu upp fyrirtækið`,onboardingText:`Segðu okkur hvað fyrirtækið gerir svo VerkRadar geti fundið viðeigandi tækifæri.`,companyBasics:`1. Grunnupplýsingar`,companyName:`Fyrirtækisnafn`,contactEmail:`Tengiliðanetfang`,website:`Vefsíða`,industry:`Atvinnugrein`,selectIndustry:`Veldu atvinnugrein`,servicesAndKeywords:`2. Þjónustur og leitarorð`,servicesHint:`Bætið við þjónustu sem þið bjóðið raunverulega upp á. Veldu mikilvægustu atriðin fyrst.`,servicesLabel:`Þjónustur`,servicesHelper:`Skráið þjónustuna sem fyrirtækið selur. Nákvæmari þjónusta gefur betri samsvaranir.`,extraWords:`Leitarorð`,includeKeywordsHelper:`Notið orð sem birtast oft í tækifærum sem þið viljið fá.`,excludeWords:`Orð sem ættu að lækka eða fjarlægja slæmar samsvaranir.`,excludeKeywordsHelper:`Orð sem ættu að lækka eða fjarlægja slæmar samsvaranir.`,suggestedServicesFor:`Tillögur að þjónustu fyrir {industry}`,suggestedKeywordsFor:`Tillögur að leitarorðum fyrir {industry}`,selectIndustryForServices:`Veljið atvinnugrein til að sjá þjónustutillögur`,selectIndustryForKeywords:`Veljið atvinnugrein til að sjá leitarorðatillögur`,locationsTitle:`3. Svæði`,locationsHint:`Notið Allt landið fyrir landsdekkandi útboð. Notið ferðastillingar ef þið getið boðið utan heimasvæðis fyrir rétt verkefni.`,baseLocation:`Heimasvæði`,baseLocationPlaceholder:`Dæmi: Austurland`,serviceAreas:`Þjónustusvæði, aðskilin með kommu`,serviceAreasPlaceholder:`Dæmi: Austurland, Allt landið`,travelScope:`Ferðir og umfang`,willingToTravel:`Tilbúin að ferðast fyrir rétt verkefni`,includeNational:`Sýna landsdekkandi tækifæri`,includeRemote:`Sýna fjarvinnu / netverkefni`,minimumTravelValue:`Lágmarksverðmæti fyrir ferðalög`,projectSize:`4. Stillingar`,minimumValue:`Lágmarksverðmæti`,maximumValue:`Hámarksverðmæti`,showUnknownValue:`Sýna tækifæri þó verðmæti vanti`,reportPreferences:`Yfirlitsstillingar`,frequency:`Tíðni`,weekly:`Vikulega`,daily:`Daglega`,reportDay:`Dagur yfirlits`,deadlineReminders:`Áminningar um skilafresti`,includeLowConfidence:`Sýna óvissar samsvaranir`,saveProfile:`Vista prófíl`,saving:`Vista...`,saved:`Vistað`,dashboard:`Mælaborð`,welcomeCompany:`Velkomin, {company}`,dashboardIntro:`Forgangsraðaðar tækifærasamsvaranir út frá þjónustu, svæðum og leitarorðum. {refresh}`,matchesLastRefreshed:`Síðast uppfært {time}.`,matchesAutoRefresh:`Samsvaranir uppfærast sjálfkrafa eftir vistun prófíls.`,refreshMatches:`Uppfæra samsvaranir`,refreshing:`Uppfæri...`,viewWeeklyReport:`Skoða yfirlit`,strongMatches:`Sterkar samsvaranir`,closingSoon:`Rennur út fljótlega`,savedLabel:`Vistað`,totalPotentialValue:`Áætlað heildarverðmæti`,searchOpportunities:`Leita í tækifærum...`,savedOnly:`Aðeins vistað`,improveProfile:`Bæta prófíl`,includeNationalOpportunities:`Sýna landsdekkandi tækifæri`,showAllStoredMatches:`Sýna allar samsvaranir`,inspectAllOpportunities:`Skoða öll tækifæri`,details:`Nánar`,save:`Vista`,ignore:`Hunsa`,originalLanguage:`Upprunalegt tungumál`,extractedProject:`Útdregið verkefni`,reportTitle:`Útboðs- og verkefnayfirlit`,setupCompanyFirst:`Settu fyrst upp fyrirtækið`,reportNeedsProfile:`Yfirlitið þarf fyrirtækjaprófíl til að geta fundið viðeigandi tækifæri.`,dashboardNeedsProfile:`Mælaborðið þarf fyrirtækjaprófíl til að reikna viðeigandi samsvaranir.`,weeklyReport:`Yfirlit`,saveReport:`Vista yfirlit`,savingReport:`Vista...`,downloadPdf:`Sækja PDF`,copyReport:`Afrita yfirlit`,reportArchive:`Yfirlitssafn`,savedReports:`Vistuð yfirlit`,loadingSavedReports:`Hleð vistuð yfirlit...`,noSavedReports:`Engin vistuð yfirlit enn.`,viewReport:`Skoða yfirlit`,closeReport:`Loka yfirliti`,generatedBy:`Útbúið af VerkRadar`,reportForCompany:`Útboðs- og verkefnayfirlit fyrir {company}`,openTenders:`Opin útboð / verðfyrirspurnir`,upcomingOpportunities:`Möguleg væntanleg tækifæri`,openTendersDescription:`Skýr útboðs- eða verðfyrirspurnarmerki. Yfirfarið frumgögn áður en brugðist er við.`,upcomingDescription:`Væntanleg útboðs- eða verkefnamerki með skýrum vísbendingum.`,reportFooter:`VerkRadar hjálpar til við að forgangsraða yfirferð opinberra tækifæra. Staðfestið alltaf útboðsgögn, skilafresti, kröfur og hæfi á upprunalegri heimild áður en brugðist er við.`,buyer:`Kaupandi`,source:`Heimild`,description:`Lýsing`,requirements:`Kröfur`,noSpecificRequirements:`Engar sérstakar kröfur skráðar.`,noDescription:`Engin lýsing tiltæk.`,noMatchReasons:`Engar ástæður samsvörunar tiltækar.`,matchReasons:`Ástæður samsvörunar`,opportunityInfo:`Upplýsingar um tækifæri`,extraction:`Útdráttur`,sourceArticle:`Heimildargrein`,parentArticle:`Upprunagrein`,openSourceArticle:`Opna heimildargrein`,extractedRegion:`Útdregið svæði`,projectNumber:`Verknúmer`,tenderState:`Staða útboðs`,quality:`Gæði`,category:`Flokkur`,type:`Tegund`,published:`Birt`,cpv:`CPV`,recommendedNextSteps:`Ráðlögð næstu skref`,noMajorRisks:`Engar stórar áhættur greindar í þessum gögnum.`,openSourceAndConfirm:`Opnið upprunalega heimild og staðfestið hæfi.`,removeFromSaved:`Fjarlægja úr vistuðum`,saveOpportunity:`Vista tækifæri`,markNotRelevant:`Merkja sem ekki viðeigandi`,publicProcurement:`Opinbert útboð`,area:`Svæði`,deadline:`Skilafrestur`,estimatedValue:`Áætlað verðmæti`,notFound:`Fannst ekki`,notListed:`Ekki gefið upp`,unknownBuyer:`Óþekktur kaupandi`,allIceland:`Allt landið`,whyThisMatters:`Af hverju þetta gæti skipt máli`,risksToCheck:`Atriði til að staðfesta`,openSource:`Opna heimild`,sourceLinkMissing:`Heimildartengil vantar`,strongMatch:`Sterk samsvörun`,goodMatch:`Góð samsvörun`,possibleMatch:`Möguleg samsvörun`,weakMatch:`Veik samsvörun`,confirmedTender:`Staðfest útboð`,likelyOpportunity:`Líklegt tækifæri`,earlySignal:`Væntanlegt tækifæri`,needsReview:`Þarfnast staðfestingar`,tenderAwarded:`Útboði lokið / samið`,tenderAlreadyAnnounced:`Útboð þegar auglýst`,upcomingTender:`Væntanlegt útboð`,projectSignal:`Verkefnavísbending`,nationalOpportunity:`Landsdekkandi tækifæri`,localMatch:`Staðbundin samsvörun`,mentionsService:`Nefnir þjónustu ykkar: {value}`,containsKeyword:`Inniheldur leitarorð: {value}`,procurement:`innkaup`},en:{navDashboard:`Dashboard`,navReport:`Report`,navPricing:`Pricing`,navSettings:`Settings`,navHowItWorks:`How it works`,navSampleReport:`Sample report`,login:`Login`,logout:`Logout`,getStarted:`Get started`,setupCompany:`Set up company`,createProfile:`Create profile`,companyProfile:`Company profile`,noCompanyProfile:`No company`,openMenu:`Open menu`,closeMenu:`Close menu`,privacyPolicy:`Privacy`,termsOfService:`Terms`,dataSources:`Data sources`,cookies:`Cookies`,security:`Security`,contact:`Contact`,footerText:`Tender and opportunity monitoring for businesses. VerkRadar helps you find and review public opportunities, but source documents remain the authority.`,loadingLabel:`Loading VerkRadar`,heroEyebrow:`Tender intelligence for working contractors`,heroTitle:`Stop losing valuable jobs to tabs you never opened.`,heroText:`VerkRadar monitors public sources and returns a short project shortlist matched to your trades and service areas.`,createFreeDemoProfile:`Get a free trial report`,viewSampleReport:`View sample report`,proofStrong:`Contractors find relevant opportunities faster.`,proofText:`Top matches often include tenders outside the main databases.`,bestOpenMatch:`Shortlist`,tender:`Tender`,deadlineRisk:`Deadline risk`,daysLeft:`{count} days left`,problemEyebrow:`The problem`,problemTitle:`Opportunities are often lost before bidding starts.`,problemOneTitle:`Deadlines show up after your crew is already booked.`,problemOneText:`A short response window becomes a scramble, or a valuable contract never gets priced.`,problemTwoTitle:`The search takes longer than the go/no-go call.`,problemTwoText:`Owners spend hours opening low-fit tenders instead of seeing value, location, requirements and match reasons in one view.`,targetEyebrow:`Who it is for`,targetTitle:`Built for Icelandic companies that need to find the right jobs earlier.`,targetText:`VerkRadar is for teams that want to monitor tenders, quote requests and project signals without checking the same websites manually every day.`,solutionEyebrow:`The solution`,solutionTitle:`One clear report instead of scattered searching.`,solutionText:`VerkRadar turns tender noise into a ranked list of opportunities your business should actually check.`,createProfileStep:`1. Create profile`,createProfileStepText:`Tell VerkRadar your services, locations, keywords and project size.`,matchProjectsStep:`2. Match projects`,matchProjectsStepText:`The system scores each opportunity against your business profile.`,getReportStep:`3. Get report`,getReportStepText:`Receive a clear weekly report with deadlines and next steps.`,sampleReportEyebrow:`Sample report`,sampleReportTitle:`A shortlist that shows what is worth checking.`,sampleReportText:`Preview how VerkRadar ranks tenders and projects by services, region, deadline and match reasons.`,sourceDisclaimer:`VerkRadar helps prioritize opportunity review. Original tender documents are always the final authority.`,pricingEyebrow:`PRICING`,pricingHeadline:`Simple pricing for the first version`,pricingSubtitle:`Start with a clear report and add automation as needed.`,pricingStarter:`Starter`,pricingGrowth:`Growth`,pricingPro:`Custom`,pricingMonth:`/month`,pricingBadge:`Best for most businesses`,pricingCta:`Get trial access`,pricingTrialNoCard:`No credit card required for the trial.`,pricingWeeklyReport:`Weekly report`,pricingFiveMatches:`Up to 5 matched opportunities/week`,pricingBasicMatching:`Basic matching`,pricingDeadlineReminders:`Deadline reminders`,pricingOneProfile:`1 company profile`,pricingEverythingStarter:`Everything in Starter`,pricingMoreSources:`More sources`,pricingSummaries:`Opportunity summaries`,pricingLabels:`Strong/Good/Possible match labels`,pricingSaved:`Saved opportunities`,pricingArchive:`Report archive`,pricingEverythingGrowth:`Everything in Growth`,pricingDocumentSummaries:`Tender document summaries`,pricingRequirements:`Requirements checklist`,pricingRiskWarnings:`Risk warnings`,pricingBidChecklist:`Bid preparation checklist`,pricingPrioritySupport:`Priority support`,tryDemoTitle:`Try the demo dashboard now.`,tryDemoText:`Load a sample company profile and see how the matching works.`,loadDemoCompany:`Load demo company`,authLoginTitle:`Login to VerkRadar`,authLoginSubtitle:`Access your company dashboard, saved opportunities and weekly reports.`,email:`Email`,password:`Password`,forgotPassword:`Forgot password?`,loggingIn:`Logging in...`,newToVerkRadar:`New to VerkRadar?`,createAccount:`Create account`,createAccountTitle:`Create your VerkRadar account`,createAccountSubtitle:`Start by creating an account. Then you’ll create your company profile.`,authRequiredTitle:`Log in to continue`,authRequiredText:`This page is available after you sign in.`,alreadyLoggedInTitle:`Already logged in`,alreadyLoggedInText:`Redirecting you to the next step.`,signupCreatedConfirm:`Account created. Check your email to confirm your account.`,signupExistingAccount:`This email already has an account. Log in or reset your password.`,signupNeutralNextSteps:`If an account exists for this email, you’ll receive an email with next steps. Otherwise, a new account has been created.`,emailOrPasswordIncorrect:`Email or password is incorrect.`,confirmEmailBeforeLogin:`Please confirm your email before logging in.`,passwordTooShort:`Password must be at least 6 characters.`,tooManyAttempts:`Too many attempts. Please wait a moment and try again.`,couldNotCreateAccount:`Could not create account. Please check your email and password.`,couldNotLogin:`Could not log in. Please try again.`,creating:`Creating...`,alreadyHaveAccount:`Already have an account?`,passwordReset:`Password reset`,resetPasswordTitle:`Reset your password`,resetPasswordSubtitle:`Enter your email and VerkRadar will send a secure reset link if the account exists.`,sending:`Sending...`,sendResetLink:`Send reset link`,rememberedPassword:`Remembered your password?`,backToLogin:`Back to login`,newPassword:`New password`,chooseNewPassword:`Choose a new password`,resetPasswordHelp:`Set a new password for your VerkRadar account. If the link has expired, request a new reset link.`,confirmNewPassword:`Confirm new password`,updating:`Updating...`,updatePassword:`Update password`,needNewLink:`Need a new link?`,sendAnotherResetLink:`Send another reset link`,onboarding:`SETUP`,onboardingTitle:`Set up your company`,onboardingText:`Tell us what your company does so VerkRadar can find relevant opportunities.`,companyBasics:`1. Basic information`,companyName:`Company name`,contactEmail:`Contact email`,website:`Website`,industry:`Industry`,selectIndustry:`Select industry`,servicesAndKeywords:`2. Services and keywords`,servicesHint:`Add services you actually provide. Start with the most important ones.`,servicesLabel:`Services`,servicesHelper:`Add the services your company actually sells. More specific services create better matches.`,extraWords:`Keywords`,includeKeywordsHelper:`Use words that often appear in opportunities you want.`,excludeWords:`Words that should lower or remove bad matches.`,excludeKeywordsHelper:`Words that should lower or remove bad matches.`,suggestedServicesFor:`Suggested services for {industry}`,suggestedKeywordsFor:`Suggested keywords for {industry}`,selectIndustryForServices:`Select an industry to see service suggestions`,selectIndustryForKeywords:`Select an industry to see keyword suggestions`,locationsTitle:`3. Locations`,locationsHint:`Use All Iceland for national tenders. Use travel settings when you can bid outside your base area for the right project size.`,baseLocation:`Base location`,baseLocationPlaceholder:`Example: East Iceland`,serviceAreas:`Service areas, comma separated`,serviceAreasPlaceholder:`Example: East Iceland, All Iceland`,travelScope:`Travel and scope`,willingToTravel:`Willing to travel for the right project`,includeNational:`Include national / All Iceland opportunities`,includeRemote:`Include remote / online opportunities`,minimumTravelValue:`Minimum project value for travel`,projectSize:`4. Settings`,minimumValue:`Minimum value`,maximumValue:`Maximum value`,showUnknownValue:`Show opportunities even if value is unknown`,reportPreferences:`Report preferences`,frequency:`Frequency`,weekly:`Weekly`,daily:`Daily`,reportDay:`Report day`,deadlineReminders:`Deadline reminders`,includeLowConfidence:`Include low-confidence matches`,saveProfile:`Save profile`,saving:`Saving...`,saved:`Saved`,dashboard:`Dashboard`,welcomeCompany:`Welcome, {company}`,dashboardIntro:`Ranked project opportunities based on your services, locations and keywords. {refresh}`,matchesLastRefreshed:`Last refreshed {time}.`,matchesAutoRefresh:`Matches refresh automatically after profile saves.`,refreshMatches:`Refresh matches`,refreshing:`Refreshing...`,viewWeeklyReport:`View report`,strongMatches:`Strong matches`,closingSoon:`Closing soon`,savedLabel:`Saved`,totalPotentialValue:`Total potential value`,searchOpportunities:`Search opportunities...`,savedOnly:`Saved only`,improveProfile:`Improve profile`,includeNationalOpportunities:`Include national opportunities`,showAllStoredMatches:`Show all matches`,inspectAllOpportunities:`Inspect all opportunities`,details:`Details`,save:`Save`,ignore:`Ignore`,originalLanguage:`Original language`,extractedProject:`Extracted project`,reportTitle:`Tender and opportunity report`,setupCompanyFirst:`Set up your company first`,reportNeedsProfile:`The report needs a company profile before it can generate relevant opportunity matches.`,dashboardNeedsProfile:`The dashboard needs a company profile so it can calculate relevant opportunity matches.`,weeklyReport:`Report`,saveReport:`Save report`,savingReport:`Saving...`,downloadPdf:`Download PDF`,copyReport:`Copy report`,reportArchive:`Report archive`,savedReports:`Saved reports`,loadingSavedReports:`Loading saved reports...`,noSavedReports:`No saved reports yet.`,viewReport:`View report`,closeReport:`Close report`,generatedBy:`Generated by VerkRadar`,reportForCompany:`Tender and opportunity report for {company}`,openTenders:`Open tenders / quote requests`,upcomingOpportunities:`Possible upcoming opportunities`,openTendersDescription:`Clear procurement intent. Review source documents before acting.`,upcomingDescription:`Upcoming procurement or project signals with clear evidence.`,reportFooter:`VerkRadar helps prioritise public opportunity review. Always check the original source documents, deadlines, requirements and eligibility before acting.`,buyer:`Buyer`,source:`Source`,description:`Description`,requirements:`Requirements`,noSpecificRequirements:`No specific requirements listed.`,noDescription:`No description available.`,noMatchReasons:`No match reasons available.`,matchReasons:`Match reasons`,opportunityInfo:`Opportunity info`,extraction:`Extraction`,sourceArticle:`Source article`,parentArticle:`Parent article`,openSourceArticle:`Open source article`,extractedRegion:`Extracted region`,projectNumber:`Project number`,tenderState:`Tender state`,quality:`Quality`,category:`Category`,type:`Type`,published:`Published`,cpv:`CPV`,recommendedNextSteps:`Recommended next steps`,noMajorRisks:`No major risks detected in this data.`,openSourceAndConfirm:`Open the source notice and confirm eligibility.`,removeFromSaved:`Remove from saved`,saveOpportunity:`Save opportunity`,markNotRelevant:`Mark not relevant`,publicProcurement:`Public procurement`,area:`Location`,deadline:`Deadline`,estimatedValue:`Estimated value`,notFound:`Not found`,notListed:`Not listed`,unknownBuyer:`Unknown buyer`,allIceland:`All Iceland`,whyThisMatters:`Why this matters`,risksToCheck:`Risks / things to check`,openSource:`Open source`,sourceLinkMissing:`Source link missing`,strongMatch:`Strong match`,goodMatch:`Good match`,possibleMatch:`Possible match`,weakMatch:`Weak match`,confirmedTender:`Confirmed tender`,likelyOpportunity:`Likely opportunity`,earlySignal:`Early signal`,needsReview:`Needs review`,tenderAwarded:`Tender awarded`,tenderAlreadyAnnounced:`Tender already announced`,upcomingTender:`Upcoming tender`,projectSignal:`Project signal`,nationalOpportunity:`National opportunity`,localMatch:`Local match`,mentionsService:`Mentions your service: {value}`,containsKeyword:`Contains your keyword: {value}`,procurement:`procurement`}};function n(e){let t=localStorage.getItem(e.language);return t===`en`||t===`is`?t:`is`}function r(e,n,r={}){let i=t[e||`is`]||t.is,a=t.en[n]||t.is[n]||n;return String(i[n]||a).replace(/\{(\w+)\}/g,(e,t)=>r[t]??``)}var i={services:{Electrical:[`raflagnir`,`rafvirki`,`brunakerfi`,`öryggiskerfi`,`lýsing`,`viðhald`,`þjónusta`,`hleðslustöðvar`,`töflusmíði`,`rafmagnseftirlit`],"IT / Web / Software":[`vefsíðugerð`,`vefhönnun`,`hugbúnaðarþróun`,`kerfisþróun`,`vefverslun`,`aðgengi`,`CMS`,`gagnagrunnar`,`viðhald`,`ráðgjöf`],Cleaning:[`Office cleaning`,`School cleaning`,`Facility cleaning`,`Window cleaning`,`Deep cleaning`,`Floor care`,`Municipal cleaning`,`Regular cleaning contracts`],Transport:[`Passenger transport`,`Goods transport`,`Healthcare transport`,`School transport`,`Shuttle services`,`Delivery services`,`Framework transport services`],Construction:[`jarðvinna`,`gatnagerð`,`vegagerð`,`malbikun`,`brúargerð`,`lagnavinna`,`framkvæmdir`,`viðhald`,`steypa`,`húsbyggingar`,`þakvinna`]},includeKeywords:{Electrical:[`rafmagn`,`rafvirki`,`brunakerfi`,`hleðslustöð`,`öryggiskerfi`,`myndavélakerfi`,`lýsing`,`viðhald`,`lagnir`,`neyðarlýsing`]}},a={companyName:`RafFix ehf.`,contactEmail:`owner@raffix.is`,website:`https://raffix.is`,industry:`Electrical`,services:[`electrical installation`,`maintenance`,`fire alarm systems`,`EV chargers`],includeKeywords:[`charging`,`inspection`,`public buildings`],excludeKeywords:[`telecom`,`snow removal`],locations:[`Reykjavík`,`Capital Area`,`Suðurnes`,`Remote / Online`],minProjectValue:5e5,maxProjectValue:3e7,allowUnknownValue:!0,reportFrequency:`weekly`,reportDay:`monday`,deadlineReminders:!0,includeLowConfidence:!1,autoAlertMode:`auto_safe_only`};function o(e=``){return{companyName:``,contactEmail:e||``,website:``,industry:``,services:[],includeKeywords:[],excludeKeywords:[],locations:[],baseLocation:``,serviceAreas:[],willingToTravel:!1,nationalProjects:!1,remoteProjects:!1,minimumProjectValueForTravel:``,minProjectValue:``,maxProjectValue:``,allowUnknownValue:!0,reportFrequency:`weekly`,reportDay:`monday`,deadlineReminders:!0,includeLowConfidence:!1,autoAlertMode:`auto_safe_only`}}function s(e,t=`is`){let n=t===`is`;return{privacy:n?{eyebrow:`Lög og traust`,title:`Persónuvernd`,intro:`Hér er útskýrt á einföldu máli hvaða gögn VerkRadar vistar og hvernig þau eru notuð til að veita þjónustuna.`,sections:[[`Persónuvernd`,[`VerkRadar er vöktunar- og yfirlitskerfi fyrir fyrirtæki. Kerfið notar gögn sem notandi setur inn og opinber gögn um útboð og verkefni til að hjálpa fyrirtækjum að finna það sem gæti passað.`]],[`Hvaða gögn eru vistuð`,[`VerkRadar getur vistað fyrirtækjaheiti, tengiliðanetfang, vefslóð, atvinnugrein, þjónustuflokka, staðsetningar, leitarorð, stillingar, vistuð og hunsuð verkefni, samsvaranir og yfirlit.`,`Kerfið vistar einnig innskráningar- og lotugögn sem þarf til að halda notendum innskráðum og vernda aðgang.`]],[`Innskráning og aðgangur`,[`Notendur skrá sig inn með auðkenndum aðgangi. Aðgangur að mælaborði, stillingum og skýrslum er tengdur við notanda og fyrirtæki eftir því sem við á.`]],[`Fyrirtækjaprófíll og stillingar`,[`Fyrirtækjaprófíllinn er notaður til að bera opinber verkefni saman við þjónustu, svæði, lykilorð og óskir fyrirtækisins. Betri prófíll gefur yfirleitt betri samsvörun.`]],[`Vistuð og hunsuð tækifæri`,[`VerkRadar getur vistað hvaða verkefni notandi vistar, fylgist með eða hunsar. Þetta er notað til að bæta upplifun, síur og yfirlit.`]],[`Vafrakökur og vafrageymsla`,[`VerkRadar notar nauðsynlega vafrageymslu, lotugeymslu og sambærilega virkni fyrir innskráningu, Supabase Auth lotur, tungumál, stillingar og grunnvirkni appsins.`,`Við gerum ekki ráð fyrir auglýsinga- eða rekjanlegri markaðssetningargeymslu í þessari útgáfu. Ef greiningar eða auglýsingatól verða síðar bætt við þarf að uppfæra þessa lýsingu.`]],[`Hafa samband`,[`Spurningar um persónuvernd eða gögn má senda á info@froststudio.net.`]]]}:{eyebrow:`Legal and trust`,title:`Privacy`,intro:`This page explains in practical terms what VerkRadar stores and how that data is used to provide the service.`,sections:[[`Privacy`,[`VerkRadar is a monitoring and reporting tool for businesses. It uses user-entered company data and public tender/project data to help companies find relevant opportunities.`]],[`What data is stored`,[`VerkRadar may store company name, contact email, website, industry, service categories, locations, keywords, settings, saved and ignored opportunities, matches, and reports.`,`The system also stores login and session data needed to keep users signed in and protect account access.`]],[`Login and access`,[`Users log in with authenticated accounts. Access to dashboards, settings, and reports is connected to the user and company where applicable.`]],[`Company profile and settings`,[`The company profile is used to compare public opportunities against services, locations, keywords, and company preferences. A better profile usually creates better matches.`]],[`Saved and ignored opportunities`,[`VerkRadar may store which opportunities a user saves, watches, or ignores. This is used to improve the experience, filters, and reports.`]],[`Cookies and browser storage`,[`VerkRadar uses essential browser storage, session storage, and similar functionality for login, Supabase Auth sessions, language, preferences, and core app functionality.`,`We do not currently claim to use advertising or marketing tracking storage in this version. If analytics or advertising tools are added later, this section should be updated.`]],[`Contact`,[`Questions about privacy or data can be sent to info@froststudio.net.`]]]},terms:n?{eyebrow:`Lög og traust`,title:`Skilmálar`,intro:`Þessir skilmálar lýsa notkun VerkRadar á einföldu máli. Þeir eru ekki endanleg lögfræðiráðgjöf.`,sections:[[`Skilmálar`,[`Með því að nota VerkRadar samþykkir notandi að nota þjónustuna á ábyrgan hátt og staðfesta alltaf upplýsingar á upprunalegri heimild áður en brugðist er við.`]],[`Þjónustan`,[`VerkRadar vaktar opinberar heimildir, útboðsvefi, sveitarfélagssíður og aðrar heimildir þar sem það er heimilt og tæknilega mögulegt. Kerfið raðar verkefnum eftir fyrirtækjaprófíl og býr til mælaborð eða yfirlit.`]],[`Upprunaleg gögn eru endanleg heimild`,[`VerkRadar hjálpar til við að forgangsraða yfirferð opinberra tækifæra. Upprunaleg útboðsgögn, skilafrestir, kröfur og hæfisskilyrði á upprunalegri heimild eru alltaf endanleg heimild.`]],[`Engin trygging um fullkomna vöktun`,[`VerkRadar tryggir ekki að öll útboð finnist, að öll gögn séu fullkomin, að samsvörun sé alltaf rétt eða að fyrirtæki uppfylli skilyrði eða vinni verk.`]],[`Prufuaðgangur og verð`,[`Prufuaðgangur, verð, greiðslur og uppsagnir ráðast af verðsíðu, pöntunarsíðu eða skriflegu samkomulagi hverju sinni.`]],[`Uppsögn`,[`Notandi getur óskað eftir lokun eða breytingu á aðgangi. VerkRadar getur takmarkað aðgang ef þjónustan er misnotuð, greiðslur vantar eða öryggisáhætta kemur upp.`]],[`Ábyrgðartakmörkun`,[`VerkRadar ber ekki ábyrgð á töpuðum skilafrestum, röngum upplýsingum á upprunalegum heimildum, viðskiptatapi eða ákvörðunum sem teknar eru út frá yfirlitum án staðfestingar á frumgögnum.`]],[`Hafa samband`,[`Spurningar um skilmála má senda á info@froststudio.net.`]]]}:{eyebrow:`Legal and trust`,title:`Terms`,intro:`These terms describe VerkRadar use in plain language. They are not final legal advice.`,sections:[[`Terms`,[`By using VerkRadar, users agree to use the service responsibly and always verify information at the original source before acting.`]],[`The service`,[`VerkRadar monitors public sources, procurement portals, municipal pages, and other sources where allowed and technically feasible. The system ranks opportunities against company profiles and creates dashboards or reports.`]],[`Original data is the final authority`,[`VerkRadar helps prioritize review of public opportunities. Original tender documents, deadlines, requirements, and eligibility criteria at the original source are always the final authority.`]],[`No guarantee of complete monitoring`,[`VerkRadar does not guarantee that every tender is found, that all data is complete, that matching is always correct, or that a company is eligible for or will win any contract.`]],[`Trial access and pricing`,[`Trial access, pricing, billing, and cancellation are governed by the pricing page, order page, or written agreement in effect at the time.`]],[`Cancellation`,[`A user may request account changes or cancellation. VerkRadar may restrict access if the service is misused, payment is missing, or a security risk arises.`]],[`Limitation of liability`,[`VerkRadar is not responsible for missed deadlines, incorrect information at original sources, business losses, or decisions made from reports without checking source documents.`]],[`Contact`,[`Questions about these terms can be sent to info@froststudio.net.`]]]},data:n?{eyebrow:`Gagnaheimildir`,title:`Gagnaheimildir`,intro:`VerkRadar notar opinberar heimildir til að hjálpa fyrirtækjum að finna verkefni sem gætu skipt máli.`,sections:[[`Gagnaheimildir`,[`Kerfið safnar og samræmir opinberar upplýsingar þar sem slíkt er heimilt og tæknilega mögulegt.`]],[`Opinberar heimildir`,[`Heimildir geta verið útboðsvefir, opinberar stofnanir, RSS straumar, sveitarfélagssíður og aðrar opinberar síður.`]],[`Sveitarfélög og útboðsvefir`,[`VerkRadar getur vaktað sveitarfélög, innkaupa- og útboðsvefi og sértækar síður fyrir framkvæmdir, þjónustu eða innkaup.`]],[`Evrópsk útboð ef við á`,[`Evrópsk útboð geta verið sótt úr TED eða sambærilegum heimildum þegar þau eiga við markaðinn og fyrirtækjaprófíla.`]],[`Takmarkanir gagna`,[`Sumar heimildir veita ekki fulla skilafresti, verðmæti, kaupanda eða útboðsgögn í véllesanlegu formi. Gögn geta verið seinkuð, ófullkomin, tvítekin eða breytt á upprunalegri síðu.`]],[`Leiðréttingar`,[`Ef þú sérð rangar eða úreltar upplýsingar má senda ábendingu á info@froststudio.net. Opnið alltaf upprunalega heimild áður en brugðist er við.`]]]}:{eyebrow:`Data sources`,title:`Data sources`,intro:`VerkRadar uses public sources to help businesses find projects that may matter.`,sections:[[`Data sources`,[`The system collects and normalizes public information where allowed and technically feasible.`]],[`Public sources`,[`Sources can include procurement portals, public institutions, RSS feeds, municipal pages, and other official public pages.`]],[`Municipalities and procurement portals`,[`VerkRadar may monitor municipalities, procurement/tender portals, and specific pages for construction, services, or purchasing.`]],[`European tenders where applicable`,[`European tenders may be imported from TED or similar sources when relevant to the market and company profiles.`]],[`Data limitations`,[`Some sources do not provide full deadlines, values, buyer data, or tender documents in machine-readable form. Data may be delayed, incomplete, duplicated, or changed at the original source.`]],[`Corrections`,[`If you see incorrect or outdated information, send a correction to info@froststudio.net. Always open the original source before acting.`]]]},security:n?{eyebrow:`Öryggi`,title:`Öryggi`,intro:`VerkRadar notar innskráningu, aðgangsstýringu og aðskilnað gagna til að vernda fyrirtækjaupplýsingar.`,sections:[[`Öryggi`,[`Við reynum að halda öryggisupplýsingum hagnýtum og heiðarlegum. VerkRadar fullyrðir ekki um vottanir sem hafa ekki verið fengnar.`]],[`Innskráning`,[`Notendur skrá sig inn með auðkenndum aðgangi. Innskráning og lotur eru hluti af grunnvirkni appsins.`]],[`Aðgangsstýring`,[`Aðgangur að fyrirtækjagögnum, samsvörunum og skýrslum er aðgreindur eftir notanda og fyrirtæki þar sem það á við.`]],[`Fyrirtækjagögn`,[`Fyrirtækjaprófílar, stillingar og vistuð/hunsuð verkefni eru notuð til að veita þjónustuna og ættu ekki að vera sýnileg öðrum viðskiptavinum.`]],[`Admin aðgangur`,[`Admin verkfæri eru takmörkuð við skilgreinda stjórnendur og eru notuð til að fylgjast með heimildum, innflutningi, fyrirtækjum og handvirkri yfirferð.`]],[`Tilkynna vandamál`,[`Öryggisspurningar eða ábendingar má senda á info@froststudio.net.`]]]}:{eyebrow:`Security`,title:`Security`,intro:`VerkRadar uses authentication, access control, and data separation to protect company information.`,sections:[[`Security`,[`We try to keep security information practical and honest. VerkRadar does not claim certifications it has not obtained.`]],[`Login`,[`Users log in with authenticated accounts. Login and sessions are part of the app’s core functionality.`]],[`Access control`,[`Access to company data, matches, and reports is separated by user and company where applicable.`]],[`Company data`,[`Company profiles, settings, and saved/ignored opportunities are used to provide the service and should not be visible to other customers.`]],[`Admin access`,[`Admin tools are restricted to defined administrators and are used to monitor sources, imports, companies, and manual review.`]],[`Report an issue`,[`Security questions or reports can be sent to info@froststudio.net.`]]]},contact:n?{eyebrow:`Hafa samband`,title:`Hafa samband`,intro:`Viltu prófa VerkRadar, spyrja um vöktun eða benda á leiðréttingu?`,sections:[[`VerkRadar / Frost Studio`,[`Netfang: info@froststudio.net`,`Tengiliður: Kristján Jakob`]]]}:{eyebrow:`Contact`,title:`Contact`,intro:`Want to try VerkRadar, ask about monitoring, or report a correction?`,sections:[[`VerkRadar / Frost Studio`,[`Email: info@froststudio.net`,`Contact person: Kristján Jakob`]]]}}[e]}function c({authMessage:e,escapeHtml:t}){if(!e)return``;let n=Array.isArray(e.actions)?e.actions:[];return`
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
  `}function te({opp:e,saved:t,deadline:n,requirements:r,matchReasons:i,risks:a,safetyReasons:o,nextSteps:s,matchBadgeClass:c,matchLabel:l,qualityBadgeHtml:u,safetyBadgeHtml:d,extractedBadgeHtml:ee,qualityWarningHtml:f,buyerSummary:p,location:m,value:te,sourceUrl:ne,extractedDetails:re,qualityLabel:ie,safetyStatusLine:ae,category:oe,type:se,publishedDate:h,cpvCode:ce,labels:g,escapeHtml:_}){return`
    <div class="modal-backdrop">
      <div class="modal" role="dialog" aria-modal="true">
        <div class="modal-header">
          <div>
            <div class="opportunity-badges">
              <span class="${c}">${_(l)} · ${e.matchScore}</span>
              ${u}
              ${d}
              ${ee}
            </div>
            <h2>${_(e.title)}</h2>
            <p>${_(p)} · ${_(m)} · ${te}</p>
          </div>
          <button type="button" class="icon-btn modal-close-btn" data-action="close-modal" aria-label="Close details">×</button>
        </div>

        <div class="modal-body">
          <div class="modal-grid">
            <section>
              ${f}
              <h3>${_(g.description)}</h3>
              <p>${_(e.description||g.noDescription)}</p>
              <h3>${_(g.requirements)}</h3>
              <ul class="check-list">
                ${(r.length?r:[g.noSpecificRequirements]).map(e=>`<li>${_(e)}</li>`).join(``)}
              </ul>
              <h3>${_(g.matchReasons)}</h3>
              <ul class="check-list">
                ${(i.length?i:[g.noMatchReasons]).map(e=>`<li>${_(e)}</li>`).join(``)}
              </ul>
            </section>

            <aside class="side-panel">
              <h3>${_(g.opportunityInfo)}</h3>
              <p><strong>${_(g.source)}:</strong> ${_(g.sourceValue)}</p>
              ${re}
              <p><strong>${_(g.quality)}:</strong> ${_(ie)}</p>
              ${ae}
              <p><strong>${_(g.category)}:</strong> ${_(oe)}</p>
              <p><strong>${_(g.type)}:</strong> ${_(se)}</p>
              <p><strong>${_(g.deadline)}:</strong> <span class="${n.className}">${_(g.deadlineLabel)}</span></p>
              <p><strong>${_(g.published)}:</strong> ${_(h)}</p>
              <p><strong>${_(g.cpv)}:</strong> ${_(ce||`—`)}</p>

              <h3>${_(g.risksToCheck)}</h3>
              <ul class="risk-list">
                ${(o.length?o:a).map(e=>`<li>${_(e)}</li>`).join(``)}
              </ul>

              <h3>${_(g.recommendedNextSteps)}</h3>
              <ol class="steps-list">
                ${(s.length?s:[g.openSourceAndConfirm]).map(e=>`<li>${_(e)}</li>`).join(``)}
              </ol>

              <div class="button-stack">
                <button class="btn btn-primary" data-action="save" data-id="${e.id}">${_(t?g.removeFromSaved:g.saveOpportunity)}</button>
                <a class="btn btn-secondary" href="${_(ne)}" target="_blank" rel="noreferrer">${_(g.openSource)}</a>
                <button class="btn btn-ghost" data-action="ignore" data-id="${e.id}">${_(g.markNotRelevant)}</button>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  `}function ne(e,t){return e.map(e=>`<p>${t(e)}</p>`).join(``)}function re({language:e,escapeHtml:t,eyebrow:n,title:r,intro:i,sections:a}){let o=e===`is`?`Síðast uppfært`:`Last updated`,s=e===`is`?`4. júní 2026`:`June 4, 2026`;return`
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
            <div class="legal-content">${ne(n,t)}</div>
          </section>
        `).join(``)}
      </div>
    </section>
  `}function ie({t:e,escapeHtml:t,language:n,trialHref:r}){let i=n===`is`,a=i?[{title:`Gatnagerð og lagnir við nýtt hverfi`,type:`1`,score:`Sterk samsvörun · Skilafrestur eftir 10 daga`},{title:`Lóðarframkvæmdir við skóla`,type:`2`,score:`Passar við lóðarvinnu · Staðfesta gögn`},{title:`Bílastæði og yfirborðsfrágangur`,type:`3`,score:`Möguleg samsvörun · Opna heimild`}]:[{title:`Roadworks and utilities for a new neighborhood`,type:`1`,score:`Strong match · Deadline in 10 days`},{title:`Site works at a school`,type:`2`,score:`Fits site work · Verify documents`},{title:`Parking area and surface finishing`,type:`3`,score:`Possible match · Open source`}],o=i?[[`Jarðvinna og gatnagerð`,`Útboð um vegi, lóðir, bílastæði, stíga og jarðvegsvinnu.`],[`Lagnavinna og fráveita`,`Verkefni um lagnir, dælustöðvar, fráveitu, vatn og hitaveitu.`],[`Malbikun og lóðarframkvæmdir`,`Gatnagerð, yfirborðsfrágangur, gangstéttir og viðhald.`],[`Rafverktakar`,`Raflagnir, brunakerfi, lýsing, öryggiskerfi og hleðslustöðvar.`],[`Ræstingar og þjónusta`,`Reglulegir þjónustusamningar, húsþjónusta og rekstrarverkefni.`],[`Verkfræðistofur og ráðgjafar`,`Hönnun, eftirlit, ráðgjöf og verkefnastjórnun þegar það á við.`]]:[[`Earthworks and roadworks`,`Tenders for roads, plots, parking areas, paths and earthworks.`],[`Utilities and drainage`,`Projects for pipes, pumping stations, drainage, water and heating utilities.`],[`Paving and site works`,`Road construction, surface finishing, sidewalks and maintenance.`],[`Electrical contractors`,`Wiring, fire alarms, lighting, security systems and chargers.`],[`Cleaning and services`,`Recurring service contracts, facility services and operations work.`],[`Engineering and advisors`,`Design, supervision, consulting and project management where relevant.`]];return`
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
  `}function ae({t:e,escapeHtml:t,trialHref:n}){let r=[{name:e(`pricingStarter`),price:`9.900 kr`,items:[e(`pricingWeeklyReport`),e(`pricingFiveMatches`),e(`pricingBasicMatching`),e(`pricingDeadlineReminders`),e(`pricingOneProfile`)]},{name:e(`pricingGrowth`),price:`19.900 kr`,highlighted:!0,items:[e(`pricingEverythingStarter`),e(`pricingMoreSources`),e(`pricingSummaries`),e(`pricingLabels`),e(`pricingSaved`),e(`pricingArchive`)]},{name:e(`pricingPro`),price:`29.900 kr`,items:[e(`pricingEverythingGrowth`),e(`pricingDocumentSummaries`),e(`pricingRequirements`),e(`pricingRiskWarnings`),e(`pricingBidChecklist`),e(`pricingPrioritySupport`)]}];return`
    <section class="page-head">
      <p class="eyebrow">${t(e(`pricingEyebrow`))}</p>
      <h1>${t(e(`pricingHeadline`))}</h1>
      <p>${t(e(`pricingSubtitle`))}</p>
    </section>

    <section class="pricing-grid">
      ${r.map(r=>oe(r,{t:e,escapeHtml:t,trialHref:n})).join(``)}
    </section>
  `}function oe(e,{t,escapeHtml:n,trialHref:r}){let i=!!e.highlighted;return`
    <div class="pricing-card ${i?`highlighted`:``}">
      ${i?`<span class="popular">${n(t(`pricingBadge`))}</span>`:``}
      <h2>${n(e.name)}</h2>
      <p class="price">${n(e.price)}<span>${n(t(`pricingMonth`))}</span></p>
      <ul class="check-list">
        ${e.items.map(e=>`<li>${n(e)}</li>`).join(``)}
      </ul>
      <button class="btn pricing-cta ${i?`btn-primary`:`btn-secondary`}" data-action="go" data-href="${n(r)}">${n(t(`pricingCta`))}</button>
      <p class="pricing-trial-note">${n(t(`pricingTrialNoCard`))}</p>
    </div>
  `}var se=[`Reykjavík`,`Capital Area`,`Suðurnes`,`South Iceland`,`West Iceland`,`North Iceland`,`East Iceland`,`Westfjords`,`All Iceland`,`Remote / Online`];function h(e){let{t,escapeHtml:n,profileDraft:r,renderCustomDropdown:i,getFilterOptions:a}=e,o=r.industry||``;return`
    <div class="form-section">
      <h2>${n(t(`companyBasics`))}</h2>
      <div class="form-grid">
        <label>${n(t(`companyName`))}<input name="companyName" data-profile-field="companyName" value="${n(r.companyName||``)}" required /></label>
        <label>${n(t(`contactEmail`))}<input name="contactEmail" type="email" data-profile-field="contactEmail" value="${n(r.contactEmail||``)}" required /></label>
        <label>${n(t(`website`))}<input name="website" data-profile-field="website" value="${n(r.website||``)}" /></label>
        <label class="custom-select-field">${n(t(`industry`))}
          <input id="industry-input" type="hidden" name="industry" value="${n(o)}" required />
          ${i({key:`industry`,value:o,options:a(`industry`),profileField:`industry`})}
        </label>
      </div>
    </div>
  `}function ce(e){let{t,escapeHtml:n,profileDraft:r,arrayFieldText:i,getProfileSuggestions:a,renderSuggestionChips:o}=e,s=r.industry||``,c=a(`services`,s),l=a(`includeKeywords`,s);return`
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
  `}function g(e){let{t,escapeHtml:n,profileDraft:r,arrayFieldText:i,formatCustomerLocation:a}=e;return`
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
        ${se.map(e=>`
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
  `}function _(e){let{t,escapeHtml:n,profileDraft:r}=e;return`
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
  `}function le(e){let{t,escapeHtml:n,capitalize:r,profileDraft:i}=e;return`
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
  `}function ue(e){let{t,escapeHtml:n,hasProfile:r,isSavingProfile:i,profileSaved:a,profileSaveMessage:o,profileSaveError:s}=e,c=t(r?`saveProfile`:`createProfile`);return`
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
  `}function de(e){return`
    <form id="profile-form" class="form-card settings-profile-form">
      ${h(e)}
      ${ce(e)}
      ${g(e)}
      ${_(e)}
      ${le(e)}
      ${ue(e)}
    </form>
  `}function fe({report:e,title:t,created:n,itemLabel:r,statusLabel:i,hideLabel:a,viewLabel:o,escapeHtml:s}){return`
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
  `}function pe({report:e,options:t={},companyName:n,dateRange:r,generatedByLabel:i,reportTitleLabel:a,closeLabel:o,escapeHtml:s}){return`
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
  `}function me({label:e,value:t,escapeHtml:n}){return`
    <div class="report-summary-card">
      <span>${n(e)}</span>
      <strong>${t}</strong>
    </div>
  `}function he({title:e,description:t,opportunities:n,emptyText:r,renderOpportunityItem:i,escapeHtml:a}){return`
    <section class="report-section">
      <div class="report-section-head">
        <h3>${a(e)}</h3>
        <p>${a(t)}</p>
      </div>
      ${n.length?n.map(i).join(``):`<div class="report-empty">${a(r)}</div>`}
    </section>
  `}function ge({opp:e,valueText:t,deadlineText:n,sourceUrl:r,risks:i,fallbackReason:a,qualityBadgeHtml:o,matchBadgeClass:s,matchLabel:c,buyerLabel:l,buyerValue:u,sourceLabel:d,sourceValue:ee,areaLabel:f,areaValue:p,deadlineLabel:m,valueLabel:te,whyLabel:ne,risksLabel:re,openSourceLabel:ie,sourceMissingLabel:ae,formatReason:oe,formatRisk:se,escapeHtml:h}){let ce=(e.matchReasons.length?e.matchReasons:[a]).slice(0,4);return`
    <article class="report-item">
      <div class="report-item-top">
        ${o}
        <span class="${s}">${h(c)} · ${e.matchScore}</span>
      </div>
      <h4>${h(e.title)}</h4>
      <div class="report-facts">
        <span><strong>${h(l)}</strong>${h(u)}</span>
        <span><strong>${h(d)}</strong>${h(ee)}</span>
        <span><strong>${h(f)}</strong>${h(p)}</span>
        <span><strong>${h(m)}</strong><em>${h(n)}</em></span>
        <span><strong>${h(te)}</strong><em>${h(t)}</em></span>
      </div>
      <div class="report-detail-grid">
        <div>
          <h5>${h(ne)}</h5>
          <ul>${ce.map(e=>`<li>${h(oe(e))}</li>`).join(``)}</ul>
        </div>
        <div>
          <h5>${h(re)}</h5>
          <ul>${i.slice(0,5).map(e=>`<li>${h(se(e))}</li>`).join(``)}</ul>
        </div>
      </div>
      ${r?`<a class="report-source-link" href="${h(r)}" target="_blank" rel="noopener">${h(ie)} <span aria-hidden="true">↗</span></a>`:`<span class="report-source-link is-disabled">${h(ae)}</span>`}
    </article>
  `}function _e({status:e,label:t,escapeHtml:n}){return`<span class="report-quality ${n(e)}">${n(t)}</span>`}function ve({t:e,escapeHtml:t,language:n,profileDraftDirty:r,profileLoadError:i,showDemoReset:a,profileFormHtml:o}){return`
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
  `}var ye=[[`Tender and opportunity report`,`Útboðs- og verkefnayfirlit`],[`Weekly Opportunity Report`,`Útboðs- og verkefnayfirlit`],[`Open tenders / quote requests`,`Opin útboð / verðfyrirspurnir`],[`Possible upcoming opportunities`,`Möguleg væntanleg tækifæri`],[`Needs review`,`Þarfnast staðfestingar`],[`Strong match`,`Sterk samsvörun`],[`Good match`,`Góð samsvörun`],[`Possible match`,`Möguleg samsvörun`],[`Weak match`,`Veik samsvörun`],[`Quality`,`Gæði`],[`Buyer`,`Kaupandi`],[`Source`,`Heimild`],[`Location`,`Svæði`],[`Deadline`,`Skilafrestur`],[`Estimated value`,`Áætlað verðmæti`],[`Value`,`Áætlað verðmæti`],[`Why this matters`,`Af hverju þetta gæti skipt máli`],[`Why this fits`,`Af hverju þetta gæti skipt máli`],[`Risks / things to check`,`Atriði til að staðfesta`],[`Open source`,`Opna heimild`],[`Unknown buyer`,`Óþekktur kaupandi`],[`All Iceland`,`Allt landið`],[`Not found`,`Fannst ekki`],[`Not listed`,`Ekki gefið upp`]];function be(e,t){return t===`is`?ye.reduce((e,[t,n])=>e.replaceAll(t,n),String(e||``)):e}var xe=`https://asojxjbsgqbfpbepojzh.supabase.co`,v=window.supabase?window.supabase.createClient(xe,`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFzb2p4amJzZ3FiZnBiZXBvanpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAwNTU2NjgsImV4cCI6MjA5NTYzMTY2OH0.yPA34VbqWqKrBPespmHr5AojYzjhy3kGRxswO9XdAd0`):null;function y(e){if(!e)return 999;let t=new Date,n=new Date(`${e}T00:00:00`);if(Number.isNaN(n.getTime()))return 999;let r=n-new Date(t.getFullYear(),t.getMonth(),t.getDate());return Math.ceil(r/(1e3*60*60*24))}function b(e){if(!e)return`No deadline`;let t=new Date(`${e}T00:00:00`);return Number.isNaN(t.getTime())?String(e):new Intl.DateTimeFormat(`en-GB`,{year:`numeric`,month:`short`,day:`2-digit`}).format(t)}function x(e){return e?new Intl.DateTimeFormat(`en-GB`,{year:`numeric`,month:`short`,day:`2-digit`}).format(new Date(e)):`Unknown date`}function Se(e){return Array.from(new Set((e||[]).map(e=>String(e||``).trim()).filter(Boolean)))}function S(e){return String(e||``).split(`,`).map(e=>e.trim()).filter(Boolean)}function C(e){return Se(Array.isArray(e)?e:S(e))}function Ce(e){return S(e)}function w(e){return String(e||``).toLowerCase().normalize(`NFD`).replace(/[\u0300-\u036f]/g,``).replace(/æ/g,`ae`).replace(/[ðþ]/g,e=>e===`ð`?`d`:`th`).replace(/[^a-z0-9]+/g,` `).trim()}function T(e){return String(e??``).replaceAll(`&`,`&amp;`).replaceAll(`<`,`&lt;`).replaceAll(`>`,`&gt;`).replaceAll(`"`,`&quot;`).replaceAll(`'`,`&#039;`)}function E(e){return String(e||``).charAt(0).toUpperCase()+String(e||``).slice(1)}function we(e){return/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(String(e||``))}function Te(e){return new DOMParser().parseFromString(String(e||``),`text/html`).body.textContent?.replace(/\s+/g,` `).trim()||``}function Ee(e){let t=String(e||``).trim();return/^https?:\/\//i.test(t)?t:``}function De(e,t=`ISK`){if(!e)return``;let n=t||`ISK`,r=n===`ISK`?`kr`:n;return`${new Intl.NumberFormat(`is-IS`).format(e)} ${r}`}function Oe(e,t){let n=t||(e=>e);return{"Confirmed tender":n(`confirmedTender`),"Likely opportunity":n(`likelyOpportunity`),"Early signal":n(`earlySignal`),"Needs review":n(`needsReview`),"Tender awarded":n(`tenderAwarded`),"Tender already announced":n(`tenderAlreadyAnnounced`),"Upcoming tender":n(`upcomingTender`),"Project signal":n(`projectSignal`),"Original language":n(`originalLanguage`)}[e]||e||``}function ke(e,t){let n=t||(e=>e);return{"Strong match":n(`strongMatch`),"Good match":n(`goodMatch`),"Possible match":n(`possibleMatch`),"Weak match":n(`weakMatch`)}[e]||e||``}function Ae(e,t,n){let r=n||(e=>e),i=String(t||``).trim();return i?e===`buyer`&&(je(i)||i.toLowerCase()===`unknown buyer`)?r(`unknownBuyer`):e===`location`&&i.toLowerCase()===`all iceland`?r(`allIceland`):e===`source`?i.replace(/\bprocurement\b/gi,r(`procurement`)):i:r(e===`buyer`?`unknownBuyer`:`notListed`)}function je(e){let t=w(e);return!!(!t||[`admin`,`administrator`,`ritstjori`,`editor`,`noreply`,`no reply`,`wordpress`,`wp admin`,`user`,`test`].includes(t)||t.includes(`noreply`)||/^wp\s*[-_]?\s*\d+$/.test(t))}function Me(e){let t=w(e);return t?t.includes(`borgarbyggd`)?`Borgarbyggð`:t.includes(`akranes`)?`Akraneskaupstaður`:t.includes(`faxafloahafnir`)?`Faxaflóahafnir`:t.includes(`gardabaer`)?`Garðabær`:t.includes(`reykjanesbaer`)?`Reykjanesbær`:t.includes(`kopavogur`)?`Kópavogur`:t.includes(`hafnarfjordur`)?`Hafnarfjarðarbær`:t.includes(`mosfellsbaer`)?`Mosfellsbær`:t.includes(`arborg`)?`Sveitarfélagið Árborg`:t.includes(`fjardabyggd`)?`Fjarðabyggð`:t.includes(`mulathing`)?`Múlaþing`:t.includes(`garðabaer`)?`Garðabær`:(t.includes(`rikiskaup`)||t.includes(`utbodsvefur`),``):``}function Ne(e,t,n={}){let r=String(e||``).trim();if(/reykjavíkurborg/i.test(r))return`Reykjavíkurborg`;if(r&&!je(r)&&r.toLowerCase()!==`unknown buyer`)return r;let i=String(n.extracted_buyer||n.buyer||``).trim();return/reykjavíkurborg/i.test(i)?`Reykjavíkurborg`:i&&!je(i)&&i.toLowerCase()!==`unknown buyer`?i:Me(t)||`Unknown buyer`}function Pe(e){let t=w(e);return t?t.includes(`borgarbyggd`)?`Borgarbyggð / Vesturland`:t.includes(`akranes`)?`Akranes / Vesturland`:t.includes(`faxafloahafnir`)?`Höfuðborgarsvæðið`:t.includes(`arborg`)?`Árborg / Suðurland`:``:``}function Fe(e,t,n){let r=String(e||``).trim();return t===`is`&&{"Capital Area":`Höfuðborgarsvæðið`,"South Iceland":`Suðurland`,"West Iceland":`Vesturland`,"North Iceland":`Norðurland`,"East Iceland":`Austurland`,Westfjords:`Vestfirðir`,"All Iceland":(n||(e=>e))(`allIceland`),"Remote / Online":`Fjarvinna / netverkefni`}[r]||r}function Ie(e,t,{language:n=`en`,translate:r}={}){let i=r||(e=>e),a=Ae(e,t,i);if(n!==`is`)return a;let o=String(a||``).trim().toLowerCase();return{"public procurement":i(`publicProcurement`),procurement:i(`procurement`),tender:i(`tender`)}[o]||a.replace(/\bpublic procurement\b/gi,i(`publicProcurement`)).replace(/\btender\b/gi,i(`tender`))}function Le(e,{language:t=`en`,translate:n}={}){let r=n||((e,t={})=>t.value?`${e}: ${t.value}`:e),i=String(e||``);return i.startsWith(`Mentions your service:`)?r(`mentionsService`,{value:i.slice(22).trim()}):i.startsWith(`Contains your keyword:`)?r(`containsKeyword`,{value:i.slice(22).trim()}):{"National opportunity":r(`nationalOpportunity`),"Local match":r(`localMatch`),"Located in your selected region":r(`localMatch`),"Project value is inside your preferred range":t===`is`?`Áætlað verðmæti er innan óskaðs bils`:`Project value is inside your preferred range`,"Deadline is coming up soon":t===`is`?`Skilafrestur nálgast`:`Deadline is coming up soon`,"Matched to your company profile.":t===`is`?`Passar við fyrirtækjaprófílinn.`:`Matched to your company profile.`,"Matched to your profile by service, location or keyword overlap.":t===`is`?`Passar við þjónustu, svæði eða lykilorð í prófílnum.`:`Matched to your profile by service, location or keyword overlap.`}[i]||i||``}function Re(e,t=`en`){return t===`is`?{"Deadline not available in feed — verify on source page.":`Skilafrestur fannst ekki í innfluttum gögnum — staðfestið á upprunasíðu.`,"Deadline not available in imported data — verify on source page.":`Skilafrestur fannst ekki í innfluttum gögnum — staðfestið á upprunasíðu.`,"Deadline not available in source — verify page.":`Skilafrestur fannst ekki í heimild - staðfestið á upprunalegri síðu.`,"No formal tender deadline extracted — verify source article.":`Formlegur skilafrestur fannst ekki - staðfestið í heimildargrein.`,"Formal tender deadline not found yet — monitor source article.":`Formlegur skilafrestur fannst ekki enn - fylgist með heimildargrein.`,"Tender appears already announced/awarded — verify source article.":`Útboð virðist þegar auglýst eða afgreitt - staðfestið í heimildargrein.`,"Estimated value is not listed in the imported data.":`Áætlað verðmæti er ekki gefið upp í innfluttum gögnum.`,"Open the source page and confirm mandatory requirements.":`Opnið upprunalega heimild og staðfestið skyldukröfur.`,"Extracted project signal — verify tender timing in the source article.":`Útdregin verkefnavísbending - staðfestið útboðstímasetningu í heimildargrein.`,"Imported from broad feed — verify that this is a real tender or business opportunity.":`Innflutt úr breiðum fréttastraumi - staðfestið að þetta sé raunverulegt útboð eða viðskiptatækifæri.`}[e]||e||``:e||``}function ze(e,t=`en`){return t===`is`?{"Open the source documents":`Opna útboðsgögn`,"Confirm mandatory requirements":`Staðfesta kröfur og hæfisskilyrði`,"Check capacity and profitability":`Meta getu og arðsemi`,"Prepare questions before the deadline":`Undirbúa fyrirspurnir fyrir skilafrest`,"Open source documents and confirm requirements.":`Opna útboðsgögn og staðfesta kröfur.`}[e]||e||``:e||``}var Be=`Deadline not available in imported data — verify on source page.`,Ve=`No formal tender deadline extracted — verify source article.`;function He(){return n(e)}function D(e,t={}){return r(O?.language||`is`,e,t)}function Ue(t){O.language=t===`en`?`en`:`is`,localStorage.setItem(e.language,O.language),Z()}var We=a,Ge=12e3;function Ke(){return o(O.user?.email||``)}var O={route:location.hash.replace(`#`,``)||`/`,language:He(),user:null,currentUser:null,isAdmin:!1,authLoading:!0,isBooting:!0,authLoaded:!1,profileLoaded:!1,adminLoaded:!1,bootError:null,authMessage:null,authForm:{email:``,password:``,newPassword:``,confirmPassword:``},authSubmitting:!1,isSavingProfile:!1,profileSaved:!1,profileSaveMessage:null,profileSaveError:null,profile:null,profileDraft:null,profileDraftDirty:!1,profileLoading:!1,profileLoadError:null,companyId:null,opportunities:[],storedMatches:[],opportunityActions:[],saved:Jn(e.saved),ignored:Jn(e.ignored),filters:{search:``,label:`recommended`,category:`all`,location:`all`,type:`all`,savedOnly:!1},tedImportMode:`nordic`,dropdown:{openKey:null,focusedIndex:0},importStatus:null,importLoading:!1,connectorImportStatus:null,connectorImportLoading:!1,connectorTestingSourceId:null,importedTedOpportunities:[],importedTedOpportunitiesLoading:!1,importedTedOpportunitiesLoaded:!1,importedTedOpportunitiesError:null,importRuns:[],importRunsLoading:!1,importRunsLoaded:!1,importRunsError:null,adminReports:[],adminReportsLoading:!1,adminReportsLoaded:!1,adminReportsError:null,selectedAdminReport:null,selectedAdminReportLoading:!1,selectedAdminReportError:null,sourceCoverage:[],sourceCoverageLoading:!1,sourceCoverageLoaded:!1,sourceCoverageError:null,expandedSourceId:null,adminCompanies:[],adminCompaniesLoading:!1,adminCompaniesLoaded:!1,adminCompaniesError:null,adminReviewMatches:[],adminReviewLoading:!1,adminReviewLoaded:!1,adminReviewError:null,adminReviewActions:{},adminCompanyActions:{},selectedAdminCompanyId:null,adminActiveTab:`overview`,adminCompanyFilters:{search:``,industry:`all`,profileStatus:`all`,plan:`all`},adminReportMode:`new_only`,adminOpportunityFilters:{source:`all`,status:`all`,country:`all`,search:``,debugCompanyId:``,tedOnly:!1,manualOnly:!1,showDemoTest:!1},adminOpportunityDraft:Je(),matchStatus:null,matchingLoading:!1,lastMatchedAt:null,reports:[],reportsLoaded:!1,reportsLoadError:null,reportArchiveLoading:!1,reportSaveLoading:!1,reportMessage:null,selectedReportId:null,selectedAdminReportId:null,adminMessage:null,adminSubmitting:!1,adminDeletingId:null,adminUpdatingId:null,isLoadingOpportunities:!1,opportunityLoadError:null,isMobileMenuOpen:!1,profileMenuOpen:!1,selectedOpportunityId:null,toast:null};`scrollRestoration`in history&&(history.scrollRestoration=`manual`);function qe(){localStorage.removeItem(`verkradar_profile`),localStorage.removeItem(`verkradar_local_user_id`),localStorage.removeItem(`verkradar_saved_opportunities`),localStorage.removeItem(`verkradar_ignored_opportunities`),O.profile=null,O.profileDraft=null,O.profileDraftDirty=!1,O.currentUser=null,O.companyId=null,O.storedMatches=[],O.opportunityActions=[],O.reports=[],O.reportsLoaded=!1,O.reportsLoadError=null,O.reportMessage=null,O.selectedReportId=null,O.profileSaved=!1,O.profileSaveMessage=null,O.profileSaveError=null,O.saved=[],O.ignored=[],O.importRuns=[],O.importRunsLoading=!1,O.importRunsLoaded=!1,O.importRunsError=null,O.importedTedOpportunities=[],O.importedTedOpportunitiesLoading=!1,O.importedTedOpportunitiesLoaded=!1,O.importedTedOpportunitiesError=null,O.adminReports=[],O.adminReportsLoading=!1,O.adminReportsLoaded=!1,O.adminReportsError=null,O.selectedAdminReport=null,O.selectedAdminReportLoading=!1,O.selectedAdminReportError=null,O.sourceCoverage=[],O.sourceCoverageLoading=!1,O.sourceCoverageLoaded=!1,O.sourceCoverageError=null,O.adminCompanies=[],O.adminCompaniesLoading=!1,O.adminCompaniesLoaded=!1,O.adminCompaniesError=null,O.selectedAdminCompanyId=null,O.lastMatchedAt=null}function Je(){return{title:``,buyer:``,sourceName:``,category:``,type:`tender`,deadline:``,published_date:``,location:``,estimated_value:``,url:``,cpv_code:``,difficulty:`medium`,status:`open`,description:``,requirements:``,keywords:``}}function Ye(e){let t=Je();Object.keys(t).forEach(n=>{t[n]=String(e.get(n)||``)}),O.adminOpportunityDraft=t}var Xe=!1;window.addEventListener(`hashchange`,()=>{let e=location.hash.replace(`#`,``)||`/`,t=e!==O.route;if(Xe&&e===O.route){Xe=!1;return}Xe=!1,[`/login`,`/signup`,`/forgot-password`,`/reset-password`].includes(e)&&e!==O.route&&(O.authMessage=null,O.authSubmitting=!1),O.route=e,O.isMobileMenuOpen=!1,O.profileMenuOpen=!1,t&&ri(),document.body.classList.remove(`mobile-menu-active`),Z(),ut(),A()}),document.addEventListener(`click`,e=>{if(O.dropdown.openKey&&!e.target.closest?.(`.custom-select`)&&Ca(),O.profileMenuOpen&&!e.target.closest?.(`.profile-menu`)&&(O.profileMenuOpen=!1,Z()),e.target.classList?.contains(`modal-backdrop`)){if(e.preventDefault(),O.selectedAdminCompanyId){O.selectedAdminCompanyId=null,Z();return}ni();return}if(O.isMobileMenuOpen&&!e.target.closest?.(`.site-header`)){$e();return}let t=e.target.closest?.(`[data-action]`);if(!t)return;let n=t.dataset.action,r=t.dataset.id;if(n===`close-modal`){if(e.preventDefault(),e.stopPropagation(),O.selectedAdminCompanyId){O.selectedAdminCompanyId=null,Z();return}ni();return}if(n===`toggle-mobile-menu`){e.preventDefault(),O.isMobileMenuOpen?$e():Qe();return}if(n===`mobile-nav`){e.preventDefault(),et(t.dataset.href);return}if(n===`mobile-scroll-to`){e.preventDefault(),tt(t.dataset.target);return}if(n===`toggle-profile-menu`){if(e.preventDefault(),O.isMobileMenuOpen||nt()){O.profileMenuOpen=!1,Z();return}O.profileMenuOpen=!O.profileMenuOpen,Z();return}if(n===`toggle-language`){e.preventDefault(),Ue(O.language===`is`?`en`:`is`);return}if(n===`toggle-dropdown`){e.preventDefault();let n=t.dataset.key,r=O.dropdown.openKey===n;O.dropdown.openKey=r?null:n,O.dropdown.focusedIndex=ba(n),Z(),r||wa();return}if(n===`select-filter`){e.preventDefault();let n=t.dataset.key,r=t.dataset.value;t.dataset.profileField?(H(),O.profileDraft[t.dataset.profileField]=r,U()):O.filters[n]=r,O.dropdown.openKey=null,O.dropdown.focusedIndex=0,Z();return}if(n===`toggle-profile-suggestion`){e.preventDefault(),er(t.dataset.field,t.dataset.value);return}if(n===`scroll-to`){e.preventDefault(),O.isMobileMenuOpen=!1,O.profileMenuOpen=!1,document.body.classList.remove(`mobile-menu-active`);let n=t.dataset.target;if(!n)return;O.route===`/`?(Z(),setTimeout(()=>dt(n),0)):(k(`/`),setTimeout(()=>dt(n),50));return}if(n===`go`){e.preventDefault(),O.isMobileMenuOpen=!1,O.profileMenuOpen=!1,document.body.classList.remove(`mobile-menu-active`),k(t.dataset.href);return}if(n===`save`&&Qr(r),n===`ignore`&&$r(r),n===`unignore`&&ei(r),n===`details`&&ti(r),n===`admin-report-override`){Un(r,t.dataset.override||``);return}if(n===`copy-report`&&Ss(),n===`download-report-pdf`&&Cs(),n===`download-admin-report-pdf`){ws();return}if(n===`save-report`&&Ln(),n===`archive-report`){Rn(r);return}if(n===`view-report`&&(O.selectedReportId=r,Z()),n===`close-archive-report`&&(O.selectedReportId=null,Z()),n===`view-admin-report`){O.selectedAdminReportId=r,O.selectedAdminReport=null,O.selectedAdminReportError=null,O.adminActiveTab=`reports`,Z(),mt(r);return}if(n===`close-admin-report`){O.selectedAdminReportId=null,O.selectedAdminReport=null,O.selectedAdminReportError=null,Z();return}if(n===`copy-admin-report`){fa(r);return}if(n===`admin-tab`&&(O.adminActiveTab=t.dataset.tab||`overview`,O.selectedAdminCompanyId=null,O.selectedAdminReportId=null,Z()),n===`view-admin-company`&&(O.selectedAdminCompanyId=r,Z()),n===`close-admin-company`&&(O.selectedAdminCompanyId=null,Z()),n===`admin-refresh-company-matches`){St(r);return}if(n===`admin-generate-company-report`){Ct(r);return}if(n===`admin-review-match`){wt(r,t.dataset.companyId||``,t.dataset.reviewAction||``);return}if(n===`import-ted`&&sn(),n===`import-source-connectors`&&cn(),n===`test-source-connector`&&cn(r),n===`toggle-source-items`&&(O.expandedSourceId=O.expandedSourceId===r?null:r,Z()),n===`refresh-admin-status`&&Ot(),n===`hide-imported-opportunity`&&Hn(r,`hidden`),n===`mark-imported-relevant`&&Hn(r,`open`),n===`run-matching`&&zn(),n===`retry-settings-profile`&&kn(),n===`show-all-matches`&&(O.filters.label=`all`,Z()),n===`show-all-opportunities`&&(O.filters.label=`all_opportunities`,Z()),n===`include-national-opportunities`&&(H(),O.profileDraft.nationalProjects=!0,O.profileDraft.locations.includes(`All Iceland`)||(O.profileDraft.locations=[...O.profileDraft.locations,`All Iceland`]),U(),k(`/settings`)),n===`delete-opportunity`&&Vn(r),n===`logout`){if(O.profileMenuOpen=!1,O.isMobileMenuOpen){$e(()=>yn());return}yn()}n===`load-demo`&&(O.user?Nn(We).then(()=>k(`/dashboard`)).catch(e=>{console.error(`Failed to load demo profile:`,e),O.profileSaveError=B(e),Z()}):(qn(We),O.profile=We,k(`/dashboard`))),n===`reset`&&(qe(),k(`/`))}),document.addEventListener(`keydown`,e=>{if(e.key===`Escape`&&O.isMobileMenuOpen){e.preventDefault(),$e();return}if(e.key===`Escape`&&O.profileMenuOpen){e.preventDefault(),O.profileMenuOpen=!1,Z();return}if(e.key===`Escape`&&O.selectedOpportunityId){e.preventDefault(),ni();return}if(e.key===`Escape`&&O.selectedAdminCompanyId){e.preventDefault(),O.selectedAdminCompanyId=null,Z();return}let t=e.target.closest?.(`.custom-select`),n=t?.dataset.key||O.dropdown.openKey;if(!n)return;let r=ya(n),i=O.dropdown.openKey===n;if(e.key===`Escape`&&i){e.preventDefault(),Ca(),Ta(n);return}if((e.key===`ArrowDown`||e.key===`ArrowUp`)&&!i){e.preventDefault(),O.dropdown.openKey=n,O.dropdown.focusedIndex=ba(n),Z(),wa();return}if(i){if(e.key===`ArrowDown`||e.key===`ArrowUp`){e.preventDefault();let t=e.key===`ArrowDown`?1:-1;O.dropdown.focusedIndex=(O.dropdown.focusedIndex+t+r.length)%r.length,Z(),wa();return}if(e.key===`Enter`||e.key===` `){e.preventDefault();let i=r[O.dropdown.focusedIndex];if(!i)return;let a=t?.querySelector?.(`[data-profile-field]`)?.dataset.profileField;a?(H(),O.profileDraft[a]=i.value,U()):O.filters[n]=i.value,O.dropdown.openKey=null,O.dropdown.focusedIndex=0,Z(),Ta(n)}}}),document.addEventListener(`input`,e=>{let t=e.target.closest?.(`[data-auth-field]`);if(t){O.authForm[t.dataset.authField]=t.value;return}let n=e.target.closest?.(`[data-profile-field]`);if(n){H();let e=n.dataset.profileField;n.type===`checkbox`?O.profileDraft[e]=n.checked:n.dataset.profileArray===`true`?O.profileDraft[e]=S(n.value):(n.dataset.profileNumber,O.profileDraft[e]=n.value),U();return}if(e.target.matches(`[data-filter]`)){let t=e.target.dataset.filter;e.target.type===`checkbox`?O.filters[t]=e.target.checked:O.filters[t]=e.target.value,Z()}if(e.target.matches(`[data-admin-filter]`)){let t=e.target.dataset.adminFilter;e.target.type===`checkbox`?(O.adminOpportunityFilters[t]=e.target.checked,t===`tedOnly`&&e.target.checked&&(O.adminOpportunityFilters.manualOnly=!1),t===`manualOnly`&&e.target.checked&&(O.adminOpportunityFilters.tedOnly=!1)):O.adminOpportunityFilters[t]=e.target.value,hi(e.target);return}if(e.target.matches(`[data-admin-opportunity-field]`)){let t=e.target.dataset.adminOpportunityField;O.adminOpportunityDraft={...Je(),...O.adminOpportunityDraft||{},[t]:e.target.value};return}if(e.target.matches(`[data-admin-company-filter]`)){let t=e.target.dataset.adminCompanyFilter;O.adminCompanyFilters[t]=e.target.value,hi(e.target);return}e.target.matches(`[data-admin-report-mode]`)&&(O.adminReportMode=e.target.value===`all_current`?`all_current`:`new_only`,Z())}),document.addEventListener(`change`,e=>{if(e.target.matches(`[data-admin-filter]`)){let t=e.target.dataset.adminFilter;e.target.type===`checkbox`?(O.adminOpportunityFilters[t]=e.target.checked,t===`tedOnly`&&e.target.checked&&(O.adminOpportunityFilters.manualOnly=!1),t===`manualOnly`&&e.target.checked&&(O.adminOpportunityFilters.tedOnly=!1)):O.adminOpportunityFilters[t]=e.target.value,hi(e.target);return}if(e.target.matches(`[data-import-mode]`)){O.tedImportMode=e.target.value,Z();return}if(e.target.matches(`[data-profile-location]`)){H(),O.profileDraft.locations=Array.from(document.querySelectorAll(`[data-profile-location]:checked`)).map(e=>e.value),U();return}let t=e.target.closest?.(`[data-profile-field]`);if(!t)return;H();let n=t.dataset.profileField;O.profileDraft[n]=t.type===`checkbox`?t.checked:t.value,U()}),document.addEventListener(`submit`,async e=>{if(e.target.id===`login-form`){e.preventDefault();let t=new FormData(e.target);gn(t.get(`email`),t.get(`password`));return}if(e.target.id===`signup-form`){e.preventDefault();let t=new FormData(e.target);hn(t.get(`email`),t.get(`password`));return}if(e.target.id===`forgot-password-form`){e.preventDefault(),_n(new FormData(e.target).get(`email`));return}if(e.target.id===`reset-password-form`){e.preventDefault();let t=new FormData(e.target);vn(t.get(`newPassword`),t.get(`confirmPassword`));return}if(e.target.id===`admin-opportunity-form`){e.preventDefault();let t=new FormData(e.target);Ye(t),Bn(t,e.target);return}if(e.target.id===`profile-form`){e.preventDefault(),O.profileSaved=!1,ir(e.target);let t=ar();if(!t.companyName||!t.contactEmail||!t.industry){V(`Please fill in company name, email and industry.`,`error`);return}O.isSavingProfile=!0,O.profileSaved=!1,O.profileSaveMessage=null,O.profileSaveError=null,Z();let n=O.route!==`/settings`;try{if(await Nn(t),await Dn({overwriteDraft:!0}),O.profileLoadError)throw Error(`Profile saved, but the saved profile could not be reloaded. ${O.profileLoadError}`);O.profileSaveMessage=`Refreshing matches...`,O.profileSaveError=null,Z();let e=await zn();if(O.matchStatus?.type===`error`)O.profileSaveMessage=`Profile saved, but matching could not be refreshed. Try Run matching.`;else{let t=e===1?`opportunity`:`opportunities`;O.profileSaveMessage=n?`Profile saved — ${e} relevant ${t} found. Redirecting...`:`Profile saved — ${e} relevant ${t} found.`}O.profileSaved=!0,Z(),clearTimeout(window.__profileSavedTimeout),window.__profileSavedTimeout=setTimeout(()=>{O.profileSaved=!1,Z()},1800),n&&setTimeout(()=>k(`/dashboard`),800)}catch(e){console.error(`Failed to save company profile:`,e),O.profileSaveError=B(e),O.profileSaveMessage=null,O.profileSaved=!1}finally{O.isSavingProfile=!1,Z()}}}),window.addEventListener(`focus`,Ze),document.addEventListener(`visibilitychange`,()=>{document.visibilityState===`visible`&&Ze()});function Ze(){O.route===`/settings`&&O.profileDraftDirty&&(O.profileLoading=!1,O.profileLoaded=!0,Z())}function Qe(){rt(),O.isMobileMenuOpen=!0,O.profileMenuOpen=!1,document.body.classList.add(`mobile-menu-active`),Z()}function $e(e){if(!O.isMobileMenuOpen){typeof e==`function`&&e();return}O.isMobileMenuOpen=!1,O.profileMenuOpen=!1,document.body.classList.remove(`mobile-menu-active`),Z(),typeof e==`function`&&setTimeout(e,260)}function et(e){if(e){if(!O.isMobileMenuOpen){k(e);return}$e(()=>k(e))}}function tt(e){if(!e)return;let t=()=>{O.route===`/`?(Z(),setTimeout(()=>dt(e),0)):(k(`/`),setTimeout(()=>dt(e),50))};if(!O.isMobileMenuOpen){t();return}$e(t)}function nt(){return typeof window<`u`&&window.matchMedia?.(`(max-width: 920px)`).matches}function rt(){let e=document.querySelector(`.site-header`);e&&document.documentElement.style.setProperty(`--header-height`,`${Math.ceil(e.getBoundingClientRect().height)}px`)}function k(e){if(e||=`/`,[`/login`,`/signup`,`/forgot-password`,`/reset-password`].includes(e)&&e!==O.route&&(O.authMessage=null,O.authSubmitting=!1),O.isMobileMenuOpen=!1,O.profileMenuOpen=!1,document.body.classList.remove(`mobile-menu-active`),O.route===e){Z(),ut(),A();return}ri(),O.route=e,Xe=!0,location.hash=e,Z(),ut(),A()}function it(){return!O.user&&!O.currentUser?`/`:O.profile?`/dashboard`:`/onboarding`}function at(){return!O.user&&!O.currentUser?`/signup`:O.profile?`/dashboard`:`/onboarding`}function ot(e=O.route){let t=String(e||``);return st(t)?!1:[`/`,`/login`,`/signup`,`/forgot-password`].includes(t)||t.startsWith(`access_token=`)||t.startsWith(`code=`)||t.includes(`type=signup`)||t.includes(`type=email_change`)}function st(e=O.route){let t=String(e||``);return t===`/reset-password`||t.startsWith(`/reset-password`)||t.includes(`type=recovery`)}function ct(e){O.route=e,location.hash.replace(`#`,``)!==e&&history.replaceState(null,``,`#${e}`)}function lt({replace:e=!1}={}){if(!O.user&&!O.currentUser||!ot())return!1;let t=it();return O.authMessage=null,e?ct(t):k(t),!0}function A(){O.route===`/report`&&O.companyId&&!O.reportsLoaded&&!O.reportArchiveLoading&&In(),O.route===`/admin`&&O.isAdmin&&(!O.importRunsLoaded&&!O.importRunsLoading&&ft(),!O.adminReportsLoaded&&!O.adminReportsLoading&&pt(),!O.sourceCoverageLoaded&&!O.sourceCoverageLoading&&ht(),!O.adminCompaniesLoaded&&!O.adminCompaniesLoading&&gt(),!O.adminReviewLoaded&&!O.adminReviewLoading&&_t(),!O.importedTedOpportunitiesLoaded&&!O.importedTedOpportunitiesLoading&&ln().then(Z).catch(e=>{console.error(`Failed to load latest TED opportunities:`,e)}))}function ut(){window.scrollTo(0,0)}function dt(e){let t=document.getElementById(e);t&&t.scrollIntoView({behavior:`smooth`,block:`start`})}async function j(){O.isLoadingOpportunities=!0,O.opportunityLoadError=null,Z();try{if(!v)throw Error(`Supabase client not configured`);let{data:e,error:t}=await v.from(`opportunities`).select(`*, sources(name, source_type)`).eq(`status`,`open`).order(`deadline`,{ascending:!0});if(t)throw t;!e||e.length===0?(O.opportunities=window.VERKRADAR_OPPORTUNITIES||[],O.storedMatches=[],O.opportunityLoadError=`Using demo data. Supabase has no opportunities yet.`):(O.opportunities=e.map(M),O.opportunityLoadError=null,O.companyId&&(await Yr(),await Fn()))}catch(e){console.error(`Failed to load Supabase opportunities:`,e),O.opportunities=window.VERKRADAR_OPPORTUNITIES||[],O.storedMatches=[],O.opportunityLoadError=`Using demo data. Supabase connection failed.`}finally{O.isLoadingOpportunities=!1,Z()}}async function ft(){if(!v||!O.isAdmin){O.importRuns=[],O.importRunsLoaded=!0;return}O.importRunsLoading=!0,O.importRunsError=null,Z();try{let{data:e,error:t}=await v.from(`import_runs`).select(`*`).order(`started_at`,{ascending:!1}).limit(10);if(t)throw t;O.importRuns=e||[],O.importRunsLoaded=!0}catch(e){console.error(`Failed to load import runs:`,e),O.importRuns=[],O.importRunsError=B(e)}finally{O.importRunsLoading=!1,O.importRunsLoaded=!0,Z()}}async function pt(){if(!v||!O.isAdmin){O.adminReports=[],O.adminReportsLoaded=!0;return}O.adminReportsLoading=!0,O.adminReportsError=null,Z();try{let{data:e,error:t}=await v.from(`reports`).select(`
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
      `).order(`created_at`,{ascending:!1}).limit(10);if(t)throw t;O.adminReports=e||[],O.adminReportsLoaded=!0}catch(e){console.error(`Failed to load admin reports:`,e),O.adminReports=[],O.adminReportsError=B(e)}finally{O.adminReportsLoading=!1,O.adminReportsLoaded=!0,Z()}}async function mt(e){if(!(!v||!O.isAdmin||!e)){O.selectedAdminReportLoading=!0,O.selectedAdminReportError=null,Z();try{let{data:t,error:n}=await v.from(`reports`).select(`
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
      `).eq(`id`,e).single();if(n)throw n;O.selectedAdminReportId===e&&(O.selectedAdminReport=t)}catch(t){console.error(`Failed to load admin report details:`,t),O.selectedAdminReportId===e&&(O.selectedAdminReport=null,O.selectedAdminReportError=B(t))}finally{O.selectedAdminReportId===e&&(O.selectedAdminReportLoading=!1,Z())}}}async function ht(){if(!v||!O.isAdmin){O.sourceCoverage=[],O.sourceCoverageLoaded=!0;return}O.sourceCoverageLoading=!0,O.sourceCoverageError=null,Z();try{let{data:e,error:t}=await v.from(`sources`).select(`
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
      `).order(`name`,{ascending:!0});if(t)throw t;let n=(e||[]).map(e=>({...e,source_status:Array.isArray(e.source_status)?e.source_status[0]:e.source_status,source_connectors:Array.isArray(e.source_connectors)?e.source_connectors[0]:e.source_connectors})),r=n.map(e=>e.id).filter(Boolean),i={};if(r.length){let{data:e,error:t}=await v.from(`opportunities`).select(`id, source_id, title, buyer, deadline, status, url, raw_payload, created_at, published_date`).in(`source_id`,r).eq(`status`,`open`).order(`created_at`,{ascending:!1}).limit(500);if(t)throw t;i=(e||[]).reduce((e,t)=>(e[t.source_id]||(e[t.source_id]=[]),e[t.source_id].push(t),e),{})}O.sourceCoverage=n.map(e=>{let t=i[e.id]||[];return{...e,opportunityStats:na(t),latestOpportunities:t.slice(0,8)}}),O.sourceCoverageLoaded=!0}catch(e){console.error(`Failed to load source coverage:`,e),O.sourceCoverage=[],O.sourceCoverageError=B(e)}finally{O.sourceCoverageLoading=!1,O.sourceCoverageLoaded=!0,Z()}}async function gt(){if(!v||!O.isAdmin){O.adminCompanies=[],O.adminCompaniesLoaded=!0;return}O.adminCompaniesLoading=!0,O.adminCompaniesError=null,Z();try{let{data:e,error:t}=await v.from(`companies`).select(`*`).order(`created_at`,{ascending:!1});if(t)throw t;let n=e||[],r=n.map(e=>e.id).filter(Boolean),i=[],a=[],o=[],s=[],c=[];if(r.length){let[e,t,n,l,u]=await Promise.all([v.from(`company_services`).select(`company_id, service`).in(`company_id`,r),v.from(`company_locations`).select(`company_id, location`).in(`company_id`,r),v.from(`company_keywords`).select(`company_id, keyword, type`).in(`company_id`,r),v.from(`opportunity_matches`).select(`company_id, opportunity_id, match_score, match_label, safety_status, opportunities(title, buyer, source_id, sources(name))`).in(`company_id`,r),v.from(`reports`).select(`id, company_id, title, created_at, period_start, period_end, status`).in(`company_id`,r).order(`created_at`,{ascending:!1})]);i=e.error?[]:e.data||[],a=t.error?[]:t.data||[],o=n.error?[]:n.data||[],s=l.error?[]:l.data||[],c=u.error?[]:u.data||[]}O.adminCompanies=n.map(e=>yt(e,{services:i.filter(t=>t.company_id===e.id),locations:a.filter(t=>t.company_id===e.id),keywords:o.filter(t=>t.company_id===e.id),matches:s.filter(t=>t.company_id===e.id),reports:c.filter(t=>t.company_id===e.id)})),O.adminCompaniesLoaded=!0}catch(e){console.error(`Failed to load admin companies:`,e),O.adminCompanies=[],O.adminCompaniesError=B(e)}finally{O.adminCompaniesLoading=!1,O.adminCompaniesLoaded=!0,Z()}}async function _t(){if(!v||!O.isAdmin){O.adminReviewMatches=[],O.adminReviewLoaded=!0;return}O.adminReviewLoading=!0,O.adminReviewError=null,Z();try{let{data:e,error:t}=await v.from(`opportunity_matches`).select(`
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
      `).eq(`safety_status`,`needs_review`).eq(`review_required`,!0).order(`calculated_at`,{ascending:!1}).limit(100);if(t)throw t;O.adminReviewMatches=(e||[]).map(vt),O.adminReviewLoaded=!0}catch(e){console.error(`Failed to load admin review queue:`,e),O.adminReviewMatches=[],O.adminReviewError=B(e)}finally{O.adminReviewLoading=!1,O.adminReviewLoaded=!0,Z()}}function vt(e){let t=M(e.opportunities||{});return{id:e.id,companyId:e.company_id,opportunityId:e.opportunity_id,companyName:e.companies?.company_name||`Unknown company`,opportunity:t,matchScore:Number(e.match_score||0),matchLabel:e.match_label||Y(Number(e.match_score||0)),matchReasons:en(t,Array.isArray(e.match_reasons)?e.match_reasons:[]),risks:Array.isArray(e.risks)?e.risks:[],safetyStatus:e.safety_status||`needs_review`,safetyReasons:Array.isArray(e.safety_reasons)?e.safety_reasons:[],alertEligible:!!e.alert_eligible,reviewRequired:!!e.review_required,calculatedAt:e.calculated_at}}function yt(e,t){let n=C((t.services||[]).map(e=>e.service)),r=C((t.locations||[]).map(e=>e.location)),i=C((t.keywords||[]).filter(e=>e.type===`include`).map(e=>e.keyword)),a=C((t.keywords||[]).filter(e=>e.type===`exclude`).map(e=>e.keyword)),o=t.reports||[],s=(t.matches||[]).filter(e=>e.safety_status!==`hidden`),c=!!(e.company_name&&e.contact_email&&e.industry&&n.length&&(r.length||e.base_location||C(e.service_areas).length));return{id:e.id,ownerId:e.owner_id||``,companyName:e.company_name||`Unnamed company`,contactEmail:e.contact_email||``,website:e.website||``,industry:e.industry||``,plan:e.plan||e.subscription_plan||`Demo`,profileStatus:c?`Complete`:`Incomplete`,createdAt:e.created_at,services:n,locations:r,includeKeywords:i,excludeKeywords:a,baseLocation:e.base_location||``,serviceAreas:C(e.service_areas),willingToTravel:!!e.willing_to_travel,nationalProjects:!!e.national_projects,remoteProjects:!!e.remote_projects,minimumProjectValueForTravel:e.minimum_project_value_for_travel,minProjectValue:e.min_project_value,maxProjectValue:e.max_project_value,allowUnknownValue:!!e.allow_unknown_value,includeLowConfidence:!!e.include_low_confidence,autoAlertMode:e.auto_alert_mode||`auto_safe_only`,reportFrequency:e.report_frequency||`weekly`,reportDay:e.report_day||`monday`,deadlineReminders:!!e.deadline_reminders,matchCount:s.length,savedCount:0,latestReportDate:o[0]?.created_at||``,latestMatches:s.slice(0,8),latestReports:o.slice(0,5)}}function bt(e,t){O.adminCompanyActions={...O.adminCompanyActions||{},[e]:t}}function xt(e){let t={...O.adminCompanyActions||{}};delete t[e],O.adminCompanyActions=t}async function St(e,t={}){if(!O.isAdmin)return O.adminMessage={type:`error`,text:`You do not have access to this action.`},Z(),[];let n=(O.adminCompanies||[]).find(t=>t.id===e);if(!n)return O.adminMessage={type:`error`,text:`Company not found. Refresh Admin companies and try again.`},Z(),[];t.skipAction||bt(e,`refresh`),t.silent||(O.adminMessage=null,Z());try{let r=await Tt(e,`refresh_matches`),i=Number(r.matches_refreshed||0);return await Promise.all([gt(),_t()]),O.companyId===e&&await Fn(),t.silent||(O.adminMessage={type:`success`,text:`Refreshed ${i} eligible matches for ${n.companyName}.`},V(`Company matches refreshed`,`success`),Z()),r}catch(e){if(console.error(`Failed to refresh admin company matches:`,e),O.adminMessage={type:`error`,text:`Failed to refresh matches for ${n.companyName}. ${B(e)}`},Z(),t.throwOnError)throw e;return[]}finally{t.skipAction||(xt(e),Z())}}async function Ct(e){if(!O.isAdmin){O.adminMessage={type:`error`,text:`You do not have access to this action.`},Z();return}let t=(O.adminCompanies||[]).find(t=>t.id===e);if(!t){O.adminMessage={type:`error`,text:`Company not found. Refresh Admin companies and try again.`},Z();return}bt(e,`report`),O.adminMessage=null,Z();try{let n=await Tt(e,`generate_report`,{reportMode:O.adminReportMode||`new_only`});if(!n.report_created){O.adminMessage={type:`error`,text:Dt(n,t.companyName)},Z();return}await Promise.all([pt(),gt(),_t()]),O.companyId===e&&await In(),O.adminMessage={type:`success`,text:`Generated ${Et(n.report_mode||O.adminReportMode)} report for ${t.companyName} with ${Number(n.report_items||0)} item${Number(n.report_items||0)===1?``:`s`}. Open the Reports tab to review it.`},V(`Company report generated`,`success`)}catch(e){console.error(`Failed to generate admin company report:`,e),O.adminMessage={type:`error`,text:`Failed to generate report for ${t.companyName}. ${B(e)}`}}finally{xt(e),Z()}}async function wt(e,t,n){if(!O.isAdmin){O.adminMessage={type:`error`,text:`You do not have access to this action.`},Z();return}if(!e||!t||![`approve`,`reject`].includes(n)){O.adminMessage={type:`error`,text:`Missing review action details.`},Z();return}O.adminReviewActions={...O.adminReviewActions||{},[e]:n},O.adminMessage=null,Z();try{let r=await Tt(t,`review_match`,{matchId:e,reviewAction:n});await Promise.all([_t(),gt()]),O.companyId===t&&await Fn(),O.adminMessage={type:`success`,text:r.message||(n===`approve`?`Match approved for customer reports.`:`Match rejected and hidden.`)},V(n===`approve`?`Match approved`:`Match rejected`,`success`)}catch(e){console.error(`Failed to review admin match:`,e),O.adminMessage={type:`error`,text:`Failed to ${n} match. ${B(e)}`}}finally{let t={...O.adminReviewActions||{}};delete t[e],O.adminReviewActions=t,Z()}}async function Tt(e,t,n={}){let r=on();if(!r)throw Error(`Admin company actions are not configured. Set window.VERKRADAR_ADMIN_COMPANY_ACTIONS_URL or window.VERKRADAR_SUPABASE_URL.`);let i=await fetch(r,{method:`POST`,headers:await un(),body:JSON.stringify({companyId:e,action:t,...n})}),a=await i.json().catch(()=>({}));if(!i.ok)throw Error(a.error||`Admin company action failed with status ${i.status}`);return a}function Et(e){return e===`all_current`?`all current matches`:`new opportunities`}function Dt(e,t){let n=e?.report_mode||O.adminReportMode||`new_only`;return e?.message||(n===`new_only`?`No new eligible opportunities found since the previous report.`:`No customer-report-ready matches found for ${t}.`)}async function Ot(){O.isAdmin&&(await Promise.all([ft(),ln(),pt(),ht(),gt(),_t()]),V(`Automation status refreshed`,`success`),Z())}function M(e){let t=e.raw_payload&&typeof e.raw_payload==`object`?e.raw_payload:{},n=e.sources?.name||t.source_name||``,r=P(t.quality_status||t.qualityStatus,{source:n,sourceType:e.sources?.source_type||``,title:e.title||``,description:At(e.description||``,t,n,e.title||``),rawPayload:t}),i=F({source:n,sourceType:e.sources?.source_type||``,title:e.title||``,description:e.description||``,category:e.category||``,keywords:Array.isArray(e.keywords)?e.keywords:[],qualityStatus:r,rawPayload:t});return{id:e.id,externalId:e.external_id||``,countryCode:e.country_code||``,title:e.title,buyer:Ne(e.buyer,n,t),source:n||`Supabase`,sourceType:e.sources?.source_type||``,category:e.category||`Other`,type:e.type||`tender`,description:e.description||``,deadline:e.deadline,deadlineAt:t.deadline_at||``,publishedDate:e.published_date,createdAt:e.created_at,location:Pt(e.location||`Unknown`,t,n,e.title||``,e.description||``),estimatedValue:e.estimated_value,currency:e.currency||`ISK`,url:e.url||``,cpvCode:e.cpv_code||``,requirements:Array.isArray(e.requirements)?e.requirements:[],keywords:Array.isArray(e.keywords)?e.keywords:[],difficulty:e.difficulty||`medium`,status:e.status||`open`,qualityStatus:r,intent:i,rawPayload:t}}function kt(e){let t=M(e.opportunities||{});return{...t,matchScore:Number(e.match_score||0),matchLabel:e.match_label||Y(Number(e.match_score||0)),matchReasons:en(t,Array.isArray(e.match_reasons)?e.match_reasons:[]),risks:Array.isArray(e.risks)?e.risks:[],nextSteps:Array.isArray(e.next_steps)?e.next_steps:[],safetyStatus:e.safety_status||`needs_review`,safetyReasons:Array.isArray(e.safety_reasons)?e.safety_reasons:[],alertEligible:!!e.alert_eligible,reviewRequired:!!e.review_required,reviewedAt:e.reviewed_at||``,reviewNote:e.review_note||``}}function At(e,t={},n=``,r=``){t=t&&typeof t==`object`?t:{};let i=String(e||``).replace(/\s+/g,` `).trim(),a=w(n);if(!i)return``;if(a.includes(`rikiskaup`)||a.includes(`utbodsvefur`)){let e=jt(i,t,r);if(e)return e;if(Mt(i)||Nt(i))return O.language===`is`?`Útboðstilkynning flutt inn af Útboðsvef. Opnið upprunasíðuna til að staðfesta kaupanda, skilafrest, kröfur og útboðsgögn.`:`Procurement notice imported from Útboðsvefur. Open the source page to confirm buyer, deadline, requirements and tender documents.`}return i}function jt(e,t={},n=``){t=t&&typeof t==`object`?t:{};let r=String(e||``).replace(/\s+/g,` `).trim();if(!r)return``;let i=[r.search(/F\.h\.[^.]{0,280}ósk(?:að|ar) eftir tilboðum/i),r.search(/(?:Reykjavíkurborg|sveitarfélag|bærinn|kaupandi)[^.]{0,280}ósk(?:að|ar) eftir tilboðum/i),r.search(/óskar eftir tilboðum|óskað eftir tilboðum|oskar eftir tilbodum|oskad eftir tilbodum/i),r.search(/verkefnið felst|verkið felst|verkið felur|gatna-|gatnagerð|stígagerð/i)].filter(e=>e>=0);if(!i.length)return``;let a=Math.min(...i),o=r.slice(a).search(/\s+(Nánari upplýsingar|Útboðsgögn afhent|Opnun tilboða|Opnun tilboda|Auglýsandi|Flokkar|Tengdar fréttir|Fjöldi útboð)\b/i),s=o>120?a+o:a+1200,c=[r.slice(a,s).trim()],l=t.extracted_deadline_text||t.deadline_text||``;l&&!c[0].includes(String(l))&&c.push(`Skilafrestur: ${l}`);let u=Se(c).join(` `).replace(/^(Útboðsvefur\s*){1,}/i,``).replace(/\s+/g,` `).trim();return Nt(u)?``:u||n}function Mt(e){return/Procurement notice imported from Útboðsvefur|Open the source page for full buyer details/i.test(String(e||``))}function Nt(e){let t=String(e||``);return[`Framkvæmdasýslan`,`Ríkiseignir`,`Garðabær`,`Grímsnes`,`Fjöldi útboð`,`Útboðsvefur.is - Opinber útboð`].filter(e=>t.includes(e)).length>=3||/^Útboðsvefur\s+Útboðsvefur\.is/i.test(t)}function Pt(e,t={},n=``,r=``,i=``){let a=Ft(`${r} ${i} ${JSON.stringify(t||{})}`),o=String(e||``).trim();return a&&(!o||/unknown|all iceland|iceland/i.test(o))?a:o||a||`Unknown`}function Ft(e){let t=w(e);return t.includes(`vogabyggd`)||t.includes(`reykjavikurborg`)||t.includes(`strandstigur`)?`Reykjavík / Höfuðborgarsvæðið`:``}function N(e){if(!e||e.status!==`open`||!e.url||e.url===`#`||y(e.deadline)<0||It(e)||e.rawPayload?.extraction_method===`parent_article_with_child_opportunities`||Ko(e)||Vt(e))return!1;if(!Na(e))return!0;let t=Qt(e);return[`IS`,`NO`,`DK`,`SE`,`FI`].includes(t)}function It(e){let t=w(e?.source||``),n=w(e?.title||``),r=w(e?.externalId||``),i=w(e?.sourceType||``),a=e?.rawPayload||{},o=`${t} ${n} ${r} ${i}`;return!!(a.is_demo===!0||a.demo===!0||t===`private lead`||t.includes(`private lead`)||t===`grant portal`||t.includes(`grant portal`)||t===`manual test`||t.includes(`manual test`)||[`demo`,`test`,`sample`,`mock`,`fake`].some(e=>i.includes(e))||/\b(demo|test|sample|mock|fake|manual)\b/.test(o)||n.includes(`manual test`)||n.includes(`municipal websites example`)||r.includes(`demo`)||r.includes(`test`))}function P(e,t={}){let n=String(e||``).toLowerCase(),r=Lt(t?.rawPayload?.opportunity_intent||t?.rawPayload?.intent);if(r===`confirmed_tender`)return`confirmed_tender`;if(r===`early_opportunity`||r===`market_signal`)return`early_signal`;if(r===`news_context`||r===`not_opportunity`)return`needs_review`;if(Na(t))return`confirmed_tender`;if(I(t)){let e=Rt(t);return[`tender_awarded`,`awarded`,`already_tendered`,`announced`].includes(e)?`confirmed_tender`:e===`upcoming_tender`?`early_signal`:`needs_review`}if(n===`early_signal`||n===`needs_review`)return n;let i=L(t);return R(i,[`senn í útboð`,`senn i utbod`])?`early_signal`:Bt(i)?`confirmed_tender`:Xt(t?.title||``)&&!Bt(i)?`needs_review`:Jt(i)?`early_signal`:(Zt(i),`needs_review`)}function Lt(e){return{confirmed:`confirmed_tender`,confirmed_tender:`confirmed_tender`,likely_opportunity:`confirmed_tender`,verified:`confirmed_tender`,early_signal:`early_opportunity`,early_opportunity:`early_opportunity`,upcoming_tender:`early_opportunity`,market_signal:`market_signal`,project_signal:`market_signal`,needs_review:`market_signal`,news_context:`news_context`,news:`news_context`,noise:`not_opportunity`,not_opportunity:`not_opportunity`,stale_opportunity:`not_opportunity`,stale:`not_opportunity`,expired:`not_opportunity`}[String(e||``).toLowerCase().trim()]||``}function F(e={}){let t=Lt(e?.rawPayload?.opportunity_intent||e?.rawPayload?.intent),n=String(e?.rawPayload?.admin_report_status||``).toLowerCase();if(n===`include`)return`confirmed_tender`;if([`hidden`,`hide`,`noise`,`deleted`].includes(n))return t||`not_opportunity`;if(t)return t;if(Na(e))return`confirmed_tender`;let r=L(e),i=e?.title||``;if(I(e)){let t=Rt(e);return[`tender_awarded`,`awarded`,`already_tendered`,`announced`].includes(t)?`confirmed_tender`:t===`upcoming_tender`?`early_opportunity`:`market_signal`}return Bt(r)?`confirmed_tender`:Xt(i)||Zt(r)?`news_context`:qt(r)?`early_opportunity`:(Yt(r),`market_signal`)}function I(e){return e?.rawPayload?.extraction_method===`vegagerdin_article_project_parser`}function Rt(e){let t=String(e?.rawPayload?.tender_state||``).trim(),n=zt(e),r={awarded:`tender_awarded`,open_or_published:`announced`,planned_tender:`upcoming_tender`,unclear:`project_signal`}[t]||t;return n===`tender_awarded`?`tender_awarded`:n===`already_tendered`&&![`tender_awarded`,`announced`].includes(r)?`already_tendered`:n===`announced`&&![`tender_awarded`,`already_tendered`].includes(r)?`announced`:n===`upcoming_tender`&&[``,`project_signal`,`needs_review`,`unclear`].includes(r)?`upcoming_tender`:r||n}function zt(e){let t=L(e);return R(t,[`lægstbjóðandi`,`laegstbjodandi`,`samningur var`,`samið var`,`samid var`,`skrifað var undir verksamning`,`skrifad var undir verksamning`])?`tender_awarded`:R(t,[`útboð var auglýst`,`utbod var auglyst`,`útboðið var auglýst`,`utbodid var auglyst`,`útboð hefur farið fram`,`utbod hefur farid fram`,`útboðið hefur farið fram`,`utbodid hefur farid fram`,`boðið út`,`bodid ut`,`verkið var boðið út`,`verkid var bodid ut`,`útboð var opnað`,`utbod var opnad`,`tilboð opnuð`,`tilbod opnud`])?`already_tendered`:R(t,[`óskað eftir tilboðum`,`oskad eftir tilbodum`,`tilboðsfrestur`,`tilbodsfrestur`,`skilafrestur`,`verðfyrirspurn`,`verdfyrirspurn`,`rammasamningur`,`forval`])?`announced`:R(t,[`áætlað útboð`,`aaetlad utbod`,`áætlað er að bjóða út`,`aaetlad er ad bjoda ut`,`fyrirhugað útboð`,`fyrirhugad utbod`,`senn í útboð`,`senn i utbod`,`útboð verður`,`utbod verdur`])?`upcoming_tender`:`project_signal`}function L(e){return w([e?.title,e?.description,e?.category,e?.source,...Array.isArray(e?.keywords)?e.keywords:[]].filter(Boolean).join(` `))}function R(e,t){let n=w(e);return t.some(e=>n.includes(w(e)))}function Bt(e){return R(e,[`útboð`,`utbod`,`útboðsauglýsing`,`utbodsauglysing`,`tilboð`,`tilboðum`,`tilbod`,`tilbodum`,`óskað eftir tilboðum`,`oskad eftir tilbodum`,`verðfyrirspurn`,`verdfyrirspurn`,`innkaup`,`rammasamningur`,`forval`,`tender`,`procurement`,`skilafrestur`,`útboðsgögn`,`utbodsgogn`])}function Vt(e={}){let t=e.rawPayload||{};return t.stale_status===`stale_or_expired`||t.opportunity_intent===`stale_opportunity`?!0:Ht({title:e.title,description:e.description,content:[e.category,e.source,Array.isArray(e.keywords)?e.keywords.join(` `):``].filter(Boolean).join(` `),publishedDate:e.publishedDate,deadline:e.deadline,sourceName:e.source,sourceType:e.sourceType,connectorType:t.connector_type}).isStale}function Ht(e={}){let t=String(e.deadline||``).slice(0,10);if(t&&y(t)>=0)return{isStale:!1,reason:``,thresholdDays:null,ageDays:null,oldYears:[],expiredKeywords:[]};let n=w([e.title,e.description,e.content].filter(Boolean).join(` `)),r=Wt(n),i=Gt(n),a=Kt(e.publishedDate),o=a?Math.floor((Date.now()-new Date(`${a}T00:00:00Z`).getTime())/864e5):null,s=Ut(e)?45:60;return r.length?{isStale:!0,reason:`Old year detected (${r.join(`, `)}) and no future deadline found.`,thresholdDays:s,ageDays:o,oldYears:r,expiredKeywords:i}:i.length?{isStale:!0,reason:`Expired/result wording detected (${i.slice(0,3).join(`, `)}) and no future deadline found.`,thresholdDays:s,ageDays:o,oldYears:r,expiredKeywords:i}:o!==null&&o>s?{isStale:!0,reason:`Published ${o} days ago with no current deadline.`,thresholdDays:s,ageDays:o,oldYears:r,expiredKeywords:i}:{isStale:!1,reason:``,thresholdDays:s,ageDays:o,oldYears:r,expiredKeywords:i}}function Ut(e={}){let t=w(`${e.sourceName||``} ${e.sourceType||``} ${e.connectorType||``}`);return String(e.connectorType||``)===`rss_feed`&&[`municipal`,`sveitarfelag`,`akranes`,`borgarbyggd`,`arborg`,`selfoss`,`gardabaer`,`reykjanesbaer`,`hafnarfjordur`,`mosfellsbaer`,`kopavogur`,`mulathing`,`fjardabyggd`].some(e=>t.includes(w(e)))}function Wt(e){let t=new Date().getUTCFullYear(),n=new Set;return String(e||``).replace(/\b(20[0-9]{2})\b/g,(e,r)=>{let i=Number(r);return i>=2020&&i<t&&n.add(i),r}),Array.from(n).sort()}function Gt(e){return`niðurstaða útboðs.nidurstada utbods.niðurstöður útboðs.nidurstodur utbods.opnun tilboða.opnun tilboda.tilboð opnuð.tilbod opnud.lokið.lokid.lokið útboði.lokid utbodi.búið.buid.útrunnið.ut runnid.eldri útboð.eldri utbod.útboðssaga.utbodssaga.samningur gerður.samningur gerdur.verksamningur.awarded.tender results.contract awarded.expired`.split(`.`).filter(t=>R(e,[t]))}function Kt(e){if(!e)return``;let t=new Date(e);return Number.isNaN(t.getTime())?``:t.toISOString().slice(0,10)}function qt(e){return R(e,[`senn í útboð`,`senn i utbod`,`áætlað útboð`,`aaetlad utbod`,`áætlað er að bjóða út`,`aaetlad er ad bjoda ut`,`fyrirhugað útboð`,`fyrirhugad utbod`,`markaðskönnun`,`markadskonnun`,`rfi`])}function Jt(e){return qt(e)?!0:R(e,[`áætlaðar framkvæmdir`,`aaetladar framkvaemdir`,`fyrirhugaðar framkvæmdir`,`fyrirhugadar framkvaemdir`,`framkvæmdir hefjast`,`framkvaemdir hefjast`,`malbikunarframkvæmdir`,`malbikunarframkvaemdir`,`vegaframkvæmdir`,`vegaframkvaemdir`,`brúargerð`,`bruargerd`,`jarðvinna`,`jardvinna`,`gatnagerð`,`gatnagerd`])}function Yt(e){return R(e,[`áætlaðar framkvæmdir`,`aaetladar framkvaemdir`,`fyrirhugaðar framkvæmdir`,`fyrirhugadar framkvaemdir`,`framkvæmdir hefjast`,`framkvaemdir hefjast`,`malbikunarframkvæmdir`,`malbikunarframkvaemdir`,`vegaframkvæmdir`,`vegaframkvaemdir`,`brúargerð`,`bruargerd`,`jarðvinna`,`jardvinna`,`gatnagerð`,`gatnagerd`,`fræsing`,`fraesing`])}function Xt(e){return R(e,[`lokun`,`lokað`,`lokad`,`lokanir`,`umferð`,`umferd`,`tafir`,`hjáleið`,`hjaleid`,`akstursleið`,`akstursleid`,`vegfarendur`,`frétt`,`frett`,`myndband`,`tekur á sig mynd`,`tekur a sig mynd`,`opið aftur`,`opid aftur`])}function Zt(e){return R(e,[`lokun`,`lokanir`,`umferð`,`umferd`,`dagskrá`,`dagskra`,`skráning`,`skraning`,`myndband`,`ráðstefna`,`radstefna`,`kynningarfundur`,`tilkynning`,`fundur`,`fjölskylduganga`,`fjolskylduganga`,`tafir`,`kynnt`,`styrkur`,`frétt`,`frett`,`viðburður`,`vidburdur`])}function Qt(e){let t=$t(e.countryCode);if(t)return t;let n=w(J(e));return n.includes(`iceland`)||n.includes(`island`)||n.includes(`reykjavik`)||n.includes(`capital area`)||n.includes(`hofudborgarsvaedid`)||n.includes(`east iceland`)||n.includes(`west iceland`)||n.includes(`north iceland`)||n.includes(`south iceland`)||n.includes(`sudurnes`)?`IS`:n.includes(`norway`)?`NO`:n.includes(`denmark`)?`DK`:n.includes(`sweden`)?`SE`:n.includes(`finland`)?`FI`:``}function $t(e){return{IS:`IS`,ISL:`IS`,ICELAND:`IS`,ÍSLAND:`IS`,NO:`NO`,NOR:`NO`,NORWAY:`NO`,DK:`DK`,DNK:`DK`,DENMARK:`DK`,SE:`SE`,SWE:`SE`,SWEDEN:`SE`,FI:`FI`,FIN:`FI`,FINLAND:`FI`}[String(e||``).trim().toUpperCase()]||``}function en(e,t){return Dr(e)?t:t.filter(e=>!/^Located in your selected region:/i.test(String(e||``)))}function tn(){O.authForm={email:``,password:``,newPassword:``,confirmPassword:``}}function nn(){O.authForm.newPassword=``,O.authForm.confirmPassword=``}function rn(){return window.VERKRADAR_TED_IMPORT_URL?window.VERKRADAR_TED_IMPORT_URL:window.VERKRADAR_SUPABASE_URL?`${window.VERKRADAR_SUPABASE_URL}/functions/v1/import-ted`:`${xe}/functions/v1/import-ted`}function an(){return window.VERKRADAR_SOURCE_CONNECTOR_IMPORT_URL?window.VERKRADAR_SOURCE_CONNECTOR_IMPORT_URL:window.VERKRADAR_SUPABASE_URL?`${window.VERKRADAR_SUPABASE_URL}/functions/v1/import-source-connectors`:`${xe}/functions/v1/import-source-connectors`}function on(){return window.VERKRADAR_ADMIN_COMPANY_ACTIONS_URL?window.VERKRADAR_ADMIN_COMPANY_ACTIONS_URL:window.VERKRADAR_SUPABASE_URL?`${window.VERKRADAR_SUPABASE_URL}/functions/v1/admin-company-actions`:`${xe}/functions/v1/admin-company-actions`}async function sn(){if(!O.isAdmin){O.importStatus={errors:[`You do not have access to import TED notices.`]},Z();return}let e=rn();if(!e){O.importStatus={errors:[`TED importer is not configured. Set window.VERKRADAR_TED_IMPORT_URL or window.VERKRADAR_SUPABASE_URL for this environment.`]},Z();return}O.importLoading=!0,O.importStatus=null,O.importedTedOpportunities=[],Z();try{let t=await fetch(e,{method:`POST`,headers:await un(),body:JSON.stringify({limit:50,importMode:O.tedImportMode})}),n=await t.json();if(O.importStatus=t.ok?n:{...n,errors:n.errors||[`Import failed with status ${t.status}`]},t.ok){await j();let e=O.companyId?await zn():Number(n.matched||0);await ln(),O.isAdmin&&(await ft(),await pt()),O.importStatus={...O.importStatus,matched:e},V(`TED import completed`,`success`)}}catch(e){O.importStatus={errors:[e instanceof Error?e.message:String(e)]}}finally{O.importLoading=!1,Z()}}async function cn(e=``){if(!O.isAdmin){O.connectorImportStatus={errors:[`You do not have access to run source imports.`]},Z();return}let t=an();if(!t){O.connectorImportStatus={errors:[`Source connector importer is not configured. Set window.VERKRADAR_SOURCE_CONNECTOR_IMPORT_URL or window.VERKRADAR_SUPABASE_URL for this environment.`]},Z();return}O.connectorImportLoading=!e,O.connectorTestingSourceId=e||null,O.connectorImportStatus=null,Z();try{let n=await fetch(t,{method:`POST`,headers:await un(),body:JSON.stringify({limit:50,sourceId:e||void 0})}),r=await n.json();O.connectorImportStatus=n.ok?r:{...r,errors:r.errors||[`Source import failed with status ${n.status}`]},n.ok&&(await j(),await Ot(),V(e?`Source test completed`:`Automatic source imports completed`,`success`))}catch(e){O.connectorImportStatus={errors:[e instanceof Error?e.message:String(e)]}}finally{O.connectorImportLoading=!1,O.connectorTestingSourceId=null,Z()}}async function ln(){if(!v){O.importedTedOpportunities=[],O.importedTedOpportunitiesLoaded=!0;return}O.importedTedOpportunitiesLoading=!0,O.importedTedOpportunitiesError=null;try{let{data:e,error:t}=await v.from(`sources`).select(`id, name`).in(`name`,[`TED Iceland/Nordic`,`EU TED`,`Tenders Electronic Daily`]);if(t)throw t;let n=(e||[]).map(e=>e.id).filter(Boolean);if(!n.length){O.importedTedOpportunities=[];return}let{data:r,error:i}=await v.from(`opportunities`).select(`*, sources(name, source_type)`).in(`source_id`,n).order(`created_at`,{ascending:!1}).limit(10);if(i)throw i;O.importedTedOpportunities=(r||[]).map(M)}catch(e){console.error(`Failed to load latest TED opportunities:`,e),O.importedTedOpportunities=[],O.importedTedOpportunitiesError=B(e)}finally{O.importedTedOpportunitiesLoading=!1,O.importedTedOpportunitiesLoaded=!0}}async function un(){let e={"content-type":`application/json`},t=window.VERKRADAR_SUPABASE_ANON_KEY||`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFzb2p4amJzZ3FiZnBiZXBvanpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAwNTU2NjgsImV4cCI6MjA5NTYzMTY2OH0.yPA34VbqWqKrBPespmHr5AojYzjhy3kGRxswO9XdAd0`;t&&t!==`PASTE_MY_ANON_PUBLIC_KEY_HERE`&&(e.apikey=t);let{data:n,error:r}=v?await v.auth.getSession():{data:{session:null},error:null};if(r)throw r;let i=n.session?.access_token;if(!i)throw Error(`You must be logged in to run this admin action.`);return e.authorization=`Bearer ${i}`,e}function dn(){return`${window.location.origin}/#/onboarding`}function fn(){return`${window.location.origin}/#/reset-password`}function pn(e){let t=e?.user?.identities;return Array.isArray(t)&&t.length===0}function mn(){return[{label:D(`login`),href:`/login`,variant:`primary`},{label:D(`forgotPassword`),href:`/forgot-password`,variant:`secondary`}]}async function hn(e,t){O.authSubmitting=!0,O.authMessage=null,Z();try{if(!v)throw Error(`Supabase client is not configured.`);let{data:n,error:r}=await v.auth.signUp({email:String(e||``).trim(),password:String(t||``),options:{emailRedirectTo:dn()}});if(r)throw r;if(qe(),pn(n)){O.user=null,O.currentUser=null,O.authMessage={type:`error`,text:D(`signupExistingAccount`),actions:mn()},O.authForm.password=``,Z();return}if(!n.session?.user){O.user=null,O.currentUser=null,O.authMessage={type:`success`,text:Array.isArray(n?.user?.identities)&&n.user.identities.length>0?D(`signupCreatedConfirm`):D(`signupNeutralNextSteps`)},O.authForm.password=``,Z();return}O.user=n.session.user,O.currentUser=O.user,O.profileDraft=null,O.profileDraftDirty=!1,await xn(O.user),O.authMessage={type:`success`,text:D(`signupCreatedConfirm`)},await Dn({overwriteDraft:!0}),tn(),k(it())}catch(e){console.error(`Signup failed:`,e);let t=Kn(e);O.authMessage={type:`error`,text:Gn(e,`signup`),actions:t?mn():[]},Z()}finally{O.authSubmitting=!1,Z()}}async function gn(e,t){O.authSubmitting=!0,O.authMessage=null,Z();try{if(!v)throw Error(`Supabase client is not configured.`);let{data:n,error:r}=await v.auth.signInWithPassword({email:String(e||``).trim(),password:String(t||``)});if(r)throw r;O.user=n.user||await bn(),O.currentUser=O.user,O.profileDraft=null,O.profileDraftDirty=!1,await xn(O.user),await Dn({overwriteDraft:!0}),tn(),k(it())}catch(e){console.error(`Login failed:`,e),O.authMessage={type:`error`,text:Gn(e,`login`)},Z()}finally{O.authSubmitting=!1,Z()}}async function _n(e){O.authSubmitting=!0,O.authMessage=null,Z();try{if(!v)throw Error(`Supabase client is not configured.`);let{error:t}=await v.auth.resetPasswordForEmail(String(e||``).trim(),{redirectTo:fn()});if(t)throw t;O.authMessage={type:`success`,text:`If an account exists for this email, a reset link has been sent.`}}catch(e){console.error(`Password reset request failed:`,e),O.authMessage={type:`error`,text:`We could not send a reset link right now. Please try again.`}}finally{O.authSubmitting=!1,Z()}}async function vn(e,t){let n=String(e||``),r=String(t||``);if(!n){O.authMessage={type:`error`,text:`Enter a new password.`},Z();return}if(n.length<8){O.authMessage={type:`error`,text:`Password must be at least 8 characters.`},Z();return}if(n!==r){O.authMessage={type:`error`,text:`Passwords do not match.`},Z();return}O.authSubmitting=!0,O.authMessage=null,Z();try{if(!v)throw Error(`Supabase client is not configured.`);let{error:e}=await v.auth.updateUser({password:n});if(e)throw e;nn(),k(`/login`),O.authMessage={type:`success`,text:`Password updated. You can now log in.`},Z()}catch(e){console.error(`Password update failed:`,e),O.authMessage={type:`error`,text:`This reset link may be expired or invalid. Request a new reset link and try again.`},Z()}finally{O.authSubmitting=!1,Z()}}async function yn(){try{if(v){let{error:e}=await v.auth.signOut();if(e)throw e}}catch(e){console.error(`Logout failed:`,e)}finally{O.user=null,O.currentUser=null,O.isAdmin=!1,O.authLoaded=!0,O.adminLoaded=!0,O.profileLoaded=!0,qe(),k(`/`),Z()}}async function bn(){if(!v)return null;let{data:e,error:t}=await v.auth.getUser();return t?(console.error(`Failed to get current user:`,t),null):e.user||null}async function xn(e=O.user){if(!v||!e)return O.isAdmin=!1,!1;try{let{data:t,error:n}=await v.from(`admin_users`).select(`user_id`).eq(`user_id`,e.id).maybeSingle();if(n)throw n;return O.isAdmin=!!t?.user_id,O.isAdmin}catch(e){return console.error(`Failed to check admin access:`,e),O.isAdmin=!1,!1}}function z(){return Q(`
    <section class="empty-state">
      <h1>${T(D(`authRequiredTitle`))}</h1>
      <p>${T(D(`authRequiredText`))}</p>
      <button class="btn btn-primary" data-action="go" data-href="/login">${T(D(`login`))}</button>
      <button class="btn btn-secondary" data-action="go" data-href="/signup">${T(D(`createAccount`))}</button>
    </section>
  `)}function Sn(){return Q(`
    <section class="empty-state">
      <h1>You do not have access to this page.</h1>
      <p>Admin access is limited to approved VerkRadar admin users.</p>
    </section>
  `)}var Cn=!1,wn=!1;async function Tn(){if(!v)return O.user=null,O.currentUser=null,null;let{data:e,error:t}=await v.auth.getSession();if(t)throw t;return O.user=e.session?.user||null,O.currentUser=O.user,O.user}async function En(){O.adminLoaded=!1,await xn(O.currentUser||O.user),O.adminLoaded=!0}async function Dn(e={}){let{overwriteDraft:t=!1,showGlobalLoading:n=!1}=e;(n||!O.profile&&!O.profileDraftDirty)&&(O.profileLoaded=!1),O.profileLoading=!0,O.profileLoadError=null;try{await On(Mn({overwriteDraft:t}),Ge,`Profile loading took too long. Please retry.`)}catch(e){console.error(`Failed to load profile from Supabase:`,e),O.profileLoadError=B(e)}finally{O.profileLoading=!1,O.profileLoaded=!0}}function On(e,t,n){let r,i=new Promise((e,i)=>{r=setTimeout(()=>i(Error(n)),t)});return Promise.race([e,i]).finally(()=>clearTimeout(r))}async function kn(){if(!O.isSavingProfile){O.profileLoadError=null,O.profileLoading=!0,Z();try{await Dn({overwriteDraft:!0})}catch(e){console.error(`Settings profile retry failed:`,e),O.profileLoadError=B(e)}finally{O.profileLoading=!1,O.profileLoaded=!0,Z(),A()}}}function An(){!v||wn||(wn=!0,v.auth.onAuthStateChange(async(e,t)=>{if(Cn){if(O.user=t?.user||null,O.currentUser=O.user,O.user){if(e===`PASSWORD_RECOVERY`){O.authLoaded=!0,O.adminLoaded=!0,O.profileLoaded=!0,O.authMessage=null,k(`/reset-password`);return}try{await En(),O.route===`/settings`&&O.profileDraftDirty?O.profileLoaded=!0:await Dn()}catch(e){console.error(`Auth profile refresh failed:`,e),O.profileLoadError=B(e),O.adminLoaded=!0,O.profileLoaded=!0}if(lt())return;Z(),A();return}O.isAdmin=!1,O.profile=null,O.profileDraft=null,O.profileDraftDirty=!1,O.profileLoading=!1,O.profileLoadError=null,O.companyId=null,O.storedMatches=[],O.reports=[],O.reportsLoaded=!1,O.reportsLoadError=null,O.selectedReportId=null,O.authLoaded=!0,O.adminLoaded=!0,O.profileLoaded=!0,e===`SIGNED_OUT`&&k(`/`),Z(),A()}}))}async function jn(){O.isBooting=!0,O.authLoaded=!1,O.profileLoaded=!1,O.adminLoaded=!1,O.bootError=null,Z();try{An(),await Tn(),O.authLoaded=!0,O.currentUser?(await En(),await Dn({overwriteDraft:!0,showGlobalLoading:!0})):(O.profile=null,O.profileDraft=null,O.profileDraftDirty=!1,O.profileLoading=!1,O.profileLoadError=null,O.companyId=null,O.isAdmin=!1,O.adminLoaded=!0,O.profileLoaded=!0)}catch(e){console.error(`Boot failed:`,e),O.bootError=B(e),O.authLoaded=!0,O.adminLoaded=!0,O.profileLoaded=!0}finally{O.authLoading=!1,O.isBooting=!1,Cn=!0,st()?ct(`/reset-password`):lt({replace:!0}),Z(),A()}}async function Mn(e={}){let{overwriteDraft:t=!1}=e;if(!v||!O.user){O.profile=null,(t||!O.profileDraftDirty)&&(O.profileDraft=null),Z();return}try{let{data:e,error:n}=await v.from(`companies`).select(`*`).eq(`owner_id`,O.user.id).maybeSingle();if(n)throw n;if(!e){O.companyId=null,O.storedMatches=[],O.reports=[],O.reportsLoaded=!1,O.reportsLoadError=null,O.selectedReportId=null,O.profile=null,(t||!O.profileDraftDirty)&&(O.profileDraft=null),O.profileLoadError=null,Z(),A();return}if(O.profileDraftDirty&&O.companyId&&O.companyId!==e.id&&!t){if(!window.confirm(`You have unsaved profile changes. Switch company profile and discard those edits?`)){O.profileLoadError=`Unsaved changes were kept. Save or reload before switching company profiles.`,Z(),A();return}O.profileDraftDirty=!1}let[r,i,a]=await Promise.all([v.from(`company_services`).select(`service`).eq(`company_id`,e.id),v.from(`company_locations`).select(`location`).eq(`company_id`,e.id),v.from(`company_keywords`).select(`keyword, type`).eq(`company_id`,e.id)]);if(r.error)throw r.error;if(i.error)throw i.error;if(a.error)throw a.error;O.companyId!==e.id&&(O.reports=[],O.reportsLoaded=!1,O.reportsLoadError=null,O.selectedReportId=null),O.companyId=e.id;let o=Pn(e,r.data||[],i.data||[],a.data||[]);O.profile=o,(t||!O.profileDraftDirty)&&rr(o),O.profileLoadError=null,qn(O.profile),await Yr(),await Fn(),Z(),A()}catch(e){console.error(`Failed to load Supabase company profile:`,e),O.profileLoadError=B(e),O.profileDraftDirty||(O.companyId=null,O.storedMatches=[],O.reports=[],O.reportsLoaded=!1,O.reportsLoadError=null,O.selectedReportId=null,O.profile=null),O.profileDraftDirty||(O.profileDraft=null),Z(),A()}}async function Nn(e){if(!v)throw Error(`Supabase client is not configured.`);let t={...e,companyName:String(e.companyName||``).trim(),contactEmail:String(e.contactEmail||``).trim(),website:String(e.website||``).trim(),industry:String(e.industry||``).trim(),services:C(e.services),locations:C(e.locations),includeKeywords:C(e.includeKeywords),excludeKeywords:C(e.excludeKeywords),baseLocation:String(e.baseLocation||``).trim(),serviceAreas:C(e.serviceAreas),willingToTravel:!!e.willingToTravel,nationalProjects:!!e.nationalProjects,remoteProjects:!!e.remoteProjects,minimumProjectValueForTravel:Zn(e.minimumProjectValueForTravel),minProjectValue:Zn(e.minProjectValue),maxProjectValue:Zn(e.maxProjectValue),allowUnknownValue:!!e.allowUnknownValue,reportFrequency:e.reportFrequency||`weekly`,reportDay:e.reportDay||`monday`,deadlineReminders:!!e.deadlineReminders,includeLowConfidence:!!e.includeLowConfidence,autoAlertMode:e.autoAlertMode||`auto_safe_only`},{data:{user:n},error:r}=await v.auth.getUser();if(r)throw r;if(!n)throw Error(`You must be logged in to save a company profile.`);O.user=n;let{data:i,error:a}=await v.from(`companies`).upsert({owner_id:n.id,company_name:t.companyName,contact_email:t.contactEmail||n.email,website:t.website||null,industry:t.industry,base_location:t.baseLocation||null,service_areas:t.serviceAreas,willing_to_travel:t.willingToTravel,national_projects:t.nationalProjects,remote_projects:t.remoteProjects,minimum_project_value_for_travel:t.minimumProjectValueForTravel,min_project_value:t.minProjectValue,max_project_value:t.maxProjectValue,allow_unknown_value:t.allowUnknownValue,report_frequency:t.reportFrequency,report_day:t.reportDay,deadline_reminders:t.deadlineReminders,include_low_confidence:t.includeLowConfidence,auto_alert_mode:t.autoAlertMode},{onConflict:`owner_id`}).select().single();if(a)throw console.error(`Company upsert error:`,a),a;O.companyId!==i.id&&(O.reports=[],O.reportsLoaded=!1,O.reportsLoadError=null,O.selectedReportId=null),O.companyId=i.id;let o=(await Promise.all([v.from(`company_services`).delete().eq(`company_id`,i.id),v.from(`company_locations`).delete().eq(`company_id`,i.id),v.from(`company_keywords`).delete().eq(`company_id`,i.id)])).find(e=>e.error)?.error;if(o)throw o;let s=t.services.map(e=>({company_id:i.id,service:e})),c=t.locations.map(e=>({company_id:i.id,location:e})),l=[...t.includeKeywords.map(e=>({company_id:i.id,keyword:e,type:`include`})),...t.excludeKeywords.map(e=>({company_id:i.id,keyword:e,type:`exclude`}))];if(s.length){let{error:e}=await v.from(`company_services`).insert(s);if(e)throw e}if(c.length){let{error:e}=await v.from(`company_locations`).insert(c);if(e)throw e}if(l.length){let{error:e}=await v.from(`company_keywords`).insert(l);if(e)throw e}O.profile=t,qn(t)}function Pn(e,t,n,r){return{companyName:e.company_name||``,contactEmail:e.contact_email||``,website:e.website||``,industry:e.industry||``,services:C(t.map(e=>e.service)),includeKeywords:C(r.filter(e=>e.type===`include`).map(e=>e.keyword)),excludeKeywords:C(r.filter(e=>e.type===`exclude`).map(e=>e.keyword)),locations:C(n.map(e=>e.location)),baseLocation:e.base_location||``,serviceAreas:C(e.service_areas),willingToTravel:!!e.willing_to_travel,nationalProjects:!!e.national_projects,remoteProjects:!!e.remote_projects,minimumProjectValueForTravel:e.minimum_project_value_for_travel==null?null:Number(e.minimum_project_value_for_travel),minProjectValue:e.min_project_value==null?null:Number(e.min_project_value),maxProjectValue:e.max_project_value==null?null:Number(e.max_project_value),allowUnknownValue:!!e.allow_unknown_value,reportFrequency:e.report_frequency||`weekly`,reportDay:e.report_day||`monday`,deadlineReminders:!!e.deadline_reminders,includeLowConfidence:!!e.include_low_confidence,autoAlertMode:e.auto_alert_mode||`auto_safe_only`}}async function Fn(){if(!v||!O.companyId){O.storedMatches=[];return}try{let{data:e,error:t}=await v.from(`opportunity_matches`).select(`*, opportunities(*, sources(name, source_type))`).eq(`company_id`,O.companyId).order(`match_score`,{ascending:!1});if(t)throw t;let n=(e||[]).map(e=>e.calculated_at||e.updated_at||e.created_at).filter(Boolean).map(e=>new Date(e).getTime()).filter(e=>!Number.isNaN(e));O.lastMatchedAt=n.length?new Date(Math.max(...n)).toISOString():null,O.storedMatches=(e||[]).filter(e=>e.opportunities).map(kt).filter(as).filter(N)}catch(e){console.error(`Failed to load stored opportunity matches. Falling back to frontend matching:`,e),O.storedMatches=[],O.lastMatchedAt=null}}async function In(){if(O.companyId&&!O.reportArchiveLoading){O.reportArchiveLoading=!0,O.reportsLoadError=null,Z();try{if(!v)throw Error(`Supabase client is not configured.`);let{data:e,error:t}=await v.from(`reports`).select(`
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
      `).eq(`company_id`,O.companyId).is(`archived_at`,null).order(`created_at`,{ascending:!1});if(t)throw t;O.reports=e||[],O.reportsLoaded=!0}catch(e){console.error(`Failed to load reports:`,e),O.reportsLoadError=B(e),O.reports=[],O.reportsLoaded=!0}finally{O.reportArchiveLoading=!1,Z()}}}async function Ln(){if(!O.user){O.reportMessage={type:`error`,text:`Log in to save reports.`},Z();return}if(!O.companyId){O.reportMessage={type:`error`,text:`Create a company profile before saving reports.`},Z();return}let e=Io();if(!e.length){O.reportMessage={type:`error`,text:`No useful matches above the report threshold yet.`},Z();return}let t=Ro(O.profile,e);O.reportSaveLoading=!0,O.reportMessage=null,Z();try{let{data:n,error:r}=await v.from(`reports`).insert({company_id:O.companyId,title:t.title,period_start:t.periodStart,period_end:t.periodEnd,summary:t.summary,text_content:t.textContent,html_content:t.htmlContent,status:`draft`}).select(`id`).single();if(r)throw r;let i=e.filter(e=>we(e.id)).map((e,t)=>({report_id:n.id,opportunity_id:e.id,match_score:e.matchScore,match_reasons:e.matchReasons||[],risks:e.risks||[],sort_order:t+1}));if(i.length){let{error:e}=await v.from(`report_items`).insert(i);if(e)throw e}O.reportMessage={type:`success`,text:`Report saved`},await In(),V(`Report saved`,`success`)}catch(e){console.error(`Failed to save report:`,e),O.reportMessage={type:`error`,text:`Failed to save report. ${B(e)}`}}finally{O.reportSaveLoading=!1,Z()}}async function Rn(e){if(!(!e||!v||!O.user)&&window.confirm(O.language===`is`?`Ertu viss um að þú viljir fela þetta yfirlit? Þetta er ekki hægt að afturkalla í mælaborðinu.`:`Are you sure you want to hide this report? This cannot be undone from the dashboard.`)){O.reportArchiveLoading=!0,O.reportMessage=null,Z();try{let{error:t}=await v.from(`reports`).update({archived_at:new Date().toISOString(),archived_by:O.user.id}).eq(`id`,e).eq(`company_id`,O.companyId);if(t)throw t;O.selectedReportId===e&&(O.selectedReportId=null),O.reports=O.reports.filter(t=>t.id!==e),O.reportMessage={type:`success`,text:O.language===`is`?`Yfirlitið var falið.`:`Report hidden.`},V(O.language===`is`?`Yfirlit falið`:`Report hidden`,`success`)}catch(e){console.error(`Failed to archive report:`,e),O.reportMessage={type:`error`,text:O.language===`is`?`Gat ekki falið yfirlitið. ${B(e)}`:`Could not hide report. ${B(e)}`}}finally{O.reportArchiveLoading=!1,Z()}}}async function zn(){O.matchingLoading=!0,O.matchStatus=null,Z();try{if(!v)throw Error(`Supabase client is not configured.`);let e=O.user||await bn();if(!e)throw Error(`You must be logged in to run matching.`);O.user=e;let{data:t,error:n}=await v.from(`companies`).select(`*`).eq(`owner_id`,e.id).maybeSingle();if(n)throw n;if(!t)throw Error(`No Supabase company profile found. Save onboarding first.`);O.companyId=t.id;let[r,i,a,o]=await Promise.all([v.from(`company_services`).select(`service`).eq(`company_id`,t.id),v.from(`company_locations`).select(`location`).eq(`company_id`,t.id),v.from(`company_keywords`).select(`keyword, type`).eq(`company_id`,t.id),v.from(`opportunities`).select(`*, sources(name, source_type)`).eq(`status`,`open`)]);if(r.error)throw r.error;if(i.error)throw i.error;if(a.error)throw a.error;if(o.error)throw o.error;let s=Pn(t,r.data||[],i.data||[],a.data||[]),c=O.profileDraftDirty,l=(o.data||[]).map(M).filter(N).map(e=>Mr(s,e)).filter(e=>e.matchScore>=50).map(e=>({company_id:t.id,opportunity_id:e.id,match_score:e.matchScore,match_label:e.matchLabel,match_reasons:e.matchReasons,risks:e.risks,next_steps:e.nextSteps,calculated_at:new Date().toISOString()})),{error:u}=await v.from(`opportunity_matches`).delete().eq(`company_id`,t.id);if(u)throw u;if(l.length){let{error:e}=await v.from(`opportunity_matches`).insert(l);if(e)throw e}O.profile=s,qn(s),c||rr(s);let d=l.length===1?`match`:`matches`;return O.matchStatus={type:`success`,text:`Matching complete — ${l.length} stored ${d} found.`},await j(),await Yr(),await Fn(),l.length}catch(e){return console.error(`Failed to run matching:`,e),O.matchStatus={type:`error`,text:`Failed to run matching. ${B(e)}`},0}finally{O.matchingLoading=!1,Z()}}async function Bn(e,t){if(!O.isAdmin){O.adminMessage={type:`error`,text:`You do not have access to this page.`},Z();return}O.adminSubmitting=!0,O.adminMessage=null,Z();try{if(!v)throw Error(`Supabase client is not configured.`);let n=Object.fromEntries(e.entries()),r=String(n.sourceName||n.source||`Manual`).trim()||`Manual`,i=String(n.title||``).trim();if(!i)throw Error(`Title is required.`);let a=String(n.description||``).trim()||`Manual opportunity: ${i}`,o={source_id:await Wn(r),external_id:`manual-${Date.now()}`,title:i,buyer:String(n.buyer||``).trim()||null,category:String(n.category||``).trim()||null,type:String(n.type||``).trim()||`tender`,description:a,deadline:n.deadline||null,published_date:n.publishedDate||n.published_date||null,location:String(n.location||``).trim()||null,estimated_value:n.estimatedValue||n.estimated_value?Number(n.estimatedValue||n.estimated_value):null,currency:`ISK`,url:n.url||null,cpv_code:n.cpvCode||n.cpv_code||null,requirements:Ce(n.requirements),keywords:Ce(n.keywords),difficulty:String(n.difficulty||``).trim()||`medium`,status:String(n.status||``).trim()||`open`,raw_payload:{created_from:`admin`,source_name:r}},{error:s}=await v.from(`opportunities`).insert(o).select().single();if(s)throw console.error(`Supabase insert error:`,s),Error(`${s.message} (${s.code})`);O.adminMessage={type:`success`,text:`Opportunity saved to Supabase.`},O.adminOpportunityDraft=Je(),t?.reset(),await j(),O.companyId&&await zn(),V(`Opportunity added`,`success`)}catch(e){let t=B(e);console.error(`Failed to add opportunity. If this is an RLS error, allow anon insert/select during development:`,e),O.adminMessage={type:`error`,text:`Failed to save opportunity. ${t}`},Z()}finally{O.adminSubmitting=!1,Z()}}async function Vn(t){if(!O.isAdmin){O.adminMessage={type:`error`,text:`You do not have access to this page.`},Z();return}O.adminDeletingId=t,O.adminMessage=null,Z();try{if(!v)throw Error(`Supabase client is not configured.`);let{error:n}=await v.from(`opportunities`).delete().eq(`id`,t);if(n)throw n;O.saved=O.saved.filter(e=>e!==t),O.ignored=O.ignored.filter(e=>e!==t),Yn(e.saved,O.saved),Yn(e.ignored,O.ignored),O.adminMessage={type:`success`,text:`Opportunity deleted from Supabase.`},await j(),await ln(),V(`Opportunity deleted`,`success`)}catch(e){let t=B(e);console.error(`Failed to delete opportunity. If this is an RLS error, allow anon delete/select during development:`,e),O.adminMessage={type:`error`,text:`Failed to delete opportunity. ${t}`},Z()}finally{O.adminDeletingId=null,Z()}}async function Hn(e,t){if(!O.isAdmin){O.adminMessage={type:`error`,text:`You do not have access to this page.`},Z();return}O.adminUpdatingId=e,O.adminMessage=null,Z();try{if(!v)throw Error(`Supabase client is not configured.`);let{error:n}=await v.from(`opportunities`).update({status:t}).eq(`id`,e);if(n)throw n;O.adminMessage={type:`success`,text:t===`open`?`Opportunity marked relevant.`:`Opportunity hidden.`},await j(),await ln(),V(t===`open`?`Marked relevant`:`Opportunity hidden`,`success`)}catch(e){let t=B(e);console.error(`Failed to update opportunity status:`,e),O.adminMessage={type:`error`,text:`Failed to update opportunity. ${t}`},Z()}finally{O.adminUpdatingId=null,Z()}}async function Un(e,t){if(!O.isAdmin){O.adminMessage={type:`error`,text:`You do not have access to this page.`},Z();return}let n=O.opportunities.find(t=>t.id===e);if(!n)return;let r={include:{opportunity_intent:`confirmed_tender`,quality_status:`confirmed_tender`,hidden_from_reports:!1,admin_report_status:`include`},hide:{hidden_from_reports:!0,admin_report_status:`hidden`},noise:{opportunity_intent:`not_opportunity`,quality_status:`needs_review`,hidden_from_reports:!0,admin_report_status:`noise`},confirmed_tender:{opportunity_intent:`confirmed_tender`,quality_status:`confirmed_tender`,hidden_from_reports:!1,admin_report_status:`include`},early_opportunity:{opportunity_intent:`early_opportunity`,quality_status:`early_signal`,hidden_from_reports:!1,admin_report_status:`include`}}[t];if(r){O.adminUpdatingId=e,O.adminMessage=null,Z();try{if(!v)throw Error(`Supabase client is not configured.`);let t={...n.rawPayload||{},...r,admin_reviewed_at:new Date().toISOString()},{error:i}=await v.from(`opportunities`).update({raw_payload:t}).eq(`id`,e);if(i)throw i;O.adminMessage={type:`success`,text:`Report visibility updated.`},await j(),V(`Report visibility updated`,`success`)}catch(e){let t=B(e);console.error(`Failed to update report visibility:`,e),O.adminMessage={type:`error`,text:`Failed to update report visibility. ${t}`},Z()}finally{O.adminUpdatingId=null,Z()}}}async function Wn(e){if(!v)throw Error(`Supabase client is not configured`);let t=e&&e.trim()?e.trim():`Manual`,{data:n,error:r}=await v.from(`sources`).select(`id`).eq(`name`,t).maybeSingle();if(r)throw console.error(`Source select error:`,r),r;if(n&&n.id)return n.id;let{data:i,error:a}=await v.from(`sources`).insert({name:t,source_type:`manual`,is_active:!0,notes:`Created from VerkRadar admin page`}).select(`id`).single();if(a)throw console.error(`Source insert error:`,a),a;return i.id}function B(e){return e?typeof e==`string`?e:[e.message,e.details,e.hint,e.code].filter(Boolean).join(` `):`Unknown error`}function Gn(e,t=`login`){let n=String(e?.message||e||``).toLowerCase(),r=String(e?.code||e?.status||``).toLowerCase();return n.includes(`invalid login credentials`)||n.includes(`invalid_credentials`)||r.includes(`invalid_credentials`)?D(`emailOrPasswordIncorrect`):n.includes(`email not confirmed`)?D(`confirmEmailBeforeLogin`):Kn(e)?D(`signupExistingAccount`):n.includes(`password`)&&n.includes(`characters`)?D(`passwordTooShort`):n.includes(`rate limit`)||n.includes(`too many`)?D(`tooManyAttempts`):D(t===`signup`?`couldNotCreateAccount`:`couldNotLogin`)}function Kn(e){let t=String(e?.message||e||``).toLowerCase(),n=String(e?.code||e?.status||``).toLowerCase();return t.includes(`user already registered`)||t.includes(`already registered`)||t.includes(`already exists`)||n.includes(`user_already_exists`)||n.includes(`email_exists`)}function V(e,t=`success`){O.toast={message:e,type:t},Z(),clearTimeout(window.__toastTimeout),window.__toastTimeout=setTimeout(()=>{O.toast=null,Z()},2500)}function qn(t){localStorage.setItem(e.profile,JSON.stringify(t))}function Jn(e){try{let t=localStorage.getItem(e);return t?JSON.parse(t):[]}catch{return[]}}function Yn(e,t){localStorage.setItem(e,JSON.stringify(t))}function Xn(e){return C(e).join(`, `)}function Zn(e){if(e==null||e===``)return null;let t=Number(e);return Number.isFinite(t)?t:null}function Qn(e){return String(e||``).trim().toLowerCase()}function $n(e,t=O.profileDraft?.industry){return i[e]?.[t]||[]}function er(e,t){if(![`services`,`includeKeywords`,`excludeKeywords`].includes(e)||!t)return;H();let n=Array.isArray(O.profileDraft[e])?O.profileDraft[e]:[],r=Qn(t),i=n.some(e=>Qn(e)===r);O.profileDraft[e]=i?n.filter(e=>Qn(e)!==r):[...n,t],U(),Z()}function tr({field:e,title:t,values:n,selectedValues:r}){if(!n.length)return``;let i=Array.isArray(r)?r:[];return`
    <div class="suggestion-group">
      <div class="suggestion-group-head">
        <span>${T(t)}</span>
      </div>
      <div class="suggestion-chips">
        ${n.map(t=>{let n=i.some(e=>Qn(e)===Qn(t));return`
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
  `}function H(){if(!O.profileDraft){if(O.profile){O.profileDraft=nr(O.profile);return}O.profileDraft=Ke()}}function nr(e){return{...e,services:C(e.services),includeKeywords:C(e.includeKeywords),excludeKeywords:C(e.excludeKeywords),locations:C(e.locations),serviceAreas:C(e.serviceAreas)}}function U(){O.profileDraftDirty=!0,O.profileSaved=!1,O.profileSaveMessage=null,O.profileSaveError=null}function rr(e){O.profileDraft=nr(e||Ke()),O.profileDraftDirty=!1}function ir(e){H();let t=new FormData(e),n={...O.profileDraft};W(e,`companyName`)&&(n.companyName=String(t.get(`companyName`)||``).trim()),W(e,`contactEmail`)&&(n.contactEmail=String(t.get(`contactEmail`)||``).trim()),W(e,`website`)&&(n.website=String(t.get(`website`)||``).trim()),W(e,`industry`)&&(n.industry=String(t.get(`industry`)||``)),W(e,`services`)&&(n.services=S(t.get(`services`))),W(e,`includeKeywords`)&&(n.includeKeywords=S(t.get(`includeKeywords`))),W(e,`excludeKeywords`)&&(n.excludeKeywords=S(t.get(`excludeKeywords`))),W(e,`locations`)&&(n.locations=t.getAll(`locations`)),W(e,`baseLocation`)&&(n.baseLocation=String(t.get(`baseLocation`)||``)),W(e,`serviceAreas`)&&(n.serviceAreas=S(t.get(`serviceAreas`))),W(e,`willingToTravel`)&&(n.willingToTravel=t.get(`willingToTravel`)===`on`),W(e,`nationalProjects`)&&(n.nationalProjects=t.get(`nationalProjects`)===`on`),W(e,`remoteProjects`)&&(n.remoteProjects=t.get(`remoteProjects`)===`on`),W(e,`minimumProjectValueForTravel`)&&(n.minimumProjectValueForTravel=String(t.get(`minimumProjectValueForTravel`)||``)),W(e,`minProjectValue`)&&(n.minProjectValue=String(t.get(`minProjectValue`)||``)),W(e,`maxProjectValue`)&&(n.maxProjectValue=String(t.get(`maxProjectValue`)||``)),W(e,`allowUnknownValue`)&&(n.allowUnknownValue=t.get(`allowUnknownValue`)===`on`),W(e,`reportFrequency`)&&(n.reportFrequency=String(t.get(`reportFrequency`)||`weekly`)),W(e,`reportDay`)&&(n.reportDay=String(t.get(`reportDay`)||`monday`)),W(e,`deadlineReminders`)&&(n.deadlineReminders=t.get(`deadlineReminders`)===`on`),W(e,`includeLowConfidence`)&&(n.includeLowConfidence=t.get(`includeLowConfidence`)===`on`),O.profileDraft=n,U()}function W(e,t){return!!e.querySelector(`[name="${CSS.escape(t)}"]`)}function ar(){return H(),{...O.profileDraft,companyName:String(O.profileDraft.companyName||``).trim(),contactEmail:String(O.profileDraft.contactEmail||``).trim(),website:String(O.profileDraft.website||``).trim(),industry:String(O.profileDraft.industry||``),services:C(O.profileDraft.services),includeKeywords:C(O.profileDraft.includeKeywords),excludeKeywords:C(O.profileDraft.excludeKeywords),locations:C(O.profileDraft.locations),baseLocation:String(O.profileDraft.baseLocation||``),serviceAreas:C(O.profileDraft.serviceAreas),willingToTravel:!!O.profileDraft.willingToTravel,nationalProjects:!!O.profileDraft.nationalProjects,remoteProjects:!!O.profileDraft.remoteProjects,minimumProjectValueForTravel:Zn(O.profileDraft.minimumProjectValueForTravel),minProjectValue:Zn(O.profileDraft.minProjectValue),maxProjectValue:Zn(O.profileDraft.maxProjectValue)}}function G(e,t){return String(e||``).toLowerCase().includes(String(t||``).toLowerCase())}function or(e){return[e.title,e.description,e.category,e.location,...e.keywords||[]].join(` `).toLowerCase()}var sr=`jarðvinna.gatnagerð.gatna- og stígagerð.gatna og stígagerð.stígagerð.lóðarframkvæmdir.lagnavinna.lagnir.fráveita.vatnslagnir.regnvatnslagnir.malbikun.gangstétt.gangstéttir.stígar.bílastæði.vegagerð.gröftur.fyllingar.grjóthleðsla.jarðvegsskipti.undirbygging.yfirborðsfrágangur.hellulögn.kantsteinn.kantsteinar.landmótun.gatnaframkvæmdir`.split(`.`),cr=[`snjómokstur`,`snjóruðningur`,`hálkuvarnir`,`vetrarþjónusta`,`gangstéttir`,`stofnanalóðir`],lr=[`framkvæmdir`,`framkvæmd`,`útboð`,`verðfyrirspurn`,`tilboð`,`viðhald`,`verktaki`,`verk`],ur=[`innanhússfrágangur`,`innanhúss`,`smíði`,`smíðavinna`,`málun`,`gólfefni`,`innréttingar`,`raflagnir`,`pípulagnir`,`leikskóli`,`skóli`,`húsnæði`,`byggingarvinna`],dr=[`innanhússfrágangur`,`innanhúss`,`smíði`,`smíðavinna`,`málun`,`gólfefni`,`innréttingar`,`raflagnir`,`pípulagnir`,`byggingarvinna`];function K(e){return w(e)}function fr(e,t){let n=K(e);return t.some(e=>n.includes(K(e)))}function q(e){let t=K(e);return lr.some(e=>t===K(e))}function pr(e){let t=K(e);return sr.some(e=>t===K(e))?0:sr.some(e=>t.includes(K(e))||K(e).includes(t))?1:cr.some(e=>t===K(e))?2:q(e)?10:3}function mr(e){return[...e].sort((e,t)=>pr(e)-pr(t)||String(t).length-String(e).length||String(e).localeCompare(String(t)))}function hr(e){let t=K(e);return sr.filter(e=>t.includes(K(e)))}function gr(e){let t=K(e);return cr.filter(e=>t.includes(K(e)))}function _r(e,t){let n=hr(t);if(!n.length||!e.some(q))return e;let r=e.filter(e=>!q(e));return[...new Set([...n,...r])]}function vr(e={}){return fr([e.industry,...Array.isArray(e.services)?e.services:[],...Array.isArray(e.includeKeywords)?e.includeKeywords:[]].filter(Boolean).join(` `),[...sr,...cr,`construction`,`contractor`,`verktaki`,`mannvirki`,`jarðtækni`])}function yr(e={}){return fr([...Array.isArray(e.services)?e.services:[],...Array.isArray(e.includeKeywords)?e.includeKeywords:[]].filter(Boolean).join(` `),cr)}function br(e={}){return fr([...Array.isArray(e.services)?e.services:[],...Array.isArray(e.includeKeywords)?e.includeKeywords:[]].filter(Boolean).join(` `),dr)}function xr(e,t,n,r){if(!vr(e))return{isCivilProfile:!1,serviceHits:n,keywordHits:r,hasWeakOnlyFit:!1,hasIndoorMismatch:!1};let i=or(t),a=fr(i,sr),o=fr(i,cr),s=yr(e),c=o&&s,l=fr(i,ur),u=br(e),d=hr(i),ee=c?gr(i):[],f=n.length>0&&n.every(q),p=r.length>0&&r.every(q),m=[...n,...r].some(e=>!q(e)),te=a||c?[...new Set([...n,...d,...ee])]:n,ne=a||c||m,re=ne?_r(te,i):te.filter(e=>!q(e)),ie=ne?_r(r,i):r.filter(e=>!q(e));return{isCivilProfile:!0,serviceHits:mr(re),keywordHits:mr(ie),hasWeakOnlyFit:!a&&!c&&!m&&(f||p),hasIndoorMismatch:l&&!a&&!u,hasWinterOnlyFit:c&&!a}}function Sr(e){let t=w(e.location);if(Or(t)&&kr(e))return!1;let n=w(`${e.title} ${e.description} ${e.location}`);return[`all iceland`,`iceland`,`island`].some(e=>t.includes(e))?!0:[`national`,`landsvist`,`nationwide`].some(e=>n.includes(e))}function Cr(e){return[...e.locations||[],...e.serviceAreas||[],e.baseLocation].filter(Boolean)}function wr(e,t){let n=Cr(e);if(!n.length)return!1;let r=Qt(t);if(n.includes(`All Iceland`)){let e=w(J(t));return r===`IS`||e.includes(`iceland`)||e.includes(`island`)}if(n.includes(`Remote / Online`)&&J(t)===`Remote / Online`)return!0;if(!r||r!==`IS`&&n.some(e=>w(e).includes(`iceland`)))return!1;let i=w(J(t));return n.some(e=>{let t=w(e);return t?t===i||t===`reykjavik`&&[`reykjavik`,`capital area`,`hofudborgarsvaedid`].includes(i)||t===`capital area`&&[`reykjavik`,`capital area`,`hofudborgarsvaedid`].includes(i)?!0:i.includes(t)||t.includes(i):!1})}function Tr(e,t){return e?wr(e,t)?`local_match`:e.locations?.includes(`Remote / Online`)&&J(t)===`Remote / Online`?`remote_match`:Sr(t)&&(Dr(t)||Qt(t)===`IS`)?`national_match`:J(t)===`Remote / Online`&&e.remoteProjects?`remote_match`:Dr(t)&&(e.nationalProjects||e.willingToTravel)?`outside_area_possible`:`outside_area_low_confidence`:`outside_area_low_confidence`}function Er(e,t){let n=Tr(e,t);return n===`local_match`?`Local match`:n===`national_match`?`National opportunity`:n===`remote_match`?`Remote opportunity`:n===`outside_area_possible`?`Outside base area but travel allowed`:n===`outside_area_low_confidence`?`Outside selected area; low-confidence location match`:null}function Dr(e){if(Qt(e)===`IS`)return!0;let t=w(J(e));return[`iceland`,`island`,`all iceland`,`reykjavik`,`capital area`,`hofudborgarsvaedid`,`east iceland`,`west iceland`,`north iceland`,`south iceland`,`sudurnes`].some(e=>t.includes(e))}function J(e={}){let t=String(e.location||``).trim(),n=w(t);return t&&!Or(n)?t:kr(e)||t}function Or(e){return!e||e===`unknown`||e===`all iceland`||e===`iceland`||e===`island`}function kr(e={}){let t=e.rawPayload&&typeof e.rawPayload==`object`?e.rawPayload:{},n=w([e.title,e.description,e.buyer,t.buyer,t.extracted_buyer,t.source_name,t.extracted_location,t.location].filter(Boolean).join(` `));return n.includes(`reykjavik`)||n.includes(`reykjavikurborg`)||n.includes(`hofudborgarsvaedid`)?`Reykjavík / Höfuðborgarsvæðið`:``}function Ar(e,t){return t.estimatedValue?!(e.minProjectValue&&t.estimatedValue<e.minProjectValue||e.maxProjectValue&&t.estimatedValue>e.maxProjectValue):!!e.allowUnknownValue}function jr(e,t){let n=String(e.industry||``).toLowerCase(),r=String(t.category||``).toLowerCase();return r.includes(n)||n.includes(r)}function Mr(e,t){if(!e)return{...t,matchScore:0,matchLabel:`Weak match`,matchReasons:[],risks:[],nextSteps:[]};let n=or(t),r=0,i=[],a=[];jr(e,t)&&(r+=35,i.push(`Matches your ${e.industry} industry`));let o=xr(e,t,(e.services||[]).filter(e=>G(n,e)),(e.includeKeywords||[]).filter(e=>G(n,e)));for(let e of o.serviceHits)r+=10,i.push(`Mentions your service: ${e}`);for(let e of o.keywordHits)r+=8,i.push(`Contains your keyword: ${e}`);let s=Tr(e,t),c=Er(e,t);if(s===`local_match`)r+=22,i.push(c);else if(s===`national_match`)r+=16,i.push(c);else if(s===`remote_match`)r+=14,i.push(c);else if(s===`outside_area_possible`){let n=Number(e.minimumProjectValueForTravel||0),o=n&&t.estimatedValue&&Number(t.estimatedValue)<n;r+=o?-4:4,i.push(c),a.push(o?`Outside base area and below your preferred travel project value`:`Check travel cost, project size and delivery capacity`)}else r-=8,a.push(`Outside selected area; location match is low confidence`);o.hasWinterOnlyFit&&s===`local_match`&&(r+=12,i.push(`Local winter service fit`)),Ar(e,t)?(r+=10,t.estimatedValue&&i.push(`Project value is inside your preferred range`)):(r-=25,a.push(`Estimated project value is outside your preferred range`));let l=y(t.deadline);t.deadline?l>=0&&l<=30?(r+=8,i.push(`Deadline is coming up soon`)):l<0&&(r-=50,a.push(`Deadline has passed`)):a.push(li(t));for(let t of e.excludeKeywords||[])G(n,t)&&(r-=18,a.push(`Contains exclude keyword: ${t}`));return(t.requirements||[]).some(e=>G(e,`certification`)||G(e,`license`))&&a.push(`May require certification or license documentation`),t.difficulty===`high`&&a.push(`This appears to be a higher-complexity opportunity`),o.hasWeakOnlyFit&&(r=Math.min(r,40),a.push(`Only broad construction/procurement terms matched; verify fit`)),o.hasIndoorMismatch&&(r=Math.min(r-20,40),a.push(`Appears to be indoor/building finishing work outside your core civil services`)),o.hasWinterOnlyFit&&(r=Math.min(r,68),a.push(`Winter/snow service fit; verify capacity and scope`)),r=Math.max(0,Math.min(100,Math.round(r))),{...t,matchScore:r,matchLabel:Y(r),matchReasons:i.slice(0,5),risks:[...new Set(a)].slice(0,4),nextSteps:[`Open the source documents`,`Confirm mandatory requirements`,`Check capacity and profitability`,`Prepare questions before the deadline`]}}function Nr(e){if(!O.profile||!vr(O.profile))return e;let t=Mr(O.profile,e);return Number(t.matchScore||0)>=Number(e.matchScore||0)?e:{...e,matchScore:t.matchScore,matchLabel:t.matchLabel,matchReasons:t.matchReasons,risks:t.risks,nextSteps:t.nextSteps}}function Y(e){return e>=85?`Strong match`:e>=65?`Good match`:e>=45?`Possible match`:`Weak match`}function Pr(){if(O.storedMatches.length)return O.storedMatches.filter(as).filter(Lr).filter(N).filter(e=>!O.ignored.includes(e.id)).map(Nr).sort((e,t)=>t.matchScore-e.matchScore||y(e.deadline)-y(t.deadline));let e=O.profile||(O.user?null:We);return e?O.opportunities.filter(as).map(t=>Mr(e,t)).filter(Lr).filter(N).filter(e=>!O.ignored.includes(e.id)).sort((e,t)=>t.matchScore-e.matchScore||y(e.deadline)-y(t.deadline)):[]}function Fr(){return O.storedMatches.filter(as).filter(Lr).filter(N).filter(e=>!O.ignored.includes(e.id)).sort((e,t)=>t.matchScore-e.matchScore||y(e.deadline)-y(t.deadline))}function Ir(){let e=O.profile||(O.user?null:We);return e?O.opportunities.filter(as).map(t=>Mr(e,t)).filter(Lr).filter(N).filter(e=>!O.ignored.includes(e.id)).sort((e,t)=>qr(e)-qr(t)||t.matchScore-e.matchScore||y(e.deadline)-y(t.deadline)):[]}function Lr(e){return O.isAdmin&&O.filters.label===`all_opportunities`?!0:Wo(e)}function Rr(e={}){return String(e.safetyStatus||e.safety_status||`auto_approved`)}function zr(e){return[...Fr(),...Ir()].find(t=>t.id===e)}function Br(){let e=Vr([`all_opportunities`,`needs_review`].includes(O.filters.label)?Ir():Fr());if(O.filters.label===`recommended`){let t=e.filter(Ur),n=e.filter(Wr);return Kr(t.length?t:n)}return Kr(e.filter(Hr))}function Vr(e){return e.filter(e=>{let t=O.filters.search.toLowerCase();return!(t&&!or(e).includes(t)||O.filters.category!==`all`&&e.category!==O.filters.category||O.filters.location!==`all`&&e.location!==O.filters.location||O.filters.type!==`all`&&e.type!==O.filters.type||O.filters.savedOnly&&!O.saved.includes(e.id))})}function Hr(e){let t=O.filters.label;return t===`all`||t===`all_opportunities`?!0:t===`needs_review`?P(e.qualityStatus,e)===`needs_review`:t===`recommended`?Ur(e):t===`strong`?e.matchLabel===`Strong match`||e.matchScore>=85:t===`possible`?[`Possible match`,`Weak match`].includes(e.matchLabel)||e.matchScore<65:e.matchLabel===t}function Ur(e){return!Gr(e)||Go(e)?!1:e.matchScore>=85||e.matchLabel===`Strong match`?!0:!(P(e.qualityStatus,e)===`needs_review`||Zt(L(e)))}function Wr(e){return!Gr(e)||Go(e)?!1:e.matchScore>=85||e.matchLabel===`Strong match`?!0:!(P(e.qualityStatus,e)===`needs_review`||Zt(L(e)))}function Gr(e){return[`Strong match`,`Good match`,`Possible match`].includes(e.matchLabel)||e.matchScore>=45}function Kr(e){return[...e].sort((e,t)=>qr(e)-qr(t)||t.matchScore-e.matchScore||y(e.deadline)-y(t.deadline))}function qr(e){let t=F(e);if(t===`confirmed_tender`)return 0;if(t===`early_opportunity`)return 1;if(t===`market_signal`)return 2;if(t===`news_context`)return 8;if(t===`not_opportunity`)return 9;let n=P(e.qualityStatus,e);return n===`confirmed_tender`?0:n===`early_signal`?1:2}function Jr({visibleCount:e,storedMatchCount:t,filteredStoredCount:n,availableCount:r,recommendedCount:i,strongCount:a,companyName:o}){let s=O.filters.label;return O.language===`is`?s===`all_opportunities`?`${r} tækifæri eru til í kerfinu. Sýni ${e} sýnileg tækifæri til yfirferðar.`:s===`needs_review`?`${r} tækifæri eru til í kerfinu. Sýni ${e} atriði sem þarf að staðfesta.`:s===`all`?`${t} tækifæri fundust sem gætu passað við ${o}. Sýni ${e}.`:s===`strong`?`${t} tækifæri fundust sem gætu passað við ${o}. Sýni ${e} sterkar samsvaranir.`:s===`recommended`?e?`${t} tækifæri fundust sem gætu passað við ${o}. Sýni ${e} ráðlögð eða möguleg tækifæri.`:a>0?`${a} sterkar samsvaranir eru til fyrir ${o}, en þær eru faldar af núverandi síum.`:n>0?`${n} tækifæri eru falin af gæðasíum. Notið Allar samsvaranir eða Þarfnast staðfestingar til að skoða þau.`:`Engar ráðlagðar samsvaranir fyrir ${o} enn. ${r} tækifæri eru til í kerfinu, en ekkert passar nógu sterkt við þennan prófíl.`:s===`possible`?`${t} tækifæri fundust sem gætu passað við ${o}. Sýni ${e} mögulegar eða veikar samsvaranir.`:`${t} tækifæri fundust sem gætu passað við ${o}. Sýni ${e} tækifæri.`:s===`all_opportunities`?`${r} opportunities are available in the system. Showing ${e} visible opportunities for inspection.`:s===`needs_review`?`${r} opportunities are available in the system. Showing ${e} needs-review opportunities.`:s===`all`?`${t} opportunities may fit ${o}. Showing all ${e}.`:s===`strong`?`${t} opportunities may fit ${o}. Showing ${e} strong matches.`:s===`recommended`?e?`${t} opportunities may fit ${o}. Showing ${e} recommended or possible matches.`:a>0?`${a} strong ${a===1?`match exists`:`matches exist`} for ${o}, but ${a===1?`it is`:`they are`} hidden by your current filters.`:n>0?`${n} ${n===1?`opportunity is`:`opportunities are`} hidden from Recommended by quality checks. Use All matches or Needs review to inspect them.`:`No recommended matches for ${o} yet. ${r} opportunities are available in the system, but none match this profile strongly enough.`:s===`possible`?`${t} opportunities may fit ${o}. Showing ${e} possible or weak matches.`:`${t} opportunities may fit ${o}. Showing ${e} ${s.toLowerCase()} opportunities.`}async function Yr(){if(!v||!O.companyId){O.opportunityActions=[];return}try{let{data:e,error:t}=await v.from(`company_opportunity_actions`).select(`id, company_id, opportunity_id, action_type, note, created_at, updated_at`).eq(`company_id`,O.companyId);if(t)throw t;O.opportunityActions=e||[],O.saved=O.opportunityActions.filter(e=>[`saved`,`watched`].includes(e.action_type)).map(e=>e.opportunity_id),O.ignored=O.opportunityActions.filter(e=>e.action_type===`ignored`).map(e=>e.opportunity_id)}catch(e){console.error(`Failed to load company opportunity actions:`,e),O.opportunityActions=[],O.saved=[],O.ignored=[]}}async function Xr(t,n){if(!v||!O.companyId){(n===`saved`||n===`watched`)&&(O.saved=Array.from(new Set([...O.saved,t])),O.ignored=O.ignored.filter(e=>e!==t)),n===`ignored`&&(O.ignored=Array.from(new Set([...O.ignored,t])),O.saved=O.saved.filter(e=>e!==t)),Yn(e.saved,O.saved),Yn(e.ignored,O.ignored);return}let{error:r}=await v.from(`company_opportunity_actions`).upsert({company_id:O.companyId,opportunity_id:t,action_type:n,updated_at:new Date().toISOString()},{onConflict:`company_id,opportunity_id`});if(r)throw r;await Yr()}async function Zr(t){if(!v||!O.companyId){O.saved=O.saved.filter(e=>e!==t),O.ignored=O.ignored.filter(e=>e!==t),Yn(e.saved,O.saved),Yn(e.ignored,O.ignored);return}let{error:n}=await v.from(`company_opportunity_actions`).delete().eq(`company_id`,O.companyId).eq(`opportunity_id`,t);if(n)throw n;await Yr()}async function Qr(e){let t=`Opportunity saved`;try{O.saved.includes(e)?(await Zr(e),t=`Removed from saved`):await Xr(e,`saved`),V(t,`success`),Z()}catch(e){console.error(`Failed to update saved opportunity:`,e),V(`Could not update saved opportunity`,`error`)}}async function $r(e){try{await Xr(e,`ignored`),O.selectedOpportunityId===e&&(O.selectedOpportunityId=null),V(`Opportunity hidden`,`success`),Z()}catch(e){console.error(`Failed to ignore opportunity:`,e),V(`Could not hide opportunity`,`error`)}}async function ei(e){try{await Zr(e),Z()}catch(e){console.error(`Failed to unignore opportunity:`,e),V(`Could not restore opportunity`,`error`)}}function ti(e){O.selectedOpportunityId=e,document.body.classList.add(`modal-open`),Z()}function ni(){ri(),Z()}function ri(){O.selectedOpportunityId=null,document.body.classList.remove(`modal-open`)}function ii(){if(!O.selectedOpportunityId){document.body.classList.remove(`modal-open`);return}if(!zr(O.selectedOpportunityId)){O.selectedOpportunityId=null,document.body.classList.remove(`modal-open`);return}document.body.classList.add(`modal-open`)}function ai(e){if(!e)return{label:$(Be),className:`deadline danger`};let t=y(e);return t===999?{label:$(Be),className:`deadline danger`}:{label:D(`daysLeft`,{count:t}),className:t<=14?`deadline danger`:`deadline`}}function oi(e){let t=String(e||``).trim().match(/^(\d{4}-\d{2}-\d{2})T(\d{2}):(\d{2})/);return t?`${Bo(t[1])} kl. ${t[2]}:${t[3]}`:``}function si(e){return e?b(e):$(Be)}function ci(e){return e?.deadlineAt?oi(e.deadlineAt):e?.deadline?Bo(e.deadline):$(li(e))}function li(e){if(I(e)){let t=Rt(e);return[`tender_awarded`,`awarded`,`already_tendered`,`announced`].includes(t)?`Tender appears already announced/awarded — verify source article.`:t===`upcoming_tender`?`Formal tender deadline not found yet — monitor source article.`:Ve}return String(e?.rawPayload?.deadline_warning||``).trim()||Be}function ui(e){if(!e?.deadline)return{label:$(li(e)),className:`deadline danger`};let t=oi(e.deadlineAt);return t?{label:t,className:y(e.deadline)<=14?`deadline danger`:`deadline`}:ai(e.deadline)}function X(e){return e?De(e,`ISK`):O.language===`is`?`Ekki gefið upp`:`Value unknown`}function di(){return[...new Set(O.opportunities.map(e=>e.category))].sort()}function fi(){return[...new Set(O.opportunities.map(e=>e.location))].sort()}function pi(){return[...new Set(O.opportunities.map(e=>e.type))].sort()}function mi(e){return e===`Strong match`?`badge strong`:e===`Good match`?`badge good`:e===`Possible match`?`badge possible`:`badge weak`}function Z(){let e=document.getElementById(`app`),t=O.route,n=``;if(n=O.isBooting||!O.authLoaded||!O.profileLoaded||!O.adminLoaded?vi():t===`/`?ga():t===`/login`?Fi():t===`/signup`?Ri():t===`/forgot-password`?Ii():t===`/reset-password`?Li():t===`/onboarding`?_a():t===`/dashboard`?O.user?Ea():z():t===`/report`?O.user?Co():z():t===`/pricing`?Ds():t===`/privacy`?Ci():t===`/terms`?wi():t===`/data-sources`?Ti():t===`/cookies`?Ei():t===`/security`?Di():t===`/contact`?Oi():t===`/settings`?O.user?Os():z():t===`/admin`?O.user?O.isAdmin?Ka():Sn():z():ga(),e.innerHTML=n,O.selectedOpportunityId){let t=zr(O.selectedOpportunityId);t?(document.body.classList.add(`modal-open`),e.insertAdjacentHTML(`beforeend`,Ga(t))):ii()}else ii()}function hi(e){let t=window.scrollX,n=window.scrollY,r=gi(e),i=typeof e.selectionStart==`number`?e.selectionStart:null,a=typeof e.selectionEnd==`number`?e.selectionEnd:null;Z(),requestAnimationFrame(()=>{if(window.scrollTo(t,n),!r)return;let e=document.querySelector(r);e&&(e.focus({preventScroll:!0}),i!==null&&a!==null&&typeof e.setSelectionRange==`function`&&[`text`,`search`,`email`,`url`,`tel`,`password`,``].includes(e.type||``)&&e.setSelectionRange(i,a))})}function gi(e){return e?.dataset?e.dataset.adminFilter?`[data-admin-filter="${_i(e.dataset.adminFilter)}"]`:e.dataset.adminCompanyFilter?`[data-admin-company-filter="${_i(e.dataset.adminCompanyFilter)}"]`:``:``}function _i(e){return window.CSS?.escape?window.CSS.escape(String(e)):String(e).replace(/["\\]/g,`\\$&`)}function vi(){return Q(`
    <div class="app-loader">
      <div class="loader-mark" aria-label="${T(D(`loadingLabel`))}">
        <span></span>
      </div>
    </div>
  `)}function Q(e){let t=!!O.user,n=!!O.profile,r=yi(t,n),i=ji(t,n);return`
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
          ${t&&!O.isMobileMenuOpen?Mi():``}
        </div>
      </div>
      ${ki(r,i,t)}
    </header>
    <main>${e}</main>
    ${bi()}
    ${O.toast?`
      <div class="toast toast-${O.toast.type}">
        <span class="toast-dot"></span>
        <span>${T(O.toast.message)}</span>
      </div>
    `:``}
  `}function yi(e=!!O.user,t=!!O.profile){let n=e?t?[[D(`navDashboard`),`/dashboard`],[D(`navReport`),`/report`],[D(`navSettings`),`/settings`]]:[[D(`setupCompany`),`/onboarding`],[D(`navSettings`),`/settings`]]:[[D(`navHowItWorks`),`#how-it-works`],[D(`navSampleReport`),`#sample-report`],[D(`navPricing`),`/pricing`]];return e&&O.isAdmin&&n.push([`Admin`,`/admin`]),n}function bi(){let e=[[D(`privacyPolicy`),`/privacy`],[D(`termsOfService`),`/terms`],[D(`dataSources`),`/data-sources`],[D(`security`),`/security`],[D(`contact`),`/contact`]];return`
    <footer class="site-footer">
      <div>
        <strong>VerkRadar</strong>
        <p>${T(D(`footerText`))}</p>
      </div>
      <nav aria-label="Legal and trust pages">
        ${e.map(([e,t])=>`<button type="button" data-action="go" data-href="${t}">${e}</button>`).join(``)}
      </nav>
    </footer>
  `}function xi(e){return s(e,O.language)}function Si(e){let t=xi(e);return Q(re({language:O.language,escapeHtml:T,eyebrow:t.eyebrow,title:t.title,intro:t.intro,sections:t.sections}))}function Ci(){return Si(`privacy`)}function wi(){return Si(`terms`)}function Ti(){return Si(`data`)}function Ei(){return Ci()}function Di(){return Si(`security`)}function Oi(){return Si(`contact`)}function ki(e,t,n){return`
    <nav class="mobile-menu-panel" id="mobile-menu">
      <div class="mobile-menu-scroll">
      <div class="mobile-menu-links">
        ${e.map(([e,t])=>t.startsWith(`#`)?`<button type="button" data-action="mobile-scroll-to" data-target="${t.slice(1)}">${e}</button>`:`<button type="button" data-action="mobile-nav" data-href="${t}">${e}</button>`).join(``)}
      </div>
      ${Ai(t,n)}
      </div>
    </nav>
  `}function Ai(e,t){if(!t)return`
      <div class="mobile-account-section">
        ${e?`<button class="btn btn-primary mobile-cta" type="button" data-action="mobile-nav" data-href="${e.href}">${e.label}</button>`:``}
        <button class="btn btn-secondary" type="button" data-action="mobile-nav" data-href="/login">${D(`login`)}</button>
      </div>
    `;let n=O.profile?.companyName||D(`noCompanyProfile`),r=O.user?.email||``;return`
    <div class="mobile-account-section">
      <div class="mobile-account-header">
        <span class="profile-avatar">${T(Ni(n,r))}</span>
        <div>
          <strong>${T(n)}</strong>
          <small>${T(r)}</small>
        </div>
      </div>
      <div class="mobile-account-actions">
        ${O.profile?`<button type="button" data-action="mobile-nav" data-href="/dashboard">${D(`navDashboard`)}</button>
             <button type="button" data-action="mobile-nav" data-href="/settings">${D(`navSettings`)}</button>`:`<button type="button" data-action="mobile-nav" data-href="/onboarding">${D(`setupCompany`)}</button>
             <button type="button" data-action="mobile-nav" data-href="/settings">${D(`navSettings`)}</button>`}
        <button type="button" class="mobile-logout" data-action="logout">${D(`logout`)}</button>
      </div>
    </div>
  `}function ji(e,t){return e?t?null:{href:`/onboarding`,label:D(`createProfile`)}:{href:`/signup`,label:D(`getStarted`)}}function Mi(){let e=O.profile?.companyName||D(`noCompanyProfile`),t=O.user?.email||``,n=Ni(e,t);return`
    <div class="profile-menu">
      <button type="button" class="profile-pill" data-action="toggle-profile-menu" aria-haspopup="menu" aria-expanded="${O.profileMenuOpen?`true`:`false`}">
        <span class="profile-avatar">${T(n)}</span>
        <span class="profile-name">${T(e)}</span>
        <span class="profile-chevron" aria-hidden="true"></span>
      </button>

      ${O.profileMenuOpen&&!O.isMobileMenuOpen&&!nt()?`
        <div class="profile-dropdown" role="menu">
          <div class="profile-dropdown-header">
            <strong>${T(e)}</strong>
            <small>${T(t)}</small>
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
  `}function Ni(e,t){return(e&&![`No company profile`,D(`noCompanyProfile`)].includes(e)?e:t||`VR`).split(/[^a-zA-Z0-9áéíóúýþæöðÁÉÍÓÚÝÞÆÖÐ]+/).filter(Boolean).slice(0,2).map(e=>e[0]).join(``).toUpperCase()||`VR`}function Pi(e,t){return Q(`
    <section class="empty-state">
      <h1>${T(e)}</h1>
      <p>${T(t)}</p>
      <button class="btn btn-primary" data-action="go" data-href="/onboarding">${T(D(`createProfile`))}</button>
      <button class="btn btn-secondary" data-action="load-demo">${T(D(`loadDemoCompany`))}</button>
    </section>
  `)}function Fi(){return O.user?Pi(O.language===`is`?`Þú ert þegar skráð(ur) inn`:`Already logged in`,O.language===`is`?`Opnaðu mælaborðið eða breyttu fyrirtækjaprófílnum.`:`Open your dashboard or edit your company profile.`):Q(l({t:D,escapeHtml:T,authForm:O.authForm,authSubmitting:O.authSubmitting,authMessage:O.authMessage}))}function Ii(){return O.user?Pi(O.language===`is`?`Þú ert þegar skráð(ur) inn`:`Already logged in`,O.language===`is`?`Opnaðu mælaborðið eða breyttu fyrirtækjaprófílnum.`:`Open your dashboard or edit your company profile.`):Q(u({t:D,escapeHtml:T,authForm:O.authForm,authSubmitting:O.authSubmitting,authMessage:O.authMessage}))}function Li(){return Q(d({t:D,escapeHtml:T,authForm:O.authForm,authSubmitting:O.authSubmitting,authMessage:O.authMessage}))}function Ri(){if(O.user){let e=it();return setTimeout(()=>k(e),0),Q(`
      <section class="empty-state">
        <h1>${T(D(`alreadyLoggedInTitle`))}</h1>
        <p>${T(D(`alreadyLoggedInText`))}</p>
      </section>
    `)}return Q(ee({t:D,escapeHtml:T,authForm:O.authForm,authSubmitting:O.authSubmitting,authMessage:O.authMessage}))}function zi(){if(!O.importLoading&&!O.importStatus)return``;if(O.importLoading)return`<section class="import-panel"><strong>Importing TED notices...</strong><p>Fetching recent TED notices and refreshing matches.</p></section>`;let e=O.importStatus||{},t=Array.isArray(e.errors)?e.errors:[],n=O.importedTedOpportunities||[];return`
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
        ${t.length?`<ul class="risk-list">${t.map(e=>`<li>${T(e)}</li>`).join(``)}</ul>`:`<p>TED import completed.</p>`}
        ${t.length?``:`
          <div class="import-result-head">
            <h3>Newest imported TED opportunities</h3>
            <button class="btn btn-secondary" type="button" data-action="go" data-href="/dashboard">View imported opportunities on dashboard</button>
          </div>
          ${n.length?`
            <div class="imported-opportunities">
              ${n.map(Vi).join(``)}
            </div>
          `:`<div class="empty-card">No imported TED opportunities were returned by the latest-results query.</div>`}
        `}
      `:``}
    </section>
  `}function Bi(){if(!O.connectorImportLoading&&!O.connectorTestingSourceId&&!O.connectorImportStatus)return``;if(O.connectorImportLoading||O.connectorTestingSourceId)return`<section class="import-panel"><strong>Running automatic source imports...</strong><p>Fetching enabled RSS/WordPress connectors and refreshing matches when new rows are saved.</p></section>`;let e=O.connectorImportStatus||{},t=Array.isArray(e.errors)?e.errors:[];return`
    <section class="import-panel">
      <div class="import-stats">
        <span><strong>${Number(e.fetched||0)}</strong> fetched</span>
        <span><strong>${Number(e.inserted||0)}</strong> inserted</span>
        <span><strong>${Number(e.updated||0)}</strong> updated</span>
        <span><strong>${Number(e.skipped||0)}</strong> skipped</span>
        <span><strong>${Number(e.matched||0)}</strong> matches</span>
        <span><strong>${Number(e.reports_generated||0)}</strong> reports</span>
      </div>
      ${t.length?`<ul class="risk-list">${t.map(e=>`<li>${T(e)}</li>`).join(``)}</ul>`:`<p>Automatic source import completed.</p>`}
    </section>
  `}function Vi(e){let t=e.url&&e.url!==`#`,n=O.adminUpdatingId===e.id,r=O.adminDeletingId===e.id;return`
    <div class="imported-opportunity-row">
      <div class="imported-opportunity-main">
        <h4>${T(e.title)}</h4>
        <span class="source-pill language-pill">Original language</span>
        <p>${T(ps(e))}</p>
      </div>
      <dl>
        <div>
          <dt>Country / location</dt>
          <dd>${T([e.countryCode,e.location].filter(Boolean).join(` / `)||`Unknown`)}</dd>
        </div>
        <div>
          <dt>Deadline</dt>
          <dd>${T(b(e.deadline))}</dd>
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
  `}function Hi(){return(O.importRuns||[])[0]||null}function Ui(e){let t=String(e||``).toLowerCase();return[`success`,`completed`,`complete`,`connected`].includes(t)?`is-success`:[`running`,`started`,`pending`,`planned`].includes(t)?`is-running`:[`error`,`failed`,`failure`].includes(t)?`is-error`:``}function Wi(){let e=Hi();return O.importRunsLoading&&!e?`
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
        <span class="status-pill ${Ui(e.status)}">${T(e.status||`unknown`)}</span>
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
        <div><span>Started</span><strong>${T(x(e.started_at))}</strong></div>
        <div><span>Finished</span><strong>${T(x(e.finished_at))}</strong></div>
      </div>
      ${e.error?`<div class="admin-message is-error">${T(e.error)}</div>`:``}
      ${Xi(e)}
    </section>
  `:`
      <section class="ops-card automation-status-card">
        <div class="card-header">
          <div>
            <h2>Automation status</h2>
            <p>No automation runs yet.</p>
          </div>
        </div>
        ${O.importRunsError?`<div class="admin-message is-error">${T(O.importRunsError)}</div>`:``}
      </section>
    `}function Gi(){let e=window.VERKRADAR_SUPABASE_URL||`https://asojxjbsgqbfpbepojzh.supabase.co`,t=String(e).match(/^https:\/\/([^.]+)\.supabase\.co/i);return t?`https://supabase.com/dashboard/project/${t[1]}/functions/import-ted/logs`:``}function Ki(){let e=Gi();return`
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
        ${e?`<a class="btn btn-secondary" href="${T(e)}" target="_blank" rel="noreferrer">View Edge Function logs</a>`:``}
      </div>
      <label class="import-mode-control">
        Import mode
        <select data-import-mode ${O.importLoading?`disabled`:``}>
          <option value="nordic" ${O.tedImportMode===`nordic`?`selected`:``}>Nordic only</option>
          <option value="iceland" ${O.tedImportMode===`iceland`?`selected`:``}>Iceland only</option>
          <option value="eu-broad" ${O.tedImportMode===`eu-broad`?`selected`:``}>EU broad test</option>
        </select>
      </label>
      ${zi()}
      ${Bi()}
    </section>
  `}function qi(){let e=O.importRuns||[];return`
    <section class="ops-card">
      <div class="card-header">
        <div>
          <h2>Latest import runs</h2>
          <p>Last ${e.length||0} recorded automation runs.</p>
        </div>
      </div>
      ${O.importRunsError?`<div class="admin-message is-error">${T(O.importRunsError)}</div>`:``}
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
              ${e.map(Ji).join(``)}
            </tbody>
          </table>
        </div>
      `:`<div class="empty-card">No automation runs yet.</div>`}
    </section>
  `}function Ji(e){let t=Xi(e,{compact:!0});return`
    <tr>
      <td>${T(x(e.started_at||e.finished_at))}</td>
      <td>${T(e.run_type||`ted-import`)}</td>
      <td><span class="status-pill ${Ui(e.status)}">${T(e.status||`unknown`)}</span></td>
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
  `}function Yi(e){let t=e?.details;if(!t)return{};if(typeof t==`string`)try{return JSON.parse(t)||{}}catch{return{}}return typeof t==`object`?t:{}}function Xi(e,t={}){let n=Yi(e),r=n.skip_reasons&&typeof n.skip_reasons==`object`?n.skip_reasons:{},i=Array.isArray(n.skipped_samples)?n.skipped_samples:[],a=Array.isArray(n.per_source)?n.per_source:[],o=Object.entries(r).filter(([,e])=>Number(e)>0).sort((e,t)=>Number(t[1])-Number(e[1])).slice(0,5);return!o.length&&!i.length&&!a.length?``:`
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
            <span><strong>${Number(t)}</strong> ${T(Zi(e))}</span>
          `).join(``)}
        </div>
      `:``}
      ${i.length?`
        <div class="import-skip-samples">
          ${i.slice(0,10).map(e=>`
            <div>
              <strong>${T(e.source_name||e.source||`Unknown source`)}</strong>
              <span>${T(e.title||`Untitled item`)}</span>
              <em>${T(Zi(e.reason||`skipped`))}${e.matchedKeyword?`: ${T(e.matchedKeyword)}`:``}${e.final_quality_status?` · ${T(Pa(e.final_quality_status))}`:``}</em>
            </div>
          `).join(``)}
        </div>
      `:``}
    </div>
  `}function Zi(e){return{missing_title:`missing title`,missing_url:`missing URL`,duplicate_existing_opportunity:`duplicate existing opportunity`,no_include_keyword_match:`no include keyword match`,matched_exclude_keyword:`matched exclude keyword`,low_quality_needs_review:`low quality needs review`,unsupported_connector:`unsupported connector`,parse_failed:`parse failed`,fetch_failed:`fetch failed`}[e]||String(e||`skipped`).replaceAll(`_`,` `)}function Qi(){let e=O.importedTedOpportunities||[];return`
    <section class="ops-card">
      <div class="card-header">
        <div>
          <h2>Latest TED opportunities</h2>
          <p>Newest imported EU TED rows for review.</p>
        </div>
      </div>
      ${O.importedTedOpportunitiesError?`<div class="admin-message is-error">${T(O.importedTedOpportunitiesError)}</div>`:``}
      ${O.importedTedOpportunitiesLoading&&!e.length?`<div class="empty-card">Loading TED opportunities...</div>`:e.length?`
        <div class="imported-opportunities">
          ${e.map(Vi).join(``)}
        </div>
      `:`<div class="empty-card">No TED opportunities loaded yet.</div>`}
    </section>
  `}function $i(){let e=O.adminReports||[];return`
    <section class="ops-card">
      <div class="card-header">
        <div>
          <h2>Latest reports generated</h2>
          <p>Newest saved weekly report records.</p>
        </div>
      </div>
      ${O.adminReportsError?`<div class="admin-message is-error">${T(O.adminReportsError)}</div>`:``}
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
              ${e.map(sa).join(``)}
            </tbody>
          </table>
        </div>
      `:`<div class="empty-card">No generated reports yet.</div>`}
      ${O.selectedAdminReportId?ca():``}
    </section>
  `}function ea(e){return{eu_ted:`EU TED`,ted:`EU TED`,api:`EU TED`,utbodsvefur:`Útboðsvefur`,municipal_website:`Municipal websites`,public_institution_page:`Public institution pages`,private_manual:`Private/manual leads`,manual:`Private/manual leads`,tender_portal:`Tender portals`}[e]||e||`Unknown`}function ta(e){return{ted_api:`TED API`,rss_feed:`RSS feed`,wordpress_rest:`WordPress REST`,official_api:`Official API`,page_monitor_allowed:`Allowed page monitor`,manual_fallback:`Manual fallback`,planned:`Planned`,permission_required:`Permission required`}[e]||e||`Planned`}function na(e=[]){return e.reduce((e,t)=>{let n=t.raw_payload&&typeof t.raw_payload==`object`?t.raw_payload:{},r=P(n.quality_status||n.qualityStatus,t);return e.active+=1,r===`confirmed_tender`?e.confirmed+=1:r===`early_signal`?e.early+=1:e.needsReview+=1,e},{active:0,confirmed:0,early:0,needsReview:0})}function ra(e){let t=e.source_status||{},n=e.source_connectors||{},r=String(n.status||t.status||``).toLowerCase(),i=String(n.connector_type||``).toLowerCase();return r.includes(`error`)?{label:`Error`,className:`is-error`,tone:`error`}:r===`permission_required`||i===`permission_required`?{label:`Permission required`,className:`is-permission`,tone:`planned`}:n.enabled&&[`connected`,`success`,`completed`,`complete`].includes(r)||n.enabled&&[`rss_feed`,`wordpress_rest`,`ted_api`].includes(i)?{label:`Connected`,className:`is-success`,tone:`connected`}:r===`planned`||i===`planned`?{label:`Planned`,className:`is-planned`,tone:`planned`}:{label:`Disabled`,className:`is-disabled`,tone:`disabled`}}function ia(){let e=O.sourceCoverage||[];return`
    <section class="ops-card">
      <div class="card-header">
        <div>
          <h2>Source coverage</h2>
          <p>Connected and planned lead sources for Icelandic opportunity coverage.</p>
        </div>
      </div>
      ${O.sourceCoverageError?`<div class="admin-message is-error">${T(O.sourceCoverageError)}</div>`:``}
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
              ${e.map(aa).join(``)}
            </tbody>
          </table>
        </div>
      `:`<div class="empty-card">No sources configured yet.</div>`}
    </section>
  `}function aa(e){let t=e.source_status||{},n=e.source_connectors||{},r=ra(e),i=n.enabled&&[`rss_feed`,`wordpress_rest`].includes(n.connector_type),a=O.connectorTestingSourceId===e.id,o=e.opportunityStats||{active:Number(t.active_opportunities_count||0),confirmed:0,early:0,needsReview:0},s=e.latestOpportunities||[],c=O.expandedSourceId===e.id,l=n.last_error||t.last_error||``;return`
    <tr class="${r.tone===`connected`?`source-row-connected`:`source-row-muted`}">
      <td>
        <strong>${T(e.name||`Unknown source`)}</strong>
        ${n.endpoint_url||e.base_url?`<br><a href="${T(n.endpoint_url||e.base_url)}" target="_blank" rel="noreferrer">${T(n.endpoint_url||e.base_url)}</a>`:``}
      </td>
      <td>${T(ea(e.source_type))}</td>
      <td>
        <strong>${T(ta(n.connector_type))}</strong>
        ${n.require_any_keyword===!1?`<br><span>Keyword match optional</span>`:`<br><span>Requires keyword match</span>`}
        ${Array.isArray(n.include_keywords)&&n.include_keywords.length?`<br><span>Includes: ${T(n.include_keywords.slice(0,5).join(`, `))}${n.include_keywords.length>5?`...`:``}</span>`:``}
        ${Array.isArray(n.exclude_keywords)&&n.exclude_keywords.length?`<br><span>Excludes: ${T(n.exclude_keywords.slice(0,5).join(`, `))}${n.exclude_keywords.length>5?`...`:``}</span>`:``}
      </td>
      <td>
        <span class="status-pill ${n.enabled?`is-success`:`is-disabled`}">${n.enabled?`Enabled`:`Disabled`}</span>
      </td>
      <td><span class="status-pill ${r.className}">${T(r.label)}</span></td>
      <td>${T(x(n.last_success_at||t.last_success_at))}</td>
      <td>${l?T(l):`<span class="muted-text">None</span>`}</td>
      <td>${Number(o.active||0)}</td>
      <td>${Number(o.confirmed||0)}</td>
      <td>${Number(o.early||0)}</td>
      <td>${Number(o.needsReview||0)}</td>
      <td>
        <button class="btn btn-secondary btn-small" type="button" data-action="test-source-connector" data-id="${T(e.id)}" ${!i||a||O.connectorImportLoading?`disabled`:``}>
          ${a?`Testing...`:`Test source`}
        </button>
        <button class="btn btn-ghost btn-small" type="button" data-action="toggle-source-items" data-id="${T(e.id)}" ${s.length?``:`disabled`}>
          ${c?`Hide items`:`View latest items`}
        </button>
      </td>
    </tr>
    ${c?oa(e):``}
  `}function oa(e){let t=e.latestOpportunities||[];return`
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
                      <span>${T(fs(`buyer`,Ne(t.buyer,e.name)))} · ${T(si(t.deadline))}</span>
                    </div>
                    <span class="quality-badge ${T(r)}">${T(Pa(r))}</span>
                    ${t.url?`<a class="btn btn-ghost btn-small" href="${T(t.url)}" target="_blank" rel="noreferrer">Open</a>`:``}
                  </div>
                `}).join(``)}
            </div>
          `:`<div class="empty-card">No active items for this source.</div>`}
        </div>
      </td>
    </tr>
  `}function sa(e){let t=e.companies?.company_name||`Unknown company`,n=Array.isArray(e.report_items)?e.report_items.length:0;return`
    <tr>
      <td>${T(jo(e,t))}</td>
      <td>${T(t)}</td>
      <td>${T(x(e.created_at))}</td>
      <td>${T(`${b(e.period_start)} - ${b(e.period_end)}`)}</td>
      <td>${T(e.status||`draft`)}</td>
      <td>${n}</td>
      <td>
        <div class="admin-row-actions">
          <button class="btn btn-secondary btn-small" type="button" data-action="view-admin-report" data-id="${T(e.id)}">View report</button>
          <button class="btn btn-ghost btn-small" type="button" data-action="copy-admin-report" data-id="${T(e.id)}">Copy text</button>
          <button class="btn btn-ghost btn-small" type="button" data-action="view-admin-report" data-id="${T(e.id)}">Open for PDF</button>
        </div>
      </td>
    </tr>
  `}function ca(){let e=(O.adminReports||[]).find(e=>e.id===O.selectedAdminReportId),t=O.selectedAdminReport?.id===O.selectedAdminReportId?O.selectedAdminReport:e;if(!t&&!O.selectedAdminReportLoading&&!O.selectedAdminReportError)return``;if(!t)return`
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
            ${O.selectedAdminReportError?`<div class="admin-message is-error">${T(O.selectedAdminReportError)}</div>`:`<div class="empty-card">Loading saved report items...</div>`}
          </div>
        </div>
      </div>
    `;let n=t.companies?.company_name||`Unknown company`,r=Array.isArray(t.report_items)?t.report_items.length:0,i=jo(t,n);return`
    <div class="modal-backdrop">
      <div class="modal admin-report-modal" role="dialog" aria-modal="true">
        <div class="modal-header">
          <div>
            <span class="status-pill is-success">${T(t.status||`generated`)}</span>
            <h2>${T(i)}</h2>
            <p>${T(n)} · ${T(`${b(t.period_start)} - ${b(t.period_end)}`)} · ${T(x(t.created_at))}</p>
          </div>
          <button type="button" class="icon-btn modal-close-btn" data-action="close-admin-report" aria-label="Close report">×</button>
        </div>
        <div class="modal-body">
          <div class="admin-report-actions">
            <button class="btn btn-primary" type="button" data-action="download-admin-report-pdf" ${O.selectedAdminReportLoading?`disabled`:``}>Download PDF</button>
            <button class="btn btn-secondary" type="button" data-action="copy-admin-report" data-id="${T(t.id)}">Copy text/email summary</button>
            <button class="btn btn-ghost" type="button" data-action="close-admin-report">Close</button>
          </div>

          ${O.selectedAdminReportLoading?`<div class="empty-card">Loading saved report items...</div>`:``}
          ${O.selectedAdminReportError?`<div class="admin-message is-error">${T(O.selectedAdminReportError)}</div>`:``}
          ${O.selectedAdminReportLoading?``:la(t,r,n)}

          ${!O.selectedAdminReportLoading&&r?Do(t,{companyName:n},{id:`admin-report-preview`,closeButton:!1,includeTextArea:!1}):O.selectedAdminReportLoading?``:`
            <div class="empty-card">No new eligible opportunities in this report.</div>
          `}

          ${!O.selectedAdminReportLoading&&r?ua(t):``}
        </div>
      </div>
    </div>
  `}function la(e,t,n){let r=e.status===`generated_all_current`?`all_current`:e.status===`generated_new_only`?`new_only`:e.status||`draft`;return`
    <div class="admin-report-meta-strip">
      <span><strong>Company</strong>${T(n||`Unknown company`)}</span>
      <span><strong>Period</strong>${T(`${b(e.period_start)} - ${b(e.period_end)}`)}</span>
      <span><strong>Generated at</strong>${T(x(e.created_at))}</span>
      <span><strong>Mode</strong>${T(r)}</span>
      <span><strong>Items</strong>${Number(t||0)}</span>
    </div>
  `}function ua(e){return`
    <section class="admin-report-items">
      <h3>Report items</h3>
      <div class="admin-report-item-list">
        ${(Array.isArray(e.report_items)?[...e.report_items]:[]).sort((e,t)=>Number(e.sort_order||0)-Number(t.sort_order||0)).map(e=>da(e)).join(``)}
      </div>
    </section>
  `}function da(e){let t=e.opportunities?M(e.opportunities):null;if(!t)return`<article class="admin-report-item"><p>Opportunity data is no longer available.</p></article>`;let n=Ee(t.url),r=ui(t);return`
    <article class="admin-report-item">
      <div class="opportunity-badges">
        <span class="source-pill source-badge">${T(us(Ia(t)))}</span>
        <span class="${mi(Y(Number(e.match_score||0)))}">${T(ds(Y(Number(e.match_score||0))))} · ${Number(e.match_score||0)}</span>
      </div>
      <h4>${T(t.title)}</h4>
      <div class="admin-report-meta-grid">
        <span><strong>${T(D(`buyer`))}</strong>${T(ps(t))}</span>
        <span><strong>${T(D(`source`))}</strong>${T(fs(`source`,t.source))}</span>
        <span><strong>${T(D(`area`))}</strong>${T(ms(t))}</span>
        <span><strong>${T(D(`deadline`))}</strong>${T(r.label)}</span>
        <span><strong>${T(D(`estimatedValue`))}</strong>${T(t.estimatedValue?X(t.estimatedValue):D(`notListed`))}</span>
      </div>
      <p>${T(t.description||``)}</p>
      ${n?`<a class="btn btn-secondary btn-small" href="${T(n)}" target="_blank" rel="noreferrer">${T(D(`openSource`))}</a>`:``}
    </article>
  `}async function fa(e){let t=O.selectedAdminReport?.id===e?O.selectedAdminReport:(O.adminReports||[]).find(t=>t.id===e);if(!t){V(`Report not found`,`error`);return}let n=t.companies?.company_name||`Company`,r=Mo(t),i=r.length?xs(t,n,r):t.text_content||Te(Oo(t));try{await navigator.clipboard.writeText(i),V(`Report text copied`,`success`)}catch(e){console.error(`Failed to copy admin report:`,e),V(`Could not copy report text`,`error`)}}function pa(){let e=O.adminOpportunityFilters;return(O.opportunities||[]).filter(t=>{let n=Na(t);if(e.tedOnly&&!n||e.manualOnly&&n||!e.showDemoTest&&It(t)||e.source!==`all`&&t.source!==e.source||e.status!==`all`&&t.status!==e.status)return!1;let r=Qt(t)||t.countryCode||`Unknown`;if(e.country!==`all`&&r!==e.country)return!1;let i=w(e.search);return!(i&&!w(`${t.title} ${t.buyer} ${t.externalId} ${t.location}`).includes(i))})}function ma(e,t){return Array.from(new Set(e.map(t).filter(Boolean))).sort((e,t)=>String(e).localeCompare(String(t)))}function ha(e){let t=O.adminOpportunityFilters,n=ma(O.opportunities||[],e=>e.source||`Unknown`),r=ma(O.opportunities||[],e=>e.status||`Unknown`),i=ma(O.opportunities||[],e=>Qt(e)||e.countryCode||`Unknown`),a=O.adminCompanies||[];return`
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
    <p class="admin-filter-count">${e.length} of ${(O.opportunities||[]).length} opportunities shown.</p>
  `}function ga(){return Q(ie({t:D,escapeHtml:T,language:O.language,trialHref:at()}))}function _a(){return O.user?(H(),Q(`
    <section class="page-head pricing-head">
      <p class="eyebrow">${T(D(`onboarding`))}</p>
      <h1>${T(D(`onboardingTitle`))}</h1>
      <p>${T(D(`onboardingText`))}</p>
    </section>

    ${va()}
  `)):z()}function va(){return H(),de({t:D,escapeHtml:T,capitalize:E,arrayFieldText:Xn,formatCustomerLocation:gs,getFilterOptions:ya,getProfileSuggestions:$n,renderCustomDropdown:Sa,renderSuggestionChips:tr,profileDraft:O.profileDraft||Ke(),hasProfile:!!O.profile,isSavingProfile:O.isSavingProfile,profileSaved:O.profileSaved,profileSaveMessage:O.profileSaveMessage,profileSaveError:O.profileSaveError})}function ya(e){return e===`industry`?[`Construction`,`Electrical`,`Cleaning`,`IT / Web / Software`,`Architecture / Engineering`,`Consulting`,`Transport`,`Equipment / Machinery`,`Landscaping`,`Security`,`Other`].map(e=>({value:e,label:e})):e===`label`?[{value:`strong`,label:O.language===`is`?`Aðeins sterkar`:`Strong only`},{value:`recommended`,label:O.language===`is`?`Mælt með`:`Recommended`},{value:`all`,label:O.language===`is`?`Allar samsvaranir`:`All matches`},{value:`all_opportunities`,label:O.language===`is`?`Öll tækifæri`:`All opportunities`},{value:`needs_review`,label:D(`needsReview`)},{value:`possible`,label:O.language===`is`?`Mögulegar samsvaranir`:`Possible matches`},{value:`Good match`,label:D(`goodMatch`)},{value:`Weak match`,label:D(`weakMatch`)}]:e===`category`?[{value:`all`,label:O.language===`is`?`Allir flokkar`:`All categories`},...di().map(e=>({value:e,label:e}))]:e===`location`?[{value:`all`,label:O.language===`is`?`Öll svæði`:`All locations`},...fi().map(e=>({value:e,label:gs(e)}))]:e===`type`?[{value:`all`,label:O.language===`is`?`Allar tegundir`:`All types`},...pi().map(e=>({value:e,label:E(e.replace(`-`,` `))}))]:[]}function ba(e){let t=ya(e),n=e===`industry`?O.profileDraft?.industry||O.profile?.industry||``:O.filters[e],r=t.findIndex(e=>e.value===n);return Math.max(0,r)}function xa(e){return Sa({key:e,value:O.filters[e],options:ya(e)})}function Sa({key:e,value:t,options:n,profileField:r=``}){let i=O.dropdown.openKey===e,a=t,o=Math.max(0,n.findIndex(e=>e.value===a)),s=i?O.dropdown.focusedIndex:o,c=`filter-${e}-trigger`,l=`filter-${e}-list`,u=n.find(e=>e.value===a)?.label||(e===`industry`?D(`selectIndustry`):n[0]?.label)||``;return`
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
  `}function Ca(){O.dropdown.openKey=null,O.dropdown.focusedIndex=0,Z()}function wa(){requestAnimationFrame(()=>{document.querySelector(`.custom-select-option.is-focused`)?.focus()})}function Ta(e){requestAnimationFrame(()=>{document.querySelector(`[data-action="toggle-dropdown"][data-key="${e}"]`)?.focus()})}function Ea(){if(!O.user)return z();if(!O.profile)return Pi(D(`setupCompanyFirst`),D(`dashboardNeedsProfile`));let e=Br(),t=Fr(),n=Vr(t),r=Ir(),i=n.filter(e=>e.matchScore>=85).length,a=n.filter(e=>y(e.deadline)<=14&&y(e.deadline)>=0).length,o=O.saved.length,s=n.filter(e=>e.matchScore>=65).reduce((e,t)=>e+(t.estimatedValue||0),0),c=n.filter(Ur).length,l=Jr({visibleCount:e.length,storedMatchCount:t.length,filteredStoredCount:n.length,availableCount:r.length,recommendedCount:c,strongCount:i,companyName:O.profile.companyName}),u=O.lastMatchedAt?D(`matchesLastRefreshed`,{time:x(O.lastMatchedAt)}):D(`matchesAutoRefresh`);return Q(p({profile:O.profile,matches:e,stats:{strong:i,closingSoon:a,savedCount:o,totalValue:X(s)},filters:O.filters,filterSummary:l,matchStatus:O.matchStatus,opportunityLoadError:O.opportunityLoadError,isAdmin:O.isAdmin,matchingLoading:O.matchingLoading,labels:{dashboard:D(`dashboard`),welcomeCompany:D(`welcomeCompany`,{company:O.profile.companyName}),dashboardIntro:D(`dashboardIntro`,{refresh:u}),refreshing:D(`refreshing`),refreshMatches:D(`refreshMatches`),viewWeeklyReport:D(`viewWeeklyReport`),strongMatches:D(`strongMatches`),closingSoon:D(`closingSoon`),savedLabel:D(`savedLabel`),totalPotentialValue:D(`totalPotentialValue`),searchOpportunities:D(`searchOpportunities`),savedOnly:D(`savedOnly`)},renderFilterDropdown:xa,renderOpportunityCard:Ma,renderEmptyState:()=>ja(O.profile,O.filters.label,{availableCount:r.length,storedMatchCount:t.length,filteredStoredCount:n.length,recommendedCount:c,strongCount:i}),escapeHtml:T}))}function Da(e){let t=[],n=Array.isArray(e?.locations)?e.locations:[],r=Array.isArray(e?.services)?e.services:[],i=Array.isArray(e?.includeKeywords)?e.includeKeywords:[],a=Array.isArray(e?.excludeKeywords)?e.excludeKeywords:[],o=n.some(e=>w(e)===`all iceland`),s=a.some(e=>{let t=w(e);return t.includes(`reykjavik`)||t.includes(`capital area`)});return o||t.push(O.language===`is`?`Bætið við Allt landið til að ná landsdekkandi útboðum og rammasamningum.`:`Add All Iceland to catch national tenders and framework agreements.`),e?.nationalProjects||t.push(O.language===`is`?`Kveikið á landsdekkandi verkefnum svo slík tækifæri birtist sem mögulegar samsvaranir.`:`Enable national projects so All Iceland opportunities appear as possible matches.`),r.length<5&&t.push(O.language===`is`?`Bætið við nákvæmari þjónustu svo VerkRadar þekki betur útboð sem passa við ykkar vinnu.`:`Add more specific services so VerkRadar can recognize notices that fit your work.`),s&&t.push(O.language===`is`?`Yfirfarið útilokunarorð fyrir Reykjavík eða höfuðborgarsvæðið. Þau geta falið útboð sem fyrirtæki utan svæðisins geta samt boðið í.`:`Review exclude keywords for Reykjavík or Capital Area. They may hide tenders that companies outside Reykjavík can still bid on.`),i.length<4&&t.push(O.language===`is`?`Bætið við fleiri leitarorðum, sérstaklega íslenskum hugtökum sem kaupendur nota í útboðum.`:`Add more include keywords, including Icelandic terms buyers may use in notices.`),t.length||t.push(O.language===`is`?`Yfirfarið þjónustu, svæði og leitarorð svo þau lýsi verkefnunum sem þið viljið raunverulega bjóða í.`:`Review services, locations and keywords to make sure they describe the work you actually want to bid on.`),t}function Oa(e,t={}){return O.language===`is`?e===`all`?{eyebrow:`Engar samsvaranir`,title:`Engin tækifæri fundust fyrir þennan prófíl enn.`,body:`Víkkið þjónustu, svæði eða leitarorð til að finna fleiri tækifæri.`}:e===`all_opportunities`?{eyebrow:`Engin tækifæri`,title:`Engin tiltæk tækifæri enn.`,body:`Flytjið inn fleiri heimildir eða skoðið heimildayfirlit í Admin.`}:e===`needs_review`?{eyebrow:`Ekkert þarf staðfestingu`,title:`Engin tækifæri þarfnast staðfestingar núna.`,body:`Tækifæri úr breiðum heimildum sem þarf að yfirfara birtast hér.`}:e===`strong`?{eyebrow:`Engar sterkar samsvaranir`,title:`Engar sterkar samsvaranir enn.`,body:`Þið gætuð samt átt gagnlegar mögulegar samsvaranir. Prófið Mælt með eða Allar samsvaranir.`}:e===`possible`||e===`Possible match`||e===`Weak match`?{eyebrow:`Engar mögulegar samsvaranir`,title:`Engar mögulegar samsvaranir enn.`,body:`Prófið að víkka þjónustu, svæði eða leitarorð til að finna óvissari tækifæri.`}:{eyebrow:`Engar ráðlagðar samsvaranir`,title:ka(t),body:Aa(t)}:e===`all`?{eyebrow:`No matches`,title:`No opportunities found for this profile yet.`,body:`Broaden your services, locations or keywords to find more opportunities.`}:e===`all_opportunities`?{eyebrow:`No opportunities`,title:`No available opportunities yet.`,body:`Import more sources or check Admin source coverage.`}:e===`needs_review`?{eyebrow:`No needs-review items`,title:`No needs-review opportunities right now.`,body:`Broad-feed opportunities that need manual verification will appear here.`}:e===`strong`?{eyebrow:`No strong matches`,title:`No strong matches yet.`,body:`You may still have useful possible matches. Switch to Recommended or All matches to review them.`}:e===`possible`||e===`Possible match`||e===`Weak match`?{eyebrow:`No possible matches`,title:`No possible matches yet.`,body:`Try broadening your services, locations or keywords to find lower-confidence opportunities.`}:{eyebrow:`No recommended matches`,title:ka(t),body:Aa(t)}}function ka(e={}){let t=e.companyName||(O.language===`is`?`þennan prófíl`:`this profile`);return Number(e.strongCount||0)>0?O.language===`is`?`${e.strongCount} sterkar samsvaranir eru faldar af síum.`:`${e.strongCount} strong ${Number(e.strongCount)===1?`match is`:`matches are`} hidden by filters.`:O.language===`is`?`Engar ráðlagðar samsvaranir fyrir ${t} enn.`:`No recommended matches for ${t} yet.`}function Aa(e={}){let t=Number(e.strongCount||0),n=Number(e.filteredStoredCount||0),r=Number(e.availableCount||0);return t>0?O.language===`is`?`Hreinsið leit/flokka/svæðissíur eða slökkvið á Aðeins vistað til að sjá sterku samsvaranirnar.`:`Clear search/category/location filters or turn off Saved only to see the strong matches.`:n>0?O.language===`is`?`${n} tækifæri eru til, en falin af gæðasíum. Notið Allar samsvaranir eða Þarfnast staðfestingar til að skoða þau.`:`${n} ${n===1?`opportunity is`:`opportunities are`} available, but hidden from Recommended by quality checks. Use All matches or Needs review to inspect them.`:O.language===`is`?`${r} tækifæri eru til í kerfinu, en ekkert passar nógu sterkt við þennan prófíl.`:`${r} opportunities are available in the system, but none match this profile strongly enough.`}function ja(e,t=O.filters.label,n={}){let r=Da(e);return f({copy:Oa(t,{...n,companyName:e?.companyName}),suggestions:r,labels:{improveProfile:D(`improveProfile`),includeNationalOpportunities:D(`includeNationalOpportunities`),showAllStoredMatches:D(`showAllStoredMatches`),inspectAllOpportunities:D(`inspectAllOpportunities`)},escapeHtml:T})}function Ma(e){return m({opp:e,saved:O.saved.includes(e.id),deadline:ui(e),sourceBadgeHtml:`<span class="source-pill source-badge">${T(e.source)}</span>`,qualityBadgeHtml:La(e),safetyBadgeHtml:Ra(e),extractedBadgeHtml:Ha(e),originalLanguageBadgeHtml:Na(e)?`<span class="source-pill source-badge muted-badge">${T(D(`originalLanguage`))}</span>`:``,matchBadgeClass:mi(e.matchLabel),matchLabel:ds(e.matchLabel),buyer:ps(e),location:ms(e),value:X(e.estimatedValue),reasons:e.matchReasons.slice(0,3).map(_s),labels:{details:D(`details`),saved:D(`saved`),save:D(`save`),ignore:D(`ignore`)},escapeHtml:T})}function Na(e){return/ted|tenders electronic daily/i.test(String(e.source||``))}function Pa(e){let t=P(e);return{confirmed_tender:`Confirmed tender`,early_signal:`Early signal`,needs_review:`Needs review`}[t]||E(t.replace(/_/g,` `))}function Fa(e){return{confirmed_tender:`Confirmed tender`,early_opportunity:`Early opportunity`,market_signal:`Market signal`,news_context:`News context`,not_opportunity:`Not an opportunity`}[Lt(e)||e]||E(String(e||`market_signal`).replace(/_/g,` `))}function Ia(e){let t=F(e);return t===`news_context`||t===`not_opportunity`||t===`market_signal`?Fa(t):I(e)?Ua(Rt(e)):Pa(P(e.qualityStatus,e))}function La(e){return`<span class="source-pill source-badge quality-badge ${T(F(e)||P(e.qualityStatus,e))}">${T(us(Ia(e)))}</span>`}function Ra(e){if(!e||!e.safetyStatus)return``;let t=Rr(e);return`<span class="source-pill source-badge safety-badge ${T(t)}">${T(za(t))}</span>`}function za(e){let t=String(e||``).toLowerCase();return(O.language===`is`?{auto_approved:`Sjálfkrafa samþykkt`,needs_review:`Þarfnast yfirferðar`,hidden:`Falið`}:{auto_approved:`Auto-approved`,needs_review:`Needs review`,hidden:`Hidden`})[t]||E(t.replace(/_/g,` `))}function Ba(e){return e?O.language===`is`?`Hæft í tilkynningu`:`Alert eligible`:O.language===`is`?`Ekki hæft í tilkynningu`:`Not alert eligible`}function Va(e){let t=String(e||``);return O.language===`is`?{"Valid future deadline found":`Gildur framtíðarskilafrestur fannst`,"Recent high-intent procurement signal":`Nýlegt merki frá sterkri útboðsheimild`,"Strong service/work-type fit":`Sterk samsvörun við þjónustu eða verkflokk`,"No reliable deadline was found":`Áreiðanlegur skilafrestur fannst ekki`,"Buyer is missing or generic":`Kaupandi vantar eða er of almennur`,"Match depends on broad or low-confidence terms":`Samsvörun byggir á breiðum eða óvissum orðum`,"Possible service mismatch for this company profile":`Mögulegt ósamræmi við þjónustu fyrirtækisins`,"Mentions design, consulting, supervision, or project management terms":`Inniheldur orð tengd hönnun, ráðgjöf, eftirliti eða verkefnastjórnun`,"Tender appears already awarded or already tendered":`Útboð virðist þegar auglýst eða útboði lokið`,"Stale or expired opportunity signal":`Gamalt eða útrunnið tækifæri`,"Current opportunity is plausible but needs review before customer alerts":`Tækifærið gæti átt við en þarf yfirferð áður en það fer í tilkynningu`,"Admin override includes this opportunity in customer reports":`Admin hefur samþykkt birtingu í viðskiptavinayfirlitum`,"Excluded by customer eligibility, duplicate, stale, hidden, demo, or expired filters":`Falið vegna reglna um birtingu, afrit, aldur, prófunargögn eða útrunnið tækifæri`}[t]||$(t):t}function Ha(e){if(e?.rawPayload?.extraction_method!==`vegagerdin_article_project_parser`)return``;let t=e.rawPayload?.region?` · ${e.rawPayload.region}`:``;return`<span class="source-pill source-badge muted-badge">${T(D(`extractedProject`))}${T(t)}</span>`}function Ua(e){return{tender_awarded:D(`tenderAwarded`),awarded:D(`tenderAwarded`),already_tendered:D(`tenderAlreadyAnnounced`),announced:D(`tenderAlreadyAnnounced`),upcoming_tender:D(`upcomingTender`),project_signal:D(`projectSignal`),open_or_published:D(`tenderAlreadyAnnounced`),planned_tender:D(`upcomingTender`),unclear:D(`projectSignal`)}[String(e||``)]||E(String(e||``).replace(/_/g,` `))}function Wa(e){let t=F(e);return t===`news_context`||t===`not_opportunity`?`<div class="note-panel quality-warning">${T(O.language===`is`?`Þetta lítur út eins og frétta- eða umferðarefni, ekki tækifæri fyrir viðskiptavin.`:`This looks like news or traffic context, not a customer-facing opportunity.`)}</div>`:P(e.qualityStatus,e)===`needs_review`?I(e)?`<div class="note-panel quality-warning">${T(O.language===`is`?`Útdregin verkefnavísbending — staðfestið útboðstímasetningu í heimildargrein.`:`Extracted project signal — verify tender timing in the source article.`)}</div>`:`<div class="note-panel quality-warning">${T(O.language===`is`?`Innflutt úr breiðum straumi — staðfestið á upprunasíðu.`:`Imported from broad feed — verify source page.`)}</div>`:``}function Ga(e){let t=O.saved.includes(e.id),n=ui(e),r=Array.isArray(e.requirements)?e.requirements:[],i=Array.isArray(e.matchReasons)?e.matchReasons:[],a=Array.isArray(e.risks)?e.risks:[],o=Array.isArray(e.nextSteps)?e.nextSteps:[],s=[I(e)?`<p><strong>${T(D(`extraction`))}:</strong> ${T(O.language===`is`?`Útdregið úr grein Vegagerðarinnar`:`Extracted from Vegagerðin article`)}</p>`:``,e.rawPayload?.parent_article_title?`<p><strong>${T(D(`sourceArticle`))}:</strong> ${T(e.rawPayload.parent_article_title)}</p>`:``,e.rawPayload?.parent_url?`<p><strong>${T(D(`parentArticle`))}:</strong> <a href="${T(e.rawPayload.parent_url)}" target="_blank" rel="noreferrer">${T(D(`openSourceArticle`))}</a></p>`:``,e.rawPayload?.region?`<p><strong>${T(D(`extractedRegion`))}:</strong> ${T(e.rawPayload.region)}</p>`:``,e.rawPayload?.project_number?`<p><strong>${T(D(`projectNumber`))}:</strong> ${T(e.rawPayload.project_number)}</p>`:``,I(e)?`<p><strong>${T(D(`tenderState`))}:</strong> ${T(Ua(Rt(e)))}</p>`:``].join(``);return te({opp:e,saved:t,deadline:n,requirements:r,matchReasons:i.length?i.map(_s):[],risks:a.length?a.map($):[D(`noMajorRisks`)],safetyReasons:[...Array.isArray(e.safetyReasons)?e.safetyReasons:[],...a.length?a.map($):[D(`noMajorRisks`)]].map(Va),nextSteps:o.map(vs),matchBadgeClass:mi(e.matchLabel),matchLabel:ds(e.matchLabel),qualityBadgeHtml:La(e),safetyBadgeHtml:Ra(e),extractedBadgeHtml:Ha(e),qualityWarningHtml:Wa(e),buyerSummary:hs(`buyer`,e.buyer),location:ms(e),value:e.estimatedValue?X(e.estimatedValue):D(`notListed`),sourceUrl:e.url,extractedDetails:s,qualityLabel:us(Ia(e)),safetyStatusLine:e.safetyStatus?`<p><strong>${T(O.language===`is`?`Öryggisflokkun`:`Safety status`)}:</strong> ${T(za(e.safetyStatus))} · ${T(Ba(e.alertEligible))}</p>`:``,category:hs(`category`,e.category),type:hs(`type`,e.type),publishedDate:e.publishedDate,cpvCode:e.cpvCode,labels:{description:D(`description`),noDescription:D(`noDescription`),requirements:D(`requirements`),noSpecificRequirements:D(`noSpecificRequirements`),matchReasons:D(`matchReasons`),noMatchReasons:D(`noMatchReasons`),opportunityInfo:D(`opportunityInfo`),source:D(`source`),sourceValue:hs(`source`,e.source),quality:D(`quality`),category:D(`category`),type:D(`type`),deadline:D(`deadline`),deadlineLabel:$(n.label),published:D(`published`),cpv:D(`cpv`),risksToCheck:D(`risksToCheck`),recommendedNextSteps:D(`recommendedNextSteps`),openSourceAndConfirm:D(`openSourceAndConfirm`),removeFromSaved:D(`removeFromSaved`),saveOpportunity:D(`saveOpportunity`),openSource:D(`openSource`),markNotRelevant:D(`markNotRelevant`)},escapeHtml:T})}function Ka(){if(!O.user)return z();if(!O.isAdmin)return Sn();let e=pa(),t=O.adminCompanies.find(e=>e.id===O.selectedAdminCompanyId);return Q(`
    <section class="page-head">
      <p class="eyebrow">Admin</p>
      <h1>Operations dashboard</h1>
      <p>Admin tools for monitoring imports, reviewing customers, managing sources and handling manual entries.</p>
    </section>

    ${O.adminMessage?`
      <div class="admin-message ${O.adminMessage.type===`error`?`is-error`:`is-success`}">
        ${T(O.adminMessage.text)}
      </div>
    `:``}

    ${O.opportunityLoadError?`
      <div class="note-panel">
        ${T(O.opportunityLoadError)}
      </div>
    `:``}

    ${qa()}
    ${Ja(e)}
    ${t?ho(t):``}
  `)}function qa(){return`
    <div class="admin-tabs" role="tablist" aria-label="Admin sections">
      ${[[`overview`,`Overview`],[`companies`,`Companies`],[`review`,`Review Queue`],[`sources`,`Sources/imports`],[`opportunities`,`Opportunities`],[`reports`,`Reports`]].map(([e,t])=>`
        <button type="button" class="${O.adminActiveTab===e?`is-active`:``}" data-action="admin-tab" data-tab="${e}">
          ${T(t)}
        </button>
      `).join(``)}
    </div>
  `}function Ja(e){return O.adminActiveTab===`companies`?uo():O.adminActiveTab===`review`?Xa():O.adminActiveTab===`sources`?`
      ${Wi()}
      ${Ki()}
      ${ia()}
      ${qi()}
      ${Qi()}
    `:O.adminActiveTab===`opportunities`?mo(e):O.adminActiveTab===`reports`?$i():`
    ${Ya()}
    ${Wi()}
    ${uo(!0)}
  `}function Ya(){let e=O.adminCompanies||[],t=O.opportunities||[],n=Hi(),r=e.filter(e=>e.profileStatus===`Complete`).length,i=Math.max(0,e.length-r);return`
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
  `}function Xa(){let e=O.adminReviewMatches||[],t=Za();return`
    <section class="ops-card">
      <div class="card-header">
        <div>
          <h2>${T(t.title)}</h2>
          <p>${O.adminReviewLoading?T(t.loading):T(t.count(e.length))}</p>
        </div>
        <button class="btn btn-ghost btn-small" type="button" data-action="refresh-admin-status">Refresh</button>
      </div>
      ${O.adminReviewError?`<div class="admin-message is-error">${T(O.adminReviewError)}</div>`:``}
      ${O.adminReviewLoading&&!e.length?`<div class="empty-card">${T(t.loading)}</div>`:e.length?`
        <div class="admin-review-list">
          ${e.map(so).join(``)}
        </div>
      `:`<div class="empty-card">${T(t.empty)}</div>`}
    </section>
  `}function Za(){return{title:`Review Queue`,loading:`Loading review queue...`,empty:`No uncertain matches need review.`,count:e=>`${e} uncertain match${e===1?``:`es`} need review.`,opportunity:`Opportunity`,company:`Company`,source:`Source`,buyer:`Buyer`,region:`Region`,deadline:`Deadline`,score:`Score`,safety:`Safety`,alert:`Alert`,safetyReasons:`Safety reasons`,matchReasons:`Match reasons`,approve:`Approve`,approving:`Approving...`,reject:`Reject`,rejecting:`Rejecting...`,noSource:`No source URL`,hidden:`Hidden from reports`,notHidden:`Not hidden from reports`,sourceUrl:`Source URL`}}function Qa(e){let t=e?.source||e?.rawPayload?.source_name||``;return Ne(e?.buyer,t,e?.rawPayload||{})||`Unknown buyer`}function $a(e){return Pe(e?.source||e?.rawPayload?.source_name||``)||e?.location||`Unknown`}function eo(e){let t=String(e?.deadlineAt||e?.rawPayload?.deadline_at||``).trim().match(/^(\d{4}-\d{2}-\d{2})[T\s](\d{2}):(\d{2})/);return t?`${t[1]} ${t[2]}:${t[3]}`:e?.deadline?b(e.deadline):`Deadline not available in imported data — verify on source page.`}function to(e){let t=String(e||``).toLowerCase();return{auto_approved:`Auto-approved`,needs_review:`Needs review`,hidden:`Hidden`}[t]||E(t.replace(/_/g,` `))}function no(e){return e?`Alert eligible`:`Not alert eligible`}function ro(e){return e?`Review required`:`Review not required`}function io(e){let t=String(e||``).trim();return{"Strong match":`Strong match`,"Good match":`Good match`,"Possible match":`Possible match`,"Weak match":`Weak match`}[t]||t||`Possible match`}function ao(e){return String(e||``).trim()}function oo(e){return String(e||``).trim()}function so(e){let t=e.opportunity||{},n=O.adminReviewActions?.[e.id]||``,r=Ee(t.url),i=Za(),a=e.safetyReasons.length?e.safetyReasons:[`Needs admin review`],o=e.matchReasons.length?e.matchReasons:[`Profile match`];return`
    <article class="admin-review-card">
      <div class="admin-review-card-top">
        <div class="admin-review-title-block">
          <span class="eyebrow">${T(i.opportunity)}</span>
          <h3>${T(t.title||`Untitled opportunity`)}</h3>
          <p>${T(i.company)}: <strong>${T(e.companyName)}</strong></p>
          <p>${T(i.source)}: <strong>${T(t.source||`Unknown source`)}</strong></p>
          ${r?`<p class="admin-source-url"><span>${T(i.sourceUrl)}:</span> ${T(r)}</p>`:``}
        </div>
        <div class="admin-review-source-action">
          ${r?`<a class="btn btn-secondary btn-small" href="${T(r)}" target="_blank" rel="noopener">Open source ↗</a>`:`<span class="admin-chip">${T(i.noSource)}</span>`}
        </div>
      </div>

      <div class="admin-review-meta-grid">
        ${co(i.buyer,Qa(t))}
        ${co(i.region,$a(t))}
        ${co(i.deadline,eo(t))}
        ${co(i.score,`${io(e.matchLabel)} · ${Number(e.matchScore||0)}`)}
        ${co(i.safety,to(e.safetyStatus))}
        ${co(i.alert,`${no(e.alertEligible)} · ${ro(e.reviewRequired)}`)}
      </div>

      <div class="admin-review-reasons">
        <section class="admin-review-reason-box is-warning">
          <h4>${T(i.safetyReasons)}</h4>
          <ul>
            ${a.map(e=>`<li>${T(e)}</li>`).join(``)}
          </ul>
        </section>
        <section class="admin-review-reason-box">
          <h4>${T(i.matchReasons)}</h4>
          <ul>
            ${o.map(e=>`<li>${T(e)}</li>`).join(``)}
          </ul>
        </section>
      </div>

      <div class="admin-review-actions">
        <span class="admin-review-hidden-state">${T(t.rawPayload?.hidden_from_reports===!0?i.hidden:i.notHidden)}</span>
        <div class="admin-row-actions">
          <button class="btn btn-ghost btn-small" data-action="admin-review-match" data-review-action="approve" data-id="${T(e.id)}" data-company-id="${T(e.companyId)}" ${n?`disabled`:``}>${T(n===`approve`?i.approving:i.approve)}</button>
          <button class="btn btn-ghost btn-small" data-action="admin-review-match" data-review-action="reject" data-id="${T(e.id)}" data-company-id="${T(e.companyId)}" ${n?`disabled`:``}>${T(n===`reject`?i.rejecting:i.reject)}</button>
        </div>
      </div>
    </article>
  `}function co(e,t){return`
    <div class="admin-review-meta-item">
      <span>${T(e)}</span>
      <strong>${T(t||`—`)}</strong>
    </div>
  `}function lo(){let e=O.adminCompanyFilters;return(O.adminCompanies||[]).filter(t=>{let n=w(e.search);return!(n&&!w(`${t.companyName} ${t.contactEmail} ${t.industry}`).includes(n)||e.industry!==`all`&&t.industry!==e.industry||e.profileStatus!==`all`&&t.profileStatus!==e.profileStatus||e.plan!==`all`&&t.plan!==e.plan)})}function uo(e=!1){let t=e?(O.adminCompanies||[]).slice(0,5):lo();return`
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
              <option value="new_only" ${O.adminReportMode===`all_current`?``:`selected`}>New opportunities report</option>
              <option value="all_current" ${O.adminReportMode===`all_current`?`selected`:``}>All current matches report</option>
            </select>
          </label>
        `}
      </div>
      ${O.adminCompaniesError?`<div class="admin-message is-error">${T(O.adminCompaniesError)}</div>`:``}
      ${e?``:fo()}
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
              ${t.map(po).join(``)}
            </tbody>
          </table>
        </div>
      `:`<div class="empty-card">No companies found.</div>`}
    </section>
  `}function fo(){let e=O.adminCompanies||[],t=ma(e,e=>e.industry),n=ma(e,e=>e.plan),r=O.adminCompanyFilters;return`
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
  `}function po(e){let t=O.adminCompanyActions?.[e.id]||``,n=t===`refresh`,r=t===`report`,i=!!t;return`
    <tr>
      <td><strong>${T(e.companyName)}</strong><br><span>${T(e.contactEmail||`No email`)}</span></td>
      <td>${T(e.industry||`Unknown`)}</td>
      <td>${T(e.plan||`Demo`)}</td>
      <td><span class="status-pill ${e.profileStatus===`Complete`?`is-success`:`is-running`}">${T(e.profileStatus)}</span></td>
      <td>${T(x(e.createdAt))}</td>
      <td>${e.matchCount}</td>
      <td>${e.savedCount?e.savedCount:`Not tracked`}</td>
      <td>${e.latestReportDate?T(x(e.latestReportDate)):`No reports`}</td>
      <td>
        <div class="admin-row-actions">
          <button class="btn btn-secondary btn-small" type="button" data-action="view-admin-company" data-id="${T(e.id)}" ${i?`disabled`:``}>View details</button>
          <button class="btn btn-ghost btn-small" type="button" data-action="admin-refresh-company-matches" data-id="${T(e.id)}" ${i?`disabled`:``}>${n?`Refreshing...`:`Refresh matches`}</button>
          <button class="btn btn-ghost btn-small" type="button" data-action="admin-generate-company-report" data-id="${T(e.id)}" ${i?`disabled`:``}>${r?`Generating...`:`Generate report`}</button>
        </div>
      </td>
    </tr>
  `}function mo(e){let t={...Je(),...O.adminOpportunityDraft||{}};return`
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
        <button class="btn btn-primary btn-large" type="submit" ${O.adminSubmitting?`disabled`:``}>
          ${O.adminSubmitting?`Saving...`:`Add opportunity`}
        </button>
      </div>
    </form>

    <section class="admin-list">
      <div class="card-header">
        <div>
          <h2>Existing opportunities</h2>
          <p>${(O.opportunities||[]).length} loaded ${O.opportunityLoadError?`from fallback data`:`from Supabase`}.</p>
        </div>
      </div>
      ${ha(e)}
      ${e.length?e.map(_o).join(``):`<div class="empty-card">No opportunities loaded.</div>`}
    </section>
  `}function ho(e){let t=[e.minProjectValue?X(e.minProjectValue):`No minimum`,e.maxProjectValue?X(e.maxProjectValue):`No maximum`].join(` - `),n=Ee(e.website);return`
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
              <p><strong>Website:</strong> ${n?`<a href="${T(n)}" target="_blank" rel="noreferrer">${T(e.website)}</a>`:T(e.website||`Not listed`)}</p>
              <p><strong>Industry:</strong> ${T(e.industry||`Unknown`)}</p>
              <p><strong>Plan:</strong> ${T(e.plan||`Demo`)}</p>
              <p><strong>Created:</strong> ${T(x(e.createdAt))}</p>

              <h3>Project preferences</h3>
              <p><strong>Project size:</strong> ${T(t)}</p>
              <p><strong>Unknown value:</strong> ${e.allowUnknownValue?`Allowed`:`Not preferred`}</p>
              <p><strong>Travel:</strong> ${e.willingToTravel?`Yes`:`No`}</p>
              <p><strong>National:</strong> ${e.nationalProjects?`Yes`:`No`}</p>
              <p><strong>Remote:</strong> ${e.remoteProjects?`Yes`:`No`}</p>
            </section>

            <section class="side-panel">
              <h3>Services</h3>
              ${go(e.services,`No services saved.`)}
              <h3>Include keywords</h3>
              ${go(e.includeKeywords,`No include keywords saved.`)}
              <h3>Exclude keywords</h3>
              ${go(e.excludeKeywords,`No exclude keywords saved.`)}
            </section>

            <section class="side-panel">
              <h3>Locations and service areas</h3>
              <p><strong>Base:</strong> ${T(e.baseLocation||`Not set`)}</p>
              ${go([...e.locations,...e.serviceAreas],`No locations saved.`)}
              <h3>Reports</h3>
              <p><strong>Frequency:</strong> ${T(e.reportFrequency)}</p>
              <p><strong>Day:</strong> ${T(e.reportDay)}</p>
              <p><strong>Deadline reminders:</strong> ${e.deadlineReminders?`On`:`Off`}</p>
            </section>

            <section class="side-panel">
              <h3>Latest matches</h3>
              ${e.latestMatches.length?`
                <ul class="admin-detail-list">
                  ${e.latestMatches.map(e=>`
                    <li>
                      <strong>${T(e.opportunities?.title||`Opportunity`)}</strong>
                      <span>${Number(e.match_score||0)} · ${T(e.match_label||Y(Number(e.match_score||0)))}</span>
                    </li>
                  `).join(``)}
                </ul>
              `:`<p>No stored matches yet.</p>`}
              <h3>Latest reports</h3>
              ${e.latestReports.length?`
                <ul class="admin-detail-list">
                  ${e.latestReports.map(e=>`
                    <li>
                      <strong>${T(e.title||`Report`)}</strong>
                      <span>${T(x(e.created_at))}</span>
                    </li>
                  `).join(``)}
                </ul>
              `:`<p>No reports generated yet.</p>`}
            </section>
          </div>
        </div>
      </div>
    </div>
  `}function go(e,t){let n=C(e);return n.length?`<div class="admin-tag-list">${n.map(e=>`<span>${T(e)}</span>`).join(``)}</div>`:`<p>${T(t)}</p>`}function _o(e){let t=O.adminUpdatingId===e.id,n=F(e),r=e.rawPayload?.hidden_from_reports===!0||[`hidden`,`noise`,`deleted`].includes(String(e.rawPayload?.admin_report_status||``).toLowerCase()),i=Ko(e)?e.rawPayload?.duplicate_reason||`Duplicate of ${e.rawPayload?.canonical_opportunity_id||e.rawPayload?.duplicate_of||`canonical opportunity`}`:``,a=Ht({title:e.title,description:e.description,content:`${e.category||``} ${e.source||``} ${Array.isArray(e.keywords)?e.keywords.join(` `):``}`,publishedDate:e.publishedDate,deadline:e.deadline,sourceName:e.source,sourceType:e.sourceType,connectorType:e.rawPayload?.connector_type}),o=e.rawPayload?.stale_reason||(a.isStale?a.reason:``);return`
    <div class="admin-row">
      <div>
        <h3>${T(e.title)}</h3>
        <p>${T(Qa(e))} · ${T(e.source)} · ${T($a(e))} · ${T(e.status)}</p>
        <p>Quality: ${T(Ia(e))} · Intent: ${T(Fa(n))}${r?` · Hidden from reports`:``}${i?` · Duplicate: ${T(i)}`:``}${o?` · Stale / expired: ${T(o)}`:``}</p>
        <p>Debug: hidden_from_reports=${e.rawPayload?.hidden_from_reports===!0?`true`:`false`} · admin_report_status=${T(e.rawPayload?.admin_report_status||`none`)} · stale_status=${T(e.rawPayload?.stale_status||`none`)}</p>
        ${vo(e)}
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
          ${O.adminDeletingId===e.id?`disabled`:``}
        >
          ${O.adminDeletingId===e.id?`Deleting...`:`Delete`}
        </button>
      </div>
    </div>
  `}function vo(e){let t=O.adminOpportunityFilters?.debugCompanyId||``;if(!t)return``;let n=(O.adminCompanies||[]).find(e=>e.id===t);if(!n)return`<div class="admin-debug-panel">Match debug: selected company not loaded.</div>`;let r=Mr(n,e),i=So(e,r),a=C(n.services).join(`, `)||`No services`,o=C(n.includeKeywords).join(`, `)||`No include keywords`,s=yo(n,e),c=bo(n,e),l=xo(n,e,r),u=classifyMatchSafety(n,r);return`
    <div class="admin-debug-panel">
      <p><strong>Match debug for ${T(n.companyName)}:</strong> score ${Number(r.matchScore||0)} · ${T(io(r.matchLabel))}</p>
      <p><strong>Services:</strong> ${T(a)}</p>
      <p><strong>Keywords:</strong> ${T(o)}</p>
      <p><strong>Matched terms:</strong> ${s.length?s.map(e=>`<span class="admin-chip">${T(e)}</span>`).join(` `):`None`}</p>
      <p><strong>Missing profile terms:</strong> ${c.length?c.map(e=>`<span class="admin-chip">${T(e)}</span>`).join(` `):`None`}</p>
      <p><strong>Score contribution:</strong> ${l.map(e=>`<span class="admin-chip">${T(e)}</span>`).join(` `)}</p>
      <p><strong>Matched terms/reasons:</strong> ${(r.matchReasons||[]).map(e=>`<span class="admin-chip">${T(ao(e))}</span>`).join(` `)||`None`}</p>
      <p><strong>Risks:</strong> ${(r.risks||[]).map(e=>`<span class="admin-chip">${T(oo(e))}</span>`).join(` `)||`None`}</p>
      <p><strong>Safety:</strong> <span class="admin-chip">${T(to(u.safetyStatus))}</span> <span class="admin-chip">${T(no(u.alertEligible))}</span> ${(u.safetyReasons||[]).map(e=>`<span class="admin-chip">${T(e)}</span>`).join(` `)}</p>
      <p><strong>Excluded by:</strong> ${i.length?i.map(e=>`<span class="admin-chip">${T(e)}</span>`).join(` `):`<span class="admin-chip">Not excluded by local dashboard/report filters</span>`}</p>
    </div>
  `}function yo(e,t){let n=or(t);return mr(Se([...C(e.services).filter(e=>G(n,e)),...C(e.includeKeywords).filter(e=>G(n,e)),...hr(n),...yr(e)?gr(n):[]]))}function bo(e,t){let n=or(t);return mr(Se([...C(e.services),...C(e.includeKeywords)].filter(e=>e&&!G(n,e)))).slice(0,12)}function xo(e,t,n){let r=[],i=(n.matchReasons||[]).filter(e=>/^Mentions your service:/i.test(e)).length,a=(n.matchReasons||[]).filter(e=>/^Contains your keyword:/i.test(e)).length;jr(e,t)&&r.push(`+35 industry/category`),i&&r.push(`+${Math.min(35,i*10)} services`),a&&r.push(`+${Math.min(25,a*8)} keywords`);let o=Tr(e,t);return o===`local_match`?r.push(`+22 local`):o===`national_match`?r.push(`+16 national`):o===`remote_match`?r.push(`+14 remote`):o===`outside_area_possible`?r.push(`+4 travel possible`):r.push(`-8 low-confidence location`),t.deadline&&y(t.deadline)>=0&&y(t.deadline)<=30&&r.push(`+8 closing soon`),(n.risks||[]).some(e=>/broad construction/i.test(e))&&r.push(`capped broad fit`),(n.risks||[]).some(e=>/winter|snow/i.test(e))&&r.push(`capped winter fit`),(n.risks||[]).some(e=>/indoor|finishing/i.test(e))&&r.push(`downgraded indoor mismatch`),r.length?r:[`No positive score contribution`]}function So(e,t){let n=[];return Number(t.matchScore||0)<50&&n.push(`score_below_50 (${Number(t.matchScore||0)})`),as(e)||n.push(`customer_match_ineligible`),N(e)||n.push(`dashboard_not_visible`),Rr(e)===`hidden`&&n.push(`safety_status_hidden`),ts(O.adminCompanies?.find(e=>e.id===O.adminOpportunityFilters?.debugCompanyId)||{},e)&&n.push(`needs_review_wrong_type_for_company`),ns(O.adminCompanies?.find(e=>e.id===O.adminOpportunityFilters?.debugCompanyId)||{},e)&&n.push(`design_consulting_or_supervision_only`),e.rawPayload?.hidden_from_reports===!0&&n.push(`hidden_from_reports`),Ko(e)&&n.push(`duplicate_secondary`),Vt(e)&&n.push(`stale_or_expired`),It(e)&&n.push(`demo_or_test`),n}function Co(){if(!O.user)return z();if(!O.profile)return Pi(D(`setupCompanyFirst`),D(`reportNeedsProfile`));let e=O.profile,t=Ro(e,Io()),n=O.reports.find(e=>e.id===O.selectedReportId),r=O.reportArchiveLoading?D(`loadingSavedReports`):O.language===`is`?`${O.reports.length} vistuð yfirlit.`:`${O.reports.length} saved report${O.reports.length===1?``:`s`}.`,i=O.reportArchiveLoading?`<div class="empty-card">${T(D(`loadingSavedReports`))}</div>`:O.reportsLoadError?`<div class="admin-message is-error">Failed to load reports. ${T(O.reportsLoadError)}</div>`:O.reportsLoaded&&O.reports.length===0?`<div class="empty-card">${T(D(`noSavedReports`))}</div>`:O.reports.map(wo).join(``);return Q(`
    <section class="dashboard-head">
      <div>
        <p class="eyebrow">${T(D(`weeklyReport`))}</p>
        <h1>${T(D(`reportTitle`))}</h1>
        <p>${T(e.companyName||`Your company`)} · ${T(zo(t.periodStart,t.periodEnd))}</p>
        <p class="muted-copy">${T(O.language===`is`?`Sýnir öll núverandi viðeigandi tækifæri, ekki aðeins ný frá síðasta vistaða yfirliti.`:`Showing all current eligible matches, not only new items since the last saved report.`)}</p>
      </div>
      <div class="dashboard-actions">
        <button class="btn btn-primary" data-action="save-report" ${O.reportSaveLoading?`disabled`:``}>
          ${O.reportSaveLoading?T(D(`savingReport`)):T(D(`saveReport`))}
        </button>
        <button class="btn btn-secondary" data-action="download-report-pdf">${T(D(`downloadPdf`))}</button>
        <button class="btn btn-secondary" data-action="copy-report">${T(D(`copyReport`))}</button>
      </div>
    </section>

    ${O.reportMessage?`
      <div class="admin-message ${O.reportMessage.type===`error`?`is-error`:`is-success`}">
        ${T(O.reportMessage.text)}
      </div>
    `:``}

    ${Eo(t,{id:`report-preview`,contactEmail:e.contactEmail,companyName:e.companyName})}

    <section class="report-archive">
      <div class="card-header">
        <div>
          <p class="eyebrow">${T(D(`reportArchive`))}</p>
          <h2>${T(D(`savedReports`))}</h2>
          <p>${r}</p>
        </div>
      </div>
      ${i}
    </section>

    ${n?Do(n,e):``}
  `)}function wo(e){let t=Array.isArray(e.report_items)?e.report_items.length:Number(e.itemCount||0),n=O.profile?.companyName||e.companies?.company_name||`Company`,r=O.language===`is`?Bo(e.created_at):b(e.created_at),i=O.language===`is`?`${t} tækifæri`:`${t} item${t===1?``:`s`}`;return fe({report:e,title:jo(e,n),created:r,itemLabel:i,statusLabel:To(e.status),hideLabel:O.language===`is`?`Fela yfirlit`:`Hide report`,viewLabel:D(`viewReport`),escapeHtml:T})}function To(e){let t=String(e||`draft`);return O.language===`is`?{generated_all_current:`Heildaryfirlit`,generated_new_only:`Ný tækifæri`,draft:`Vistað yfirlit`}[t]||t:{generated_all_current:`All current`,generated_new_only:`New opportunities`,draft:`Saved report`}[t]||t}function Eo(e,t={}){return pe({report:e,options:t,companyName:t.companyName||O.profile?.companyName||`Company`,dateRange:zo(e.periodStart,e.periodEnd),generatedByLabel:D(`generatedBy`),reportTitleLabel:D(`reportTitle`),closeLabel:D(`closeReport`),escapeHtml:T})}function Do(e,t,n={}){let r=e.period_start||e.created_at?.slice(0,10)||new Date().toISOString().slice(0,10),i=e.period_end||e.created_at?.slice(0,10)||new Date().toISOString().slice(0,10),a=t.companyName||e.companies?.company_name||`Company`,o=Mo(e),s=o.length?No(o):Oo(e),c=o.length?xs(e,a,o):Ao(e.text_content||``);return Eo({title:jo(e,a),periodStart:r,periodEnd:i,htmlContent:s,textContent:c},{companyName:a,closeButton:n.closeButton===void 0?!0:n.closeButton,includeTextArea:n.includeTextArea===void 0?!1:n.includeTextArea,id:n.id||``})}function Oo(e){if(e.html_content&&e.html_content.includes(`report-cover`))return ko(Fo(e.html_content));let t=e.period_start||e.created_at?.slice(0,10)||new Date().toISOString().slice(0,10),n=e.period_end||e.created_at?.slice(0,10)||new Date().toISOString().slice(0,10),r=e.html_content?ko(Fo(e.html_content)):`<pre>${T(e.text_content||`Ekkert efni var vistað fyrir þetta yfirlit.`)}</pre>`;return`
    <div class="report-cover">
      <div class="report-kicker">Útbúið af VerkRadar</div>
      <p class="eyebrow">Vistað yfirlit</p>
      <h2>${T(e.title||`Vistað yfirlit`)}</h2>
      <p>${T(zo(t,n))}</p>
      <p>${T(e.summary||`Þetta eldra vistaða yfirlit er birt í nýju skýrslusniði.`)}</p>
    </div>
    <div class="report-legacy-content">
      ${r}
    </div>
  `}function ko(e){return be(e,O.language)}function Ao(e){return be(e,O.language)}function jo(e,t){return D(`reportForCompany`,{company:String(t||e?.companies?.company_name||`Company`).trim()})}function Mo(e){return(Array.isArray(e?.report_items)?[...e.report_items]:[]).sort((e,t)=>Number(e.sort_order||0)-Number(t.sort_order||0)).map(e=>{if(!e.opportunities)return null;let t=M(e.opportunities);return{...t,matchScore:Number(e.match_score||0),matchLabel:Y(Number(e.match_score||0)),matchReasons:en(t,Array.isArray(e.match_reasons)?e.match_reasons:[]),risks:Array.isArray(e.risks)&&e.risks.length?e.risks:Array.isArray(t.rawPayload?.risks)?t.rawPayload.risks:[],nextSteps:[]}}).filter(Boolean)}function No(e){let t=Po(e);return`
    ${t.confirmed.length?ss(D(`openTenders`),D(`openTendersDescription`),t.confirmed):``}
    ${t.early.length?ss(D(`upcomingOpportunities`),D(`upcomingDescription`),t.early):``}
    ${t.review.length?ss(D(`needsReview`),O.language===`is`?`Atriði úr vistuðu yfirliti sem þarf að staðfesta á heimild.`:`Saved report items that should be verified at the source.`,t.review):``}
    <p class="report-footer-note">${T(D(`reportFooter`))}</p>
  `}function Po(e){let t={confirmed:[],early:[],review:[]};return e.forEach(e=>{let n=Ho(e);n===`confirmed`?t.confirmed.push(e):n===`early`?t.early.push(e):n!==`excluded`&&t.review.push(e)}),t}function Fo(e){let t=new DOMParser().parseFromString(String(e||``),`text/html`),n=new Set([`A`,`ARTICLE`,`DIV`,`EM`,`H2`,`H3`,`H4`,`H5`,`LI`,`OL`,`P`,`PRE`,`SECTION`,`SPAN`,`STRONG`,`UL`]),r=new Set([`aria-hidden`,`class`,`href`,`rel`,`target`]);return t.body.querySelectorAll(`*`).forEach(e=>{if(!n.has(e.tagName)){e.replaceWith(...Array.from(e.childNodes));return}Array.from(e.attributes).forEach(t=>{if(!r.has(t.name)){e.removeAttribute(t.name);return}if(t.name===`href`){let n=Ee(t.value);n?e.setAttribute(`href`,n):e.removeAttribute(`href`)}})}),t.body.innerHTML}function Io(e=`all_current`,t=new Set){return Lo({mode:e,previouslyReportedIds:t})}function Lo({mode:e=`all_current`,previouslyReportedIds:t=new Set}={}){let n=Pr().filter(e=>e.matchScore>=50).filter(t=>Uo(t,e)),r=Vo(e===`new_only`?n.filter(e=>!t.has(e.id)):n);return[...r.confirmed,...r.early]}function Ro(e,t){let n=new Date,r=n.toISOString().slice(0,10),i=new Date(n);i.setDate(i.getDate()-7);let a=i.toISOString().slice(0,10),o=D(`reportForCompany`,{company:e.companyName}),s=Vo(t),c=s.confirmed.length+s.early.length,l=O.language===`is`?`${c} viðeigandi útboðs- eða verðfyrirspurnaratriði fundust fyrir ${e.companyName}.`:`${c} relevant tender/quote-request ${c===1?`item`:`items`} found for ${e.companyName}.`;return{title:o,periodStart:a,periodEnd:r,summary:l,textContent:bs(e,t),htmlContent:`
    <div class="report-cover">
      <div class="report-kicker">${T(D(`generatedBy`))}</div>
      <p class="eyebrow">${T(D(`reportTitle`))}</p>
      <h2>${T(o)}</h2>
      <p>${T(zo(a,r))}</p>
      <p>${T(l)} ${t[0]?T(O.language===`is`?`Sterkasta sýnilega atriðið er ${t[0].title}.`:`The strongest visible item is ${t[0].title}.`):T(O.language===`is`?`Engin skýr útboð eða verðfyrirspurnir fundust fyrir þetta tímabil.`:`No strict report-ready tenders or quote requests were found for this period.`)}</p>
    </div>

    <div class="report-summary-grid">
      ${os(D(`openTenders`),s.confirmed.length)}
      ${os(D(`upcomingOpportunities`),s.early.length)}
    </div>

    ${ss(D(`openTenders`),D(`openTendersDescription`),s.confirmed)}
    ${s.early.length?ss(D(`upcomingOpportunities`),D(`upcomingDescription`),s.early):``}

    <p class="report-footer-note">${T(D(`reportFooter`))}</p>
  `}}function zo(e,t){return`${Bo(e)} – ${Bo(t)}`}function Bo(e){if(!e)return`Engin dagsetning`;let t=new Date(`${String(e).slice(0,10)}T00:00:00`);return Number.isNaN(t.getTime())?String(e):O.language===`en`?new Intl.DateTimeFormat(`en-GB`,{year:`numeric`,month:`short`,day:`2-digit`}).format(t):`${t.getDate()}. ${[`janúar`,`febrúar`,`mars`,`apríl`,`maí`,`júní`,`júlí`,`ágúst`,`september`,`október`,`nóvember`,`desember`][t.getMonth()]} ${t.getFullYear()}`}function Vo(e){let t={confirmed:[],early:[]},n=new Set;qo(e).forEach(e=>{let r=Ho(e);r!==`excluded`&&(n.has(e.id)||(n.add(e.id),r===`confirmed`?t.confirmed.push(e):r===`early`&&t.early.push(e)))});let r=8;for(let e of[`confirmed`,`early`]){let n=t[e].slice(0,r);t[e]=n,r=Math.max(0,r-n.length)}return t}function Ho(e){if(!Wo(e))return`excluded`;let t=F(e);if(t===`confirmed_tender`)return`confirmed`;if(t===`early_opportunity`)return`early`;let n=P(e.qualityStatus,e);return n===`confirmed_tender`?`confirmed`:n===`early_signal`?`early`:`excluded`}function Uo(e,t=`all_current`){return Wo(e)?t===`new_only`?Rr(e)===`auto_approved`&&e.alertEligible!==!1:Rr(e)!==`hidden`:!1}function Wo(e){if(!e||It(e)||Rr(e)===`hidden`||!N(e)||Go(e)||Yo(e)||$o(e)||es(e)||Xt(e.title||``)&&!Xo(e))return!1;let t=F(e);if(t===`confirmed_tender`)return Xo(e)||Qo(e);if(t===`early_opportunity`)return Zo(e);let n=P(e.qualityStatus,e);return n===`confirmed_tender`?Xo(e)||Qo(e):n===`early_signal`?Zo(e):!1}function Go(e){let t=e?.rawPayload||{},n=String(t.admin_report_status||``).toLowerCase();if(n===`include`)return!1;if(t.hidden_from_reports===!0||[`hidden`,`hide`,`noise`,`deleted`].includes(n)||Ko(e)||Vt(e))return!0;let r=F(e);return r===`news_context`||r===`not_opportunity`}function Ko(e={}){let t=e.rawPayload||{},n=String(t.canonical_opportunity_id||``);return t.is_duplicate===!0||!!t.duplicate_of||!!n&&!!e.id&&n!==String(e.id)}function qo(e){return[...e].sort((e,t)=>Jo(e)-Jo(t)||Number(Qo(t))-Number(Qo(e))||Number(Xo(t))-Number(Xo(e))||t.matchScore-e.matchScore||y(e.deadline)-y(t.deadline))}function Jo(e){if(Yo(e))return 99;let t=F(e);return t===`confirmed_tender`?0:t===`early_opportunity`?1:10}function Yo(e){let t=I(e)?Rt(e):String(e?.rawPayload?.tender_state||``).toLowerCase();return[`tender_awarded`,`awarded`,`already_tendered`].includes(t)?!0:R(L(e),[`lægstbjóðandi`,`laegstbjodandi`,`samningur gerður`,`samningur gerdur`,`samningur var`,`samið var`,`samid var`,`útboð hefur farið fram`,`utbod hefur farid fram`,`útboð var auglýst`,`utbod var auglyst`])}function Xo(e){return R(L(e),[`útboð`,`utbod`,`útboðsauglýsing`,`utbodsauglysing`,`tilboð`,`tilbod`,`tilboðum`,`tilbodum`,`óskað eftir tilboðum`,`oskad eftir tilbodum`,`verðfyrirspurn`,`verdfyrirspurn`,`forval`,`skilafrestur`,`útboðsgögn`,`utbodsgogn`,`quote request`,`request for quote`,`tender`,`procurement`])}function Zo(e){return R(L(e),[`senn í útboð`,`senn i utbod`,`áætlað útboð`,`aaetlad utbod`,`áætlað er að bjóða út`,`aaetlad er ad bjoda ut`,`fyrirhugað útboð`,`fyrirhugad utbod`])}function Qo(e){let t=w(e?.source||``);return[`rikiskaup`,`ríkiskaup`,`utbodsvefur`,`útboðsvefur`,`ted`,`tenders electronic daily`,`procurement`,`tender portal`].some(e=>t.includes(w(e)))}function $o(e){return ns(O.profile||{},e)}function es(e){return ts(O.profile||{},e)}function ts(e,t){return Rr(t)!==`needs_review`||!is([...Array.isArray(t?.safetyReasons)?t.safetyReasons:[],...Array.isArray(t?.risks)?t.risks:[],...Array.isArray(t?.rawPayload?.safety_reasons)?t.rawPayload.safety_reasons:[],...Array.isArray(t?.rawPayload?.risks)?t.rawPayload.risks:[]].filter(Boolean).join(` `))?!1:!rs(e)}function ns(e,t){let n=L(t),r=R(n,[`for og verkhönnun`,`for og verkhonnun`,`verkhönnun`,`verkhonnun`,`forhönnun`,`forhonnun`,`verkfræðiráðgjöf`,`verkfraediradgjof`,`ráðgjöf`,`radgjof`,`umsjón`,`umsjon`,`verkefnastjórn`,`verkefnastjorn`,`útboðsgögn hönnun`,`utbodsgogn honnun`]),i=R(n,[`hönnun`,`honnun`]),a=R(n,[`lóðarframkvæmdir`,`lodarframkvaemdir`,`gatnagerð`,`gatnagerd`,`stígagerð`,`stigagerd`,`lagnir`,`regnvatnslagnir`,`jarðvinna`,`jardvinna`,`jarðvegsskipti`,`jardvegsskipti`,`fyllingar`,`grjóthleðsla`,`grjothledsla`,`malbikun`,`hellulögn`,`hellulogn`,`kantsteinar`,`landmótun`,`landmotun`,`yfirborðsfrágangur`,`yfirbordsfragangur`,`bílastæði`,`bilastaedi`]),o=R(n,[`eftirlit`,`umsjón`,`umsjon`,`verkefnastjórn`,`verkefnastjorn`])&&!a;return!r&&!(i&&!a)&&!o?!1:!rs(e)}function rs(e={}){return R([e.industry,...Array.isArray(e.services)?e.services:[],...Array.isArray(e.includeKeywords)?e.includeKeywords:[]].filter(Boolean).join(` `),[`hönnun`,`honnun`,`ráðgjöf`,`radgjof`,`verkfræðiráðgjöf`,`verkfraediradgjof`,`verkfræði`,`verkfraedi`,`eftirlit`,`verkefnastjórnun`,`verkefnastjornun`,`útboðsgögn`,`utbodsgogn`,`engineering`,`design`,`consulting`,`project management`,`supervision`])}function is(e){return R(String(e||``),[`hönnun`,`honnun`,`ráðgjöf`,`radgjof`,`verkfræðiráðgjöf`,`verkfraediradgjof`,`eftirlit`,`umsjón`,`umsjon`,`verkefnastjórn`,`verkefnastjorn`,`design`,`consulting`,`supervision`,`inspection`,`project management`])}function as(e){if(!e)return!1;let t=e.rawPayload||{};if(String(t.admin_report_status||``).toLowerCase()===`include`)return!0;if(Go(e))return!1;let n=String(t.tender_state||``).toLowerCase();return!([`tender_awarded`,`awarded`,`already_tendered`].includes(n)||Vt(e)||Xt(e.title||``)&&!Bt(L(e)))}function os(e,t){return me({label:e,value:t,escapeHtml:T})}function ss(e,t,n){return he({title:e,description:t,opportunities:n,emptyText:O.language===`is`?`Engin atriði í þessum hluta.`:`No items in this section.`,renderOpportunityItem:cs,escapeHtml:T})}function cs(e){let t=!!e.estimatedValue,n=ys(e),r=e.deadline?Bo(e.deadline):D(`notFound`);return ge({opp:e,valueText:t?X(e.estimatedValue):D(`notListed`),deadlineText:r,sourceUrl:Ee(e.url),risks:n,fallbackReason:`Matched to your profile by service, location or keyword overlap.`,qualityBadgeHtml:ls(e),matchBadgeClass:mi(e.matchLabel),matchLabel:ds(e.matchLabel),buyerLabel:D(`buyer`),buyerValue:ps(e),sourceLabel:D(`source`),sourceValue:fs(`source`,e.source),areaLabel:D(`area`),areaValue:ms(e),deadlineLabel:D(`deadline`),valueLabel:D(`estimatedValue`),whyLabel:D(`whyThisMatters`),risksLabel:D(`risksToCheck`),openSourceLabel:D(`openSource`),sourceMissingLabel:D(`sourceLinkMissing`),formatReason:_s,formatRisk:$,escapeHtml:T})}function ls(e){return _e({status:P(e.qualityStatus,e),label:us(Ia(e)),escapeHtml:T})}function us(e){return Oe(e,D)}function ds(e){return ke(e,D)}function fs(e,t){return Ae(e,t,D)}function ps(e){let t=e?.source||e?.rawPayload?.source_name||``;return fs(`buyer`,Ne(e?.buyer,t,e?.rawPayload||{}))}function ms(e){return Pe(e?.source||e?.rawPayload?.source_name||``)||fs(`location`,e?.location)}function hs(e,t){return Ie(e,t,{language:O.language,translate:D})}function gs(e){return Fe(e,O.language,D)}function _s(e){return Le(e,{language:O.language,translate:D})}function $(e){return Re(e,O.language)}function vs(e){return ze(e,O.language)}function ys(e){let t=Array.isArray(e.risks)&&e.risks.length?[...e.risks]:[`Open the source page and confirm mandatory requirements.`];return e.deadline||t.unshift(li(e)),e.estimatedValue||t.push(`Estimated value is not listed in the imported data.`),P(e.qualityStatus,e)===`needs_review`&&t.push(I(e)?`Extracted project signal — verify tender timing in the source article.`:`Imported from broad feed — verify that this is a real tender or business opportunity.`),[...new Set(t.map(e=>String(e||``).trim()).filter(Boolean))]}function bs(e,t){let n=Vo(t),r=[...n.confirmed,...n.early];return`${D(`reportForCompany`,{company:e.companyName})}
${O.language===`is`?`Tímabil`:`Date range`}: ${zo(new Date(Date.now()-10080*60*1e3).toISOString().slice(0,10),new Date().toISOString().slice(0,10))}

${O.language===`is`?`Samantekt`:`Summary`}:
- ${D(`openTenders`)}: ${n.confirmed.length}
- ${D(`upcomingOpportunities`)}: ${n.early.length}

${r.length?r.map((e,t)=>`${t+1}. ${e.title}
${O.language===`is`?`Gæði`:`Quality`}: ${us(Ia(e))}
${D(`buyer`)}: ${ps(e)}
${D(`source`)}: ${fs(`source`,e.source)}
${D(`area`)}: ${ms(e)}
${D(`deadline`)}: ${ci(e)}
${D(`estimatedValue`)}: ${e.estimatedValue?X(e.estimatedValue):D(`notListed`)}
${O.language===`is`?`Samsvörun`:`Match`}: ${e.matchScore}/100 (${ds(e.matchLabel)})
${D(`whyThisMatters`)}:
${(e.matchReasons.length?e.matchReasons:[`Matched to your company profile.`]).map(e=>`- ${_s(e)}`).join(`
`)}
${D(`risksToCheck`)}:
${ys(e).map(e=>`- ${$(e)}`).join(`
`)}
${O.language===`is`?`Næsta skref`:`Next step`}:
${e.url?`${D(`openSource`)}: ${e.url}`:O.language===`is`?`Finnið og staðfestið upprunalega heimild áður en brugðist er við.`:`Find and verify the original source page before acting.`}
`).join(`
`):O.language===`is`?`Engin skýr útboð eða verðfyrirspurnir fundust fyrir þetta tímabil.`:`No report-ready matches were found for this period.`}

VerkRadar`}function xs(e,t,n){let r=e.period_start||e.created_at?.slice(0,10)||new Date().toISOString().slice(0,10),i=e.period_end||e.created_at?.slice(0,10)||new Date().toISOString().slice(0,10),a=jo(e,t),o=Po(n),s=[...o.confirmed,...o.early,...o.review];return`${a}
${O.language===`is`?`Tímabil`:`Date range`}: ${zo(r,i)}

${s.length?s.map((e,t)=>`${t+1}. ${e.title}
${O.language===`is`?`Gæði`:`Quality`}: ${us(Ia(e))}
${D(`buyer`)}: ${ps(e)}
${D(`source`)}: ${fs(`source`,e.source)}
${D(`area`)}: ${ms(e)}
${D(`deadline`)}: ${ci(e)}
${D(`estimatedValue`)}: ${e.estimatedValue?X(e.estimatedValue):D(`notListed`)}
${O.language===`is`?`Samsvörun`:`Match`}: ${e.matchScore}/100 (${ds(e.matchLabel)})
${D(`whyThisMatters`)}:
${(e.matchReasons.length?e.matchReasons:[`Matched to your company profile.`]).map(e=>`- ${_s(e)}`).join(`
`)}
${D(`risksToCheck`)}:
${ys(e).map(e=>`- ${$(e)}`).join(`
`)}
${e.url?`${D(`openSource`)}: ${e.url}`:``}
`).join(`
`):O.language===`is`?`Engin atriði eru vistuð í þessu yfirliti.`:`No items are saved in this report.`}

${D(`reportFooter`)}`}async function Ss(){let e=bs(O.profile||Ke(),Io());try{await navigator.clipboard.writeText(e),V(`Report copied`,`success`)}catch(e){console.error(`Failed to copy report:`,e),V(`Could not copy report`,`error`)}}function Cs(e=`report-preview`,t=``){let n=document.getElementById(e);if(!n){V(`No report available to export`,`error`);return}let r=O.profile||Ke(),i=n.cloneNode(!0);i.classList.add(`pdf-compact-report`),i.querySelectorAll(`textarea, .report-close-btn`).forEach(e=>e.remove());let a=i.querySelector(`.report-meta-bar`);if(a){let e=a.querySelector(`div:first-child strong`)?.textContent?.trim()||D(`reportForCompany`,{company:t||r.companyName||`Company`}),n=a.querySelector(`div:last-child span`)?.textContent?.trim()||t||r.companyName||`Company`,i=a.querySelector(`div:last-child strong`)?.textContent?.trim()||``,o=document.querySelector(`.brand-logo`)?.src||document.querySelector(`link[rel="icon"]`)?.href||``;a.innerHTML=``;let s=document.createElement(`div`);s.className=`pdf-report-header-text`;let c=document.createElement(`span`);c.textContent=D(`generatedBy`);let l=document.createElement(`strong`);l.textContent=e||D(`reportForCompany`,{company:n});let u=document.createElement(`em`);if(u.textContent=i,s.append(c,l,u),a.appendChild(s),o){let e=document.createElement(`img`);e.className=`pdf-report-logo`,e.src=o,e.alt=`VerkRadar`,a.appendChild(e)}}let o=i.querySelector(`.report-summary-grid`);o&&o.remove();let s=n.querySelector(`.report-meta-bar div:last-child strong`)?.textContent||new Date().toISOString().slice(0,10),c=Ts(t||r.companyName||`company`,s),l=Array.from(document.querySelectorAll(`link[rel="stylesheet"]`)).map(e=>`<link rel="stylesheet" href="${T(e.href)}">`).join(``),u=window.open(``,`_blank`,`width=1100,height=900`);if(!u){V(`Allow popups to download the report PDF`,`error`);return}u.document.open(),u.document.write(`<!doctype html>
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
</html>`),u.document.close()}function ws(){Cs(`admin-report-preview`,(O.selectedAdminReport?.id===O.selectedAdminReportId?O.selectedAdminReport:(O.adminReports||[]).find(e=>e.id===O.selectedAdminReportId))?.companies?.company_name||`Company`)}function Ts(e,t){return`VerkRadar-report-${Es(e)||`company`}-${Es(String(t||``).replace(/\s+to\s+/i,`-`))||new Date().toISOString().slice(0,10)}.pdf`}function Es(e){return String(e||``).normalize(`NFD`).replace(/[\u0300-\u036f]/g,``).replace(/[^a-z0-9]+/gi,`-`).replace(/^-+|-+$/g,``).toLowerCase()}function Ds(){return Q(ae({t:D,escapeHtml:T,trialHref:at()}))}function Os(){return O.user?O.profileLoading&&!O.profile&&!O.profileDraft?Q(`
      <section class="empty-state">
        <div class="loader-mark" aria-label="${T(O.language===`is`?`Hleð fyrirtækjaprófíl`:`Loading company profile`)}"></div>
        <h1>${T(O.language===`is`?`Hleð fyrirtækjaprófíl...`:`Loading company profile...`)}</h1>
        <p>${T(O.language===`is`?`Sæki vistaðan fyrirtækjaprófíl.`:`Checking your saved company profile.`)}</p>
        <button class="btn btn-secondary" type="button" data-action="retry-settings-profile">${T(O.language===`is`?`Reyna aftur`:`Retry`)}</button>
      </section>
    `):O.profileLoadError&&!O.profile&&!O.profileDraft?Q(`
      <section class="empty-state">
        <h1>${T(O.language===`is`?`Gat ekki hlaðið stillingum`:`Could not load Settings`)}</h1>
        <p>${T(O.profileLoadError)}</p>
        <button class="btn btn-primary" type="button" data-action="retry-settings-profile">${T(O.language===`is`?`Reyna aftur`:`Retry`)}</button>
      </section>
    `):!O.profile&&!O.profileDraft?Pi(D(`setupCompanyFirst`),O.language===`is`?`Stillingar eru tiltækar eftir að fyrirtækið hefur verið sett upp.`:`Settings are available after you set up your company.`):Q(ve({t:D,escapeHtml:T,language:O.language,profileDraftDirty:O.profileDraftDirty,profileLoadError:O.profileLoadError,showDemoReset:ks(),profileFormHtml:va()})):z()}function ks(){return!!(O.isAdmin||[`localhost`,`127.0.0.1`,``].includes(window.location.hostname))}jn(),j();