(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={profile:`verkradar_profile`,saved:`verkradar_saved_opportunities`,ignored:`verkradar_ignored_opportunities`,language:`verkradar_language`,selectedPlan:`verkradar_selected_plan`},t={is:{navDashboard:`Mælaborð`,navReport:`Yfirlit`,navPricing:`Verðskrá`,navSettings:`Stillingar`,navHowItWorks:`Hvernig virkar þetta`,navSampleReport:`Sýnishorn`,login:`Innskráning`,logout:`Skrá út`,getStarted:`Fá prufu`,setupCompany:`Setja upp fyrirtæki`,createProfile:`Stofna prófíl`,companyProfile:`Fyrirtækjaprófíll`,noCompanyProfile:`Ekkert fyrirtæki`,openMenu:`Opna valmynd`,closeMenu:`Loka valmynd`,privacyPolicy:`Persónuvernd`,termsOfService:`Skilmálar`,dataSources:`Gagnaheimildir`,cookies:`Vafrakökur`,security:`Öryggi`,contact:`Hafa samband`,footerText:`Vöktun útboða og viðskiptatækifæra fyrir fyrirtæki. VerkRadar hjálpar ykkur að finna og yfirfara opinber tækifæri, en frumgögn eru alltaf endanleg heimild.`,loadingLabel:`Hleð VerkRadar`,heroEyebrow:`Útboðsgreind fyrir verktaka og þjónustufyrirtæki`,heroTitle:`Finnið verðmæt útboð áður en skilafresturinn rennur út.`,heroText:`VerkRadar vaktar opinberar heimildir og skilar stuttu yfirliti yfir tækifæri sem gætu passað við ykkar verkflokka og svæði.`,createFreeDemoProfile:`Fá prufuyfirlit`,viewSampleReport:`Skoða sýnishorn`,proofStrong:`Fyrir verktaka, iðnfyrirtæki og þjónustuaðila.`,proofText:`Vöktun á opinberum heimildum, sveitarfélögum og útboðsvefjum - sett fram sem forgangsraðað yfirlit.`,bestOpenMatch:`Stutt yfirlit`,tender:`Útboð`,deadlineRisk:`Rennur út fljótlega`,daysLeft:`{count} dagar eftir`,problemEyebrow:`Vandinn`,problemTitle:`Útboð tapast oft áður en tilboðsgerðin byrjar.`,problemOneTitle:`Útboð birtast á mörgum mismunandi stöðum.`,problemOneText:`Sveitarfélög, stofnanir og útboðsvefir birta tækifæri á ólíkum síðum og í ólíkum sniðum.`,problemTwoTitle:`Skilafrestir geta verið stuttir.`,problemTwoText:`Það tekur tíma að finna hvað passar við ykkar verkflokka, svæði og stærð verkefna.`,targetEyebrow:`Fyrir hverja?`,targetTitle:`Byggt fyrir íslensk fyrirtæki sem þurfa að finna rétt verkefni fyrr.`,targetText:`VerkRadar hentar fyrirtækjum sem vilja vakta útboð, verðfyrirspurnir og verkefnavísbendingar án þess að opna sömu vefi handvirkt á hverjum degi.`,solutionEyebrow:`Lausnin`,solutionTitle:`Eitt skýrt yfirlit í stað dreifðrar leitar.`,solutionText:`VerkRadar breytir útboðshávaða í forgangsraðaðan lista yfir möguleg tækifæri sem fyrirtækið ætti að skoða.`,createProfileStep:`1. Við setjum upp prófíl`,createProfileStepText:`Við skráum þjónustu, svæði, lykilorð og verkefnastærðir sem henta ykkur.`,matchProjectsStep:`2. Finna tækifæri`,matchProjectsStepText:`Kerfið metur hvaða tækifæri gætu passað við fyrirtækjaprófílinn.`,getReportStep:`3. Fáið yfirlit`,getReportStepText:`Fáið skýrt yfirlit með frestum, ástæðum samsvörunar og næstu skrefum.`,sampleReportEyebrow:`Sýnishorn`,sampleReportTitle:`Stuttlisti sem sýnir hvað er þess virði að skoða.`,sampleReportText:`Sýnishornið sýnir hvernig VerkRadar raðar útboðum og mögulegum tækifærum eftir þjónustu, svæði, fresti og ástæðum.`,sourceDisclaimer:`VerkRadar hjálpar til við að forgangsraða tækifærum. Upprunaleg útboðsgögn eru alltaf endanleg heimild.`,pricingEyebrow:`VERÐSKRÁ`,pricingHeadline:`Einföld verðskrá fyrir útboðsvöktun`,pricingSubtitle:`Byrjaðu í prufu. Við setjum upp prófíl fyrir fyrirtækið og sendum yfirlit ef viðeigandi tækifæri finnast.`,pricingTrialPlan:`Ókeypis prufa`,pricingTrialPrice:`0 kr.`,pricingTrialSubtext:`í prufu`,pricingMonitoringPlan:`Grunnur`,pricingMonitoringPrice:`9.900 kr/mán.`,pricingMonitoringSubtext:`fyrir fyrstu fyrirtækin`,pricingCustomPlan:`Sérsniðið`,pricingCustomPrice:`Hafa samband`,pricingBadge:`Hentar flestum fyrirtækjum`,pricingTrialCta:`Fá prufuyfirlit`,pricingMonitoringCta:`Fá prufu`,pricingCustomCta:`Hafa samband`,pricingTrialManualProfile:`Fyrirtækjaprófíll settur upp handvirkt`,pricingTrialFiltering:`Síun eftir þjónustu og svæði`,pricingTrialReportIfRelevant:`Prufuyfirlit sent ef viðeigandi tækifæri finnast`,pricingTrialNoCommitment:`Engin binding`,pricingTrialNoCard:`Engin greiðslukort`,pricingMonitoringSources:`Vöktun á opinberum útboðum og tækifærum`,pricingMonitoringEmail:`Stutt yfirlit sent í tölvupósti`,pricingMonitoringFilters:`Síun eftir þjónustu, svæði og leitarorðum`,pricingMonitoringReminders:`Áminningar um mikilvæg skilafresti`,pricingMonitoringFeedback:`Prófíll uppfærður eftir endurgjöf`,pricingOneProfile:`1 fyrirtækjaprófíll`,pricingCustomProfiles:`Fleiri fyrirtækjaprófílar`,pricingCustomServices:`Fleiri þjónustusvið eða svæði`,pricingCustomMonitoring:`Sérstillt vöktun`,pricingCustomPriorityReview:`Forgangsyfirferð`,pricingCustomAudience:`Fyrir stærri verktaka eða þjónustufyrirtæki`,trialRequestEyebrow:`PRUFA`,trialRequestTitle:`Fá prufuyfirlit`,trialRequestSubtitle:`Segðu okkur aðeins frá fyrirtækinu. Við skoðum upplýsingarnar og setjum upp prufuprófíl ef þetta passar.`,trialCompany:`Fyrirtæki`,trialContact:`Tengiliður`,trialEmail:`Netfang`,trialPhone:`Sími`,trialServices:`Hvaða þjónustu bjóðið þið?`,trialRegions:`Hvaða svæði viljið þið fylgjast með?`,trialNotes:`Athugasemd`,trialRequestHelper:`Við skoðum upplýsingarnar og setjum upp prufuprófíl ef þetta passar.`,trialRequestSubmit:`Senda beiðni`,trialRequestSuccess:`Takk fyrir. Við skoðum upplýsingarnar og höfum samband ef VerkRadar passar við ykkar þjónustu.`,trialRequestError:`Gat ekki sent beiðni. Reynið aftur eða sendið okkur tölvupóst.`,publicSignupUnavailableTitle:`Aðgangur er stofnaður í gegnum boð`,publicSignupUnavailableText:`Viltu fá prufu? Fylltu út formið hér.`,publicSignupUnavailableHelp:`VerkRadar er sett upp handvirkt fyrir prufufyrirtæki. Við stofnum aðgang þegar fyrirtækjaprófíllinn er tilbúinn.`,tryDemoTitle:`Prófið sýnimælaborðið.`,tryDemoText:`Hlaðið sýnifyrirtæki og sjáið hvernig tækifærin raðast.`,loadDemoCompany:`Hlaða sýnifyrirtæki`,authLoginTitle:`Skrá inn í VerkRadar`,authLoginSubtitle:`Fáið aðgang að mælaborði, vistuðum tækifærum og vikuyfirlitum.`,email:`Netfang`,password:`Lykilorð`,forgotPassword:`Gleymt lykilorð?`,loggingIn:`Skrái inn...`,newToVerkRadar:`Ný hjá VerkRadar?`,createAccount:`Stofna aðgang`,createAccountTitle:`Stofna VerkRadar aðgang`,createAccountSubtitle:`Byrjið á að stofna aðgang. Síðan stofnið þið fyrirtækjaprófíl.`,inviteCreateAccountSubtitle:`Stofnaðu aðgang til að tengjast fyrirtækjaprófílnum sem hefur þegar verið settur upp.`,authRequiredTitle:`Skráðu þig inn til að halda áfram`,authRequiredText:`Þessi síða er aðgengileg eftir innskráningu.`,alreadyLoggedInTitle:`Þú ert þegar skráð(ur) inn`,alreadyLoggedInText:`Beini þér á næsta skref.`,signupCreatedConfirm:`Aðgangur stofnaður. Athugaðu tölvupóstinn þinn til að staðfesta aðganginn.`,inviteSignupCreatedConfirm:`Staðfestu netfangið í tölvupósti og komdu svo aftur til að virkja aðganginn.`,inviteSignupEmailHelp:`Notaðu boðna netfangið til að tengja aðganginn við rétt fyrirtæki.`,signupExistingAccount:`Þetta netfang er þegar með aðgang. Skráðu þig inn eða endurstilltu lykilorð.`,signupNeutralNextSteps:`Ef aðgangur er til fyrir þetta netfang færðu tölvupóst með næstu skrefum. Annars hefur nýr aðgangur verið stofnaður.`,emailOrPasswordIncorrect:`Netfang eða lykilorð er rangt.`,confirmEmailBeforeLogin:`Staðfestu netfangið þitt áður en þú skráir þig inn.`,passwordTooShort:`Lykilorð þarf að vera að minnsta kosti 6 stafir.`,tooManyAttempts:`Of margar tilraunir. Bíddu aðeins og reyndu aftur.`,couldNotCreateAccount:`Gat ekki stofnað aðgang. Athugaðu netfang og lykilorð.`,couldNotLogin:`Gat ekki skráð þig inn. Reyndu aftur.`,creating:`Stofna...`,alreadyHaveAccount:`Ertu þegar með aðgang?`,passwordReset:`Endurstilla lykilorð`,resetPasswordTitle:`Endurstilla lykilorð`,resetPasswordSubtitle:`Sláið inn netfang og VerkRadar sendir öruggan hlekk ef aðgangur er til.`,sending:`Sendi...`,sendResetLink:`Senda hlekk`,rememberedPassword:`Manstu lykilorðið?`,backToLogin:`Til baka í innskráningu`,newPassword:`Nýtt lykilorð`,chooseNewPassword:`Veldu nýtt lykilorð`,resetPasswordHelp:`Settu nýtt lykilorð fyrir VerkRadar aðganginn. Ef hlekkurinn er útrunninn skaltu biðja um nýjan.`,confirmNewPassword:`Staðfesta nýtt lykilorð`,updating:`Uppfæri...`,updatePassword:`Uppfæra lykilorð`,needNewLink:`Þarftu nýjan hlekk?`,sendAnotherResetLink:`Senda annan hlekk`,onboarding:`UPPSETNING`,onboardingTitle:`Settu upp fyrirtækið`,onboardingText:`Segðu okkur hvað fyrirtækið gerir svo VerkRadar geti fundið viðeigandi tækifæri.`,companyBasics:`1. Grunnupplýsingar`,accountAccess:`Aðgangur`,loginEmail:`Innskráningarnetfang`,loginEmailHelper:`Innskráningarnetfangið er tengt notandaaðganginum og getur verið annað en tengiliðanetfang eða netfang fyrir reikninga fyrirtækisins.`,companyName:`Fyrirtækisnafn`,kennitala:`Kennitala`,contactEmail:`Tengiliðanetfang`,billingEmail:`Netfang fyrir reikninga`,contactName:`Nafn tengiliðar`,phone:`Sími`,address:`Heimilisfang`,website:`Vefsíða`,industry:`Atvinnugrein`,selectIndustry:`Veldu atvinnugrein`,selectedPlan:`Valin áskrift`,plan_basic:`Grunnur`,plan_pro:`Pro`,plan_priority:`Forgangur`,servicesAndKeywords:`2. Þjónustur og leitarorð`,servicesHint:`Bætið við þjónustu sem þið bjóðið raunverulega upp á. Veldu mikilvægustu atriðin fyrst.`,servicesLabel:`Þjónustur`,servicesHelper:`Skráið þjónustuna sem fyrirtækið selur. Nákvæmari þjónusta gefur betri samsvaranir.`,extraWords:`Leitarorð`,includeKeywordsHelper:`Notið orð sem birtast oft í tækifærum sem þið viljið fá.`,excludeWords:`Orð sem ættu að lækka eða fjarlægja slæmar samsvaranir.`,excludeKeywordsHelper:`Orð sem ættu að lækka eða fjarlægja slæmar samsvaranir.`,suggestedServicesFor:`Tillögur að þjónustu fyrir {industry}`,suggestedKeywordsFor:`Tillögur að leitarorðum fyrir {industry}`,selectIndustryForServices:`Veljið atvinnugrein til að sjá þjónustutillögur`,selectIndustryForKeywords:`Veljið atvinnugrein til að sjá leitarorðatillögur`,locationsTitle:`3. Svæði`,locationsHint:`Notið Allt landið fyrir landsdekkandi útboð. Notið ferðastillingar ef þið getið boðið utan heimasvæðis fyrir rétt verkefni.`,baseLocation:`Heimasvæði`,baseLocationPlaceholder:`Dæmi: Austurland`,serviceAreas:`Þjónustusvæði, aðskilin með kommu`,serviceAreasPlaceholder:`Dæmi: Austurland, Allt landið`,travelScope:`Ferðir og umfang`,willingToTravel:`Tilbúin að ferðast fyrir rétt verkefni`,includeNational:`Sýna landsdekkandi tækifæri`,includeRemote:`Sýna fjarvinnu / netverkefni`,minimumTravelValue:`Lágmarksverðmæti fyrir ferðalög`,projectSize:`4. Stillingar`,minimumValue:`Lágmarksverðmæti`,maximumValue:`Hámarksverðmæti`,showUnknownValue:`Sýna tækifæri þó verðmæti vanti`,reportPreferences:`Yfirlitsstillingar`,frequency:`Tíðni`,weekly:`Vikulega`,daily:`Daglega`,reportDay:`Dagur yfirlits`,deadlineReminders:`Áminningar um skilafresti`,includeLowConfidence:`Sýna óvissar samsvaranir`,saveProfile:`Vista prófíl`,saving:`Vista...`,saved:`Vistað`,dashboard:`Mælaborð`,welcomeCompany:`Velkomin, {company}`,dashboardIntro:`Forgangsraðaðar tækifærasamsvaranir út frá þjónustu, svæðum og leitarorðum. {refresh}`,matchesLastRefreshed:`Síðast uppfært {time}.`,matchesAutoRefresh:`Samsvaranir uppfærast sjálfkrafa eftir vistun prófíls.`,refreshMatches:`Uppfæra samsvaranir`,refreshing:`Uppfæri...`,viewWeeklyReport:`Skoða yfirlit`,strongMatches:`Sterkar samsvaranir`,closingSoon:`Rennur út fljótlega`,savedLabel:`Vistað`,totalPotentialValue:`Áætlað heildarverðmæti`,searchOpportunities:`Leita í tækifærum...`,savedOnly:`Aðeins vistað`,improveProfile:`Bæta prófíl`,includeNationalOpportunities:`Sýna landsdekkandi tækifæri`,showAllStoredMatches:`Sýna allar samsvaranir`,inspectAllOpportunities:`Skoða öll tækifæri`,details:`Nánar`,save:`Vista`,ignore:`Hunsa`,originalLanguage:`Upprunalegt tungumál`,extractedProject:`Útdregið verkefni`,reportTitle:`Útboðs- og verkefnayfirlit`,setupCompanyFirst:`Settu fyrst upp fyrirtækið`,reportNeedsProfile:`Yfirlitið þarf fyrirtækjaprófíl til að geta fundið viðeigandi tækifæri.`,dashboardNeedsProfile:`Mælaborðið þarf fyrirtækjaprófíl til að reikna viðeigandi samsvaranir.`,weeklyReport:`Yfirlit`,saveReport:`Vista yfirlit`,savingReport:`Vista...`,downloadPdf:`Sækja PDF`,copyReport:`Afrita yfirlit`,reportArchive:`Yfirlitssafn`,savedReports:`Vistuð yfirlit`,loadingSavedReports:`Hleð vistuð yfirlit...`,noSavedReports:`Engin vistuð yfirlit enn.`,viewReport:`Skoða yfirlit`,closeReport:`Loka yfirliti`,generatedBy:`Útbúið af VerkRadar`,reportForCompany:`Útboðs- og verkefnayfirlit fyrir {company}`,openTenders:`Opin útboð / verðfyrirspurnir`,upcomingOpportunities:`Möguleg væntanleg tækifæri`,openTendersDescription:`Skýr útboðs- eða verðfyrirspurnarmerki. Yfirfarið frumgögn áður en brugðist er við.`,upcomingDescription:`Væntanleg útboðs- eða verkefnamerki með skýrum vísbendingum.`,reportFooter:`VerkRadar hjálpar til við að forgangsraða yfirferð opinberra tækifæra. Staðfestið alltaf útboðsgögn, skilafresti, kröfur og hæfi á upprunalegri heimild áður en brugðist er við.`,buyer:`Kaupandi`,source:`Heimild`,description:`Lýsing`,requirements:`Kröfur`,noSpecificRequirements:`Engar sérstakar kröfur skráðar.`,noDescription:`Engin lýsing tiltæk.`,noMatchReasons:`Engar ástæður samsvörunar tiltækar.`,matchReasons:`Ástæður samsvörunar`,opportunityInfo:`Upplýsingar um tækifæri`,extraction:`Útdráttur`,sourceArticle:`Heimildargrein`,parentArticle:`Upprunagrein`,openSourceArticle:`Opna heimildargrein`,extractedRegion:`Útdregið svæði`,projectNumber:`Verknúmer`,tenderState:`Staða útboðs`,quality:`Gæði`,category:`Flokkur`,type:`Tegund`,published:`Birt`,cpv:`CPV`,recommendedNextSteps:`Ráðlögð næstu skref`,noMajorRisks:`Engar stórar áhættur greindar í þessum gögnum.`,openSourceAndConfirm:`Opnið upprunalega heimild og staðfestið hæfi.`,removeFromSaved:`Fjarlægja úr vistuðum`,saveOpportunity:`Vista tækifæri`,markNotRelevant:`Merkja sem ekki viðeigandi`,publicProcurement:`Opinbert útboð`,area:`Svæði`,deadline:`Skilafrestur`,estimatedValue:`Áætlað verðmæti`,notFound:`Fannst ekki`,notListed:`Ekki gefið upp`,unknownBuyer:`Óþekktur kaupandi`,allIceland:`Allt landið`,whyThisMatters:`Af hverju þetta gæti skipt máli`,risksToCheck:`Atriði til að staðfesta`,openSource:`Opna heimild`,sourceLinkMissing:`Heimildartengil vantar`,strongMatch:`Sterk samsvörun`,goodMatch:`Góð samsvörun`,possibleMatch:`Möguleg samsvörun`,weakMatch:`Veik samsvörun`,confirmedTender:`Staðfest útboð`,likelyOpportunity:`Líklegt tækifæri`,earlySignal:`Væntanlegt tækifæri`,needsReview:`Þarfnast staðfestingar`,tenderAwarded:`Útboði lokið / samið`,tenderAlreadyAnnounced:`Útboð þegar auglýst`,upcomingTender:`Væntanlegt útboð`,projectSignal:`Verkefnavísbending`,nationalOpportunity:`Landsdekkandi tækifæri`,localMatch:`Staðbundin samsvörun`,mentionsService:`Nefnir þjónustu ykkar: {value}`,containsKeyword:`Inniheldur leitarorð: {value}`,procurement:`innkaup`},en:{navDashboard:`Dashboard`,navReport:`Report`,navPricing:`Pricing`,navSettings:`Settings`,navHowItWorks:`How it works`,navSampleReport:`Sample report`,login:`Login`,logout:`Logout`,getStarted:`Get a trial`,setupCompany:`Set up company`,createProfile:`Create profile`,companyProfile:`Company profile`,noCompanyProfile:`No company`,openMenu:`Open menu`,closeMenu:`Close menu`,privacyPolicy:`Privacy`,termsOfService:`Terms`,dataSources:`Data sources`,cookies:`Cookies`,security:`Security`,contact:`Contact`,footerText:`Tender and opportunity monitoring for businesses. VerkRadar helps you find and review public opportunities, but source documents remain the authority.`,loadingLabel:`Loading VerkRadar`,heroEyebrow:`Tender intelligence for working contractors`,heroTitle:`Stop losing valuable jobs to tabs you never opened.`,heroText:`VerkRadar monitors public sources and returns a short report of opportunities that may fit your trades and service areas.`,createFreeDemoProfile:`Get a trial report`,viewSampleReport:`View sample report`,proofStrong:`Contractors find relevant opportunities faster.`,proofText:`Top matches often include tenders outside the main databases.`,bestOpenMatch:`Shortlist`,tender:`Tender`,deadlineRisk:`Deadline risk`,daysLeft:`{count} days left`,problemEyebrow:`The problem`,problemTitle:`Opportunities are often lost before bidding starts.`,problemOneTitle:`Deadlines show up after your crew is already booked.`,problemOneText:`A short response window becomes a scramble, or a valuable contract never gets priced.`,problemTwoTitle:`The search takes longer than the go/no-go call.`,problemTwoText:`Owners spend hours opening low-fit tenders instead of seeing value, location, requirements and match reasons in one view.`,targetEyebrow:`Who it is for`,targetTitle:`Built for Icelandic companies that need to find the right jobs earlier.`,targetText:`VerkRadar is for teams that want to monitor tenders, quote requests and project signals without checking the same websites manually every day.`,solutionEyebrow:`The solution`,solutionTitle:`One clear report instead of scattered searching.`,solutionText:`VerkRadar turns tender noise into a ranked list of possible opportunities your business should review.`,createProfileStep:`1. We set up a profile`,createProfileStepText:`We register the services, regions, keywords and project sizes that fit your company.`,matchProjectsStep:`2. Find opportunities`,matchProjectsStepText:`The system checks which opportunities may fit the company profile.`,getReportStep:`3. Get report`,getReportStepText:`Receive a clear weekly report with deadlines and next steps.`,sampleReportEyebrow:`Sample report`,sampleReportTitle:`A shortlist that shows what is worth checking.`,sampleReportText:`Preview how VerkRadar ranks tenders and possible opportunities by service, region, deadline and reasons.`,sourceDisclaimer:`VerkRadar helps prioritize opportunity review. Original tender documents are always the final authority.`,pricingEyebrow:`PRICING`,pricingHeadline:`Simple pricing for tender monitoring`,pricingSubtitle:`Start with a trial. We set up a company profile and send a report if relevant opportunities are found.`,pricingTrialPlan:`Free trial`,pricingTrialPrice:`0 kr.`,pricingTrialSubtext:`during trial`,pricingMonitoringPlan:`VerkRadar Monitoring`,pricingMonitoringPrice:`9,900 kr/month`,pricingMonitoringSubtext:`for the first companies`,pricingCustomPlan:`Custom`,pricingCustomPrice:`Contact us`,pricingBadge:`Best for most businesses`,pricingTrialCta:`Get trial report`,pricingMonitoringCta:`Get a trial`,pricingCustomCta:`Contact us`,pricingTrialManualProfile:`Company profile set up manually`,pricingTrialFiltering:`Filtering by services and regions`,pricingTrialReportIfRelevant:`Trial report sent if relevant opportunities are found`,pricingTrialNoCommitment:`No commitment`,pricingTrialNoCard:`No credit card`,pricingMonitoringSources:`Monitoring of public tenders and opportunities`,pricingMonitoringEmail:`Short report sent by email`,pricingMonitoringFilters:`Filtering by services, regions and keywords`,pricingMonitoringReminders:`Reminders for important deadlines`,pricingMonitoringFeedback:`Profile updated based on feedback`,pricingOneProfile:`1 company profile`,pricingCustomProfiles:`More company profiles`,pricingCustomServices:`More service areas or regions`,pricingCustomMonitoring:`Custom monitoring`,pricingCustomPriorityReview:`Priority review`,pricingCustomAudience:`For larger contractors or service companies`,trialRequestEyebrow:`TRIAL`,trialRequestTitle:`Get a trial report`,trialRequestSubtitle:`Tell us a little about your company. We will review the information and set up a trial profile if this fits.`,trialCompany:`Company`,trialContact:`Contact person`,trialEmail:`Email`,trialPhone:`Phone`,trialServices:`What services do you provide?`,trialRegions:`Which regions do you want to monitor?`,trialNotes:`Notes`,trialRequestHelper:`We will review the information and set up a trial profile if this fits.`,trialRequestSubmit:`Send request`,trialRequestSuccess:`Thanks. We will review the information and follow up if VerkRadar fits your services.`,trialRequestError:`Could not submit the request. Please try again or email us.`,publicSignupUnavailableTitle:`Accounts are created through an invite`,publicSignupUnavailableText:`Want a trial? Fill out the form here.`,publicSignupUnavailableHelp:`VerkRadar is set up manually for trial companies. We create access when the company profile is ready.`,tryDemoTitle:`Try the demo dashboard now.`,tryDemoText:`Load a sample company profile and see how the matching works.`,loadDemoCompany:`Load demo company`,authLoginTitle:`Login to VerkRadar`,authLoginSubtitle:`Access your company dashboard, saved opportunities and weekly reports.`,email:`Email`,password:`Password`,forgotPassword:`Forgot password?`,loggingIn:`Logging in...`,newToVerkRadar:`New to VerkRadar?`,createAccount:`Create account`,createAccountTitle:`Create your VerkRadar account`,createAccountSubtitle:`Start by creating an account. Then you’ll create your company profile.`,inviteCreateAccountSubtitle:`Create an account to connect to the company profile that has already been set up.`,authRequiredTitle:`Log in to continue`,authRequiredText:`This page is available after you sign in.`,alreadyLoggedInTitle:`Already logged in`,alreadyLoggedInText:`Redirecting you to the next step.`,signupCreatedConfirm:`Account created. Check your email to confirm your account.`,inviteSignupCreatedConfirm:`Confirm your email, then return here to activate company access.`,inviteSignupEmailHelp:`Use the invited email to connect your login to the right company.`,signupExistingAccount:`This email already has an account. Log in or reset your password.`,signupNeutralNextSteps:`If an account exists for this email, you’ll receive an email with next steps. Otherwise, a new account has been created.`,emailOrPasswordIncorrect:`Email or password is incorrect.`,confirmEmailBeforeLogin:`Please confirm your email before logging in.`,passwordTooShort:`Password must be at least 6 characters.`,tooManyAttempts:`Too many attempts. Please wait a moment and try again.`,couldNotCreateAccount:`Could not create account. Please check your email and password.`,couldNotLogin:`Could not log in. Please try again.`,creating:`Creating...`,alreadyHaveAccount:`Already have an account?`,passwordReset:`Password reset`,resetPasswordTitle:`Reset your password`,resetPasswordSubtitle:`Enter your email and VerkRadar will send a secure reset link if the account exists.`,sending:`Sending...`,sendResetLink:`Send reset link`,rememberedPassword:`Remembered your password?`,backToLogin:`Back to login`,newPassword:`New password`,chooseNewPassword:`Choose a new password`,resetPasswordHelp:`Set a new password for your VerkRadar account. If the link has expired, request a new reset link.`,confirmNewPassword:`Confirm new password`,updating:`Updating...`,updatePassword:`Update password`,needNewLink:`Need a new link?`,sendAnotherResetLink:`Send another reset link`,onboarding:`SETUP`,onboardingTitle:`Set up your company`,onboardingText:`Tell us what your company does so VerkRadar can find relevant opportunities.`,companyBasics:`1. Basic information`,accountAccess:`Account access`,loginEmail:`Login email`,loginEmailHelper:`The login email is tied to the user account and may differ from the company contact or billing email.`,companyName:`Company name`,kennitala:`Kennitala`,contactEmail:`Contact email`,billingEmail:`Billing email`,contactName:`Contact name`,phone:`Phone`,address:`Address`,website:`Website`,industry:`Industry`,selectIndustry:`Select industry`,selectedPlan:`Selected plan`,plan_basic:`Basic`,plan_pro:`Pro`,plan_priority:`Priority`,servicesAndKeywords:`2. Services and keywords`,servicesHint:`Add services you actually provide. Start with the most important ones.`,servicesLabel:`Services`,servicesHelper:`Add the services your company actually sells. More specific services create better matches.`,extraWords:`Keywords`,includeKeywordsHelper:`Use words that often appear in opportunities you want.`,excludeWords:`Words that should lower or remove bad matches.`,excludeKeywordsHelper:`Words that should lower or remove bad matches.`,suggestedServicesFor:`Suggested services for {industry}`,suggestedKeywordsFor:`Suggested keywords for {industry}`,selectIndustryForServices:`Select an industry to see service suggestions`,selectIndustryForKeywords:`Select an industry to see keyword suggestions`,locationsTitle:`3. Locations`,locationsHint:`Use All Iceland for national tenders. Use travel settings when you can bid outside your base area for the right project size.`,baseLocation:`Base location`,baseLocationPlaceholder:`Example: East Iceland`,serviceAreas:`Service areas, comma separated`,serviceAreasPlaceholder:`Example: East Iceland, All Iceland`,travelScope:`Travel and scope`,willingToTravel:`Willing to travel for the right project`,includeNational:`Include national / All Iceland opportunities`,includeRemote:`Include remote / online opportunities`,minimumTravelValue:`Minimum project value for travel`,projectSize:`4. Settings`,minimumValue:`Minimum value`,maximumValue:`Maximum value`,showUnknownValue:`Show opportunities even if value is unknown`,reportPreferences:`Report preferences`,frequency:`Frequency`,weekly:`Weekly`,daily:`Daily`,reportDay:`Report day`,deadlineReminders:`Deadline reminders`,includeLowConfidence:`Include low-confidence matches`,saveProfile:`Save profile`,saving:`Saving...`,saved:`Saved`,dashboard:`Dashboard`,welcomeCompany:`Welcome, {company}`,dashboardIntro:`Ranked project opportunities based on your services, locations and keywords. {refresh}`,matchesLastRefreshed:`Last refreshed {time}.`,matchesAutoRefresh:`Matches refresh automatically after profile saves.`,refreshMatches:`Refresh matches`,refreshing:`Refreshing...`,viewWeeklyReport:`View report`,strongMatches:`Strong matches`,closingSoon:`Closing soon`,savedLabel:`Saved`,totalPotentialValue:`Total potential value`,searchOpportunities:`Search opportunities...`,savedOnly:`Saved only`,improveProfile:`Improve profile`,includeNationalOpportunities:`Include national opportunities`,showAllStoredMatches:`Show all matches`,inspectAllOpportunities:`Inspect all opportunities`,details:`Details`,save:`Save`,ignore:`Ignore`,originalLanguage:`Original language`,extractedProject:`Extracted project`,reportTitle:`Tender and opportunity report`,setupCompanyFirst:`Set up your company first`,reportNeedsProfile:`The report needs a company profile before it can generate relevant opportunity matches.`,dashboardNeedsProfile:`The dashboard needs a company profile so it can calculate relevant opportunity matches.`,weeklyReport:`Report`,saveReport:`Save report`,savingReport:`Saving...`,downloadPdf:`Download PDF`,copyReport:`Copy report`,reportArchive:`Report archive`,savedReports:`Saved reports`,loadingSavedReports:`Loading saved reports...`,noSavedReports:`No saved reports yet.`,viewReport:`View report`,closeReport:`Close report`,generatedBy:`Generated by VerkRadar`,reportForCompany:`Tender and opportunity report for {company}`,openTenders:`Open tenders / quote requests`,upcomingOpportunities:`Possible upcoming opportunities`,openTendersDescription:`Clear procurement intent. Review source documents before acting.`,upcomingDescription:`Upcoming procurement or project signals with clear evidence.`,reportFooter:`VerkRadar helps prioritise public opportunity review. Always check the original source documents, deadlines, requirements and eligibility before acting.`,buyer:`Buyer`,source:`Source`,description:`Description`,requirements:`Requirements`,noSpecificRequirements:`No specific requirements listed.`,noDescription:`No description available.`,noMatchReasons:`No match reasons available.`,matchReasons:`Match reasons`,opportunityInfo:`Opportunity info`,extraction:`Extraction`,sourceArticle:`Source article`,parentArticle:`Parent article`,openSourceArticle:`Open source article`,extractedRegion:`Extracted region`,projectNumber:`Project number`,tenderState:`Tender state`,quality:`Quality`,category:`Category`,type:`Type`,published:`Published`,cpv:`CPV`,recommendedNextSteps:`Recommended next steps`,noMajorRisks:`No major risks detected in this data.`,openSourceAndConfirm:`Open the source notice and confirm eligibility.`,removeFromSaved:`Remove from saved`,saveOpportunity:`Save opportunity`,markNotRelevant:`Mark not relevant`,publicProcurement:`Public procurement`,area:`Location`,deadline:`Deadline`,estimatedValue:`Estimated value`,notFound:`Not found`,notListed:`Not listed`,unknownBuyer:`Unknown buyer`,allIceland:`All Iceland`,whyThisMatters:`Why this matters`,risksToCheck:`Risks / things to check`,openSource:`Open source`,sourceLinkMissing:`Source link missing`,strongMatch:`Strong match`,goodMatch:`Good match`,possibleMatch:`Possible match`,weakMatch:`Weak match`,confirmedTender:`Confirmed tender`,likelyOpportunity:`Likely opportunity`,earlySignal:`Early signal`,needsReview:`Needs review`,tenderAwarded:`Tender awarded`,tenderAlreadyAnnounced:`Tender already announced`,upcomingTender:`Upcoming tender`,projectSignal:`Project signal`,nationalOpportunity:`National opportunity`,localMatch:`Local match`,mentionsService:`Mentions your service: {value}`,containsKeyword:`Contains your keyword: {value}`,procurement:`procurement`}};function n(e){let t=localStorage.getItem(e.language);return t===`en`||t===`is`?t:`is`}function r(e,n,r={}){let i=t[e||`is`]||t.is,a=t.en[n]||t.is[n]||n;return String(i[n]||a).replace(/\{(\w+)\}/g,(e,t)=>r[t]??``)}var i=`https://verkradar.is`;function a(){if(typeof window>`u`)return i;let e=c(window.VERKRADAR_APP_URL);if(e)return e;let t=window.location?.origin||`https://verkradar.is`,n=window.location?.hostname||``;return l(n)?t:n===`verkradar.is`||n===`www.verkradar.is`||n.endsWith(`.vercel.app`)?i:t}function o(e=`/`){let t=String(e||`/`).startsWith(`/`)?String(e||`/`):`/${e}`;return`${a()}${t}`}function s(e=`/`){let t=String(e||`/`).startsWith(`/`)?String(e||`/`):`/${e}`;return`${a()}/#${t}`}function c(e){let t=String(e||``).trim();if(!t)return``;try{return new URL(t).origin}catch{return``}}function l(e){return[`localhost`,`127.0.0.1`,`::1`].includes(String(e||``).toLowerCase())}var u={services:{Electrical:[`raflagnir`,`rafvirki`,`brunakerfi`,`öryggiskerfi`,`lýsing`,`viðhald`,`þjónusta`,`hleðslustöðvar`,`töflusmíði`,`rafmagnseftirlit`],"IT / Web / Software":[`vefsíðugerð`,`vefhönnun`,`hugbúnaðarþróun`,`kerfisþróun`,`vefverslun`,`aðgengi`,`CMS`,`gagnagrunnar`,`viðhald`,`ráðgjöf`],Cleaning:[`Office cleaning`,`School cleaning`,`Facility cleaning`,`Window cleaning`,`Deep cleaning`,`Floor care`,`Municipal cleaning`,`Regular cleaning contracts`],Transport:[`Passenger transport`,`Goods transport`,`Healthcare transport`,`School transport`,`Shuttle services`,`Delivery services`,`Framework transport services`],Construction:[`jarðvinna`,`gatnagerð`,`vegagerð`,`malbikun`,`brúargerð`,`lagnavinna`,`framkvæmdir`,`viðhald`,`steypa`,`húsbyggingar`,`þakvinna`]},includeKeywords:{Electrical:[`rafmagn`,`rafvirki`,`brunakerfi`,`hleðslustöð`,`öryggiskerfi`,`myndavélakerfi`,`lýsing`,`viðhald`,`lagnir`,`neyðarlýsing`]}},d={companyName:`RafFix ehf.`,contactEmail:`owner@raffix.is`,website:`https://raffix.is`,industry:`Electrical`,services:[`electrical installation`,`maintenance`,`fire alarm systems`,`EV chargers`],includeKeywords:[`charging`,`inspection`,`public buildings`],excludeKeywords:[`telecom`,`snow removal`],locations:[`Reykjavík`,`Capital Area`,`Suðurnes`,`Remote / Online`],minProjectValue:5e5,maxProjectValue:3e7,allowUnknownValue:!0,reportFrequency:`weekly`,reportDay:`monday`,deadlineReminders:!0,includeLowConfidence:!1,autoAlertMode:`auto_safe_only`};function f(e=``){return{companyName:``,kennitala:``,contactEmail:e||``,billingEmail:e||``,contactName:``,phone:``,address:``,website:``,industry:``,selectedPlan:`basic`,billingStatus:`trial`,trialStartedAt:``,trialEndsAt:``,services:[],includeKeywords:[],excludeKeywords:[],locations:[],baseLocation:``,serviceAreas:[],willingToTravel:!1,nationalProjects:!1,remoteProjects:!1,minimumProjectValueForTravel:``,minProjectValue:``,maxProjectValue:``,allowUnknownValue:!0,reportFrequency:`weekly`,reportDay:`monday`,deadlineReminders:!0,includeLowConfidence:!1,autoAlertMode:`auto_safe_only`}}function p(e,t=`is`){let n=t===`is`;return{privacy:n?{eyebrow:`Lög og traust`,title:`Persónuvernd`,intro:`Hér er útskýrt á einföldu máli hvaða gögn VerkRadar vistar og hvernig þau eru notuð til að veita þjónustuna.`,sections:[[`Persónuvernd`,[`VerkRadar er vöktunar- og yfirlitskerfi fyrir fyrirtæki. Kerfið notar gögn sem notandi setur inn og opinber gögn um útboð og verkefni til að hjálpa fyrirtækjum að finna það sem gæti passað.`]],[`Hvaða gögn eru vistuð`,[`VerkRadar getur vistað fyrirtækjaheiti, tengiliðanetfang, vefslóð, atvinnugrein, þjónustuflokka, staðsetningar, leitarorð, stillingar, vistuð og hunsuð verkefni, samsvaranir og yfirlit.`,`Kerfið vistar einnig innskráningar- og lotugögn sem þarf til að halda notendum innskráðum og vernda aðgang.`]],[`Innskráning og aðgangur`,[`Notendur skrá sig inn með auðkenndum aðgangi. Aðgangur að mælaborði, stillingum og skýrslum er tengdur við notanda og fyrirtæki eftir því sem við á.`]],[`Fyrirtækjaprófíll og stillingar`,[`Fyrirtækjaprófíllinn er notaður til að bera opinber verkefni saman við þjónustu, svæði, lykilorð og óskir fyrirtækisins. Betri prófíll gefur yfirleitt betri samsvörun.`]],[`Vistuð og hunsuð tækifæri`,[`VerkRadar getur vistað hvaða verkefni notandi vistar, fylgist með eða hunsar. Þetta er notað til að bæta upplifun, síur og yfirlit.`]],[`Vafrakökur og vafrageymsla`,[`VerkRadar notar nauðsynlega vafrageymslu, lotugeymslu og sambærilega virkni fyrir innskráningu, Supabase Auth lotur, tungumál, stillingar og grunnvirkni appsins.`,`Við gerum ekki ráð fyrir auglýsinga- eða rekjanlegri markaðssetningargeymslu í þessari útgáfu. Ef greiningar eða auglýsingatól verða síðar bætt við þarf að uppfæra þessa lýsingu.`]],[`Hafa samband`,[`Spurningar um persónuvernd eða gögn má senda á info@verkradar.is.`]]]}:{eyebrow:`Legal and trust`,title:`Privacy`,intro:`This page explains in practical terms what VerkRadar stores and how that data is used to provide the service.`,sections:[[`Privacy`,[`VerkRadar is a monitoring and reporting tool for businesses. It uses user-entered company data and public tender/project data to help companies find relevant opportunities.`]],[`What data is stored`,[`VerkRadar may store company name, contact email, website, industry, service categories, locations, keywords, settings, saved and ignored opportunities, matches, and reports.`,`The system also stores login and session data needed to keep users signed in and protect account access.`]],[`Login and access`,[`Users log in with authenticated accounts. Access to dashboards, settings, and reports is connected to the user and company where applicable.`]],[`Company profile and settings`,[`The company profile is used to compare public opportunities against services, locations, keywords, and company preferences. A better profile usually creates better matches.`]],[`Saved and ignored opportunities`,[`VerkRadar may store which opportunities a user saves, watches, or ignores. This is used to improve the experience, filters, and reports.`]],[`Cookies and browser storage`,[`VerkRadar uses essential browser storage, session storage, and similar functionality for login, Supabase Auth sessions, language, preferences, and core app functionality.`,`We do not currently claim to use advertising or marketing tracking storage in this version. If analytics or advertising tools are added later, this section should be updated.`]],[`Contact`,[`Questions about privacy or data can be sent to info@verkradar.is.`]]]},terms:n?{eyebrow:`Lög og traust`,title:`Skilmálar`,intro:`Þessir skilmálar lýsa notkun VerkRadar á einföldu máli. Þeir eru ekki endanleg lögfræðiráðgjöf.`,sections:[[`Skilmálar`,[`Með því að nota VerkRadar samþykkir notandi að nota þjónustuna á ábyrgan hátt og staðfesta alltaf upplýsingar á upprunalegri heimild áður en brugðist er við.`]],[`Þjónustan`,[`VerkRadar vaktar opinberar heimildir, útboðsvefi, sveitarfélagssíður og aðrar heimildir þar sem það er heimilt og tæknilega mögulegt. Kerfið raðar verkefnum eftir fyrirtækjaprófíl og býr til mælaborð eða yfirlit.`]],[`Upprunaleg gögn eru endanleg heimild`,[`VerkRadar hjálpar til við að forgangsraða yfirferð opinberra tækifæra. Upprunaleg útboðsgögn, skilafrestir, kröfur og hæfisskilyrði á upprunalegri heimild eru alltaf endanleg heimild.`]],[`Engin trygging um fullkomna vöktun`,[`VerkRadar tryggir ekki að öll útboð finnist, að öll gögn séu fullkomin, að samsvörun sé alltaf rétt eða að fyrirtæki uppfylli skilyrði eða vinni verk.`]],[`Prufuaðgangur og verð`,[`Prufuaðgangur, verð, greiðslur og uppsagnir ráðast af verðsíðu, pöntunarsíðu eða skriflegu samkomulagi hverju sinni.`]],[`Uppsögn`,[`Notandi getur óskað eftir lokun eða breytingu á aðgangi. VerkRadar getur takmarkað aðgang ef þjónustan er misnotuð, greiðslur vantar eða öryggisáhætta kemur upp.`]],[`Ábyrgðartakmörkun`,[`VerkRadar ber ekki ábyrgð á töpuðum skilafrestum, röngum upplýsingum á upprunalegum heimildum, viðskiptatapi eða ákvörðunum sem teknar eru út frá yfirlitum án staðfestingar á frumgögnum.`]],[`Hafa samband`,[`Spurningar um skilmála má senda á info@verkradar.is.`]]]}:{eyebrow:`Legal and trust`,title:`Terms`,intro:`These terms describe VerkRadar use in plain language. They are not final legal advice.`,sections:[[`Terms`,[`By using VerkRadar, users agree to use the service responsibly and always verify information at the original source before acting.`]],[`The service`,[`VerkRadar monitors public sources, procurement portals, municipal pages, and other sources where allowed and technically feasible. The system ranks opportunities against company profiles and creates dashboards or reports.`]],[`Original data is the final authority`,[`VerkRadar helps prioritize review of public opportunities. Original tender documents, deadlines, requirements, and eligibility criteria at the original source are always the final authority.`]],[`No guarantee of complete monitoring`,[`VerkRadar does not guarantee that every tender is found, that all data is complete, that matching is always correct, or that a company is eligible for or will win any contract.`]],[`Trial access and pricing`,[`Trial access, pricing, billing, and cancellation are governed by the pricing page, order page, or written agreement in effect at the time.`]],[`Cancellation`,[`A user may request account changes or cancellation. VerkRadar may restrict access if the service is misused, payment is missing, or a security risk arises.`]],[`Limitation of liability`,[`VerkRadar is not responsible for missed deadlines, incorrect information at original sources, business losses, or decisions made from reports without checking source documents.`]],[`Contact`,[`Questions about these terms can be sent to info@verkradar.is.`]]]},data:n?{eyebrow:`Gagnaheimildir`,title:`Gagnaheimildir`,intro:`VerkRadar notar opinberar heimildir til að hjálpa fyrirtækjum að finna verkefni sem gætu skipt máli.`,sections:[[`Gagnaheimildir`,[`Kerfið safnar og samræmir opinberar upplýsingar þar sem slíkt er heimilt og tæknilega mögulegt.`]],[`Opinberar heimildir`,[`Heimildir geta verið útboðsvefir, opinberar stofnanir, RSS straumar, sveitarfélagssíður og aðrar opinberar síður.`]],[`Sveitarfélög og útboðsvefir`,[`VerkRadar getur vaktað sveitarfélög, innkaupa- og útboðsvefi og sértækar síður fyrir framkvæmdir, þjónustu eða innkaup.`]],[`Evrópsk útboð ef við á`,[`Evrópsk útboð geta verið sótt úr TED eða sambærilegum heimildum þegar þau eiga við markaðinn og fyrirtækjaprófíla.`]],[`Takmarkanir gagna`,[`Sumar heimildir veita ekki fulla skilafresti, verðmæti, kaupanda eða útboðsgögn í véllesanlegu formi. Gögn geta verið seinkuð, ófullkomin, tvítekin eða breytt á upprunalegri síðu.`]],[`Leiðréttingar`,[`Ef þú sérð rangar eða úreltar upplýsingar má senda ábendingu á info@verkradar.is. Opnið alltaf upprunalega heimild áður en brugðist er við.`]]]}:{eyebrow:`Data sources`,title:`Data sources`,intro:`VerkRadar uses public sources to help businesses find projects that may matter.`,sections:[[`Data sources`,[`The system collects and normalizes public information where allowed and technically feasible.`]],[`Public sources`,[`Sources can include procurement portals, public institutions, RSS feeds, municipal pages, and other official public pages.`]],[`Municipalities and procurement portals`,[`VerkRadar may monitor municipalities, procurement/tender portals, and specific pages for construction, services, or purchasing.`]],[`European tenders where applicable`,[`European tenders may be imported from TED or similar sources when relevant to the market and company profiles.`]],[`Data limitations`,[`Some sources do not provide full deadlines, values, buyer data, or tender documents in machine-readable form. Data may be delayed, incomplete, duplicated, or changed at the original source.`]],[`Corrections`,[`If you see incorrect or outdated information, send a correction to info@verkradar.is. Always open the original source before acting.`]]]},security:n?{eyebrow:`Öryggi`,title:`Öryggi`,intro:`VerkRadar notar innskráningu, aðgangsstýringu og aðskilnað gagna til að vernda fyrirtækjaupplýsingar.`,sections:[[`Öryggi`,[`Við reynum að halda öryggisupplýsingum hagnýtum og heiðarlegum. VerkRadar fullyrðir ekki um vottanir sem hafa ekki verið fengnar.`]],[`Innskráning`,[`Notendur skrá sig inn með auðkenndum aðgangi. Innskráning og lotur eru hluti af grunnvirkni appsins.`]],[`Aðgangsstýring`,[`Aðgangur að fyrirtækjagögnum, samsvörunum og skýrslum er aðgreindur eftir notanda og fyrirtæki þar sem það á við.`]],[`Fyrirtækjagögn`,[`Fyrirtækjaprófílar, stillingar og vistuð/hunsuð verkefni eru notuð til að veita þjónustuna og ættu ekki að vera sýnileg öðrum viðskiptavinum.`]],[`Admin aðgangur`,[`Admin verkfæri eru takmörkuð við skilgreinda stjórnendur og eru notuð til að fylgjast með heimildum, innflutningi, fyrirtækjum og handvirkri yfirferð.`]],[`Tilkynna vandamál`,[`Öryggisspurningar eða ábendingar má senda á info@verkradar.is.`]]]}:{eyebrow:`Security`,title:`Security`,intro:`VerkRadar uses authentication, access control, and data separation to protect company information.`,sections:[[`Security`,[`We try to keep security information practical and honest. VerkRadar does not claim certifications it has not obtained.`]],[`Login`,[`Users log in with authenticated accounts. Login and sessions are part of the app’s core functionality.`]],[`Access control`,[`Access to company data, matches, and reports is separated by user and company where applicable.`]],[`Company data`,[`Company profiles, settings, and saved/ignored opportunities are used to provide the service and should not be visible to other customers.`]],[`Admin access`,[`Admin tools are restricted to defined administrators and are used to monitor sources, imports, companies, and manual review.`]],[`Report an issue`,[`Security questions or reports can be sent to info@verkradar.is.`]]]},contact:n?{eyebrow:`Hafa samband`,title:`Hafa samband`,intro:`Viltu prófa VerkRadar, spyrja um vöktun eða benda á leiðréttingu?`,sections:[[`VerkRadar / Frost Studio`,[`Netfang: info@verkradar.is`,`Tengiliður: Kristján Jakob`]]]}:{eyebrow:`Contact`,title:`Contact`,intro:`Want to try VerkRadar, ask about monitoring, or report a correction?`,sections:[[`VerkRadar / Frost Studio`,[`Email: info@verkradar.is`,`Contact person: Kristján Jakob`]]]}}[e]}var m=`https://asojxjbsgqbfpbepojzh.supabase.co`,h=`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFzb2p4amJzZ3FiZnBiZXBvanpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAwNTU2NjgsImV4cCI6MjA5NTYzMTY2OH0.yPA34VbqWqKrBPespmHr5AojYzjhy3kGRxswO9XdAd0`,g=window.supabase?window.supabase.createClient(m,h,{auth:{flowType:`pkce`,detectSessionInUrl:!0,persistSession:!0,autoRefreshToken:!0}}):null,_=`verkradar_pending_invite_token`,v=`verkradar_pending_invite_flow`,y=`verkradar_legacy_pending_invite_token`,ee=`vr_debug_invite`,te=1e3*60*60*24*7;function b(e){return String(e||``).trim().toLowerCase()}function ne(){return window.VERKRADAR_COMPANY_INVITE_URL?window.VERKRADAR_COMPANY_INVITE_URL:window.VERKRADAR_SUPABASE_URL?`${window.VERKRADAR_SUPABASE_URL}/functions/v1/company-invite`:`${m}/functions/v1/company-invite`}function x(e){let t=String(e||``),n=t.includes(`?`)?t.slice(t.indexOf(`?`)+1):``,r=new URLSearchParams(n);return S(r.get(`token`)||r.get(`invite`)||``)}function S(e){return String(e||``).split(`#`)[0].trim()}function C(){let e=new URL(window.location.href),t=e.searchParams,n=window.location.hash||``,r=n.indexOf(`#`,1),i=r>=0?n.slice(r+1):``,a=new URLSearchParams(i||n.replace(/^#/,``)),o=n.replace(/^#/,``)||``,s=o.includes(`?`)?o.slice(o.indexOf(`?`)+1):``,c=new URLSearchParams(s),l=t.get(`invite`)||t.get(`token`)||c.get(`token`)||c.get(`invite`)||``,u=S(l||w()),d=t.get(`code`)||``,f=a.get(`access_token`)||``,p=a.get(`refresh_token`)||``;return{isCallbackPath:e.pathname===`/auth/callback`,invite:u,code:d,accessToken:f,refreshToken:p,hasImplicitTokens:!!(f&&p),rawTokenHadFragment:String(l||``).includes(`#`)}}function re(e=``){let t=new URL(o(`/auth/callback`)),n=S(e);return n&&t.searchParams.set(`invite`,n),t.toString()}function ie(e=``){let t=S(e),n=t?`/#/accept-invite?token=${encodeURIComponent(t)}`:`/#/`;return window.history.replaceState(null,``,`${a()}${n}`),t?`/accept-invite?token=${encodeURIComponent(t)}`:`/`}function ae(){try{return localStorage.getItem(ee)===`1`}catch{return!1}}function oe(e){let t=x(e),n=xe(),r=t?`url`:n.sessionToken?`sessionStorage`:n.localToken?`localStorage`:`missing`,i=t||n.sessionToken||n.localToken||``;return{current_url:Se(window.location.href),current_hash:Se(window.location.hash||``),token_source:r,token_present:!!i,token_length:i.length,localStorage_pending_token_present:!!n.localToken,sessionStorage_pending_token_present:!!n.sessionToken}}async function se(e=``){try{let{data:t,error:n}=g?await g.auth.getSession():{data:{session:null},error:null},r=t?.session?.user||null;return{auth_session_present:!!(t?.session&&!n),auth_user_id_present:!!r?.id,auth_user_email:r?.email||``,email_confirmed_at_present:!!(r?.email_confirmed_at||r?.confirmed_at),auth_event_received:e||``,access_token_present:!!t?.session?.access_token}}catch(t){return{auth_session_present:!1,auth_user_id_present:!1,auth_user_email:``,email_confirmed_at_present:!1,auth_event_received:e||``,access_token_present:!1,auth_error:t instanceof Error?t.message:String(t||`Unknown auth error`)}}}function ce(e){return De(e)===`/accept-invite`}function le(e){let t=De(e);return[`/login`,`/signup`,`/forgot-password`].includes(t)&&!!x(e)}function ue(e){return ce(e)||le(e)||Oe(e)&&!!w()}function de(e){return ue(e)?x(e)||w():(me(),``)}function w(){try{localStorage.removeItem(y)}catch{}try{let e=sessionStorage.getItem(_)||``;if(e)return e;let t=JSON.parse(localStorage.getItem(v)||`null`);return!t?.token||!t?.expires_at||new Date(t.expires_at).getTime()<Date.now()?(localStorage.removeItem(v),``):S(t.token||``)}catch{return``}}function fe(e){if(x(e))return`url`;let t=xe();return t.sessionToken?`sessionStorage`:t.localToken?`localStorage`:`missing`}function pe(e){let t=S(e);try{t&&(sessionStorage.setItem(_,t),localStorage.setItem(v,JSON.stringify({token:t,created_at:new Date().toISOString(),expires_at:new Date(Date.now()+te).toISOString()})))}catch{}return t}function me(){try{sessionStorage.removeItem(_),localStorage.removeItem(v),localStorage.removeItem(y)}catch{}}function he(e){let t=S(e);return t?s(`/accept-invite?token=${encodeURIComponent(t)}`):``}async function ge(e){let t=ne();if(!t)throw Error(`Company invite function is not configured.`);let n=await fetch(t,{method:`POST`,headers:be(),body:JSON.stringify({action:`preview`,token:e})}),r=await Te(n),i={preview_request_sent:!0,preview_status:n.status,preview_response_body:Ce(r)};if(!n.ok){let e=Error(r.error||r.message||`Invite preview failed with status ${n.status}`);throw e.details={...r,__http_status:n.status,__debug:i},e}return{...r,__debug:i}}async function _e(e){let t=ne();if(!t)throw Error(`Company invite function is not configured.`);let n;try{n=await we()}catch(e){let t=Error(e instanceof Error?e.message:`You must be logged in to accept this invite.`);throw t.details={code:`no_session`,diagnostics:{accept_request_sent:!1,authorization_header_included:!1,accept_error_reason:`no_session`}},t}let r=await fetch(t,{method:`POST`,headers:n.headers,body:JSON.stringify({action:`accept`,token:e})}),i=await Te(r),a={...n.diagnostics,accept_request_sent:!0,authorization_header_included:!!n.headers.authorization,accept_http_status:r.status,accept_response_body:Ce(i)};if(!r.ok){let e=Error(i.error||i.message||`Invite acceptance failed with status ${r.status}`);throw e.details={...i,__http_status:r.status,__debug:a},e}return{...i,__debug:a}}async function ve(e,t,n={}){let r=String(n.token||``).trim();if(r)return[await _e(r)];let i=b(t?.email);if(!e||!t?.id||!i||n.allowEmailClaim!==!0)return[];let{data:a,error:o}=await e.from(`company_members`).select(`id, company_id, email, role, status`).eq(`email_normalized`,i).eq(`status`,`invited`);if(o)throw o;let s=a||[];if(!s.length)return[];let c=[];for(let n of s){let{data:r,error:a}=await e.from(`company_members`).update({user_id:t.id,status:`active`,accepted_at:new Date().toISOString(),revoked_at:null,updated_at:new Date().toISOString()}).eq(`id`,n.id).eq(`email_normalized`,i).eq(`status`,`invited`).select(`id, company_id, email, role, status, accepted_at`).maybeSingle();if(a)throw a;r&&c.push(r)}return c}async function ye(e,t){if(!e||!t?.id)return[];let{data:n,error:r}=await e.from(`company_members`).select(`id, company_id, email, role, status, accepted_at`).eq(`user_id`,t.id).eq(`status`,`active`).order(`accepted_at`,{ascending:!0});if(r)throw r;return n||[]}function be(){let e={"content-type":`application/json`},t=window.VERKRADAR_SUPABASE_ANON_KEY||`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFzb2p4amJzZ3FiZnBiZXBvanpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAwNTU2NjgsImV4cCI6MjA5NTYzMTY2OH0.yPA34VbqWqKrBPespmHr5AojYzjhy3kGRxswO9XdAd0`;return t&&(e.apikey=t),e}function xe(){let e={sessionToken:``,localToken:``};try{e.sessionToken=S(sessionStorage.getItem(_)||``)}catch{}try{let t=JSON.parse(localStorage.getItem(v)||`null`);t?.token&&t?.expires_at&&new Date(t.expires_at).getTime()>=Date.now()&&(e.localToken=S(t.token||``))}catch{}return e}function Se(e){return String(e||``).replace(/([?&](?:token|invite)=)[^&#]+/gi,`$1[redacted]`)}function Ce(e){if(!e||typeof e!=`object`)return e||null;let{diagnostics:t,ok:n,status:r,code:i,error:a,message:o,company_name:s,invited_email:c,role:l,expires_at:u,company_id:d}=e;return{ok:n,status:r,code:i,error:a,message:o,company_name:s,invited_email:c,role:l,expires_at:u,company_id:d,diagnostics:t}}async function we(){let e=be(),{data:t,error:n}=g?await g.auth.getSession():{data:{session:null},error:null};if(n)throw n;let r=t.session?.access_token;if(!r)throw Error(`You must be logged in to accept this invite.`);e.authorization=`Bearer ${r}`;let i=Ee(r);return{headers:e,diagnostics:{session_user_id:t.session?.user?.id||``,session_user_email:t.session?.user?.email||``,bearer_jwt_sub:i.sub||``,bearer_jwt_email:i.email||``,bearer_jwt_iss:i.iss||``,bearer_jwt_exp:i.exp||``,session_user_matches_bearer_sub:!!(t.session?.user?.id&&i.sub&&t.session.user.id===i.sub),session_email_matches_bearer_email:!!(t.session?.user?.email&&i.email&&b(t.session.user.email)===b(i.email))}}}async function Te(e){let t=await e.text();if(!t)return{};try{return JSON.parse(t)}catch{return{error:t}}}function Ee(e){try{let t=String(e||``).split(`.`)[1]||``;if(!t)return{};let n=t.replace(/-/g,`+`).replace(/_/g,`/`),r=n.padEnd(Math.ceil(n.length/4)*4,`=`),i=decodeURIComponent(Array.from(atob(r)).map(e=>`%${e.charCodeAt(0).toString(16).padStart(2,`0`)}`).join(``));return JSON.parse(i)}catch{return{}}}function De(e){let t=String(e||`/`);return(t.startsWith(`/`)?t:`/${t}`).split(`?`)[0]||`/`}function Oe(e){let t=String(e||``);return t.startsWith(`access_token=`)||t.startsWith(`code=`)||t.includes(`access_token=`)||t.includes(`code=`)||t.includes(`type=signup`)||t.includes(`type=email_change`)}function ke(){return window.VERKRADAR_DAILY_PIPELINE_URL?window.VERKRADAR_DAILY_PIPELINE_URL:window.VERKRADAR_SUPABASE_URL?`${window.VERKRADAR_SUPABASE_URL}/functions/v1/daily-pipeline`:`${m}/functions/v1/daily-pipeline`}async function Ae(){let e=ke();if(!e)throw Error(`Daily pipeline function is not configured. Set window.VERKRADAR_DAILY_PIPELINE_URL or window.VERKRADAR_SUPABASE_URL.`);let t=await je(),n=await fetch(e,{method:`POST`,headers:t,body:JSON.stringify({runDailyPipeline:!0})}),r=await Me(n);if(!n.ok&&n.status!==207)throw Error(r.error||r.message||`Daily pipeline failed with status ${n.status}`);return r}async function je(){let e={"content-type":`application/json`},t=window.VERKRADAR_SUPABASE_ANON_KEY||`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFzb2p4amJzZ3FiZnBiZXBvanpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAwNTU2NjgsImV4cCI6MjA5NTYzMTY2OH0.yPA34VbqWqKrBPespmHr5AojYzjhy3kGRxswO9XdAd0`;t&&(e.apikey=t);let{data:n,error:r}=g?await g.auth.getSession():{data:{session:null},error:null};if(r)throw r;let i=n.session?.access_token;if(!i)throw Error(`You must be logged in as an admin to run the daily pipeline.`);return e.authorization=`Bearer ${i}`,e}async function Me(e){let t=await e.text();if(!t)return{};try{return JSON.parse(t)}catch{return{error:t}}}function Ne(){return window.VERKRADAR_AI_REVIEW_MATCH_URL?window.VERKRADAR_AI_REVIEW_MATCH_URL:window.VERKRADAR_SUPABASE_URL?`${window.VERKRADAR_SUPABASE_URL}/functions/v1/ai-review-match`:`${m}/functions/v1/ai-review-match`}async function Pe(e,t={}){let n=Ne();if(!n)throw Error(`AI review function is not configured. Set window.VERKRADAR_AI_REVIEW_MATCH_URL or window.VERKRADAR_SUPABASE_URL.`);let r=await Be(),i=await fetch(n,{method:`POST`,headers:r,body:JSON.stringify({matchId:e,force:t.force===!0})}),a=await Ve(i);if(!i.ok)throw Error(a.error||a.message||`AI review failed with status ${i.status}`);return a}async function Fe(e,t={}){let n=Ne();if(!n)throw Error(`AI review function is not configured. Set window.VERKRADAR_AI_REVIEW_MATCH_URL or window.VERKRADAR_SUPABASE_URL.`);let r=await Be(),i=await fetch(n,{method:`POST`,headers:r,body:JSON.stringify({batch:!0,companyId:e,limit:Math.max(1,Math.min(20,Number(t.limit||10))),force:t.force===!0,revalidate:t.revalidate===!0})}),a=await Ve(i);if(!i.ok)throw Error(a.error||a.message||`AI review batch failed with status ${i.status}`);return a}async function Ie(e={}){let t=Ne();if(!t)throw Error(`AI review function is not configured. Set window.VERKRADAR_AI_REVIEW_MATCH_URL or window.VERKRADAR_SUPABASE_URL.`);let n=await Be(),r=await fetch(t,{method:`POST`,headers:n,body:JSON.stringify({auto:!0,limit:Math.max(1,Math.min(10,Number(e.limit||10)))})}),i=await Ve(r);if(!r.ok)throw Error(i.error||i.message||`Automatic AI review failed with status ${r.status}`);return i}async function Le(e,t){let n=Ne();if(!n)throw Error(`AI review function is not configured. Set window.VERKRADAR_AI_REVIEW_MATCH_URL or window.VERKRADAR_SUPABASE_URL.`);let r=await Be(),i=await fetch(n,{method:`POST`,headers:r,body:JSON.stringify({setCompanyAutoAiReviewEnabled:!0,company_id:e,enabled:t===!0})}),a=await Ve(i);if(!i.ok)throw Error(a.error||a.message||`Auto AI toggle failed with status ${i.status}`);return a}async function Re(){if(!g)return{reviewsToday:0,estimatedCostToday:0,remainingReviewsToday:50};let e=new Date;e.setUTCHours(0,0,0,0);let{data:t,error:n}=await g.from(`ai_usage_log`).select(`opportunity_id, estimated_cost`).gte(`created_at`,e.toISOString());if(n)throw n;let r=t||[],i=r.filter(e=>e.opportunity_id).length;return{reviewsToday:i,estimatedCostToday:r.reduce((e,t)=>e+Number(t.estimated_cost||0),0),remainingReviewsToday:Math.max(0,50-i)}}function ze(e){let t=Number(e||0);return`$${t.toFixed(t>=1?2:4)}`}async function Be(){let e={"content-type":`application/json`},t=window.VERKRADAR_SUPABASE_ANON_KEY||`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFzb2p4amJzZ3FiZnBiZXBvanpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAwNTU2NjgsImV4cCI6MjA5NTYzMTY2OH0.yPA34VbqWqKrBPespmHr5AojYzjhy3kGRxswO9XdAd0`;t&&(e.apikey=t);let{data:n,error:r}=g?await g.auth.getSession():{data:{session:null},error:null};if(r)throw r;let i=n.session?.access_token;if(!i)throw Error(`You must be logged in as an admin to run AI review.`);return e.authorization=`Bearer ${i}`,e}async function Ve(e){let t=await e.text();if(!t)return{};try{return JSON.parse(t)}catch{return{error:t}}}function He(e){let t=String(e?.fit||``),n=Number(e?.confidence||0),r=e?.send_to_client===!0||e?.sendToClient===!0;return n<.65?`needs_review`:t===`strong`&&r?`ready_for_admin`:t===`possible`&&r?`possible`:t===`weak`||t===`no_fit`?`low_priority`:`needs_review`}function Ue(e,t,n=null){let r=new Map,i=new Map;for(let e of t||[]){let t=String(e.company_id||``),n=String(e.opportunity_id||``),a=String(e.match_id||``);t&&n&&r.set(`${t}:${n}`,e),a&&i.set(a,e)}return(e||[]).map(e=>{let t=`${String(e.company_id||``)}:${String(e.opportunity_id||``)}`,a=r.get(t)||i.get(String(e.id||``));return a?{...e,ai_review_status:He(a),ai_review_fit:a.fit||e.ai_review_fit,ai_review_confidence:a.confidence??e.ai_review_confidence,ai_reviewed_at:a.updated_at||a.created_at||e.ai_reviewed_at,ai_review_send_to_client:a.send_to_client===!0,ai_review_reason:a.reason||``,ai_review_profile_hash:a.reviewed_profile_hash||``,ai_review_profile_stale:Ye(a,n),ai_review_found:!0,ai_review_saved:!0}:{...e,ai_review_found:!1}})}function We(e,t=null){let n=Xe(t,e);if(n.outsideServiceArea)return{bucket:`outside_service_area`,label:`Outside service area`,tone:`warning`,clientReady:!1,reason:n.reason||`Outside current service area.`};let r=Je(e?.ai_review_skipped_reason),i=String(e?.ai_review_fit||``),a=Number(e?.ai_review_confidence||0),o=e?.ai_review_found===!0||e?.ai_review_saved===!0||!!i,s=String(e?.ai_review_status||`not_reviewed`);return r===`outside_service_area`?{bucket:`outside_service_area`,label:`Outside service area`,tone:`warning`,clientReady:!1,reason:`Skipped by batch review because the opportunity is outside the company service area.`}:o?e?.ai_review_profile_stale===!0?{bucket:`needs_review`,label:`AI review may be stale`,tone:`warning`,clientReady:!1,confidence:a}:i===`strong`&&e?.ai_review_send_to_client===!0?{bucket:`ai_recommended`,label:`AI recommended`,tone:`success`,clientReady:!0,confidence:a}:i===`possible`?{bucket:`ai_possible`,label:`AI possible`,tone:`notice`,clientReady:e?.ai_review_send_to_client===!0,confidence:a}:i===`weak`||i===`no_fit`||s===`low_priority`?{bucket:`low_priority`,label:i===`no_fit`?`AI: no fit`:`AI: weak fit`,tone:`muted`,clientReady:!1,confidence:a}:{bucket:`needs_review`,label:`Needs review`,tone:`warning`,clientReady:!1,confidence:a}:r?{bucket:r,label:qe(r),tone:r===`already_reviewed`?`notice`:`warning`,clientReady:!1,reason:qe(r)}:s===`needs_review`||String(e?.safety_status||``)===`needs_review`?{bucket:`needs_review`,label:`Needs review`,tone:`warning`,clientReady:!1}:{bucket:`not_reviewed`,label:`Not AI reviewed`,tone:`muted`,clientReady:!1}}function Ge(e,t,n=null){return(e||[]).filter(e=>{let r=We(e,n);return t===`ai_recommended`?r.bucket===`ai_recommended`:t===`ai_possible`?r.bucket===`ai_possible`:t===`needs_review`?r.bucket===`needs_review`:t===`outside_service_area`?r.bucket===`outside_service_area`:t===`not_reviewed`?r.bucket===`not_reviewed`:!0})}function Ke(e){let t=JSON.stringify({services:Qe([...e?.services||[],...e?.includeKeywords||[],...(e?.excludeKeywords||[]).map(e=>`exclude:${e}`)]),locations:Qe([e?.baseLocation,...e?.locations||[],...e?.serviceAreas||[],e?.willingToTravel?`willing_to_travel:true`:`willing_to_travel:false`,e?.nationalProjects?`national_projects:true`:`national_projects:false`])}),n=5381;for(let e=0;e<t.length;e+=1)n=(n<<5)+n+t.charCodeAt(e),n|=0;return`profile_${Math.abs(n)}`}function qe(e){return{outside_service_area:`Outside service area`,already_reviewed:`Already reviewed`,expired:`Expired`,missing_deadline:`Missing deadline`,expired_or_missing_deadline:`Expired or missing deadline`,score_too_low:`Score too low`,manually_rejected:`Manually rejected`}[Je(e)]||`Skipped`}function Je(e){return String(e||``).trim().toLowerCase().replace(/[\s-]+/g,`_`)}function Ye(e,t){if(!e||!t)return!1;let n=String(e.reviewed_profile_hash||``);return!!(n&&n!==Ke(t))}function Xe(e,t){if(!e||e.nationalProjects===!0||e.willingToTravel===!0)return{outsideServiceArea:!1,reason:``};let n=$e([e.baseLocation,...e.serviceAreas||[],...e.locations||[]].join(` `));if(!n||/all iceland|allt land|national|landsdekkandi/.test(n))return{outsideServiceArea:!1,reason:``};let r=t?.opportunities||{},i=r.raw_payload&&typeof r.raw_payload==`object`?r.raw_payload:{},a=$e([r.title,r.location,i.region,i.extracted_location].join(` `));if(!a)return{outsideServiceArea:!1,reason:`Opportunity location unclear`};if(/(dalvik|akureyri|boggvisbraut|birkiholar|north iceland|nordurland)/.test(a)&&!/(dalvik|akureyri|north iceland|nordurland)/.test(n)||/(olafsvik|snaefellsnes|stykkisholmur|grundarfjordur)/.test(a)&&!/(olafsvik|snaefellsnes|stykkisholmur|grundarfjordur)/.test(n))return{outsideServiceArea:!0,reason:`Outside current service area`};let o=Ze(n),s=Ze(a);return!o.length||!s.length?{outsideServiceArea:!1,reason:``}:{outsideServiceArea:!s.some(e=>o.includes(e)),reason:`Outside current service area`}}function Ze(e){return[[`capital_area`,/reykjavik|capital area|hofudborg|gardabaer|kopavogur|seltjarnarnes|mosfellsbaer/],[`south`,/selfoss|arborg|sudurland|hveragerdi|olfus|rangarthing/],[`west_corridor`,/akranes|borgarnes|borgarbyggd|hvalfjordur/],[`north`,/dalvik|akureyri|nordurland|birkiholar|boggvisbraut/],[`snaefellsnes`,/olafsvik|snaefellsnes|stykkisholmur|grundarfjordur/]].filter(([,t])=>t.test(e)).map(([e])=>e)}function Qe(e){return Array.from(new Set((e||[]).map(e=>$e(e)).filter(Boolean))).sort()}function $e(e){return String(e||``).toLowerCase().normalize(`NFD`).replace(/[\u0300-\u036f]/g,``).replace(/þ/g,`th`).replace(/ð/g,`d`).replace(/æ/g,`ae`).replace(/ö/g,`o`).replace(/[^a-z0-9\s/-]/g,` `).replace(/\s+/g,` `).trim()}function et(e){let{escapeHtml:t,isRunning:n=!1,result:r=null}=e;return`
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
      ${r?tt(r,t):``}
    </section>
  `}function tt(e,t){let n=Array.isArray(e.company_summaries)?e.company_summaries:[],r=Array.isArray(e.match_details)?e.match_details:[];return`
    <div class="daily-pipeline-result">
      <div class="daily-pipeline-section">
        <h3>Yfirlit</h3>
        <div class="daily-pipeline-kpis">
          ${nt(`Ný tækifæri`,e.opportunities_inserted,t)}
          ${nt(`Uppfært`,e.opportunities_updated,t)}
          ${nt(`Fyrirtæki uppfærð`,e.companies_refreshed,t)}
          ${nt(`AI yfirferðir`,e.ai_reviews_created,t)}
          ${nt(`Þegar yfirfarið`,e.skipped_already_reviewed,t)}
          ${nt(`Utan þjónustusvæðis`,e.skipped_outside_service_area,t)}
          ${nt(`Vantar skilafrest`,e.skipped_missing_deadline,t)}
          ${nt(`Útrunnið`,e.skipped_expired,t)}
        </div>
      </div>

      <div class="daily-pipeline-section">
        <div class="daily-pipeline-heading">
          <h3>Fyrirtæki</h3>
          <span>${n.length} fyrirtæki í niðurstöðu</span>
        </div>
        ${n.length?`
          <div class="daily-company-grid">
            ${n.map(e=>rt(e,t)).join(``)}
          </div>
        `:`<div class="empty-card">Engin fyrirtæki með niðurstöðu í þessari keyrslu.</div>`}
      </div>

      <div class="daily-pipeline-section">
        <div class="daily-pipeline-heading">
          <h3>Nýlega AI-yfirfarin tækifæri</h3>
          <span>${r.length} tækifæri</span>
        </div>
        ${r.length?`
          <div class="daily-match-list">
            ${r.map(e=>at(e,t)).join(``)}
          </div>
        `:`<div class="empty-card">Engin ný AI-yfirfarin tækifæri í þessari keyrslu.</div>`}
      </div>

      ${ot(e.errors,t)}
      ${st(e,t)}
    </div>
  `}function nt(e,t,n){return`
    <div class="daily-kpi">
      <strong>${Number(t||0)}</strong>
      <span>${n(e)}</span>
    </div>
  `}function rt(e,t){let n=Array.isArray(e.match_details)?e.match_details:[];return`
    <article class="daily-company-card">
      <div class="daily-company-header">
        <h4>${t(e.company_name||`Óþekkt fyrirtæki`)}</h4>
        ${e.company_id?`<button class="btn btn-ghost btn-small" type="button" data-action="view-admin-company" data-id="${t(e.company_id)}">Open company</button>`:``}
      </div>
      <div class="daily-company-stats">
        ${it(`Ný tækifæri`,e.new_matches_count,t)}
        ${it(`Mælt með`,e.ai_recommended_count,t)}
        ${it(`Mögulegt`,e.ai_possible_count,t)}
        ${it(`Passar ekki`,e.ai_rejected_count,t)}
        ${it(`Þegar yfirfarið`,e.already_reviewed_count,t)}
        ${it(`Þarf yfirferð`,e.needs_manual_review_count,t)}
      </div>
      <div class="daily-company-skips">
        <span>Utan þjónustusvæðis: ${Number(e.skipped_outside_service_area||0)}</span>
        <span>Vantar skilafrest: ${Number(e.skipped_missing_deadline||0)}</span>
        <span>Útrunnið: ${Number(e.skipped_expired||0)}</span>
      </div>
      ${n.length?`
        <ul class="daily-company-match-titles">
          ${n.slice(0,3).map(e=>`<li>${t(e.opportunity_title||`Tækifæri`)}</li>`).join(``)}
        </ul>
      `:``}
    </article>
  `}function it(e,t,n){return`
    <span>
      <strong>${Number(t||0)}</strong>
      ${n(e)}
    </span>
  `}function at(e,t){let n=Array.isArray(e.top_reasons)?e.top_reasons.filter(Boolean).slice(0,3):[],r=String(e.source_url||``).trim();return`
    <article class="daily-match-card">
      <div class="daily-match-top">
        <div>
          <h4>${t(e.opportunity_title||`Tækifæri`)}</h4>
          <p>${t(e.company_name||`Óþekkt fyrirtæki`)} · ${t(e.buyer||`Óþekktur kaupandi`)} · ${t(e.source||`Óþekkt heimild`)}</p>
        </div>
        <div class="daily-match-badges">
          <span>${t(ct(e.ai_fit))}</span>
          <span>${Math.round(Number(e.ai_confidence||0)*100)}%</span>
          <span>${e.send_to_client?`Hæft til sendingar`:`Ekki senda`}</span>
          ${e.ai_review_is_stale?`<span class="is-warning">AI gæti verið úrelt</span>`:``}
        </div>
      </div>
      <div class="daily-match-meta">
        <span>Skilafrestur: ${t(lt(e.deadline))}</span>
        <span>Regluskor: ${Number(e.rule_score||0)}</span>
        <span>AI fit: ${t(String(e.ai_fit||``))}</span>
      </div>
      ${n.length?`
        <div class="daily-match-reasons">
          <strong>Helstu ástæður</strong>
          <ul>${n.map(e=>`<li>${t(e)}</li>`).join(``)}</ul>
        </div>
      `:``}
      ${e.top_risk?`
        <div class="daily-match-risk">
          <strong>Áhætta/spurning</strong>
          <span>${t(e.top_risk)}</span>
        </div>
      `:``}
      <div class="daily-match-actions">
        ${e.company_id?`<button class="btn btn-ghost btn-small" type="button" data-action="view-admin-company" data-id="${t(e.company_id)}">Open company</button>`:``}
        ${e.match_id?`<button class="btn btn-secondary btn-small" type="button" data-action="admin-ai-review-match" data-id="${t(e.match_id)}" data-force="true">Re-run AI review</button>`:``}
        ${r?`<a class="btn btn-ghost btn-small" href="${t(r)}" target="_blank" rel="noreferrer">Opna heimild</a>`:``}
      </div>
    </article>
  `}function ot(e,t){return!Array.isArray(e)||!e.length?``:`
    <div class="admin-message is-error">
      ${e.map(e=>`<div>${t(e)}</div>`).join(``)}
    </div>
  `}function st(e,t){return`
    <details class="daily-pipeline-diagnostics">
      <summary>Technical diagnostics</summary>
      <pre>${t(JSON.stringify(e,null,2))}</pre>
    </details>
  `}function ct(e){let t=String(e||``).toLowerCase();return t===`strong`?`Mælt með`:t===`possible`?`Mögulegt`:t===`weak`||t===`no_fit`?`Passar ekki`:`Þarf yfirferð`}function lt(e){return String(e||``).trim()||`Ekki skráð`}function ut(e,t){let{escapeHtml:n,formatDateTime:r,inviteEmail:i=``,inviteLink:a=``,inviteDebug:o=null,actionState:s=``}=t,c=Array.isArray(e.members)?e.members:[],l=c.filter(e=>e.status===`active`),u=c.filter(e=>e.status===`invited`),d=l.length?`Active`:u.length?`Invited`:`Not invited`,f=!!s;return`
    <section class="side-panel admin-company-access-panel">
      <h3>Customer access</h3>
      <p><strong>Access status:</strong> ${n(d)}</p>
      <p class="muted-text">Create an invite link, copy it, and send it manually. VerkRadar does not send invite emails yet.</p>
      ${c.length?`
        <ul class="admin-detail-list admin-company-access-list">
          ${c.map(e=>ft(e,{escapeHtml:n,formatDateTime:r,busy:f})).join(``)}
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
          ${dt(o,n)}
        `:u.length?`
          <p class="muted-text">No raw invite token is available in this browser session. Regenerate invite link before copying.</p>
        `:``}
      </div>
      <p class="muted-text">Aðgangur að fyrirtæki er afturkallaður, en innskráningaraðgangi notandans er ekki eytt.</p>
    </section>
  `}function dt(e,t){return e?`
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
  `:``}function ft(e,t){let{escapeHtml:n,formatDateTime:r,busy:i}=t,a=e.status===`revoked`,o=e.status===`active`?`is-success`:e.status===`invited`?`is-running`:``;return`
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
  `}var pt=[[``,`Ástæða valfrjáls`],[`wrong_service`,`Röng þjónusta`],[`wrong_location`,`Rangt svæði`],[`too_large`,`Of stórt`],[`too_small`,`Of lítið`],[`missing_equipment_or_certification`,`Vantar tæki eða vottun`],[`consultancy_not_execution`,`Ráðgjöf/eftirlit, ekki framkvæmd`],[`not_interested`,`Ekki áhugavert`],[`duplicate_or_already_known`,`Tvítekið eða þegar þekkt`],[`other`,`Annað`]];function mt(){let e=window.VERKRADAR_HYBRID_MATCHING_ENABLED;return e===!0||String(e||``).toLowerCase()===`true`}function ht(e={}){return{coreServices:xt(e.coreServices),secondaryServices:xt(e.secondaryServices),excludedServices:xt(e.excludedServices),preferredProjectTypes:xt(e.preferredProjectTypes),excludedProjectTypes:xt(e.excludedProjectTypes),equipment:xt(e.equipment),certifications:xt(e.certifications),preferredBuyers:xt(e.preferredBuyers),maxTravelDistanceKm:e.maxTravelDistanceKm||``,typicalProjectSize:e.typicalProjectSize||``,profileNotesForAi:e.profileNotesForAi||``}}function gt(e){let t=new FormData(e);return{coreServices:bt(t.get(`coreServices`)),secondaryServices:bt(t.get(`secondaryServices`)),excludedServices:bt(t.get(`excludedServices`)),preferredProjectTypes:bt(t.get(`preferredProjectTypes`)),excludedProjectTypes:bt(t.get(`excludedProjectTypes`)),equipment:bt(t.get(`equipment`)),certifications:bt(t.get(`certifications`)),preferredBuyers:bt(t.get(`preferredBuyers`)),maxTravelDistanceKm:St(t.get(`maxTravelDistanceKm`)),typicalProjectSize:String(t.get(`typicalProjectSize`)||``).trim(),profileNotesForAi:String(t.get(`profileNotesForAi`)||``).trim()}}function _t(e){let t=new FormData(e);return{opportunityId:String(t.get(`opportunityId`)||``).trim(),decision:String(t.get(`decision`)||``).trim(),reason:String(t.get(`reason`)||``).trim(),comment:String(t.get(`comment`)||``).trim()}}function vt(e){let t=new FormData(e);return{opportunityId:String(t.get(`opportunityId`)||``).trim(),label:String(t.get(`label`)||``).trim(),reason:String(t.get(`reason`)||``).trim(),notes:String(t.get(`notes`)||``).trim()}}function yt(e){return xt(e).join(`, `)}function bt(e){return String(e||``).split(/[\n,;]+/).map(e=>e.trim()).filter(Boolean)}function xt(e){return Array.isArray(e)?e.map(e=>String(e||``).trim()).filter(Boolean):bt(e)}function St(e){if(e==null||e===``)return null;let t=Number(e);return Number.isFinite(t)?t:null}function Ct(e,t){let{escapeHtml:n,actionState:r=``}=t,i=ht(e);return`
    <section class="side-panel admin-matching-profile-panel">
      <div class="admin-company-ai-header">
        <div>
          <h3>Matching profile</h3>
          <p>Structured matching context for future hybrid scoring and AI reranking. Current production matching is unchanged.</p>
          <p><strong>Hybrid matching:</strong> ${mt()?`Enabled`:`Disabled / comparison only`}</p>
        </div>
      </div>
      <form data-admin-matching-profile-form data-company-id="${n(e.id)}">
        ${Tt(`Kjarnaþjónusta`,`coreServices`,i.coreServices,n)}
        ${Tt(`Aukaþjónusta`,`secondaryServices`,i.secondaryServices,n)}
        ${Tt(`Útilokuð þjónusta`,`excludedServices`,i.excludedServices,n)}
        ${Tt(`Æskilegar verkefnategundir`,`preferredProjectTypes`,i.preferredProjectTypes,n)}
        ${Tt(`Útilokaðar verkefnategundir`,`excludedProjectTypes`,i.excludedProjectTypes,n)}
        ${Tt(`Tæki og búnaður`,`equipment`,i.equipment,n)}
        ${Tt(`Vottanir / réttindi`,`certifications`,i.certifications,n)}
        ${Tt(`Æskilegir kaupendur`,`preferredBuyers`,i.preferredBuyers,n)}
        <label>Hámarks akstursfjarlægð (km)
          <input name="maxTravelDistanceKm" type="number" min="0" step="1" value="${n(i.maxTravelDistanceKm)}" />
        </label>
        <label>Dæmigerð verkefnastærð
          <input name="typicalProjectSize" value="${n(i.typicalProjectSize)}" />
        </label>
        <label>Athugasemdir fyrir AI
          <textarea name="profileNotesForAi" rows="4">${n(i.profileNotesForAi)}</textarea>
        </label>
        <button class="btn btn-secondary btn-small" type="submit" ${r===`matching_profile`?`disabled`:``}>
          ${r===`matching_profile`?`Vista...`:`Vista matching profile`}
        </button>
      </form>
    </section>
  `}function wt(e,t){let{escapeHtml:n}=t,r=e.adminDecision||{},i=e.evaluationLabel||{},a=e.opportunity_id||e.opportunities?.id||``;return`
    <div class="admin-match-learning-controls">
      <form data-admin-match-decision-form data-company-id="${n(e.company_id||``)}">
        <input type="hidden" name="opportunityId" value="${n(a)}" />
        <select name="decision">
          ${[[``,`Ákvörðun`],[`send`,`Senda`],[`possible`,`Mögulegt`],[`reject`,`Hafna`]].map(([e,t])=>`<option value="${e}" ${r.decision===e?`selected`:``}>${n(t)}</option>`).join(``)}
        </select>
        <select name="reason">
          ${pt.map(([e,t])=>`<option value="${e}" ${r.reason===e?`selected`:``}>${n(t)}</option>`).join(``)}
        </select>
        <input name="comment" value="${n(r.comment||``)}" placeholder="Athugasemd" />
        <button class="btn btn-ghost btn-small" type="submit">Vista ákvörðun</button>
      </form>
      <form data-admin-evaluation-label-form data-company-id="${n(e.company_id||``)}">
        <input type="hidden" name="opportunityId" value="${n(a)}" />
        <select name="label">
          ${[[``,`Mat`],[`strong`,`Sterkt`],[`possible`,`Mögulegt`],[`no_fit`,`Passar ekki`]].map(([e,t])=>`<option value="${e}" ${i.label===e?`selected`:``}>${n(t)}</option>`).join(``)}
        </select>
        <input name="reason" value="${n(i.reason||``)}" placeholder="Ástæða" />
        <input name="notes" value="${n(i.notes||``)}" placeholder="Minnispunktar" />
        <button class="btn btn-ghost btn-small" type="submit">Vista mat</button>
      </form>
    </div>
  `}function Tt(e,t,n,r){return`
    <label>${r(e)}
      <textarea name="${r(t)}" rows="2">${r(yt(n))}</textarea>
    </label>
  `}function Et(e){let{escapeHtml:t,invite:n=null,loading:r=!1,error:i=``,debugInfo:a=null,showDebug:o=!1,user:s=null,accepting:c=!1,signupHref:l=`/signup`,loginHref:u=`/login`,language:d=`is`}=e,f=d===`is`,p=f?`Aðgangsboð í VerkRadar`:`VerkRadar invite`,m=f?`Sæki aðgangsboð...`:`Loading invite...`,h=f?`Fyrirtæki`:`Company`,g=f?`Boðið netfang`:`Invited email`,_=f?`Innskráning`:`Login`,v=f?`Stofna aðgang`:`Create account`,y=f?`Ertu þegar með aðgang?`:`Already have an account?`,ee=f?`Tengja aðgang`:`Accept invite`,te=f?`Fara í innskráningu`:`Go to login`,b=f?`Fara á forsíðu`:`Go to homepage`,ne=f?`Aðgangsboðið tengir innskráninguna við fyrirtækjaprófíl sem hefur þegar verið settur upp.`:`This invite connects your login to an existing company profile.`;return`
    <section class="auth-page">
      <div class="auth-layout">
        <div class="auth-copy">
          <p class="eyebrow">${t(f?`AÐGANGUR`:`ACCESS`)}</p>
          <h1>${t(p)}</h1>
          <p>${t(ne)}</p>
        </div>
        <div class="auth-form-column">
          <div class="auth-card invite-card">
            ${r?`<p>${t(m)}</p>`:``}
            ${i?`<div class="admin-message is-error">${t(i)}</div>`:``}
            ${o&&a?Dt(a,t):``}
            ${i&&!n?`
              <div class="auth-actions">
                <button class="btn btn-primary btn-large" type="button" data-action="go" data-href="/login">${t(te)}</button>
                <button class="btn btn-secondary btn-large" type="button" data-action="go" data-href="/">${t(b)}</button>
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
                  ${t(c?f?`Tengi...`:`Accepting...`:ee)}
                </button>
              `:`
                <div class="auth-actions">
                  <button class="btn btn-primary btn-large" type="button" data-action="go" data-href="${t(l)}">${t(v)}</button>
                </div>
                <p class="auth-switch">${t(y)} <button type="button" data-action="go" data-href="${t(u)}">${t(_)}</button></p>
              `}
            `:``}
          </div>
        </div>
      </div>
    </section>
  `}function Dt(e,t){return`
    <details class="admin-invite-debug">
      <summary>Invite diagnostics</summary>
      ${[{title:`Route/token`,fields:[`current_url`,`current_hash`,`token_source`,`token_present`,`token_length`,`localStorage_pending_token_present`,`sessionStorage_pending_token_present`,`auth_flow`,`raw_token_had_fragment`,`sanitized_token_length`,`code_present`,`exchange_code_attempted`,`exchange_code_succeeded`,`session_present`,`auth_callback_error`]},{title:`Auth`,fields:[`auth_session_present`,`auth_user_id_present`,`auth_user_email`,`email_confirmed_at_present`,`auth_event_received`,`access_token_present`]},{title:`Preview`,fields:[`preview_request_sent`,`preview_status`,`preview_response_body`]},{title:`Accept`,fields:[`accept_request_sent`,`authorization_header_included`,`accept_http_status`,`accept_response_body`,`accept_error_reason`,`session_user_id`,`session_user_email`,`bearer_jwt_sub`,`bearer_jwt_email`,`bearer_jwt_iss`,`bearer_jwt_exp`,`session_user_matches_bearer_sub`,`session_email_matches_bearer_email`]},{title:`Backend lookup`,fields:`action.token_received.token_length.computed_hash_prefix.lookup_found.matching_rows_count.invite_status.invite_expires_at.latest_invite_status.latest_invite_expires_at.invited_email.auth_user_id_present.auth_user_email.email_match.authorization_header_present.bearer_token_present.bearer_token_length.expected_project_ref.get_user_attempted.get_user_succeeded.get_user_error_code.get_user_error_message.admin_get_user_attempted.admin_get_user_exists.admin_get_user_error_code.admin_get_user_error_message.invalid_reason.update_attempted.update_succeeded`.split(`.`)}].map(n=>`
        <div class="admin-invite-debug-group">
          <strong>${t(n.title)}</strong>
          ${n.fields.map(n=>Ot(n,e[n],t)).join(``)}
        </div>
      `).join(``)}
    </details>
  `}function Ot(e,t,n){let r=typeof t==`object`&&t?JSON.stringify(t,null,2):String(t??``);return`
    <div class="admin-invite-debug-row">
      <span>${n(e)}</span>
      <code>${n(r||`—`)}</code>
    </div>
  `}function kt({authMessage:e,escapeHtml:t}){if(!e)return``;let n=Array.isArray(e.actions)?e.actions:[];return`
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
  `}function At({t:e,escapeHtml:t,authForm:n,authSubmitting:r,authMessage:i,signupHref:a=`/signup`,signupLabel:o=``,forgotPasswordHref:s=`/forgot-password`}){let c=o||e(`createAccount`);return`
    <section class="auth-page">
      <div class="auth-layout">
        <div class="auth-copy">
          <p class="eyebrow">${t(e(`login`))}</p>
          <h1>${t(e(`authLoginTitle`))}</h1>
          <p>${t(e(`authLoginSubtitle`))}</p>
        </div>

        <div class="auth-form-column">
          ${kt({authMessage:i,escapeHtml:t})}
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
  `}function jt({t:e,escapeHtml:t,authForm:n,authSubmitting:r,authMessage:i}){return`
    <section class="auth-page">
      <div class="auth-layout">
        <div class="auth-copy">
          <p class="eyebrow">${t(e(`passwordReset`))}</p>
          <h1>${t(e(`resetPasswordTitle`))}</h1>
          <p>${t(e(`resetPasswordSubtitle`))}</p>
        </div>

        <div class="auth-form-column">
          ${kt({authMessage:i,escapeHtml:t})}
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
  `}function Mt({t:e,escapeHtml:t,authForm:n,authSubmitting:r,authMessage:i}){return`
    <section class="auth-page">
      <div class="auth-layout">
        <div class="auth-copy">
          <p class="eyebrow">${t(e(`newPassword`))}</p>
          <h1>${t(e(`chooseNewPassword`))}</h1>
          <p>${t(e(`resetPasswordHelp`))}</p>
        </div>

        <div class="auth-form-column">
          ${kt({authMessage:i,escapeHtml:t})}
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
  `}function Nt({t:e,escapeHtml:t,authForm:n,authSubmitting:r,authMessage:i,loginHref:a=`/login`,inviteEmail:o=``,isInviteSignup:s=!1}){let c=o||n.email,l=e(s?`inviteCreateAccountSubtitle`:`createAccountSubtitle`);return`
    <section class="auth-page">
      <div class="auth-layout">
        <div class="auth-copy">
          <p class="eyebrow">${t(e(`createAccount`))}</p>
          <h1>${t(e(`createAccountTitle`))}</h1>
          <p>${t(l)}</p>
        </div>

        <div class="auth-form-column">
          ${kt({authMessage:i,escapeHtml:t})}
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
  `}function Pt({t:e,escapeHtml:t,trialHref:n=`/trial`}){return`
    <section class="auth-page">
      <div class="auth-layout">
        <div class="auth-copy">
          <p class="eyebrow">${t(e(`trialRequestEyebrow`))}</p>
          <h1>${t(e(`publicSignupUnavailableTitle`))}</h1>
          <p>${t(e(`publicSignupUnavailableText`))}</p>
        </div>
        <div class="auth-form-column">
          <div class="auth-card">
            <p>${t(e(`publicSignupUnavailableHelp`))}</p>
            <div class="auth-actions">
              <button class="btn btn-primary btn-large" type="button" data-action="go" data-href="${t(n)}">${t(e(`createFreeDemoProfile`))}</button>
              <button class="btn btn-secondary btn-large" type="button" data-action="go" data-href="/login">${t(e(`login`))}</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `}function Ft(e){let{escapeHtml:t,usageSummary:n=null,lastResult:r=null,isRunning:i=!1,formatAiUsageCost:a=e=>`$${Number(e||0).toFixed(4)}`}=e;return`
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
      ${n?Rt(n,{escapeHtml:t,formatAiUsageCost:a}):``}
      ${r?Bt(r,t):``}
    </section>
  `}function It(e,t){let{escapeHtml:n,renderMatchDecisionControls:r=null}=t,i=e.latestMatches||[];return i.length?`
    <ul class="admin-detail-list admin-ai-aware-match-list">
      ${i.map(t=>Ht(t,{escapeHtml:n,company:e,renderMatchDecisionControls:r})).join(``)}
    </ul>
  `:`<p>No stored matches yet.</p>`}function Lt(e,t){let{escapeHtml:n,formatDateTime:r,formatAiUsageCost:i=e=>`$${Number(e||0).toFixed(4)}`,actionState:a=``,filter:o=`not_reviewed`,lastResult:s=null,usageSummary:c=null}=t,l=Ge(e.latestMatches||[],o,e);return`
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

      ${c?Rt(c,{escapeHtml:n,formatAiUsageCost:i}):``}
      ${s?zt(s,n):``}

      <label class="admin-inline-control admin-company-ai-filter">
        <span>AI review filter</span>
        <select data-admin-company-ai-filter>
          ${[[`ai_recommended`,`AI recommended`],[`ai_possible`,`AI possible`],[`needs_review`,`Needs review`],[`outside_service_area`,`Outside service area`],[`not_reviewed`,`Not AI reviewed`]].map(([e,t])=>`<option value="${e}" ${o===e?`selected`:``}>${t}</option>`).join(``)}
        </select>
      </label>

      ${l.length?`
        <ul class="admin-detail-list admin-ai-match-list">
          ${l.map(t=>Ut(t,{escapeHtml:n,formatDateTime:r,company:e})).join(``)}
        </ul>
      `:`<p class="muted-text">No matches for this AI review filter.</p>`}
    </section>
  `}function Rt(e,{escapeHtml:t,formatAiUsageCost:n}){return`
    <div class="admin-ai-usage-summary">
      <span><strong>AI usage today</strong></span>
      <span>${Number(e.reviewsToday||0)} reviews today</span>
      <span>${t(n(e.estimatedCostToday||0))} estimated cost</span>
      <span>${Number(e.remainingReviewsToday||0)} reviews remaining</span>
    </div>
  `}function zt(e,t){return`
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
  `}function Bt(e,t){return`
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
    ${Vt(e.company_diagnostics||[],t)}
  `}function Vt(e,t){return e.length?`
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
  `:``}function Ht(e,{escapeHtml:t,company:n,renderMatchDecisionControls:r}){let i=e.opportunities||{},a=We(e,n),o=Number(e.match_score||0);return`
    <li class="admin-ai-aware-match ${t(a.tone||`muted`)}">
      <strong>${t(i.title||`Opportunity`)}</strong>
      <span>
        <b>${t(a.label)}</b>
        ${a.confidence?` · ${Math.round(a.confidence*100)}%`:``}
        · Rule score ${o}
        ${a.bucket===`outside_service_area`?` · Rule label suppressed`:` · ${t(e.match_label||`Match`)}`}
      </span>
      ${e.ai_review_skipped_reason?`<small>Skipped: ${t(qe(e.ai_review_skipped_reason))}</small>`:``}
      ${e.ai_review_profile_stale?`<small>AI review may be stale because the company profile changed.</small>`:``}
      ${e.adminDecision?`<small>Decision: ${t(e.adminDecision.decision||``)}${e.adminDecision.reason?` · ${t(e.adminDecision.reason)}`:``}</small>`:``}
      ${e.evaluationLabel?`<small>Evaluation: ${t(e.evaluationLabel.label||``)}${e.evaluationLabel.reason?` · ${t(e.evaluationLabel.reason)}`:``}</small>`:``}
      ${r?r(e,{escapeHtml:t}):``}
    </li>
  `}function Ut(e,{escapeHtml:t,formatDateTime:n,company:r}){let i=e.opportunities||{},a=We(e,r),o=a.confidence?` · ${Math.round(a.confidence*100)}%`:``,s=e.ai_reviewed_at?` · ${n(e.ai_reviewed_at)}`:``,c=e.ai_review_skipped_reason?` · Skipped: ${qe(e.ai_review_skipped_reason)}`:``;return`
    <li class="admin-ai-match-row ${t(a.tone||`muted`)}">
      <strong>${t(i.title||`Opportunity`)}</strong>
      <span>${t(a.label)}${t(o)}${t(s)}${t(c)}</span>
      ${e.ai_review_profile_stale?`<span>AI review may be stale because the company profile changed.</span>`:``}
      <span>Rule score ${Number(e.match_score||0)} · ${t(e.match_label||`Match`)}</span>
      <span class="admin-ai-debug">company_id=${t(e.company_id||``)} · opportunity_id=${t(e.opportunity_id||``)} · ai_review_found=${e.ai_review_found===!0?`true`:`false`}</span>
    </li>
  `}function Wt({copy:e,suggestions:t,labels:n,escapeHtml:r}){return`
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
  `}function Gt({profile:e,matches:t,stats:n,filters:r,filterSummary:i,matchStatus:a,opportunityLoadError:o,isAdmin:s,matchingLoading:c,labels:l,renderFilterDropdown:u,renderOpportunityCard:d,renderEmptyState:f,escapeHtml:p}){return`
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
  `}function Kt({opp:e,saved:t,deadline:n,sourceBadgeHtml:r,qualityBadgeHtml:i,safetyBadgeHtml:a,extractedBadgeHtml:o,originalLanguageBadgeHtml:s,matchBadgeClass:c,matchLabel:l,buyer:u,location:d,value:f,reasons:p,labels:m,escapeHtml:h}){return`
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
  `}function qt({opp:e,saved:t,deadline:n,requirements:r,matchReasons:i,risks:a,safetyReasons:o,nextSteps:s,matchBadgeClass:c,matchLabel:l,qualityBadgeHtml:u,safetyBadgeHtml:d,extractedBadgeHtml:f,qualityWarningHtml:p,buyerSummary:m,location:h,value:g,sourceUrl:_,extractedDetails:v,qualityLabel:y,safetyStatusLine:ee,category:te,type:b,publishedDate:ne,cpvCode:x,labels:S,escapeHtml:C}){return`
    <div class="modal-backdrop">
      <div class="modal" role="dialog" aria-modal="true">
        <div class="modal-header">
          <div>
            <div class="opportunity-badges">
              <span class="${c}">${C(l)} · ${e.matchScore}</span>
              ${u}
              ${d}
              ${f}
            </div>
            <h2>${C(e.title)}</h2>
            <p>${C(m)} · ${C(h)} · ${g}</p>
          </div>
          <button type="button" class="icon-btn modal-close-btn" data-action="close-modal" aria-label="Close details">×</button>
        </div>

        <div class="modal-body">
          <div class="modal-grid">
            <section>
              ${p}
              <h3>${C(S.description)}</h3>
              <p>${C(e.description||S.noDescription)}</p>
              <h3>${C(S.requirements)}</h3>
              <ul class="check-list">
                ${(r.length?r:[S.noSpecificRequirements]).map(e=>`<li>${C(e)}</li>`).join(``)}
              </ul>
              <h3>${C(S.matchReasons)}</h3>
              <ul class="check-list">
                ${(i.length?i:[S.noMatchReasons]).map(e=>`<li>${C(e)}</li>`).join(``)}
              </ul>
            </section>

            <aside class="side-panel">
              <h3>${C(S.opportunityInfo)}</h3>
              <p><strong>${C(S.source)}:</strong> ${C(S.sourceValue)}</p>
              ${v}
              <p><strong>${C(S.quality)}:</strong> ${C(y)}</p>
              ${ee}
              <p><strong>${C(S.category)}:</strong> ${C(te)}</p>
              <p><strong>${C(S.type)}:</strong> ${C(b)}</p>
              <p><strong>${C(S.deadline)}:</strong> <span class="${n.className}">${C(S.deadlineLabel)}</span></p>
              <p><strong>${C(S.published)}:</strong> ${C(ne)}</p>
              <p><strong>${C(S.cpv)}:</strong> ${C(x||`—`)}</p>

              <h3>${C(S.risksToCheck)}</h3>
              <ul class="risk-list">
                ${(o.length?o:a).map(e=>`<li>${C(e)}</li>`).join(``)}
              </ul>

              <h3>${C(S.recommendedNextSteps)}</h3>
              <ol class="steps-list">
                ${(s.length?s:[S.openSourceAndConfirm]).map(e=>`<li>${C(e)}</li>`).join(``)}
              </ol>

              <div class="button-stack">
                <button class="btn btn-primary" data-action="save" data-id="${e.id}">${C(t?S.removeFromSaved:S.saveOpportunity)}</button>
                <a class="btn btn-secondary" href="${C(_)}" target="_blank" rel="noreferrer">${C(S.openSource)}</a>
                <button class="btn btn-ghost" data-action="ignore" data-id="${e.id}">${C(S.markNotRelevant)}</button>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  `}function Jt(e,t){return e.map(e=>`<p>${t(e)}</p>`).join(``)}function Yt({language:e,escapeHtml:t,eyebrow:n,title:r,intro:i,sections:a}){let o=e===`is`?`Síðast uppfært`:`Last updated`,s=e===`is`?`4. júní 2026`:`June 4, 2026`;return`
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
            <div class="legal-content">${Jt(n,t)}</div>
          </section>
        `).join(``)}
      </div>
    </section>
  `}function Xt({t:e,escapeHtml:t,language:n,trialHref:r}){let i=n===`is`,a=i?[{title:`Gatnagerð og lagnir við nýtt hverfi`,type:`1`,score:`Mælt með · Skilafrestur eftir 10 daga`},{title:`Lóðarframkvæmdir við skóla`,type:`2`,score:`Passar við lóðarvinnu · Staðfesta gögn`},{title:`Bílastæði og yfirborðsfrágangur`,type:`3`,score:`Mögulegt tækifæri · Opna heimild`}]:[{title:`Roadworks and utilities for a new neighborhood`,type:`1`,score:`Strong match · Deadline in 10 days`},{title:`Site works at a school`,type:`2`,score:`Fits site work · Verify documents`},{title:`Parking area and surface finishing`,type:`3`,score:`Possible match · Open source`}],o=i?[[`Jarðvinna og gatnagerð`,`Útboð um vegi, lóðir, bílastæði, stíga og jarðvegsvinnu.`],[`Lagnavinna og fráveita`,`Verkefni um lagnir, dælustöðvar, fráveitu, vatn og hitaveitu.`],[`Malbikun og lóðarframkvæmdir`,`Gatnagerð, yfirborðsfrágangur, gangstéttir og viðhald.`],[`Rafverktakar`,`Raflagnir, brunakerfi, lýsing, öryggiskerfi og hleðslustöðvar.`],[`Ræstingar og þjónusta`,`Reglulegir þjónustusamningar, húsþjónusta og rekstrarverkefni.`],[`Verkfræðistofur og ráðgjafar`,`Hönnun, eftirlit, ráðgjöf og verkefnastjórnun þegar það á við.`]]:[[`Earthworks and roadworks`,`Tenders for roads, plots, parking areas, paths and earthworks.`],[`Utilities and drainage`,`Projects for pipes, pumping stations, drainage, water and heating utilities.`],[`Paving and site works`,`Road construction, surface finishing, sidewalks and maintenance.`],[`Electrical contractors`,`Wiring, fire alarms, lighting, security systems and chargers.`],[`Cleaning and services`,`Recurring service contracts, facility services and operations work.`],[`Engineering and advisors`,`Design, supervision, consulting and project management where relevant.`]];return`
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
  `}function Zt({t:e,escapeHtml:t,trialHref:n}){let r=[{key:`trial`,name:e(`pricingTrialPlan`),price:e(`pricingTrialPrice`),subtext:e(`pricingTrialSubtext`),items:[e(`pricingTrialManualProfile`),e(`pricingTrialFiltering`),e(`pricingTrialReportIfRelevant`),e(`pricingTrialNoCommitment`),e(`pricingTrialNoCard`)],cta:e(`pricingTrialCta`)},{key:`monitoring`,name:e(`pricingMonitoringPlan`),price:e(`pricingMonitoringPrice`),subtext:e(`pricingMonitoringSubtext`),highlighted:!0,items:[e(`pricingMonitoringSources`),e(`pricingMonitoringEmail`),e(`pricingMonitoringFilters`),e(`pricingMonitoringReminders`),e(`pricingMonitoringFeedback`),e(`pricingOneProfile`)],cta:e(`pricingMonitoringCta`)},{key:`custom`,name:e(`pricingCustomPlan`),price:e(`pricingCustomPrice`),items:[e(`pricingCustomProfiles`),e(`pricingCustomServices`),e(`pricingCustomMonitoring`),e(`pricingCustomPriorityReview`),e(`pricingCustomAudience`)],cta:e(`pricingCustomCta`)}];return`
    <section class="page-head">
      <p class="eyebrow">${t(e(`pricingEyebrow`))}</p>
      <h1>${t(e(`pricingHeadline`))}</h1>
      <p>${t(e(`pricingSubtitle`))}</p>
    </section>

    <section class="pricing-grid">
      ${r.map(r=>Qt(r,{t:e,escapeHtml:t,trialHref:n})).join(``)}
    </section>
  `}function Qt(e,{t,escapeHtml:n,trialHref:r}){let i=!!e.highlighted,a=`${r}${String(r).includes(`?`)?`&`:`?`}plan=${encodeURIComponent(e.key||`trial`)}`;return`
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
  `}function $t({t:e,escapeHtml:t,submitted:n=!1,error:r=``}){return`
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
        ${r?`
          <div class="admin-message is-error">
            <span>${t(r)}</span>
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
  `}var en=[`Reykjavík`,`Capital Area`,`Suðurnes`,`South Iceland`,`West Iceland`,`North Iceland`,`East Iceland`,`Westfjords`,`All Iceland`,`Remote / Online`];function tn(e){let{t,escapeHtml:n,profileDraft:r,renderCustomDropdown:i,getFilterOptions:a}=e,o=r.industry||``;return`
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
  `}function nn(e){let{t,escapeHtml:n,accountEmail:r}=e;return r?`
    <div class="form-section account-access-section">
      <h2>${n(t(`accountAccess`))}</h2>
      <div class="readonly-field">
        <span>${n(t(`loginEmail`))}</span>
        <strong>${n(r)}</strong>
      </div>
      <p class="field-helper">${n(t(`loginEmailHelper`))}</p>
    </div>
  `:``}function rn(e){let{t,escapeHtml:n,profileDraft:r,arrayFieldText:i,getProfileSuggestions:a,renderSuggestionChips:o}=e,s=r.industry||``,c=a(`services`,s),l=a(`includeKeywords`,s);return`
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
  `}function an(e){let{t,escapeHtml:n,profileDraft:r,arrayFieldText:i,formatCustomerLocation:a}=e;return`
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
        ${en.map(e=>`
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
  `}function on(e){let{t,escapeHtml:n,profileDraft:r}=e;return`
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
  `}function sn(e){let{t,escapeHtml:n,capitalize:r,profileDraft:i}=e;return`
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
  `}function cn(e){let{t,escapeHtml:n,hasProfile:r,isSavingProfile:i,profileSaved:a,profileSaveMessage:o,profileSaveError:s}=e,c=t(r?`saveProfile`:`createProfile`);return`
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
  `}function ln(e){let t=e.formId||`profile-form`;return`
    <form id="${e.escapeHtml(t)}" class="form-card settings-profile-form">
      ${nn(e)}
      ${tn(e)}
      ${rn(e)}
      ${an(e)}
      ${on(e)}
      ${sn(e)}
      ${cn(e)}
    </form>
  `}function un({report:e,title:t,created:n,itemLabel:r,statusLabel:i,hideLabel:a,viewLabel:o,escapeHtml:s}){return`
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
  `}function dn({report:e,options:t={},companyName:n,dateRange:r,generatedByLabel:i,reportTitleLabel:a,closeLabel:o,escapeHtml:s}){return`
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
  `}function fn({label:e,value:t,escapeHtml:n}){return`
    <div class="report-summary-card">
      <span>${n(e)}</span>
      <strong>${t}</strong>
    </div>
  `}function pn({title:e,description:t,opportunities:n,emptyText:r,renderOpportunityItem:i,escapeHtml:a}){return`
    <section class="report-section">
      <div class="report-section-head">
        <h3>${a(e)}</h3>
        <p>${a(t)}</p>
      </div>
      ${n.length?n.map(i).join(``):`<div class="report-empty">${a(r)}</div>`}
    </section>
  `}function mn({opp:e,valueText:t,deadlineText:n,sourceUrl:r,risks:i,fallbackReason:a,qualityBadgeHtml:o,matchBadgeClass:s,matchLabel:c,statusText:l,buyerLabel:u,buyerValue:d,sourceLabel:f,sourceValue:p,areaLabel:m,areaValue:h,deadlineLabel:g,valueLabel:_,whyLabel:v,risksLabel:y,openSourceLabel:ee,sourceMissingLabel:te,formatReason:b,formatRisk:ne,escapeHtml:x}){let S=(e.matchReasons.length?e.matchReasons:[a]).slice(0,4);return`
    <article class="report-item">
      <div class="report-item-top">
        ${o}
        <span class="${s}">${x(c)} ${e.matchScore}</span>
      </div>
      <h4>${x(e.title)}</h4>
      ${l?`<p class="report-item-status">${x(l)}</p>`:``}
      <div class="report-facts">
        <span><strong>${x(u)}</strong>${x(d)}</span>
        <span><strong>${x(f)}</strong>${x(p)}</span>
        <span><strong>${x(m)}</strong>${x(h)}</span>
        <span><strong>${x(g)}</strong><em>${x(n)}</em></span>
        <span><strong>${x(_)}</strong><em>${x(t)}</em></span>
      </div>
      <div class="report-detail-grid">
        <div>
          <h5>${x(v)}</h5>
          <ul>${S.map(e=>`<li>${x(b(e))}</li>`).join(``)}</ul>
        </div>
        <div>
          <h5>${x(y)}</h5>
          <ul>${i.slice(0,5).map(e=>`<li>${x(ne(e))}</li>`).join(``)}</ul>
        </div>
      </div>
      ${r?`<a class="report-source-link" href="${x(r)}" target="_blank" rel="noopener">${x(ee)} <span aria-hidden="true">↗</span></a>`:`<span class="report-source-link is-disabled">${x(te)}</span>`}
    </article>
  `}function hn({status:e,label:t,escapeHtml:n}){return`<span class="report-quality ${n(e)}">${n(t)}</span>`}function gn({t:e,escapeHtml:t,language:n,profileDraftDirty:r,profileLoadError:i,showDemoReset:a,profileFormHtml:o}){return`
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
  `}async function _n(e){if(!g)throw Error(`Trial request storage is not configured.`);let t=wn(e);En(t);let n=Tn(),{error:r}=await g.from(`trial_requests`).insert({id:n,...t});if(r)throw r;let i=await yn(n).catch(e=>(console.warn(`Trial request was saved, but notification failed:`,e),{ok:!1,error:e instanceof Error?e.message:String(e)}));return{ok:!0,request:{id:n},stored:!0,notification:i}}async function vn(){if(!g)throw Error(`Trial request storage is not configured.`);let{data:e,error:t}=await g.from(`trial_requests`).select(`id, company_name, contact_name, email, phone, services, locations, message, status, created_at, converted_company_id, notification_sent_at, notification_started_at, notification_error`).order(`created_at`,{ascending:!1});if(t)throw t;return e||[]}async function yn(e){let t=An();if(!t)return{ok:!1,skipped:!0,reason:`notification_endpoint_not_configured`};let n=await fetch(t,{method:`POST`,headers:jn(),body:JSON.stringify({requestId:e})}),r=await n.json().catch(()=>({}));if(!n.ok||r?.error)throw Error(r?.error||`Trial notification failed with status ${n.status}`);return r}async function bn(e,t){if(!g)throw Error(`Trial request storage is not configured.`);let n=Dn(t);if(!e||![`contacted`,`rejected`].includes(n))throw Error(`Unsupported trial request status update.`);let{data:r,error:i}=await g.from(`trial_requests`).update({status:n}).eq(`id`,e).is(`converted_company_id`,null).select(`id, status, converted_company_id`).maybeSingle();if(i)throw i;if(!r)throw Error(`Trial request was not updated. It may already be converted.`);return r}async function xn(e,t){let n=kn();if(!n)throw Error(`Admin company action endpoint is not configured.`);let r=await Mn(),i=await fetch(n,{method:`POST`,headers:r,body:JSON.stringify({action:`create_company_from_trial_request`,trialRequestId:e,company:t})}),a=await i.json().catch(()=>({}));if(!i.ok||a?.error)throw Error(a?.error||`Company creation failed with status ${i.status}`);return a}function Sn(e,t){let n=t?t():{},r=On(e?.services),i=On(e?.locations);return{...n,companyName:String(e?.company_name||``).trim(),contactName:String(e?.contact_name||``).trim(),contactEmail:String(e?.email||``).trim(),billingEmail:String(e?.email||``).trim(),phone:String(e?.phone||``).trim(),services:r,includeKeywords:r,locations:i,serviceAreas:i,selectedPlan:n.selectedPlan||`basic`,billingStatus:n.billingStatus||`trial`,reportFrequency:n.reportFrequency||`weekly`,reportDay:n.reportDay||`monday`,deadlineReminders:n.deadlineReminders??!0,includeLowConfidence:n.includeLowConfidence??!1}}function Cn(e){let t={new:`Ný`,contacted:`Haft samband`,rejected:`Hafnað`,converted:`Umbreytt`};return t[Dn(e)]||t.new}function wn(e){let t=t=>String(e.get(t)||``).trim();return{company_name:t(`company`),contact_name:t(`contact`),email:t(`email`),phone:t(`phone`),services:t(`services`),locations:t(`regions`),message:t(`notes`),status:`new`}}function Tn(){return globalThis.crypto?.randomUUID?globalThis.crypto.randomUUID():`10000000-1000-4000-8000-100000000000`.replace(/[018]/g,e=>{let t=globalThis.crypto?.getRandomValues?globalThis.crypto.getRandomValues(new Uint8Array(1))[0]:Math.floor(Math.random()*256);return(Number(e)^t&15>>Number(e)/4).toString(16)})}function En(e){let t=[`company_name`,`contact_name`,`email`,`services`,`locations`].filter(t=>!String(e[t]||``).trim());if(t.length)throw Error(`Missing required trial request fields: ${t.join(`, `)}`)}function Dn(e){let t=String(e||`new`).trim().toLowerCase();return[`new`,`contacted`,`rejected`,`converted`].includes(t)?t:`new`}function On(e){return String(e||``).split(/[\n,;]+/).map(e=>e.trim()).filter(Boolean)}function kn(){return window.VERKRADAR_ADMIN_COMPANY_ACTIONS_URL?window.VERKRADAR_ADMIN_COMPANY_ACTIONS_URL:window.VERKRADAR_SUPABASE_URL?`${window.VERKRADAR_SUPABASE_URL}/functions/v1/admin-company-actions`:`${m}/functions/v1/admin-company-actions`}function An(){return window.VERKRADAR_NOTIFY_TRIAL_REQUEST_URL?window.VERKRADAR_NOTIFY_TRIAL_REQUEST_URL:window.VERKRADAR_SUPABASE_URL?`${window.VERKRADAR_SUPABASE_URL}/functions/v1/notify-trial-request`:`${m}/functions/v1/notify-trial-request`}function jn(){return{"Content-Type":`application/json`,apikey:h,Authorization:`Bearer ${h}`}}async function Mn(){let e={"Content-Type":`application/json`,apikey:h};if(!g)return e;let{data:t,error:n}=await g.auth.getSession();if(n)throw n;let r=t?.session?.access_token;if(!r)throw Error(`Admin authentication is required.`);return{...e,Authorization:`Bearer ${r}`}}var Nn=[[`Tender and opportunity report`,`Útboðs- og verkefnayfirlit`],[`Weekly Opportunity Report`,`Útboðs- og verkefnayfirlit`],[`Open tenders / quote requests`,`Opin útboð / verðfyrirspurnir`],[`Possible upcoming opportunities`,`Möguleg væntanleg tækifæri`],[`Needs review`,`Þarfnast staðfestingar`],[`Strong match`,`Sterk samsvörun`],[`Good match`,`Góð samsvörun`],[`Possible match`,`Möguleg samsvörun`],[`Weak match`,`Veik samsvörun`],[`Quality`,`Gæði`],[`Buyer`,`Kaupandi`],[`Source`,`Heimild`],[`Location`,`Svæði`],[`Deadline`,`Skilafrestur`],[`Estimated value`,`Áætlað verðmæti`],[`Value`,`Áætlað verðmæti`],[`Why this matters`,`Af hverju þetta gæti skipt máli`],[`Why this fits`,`Af hverju þetta gæti skipt máli`],[`Risks / things to check`,`Atriði til að staðfesta`],[`Open source`,`Opna heimild`],[`Unknown buyer`,`Óþekktur kaupandi`],[`All Iceland`,`Allt landið`],[`Not found`,`Fannst ekki`],[`Not listed`,`Ekki gefið upp`]];function Pn(e,t){return t===`is`?Nn.reduce((e,[t,n])=>e.replaceAll(t,n),String(e||``)):e}function Fn(e){return Array.from(new Set((e||[]).map(e=>String(e||``).trim()).filter(Boolean)))}function In(e){return String(e||``).replace(/^mentions your service:\s*/i,``).replace(/^contains your keyword:\s*/i,``).replace(/^mentions core service:\s*/i,``).replace(/^nefnir þjónustu ykkar:\s*/i,``).replace(/^inniheldur leitarorð:\s*/i,``).replace(/^nefnir lykilþjónustu:\s*/i,``).trim()}function T(e,t=`is`){let n=t!==`en`;return{downloadPdf:n?`Sækja PDF`:`Download PDF`,copyReportEmail:n?`Afrita skýrslupóst`:`Copy report email`,markAsSent:n?`Merkja sem sent`:`Mark as sent`,marking:n?`Merkir...`:`Marking...`,close:n?`Loka`:`Close`,sentStatus:n?`Sendingarstaða`:`Sent status`,notSent:n?`Ekki sent`:`Not sent`,sentOn:n?`Sent`:`Sent on`,company:n?`Fyrirtæki`:`Company`,period:n?`Tímabil`:`Period`,generatedAt:n?`Útbúið`:`Generated at`,mode:n?`Gerð`:`Mode`,items:n?`Fjöldi`:`Items`,currentActive:n?`Núverandi virk tækifæri`:`Current active opportunities`,newOpportunities:n?`Ný tækifæri`:`New opportunities`,reasons:n?`Ástæður`:`Reasons`,openSource:n?`Opna heimild`:`Open source`,verifyBadge:n?`Staðfesta gögn`:`Verify documents`,verifyTenderDocs:n?`Staðfesta útboðsgögn`:`Verify tender documents`,verificationSentence:n?`Staðfesta þarf útboðsgögn áður en brugðist er við.`:`Tender documents should be verified before taking action.`,matchScore:n?`Samsvörun`:`Match`,strongMatchScore:n?`Sterk samsvörun`:`Strong match`,openActiveTitle:n?`Opin útboð / virk tækifæri`:`Open tenders / active opportunities`,openActiveDescription:n?`Opin útboð eða virk verðfyrirspurnaratriði með skilafresti. Yfirfarið frumgögn áður en brugðist er við.`:`Open tenders or active quote-request items with deadlines. Review source documents before acting.`,possibleTitle:n?`Möguleg tækifæri til skoðunar`:`Possible opportunities to review`,possibleDescription:n?`Tækifæri sem gætu átt við, en þar sem þarf að staðfesta umfang, kröfur eða hlutverk fyrirtækisins.`:`Opportunities that may fit, but where scope, requirements, or company role should be verified.`,earlyTitle:n?`Væntanleg verkefni / early signals`:`Upcoming projects / early signals`,earlyDescription:n?`Vísbendingar um möguleg framtíðarverkefni sem eru ekki endilega formleg útboð ennþá.`:`Signals for possible future projects that may not be formal tenders yet.`}[e]||e}function Ln(e=`is`){return T(`verificationSentence`,e)}function Rn(e,t=`is`){let n=Number(e?.matchScore||e?.match_score||0)>=85;return t===`en`?n?`Strong match`:`Match`:n?`Sterk samsvörun`:`Samsvörun`}function zn(e,t=`is`){let n=String(e?.aiReviewFit||e?.ai_review_fit||``).toLowerCase()===`strong`||Number(e?.matchScore||e?.match_score||0)>=85;return t===`en`?n?`Recommended — tender documents should be verified`:`Possible opportunity — tender documents should be verified`:n?`Mælt með — staðfesta þarf útboðsgögn`:`Mögulegt tækifæri — staðfesta þarf útboðsgögn`}function Bn(e,t=`is`){let n=String(e?.aiReviewFit||e?.ai_review_fit||``).toLowerCase();return t===`en`?n===`strong`||Number(e?.matchScore||0)>=85?`Recommended`:n===`possible`?`Possible opportunity`:String(e?.reportSection||``)===`early`?`Upcoming signal`:`Verify documents`:n===`strong`||Number(e?.matchScore||0)>=85?`Mælt með`:n===`possible`?`Mögulegt tækifæri`:String(e?.reportSection||``)===`early`?`Væntanlegt / merki`:`Staðfesta útboðsgögn`}function Vn(e=[],t=`is`){let n=[],r=new Set;for(let i of e||[]){let e=String(i||``).trim();if(!e)continue;let a=e.toLowerCase();if(a.includes(`winter/snow service fit`)){n.push(t===`is`?`Passar við vetrarþjónustu/snjómokstur; staðfestið umfang og getu.`:`Winter/snow service fit; verify capacity and scope.`);continue}if(a.includes(`deadline is valid and in the future`)){n.push(t===`is`?`Skilafrestur er í framtíðinni.`:`Deadline is valid and in the future.`);continue}if(a.includes(`location matches company service areas`)){n.push(t===`is`?`Staðsetning passar við þjónustusvæði.`:`Location matches company service areas.`);continue}if(a.includes(`verify capacity and scope`)){n.push(t===`is`?`Staðfestið umfang og getu.`:`Verify capacity and scope.`);continue}let o=In(e),s=o.toLowerCase();if(!o||r.has(s))continue;r.add(s);let c=t===`is`&&/passar|nefnir|stað|skilafrestur|þjónustu|umfang/i.test(o);n.push(t===`is`?c?o:`Passar við þjónustu eða leitarorð: ${o}`:/matches|mentions|deadline|location|verify/i.test(o)?o:`Matches service or keyword: ${o}`)}return Fn(n).slice(0,4)}function Hn(e,t=`is`){let n=String(e||``).trim();if(!n)return``;let r=n.toLowerCase();if(t!==`en`){if(r.includes(`deadline not available`))return`Skilafrestur fannst ekki í innfluttum gögnum — staðfestið á upprunasíðu.`;if(r.includes(`open the source documents`))return`Opna útboðsgögn.`;if(r.includes(`confirm mandatory requirements`))return`Staðfesta kröfur og hæfisskilyrði.`;if(r.includes(`check capacity and profitability`))return`Meta getu og arðsemi.`;if(r.includes(`prepare questions before the deadline`))return`Undirbúa fyrirspurnir fyrir skilafrest.`;if(r.includes(`verify capacity and scope`))return`Staðfestið umfang og getu.`}return n}function Un({companyName:e,matches:t,language:n=`is`}){let r=n!==`en`,i=r?`Sæll/Sæl,

VerkRadar fann eftirfarandi tækifæri sem gætu passað við ykkar þjónustu:`:`Hi,

VerkRadar found the following opportunities that may fit your services:`,a=r?`Staðfestið alltaf útboðsgögn, skilafresti og kröfur á upprunalegri heimild áður en brugðist er við.

Kv.
Kristján`:`Always verify the tender documents, deadlines, requirements, and eligibility on the original source before taking action.

Best,
Kristján`;return`${i}\n\n${(t||[]).map(e=>{let t=Vn(e.matchReasons||e.reasons||[],n),i=t.length?t.map(e=>`- ${e}`).join(`
`):`- ${r?`Passar við fyrirtækjaprófílinn.`:`Matches the company profile.`}`;return r?`${e.title}
Útboðsaðili: ${e.buyer||`Óþekktur kaupandi`}
Skilafrestur: ${e.deadline||`Fannst ekki`}
Staða: ${zn(e,n)}

Af hverju þetta gæti passað:
${i}

Heimild:
${e.url||`Engin heimild skráð`}`:`${e.title}
Buyer: ${e.buyer||`Unknown buyer`}
Deadline: ${e.deadline||`Not found`}
Status: ${zn(e,n)}

Why this may fit:
${i}

Source:
${e.url||`No source URL listed`}`}).join(`

`)||(r?`Engin atriði eru í þessu yfirliti.`:`No items are included in this report.`)}\n\n${a}`}function Wn(e){return String(e||``).toLowerCase()}function Gn(e){return Array.isArray(e)?e.map(e=>String(e||``).trim()).filter(Boolean):[]}function Kn(e){return Array.from(new Set((e||[]).map(e=>String(e||``).trim()).filter(Boolean)))}function qn(e){return e?new Date(e).getTime():NaN}function Jn(e){let t=qn(e);if(Number.isNaN(t))return!0;let n=new Date;return n.setHours(0,0,0,0),t<n.getTime()}function Yn(e={}){return{aiReviewFit:Wn(e.fit),aiReviewConfidence:Number(e.confidence||0),aiReviewSendToClient:e.send_to_client===!0||e.sendToClient===!0,aiReviewReason:String(e.reason||``),aiFitReasons:Gn(e.fit_reasons||e.fitReasons),aiRisksOrQuestions:Gn(e.risks_or_questions||e.risksOrQuestions),aiSuggestedClientSummary:String(e.suggested_client_summary||e.suggestedClientSummary||``),aiReviewedAt:e.updated_at||e.created_at||``}}function Xn(e,t){let n=new Map;for(let e of t||[]){let t=String(e.opportunity_id||e.opportunityId||``);t&&n.set(t,Yn(e))}return(e||[]).map(e=>{let t=n.get(String(e.id||e.opportunity_id||``));return t?{...e,...t,matchReasons:Kn([t.aiSuggestedClientSummary,...t.aiFitReasons,...Array.isArray(e.matchReasons)?e.matchReasons:[]]),risks:Kn([...t.aiRisksOrQuestions,...Array.isArray(e.risks)?e.risks:[]])}:e})}function Zn(e){return Qn(e)!==`excluded`}function Qn(e){let t=Wn(e?.aiReviewFit||e?.ai_review_fit);if(!e?.deadline||Jn(e.deadline))return`excluded`;let n=e?.aiReviewSendToClient===!0||e?.ai_review_send_to_client===!0;if(String(e?.aiReviewSkippedReason||e?.ai_review_skipped_reason||``).toLowerCase()===`outside_service_area`||[e?.aiReviewReason,...Gn(e?.aiRisksOrQuestions||e?.risks_or_questions)].join(` `).toLowerCase().includes(`outside service area`))return`excluded`;if(t)return[`weak`,`no_fit`].includes(t)?`excluded`:t===`strong`&&n?`ai_strong`:t===`possible`&&n?`ai_possible`:`excluded`;let r=String(e?.safetyStatus||e?.safety_status||`auto_approved`).toLowerCase();if(r===`hidden`||r===`needs_review`)return`excluded`;let i=Number(e?.matchScore||e?.match_score||0),a=String(e?.matchLabel||e?.match_label||``).toLowerCase();return i>=75||a.includes(`strong`)||a.includes(`good`)?`rule_fallback`:`excluded`}function $n(e){let t=Qn(e);return er(e)&&(t===`ai_strong`||t===`ai_possible`||t===`rule_fallback`)?`confirmed`:t===`ai_possible`||t===`rule_fallback`?`early`:`excluded`}function er(e){return!!e?.deadline&&!Jn(e.deadline)}function tr(e){return[...e||[]].filter(Zn).sort((e,t)=>{let n={ai_strong:0,ai_possible:1,rule_fallback:2},r=Qn(e),i=Qn(t);return(n[r]??9)-(n[i]??9)||Number(t.aiReviewConfidence||t.ai_review_confidence||0)-Number(e.aiReviewConfidence||e.ai_review_confidence||0)||Number(t.matchScore||t.match_score||0)-Number(e.matchScore||e.match_score||0)||qn(e.deadline)-qn(t.deadline)})}function E(e){if(!e)return 999;let t=new Date,n=new Date(`${e}T00:00:00`);if(Number.isNaN(n.getTime()))return 999;let r=n-new Date(t.getFullYear(),t.getMonth(),t.getDate());return Math.ceil(r/(1e3*60*60*24))}function nr(e){if(!e)return`No deadline`;let t=new Date(`${e}T00:00:00`);return Number.isNaN(t.getTime())?String(e):new Intl.DateTimeFormat(`en-GB`,{year:`numeric`,month:`short`,day:`2-digit`}).format(t)}function D(e){return e?new Intl.DateTimeFormat(`en-GB`,{year:`numeric`,month:`short`,day:`2-digit`}).format(new Date(e)):`Unknown date`}function rr(e){return Array.from(new Set((e||[]).map(e=>String(e||``).trim()).filter(Boolean)))}function O(e){return String(e||``).split(`,`).map(e=>e.trim()).filter(Boolean)}function k(e){return rr(Array.isArray(e)?e:O(e))}function ir(e){return O(e)}function A(e){return String(e||``).toLowerCase().normalize(`NFD`).replace(/[\u0300-\u036f]/g,``).replace(/æ/g,`ae`).replace(/[ðþ]/g,e=>e===`ð`?`d`:`th`).replace(/[^a-z0-9]+/g,` `).trim()}function j(e){return String(e??``).replaceAll(`&`,`&amp;`).replaceAll(`<`,`&lt;`).replaceAll(`>`,`&gt;`).replaceAll(`"`,`&quot;`).replaceAll(`'`,`&#039;`)}function ar(e){return String(e||``).charAt(0).toUpperCase()+String(e||``).slice(1)}function or(e){return/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(String(e||``))}function sr(e){let t=String(e||``).trim();return/^https?:\/\//i.test(t)?t:``}function cr(e,t=`ISK`){if(!e)return``;let n=t||`ISK`,r=n===`ISK`?`kr`:n;return`${new Intl.NumberFormat(`is-IS`).format(e)} ${r}`}function lr(e,t){let n=t||(e=>e);return{"Confirmed tender":n(`confirmedTender`),"Likely opportunity":n(`likelyOpportunity`),"Early signal":n(`earlySignal`),"Needs review":n(`needsReview`),"Tender awarded":n(`tenderAwarded`),"Tender already announced":n(`tenderAlreadyAnnounced`),"Upcoming tender":n(`upcomingTender`),"Project signal":n(`projectSignal`),"Original language":n(`originalLanguage`)}[e]||e||``}function ur(e,t){let n=t||(e=>e);return{"Strong match":n(`strongMatch`),"Good match":n(`goodMatch`),"Possible match":n(`possibleMatch`),"Weak match":n(`weakMatch`)}[e]||e||``}function dr(e,t,n){let r=n||(e=>e),i=String(t||``).trim();return i?e===`buyer`&&(fr(i)||i.toLowerCase()===`unknown buyer`)?r(`unknownBuyer`):e===`location`&&i.toLowerCase()===`all iceland`?r(`allIceland`):e===`source`?i.replace(/\bprocurement\b/gi,r(`procurement`)):i:r(e===`buyer`?`unknownBuyer`:`notListed`)}function fr(e){let t=A(e);return!!(!t||[`admin`,`administrator`,`ritstjori`,`editor`,`noreply`,`no reply`,`wordpress`,`wp admin`,`user`,`test`].includes(t)||t.includes(`noreply`)||/^wp\s*[-_]?\s*\d+$/.test(t))}function pr(e){let t=A(e);return t?t.includes(`borgarbyggd`)?`Borgarbyggð`:t.includes(`akranes`)?`Akraneskaupstaður`:t.includes(`faxafloahafnir`)?`Faxaflóahafnir`:t.includes(`gardabaer`)?`Garðabær`:t.includes(`reykjanesbaer`)?`Reykjanesbær`:t.includes(`kopavogur`)?`Kópavogur`:t.includes(`hafnarfjordur`)?`Hafnarfjarðarbær`:t.includes(`mosfellsbaer`)?`Mosfellsbær`:t.includes(`arborg`)?`Sveitarfélagið Árborg`:t.includes(`fjardabyggd`)?`Fjarðabyggð`:t.includes(`mulathing`)?`Múlaþing`:t.includes(`garðabaer`)?`Garðabær`:(t.includes(`rikiskaup`)||t.includes(`utbodsvefur`),``):``}function mr(e,t,n={}){let r=String(e||``).trim();if(/reykjavíkurborg/i.test(r))return`Reykjavíkurborg`;if(r&&!fr(r)&&r.toLowerCase()!==`unknown buyer`)return r;let i=String(n.extracted_buyer||n.buyer||``).trim();return/reykjavíkurborg/i.test(i)?`Reykjavíkurborg`:i&&!fr(i)&&i.toLowerCase()!==`unknown buyer`?i:pr(t)||`Unknown buyer`}function hr(e){let t=A(e);return t?t.includes(`borgarbyggd`)?`Borgarbyggð / Vesturland`:t.includes(`akranes`)?`Akranes / Vesturland`:t.includes(`faxafloahafnir`)?`Höfuðborgarsvæðið`:t.includes(`arborg`)?`Árborg / Suðurland`:``:``}function gr(e,t,n){let r=String(e||``).trim();return t===`is`&&{"Capital Area":`Höfuðborgarsvæðið`,"South Iceland":`Suðurland`,"West Iceland":`Vesturland`,"North Iceland":`Norðurland`,"East Iceland":`Austurland`,Westfjords:`Vestfirðir`,"All Iceland":(n||(e=>e))(`allIceland`),"Remote / Online":`Fjarvinna / netverkefni`}[r]||r}function _r(e,t,{language:n=`en`,translate:r}={}){let i=r||(e=>e),a=dr(e,t,i);if(n!==`is`)return a;let o=String(a||``).trim().toLowerCase();return{"public procurement":i(`publicProcurement`),procurement:i(`procurement`),tender:i(`tender`)}[o]||a.replace(/\bpublic procurement\b/gi,i(`publicProcurement`)).replace(/\btender\b/gi,i(`tender`))}function vr(e,{language:t=`en`,translate:n}={}){let r=n||((e,t={})=>t.value?`${e}: ${t.value}`:e),i=String(e||``);return i.startsWith(`Mentions your service:`)?r(`mentionsService`,{value:i.slice(22).trim()}):i.startsWith(`Contains your keyword:`)?r(`containsKeyword`,{value:i.slice(22).trim()}):{"National opportunity":r(`nationalOpportunity`),"Local match":r(`localMatch`),"Located in your selected region":r(`localMatch`),"Project value is inside your preferred range":t===`is`?`Áætlað verðmæti er innan óskaðs bils`:`Project value is inside your preferred range`,"Deadline is coming up soon":t===`is`?`Skilafrestur nálgast`:`Deadline is coming up soon`,"Matched to your company profile.":t===`is`?`Passar við fyrirtækjaprófílinn.`:`Matched to your company profile.`,"Matched to your profile by service, location or keyword overlap.":t===`is`?`Passar við þjónustu, svæði eða lykilorð í prófílnum.`:`Matched to your profile by service, location or keyword overlap.`}[i]||i||``}function yr(e,t=`en`){return t===`is`?{"Deadline not available in feed — verify on source page.":`Skilafrestur fannst ekki í innfluttum gögnum — staðfestið á upprunasíðu.`,"Deadline not available in imported data — verify on source page.":`Skilafrestur fannst ekki í innfluttum gögnum — staðfestið á upprunasíðu.`,"Deadline not available in source — verify page.":`Skilafrestur fannst ekki í heimild - staðfestið á upprunalegri síðu.`,"No formal tender deadline extracted — verify source article.":`Formlegur skilafrestur fannst ekki - staðfestið í heimildargrein.`,"Formal tender deadline not found yet — monitor source article.":`Formlegur skilafrestur fannst ekki enn - fylgist með heimildargrein.`,"Tender appears already announced/awarded — verify source article.":`Útboð virðist þegar auglýst eða afgreitt - staðfestið í heimildargrein.`,"Estimated value is not listed in the imported data.":`Áætlað verðmæti er ekki gefið upp í innfluttum gögnum.`,"Open the source page and confirm mandatory requirements.":`Opnið upprunalega heimild og staðfestið skyldukröfur.`,"Extracted project signal — verify tender timing in the source article.":`Útdregin verkefnavísbending - staðfestið útboðstímasetningu í heimildargrein.`,"Imported from broad feed — verify that this is a real tender or business opportunity.":`Innflutt úr breiðum fréttastraumi - staðfestið að þetta sé raunverulegt útboð eða viðskiptatækifæri.`}[e]||e||``:e||``}function br(e,t=`en`){return t===`is`?{"Open the source documents":`Opna útboðsgögn`,"Confirm mandatory requirements":`Staðfesta kröfur og hæfisskilyrði`,"Check capacity and profitability":`Meta getu og arðsemi`,"Prepare questions before the deadline":`Undirbúa fyrirspurnir fyrir skilafrest`,"Open source documents and confirm requirements.":`Opna útboðsgögn og staðfesta kröfur.`}[e]||e||``:e||``}var xr=`Deadline not available in imported data — verify on source page.`,Sr=`No formal tender deadline extracted — verify source article.`;function Cr(){return n(e)}function M(e,t={}){return r(N?.language||`is`,e,t)}function wr(t){N.language=t===`en`?`en`:`is`,localStorage.setItem(e.language,N.language),X()}var Tr=d,Er=12e3;function Dr(){return f(N.user?.email||``)}var N={route:location.hash.replace(`#`,``)||`/`,language:Cr(),pendingSignupPlan:Ir(location.hash.replace(`#`,``)||`/`)||jr(),pendingInviteToken:de(location.hash.replace(`#`,``)||`/`),invitePreview:null,invitePreviewLoading:!1,invitePreviewError:null,invitePreviewErrorToken:``,invitePreviewDebug:null,inviteAccepting:!1,inviteAuthEvent:``,inviteCallbackHandled:!1,trialRequestSubmitted:!1,trialRequestError:``,user:null,currentUser:null,isAdmin:!1,authLoading:!0,isBooting:!0,authLoaded:!1,profileLoaded:!1,adminLoaded:!1,bootError:null,authMessage:null,authForm:{email:``,password:``,newPassword:``,confirmPassword:``},authSubmitting:!1,isSavingProfile:!1,profileSaved:!1,profileSaveMessage:null,profileSaveError:null,profile:null,companyMembership:null,profileDraft:null,profileDraftDirty:!1,profileLoading:!1,profileLoadError:null,companyId:null,opportunities:[],storedMatches:[],opportunityActions:[],saved:yo(e.saved),ignored:yo(e.ignored),filters:{search:``,label:`recommended`,category:`all`,location:`all`,type:`all`,savedOnly:!1},tedImportMode:`nordic`,dropdown:{openKey:null,focusedIndex:0},importStatus:null,importLoading:!1,connectorImportStatus:null,connectorImportLoading:!1,connectorTestingSourceId:null,importedTedOpportunities:[],importedTedOpportunitiesLoading:!1,importedTedOpportunitiesLoaded:!1,importedTedOpportunitiesError:null,importRuns:[],importRunsLoading:!1,importRunsLoaded:!1,importRunsError:null,adminReports:[],adminReportsLoading:!1,adminReportsLoaded:!1,adminReportsError:null,adminTrialRequests:[],adminTrialRequestsLoading:!1,adminTrialRequestsLoaded:!1,adminTrialRequestsError:null,selectedAdminTrialRequestId:null,adminTrialRequestActions:{},adminTrialCompanyDraft:null,adminTrialCompanySaving:!1,adminTrialCompanyMessage:``,adminTrialCompanyError:``,selectedAdminReport:null,selectedAdminReportLoading:!1,selectedAdminReportError:null,sourceCoverage:[],sourceCoverageLoading:!1,sourceCoverageLoaded:!1,sourceCoverageError:null,expandedSourceId:null,adminCompanies:[],adminCompaniesLoading:!1,adminCompaniesLoaded:!1,adminCompaniesError:null,adminReviewMatches:[],adminReviewLoading:!1,adminReviewLoaded:!1,adminReviewError:null,adminReviewActions:{},adminAiReviewActions:{},adminAiReviewError:null,adminCompanyAiReviewActions:{},adminCompanyAiReviewResults:{},adminCompanyAiReviewFilter:`not_reviewed`,adminCompanyActions:{},adminCompanyAccessActions:{},adminCompanyInviteDrafts:{},adminCompanyInviteLinks:{},adminCompanyInviteDebug:{},adminReportDeliveryActions:{},selectedAdminCompanyId:null,adminActiveTab:`overview`,adminCompanyFilters:{search:``,industry:`all`,profileStatus:`all`,plan:`all`},adminReportMode:`all_current`,adminOpportunityFilters:{source:`all`,missingDeadlineSource:`all`,status:`all`,country:`all`,search:``,debugCompanyId:``,tedOnly:!1,manualOnly:!1,showDemoTest:!1,...Pr()},adminOpportunityDraft:Gr(),matchStatus:null,matchingLoading:!1,lastMatchedAt:null,reports:[],reportsLoaded:!1,reportsLoadError:null,reportArchiveLoading:!1,reportSaveLoading:!1,reportMessage:null,selectedReportId:null,selectedAdminReportId:null,adminMessage:null,adminSubmitting:!1,adminDeletingId:null,adminUpdatingId:null,isLoadingOpportunities:!1,opportunityLoadError:null,isMobileMenuOpen:!1,isMobileMenuClosing:!1,profileMenuOpen:!1,selectedOpportunityId:null,toast:null};function Or(e=N.route){return String(e||`/`).split(`?`)[0]||`/`}function kr(e=N.route){let t=String(e||``).split(`?`)[1]||``;return new URLSearchParams(t)}function Ar(e){let t=String(e||``).trim().toLowerCase();return[`basic`,`pro`,`priority`].includes(t)?t:``}function jr(){try{return Ar(localStorage.getItem(e.selectedPlan))}catch{return``}}function Mr(t){let n=Ar(t);try{n&&localStorage.setItem(e.selectedPlan,n)}catch{}return n}function Nr(){try{localStorage.removeItem(e.selectedPlan)}catch{}}function Pr(){try{let e=sessionStorage.getItem(`verkradar_admin_opportunity_view`),t=e?JSON.parse(e):{};return{sortBy:cl(t.sortBy),addedWindow:ll(t.addedWindow)}}catch{return{sortBy:`created_desc`,addedWindow:`all`}}}function Fr(){try{sessionStorage.setItem(`verkradar_admin_opportunity_view`,JSON.stringify({sortBy:cl(N.adminOpportunityFilters?.sortBy),addedWindow:ll(N.adminOpportunityFilters?.addedWindow)}))}catch{}}function Ir(e=N.route){return Ar(kr(e).get(`plan`))}function Lr(e=N.route){let t=Ir(e);t&&(N.pendingSignupPlan=Mr(t))}function Rr(e=N.route){let t=x(e);if(ue(e)&&!t){let e=w();if(e){N.pendingInviteToken=e;return}zr();return}if(ue(e)&&t&&t!==N.pendingInviteToken){N.pendingInviteToken=pe(t),N.invitePreview=null,N.invitePreviewError=null,N.invitePreviewErrorToken=``;return}ue(e)||zr()}function zr(){me(),N.pendingInviteToken=``,N.invitePreview=null,N.invitePreviewError=null,N.invitePreviewErrorToken=``,N.invitePreviewDebug=null,N.inviteAccepting=!1}async function P(e={}){if(!ae())return;let t=await se(N.inviteAuthEvent);N.invitePreviewDebug={...oe(N.route),...t,...N.invitePreviewDebug||{},...e}}function Br(e){return[`expired`,`revoked`].includes(String(e||``))}function Vr(){return window.location.pathname===`/auth/callback`}async function Hr(){let e=C();if(!g||N.inviteCallbackHandled||!Vr()&&!e.hasImplicitTokens)return!1;N.inviteCallbackHandled=!0;let t=S(e.invite||w());t&&(N.pendingInviteToken=pe(t)),await P({auth_flow:e.code?`pkce`:e.hasImplicitTokens?`implicit_fallback`:`unknown`,raw_token_had_fragment:e.rawTokenHadFragment,sanitized_token_length:t.length,code_present:!!e.code,exchange_code_attempted:!1,exchange_code_succeeded:!1,session_present:!1});try{if(e.code){await P({exchange_code_attempted:!0});let{data:t,error:n}=await g.auth.exchangeCodeForSession(e.code);if(n)throw n;await P({exchange_code_succeeded:!0,session_present:!!t?.session})}else if(e.hasImplicitTokens){let{data:t,error:n}=await g.auth.setSession({access_token:e.accessToken,refresh_token:e.refreshToken});if(n)throw n;await P({auth_flow:`implicit_fallback`,session_present:!!t?.session})}}catch(e){console.error(`Auth callback handling failed:`,e),await P({auth_callback_error:errorMessage(e),exchange_code_succeeded:!1})}return N.route=ie(t),!0}function Ur(e){let t=N.pendingInviteToken||x(N.route);return t&&ue(N.route)?`${e}?invite=${encodeURIComponent(t)}`:e}`scrollRestoration`in history&&(history.scrollRestoration=`manual`);function Wr(){localStorage.removeItem(`verkradar_profile`),localStorage.removeItem(`verkradar_local_user_id`),localStorage.removeItem(`verkradar_saved_opportunities`),localStorage.removeItem(`verkradar_ignored_opportunities`),Y(),N.profile=null,N.profileDraft=null,N.profileDraftDirty=!1,N.currentUser=null,N.companyId=null,N.storedMatches=[],N.opportunityActions=[],N.reports=[],N.reportsLoaded=!1,N.reportsLoadError=null,N.reportMessage=null,N.selectedReportId=null,N.profileSaved=!1,N.profileSaveMessage=null,N.profileSaveError=null,N.saved=[],N.ignored=[],N.importRuns=[],N.importRunsLoading=!1,N.importRunsLoaded=!1,N.importRunsError=null,N.importedTedOpportunities=[],N.importedTedOpportunitiesLoading=!1,N.importedTedOpportunitiesLoaded=!1,N.importedTedOpportunitiesError=null,N.adminReports=[],N.adminReportsLoading=!1,N.adminReportsLoaded=!1,N.adminReportsError=null,N.selectedAdminReport=null,N.selectedAdminReportLoading=!1,N.selectedAdminReportError=null,N.sourceCoverage=[],N.sourceCoverageLoading=!1,N.sourceCoverageLoaded=!1,N.sourceCoverageError=null,N.adminCompanies=[],N.adminCompaniesLoading=!1,N.adminCompaniesLoaded=!1,N.adminCompaniesError=null,N.selectedAdminCompanyId=null,N.lastMatchedAt=null}function Gr(){return{title:``,buyer:``,sourceName:``,category:``,type:`tender`,deadline:``,published_date:``,location:``,estimated_value:``,url:``,cpv_code:``,difficulty:`medium`,status:`open`,description:``,requirements:``,keywords:``}}function Kr(e){let t=Gr();Object.keys(t).forEach(n=>{t[n]=String(e.get(n)||``)}),N.adminOpportunityDraft=t}var qr=!1,Jr=null,Yr=220;window.addEventListener(`hashchange`,()=>{let e=location.hash.replace(`#`,``)||`/`,t=Or(e),n=e!==N.route;if(qr&&e===N.route){qr=!1;return}qr=!1,[`/login`,`/signup`,`/forgot-password`,`/reset-password`].includes(t)&&e!==N.route&&(N.authMessage=null,N.authSubmitting=!1),N.route=e,Lr(e),Rr(e),$r(),N.profileMenuOpen=!1,n&&Y(),X(),di(),I()}),document.addEventListener(`click`,e=>{if(N.dropdown.openKey&&!e.target.closest?.(`.custom-select`)&&Fl(),N.profileMenuOpen&&!e.target.closest?.(`.profile-menu`)&&(N.profileMenuOpen=!1,X()),e.target.classList?.contains(`modal-backdrop`)){if(e.preventDefault(),N.selectedAdminCompanyId){N.selectedAdminCompanyId=null,X();return}Hs();return}if((N.isMobileMenuOpen||N.isMobileMenuClosing)&&!e.target.closest?.(`.site-header`)){Qr();return}let t=e.target.closest?.(`[data-action]`);if(!t)return;let n=t.dataset.action,r=t.dataset.id;if(n===`close-modal`){if(e.preventDefault(),e.stopPropagation(),N.selectedAdminCompanyId){N.selectedAdminCompanyId=null,X();return}Hs();return}if(n===`toggle-mobile-menu`){e.preventDefault(),N.isMobileMenuOpen||N.isMobileMenuClosing?Qr():Zr();return}if(n===`close-mobile-menu`){e.preventDefault(),Qr();return}if(n===`mobile-nav`){e.preventDefault(),ei(t.dataset.href);return}if(n===`mobile-scroll-to`){e.preventDefault(),ti(t.dataset.target);return}if(n===`toggle-profile-menu`){if(e.preventDefault(),N.isMobileMenuOpen||ni()){N.profileMenuOpen=!1,X();return}N.profileMenuOpen=!N.profileMenuOpen,X();return}if(n===`toggle-language`){e.preventDefault(),wr(N.language===`is`?`en`:`is`);return}if(n===`toggle-dropdown`){e.preventDefault();let n=t.dataset.key,r=N.dropdown.openKey===n;N.dropdown.openKey=r?null:n,N.dropdown.focusedIndex=Ml(n),X(),r||Il();return}if(n===`select-filter`){e.preventDefault();let n=t.dataset.key,r=t.dataset.value;t.dataset.profileField?t.closest?.(`#admin-trial-company-form`)?(Eo(),N.adminTrialCompanyDraft[t.dataset.profileField]=r):(G(),N.profileDraft[t.dataset.profileField]=r,jo()):N.filters[n]=r,N.dropdown.openKey=null,N.dropdown.focusedIndex=0,X();return}if(n===`toggle-profile-suggestion`){e.preventDefault(),t.closest?.(`#admin-trial-company-form`)?Oo(t.dataset.field,t.dataset.value):To(t.dataset.field,t.dataset.value);return}if(n===`scroll-to`){e.preventDefault();let n=t.dataset.target;if(!n)return;let r=()=>{N.route===`/`?(X(),setTimeout(()=>fi(n),0)):(F(`/`),setTimeout(()=>fi(n),50))};N.isMobileMenuOpen||N.isMobileMenuClosing?Qr(r):r();return}if(n===`go`){e.preventDefault(),N.profileMenuOpen=!1,N.isMobileMenuOpen||N.isMobileMenuClosing?Qr(()=>F(t.dataset.href)):F(t.dataset.href);return}if(n===`accept-company-invite`){Dc();return}if(n===`save`&&Rs(r),n===`ignore`&&zs(r),n===`unignore`&&Bs(r),n===`details`&&Vs(r),n===`admin-report-override`){mo(r,t.dataset.override||``);return}if(n===`copy-report`&&Kd(),n===`download-report-pdf`&&qd(),n===`download-admin-report-pdf`){Jd();return}if(n===`save-report`&&so(),n===`archive-report`){co(r);return}if(n===`view-report`&&(N.selectedReportId=r,X()),n===`close-archive-report`&&(N.selectedReportId=null,X()),n===`view-admin-report`){N.selectedAdminReportId=r,N.selectedAdminReport=null,N.selectedAdminReportError=null,N.adminActiveTab=`reports`,X(),yi(r);return}if(n===`close-admin-report`){N.selectedAdminReportId=null,N.selectedAdminReport=null,N.selectedAdminReportError=null,X();return}if(n===`copy-admin-report`){il(r);return}if(n===`mark-admin-report-sent`){al(r);return}if(n===`admin-tab`&&(N.adminActiveTab=t.dataset.tab||`overview`,N.selectedAdminCompanyId=null,N.selectedAdminReportId=null,N.selectedAdminTrialRequestId=null,N.adminTrialCompanyDraft=null,X(),nc()),n===`view-admin-company`&&(N.selectedAdminCompanyId=r,X()),n===`close-admin-company`&&(N.selectedAdminCompanyId=null,X()),n===`view-admin-trial-request`){N.selectedAdminTrialRequestId=r,N.adminTrialCompanyDraft=null,N.adminTrialCompanyMessage=``,N.adminTrialCompanyError=``,X();return}if(n===`close-admin-trial-request`){N.selectedAdminTrialRequestId=null,N.adminTrialCompanyDraft=null,N.adminTrialCompanyMessage=``,N.adminTrialCompanyError=``,X();return}if(n===`admin-trial-request-status`){_i(r,t.dataset.status||``);return}if(n===`admin-start-trial-company`){Do(r);return}if(n===`admin-refresh-company-matches`){Li(r);return}if(n===`admin-generate-company-report`){Ri(r);return}if(n===`admin-review-match`){zi(r,t.dataset.companyId||``,t.dataset.reviewAction||``);return}if(n===`admin-ai-review-match`){Bi(r,{force:t.dataset.force===`true`});return}if(n===`admin-ai-review-company`){Vi(r,{force:t.dataset.force===`true`});return}if(n===`admin-run-auto-ai-review`){Hi();return}if(n===`admin-run-daily-pipeline`){Ui();return}if(n===`admin-toggle-company-auto-ai`){Wi(r,t.dataset.enabled===`true`);return}if(n===`admin-invite-company-customer`){ji(r);return}if(n===`admin-revoke-company-access`){Mi(r,t.dataset.memberId||``);return}if(n===`admin-copy-company-invite-link`){Ii(r);return}if(n===`import-ted`&&ka(),n===`import-source-connectors`&&Aa(),n===`test-source-connector`&&Aa(r),n===`toggle-source-items`&&(N.expandedSourceId=N.expandedSourceId===r?null:r,X()),n===`refresh-admin-status`&&Ji(),n===`hide-imported-opportunity`&&po(r,`hidden`),n===`mark-imported-relevant`&&po(r,`open`),n===`run-matching`&&lo(),n===`retry-settings-profile`&&Qa(),n===`show-all-matches`&&(N.filters.label=`all`,X()),n===`show-all-opportunities`&&(N.filters.label=`all_opportunities`,X()),n===`include-national-opportunities`&&(G(),N.profileDraft.nationalProjects=!0,N.profileDraft.locations.includes(`All Iceland`)||(N.profileDraft.locations=[...N.profileDraft.locations,`All Iceland`]),jo(),F(`/settings`)),n===`delete-opportunity`&&fo(r),n===`logout`){if(N.profileMenuOpen=!1,Y(),N.isMobileMenuOpen||N.isMobileMenuClosing){Qr(()=>Va());return}Va()}n===`load-demo`&&(N.user?ro(Tr).then(()=>F(`/dashboard`)).catch(e=>{console.error(`Failed to load demo profile:`,e),N.profileSaveError=U(e),X()}):(vo(Tr),N.profile=Tr,F(`/dashboard`))),n===`reset`&&(Wr(),F(`/`))}),document.addEventListener(`keydown`,e=>{if(e.key===`Escape`&&(N.isMobileMenuOpen||N.isMobileMenuClosing)){e.preventDefault(),Qr();return}if(e.key===`Escape`&&N.profileMenuOpen){e.preventDefault(),N.profileMenuOpen=!1,X();return}if(e.key===`Escape`&&N.selectedOpportunityId){e.preventDefault(),Hs();return}if(e.key===`Escape`&&N.selectedAdminCompanyId){e.preventDefault(),N.selectedAdminCompanyId=null,X();return}let t=e.target.closest?.(`.custom-select`),n=t?.dataset.key||N.dropdown.openKey;if(!n)return;let r=jl(n),i=N.dropdown.openKey===n;if(e.key===`Escape`&&i){e.preventDefault(),Fl(),Ll(n);return}if((e.key===`ArrowDown`||e.key===`ArrowUp`)&&!i){e.preventDefault(),N.dropdown.openKey=n,N.dropdown.focusedIndex=Ml(n),X(),Il();return}if(i){if(e.key===`ArrowDown`||e.key===`ArrowUp`){e.preventDefault();let t=e.key===`ArrowDown`?1:-1;N.dropdown.focusedIndex=(N.dropdown.focusedIndex+t+r.length)%r.length,X(),Il();return}if(e.key===`Enter`||e.key===` `){e.preventDefault();let i=r[N.dropdown.focusedIndex];if(!i)return;let a=t?.querySelector?.(`[data-profile-field]`)?.dataset.profileField;a?(G(),N.profileDraft[a]=i.value,jo()):N.filters[n]=i.value,N.dropdown.openKey=null,N.dropdown.focusedIndex=0,X(),Ll(n)}}}),document.addEventListener(`input`,e=>{let t=e.target.closest?.(`[data-auth-field]`);if(t){N.authForm[t.dataset.authField]=t.value;return}let n=e.target.closest?.(`[data-profile-field]`);if(n){let t=e.target.closest?.(`#admin-trial-company-form`);if(t){Po(t);return}G();let r=n.dataset.profileField;n.type===`checkbox`?N.profileDraft[r]=n.checked:n.dataset.profileArray===`true`?N.profileDraft[r]=O(n.value):(n.dataset.profileNumber,N.profileDraft[r]=n.value),jo();return}if(e.target.matches(`[data-filter]`)){let t=e.target.dataset.filter;e.target.type===`checkbox`?N.filters[t]=e.target.checked:N.filters[t]=e.target.value,X()}if(e.target.matches(`[data-admin-filter]`)){let t=e.target.dataset.adminFilter;N.adminOpportunityFilters=sl(),e.target.type===`checkbox`?(N.adminOpportunityFilters[t]=e.target.checked,t===`tedOnly`&&e.target.checked&&(N.adminOpportunityFilters.manualOnly=!1),t===`manualOnly`&&e.target.checked&&(N.adminOpportunityFilters.tedOnly=!1)):N.adminOpportunityFilters[t]=e.target.value,(t===`sortBy`||t===`addedWindow`)&&Fr(),tc(e.target);return}if(e.target.matches(`[data-admin-opportunity-field]`)){let t=e.target.dataset.adminOpportunityField;N.adminOpportunityDraft={...Gr(),...N.adminOpportunityDraft||{},[t]:e.target.value};return}if(e.target.matches(`[data-admin-company-filter]`)){let t=e.target.dataset.adminCompanyFilter;N.adminCompanyFilters[t]=e.target.value,tc(e.target);return}if(e.target.matches(`[data-admin-company-invite-email]`)){let t=e.target.dataset.id||``;t&&(N.adminCompanyInviteDrafts={...N.adminCompanyInviteDrafts||{},[t]:e.target.value});return}e.target.matches(`[data-admin-report-mode]`)&&(N.adminReportMode=e.target.value===`all_current`?`all_current`:`new_only`,X()),e.target.matches(`[data-admin-company-ai-filter]`)&&(N.adminCompanyAiReviewFilter=e.target.value||`not_reviewed`,tc(e.target))}),document.addEventListener(`change`,e=>{if(e.target.matches(`[data-admin-filter]`)){let t=e.target.dataset.adminFilter;N.adminOpportunityFilters=sl(),e.target.type===`checkbox`?(N.adminOpportunityFilters[t]=e.target.checked,t===`tedOnly`&&e.target.checked&&(N.adminOpportunityFilters.manualOnly=!1),t===`manualOnly`&&e.target.checked&&(N.adminOpportunityFilters.tedOnly=!1)):N.adminOpportunityFilters[t]=e.target.value,(t===`sortBy`||t===`addedWindow`)&&Fr(),tc(e.target);return}if(e.target.matches(`[data-import-mode]`)){N.tedImportMode=e.target.value,X();return}if(e.target.matches(`[data-admin-company-ai-filter]`)){N.adminCompanyAiReviewFilter=e.target.value||`not_reviewed`,tc(e.target);return}if(e.target.matches(`[data-profile-location]`)){let t=e.target.closest?.(`#admin-trial-company-form`);if(t){Po(t);return}G(),N.profileDraft.locations=Array.from(document.querySelectorAll(`[data-profile-location]:checked`)).map(e=>e.value),jo();return}let t=e.target.closest?.(`[data-profile-field]`);if(!t)return;let n=e.target.closest?.(`#admin-trial-company-form`);if(n){Po(n);return}G();let r=t.dataset.profileField;N.profileDraft[r]=t.type===`checkbox`?t.checked:t.value,jo()}),document.addEventListener(`submit`,async e=>{if(e.target.id===`login-form`){e.preventDefault();let t=new FormData(e.target);Ra(t.get(`email`),t.get(`password`));return}if(e.target.id===`signup-form`){e.preventDefault();let t=new FormData(e.target);La(t.get(`email`),t.get(`password`));return}if(e.target.id===`trial-request-form`){e.preventDefault(),N.trialRequestError=``;try{await _n(new FormData(e.target)),N.trialRequestSubmitted=!0,X(),di()}catch(e){console.error(`Trial request failed:`,e),N.trialRequestSubmitted=!1,N.trialRequestError=M(`trialRequestError`),X(),W(M(`trialRequestError`),`error`)}return}if(e.target.id===`forgot-password-form`){e.preventDefault(),za(new FormData(e.target).get(`email`));return}if(e.target.id===`reset-password-form`){e.preventDefault();let t=new FormData(e.target);Ba(t.get(`newPassword`),t.get(`confirmPassword`));return}if(e.target.id===`admin-opportunity-form`){e.preventDefault();let t=new FormData(e.target);Kr(t),uo(t,e.target);return}if(e.target.id===`admin-trial-company-form`){e.preventDefault(),await vi(e.target);return}if(e.target.matches(`[data-admin-matching-profile-form]`)){e.preventDefault(),await Ni(e.target.dataset.companyId||``,e.target);return}if(e.target.matches(`[data-admin-match-decision-form]`)){e.preventDefault(),await Pi(e.target.dataset.companyId||``,e.target);return}if(e.target.matches(`[data-admin-evaluation-label-form]`)){e.preventDefault(),await Fi(e.target.dataset.companyId||``,e.target);return}if(e.target.id===`profile-form`){e.preventDefault(),N.profileSaved=!1,No(e.target);let t=Io();if(!t.companyName||!t.kennitala||!t.contactEmail||!t.billingEmail||!t.contactName||!t.phone||!t.address||!t.industry){W(N.language===`is`?`Fylltu út fyrirtækisnafn, kennitölu, reikningsupplýsingar, tengilið og atvinnugrein.`:`Please fill in company name, kennitala, billing details, contact details and industry.`,`error`);return}N.isSavingProfile=!0,N.profileSaved=!1,N.profileSaveMessage=null,N.profileSaveError=null,X();let n=N.route!==`/settings`;try{if(await ro(t),await Xa({overwriteDraft:!0}),N.profileLoadError)throw Error(`Profile saved, but the saved profile could not be reloaded. ${N.profileLoadError}`);N.profileSaveMessage=`Refreshing matches...`,N.profileSaveError=null,X();let e=await lo();if(N.matchStatus?.type===`error`)N.profileSaveMessage=`Profile saved, but matching could not be refreshed. Try Run matching.`;else{let t=e===1?`opportunity`:`opportunities`;N.profileSaveMessage=n?`Profile saved — ${e} relevant ${t} found. Redirecting...`:`Profile saved — ${e} relevant ${t} found.`}N.profileSaved=!0,X(),clearTimeout(window.__profileSavedTimeout),window.__profileSavedTimeout=setTimeout(()=>{N.profileSaved=!1,X()},1800),n&&setTimeout(()=>F(`/dashboard`),800)}catch(e){console.error(`Failed to save company profile:`,e),N.profileSaveError=U(e),N.profileSaveMessage=null,N.profileSaved=!1}finally{N.isSavingProfile=!1,X()}}}),window.addEventListener(`focus`,Xr),document.addEventListener(`visibilitychange`,()=>{document.visibilityState===`visible`&&Xr()});function Xr(){N.route===`/settings`&&N.profileDraftDirty&&(N.profileLoading=!1,N.profileLoaded=!0,X())}function Zr(){Jr&&=(clearTimeout(Jr),null),ri(),N.isMobileMenuOpen=!0,N.isMobileMenuClosing=!1,N.profileMenuOpen=!1,document.body.classList.add(`mobile-menu-active`),X()}function Qr(e){let t=()=>{typeof e==`function`&&e()};if(!N.isMobileMenuOpen&&!N.isMobileMenuClosing){t();return}N.isMobileMenuOpen=!1,N.isMobileMenuClosing=!0,N.profileMenuOpen=!1,X(),Jr&&clearTimeout(Jr);let n=window.matchMedia?.(`(prefers-reduced-motion: reduce)`).matches?0:Yr;Jr=setTimeout(()=>{Jr=null,N.isMobileMenuClosing=!1,document.body.classList.remove(`mobile-menu-active`),X(),t()},n)}function $r(){Jr&&=(clearTimeout(Jr),null),N.isMobileMenuOpen=!1,N.isMobileMenuClosing=!1,document.body.classList.remove(`mobile-menu-active`)}function ei(e){if(e){if(!N.isMobileMenuOpen&&!N.isMobileMenuClosing){F(e);return}Qr(()=>F(e))}}function ti(e){if(!e)return;let t=()=>{N.route===`/`?(X(),setTimeout(()=>fi(e),0)):(F(`/`),setTimeout(()=>fi(e),50))};if(!N.isMobileMenuOpen&&!N.isMobileMenuClosing){t();return}Qr(t)}function ni(){return typeof window<`u`&&window.matchMedia?.(`(max-width: 920px)`).matches}function ri(){let e=document.querySelector(`.site-header`);e&&document.documentElement.style.setProperty(`--header-height`,`${Math.ceil(e.getBoundingClientRect().height)}px`)}window.addEventListener(`resize`,()=>{ri(),!ni()&&(N.isMobileMenuOpen||N.isMobileMenuClosing)&&($r(),X())});function F(e){e||=`/`;let t=[`/login`,`/signup`,`/forgot-password`,`/reset-password`],n=Or(e);if(t.includes(n)&&e!==N.route&&(N.authMessage=null,N.authSubmitting=!1),$r(),N.profileMenuOpen=!1,N.route===e){X(),di(),I();return}Y(),N.route=e,Lr(e),Rr(e),qr=!0,location.hash=e,X(),di(),I()}function ii(){if(!N.user&&!N.currentUser)return`/`;let e=ai();return e?`/accept-invite?token=${encodeURIComponent(e)}`:N.profile?`/dashboard`:`/onboarding`}function ai(){return S(x(N.route)||N.pendingInviteToken||w())}function oi(){return!N.user&&!N.currentUser?`/trial`:N.profile?`/dashboard`:`/onboarding`}function si(e=N.route){let t=String(e||``);if(ci(t))return!1;let n=Or(t);return[`/`,`/login`,`/signup`,`/forgot-password`].includes(n)||t.startsWith(`access_token=`)||t.startsWith(`code=`)||t.includes(`type=signup`)||t.includes(`type=email_change`)}function ci(e=N.route){let t=String(e||``);return t===`/reset-password`||t.startsWith(`/reset-password`)||t.includes(`type=recovery`)}function li(e){N.route=e,location.hash.replace(`#`,``)!==e&&history.replaceState(null,``,`#${e}`)}function ui({replace:e=!1}={}){if(!N.user&&!N.currentUser||!si())return!1;let t=ii();return N.authMessage=null,e?li(t):F(t),!0}function I(){let e=ai();if(N.user&&e&&Or(N.route)!==`/accept-invite`){N.pendingInviteToken=pe(e),P({pending_invite_present:!0,onboarding_redirect_blocked:!0,final_route:`/accept-invite?token=${encodeURIComponent(e)}`}),li(`/accept-invite?token=${encodeURIComponent(e)}`),X();return}Or(N.route)===`/accept-invite`&&(Ec(),N.user&&!N.inviteAccepting&&!N.invitePreviewError&&Dc()),N.route===`/report`&&N.companyId&&!N.reportsLoaded&&!N.reportArchiveLoading&&oo(),N.route===`/admin`&&N.isAdmin&&(nc(),!N.importRunsLoaded&&!N.importRunsLoading&&mi(),!N.adminReportsLoaded&&!N.adminReportsLoading&&hi(),!N.adminTrialRequestsLoaded&&!N.adminTrialRequestsLoading&&gi(),!N.sourceCoverageLoaded&&!N.sourceCoverageLoading&&xi(),!N.adminCompaniesLoaded&&!N.adminCompaniesLoading&&L(),!N.adminReviewLoaded&&!N.adminReviewLoading&&Si(),!N.importedTedOpportunitiesLoaded&&!N.importedTedOpportunitiesLoading&&ja().then(X).catch(e=>{console.error(`Failed to load latest TED opportunities:`,e)}))}function di(){window.scrollTo(0,0)}function fi(e){let t=document.getElementById(e);t&&t.scrollIntoView({behavior:`smooth`,block:`start`})}async function pi(){N.isLoadingOpportunities=!0,N.opportunityLoadError=null,X();try{if(!g)throw Error(`Supabase client not configured`);let{data:e,error:t}=await g.from(`opportunities`).select(`*, sources(name, source_type)`).eq(`status`,`open`).order(`deadline`,{ascending:!0});if(t)throw t;!e||e.length===0?(N.opportunities=window.VERKRADAR_OPPORTUNITIES||[],N.storedMatches=[],N.opportunityLoadError=`Using demo data. Supabase has no opportunities yet.`):(N.opportunities=e.map(Yi),N.opportunityLoadError=null,N.companyId&&(await Fs(),await ao()))}catch(e){console.error(`Failed to load Supabase opportunities:`,e),N.opportunities=window.VERKRADAR_OPPORTUNITIES||[],N.storedMatches=[],N.opportunityLoadError=`Using demo data. Supabase connection failed.`}finally{N.isLoadingOpportunities=!1,X()}}async function mi(){if(!g||!N.isAdmin){N.importRuns=[],N.importRunsLoaded=!0;return}N.importRunsLoading=!0,N.importRunsError=null,X();try{let{data:e,error:t}=await g.from(`import_runs`).select(`*`).order(`started_at`,{ascending:!1}).limit(10);if(t)throw t;N.importRuns=e||[],N.importRunsLoaded=!0}catch(e){console.error(`Failed to load import runs:`,e),N.importRuns=[],N.importRunsError=U(e)}finally{N.importRunsLoading=!1,N.importRunsLoaded=!0,X()}}async function hi(){if(!g||!N.isAdmin){N.adminReports=[],N.adminReportsLoaded=!0;return}N.adminReportsLoading=!0,N.adminReportsError=null,X();try{let{data:e,error:t}=await g.from(`reports`).select(`
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
      `).order(`created_at`,{ascending:!1}).limit(10);if(t)throw t;N.adminReports=e||[],N.adminReportsLoaded=!0}catch(e){console.error(`Failed to load admin reports:`,e),N.adminReports=[],N.adminReportsError=U(e)}finally{N.adminReportsLoading=!1,N.adminReportsLoaded=!0,X()}}async function gi(){if(!g||!N.isAdmin){N.adminTrialRequests=[],N.adminTrialRequestsLoaded=!0;return}N.adminTrialRequestsLoading=!0,N.adminTrialRequestsError=null,X();try{N.adminTrialRequests=await vn()}catch(e){console.error(`Failed to load trial requests:`,e),N.adminTrialRequests=[],N.adminTrialRequestsError=U(e)}finally{N.adminTrialRequestsLoading=!1,N.adminTrialRequestsLoaded=!0,X()}}async function _i(e,t){if(e){N.adminTrialRequestActions={...N.adminTrialRequestActions||{},[e]:t},N.adminTrialCompanyError=``,N.adminTrialCompanyMessage=``,X();try{await bn(e,t),await gi(),W(t===`contacted`?`Beiðni merkt sem haft samband.`:`Beiðni hafnað.`,`success`)}catch(e){console.error(`Failed to update trial request:`,e),N.adminTrialCompanyError=U(e),W(N.adminTrialCompanyError,`error`),X()}finally{N.adminTrialRequestActions={...N.adminTrialRequestActions||{},[e]:null},X()}}}async function vi(e){let t=gu();if(!t)return;if(t.converted_company_id||t.status===`converted`){N.adminTrialCompanyError=`Þessi beiðni hefur þegar verið umbreytt.`,X();return}Po(e);let n=Lo();if(!n.companyName||!n.kennitala||!n.contactEmail||!n.billingEmail||!n.contactName||!n.phone||!n.address||!n.industry){N.adminTrialCompanyError=`Fylltu út fyrirtækisnafn, kennitölu, tengilið, reikningsnetfang, síma, heimilisfang og atvinnugrein áður en fyrirtæki er stofnað.`,N.adminTrialCompanyMessage=``,X(),W(N.adminTrialCompanyError,`error`);return}N.adminTrialCompanySaving=!0,N.adminTrialCompanyError=``,N.adminTrialCompanyMessage=``,X();try{let e=await xn(t.id,n);N.adminTrialCompanyMessage=`Fyrirtæki stofnað: ${e.company_name||n.companyName}`,N.adminTrialCompanyDraft=null,N.selectedAdminCompanyId=e.company_id||null,await Promise.all([gi(),L()]),W(`Fyrirtæki stofnað úr prufubeiðni.`,`success`)}catch(e){console.error(`Failed to create company from trial request:`,e),N.adminTrialCompanyError=U(e),W(N.adminTrialCompanyError,`error`)}finally{N.adminTrialCompanySaving=!1,X()}}async function yi(e){if(!(!g||!N.isAdmin||!e)){N.selectedAdminReportLoading=!0,N.selectedAdminReportError=null,X();try{let{data:t,error:n}=await g.from(`reports`).select(`
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
      `).eq(`id`,e).single();if(n)throw n;await bi(t),N.selectedAdminReportId===e&&(N.selectedAdminReport=t)}catch(t){console.error(`Failed to load admin report details:`,t),N.selectedAdminReportId===e&&(N.selectedAdminReport=null,N.selectedAdminReportError=U(t))}finally{N.selectedAdminReportId===e&&(N.selectedAdminReportLoading=!1,X())}}}async function bi(e){let t=Array.isArray(e?.report_items)?e.report_items:[],n=t.map(e=>e.opportunity_id).filter(Boolean);if(!g||!e?.company_id||!n.length)return;let{data:r,error:i}=await g.from(`company_opportunity_sends`).select(`opportunity_id, sent_at, created_at, channel`).eq(`company_id`,e.company_id).in(`opportunity_id`,n).in(`channel`,[`manual_email`,`automated_email`]);if(i){console.warn(`Failed to load report sent status:`,i);return}let a=new Map((r||[]).map(e=>[String(e.opportunity_id),e]));t.forEach(e=>{let t=a.get(String(e.opportunity_id));e.sent_at=t?.sent_at||t?.created_at||``,e.delivery_type=t?.channel||``})}async function xi(){if(!g||!N.isAdmin){N.sourceCoverage=[],N.sourceCoverageLoaded=!0;return}N.sourceCoverageLoading=!0,N.sourceCoverageError=null,X();try{let{data:e,error:t}=await g.from(`sources`).select(`
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
      `).order(`name`,{ascending:!0});if(t)throw t;let n=(e||[]).map(e=>({...e,source_status:Array.isArray(e.source_status)?e.source_status[0]:e.source_status,source_connectors:Array.isArray(e.source_connectors)?e.source_connectors[0]:e.source_connectors})),r=n.map(e=>e.id).filter(Boolean),i={};if(r.length){let{data:e,error:t}=await g.from(`opportunities`).select(`id, source_id, title, buyer, deadline, status, url, raw_payload, created_at, published_date`).in(`source_id`,r).eq(`status`,`open`).order(`created_at`,{ascending:!1}).limit(500);if(t)throw t;i=(e||[]).reduce((e,t)=>(e[t.source_id]||(e[t.source_id]=[]),e[t.source_id].push(t),e),{})}N.sourceCoverage=n.map(e=>{let t=i[e.id]||[];return{...e,opportunityStats:Jc(t),latestOpportunities:t.slice(0,8)}}),N.sourceCoverageLoaded=!0}catch(e){console.error(`Failed to load source coverage:`,e),N.sourceCoverage=[],N.sourceCoverageError=U(e)}finally{N.sourceCoverageLoading=!1,N.sourceCoverageLoaded=!0,X()}}async function L(){if(!g||!N.isAdmin){N.adminCompanies=[],N.adminCompaniesLoaded=!0;return}N.adminCompaniesLoading=!0,N.adminCompaniesError=null,X();try{N.adminAiUsageSummary=await Re().catch(e=>(console.warn(`Failed to load AI usage summary:`,e),null));let{data:e,error:t}=await g.from(`companies`).select(`*`).order(`created_at`,{ascending:!1});if(t)throw t;let n=e||[],r=n.map(e=>e.id).filter(Boolean),i=[],a=[],o=[],s=[],c=[],l=[],u=[],d=[],f=[];if(r.length){let[e,t,n,p,m,h,_,v,y]=await Promise.all([g.from(`company_services`).select(`company_id, service`).in(`company_id`,r),g.from(`company_locations`).select(`company_id, location`).in(`company_id`,r),g.from(`company_keywords`).select(`company_id, keyword, type`).in(`company_id`,r),g.from(`opportunity_matches`).select(`id, company_id, opportunity_id, match_score, match_label, safety_status, ai_review_status, ai_review_fit, ai_review_confidence, ai_reviewed_at, ai_review_skipped_reason, opportunities(title, buyer, location, raw_payload, source_id, sources(name))`).in(`company_id`,r),g.from(`reports`).select(`id, company_id, title, created_at, period_start, period_end, status`).in(`company_id`,r).order(`created_at`,{ascending:!1}),g.from(`ai_match_reviews`).select(`id, company_id, opportunity_id, match_id, fit, confidence, send_to_client, reason, reviewed_profile_hash, profile_updated_at, company_services_snapshot, company_locations_snapshot, created_at, updated_at`).in(`company_id`,r),g.from(`company_members`).select(`id, company_id, user_id, email, role, status, invited_at, accepted_at, revoked_at, expires_at`).in(`company_id`,r).order(`created_at`,{ascending:!1}),g.from(`admin_match_decisions`).select(`id, company_id, opportunity_id, decision, reason, comment, decided_at, decided_by`).in(`company_id`,r),g.from(`match_evaluation_labels`).select(`id, company_id, opportunity_id, label, reason, notes, labeled_at, labeled_by`).in(`company_id`,r)]);i=e.error?[]:e.data||[],a=t.error?[]:t.data||[],o=n.error?[]:n.data||[],s=p.error?[]:p.data||[],c=m.error?[]:m.data||[],l=h.error?[]:h.data||[],u=_.error?[]:_.data||[],d=v.error?[]:v.data||[],f=y.error?[]:y.data||[]}N.adminCompanies=n.map(e=>{let t=i.filter(t=>t.company_id===e.id),n=a.filter(t=>t.company_id===e.id),r=o.filter(t=>t.company_id===e.id),p={services:k(t.map(e=>e.service)),locations:k(n.map(e=>e.location)),includeKeywords:k(r.filter(e=>e.type===`include`).map(e=>e.keyword)),excludeKeywords:k(r.filter(e=>e.type===`exclude`).map(e=>e.keyword)),baseLocation:e.base_location||``,serviceAreas:k(e.service_areas),willingToTravel:!!e.willing_to_travel,nationalProjects:!!e.national_projects};return Ti(e,{services:t,locations:n,keywords:r,matches:Ue(s.filter(t=>t.company_id===e.id),l.filter(t=>t.company_id===e.id),p),reports:c.filter(t=>t.company_id===e.id),members:u.filter(t=>t.company_id===e.id),decisions:d.filter(t=>t.company_id===e.id),evaluationLabels:f.filter(t=>t.company_id===e.id)})}),N.adminCompaniesLoaded=!0}catch(e){console.error(`Failed to load admin companies:`,e),N.adminCompanies=[],N.adminCompaniesError=U(e)}finally{N.adminCompaniesLoading=!1,N.adminCompaniesLoaded=!0,X()}}async function Si(){if(!g||!N.isAdmin){N.adminReviewMatches=[],N.adminReviewLoaded=!0;return}N.adminReviewLoading=!0,N.adminReviewError=null,X();try{let{data:e,error:t}=await g.from(`opportunity_matches`).select(`
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
      `).eq(`safety_status`,`needs_review`).eq(`review_required`,!0).order(`calculated_at`,{ascending:!1}).limit(100);if(t)throw t;let n=e||[],r=rr(n.map(e=>e.company_id)),i=rr(n.map(e=>e.opportunity_id)),a=[];if(r.length&&i.length){let{data:e,error:t}=await g.from(`ai_match_reviews`).select(`*`).in(`company_id`,r).in(`opportunity_id`,i);if(t)throw t;a=e||[]}let o=new Map(a.map(e=>[`${e.company_id}:${e.opportunity_id}`,e]));N.adminReviewMatches=n.map(e=>Ci(e,o.get(`${e.company_id}:${e.opportunity_id}`))),N.adminReviewLoaded=!0}catch(e){console.error(`Failed to load admin review queue:`,e),N.adminReviewMatches=[],N.adminReviewError=U(e)}finally{N.adminReviewLoading=!1,N.adminReviewLoaded=!0,X()}}function Ci(e,t=null){let n=Yi(e.opportunities||{});return{id:e.id,companyId:e.company_id,opportunityId:e.opportunity_id,companyName:e.companies?.company_name||`Unknown company`,opportunity:n,matchScore:Number(e.match_score||0),matchLabel:e.match_label||ys(Number(e.match_score||0)),matchReasons:Sa(n,Array.isArray(e.match_reasons)?e.match_reasons:[]),risks:Array.isArray(e.risks)?e.risks:[],safetyStatus:e.safety_status||`needs_review`,safetyReasons:Array.isArray(e.safety_reasons)?e.safety_reasons:[],alertEligible:!!e.alert_eligible,reviewRequired:!!e.review_required,calculatedAt:e.calculated_at,aiReview:t?wi(t):null}}function wi(e){return{id:e.id,fit:e.fit||`weak`,confidence:Number(e.confidence||0),sendToClient:!!e.send_to_client,reason:e.reason||``,fitReasons:Array.isArray(e.fit_reasons)?e.fit_reasons.map(String):[],risksOrQuestions:Array.isArray(e.risks_or_questions)?e.risks_or_questions.map(String):[],suggestedClientSummary:e.suggested_client_summary||``,model:e.model||``,createdAt:e.created_at||``,updatedAt:e.updated_at||``}}function Ti(e,t){let n=k((t.services||[]).map(e=>e.service)),r=k((t.locations||[]).map(e=>e.location)),i=k((t.keywords||[]).filter(e=>e.type===`include`).map(e=>e.keyword)),a=k((t.keywords||[]).filter(e=>e.type===`exclude`).map(e=>e.keyword)),o=t.reports||[],s=new Map((t.decisions||[]).map(e=>[String(e.opportunity_id),e])),c=new Map((t.evaluationLabels||[]).map(e=>[String(e.opportunity_id),e])),l=(t.matches||[]).filter(e=>e.safety_status!==`hidden`).map(e=>({...e,adminDecision:s.get(String(e.opportunity_id))||null,evaluationLabel:c.get(String(e.opportunity_id))||null})),u=(t.members||[]).map(e=>({id:e.id,company_id:e.company_id,user_id:e.user_id||``,email:e.email||``,role:e.role||`member`,status:e.status||`invited`,invited_at:e.invited_at||``,accepted_at:e.accepted_at||``,revoked_at:e.revoked_at||``,expires_at:e.expires_at||``})),d=!!(e.company_name&&e.contact_email&&e.industry&&n.length&&(r.length||e.base_location||k(e.service_areas).length));return{id:e.id,ownerId:e.owner_id||``,companyName:e.company_name||`Unnamed company`,contactEmail:e.contact_email||``,kennitala:e.kennitala||``,billingEmail:e.billing_email||``,contactName:e.contact_name||``,phone:e.phone||``,address:e.address||``,website:e.website||``,industry:e.industry||``,plan:e.selected_plan||e.plan||e.subscription_plan||`Demo`,selectedPlan:e.selected_plan||e.plan||``,billingStatus:e.billing_status||``,trialStartedAt:e.trial_started_at||``,trialEndsAt:e.trial_ends_at||``,profileStatus:d?`Complete`:`Incomplete`,createdAt:e.created_at,services:n,locations:r,includeKeywords:i,excludeKeywords:a,baseLocation:e.base_location||``,serviceAreas:k(e.service_areas),willingToTravel:!!e.willing_to_travel,nationalProjects:!!e.national_projects,remoteProjects:!!e.remote_projects,minimumProjectValueForTravel:e.minimum_project_value_for_travel,minProjectValue:e.min_project_value,maxProjectValue:e.max_project_value,allowUnknownValue:!!e.allow_unknown_value,includeLowConfidence:!!e.include_low_confidence,autoAlertMode:e.auto_alert_mode||`auto_safe_only`,reportFrequency:e.report_frequency||`weekly`,reportDay:e.report_day||`monday`,deadlineReminders:!!e.deadline_reminders,autoAiReviewEnabled:!!e.auto_ai_review_enabled,coreServices:k(e.core_services),secondaryServices:k(e.secondary_services),excludedServices:k(e.excluded_services),preferredProjectTypes:k(e.preferred_project_types),excludedProjectTypes:k(e.excluded_project_types),equipment:k(e.equipment),certifications:k(e.certifications),preferredBuyers:k(e.preferred_buyers),maxTravelDistanceKm:e.max_travel_distance_km,typicalProjectSize:e.typical_project_size||``,profileNotesForAi:e.profile_notes_for_ai||``,matchingProfileUpdatedAt:e.matching_profile_updated_at||``,matchingProfileHash:e.matching_profile_hash||``,members:u,matchCount:l.length,savedCount:0,latestReportDate:o[0]?.created_at||``,latestMatches:l.slice(0,30),latestReports:o.slice(0,5)}}function Ei(e,t){N.adminCompanyActions={...N.adminCompanyActions||{},[e]:t}}function Di(e){let t={...N.adminCompanyActions||{}};delete t[e],N.adminCompanyActions=t}function Oi(e){return N.adminCompanyInviteDrafts?.[e.id]??(e.billingEmail||e.contactEmail||``)}function ki(e,t){N.adminCompanyAccessActions={...N.adminCompanyAccessActions||{},[e]:t}}function Ai(e){let t={...N.adminCompanyAccessActions||{}};delete t[e],N.adminCompanyAccessActions=t}async function ji(e){if(!N.isAdmin||!e)return;let t=b(Oi((N.adminCompanies||[]).find(t=>t.id===e)||{id:e}));if(!t){N.adminMessage={type:`error`,text:`Enter a customer email before inviting access.`},X();return}ki(e,`invite`),N.adminMessage=null,X();try{let n=await Gi(e,`invite_customer`,{email:t}),r=he(n.invite_token||``);await L(),N.adminCompanyInviteLinks={...N.adminCompanyInviteLinks||{},[e]:r},N.adminCompanyInviteDebug={...N.adminCompanyInviteDebug||{},[e]:n.debug?{...n.debug,copied_url_token_length:String(n.invite_token||``).length,copied_invite_url_present:!!r}:null},N.adminCompanyInviteDrafts={...N.adminCompanyInviteDrafts||{},[e]:``},N.adminMessage={type:`success`,text:`Invite link created for ${n.member?.email||t}. Copy it and send it manually.`},W(`Invite link created`,`success`)}catch(e){console.error(`Failed to invite company customer:`,e),N.adminMessage={type:`error`,text:`Failed to invite customer access. ${U(e)}`}}finally{Ai(e),X()}}async function Mi(e,t){if(!(!N.isAdmin||!e||!t)){ki(e,`revoke`),N.adminMessage=null,X();try{await Gi(e,`revoke_customer_access`,{memberId:t}),await L(),N.adminMessage={type:`success`,text:`Customer access revoked.`},W(`Customer access revoked`,`success`)}catch(e){console.error(`Failed to revoke company access:`,e),N.adminMessage={type:`error`,text:`Failed to revoke customer access. ${U(e)}`}}finally{Ai(e),X()}}}async function Ni(e,t){if(!(!N.isAdmin||!e)){Ei(e,`matching_profile`),N.adminMessage=null,X();try{await Gi(e,`update_company_matching_profile`,{matchingProfile:gt(t)}),await L(),N.adminMessage={type:`success`,text:`Matching profile saved. Production matching is unchanged.`},W(`Matching profile saved`,`success`)}catch(e){console.error(`Failed to save matching profile:`,e),N.adminMessage={type:`error`,text:`Failed to save matching profile. ${U(e)}`}}finally{Di(e),X()}}}async function Pi(e,t){if(!(!N.isAdmin||!e))try{await Gi(e,`upsert_match_decision`,_t(t)),await L(),W(`Match decision saved`,`success`)}catch(e){console.error(`Failed to save match decision:`,e),W(`Could not save decision. ${U(e)}`,`error`)}}async function Fi(e,t){if(!(!N.isAdmin||!e))try{await Gi(e,`upsert_evaluation_label`,vt(t)),await L(),W(`Evaluation label saved`,`success`)}catch(e){console.error(`Failed to save evaluation label:`,e),W(`Could not save evaluation label. ${U(e)}`,`error`)}}async function Ii(e){let t=N.adminCompanyInviteLinks?.[e]||``;if(!t){W(`Create or regenerate an invite link first.`,`error`);return}try{await navigator.clipboard.writeText(t),W(`Invite link copied`,`success`)}catch(e){console.error(`Failed to copy invite link:`,e),W(`Could not copy invite link`,`error`)}}async function Li(e,t={}){if(!N.isAdmin)return N.adminMessage={type:`error`,text:`You do not have access to this action.`},X(),[];let n=(N.adminCompanies||[]).find(t=>t.id===e);if(!n)return N.adminMessage={type:`error`,text:`Company not found. Refresh Admin companies and try again.`},X(),[];t.skipAction||Ei(e,`refresh`),t.silent||(N.adminMessage=null,X());try{let r=await Gi(e,`refresh_matches`),i=Number(r.matches_refreshed||0);return await Promise.all([L(),Si()]),N.companyId===e&&await ao(),t.silent||(N.adminMessage={type:`success`,text:`Refreshed ${i} eligible matches for ${n.companyName}.`},W(`Company matches refreshed`,`success`),X()),r}catch(e){if(console.error(`Failed to refresh admin company matches:`,e),N.adminMessage={type:`error`,text:`Failed to refresh matches for ${n.companyName}. ${U(e)}`},X(),t.throwOnError)throw e;return[]}finally{t.skipAction||(Di(e),X())}}async function Ri(e){if(!N.isAdmin){N.adminMessage={type:`error`,text:`You do not have access to this action.`},X();return}let t=(N.adminCompanies||[]).find(t=>t.id===e);if(!t){N.adminMessage={type:`error`,text:`Company not found. Refresh Admin companies and try again.`},X();return}Ei(e,`report`),N.adminMessage=null,X();try{let n=await Gi(e,`generate_report`,{reportMode:N.adminReportMode||`all_current`});if(!n.report_created){N.adminMessage={type:`error`,text:qi(n,t.companyName)},X();return}await Promise.all([hi(),L(),Si()]),N.companyId===e&&await oo(),N.adminMessage={type:`success`,text:`Generated ${Ki(n.report_mode||N.adminReportMode)} report for ${t.companyName} with ${Number(n.report_items||0)} item${Number(n.report_items||0)===1?``:`s`}. Open the Reports tab to review it.`},W(`Company report generated`,`success`)}catch(e){console.error(`Failed to generate admin company report:`,e),N.adminMessage={type:`error`,text:`Failed to generate report for ${t.companyName}. ${U(e)}`}}finally{Di(e),X()}}async function zi(e,t,n){if(!N.isAdmin){N.adminMessage={type:`error`,text:`You do not have access to this action.`},X();return}if(!e||!t||![`approve`,`reject`].includes(n)){N.adminMessage={type:`error`,text:`Missing review action details.`},X();return}N.adminReviewActions={...N.adminReviewActions||{},[e]:n},N.adminMessage=null,X();try{let r=await Gi(t,`review_match`,{matchId:e,reviewAction:n});await Promise.all([Si(),L()]),N.companyId===t&&await ao(),N.adminMessage={type:`success`,text:r.message||(n===`approve`?`Match approved for customer reports.`:`Match rejected and hidden.`)},W(n===`approve`?`Match approved`:`Match rejected`,`success`)}catch(e){console.error(`Failed to review admin match:`,e),N.adminMessage={type:`error`,text:`Failed to ${n} match. ${U(e)}`}}finally{let t={...N.adminReviewActions||{}};delete t[e],N.adminReviewActions=t,X()}}async function Bi(e,t={}){if(!N.isAdmin){N.adminMessage={type:`error`,text:`You do not have access to this action.`},X();return}if(!e){N.adminMessage={type:`error`,text:`Missing match ID for AI review.`},X();return}N.adminAiReviewActions={...N.adminAiReviewActions||{},[e]:!0},N.adminAiReviewError=null,N.adminMessage=null,X();try{let n=await Pe(e,{force:t.force===!0});await Si(),await L(),N.adminMessage={type:`success`,text:n.cached?`Loaded cached AI review.`:t.force?`AI review re-run completed.`:`AI review completed.`},W(n.cached?`AI review loaded`:t.force?`AI review re-run completed`:`AI review completed`,`success`)}catch(e){console.error(`Failed to run AI match review:`,e),N.adminAiReviewError=U(e),N.adminMessage={type:`error`,text:`AI review failed. ${U(e)}`}}finally{let t={...N.adminAiReviewActions||{}};delete t[e],N.adminAiReviewActions=t,X()}}async function Vi(e,t={}){if(!N.isAdmin){N.adminMessage={type:`error`,text:`You do not have access to this action.`},X();return}if(!e){N.adminMessage={type:`error`,text:`Missing company ID for AI review batch.`},X();return}N.adminCompanyAiReviewActions={...N.adminCompanyAiReviewActions||{},[e]:!0},N.adminMessage=null,X();try{let n=await Fe(e,{limit:10,force:t.force===!0,revalidate:t.force===!0});N.adminCompanyAiReviewResults={...N.adminCompanyAiReviewResults||{},[e]:n},await Promise.all([L(),Si()]),N.companyId===e&&await ao(),N.adminMessage={type:`success`,text:`${t.force?`AI revalidation`:`AI batch`} reviewed ${Number(n.reviewed||0)} matches. ${Number(n.skipped||0)} skipped.`},W(t.force?`AI company revalidation completed`:`AI company review completed`,`success`)}catch(e){console.error(`Failed to run company AI review batch:`,e),N.adminMessage={type:`error`,text:`AI company review failed. ${U(e)}`}}finally{let t={...N.adminCompanyAiReviewActions||{}};delete t[e],N.adminCompanyAiReviewActions=t,X()}}async function Hi(){if(!N.isAdmin){N.adminMessage={type:`error`,text:`You do not have access to this action.`},X();return}N.adminAutomaticAiReviewLoading=!0,N.adminMessage=null,X();try{let e=await Ie({limit:10});N.adminAutomaticAiReviewResult=e,await Promise.all([L(),Si()]),N.adminMessage={type:`success`,text:`Automatic AI review created ${Number(e.ai_reviews_created||0)} reviews across ${Number(e.companies_checked||0)} companies.`},W(`Automatic AI review completed`,`success`)}catch(e){console.error(`Failed to run automatic AI review:`,e),N.adminMessage={type:`error`,text:`Automatic AI review failed. ${U(e)}`}}finally{N.adminAutomaticAiReviewLoading=!1,X()}}async function Ui(){if(N.isAdmin){N.adminDailyPipelineLoading=!0,N.adminMessage=null,X();try{let e=await Ae();N.adminDailyPipelineResult=e,await Promise.all([Ji(),L(),Si()]),N.adminMessage={type:e.errors?.length?`error`:`success`,text:`Daily pipeline finished: ${Number(e.sources_imported||0)} sources, ${Number(e.companies_refreshed||0)} companies, ${Number(e.ai_reviews_created||0)} AI reviews.`}}catch(e){console.error(`Failed to run daily pipeline:`,e),N.adminMessage={type:`error`,text:`Daily pipeline failed. ${U(e)}`}}finally{N.adminDailyPipelineLoading=!1,X()}}}async function Wi(e,t){if(!N.isAdmin||!e)return;let n=(N.adminCompanies||[]).find(t=>t.id===e);N.adminMessage=null,X();try{await Le(e,t),N.adminCompanies=(N.adminCompanies||[]).map(n=>n.id===e?{...n,autoAiReviewEnabled:t}:n),await L(),N.adminMessage={type:`success`,text:`Automatic AI review ${t?`enabled`:`disabled`} for company.`},X()}catch(t){console.error(`Failed to toggle company automatic AI review:`,t);let r=t?.details||{};N.adminMessage={type:`error`,text:`Failed to update automatic AI review setting. ${U(t)} Debug: company_id=${e}; company=${n?.companyName||`unknown`}; email=${n?.contactEmail||`unknown`}; returned_rows=${r.rowCount??`unknown`}; returned_data=${r.dataReturned===!1?`false`:`unknown`}.`},X()}}async function Gi(e,t,n={}){let r=Da();if(!r)throw Error(`Admin company actions are not configured. Set window.VERKRADAR_ADMIN_COMPANY_ACTIONS_URL or window.VERKRADAR_SUPABASE_URL.`);let i=await fetch(r,{method:`POST`,headers:await Ma(),body:JSON.stringify({companyId:e,action:t,...n})}),a=await i.json().catch(()=>({}));if(!i.ok)throw Error(a.error||`Admin company action failed with status ${i.status}`);return a}function Ki(e){return e===`all_current`?`current active opportunities`:`new opportunities`}function qi(e,t){let n=e?.report_mode||N.adminReportMode||`all_current`;return e?.message||(n===`new_only`?`No new eligible opportunities found since the previous report.`:`No customer-report-ready matches found for ${t}.`)}async function Ji(){N.isAdmin&&(await Promise.all([mi(),ja(),hi(),gi(),xi(),L(),Si()]),W(`Automation status refreshed`,`success`),X())}function Yi(e){let t=e.raw_payload&&typeof e.raw_payload==`object`?e.raw_payload:{},n=e.sources?.name||t.source_name||``,r=R(t.quality_status||t.qualityStatus,{source:n,sourceType:e.sources?.source_type||``,title:e.title||``,description:Zi(e.description||``,t,n,e.title||``),rawPayload:t}),i=z({source:n,sourceType:e.sources?.source_type||``,title:e.title||``,description:e.description||``,category:e.category||``,keywords:Array.isArray(e.keywords)?e.keywords:[],qualityStatus:r,rawPayload:t});return{id:e.id,externalId:e.external_id||``,countryCode:e.country_code||``,title:e.title,buyer:mr(e.buyer,n,t),source:n||`Supabase`,sourceType:e.sources?.source_type||``,category:e.category||`Other`,type:e.type||`tender`,description:e.description||``,deadline:e.deadline,deadlineAt:t.deadline_at||``,publishedDate:e.published_date,createdAt:e.created_at,updatedAt:e.updated_at||``,location:ta(e.location||`Unknown`,t,n,e.title||``,e.description||``),estimatedValue:e.estimated_value,currency:e.currency||`ISK`,url:e.url||``,cpvCode:e.cpv_code||``,requirements:Array.isArray(e.requirements)?e.requirements:[],keywords:Array.isArray(e.keywords)?e.keywords:[],difficulty:e.difficulty||`medium`,status:e.status||`open`,qualityStatus:r,intent:i,rawPayload:t}}function Xi(e){let t=Yi(e.opportunities||{});return{...t,matchScore:Number(e.match_score||0),matchLabel:e.match_label||ys(Number(e.match_score||0)),matchReasons:Sa(t,Array.isArray(e.match_reasons)?e.match_reasons:[]),risks:Array.isArray(e.risks)?e.risks:[],nextSteps:Array.isArray(e.next_steps)?e.next_steps:[],safetyStatus:e.safety_status||`needs_review`,safetyReasons:Array.isArray(e.safety_reasons)?e.safety_reasons:[],alertEligible:!!e.alert_eligible,reviewRequired:!!e.review_required,reviewedAt:e.reviewed_at||``,reviewNote:e.review_note||``}}function Zi(e,t={},n=``,r=``){t=t&&typeof t==`object`?t:{};let i=String(e||``).replace(/\s+/g,` `).trim(),a=A(n);if(!i)return``;if(a.includes(`rikiskaup`)||a.includes(`utbodsvefur`)){let e=Qi(i,t,r);if(e)return e;if($i(i)||ea(i))return N.language===`is`?`Útboðstilkynning flutt inn af Útboðsvef. Opnið upprunasíðuna til að staðfesta kaupanda, skilafrest, kröfur og útboðsgögn.`:`Procurement notice imported from Útboðsvefur. Open the source page to confirm buyer, deadline, requirements and tender documents.`}return i}function Qi(e,t={},n=``){t=t&&typeof t==`object`?t:{};let r=String(e||``).replace(/\s+/g,` `).trim();if(!r)return``;let i=[r.search(/F\.h\.[^.]{0,280}ósk(?:að|ar) eftir tilboðum/i),r.search(/(?:Reykjavíkurborg|sveitarfélag|bærinn|kaupandi)[^.]{0,280}ósk(?:að|ar) eftir tilboðum/i),r.search(/óskar eftir tilboðum|óskað eftir tilboðum|oskar eftir tilbodum|oskad eftir tilbodum/i),r.search(/verkefnið felst|verkið felst|verkið felur|gatna-|gatnagerð|stígagerð/i)].filter(e=>e>=0);if(!i.length)return``;let a=Math.min(...i),o=r.slice(a).search(/\s+(Nánari upplýsingar|Útboðsgögn afhent|Opnun tilboða|Opnun tilboda|Auglýsandi|Flokkar|Tengdar fréttir|Fjöldi útboð)\b/i),s=o>120?a+o:a+1200,c=[r.slice(a,s).trim()],l=t.extracted_deadline_text||t.deadline_text||``;l&&!c[0].includes(String(l))&&c.push(`Skilafrestur: ${l}`);let u=rr(c).join(` `).replace(/^(Útboðsvefur\s*){1,}/i,``).replace(/\s+/g,` `).trim();return ea(u)?``:u||n}function $i(e){return/Procurement notice imported from Útboðsvefur|Open the source page for full buyer details/i.test(String(e||``))}function ea(e){let t=String(e||``);return[`Framkvæmdasýslan`,`Ríkiseignir`,`Garðabær`,`Grímsnes`,`Fjöldi útboð`,`Útboðsvefur.is - Opinber útboð`].filter(e=>t.includes(e)).length>=3||/^Útboðsvefur\s+Útboðsvefur\.is/i.test(t)}function ta(e,t={},n=``,r=``,i=``){let a=na(`${r} ${i} ${JSON.stringify(t||{})}`),o=String(e||``).trim();return a&&(!o||/unknown|all iceland|iceland/i.test(o))?a:o||a||`Unknown`}function na(e){let t=A(e);return t.includes(`vogabyggd`)||t.includes(`reykjavikurborg`)||t.includes(`strandstigur`)?`Reykjavík / Höfuðborgarsvæðið`:``}function ra(e){if(!e||e.status!==`open`||!e.url||e.url===`#`||E(e.deadline)<0||ia(e)||e.rawPayload?.extraction_method===`parent_article_with_child_opportunities`||gd(e)||la(e))return!1;if(!Gl(e))return!0;let t=ba(e);return[`IS`,`NO`,`DK`,`SE`,`FI`].includes(t)}function ia(e){let t=A(e?.source||``),n=A(e?.title||``),r=A(e?.externalId||``),i=A(e?.sourceType||``),a=e?.rawPayload||{},o=`${t} ${n} ${r} ${i}`;return!!(a.is_demo===!0||a.demo===!0||t===`private lead`||t.includes(`private lead`)||t===`grant portal`||t.includes(`grant portal`)||t===`manual test`||t.includes(`manual test`)||[`demo`,`test`,`sample`,`mock`,`fake`].some(e=>i.includes(e))||/\b(demo|test|sample|mock|fake|manual)\b/.test(o)||n.includes(`manual test`)||n.includes(`municipal websites example`)||r.includes(`demo`)||r.includes(`test`))}function R(e,t={}){let n=String(e||``).toLowerCase(),r=aa(t?.rawPayload?.opportunity_intent||t?.rawPayload?.intent);if(r===`confirmed_tender`)return`confirmed_tender`;if(r===`early_opportunity`||r===`market_signal`)return`early_signal`;if(r===`news_context`||r===`not_opportunity`)return`needs_review`;if(Gl(t))return`confirmed_tender`;if(B(t)){let e=oa(t);return[`tender_awarded`,`awarded`,`already_tendered`,`announced`].includes(e)?`confirmed_tender`:e===`upcoming_tender`?`early_signal`:`needs_review`}if(n===`early_signal`||n===`needs_review`)return n;let i=V(t);return H(i,[`senn í útboð`,`senn i utbod`])?`early_signal`:ca(i)?`confirmed_tender`:va(t?.title||``)&&!ca(i)?`needs_review`:ga(i)?`early_signal`:(ya(i),`needs_review`)}function aa(e){return{confirmed:`confirmed_tender`,confirmed_tender:`confirmed_tender`,likely_opportunity:`confirmed_tender`,verified:`confirmed_tender`,early_signal:`early_opportunity`,early_opportunity:`early_opportunity`,upcoming_tender:`early_opportunity`,market_signal:`market_signal`,project_signal:`market_signal`,needs_review:`market_signal`,news_context:`news_context`,news:`news_context`,noise:`not_opportunity`,not_opportunity:`not_opportunity`,stale_opportunity:`not_opportunity`,stale:`not_opportunity`,expired:`not_opportunity`}[String(e||``).toLowerCase().trim()]||``}function z(e={}){let t=aa(e?.rawPayload?.opportunity_intent||e?.rawPayload?.intent),n=String(e?.rawPayload?.admin_report_status||``).toLowerCase();if(n===`include`)return`confirmed_tender`;if([`hidden`,`hide`,`noise`,`deleted`].includes(n))return t||`not_opportunity`;if(t)return t;if(Gl(e))return`confirmed_tender`;let r=V(e),i=e?.title||``;if(B(e)){let t=oa(e);return[`tender_awarded`,`awarded`,`already_tendered`,`announced`].includes(t)?`confirmed_tender`:t===`upcoming_tender`?`early_opportunity`:`market_signal`}return ca(r)?`confirmed_tender`:va(i)||ya(r)?`news_context`:ha(r)?`early_opportunity`:(_a(r),`market_signal`)}function B(e){return e?.rawPayload?.extraction_method===`vegagerdin_article_project_parser`}function oa(e){let t=String(e?.rawPayload?.tender_state||``).trim(),n=sa(e),r={awarded:`tender_awarded`,open_or_published:`announced`,planned_tender:`upcoming_tender`,unclear:`project_signal`}[t]||t;return n===`tender_awarded`?`tender_awarded`:n===`already_tendered`&&![`tender_awarded`,`announced`].includes(r)?`already_tendered`:n===`announced`&&![`tender_awarded`,`already_tendered`].includes(r)?`announced`:n===`upcoming_tender`&&[``,`project_signal`,`needs_review`,`unclear`].includes(r)?`upcoming_tender`:r||n}function sa(e){let t=V(e);return H(t,[`lægstbjóðandi`,`laegstbjodandi`,`samningur var`,`samið var`,`samid var`,`skrifað var undir verksamning`,`skrifad var undir verksamning`])?`tender_awarded`:H(t,[`útboð var auglýst`,`utbod var auglyst`,`útboðið var auglýst`,`utbodid var auglyst`,`útboð hefur farið fram`,`utbod hefur farid fram`,`útboðið hefur farið fram`,`utbodid hefur farid fram`,`boðið út`,`bodid ut`,`verkið var boðið út`,`verkid var bodid ut`,`útboð var opnað`,`utbod var opnad`,`tilboð opnuð`,`tilbod opnud`])?`already_tendered`:H(t,[`óskað eftir tilboðum`,`oskad eftir tilbodum`,`tilboðsfrestur`,`tilbodsfrestur`,`skilafrestur`,`verðfyrirspurn`,`verdfyrirspurn`,`rammasamningur`,`forval`])?`announced`:H(t,[`áætlað útboð`,`aaetlad utbod`,`áætlað er að bjóða út`,`aaetlad er ad bjoda ut`,`fyrirhugað útboð`,`fyrirhugad utbod`,`senn í útboð`,`senn i utbod`,`útboð verður`,`utbod verdur`])?`upcoming_tender`:`project_signal`}function V(e){return A([e?.title,e?.description,e?.category,e?.source,...Array.isArray(e?.keywords)?e.keywords:[]].filter(Boolean).join(` `))}function H(e,t){let n=A(e);return t.some(e=>n.includes(A(e)))}function ca(e){return H(e,[`útboð`,`utbod`,`útboðsauglýsing`,`utbodsauglysing`,`tilboð`,`tilboðum`,`tilbod`,`tilbodum`,`óskað eftir tilboðum`,`oskad eftir tilbodum`,`verðfyrirspurn`,`verdfyrirspurn`,`innkaup`,`rammasamningur`,`forval`,`tender`,`procurement`,`skilafrestur`,`útboðsgögn`,`utbodsgogn`])}function la(e={}){let t=e.rawPayload||{};return t.stale_status===`stale_or_expired`||t.opportunity_intent===`stale_opportunity`?!0:ua({title:e.title,description:e.description,content:[e.category,e.source,Array.isArray(e.keywords)?e.keywords.join(` `):``].filter(Boolean).join(` `),publishedDate:e.publishedDate,deadline:e.deadline,sourceName:e.source,sourceType:e.sourceType,connectorType:t.connector_type}).isStale}function ua(e={}){let t=String(e.deadline||``).slice(0,10);if(t&&E(t)>=0)return{isStale:!1,reason:``,thresholdDays:null,ageDays:null,oldYears:[],expiredKeywords:[]};let n=A([e.title,e.description,e.content].filter(Boolean).join(` `)),r=fa(n),i=pa(n),a=ma(e.publishedDate),o=a?Math.floor((Date.now()-new Date(`${a}T00:00:00Z`).getTime())/864e5):null,s=da(e)?45:60;return r.length?{isStale:!0,reason:`Old year detected (${r.join(`, `)}) and no future deadline found.`,thresholdDays:s,ageDays:o,oldYears:r,expiredKeywords:i}:i.length?{isStale:!0,reason:`Expired/result wording detected (${i.slice(0,3).join(`, `)}) and no future deadline found.`,thresholdDays:s,ageDays:o,oldYears:r,expiredKeywords:i}:o!==null&&o>s?{isStale:!0,reason:`Published ${o} days ago with no current deadline.`,thresholdDays:s,ageDays:o,oldYears:r,expiredKeywords:i}:{isStale:!1,reason:``,thresholdDays:s,ageDays:o,oldYears:r,expiredKeywords:i}}function da(e={}){let t=A(`${e.sourceName||``} ${e.sourceType||``} ${e.connectorType||``}`);return String(e.connectorType||``)===`rss_feed`&&[`municipal`,`sveitarfelag`,`akranes`,`borgarbyggd`,`arborg`,`selfoss`,`gardabaer`,`reykjanesbaer`,`hafnarfjordur`,`mosfellsbaer`,`kopavogur`,`mulathing`,`fjardabyggd`].some(e=>t.includes(A(e)))}function fa(e){let t=new Date().getUTCFullYear(),n=new Set;return String(e||``).replace(/\b(20[0-9]{2})\b/g,(e,r)=>{let i=Number(r);return i>=2020&&i<t&&n.add(i),r}),Array.from(n).sort()}function pa(e){return`niðurstaða útboðs.nidurstada utbods.niðurstöður útboðs.nidurstodur utbods.opnun tilboða.opnun tilboda.tilboð opnuð.tilbod opnud.lokið.lokid.lokið útboði.lokid utbodi.búið.buid.útrunnið.ut runnid.eldri útboð.eldri utbod.útboðssaga.utbodssaga.samningur gerður.samningur gerdur.verksamningur.awarded.tender results.contract awarded.expired`.split(`.`).filter(t=>H(e,[t]))}function ma(e){if(!e)return``;let t=new Date(e);return Number.isNaN(t.getTime())?``:t.toISOString().slice(0,10)}function ha(e){return H(e,[`senn í útboð`,`senn i utbod`,`áætlað útboð`,`aaetlad utbod`,`áætlað er að bjóða út`,`aaetlad er ad bjoda ut`,`fyrirhugað útboð`,`fyrirhugad utbod`,`markaðskönnun`,`markadskonnun`,`rfi`])}function ga(e){return ha(e)?!0:H(e,[`áætlaðar framkvæmdir`,`aaetladar framkvaemdir`,`fyrirhugaðar framkvæmdir`,`fyrirhugadar framkvaemdir`,`framkvæmdir hefjast`,`framkvaemdir hefjast`,`malbikunarframkvæmdir`,`malbikunarframkvaemdir`,`vegaframkvæmdir`,`vegaframkvaemdir`,`brúargerð`,`bruargerd`,`jarðvinna`,`jardvinna`,`gatnagerð`,`gatnagerd`])}function _a(e){return H(e,[`áætlaðar framkvæmdir`,`aaetladar framkvaemdir`,`fyrirhugaðar framkvæmdir`,`fyrirhugadar framkvaemdir`,`framkvæmdir hefjast`,`framkvaemdir hefjast`,`malbikunarframkvæmdir`,`malbikunarframkvaemdir`,`vegaframkvæmdir`,`vegaframkvaemdir`,`brúargerð`,`bruargerd`,`jarðvinna`,`jardvinna`,`gatnagerð`,`gatnagerd`,`fræsing`,`fraesing`])}function va(e){return H(e,[`lokun`,`lokað`,`lokad`,`lokanir`,`umferð`,`umferd`,`tafir`,`hjáleið`,`hjaleid`,`akstursleið`,`akstursleid`,`vegfarendur`,`frétt`,`frett`,`myndband`,`tekur á sig mynd`,`tekur a sig mynd`,`opið aftur`,`opid aftur`])}function ya(e){return H(e,[`lokun`,`lokanir`,`umferð`,`umferd`,`dagskrá`,`dagskra`,`skráning`,`skraning`,`myndband`,`ráðstefna`,`radstefna`,`kynningarfundur`,`tilkynning`,`fundur`,`fjölskylduganga`,`fjolskylduganga`,`tafir`,`kynnt`,`styrkur`,`frétt`,`frett`,`viðburður`,`vidburdur`])}function ba(e){let t=xa(e.countryCode);if(t)return t;let n=A(fs(e));return n.includes(`iceland`)||n.includes(`island`)||n.includes(`reykjavik`)||n.includes(`capital area`)||n.includes(`hofudborgarsvaedid`)||n.includes(`east iceland`)||n.includes(`west iceland`)||n.includes(`north iceland`)||n.includes(`south iceland`)||n.includes(`sudurnes`)?`IS`:n.includes(`norway`)?`NO`:n.includes(`denmark`)?`DK`:n.includes(`sweden`)?`SE`:n.includes(`finland`)?`FI`:``}function xa(e){return{IS:`IS`,ISL:`IS`,ICELAND:`IS`,ÍSLAND:`IS`,NO:`NO`,NOR:`NO`,NORWAY:`NO`,DK:`DK`,DNK:`DK`,DENMARK:`DK`,SE:`SE`,SWE:`SE`,SWEDEN:`SE`,FI:`FI`,FIN:`FI`,FINLAND:`FI`}[String(e||``).trim().toUpperCase()]||``}function Sa(e,t){return ds(e)?t:t.filter(e=>!/^Located in your selected region:/i.test(String(e||``)))}function Ca(){N.authForm={email:``,password:``,newPassword:``,confirmPassword:``}}function wa(){N.authForm.newPassword=``,N.authForm.confirmPassword=``}function Ta(){return window.VERKRADAR_TED_IMPORT_URL?window.VERKRADAR_TED_IMPORT_URL:window.VERKRADAR_SUPABASE_URL?`${window.VERKRADAR_SUPABASE_URL}/functions/v1/import-ted`:`${m}/functions/v1/import-ted`}function Ea(){return window.VERKRADAR_SOURCE_CONNECTOR_IMPORT_URL?window.VERKRADAR_SOURCE_CONNECTOR_IMPORT_URL:window.VERKRADAR_SUPABASE_URL?`${window.VERKRADAR_SUPABASE_URL}/functions/v1/import-source-connectors`:`${m}/functions/v1/import-source-connectors`}function Da(){return window.VERKRADAR_ADMIN_COMPANY_ACTIONS_URL?window.VERKRADAR_ADMIN_COMPANY_ACTIONS_URL:window.VERKRADAR_SUPABASE_URL?`${window.VERKRADAR_SUPABASE_URL}/functions/v1/admin-company-actions`:`${m}/functions/v1/admin-company-actions`}async function Oa(e){let t=await e.text();if(!t)return{};try{return JSON.parse(t)}catch{return{errors:[t]}}}async function ka(){if(!N.isAdmin){N.importStatus={errors:[`You do not have access to import TED notices.`]},X();return}let e=Ta();if(!e){N.importStatus={errors:[`TED importer is not configured. Set window.VERKRADAR_TED_IMPORT_URL or window.VERKRADAR_SUPABASE_URL for this environment.`]},X();return}N.importLoading=!0,N.importStatus=null,N.importedTedOpportunities=[],X();try{let t=await fetch(e,{method:`POST`,headers:await Ma(),body:JSON.stringify({limit:50,importMode:N.tedImportMode})}),n=await Oa(t);if(N.importStatus=t.ok?n:{...n,errors:n.errors||[`Import failed with status ${t.status}`]},t.ok){await pi();let e=N.companyId?await lo():Number(n.matched||0);await ja(),N.isAdmin&&(await mi(),await hi()),N.importStatus={...N.importStatus,matched:e},W(`TED import completed`,`success`)}}catch(e){N.importStatus={errors:[e instanceof Error?e.message:String(e)]}}finally{N.importLoading=!1,X()}}async function Aa(e=``){if(!N.isAdmin){N.connectorImportStatus={errors:[`You do not have access to run source imports.`]},X();return}let t=Ea();if(!t){N.connectorImportStatus={errors:[`Source connector importer is not configured. Set window.VERKRADAR_SOURCE_CONNECTOR_IMPORT_URL or window.VERKRADAR_SUPABASE_URL for this environment.`]},X();return}N.connectorImportLoading=!e,N.connectorTestingSourceId=e||null,N.connectorImportStatus=null,X();try{let n=await fetch(t,{method:`POST`,headers:await Ma(),body:JSON.stringify({limit:e?50:20,maxSources:e?1:6,sourceId:e||void 0,refreshMatches:!!e,generateReports:!1})}),r=await Oa(n),i=Array.isArray(r.errors)?r.errors:[],a=Array.isArray(r.failedSources)?r.failedSources:[];N.connectorImportStatus=n.ok?{...r,failedSources:a}:{...r,failedSources:a,errors:i.length?i:[`Source import failed with status ${n.status}${n.statusText?` ${n.statusText}`:``}`]},n.ok&&(await pi(),await Ji(),W(e?`Source test completed`:`Automatic source imports completed`,`success`))}catch(e){N.connectorImportStatus={errors:[e instanceof Error?e.message:String(e)]}}finally{N.connectorImportLoading=!1,N.connectorTestingSourceId=null,X()}}async function ja(){if(!g){N.importedTedOpportunities=[],N.importedTedOpportunitiesLoaded=!0;return}N.importedTedOpportunitiesLoading=!0,N.importedTedOpportunitiesError=null;try{let{data:e,error:t}=await g.from(`sources`).select(`id, name`).in(`name`,[`TED Iceland/Nordic`,`EU TED`,`Tenders Electronic Daily`]);if(t)throw t;let n=(e||[]).map(e=>e.id).filter(Boolean);if(!n.length){N.importedTedOpportunities=[];return}let{data:r,error:i}=await g.from(`opportunities`).select(`*, sources(name, source_type)`).in(`source_id`,n).order(`created_at`,{ascending:!1}).limit(10);if(i)throw i;N.importedTedOpportunities=(r||[]).map(Yi)}catch(e){console.error(`Failed to load latest TED opportunities:`,e),N.importedTedOpportunities=[],N.importedTedOpportunitiesError=U(e)}finally{N.importedTedOpportunitiesLoading=!1,N.importedTedOpportunitiesLoaded=!0}}async function Ma(){let e={"content-type":`application/json`},t=window.VERKRADAR_SUPABASE_ANON_KEY||`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFzb2p4amJzZ3FiZnBiZXBvanpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAwNTU2NjgsImV4cCI6MjA5NTYzMTY2OH0.yPA34VbqWqKrBPespmHr5AojYzjhy3kGRxswO9XdAd0`;t&&t!==`PASTE_MY_ANON_PUBLIC_KEY_HERE`&&(e.apikey=t);let{data:n,error:r}=g?await g.auth.getSession():{data:{session:null},error:null};if(r)throw r;let i=n.session?.access_token;if(!i)throw Error(`You must be logged in to run this admin action.`);return e.authorization=`Bearer ${i}`,e}function Na(){let e=N.pendingInviteToken||w();return e&&ue(N.route)?re(e):s(`/onboarding`)}function Pa(){return s(`/reset-password`)}function Fa(e){let t=e?.user?.identities;return Array.isArray(t)&&t.length===0}function Ia(){return[{label:M(`login`),href:Ur(`/login`),variant:`primary`},{label:M(`forgotPassword`),href:Ur(`/forgot-password`),variant:`secondary`}]}async function La(e,t){Lr(),N.authSubmitting=!0,N.authMessage=null,X();try{if(!g)throw Error(`Supabase client is not configured.`);let{data:n,error:r}=await g.auth.signUp({email:String(e||``).trim(),password:String(t||``),options:{emailRedirectTo:Na()}});if(r)throw r;if(Wr(),Fa(n)){N.user=null,N.currentUser=null,N.authMessage={type:`error`,text:M(`signupExistingAccount`),actions:Ia()},N.authForm.password=``,X();return}if(!n.session?.user){N.user=null,N.currentUser=null;let e=Array.isArray(n?.user?.identities)&&n.user.identities.length>0;N.authMessage={type:`success`,text:N.pendingInviteToken?M(`inviteSignupCreatedConfirm`):M(e?`signupCreatedConfirm`:`signupNeutralNextSteps`)},N.authForm.password=``,X();return}N.user=n.session.user,N.currentUser=N.user,N.profileDraft=null,N.profileDraftDirty=!1,await Ua(N.user),N.authMessage={type:`success`,text:M(`signupCreatedConfirm`)},await Xa({overwriteDraft:!0}),Ca(),F(ii())}catch(e){console.error(`Signup failed:`,e);let t=_o(e);N.authMessage={type:`error`,text:go(e,`signup`),actions:t?Ia():[]},X()}finally{N.authSubmitting=!1,X()}}async function Ra(e,t){N.authSubmitting=!0,N.authMessage=null,X();try{if(!g)throw Error(`Supabase client is not configured.`);let{data:n,error:r}=await g.auth.signInWithPassword({email:String(e||``).trim(),password:String(t||``)});if(r)throw r;N.user=n.user||await Ha(),N.currentUser=N.user,N.profileDraft=null,N.profileDraftDirty=!1,await Ua(N.user),await Xa({overwriteDraft:!0}),Ca(),F(ii())}catch(e){console.error(`Login failed:`,e),N.authMessage={type:`error`,text:go(e,`login`)},X()}finally{N.authSubmitting=!1,X()}}async function za(e){N.authSubmitting=!0,N.authMessage=null,X();try{if(!g)throw Error(`Supabase client is not configured.`);let{error:t}=await g.auth.resetPasswordForEmail(String(e||``).trim(),{redirectTo:Pa()});if(t)throw t;N.authMessage={type:`success`,text:`If an account exists for this email, a reset link has been sent.`}}catch(e){console.error(`Password reset request failed:`,e),N.authMessage={type:`error`,text:`We could not send a reset link right now. Please try again.`}}finally{N.authSubmitting=!1,X()}}async function Ba(e,t){let n=String(e||``),r=String(t||``);if(!n){N.authMessage={type:`error`,text:`Enter a new password.`},X();return}if(n.length<8){N.authMessage={type:`error`,text:`Password must be at least 8 characters.`},X();return}if(n!==r){N.authMessage={type:`error`,text:`Passwords do not match.`},X();return}N.authSubmitting=!0,N.authMessage=null,X();try{if(!g)throw Error(`Supabase client is not configured.`);let{error:e}=await g.auth.updateUser({password:n});if(e)throw e;wa(),F(`/login`),N.authMessage={type:`success`,text:`Password updated. You can now log in.`},X()}catch(e){console.error(`Password update failed:`,e),N.authMessage={type:`error`,text:`This reset link may be expired or invalid. Request a new reset link and try again.`},X()}finally{N.authSubmitting=!1,X()}}async function Va(){try{if(g){let{error:e}=await g.auth.signOut();if(e)throw e}}catch(e){console.error(`Logout failed:`,e)}finally{N.user=null,N.currentUser=null,N.isAdmin=!1,N.authLoaded=!0,N.adminLoaded=!0,N.profileLoaded=!0,zr(),Wr(),F(`/`),X()}}async function Ha(){if(!g)return null;let{data:e,error:t}=await g.auth.getUser();return t?(console.error(`Failed to get current user:`,t),null):e.user||null}async function Ua(e=N.user){if(!g||!e)return N.isAdmin=!1,!1;try{let{data:t,error:n}=await g.from(`admin_users`).select(`user_id`).eq(`user_id`,e.id).maybeSingle();if(n)throw n;return N.isAdmin=!!t?.user_id,N.isAdmin}catch(e){return console.error(`Failed to check admin access:`,e),N.isAdmin=!1,!1}}function Wa(){return Z(`
    <section class="empty-state">
      <h1>${j(M(`authRequiredTitle`))}</h1>
      <p>${j(M(`authRequiredText`))}</p>
      <button class="btn btn-primary" data-action="go" data-href="/login">${j(M(`login`))}</button>
      <button class="btn btn-secondary" data-action="go" data-href="/trial">${j(M(`createFreeDemoProfile`))}</button>
    </section>
  `)}function Ga(){return Z(`
    <section class="empty-state">
      <h1>You do not have access to this page.</h1>
      <p>Admin access is limited to approved VerkRadar admin users.</p>
    </section>
  `)}var Ka=!1,qa=!1;async function Ja(){if(!g)return N.user=null,N.currentUser=null,null;let{data:e,error:t}=await g.auth.getSession();if(t)throw t;return N.user=e.session?.user||null,N.currentUser=N.user,N.user}async function Ya(){N.adminLoaded=!1,await Ua(N.currentUser||N.user),N.adminLoaded=!0}async function Xa(e={}){let{overwriteDraft:t=!1,showGlobalLoading:n=!1}=e;(n||!N.profile&&!N.profileDraftDirty)&&(N.profileLoaded=!1),N.profileLoading=!0,N.profileLoadError=null;try{await Za(no({overwriteDraft:t}),Er,`Profile loading took too long. Please retry.`)}catch(e){console.error(`Failed to load profile from Supabase:`,e),N.profileLoadError=U(e)}finally{N.profileLoading=!1,N.profileLoaded=!0}}function Za(e,t,n){let r,i=new Promise((e,i)=>{r=setTimeout(()=>i(Error(n)),t)});return Promise.race([e,i]).finally(()=>clearTimeout(r))}async function Qa(){if(!N.isSavingProfile){N.profileLoadError=null,N.profileLoading=!0,X();try{await Xa({overwriteDraft:!0})}catch(e){console.error(`Settings profile retry failed:`,e),N.profileLoadError=U(e)}finally{N.profileLoading=!1,N.profileLoaded=!0,X(),I()}}}function $a(){!g||qa||(qa=!0,g.auth.onAuthStateChange(async(e,t)=>{if(Ka){if(N.inviteAuthEvent=e||``,N.user=t?.user||null,N.currentUser=N.user,N.user){if(e===`PASSWORD_RECOVERY`){N.authLoaded=!0,N.adminLoaded=!0,N.profileLoaded=!0,N.authMessage=null,F(`/reset-password`);return}try{await Ya(),N.route===`/settings`&&N.profileDraftDirty?N.profileLoaded=!0:await Xa()}catch(e){console.error(`Auth profile refresh failed:`,e),N.profileLoadError=U(e),N.adminLoaded=!0,N.profileLoaded=!0}if(ui())return;X(),I();return}N.isAdmin=!1,N.profile=null,N.companyMembership=null,N.profileDraft=null,N.profileDraftDirty=!1,N.profileLoading=!1,N.profileLoadError=null,N.companyId=null,N.storedMatches=[],Y(),N.reports=[],N.reportsLoaded=!1,N.reportsLoadError=null,N.selectedReportId=null,N.authLoaded=!0,N.adminLoaded=!0,N.profileLoaded=!0,e===`SIGNED_OUT`&&F(`/`),X(),I()}}))}async function eo(){N.isBooting=!0,N.authLoaded=!1,N.profileLoaded=!1,N.adminLoaded=!1,N.bootError=null,X();try{if($a(),await Hr(),await Ja(),N.authLoaded=!0,N.currentUser&&ai()){let e=ai();N.pendingInviteToken=pe(e),N.adminLoaded=!0,N.profileLoaded=!0,li(`/accept-invite?token=${encodeURIComponent(e)}`),await P({callback_invite_present:!!x(N.route),pending_invite_present:!0,onboarding_redirect_blocked:!0,accept_started_from_callback:!0,final_route:`/accept-invite?token=${encodeURIComponent(e)}`})}else N.currentUser?(await Ya(),await Xa({overwriteDraft:!0,showGlobalLoading:!0})):(N.profile=null,N.companyMembership=null,N.profileDraft=null,N.profileDraftDirty=!1,N.profileLoading=!1,N.profileLoadError=null,N.companyId=null,Y(),N.isAdmin=!1,N.adminLoaded=!0,N.profileLoaded=!0)}catch(e){console.error(`Boot failed:`,e),N.bootError=U(e),N.authLoaded=!0,N.adminLoaded=!0,N.profileLoaded=!0}finally{N.authLoading=!1,N.isBooting=!1,Ka=!0,ci()?li(`/reset-password`):ui({replace:!0}),X(),I()}}async function to(){if(!g||!N.user)return{company:null,membership:null};let{data:e,error:t}=await g.from(`companies`).select(`*`).eq(`owner_id`,N.user.id).maybeSingle();if(t)throw t;if(e)return{company:e,membership:null};let n=(await ye(g,N.user))[0]||null;if(!n?.company_id)return{company:null,membership:null};let{data:r,error:i}=await g.from(`companies`).select(`*`).eq(`id`,n.company_id).maybeSingle();if(i)throw i;return{company:r||null,membership:n}}async function no(e={}){let{overwriteDraft:t=!1}=e;if(!g||!N.user){N.profile=null,N.companyMembership=null,(t||!N.profileDraftDirty)&&(N.profileDraft=null),X();return}try{await ve(g,N.user).catch(e=>(console.warn(`Failed to claim invited company memberships:`,e),[]));let{company:e,membership:n}=await to();if(!e){N.companyId=null,N.companyMembership=null,N.storedMatches=[],Y(),N.reports=[],N.reportsLoaded=!1,N.reportsLoadError=null,N.selectedReportId=null,N.profile=null,(t||!N.profileDraftDirty)&&(N.profileDraft=null),N.profileLoadError=null,X(),I();return}if(N.profileDraftDirty&&N.companyId&&N.companyId!==e.id&&!t){if(!window.confirm(`You have unsaved profile changes. Switch company profile and discard those edits?`)){N.profileLoadError=`Unsaved changes were kept. Save or reload before switching company profiles.`,X(),I();return}N.profileDraftDirty=!1}let[r,i,a]=await Promise.all([g.from(`company_services`).select(`service`).eq(`company_id`,e.id),g.from(`company_locations`).select(`location`).eq(`company_id`,e.id),g.from(`company_keywords`).select(`keyword, type`).eq(`company_id`,e.id)]);if(r.error)throw r.error;if(i.error)throw i.error;if(a.error)throw a.error;N.companyId!==e.id&&(Y(),N.reports=[],N.reportsLoaded=!1,N.reportsLoadError=null,N.selectedReportId=null),N.companyId=e.id,N.companyMembership=n||null;let o=io(e,r.data||[],i.data||[],a.data||[]);N.profile=o,(t||!N.profileDraftDirty)&&Mo(o),N.profileLoadError=null,vo(N.profile),await Fs(),await ao(),X(),I()}catch(e){console.error(`Failed to load Supabase company profile:`,e),N.profileLoadError=U(e),N.profileDraftDirty||(N.companyId=null,N.companyMembership=null,N.storedMatches=[],Y(),N.reports=[],N.reportsLoaded=!1,N.reportsLoadError=null,N.selectedReportId=null,N.profile=null),N.profileDraftDirty||(N.profileDraft=null),X(),I()}}async function ro(e){if(!g)throw Error(`Supabase client is not configured.`);let t={...e,companyName:String(e.companyName||``).trim(),kennitala:String(e.kennitala||``).trim(),contactEmail:String(e.contactEmail||``).trim(),billingEmail:String(e.billingEmail||``).trim(),contactName:String(e.contactName||``).trim(),phone:String(e.phone||``).trim(),address:String(e.address||``).trim(),website:String(e.website||``).trim(),industry:String(e.industry||``).trim(),selectedPlan:Ar(e.selectedPlan||N.pendingSignupPlan||N.profile?.selectedPlan||N.profile?.plan)||`basic`,billingStatus:e.billingStatus||N.profile?.billingStatus||`trial`,trialStartedAt:e.trialStartedAt||N.profile?.trialStartedAt||new Date().toISOString(),trialEndsAt:e.trialEndsAt||N.profile?.trialEndsAt||new Date(Date.now()+336*60*60*1e3).toISOString(),services:k(e.services),locations:k(e.locations),includeKeywords:k(e.includeKeywords),excludeKeywords:k(e.excludeKeywords),baseLocation:String(e.baseLocation||``).trim(),serviceAreas:k(e.serviceAreas),willingToTravel:!!e.willingToTravel,nationalProjects:!!e.nationalProjects,remoteProjects:!!e.remoteProjects,minimumProjectValueForTravel:So(e.minimumProjectValueForTravel),minProjectValue:So(e.minProjectValue),maxProjectValue:So(e.maxProjectValue),allowUnknownValue:!!e.allowUnknownValue,reportFrequency:e.reportFrequency||`weekly`,reportDay:e.reportDay||`monday`,deadlineReminders:!!e.deadlineReminders,includeLowConfidence:!!e.includeLowConfidence,autoAlertMode:e.autoAlertMode||`auto_safe_only`},{data:{user:n},error:r}=await g.auth.getUser();if(r)throw r;if(!n)throw Error(`You must be logged in to save a company profile.`);N.user=n;let i={company_name:t.companyName,contact_email:t.contactEmail||n.email,kennitala:t.kennitala||null,billing_email:t.billingEmail||t.contactEmail||n.email,contact_name:t.contactName||null,phone:t.phone||null,address:t.address||null,website:t.website||null,industry:t.industry,plan:t.selectedPlan,selected_plan:t.selectedPlan,billing_status:t.billingStatus,trial_started_at:t.trialStartedAt,trial_ends_at:t.trialEndsAt,base_location:t.baseLocation||null,service_areas:t.serviceAreas,willing_to_travel:t.willingToTravel,national_projects:t.nationalProjects,remote_projects:t.remoteProjects,minimum_project_value_for_travel:t.minimumProjectValueForTravel,min_project_value:t.minProjectValue,max_project_value:t.maxProjectValue,allow_unknown_value:t.allowUnknownValue,report_frequency:t.reportFrequency,report_day:t.reportDay,deadline_reminders:t.deadlineReminders,include_low_confidence:t.includeLowConfidence,auto_alert_mode:t.autoAlertMode},{data:a,error:o}=await(N.companyId?g.from(`companies`).update(i).eq(`id`,N.companyId).select().single():g.from(`companies`).upsert({...i,owner_id:n.id},{onConflict:`owner_id`}).select().single());if(o)throw console.error(`Company upsert error:`,o),o;N.companyId!==a.id&&(N.reports=[],N.reportsLoaded=!1,N.reportsLoadError=null,N.selectedReportId=null),N.companyId=a.id;let s=(await Promise.all([g.from(`company_services`).delete().eq(`company_id`,a.id),g.from(`company_locations`).delete().eq(`company_id`,a.id),g.from(`company_keywords`).delete().eq(`company_id`,a.id)])).find(e=>e.error)?.error;if(s)throw s;let c=t.services.map(e=>({company_id:a.id,service:e})),l=t.locations.map(e=>({company_id:a.id,location:e})),u=[...t.includeKeywords.map(e=>({company_id:a.id,keyword:e,type:`include`})),...t.excludeKeywords.map(e=>({company_id:a.id,keyword:e,type:`exclude`}))];if(c.length){let{error:e}=await g.from(`company_services`).insert(c);if(e)throw e}if(l.length){let{error:e}=await g.from(`company_locations`).insert(l);if(e)throw e}if(u.length){let{error:e}=await g.from(`company_keywords`).insert(u);if(e)throw e}N.profile=t,N.pendingSignupPlan=``,Nr(),vo(t)}function io(e,t,n,r){return{id:e.id||``,ownerId:e.owner_id||``,companyName:e.company_name||``,kennitala:e.kennitala||``,contactEmail:e.contact_email||``,billingEmail:e.billing_email||e.contact_email||``,contactName:e.contact_name||``,phone:e.phone||``,address:e.address||``,website:e.website||``,industry:e.industry||``,plan:e.plan||e.selected_plan||`basic`,selectedPlan:e.selected_plan||e.plan||`basic`,billingStatus:e.billing_status||`trial`,trialStartedAt:e.trial_started_at||``,trialEndsAt:e.trial_ends_at||``,services:k(t.map(e=>e.service)),includeKeywords:k(r.filter(e=>e.type===`include`).map(e=>e.keyword)),excludeKeywords:k(r.filter(e=>e.type===`exclude`).map(e=>e.keyword)),locations:k(n.map(e=>e.location)),baseLocation:e.base_location||``,serviceAreas:k(e.service_areas),willingToTravel:!!e.willing_to_travel,nationalProjects:!!e.national_projects,remoteProjects:!!e.remote_projects,minimumProjectValueForTravel:e.minimum_project_value_for_travel==null?null:Number(e.minimum_project_value_for_travel),minProjectValue:e.min_project_value==null?null:Number(e.min_project_value),maxProjectValue:e.max_project_value==null?null:Number(e.max_project_value),allowUnknownValue:!!e.allow_unknown_value,reportFrequency:e.report_frequency||`weekly`,reportDay:e.report_day||`monday`,deadlineReminders:!!e.deadline_reminders,includeLowConfidence:!!e.include_low_confidence,autoAlertMode:e.auto_alert_mode||`auto_safe_only`}}async function ao(){if(!g||!N.companyId){N.storedMatches=[];return}try{let{data:e,error:t}=await g.from(`opportunity_matches`).select(`*, opportunities(*, sources(name, source_type))`).eq(`company_id`,N.companyId).order(`match_score`,{ascending:!1});if(t)throw t;let n=(e||[]).map(e=>e.calculated_at||e.updated_at||e.created_at).filter(Boolean).map(e=>new Date(e).getTime()).filter(e=>!Number.isNaN(e));N.lastMatchedAt=n.length?new Date(Math.max(...n)).toISOString():null;let r=(e||[]).filter(e=>e.opportunities).map(Xi).filter(kd).filter(ra),i=r.map(e=>e.id).filter(Boolean),a=[];if(i.length){let{data:e,error:t}=await g.from(`ai_match_reviews`).select(`company_id, opportunity_id, fit, confidence, send_to_client, reason, fit_reasons, risks_or_questions, suggested_client_summary, created_at, updated_at`).eq(`company_id`,N.companyId).in(`opportunity_id`,i);t&&console.warn(`Failed to load AI reviews for report ranking:`,t),a=e||[]}N.storedMatches=Xn(r,a)}catch(e){console.error(`Failed to load stored opportunity matches. Falling back to frontend matching:`,e),N.storedMatches=[],N.lastMatchedAt=null}}async function oo(){if(N.companyId&&!N.reportArchiveLoading){N.reportArchiveLoading=!0,N.reportsLoadError=null,X();try{if(!g)throw Error(`Supabase client is not configured.`);let{data:e,error:t}=await g.from(`reports`).select(`
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
      `).eq(`company_id`,N.companyId).is(`archived_at`,null).order(`created_at`,{ascending:!1});if(t)throw t;N.reports=e||[],N.reportsLoaded=!0}catch(e){console.error(`Failed to load reports:`,e),N.reportsLoadError=U(e),N.reports=[],N.reportsLoaded=!0}finally{N.reportArchiveLoading=!1,X()}}}async function so(){if(!N.user){N.reportMessage={type:`error`,text:`Log in to save reports.`},X();return}if(!N.companyId){N.reportMessage={type:`error`,text:`Create a company profile before saving reports.`},X();return}let e=od();if(!e.length){N.reportMessage={type:`error`,text:`No useful matches above the report threshold yet.`},X();return}let t=cd(N.profile,e);N.reportSaveLoading=!0,N.reportMessage=null,X();try{let{data:n,error:r}=await g.from(`reports`).insert({company_id:N.companyId,title:t.title,period_start:t.periodStart,period_end:t.periodEnd,summary:t.summary,text_content:t.textContent,html_content:t.htmlContent,status:`draft`}).select(`id`).single();if(r)throw r;let i=e.filter(e=>or(e.id)).map((e,t)=>({report_id:n.id,opportunity_id:e.id,match_score:e.matchScore,match_reasons:e.matchReasons||[],risks:e.risks||[],sort_order:t+1}));if(i.length){let{error:e}=await g.from(`report_items`).insert(i);if(e)throw e}N.reportMessage={type:`success`,text:`Report saved`},await oo(),W(`Report saved`,`success`)}catch(e){console.error(`Failed to save report:`,e),N.reportMessage={type:`error`,text:`Failed to save report. ${U(e)}`}}finally{N.reportSaveLoading=!1,X()}}async function co(e){if(!(!e||!g||!N.user)&&window.confirm(N.language===`is`?`Ertu viss um að þú viljir fela þetta yfirlit? Þetta er ekki hægt að afturkalla í mælaborðinu.`:`Are you sure you want to hide this report? This cannot be undone from the dashboard.`)){N.reportArchiveLoading=!0,N.reportMessage=null,X();try{let{error:t}=await g.from(`reports`).update({archived_at:new Date().toISOString(),archived_by:N.user.id}).eq(`id`,e).eq(`company_id`,N.companyId);if(t)throw t;N.selectedReportId===e&&(N.selectedReportId=null),N.reports=N.reports.filter(t=>t.id!==e),N.reportMessage={type:`success`,text:N.language===`is`?`Yfirlitið var falið.`:`Report hidden.`},W(N.language===`is`?`Yfirlit falið`:`Report hidden`,`success`)}catch(e){console.error(`Failed to archive report:`,e),N.reportMessage={type:`error`,text:N.language===`is`?`Gat ekki falið yfirlitið. ${U(e)}`:`Could not hide report. ${U(e)}`}}finally{N.reportArchiveLoading=!1,X()}}}async function lo(){N.matchingLoading=!0,N.matchStatus=null,X();try{if(!g)throw Error(`Supabase client is not configured.`);let e=N.user||await Ha();if(!e)throw Error(`You must be logged in to run matching.`);N.user=e;let{company:t}=await to();if(!t)throw Error(`No Supabase company profile found. Save onboarding first.`);N.companyId=t.id;let[n,r,i,a]=await Promise.all([g.from(`company_services`).select(`service`).eq(`company_id`,t.id),g.from(`company_locations`).select(`location`).eq(`company_id`,t.id),g.from(`company_keywords`).select(`keyword, type`).eq(`company_id`,t.id),g.from(`opportunities`).select(`*, sources(name, source_type)`).eq(`status`,`open`)]);if(n.error)throw n.error;if(r.error)throw r.error;if(i.error)throw i.error;if(a.error)throw a.error;let o=io(t,n.data||[],r.data||[],i.data||[]),s=N.profileDraftDirty,c=(a.data||[]).map(Yi).filter(ra).map(e=>_s(o,e)).filter(e=>e.matchScore>=50).map(e=>({company_id:t.id,opportunity_id:e.id,match_score:e.matchScore,match_label:e.matchLabel,match_reasons:e.matchReasons,risks:e.risks,next_steps:e.nextSteps,calculated_at:new Date().toISOString()})),{error:l}=await g.from(`opportunity_matches`).delete().eq(`company_id`,t.id);if(l)throw l;if(c.length){let{error:e}=await g.from(`opportunity_matches`).insert(c);if(e)throw e}N.profile=o,vo(o),s||Mo(o);let u=c.length===1?`match`:`matches`;return N.matchStatus={type:`success`,text:`Matching complete — ${c.length} stored ${u} found.`},await pi(),await Fs(),await ao(),c.length}catch(e){return console.error(`Failed to run matching:`,e),N.matchStatus={type:`error`,text:`Failed to run matching. ${U(e)}`},0}finally{N.matchingLoading=!1,X()}}async function uo(e,t){if(!N.isAdmin){N.adminMessage={type:`error`,text:`You do not have access to this page.`},X();return}N.adminSubmitting=!0,N.adminMessage=null,X();try{if(!g)throw Error(`Supabase client is not configured.`);let n=Object.fromEntries(e.entries()),r=String(n.sourceName||n.source||`Manual`).trim()||`Manual`,i=String(n.title||``).trim();if(!i)throw Error(`Title is required.`);let a=String(n.description||``).trim()||`Manual opportunity: ${i}`,o={source_id:await ho(r),external_id:`manual-${Date.now()}`,title:i,buyer:String(n.buyer||``).trim()||null,category:String(n.category||``).trim()||null,type:String(n.type||``).trim()||`tender`,description:a,deadline:n.deadline||null,published_date:n.publishedDate||n.published_date||null,location:String(n.location||``).trim()||null,estimated_value:n.estimatedValue||n.estimated_value?Number(n.estimatedValue||n.estimated_value):null,currency:`ISK`,url:n.url||null,cpv_code:n.cpvCode||n.cpv_code||null,requirements:ir(n.requirements),keywords:ir(n.keywords),difficulty:String(n.difficulty||``).trim()||`medium`,status:String(n.status||``).trim()||`open`,raw_payload:{created_from:`admin`,source_name:r}},{error:s}=await g.from(`opportunities`).insert(o).select().single();if(s)throw console.error(`Supabase insert error:`,s),Error(`${s.message} (${s.code})`);N.adminMessage={type:`success`,text:`Opportunity saved to Supabase.`},N.adminOpportunityDraft=Gr(),t?.reset(),await pi(),N.companyId&&await lo(),W(`Opportunity added`,`success`)}catch(e){let t=U(e);console.error(`Failed to add opportunity. If this is an RLS error, allow anon insert/select during development:`,e),N.adminMessage={type:`error`,text:`Failed to save opportunity. ${t}`},X()}finally{N.adminSubmitting=!1,X()}}async function fo(t){if(!N.isAdmin){N.adminMessage={type:`error`,text:`You do not have access to this page.`},X();return}N.adminDeletingId=t,N.adminMessage=null,X();try{if(!g)throw Error(`Supabase client is not configured.`);let{error:n}=await g.from(`opportunities`).delete().eq(`id`,t);if(n)throw n;N.saved=N.saved.filter(e=>e!==t),N.ignored=N.ignored.filter(e=>e!==t),bo(e.saved,N.saved),bo(e.ignored,N.ignored),N.adminMessage={type:`success`,text:`Opportunity deleted from Supabase.`},await pi(),await ja(),W(`Opportunity deleted`,`success`)}catch(e){let t=U(e);console.error(`Failed to delete opportunity. If this is an RLS error, allow anon delete/select during development:`,e),N.adminMessage={type:`error`,text:`Failed to delete opportunity. ${t}`},X()}finally{N.adminDeletingId=null,X()}}async function po(e,t){if(!N.isAdmin){N.adminMessage={type:`error`,text:`You do not have access to this page.`},X();return}N.adminUpdatingId=e,N.adminMessage=null,X();try{if(!g)throw Error(`Supabase client is not configured.`);let{error:n}=await g.from(`opportunities`).update({status:t}).eq(`id`,e);if(n)throw n;N.adminMessage={type:`success`,text:t===`open`?`Opportunity marked relevant.`:`Opportunity hidden.`},await pi(),await ja(),W(t===`open`?`Marked relevant`:`Opportunity hidden`,`success`)}catch(e){let t=U(e);console.error(`Failed to update opportunity status:`,e),N.adminMessage={type:`error`,text:`Failed to update opportunity. ${t}`},X()}finally{N.adminUpdatingId=null,X()}}async function mo(e,t){if(!N.isAdmin){N.adminMessage={type:`error`,text:`You do not have access to this page.`},X();return}let n=N.opportunities.find(t=>t.id===e);if(!n)return;let r={include:{opportunity_intent:`confirmed_tender`,quality_status:`confirmed_tender`,hidden_from_reports:!1,admin_report_status:`include`},hide:{hidden_from_reports:!0,admin_report_status:`hidden`},noise:{opportunity_intent:`not_opportunity`,quality_status:`needs_review`,hidden_from_reports:!0,admin_report_status:`noise`},confirmed_tender:{opportunity_intent:`confirmed_tender`,quality_status:`confirmed_tender`,hidden_from_reports:!1,admin_report_status:`include`},early_opportunity:{opportunity_intent:`early_opportunity`,quality_status:`early_signal`,hidden_from_reports:!1,admin_report_status:`include`}}[t];if(r){N.adminUpdatingId=e,N.adminMessage=null,X();try{if(!g)throw Error(`Supabase client is not configured.`);let t={...n.rawPayload||{},...r,admin_reviewed_at:new Date().toISOString()},{error:i}=await g.from(`opportunities`).update({raw_payload:t}).eq(`id`,e);if(i)throw i;N.adminMessage={type:`success`,text:`Report visibility updated.`},await pi(),W(`Report visibility updated`,`success`)}catch(e){let t=U(e);console.error(`Failed to update report visibility:`,e),N.adminMessage={type:`error`,text:`Failed to update report visibility. ${t}`},X()}finally{N.adminUpdatingId=null,X()}}}async function ho(e){if(!g)throw Error(`Supabase client is not configured`);let t=e&&e.trim()?e.trim():`Manual`,{data:n,error:r}=await g.from(`sources`).select(`id`).eq(`name`,t).maybeSingle();if(r)throw console.error(`Source select error:`,r),r;if(n&&n.id)return n.id;let{data:i,error:a}=await g.from(`sources`).insert({name:t,source_type:`manual`,is_active:!0,notes:`Created from VerkRadar admin page`}).select(`id`).single();if(a)throw console.error(`Source insert error:`,a),a;return i.id}function U(e){return e?typeof e==`string`?e:[e.message,e.details,e.hint,e.code].filter(Boolean).join(` `):`Unknown error`}function go(e,t=`login`){let n=String(e?.message||e||``).toLowerCase(),r=String(e?.code||e?.status||``).toLowerCase();return n.includes(`invalid login credentials`)||n.includes(`invalid_credentials`)||r.includes(`invalid_credentials`)?M(`emailOrPasswordIncorrect`):n.includes(`email not confirmed`)?M(`confirmEmailBeforeLogin`):_o(e)?M(`signupExistingAccount`):n.includes(`password`)&&n.includes(`characters`)?M(`passwordTooShort`):n.includes(`rate limit`)||n.includes(`too many`)?M(`tooManyAttempts`):M(t===`signup`?`couldNotCreateAccount`:`couldNotLogin`)}function _o(e){let t=String(e?.message||e||``).toLowerCase(),n=String(e?.code||e?.status||``).toLowerCase();return t.includes(`user already registered`)||t.includes(`already registered`)||t.includes(`already exists`)||n.includes(`user_already_exists`)||n.includes(`email_exists`)}function W(e,t=`success`){N.toast={message:e,type:t},X(),clearTimeout(window.__toastTimeout),window.__toastTimeout=setTimeout(()=>{N.toast=null,X()},2500)}function vo(t){localStorage.setItem(e.profile,JSON.stringify(t))}function yo(e){try{let t=localStorage.getItem(e);return t?JSON.parse(t):[]}catch{return[]}}function bo(e,t){localStorage.setItem(e,JSON.stringify(t))}function xo(e){return k(e).join(`, `)}function So(e){if(e==null||e===``)return null;let t=Number(e);return Number.isFinite(t)?t:null}function Co(e){return String(e||``).trim().toLowerCase()}function wo(e,t=N.profileDraft?.industry){return u[e]?.[t]||[]}function To(e,t){if(![`services`,`includeKeywords`,`excludeKeywords`].includes(e)||!t)return;G();let n=Array.isArray(N.profileDraft[e])?N.profileDraft[e]:[],r=Co(t),i=n.some(e=>Co(e)===r);N.profileDraft[e]=i?n.filter(e=>Co(e)!==r):[...n,t],jo(),X()}function Eo(){N.adminTrialCompanyDraft||=Sn(gu(),()=>f(``))}function Do(e){let t=hu(e);!t||t.converted_company_id||t.status===`converted`||(N.selectedAdminTrialRequestId=t.id,N.adminTrialCompanyDraft=Sn(t,()=>f(``)),N.adminTrialCompanyMessage=``,N.adminTrialCompanyError=``,X())}function Oo(e,t){if(![`services`,`includeKeywords`,`excludeKeywords`].includes(e)||!t)return;Eo();let n=Array.isArray(N.adminTrialCompanyDraft[e])?N.adminTrialCompanyDraft[e]:[],r=Co(t),i=n.some(e=>Co(e)===r);N.adminTrialCompanyDraft[e]=i?n.filter(e=>Co(e)!==r):[...n,t],X()}function ko({field:e,title:t,values:n,selectedValues:r}){if(!n.length)return``;let i=Array.isArray(r)?r:[];return`
    <div class="suggestion-group">
      <div class="suggestion-group-head">
        <span>${j(t)}</span>
      </div>
      <div class="suggestion-chips">
        ${n.map(t=>{let n=i.some(e=>Co(e)===Co(t));return`
            <button
              type="button"
              class="suggestion-chip ${n?`is-selected`:``}"
              data-action="toggle-profile-suggestion"
              data-field="${j(e)}"
              data-value="${j(t)}"
              aria-pressed="${n?`true`:`false`}"
            >${j(t)}</button>
          `}).join(``)}
      </div>
    </div>
  `}function G(){if(!N.profileDraft){if(N.profile){N.profileDraft=Ao(N.profile);return}N.profileDraft=Dr(),N.pendingSignupPlan&&(N.profileDraft.selectedPlan=N.pendingSignupPlan)}}function Ao(e){return{...e,services:k(e.services),includeKeywords:k(e.includeKeywords),excludeKeywords:k(e.excludeKeywords),locations:k(e.locations),serviceAreas:k(e.serviceAreas)}}function jo(){N.profileDraftDirty=!0,N.profileSaved=!1,N.profileSaveMessage=null,N.profileSaveError=null}function Mo(e){N.profileDraft=Ao(e||Dr()),N.profileDraftDirty=!1}function No(e){G();let t=new FormData(e),n={...N.profileDraft};K(e,`companyName`)&&(n.companyName=String(t.get(`companyName`)||``).trim()),K(e,`kennitala`)&&(n.kennitala=String(t.get(`kennitala`)||``).trim()),K(e,`contactEmail`)&&(n.contactEmail=String(t.get(`contactEmail`)||``).trim()),K(e,`billingEmail`)&&(n.billingEmail=String(t.get(`billingEmail`)||``).trim()),K(e,`contactName`)&&(n.contactName=String(t.get(`contactName`)||``).trim()),K(e,`phone`)&&(n.phone=String(t.get(`phone`)||``).trim()),K(e,`address`)&&(n.address=String(t.get(`address`)||``).trim()),K(e,`website`)&&(n.website=String(t.get(`website`)||``).trim()),K(e,`selectedPlan`)&&(n.selectedPlan=Ar(t.get(`selectedPlan`))||`basic`),K(e,`industry`)&&(n.industry=String(t.get(`industry`)||``)),K(e,`services`)&&(n.services=O(t.get(`services`))),K(e,`includeKeywords`)&&(n.includeKeywords=O(t.get(`includeKeywords`))),K(e,`excludeKeywords`)&&(n.excludeKeywords=O(t.get(`excludeKeywords`))),K(e,`locations`)&&(n.locations=t.getAll(`locations`)),K(e,`baseLocation`)&&(n.baseLocation=String(t.get(`baseLocation`)||``)),K(e,`serviceAreas`)&&(n.serviceAreas=O(t.get(`serviceAreas`))),K(e,`willingToTravel`)&&(n.willingToTravel=t.get(`willingToTravel`)===`on`),K(e,`nationalProjects`)&&(n.nationalProjects=t.get(`nationalProjects`)===`on`),K(e,`remoteProjects`)&&(n.remoteProjects=t.get(`remoteProjects`)===`on`),K(e,`minimumProjectValueForTravel`)&&(n.minimumProjectValueForTravel=String(t.get(`minimumProjectValueForTravel`)||``)),K(e,`minProjectValue`)&&(n.minProjectValue=String(t.get(`minProjectValue`)||``)),K(e,`maxProjectValue`)&&(n.maxProjectValue=String(t.get(`maxProjectValue`)||``)),K(e,`allowUnknownValue`)&&(n.allowUnknownValue=t.get(`allowUnknownValue`)===`on`),K(e,`reportFrequency`)&&(n.reportFrequency=String(t.get(`reportFrequency`)||`weekly`)),K(e,`reportDay`)&&(n.reportDay=String(t.get(`reportDay`)||`monday`)),K(e,`deadlineReminders`)&&(n.deadlineReminders=t.get(`deadlineReminders`)===`on`),K(e,`includeLowConfidence`)&&(n.includeLowConfidence=t.get(`includeLowConfidence`)===`on`),N.profileDraft=n,jo()}function Po(e){Eo(),N.adminTrialCompanyDraft=Fo(e,N.adminTrialCompanyDraft)}function Fo(e,t={}){let n=new FormData(e),r={...t};return K(e,`companyName`)&&(r.companyName=String(n.get(`companyName`)||``).trim()),K(e,`kennitala`)&&(r.kennitala=String(n.get(`kennitala`)||``).trim()),K(e,`contactEmail`)&&(r.contactEmail=String(n.get(`contactEmail`)||``).trim()),K(e,`billingEmail`)&&(r.billingEmail=String(n.get(`billingEmail`)||``).trim()),K(e,`contactName`)&&(r.contactName=String(n.get(`contactName`)||``).trim()),K(e,`phone`)&&(r.phone=String(n.get(`phone`)||``).trim()),K(e,`address`)&&(r.address=String(n.get(`address`)||``).trim()),K(e,`website`)&&(r.website=String(n.get(`website`)||``).trim()),K(e,`selectedPlan`)&&(r.selectedPlan=Ar(n.get(`selectedPlan`))||`basic`),K(e,`industry`)&&(r.industry=String(n.get(`industry`)||``)),K(e,`services`)&&(r.services=O(n.get(`services`))),K(e,`includeKeywords`)&&(r.includeKeywords=O(n.get(`includeKeywords`))),K(e,`excludeKeywords`)&&(r.excludeKeywords=O(n.get(`excludeKeywords`))),K(e,`locations`)&&(r.locations=n.getAll(`locations`)),K(e,`baseLocation`)&&(r.baseLocation=String(n.get(`baseLocation`)||``)),K(e,`serviceAreas`)&&(r.serviceAreas=O(n.get(`serviceAreas`))),K(e,`willingToTravel`)&&(r.willingToTravel=n.get(`willingToTravel`)===`on`),K(e,`nationalProjects`)&&(r.nationalProjects=n.get(`nationalProjects`)===`on`),K(e,`remoteProjects`)&&(r.remoteProjects=n.get(`remoteProjects`)===`on`),K(e,`minimumProjectValueForTravel`)&&(r.minimumProjectValueForTravel=String(n.get(`minimumProjectValueForTravel`)||``)),K(e,`minProjectValue`)&&(r.minProjectValue=String(n.get(`minProjectValue`)||``)),K(e,`maxProjectValue`)&&(r.maxProjectValue=String(n.get(`maxProjectValue`)||``)),K(e,`allowUnknownValue`)&&(r.allowUnknownValue=n.get(`allowUnknownValue`)===`on`),K(e,`reportFrequency`)&&(r.reportFrequency=String(n.get(`reportFrequency`)||`weekly`)),K(e,`reportDay`)&&(r.reportDay=String(n.get(`reportDay`)||`monday`)),K(e,`deadlineReminders`)&&(r.deadlineReminders=n.get(`deadlineReminders`)===`on`),K(e,`includeLowConfidence`)&&(r.includeLowConfidence=n.get(`includeLowConfidence`)===`on`),r}function K(e,t){return!!e.querySelector(`[name="${CSS.escape(t)}"]`)}function Io(){return G(),{...N.profileDraft,companyName:String(N.profileDraft.companyName||``).trim(),kennitala:String(N.profileDraft.kennitala||``).trim(),contactEmail:String(N.profileDraft.contactEmail||``).trim(),billingEmail:String(N.profileDraft.billingEmail||``).trim(),contactName:String(N.profileDraft.contactName||``).trim(),phone:String(N.profileDraft.phone||``).trim(),address:String(N.profileDraft.address||``).trim(),website:String(N.profileDraft.website||``).trim(),selectedPlan:Ar(N.profileDraft.selectedPlan||N.pendingSignupPlan)||`basic`,industry:String(N.profileDraft.industry||``),services:k(N.profileDraft.services),includeKeywords:k(N.profileDraft.includeKeywords),excludeKeywords:k(N.profileDraft.excludeKeywords),locations:k(N.profileDraft.locations),baseLocation:String(N.profileDraft.baseLocation||``),serviceAreas:k(N.profileDraft.serviceAreas),willingToTravel:!!N.profileDraft.willingToTravel,nationalProjects:!!N.profileDraft.nationalProjects,remoteProjects:!!N.profileDraft.remoteProjects,minimumProjectValueForTravel:So(N.profileDraft.minimumProjectValueForTravel),minProjectValue:So(N.profileDraft.minProjectValue),maxProjectValue:So(N.profileDraft.maxProjectValue)}}function Lo(){Eo();let e=N.adminTrialCompanyDraft||{};return{...e,companyName:String(e.companyName||``).trim(),kennitala:String(e.kennitala||``).trim(),contactEmail:String(e.contactEmail||``).trim(),billingEmail:String(e.billingEmail||``).trim(),contactName:String(e.contactName||``).trim(),phone:String(e.phone||``).trim(),address:String(e.address||``).trim(),website:String(e.website||``).trim(),selectedPlan:Ar(e.selectedPlan)||`basic`,billingStatus:e.billingStatus||`trial`,trialStartedAt:e.trialStartedAt||new Date().toISOString(),trialEndsAt:e.trialEndsAt||new Date(Date.now()+336*60*60*1e3).toISOString(),industry:String(e.industry||``),services:k(e.services),includeKeywords:k(e.includeKeywords),excludeKeywords:k(e.excludeKeywords),locations:k(e.locations),baseLocation:String(e.baseLocation||``),serviceAreas:k(e.serviceAreas),willingToTravel:!!e.willingToTravel,nationalProjects:!!e.nationalProjects,remoteProjects:!!e.remoteProjects,minimumProjectValueForTravel:So(e.minimumProjectValueForTravel),minProjectValue:So(e.minProjectValue),maxProjectValue:So(e.maxProjectValue),allowUnknownValue:!!e.allowUnknownValue,reportFrequency:e.reportFrequency||`weekly`,reportDay:e.reportDay||`monday`,deadlineReminders:!!e.deadlineReminders,includeLowConfidence:!!e.includeLowConfidence,autoAlertMode:e.autoAlertMode||`auto_safe_only`}}function Ro(e,t){return String(e||``).toLowerCase().includes(String(t||``).toLowerCase())}function zo(e){return[e.title,e.description,e.category,e.location,...e.keywords||[]].join(` `).toLowerCase()}var Bo=`jarðvinna.gatnagerð.gatna- og stígagerð.gatna og stígagerð.stígagerð.lóðarframkvæmdir.lagnavinna.lagnir.fráveita.fráveitulagnir.vatnsveita.hitaveita.vatnslagnir.regnvatnslagnir.drenlagnir.endurnýjun lagna.brunnar.dælubrunnar.malbikun.gangstétt.gangstéttir.stígar.bílastæði.vegagerð.gröftur.fyllingar.grjóthleðsla.jarðvegsskipti.undirbygging.yfirborðsfrágangur.hellulögn.hellulagnir.kantsteinn.kantsteinar.landmótun.afvötnun.jarðvegsvinna.útiframkvæmdir.gatnaframkvæmdir`.split(`.`),Vo=[`snjómokstur`,`snjóruðningur`,`hálkuvarnir`,`vetrarþjónusta`,`gangstéttir`,`stofnanalóðir`],Ho=[`framkvæmdir`,`framkvæmd`,`útboð`,`verðfyrirspurn`,`tilboð`,`viðhald`,`verktaki`,`verk`],Uo=[`innanhússfrágangur`,`innanhúss`,`smíði`,`smíðavinna`,`málun`,`gólfefni`,`innréttingar`,`raflagnir`,`pípulagnir`,`leikskóli`,`skóli`,`húsnæði`,`byggingarvinna`],Wo=[`innanhússfrágangur`,`innanhúss`,`smíði`,`smíðavinna`,`málun`,`gólfefni`,`innréttingar`,`raflagnir`,`pípulagnir`,`byggingarvinna`],Go=[`for- og verkhönnun`,`verkhönnun`,`forhönnun`,`hönnun`,`ráðgjöf`,`verkfræðiráðgjöf`,`eftirlit`,`umsjón`,`verkefnastjórn`,`verkefnastjórnun`],Ko=[`hönnun`,`for- og verkhönnun`,`verkhönnun`,`forhönnun`,`ráðgjöf`,`verkfræðiráðgjöf`,`eftirlit`,`umsjón`,`verkefnastjórn`,`verkefnastjórnun`],qo=[`jarðvinna`,`jarðvegsvinna`,`gatnagerð`,`gatna- og stígagerð`,`stígagerð`,`vegagerð`,`lóðarframkvæmdir`,`gröftur`,`jarðvegsskipti`,`fyllingar`,`afvötnun`,`landmótun`,`yfirborðsfrágangur`,`malbikun`,`útiframkvæmdir`];function q(e){return A(e)}function Jo(e,t){let n=q(e);return t.some(e=>n.includes(q(e)))}function J(e){let t=q(e);return Ho.some(e=>t===q(e))}function Yo(e){let t=q(e);return Bo.some(e=>t===q(e))?0:Bo.some(e=>t.includes(q(e))||q(e).includes(t))?1:Vo.some(e=>t===q(e))?2:J(e)?10:3}function Xo(e){return[...e].sort((e,t)=>Yo(e)-Yo(t)||String(t).length-String(e).length||String(e).localeCompare(String(t)))}function Zo(e){let t=q(e);return Bo.filter(e=>t.includes(q(e)))}function Qo(e){let t=q(e);return Vo.filter(e=>t.includes(q(e)))}function $o(e,t){let n=Zo(t);if(!n.length||!e.some(J))return e;let r=e.filter(e=>!J(e));return[...new Set([...n,...r])]}function es(e={}){return Jo([e.industry,...Array.isArray(e.services)?e.services:[],...Array.isArray(e.includeKeywords)?e.includeKeywords:[]].filter(Boolean).join(` `),[...Bo,...Vo,`construction`,`contractor`,`verktaki`,`mannvirki`,`jarðtækni`])}function ts(e={}){return Jo([...Array.isArray(e.services)?e.services:[],...Array.isArray(e.includeKeywords)?e.includeKeywords:[]].filter(Boolean).join(` `),Vo)}function ns(e={}){return Jo([...Array.isArray(e.services)?e.services:[],...Array.isArray(e.includeKeywords)?e.includeKeywords:[]].filter(Boolean).join(` `),Wo)}function rs(e={}){return Jo([...Array.isArray(e.services)?e.services:[],...Array.isArray(e.includeKeywords)?e.includeKeywords:[]].filter(Boolean).join(` `),Ko)}function is(e={}){return Jo([e.industry,...Array.isArray(e.services)?e.services:[],...Array.isArray(e.includeKeywords)?e.includeKeywords:[]].filter(Boolean).join(` `),qo)}function as(e,t,n,r){if(!es(e))return{isCivilProfile:!1,serviceHits:n,keywordHits:r,hasWeakOnlyFit:!1,hasIndoorMismatch:!1,hasConsultingMismatch:!1,hasSecondaryOnlyFit:!1,hasPromotedBroadFit:!1,hasWinterOnlyFit:!1};let i=zo(t),a=Jo(i,Bo),o=Jo(i,Vo),s=ts(e),c=o&&s,l=Jo(i,Uo),u=ns(e),d=Jo(i,Go),f=rs(e),p=Zo(i),m=c?Qo(i):[],h=n.length>0&&n.every(J),g=r.length>0&&r.every(J),_=[...n,...r].some(e=>!J(e)),v=[...n,...r].some(J),y=!_&&v&&a,ee=y||c?[...new Set([...n,...y?p:[],...m])]:n,te=a||c||_,b=te&&y?$o(ee,i):ee.filter(e=>!J(e)),ne=te&&y?$o(r,i):r.filter(e=>!J(e)),x=[...new Set([...b,...ne].filter(e=>!J(e)))],S=!is(e);return{isCivilProfile:!0,serviceHits:Xo(b),keywordHits:Xo(ne),hasWeakOnlyFit:!a&&!c&&!_&&(h||g),hasIndoorMismatch:l&&!a&&!u,hasConsultingMismatch:d&&!f,hasWinterOnlyFit:c&&!a,hasSecondaryOnlyFit:_&&S&&x.length<=2&&p.length>=3,hasPromotedBroadFit:y}}function os(e){let t=A(e.location);if(ps(t)&&ms(e))return!1;let n=A(`${e.title} ${e.description} ${e.location}`);return[`all iceland`,`iceland`,`island`].some(e=>t.includes(e))?!0:[`national`,`landsvist`,`nationwide`].some(e=>n.includes(e))}function ss(e){return[...e.locations||[],...e.serviceAreas||[],e.baseLocation].filter(Boolean)}function cs(e,t){let n=ss(e);if(!n.length)return!1;let r=ba(t);if(n.includes(`All Iceland`)){let e=A(fs(t));return r===`IS`||e.includes(`iceland`)||e.includes(`island`)}if(n.includes(`Remote / Online`)&&fs(t)===`Remote / Online`)return!0;if(!r||r!==`IS`&&n.some(e=>A(e).includes(`iceland`)))return!1;let i=A(fs(t));return n.some(e=>{let t=A(e);return t?t===i||t===`reykjavik`&&[`reykjavik`,`capital area`,`hofudborgarsvaedid`].includes(i)||t===`capital area`&&[`reykjavik`,`capital area`,`hofudborgarsvaedid`].includes(i)?!0:i.includes(t)||t.includes(i):!1})}function ls(e,t){return e?cs(e,t)?`local_match`:e.locations?.includes(`Remote / Online`)&&fs(t)===`Remote / Online`?`remote_match`:os(t)&&(ds(t)||ba(t)===`IS`)?`national_match`:fs(t)===`Remote / Online`&&e.remoteProjects?`remote_match`:ds(t)&&(e.nationalProjects||e.willingToTravel)?`outside_area_possible`:`outside_area_low_confidence`:`outside_area_low_confidence`}function us(e,t){let n=ls(e,t);return n===`local_match`?`Local match`:n===`national_match`?`National opportunity`:n===`remote_match`?`Remote opportunity`:n===`outside_area_possible`?`Outside base area but travel allowed`:n===`outside_area_low_confidence`?`Outside selected area; low-confidence location match`:null}function ds(e){if(ba(e)===`IS`)return!0;let t=A(fs(e));return[`iceland`,`island`,`all iceland`,`reykjavik`,`capital area`,`hofudborgarsvaedid`,`east iceland`,`west iceland`,`north iceland`,`south iceland`,`sudurnes`].some(e=>t.includes(e))}function fs(e={}){let t=String(e.location||``).trim(),n=A(t);return t&&!ps(n)?t:ms(e)||t}function ps(e){return!e||e===`unknown`||e===`all iceland`||e===`iceland`||e===`island`}function ms(e={}){let t=e.rawPayload&&typeof e.rawPayload==`object`?e.rawPayload:{},n=A([e.title,e.description,e.buyer,t.buyer,t.extracted_buyer,t.source_name,t.extracted_location,t.location].filter(Boolean).join(` `));return n.includes(`reykjavik`)||n.includes(`reykjavikurborg`)||n.includes(`hofudborgarsvaedid`)?`Reykjavík / Höfuðborgarsvæðið`:``}function hs(e,t){return t.estimatedValue?!(e.minProjectValue&&t.estimatedValue<e.minProjectValue||e.maxProjectValue&&t.estimatedValue>e.maxProjectValue):!!e.allowUnknownValue}function gs(e,t){let n=String(e.industry||``).toLowerCase(),r=String(t.category||``).toLowerCase();return r.includes(n)||n.includes(r)}function _s(e,t){if(!e)return{...t,matchScore:0,matchLabel:`Weak match`,matchReasons:[],risks:[],nextSteps:[]};let n=zo(t),r=0,i=[],a=[];gs(e,t)&&(r+=35,i.push(`Matches your ${e.industry} industry`));let o=as(e,t,(e.services||[]).filter(e=>Ro(n,e)),(e.includeKeywords||[]).filter(e=>Ro(n,e)));for(let e of o.serviceHits)r+=10,i.push(`Mentions your service: ${e}`);for(let e of o.keywordHits)r+=8,i.push(`Contains your keyword: ${e}`);let s=ls(e,t),c=us(e,t);if(s===`local_match`)r+=22,i.push(c);else if(s===`national_match`)r+=16,i.push(c);else if(s===`remote_match`)r+=14,i.push(c);else if(s===`outside_area_possible`){let n=Number(e.minimumProjectValueForTravel||0),o=n&&t.estimatedValue&&Number(t.estimatedValue)<n;r+=o?-4:4,i.push(c),a.push(o?`Outside base area and below your preferred travel project value`:`Check travel cost, project size and delivery capacity`)}else r-=8,a.push(`Outside selected area; location match is low confidence`);o.hasWinterOnlyFit&&s===`local_match`&&(r+=12,i.push(`Local winter service fit`)),hs(e,t)?(r+=10,t.estimatedValue&&i.push(`Project value is inside your preferred range`)):(r-=25,a.push(`Estimated project value is outside your preferred range`));let l=E(t.deadline);t.deadline?l>=0&&l<=30?(r+=8,i.push(`Deadline is coming up soon`)):l<0&&(r-=50,a.push(`Deadline has passed`)):a.push(Js(t));for(let t of e.excludeKeywords||[])Ro(n,t)&&(r-=18,a.push(`Contains exclude keyword: ${t}`));return(t.requirements||[]).some(e=>Ro(e,`certification`)||Ro(e,`license`))&&a.push(`May require certification or license documentation`),t.difficulty===`high`&&a.push(`This appears to be a higher-complexity opportunity`),o.hasWeakOnlyFit&&(r=Math.min(r,40),a.push(`Only broad construction/procurement terms matched; verify fit`)),o.hasIndoorMismatch&&(r=Math.min(r-20,40),a.push(`Appears to be indoor/building finishing work outside your core civil services`)),o.hasConsultingMismatch&&(r=Math.min(r-30,35),a.push(`Appears to be design, consulting, supervision, or project management work outside your execution services`)),o.hasSecondaryOnlyFit&&(r=Math.min(r,84),a.push(`Secondary service match in a broader infrastructure tender; verify scope`)),o.hasPromotedBroadFit&&(r=Math.min(r,72),a.push(`Broad construction terms matched; verify the specific work type`)),o.hasWinterOnlyFit&&(r=Math.min(r,68),a.push(`Winter/snow service fit; verify capacity and scope`)),r=Math.max(0,Math.min(100,Math.round(r))),{...t,matchScore:r,matchLabel:ys(r),matchReasons:i.slice(0,5),risks:[...new Set(a)].slice(0,4),nextSteps:[`Open the source documents`,`Confirm mandatory requirements`,`Check capacity and profitability`,`Prepare questions before the deadline`]}}function vs(e){if(!N.profile||!es(N.profile))return e;let t=_s(N.profile,e);return Number(t.matchScore||0)>=Number(e.matchScore||0)?e:{...e,matchScore:t.matchScore,matchLabel:t.matchLabel,matchReasons:t.matchReasons,risks:t.risks,nextSteps:t.nextSteps}}function ys(e){return e>=85?`Strong match`:e>=65?`Good match`:e>=45?`Possible match`:`Weak match`}function bs(){if(N.storedMatches.length)return N.storedMatches.filter(kd).filter(Cs).filter(ra).filter(e=>!N.ignored.includes(e.id)).map(vs).sort((e,t)=>t.matchScore-e.matchScore||E(e.deadline)-E(t.deadline));let e=N.profile||(N.user?null:Tr);return e?N.opportunities.filter(kd).map(t=>_s(e,t)).filter(Cs).filter(ra).filter(e=>!N.ignored.includes(e.id)).sort((e,t)=>t.matchScore-e.matchScore||E(e.deadline)-E(t.deadline)):[]}function xs(){return N.storedMatches.filter(kd).filter(Cs).filter(ra).filter(e=>!N.ignored.includes(e.id)).sort((e,t)=>t.matchScore-e.matchScore||E(e.deadline)-E(t.deadline))}function Ss(){let e=N.profile||(N.user?null:Tr);return e?N.opportunities.filter(kd).map(t=>_s(e,t)).filter(Cs).filter(ra).filter(e=>!N.ignored.includes(e.id)).sort((e,t)=>Ns(e)-Ns(t)||t.matchScore-e.matchScore||E(e.deadline)-E(t.deadline)):[]}function Cs(e){return N.isAdmin&&N.filters.label===`all_opportunities`?!0:md(e)}function ws(e={}){return String(e.safetyStatus||e.safety_status||`auto_approved`)}function Ts(e){return[...xs(),...Ss()].find(t=>t.id===e)}function Es(){let e=Ds([`all_opportunities`,`needs_review`].includes(N.filters.label)?Ss():xs());if(N.filters.label===`recommended`){let t=e.filter(ks),n=e.filter(As);return Ms(t.length?t:n)}return Ms(e.filter(Os))}function Ds(e){return e.filter(e=>{let t=N.filters.search.toLowerCase();return!(t&&!zo(e).includes(t)||N.filters.category!==`all`&&e.category!==N.filters.category||N.filters.location!==`all`&&e.location!==N.filters.location||N.filters.type!==`all`&&e.type!==N.filters.type||N.filters.savedOnly&&!N.saved.includes(e.id))})}function Os(e){let t=N.filters.label;return t===`all`||t===`all_opportunities`?!0:t===`needs_review`?R(e.qualityStatus,e)===`needs_review`:t===`recommended`?ks(e):t===`strong`?e.matchLabel===`Strong match`||e.matchScore>=85:t===`possible`?[`Possible match`,`Weak match`].includes(e.matchLabel)||e.matchScore<65:e.matchLabel===t}function ks(e){return!js(e)||hd(e)?!1:e.matchScore>=85||e.matchLabel===`Strong match`?!0:!(R(e.qualityStatus,e)===`needs_review`||ya(V(e)))}function As(e){return!js(e)||hd(e)?!1:e.matchScore>=85||e.matchLabel===`Strong match`?!0:!(R(e.qualityStatus,e)===`needs_review`||ya(V(e)))}function js(e){return[`Strong match`,`Good match`,`Possible match`].includes(e.matchLabel)||e.matchScore>=45}function Ms(e){return[...e].sort((e,t)=>Ns(e)-Ns(t)||t.matchScore-e.matchScore||E(e.deadline)-E(t.deadline))}function Ns(e){let t=z(e);if(t===`confirmed_tender`)return 0;if(t===`early_opportunity`)return 1;if(t===`market_signal`)return 2;if(t===`news_context`)return 8;if(t===`not_opportunity`)return 9;let n=R(e.qualityStatus,e);return n===`confirmed_tender`?0:n===`early_signal`?1:2}function Ps({visibleCount:e,storedMatchCount:t,filteredStoredCount:n,availableCount:r,recommendedCount:i,strongCount:a,companyName:o}){let s=N.filters.label;return N.language===`is`?s===`all_opportunities`?`${r} tækifæri eru til í kerfinu. Sýni ${e} sýnileg tækifæri til yfirferðar.`:s===`needs_review`?`${r} tækifæri eru til í kerfinu. Sýni ${e} atriði sem þarf að staðfesta.`:s===`all`?`${t} tækifæri fundust sem gætu passað við ${o}. Sýni ${e}.`:s===`strong`?`${t} tækifæri fundust sem gætu passað við ${o}. Sýni ${e} sterkar samsvaranir.`:s===`recommended`?e?`${t} tækifæri fundust sem gætu passað við ${o}. Sýni ${e} ráðlögð eða möguleg tækifæri.`:a>0?`${a} sterkar samsvaranir eru til fyrir ${o}, en þær eru faldar af núverandi síum.`:n>0?`${n} tækifæri eru falin af gæðasíum. Notið Allar samsvaranir eða Þarfnast staðfestingar til að skoða þau.`:`Engar ráðlagðar samsvaranir fyrir ${o} enn. ${r} tækifæri eru til í kerfinu, en ekkert passar nógu sterkt við þennan prófíl.`:s===`possible`?`${t} tækifæri fundust sem gætu passað við ${o}. Sýni ${e} mögulegar eða veikar samsvaranir.`:`${t} tækifæri fundust sem gætu passað við ${o}. Sýni ${e} tækifæri.`:s===`all_opportunities`?`${r} opportunities are available in the system. Showing ${e} visible opportunities for inspection.`:s===`needs_review`?`${r} opportunities are available in the system. Showing ${e} needs-review opportunities.`:s===`all`?`${t} opportunities may fit ${o}. Showing all ${e}.`:s===`strong`?`${t} opportunities may fit ${o}. Showing ${e} strong matches.`:s===`recommended`?e?`${t} opportunities may fit ${o}. Showing ${e} recommended or possible matches.`:a>0?`${a} strong ${a===1?`match exists`:`matches exist`} for ${o}, but ${a===1?`it is`:`they are`} hidden by your current filters.`:n>0?`${n} ${n===1?`opportunity is`:`opportunities are`} hidden from Recommended by quality checks. Use All matches or Needs review to inspect them.`:`No recommended matches for ${o} yet. ${r} opportunities are available in the system, but none match this profile strongly enough.`:s===`possible`?`${t} opportunities may fit ${o}. Showing ${e} possible or weak matches.`:`${t} opportunities may fit ${o}. Showing ${e} ${s.toLowerCase()} opportunities.`}async function Fs(){if(!g||!N.companyId){N.opportunityActions=[];return}try{let{data:e,error:t}=await g.from(`company_opportunity_actions`).select(`id, company_id, opportunity_id, action_type, note, created_at, updated_at`).eq(`company_id`,N.companyId);if(t)throw t;N.opportunityActions=e||[],N.saved=N.opportunityActions.filter(e=>[`saved`,`watched`].includes(e.action_type)).map(e=>e.opportunity_id),N.ignored=N.opportunityActions.filter(e=>e.action_type===`ignored`).map(e=>e.opportunity_id)}catch(e){console.error(`Failed to load company opportunity actions:`,e),N.opportunityActions=[],N.saved=[],N.ignored=[]}}async function Is(t,n){if(!g||!N.companyId){(n===`saved`||n===`watched`)&&(N.saved=Array.from(new Set([...N.saved,t])),N.ignored=N.ignored.filter(e=>e!==t)),n===`ignored`&&(N.ignored=Array.from(new Set([...N.ignored,t])),N.saved=N.saved.filter(e=>e!==t)),bo(e.saved,N.saved),bo(e.ignored,N.ignored);return}let{error:r}=await g.from(`company_opportunity_actions`).upsert({company_id:N.companyId,opportunity_id:t,action_type:n,updated_at:new Date().toISOString()},{onConflict:`company_id,opportunity_id`});if(r)throw r;await Fs()}async function Ls(t){if(!g||!N.companyId){N.saved=N.saved.filter(e=>e!==t),N.ignored=N.ignored.filter(e=>e!==t),bo(e.saved,N.saved),bo(e.ignored,N.ignored);return}let{error:n}=await g.from(`company_opportunity_actions`).delete().eq(`company_id`,N.companyId).eq(`opportunity_id`,t);if(n)throw n;await Fs()}async function Rs(e){let t=`Opportunity saved`;try{N.saved.includes(e)?(await Ls(e),t=`Removed from saved`):await Is(e,`saved`),W(t,`success`),X()}catch(e){console.error(`Failed to update saved opportunity:`,e),W(`Could not update saved opportunity`,`error`)}}async function zs(e){try{await Is(e,`ignored`),N.selectedOpportunityId===e&&(N.selectedOpportunityId=null),W(`Opportunity hidden`,`success`),X()}catch(e){console.error(`Failed to ignore opportunity:`,e),W(`Could not hide opportunity`,`error`)}}async function Bs(e){try{await Ls(e),X()}catch(e){console.error(`Failed to unignore opportunity:`,e),W(`Could not restore opportunity`,`error`)}}function Vs(e){N.selectedOpportunityId=e,document.body.classList.add(`modal-open`),X()}function Hs(){Y(),X()}function Y(){N.selectedOpportunityId=null,document.body.classList.remove(`modal-open`)}function Us(){if(!N.selectedOpportunityId){document.body.classList.remove(`modal-open`);return}if(!Ts(N.selectedOpportunityId)){N.selectedOpportunityId=null,document.body.classList.remove(`modal-open`);return}document.body.classList.add(`modal-open`)}function Ws(e){if(!e)return{label:$(xr),className:`deadline danger`};let t=E(e);return t===999?{label:$(xr),className:`deadline danger`}:{label:M(`daysLeft`,{count:t}),className:t<=14?`deadline danger`:`deadline`}}function Gs(e){let t=String(e||``).trim().match(/^(\d{4}-\d{2}-\d{2})T(\d{2}):(\d{2})/);return t?`${ud(t[1])} kl. ${t[2]}:${t[3]}`:``}function Ks(e){return e?nr(e):$(xr)}function qs(e){return e?.deadlineAt?Gs(e.deadlineAt):e?.deadline?ud(e.deadline):$(Js(e))}function Js(e){if(B(e)){let t=oa(e);return[`tender_awarded`,`awarded`,`already_tendered`,`announced`].includes(t)?`Tender appears already announced/awarded — verify source article.`:t===`upcoming_tender`?`Formal tender deadline not found yet — monitor source article.`:Sr}return String(e?.rawPayload?.deadline_warning||``).trim()||xr}function Ys(e){if(!e?.deadline)return{label:$(Js(e)),className:`deadline danger`};let t=Gs(e.deadlineAt);return t?{label:t,className:E(e.deadline)<=14?`deadline danger`:`deadline`}:Ws(e.deadline)}function Xs(e){return e?cr(e,`ISK`):N.language===`is`?`Ekki gefið upp`:`Value unknown`}function Zs(){return[...new Set(N.opportunities.map(e=>e.category))].sort()}function Qs(){return[...new Set(N.opportunities.map(e=>e.location))].sort()}function $s(){return[...new Set(N.opportunities.map(e=>e.type))].sort()}function ec(e){return e===`Strong match`?`badge strong`:e===`Good match`?`badge good`:e===`Possible match`?`badge possible`:`badge weak`}function X(){let e=document.getElementById(`app`),t=Or(N.route),n=``;if(n=N.isBooting||!N.authLoaded||!N.profileLoaded||!N.adminLoaded?ac():t===`/`?Ol():t===`/login`?Sc():t===`/signup`?Ac():t===`/forgot-password`?Cc():t===`/reset-password`?wc():t===`/accept-invite`?Tc():t===`/onboarding`?kl():t===`/dashboard`?N.user?Rl():Wa():t===`/report`?N.user?qu():Wa():t===`/pricing`?Zd():t===`/trial`?Qd():t===`/privacy`?uc():t===`/terms`?dc():t===`/data-sources`?fc():t===`/cookies`?pc():t===`/security`?mc():t===`/contact`?hc():t===`/settings`?N.user?$d():Wa():t===`/admin`?N.user?N.isAdmin?iu():Ga():Wa():Ol(),e.innerHTML=n,N.selectedOpportunityId){let t=Ts(N.selectedOpportunityId);t?(document.body.classList.add(`modal-open`),e.insertAdjacentHTML(`beforeend`,ru(t))):Us()}else Us()}function tc(e){if(!e||!document.body.contains(e)){X();return}let t=window.scrollX,n=window.scrollY,r=rc(e),i=typeof e.selectionStart==`number`?e.selectionStart:null,a=typeof e.selectionEnd==`number`?e.selectionEnd:null;X(),requestAnimationFrame(()=>{if(window.scrollTo(t,n),!r)return;let e=document.querySelector(r);e&&(e.focus({preventScroll:!0}),i!==null&&a!==null&&typeof e.setSelectionRange==`function`&&[`text`,`search`,`email`,`url`,`tel`,`password`,``].includes(e.type||``)&&e.setSelectionRange(i,a))})}function nc(){requestAnimationFrame(()=>{document.querySelector(`.admin-tabs button.is-active`)?.scrollIntoView?.({block:`nearest`,inline:`nearest`})})}function rc(e){return e?.dataset?e.dataset.adminFilter?`[data-admin-filter="${ic(e.dataset.adminFilter)}"]`:e.dataset.adminCompanyFilter?`[data-admin-company-filter="${ic(e.dataset.adminCompanyFilter)}"]`:``:``}function ic(e){return window.CSS?.escape?window.CSS.escape(String(e)):String(e).replace(/["\\]/g,`\\$&`)}function ac(){return Z(`
    <div class="app-loader">
      <div class="loader-mark" aria-label="${j(M(`loadingLabel`))}">
        <span></span>
      </div>
    </div>
  `)}function Z(e){let t=!!N.user,n=!!N.profile,r=oc(t,n),i=vc(t,n);return`
    <header class="site-header ${N.isMobileMenuOpen?`is-menu-open`:``} ${N.isMobileMenuClosing?`is-menu-closing`:``}">
      <div class="header-top">
        <button class="brand" data-action="go" data-href="/">
          <img class="brand-logo" src="/logo.png" alt="VerkRadar" />
        </button>
        <div class="mobile-header-actions">
          <button class="language-toggle mobile-header-language-toggle" type="button" data-action="toggle-language" aria-label="Switch language">
            <span class="${N.language===`is`?`active`:``}">IS</span>
            <span class="${N.language===`en`?`active`:``}">EN</span>
          </button>
          <button
            class="menu-toggle"
            type="button"
            data-action="toggle-mobile-menu"
            aria-label="${N.isMobileMenuOpen?M(`closeMenu`):M(`openMenu`)}"
            aria-expanded="${N.isMobileMenuOpen?`true`:`false`}"
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
          ${r.map(([e,t])=>t.startsWith(`#`)?`<button data-action="scroll-to" data-target="${t.slice(1)}">${e}</button>`:`<button data-action="go" data-href="${t}" ${N.route===t?`class="active"`:``}>${e}</button>`).join(``)}
        </nav>
        <div class="header-actions">
          <button class="language-toggle" type="button" data-action="toggle-language" aria-label="Switch language">
            <span class="${N.language===`is`?`active`:``}">IS</span>
            <span class="${N.language===`en`?`active`:``}">EN</span>
          </button>
          ${t?``:`<button class="btn btn-secondary header-login-btn btn-login" data-action="go" data-href="/login">${M(`login`)}</button>`}
          ${i?`<button class="btn btn-primary" data-action="go" data-href="${i.href}">${i.label}</button>`:``}
          ${t&&!N.isMobileMenuOpen?yc():``}
        </div>
      </div>
      ${gc(r,i,t)}
    </header>
    <main>${e}</main>
    ${sc()}
    ${N.toast?`
      <div class="toast toast-${N.toast.type}">
        <span class="toast-dot"></span>
        <span>${j(N.toast.message)}</span>
      </div>
    `:``}
  `}function oc(e=!!N.user,t=!!N.profile){let n=e?t?[[M(`navDashboard`),`/dashboard`],[M(`navReport`),`/report`],[M(`navSettings`),`/settings`]]:[[M(`setupCompany`),`/onboarding`],[M(`navSettings`),`/settings`]]:[[M(`navHowItWorks`),`#how-it-works`],[M(`navSampleReport`),`#sample-report`],[M(`navPricing`),`/pricing`]];return e&&N.isAdmin&&n.push([`Admin`,`/admin`]),n}function sc(){let e=[[M(`privacyPolicy`),`/privacy`],[M(`termsOfService`),`/terms`],[M(`dataSources`),`/data-sources`],[M(`security`),`/security`],[M(`contact`),`/contact`]];return`
    <footer class="site-footer">
      <div>
        <strong>VerkRadar</strong>
        <p>${j(M(`footerText`))}</p>
      </div>
      <nav aria-label="Legal and trust pages">
        ${e.map(([e,t])=>`<button type="button" data-action="go" data-href="${t}">${e}</button>`).join(``)}
      </nav>
    </footer>
  `}function cc(e){return p(e,N.language)}function lc(e){let t=cc(e);return Z(Yt({language:N.language,escapeHtml:j,eyebrow:t.eyebrow,title:t.title,intro:t.intro,sections:t.sections}))}function uc(){return lc(`privacy`)}function dc(){return lc(`terms`)}function fc(){return lc(`data`)}function pc(){return uc()}function mc(){return lc(`security`)}function hc(){return lc(`contact`)}function gc(e,t,n){return`
    <nav class="mobile-menu-panel" id="mobile-menu" data-action="close-mobile-menu">
      <div class="mobile-menu-scroll">
      <div class="mobile-menu-links">
        ${e.map(([e,t])=>t.startsWith(`#`)?`<button type="button" data-action="mobile-scroll-to" data-target="${t.slice(1)}">${e}</button>`:`<button type="button" data-action="mobile-nav" data-href="${t}">${e}</button>`).join(``)}
      </div>
      ${_c(t,n)}
      </div>
    </nav>
  `}function _c(e,t){if(!t)return`
      <div class="mobile-account-section">
        ${e?`<button class="btn btn-primary mobile-cta" type="button" data-action="mobile-nav" data-href="${e.href}">${e.label}</button>`:``}
        <button class="btn btn-secondary" type="button" data-action="mobile-nav" data-href="/login">${M(`login`)}</button>
      </div>
    `;let n=N.profile?.companyName||M(`noCompanyProfile`),r=N.user?.email||``;return`
    <div class="mobile-account-section">
      <div class="mobile-account-header">
        <span class="profile-avatar">${j(bc(n,r))}</span>
        <div>
          <strong>${j(n)}</strong>
          <small>${j(r)}</small>
        </div>
      </div>
      <div class="mobile-account-actions">
        ${N.profile?`<button type="button" data-action="mobile-nav" data-href="/dashboard">${M(`navDashboard`)}</button>
             <button type="button" data-action="mobile-nav" data-href="/settings">${M(`navSettings`)}</button>`:`<button type="button" data-action="mobile-nav" data-href="/onboarding">${M(`setupCompany`)}</button>
             <button type="button" data-action="mobile-nav" data-href="/settings">${M(`navSettings`)}</button>`}
        <button type="button" class="mobile-logout" data-action="logout">${M(`logout`)}</button>
      </div>
    </div>
  `}function vc(e,t){return e?t?null:{href:`/onboarding`,label:M(`createProfile`)}:{href:`/trial`,label:M(`getStarted`)}}function yc(){let e=N.profile?.companyName||M(`noCompanyProfile`),t=N.user?.email||``,n=bc(e,t);return`
    <div class="profile-menu">
      <button type="button" class="profile-pill" data-action="toggle-profile-menu" aria-haspopup="menu" aria-expanded="${N.profileMenuOpen?`true`:`false`}">
        <span class="profile-avatar">${j(n)}</span>
        <span class="profile-name">${j(e)}</span>
        <span class="profile-chevron" aria-hidden="true"></span>
      </button>

      ${N.profileMenuOpen&&!N.isMobileMenuOpen&&!ni()?`
        <div class="profile-dropdown" role="menu">
          <div class="profile-dropdown-header">
            <strong>${j(e)}</strong>
            <small>${j(t)}</small>
          </div>
          <div class="profile-dropdown-divider"></div>
          ${N.profile?`
            <button type="button" data-action="go" data-href="/dashboard" role="menuitem">${M(`navDashboard`)}</button>
            <button type="button" data-action="go" data-href="/settings" role="menuitem">${M(`navSettings`)}</button>
            ${N.isAdmin?`<button type="button" data-action="go" data-href="/admin" role="menuitem">Admin</button>`:``}
          `:`
            <button type="button" data-action="go" data-href="/onboarding" role="menuitem">${M(`createProfile`)}</button>
            ${N.isAdmin?`<button type="button" data-action="go" data-href="/admin" role="menuitem">Admin</button>`:``}
          `}
          <div class="profile-dropdown-divider"></div>
          <button type="button" class="danger" data-action="logout" role="menuitem">${M(`logout`)}</button>
        </div>
      `:``}
    </div>
  `}function bc(e,t){return(e&&![`No company profile`,M(`noCompanyProfile`)].includes(e)?e:t||`VR`).split(/[^a-zA-Z0-9áéíóúýþæöðÁÉÍÓÚÝÞÆÖÐ]+/).filter(Boolean).slice(0,2).map(e=>e[0]).join(``).toUpperCase()||`VR`}function xc(e,t){return Z(`
    <section class="empty-state">
      <h1>${j(e)}</h1>
      <p>${j(t)}</p>
      <button class="btn btn-primary" data-action="go" data-href="/onboarding">${j(M(`createProfile`))}</button>
      <button class="btn btn-secondary" data-action="load-demo">${j(M(`loadDemoCompany`))}</button>
    </section>
  `)}function Sc(){return N.user?xc(N.language===`is`?`Þú ert þegar skráð(ur) inn`:`Already logged in`,N.language===`is`?`Opnaðu mælaborðið eða breyttu fyrirtækjaprófílnum.`:`Open your dashboard or edit your company profile.`):Z(At({t:M,escapeHtml:j,authForm:N.authForm,authSubmitting:N.authSubmitting,authMessage:N.authMessage,signupHref:N.pendingInviteToken?Ur(`/signup`):`/trial`,signupLabel:N.pendingInviteToken?M(`createAccount`):M(`createFreeDemoProfile`),forgotPasswordHref:Ur(`/forgot-password`)}))}function Cc(){return N.user?xc(N.language===`is`?`Þú ert þegar skráð(ur) inn`:`Already logged in`,N.language===`is`?`Opnaðu mælaborðið eða breyttu fyrirtækjaprófílnum.`:`Open your dashboard or edit your company profile.`):Z(jt({t:M,escapeHtml:j,authForm:N.authForm,authSubmitting:N.authSubmitting,authMessage:N.authMessage}))}function wc(){return Z(Mt({t:M,escapeHtml:j,authForm:N.authForm,authSubmitting:N.authSubmitting,authMessage:N.authMessage}))}function Tc(){let e=x(N.route),t=e||(N.invitePreviewErrorToken===e?``:N.pendingInviteToken);return t&&t!==N.pendingInviteToken&&N.invitePreviewErrorToken!==t&&(N.pendingInviteToken=pe(t)),Z(Et({escapeHtml:j,invite:N.invitePreview,loading:N.invitePreviewLoading,error:N.invitePreviewError,debugInfo:N.invitePreviewDebug,showDebug:ae(),user:N.user,accepting:N.inviteAccepting,signupHref:Ur(`/signup`),loginHref:Ur(`/login`),language:N.language}))}async function Ec(){let e=x(N.route)||N.pendingInviteToken||w();if(!(!e||N.invitePreviewLoading)&&!(N.invitePreview?.token===e||N.invitePreviewErrorToken===e)){N.pendingInviteToken=pe(e),N.invitePreviewLoading=!0,N.invitePreviewError=null,await P({preview_request_sent:!0}),X();try{let t=await ge(e);if(await P({...t.__debug||{},...t.diagnostics||{}}),t.status&&t.status!==`valid`){let e=Error(`Invite is not valid.`);throw e.details=t,e}N.invitePreview={...t,token:e},N.authForm.email=t.invited_email||t.email||N.authForm.email}catch(t){console.error(`Failed to preview company invite:`,t),t?.details?.diagnostics&&console.warn(`Invite preview diagnostics:`,t.details.diagnostics);let n={...t?.details?.__debug||{},...t?.details?.diagnostics||{}};N.invitePreview=null,await P(n);let r=n.invalid_reason||t?.details?.status||t?.details?.code;Br(r)&&(me(),N.pendingInviteToken=``),N.invitePreviewErrorToken=e,N.invitePreviewError=Oc(r)}finally{N.invitePreviewLoading=!1,X()}}}async function Dc(){let e=x(N.route),t=w(),n=e||N.pendingInviteToken||t,r=fe(N.route);if(n){if(!N.user){F(Ur(`/login`));return}N.inviteAccepting=!0,N.invitePreviewError=null,await P({accept_request_sent:!0,token_source:r}),X();try{let e=await _e(n);await P({...e.__debug||{},...e.diagnostics||{},token_source:r}),me(),N.pendingInviteToken=``,N.invitePreview=null,N.invitePreviewError=null,await P({membership_refresh_attempted:!0}),await Xa({overwriteDraft:!0}),await P({membership_refresh_succeeded:!!N.companyId,final_route:`/dashboard`}),F(`/dashboard`)}catch(e){console.error(`Failed to accept company invite:`,e);let t=e?.details?.invited_email||N.invitePreview?.invited_email||N.invitePreview?.email||``;await P({...e?.details?.__debug||{},...e?.details?.diagnostics||{},token_source:r,user_email:N.user?.email||``,invited_email:t,accept_error_reason:e?.details?.code||e?.details?.diagnostics?.accept_error_reason||errorMessage(e)}),console.warn(`Invite accept diagnostics:`,N.invitePreviewDebug),N.invitePreviewError=kc(e,t)}finally{N.inviteAccepting=!1,X()}}}function Oc(e){let t=String(e||``).toLowerCase();return t===`expired`?N.language===`is`?`Aðgangsboðið er útrunnið.`:`This invite has expired.`:t===`revoked`?N.language===`is`?`Aðgangsboðið hefur verið afturkallað.`:`This invite has been revoked.`:t===`already_accepted`?N.language===`is`?`Aðgangsboðið hefur þegar verið samþykkt. Skráðu þig inn með rétta netfanginu.`:`This invite has already been accepted. Log in with the correct email address.`:t===`no_hash_match`||t===`invite_invalid`?N.language===`is`?`Aðgangsboðið fannst ekki.`:`The invite was not found.`:t===`query_error`?N.language===`is`?`Villa kom upp við að staðfesta aðgangsboðið. Reyndu aftur eða hafðu samband.`:`There was a problem validating the invite. Try again or contact support.`:N.language===`is`?`Aðgangsboðið fannst ekki, er útrunnið eða hefur verið afturkallað.`:`The invite was not found, has expired, or has been revoked.`}function kc(e,t=``){let n=String(e?.details?.code||``).toLowerCase(),r=String(e?.details?.diagnostics?.invalid_reason||e?.details?.diagnostics?.accept_error_reason||``).toLowerCase(),i=n||r;return i===`no_session`?N.language===`is`?`Bíð eftir innskráningu til að virkja aðganginn. Ef þú varst að staðfesta netfangið skaltu skrá þig inn og opna boðið aftur.`:`Waiting for login to activate the invite. If you just confirmed your email, log in and open the invite again.`:(i===`email_mismatch`||n===`email_mismatch`)&&t?N.language===`is`?`Þetta boð var sent á ${t}. Skráðu þig inn með því netfangi.`:`This invite was sent to ${t}. Log in with that email address.`:r===`expired`?N.language===`is`?`Aðgangsboðið er útrunnið.`:`This invite has expired.`:r===`revoked`?N.language===`is`?`Aðgangsboðið hefur verið afturkallað.`:`This invite has been revoked.`:n===`invite_already_accepted`||r===`already_accepted`?N.language===`is`?`Aðgangsboðið hefur þegar verið samþykkt.`:`This invite has already been accepted.`:U(e)}function Ac(){if(N.user){let e=ii();return setTimeout(()=>F(e),0),Z(`
      <section class="empty-state">
        <h1>${j(M(`alreadyLoggedInTitle`))}</h1>
        <p>${j(M(`alreadyLoggedInText`))}</p>
      </section>
    `)}return N.pendingInviteToken||x(N.route)?Z(Nt({t:M,escapeHtml:j,authForm:N.authForm,authSubmitting:N.authSubmitting,authMessage:N.authMessage,loginHref:Ur(`/login`),inviteEmail:N.invitePreview?.invited_email||N.invitePreview?.email||``,isInviteSignup:!!(N.pendingInviteToken&&(N.invitePreview?.invited_email||N.invitePreview?.email))})):Z(Pt({t:M,escapeHtml:j,trialHref:`/trial`}))}function jc(){if(!N.importLoading&&!N.importStatus)return``;if(N.importLoading)return`<section class="import-panel"><strong>Importing TED notices...</strong><p>Fetching recent TED notices and refreshing matches.</p></section>`;let e=N.importStatus||{},t=Array.isArray(e.errors)?e.errors:[],n=N.importedTedOpportunities||[];return`
    <section class="import-panel">
      ${N.importStatus?`
        <div class="import-stats">
          <span><strong>${Number(e.fetched||0)}</strong> fetched</span>
          <span><strong>${Number(e.inserted||0)}</strong> inserted</span>
          <span><strong>${Number(e.updated||0)}</strong> updated</span>
          <span><strong>${Number(e.skipped||0)}</strong> skipped</span>
          <span><strong>${Number(e.matched||0)}</strong> matches</span>
          <span><strong>${Number(e.reports_generated||0)}</strong> reports</span>
        </div>
        ${t.length?`<ul class="risk-list">${t.map(e=>`<li>${j(e)}</li>`).join(``)}</ul>`:`<p>TED import completed.</p>`}
        ${t.length?``:`
          <div class="import-result-head">
            <h3>Newest imported TED opportunities</h3>
            <button class="btn btn-secondary" type="button" data-action="go" data-href="/dashboard">View imported opportunities on dashboard</button>
          </div>
          ${n.length?`
            <div class="imported-opportunities">
              ${n.map(Nc).join(``)}
            </div>
          `:`<div class="empty-card">No imported TED opportunities were returned by the latest-results query.</div>`}
        `}
      `:``}
    </section>
  `}function Mc(){if(!N.connectorImportLoading&&!N.connectorTestingSourceId&&!N.connectorImportStatus)return``;if(N.connectorImportLoading||N.connectorTestingSourceId)return`<section class="import-panel"><strong>Running automatic source imports...</strong><p>Fetching enabled source connectors in a limited batch. Refresh matches separately after imports finish.</p></section>`;let e=N.connectorImportStatus||{},t=Array.isArray(e.errors)?e.errors:[],n=Array.isArray(e.failedSources)?e.failedSources:[],r=Array.isArray(e.timedOutSources)?e.timedOutSources:[],i=t.length||n.length||r.length,a=Number.isFinite(Number(e.sources_processed))?`<p>${Number(e.sources_processed||0)} source${Number(e.sources_processed||0)===1?``:`s`} processed${Number(e.sources_remaining||0)?` · ${Number(e.sources_remaining||0)} remaining for next run`:``}.</p>`:``;return`
    <section class="import-panel">
      <div class="import-stats">
        <span><strong>${Number(e.fetched||0)}</strong> fetched</span>
        <span><strong>${Number(e.inserted||0)}</strong> inserted</span>
        <span><strong>${Number(e.updated||0)}</strong> updated</span>
        <span><strong>${Number(e.skipped||0)}</strong> skipped</span>
        <span><strong>${Number(e.matched||0)}</strong> matches</span>
        <span><strong>${Number(e.reports_generated||0)}</strong> reports</span>
      </div>
      ${e.message?`<p>${j(e.message)}</p>`:a}
      ${e.matching_skipped?`<p>Matching was skipped for this batch to stay within Edge Function CPU limits. Refresh company matches from Admin after imports finish.</p>`:``}
      ${e.reports_skipped?`<p>Report generation was skipped for this batch.</p>`:``}
      ${n.length?`
        <div class="import-failure-list">
          <h3>${n.length} source${n.length===1?``:`s`} failed</h3>
          ${n.map(e=>`
            <div class="import-failure-row">
              <strong>${j(e.source||`Unknown source`)}</strong>
              <p>${j(e.message||e.error||`Unknown source import error`)}</p>
              ${e.endpoint_url?`<small>${j(e.endpoint_url)}</small>`:``}
            </div>
          `).join(``)}
        </div>
      `:``}
      ${r.length?`
        <div class="import-failure-list">
          <h3>${r.length} source${r.length===1?``:`s`} timed out or were skipped</h3>
          ${r.map(e=>`
            <div class="import-failure-row">
              <strong>${j(e.source||`Unknown source`)}</strong>
              <p>${j(e.message||e.reason||`Skipped because the source import was close to the runtime limit`)}</p>
              ${e.endpoint_url?`<small>${j(e.endpoint_url)}</small>`:``}
            </div>
          `).join(``)}
        </div>
      `:``}
      ${t.length?`<ul class="risk-list">${t.map(e=>`<li>${j(e)}</li>`).join(``)}</ul>`:``}
      ${i?`<p>Automatic source import completed with source-level failures. Successful sources were still imported.</p>`:`<p>Automatic source import completed.</p>`}
    </section>
  `}function Nc(e){let t=e.url&&e.url!==`#`,n=N.adminUpdatingId===e.id,r=N.adminDeletingId===e.id;return`
    <div class="imported-opportunity-row">
      <div class="imported-opportunity-main">
        <h4>${j(e.title)}</h4>
        <span class="source-pill language-pill">Original language</span>
        <p>${j(Ld(e))}</p>
      </div>
      <dl>
        <div>
          <dt>Country / location</dt>
          <dd>${j([e.countryCode,e.location].filter(Boolean).join(` / `)||`Unknown`)}</dd>
        </div>
        <div>
          <dt>Deadline</dt>
          <dd>${j(nr(e.deadline))}</dd>
        </div>
        <div>
          <dt>URL</dt>
          <dd>${t?`<a href="${j(e.url)}" target="_blank" rel="noreferrer">Open TED</a>`:`No URL`}</dd>
        </div>
        <div>
          <dt>Status</dt>
          <dd>${j(e.status||`Unknown`)}</dd>
        </div>
        <div>
          <dt>Imported source</dt>
          <dd>${j(e.source||`Unknown`)}</dd>
        </div>
        <div>
          <dt>External ID</dt>
          <dd>${j(e.externalId||`Unknown`)}</dd>
        </div>
      </dl>
      <div class="imported-opportunity-actions">
        <button class="btn btn-secondary" type="button" data-action="hide-imported-opportunity" data-id="${j(e.id)}" ${n||e.status===`hidden`?`disabled`:``}>
          ${n?`Updating...`:`Hide`}
        </button>
        <button class="btn btn-secondary" type="button" data-action="mark-imported-relevant" data-id="${j(e.id)}" ${n||e.status===`open`?`disabled`:``}>
          ${n?`Updating...`:`Mark relevant`}
        </button>
        <button class="btn btn-ghost" type="button" data-action="delete-opportunity" data-id="${j(e.id)}" ${r?`disabled`:``}>
          ${r?`Deleting...`:`Delete`}
        </button>
      </div>
    </div>
  `}function Pc(){return(N.importRuns||[])[0]||null}function Fc(e){let t=String(e||``).toLowerCase();return[`success`,`completed`,`complete`,`connected`].includes(t)?`is-success`:[`running`,`started`,`pending`,`planned`].includes(t)?`is-running`:[`error`,`failed`,`failure`].includes(t)?`is-error`:``}function Ic(){let e=Pc();return N.importRunsLoading&&!e?`
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
        <span class="status-pill ${Fc(e.status)}">${j(e.status||`unknown`)}</span>
      </div>
      <div class="ops-metrics">
        <div><span>Type</span><strong>${j(e.run_type||`ted-import`)}</strong></div>
        <div><span>Mode</span><strong>${j(e.import_mode||`unknown`)}</strong></div>
        <div><span>Fetched</span><strong>${Number(e.fetched||0)}</strong></div>
        <div><span>Inserted</span><strong>${Number(e.inserted||0)}</strong></div>
        <div><span>Updated</span><strong>${Number(e.updated||0)}</strong></div>
        <div><span>Skipped</span><strong>${Number(e.skipped||0)}</strong></div>
        <div><span>Matched</span><strong>${Number(e.matched||0)}</strong></div>
        <div><span>Reports</span><strong>${Number(e.reports_generated||0)}</strong></div>
        <div><span>Started</span><strong>${j(D(e.started_at))}</strong></div>
        <div><span>Finished</span><strong>${j(D(e.finished_at))}</strong></div>
      </div>
      ${e.error?`<div class="admin-message is-error">${j(e.error)}</div>`:``}
      ${Hc(e)}
    </section>
  `:`
      <section class="ops-card automation-status-card">
        <div class="card-header">
          <div>
            <h2>Automation status</h2>
            <p>No automation runs yet.</p>
          </div>
        </div>
        ${N.importRunsError?`<div class="admin-message is-error">${j(N.importRunsError)}</div>`:``}
      </section>
    `}function Lc(){let e=window.VERKRADAR_SUPABASE_URL||`https://asojxjbsgqbfpbepojzh.supabase.co`,t=String(e).match(/^https:\/\/([^.]+)\.supabase\.co/i);return t?`https://supabase.com/dashboard/project/${t[1]}/functions/import-ted/logs`:``}function Rc(){let e=Lc();return`
    <section class="ops-card">
      <div class="card-header">
        <div>
          <h2>Automation actions</h2>
          <p>Run the pipeline manually or refresh the operations view.</p>
        </div>
      </div>
      <div class="automation-actions">
        <button class="btn btn-primary" type="button" data-action="import-ted" ${N.importLoading?`disabled`:``}>
          ${N.importLoading?`Running TED import...`:`Run TED import now`}
        </button>
        <button class="btn btn-secondary" type="button" data-action="import-source-connectors" ${N.connectorImportLoading?`disabled`:``}>
          ${N.connectorImportLoading?`Running source imports...`:`Run automatic source imports now`}
        </button>
        <button class="btn btn-secondary" type="button" data-action="refresh-admin-status" ${N.importRunsLoading||N.adminReportsLoading?`disabled`:``}>
          ${N.importRunsLoading||N.adminReportsLoading?`Refreshing...`:`Refresh status`}
        </button>
        ${e?`<a class="btn btn-secondary" href="${j(e)}" target="_blank" rel="noreferrer">View Edge Function logs</a>`:``}
      </div>
      <label class="import-mode-control">
        Import mode
        <select data-import-mode ${N.importLoading?`disabled`:``}>
          <option value="nordic" ${N.tedImportMode===`nordic`?`selected`:``}>Nordic only</option>
          <option value="iceland" ${N.tedImportMode===`iceland`?`selected`:``}>Iceland only</option>
          <option value="eu-broad" ${N.tedImportMode===`eu-broad`?`selected`:``}>EU broad test</option>
        </select>
      </label>
      ${jc()}
      ${Mc()}
    </section>
  `}function zc(){let e=N.importRuns||[];return`
    <section class="ops-card">
      <div class="card-header">
        <div>
          <h2>Latest import runs</h2>
          <p>Last ${e.length||0} recorded automation runs.</p>
        </div>
      </div>
      ${N.importRunsError?`<div class="admin-message is-error">${j(N.importRunsError)}</div>`:``}
      ${N.importRunsLoading&&!e.length?`<div class="empty-card">Loading import runs...</div>`:e.length?`
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
              ${e.map(Bc).join(``)}
            </tbody>
          </table>
        </div>
      `:`<div class="empty-card">No automation runs yet.</div>`}
    </section>
  `}function Bc(e){let t=Hc(e,{compact:!0});return`
    <tr>
      <td>${j(D(e.started_at||e.finished_at))}</td>
      <td>${j(e.run_type||`ted-import`)}</td>
      <td><span class="status-pill ${Fc(e.status)}">${j(e.status||`unknown`)}</span></td>
      <td>${Number(e.fetched||0)}</td>
      <td>${Number(e.inserted||0)}</td>
      <td>${Number(e.updated||0)}</td>
      <td>${Number(e.skipped||0)}</td>
      <td>${Number(e.matched||0)}</td>
      <td>${Number(e.reports_generated||0)}</td>
      <td>${e.error?j(e.error):``}</td>
    </tr>
    ${t?`
      <tr class="import-run-debug-row">
        <td colspan="10">${t}</td>
      </tr>
    `:``}
  `}function Vc(e){let t=e?.details;if(!t)return{};if(typeof t==`string`)try{return JSON.parse(t)||{}}catch{return{}}return typeof t==`object`?t:{}}function Hc(e,t={}){let n=Vc(e),r=n.skip_reasons&&typeof n.skip_reasons==`object`?n.skip_reasons:{},i=Array.isArray(n.skipped_samples)?n.skipped_samples:[],a=Array.isArray(n.per_source)?n.per_source:[],o=Object.entries(r).filter(([,e])=>Number(e)>0).sort((e,t)=>Number(t[1])-Number(e[1])).slice(0,5);return!o.length&&!i.length&&!a.length?``:`
    <div class="import-debug ${t.compact?`is-compact`:``}">
      <div class="import-debug-header">
        <strong>Skip diagnostics</strong>
        <span>${Number(e.skipped||0)} skipped · ${Number(n.connectors_checked||a.length||0)} connector${Number(n.connectors_checked||a.length||0)===1?``:`s`}</span>
      </div>
      ${a.length?`
        <div class="import-per-source">
          ${a.slice(0,8).map(e=>`
            <div>
              <strong>${j(e.source_name||`Unknown source`)}</strong>
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
            <span><strong>${Number(t)}</strong> ${j(Uc(e))}</span>
          `).join(``)}
        </div>
      `:``}
      ${i.length?`
        <div class="import-skip-samples">
          ${i.slice(0,10).map(e=>`
            <div>
              <strong>${j(e.source_name||e.source||`Unknown source`)}</strong>
              <span>${j(e.title||`Untitled item`)}</span>
              <em>${j(Uc(e.reason||`skipped`))}${e.matchedKeyword?`: ${j(e.matchedKeyword)}`:``}${e.final_quality_status?` · ${j(Kl(e.final_quality_status))}`:``}</em>
            </div>
          `).join(``)}
        </div>
      `:``}
    </div>
  `}function Uc(e){return{missing_title:`missing title`,missing_url:`missing URL`,duplicate_existing_opportunity:`duplicate existing opportunity`,no_include_keyword_match:`no include keyword match`,matched_exclude_keyword:`matched exclude keyword`,low_quality_needs_review:`low quality needs review`,unsupported_connector:`unsupported connector`,parse_failed:`parse failed`,fetch_failed:`fetch failed`}[e]||String(e||`skipped`).replaceAll(`_`,` `)}function Wc(){let e=N.importedTedOpportunities||[];return`
    <section class="ops-card">
      <div class="card-header">
        <div>
          <h2>Latest TED opportunities</h2>
          <p>Newest imported EU TED rows for review.</p>
        </div>
      </div>
      ${N.importedTedOpportunitiesError?`<div class="admin-message is-error">${j(N.importedTedOpportunitiesError)}</div>`:``}
      ${N.importedTedOpportunitiesLoading&&!e.length?`<div class="empty-card">Loading TED opportunities...</div>`:e.length?`
        <div class="imported-opportunities">
          ${e.map(Nc).join(``)}
        </div>
      `:`<div class="empty-card">No TED opportunities loaded yet.</div>`}
    </section>
  `}function Gc(){let e=N.adminReports||[];return`
    <section class="ops-card">
      <div class="card-header">
        <div>
          <h2>Latest reports generated</h2>
          <p>Newest saved weekly report records.</p>
        </div>
      </div>
      ${N.adminReportsError?`<div class="admin-message is-error">${j(N.adminReportsError)}</div>`:``}
      ${N.adminReportsLoading&&!e.length?`<div class="empty-card">Loading reports...</div>`:e.length?`
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
              ${e.map($c).join(``)}
            </tbody>
          </table>
        </div>
      `:`<div class="empty-card">No generated reports yet.</div>`}
      ${N.selectedAdminReportId?el():``}
    </section>
  `}function Kc(e){return{eu_ted:`EU TED`,ted:`EU TED`,api:`EU TED`,utbodsvefur:`Útboðsvefur`,municipal_website:`Municipal websites`,public_institution_page:`Public institution pages`,private_manual:`Private/manual leads`,manual:`Private/manual leads`,tender_portal:`Tender portals`}[e]||e||`Unknown`}function qc(e){return{ted_api:`TED API`,rss_feed:`RSS feed`,wordpress_rest:`WordPress REST`,official_api:`Official API`,page_monitor_allowed:`Allowed page monitor`,manual_fallback:`Manual fallback`,planned:`Planned`,permission_required:`Permission required`}[e]||e||`Planned`}function Jc(e=[]){return e.reduce((e,t)=>{let n=t.raw_payload&&typeof t.raw_payload==`object`?t.raw_payload:{},r=R(n.quality_status||n.qualityStatus,t);return e.active+=1,r===`confirmed_tender`?e.confirmed+=1:r===`early_signal`?e.early+=1:e.needsReview+=1,e},{active:0,confirmed:0,early:0,needsReview:0})}function Yc(e){let t=e.source_status||{},n=e.source_connectors||{},r=String(n.status||t.status||``).toLowerCase(),i=String(n.connector_type||``).toLowerCase();return r.includes(`error`)?{label:`Error`,className:`is-error`,tone:`error`}:r===`permission_required`||i===`permission_required`?{label:`Permission required`,className:`is-permission`,tone:`planned`}:n.enabled&&[`connected`,`success`,`completed`,`complete`].includes(r)||n.enabled&&[`rss_feed`,`wordpress_rest`,`ted_api`].includes(i)?{label:`Connected`,className:`is-success`,tone:`connected`}:r===`planned`||i===`planned`?{label:`Planned`,className:`is-planned`,tone:`planned`}:{label:`Disabled`,className:`is-disabled`,tone:`disabled`}}function Xc(){let e=N.sourceCoverage||[];return`
    <section class="ops-card">
      <div class="card-header">
        <div>
          <h2>Source coverage</h2>
          <p>Connected and planned lead sources for Icelandic opportunity coverage.</p>
        </div>
      </div>
      ${N.sourceCoverageError?`<div class="admin-message is-error">${j(N.sourceCoverageError)}</div>`:``}
      ${N.sourceCoverageLoading&&!e.length?`<div class="empty-card">Loading source coverage...</div>`:e.length?`
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
              ${e.map(Zc).join(``)}
            </tbody>
          </table>
        </div>
      `:`<div class="empty-card">No sources configured yet.</div>`}
    </section>
  `}function Zc(e){let t=e.source_status||{},n=e.source_connectors||{},r=Yc(e),i=n.enabled&&[`rss_feed`,`wordpress_rest`].includes(n.connector_type),a=N.connectorTestingSourceId===e.id,o=e.opportunityStats||{active:Number(t.active_opportunities_count||0),confirmed:0,early:0,needsReview:0},s=e.latestOpportunities||[],c=N.expandedSourceId===e.id,l=n.last_error||t.last_error||``;return`
    <tr class="${r.tone===`connected`?`source-row-connected`:`source-row-muted`}">
      <td>
        <strong>${j(e.name||`Unknown source`)}</strong>
        ${n.endpoint_url||e.base_url?`<br><a href="${j(n.endpoint_url||e.base_url)}" target="_blank" rel="noreferrer">${j(n.endpoint_url||e.base_url)}</a>`:``}
      </td>
      <td>${j(Kc(e.source_type))}</td>
      <td>
        <strong>${j(qc(n.connector_type))}</strong>
        ${n.require_any_keyword===!1?`<br><span>Keyword match optional</span>`:`<br><span>Requires keyword match</span>`}
        ${Array.isArray(n.include_keywords)&&n.include_keywords.length?`<br><span>Includes: ${j(n.include_keywords.slice(0,5).join(`, `))}${n.include_keywords.length>5?`...`:``}</span>`:``}
        ${Array.isArray(n.exclude_keywords)&&n.exclude_keywords.length?`<br><span>Excludes: ${j(n.exclude_keywords.slice(0,5).join(`, `))}${n.exclude_keywords.length>5?`...`:``}</span>`:``}
      </td>
      <td>
        <span class="status-pill ${n.enabled?`is-success`:`is-disabled`}">${n.enabled?`Enabled`:`Disabled`}</span>
      </td>
      <td><span class="status-pill ${r.className}">${j(r.label)}</span></td>
      <td>${j(D(n.last_success_at||t.last_success_at))}</td>
      <td>${l?j(l):`<span class="muted-text">None</span>`}</td>
      <td>${Number(o.active||0)}</td>
      <td>${Number(o.confirmed||0)}</td>
      <td>${Number(o.early||0)}</td>
      <td>${Number(o.needsReview||0)}</td>
      <td>
        <button class="btn btn-secondary btn-small" type="button" data-action="test-source-connector" data-id="${j(e.id)}" ${!i||a||N.connectorImportLoading?`disabled`:``}>
          ${a?`Testing...`:`Test source`}
        </button>
        <button class="btn btn-ghost btn-small" type="button" data-action="toggle-source-items" data-id="${j(e.id)}" ${s.length?``:`disabled`}>
          ${c?`Hide items`:`View latest items`}
        </button>
      </td>
    </tr>
    ${c?Qc(e):``}
  `}function Qc(e){let t=e.latestOpportunities||[];return`
    <tr class="source-items-row">
      <td colspan="12">
        <div class="source-items-panel">
          <div class="source-items-header">
            <strong>Latest active items</strong>
            <span>${t.length} shown</span>
          </div>
          ${t.length?`
            <div class="source-items-list">
              ${t.map(t=>{let n=t.raw_payload&&typeof t.raw_payload==`object`?t.raw_payload:{},r=R(n.quality_status||n.qualityStatus,t);return`
                  <div class="source-item">
                    <div>
                      <strong>${j(t.title||`Untitled opportunity`)}</strong>
                      <span>${j(Id(`buyer`,mr(t.buyer,e.name)))} · ${j(Ks(t.deadline))}</span>
                    </div>
                    <span class="quality-badge ${j(r)}">${j(Kl(r))}</span>
                    ${t.url?`<a class="btn btn-ghost btn-small" href="${j(t.url)}" target="_blank" rel="noreferrer">Open</a>`:``}
                  </div>
                `}).join(``)}
            </div>
          `:`<div class="empty-card">No active items for this source.</div>`}
        </div>
      </td>
    </tr>
  `}function $c(e){let t=e.companies?.company_name||`Unknown company`,n=Array.isArray(e.report_items)?e.report_items.length:0;return`
    <tr>
      <td>${j(td(e,t))}</td>
      <td>${j(t)}</td>
      <td>${j(D(e.created_at))}</td>
      <td>${j(`${nr(e.period_start)} - ${nr(e.period_end)}`)}</td>
      <td>${j(e.status||`draft`)}</td>
      <td>${n}</td>
      <td>
        <div class="admin-row-actions">
          <button class="btn btn-secondary btn-small" type="button" data-action="view-admin-report" data-id="${j(e.id)}">${j(N.language===`is`?`Skoða yfirlit`:`View report`)}</button>
          <button class="btn btn-ghost btn-small" type="button" data-action="copy-admin-report" data-id="${j(e.id)}">${j(T(`copyReportEmail`,N.language))}</button>
          <button class="btn btn-ghost btn-small" type="button" data-action="view-admin-report" data-id="${j(e.id)}">${j(N.language===`is`?`Opna fyrir PDF`:`Open for PDF`)}</button>
        </div>
      </td>
    </tr>
  `}function el(){let e=(N.adminReports||[]).find(e=>e.id===N.selectedAdminReportId),t=N.selectedAdminReport?.id===N.selectedAdminReportId?N.selectedAdminReport:e;if(!t&&!N.selectedAdminReportLoading&&!N.selectedAdminReportError)return``;if(!t)return`
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
            ${N.selectedAdminReportError?`<div class="admin-message is-error">${j(N.selectedAdminReportError)}</div>`:`<div class="empty-card">Loading saved report items...</div>`}
          </div>
        </div>
      </div>
    `;let n=t.companies?.company_name||`Unknown company`,r=Array.isArray(t.report_items)?t.report_items.length:0,i=td(t,n);return`
    <div class="modal-backdrop">
      <div class="modal admin-report-modal" role="dialog" aria-modal="true">
        <div class="modal-header">
          <div>
            <span class="status-pill is-success">${j(Yu(t.status))}</span>
            <h2>${j(i)}</h2>
            <p>${j(n)} · ${j(ld(t.period_start,t.period_end))} · ${j(D(t.created_at))}</p>
          </div>
          <button type="button" class="icon-btn modal-close-btn" data-action="close-admin-report" aria-label="Close report">×</button>
        </div>
        <div class="modal-body">
          <div class="admin-report-actions">
            <button class="btn btn-primary" type="button" data-action="download-admin-report-pdf" ${N.selectedAdminReportLoading?`disabled`:``}>${j(T(`downloadPdf`,N.language))}</button>
            <button class="btn btn-secondary" type="button" data-action="copy-admin-report" data-id="${j(t.id)}">${j(T(`copyReportEmail`,N.language))}</button>
            <button class="btn btn-secondary" type="button" data-action="mark-admin-report-sent" data-id="${j(t.id)}" ${N.adminReportDeliveryActions[t.id]===`sent`?`disabled`:``}>${j(N.adminReportDeliveryActions[t.id]===`sent`?T(`marking`,N.language):T(`markAsSent`,N.language))}</button>
            <button class="btn btn-ghost" type="button" data-action="close-admin-report">${j(T(`close`,N.language))}</button>
          </div>

          ${N.selectedAdminReportLoading?`<div class="empty-card">Loading saved report items...</div>`:``}
          ${N.selectedAdminReportError?`<div class="admin-message is-error">${j(N.selectedAdminReportError)}</div>`:``}
          ${N.selectedAdminReportLoading?``:tl(t,r,n)}

          ${!N.selectedAdminReportLoading&&r?Zu(t,{companyName:n},{id:`admin-report-preview`,closeButton:!1,includeTextArea:!1}):N.selectedAdminReportLoading?``:`
            <div class="empty-card">${j(N.language===`is`?`Engin virk tækifæri eru í þessu yfirliti.`:`No active eligible opportunities in this report.`)}</div>
          `}

          ${!N.selectedAdminReportLoading&&r?nl(t):``}
        </div>
      </div>
    </div>
  `}function tl(e,t,n){let r=e.status===`generated_all_current`?`all_current`:e.status===`generated_new_only`?`new_only`:e.status||`draft`;return`
    <div class="admin-report-meta-strip">
      <span><strong>${j(T(`company`,N.language))}:</strong> ${j(n||`Unknown company`)}</span>
      <span><strong>${j(T(`period`,N.language))}:</strong> ${j(ld(e.period_start,e.period_end))}</span>
      <span><strong>${j(T(`generatedAt`,N.language))}:</strong> ${j(D(e.created_at))}</span>
      <span><strong>${j(T(`mode`,N.language))}:</strong> ${j(T(r===`all_current`?`currentActive`:`newOpportunities`,N.language))}</span>
      <span><strong>${j(T(`items`,N.language))}:</strong> ${Number(t||0)}</span>
    </div>
  `}function nl(e){let t=(Array.isArray(e.report_items)?[...e.report_items]:[]).sort((e,t)=>Number(e.sort_order||0)-Number(t.sort_order||0));return`
    <section class="admin-report-items">
      <h3>${j(N.language===`is`?`Atriði í yfirliti`:`Report items`)}</h3>
      <div class="admin-report-item-list">
        ${t.map(e=>rl(e)).join(``)}
      </div>
    </section>
  `}function rl(e){let t=e.opportunities?Yi(e.opportunities):null;if(!t)return`<article class="admin-report-item"><p>${j(N.language===`is`?`Gögn um tækifæri eru ekki lengur aðgengileg.`:`Opportunity data is no longer available.`)}</p></article>`;let n=sr(t.url),r=Ys(t),i=Vn(Array.isArray(e.match_reasons)?e.match_reasons:[],N.language);return`
    <article class="admin-report-item">
      <div class="opportunity-badges">
        <span class="source-pill source-badge">${j(Bn({matchScore:Number(e.match_score||0)},N.language))}</span>
        <span class="${ec(ys(Number(e.match_score||0)))}">${j(`${Rn({matchScore:Number(e.match_score||0)},N.language)} ${Number(e.match_score||0)}`)}</span>
      </div>
      <h4>${j(t.title)}</h4>
      <p><strong>${j(N.language===`is`?`Staða`:`Status`)}:</strong> ${j(Bn({matchScore:Number(e.match_score||0)},N.language))}</p>
      <p>${j(Ln(N.language))}</p>
      <div class="admin-report-meta-grid">
        <span><strong>${j(M(`buyer`))}</strong>${j(Ld(t))}</span>
        <span><strong>${j(M(`source`))}</strong>${j(Id(`source`,t.source))}</span>
        <span><strong>${j(M(`area`))}</strong>${j(Rd(t))}</span>
        <span><strong>${j(M(`deadline`))}</strong>${j(r.label)}</span>
        <span><strong>${j(M(`estimatedValue`))}</strong>${j(t.estimatedValue?Xs(t.estimatedValue):M(`notListed`))}</span>
        <span><strong>${j(T(`sentStatus`,N.language))}</strong>${j(e.sent_at?`${T(`sentOn`,N.language)} ${D(e.sent_at)}`:T(`notSent`,N.language))}</span>
      </div>
      ${i.length?`<div><strong>${j(T(`reasons`,N.language))}</strong><ul>${i.map(e=>`<li>${j(e)}</li>`).join(``)}</ul></div>`:``}
      <p>${j(t.description||``)}</p>
      ${n?`<a class="btn btn-secondary btn-small" href="${j(n)}" target="_blank" rel="noreferrer">${j(T(`openSource`,N.language))}</a>`:``}
    </article>
  `}async function il(e){let t=N.selectedAdminReport?.id===e?N.selectedAdminReport:(N.adminReports||[]).find(t=>t.id===e);if(!t){W(`Report not found`,`error`);return}let n=t.companies?.company_name||`Company`,r=nd(t),i=Un({companyName:n,language:N.language,matches:r.map(e=>({...e,buyer:Ld(e),deadline:qs(e),matchReasons:Vn(e.matchReasons,N.language)}))});try{await navigator.clipboard.writeText(i),W(`Report email copied`,`success`)}catch(e){console.error(`Failed to copy admin report:`,e),W(`Could not copy report email`,`error`)}}async function al(e){let t=N.selectedAdminReport?.id===e?N.selectedAdminReport:(N.adminReports||[]).find(t=>t.id===e);if(!t?.company_id){W(`Report not found`,`error`);return}N.adminReportDeliveryActions[e]=`sent`,X();try{let n=await Gi(t.company_id,`mark_report_sent`,{reportId:e});await yi(e),W(`Marked ${Number(n.marked_sent||0)} report item${Number(n.marked_sent||0)===1?``:`s`} as sent`,`success`)}catch(e){console.error(`Failed to mark report as sent:`,e),W(`Could not mark report as sent. ${U(e)}`,`error`)}finally{delete N.adminReportDeliveryActions[e],X()}}function ol(){let e=sl();return pl((N.opportunities||[]).filter(t=>{let n=Gl(t);if(e.tedOnly&&!n||e.manualOnly&&n||!e.showDemoTest&&ia(t)||!fl(t,e.addedWindow)||e.source!==`all`&&t.source!==e.source||e.status!==`all`&&t.status!==e.status)return!1;let r=ba(t)||t.countryCode||`Unknown`;if(e.country!==`all`&&r!==e.country)return!1;let i=A(e.search);return!(i&&!A(`${t.title} ${t.buyer} ${t.externalId} ${t.location}`).includes(i))}),e.sortBy)}function sl(){return{source:`all`,missingDeadlineSource:`all`,status:`all`,country:`all`,search:``,debugCompanyId:``,tedOnly:!1,manualOnly:!1,showDemoTest:!1,sortBy:`created_desc`,addedWindow:`all`,...N.adminOpportunityFilters||{}}}function cl(e){return[`created_desc`,`created_asc`,`deadline_asc`,`deadline_desc`,`updated_desc`].includes(e)?e:`created_desc`}function ll(e){return[`today`,`3d`,`7d`,`all`].includes(e)?e:`all`}function ul(){return[[`created_desc`,`Nýjast bætt við`],[`created_asc`,`Elst bætt við`],[`deadline_asc`,`Skilafrestur næst`],[`deadline_desc`,`Skilafrestur lengst frá`],[`updated_desc`,`Nýjast uppfært`]]}function dl(){return[[`today`,`Bætt við í dag`],[`3d`,`Síðustu 3 dagar`],[`7d`,`Síðustu 7 dagar`],[`all`,`Allt`]]}function fl(e,t){let n=ll(t);if(n===`all`)return!0;let r=gl(e.createdAt);if(!Number.isFinite(r))return!1;let i=new Date;if(n===`today`)return r>=new Date(i.getFullYear(),i.getMonth(),i.getDate()).getTime();let a=n===`3d`?3:7;return r>=i.getTime()-a*24*60*60*1e3}function pl(e,t){let n=cl(t);return[...e].sort((e,t)=>n===`created_asc`?hl(e.createdAt,t.createdAt,`asc`):n===`deadline_asc`?hl(ml(e),ml(t),`asc`,{nullsLast:!0}):n===`deadline_desc`?hl(ml(e),ml(t),`desc`,{nullsLast:!0}):n===`updated_desc`?hl(e.updatedAt||e.createdAt,t.updatedAt||t.createdAt,`desc`):hl(e.createdAt,t.createdAt,`desc`))}function ml(e){return e.deadlineAt||e.rawPayload?.deadline_at||e.deadline||``}function hl(e,t,n=`desc`,r={}){let i=gl(e),a=gl(t),o=Number.isFinite(i),s=Number.isFinite(a);return!o&&!s?0:o?s?n===`asc`?i-a:a-i:r.nullsLast?-1:n===`asc`?1:-1:r.nullsLast?1:n===`asc`?-1:1}function gl(e){if(!e)return NaN;let t=new Date(e).getTime();if(!Number.isNaN(t))return t;let n=String(e).match(/^(\d{4}-\d{2}-\d{2})$/);return n?new Date(`${n[1]}T00:00:00Z`).getTime():NaN}function _l(e,t){return Array.from(new Set(e.map(t).filter(Boolean))).sort((e,t)=>String(e).localeCompare(String(t)))}function vl(e){let t=sl(),n=_l(N.opportunities||[],e=>e.source||`Unknown`),r=_l(N.opportunities||[],e=>e.status||`Unknown`),i=_l(N.opportunities||[],e=>ba(e)||e.countryCode||`Unknown`),a=N.adminCompanies||[];return`
    <div class="admin-filters">
      <input data-admin-filter="search" value="${j(t.search)}" placeholder="Search title, buyer, external ID..." />
      <select data-admin-filter="source">
        <option value="all">All sources</option>
        ${n.map(e=>`<option value="${j(e)}" ${t.source===e?`selected`:``}>${j(e)}</option>`).join(``)}
      </select>
      <select data-admin-filter="status">
        <option value="all">All statuses</option>
        ${r.map(e=>`<option value="${j(e)}" ${t.status===e?`selected`:``}>${j(e)}</option>`).join(``)}
      </select>
      <select data-admin-filter="country">
        <option value="all">All countries</option>
        ${i.map(e=>`<option value="${j(e)}" ${t.country===e?`selected`:``}>${j(e)}</option>`).join(``)}
      </select>
      <select data-admin-filter="sortBy" aria-label="Röðun">
        ${ul().map(([e,n])=>`<option value="${j(e)}" ${cl(t.sortBy)===e?`selected`:``}>${j(n)}</option>`).join(``)}
      </select>
      <select data-admin-filter="addedWindow" aria-label="Bætt við">
        ${dl().map(([e,n])=>`<option value="${j(e)}" ${ll(t.addedWindow)===e?`selected`:``}>${j(n)}</option>`).join(``)}
      </select>
      <select data-admin-filter="debugCompanyId">
        <option value="">Match debug company...</option>
        ${a.map(e=>`<option value="${j(e.id)}" ${t.debugCompanyId===e.id?`selected`:``}>${j(e.companyName)}</option>`).join(``)}
      </select>
      <label class="checkbox compact"><input type="checkbox" data-admin-filter="tedOnly" ${t.tedOnly?`checked`:``}/><span>TED only</span></label>
      <label class="checkbox compact"><input type="checkbox" data-admin-filter="manualOnly" ${t.manualOnly?`checked`:``}/><span>Manual only</span></label>
      <label class="checkbox compact"><input type="checkbox" data-admin-filter="showDemoTest" ${t.showDemoTest?`checked`:``}/><span>Show demo/test opportunities</span></label>
    </div>
    <p class="admin-filter-count">${e.length} of ${(N.opportunities||[]).length} opportunities shown.</p>
  `}function yl(e){return!!(e?.deadline||e?.deadlineAt||e?.rawPayload?.deadline_at||e?.rawPayload?.deadlineAt)}function bl(){let e=sl().missingDeadlineSource||`all`;return(N.opportunities||[]).filter(e=>!yl(e)).filter(e=>!ia(e)).filter(t=>e===`all`||t.source===e).sort((e,t)=>String(e.source||``).localeCompare(String(t.source||``))||String(e.title||``).localeCompare(String(t.title||``)))}function xl(){let e=[`Ríkiskaup / island.is procurement`,`Vegagerðin`,`Akranes útboð`,`Garðabær Municipality`],t=_l((N.opportunities||[]).filter(e=>!yl(e)),e=>e.source||`Unknown`);return rr([...e,...t])}function Sl(e){let t=e?.rawPayload||{},n=String(e?.url||t.source_url||t.link||``).trim();if(!n)return{label:`No source URL`,isSafe:!1};let r;try{r=new URL(n)}catch{return{label:`Invalid URL`,isSafe:!1}}if(![`http:`,`https:`].includes(r.protocol))return{label:`Unsupported protocol: ${r.protocol}`,isSafe:!1};let i=r.hostname.replace(/^www\./i,``).toLowerCase(),a=[`utbodsvefur.is`,`vegagerdin.is`,`akranes.is`,`gardabaer.is`,`borgarbyggd.is`,`arborg.is`,`faxafloahafnir.is`,`reykjavik.is`,`hafnarfjordur.is`,`reykjanesbaer.is`,`mulathing.is`,`akureyri.is`].some(e=>i===e||i.endsWith(`.${e}`));return{label:a?`Yes (${i})`:`Unknown host (${i})`,isSafe:a}}function Cl(e){let t=e?.rawPayload||{},n=t.deadline_debug&&typeof t.deadline_debug==`object`?t.deadline_debug:{},r=[t.deadline_debug_reason,t.deadline_reenrichment_error,n.source?`debug source: ${n.source}`:``,n.extractedText?`extracted: ${n.extractedText}`:``,n.parserVersion?`parser: ${n.parserVersion}`:``,t.stale_reason?`stale: ${t.stale_reason}`:``].filter(Boolean);return r.length?r.join(` · `):`Still missing after import/re-enrichment, or no debug reason stored yet.`}function wl(){let e=bl(),t=Tl(e),n=e.reduce((e,t)=>{let n=t.source||`Unknown`;return e[n]||(e[n]=[]),e[n].push(t),e},{}),r=Object.keys(n).sort((e,t)=>e.localeCompare(t)),i=sl().missingDeadlineSource||`all`,a=xl();return`
    <section class="ops-card admin-debug-card">
      <div class="card-header">
        <div>
          <h2>Missing deadline debug</h2>
          <p>${e.length} opportunities missing deadlines${i===`all`?``:` for ${j(i)}`}. Grouped by source.</p>
          <p class="admin-filter-count">
            total=${t.total} · alert_eligible=false=${t.alertFalse} · alert_eligible not false=${t.alertNotFalse} · confirmed_tender=${t.confirmedTender} · needs_review=${t.needsReview}
          </p>
        </div>
        <label class="admin-inline-control">
          <span>Source</span>
          <select data-admin-filter="missingDeadlineSource">
            <option value="all">All sources</option>
            ${a.map(e=>`<option value="${j(e)}" ${i===e?`selected`:``}>${j(e)}</option>`).join(``)}
          </select>
        </label>
      </div>
      ${r.length?r.map(e=>El(e,n[e])).join(``):`<div class="empty-card">No missing-deadline opportunities for this filter.</div>`}
    </section>
  `}function Tl(e){return(e||[]).reduce((e,t)=>{let n=t?.rawPayload||{},r=String(n.alert_eligible??``).toLowerCase(),i=String(n.quality_status||``).toLowerCase();return e.total+=1,r===`false`?e.alertFalse+=1:e.alertNotFalse+=1,i===`confirmed_tender`&&(e.confirmedTender+=1),i===`needs_review`&&(e.needsReview+=1),e},{total:0,alertFalse:0,alertNotFalse:0,confirmedTender:0,needsReview:0})}function El(e,t){return`
    <div class="missing-deadline-source-group">
      <h3>${j(e)} <span class="muted">(${t.length})</span></h3>
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
            ${t.map(Dl).join(``)}
          </tbody>
        </table>
      </div>
    </div>
  `}function Dl(e){let t=Sl(e),n=sr(e.url||e.rawPayload?.source_url||``),r=e.rawPayload?.safety_status||e.rawPayload?.quality_status||Jl(e),i=e.rawPayload?.alert_eligible,a=i===!0?`true`:`false`,o=String(i??``).toLowerCase()===`false`?``:`<br><span class="status-pill is-warning">Missing deadline alert flag needs fix</span>`,s=Cl(e);return`
    <tr>
      <td><code>${j(String(e.id||``))}</code><br><span>${j(e.externalId||`No external ID`)}</span></td>
      <td><strong>${j(e.title||`Untitled`)}</strong><br><span>${j(e.source||`Unknown source`)}</span></td>
      <td>${n?`<a href="${j(n)}" target="_blank" rel="noreferrer" title="${j(n)}">${j(n)}</a>`:`No source URL`}</td>
      <td>${e.publishedDate?j(D(e.publishedDate)):`Not listed`}</td>
      <td>${j(r||`unknown`)}<br><span>alert_eligible=${j(a)}</span>${o}</td>
      <td><span class="status-pill ${t.isSafe?`is-success`:`is-running`}">${j(t.label)}</span></td>
      <td title="${j(s)}">${j(s)}</td>
    </tr>
  `}function Ol(){return Z(Xt({t:M,escapeHtml:j,language:N.language,trialHref:oi()}))}function kl(){return N.user?(G(),Z(`
    <section class="page-head pricing-head">
      <p class="eyebrow">${j(M(`onboarding`))}</p>
      <h1>${j(M(`onboardingTitle`))}</h1>
      <p>${j(M(`onboardingText`))}</p>
    </section>

    ${Al()}
  `)):Wa()}function Al(){return G(),ln({t:M,escapeHtml:j,capitalize:ar,arrayFieldText:xo,formatCustomerLocation:Bd,getFilterOptions:jl,getProfileSuggestions:wo,renderCustomDropdown:Pl,renderSuggestionChips:ko,profileDraft:N.profileDraft||Dr(),accountEmail:N.user?.email||``,hasProfile:!!N.profile,isSavingProfile:N.isSavingProfile,profileSaved:N.profileSaved,profileSaveMessage:N.profileSaveMessage,profileSaveError:N.profileSaveError})}function jl(e){return e===`industry`?[`Construction`,`Electrical`,`Cleaning`,`IT / Web / Software`,`Architecture / Engineering`,`Consulting`,`Transport`,`Equipment / Machinery`,`Landscaping`,`Security`,`Other`].map(e=>({value:e,label:e})):e===`label`?[{value:`strong`,label:N.language===`is`?`Aðeins sterkar`:`Strong only`},{value:`recommended`,label:N.language===`is`?`Mælt með`:`Recommended`},{value:`all`,label:N.language===`is`?`Allar samsvaranir`:`All matches`},{value:`all_opportunities`,label:N.language===`is`?`Öll tækifæri`:`All opportunities`},{value:`needs_review`,label:M(`needsReview`)},{value:`possible`,label:N.language===`is`?`Mögulegar samsvaranir`:`Possible matches`},{value:`Good match`,label:M(`goodMatch`)},{value:`Weak match`,label:M(`weakMatch`)}]:e===`category`?[{value:`all`,label:N.language===`is`?`Allir flokkar`:`All categories`},...Zs().map(e=>({value:e,label:e}))]:e===`location`?[{value:`all`,label:N.language===`is`?`Öll svæði`:`All locations`},...Qs().map(e=>({value:e,label:Bd(e)}))]:e===`type`?[{value:`all`,label:N.language===`is`?`Allar tegundir`:`All types`},...$s().map(e=>({value:e,label:ar(e.replace(`-`,` `))}))]:[]}function Ml(e){let t=jl(e),n=e===`industry`?N.profileDraft?.industry||N.profile?.industry||``:N.filters[e],r=t.findIndex(e=>e.value===n);return Math.max(0,r)}function Nl(e){return Pl({key:e,value:N.filters[e],options:jl(e)})}function Pl({key:e,value:t,options:n,profileField:r=``}){let i=N.dropdown.openKey===e,a=t,o=Math.max(0,n.findIndex(e=>e.value===a)),s=i?N.dropdown.focusedIndex:o,c=`filter-${e}-trigger`,l=`filter-${e}-list`,u=n.find(e=>e.value===a)?.label||(e===`industry`?M(`selectIndustry`):n[0]?.label)||``;return`
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
        <span>${j(u)}</span>
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
                data-value="${j(t.value)}"
                ${r?`data-profile-field="${j(r)}"`:``}
                role="option"
                aria-selected="${i}"
              >
                <span>${j(t.label)}</span>
                ${i?`<span class="custom-select-check" aria-hidden="true">✓</span>`:``}
              </button>
            `}).join(``)}
        </div>
      `:``}
    </div>
  `}function Fl(){N.dropdown.openKey=null,N.dropdown.focusedIndex=0,X()}function Il(){requestAnimationFrame(()=>{document.querySelector(`.custom-select-option.is-focused`)?.focus()})}function Ll(e){requestAnimationFrame(()=>{document.querySelector(`[data-action="toggle-dropdown"][data-key="${e}"]`)?.focus()})}function Rl(){if(!N.user)return Wa();if(!N.profile)return xc(M(`setupCompanyFirst`),M(`dashboardNeedsProfile`));let e=Es(),t=xs(),n=Ds(t),r=Ss(),i=n.filter(e=>e.matchScore>=85).length,a=n.filter(e=>E(e.deadline)<=14&&E(e.deadline)>=0).length,o=N.saved.length,s=n.filter(e=>e.matchScore>=65).reduce((e,t)=>e+(t.estimatedValue||0),0),c=n.filter(ks).length,l=Ps({visibleCount:e.length,storedMatchCount:t.length,filteredStoredCount:n.length,availableCount:r.length,recommendedCount:c,strongCount:i,companyName:N.profile.companyName}),u=N.lastMatchedAt?M(`matchesLastRefreshed`,{time:D(N.lastMatchedAt)}):M(`matchesAutoRefresh`);return Z(Gt({profile:N.profile,matches:e,stats:{strong:i,closingSoon:a,savedCount:o,totalValue:Xs(s)},filters:N.filters,filterSummary:l,matchStatus:N.matchStatus,opportunityLoadError:N.opportunityLoadError,isAdmin:N.isAdmin,matchingLoading:N.matchingLoading,labels:{dashboard:M(`dashboard`),welcomeCompany:M(`welcomeCompany`,{company:N.profile.companyName}),dashboardIntro:M(`dashboardIntro`,{refresh:u}),refreshing:M(`refreshing`),refreshMatches:M(`refreshMatches`),viewWeeklyReport:M(`viewWeeklyReport`),strongMatches:M(`strongMatches`),closingSoon:M(`closingSoon`),savedLabel:M(`savedLabel`),totalPotentialValue:M(`totalPotentialValue`),searchOpportunities:M(`searchOpportunities`),savedOnly:M(`savedOnly`)},renderFilterDropdown:Nl,renderOpportunityCard:Wl,renderEmptyState:()=>Ul(N.profile,N.filters.label,{availableCount:r.length,storedMatchCount:t.length,filteredStoredCount:n.length,recommendedCount:c,strongCount:i}),escapeHtml:j}))}function zl(e){let t=[],n=Array.isArray(e?.locations)?e.locations:[],r=Array.isArray(e?.services)?e.services:[],i=Array.isArray(e?.includeKeywords)?e.includeKeywords:[],a=Array.isArray(e?.excludeKeywords)?e.excludeKeywords:[],o=n.some(e=>A(e)===`all iceland`),s=a.some(e=>{let t=A(e);return t.includes(`reykjavik`)||t.includes(`capital area`)});return o||t.push(N.language===`is`?`Bætið við Allt landið til að ná landsdekkandi útboðum og rammasamningum.`:`Add All Iceland to catch national tenders and framework agreements.`),e?.nationalProjects||t.push(N.language===`is`?`Kveikið á landsdekkandi verkefnum svo slík tækifæri birtist sem mögulegar samsvaranir.`:`Enable national projects so All Iceland opportunities appear as possible matches.`),r.length<5&&t.push(N.language===`is`?`Bætið við nákvæmari þjónustu svo VerkRadar þekki betur útboð sem passa við ykkar vinnu.`:`Add more specific services so VerkRadar can recognize notices that fit your work.`),s&&t.push(N.language===`is`?`Yfirfarið útilokunarorð fyrir Reykjavík eða höfuðborgarsvæðið. Þau geta falið útboð sem fyrirtæki utan svæðisins geta samt boðið í.`:`Review exclude keywords for Reykjavík or Capital Area. They may hide tenders that companies outside Reykjavík can still bid on.`),i.length<4&&t.push(N.language===`is`?`Bætið við fleiri leitarorðum, sérstaklega íslenskum hugtökum sem kaupendur nota í útboðum.`:`Add more include keywords, including Icelandic terms buyers may use in notices.`),t.length||t.push(N.language===`is`?`Yfirfarið þjónustu, svæði og leitarorð svo þau lýsi verkefnunum sem þið viljið raunverulega bjóða í.`:`Review services, locations and keywords to make sure they describe the work you actually want to bid on.`),t}function Bl(e,t={}){return N.language===`is`?e===`all`?{eyebrow:`Engar samsvaranir`,title:`Engin tækifæri fundust fyrir þennan prófíl enn.`,body:`Víkkið þjónustu, svæði eða leitarorð til að finna fleiri tækifæri.`}:e===`all_opportunities`?{eyebrow:`Engin tækifæri`,title:`Engin tiltæk tækifæri enn.`,body:`Flytjið inn fleiri heimildir eða skoðið heimildayfirlit í Admin.`}:e===`needs_review`?{eyebrow:`Ekkert þarf staðfestingu`,title:`Engin tækifæri þarfnast staðfestingar núna.`,body:`Tækifæri úr breiðum heimildum sem þarf að yfirfara birtast hér.`}:e===`strong`?{eyebrow:`Engar sterkar samsvaranir`,title:`Engar sterkar samsvaranir enn.`,body:`Þið gætuð samt átt gagnlegar mögulegar samsvaranir. Prófið Mælt með eða Allar samsvaranir.`}:e===`possible`||e===`Possible match`||e===`Weak match`?{eyebrow:`Engar mögulegar samsvaranir`,title:`Engar mögulegar samsvaranir enn.`,body:`Prófið að víkka þjónustu, svæði eða leitarorð til að finna óvissari tækifæri.`}:{eyebrow:`Engar ráðlagðar samsvaranir`,title:Vl(t),body:Hl(t)}:e===`all`?{eyebrow:`No matches`,title:`No opportunities found for this profile yet.`,body:`Broaden your services, locations or keywords to find more opportunities.`}:e===`all_opportunities`?{eyebrow:`No opportunities`,title:`No available opportunities yet.`,body:`Import more sources or check Admin source coverage.`}:e===`needs_review`?{eyebrow:`No needs-review items`,title:`No needs-review opportunities right now.`,body:`Broad-feed opportunities that need manual verification will appear here.`}:e===`strong`?{eyebrow:`No strong matches`,title:`No strong matches yet.`,body:`You may still have useful possible matches. Switch to Recommended or All matches to review them.`}:e===`possible`||e===`Possible match`||e===`Weak match`?{eyebrow:`No possible matches`,title:`No possible matches yet.`,body:`Try broadening your services, locations or keywords to find lower-confidence opportunities.`}:{eyebrow:`No recommended matches`,title:Vl(t),body:Hl(t)}}function Vl(e={}){let t=e.companyName||(N.language===`is`?`þennan prófíl`:`this profile`);return Number(e.strongCount||0)>0?N.language===`is`?`${e.strongCount} sterkar samsvaranir eru faldar af síum.`:`${e.strongCount} strong ${Number(e.strongCount)===1?`match is`:`matches are`} hidden by filters.`:N.language===`is`?`Engar ráðlagðar samsvaranir fyrir ${t} enn.`:`No recommended matches for ${t} yet.`}function Hl(e={}){let t=Number(e.strongCount||0),n=Number(e.filteredStoredCount||0),r=Number(e.availableCount||0);return t>0?N.language===`is`?`Hreinsið leit/flokka/svæðissíur eða slökkvið á Aðeins vistað til að sjá sterku samsvaranirnar.`:`Clear search/category/location filters or turn off Saved only to see the strong matches.`:n>0?N.language===`is`?`${n} tækifæri eru til, en falin af gæðasíum. Notið Allar samsvaranir eða Þarfnast staðfestingar til að skoða þau.`:`${n} ${n===1?`opportunity is`:`opportunities are`} available, but hidden from Recommended by quality checks. Use All matches or Needs review to inspect them.`:N.language===`is`?`${r} tækifæri eru til í kerfinu, en ekkert passar nógu sterkt við þennan prófíl.`:`${r} opportunities are available in the system, but none match this profile strongly enough.`}function Ul(e,t=N.filters.label,n={}){let r=zl(e);return Wt({copy:Bl(t,{...n,companyName:e?.companyName}),suggestions:r,labels:{improveProfile:M(`improveProfile`),includeNationalOpportunities:M(`includeNationalOpportunities`),showAllStoredMatches:M(`showAllStoredMatches`),inspectAllOpportunities:M(`inspectAllOpportunities`)},escapeHtml:j})}function Wl(e){return Kt({opp:e,saved:N.saved.includes(e.id),deadline:Ys(e),sourceBadgeHtml:`<span class="source-pill source-badge">${j(e.source)}</span>`,qualityBadgeHtml:Yl(e),safetyBadgeHtml:Xl(e),extractedBadgeHtml:eu(e),originalLanguageBadgeHtml:Gl(e)?`<span class="source-pill source-badge muted-badge">${j(M(`originalLanguage`))}</span>`:``,matchBadgeClass:ec(e.matchLabel),matchLabel:Fd(e.matchLabel),buyer:Ld(e),location:Rd(e),value:Xs(e.estimatedValue),reasons:e.matchReasons.slice(0,3).map(Vd),labels:{details:M(`details`),saved:M(`saved`),save:M(`save`),ignore:M(`ignore`)},escapeHtml:j})}function Gl(e){return/ted|tenders electronic daily/i.test(String(e.source||``))}function Kl(e){let t=R(e);return{confirmed_tender:`Confirmed tender`,early_signal:`Early signal`,needs_review:`Needs review`}[t]||ar(t.replace(/_/g,` `))}function ql(e){return{confirmed_tender:`Confirmed tender`,early_opportunity:`Early opportunity`,market_signal:`Market signal`,news_context:`News context`,not_opportunity:`Not an opportunity`}[aa(e)||e]||ar(String(e||`market_signal`).replace(/_/g,` `))}function Jl(e){let t=z(e);return t===`news_context`||t===`not_opportunity`||t===`market_signal`?ql(t):B(e)?tu(oa(e)):Kl(R(e.qualityStatus,e))}function Yl(e){return`<span class="source-pill source-badge quality-badge ${j(z(e)||R(e.qualityStatus,e))}">${j(Pd(Jl(e)))}</span>`}function Xl(e){if(!e||!e.safetyStatus)return``;let t=ws(e);return`<span class="source-pill source-badge safety-badge ${j(t)}">${j(Zl(t))}</span>`}function Zl(e){let t=String(e||``).toLowerCase();return(N.language===`is`?{auto_approved:`Sjálfkrafa samþykkt`,needs_review:`Þarfnast yfirferðar`,hidden:`Falið`}:{auto_approved:`Auto-approved`,needs_review:`Needs review`,hidden:`Hidden`})[t]||ar(t.replace(/_/g,` `))}function Ql(e){return e?N.language===`is`?`Hæft í tilkynningu`:`Alert eligible`:N.language===`is`?`Ekki hæft í tilkynningu`:`Not alert eligible`}function $l(e){let t=String(e||``);return N.language===`is`?{"Valid future deadline found":`Gildur framtíðarskilafrestur fannst`,"Recent high-intent procurement signal":`Nýlegt merki frá sterkri útboðsheimild`,"Strong service/work-type fit":`Sterk samsvörun við þjónustu eða verkflokk`,"No reliable deadline was found":`Áreiðanlegur skilafrestur fannst ekki`,"Buyer is missing or generic":`Kaupandi vantar eða er of almennur`,"Match depends on broad or low-confidence terms":`Samsvörun byggir á breiðum eða óvissum orðum`,"Possible service mismatch for this company profile":`Mögulegt ósamræmi við þjónustu fyrirtækisins`,"Mentions design, consulting, supervision, or project management terms":`Inniheldur orð tengd hönnun, ráðgjöf, eftirliti eða verkefnastjórnun`,"Tender appears already awarded or already tendered":`Útboð virðist þegar auglýst eða útboði lokið`,"Stale or expired opportunity signal":`Gamalt eða útrunnið tækifæri`,"Current opportunity is plausible but needs review before customer alerts":`Tækifærið gæti átt við en þarf yfirferð áður en það fer í tilkynningu`,"Admin override includes this opportunity in customer reports":`Admin hefur samþykkt birtingu í viðskiptavinayfirlitum`,"Excluded by customer eligibility, duplicate, stale, hidden, demo, or expired filters":`Falið vegna reglna um birtingu, afrit, aldur, prófunargögn eða útrunnið tækifæri`}[t]||$(t):t}function eu(e){if(e?.rawPayload?.extraction_method!==`vegagerdin_article_project_parser`)return``;let t=e.rawPayload?.region?` · ${e.rawPayload.region}`:``;return`<span class="source-pill source-badge muted-badge">${j(M(`extractedProject`))}${j(t)}</span>`}function tu(e){return{tender_awarded:M(`tenderAwarded`),awarded:M(`tenderAwarded`),already_tendered:M(`tenderAlreadyAnnounced`),announced:M(`tenderAlreadyAnnounced`),upcoming_tender:M(`upcomingTender`),project_signal:M(`projectSignal`),open_or_published:M(`tenderAlreadyAnnounced`),planned_tender:M(`upcomingTender`),unclear:M(`projectSignal`)}[String(e||``)]||ar(String(e||``).replace(/_/g,` `))}function nu(e){let t=z(e);return t===`news_context`||t===`not_opportunity`?`<div class="note-panel quality-warning">${j(N.language===`is`?`Þetta lítur út eins og frétta- eða umferðarefni, ekki tækifæri fyrir viðskiptavin.`:`This looks like news or traffic context, not a customer-facing opportunity.`)}</div>`:R(e.qualityStatus,e)===`needs_review`?B(e)?`<div class="note-panel quality-warning">${j(N.language===`is`?`Útdregin verkefnavísbending — staðfestið útboðstímasetningu í heimildargrein.`:`Extracted project signal — verify tender timing in the source article.`)}</div>`:`<div class="note-panel quality-warning">${j(N.language===`is`?`Innflutt úr breiðum straumi — staðfestið á upprunasíðu.`:`Imported from broad feed — verify source page.`)}</div>`:``}function ru(e){let t=N.saved.includes(e.id),n=Ys(e),r=Array.isArray(e.requirements)?e.requirements:[],i=Array.isArray(e.matchReasons)?e.matchReasons:[],a=Array.isArray(e.risks)?e.risks:[],o=Array.isArray(e.nextSteps)?e.nextSteps:[],s=[B(e)?`<p><strong>${j(M(`extraction`))}:</strong> ${j(N.language===`is`?`Útdregið úr grein Vegagerðarinnar`:`Extracted from Vegagerðin article`)}</p>`:``,e.rawPayload?.parent_article_title?`<p><strong>${j(M(`sourceArticle`))}:</strong> ${j(e.rawPayload.parent_article_title)}</p>`:``,e.rawPayload?.parent_url?`<p><strong>${j(M(`parentArticle`))}:</strong> <a href="${j(e.rawPayload.parent_url)}" target="_blank" rel="noreferrer">${j(M(`openSourceArticle`))}</a></p>`:``,e.rawPayload?.region?`<p><strong>${j(M(`extractedRegion`))}:</strong> ${j(e.rawPayload.region)}</p>`:``,e.rawPayload?.project_number?`<p><strong>${j(M(`projectNumber`))}:</strong> ${j(e.rawPayload.project_number)}</p>`:``,B(e)?`<p><strong>${j(M(`tenderState`))}:</strong> ${j(tu(oa(e)))}</p>`:``].join(``);return qt({opp:e,saved:t,deadline:n,requirements:r,matchReasons:i.length?i.map(Vd):[],risks:a.length?a.map($):[M(`noMajorRisks`)],safetyReasons:[...Array.isArray(e.safetyReasons)?e.safetyReasons:[],...a.length?a.map($):[M(`noMajorRisks`)]].map($l),nextSteps:o.map(Hd),matchBadgeClass:ec(e.matchLabel),matchLabel:Fd(e.matchLabel),qualityBadgeHtml:Yl(e),safetyBadgeHtml:Xl(e),extractedBadgeHtml:eu(e),qualityWarningHtml:nu(e),buyerSummary:zd(`buyer`,e.buyer),location:Rd(e),value:e.estimatedValue?Xs(e.estimatedValue):M(`notListed`),sourceUrl:e.url,extractedDetails:s,qualityLabel:Pd(Jl(e)),safetyStatusLine:e.safetyStatus?`<p><strong>${j(N.language===`is`?`Öryggisflokkun`:`Safety status`)}:</strong> ${j(Zl(e.safetyStatus))} · ${j(Ql(e.alertEligible))}</p>`:``,category:zd(`category`,e.category),type:zd(`type`,e.type),publishedDate:e.publishedDate,cpvCode:e.cpvCode,labels:{description:M(`description`),noDescription:M(`noDescription`),requirements:M(`requirements`),noSpecificRequirements:M(`noSpecificRequirements`),matchReasons:M(`matchReasons`),noMatchReasons:M(`noMatchReasons`),opportunityInfo:M(`opportunityInfo`),source:M(`source`),sourceValue:zd(`source`,e.source),quality:M(`quality`),category:M(`category`),type:M(`type`),deadline:M(`deadline`),deadlineLabel:$(n.label),published:M(`published`),cpv:M(`cpv`),risksToCheck:M(`risksToCheck`),recommendedNextSteps:M(`recommendedNextSteps`),openSourceAndConfirm:M(`openSourceAndConfirm`),removeFromSaved:M(`removeFromSaved`),saveOpportunity:M(`saveOpportunity`),openSource:M(`openSource`),markNotRelevant:M(`markNotRelevant`)},escapeHtml:j})}function iu(){if(!N.user)return Wa();if(!N.isAdmin)return Ga();let e=ol(),t=N.adminCompanies.find(e=>e.id===N.selectedAdminCompanyId);return Z(`
    <section class="page-head">
      <p class="eyebrow">Admin</p>
      <h1>Operations dashboard</h1>
      <p>Admin tools for monitoring imports, reviewing customers, managing sources and handling manual entries.</p>
    </section>

    ${N.adminMessage?`
      <div class="admin-message ${N.adminMessage.type===`error`?`is-error`:`is-success`}">
        ${j(N.adminMessage.text)}
      </div>
    `:``}

    ${N.opportunityLoadError?`
      <div class="note-panel">
        ${j(N.opportunityLoadError)}
      </div>
    `:``}

    ${au()}
    ${ou(e)}
    ${t?Iu(t):``}
  `)}function au(){return`
    <div class="admin-tabs" role="tablist" aria-label="Admin sections">
      ${[[`overview`,`Overview`],[`companies`,`Companies`],[`review`,`Review Queue`],[`trial-requests`,`Trial Requests`],[`sources`,`Sources/imports`],[`opportunities`,`Opportunities`],[`reports`,`Reports`]].map(([e,t])=>`
        <button type="button" class="${N.adminActiveTab===e?`is-active`:``}" data-action="admin-tab" data-tab="${e}">
          ${j(t)}
        </button>
      `).join(``)}
    </div>
  `}function ou(e){return N.adminActiveTab===`companies`?Mu():N.adminActiveTab===`review`?cu():N.adminActiveTab===`trial-requests`?lu():N.adminActiveTab===`sources`?`
      ${Ic()}
      ${Rc()}
      ${Xc()}
      ${zc()}
      ${Wc()}
    `:N.adminActiveTab===`opportunities`?Fu(e):N.adminActiveTab===`reports`?Gc():`
    ${su()}
    ${et({escapeHtml:j,isRunning:!!N.adminDailyPipelineLoading,result:N.adminDailyPipelineResult||null})}
    ${Ft({escapeHtml:j,usageSummary:N.adminAiUsageSummary||null,lastResult:N.adminAutomaticAiReviewResult||null,isRunning:!!N.adminAutomaticAiReviewLoading,formatAiUsageCost:ze})}
    ${Ic()}
    ${Mu(!0)}
  `}function su(){let e=N.adminCompanies||[],t=N.opportunities||[],n=Pc(),r=e.filter(e=>e.profileStatus===`Complete`).length,i=Math.max(0,e.length-r);return`
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
        <div><span>Confirmed tenders</span><strong>${t.filter(e=>R(e.qualityStatus,e)===`confirmed_tender`).length}</strong></div>
        <div><span>Early signals</span><strong>${t.filter(e=>R(e.qualityStatus,e)===`early_signal`).length}</strong></div>
        <div><span>Needs review</span><strong>${t.filter(e=>R(e.qualityStatus,e)===`needs_review`).length}</strong></div>
        <div><span>Latest import status</span><strong>${j(n?.status||`No runs`)}</strong></div>
      </div>
    </section>
  `}function cu(){let e=N.adminReviewMatches||[],t=_u();return`
    <section class="ops-card">
      <div class="card-header">
        <div>
          <h2>${j(t.title)}</h2>
          <p>${N.adminReviewLoading?j(t.loading):j(t.count(e.length))}</p>
        </div>
        <button class="btn btn-ghost btn-small" type="button" data-action="refresh-admin-status">Refresh</button>
      </div>
      ${N.adminReviewError?`<div class="admin-message is-error">${j(N.adminReviewError)}</div>`:``}
      ${N.adminReviewLoading&&!e.length?`<div class="empty-card">${j(t.loading)}</div>`:e.length?`
        <div class="admin-review-list">
          ${e.map(Du).join(``)}
        </div>
      `:`<div class="empty-card">${j(t.empty)}</div>`}
    </section>
  `}function lu(){let e=N.adminTrialRequests||[],t=gu();return`
    <section class="ops-card">
      <div class="card-header">
        <div>
          <h2>Trial Requests</h2>
          <p>${N.adminTrialRequestsLoading?`Loading trial requests...`:`${e.length} request${e.length===1?``:`s`} received.`}</p>
        </div>
        <button class="btn btn-ghost btn-small" type="button" data-action="refresh-admin-status">Refresh</button>
      </div>
      ${N.adminTrialRequestsError?`<div class="admin-message is-error">${j(N.adminTrialRequestsError)}</div>`:``}
      ${N.adminTrialRequestsLoading&&!e.length?`<div class="empty-card">Loading trial requests...</div>`:e.length?`
        <div class="ops-table-wrap">
          <table class="ops-table">
            <thead>
              <tr>
                <th>Company</th>
                <th>Contact</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Services</th>
                <th>Locations</th>
                <th>Status</th>
                <th>Created at</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              ${e.map(uu).join(``)}
            </tbody>
          </table>
        </div>
      `:`<div class="empty-card">No trial requests yet.</div>`}
    </section>
    ${t?du(t):``}
  `}function uu(e){return`
    <tr class="${N.selectedAdminTrialRequestId===e.id?`is-selected`:``}">
      <td><strong>${j(e.company_name||`—`)}</strong></td>
      <td>${j(e.contact_name||`—`)}</td>
      <td>${j(e.email||`—`)}</td>
      <td>${j(e.phone||`—`)}</td>
      <td>${j(e.services||`—`)}</td>
      <td>${j(e.locations||`—`)}</td>
      <td>${pu(e.status)}</td>
      <td>${j(e.created_at?D(e.created_at):`—`)}</td>
      <td>
        <button class="btn btn-secondary btn-small" type="button" data-action="view-admin-trial-request" data-id="${j(e.id)}">Opna</button>
      </td>
    </tr>
  `}function du(e){let t=N.adminTrialRequestActions?.[e.id],n=e.status===`converted`||!!e.converted_company_id;return`
    <section class="ops-card admin-trial-detail-card">
      <div class="card-header">
        <div>
          <h2>${j(e.company_name||`Trial request`)}</h2>
          <p>${pu(e.status)} · ${j(e.created_at?D(e.created_at):`—`)}</p>
        </div>
        <button class="btn btn-ghost btn-small" type="button" data-action="close-admin-trial-request">Close</button>
      </div>
      ${N.adminTrialCompanyError?`<div class="admin-message is-error">${j(N.adminTrialCompanyError)}</div>`:``}
      ${N.adminTrialCompanyMessage?`<div class="admin-message is-success">${j(N.adminTrialCompanyMessage)}</div>`:``}
      <div class="admin-trial-detail-grid">
        ${Q(`Fyrirtæki`,e.company_name)}
        ${Q(`Tengiliður`,e.contact_name)}
        ${Q(`Netfang`,e.email)}
        ${Q(`Sími`,e.phone)}
        ${Q(`Þjónusta`,e.services,!0)}
        ${Q(`Svæði`,e.locations,!0)}
        ${Q(`Athugasemd`,e.message,!0)}
        ${Q(`Staða`,Cn(e.status))}
        ${Q(`Tilkynning`,mu(e),!0)}
        ${Q(`Stofnað`,e.created_at?D(e.created_at):``)}
      </div>
      <div class="admin-trial-actions">
        <button class="btn btn-secondary" type="button" data-action="admin-trial-request-status" data-id="${j(e.id)}" data-status="contacted" ${t||n?`disabled`:``}>${t===`contacted`?`Vista...`:`Merkja haft samband`}</button>
        <button class="btn btn-ghost" type="button" data-action="admin-trial-request-status" data-id="${j(e.id)}" data-status="rejected" ${t||n?`disabled`:``}>${t===`rejected`?`Vista...`:`Hafna`}</button>
        <button class="btn btn-primary" type="button" data-action="admin-start-trial-company" data-id="${j(e.id)}" ${n?`disabled`:``}>Stofna fyrirtæki</button>
        ${e.converted_company_id?`<button class="btn btn-secondary" type="button" data-action="view-admin-company" data-id="${j(e.converted_company_id)}">Opna fyrirtæki</button>`:``}
      </div>
      ${N.adminTrialCompanyDraft?fu(e):``}
    </section>
  `}function fu(e){return`
    <div class="admin-trial-company-form-wrap">
      <div class="section-heading">
        <p class="eyebrow">Company profile</p>
        <h3>Stofna fyrirtæki úr prufubeiðni</h3>
        <p>Yfirfarðu og kláraðu venjulega fyrirtækjaprófílinn áður en hann er vistaður. Enginn innskráningaraðgangur eða boð er stofnað sjálfkrafa.</p>
      </div>
      ${ln({t:M,escapeHtml:j,capitalize:ar,arrayFieldText:xo,formatCustomerLocation:Bd,getFilterOptions:jl,getProfileSuggestions:wo,renderCustomDropdown:Pl,renderSuggestionChips:ko,formId:`admin-trial-company-form`,profileDraft:N.adminTrialCompanyDraft||Sn(e,()=>f(``)),accountEmail:``,hasProfile:!1,isSavingProfile:N.adminTrialCompanySaving,profileSaved:!1,profileSaveMessage:null,profileSaveError:N.adminTrialCompanyError})}
    </div>
  `}function Q(e,t,n=!1){return`
    <div class="admin-trial-detail-field ${n?`is-wide`:``}">
      <span>${j(e)}</span>
      <strong>${j(t||`—`)}</strong>
    </div>
  `}function pu(e){let t=String(e||`new`).toLowerCase();return`<span class="status-pill ${t===`converted`?`is-success`:t===`rejected`?`is-danger`:t===`contacted`?`is-warning`:`is-running`}">${j(Cn(e))}</span>`}function mu(e){return e.notification_sent_at?`Tilkynning send ${D(e.notification_sent_at)}`:e.notification_started_at?`Tilkynning í vinnslu`:e.notification_error?`Tilkynning mistókst: ${e.notification_error}`:`Tilkynning ekki send`}function hu(e){return(N.adminTrialRequests||[]).find(t=>t.id===e)||null}function gu(){return hu(N.selectedAdminTrialRequestId)}function _u(){return{title:`Review Queue`,loading:`Loading review queue...`,empty:`No uncertain matches need review.`,count:e=>`${e} uncertain match${e===1?``:`es`} need review.`,opportunity:`Opportunity`,company:`Company`,source:`Source`,buyer:`Buyer`,region:`Region`,deadline:`Deadline`,score:`Score`,safety:`Safety`,alert:`Alert`,safetyReasons:`Safety reasons`,matchReasons:`Match reasons`,aiReview:`AI review`,aiReviewButton:`AI review`,aiReviewing:`Reviewing...`,aiFit:`Fit`,aiConfidence:`Confidence`,aiSend:`Send to client`,aiSummary:`Suggested client summary`,aiNoReview:`No AI review saved yet.`,approve:`Approve`,approving:`Approving...`,reject:`Reject`,rejecting:`Rejecting...`,noSource:`No source URL`,hidden:`Hidden from reports`,notHidden:`Not hidden from reports`,sourceUrl:`Source URL`}}function vu(e){let t=e?.source||e?.rawPayload?.source_name||``;return mr(e?.buyer,t,e?.rawPayload||{})||`Unknown buyer`}function yu(e){return hr(e?.source||e?.rawPayload?.source_name||``)||e?.location||`Unknown`}function bu(e){let t=String(e?.deadlineAt||e?.rawPayload?.deadline_at||``).trim().match(/^(\d{4}-\d{2}-\d{2})[T\s](\d{2}):(\d{2})/);return t?`${t[1]} ${t[2]}:${t[3]}`:e?.deadline?nr(e.deadline):`Deadline not available in imported data — verify on source page.`}function xu(e){let t=String(e||``).toLowerCase();return{auto_approved:`Auto-approved`,needs_review:`Needs review`,hidden:`Hidden`}[t]||ar(t.replace(/_/g,` `))}function Su(e){return e?`Alert eligible`:`Not alert eligible`}function Cu(e){return e?`Review required`:`Review not required`}function wu(e){let t=String(e||``).trim();return{"Strong match":`Strong match`,"Good match":`Good match`,"Possible match":`Possible match`,"Weak match":`Weak match`}[t]||t||`Possible match`}function Tu(e){return String(e||``).trim()}function Eu(e){return String(e||``).trim()}function Du(e){let t=e.opportunity||{},n=N.adminReviewActions?.[e.id]||``,r=!!N.adminAiReviewActions?.[e.id],i=sr(t.url),a=_u(),o=e.safetyReasons.length?e.safetyReasons:[`Needs admin review`],s=e.matchReasons.length?e.matchReasons:[`Profile match`];return`
    <article class="admin-review-card">
      <div class="admin-review-card-top">
        <div class="admin-review-title-block">
          <span class="eyebrow">${j(a.opportunity)}</span>
          <h3>${j(t.title||`Untitled opportunity`)}</h3>
          <p>${j(a.company)}: <strong>${j(e.companyName)}</strong></p>
          <p>${j(a.source)}: <strong>${j(t.source||`Unknown source`)}</strong></p>
          ${i?`<p class="admin-source-url"><span>${j(a.sourceUrl)}:</span> ${j(i)}</p>`:``}
        </div>
        <div class="admin-review-source-action">
          ${i?`<a class="btn btn-secondary btn-small" href="${j(i)}" target="_blank" rel="noopener">Open source ↗</a>`:`<span class="admin-chip">${j(a.noSource)}</span>`}
        </div>
      </div>

      <div class="admin-review-meta-grid">
        ${Au(a.buyer,vu(t))}
        ${Au(a.region,yu(t))}
        ${Au(a.deadline,bu(t))}
        ${Au(a.score,`${wu(e.matchLabel)} · ${Number(e.matchScore||0)}`)}
        ${Au(a.safety,xu(e.safetyStatus))}
        ${Au(a.alert,`${Su(e.alertEligible)} · ${Cu(e.reviewRequired)}`)}
      </div>

      <div class="admin-review-reasons">
        <section class="admin-review-reason-box is-warning">
          <h4>${j(a.safetyReasons)}</h4>
          <ul>
            ${o.map(e=>`<li>${j(e)}</li>`).join(``)}
          </ul>
        </section>
        <section class="admin-review-reason-box">
          <h4>${j(a.matchReasons)}</h4>
          <ul>
            ${s.map(e=>`<li>${j(e)}</li>`).join(``)}
          </ul>
        </section>
      </div>

      ${Ou(e,a)}

      <div class="admin-review-actions">
        <span class="admin-review-hidden-state">${j(t.rawPayload?.hidden_from_reports===!0?a.hidden:a.notHidden)}</span>
        <div class="admin-row-actions">
          <button class="btn btn-secondary btn-small" data-action="admin-ai-review-match" data-id="${j(e.id)}" data-force="${e.aiReview?`true`:`false`}" ${n||r?`disabled`:``}>${j(r?a.aiReviewing:e.aiReview?`Re-run AI review`:a.aiReviewButton)}</button>
          <button class="btn btn-ghost btn-small" data-action="admin-review-match" data-review-action="approve" data-id="${j(e.id)}" data-company-id="${j(e.companyId)}" ${n||r?`disabled`:``}>${j(n===`approve`?a.approving:a.approve)}</button>
          <button class="btn btn-ghost btn-small" data-action="admin-review-match" data-review-action="reject" data-id="${j(e.id)}" data-company-id="${j(e.companyId)}" ${n||r?`disabled`:``}>${j(n===`reject`?a.rejecting:a.reject)}</button>
        </div>
      </div>
    </article>
  `}function Ou(e,t){let n=e.aiReview;return n?`
    <section class="admin-ai-review-box">
      <div class="admin-ai-review-header">
        <h4>${j(t.aiReview)}</h4>
        <span>${j(n.model||`model not listed`)} · ${n.updatedAt?j(D(n.updatedAt)):``}</span>
      </div>
      <div class="admin-ai-review-meta">
        <span><strong>${j(t.aiFit)}</strong>${j(ku(n.fit))}</span>
        <span><strong>${j(t.aiConfidence)}</strong>${Math.round(Number(n.confidence||0)*100)}%</span>
        <span><strong>${j(t.aiSend)}</strong>${n.sendToClient?`Yes`:`No`}</span>
      </div>
      <p>${j(n.reason||``)}</p>
      ${n.fitReasons.length?`<p><strong>Fit reasons:</strong> ${n.fitReasons.map(e=>`<span class="admin-chip">${j(e)}</span>`).join(` `)}</p>`:``}
      ${n.risksOrQuestions.length?`<p><strong>Risks/questions:</strong> ${n.risksOrQuestions.map(e=>`<span class="admin-chip">${j(e)}</span>`).join(` `)}</p>`:``}
      ${n.suggestedClientSummary?`<p><strong>${j(t.aiSummary)}:</strong> ${j(n.suggestedClientSummary)}</p>`:``}
    </section>
  `:`
      <section class="admin-ai-review-box is-empty">
        <div class="admin-ai-review-header">
          <h4>${j(t.aiReview)}</h4>
          <span>${j(t.aiNoReview)}</span>
        </div>
      </section>
    `}function ku(e){return{strong:`Strong`,possible:`Possible`,weak:`Weak`,no_fit:`No fit`}[String(e||``)]||`Weak`}function Au(e,t){return`
    <div class="admin-review-meta-item">
      <span>${j(e)}</span>
      <strong>${j(t||`—`)}</strong>
    </div>
  `}function ju(){let e=N.adminCompanyFilters;return(N.adminCompanies||[]).filter(t=>{let n=A(e.search);return!(n&&!A(`${t.companyName} ${t.contactEmail} ${t.industry}`).includes(n)||e.industry!==`all`&&t.industry!==e.industry||e.profileStatus!==`all`&&t.profileStatus!==e.profileStatus||e.plan!==`all`&&t.plan!==e.plan)})}function Mu(e=!1){let t=e?(N.adminCompanies||[]).slice(0,5):ju();return`
    <section class="ops-card">
      <div class="card-header">
        <div>
          <h2>Companies / users</h2>
          <p>${N.adminCompaniesLoading?`Loading companies...`:`${t.length} shown from ${(N.adminCompanies||[]).length} total companies.`}</p>
        </div>
        ${e?``:`
          <label class="admin-inline-control">
            <span>Report mode</span>
            <select data-admin-report-mode>
              <option value="new_only" ${N.adminReportMode===`new_only`?`selected`:``}>New opportunities report</option>
              <option value="all_current" ${N.adminReportMode===`all_current`?`selected`:``}>Current active opportunities report</option>
            </select>
          </label>
        `}
      </div>
      ${N.adminCompaniesError?`<div class="admin-message is-error">${j(N.adminCompaniesError)}</div>`:``}
      ${e?``:Nu()}
      ${N.adminCompaniesLoading&&!t.length?`<div class="empty-card">Loading companies...</div>`:t.length?`
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
              ${t.map(Pu).join(``)}
            </tbody>
          </table>
        </div>
      `:`<div class="empty-card">No companies found.</div>`}
    </section>
  `}function Nu(){let e=N.adminCompanies||[],t=_l(e,e=>e.industry),n=_l(e,e=>e.plan),r=N.adminCompanyFilters;return`
    <div class="admin-filters admin-company-filters">
      <input data-admin-company-filter="search" value="${j(r.search)}" placeholder="Search company or email..." />
      <select data-admin-company-filter="industry">
        <option value="all">All industries</option>
        ${t.map(e=>`<option value="${j(e)}" ${r.industry===e?`selected`:``}>${j(e)}</option>`).join(``)}
      </select>
      <select data-admin-company-filter="profileStatus">
        <option value="all">All profiles</option>
        ${[`Complete`,`Incomplete`].map(e=>`<option value="${e}" ${r.profileStatus===e?`selected`:``}>${e}</option>`).join(``)}
      </select>
      <select data-admin-company-filter="plan">
        <option value="all">All plans</option>
        ${n.map(e=>`<option value="${j(e)}" ${r.plan===e?`selected`:``}>${j(e)}</option>`).join(``)}
      </select>
    </div>
  `}function Pu(e){let t=N.adminCompanyActions?.[e.id]||``,n=t===`refresh`,r=t===`report`,i=!!t;return`
    <tr>
      <td><strong>${j(e.companyName)}</strong><br><span>${j(e.contactEmail||`No email`)}</span></td>
      <td>${j(e.industry||`Unknown`)}</td>
      <td>${j(e.plan||`Demo`)}</td>
      <td><span class="status-pill ${e.profileStatus===`Complete`?`is-success`:`is-running`}">${j(e.profileStatus)}</span></td>
      <td>${j(D(e.createdAt))}</td>
      <td>${e.matchCount}</td>
      <td>${e.savedCount?e.savedCount:`Not tracked`}</td>
      <td>${e.latestReportDate?j(D(e.latestReportDate)):`No reports`}</td>
      <td>
        <div class="admin-row-actions">
          <button class="btn btn-secondary btn-small" type="button" data-action="view-admin-company" data-id="${j(e.id)}" ${i?`disabled`:``}>View details</button>
          <button class="btn btn-ghost btn-small" type="button" data-action="admin-refresh-company-matches" data-id="${j(e.id)}" ${i?`disabled`:``}>${n?`Refreshing...`:`Refresh matches`}</button>
          <button class="btn btn-ghost btn-small" type="button" data-action="admin-generate-company-report" data-id="${j(e.id)}" ${i?`disabled`:``}>${r?`Generating...`:`Generate report`}</button>
        </div>
      </td>
    </tr>
  `}function Fu(e){let t={...Gr(),...N.adminOpportunityDraft||{}};return`
    <section class="admin-list">
      <div class="card-header">
        <div>
          <h2>Existing opportunities</h2>
          <p>${(N.opportunities||[]).length} loaded ${N.opportunityLoadError?`from fallback data`:`from Supabase`}.</p>
        </div>
      </div>
      ${vl(e)}
      ${e.length?e.map(Ru).join(``):`<div class="empty-card">No opportunities loaded.</div>`}
    </section>

    <form class="form-card admin-form" id="admin-opportunity-form">
      <div class="form-section">
        <h2>Add opportunity</h2>
        <div class="form-grid">
          <label>Title <input name="title" data-admin-opportunity-field="title" value="${j(t.title)}" required /></label>
          <label>Buyer <input name="buyer" data-admin-opportunity-field="buyer" value="${j(t.buyer)}" /></label>
          <label>Source name <input name="sourceName" data-admin-opportunity-field="sourceName" value="${j(t.sourceName)}" required /></label>
          <label>Category <input name="category" data-admin-opportunity-field="category" value="${j(t.category)}" /></label>
          <label>Type <input name="type" data-admin-opportunity-field="type" value="${j(t.type)}" /></label>
          <label>Deadline <input type="date" name="deadline" data-admin-opportunity-field="deadline" value="${j(t.deadline)}" /></label>
          <label>Published date <input type="date" name="published_date" data-admin-opportunity-field="published_date" value="${j(t.published_date)}" /></label>
          <label>Location <input name="location" data-admin-opportunity-field="location" value="${j(t.location)}" /></label>
          <label>Estimated value <input type="number" min="0" step="1" name="estimated_value" data-admin-opportunity-field="estimated_value" value="${j(t.estimated_value)}" /></label>
          <label>URL <input type="url" name="url" data-admin-opportunity-field="url" value="${j(t.url)}" /></label>
          <label>CPV code <input name="cpv_code" data-admin-opportunity-field="cpv_code" value="${j(t.cpv_code)}" /></label>
          <label>Difficulty <input name="difficulty" data-admin-opportunity-field="difficulty" value="${j(t.difficulty)}" /></label>
          <label>Status <input name="status" data-admin-opportunity-field="status" value="${j(t.status)}" /></label>
        </div>
        <label>Description <textarea name="description" data-admin-opportunity-field="description" rows="4">${j(t.description)}</textarea></label>
        <label>Requirements comma-separated <textarea name="requirements" data-admin-opportunity-field="requirements" rows="3">${j(t.requirements)}</textarea></label>
        <label>Keywords comma-separated <textarea name="keywords" data-admin-opportunity-field="keywords" rows="3">${j(t.keywords)}</textarea></label>
      </div>

      <div class="form-actions">
        <button class="btn btn-primary btn-large" type="submit" ${N.adminSubmitting?`disabled`:``}>
          ${N.adminSubmitting?`Saving...`:`Add opportunity`}
        </button>
      </div>
    </form>

    ${wl()}
  `}function Iu(e){let t=[e.minProjectValue?Xs(e.minProjectValue):`No minimum`,e.maxProjectValue?Xs(e.maxProjectValue):`No maximum`].join(` - `),n=sr(e.website);return`
    <div class="modal-backdrop">
      <div class="modal admin-company-modal" role="dialog" aria-modal="true">
        <div class="modal-header">
          <div>
            <span class="status-pill ${e.profileStatus===`Complete`?`is-success`:`is-running`}">${j(e.profileStatus)}</span>
            <h2>${j(e.companyName)}</h2>
            <p>${j(e.contactEmail||`No contact email`)} · ${j(e.industry||`Unknown industry`)}</p>
          </div>
          <button type="button" class="icon-btn modal-close-btn" data-action="close-admin-company" aria-label="Close company details">×</button>
        </div>
        <div class="modal-body">
          <div class="admin-detail-grid">
            <section class="side-panel">
              <h3>Company basics</h3>
              <p><strong>Email:</strong> ${j(e.contactEmail||`Unknown`)}</p>
              <p><strong>Contact name:</strong> ${j(e.contactName||`Not listed`)}</p>
              <p><strong>Phone:</strong> ${j(e.phone||`Not listed`)}</p>
              <p><strong>Kennitala:</strong> ${j(e.kennitala||`Not listed`)}</p>
              <p><strong>Address:</strong> ${j(e.address||`Not listed`)}</p>
              <p><strong>Website:</strong> ${n?`<a href="${j(n)}" target="_blank" rel="noreferrer">${j(e.website)}</a>`:j(e.website||`Not listed`)}</p>
              <p><strong>Industry:</strong> ${j(e.industry||`Unknown`)}</p>
              <p><strong>Created:</strong> ${j(D(e.createdAt))}</p>

              <h3>Billing</h3>
              <p><strong>Selected plan:</strong> ${j(e.selectedPlan||e.plan||`Not selected`)}</p>
              <p><strong>Billing status:</strong> ${j(e.billingStatus||`Not set`)}</p>
              <p><strong>Billing email:</strong> ${j(e.billingEmail||e.contactEmail||`Not listed`)}</p>
              <p><strong>Trial started:</strong> ${e.trialStartedAt?j(D(e.trialStartedAt)):`Not set`}</p>
              <p><strong>Trial ends:</strong> ${e.trialEndsAt?j(D(e.trialEndsAt)):`Not set`}</p>

              <h3>Project preferences</h3>
              <p><strong>Project size:</strong> ${j(t)}</p>
              <p><strong>Unknown value:</strong> ${e.allowUnknownValue?`Allowed`:`Not preferred`}</p>
              <p><strong>Travel:</strong> ${e.willingToTravel?`Yes`:`No`}</p>
              <p><strong>National:</strong> ${e.nationalProjects?`Yes`:`No`}</p>
              <p><strong>Remote:</strong> ${e.remoteProjects?`Yes`:`No`}</p>
            </section>

            <section class="side-panel">
              <h3>Services</h3>
              ${Lu(e.services,`No services saved.`)}
              <h3>Include keywords</h3>
              ${Lu(e.includeKeywords,`No include keywords saved.`)}
              <h3>Exclude keywords</h3>
              ${Lu(e.excludeKeywords,`No exclude keywords saved.`)}
            </section>

            <section class="side-panel">
              <h3>Locations and service areas</h3>
              <p><strong>Base:</strong> ${j(e.baseLocation||`Not set`)}</p>
              ${Lu([...e.locations,...e.serviceAreas],`No locations saved.`)}
              <h3>Reports</h3>
              <p><strong>Frequency:</strong> ${j(e.reportFrequency)}</p>
              <p><strong>Day:</strong> ${j(e.reportDay)}</p>
              <p><strong>Deadline reminders:</strong> ${e.deadlineReminders?`On`:`Off`}</p>
            </section>

            ${ut(e,{escapeHtml:j,formatDateTime:D,inviteEmail:Oi(e),inviteLink:N.adminCompanyInviteLinks?.[e.id]||``,inviteDebug:N.adminCompanyInviteDebug?.[e.id]||null,actionState:N.adminCompanyAccessActions?.[e.id]||``})}

            ${Ct(e,{escapeHtml:j,actionState})}

            <section class="side-panel">
              <h3>Latest matches</h3>
              ${It(e,{escapeHtml:j,renderMatchDecisionControls:wt})}
              <h3>Latest reports</h3>
              ${e.latestReports.length?`
                <ul class="admin-detail-list">
                  ${e.latestReports.map(e=>`
                    <li>
                      <strong>${j(e.title||`Report`)}</strong>
                      <span>${j(D(e.created_at))}</span>
                    </li>
                  `).join(``)}
                </ul>
              `:`<p>No reports generated yet.</p>`}
            </section>

            ${Lt(e,{escapeHtml:j,formatDateTime:D,actionState:N.adminCompanyAiReviewActions?.[e.id]?`running`:``,filter:N.adminCompanyAiReviewFilter,lastResult:N.adminCompanyAiReviewResults?.[e.id]||null,usageSummary:N.adminAiUsageSummary||null,formatAiUsageCost:ze})}
          </div>
        </div>
      </div>
    </div>
  `}function Lu(e,t){let n=k(e);return n.length?`<div class="admin-tag-list">${n.map(e=>`<span>${j(e)}</span>`).join(``)}</div>`:`<p>${j(t)}</p>`}function Ru(e){let t=N.adminUpdatingId===e.id,n=z(e),r=Ys(e),i=e.rawPayload?.hidden_from_reports===!0||[`hidden`,`noise`,`deleted`].includes(String(e.rawPayload?.admin_report_status||``).toLowerCase()),a=gd(e)?e.rawPayload?.duplicate_reason||`Duplicate of ${e.rawPayload?.canonical_opportunity_id||e.rawPayload?.duplicate_of||`canonical opportunity`}`:``,o=ua({title:e.title,description:e.description,content:`${e.category||``} ${e.source||``} ${Array.isArray(e.keywords)?e.keywords.join(` `):``}`,publishedDate:e.publishedDate,deadline:e.deadline,sourceName:e.source,sourceType:e.sourceType,connectorType:e.rawPayload?.connector_type}),s=e.rawPayload?.stale_reason||(o.isStale?o.reason:``),c=sr(e.url||e.rawPayload?.source_url||``);return`
    <div class="admin-row">
      <div>
        <h3>${j(e.title)}</h3>
        <div class="admin-opportunity-review-meta">
          ${zu(e)}
          <span><strong>Bætt við:</strong> ${j(Vu(e.createdAt))}</span>
          <span><strong>Síðast uppfært:</strong> ${j(Vu(e.updatedAt))}</span>
          <span><strong>Source:</strong> ${j(e.source||`Unknown source`)}</span>
          <span><strong>Deadline:</strong> ${j(r.label||`Not listed`)}</span>
          <span><strong>External ID:</strong> ${j(e.externalId||`Not listed`)}</span>
        </div>
        <p><strong>Source:</strong> ${j(e.source||`Unknown source`)} · <strong>Buyer:</strong> ${j(vu(e))} · <strong>Region:</strong> ${j(yu(e))} · <strong>Status:</strong> ${j(e.status)}</p>
        <p><strong>Source URL:</strong> ${c?`<a href="${j(c)}" target="_blank" rel="noreferrer">${j(c)}</a>`:`Not listed`} · <strong>External ID:</strong> ${j(e.externalId||`Not listed`)}</p>
        <p>Quality: ${j(Jl(e))} · Intent: ${j(ql(n))}${i?` · Hidden from reports`:``}${a?` · Duplicate: ${j(a)}`:``}${s?` · Stale / expired: ${j(s)}`:``}</p>
        <p>Debug: hidden_from_reports=${e.rawPayload?.hidden_from_reports===!0?`true`:`false`} · admin_report_status=${j(e.rawPayload?.admin_report_status||`none`)} · stale_status=${j(e.rawPayload?.stale_status||`none`)}</p>
        ${Hu(e)}
      </div>
      <div class="admin-row-actions">
        <button class="btn btn-ghost btn-small" data-action="admin-report-override" data-override="confirmed_tender" data-id="${j(e.id)}" ${t?`disabled`:``}>Confirmed tender</button>
        <button class="btn btn-ghost btn-small" data-action="admin-report-override" data-override="early_opportunity" data-id="${j(e.id)}" ${t?`disabled`:``}>Early opportunity</button>
        <button class="btn btn-ghost btn-small" data-action="admin-report-override" data-override="include" data-id="${j(e.id)}" ${t?`disabled`:``}>Include in reports</button>
        <button class="btn btn-ghost btn-small" data-action="admin-report-override" data-override="noise" data-id="${j(e.id)}" ${t?`disabled`:``}>News/noise</button>
        <button class="btn btn-ghost btn-small" data-action="admin-report-override" data-override="hide" data-id="${j(e.id)}" ${t?`disabled`:``}>Hide from reports</button>
        <button
          class="btn btn-ghost btn-small"
          data-action="delete-opportunity"
          data-id="${j(e.id)}"
          ${N.adminDeletingId===e.id?`disabled`:``}
        >
          ${N.adminDeletingId===e.id?`Deleting...`:`Delete`}
        </button>
      </div>
    </div>
  `}function zu(e){let t=Bu(e);return t?`<span class="status-pill ${t===`new`?`is-success`:`is-warning`}">${j(t===`new`?`Nýtt`:`Uppfært`)}</span>`:``}function Bu(e){let t=gl(e.createdAt),n=gl(e.updatedAt);return Number.isFinite(t)?!Number.isFinite(n)||Math.abs(n-t)<=120*1e3?`new`:n>t?`updated`:``:``}function Vu(e){return e?D(e):`Not listed`}function Hu(e){let t=N.adminOpportunityFilters?.debugCompanyId||``;if(!t)return``;let n=(N.adminCompanies||[]).find(e=>e.id===t);if(!n)return`<div class="admin-debug-panel">Match debug: selected company not loaded.</div>`;let r=_s(n,e),i=Ku(e,r),a=k(n.services).join(`, `)||`No services`,o=k(n.includeKeywords).join(`, `)||`No include keywords`,s=Uu(n,e),c=Wu(n,e),l=Gu(n,e,r),u=classifyMatchSafety(n,r);return`
    <div class="admin-debug-panel">
      <p><strong>Match debug for ${j(n.companyName)}:</strong> score ${Number(r.matchScore||0)} · ${j(wu(r.matchLabel))}</p>
      <p><strong>Services:</strong> ${j(a)}</p>
      <p><strong>Keywords:</strong> ${j(o)}</p>
      <p><strong>Matched terms:</strong> ${s.length?s.map(e=>`<span class="admin-chip">${j(e)}</span>`).join(` `):`None`}</p>
      <p><strong>Missing profile terms:</strong> ${c.length?c.map(e=>`<span class="admin-chip">${j(e)}</span>`).join(` `):`None`}</p>
      <p><strong>Score contribution:</strong> ${l.map(e=>`<span class="admin-chip">${j(e)}</span>`).join(` `)}</p>
      <p><strong>Matched terms/reasons:</strong> ${(r.matchReasons||[]).map(e=>`<span class="admin-chip">${j(Tu(e))}</span>`).join(` `)||`None`}</p>
      <p><strong>Risks:</strong> ${(r.risks||[]).map(e=>`<span class="admin-chip">${j(Eu(e))}</span>`).join(` `)||`None`}</p>
      <p><strong>Safety:</strong> <span class="admin-chip">${j(xu(u.safetyStatus))}</span> <span class="admin-chip">${j(Su(u.alertEligible))}</span> ${(u.safetyReasons||[]).map(e=>`<span class="admin-chip">${j(e)}</span>`).join(` `)}</p>
      <p><strong>Excluded by:</strong> ${i.length?i.map(e=>`<span class="admin-chip">${j(e)}</span>`).join(` `):`<span class="admin-chip">Not excluded by local dashboard/report filters</span>`}</p>
    </div>
  `}function Uu(e,t){let n=zo(t);return Xo(rr([...k(e.services).filter(e=>Ro(n,e)),...k(e.includeKeywords).filter(e=>Ro(n,e)),...Zo(n),...ts(e)?Qo(n):[]]))}function Wu(e,t){let n=zo(t);return Xo(rr([...k(e.services),...k(e.includeKeywords)].filter(e=>e&&!Ro(n,e)))).slice(0,12)}function Gu(e,t,n){let r=[],i=(n.matchReasons||[]).filter(e=>/^Mentions your service:/i.test(e)).length,a=(n.matchReasons||[]).filter(e=>/^Contains your keyword:/i.test(e)).length;gs(e,t)&&r.push(`+35 industry/category`),i&&r.push(`+${Math.min(35,i*10)} services`),a&&r.push(`+${Math.min(25,a*8)} keywords`);let o=ls(e,t);return o===`local_match`?r.push(`+22 local`):o===`national_match`?r.push(`+16 national`):o===`remote_match`?r.push(`+14 remote`):o===`outside_area_possible`?r.push(`+4 travel possible`):r.push(`-8 low-confidence location`),t.deadline&&E(t.deadline)>=0&&E(t.deadline)<=30&&r.push(`+8 closing soon`),(n.risks||[]).some(e=>/broad construction/i.test(e))&&r.push(`capped broad fit`),(n.risks||[]).some(e=>/winter|snow/i.test(e))&&r.push(`capped winter fit`),(n.risks||[]).some(e=>/indoor|finishing/i.test(e))&&r.push(`downgraded indoor mismatch`),r.length?r:[`No positive score contribution`]}function Ku(e,t){let n=[];return Number(t.matchScore||0)<50&&n.push(`score_below_50 (${Number(t.matchScore||0)})`),kd(e)||n.push(`customer_match_ineligible`),ra(e)||n.push(`dashboard_not_visible`),ws(e)===`hidden`&&n.push(`safety_status_hidden`),Td(N.adminCompanies?.find(e=>e.id===N.adminOpportunityFilters?.debugCompanyId)||{},e)&&n.push(`needs_review_wrong_type_for_company`),Ed(N.adminCompanies?.find(e=>e.id===N.adminOpportunityFilters?.debugCompanyId)||{},e)&&n.push(`design_consulting_or_supervision_only`),e.rawPayload?.hidden_from_reports===!0&&n.push(`hidden_from_reports`),gd(e)&&n.push(`duplicate_secondary`),la(e)&&n.push(`stale_or_expired`),ia(e)&&n.push(`demo_or_test`),n}function qu(){if(!N.user)return Wa();if(!N.profile)return xc(M(`setupCompanyFirst`),M(`reportNeedsProfile`));let e=N.profile,t=cd(e,od()),n=N.reports.find(e=>e.id===N.selectedReportId),r=N.reportArchiveLoading?M(`loadingSavedReports`):N.language===`is`?`${N.reports.length} vistuð yfirlit.`:`${N.reports.length} saved report${N.reports.length===1?``:`s`}.`,i=N.reportArchiveLoading?`<div class="empty-card">${j(M(`loadingSavedReports`))}</div>`:N.reportsLoadError?`<div class="admin-message is-error">Failed to load reports. ${j(N.reportsLoadError)}</div>`:N.reportsLoaded&&N.reports.length===0?`<div class="empty-card">${j(M(`noSavedReports`))}</div>`:N.reports.map(Ju).join(``);return Z(`
    <section class="dashboard-head">
      <div>
        <p class="eyebrow">${j(M(`weeklyReport`))}</p>
        <h1>${j(M(`reportTitle`))}</h1>
        <p>${j(e.companyName||`Your company`)} · ${j(ld(t.periodStart,t.periodEnd))}</p>
        <p class="muted-copy">${j(N.language===`is`?`Sýnir öll núverandi viðeigandi tækifæri, ekki aðeins ný frá síðasta vistaða yfirliti.`:`Showing all current eligible matches, not only new items since the last saved report.`)}</p>
      </div>
      <div class="dashboard-actions">
        <button class="btn btn-primary" data-action="save-report" ${N.reportSaveLoading?`disabled`:``}>
          ${N.reportSaveLoading?j(M(`savingReport`)):j(M(`saveReport`))}
        </button>
        <button class="btn btn-secondary" data-action="download-report-pdf">${j(M(`downloadPdf`))}</button>
        <button class="btn btn-secondary" data-action="copy-report">${j(M(`copyReport`))}</button>
      </div>
    </section>

    ${N.reportMessage?`
      <div class="admin-message ${N.reportMessage.type===`error`?`is-error`:`is-success`}">
        ${j(N.reportMessage.text)}
      </div>
    `:``}

    ${Xu(t,{id:`report-preview`,contactEmail:e.contactEmail,companyName:e.companyName})}

    <section class="report-archive">
      <div class="card-header">
        <div>
          <p class="eyebrow">${j(M(`reportArchive`))}</p>
          <h2>${j(M(`savedReports`))}</h2>
          <p>${r}</p>
        </div>
      </div>
      ${i}
    </section>

    ${n?Zu(n,e):``}
  `)}function Ju(e){let t=Array.isArray(e.report_items)?e.report_items.length:Number(e.itemCount||0),n=N.profile?.companyName||e.companies?.company_name||`Company`,r=N.language===`is`?ud(e.created_at):nr(e.created_at),i=N.language===`is`?`${t} tækifæri`:`${t} item${t===1?``:`s`}`;return un({report:e,title:td(e,n),created:r,itemLabel:i,statusLabel:Yu(e.status),hideLabel:N.language===`is`?`Fela yfirlit`:`Hide report`,viewLabel:M(`viewReport`),escapeHtml:j})}function Yu(e){let t=String(e||`draft`);return N.language===`is`?{generated_all_current:`Heildaryfirlit`,generated_new_only:`Ný tækifæri`,draft:`Vistað yfirlit`}[t]||t:{generated_all_current:`All current`,generated_new_only:`New opportunities`,draft:`Saved report`}[t]||t}function Xu(e,t={}){return dn({report:e,options:t,companyName:t.companyName||N.profile?.companyName||`Company`,dateRange:ld(e.periodStart,e.periodEnd),generatedByLabel:M(`generatedBy`),reportTitleLabel:M(`reportTitle`),closeLabel:M(`closeReport`),escapeHtml:j})}function Zu(e,t,n={}){let r=e.period_start||e.created_at?.slice(0,10)||new Date().toISOString().slice(0,10),i=e.period_end||e.created_at?.slice(0,10)||new Date().toISOString().slice(0,10),a=t.companyName||e.companies?.company_name||`Company`,o=nd(e),s=o.length?rd(o):Qu(e),c=o.length?Gd(e,a,o):ed(e.text_content||``);return Xu({title:td(e,a),periodStart:r,periodEnd:i,htmlContent:s,textContent:c},{companyName:a,closeButton:n.closeButton===void 0?!0:n.closeButton,includeTextArea:n.includeTextArea===void 0?!1:n.includeTextArea,id:n.id||``})}function Qu(e){if(e.html_content&&e.html_content.includes(`report-cover`))return $u(ad(e.html_content));let t=e.period_start||e.created_at?.slice(0,10)||new Date().toISOString().slice(0,10),n=e.period_end||e.created_at?.slice(0,10)||new Date().toISOString().slice(0,10),r=e.html_content?$u(ad(e.html_content)):`<pre>${j(e.text_content||`Ekkert efni var vistað fyrir þetta yfirlit.`)}</pre>`;return`
    <div class="report-cover">
      <div class="report-kicker">Útbúið af VerkRadar</div>
      <p class="eyebrow">Vistað yfirlit</p>
      <h2>${j(e.title||`Vistað yfirlit`)}</h2>
      <p>${j(ld(t,n))}</p>
      <p>${j(e.summary||`Þetta eldra vistaða yfirlit er birt í nýju skýrslusniði.`)}</p>
    </div>
    <div class="report-legacy-content">
      ${r}
    </div>
  `}function $u(e){return Pn(e,N.language)}function ed(e){return Pn(e,N.language)}function td(e,t){return M(`reportForCompany`,{company:String(t||e?.companies?.company_name||`Company`).trim()})}function nd(e){return(Array.isArray(e?.report_items)?[...e.report_items]:[]).sort((e,t)=>Number(e.sort_order||0)-Number(t.sort_order||0)).map(e=>{if(!e.opportunities)return null;let t=Yi(e.opportunities);return{...t,matchScore:Number(e.match_score||0),matchLabel:ys(Number(e.match_score||0)),matchReasons:Sa(t,Array.isArray(e.match_reasons)?e.match_reasons:[]),risks:Array.isArray(e.risks)&&e.risks.length?e.risks:Array.isArray(t.rawPayload?.risks)?t.rawPayload.risks:[],nextSteps:[]}}).filter(Boolean)}function rd(e){let t=id(e);return`
    ${t.confirmed.length?jd(T(`openActiveTitle`,N.language),T(`openActiveDescription`,N.language),t.confirmed):``}
    ${t.possible.length?jd(T(`possibleTitle`,N.language),T(`possibleDescription`,N.language),t.possible):``}
    ${t.early.length?jd(T(`earlyTitle`,N.language),T(`earlyDescription`,N.language),t.early):``}
    <p class="report-footer-note">${j(M(`reportFooter`))}</p>
  `}function id(e){let t={confirmed:[],possible:[],early:[],review:[]};return e.forEach(e=>{let n=fd(e);n===`confirmed`?t.confirmed.push(e):n===`possible`?t.possible.push(e):n===`early`?t.early.push(e):n!==`excluded`&&t.review.push(e)}),t}function ad(e){let t=new DOMParser().parseFromString(String(e||``),`text/html`),n=new Set([`A`,`ARTICLE`,`DIV`,`EM`,`H2`,`H3`,`H4`,`H5`,`LI`,`OL`,`P`,`PRE`,`SECTION`,`SPAN`,`STRONG`,`UL`]),r=new Set([`aria-hidden`,`class`,`href`,`rel`,`target`]);return t.body.querySelectorAll(`*`).forEach(e=>{if(!n.has(e.tagName)){e.replaceWith(...Array.from(e.childNodes));return}Array.from(e.attributes).forEach(t=>{if(!r.has(t.name)){e.removeAttribute(t.name);return}if(t.name===`href`){let n=sr(t.value);n?e.setAttribute(`href`,n):e.removeAttribute(`href`)}})}),t.body.innerHTML}function od(e=`all_current`,t=new Set){return sd({mode:e,previouslyReportedIds:t})}function sd({mode:e=`all_current`,previouslyReportedIds:t=new Set}={}){let n=bs().filter(e=>e.matchScore>=50).filter(e=>pd(e,`all_current`));return tr(e===`new_only`?n.filter(e=>!t.has(e.id)):n).slice(0,8)}function cd(e,t){let n=new Date,r=n.toISOString().slice(0,10),i=new Date(n);i.setDate(i.getDate()-7);let a=i.toISOString().slice(0,10),o=M(`reportForCompany`,{company:e.companyName}),s=dd(t),c=s.confirmed.length+s.possible.length+s.early.length,l=N.language===`is`?`${c} viðeigandi útboðs- eða verðfyrirspurnaratriði fundust fyrir ${e.companyName}.`:`${c} relevant tender/quote-request ${c===1?`item`:`items`} found for ${e.companyName}.`;return{title:o,periodStart:a,periodEnd:r,summary:l,textContent:Wd(e,t),htmlContent:`
    <div class="report-cover">
      <div class="report-kicker">${j(M(`generatedBy`))}</div>
      <p class="eyebrow">${j(M(`reportTitle`))}</p>
      <h2>${j(o)}</h2>
      <p>${j(ld(a,r))}</p>
      <p>${j(l)} ${t[0]?j(N.language===`is`?`Sterkasta sýnilega atriðið er ${t[0].title}.`:`The strongest visible item is ${t[0].title}.`):j(N.language===`is`?`Engin skýr útboð eða verðfyrirspurnir fundust fyrir þetta tímabil.`:`No strict report-ready tenders or quote requests were found for this period.`)}</p>
    </div>

    <div class="report-summary-grid">
      ${Ad(T(`openActiveTitle`,N.language),s.confirmed.length)}
      ${Ad(T(`possibleTitle`,N.language),s.possible.length)}
    </div>

    ${jd(T(`openActiveTitle`,N.language),T(`openActiveDescription`,N.language),s.confirmed)}
    ${s.possible.length?jd(T(`possibleTitle`,N.language),T(`possibleDescription`,N.language),s.possible):``}
    ${s.early.length?jd(T(`earlyTitle`,N.language),T(`earlyDescription`,N.language),s.early):``}

    <p class="report-footer-note">${j(M(`reportFooter`))}</p>
  `}}function ld(e,t){return`${ud(e)} – ${ud(t)}`}function ud(e){if(!e)return`Engin dagsetning`;let t=new Date(`${String(e).slice(0,10)}T00:00:00`);return Number.isNaN(t.getTime())?String(e):N.language===`en`?new Intl.DateTimeFormat(`en-GB`,{year:`numeric`,month:`short`,day:`2-digit`}).format(t):`${t.getDate()}. ${[`janúar`,`febrúar`,`mars`,`apríl`,`maí`,`júní`,`júlí`,`ágúst`,`september`,`október`,`nóvember`,`desember`][t.getMonth()]} ${t.getFullYear()}`}function dd(e){let t={confirmed:[],possible:[],early:[]},n=new Set,r=tr(e);(r.length?r:_d(e)).forEach(e=>{let r=fd(e);r!==`excluded`&&(n.has(e.id)||(n.add(e.id),r===`confirmed`?t.confirmed.push(e):r===`possible`?t.possible.push(e):r===`early`&&t.early.push(e)))});let i=8;for(let e of[`confirmed`,`possible`,`early`]){let n=t[e].slice(0,i);t[e]=n,i=Math.max(0,i-n.length)}return t}function fd(e){let t=$n(e);if(t!==`excluded`||e?.aiReviewFit||e?.ai_review_fit)return t;if(!md(e))return`excluded`;if(er(e))return`confirmed`;let n=z(e);if(n===`confirmed_tender`)return`confirmed`;if(n===`early_opportunity`)return`early`;let r=R(e.qualityStatus,e);return r===`confirmed_tender`?`confirmed`:r===`early_signal`?`early`:`excluded`}function pd(e,t=`all_current`){return md(e)?t===`new_only`?ws(e)===`auto_approved`&&e.alertEligible!==!1:ws(e)!==`hidden`:!1}function md(e){if(!e||ia(e)||ws(e)===`hidden`||!ra(e)||hd(e)||yd(e)||Cd(e)||wd(e)||va(e.title||``)&&!bd(e))return!1;let t=z(e);if(t===`confirmed_tender`)return bd(e)||Sd(e);if(t===`early_opportunity`)return xd(e);let n=R(e.qualityStatus,e);return n===`confirmed_tender`?bd(e)||Sd(e):n===`early_signal`?xd(e):!1}function hd(e){let t=e?.rawPayload||{},n=String(t.admin_report_status||``).toLowerCase();if(n===`include`)return!1;if(t.hidden_from_reports===!0||[`hidden`,`hide`,`noise`,`deleted`].includes(n)||gd(e)||la(e))return!0;let r=z(e);return r===`news_context`||r===`not_opportunity`}function gd(e={}){let t=e.rawPayload||{},n=String(t.canonical_opportunity_id||``);return t.is_duplicate===!0||!!t.duplicate_of||!!n&&!!e.id&&n!==String(e.id)}function _d(e){return[...e].sort((e,t)=>vd(e)-vd(t)||Number(Sd(t))-Number(Sd(e))||Number(bd(t))-Number(bd(e))||t.matchScore-e.matchScore||E(e.deadline)-E(t.deadline))}function vd(e){if(yd(e))return 99;let t=z(e);return t===`confirmed_tender`?0:t===`early_opportunity`?1:10}function yd(e){let t=B(e)?oa(e):String(e?.rawPayload?.tender_state||``).toLowerCase();return[`tender_awarded`,`awarded`,`already_tendered`].includes(t)?!0:H(V(e),[`lægstbjóðandi`,`laegstbjodandi`,`samningur gerður`,`samningur gerdur`,`samningur var`,`samið var`,`samid var`,`útboð hefur farið fram`,`utbod hefur farid fram`,`útboð var auglýst`,`utbod var auglyst`])}function bd(e){return H(V(e),[`útboð`,`utbod`,`útboðsauglýsing`,`utbodsauglysing`,`tilboð`,`tilbod`,`tilboðum`,`tilbodum`,`óskað eftir tilboðum`,`oskad eftir tilbodum`,`verðfyrirspurn`,`verdfyrirspurn`,`forval`,`skilafrestur`,`útboðsgögn`,`utbodsgogn`,`quote request`,`request for quote`,`tender`,`procurement`])}function xd(e){return H(V(e),[`senn í útboð`,`senn i utbod`,`áætlað útboð`,`aaetlad utbod`,`áætlað er að bjóða út`,`aaetlad er ad bjoda ut`,`fyrirhugað útboð`,`fyrirhugad utbod`])}function Sd(e){let t=A(e?.source||``);return[`rikiskaup`,`ríkiskaup`,`utbodsvefur`,`útboðsvefur`,`ted`,`tenders electronic daily`,`procurement`,`tender portal`].some(e=>t.includes(A(e)))}function Cd(e){return Ed(N.profile||{},e)}function wd(e){return Td(N.profile||{},e)}function Td(e,t){return ws(t)!==`needs_review`||!Od([...Array.isArray(t?.safetyReasons)?t.safetyReasons:[],...Array.isArray(t?.risks)?t.risks:[],...Array.isArray(t?.rawPayload?.safety_reasons)?t.rawPayload.safety_reasons:[],...Array.isArray(t?.rawPayload?.risks)?t.rawPayload.risks:[]].filter(Boolean).join(` `))?!1:!Dd(e)}function Ed(e,t){let n=V(t),r=H(n,[`for og verkhönnun`,`for og verkhonnun`,`verkhönnun`,`verkhonnun`,`forhönnun`,`forhonnun`,`verkfræðiráðgjöf`,`verkfraediradgjof`,`ráðgjöf`,`radgjof`,`umsjón`,`umsjon`,`verkefnastjórn`,`verkefnastjorn`,`útboðsgögn hönnun`,`utbodsgogn honnun`]),i=H(n,[`hönnun`,`honnun`]),a=H(n,[`lóðarframkvæmdir`,`lodarframkvaemdir`,`gatnagerð`,`gatnagerd`,`stígagerð`,`stigagerd`,`lagnir`,`regnvatnslagnir`,`jarðvinna`,`jardvinna`,`jarðvegsskipti`,`jardvegsskipti`,`fyllingar`,`grjóthleðsla`,`grjothledsla`,`malbikun`,`hellulögn`,`hellulogn`,`kantsteinar`,`landmótun`,`landmotun`,`yfirborðsfrágangur`,`yfirbordsfragangur`,`bílastæði`,`bilastaedi`]),o=H(n,[`eftirlit`,`umsjón`,`umsjon`,`verkefnastjórn`,`verkefnastjorn`])&&!a;return!r&&!(i&&!a)&&!o?!1:!Dd(e)}function Dd(e={}){return H([e.industry,...Array.isArray(e.services)?e.services:[],...Array.isArray(e.includeKeywords)?e.includeKeywords:[]].filter(Boolean).join(` `),[`hönnun`,`honnun`,`ráðgjöf`,`radgjof`,`verkfræðiráðgjöf`,`verkfraediradgjof`,`verkfræði`,`verkfraedi`,`eftirlit`,`verkefnastjórnun`,`verkefnastjornun`,`útboðsgögn`,`utbodsgogn`,`engineering`,`design`,`consulting`,`project management`,`supervision`])}function Od(e){return H(String(e||``),[`hönnun`,`honnun`,`ráðgjöf`,`radgjof`,`verkfræðiráðgjöf`,`verkfraediradgjof`,`eftirlit`,`umsjón`,`umsjon`,`verkefnastjórn`,`verkefnastjorn`,`design`,`consulting`,`supervision`,`inspection`,`project management`])}function kd(e){if(!e)return!1;let t=e.rawPayload||{};if(String(t.admin_report_status||``).toLowerCase()===`include`)return!0;if(hd(e))return!1;let n=String(t.tender_state||``).toLowerCase();return!([`tender_awarded`,`awarded`,`already_tendered`].includes(n)||la(e)||va(e.title||``)&&!ca(V(e)))}function Ad(e,t){return fn({label:e,value:t,escapeHtml:j})}function jd(e,t,n){return pn({title:e,description:t,opportunities:n,emptyText:N.language===`is`?`Engin atriði í þessum hluta.`:`No items in this section.`,renderOpportunityItem:Md,escapeHtml:j})}function Md(e){let t=!!e.estimatedValue,n={...e,matchReasons:Vn(e.matchReasons,N.language)},r=Ud(e).map(e=>Hn(e,N.language)).filter(Boolean),i=e.deadline?ud(e.deadline):M(`notFound`);return mn({opp:n,valueText:t?Xs(e.estimatedValue):M(`notListed`),deadlineText:i,sourceUrl:sr(e.url),risks:r,fallbackReason:N.language===`is`?`Passar við fyrirtækjaprófílinn.`:`Matches your company profile.`,qualityBadgeHtml:Nd(n),matchBadgeClass:ec(e.matchLabel),matchLabel:Rn(e,N.language),statusText:Ln(N.language),buyerLabel:M(`buyer`),buyerValue:Ld(e),sourceLabel:M(`source`),sourceValue:Id(`source`,e.source),areaLabel:M(`area`),areaValue:Rd(e),deadlineLabel:M(`deadline`),valueLabel:M(`estimatedValue`),whyLabel:M(`whyThisMatters`),risksLabel:M(`risksToCheck`),openSourceLabel:M(`openSource`),sourceMissingLabel:M(`sourceLinkMissing`),formatReason:Vd,formatRisk:$,escapeHtml:j})}function Nd(e){return hn({status:`verify`,label:Bn(e,N.language),escapeHtml:j})}function Pd(e){return lr(e,M)}function Fd(e){return ur(e,M)}function Id(e,t){return dr(e,t,M)}function Ld(e){let t=e?.source||e?.rawPayload?.source_name||``;return Id(`buyer`,mr(e?.buyer,t,e?.rawPayload||{}))}function Rd(e){return hr(e?.source||e?.rawPayload?.source_name||``)||Id(`location`,e?.location)}function zd(e,t){return _r(e,t,{language:N.language,translate:M})}function Bd(e){return gr(e,N.language,M)}function Vd(e){return Vn([vr(e,{language:N.language,translate:M})],N.language)[0]||``}function $(e){return Hn(yr(e,N.language),N.language)}function Hd(e){return br(e,N.language)}function Ud(e){let t=Array.isArray(e.risks)&&e.risks.length?[...e.risks]:[`Open the source page and confirm mandatory requirements.`];return e.deadline||t.unshift(Js(e)),e.estimatedValue||t.push(`Estimated value is not listed in the imported data.`),R(e.qualityStatus,e)===`needs_review`&&t.push(B(e)?`Extracted project signal — verify tender timing in the source article.`:`Imported from broad feed — verify that this is a real tender or business opportunity.`),[...new Set(t.map(e=>String(e||``).trim()).filter(Boolean))]}function Wd(e,t){let n=dd(t),r=[...n.confirmed,...n.possible,...n.early];return`${M(`reportForCompany`,{company:e.companyName})}
${N.language===`is`?`Tímabil`:`Date range`}: ${ld(new Date(Date.now()-10080*60*1e3).toISOString().slice(0,10),new Date().toISOString().slice(0,10))}

${N.language===`is`?`Samantekt`:`Summary`}:
- ${T(`openActiveTitle`,N.language)}: ${n.confirmed.length}
- ${T(`possibleTitle`,N.language)}: ${n.possible.length}
- ${T(`earlyTitle`,N.language)}: ${n.early.length}

${r.length?r.map((e,t)=>`${t+1}. ${e.title}
${N.language===`is`?`Staða`:`Status`}: ${zn(e,N.language)}
${M(`buyer`)}: ${Ld(e)}
${M(`source`)}: ${Id(`source`,e.source)}
${M(`area`)}: ${Rd(e)}
${M(`deadline`)}: ${qs(e)}
${M(`estimatedValue`)}: ${e.estimatedValue?Xs(e.estimatedValue):M(`notListed`)}
${M(`whyThisMatters`)}:
${Vn(e.matchReasons.length?e.matchReasons:[`Matched to your company profile.`],N.language).map(e=>`- ${e}`).join(`
`)}
${M(`risksToCheck`)}:
${Ud(e).map(e=>`- ${Hn($(e),N.language)}`).join(`
`)}
${N.language===`is`?`Næsta skref`:`Next step`}:
${e.url?`${M(`openSource`)}: ${e.url}`:N.language===`is`?`Finnið og staðfestið upprunalega heimild áður en brugðist er við.`:`Find and verify the original source page before acting.`}
`).join(`
`):N.language===`is`?`Engin skýr útboð eða verðfyrirspurnir fundust fyrir þetta tímabil.`:`No report-ready matches were found for this period.`}

VerkRadar`}function Gd(e,t,n){let r=e.period_start||e.created_at?.slice(0,10)||new Date().toISOString().slice(0,10),i=e.period_end||e.created_at?.slice(0,10)||new Date().toISOString().slice(0,10),a=td(e,t),o=id(n),s=[...o.confirmed,...o.possible,...o.early,...o.review];return`${a}
${N.language===`is`?`Tímabil`:`Date range`}: ${ld(r,i)}

${s.length?s.map((e,t)=>`${t+1}. ${e.title}
${N.language===`is`?`Staða`:`Status`}: ${zn(e,N.language)}
${M(`buyer`)}: ${Ld(e)}
${M(`source`)}: ${Id(`source`,e.source)}
${M(`area`)}: ${Rd(e)}
${M(`deadline`)}: ${qs(e)}
${M(`estimatedValue`)}: ${e.estimatedValue?Xs(e.estimatedValue):M(`notListed`)}
${M(`whyThisMatters`)}:
${Vn(e.matchReasons.length?e.matchReasons:[`Matched to your company profile.`],N.language).map(e=>`- ${e}`).join(`
`)}
${M(`risksToCheck`)}:
${Ud(e).map(e=>`- ${Hn($(e),N.language)}`).join(`
`)}
${e.url?`${M(`openSource`)}: ${e.url}`:``}
`).join(`
`):N.language===`is`?`Engin atriði eru vistuð í þessu yfirliti.`:`No items are saved in this report.`}

${M(`reportFooter`)}`}async function Kd(){let e=Wd(N.profile||Dr(),od());try{await navigator.clipboard.writeText(e),W(`Report copied`,`success`)}catch(e){console.error(`Failed to copy report:`,e),W(`Could not copy report`,`error`)}}function qd(e=`report-preview`,t=``){let n=document.getElementById(e);if(!n){W(`No report available to export`,`error`);return}let r=N.profile||Dr(),i=n.cloneNode(!0);i.classList.add(`pdf-compact-report`),i.querySelectorAll(`textarea, .report-close-btn`).forEach(e=>e.remove());let a=i.querySelector(`.report-meta-bar`);if(a){let e=a.querySelector(`div:first-child strong`)?.textContent?.trim()||M(`reportForCompany`,{company:t||r.companyName||`Company`}),n=a.querySelector(`div:last-child span`)?.textContent?.trim()||t||r.companyName||`Company`,i=a.querySelector(`div:last-child strong`)?.textContent?.trim()||``,o=document.querySelector(`.brand-logo`)?.src||document.querySelector(`link[rel="icon"]`)?.href||``;a.innerHTML=``;let s=document.createElement(`div`);s.className=`pdf-report-header-text`;let c=document.createElement(`span`);c.textContent=M(`generatedBy`);let l=document.createElement(`strong`);l.textContent=e||M(`reportForCompany`,{company:n});let u=document.createElement(`em`);if(u.textContent=i,s.append(c,l,u),a.appendChild(s),o){let e=document.createElement(`img`);e.className=`pdf-report-logo`,e.src=o,e.alt=`VerkRadar`,a.appendChild(e)}}let o=i.querySelector(`.report-summary-grid`);o&&o.remove();let s=n.querySelector(`.report-meta-bar div:last-child strong`)?.textContent||new Date().toISOString().slice(0,10),c=Yd(t||r.companyName||`company`,s),l=Array.from(document.querySelectorAll(`link[rel="stylesheet"]`)).map(e=>`<link rel="stylesheet" href="${j(e.href)}">`).join(``),u=window.open(``,`_blank`,`width=1100,height=900`);if(!u){W(`Allow popups to download the report PDF`,`error`);return}u.document.open(),u.document.write(`<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${j(c)}</title>
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
</html>`),u.document.close()}function Jd(){qd(`admin-report-preview`,(N.selectedAdminReport?.id===N.selectedAdminReportId?N.selectedAdminReport:(N.adminReports||[]).find(e=>e.id===N.selectedAdminReportId))?.companies?.company_name||`Company`)}function Yd(e,t){return`VerkRadar-report-${Xd(e)||`company`}-${Xd(String(t||``).replace(/\s+to\s+/i,`-`))||new Date().toISOString().slice(0,10)}.pdf`}function Xd(e){return String(e||``).normalize(`NFD`).replace(/[\u0300-\u036f]/g,``).replace(/[^a-z0-9]+/gi,`-`).replace(/^-+|-+$/g,``).toLowerCase()}function Zd(){return Z(Zt({t:M,escapeHtml:j,trialHref:`/trial`}))}function Qd(){return Z($t({t:M,escapeHtml:j,submitted:N.trialRequestSubmitted,error:N.trialRequestError}))}function $d(){return N.user?N.profileLoading&&!N.profile&&!N.profileDraft?Z(`
      <section class="empty-state">
        <div class="loader-mark" aria-label="${j(N.language===`is`?`Hleð fyrirtækjaprófíl`:`Loading company profile`)}"></div>
        <h1>${j(N.language===`is`?`Hleð fyrirtækjaprófíl...`:`Loading company profile...`)}</h1>
        <p>${j(N.language===`is`?`Sæki vistaðan fyrirtækjaprófíl.`:`Checking your saved company profile.`)}</p>
        <button class="btn btn-secondary" type="button" data-action="retry-settings-profile">${j(N.language===`is`?`Reyna aftur`:`Retry`)}</button>
      </section>
    `):N.profileLoadError&&!N.profile&&!N.profileDraft?Z(`
      <section class="empty-state">
        <h1>${j(N.language===`is`?`Gat ekki hlaðið stillingum`:`Could not load Settings`)}</h1>
        <p>${j(N.profileLoadError)}</p>
        <button class="btn btn-primary" type="button" data-action="retry-settings-profile">${j(N.language===`is`?`Reyna aftur`:`Retry`)}</button>
      </section>
    `):!N.profile&&!N.profileDraft?xc(M(`setupCompanyFirst`),N.language===`is`?`Stillingar eru tiltækar eftir að fyrirtækið hefur verið sett upp.`:`Settings are available after you set up your company.`):Z(gn({t:M,escapeHtml:j,language:N.language,profileDraftDirty:N.profileDraftDirty,profileLoadError:N.profileLoadError,showDemoReset:ef(),profileFormHtml:Al()})):Wa()}function ef(){return!!(N.isAdmin||[`localhost`,`127.0.0.1`,``].includes(window.location.hostname))}eo(),pi();