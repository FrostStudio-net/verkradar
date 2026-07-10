(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={profile:`verkradar_profile`,saved:`verkradar_saved_opportunities`,ignored:`verkradar_ignored_opportunities`,language:`verkradar_language`,selectedPlan:`verkradar_selected_plan`},t={is:{navDashboard:`Mælaborð`,navReport:`Yfirlit`,navPricing:`Verðskrá`,navSettings:`Stillingar`,navHowItWorks:`Hvernig virkar þetta`,navSampleReport:`Sýnishorn`,login:`Innskráning`,logout:`Skrá út`,getStarted:`Fá prufu`,setupCompany:`Setja upp fyrirtæki`,createProfile:`Stofna prófíl`,companyProfile:`Fyrirtækjaprófíll`,noCompanyProfile:`Ekkert fyrirtæki`,openMenu:`Opna valmynd`,closeMenu:`Loka valmynd`,privacyPolicy:`Persónuvernd`,termsOfService:`Skilmálar`,dataSources:`Gagnaheimildir`,cookies:`Vafrakökur`,security:`Öryggi`,contact:`Hafa samband`,footerText:`Vöktun útboða og viðskiptatækifæra fyrir fyrirtæki. VerkRadar hjálpar ykkur að finna og yfirfara opinber tækifæri, en frumgögn eru alltaf endanleg heimild.`,loadingLabel:`Hleð VerkRadar`,heroEyebrow:`Útboðsgreind fyrir verktaka og þjónustufyrirtæki`,heroTitle:`Finnið verðmæt útboð áður en skilafresturinn rennur út.`,heroText:`VerkRadar vaktar opinberar heimildir og skilar stuttu yfirliti yfir tækifæri sem gætu passað við ykkar verkflokka og svæði.`,createFreeDemoProfile:`Fá prufuyfirlit`,viewSampleReport:`Skoða sýnishorn`,proofStrong:`Fyrir verktaka, iðnfyrirtæki og þjónustuaðila.`,proofText:`Vöktun á opinberum heimildum, sveitarfélögum og útboðsvefjum - sett fram sem forgangsraðað yfirlit.`,bestOpenMatch:`Stutt yfirlit`,tender:`Útboð`,deadlineRisk:`Rennur út fljótlega`,daysLeft:`{count} dagar eftir`,problemEyebrow:`Vandinn`,problemTitle:`Útboð tapast oft áður en tilboðsgerðin byrjar.`,problemOneTitle:`Útboð birtast á mörgum mismunandi stöðum.`,problemOneText:`Sveitarfélög, stofnanir og útboðsvefir birta tækifæri á ólíkum síðum og í ólíkum sniðum.`,problemTwoTitle:`Skilafrestir geta verið stuttir.`,problemTwoText:`Það tekur tíma að finna hvað passar við ykkar verkflokka, svæði og stærð verkefna.`,targetEyebrow:`Fyrir hverja?`,targetTitle:`Byggt fyrir íslensk fyrirtæki sem þurfa að finna rétt verkefni fyrr.`,targetText:`VerkRadar hentar fyrirtækjum sem vilja vakta útboð, verðfyrirspurnir og verkefnavísbendingar án þess að opna sömu vefi handvirkt á hverjum degi.`,solutionEyebrow:`Lausnin`,solutionTitle:`Eitt skýrt yfirlit í stað dreifðrar leitar.`,solutionText:`VerkRadar breytir útboðshávaða í forgangsraðaðan lista yfir möguleg tækifæri sem fyrirtækið ætti að skoða.`,createProfileStep:`1. Við setjum upp prófíl`,createProfileStepText:`Við skráum þjónustu, svæði, lykilorð og verkefnastærðir sem henta ykkur.`,matchProjectsStep:`2. Finna tækifæri`,matchProjectsStepText:`Kerfið metur hvaða tækifæri gætu passað við fyrirtækjaprófílinn.`,getReportStep:`3. Fáið yfirlit`,getReportStepText:`Fáið skýrt yfirlit með frestum, ástæðum samsvörunar og næstu skrefum.`,sampleReportEyebrow:`Sýnishorn`,sampleReportTitle:`Stuttlisti sem sýnir hvað er þess virði að skoða.`,sampleReportText:`Sýnishornið sýnir hvernig VerkRadar raðar útboðum og mögulegum tækifærum eftir þjónustu, svæði, fresti og ástæðum.`,sourceDisclaimer:`VerkRadar hjálpar til við að forgangsraða tækifærum. Upprunaleg útboðsgögn eru alltaf endanleg heimild.`,pricingEyebrow:`VERÐSKRÁ`,pricingHeadline:`Einföld verðskrá fyrir útboðsvöktun`,pricingSubtitle:`Byrjaðu í prufu. Við setjum upp prófíl fyrir fyrirtækið og sendum yfirlit ef viðeigandi tækifæri finnast.`,pricingTrialPlan:`Ókeypis prufa`,pricingTrialPrice:`0 kr.`,pricingTrialSubtext:`í prufu`,pricingMonitoringPlan:`Grunnur`,pricingMonitoringPrice:`9.900 kr/mán.`,pricingMonitoringSubtext:`fyrir fyrstu fyrirtækin`,pricingCustomPlan:`Sérsniðið`,pricingCustomPrice:`Hafa samband`,pricingBadge:`Hentar flestum fyrirtækjum`,pricingTrialCta:`Fá prufuyfirlit`,pricingMonitoringCta:`Fá prufu`,pricingCustomCta:`Hafa samband`,pricingTrialManualProfile:`Fyrirtækjaprófíll settur upp handvirkt`,pricingTrialFiltering:`Síun eftir þjónustu og svæði`,pricingTrialReportIfRelevant:`Prufuyfirlit sent ef viðeigandi tækifæri finnast`,pricingTrialNoCommitment:`Engin binding`,pricingTrialNoCard:`Engin greiðslukort`,pricingMonitoringSources:`Vöktun á opinberum útboðum og tækifærum`,pricingMonitoringEmail:`Stutt yfirlit sent í tölvupósti`,pricingMonitoringFilters:`Síun eftir þjónustu, svæði og leitarorðum`,pricingMonitoringReminders:`Áminningar um mikilvæg skilafresti`,pricingMonitoringFeedback:`Prófíll uppfærður eftir endurgjöf`,pricingOneProfile:`1 fyrirtækjaprófíll`,pricingCustomProfiles:`Fleiri fyrirtækjaprófílar`,pricingCustomServices:`Fleiri þjónustusvið eða svæði`,pricingCustomMonitoring:`Sérstillt vöktun`,pricingCustomPriorityReview:`Forgangsyfirferð`,pricingCustomAudience:`Fyrir stærri verktaka eða þjónustufyrirtæki`,trialRequestEyebrow:`PRUFA`,trialRequestTitle:`Fá prufuyfirlit`,trialRequestSubtitle:`Segðu okkur stuttlega frá fyrirtækinu. Við skoðum upplýsingarnar og setjum upp prufuprófíl ef þetta passar.`,trialCompany:`Fyrirtæki`,trialContact:`Tengiliður`,trialEmail:`Netfang`,trialPhone:`Sími`,trialServices:`Hvaða þjónustu bjóðið þið?`,trialRegions:`Hvaða svæði viljið þið fylgjast með?`,trialNotes:`Athugasemd`,trialRequestHelper:`Við skoðum upplýsingarnar og setjum upp prufuprófíl ef þetta passar.`,trialRequestSubmit:`Senda beiðni`,trialRequestSuccess:`Takk. Beiðnin hefur verið skráð í þessu vafraglugga. Við höfum samband ef prufan passar við ykkar þjónustu.`,tryDemoTitle:`Prófið sýnimælaborðið.`,tryDemoText:`Hlaðið sýnifyrirtæki og sjáið hvernig tækifærin raðast.`,loadDemoCompany:`Hlaða sýnifyrirtæki`,authLoginTitle:`Skrá inn í VerkRadar`,authLoginSubtitle:`Fáið aðgang að mælaborði, vistuðum tækifærum og vikuyfirlitum.`,email:`Netfang`,password:`Lykilorð`,forgotPassword:`Gleymt lykilorð?`,loggingIn:`Skrái inn...`,newToVerkRadar:`Ný hjá VerkRadar?`,createAccount:`Stofna aðgang`,createAccountTitle:`Stofna VerkRadar aðgang`,createAccountSubtitle:`Byrjið á að stofna aðgang. Síðan stofnið þið fyrirtækjaprófíl.`,authRequiredTitle:`Skráðu þig inn til að halda áfram`,authRequiredText:`Þessi síða er aðgengileg eftir innskráningu.`,alreadyLoggedInTitle:`Þú ert þegar skráð(ur) inn`,alreadyLoggedInText:`Beini þér á næsta skref.`,signupCreatedConfirm:`Aðgangur stofnaður. Athugaðu tölvupóstinn þinn til að staðfesta aðganginn.`,inviteSignupCreatedConfirm:`Staðfestu netfangið í tölvupósti og komdu svo aftur til að virkja aðganginn.`,inviteSignupEmailHelp:`Notaðu boðna netfangið til að tengja aðganginn við rétt fyrirtæki.`,signupExistingAccount:`Þetta netfang er þegar með aðgang. Skráðu þig inn eða endurstilltu lykilorð.`,signupNeutralNextSteps:`Ef aðgangur er til fyrir þetta netfang færðu tölvupóst með næstu skrefum. Annars hefur nýr aðgangur verið stofnaður.`,emailOrPasswordIncorrect:`Netfang eða lykilorð er rangt.`,confirmEmailBeforeLogin:`Staðfestu netfangið þitt áður en þú skráir þig inn.`,passwordTooShort:`Lykilorð þarf að vera að minnsta kosti 6 stafir.`,tooManyAttempts:`Of margar tilraunir. Bíddu aðeins og reyndu aftur.`,couldNotCreateAccount:`Gat ekki stofnað aðgang. Athugaðu netfang og lykilorð.`,couldNotLogin:`Gat ekki skráð þig inn. Reyndu aftur.`,creating:`Stofna...`,alreadyHaveAccount:`Ertu þegar með aðgang?`,passwordReset:`Endurstilla lykilorð`,resetPasswordTitle:`Endurstilla lykilorð`,resetPasswordSubtitle:`Sláið inn netfang og VerkRadar sendir öruggan hlekk ef aðgangur er til.`,sending:`Sendi...`,sendResetLink:`Senda hlekk`,rememberedPassword:`Manstu lykilorðið?`,backToLogin:`Til baka í innskráningu`,newPassword:`Nýtt lykilorð`,chooseNewPassword:`Veldu nýtt lykilorð`,resetPasswordHelp:`Settu nýtt lykilorð fyrir VerkRadar aðganginn. Ef hlekkurinn er útrunninn skaltu biðja um nýjan.`,confirmNewPassword:`Staðfesta nýtt lykilorð`,updating:`Uppfæri...`,updatePassword:`Uppfæra lykilorð`,needNewLink:`Þarftu nýjan hlekk?`,sendAnotherResetLink:`Senda annan hlekk`,onboarding:`UPPSETNING`,onboardingTitle:`Settu upp fyrirtækið`,onboardingText:`Segðu okkur hvað fyrirtækið gerir svo VerkRadar geti fundið viðeigandi tækifæri.`,companyBasics:`1. Grunnupplýsingar`,companyName:`Fyrirtækisnafn`,kennitala:`Kennitala`,contactEmail:`Tengiliðanetfang`,billingEmail:`Netfang fyrir reikninga`,contactName:`Nafn tengiliðar`,phone:`Sími`,address:`Heimilisfang`,website:`Vefsíða`,industry:`Atvinnugrein`,selectIndustry:`Veldu atvinnugrein`,selectedPlan:`Valin áskrift`,plan_basic:`Grunnur`,plan_pro:`Pro`,plan_priority:`Forgangur`,servicesAndKeywords:`2. Þjónustur og leitarorð`,servicesHint:`Bætið við þjónustu sem þið bjóðið raunverulega upp á. Veldu mikilvægustu atriðin fyrst.`,servicesLabel:`Þjónustur`,servicesHelper:`Skráið þjónustuna sem fyrirtækið selur. Nákvæmari þjónusta gefur betri samsvaranir.`,extraWords:`Leitarorð`,includeKeywordsHelper:`Notið orð sem birtast oft í tækifærum sem þið viljið fá.`,excludeWords:`Orð sem ættu að lækka eða fjarlægja slæmar samsvaranir.`,excludeKeywordsHelper:`Orð sem ættu að lækka eða fjarlægja slæmar samsvaranir.`,suggestedServicesFor:`Tillögur að þjónustu fyrir {industry}`,suggestedKeywordsFor:`Tillögur að leitarorðum fyrir {industry}`,selectIndustryForServices:`Veljið atvinnugrein til að sjá þjónustutillögur`,selectIndustryForKeywords:`Veljið atvinnugrein til að sjá leitarorðatillögur`,locationsTitle:`3. Svæði`,locationsHint:`Notið Allt landið fyrir landsdekkandi útboð. Notið ferðastillingar ef þið getið boðið utan heimasvæðis fyrir rétt verkefni.`,baseLocation:`Heimasvæði`,baseLocationPlaceholder:`Dæmi: Austurland`,serviceAreas:`Þjónustusvæði, aðskilin með kommu`,serviceAreasPlaceholder:`Dæmi: Austurland, Allt landið`,travelScope:`Ferðir og umfang`,willingToTravel:`Tilbúin að ferðast fyrir rétt verkefni`,includeNational:`Sýna landsdekkandi tækifæri`,includeRemote:`Sýna fjarvinnu / netverkefni`,minimumTravelValue:`Lágmarksverðmæti fyrir ferðalög`,projectSize:`4. Stillingar`,minimumValue:`Lágmarksverðmæti`,maximumValue:`Hámarksverðmæti`,showUnknownValue:`Sýna tækifæri þó verðmæti vanti`,reportPreferences:`Yfirlitsstillingar`,frequency:`Tíðni`,weekly:`Vikulega`,daily:`Daglega`,reportDay:`Dagur yfirlits`,deadlineReminders:`Áminningar um skilafresti`,includeLowConfidence:`Sýna óvissar samsvaranir`,saveProfile:`Vista prófíl`,saving:`Vista...`,saved:`Vistað`,dashboard:`Mælaborð`,welcomeCompany:`Velkomin, {company}`,dashboardIntro:`Forgangsraðaðar tækifærasamsvaranir út frá þjónustu, svæðum og leitarorðum. {refresh}`,matchesLastRefreshed:`Síðast uppfært {time}.`,matchesAutoRefresh:`Samsvaranir uppfærast sjálfkrafa eftir vistun prófíls.`,refreshMatches:`Uppfæra samsvaranir`,refreshing:`Uppfæri...`,viewWeeklyReport:`Skoða yfirlit`,strongMatches:`Sterkar samsvaranir`,closingSoon:`Rennur út fljótlega`,savedLabel:`Vistað`,totalPotentialValue:`Áætlað heildarverðmæti`,searchOpportunities:`Leita í tækifærum...`,savedOnly:`Aðeins vistað`,improveProfile:`Bæta prófíl`,includeNationalOpportunities:`Sýna landsdekkandi tækifæri`,showAllStoredMatches:`Sýna allar samsvaranir`,inspectAllOpportunities:`Skoða öll tækifæri`,details:`Nánar`,save:`Vista`,ignore:`Hunsa`,originalLanguage:`Upprunalegt tungumál`,extractedProject:`Útdregið verkefni`,reportTitle:`Útboðs- og verkefnayfirlit`,setupCompanyFirst:`Settu fyrst upp fyrirtækið`,reportNeedsProfile:`Yfirlitið þarf fyrirtækjaprófíl til að geta fundið viðeigandi tækifæri.`,dashboardNeedsProfile:`Mælaborðið þarf fyrirtækjaprófíl til að reikna viðeigandi samsvaranir.`,weeklyReport:`Yfirlit`,saveReport:`Vista yfirlit`,savingReport:`Vista...`,downloadPdf:`Sækja PDF`,copyReport:`Afrita yfirlit`,reportArchive:`Yfirlitssafn`,savedReports:`Vistuð yfirlit`,loadingSavedReports:`Hleð vistuð yfirlit...`,noSavedReports:`Engin vistuð yfirlit enn.`,viewReport:`Skoða yfirlit`,closeReport:`Loka yfirliti`,generatedBy:`Útbúið af VerkRadar`,reportForCompany:`Útboðs- og verkefnayfirlit fyrir {company}`,openTenders:`Opin útboð / verðfyrirspurnir`,upcomingOpportunities:`Möguleg væntanleg tækifæri`,openTendersDescription:`Skýr útboðs- eða verðfyrirspurnarmerki. Yfirfarið frumgögn áður en brugðist er við.`,upcomingDescription:`Væntanleg útboðs- eða verkefnamerki með skýrum vísbendingum.`,reportFooter:`VerkRadar hjálpar til við að forgangsraða yfirferð opinberra tækifæra. Staðfestið alltaf útboðsgögn, skilafresti, kröfur og hæfi á upprunalegri heimild áður en brugðist er við.`,buyer:`Kaupandi`,source:`Heimild`,description:`Lýsing`,requirements:`Kröfur`,noSpecificRequirements:`Engar sérstakar kröfur skráðar.`,noDescription:`Engin lýsing tiltæk.`,noMatchReasons:`Engar ástæður samsvörunar tiltækar.`,matchReasons:`Ástæður samsvörunar`,opportunityInfo:`Upplýsingar um tækifæri`,extraction:`Útdráttur`,sourceArticle:`Heimildargrein`,parentArticle:`Upprunagrein`,openSourceArticle:`Opna heimildargrein`,extractedRegion:`Útdregið svæði`,projectNumber:`Verknúmer`,tenderState:`Staða útboðs`,quality:`Gæði`,category:`Flokkur`,type:`Tegund`,published:`Birt`,cpv:`CPV`,recommendedNextSteps:`Ráðlögð næstu skref`,noMajorRisks:`Engar stórar áhættur greindar í þessum gögnum.`,openSourceAndConfirm:`Opnið upprunalega heimild og staðfestið hæfi.`,removeFromSaved:`Fjarlægja úr vistuðum`,saveOpportunity:`Vista tækifæri`,markNotRelevant:`Merkja sem ekki viðeigandi`,publicProcurement:`Opinbert útboð`,area:`Svæði`,deadline:`Skilafrestur`,estimatedValue:`Áætlað verðmæti`,notFound:`Fannst ekki`,notListed:`Ekki gefið upp`,unknownBuyer:`Óþekktur kaupandi`,allIceland:`Allt landið`,whyThisMatters:`Af hverju þetta gæti skipt máli`,risksToCheck:`Atriði til að staðfesta`,openSource:`Opna heimild`,sourceLinkMissing:`Heimildartengil vantar`,strongMatch:`Sterk samsvörun`,goodMatch:`Góð samsvörun`,possibleMatch:`Möguleg samsvörun`,weakMatch:`Veik samsvörun`,confirmedTender:`Staðfest útboð`,likelyOpportunity:`Líklegt tækifæri`,earlySignal:`Væntanlegt tækifæri`,needsReview:`Þarfnast staðfestingar`,tenderAwarded:`Útboði lokið / samið`,tenderAlreadyAnnounced:`Útboð þegar auglýst`,upcomingTender:`Væntanlegt útboð`,projectSignal:`Verkefnavísbending`,nationalOpportunity:`Landsdekkandi tækifæri`,localMatch:`Staðbundin samsvörun`,mentionsService:`Nefnir þjónustu ykkar: {value}`,containsKeyword:`Inniheldur leitarorð: {value}`,procurement:`innkaup`},en:{navDashboard:`Dashboard`,navReport:`Report`,navPricing:`Pricing`,navSettings:`Settings`,navHowItWorks:`How it works`,navSampleReport:`Sample report`,login:`Login`,logout:`Logout`,getStarted:`Get a trial`,setupCompany:`Set up company`,createProfile:`Create profile`,companyProfile:`Company profile`,noCompanyProfile:`No company`,openMenu:`Open menu`,closeMenu:`Close menu`,privacyPolicy:`Privacy`,termsOfService:`Terms`,dataSources:`Data sources`,cookies:`Cookies`,security:`Security`,contact:`Contact`,footerText:`Tender and opportunity monitoring for businesses. VerkRadar helps you find and review public opportunities, but source documents remain the authority.`,loadingLabel:`Loading VerkRadar`,heroEyebrow:`Tender intelligence for working contractors`,heroTitle:`Stop losing valuable jobs to tabs you never opened.`,heroText:`VerkRadar monitors public sources and returns a short report of opportunities that may fit your trades and service areas.`,createFreeDemoProfile:`Get a trial report`,viewSampleReport:`View sample report`,proofStrong:`Contractors find relevant opportunities faster.`,proofText:`Top matches often include tenders outside the main databases.`,bestOpenMatch:`Shortlist`,tender:`Tender`,deadlineRisk:`Deadline risk`,daysLeft:`{count} days left`,problemEyebrow:`The problem`,problemTitle:`Opportunities are often lost before bidding starts.`,problemOneTitle:`Deadlines show up after your crew is already booked.`,problemOneText:`A short response window becomes a scramble, or a valuable contract never gets priced.`,problemTwoTitle:`The search takes longer than the go/no-go call.`,problemTwoText:`Owners spend hours opening low-fit tenders instead of seeing value, location, requirements and match reasons in one view.`,targetEyebrow:`Who it is for`,targetTitle:`Built for Icelandic companies that need to find the right jobs earlier.`,targetText:`VerkRadar is for teams that want to monitor tenders, quote requests and project signals without checking the same websites manually every day.`,solutionEyebrow:`The solution`,solutionTitle:`One clear report instead of scattered searching.`,solutionText:`VerkRadar turns tender noise into a ranked list of possible opportunities your business should review.`,createProfileStep:`1. We set up a profile`,createProfileStepText:`We register the services, regions, keywords and project sizes that fit your company.`,matchProjectsStep:`2. Find opportunities`,matchProjectsStepText:`The system checks which opportunities may fit the company profile.`,getReportStep:`3. Get report`,getReportStepText:`Receive a clear weekly report with deadlines and next steps.`,sampleReportEyebrow:`Sample report`,sampleReportTitle:`A shortlist that shows what is worth checking.`,sampleReportText:`Preview how VerkRadar ranks tenders and possible opportunities by service, region, deadline and reasons.`,sourceDisclaimer:`VerkRadar helps prioritize opportunity review. Original tender documents are always the final authority.`,pricingEyebrow:`PRICING`,pricingHeadline:`Simple pricing for tender monitoring`,pricingSubtitle:`Start with a trial. We set up a company profile and send a report if relevant opportunities are found.`,pricingTrialPlan:`Free trial`,pricingTrialPrice:`0 kr.`,pricingTrialSubtext:`during trial`,pricingMonitoringPlan:`VerkRadar Monitoring`,pricingMonitoringPrice:`9,900 kr/month`,pricingMonitoringSubtext:`for the first companies`,pricingCustomPlan:`Custom`,pricingCustomPrice:`Contact us`,pricingBadge:`Best for most businesses`,pricingTrialCta:`Get trial report`,pricingMonitoringCta:`Get a trial`,pricingCustomCta:`Contact us`,pricingTrialManualProfile:`Company profile set up manually`,pricingTrialFiltering:`Filtering by services and regions`,pricingTrialReportIfRelevant:`Trial report sent if relevant opportunities are found`,pricingTrialNoCommitment:`No commitment`,pricingTrialNoCard:`No credit card`,pricingMonitoringSources:`Monitoring of public tenders and opportunities`,pricingMonitoringEmail:`Short report sent by email`,pricingMonitoringFilters:`Filtering by services, regions and keywords`,pricingMonitoringReminders:`Reminders for important deadlines`,pricingMonitoringFeedback:`Profile updated based on feedback`,pricingOneProfile:`1 company profile`,pricingCustomProfiles:`More company profiles`,pricingCustomServices:`More service areas or regions`,pricingCustomMonitoring:`Custom monitoring`,pricingCustomPriorityReview:`Priority review`,pricingCustomAudience:`For larger contractors or service companies`,trialRequestEyebrow:`TRIAL`,trialRequestTitle:`Get a trial report`,trialRequestSubtitle:`Tell us briefly about your company. We will review the information and set up a trial profile if it fits.`,trialCompany:`Company`,trialContact:`Contact person`,trialEmail:`Email`,trialPhone:`Phone`,trialServices:`What services do you provide?`,trialRegions:`Which regions do you want to monitor?`,trialNotes:`Notes`,trialRequestHelper:`We will review the information and set up a trial profile if this fits.`,trialRequestSubmit:`Send request`,trialRequestSuccess:`Thanks. The request has been recorded in this browser session. We will follow up if the trial fits your services.`,tryDemoTitle:`Try the demo dashboard now.`,tryDemoText:`Load a sample company profile and see how the matching works.`,loadDemoCompany:`Load demo company`,authLoginTitle:`Login to VerkRadar`,authLoginSubtitle:`Access your company dashboard, saved opportunities and weekly reports.`,email:`Email`,password:`Password`,forgotPassword:`Forgot password?`,loggingIn:`Logging in...`,newToVerkRadar:`New to VerkRadar?`,createAccount:`Create account`,createAccountTitle:`Create your VerkRadar account`,createAccountSubtitle:`Start by creating an account. Then you’ll create your company profile.`,authRequiredTitle:`Log in to continue`,authRequiredText:`This page is available after you sign in.`,alreadyLoggedInTitle:`Already logged in`,alreadyLoggedInText:`Redirecting you to the next step.`,signupCreatedConfirm:`Account created. Check your email to confirm your account.`,inviteSignupCreatedConfirm:`Confirm your email, then return here to activate company access.`,inviteSignupEmailHelp:`Use the invited email to connect your login to the right company.`,signupExistingAccount:`This email already has an account. Log in or reset your password.`,signupNeutralNextSteps:`If an account exists for this email, you’ll receive an email with next steps. Otherwise, a new account has been created.`,emailOrPasswordIncorrect:`Email or password is incorrect.`,confirmEmailBeforeLogin:`Please confirm your email before logging in.`,passwordTooShort:`Password must be at least 6 characters.`,tooManyAttempts:`Too many attempts. Please wait a moment and try again.`,couldNotCreateAccount:`Could not create account. Please check your email and password.`,couldNotLogin:`Could not log in. Please try again.`,creating:`Creating...`,alreadyHaveAccount:`Already have an account?`,passwordReset:`Password reset`,resetPasswordTitle:`Reset your password`,resetPasswordSubtitle:`Enter your email and VerkRadar will send a secure reset link if the account exists.`,sending:`Sending...`,sendResetLink:`Send reset link`,rememberedPassword:`Remembered your password?`,backToLogin:`Back to login`,newPassword:`New password`,chooseNewPassword:`Choose a new password`,resetPasswordHelp:`Set a new password for your VerkRadar account. If the link has expired, request a new reset link.`,confirmNewPassword:`Confirm new password`,updating:`Updating...`,updatePassword:`Update password`,needNewLink:`Need a new link?`,sendAnotherResetLink:`Send another reset link`,onboarding:`SETUP`,onboardingTitle:`Set up your company`,onboardingText:`Tell us what your company does so VerkRadar can find relevant opportunities.`,companyBasics:`1. Basic information`,companyName:`Company name`,kennitala:`Kennitala`,contactEmail:`Contact email`,billingEmail:`Billing email`,contactName:`Contact name`,phone:`Phone`,address:`Address`,website:`Website`,industry:`Industry`,selectIndustry:`Select industry`,selectedPlan:`Selected plan`,plan_basic:`Basic`,plan_pro:`Pro`,plan_priority:`Priority`,servicesAndKeywords:`2. Services and keywords`,servicesHint:`Add services you actually provide. Start with the most important ones.`,servicesLabel:`Services`,servicesHelper:`Add the services your company actually sells. More specific services create better matches.`,extraWords:`Keywords`,includeKeywordsHelper:`Use words that often appear in opportunities you want.`,excludeWords:`Words that should lower or remove bad matches.`,excludeKeywordsHelper:`Words that should lower or remove bad matches.`,suggestedServicesFor:`Suggested services for {industry}`,suggestedKeywordsFor:`Suggested keywords for {industry}`,selectIndustryForServices:`Select an industry to see service suggestions`,selectIndustryForKeywords:`Select an industry to see keyword suggestions`,locationsTitle:`3. Locations`,locationsHint:`Use All Iceland for national tenders. Use travel settings when you can bid outside your base area for the right project size.`,baseLocation:`Base location`,baseLocationPlaceholder:`Example: East Iceland`,serviceAreas:`Service areas, comma separated`,serviceAreasPlaceholder:`Example: East Iceland, All Iceland`,travelScope:`Travel and scope`,willingToTravel:`Willing to travel for the right project`,includeNational:`Include national / All Iceland opportunities`,includeRemote:`Include remote / online opportunities`,minimumTravelValue:`Minimum project value for travel`,projectSize:`4. Settings`,minimumValue:`Minimum value`,maximumValue:`Maximum value`,showUnknownValue:`Show opportunities even if value is unknown`,reportPreferences:`Report preferences`,frequency:`Frequency`,weekly:`Weekly`,daily:`Daily`,reportDay:`Report day`,deadlineReminders:`Deadline reminders`,includeLowConfidence:`Include low-confidence matches`,saveProfile:`Save profile`,saving:`Saving...`,saved:`Saved`,dashboard:`Dashboard`,welcomeCompany:`Welcome, {company}`,dashboardIntro:`Ranked project opportunities based on your services, locations and keywords. {refresh}`,matchesLastRefreshed:`Last refreshed {time}.`,matchesAutoRefresh:`Matches refresh automatically after profile saves.`,refreshMatches:`Refresh matches`,refreshing:`Refreshing...`,viewWeeklyReport:`View report`,strongMatches:`Strong matches`,closingSoon:`Closing soon`,savedLabel:`Saved`,totalPotentialValue:`Total potential value`,searchOpportunities:`Search opportunities...`,savedOnly:`Saved only`,improveProfile:`Improve profile`,includeNationalOpportunities:`Include national opportunities`,showAllStoredMatches:`Show all matches`,inspectAllOpportunities:`Inspect all opportunities`,details:`Details`,save:`Save`,ignore:`Ignore`,originalLanguage:`Original language`,extractedProject:`Extracted project`,reportTitle:`Tender and opportunity report`,setupCompanyFirst:`Set up your company first`,reportNeedsProfile:`The report needs a company profile before it can generate relevant opportunity matches.`,dashboardNeedsProfile:`The dashboard needs a company profile so it can calculate relevant opportunity matches.`,weeklyReport:`Report`,saveReport:`Save report`,savingReport:`Saving...`,downloadPdf:`Download PDF`,copyReport:`Copy report`,reportArchive:`Report archive`,savedReports:`Saved reports`,loadingSavedReports:`Loading saved reports...`,noSavedReports:`No saved reports yet.`,viewReport:`View report`,closeReport:`Close report`,generatedBy:`Generated by VerkRadar`,reportForCompany:`Tender and opportunity report for {company}`,openTenders:`Open tenders / quote requests`,upcomingOpportunities:`Possible upcoming opportunities`,openTendersDescription:`Clear procurement intent. Review source documents before acting.`,upcomingDescription:`Upcoming procurement or project signals with clear evidence.`,reportFooter:`VerkRadar helps prioritise public opportunity review. Always check the original source documents, deadlines, requirements and eligibility before acting.`,buyer:`Buyer`,source:`Source`,description:`Description`,requirements:`Requirements`,noSpecificRequirements:`No specific requirements listed.`,noDescription:`No description available.`,noMatchReasons:`No match reasons available.`,matchReasons:`Match reasons`,opportunityInfo:`Opportunity info`,extraction:`Extraction`,sourceArticle:`Source article`,parentArticle:`Parent article`,openSourceArticle:`Open source article`,extractedRegion:`Extracted region`,projectNumber:`Project number`,tenderState:`Tender state`,quality:`Quality`,category:`Category`,type:`Type`,published:`Published`,cpv:`CPV`,recommendedNextSteps:`Recommended next steps`,noMajorRisks:`No major risks detected in this data.`,openSourceAndConfirm:`Open the source notice and confirm eligibility.`,removeFromSaved:`Remove from saved`,saveOpportunity:`Save opportunity`,markNotRelevant:`Mark not relevant`,publicProcurement:`Public procurement`,area:`Location`,deadline:`Deadline`,estimatedValue:`Estimated value`,notFound:`Not found`,notListed:`Not listed`,unknownBuyer:`Unknown buyer`,allIceland:`All Iceland`,whyThisMatters:`Why this matters`,risksToCheck:`Risks / things to check`,openSource:`Open source`,sourceLinkMissing:`Source link missing`,strongMatch:`Strong match`,goodMatch:`Good match`,possibleMatch:`Possible match`,weakMatch:`Weak match`,confirmedTender:`Confirmed tender`,likelyOpportunity:`Likely opportunity`,earlySignal:`Early signal`,needsReview:`Needs review`,tenderAwarded:`Tender awarded`,tenderAlreadyAnnounced:`Tender already announced`,upcomingTender:`Upcoming tender`,projectSignal:`Project signal`,nationalOpportunity:`National opportunity`,localMatch:`Local match`,mentionsService:`Mentions your service: {value}`,containsKeyword:`Contains your keyword: {value}`,procurement:`procurement`}};function n(e){let t=localStorage.getItem(e.language);return t===`en`||t===`is`?t:`is`}function r(e,n,r={}){let i=t[e||`is`]||t.is,a=t.en[n]||t.is[n]||n;return String(i[n]||a).replace(/\{(\w+)\}/g,(e,t)=>r[t]??``)}var i={services:{Electrical:[`raflagnir`,`rafvirki`,`brunakerfi`,`öryggiskerfi`,`lýsing`,`viðhald`,`þjónusta`,`hleðslustöðvar`,`töflusmíði`,`rafmagnseftirlit`],"IT / Web / Software":[`vefsíðugerð`,`vefhönnun`,`hugbúnaðarþróun`,`kerfisþróun`,`vefverslun`,`aðgengi`,`CMS`,`gagnagrunnar`,`viðhald`,`ráðgjöf`],Cleaning:[`Office cleaning`,`School cleaning`,`Facility cleaning`,`Window cleaning`,`Deep cleaning`,`Floor care`,`Municipal cleaning`,`Regular cleaning contracts`],Transport:[`Passenger transport`,`Goods transport`,`Healthcare transport`,`School transport`,`Shuttle services`,`Delivery services`,`Framework transport services`],Construction:[`jarðvinna`,`gatnagerð`,`vegagerð`,`malbikun`,`brúargerð`,`lagnavinna`,`framkvæmdir`,`viðhald`,`steypa`,`húsbyggingar`,`þakvinna`]},includeKeywords:{Electrical:[`rafmagn`,`rafvirki`,`brunakerfi`,`hleðslustöð`,`öryggiskerfi`,`myndavélakerfi`,`lýsing`,`viðhald`,`lagnir`,`neyðarlýsing`]}},a={companyName:`RafFix ehf.`,contactEmail:`owner@raffix.is`,website:`https://raffix.is`,industry:`Electrical`,services:[`electrical installation`,`maintenance`,`fire alarm systems`,`EV chargers`],includeKeywords:[`charging`,`inspection`,`public buildings`],excludeKeywords:[`telecom`,`snow removal`],locations:[`Reykjavík`,`Capital Area`,`Suðurnes`,`Remote / Online`],minProjectValue:5e5,maxProjectValue:3e7,allowUnknownValue:!0,reportFrequency:`weekly`,reportDay:`monday`,deadlineReminders:!0,includeLowConfidence:!1,autoAlertMode:`auto_safe_only`};function o(e=``){return{companyName:``,kennitala:``,contactEmail:e||``,billingEmail:e||``,contactName:``,phone:``,address:``,website:``,industry:``,selectedPlan:`basic`,billingStatus:`trial`,trialStartedAt:``,trialEndsAt:``,services:[],includeKeywords:[],excludeKeywords:[],locations:[],baseLocation:``,serviceAreas:[],willingToTravel:!1,nationalProjects:!1,remoteProjects:!1,minimumProjectValueForTravel:``,minProjectValue:``,maxProjectValue:``,allowUnknownValue:!0,reportFrequency:`weekly`,reportDay:`monday`,deadlineReminders:!0,includeLowConfidence:!1,autoAlertMode:`auto_safe_only`}}function s(e,t=`is`){let n=t===`is`;return{privacy:n?{eyebrow:`Lög og traust`,title:`Persónuvernd`,intro:`Hér er útskýrt á einföldu máli hvaða gögn VerkRadar vistar og hvernig þau eru notuð til að veita þjónustuna.`,sections:[[`Persónuvernd`,[`VerkRadar er vöktunar- og yfirlitskerfi fyrir fyrirtæki. Kerfið notar gögn sem notandi setur inn og opinber gögn um útboð og verkefni til að hjálpa fyrirtækjum að finna það sem gæti passað.`]],[`Hvaða gögn eru vistuð`,[`VerkRadar getur vistað fyrirtækjaheiti, tengiliðanetfang, vefslóð, atvinnugrein, þjónustuflokka, staðsetningar, leitarorð, stillingar, vistuð og hunsuð verkefni, samsvaranir og yfirlit.`,`Kerfið vistar einnig innskráningar- og lotugögn sem þarf til að halda notendum innskráðum og vernda aðgang.`]],[`Innskráning og aðgangur`,[`Notendur skrá sig inn með auðkenndum aðgangi. Aðgangur að mælaborði, stillingum og skýrslum er tengdur við notanda og fyrirtæki eftir því sem við á.`]],[`Fyrirtækjaprófíll og stillingar`,[`Fyrirtækjaprófíllinn er notaður til að bera opinber verkefni saman við þjónustu, svæði, lykilorð og óskir fyrirtækisins. Betri prófíll gefur yfirleitt betri samsvörun.`]],[`Vistuð og hunsuð tækifæri`,[`VerkRadar getur vistað hvaða verkefni notandi vistar, fylgist með eða hunsar. Þetta er notað til að bæta upplifun, síur og yfirlit.`]],[`Vafrakökur og vafrageymsla`,[`VerkRadar notar nauðsynlega vafrageymslu, lotugeymslu og sambærilega virkni fyrir innskráningu, Supabase Auth lotur, tungumál, stillingar og grunnvirkni appsins.`,`Við gerum ekki ráð fyrir auglýsinga- eða rekjanlegri markaðssetningargeymslu í þessari útgáfu. Ef greiningar eða auglýsingatól verða síðar bætt við þarf að uppfæra þessa lýsingu.`]],[`Hafa samband`,[`Spurningar um persónuvernd eða gögn má senda á info@froststudio.net.`]]]}:{eyebrow:`Legal and trust`,title:`Privacy`,intro:`This page explains in practical terms what VerkRadar stores and how that data is used to provide the service.`,sections:[[`Privacy`,[`VerkRadar is a monitoring and reporting tool for businesses. It uses user-entered company data and public tender/project data to help companies find relevant opportunities.`]],[`What data is stored`,[`VerkRadar may store company name, contact email, website, industry, service categories, locations, keywords, settings, saved and ignored opportunities, matches, and reports.`,`The system also stores login and session data needed to keep users signed in and protect account access.`]],[`Login and access`,[`Users log in with authenticated accounts. Access to dashboards, settings, and reports is connected to the user and company where applicable.`]],[`Company profile and settings`,[`The company profile is used to compare public opportunities against services, locations, keywords, and company preferences. A better profile usually creates better matches.`]],[`Saved and ignored opportunities`,[`VerkRadar may store which opportunities a user saves, watches, or ignores. This is used to improve the experience, filters, and reports.`]],[`Cookies and browser storage`,[`VerkRadar uses essential browser storage, session storage, and similar functionality for login, Supabase Auth sessions, language, preferences, and core app functionality.`,`We do not currently claim to use advertising or marketing tracking storage in this version. If analytics or advertising tools are added later, this section should be updated.`]],[`Contact`,[`Questions about privacy or data can be sent to info@froststudio.net.`]]]},terms:n?{eyebrow:`Lög og traust`,title:`Skilmálar`,intro:`Þessir skilmálar lýsa notkun VerkRadar á einföldu máli. Þeir eru ekki endanleg lögfræðiráðgjöf.`,sections:[[`Skilmálar`,[`Með því að nota VerkRadar samþykkir notandi að nota þjónustuna á ábyrgan hátt og staðfesta alltaf upplýsingar á upprunalegri heimild áður en brugðist er við.`]],[`Þjónustan`,[`VerkRadar vaktar opinberar heimildir, útboðsvefi, sveitarfélagssíður og aðrar heimildir þar sem það er heimilt og tæknilega mögulegt. Kerfið raðar verkefnum eftir fyrirtækjaprófíl og býr til mælaborð eða yfirlit.`]],[`Upprunaleg gögn eru endanleg heimild`,[`VerkRadar hjálpar til við að forgangsraða yfirferð opinberra tækifæra. Upprunaleg útboðsgögn, skilafrestir, kröfur og hæfisskilyrði á upprunalegri heimild eru alltaf endanleg heimild.`]],[`Engin trygging um fullkomna vöktun`,[`VerkRadar tryggir ekki að öll útboð finnist, að öll gögn séu fullkomin, að samsvörun sé alltaf rétt eða að fyrirtæki uppfylli skilyrði eða vinni verk.`]],[`Prufuaðgangur og verð`,[`Prufuaðgangur, verð, greiðslur og uppsagnir ráðast af verðsíðu, pöntunarsíðu eða skriflegu samkomulagi hverju sinni.`]],[`Uppsögn`,[`Notandi getur óskað eftir lokun eða breytingu á aðgangi. VerkRadar getur takmarkað aðgang ef þjónustan er misnotuð, greiðslur vantar eða öryggisáhætta kemur upp.`]],[`Ábyrgðartakmörkun`,[`VerkRadar ber ekki ábyrgð á töpuðum skilafrestum, röngum upplýsingum á upprunalegum heimildum, viðskiptatapi eða ákvörðunum sem teknar eru út frá yfirlitum án staðfestingar á frumgögnum.`]],[`Hafa samband`,[`Spurningar um skilmála má senda á info@froststudio.net.`]]]}:{eyebrow:`Legal and trust`,title:`Terms`,intro:`These terms describe VerkRadar use in plain language. They are not final legal advice.`,sections:[[`Terms`,[`By using VerkRadar, users agree to use the service responsibly and always verify information at the original source before acting.`]],[`The service`,[`VerkRadar monitors public sources, procurement portals, municipal pages, and other sources where allowed and technically feasible. The system ranks opportunities against company profiles and creates dashboards or reports.`]],[`Original data is the final authority`,[`VerkRadar helps prioritize review of public opportunities. Original tender documents, deadlines, requirements, and eligibility criteria at the original source are always the final authority.`]],[`No guarantee of complete monitoring`,[`VerkRadar does not guarantee that every tender is found, that all data is complete, that matching is always correct, or that a company is eligible for or will win any contract.`]],[`Trial access and pricing`,[`Trial access, pricing, billing, and cancellation are governed by the pricing page, order page, or written agreement in effect at the time.`]],[`Cancellation`,[`A user may request account changes or cancellation. VerkRadar may restrict access if the service is misused, payment is missing, or a security risk arises.`]],[`Limitation of liability`,[`VerkRadar is not responsible for missed deadlines, incorrect information at original sources, business losses, or decisions made from reports without checking source documents.`]],[`Contact`,[`Questions about these terms can be sent to info@froststudio.net.`]]]},data:n?{eyebrow:`Gagnaheimildir`,title:`Gagnaheimildir`,intro:`VerkRadar notar opinberar heimildir til að hjálpa fyrirtækjum að finna verkefni sem gætu skipt máli.`,sections:[[`Gagnaheimildir`,[`Kerfið safnar og samræmir opinberar upplýsingar þar sem slíkt er heimilt og tæknilega mögulegt.`]],[`Opinberar heimildir`,[`Heimildir geta verið útboðsvefir, opinberar stofnanir, RSS straumar, sveitarfélagssíður og aðrar opinberar síður.`]],[`Sveitarfélög og útboðsvefir`,[`VerkRadar getur vaktað sveitarfélög, innkaupa- og útboðsvefi og sértækar síður fyrir framkvæmdir, þjónustu eða innkaup.`]],[`Evrópsk útboð ef við á`,[`Evrópsk útboð geta verið sótt úr TED eða sambærilegum heimildum þegar þau eiga við markaðinn og fyrirtækjaprófíla.`]],[`Takmarkanir gagna`,[`Sumar heimildir veita ekki fulla skilafresti, verðmæti, kaupanda eða útboðsgögn í véllesanlegu formi. Gögn geta verið seinkuð, ófullkomin, tvítekin eða breytt á upprunalegri síðu.`]],[`Leiðréttingar`,[`Ef þú sérð rangar eða úreltar upplýsingar má senda ábendingu á info@froststudio.net. Opnið alltaf upprunalega heimild áður en brugðist er við.`]]]}:{eyebrow:`Data sources`,title:`Data sources`,intro:`VerkRadar uses public sources to help businesses find projects that may matter.`,sections:[[`Data sources`,[`The system collects and normalizes public information where allowed and technically feasible.`]],[`Public sources`,[`Sources can include procurement portals, public institutions, RSS feeds, municipal pages, and other official public pages.`]],[`Municipalities and procurement portals`,[`VerkRadar may monitor municipalities, procurement/tender portals, and specific pages for construction, services, or purchasing.`]],[`European tenders where applicable`,[`European tenders may be imported from TED or similar sources when relevant to the market and company profiles.`]],[`Data limitations`,[`Some sources do not provide full deadlines, values, buyer data, or tender documents in machine-readable form. Data may be delayed, incomplete, duplicated, or changed at the original source.`]],[`Corrections`,[`If you see incorrect or outdated information, send a correction to info@froststudio.net. Always open the original source before acting.`]]]},security:n?{eyebrow:`Öryggi`,title:`Öryggi`,intro:`VerkRadar notar innskráningu, aðgangsstýringu og aðskilnað gagna til að vernda fyrirtækjaupplýsingar.`,sections:[[`Öryggi`,[`Við reynum að halda öryggisupplýsingum hagnýtum og heiðarlegum. VerkRadar fullyrðir ekki um vottanir sem hafa ekki verið fengnar.`]],[`Innskráning`,[`Notendur skrá sig inn með auðkenndum aðgangi. Innskráning og lotur eru hluti af grunnvirkni appsins.`]],[`Aðgangsstýring`,[`Aðgangur að fyrirtækjagögnum, samsvörunum og skýrslum er aðgreindur eftir notanda og fyrirtæki þar sem það á við.`]],[`Fyrirtækjagögn`,[`Fyrirtækjaprófílar, stillingar og vistuð/hunsuð verkefni eru notuð til að veita þjónustuna og ættu ekki að vera sýnileg öðrum viðskiptavinum.`]],[`Admin aðgangur`,[`Admin verkfæri eru takmörkuð við skilgreinda stjórnendur og eru notuð til að fylgjast með heimildum, innflutningi, fyrirtækjum og handvirkri yfirferð.`]],[`Tilkynna vandamál`,[`Öryggisspurningar eða ábendingar má senda á info@froststudio.net.`]]]}:{eyebrow:`Security`,title:`Security`,intro:`VerkRadar uses authentication, access control, and data separation to protect company information.`,sections:[[`Security`,[`We try to keep security information practical and honest. VerkRadar does not claim certifications it has not obtained.`]],[`Login`,[`Users log in with authenticated accounts. Login and sessions are part of the app’s core functionality.`]],[`Access control`,[`Access to company data, matches, and reports is separated by user and company where applicable.`]],[`Company data`,[`Company profiles, settings, and saved/ignored opportunities are used to provide the service and should not be visible to other customers.`]],[`Admin access`,[`Admin tools are restricted to defined administrators and are used to monitor sources, imports, companies, and manual review.`]],[`Report an issue`,[`Security questions or reports can be sent to info@froststudio.net.`]]]},contact:n?{eyebrow:`Hafa samband`,title:`Hafa samband`,intro:`Viltu prófa VerkRadar, spyrja um vöktun eða benda á leiðréttingu?`,sections:[[`VerkRadar / Frost Studio`,[`Netfang: info@froststudio.net`,`Tengiliður: Kristján Jakob`]]]}:{eyebrow:`Contact`,title:`Contact`,intro:`Want to try VerkRadar, ask about monitoring, or report a correction?`,sections:[[`VerkRadar / Frost Studio`,[`Email: info@froststudio.net`,`Contact person: Kristján Jakob`]]]}}[e]}var c=`https://asojxjbsgqbfpbepojzh.supabase.co`,l=window.supabase?window.supabase.createClient(c,`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFzb2p4amJzZ3FiZnBiZXBvanpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAwNTU2NjgsImV4cCI6MjA5NTYzMTY2OH0.yPA34VbqWqKrBPespmHr5AojYzjhy3kGRxswO9XdAd0`):null,u=`verkradar_pending_invite_token`,d=`verkradar_pending_invite_flow`,f=`verkradar_legacy_pending_invite_token`,p=1e3*60*60*24*7;function m(e){return String(e||``).trim().toLowerCase()}function h(){return window.VERKRADAR_COMPANY_INVITE_URL?window.VERKRADAR_COMPANY_INVITE_URL:window.VERKRADAR_SUPABASE_URL?`${window.VERKRADAR_SUPABASE_URL}/functions/v1/company-invite`:`${c}/functions/v1/company-invite`}function g(e){let t=String(e||``),n=t.includes(`?`)?t.slice(t.indexOf(`?`)+1):``;return new URLSearchParams(n).get(`token`)||new URLSearchParams(n).get(`invite`)||``}function ee(e){return le(e)===`/accept-invite`}function te(e){let t=le(e);return[`/login`,`/signup`,`/forgot-password`].includes(t)&&!!g(e)}function _(e){return ee(e)||te(e)||ue(e)&&!!v()}function ne(e){return _(e)?g(e)||v():(y(),``)}function v(){try{localStorage.removeItem(f)}catch{}try{let e=sessionStorage.getItem(u)||``;if(e)return e;let t=JSON.parse(localStorage.getItem(d)||`null`);return!t?.token||!t?.expires_at||new Date(t.expires_at).getTime()<Date.now()?(localStorage.removeItem(d),``):String(t.token||``).trim()}catch{return``}}function re(e){let t=String(e||``).trim();try{t&&(sessionStorage.setItem(u,t),localStorage.setItem(d,JSON.stringify({token:t,created_at:new Date().toISOString(),expires_at:new Date(Date.now()+p).toISOString()})))}catch{}return t}function y(){try{sessionStorage.removeItem(u),localStorage.removeItem(d),localStorage.removeItem(f)}catch{}}function b(e){let t=String(e||``).trim();return t?`${window.location.origin}/#/accept-invite?token=${encodeURIComponent(t)}`:``}async function x(e){let t=h();if(!t)throw Error(`Company invite function is not configured.`);let n=await fetch(t,{method:`POST`,headers:oe(),body:JSON.stringify({action:`preview`,token:e})}),r=await ce(n);if(!n.ok){let e=Error(r.error||r.message||`Invite preview failed with status ${n.status}`);throw e.details=r,e}return r}async function S(e){let t=h();if(!t)throw Error(`Company invite function is not configured.`);let n=await fetch(t,{method:`POST`,headers:await se(),body:JSON.stringify({action:`accept`,token:e})}),r=await ce(n);if(!n.ok){let e=Error(r.error||r.message||`Invite acceptance failed with status ${n.status}`);throw e.details=r,e}return r}async function ie(e,t,n={}){let r=String(n.token||``).trim();if(r)return[await S(r)];let i=m(t?.email);if(!e||!t?.id||!i||n.allowEmailClaim!==!0)return[];let{data:a,error:o}=await e.from(`company_members`).select(`id, company_id, email, role, status`).eq(`email_normalized`,i).eq(`status`,`invited`);if(o)throw o;let s=a||[];if(!s.length)return[];let c=[];for(let n of s){let{data:r,error:a}=await e.from(`company_members`).update({user_id:t.id,status:`active`,accepted_at:new Date().toISOString(),revoked_at:null,updated_at:new Date().toISOString()}).eq(`id`,n.id).eq(`email_normalized`,i).eq(`status`,`invited`).select(`id, company_id, email, role, status, accepted_at`).maybeSingle();if(a)throw a;r&&c.push(r)}return c}async function ae(e,t){if(!e||!t?.id)return[];let{data:n,error:r}=await e.from(`company_members`).select(`id, company_id, email, role, status, accepted_at`).eq(`user_id`,t.id).eq(`status`,`active`).order(`accepted_at`,{ascending:!0});if(r)throw r;return n||[]}function oe(){let e={"content-type":`application/json`},t=window.VERKRADAR_SUPABASE_ANON_KEY||`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFzb2p4amJzZ3FiZnBiZXBvanpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAwNTU2NjgsImV4cCI6MjA5NTYzMTY2OH0.yPA34VbqWqKrBPespmHr5AojYzjhy3kGRxswO9XdAd0`;return t&&(e.apikey=t),e}async function se(){let e=oe(),{data:t,error:n}=l?await l.auth.getSession():{data:{session:null},error:null};if(n)throw n;let r=t.session?.access_token;if(!r)throw Error(`You must be logged in to accept this invite.`);return e.authorization=`Bearer ${r}`,e}async function ce(e){let t=await e.text();if(!t)return{};try{return JSON.parse(t)}catch{return{error:t}}}function le(e){let t=String(e||`/`);return(t.startsWith(`/`)?t:`/${t}`).split(`?`)[0]||`/`}function ue(e){let t=String(e||``);return t.startsWith(`access_token=`)||t.startsWith(`code=`)||t.includes(`access_token=`)||t.includes(`code=`)||t.includes(`type=signup`)||t.includes(`type=email_change`)}function de(){return window.VERKRADAR_DAILY_PIPELINE_URL?window.VERKRADAR_DAILY_PIPELINE_URL:window.VERKRADAR_SUPABASE_URL?`${window.VERKRADAR_SUPABASE_URL}/functions/v1/daily-pipeline`:`${c}/functions/v1/daily-pipeline`}async function fe(){let e=de();if(!e)throw Error(`Daily pipeline function is not configured. Set window.VERKRADAR_DAILY_PIPELINE_URL or window.VERKRADAR_SUPABASE_URL.`);let t=await pe(),n=await fetch(e,{method:`POST`,headers:t,body:JSON.stringify({runDailyPipeline:!0})}),r=await me(n);if(!n.ok&&n.status!==207)throw Error(r.error||r.message||`Daily pipeline failed with status ${n.status}`);return r}async function pe(){let e={"content-type":`application/json`},t=window.VERKRADAR_SUPABASE_ANON_KEY||`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFzb2p4amJzZ3FiZnBiZXBvanpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAwNTU2NjgsImV4cCI6MjA5NTYzMTY2OH0.yPA34VbqWqKrBPespmHr5AojYzjhy3kGRxswO9XdAd0`;t&&(e.apikey=t);let{data:n,error:r}=l?await l.auth.getSession():{data:{session:null},error:null};if(r)throw r;let i=n.session?.access_token;if(!i)throw Error(`You must be logged in as an admin to run the daily pipeline.`);return e.authorization=`Bearer ${i}`,e}async function me(e){let t=await e.text();if(!t)return{};try{return JSON.parse(t)}catch{return{error:t}}}function he(){return window.VERKRADAR_AI_REVIEW_MATCH_URL?window.VERKRADAR_AI_REVIEW_MATCH_URL:window.VERKRADAR_SUPABASE_URL?`${window.VERKRADAR_SUPABASE_URL}/functions/v1/ai-review-match`:`${c}/functions/v1/ai-review-match`}async function ge(e,t={}){let n=he();if(!n)throw Error(`AI review function is not configured. Set window.VERKRADAR_AI_REVIEW_MATCH_URL or window.VERKRADAR_SUPABASE_URL.`);let r=await Se(),i=await fetch(n,{method:`POST`,headers:r,body:JSON.stringify({matchId:e,force:t.force===!0})}),a=await Ce(i);if(!i.ok)throw Error(a.error||a.message||`AI review failed with status ${i.status}`);return a}async function _e(e,t={}){let n=he();if(!n)throw Error(`AI review function is not configured. Set window.VERKRADAR_AI_REVIEW_MATCH_URL or window.VERKRADAR_SUPABASE_URL.`);let r=await Se(),i=await fetch(n,{method:`POST`,headers:r,body:JSON.stringify({batch:!0,companyId:e,limit:Math.max(1,Math.min(20,Number(t.limit||10))),force:t.force===!0,revalidate:t.revalidate===!0})}),a=await Ce(i);if(!i.ok)throw Error(a.error||a.message||`AI review batch failed with status ${i.status}`);return a}async function ve(e={}){let t=he();if(!t)throw Error(`AI review function is not configured. Set window.VERKRADAR_AI_REVIEW_MATCH_URL or window.VERKRADAR_SUPABASE_URL.`);let n=await Se(),r=await fetch(t,{method:`POST`,headers:n,body:JSON.stringify({auto:!0,limit:Math.max(1,Math.min(10,Number(e.limit||10)))})}),i=await Ce(r);if(!r.ok)throw Error(i.error||i.message||`Automatic AI review failed with status ${r.status}`);return i}async function ye(e,t){let n=he();if(!n)throw Error(`AI review function is not configured. Set window.VERKRADAR_AI_REVIEW_MATCH_URL or window.VERKRADAR_SUPABASE_URL.`);let r=await Se(),i=await fetch(n,{method:`POST`,headers:r,body:JSON.stringify({setCompanyAutoAiReviewEnabled:!0,company_id:e,enabled:t===!0})}),a=await Ce(i);if(!i.ok)throw Error(a.error||a.message||`Auto AI toggle failed with status ${i.status}`);return a}async function be(){if(!l)return{reviewsToday:0,estimatedCostToday:0,remainingReviewsToday:50};let e=new Date;e.setUTCHours(0,0,0,0);let{data:t,error:n}=await l.from(`ai_usage_log`).select(`opportunity_id, estimated_cost`).gte(`created_at`,e.toISOString());if(n)throw n;let r=t||[],i=r.filter(e=>e.opportunity_id).length;return{reviewsToday:i,estimatedCostToday:r.reduce((e,t)=>e+Number(t.estimated_cost||0),0),remainingReviewsToday:Math.max(0,50-i)}}function xe(e){let t=Number(e||0);return`$${t.toFixed(t>=1?2:4)}`}async function Se(){let e={"content-type":`application/json`},t=window.VERKRADAR_SUPABASE_ANON_KEY||`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFzb2p4amJzZ3FiZnBiZXBvanpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAwNTU2NjgsImV4cCI6MjA5NTYzMTY2OH0.yPA34VbqWqKrBPespmHr5AojYzjhy3kGRxswO9XdAd0`;t&&(e.apikey=t);let{data:n,error:r}=l?await l.auth.getSession():{data:{session:null},error:null};if(r)throw r;let i=n.session?.access_token;if(!i)throw Error(`You must be logged in as an admin to run AI review.`);return e.authorization=`Bearer ${i}`,e}async function Ce(e){let t=await e.text();if(!t)return{};try{return JSON.parse(t)}catch{return{error:t}}}function we(e){let t=String(e?.fit||``),n=Number(e?.confidence||0),r=e?.send_to_client===!0||e?.sendToClient===!0;return n<.65?`needs_review`:t===`strong`&&r?`ready_for_admin`:t===`possible`&&r?`possible`:t===`weak`||t===`no_fit`?`low_priority`:`needs_review`}function Te(e,t,n=null){let r=new Map,i=new Map;for(let e of t||[]){let t=String(e.company_id||``),n=String(e.opportunity_id||``),a=String(e.match_id||``);t&&n&&r.set(`${t}:${n}`,e),a&&i.set(a,e)}return(e||[]).map(e=>{let t=`${String(e.company_id||``)}:${String(e.opportunity_id||``)}`,a=r.get(t)||i.get(String(e.id||``));return a?{...e,ai_review_status:we(a),ai_review_fit:a.fit||e.ai_review_fit,ai_review_confidence:a.confidence??e.ai_review_confidence,ai_reviewed_at:a.updated_at||a.created_at||e.ai_reviewed_at,ai_review_send_to_client:a.send_to_client===!0,ai_review_reason:a.reason||``,ai_review_profile_hash:a.reviewed_profile_hash||``,ai_review_profile_stale:je(a,n),ai_review_found:!0,ai_review_saved:!0}:{...e,ai_review_found:!1}})}function Ee(e,t=null){let n=Me(t,e);if(n.outsideServiceArea)return{bucket:`outside_service_area`,label:`Outside service area`,tone:`warning`,clientReady:!1,reason:n.reason||`Outside current service area.`};let r=Ae(e?.ai_review_skipped_reason),i=String(e?.ai_review_fit||``),a=Number(e?.ai_review_confidence||0),o=e?.ai_review_found===!0||e?.ai_review_saved===!0||!!i,s=String(e?.ai_review_status||`not_reviewed`);return r===`outside_service_area`?{bucket:`outside_service_area`,label:`Outside service area`,tone:`warning`,clientReady:!1,reason:`Skipped by batch review because the opportunity is outside the company service area.`}:o?e?.ai_review_profile_stale===!0?{bucket:`needs_review`,label:`AI review may be stale`,tone:`warning`,clientReady:!1,confidence:a}:i===`strong`&&e?.ai_review_send_to_client===!0?{bucket:`ai_recommended`,label:`AI recommended`,tone:`success`,clientReady:!0,confidence:a}:i===`possible`?{bucket:`ai_possible`,label:`AI possible`,tone:`notice`,clientReady:e?.ai_review_send_to_client===!0,confidence:a}:i===`weak`||i===`no_fit`||s===`low_priority`?{bucket:`low_priority`,label:i===`no_fit`?`AI: no fit`:`AI: weak fit`,tone:`muted`,clientReady:!1,confidence:a}:{bucket:`needs_review`,label:`Needs review`,tone:`warning`,clientReady:!1,confidence:a}:r?{bucket:r,label:ke(r),tone:r===`already_reviewed`?`notice`:`warning`,clientReady:!1,reason:ke(r)}:s===`needs_review`||String(e?.safety_status||``)===`needs_review`?{bucket:`needs_review`,label:`Needs review`,tone:`warning`,clientReady:!1}:{bucket:`not_reviewed`,label:`Not AI reviewed`,tone:`muted`,clientReady:!1}}function De(e,t,n=null){return(e||[]).filter(e=>{let r=Ee(e,n);return t===`ai_recommended`?r.bucket===`ai_recommended`:t===`ai_possible`?r.bucket===`ai_possible`:t===`needs_review`?r.bucket===`needs_review`:t===`outside_service_area`?r.bucket===`outside_service_area`:t===`not_reviewed`?r.bucket===`not_reviewed`:!0})}function Oe(e){let t=JSON.stringify({services:Pe([...e?.services||[],...e?.includeKeywords||[],...(e?.excludeKeywords||[]).map(e=>`exclude:${e}`)]),locations:Pe([e?.baseLocation,...e?.locations||[],...e?.serviceAreas||[],e?.willingToTravel?`willing_to_travel:true`:`willing_to_travel:false`,e?.nationalProjects?`national_projects:true`:`national_projects:false`])}),n=5381;for(let e=0;e<t.length;e+=1)n=(n<<5)+n+t.charCodeAt(e),n|=0;return`profile_${Math.abs(n)}`}function ke(e){return{outside_service_area:`Outside service area`,already_reviewed:`Already reviewed`,expired:`Expired`,missing_deadline:`Missing deadline`,expired_or_missing_deadline:`Expired or missing deadline`,score_too_low:`Score too low`,manually_rejected:`Manually rejected`}[Ae(e)]||`Skipped`}function Ae(e){return String(e||``).trim().toLowerCase().replace(/[\s-]+/g,`_`)}function je(e,t){if(!e||!t)return!1;let n=String(e.reviewed_profile_hash||``);return!!(n&&n!==Oe(t))}function Me(e,t){if(!e||e.nationalProjects===!0||e.willingToTravel===!0)return{outsideServiceArea:!1,reason:``};let n=Fe([e.baseLocation,...e.serviceAreas||[],...e.locations||[]].join(` `));if(!n||/all iceland|allt land|national|landsdekkandi/.test(n))return{outsideServiceArea:!1,reason:``};let r=t?.opportunities||{},i=r.raw_payload&&typeof r.raw_payload==`object`?r.raw_payload:{},a=Fe([r.title,r.location,i.region,i.extracted_location].join(` `));if(!a)return{outsideServiceArea:!1,reason:`Opportunity location unclear`};if(/(dalvik|akureyri|boggvisbraut|birkiholar|north iceland|nordurland)/.test(a)&&!/(dalvik|akureyri|north iceland|nordurland)/.test(n)||/(olafsvik|snaefellsnes|stykkisholmur|grundarfjordur)/.test(a)&&!/(olafsvik|snaefellsnes|stykkisholmur|grundarfjordur)/.test(n))return{outsideServiceArea:!0,reason:`Outside current service area`};let o=Ne(n),s=Ne(a);return!o.length||!s.length?{outsideServiceArea:!1,reason:``}:{outsideServiceArea:!s.some(e=>o.includes(e)),reason:`Outside current service area`}}function Ne(e){return[[`capital_area`,/reykjavik|capital area|hofudborg|gardabaer|kopavogur|seltjarnarnes|mosfellsbaer/],[`south`,/selfoss|arborg|sudurland|hveragerdi|olfus|rangarthing/],[`west_corridor`,/akranes|borgarnes|borgarbyggd|hvalfjordur/],[`north`,/dalvik|akureyri|nordurland|birkiholar|boggvisbraut/],[`snaefellsnes`,/olafsvik|snaefellsnes|stykkisholmur|grundarfjordur/]].filter(([,t])=>t.test(e)).map(([e])=>e)}function Pe(e){return Array.from(new Set((e||[]).map(e=>Fe(e)).filter(Boolean))).sort()}function Fe(e){return String(e||``).toLowerCase().normalize(`NFD`).replace(/[\u0300-\u036f]/g,``).replace(/þ/g,`th`).replace(/ð/g,`d`).replace(/æ/g,`ae`).replace(/ö/g,`o`).replace(/[^a-z0-9\s/-]/g,` `).replace(/\s+/g,` `).trim()}function Ie(e){let{escapeHtml:t,isRunning:n=!1,result:r=null}=e;return`
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
      ${r?Le(r,t):``}
    </section>
  `}function Le(e,t){return`
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
  `}function Re(e,t){let{escapeHtml:n,formatDateTime:r,inviteEmail:i=``,inviteLink:a=``,inviteDebug:o=null,actionState:s=``}=t,c=Array.isArray(e.members)?e.members:[],l=c.filter(e=>e.status===`active`),u=c.filter(e=>e.status===`invited`),d=l.length?`Active`:u.length?`Invited`:`Not invited`,f=!!s;return`
    <section class="side-panel admin-company-access-panel">
      <h3>Customer access</h3>
      <p><strong>Access status:</strong> ${n(d)}</p>
      <p class="muted-text">Create an invite link, copy it, and send it manually. VerkRadar does not send invite emails yet.</p>
      ${c.length?`
        <ul class="admin-detail-list admin-company-access-list">
          ${c.map(e=>Be(e,{escapeHtml:n,formatDateTime:r,busy:f})).join(``)}
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
        <button class="btn btn-secondary btn-small" type="button" data-action="admin-invite-company-customer" data-id="${n(e.id)}" ${f?`disabled`:``}>
          ${s===`invite`?`Creating link...`:u.length?`Regenerate invite link`:`Create invite link`}
        </button>
        ${a?`
          <div class="admin-invite-link-box">
            <input type="text" readonly value="${n(a)}" aria-label="Invite link" />
            <button class="btn btn-ghost btn-small" type="button" data-action="admin-copy-company-invite-link" data-id="${n(e.id)}">Copy invite link</button>
          </div>
          ${ze(o,n)}
        `:u.length?`
          <p class="muted-text">No raw invite token is available in this browser session. Regenerate invite link before copying.</p>
        `:``}
      </div>
      <p class="muted-text">Aðgangur að fyrirtæki er afturkallaður, en innskráningaraðgangi notandans er ekki eytt.</p>
    </section>
  `}function ze(e,t){return e?`
    <div class="admin-invite-debug">
      <span>member_id: ${t(e.member_id||`unknown`)}</span>
      <span>email: ${t(e.email||`unknown`)}</span>
      <span>status: ${t(e.status||`unknown`)}</span>
      <span>expires_at: ${t(e.expires_at||`not set`)}</span>
      <span>has_token_hash: ${e.has_token_hash?`true`:`false`}</span>
      <span>raw_token_length: ${Number(e.raw_token_length||e.copied_link_token_length||0)}</span>
      <span>token_hash_prefix: ${t(e.token_hash_prefix||`missing`)}</span>
      <span>copied_invite_url_present: ${e.copied_invite_url_present?`true`:`false`}</span>
      <span>copied_url_token_length: ${Number(e.copied_url_token_length||e.raw_token_length||0)}</span>
      <span>hash_lookup_found: ${e.hash_lookup_found?`true`:`false`}</span>
    </div>
  `:``}function Be(e,t){let{escapeHtml:n,formatDateTime:r,busy:i}=t,a=e.status===`revoked`,o=e.status===`active`?`is-success`:e.status===`invited`?`is-running`:``;return`
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
  `}function Ve(e){let{escapeHtml:t,invite:n=null,loading:r=!1,error:i=``,debugInfo:a=null,showDebug:o=!1,user:s=null,accepting:c=!1,signupHref:l=`/signup`,loginHref:u=`/login`,language:d=`is`}=e,f=d===`is`,p=f?`Aðgangsboð í VerkRadar`:`VerkRadar invite`,m=f?`Sæki aðgangsboð...`:`Loading invite...`,h=f?`Fyrirtæki`:`Company`,g=f?`Boðið netfang`:`Invited email`,ee=f?`Innskráning`:`Login`,te=f?`Stofna aðgang`:`Create account`,_=f?`Ertu þegar með aðgang?`:`Already have an account?`,ne=f?`Tengja aðgang`:`Accept invite`,v=f?`Fara í innskráningu`:`Go to login`,re=f?`Fara á forsíðu`:`Go to homepage`,y=f?`Aðgangsboðið tengir innskráninguna við fyrirtækjaprófíl sem hefur þegar verið settur upp.`:`This invite connects your login to an existing company profile.`;return`
    <section class="auth-page">
      <div class="auth-layout">
        <div class="auth-copy">
          <p class="eyebrow">${t(f?`AÐGANGUR`:`ACCESS`)}</p>
          <h1>${t(p)}</h1>
          <p>${t(y)}</p>
        </div>
        <div class="auth-form-column">
          <div class="auth-card invite-card">
            ${r?`<p>${t(m)}</p>`:``}
            ${i?`<div class="admin-message is-error">${t(i)}</div>`:``}
            ${o&&a?He(a,t):``}
            ${i&&!n?`
              <div class="auth-actions">
                <button class="btn btn-primary btn-large" type="button" data-action="go" data-href="/login">${t(v)}</button>
                <button class="btn btn-secondary btn-large" type="button" data-action="go" data-href="/">${t(re)}</button>
              </div>
            `:``}
            ${n?`
              <div class="invite-summary">
                <p>${t(f?`Þér hefur verið boðið að fá aðgang að ${n.company_name||`fyrirtæki`}.`:`You have been invited to access ${n.company_name||`a company`}.`)}</p>
                <p><strong>${t(h)}:</strong> ${t(n.company_name||``)}</p>
                <p><strong>${t(g)}:</strong> ${t(n.invited_email||n.email||``)}</p>
                <p>${t(f?`Skráðu þig inn eða stofnaðu aðgang með ${n.invited_email||n.email||`boðið netfang`} til að virkja aðganginn.`:`Log in or create an account with ${n.invited_email||n.email||`the invited email`} to activate access.`)}</p>
              </div>
              ${s?`
                <button class="btn btn-primary btn-large" type="button" data-action="accept-company-invite" ${c?`disabled`:``}>
                  ${t(c?f?`Tengi...`:`Accepting...`:ne)}
                </button>
              `:`
                <div class="auth-actions">
                  <button class="btn btn-primary btn-large" type="button" data-action="go" data-href="${t(l)}">${t(te)}</button>
                </div>
                <p class="auth-switch">${t(_)} <button type="button" data-action="go" data-href="${t(u)}">${t(ee)}</button></p>
              `}
            `:``}
          </div>
        </div>
      </div>
    </section>
  `}function He(e,t){return`
    <div class="admin-invite-debug">
      <span>invalid_reason: ${t(e.invalid_reason||e.reason||`unknown`)}</span>
      <span>token_received: ${e.token_received?`true`:`false`}</span>
      <span>token_length: ${Number(e.token_length||0)}</span>
      <span>computed_hash_prefix: ${t(e.computed_hash_prefix||`missing`)}</span>
      <span>lookup_found: ${e.lookup_found?`true`:`false`}</span>
      <span>matching_rows_count: ${Number(e.matching_rows_count||0)}</span>
      <span>latest_invite_status: ${t(e.latest_invite_status||`none`)}</span>
      <span>latest_invite_expires_at: ${t(e.latest_invite_expires_at||`none`)}</span>
      <span>lookup_table: ${t(e.lookup_table||`unknown`)}</span>
      <span>lookup_column: ${t(e.lookup_column||`unknown`)}</span>
      <span>token_source: ${t(e.token_source||`unknown`)}</span>
      <span>user_email: ${t(e.user_email||`none`)}</span>
      <span>invited_email: ${t(e.invited_email||`none`)}</span>
      <span>accept_error_reason: ${t(e.accept_error_reason||`none`)}</span>
      <span>invite_status: ${t(e.invite_status||`none`)}</span>
    </div>
  `}function Ue({authMessage:e,escapeHtml:t}){if(!e)return``;let n=Array.isArray(e.actions)?e.actions:[];return`
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
  `}function We({t:e,escapeHtml:t,authForm:n,authSubmitting:r,authMessage:i,signupHref:a=`/signup`,signupLabel:o=``,forgotPasswordHref:s=`/forgot-password`}){let c=o||e(`createAccount`);return`
    <section class="auth-page">
      <div class="auth-layout">
        <div class="auth-copy">
          <p class="eyebrow">${t(e(`login`))}</p>
          <h1>${t(e(`authLoginTitle`))}</h1>
          <p>${t(e(`authLoginSubtitle`))}</p>
        </div>

        <div class="auth-form-column">
          ${Ue({authMessage:i,escapeHtml:t})}
          <form id="login-form" class="auth-card">
            <label class="form-group">${t(e(`email`))} <input type="email" name="email" data-auth-field="email" value="${t(n.email)}" autocomplete="email" required /></label>
            <label class="form-group">${t(e(`password`))} <input type="password" name="password" data-auth-field="password" value="${t(n.password)}" autocomplete="current-password" required /></label>
            <p class="auth-help-link"><button type="button" data-action="go" data-href="${t(s)}">${t(e(`forgotPassword`))}</button></p>
            <div class="auth-actions">
              <button class="btn btn-primary btn-large" type="submit" ${r?`disabled`:``}>
                ${t(e(r?`loggingIn`:`login`))}
              </button>
            </div>
            <p class="auth-switch">${t(e(`newToVerkRadar`))} <button type="button" data-action="go" data-href="${t(a)}">${t(c)}</button></p>
          </form>
        </div>
      </div>
    </section>
  `}function Ge({t:e,escapeHtml:t,authForm:n,authSubmitting:r,authMessage:i}){return`
    <section class="auth-page">
      <div class="auth-layout">
        <div class="auth-copy">
          <p class="eyebrow">${t(e(`passwordReset`))}</p>
          <h1>${t(e(`resetPasswordTitle`))}</h1>
          <p>${t(e(`resetPasswordSubtitle`))}</p>
        </div>

        <div class="auth-form-column">
          ${Ue({authMessage:i,escapeHtml:t})}
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
  `}function Ke({t:e,escapeHtml:t,authForm:n,authSubmitting:r,authMessage:i}){return`
    <section class="auth-page">
      <div class="auth-layout">
        <div class="auth-copy">
          <p class="eyebrow">${t(e(`newPassword`))}</p>
          <h1>${t(e(`chooseNewPassword`))}</h1>
          <p>${t(e(`resetPasswordHelp`))}</p>
        </div>

        <div class="auth-form-column">
          ${Ue({authMessage:i,escapeHtml:t})}
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
  `}function qe({t:e,escapeHtml:t,authForm:n,authSubmitting:r,authMessage:i,loginHref:a=`/login`,inviteEmail:o=``,isInviteSignup:s=!1}){let c=o||n.email;return`
    <section class="auth-page">
      <div class="auth-layout">
        <div class="auth-copy">
          <p class="eyebrow">${t(e(`createAccount`))}</p>
          <h1>${t(e(`createAccountTitle`))}</h1>
          <p>${t(e(`createAccountSubtitle`))}</p>
        </div>

        <div class="auth-form-column">
          ${Ue({authMessage:i,escapeHtml:t})}
          <form id="signup-form" class="auth-card">
            <label class="form-group">${t(e(`email`))} <input type="email" name="email" data-auth-field="email" value="${t(c)}" autocomplete="email" ${s?`readonly`:``} required /></label>
            <label class="form-group">${t(e(`password`))} <input type="password" name="password" data-auth-field="password" value="${t(n.password)}" autocomplete="new-password" minlength="6" required /></label>
            ${s?`<p class="muted-text">${t(e(`inviteSignupEmailHelp`))}</p>`:``}
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
  `}function Je(e){let{escapeHtml:t,usageSummary:n=null,lastResult:r=null,isRunning:i=!1,formatAiUsageCost:a=e=>`$${Number(e||0).toFixed(4)}`}=e;return`
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
      ${n?Ze(n,{escapeHtml:t,formatAiUsageCost:a}):``}
      ${r?$e(r,t):``}
    </section>
  `}function Ye(e,t){let{escapeHtml:n}=t,r=e.latestMatches||[];return r.length?`
    <ul class="admin-detail-list admin-ai-aware-match-list">
      ${r.map(t=>tt(t,{escapeHtml:n,company:e})).join(``)}
    </ul>
  `:`<p>No stored matches yet.</p>`}function Xe(e,t){let{escapeHtml:n,formatDateTime:r,formatAiUsageCost:i=e=>`$${Number(e||0).toFixed(4)}`,actionState:a=``,filter:o=`not_reviewed`,lastResult:s=null,usageSummary:c=null}=t,l=De(e.latestMatches||[],o,e);return`
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

      ${c?Ze(c,{escapeHtml:n,formatAiUsageCost:i}):``}
      ${s?Qe(s,n):``}

      <label class="admin-inline-control admin-company-ai-filter">
        <span>AI review filter</span>
        <select data-admin-company-ai-filter>
          ${[[`ai_recommended`,`AI recommended`],[`ai_possible`,`AI possible`],[`needs_review`,`Needs review`],[`outside_service_area`,`Outside service area`],[`not_reviewed`,`Not AI reviewed`]].map(([e,t])=>`<option value="${e}" ${o===e?`selected`:``}>${t}</option>`).join(``)}
        </select>
      </label>

      ${l.length?`
        <ul class="admin-detail-list admin-ai-match-list">
          ${l.map(t=>nt(t,{escapeHtml:n,formatDateTime:r,company:e})).join(``)}
        </ul>
      `:`<p class="muted-text">No matches for this AI review filter.</p>`}
    </section>
  `}function Ze(e,{escapeHtml:t,formatAiUsageCost:n}){return`
    <div class="admin-ai-usage-summary">
      <span><strong>AI usage today</strong></span>
      <span>${Number(e.reviewsToday||0)} reviews today</span>
      <span>${t(n(e.estimatedCostToday||0))} estimated cost</span>
      <span>${Number(e.remainingReviewsToday||0)} reviews remaining</span>
    </div>
  `}function Qe(e,t){return`
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
  `}function $e(e,t){return`
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
    ${et(e.company_diagnostics||[],t)}
  `}function et(e,t){return e.length?`
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
  `:``}function tt(e,{escapeHtml:t,company:n}){let r=e.opportunities||{},i=Ee(e,n),a=Number(e.match_score||0);return`
    <li class="admin-ai-aware-match ${t(i.tone||`muted`)}">
      <strong>${t(r.title||`Opportunity`)}</strong>
      <span>
        <b>${t(i.label)}</b>
        ${i.confidence?` · ${Math.round(i.confidence*100)}%`:``}
        · Rule score ${a}
        ${i.bucket===`outside_service_area`?` · Rule label suppressed`:` · ${t(e.match_label||`Match`)}`}
      </span>
      ${e.ai_review_skipped_reason?`<small>Skipped: ${t(ke(e.ai_review_skipped_reason))}</small>`:``}
      ${e.ai_review_profile_stale?`<small>AI review may be stale because the company profile changed.</small>`:``}
    </li>
  `}function nt(e,{escapeHtml:t,formatDateTime:n,company:r}){let i=e.opportunities||{},a=Ee(e,r),o=a.confidence?` · ${Math.round(a.confidence*100)}%`:``,s=e.ai_reviewed_at?` · ${n(e.ai_reviewed_at)}`:``,c=e.ai_review_skipped_reason?` · Skipped: ${ke(e.ai_review_skipped_reason)}`:``;return`
    <li class="admin-ai-match-row ${t(a.tone||`muted`)}">
      <strong>${t(i.title||`Opportunity`)}</strong>
      <span>${t(a.label)}${t(o)}${t(s)}${t(c)}</span>
      ${e.ai_review_profile_stale?`<span>AI review may be stale because the company profile changed.</span>`:``}
      <span>Rule score ${Number(e.match_score||0)} · ${t(e.match_label||`Match`)}</span>
      <span class="admin-ai-debug">company_id=${t(e.company_id||``)} · opportunity_id=${t(e.opportunity_id||``)} · ai_review_found=${e.ai_review_found===!0?`true`:`false`}</span>
    </li>
  `}function rt({copy:e,suggestions:t,labels:n,escapeHtml:r}){return`
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
  `}function it({profile:e,matches:t,stats:n,filters:r,filterSummary:i,matchStatus:a,opportunityLoadError:o,isAdmin:s,matchingLoading:c,labels:l,renderFilterDropdown:u,renderOpportunityCard:d,renderEmptyState:f,escapeHtml:p}){return`
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
  `}function at({opp:e,saved:t,deadline:n,sourceBadgeHtml:r,qualityBadgeHtml:i,safetyBadgeHtml:a,extractedBadgeHtml:o,originalLanguageBadgeHtml:s,matchBadgeClass:c,matchLabel:l,buyer:u,location:d,value:f,reasons:p,labels:m,escapeHtml:h}){return`
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
  `}function ot({opp:e,saved:t,deadline:n,requirements:r,matchReasons:i,risks:a,safetyReasons:o,nextSteps:s,matchBadgeClass:c,matchLabel:l,qualityBadgeHtml:u,safetyBadgeHtml:d,extractedBadgeHtml:f,qualityWarningHtml:p,buyerSummary:m,location:h,value:g,sourceUrl:ee,extractedDetails:te,qualityLabel:_,safetyStatusLine:ne,category:v,type:re,publishedDate:y,cpvCode:b,labels:x,escapeHtml:S}){return`
    <div class="modal-backdrop">
      <div class="modal" role="dialog" aria-modal="true">
        <div class="modal-header">
          <div>
            <div class="opportunity-badges">
              <span class="${c}">${S(l)} · ${e.matchScore}</span>
              ${u}
              ${d}
              ${f}
            </div>
            <h2>${S(e.title)}</h2>
            <p>${S(m)} · ${S(h)} · ${g}</p>
          </div>
          <button type="button" class="icon-btn modal-close-btn" data-action="close-modal" aria-label="Close details">×</button>
        </div>

        <div class="modal-body">
          <div class="modal-grid">
            <section>
              ${p}
              <h3>${S(x.description)}</h3>
              <p>${S(e.description||x.noDescription)}</p>
              <h3>${S(x.requirements)}</h3>
              <ul class="check-list">
                ${(r.length?r:[x.noSpecificRequirements]).map(e=>`<li>${S(e)}</li>`).join(``)}
              </ul>
              <h3>${S(x.matchReasons)}</h3>
              <ul class="check-list">
                ${(i.length?i:[x.noMatchReasons]).map(e=>`<li>${S(e)}</li>`).join(``)}
              </ul>
            </section>

            <aside class="side-panel">
              <h3>${S(x.opportunityInfo)}</h3>
              <p><strong>${S(x.source)}:</strong> ${S(x.sourceValue)}</p>
              ${te}
              <p><strong>${S(x.quality)}:</strong> ${S(_)}</p>
              ${ne}
              <p><strong>${S(x.category)}:</strong> ${S(v)}</p>
              <p><strong>${S(x.type)}:</strong> ${S(re)}</p>
              <p><strong>${S(x.deadline)}:</strong> <span class="${n.className}">${S(x.deadlineLabel)}</span></p>
              <p><strong>${S(x.published)}:</strong> ${S(y)}</p>
              <p><strong>${S(x.cpv)}:</strong> ${S(b||`—`)}</p>

              <h3>${S(x.risksToCheck)}</h3>
              <ul class="risk-list">
                ${(o.length?o:a).map(e=>`<li>${S(e)}</li>`).join(``)}
              </ul>

              <h3>${S(x.recommendedNextSteps)}</h3>
              <ol class="steps-list">
                ${(s.length?s:[x.openSourceAndConfirm]).map(e=>`<li>${S(e)}</li>`).join(``)}
              </ol>

              <div class="button-stack">
                <button class="btn btn-primary" data-action="save" data-id="${e.id}">${S(t?x.removeFromSaved:x.saveOpportunity)}</button>
                <a class="btn btn-secondary" href="${S(ee)}" target="_blank" rel="noreferrer">${S(x.openSource)}</a>
                <button class="btn btn-ghost" data-action="ignore" data-id="${e.id}">${S(x.markNotRelevant)}</button>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  `}function st(e,t){return e.map(e=>`<p>${t(e)}</p>`).join(``)}function ct({language:e,escapeHtml:t,eyebrow:n,title:r,intro:i,sections:a}){let o=e===`is`?`Síðast uppfært`:`Last updated`,s=e===`is`?`4. júní 2026`:`June 4, 2026`;return`
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
            <div class="legal-content">${st(n,t)}</div>
          </section>
        `).join(``)}
      </div>
    </section>
  `}function lt({t:e,escapeHtml:t,language:n,trialHref:r}){let i=n===`is`,a=i?[{title:`Gatnagerð og lagnir við nýtt hverfi`,type:`1`,score:`Mælt með · Skilafrestur eftir 10 daga`},{title:`Lóðarframkvæmdir við skóla`,type:`2`,score:`Passar við lóðarvinnu · Staðfesta gögn`},{title:`Bílastæði og yfirborðsfrágangur`,type:`3`,score:`Mögulegt tækifæri · Opna heimild`}]:[{title:`Roadworks and utilities for a new neighborhood`,type:`1`,score:`Strong match · Deadline in 10 days`},{title:`Site works at a school`,type:`2`,score:`Fits site work · Verify documents`},{title:`Parking area and surface finishing`,type:`3`,score:`Possible match · Open source`}],o=i?[[`Jarðvinna og gatnagerð`,`Útboð um vegi, lóðir, bílastæði, stíga og jarðvegsvinnu.`],[`Lagnavinna og fráveita`,`Verkefni um lagnir, dælustöðvar, fráveitu, vatn og hitaveitu.`],[`Malbikun og lóðarframkvæmdir`,`Gatnagerð, yfirborðsfrágangur, gangstéttir og viðhald.`],[`Rafverktakar`,`Raflagnir, brunakerfi, lýsing, öryggiskerfi og hleðslustöðvar.`],[`Ræstingar og þjónusta`,`Reglulegir þjónustusamningar, húsþjónusta og rekstrarverkefni.`],[`Verkfræðistofur og ráðgjafar`,`Hönnun, eftirlit, ráðgjöf og verkefnastjórnun þegar það á við.`]]:[[`Earthworks and roadworks`,`Tenders for roads, plots, parking areas, paths and earthworks.`],[`Utilities and drainage`,`Projects for pipes, pumping stations, drainage, water and heating utilities.`],[`Paving and site works`,`Road construction, surface finishing, sidewalks and maintenance.`],[`Electrical contractors`,`Wiring, fire alarms, lighting, security systems and chargers.`],[`Cleaning and services`,`Recurring service contracts, facility services and operations work.`],[`Engineering and advisors`,`Design, supervision, consulting and project management where relevant.`]];return`
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
          <div>
            <strong>${t(i?`3 tækifæri`:`3 opportunities`)}</strong>
            <small>${t(i?`sem gætu passað`:`that may fit`)}</small>
          </div>
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
          <p><strong>${t(e(`deadline`))}:</strong> ${t(e(`daysLeft`,{count:18}))} · <strong>${t(i?`Mögulegt tækifæri`:e(`possibleMatch`))}:</strong> 92/100</p>
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
          <p><strong>${t(e(`deadline`))}:</strong> ${t(e(`daysLeft`,{count:24}))} · <strong>${t(i?`Mögulegt tækifæri`:e(`possibleMatch`))}:</strong> 86/100</p>
          <ul>
            <li>${t(i?`Inniheldur leitarorð: lóðarframkvæmdir, yfirborðsfrágangur.`:`Contains keywords: site works, surface finishing.`)}</li>
            <li>${t(i?`Passar við jarðvinnu, frágang og verk á lóðum.`:`Fits earthworks, finishing and site work services.`)}</li>
          </ul>
        </article>
        <article class="report-item">
          <h3>${t(i?`Verðfyrirspurn - Sandbakki - gatnagerð`:`Quote request - Sandbakki roadworks`)}</h3>
          <p><strong>${t(e(`buyer`))}:</strong> ${t(i?`Opinber verkkaupi`:`Public buyer`)}</p>
          <p><strong>${t(e(`deadline`))}:</strong> ${t(e(`daysLeft`,{count:11}))} · <strong>${t(i?`Mögulegt tækifæri`:e(`possibleMatch`))}:</strong> 83/100</p>
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
  `}function ut({t:e,escapeHtml:t,trialHref:n}){let r=[{key:`trial`,name:e(`pricingTrialPlan`),price:e(`pricingTrialPrice`),subtext:e(`pricingTrialSubtext`),items:[e(`pricingTrialManualProfile`),e(`pricingTrialFiltering`),e(`pricingTrialReportIfRelevant`),e(`pricingTrialNoCommitment`),e(`pricingTrialNoCard`)],cta:e(`pricingTrialCta`)},{key:`monitoring`,name:e(`pricingMonitoringPlan`),price:e(`pricingMonitoringPrice`),subtext:e(`pricingMonitoringSubtext`),highlighted:!0,items:[e(`pricingMonitoringSources`),e(`pricingMonitoringEmail`),e(`pricingMonitoringFilters`),e(`pricingMonitoringReminders`),e(`pricingMonitoringFeedback`),e(`pricingOneProfile`)],cta:e(`pricingMonitoringCta`)},{key:`custom`,name:e(`pricingCustomPlan`),price:e(`pricingCustomPrice`),items:[e(`pricingCustomProfiles`),e(`pricingCustomServices`),e(`pricingCustomMonitoring`),e(`pricingCustomPriorityReview`),e(`pricingCustomAudience`)],cta:e(`pricingCustomCta`)}];return`
    <section class="page-head">
      <p class="eyebrow">${t(e(`pricingEyebrow`))}</p>
      <h1>${t(e(`pricingHeadline`))}</h1>
      <p>${t(e(`pricingSubtitle`))}</p>
    </section>

    <section class="pricing-grid">
      ${r.map(r=>dt(r,{t:e,escapeHtml:t,trialHref:n})).join(``)}
    </section>
  `}function dt(e,{t,escapeHtml:n,trialHref:r}){let i=!!e.highlighted,a=`${r}${String(r).includes(`?`)?`&`:`?`}plan=${encodeURIComponent(e.key||`trial`)}`;return`
    <div class="pricing-card ${i?`highlighted`:``}">
      ${i?`<span class="popular">${n(t(`pricingBadge`))}</span>`:``}
      <h2>${n(e.name)}</h2>
      <p class="price">${n(e.price)}</p>
      ${e.subtext?`<p class="pricing-subtext">${n(e.subtext)}</p>`:``}
      <ul class="check-list">
        ${e.items.map(e=>`<li>${n(e)}</li>`).join(``)}
      </ul>
      <button class="btn pricing-cta ${i?`btn-primary`:`btn-secondary`}" data-action="go" data-href="${n(a)}">${n(e.cta||t(`pricingTrialCta`))}</button>
    </div>
  `}function ft({t:e,escapeHtml:t,submitted:n=!1}){return`
    <section class="page-head pricing-head">
      <p class="eyebrow">${t(e(`trialRequestEyebrow`))}</p>
      <h1>${t(e(`trialRequestTitle`))}</h1>
      <p>${t(e(`trialRequestSubtitle`))}</p>
    </section>

    <section class="trial-request-layout">
      <form id="trial-request-form" class="form-card trial-request-card">
        ${n?`
          <div class="admin-message is-success">
            <span>${t(e(`trialRequestSuccess`))}</span>
          </div>
        `:``}
        <label class="form-group">${t(e(`trialCompany`))}<input type="text" name="company" autocomplete="organization" required /></label>
        <label class="form-group">${t(e(`trialContact`))}<input type="text" name="contact" autocomplete="name" required /></label>
        <label class="form-group">${t(e(`trialEmail`))}<input type="email" name="email" autocomplete="email" required /></label>
        <label class="form-group">${t(e(`trialPhone`))}<input type="tel" name="phone" autocomplete="tel" /></label>
        <label class="form-group">${t(e(`trialServices`))}<textarea name="services" rows="4" required></textarea></label>
        <label class="form-group">${t(e(`trialRegions`))}<textarea name="regions" rows="3" required></textarea></label>
        <label class="form-group">${t(e(`trialNotes`))}<textarea name="notes" rows="3"></textarea></label>
        <p class="muted-text">${t(e(`trialRequestHelper`))}</p>
        <button class="btn btn-primary btn-large" type="submit">${t(e(`trialRequestSubmit`))}</button>
      </form>
    </section>
  `}var pt=[`Reykjavík`,`Capital Area`,`Suðurnes`,`South Iceland`,`West Iceland`,`North Iceland`,`East Iceland`,`Westfjords`,`All Iceland`,`Remote / Online`];function mt(e){let{t,escapeHtml:n,profileDraft:r,renderCustomDropdown:i,getFilterOptions:a}=e,o=r.industry||``;return`
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
  `}function ht(e){let{t,escapeHtml:n,profileDraft:r,arrayFieldText:i,getProfileSuggestions:a,renderSuggestionChips:o}=e,s=r.industry||``,c=a(`services`,s),l=a(`includeKeywords`,s);return`
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
  `}function gt(e){let{t,escapeHtml:n,profileDraft:r,arrayFieldText:i,formatCustomerLocation:a}=e;return`
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
        ${pt.map(e=>`
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
  `}function _t(e){let{t,escapeHtml:n,profileDraft:r}=e;return`
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
  `}function vt(e){let{t,escapeHtml:n,capitalize:r,profileDraft:i}=e;return`
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
  `}function yt(e){let{t,escapeHtml:n,hasProfile:r,isSavingProfile:i,profileSaved:a,profileSaveMessage:o,profileSaveError:s}=e,c=t(r?`saveProfile`:`createProfile`);return`
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
  `}function bt(e){return`
    <form id="profile-form" class="form-card settings-profile-form">
      ${mt(e)}
      ${ht(e)}
      ${gt(e)}
      ${_t(e)}
      ${vt(e)}
      ${yt(e)}
    </form>
  `}function xt({report:e,title:t,created:n,itemLabel:r,statusLabel:i,hideLabel:a,viewLabel:o,escapeHtml:s}){return`
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
  `}function St({report:e,options:t={},companyName:n,dateRange:r,generatedByLabel:i,reportTitleLabel:a,closeLabel:o,escapeHtml:s}){return`
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
  `}function Ct({label:e,value:t,escapeHtml:n}){return`
    <div class="report-summary-card">
      <span>${n(e)}</span>
      <strong>${t}</strong>
    </div>
  `}function wt({title:e,description:t,opportunities:n,emptyText:r,renderOpportunityItem:i,escapeHtml:a}){return`
    <section class="report-section">
      <div class="report-section-head">
        <h3>${a(e)}</h3>
        <p>${a(t)}</p>
      </div>
      ${n.length?n.map(i).join(``):`<div class="report-empty">${a(r)}</div>`}
    </section>
  `}function Tt({opp:e,valueText:t,deadlineText:n,sourceUrl:r,risks:i,fallbackReason:a,qualityBadgeHtml:o,matchBadgeClass:s,matchLabel:c,statusText:l,buyerLabel:u,buyerValue:d,sourceLabel:f,sourceValue:p,areaLabel:m,areaValue:h,deadlineLabel:g,valueLabel:ee,whyLabel:te,risksLabel:_,openSourceLabel:ne,sourceMissingLabel:v,formatReason:re,formatRisk:y,escapeHtml:b}){let x=(e.matchReasons.length?e.matchReasons:[a]).slice(0,4);return`
    <article class="report-item">
      <div class="report-item-top">
        ${o}
        <span class="${s}">${b(c)} ${e.matchScore}</span>
      </div>
      <h4>${b(e.title)}</h4>
      ${l?`<p class="report-item-status">${b(l)}</p>`:``}
      <div class="report-facts">
        <span><strong>${b(u)}</strong>${b(d)}</span>
        <span><strong>${b(f)}</strong>${b(p)}</span>
        <span><strong>${b(m)}</strong>${b(h)}</span>
        <span><strong>${b(g)}</strong><em>${b(n)}</em></span>
        <span><strong>${b(ee)}</strong><em>${b(t)}</em></span>
      </div>
      <div class="report-detail-grid">
        <div>
          <h5>${b(te)}</h5>
          <ul>${x.map(e=>`<li>${b(re(e))}</li>`).join(``)}</ul>
        </div>
        <div>
          <h5>${b(_)}</h5>
          <ul>${i.slice(0,5).map(e=>`<li>${b(y(e))}</li>`).join(``)}</ul>
        </div>
      </div>
      ${r?`<a class="report-source-link" href="${b(r)}" target="_blank" rel="noopener">${b(ne)} <span aria-hidden="true">↗</span></a>`:`<span class="report-source-link is-disabled">${b(v)}</span>`}
    </article>
  `}function Et({status:e,label:t,escapeHtml:n}){return`<span class="report-quality ${n(e)}">${n(t)}</span>`}function Dt({t:e,escapeHtml:t,language:n,profileDraftDirty:r,profileLoadError:i,showDemoReset:a,profileFormHtml:o}){return`
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
  `}var Ot=[[`Tender and opportunity report`,`Útboðs- og verkefnayfirlit`],[`Weekly Opportunity Report`,`Útboðs- og verkefnayfirlit`],[`Open tenders / quote requests`,`Opin útboð / verðfyrirspurnir`],[`Possible upcoming opportunities`,`Möguleg væntanleg tækifæri`],[`Needs review`,`Þarfnast staðfestingar`],[`Strong match`,`Sterk samsvörun`],[`Good match`,`Góð samsvörun`],[`Possible match`,`Möguleg samsvörun`],[`Weak match`,`Veik samsvörun`],[`Quality`,`Gæði`],[`Buyer`,`Kaupandi`],[`Source`,`Heimild`],[`Location`,`Svæði`],[`Deadline`,`Skilafrestur`],[`Estimated value`,`Áætlað verðmæti`],[`Value`,`Áætlað verðmæti`],[`Why this matters`,`Af hverju þetta gæti skipt máli`],[`Why this fits`,`Af hverju þetta gæti skipt máli`],[`Risks / things to check`,`Atriði til að staðfesta`],[`Open source`,`Opna heimild`],[`Unknown buyer`,`Óþekktur kaupandi`],[`All Iceland`,`Allt landið`],[`Not found`,`Fannst ekki`],[`Not listed`,`Ekki gefið upp`]];function kt(e,t){return t===`is`?Ot.reduce((e,[t,n])=>e.replaceAll(t,n),String(e||``)):e}function At(e){return Array.from(new Set((e||[]).map(e=>String(e||``).trim()).filter(Boolean)))}function jt(e){return String(e||``).replace(/^mentions your service:\s*/i,``).replace(/^contains your keyword:\s*/i,``).replace(/^mentions core service:\s*/i,``).replace(/^nefnir þjónustu ykkar:\s*/i,``).replace(/^inniheldur leitarorð:\s*/i,``).replace(/^nefnir lykilþjónustu:\s*/i,``).trim()}function C(e,t=`is`){let n=t!==`en`;return{downloadPdf:n?`Sækja PDF`:`Download PDF`,copyReportEmail:n?`Afrita skýrslupóst`:`Copy report email`,markAsSent:n?`Merkja sem sent`:`Mark as sent`,marking:n?`Merkir...`:`Marking...`,close:n?`Loka`:`Close`,sentStatus:n?`Sendingarstaða`:`Sent status`,notSent:n?`Ekki sent`:`Not sent`,sentOn:n?`Sent`:`Sent on`,company:n?`Fyrirtæki`:`Company`,period:n?`Tímabil`:`Period`,generatedAt:n?`Útbúið`:`Generated at`,mode:n?`Gerð`:`Mode`,items:n?`Fjöldi`:`Items`,currentActive:n?`Núverandi virk tækifæri`:`Current active opportunities`,newOpportunities:n?`Ný tækifæri`:`New opportunities`,reasons:n?`Ástæður`:`Reasons`,openSource:n?`Opna heimild`:`Open source`,verifyBadge:n?`Staðfesta gögn`:`Verify documents`,verifyTenderDocs:n?`Staðfesta útboðsgögn`:`Verify tender documents`,verificationSentence:n?`Staðfesta þarf útboðsgögn áður en brugðist er við.`:`Tender documents should be verified before taking action.`,matchScore:n?`Samsvörun`:`Match`,strongMatchScore:n?`Sterk samsvörun`:`Strong match`,openActiveTitle:n?`Opin útboð / virk tækifæri`:`Open tenders / active opportunities`,openActiveDescription:n?`Opin útboð eða virk verðfyrirspurnaratriði með skilafresti. Yfirfarið frumgögn áður en brugðist er við.`:`Open tenders or active quote-request items with deadlines. Review source documents before acting.`,possibleTitle:n?`Möguleg tækifæri til skoðunar`:`Possible opportunities to review`,possibleDescription:n?`Tækifæri sem gætu átt við, en þar sem þarf að staðfesta umfang, kröfur eða hlutverk fyrirtækisins.`:`Opportunities that may fit, but where scope, requirements, or company role should be verified.`,earlyTitle:n?`Væntanleg verkefni / early signals`:`Upcoming projects / early signals`,earlyDescription:n?`Vísbendingar um möguleg framtíðarverkefni sem eru ekki endilega formleg útboð ennþá.`:`Signals for possible future projects that may not be formal tenders yet.`}[e]||e}function Mt(e=`is`){return C(`verificationSentence`,e)}function Nt(e,t=`is`){let n=Number(e?.matchScore||e?.match_score||0)>=85;return t===`en`?n?`Strong match`:`Match`:n?`Sterk samsvörun`:`Samsvörun`}function Pt(e,t=`is`){let n=String(e?.aiReviewFit||e?.ai_review_fit||``).toLowerCase()===`strong`||Number(e?.matchScore||e?.match_score||0)>=85;return t===`en`?n?`Recommended — tender documents should be verified`:`Possible opportunity — tender documents should be verified`:n?`Mælt með — staðfesta þarf útboðsgögn`:`Mögulegt tækifæri — staðfesta þarf útboðsgögn`}function Ft(e,t=`is`){let n=String(e?.aiReviewFit||e?.ai_review_fit||``).toLowerCase();return t===`en`?n===`strong`||Number(e?.matchScore||0)>=85?`Recommended`:n===`possible`?`Possible opportunity`:String(e?.reportSection||``)===`early`?`Upcoming signal`:`Verify documents`:n===`strong`||Number(e?.matchScore||0)>=85?`Mælt með`:n===`possible`?`Mögulegt tækifæri`:String(e?.reportSection||``)===`early`?`Væntanlegt / merki`:`Staðfesta útboðsgögn`}function It(e=[],t=`is`){let n=[],r=new Set;for(let i of e||[]){let e=String(i||``).trim();if(!e)continue;let a=e.toLowerCase();if(a.includes(`winter/snow service fit`)){n.push(t===`is`?`Passar við vetrarþjónustu/snjómokstur; staðfestið umfang og getu.`:`Winter/snow service fit; verify capacity and scope.`);continue}if(a.includes(`deadline is valid and in the future`)){n.push(t===`is`?`Skilafrestur er í framtíðinni.`:`Deadline is valid and in the future.`);continue}if(a.includes(`location matches company service areas`)){n.push(t===`is`?`Staðsetning passar við þjónustusvæði.`:`Location matches company service areas.`);continue}if(a.includes(`verify capacity and scope`)){n.push(t===`is`?`Staðfestið umfang og getu.`:`Verify capacity and scope.`);continue}let o=jt(e),s=o.toLowerCase();if(!o||r.has(s))continue;r.add(s);let c=t===`is`&&/passar|nefnir|stað|skilafrestur|þjónustu|umfang/i.test(o);n.push(t===`is`?c?o:`Passar við þjónustu eða leitarorð: ${o}`:/matches|mentions|deadline|location|verify/i.test(o)?o:`Matches service or keyword: ${o}`)}return At(n).slice(0,4)}function Lt(e,t=`is`){let n=String(e||``).trim();if(!n)return``;let r=n.toLowerCase();if(t!==`en`){if(r.includes(`deadline not available`))return`Skilafrestur fannst ekki í innfluttum gögnum — staðfestið á upprunasíðu.`;if(r.includes(`open the source documents`))return`Opna útboðsgögn.`;if(r.includes(`confirm mandatory requirements`))return`Staðfesta kröfur og hæfisskilyrði.`;if(r.includes(`check capacity and profitability`))return`Meta getu og arðsemi.`;if(r.includes(`prepare questions before the deadline`))return`Undirbúa fyrirspurnir fyrir skilafrest.`;if(r.includes(`verify capacity and scope`))return`Staðfestið umfang og getu.`}return n}function Rt({companyName:e,matches:t,language:n=`is`}){let r=n!==`en`,i=r?`Sæll/Sæl,

VerkRadar fann eftirfarandi tækifæri sem gætu passað við ykkar þjónustu:`:`Hi,

VerkRadar found the following opportunities that may fit your services:`,a=r?`Staðfestið alltaf útboðsgögn, skilafresti og kröfur á upprunalegri heimild áður en brugðist er við.

Kv.
Kristján`:`Always verify the tender documents, deadlines, requirements, and eligibility on the original source before taking action.

Best,
Kristján`;return`${i}\n\n${(t||[]).map(e=>{let t=It(e.matchReasons||e.reasons||[],n),i=t.length?t.map(e=>`- ${e}`).join(`
`):`- ${r?`Passar við fyrirtækjaprófílinn.`:`Matches the company profile.`}`;return r?`${e.title}
Útboðsaðili: ${e.buyer||`Óþekktur kaupandi`}
Skilafrestur: ${e.deadline||`Fannst ekki`}
Staða: ${Pt(e,n)}

Af hverju þetta gæti passað:
${i}

Heimild:
${e.url||`Engin heimild skráð`}`:`${e.title}
Buyer: ${e.buyer||`Unknown buyer`}
Deadline: ${e.deadline||`Not found`}
Status: ${Pt(e,n)}

Why this may fit:
${i}

Source:
${e.url||`No source URL listed`}`}).join(`

`)||(r?`Engin atriði eru í þessu yfirliti.`:`No items are included in this report.`)}\n\n${a}`}function zt(e){return String(e||``).toLowerCase()}function Bt(e){return Array.isArray(e)?e.map(e=>String(e||``).trim()).filter(Boolean):[]}function Vt(e){return Array.from(new Set((e||[]).map(e=>String(e||``).trim()).filter(Boolean)))}function Ht(e){return e?new Date(e).getTime():NaN}function Ut(e){let t=Ht(e);if(Number.isNaN(t))return!0;let n=new Date;return n.setHours(0,0,0,0),t<n.getTime()}function Wt(e={}){return{aiReviewFit:zt(e.fit),aiReviewConfidence:Number(e.confidence||0),aiReviewSendToClient:e.send_to_client===!0||e.sendToClient===!0,aiReviewReason:String(e.reason||``),aiFitReasons:Bt(e.fit_reasons||e.fitReasons),aiRisksOrQuestions:Bt(e.risks_or_questions||e.risksOrQuestions),aiSuggestedClientSummary:String(e.suggested_client_summary||e.suggestedClientSummary||``),aiReviewedAt:e.updated_at||e.created_at||``}}function Gt(e,t){let n=new Map;for(let e of t||[]){let t=String(e.opportunity_id||e.opportunityId||``);t&&n.set(t,Wt(e))}return(e||[]).map(e=>{let t=n.get(String(e.id||e.opportunity_id||``));return t?{...e,...t,matchReasons:Vt([t.aiSuggestedClientSummary,...t.aiFitReasons,...Array.isArray(e.matchReasons)?e.matchReasons:[]]),risks:Vt([...t.aiRisksOrQuestions,...Array.isArray(e.risks)?e.risks:[]])}:e})}function Kt(e){return qt(e)!==`excluded`}function qt(e){let t=zt(e?.aiReviewFit||e?.ai_review_fit);if(!e?.deadline||Ut(e.deadline))return`excluded`;let n=e?.aiReviewSendToClient===!0||e?.ai_review_send_to_client===!0;if(String(e?.aiReviewSkippedReason||e?.ai_review_skipped_reason||``).toLowerCase()===`outside_service_area`||[e?.aiReviewReason,...Bt(e?.aiRisksOrQuestions||e?.risks_or_questions)].join(` `).toLowerCase().includes(`outside service area`))return`excluded`;if(t)return[`weak`,`no_fit`].includes(t)?`excluded`:t===`strong`&&n?`ai_strong`:t===`possible`&&n?`ai_possible`:`excluded`;let r=String(e?.safetyStatus||e?.safety_status||`auto_approved`).toLowerCase();if(r===`hidden`||r===`needs_review`)return`excluded`;let i=Number(e?.matchScore||e?.match_score||0),a=String(e?.matchLabel||e?.match_label||``).toLowerCase();return i>=75||a.includes(`strong`)||a.includes(`good`)?`rule_fallback`:`excluded`}function Jt(e){let t=qt(e);return Yt(e)&&(t===`ai_strong`||t===`ai_possible`||t===`rule_fallback`)?`confirmed`:t===`ai_possible`||t===`rule_fallback`?`early`:`excluded`}function Yt(e){return!!e?.deadline&&!Ut(e.deadline)}function Xt(e){return[...e||[]].filter(Kt).sort((e,t)=>{let n={ai_strong:0,ai_possible:1,rule_fallback:2},r=qt(e),i=qt(t);return(n[r]??9)-(n[i]??9)||Number(t.aiReviewConfidence||t.ai_review_confidence||0)-Number(e.aiReviewConfidence||e.ai_review_confidence||0)||Number(t.matchScore||t.match_score||0)-Number(e.matchScore||e.match_score||0)||Ht(e.deadline)-Ht(t.deadline)})}function w(e){if(!e)return 999;let t=new Date,n=new Date(`${e}T00:00:00`);if(Number.isNaN(n.getTime()))return 999;let r=n-new Date(t.getFullYear(),t.getMonth(),t.getDate());return Math.ceil(r/(1e3*60*60*24))}function Zt(e){if(!e)return`No deadline`;let t=new Date(`${e}T00:00:00`);return Number.isNaN(t.getTime())?String(e):new Intl.DateTimeFormat(`en-GB`,{year:`numeric`,month:`short`,day:`2-digit`}).format(t)}function T(e){return e?new Intl.DateTimeFormat(`en-GB`,{year:`numeric`,month:`short`,day:`2-digit`}).format(new Date(e)):`Unknown date`}function Qt(e){return Array.from(new Set((e||[]).map(e=>String(e||``).trim()).filter(Boolean)))}function $t(e){return String(e||``).split(`,`).map(e=>e.trim()).filter(Boolean)}function E(e){return Qt(Array.isArray(e)?e:$t(e))}function en(e){return $t(e)}function D(e){return String(e||``).toLowerCase().normalize(`NFD`).replace(/[\u0300-\u036f]/g,``).replace(/æ/g,`ae`).replace(/[ðþ]/g,e=>e===`ð`?`d`:`th`).replace(/[^a-z0-9]+/g,` `).trim()}function O(e){return String(e??``).replaceAll(`&`,`&amp;`).replaceAll(`<`,`&lt;`).replaceAll(`>`,`&gt;`).replaceAll(`"`,`&quot;`).replaceAll(`'`,`&#039;`)}function tn(e){return String(e||``).charAt(0).toUpperCase()+String(e||``).slice(1)}function nn(e){return/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(String(e||``))}function rn(e){let t=String(e||``).trim();return/^https?:\/\//i.test(t)?t:``}function an(e,t=`ISK`){if(!e)return``;let n=t||`ISK`,r=n===`ISK`?`kr`:n;return`${new Intl.NumberFormat(`is-IS`).format(e)} ${r}`}function on(e,t){let n=t||(e=>e);return{"Confirmed tender":n(`confirmedTender`),"Likely opportunity":n(`likelyOpportunity`),"Early signal":n(`earlySignal`),"Needs review":n(`needsReview`),"Tender awarded":n(`tenderAwarded`),"Tender already announced":n(`tenderAlreadyAnnounced`),"Upcoming tender":n(`upcomingTender`),"Project signal":n(`projectSignal`),"Original language":n(`originalLanguage`)}[e]||e||``}function sn(e,t){let n=t||(e=>e);return{"Strong match":n(`strongMatch`),"Good match":n(`goodMatch`),"Possible match":n(`possibleMatch`),"Weak match":n(`weakMatch`)}[e]||e||``}function cn(e,t,n){let r=n||(e=>e),i=String(t||``).trim();return i?e===`buyer`&&(ln(i)||i.toLowerCase()===`unknown buyer`)?r(`unknownBuyer`):e===`location`&&i.toLowerCase()===`all iceland`?r(`allIceland`):e===`source`?i.replace(/\bprocurement\b/gi,r(`procurement`)):i:r(e===`buyer`?`unknownBuyer`:`notListed`)}function ln(e){let t=D(e);return!!(!t||[`admin`,`administrator`,`ritstjori`,`editor`,`noreply`,`no reply`,`wordpress`,`wp admin`,`user`,`test`].includes(t)||t.includes(`noreply`)||/^wp\s*[-_]?\s*\d+$/.test(t))}function un(e){let t=D(e);return t?t.includes(`borgarbyggd`)?`Borgarbyggð`:t.includes(`akranes`)?`Akraneskaupstaður`:t.includes(`faxafloahafnir`)?`Faxaflóahafnir`:t.includes(`gardabaer`)?`Garðabær`:t.includes(`reykjanesbaer`)?`Reykjanesbær`:t.includes(`kopavogur`)?`Kópavogur`:t.includes(`hafnarfjordur`)?`Hafnarfjarðarbær`:t.includes(`mosfellsbaer`)?`Mosfellsbær`:t.includes(`arborg`)?`Sveitarfélagið Árborg`:t.includes(`fjardabyggd`)?`Fjarðabyggð`:t.includes(`mulathing`)?`Múlaþing`:t.includes(`garðabaer`)?`Garðabær`:(t.includes(`rikiskaup`)||t.includes(`utbodsvefur`),``):``}function dn(e,t,n={}){let r=String(e||``).trim();if(/reykjavíkurborg/i.test(r))return`Reykjavíkurborg`;if(r&&!ln(r)&&r.toLowerCase()!==`unknown buyer`)return r;let i=String(n.extracted_buyer||n.buyer||``).trim();return/reykjavíkurborg/i.test(i)?`Reykjavíkurborg`:i&&!ln(i)&&i.toLowerCase()!==`unknown buyer`?i:un(t)||`Unknown buyer`}function fn(e){let t=D(e);return t?t.includes(`borgarbyggd`)?`Borgarbyggð / Vesturland`:t.includes(`akranes`)?`Akranes / Vesturland`:t.includes(`faxafloahafnir`)?`Höfuðborgarsvæðið`:t.includes(`arborg`)?`Árborg / Suðurland`:``:``}function pn(e,t,n){let r=String(e||``).trim();return t===`is`&&{"Capital Area":`Höfuðborgarsvæðið`,"South Iceland":`Suðurland`,"West Iceland":`Vesturland`,"North Iceland":`Norðurland`,"East Iceland":`Austurland`,Westfjords:`Vestfirðir`,"All Iceland":(n||(e=>e))(`allIceland`),"Remote / Online":`Fjarvinna / netverkefni`}[r]||r}function mn(e,t,{language:n=`en`,translate:r}={}){let i=r||(e=>e),a=cn(e,t,i);if(n!==`is`)return a;let o=String(a||``).trim().toLowerCase();return{"public procurement":i(`publicProcurement`),procurement:i(`procurement`),tender:i(`tender`)}[o]||a.replace(/\bpublic procurement\b/gi,i(`publicProcurement`)).replace(/\btender\b/gi,i(`tender`))}function hn(e,{language:t=`en`,translate:n}={}){let r=n||((e,t={})=>t.value?`${e}: ${t.value}`:e),i=String(e||``);return i.startsWith(`Mentions your service:`)?r(`mentionsService`,{value:i.slice(22).trim()}):i.startsWith(`Contains your keyword:`)?r(`containsKeyword`,{value:i.slice(22).trim()}):{"National opportunity":r(`nationalOpportunity`),"Local match":r(`localMatch`),"Located in your selected region":r(`localMatch`),"Project value is inside your preferred range":t===`is`?`Áætlað verðmæti er innan óskaðs bils`:`Project value is inside your preferred range`,"Deadline is coming up soon":t===`is`?`Skilafrestur nálgast`:`Deadline is coming up soon`,"Matched to your company profile.":t===`is`?`Passar við fyrirtækjaprófílinn.`:`Matched to your company profile.`,"Matched to your profile by service, location or keyword overlap.":t===`is`?`Passar við þjónustu, svæði eða lykilorð í prófílnum.`:`Matched to your profile by service, location or keyword overlap.`}[i]||i||``}function gn(e,t=`en`){return t===`is`?{"Deadline not available in feed — verify on source page.":`Skilafrestur fannst ekki í innfluttum gögnum — staðfestið á upprunasíðu.`,"Deadline not available in imported data — verify on source page.":`Skilafrestur fannst ekki í innfluttum gögnum — staðfestið á upprunasíðu.`,"Deadline not available in source — verify page.":`Skilafrestur fannst ekki í heimild - staðfestið á upprunalegri síðu.`,"No formal tender deadline extracted — verify source article.":`Formlegur skilafrestur fannst ekki - staðfestið í heimildargrein.`,"Formal tender deadline not found yet — monitor source article.":`Formlegur skilafrestur fannst ekki enn - fylgist með heimildargrein.`,"Tender appears already announced/awarded — verify source article.":`Útboð virðist þegar auglýst eða afgreitt - staðfestið í heimildargrein.`,"Estimated value is not listed in the imported data.":`Áætlað verðmæti er ekki gefið upp í innfluttum gögnum.`,"Open the source page and confirm mandatory requirements.":`Opnið upprunalega heimild og staðfestið skyldukröfur.`,"Extracted project signal — verify tender timing in the source article.":`Útdregin verkefnavísbending - staðfestið útboðstímasetningu í heimildargrein.`,"Imported from broad feed — verify that this is a real tender or business opportunity.":`Innflutt úr breiðum fréttastraumi - staðfestið að þetta sé raunverulegt útboð eða viðskiptatækifæri.`}[e]||e||``:e||``}function _n(e,t=`en`){return t===`is`?{"Open the source documents":`Opna útboðsgögn`,"Confirm mandatory requirements":`Staðfesta kröfur og hæfisskilyrði`,"Check capacity and profitability":`Meta getu og arðsemi`,"Prepare questions before the deadline":`Undirbúa fyrirspurnir fyrir skilafrest`,"Open source documents and confirm requirements.":`Opna útboðsgögn og staðfesta kröfur.`}[e]||e||``:e||``}var vn=`Deadline not available in imported data — verify on source page.`,yn=`No formal tender deadline extracted — verify source article.`;function bn(){return n(e)}function k(e,t={}){return r(A?.language||`is`,e,t)}function xn(t){A.language=t===`en`?`en`:`is`,localStorage.setItem(e.language,A.language),X()}var Sn=a,Cn=12e3;function wn(){return o(A.user?.email||``)}var A={route:location.hash.replace(`#`,``)||`/`,language:bn(),pendingSignupPlan:jn(location.hash.replace(`#`,``)||`/`)||On(),pendingInviteToken:ne(location.hash.replace(`#`,``)||`/`),invitePreview:null,invitePreviewLoading:!1,invitePreviewError:null,invitePreviewErrorToken:``,invitePreviewDebug:null,inviteAccepting:!1,trialRequestSubmitted:!1,user:null,currentUser:null,isAdmin:!1,authLoading:!0,isBooting:!0,authLoaded:!1,profileLoaded:!1,adminLoaded:!1,bootError:null,authMessage:null,authForm:{email:``,password:``,newPassword:``,confirmPassword:``},authSubmitting:!1,isSavingProfile:!1,profileSaved:!1,profileSaveMessage:null,profileSaveError:null,profile:null,companyMembership:null,profileDraft:null,profileDraftDirty:!1,profileLoading:!1,profileLoadError:null,companyId:null,opportunities:[],storedMatches:[],opportunityActions:[],saved:Zi(e.saved),ignored:Zi(e.ignored),filters:{search:``,label:`recommended`,category:`all`,location:`all`,type:`all`,savedOnly:!1},tedImportMode:`nordic`,dropdown:{openKey:null,focusedIndex:0},importStatus:null,importLoading:!1,connectorImportStatus:null,connectorImportLoading:!1,connectorTestingSourceId:null,importedTedOpportunities:[],importedTedOpportunitiesLoading:!1,importedTedOpportunitiesLoaded:!1,importedTedOpportunitiesError:null,importRuns:[],importRunsLoading:!1,importRunsLoaded:!1,importRunsError:null,adminReports:[],adminReportsLoading:!1,adminReportsLoaded:!1,adminReportsError:null,selectedAdminReport:null,selectedAdminReportLoading:!1,selectedAdminReportError:null,sourceCoverage:[],sourceCoverageLoading:!1,sourceCoverageLoaded:!1,sourceCoverageError:null,expandedSourceId:null,adminCompanies:[],adminCompaniesLoading:!1,adminCompaniesLoaded:!1,adminCompaniesError:null,adminReviewMatches:[],adminReviewLoading:!1,adminReviewLoaded:!1,adminReviewError:null,adminReviewActions:{},adminAiReviewActions:{},adminAiReviewError:null,adminCompanyAiReviewActions:{},adminCompanyAiReviewResults:{},adminCompanyAiReviewFilter:`not_reviewed`,adminCompanyActions:{},adminCompanyAccessActions:{},adminCompanyInviteDrafts:{},adminCompanyInviteLinks:{},adminCompanyInviteDebug:{},adminReportDeliveryActions:{},selectedAdminCompanyId:null,adminActiveTab:`overview`,adminCompanyFilters:{search:``,industry:`all`,profileStatus:`all`,plan:`all`},adminReportMode:`all_current`,adminOpportunityFilters:{source:`all`,missingDeadlineSource:`all`,status:`all`,country:`all`,search:``,debugCompanyId:``,tedOnly:!1,manualOnly:!1,showDemoTest:!1},adminOpportunityDraft:In(),matchStatus:null,matchingLoading:!1,lastMatchedAt:null,reports:[],reportsLoaded:!1,reportsLoadError:null,reportArchiveLoading:!1,reportSaveLoading:!1,reportMessage:null,selectedReportId:null,selectedAdminReportId:null,adminMessage:null,adminSubmitting:!1,adminDeletingId:null,adminUpdatingId:null,isLoadingOpportunities:!1,opportunityLoadError:null,isMobileMenuOpen:!1,profileMenuOpen:!1,selectedOpportunityId:null,toast:null};function Tn(e=A.route){return String(e||`/`).split(`?`)[0]||`/`}function En(e=A.route){let t=String(e||``).split(`?`)[1]||``;return new URLSearchParams(t)}function Dn(e){let t=String(e||``).trim().toLowerCase();return[`basic`,`pro`,`priority`].includes(t)?t:``}function On(){try{return Dn(localStorage.getItem(e.selectedPlan))}catch{return``}}function kn(t){let n=Dn(t);try{n&&localStorage.setItem(e.selectedPlan,n)}catch{}return n}function An(){try{localStorage.removeItem(e.selectedPlan)}catch{}}function jn(e=A.route){return Dn(En(e).get(`plan`))}function Mn(e=A.route){let t=jn(e);t&&(A.pendingSignupPlan=kn(t))}function Nn(e=A.route){let t=g(e);if(_(e)&&!t){let e=v();if(e){A.pendingInviteToken=e;return}Pn();return}if(_(e)&&t&&t!==A.pendingInviteToken){A.pendingInviteToken=re(t),A.invitePreview=null,A.invitePreviewError=null,A.invitePreviewErrorToken=``;return}_(e)||Pn()}function Pn(){y(),A.pendingInviteToken=``,A.invitePreview=null,A.invitePreviewError=null,A.invitePreviewErrorToken=``,A.invitePreviewDebug=null,A.inviteAccepting=!1}function j(e){let t=A.pendingInviteToken||g(A.route);return t&&_(A.route)?`${e}?invite=${encodeURIComponent(t)}`:e}`scrollRestoration`in history&&(history.scrollRestoration=`manual`);function Fn(){localStorage.removeItem(`verkradar_profile`),localStorage.removeItem(`verkradar_local_user_id`),localStorage.removeItem(`verkradar_saved_opportunities`),localStorage.removeItem(`verkradar_ignored_opportunities`),A.profile=null,A.profileDraft=null,A.profileDraftDirty=!1,A.currentUser=null,A.companyId=null,A.storedMatches=[],A.opportunityActions=[],A.reports=[],A.reportsLoaded=!1,A.reportsLoadError=null,A.reportMessage=null,A.selectedReportId=null,A.profileSaved=!1,A.profileSaveMessage=null,A.profileSaveError=null,A.saved=[],A.ignored=[],A.importRuns=[],A.importRunsLoading=!1,A.importRunsLoaded=!1,A.importRunsError=null,A.importedTedOpportunities=[],A.importedTedOpportunitiesLoading=!1,A.importedTedOpportunitiesLoaded=!1,A.importedTedOpportunitiesError=null,A.adminReports=[],A.adminReportsLoading=!1,A.adminReportsLoaded=!1,A.adminReportsError=null,A.selectedAdminReport=null,A.selectedAdminReportLoading=!1,A.selectedAdminReportError=null,A.sourceCoverage=[],A.sourceCoverageLoading=!1,A.sourceCoverageLoaded=!1,A.sourceCoverageError=null,A.adminCompanies=[],A.adminCompaniesLoading=!1,A.adminCompaniesLoaded=!1,A.adminCompaniesError=null,A.selectedAdminCompanyId=null,A.lastMatchedAt=null}function In(){return{title:``,buyer:``,sourceName:``,category:``,type:`tender`,deadline:``,published_date:``,location:``,estimated_value:``,url:``,cpv_code:``,difficulty:`medium`,status:`open`,description:``,requirements:``,keywords:``}}function Ln(e){let t=In();Object.keys(t).forEach(n=>{t[n]=String(e.get(n)||``)}),A.adminOpportunityDraft=t}var Rn=!1;window.addEventListener(`hashchange`,()=>{let e=location.hash.replace(`#`,``)||`/`,t=Tn(e),n=e!==A.route;if(Rn&&e===A.route){Rn=!1;return}Rn=!1,[`/login`,`/signup`,`/forgot-password`,`/reset-password`].includes(t)&&e!==A.route&&(A.authMessage=null,A.authSubmitting=!1),A.route=e,Mn(e),Nn(e),A.isMobileMenuOpen=!1,A.profileMenuOpen=!1,n&&ho(),document.body.classList.remove(`mobile-menu-active`),X(),Qn(),N()}),document.addEventListener(`click`,e=>{if(A.dropdown.openKey&&!e.target.closest?.(`.custom-select`)&&Js(),A.profileMenuOpen&&!e.target.closest?.(`.profile-menu`)&&(A.profileMenuOpen=!1,X()),e.target.classList?.contains(`modal-backdrop`)){if(e.preventDefault(),A.selectedAdminCompanyId){A.selectedAdminCompanyId=null,X();return}mo();return}if(A.isMobileMenuOpen&&!e.target.closest?.(`.site-header`)){Vn();return}let t=e.target.closest?.(`[data-action]`);if(!t)return;let n=t.dataset.action,r=t.dataset.id;if(n===`close-modal`){if(e.preventDefault(),e.stopPropagation(),A.selectedAdminCompanyId){A.selectedAdminCompanyId=null,X();return}mo();return}if(n===`toggle-mobile-menu`){e.preventDefault(),A.isMobileMenuOpen?Vn():Bn();return}if(n===`mobile-nav`){e.preventDefault(),Hn(t.dataset.href);return}if(n===`mobile-scroll-to`){e.preventDefault(),Un(t.dataset.target);return}if(n===`toggle-profile-menu`){if(e.preventDefault(),A.isMobileMenuOpen||Wn()){A.profileMenuOpen=!1,X();return}A.profileMenuOpen=!A.profileMenuOpen,X();return}if(n===`toggle-language`){e.preventDefault(),xn(A.language===`is`?`en`:`is`);return}if(n===`toggle-dropdown`){e.preventDefault();let n=t.dataset.key,r=A.dropdown.openKey===n;A.dropdown.openKey=r?null:n,A.dropdown.focusedIndex=Gs(n),X(),r||Ys();return}if(n===`select-filter`){e.preventDefault();let n=t.dataset.key,r=t.dataset.value;t.dataset.profileField?(W(),A.profileDraft[t.dataset.profileField]=r,oa()):A.filters[n]=r,A.dropdown.openKey=null,A.dropdown.focusedIndex=0,X();return}if(n===`toggle-profile-suggestion`){e.preventDefault(),ra(t.dataset.field,t.dataset.value);return}if(n===`scroll-to`){e.preventDefault(),A.isMobileMenuOpen=!1,A.profileMenuOpen=!1,document.body.classList.remove(`mobile-menu-active`);let n=t.dataset.target;if(!n)return;A.route===`/`?(X(),setTimeout(()=>$n(n),0)):(M(`/`),setTimeout(()=>$n(n),50));return}if(n===`go`){e.preventDefault(),A.isMobileMenuOpen=!1,A.profileMenuOpen=!1,document.body.classList.remove(`mobile-menu-active`),M(t.dataset.href);return}if(n===`accept-company-invite`){Qo();return}if(n===`save`&&lo(r),n===`ignore`&&uo(r),n===`unignore`&&fo(r),n===`details`&&po(r),n===`admin-report-override`){Ki(r,t.dataset.override||``);return}if(n===`copy-report`&&ql(),n===`download-report-pdf`&&Jl(),n===`download-admin-report-pdf`){Yl();return}if(n===`save-report`&&Bi(),n===`archive-report`){Vi(r);return}if(n===`view-report`&&(A.selectedReportId=r,X()),n===`close-archive-report`&&(A.selectedReportId=null,X()),n===`view-admin-report`){A.selectedAdminReportId=r,A.selectedAdminReport=null,A.selectedAdminReportError=null,A.adminActiveTab=`reports`,X(),rr(r);return}if(n===`close-admin-report`){A.selectedAdminReportId=null,A.selectedAdminReport=null,A.selectedAdminReportError=null,X();return}if(n===`copy-admin-report`){Ds(r);return}if(n===`mark-admin-report-sent`){Os(r);return}if(n===`admin-tab`&&(A.adminActiveTab=t.dataset.tab||`overview`,A.selectedAdminCompanyId=null,A.selectedAdminReportId=null,X()),n===`view-admin-company`&&(A.selectedAdminCompanyId=r,X()),n===`close-admin-company`&&(A.selectedAdminCompanyId=null,X()),n===`admin-refresh-company-matches`){_r(r);return}if(n===`admin-generate-company-report`){vr(r);return}if(n===`admin-review-match`){yr(r,t.dataset.companyId||``,t.dataset.reviewAction||``);return}if(n===`admin-ai-review-match`){br(r,{force:t.dataset.force===`true`});return}if(n===`admin-ai-review-company`){xr(r,{force:t.dataset.force===`true`});return}if(n===`admin-run-auto-ai-review`){Sr();return}if(n===`admin-run-daily-pipeline`){Cr();return}if(n===`admin-toggle-company-auto-ai`){wr(r,t.dataset.enabled===`true`);return}if(n===`admin-invite-company-customer`){mr(r);return}if(n===`admin-revoke-company-access`){hr(r,t.dataset.memberId||``);return}if(n===`admin-copy-company-invite-link`){gr(r);return}if(n===`import-ted`&&li(),n===`import-source-connectors`&&ui(),n===`test-source-connector`&&ui(r),n===`toggle-source-items`&&(A.expandedSourceId=A.expandedSourceId===r?null:r,X()),n===`refresh-admin-status`&&Or(),n===`hide-imported-opportunity`&&Gi(r,`hidden`),n===`mark-imported-relevant`&&Gi(r,`open`),n===`run-matching`&&Hi(),n===`retry-settings-profile`&&ji(),n===`show-all-matches`&&(A.filters.label=`all`,X()),n===`show-all-opportunities`&&(A.filters.label=`all_opportunities`,X()),n===`include-national-opportunities`&&(W(),A.profileDraft.nationalProjects=!0,A.profileDraft.locations.includes(`All Iceland`)||(A.profileDraft.locations=[...A.profileDraft.locations,`All Iceland`]),oa(),M(`/settings`)),n===`delete-opportunity`&&Wi(r),n===`logout`){if(A.profileMenuOpen=!1,A.isMobileMenuOpen){Vn(()=>xi());return}xi()}n===`load-demo`&&(A.user?Ii(Sn).then(()=>M(`/dashboard`)).catch(e=>{console.error(`Failed to load demo profile:`,e),A.profileSaveError=H(e),X()}):(Xi(Sn),A.profile=Sn,M(`/dashboard`))),n===`reset`&&(Fn(),M(`/`))}),document.addEventListener(`keydown`,e=>{if(e.key===`Escape`&&A.isMobileMenuOpen){e.preventDefault(),Vn();return}if(e.key===`Escape`&&A.profileMenuOpen){e.preventDefault(),A.profileMenuOpen=!1,X();return}if(e.key===`Escape`&&A.selectedOpportunityId){e.preventDefault(),mo();return}if(e.key===`Escape`&&A.selectedAdminCompanyId){e.preventDefault(),A.selectedAdminCompanyId=null,X();return}let t=e.target.closest?.(`.custom-select`),n=t?.dataset.key||A.dropdown.openKey;if(!n)return;let r=Ws(n),i=A.dropdown.openKey===n;if(e.key===`Escape`&&i){e.preventDefault(),Js(),Xs(n);return}if((e.key===`ArrowDown`||e.key===`ArrowUp`)&&!i){e.preventDefault(),A.dropdown.openKey=n,A.dropdown.focusedIndex=Gs(n),X(),Ys();return}if(i){if(e.key===`ArrowDown`||e.key===`ArrowUp`){e.preventDefault();let t=e.key===`ArrowDown`?1:-1;A.dropdown.focusedIndex=(A.dropdown.focusedIndex+t+r.length)%r.length,X(),Ys();return}if(e.key===`Enter`||e.key===` `){e.preventDefault();let i=r[A.dropdown.focusedIndex];if(!i)return;let a=t?.querySelector?.(`[data-profile-field]`)?.dataset.profileField;a?(W(),A.profileDraft[a]=i.value,oa()):A.filters[n]=i.value,A.dropdown.openKey=null,A.dropdown.focusedIndex=0,X(),Xs(n)}}}),document.addEventListener(`input`,e=>{let t=e.target.closest?.(`[data-auth-field]`);if(t){A.authForm[t.dataset.authField]=t.value;return}let n=e.target.closest?.(`[data-profile-field]`);if(n){W();let e=n.dataset.profileField;n.type===`checkbox`?A.profileDraft[e]=n.checked:n.dataset.profileArray===`true`?A.profileDraft[e]=$t(n.value):(n.dataset.profileNumber,A.profileDraft[e]=n.value),oa();return}if(e.target.matches(`[data-filter]`)){let t=e.target.dataset.filter;e.target.type===`checkbox`?A.filters[t]=e.target.checked:A.filters[t]=e.target.value,X()}if(e.target.matches(`[data-admin-filter]`)){let t=e.target.dataset.adminFilter;e.target.type===`checkbox`?(A.adminOpportunityFilters[t]=e.target.checked,t===`tedOnly`&&e.target.checked&&(A.adminOpportunityFilters.manualOnly=!1),t===`manualOnly`&&e.target.checked&&(A.adminOpportunityFilters.tedOnly=!1)):A.adminOpportunityFilters[t]=e.target.value,Do(e.target);return}if(e.target.matches(`[data-admin-opportunity-field]`)){let t=e.target.dataset.adminOpportunityField;A.adminOpportunityDraft={...In(),...A.adminOpportunityDraft||{},[t]:e.target.value};return}if(e.target.matches(`[data-admin-company-filter]`)){let t=e.target.dataset.adminCompanyFilter;A.adminCompanyFilters[t]=e.target.value,Do(e.target);return}if(e.target.matches(`[data-admin-company-invite-email]`)){let t=e.target.dataset.id||``;t&&(A.adminCompanyInviteDrafts={...A.adminCompanyInviteDrafts||{},[t]:e.target.value});return}e.target.matches(`[data-admin-report-mode]`)&&(A.adminReportMode=e.target.value===`all_current`?`all_current`:`new_only`,X()),e.target.matches(`[data-admin-company-ai-filter]`)&&(A.adminCompanyAiReviewFilter=e.target.value||`not_reviewed`,Do(e.target))}),document.addEventListener(`change`,e=>{if(e.target.matches(`[data-admin-filter]`)){let t=e.target.dataset.adminFilter;e.target.type===`checkbox`?(A.adminOpportunityFilters[t]=e.target.checked,t===`tedOnly`&&e.target.checked&&(A.adminOpportunityFilters.manualOnly=!1),t===`manualOnly`&&e.target.checked&&(A.adminOpportunityFilters.tedOnly=!1)):A.adminOpportunityFilters[t]=e.target.value,Do(e.target);return}if(e.target.matches(`[data-import-mode]`)){A.tedImportMode=e.target.value,X();return}if(e.target.matches(`[data-admin-company-ai-filter]`)){A.adminCompanyAiReviewFilter=e.target.value||`not_reviewed`,Do(e.target);return}if(e.target.matches(`[data-profile-location]`)){W(),A.profileDraft.locations=Array.from(document.querySelectorAll(`[data-profile-location]:checked`)).map(e=>e.value),oa();return}let t=e.target.closest?.(`[data-profile-field]`);if(!t)return;W();let n=t.dataset.profileField;A.profileDraft[n]=t.type===`checkbox`?t.checked:t.value,oa()}),document.addEventListener(`submit`,async e=>{if(e.target.id===`login-form`){e.preventDefault();let t=new FormData(e.target);vi(t.get(`email`),t.get(`password`));return}if(e.target.id===`signup-form`){e.preventDefault();let t=new FormData(e.target);_i(t.get(`email`),t.get(`password`));return}if(e.target.id===`trial-request-form`){e.preventDefault(),A.trialRequestSubmitted=!0,X(),Qn();return}if(e.target.id===`forgot-password-form`){e.preventDefault(),yi(new FormData(e.target).get(`email`));return}if(e.target.id===`reset-password-form`){e.preventDefault();let t=new FormData(e.target);bi(t.get(`newPassword`),t.get(`confirmPassword`));return}if(e.target.id===`admin-opportunity-form`){e.preventDefault();let t=new FormData(e.target);Ln(t),Ui(t,e.target);return}if(e.target.id===`profile-form`){e.preventDefault(),A.profileSaved=!1,ca(e.target);let t=la();if(!t.companyName||!t.kennitala||!t.contactEmail||!t.billingEmail||!t.contactName||!t.phone||!t.address||!t.industry){U(A.language===`is`?`Fylltu út fyrirtækisnafn, kennitölu, reikningsupplýsingar, tengilið og atvinnugrein.`:`Please fill in company name, kennitala, billing details, contact details and industry.`,`error`);return}A.isSavingProfile=!0,A.profileSaved=!1,A.profileSaveMessage=null,A.profileSaveError=null,X();let n=A.route!==`/settings`;try{if(await Ii(t),await ki({overwriteDraft:!0}),A.profileLoadError)throw Error(`Profile saved, but the saved profile could not be reloaded. ${A.profileLoadError}`);A.profileSaveMessage=`Refreshing matches...`,A.profileSaveError=null,X();let e=await Hi();if(A.matchStatus?.type===`error`)A.profileSaveMessage=`Profile saved, but matching could not be refreshed. Try Run matching.`;else{let t=e===1?`opportunity`:`opportunities`;A.profileSaveMessage=n?`Profile saved — ${e} relevant ${t} found. Redirecting...`:`Profile saved — ${e} relevant ${t} found.`}A.profileSaved=!0,X(),clearTimeout(window.__profileSavedTimeout),window.__profileSavedTimeout=setTimeout(()=>{A.profileSaved=!1,X()},1800),n&&setTimeout(()=>M(`/dashboard`),800)}catch(e){console.error(`Failed to save company profile:`,e),A.profileSaveError=H(e),A.profileSaveMessage=null,A.profileSaved=!1}finally{A.isSavingProfile=!1,X()}}}),window.addEventListener(`focus`,zn),document.addEventListener(`visibilitychange`,()=>{document.visibilityState===`visible`&&zn()});function zn(){A.route===`/settings`&&A.profileDraftDirty&&(A.profileLoading=!1,A.profileLoaded=!0,X())}function Bn(){Gn(),A.isMobileMenuOpen=!0,A.profileMenuOpen=!1,document.body.classList.add(`mobile-menu-active`),X()}function Vn(e){if(!A.isMobileMenuOpen){typeof e==`function`&&e();return}A.isMobileMenuOpen=!1,A.profileMenuOpen=!1,document.body.classList.remove(`mobile-menu-active`),X(),typeof e==`function`&&setTimeout(e,260)}function Hn(e){if(e){if(!A.isMobileMenuOpen){M(e);return}Vn(()=>M(e))}}function Un(e){if(!e)return;let t=()=>{A.route===`/`?(X(),setTimeout(()=>$n(e),0)):(M(`/`),setTimeout(()=>$n(e),50))};if(!A.isMobileMenuOpen){t();return}Vn(t)}function Wn(){return typeof window<`u`&&window.matchMedia?.(`(max-width: 920px)`).matches}function Gn(){let e=document.querySelector(`.site-header`);e&&document.documentElement.style.setProperty(`--header-height`,`${Math.ceil(e.getBoundingClientRect().height)}px`)}function M(e){e||=`/`;let t=[`/login`,`/signup`,`/forgot-password`,`/reset-password`],n=Tn(e);if(t.includes(n)&&e!==A.route&&(A.authMessage=null,A.authSubmitting=!1),A.isMobileMenuOpen=!1,A.profileMenuOpen=!1,document.body.classList.remove(`mobile-menu-active`),A.route===e){X(),Qn(),N();return}ho(),A.route=e,Mn(e),Nn(e),Rn=!0,location.hash=e,X(),Qn(),N()}function Kn(){return!A.user&&!A.currentUser?`/`:A.pendingInviteToken&&_(A.route)?`/accept-invite?token=${encodeURIComponent(A.pendingInviteToken)}`:A.profile?`/dashboard`:`/onboarding`}function qn(){return!A.user&&!A.currentUser?`/trial`:A.profile?`/dashboard`:`/onboarding`}function Jn(e=A.route){let t=String(e||``);if(Yn(t))return!1;let n=Tn(t);return[`/`,`/login`,`/signup`,`/forgot-password`].includes(n)||t.startsWith(`access_token=`)||t.startsWith(`code=`)||t.includes(`type=signup`)||t.includes(`type=email_change`)}function Yn(e=A.route){let t=String(e||``);return t===`/reset-password`||t.startsWith(`/reset-password`)||t.includes(`type=recovery`)}function Xn(e){A.route=e,location.hash.replace(`#`,``)!==e&&history.replaceState(null,``,`#${e}`)}function Zn({replace:e=!1}={}){if(!A.user&&!A.currentUser||!Jn())return!1;let t=Kn();return A.authMessage=null,e?Xn(t):M(t),!0}function N(){Tn(A.route)===`/accept-invite`&&(Zo(),A.user&&!A.inviteAccepting&&!A.invitePreviewError&&Qo()),A.route===`/report`&&A.companyId&&!A.reportsLoaded&&!A.reportArchiveLoading&&zi(),A.route===`/admin`&&A.isAdmin&&(!A.importRunsLoaded&&!A.importRunsLoading&&tr(),!A.adminReportsLoaded&&!A.adminReportsLoading&&nr(),!A.sourceCoverageLoaded&&!A.sourceCoverageLoading&&ar(),!A.adminCompaniesLoaded&&!A.adminCompaniesLoading&&P(),!A.adminReviewLoaded&&!A.adminReviewLoading&&F(),!A.importedTedOpportunitiesLoaded&&!A.importedTedOpportunitiesLoading&&di().then(X).catch(e=>{console.error(`Failed to load latest TED opportunities:`,e)}))}function Qn(){window.scrollTo(0,0)}function $n(e){let t=document.getElementById(e);t&&t.scrollIntoView({behavior:`smooth`,block:`start`})}async function er(){A.isLoadingOpportunities=!0,A.opportunityLoadError=null,X();try{if(!l)throw Error(`Supabase client not configured`);let{data:e,error:t}=await l.from(`opportunities`).select(`*, sources(name, source_type)`).eq(`status`,`open`).order(`deadline`,{ascending:!0});if(t)throw t;!e||e.length===0?(A.opportunities=window.VERKRADAR_OPPORTUNITIES||[],A.storedMatches=[],A.opportunityLoadError=`Using demo data. Supabase has no opportunities yet.`):(A.opportunities=e.map(kr),A.opportunityLoadError=null,A.companyId&&(await oo(),await Ri()))}catch(e){console.error(`Failed to load Supabase opportunities:`,e),A.opportunities=window.VERKRADAR_OPPORTUNITIES||[],A.storedMatches=[],A.opportunityLoadError=`Using demo data. Supabase connection failed.`}finally{A.isLoadingOpportunities=!1,X()}}async function tr(){if(!l||!A.isAdmin){A.importRuns=[],A.importRunsLoaded=!0;return}A.importRunsLoading=!0,A.importRunsError=null,X();try{let{data:e,error:t}=await l.from(`import_runs`).select(`*`).order(`started_at`,{ascending:!1}).limit(10);if(t)throw t;A.importRuns=e||[],A.importRunsLoaded=!0}catch(e){console.error(`Failed to load import runs:`,e),A.importRuns=[],A.importRunsError=H(e)}finally{A.importRunsLoading=!1,A.importRunsLoaded=!0,X()}}async function nr(){if(!l||!A.isAdmin){A.adminReports=[],A.adminReportsLoaded=!0;return}A.adminReportsLoading=!0,A.adminReportsError=null,X();try{let{data:e,error:t}=await l.from(`reports`).select(`
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
      `).order(`created_at`,{ascending:!1}).limit(10);if(t)throw t;A.adminReports=e||[],A.adminReportsLoaded=!0}catch(e){console.error(`Failed to load admin reports:`,e),A.adminReports=[],A.adminReportsError=H(e)}finally{A.adminReportsLoading=!1,A.adminReportsLoaded=!0,X()}}async function rr(e){if(!(!l||!A.isAdmin||!e)){A.selectedAdminReportLoading=!0,A.selectedAdminReportError=null,X();try{let{data:t,error:n}=await l.from(`reports`).select(`
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
      `).eq(`id`,e).single();if(n)throw n;await ir(t),A.selectedAdminReportId===e&&(A.selectedAdminReport=t)}catch(t){console.error(`Failed to load admin report details:`,t),A.selectedAdminReportId===e&&(A.selectedAdminReport=null,A.selectedAdminReportError=H(t))}finally{A.selectedAdminReportId===e&&(A.selectedAdminReportLoading=!1,X())}}}async function ir(e){let t=Array.isArray(e?.report_items)?e.report_items:[],n=t.map(e=>e.opportunity_id).filter(Boolean);if(!l||!e?.company_id||!n.length)return;let{data:r,error:i}=await l.from(`company_opportunity_sends`).select(`opportunity_id, sent_at, created_at, channel`).eq(`company_id`,e.company_id).in(`opportunity_id`,n).in(`channel`,[`manual_email`,`automated_email`]);if(i){console.warn(`Failed to load report sent status:`,i);return}let a=new Map((r||[]).map(e=>[String(e.opportunity_id),e]));t.forEach(e=>{let t=a.get(String(e.opportunity_id));e.sent_at=t?.sent_at||t?.created_at||``,e.delivery_type=t?.channel||``})}async function ar(){if(!l||!A.isAdmin){A.sourceCoverage=[],A.sourceCoverageLoaded=!0;return}A.sourceCoverageLoading=!0,A.sourceCoverageError=null,X();try{let{data:e,error:t}=await l.from(`sources`).select(`
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
      `).order(`name`,{ascending:!0});if(t)throw t;let n=(e||[]).map(e=>({...e,source_status:Array.isArray(e.source_status)?e.source_status[0]:e.source_status,source_connectors:Array.isArray(e.source_connectors)?e.source_connectors[0]:e.source_connectors})),r=n.map(e=>e.id).filter(Boolean),i={};if(r.length){let{data:e,error:t}=await l.from(`opportunities`).select(`id, source_id, title, buyer, deadline, status, url, raw_payload, created_at, published_date`).in(`source_id`,r).eq(`status`,`open`).order(`created_at`,{ascending:!1}).limit(500);if(t)throw t;i=(e||[]).reduce((e,t)=>(e[t.source_id]||(e[t.source_id]=[]),e[t.source_id].push(t),e),{})}A.sourceCoverage=n.map(e=>{let t=i[e.id]||[];return{...e,opportunityStats:_s(t),latestOpportunities:t.slice(0,8)}}),A.sourceCoverageLoaded=!0}catch(e){console.error(`Failed to load source coverage:`,e),A.sourceCoverage=[],A.sourceCoverageError=H(e)}finally{A.sourceCoverageLoading=!1,A.sourceCoverageLoaded=!0,X()}}async function P(){if(!l||!A.isAdmin){A.adminCompanies=[],A.adminCompaniesLoaded=!0;return}A.adminCompaniesLoading=!0,A.adminCompaniesError=null,X();try{A.adminAiUsageSummary=await be().catch(e=>(console.warn(`Failed to load AI usage summary:`,e),null));let{data:e,error:t}=await l.from(`companies`).select(`*`).order(`created_at`,{ascending:!1});if(t)throw t;let n=e||[],r=n.map(e=>e.id).filter(Boolean),i=[],a=[],o=[],s=[],c=[],u=[],d=[];if(r.length){let[e,t,n,f,p,m,h]=await Promise.all([l.from(`company_services`).select(`company_id, service`).in(`company_id`,r),l.from(`company_locations`).select(`company_id, location`).in(`company_id`,r),l.from(`company_keywords`).select(`company_id, keyword, type`).in(`company_id`,r),l.from(`opportunity_matches`).select(`id, company_id, opportunity_id, match_score, match_label, safety_status, ai_review_status, ai_review_fit, ai_review_confidence, ai_reviewed_at, ai_review_skipped_reason, opportunities(title, buyer, location, raw_payload, source_id, sources(name))`).in(`company_id`,r),l.from(`reports`).select(`id, company_id, title, created_at, period_start, period_end, status`).in(`company_id`,r).order(`created_at`,{ascending:!1}),l.from(`ai_match_reviews`).select(`id, company_id, opportunity_id, match_id, fit, confidence, send_to_client, reason, reviewed_profile_hash, profile_updated_at, company_services_snapshot, company_locations_snapshot, created_at, updated_at`).in(`company_id`,r),l.from(`company_members`).select(`id, company_id, user_id, email, role, status, invited_at, accepted_at, revoked_at, expires_at`).in(`company_id`,r).order(`created_at`,{ascending:!1})]);i=e.error?[]:e.data||[],a=t.error?[]:t.data||[],o=n.error?[]:n.data||[],s=f.error?[]:f.data||[],c=p.error?[]:p.data||[],u=m.error?[]:m.data||[],d=h.error?[]:h.data||[]}A.adminCompanies=n.map(e=>{let t=i.filter(t=>t.company_id===e.id),n=a.filter(t=>t.company_id===e.id),r=o.filter(t=>t.company_id===e.id),l={services:E(t.map(e=>e.service)),locations:E(n.map(e=>e.location)),includeKeywords:E(r.filter(e=>e.type===`include`).map(e=>e.keyword)),excludeKeywords:E(r.filter(e=>e.type===`exclude`).map(e=>e.keyword)),baseLocation:e.base_location||``,serviceAreas:E(e.service_areas),willingToTravel:!!e.willing_to_travel,nationalProjects:!!e.national_projects};return cr(e,{services:t,locations:n,keywords:r,matches:Te(s.filter(t=>t.company_id===e.id),u.filter(t=>t.company_id===e.id),l),reports:c.filter(t=>t.company_id===e.id),members:d.filter(t=>t.company_id===e.id)})}),A.adminCompaniesLoaded=!0}catch(e){console.error(`Failed to load admin companies:`,e),A.adminCompanies=[],A.adminCompaniesError=H(e)}finally{A.adminCompaniesLoading=!1,A.adminCompaniesLoaded=!0,X()}}async function F(){if(!l||!A.isAdmin){A.adminReviewMatches=[],A.adminReviewLoaded=!0;return}A.adminReviewLoading=!0,A.adminReviewError=null,X();try{let{data:e,error:t}=await l.from(`opportunity_matches`).select(`
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
      `).eq(`safety_status`,`needs_review`).eq(`review_required`,!0).order(`calculated_at`,{ascending:!1}).limit(100);if(t)throw t;let n=e||[],r=Qt(n.map(e=>e.company_id)),i=Qt(n.map(e=>e.opportunity_id)),a=[];if(r.length&&i.length){let{data:e,error:t}=await l.from(`ai_match_reviews`).select(`*`).in(`company_id`,r).in(`opportunity_id`,i);if(t)throw t;a=e||[]}let o=new Map(a.map(e=>[`${e.company_id}:${e.opportunity_id}`,e]));A.adminReviewMatches=n.map(e=>or(e,o.get(`${e.company_id}:${e.opportunity_id}`))),A.adminReviewLoaded=!0}catch(e){console.error(`Failed to load admin review queue:`,e),A.adminReviewMatches=[],A.adminReviewError=H(e)}finally{A.adminReviewLoading=!1,A.adminReviewLoaded=!0,X()}}function or(e,t=null){let n=kr(e.opportunities||{});return{id:e.id,companyId:e.company_id,opportunityId:e.opportunity_id,companyName:e.companies?.company_name||`Unknown company`,opportunity:n,matchScore:Number(e.match_score||0),matchLabel:e.match_label||Wa(Number(e.match_score||0)),matchReasons:ni(n,Array.isArray(e.match_reasons)?e.match_reasons:[]),risks:Array.isArray(e.risks)?e.risks:[],safetyStatus:e.safety_status||`needs_review`,safetyReasons:Array.isArray(e.safety_reasons)?e.safety_reasons:[],alertEligible:!!e.alert_eligible,reviewRequired:!!e.review_required,calculatedAt:e.calculated_at,aiReview:t?sr(t):null}}function sr(e){return{id:e.id,fit:e.fit||`weak`,confidence:Number(e.confidence||0),sendToClient:!!e.send_to_client,reason:e.reason||``,fitReasons:Array.isArray(e.fit_reasons)?e.fit_reasons.map(String):[],risksOrQuestions:Array.isArray(e.risks_or_questions)?e.risks_or_questions.map(String):[],suggestedClientSummary:e.suggested_client_summary||``,model:e.model||``,createdAt:e.created_at||``,updatedAt:e.updated_at||``}}function cr(e,t){let n=E((t.services||[]).map(e=>e.service)),r=E((t.locations||[]).map(e=>e.location)),i=E((t.keywords||[]).filter(e=>e.type===`include`).map(e=>e.keyword)),a=E((t.keywords||[]).filter(e=>e.type===`exclude`).map(e=>e.keyword)),o=t.reports||[],s=(t.matches||[]).filter(e=>e.safety_status!==`hidden`),c=(t.members||[]).map(e=>({id:e.id,company_id:e.company_id,user_id:e.user_id||``,email:e.email||``,role:e.role||`member`,status:e.status||`invited`,invited_at:e.invited_at||``,accepted_at:e.accepted_at||``,revoked_at:e.revoked_at||``,expires_at:e.expires_at||``})),l=!!(e.company_name&&e.contact_email&&e.industry&&n.length&&(r.length||e.base_location||E(e.service_areas).length));return{id:e.id,ownerId:e.owner_id||``,companyName:e.company_name||`Unnamed company`,contactEmail:e.contact_email||``,kennitala:e.kennitala||``,billingEmail:e.billing_email||``,contactName:e.contact_name||``,phone:e.phone||``,address:e.address||``,website:e.website||``,industry:e.industry||``,plan:e.selected_plan||e.plan||e.subscription_plan||`Demo`,selectedPlan:e.selected_plan||e.plan||``,billingStatus:e.billing_status||``,trialStartedAt:e.trial_started_at||``,trialEndsAt:e.trial_ends_at||``,profileStatus:l?`Complete`:`Incomplete`,createdAt:e.created_at,services:n,locations:r,includeKeywords:i,excludeKeywords:a,baseLocation:e.base_location||``,serviceAreas:E(e.service_areas),willingToTravel:!!e.willing_to_travel,nationalProjects:!!e.national_projects,remoteProjects:!!e.remote_projects,minimumProjectValueForTravel:e.minimum_project_value_for_travel,minProjectValue:e.min_project_value,maxProjectValue:e.max_project_value,allowUnknownValue:!!e.allow_unknown_value,includeLowConfidence:!!e.include_low_confidence,autoAlertMode:e.auto_alert_mode||`auto_safe_only`,reportFrequency:e.report_frequency||`weekly`,reportDay:e.report_day||`monday`,deadlineReminders:!!e.deadline_reminders,autoAiReviewEnabled:!!e.auto_ai_review_enabled,members:c,matchCount:s.length,savedCount:0,latestReportDate:o[0]?.created_at||``,latestMatches:s.slice(0,30),latestReports:o.slice(0,5)}}function lr(e,t){A.adminCompanyActions={...A.adminCompanyActions||{},[e]:t}}function ur(e){let t={...A.adminCompanyActions||{}};delete t[e],A.adminCompanyActions=t}function dr(e){return A.adminCompanyInviteDrafts?.[e.id]??(e.billingEmail||e.contactEmail||``)}function fr(e,t){A.adminCompanyAccessActions={...A.adminCompanyAccessActions||{},[e]:t}}function pr(e){let t={...A.adminCompanyAccessActions||{}};delete t[e],A.adminCompanyAccessActions=t}async function mr(e){if(!A.isAdmin||!e)return;let t=m(dr((A.adminCompanies||[]).find(t=>t.id===e)||{id:e}));if(!t){A.adminMessage={type:`error`,text:`Enter a customer email before inviting access.`},X();return}fr(e,`invite`),A.adminMessage=null,X();try{let n=await Tr(e,`invite_customer`,{email:t}),r=b(n.invite_token||``);await P(),A.adminCompanyInviteLinks={...A.adminCompanyInviteLinks||{},[e]:r},A.adminCompanyInviteDebug={...A.adminCompanyInviteDebug||{},[e]:n.debug?{...n.debug,copied_url_token_length:String(n.invite_token||``).length,copied_invite_url_present:!!r}:null},A.adminCompanyInviteDrafts={...A.adminCompanyInviteDrafts||{},[e]:``},A.adminMessage={type:`success`,text:`Invite link created for ${n.member?.email||t}. Copy it and send it manually.`},U(`Invite link created`,`success`)}catch(e){console.error(`Failed to invite company customer:`,e),A.adminMessage={type:`error`,text:`Failed to invite customer access. ${H(e)}`}}finally{pr(e),X()}}async function hr(e,t){if(!(!A.isAdmin||!e||!t)){fr(e,`revoke`),A.adminMessage=null,X();try{await Tr(e,`revoke_customer_access`,{memberId:t}),await P(),A.adminMessage={type:`success`,text:`Customer access revoked.`},U(`Customer access revoked`,`success`)}catch(e){console.error(`Failed to revoke company access:`,e),A.adminMessage={type:`error`,text:`Failed to revoke customer access. ${H(e)}`}}finally{pr(e),X()}}}async function gr(e){let t=A.adminCompanyInviteLinks?.[e]||``;if(!t){U(`Create or regenerate an invite link first.`,`error`);return}try{await navigator.clipboard.writeText(t),U(`Invite link copied`,`success`)}catch(e){console.error(`Failed to copy invite link:`,e),U(`Could not copy invite link`,`error`)}}async function _r(e,t={}){if(!A.isAdmin)return A.adminMessage={type:`error`,text:`You do not have access to this action.`},X(),[];let n=(A.adminCompanies||[]).find(t=>t.id===e);if(!n)return A.adminMessage={type:`error`,text:`Company not found. Refresh Admin companies and try again.`},X(),[];t.skipAction||lr(e,`refresh`),t.silent||(A.adminMessage=null,X());try{let r=await Tr(e,`refresh_matches`),i=Number(r.matches_refreshed||0);return await Promise.all([P(),F()]),A.companyId===e&&await Ri(),t.silent||(A.adminMessage={type:`success`,text:`Refreshed ${i} eligible matches for ${n.companyName}.`},U(`Company matches refreshed`,`success`),X()),r}catch(e){if(console.error(`Failed to refresh admin company matches:`,e),A.adminMessage={type:`error`,text:`Failed to refresh matches for ${n.companyName}. ${H(e)}`},X(),t.throwOnError)throw e;return[]}finally{t.skipAction||(ur(e),X())}}async function vr(e){if(!A.isAdmin){A.adminMessage={type:`error`,text:`You do not have access to this action.`},X();return}let t=(A.adminCompanies||[]).find(t=>t.id===e);if(!t){A.adminMessage={type:`error`,text:`Company not found. Refresh Admin companies and try again.`},X();return}lr(e,`report`),A.adminMessage=null,X();try{let n=await Tr(e,`generate_report`,{reportMode:A.adminReportMode||`all_current`});if(!n.report_created){A.adminMessage={type:`error`,text:Dr(n,t.companyName)},X();return}await Promise.all([nr(),P(),F()]),A.companyId===e&&await zi(),A.adminMessage={type:`success`,text:`Generated ${Er(n.report_mode||A.adminReportMode)} report for ${t.companyName} with ${Number(n.report_items||0)} item${Number(n.report_items||0)===1?``:`s`}. Open the Reports tab to review it.`},U(`Company report generated`,`success`)}catch(e){console.error(`Failed to generate admin company report:`,e),A.adminMessage={type:`error`,text:`Failed to generate report for ${t.companyName}. ${H(e)}`}}finally{ur(e),X()}}async function yr(e,t,n){if(!A.isAdmin){A.adminMessage={type:`error`,text:`You do not have access to this action.`},X();return}if(!e||!t||![`approve`,`reject`].includes(n)){A.adminMessage={type:`error`,text:`Missing review action details.`},X();return}A.adminReviewActions={...A.adminReviewActions||{},[e]:n},A.adminMessage=null,X();try{let r=await Tr(t,`review_match`,{matchId:e,reviewAction:n});await Promise.all([F(),P()]),A.companyId===t&&await Ri(),A.adminMessage={type:`success`,text:r.message||(n===`approve`?`Match approved for customer reports.`:`Match rejected and hidden.`)},U(n===`approve`?`Match approved`:`Match rejected`,`success`)}catch(e){console.error(`Failed to review admin match:`,e),A.adminMessage={type:`error`,text:`Failed to ${n} match. ${H(e)}`}}finally{let t={...A.adminReviewActions||{}};delete t[e],A.adminReviewActions=t,X()}}async function br(e,t={}){if(!A.isAdmin){A.adminMessage={type:`error`,text:`You do not have access to this action.`},X();return}if(!e){A.adminMessage={type:`error`,text:`Missing match ID for AI review.`},X();return}A.adminAiReviewActions={...A.adminAiReviewActions||{},[e]:!0},A.adminAiReviewError=null,A.adminMessage=null,X();try{let n=await ge(e,{force:t.force===!0});await F(),await P(),A.adminMessage={type:`success`,text:n.cached?`Loaded cached AI review.`:t.force?`AI review re-run completed.`:`AI review completed.`},U(n.cached?`AI review loaded`:t.force?`AI review re-run completed`:`AI review completed`,`success`)}catch(e){console.error(`Failed to run AI match review:`,e),A.adminAiReviewError=H(e),A.adminMessage={type:`error`,text:`AI review failed. ${H(e)}`}}finally{let t={...A.adminAiReviewActions||{}};delete t[e],A.adminAiReviewActions=t,X()}}async function xr(e,t={}){if(!A.isAdmin){A.adminMessage={type:`error`,text:`You do not have access to this action.`},X();return}if(!e){A.adminMessage={type:`error`,text:`Missing company ID for AI review batch.`},X();return}A.adminCompanyAiReviewActions={...A.adminCompanyAiReviewActions||{},[e]:!0},A.adminMessage=null,X();try{let n=await _e(e,{limit:10,force:t.force===!0,revalidate:t.force===!0});A.adminCompanyAiReviewResults={...A.adminCompanyAiReviewResults||{},[e]:n},await Promise.all([P(),F()]),A.companyId===e&&await Ri(),A.adminMessage={type:`success`,text:`${t.force?`AI revalidation`:`AI batch`} reviewed ${Number(n.reviewed||0)} matches. ${Number(n.skipped||0)} skipped.`},U(t.force?`AI company revalidation completed`:`AI company review completed`,`success`)}catch(e){console.error(`Failed to run company AI review batch:`,e),A.adminMessage={type:`error`,text:`AI company review failed. ${H(e)}`}}finally{let t={...A.adminCompanyAiReviewActions||{}};delete t[e],A.adminCompanyAiReviewActions=t,X()}}async function Sr(){if(!A.isAdmin){A.adminMessage={type:`error`,text:`You do not have access to this action.`},X();return}A.adminAutomaticAiReviewLoading=!0,A.adminMessage=null,X();try{let e=await ve({limit:10});A.adminAutomaticAiReviewResult=e,await Promise.all([P(),F()]),A.adminMessage={type:`success`,text:`Automatic AI review created ${Number(e.ai_reviews_created||0)} reviews across ${Number(e.companies_checked||0)} companies.`},U(`Automatic AI review completed`,`success`)}catch(e){console.error(`Failed to run automatic AI review:`,e),A.adminMessage={type:`error`,text:`Automatic AI review failed. ${H(e)}`}}finally{A.adminAutomaticAiReviewLoading=!1,X()}}async function Cr(){if(A.isAdmin){A.adminDailyPipelineLoading=!0,A.adminMessage=null,X();try{let e=await fe();A.adminDailyPipelineResult=e,await Promise.all([Or(),P(),F()]),A.adminMessage={type:e.errors?.length?`error`:`success`,text:`Daily pipeline finished: ${Number(e.sources_imported||0)} sources, ${Number(e.companies_refreshed||0)} companies, ${Number(e.ai_reviews_created||0)} AI reviews.`}}catch(e){console.error(`Failed to run daily pipeline:`,e),A.adminMessage={type:`error`,text:`Daily pipeline failed. ${H(e)}`}}finally{A.adminDailyPipelineLoading=!1,X()}}}async function wr(e,t){if(!A.isAdmin||!e)return;let n=(A.adminCompanies||[]).find(t=>t.id===e);A.adminMessage=null,X();try{await ye(e,t),A.adminCompanies=(A.adminCompanies||[]).map(n=>n.id===e?{...n,autoAiReviewEnabled:t}:n),await P(),A.adminMessage={type:`success`,text:`Automatic AI review ${t?`enabled`:`disabled`} for company.`},X()}catch(t){console.error(`Failed to toggle company automatic AI review:`,t);let r=t?.details||{};A.adminMessage={type:`error`,text:`Failed to update automatic AI review setting. ${H(t)} Debug: company_id=${e}; company=${n?.companyName||`unknown`}; email=${n?.contactEmail||`unknown`}; returned_rows=${r.rowCount??`unknown`}; returned_data=${r.dataReturned===!1?`false`:`unknown`}.`},X()}}async function Tr(e,t,n={}){let r=si();if(!r)throw Error(`Admin company actions are not configured. Set window.VERKRADAR_ADMIN_COMPANY_ACTIONS_URL or window.VERKRADAR_SUPABASE_URL.`);let i=await fetch(r,{method:`POST`,headers:await fi(),body:JSON.stringify({companyId:e,action:t,...n})}),a=await i.json().catch(()=>({}));if(!i.ok)throw Error(a.error||`Admin company action failed with status ${i.status}`);return a}function Er(e){return e===`all_current`?`current active opportunities`:`new opportunities`}function Dr(e,t){let n=e?.report_mode||A.adminReportMode||`all_current`;return e?.message||(n===`new_only`?`No new eligible opportunities found since the previous report.`:`No customer-report-ready matches found for ${t}.`)}async function Or(){A.isAdmin&&(await Promise.all([tr(),di(),nr(),ar(),P(),F()]),U(`Automation status refreshed`,`success`),X())}function kr(e){let t=e.raw_payload&&typeof e.raw_payload==`object`?e.raw_payload:{},n=e.sources?.name||t.source_name||``,r=I(t.quality_status||t.qualityStatus,{source:n,sourceType:e.sources?.source_type||``,title:e.title||``,description:jr(e.description||``,t,n,e.title||``),rawPayload:t}),i=L({source:n,sourceType:e.sources?.source_type||``,title:e.title||``,description:e.description||``,category:e.category||``,keywords:Array.isArray(e.keywords)?e.keywords:[],qualityStatus:r,rawPayload:t});return{id:e.id,externalId:e.external_id||``,countryCode:e.country_code||``,title:e.title,buyer:dn(e.buyer,n,t),source:n||`Supabase`,sourceType:e.sources?.source_type||``,category:e.category||`Other`,type:e.type||`tender`,description:e.description||``,deadline:e.deadline,deadlineAt:t.deadline_at||``,publishedDate:e.published_date,createdAt:e.created_at,location:Fr(e.location||`Unknown`,t,n,e.title||``,e.description||``),estimatedValue:e.estimated_value,currency:e.currency||`ISK`,url:e.url||``,cpvCode:e.cpv_code||``,requirements:Array.isArray(e.requirements)?e.requirements:[],keywords:Array.isArray(e.keywords)?e.keywords:[],difficulty:e.difficulty||`medium`,status:e.status||`open`,qualityStatus:r,intent:i,rawPayload:t}}function Ar(e){let t=kr(e.opportunities||{});return{...t,matchScore:Number(e.match_score||0),matchLabel:e.match_label||Wa(Number(e.match_score||0)),matchReasons:ni(t,Array.isArray(e.match_reasons)?e.match_reasons:[]),risks:Array.isArray(e.risks)?e.risks:[],nextSteps:Array.isArray(e.next_steps)?e.next_steps:[],safetyStatus:e.safety_status||`needs_review`,safetyReasons:Array.isArray(e.safety_reasons)?e.safety_reasons:[],alertEligible:!!e.alert_eligible,reviewRequired:!!e.review_required,reviewedAt:e.reviewed_at||``,reviewNote:e.review_note||``}}function jr(e,t={},n=``,r=``){t=t&&typeof t==`object`?t:{};let i=String(e||``).replace(/\s+/g,` `).trim(),a=D(n);if(!i)return``;if(a.includes(`rikiskaup`)||a.includes(`utbodsvefur`)){let e=Mr(i,t,r);if(e)return e;if(Nr(i)||Pr(i))return A.language===`is`?`Útboðstilkynning flutt inn af Útboðsvef. Opnið upprunasíðuna til að staðfesta kaupanda, skilafrest, kröfur og útboðsgögn.`:`Procurement notice imported from Útboðsvefur. Open the source page to confirm buyer, deadline, requirements and tender documents.`}return i}function Mr(e,t={},n=``){t=t&&typeof t==`object`?t:{};let r=String(e||``).replace(/\s+/g,` `).trim();if(!r)return``;let i=[r.search(/F\.h\.[^.]{0,280}ósk(?:að|ar) eftir tilboðum/i),r.search(/(?:Reykjavíkurborg|sveitarfélag|bærinn|kaupandi)[^.]{0,280}ósk(?:að|ar) eftir tilboðum/i),r.search(/óskar eftir tilboðum|óskað eftir tilboðum|oskar eftir tilbodum|oskad eftir tilbodum/i),r.search(/verkefnið felst|verkið felst|verkið felur|gatna-|gatnagerð|stígagerð/i)].filter(e=>e>=0);if(!i.length)return``;let a=Math.min(...i),o=r.slice(a).search(/\s+(Nánari upplýsingar|Útboðsgögn afhent|Opnun tilboða|Opnun tilboda|Auglýsandi|Flokkar|Tengdar fréttir|Fjöldi útboð)\b/i),s=o>120?a+o:a+1200,c=[r.slice(a,s).trim()],l=t.extracted_deadline_text||t.deadline_text||``;l&&!c[0].includes(String(l))&&c.push(`Skilafrestur: ${l}`);let u=Qt(c).join(` `).replace(/^(Útboðsvefur\s*){1,}/i,``).replace(/\s+/g,` `).trim();return Pr(u)?``:u||n}function Nr(e){return/Procurement notice imported from Útboðsvefur|Open the source page for full buyer details/i.test(String(e||``))}function Pr(e){let t=String(e||``);return[`Framkvæmdasýslan`,`Ríkiseignir`,`Garðabær`,`Grímsnes`,`Fjöldi útboð`,`Útboðsvefur.is - Opinber útboð`].filter(e=>t.includes(e)).length>=3||/^Útboðsvefur\s+Útboðsvefur\.is/i.test(t)}function Fr(e,t={},n=``,r=``,i=``){let a=Ir(`${r} ${i} ${JSON.stringify(t||{})}`),o=String(e||``).trim();return a&&(!o||/unknown|all iceland|iceland/i.test(o))?a:o||a||`Unknown`}function Ir(e){let t=D(e);return t.includes(`vogabyggd`)||t.includes(`reykjavikurborg`)||t.includes(`strandstigur`)?`Reykjavík / Höfuðborgarsvæðið`:``}function Lr(e){if(!e||e.status!==`open`||!e.url||e.url===`#`||w(e.deadline)<0||Rr(e)||e.rawPayload?.extraction_method===`parent_article_with_child_opportunities`||_l(e)||Ur(e))return!1;if(!ic(e))return!0;let t=ei(e);return[`IS`,`NO`,`DK`,`SE`,`FI`].includes(t)}function Rr(e){let t=D(e?.source||``),n=D(e?.title||``),r=D(e?.externalId||``),i=D(e?.sourceType||``),a=e?.rawPayload||{},o=`${t} ${n} ${r} ${i}`;return!!(a.is_demo===!0||a.demo===!0||t===`private lead`||t.includes(`private lead`)||t===`grant portal`||t.includes(`grant portal`)||t===`manual test`||t.includes(`manual test`)||[`demo`,`test`,`sample`,`mock`,`fake`].some(e=>i.includes(e))||/\b(demo|test|sample|mock|fake|manual)\b/.test(o)||n.includes(`manual test`)||n.includes(`municipal websites example`)||r.includes(`demo`)||r.includes(`test`))}function I(e,t={}){let n=String(e||``).toLowerCase(),r=zr(t?.rawPayload?.opportunity_intent||t?.rawPayload?.intent);if(r===`confirmed_tender`)return`confirmed_tender`;if(r===`early_opportunity`||r===`market_signal`)return`early_signal`;if(r===`news_context`||r===`not_opportunity`)return`needs_review`;if(ic(t))return`confirmed_tender`;if(R(t)){let e=Br(t);return[`tender_awarded`,`awarded`,`already_tendered`,`announced`].includes(e)?`confirmed_tender`:e===`upcoming_tender`?`early_signal`:`needs_review`}if(n===`early_signal`||n===`needs_review`)return n;let i=z(t);return B(i,[`senn í útboð`,`senn i utbod`])?`early_signal`:Hr(i)?`confirmed_tender`:Qr(t?.title||``)&&!Hr(i)?`needs_review`:Xr(i)?`early_signal`:($r(i),`needs_review`)}function zr(e){return{confirmed:`confirmed_tender`,confirmed_tender:`confirmed_tender`,likely_opportunity:`confirmed_tender`,verified:`confirmed_tender`,early_signal:`early_opportunity`,early_opportunity:`early_opportunity`,upcoming_tender:`early_opportunity`,market_signal:`market_signal`,project_signal:`market_signal`,needs_review:`market_signal`,news_context:`news_context`,news:`news_context`,noise:`not_opportunity`,not_opportunity:`not_opportunity`,stale_opportunity:`not_opportunity`,stale:`not_opportunity`,expired:`not_opportunity`}[String(e||``).toLowerCase().trim()]||``}function L(e={}){let t=zr(e?.rawPayload?.opportunity_intent||e?.rawPayload?.intent),n=String(e?.rawPayload?.admin_report_status||``).toLowerCase();if(n===`include`)return`confirmed_tender`;if([`hidden`,`hide`,`noise`,`deleted`].includes(n))return t||`not_opportunity`;if(t)return t;if(ic(e))return`confirmed_tender`;let r=z(e),i=e?.title||``;if(R(e)){let t=Br(e);return[`tender_awarded`,`awarded`,`already_tendered`,`announced`].includes(t)?`confirmed_tender`:t===`upcoming_tender`?`early_opportunity`:`market_signal`}return Hr(r)?`confirmed_tender`:Qr(i)||$r(r)?`news_context`:Yr(r)?`early_opportunity`:(Zr(r),`market_signal`)}function R(e){return e?.rawPayload?.extraction_method===`vegagerdin_article_project_parser`}function Br(e){let t=String(e?.rawPayload?.tender_state||``).trim(),n=Vr(e),r={awarded:`tender_awarded`,open_or_published:`announced`,planned_tender:`upcoming_tender`,unclear:`project_signal`}[t]||t;return n===`tender_awarded`?`tender_awarded`:n===`already_tendered`&&![`tender_awarded`,`announced`].includes(r)?`already_tendered`:n===`announced`&&![`tender_awarded`,`already_tendered`].includes(r)?`announced`:n===`upcoming_tender`&&[``,`project_signal`,`needs_review`,`unclear`].includes(r)?`upcoming_tender`:r||n}function Vr(e){let t=z(e);return B(t,[`lægstbjóðandi`,`laegstbjodandi`,`samningur var`,`samið var`,`samid var`,`skrifað var undir verksamning`,`skrifad var undir verksamning`])?`tender_awarded`:B(t,[`útboð var auglýst`,`utbod var auglyst`,`útboðið var auglýst`,`utbodid var auglyst`,`útboð hefur farið fram`,`utbod hefur farid fram`,`útboðið hefur farið fram`,`utbodid hefur farid fram`,`boðið út`,`bodid ut`,`verkið var boðið út`,`verkid var bodid ut`,`útboð var opnað`,`utbod var opnad`,`tilboð opnuð`,`tilbod opnud`])?`already_tendered`:B(t,[`óskað eftir tilboðum`,`oskad eftir tilbodum`,`tilboðsfrestur`,`tilbodsfrestur`,`skilafrestur`,`verðfyrirspurn`,`verdfyrirspurn`,`rammasamningur`,`forval`])?`announced`:B(t,[`áætlað útboð`,`aaetlad utbod`,`áætlað er að bjóða út`,`aaetlad er ad bjoda ut`,`fyrirhugað útboð`,`fyrirhugad utbod`,`senn í útboð`,`senn i utbod`,`útboð verður`,`utbod verdur`])?`upcoming_tender`:`project_signal`}function z(e){return D([e?.title,e?.description,e?.category,e?.source,...Array.isArray(e?.keywords)?e.keywords:[]].filter(Boolean).join(` `))}function B(e,t){let n=D(e);return t.some(e=>n.includes(D(e)))}function Hr(e){return B(e,[`útboð`,`utbod`,`útboðsauglýsing`,`utbodsauglysing`,`tilboð`,`tilboðum`,`tilbod`,`tilbodum`,`óskað eftir tilboðum`,`oskad eftir tilbodum`,`verðfyrirspurn`,`verdfyrirspurn`,`innkaup`,`rammasamningur`,`forval`,`tender`,`procurement`,`skilafrestur`,`útboðsgögn`,`utbodsgogn`])}function Ur(e={}){let t=e.rawPayload||{};return t.stale_status===`stale_or_expired`||t.opportunity_intent===`stale_opportunity`?!0:Wr({title:e.title,description:e.description,content:[e.category,e.source,Array.isArray(e.keywords)?e.keywords.join(` `):``].filter(Boolean).join(` `),publishedDate:e.publishedDate,deadline:e.deadline,sourceName:e.source,sourceType:e.sourceType,connectorType:t.connector_type}).isStale}function Wr(e={}){let t=String(e.deadline||``).slice(0,10);if(t&&w(t)>=0)return{isStale:!1,reason:``,thresholdDays:null,ageDays:null,oldYears:[],expiredKeywords:[]};let n=D([e.title,e.description,e.content].filter(Boolean).join(` `)),r=Kr(n),i=qr(n),a=Jr(e.publishedDate),o=a?Math.floor((Date.now()-new Date(`${a}T00:00:00Z`).getTime())/864e5):null,s=Gr(e)?45:60;return r.length?{isStale:!0,reason:`Old year detected (${r.join(`, `)}) and no future deadline found.`,thresholdDays:s,ageDays:o,oldYears:r,expiredKeywords:i}:i.length?{isStale:!0,reason:`Expired/result wording detected (${i.slice(0,3).join(`, `)}) and no future deadline found.`,thresholdDays:s,ageDays:o,oldYears:r,expiredKeywords:i}:o!==null&&o>s?{isStale:!0,reason:`Published ${o} days ago with no current deadline.`,thresholdDays:s,ageDays:o,oldYears:r,expiredKeywords:i}:{isStale:!1,reason:``,thresholdDays:s,ageDays:o,oldYears:r,expiredKeywords:i}}function Gr(e={}){let t=D(`${e.sourceName||``} ${e.sourceType||``} ${e.connectorType||``}`);return String(e.connectorType||``)===`rss_feed`&&[`municipal`,`sveitarfelag`,`akranes`,`borgarbyggd`,`arborg`,`selfoss`,`gardabaer`,`reykjanesbaer`,`hafnarfjordur`,`mosfellsbaer`,`kopavogur`,`mulathing`,`fjardabyggd`].some(e=>t.includes(D(e)))}function Kr(e){let t=new Date().getUTCFullYear(),n=new Set;return String(e||``).replace(/\b(20[0-9]{2})\b/g,(e,r)=>{let i=Number(r);return i>=2020&&i<t&&n.add(i),r}),Array.from(n).sort()}function qr(e){return`niðurstaða útboðs.nidurstada utbods.niðurstöður útboðs.nidurstodur utbods.opnun tilboða.opnun tilboda.tilboð opnuð.tilbod opnud.lokið.lokid.lokið útboði.lokid utbodi.búið.buid.útrunnið.ut runnid.eldri útboð.eldri utbod.útboðssaga.utbodssaga.samningur gerður.samningur gerdur.verksamningur.awarded.tender results.contract awarded.expired`.split(`.`).filter(t=>B(e,[t]))}function Jr(e){if(!e)return``;let t=new Date(e);return Number.isNaN(t.getTime())?``:t.toISOString().slice(0,10)}function Yr(e){return B(e,[`senn í útboð`,`senn i utbod`,`áætlað útboð`,`aaetlad utbod`,`áætlað er að bjóða út`,`aaetlad er ad bjoda ut`,`fyrirhugað útboð`,`fyrirhugad utbod`,`markaðskönnun`,`markadskonnun`,`rfi`])}function Xr(e){return Yr(e)?!0:B(e,[`áætlaðar framkvæmdir`,`aaetladar framkvaemdir`,`fyrirhugaðar framkvæmdir`,`fyrirhugadar framkvaemdir`,`framkvæmdir hefjast`,`framkvaemdir hefjast`,`malbikunarframkvæmdir`,`malbikunarframkvaemdir`,`vegaframkvæmdir`,`vegaframkvaemdir`,`brúargerð`,`bruargerd`,`jarðvinna`,`jardvinna`,`gatnagerð`,`gatnagerd`])}function Zr(e){return B(e,[`áætlaðar framkvæmdir`,`aaetladar framkvaemdir`,`fyrirhugaðar framkvæmdir`,`fyrirhugadar framkvaemdir`,`framkvæmdir hefjast`,`framkvaemdir hefjast`,`malbikunarframkvæmdir`,`malbikunarframkvaemdir`,`vegaframkvæmdir`,`vegaframkvaemdir`,`brúargerð`,`bruargerd`,`jarðvinna`,`jardvinna`,`gatnagerð`,`gatnagerd`,`fræsing`,`fraesing`])}function Qr(e){return B(e,[`lokun`,`lokað`,`lokad`,`lokanir`,`umferð`,`umferd`,`tafir`,`hjáleið`,`hjaleid`,`akstursleið`,`akstursleid`,`vegfarendur`,`frétt`,`frett`,`myndband`,`tekur á sig mynd`,`tekur a sig mynd`,`opið aftur`,`opid aftur`])}function $r(e){return B(e,[`lokun`,`lokanir`,`umferð`,`umferd`,`dagskrá`,`dagskra`,`skráning`,`skraning`,`myndband`,`ráðstefna`,`radstefna`,`kynningarfundur`,`tilkynning`,`fundur`,`fjölskylduganga`,`fjolskylduganga`,`tafir`,`kynnt`,`styrkur`,`frétt`,`frett`,`viðburður`,`vidburdur`])}function ei(e){let t=ti(e.countryCode);if(t)return t;let n=D(La(e));return n.includes(`iceland`)||n.includes(`island`)||n.includes(`reykjavik`)||n.includes(`capital area`)||n.includes(`hofudborgarsvaedid`)||n.includes(`east iceland`)||n.includes(`west iceland`)||n.includes(`north iceland`)||n.includes(`south iceland`)||n.includes(`sudurnes`)?`IS`:n.includes(`norway`)?`NO`:n.includes(`denmark`)?`DK`:n.includes(`sweden`)?`SE`:n.includes(`finland`)?`FI`:``}function ti(e){return{IS:`IS`,ISL:`IS`,ICELAND:`IS`,ÍSLAND:`IS`,NO:`NO`,NOR:`NO`,NORWAY:`NO`,DK:`DK`,DNK:`DK`,DENMARK:`DK`,SE:`SE`,SWE:`SE`,SWEDEN:`SE`,FI:`FI`,FIN:`FI`,FINLAND:`FI`}[String(e||``).trim().toUpperCase()]||``}function ni(e,t){return Ia(e)?t:t.filter(e=>!/^Located in your selected region:/i.test(String(e||``)))}function ri(){A.authForm={email:``,password:``,newPassword:``,confirmPassword:``}}function ii(){A.authForm.newPassword=``,A.authForm.confirmPassword=``}function ai(){return window.VERKRADAR_TED_IMPORT_URL?window.VERKRADAR_TED_IMPORT_URL:window.VERKRADAR_SUPABASE_URL?`${window.VERKRADAR_SUPABASE_URL}/functions/v1/import-ted`:`${c}/functions/v1/import-ted`}function oi(){return window.VERKRADAR_SOURCE_CONNECTOR_IMPORT_URL?window.VERKRADAR_SOURCE_CONNECTOR_IMPORT_URL:window.VERKRADAR_SUPABASE_URL?`${window.VERKRADAR_SUPABASE_URL}/functions/v1/import-source-connectors`:`${c}/functions/v1/import-source-connectors`}function si(){return window.VERKRADAR_ADMIN_COMPANY_ACTIONS_URL?window.VERKRADAR_ADMIN_COMPANY_ACTIONS_URL:window.VERKRADAR_SUPABASE_URL?`${window.VERKRADAR_SUPABASE_URL}/functions/v1/admin-company-actions`:`${c}/functions/v1/admin-company-actions`}async function ci(e){let t=await e.text();if(!t)return{};try{return JSON.parse(t)}catch{return{errors:[t]}}}async function li(){if(!A.isAdmin){A.importStatus={errors:[`You do not have access to import TED notices.`]},X();return}let e=ai();if(!e){A.importStatus={errors:[`TED importer is not configured. Set window.VERKRADAR_TED_IMPORT_URL or window.VERKRADAR_SUPABASE_URL for this environment.`]},X();return}A.importLoading=!0,A.importStatus=null,A.importedTedOpportunities=[],X();try{let t=await fetch(e,{method:`POST`,headers:await fi(),body:JSON.stringify({limit:50,importMode:A.tedImportMode})}),n=await ci(t);if(A.importStatus=t.ok?n:{...n,errors:n.errors||[`Import failed with status ${t.status}`]},t.ok){await er();let e=A.companyId?await Hi():Number(n.matched||0);await di(),A.isAdmin&&(await tr(),await nr()),A.importStatus={...A.importStatus,matched:e},U(`TED import completed`,`success`)}}catch(e){A.importStatus={errors:[e instanceof Error?e.message:String(e)]}}finally{A.importLoading=!1,X()}}async function ui(e=``){if(!A.isAdmin){A.connectorImportStatus={errors:[`You do not have access to run source imports.`]},X();return}let t=oi();if(!t){A.connectorImportStatus={errors:[`Source connector importer is not configured. Set window.VERKRADAR_SOURCE_CONNECTOR_IMPORT_URL or window.VERKRADAR_SUPABASE_URL for this environment.`]},X();return}A.connectorImportLoading=!e,A.connectorTestingSourceId=e||null,A.connectorImportStatus=null,X();try{let n=await fetch(t,{method:`POST`,headers:await fi(),body:JSON.stringify({limit:e?50:20,maxSources:e?1:6,sourceId:e||void 0,refreshMatches:!!e,generateReports:!1})}),r=await ci(n),i=Array.isArray(r.errors)?r.errors:[],a=Array.isArray(r.failedSources)?r.failedSources:[];A.connectorImportStatus=n.ok?{...r,failedSources:a}:{...r,failedSources:a,errors:i.length?i:[`Source import failed with status ${n.status}${n.statusText?` ${n.statusText}`:``}`]},n.ok&&(await er(),await Or(),U(e?`Source test completed`:`Automatic source imports completed`,`success`))}catch(e){A.connectorImportStatus={errors:[e instanceof Error?e.message:String(e)]}}finally{A.connectorImportLoading=!1,A.connectorTestingSourceId=null,X()}}async function di(){if(!l){A.importedTedOpportunities=[],A.importedTedOpportunitiesLoaded=!0;return}A.importedTedOpportunitiesLoading=!0,A.importedTedOpportunitiesError=null;try{let{data:e,error:t}=await l.from(`sources`).select(`id, name`).in(`name`,[`TED Iceland/Nordic`,`EU TED`,`Tenders Electronic Daily`]);if(t)throw t;let n=(e||[]).map(e=>e.id).filter(Boolean);if(!n.length){A.importedTedOpportunities=[];return}let{data:r,error:i}=await l.from(`opportunities`).select(`*, sources(name, source_type)`).in(`source_id`,n).order(`created_at`,{ascending:!1}).limit(10);if(i)throw i;A.importedTedOpportunities=(r||[]).map(kr)}catch(e){console.error(`Failed to load latest TED opportunities:`,e),A.importedTedOpportunities=[],A.importedTedOpportunitiesError=H(e)}finally{A.importedTedOpportunitiesLoading=!1,A.importedTedOpportunitiesLoaded=!0}}async function fi(){let e={"content-type":`application/json`},t=window.VERKRADAR_SUPABASE_ANON_KEY||`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFzb2p4amJzZ3FiZnBiZXBvanpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAwNTU2NjgsImV4cCI6MjA5NTYzMTY2OH0.yPA34VbqWqKrBPespmHr5AojYzjhy3kGRxswO9XdAd0`;t&&t!==`PASTE_MY_ANON_PUBLIC_KEY_HERE`&&(e.apikey=t);let{data:n,error:r}=l?await l.auth.getSession():{data:{session:null},error:null};if(r)throw r;let i=n.session?.access_token;if(!i)throw Error(`You must be logged in to run this admin action.`);return e.authorization=`Bearer ${i}`,e}function pi(){let e=A.pendingInviteToken||v();return e&&_(A.route)?`${window.location.origin}/#/accept-invite?token=${encodeURIComponent(e)}`:`${window.location.origin}/#/onboarding`}function mi(){return`${window.location.origin}/#/reset-password`}function hi(e){let t=e?.user?.identities;return Array.isArray(t)&&t.length===0}function gi(){return[{label:k(`login`),href:j(`/login`),variant:`primary`},{label:k(`forgotPassword`),href:j(`/forgot-password`),variant:`secondary`}]}async function _i(e,t){Mn(),A.authSubmitting=!0,A.authMessage=null,X();try{if(!l)throw Error(`Supabase client is not configured.`);let{data:n,error:r}=await l.auth.signUp({email:String(e||``).trim(),password:String(t||``),options:{emailRedirectTo:pi()}});if(r)throw r;if(Fn(),hi(n)){A.user=null,A.currentUser=null,A.authMessage={type:`error`,text:k(`signupExistingAccount`),actions:gi()},A.authForm.password=``,X();return}if(!n.session?.user){A.user=null,A.currentUser=null;let e=Array.isArray(n?.user?.identities)&&n.user.identities.length>0;A.authMessage={type:`success`,text:A.pendingInviteToken?k(`inviteSignupCreatedConfirm`):k(e?`signupCreatedConfirm`:`signupNeutralNextSteps`)},A.authForm.password=``,X();return}A.user=n.session.user,A.currentUser=A.user,A.profileDraft=null,A.profileDraftDirty=!1,await Ci(A.user),A.authMessage={type:`success`,text:k(`signupCreatedConfirm`)},await ki({overwriteDraft:!0}),ri(),M(Kn())}catch(e){console.error(`Signup failed:`,e);let t=Yi(e);A.authMessage={type:`error`,text:Ji(e,`signup`),actions:t?gi():[]},X()}finally{A.authSubmitting=!1,X()}}async function vi(e,t){A.authSubmitting=!0,A.authMessage=null,X();try{if(!l)throw Error(`Supabase client is not configured.`);let{data:n,error:r}=await l.auth.signInWithPassword({email:String(e||``).trim(),password:String(t||``)});if(r)throw r;A.user=n.user||await Si(),A.currentUser=A.user,A.profileDraft=null,A.profileDraftDirty=!1,await Ci(A.user),await ki({overwriteDraft:!0}),ri(),M(Kn())}catch(e){console.error(`Login failed:`,e),A.authMessage={type:`error`,text:Ji(e,`login`)},X()}finally{A.authSubmitting=!1,X()}}async function yi(e){A.authSubmitting=!0,A.authMessage=null,X();try{if(!l)throw Error(`Supabase client is not configured.`);let{error:t}=await l.auth.resetPasswordForEmail(String(e||``).trim(),{redirectTo:mi()});if(t)throw t;A.authMessage={type:`success`,text:`If an account exists for this email, a reset link has been sent.`}}catch(e){console.error(`Password reset request failed:`,e),A.authMessage={type:`error`,text:`We could not send a reset link right now. Please try again.`}}finally{A.authSubmitting=!1,X()}}async function bi(e,t){let n=String(e||``),r=String(t||``);if(!n){A.authMessage={type:`error`,text:`Enter a new password.`},X();return}if(n.length<8){A.authMessage={type:`error`,text:`Password must be at least 8 characters.`},X();return}if(n!==r){A.authMessage={type:`error`,text:`Passwords do not match.`},X();return}A.authSubmitting=!0,A.authMessage=null,X();try{if(!l)throw Error(`Supabase client is not configured.`);let{error:e}=await l.auth.updateUser({password:n});if(e)throw e;ii(),M(`/login`),A.authMessage={type:`success`,text:`Password updated. You can now log in.`},X()}catch(e){console.error(`Password update failed:`,e),A.authMessage={type:`error`,text:`This reset link may be expired or invalid. Request a new reset link and try again.`},X()}finally{A.authSubmitting=!1,X()}}async function xi(){try{if(l){let{error:e}=await l.auth.signOut();if(e)throw e}}catch(e){console.error(`Logout failed:`,e)}finally{A.user=null,A.currentUser=null,A.isAdmin=!1,A.authLoaded=!0,A.adminLoaded=!0,A.profileLoaded=!0,Pn(),Fn(),M(`/`),X()}}async function Si(){if(!l)return null;let{data:e,error:t}=await l.auth.getUser();return t?(console.error(`Failed to get current user:`,t),null):e.user||null}async function Ci(e=A.user){if(!l||!e)return A.isAdmin=!1,!1;try{let{data:t,error:n}=await l.from(`admin_users`).select(`user_id`).eq(`user_id`,e.id).maybeSingle();if(n)throw n;return A.isAdmin=!!t?.user_id,A.isAdmin}catch(e){return console.error(`Failed to check admin access:`,e),A.isAdmin=!1,!1}}function V(){return Z(`
    <section class="empty-state">
      <h1>${O(k(`authRequiredTitle`))}</h1>
      <p>${O(k(`authRequiredText`))}</p>
      <button class="btn btn-primary" data-action="go" data-href="/login">${O(k(`login`))}</button>
      <button class="btn btn-secondary" data-action="go" data-href="/signup">${O(k(`createAccount`))}</button>
    </section>
  `)}function wi(){return Z(`
    <section class="empty-state">
      <h1>You do not have access to this page.</h1>
      <p>Admin access is limited to approved VerkRadar admin users.</p>
    </section>
  `)}var Ti=!1,Ei=!1;async function Di(){if(!l)return A.user=null,A.currentUser=null,null;let{data:e,error:t}=await l.auth.getSession();if(t)throw t;return A.user=e.session?.user||null,A.currentUser=A.user,A.user}async function Oi(){A.adminLoaded=!1,await Ci(A.currentUser||A.user),A.adminLoaded=!0}async function ki(e={}){let{overwriteDraft:t=!1,showGlobalLoading:n=!1}=e;(n||!A.profile&&!A.profileDraftDirty)&&(A.profileLoaded=!1),A.profileLoading=!0,A.profileLoadError=null;try{await Ai(Fi({overwriteDraft:t}),Cn,`Profile loading took too long. Please retry.`)}catch(e){console.error(`Failed to load profile from Supabase:`,e),A.profileLoadError=H(e)}finally{A.profileLoading=!1,A.profileLoaded=!0}}function Ai(e,t,n){let r,i=new Promise((e,i)=>{r=setTimeout(()=>i(Error(n)),t)});return Promise.race([e,i]).finally(()=>clearTimeout(r))}async function ji(){if(!A.isSavingProfile){A.profileLoadError=null,A.profileLoading=!0,X();try{await ki({overwriteDraft:!0})}catch(e){console.error(`Settings profile retry failed:`,e),A.profileLoadError=H(e)}finally{A.profileLoading=!1,A.profileLoaded=!0,X(),N()}}}function Mi(){!l||Ei||(Ei=!0,l.auth.onAuthStateChange(async(e,t)=>{if(Ti){if(A.user=t?.user||null,A.currentUser=A.user,A.user){if(e===`PASSWORD_RECOVERY`){A.authLoaded=!0,A.adminLoaded=!0,A.profileLoaded=!0,A.authMessage=null,M(`/reset-password`);return}try{await Oi(),A.route===`/settings`&&A.profileDraftDirty?A.profileLoaded=!0:await ki()}catch(e){console.error(`Auth profile refresh failed:`,e),A.profileLoadError=H(e),A.adminLoaded=!0,A.profileLoaded=!0}if(Zn())return;X(),N();return}A.isAdmin=!1,A.profile=null,A.companyMembership=null,A.profileDraft=null,A.profileDraftDirty=!1,A.profileLoading=!1,A.profileLoadError=null,A.companyId=null,A.storedMatches=[],A.reports=[],A.reportsLoaded=!1,A.reportsLoadError=null,A.selectedReportId=null,A.authLoaded=!0,A.adminLoaded=!0,A.profileLoaded=!0,e===`SIGNED_OUT`&&M(`/`),X(),N()}}))}async function Ni(){A.isBooting=!0,A.authLoaded=!1,A.profileLoaded=!1,A.adminLoaded=!1,A.bootError=null,X();try{Mi(),await Di(),A.authLoaded=!0,A.currentUser?(await Oi(),await ki({overwriteDraft:!0,showGlobalLoading:!0})):(A.profile=null,A.companyMembership=null,A.profileDraft=null,A.profileDraftDirty=!1,A.profileLoading=!1,A.profileLoadError=null,A.companyId=null,A.isAdmin=!1,A.adminLoaded=!0,A.profileLoaded=!0)}catch(e){console.error(`Boot failed:`,e),A.bootError=H(e),A.authLoaded=!0,A.adminLoaded=!0,A.profileLoaded=!0}finally{A.authLoading=!1,A.isBooting=!1,Ti=!0,Yn()?Xn(`/reset-password`):Zn({replace:!0}),X(),N()}}async function Pi(){if(!l||!A.user)return{company:null,membership:null};let{data:e,error:t}=await l.from(`companies`).select(`*`).eq(`owner_id`,A.user.id).maybeSingle();if(t)throw t;if(e)return{company:e,membership:null};let n=(await ae(l,A.user))[0]||null;if(!n?.company_id)return{company:null,membership:null};let{data:r,error:i}=await l.from(`companies`).select(`*`).eq(`id`,n.company_id).maybeSingle();if(i)throw i;return{company:r||null,membership:n}}async function Fi(e={}){let{overwriteDraft:t=!1}=e;if(!l||!A.user){A.profile=null,A.companyMembership=null,(t||!A.profileDraftDirty)&&(A.profileDraft=null),X();return}try{await ie(l,A.user).catch(e=>(console.warn(`Failed to claim invited company memberships:`,e),[]));let{company:e,membership:n}=await Pi();if(!e){A.companyId=null,A.companyMembership=null,A.storedMatches=[],A.reports=[],A.reportsLoaded=!1,A.reportsLoadError=null,A.selectedReportId=null,A.profile=null,(t||!A.profileDraftDirty)&&(A.profileDraft=null),A.profileLoadError=null,X(),N();return}if(A.profileDraftDirty&&A.companyId&&A.companyId!==e.id&&!t){if(!window.confirm(`You have unsaved profile changes. Switch company profile and discard those edits?`)){A.profileLoadError=`Unsaved changes were kept. Save or reload before switching company profiles.`,X(),N();return}A.profileDraftDirty=!1}let[r,i,a]=await Promise.all([l.from(`company_services`).select(`service`).eq(`company_id`,e.id),l.from(`company_locations`).select(`location`).eq(`company_id`,e.id),l.from(`company_keywords`).select(`keyword, type`).eq(`company_id`,e.id)]);if(r.error)throw r.error;if(i.error)throw i.error;if(a.error)throw a.error;A.companyId!==e.id&&(A.reports=[],A.reportsLoaded=!1,A.reportsLoadError=null,A.selectedReportId=null),A.companyId=e.id,A.companyMembership=n||null;let o=Li(e,r.data||[],i.data||[],a.data||[]);A.profile=o,(t||!A.profileDraftDirty)&&sa(o),A.profileLoadError=null,Xi(A.profile),await oo(),await Ri(),X(),N()}catch(e){console.error(`Failed to load Supabase company profile:`,e),A.profileLoadError=H(e),A.profileDraftDirty||(A.companyId=null,A.companyMembership=null,A.storedMatches=[],A.reports=[],A.reportsLoaded=!1,A.reportsLoadError=null,A.selectedReportId=null,A.profile=null),A.profileDraftDirty||(A.profileDraft=null),X(),N()}}async function Ii(e){if(!l)throw Error(`Supabase client is not configured.`);let t={...e,companyName:String(e.companyName||``).trim(),kennitala:String(e.kennitala||``).trim(),contactEmail:String(e.contactEmail||``).trim(),billingEmail:String(e.billingEmail||``).trim(),contactName:String(e.contactName||``).trim(),phone:String(e.phone||``).trim(),address:String(e.address||``).trim(),website:String(e.website||``).trim(),industry:String(e.industry||``).trim(),selectedPlan:Dn(e.selectedPlan||A.pendingSignupPlan||A.profile?.selectedPlan||A.profile?.plan)||`basic`,billingStatus:e.billingStatus||A.profile?.billingStatus||`trial`,trialStartedAt:e.trialStartedAt||A.profile?.trialStartedAt||new Date().toISOString(),trialEndsAt:e.trialEndsAt||A.profile?.trialEndsAt||new Date(Date.now()+336*60*60*1e3).toISOString(),services:E(e.services),locations:E(e.locations),includeKeywords:E(e.includeKeywords),excludeKeywords:E(e.excludeKeywords),baseLocation:String(e.baseLocation||``).trim(),serviceAreas:E(e.serviceAreas),willingToTravel:!!e.willingToTravel,nationalProjects:!!e.nationalProjects,remoteProjects:!!e.remoteProjects,minimumProjectValueForTravel:ea(e.minimumProjectValueForTravel),minProjectValue:ea(e.minProjectValue),maxProjectValue:ea(e.maxProjectValue),allowUnknownValue:!!e.allowUnknownValue,reportFrequency:e.reportFrequency||`weekly`,reportDay:e.reportDay||`monday`,deadlineReminders:!!e.deadlineReminders,includeLowConfidence:!!e.includeLowConfidence,autoAlertMode:e.autoAlertMode||`auto_safe_only`},{data:{user:n},error:r}=await l.auth.getUser();if(r)throw r;if(!n)throw Error(`You must be logged in to save a company profile.`);A.user=n;let i={company_name:t.companyName,contact_email:t.contactEmail||n.email,kennitala:t.kennitala||null,billing_email:t.billingEmail||t.contactEmail||n.email,contact_name:t.contactName||null,phone:t.phone||null,address:t.address||null,website:t.website||null,industry:t.industry,plan:t.selectedPlan,selected_plan:t.selectedPlan,billing_status:t.billingStatus,trial_started_at:t.trialStartedAt,trial_ends_at:t.trialEndsAt,base_location:t.baseLocation||null,service_areas:t.serviceAreas,willing_to_travel:t.willingToTravel,national_projects:t.nationalProjects,remote_projects:t.remoteProjects,minimum_project_value_for_travel:t.minimumProjectValueForTravel,min_project_value:t.minProjectValue,max_project_value:t.maxProjectValue,allow_unknown_value:t.allowUnknownValue,report_frequency:t.reportFrequency,report_day:t.reportDay,deadline_reminders:t.deadlineReminders,include_low_confidence:t.includeLowConfidence,auto_alert_mode:t.autoAlertMode},{data:a,error:o}=await(A.companyId?l.from(`companies`).update(i).eq(`id`,A.companyId).select().single():l.from(`companies`).upsert({...i,owner_id:n.id},{onConflict:`owner_id`}).select().single());if(o)throw console.error(`Company upsert error:`,o),o;A.companyId!==a.id&&(A.reports=[],A.reportsLoaded=!1,A.reportsLoadError=null,A.selectedReportId=null),A.companyId=a.id;let s=(await Promise.all([l.from(`company_services`).delete().eq(`company_id`,a.id),l.from(`company_locations`).delete().eq(`company_id`,a.id),l.from(`company_keywords`).delete().eq(`company_id`,a.id)])).find(e=>e.error)?.error;if(s)throw s;let c=t.services.map(e=>({company_id:a.id,service:e})),u=t.locations.map(e=>({company_id:a.id,location:e})),d=[...t.includeKeywords.map(e=>({company_id:a.id,keyword:e,type:`include`})),...t.excludeKeywords.map(e=>({company_id:a.id,keyword:e,type:`exclude`}))];if(c.length){let{error:e}=await l.from(`company_services`).insert(c);if(e)throw e}if(u.length){let{error:e}=await l.from(`company_locations`).insert(u);if(e)throw e}if(d.length){let{error:e}=await l.from(`company_keywords`).insert(d);if(e)throw e}A.profile=t,A.pendingSignupPlan=``,An(),Xi(t)}function Li(e,t,n,r){return{id:e.id||``,ownerId:e.owner_id||``,companyName:e.company_name||``,kennitala:e.kennitala||``,contactEmail:e.contact_email||``,billingEmail:e.billing_email||e.contact_email||``,contactName:e.contact_name||``,phone:e.phone||``,address:e.address||``,website:e.website||``,industry:e.industry||``,plan:e.plan||e.selected_plan||`basic`,selectedPlan:e.selected_plan||e.plan||`basic`,billingStatus:e.billing_status||`trial`,trialStartedAt:e.trial_started_at||``,trialEndsAt:e.trial_ends_at||``,services:E(t.map(e=>e.service)),includeKeywords:E(r.filter(e=>e.type===`include`).map(e=>e.keyword)),excludeKeywords:E(r.filter(e=>e.type===`exclude`).map(e=>e.keyword)),locations:E(n.map(e=>e.location)),baseLocation:e.base_location||``,serviceAreas:E(e.service_areas),willingToTravel:!!e.willing_to_travel,nationalProjects:!!e.national_projects,remoteProjects:!!e.remote_projects,minimumProjectValueForTravel:e.minimum_project_value_for_travel==null?null:Number(e.minimum_project_value_for_travel),minProjectValue:e.min_project_value==null?null:Number(e.min_project_value),maxProjectValue:e.max_project_value==null?null:Number(e.max_project_value),allowUnknownValue:!!e.allow_unknown_value,reportFrequency:e.report_frequency||`weekly`,reportDay:e.report_day||`monday`,deadlineReminders:!!e.deadline_reminders,includeLowConfidence:!!e.include_low_confidence,autoAlertMode:e.auto_alert_mode||`auto_safe_only`}}async function Ri(){if(!l||!A.companyId){A.storedMatches=[];return}try{let{data:e,error:t}=await l.from(`opportunity_matches`).select(`*, opportunities(*, sources(name, source_type))`).eq(`company_id`,A.companyId).order(`match_score`,{ascending:!1});if(t)throw t;let n=(e||[]).map(e=>e.calculated_at||e.updated_at||e.created_at).filter(Boolean).map(e=>new Date(e).getTime()).filter(e=>!Number.isNaN(e));A.lastMatchedAt=n.length?new Date(Math.max(...n)).toISOString():null;let r=(e||[]).filter(e=>e.opportunities).map(Ar).filter(Al).filter(Lr),i=r.map(e=>e.id).filter(Boolean),a=[];if(i.length){let{data:e,error:t}=await l.from(`ai_match_reviews`).select(`company_id, opportunity_id, fit, confidence, send_to_client, reason, fit_reasons, risks_or_questions, suggested_client_summary, created_at, updated_at`).eq(`company_id`,A.companyId).in(`opportunity_id`,i);t&&console.warn(`Failed to load AI reviews for report ranking:`,t),a=e||[]}A.storedMatches=Gt(r,a)}catch(e){console.error(`Failed to load stored opportunity matches. Falling back to frontend matching:`,e),A.storedMatches=[],A.lastMatchedAt=null}}async function zi(){if(A.companyId&&!A.reportArchiveLoading){A.reportArchiveLoading=!0,A.reportsLoadError=null,X();try{if(!l)throw Error(`Supabase client is not configured.`);let{data:e,error:t}=await l.from(`reports`).select(`
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
      `).eq(`company_id`,A.companyId).is(`archived_at`,null).order(`created_at`,{ascending:!1});if(t)throw t;A.reports=e||[],A.reportsLoaded=!0}catch(e){console.error(`Failed to load reports:`,e),A.reportsLoadError=H(e),A.reports=[],A.reportsLoaded=!0}finally{A.reportArchiveLoading=!1,X()}}}async function Bi(){if(!A.user){A.reportMessage={type:`error`,text:`Log in to save reports.`},X();return}if(!A.companyId){A.reportMessage={type:`error`,text:`Create a company profile before saving reports.`},X();return}let e=cl();if(!e.length){A.reportMessage={type:`error`,text:`No useful matches above the report threshold yet.`},X();return}let t=ul(A.profile,e);A.reportSaveLoading=!0,A.reportMessage=null,X();try{let{data:n,error:r}=await l.from(`reports`).insert({company_id:A.companyId,title:t.title,period_start:t.periodStart,period_end:t.periodEnd,summary:t.summary,text_content:t.textContent,html_content:t.htmlContent,status:`draft`}).select(`id`).single();if(r)throw r;let i=e.filter(e=>nn(e.id)).map((e,t)=>({report_id:n.id,opportunity_id:e.id,match_score:e.matchScore,match_reasons:e.matchReasons||[],risks:e.risks||[],sort_order:t+1}));if(i.length){let{error:e}=await l.from(`report_items`).insert(i);if(e)throw e}A.reportMessage={type:`success`,text:`Report saved`},await zi(),U(`Report saved`,`success`)}catch(e){console.error(`Failed to save report:`,e),A.reportMessage={type:`error`,text:`Failed to save report. ${H(e)}`}}finally{A.reportSaveLoading=!1,X()}}async function Vi(e){if(!(!e||!l||!A.user)&&window.confirm(A.language===`is`?`Ertu viss um að þú viljir fela þetta yfirlit? Þetta er ekki hægt að afturkalla í mælaborðinu.`:`Are you sure you want to hide this report? This cannot be undone from the dashboard.`)){A.reportArchiveLoading=!0,A.reportMessage=null,X();try{let{error:t}=await l.from(`reports`).update({archived_at:new Date().toISOString(),archived_by:A.user.id}).eq(`id`,e).eq(`company_id`,A.companyId);if(t)throw t;A.selectedReportId===e&&(A.selectedReportId=null),A.reports=A.reports.filter(t=>t.id!==e),A.reportMessage={type:`success`,text:A.language===`is`?`Yfirlitið var falið.`:`Report hidden.`},U(A.language===`is`?`Yfirlit falið`:`Report hidden`,`success`)}catch(e){console.error(`Failed to archive report:`,e),A.reportMessage={type:`error`,text:A.language===`is`?`Gat ekki falið yfirlitið. ${H(e)}`:`Could not hide report. ${H(e)}`}}finally{A.reportArchiveLoading=!1,X()}}}async function Hi(){A.matchingLoading=!0,A.matchStatus=null,X();try{if(!l)throw Error(`Supabase client is not configured.`);let e=A.user||await Si();if(!e)throw Error(`You must be logged in to run matching.`);A.user=e;let{company:t}=await Pi();if(!t)throw Error(`No Supabase company profile found. Save onboarding first.`);A.companyId=t.id;let[n,r,i,a]=await Promise.all([l.from(`company_services`).select(`service`).eq(`company_id`,t.id),l.from(`company_locations`).select(`location`).eq(`company_id`,t.id),l.from(`company_keywords`).select(`keyword, type`).eq(`company_id`,t.id),l.from(`opportunities`).select(`*, sources(name, source_type)`).eq(`status`,`open`)]);if(n.error)throw n.error;if(r.error)throw r.error;if(i.error)throw i.error;if(a.error)throw a.error;let o=Li(t,n.data||[],r.data||[],i.data||[]),s=A.profileDraftDirty,c=(a.data||[]).map(kr).filter(Lr).map(e=>Ha(o,e)).filter(e=>e.matchScore>=50).map(e=>({company_id:t.id,opportunity_id:e.id,match_score:e.matchScore,match_label:e.matchLabel,match_reasons:e.matchReasons,risks:e.risks,next_steps:e.nextSteps,calculated_at:new Date().toISOString()})),{error:u}=await l.from(`opportunity_matches`).delete().eq(`company_id`,t.id);if(u)throw u;if(c.length){let{error:e}=await l.from(`opportunity_matches`).insert(c);if(e)throw e}A.profile=o,Xi(o),s||sa(o);let d=c.length===1?`match`:`matches`;return A.matchStatus={type:`success`,text:`Matching complete — ${c.length} stored ${d} found.`},await er(),await oo(),await Ri(),c.length}catch(e){return console.error(`Failed to run matching:`,e),A.matchStatus={type:`error`,text:`Failed to run matching. ${H(e)}`},0}finally{A.matchingLoading=!1,X()}}async function Ui(e,t){if(!A.isAdmin){A.adminMessage={type:`error`,text:`You do not have access to this page.`},X();return}A.adminSubmitting=!0,A.adminMessage=null,X();try{if(!l)throw Error(`Supabase client is not configured.`);let n=Object.fromEntries(e.entries()),r=String(n.sourceName||n.source||`Manual`).trim()||`Manual`,i=String(n.title||``).trim();if(!i)throw Error(`Title is required.`);let a=String(n.description||``).trim()||`Manual opportunity: ${i}`,o={source_id:await qi(r),external_id:`manual-${Date.now()}`,title:i,buyer:String(n.buyer||``).trim()||null,category:String(n.category||``).trim()||null,type:String(n.type||``).trim()||`tender`,description:a,deadline:n.deadline||null,published_date:n.publishedDate||n.published_date||null,location:String(n.location||``).trim()||null,estimated_value:n.estimatedValue||n.estimated_value?Number(n.estimatedValue||n.estimated_value):null,currency:`ISK`,url:n.url||null,cpv_code:n.cpvCode||n.cpv_code||null,requirements:en(n.requirements),keywords:en(n.keywords),difficulty:String(n.difficulty||``).trim()||`medium`,status:String(n.status||``).trim()||`open`,raw_payload:{created_from:`admin`,source_name:r}},{error:s}=await l.from(`opportunities`).insert(o).select().single();if(s)throw console.error(`Supabase insert error:`,s),Error(`${s.message} (${s.code})`);A.adminMessage={type:`success`,text:`Opportunity saved to Supabase.`},A.adminOpportunityDraft=In(),t?.reset(),await er(),A.companyId&&await Hi(),U(`Opportunity added`,`success`)}catch(e){let t=H(e);console.error(`Failed to add opportunity. If this is an RLS error, allow anon insert/select during development:`,e),A.adminMessage={type:`error`,text:`Failed to save opportunity. ${t}`},X()}finally{A.adminSubmitting=!1,X()}}async function Wi(t){if(!A.isAdmin){A.adminMessage={type:`error`,text:`You do not have access to this page.`},X();return}A.adminDeletingId=t,A.adminMessage=null,X();try{if(!l)throw Error(`Supabase client is not configured.`);let{error:n}=await l.from(`opportunities`).delete().eq(`id`,t);if(n)throw n;A.saved=A.saved.filter(e=>e!==t),A.ignored=A.ignored.filter(e=>e!==t),Qi(e.saved,A.saved),Qi(e.ignored,A.ignored),A.adminMessage={type:`success`,text:`Opportunity deleted from Supabase.`},await er(),await di(),U(`Opportunity deleted`,`success`)}catch(e){let t=H(e);console.error(`Failed to delete opportunity. If this is an RLS error, allow anon delete/select during development:`,e),A.adminMessage={type:`error`,text:`Failed to delete opportunity. ${t}`},X()}finally{A.adminDeletingId=null,X()}}async function Gi(e,t){if(!A.isAdmin){A.adminMessage={type:`error`,text:`You do not have access to this page.`},X();return}A.adminUpdatingId=e,A.adminMessage=null,X();try{if(!l)throw Error(`Supabase client is not configured.`);let{error:n}=await l.from(`opportunities`).update({status:t}).eq(`id`,e);if(n)throw n;A.adminMessage={type:`success`,text:t===`open`?`Opportunity marked relevant.`:`Opportunity hidden.`},await er(),await di(),U(t===`open`?`Marked relevant`:`Opportunity hidden`,`success`)}catch(e){let t=H(e);console.error(`Failed to update opportunity status:`,e),A.adminMessage={type:`error`,text:`Failed to update opportunity. ${t}`},X()}finally{A.adminUpdatingId=null,X()}}async function Ki(e,t){if(!A.isAdmin){A.adminMessage={type:`error`,text:`You do not have access to this page.`},X();return}let n=A.opportunities.find(t=>t.id===e);if(!n)return;let r={include:{opportunity_intent:`confirmed_tender`,quality_status:`confirmed_tender`,hidden_from_reports:!1,admin_report_status:`include`},hide:{hidden_from_reports:!0,admin_report_status:`hidden`},noise:{opportunity_intent:`not_opportunity`,quality_status:`needs_review`,hidden_from_reports:!0,admin_report_status:`noise`},confirmed_tender:{opportunity_intent:`confirmed_tender`,quality_status:`confirmed_tender`,hidden_from_reports:!1,admin_report_status:`include`},early_opportunity:{opportunity_intent:`early_opportunity`,quality_status:`early_signal`,hidden_from_reports:!1,admin_report_status:`include`}}[t];if(r){A.adminUpdatingId=e,A.adminMessage=null,X();try{if(!l)throw Error(`Supabase client is not configured.`);let t={...n.rawPayload||{},...r,admin_reviewed_at:new Date().toISOString()},{error:i}=await l.from(`opportunities`).update({raw_payload:t}).eq(`id`,e);if(i)throw i;A.adminMessage={type:`success`,text:`Report visibility updated.`},await er(),U(`Report visibility updated`,`success`)}catch(e){let t=H(e);console.error(`Failed to update report visibility:`,e),A.adminMessage={type:`error`,text:`Failed to update report visibility. ${t}`},X()}finally{A.adminUpdatingId=null,X()}}}async function qi(e){if(!l)throw Error(`Supabase client is not configured`);let t=e&&e.trim()?e.trim():`Manual`,{data:n,error:r}=await l.from(`sources`).select(`id`).eq(`name`,t).maybeSingle();if(r)throw console.error(`Source select error:`,r),r;if(n&&n.id)return n.id;let{data:i,error:a}=await l.from(`sources`).insert({name:t,source_type:`manual`,is_active:!0,notes:`Created from VerkRadar admin page`}).select(`id`).single();if(a)throw console.error(`Source insert error:`,a),a;return i.id}function H(e){return e?typeof e==`string`?e:[e.message,e.details,e.hint,e.code].filter(Boolean).join(` `):`Unknown error`}function Ji(e,t=`login`){let n=String(e?.message||e||``).toLowerCase(),r=String(e?.code||e?.status||``).toLowerCase();return n.includes(`invalid login credentials`)||n.includes(`invalid_credentials`)||r.includes(`invalid_credentials`)?k(`emailOrPasswordIncorrect`):n.includes(`email not confirmed`)?k(`confirmEmailBeforeLogin`):Yi(e)?k(`signupExistingAccount`):n.includes(`password`)&&n.includes(`characters`)?k(`passwordTooShort`):n.includes(`rate limit`)||n.includes(`too many`)?k(`tooManyAttempts`):k(t===`signup`?`couldNotCreateAccount`:`couldNotLogin`)}function Yi(e){let t=String(e?.message||e||``).toLowerCase(),n=String(e?.code||e?.status||``).toLowerCase();return t.includes(`user already registered`)||t.includes(`already registered`)||t.includes(`already exists`)||n.includes(`user_already_exists`)||n.includes(`email_exists`)}function U(e,t=`success`){A.toast={message:e,type:t},X(),clearTimeout(window.__toastTimeout),window.__toastTimeout=setTimeout(()=>{A.toast=null,X()},2500)}function Xi(t){localStorage.setItem(e.profile,JSON.stringify(t))}function Zi(e){try{let t=localStorage.getItem(e);return t?JSON.parse(t):[]}catch{return[]}}function Qi(e,t){localStorage.setItem(e,JSON.stringify(t))}function $i(e){return E(e).join(`, `)}function ea(e){if(e==null||e===``)return null;let t=Number(e);return Number.isFinite(t)?t:null}function ta(e){return String(e||``).trim().toLowerCase()}function na(e,t=A.profileDraft?.industry){return i[e]?.[t]||[]}function ra(e,t){if(![`services`,`includeKeywords`,`excludeKeywords`].includes(e)||!t)return;W();let n=Array.isArray(A.profileDraft[e])?A.profileDraft[e]:[],r=ta(t),i=n.some(e=>ta(e)===r);A.profileDraft[e]=i?n.filter(e=>ta(e)!==r):[...n,t],oa(),X()}function ia({field:e,title:t,values:n,selectedValues:r}){if(!n.length)return``;let i=Array.isArray(r)?r:[];return`
    <div class="suggestion-group">
      <div class="suggestion-group-head">
        <span>${O(t)}</span>
      </div>
      <div class="suggestion-chips">
        ${n.map(t=>{let n=i.some(e=>ta(e)===ta(t));return`
            <button
              type="button"
              class="suggestion-chip ${n?`is-selected`:``}"
              data-action="toggle-profile-suggestion"
              data-field="${O(e)}"
              data-value="${O(t)}"
              aria-pressed="${n?`true`:`false`}"
            >${O(t)}</button>
          `}).join(``)}
      </div>
    </div>
  `}function W(){if(!A.profileDraft){if(A.profile){A.profileDraft=aa(A.profile);return}A.profileDraft=wn(),A.pendingSignupPlan&&(A.profileDraft.selectedPlan=A.pendingSignupPlan)}}function aa(e){return{...e,services:E(e.services),includeKeywords:E(e.includeKeywords),excludeKeywords:E(e.excludeKeywords),locations:E(e.locations),serviceAreas:E(e.serviceAreas)}}function oa(){A.profileDraftDirty=!0,A.profileSaved=!1,A.profileSaveMessage=null,A.profileSaveError=null}function sa(e){A.profileDraft=aa(e||wn()),A.profileDraftDirty=!1}function ca(e){W();let t=new FormData(e),n={...A.profileDraft};G(e,`companyName`)&&(n.companyName=String(t.get(`companyName`)||``).trim()),G(e,`kennitala`)&&(n.kennitala=String(t.get(`kennitala`)||``).trim()),G(e,`contactEmail`)&&(n.contactEmail=String(t.get(`contactEmail`)||``).trim()),G(e,`billingEmail`)&&(n.billingEmail=String(t.get(`billingEmail`)||``).trim()),G(e,`contactName`)&&(n.contactName=String(t.get(`contactName`)||``).trim()),G(e,`phone`)&&(n.phone=String(t.get(`phone`)||``).trim()),G(e,`address`)&&(n.address=String(t.get(`address`)||``).trim()),G(e,`website`)&&(n.website=String(t.get(`website`)||``).trim()),G(e,`selectedPlan`)&&(n.selectedPlan=Dn(t.get(`selectedPlan`))||`basic`),G(e,`industry`)&&(n.industry=String(t.get(`industry`)||``)),G(e,`services`)&&(n.services=$t(t.get(`services`))),G(e,`includeKeywords`)&&(n.includeKeywords=$t(t.get(`includeKeywords`))),G(e,`excludeKeywords`)&&(n.excludeKeywords=$t(t.get(`excludeKeywords`))),G(e,`locations`)&&(n.locations=t.getAll(`locations`)),G(e,`baseLocation`)&&(n.baseLocation=String(t.get(`baseLocation`)||``)),G(e,`serviceAreas`)&&(n.serviceAreas=$t(t.get(`serviceAreas`))),G(e,`willingToTravel`)&&(n.willingToTravel=t.get(`willingToTravel`)===`on`),G(e,`nationalProjects`)&&(n.nationalProjects=t.get(`nationalProjects`)===`on`),G(e,`remoteProjects`)&&(n.remoteProjects=t.get(`remoteProjects`)===`on`),G(e,`minimumProjectValueForTravel`)&&(n.minimumProjectValueForTravel=String(t.get(`minimumProjectValueForTravel`)||``)),G(e,`minProjectValue`)&&(n.minProjectValue=String(t.get(`minProjectValue`)||``)),G(e,`maxProjectValue`)&&(n.maxProjectValue=String(t.get(`maxProjectValue`)||``)),G(e,`allowUnknownValue`)&&(n.allowUnknownValue=t.get(`allowUnknownValue`)===`on`),G(e,`reportFrequency`)&&(n.reportFrequency=String(t.get(`reportFrequency`)||`weekly`)),G(e,`reportDay`)&&(n.reportDay=String(t.get(`reportDay`)||`monday`)),G(e,`deadlineReminders`)&&(n.deadlineReminders=t.get(`deadlineReminders`)===`on`),G(e,`includeLowConfidence`)&&(n.includeLowConfidence=t.get(`includeLowConfidence`)===`on`),A.profileDraft=n,oa()}function G(e,t){return!!e.querySelector(`[name="${CSS.escape(t)}"]`)}function la(){return W(),{...A.profileDraft,companyName:String(A.profileDraft.companyName||``).trim(),kennitala:String(A.profileDraft.kennitala||``).trim(),contactEmail:String(A.profileDraft.contactEmail||``).trim(),billingEmail:String(A.profileDraft.billingEmail||``).trim(),contactName:String(A.profileDraft.contactName||``).trim(),phone:String(A.profileDraft.phone||``).trim(),address:String(A.profileDraft.address||``).trim(),website:String(A.profileDraft.website||``).trim(),selectedPlan:Dn(A.profileDraft.selectedPlan||A.pendingSignupPlan)||`basic`,industry:String(A.profileDraft.industry||``),services:E(A.profileDraft.services),includeKeywords:E(A.profileDraft.includeKeywords),excludeKeywords:E(A.profileDraft.excludeKeywords),locations:E(A.profileDraft.locations),baseLocation:String(A.profileDraft.baseLocation||``),serviceAreas:E(A.profileDraft.serviceAreas),willingToTravel:!!A.profileDraft.willingToTravel,nationalProjects:!!A.profileDraft.nationalProjects,remoteProjects:!!A.profileDraft.remoteProjects,minimumProjectValueForTravel:ea(A.profileDraft.minimumProjectValueForTravel),minProjectValue:ea(A.profileDraft.minProjectValue),maxProjectValue:ea(A.profileDraft.maxProjectValue)}}function ua(e,t){return String(e||``).toLowerCase().includes(String(t||``).toLowerCase())}function da(e){return[e.title,e.description,e.category,e.location,...e.keywords||[]].join(` `).toLowerCase()}var fa=`jarðvinna.gatnagerð.gatna- og stígagerð.gatna og stígagerð.stígagerð.lóðarframkvæmdir.lagnavinna.lagnir.fráveita.fráveitulagnir.vatnsveita.hitaveita.vatnslagnir.regnvatnslagnir.drenlagnir.endurnýjun lagna.brunnar.dælubrunnar.malbikun.gangstétt.gangstéttir.stígar.bílastæði.vegagerð.gröftur.fyllingar.grjóthleðsla.jarðvegsskipti.undirbygging.yfirborðsfrágangur.hellulögn.hellulagnir.kantsteinn.kantsteinar.landmótun.afvötnun.jarðvegsvinna.útiframkvæmdir.gatnaframkvæmdir`.split(`.`),pa=[`snjómokstur`,`snjóruðningur`,`hálkuvarnir`,`vetrarþjónusta`,`gangstéttir`,`stofnanalóðir`],ma=[`framkvæmdir`,`framkvæmd`,`útboð`,`verðfyrirspurn`,`tilboð`,`viðhald`,`verktaki`,`verk`],ha=[`innanhússfrágangur`,`innanhúss`,`smíði`,`smíðavinna`,`málun`,`gólfefni`,`innréttingar`,`raflagnir`,`pípulagnir`,`leikskóli`,`skóli`,`húsnæði`,`byggingarvinna`],ga=[`innanhússfrágangur`,`innanhúss`,`smíði`,`smíðavinna`,`málun`,`gólfefni`,`innréttingar`,`raflagnir`,`pípulagnir`,`byggingarvinna`],_a=[`for- og verkhönnun`,`verkhönnun`,`forhönnun`,`hönnun`,`ráðgjöf`,`verkfræðiráðgjöf`,`eftirlit`,`umsjón`,`verkefnastjórn`,`verkefnastjórnun`],va=[`hönnun`,`for- og verkhönnun`,`verkhönnun`,`forhönnun`,`ráðgjöf`,`verkfræðiráðgjöf`,`eftirlit`,`umsjón`,`verkefnastjórn`,`verkefnastjórnun`],ya=[`jarðvinna`,`jarðvegsvinna`,`gatnagerð`,`gatna- og stígagerð`,`stígagerð`,`vegagerð`,`lóðarframkvæmdir`,`gröftur`,`jarðvegsskipti`,`fyllingar`,`afvötnun`,`landmótun`,`yfirborðsfrágangur`,`malbikun`,`útiframkvæmdir`];function K(e){return D(e)}function q(e,t){let n=K(e);return t.some(e=>n.includes(K(e)))}function J(e){let t=K(e);return ma.some(e=>t===K(e))}function ba(e){let t=K(e);return fa.some(e=>t===K(e))?0:fa.some(e=>t.includes(K(e))||K(e).includes(t))?1:pa.some(e=>t===K(e))?2:J(e)?10:3}function xa(e){return[...e].sort((e,t)=>ba(e)-ba(t)||String(t).length-String(e).length||String(e).localeCompare(String(t)))}function Sa(e){let t=K(e);return fa.filter(e=>t.includes(K(e)))}function Ca(e){let t=K(e);return pa.filter(e=>t.includes(K(e)))}function wa(e,t){let n=Sa(t);if(!n.length||!e.some(J))return e;let r=e.filter(e=>!J(e));return[...new Set([...n,...r])]}function Ta(e={}){return q([e.industry,...Array.isArray(e.services)?e.services:[],...Array.isArray(e.includeKeywords)?e.includeKeywords:[]].filter(Boolean).join(` `),[...fa,...pa,`construction`,`contractor`,`verktaki`,`mannvirki`,`jarðtækni`])}function Ea(e={}){return q([...Array.isArray(e.services)?e.services:[],...Array.isArray(e.includeKeywords)?e.includeKeywords:[]].filter(Boolean).join(` `),pa)}function Da(e={}){return q([...Array.isArray(e.services)?e.services:[],...Array.isArray(e.includeKeywords)?e.includeKeywords:[]].filter(Boolean).join(` `),ga)}function Oa(e={}){return q([...Array.isArray(e.services)?e.services:[],...Array.isArray(e.includeKeywords)?e.includeKeywords:[]].filter(Boolean).join(` `),va)}function ka(e={}){return q([e.industry,...Array.isArray(e.services)?e.services:[],...Array.isArray(e.includeKeywords)?e.includeKeywords:[]].filter(Boolean).join(` `),ya)}function Aa(e,t,n,r){if(!Ta(e))return{isCivilProfile:!1,serviceHits:n,keywordHits:r,hasWeakOnlyFit:!1,hasIndoorMismatch:!1,hasConsultingMismatch:!1,hasSecondaryOnlyFit:!1,hasPromotedBroadFit:!1,hasWinterOnlyFit:!1};let i=da(t),a=q(i,fa),o=q(i,pa),s=Ea(e),c=o&&s,l=q(i,ha),u=Da(e),d=q(i,_a),f=Oa(e),p=Sa(i),m=c?Ca(i):[],h=n.length>0&&n.every(J),g=r.length>0&&r.every(J),ee=[...n,...r].some(e=>!J(e)),te=[...n,...r].some(J),_=!ee&&te&&a,ne=_||c?[...new Set([...n,..._?p:[],...m])]:n,v=a||c||ee,re=v&&_?wa(ne,i):ne.filter(e=>!J(e)),y=v&&_?wa(r,i):r.filter(e=>!J(e)),b=[...new Set([...re,...y].filter(e=>!J(e)))],x=!ka(e);return{isCivilProfile:!0,serviceHits:xa(re),keywordHits:xa(y),hasWeakOnlyFit:!a&&!c&&!ee&&(h||g),hasIndoorMismatch:l&&!a&&!u,hasConsultingMismatch:d&&!f,hasWinterOnlyFit:c&&!a,hasSecondaryOnlyFit:ee&&x&&b.length<=2&&p.length>=3,hasPromotedBroadFit:_}}function ja(e){let t=D(e.location);if(Ra(t)&&za(e))return!1;let n=D(`${e.title} ${e.description} ${e.location}`);return[`all iceland`,`iceland`,`island`].some(e=>t.includes(e))?!0:[`national`,`landsvist`,`nationwide`].some(e=>n.includes(e))}function Ma(e){return[...e.locations||[],...e.serviceAreas||[],e.baseLocation].filter(Boolean)}function Na(e,t){let n=Ma(e);if(!n.length)return!1;let r=ei(t);if(n.includes(`All Iceland`)){let e=D(La(t));return r===`IS`||e.includes(`iceland`)||e.includes(`island`)}if(n.includes(`Remote / Online`)&&La(t)===`Remote / Online`)return!0;if(!r||r!==`IS`&&n.some(e=>D(e).includes(`iceland`)))return!1;let i=D(La(t));return n.some(e=>{let t=D(e);return t?t===i||t===`reykjavik`&&[`reykjavik`,`capital area`,`hofudborgarsvaedid`].includes(i)||t===`capital area`&&[`reykjavik`,`capital area`,`hofudborgarsvaedid`].includes(i)?!0:i.includes(t)||t.includes(i):!1})}function Pa(e,t){return e?Na(e,t)?`local_match`:e.locations?.includes(`Remote / Online`)&&La(t)===`Remote / Online`?`remote_match`:ja(t)&&(Ia(t)||ei(t)===`IS`)?`national_match`:La(t)===`Remote / Online`&&e.remoteProjects?`remote_match`:Ia(t)&&(e.nationalProjects||e.willingToTravel)?`outside_area_possible`:`outside_area_low_confidence`:`outside_area_low_confidence`}function Fa(e,t){let n=Pa(e,t);return n===`local_match`?`Local match`:n===`national_match`?`National opportunity`:n===`remote_match`?`Remote opportunity`:n===`outside_area_possible`?`Outside base area but travel allowed`:n===`outside_area_low_confidence`?`Outside selected area; low-confidence location match`:null}function Ia(e){if(ei(e)===`IS`)return!0;let t=D(La(e));return[`iceland`,`island`,`all iceland`,`reykjavik`,`capital area`,`hofudborgarsvaedid`,`east iceland`,`west iceland`,`north iceland`,`south iceland`,`sudurnes`].some(e=>t.includes(e))}function La(e={}){let t=String(e.location||``).trim(),n=D(t);return t&&!Ra(n)?t:za(e)||t}function Ra(e){return!e||e===`unknown`||e===`all iceland`||e===`iceland`||e===`island`}function za(e={}){let t=e.rawPayload&&typeof e.rawPayload==`object`?e.rawPayload:{},n=D([e.title,e.description,e.buyer,t.buyer,t.extracted_buyer,t.source_name,t.extracted_location,t.location].filter(Boolean).join(` `));return n.includes(`reykjavik`)||n.includes(`reykjavikurborg`)||n.includes(`hofudborgarsvaedid`)?`Reykjavík / Höfuðborgarsvæðið`:``}function Ba(e,t){return t.estimatedValue?!(e.minProjectValue&&t.estimatedValue<e.minProjectValue||e.maxProjectValue&&t.estimatedValue>e.maxProjectValue):!!e.allowUnknownValue}function Va(e,t){let n=String(e.industry||``).toLowerCase(),r=String(t.category||``).toLowerCase();return r.includes(n)||n.includes(r)}function Ha(e,t){if(!e)return{...t,matchScore:0,matchLabel:`Weak match`,matchReasons:[],risks:[],nextSteps:[]};let n=da(t),r=0,i=[],a=[];Va(e,t)&&(r+=35,i.push(`Matches your ${e.industry} industry`));let o=Aa(e,t,(e.services||[]).filter(e=>ua(n,e)),(e.includeKeywords||[]).filter(e=>ua(n,e)));for(let e of o.serviceHits)r+=10,i.push(`Mentions your service: ${e}`);for(let e of o.keywordHits)r+=8,i.push(`Contains your keyword: ${e}`);let s=Pa(e,t),c=Fa(e,t);if(s===`local_match`)r+=22,i.push(c);else if(s===`national_match`)r+=16,i.push(c);else if(s===`remote_match`)r+=14,i.push(c);else if(s===`outside_area_possible`){let n=Number(e.minimumProjectValueForTravel||0),o=n&&t.estimatedValue&&Number(t.estimatedValue)<n;r+=o?-4:4,i.push(c),a.push(o?`Outside base area and below your preferred travel project value`:`Check travel cost, project size and delivery capacity`)}else r-=8,a.push(`Outside selected area; location match is low confidence`);o.hasWinterOnlyFit&&s===`local_match`&&(r+=12,i.push(`Local winter service fit`)),Ba(e,t)?(r+=10,t.estimatedValue&&i.push(`Project value is inside your preferred range`)):(r-=25,a.push(`Estimated project value is outside your preferred range`));let l=w(t.deadline);t.deadline?l>=0&&l<=30?(r+=8,i.push(`Deadline is coming up soon`)):l<0&&(r-=50,a.push(`Deadline has passed`)):a.push(xo(t));for(let t of e.excludeKeywords||[])ua(n,t)&&(r-=18,a.push(`Contains exclude keyword: ${t}`));return(t.requirements||[]).some(e=>ua(e,`certification`)||ua(e,`license`))&&a.push(`May require certification or license documentation`),t.difficulty===`high`&&a.push(`This appears to be a higher-complexity opportunity`),o.hasWeakOnlyFit&&(r=Math.min(r,40),a.push(`Only broad construction/procurement terms matched; verify fit`)),o.hasIndoorMismatch&&(r=Math.min(r-20,40),a.push(`Appears to be indoor/building finishing work outside your core civil services`)),o.hasConsultingMismatch&&(r=Math.min(r-30,35),a.push(`Appears to be design, consulting, supervision, or project management work outside your execution services`)),o.hasSecondaryOnlyFit&&(r=Math.min(r,84),a.push(`Secondary service match in a broader infrastructure tender; verify scope`)),o.hasPromotedBroadFit&&(r=Math.min(r,72),a.push(`Broad construction terms matched; verify the specific work type`)),o.hasWinterOnlyFit&&(r=Math.min(r,68),a.push(`Winter/snow service fit; verify capacity and scope`)),r=Math.max(0,Math.min(100,Math.round(r))),{...t,matchScore:r,matchLabel:Wa(r),matchReasons:i.slice(0,5),risks:[...new Set(a)].slice(0,4),nextSteps:[`Open the source documents`,`Confirm mandatory requirements`,`Check capacity and profitability`,`Prepare questions before the deadline`]}}function Ua(e){if(!A.profile||!Ta(A.profile))return e;let t=Ha(A.profile,e);return Number(t.matchScore||0)>=Number(e.matchScore||0)?e:{...e,matchScore:t.matchScore,matchLabel:t.matchLabel,matchReasons:t.matchReasons,risks:t.risks,nextSteps:t.nextSteps}}function Wa(e){return e>=85?`Strong match`:e>=65?`Good match`:e>=45?`Possible match`:`Weak match`}function Ga(){if(A.storedMatches.length)return A.storedMatches.filter(Al).filter(Ja).filter(Lr).filter(e=>!A.ignored.includes(e.id)).map(Ua).sort((e,t)=>t.matchScore-e.matchScore||w(e.deadline)-w(t.deadline));let e=A.profile||(A.user?null:Sn);return e?A.opportunities.filter(Al).map(t=>Ha(e,t)).filter(Ja).filter(Lr).filter(e=>!A.ignored.includes(e.id)).sort((e,t)=>t.matchScore-e.matchScore||w(e.deadline)-w(t.deadline)):[]}function Ka(){return A.storedMatches.filter(Al).filter(Ja).filter(Lr).filter(e=>!A.ignored.includes(e.id)).sort((e,t)=>t.matchScore-e.matchScore||w(e.deadline)-w(t.deadline))}function qa(){let e=A.profile||(A.user?null:Sn);return e?A.opportunities.filter(Al).map(t=>Ha(e,t)).filter(Ja).filter(Lr).filter(e=>!A.ignored.includes(e.id)).sort((e,t)=>io(e)-io(t)||t.matchScore-e.matchScore||w(e.deadline)-w(t.deadline)):[]}function Ja(e){return A.isAdmin&&A.filters.label===`all_opportunities`?!0:hl(e)}function Ya(e={}){return String(e.safetyStatus||e.safety_status||`auto_approved`)}function Xa(e){return[...Ka(),...qa()].find(t=>t.id===e)}function Za(){let e=Qa([`all_opportunities`,`needs_review`].includes(A.filters.label)?qa():Ka());if(A.filters.label===`recommended`){let t=e.filter(eo),n=e.filter(to);return ro(t.length?t:n)}return ro(e.filter($a))}function Qa(e){return e.filter(e=>{let t=A.filters.search.toLowerCase();return!(t&&!da(e).includes(t)||A.filters.category!==`all`&&e.category!==A.filters.category||A.filters.location!==`all`&&e.location!==A.filters.location||A.filters.type!==`all`&&e.type!==A.filters.type||A.filters.savedOnly&&!A.saved.includes(e.id))})}function $a(e){let t=A.filters.label;return t===`all`||t===`all_opportunities`?!0:t===`needs_review`?I(e.qualityStatus,e)===`needs_review`:t===`recommended`?eo(e):t===`strong`?e.matchLabel===`Strong match`||e.matchScore>=85:t===`possible`?[`Possible match`,`Weak match`].includes(e.matchLabel)||e.matchScore<65:e.matchLabel===t}function eo(e){return!no(e)||gl(e)?!1:e.matchScore>=85||e.matchLabel===`Strong match`?!0:!(I(e.qualityStatus,e)===`needs_review`||$r(z(e)))}function to(e){return!no(e)||gl(e)?!1:e.matchScore>=85||e.matchLabel===`Strong match`?!0:!(I(e.qualityStatus,e)===`needs_review`||$r(z(e)))}function no(e){return[`Strong match`,`Good match`,`Possible match`].includes(e.matchLabel)||e.matchScore>=45}function ro(e){return[...e].sort((e,t)=>io(e)-io(t)||t.matchScore-e.matchScore||w(e.deadline)-w(t.deadline))}function io(e){let t=L(e);if(t===`confirmed_tender`)return 0;if(t===`early_opportunity`)return 1;if(t===`market_signal`)return 2;if(t===`news_context`)return 8;if(t===`not_opportunity`)return 9;let n=I(e.qualityStatus,e);return n===`confirmed_tender`?0:n===`early_signal`?1:2}function ao({visibleCount:e,storedMatchCount:t,filteredStoredCount:n,availableCount:r,recommendedCount:i,strongCount:a,companyName:o}){let s=A.filters.label;return A.language===`is`?s===`all_opportunities`?`${r} tækifæri eru til í kerfinu. Sýni ${e} sýnileg tækifæri til yfirferðar.`:s===`needs_review`?`${r} tækifæri eru til í kerfinu. Sýni ${e} atriði sem þarf að staðfesta.`:s===`all`?`${t} tækifæri fundust sem gætu passað við ${o}. Sýni ${e}.`:s===`strong`?`${t} tækifæri fundust sem gætu passað við ${o}. Sýni ${e} sterkar samsvaranir.`:s===`recommended`?e?`${t} tækifæri fundust sem gætu passað við ${o}. Sýni ${e} ráðlögð eða möguleg tækifæri.`:a>0?`${a} sterkar samsvaranir eru til fyrir ${o}, en þær eru faldar af núverandi síum.`:n>0?`${n} tækifæri eru falin af gæðasíum. Notið Allar samsvaranir eða Þarfnast staðfestingar til að skoða þau.`:`Engar ráðlagðar samsvaranir fyrir ${o} enn. ${r} tækifæri eru til í kerfinu, en ekkert passar nógu sterkt við þennan prófíl.`:s===`possible`?`${t} tækifæri fundust sem gætu passað við ${o}. Sýni ${e} mögulegar eða veikar samsvaranir.`:`${t} tækifæri fundust sem gætu passað við ${o}. Sýni ${e} tækifæri.`:s===`all_opportunities`?`${r} opportunities are available in the system. Showing ${e} visible opportunities for inspection.`:s===`needs_review`?`${r} opportunities are available in the system. Showing ${e} needs-review opportunities.`:s===`all`?`${t} opportunities may fit ${o}. Showing all ${e}.`:s===`strong`?`${t} opportunities may fit ${o}. Showing ${e} strong matches.`:s===`recommended`?e?`${t} opportunities may fit ${o}. Showing ${e} recommended or possible matches.`:a>0?`${a} strong ${a===1?`match exists`:`matches exist`} for ${o}, but ${a===1?`it is`:`they are`} hidden by your current filters.`:n>0?`${n} ${n===1?`opportunity is`:`opportunities are`} hidden from Recommended by quality checks. Use All matches or Needs review to inspect them.`:`No recommended matches for ${o} yet. ${r} opportunities are available in the system, but none match this profile strongly enough.`:s===`possible`?`${t} opportunities may fit ${o}. Showing ${e} possible or weak matches.`:`${t} opportunities may fit ${o}. Showing ${e} ${s.toLowerCase()} opportunities.`}async function oo(){if(!l||!A.companyId){A.opportunityActions=[];return}try{let{data:e,error:t}=await l.from(`company_opportunity_actions`).select(`id, company_id, opportunity_id, action_type, note, created_at, updated_at`).eq(`company_id`,A.companyId);if(t)throw t;A.opportunityActions=e||[],A.saved=A.opportunityActions.filter(e=>[`saved`,`watched`].includes(e.action_type)).map(e=>e.opportunity_id),A.ignored=A.opportunityActions.filter(e=>e.action_type===`ignored`).map(e=>e.opportunity_id)}catch(e){console.error(`Failed to load company opportunity actions:`,e),A.opportunityActions=[],A.saved=[],A.ignored=[]}}async function so(t,n){if(!l||!A.companyId){(n===`saved`||n===`watched`)&&(A.saved=Array.from(new Set([...A.saved,t])),A.ignored=A.ignored.filter(e=>e!==t)),n===`ignored`&&(A.ignored=Array.from(new Set([...A.ignored,t])),A.saved=A.saved.filter(e=>e!==t)),Qi(e.saved,A.saved),Qi(e.ignored,A.ignored);return}let{error:r}=await l.from(`company_opportunity_actions`).upsert({company_id:A.companyId,opportunity_id:t,action_type:n,updated_at:new Date().toISOString()},{onConflict:`company_id,opportunity_id`});if(r)throw r;await oo()}async function co(t){if(!l||!A.companyId){A.saved=A.saved.filter(e=>e!==t),A.ignored=A.ignored.filter(e=>e!==t),Qi(e.saved,A.saved),Qi(e.ignored,A.ignored);return}let{error:n}=await l.from(`company_opportunity_actions`).delete().eq(`company_id`,A.companyId).eq(`opportunity_id`,t);if(n)throw n;await oo()}async function lo(e){let t=`Opportunity saved`;try{A.saved.includes(e)?(await co(e),t=`Removed from saved`):await so(e,`saved`),U(t,`success`),X()}catch(e){console.error(`Failed to update saved opportunity:`,e),U(`Could not update saved opportunity`,`error`)}}async function uo(e){try{await so(e,`ignored`),A.selectedOpportunityId===e&&(A.selectedOpportunityId=null),U(`Opportunity hidden`,`success`),X()}catch(e){console.error(`Failed to ignore opportunity:`,e),U(`Could not hide opportunity`,`error`)}}async function fo(e){try{await co(e),X()}catch(e){console.error(`Failed to unignore opportunity:`,e),U(`Could not restore opportunity`,`error`)}}function po(e){A.selectedOpportunityId=e,document.body.classList.add(`modal-open`),X()}function mo(){ho(),X()}function ho(){A.selectedOpportunityId=null,document.body.classList.remove(`modal-open`)}function go(){if(!A.selectedOpportunityId){document.body.classList.remove(`modal-open`);return}if(!Xa(A.selectedOpportunityId)){A.selectedOpportunityId=null,document.body.classList.remove(`modal-open`);return}document.body.classList.add(`modal-open`)}function _o(e){if(!e)return{label:$(vn),className:`deadline danger`};let t=w(e);return t===999?{label:$(vn),className:`deadline danger`}:{label:k(`daysLeft`,{count:t}),className:t<=14?`deadline danger`:`deadline`}}function vo(e){let t=String(e||``).trim().match(/^(\d{4}-\d{2}-\d{2})T(\d{2}):(\d{2})/);return t?`${dl(t[1])} kl. ${t[2]}:${t[3]}`:``}function yo(e){return e?Zt(e):$(vn)}function bo(e){return e?.deadlineAt?vo(e.deadlineAt):e?.deadline?dl(e.deadline):$(xo(e))}function xo(e){if(R(e)){let t=Br(e);return[`tender_awarded`,`awarded`,`already_tendered`,`announced`].includes(t)?`Tender appears already announced/awarded — verify source article.`:t===`upcoming_tender`?`Formal tender deadline not found yet — monitor source article.`:yn}return String(e?.rawPayload?.deadline_warning||``).trim()||vn}function So(e){if(!e?.deadline)return{label:$(xo(e)),className:`deadline danger`};let t=vo(e.deadlineAt);return t?{label:t,className:w(e.deadline)<=14?`deadline danger`:`deadline`}:_o(e.deadline)}function Y(e){return e?an(e,`ISK`):A.language===`is`?`Ekki gefið upp`:`Value unknown`}function Co(){return[...new Set(A.opportunities.map(e=>e.category))].sort()}function wo(){return[...new Set(A.opportunities.map(e=>e.location))].sort()}function To(){return[...new Set(A.opportunities.map(e=>e.type))].sort()}function Eo(e){return e===`Strong match`?`badge strong`:e===`Good match`?`badge good`:e===`Possible match`?`badge possible`:`badge weak`}function X(){let e=document.getElementById(`app`),t=Tn(A.route),n=``;if(n=A.isBooting||!A.authLoaded||!A.profileLoaded||!A.adminLoaded?Ao():t===`/`?Vs():t===`/login`?qo():t===`/signup`?$o():t===`/forgot-password`?Jo():t===`/reset-password`?Yo():t===`/accept-invite`?Xo():t===`/onboarding`?Hs():t===`/dashboard`?A.user?Zs():V():t===`/report`?A.user?Yc():V():t===`/pricing`?Ql():t===`/trial`?$l():t===`/privacy`?Fo():t===`/terms`?Io():t===`/data-sources`?Lo():t===`/cookies`?Ro():t===`/security`?zo():t===`/contact`?Bo():t===`/settings`?A.user?eu():V():t===`/admin`?A.user?A.isAdmin?_c():wi():V():Vs(),e.innerHTML=n,A.selectedOpportunityId){let t=Xa(A.selectedOpportunityId);t?(document.body.classList.add(`modal-open`),e.insertAdjacentHTML(`beforeend`,gc(t))):go()}else go()}function Do(e){let t=window.scrollX,n=window.scrollY,r=Oo(e),i=typeof e.selectionStart==`number`?e.selectionStart:null,a=typeof e.selectionEnd==`number`?e.selectionEnd:null;X(),requestAnimationFrame(()=>{if(window.scrollTo(t,n),!r)return;let e=document.querySelector(r);e&&(e.focus({preventScroll:!0}),i!==null&&a!==null&&typeof e.setSelectionRange==`function`&&[`text`,`search`,`email`,`url`,`tel`,`password`,``].includes(e.type||``)&&e.setSelectionRange(i,a))})}function Oo(e){return e?.dataset?e.dataset.adminFilter?`[data-admin-filter="${ko(e.dataset.adminFilter)}"]`:e.dataset.adminCompanyFilter?`[data-admin-company-filter="${ko(e.dataset.adminCompanyFilter)}"]`:``:``}function ko(e){return window.CSS?.escape?window.CSS.escape(String(e)):String(e).replace(/["\\]/g,`\\$&`)}function Ao(){return Z(`
    <div class="app-loader">
      <div class="loader-mark" aria-label="${O(k(`loadingLabel`))}">
        <span></span>
      </div>
    </div>
  `)}function Z(e){let t=!!A.user,n=!!A.profile,r=jo(t,n),i=Uo(t,n);return`
    <header class="site-header ${A.isMobileMenuOpen?`is-menu-open`:``}">
      <div class="header-top">
        <button class="brand" data-action="go" data-href="/">
          <img class="brand-logo" src="./logo.png" alt="VerkRadar" />
        </button>
        <div class="mobile-header-actions">
          <button class="language-toggle mobile-header-language-toggle" type="button" data-action="toggle-language" aria-label="Switch language">
            <span class="${A.language===`is`?`active`:``}">IS</span>
            <span class="${A.language===`en`?`active`:``}">EN</span>
          </button>
          <button
            class="menu-toggle"
            type="button"
            data-action="toggle-mobile-menu"
            aria-label="${A.isMobileMenuOpen?k(`closeMenu`):k(`openMenu`)}"
            aria-expanded="${A.isMobileMenuOpen?`true`:`false`}"
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
          ${r.map(([e,t])=>t.startsWith(`#`)?`<button data-action="scroll-to" data-target="${t.slice(1)}">${e}</button>`:`<button data-action="go" data-href="${t}" ${A.route===t?`class="active"`:``}>${e}</button>`).join(``)}
        </nav>
        <div class="header-actions">
          <button class="language-toggle" type="button" data-action="toggle-language" aria-label="Switch language">
            <span class="${A.language===`is`?`active`:``}">IS</span>
            <span class="${A.language===`en`?`active`:``}">EN</span>
          </button>
          ${t?``:`<button class="btn btn-secondary header-login-btn btn-login" data-action="go" data-href="/login">${k(`login`)}</button>`}
          ${i?`<button class="btn btn-primary" data-action="go" data-href="${i.href}">${i.label}</button>`:``}
          ${t&&!A.isMobileMenuOpen?Wo():``}
        </div>
      </div>
      ${Vo(r,i,t)}
    </header>
    <main>${e}</main>
    ${Mo()}
    ${A.toast?`
      <div class="toast toast-${A.toast.type}">
        <span class="toast-dot"></span>
        <span>${O(A.toast.message)}</span>
      </div>
    `:``}
  `}function jo(e=!!A.user,t=!!A.profile){let n=e?t?[[k(`navDashboard`),`/dashboard`],[k(`navReport`),`/report`],[k(`navSettings`),`/settings`]]:[[k(`setupCompany`),`/onboarding`],[k(`navSettings`),`/settings`]]:[[k(`navHowItWorks`),`#how-it-works`],[k(`navSampleReport`),`#sample-report`],[k(`navPricing`),`/pricing`]];return e&&A.isAdmin&&n.push([`Admin`,`/admin`]),n}function Mo(){let e=[[k(`privacyPolicy`),`/privacy`],[k(`termsOfService`),`/terms`],[k(`dataSources`),`/data-sources`],[k(`security`),`/security`],[k(`contact`),`/contact`]];return`
    <footer class="site-footer">
      <div>
        <strong>VerkRadar</strong>
        <p>${O(k(`footerText`))}</p>
      </div>
      <nav aria-label="Legal and trust pages">
        ${e.map(([e,t])=>`<button type="button" data-action="go" data-href="${t}">${e}</button>`).join(``)}
      </nav>
    </footer>
  `}function No(e){return s(e,A.language)}function Po(e){let t=No(e);return Z(ct({language:A.language,escapeHtml:O,eyebrow:t.eyebrow,title:t.title,intro:t.intro,sections:t.sections}))}function Fo(){return Po(`privacy`)}function Io(){return Po(`terms`)}function Lo(){return Po(`data`)}function Ro(){return Fo()}function zo(){return Po(`security`)}function Bo(){return Po(`contact`)}function Vo(e,t,n){return`
    <nav class="mobile-menu-panel" id="mobile-menu">
      <div class="mobile-menu-scroll">
      <div class="mobile-menu-links">
        ${e.map(([e,t])=>t.startsWith(`#`)?`<button type="button" data-action="mobile-scroll-to" data-target="${t.slice(1)}">${e}</button>`:`<button type="button" data-action="mobile-nav" data-href="${t}">${e}</button>`).join(``)}
      </div>
      ${Ho(t,n)}
      </div>
    </nav>
  `}function Ho(e,t){if(!t)return`
      <div class="mobile-account-section">
        ${e?`<button class="btn btn-primary mobile-cta" type="button" data-action="mobile-nav" data-href="${e.href}">${e.label}</button>`:``}
        <button class="btn btn-secondary" type="button" data-action="mobile-nav" data-href="/login">${k(`login`)}</button>
      </div>
    `;let n=A.profile?.companyName||k(`noCompanyProfile`),r=A.user?.email||``;return`
    <div class="mobile-account-section">
      <div class="mobile-account-header">
        <span class="profile-avatar">${O(Go(n,r))}</span>
        <div>
          <strong>${O(n)}</strong>
          <small>${O(r)}</small>
        </div>
      </div>
      <div class="mobile-account-actions">
        ${A.profile?`<button type="button" data-action="mobile-nav" data-href="/dashboard">${k(`navDashboard`)}</button>
             <button type="button" data-action="mobile-nav" data-href="/settings">${k(`navSettings`)}</button>`:`<button type="button" data-action="mobile-nav" data-href="/onboarding">${k(`setupCompany`)}</button>
             <button type="button" data-action="mobile-nav" data-href="/settings">${k(`navSettings`)}</button>`}
        <button type="button" class="mobile-logout" data-action="logout">${k(`logout`)}</button>
      </div>
    </div>
  `}function Uo(e,t){return e?t?null:{href:`/onboarding`,label:k(`createProfile`)}:{href:`/trial`,label:k(`getStarted`)}}function Wo(){let e=A.profile?.companyName||k(`noCompanyProfile`),t=A.user?.email||``,n=Go(e,t);return`
    <div class="profile-menu">
      <button type="button" class="profile-pill" data-action="toggle-profile-menu" aria-haspopup="menu" aria-expanded="${A.profileMenuOpen?`true`:`false`}">
        <span class="profile-avatar">${O(n)}</span>
        <span class="profile-name">${O(e)}</span>
        <span class="profile-chevron" aria-hidden="true"></span>
      </button>

      ${A.profileMenuOpen&&!A.isMobileMenuOpen&&!Wn()?`
        <div class="profile-dropdown" role="menu">
          <div class="profile-dropdown-header">
            <strong>${O(e)}</strong>
            <small>${O(t)}</small>
          </div>
          <div class="profile-dropdown-divider"></div>
          ${A.profile?`
            <button type="button" data-action="go" data-href="/dashboard" role="menuitem">${k(`navDashboard`)}</button>
            <button type="button" data-action="go" data-href="/settings" role="menuitem">${k(`navSettings`)}</button>
            ${A.isAdmin?`<button type="button" data-action="go" data-href="/admin" role="menuitem">Admin</button>`:``}
          `:`
            <button type="button" data-action="go" data-href="/onboarding" role="menuitem">${k(`createProfile`)}</button>
            ${A.isAdmin?`<button type="button" data-action="go" data-href="/admin" role="menuitem">Admin</button>`:``}
          `}
          <div class="profile-dropdown-divider"></div>
          <button type="button" class="danger" data-action="logout" role="menuitem">${k(`logout`)}</button>
        </div>
      `:``}
    </div>
  `}function Go(e,t){return(e&&![`No company profile`,k(`noCompanyProfile`)].includes(e)?e:t||`VR`).split(/[^a-zA-Z0-9áéíóúýþæöðÁÉÍÓÚÝÞÆÖÐ]+/).filter(Boolean).slice(0,2).map(e=>e[0]).join(``).toUpperCase()||`VR`}function Ko(e,t){return Z(`
    <section class="empty-state">
      <h1>${O(e)}</h1>
      <p>${O(t)}</p>
      <button class="btn btn-primary" data-action="go" data-href="/onboarding">${O(k(`createProfile`))}</button>
      <button class="btn btn-secondary" data-action="load-demo">${O(k(`loadDemoCompany`))}</button>
    </section>
  `)}function qo(){return A.user?Ko(A.language===`is`?`Þú ert þegar skráð(ur) inn`:`Already logged in`,A.language===`is`?`Opnaðu mælaborðið eða breyttu fyrirtækjaprófílnum.`:`Open your dashboard or edit your company profile.`):Z(We({t:k,escapeHtml:O,authForm:A.authForm,authSubmitting:A.authSubmitting,authMessage:A.authMessage,signupHref:A.pendingInviteToken?j(`/signup`):`/trial`,signupLabel:A.pendingInviteToken?k(`createAccount`):k(`createFreeDemoProfile`),forgotPasswordHref:j(`/forgot-password`)}))}function Jo(){return A.user?Ko(A.language===`is`?`Þú ert þegar skráð(ur) inn`:`Already logged in`,A.language===`is`?`Opnaðu mælaborðið eða breyttu fyrirtækjaprófílnum.`:`Open your dashboard or edit your company profile.`):Z(Ge({t:k,escapeHtml:O,authForm:A.authForm,authSubmitting:A.authSubmitting,authMessage:A.authMessage}))}function Yo(){return Z(Ke({t:k,escapeHtml:O,authForm:A.authForm,authSubmitting:A.authSubmitting,authMessage:A.authMessage}))}function Xo(){let e=g(A.route),t=A.pendingInviteToken||(A.invitePreviewErrorToken===e?``:e);return t&&t!==A.pendingInviteToken&&A.invitePreviewErrorToken!==t&&(A.pendingInviteToken=re(t)),Z(Ve({escapeHtml:O,invite:A.invitePreview,loading:A.invitePreviewLoading,error:A.invitePreviewError,debugInfo:A.invitePreviewDebug,showDebug:A.isAdmin||[`localhost`,`127.0.0.1`].includes(window.location.hostname),user:A.user,accepting:A.inviteAccepting,signupHref:j(`/signup`),loginHref:j(`/login`),language:A.language}))}async function Zo(){let e=A.pendingInviteToken||g(A.route);if(!(!e||A.invitePreviewLoading)&&!(A.invitePreview?.token===e||A.invitePreviewErrorToken===e)){A.pendingInviteToken=re(e),A.invitePreviewLoading=!0,A.invitePreviewError=null,X();try{let t=await x(e);if(t.status&&t.status!==`valid`){let e=Error(`Invite is not valid.`);throw e.details=t,e}A.invitePreview={...t,token:e},A.authForm.email=t.invited_email||t.email||A.authForm.email}catch(t){console.error(`Failed to preview company invite:`,t),t?.details?.diagnostics&&console.warn(`Invite preview diagnostics:`,t.details.diagnostics),A.invitePreview=null,A.invitePreviewDebug=t?.details?.diagnostics||null,y(),A.pendingInviteToken=``,A.invitePreviewErrorToken=e,A.invitePreviewError=A.language===`is`?`Aðgangsboðið fannst ekki, er útrunnið eða hefur verið afturkallað.`:`The invite was not found, has expired, or has been revoked.`}finally{A.invitePreviewLoading=!1,X()}}}async function Qo(){let e=g(A.route),t=v(),n=e||A.pendingInviteToken||t,r=e?`url`:A.pendingInviteToken||t?`localStorage`:`missing`;if(n){if(!A.user){M(j(`/login`));return}A.inviteAccepting=!0,A.invitePreviewError=null,X();try{await S(n),y(),A.pendingInviteToken=``,A.invitePreview=null,A.invitePreviewError=null,await ki({overwriteDraft:!0}),M(`/dashboard`)}catch(e){console.error(`Failed to accept company invite:`,e);let t=e?.details?.invited_email||A.invitePreview?.invited_email||A.invitePreview?.email||``;A.invitePreviewDebug={...A.invitePreviewDebug||{},...e?.details?.diagnostics||{},token_source:r,user_email:A.user?.email||``,invited_email:t,accept_error_reason:e?.details?.code||e?.details?.diagnostics?.accept_error_reason||errorMessage(e)},console.warn(`Invite accept diagnostics:`,A.invitePreviewDebug),A.invitePreviewError=e?.details?.code===`email_mismatch`&&t?A.language===`is`?`Þessi aðgangsboð var sent á ${t}. Skráðu þig inn með því netfangi.`:`This invite was sent to ${t}. Log in with that email address.`:H(e)}finally{A.inviteAccepting=!1,X()}}}function $o(){if(A.user){let e=Kn();return setTimeout(()=>M(e),0),Z(`
      <section class="empty-state">
        <h1>${O(k(`alreadyLoggedInTitle`))}</h1>
        <p>${O(k(`alreadyLoggedInText`))}</p>
      </section>
    `)}return Z(qe({t:k,escapeHtml:O,authForm:A.authForm,authSubmitting:A.authSubmitting,authMessage:A.authMessage,loginHref:j(`/login`),inviteEmail:A.invitePreview?.invited_email||A.invitePreview?.email||``,isInviteSignup:!!(A.pendingInviteToken&&(A.invitePreview?.invited_email||A.invitePreview?.email))}))}function es(){if(!A.importLoading&&!A.importStatus)return``;if(A.importLoading)return`<section class="import-panel"><strong>Importing TED notices...</strong><p>Fetching recent TED notices and refreshing matches.</p></section>`;let e=A.importStatus||{},t=Array.isArray(e.errors)?e.errors:[],n=A.importedTedOpportunities||[];return`
    <section class="import-panel">
      ${A.importStatus?`
        <div class="import-stats">
          <span><strong>${Number(e.fetched||0)}</strong> fetched</span>
          <span><strong>${Number(e.inserted||0)}</strong> inserted</span>
          <span><strong>${Number(e.updated||0)}</strong> updated</span>
          <span><strong>${Number(e.skipped||0)}</strong> skipped</span>
          <span><strong>${Number(e.matched||0)}</strong> matches</span>
          <span><strong>${Number(e.reports_generated||0)}</strong> reports</span>
        </div>
        ${t.length?`<ul class="risk-list">${t.map(e=>`<li>${O(e)}</li>`).join(``)}</ul>`:`<p>TED import completed.</p>`}
        ${t.length?``:`
          <div class="import-result-head">
            <h3>Newest imported TED opportunities</h3>
            <button class="btn btn-secondary" type="button" data-action="go" data-href="/dashboard">View imported opportunities on dashboard</button>
          </div>
          ${n.length?`
            <div class="imported-opportunities">
              ${n.map(ns).join(``)}
            </div>
          `:`<div class="empty-card">No imported TED opportunities were returned by the latest-results query.</div>`}
        `}
      `:``}
    </section>
  `}function ts(){if(!A.connectorImportLoading&&!A.connectorTestingSourceId&&!A.connectorImportStatus)return``;if(A.connectorImportLoading||A.connectorTestingSourceId)return`<section class="import-panel"><strong>Running automatic source imports...</strong><p>Fetching enabled source connectors in a limited batch. Refresh matches separately after imports finish.</p></section>`;let e=A.connectorImportStatus||{},t=Array.isArray(e.errors)?e.errors:[],n=Array.isArray(e.failedSources)?e.failedSources:[],r=Array.isArray(e.timedOutSources)?e.timedOutSources:[],i=t.length||n.length||r.length,a=Number.isFinite(Number(e.sources_processed))?`<p>${Number(e.sources_processed||0)} source${Number(e.sources_processed||0)===1?``:`s`} processed${Number(e.sources_remaining||0)?` · ${Number(e.sources_remaining||0)} remaining for next run`:``}.</p>`:``;return`
    <section class="import-panel">
      <div class="import-stats">
        <span><strong>${Number(e.fetched||0)}</strong> fetched</span>
        <span><strong>${Number(e.inserted||0)}</strong> inserted</span>
        <span><strong>${Number(e.updated||0)}</strong> updated</span>
        <span><strong>${Number(e.skipped||0)}</strong> skipped</span>
        <span><strong>${Number(e.matched||0)}</strong> matches</span>
        <span><strong>${Number(e.reports_generated||0)}</strong> reports</span>
      </div>
      ${e.message?`<p>${O(e.message)}</p>`:a}
      ${e.matching_skipped?`<p>Matching was skipped for this batch to stay within Edge Function CPU limits. Refresh company matches from Admin after imports finish.</p>`:``}
      ${e.reports_skipped?`<p>Report generation was skipped for this batch.</p>`:``}
      ${n.length?`
        <div class="import-failure-list">
          <h3>${n.length} source${n.length===1?``:`s`} failed</h3>
          ${n.map(e=>`
            <div class="import-failure-row">
              <strong>${O(e.source||`Unknown source`)}</strong>
              <p>${O(e.message||e.error||`Unknown source import error`)}</p>
              ${e.endpoint_url?`<small>${O(e.endpoint_url)}</small>`:``}
            </div>
          `).join(``)}
        </div>
      `:``}
      ${r.length?`
        <div class="import-failure-list">
          <h3>${r.length} source${r.length===1?``:`s`} timed out or were skipped</h3>
          ${r.map(e=>`
            <div class="import-failure-row">
              <strong>${O(e.source||`Unknown source`)}</strong>
              <p>${O(e.message||e.reason||`Skipped because the source import was close to the runtime limit`)}</p>
              ${e.endpoint_url?`<small>${O(e.endpoint_url)}</small>`:``}
            </div>
          `).join(``)}
        </div>
      `:``}
      ${t.length?`<ul class="risk-list">${t.map(e=>`<li>${O(e)}</li>`).join(``)}</ul>`:``}
      ${i?`<p>Automatic source import completed with source-level failures. Successful sources were still imported.</p>`:`<p>Automatic source import completed.</p>`}
    </section>
  `}function ns(e){let t=e.url&&e.url!==`#`,n=A.adminUpdatingId===e.id,r=A.adminDeletingId===e.id;return`
    <div class="imported-opportunity-row">
      <div class="imported-opportunity-main">
        <h4>${O(e.title)}</h4>
        <span class="source-pill language-pill">Original language</span>
        <p>${O(Rl(e))}</p>
      </div>
      <dl>
        <div>
          <dt>Country / location</dt>
          <dd>${O([e.countryCode,e.location].filter(Boolean).join(` / `)||`Unknown`)}</dd>
        </div>
        <div>
          <dt>Deadline</dt>
          <dd>${O(Zt(e.deadline))}</dd>
        </div>
        <div>
          <dt>URL</dt>
          <dd>${t?`<a href="${O(e.url)}" target="_blank" rel="noreferrer">Open TED</a>`:`No URL`}</dd>
        </div>
        <div>
          <dt>Status</dt>
          <dd>${O(e.status||`Unknown`)}</dd>
        </div>
        <div>
          <dt>Imported source</dt>
          <dd>${O(e.source||`Unknown`)}</dd>
        </div>
        <div>
          <dt>External ID</dt>
          <dd>${O(e.externalId||`Unknown`)}</dd>
        </div>
      </dl>
      <div class="imported-opportunity-actions">
        <button class="btn btn-secondary" type="button" data-action="hide-imported-opportunity" data-id="${O(e.id)}" ${n||e.status===`hidden`?`disabled`:``}>
          ${n?`Updating...`:`Hide`}
        </button>
        <button class="btn btn-secondary" type="button" data-action="mark-imported-relevant" data-id="${O(e.id)}" ${n||e.status===`open`?`disabled`:``}>
          ${n?`Updating...`:`Mark relevant`}
        </button>
        <button class="btn btn-ghost" type="button" data-action="delete-opportunity" data-id="${O(e.id)}" ${r?`disabled`:``}>
          ${r?`Deleting...`:`Delete`}
        </button>
      </div>
    </div>
  `}function rs(){return(A.importRuns||[])[0]||null}function is(e){let t=String(e||``).toLowerCase();return[`success`,`completed`,`complete`,`connected`].includes(t)?`is-success`:[`running`,`started`,`pending`,`planned`].includes(t)?`is-running`:[`error`,`failed`,`failure`].includes(t)?`is-error`:``}function as(){let e=rs();return A.importRunsLoading&&!e?`
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
        <span class="status-pill ${is(e.status)}">${O(e.status||`unknown`)}</span>
      </div>
      <div class="ops-metrics">
        <div><span>Type</span><strong>${O(e.run_type||`ted-import`)}</strong></div>
        <div><span>Mode</span><strong>${O(e.import_mode||`unknown`)}</strong></div>
        <div><span>Fetched</span><strong>${Number(e.fetched||0)}</strong></div>
        <div><span>Inserted</span><strong>${Number(e.inserted||0)}</strong></div>
        <div><span>Updated</span><strong>${Number(e.updated||0)}</strong></div>
        <div><span>Skipped</span><strong>${Number(e.skipped||0)}</strong></div>
        <div><span>Matched</span><strong>${Number(e.matched||0)}</strong></div>
        <div><span>Reports</span><strong>${Number(e.reports_generated||0)}</strong></div>
        <div><span>Started</span><strong>${O(T(e.started_at))}</strong></div>
        <div><span>Finished</span><strong>${O(T(e.finished_at))}</strong></div>
      </div>
      ${e.error?`<div class="admin-message is-error">${O(e.error)}</div>`:``}
      ${ds(e)}
    </section>
  `:`
      <section class="ops-card automation-status-card">
        <div class="card-header">
          <div>
            <h2>Automation status</h2>
            <p>No automation runs yet.</p>
          </div>
        </div>
        ${A.importRunsError?`<div class="admin-message is-error">${O(A.importRunsError)}</div>`:``}
      </section>
    `}function os(){let e=window.VERKRADAR_SUPABASE_URL||`https://asojxjbsgqbfpbepojzh.supabase.co`,t=String(e).match(/^https:\/\/([^.]+)\.supabase\.co/i);return t?`https://supabase.com/dashboard/project/${t[1]}/functions/import-ted/logs`:``}function ss(){let e=os();return`
    <section class="ops-card">
      <div class="card-header">
        <div>
          <h2>Automation actions</h2>
          <p>Run the pipeline manually or refresh the operations view.</p>
        </div>
      </div>
      <div class="automation-actions">
        <button class="btn btn-primary" type="button" data-action="import-ted" ${A.importLoading?`disabled`:``}>
          ${A.importLoading?`Running TED import...`:`Run TED import now`}
        </button>
        <button class="btn btn-secondary" type="button" data-action="import-source-connectors" ${A.connectorImportLoading?`disabled`:``}>
          ${A.connectorImportLoading?`Running source imports...`:`Run automatic source imports now`}
        </button>
        <button class="btn btn-secondary" type="button" data-action="refresh-admin-status" ${A.importRunsLoading||A.adminReportsLoading?`disabled`:``}>
          ${A.importRunsLoading||A.adminReportsLoading?`Refreshing...`:`Refresh status`}
        </button>
        ${e?`<a class="btn btn-secondary" href="${O(e)}" target="_blank" rel="noreferrer">View Edge Function logs</a>`:``}
      </div>
      <label class="import-mode-control">
        Import mode
        <select data-import-mode ${A.importLoading?`disabled`:``}>
          <option value="nordic" ${A.tedImportMode===`nordic`?`selected`:``}>Nordic only</option>
          <option value="iceland" ${A.tedImportMode===`iceland`?`selected`:``}>Iceland only</option>
          <option value="eu-broad" ${A.tedImportMode===`eu-broad`?`selected`:``}>EU broad test</option>
        </select>
      </label>
      ${es()}
      ${ts()}
    </section>
  `}function cs(){let e=A.importRuns||[];return`
    <section class="ops-card">
      <div class="card-header">
        <div>
          <h2>Latest import runs</h2>
          <p>Last ${e.length||0} recorded automation runs.</p>
        </div>
      </div>
      ${A.importRunsError?`<div class="admin-message is-error">${O(A.importRunsError)}</div>`:``}
      ${A.importRunsLoading&&!e.length?`<div class="empty-card">Loading import runs...</div>`:e.length?`
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
              ${e.map(ls).join(``)}
            </tbody>
          </table>
        </div>
      `:`<div class="empty-card">No automation runs yet.</div>`}
    </section>
  `}function ls(e){let t=ds(e,{compact:!0});return`
    <tr>
      <td>${O(T(e.started_at||e.finished_at))}</td>
      <td>${O(e.run_type||`ted-import`)}</td>
      <td><span class="status-pill ${is(e.status)}">${O(e.status||`unknown`)}</span></td>
      <td>${Number(e.fetched||0)}</td>
      <td>${Number(e.inserted||0)}</td>
      <td>${Number(e.updated||0)}</td>
      <td>${Number(e.skipped||0)}</td>
      <td>${Number(e.matched||0)}</td>
      <td>${Number(e.reports_generated||0)}</td>
      <td>${e.error?O(e.error):``}</td>
    </tr>
    ${t?`
      <tr class="import-run-debug-row">
        <td colspan="10">${t}</td>
      </tr>
    `:``}
  `}function us(e){let t=e?.details;if(!t)return{};if(typeof t==`string`)try{return JSON.parse(t)||{}}catch{return{}}return typeof t==`object`?t:{}}function ds(e,t={}){let n=us(e),r=n.skip_reasons&&typeof n.skip_reasons==`object`?n.skip_reasons:{},i=Array.isArray(n.skipped_samples)?n.skipped_samples:[],a=Array.isArray(n.per_source)?n.per_source:[],o=Object.entries(r).filter(([,e])=>Number(e)>0).sort((e,t)=>Number(t[1])-Number(e[1])).slice(0,5);return!o.length&&!i.length&&!a.length?``:`
    <div class="import-debug ${t.compact?`is-compact`:``}">
      <div class="import-debug-header">
        <strong>Skip diagnostics</strong>
        <span>${Number(e.skipped||0)} skipped · ${Number(n.connectors_checked||a.length||0)} connector${Number(n.connectors_checked||a.length||0)===1?``:`s`}</span>
      </div>
      ${a.length?`
        <div class="import-per-source">
          ${a.slice(0,8).map(e=>`
            <div>
              <strong>${O(e.source_name||`Unknown source`)}</strong>
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
            <span><strong>${Number(t)}</strong> ${O(fs(e))}</span>
          `).join(``)}
        </div>
      `:``}
      ${i.length?`
        <div class="import-skip-samples">
          ${i.slice(0,10).map(e=>`
            <div>
              <strong>${O(e.source_name||e.source||`Unknown source`)}</strong>
              <span>${O(e.title||`Untitled item`)}</span>
              <em>${O(fs(e.reason||`skipped`))}${e.matchedKeyword?`: ${O(e.matchedKeyword)}`:``}${e.final_quality_status?` · ${O(ac(e.final_quality_status))}`:``}</em>
            </div>
          `).join(``)}
        </div>
      `:``}
    </div>
  `}function fs(e){return{missing_title:`missing title`,missing_url:`missing URL`,duplicate_existing_opportunity:`duplicate existing opportunity`,no_include_keyword_match:`no include keyword match`,matched_exclude_keyword:`matched exclude keyword`,low_quality_needs_review:`low quality needs review`,unsupported_connector:`unsupported connector`,parse_failed:`parse failed`,fetch_failed:`fetch failed`}[e]||String(e||`skipped`).replaceAll(`_`,` `)}function ps(){let e=A.importedTedOpportunities||[];return`
    <section class="ops-card">
      <div class="card-header">
        <div>
          <h2>Latest TED opportunities</h2>
          <p>Newest imported EU TED rows for review.</p>
        </div>
      </div>
      ${A.importedTedOpportunitiesError?`<div class="admin-message is-error">${O(A.importedTedOpportunitiesError)}</div>`:``}
      ${A.importedTedOpportunitiesLoading&&!e.length?`<div class="empty-card">Loading TED opportunities...</div>`:e.length?`
        <div class="imported-opportunities">
          ${e.map(ns).join(``)}
        </div>
      `:`<div class="empty-card">No TED opportunities loaded yet.</div>`}
    </section>
  `}function ms(){let e=A.adminReports||[];return`
    <section class="ops-card">
      <div class="card-header">
        <div>
          <h2>Latest reports generated</h2>
          <p>Newest saved weekly report records.</p>
        </div>
      </div>
      ${A.adminReportsError?`<div class="admin-message is-error">${O(A.adminReportsError)}</div>`:``}
      ${A.adminReportsLoading&&!e.length?`<div class="empty-card">Loading reports...</div>`:e.length?`
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
              ${e.map(Ss).join(``)}
            </tbody>
          </table>
        </div>
      `:`<div class="empty-card">No generated reports yet.</div>`}
      ${A.selectedAdminReportId?Cs():``}
    </section>
  `}function hs(e){return{eu_ted:`EU TED`,ted:`EU TED`,api:`EU TED`,utbodsvefur:`Útboðsvefur`,municipal_website:`Municipal websites`,public_institution_page:`Public institution pages`,private_manual:`Private/manual leads`,manual:`Private/manual leads`,tender_portal:`Tender portals`}[e]||e||`Unknown`}function gs(e){return{ted_api:`TED API`,rss_feed:`RSS feed`,wordpress_rest:`WordPress REST`,official_api:`Official API`,page_monitor_allowed:`Allowed page monitor`,manual_fallback:`Manual fallback`,planned:`Planned`,permission_required:`Permission required`}[e]||e||`Planned`}function _s(e=[]){return e.reduce((e,t)=>{let n=t.raw_payload&&typeof t.raw_payload==`object`?t.raw_payload:{},r=I(n.quality_status||n.qualityStatus,t);return e.active+=1,r===`confirmed_tender`?e.confirmed+=1:r===`early_signal`?e.early+=1:e.needsReview+=1,e},{active:0,confirmed:0,early:0,needsReview:0})}function vs(e){let t=e.source_status||{},n=e.source_connectors||{},r=String(n.status||t.status||``).toLowerCase(),i=String(n.connector_type||``).toLowerCase();return r.includes(`error`)?{label:`Error`,className:`is-error`,tone:`error`}:r===`permission_required`||i===`permission_required`?{label:`Permission required`,className:`is-permission`,tone:`planned`}:n.enabled&&[`connected`,`success`,`completed`,`complete`].includes(r)||n.enabled&&[`rss_feed`,`wordpress_rest`,`ted_api`].includes(i)?{label:`Connected`,className:`is-success`,tone:`connected`}:r===`planned`||i===`planned`?{label:`Planned`,className:`is-planned`,tone:`planned`}:{label:`Disabled`,className:`is-disabled`,tone:`disabled`}}function ys(){let e=A.sourceCoverage||[];return`
    <section class="ops-card">
      <div class="card-header">
        <div>
          <h2>Source coverage</h2>
          <p>Connected and planned lead sources for Icelandic opportunity coverage.</p>
        </div>
      </div>
      ${A.sourceCoverageError?`<div class="admin-message is-error">${O(A.sourceCoverageError)}</div>`:``}
      ${A.sourceCoverageLoading&&!e.length?`<div class="empty-card">Loading source coverage...</div>`:e.length?`
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
              ${e.map(bs).join(``)}
            </tbody>
          </table>
        </div>
      `:`<div class="empty-card">No sources configured yet.</div>`}
    </section>
  `}function bs(e){let t=e.source_status||{},n=e.source_connectors||{},r=vs(e),i=n.enabled&&[`rss_feed`,`wordpress_rest`].includes(n.connector_type),a=A.connectorTestingSourceId===e.id,o=e.opportunityStats||{active:Number(t.active_opportunities_count||0),confirmed:0,early:0,needsReview:0},s=e.latestOpportunities||[],c=A.expandedSourceId===e.id,l=n.last_error||t.last_error||``;return`
    <tr class="${r.tone===`connected`?`source-row-connected`:`source-row-muted`}">
      <td>
        <strong>${O(e.name||`Unknown source`)}</strong>
        ${n.endpoint_url||e.base_url?`<br><a href="${O(n.endpoint_url||e.base_url)}" target="_blank" rel="noreferrer">${O(n.endpoint_url||e.base_url)}</a>`:``}
      </td>
      <td>${O(hs(e.source_type))}</td>
      <td>
        <strong>${O(gs(n.connector_type))}</strong>
        ${n.require_any_keyword===!1?`<br><span>Keyword match optional</span>`:`<br><span>Requires keyword match</span>`}
        ${Array.isArray(n.include_keywords)&&n.include_keywords.length?`<br><span>Includes: ${O(n.include_keywords.slice(0,5).join(`, `))}${n.include_keywords.length>5?`...`:``}</span>`:``}
        ${Array.isArray(n.exclude_keywords)&&n.exclude_keywords.length?`<br><span>Excludes: ${O(n.exclude_keywords.slice(0,5).join(`, `))}${n.exclude_keywords.length>5?`...`:``}</span>`:``}
      </td>
      <td>
        <span class="status-pill ${n.enabled?`is-success`:`is-disabled`}">${n.enabled?`Enabled`:`Disabled`}</span>
      </td>
      <td><span class="status-pill ${r.className}">${O(r.label)}</span></td>
      <td>${O(T(n.last_success_at||t.last_success_at))}</td>
      <td>${l?O(l):`<span class="muted-text">None</span>`}</td>
      <td>${Number(o.active||0)}</td>
      <td>${Number(o.confirmed||0)}</td>
      <td>${Number(o.early||0)}</td>
      <td>${Number(o.needsReview||0)}</td>
      <td>
        <button class="btn btn-secondary btn-small" type="button" data-action="test-source-connector" data-id="${O(e.id)}" ${!i||a||A.connectorImportLoading?`disabled`:``}>
          ${a?`Testing...`:`Test source`}
        </button>
        <button class="btn btn-ghost btn-small" type="button" data-action="toggle-source-items" data-id="${O(e.id)}" ${s.length?``:`disabled`}>
          ${c?`Hide items`:`View latest items`}
        </button>
      </td>
    </tr>
    ${c?xs(e):``}
  `}function xs(e){let t=e.latestOpportunities||[];return`
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
                      <strong>${O(t.title||`Untitled opportunity`)}</strong>
                      <span>${O(Ll(`buyer`,dn(t.buyer,e.name)))} · ${O(yo(t.deadline))}</span>
                    </div>
                    <span class="quality-badge ${O(r)}">${O(ac(r))}</span>
                    ${t.url?`<a class="btn btn-ghost btn-small" href="${O(t.url)}" target="_blank" rel="noreferrer">Open</a>`:``}
                  </div>
                `}).join(``)}
            </div>
          `:`<div class="empty-card">No active items for this source.</div>`}
        </div>
      </td>
    </tr>
  `}function Ss(e){let t=e.companies?.company_name||`Unknown company`,n=Array.isArray(e.report_items)?e.report_items.length:0;return`
    <tr>
      <td>${O(rl(e,t))}</td>
      <td>${O(t)}</td>
      <td>${O(T(e.created_at))}</td>
      <td>${O(`${Zt(e.period_start)} - ${Zt(e.period_end)}`)}</td>
      <td>${O(e.status||`draft`)}</td>
      <td>${n}</td>
      <td>
        <div class="admin-row-actions">
          <button class="btn btn-secondary btn-small" type="button" data-action="view-admin-report" data-id="${O(e.id)}">${O(A.language===`is`?`Skoða yfirlit`:`View report`)}</button>
          <button class="btn btn-ghost btn-small" type="button" data-action="copy-admin-report" data-id="${O(e.id)}">${O(C(`copyReportEmail`,A.language))}</button>
          <button class="btn btn-ghost btn-small" type="button" data-action="view-admin-report" data-id="${O(e.id)}">${O(A.language===`is`?`Opna fyrir PDF`:`Open for PDF`)}</button>
        </div>
      </td>
    </tr>
  `}function Cs(){let e=(A.adminReports||[]).find(e=>e.id===A.selectedAdminReportId),t=A.selectedAdminReport?.id===A.selectedAdminReportId?A.selectedAdminReport:e;if(!t&&!A.selectedAdminReportLoading&&!A.selectedAdminReportError)return``;if(!t)return`
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
            ${A.selectedAdminReportError?`<div class="admin-message is-error">${O(A.selectedAdminReportError)}</div>`:`<div class="empty-card">Loading saved report items...</div>`}
          </div>
        </div>
      </div>
    `;let n=t.companies?.company_name||`Unknown company`,r=Array.isArray(t.report_items)?t.report_items.length:0,i=rl(t,n);return`
    <div class="modal-backdrop">
      <div class="modal admin-report-modal" role="dialog" aria-modal="true">
        <div class="modal-header">
          <div>
            <span class="status-pill is-success">${O(Zc(t.status))}</span>
            <h2>${O(i)}</h2>
            <p>${O(n)} · ${O(Q(t.period_start,t.period_end))} · ${O(T(t.created_at))}</p>
          </div>
          <button type="button" class="icon-btn modal-close-btn" data-action="close-admin-report" aria-label="Close report">×</button>
        </div>
        <div class="modal-body">
          <div class="admin-report-actions">
            <button class="btn btn-primary" type="button" data-action="download-admin-report-pdf" ${A.selectedAdminReportLoading?`disabled`:``}>${O(C(`downloadPdf`,A.language))}</button>
            <button class="btn btn-secondary" type="button" data-action="copy-admin-report" data-id="${O(t.id)}">${O(C(`copyReportEmail`,A.language))}</button>
            <button class="btn btn-secondary" type="button" data-action="mark-admin-report-sent" data-id="${O(t.id)}" ${A.adminReportDeliveryActions[t.id]===`sent`?`disabled`:``}>${O(A.adminReportDeliveryActions[t.id]===`sent`?C(`marking`,A.language):C(`markAsSent`,A.language))}</button>
            <button class="btn btn-ghost" type="button" data-action="close-admin-report">${O(C(`close`,A.language))}</button>
          </div>

          ${A.selectedAdminReportLoading?`<div class="empty-card">Loading saved report items...</div>`:``}
          ${A.selectedAdminReportError?`<div class="admin-message is-error">${O(A.selectedAdminReportError)}</div>`:``}
          ${A.selectedAdminReportLoading?``:ws(t,r,n)}

          ${!A.selectedAdminReportLoading&&r?$c(t,{companyName:n},{id:`admin-report-preview`,closeButton:!1,includeTextArea:!1}):A.selectedAdminReportLoading?``:`
            <div class="empty-card">${O(A.language===`is`?`Engin virk tækifæri eru í þessu yfirliti.`:`No active eligible opportunities in this report.`)}</div>
          `}

          ${!A.selectedAdminReportLoading&&r?Ts(t):``}
        </div>
      </div>
    </div>
  `}function ws(e,t,n){let r=e.status===`generated_all_current`?`all_current`:e.status===`generated_new_only`?`new_only`:e.status||`draft`;return`
    <div class="admin-report-meta-strip">
      <span><strong>${O(C(`company`,A.language))}:</strong> ${O(n||`Unknown company`)}</span>
      <span><strong>${O(C(`period`,A.language))}:</strong> ${O(Q(e.period_start,e.period_end))}</span>
      <span><strong>${O(C(`generatedAt`,A.language))}:</strong> ${O(T(e.created_at))}</span>
      <span><strong>${O(C(`mode`,A.language))}:</strong> ${O(C(r===`all_current`?`currentActive`:`newOpportunities`,A.language))}</span>
      <span><strong>${O(C(`items`,A.language))}:</strong> ${Number(t||0)}</span>
    </div>
  `}function Ts(e){let t=(Array.isArray(e.report_items)?[...e.report_items]:[]).sort((e,t)=>Number(e.sort_order||0)-Number(t.sort_order||0));return`
    <section class="admin-report-items">
      <h3>${O(A.language===`is`?`Atriði í yfirliti`:`Report items`)}</h3>
      <div class="admin-report-item-list">
        ${t.map(e=>Es(e)).join(``)}
      </div>
    </section>
  `}function Es(e){let t=e.opportunities?kr(e.opportunities):null;if(!t)return`<article class="admin-report-item"><p>${O(A.language===`is`?`Gögn um tækifæri eru ekki lengur aðgengileg.`:`Opportunity data is no longer available.`)}</p></article>`;let n=rn(t.url),r=So(t),i=It(Array.isArray(e.match_reasons)?e.match_reasons:[],A.language);return`
    <article class="admin-report-item">
      <div class="opportunity-badges">
        <span class="source-pill source-badge">${O(Ft({matchScore:Number(e.match_score||0)},A.language))}</span>
        <span class="${Eo(Wa(Number(e.match_score||0)))}">${O(`${Nt({matchScore:Number(e.match_score||0)},A.language)} ${Number(e.match_score||0)}`)}</span>
      </div>
      <h4>${O(t.title)}</h4>
      <p><strong>${O(A.language===`is`?`Staða`:`Status`)}:</strong> ${O(Ft({matchScore:Number(e.match_score||0)},A.language))}</p>
      <p>${O(Mt(A.language))}</p>
      <div class="admin-report-meta-grid">
        <span><strong>${O(k(`buyer`))}</strong>${O(Rl(t))}</span>
        <span><strong>${O(k(`source`))}</strong>${O(Ll(`source`,t.source))}</span>
        <span><strong>${O(k(`area`))}</strong>${O(zl(t))}</span>
        <span><strong>${O(k(`deadline`))}</strong>${O(r.label)}</span>
        <span><strong>${O(k(`estimatedValue`))}</strong>${O(t.estimatedValue?Y(t.estimatedValue):k(`notListed`))}</span>
        <span><strong>${O(C(`sentStatus`,A.language))}</strong>${O(e.sent_at?`${C(`sentOn`,A.language)} ${T(e.sent_at)}`:C(`notSent`,A.language))}</span>
      </div>
      ${i.length?`<div><strong>${O(C(`reasons`,A.language))}</strong><ul>${i.map(e=>`<li>${O(e)}</li>`).join(``)}</ul></div>`:``}
      <p>${O(t.description||``)}</p>
      ${n?`<a class="btn btn-secondary btn-small" href="${O(n)}" target="_blank" rel="noreferrer">${O(C(`openSource`,A.language))}</a>`:``}
    </article>
  `}async function Ds(e){let t=A.selectedAdminReport?.id===e?A.selectedAdminReport:(A.adminReports||[]).find(t=>t.id===e);if(!t){U(`Report not found`,`error`);return}let n=t.companies?.company_name||`Company`,r=il(t),i=Rt({companyName:n,language:A.language,matches:r.map(e=>({...e,buyer:Rl(e),deadline:bo(e),matchReasons:It(e.matchReasons,A.language)}))});try{await navigator.clipboard.writeText(i),U(`Report email copied`,`success`)}catch(e){console.error(`Failed to copy admin report:`,e),U(`Could not copy report email`,`error`)}}async function Os(e){let t=A.selectedAdminReport?.id===e?A.selectedAdminReport:(A.adminReports||[]).find(t=>t.id===e);if(!t?.company_id){U(`Report not found`,`error`);return}A.adminReportDeliveryActions[e]=`sent`,X();try{let n=await Tr(t.company_id,`mark_report_sent`,{reportId:e});await rr(e),U(`Marked ${Number(n.marked_sent||0)} report item${Number(n.marked_sent||0)===1?``:`s`} as sent`,`success`)}catch(e){console.error(`Failed to mark report as sent:`,e),U(`Could not mark report as sent. ${H(e)}`,`error`)}finally{delete A.adminReportDeliveryActions[e],X()}}function ks(){let e=A.adminOpportunityFilters;return(A.opportunities||[]).filter(t=>{let n=ic(t);if(e.tedOnly&&!n||e.manualOnly&&n||!e.showDemoTest&&Rr(t)||e.source!==`all`&&t.source!==e.source||e.status!==`all`&&t.status!==e.status)return!1;let r=ei(t)||t.countryCode||`Unknown`;if(e.country!==`all`&&r!==e.country)return!1;let i=D(e.search);return!(i&&!D(`${t.title} ${t.buyer} ${t.externalId} ${t.location}`).includes(i))})}function As(e,t){return Array.from(new Set(e.map(t).filter(Boolean))).sort((e,t)=>String(e).localeCompare(String(t)))}function js(e){let t=A.adminOpportunityFilters,n=As(A.opportunities||[],e=>e.source||`Unknown`),r=As(A.opportunities||[],e=>e.status||`Unknown`),i=As(A.opportunities||[],e=>ei(e)||e.countryCode||`Unknown`),a=A.adminCompanies||[];return`
    <div class="admin-filters">
      <input data-admin-filter="search" value="${O(t.search)}" placeholder="Search title, buyer, external ID..." />
      <select data-admin-filter="source">
        <option value="all">All sources</option>
        ${n.map(e=>`<option value="${O(e)}" ${t.source===e?`selected`:``}>${O(e)}</option>`).join(``)}
      </select>
      <select data-admin-filter="status">
        <option value="all">All statuses</option>
        ${r.map(e=>`<option value="${O(e)}" ${t.status===e?`selected`:``}>${O(e)}</option>`).join(``)}
      </select>
      <select data-admin-filter="country">
        <option value="all">All countries</option>
        ${i.map(e=>`<option value="${O(e)}" ${t.country===e?`selected`:``}>${O(e)}</option>`).join(``)}
      </select>
      <select data-admin-filter="debugCompanyId">
        <option value="">Match debug company...</option>
        ${a.map(e=>`<option value="${O(e.id)}" ${t.debugCompanyId===e.id?`selected`:``}>${O(e.companyName)}</option>`).join(``)}
      </select>
      <label class="checkbox compact"><input type="checkbox" data-admin-filter="tedOnly" ${t.tedOnly?`checked`:``}/><span>TED only</span></label>
      <label class="checkbox compact"><input type="checkbox" data-admin-filter="manualOnly" ${t.manualOnly?`checked`:``}/><span>Manual only</span></label>
      <label class="checkbox compact"><input type="checkbox" data-admin-filter="showDemoTest" ${t.showDemoTest?`checked`:``}/><span>Show demo/test opportunities</span></label>
    </div>
    <p class="admin-filter-count">${e.length} of ${(A.opportunities||[]).length} opportunities shown.</p>
  `}function Ms(e){return!!(e?.deadline||e?.deadlineAt||e?.rawPayload?.deadline_at||e?.rawPayload?.deadlineAt)}function Ns(){let e=A.adminOpportunityFilters?.missingDeadlineSource||`all`;return(A.opportunities||[]).filter(e=>!Ms(e)).filter(e=>!Rr(e)).filter(t=>e===`all`||t.source===e).sort((e,t)=>String(e.source||``).localeCompare(String(t.source||``))||String(e.title||``).localeCompare(String(t.title||``)))}function Ps(){let e=[`Ríkiskaup / island.is procurement`,`Vegagerðin`,`Akranes útboð`,`Garðabær Municipality`],t=As((A.opportunities||[]).filter(e=>!Ms(e)),e=>e.source||`Unknown`);return Qt([...e,...t])}function Fs(e){let t=e?.rawPayload||{},n=String(e?.url||t.source_url||t.link||``).trim();if(!n)return{label:`No source URL`,isSafe:!1};let r;try{r=new URL(n)}catch{return{label:`Invalid URL`,isSafe:!1}}if(![`http:`,`https:`].includes(r.protocol))return{label:`Unsupported protocol: ${r.protocol}`,isSafe:!1};let i=r.hostname.replace(/^www\./i,``).toLowerCase(),a=[`utbodsvefur.is`,`vegagerdin.is`,`akranes.is`,`gardabaer.is`,`borgarbyggd.is`,`arborg.is`,`faxafloahafnir.is`,`reykjavik.is`,`hafnarfjordur.is`,`reykjanesbaer.is`,`mulathing.is`,`akureyri.is`].some(e=>i===e||i.endsWith(`.${e}`));return{label:a?`Yes (${i})`:`Unknown host (${i})`,isSafe:a}}function Is(e){let t=e?.rawPayload||{},n=t.deadline_debug&&typeof t.deadline_debug==`object`?t.deadline_debug:{},r=[t.deadline_debug_reason,t.deadline_reenrichment_error,n.source?`debug source: ${n.source}`:``,n.extractedText?`extracted: ${n.extractedText}`:``,n.parserVersion?`parser: ${n.parserVersion}`:``,t.stale_reason?`stale: ${t.stale_reason}`:``].filter(Boolean);return r.length?r.join(` · `):`Still missing after import/re-enrichment, or no debug reason stored yet.`}function Ls(){let e=Ns(),t=Rs(e),n=e.reduce((e,t)=>{let n=t.source||`Unknown`;return e[n]||(e[n]=[]),e[n].push(t),e},{}),r=Object.keys(n).sort((e,t)=>e.localeCompare(t)),i=A.adminOpportunityFilters?.missingDeadlineSource||`all`,a=Ps();return`
    <section class="ops-card admin-debug-card">
      <div class="card-header">
        <div>
          <h2>Missing deadline debug</h2>
          <p>${e.length} opportunities missing deadlines${i===`all`?``:` for ${O(i)}`}. Grouped by source.</p>
          <p class="admin-filter-count">
            total=${t.total} · alert_eligible=false=${t.alertFalse} · alert_eligible not false=${t.alertNotFalse} · confirmed_tender=${t.confirmedTender} · needs_review=${t.needsReview}
          </p>
        </div>
        <label class="admin-inline-control">
          <span>Source</span>
          <select data-admin-filter="missingDeadlineSource">
            <option value="all">All sources</option>
            ${a.map(e=>`<option value="${O(e)}" ${i===e?`selected`:``}>${O(e)}</option>`).join(``)}
          </select>
        </label>
      </div>
      ${r.length?r.map(e=>zs(e,n[e])).join(``):`<div class="empty-card">No missing-deadline opportunities for this filter.</div>`}
    </section>
  `}function Rs(e){return(e||[]).reduce((e,t)=>{let n=t?.rawPayload||{},r=String(n.alert_eligible??``).toLowerCase(),i=String(n.quality_status||``).toLowerCase();return e.total+=1,r===`false`?e.alertFalse+=1:e.alertNotFalse+=1,i===`confirmed_tender`&&(e.confirmedTender+=1),i===`needs_review`&&(e.needsReview+=1),e},{total:0,alertFalse:0,alertNotFalse:0,confirmedTender:0,needsReview:0})}function zs(e,t){return`
    <div class="missing-deadline-source-group">
      <h3>${O(e)} <span class="muted">(${t.length})</span></h3>
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
            ${t.map(Bs).join(``)}
          </tbody>
        </table>
      </div>
    </div>
  `}function Bs(e){let t=Fs(e),n=rn(e.url||e.rawPayload?.source_url||``),r=e.rawPayload?.safety_status||e.rawPayload?.quality_status||sc(e),i=e.rawPayload?.alert_eligible,a=i===!0?`true`:`false`,o=String(i??``).toLowerCase()===`false`?``:`<br><span class="status-pill is-warning">Missing deadline alert flag needs fix</span>`,s=Is(e);return`
    <tr>
      <td><code>${O(String(e.id||``))}</code><br><span>${O(e.externalId||`No external ID`)}</span></td>
      <td><strong>${O(e.title||`Untitled`)}</strong><br><span>${O(e.source||`Unknown source`)}</span></td>
      <td>${n?`<a href="${O(n)}" target="_blank" rel="noreferrer" title="${O(n)}">${O(n)}</a>`:`No source URL`}</td>
      <td>${e.publishedDate?O(T(e.publishedDate)):`Not listed`}</td>
      <td>${O(r||`unknown`)}<br><span>alert_eligible=${O(a)}</span>${o}</td>
      <td><span class="status-pill ${t.isSafe?`is-success`:`is-running`}">${O(t.label)}</span></td>
      <td title="${O(s)}">${O(s)}</td>
    </tr>
  `}function Vs(){return Z(lt({t:k,escapeHtml:O,language:A.language,trialHref:qn()}))}function Hs(){return A.user?(W(),Z(`
    <section class="page-head pricing-head">
      <p class="eyebrow">${O(k(`onboarding`))}</p>
      <h1>${O(k(`onboardingTitle`))}</h1>
      <p>${O(k(`onboardingText`))}</p>
    </section>

    ${Us()}
  `)):V()}function Us(){return W(),bt({t:k,escapeHtml:O,capitalize:tn,arrayFieldText:$i,formatCustomerLocation:Vl,getFilterOptions:Ws,getProfileSuggestions:na,renderCustomDropdown:qs,renderSuggestionChips:ia,profileDraft:A.profileDraft||wn(),hasProfile:!!A.profile,isSavingProfile:A.isSavingProfile,profileSaved:A.profileSaved,profileSaveMessage:A.profileSaveMessage,profileSaveError:A.profileSaveError})}function Ws(e){return e===`industry`?[`Construction`,`Electrical`,`Cleaning`,`IT / Web / Software`,`Architecture / Engineering`,`Consulting`,`Transport`,`Equipment / Machinery`,`Landscaping`,`Security`,`Other`].map(e=>({value:e,label:e})):e===`label`?[{value:`strong`,label:A.language===`is`?`Aðeins sterkar`:`Strong only`},{value:`recommended`,label:A.language===`is`?`Mælt með`:`Recommended`},{value:`all`,label:A.language===`is`?`Allar samsvaranir`:`All matches`},{value:`all_opportunities`,label:A.language===`is`?`Öll tækifæri`:`All opportunities`},{value:`needs_review`,label:k(`needsReview`)},{value:`possible`,label:A.language===`is`?`Mögulegar samsvaranir`:`Possible matches`},{value:`Good match`,label:k(`goodMatch`)},{value:`Weak match`,label:k(`weakMatch`)}]:e===`category`?[{value:`all`,label:A.language===`is`?`Allir flokkar`:`All categories`},...Co().map(e=>({value:e,label:e}))]:e===`location`?[{value:`all`,label:A.language===`is`?`Öll svæði`:`All locations`},...wo().map(e=>({value:e,label:Vl(e)}))]:e===`type`?[{value:`all`,label:A.language===`is`?`Allar tegundir`:`All types`},...To().map(e=>({value:e,label:tn(e.replace(`-`,` `))}))]:[]}function Gs(e){let t=Ws(e),n=e===`industry`?A.profileDraft?.industry||A.profile?.industry||``:A.filters[e],r=t.findIndex(e=>e.value===n);return Math.max(0,r)}function Ks(e){return qs({key:e,value:A.filters[e],options:Ws(e)})}function qs({key:e,value:t,options:n,profileField:r=``}){let i=A.dropdown.openKey===e,a=t,o=Math.max(0,n.findIndex(e=>e.value===a)),s=i?A.dropdown.focusedIndex:o,c=`filter-${e}-trigger`,l=`filter-${e}-list`,u=n.find(e=>e.value===a)?.label||(e===`industry`?k(`selectIndustry`):n[0]?.label)||``;return`
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
        <span>${O(u)}</span>
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
                data-value="${O(t.value)}"
                ${r?`data-profile-field="${O(r)}"`:``}
                role="option"
                aria-selected="${i}"
              >
                <span>${O(t.label)}</span>
                ${i?`<span class="custom-select-check" aria-hidden="true">✓</span>`:``}
              </button>
            `}).join(``)}
        </div>
      `:``}
    </div>
  `}function Js(){A.dropdown.openKey=null,A.dropdown.focusedIndex=0,X()}function Ys(){requestAnimationFrame(()=>{document.querySelector(`.custom-select-option.is-focused`)?.focus()})}function Xs(e){requestAnimationFrame(()=>{document.querySelector(`[data-action="toggle-dropdown"][data-key="${e}"]`)?.focus()})}function Zs(){if(!A.user)return V();if(!A.profile)return Ko(k(`setupCompanyFirst`),k(`dashboardNeedsProfile`));let e=Za(),t=Ka(),n=Qa(t),r=qa(),i=n.filter(e=>e.matchScore>=85).length,a=n.filter(e=>w(e.deadline)<=14&&w(e.deadline)>=0).length,o=A.saved.length,s=n.filter(e=>e.matchScore>=65).reduce((e,t)=>e+(t.estimatedValue||0),0),c=n.filter(eo).length,l=ao({visibleCount:e.length,storedMatchCount:t.length,filteredStoredCount:n.length,availableCount:r.length,recommendedCount:c,strongCount:i,companyName:A.profile.companyName}),u=A.lastMatchedAt?k(`matchesLastRefreshed`,{time:T(A.lastMatchedAt)}):k(`matchesAutoRefresh`);return Z(it({profile:A.profile,matches:e,stats:{strong:i,closingSoon:a,savedCount:o,totalValue:Y(s)},filters:A.filters,filterSummary:l,matchStatus:A.matchStatus,opportunityLoadError:A.opportunityLoadError,isAdmin:A.isAdmin,matchingLoading:A.matchingLoading,labels:{dashboard:k(`dashboard`),welcomeCompany:k(`welcomeCompany`,{company:A.profile.companyName}),dashboardIntro:k(`dashboardIntro`,{refresh:u}),refreshing:k(`refreshing`),refreshMatches:k(`refreshMatches`),viewWeeklyReport:k(`viewWeeklyReport`),strongMatches:k(`strongMatches`),closingSoon:k(`closingSoon`),savedLabel:k(`savedLabel`),totalPotentialValue:k(`totalPotentialValue`),searchOpportunities:k(`searchOpportunities`),savedOnly:k(`savedOnly`)},renderFilterDropdown:Ks,renderOpportunityCard:rc,renderEmptyState:()=>nc(A.profile,A.filters.label,{availableCount:r.length,storedMatchCount:t.length,filteredStoredCount:n.length,recommendedCount:c,strongCount:i}),escapeHtml:O}))}function Qs(e){let t=[],n=Array.isArray(e?.locations)?e.locations:[],r=Array.isArray(e?.services)?e.services:[],i=Array.isArray(e?.includeKeywords)?e.includeKeywords:[],a=Array.isArray(e?.excludeKeywords)?e.excludeKeywords:[],o=n.some(e=>D(e)===`all iceland`),s=a.some(e=>{let t=D(e);return t.includes(`reykjavik`)||t.includes(`capital area`)});return o||t.push(A.language===`is`?`Bætið við Allt landið til að ná landsdekkandi útboðum og rammasamningum.`:`Add All Iceland to catch national tenders and framework agreements.`),e?.nationalProjects||t.push(A.language===`is`?`Kveikið á landsdekkandi verkefnum svo slík tækifæri birtist sem mögulegar samsvaranir.`:`Enable national projects so All Iceland opportunities appear as possible matches.`),r.length<5&&t.push(A.language===`is`?`Bætið við nákvæmari þjónustu svo VerkRadar þekki betur útboð sem passa við ykkar vinnu.`:`Add more specific services so VerkRadar can recognize notices that fit your work.`),s&&t.push(A.language===`is`?`Yfirfarið útilokunarorð fyrir Reykjavík eða höfuðborgarsvæðið. Þau geta falið útboð sem fyrirtæki utan svæðisins geta samt boðið í.`:`Review exclude keywords for Reykjavík or Capital Area. They may hide tenders that companies outside Reykjavík can still bid on.`),i.length<4&&t.push(A.language===`is`?`Bætið við fleiri leitarorðum, sérstaklega íslenskum hugtökum sem kaupendur nota í útboðum.`:`Add more include keywords, including Icelandic terms buyers may use in notices.`),t.length||t.push(A.language===`is`?`Yfirfarið þjónustu, svæði og leitarorð svo þau lýsi verkefnunum sem þið viljið raunverulega bjóða í.`:`Review services, locations and keywords to make sure they describe the work you actually want to bid on.`),t}function $s(e,t={}){return A.language===`is`?e===`all`?{eyebrow:`Engar samsvaranir`,title:`Engin tækifæri fundust fyrir þennan prófíl enn.`,body:`Víkkið þjónustu, svæði eða leitarorð til að finna fleiri tækifæri.`}:e===`all_opportunities`?{eyebrow:`Engin tækifæri`,title:`Engin tiltæk tækifæri enn.`,body:`Flytjið inn fleiri heimildir eða skoðið heimildayfirlit í Admin.`}:e===`needs_review`?{eyebrow:`Ekkert þarf staðfestingu`,title:`Engin tækifæri þarfnast staðfestingar núna.`,body:`Tækifæri úr breiðum heimildum sem þarf að yfirfara birtast hér.`}:e===`strong`?{eyebrow:`Engar sterkar samsvaranir`,title:`Engar sterkar samsvaranir enn.`,body:`Þið gætuð samt átt gagnlegar mögulegar samsvaranir. Prófið Mælt með eða Allar samsvaranir.`}:e===`possible`||e===`Possible match`||e===`Weak match`?{eyebrow:`Engar mögulegar samsvaranir`,title:`Engar mögulegar samsvaranir enn.`,body:`Prófið að víkka þjónustu, svæði eða leitarorð til að finna óvissari tækifæri.`}:{eyebrow:`Engar ráðlagðar samsvaranir`,title:ec(t),body:tc(t)}:e===`all`?{eyebrow:`No matches`,title:`No opportunities found for this profile yet.`,body:`Broaden your services, locations or keywords to find more opportunities.`}:e===`all_opportunities`?{eyebrow:`No opportunities`,title:`No available opportunities yet.`,body:`Import more sources or check Admin source coverage.`}:e===`needs_review`?{eyebrow:`No needs-review items`,title:`No needs-review opportunities right now.`,body:`Broad-feed opportunities that need manual verification will appear here.`}:e===`strong`?{eyebrow:`No strong matches`,title:`No strong matches yet.`,body:`You may still have useful possible matches. Switch to Recommended or All matches to review them.`}:e===`possible`||e===`Possible match`||e===`Weak match`?{eyebrow:`No possible matches`,title:`No possible matches yet.`,body:`Try broadening your services, locations or keywords to find lower-confidence opportunities.`}:{eyebrow:`No recommended matches`,title:ec(t),body:tc(t)}}function ec(e={}){let t=e.companyName||(A.language===`is`?`þennan prófíl`:`this profile`);return Number(e.strongCount||0)>0?A.language===`is`?`${e.strongCount} sterkar samsvaranir eru faldar af síum.`:`${e.strongCount} strong ${Number(e.strongCount)===1?`match is`:`matches are`} hidden by filters.`:A.language===`is`?`Engar ráðlagðar samsvaranir fyrir ${t} enn.`:`No recommended matches for ${t} yet.`}function tc(e={}){let t=Number(e.strongCount||0),n=Number(e.filteredStoredCount||0),r=Number(e.availableCount||0);return t>0?A.language===`is`?`Hreinsið leit/flokka/svæðissíur eða slökkvið á Aðeins vistað til að sjá sterku samsvaranirnar.`:`Clear search/category/location filters or turn off Saved only to see the strong matches.`:n>0?A.language===`is`?`${n} tækifæri eru til, en falin af gæðasíum. Notið Allar samsvaranir eða Þarfnast staðfestingar til að skoða þau.`:`${n} ${n===1?`opportunity is`:`opportunities are`} available, but hidden from Recommended by quality checks. Use All matches or Needs review to inspect them.`:A.language===`is`?`${r} tækifæri eru til í kerfinu, en ekkert passar nógu sterkt við þennan prófíl.`:`${r} opportunities are available in the system, but none match this profile strongly enough.`}function nc(e,t=A.filters.label,n={}){let r=Qs(e);return rt({copy:$s(t,{...n,companyName:e?.companyName}),suggestions:r,labels:{improveProfile:k(`improveProfile`),includeNationalOpportunities:k(`includeNationalOpportunities`),showAllStoredMatches:k(`showAllStoredMatches`),inspectAllOpportunities:k(`inspectAllOpportunities`)},escapeHtml:O})}function rc(e){return at({opp:e,saved:A.saved.includes(e.id),deadline:So(e),sourceBadgeHtml:`<span class="source-pill source-badge">${O(e.source)}</span>`,qualityBadgeHtml:cc(e),safetyBadgeHtml:lc(e),extractedBadgeHtml:pc(e),originalLanguageBadgeHtml:ic(e)?`<span class="source-pill source-badge muted-badge">${O(k(`originalLanguage`))}</span>`:``,matchBadgeClass:Eo(e.matchLabel),matchLabel:Il(e.matchLabel),buyer:Rl(e),location:zl(e),value:Y(e.estimatedValue),reasons:e.matchReasons.slice(0,3).map(Hl),labels:{details:k(`details`),saved:k(`saved`),save:k(`save`),ignore:k(`ignore`)},escapeHtml:O})}function ic(e){return/ted|tenders electronic daily/i.test(String(e.source||``))}function ac(e){let t=I(e);return{confirmed_tender:`Confirmed tender`,early_signal:`Early signal`,needs_review:`Needs review`}[t]||tn(t.replace(/_/g,` `))}function oc(e){return{confirmed_tender:`Confirmed tender`,early_opportunity:`Early opportunity`,market_signal:`Market signal`,news_context:`News context`,not_opportunity:`Not an opportunity`}[zr(e)||e]||tn(String(e||`market_signal`).replace(/_/g,` `))}function sc(e){let t=L(e);return t===`news_context`||t===`not_opportunity`||t===`market_signal`?oc(t):R(e)?mc(Br(e)):ac(I(e.qualityStatus,e))}function cc(e){return`<span class="source-pill source-badge quality-badge ${O(L(e)||I(e.qualityStatus,e))}">${O(Fl(sc(e)))}</span>`}function lc(e){if(!e||!e.safetyStatus)return``;let t=Ya(e);return`<span class="source-pill source-badge safety-badge ${O(t)}">${O(uc(t))}</span>`}function uc(e){let t=String(e||``).toLowerCase();return(A.language===`is`?{auto_approved:`Sjálfkrafa samþykkt`,needs_review:`Þarfnast yfirferðar`,hidden:`Falið`}:{auto_approved:`Auto-approved`,needs_review:`Needs review`,hidden:`Hidden`})[t]||tn(t.replace(/_/g,` `))}function dc(e){return e?A.language===`is`?`Hæft í tilkynningu`:`Alert eligible`:A.language===`is`?`Ekki hæft í tilkynningu`:`Not alert eligible`}function fc(e){let t=String(e||``);return A.language===`is`?{"Valid future deadline found":`Gildur framtíðarskilafrestur fannst`,"Recent high-intent procurement signal":`Nýlegt merki frá sterkri útboðsheimild`,"Strong service/work-type fit":`Sterk samsvörun við þjónustu eða verkflokk`,"No reliable deadline was found":`Áreiðanlegur skilafrestur fannst ekki`,"Buyer is missing or generic":`Kaupandi vantar eða er of almennur`,"Match depends on broad or low-confidence terms":`Samsvörun byggir á breiðum eða óvissum orðum`,"Possible service mismatch for this company profile":`Mögulegt ósamræmi við þjónustu fyrirtækisins`,"Mentions design, consulting, supervision, or project management terms":`Inniheldur orð tengd hönnun, ráðgjöf, eftirliti eða verkefnastjórnun`,"Tender appears already awarded or already tendered":`Útboð virðist þegar auglýst eða útboði lokið`,"Stale or expired opportunity signal":`Gamalt eða útrunnið tækifæri`,"Current opportunity is plausible but needs review before customer alerts":`Tækifærið gæti átt við en þarf yfirferð áður en það fer í tilkynningu`,"Admin override includes this opportunity in customer reports":`Admin hefur samþykkt birtingu í viðskiptavinayfirlitum`,"Excluded by customer eligibility, duplicate, stale, hidden, demo, or expired filters":`Falið vegna reglna um birtingu, afrit, aldur, prófunargögn eða útrunnið tækifæri`}[t]||$(t):t}function pc(e){if(e?.rawPayload?.extraction_method!==`vegagerdin_article_project_parser`)return``;let t=e.rawPayload?.region?` · ${e.rawPayload.region}`:``;return`<span class="source-pill source-badge muted-badge">${O(k(`extractedProject`))}${O(t)}</span>`}function mc(e){return{tender_awarded:k(`tenderAwarded`),awarded:k(`tenderAwarded`),already_tendered:k(`tenderAlreadyAnnounced`),announced:k(`tenderAlreadyAnnounced`),upcoming_tender:k(`upcomingTender`),project_signal:k(`projectSignal`),open_or_published:k(`tenderAlreadyAnnounced`),planned_tender:k(`upcomingTender`),unclear:k(`projectSignal`)}[String(e||``)]||tn(String(e||``).replace(/_/g,` `))}function hc(e){let t=L(e);return t===`news_context`||t===`not_opportunity`?`<div class="note-panel quality-warning">${O(A.language===`is`?`Þetta lítur út eins og frétta- eða umferðarefni, ekki tækifæri fyrir viðskiptavin.`:`This looks like news or traffic context, not a customer-facing opportunity.`)}</div>`:I(e.qualityStatus,e)===`needs_review`?R(e)?`<div class="note-panel quality-warning">${O(A.language===`is`?`Útdregin verkefnavísbending — staðfestið útboðstímasetningu í heimildargrein.`:`Extracted project signal — verify tender timing in the source article.`)}</div>`:`<div class="note-panel quality-warning">${O(A.language===`is`?`Innflutt úr breiðum straumi — staðfestið á upprunasíðu.`:`Imported from broad feed — verify source page.`)}</div>`:``}function gc(e){let t=A.saved.includes(e.id),n=So(e),r=Array.isArray(e.requirements)?e.requirements:[],i=Array.isArray(e.matchReasons)?e.matchReasons:[],a=Array.isArray(e.risks)?e.risks:[],o=Array.isArray(e.nextSteps)?e.nextSteps:[],s=[R(e)?`<p><strong>${O(k(`extraction`))}:</strong> ${O(A.language===`is`?`Útdregið úr grein Vegagerðarinnar`:`Extracted from Vegagerðin article`)}</p>`:``,e.rawPayload?.parent_article_title?`<p><strong>${O(k(`sourceArticle`))}:</strong> ${O(e.rawPayload.parent_article_title)}</p>`:``,e.rawPayload?.parent_url?`<p><strong>${O(k(`parentArticle`))}:</strong> <a href="${O(e.rawPayload.parent_url)}" target="_blank" rel="noreferrer">${O(k(`openSourceArticle`))}</a></p>`:``,e.rawPayload?.region?`<p><strong>${O(k(`extractedRegion`))}:</strong> ${O(e.rawPayload.region)}</p>`:``,e.rawPayload?.project_number?`<p><strong>${O(k(`projectNumber`))}:</strong> ${O(e.rawPayload.project_number)}</p>`:``,R(e)?`<p><strong>${O(k(`tenderState`))}:</strong> ${O(mc(Br(e)))}</p>`:``].join(``);return ot({opp:e,saved:t,deadline:n,requirements:r,matchReasons:i.length?i.map(Hl):[],risks:a.length?a.map($):[k(`noMajorRisks`)],safetyReasons:[...Array.isArray(e.safetyReasons)?e.safetyReasons:[],...a.length?a.map($):[k(`noMajorRisks`)]].map(fc),nextSteps:o.map(Ul),matchBadgeClass:Eo(e.matchLabel),matchLabel:Il(e.matchLabel),qualityBadgeHtml:cc(e),safetyBadgeHtml:lc(e),extractedBadgeHtml:pc(e),qualityWarningHtml:hc(e),buyerSummary:Bl(`buyer`,e.buyer),location:zl(e),value:e.estimatedValue?Y(e.estimatedValue):k(`notListed`),sourceUrl:e.url,extractedDetails:s,qualityLabel:Fl(sc(e)),safetyStatusLine:e.safetyStatus?`<p><strong>${O(A.language===`is`?`Öryggisflokkun`:`Safety status`)}:</strong> ${O(uc(e.safetyStatus))} · ${O(dc(e.alertEligible))}</p>`:``,category:Bl(`category`,e.category),type:Bl(`type`,e.type),publishedDate:e.publishedDate,cpvCode:e.cpvCode,labels:{description:k(`description`),noDescription:k(`noDescription`),requirements:k(`requirements`),noSpecificRequirements:k(`noSpecificRequirements`),matchReasons:k(`matchReasons`),noMatchReasons:k(`noMatchReasons`),opportunityInfo:k(`opportunityInfo`),source:k(`source`),sourceValue:Bl(`source`,e.source),quality:k(`quality`),category:k(`category`),type:k(`type`),deadline:k(`deadline`),deadlineLabel:$(n.label),published:k(`published`),cpv:k(`cpv`),risksToCheck:k(`risksToCheck`),recommendedNextSteps:k(`recommendedNextSteps`),openSourceAndConfirm:k(`openSourceAndConfirm`),removeFromSaved:k(`removeFromSaved`),saveOpportunity:k(`saveOpportunity`),openSource:k(`openSource`),markNotRelevant:k(`markNotRelevant`)},escapeHtml:O})}function _c(){if(!A.user)return V();if(!A.isAdmin)return wi();let e=ks(),t=A.adminCompanies.find(e=>e.id===A.selectedAdminCompanyId);return Z(`
    <section class="page-head">
      <p class="eyebrow">Admin</p>
      <h1>Operations dashboard</h1>
      <p>Admin tools for monitoring imports, reviewing customers, managing sources and handling manual entries.</p>
    </section>

    ${A.adminMessage?`
      <div class="admin-message ${A.adminMessage.type===`error`?`is-error`:`is-success`}">
        ${O(A.adminMessage.text)}
      </div>
    `:``}

    ${A.opportunityLoadError?`
      <div class="note-panel">
        ${O(A.opportunityLoadError)}
      </div>
    `:``}

    ${vc()}
    ${yc(e)}
    ${t?Vc(t):``}
  `)}function vc(){return`
    <div class="admin-tabs" role="tablist" aria-label="Admin sections">
      ${[[`overview`,`Overview`],[`companies`,`Companies`],[`review`,`Review Queue`],[`sources`,`Sources/imports`],[`opportunities`,`Opportunities`],[`reports`,`Reports`]].map(([e,t])=>`
        <button type="button" class="${A.adminActiveTab===e?`is-active`:``}" data-action="admin-tab" data-tab="${e}">
          ${O(t)}
        </button>
      `).join(``)}
    </div>
  `}function yc(e){return A.adminActiveTab===`companies`?Lc():A.adminActiveTab===`review`?xc():A.adminActiveTab===`sources`?`
      ${as()}
      ${ss()}
      ${ys()}
      ${cs()}
      ${ps()}
    `:A.adminActiveTab===`opportunities`?Bc(e):A.adminActiveTab===`reports`?ms():`
    ${bc()}
    ${Ie({escapeHtml:O,isRunning:!!A.adminDailyPipelineLoading,result:A.adminDailyPipelineResult||null})}
    ${Je({escapeHtml:O,usageSummary:A.adminAiUsageSummary||null,lastResult:A.adminAutomaticAiReviewResult||null,isRunning:!!A.adminAutomaticAiReviewLoading,formatAiUsageCost:xe})}
    ${as()}
    ${Lc(!0)}
  `}function bc(){let e=A.adminCompanies||[],t=A.opportunities||[],n=rs(),r=e.filter(e=>e.profileStatus===`Complete`).length,i=Math.max(0,e.length-r);return`
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
        <div><span>Latest import status</span><strong>${O(n?.status||`No runs`)}</strong></div>
      </div>
    </section>
  `}function xc(){let e=A.adminReviewMatches||[],t=Sc();return`
    <section class="ops-card">
      <div class="card-header">
        <div>
          <h2>${O(t.title)}</h2>
          <p>${A.adminReviewLoading?O(t.loading):O(t.count(e.length))}</p>
        </div>
        <button class="btn btn-ghost btn-small" type="button" data-action="refresh-admin-status">Refresh</button>
      </div>
      ${A.adminReviewError?`<div class="admin-message is-error">${O(A.adminReviewError)}</div>`:``}
      ${A.adminReviewLoading&&!e.length?`<div class="empty-card">${O(t.loading)}</div>`:e.length?`
        <div class="admin-review-list">
          ${e.map(Mc).join(``)}
        </div>
      `:`<div class="empty-card">${O(t.empty)}</div>`}
    </section>
  `}function Sc(){return{title:`Review Queue`,loading:`Loading review queue...`,empty:`No uncertain matches need review.`,count:e=>`${e} uncertain match${e===1?``:`es`} need review.`,opportunity:`Opportunity`,company:`Company`,source:`Source`,buyer:`Buyer`,region:`Region`,deadline:`Deadline`,score:`Score`,safety:`Safety`,alert:`Alert`,safetyReasons:`Safety reasons`,matchReasons:`Match reasons`,aiReview:`AI review`,aiReviewButton:`AI review`,aiReviewing:`Reviewing...`,aiFit:`Fit`,aiConfidence:`Confidence`,aiSend:`Send to client`,aiSummary:`Suggested client summary`,aiNoReview:`No AI review saved yet.`,approve:`Approve`,approving:`Approving...`,reject:`Reject`,rejecting:`Rejecting...`,noSource:`No source URL`,hidden:`Hidden from reports`,notHidden:`Not hidden from reports`,sourceUrl:`Source URL`}}function Cc(e){let t=e?.source||e?.rawPayload?.source_name||``;return dn(e?.buyer,t,e?.rawPayload||{})||`Unknown buyer`}function wc(e){return fn(e?.source||e?.rawPayload?.source_name||``)||e?.location||`Unknown`}function Tc(e){let t=String(e?.deadlineAt||e?.rawPayload?.deadline_at||``).trim().match(/^(\d{4}-\d{2}-\d{2})[T\s](\d{2}):(\d{2})/);return t?`${t[1]} ${t[2]}:${t[3]}`:e?.deadline?Zt(e.deadline):`Deadline not available in imported data — verify on source page.`}function Ec(e){let t=String(e||``).toLowerCase();return{auto_approved:`Auto-approved`,needs_review:`Needs review`,hidden:`Hidden`}[t]||tn(t.replace(/_/g,` `))}function Dc(e){return e?`Alert eligible`:`Not alert eligible`}function Oc(e){return e?`Review required`:`Review not required`}function kc(e){let t=String(e||``).trim();return{"Strong match":`Strong match`,"Good match":`Good match`,"Possible match":`Possible match`,"Weak match":`Weak match`}[t]||t||`Possible match`}function Ac(e){return String(e||``).trim()}function jc(e){return String(e||``).trim()}function Mc(e){let t=e.opportunity||{},n=A.adminReviewActions?.[e.id]||``,r=!!A.adminAiReviewActions?.[e.id],i=rn(t.url),a=Sc(),o=e.safetyReasons.length?e.safetyReasons:[`Needs admin review`],s=e.matchReasons.length?e.matchReasons:[`Profile match`];return`
    <article class="admin-review-card">
      <div class="admin-review-card-top">
        <div class="admin-review-title-block">
          <span class="eyebrow">${O(a.opportunity)}</span>
          <h3>${O(t.title||`Untitled opportunity`)}</h3>
          <p>${O(a.company)}: <strong>${O(e.companyName)}</strong></p>
          <p>${O(a.source)}: <strong>${O(t.source||`Unknown source`)}</strong></p>
          ${i?`<p class="admin-source-url"><span>${O(a.sourceUrl)}:</span> ${O(i)}</p>`:``}
        </div>
        <div class="admin-review-source-action">
          ${i?`<a class="btn btn-secondary btn-small" href="${O(i)}" target="_blank" rel="noopener">Open source ↗</a>`:`<span class="admin-chip">${O(a.noSource)}</span>`}
        </div>
      </div>

      <div class="admin-review-meta-grid">
        ${Fc(a.buyer,Cc(t))}
        ${Fc(a.region,wc(t))}
        ${Fc(a.deadline,Tc(t))}
        ${Fc(a.score,`${kc(e.matchLabel)} · ${Number(e.matchScore||0)}`)}
        ${Fc(a.safety,Ec(e.safetyStatus))}
        ${Fc(a.alert,`${Dc(e.alertEligible)} · ${Oc(e.reviewRequired)}`)}
      </div>

      <div class="admin-review-reasons">
        <section class="admin-review-reason-box is-warning">
          <h4>${O(a.safetyReasons)}</h4>
          <ul>
            ${o.map(e=>`<li>${O(e)}</li>`).join(``)}
          </ul>
        </section>
        <section class="admin-review-reason-box">
          <h4>${O(a.matchReasons)}</h4>
          <ul>
            ${s.map(e=>`<li>${O(e)}</li>`).join(``)}
          </ul>
        </section>
      </div>

      ${Nc(e,a)}

      <div class="admin-review-actions">
        <span class="admin-review-hidden-state">${O(t.rawPayload?.hidden_from_reports===!0?a.hidden:a.notHidden)}</span>
        <div class="admin-row-actions">
          <button class="btn btn-secondary btn-small" data-action="admin-ai-review-match" data-id="${O(e.id)}" data-force="${e.aiReview?`true`:`false`}" ${n||r?`disabled`:``}>${O(r?a.aiReviewing:e.aiReview?`Re-run AI review`:a.aiReviewButton)}</button>
          <button class="btn btn-ghost btn-small" data-action="admin-review-match" data-review-action="approve" data-id="${O(e.id)}" data-company-id="${O(e.companyId)}" ${n||r?`disabled`:``}>${O(n===`approve`?a.approving:a.approve)}</button>
          <button class="btn btn-ghost btn-small" data-action="admin-review-match" data-review-action="reject" data-id="${O(e.id)}" data-company-id="${O(e.companyId)}" ${n||r?`disabled`:``}>${O(n===`reject`?a.rejecting:a.reject)}</button>
        </div>
      </div>
    </article>
  `}function Nc(e,t){let n=e.aiReview;return n?`
    <section class="admin-ai-review-box">
      <div class="admin-ai-review-header">
        <h4>${O(t.aiReview)}</h4>
        <span>${O(n.model||`model not listed`)} · ${n.updatedAt?O(T(n.updatedAt)):``}</span>
      </div>
      <div class="admin-ai-review-meta">
        <span><strong>${O(t.aiFit)}</strong>${O(Pc(n.fit))}</span>
        <span><strong>${O(t.aiConfidence)}</strong>${Math.round(Number(n.confidence||0)*100)}%</span>
        <span><strong>${O(t.aiSend)}</strong>${n.sendToClient?`Yes`:`No`}</span>
      </div>
      <p>${O(n.reason||``)}</p>
      ${n.fitReasons.length?`<p><strong>Fit reasons:</strong> ${n.fitReasons.map(e=>`<span class="admin-chip">${O(e)}</span>`).join(` `)}</p>`:``}
      ${n.risksOrQuestions.length?`<p><strong>Risks/questions:</strong> ${n.risksOrQuestions.map(e=>`<span class="admin-chip">${O(e)}</span>`).join(` `)}</p>`:``}
      ${n.suggestedClientSummary?`<p><strong>${O(t.aiSummary)}:</strong> ${O(n.suggestedClientSummary)}</p>`:``}
    </section>
  `:`
      <section class="admin-ai-review-box is-empty">
        <div class="admin-ai-review-header">
          <h4>${O(t.aiReview)}</h4>
          <span>${O(t.aiNoReview)}</span>
        </div>
      </section>
    `}function Pc(e){return{strong:`Strong`,possible:`Possible`,weak:`Weak`,no_fit:`No fit`}[String(e||``)]||`Weak`}function Fc(e,t){return`
    <div class="admin-review-meta-item">
      <span>${O(e)}</span>
      <strong>${O(t||`—`)}</strong>
    </div>
  `}function Ic(){let e=A.adminCompanyFilters;return(A.adminCompanies||[]).filter(t=>{let n=D(e.search);return!(n&&!D(`${t.companyName} ${t.contactEmail} ${t.industry}`).includes(n)||e.industry!==`all`&&t.industry!==e.industry||e.profileStatus!==`all`&&t.profileStatus!==e.profileStatus||e.plan!==`all`&&t.plan!==e.plan)})}function Lc(e=!1){let t=e?(A.adminCompanies||[]).slice(0,5):Ic();return`
    <section class="ops-card">
      <div class="card-header">
        <div>
          <h2>Companies / users</h2>
          <p>${A.adminCompaniesLoading?`Loading companies...`:`${t.length} shown from ${(A.adminCompanies||[]).length} total companies.`}</p>
        </div>
        ${e?``:`
          <label class="admin-inline-control">
            <span>Report mode</span>
            <select data-admin-report-mode>
              <option value="new_only" ${A.adminReportMode===`new_only`?`selected`:``}>New opportunities report</option>
              <option value="all_current" ${A.adminReportMode===`all_current`?`selected`:``}>Current active opportunities report</option>
            </select>
          </label>
        `}
      </div>
      ${A.adminCompaniesError?`<div class="admin-message is-error">${O(A.adminCompaniesError)}</div>`:``}
      ${e?``:Rc()}
      ${A.adminCompaniesLoading&&!t.length?`<div class="empty-card">Loading companies...</div>`:t.length?`
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
              ${t.map(zc).join(``)}
            </tbody>
          </table>
        </div>
      `:`<div class="empty-card">No companies found.</div>`}
    </section>
  `}function Rc(){let e=A.adminCompanies||[],t=As(e,e=>e.industry),n=As(e,e=>e.plan),r=A.adminCompanyFilters;return`
    <div class="admin-filters admin-company-filters">
      <input data-admin-company-filter="search" value="${O(r.search)}" placeholder="Search company or email..." />
      <select data-admin-company-filter="industry">
        <option value="all">All industries</option>
        ${t.map(e=>`<option value="${O(e)}" ${r.industry===e?`selected`:``}>${O(e)}</option>`).join(``)}
      </select>
      <select data-admin-company-filter="profileStatus">
        <option value="all">All profiles</option>
        ${[`Complete`,`Incomplete`].map(e=>`<option value="${e}" ${r.profileStatus===e?`selected`:``}>${e}</option>`).join(``)}
      </select>
      <select data-admin-company-filter="plan">
        <option value="all">All plans</option>
        ${n.map(e=>`<option value="${O(e)}" ${r.plan===e?`selected`:``}>${O(e)}</option>`).join(``)}
      </select>
    </div>
  `}function zc(e){let t=A.adminCompanyActions?.[e.id]||``,n=t===`refresh`,r=t===`report`,i=!!t;return`
    <tr>
      <td><strong>${O(e.companyName)}</strong><br><span>${O(e.contactEmail||`No email`)}</span></td>
      <td>${O(e.industry||`Unknown`)}</td>
      <td>${O(e.plan||`Demo`)}</td>
      <td><span class="status-pill ${e.profileStatus===`Complete`?`is-success`:`is-running`}">${O(e.profileStatus)}</span></td>
      <td>${O(T(e.createdAt))}</td>
      <td>${e.matchCount}</td>
      <td>${e.savedCount?e.savedCount:`Not tracked`}</td>
      <td>${e.latestReportDate?O(T(e.latestReportDate)):`No reports`}</td>
      <td>
        <div class="admin-row-actions">
          <button class="btn btn-secondary btn-small" type="button" data-action="view-admin-company" data-id="${O(e.id)}" ${i?`disabled`:``}>View details</button>
          <button class="btn btn-ghost btn-small" type="button" data-action="admin-refresh-company-matches" data-id="${O(e.id)}" ${i?`disabled`:``}>${n?`Refreshing...`:`Refresh matches`}</button>
          <button class="btn btn-ghost btn-small" type="button" data-action="admin-generate-company-report" data-id="${O(e.id)}" ${i?`disabled`:``}>${r?`Generating...`:`Generate report`}</button>
        </div>
      </td>
    </tr>
  `}function Bc(e){let t={...In(),...A.adminOpportunityDraft||{}};return`
    <section class="admin-list">
      <div class="card-header">
        <div>
          <h2>Existing opportunities</h2>
          <p>${(A.opportunities||[]).length} loaded ${A.opportunityLoadError?`from fallback data`:`from Supabase`}.</p>
        </div>
      </div>
      ${js(e)}
      ${e.length?e.map(Uc).join(``):`<div class="empty-card">No opportunities loaded.</div>`}
    </section>

    <form class="form-card admin-form" id="admin-opportunity-form">
      <div class="form-section">
        <h2>Add opportunity</h2>
        <div class="form-grid">
          <label>Title <input name="title" data-admin-opportunity-field="title" value="${O(t.title)}" required /></label>
          <label>Buyer <input name="buyer" data-admin-opportunity-field="buyer" value="${O(t.buyer)}" /></label>
          <label>Source name <input name="sourceName" data-admin-opportunity-field="sourceName" value="${O(t.sourceName)}" required /></label>
          <label>Category <input name="category" data-admin-opportunity-field="category" value="${O(t.category)}" /></label>
          <label>Type <input name="type" data-admin-opportunity-field="type" value="${O(t.type)}" /></label>
          <label>Deadline <input type="date" name="deadline" data-admin-opportunity-field="deadline" value="${O(t.deadline)}" /></label>
          <label>Published date <input type="date" name="published_date" data-admin-opportunity-field="published_date" value="${O(t.published_date)}" /></label>
          <label>Location <input name="location" data-admin-opportunity-field="location" value="${O(t.location)}" /></label>
          <label>Estimated value <input type="number" min="0" step="1" name="estimated_value" data-admin-opportunity-field="estimated_value" value="${O(t.estimated_value)}" /></label>
          <label>URL <input type="url" name="url" data-admin-opportunity-field="url" value="${O(t.url)}" /></label>
          <label>CPV code <input name="cpv_code" data-admin-opportunity-field="cpv_code" value="${O(t.cpv_code)}" /></label>
          <label>Difficulty <input name="difficulty" data-admin-opportunity-field="difficulty" value="${O(t.difficulty)}" /></label>
          <label>Status <input name="status" data-admin-opportunity-field="status" value="${O(t.status)}" /></label>
        </div>
        <label>Description <textarea name="description" data-admin-opportunity-field="description" rows="4">${O(t.description)}</textarea></label>
        <label>Requirements comma-separated <textarea name="requirements" data-admin-opportunity-field="requirements" rows="3">${O(t.requirements)}</textarea></label>
        <label>Keywords comma-separated <textarea name="keywords" data-admin-opportunity-field="keywords" rows="3">${O(t.keywords)}</textarea></label>
      </div>

      <div class="form-actions">
        <button class="btn btn-primary btn-large" type="submit" ${A.adminSubmitting?`disabled`:``}>
          ${A.adminSubmitting?`Saving...`:`Add opportunity`}
        </button>
      </div>
    </form>

    ${Ls()}
  `}function Vc(e){let t=[e.minProjectValue?Y(e.minProjectValue):`No minimum`,e.maxProjectValue?Y(e.maxProjectValue):`No maximum`].join(` - `),n=rn(e.website);return`
    <div class="modal-backdrop">
      <div class="modal admin-company-modal" role="dialog" aria-modal="true">
        <div class="modal-header">
          <div>
            <span class="status-pill ${e.profileStatus===`Complete`?`is-success`:`is-running`}">${O(e.profileStatus)}</span>
            <h2>${O(e.companyName)}</h2>
            <p>${O(e.contactEmail||`No contact email`)} · ${O(e.industry||`Unknown industry`)}</p>
          </div>
          <button type="button" class="icon-btn modal-close-btn" data-action="close-admin-company" aria-label="Close company details">×</button>
        </div>
        <div class="modal-body">
          <div class="admin-detail-grid">
            <section class="side-panel">
              <h3>Company basics</h3>
              <p><strong>Email:</strong> ${O(e.contactEmail||`Unknown`)}</p>
              <p><strong>Contact name:</strong> ${O(e.contactName||`Not listed`)}</p>
              <p><strong>Phone:</strong> ${O(e.phone||`Not listed`)}</p>
              <p><strong>Kennitala:</strong> ${O(e.kennitala||`Not listed`)}</p>
              <p><strong>Address:</strong> ${O(e.address||`Not listed`)}</p>
              <p><strong>Website:</strong> ${n?`<a href="${O(n)}" target="_blank" rel="noreferrer">${O(e.website)}</a>`:O(e.website||`Not listed`)}</p>
              <p><strong>Industry:</strong> ${O(e.industry||`Unknown`)}</p>
              <p><strong>Created:</strong> ${O(T(e.createdAt))}</p>

              <h3>Billing</h3>
              <p><strong>Selected plan:</strong> ${O(e.selectedPlan||e.plan||`Not selected`)}</p>
              <p><strong>Billing status:</strong> ${O(e.billingStatus||`Not set`)}</p>
              <p><strong>Billing email:</strong> ${O(e.billingEmail||e.contactEmail||`Not listed`)}</p>
              <p><strong>Trial started:</strong> ${e.trialStartedAt?O(T(e.trialStartedAt)):`Not set`}</p>
              <p><strong>Trial ends:</strong> ${e.trialEndsAt?O(T(e.trialEndsAt)):`Not set`}</p>

              <h3>Project preferences</h3>
              <p><strong>Project size:</strong> ${O(t)}</p>
              <p><strong>Unknown value:</strong> ${e.allowUnknownValue?`Allowed`:`Not preferred`}</p>
              <p><strong>Travel:</strong> ${e.willingToTravel?`Yes`:`No`}</p>
              <p><strong>National:</strong> ${e.nationalProjects?`Yes`:`No`}</p>
              <p><strong>Remote:</strong> ${e.remoteProjects?`Yes`:`No`}</p>
            </section>

            <section class="side-panel">
              <h3>Services</h3>
              ${Hc(e.services,`No services saved.`)}
              <h3>Include keywords</h3>
              ${Hc(e.includeKeywords,`No include keywords saved.`)}
              <h3>Exclude keywords</h3>
              ${Hc(e.excludeKeywords,`No exclude keywords saved.`)}
            </section>

            <section class="side-panel">
              <h3>Locations and service areas</h3>
              <p><strong>Base:</strong> ${O(e.baseLocation||`Not set`)}</p>
              ${Hc([...e.locations,...e.serviceAreas],`No locations saved.`)}
              <h3>Reports</h3>
              <p><strong>Frequency:</strong> ${O(e.reportFrequency)}</p>
              <p><strong>Day:</strong> ${O(e.reportDay)}</p>
              <p><strong>Deadline reminders:</strong> ${e.deadlineReminders?`On`:`Off`}</p>
            </section>

            ${Re(e,{escapeHtml:O,formatDateTime:T,inviteEmail:dr(e),inviteLink:A.adminCompanyInviteLinks?.[e.id]||``,inviteDebug:A.adminCompanyInviteDebug?.[e.id]||null,actionState:A.adminCompanyAccessActions?.[e.id]||``})}

            <section class="side-panel">
              <h3>Latest matches</h3>
              ${Ye(e,{escapeHtml:O})}
              <h3>Latest reports</h3>
              ${e.latestReports.length?`
                <ul class="admin-detail-list">
                  ${e.latestReports.map(e=>`
                    <li>
                      <strong>${O(e.title||`Report`)}</strong>
                      <span>${O(T(e.created_at))}</span>
                    </li>
                  `).join(``)}
                </ul>
              `:`<p>No reports generated yet.</p>`}
            </section>

            ${Xe(e,{escapeHtml:O,formatDateTime:T,actionState:A.adminCompanyAiReviewActions?.[e.id]?`running`:``,filter:A.adminCompanyAiReviewFilter,lastResult:A.adminCompanyAiReviewResults?.[e.id]||null,usageSummary:A.adminAiUsageSummary||null,formatAiUsageCost:xe})}
          </div>
        </div>
      </div>
    </div>
  `}function Hc(e,t){let n=E(e);return n.length?`<div class="admin-tag-list">${n.map(e=>`<span>${O(e)}</span>`).join(``)}</div>`:`<p>${O(t)}</p>`}function Uc(e){let t=A.adminUpdatingId===e.id,n=L(e),r=e.rawPayload?.hidden_from_reports===!0||[`hidden`,`noise`,`deleted`].includes(String(e.rawPayload?.admin_report_status||``).toLowerCase()),i=_l(e)?e.rawPayload?.duplicate_reason||`Duplicate of ${e.rawPayload?.canonical_opportunity_id||e.rawPayload?.duplicate_of||`canonical opportunity`}`:``,a=Wr({title:e.title,description:e.description,content:`${e.category||``} ${e.source||``} ${Array.isArray(e.keywords)?e.keywords.join(` `):``}`,publishedDate:e.publishedDate,deadline:e.deadline,sourceName:e.source,sourceType:e.sourceType,connectorType:e.rawPayload?.connector_type}),o=e.rawPayload?.stale_reason||(a.isStale?a.reason:``),s=rn(e.url||e.rawPayload?.source_url||``);return`
    <div class="admin-row">
      <div>
        <h3>${O(e.title)}</h3>
        <p><strong>Source:</strong> ${O(e.source||`Unknown source`)} · <strong>Buyer:</strong> ${O(Cc(e))} · <strong>Region:</strong> ${O(wc(e))} · <strong>Status:</strong> ${O(e.status)}</p>
        <p><strong>Source URL:</strong> ${s?`<a href="${O(s)}" target="_blank" rel="noreferrer">${O(s)}</a>`:`Not listed`} · <strong>External ID:</strong> ${O(e.externalId||`Not listed`)}</p>
        <p>Quality: ${O(sc(e))} · Intent: ${O(oc(n))}${r?` · Hidden from reports`:``}${i?` · Duplicate: ${O(i)}`:``}${o?` · Stale / expired: ${O(o)}`:``}</p>
        <p>Debug: hidden_from_reports=${e.rawPayload?.hidden_from_reports===!0?`true`:`false`} · admin_report_status=${O(e.rawPayload?.admin_report_status||`none`)} · stale_status=${O(e.rawPayload?.stale_status||`none`)}</p>
        ${Wc(e)}
      </div>
      <div class="admin-row-actions">
        <button class="btn btn-ghost btn-small" data-action="admin-report-override" data-override="confirmed_tender" data-id="${O(e.id)}" ${t?`disabled`:``}>Confirmed tender</button>
        <button class="btn btn-ghost btn-small" data-action="admin-report-override" data-override="early_opportunity" data-id="${O(e.id)}" ${t?`disabled`:``}>Early opportunity</button>
        <button class="btn btn-ghost btn-small" data-action="admin-report-override" data-override="include" data-id="${O(e.id)}" ${t?`disabled`:``}>Include in reports</button>
        <button class="btn btn-ghost btn-small" data-action="admin-report-override" data-override="noise" data-id="${O(e.id)}" ${t?`disabled`:``}>News/noise</button>
        <button class="btn btn-ghost btn-small" data-action="admin-report-override" data-override="hide" data-id="${O(e.id)}" ${t?`disabled`:``}>Hide from reports</button>
        <button
          class="btn btn-ghost btn-small"
          data-action="delete-opportunity"
          data-id="${O(e.id)}"
          ${A.adminDeletingId===e.id?`disabled`:``}
        >
          ${A.adminDeletingId===e.id?`Deleting...`:`Delete`}
        </button>
      </div>
    </div>
  `}function Wc(e){let t=A.adminOpportunityFilters?.debugCompanyId||``;if(!t)return``;let n=(A.adminCompanies||[]).find(e=>e.id===t);if(!n)return`<div class="admin-debug-panel">Match debug: selected company not loaded.</div>`;let r=Ha(n,e),i=Jc(e,r),a=E(n.services).join(`, `)||`No services`,o=E(n.includeKeywords).join(`, `)||`No include keywords`,s=Gc(n,e),c=Kc(n,e),l=qc(n,e,r),u=classifyMatchSafety(n,r);return`
    <div class="admin-debug-panel">
      <p><strong>Match debug for ${O(n.companyName)}:</strong> score ${Number(r.matchScore||0)} · ${O(kc(r.matchLabel))}</p>
      <p><strong>Services:</strong> ${O(a)}</p>
      <p><strong>Keywords:</strong> ${O(o)}</p>
      <p><strong>Matched terms:</strong> ${s.length?s.map(e=>`<span class="admin-chip">${O(e)}</span>`).join(` `):`None`}</p>
      <p><strong>Missing profile terms:</strong> ${c.length?c.map(e=>`<span class="admin-chip">${O(e)}</span>`).join(` `):`None`}</p>
      <p><strong>Score contribution:</strong> ${l.map(e=>`<span class="admin-chip">${O(e)}</span>`).join(` `)}</p>
      <p><strong>Matched terms/reasons:</strong> ${(r.matchReasons||[]).map(e=>`<span class="admin-chip">${O(Ac(e))}</span>`).join(` `)||`None`}</p>
      <p><strong>Risks:</strong> ${(r.risks||[]).map(e=>`<span class="admin-chip">${O(jc(e))}</span>`).join(` `)||`None`}</p>
      <p><strong>Safety:</strong> <span class="admin-chip">${O(Ec(u.safetyStatus))}</span> <span class="admin-chip">${O(Dc(u.alertEligible))}</span> ${(u.safetyReasons||[]).map(e=>`<span class="admin-chip">${O(e)}</span>`).join(` `)}</p>
      <p><strong>Excluded by:</strong> ${i.length?i.map(e=>`<span class="admin-chip">${O(e)}</span>`).join(` `):`<span class="admin-chip">Not excluded by local dashboard/report filters</span>`}</p>
    </div>
  `}function Gc(e,t){let n=da(t);return xa(Qt([...E(e.services).filter(e=>ua(n,e)),...E(e.includeKeywords).filter(e=>ua(n,e)),...Sa(n),...Ea(e)?Ca(n):[]]))}function Kc(e,t){let n=da(t);return xa(Qt([...E(e.services),...E(e.includeKeywords)].filter(e=>e&&!ua(n,e)))).slice(0,12)}function qc(e,t,n){let r=[],i=(n.matchReasons||[]).filter(e=>/^Mentions your service:/i.test(e)).length,a=(n.matchReasons||[]).filter(e=>/^Contains your keyword:/i.test(e)).length;Va(e,t)&&r.push(`+35 industry/category`),i&&r.push(`+${Math.min(35,i*10)} services`),a&&r.push(`+${Math.min(25,a*8)} keywords`);let o=Pa(e,t);return o===`local_match`?r.push(`+22 local`):o===`national_match`?r.push(`+16 national`):o===`remote_match`?r.push(`+14 remote`):o===`outside_area_possible`?r.push(`+4 travel possible`):r.push(`-8 low-confidence location`),t.deadline&&w(t.deadline)>=0&&w(t.deadline)<=30&&r.push(`+8 closing soon`),(n.risks||[]).some(e=>/broad construction/i.test(e))&&r.push(`capped broad fit`),(n.risks||[]).some(e=>/winter|snow/i.test(e))&&r.push(`capped winter fit`),(n.risks||[]).some(e=>/indoor|finishing/i.test(e))&&r.push(`downgraded indoor mismatch`),r.length?r:[`No positive score contribution`]}function Jc(e,t){let n=[];return Number(t.matchScore||0)<50&&n.push(`score_below_50 (${Number(t.matchScore||0)})`),Al(e)||n.push(`customer_match_ineligible`),Lr(e)||n.push(`dashboard_not_visible`),Ya(e)===`hidden`&&n.push(`safety_status_hidden`),El(A.adminCompanies?.find(e=>e.id===A.adminOpportunityFilters?.debugCompanyId)||{},e)&&n.push(`needs_review_wrong_type_for_company`),Dl(A.adminCompanies?.find(e=>e.id===A.adminOpportunityFilters?.debugCompanyId)||{},e)&&n.push(`design_consulting_or_supervision_only`),e.rawPayload?.hidden_from_reports===!0&&n.push(`hidden_from_reports`),_l(e)&&n.push(`duplicate_secondary`),Ur(e)&&n.push(`stale_or_expired`),Rr(e)&&n.push(`demo_or_test`),n}function Yc(){if(!A.user)return V();if(!A.profile)return Ko(k(`setupCompanyFirst`),k(`reportNeedsProfile`));let e=A.profile,t=ul(e,cl()),n=A.reports.find(e=>e.id===A.selectedReportId),r=A.reportArchiveLoading?k(`loadingSavedReports`):A.language===`is`?`${A.reports.length} vistuð yfirlit.`:`${A.reports.length} saved report${A.reports.length===1?``:`s`}.`,i=A.reportArchiveLoading?`<div class="empty-card">${O(k(`loadingSavedReports`))}</div>`:A.reportsLoadError?`<div class="admin-message is-error">Failed to load reports. ${O(A.reportsLoadError)}</div>`:A.reportsLoaded&&A.reports.length===0?`<div class="empty-card">${O(k(`noSavedReports`))}</div>`:A.reports.map(Xc).join(``);return Z(`
    <section class="dashboard-head">
      <div>
        <p class="eyebrow">${O(k(`weeklyReport`))}</p>
        <h1>${O(k(`reportTitle`))}</h1>
        <p>${O(e.companyName||`Your company`)} · ${O(Q(t.periodStart,t.periodEnd))}</p>
        <p class="muted-copy">${O(A.language===`is`?`Sýnir öll núverandi viðeigandi tækifæri, ekki aðeins ný frá síðasta vistaða yfirliti.`:`Showing all current eligible matches, not only new items since the last saved report.`)}</p>
      </div>
      <div class="dashboard-actions">
        <button class="btn btn-primary" data-action="save-report" ${A.reportSaveLoading?`disabled`:``}>
          ${A.reportSaveLoading?O(k(`savingReport`)):O(k(`saveReport`))}
        </button>
        <button class="btn btn-secondary" data-action="download-report-pdf">${O(k(`downloadPdf`))}</button>
        <button class="btn btn-secondary" data-action="copy-report">${O(k(`copyReport`))}</button>
      </div>
    </section>

    ${A.reportMessage?`
      <div class="admin-message ${A.reportMessage.type===`error`?`is-error`:`is-success`}">
        ${O(A.reportMessage.text)}
      </div>
    `:``}

    ${Qc(t,{id:`report-preview`,contactEmail:e.contactEmail,companyName:e.companyName})}

    <section class="report-archive">
      <div class="card-header">
        <div>
          <p class="eyebrow">${O(k(`reportArchive`))}</p>
          <h2>${O(k(`savedReports`))}</h2>
          <p>${r}</p>
        </div>
      </div>
      ${i}
    </section>

    ${n?$c(n,e):``}
  `)}function Xc(e){let t=Array.isArray(e.report_items)?e.report_items.length:Number(e.itemCount||0),n=A.profile?.companyName||e.companies?.company_name||`Company`,r=A.language===`is`?dl(e.created_at):Zt(e.created_at),i=A.language===`is`?`${t} tækifæri`:`${t} item${t===1?``:`s`}`;return xt({report:e,title:rl(e,n),created:r,itemLabel:i,statusLabel:Zc(e.status),hideLabel:A.language===`is`?`Fela yfirlit`:`Hide report`,viewLabel:k(`viewReport`),escapeHtml:O})}function Zc(e){let t=String(e||`draft`);return A.language===`is`?{generated_all_current:`Heildaryfirlit`,generated_new_only:`Ný tækifæri`,draft:`Vistað yfirlit`}[t]||t:{generated_all_current:`All current`,generated_new_only:`New opportunities`,draft:`Saved report`}[t]||t}function Qc(e,t={}){return St({report:e,options:t,companyName:t.companyName||A.profile?.companyName||`Company`,dateRange:Q(e.periodStart,e.periodEnd),generatedByLabel:k(`generatedBy`),reportTitleLabel:k(`reportTitle`),closeLabel:k(`closeReport`),escapeHtml:O})}function $c(e,t,n={}){let r=e.period_start||e.created_at?.slice(0,10)||new Date().toISOString().slice(0,10),i=e.period_end||e.created_at?.slice(0,10)||new Date().toISOString().slice(0,10),a=t.companyName||e.companies?.company_name||`Company`,o=il(e),s=o.length?al(o):el(e),c=o.length?Kl(e,a,o):nl(e.text_content||``);return Qc({title:rl(e,a),periodStart:r,periodEnd:i,htmlContent:s,textContent:c},{companyName:a,closeButton:n.closeButton===void 0?!0:n.closeButton,includeTextArea:n.includeTextArea===void 0?!1:n.includeTextArea,id:n.id||``})}function el(e){if(e.html_content&&e.html_content.includes(`report-cover`))return tl(sl(e.html_content));let t=e.period_start||e.created_at?.slice(0,10)||new Date().toISOString().slice(0,10),n=e.period_end||e.created_at?.slice(0,10)||new Date().toISOString().slice(0,10),r=e.html_content?tl(sl(e.html_content)):`<pre>${O(e.text_content||`Ekkert efni var vistað fyrir þetta yfirlit.`)}</pre>`;return`
    <div class="report-cover">
      <div class="report-kicker">Útbúið af VerkRadar</div>
      <p class="eyebrow">Vistað yfirlit</p>
      <h2>${O(e.title||`Vistað yfirlit`)}</h2>
      <p>${O(Q(t,n))}</p>
      <p>${O(e.summary||`Þetta eldra vistaða yfirlit er birt í nýju skýrslusniði.`)}</p>
    </div>
    <div class="report-legacy-content">
      ${r}
    </div>
  `}function tl(e){return kt(e,A.language)}function nl(e){return kt(e,A.language)}function rl(e,t){return k(`reportForCompany`,{company:String(t||e?.companies?.company_name||`Company`).trim()})}function il(e){return(Array.isArray(e?.report_items)?[...e.report_items]:[]).sort((e,t)=>Number(e.sort_order||0)-Number(t.sort_order||0)).map(e=>{if(!e.opportunities)return null;let t=kr(e.opportunities);return{...t,matchScore:Number(e.match_score||0),matchLabel:Wa(Number(e.match_score||0)),matchReasons:ni(t,Array.isArray(e.match_reasons)?e.match_reasons:[]),risks:Array.isArray(e.risks)&&e.risks.length?e.risks:Array.isArray(t.rawPayload?.risks)?t.rawPayload.risks:[],nextSteps:[]}}).filter(Boolean)}function al(e){let t=ol(e);return`
    ${t.confirmed.length?Ml(C(`openActiveTitle`,A.language),C(`openActiveDescription`,A.language),t.confirmed):``}
    ${t.possible.length?Ml(C(`possibleTitle`,A.language),C(`possibleDescription`,A.language),t.possible):``}
    ${t.early.length?Ml(C(`earlyTitle`,A.language),C(`earlyDescription`,A.language),t.early):``}
    <p class="report-footer-note">${O(k(`reportFooter`))}</p>
  `}function ol(e){let t={confirmed:[],possible:[],early:[],review:[]};return e.forEach(e=>{let n=pl(e);n===`confirmed`?t.confirmed.push(e):n===`possible`?t.possible.push(e):n===`early`?t.early.push(e):n!==`excluded`&&t.review.push(e)}),t}function sl(e){let t=new DOMParser().parseFromString(String(e||``),`text/html`),n=new Set([`A`,`ARTICLE`,`DIV`,`EM`,`H2`,`H3`,`H4`,`H5`,`LI`,`OL`,`P`,`PRE`,`SECTION`,`SPAN`,`STRONG`,`UL`]),r=new Set([`aria-hidden`,`class`,`href`,`rel`,`target`]);return t.body.querySelectorAll(`*`).forEach(e=>{if(!n.has(e.tagName)){e.replaceWith(...Array.from(e.childNodes));return}Array.from(e.attributes).forEach(t=>{if(!r.has(t.name)){e.removeAttribute(t.name);return}if(t.name===`href`){let n=rn(t.value);n?e.setAttribute(`href`,n):e.removeAttribute(`href`)}})}),t.body.innerHTML}function cl(e=`all_current`,t=new Set){return ll({mode:e,previouslyReportedIds:t})}function ll({mode:e=`all_current`,previouslyReportedIds:t=new Set}={}){let n=Ga().filter(e=>e.matchScore>=50).filter(e=>ml(e,`all_current`));return Xt(e===`new_only`?n.filter(e=>!t.has(e.id)):n).slice(0,8)}function ul(e,t){let n=new Date,r=n.toISOString().slice(0,10),i=new Date(n);i.setDate(i.getDate()-7);let a=i.toISOString().slice(0,10),o=k(`reportForCompany`,{company:e.companyName}),s=fl(t),c=s.confirmed.length+s.possible.length+s.early.length,l=A.language===`is`?`${c} viðeigandi útboðs- eða verðfyrirspurnaratriði fundust fyrir ${e.companyName}.`:`${c} relevant tender/quote-request ${c===1?`item`:`items`} found for ${e.companyName}.`;return{title:o,periodStart:a,periodEnd:r,summary:l,textContent:Gl(e,t),htmlContent:`
    <div class="report-cover">
      <div class="report-kicker">${O(k(`generatedBy`))}</div>
      <p class="eyebrow">${O(k(`reportTitle`))}</p>
      <h2>${O(o)}</h2>
      <p>${O(Q(a,r))}</p>
      <p>${O(l)} ${t[0]?O(A.language===`is`?`Sterkasta sýnilega atriðið er ${t[0].title}.`:`The strongest visible item is ${t[0].title}.`):O(A.language===`is`?`Engin skýr útboð eða verðfyrirspurnir fundust fyrir þetta tímabil.`:`No strict report-ready tenders or quote requests were found for this period.`)}</p>
    </div>

    <div class="report-summary-grid">
      ${jl(C(`openActiveTitle`,A.language),s.confirmed.length)}
      ${jl(C(`possibleTitle`,A.language),s.possible.length)}
    </div>

    ${Ml(C(`openActiveTitle`,A.language),C(`openActiveDescription`,A.language),s.confirmed)}
    ${s.possible.length?Ml(C(`possibleTitle`,A.language),C(`possibleDescription`,A.language),s.possible):``}
    ${s.early.length?Ml(C(`earlyTitle`,A.language),C(`earlyDescription`,A.language),s.early):``}

    <p class="report-footer-note">${O(k(`reportFooter`))}</p>
  `}}function Q(e,t){return`${dl(e)} – ${dl(t)}`}function dl(e){if(!e)return`Engin dagsetning`;let t=new Date(`${String(e).slice(0,10)}T00:00:00`);return Number.isNaN(t.getTime())?String(e):A.language===`en`?new Intl.DateTimeFormat(`en-GB`,{year:`numeric`,month:`short`,day:`2-digit`}).format(t):`${t.getDate()}. ${[`janúar`,`febrúar`,`mars`,`apríl`,`maí`,`júní`,`júlí`,`ágúst`,`september`,`október`,`nóvember`,`desember`][t.getMonth()]} ${t.getFullYear()}`}function fl(e){let t={confirmed:[],possible:[],early:[]},n=new Set,r=Xt(e);(r.length?r:vl(e)).forEach(e=>{let r=pl(e);r!==`excluded`&&(n.has(e.id)||(n.add(e.id),r===`confirmed`?t.confirmed.push(e):r===`possible`?t.possible.push(e):r===`early`&&t.early.push(e)))});let i=8;for(let e of[`confirmed`,`possible`,`early`]){let n=t[e].slice(0,i);t[e]=n,i=Math.max(0,i-n.length)}return t}function pl(e){let t=Jt(e);if(t!==`excluded`||e?.aiReviewFit||e?.ai_review_fit)return t;if(!hl(e))return`excluded`;if(Yt(e))return`confirmed`;let n=L(e);if(n===`confirmed_tender`)return`confirmed`;if(n===`early_opportunity`)return`early`;let r=I(e.qualityStatus,e);return r===`confirmed_tender`?`confirmed`:r===`early_signal`?`early`:`excluded`}function ml(e,t=`all_current`){return hl(e)?t===`new_only`?Ya(e)===`auto_approved`&&e.alertEligible!==!1:Ya(e)!==`hidden`:!1}function hl(e){if(!e||Rr(e)||Ya(e)===`hidden`||!Lr(e)||gl(e)||bl(e)||wl(e)||Tl(e)||Qr(e.title||``)&&!xl(e))return!1;let t=L(e);if(t===`confirmed_tender`)return xl(e)||Cl(e);if(t===`early_opportunity`)return Sl(e);let n=I(e.qualityStatus,e);return n===`confirmed_tender`?xl(e)||Cl(e):n===`early_signal`?Sl(e):!1}function gl(e){let t=e?.rawPayload||{},n=String(t.admin_report_status||``).toLowerCase();if(n===`include`)return!1;if(t.hidden_from_reports===!0||[`hidden`,`hide`,`noise`,`deleted`].includes(n)||_l(e)||Ur(e))return!0;let r=L(e);return r===`news_context`||r===`not_opportunity`}function _l(e={}){let t=e.rawPayload||{},n=String(t.canonical_opportunity_id||``);return t.is_duplicate===!0||!!t.duplicate_of||!!n&&!!e.id&&n!==String(e.id)}function vl(e){return[...e].sort((e,t)=>yl(e)-yl(t)||Number(Cl(t))-Number(Cl(e))||Number(xl(t))-Number(xl(e))||t.matchScore-e.matchScore||w(e.deadline)-w(t.deadline))}function yl(e){if(bl(e))return 99;let t=L(e);return t===`confirmed_tender`?0:t===`early_opportunity`?1:10}function bl(e){let t=R(e)?Br(e):String(e?.rawPayload?.tender_state||``).toLowerCase();return[`tender_awarded`,`awarded`,`already_tendered`].includes(t)?!0:B(z(e),[`lægstbjóðandi`,`laegstbjodandi`,`samningur gerður`,`samningur gerdur`,`samningur var`,`samið var`,`samid var`,`útboð hefur farið fram`,`utbod hefur farid fram`,`útboð var auglýst`,`utbod var auglyst`])}function xl(e){return B(z(e),[`útboð`,`utbod`,`útboðsauglýsing`,`utbodsauglysing`,`tilboð`,`tilbod`,`tilboðum`,`tilbodum`,`óskað eftir tilboðum`,`oskad eftir tilbodum`,`verðfyrirspurn`,`verdfyrirspurn`,`forval`,`skilafrestur`,`útboðsgögn`,`utbodsgogn`,`quote request`,`request for quote`,`tender`,`procurement`])}function Sl(e){return B(z(e),[`senn í útboð`,`senn i utbod`,`áætlað útboð`,`aaetlad utbod`,`áætlað er að bjóða út`,`aaetlad er ad bjoda ut`,`fyrirhugað útboð`,`fyrirhugad utbod`])}function Cl(e){let t=D(e?.source||``);return[`rikiskaup`,`ríkiskaup`,`utbodsvefur`,`útboðsvefur`,`ted`,`tenders electronic daily`,`procurement`,`tender portal`].some(e=>t.includes(D(e)))}function wl(e){return Dl(A.profile||{},e)}function Tl(e){return El(A.profile||{},e)}function El(e,t){return Ya(t)!==`needs_review`||!kl([...Array.isArray(t?.safetyReasons)?t.safetyReasons:[],...Array.isArray(t?.risks)?t.risks:[],...Array.isArray(t?.rawPayload?.safety_reasons)?t.rawPayload.safety_reasons:[],...Array.isArray(t?.rawPayload?.risks)?t.rawPayload.risks:[]].filter(Boolean).join(` `))?!1:!Ol(e)}function Dl(e,t){let n=z(t),r=B(n,[`for og verkhönnun`,`for og verkhonnun`,`verkhönnun`,`verkhonnun`,`forhönnun`,`forhonnun`,`verkfræðiráðgjöf`,`verkfraediradgjof`,`ráðgjöf`,`radgjof`,`umsjón`,`umsjon`,`verkefnastjórn`,`verkefnastjorn`,`útboðsgögn hönnun`,`utbodsgogn honnun`]),i=B(n,[`hönnun`,`honnun`]),a=B(n,[`lóðarframkvæmdir`,`lodarframkvaemdir`,`gatnagerð`,`gatnagerd`,`stígagerð`,`stigagerd`,`lagnir`,`regnvatnslagnir`,`jarðvinna`,`jardvinna`,`jarðvegsskipti`,`jardvegsskipti`,`fyllingar`,`grjóthleðsla`,`grjothledsla`,`malbikun`,`hellulögn`,`hellulogn`,`kantsteinar`,`landmótun`,`landmotun`,`yfirborðsfrágangur`,`yfirbordsfragangur`,`bílastæði`,`bilastaedi`]),o=B(n,[`eftirlit`,`umsjón`,`umsjon`,`verkefnastjórn`,`verkefnastjorn`])&&!a;return!r&&!(i&&!a)&&!o?!1:!Ol(e)}function Ol(e={}){return B([e.industry,...Array.isArray(e.services)?e.services:[],...Array.isArray(e.includeKeywords)?e.includeKeywords:[]].filter(Boolean).join(` `),[`hönnun`,`honnun`,`ráðgjöf`,`radgjof`,`verkfræðiráðgjöf`,`verkfraediradgjof`,`verkfræði`,`verkfraedi`,`eftirlit`,`verkefnastjórnun`,`verkefnastjornun`,`útboðsgögn`,`utbodsgogn`,`engineering`,`design`,`consulting`,`project management`,`supervision`])}function kl(e){return B(String(e||``),[`hönnun`,`honnun`,`ráðgjöf`,`radgjof`,`verkfræðiráðgjöf`,`verkfraediradgjof`,`eftirlit`,`umsjón`,`umsjon`,`verkefnastjórn`,`verkefnastjorn`,`design`,`consulting`,`supervision`,`inspection`,`project management`])}function Al(e){if(!e)return!1;let t=e.rawPayload||{};if(String(t.admin_report_status||``).toLowerCase()===`include`)return!0;if(gl(e))return!1;let n=String(t.tender_state||``).toLowerCase();return!([`tender_awarded`,`awarded`,`already_tendered`].includes(n)||Ur(e)||Qr(e.title||``)&&!Hr(z(e)))}function jl(e,t){return Ct({label:e,value:t,escapeHtml:O})}function Ml(e,t,n){return wt({title:e,description:t,opportunities:n,emptyText:A.language===`is`?`Engin atriði í þessum hluta.`:`No items in this section.`,renderOpportunityItem:Nl,escapeHtml:O})}function Nl(e){let t=!!e.estimatedValue,n={...e,matchReasons:It(e.matchReasons,A.language)},r=Wl(e).map(e=>Lt(e,A.language)).filter(Boolean),i=e.deadline?dl(e.deadline):k(`notFound`);return Tt({opp:n,valueText:t?Y(e.estimatedValue):k(`notListed`),deadlineText:i,sourceUrl:rn(e.url),risks:r,fallbackReason:A.language===`is`?`Passar við fyrirtækjaprófílinn.`:`Matches your company profile.`,qualityBadgeHtml:Pl(n),matchBadgeClass:Eo(e.matchLabel),matchLabel:Nt(e,A.language),statusText:Mt(A.language),buyerLabel:k(`buyer`),buyerValue:Rl(e),sourceLabel:k(`source`),sourceValue:Ll(`source`,e.source),areaLabel:k(`area`),areaValue:zl(e),deadlineLabel:k(`deadline`),valueLabel:k(`estimatedValue`),whyLabel:k(`whyThisMatters`),risksLabel:k(`risksToCheck`),openSourceLabel:k(`openSource`),sourceMissingLabel:k(`sourceLinkMissing`),formatReason:Hl,formatRisk:$,escapeHtml:O})}function Pl(e){return Et({status:`verify`,label:Ft(e,A.language),escapeHtml:O})}function Fl(e){return on(e,k)}function Il(e){return sn(e,k)}function Ll(e,t){return cn(e,t,k)}function Rl(e){let t=e?.source||e?.rawPayload?.source_name||``;return Ll(`buyer`,dn(e?.buyer,t,e?.rawPayload||{}))}function zl(e){return fn(e?.source||e?.rawPayload?.source_name||``)||Ll(`location`,e?.location)}function Bl(e,t){return mn(e,t,{language:A.language,translate:k})}function Vl(e){return pn(e,A.language,k)}function Hl(e){return It([hn(e,{language:A.language,translate:k})],A.language)[0]||``}function $(e){return Lt(gn(e,A.language),A.language)}function Ul(e){return _n(e,A.language)}function Wl(e){let t=Array.isArray(e.risks)&&e.risks.length?[...e.risks]:[`Open the source page and confirm mandatory requirements.`];return e.deadline||t.unshift(xo(e)),e.estimatedValue||t.push(`Estimated value is not listed in the imported data.`),I(e.qualityStatus,e)===`needs_review`&&t.push(R(e)?`Extracted project signal — verify tender timing in the source article.`:`Imported from broad feed — verify that this is a real tender or business opportunity.`),[...new Set(t.map(e=>String(e||``).trim()).filter(Boolean))]}function Gl(e,t){let n=fl(t),r=[...n.confirmed,...n.possible,...n.early];return`${k(`reportForCompany`,{company:e.companyName})}
${A.language===`is`?`Tímabil`:`Date range`}: ${Q(new Date(Date.now()-10080*60*1e3).toISOString().slice(0,10),new Date().toISOString().slice(0,10))}

${A.language===`is`?`Samantekt`:`Summary`}:
- ${C(`openActiveTitle`,A.language)}: ${n.confirmed.length}
- ${C(`possibleTitle`,A.language)}: ${n.possible.length}
- ${C(`earlyTitle`,A.language)}: ${n.early.length}

${r.length?r.map((e,t)=>`${t+1}. ${e.title}
${A.language===`is`?`Staða`:`Status`}: ${Pt(e,A.language)}
${k(`buyer`)}: ${Rl(e)}
${k(`source`)}: ${Ll(`source`,e.source)}
${k(`area`)}: ${zl(e)}
${k(`deadline`)}: ${bo(e)}
${k(`estimatedValue`)}: ${e.estimatedValue?Y(e.estimatedValue):k(`notListed`)}
${k(`whyThisMatters`)}:
${It(e.matchReasons.length?e.matchReasons:[`Matched to your company profile.`],A.language).map(e=>`- ${e}`).join(`
`)}
${k(`risksToCheck`)}:
${Wl(e).map(e=>`- ${Lt($(e),A.language)}`).join(`
`)}
${A.language===`is`?`Næsta skref`:`Next step`}:
${e.url?`${k(`openSource`)}: ${e.url}`:A.language===`is`?`Finnið og staðfestið upprunalega heimild áður en brugðist er við.`:`Find and verify the original source page before acting.`}
`).join(`
`):A.language===`is`?`Engin skýr útboð eða verðfyrirspurnir fundust fyrir þetta tímabil.`:`No report-ready matches were found for this period.`}

VerkRadar`}function Kl(e,t,n){let r=e.period_start||e.created_at?.slice(0,10)||new Date().toISOString().slice(0,10),i=e.period_end||e.created_at?.slice(0,10)||new Date().toISOString().slice(0,10),a=rl(e,t),o=ol(n),s=[...o.confirmed,...o.possible,...o.early,...o.review];return`${a}
${A.language===`is`?`Tímabil`:`Date range`}: ${Q(r,i)}

${s.length?s.map((e,t)=>`${t+1}. ${e.title}
${A.language===`is`?`Staða`:`Status`}: ${Pt(e,A.language)}
${k(`buyer`)}: ${Rl(e)}
${k(`source`)}: ${Ll(`source`,e.source)}
${k(`area`)}: ${zl(e)}
${k(`deadline`)}: ${bo(e)}
${k(`estimatedValue`)}: ${e.estimatedValue?Y(e.estimatedValue):k(`notListed`)}
${k(`whyThisMatters`)}:
${It(e.matchReasons.length?e.matchReasons:[`Matched to your company profile.`],A.language).map(e=>`- ${e}`).join(`
`)}
${k(`risksToCheck`)}:
${Wl(e).map(e=>`- ${Lt($(e),A.language)}`).join(`
`)}
${e.url?`${k(`openSource`)}: ${e.url}`:``}
`).join(`
`):A.language===`is`?`Engin atriði eru vistuð í þessu yfirliti.`:`No items are saved in this report.`}

${k(`reportFooter`)}`}async function ql(){let e=Gl(A.profile||wn(),cl());try{await navigator.clipboard.writeText(e),U(`Report copied`,`success`)}catch(e){console.error(`Failed to copy report:`,e),U(`Could not copy report`,`error`)}}function Jl(e=`report-preview`,t=``){let n=document.getElementById(e);if(!n){U(`No report available to export`,`error`);return}let r=A.profile||wn(),i=n.cloneNode(!0);i.classList.add(`pdf-compact-report`),i.querySelectorAll(`textarea, .report-close-btn`).forEach(e=>e.remove());let a=i.querySelector(`.report-meta-bar`);if(a){let e=a.querySelector(`div:first-child strong`)?.textContent?.trim()||k(`reportForCompany`,{company:t||r.companyName||`Company`}),n=a.querySelector(`div:last-child span`)?.textContent?.trim()||t||r.companyName||`Company`,i=a.querySelector(`div:last-child strong`)?.textContent?.trim()||``,o=document.querySelector(`.brand-logo`)?.src||document.querySelector(`link[rel="icon"]`)?.href||``;a.innerHTML=``;let s=document.createElement(`div`);s.className=`pdf-report-header-text`;let c=document.createElement(`span`);c.textContent=k(`generatedBy`);let l=document.createElement(`strong`);l.textContent=e||k(`reportForCompany`,{company:n});let u=document.createElement(`em`);if(u.textContent=i,s.append(c,l,u),a.appendChild(s),o){let e=document.createElement(`img`);e.className=`pdf-report-logo`,e.src=o,e.alt=`VerkRadar`,a.appendChild(e)}}let o=i.querySelector(`.report-summary-grid`);o&&o.remove();let s=n.querySelector(`.report-meta-bar div:last-child strong`)?.textContent||new Date().toISOString().slice(0,10),c=Xl(t||r.companyName||`company`,s),l=Array.from(document.querySelectorAll(`link[rel="stylesheet"]`)).map(e=>`<link rel="stylesheet" href="${O(e.href)}">`).join(``),u=window.open(``,`_blank`,`width=1100,height=900`);if(!u){U(`Allow popups to download the report PDF`,`error`);return}u.document.open(),u.document.write(`<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${O(c)}</title>
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
</html>`),u.document.close()}function Yl(){Jl(`admin-report-preview`,(A.selectedAdminReport?.id===A.selectedAdminReportId?A.selectedAdminReport:(A.adminReports||[]).find(e=>e.id===A.selectedAdminReportId))?.companies?.company_name||`Company`)}function Xl(e,t){return`VerkRadar-report-${Zl(e)||`company`}-${Zl(String(t||``).replace(/\s+to\s+/i,`-`))||new Date().toISOString().slice(0,10)}.pdf`}function Zl(e){return String(e||``).normalize(`NFD`).replace(/[\u0300-\u036f]/g,``).replace(/[^a-z0-9]+/gi,`-`).replace(/^-+|-+$/g,``).toLowerCase()}function Ql(){return Z(ut({t:k,escapeHtml:O,trialHref:`/trial`}))}function $l(){return Z(ft({t:k,escapeHtml:O,submitted:A.trialRequestSubmitted}))}function eu(){return A.user?A.profileLoading&&!A.profile&&!A.profileDraft?Z(`
      <section class="empty-state">
        <div class="loader-mark" aria-label="${O(A.language===`is`?`Hleð fyrirtækjaprófíl`:`Loading company profile`)}"></div>
        <h1>${O(A.language===`is`?`Hleð fyrirtækjaprófíl...`:`Loading company profile...`)}</h1>
        <p>${O(A.language===`is`?`Sæki vistaðan fyrirtækjaprófíl.`:`Checking your saved company profile.`)}</p>
        <button class="btn btn-secondary" type="button" data-action="retry-settings-profile">${O(A.language===`is`?`Reyna aftur`:`Retry`)}</button>
      </section>
    `):A.profileLoadError&&!A.profile&&!A.profileDraft?Z(`
      <section class="empty-state">
        <h1>${O(A.language===`is`?`Gat ekki hlaðið stillingum`:`Could not load Settings`)}</h1>
        <p>${O(A.profileLoadError)}</p>
        <button class="btn btn-primary" type="button" data-action="retry-settings-profile">${O(A.language===`is`?`Reyna aftur`:`Retry`)}</button>
      </section>
    `):!A.profile&&!A.profileDraft?Ko(k(`setupCompanyFirst`),A.language===`is`?`Stillingar eru tiltækar eftir að fyrirtækið hefur verið sett upp.`:`Settings are available after you set up your company.`):Z(Dt({t:k,escapeHtml:O,language:A.language,profileDraftDirty:A.profileDraftDirty,profileLoadError:A.profileLoadError,showDemoReset:tu(),profileFormHtml:Us()})):V()}function tu(){return!!(A.isAdmin||[`localhost`,`127.0.0.1`,``].includes(window.location.hostname))}Ni(),er();