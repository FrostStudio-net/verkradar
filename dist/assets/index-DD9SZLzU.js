(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={profile:`verkradar_profile`,saved:`verkradar_saved_opportunities`,ignored:`verkradar_ignored_opportunities`,language:`verkradar_language`,selectedPlan:`verkradar_selected_plan`},t={is:{navDashboard:`Mælaborð`,navReport:`Yfirlit`,navPricing:`Verðskrá`,navSettings:`Stillingar`,navHowItWorks:`Hvernig virkar þetta`,navSampleReport:`Sýnishorn`,login:`Innskráning`,logout:`Skrá út`,getStarted:`Fá prufu`,setupCompany:`Setja upp fyrirtæki`,createProfile:`Stofna prófíl`,companyProfile:`Fyrirtækjaprófíll`,noCompanyProfile:`Ekkert fyrirtæki`,openMenu:`Opna valmynd`,closeMenu:`Loka valmynd`,privacyPolicy:`Persónuvernd`,termsOfService:`Skilmálar`,dataSources:`Gagnaheimildir`,cookies:`Vafrakökur`,security:`Öryggi`,contact:`Hafa samband`,footerText:`Vöktun útboða og viðskiptatækifæra fyrir fyrirtæki. VerkRadar hjálpar ykkur að finna og yfirfara opinber tækifæri, en frumgögn eru alltaf endanleg heimild.`,loadingLabel:`Hleð VerkRadar`,heroEyebrow:`Útboðsgreind fyrir verktaka og þjónustufyrirtæki`,heroTitle:`Finnið verðmæt útboð áður en skilafresturinn rennur út.`,heroText:`VerkRadar vaktar opinberar heimildir og skilar stuttu yfirliti yfir tækifæri sem gætu passað við ykkar verkflokka og svæði.`,createFreeDemoProfile:`Fá prufuyfirlit`,viewSampleReport:`Skoða sýnishorn`,proofStrong:`Fyrir verktaka, iðnfyrirtæki og þjónustuaðila.`,proofText:`Vöktun á opinberum heimildum, sveitarfélögum og útboðsvefjum - sett fram sem forgangsraðað yfirlit.`,bestOpenMatch:`Stutt yfirlit`,tender:`Útboð`,deadlineRisk:`Rennur út fljótlega`,daysLeft:`{count} dagar eftir`,problemEyebrow:`Vandinn`,problemTitle:`Útboð tapast oft áður en tilboðsgerðin byrjar.`,problemOneTitle:`Útboð birtast á mörgum mismunandi stöðum.`,problemOneText:`Sveitarfélög, stofnanir og útboðsvefir birta tækifæri á ólíkum síðum og í ólíkum sniðum.`,problemTwoTitle:`Skilafrestir geta verið stuttir.`,problemTwoText:`Það tekur tíma að finna hvað passar við ykkar verkflokka, svæði og stærð verkefna.`,targetEyebrow:`Fyrir hverja?`,targetTitle:`Byggt fyrir íslensk fyrirtæki sem þurfa að finna rétt verkefni fyrr.`,targetText:`VerkRadar hentar fyrirtækjum sem vilja vakta útboð, verðfyrirspurnir og verkefnavísbendingar án þess að opna sömu vefi handvirkt á hverjum degi.`,solutionEyebrow:`Lausnin`,solutionTitle:`Eitt skýrt yfirlit í stað dreifðrar leitar.`,solutionText:`VerkRadar breytir útboðshávaða í forgangsraðaðan lista yfir möguleg tækifæri sem fyrirtækið ætti að skoða.`,createProfileStep:`1. Við setjum upp prófíl`,createProfileStepText:`Við skráum þjónustu, svæði, lykilorð og verkefnastærðir sem henta ykkur.`,matchProjectsStep:`2. Finna tækifæri`,matchProjectsStepText:`Kerfið metur hvaða tækifæri gætu passað við fyrirtækjaprófílinn.`,getReportStep:`3. Fáið yfirlit`,getReportStepText:`Fáið skýrt yfirlit með frestum, ástæðum samsvörunar og næstu skrefum.`,sampleReportEyebrow:`Sýnishorn`,sampleReportTitle:`Stuttlisti sem sýnir hvað er þess virði að skoða.`,sampleReportText:`Sýnishornið sýnir hvernig VerkRadar raðar útboðum og mögulegum tækifærum eftir þjónustu, svæði, fresti og ástæðum.`,sourceDisclaimer:`VerkRadar hjálpar til við að forgangsraða tækifærum. Upprunaleg útboðsgögn eru alltaf endanleg heimild.`,pricingEyebrow:`VERÐSKRÁ`,pricingHeadline:`Einföld verðskrá fyrir útboðsvöktun`,pricingSubtitle:`Byrjaðu í prufu. Við setjum upp prófíl fyrir fyrirtækið og sendum yfirlit ef viðeigandi tækifæri finnast.`,pricingTrialPlan:`Ókeypis prufa`,pricingTrialPrice:`0 kr.`,pricingTrialSubtext:`í prufu`,pricingMonitoringPlan:`Grunnur`,pricingMonitoringPrice:`9.900 kr/mán.`,pricingMonitoringSubtext:`fyrir fyrstu fyrirtækin`,pricingCustomPlan:`Sérsniðið`,pricingCustomPrice:`Hafa samband`,pricingBadge:`Hentar flestum fyrirtækjum`,pricingTrialCta:`Fá prufuyfirlit`,pricingMonitoringCta:`Fá prufu`,pricingCustomCta:`Hafa samband`,pricingTrialManualProfile:`Fyrirtækjaprófíll settur upp handvirkt`,pricingTrialFiltering:`Síun eftir þjónustu og svæði`,pricingTrialReportIfRelevant:`Prufuyfirlit sent ef viðeigandi tækifæri finnast`,pricingTrialNoCommitment:`Engin binding`,pricingTrialNoCard:`Engin greiðslukort`,pricingMonitoringSources:`Vöktun á opinberum útboðum og tækifærum`,pricingMonitoringEmail:`Stutt yfirlit sent í tölvupósti`,pricingMonitoringFilters:`Síun eftir þjónustu, svæði og leitarorðum`,pricingMonitoringReminders:`Áminningar um mikilvæg skilafresti`,pricingMonitoringFeedback:`Prófíll uppfærður eftir endurgjöf`,pricingOneProfile:`1 fyrirtækjaprófíll`,pricingCustomProfiles:`Fleiri fyrirtækjaprófílar`,pricingCustomServices:`Fleiri þjónustusvið eða svæði`,pricingCustomMonitoring:`Sérstillt vöktun`,pricingCustomPriorityReview:`Forgangsyfirferð`,pricingCustomAudience:`Fyrir stærri verktaka eða þjónustufyrirtæki`,trialRequestEyebrow:`PRUFA`,trialRequestTitle:`Fá prufuyfirlit`,trialRequestSubtitle:`Segðu okkur aðeins frá fyrirtækinu. Við skoðum upplýsingarnar og setjum upp prufuprófíl ef þetta passar.`,trialCompany:`Fyrirtæki`,trialContact:`Tengiliður`,trialEmail:`Netfang`,trialPhone:`Sími`,trialServices:`Hvaða þjónustu bjóðið þið?`,trialRegions:`Hvaða svæði viljið þið fylgjast með?`,trialNotes:`Athugasemd`,trialRequestHelper:`Við skoðum upplýsingarnar og setjum upp prufuprófíl ef þetta passar.`,trialRequestSubmit:`Senda beiðni`,trialRequestSuccess:`Takk fyrir. Við skoðum upplýsingarnar og höfum samband ef VerkRadar passar við ykkar þjónustu.`,trialRequestError:`Gat ekki sent beiðni. Reynið aftur eða sendið okkur tölvupóst.`,publicSignupUnavailableTitle:`Aðgangur er stofnaður í gegnum boð`,publicSignupUnavailableText:`Viltu fá prufu? Fylltu út formið hér.`,publicSignupUnavailableHelp:`VerkRadar er sett upp handvirkt fyrir prufufyrirtæki. Við stofnum aðgang þegar fyrirtækjaprófíllinn er tilbúinn.`,tryDemoTitle:`Prófið sýnimælaborðið.`,tryDemoText:`Hlaðið sýnifyrirtæki og sjáið hvernig tækifærin raðast.`,loadDemoCompany:`Hlaða sýnifyrirtæki`,authLoginTitle:`Skrá inn í VerkRadar`,authLoginSubtitle:`Fáið aðgang að mælaborði, vistuðum tækifærum og vikuyfirlitum.`,email:`Netfang`,password:`Lykilorð`,forgotPassword:`Gleymt lykilorð?`,loggingIn:`Skrái inn...`,newToVerkRadar:`Ný hjá VerkRadar?`,createAccount:`Stofna aðgang`,createAccountTitle:`Stofna VerkRadar aðgang`,createAccountSubtitle:`Byrjið á að stofna aðgang. Síðan stofnið þið fyrirtækjaprófíl.`,inviteCreateAccountSubtitle:`Stofnaðu aðgang til að tengjast fyrirtækjaprófílnum sem hefur þegar verið settur upp.`,authRequiredTitle:`Skráðu þig inn til að halda áfram`,authRequiredText:`Þessi síða er aðgengileg eftir innskráningu.`,alreadyLoggedInTitle:`Þú ert þegar skráð(ur) inn`,alreadyLoggedInText:`Beini þér á næsta skref.`,signupCreatedConfirm:`Aðgangur stofnaður. Athugaðu tölvupóstinn þinn til að staðfesta aðganginn.`,inviteSignupCreatedConfirm:`Staðfestu netfangið í tölvupósti og komdu svo aftur til að virkja aðganginn.`,inviteSignupEmailHelp:`Notaðu boðna netfangið til að tengja aðganginn við rétt fyrirtæki.`,signupExistingAccount:`Þetta netfang er þegar með aðgang. Skráðu þig inn eða endurstilltu lykilorð.`,signupNeutralNextSteps:`Ef aðgangur er til fyrir þetta netfang færðu tölvupóst með næstu skrefum. Annars hefur nýr aðgangur verið stofnaður.`,emailOrPasswordIncorrect:`Netfang eða lykilorð er rangt.`,confirmEmailBeforeLogin:`Staðfestu netfangið þitt áður en þú skráir þig inn.`,passwordTooShort:`Lykilorð þarf að vera að minnsta kosti 6 stafir.`,tooManyAttempts:`Of margar tilraunir. Bíddu aðeins og reyndu aftur.`,couldNotCreateAccount:`Gat ekki stofnað aðgang. Athugaðu netfang og lykilorð.`,couldNotLogin:`Gat ekki skráð þig inn. Reyndu aftur.`,creating:`Stofna...`,alreadyHaveAccount:`Ertu þegar með aðgang?`,passwordReset:`Endurstilla lykilorð`,resetPasswordTitle:`Endurstilla lykilorð`,resetPasswordSubtitle:`Sláið inn netfang og VerkRadar sendir öruggan hlekk ef aðgangur er til.`,sending:`Sendi...`,sendResetLink:`Senda hlekk`,rememberedPassword:`Manstu lykilorðið?`,backToLogin:`Til baka í innskráningu`,newPassword:`Nýtt lykilorð`,chooseNewPassword:`Veldu nýtt lykilorð`,resetPasswordHelp:`Settu nýtt lykilorð fyrir VerkRadar aðganginn. Ef hlekkurinn er útrunninn skaltu biðja um nýjan.`,confirmNewPassword:`Staðfesta nýtt lykilorð`,updating:`Uppfæri...`,updatePassword:`Uppfæra lykilorð`,needNewLink:`Þarftu nýjan hlekk?`,sendAnotherResetLink:`Senda annan hlekk`,onboarding:`UPPSETNING`,onboardingTitle:`Settu upp fyrirtækið`,onboardingText:`Segðu okkur hvað fyrirtækið gerir svo VerkRadar geti fundið viðeigandi tækifæri.`,companyBasics:`1. Grunnupplýsingar`,accountAccess:`Aðgangur`,loginEmail:`Innskráningarnetfang`,loginEmailHelper:`Innskráningarnetfangið er tengt notandaaðganginum og getur verið annað en tengiliðanetfang eða netfang fyrir reikninga fyrirtækisins.`,companyName:`Fyrirtækisnafn`,kennitala:`Kennitala`,contactEmail:`Tengiliðanetfang`,billingEmail:`Netfang fyrir reikninga`,contactName:`Nafn tengiliðar`,phone:`Sími`,address:`Heimilisfang`,website:`Vefsíða`,industry:`Atvinnugrein`,selectIndustry:`Veldu atvinnugrein`,selectedPlan:`Valin áskrift`,plan_basic:`Grunnur`,plan_pro:`Pro`,plan_priority:`Forgangur`,servicesAndKeywords:`2. Þjónustur og leitarorð`,servicesHint:`Bætið við þjónustu sem þið bjóðið raunverulega upp á. Veldu mikilvægustu atriðin fyrst.`,servicesLabel:`Þjónustur`,servicesHelper:`Skráið þjónustuna sem fyrirtækið selur. Nákvæmari þjónusta gefur betri samsvaranir.`,extraWords:`Leitarorð`,includeKeywordsHelper:`Notið orð sem birtast oft í tækifærum sem þið viljið fá.`,excludeWords:`Orð sem ættu að lækka eða fjarlægja slæmar samsvaranir.`,excludeKeywordsHelper:`Orð sem ættu að lækka eða fjarlægja slæmar samsvaranir.`,suggestedServicesFor:`Tillögur að þjónustu fyrir {industry}`,suggestedKeywordsFor:`Tillögur að leitarorðum fyrir {industry}`,selectIndustryForServices:`Veljið atvinnugrein til að sjá þjónustutillögur`,selectIndustryForKeywords:`Veljið atvinnugrein til að sjá leitarorðatillögur`,locationsTitle:`3. Svæði`,locationsHint:`Notið Allt landið fyrir landsdekkandi útboð. Notið ferðastillingar ef þið getið boðið utan heimasvæðis fyrir rétt verkefni.`,baseLocation:`Heimasvæði`,baseLocationPlaceholder:`Dæmi: Austurland`,serviceAreas:`Þjónustusvæði, aðskilin með kommu`,serviceAreasPlaceholder:`Dæmi: Austurland, Allt landið`,travelScope:`Ferðir og umfang`,willingToTravel:`Tilbúin að ferðast fyrir rétt verkefni`,includeNational:`Sýna landsdekkandi tækifæri`,includeRemote:`Sýna fjarvinnu / netverkefni`,minimumTravelValue:`Lágmarksverðmæti fyrir ferðalög`,projectSize:`4. Stillingar`,minimumValue:`Lágmarksverðmæti`,maximumValue:`Hámarksverðmæti`,showUnknownValue:`Sýna tækifæri þó verðmæti vanti`,reportPreferences:`Yfirlitsstillingar`,frequency:`Tíðni`,weekly:`Vikulega`,daily:`Daglega`,reportDay:`Dagur yfirlits`,deadlineReminders:`Áminningar um skilafresti`,includeLowConfidence:`Sýna óvissar samsvaranir`,saveProfile:`Vista prófíl`,saving:`Vista...`,saved:`Vistað`,dashboard:`Mælaborð`,welcomeCompany:`Velkomin, {company}`,dashboardIntro:`Forgangsraðaðar tækifærasamsvaranir út frá þjónustu, svæðum og leitarorðum. {refresh}`,matchesLastRefreshed:`Síðast uppfært {time}.`,matchesAutoRefresh:`Samsvaranir uppfærast sjálfkrafa eftir vistun prófíls.`,refreshMatches:`Uppfæra samsvaranir`,refreshing:`Uppfæri...`,viewWeeklyReport:`Skoða yfirlit`,strongMatches:`Sterkar samsvaranir`,closingSoon:`Rennur út fljótlega`,savedLabel:`Vistað`,totalPotentialValue:`Áætlað heildarverðmæti`,searchOpportunities:`Leita í tækifærum...`,savedOnly:`Aðeins vistað`,improveProfile:`Bæta prófíl`,includeNationalOpportunities:`Sýna landsdekkandi tækifæri`,showAllStoredMatches:`Sýna allar samsvaranir`,inspectAllOpportunities:`Skoða öll tækifæri`,details:`Nánar`,save:`Vista`,ignore:`Hunsa`,originalLanguage:`Upprunalegt tungumál`,extractedProject:`Útdregið verkefni`,reportTitle:`Útboðs- og verkefnayfirlit`,setupCompanyFirst:`Settu fyrst upp fyrirtækið`,reportNeedsProfile:`Yfirlitið þarf fyrirtækjaprófíl til að geta fundið viðeigandi tækifæri.`,dashboardNeedsProfile:`Mælaborðið þarf fyrirtækjaprófíl til að reikna viðeigandi samsvaranir.`,weeklyReport:`Yfirlit`,saveReport:`Vista yfirlit`,savingReport:`Vista...`,downloadPdf:`Sækja PDF`,copyReport:`Afrita yfirlit`,reportArchive:`Yfirlitssafn`,savedReports:`Vistuð yfirlit`,loadingSavedReports:`Hleð vistuð yfirlit...`,noSavedReports:`Engin vistuð yfirlit enn.`,viewReport:`Skoða yfirlit`,closeReport:`Loka yfirliti`,generatedBy:`Útbúið af VerkRadar`,reportForCompany:`Útboðs- og verkefnayfirlit fyrir {company}`,openTenders:`Opin útboð / verðfyrirspurnir`,upcomingOpportunities:`Möguleg væntanleg tækifæri`,openTendersDescription:`Skýr útboðs- eða verðfyrirspurnarmerki. Yfirfarið frumgögn áður en brugðist er við.`,upcomingDescription:`Væntanleg útboðs- eða verkefnamerki með skýrum vísbendingum.`,reportFooter:`VerkRadar hjálpar til við að forgangsraða yfirferð opinberra tækifæra. Staðfestið alltaf útboðsgögn, skilafresti, kröfur og hæfi á upprunalegri heimild áður en brugðist er við.`,buyer:`Kaupandi`,source:`Heimild`,description:`Lýsing`,requirements:`Kröfur`,noSpecificRequirements:`Engar sérstakar kröfur skráðar.`,noDescription:`Engin lýsing tiltæk.`,noMatchReasons:`Engar ástæður samsvörunar tiltækar.`,matchReasons:`Ástæður samsvörunar`,opportunityInfo:`Upplýsingar um tækifæri`,extraction:`Útdráttur`,sourceArticle:`Heimildargrein`,parentArticle:`Upprunagrein`,openSourceArticle:`Opna heimildargrein`,extractedRegion:`Útdregið svæði`,projectNumber:`Verknúmer`,tenderState:`Staða útboðs`,quality:`Gæði`,category:`Flokkur`,type:`Tegund`,published:`Birt`,cpv:`CPV`,recommendedNextSteps:`Ráðlögð næstu skref`,noMajorRisks:`Engar stórar áhættur greindar í þessum gögnum.`,openSourceAndConfirm:`Opnið upprunalega heimild og staðfestið hæfi.`,removeFromSaved:`Fjarlægja úr vistuðum`,saveOpportunity:`Vista tækifæri`,markNotRelevant:`Merkja sem ekki viðeigandi`,publicProcurement:`Opinbert útboð`,area:`Svæði`,deadline:`Skilafrestur`,estimatedValue:`Áætlað verðmæti`,notFound:`Fannst ekki`,notListed:`Ekki gefið upp`,unknownBuyer:`Óþekktur kaupandi`,allIceland:`Allt landið`,whyThisMatters:`Af hverju þetta gæti skipt máli`,risksToCheck:`Atriði til að staðfesta`,openSource:`Opna heimild`,sourceLinkMissing:`Heimildartengil vantar`,strongMatch:`Sterk samsvörun`,goodMatch:`Góð samsvörun`,possibleMatch:`Möguleg samsvörun`,weakMatch:`Veik samsvörun`,confirmedTender:`Staðfest útboð`,likelyOpportunity:`Líklegt tækifæri`,earlySignal:`Væntanlegt tækifæri`,needsReview:`Þarfnast staðfestingar`,tenderAwarded:`Útboði lokið / samið`,tenderAlreadyAnnounced:`Útboð þegar auglýst`,upcomingTender:`Væntanlegt útboð`,projectSignal:`Verkefnavísbending`,nationalOpportunity:`Landsdekkandi tækifæri`,localMatch:`Staðbundin samsvörun`,mentionsService:`Nefnir þjónustu ykkar: {value}`,containsKeyword:`Inniheldur leitarorð: {value}`,procurement:`innkaup`},en:{navDashboard:`Dashboard`,navReport:`Report`,navPricing:`Pricing`,navSettings:`Settings`,navHowItWorks:`How it works`,navSampleReport:`Sample report`,login:`Login`,logout:`Logout`,getStarted:`Get a trial`,setupCompany:`Set up company`,createProfile:`Create profile`,companyProfile:`Company profile`,noCompanyProfile:`No company`,openMenu:`Open menu`,closeMenu:`Close menu`,privacyPolicy:`Privacy`,termsOfService:`Terms`,dataSources:`Data sources`,cookies:`Cookies`,security:`Security`,contact:`Contact`,footerText:`Tender and opportunity monitoring for businesses. VerkRadar helps you find and review public opportunities, but source documents remain the authority.`,loadingLabel:`Loading VerkRadar`,heroEyebrow:`Tender intelligence for working contractors`,heroTitle:`Stop losing valuable jobs to tabs you never opened.`,heroText:`VerkRadar monitors public sources and returns a short report of opportunities that may fit your trades and service areas.`,createFreeDemoProfile:`Get a trial report`,viewSampleReport:`View sample report`,proofStrong:`Contractors find relevant opportunities faster.`,proofText:`Top matches often include tenders outside the main databases.`,bestOpenMatch:`Shortlist`,tender:`Tender`,deadlineRisk:`Deadline risk`,daysLeft:`{count} days left`,problemEyebrow:`The problem`,problemTitle:`Opportunities are often lost before bidding starts.`,problemOneTitle:`Deadlines show up after your crew is already booked.`,problemOneText:`A short response window becomes a scramble, or a valuable contract never gets priced.`,problemTwoTitle:`The search takes longer than the go/no-go call.`,problemTwoText:`Owners spend hours opening low-fit tenders instead of seeing value, location, requirements and match reasons in one view.`,targetEyebrow:`Who it is for`,targetTitle:`Built for Icelandic companies that need to find the right jobs earlier.`,targetText:`VerkRadar is for teams that want to monitor tenders, quote requests and project signals without checking the same websites manually every day.`,solutionEyebrow:`The solution`,solutionTitle:`One clear report instead of scattered searching.`,solutionText:`VerkRadar turns tender noise into a ranked list of possible opportunities your business should review.`,createProfileStep:`1. We set up a profile`,createProfileStepText:`We register the services, regions, keywords and project sizes that fit your company.`,matchProjectsStep:`2. Find opportunities`,matchProjectsStepText:`The system checks which opportunities may fit the company profile.`,getReportStep:`3. Get report`,getReportStepText:`Receive a clear weekly report with deadlines and next steps.`,sampleReportEyebrow:`Sample report`,sampleReportTitle:`A shortlist that shows what is worth checking.`,sampleReportText:`Preview how VerkRadar ranks tenders and possible opportunities by service, region, deadline and reasons.`,sourceDisclaimer:`VerkRadar helps prioritize opportunity review. Original tender documents are always the final authority.`,pricingEyebrow:`PRICING`,pricingHeadline:`Simple pricing for tender monitoring`,pricingSubtitle:`Start with a trial. We set up a company profile and send a report if relevant opportunities are found.`,pricingTrialPlan:`Free trial`,pricingTrialPrice:`0 kr.`,pricingTrialSubtext:`during trial`,pricingMonitoringPlan:`VerkRadar Monitoring`,pricingMonitoringPrice:`9,900 kr/month`,pricingMonitoringSubtext:`for the first companies`,pricingCustomPlan:`Custom`,pricingCustomPrice:`Contact us`,pricingBadge:`Best for most businesses`,pricingTrialCta:`Get trial report`,pricingMonitoringCta:`Get a trial`,pricingCustomCta:`Contact us`,pricingTrialManualProfile:`Company profile set up manually`,pricingTrialFiltering:`Filtering by services and regions`,pricingTrialReportIfRelevant:`Trial report sent if relevant opportunities are found`,pricingTrialNoCommitment:`No commitment`,pricingTrialNoCard:`No credit card`,pricingMonitoringSources:`Monitoring of public tenders and opportunities`,pricingMonitoringEmail:`Short report sent by email`,pricingMonitoringFilters:`Filtering by services, regions and keywords`,pricingMonitoringReminders:`Reminders for important deadlines`,pricingMonitoringFeedback:`Profile updated based on feedback`,pricingOneProfile:`1 company profile`,pricingCustomProfiles:`More company profiles`,pricingCustomServices:`More service areas or regions`,pricingCustomMonitoring:`Custom monitoring`,pricingCustomPriorityReview:`Priority review`,pricingCustomAudience:`For larger contractors or service companies`,trialRequestEyebrow:`TRIAL`,trialRequestTitle:`Get a trial report`,trialRequestSubtitle:`Tell us a little about your company. We will review the information and set up a trial profile if this fits.`,trialCompany:`Company`,trialContact:`Contact person`,trialEmail:`Email`,trialPhone:`Phone`,trialServices:`What services do you provide?`,trialRegions:`Which regions do you want to monitor?`,trialNotes:`Notes`,trialRequestHelper:`We will review the information and set up a trial profile if this fits.`,trialRequestSubmit:`Send request`,trialRequestSuccess:`Thanks. We will review the information and follow up if VerkRadar fits your services.`,trialRequestError:`Could not submit the request. Please try again or email us.`,publicSignupUnavailableTitle:`Accounts are created through an invite`,publicSignupUnavailableText:`Want a trial? Fill out the form here.`,publicSignupUnavailableHelp:`VerkRadar is set up manually for trial companies. We create access when the company profile is ready.`,tryDemoTitle:`Try the demo dashboard now.`,tryDemoText:`Load a sample company profile and see how the matching works.`,loadDemoCompany:`Load demo company`,authLoginTitle:`Login to VerkRadar`,authLoginSubtitle:`Access your company dashboard, saved opportunities and weekly reports.`,email:`Email`,password:`Password`,forgotPassword:`Forgot password?`,loggingIn:`Logging in...`,newToVerkRadar:`New to VerkRadar?`,createAccount:`Create account`,createAccountTitle:`Create your VerkRadar account`,createAccountSubtitle:`Start by creating an account. Then you’ll create your company profile.`,inviteCreateAccountSubtitle:`Create an account to connect to the company profile that has already been set up.`,authRequiredTitle:`Log in to continue`,authRequiredText:`This page is available after you sign in.`,alreadyLoggedInTitle:`Already logged in`,alreadyLoggedInText:`Redirecting you to the next step.`,signupCreatedConfirm:`Account created. Check your email to confirm your account.`,inviteSignupCreatedConfirm:`Confirm your email, then return here to activate company access.`,inviteSignupEmailHelp:`Use the invited email to connect your login to the right company.`,signupExistingAccount:`This email already has an account. Log in or reset your password.`,signupNeutralNextSteps:`If an account exists for this email, you’ll receive an email with next steps. Otherwise, a new account has been created.`,emailOrPasswordIncorrect:`Email or password is incorrect.`,confirmEmailBeforeLogin:`Please confirm your email before logging in.`,passwordTooShort:`Password must be at least 6 characters.`,tooManyAttempts:`Too many attempts. Please wait a moment and try again.`,couldNotCreateAccount:`Could not create account. Please check your email and password.`,couldNotLogin:`Could not log in. Please try again.`,creating:`Creating...`,alreadyHaveAccount:`Already have an account?`,passwordReset:`Password reset`,resetPasswordTitle:`Reset your password`,resetPasswordSubtitle:`Enter your email and VerkRadar will send a secure reset link if the account exists.`,sending:`Sending...`,sendResetLink:`Send reset link`,rememberedPassword:`Remembered your password?`,backToLogin:`Back to login`,newPassword:`New password`,chooseNewPassword:`Choose a new password`,resetPasswordHelp:`Set a new password for your VerkRadar account. If the link has expired, request a new reset link.`,confirmNewPassword:`Confirm new password`,updating:`Updating...`,updatePassword:`Update password`,needNewLink:`Need a new link?`,sendAnotherResetLink:`Send another reset link`,onboarding:`SETUP`,onboardingTitle:`Set up your company`,onboardingText:`Tell us what your company does so VerkRadar can find relevant opportunities.`,companyBasics:`1. Basic information`,accountAccess:`Account access`,loginEmail:`Login email`,loginEmailHelper:`The login email is tied to the user account and may differ from the company contact or billing email.`,companyName:`Company name`,kennitala:`Kennitala`,contactEmail:`Contact email`,billingEmail:`Billing email`,contactName:`Contact name`,phone:`Phone`,address:`Address`,website:`Website`,industry:`Industry`,selectIndustry:`Select industry`,selectedPlan:`Selected plan`,plan_basic:`Basic`,plan_pro:`Pro`,plan_priority:`Priority`,servicesAndKeywords:`2. Services and keywords`,servicesHint:`Add services you actually provide. Start with the most important ones.`,servicesLabel:`Services`,servicesHelper:`Add the services your company actually sells. More specific services create better matches.`,extraWords:`Keywords`,includeKeywordsHelper:`Use words that often appear in opportunities you want.`,excludeWords:`Words that should lower or remove bad matches.`,excludeKeywordsHelper:`Words that should lower or remove bad matches.`,suggestedServicesFor:`Suggested services for {industry}`,suggestedKeywordsFor:`Suggested keywords for {industry}`,selectIndustryForServices:`Select an industry to see service suggestions`,selectIndustryForKeywords:`Select an industry to see keyword suggestions`,locationsTitle:`3. Locations`,locationsHint:`Use All Iceland for national tenders. Use travel settings when you can bid outside your base area for the right project size.`,baseLocation:`Base location`,baseLocationPlaceholder:`Example: East Iceland`,serviceAreas:`Service areas, comma separated`,serviceAreasPlaceholder:`Example: East Iceland, All Iceland`,travelScope:`Travel and scope`,willingToTravel:`Willing to travel for the right project`,includeNational:`Include national / All Iceland opportunities`,includeRemote:`Include remote / online opportunities`,minimumTravelValue:`Minimum project value for travel`,projectSize:`4. Settings`,minimumValue:`Minimum value`,maximumValue:`Maximum value`,showUnknownValue:`Show opportunities even if value is unknown`,reportPreferences:`Report preferences`,frequency:`Frequency`,weekly:`Weekly`,daily:`Daily`,reportDay:`Report day`,deadlineReminders:`Deadline reminders`,includeLowConfidence:`Include low-confidence matches`,saveProfile:`Save profile`,saving:`Saving...`,saved:`Saved`,dashboard:`Dashboard`,welcomeCompany:`Welcome, {company}`,dashboardIntro:`Ranked project opportunities based on your services, locations and keywords. {refresh}`,matchesLastRefreshed:`Last refreshed {time}.`,matchesAutoRefresh:`Matches refresh automatically after profile saves.`,refreshMatches:`Refresh matches`,refreshing:`Refreshing...`,viewWeeklyReport:`View report`,strongMatches:`Strong matches`,closingSoon:`Closing soon`,savedLabel:`Saved`,totalPotentialValue:`Total potential value`,searchOpportunities:`Search opportunities...`,savedOnly:`Saved only`,improveProfile:`Improve profile`,includeNationalOpportunities:`Include national opportunities`,showAllStoredMatches:`Show all matches`,inspectAllOpportunities:`Inspect all opportunities`,details:`Details`,save:`Save`,ignore:`Ignore`,originalLanguage:`Original language`,extractedProject:`Extracted project`,reportTitle:`Tender and opportunity report`,setupCompanyFirst:`Set up your company first`,reportNeedsProfile:`The report needs a company profile before it can generate relevant opportunity matches.`,dashboardNeedsProfile:`The dashboard needs a company profile so it can calculate relevant opportunity matches.`,weeklyReport:`Report`,saveReport:`Save report`,savingReport:`Saving...`,downloadPdf:`Download PDF`,copyReport:`Copy report`,reportArchive:`Report archive`,savedReports:`Saved reports`,loadingSavedReports:`Loading saved reports...`,noSavedReports:`No saved reports yet.`,viewReport:`View report`,closeReport:`Close report`,generatedBy:`Generated by VerkRadar`,reportForCompany:`Tender and opportunity report for {company}`,openTenders:`Open tenders / quote requests`,upcomingOpportunities:`Possible upcoming opportunities`,openTendersDescription:`Clear procurement intent. Review source documents before acting.`,upcomingDescription:`Upcoming procurement or project signals with clear evidence.`,reportFooter:`VerkRadar helps prioritise public opportunity review. Always check the original source documents, deadlines, requirements and eligibility before acting.`,buyer:`Buyer`,source:`Source`,description:`Description`,requirements:`Requirements`,noSpecificRequirements:`No specific requirements listed.`,noDescription:`No description available.`,noMatchReasons:`No match reasons available.`,matchReasons:`Match reasons`,opportunityInfo:`Opportunity info`,extraction:`Extraction`,sourceArticle:`Source article`,parentArticle:`Parent article`,openSourceArticle:`Open source article`,extractedRegion:`Extracted region`,projectNumber:`Project number`,tenderState:`Tender state`,quality:`Quality`,category:`Category`,type:`Type`,published:`Published`,cpv:`CPV`,recommendedNextSteps:`Recommended next steps`,noMajorRisks:`No major risks detected in this data.`,openSourceAndConfirm:`Open the source notice and confirm eligibility.`,removeFromSaved:`Remove from saved`,saveOpportunity:`Save opportunity`,markNotRelevant:`Mark not relevant`,publicProcurement:`Public procurement`,area:`Location`,deadline:`Deadline`,estimatedValue:`Estimated value`,notFound:`Not found`,notListed:`Not listed`,unknownBuyer:`Unknown buyer`,allIceland:`All Iceland`,whyThisMatters:`Why this matters`,risksToCheck:`Risks / things to check`,openSource:`Open source`,sourceLinkMissing:`Source link missing`,strongMatch:`Strong match`,goodMatch:`Good match`,possibleMatch:`Possible match`,weakMatch:`Weak match`,confirmedTender:`Confirmed tender`,likelyOpportunity:`Likely opportunity`,earlySignal:`Early signal`,needsReview:`Needs review`,tenderAwarded:`Tender awarded`,tenderAlreadyAnnounced:`Tender already announced`,upcomingTender:`Upcoming tender`,projectSignal:`Project signal`,nationalOpportunity:`National opportunity`,localMatch:`Local match`,mentionsService:`Mentions your service: {value}`,containsKeyword:`Contains your keyword: {value}`,procurement:`procurement`}};function n(e){let t=localStorage.getItem(e.language);return t===`en`||t===`is`?t:`is`}function r(e,n,r={}){let i=t[e||`is`]||t.is,a=t.en[n]||t.is[n]||n;return String(i[n]||a).replace(/\{(\w+)\}/g,(e,t)=>r[t]??``)}var i={services:{Electrical:[`raflagnir`,`rafvirki`,`brunakerfi`,`öryggiskerfi`,`lýsing`,`viðhald`,`þjónusta`,`hleðslustöðvar`,`töflusmíði`,`rafmagnseftirlit`],"IT / Web / Software":[`vefsíðugerð`,`vefhönnun`,`hugbúnaðarþróun`,`kerfisþróun`,`vefverslun`,`aðgengi`,`CMS`,`gagnagrunnar`,`viðhald`,`ráðgjöf`],Cleaning:[`Office cleaning`,`School cleaning`,`Facility cleaning`,`Window cleaning`,`Deep cleaning`,`Floor care`,`Municipal cleaning`,`Regular cleaning contracts`],Transport:[`Passenger transport`,`Goods transport`,`Healthcare transport`,`School transport`,`Shuttle services`,`Delivery services`,`Framework transport services`],Construction:[`jarðvinna`,`gatnagerð`,`vegagerð`,`malbikun`,`brúargerð`,`lagnavinna`,`framkvæmdir`,`viðhald`,`steypa`,`húsbyggingar`,`þakvinna`]},includeKeywords:{Electrical:[`rafmagn`,`rafvirki`,`brunakerfi`,`hleðslustöð`,`öryggiskerfi`,`myndavélakerfi`,`lýsing`,`viðhald`,`lagnir`,`neyðarlýsing`]}},a={companyName:`RafFix ehf.`,contactEmail:`owner@raffix.is`,website:`https://raffix.is`,industry:`Electrical`,services:[`electrical installation`,`maintenance`,`fire alarm systems`,`EV chargers`],includeKeywords:[`charging`,`inspection`,`public buildings`],excludeKeywords:[`telecom`,`snow removal`],locations:[`Reykjavík`,`Capital Area`,`Suðurnes`,`Remote / Online`],minProjectValue:5e5,maxProjectValue:3e7,allowUnknownValue:!0,reportFrequency:`weekly`,reportDay:`monday`,deadlineReminders:!0,includeLowConfidence:!1,autoAlertMode:`auto_safe_only`};function o(e=``){return{companyName:``,kennitala:``,contactEmail:e||``,billingEmail:e||``,contactName:``,phone:``,address:``,website:``,industry:``,selectedPlan:`basic`,billingStatus:`trial`,trialStartedAt:``,trialEndsAt:``,services:[],includeKeywords:[],excludeKeywords:[],locations:[],baseLocation:``,serviceAreas:[],willingToTravel:!1,nationalProjects:!1,remoteProjects:!1,minimumProjectValueForTravel:``,minProjectValue:``,maxProjectValue:``,allowUnknownValue:!0,reportFrequency:`weekly`,reportDay:`monday`,deadlineReminders:!0,includeLowConfidence:!1,autoAlertMode:`auto_safe_only`}}function s(e,t=`is`){let n=t===`is`;return{privacy:n?{eyebrow:`Lög og traust`,title:`Persónuvernd`,intro:`Hér er útskýrt á einföldu máli hvaða gögn VerkRadar vistar og hvernig þau eru notuð til að veita þjónustuna.`,sections:[[`Persónuvernd`,[`VerkRadar er vöktunar- og yfirlitskerfi fyrir fyrirtæki. Kerfið notar gögn sem notandi setur inn og opinber gögn um útboð og verkefni til að hjálpa fyrirtækjum að finna það sem gæti passað.`]],[`Hvaða gögn eru vistuð`,[`VerkRadar getur vistað fyrirtækjaheiti, tengiliðanetfang, vefslóð, atvinnugrein, þjónustuflokka, staðsetningar, leitarorð, stillingar, vistuð og hunsuð verkefni, samsvaranir og yfirlit.`,`Kerfið vistar einnig innskráningar- og lotugögn sem þarf til að halda notendum innskráðum og vernda aðgang.`]],[`Innskráning og aðgangur`,[`Notendur skrá sig inn með auðkenndum aðgangi. Aðgangur að mælaborði, stillingum og skýrslum er tengdur við notanda og fyrirtæki eftir því sem við á.`]],[`Fyrirtækjaprófíll og stillingar`,[`Fyrirtækjaprófíllinn er notaður til að bera opinber verkefni saman við þjónustu, svæði, lykilorð og óskir fyrirtækisins. Betri prófíll gefur yfirleitt betri samsvörun.`]],[`Vistuð og hunsuð tækifæri`,[`VerkRadar getur vistað hvaða verkefni notandi vistar, fylgist með eða hunsar. Þetta er notað til að bæta upplifun, síur og yfirlit.`]],[`Vafrakökur og vafrageymsla`,[`VerkRadar notar nauðsynlega vafrageymslu, lotugeymslu og sambærilega virkni fyrir innskráningu, Supabase Auth lotur, tungumál, stillingar og grunnvirkni appsins.`,`Við gerum ekki ráð fyrir auglýsinga- eða rekjanlegri markaðssetningargeymslu í þessari útgáfu. Ef greiningar eða auglýsingatól verða síðar bætt við þarf að uppfæra þessa lýsingu.`]],[`Hafa samband`,[`Spurningar um persónuvernd eða gögn má senda á info@froststudio.net.`]]]}:{eyebrow:`Legal and trust`,title:`Privacy`,intro:`This page explains in practical terms what VerkRadar stores and how that data is used to provide the service.`,sections:[[`Privacy`,[`VerkRadar is a monitoring and reporting tool for businesses. It uses user-entered company data and public tender/project data to help companies find relevant opportunities.`]],[`What data is stored`,[`VerkRadar may store company name, contact email, website, industry, service categories, locations, keywords, settings, saved and ignored opportunities, matches, and reports.`,`The system also stores login and session data needed to keep users signed in and protect account access.`]],[`Login and access`,[`Users log in with authenticated accounts. Access to dashboards, settings, and reports is connected to the user and company where applicable.`]],[`Company profile and settings`,[`The company profile is used to compare public opportunities against services, locations, keywords, and company preferences. A better profile usually creates better matches.`]],[`Saved and ignored opportunities`,[`VerkRadar may store which opportunities a user saves, watches, or ignores. This is used to improve the experience, filters, and reports.`]],[`Cookies and browser storage`,[`VerkRadar uses essential browser storage, session storage, and similar functionality for login, Supabase Auth sessions, language, preferences, and core app functionality.`,`We do not currently claim to use advertising or marketing tracking storage in this version. If analytics or advertising tools are added later, this section should be updated.`]],[`Contact`,[`Questions about privacy or data can be sent to info@froststudio.net.`]]]},terms:n?{eyebrow:`Lög og traust`,title:`Skilmálar`,intro:`Þessir skilmálar lýsa notkun VerkRadar á einföldu máli. Þeir eru ekki endanleg lögfræðiráðgjöf.`,sections:[[`Skilmálar`,[`Með því að nota VerkRadar samþykkir notandi að nota þjónustuna á ábyrgan hátt og staðfesta alltaf upplýsingar á upprunalegri heimild áður en brugðist er við.`]],[`Þjónustan`,[`VerkRadar vaktar opinberar heimildir, útboðsvefi, sveitarfélagssíður og aðrar heimildir þar sem það er heimilt og tæknilega mögulegt. Kerfið raðar verkefnum eftir fyrirtækjaprófíl og býr til mælaborð eða yfirlit.`]],[`Upprunaleg gögn eru endanleg heimild`,[`VerkRadar hjálpar til við að forgangsraða yfirferð opinberra tækifæra. Upprunaleg útboðsgögn, skilafrestir, kröfur og hæfisskilyrði á upprunalegri heimild eru alltaf endanleg heimild.`]],[`Engin trygging um fullkomna vöktun`,[`VerkRadar tryggir ekki að öll útboð finnist, að öll gögn séu fullkomin, að samsvörun sé alltaf rétt eða að fyrirtæki uppfylli skilyrði eða vinni verk.`]],[`Prufuaðgangur og verð`,[`Prufuaðgangur, verð, greiðslur og uppsagnir ráðast af verðsíðu, pöntunarsíðu eða skriflegu samkomulagi hverju sinni.`]],[`Uppsögn`,[`Notandi getur óskað eftir lokun eða breytingu á aðgangi. VerkRadar getur takmarkað aðgang ef þjónustan er misnotuð, greiðslur vantar eða öryggisáhætta kemur upp.`]],[`Ábyrgðartakmörkun`,[`VerkRadar ber ekki ábyrgð á töpuðum skilafrestum, röngum upplýsingum á upprunalegum heimildum, viðskiptatapi eða ákvörðunum sem teknar eru út frá yfirlitum án staðfestingar á frumgögnum.`]],[`Hafa samband`,[`Spurningar um skilmála má senda á info@froststudio.net.`]]]}:{eyebrow:`Legal and trust`,title:`Terms`,intro:`These terms describe VerkRadar use in plain language. They are not final legal advice.`,sections:[[`Terms`,[`By using VerkRadar, users agree to use the service responsibly and always verify information at the original source before acting.`]],[`The service`,[`VerkRadar monitors public sources, procurement portals, municipal pages, and other sources where allowed and technically feasible. The system ranks opportunities against company profiles and creates dashboards or reports.`]],[`Original data is the final authority`,[`VerkRadar helps prioritize review of public opportunities. Original tender documents, deadlines, requirements, and eligibility criteria at the original source are always the final authority.`]],[`No guarantee of complete monitoring`,[`VerkRadar does not guarantee that every tender is found, that all data is complete, that matching is always correct, or that a company is eligible for or will win any contract.`]],[`Trial access and pricing`,[`Trial access, pricing, billing, and cancellation are governed by the pricing page, order page, or written agreement in effect at the time.`]],[`Cancellation`,[`A user may request account changes or cancellation. VerkRadar may restrict access if the service is misused, payment is missing, or a security risk arises.`]],[`Limitation of liability`,[`VerkRadar is not responsible for missed deadlines, incorrect information at original sources, business losses, or decisions made from reports without checking source documents.`]],[`Contact`,[`Questions about these terms can be sent to info@froststudio.net.`]]]},data:n?{eyebrow:`Gagnaheimildir`,title:`Gagnaheimildir`,intro:`VerkRadar notar opinberar heimildir til að hjálpa fyrirtækjum að finna verkefni sem gætu skipt máli.`,sections:[[`Gagnaheimildir`,[`Kerfið safnar og samræmir opinberar upplýsingar þar sem slíkt er heimilt og tæknilega mögulegt.`]],[`Opinberar heimildir`,[`Heimildir geta verið útboðsvefir, opinberar stofnanir, RSS straumar, sveitarfélagssíður og aðrar opinberar síður.`]],[`Sveitarfélög og útboðsvefir`,[`VerkRadar getur vaktað sveitarfélög, innkaupa- og útboðsvefi og sértækar síður fyrir framkvæmdir, þjónustu eða innkaup.`]],[`Evrópsk útboð ef við á`,[`Evrópsk útboð geta verið sótt úr TED eða sambærilegum heimildum þegar þau eiga við markaðinn og fyrirtækjaprófíla.`]],[`Takmarkanir gagna`,[`Sumar heimildir veita ekki fulla skilafresti, verðmæti, kaupanda eða útboðsgögn í véllesanlegu formi. Gögn geta verið seinkuð, ófullkomin, tvítekin eða breytt á upprunalegri síðu.`]],[`Leiðréttingar`,[`Ef þú sérð rangar eða úreltar upplýsingar má senda ábendingu á info@froststudio.net. Opnið alltaf upprunalega heimild áður en brugðist er við.`]]]}:{eyebrow:`Data sources`,title:`Data sources`,intro:`VerkRadar uses public sources to help businesses find projects that may matter.`,sections:[[`Data sources`,[`The system collects and normalizes public information where allowed and technically feasible.`]],[`Public sources`,[`Sources can include procurement portals, public institutions, RSS feeds, municipal pages, and other official public pages.`]],[`Municipalities and procurement portals`,[`VerkRadar may monitor municipalities, procurement/tender portals, and specific pages for construction, services, or purchasing.`]],[`European tenders where applicable`,[`European tenders may be imported from TED or similar sources when relevant to the market and company profiles.`]],[`Data limitations`,[`Some sources do not provide full deadlines, values, buyer data, or tender documents in machine-readable form. Data may be delayed, incomplete, duplicated, or changed at the original source.`]],[`Corrections`,[`If you see incorrect or outdated information, send a correction to info@froststudio.net. Always open the original source before acting.`]]]},security:n?{eyebrow:`Öryggi`,title:`Öryggi`,intro:`VerkRadar notar innskráningu, aðgangsstýringu og aðskilnað gagna til að vernda fyrirtækjaupplýsingar.`,sections:[[`Öryggi`,[`Við reynum að halda öryggisupplýsingum hagnýtum og heiðarlegum. VerkRadar fullyrðir ekki um vottanir sem hafa ekki verið fengnar.`]],[`Innskráning`,[`Notendur skrá sig inn með auðkenndum aðgangi. Innskráning og lotur eru hluti af grunnvirkni appsins.`]],[`Aðgangsstýring`,[`Aðgangur að fyrirtækjagögnum, samsvörunum og skýrslum er aðgreindur eftir notanda og fyrirtæki þar sem það á við.`]],[`Fyrirtækjagögn`,[`Fyrirtækjaprófílar, stillingar og vistuð/hunsuð verkefni eru notuð til að veita þjónustuna og ættu ekki að vera sýnileg öðrum viðskiptavinum.`]],[`Admin aðgangur`,[`Admin verkfæri eru takmörkuð við skilgreinda stjórnendur og eru notuð til að fylgjast með heimildum, innflutningi, fyrirtækjum og handvirkri yfirferð.`]],[`Tilkynna vandamál`,[`Öryggisspurningar eða ábendingar má senda á info@froststudio.net.`]]]}:{eyebrow:`Security`,title:`Security`,intro:`VerkRadar uses authentication, access control, and data separation to protect company information.`,sections:[[`Security`,[`We try to keep security information practical and honest. VerkRadar does not claim certifications it has not obtained.`]],[`Login`,[`Users log in with authenticated accounts. Login and sessions are part of the app’s core functionality.`]],[`Access control`,[`Access to company data, matches, and reports is separated by user and company where applicable.`]],[`Company data`,[`Company profiles, settings, and saved/ignored opportunities are used to provide the service and should not be visible to other customers.`]],[`Admin access`,[`Admin tools are restricted to defined administrators and are used to monitor sources, imports, companies, and manual review.`]],[`Report an issue`,[`Security questions or reports can be sent to info@froststudio.net.`]]]},contact:n?{eyebrow:`Hafa samband`,title:`Hafa samband`,intro:`Viltu prófa VerkRadar, spyrja um vöktun eða benda á leiðréttingu?`,sections:[[`VerkRadar / Frost Studio`,[`Netfang: info@froststudio.net`,`Tengiliður: Kristján Jakob`]]]}:{eyebrow:`Contact`,title:`Contact`,intro:`Want to try VerkRadar, ask about monitoring, or report a correction?`,sections:[[`VerkRadar / Frost Studio`,[`Email: info@froststudio.net`,`Contact person: Kristján Jakob`]]]}}[e]}var c=`https://asojxjbsgqbfpbepojzh.supabase.co`,l=`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFzb2p4amJzZ3FiZnBiZXBvanpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAwNTU2NjgsImV4cCI6MjA5NTYzMTY2OH0.yPA34VbqWqKrBPespmHr5AojYzjhy3kGRxswO9XdAd0`,u=window.supabase?window.supabase.createClient(c,l,{auth:{flowType:`pkce`,detectSessionInUrl:!0,persistSession:!0,autoRefreshToken:!0}}):null,d=`verkradar_pending_invite_token`,f=`verkradar_pending_invite_flow`,p=`verkradar_legacy_pending_invite_token`,m=`vr_debug_invite`,h=1e3*60*60*24*7;function g(e){return String(e||``).trim().toLowerCase()}function _(){return window.VERKRADAR_COMPANY_INVITE_URL?window.VERKRADAR_COMPANY_INVITE_URL:window.VERKRADAR_SUPABASE_URL?`${window.VERKRADAR_SUPABASE_URL}/functions/v1/company-invite`:`${c}/functions/v1/company-invite`}function v(e){let t=String(e||``),n=t.includes(`?`)?t.slice(t.indexOf(`?`)+1):``,r=new URLSearchParams(n);return y(r.get(`token`)||r.get(`invite`)||``)}function y(e){return String(e||``).split(`#`)[0].trim()}function ee(){let e=new URL(window.location.href),t=e.searchParams,n=window.location.hash||``,r=n.indexOf(`#`,1),i=r>=0?n.slice(r+1):``,a=new URLSearchParams(i||n.replace(/^#/,``)),o=n.replace(/^#/,``)||``,s=o.includes(`?`)?o.slice(o.indexOf(`?`)+1):``,c=new URLSearchParams(s),l=t.get(`invite`)||t.get(`token`)||c.get(`token`)||c.get(`invite`)||``,u=y(l||se()),d=t.get(`code`)||``,f=a.get(`access_token`)||``,p=a.get(`refresh_token`)||``;return{isCallbackPath:e.pathname===`/auth/callback`,invite:u,code:d,accessToken:f,refreshToken:p,hasImplicitTokens:!!(f&&p),rawTokenHadFragment:String(l||``).includes(`#`)}}function te(e=``){let t=new URL(`/auth/callback`,window.location.origin),n=y(e);return n&&t.searchParams.set(`invite`,n),t.toString()}function ne(e=``){let t=y(e),n=t?`/#/accept-invite?token=${encodeURIComponent(t)}`:`/#/`;return window.history.replaceState(null,``,`${window.location.origin}${n}`),t?`/accept-invite?token=${encodeURIComponent(t)}`:`/`}function re(){try{return localStorage.getItem(m)===`1`}catch{return!1}}function b(e){let t=v(e),n=_e(),r=t?`url`:n.sessionToken?`sessionStorage`:n.localToken?`localStorage`:`missing`,i=t||n.sessionToken||n.localToken||``;return{current_url:ve(window.location.href),current_hash:ve(window.location.hash||``),token_source:r,token_present:!!i,token_length:i.length,localStorage_pending_token_present:!!n.localToken,sessionStorage_pending_token_present:!!n.sessionToken}}async function x(e=``){try{let{data:t,error:n}=u?await u.auth.getSession():{data:{session:null},error:null},r=t?.session?.user||null;return{auth_session_present:!!(t?.session&&!n),auth_user_id_present:!!r?.id,auth_user_email:r?.email||``,email_confirmed_at_present:!!(r?.email_confirmed_at||r?.confirmed_at),auth_event_received:e||``,access_token_present:!!t?.session?.access_token}}catch(t){return{auth_session_present:!1,auth_user_id_present:!1,auth_user_email:``,email_confirmed_at_present:!1,auth_event_received:e||``,access_token_present:!1,auth_error:t instanceof Error?t.message:String(t||`Unknown auth error`)}}}function S(e){return Ce(e)===`/accept-invite`}function ie(e){let t=Ce(e);return[`/login`,`/signup`,`/forgot-password`].includes(t)&&!!v(e)}function ae(e){return S(e)||ie(e)||we(e)&&!!se()}function oe(e){return ae(e)?v(e)||se():(ue(),``)}function se(){try{localStorage.removeItem(p)}catch{}try{let e=sessionStorage.getItem(d)||``;if(e)return e;let t=JSON.parse(localStorage.getItem(f)||`null`);return!t?.token||!t?.expires_at||new Date(t.expires_at).getTime()<Date.now()?(localStorage.removeItem(f),``):y(t.token||``)}catch{return``}}function ce(e){if(v(e))return`url`;let t=_e();return t.sessionToken?`sessionStorage`:t.localToken?`localStorage`:`missing`}function le(e){let t=y(e);try{t&&(sessionStorage.setItem(d,t),localStorage.setItem(f,JSON.stringify({token:t,created_at:new Date().toISOString(),expires_at:new Date(Date.now()+h).toISOString()})))}catch{}return t}function ue(){try{sessionStorage.removeItem(d),localStorage.removeItem(f),localStorage.removeItem(p)}catch{}}function de(e){let t=y(e);return t?`${window.location.origin}/#/accept-invite?token=${encodeURIComponent(t)}`:``}async function fe(e){let t=_();if(!t)throw Error(`Company invite function is not configured.`);let n=await fetch(t,{method:`POST`,headers:ge(),body:JSON.stringify({action:`preview`,token:e})}),r=await xe(n),i={preview_request_sent:!0,preview_status:n.status,preview_response_body:ye(r)};if(!n.ok){let e=Error(r.error||r.message||`Invite preview failed with status ${n.status}`);throw e.details={...r,__http_status:n.status,__debug:i},e}return{...r,__debug:i}}async function pe(e){let t=_();if(!t)throw Error(`Company invite function is not configured.`);let n;try{n=await be()}catch(e){let t=Error(e instanceof Error?e.message:`You must be logged in to accept this invite.`);throw t.details={code:`no_session`,diagnostics:{accept_request_sent:!1,authorization_header_included:!1,accept_error_reason:`no_session`}},t}let r=await fetch(t,{method:`POST`,headers:n.headers,body:JSON.stringify({action:`accept`,token:e})}),i=await xe(r),a={...n.diagnostics,accept_request_sent:!0,authorization_header_included:!!n.headers.authorization,accept_http_status:r.status,accept_response_body:ye(i)};if(!r.ok){let e=Error(i.error||i.message||`Invite acceptance failed with status ${r.status}`);throw e.details={...i,__http_status:r.status,__debug:a},e}return{...i,__debug:a}}async function me(e,t,n={}){let r=String(n.token||``).trim();if(r)return[await pe(r)];let i=g(t?.email);if(!e||!t?.id||!i||n.allowEmailClaim!==!0)return[];let{data:a,error:o}=await e.from(`company_members`).select(`id, company_id, email, role, status`).eq(`email_normalized`,i).eq(`status`,`invited`);if(o)throw o;let s=a||[];if(!s.length)return[];let c=[];for(let n of s){let{data:r,error:a}=await e.from(`company_members`).update({user_id:t.id,status:`active`,accepted_at:new Date().toISOString(),revoked_at:null,updated_at:new Date().toISOString()}).eq(`id`,n.id).eq(`email_normalized`,i).eq(`status`,`invited`).select(`id, company_id, email, role, status, accepted_at`).maybeSingle();if(a)throw a;r&&c.push(r)}return c}async function he(e,t){if(!e||!t?.id)return[];let{data:n,error:r}=await e.from(`company_members`).select(`id, company_id, email, role, status, accepted_at`).eq(`user_id`,t.id).eq(`status`,`active`).order(`accepted_at`,{ascending:!0});if(r)throw r;return n||[]}function ge(){let e={"content-type":`application/json`},t=window.VERKRADAR_SUPABASE_ANON_KEY||`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFzb2p4amJzZ3FiZnBiZXBvanpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAwNTU2NjgsImV4cCI6MjA5NTYzMTY2OH0.yPA34VbqWqKrBPespmHr5AojYzjhy3kGRxswO9XdAd0`;return t&&(e.apikey=t),e}function _e(){let e={sessionToken:``,localToken:``};try{e.sessionToken=y(sessionStorage.getItem(d)||``)}catch{}try{let t=JSON.parse(localStorage.getItem(f)||`null`);t?.token&&t?.expires_at&&new Date(t.expires_at).getTime()>=Date.now()&&(e.localToken=y(t.token||``))}catch{}return e}function ve(e){return String(e||``).replace(/([?&](?:token|invite)=)[^&#]+/gi,`$1[redacted]`)}function ye(e){if(!e||typeof e!=`object`)return e||null;let{diagnostics:t,ok:n,status:r,code:i,error:a,message:o,company_name:s,invited_email:c,role:l,expires_at:u,company_id:d}=e;return{ok:n,status:r,code:i,error:a,message:o,company_name:s,invited_email:c,role:l,expires_at:u,company_id:d,diagnostics:t}}async function be(){let e=ge(),{data:t,error:n}=u?await u.auth.getSession():{data:{session:null},error:null};if(n)throw n;let r=t.session?.access_token;if(!r)throw Error(`You must be logged in to accept this invite.`);e.authorization=`Bearer ${r}`;let i=Se(r);return{headers:e,diagnostics:{session_user_id:t.session?.user?.id||``,session_user_email:t.session?.user?.email||``,bearer_jwt_sub:i.sub||``,bearer_jwt_email:i.email||``,bearer_jwt_iss:i.iss||``,bearer_jwt_exp:i.exp||``,session_user_matches_bearer_sub:!!(t.session?.user?.id&&i.sub&&t.session.user.id===i.sub),session_email_matches_bearer_email:!!(t.session?.user?.email&&i.email&&g(t.session.user.email)===g(i.email))}}}async function xe(e){let t=await e.text();if(!t)return{};try{return JSON.parse(t)}catch{return{error:t}}}function Se(e){try{let t=String(e||``).split(`.`)[1]||``;if(!t)return{};let n=t.replace(/-/g,`+`).replace(/_/g,`/`),r=n.padEnd(Math.ceil(n.length/4)*4,`=`),i=decodeURIComponent(Array.from(atob(r)).map(e=>`%${e.charCodeAt(0).toString(16).padStart(2,`0`)}`).join(``));return JSON.parse(i)}catch{return{}}}function Ce(e){let t=String(e||`/`);return(t.startsWith(`/`)?t:`/${t}`).split(`?`)[0]||`/`}function we(e){let t=String(e||``);return t.startsWith(`access_token=`)||t.startsWith(`code=`)||t.includes(`access_token=`)||t.includes(`code=`)||t.includes(`type=signup`)||t.includes(`type=email_change`)}function Te(){return window.VERKRADAR_DAILY_PIPELINE_URL?window.VERKRADAR_DAILY_PIPELINE_URL:window.VERKRADAR_SUPABASE_URL?`${window.VERKRADAR_SUPABASE_URL}/functions/v1/daily-pipeline`:`${c}/functions/v1/daily-pipeline`}async function Ee(){let e=Te();if(!e)throw Error(`Daily pipeline function is not configured. Set window.VERKRADAR_DAILY_PIPELINE_URL or window.VERKRADAR_SUPABASE_URL.`);let t=await De(),n=await fetch(e,{method:`POST`,headers:t,body:JSON.stringify({runDailyPipeline:!0})}),r=await Oe(n);if(!n.ok&&n.status!==207)throw Error(r.error||r.message||`Daily pipeline failed with status ${n.status}`);return r}async function De(){let e={"content-type":`application/json`},t=window.VERKRADAR_SUPABASE_ANON_KEY||`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFzb2p4amJzZ3FiZnBiZXBvanpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAwNTU2NjgsImV4cCI6MjA5NTYzMTY2OH0.yPA34VbqWqKrBPespmHr5AojYzjhy3kGRxswO9XdAd0`;t&&(e.apikey=t);let{data:n,error:r}=u?await u.auth.getSession():{data:{session:null},error:null};if(r)throw r;let i=n.session?.access_token;if(!i)throw Error(`You must be logged in as an admin to run the daily pipeline.`);return e.authorization=`Bearer ${i}`,e}async function Oe(e){let t=await e.text();if(!t)return{};try{return JSON.parse(t)}catch{return{error:t}}}function ke(){return window.VERKRADAR_AI_REVIEW_MATCH_URL?window.VERKRADAR_AI_REVIEW_MATCH_URL:window.VERKRADAR_SUPABASE_URL?`${window.VERKRADAR_SUPABASE_URL}/functions/v1/ai-review-match`:`${c}/functions/v1/ai-review-match`}async function Ae(e,t={}){let n=ke();if(!n)throw Error(`AI review function is not configured. Set window.VERKRADAR_AI_REVIEW_MATCH_URL or window.VERKRADAR_SUPABASE_URL.`);let r=await Ie(),i=await fetch(n,{method:`POST`,headers:r,body:JSON.stringify({matchId:e,force:t.force===!0})}),a=await Le(i);if(!i.ok)throw Error(a.error||a.message||`AI review failed with status ${i.status}`);return a}async function je(e,t={}){let n=ke();if(!n)throw Error(`AI review function is not configured. Set window.VERKRADAR_AI_REVIEW_MATCH_URL or window.VERKRADAR_SUPABASE_URL.`);let r=await Ie(),i=await fetch(n,{method:`POST`,headers:r,body:JSON.stringify({batch:!0,companyId:e,limit:Math.max(1,Math.min(20,Number(t.limit||10))),force:t.force===!0,revalidate:t.revalidate===!0})}),a=await Le(i);if(!i.ok)throw Error(a.error||a.message||`AI review batch failed with status ${i.status}`);return a}async function Me(e={}){let t=ke();if(!t)throw Error(`AI review function is not configured. Set window.VERKRADAR_AI_REVIEW_MATCH_URL or window.VERKRADAR_SUPABASE_URL.`);let n=await Ie(),r=await fetch(t,{method:`POST`,headers:n,body:JSON.stringify({auto:!0,limit:Math.max(1,Math.min(10,Number(e.limit||10)))})}),i=await Le(r);if(!r.ok)throw Error(i.error||i.message||`Automatic AI review failed with status ${r.status}`);return i}async function Ne(e,t){let n=ke();if(!n)throw Error(`AI review function is not configured. Set window.VERKRADAR_AI_REVIEW_MATCH_URL or window.VERKRADAR_SUPABASE_URL.`);let r=await Ie(),i=await fetch(n,{method:`POST`,headers:r,body:JSON.stringify({setCompanyAutoAiReviewEnabled:!0,company_id:e,enabled:t===!0})}),a=await Le(i);if(!i.ok)throw Error(a.error||a.message||`Auto AI toggle failed with status ${i.status}`);return a}async function Pe(){if(!u)return{reviewsToday:0,estimatedCostToday:0,remainingReviewsToday:50};let e=new Date;e.setUTCHours(0,0,0,0);let{data:t,error:n}=await u.from(`ai_usage_log`).select(`opportunity_id, estimated_cost`).gte(`created_at`,e.toISOString());if(n)throw n;let r=t||[],i=r.filter(e=>e.opportunity_id).length;return{reviewsToday:i,estimatedCostToday:r.reduce((e,t)=>e+Number(t.estimated_cost||0),0),remainingReviewsToday:Math.max(0,50-i)}}function Fe(e){let t=Number(e||0);return`$${t.toFixed(t>=1?2:4)}`}async function Ie(){let e={"content-type":`application/json`},t=window.VERKRADAR_SUPABASE_ANON_KEY||`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFzb2p4amJzZ3FiZnBiZXBvanpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAwNTU2NjgsImV4cCI6MjA5NTYzMTY2OH0.yPA34VbqWqKrBPespmHr5AojYzjhy3kGRxswO9XdAd0`;t&&(e.apikey=t);let{data:n,error:r}=u?await u.auth.getSession():{data:{session:null},error:null};if(r)throw r;let i=n.session?.access_token;if(!i)throw Error(`You must be logged in as an admin to run AI review.`);return e.authorization=`Bearer ${i}`,e}async function Le(e){let t=await e.text();if(!t)return{};try{return JSON.parse(t)}catch{return{error:t}}}function Re(e){let t=String(e?.fit||``),n=Number(e?.confidence||0),r=e?.send_to_client===!0||e?.sendToClient===!0;return n<.65?`needs_review`:t===`strong`&&r?`ready_for_admin`:t===`possible`&&r?`possible`:t===`weak`||t===`no_fit`?`low_priority`:`needs_review`}function ze(e,t,n=null){let r=new Map,i=new Map;for(let e of t||[]){let t=String(e.company_id||``),n=String(e.opportunity_id||``),a=String(e.match_id||``);t&&n&&r.set(`${t}:${n}`,e),a&&i.set(a,e)}return(e||[]).map(e=>{let t=`${String(e.company_id||``)}:${String(e.opportunity_id||``)}`,a=r.get(t)||i.get(String(e.id||``));return a?{...e,ai_review_status:Re(a),ai_review_fit:a.fit||e.ai_review_fit,ai_review_confidence:a.confidence??e.ai_review_confidence,ai_reviewed_at:a.updated_at||a.created_at||e.ai_reviewed_at,ai_review_send_to_client:a.send_to_client===!0,ai_review_reason:a.reason||``,ai_review_profile_hash:a.reviewed_profile_hash||``,ai_review_profile_stale:Ge(a,n),ai_review_found:!0,ai_review_saved:!0}:{...e,ai_review_found:!1}})}function Be(e,t=null){let n=Ke(t,e);if(n.outsideServiceArea)return{bucket:`outside_service_area`,label:`Outside service area`,tone:`warning`,clientReady:!1,reason:n.reason||`Outside current service area.`};let r=We(e?.ai_review_skipped_reason),i=String(e?.ai_review_fit||``),a=Number(e?.ai_review_confidence||0),o=e?.ai_review_found===!0||e?.ai_review_saved===!0||!!i,s=String(e?.ai_review_status||`not_reviewed`);return r===`outside_service_area`?{bucket:`outside_service_area`,label:`Outside service area`,tone:`warning`,clientReady:!1,reason:`Skipped by batch review because the opportunity is outside the company service area.`}:o?e?.ai_review_profile_stale===!0?{bucket:`needs_review`,label:`AI review may be stale`,tone:`warning`,clientReady:!1,confidence:a}:i===`strong`&&e?.ai_review_send_to_client===!0?{bucket:`ai_recommended`,label:`AI recommended`,tone:`success`,clientReady:!0,confidence:a}:i===`possible`?{bucket:`ai_possible`,label:`AI possible`,tone:`notice`,clientReady:e?.ai_review_send_to_client===!0,confidence:a}:i===`weak`||i===`no_fit`||s===`low_priority`?{bucket:`low_priority`,label:i===`no_fit`?`AI: no fit`:`AI: weak fit`,tone:`muted`,clientReady:!1,confidence:a}:{bucket:`needs_review`,label:`Needs review`,tone:`warning`,clientReady:!1,confidence:a}:r?{bucket:r,label:Ue(r),tone:r===`already_reviewed`?`notice`:`warning`,clientReady:!1,reason:Ue(r)}:s===`needs_review`||String(e?.safety_status||``)===`needs_review`?{bucket:`needs_review`,label:`Needs review`,tone:`warning`,clientReady:!1}:{bucket:`not_reviewed`,label:`Not AI reviewed`,tone:`muted`,clientReady:!1}}function Ve(e,t,n=null){return(e||[]).filter(e=>{let r=Be(e,n);return t===`ai_recommended`?r.bucket===`ai_recommended`:t===`ai_possible`?r.bucket===`ai_possible`:t===`needs_review`?r.bucket===`needs_review`:t===`outside_service_area`?r.bucket===`outside_service_area`:t===`not_reviewed`?r.bucket===`not_reviewed`:!0})}function He(e){let t=JSON.stringify({services:Je([...e?.services||[],...e?.includeKeywords||[],...(e?.excludeKeywords||[]).map(e=>`exclude:${e}`)]),locations:Je([e?.baseLocation,...e?.locations||[],...e?.serviceAreas||[],e?.willingToTravel?`willing_to_travel:true`:`willing_to_travel:false`,e?.nationalProjects?`national_projects:true`:`national_projects:false`])}),n=5381;for(let e=0;e<t.length;e+=1)n=(n<<5)+n+t.charCodeAt(e),n|=0;return`profile_${Math.abs(n)}`}function Ue(e){return{outside_service_area:`Outside service area`,already_reviewed:`Already reviewed`,expired:`Expired`,missing_deadline:`Missing deadline`,expired_or_missing_deadline:`Expired or missing deadline`,score_too_low:`Score too low`,manually_rejected:`Manually rejected`}[We(e)]||`Skipped`}function We(e){return String(e||``).trim().toLowerCase().replace(/[\s-]+/g,`_`)}function Ge(e,t){if(!e||!t)return!1;let n=String(e.reviewed_profile_hash||``);return!!(n&&n!==He(t))}function Ke(e,t){if(!e||e.nationalProjects===!0||e.willingToTravel===!0)return{outsideServiceArea:!1,reason:``};let n=Ye([e.baseLocation,...e.serviceAreas||[],...e.locations||[]].join(` `));if(!n||/all iceland|allt land|national|landsdekkandi/.test(n))return{outsideServiceArea:!1,reason:``};let r=t?.opportunities||{},i=r.raw_payload&&typeof r.raw_payload==`object`?r.raw_payload:{},a=Ye([r.title,r.location,i.region,i.extracted_location].join(` `));if(!a)return{outsideServiceArea:!1,reason:`Opportunity location unclear`};if(/(dalvik|akureyri|boggvisbraut|birkiholar|north iceland|nordurland)/.test(a)&&!/(dalvik|akureyri|north iceland|nordurland)/.test(n)||/(olafsvik|snaefellsnes|stykkisholmur|grundarfjordur)/.test(a)&&!/(olafsvik|snaefellsnes|stykkisholmur|grundarfjordur)/.test(n))return{outsideServiceArea:!0,reason:`Outside current service area`};let o=qe(n),s=qe(a);return!o.length||!s.length?{outsideServiceArea:!1,reason:``}:{outsideServiceArea:!s.some(e=>o.includes(e)),reason:`Outside current service area`}}function qe(e){return[[`capital_area`,/reykjavik|capital area|hofudborg|gardabaer|kopavogur|seltjarnarnes|mosfellsbaer/],[`south`,/selfoss|arborg|sudurland|hveragerdi|olfus|rangarthing/],[`west_corridor`,/akranes|borgarnes|borgarbyggd|hvalfjordur/],[`north`,/dalvik|akureyri|nordurland|birkiholar|boggvisbraut/],[`snaefellsnes`,/olafsvik|snaefellsnes|stykkisholmur|grundarfjordur/]].filter(([,t])=>t.test(e)).map(([e])=>e)}function Je(e){return Array.from(new Set((e||[]).map(e=>Ye(e)).filter(Boolean))).sort()}function Ye(e){return String(e||``).toLowerCase().normalize(`NFD`).replace(/[\u0300-\u036f]/g,``).replace(/þ/g,`th`).replace(/ð/g,`d`).replace(/æ/g,`ae`).replace(/ö/g,`o`).replace(/[^a-z0-9\s/-]/g,` `).replace(/\s+/g,` `).trim()}function Xe(e){let{escapeHtml:t,isRunning:n=!1,result:r=null}=e;return`
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
      ${r?Ze(r,t):``}
    </section>
  `}function Ze(e,t){let n=Array.isArray(e.company_summaries)?e.company_summaries:[],r=Array.isArray(e.match_details)?e.match_details:[];return`
    <div class="daily-pipeline-result">
      <div class="daily-pipeline-section">
        <h3>Yfirlit</h3>
        <div class="daily-pipeline-kpis">
          ${Qe(`Ný tækifæri`,e.opportunities_inserted,t)}
          ${Qe(`Uppfært`,e.opportunities_updated,t)}
          ${Qe(`Fyrirtæki uppfærð`,e.companies_refreshed,t)}
          ${Qe(`AI yfirferðir`,e.ai_reviews_created,t)}
          ${Qe(`Þegar yfirfarið`,e.skipped_already_reviewed,t)}
          ${Qe(`Utan þjónustusvæðis`,e.skipped_outside_service_area,t)}
          ${Qe(`Vantar skilafrest`,e.skipped_missing_deadline,t)}
          ${Qe(`Útrunnið`,e.skipped_expired,t)}
        </div>
      </div>

      <div class="daily-pipeline-section">
        <div class="daily-pipeline-heading">
          <h3>Fyrirtæki</h3>
          <span>${n.length} fyrirtæki í niðurstöðu</span>
        </div>
        ${n.length?`
          <div class="daily-company-grid">
            ${n.map(e=>$e(e,t)).join(``)}
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
            ${r.map(e=>tt(e,t)).join(``)}
          </div>
        `:`<div class="empty-card">Engin ný AI-yfirfarin tækifæri í þessari keyrslu.</div>`}
      </div>

      ${nt(e.errors,t)}
      ${rt(e,t)}
    </div>
  `}function Qe(e,t,n){return`
    <div class="daily-kpi">
      <strong>${Number(t||0)}</strong>
      <span>${n(e)}</span>
    </div>
  `}function $e(e,t){let n=Array.isArray(e.match_details)?e.match_details:[];return`
    <article class="daily-company-card">
      <div class="daily-company-header">
        <h4>${t(e.company_name||`Óþekkt fyrirtæki`)}</h4>
        ${e.company_id?`<button class="btn btn-ghost btn-small" type="button" data-action="view-admin-company" data-id="${t(e.company_id)}">Open company</button>`:``}
      </div>
      <div class="daily-company-stats">
        ${et(`Ný tækifæri`,e.new_matches_count,t)}
        ${et(`Mælt með`,e.ai_recommended_count,t)}
        ${et(`Mögulegt`,e.ai_possible_count,t)}
        ${et(`Passar ekki`,e.ai_rejected_count,t)}
        ${et(`Þegar yfirfarið`,e.already_reviewed_count,t)}
        ${et(`Þarf yfirferð`,e.needs_manual_review_count,t)}
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
  `}function et(e,t,n){return`
    <span>
      <strong>${Number(t||0)}</strong>
      ${n(e)}
    </span>
  `}function tt(e,t){let n=Array.isArray(e.top_reasons)?e.top_reasons.filter(Boolean).slice(0,3):[],r=String(e.source_url||``).trim();return`
    <article class="daily-match-card">
      <div class="daily-match-top">
        <div>
          <h4>${t(e.opportunity_title||`Tækifæri`)}</h4>
          <p>${t(e.company_name||`Óþekkt fyrirtæki`)} · ${t(e.buyer||`Óþekktur kaupandi`)} · ${t(e.source||`Óþekkt heimild`)}</p>
        </div>
        <div class="daily-match-badges">
          <span>${t(it(e.ai_fit))}</span>
          <span>${Math.round(Number(e.ai_confidence||0)*100)}%</span>
          <span>${e.send_to_client?`Hæft til sendingar`:`Ekki senda`}</span>
          ${e.ai_review_is_stale?`<span class="is-warning">AI gæti verið úrelt</span>`:``}
        </div>
      </div>
      <div class="daily-match-meta">
        <span>Skilafrestur: ${t(at(e.deadline))}</span>
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
  `}function nt(e,t){return!Array.isArray(e)||!e.length?``:`
    <div class="admin-message is-error">
      ${e.map(e=>`<div>${t(e)}</div>`).join(``)}
    </div>
  `}function rt(e,t){return`
    <details class="daily-pipeline-diagnostics">
      <summary>Technical diagnostics</summary>
      <pre>${t(JSON.stringify(e,null,2))}</pre>
    </details>
  `}function it(e){let t=String(e||``).toLowerCase();return t===`strong`?`Mælt með`:t===`possible`?`Mögulegt`:t===`weak`||t===`no_fit`?`Passar ekki`:`Þarf yfirferð`}function at(e){return String(e||``).trim()||`Ekki skráð`}function ot(e,t){let{escapeHtml:n,formatDateTime:r,inviteEmail:i=``,inviteLink:a=``,inviteDebug:o=null,actionState:s=``}=t,c=Array.isArray(e.members)?e.members:[],l=c.filter(e=>e.status===`active`),u=c.filter(e=>e.status===`invited`),d=l.length?`Active`:u.length?`Invited`:`Not invited`,f=!!s;return`
    <section class="side-panel admin-company-access-panel">
      <h3>Customer access</h3>
      <p><strong>Access status:</strong> ${n(d)}</p>
      <p class="muted-text">Create an invite link, copy it, and send it manually. VerkRadar does not send invite emails yet.</p>
      ${c.length?`
        <ul class="admin-detail-list admin-company-access-list">
          ${c.map(e=>ct(e,{escapeHtml:n,formatDateTime:r,busy:f})).join(``)}
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
          ${st(o,n)}
        `:u.length?`
          <p class="muted-text">No raw invite token is available in this browser session. Regenerate invite link before copying.</p>
        `:``}
      </div>
      <p class="muted-text">Aðgangur að fyrirtæki er afturkallaður, en innskráningaraðgangi notandans er ekki eytt.</p>
    </section>
  `}function st(e,t){return e?`
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
  `:``}function ct(e,t){let{escapeHtml:n,formatDateTime:r,busy:i}=t,a=e.status===`revoked`,o=e.status===`active`?`is-success`:e.status===`invited`?`is-running`:``;return`
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
  `}var lt=[[``,`Ástæða valfrjáls`],[`wrong_service`,`Röng þjónusta`],[`wrong_location`,`Rangt svæði`],[`too_large`,`Of stórt`],[`too_small`,`Of lítið`],[`missing_equipment_or_certification`,`Vantar tæki eða vottun`],[`consultancy_not_execution`,`Ráðgjöf/eftirlit, ekki framkvæmd`],[`not_interested`,`Ekki áhugavert`],[`duplicate_or_already_known`,`Tvítekið eða þegar þekkt`],[`other`,`Annað`]];function ut(){let e=window.VERKRADAR_HYBRID_MATCHING_ENABLED;return e===!0||String(e||``).toLowerCase()===`true`}function dt(e={}){return{coreServices:gt(e.coreServices),secondaryServices:gt(e.secondaryServices),excludedServices:gt(e.excludedServices),preferredProjectTypes:gt(e.preferredProjectTypes),excludedProjectTypes:gt(e.excludedProjectTypes),equipment:gt(e.equipment),certifications:gt(e.certifications),preferredBuyers:gt(e.preferredBuyers),maxTravelDistanceKm:e.maxTravelDistanceKm||``,typicalProjectSize:e.typicalProjectSize||``,profileNotesForAi:e.profileNotesForAi||``}}function ft(e){let t=new FormData(e);return{coreServices:C(t.get(`coreServices`)),secondaryServices:C(t.get(`secondaryServices`)),excludedServices:C(t.get(`excludedServices`)),preferredProjectTypes:C(t.get(`preferredProjectTypes`)),excludedProjectTypes:C(t.get(`excludedProjectTypes`)),equipment:C(t.get(`equipment`)),certifications:C(t.get(`certifications`)),preferredBuyers:C(t.get(`preferredBuyers`)),maxTravelDistanceKm:_t(t.get(`maxTravelDistanceKm`)),typicalProjectSize:String(t.get(`typicalProjectSize`)||``).trim(),profileNotesForAi:String(t.get(`profileNotesForAi`)||``).trim()}}function pt(e){let t=new FormData(e);return{opportunityId:String(t.get(`opportunityId`)||``).trim(),decision:String(t.get(`decision`)||``).trim(),reason:String(t.get(`reason`)||``).trim(),comment:String(t.get(`comment`)||``).trim()}}function mt(e){let t=new FormData(e);return{opportunityId:String(t.get(`opportunityId`)||``).trim(),label:String(t.get(`label`)||``).trim(),reason:String(t.get(`reason`)||``).trim(),notes:String(t.get(`notes`)||``).trim()}}function ht(e){return gt(e).join(`, `)}function C(e){return String(e||``).split(/[\n,;]+/).map(e=>e.trim()).filter(Boolean)}function gt(e){return Array.isArray(e)?e.map(e=>String(e||``).trim()).filter(Boolean):C(e)}function _t(e){if(e==null||e===``)return null;let t=Number(e);return Number.isFinite(t)?t:null}function vt(e,t){let{escapeHtml:n,actionState:r=``}=t,i=dt(e);return`
    <section class="side-panel admin-matching-profile-panel">
      <div class="admin-company-ai-header">
        <div>
          <h3>Matching profile</h3>
          <p>Structured matching context for future hybrid scoring and AI reranking. Current production matching is unchanged.</p>
          <p><strong>Hybrid matching:</strong> ${ut()?`Enabled`:`Disabled / comparison only`}</p>
        </div>
      </div>
      <form data-admin-matching-profile-form data-company-id="${n(e.id)}">
        ${bt(`Kjarnaþjónusta`,`coreServices`,i.coreServices,n)}
        ${bt(`Aukaþjónusta`,`secondaryServices`,i.secondaryServices,n)}
        ${bt(`Útilokuð þjónusta`,`excludedServices`,i.excludedServices,n)}
        ${bt(`Æskilegar verkefnategundir`,`preferredProjectTypes`,i.preferredProjectTypes,n)}
        ${bt(`Útilokaðar verkefnategundir`,`excludedProjectTypes`,i.excludedProjectTypes,n)}
        ${bt(`Tæki og búnaður`,`equipment`,i.equipment,n)}
        ${bt(`Vottanir / réttindi`,`certifications`,i.certifications,n)}
        ${bt(`Æskilegir kaupendur`,`preferredBuyers`,i.preferredBuyers,n)}
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
  `}function yt(e,t){let{escapeHtml:n}=t,r=e.adminDecision||{},i=e.evaluationLabel||{},a=e.opportunity_id||e.opportunities?.id||``;return`
    <div class="admin-match-learning-controls">
      <form data-admin-match-decision-form data-company-id="${n(e.company_id||``)}">
        <input type="hidden" name="opportunityId" value="${n(a)}" />
        <select name="decision">
          ${[[``,`Ákvörðun`],[`send`,`Senda`],[`possible`,`Mögulegt`],[`reject`,`Hafna`]].map(([e,t])=>`<option value="${e}" ${r.decision===e?`selected`:``}>${n(t)}</option>`).join(``)}
        </select>
        <select name="reason">
          ${lt.map(([e,t])=>`<option value="${e}" ${r.reason===e?`selected`:``}>${n(t)}</option>`).join(``)}
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
  `}function bt(e,t,n,r){return`
    <label>${r(e)}
      <textarea name="${r(t)}" rows="2">${r(ht(n))}</textarea>
    </label>
  `}function xt(e){let{escapeHtml:t,invite:n=null,loading:r=!1,error:i=``,debugInfo:a=null,showDebug:o=!1,user:s=null,accepting:c=!1,signupHref:l=`/signup`,loginHref:u=`/login`,language:d=`is`}=e,f=d===`is`,p=f?`Aðgangsboð í VerkRadar`:`VerkRadar invite`,m=f?`Sæki aðgangsboð...`:`Loading invite...`,h=f?`Fyrirtæki`:`Company`,g=f?`Boðið netfang`:`Invited email`,_=f?`Innskráning`:`Login`,v=f?`Stofna aðgang`:`Create account`,y=f?`Ertu þegar með aðgang?`:`Already have an account?`,ee=f?`Tengja aðgang`:`Accept invite`,te=f?`Fara í innskráningu`:`Go to login`,ne=f?`Fara á forsíðu`:`Go to homepage`,re=f?`Aðgangsboðið tengir innskráninguna við fyrirtækjaprófíl sem hefur þegar verið settur upp.`:`This invite connects your login to an existing company profile.`;return`
    <section class="auth-page">
      <div class="auth-layout">
        <div class="auth-copy">
          <p class="eyebrow">${t(f?`AÐGANGUR`:`ACCESS`)}</p>
          <h1>${t(p)}</h1>
          <p>${t(re)}</p>
        </div>
        <div class="auth-form-column">
          <div class="auth-card invite-card">
            ${r?`<p>${t(m)}</p>`:``}
            ${i?`<div class="admin-message is-error">${t(i)}</div>`:``}
            ${o&&a?St(a,t):``}
            ${i&&!n?`
              <div class="auth-actions">
                <button class="btn btn-primary btn-large" type="button" data-action="go" data-href="/login">${t(te)}</button>
                <button class="btn btn-secondary btn-large" type="button" data-action="go" data-href="/">${t(ne)}</button>
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
  `}function St(e,t){return`
    <details class="admin-invite-debug">
      <summary>Invite diagnostics</summary>
      ${[{title:`Route/token`,fields:[`current_url`,`current_hash`,`token_source`,`token_present`,`token_length`,`localStorage_pending_token_present`,`sessionStorage_pending_token_present`,`auth_flow`,`raw_token_had_fragment`,`sanitized_token_length`,`code_present`,`exchange_code_attempted`,`exchange_code_succeeded`,`session_present`,`auth_callback_error`]},{title:`Auth`,fields:[`auth_session_present`,`auth_user_id_present`,`auth_user_email`,`email_confirmed_at_present`,`auth_event_received`,`access_token_present`]},{title:`Preview`,fields:[`preview_request_sent`,`preview_status`,`preview_response_body`]},{title:`Accept`,fields:[`accept_request_sent`,`authorization_header_included`,`accept_http_status`,`accept_response_body`,`accept_error_reason`,`session_user_id`,`session_user_email`,`bearer_jwt_sub`,`bearer_jwt_email`,`bearer_jwt_iss`,`bearer_jwt_exp`,`session_user_matches_bearer_sub`,`session_email_matches_bearer_email`]},{title:`Backend lookup`,fields:`action.token_received.token_length.computed_hash_prefix.lookup_found.matching_rows_count.invite_status.invite_expires_at.latest_invite_status.latest_invite_expires_at.invited_email.auth_user_id_present.auth_user_email.email_match.authorization_header_present.bearer_token_present.bearer_token_length.expected_project_ref.get_user_attempted.get_user_succeeded.get_user_error_code.get_user_error_message.admin_get_user_attempted.admin_get_user_exists.admin_get_user_error_code.admin_get_user_error_message.invalid_reason.update_attempted.update_succeeded`.split(`.`)}].map(n=>`
        <div class="admin-invite-debug-group">
          <strong>${t(n.title)}</strong>
          ${n.fields.map(n=>Ct(n,e[n],t)).join(``)}
        </div>
      `).join(``)}
    </details>
  `}function Ct(e,t,n){let r=typeof t==`object`&&t?JSON.stringify(t,null,2):String(t??``);return`
    <div class="admin-invite-debug-row">
      <span>${n(e)}</span>
      <code>${n(r||`—`)}</code>
    </div>
  `}function wt({authMessage:e,escapeHtml:t}){if(!e)return``;let n=Array.isArray(e.actions)?e.actions:[];return`
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
  `}function Tt({t:e,escapeHtml:t,authForm:n,authSubmitting:r,authMessage:i,signupHref:a=`/signup`,signupLabel:o=``,forgotPasswordHref:s=`/forgot-password`}){let c=o||e(`createAccount`);return`
    <section class="auth-page">
      <div class="auth-layout">
        <div class="auth-copy">
          <p class="eyebrow">${t(e(`login`))}</p>
          <h1>${t(e(`authLoginTitle`))}</h1>
          <p>${t(e(`authLoginSubtitle`))}</p>
        </div>

        <div class="auth-form-column">
          ${wt({authMessage:i,escapeHtml:t})}
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
  `}function Et({t:e,escapeHtml:t,authForm:n,authSubmitting:r,authMessage:i}){return`
    <section class="auth-page">
      <div class="auth-layout">
        <div class="auth-copy">
          <p class="eyebrow">${t(e(`passwordReset`))}</p>
          <h1>${t(e(`resetPasswordTitle`))}</h1>
          <p>${t(e(`resetPasswordSubtitle`))}</p>
        </div>

        <div class="auth-form-column">
          ${wt({authMessage:i,escapeHtml:t})}
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
  `}function Dt({t:e,escapeHtml:t,authForm:n,authSubmitting:r,authMessage:i}){return`
    <section class="auth-page">
      <div class="auth-layout">
        <div class="auth-copy">
          <p class="eyebrow">${t(e(`newPassword`))}</p>
          <h1>${t(e(`chooseNewPassword`))}</h1>
          <p>${t(e(`resetPasswordHelp`))}</p>
        </div>

        <div class="auth-form-column">
          ${wt({authMessage:i,escapeHtml:t})}
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
  `}function Ot({t:e,escapeHtml:t,authForm:n,authSubmitting:r,authMessage:i,loginHref:a=`/login`,inviteEmail:o=``,isInviteSignup:s=!1}){let c=o||n.email,l=e(s?`inviteCreateAccountSubtitle`:`createAccountSubtitle`);return`
    <section class="auth-page">
      <div class="auth-layout">
        <div class="auth-copy">
          <p class="eyebrow">${t(e(`createAccount`))}</p>
          <h1>${t(e(`createAccountTitle`))}</h1>
          <p>${t(l)}</p>
        </div>

        <div class="auth-form-column">
          ${wt({authMessage:i,escapeHtml:t})}
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
  `}function kt({t:e,escapeHtml:t,trialHref:n=`/trial`}){return`
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
  `}function At(e){let{escapeHtml:t,usageSummary:n=null,lastResult:r=null,isRunning:i=!1,formatAiUsageCost:a=e=>`$${Number(e||0).toFixed(4)}`}=e;return`
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
      ${n?Nt(n,{escapeHtml:t,formatAiUsageCost:a}):``}
      ${r?Ft(r,t):``}
    </section>
  `}function jt(e,t){let{escapeHtml:n,renderMatchDecisionControls:r=null}=t,i=e.latestMatches||[];return i.length?`
    <ul class="admin-detail-list admin-ai-aware-match-list">
      ${i.map(t=>Lt(t,{escapeHtml:n,company:e,renderMatchDecisionControls:r})).join(``)}
    </ul>
  `:`<p>No stored matches yet.</p>`}function Mt(e,t){let{escapeHtml:n,formatDateTime:r,formatAiUsageCost:i=e=>`$${Number(e||0).toFixed(4)}`,actionState:a=``,filter:o=`not_reviewed`,lastResult:s=null,usageSummary:c=null}=t,l=Ve(e.latestMatches||[],o,e);return`
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

      ${c?Nt(c,{escapeHtml:n,formatAiUsageCost:i}):``}
      ${s?Pt(s,n):``}

      <label class="admin-inline-control admin-company-ai-filter">
        <span>AI review filter</span>
        <select data-admin-company-ai-filter>
          ${[[`ai_recommended`,`AI recommended`],[`ai_possible`,`AI possible`],[`needs_review`,`Needs review`],[`outside_service_area`,`Outside service area`],[`not_reviewed`,`Not AI reviewed`]].map(([e,t])=>`<option value="${e}" ${o===e?`selected`:``}>${t}</option>`).join(``)}
        </select>
      </label>

      ${l.length?`
        <ul class="admin-detail-list admin-ai-match-list">
          ${l.map(t=>Rt(t,{escapeHtml:n,formatDateTime:r,company:e})).join(``)}
        </ul>
      `:`<p class="muted-text">No matches for this AI review filter.</p>`}
    </section>
  `}function Nt(e,{escapeHtml:t,formatAiUsageCost:n}){return`
    <div class="admin-ai-usage-summary">
      <span><strong>AI usage today</strong></span>
      <span>${Number(e.reviewsToday||0)} reviews today</span>
      <span>${t(n(e.estimatedCostToday||0))} estimated cost</span>
      <span>${Number(e.remainingReviewsToday||0)} reviews remaining</span>
    </div>
  `}function Pt(e,t){return`
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
  `}function Ft(e,t){return`
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
    ${It(e.company_diagnostics||[],t)}
  `}function It(e,t){return e.length?`
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
  `:``}function Lt(e,{escapeHtml:t,company:n,renderMatchDecisionControls:r}){let i=e.opportunities||{},a=Be(e,n),o=Number(e.match_score||0);return`
    <li class="admin-ai-aware-match ${t(a.tone||`muted`)}">
      <strong>${t(i.title||`Opportunity`)}</strong>
      <span>
        <b>${t(a.label)}</b>
        ${a.confidence?` · ${Math.round(a.confidence*100)}%`:``}
        · Rule score ${o}
        ${a.bucket===`outside_service_area`?` · Rule label suppressed`:` · ${t(e.match_label||`Match`)}`}
      </span>
      ${e.ai_review_skipped_reason?`<small>Skipped: ${t(Ue(e.ai_review_skipped_reason))}</small>`:``}
      ${e.ai_review_profile_stale?`<small>AI review may be stale because the company profile changed.</small>`:``}
      ${e.adminDecision?`<small>Decision: ${t(e.adminDecision.decision||``)}${e.adminDecision.reason?` · ${t(e.adminDecision.reason)}`:``}</small>`:``}
      ${e.evaluationLabel?`<small>Evaluation: ${t(e.evaluationLabel.label||``)}${e.evaluationLabel.reason?` · ${t(e.evaluationLabel.reason)}`:``}</small>`:``}
      ${r?r(e,{escapeHtml:t}):``}
    </li>
  `}function Rt(e,{escapeHtml:t,formatDateTime:n,company:r}){let i=e.opportunities||{},a=Be(e,r),o=a.confidence?` · ${Math.round(a.confidence*100)}%`:``,s=e.ai_reviewed_at?` · ${n(e.ai_reviewed_at)}`:``,c=e.ai_review_skipped_reason?` · Skipped: ${Ue(e.ai_review_skipped_reason)}`:``;return`
    <li class="admin-ai-match-row ${t(a.tone||`muted`)}">
      <strong>${t(i.title||`Opportunity`)}</strong>
      <span>${t(a.label)}${t(o)}${t(s)}${t(c)}</span>
      ${e.ai_review_profile_stale?`<span>AI review may be stale because the company profile changed.</span>`:``}
      <span>Rule score ${Number(e.match_score||0)} · ${t(e.match_label||`Match`)}</span>
      <span class="admin-ai-debug">company_id=${t(e.company_id||``)} · opportunity_id=${t(e.opportunity_id||``)} · ai_review_found=${e.ai_review_found===!0?`true`:`false`}</span>
    </li>
  `}function zt({copy:e,suggestions:t,labels:n,escapeHtml:r}){return`
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
  `}function Bt({profile:e,matches:t,stats:n,filters:r,filterSummary:i,matchStatus:a,opportunityLoadError:o,isAdmin:s,matchingLoading:c,labels:l,renderFilterDropdown:u,renderOpportunityCard:d,renderEmptyState:f,escapeHtml:p}){return`
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
  `}function Vt({opp:e,saved:t,deadline:n,sourceBadgeHtml:r,qualityBadgeHtml:i,safetyBadgeHtml:a,extractedBadgeHtml:o,originalLanguageBadgeHtml:s,matchBadgeClass:c,matchLabel:l,buyer:u,location:d,value:f,reasons:p,labels:m,escapeHtml:h}){return`
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
  `}function Ht({opp:e,saved:t,deadline:n,requirements:r,matchReasons:i,risks:a,safetyReasons:o,nextSteps:s,matchBadgeClass:c,matchLabel:l,qualityBadgeHtml:u,safetyBadgeHtml:d,extractedBadgeHtml:f,qualityWarningHtml:p,buyerSummary:m,location:h,value:g,sourceUrl:_,extractedDetails:v,qualityLabel:y,safetyStatusLine:ee,category:te,type:ne,publishedDate:re,cpvCode:b,labels:x,escapeHtml:S}){return`
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
              ${v}
              <p><strong>${S(x.quality)}:</strong> ${S(y)}</p>
              ${ee}
              <p><strong>${S(x.category)}:</strong> ${S(te)}</p>
              <p><strong>${S(x.type)}:</strong> ${S(ne)}</p>
              <p><strong>${S(x.deadline)}:</strong> <span class="${n.className}">${S(x.deadlineLabel)}</span></p>
              <p><strong>${S(x.published)}:</strong> ${S(re)}</p>
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
                <a class="btn btn-secondary" href="${S(_)}" target="_blank" rel="noreferrer">${S(x.openSource)}</a>
                <button class="btn btn-ghost" data-action="ignore" data-id="${e.id}">${S(x.markNotRelevant)}</button>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  `}function Ut(e,t){return e.map(e=>`<p>${t(e)}</p>`).join(``)}function Wt({language:e,escapeHtml:t,eyebrow:n,title:r,intro:i,sections:a}){let o=e===`is`?`Síðast uppfært`:`Last updated`,s=e===`is`?`4. júní 2026`:`June 4, 2026`;return`
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
            <div class="legal-content">${Ut(n,t)}</div>
          </section>
        `).join(``)}
      </div>
    </section>
  `}function Gt({t:e,escapeHtml:t,language:n,trialHref:r}){let i=n===`is`,a=i?[{title:`Gatnagerð og lagnir við nýtt hverfi`,type:`1`,score:`Mælt með · Skilafrestur eftir 10 daga`},{title:`Lóðarframkvæmdir við skóla`,type:`2`,score:`Passar við lóðarvinnu · Staðfesta gögn`},{title:`Bílastæði og yfirborðsfrágangur`,type:`3`,score:`Mögulegt tækifæri · Opna heimild`}]:[{title:`Roadworks and utilities for a new neighborhood`,type:`1`,score:`Strong match · Deadline in 10 days`},{title:`Site works at a school`,type:`2`,score:`Fits site work · Verify documents`},{title:`Parking area and surface finishing`,type:`3`,score:`Possible match · Open source`}],o=i?[[`Jarðvinna og gatnagerð`,`Útboð um vegi, lóðir, bílastæði, stíga og jarðvegsvinnu.`],[`Lagnavinna og fráveita`,`Verkefni um lagnir, dælustöðvar, fráveitu, vatn og hitaveitu.`],[`Malbikun og lóðarframkvæmdir`,`Gatnagerð, yfirborðsfrágangur, gangstéttir og viðhald.`],[`Rafverktakar`,`Raflagnir, brunakerfi, lýsing, öryggiskerfi og hleðslustöðvar.`],[`Ræstingar og þjónusta`,`Reglulegir þjónustusamningar, húsþjónusta og rekstrarverkefni.`],[`Verkfræðistofur og ráðgjafar`,`Hönnun, eftirlit, ráðgjöf og verkefnastjórnun þegar það á við.`]]:[[`Earthworks and roadworks`,`Tenders for roads, plots, parking areas, paths and earthworks.`],[`Utilities and drainage`,`Projects for pipes, pumping stations, drainage, water and heating utilities.`],[`Paving and site works`,`Road construction, surface finishing, sidewalks and maintenance.`],[`Electrical contractors`,`Wiring, fire alarms, lighting, security systems and chargers.`],[`Cleaning and services`,`Recurring service contracts, facility services and operations work.`],[`Engineering and advisors`,`Design, supervision, consulting and project management where relevant.`]];return`
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
  `}function Kt({t:e,escapeHtml:t,trialHref:n}){let r=[{key:`trial`,name:e(`pricingTrialPlan`),price:e(`pricingTrialPrice`),subtext:e(`pricingTrialSubtext`),items:[e(`pricingTrialManualProfile`),e(`pricingTrialFiltering`),e(`pricingTrialReportIfRelevant`),e(`pricingTrialNoCommitment`),e(`pricingTrialNoCard`)],cta:e(`pricingTrialCta`)},{key:`monitoring`,name:e(`pricingMonitoringPlan`),price:e(`pricingMonitoringPrice`),subtext:e(`pricingMonitoringSubtext`),highlighted:!0,items:[e(`pricingMonitoringSources`),e(`pricingMonitoringEmail`),e(`pricingMonitoringFilters`),e(`pricingMonitoringReminders`),e(`pricingMonitoringFeedback`),e(`pricingOneProfile`)],cta:e(`pricingMonitoringCta`)},{key:`custom`,name:e(`pricingCustomPlan`),price:e(`pricingCustomPrice`),items:[e(`pricingCustomProfiles`),e(`pricingCustomServices`),e(`pricingCustomMonitoring`),e(`pricingCustomPriorityReview`),e(`pricingCustomAudience`)],cta:e(`pricingCustomCta`)}];return`
    <section class="page-head">
      <p class="eyebrow">${t(e(`pricingEyebrow`))}</p>
      <h1>${t(e(`pricingHeadline`))}</h1>
      <p>${t(e(`pricingSubtitle`))}</p>
    </section>

    <section class="pricing-grid">
      ${r.map(r=>qt(r,{t:e,escapeHtml:t,trialHref:n})).join(``)}
    </section>
  `}function qt(e,{t,escapeHtml:n,trialHref:r}){let i=!!e.highlighted,a=`${r}${String(r).includes(`?`)?`&`:`?`}plan=${encodeURIComponent(e.key||`trial`)}`;return`
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
  `}function Jt({t:e,escapeHtml:t,submitted:n=!1,error:r=``}){return`
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
  `}var Yt=[`Reykjavík`,`Capital Area`,`Suðurnes`,`South Iceland`,`West Iceland`,`North Iceland`,`East Iceland`,`Westfjords`,`All Iceland`,`Remote / Online`];function Xt(e){let{t,escapeHtml:n,profileDraft:r,renderCustomDropdown:i,getFilterOptions:a}=e,o=r.industry||``;return`
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
  `}function Zt(e){let{t,escapeHtml:n,accountEmail:r}=e;return r?`
    <div class="form-section account-access-section">
      <h2>${n(t(`accountAccess`))}</h2>
      <div class="readonly-field">
        <span>${n(t(`loginEmail`))}</span>
        <strong>${n(r)}</strong>
      </div>
      <p class="field-helper">${n(t(`loginEmailHelper`))}</p>
    </div>
  `:``}function Qt(e){let{t,escapeHtml:n,profileDraft:r,arrayFieldText:i,getProfileSuggestions:a,renderSuggestionChips:o}=e,s=r.industry||``,c=a(`services`,s),l=a(`includeKeywords`,s);return`
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
  `}function $t(e){let{t,escapeHtml:n,profileDraft:r,arrayFieldText:i,formatCustomerLocation:a}=e;return`
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
        ${Yt.map(e=>`
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
  `}function en(e){let{t,escapeHtml:n,profileDraft:r}=e;return`
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
  `}function tn(e){let{t,escapeHtml:n,capitalize:r,profileDraft:i}=e;return`
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
  `}function nn(e){let{t,escapeHtml:n,hasProfile:r,isSavingProfile:i,profileSaved:a,profileSaveMessage:o,profileSaveError:s}=e,c=t(r?`saveProfile`:`createProfile`);return`
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
  `}function rn(e){let t=e.formId||`profile-form`;return`
    <form id="${e.escapeHtml(t)}" class="form-card settings-profile-form">
      ${Zt(e)}
      ${Xt(e)}
      ${Qt(e)}
      ${$t(e)}
      ${en(e)}
      ${tn(e)}
      ${nn(e)}
    </form>
  `}function an({report:e,title:t,created:n,itemLabel:r,statusLabel:i,hideLabel:a,viewLabel:o,escapeHtml:s}){return`
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
  `}function on({report:e,options:t={},companyName:n,dateRange:r,generatedByLabel:i,reportTitleLabel:a,closeLabel:o,escapeHtml:s}){return`
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
  `}function sn({label:e,value:t,escapeHtml:n}){return`
    <div class="report-summary-card">
      <span>${n(e)}</span>
      <strong>${t}</strong>
    </div>
  `}function cn({title:e,description:t,opportunities:n,emptyText:r,renderOpportunityItem:i,escapeHtml:a}){return`
    <section class="report-section">
      <div class="report-section-head">
        <h3>${a(e)}</h3>
        <p>${a(t)}</p>
      </div>
      ${n.length?n.map(i).join(``):`<div class="report-empty">${a(r)}</div>`}
    </section>
  `}function ln({opp:e,valueText:t,deadlineText:n,sourceUrl:r,risks:i,fallbackReason:a,qualityBadgeHtml:o,matchBadgeClass:s,matchLabel:c,statusText:l,buyerLabel:u,buyerValue:d,sourceLabel:f,sourceValue:p,areaLabel:m,areaValue:h,deadlineLabel:g,valueLabel:_,whyLabel:v,risksLabel:y,openSourceLabel:ee,sourceMissingLabel:te,formatReason:ne,formatRisk:re,escapeHtml:b}){let x=(e.matchReasons.length?e.matchReasons:[a]).slice(0,4);return`
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
        <span><strong>${b(_)}</strong><em>${b(t)}</em></span>
      </div>
      <div class="report-detail-grid">
        <div>
          <h5>${b(v)}</h5>
          <ul>${x.map(e=>`<li>${b(ne(e))}</li>`).join(``)}</ul>
        </div>
        <div>
          <h5>${b(y)}</h5>
          <ul>${i.slice(0,5).map(e=>`<li>${b(re(e))}</li>`).join(``)}</ul>
        </div>
      </div>
      ${r?`<a class="report-source-link" href="${b(r)}" target="_blank" rel="noopener">${b(ee)} <span aria-hidden="true">↗</span></a>`:`<span class="report-source-link is-disabled">${b(te)}</span>`}
    </article>
  `}function un({status:e,label:t,escapeHtml:n}){return`<span class="report-quality ${n(e)}">${n(t)}</span>`}function dn({t:e,escapeHtml:t,language:n,profileDraftDirty:r,profileLoadError:i,showDemoReset:a,profileFormHtml:o}){return`
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
  `}async function fn(e){if(!u)throw Error(`Trial request storage is not configured.`);let t=yn(e);xn(t);let n=bn(),{error:r}=await u.from(`trial_requests`).insert({id:n,...t});if(r)throw r;let i=await mn(n).catch(e=>(console.warn(`Trial request was saved, but notification failed:`,e),{ok:!1,error:e instanceof Error?e.message:String(e)}));return{ok:!0,request:{id:n},stored:!0,notification:i}}async function pn(){if(!u)throw Error(`Trial request storage is not configured.`);let{data:e,error:t}=await u.from(`trial_requests`).select(`id, company_name, contact_name, email, phone, services, locations, message, status, created_at, converted_company_id, notification_sent_at, notification_started_at, notification_error`).order(`created_at`,{ascending:!1});if(t)throw t;return e||[]}async function mn(e){let t=Tn();if(!t)return{ok:!1,skipped:!0,reason:`notification_endpoint_not_configured`};let n=await fetch(t,{method:`POST`,headers:En(),body:JSON.stringify({requestId:e})}),r=await n.json().catch(()=>({}));if(!n.ok||r?.error)throw Error(r?.error||`Trial notification failed with status ${n.status}`);return r}async function hn(e,t){if(!u)throw Error(`Trial request storage is not configured.`);let n=Sn(t);if(!e||![`contacted`,`rejected`].includes(n))throw Error(`Unsupported trial request status update.`);let{data:r,error:i}=await u.from(`trial_requests`).update({status:n}).eq(`id`,e).is(`converted_company_id`,null).select(`id, status, converted_company_id`).maybeSingle();if(i)throw i;if(!r)throw Error(`Trial request was not updated. It may already be converted.`);return r}async function gn(e,t){let n=wn();if(!n)throw Error(`Admin company action endpoint is not configured.`);let r=await Dn(),i=await fetch(n,{method:`POST`,headers:r,body:JSON.stringify({action:`create_company_from_trial_request`,trialRequestId:e,company:t})}),a=await i.json().catch(()=>({}));if(!i.ok||a?.error)throw Error(a?.error||`Company creation failed with status ${i.status}`);return a}function _n(e,t){let n=t?t():{},r=Cn(e?.services),i=Cn(e?.locations);return{...n,companyName:String(e?.company_name||``).trim(),contactName:String(e?.contact_name||``).trim(),contactEmail:String(e?.email||``).trim(),billingEmail:String(e?.email||``).trim(),phone:String(e?.phone||``).trim(),services:r,includeKeywords:r,locations:i,serviceAreas:i,selectedPlan:n.selectedPlan||`basic`,billingStatus:n.billingStatus||`trial`,reportFrequency:n.reportFrequency||`weekly`,reportDay:n.reportDay||`monday`,deadlineReminders:n.deadlineReminders??!0,includeLowConfidence:n.includeLowConfidence??!1}}function vn(e){let t={new:`Ný`,contacted:`Haft samband`,rejected:`Hafnað`,converted:`Umbreytt`};return t[Sn(e)]||t.new}function yn(e){let t=t=>String(e.get(t)||``).trim();return{company_name:t(`company`),contact_name:t(`contact`),email:t(`email`),phone:t(`phone`),services:t(`services`),locations:t(`regions`),message:t(`notes`),status:`new`}}function bn(){return globalThis.crypto?.randomUUID?globalThis.crypto.randomUUID():`10000000-1000-4000-8000-100000000000`.replace(/[018]/g,e=>{let t=globalThis.crypto?.getRandomValues?globalThis.crypto.getRandomValues(new Uint8Array(1))[0]:Math.floor(Math.random()*256);return(Number(e)^t&15>>Number(e)/4).toString(16)})}function xn(e){let t=[`company_name`,`contact_name`,`email`,`services`,`locations`].filter(t=>!String(e[t]||``).trim());if(t.length)throw Error(`Missing required trial request fields: ${t.join(`, `)}`)}function Sn(e){let t=String(e||`new`).trim().toLowerCase();return[`new`,`contacted`,`rejected`,`converted`].includes(t)?t:`new`}function Cn(e){return String(e||``).split(/[\n,;]+/).map(e=>e.trim()).filter(Boolean)}function wn(){return window.VERKRADAR_ADMIN_COMPANY_ACTIONS_URL?window.VERKRADAR_ADMIN_COMPANY_ACTIONS_URL:window.VERKRADAR_SUPABASE_URL?`${window.VERKRADAR_SUPABASE_URL}/functions/v1/admin-company-actions`:`${c}/functions/v1/admin-company-actions`}function Tn(){return window.VERKRADAR_NOTIFY_TRIAL_REQUEST_URL?window.VERKRADAR_NOTIFY_TRIAL_REQUEST_URL:window.VERKRADAR_SUPABASE_URL?`${window.VERKRADAR_SUPABASE_URL}/functions/v1/notify-trial-request`:`${c}/functions/v1/notify-trial-request`}function En(){return{"Content-Type":`application/json`,apikey:l,Authorization:`Bearer ${l}`}}async function Dn(){let e={"Content-Type":`application/json`,apikey:l};if(!u)return e;let{data:t,error:n}=await u.auth.getSession();if(n)throw n;let r=t?.session?.access_token;if(!r)throw Error(`Admin authentication is required.`);return{...e,Authorization:`Bearer ${r}`}}var On=[[`Tender and opportunity report`,`Útboðs- og verkefnayfirlit`],[`Weekly Opportunity Report`,`Útboðs- og verkefnayfirlit`],[`Open tenders / quote requests`,`Opin útboð / verðfyrirspurnir`],[`Possible upcoming opportunities`,`Möguleg væntanleg tækifæri`],[`Needs review`,`Þarfnast staðfestingar`],[`Strong match`,`Sterk samsvörun`],[`Good match`,`Góð samsvörun`],[`Possible match`,`Möguleg samsvörun`],[`Weak match`,`Veik samsvörun`],[`Quality`,`Gæði`],[`Buyer`,`Kaupandi`],[`Source`,`Heimild`],[`Location`,`Svæði`],[`Deadline`,`Skilafrestur`],[`Estimated value`,`Áætlað verðmæti`],[`Value`,`Áætlað verðmæti`],[`Why this matters`,`Af hverju þetta gæti skipt máli`],[`Why this fits`,`Af hverju þetta gæti skipt máli`],[`Risks / things to check`,`Atriði til að staðfesta`],[`Open source`,`Opna heimild`],[`Unknown buyer`,`Óþekktur kaupandi`],[`All Iceland`,`Allt landið`],[`Not found`,`Fannst ekki`],[`Not listed`,`Ekki gefið upp`]];function kn(e,t){return t===`is`?On.reduce((e,[t,n])=>e.replaceAll(t,n),String(e||``)):e}function An(e){return Array.from(new Set((e||[]).map(e=>String(e||``).trim()).filter(Boolean)))}function jn(e){return String(e||``).replace(/^mentions your service:\s*/i,``).replace(/^contains your keyword:\s*/i,``).replace(/^mentions core service:\s*/i,``).replace(/^nefnir þjónustu ykkar:\s*/i,``).replace(/^inniheldur leitarorð:\s*/i,``).replace(/^nefnir lykilþjónustu:\s*/i,``).trim()}function w(e,t=`is`){let n=t!==`en`;return{downloadPdf:n?`Sækja PDF`:`Download PDF`,copyReportEmail:n?`Afrita skýrslupóst`:`Copy report email`,markAsSent:n?`Merkja sem sent`:`Mark as sent`,marking:n?`Merkir...`:`Marking...`,close:n?`Loka`:`Close`,sentStatus:n?`Sendingarstaða`:`Sent status`,notSent:n?`Ekki sent`:`Not sent`,sentOn:n?`Sent`:`Sent on`,company:n?`Fyrirtæki`:`Company`,period:n?`Tímabil`:`Period`,generatedAt:n?`Útbúið`:`Generated at`,mode:n?`Gerð`:`Mode`,items:n?`Fjöldi`:`Items`,currentActive:n?`Núverandi virk tækifæri`:`Current active opportunities`,newOpportunities:n?`Ný tækifæri`:`New opportunities`,reasons:n?`Ástæður`:`Reasons`,openSource:n?`Opna heimild`:`Open source`,verifyBadge:n?`Staðfesta gögn`:`Verify documents`,verifyTenderDocs:n?`Staðfesta útboðsgögn`:`Verify tender documents`,verificationSentence:n?`Staðfesta þarf útboðsgögn áður en brugðist er við.`:`Tender documents should be verified before taking action.`,matchScore:n?`Samsvörun`:`Match`,strongMatchScore:n?`Sterk samsvörun`:`Strong match`,openActiveTitle:n?`Opin útboð / virk tækifæri`:`Open tenders / active opportunities`,openActiveDescription:n?`Opin útboð eða virk verðfyrirspurnaratriði með skilafresti. Yfirfarið frumgögn áður en brugðist er við.`:`Open tenders or active quote-request items with deadlines. Review source documents before acting.`,possibleTitle:n?`Möguleg tækifæri til skoðunar`:`Possible opportunities to review`,possibleDescription:n?`Tækifæri sem gætu átt við, en þar sem þarf að staðfesta umfang, kröfur eða hlutverk fyrirtækisins.`:`Opportunities that may fit, but where scope, requirements, or company role should be verified.`,earlyTitle:n?`Væntanleg verkefni / early signals`:`Upcoming projects / early signals`,earlyDescription:n?`Vísbendingar um möguleg framtíðarverkefni sem eru ekki endilega formleg útboð ennþá.`:`Signals for possible future projects that may not be formal tenders yet.`}[e]||e}function Mn(e=`is`){return w(`verificationSentence`,e)}function Nn(e,t=`is`){let n=Number(e?.matchScore||e?.match_score||0)>=85;return t===`en`?n?`Strong match`:`Match`:n?`Sterk samsvörun`:`Samsvörun`}function Pn(e,t=`is`){let n=String(e?.aiReviewFit||e?.ai_review_fit||``).toLowerCase()===`strong`||Number(e?.matchScore||e?.match_score||0)>=85;return t===`en`?n?`Recommended — tender documents should be verified`:`Possible opportunity — tender documents should be verified`:n?`Mælt með — staðfesta þarf útboðsgögn`:`Mögulegt tækifæri — staðfesta þarf útboðsgögn`}function Fn(e,t=`is`){let n=String(e?.aiReviewFit||e?.ai_review_fit||``).toLowerCase();return t===`en`?n===`strong`||Number(e?.matchScore||0)>=85?`Recommended`:n===`possible`?`Possible opportunity`:String(e?.reportSection||``)===`early`?`Upcoming signal`:`Verify documents`:n===`strong`||Number(e?.matchScore||0)>=85?`Mælt með`:n===`possible`?`Mögulegt tækifæri`:String(e?.reportSection||``)===`early`?`Væntanlegt / merki`:`Staðfesta útboðsgögn`}function In(e=[],t=`is`){let n=[],r=new Set;for(let i of e||[]){let e=String(i||``).trim();if(!e)continue;let a=e.toLowerCase();if(a.includes(`winter/snow service fit`)){n.push(t===`is`?`Passar við vetrarþjónustu/snjómokstur; staðfestið umfang og getu.`:`Winter/snow service fit; verify capacity and scope.`);continue}if(a.includes(`deadline is valid and in the future`)){n.push(t===`is`?`Skilafrestur er í framtíðinni.`:`Deadline is valid and in the future.`);continue}if(a.includes(`location matches company service areas`)){n.push(t===`is`?`Staðsetning passar við þjónustusvæði.`:`Location matches company service areas.`);continue}if(a.includes(`verify capacity and scope`)){n.push(t===`is`?`Staðfestið umfang og getu.`:`Verify capacity and scope.`);continue}let o=jn(e),s=o.toLowerCase();if(!o||r.has(s))continue;r.add(s);let c=t===`is`&&/passar|nefnir|stað|skilafrestur|þjónustu|umfang/i.test(o);n.push(t===`is`?c?o:`Passar við þjónustu eða leitarorð: ${o}`:/matches|mentions|deadline|location|verify/i.test(o)?o:`Matches service or keyword: ${o}`)}return An(n).slice(0,4)}function Ln(e,t=`is`){let n=String(e||``).trim();if(!n)return``;let r=n.toLowerCase();if(t!==`en`){if(r.includes(`deadline not available`))return`Skilafrestur fannst ekki í innfluttum gögnum — staðfestið á upprunasíðu.`;if(r.includes(`open the source documents`))return`Opna útboðsgögn.`;if(r.includes(`confirm mandatory requirements`))return`Staðfesta kröfur og hæfisskilyrði.`;if(r.includes(`check capacity and profitability`))return`Meta getu og arðsemi.`;if(r.includes(`prepare questions before the deadline`))return`Undirbúa fyrirspurnir fyrir skilafrest.`;if(r.includes(`verify capacity and scope`))return`Staðfestið umfang og getu.`}return n}function Rn({companyName:e,matches:t,language:n=`is`}){let r=n!==`en`,i=r?`Sæll/Sæl,

VerkRadar fann eftirfarandi tækifæri sem gætu passað við ykkar þjónustu:`:`Hi,

VerkRadar found the following opportunities that may fit your services:`,a=r?`Staðfestið alltaf útboðsgögn, skilafresti og kröfur á upprunalegri heimild áður en brugðist er við.

Kv.
Kristján`:`Always verify the tender documents, deadlines, requirements, and eligibility on the original source before taking action.

Best,
Kristján`;return`${i}\n\n${(t||[]).map(e=>{let t=In(e.matchReasons||e.reasons||[],n),i=t.length?t.map(e=>`- ${e}`).join(`
`):`- ${r?`Passar við fyrirtækjaprófílinn.`:`Matches the company profile.`}`;return r?`${e.title}
Útboðsaðili: ${e.buyer||`Óþekktur kaupandi`}
Skilafrestur: ${e.deadline||`Fannst ekki`}
Staða: ${Pn(e,n)}

Af hverju þetta gæti passað:
${i}

Heimild:
${e.url||`Engin heimild skráð`}`:`${e.title}
Buyer: ${e.buyer||`Unknown buyer`}
Deadline: ${e.deadline||`Not found`}
Status: ${Pn(e,n)}

Why this may fit:
${i}

Source:
${e.url||`No source URL listed`}`}).join(`

`)||(r?`Engin atriði eru í þessu yfirliti.`:`No items are included in this report.`)}\n\n${a}`}function zn(e){return String(e||``).toLowerCase()}function Bn(e){return Array.isArray(e)?e.map(e=>String(e||``).trim()).filter(Boolean):[]}function Vn(e){return Array.from(new Set((e||[]).map(e=>String(e||``).trim()).filter(Boolean)))}function Hn(e){return e?new Date(e).getTime():NaN}function Un(e){let t=Hn(e);if(Number.isNaN(t))return!0;let n=new Date;return n.setHours(0,0,0,0),t<n.getTime()}function Wn(e={}){return{aiReviewFit:zn(e.fit),aiReviewConfidence:Number(e.confidence||0),aiReviewSendToClient:e.send_to_client===!0||e.sendToClient===!0,aiReviewReason:String(e.reason||``),aiFitReasons:Bn(e.fit_reasons||e.fitReasons),aiRisksOrQuestions:Bn(e.risks_or_questions||e.risksOrQuestions),aiSuggestedClientSummary:String(e.suggested_client_summary||e.suggestedClientSummary||``),aiReviewedAt:e.updated_at||e.created_at||``}}function Gn(e,t){let n=new Map;for(let e of t||[]){let t=String(e.opportunity_id||e.opportunityId||``);t&&n.set(t,Wn(e))}return(e||[]).map(e=>{let t=n.get(String(e.id||e.opportunity_id||``));return t?{...e,...t,matchReasons:Vn([t.aiSuggestedClientSummary,...t.aiFitReasons,...Array.isArray(e.matchReasons)?e.matchReasons:[]]),risks:Vn([...t.aiRisksOrQuestions,...Array.isArray(e.risks)?e.risks:[]])}:e})}function Kn(e){return qn(e)!==`excluded`}function qn(e){let t=zn(e?.aiReviewFit||e?.ai_review_fit);if(!e?.deadline||Un(e.deadline))return`excluded`;let n=e?.aiReviewSendToClient===!0||e?.ai_review_send_to_client===!0;if(String(e?.aiReviewSkippedReason||e?.ai_review_skipped_reason||``).toLowerCase()===`outside_service_area`||[e?.aiReviewReason,...Bn(e?.aiRisksOrQuestions||e?.risks_or_questions)].join(` `).toLowerCase().includes(`outside service area`))return`excluded`;if(t)return[`weak`,`no_fit`].includes(t)?`excluded`:t===`strong`&&n?`ai_strong`:t===`possible`&&n?`ai_possible`:`excluded`;let r=String(e?.safetyStatus||e?.safety_status||`auto_approved`).toLowerCase();if(r===`hidden`||r===`needs_review`)return`excluded`;let i=Number(e?.matchScore||e?.match_score||0),a=String(e?.matchLabel||e?.match_label||``).toLowerCase();return i>=75||a.includes(`strong`)||a.includes(`good`)?`rule_fallback`:`excluded`}function Jn(e){let t=qn(e);return Yn(e)&&(t===`ai_strong`||t===`ai_possible`||t===`rule_fallback`)?`confirmed`:t===`ai_possible`||t===`rule_fallback`?`early`:`excluded`}function Yn(e){return!!e?.deadline&&!Un(e.deadline)}function Xn(e){return[...e||[]].filter(Kn).sort((e,t)=>{let n={ai_strong:0,ai_possible:1,rule_fallback:2},r=qn(e),i=qn(t);return(n[r]??9)-(n[i]??9)||Number(t.aiReviewConfidence||t.ai_review_confidence||0)-Number(e.aiReviewConfidence||e.ai_review_confidence||0)||Number(t.matchScore||t.match_score||0)-Number(e.matchScore||e.match_score||0)||Hn(e.deadline)-Hn(t.deadline)})}function T(e){if(!e)return 999;let t=new Date,n=new Date(`${e}T00:00:00`);if(Number.isNaN(n.getTime()))return 999;let r=n-new Date(t.getFullYear(),t.getMonth(),t.getDate());return Math.ceil(r/(1e3*60*60*24))}function Zn(e){if(!e)return`No deadline`;let t=new Date(`${e}T00:00:00`);return Number.isNaN(t.getTime())?String(e):new Intl.DateTimeFormat(`en-GB`,{year:`numeric`,month:`short`,day:`2-digit`}).format(t)}function E(e){return e?new Intl.DateTimeFormat(`en-GB`,{year:`numeric`,month:`short`,day:`2-digit`}).format(new Date(e)):`Unknown date`}function Qn(e){return Array.from(new Set((e||[]).map(e=>String(e||``).trim()).filter(Boolean)))}function D(e){return String(e||``).split(`,`).map(e=>e.trim()).filter(Boolean)}function O(e){return Qn(Array.isArray(e)?e:D(e))}function $n(e){return D(e)}function k(e){return String(e||``).toLowerCase().normalize(`NFD`).replace(/[\u0300-\u036f]/g,``).replace(/æ/g,`ae`).replace(/[ðþ]/g,e=>e===`ð`?`d`:`th`).replace(/[^a-z0-9]+/g,` `).trim()}function A(e){return String(e??``).replaceAll(`&`,`&amp;`).replaceAll(`<`,`&lt;`).replaceAll(`>`,`&gt;`).replaceAll(`"`,`&quot;`).replaceAll(`'`,`&#039;`)}function er(e){return String(e||``).charAt(0).toUpperCase()+String(e||``).slice(1)}function tr(e){return/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(String(e||``))}function nr(e){let t=String(e||``).trim();return/^https?:\/\//i.test(t)?t:``}function rr(e,t=`ISK`){if(!e)return``;let n=t||`ISK`,r=n===`ISK`?`kr`:n;return`${new Intl.NumberFormat(`is-IS`).format(e)} ${r}`}function ir(e,t){let n=t||(e=>e);return{"Confirmed tender":n(`confirmedTender`),"Likely opportunity":n(`likelyOpportunity`),"Early signal":n(`earlySignal`),"Needs review":n(`needsReview`),"Tender awarded":n(`tenderAwarded`),"Tender already announced":n(`tenderAlreadyAnnounced`),"Upcoming tender":n(`upcomingTender`),"Project signal":n(`projectSignal`),"Original language":n(`originalLanguage`)}[e]||e||``}function ar(e,t){let n=t||(e=>e);return{"Strong match":n(`strongMatch`),"Good match":n(`goodMatch`),"Possible match":n(`possibleMatch`),"Weak match":n(`weakMatch`)}[e]||e||``}function or(e,t,n){let r=n||(e=>e),i=String(t||``).trim();return i?e===`buyer`&&(sr(i)||i.toLowerCase()===`unknown buyer`)?r(`unknownBuyer`):e===`location`&&i.toLowerCase()===`all iceland`?r(`allIceland`):e===`source`?i.replace(/\bprocurement\b/gi,r(`procurement`)):i:r(e===`buyer`?`unknownBuyer`:`notListed`)}function sr(e){let t=k(e);return!!(!t||[`admin`,`administrator`,`ritstjori`,`editor`,`noreply`,`no reply`,`wordpress`,`wp admin`,`user`,`test`].includes(t)||t.includes(`noreply`)||/^wp\s*[-_]?\s*\d+$/.test(t))}function cr(e){let t=k(e);return t?t.includes(`borgarbyggd`)?`Borgarbyggð`:t.includes(`akranes`)?`Akraneskaupstaður`:t.includes(`faxafloahafnir`)?`Faxaflóahafnir`:t.includes(`gardabaer`)?`Garðabær`:t.includes(`reykjanesbaer`)?`Reykjanesbær`:t.includes(`kopavogur`)?`Kópavogur`:t.includes(`hafnarfjordur`)?`Hafnarfjarðarbær`:t.includes(`mosfellsbaer`)?`Mosfellsbær`:t.includes(`arborg`)?`Sveitarfélagið Árborg`:t.includes(`fjardabyggd`)?`Fjarðabyggð`:t.includes(`mulathing`)?`Múlaþing`:t.includes(`garðabaer`)?`Garðabær`:(t.includes(`rikiskaup`)||t.includes(`utbodsvefur`),``):``}function lr(e,t,n={}){let r=String(e||``).trim();if(/reykjavíkurborg/i.test(r))return`Reykjavíkurborg`;if(r&&!sr(r)&&r.toLowerCase()!==`unknown buyer`)return r;let i=String(n.extracted_buyer||n.buyer||``).trim();return/reykjavíkurborg/i.test(i)?`Reykjavíkurborg`:i&&!sr(i)&&i.toLowerCase()!==`unknown buyer`?i:cr(t)||`Unknown buyer`}function ur(e){let t=k(e);return t?t.includes(`borgarbyggd`)?`Borgarbyggð / Vesturland`:t.includes(`akranes`)?`Akranes / Vesturland`:t.includes(`faxafloahafnir`)?`Höfuðborgarsvæðið`:t.includes(`arborg`)?`Árborg / Suðurland`:``:``}function dr(e,t,n){let r=String(e||``).trim();return t===`is`&&{"Capital Area":`Höfuðborgarsvæðið`,"South Iceland":`Suðurland`,"West Iceland":`Vesturland`,"North Iceland":`Norðurland`,"East Iceland":`Austurland`,Westfjords:`Vestfirðir`,"All Iceland":(n||(e=>e))(`allIceland`),"Remote / Online":`Fjarvinna / netverkefni`}[r]||r}function fr(e,t,{language:n=`en`,translate:r}={}){let i=r||(e=>e),a=or(e,t,i);if(n!==`is`)return a;let o=String(a||``).trim().toLowerCase();return{"public procurement":i(`publicProcurement`),procurement:i(`procurement`),tender:i(`tender`)}[o]||a.replace(/\bpublic procurement\b/gi,i(`publicProcurement`)).replace(/\btender\b/gi,i(`tender`))}function pr(e,{language:t=`en`,translate:n}={}){let r=n||((e,t={})=>t.value?`${e}: ${t.value}`:e),i=String(e||``);return i.startsWith(`Mentions your service:`)?r(`mentionsService`,{value:i.slice(22).trim()}):i.startsWith(`Contains your keyword:`)?r(`containsKeyword`,{value:i.slice(22).trim()}):{"National opportunity":r(`nationalOpportunity`),"Local match":r(`localMatch`),"Located in your selected region":r(`localMatch`),"Project value is inside your preferred range":t===`is`?`Áætlað verðmæti er innan óskaðs bils`:`Project value is inside your preferred range`,"Deadline is coming up soon":t===`is`?`Skilafrestur nálgast`:`Deadline is coming up soon`,"Matched to your company profile.":t===`is`?`Passar við fyrirtækjaprófílinn.`:`Matched to your company profile.`,"Matched to your profile by service, location or keyword overlap.":t===`is`?`Passar við þjónustu, svæði eða lykilorð í prófílnum.`:`Matched to your profile by service, location or keyword overlap.`}[i]||i||``}function mr(e,t=`en`){return t===`is`?{"Deadline not available in feed — verify on source page.":`Skilafrestur fannst ekki í innfluttum gögnum — staðfestið á upprunasíðu.`,"Deadline not available in imported data — verify on source page.":`Skilafrestur fannst ekki í innfluttum gögnum — staðfestið á upprunasíðu.`,"Deadline not available in source — verify page.":`Skilafrestur fannst ekki í heimild - staðfestið á upprunalegri síðu.`,"No formal tender deadline extracted — verify source article.":`Formlegur skilafrestur fannst ekki - staðfestið í heimildargrein.`,"Formal tender deadline not found yet — monitor source article.":`Formlegur skilafrestur fannst ekki enn - fylgist með heimildargrein.`,"Tender appears already announced/awarded — verify source article.":`Útboð virðist þegar auglýst eða afgreitt - staðfestið í heimildargrein.`,"Estimated value is not listed in the imported data.":`Áætlað verðmæti er ekki gefið upp í innfluttum gögnum.`,"Open the source page and confirm mandatory requirements.":`Opnið upprunalega heimild og staðfestið skyldukröfur.`,"Extracted project signal — verify tender timing in the source article.":`Útdregin verkefnavísbending - staðfestið útboðstímasetningu í heimildargrein.`,"Imported from broad feed — verify that this is a real tender or business opportunity.":`Innflutt úr breiðum fréttastraumi - staðfestið að þetta sé raunverulegt útboð eða viðskiptatækifæri.`}[e]||e||``:e||``}function hr(e,t=`en`){return t===`is`?{"Open the source documents":`Opna útboðsgögn`,"Confirm mandatory requirements":`Staðfesta kröfur og hæfisskilyrði`,"Check capacity and profitability":`Meta getu og arðsemi`,"Prepare questions before the deadline":`Undirbúa fyrirspurnir fyrir skilafrest`,"Open source documents and confirm requirements.":`Opna útboðsgögn og staðfesta kröfur.`}[e]||e||``:e||``}var gr=`Deadline not available in imported data — verify on source page.`,_r=`No formal tender deadline extracted — verify source article.`;function vr(){return n(e)}function j(e,t={}){return r(M?.language||`is`,e,t)}function yr(t){M.language=t===`en`?`en`:`is`,localStorage.setItem(e.language,M.language),X()}var br=a,xr=12e3;function Sr(){return o(M.user?.email||``)}var M={route:location.hash.replace(`#`,``)||`/`,language:vr(),pendingSignupPlan:jr(location.hash.replace(`#`,``)||`/`)||Er(),pendingInviteToken:oe(location.hash.replace(`#`,``)||`/`),invitePreview:null,invitePreviewLoading:!1,invitePreviewError:null,invitePreviewErrorToken:``,invitePreviewDebug:null,inviteAccepting:!1,inviteAuthEvent:``,inviteCallbackHandled:!1,trialRequestSubmitted:!1,trialRequestError:``,user:null,currentUser:null,isAdmin:!1,authLoading:!0,isBooting:!0,authLoaded:!1,profileLoaded:!1,adminLoaded:!1,bootError:null,authMessage:null,authForm:{email:``,password:``,newPassword:``,confirmPassword:``},authSubmitting:!1,isSavingProfile:!1,profileSaved:!1,profileSaveMessage:null,profileSaveError:null,profile:null,companyMembership:null,profileDraft:null,profileDraftDirty:!1,profileLoading:!1,profileLoadError:null,companyId:null,opportunities:[],storedMatches:[],opportunityActions:[],saved:co(e.saved),ignored:co(e.ignored),filters:{search:``,label:`recommended`,category:`all`,location:`all`,type:`all`,savedOnly:!1},tedImportMode:`nordic`,dropdown:{openKey:null,focusedIndex:0},importStatus:null,importLoading:!1,connectorImportStatus:null,connectorImportLoading:!1,connectorTestingSourceId:null,importedTedOpportunities:[],importedTedOpportunitiesLoading:!1,importedTedOpportunitiesLoaded:!1,importedTedOpportunitiesError:null,importRuns:[],importRunsLoading:!1,importRunsLoaded:!1,importRunsError:null,adminReports:[],adminReportsLoading:!1,adminReportsLoaded:!1,adminReportsError:null,adminTrialRequests:[],adminTrialRequestsLoading:!1,adminTrialRequestsLoaded:!1,adminTrialRequestsError:null,selectedAdminTrialRequestId:null,adminTrialRequestActions:{},adminTrialCompanyDraft:null,adminTrialCompanySaving:!1,adminTrialCompanyMessage:``,adminTrialCompanyError:``,selectedAdminReport:null,selectedAdminReportLoading:!1,selectedAdminReportError:null,sourceCoverage:[],sourceCoverageLoading:!1,sourceCoverageLoaded:!1,sourceCoverageError:null,expandedSourceId:null,adminCompanies:[],adminCompaniesLoading:!1,adminCompaniesLoaded:!1,adminCompaniesError:null,adminReviewMatches:[],adminReviewLoading:!1,adminReviewLoaded:!1,adminReviewError:null,adminReviewActions:{},adminAiReviewActions:{},adminAiReviewError:null,adminCompanyAiReviewActions:{},adminCompanyAiReviewResults:{},adminCompanyAiReviewFilter:`not_reviewed`,adminCompanyActions:{},adminCompanyAccessActions:{},adminCompanyInviteDrafts:{},adminCompanyInviteLinks:{},adminCompanyInviteDebug:{},adminReportDeliveryActions:{},selectedAdminCompanyId:null,adminActiveTab:`overview`,adminCompanyFilters:{search:``,industry:`all`,profileStatus:`all`,plan:`all`},adminReportMode:`all_current`,adminOpportunityFilters:{source:`all`,missingDeadlineSource:`all`,status:`all`,country:`all`,search:``,debugCompanyId:``,tedOnly:!1,manualOnly:!1,showDemoTest:!1,...kr()},adminOpportunityDraft:Br(),matchStatus:null,matchingLoading:!1,lastMatchedAt:null,reports:[],reportsLoaded:!1,reportsLoadError:null,reportArchiveLoading:!1,reportSaveLoading:!1,reportMessage:null,selectedReportId:null,selectedAdminReportId:null,adminMessage:null,adminSubmitting:!1,adminDeletingId:null,adminUpdatingId:null,isLoadingOpportunities:!1,opportunityLoadError:null,isMobileMenuOpen:!1,profileMenuOpen:!1,selectedOpportunityId:null,toast:null};function Cr(e=M.route){return String(e||`/`).split(`?`)[0]||`/`}function wr(e=M.route){let t=String(e||``).split(`?`)[1]||``;return new URLSearchParams(t)}function Tr(e){let t=String(e||``).trim().toLowerCase();return[`basic`,`pro`,`priority`].includes(t)?t:``}function Er(){try{return Tr(localStorage.getItem(e.selectedPlan))}catch{return``}}function Dr(t){let n=Tr(t);try{n&&localStorage.setItem(e.selectedPlan,n)}catch{}return n}function Or(){try{localStorage.removeItem(e.selectedPlan)}catch{}}function kr(){try{let e=sessionStorage.getItem(`verkradar_admin_opportunity_view`),t=e?JSON.parse(e):{};return{sortBy:Zc(t.sortBy),addedWindow:Qc(t.addedWindow)}}catch{return{sortBy:`created_desc`,addedWindow:`all`}}}function Ar(){try{sessionStorage.setItem(`verkradar_admin_opportunity_view`,JSON.stringify({sortBy:Zc(M.adminOpportunityFilters?.sortBy),addedWindow:Qc(M.adminOpportunityFilters?.addedWindow)}))}catch{}}function jr(e=M.route){return Tr(wr(e).get(`plan`))}function Mr(e=M.route){let t=jr(e);t&&(M.pendingSignupPlan=Dr(t))}function Nr(e=M.route){let t=v(e);if(ae(e)&&!t){let e=se();if(e){M.pendingInviteToken=e;return}Pr();return}if(ae(e)&&t&&t!==M.pendingInviteToken){M.pendingInviteToken=le(t),M.invitePreview=null,M.invitePreviewError=null,M.invitePreviewErrorToken=``;return}ae(e)||Pr()}function Pr(){ue(),M.pendingInviteToken=``,M.invitePreview=null,M.invitePreviewError=null,M.invitePreviewErrorToken=``,M.invitePreviewDebug=null,M.inviteAccepting=!1}async function N(e={}){if(!re())return;let t=await x(M.inviteAuthEvent);M.invitePreviewDebug={...b(M.route),...t,...M.invitePreviewDebug||{},...e}}function Fr(e){return[`expired`,`revoked`].includes(String(e||``))}function Ir(){return window.location.pathname===`/auth/callback`}async function Lr(){let e=ee();if(!u||M.inviteCallbackHandled||!Ir()&&!e.hasImplicitTokens)return!1;M.inviteCallbackHandled=!0;let t=y(e.invite||se());t&&(M.pendingInviteToken=le(t)),await N({auth_flow:e.code?`pkce`:e.hasImplicitTokens?`implicit_fallback`:`unknown`,raw_token_had_fragment:e.rawTokenHadFragment,sanitized_token_length:t.length,code_present:!!e.code,exchange_code_attempted:!1,exchange_code_succeeded:!1,session_present:!1});try{if(e.code){await N({exchange_code_attempted:!0});let{data:t,error:n}=await u.auth.exchangeCodeForSession(e.code);if(n)throw n;await N({exchange_code_succeeded:!0,session_present:!!t?.session})}else if(e.hasImplicitTokens){let{data:t,error:n}=await u.auth.setSession({access_token:e.accessToken,refresh_token:e.refreshToken});if(n)throw n;await N({auth_flow:`implicit_fallback`,session_present:!!t?.session})}}catch(e){console.error(`Auth callback handling failed:`,e),await N({auth_callback_error:errorMessage(e),exchange_code_succeeded:!1})}return M.route=ne(t),!0}function Rr(e){let t=M.pendingInviteToken||v(M.route);return t&&ae(M.route)?`${e}?invite=${encodeURIComponent(t)}`:e}`scrollRestoration`in history&&(history.scrollRestoration=`manual`);function zr(){localStorage.removeItem(`verkradar_profile`),localStorage.removeItem(`verkradar_local_user_id`),localStorage.removeItem(`verkradar_saved_opportunities`),localStorage.removeItem(`verkradar_ignored_opportunities`),M.profile=null,M.profileDraft=null,M.profileDraftDirty=!1,M.currentUser=null,M.companyId=null,M.storedMatches=[],M.opportunityActions=[],M.reports=[],M.reportsLoaded=!1,M.reportsLoadError=null,M.reportMessage=null,M.selectedReportId=null,M.profileSaved=!1,M.profileSaveMessage=null,M.profileSaveError=null,M.saved=[],M.ignored=[],M.importRuns=[],M.importRunsLoading=!1,M.importRunsLoaded=!1,M.importRunsError=null,M.importedTedOpportunities=[],M.importedTedOpportunitiesLoading=!1,M.importedTedOpportunitiesLoaded=!1,M.importedTedOpportunitiesError=null,M.adminReports=[],M.adminReportsLoading=!1,M.adminReportsLoaded=!1,M.adminReportsError=null,M.selectedAdminReport=null,M.selectedAdminReportLoading=!1,M.selectedAdminReportError=null,M.sourceCoverage=[],M.sourceCoverageLoading=!1,M.sourceCoverageLoaded=!1,M.sourceCoverageError=null,M.adminCompanies=[],M.adminCompaniesLoading=!1,M.adminCompaniesLoaded=!1,M.adminCompaniesError=null,M.selectedAdminCompanyId=null,M.lastMatchedAt=null}function Br(){return{title:``,buyer:``,sourceName:``,category:``,type:`tender`,deadline:``,published_date:``,location:``,estimated_value:``,url:``,cpv_code:``,difficulty:`medium`,status:`open`,description:``,requirements:``,keywords:``}}function Vr(e){let t=Br();Object.keys(t).forEach(n=>{t[n]=String(e.get(n)||``)}),M.adminOpportunityDraft=t}var Hr=!1;window.addEventListener(`hashchange`,()=>{let e=location.hash.replace(`#`,``)||`/`,t=Cr(e),n=e!==M.route;if(Hr&&e===M.route){Hr=!1;return}Hr=!1,[`/login`,`/signup`,`/forgot-password`,`/reset-password`].includes(t)&&e!==M.route&&(M.authMessage=null,M.authSubmitting=!1),M.route=e,Mr(e),Nr(e),M.isMobileMenuOpen=!1,M.profileMenuOpen=!1,n&&Ns(),document.body.classList.remove(`mobile-menu-active`),X(),ri(),F()}),document.addEventListener(`click`,e=>{if(M.dropdown.openKey&&!e.target.closest?.(`.custom-select`)&&wl(),M.profileMenuOpen&&!e.target.closest?.(`.profile-menu`)&&(M.profileMenuOpen=!1,X()),e.target.classList?.contains(`modal-backdrop`)){if(e.preventDefault(),M.selectedAdminCompanyId){M.selectedAdminCompanyId=null,X();return}Ms();return}if(M.isMobileMenuOpen&&!e.target.closest?.(`.site-header`)){Gr();return}let t=e.target.closest?.(`[data-action]`);if(!t)return;let n=t.dataset.action,r=t.dataset.id;if(n===`close-modal`){if(e.preventDefault(),e.stopPropagation(),M.selectedAdminCompanyId){M.selectedAdminCompanyId=null,X();return}Ms();return}if(n===`toggle-mobile-menu`){e.preventDefault(),M.isMobileMenuOpen?Gr():Wr();return}if(n===`mobile-nav`){e.preventDefault(),Kr(t.dataset.href);return}if(n===`mobile-scroll-to`){e.preventDefault(),qr(t.dataset.target);return}if(n===`toggle-profile-menu`){if(e.preventDefault(),M.isMobileMenuOpen||Jr()){M.profileMenuOpen=!1,X();return}M.profileMenuOpen=!M.profileMenuOpen,X();return}if(n===`toggle-language`){e.preventDefault(),yr(M.language===`is`?`en`:`is`);return}if(n===`toggle-dropdown`){e.preventDefault();let n=t.dataset.key,r=M.dropdown.openKey===n;M.dropdown.openKey=r?null:n,M.dropdown.focusedIndex=xl(n),X(),r||Tl();return}if(n===`select-filter`){e.preventDefault();let n=t.dataset.key,r=t.dataset.value;t.dataset.profileField?t.closest?.(`#admin-trial-company-form`)?(go(),M.adminTrialCompanyDraft[t.dataset.profileField]=r):(K(),M.profileDraft[t.dataset.profileField]=r,xo()):M.filters[n]=r,M.dropdown.openKey=null,M.dropdown.focusedIndex=0,X();return}if(n===`toggle-profile-suggestion`){e.preventDefault(),t.closest?.(`#admin-trial-company-form`)?vo(t.dataset.field,t.dataset.value):ho(t.dataset.field,t.dataset.value);return}if(n===`scroll-to`){e.preventDefault(),M.isMobileMenuOpen=!1,M.profileMenuOpen=!1,document.body.classList.remove(`mobile-menu-active`);let n=t.dataset.target;if(!n)return;M.route===`/`?(X(),setTimeout(()=>ii(n),0)):(P(`/`),setTimeout(()=>ii(n),50));return}if(n===`go`){e.preventDefault(),M.isMobileMenuOpen=!1,M.profileMenuOpen=!1,document.body.classList.remove(`mobile-menu-active`),P(t.dataset.href);return}if(n===`accept-company-invite`){_c();return}if(n===`save`&&Os(r),n===`ignore`&&ks(r),n===`unignore`&&As(r),n===`details`&&js(r),n===`admin-report-override`){ro(r,t.dataset.override||``);return}if(n===`copy-report`&&Fd(),n===`download-report-pdf`&&Id(),n===`download-admin-report-pdf`){Ld();return}if(n===`save-report`&&Za(),n===`archive-report`){Qa(r);return}if(n===`view-report`&&(M.selectedReportId=r,X()),n===`close-archive-report`&&(M.selectedReportId=null,X()),n===`view-admin-report`){M.selectedAdminReportId=r,M.selectedAdminReport=null,M.selectedAdminReportError=null,M.adminActiveTab=`reports`,X(),di(r);return}if(n===`close-admin-report`){M.selectedAdminReportId=null,M.selectedAdminReport=null,M.selectedAdminReportError=null,X();return}if(n===`copy-admin-report`){Jc(r);return}if(n===`mark-admin-report-sent`){Yc(r);return}if(n===`admin-tab`&&(M.adminActiveTab=t.dataset.tab||`overview`,M.selectedAdminCompanyId=null,M.selectedAdminReportId=null,M.selectedAdminTrialRequestId=null,M.adminTrialCompanyDraft=null,X()),n===`view-admin-company`&&(M.selectedAdminCompanyId=r,X()),n===`close-admin-company`&&(M.selectedAdminCompanyId=null,X()),n===`view-admin-trial-request`){M.selectedAdminTrialRequestId=r,M.adminTrialCompanyDraft=null,M.adminTrialCompanyMessage=``,M.adminTrialCompanyError=``,X();return}if(n===`close-admin-trial-request`){M.selectedAdminTrialRequestId=null,M.adminTrialCompanyDraft=null,M.adminTrialCompanyMessage=``,M.adminTrialCompanyError=``,X();return}if(n===`admin-trial-request-status`){li(r,t.dataset.status||``);return}if(n===`admin-start-trial-company`){_o(r);return}if(n===`admin-refresh-company-matches`){Oi(r);return}if(n===`admin-generate-company-report`){ki(r);return}if(n===`admin-review-match`){Ai(r,t.dataset.companyId||``,t.dataset.reviewAction||``);return}if(n===`admin-ai-review-match`){ji(r,{force:t.dataset.force===`true`});return}if(n===`admin-ai-review-company`){Mi(r,{force:t.dataset.force===`true`});return}if(n===`admin-run-auto-ai-review`){Ni();return}if(n===`admin-run-daily-pipeline`){Pi();return}if(n===`admin-toggle-company-auto-ai`){Fi(r,t.dataset.enabled===`true`);return}if(n===`admin-invite-company-customer`){Si(r);return}if(n===`admin-revoke-company-access`){Ci(r,t.dataset.memberId||``);return}if(n===`admin-copy-company-invite-link`){Di(r);return}if(n===`import-ted`&&ya(),n===`import-source-connectors`&&ba(),n===`test-source-connector`&&ba(r),n===`toggle-source-items`&&(M.expandedSourceId=M.expandedSourceId===r?null:r,X()),n===`refresh-admin-status`&&Ri(),n===`hide-imported-opportunity`&&no(r,`hidden`),n===`mark-imported-relevant`&&no(r,`open`),n===`run-matching`&&$a(),n===`retry-settings-profile`&&Ha(),n===`show-all-matches`&&(M.filters.label=`all`,X()),n===`show-all-opportunities`&&(M.filters.label=`all_opportunities`,X()),n===`include-national-opportunities`&&(K(),M.profileDraft.nationalProjects=!0,M.profileDraft.locations.includes(`All Iceland`)||(M.profileDraft.locations=[...M.profileDraft.locations,`All Iceland`]),xo(),P(`/settings`)),n===`delete-opportunity`&&to(r),n===`logout`){if(M.profileMenuOpen=!1,M.isMobileMenuOpen){Gr(()=>ja());return}ja()}n===`load-demo`&&(M.user?qa(br).then(()=>P(`/dashboard`)).catch(e=>{console.error(`Failed to load demo profile:`,e),M.profileSaveError=W(e),X()}):(so(br),M.profile=br,P(`/dashboard`))),n===`reset`&&(zr(),P(`/`))}),document.addEventListener(`keydown`,e=>{if(e.key===`Escape`&&M.isMobileMenuOpen){e.preventDefault(),Gr();return}if(e.key===`Escape`&&M.profileMenuOpen){e.preventDefault(),M.profileMenuOpen=!1,X();return}if(e.key===`Escape`&&M.selectedOpportunityId){e.preventDefault(),Ms();return}if(e.key===`Escape`&&M.selectedAdminCompanyId){e.preventDefault(),M.selectedAdminCompanyId=null,X();return}let t=e.target.closest?.(`.custom-select`),n=t?.dataset.key||M.dropdown.openKey;if(!n)return;let r=bl(n),i=M.dropdown.openKey===n;if(e.key===`Escape`&&i){e.preventDefault(),wl(),El(n);return}if((e.key===`ArrowDown`||e.key===`ArrowUp`)&&!i){e.preventDefault(),M.dropdown.openKey=n,M.dropdown.focusedIndex=xl(n),X(),Tl();return}if(i){if(e.key===`ArrowDown`||e.key===`ArrowUp`){e.preventDefault();let t=e.key===`ArrowDown`?1:-1;M.dropdown.focusedIndex=(M.dropdown.focusedIndex+t+r.length)%r.length,X(),Tl();return}if(e.key===`Enter`||e.key===` `){e.preventDefault();let i=r[M.dropdown.focusedIndex];if(!i)return;let a=t?.querySelector?.(`[data-profile-field]`)?.dataset.profileField;a?(K(),M.profileDraft[a]=i.value,xo()):M.filters[n]=i.value,M.dropdown.openKey=null,M.dropdown.focusedIndex=0,X(),El(n)}}}),document.addEventListener(`input`,e=>{let t=e.target.closest?.(`[data-auth-field]`);if(t){M.authForm[t.dataset.authField]=t.value;return}let n=e.target.closest?.(`[data-profile-field]`);if(n){let t=e.target.closest?.(`#admin-trial-company-form`);if(t){wo(t);return}K();let r=n.dataset.profileField;n.type===`checkbox`?M.profileDraft[r]=n.checked:n.dataset.profileArray===`true`?M.profileDraft[r]=D(n.value):(n.dataset.profileNumber,M.profileDraft[r]=n.value),xo();return}if(e.target.matches(`[data-filter]`)){let t=e.target.dataset.filter;e.target.type===`checkbox`?M.filters[t]=e.target.checked:M.filters[t]=e.target.value,X()}if(e.target.matches(`[data-admin-filter]`)){let t=e.target.dataset.adminFilter;e.target.type===`checkbox`?(M.adminOpportunityFilters[t]=e.target.checked,t===`tedOnly`&&e.target.checked&&(M.adminOpportunityFilters.manualOnly=!1),t===`manualOnly`&&e.target.checked&&(M.adminOpportunityFilters.tedOnly=!1)):M.adminOpportunityFilters[t]=e.target.value,(t===`sortBy`||t===`addedWindow`)&&Ar(),Ks(e.target);return}if(e.target.matches(`[data-admin-opportunity-field]`)){let t=e.target.dataset.adminOpportunityField;M.adminOpportunityDraft={...Br(),...M.adminOpportunityDraft||{},[t]:e.target.value};return}if(e.target.matches(`[data-admin-company-filter]`)){let t=e.target.dataset.adminCompanyFilter;M.adminCompanyFilters[t]=e.target.value,Ks(e.target);return}if(e.target.matches(`[data-admin-company-invite-email]`)){let t=e.target.dataset.id||``;t&&(M.adminCompanyInviteDrafts={...M.adminCompanyInviteDrafts||{},[t]:e.target.value});return}e.target.matches(`[data-admin-report-mode]`)&&(M.adminReportMode=e.target.value===`all_current`?`all_current`:`new_only`,X()),e.target.matches(`[data-admin-company-ai-filter]`)&&(M.adminCompanyAiReviewFilter=e.target.value||`not_reviewed`,Ks(e.target))}),document.addEventListener(`change`,e=>{if(e.target.matches(`[data-admin-filter]`)){let t=e.target.dataset.adminFilter;e.target.type===`checkbox`?(M.adminOpportunityFilters[t]=e.target.checked,t===`tedOnly`&&e.target.checked&&(M.adminOpportunityFilters.manualOnly=!1),t===`manualOnly`&&e.target.checked&&(M.adminOpportunityFilters.tedOnly=!1)):M.adminOpportunityFilters[t]=e.target.value,(t===`sortBy`||t===`addedWindow`)&&Ar(),Ks(e.target);return}if(e.target.matches(`[data-import-mode]`)){M.tedImportMode=e.target.value,X();return}if(e.target.matches(`[data-admin-company-ai-filter]`)){M.adminCompanyAiReviewFilter=e.target.value||`not_reviewed`,Ks(e.target);return}if(e.target.matches(`[data-profile-location]`)){let t=e.target.closest?.(`#admin-trial-company-form`);if(t){wo(t);return}K(),M.profileDraft.locations=Array.from(document.querySelectorAll(`[data-profile-location]:checked`)).map(e=>e.value),xo();return}let t=e.target.closest?.(`[data-profile-field]`);if(!t)return;let n=e.target.closest?.(`#admin-trial-company-form`);if(n){wo(n);return}K();let r=t.dataset.profileField;M.profileDraft[r]=t.type===`checkbox`?t.checked:t.value,xo()}),document.addEventListener(`submit`,async e=>{if(e.target.id===`login-form`){e.preventDefault();let t=new FormData(e.target);Oa(t.get(`email`),t.get(`password`));return}if(e.target.id===`signup-form`){e.preventDefault();let t=new FormData(e.target);Da(t.get(`email`),t.get(`password`));return}if(e.target.id===`trial-request-form`){e.preventDefault(),M.trialRequestError=``;try{await fn(new FormData(e.target)),M.trialRequestSubmitted=!0,X(),ri()}catch(e){console.error(`Trial request failed:`,e),M.trialRequestSubmitted=!1,M.trialRequestError=j(`trialRequestError`),X(),G(j(`trialRequestError`),`error`)}return}if(e.target.id===`forgot-password-form`){e.preventDefault(),ka(new FormData(e.target).get(`email`));return}if(e.target.id===`reset-password-form`){e.preventDefault();let t=new FormData(e.target);Aa(t.get(`newPassword`),t.get(`confirmPassword`));return}if(e.target.id===`admin-opportunity-form`){e.preventDefault();let t=new FormData(e.target);Vr(t),eo(t,e.target);return}if(e.target.id===`admin-trial-company-form`){e.preventDefault(),await ui(e.target);return}if(e.target.matches(`[data-admin-matching-profile-form]`)){e.preventDefault(),await wi(e.target.dataset.companyId||``,e.target);return}if(e.target.matches(`[data-admin-match-decision-form]`)){e.preventDefault(),await Ti(e.target.dataset.companyId||``,e.target);return}if(e.target.matches(`[data-admin-evaluation-label-form]`)){e.preventDefault(),await Ei(e.target.dataset.companyId||``,e.target);return}if(e.target.id===`profile-form`){e.preventDefault(),M.profileSaved=!1,Co(e.target);let t=Eo();if(!t.companyName||!t.kennitala||!t.contactEmail||!t.billingEmail||!t.contactName||!t.phone||!t.address||!t.industry){G(M.language===`is`?`Fylltu út fyrirtækisnafn, kennitölu, reikningsupplýsingar, tengilið og atvinnugrein.`:`Please fill in company name, kennitala, billing details, contact details and industry.`,`error`);return}M.isSavingProfile=!0,M.profileSaved=!1,M.profileSaveMessage=null,M.profileSaveError=null,X();let n=M.route!==`/settings`;try{if(await qa(t),await Ba({overwriteDraft:!0}),M.profileLoadError)throw Error(`Profile saved, but the saved profile could not be reloaded. ${M.profileLoadError}`);M.profileSaveMessage=`Refreshing matches...`,M.profileSaveError=null,X();let e=await $a();if(M.matchStatus?.type===`error`)M.profileSaveMessage=`Profile saved, but matching could not be refreshed. Try Run matching.`;else{let t=e===1?`opportunity`:`opportunities`;M.profileSaveMessage=n?`Profile saved — ${e} relevant ${t} found. Redirecting...`:`Profile saved — ${e} relevant ${t} found.`}M.profileSaved=!0,X(),clearTimeout(window.__profileSavedTimeout),window.__profileSavedTimeout=setTimeout(()=>{M.profileSaved=!1,X()},1800),n&&setTimeout(()=>P(`/dashboard`),800)}catch(e){console.error(`Failed to save company profile:`,e),M.profileSaveError=W(e),M.profileSaveMessage=null,M.profileSaved=!1}finally{M.isSavingProfile=!1,X()}}}),window.addEventListener(`focus`,Ur),document.addEventListener(`visibilitychange`,()=>{document.visibilityState===`visible`&&Ur()});function Ur(){M.route===`/settings`&&M.profileDraftDirty&&(M.profileLoading=!1,M.profileLoaded=!0,X())}function Wr(){Yr(),M.isMobileMenuOpen=!0,M.profileMenuOpen=!1,document.body.classList.add(`mobile-menu-active`),X()}function Gr(e){if(!M.isMobileMenuOpen){typeof e==`function`&&e();return}M.isMobileMenuOpen=!1,M.profileMenuOpen=!1,document.body.classList.remove(`mobile-menu-active`),X(),typeof e==`function`&&setTimeout(e,260)}function Kr(e){if(e){if(!M.isMobileMenuOpen){P(e);return}Gr(()=>P(e))}}function qr(e){if(!e)return;let t=()=>{M.route===`/`?(X(),setTimeout(()=>ii(e),0)):(P(`/`),setTimeout(()=>ii(e),50))};if(!M.isMobileMenuOpen){t();return}Gr(t)}function Jr(){return typeof window<`u`&&window.matchMedia?.(`(max-width: 920px)`).matches}function Yr(){let e=document.querySelector(`.site-header`);e&&document.documentElement.style.setProperty(`--header-height`,`${Math.ceil(e.getBoundingClientRect().height)}px`)}function P(e){e||=`/`;let t=[`/login`,`/signup`,`/forgot-password`,`/reset-password`],n=Cr(e);if(t.includes(n)&&e!==M.route&&(M.authMessage=null,M.authSubmitting=!1),M.isMobileMenuOpen=!1,M.profileMenuOpen=!1,document.body.classList.remove(`mobile-menu-active`),M.route===e){X(),ri(),F();return}Ns(),M.route=e,Mr(e),Nr(e),Hr=!0,location.hash=e,X(),ri(),F()}function Xr(){if(!M.user&&!M.currentUser)return`/`;let e=Zr();return e?`/accept-invite?token=${encodeURIComponent(e)}`:M.profile?`/dashboard`:`/onboarding`}function Zr(){return y(v(M.route)||M.pendingInviteToken||se())}function Qr(){return!M.user&&!M.currentUser?`/trial`:M.profile?`/dashboard`:`/onboarding`}function $r(e=M.route){let t=String(e||``);if(ei(t))return!1;let n=Cr(t);return[`/`,`/login`,`/signup`,`/forgot-password`].includes(n)||t.startsWith(`access_token=`)||t.startsWith(`code=`)||t.includes(`type=signup`)||t.includes(`type=email_change`)}function ei(e=M.route){let t=String(e||``);return t===`/reset-password`||t.startsWith(`/reset-password`)||t.includes(`type=recovery`)}function ti(e){M.route=e,location.hash.replace(`#`,``)!==e&&history.replaceState(null,``,`#${e}`)}function ni({replace:e=!1}={}){if(!M.user&&!M.currentUser||!$r())return!1;let t=Xr();return M.authMessage=null,e?ti(t):P(t),!0}function F(){let e=Zr();if(M.user&&e&&Cr(M.route)!==`/accept-invite`){M.pendingInviteToken=le(e),N({pending_invite_present:!0,onboarding_redirect_blocked:!0,final_route:`/accept-invite?token=${encodeURIComponent(e)}`}),ti(`/accept-invite?token=${encodeURIComponent(e)}`),X();return}Cr(M.route)===`/accept-invite`&&(gc(),M.user&&!M.inviteAccepting&&!M.invitePreviewError&&_c()),M.route===`/report`&&M.companyId&&!M.reportsLoaded&&!M.reportArchiveLoading&&Xa(),M.route===`/admin`&&M.isAdmin&&(!M.importRunsLoaded&&!M.importRunsLoading&&oi(),!M.adminReportsLoaded&&!M.adminReportsLoading&&si(),!M.adminTrialRequestsLoaded&&!M.adminTrialRequestsLoading&&ci(),!M.sourceCoverageLoaded&&!M.sourceCoverageLoading&&pi(),!M.adminCompaniesLoaded&&!M.adminCompaniesLoading&&I(),!M.adminReviewLoaded&&!M.adminReviewLoading&&L(),!M.importedTedOpportunitiesLoaded&&!M.importedTedOpportunitiesLoading&&xa().then(X).catch(e=>{console.error(`Failed to load latest TED opportunities:`,e)}))}function ri(){window.scrollTo(0,0)}function ii(e){let t=document.getElementById(e);t&&t.scrollIntoView({behavior:`smooth`,block:`start`})}async function ai(){M.isLoadingOpportunities=!0,M.opportunityLoadError=null,X();try{if(!u)throw Error(`Supabase client not configured`);let{data:e,error:t}=await u.from(`opportunities`).select(`*, sources(name, source_type)`).eq(`status`,`open`).order(`deadline`,{ascending:!0});if(t)throw t;!e||e.length===0?(M.opportunities=window.VERKRADAR_OPPORTUNITIES||[],M.storedMatches=[],M.opportunityLoadError=`Using demo data. Supabase has no opportunities yet.`):(M.opportunities=e.map(zi),M.opportunityLoadError=null,M.companyId&&(await Ts(),await Ya()))}catch(e){console.error(`Failed to load Supabase opportunities:`,e),M.opportunities=window.VERKRADAR_OPPORTUNITIES||[],M.storedMatches=[],M.opportunityLoadError=`Using demo data. Supabase connection failed.`}finally{M.isLoadingOpportunities=!1,X()}}async function oi(){if(!u||!M.isAdmin){M.importRuns=[],M.importRunsLoaded=!0;return}M.importRunsLoading=!0,M.importRunsError=null,X();try{let{data:e,error:t}=await u.from(`import_runs`).select(`*`).order(`started_at`,{ascending:!1}).limit(10);if(t)throw t;M.importRuns=e||[],M.importRunsLoaded=!0}catch(e){console.error(`Failed to load import runs:`,e),M.importRuns=[],M.importRunsError=W(e)}finally{M.importRunsLoading=!1,M.importRunsLoaded=!0,X()}}async function si(){if(!u||!M.isAdmin){M.adminReports=[],M.adminReportsLoaded=!0;return}M.adminReportsLoading=!0,M.adminReportsError=null,X();try{let{data:e,error:t}=await u.from(`reports`).select(`
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
      `).order(`created_at`,{ascending:!1}).limit(10);if(t)throw t;M.adminReports=e||[],M.adminReportsLoaded=!0}catch(e){console.error(`Failed to load admin reports:`,e),M.adminReports=[],M.adminReportsError=W(e)}finally{M.adminReportsLoading=!1,M.adminReportsLoaded=!0,X()}}async function ci(){if(!u||!M.isAdmin){M.adminTrialRequests=[],M.adminTrialRequestsLoaded=!0;return}M.adminTrialRequestsLoading=!0,M.adminTrialRequestsError=null,X();try{M.adminTrialRequests=await pn()}catch(e){console.error(`Failed to load trial requests:`,e),M.adminTrialRequests=[],M.adminTrialRequestsError=W(e)}finally{M.adminTrialRequestsLoading=!1,M.adminTrialRequestsLoaded=!0,X()}}async function li(e,t){if(e){M.adminTrialRequestActions={...M.adminTrialRequestActions||{},[e]:t},M.adminTrialCompanyError=``,M.adminTrialCompanyMessage=``,X();try{await hn(e,t),await ci(),G(t===`contacted`?`Beiðni merkt sem haft samband.`:`Beiðni hafnað.`,`success`)}catch(e){console.error(`Failed to update trial request:`,e),M.adminTrialCompanyError=W(e),G(M.adminTrialCompanyError,`error`),X()}finally{M.adminTrialRequestActions={...M.adminTrialRequestActions||{},[e]:null},X()}}}async function ui(e){let t=au();if(!t)return;if(t.converted_company_id||t.status===`converted`){M.adminTrialCompanyError=`Þessi beiðni hefur þegar verið umbreytt.`,X();return}wo(e);let n=Do();if(!n.companyName||!n.kennitala||!n.contactEmail||!n.billingEmail||!n.contactName||!n.phone||!n.address||!n.industry){M.adminTrialCompanyError=`Fylltu út fyrirtækisnafn, kennitölu, tengilið, reikningsnetfang, síma, heimilisfang og atvinnugrein áður en fyrirtæki er stofnað.`,M.adminTrialCompanyMessage=``,X(),G(M.adminTrialCompanyError,`error`);return}M.adminTrialCompanySaving=!0,M.adminTrialCompanyError=``,M.adminTrialCompanyMessage=``,X();try{let e=await gn(t.id,n);M.adminTrialCompanyMessage=`Fyrirtæki stofnað: ${e.company_name||n.companyName}`,M.adminTrialCompanyDraft=null,M.selectedAdminCompanyId=e.company_id||null,await Promise.all([ci(),I()]),G(`Fyrirtæki stofnað úr prufubeiðni.`,`success`)}catch(e){console.error(`Failed to create company from trial request:`,e),M.adminTrialCompanyError=W(e),G(M.adminTrialCompanyError,`error`)}finally{M.adminTrialCompanySaving=!1,X()}}async function di(e){if(!(!u||!M.isAdmin||!e)){M.selectedAdminReportLoading=!0,M.selectedAdminReportError=null,X();try{let{data:t,error:n}=await u.from(`reports`).select(`
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
      `).eq(`id`,e).single();if(n)throw n;await fi(t),M.selectedAdminReportId===e&&(M.selectedAdminReport=t)}catch(t){console.error(`Failed to load admin report details:`,t),M.selectedAdminReportId===e&&(M.selectedAdminReport=null,M.selectedAdminReportError=W(t))}finally{M.selectedAdminReportId===e&&(M.selectedAdminReportLoading=!1,X())}}}async function fi(e){let t=Array.isArray(e?.report_items)?e.report_items:[],n=t.map(e=>e.opportunity_id).filter(Boolean);if(!u||!e?.company_id||!n.length)return;let{data:r,error:i}=await u.from(`company_opportunity_sends`).select(`opportunity_id, sent_at, created_at, channel`).eq(`company_id`,e.company_id).in(`opportunity_id`,n).in(`channel`,[`manual_email`,`automated_email`]);if(i){console.warn(`Failed to load report sent status:`,i);return}let a=new Map((r||[]).map(e=>[String(e.opportunity_id),e]));t.forEach(e=>{let t=a.get(String(e.opportunity_id));e.sent_at=t?.sent_at||t?.created_at||``,e.delivery_type=t?.channel||``})}async function pi(){if(!u||!M.isAdmin){M.sourceCoverage=[],M.sourceCoverageLoaded=!0;return}M.sourceCoverageLoading=!0,M.sourceCoverageError=null,X();try{let{data:e,error:t}=await u.from(`sources`).select(`
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
      `).order(`name`,{ascending:!0});if(t)throw t;let n=(e||[]).map(e=>({...e,source_status:Array.isArray(e.source_status)?e.source_status[0]:e.source_status,source_connectors:Array.isArray(e.source_connectors)?e.source_connectors[0]:e.source_connectors})),r=n.map(e=>e.id).filter(Boolean),i={};if(r.length){let{data:e,error:t}=await u.from(`opportunities`).select(`id, source_id, title, buyer, deadline, status, url, raw_payload, created_at, published_date`).in(`source_id`,r).eq(`status`,`open`).order(`created_at`,{ascending:!1}).limit(500);if(t)throw t;i=(e||[]).reduce((e,t)=>(e[t.source_id]||(e[t.source_id]=[]),e[t.source_id].push(t),e),{})}M.sourceCoverage=n.map(e=>{let t=i[e.id]||[];return{...e,opportunityStats:Rc(t),latestOpportunities:t.slice(0,8)}}),M.sourceCoverageLoaded=!0}catch(e){console.error(`Failed to load source coverage:`,e),M.sourceCoverage=[],M.sourceCoverageError=W(e)}finally{M.sourceCoverageLoading=!1,M.sourceCoverageLoaded=!0,X()}}async function I(){if(!u||!M.isAdmin){M.adminCompanies=[],M.adminCompaniesLoaded=!0;return}M.adminCompaniesLoading=!0,M.adminCompaniesError=null,X();try{M.adminAiUsageSummary=await Pe().catch(e=>(console.warn(`Failed to load AI usage summary:`,e),null));let{data:e,error:t}=await u.from(`companies`).select(`*`).order(`created_at`,{ascending:!1});if(t)throw t;let n=e||[],r=n.map(e=>e.id).filter(Boolean),i=[],a=[],o=[],s=[],c=[],l=[],d=[],f=[],p=[];if(r.length){let[e,t,n,m,h,g,_,v,y]=await Promise.all([u.from(`company_services`).select(`company_id, service`).in(`company_id`,r),u.from(`company_locations`).select(`company_id, location`).in(`company_id`,r),u.from(`company_keywords`).select(`company_id, keyword, type`).in(`company_id`,r),u.from(`opportunity_matches`).select(`id, company_id, opportunity_id, match_score, match_label, safety_status, ai_review_status, ai_review_fit, ai_review_confidence, ai_reviewed_at, ai_review_skipped_reason, opportunities(title, buyer, location, raw_payload, source_id, sources(name))`).in(`company_id`,r),u.from(`reports`).select(`id, company_id, title, created_at, period_start, period_end, status`).in(`company_id`,r).order(`created_at`,{ascending:!1}),u.from(`ai_match_reviews`).select(`id, company_id, opportunity_id, match_id, fit, confidence, send_to_client, reason, reviewed_profile_hash, profile_updated_at, company_services_snapshot, company_locations_snapshot, created_at, updated_at`).in(`company_id`,r),u.from(`company_members`).select(`id, company_id, user_id, email, role, status, invited_at, accepted_at, revoked_at, expires_at`).in(`company_id`,r).order(`created_at`,{ascending:!1}),u.from(`admin_match_decisions`).select(`id, company_id, opportunity_id, decision, reason, comment, decided_at, decided_by`).in(`company_id`,r),u.from(`match_evaluation_labels`).select(`id, company_id, opportunity_id, label, reason, notes, labeled_at, labeled_by`).in(`company_id`,r)]);i=e.error?[]:e.data||[],a=t.error?[]:t.data||[],o=n.error?[]:n.data||[],s=m.error?[]:m.data||[],c=h.error?[]:h.data||[],l=g.error?[]:g.data||[],d=_.error?[]:_.data||[],f=v.error?[]:v.data||[],p=y.error?[]:y.data||[]}M.adminCompanies=n.map(e=>{let t=i.filter(t=>t.company_id===e.id),n=a.filter(t=>t.company_id===e.id),r=o.filter(t=>t.company_id===e.id),u={services:O(t.map(e=>e.service)),locations:O(n.map(e=>e.location)),includeKeywords:O(r.filter(e=>e.type===`include`).map(e=>e.keyword)),excludeKeywords:O(r.filter(e=>e.type===`exclude`).map(e=>e.keyword)),baseLocation:e.base_location||``,serviceAreas:O(e.service_areas),willingToTravel:!!e.willing_to_travel,nationalProjects:!!e.national_projects};return gi(e,{services:t,locations:n,keywords:r,matches:ze(s.filter(t=>t.company_id===e.id),l.filter(t=>t.company_id===e.id),u),reports:c.filter(t=>t.company_id===e.id),members:d.filter(t=>t.company_id===e.id),decisions:f.filter(t=>t.company_id===e.id),evaluationLabels:p.filter(t=>t.company_id===e.id)})}),M.adminCompaniesLoaded=!0}catch(e){console.error(`Failed to load admin companies:`,e),M.adminCompanies=[],M.adminCompaniesError=W(e)}finally{M.adminCompaniesLoading=!1,M.adminCompaniesLoaded=!0,X()}}async function L(){if(!u||!M.isAdmin){M.adminReviewMatches=[],M.adminReviewLoaded=!0;return}M.adminReviewLoading=!0,M.adminReviewError=null,X();try{let{data:e,error:t}=await u.from(`opportunity_matches`).select(`
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
      `).eq(`safety_status`,`needs_review`).eq(`review_required`,!0).order(`calculated_at`,{ascending:!1}).limit(100);if(t)throw t;let n=e||[],r=Qn(n.map(e=>e.company_id)),i=Qn(n.map(e=>e.opportunity_id)),a=[];if(r.length&&i.length){let{data:e,error:t}=await u.from(`ai_match_reviews`).select(`*`).in(`company_id`,r).in(`opportunity_id`,i);if(t)throw t;a=e||[]}let o=new Map(a.map(e=>[`${e.company_id}:${e.opportunity_id}`,e]));M.adminReviewMatches=n.map(e=>mi(e,o.get(`${e.company_id}:${e.opportunity_id}`))),M.adminReviewLoaded=!0}catch(e){console.error(`Failed to load admin review queue:`,e),M.adminReviewMatches=[],M.adminReviewError=W(e)}finally{M.adminReviewLoading=!1,M.adminReviewLoaded=!0,X()}}function mi(e,t=null){let n=zi(e.opportunities||{});return{id:e.id,companyId:e.company_id,opportunityId:e.opportunity_id,companyName:e.companies?.company_name||`Unknown company`,opportunity:n,matchScore:Number(e.match_score||0),matchLabel:e.match_label||ls(Number(e.match_score||0)),matchReasons:fa(n,Array.isArray(e.match_reasons)?e.match_reasons:[]),risks:Array.isArray(e.risks)?e.risks:[],safetyStatus:e.safety_status||`needs_review`,safetyReasons:Array.isArray(e.safety_reasons)?e.safety_reasons:[],alertEligible:!!e.alert_eligible,reviewRequired:!!e.review_required,calculatedAt:e.calculated_at,aiReview:t?hi(t):null}}function hi(e){return{id:e.id,fit:e.fit||`weak`,confidence:Number(e.confidence||0),sendToClient:!!e.send_to_client,reason:e.reason||``,fitReasons:Array.isArray(e.fit_reasons)?e.fit_reasons.map(String):[],risksOrQuestions:Array.isArray(e.risks_or_questions)?e.risks_or_questions.map(String):[],suggestedClientSummary:e.suggested_client_summary||``,model:e.model||``,createdAt:e.created_at||``,updatedAt:e.updated_at||``}}function gi(e,t){let n=O((t.services||[]).map(e=>e.service)),r=O((t.locations||[]).map(e=>e.location)),i=O((t.keywords||[]).filter(e=>e.type===`include`).map(e=>e.keyword)),a=O((t.keywords||[]).filter(e=>e.type===`exclude`).map(e=>e.keyword)),o=t.reports||[],s=new Map((t.decisions||[]).map(e=>[String(e.opportunity_id),e])),c=new Map((t.evaluationLabels||[]).map(e=>[String(e.opportunity_id),e])),l=(t.matches||[]).filter(e=>e.safety_status!==`hidden`).map(e=>({...e,adminDecision:s.get(String(e.opportunity_id))||null,evaluationLabel:c.get(String(e.opportunity_id))||null})),u=(t.members||[]).map(e=>({id:e.id,company_id:e.company_id,user_id:e.user_id||``,email:e.email||``,role:e.role||`member`,status:e.status||`invited`,invited_at:e.invited_at||``,accepted_at:e.accepted_at||``,revoked_at:e.revoked_at||``,expires_at:e.expires_at||``})),d=!!(e.company_name&&e.contact_email&&e.industry&&n.length&&(r.length||e.base_location||O(e.service_areas).length));return{id:e.id,ownerId:e.owner_id||``,companyName:e.company_name||`Unnamed company`,contactEmail:e.contact_email||``,kennitala:e.kennitala||``,billingEmail:e.billing_email||``,contactName:e.contact_name||``,phone:e.phone||``,address:e.address||``,website:e.website||``,industry:e.industry||``,plan:e.selected_plan||e.plan||e.subscription_plan||`Demo`,selectedPlan:e.selected_plan||e.plan||``,billingStatus:e.billing_status||``,trialStartedAt:e.trial_started_at||``,trialEndsAt:e.trial_ends_at||``,profileStatus:d?`Complete`:`Incomplete`,createdAt:e.created_at,services:n,locations:r,includeKeywords:i,excludeKeywords:a,baseLocation:e.base_location||``,serviceAreas:O(e.service_areas),willingToTravel:!!e.willing_to_travel,nationalProjects:!!e.national_projects,remoteProjects:!!e.remote_projects,minimumProjectValueForTravel:e.minimum_project_value_for_travel,minProjectValue:e.min_project_value,maxProjectValue:e.max_project_value,allowUnknownValue:!!e.allow_unknown_value,includeLowConfidence:!!e.include_low_confidence,autoAlertMode:e.auto_alert_mode||`auto_safe_only`,reportFrequency:e.report_frequency||`weekly`,reportDay:e.report_day||`monday`,deadlineReminders:!!e.deadline_reminders,autoAiReviewEnabled:!!e.auto_ai_review_enabled,coreServices:O(e.core_services),secondaryServices:O(e.secondary_services),excludedServices:O(e.excluded_services),preferredProjectTypes:O(e.preferred_project_types),excludedProjectTypes:O(e.excluded_project_types),equipment:O(e.equipment),certifications:O(e.certifications),preferredBuyers:O(e.preferred_buyers),maxTravelDistanceKm:e.max_travel_distance_km,typicalProjectSize:e.typical_project_size||``,profileNotesForAi:e.profile_notes_for_ai||``,matchingProfileUpdatedAt:e.matching_profile_updated_at||``,matchingProfileHash:e.matching_profile_hash||``,members:u,matchCount:l.length,savedCount:0,latestReportDate:o[0]?.created_at||``,latestMatches:l.slice(0,30),latestReports:o.slice(0,5)}}function _i(e,t){M.adminCompanyActions={...M.adminCompanyActions||{},[e]:t}}function vi(e){let t={...M.adminCompanyActions||{}};delete t[e],M.adminCompanyActions=t}function yi(e){return M.adminCompanyInviteDrafts?.[e.id]??(e.billingEmail||e.contactEmail||``)}function bi(e,t){M.adminCompanyAccessActions={...M.adminCompanyAccessActions||{},[e]:t}}function xi(e){let t={...M.adminCompanyAccessActions||{}};delete t[e],M.adminCompanyAccessActions=t}async function Si(e){if(!M.isAdmin||!e)return;let t=g(yi((M.adminCompanies||[]).find(t=>t.id===e)||{id:e}));if(!t){M.adminMessage={type:`error`,text:`Enter a customer email before inviting access.`},X();return}bi(e,`invite`),M.adminMessage=null,X();try{let n=await R(e,`invite_customer`,{email:t}),r=de(n.invite_token||``);await I(),M.adminCompanyInviteLinks={...M.adminCompanyInviteLinks||{},[e]:r},M.adminCompanyInviteDebug={...M.adminCompanyInviteDebug||{},[e]:n.debug?{...n.debug,copied_url_token_length:String(n.invite_token||``).length,copied_invite_url_present:!!r}:null},M.adminCompanyInviteDrafts={...M.adminCompanyInviteDrafts||{},[e]:``},M.adminMessage={type:`success`,text:`Invite link created for ${n.member?.email||t}. Copy it and send it manually.`},G(`Invite link created`,`success`)}catch(e){console.error(`Failed to invite company customer:`,e),M.adminMessage={type:`error`,text:`Failed to invite customer access. ${W(e)}`}}finally{xi(e),X()}}async function Ci(e,t){if(!(!M.isAdmin||!e||!t)){bi(e,`revoke`),M.adminMessage=null,X();try{await R(e,`revoke_customer_access`,{memberId:t}),await I(),M.adminMessage={type:`success`,text:`Customer access revoked.`},G(`Customer access revoked`,`success`)}catch(e){console.error(`Failed to revoke company access:`,e),M.adminMessage={type:`error`,text:`Failed to revoke customer access. ${W(e)}`}}finally{xi(e),X()}}}async function wi(e,t){if(!(!M.isAdmin||!e)){_i(e,`matching_profile`),M.adminMessage=null,X();try{await R(e,`update_company_matching_profile`,{matchingProfile:ft(t)}),await I(),M.adminMessage={type:`success`,text:`Matching profile saved. Production matching is unchanged.`},G(`Matching profile saved`,`success`)}catch(e){console.error(`Failed to save matching profile:`,e),M.adminMessage={type:`error`,text:`Failed to save matching profile. ${W(e)}`}}finally{vi(e),X()}}}async function Ti(e,t){if(!(!M.isAdmin||!e))try{await R(e,`upsert_match_decision`,pt(t)),await I(),G(`Match decision saved`,`success`)}catch(e){console.error(`Failed to save match decision:`,e),G(`Could not save decision. ${W(e)}`,`error`)}}async function Ei(e,t){if(!(!M.isAdmin||!e))try{await R(e,`upsert_evaluation_label`,mt(t)),await I(),G(`Evaluation label saved`,`success`)}catch(e){console.error(`Failed to save evaluation label:`,e),G(`Could not save evaluation label. ${W(e)}`,`error`)}}async function Di(e){let t=M.adminCompanyInviteLinks?.[e]||``;if(!t){G(`Create or regenerate an invite link first.`,`error`);return}try{await navigator.clipboard.writeText(t),G(`Invite link copied`,`success`)}catch(e){console.error(`Failed to copy invite link:`,e),G(`Could not copy invite link`,`error`)}}async function Oi(e,t={}){if(!M.isAdmin)return M.adminMessage={type:`error`,text:`You do not have access to this action.`},X(),[];let n=(M.adminCompanies||[]).find(t=>t.id===e);if(!n)return M.adminMessage={type:`error`,text:`Company not found. Refresh Admin companies and try again.`},X(),[];t.skipAction||_i(e,`refresh`),t.silent||(M.adminMessage=null,X());try{let r=await R(e,`refresh_matches`),i=Number(r.matches_refreshed||0);return await Promise.all([I(),L()]),M.companyId===e&&await Ya(),t.silent||(M.adminMessage={type:`success`,text:`Refreshed ${i} eligible matches for ${n.companyName}.`},G(`Company matches refreshed`,`success`),X()),r}catch(e){if(console.error(`Failed to refresh admin company matches:`,e),M.adminMessage={type:`error`,text:`Failed to refresh matches for ${n.companyName}. ${W(e)}`},X(),t.throwOnError)throw e;return[]}finally{t.skipAction||(vi(e),X())}}async function ki(e){if(!M.isAdmin){M.adminMessage={type:`error`,text:`You do not have access to this action.`},X();return}let t=(M.adminCompanies||[]).find(t=>t.id===e);if(!t){M.adminMessage={type:`error`,text:`Company not found. Refresh Admin companies and try again.`},X();return}_i(e,`report`),M.adminMessage=null,X();try{let n=await R(e,`generate_report`,{reportMode:M.adminReportMode||`all_current`});if(!n.report_created){M.adminMessage={type:`error`,text:Li(n,t.companyName)},X();return}await Promise.all([si(),I(),L()]),M.companyId===e&&await Xa(),M.adminMessage={type:`success`,text:`Generated ${Ii(n.report_mode||M.adminReportMode)} report for ${t.companyName} with ${Number(n.report_items||0)} item${Number(n.report_items||0)===1?``:`s`}. Open the Reports tab to review it.`},G(`Company report generated`,`success`)}catch(e){console.error(`Failed to generate admin company report:`,e),M.adminMessage={type:`error`,text:`Failed to generate report for ${t.companyName}. ${W(e)}`}}finally{vi(e),X()}}async function Ai(e,t,n){if(!M.isAdmin){M.adminMessage={type:`error`,text:`You do not have access to this action.`},X();return}if(!e||!t||![`approve`,`reject`].includes(n)){M.adminMessage={type:`error`,text:`Missing review action details.`},X();return}M.adminReviewActions={...M.adminReviewActions||{},[e]:n},M.adminMessage=null,X();try{let r=await R(t,`review_match`,{matchId:e,reviewAction:n});await Promise.all([L(),I()]),M.companyId===t&&await Ya(),M.adminMessage={type:`success`,text:r.message||(n===`approve`?`Match approved for customer reports.`:`Match rejected and hidden.`)},G(n===`approve`?`Match approved`:`Match rejected`,`success`)}catch(e){console.error(`Failed to review admin match:`,e),M.adminMessage={type:`error`,text:`Failed to ${n} match. ${W(e)}`}}finally{let t={...M.adminReviewActions||{}};delete t[e],M.adminReviewActions=t,X()}}async function ji(e,t={}){if(!M.isAdmin){M.adminMessage={type:`error`,text:`You do not have access to this action.`},X();return}if(!e){M.adminMessage={type:`error`,text:`Missing match ID for AI review.`},X();return}M.adminAiReviewActions={...M.adminAiReviewActions||{},[e]:!0},M.adminAiReviewError=null,M.adminMessage=null,X();try{let n=await Ae(e,{force:t.force===!0});await L(),await I(),M.adminMessage={type:`success`,text:n.cached?`Loaded cached AI review.`:t.force?`AI review re-run completed.`:`AI review completed.`},G(n.cached?`AI review loaded`:t.force?`AI review re-run completed`:`AI review completed`,`success`)}catch(e){console.error(`Failed to run AI match review:`,e),M.adminAiReviewError=W(e),M.adminMessage={type:`error`,text:`AI review failed. ${W(e)}`}}finally{let t={...M.adminAiReviewActions||{}};delete t[e],M.adminAiReviewActions=t,X()}}async function Mi(e,t={}){if(!M.isAdmin){M.adminMessage={type:`error`,text:`You do not have access to this action.`},X();return}if(!e){M.adminMessage={type:`error`,text:`Missing company ID for AI review batch.`},X();return}M.adminCompanyAiReviewActions={...M.adminCompanyAiReviewActions||{},[e]:!0},M.adminMessage=null,X();try{let n=await je(e,{limit:10,force:t.force===!0,revalidate:t.force===!0});M.adminCompanyAiReviewResults={...M.adminCompanyAiReviewResults||{},[e]:n},await Promise.all([I(),L()]),M.companyId===e&&await Ya(),M.adminMessage={type:`success`,text:`${t.force?`AI revalidation`:`AI batch`} reviewed ${Number(n.reviewed||0)} matches. ${Number(n.skipped||0)} skipped.`},G(t.force?`AI company revalidation completed`:`AI company review completed`,`success`)}catch(e){console.error(`Failed to run company AI review batch:`,e),M.adminMessage={type:`error`,text:`AI company review failed. ${W(e)}`}}finally{let t={...M.adminCompanyAiReviewActions||{}};delete t[e],M.adminCompanyAiReviewActions=t,X()}}async function Ni(){if(!M.isAdmin){M.adminMessage={type:`error`,text:`You do not have access to this action.`},X();return}M.adminAutomaticAiReviewLoading=!0,M.adminMessage=null,X();try{let e=await Me({limit:10});M.adminAutomaticAiReviewResult=e,await Promise.all([I(),L()]),M.adminMessage={type:`success`,text:`Automatic AI review created ${Number(e.ai_reviews_created||0)} reviews across ${Number(e.companies_checked||0)} companies.`},G(`Automatic AI review completed`,`success`)}catch(e){console.error(`Failed to run automatic AI review:`,e),M.adminMessage={type:`error`,text:`Automatic AI review failed. ${W(e)}`}}finally{M.adminAutomaticAiReviewLoading=!1,X()}}async function Pi(){if(M.isAdmin){M.adminDailyPipelineLoading=!0,M.adminMessage=null,X();try{let e=await Ee();M.adminDailyPipelineResult=e,await Promise.all([Ri(),I(),L()]),M.adminMessage={type:e.errors?.length?`error`:`success`,text:`Daily pipeline finished: ${Number(e.sources_imported||0)} sources, ${Number(e.companies_refreshed||0)} companies, ${Number(e.ai_reviews_created||0)} AI reviews.`}}catch(e){console.error(`Failed to run daily pipeline:`,e),M.adminMessage={type:`error`,text:`Daily pipeline failed. ${W(e)}`}}finally{M.adminDailyPipelineLoading=!1,X()}}}async function Fi(e,t){if(!M.isAdmin||!e)return;let n=(M.adminCompanies||[]).find(t=>t.id===e);M.adminMessage=null,X();try{await Ne(e,t),M.adminCompanies=(M.adminCompanies||[]).map(n=>n.id===e?{...n,autoAiReviewEnabled:t}:n),await I(),M.adminMessage={type:`success`,text:`Automatic AI review ${t?`enabled`:`disabled`} for company.`},X()}catch(t){console.error(`Failed to toggle company automatic AI review:`,t);let r=t?.details||{};M.adminMessage={type:`error`,text:`Failed to update automatic AI review setting. ${W(t)} Debug: company_id=${e}; company=${n?.companyName||`unknown`}; email=${n?.contactEmail||`unknown`}; returned_rows=${r.rowCount??`unknown`}; returned_data=${r.dataReturned===!1?`false`:`unknown`}.`},X()}}async function R(e,t,n={}){let r=_a();if(!r)throw Error(`Admin company actions are not configured. Set window.VERKRADAR_ADMIN_COMPANY_ACTIONS_URL or window.VERKRADAR_SUPABASE_URL.`);let i=await fetch(r,{method:`POST`,headers:await Sa(),body:JSON.stringify({companyId:e,action:t,...n})}),a=await i.json().catch(()=>({}));if(!i.ok)throw Error(a.error||`Admin company action failed with status ${i.status}`);return a}function Ii(e){return e===`all_current`?`current active opportunities`:`new opportunities`}function Li(e,t){let n=e?.report_mode||M.adminReportMode||`all_current`;return e?.message||(n===`new_only`?`No new eligible opportunities found since the previous report.`:`No customer-report-ready matches found for ${t}.`)}async function Ri(){M.isAdmin&&(await Promise.all([oi(),xa(),si(),ci(),pi(),I(),L()]),G(`Automation status refreshed`,`success`),X())}function zi(e){let t=e.raw_payload&&typeof e.raw_payload==`object`?e.raw_payload:{},n=e.sources?.name||t.source_name||``,r=z(t.quality_status||t.qualityStatus,{source:n,sourceType:e.sources?.source_type||``,title:e.title||``,description:Vi(e.description||``,t,n,e.title||``),rawPayload:t}),i=B({source:n,sourceType:e.sources?.source_type||``,title:e.title||``,description:e.description||``,category:e.category||``,keywords:Array.isArray(e.keywords)?e.keywords:[],qualityStatus:r,rawPayload:t});return{id:e.id,externalId:e.external_id||``,countryCode:e.country_code||``,title:e.title,buyer:lr(e.buyer,n,t),source:n||`Supabase`,sourceType:e.sources?.source_type||``,category:e.category||`Other`,type:e.type||`tender`,description:e.description||``,deadline:e.deadline,deadlineAt:t.deadline_at||``,publishedDate:e.published_date,createdAt:e.created_at,updatedAt:e.updated_at||``,location:Gi(e.location||`Unknown`,t,n,e.title||``,e.description||``),estimatedValue:e.estimated_value,currency:e.currency||`ISK`,url:e.url||``,cpvCode:e.cpv_code||``,requirements:Array.isArray(e.requirements)?e.requirements:[],keywords:Array.isArray(e.keywords)?e.keywords:[],difficulty:e.difficulty||`medium`,status:e.status||`open`,qualityStatus:r,intent:i,rawPayload:t}}function Bi(e){let t=zi(e.opportunities||{});return{...t,matchScore:Number(e.match_score||0),matchLabel:e.match_label||ls(Number(e.match_score||0)),matchReasons:fa(t,Array.isArray(e.match_reasons)?e.match_reasons:[]),risks:Array.isArray(e.risks)?e.risks:[],nextSteps:Array.isArray(e.next_steps)?e.next_steps:[],safetyStatus:e.safety_status||`needs_review`,safetyReasons:Array.isArray(e.safety_reasons)?e.safety_reasons:[],alertEligible:!!e.alert_eligible,reviewRequired:!!e.review_required,reviewedAt:e.reviewed_at||``,reviewNote:e.review_note||``}}function Vi(e,t={},n=``,r=``){t=t&&typeof t==`object`?t:{};let i=String(e||``).replace(/\s+/g,` `).trim(),a=k(n);if(!i)return``;if(a.includes(`rikiskaup`)||a.includes(`utbodsvefur`)){let e=Hi(i,t,r);if(e)return e;if(Ui(i)||Wi(i))return M.language===`is`?`Útboðstilkynning flutt inn af Útboðsvef. Opnið upprunasíðuna til að staðfesta kaupanda, skilafrest, kröfur og útboðsgögn.`:`Procurement notice imported from Útboðsvefur. Open the source page to confirm buyer, deadline, requirements and tender documents.`}return i}function Hi(e,t={},n=``){t=t&&typeof t==`object`?t:{};let r=String(e||``).replace(/\s+/g,` `).trim();if(!r)return``;let i=[r.search(/F\.h\.[^.]{0,280}ósk(?:að|ar) eftir tilboðum/i),r.search(/(?:Reykjavíkurborg|sveitarfélag|bærinn|kaupandi)[^.]{0,280}ósk(?:að|ar) eftir tilboðum/i),r.search(/óskar eftir tilboðum|óskað eftir tilboðum|oskar eftir tilbodum|oskad eftir tilbodum/i),r.search(/verkefnið felst|verkið felst|verkið felur|gatna-|gatnagerð|stígagerð/i)].filter(e=>e>=0);if(!i.length)return``;let a=Math.min(...i),o=r.slice(a).search(/\s+(Nánari upplýsingar|Útboðsgögn afhent|Opnun tilboða|Opnun tilboda|Auglýsandi|Flokkar|Tengdar fréttir|Fjöldi útboð)\b/i),s=o>120?a+o:a+1200,c=[r.slice(a,s).trim()],l=t.extracted_deadline_text||t.deadline_text||``;l&&!c[0].includes(String(l))&&c.push(`Skilafrestur: ${l}`);let u=Qn(c).join(` `).replace(/^(Útboðsvefur\s*){1,}/i,``).replace(/\s+/g,` `).trim();return Wi(u)?``:u||n}function Ui(e){return/Procurement notice imported from Útboðsvefur|Open the source page for full buyer details/i.test(String(e||``))}function Wi(e){let t=String(e||``);return[`Framkvæmdasýslan`,`Ríkiseignir`,`Garðabær`,`Grímsnes`,`Fjöldi útboð`,`Útboðsvefur.is - Opinber útboð`].filter(e=>t.includes(e)).length>=3||/^Útboðsvefur\s+Útboðsvefur\.is/i.test(t)}function Gi(e,t={},n=``,r=``,i=``){let a=Ki(`${r} ${i} ${JSON.stringify(t||{})}`),o=String(e||``).trim();return a&&(!o||/unknown|all iceland|iceland/i.test(o))?a:o||a||`Unknown`}function Ki(e){let t=k(e);return t.includes(`vogabyggd`)||t.includes(`reykjavikurborg`)||t.includes(`strandstigur`)?`Reykjavík / Höfuðborgarsvæðið`:``}function qi(e){if(!e||e.status!==`open`||!e.url||e.url===`#`||T(e.deadline)<0||Ji(e)||e.rawPayload?.extraction_method===`parent_article_with_child_opportunities`||ad(e)||$i(e))return!1;if(!Pl(e))return!0;let t=ua(e);return[`IS`,`NO`,`DK`,`SE`,`FI`].includes(t)}function Ji(e){let t=k(e?.source||``),n=k(e?.title||``),r=k(e?.externalId||``),i=k(e?.sourceType||``),a=e?.rawPayload||{},o=`${t} ${n} ${r} ${i}`;return!!(a.is_demo===!0||a.demo===!0||t===`private lead`||t.includes(`private lead`)||t===`grant portal`||t.includes(`grant portal`)||t===`manual test`||t.includes(`manual test`)||[`demo`,`test`,`sample`,`mock`,`fake`].some(e=>i.includes(e))||/\b(demo|test|sample|mock|fake|manual)\b/.test(o)||n.includes(`manual test`)||n.includes(`municipal websites example`)||r.includes(`demo`)||r.includes(`test`))}function z(e,t={}){let n=String(e||``).toLowerCase(),r=Yi(t?.rawPayload?.opportunity_intent||t?.rawPayload?.intent);if(r===`confirmed_tender`)return`confirmed_tender`;if(r===`early_opportunity`||r===`market_signal`)return`early_signal`;if(r===`news_context`||r===`not_opportunity`)return`needs_review`;if(Pl(t))return`confirmed_tender`;if(V(t)){let e=Xi(t);return[`tender_awarded`,`awarded`,`already_tendered`,`announced`].includes(e)?`confirmed_tender`:e===`upcoming_tender`?`early_signal`:`needs_review`}if(n===`early_signal`||n===`needs_review`)return n;let i=H(t);return U(i,[`senn í útboð`,`senn i utbod`])?`early_signal`:Qi(i)?`confirmed_tender`:ca(t?.title||``)&&!Qi(i)?`needs_review`:oa(i)?`early_signal`:(la(i),`needs_review`)}function Yi(e){return{confirmed:`confirmed_tender`,confirmed_tender:`confirmed_tender`,likely_opportunity:`confirmed_tender`,verified:`confirmed_tender`,early_signal:`early_opportunity`,early_opportunity:`early_opportunity`,upcoming_tender:`early_opportunity`,market_signal:`market_signal`,project_signal:`market_signal`,needs_review:`market_signal`,news_context:`news_context`,news:`news_context`,noise:`not_opportunity`,not_opportunity:`not_opportunity`,stale_opportunity:`not_opportunity`,stale:`not_opportunity`,expired:`not_opportunity`}[String(e||``).toLowerCase().trim()]||``}function B(e={}){let t=Yi(e?.rawPayload?.opportunity_intent||e?.rawPayload?.intent),n=String(e?.rawPayload?.admin_report_status||``).toLowerCase();if(n===`include`)return`confirmed_tender`;if([`hidden`,`hide`,`noise`,`deleted`].includes(n))return t||`not_opportunity`;if(t)return t;if(Pl(e))return`confirmed_tender`;let r=H(e),i=e?.title||``;if(V(e)){let t=Xi(e);return[`tender_awarded`,`awarded`,`already_tendered`,`announced`].includes(t)?`confirmed_tender`:t===`upcoming_tender`?`early_opportunity`:`market_signal`}return Qi(r)?`confirmed_tender`:ca(i)||la(r)?`news_context`:aa(r)?`early_opportunity`:(sa(r),`market_signal`)}function V(e){return e?.rawPayload?.extraction_method===`vegagerdin_article_project_parser`}function Xi(e){let t=String(e?.rawPayload?.tender_state||``).trim(),n=Zi(e),r={awarded:`tender_awarded`,open_or_published:`announced`,planned_tender:`upcoming_tender`,unclear:`project_signal`}[t]||t;return n===`tender_awarded`?`tender_awarded`:n===`already_tendered`&&![`tender_awarded`,`announced`].includes(r)?`already_tendered`:n===`announced`&&![`tender_awarded`,`already_tendered`].includes(r)?`announced`:n===`upcoming_tender`&&[``,`project_signal`,`needs_review`,`unclear`].includes(r)?`upcoming_tender`:r||n}function Zi(e){let t=H(e);return U(t,[`lægstbjóðandi`,`laegstbjodandi`,`samningur var`,`samið var`,`samid var`,`skrifað var undir verksamning`,`skrifad var undir verksamning`])?`tender_awarded`:U(t,[`útboð var auglýst`,`utbod var auglyst`,`útboðið var auglýst`,`utbodid var auglyst`,`útboð hefur farið fram`,`utbod hefur farid fram`,`útboðið hefur farið fram`,`utbodid hefur farid fram`,`boðið út`,`bodid ut`,`verkið var boðið út`,`verkid var bodid ut`,`útboð var opnað`,`utbod var opnad`,`tilboð opnuð`,`tilbod opnud`])?`already_tendered`:U(t,[`óskað eftir tilboðum`,`oskad eftir tilbodum`,`tilboðsfrestur`,`tilbodsfrestur`,`skilafrestur`,`verðfyrirspurn`,`verdfyrirspurn`,`rammasamningur`,`forval`])?`announced`:U(t,[`áætlað útboð`,`aaetlad utbod`,`áætlað er að bjóða út`,`aaetlad er ad bjoda ut`,`fyrirhugað útboð`,`fyrirhugad utbod`,`senn í útboð`,`senn i utbod`,`útboð verður`,`utbod verdur`])?`upcoming_tender`:`project_signal`}function H(e){return k([e?.title,e?.description,e?.category,e?.source,...Array.isArray(e?.keywords)?e.keywords:[]].filter(Boolean).join(` `))}function U(e,t){let n=k(e);return t.some(e=>n.includes(k(e)))}function Qi(e){return U(e,[`útboð`,`utbod`,`útboðsauglýsing`,`utbodsauglysing`,`tilboð`,`tilboðum`,`tilbod`,`tilbodum`,`óskað eftir tilboðum`,`oskad eftir tilbodum`,`verðfyrirspurn`,`verdfyrirspurn`,`innkaup`,`rammasamningur`,`forval`,`tender`,`procurement`,`skilafrestur`,`útboðsgögn`,`utbodsgogn`])}function $i(e={}){let t=e.rawPayload||{};return t.stale_status===`stale_or_expired`||t.opportunity_intent===`stale_opportunity`?!0:ea({title:e.title,description:e.description,content:[e.category,e.source,Array.isArray(e.keywords)?e.keywords.join(` `):``].filter(Boolean).join(` `),publishedDate:e.publishedDate,deadline:e.deadline,sourceName:e.source,sourceType:e.sourceType,connectorType:t.connector_type}).isStale}function ea(e={}){let t=String(e.deadline||``).slice(0,10);if(t&&T(t)>=0)return{isStale:!1,reason:``,thresholdDays:null,ageDays:null,oldYears:[],expiredKeywords:[]};let n=k([e.title,e.description,e.content].filter(Boolean).join(` `)),r=na(n),i=ra(n),a=ia(e.publishedDate),o=a?Math.floor((Date.now()-new Date(`${a}T00:00:00Z`).getTime())/864e5):null,s=ta(e)?45:60;return r.length?{isStale:!0,reason:`Old year detected (${r.join(`, `)}) and no future deadline found.`,thresholdDays:s,ageDays:o,oldYears:r,expiredKeywords:i}:i.length?{isStale:!0,reason:`Expired/result wording detected (${i.slice(0,3).join(`, `)}) and no future deadline found.`,thresholdDays:s,ageDays:o,oldYears:r,expiredKeywords:i}:o!==null&&o>s?{isStale:!0,reason:`Published ${o} days ago with no current deadline.`,thresholdDays:s,ageDays:o,oldYears:r,expiredKeywords:i}:{isStale:!1,reason:``,thresholdDays:s,ageDays:o,oldYears:r,expiredKeywords:i}}function ta(e={}){let t=k(`${e.sourceName||``} ${e.sourceType||``} ${e.connectorType||``}`);return String(e.connectorType||``)===`rss_feed`&&[`municipal`,`sveitarfelag`,`akranes`,`borgarbyggd`,`arborg`,`selfoss`,`gardabaer`,`reykjanesbaer`,`hafnarfjordur`,`mosfellsbaer`,`kopavogur`,`mulathing`,`fjardabyggd`].some(e=>t.includes(k(e)))}function na(e){let t=new Date().getUTCFullYear(),n=new Set;return String(e||``).replace(/\b(20[0-9]{2})\b/g,(e,r)=>{let i=Number(r);return i>=2020&&i<t&&n.add(i),r}),Array.from(n).sort()}function ra(e){return`niðurstaða útboðs.nidurstada utbods.niðurstöður útboðs.nidurstodur utbods.opnun tilboða.opnun tilboda.tilboð opnuð.tilbod opnud.lokið.lokid.lokið útboði.lokid utbodi.búið.buid.útrunnið.ut runnid.eldri útboð.eldri utbod.útboðssaga.utbodssaga.samningur gerður.samningur gerdur.verksamningur.awarded.tender results.contract awarded.expired`.split(`.`).filter(t=>U(e,[t]))}function ia(e){if(!e)return``;let t=new Date(e);return Number.isNaN(t.getTime())?``:t.toISOString().slice(0,10)}function aa(e){return U(e,[`senn í útboð`,`senn i utbod`,`áætlað útboð`,`aaetlad utbod`,`áætlað er að bjóða út`,`aaetlad er ad bjoda ut`,`fyrirhugað útboð`,`fyrirhugad utbod`,`markaðskönnun`,`markadskonnun`,`rfi`])}function oa(e){return aa(e)?!0:U(e,[`áætlaðar framkvæmdir`,`aaetladar framkvaemdir`,`fyrirhugaðar framkvæmdir`,`fyrirhugadar framkvaemdir`,`framkvæmdir hefjast`,`framkvaemdir hefjast`,`malbikunarframkvæmdir`,`malbikunarframkvaemdir`,`vegaframkvæmdir`,`vegaframkvaemdir`,`brúargerð`,`bruargerd`,`jarðvinna`,`jardvinna`,`gatnagerð`,`gatnagerd`])}function sa(e){return U(e,[`áætlaðar framkvæmdir`,`aaetladar framkvaemdir`,`fyrirhugaðar framkvæmdir`,`fyrirhugadar framkvaemdir`,`framkvæmdir hefjast`,`framkvaemdir hefjast`,`malbikunarframkvæmdir`,`malbikunarframkvaemdir`,`vegaframkvæmdir`,`vegaframkvaemdir`,`brúargerð`,`bruargerd`,`jarðvinna`,`jardvinna`,`gatnagerð`,`gatnagerd`,`fræsing`,`fraesing`])}function ca(e){return U(e,[`lokun`,`lokað`,`lokad`,`lokanir`,`umferð`,`umferd`,`tafir`,`hjáleið`,`hjaleid`,`akstursleið`,`akstursleid`,`vegfarendur`,`frétt`,`frett`,`myndband`,`tekur á sig mynd`,`tekur a sig mynd`,`opið aftur`,`opid aftur`])}function la(e){return U(e,[`lokun`,`lokanir`,`umferð`,`umferd`,`dagskrá`,`dagskra`,`skráning`,`skraning`,`myndband`,`ráðstefna`,`radstefna`,`kynningarfundur`,`tilkynning`,`fundur`,`fjölskylduganga`,`fjolskylduganga`,`tafir`,`kynnt`,`styrkur`,`frétt`,`frett`,`viðburður`,`vidburdur`])}function ua(e){let t=da(e.countryCode);if(t)return t;let n=k(ns(e));return n.includes(`iceland`)||n.includes(`island`)||n.includes(`reykjavik`)||n.includes(`capital area`)||n.includes(`hofudborgarsvaedid`)||n.includes(`east iceland`)||n.includes(`west iceland`)||n.includes(`north iceland`)||n.includes(`south iceland`)||n.includes(`sudurnes`)?`IS`:n.includes(`norway`)?`NO`:n.includes(`denmark`)?`DK`:n.includes(`sweden`)?`SE`:n.includes(`finland`)?`FI`:``}function da(e){return{IS:`IS`,ISL:`IS`,ICELAND:`IS`,ÍSLAND:`IS`,NO:`NO`,NOR:`NO`,NORWAY:`NO`,DK:`DK`,DNK:`DK`,DENMARK:`DK`,SE:`SE`,SWE:`SE`,SWEDEN:`SE`,FI:`FI`,FIN:`FI`,FINLAND:`FI`}[String(e||``).trim().toUpperCase()]||``}function fa(e,t){return ts(e)?t:t.filter(e=>!/^Located in your selected region:/i.test(String(e||``)))}function pa(){M.authForm={email:``,password:``,newPassword:``,confirmPassword:``}}function ma(){M.authForm.newPassword=``,M.authForm.confirmPassword=``}function ha(){return window.VERKRADAR_TED_IMPORT_URL?window.VERKRADAR_TED_IMPORT_URL:window.VERKRADAR_SUPABASE_URL?`${window.VERKRADAR_SUPABASE_URL}/functions/v1/import-ted`:`${c}/functions/v1/import-ted`}function ga(){return window.VERKRADAR_SOURCE_CONNECTOR_IMPORT_URL?window.VERKRADAR_SOURCE_CONNECTOR_IMPORT_URL:window.VERKRADAR_SUPABASE_URL?`${window.VERKRADAR_SUPABASE_URL}/functions/v1/import-source-connectors`:`${c}/functions/v1/import-source-connectors`}function _a(){return window.VERKRADAR_ADMIN_COMPANY_ACTIONS_URL?window.VERKRADAR_ADMIN_COMPANY_ACTIONS_URL:window.VERKRADAR_SUPABASE_URL?`${window.VERKRADAR_SUPABASE_URL}/functions/v1/admin-company-actions`:`${c}/functions/v1/admin-company-actions`}async function va(e){let t=await e.text();if(!t)return{};try{return JSON.parse(t)}catch{return{errors:[t]}}}async function ya(){if(!M.isAdmin){M.importStatus={errors:[`You do not have access to import TED notices.`]},X();return}let e=ha();if(!e){M.importStatus={errors:[`TED importer is not configured. Set window.VERKRADAR_TED_IMPORT_URL or window.VERKRADAR_SUPABASE_URL for this environment.`]},X();return}M.importLoading=!0,M.importStatus=null,M.importedTedOpportunities=[],X();try{let t=await fetch(e,{method:`POST`,headers:await Sa(),body:JSON.stringify({limit:50,importMode:M.tedImportMode})}),n=await va(t);if(M.importStatus=t.ok?n:{...n,errors:n.errors||[`Import failed with status ${t.status}`]},t.ok){await ai();let e=M.companyId?await $a():Number(n.matched||0);await xa(),M.isAdmin&&(await oi(),await si()),M.importStatus={...M.importStatus,matched:e},G(`TED import completed`,`success`)}}catch(e){M.importStatus={errors:[e instanceof Error?e.message:String(e)]}}finally{M.importLoading=!1,X()}}async function ba(e=``){if(!M.isAdmin){M.connectorImportStatus={errors:[`You do not have access to run source imports.`]},X();return}let t=ga();if(!t){M.connectorImportStatus={errors:[`Source connector importer is not configured. Set window.VERKRADAR_SOURCE_CONNECTOR_IMPORT_URL or window.VERKRADAR_SUPABASE_URL for this environment.`]},X();return}M.connectorImportLoading=!e,M.connectorTestingSourceId=e||null,M.connectorImportStatus=null,X();try{let n=await fetch(t,{method:`POST`,headers:await Sa(),body:JSON.stringify({limit:e?50:20,maxSources:e?1:6,sourceId:e||void 0,refreshMatches:!!e,generateReports:!1})}),r=await va(n),i=Array.isArray(r.errors)?r.errors:[],a=Array.isArray(r.failedSources)?r.failedSources:[];M.connectorImportStatus=n.ok?{...r,failedSources:a}:{...r,failedSources:a,errors:i.length?i:[`Source import failed with status ${n.status}${n.statusText?` ${n.statusText}`:``}`]},n.ok&&(await ai(),await Ri(),G(e?`Source test completed`:`Automatic source imports completed`,`success`))}catch(e){M.connectorImportStatus={errors:[e instanceof Error?e.message:String(e)]}}finally{M.connectorImportLoading=!1,M.connectorTestingSourceId=null,X()}}async function xa(){if(!u){M.importedTedOpportunities=[],M.importedTedOpportunitiesLoaded=!0;return}M.importedTedOpportunitiesLoading=!0,M.importedTedOpportunitiesError=null;try{let{data:e,error:t}=await u.from(`sources`).select(`id, name`).in(`name`,[`TED Iceland/Nordic`,`EU TED`,`Tenders Electronic Daily`]);if(t)throw t;let n=(e||[]).map(e=>e.id).filter(Boolean);if(!n.length){M.importedTedOpportunities=[];return}let{data:r,error:i}=await u.from(`opportunities`).select(`*, sources(name, source_type)`).in(`source_id`,n).order(`created_at`,{ascending:!1}).limit(10);if(i)throw i;M.importedTedOpportunities=(r||[]).map(zi)}catch(e){console.error(`Failed to load latest TED opportunities:`,e),M.importedTedOpportunities=[],M.importedTedOpportunitiesError=W(e)}finally{M.importedTedOpportunitiesLoading=!1,M.importedTedOpportunitiesLoaded=!0}}async function Sa(){let e={"content-type":`application/json`},t=window.VERKRADAR_SUPABASE_ANON_KEY||`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFzb2p4amJzZ3FiZnBiZXBvanpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAwNTU2NjgsImV4cCI6MjA5NTYzMTY2OH0.yPA34VbqWqKrBPespmHr5AojYzjhy3kGRxswO9XdAd0`;t&&t!==`PASTE_MY_ANON_PUBLIC_KEY_HERE`&&(e.apikey=t);let{data:n,error:r}=u?await u.auth.getSession():{data:{session:null},error:null};if(r)throw r;let i=n.session?.access_token;if(!i)throw Error(`You must be logged in to run this admin action.`);return e.authorization=`Bearer ${i}`,e}function Ca(){let e=M.pendingInviteToken||se();return e&&ae(M.route)?te(e):`${window.location.origin}/#/onboarding`}function wa(){return`${window.location.origin}/#/reset-password`}function Ta(e){let t=e?.user?.identities;return Array.isArray(t)&&t.length===0}function Ea(){return[{label:j(`login`),href:Rr(`/login`),variant:`primary`},{label:j(`forgotPassword`),href:Rr(`/forgot-password`),variant:`secondary`}]}async function Da(e,t){Mr(),M.authSubmitting=!0,M.authMessage=null,X();try{if(!u)throw Error(`Supabase client is not configured.`);let{data:n,error:r}=await u.auth.signUp({email:String(e||``).trim(),password:String(t||``),options:{emailRedirectTo:Ca()}});if(r)throw r;if(zr(),Ta(n)){M.user=null,M.currentUser=null,M.authMessage={type:`error`,text:j(`signupExistingAccount`),actions:Ea()},M.authForm.password=``,X();return}if(!n.session?.user){M.user=null,M.currentUser=null;let e=Array.isArray(n?.user?.identities)&&n.user.identities.length>0;M.authMessage={type:`success`,text:M.pendingInviteToken?j(`inviteSignupCreatedConfirm`):j(e?`signupCreatedConfirm`:`signupNeutralNextSteps`)},M.authForm.password=``,X();return}M.user=n.session.user,M.currentUser=M.user,M.profileDraft=null,M.profileDraftDirty=!1,await Na(M.user),M.authMessage={type:`success`,text:j(`signupCreatedConfirm`)},await Ba({overwriteDraft:!0}),pa(),P(Xr())}catch(e){console.error(`Signup failed:`,e);let t=oo(e);M.authMessage={type:`error`,text:ao(e,`signup`),actions:t?Ea():[]},X()}finally{M.authSubmitting=!1,X()}}async function Oa(e,t){M.authSubmitting=!0,M.authMessage=null,X();try{if(!u)throw Error(`Supabase client is not configured.`);let{data:n,error:r}=await u.auth.signInWithPassword({email:String(e||``).trim(),password:String(t||``)});if(r)throw r;M.user=n.user||await Ma(),M.currentUser=M.user,M.profileDraft=null,M.profileDraftDirty=!1,await Na(M.user),await Ba({overwriteDraft:!0}),pa(),P(Xr())}catch(e){console.error(`Login failed:`,e),M.authMessage={type:`error`,text:ao(e,`login`)},X()}finally{M.authSubmitting=!1,X()}}async function ka(e){M.authSubmitting=!0,M.authMessage=null,X();try{if(!u)throw Error(`Supabase client is not configured.`);let{error:t}=await u.auth.resetPasswordForEmail(String(e||``).trim(),{redirectTo:wa()});if(t)throw t;M.authMessage={type:`success`,text:`If an account exists for this email, a reset link has been sent.`}}catch(e){console.error(`Password reset request failed:`,e),M.authMessage={type:`error`,text:`We could not send a reset link right now. Please try again.`}}finally{M.authSubmitting=!1,X()}}async function Aa(e,t){let n=String(e||``),r=String(t||``);if(!n){M.authMessage={type:`error`,text:`Enter a new password.`},X();return}if(n.length<8){M.authMessage={type:`error`,text:`Password must be at least 8 characters.`},X();return}if(n!==r){M.authMessage={type:`error`,text:`Passwords do not match.`},X();return}M.authSubmitting=!0,M.authMessage=null,X();try{if(!u)throw Error(`Supabase client is not configured.`);let{error:e}=await u.auth.updateUser({password:n});if(e)throw e;ma(),P(`/login`),M.authMessage={type:`success`,text:`Password updated. You can now log in.`},X()}catch(e){console.error(`Password update failed:`,e),M.authMessage={type:`error`,text:`This reset link may be expired or invalid. Request a new reset link and try again.`},X()}finally{M.authSubmitting=!1,X()}}async function ja(){try{if(u){let{error:e}=await u.auth.signOut();if(e)throw e}}catch(e){console.error(`Logout failed:`,e)}finally{M.user=null,M.currentUser=null,M.isAdmin=!1,M.authLoaded=!0,M.adminLoaded=!0,M.profileLoaded=!0,Pr(),zr(),P(`/`),X()}}async function Ma(){if(!u)return null;let{data:e,error:t}=await u.auth.getUser();return t?(console.error(`Failed to get current user:`,t),null):e.user||null}async function Na(e=M.user){if(!u||!e)return M.isAdmin=!1,!1;try{let{data:t,error:n}=await u.from(`admin_users`).select(`user_id`).eq(`user_id`,e.id).maybeSingle();if(n)throw n;return M.isAdmin=!!t?.user_id,M.isAdmin}catch(e){return console.error(`Failed to check admin access:`,e),M.isAdmin=!1,!1}}function Pa(){return Z(`
    <section class="empty-state">
      <h1>${A(j(`authRequiredTitle`))}</h1>
      <p>${A(j(`authRequiredText`))}</p>
      <button class="btn btn-primary" data-action="go" data-href="/login">${A(j(`login`))}</button>
      <button class="btn btn-secondary" data-action="go" data-href="/trial">${A(j(`createFreeDemoProfile`))}</button>
    </section>
  `)}function Fa(){return Z(`
    <section class="empty-state">
      <h1>You do not have access to this page.</h1>
      <p>Admin access is limited to approved VerkRadar admin users.</p>
    </section>
  `)}var Ia=!1,La=!1;async function Ra(){if(!u)return M.user=null,M.currentUser=null,null;let{data:e,error:t}=await u.auth.getSession();if(t)throw t;return M.user=e.session?.user||null,M.currentUser=M.user,M.user}async function za(){M.adminLoaded=!1,await Na(M.currentUser||M.user),M.adminLoaded=!0}async function Ba(e={}){let{overwriteDraft:t=!1,showGlobalLoading:n=!1}=e;(n||!M.profile&&!M.profileDraftDirty)&&(M.profileLoaded=!1),M.profileLoading=!0,M.profileLoadError=null;try{await Va(Ka({overwriteDraft:t}),xr,`Profile loading took too long. Please retry.`)}catch(e){console.error(`Failed to load profile from Supabase:`,e),M.profileLoadError=W(e)}finally{M.profileLoading=!1,M.profileLoaded=!0}}function Va(e,t,n){let r,i=new Promise((e,i)=>{r=setTimeout(()=>i(Error(n)),t)});return Promise.race([e,i]).finally(()=>clearTimeout(r))}async function Ha(){if(!M.isSavingProfile){M.profileLoadError=null,M.profileLoading=!0,X();try{await Ba({overwriteDraft:!0})}catch(e){console.error(`Settings profile retry failed:`,e),M.profileLoadError=W(e)}finally{M.profileLoading=!1,M.profileLoaded=!0,X(),F()}}}function Ua(){!u||La||(La=!0,u.auth.onAuthStateChange(async(e,t)=>{if(Ia){if(M.inviteAuthEvent=e||``,M.user=t?.user||null,M.currentUser=M.user,M.user){if(e===`PASSWORD_RECOVERY`){M.authLoaded=!0,M.adminLoaded=!0,M.profileLoaded=!0,M.authMessage=null,P(`/reset-password`);return}try{await za(),M.route===`/settings`&&M.profileDraftDirty?M.profileLoaded=!0:await Ba()}catch(e){console.error(`Auth profile refresh failed:`,e),M.profileLoadError=W(e),M.adminLoaded=!0,M.profileLoaded=!0}if(ni())return;X(),F();return}M.isAdmin=!1,M.profile=null,M.companyMembership=null,M.profileDraft=null,M.profileDraftDirty=!1,M.profileLoading=!1,M.profileLoadError=null,M.companyId=null,M.storedMatches=[],M.reports=[],M.reportsLoaded=!1,M.reportsLoadError=null,M.selectedReportId=null,M.authLoaded=!0,M.adminLoaded=!0,M.profileLoaded=!0,e===`SIGNED_OUT`&&P(`/`),X(),F()}}))}async function Wa(){M.isBooting=!0,M.authLoaded=!1,M.profileLoaded=!1,M.adminLoaded=!1,M.bootError=null,X();try{if(Ua(),await Lr(),await Ra(),M.authLoaded=!0,M.currentUser&&Zr()){let e=Zr();M.pendingInviteToken=le(e),M.adminLoaded=!0,M.profileLoaded=!0,ti(`/accept-invite?token=${encodeURIComponent(e)}`),await N({callback_invite_present:!!v(M.route),pending_invite_present:!0,onboarding_redirect_blocked:!0,accept_started_from_callback:!0,final_route:`/accept-invite?token=${encodeURIComponent(e)}`})}else M.currentUser?(await za(),await Ba({overwriteDraft:!0,showGlobalLoading:!0})):(M.profile=null,M.companyMembership=null,M.profileDraft=null,M.profileDraftDirty=!1,M.profileLoading=!1,M.profileLoadError=null,M.companyId=null,M.isAdmin=!1,M.adminLoaded=!0,M.profileLoaded=!0)}catch(e){console.error(`Boot failed:`,e),M.bootError=W(e),M.authLoaded=!0,M.adminLoaded=!0,M.profileLoaded=!0}finally{M.authLoading=!1,M.isBooting=!1,Ia=!0,ei()?ti(`/reset-password`):ni({replace:!0}),X(),F()}}async function Ga(){if(!u||!M.user)return{company:null,membership:null};let{data:e,error:t}=await u.from(`companies`).select(`*`).eq(`owner_id`,M.user.id).maybeSingle();if(t)throw t;if(e)return{company:e,membership:null};let n=(await he(u,M.user))[0]||null;if(!n?.company_id)return{company:null,membership:null};let{data:r,error:i}=await u.from(`companies`).select(`*`).eq(`id`,n.company_id).maybeSingle();if(i)throw i;return{company:r||null,membership:n}}async function Ka(e={}){let{overwriteDraft:t=!1}=e;if(!u||!M.user){M.profile=null,M.companyMembership=null,(t||!M.profileDraftDirty)&&(M.profileDraft=null),X();return}try{await me(u,M.user).catch(e=>(console.warn(`Failed to claim invited company memberships:`,e),[]));let{company:e,membership:n}=await Ga();if(!e){M.companyId=null,M.companyMembership=null,M.storedMatches=[],M.reports=[],M.reportsLoaded=!1,M.reportsLoadError=null,M.selectedReportId=null,M.profile=null,(t||!M.profileDraftDirty)&&(M.profileDraft=null),M.profileLoadError=null,X(),F();return}if(M.profileDraftDirty&&M.companyId&&M.companyId!==e.id&&!t){if(!window.confirm(`You have unsaved profile changes. Switch company profile and discard those edits?`)){M.profileLoadError=`Unsaved changes were kept. Save or reload before switching company profiles.`,X(),F();return}M.profileDraftDirty=!1}let[r,i,a]=await Promise.all([u.from(`company_services`).select(`service`).eq(`company_id`,e.id),u.from(`company_locations`).select(`location`).eq(`company_id`,e.id),u.from(`company_keywords`).select(`keyword, type`).eq(`company_id`,e.id)]);if(r.error)throw r.error;if(i.error)throw i.error;if(a.error)throw a.error;M.companyId!==e.id&&(M.reports=[],M.reportsLoaded=!1,M.reportsLoadError=null,M.selectedReportId=null),M.companyId=e.id,M.companyMembership=n||null;let o=Ja(e,r.data||[],i.data||[],a.data||[]);M.profile=o,(t||!M.profileDraftDirty)&&So(o),M.profileLoadError=null,so(M.profile),await Ts(),await Ya(),X(),F()}catch(e){console.error(`Failed to load Supabase company profile:`,e),M.profileLoadError=W(e),M.profileDraftDirty||(M.companyId=null,M.companyMembership=null,M.storedMatches=[],M.reports=[],M.reportsLoaded=!1,M.reportsLoadError=null,M.selectedReportId=null,M.profile=null),M.profileDraftDirty||(M.profileDraft=null),X(),F()}}async function qa(e){if(!u)throw Error(`Supabase client is not configured.`);let t={...e,companyName:String(e.companyName||``).trim(),kennitala:String(e.kennitala||``).trim(),contactEmail:String(e.contactEmail||``).trim(),billingEmail:String(e.billingEmail||``).trim(),contactName:String(e.contactName||``).trim(),phone:String(e.phone||``).trim(),address:String(e.address||``).trim(),website:String(e.website||``).trim(),industry:String(e.industry||``).trim(),selectedPlan:Tr(e.selectedPlan||M.pendingSignupPlan||M.profile?.selectedPlan||M.profile?.plan)||`basic`,billingStatus:e.billingStatus||M.profile?.billingStatus||`trial`,trialStartedAt:e.trialStartedAt||M.profile?.trialStartedAt||new Date().toISOString(),trialEndsAt:e.trialEndsAt||M.profile?.trialEndsAt||new Date(Date.now()+336*60*60*1e3).toISOString(),services:O(e.services),locations:O(e.locations),includeKeywords:O(e.includeKeywords),excludeKeywords:O(e.excludeKeywords),baseLocation:String(e.baseLocation||``).trim(),serviceAreas:O(e.serviceAreas),willingToTravel:!!e.willingToTravel,nationalProjects:!!e.nationalProjects,remoteProjects:!!e.remoteProjects,minimumProjectValueForTravel:fo(e.minimumProjectValueForTravel),minProjectValue:fo(e.minProjectValue),maxProjectValue:fo(e.maxProjectValue),allowUnknownValue:!!e.allowUnknownValue,reportFrequency:e.reportFrequency||`weekly`,reportDay:e.reportDay||`monday`,deadlineReminders:!!e.deadlineReminders,includeLowConfidence:!!e.includeLowConfidence,autoAlertMode:e.autoAlertMode||`auto_safe_only`},{data:{user:n},error:r}=await u.auth.getUser();if(r)throw r;if(!n)throw Error(`You must be logged in to save a company profile.`);M.user=n;let i={company_name:t.companyName,contact_email:t.contactEmail||n.email,kennitala:t.kennitala||null,billing_email:t.billingEmail||t.contactEmail||n.email,contact_name:t.contactName||null,phone:t.phone||null,address:t.address||null,website:t.website||null,industry:t.industry,plan:t.selectedPlan,selected_plan:t.selectedPlan,billing_status:t.billingStatus,trial_started_at:t.trialStartedAt,trial_ends_at:t.trialEndsAt,base_location:t.baseLocation||null,service_areas:t.serviceAreas,willing_to_travel:t.willingToTravel,national_projects:t.nationalProjects,remote_projects:t.remoteProjects,minimum_project_value_for_travel:t.minimumProjectValueForTravel,min_project_value:t.minProjectValue,max_project_value:t.maxProjectValue,allow_unknown_value:t.allowUnknownValue,report_frequency:t.reportFrequency,report_day:t.reportDay,deadline_reminders:t.deadlineReminders,include_low_confidence:t.includeLowConfidence,auto_alert_mode:t.autoAlertMode},{data:a,error:o}=await(M.companyId?u.from(`companies`).update(i).eq(`id`,M.companyId).select().single():u.from(`companies`).upsert({...i,owner_id:n.id},{onConflict:`owner_id`}).select().single());if(o)throw console.error(`Company upsert error:`,o),o;M.companyId!==a.id&&(M.reports=[],M.reportsLoaded=!1,M.reportsLoadError=null,M.selectedReportId=null),M.companyId=a.id;let s=(await Promise.all([u.from(`company_services`).delete().eq(`company_id`,a.id),u.from(`company_locations`).delete().eq(`company_id`,a.id),u.from(`company_keywords`).delete().eq(`company_id`,a.id)])).find(e=>e.error)?.error;if(s)throw s;let c=t.services.map(e=>({company_id:a.id,service:e})),l=t.locations.map(e=>({company_id:a.id,location:e})),d=[...t.includeKeywords.map(e=>({company_id:a.id,keyword:e,type:`include`})),...t.excludeKeywords.map(e=>({company_id:a.id,keyword:e,type:`exclude`}))];if(c.length){let{error:e}=await u.from(`company_services`).insert(c);if(e)throw e}if(l.length){let{error:e}=await u.from(`company_locations`).insert(l);if(e)throw e}if(d.length){let{error:e}=await u.from(`company_keywords`).insert(d);if(e)throw e}M.profile=t,M.pendingSignupPlan=``,Or(),so(t)}function Ja(e,t,n,r){return{id:e.id||``,ownerId:e.owner_id||``,companyName:e.company_name||``,kennitala:e.kennitala||``,contactEmail:e.contact_email||``,billingEmail:e.billing_email||e.contact_email||``,contactName:e.contact_name||``,phone:e.phone||``,address:e.address||``,website:e.website||``,industry:e.industry||``,plan:e.plan||e.selected_plan||`basic`,selectedPlan:e.selected_plan||e.plan||`basic`,billingStatus:e.billing_status||`trial`,trialStartedAt:e.trial_started_at||``,trialEndsAt:e.trial_ends_at||``,services:O(t.map(e=>e.service)),includeKeywords:O(r.filter(e=>e.type===`include`).map(e=>e.keyword)),excludeKeywords:O(r.filter(e=>e.type===`exclude`).map(e=>e.keyword)),locations:O(n.map(e=>e.location)),baseLocation:e.base_location||``,serviceAreas:O(e.service_areas),willingToTravel:!!e.willing_to_travel,nationalProjects:!!e.national_projects,remoteProjects:!!e.remote_projects,minimumProjectValueForTravel:e.minimum_project_value_for_travel==null?null:Number(e.minimum_project_value_for_travel),minProjectValue:e.min_project_value==null?null:Number(e.min_project_value),maxProjectValue:e.max_project_value==null?null:Number(e.max_project_value),allowUnknownValue:!!e.allow_unknown_value,reportFrequency:e.report_frequency||`weekly`,reportDay:e.report_day||`monday`,deadlineReminders:!!e.deadline_reminders,includeLowConfidence:!!e.include_low_confidence,autoAlertMode:e.auto_alert_mode||`auto_safe_only`}}async function Ya(){if(!u||!M.companyId){M.storedMatches=[];return}try{let{data:e,error:t}=await u.from(`opportunity_matches`).select(`*, opportunities(*, sources(name, source_type))`).eq(`company_id`,M.companyId).order(`match_score`,{ascending:!1});if(t)throw t;let n=(e||[]).map(e=>e.calculated_at||e.updated_at||e.created_at).filter(Boolean).map(e=>new Date(e).getTime()).filter(e=>!Number.isNaN(e));M.lastMatchedAt=n.length?new Date(Math.max(...n)).toISOString():null;let r=(e||[]).filter(e=>e.opportunities).map(Bi).filter(vd).filter(qi),i=r.map(e=>e.id).filter(Boolean),a=[];if(i.length){let{data:e,error:t}=await u.from(`ai_match_reviews`).select(`company_id, opportunity_id, fit, confidence, send_to_client, reason, fit_reasons, risks_or_questions, suggested_client_summary, created_at, updated_at`).eq(`company_id`,M.companyId).in(`opportunity_id`,i);t&&console.warn(`Failed to load AI reviews for report ranking:`,t),a=e||[]}M.storedMatches=Gn(r,a)}catch(e){console.error(`Failed to load stored opportunity matches. Falling back to frontend matching:`,e),M.storedMatches=[],M.lastMatchedAt=null}}async function Xa(){if(M.companyId&&!M.reportArchiveLoading){M.reportArchiveLoading=!0,M.reportsLoadError=null,X();try{if(!u)throw Error(`Supabase client is not configured.`);let{data:e,error:t}=await u.from(`reports`).select(`
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
      `).eq(`company_id`,M.companyId).is(`archived_at`,null).order(`created_at`,{ascending:!1});if(t)throw t;M.reports=e||[],M.reportsLoaded=!0}catch(e){console.error(`Failed to load reports:`,e),M.reportsLoadError=W(e),M.reports=[],M.reportsLoaded=!0}finally{M.reportArchiveLoading=!1,X()}}}async function Za(){if(!M.user){M.reportMessage={type:`error`,text:`Log in to save reports.`},X();return}if(!M.companyId){M.reportMessage={type:`error`,text:`Create a company profile before saving reports.`},X();return}let e=Yu();if(!e.length){M.reportMessage={type:`error`,text:`No useful matches above the report threshold yet.`},X();return}let t=Zu(M.profile,e);M.reportSaveLoading=!0,M.reportMessage=null,X();try{let{data:n,error:r}=await u.from(`reports`).insert({company_id:M.companyId,title:t.title,period_start:t.periodStart,period_end:t.periodEnd,summary:t.summary,text_content:t.textContent,html_content:t.htmlContent,status:`draft`}).select(`id`).single();if(r)throw r;let i=e.filter(e=>tr(e.id)).map((e,t)=>({report_id:n.id,opportunity_id:e.id,match_score:e.matchScore,match_reasons:e.matchReasons||[],risks:e.risks||[],sort_order:t+1}));if(i.length){let{error:e}=await u.from(`report_items`).insert(i);if(e)throw e}M.reportMessage={type:`success`,text:`Report saved`},await Xa(),G(`Report saved`,`success`)}catch(e){console.error(`Failed to save report:`,e),M.reportMessage={type:`error`,text:`Failed to save report. ${W(e)}`}}finally{M.reportSaveLoading=!1,X()}}async function Qa(e){if(!(!e||!u||!M.user)&&window.confirm(M.language===`is`?`Ertu viss um að þú viljir fela þetta yfirlit? Þetta er ekki hægt að afturkalla í mælaborðinu.`:`Are you sure you want to hide this report? This cannot be undone from the dashboard.`)){M.reportArchiveLoading=!0,M.reportMessage=null,X();try{let{error:t}=await u.from(`reports`).update({archived_at:new Date().toISOString(),archived_by:M.user.id}).eq(`id`,e).eq(`company_id`,M.companyId);if(t)throw t;M.selectedReportId===e&&(M.selectedReportId=null),M.reports=M.reports.filter(t=>t.id!==e),M.reportMessage={type:`success`,text:M.language===`is`?`Yfirlitið var falið.`:`Report hidden.`},G(M.language===`is`?`Yfirlit falið`:`Report hidden`,`success`)}catch(e){console.error(`Failed to archive report:`,e),M.reportMessage={type:`error`,text:M.language===`is`?`Gat ekki falið yfirlitið. ${W(e)}`:`Could not hide report. ${W(e)}`}}finally{M.reportArchiveLoading=!1,X()}}}async function $a(){M.matchingLoading=!0,M.matchStatus=null,X();try{if(!u)throw Error(`Supabase client is not configured.`);let e=M.user||await Ma();if(!e)throw Error(`You must be logged in to run matching.`);M.user=e;let{company:t}=await Ga();if(!t)throw Error(`No Supabase company profile found. Save onboarding first.`);M.companyId=t.id;let[n,r,i,a]=await Promise.all([u.from(`company_services`).select(`service`).eq(`company_id`,t.id),u.from(`company_locations`).select(`location`).eq(`company_id`,t.id),u.from(`company_keywords`).select(`keyword, type`).eq(`company_id`,t.id),u.from(`opportunities`).select(`*, sources(name, source_type)`).eq(`status`,`open`)]);if(n.error)throw n.error;if(r.error)throw r.error;if(i.error)throw i.error;if(a.error)throw a.error;let o=Ja(t,n.data||[],r.data||[],i.data||[]),s=M.profileDraftDirty,c=(a.data||[]).map(zi).filter(qi).map(e=>ss(o,e)).filter(e=>e.matchScore>=50).map(e=>({company_id:t.id,opportunity_id:e.id,match_score:e.matchScore,match_label:e.matchLabel,match_reasons:e.matchReasons,risks:e.risks,next_steps:e.nextSteps,calculated_at:new Date().toISOString()})),{error:l}=await u.from(`opportunity_matches`).delete().eq(`company_id`,t.id);if(l)throw l;if(c.length){let{error:e}=await u.from(`opportunity_matches`).insert(c);if(e)throw e}M.profile=o,so(o),s||So(o);let d=c.length===1?`match`:`matches`;return M.matchStatus={type:`success`,text:`Matching complete — ${c.length} stored ${d} found.`},await ai(),await Ts(),await Ya(),c.length}catch(e){return console.error(`Failed to run matching:`,e),M.matchStatus={type:`error`,text:`Failed to run matching. ${W(e)}`},0}finally{M.matchingLoading=!1,X()}}async function eo(e,t){if(!M.isAdmin){M.adminMessage={type:`error`,text:`You do not have access to this page.`},X();return}M.adminSubmitting=!0,M.adminMessage=null,X();try{if(!u)throw Error(`Supabase client is not configured.`);let n=Object.fromEntries(e.entries()),r=String(n.sourceName||n.source||`Manual`).trim()||`Manual`,i=String(n.title||``).trim();if(!i)throw Error(`Title is required.`);let a=String(n.description||``).trim()||`Manual opportunity: ${i}`,o={source_id:await io(r),external_id:`manual-${Date.now()}`,title:i,buyer:String(n.buyer||``).trim()||null,category:String(n.category||``).trim()||null,type:String(n.type||``).trim()||`tender`,description:a,deadline:n.deadline||null,published_date:n.publishedDate||n.published_date||null,location:String(n.location||``).trim()||null,estimated_value:n.estimatedValue||n.estimated_value?Number(n.estimatedValue||n.estimated_value):null,currency:`ISK`,url:n.url||null,cpv_code:n.cpvCode||n.cpv_code||null,requirements:$n(n.requirements),keywords:$n(n.keywords),difficulty:String(n.difficulty||``).trim()||`medium`,status:String(n.status||``).trim()||`open`,raw_payload:{created_from:`admin`,source_name:r}},{error:s}=await u.from(`opportunities`).insert(o).select().single();if(s)throw console.error(`Supabase insert error:`,s),Error(`${s.message} (${s.code})`);M.adminMessage={type:`success`,text:`Opportunity saved to Supabase.`},M.adminOpportunityDraft=Br(),t?.reset(),await ai(),M.companyId&&await $a(),G(`Opportunity added`,`success`)}catch(e){let t=W(e);console.error(`Failed to add opportunity. If this is an RLS error, allow anon insert/select during development:`,e),M.adminMessage={type:`error`,text:`Failed to save opportunity. ${t}`},X()}finally{M.adminSubmitting=!1,X()}}async function to(t){if(!M.isAdmin){M.adminMessage={type:`error`,text:`You do not have access to this page.`},X();return}M.adminDeletingId=t,M.adminMessage=null,X();try{if(!u)throw Error(`Supabase client is not configured.`);let{error:n}=await u.from(`opportunities`).delete().eq(`id`,t);if(n)throw n;M.saved=M.saved.filter(e=>e!==t),M.ignored=M.ignored.filter(e=>e!==t),lo(e.saved,M.saved),lo(e.ignored,M.ignored),M.adminMessage={type:`success`,text:`Opportunity deleted from Supabase.`},await ai(),await xa(),G(`Opportunity deleted`,`success`)}catch(e){let t=W(e);console.error(`Failed to delete opportunity. If this is an RLS error, allow anon delete/select during development:`,e),M.adminMessage={type:`error`,text:`Failed to delete opportunity. ${t}`},X()}finally{M.adminDeletingId=null,X()}}async function no(e,t){if(!M.isAdmin){M.adminMessage={type:`error`,text:`You do not have access to this page.`},X();return}M.adminUpdatingId=e,M.adminMessage=null,X();try{if(!u)throw Error(`Supabase client is not configured.`);let{error:n}=await u.from(`opportunities`).update({status:t}).eq(`id`,e);if(n)throw n;M.adminMessage={type:`success`,text:t===`open`?`Opportunity marked relevant.`:`Opportunity hidden.`},await ai(),await xa(),G(t===`open`?`Marked relevant`:`Opportunity hidden`,`success`)}catch(e){let t=W(e);console.error(`Failed to update opportunity status:`,e),M.adminMessage={type:`error`,text:`Failed to update opportunity. ${t}`},X()}finally{M.adminUpdatingId=null,X()}}async function ro(e,t){if(!M.isAdmin){M.adminMessage={type:`error`,text:`You do not have access to this page.`},X();return}let n=M.opportunities.find(t=>t.id===e);if(!n)return;let r={include:{opportunity_intent:`confirmed_tender`,quality_status:`confirmed_tender`,hidden_from_reports:!1,admin_report_status:`include`},hide:{hidden_from_reports:!0,admin_report_status:`hidden`},noise:{opportunity_intent:`not_opportunity`,quality_status:`needs_review`,hidden_from_reports:!0,admin_report_status:`noise`},confirmed_tender:{opportunity_intent:`confirmed_tender`,quality_status:`confirmed_tender`,hidden_from_reports:!1,admin_report_status:`include`},early_opportunity:{opportunity_intent:`early_opportunity`,quality_status:`early_signal`,hidden_from_reports:!1,admin_report_status:`include`}}[t];if(r){M.adminUpdatingId=e,M.adminMessage=null,X();try{if(!u)throw Error(`Supabase client is not configured.`);let t={...n.rawPayload||{},...r,admin_reviewed_at:new Date().toISOString()},{error:i}=await u.from(`opportunities`).update({raw_payload:t}).eq(`id`,e);if(i)throw i;M.adminMessage={type:`success`,text:`Report visibility updated.`},await ai(),G(`Report visibility updated`,`success`)}catch(e){let t=W(e);console.error(`Failed to update report visibility:`,e),M.adminMessage={type:`error`,text:`Failed to update report visibility. ${t}`},X()}finally{M.adminUpdatingId=null,X()}}}async function io(e){if(!u)throw Error(`Supabase client is not configured`);let t=e&&e.trim()?e.trim():`Manual`,{data:n,error:r}=await u.from(`sources`).select(`id`).eq(`name`,t).maybeSingle();if(r)throw console.error(`Source select error:`,r),r;if(n&&n.id)return n.id;let{data:i,error:a}=await u.from(`sources`).insert({name:t,source_type:`manual`,is_active:!0,notes:`Created from VerkRadar admin page`}).select(`id`).single();if(a)throw console.error(`Source insert error:`,a),a;return i.id}function W(e){return e?typeof e==`string`?e:[e.message,e.details,e.hint,e.code].filter(Boolean).join(` `):`Unknown error`}function ao(e,t=`login`){let n=String(e?.message||e||``).toLowerCase(),r=String(e?.code||e?.status||``).toLowerCase();return n.includes(`invalid login credentials`)||n.includes(`invalid_credentials`)||r.includes(`invalid_credentials`)?j(`emailOrPasswordIncorrect`):n.includes(`email not confirmed`)?j(`confirmEmailBeforeLogin`):oo(e)?j(`signupExistingAccount`):n.includes(`password`)&&n.includes(`characters`)?j(`passwordTooShort`):n.includes(`rate limit`)||n.includes(`too many`)?j(`tooManyAttempts`):j(t===`signup`?`couldNotCreateAccount`:`couldNotLogin`)}function oo(e){let t=String(e?.message||e||``).toLowerCase(),n=String(e?.code||e?.status||``).toLowerCase();return t.includes(`user already registered`)||t.includes(`already registered`)||t.includes(`already exists`)||n.includes(`user_already_exists`)||n.includes(`email_exists`)}function G(e,t=`success`){M.toast={message:e,type:t},X(),clearTimeout(window.__toastTimeout),window.__toastTimeout=setTimeout(()=>{M.toast=null,X()},2500)}function so(t){localStorage.setItem(e.profile,JSON.stringify(t))}function co(e){try{let t=localStorage.getItem(e);return t?JSON.parse(t):[]}catch{return[]}}function lo(e,t){localStorage.setItem(e,JSON.stringify(t))}function uo(e){return O(e).join(`, `)}function fo(e){if(e==null||e===``)return null;let t=Number(e);return Number.isFinite(t)?t:null}function po(e){return String(e||``).trim().toLowerCase()}function mo(e,t=M.profileDraft?.industry){return i[e]?.[t]||[]}function ho(e,t){if(![`services`,`includeKeywords`,`excludeKeywords`].includes(e)||!t)return;K();let n=Array.isArray(M.profileDraft[e])?M.profileDraft[e]:[],r=po(t),i=n.some(e=>po(e)===r);M.profileDraft[e]=i?n.filter(e=>po(e)!==r):[...n,t],xo(),X()}function go(){M.adminTrialCompanyDraft||=_n(au(),()=>o(``))}function _o(e){let t=iu(e);!t||t.converted_company_id||t.status===`converted`||(M.selectedAdminTrialRequestId=t.id,M.adminTrialCompanyDraft=_n(t,()=>o(``)),M.adminTrialCompanyMessage=``,M.adminTrialCompanyError=``,X())}function vo(e,t){if(![`services`,`includeKeywords`,`excludeKeywords`].includes(e)||!t)return;go();let n=Array.isArray(M.adminTrialCompanyDraft[e])?M.adminTrialCompanyDraft[e]:[],r=po(t),i=n.some(e=>po(e)===r);M.adminTrialCompanyDraft[e]=i?n.filter(e=>po(e)!==r):[...n,t],X()}function yo({field:e,title:t,values:n,selectedValues:r}){if(!n.length)return``;let i=Array.isArray(r)?r:[];return`
    <div class="suggestion-group">
      <div class="suggestion-group-head">
        <span>${A(t)}</span>
      </div>
      <div class="suggestion-chips">
        ${n.map(t=>{let n=i.some(e=>po(e)===po(t));return`
            <button
              type="button"
              class="suggestion-chip ${n?`is-selected`:``}"
              data-action="toggle-profile-suggestion"
              data-field="${A(e)}"
              data-value="${A(t)}"
              aria-pressed="${n?`true`:`false`}"
            >${A(t)}</button>
          `}).join(``)}
      </div>
    </div>
  `}function K(){if(!M.profileDraft){if(M.profile){M.profileDraft=bo(M.profile);return}M.profileDraft=Sr(),M.pendingSignupPlan&&(M.profileDraft.selectedPlan=M.pendingSignupPlan)}}function bo(e){return{...e,services:O(e.services),includeKeywords:O(e.includeKeywords),excludeKeywords:O(e.excludeKeywords),locations:O(e.locations),serviceAreas:O(e.serviceAreas)}}function xo(){M.profileDraftDirty=!0,M.profileSaved=!1,M.profileSaveMessage=null,M.profileSaveError=null}function So(e){M.profileDraft=bo(e||Sr()),M.profileDraftDirty=!1}function Co(e){K();let t=new FormData(e),n={...M.profileDraft};q(e,`companyName`)&&(n.companyName=String(t.get(`companyName`)||``).trim()),q(e,`kennitala`)&&(n.kennitala=String(t.get(`kennitala`)||``).trim()),q(e,`contactEmail`)&&(n.contactEmail=String(t.get(`contactEmail`)||``).trim()),q(e,`billingEmail`)&&(n.billingEmail=String(t.get(`billingEmail`)||``).trim()),q(e,`contactName`)&&(n.contactName=String(t.get(`contactName`)||``).trim()),q(e,`phone`)&&(n.phone=String(t.get(`phone`)||``).trim()),q(e,`address`)&&(n.address=String(t.get(`address`)||``).trim()),q(e,`website`)&&(n.website=String(t.get(`website`)||``).trim()),q(e,`selectedPlan`)&&(n.selectedPlan=Tr(t.get(`selectedPlan`))||`basic`),q(e,`industry`)&&(n.industry=String(t.get(`industry`)||``)),q(e,`services`)&&(n.services=D(t.get(`services`))),q(e,`includeKeywords`)&&(n.includeKeywords=D(t.get(`includeKeywords`))),q(e,`excludeKeywords`)&&(n.excludeKeywords=D(t.get(`excludeKeywords`))),q(e,`locations`)&&(n.locations=t.getAll(`locations`)),q(e,`baseLocation`)&&(n.baseLocation=String(t.get(`baseLocation`)||``)),q(e,`serviceAreas`)&&(n.serviceAreas=D(t.get(`serviceAreas`))),q(e,`willingToTravel`)&&(n.willingToTravel=t.get(`willingToTravel`)===`on`),q(e,`nationalProjects`)&&(n.nationalProjects=t.get(`nationalProjects`)===`on`),q(e,`remoteProjects`)&&(n.remoteProjects=t.get(`remoteProjects`)===`on`),q(e,`minimumProjectValueForTravel`)&&(n.minimumProjectValueForTravel=String(t.get(`minimumProjectValueForTravel`)||``)),q(e,`minProjectValue`)&&(n.minProjectValue=String(t.get(`minProjectValue`)||``)),q(e,`maxProjectValue`)&&(n.maxProjectValue=String(t.get(`maxProjectValue`)||``)),q(e,`allowUnknownValue`)&&(n.allowUnknownValue=t.get(`allowUnknownValue`)===`on`),q(e,`reportFrequency`)&&(n.reportFrequency=String(t.get(`reportFrequency`)||`weekly`)),q(e,`reportDay`)&&(n.reportDay=String(t.get(`reportDay`)||`monday`)),q(e,`deadlineReminders`)&&(n.deadlineReminders=t.get(`deadlineReminders`)===`on`),q(e,`includeLowConfidence`)&&(n.includeLowConfidence=t.get(`includeLowConfidence`)===`on`),M.profileDraft=n,xo()}function wo(e){go(),M.adminTrialCompanyDraft=To(e,M.adminTrialCompanyDraft)}function To(e,t={}){let n=new FormData(e),r={...t};return q(e,`companyName`)&&(r.companyName=String(n.get(`companyName`)||``).trim()),q(e,`kennitala`)&&(r.kennitala=String(n.get(`kennitala`)||``).trim()),q(e,`contactEmail`)&&(r.contactEmail=String(n.get(`contactEmail`)||``).trim()),q(e,`billingEmail`)&&(r.billingEmail=String(n.get(`billingEmail`)||``).trim()),q(e,`contactName`)&&(r.contactName=String(n.get(`contactName`)||``).trim()),q(e,`phone`)&&(r.phone=String(n.get(`phone`)||``).trim()),q(e,`address`)&&(r.address=String(n.get(`address`)||``).trim()),q(e,`website`)&&(r.website=String(n.get(`website`)||``).trim()),q(e,`selectedPlan`)&&(r.selectedPlan=Tr(n.get(`selectedPlan`))||`basic`),q(e,`industry`)&&(r.industry=String(n.get(`industry`)||``)),q(e,`services`)&&(r.services=D(n.get(`services`))),q(e,`includeKeywords`)&&(r.includeKeywords=D(n.get(`includeKeywords`))),q(e,`excludeKeywords`)&&(r.excludeKeywords=D(n.get(`excludeKeywords`))),q(e,`locations`)&&(r.locations=n.getAll(`locations`)),q(e,`baseLocation`)&&(r.baseLocation=String(n.get(`baseLocation`)||``)),q(e,`serviceAreas`)&&(r.serviceAreas=D(n.get(`serviceAreas`))),q(e,`willingToTravel`)&&(r.willingToTravel=n.get(`willingToTravel`)===`on`),q(e,`nationalProjects`)&&(r.nationalProjects=n.get(`nationalProjects`)===`on`),q(e,`remoteProjects`)&&(r.remoteProjects=n.get(`remoteProjects`)===`on`),q(e,`minimumProjectValueForTravel`)&&(r.minimumProjectValueForTravel=String(n.get(`minimumProjectValueForTravel`)||``)),q(e,`minProjectValue`)&&(r.minProjectValue=String(n.get(`minProjectValue`)||``)),q(e,`maxProjectValue`)&&(r.maxProjectValue=String(n.get(`maxProjectValue`)||``)),q(e,`allowUnknownValue`)&&(r.allowUnknownValue=n.get(`allowUnknownValue`)===`on`),q(e,`reportFrequency`)&&(r.reportFrequency=String(n.get(`reportFrequency`)||`weekly`)),q(e,`reportDay`)&&(r.reportDay=String(n.get(`reportDay`)||`monday`)),q(e,`deadlineReminders`)&&(r.deadlineReminders=n.get(`deadlineReminders`)===`on`),q(e,`includeLowConfidence`)&&(r.includeLowConfidence=n.get(`includeLowConfidence`)===`on`),r}function q(e,t){return!!e.querySelector(`[name="${CSS.escape(t)}"]`)}function Eo(){return K(),{...M.profileDraft,companyName:String(M.profileDraft.companyName||``).trim(),kennitala:String(M.profileDraft.kennitala||``).trim(),contactEmail:String(M.profileDraft.contactEmail||``).trim(),billingEmail:String(M.profileDraft.billingEmail||``).trim(),contactName:String(M.profileDraft.contactName||``).trim(),phone:String(M.profileDraft.phone||``).trim(),address:String(M.profileDraft.address||``).trim(),website:String(M.profileDraft.website||``).trim(),selectedPlan:Tr(M.profileDraft.selectedPlan||M.pendingSignupPlan)||`basic`,industry:String(M.profileDraft.industry||``),services:O(M.profileDraft.services),includeKeywords:O(M.profileDraft.includeKeywords),excludeKeywords:O(M.profileDraft.excludeKeywords),locations:O(M.profileDraft.locations),baseLocation:String(M.profileDraft.baseLocation||``),serviceAreas:O(M.profileDraft.serviceAreas),willingToTravel:!!M.profileDraft.willingToTravel,nationalProjects:!!M.profileDraft.nationalProjects,remoteProjects:!!M.profileDraft.remoteProjects,minimumProjectValueForTravel:fo(M.profileDraft.minimumProjectValueForTravel),minProjectValue:fo(M.profileDraft.minProjectValue),maxProjectValue:fo(M.profileDraft.maxProjectValue)}}function Do(){go();let e=M.adminTrialCompanyDraft||{};return{...e,companyName:String(e.companyName||``).trim(),kennitala:String(e.kennitala||``).trim(),contactEmail:String(e.contactEmail||``).trim(),billingEmail:String(e.billingEmail||``).trim(),contactName:String(e.contactName||``).trim(),phone:String(e.phone||``).trim(),address:String(e.address||``).trim(),website:String(e.website||``).trim(),selectedPlan:Tr(e.selectedPlan)||`basic`,billingStatus:e.billingStatus||`trial`,trialStartedAt:e.trialStartedAt||new Date().toISOString(),trialEndsAt:e.trialEndsAt||new Date(Date.now()+336*60*60*1e3).toISOString(),industry:String(e.industry||``),services:O(e.services),includeKeywords:O(e.includeKeywords),excludeKeywords:O(e.excludeKeywords),locations:O(e.locations),baseLocation:String(e.baseLocation||``),serviceAreas:O(e.serviceAreas),willingToTravel:!!e.willingToTravel,nationalProjects:!!e.nationalProjects,remoteProjects:!!e.remoteProjects,minimumProjectValueForTravel:fo(e.minimumProjectValueForTravel),minProjectValue:fo(e.minProjectValue),maxProjectValue:fo(e.maxProjectValue),allowUnknownValue:!!e.allowUnknownValue,reportFrequency:e.reportFrequency||`weekly`,reportDay:e.reportDay||`monday`,deadlineReminders:!!e.deadlineReminders,includeLowConfidence:!!e.includeLowConfidence,autoAlertMode:e.autoAlertMode||`auto_safe_only`}}function Oo(e,t){return String(e||``).toLowerCase().includes(String(t||``).toLowerCase())}function ko(e){return[e.title,e.description,e.category,e.location,...e.keywords||[]].join(` `).toLowerCase()}var Ao=`jarðvinna.gatnagerð.gatna- og stígagerð.gatna og stígagerð.stígagerð.lóðarframkvæmdir.lagnavinna.lagnir.fráveita.fráveitulagnir.vatnsveita.hitaveita.vatnslagnir.regnvatnslagnir.drenlagnir.endurnýjun lagna.brunnar.dælubrunnar.malbikun.gangstétt.gangstéttir.stígar.bílastæði.vegagerð.gröftur.fyllingar.grjóthleðsla.jarðvegsskipti.undirbygging.yfirborðsfrágangur.hellulögn.hellulagnir.kantsteinn.kantsteinar.landmótun.afvötnun.jarðvegsvinna.útiframkvæmdir.gatnaframkvæmdir`.split(`.`),jo=[`snjómokstur`,`snjóruðningur`,`hálkuvarnir`,`vetrarþjónusta`,`gangstéttir`,`stofnanalóðir`],Mo=[`framkvæmdir`,`framkvæmd`,`útboð`,`verðfyrirspurn`,`tilboð`,`viðhald`,`verktaki`,`verk`],No=[`innanhússfrágangur`,`innanhúss`,`smíði`,`smíðavinna`,`málun`,`gólfefni`,`innréttingar`,`raflagnir`,`pípulagnir`,`leikskóli`,`skóli`,`húsnæði`,`byggingarvinna`],Po=[`innanhússfrágangur`,`innanhúss`,`smíði`,`smíðavinna`,`málun`,`gólfefni`,`innréttingar`,`raflagnir`,`pípulagnir`,`byggingarvinna`],Fo=[`for- og verkhönnun`,`verkhönnun`,`forhönnun`,`hönnun`,`ráðgjöf`,`verkfræðiráðgjöf`,`eftirlit`,`umsjón`,`verkefnastjórn`,`verkefnastjórnun`],Io=[`hönnun`,`for- og verkhönnun`,`verkhönnun`,`forhönnun`,`ráðgjöf`,`verkfræðiráðgjöf`,`eftirlit`,`umsjón`,`verkefnastjórn`,`verkefnastjórnun`],Lo=[`jarðvinna`,`jarðvegsvinna`,`gatnagerð`,`gatna- og stígagerð`,`stígagerð`,`vegagerð`,`lóðarframkvæmdir`,`gröftur`,`jarðvegsskipti`,`fyllingar`,`afvötnun`,`landmótun`,`yfirborðsfrágangur`,`malbikun`,`útiframkvæmdir`];function J(e){return k(e)}function Ro(e,t){let n=J(e);return t.some(e=>n.includes(J(e)))}function Y(e){let t=J(e);return Mo.some(e=>t===J(e))}function zo(e){let t=J(e);return Ao.some(e=>t===J(e))?0:Ao.some(e=>t.includes(J(e))||J(e).includes(t))?1:jo.some(e=>t===J(e))?2:Y(e)?10:3}function Bo(e){return[...e].sort((e,t)=>zo(e)-zo(t)||String(t).length-String(e).length||String(e).localeCompare(String(t)))}function Vo(e){let t=J(e);return Ao.filter(e=>t.includes(J(e)))}function Ho(e){let t=J(e);return jo.filter(e=>t.includes(J(e)))}function Uo(e,t){let n=Vo(t);if(!n.length||!e.some(Y))return e;let r=e.filter(e=>!Y(e));return[...new Set([...n,...r])]}function Wo(e={}){return Ro([e.industry,...Array.isArray(e.services)?e.services:[],...Array.isArray(e.includeKeywords)?e.includeKeywords:[]].filter(Boolean).join(` `),[...Ao,...jo,`construction`,`contractor`,`verktaki`,`mannvirki`,`jarðtækni`])}function Go(e={}){return Ro([...Array.isArray(e.services)?e.services:[],...Array.isArray(e.includeKeywords)?e.includeKeywords:[]].filter(Boolean).join(` `),jo)}function Ko(e={}){return Ro([...Array.isArray(e.services)?e.services:[],...Array.isArray(e.includeKeywords)?e.includeKeywords:[]].filter(Boolean).join(` `),Po)}function qo(e={}){return Ro([...Array.isArray(e.services)?e.services:[],...Array.isArray(e.includeKeywords)?e.includeKeywords:[]].filter(Boolean).join(` `),Io)}function Jo(e={}){return Ro([e.industry,...Array.isArray(e.services)?e.services:[],...Array.isArray(e.includeKeywords)?e.includeKeywords:[]].filter(Boolean).join(` `),Lo)}function Yo(e,t,n,r){if(!Wo(e))return{isCivilProfile:!1,serviceHits:n,keywordHits:r,hasWeakOnlyFit:!1,hasIndoorMismatch:!1,hasConsultingMismatch:!1,hasSecondaryOnlyFit:!1,hasPromotedBroadFit:!1,hasWinterOnlyFit:!1};let i=ko(t),a=Ro(i,Ao),o=Ro(i,jo),s=Go(e),c=o&&s,l=Ro(i,No),u=Ko(e),d=Ro(i,Fo),f=qo(e),p=Vo(i),m=c?Ho(i):[],h=n.length>0&&n.every(Y),g=r.length>0&&r.every(Y),_=[...n,...r].some(e=>!Y(e)),v=[...n,...r].some(Y),y=!_&&v&&a,ee=y||c?[...new Set([...n,...y?p:[],...m])]:n,te=a||c||_,ne=te&&y?Uo(ee,i):ee.filter(e=>!Y(e)),re=te&&y?Uo(r,i):r.filter(e=>!Y(e)),b=[...new Set([...ne,...re].filter(e=>!Y(e)))],x=!Jo(e);return{isCivilProfile:!0,serviceHits:Bo(ne),keywordHits:Bo(re),hasWeakOnlyFit:!a&&!c&&!_&&(h||g),hasIndoorMismatch:l&&!a&&!u,hasConsultingMismatch:d&&!f,hasWinterOnlyFit:c&&!a,hasSecondaryOnlyFit:_&&x&&b.length<=2&&p.length>=3,hasPromotedBroadFit:y}}function Xo(e){let t=k(e.location);if(rs(t)&&is(e))return!1;let n=k(`${e.title} ${e.description} ${e.location}`);return[`all iceland`,`iceland`,`island`].some(e=>t.includes(e))?!0:[`national`,`landsvist`,`nationwide`].some(e=>n.includes(e))}function Zo(e){return[...e.locations||[],...e.serviceAreas||[],e.baseLocation].filter(Boolean)}function Qo(e,t){let n=Zo(e);if(!n.length)return!1;let r=ua(t);if(n.includes(`All Iceland`)){let e=k(ns(t));return r===`IS`||e.includes(`iceland`)||e.includes(`island`)}if(n.includes(`Remote / Online`)&&ns(t)===`Remote / Online`)return!0;if(!r||r!==`IS`&&n.some(e=>k(e).includes(`iceland`)))return!1;let i=k(ns(t));return n.some(e=>{let t=k(e);return t?t===i||t===`reykjavik`&&[`reykjavik`,`capital area`,`hofudborgarsvaedid`].includes(i)||t===`capital area`&&[`reykjavik`,`capital area`,`hofudborgarsvaedid`].includes(i)?!0:i.includes(t)||t.includes(i):!1})}function $o(e,t){return e?Qo(e,t)?`local_match`:e.locations?.includes(`Remote / Online`)&&ns(t)===`Remote / Online`?`remote_match`:Xo(t)&&(ts(t)||ua(t)===`IS`)?`national_match`:ns(t)===`Remote / Online`&&e.remoteProjects?`remote_match`:ts(t)&&(e.nationalProjects||e.willingToTravel)?`outside_area_possible`:`outside_area_low_confidence`:`outside_area_low_confidence`}function es(e,t){let n=$o(e,t);return n===`local_match`?`Local match`:n===`national_match`?`National opportunity`:n===`remote_match`?`Remote opportunity`:n===`outside_area_possible`?`Outside base area but travel allowed`:n===`outside_area_low_confidence`?`Outside selected area; low-confidence location match`:null}function ts(e){if(ua(e)===`IS`)return!0;let t=k(ns(e));return[`iceland`,`island`,`all iceland`,`reykjavik`,`capital area`,`hofudborgarsvaedid`,`east iceland`,`west iceland`,`north iceland`,`south iceland`,`sudurnes`].some(e=>t.includes(e))}function ns(e={}){let t=String(e.location||``).trim(),n=k(t);return t&&!rs(n)?t:is(e)||t}function rs(e){return!e||e===`unknown`||e===`all iceland`||e===`iceland`||e===`island`}function is(e={}){let t=e.rawPayload&&typeof e.rawPayload==`object`?e.rawPayload:{},n=k([e.title,e.description,e.buyer,t.buyer,t.extracted_buyer,t.source_name,t.extracted_location,t.location].filter(Boolean).join(` `));return n.includes(`reykjavik`)||n.includes(`reykjavikurborg`)||n.includes(`hofudborgarsvaedid`)?`Reykjavík / Höfuðborgarsvæðið`:``}function as(e,t){return t.estimatedValue?!(e.minProjectValue&&t.estimatedValue<e.minProjectValue||e.maxProjectValue&&t.estimatedValue>e.maxProjectValue):!!e.allowUnknownValue}function os(e,t){let n=String(e.industry||``).toLowerCase(),r=String(t.category||``).toLowerCase();return r.includes(n)||n.includes(r)}function ss(e,t){if(!e)return{...t,matchScore:0,matchLabel:`Weak match`,matchReasons:[],risks:[],nextSteps:[]};let n=ko(t),r=0,i=[],a=[];os(e,t)&&(r+=35,i.push(`Matches your ${e.industry} industry`));let o=Yo(e,t,(e.services||[]).filter(e=>Oo(n,e)),(e.includeKeywords||[]).filter(e=>Oo(n,e)));for(let e of o.serviceHits)r+=10,i.push(`Mentions your service: ${e}`);for(let e of o.keywordHits)r+=8,i.push(`Contains your keyword: ${e}`);let s=$o(e,t),c=es(e,t);if(s===`local_match`)r+=22,i.push(c);else if(s===`national_match`)r+=16,i.push(c);else if(s===`remote_match`)r+=14,i.push(c);else if(s===`outside_area_possible`){let n=Number(e.minimumProjectValueForTravel||0),o=n&&t.estimatedValue&&Number(t.estimatedValue)<n;r+=o?-4:4,i.push(c),a.push(o?`Outside base area and below your preferred travel project value`:`Check travel cost, project size and delivery capacity`)}else r-=8,a.push(`Outside selected area; location match is low confidence`);o.hasWinterOnlyFit&&s===`local_match`&&(r+=12,i.push(`Local winter service fit`)),as(e,t)?(r+=10,t.estimatedValue&&i.push(`Project value is inside your preferred range`)):(r-=25,a.push(`Estimated project value is outside your preferred range`));let l=T(t.deadline);t.deadline?l>=0&&l<=30?(r+=8,i.push(`Deadline is coming up soon`)):l<0&&(r-=50,a.push(`Deadline has passed`)):a.push(zs(t));for(let t of e.excludeKeywords||[])Oo(n,t)&&(r-=18,a.push(`Contains exclude keyword: ${t}`));return(t.requirements||[]).some(e=>Oo(e,`certification`)||Oo(e,`license`))&&a.push(`May require certification or license documentation`),t.difficulty===`high`&&a.push(`This appears to be a higher-complexity opportunity`),o.hasWeakOnlyFit&&(r=Math.min(r,40),a.push(`Only broad construction/procurement terms matched; verify fit`)),o.hasIndoorMismatch&&(r=Math.min(r-20,40),a.push(`Appears to be indoor/building finishing work outside your core civil services`)),o.hasConsultingMismatch&&(r=Math.min(r-30,35),a.push(`Appears to be design, consulting, supervision, or project management work outside your execution services`)),o.hasSecondaryOnlyFit&&(r=Math.min(r,84),a.push(`Secondary service match in a broader infrastructure tender; verify scope`)),o.hasPromotedBroadFit&&(r=Math.min(r,72),a.push(`Broad construction terms matched; verify the specific work type`)),o.hasWinterOnlyFit&&(r=Math.min(r,68),a.push(`Winter/snow service fit; verify capacity and scope`)),r=Math.max(0,Math.min(100,Math.round(r))),{...t,matchScore:r,matchLabel:ls(r),matchReasons:i.slice(0,5),risks:[...new Set(a)].slice(0,4),nextSteps:[`Open the source documents`,`Confirm mandatory requirements`,`Check capacity and profitability`,`Prepare questions before the deadline`]}}function cs(e){if(!M.profile||!Wo(M.profile))return e;let t=ss(M.profile,e);return Number(t.matchScore||0)>=Number(e.matchScore||0)?e:{...e,matchScore:t.matchScore,matchLabel:t.matchLabel,matchReasons:t.matchReasons,risks:t.risks,nextSteps:t.nextSteps}}function ls(e){return e>=85?`Strong match`:e>=65?`Good match`:e>=45?`Possible match`:`Weak match`}function us(){if(M.storedMatches.length)return M.storedMatches.filter(vd).filter(ps).filter(qi).filter(e=>!M.ignored.includes(e.id)).map(cs).sort((e,t)=>t.matchScore-e.matchScore||T(e.deadline)-T(t.deadline));let e=M.profile||(M.user?null:br);return e?M.opportunities.filter(vd).map(t=>ss(e,t)).filter(ps).filter(qi).filter(e=>!M.ignored.includes(e.id)).sort((e,t)=>t.matchScore-e.matchScore||T(e.deadline)-T(t.deadline)):[]}function ds(){return M.storedMatches.filter(vd).filter(ps).filter(qi).filter(e=>!M.ignored.includes(e.id)).sort((e,t)=>t.matchScore-e.matchScore||T(e.deadline)-T(t.deadline))}function fs(){let e=M.profile||(M.user?null:br);return e?M.opportunities.filter(vd).map(t=>ss(e,t)).filter(ps).filter(qi).filter(e=>!M.ignored.includes(e.id)).sort((e,t)=>Cs(e)-Cs(t)||t.matchScore-e.matchScore||T(e.deadline)-T(t.deadline)):[]}function ps(e){return M.isAdmin&&M.filters.label===`all_opportunities`?!0:rd(e)}function ms(e={}){return String(e.safetyStatus||e.safety_status||`auto_approved`)}function hs(e){return[...ds(),...fs()].find(t=>t.id===e)}function gs(){let e=_s([`all_opportunities`,`needs_review`].includes(M.filters.label)?fs():ds());if(M.filters.label===`recommended`){let t=e.filter(ys),n=e.filter(bs);return Ss(t.length?t:n)}return Ss(e.filter(vs))}function _s(e){return e.filter(e=>{let t=M.filters.search.toLowerCase();return!(t&&!ko(e).includes(t)||M.filters.category!==`all`&&e.category!==M.filters.category||M.filters.location!==`all`&&e.location!==M.filters.location||M.filters.type!==`all`&&e.type!==M.filters.type||M.filters.savedOnly&&!M.saved.includes(e.id))})}function vs(e){let t=M.filters.label;return t===`all`||t===`all_opportunities`?!0:t===`needs_review`?z(e.qualityStatus,e)===`needs_review`:t===`recommended`?ys(e):t===`strong`?e.matchLabel===`Strong match`||e.matchScore>=85:t===`possible`?[`Possible match`,`Weak match`].includes(e.matchLabel)||e.matchScore<65:e.matchLabel===t}function ys(e){return!xs(e)||id(e)?!1:e.matchScore>=85||e.matchLabel===`Strong match`?!0:!(z(e.qualityStatus,e)===`needs_review`||la(H(e)))}function bs(e){return!xs(e)||id(e)?!1:e.matchScore>=85||e.matchLabel===`Strong match`?!0:!(z(e.qualityStatus,e)===`needs_review`||la(H(e)))}function xs(e){return[`Strong match`,`Good match`,`Possible match`].includes(e.matchLabel)||e.matchScore>=45}function Ss(e){return[...e].sort((e,t)=>Cs(e)-Cs(t)||t.matchScore-e.matchScore||T(e.deadline)-T(t.deadline))}function Cs(e){let t=B(e);if(t===`confirmed_tender`)return 0;if(t===`early_opportunity`)return 1;if(t===`market_signal`)return 2;if(t===`news_context`)return 8;if(t===`not_opportunity`)return 9;let n=z(e.qualityStatus,e);return n===`confirmed_tender`?0:n===`early_signal`?1:2}function ws({visibleCount:e,storedMatchCount:t,filteredStoredCount:n,availableCount:r,recommendedCount:i,strongCount:a,companyName:o}){let s=M.filters.label;return M.language===`is`?s===`all_opportunities`?`${r} tækifæri eru til í kerfinu. Sýni ${e} sýnileg tækifæri til yfirferðar.`:s===`needs_review`?`${r} tækifæri eru til í kerfinu. Sýni ${e} atriði sem þarf að staðfesta.`:s===`all`?`${t} tækifæri fundust sem gætu passað við ${o}. Sýni ${e}.`:s===`strong`?`${t} tækifæri fundust sem gætu passað við ${o}. Sýni ${e} sterkar samsvaranir.`:s===`recommended`?e?`${t} tækifæri fundust sem gætu passað við ${o}. Sýni ${e} ráðlögð eða möguleg tækifæri.`:a>0?`${a} sterkar samsvaranir eru til fyrir ${o}, en þær eru faldar af núverandi síum.`:n>0?`${n} tækifæri eru falin af gæðasíum. Notið Allar samsvaranir eða Þarfnast staðfestingar til að skoða þau.`:`Engar ráðlagðar samsvaranir fyrir ${o} enn. ${r} tækifæri eru til í kerfinu, en ekkert passar nógu sterkt við þennan prófíl.`:s===`possible`?`${t} tækifæri fundust sem gætu passað við ${o}. Sýni ${e} mögulegar eða veikar samsvaranir.`:`${t} tækifæri fundust sem gætu passað við ${o}. Sýni ${e} tækifæri.`:s===`all_opportunities`?`${r} opportunities are available in the system. Showing ${e} visible opportunities for inspection.`:s===`needs_review`?`${r} opportunities are available in the system. Showing ${e} needs-review opportunities.`:s===`all`?`${t} opportunities may fit ${o}. Showing all ${e}.`:s===`strong`?`${t} opportunities may fit ${o}. Showing ${e} strong matches.`:s===`recommended`?e?`${t} opportunities may fit ${o}. Showing ${e} recommended or possible matches.`:a>0?`${a} strong ${a===1?`match exists`:`matches exist`} for ${o}, but ${a===1?`it is`:`they are`} hidden by your current filters.`:n>0?`${n} ${n===1?`opportunity is`:`opportunities are`} hidden from Recommended by quality checks. Use All matches or Needs review to inspect them.`:`No recommended matches for ${o} yet. ${r} opportunities are available in the system, but none match this profile strongly enough.`:s===`possible`?`${t} opportunities may fit ${o}. Showing ${e} possible or weak matches.`:`${t} opportunities may fit ${o}. Showing ${e} ${s.toLowerCase()} opportunities.`}async function Ts(){if(!u||!M.companyId){M.opportunityActions=[];return}try{let{data:e,error:t}=await u.from(`company_opportunity_actions`).select(`id, company_id, opportunity_id, action_type, note, created_at, updated_at`).eq(`company_id`,M.companyId);if(t)throw t;M.opportunityActions=e||[],M.saved=M.opportunityActions.filter(e=>[`saved`,`watched`].includes(e.action_type)).map(e=>e.opportunity_id),M.ignored=M.opportunityActions.filter(e=>e.action_type===`ignored`).map(e=>e.opportunity_id)}catch(e){console.error(`Failed to load company opportunity actions:`,e),M.opportunityActions=[],M.saved=[],M.ignored=[]}}async function Es(t,n){if(!u||!M.companyId){(n===`saved`||n===`watched`)&&(M.saved=Array.from(new Set([...M.saved,t])),M.ignored=M.ignored.filter(e=>e!==t)),n===`ignored`&&(M.ignored=Array.from(new Set([...M.ignored,t])),M.saved=M.saved.filter(e=>e!==t)),lo(e.saved,M.saved),lo(e.ignored,M.ignored);return}let{error:r}=await u.from(`company_opportunity_actions`).upsert({company_id:M.companyId,opportunity_id:t,action_type:n,updated_at:new Date().toISOString()},{onConflict:`company_id,opportunity_id`});if(r)throw r;await Ts()}async function Ds(t){if(!u||!M.companyId){M.saved=M.saved.filter(e=>e!==t),M.ignored=M.ignored.filter(e=>e!==t),lo(e.saved,M.saved),lo(e.ignored,M.ignored);return}let{error:n}=await u.from(`company_opportunity_actions`).delete().eq(`company_id`,M.companyId).eq(`opportunity_id`,t);if(n)throw n;await Ts()}async function Os(e){let t=`Opportunity saved`;try{M.saved.includes(e)?(await Ds(e),t=`Removed from saved`):await Es(e,`saved`),G(t,`success`),X()}catch(e){console.error(`Failed to update saved opportunity:`,e),G(`Could not update saved opportunity`,`error`)}}async function ks(e){try{await Es(e,`ignored`),M.selectedOpportunityId===e&&(M.selectedOpportunityId=null),G(`Opportunity hidden`,`success`),X()}catch(e){console.error(`Failed to ignore opportunity:`,e),G(`Could not hide opportunity`,`error`)}}async function As(e){try{await Ds(e),X()}catch(e){console.error(`Failed to unignore opportunity:`,e),G(`Could not restore opportunity`,`error`)}}function js(e){M.selectedOpportunityId=e,document.body.classList.add(`modal-open`),X()}function Ms(){Ns(),X()}function Ns(){M.selectedOpportunityId=null,document.body.classList.remove(`modal-open`)}function Ps(){if(!M.selectedOpportunityId){document.body.classList.remove(`modal-open`);return}if(!hs(M.selectedOpportunityId)){M.selectedOpportunityId=null,document.body.classList.remove(`modal-open`);return}document.body.classList.add(`modal-open`)}function Fs(e){if(!e)return{label:$(gr),className:`deadline danger`};let t=T(e);return t===999?{label:$(gr),className:`deadline danger`}:{label:j(`daysLeft`,{count:t}),className:t<=14?`deadline danger`:`deadline`}}function Is(e){let t=String(e||``).trim().match(/^(\d{4}-\d{2}-\d{2})T(\d{2}):(\d{2})/);return t?`${$u(t[1])} kl. ${t[2]}:${t[3]}`:``}function Ls(e){return e?Zn(e):$(gr)}function Rs(e){return e?.deadlineAt?Is(e.deadlineAt):e?.deadline?$u(e.deadline):$(zs(e))}function zs(e){if(V(e)){let t=Xi(e);return[`tender_awarded`,`awarded`,`already_tendered`,`announced`].includes(t)?`Tender appears already announced/awarded — verify source article.`:t===`upcoming_tender`?`Formal tender deadline not found yet — monitor source article.`:_r}return String(e?.rawPayload?.deadline_warning||``).trim()||gr}function Bs(e){if(!e?.deadline)return{label:$(zs(e)),className:`deadline danger`};let t=Is(e.deadlineAt);return t?{label:t,className:T(e.deadline)<=14?`deadline danger`:`deadline`}:Fs(e.deadline)}function Vs(e){return e?rr(e,`ISK`):M.language===`is`?`Ekki gefið upp`:`Value unknown`}function Hs(){return[...new Set(M.opportunities.map(e=>e.category))].sort()}function Us(){return[...new Set(M.opportunities.map(e=>e.location))].sort()}function Ws(){return[...new Set(M.opportunities.map(e=>e.type))].sort()}function Gs(e){return e===`Strong match`?`badge strong`:e===`Good match`?`badge good`:e===`Possible match`?`badge possible`:`badge weak`}function X(){let e=document.getElementById(`app`),t=Cr(M.route),n=``;if(n=M.isBooting||!M.authLoaded||!M.profileLoaded||!M.adminLoaded?Ys():t===`/`?_l():t===`/login`?fc():t===`/signup`?bc():t===`/forgot-password`?pc():t===`/reset-password`?mc():t===`/accept-invite`?hc():t===`/onboarding`?vl():t===`/dashboard`?M.user?Dl():Pa():t===`/report`?M.user?Iu():Pa():t===`/pricing`?Bd():t===`/trial`?Vd():t===`/privacy`?ec():t===`/terms`?tc():t===`/data-sources`?nc():t===`/cookies`?rc():t===`/security`?ic():t===`/contact`?ac():t===`/settings`?M.user?Hd():Pa():t===`/admin`?M.user?M.isAdmin?ql():Fa():Pa():_l(),e.innerHTML=n,M.selectedOpportunityId){let t=hs(M.selectedOpportunityId);t?(document.body.classList.add(`modal-open`),e.insertAdjacentHTML(`beforeend`,Kl(t))):Ps()}else Ps()}function Ks(e){let t=window.scrollX,n=window.scrollY,r=qs(e),i=typeof e.selectionStart==`number`?e.selectionStart:null,a=typeof e.selectionEnd==`number`?e.selectionEnd:null;X(),requestAnimationFrame(()=>{if(window.scrollTo(t,n),!r)return;let e=document.querySelector(r);e&&(e.focus({preventScroll:!0}),i!==null&&a!==null&&typeof e.setSelectionRange==`function`&&[`text`,`search`,`email`,`url`,`tel`,`password`,``].includes(e.type||``)&&e.setSelectionRange(i,a))})}function qs(e){return e?.dataset?e.dataset.adminFilter?`[data-admin-filter="${Js(e.dataset.adminFilter)}"]`:e.dataset.adminCompanyFilter?`[data-admin-company-filter="${Js(e.dataset.adminCompanyFilter)}"]`:``:``}function Js(e){return window.CSS?.escape?window.CSS.escape(String(e)):String(e).replace(/["\\]/g,`\\$&`)}function Ys(){return Z(`
    <div class="app-loader">
      <div class="loader-mark" aria-label="${A(j(`loadingLabel`))}">
        <span></span>
      </div>
    </div>
  `)}function Z(e){let t=!!M.user,n=!!M.profile,r=Xs(t,n),i=cc(t,n);return`
    <header class="site-header ${M.isMobileMenuOpen?`is-menu-open`:``}">
      <div class="header-top">
        <button class="brand" data-action="go" data-href="/">
          <img class="brand-logo" src="/logo.png" alt="VerkRadar" />
        </button>
        <div class="mobile-header-actions">
          <button class="language-toggle mobile-header-language-toggle" type="button" data-action="toggle-language" aria-label="Switch language">
            <span class="${M.language===`is`?`active`:``}">IS</span>
            <span class="${M.language===`en`?`active`:``}">EN</span>
          </button>
          <button
            class="menu-toggle"
            type="button"
            data-action="toggle-mobile-menu"
            aria-label="${M.isMobileMenuOpen?j(`closeMenu`):j(`openMenu`)}"
            aria-expanded="${M.isMobileMenuOpen?`true`:`false`}"
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
          ${r.map(([e,t])=>t.startsWith(`#`)?`<button data-action="scroll-to" data-target="${t.slice(1)}">${e}</button>`:`<button data-action="go" data-href="${t}" ${M.route===t?`class="active"`:``}>${e}</button>`).join(``)}
        </nav>
        <div class="header-actions">
          <button class="language-toggle" type="button" data-action="toggle-language" aria-label="Switch language">
            <span class="${M.language===`is`?`active`:``}">IS</span>
            <span class="${M.language===`en`?`active`:``}">EN</span>
          </button>
          ${t?``:`<button class="btn btn-secondary header-login-btn btn-login" data-action="go" data-href="/login">${j(`login`)}</button>`}
          ${i?`<button class="btn btn-primary" data-action="go" data-href="${i.href}">${i.label}</button>`:``}
          ${t&&!M.isMobileMenuOpen?lc():``}
        </div>
      </div>
      ${oc(r,i,t)}
    </header>
    <main>${e}</main>
    ${Zs()}
    ${M.toast?`
      <div class="toast toast-${M.toast.type}">
        <span class="toast-dot"></span>
        <span>${A(M.toast.message)}</span>
      </div>
    `:``}
  `}function Xs(e=!!M.user,t=!!M.profile){let n=e?t?[[j(`navDashboard`),`/dashboard`],[j(`navReport`),`/report`],[j(`navSettings`),`/settings`]]:[[j(`setupCompany`),`/onboarding`],[j(`navSettings`),`/settings`]]:[[j(`navHowItWorks`),`#how-it-works`],[j(`navSampleReport`),`#sample-report`],[j(`navPricing`),`/pricing`]];return e&&M.isAdmin&&n.push([`Admin`,`/admin`]),n}function Zs(){let e=[[j(`privacyPolicy`),`/privacy`],[j(`termsOfService`),`/terms`],[j(`dataSources`),`/data-sources`],[j(`security`),`/security`],[j(`contact`),`/contact`]];return`
    <footer class="site-footer">
      <div>
        <strong>VerkRadar</strong>
        <p>${A(j(`footerText`))}</p>
      </div>
      <nav aria-label="Legal and trust pages">
        ${e.map(([e,t])=>`<button type="button" data-action="go" data-href="${t}">${e}</button>`).join(``)}
      </nav>
    </footer>
  `}function Qs(e){return s(e,M.language)}function $s(e){let t=Qs(e);return Z(Wt({language:M.language,escapeHtml:A,eyebrow:t.eyebrow,title:t.title,intro:t.intro,sections:t.sections}))}function ec(){return $s(`privacy`)}function tc(){return $s(`terms`)}function nc(){return $s(`data`)}function rc(){return ec()}function ic(){return $s(`security`)}function ac(){return $s(`contact`)}function oc(e,t,n){return`
    <nav class="mobile-menu-panel" id="mobile-menu">
      <div class="mobile-menu-scroll">
      <div class="mobile-menu-links">
        ${e.map(([e,t])=>t.startsWith(`#`)?`<button type="button" data-action="mobile-scroll-to" data-target="${t.slice(1)}">${e}</button>`:`<button type="button" data-action="mobile-nav" data-href="${t}">${e}</button>`).join(``)}
      </div>
      ${sc(t,n)}
      </div>
    </nav>
  `}function sc(e,t){if(!t)return`
      <div class="mobile-account-section">
        ${e?`<button class="btn btn-primary mobile-cta" type="button" data-action="mobile-nav" data-href="${e.href}">${e.label}</button>`:``}
        <button class="btn btn-secondary" type="button" data-action="mobile-nav" data-href="/login">${j(`login`)}</button>
      </div>
    `;let n=M.profile?.companyName||j(`noCompanyProfile`),r=M.user?.email||``;return`
    <div class="mobile-account-section">
      <div class="mobile-account-header">
        <span class="profile-avatar">${A(uc(n,r))}</span>
        <div>
          <strong>${A(n)}</strong>
          <small>${A(r)}</small>
        </div>
      </div>
      <div class="mobile-account-actions">
        ${M.profile?`<button type="button" data-action="mobile-nav" data-href="/dashboard">${j(`navDashboard`)}</button>
             <button type="button" data-action="mobile-nav" data-href="/settings">${j(`navSettings`)}</button>`:`<button type="button" data-action="mobile-nav" data-href="/onboarding">${j(`setupCompany`)}</button>
             <button type="button" data-action="mobile-nav" data-href="/settings">${j(`navSettings`)}</button>`}
        <button type="button" class="mobile-logout" data-action="logout">${j(`logout`)}</button>
      </div>
    </div>
  `}function cc(e,t){return e?t?null:{href:`/onboarding`,label:j(`createProfile`)}:{href:`/trial`,label:j(`getStarted`)}}function lc(){let e=M.profile?.companyName||j(`noCompanyProfile`),t=M.user?.email||``,n=uc(e,t);return`
    <div class="profile-menu">
      <button type="button" class="profile-pill" data-action="toggle-profile-menu" aria-haspopup="menu" aria-expanded="${M.profileMenuOpen?`true`:`false`}">
        <span class="profile-avatar">${A(n)}</span>
        <span class="profile-name">${A(e)}</span>
        <span class="profile-chevron" aria-hidden="true"></span>
      </button>

      ${M.profileMenuOpen&&!M.isMobileMenuOpen&&!Jr()?`
        <div class="profile-dropdown" role="menu">
          <div class="profile-dropdown-header">
            <strong>${A(e)}</strong>
            <small>${A(t)}</small>
          </div>
          <div class="profile-dropdown-divider"></div>
          ${M.profile?`
            <button type="button" data-action="go" data-href="/dashboard" role="menuitem">${j(`navDashboard`)}</button>
            <button type="button" data-action="go" data-href="/settings" role="menuitem">${j(`navSettings`)}</button>
            ${M.isAdmin?`<button type="button" data-action="go" data-href="/admin" role="menuitem">Admin</button>`:``}
          `:`
            <button type="button" data-action="go" data-href="/onboarding" role="menuitem">${j(`createProfile`)}</button>
            ${M.isAdmin?`<button type="button" data-action="go" data-href="/admin" role="menuitem">Admin</button>`:``}
          `}
          <div class="profile-dropdown-divider"></div>
          <button type="button" class="danger" data-action="logout" role="menuitem">${j(`logout`)}</button>
        </div>
      `:``}
    </div>
  `}function uc(e,t){return(e&&![`No company profile`,j(`noCompanyProfile`)].includes(e)?e:t||`VR`).split(/[^a-zA-Z0-9áéíóúýþæöðÁÉÍÓÚÝÞÆÖÐ]+/).filter(Boolean).slice(0,2).map(e=>e[0]).join(``).toUpperCase()||`VR`}function dc(e,t){return Z(`
    <section class="empty-state">
      <h1>${A(e)}</h1>
      <p>${A(t)}</p>
      <button class="btn btn-primary" data-action="go" data-href="/onboarding">${A(j(`createProfile`))}</button>
      <button class="btn btn-secondary" data-action="load-demo">${A(j(`loadDemoCompany`))}</button>
    </section>
  `)}function fc(){return M.user?dc(M.language===`is`?`Þú ert þegar skráð(ur) inn`:`Already logged in`,M.language===`is`?`Opnaðu mælaborðið eða breyttu fyrirtækjaprófílnum.`:`Open your dashboard or edit your company profile.`):Z(Tt({t:j,escapeHtml:A,authForm:M.authForm,authSubmitting:M.authSubmitting,authMessage:M.authMessage,signupHref:M.pendingInviteToken?Rr(`/signup`):`/trial`,signupLabel:M.pendingInviteToken?j(`createAccount`):j(`createFreeDemoProfile`),forgotPasswordHref:Rr(`/forgot-password`)}))}function pc(){return M.user?dc(M.language===`is`?`Þú ert þegar skráð(ur) inn`:`Already logged in`,M.language===`is`?`Opnaðu mælaborðið eða breyttu fyrirtækjaprófílnum.`:`Open your dashboard or edit your company profile.`):Z(Et({t:j,escapeHtml:A,authForm:M.authForm,authSubmitting:M.authSubmitting,authMessage:M.authMessage}))}function mc(){return Z(Dt({t:j,escapeHtml:A,authForm:M.authForm,authSubmitting:M.authSubmitting,authMessage:M.authMessage}))}function hc(){let e=v(M.route),t=e||(M.invitePreviewErrorToken===e?``:M.pendingInviteToken);return t&&t!==M.pendingInviteToken&&M.invitePreviewErrorToken!==t&&(M.pendingInviteToken=le(t)),Z(xt({escapeHtml:A,invite:M.invitePreview,loading:M.invitePreviewLoading,error:M.invitePreviewError,debugInfo:M.invitePreviewDebug,showDebug:re(),user:M.user,accepting:M.inviteAccepting,signupHref:Rr(`/signup`),loginHref:Rr(`/login`),language:M.language}))}async function gc(){let e=v(M.route)||M.pendingInviteToken||se();if(!(!e||M.invitePreviewLoading)&&!(M.invitePreview?.token===e||M.invitePreviewErrorToken===e)){M.pendingInviteToken=le(e),M.invitePreviewLoading=!0,M.invitePreviewError=null,await N({preview_request_sent:!0}),X();try{let t=await fe(e);if(await N({...t.__debug||{},...t.diagnostics||{}}),t.status&&t.status!==`valid`){let e=Error(`Invite is not valid.`);throw e.details=t,e}M.invitePreview={...t,token:e},M.authForm.email=t.invited_email||t.email||M.authForm.email}catch(t){console.error(`Failed to preview company invite:`,t),t?.details?.diagnostics&&console.warn(`Invite preview diagnostics:`,t.details.diagnostics);let n={...t?.details?.__debug||{},...t?.details?.diagnostics||{}};M.invitePreview=null,await N(n);let r=n.invalid_reason||t?.details?.status||t?.details?.code;Fr(r)&&(ue(),M.pendingInviteToken=``),M.invitePreviewErrorToken=e,M.invitePreviewError=vc(r)}finally{M.invitePreviewLoading=!1,X()}}}async function _c(){let e=v(M.route),t=se(),n=e||M.pendingInviteToken||t,r=ce(M.route);if(n){if(!M.user){P(Rr(`/login`));return}M.inviteAccepting=!0,M.invitePreviewError=null,await N({accept_request_sent:!0,token_source:r}),X();try{let e=await pe(n);await N({...e.__debug||{},...e.diagnostics||{},token_source:r}),ue(),M.pendingInviteToken=``,M.invitePreview=null,M.invitePreviewError=null,await N({membership_refresh_attempted:!0}),await Ba({overwriteDraft:!0}),await N({membership_refresh_succeeded:!!M.companyId,final_route:`/dashboard`}),P(`/dashboard`)}catch(e){console.error(`Failed to accept company invite:`,e);let t=e?.details?.invited_email||M.invitePreview?.invited_email||M.invitePreview?.email||``;await N({...e?.details?.__debug||{},...e?.details?.diagnostics||{},token_source:r,user_email:M.user?.email||``,invited_email:t,accept_error_reason:e?.details?.code||e?.details?.diagnostics?.accept_error_reason||errorMessage(e)}),console.warn(`Invite accept diagnostics:`,M.invitePreviewDebug),M.invitePreviewError=yc(e,t)}finally{M.inviteAccepting=!1,X()}}}function vc(e){let t=String(e||``).toLowerCase();return t===`expired`?M.language===`is`?`Aðgangsboðið er útrunnið.`:`This invite has expired.`:t===`revoked`?M.language===`is`?`Aðgangsboðið hefur verið afturkallað.`:`This invite has been revoked.`:t===`already_accepted`?M.language===`is`?`Aðgangsboðið hefur þegar verið samþykkt. Skráðu þig inn með rétta netfanginu.`:`This invite has already been accepted. Log in with the correct email address.`:t===`no_hash_match`||t===`invite_invalid`?M.language===`is`?`Aðgangsboðið fannst ekki.`:`The invite was not found.`:t===`query_error`?M.language===`is`?`Villa kom upp við að staðfesta aðgangsboðið. Reyndu aftur eða hafðu samband.`:`There was a problem validating the invite. Try again or contact support.`:M.language===`is`?`Aðgangsboðið fannst ekki, er útrunnið eða hefur verið afturkallað.`:`The invite was not found, has expired, or has been revoked.`}function yc(e,t=``){let n=String(e?.details?.code||``).toLowerCase(),r=String(e?.details?.diagnostics?.invalid_reason||e?.details?.diagnostics?.accept_error_reason||``).toLowerCase(),i=n||r;return i===`no_session`?M.language===`is`?`Bíð eftir innskráningu til að virkja aðganginn. Ef þú varst að staðfesta netfangið skaltu skrá þig inn og opna boðið aftur.`:`Waiting for login to activate the invite. If you just confirmed your email, log in and open the invite again.`:(i===`email_mismatch`||n===`email_mismatch`)&&t?M.language===`is`?`Þetta boð var sent á ${t}. Skráðu þig inn með því netfangi.`:`This invite was sent to ${t}. Log in with that email address.`:r===`expired`?M.language===`is`?`Aðgangsboðið er útrunnið.`:`This invite has expired.`:r===`revoked`?M.language===`is`?`Aðgangsboðið hefur verið afturkallað.`:`This invite has been revoked.`:n===`invite_already_accepted`||r===`already_accepted`?M.language===`is`?`Aðgangsboðið hefur þegar verið samþykkt.`:`This invite has already been accepted.`:W(e)}function bc(){if(M.user){let e=Xr();return setTimeout(()=>P(e),0),Z(`
      <section class="empty-state">
        <h1>${A(j(`alreadyLoggedInTitle`))}</h1>
        <p>${A(j(`alreadyLoggedInText`))}</p>
      </section>
    `)}return M.pendingInviteToken||v(M.route)?Z(Ot({t:j,escapeHtml:A,authForm:M.authForm,authSubmitting:M.authSubmitting,authMessage:M.authMessage,loginHref:Rr(`/login`),inviteEmail:M.invitePreview?.invited_email||M.invitePreview?.email||``,isInviteSignup:!!(M.pendingInviteToken&&(M.invitePreview?.invited_email||M.invitePreview?.email))})):Z(kt({t:j,escapeHtml:A,trialHref:`/trial`}))}function xc(){if(!M.importLoading&&!M.importStatus)return``;if(M.importLoading)return`<section class="import-panel"><strong>Importing TED notices...</strong><p>Fetching recent TED notices and refreshing matches.</p></section>`;let e=M.importStatus||{},t=Array.isArray(e.errors)?e.errors:[],n=M.importedTedOpportunities||[];return`
    <section class="import-panel">
      ${M.importStatus?`
        <div class="import-stats">
          <span><strong>${Number(e.fetched||0)}</strong> fetched</span>
          <span><strong>${Number(e.inserted||0)}</strong> inserted</span>
          <span><strong>${Number(e.updated||0)}</strong> updated</span>
          <span><strong>${Number(e.skipped||0)}</strong> skipped</span>
          <span><strong>${Number(e.matched||0)}</strong> matches</span>
          <span><strong>${Number(e.reports_generated||0)}</strong> reports</span>
        </div>
        ${t.length?`<ul class="risk-list">${t.map(e=>`<li>${A(e)}</li>`).join(``)}</ul>`:`<p>TED import completed.</p>`}
        ${t.length?``:`
          <div class="import-result-head">
            <h3>Newest imported TED opportunities</h3>
            <button class="btn btn-secondary" type="button" data-action="go" data-href="/dashboard">View imported opportunities on dashboard</button>
          </div>
          ${n.length?`
            <div class="imported-opportunities">
              ${n.map(Cc).join(``)}
            </div>
          `:`<div class="empty-card">No imported TED opportunities were returned by the latest-results query.</div>`}
        `}
      `:``}
    </section>
  `}function Sc(){if(!M.connectorImportLoading&&!M.connectorTestingSourceId&&!M.connectorImportStatus)return``;if(M.connectorImportLoading||M.connectorTestingSourceId)return`<section class="import-panel"><strong>Running automatic source imports...</strong><p>Fetching enabled source connectors in a limited batch. Refresh matches separately after imports finish.</p></section>`;let e=M.connectorImportStatus||{},t=Array.isArray(e.errors)?e.errors:[],n=Array.isArray(e.failedSources)?e.failedSources:[],r=Array.isArray(e.timedOutSources)?e.timedOutSources:[],i=t.length||n.length||r.length,a=Number.isFinite(Number(e.sources_processed))?`<p>${Number(e.sources_processed||0)} source${Number(e.sources_processed||0)===1?``:`s`} processed${Number(e.sources_remaining||0)?` · ${Number(e.sources_remaining||0)} remaining for next run`:``}.</p>`:``;return`
    <section class="import-panel">
      <div class="import-stats">
        <span><strong>${Number(e.fetched||0)}</strong> fetched</span>
        <span><strong>${Number(e.inserted||0)}</strong> inserted</span>
        <span><strong>${Number(e.updated||0)}</strong> updated</span>
        <span><strong>${Number(e.skipped||0)}</strong> skipped</span>
        <span><strong>${Number(e.matched||0)}</strong> matches</span>
        <span><strong>${Number(e.reports_generated||0)}</strong> reports</span>
      </div>
      ${e.message?`<p>${A(e.message)}</p>`:a}
      ${e.matching_skipped?`<p>Matching was skipped for this batch to stay within Edge Function CPU limits. Refresh company matches from Admin after imports finish.</p>`:``}
      ${e.reports_skipped?`<p>Report generation was skipped for this batch.</p>`:``}
      ${n.length?`
        <div class="import-failure-list">
          <h3>${n.length} source${n.length===1?``:`s`} failed</h3>
          ${n.map(e=>`
            <div class="import-failure-row">
              <strong>${A(e.source||`Unknown source`)}</strong>
              <p>${A(e.message||e.error||`Unknown source import error`)}</p>
              ${e.endpoint_url?`<small>${A(e.endpoint_url)}</small>`:``}
            </div>
          `).join(``)}
        </div>
      `:``}
      ${r.length?`
        <div class="import-failure-list">
          <h3>${r.length} source${r.length===1?``:`s`} timed out or were skipped</h3>
          ${r.map(e=>`
            <div class="import-failure-row">
              <strong>${A(e.source||`Unknown source`)}</strong>
              <p>${A(e.message||e.reason||`Skipped because the source import was close to the runtime limit`)}</p>
              ${e.endpoint_url?`<small>${A(e.endpoint_url)}</small>`:``}
            </div>
          `).join(``)}
        </div>
      `:``}
      ${t.length?`<ul class="risk-list">${t.map(e=>`<li>${A(e)}</li>`).join(``)}</ul>`:``}
      ${i?`<p>Automatic source import completed with source-level failures. Successful sources were still imported.</p>`:`<p>Automatic source import completed.</p>`}
    </section>
  `}function Cc(e){let t=e.url&&e.url!==`#`,n=M.adminUpdatingId===e.id,r=M.adminDeletingId===e.id;return`
    <div class="imported-opportunity-row">
      <div class="imported-opportunity-main">
        <h4>${A(e.title)}</h4>
        <span class="source-pill language-pill">Original language</span>
        <p>${A(Ed(e))}</p>
      </div>
      <dl>
        <div>
          <dt>Country / location</dt>
          <dd>${A([e.countryCode,e.location].filter(Boolean).join(` / `)||`Unknown`)}</dd>
        </div>
        <div>
          <dt>Deadline</dt>
          <dd>${A(Zn(e.deadline))}</dd>
        </div>
        <div>
          <dt>URL</dt>
          <dd>${t?`<a href="${A(e.url)}" target="_blank" rel="noreferrer">Open TED</a>`:`No URL`}</dd>
        </div>
        <div>
          <dt>Status</dt>
          <dd>${A(e.status||`Unknown`)}</dd>
        </div>
        <div>
          <dt>Imported source</dt>
          <dd>${A(e.source||`Unknown`)}</dd>
        </div>
        <div>
          <dt>External ID</dt>
          <dd>${A(e.externalId||`Unknown`)}</dd>
        </div>
      </dl>
      <div class="imported-opportunity-actions">
        <button class="btn btn-secondary" type="button" data-action="hide-imported-opportunity" data-id="${A(e.id)}" ${n||e.status===`hidden`?`disabled`:``}>
          ${n?`Updating...`:`Hide`}
        </button>
        <button class="btn btn-secondary" type="button" data-action="mark-imported-relevant" data-id="${A(e.id)}" ${n||e.status===`open`?`disabled`:``}>
          ${n?`Updating...`:`Mark relevant`}
        </button>
        <button class="btn btn-ghost" type="button" data-action="delete-opportunity" data-id="${A(e.id)}" ${r?`disabled`:``}>
          ${r?`Deleting...`:`Delete`}
        </button>
      </div>
    </div>
  `}function wc(){return(M.importRuns||[])[0]||null}function Tc(e){let t=String(e||``).toLowerCase();return[`success`,`completed`,`complete`,`connected`].includes(t)?`is-success`:[`running`,`started`,`pending`,`planned`].includes(t)?`is-running`:[`error`,`failed`,`failure`].includes(t)?`is-error`:``}function Ec(){let e=wc();return M.importRunsLoading&&!e?`
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
        <span class="status-pill ${Tc(e.status)}">${A(e.status||`unknown`)}</span>
      </div>
      <div class="ops-metrics">
        <div><span>Type</span><strong>${A(e.run_type||`ted-import`)}</strong></div>
        <div><span>Mode</span><strong>${A(e.import_mode||`unknown`)}</strong></div>
        <div><span>Fetched</span><strong>${Number(e.fetched||0)}</strong></div>
        <div><span>Inserted</span><strong>${Number(e.inserted||0)}</strong></div>
        <div><span>Updated</span><strong>${Number(e.updated||0)}</strong></div>
        <div><span>Skipped</span><strong>${Number(e.skipped||0)}</strong></div>
        <div><span>Matched</span><strong>${Number(e.matched||0)}</strong></div>
        <div><span>Reports</span><strong>${Number(e.reports_generated||0)}</strong></div>
        <div><span>Started</span><strong>${A(E(e.started_at))}</strong></div>
        <div><span>Finished</span><strong>${A(E(e.finished_at))}</strong></div>
      </div>
      ${e.error?`<div class="admin-message is-error">${A(e.error)}</div>`:``}
      ${Mc(e)}
    </section>
  `:`
      <section class="ops-card automation-status-card">
        <div class="card-header">
          <div>
            <h2>Automation status</h2>
            <p>No automation runs yet.</p>
          </div>
        </div>
        ${M.importRunsError?`<div class="admin-message is-error">${A(M.importRunsError)}</div>`:``}
      </section>
    `}function Dc(){let e=window.VERKRADAR_SUPABASE_URL||`https://asojxjbsgqbfpbepojzh.supabase.co`,t=String(e).match(/^https:\/\/([^.]+)\.supabase\.co/i);return t?`https://supabase.com/dashboard/project/${t[1]}/functions/import-ted/logs`:``}function Oc(){let e=Dc();return`
    <section class="ops-card">
      <div class="card-header">
        <div>
          <h2>Automation actions</h2>
          <p>Run the pipeline manually or refresh the operations view.</p>
        </div>
      </div>
      <div class="automation-actions">
        <button class="btn btn-primary" type="button" data-action="import-ted" ${M.importLoading?`disabled`:``}>
          ${M.importLoading?`Running TED import...`:`Run TED import now`}
        </button>
        <button class="btn btn-secondary" type="button" data-action="import-source-connectors" ${M.connectorImportLoading?`disabled`:``}>
          ${M.connectorImportLoading?`Running source imports...`:`Run automatic source imports now`}
        </button>
        <button class="btn btn-secondary" type="button" data-action="refresh-admin-status" ${M.importRunsLoading||M.adminReportsLoading?`disabled`:``}>
          ${M.importRunsLoading||M.adminReportsLoading?`Refreshing...`:`Refresh status`}
        </button>
        ${e?`<a class="btn btn-secondary" href="${A(e)}" target="_blank" rel="noreferrer">View Edge Function logs</a>`:``}
      </div>
      <label class="import-mode-control">
        Import mode
        <select data-import-mode ${M.importLoading?`disabled`:``}>
          <option value="nordic" ${M.tedImportMode===`nordic`?`selected`:``}>Nordic only</option>
          <option value="iceland" ${M.tedImportMode===`iceland`?`selected`:``}>Iceland only</option>
          <option value="eu-broad" ${M.tedImportMode===`eu-broad`?`selected`:``}>EU broad test</option>
        </select>
      </label>
      ${xc()}
      ${Sc()}
    </section>
  `}function kc(){let e=M.importRuns||[];return`
    <section class="ops-card">
      <div class="card-header">
        <div>
          <h2>Latest import runs</h2>
          <p>Last ${e.length||0} recorded automation runs.</p>
        </div>
      </div>
      ${M.importRunsError?`<div class="admin-message is-error">${A(M.importRunsError)}</div>`:``}
      ${M.importRunsLoading&&!e.length?`<div class="empty-card">Loading import runs...</div>`:e.length?`
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
              ${e.map(Ac).join(``)}
            </tbody>
          </table>
        </div>
      `:`<div class="empty-card">No automation runs yet.</div>`}
    </section>
  `}function Ac(e){let t=Mc(e,{compact:!0});return`
    <tr>
      <td>${A(E(e.started_at||e.finished_at))}</td>
      <td>${A(e.run_type||`ted-import`)}</td>
      <td><span class="status-pill ${Tc(e.status)}">${A(e.status||`unknown`)}</span></td>
      <td>${Number(e.fetched||0)}</td>
      <td>${Number(e.inserted||0)}</td>
      <td>${Number(e.updated||0)}</td>
      <td>${Number(e.skipped||0)}</td>
      <td>${Number(e.matched||0)}</td>
      <td>${Number(e.reports_generated||0)}</td>
      <td>${e.error?A(e.error):``}</td>
    </tr>
    ${t?`
      <tr class="import-run-debug-row">
        <td colspan="10">${t}</td>
      </tr>
    `:``}
  `}function jc(e){let t=e?.details;if(!t)return{};if(typeof t==`string`)try{return JSON.parse(t)||{}}catch{return{}}return typeof t==`object`?t:{}}function Mc(e,t={}){let n=jc(e),r=n.skip_reasons&&typeof n.skip_reasons==`object`?n.skip_reasons:{},i=Array.isArray(n.skipped_samples)?n.skipped_samples:[],a=Array.isArray(n.per_source)?n.per_source:[],o=Object.entries(r).filter(([,e])=>Number(e)>0).sort((e,t)=>Number(t[1])-Number(e[1])).slice(0,5);return!o.length&&!i.length&&!a.length?``:`
    <div class="import-debug ${t.compact?`is-compact`:``}">
      <div class="import-debug-header">
        <strong>Skip diagnostics</strong>
        <span>${Number(e.skipped||0)} skipped · ${Number(n.connectors_checked||a.length||0)} connector${Number(n.connectors_checked||a.length||0)===1?``:`s`}</span>
      </div>
      ${a.length?`
        <div class="import-per-source">
          ${a.slice(0,8).map(e=>`
            <div>
              <strong>${A(e.source_name||`Unknown source`)}</strong>
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
            <span><strong>${Number(t)}</strong> ${A(Nc(e))}</span>
          `).join(``)}
        </div>
      `:``}
      ${i.length?`
        <div class="import-skip-samples">
          ${i.slice(0,10).map(e=>`
            <div>
              <strong>${A(e.source_name||e.source||`Unknown source`)}</strong>
              <span>${A(e.title||`Untitled item`)}</span>
              <em>${A(Nc(e.reason||`skipped`))}${e.matchedKeyword?`: ${A(e.matchedKeyword)}`:``}${e.final_quality_status?` · ${A(Fl(e.final_quality_status))}`:``}</em>
            </div>
          `).join(``)}
        </div>
      `:``}
    </div>
  `}function Nc(e){return{missing_title:`missing title`,missing_url:`missing URL`,duplicate_existing_opportunity:`duplicate existing opportunity`,no_include_keyword_match:`no include keyword match`,matched_exclude_keyword:`matched exclude keyword`,low_quality_needs_review:`low quality needs review`,unsupported_connector:`unsupported connector`,parse_failed:`parse failed`,fetch_failed:`fetch failed`}[e]||String(e||`skipped`).replaceAll(`_`,` `)}function Pc(){let e=M.importedTedOpportunities||[];return`
    <section class="ops-card">
      <div class="card-header">
        <div>
          <h2>Latest TED opportunities</h2>
          <p>Newest imported EU TED rows for review.</p>
        </div>
      </div>
      ${M.importedTedOpportunitiesError?`<div class="admin-message is-error">${A(M.importedTedOpportunitiesError)}</div>`:``}
      ${M.importedTedOpportunitiesLoading&&!e.length?`<div class="empty-card">Loading TED opportunities...</div>`:e.length?`
        <div class="imported-opportunities">
          ${e.map(Cc).join(``)}
        </div>
      `:`<div class="empty-card">No TED opportunities loaded yet.</div>`}
    </section>
  `}function Fc(){let e=M.adminReports||[];return`
    <section class="ops-card">
      <div class="card-header">
        <div>
          <h2>Latest reports generated</h2>
          <p>Newest saved weekly report records.</p>
        </div>
      </div>
      ${M.adminReportsError?`<div class="admin-message is-error">${A(M.adminReportsError)}</div>`:``}
      ${M.adminReportsLoading&&!e.length?`<div class="empty-card">Loading reports...</div>`:e.length?`
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
              ${e.map(Uc).join(``)}
            </tbody>
          </table>
        </div>
      `:`<div class="empty-card">No generated reports yet.</div>`}
      ${M.selectedAdminReportId?Wc():``}
    </section>
  `}function Ic(e){return{eu_ted:`EU TED`,ted:`EU TED`,api:`EU TED`,utbodsvefur:`Útboðsvefur`,municipal_website:`Municipal websites`,public_institution_page:`Public institution pages`,private_manual:`Private/manual leads`,manual:`Private/manual leads`,tender_portal:`Tender portals`}[e]||e||`Unknown`}function Lc(e){return{ted_api:`TED API`,rss_feed:`RSS feed`,wordpress_rest:`WordPress REST`,official_api:`Official API`,page_monitor_allowed:`Allowed page monitor`,manual_fallback:`Manual fallback`,planned:`Planned`,permission_required:`Permission required`}[e]||e||`Planned`}function Rc(e=[]){return e.reduce((e,t)=>{let n=t.raw_payload&&typeof t.raw_payload==`object`?t.raw_payload:{},r=z(n.quality_status||n.qualityStatus,t);return e.active+=1,r===`confirmed_tender`?e.confirmed+=1:r===`early_signal`?e.early+=1:e.needsReview+=1,e},{active:0,confirmed:0,early:0,needsReview:0})}function zc(e){let t=e.source_status||{},n=e.source_connectors||{},r=String(n.status||t.status||``).toLowerCase(),i=String(n.connector_type||``).toLowerCase();return r.includes(`error`)?{label:`Error`,className:`is-error`,tone:`error`}:r===`permission_required`||i===`permission_required`?{label:`Permission required`,className:`is-permission`,tone:`planned`}:n.enabled&&[`connected`,`success`,`completed`,`complete`].includes(r)||n.enabled&&[`rss_feed`,`wordpress_rest`,`ted_api`].includes(i)?{label:`Connected`,className:`is-success`,tone:`connected`}:r===`planned`||i===`planned`?{label:`Planned`,className:`is-planned`,tone:`planned`}:{label:`Disabled`,className:`is-disabled`,tone:`disabled`}}function Bc(){let e=M.sourceCoverage||[];return`
    <section class="ops-card">
      <div class="card-header">
        <div>
          <h2>Source coverage</h2>
          <p>Connected and planned lead sources for Icelandic opportunity coverage.</p>
        </div>
      </div>
      ${M.sourceCoverageError?`<div class="admin-message is-error">${A(M.sourceCoverageError)}</div>`:``}
      ${M.sourceCoverageLoading&&!e.length?`<div class="empty-card">Loading source coverage...</div>`:e.length?`
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
              ${e.map(Vc).join(``)}
            </tbody>
          </table>
        </div>
      `:`<div class="empty-card">No sources configured yet.</div>`}
    </section>
  `}function Vc(e){let t=e.source_status||{},n=e.source_connectors||{},r=zc(e),i=n.enabled&&[`rss_feed`,`wordpress_rest`].includes(n.connector_type),a=M.connectorTestingSourceId===e.id,o=e.opportunityStats||{active:Number(t.active_opportunities_count||0),confirmed:0,early:0,needsReview:0},s=e.latestOpportunities||[],c=M.expandedSourceId===e.id,l=n.last_error||t.last_error||``;return`
    <tr class="${r.tone===`connected`?`source-row-connected`:`source-row-muted`}">
      <td>
        <strong>${A(e.name||`Unknown source`)}</strong>
        ${n.endpoint_url||e.base_url?`<br><a href="${A(n.endpoint_url||e.base_url)}" target="_blank" rel="noreferrer">${A(n.endpoint_url||e.base_url)}</a>`:``}
      </td>
      <td>${A(Ic(e.source_type))}</td>
      <td>
        <strong>${A(Lc(n.connector_type))}</strong>
        ${n.require_any_keyword===!1?`<br><span>Keyword match optional</span>`:`<br><span>Requires keyword match</span>`}
        ${Array.isArray(n.include_keywords)&&n.include_keywords.length?`<br><span>Includes: ${A(n.include_keywords.slice(0,5).join(`, `))}${n.include_keywords.length>5?`...`:``}</span>`:``}
        ${Array.isArray(n.exclude_keywords)&&n.exclude_keywords.length?`<br><span>Excludes: ${A(n.exclude_keywords.slice(0,5).join(`, `))}${n.exclude_keywords.length>5?`...`:``}</span>`:``}
      </td>
      <td>
        <span class="status-pill ${n.enabled?`is-success`:`is-disabled`}">${n.enabled?`Enabled`:`Disabled`}</span>
      </td>
      <td><span class="status-pill ${r.className}">${A(r.label)}</span></td>
      <td>${A(E(n.last_success_at||t.last_success_at))}</td>
      <td>${l?A(l):`<span class="muted-text">None</span>`}</td>
      <td>${Number(o.active||0)}</td>
      <td>${Number(o.confirmed||0)}</td>
      <td>${Number(o.early||0)}</td>
      <td>${Number(o.needsReview||0)}</td>
      <td>
        <button class="btn btn-secondary btn-small" type="button" data-action="test-source-connector" data-id="${A(e.id)}" ${!i||a||M.connectorImportLoading?`disabled`:``}>
          ${a?`Testing...`:`Test source`}
        </button>
        <button class="btn btn-ghost btn-small" type="button" data-action="toggle-source-items" data-id="${A(e.id)}" ${s.length?``:`disabled`}>
          ${c?`Hide items`:`View latest items`}
        </button>
      </td>
    </tr>
    ${c?Hc(e):``}
  `}function Hc(e){let t=e.latestOpportunities||[];return`
    <tr class="source-items-row">
      <td colspan="12">
        <div class="source-items-panel">
          <div class="source-items-header">
            <strong>Latest active items</strong>
            <span>${t.length} shown</span>
          </div>
          ${t.length?`
            <div class="source-items-list">
              ${t.map(t=>{let n=t.raw_payload&&typeof t.raw_payload==`object`?t.raw_payload:{},r=z(n.quality_status||n.qualityStatus,t);return`
                  <div class="source-item">
                    <div>
                      <strong>${A(t.title||`Untitled opportunity`)}</strong>
                      <span>${A(Td(`buyer`,lr(t.buyer,e.name)))} · ${A(Ls(t.deadline))}</span>
                    </div>
                    <span class="quality-badge ${A(r)}">${A(Fl(r))}</span>
                    ${t.url?`<a class="btn btn-ghost btn-small" href="${A(t.url)}" target="_blank" rel="noreferrer">Open</a>`:``}
                  </div>
                `}).join(``)}
            </div>
          `:`<div class="empty-card">No active items for this source.</div>`}
        </div>
      </td>
    </tr>
  `}function Uc(e){let t=e.companies?.company_name||`Unknown company`,n=Array.isArray(e.report_items)?e.report_items.length:0;return`
    <tr>
      <td>${A(Wu(e,t))}</td>
      <td>${A(t)}</td>
      <td>${A(E(e.created_at))}</td>
      <td>${A(`${Zn(e.period_start)} - ${Zn(e.period_end)}`)}</td>
      <td>${A(e.status||`draft`)}</td>
      <td>${n}</td>
      <td>
        <div class="admin-row-actions">
          <button class="btn btn-secondary btn-small" type="button" data-action="view-admin-report" data-id="${A(e.id)}">${A(M.language===`is`?`Skoða yfirlit`:`View report`)}</button>
          <button class="btn btn-ghost btn-small" type="button" data-action="copy-admin-report" data-id="${A(e.id)}">${A(w(`copyReportEmail`,M.language))}</button>
          <button class="btn btn-ghost btn-small" type="button" data-action="view-admin-report" data-id="${A(e.id)}">${A(M.language===`is`?`Opna fyrir PDF`:`Open for PDF`)}</button>
        </div>
      </td>
    </tr>
  `}function Wc(){let e=(M.adminReports||[]).find(e=>e.id===M.selectedAdminReportId),t=M.selectedAdminReport?.id===M.selectedAdminReportId?M.selectedAdminReport:e;if(!t&&!M.selectedAdminReportLoading&&!M.selectedAdminReportError)return``;if(!t)return`
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
            ${M.selectedAdminReportError?`<div class="admin-message is-error">${A(M.selectedAdminReportError)}</div>`:`<div class="empty-card">Loading saved report items...</div>`}
          </div>
        </div>
      </div>
    `;let n=t.companies?.company_name||`Unknown company`,r=Array.isArray(t.report_items)?t.report_items.length:0,i=Wu(t,n);return`
    <div class="modal-backdrop">
      <div class="modal admin-report-modal" role="dialog" aria-modal="true">
        <div class="modal-header">
          <div>
            <span class="status-pill is-success">${A(Ru(t.status))}</span>
            <h2>${A(i)}</h2>
            <p>${A(n)} · ${A(Qu(t.period_start,t.period_end))} · ${A(E(t.created_at))}</p>
          </div>
          <button type="button" class="icon-btn modal-close-btn" data-action="close-admin-report" aria-label="Close report">×</button>
        </div>
        <div class="modal-body">
          <div class="admin-report-actions">
            <button class="btn btn-primary" type="button" data-action="download-admin-report-pdf" ${M.selectedAdminReportLoading?`disabled`:``}>${A(w(`downloadPdf`,M.language))}</button>
            <button class="btn btn-secondary" type="button" data-action="copy-admin-report" data-id="${A(t.id)}">${A(w(`copyReportEmail`,M.language))}</button>
            <button class="btn btn-secondary" type="button" data-action="mark-admin-report-sent" data-id="${A(t.id)}" ${M.adminReportDeliveryActions[t.id]===`sent`?`disabled`:``}>${A(M.adminReportDeliveryActions[t.id]===`sent`?w(`marking`,M.language):w(`markAsSent`,M.language))}</button>
            <button class="btn btn-ghost" type="button" data-action="close-admin-report">${A(w(`close`,M.language))}</button>
          </div>

          ${M.selectedAdminReportLoading?`<div class="empty-card">Loading saved report items...</div>`:``}
          ${M.selectedAdminReportError?`<div class="admin-message is-error">${A(M.selectedAdminReportError)}</div>`:``}
          ${M.selectedAdminReportLoading?``:Gc(t,r,n)}

          ${!M.selectedAdminReportLoading&&r?Bu(t,{companyName:n},{id:`admin-report-preview`,closeButton:!1,includeTextArea:!1}):M.selectedAdminReportLoading?``:`
            <div class="empty-card">${A(M.language===`is`?`Engin virk tækifæri eru í þessu yfirliti.`:`No active eligible opportunities in this report.`)}</div>
          `}

          ${!M.selectedAdminReportLoading&&r?Kc(t):``}
        </div>
      </div>
    </div>
  `}function Gc(e,t,n){let r=e.status===`generated_all_current`?`all_current`:e.status===`generated_new_only`?`new_only`:e.status||`draft`;return`
    <div class="admin-report-meta-strip">
      <span><strong>${A(w(`company`,M.language))}:</strong> ${A(n||`Unknown company`)}</span>
      <span><strong>${A(w(`period`,M.language))}:</strong> ${A(Qu(e.period_start,e.period_end))}</span>
      <span><strong>${A(w(`generatedAt`,M.language))}:</strong> ${A(E(e.created_at))}</span>
      <span><strong>${A(w(`mode`,M.language))}:</strong> ${A(w(r===`all_current`?`currentActive`:`newOpportunities`,M.language))}</span>
      <span><strong>${A(w(`items`,M.language))}:</strong> ${Number(t||0)}</span>
    </div>
  `}function Kc(e){let t=(Array.isArray(e.report_items)?[...e.report_items]:[]).sort((e,t)=>Number(e.sort_order||0)-Number(t.sort_order||0));return`
    <section class="admin-report-items">
      <h3>${A(M.language===`is`?`Atriði í yfirliti`:`Report items`)}</h3>
      <div class="admin-report-item-list">
        ${t.map(e=>qc(e)).join(``)}
      </div>
    </section>
  `}function qc(e){let t=e.opportunities?zi(e.opportunities):null;if(!t)return`<article class="admin-report-item"><p>${A(M.language===`is`?`Gögn um tækifæri eru ekki lengur aðgengileg.`:`Opportunity data is no longer available.`)}</p></article>`;let n=nr(t.url),r=Bs(t),i=In(Array.isArray(e.match_reasons)?e.match_reasons:[],M.language);return`
    <article class="admin-report-item">
      <div class="opportunity-badges">
        <span class="source-pill source-badge">${A(Fn({matchScore:Number(e.match_score||0)},M.language))}</span>
        <span class="${Gs(ls(Number(e.match_score||0)))}">${A(`${Nn({matchScore:Number(e.match_score||0)},M.language)} ${Number(e.match_score||0)}`)}</span>
      </div>
      <h4>${A(t.title)}</h4>
      <p><strong>${A(M.language===`is`?`Staða`:`Status`)}:</strong> ${A(Fn({matchScore:Number(e.match_score||0)},M.language))}</p>
      <p>${A(Mn(M.language))}</p>
      <div class="admin-report-meta-grid">
        <span><strong>${A(j(`buyer`))}</strong>${A(Ed(t))}</span>
        <span><strong>${A(j(`source`))}</strong>${A(Td(`source`,t.source))}</span>
        <span><strong>${A(j(`area`))}</strong>${A(Dd(t))}</span>
        <span><strong>${A(j(`deadline`))}</strong>${A(r.label)}</span>
        <span><strong>${A(j(`estimatedValue`))}</strong>${A(t.estimatedValue?Vs(t.estimatedValue):j(`notListed`))}</span>
        <span><strong>${A(w(`sentStatus`,M.language))}</strong>${A(e.sent_at?`${w(`sentOn`,M.language)} ${E(e.sent_at)}`:w(`notSent`,M.language))}</span>
      </div>
      ${i.length?`<div><strong>${A(w(`reasons`,M.language))}</strong><ul>${i.map(e=>`<li>${A(e)}</li>`).join(``)}</ul></div>`:``}
      <p>${A(t.description||``)}</p>
      ${n?`<a class="btn btn-secondary btn-small" href="${A(n)}" target="_blank" rel="noreferrer">${A(w(`openSource`,M.language))}</a>`:``}
    </article>
  `}async function Jc(e){let t=M.selectedAdminReport?.id===e?M.selectedAdminReport:(M.adminReports||[]).find(t=>t.id===e);if(!t){G(`Report not found`,`error`);return}let n=t.companies?.company_name||`Company`,r=Gu(t),i=Rn({companyName:n,language:M.language,matches:r.map(e=>({...e,buyer:Ed(e),deadline:Rs(e),matchReasons:In(e.matchReasons,M.language)}))});try{await navigator.clipboard.writeText(i),G(`Report email copied`,`success`)}catch(e){console.error(`Failed to copy admin report:`,e),G(`Could not copy report email`,`error`)}}async function Yc(e){let t=M.selectedAdminReport?.id===e?M.selectedAdminReport:(M.adminReports||[]).find(t=>t.id===e);if(!t?.company_id){G(`Report not found`,`error`);return}M.adminReportDeliveryActions[e]=`sent`,X();try{let n=await R(t.company_id,`mark_report_sent`,{reportId:e});await di(e),G(`Marked ${Number(n.marked_sent||0)} report item${Number(n.marked_sent||0)===1?``:`s`} as sent`,`success`)}catch(e){console.error(`Failed to mark report as sent:`,e),G(`Could not mark report as sent. ${W(e)}`,`error`)}finally{delete M.adminReportDeliveryActions[e],X()}}function Xc(){let e=M.adminOpportunityFilters;return nl((M.opportunities||[]).filter(t=>{let n=Pl(t);if(e.tedOnly&&!n||e.manualOnly&&n||!e.showDemoTest&&Ji(t)||!tl(t,e.addedWindow)||e.source!==`all`&&t.source!==e.source||e.status!==`all`&&t.status!==e.status)return!1;let r=ua(t)||t.countryCode||`Unknown`;if(e.country!==`all`&&r!==e.country)return!1;let i=k(e.search);return!(i&&!k(`${t.title} ${t.buyer} ${t.externalId} ${t.location}`).includes(i))}),e.sortBy)}function Zc(e){return[`created_desc`,`created_asc`,`deadline_asc`,`deadline_desc`,`updated_desc`].includes(e)?e:`created_desc`}function Qc(e){return[`today`,`3d`,`7d`,`all`].includes(e)?e:`all`}function $c(){return[[`created_desc`,`Nýjast bætt við`],[`created_asc`,`Elst bætt við`],[`deadline_asc`,`Skilafrestur næst`],[`deadline_desc`,`Skilafrestur lengst frá`],[`updated_desc`,`Nýjast uppfært`]]}function el(){return[[`today`,`Bætt við í dag`],[`3d`,`Síðustu 3 dagar`],[`7d`,`Síðustu 7 dagar`],[`all`,`Allt`]]}function tl(e,t){let n=Qc(t);if(n===`all`)return!0;let r=al(e.createdAt);if(!Number.isFinite(r))return!1;let i=new Date;if(n===`today`)return r>=new Date(i.getFullYear(),i.getMonth(),i.getDate()).getTime();let a=n===`3d`?3:7;return r>=i.getTime()-a*24*60*60*1e3}function nl(e,t){let n=Zc(t);return[...e].sort((e,t)=>n===`created_asc`?il(e.createdAt,t.createdAt,`asc`):n===`deadline_asc`?il(rl(e),rl(t),`asc`,{nullsLast:!0}):n===`deadline_desc`?il(rl(e),rl(t),`desc`,{nullsLast:!0}):n===`updated_desc`?il(e.updatedAt||e.createdAt,t.updatedAt||t.createdAt,`desc`):il(e.createdAt,t.createdAt,`desc`))}function rl(e){return e.deadlineAt||e.rawPayload?.deadline_at||e.deadline||``}function il(e,t,n=`desc`,r={}){let i=al(e),a=al(t),o=Number.isFinite(i),s=Number.isFinite(a);return!o&&!s?0:o?s?n===`asc`?i-a:a-i:r.nullsLast?-1:n===`asc`?1:-1:r.nullsLast?1:n===`asc`?-1:1}function al(e){if(!e)return NaN;let t=new Date(e).getTime();if(!Number.isNaN(t))return t;let n=String(e).match(/^(\d{4}-\d{2}-\d{2})$/);return n?new Date(`${n[1]}T00:00:00Z`).getTime():NaN}function ol(e,t){return Array.from(new Set(e.map(t).filter(Boolean))).sort((e,t)=>String(e).localeCompare(String(t)))}function sl(e){let t=M.adminOpportunityFilters,n=ol(M.opportunities||[],e=>e.source||`Unknown`),r=ol(M.opportunities||[],e=>e.status||`Unknown`),i=ol(M.opportunities||[],e=>ua(e)||e.countryCode||`Unknown`),a=M.adminCompanies||[];return`
    <div class="admin-filters">
      <input data-admin-filter="search" value="${A(t.search)}" placeholder="Search title, buyer, external ID..." />
      <select data-admin-filter="source">
        <option value="all">All sources</option>
        ${n.map(e=>`<option value="${A(e)}" ${t.source===e?`selected`:``}>${A(e)}</option>`).join(``)}
      </select>
      <select data-admin-filter="status">
        <option value="all">All statuses</option>
        ${r.map(e=>`<option value="${A(e)}" ${t.status===e?`selected`:``}>${A(e)}</option>`).join(``)}
      </select>
      <select data-admin-filter="country">
        <option value="all">All countries</option>
        ${i.map(e=>`<option value="${A(e)}" ${t.country===e?`selected`:``}>${A(e)}</option>`).join(``)}
      </select>
      <select data-admin-filter="sortBy" aria-label="Röðun">
        ${$c().map(([e,n])=>`<option value="${A(e)}" ${Zc(t.sortBy)===e?`selected`:``}>${A(n)}</option>`).join(``)}
      </select>
      <select data-admin-filter="addedWindow" aria-label="Bætt við">
        ${el().map(([e,n])=>`<option value="${A(e)}" ${Qc(t.addedWindow)===e?`selected`:``}>${A(n)}</option>`).join(``)}
      </select>
      <select data-admin-filter="debugCompanyId">
        <option value="">Match debug company...</option>
        ${a.map(e=>`<option value="${A(e.id)}" ${t.debugCompanyId===e.id?`selected`:``}>${A(e.companyName)}</option>`).join(``)}
      </select>
      <label class="checkbox compact"><input type="checkbox" data-admin-filter="tedOnly" ${t.tedOnly?`checked`:``}/><span>TED only</span></label>
      <label class="checkbox compact"><input type="checkbox" data-admin-filter="manualOnly" ${t.manualOnly?`checked`:``}/><span>Manual only</span></label>
      <label class="checkbox compact"><input type="checkbox" data-admin-filter="showDemoTest" ${t.showDemoTest?`checked`:``}/><span>Show demo/test opportunities</span></label>
    </div>
    <p class="admin-filter-count">${e.length} of ${(M.opportunities||[]).length} opportunities shown.</p>
  `}function cl(e){return!!(e?.deadline||e?.deadlineAt||e?.rawPayload?.deadline_at||e?.rawPayload?.deadlineAt)}function ll(){let e=M.adminOpportunityFilters?.missingDeadlineSource||`all`;return(M.opportunities||[]).filter(e=>!cl(e)).filter(e=>!Ji(e)).filter(t=>e===`all`||t.source===e).sort((e,t)=>String(e.source||``).localeCompare(String(t.source||``))||String(e.title||``).localeCompare(String(t.title||``)))}function ul(){let e=[`Ríkiskaup / island.is procurement`,`Vegagerðin`,`Akranes útboð`,`Garðabær Municipality`],t=ol((M.opportunities||[]).filter(e=>!cl(e)),e=>e.source||`Unknown`);return Qn([...e,...t])}function dl(e){let t=e?.rawPayload||{},n=String(e?.url||t.source_url||t.link||``).trim();if(!n)return{label:`No source URL`,isSafe:!1};let r;try{r=new URL(n)}catch{return{label:`Invalid URL`,isSafe:!1}}if(![`http:`,`https:`].includes(r.protocol))return{label:`Unsupported protocol: ${r.protocol}`,isSafe:!1};let i=r.hostname.replace(/^www\./i,``).toLowerCase(),a=[`utbodsvefur.is`,`vegagerdin.is`,`akranes.is`,`gardabaer.is`,`borgarbyggd.is`,`arborg.is`,`faxafloahafnir.is`,`reykjavik.is`,`hafnarfjordur.is`,`reykjanesbaer.is`,`mulathing.is`,`akureyri.is`].some(e=>i===e||i.endsWith(`.${e}`));return{label:a?`Yes (${i})`:`Unknown host (${i})`,isSafe:a}}function fl(e){let t=e?.rawPayload||{},n=t.deadline_debug&&typeof t.deadline_debug==`object`?t.deadline_debug:{},r=[t.deadline_debug_reason,t.deadline_reenrichment_error,n.source?`debug source: ${n.source}`:``,n.extractedText?`extracted: ${n.extractedText}`:``,n.parserVersion?`parser: ${n.parserVersion}`:``,t.stale_reason?`stale: ${t.stale_reason}`:``].filter(Boolean);return r.length?r.join(` · `):`Still missing after import/re-enrichment, or no debug reason stored yet.`}function pl(){let e=ll(),t=ml(e),n=e.reduce((e,t)=>{let n=t.source||`Unknown`;return e[n]||(e[n]=[]),e[n].push(t),e},{}),r=Object.keys(n).sort((e,t)=>e.localeCompare(t)),i=M.adminOpportunityFilters?.missingDeadlineSource||`all`,a=ul();return`
    <section class="ops-card admin-debug-card">
      <div class="card-header">
        <div>
          <h2>Missing deadline debug</h2>
          <p>${e.length} opportunities missing deadlines${i===`all`?``:` for ${A(i)}`}. Grouped by source.</p>
          <p class="admin-filter-count">
            total=${t.total} · alert_eligible=false=${t.alertFalse} · alert_eligible not false=${t.alertNotFalse} · confirmed_tender=${t.confirmedTender} · needs_review=${t.needsReview}
          </p>
        </div>
        <label class="admin-inline-control">
          <span>Source</span>
          <select data-admin-filter="missingDeadlineSource">
            <option value="all">All sources</option>
            ${a.map(e=>`<option value="${A(e)}" ${i===e?`selected`:``}>${A(e)}</option>`).join(``)}
          </select>
        </label>
      </div>
      ${r.length?r.map(e=>hl(e,n[e])).join(``):`<div class="empty-card">No missing-deadline opportunities for this filter.</div>`}
    </section>
  `}function ml(e){return(e||[]).reduce((e,t)=>{let n=t?.rawPayload||{},r=String(n.alert_eligible??``).toLowerCase(),i=String(n.quality_status||``).toLowerCase();return e.total+=1,r===`false`?e.alertFalse+=1:e.alertNotFalse+=1,i===`confirmed_tender`&&(e.confirmedTender+=1),i===`needs_review`&&(e.needsReview+=1),e},{total:0,alertFalse:0,alertNotFalse:0,confirmedTender:0,needsReview:0})}function hl(e,t){return`
    <div class="missing-deadline-source-group">
      <h3>${A(e)} <span class="muted">(${t.length})</span></h3>
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
            ${t.map(gl).join(``)}
          </tbody>
        </table>
      </div>
    </div>
  `}function gl(e){let t=dl(e),n=nr(e.url||e.rawPayload?.source_url||``),r=e.rawPayload?.safety_status||e.rawPayload?.quality_status||Ll(e),i=e.rawPayload?.alert_eligible,a=i===!0?`true`:`false`,o=String(i??``).toLowerCase()===`false`?``:`<br><span class="status-pill is-warning">Missing deadline alert flag needs fix</span>`,s=fl(e);return`
    <tr>
      <td><code>${A(String(e.id||``))}</code><br><span>${A(e.externalId||`No external ID`)}</span></td>
      <td><strong>${A(e.title||`Untitled`)}</strong><br><span>${A(e.source||`Unknown source`)}</span></td>
      <td>${n?`<a href="${A(n)}" target="_blank" rel="noreferrer" title="${A(n)}">${A(n)}</a>`:`No source URL`}</td>
      <td>${e.publishedDate?A(E(e.publishedDate)):`Not listed`}</td>
      <td>${A(r||`unknown`)}<br><span>alert_eligible=${A(a)}</span>${o}</td>
      <td><span class="status-pill ${t.isSafe?`is-success`:`is-running`}">${A(t.label)}</span></td>
      <td title="${A(s)}">${A(s)}</td>
    </tr>
  `}function _l(){return Z(Gt({t:j,escapeHtml:A,language:M.language,trialHref:Qr()}))}function vl(){return M.user?(K(),Z(`
    <section class="page-head pricing-head">
      <p class="eyebrow">${A(j(`onboarding`))}</p>
      <h1>${A(j(`onboardingTitle`))}</h1>
      <p>${A(j(`onboardingText`))}</p>
    </section>

    ${yl()}
  `)):Pa()}function yl(){return K(),rn({t:j,escapeHtml:A,capitalize:er,arrayFieldText:uo,formatCustomerLocation:kd,getFilterOptions:bl,getProfileSuggestions:mo,renderCustomDropdown:Cl,renderSuggestionChips:yo,profileDraft:M.profileDraft||Sr(),accountEmail:M.user?.email||``,hasProfile:!!M.profile,isSavingProfile:M.isSavingProfile,profileSaved:M.profileSaved,profileSaveMessage:M.profileSaveMessage,profileSaveError:M.profileSaveError})}function bl(e){return e===`industry`?[`Construction`,`Electrical`,`Cleaning`,`IT / Web / Software`,`Architecture / Engineering`,`Consulting`,`Transport`,`Equipment / Machinery`,`Landscaping`,`Security`,`Other`].map(e=>({value:e,label:e})):e===`label`?[{value:`strong`,label:M.language===`is`?`Aðeins sterkar`:`Strong only`},{value:`recommended`,label:M.language===`is`?`Mælt með`:`Recommended`},{value:`all`,label:M.language===`is`?`Allar samsvaranir`:`All matches`},{value:`all_opportunities`,label:M.language===`is`?`Öll tækifæri`:`All opportunities`},{value:`needs_review`,label:j(`needsReview`)},{value:`possible`,label:M.language===`is`?`Mögulegar samsvaranir`:`Possible matches`},{value:`Good match`,label:j(`goodMatch`)},{value:`Weak match`,label:j(`weakMatch`)}]:e===`category`?[{value:`all`,label:M.language===`is`?`Allir flokkar`:`All categories`},...Hs().map(e=>({value:e,label:e}))]:e===`location`?[{value:`all`,label:M.language===`is`?`Öll svæði`:`All locations`},...Us().map(e=>({value:e,label:kd(e)}))]:e===`type`?[{value:`all`,label:M.language===`is`?`Allar tegundir`:`All types`},...Ws().map(e=>({value:e,label:er(e.replace(`-`,` `))}))]:[]}function xl(e){let t=bl(e),n=e===`industry`?M.profileDraft?.industry||M.profile?.industry||``:M.filters[e],r=t.findIndex(e=>e.value===n);return Math.max(0,r)}function Sl(e){return Cl({key:e,value:M.filters[e],options:bl(e)})}function Cl({key:e,value:t,options:n,profileField:r=``}){let i=M.dropdown.openKey===e,a=t,o=Math.max(0,n.findIndex(e=>e.value===a)),s=i?M.dropdown.focusedIndex:o,c=`filter-${e}-trigger`,l=`filter-${e}-list`,u=n.find(e=>e.value===a)?.label||(e===`industry`?j(`selectIndustry`):n[0]?.label)||``;return`
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
        <span>${A(u)}</span>
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
                data-value="${A(t.value)}"
                ${r?`data-profile-field="${A(r)}"`:``}
                role="option"
                aria-selected="${i}"
              >
                <span>${A(t.label)}</span>
                ${i?`<span class="custom-select-check" aria-hidden="true">✓</span>`:``}
              </button>
            `}).join(``)}
        </div>
      `:``}
    </div>
  `}function wl(){M.dropdown.openKey=null,M.dropdown.focusedIndex=0,X()}function Tl(){requestAnimationFrame(()=>{document.querySelector(`.custom-select-option.is-focused`)?.focus()})}function El(e){requestAnimationFrame(()=>{document.querySelector(`[data-action="toggle-dropdown"][data-key="${e}"]`)?.focus()})}function Dl(){if(!M.user)return Pa();if(!M.profile)return dc(j(`setupCompanyFirst`),j(`dashboardNeedsProfile`));let e=gs(),t=ds(),n=_s(t),r=fs(),i=n.filter(e=>e.matchScore>=85).length,a=n.filter(e=>T(e.deadline)<=14&&T(e.deadline)>=0).length,o=M.saved.length,s=n.filter(e=>e.matchScore>=65).reduce((e,t)=>e+(t.estimatedValue||0),0),c=n.filter(ys).length,l=ws({visibleCount:e.length,storedMatchCount:t.length,filteredStoredCount:n.length,availableCount:r.length,recommendedCount:c,strongCount:i,companyName:M.profile.companyName}),u=M.lastMatchedAt?j(`matchesLastRefreshed`,{time:E(M.lastMatchedAt)}):j(`matchesAutoRefresh`);return Z(Bt({profile:M.profile,matches:e,stats:{strong:i,closingSoon:a,savedCount:o,totalValue:Vs(s)},filters:M.filters,filterSummary:l,matchStatus:M.matchStatus,opportunityLoadError:M.opportunityLoadError,isAdmin:M.isAdmin,matchingLoading:M.matchingLoading,labels:{dashboard:j(`dashboard`),welcomeCompany:j(`welcomeCompany`,{company:M.profile.companyName}),dashboardIntro:j(`dashboardIntro`,{refresh:u}),refreshing:j(`refreshing`),refreshMatches:j(`refreshMatches`),viewWeeklyReport:j(`viewWeeklyReport`),strongMatches:j(`strongMatches`),closingSoon:j(`closingSoon`),savedLabel:j(`savedLabel`),totalPotentialValue:j(`totalPotentialValue`),searchOpportunities:j(`searchOpportunities`),savedOnly:j(`savedOnly`)},renderFilterDropdown:Sl,renderOpportunityCard:Nl,renderEmptyState:()=>Ml(M.profile,M.filters.label,{availableCount:r.length,storedMatchCount:t.length,filteredStoredCount:n.length,recommendedCount:c,strongCount:i}),escapeHtml:A}))}function Ol(e){let t=[],n=Array.isArray(e?.locations)?e.locations:[],r=Array.isArray(e?.services)?e.services:[],i=Array.isArray(e?.includeKeywords)?e.includeKeywords:[],a=Array.isArray(e?.excludeKeywords)?e.excludeKeywords:[],o=n.some(e=>k(e)===`all iceland`),s=a.some(e=>{let t=k(e);return t.includes(`reykjavik`)||t.includes(`capital area`)});return o||t.push(M.language===`is`?`Bætið við Allt landið til að ná landsdekkandi útboðum og rammasamningum.`:`Add All Iceland to catch national tenders and framework agreements.`),e?.nationalProjects||t.push(M.language===`is`?`Kveikið á landsdekkandi verkefnum svo slík tækifæri birtist sem mögulegar samsvaranir.`:`Enable national projects so All Iceland opportunities appear as possible matches.`),r.length<5&&t.push(M.language===`is`?`Bætið við nákvæmari þjónustu svo VerkRadar þekki betur útboð sem passa við ykkar vinnu.`:`Add more specific services so VerkRadar can recognize notices that fit your work.`),s&&t.push(M.language===`is`?`Yfirfarið útilokunarorð fyrir Reykjavík eða höfuðborgarsvæðið. Þau geta falið útboð sem fyrirtæki utan svæðisins geta samt boðið í.`:`Review exclude keywords for Reykjavík or Capital Area. They may hide tenders that companies outside Reykjavík can still bid on.`),i.length<4&&t.push(M.language===`is`?`Bætið við fleiri leitarorðum, sérstaklega íslenskum hugtökum sem kaupendur nota í útboðum.`:`Add more include keywords, including Icelandic terms buyers may use in notices.`),t.length||t.push(M.language===`is`?`Yfirfarið þjónustu, svæði og leitarorð svo þau lýsi verkefnunum sem þið viljið raunverulega bjóða í.`:`Review services, locations and keywords to make sure they describe the work you actually want to bid on.`),t}function kl(e,t={}){return M.language===`is`?e===`all`?{eyebrow:`Engar samsvaranir`,title:`Engin tækifæri fundust fyrir þennan prófíl enn.`,body:`Víkkið þjónustu, svæði eða leitarorð til að finna fleiri tækifæri.`}:e===`all_opportunities`?{eyebrow:`Engin tækifæri`,title:`Engin tiltæk tækifæri enn.`,body:`Flytjið inn fleiri heimildir eða skoðið heimildayfirlit í Admin.`}:e===`needs_review`?{eyebrow:`Ekkert þarf staðfestingu`,title:`Engin tækifæri þarfnast staðfestingar núna.`,body:`Tækifæri úr breiðum heimildum sem þarf að yfirfara birtast hér.`}:e===`strong`?{eyebrow:`Engar sterkar samsvaranir`,title:`Engar sterkar samsvaranir enn.`,body:`Þið gætuð samt átt gagnlegar mögulegar samsvaranir. Prófið Mælt með eða Allar samsvaranir.`}:e===`possible`||e===`Possible match`||e===`Weak match`?{eyebrow:`Engar mögulegar samsvaranir`,title:`Engar mögulegar samsvaranir enn.`,body:`Prófið að víkka þjónustu, svæði eða leitarorð til að finna óvissari tækifæri.`}:{eyebrow:`Engar ráðlagðar samsvaranir`,title:Al(t),body:jl(t)}:e===`all`?{eyebrow:`No matches`,title:`No opportunities found for this profile yet.`,body:`Broaden your services, locations or keywords to find more opportunities.`}:e===`all_opportunities`?{eyebrow:`No opportunities`,title:`No available opportunities yet.`,body:`Import more sources or check Admin source coverage.`}:e===`needs_review`?{eyebrow:`No needs-review items`,title:`No needs-review opportunities right now.`,body:`Broad-feed opportunities that need manual verification will appear here.`}:e===`strong`?{eyebrow:`No strong matches`,title:`No strong matches yet.`,body:`You may still have useful possible matches. Switch to Recommended or All matches to review them.`}:e===`possible`||e===`Possible match`||e===`Weak match`?{eyebrow:`No possible matches`,title:`No possible matches yet.`,body:`Try broadening your services, locations or keywords to find lower-confidence opportunities.`}:{eyebrow:`No recommended matches`,title:Al(t),body:jl(t)}}function Al(e={}){let t=e.companyName||(M.language===`is`?`þennan prófíl`:`this profile`);return Number(e.strongCount||0)>0?M.language===`is`?`${e.strongCount} sterkar samsvaranir eru faldar af síum.`:`${e.strongCount} strong ${Number(e.strongCount)===1?`match is`:`matches are`} hidden by filters.`:M.language===`is`?`Engar ráðlagðar samsvaranir fyrir ${t} enn.`:`No recommended matches for ${t} yet.`}function jl(e={}){let t=Number(e.strongCount||0),n=Number(e.filteredStoredCount||0),r=Number(e.availableCount||0);return t>0?M.language===`is`?`Hreinsið leit/flokka/svæðissíur eða slökkvið á Aðeins vistað til að sjá sterku samsvaranirnar.`:`Clear search/category/location filters or turn off Saved only to see the strong matches.`:n>0?M.language===`is`?`${n} tækifæri eru til, en falin af gæðasíum. Notið Allar samsvaranir eða Þarfnast staðfestingar til að skoða þau.`:`${n} ${n===1?`opportunity is`:`opportunities are`} available, but hidden from Recommended by quality checks. Use All matches or Needs review to inspect them.`:M.language===`is`?`${r} tækifæri eru til í kerfinu, en ekkert passar nógu sterkt við þennan prófíl.`:`${r} opportunities are available in the system, but none match this profile strongly enough.`}function Ml(e,t=M.filters.label,n={}){let r=Ol(e);return zt({copy:kl(t,{...n,companyName:e?.companyName}),suggestions:r,labels:{improveProfile:j(`improveProfile`),includeNationalOpportunities:j(`includeNationalOpportunities`),showAllStoredMatches:j(`showAllStoredMatches`),inspectAllOpportunities:j(`inspectAllOpportunities`)},escapeHtml:A})}function Nl(e){return Vt({opp:e,saved:M.saved.includes(e.id),deadline:Bs(e),sourceBadgeHtml:`<span class="source-pill source-badge">${A(e.source)}</span>`,qualityBadgeHtml:Rl(e),safetyBadgeHtml:zl(e),extractedBadgeHtml:Ul(e),originalLanguageBadgeHtml:Pl(e)?`<span class="source-pill source-badge muted-badge">${A(j(`originalLanguage`))}</span>`:``,matchBadgeClass:Gs(e.matchLabel),matchLabel:wd(e.matchLabel),buyer:Ed(e),location:Dd(e),value:Vs(e.estimatedValue),reasons:e.matchReasons.slice(0,3).map(Ad),labels:{details:j(`details`),saved:j(`saved`),save:j(`save`),ignore:j(`ignore`)},escapeHtml:A})}function Pl(e){return/ted|tenders electronic daily/i.test(String(e.source||``))}function Fl(e){let t=z(e);return{confirmed_tender:`Confirmed tender`,early_signal:`Early signal`,needs_review:`Needs review`}[t]||er(t.replace(/_/g,` `))}function Il(e){return{confirmed_tender:`Confirmed tender`,early_opportunity:`Early opportunity`,market_signal:`Market signal`,news_context:`News context`,not_opportunity:`Not an opportunity`}[Yi(e)||e]||er(String(e||`market_signal`).replace(/_/g,` `))}function Ll(e){let t=B(e);return t===`news_context`||t===`not_opportunity`||t===`market_signal`?Il(t):V(e)?Wl(Xi(e)):Fl(z(e.qualityStatus,e))}function Rl(e){return`<span class="source-pill source-badge quality-badge ${A(B(e)||z(e.qualityStatus,e))}">${A(Cd(Ll(e)))}</span>`}function zl(e){if(!e||!e.safetyStatus)return``;let t=ms(e);return`<span class="source-pill source-badge safety-badge ${A(t)}">${A(Bl(t))}</span>`}function Bl(e){let t=String(e||``).toLowerCase();return(M.language===`is`?{auto_approved:`Sjálfkrafa samþykkt`,needs_review:`Þarfnast yfirferðar`,hidden:`Falið`}:{auto_approved:`Auto-approved`,needs_review:`Needs review`,hidden:`Hidden`})[t]||er(t.replace(/_/g,` `))}function Vl(e){return e?M.language===`is`?`Hæft í tilkynningu`:`Alert eligible`:M.language===`is`?`Ekki hæft í tilkynningu`:`Not alert eligible`}function Hl(e){let t=String(e||``);return M.language===`is`?{"Valid future deadline found":`Gildur framtíðarskilafrestur fannst`,"Recent high-intent procurement signal":`Nýlegt merki frá sterkri útboðsheimild`,"Strong service/work-type fit":`Sterk samsvörun við þjónustu eða verkflokk`,"No reliable deadline was found":`Áreiðanlegur skilafrestur fannst ekki`,"Buyer is missing or generic":`Kaupandi vantar eða er of almennur`,"Match depends on broad or low-confidence terms":`Samsvörun byggir á breiðum eða óvissum orðum`,"Possible service mismatch for this company profile":`Mögulegt ósamræmi við þjónustu fyrirtækisins`,"Mentions design, consulting, supervision, or project management terms":`Inniheldur orð tengd hönnun, ráðgjöf, eftirliti eða verkefnastjórnun`,"Tender appears already awarded or already tendered":`Útboð virðist þegar auglýst eða útboði lokið`,"Stale or expired opportunity signal":`Gamalt eða útrunnið tækifæri`,"Current opportunity is plausible but needs review before customer alerts":`Tækifærið gæti átt við en þarf yfirferð áður en það fer í tilkynningu`,"Admin override includes this opportunity in customer reports":`Admin hefur samþykkt birtingu í viðskiptavinayfirlitum`,"Excluded by customer eligibility, duplicate, stale, hidden, demo, or expired filters":`Falið vegna reglna um birtingu, afrit, aldur, prófunargögn eða útrunnið tækifæri`}[t]||$(t):t}function Ul(e){if(e?.rawPayload?.extraction_method!==`vegagerdin_article_project_parser`)return``;let t=e.rawPayload?.region?` · ${e.rawPayload.region}`:``;return`<span class="source-pill source-badge muted-badge">${A(j(`extractedProject`))}${A(t)}</span>`}function Wl(e){return{tender_awarded:j(`tenderAwarded`),awarded:j(`tenderAwarded`),already_tendered:j(`tenderAlreadyAnnounced`),announced:j(`tenderAlreadyAnnounced`),upcoming_tender:j(`upcomingTender`),project_signal:j(`projectSignal`),open_or_published:j(`tenderAlreadyAnnounced`),planned_tender:j(`upcomingTender`),unclear:j(`projectSignal`)}[String(e||``)]||er(String(e||``).replace(/_/g,` `))}function Gl(e){let t=B(e);return t===`news_context`||t===`not_opportunity`?`<div class="note-panel quality-warning">${A(M.language===`is`?`Þetta lítur út eins og frétta- eða umferðarefni, ekki tækifæri fyrir viðskiptavin.`:`This looks like news or traffic context, not a customer-facing opportunity.`)}</div>`:z(e.qualityStatus,e)===`needs_review`?V(e)?`<div class="note-panel quality-warning">${A(M.language===`is`?`Útdregin verkefnavísbending — staðfestið útboðstímasetningu í heimildargrein.`:`Extracted project signal — verify tender timing in the source article.`)}</div>`:`<div class="note-panel quality-warning">${A(M.language===`is`?`Innflutt úr breiðum straumi — staðfestið á upprunasíðu.`:`Imported from broad feed — verify source page.`)}</div>`:``}function Kl(e){let t=M.saved.includes(e.id),n=Bs(e),r=Array.isArray(e.requirements)?e.requirements:[],i=Array.isArray(e.matchReasons)?e.matchReasons:[],a=Array.isArray(e.risks)?e.risks:[],o=Array.isArray(e.nextSteps)?e.nextSteps:[],s=[V(e)?`<p><strong>${A(j(`extraction`))}:</strong> ${A(M.language===`is`?`Útdregið úr grein Vegagerðarinnar`:`Extracted from Vegagerðin article`)}</p>`:``,e.rawPayload?.parent_article_title?`<p><strong>${A(j(`sourceArticle`))}:</strong> ${A(e.rawPayload.parent_article_title)}</p>`:``,e.rawPayload?.parent_url?`<p><strong>${A(j(`parentArticle`))}:</strong> <a href="${A(e.rawPayload.parent_url)}" target="_blank" rel="noreferrer">${A(j(`openSourceArticle`))}</a></p>`:``,e.rawPayload?.region?`<p><strong>${A(j(`extractedRegion`))}:</strong> ${A(e.rawPayload.region)}</p>`:``,e.rawPayload?.project_number?`<p><strong>${A(j(`projectNumber`))}:</strong> ${A(e.rawPayload.project_number)}</p>`:``,V(e)?`<p><strong>${A(j(`tenderState`))}:</strong> ${A(Wl(Xi(e)))}</p>`:``].join(``);return Ht({opp:e,saved:t,deadline:n,requirements:r,matchReasons:i.length?i.map(Ad):[],risks:a.length?a.map($):[j(`noMajorRisks`)],safetyReasons:[...Array.isArray(e.safetyReasons)?e.safetyReasons:[],...a.length?a.map($):[j(`noMajorRisks`)]].map(Hl),nextSteps:o.map(jd),matchBadgeClass:Gs(e.matchLabel),matchLabel:wd(e.matchLabel),qualityBadgeHtml:Rl(e),safetyBadgeHtml:zl(e),extractedBadgeHtml:Ul(e),qualityWarningHtml:Gl(e),buyerSummary:Od(`buyer`,e.buyer),location:Dd(e),value:e.estimatedValue?Vs(e.estimatedValue):j(`notListed`),sourceUrl:e.url,extractedDetails:s,qualityLabel:Cd(Ll(e)),safetyStatusLine:e.safetyStatus?`<p><strong>${A(M.language===`is`?`Öryggisflokkun`:`Safety status`)}:</strong> ${A(Bl(e.safetyStatus))} · ${A(Vl(e.alertEligible))}</p>`:``,category:Od(`category`,e.category),type:Od(`type`,e.type),publishedDate:e.publishedDate,cpvCode:e.cpvCode,labels:{description:j(`description`),noDescription:j(`noDescription`),requirements:j(`requirements`),noSpecificRequirements:j(`noSpecificRequirements`),matchReasons:j(`matchReasons`),noMatchReasons:j(`noMatchReasons`),opportunityInfo:j(`opportunityInfo`),source:j(`source`),sourceValue:Od(`source`,e.source),quality:j(`quality`),category:j(`category`),type:j(`type`),deadline:j(`deadline`),deadlineLabel:$(n.label),published:j(`published`),cpv:j(`cpv`),risksToCheck:j(`risksToCheck`),recommendedNextSteps:j(`recommendedNextSteps`),openSourceAndConfirm:j(`openSourceAndConfirm`),removeFromSaved:j(`removeFromSaved`),saveOpportunity:j(`saveOpportunity`),openSource:j(`openSource`),markNotRelevant:j(`markNotRelevant`)},escapeHtml:A})}function ql(){if(!M.user)return Pa();if(!M.isAdmin)return Fa();let e=Xc(),t=M.adminCompanies.find(e=>e.id===M.selectedAdminCompanyId);return Z(`
    <section class="page-head">
      <p class="eyebrow">Admin</p>
      <h1>Operations dashboard</h1>
      <p>Admin tools for monitoring imports, reviewing customers, managing sources and handling manual entries.</p>
    </section>

    ${M.adminMessage?`
      <div class="admin-message ${M.adminMessage.type===`error`?`is-error`:`is-success`}">
        ${A(M.adminMessage.text)}
      </div>
    `:``}

    ${M.opportunityLoadError?`
      <div class="note-panel">
        ${A(M.opportunityLoadError)}
      </div>
    `:``}

    ${Jl()}
    ${Yl(e)}
    ${t?Tu(t):``}
  `)}function Jl(){return`
    <div class="admin-tabs" role="tablist" aria-label="Admin sections">
      ${[[`overview`,`Overview`],[`companies`,`Companies`],[`review`,`Review Queue`],[`trial-requests`,`Trial Requests`],[`sources`,`Sources/imports`],[`opportunities`,`Opportunities`],[`reports`,`Reports`]].map(([e,t])=>`
        <button type="button" class="${M.adminActiveTab===e?`is-active`:``}" data-action="admin-tab" data-tab="${e}">
          ${A(t)}
        </button>
      `).join(``)}
    </div>
  `}function Yl(e){return M.adminActiveTab===`companies`?xu():M.adminActiveTab===`review`?Zl():M.adminActiveTab===`trial-requests`?Ql():M.adminActiveTab===`sources`?`
      ${Ec()}
      ${Oc()}
      ${Bc()}
      ${kc()}
      ${Pc()}
    `:M.adminActiveTab===`opportunities`?wu(e):M.adminActiveTab===`reports`?Fc():`
    ${Xl()}
    ${Xe({escapeHtml:A,isRunning:!!M.adminDailyPipelineLoading,result:M.adminDailyPipelineResult||null})}
    ${At({escapeHtml:A,usageSummary:M.adminAiUsageSummary||null,lastResult:M.adminAutomaticAiReviewResult||null,isRunning:!!M.adminAutomaticAiReviewLoading,formatAiUsageCost:Fe})}
    ${Ec()}
    ${xu(!0)}
  `}function Xl(){let e=M.adminCompanies||[],t=M.opportunities||[],n=wc(),r=e.filter(e=>e.profileStatus===`Complete`).length,i=Math.max(0,e.length-r);return`
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
        <div><span>Confirmed tenders</span><strong>${t.filter(e=>z(e.qualityStatus,e)===`confirmed_tender`).length}</strong></div>
        <div><span>Early signals</span><strong>${t.filter(e=>z(e.qualityStatus,e)===`early_signal`).length}</strong></div>
        <div><span>Needs review</span><strong>${t.filter(e=>z(e.qualityStatus,e)===`needs_review`).length}</strong></div>
        <div><span>Latest import status</span><strong>${A(n?.status||`No runs`)}</strong></div>
      </div>
    </section>
  `}function Zl(){let e=M.adminReviewMatches||[],t=ou();return`
    <section class="ops-card">
      <div class="card-header">
        <div>
          <h2>${A(t.title)}</h2>
          <p>${M.adminReviewLoading?A(t.loading):A(t.count(e.length))}</p>
        </div>
        <button class="btn btn-ghost btn-small" type="button" data-action="refresh-admin-status">Refresh</button>
      </div>
      ${M.adminReviewError?`<div class="admin-message is-error">${A(M.adminReviewError)}</div>`:``}
      ${M.adminReviewLoading&&!e.length?`<div class="empty-card">${A(t.loading)}</div>`:e.length?`
        <div class="admin-review-list">
          ${e.map(gu).join(``)}
        </div>
      `:`<div class="empty-card">${A(t.empty)}</div>`}
    </section>
  `}function Ql(){let e=M.adminTrialRequests||[],t=au();return`
    <section class="ops-card">
      <div class="card-header">
        <div>
          <h2>Trial Requests</h2>
          <p>${M.adminTrialRequestsLoading?`Loading trial requests...`:`${e.length} request${e.length===1?``:`s`} received.`}</p>
        </div>
        <button class="btn btn-ghost btn-small" type="button" data-action="refresh-admin-status">Refresh</button>
      </div>
      ${M.adminTrialRequestsError?`<div class="admin-message is-error">${A(M.adminTrialRequestsError)}</div>`:``}
      ${M.adminTrialRequestsLoading&&!e.length?`<div class="empty-card">Loading trial requests...</div>`:e.length?`
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
              ${e.map($l).join(``)}
            </tbody>
          </table>
        </div>
      `:`<div class="empty-card">No trial requests yet.</div>`}
    </section>
    ${t?eu(t):``}
  `}function $l(e){return`
    <tr class="${M.selectedAdminTrialRequestId===e.id?`is-selected`:``}">
      <td><strong>${A(e.company_name||`—`)}</strong></td>
      <td>${A(e.contact_name||`—`)}</td>
      <td>${A(e.email||`—`)}</td>
      <td>${A(e.phone||`—`)}</td>
      <td>${A(e.services||`—`)}</td>
      <td>${A(e.locations||`—`)}</td>
      <td>${nu(e.status)}</td>
      <td>${A(e.created_at?E(e.created_at):`—`)}</td>
      <td>
        <button class="btn btn-secondary btn-small" type="button" data-action="view-admin-trial-request" data-id="${A(e.id)}">Opna</button>
      </td>
    </tr>
  `}function eu(e){let t=M.adminTrialRequestActions?.[e.id],n=e.status===`converted`||!!e.converted_company_id;return`
    <section class="ops-card admin-trial-detail-card">
      <div class="card-header">
        <div>
          <h2>${A(e.company_name||`Trial request`)}</h2>
          <p>${nu(e.status)} · ${A(e.created_at?E(e.created_at):`—`)}</p>
        </div>
        <button class="btn btn-ghost btn-small" type="button" data-action="close-admin-trial-request">Close</button>
      </div>
      ${M.adminTrialCompanyError?`<div class="admin-message is-error">${A(M.adminTrialCompanyError)}</div>`:``}
      ${M.adminTrialCompanyMessage?`<div class="admin-message is-success">${A(M.adminTrialCompanyMessage)}</div>`:``}
      <div class="admin-trial-detail-grid">
        ${Q(`Fyrirtæki`,e.company_name)}
        ${Q(`Tengiliður`,e.contact_name)}
        ${Q(`Netfang`,e.email)}
        ${Q(`Sími`,e.phone)}
        ${Q(`Þjónusta`,e.services,!0)}
        ${Q(`Svæði`,e.locations,!0)}
        ${Q(`Athugasemd`,e.message,!0)}
        ${Q(`Staða`,vn(e.status))}
        ${Q(`Tilkynning`,ru(e),!0)}
        ${Q(`Stofnað`,e.created_at?E(e.created_at):``)}
      </div>
      <div class="admin-trial-actions">
        <button class="btn btn-secondary" type="button" data-action="admin-trial-request-status" data-id="${A(e.id)}" data-status="contacted" ${t||n?`disabled`:``}>${t===`contacted`?`Vista...`:`Merkja haft samband`}</button>
        <button class="btn btn-ghost" type="button" data-action="admin-trial-request-status" data-id="${A(e.id)}" data-status="rejected" ${t||n?`disabled`:``}>${t===`rejected`?`Vista...`:`Hafna`}</button>
        <button class="btn btn-primary" type="button" data-action="admin-start-trial-company" data-id="${A(e.id)}" ${n?`disabled`:``}>Stofna fyrirtæki</button>
        ${e.converted_company_id?`<button class="btn btn-secondary" type="button" data-action="view-admin-company" data-id="${A(e.converted_company_id)}">Opna fyrirtæki</button>`:``}
      </div>
      ${M.adminTrialCompanyDraft?tu(e):``}
    </section>
  `}function tu(e){return`
    <div class="admin-trial-company-form-wrap">
      <div class="section-heading">
        <p class="eyebrow">Company profile</p>
        <h3>Stofna fyrirtæki úr prufubeiðni</h3>
        <p>Yfirfarðu og kláraðu venjulega fyrirtækjaprófílinn áður en hann er vistaður. Enginn innskráningaraðgangur eða boð er stofnað sjálfkrafa.</p>
      </div>
      ${rn({t:j,escapeHtml:A,capitalize:er,arrayFieldText:uo,formatCustomerLocation:kd,getFilterOptions:bl,getProfileSuggestions:mo,renderCustomDropdown:Cl,renderSuggestionChips:yo,formId:`admin-trial-company-form`,profileDraft:M.adminTrialCompanyDraft||_n(e,()=>o(``)),accountEmail:``,hasProfile:!1,isSavingProfile:M.adminTrialCompanySaving,profileSaved:!1,profileSaveMessage:null,profileSaveError:M.adminTrialCompanyError})}
    </div>
  `}function Q(e,t,n=!1){return`
    <div class="admin-trial-detail-field ${n?`is-wide`:``}">
      <span>${A(e)}</span>
      <strong>${A(t||`—`)}</strong>
    </div>
  `}function nu(e){let t=String(e||`new`).toLowerCase();return`<span class="status-pill ${t===`converted`?`is-success`:t===`rejected`?`is-danger`:t===`contacted`?`is-warning`:`is-running`}">${A(vn(e))}</span>`}function ru(e){return e.notification_sent_at?`Tilkynning send ${E(e.notification_sent_at)}`:e.notification_started_at?`Tilkynning í vinnslu`:e.notification_error?`Tilkynning mistókst: ${e.notification_error}`:`Tilkynning ekki send`}function iu(e){return(M.adminTrialRequests||[]).find(t=>t.id===e)||null}function au(){return iu(M.selectedAdminTrialRequestId)}function ou(){return{title:`Review Queue`,loading:`Loading review queue...`,empty:`No uncertain matches need review.`,count:e=>`${e} uncertain match${e===1?``:`es`} need review.`,opportunity:`Opportunity`,company:`Company`,source:`Source`,buyer:`Buyer`,region:`Region`,deadline:`Deadline`,score:`Score`,safety:`Safety`,alert:`Alert`,safetyReasons:`Safety reasons`,matchReasons:`Match reasons`,aiReview:`AI review`,aiReviewButton:`AI review`,aiReviewing:`Reviewing...`,aiFit:`Fit`,aiConfidence:`Confidence`,aiSend:`Send to client`,aiSummary:`Suggested client summary`,aiNoReview:`No AI review saved yet.`,approve:`Approve`,approving:`Approving...`,reject:`Reject`,rejecting:`Rejecting...`,noSource:`No source URL`,hidden:`Hidden from reports`,notHidden:`Not hidden from reports`,sourceUrl:`Source URL`}}function su(e){let t=e?.source||e?.rawPayload?.source_name||``;return lr(e?.buyer,t,e?.rawPayload||{})||`Unknown buyer`}function cu(e){return ur(e?.source||e?.rawPayload?.source_name||``)||e?.location||`Unknown`}function lu(e){let t=String(e?.deadlineAt||e?.rawPayload?.deadline_at||``).trim().match(/^(\d{4}-\d{2}-\d{2})[T\s](\d{2}):(\d{2})/);return t?`${t[1]} ${t[2]}:${t[3]}`:e?.deadline?Zn(e.deadline):`Deadline not available in imported data — verify on source page.`}function uu(e){let t=String(e||``).toLowerCase();return{auto_approved:`Auto-approved`,needs_review:`Needs review`,hidden:`Hidden`}[t]||er(t.replace(/_/g,` `))}function du(e){return e?`Alert eligible`:`Not alert eligible`}function fu(e){return e?`Review required`:`Review not required`}function pu(e){let t=String(e||``).trim();return{"Strong match":`Strong match`,"Good match":`Good match`,"Possible match":`Possible match`,"Weak match":`Weak match`}[t]||t||`Possible match`}function mu(e){return String(e||``).trim()}function hu(e){return String(e||``).trim()}function gu(e){let t=e.opportunity||{},n=M.adminReviewActions?.[e.id]||``,r=!!M.adminAiReviewActions?.[e.id],i=nr(t.url),a=ou(),o=e.safetyReasons.length?e.safetyReasons:[`Needs admin review`],s=e.matchReasons.length?e.matchReasons:[`Profile match`];return`
    <article class="admin-review-card">
      <div class="admin-review-card-top">
        <div class="admin-review-title-block">
          <span class="eyebrow">${A(a.opportunity)}</span>
          <h3>${A(t.title||`Untitled opportunity`)}</h3>
          <p>${A(a.company)}: <strong>${A(e.companyName)}</strong></p>
          <p>${A(a.source)}: <strong>${A(t.source||`Unknown source`)}</strong></p>
          ${i?`<p class="admin-source-url"><span>${A(a.sourceUrl)}:</span> ${A(i)}</p>`:``}
        </div>
        <div class="admin-review-source-action">
          ${i?`<a class="btn btn-secondary btn-small" href="${A(i)}" target="_blank" rel="noopener">Open source ↗</a>`:`<span class="admin-chip">${A(a.noSource)}</span>`}
        </div>
      </div>

      <div class="admin-review-meta-grid">
        ${yu(a.buyer,su(t))}
        ${yu(a.region,cu(t))}
        ${yu(a.deadline,lu(t))}
        ${yu(a.score,`${pu(e.matchLabel)} · ${Number(e.matchScore||0)}`)}
        ${yu(a.safety,uu(e.safetyStatus))}
        ${yu(a.alert,`${du(e.alertEligible)} · ${fu(e.reviewRequired)}`)}
      </div>

      <div class="admin-review-reasons">
        <section class="admin-review-reason-box is-warning">
          <h4>${A(a.safetyReasons)}</h4>
          <ul>
            ${o.map(e=>`<li>${A(e)}</li>`).join(``)}
          </ul>
        </section>
        <section class="admin-review-reason-box">
          <h4>${A(a.matchReasons)}</h4>
          <ul>
            ${s.map(e=>`<li>${A(e)}</li>`).join(``)}
          </ul>
        </section>
      </div>

      ${_u(e,a)}

      <div class="admin-review-actions">
        <span class="admin-review-hidden-state">${A(t.rawPayload?.hidden_from_reports===!0?a.hidden:a.notHidden)}</span>
        <div class="admin-row-actions">
          <button class="btn btn-secondary btn-small" data-action="admin-ai-review-match" data-id="${A(e.id)}" data-force="${e.aiReview?`true`:`false`}" ${n||r?`disabled`:``}>${A(r?a.aiReviewing:e.aiReview?`Re-run AI review`:a.aiReviewButton)}</button>
          <button class="btn btn-ghost btn-small" data-action="admin-review-match" data-review-action="approve" data-id="${A(e.id)}" data-company-id="${A(e.companyId)}" ${n||r?`disabled`:``}>${A(n===`approve`?a.approving:a.approve)}</button>
          <button class="btn btn-ghost btn-small" data-action="admin-review-match" data-review-action="reject" data-id="${A(e.id)}" data-company-id="${A(e.companyId)}" ${n||r?`disabled`:``}>${A(n===`reject`?a.rejecting:a.reject)}</button>
        </div>
      </div>
    </article>
  `}function _u(e,t){let n=e.aiReview;return n?`
    <section class="admin-ai-review-box">
      <div class="admin-ai-review-header">
        <h4>${A(t.aiReview)}</h4>
        <span>${A(n.model||`model not listed`)} · ${n.updatedAt?A(E(n.updatedAt)):``}</span>
      </div>
      <div class="admin-ai-review-meta">
        <span><strong>${A(t.aiFit)}</strong>${A(vu(n.fit))}</span>
        <span><strong>${A(t.aiConfidence)}</strong>${Math.round(Number(n.confidence||0)*100)}%</span>
        <span><strong>${A(t.aiSend)}</strong>${n.sendToClient?`Yes`:`No`}</span>
      </div>
      <p>${A(n.reason||``)}</p>
      ${n.fitReasons.length?`<p><strong>Fit reasons:</strong> ${n.fitReasons.map(e=>`<span class="admin-chip">${A(e)}</span>`).join(` `)}</p>`:``}
      ${n.risksOrQuestions.length?`<p><strong>Risks/questions:</strong> ${n.risksOrQuestions.map(e=>`<span class="admin-chip">${A(e)}</span>`).join(` `)}</p>`:``}
      ${n.suggestedClientSummary?`<p><strong>${A(t.aiSummary)}:</strong> ${A(n.suggestedClientSummary)}</p>`:``}
    </section>
  `:`
      <section class="admin-ai-review-box is-empty">
        <div class="admin-ai-review-header">
          <h4>${A(t.aiReview)}</h4>
          <span>${A(t.aiNoReview)}</span>
        </div>
      </section>
    `}function vu(e){return{strong:`Strong`,possible:`Possible`,weak:`Weak`,no_fit:`No fit`}[String(e||``)]||`Weak`}function yu(e,t){return`
    <div class="admin-review-meta-item">
      <span>${A(e)}</span>
      <strong>${A(t||`—`)}</strong>
    </div>
  `}function bu(){let e=M.adminCompanyFilters;return(M.adminCompanies||[]).filter(t=>{let n=k(e.search);return!(n&&!k(`${t.companyName} ${t.contactEmail} ${t.industry}`).includes(n)||e.industry!==`all`&&t.industry!==e.industry||e.profileStatus!==`all`&&t.profileStatus!==e.profileStatus||e.plan!==`all`&&t.plan!==e.plan)})}function xu(e=!1){let t=e?(M.adminCompanies||[]).slice(0,5):bu();return`
    <section class="ops-card">
      <div class="card-header">
        <div>
          <h2>Companies / users</h2>
          <p>${M.adminCompaniesLoading?`Loading companies...`:`${t.length} shown from ${(M.adminCompanies||[]).length} total companies.`}</p>
        </div>
        ${e?``:`
          <label class="admin-inline-control">
            <span>Report mode</span>
            <select data-admin-report-mode>
              <option value="new_only" ${M.adminReportMode===`new_only`?`selected`:``}>New opportunities report</option>
              <option value="all_current" ${M.adminReportMode===`all_current`?`selected`:``}>Current active opportunities report</option>
            </select>
          </label>
        `}
      </div>
      ${M.adminCompaniesError?`<div class="admin-message is-error">${A(M.adminCompaniesError)}</div>`:``}
      ${e?``:Su()}
      ${M.adminCompaniesLoading&&!t.length?`<div class="empty-card">Loading companies...</div>`:t.length?`
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
              ${t.map(Cu).join(``)}
            </tbody>
          </table>
        </div>
      `:`<div class="empty-card">No companies found.</div>`}
    </section>
  `}function Su(){let e=M.adminCompanies||[],t=ol(e,e=>e.industry),n=ol(e,e=>e.plan),r=M.adminCompanyFilters;return`
    <div class="admin-filters admin-company-filters">
      <input data-admin-company-filter="search" value="${A(r.search)}" placeholder="Search company or email..." />
      <select data-admin-company-filter="industry">
        <option value="all">All industries</option>
        ${t.map(e=>`<option value="${A(e)}" ${r.industry===e?`selected`:``}>${A(e)}</option>`).join(``)}
      </select>
      <select data-admin-company-filter="profileStatus">
        <option value="all">All profiles</option>
        ${[`Complete`,`Incomplete`].map(e=>`<option value="${e}" ${r.profileStatus===e?`selected`:``}>${e}</option>`).join(``)}
      </select>
      <select data-admin-company-filter="plan">
        <option value="all">All plans</option>
        ${n.map(e=>`<option value="${A(e)}" ${r.plan===e?`selected`:``}>${A(e)}</option>`).join(``)}
      </select>
    </div>
  `}function Cu(e){let t=M.adminCompanyActions?.[e.id]||``,n=t===`refresh`,r=t===`report`,i=!!t;return`
    <tr>
      <td><strong>${A(e.companyName)}</strong><br><span>${A(e.contactEmail||`No email`)}</span></td>
      <td>${A(e.industry||`Unknown`)}</td>
      <td>${A(e.plan||`Demo`)}</td>
      <td><span class="status-pill ${e.profileStatus===`Complete`?`is-success`:`is-running`}">${A(e.profileStatus)}</span></td>
      <td>${A(E(e.createdAt))}</td>
      <td>${e.matchCount}</td>
      <td>${e.savedCount?e.savedCount:`Not tracked`}</td>
      <td>${e.latestReportDate?A(E(e.latestReportDate)):`No reports`}</td>
      <td>
        <div class="admin-row-actions">
          <button class="btn btn-secondary btn-small" type="button" data-action="view-admin-company" data-id="${A(e.id)}" ${i?`disabled`:``}>View details</button>
          <button class="btn btn-ghost btn-small" type="button" data-action="admin-refresh-company-matches" data-id="${A(e.id)}" ${i?`disabled`:``}>${n?`Refreshing...`:`Refresh matches`}</button>
          <button class="btn btn-ghost btn-small" type="button" data-action="admin-generate-company-report" data-id="${A(e.id)}" ${i?`disabled`:``}>${r?`Generating...`:`Generate report`}</button>
        </div>
      </td>
    </tr>
  `}function wu(e){let t={...Br(),...M.adminOpportunityDraft||{}};return`
    <section class="admin-list">
      <div class="card-header">
        <div>
          <h2>Existing opportunities</h2>
          <p>${(M.opportunities||[]).length} loaded ${M.opportunityLoadError?`from fallback data`:`from Supabase`}.</p>
        </div>
      </div>
      ${sl(e)}
      ${e.length?e.map(Du).join(``):`<div class="empty-card">No opportunities loaded.</div>`}
    </section>

    <form class="form-card admin-form" id="admin-opportunity-form">
      <div class="form-section">
        <h2>Add opportunity</h2>
        <div class="form-grid">
          <label>Title <input name="title" data-admin-opportunity-field="title" value="${A(t.title)}" required /></label>
          <label>Buyer <input name="buyer" data-admin-opportunity-field="buyer" value="${A(t.buyer)}" /></label>
          <label>Source name <input name="sourceName" data-admin-opportunity-field="sourceName" value="${A(t.sourceName)}" required /></label>
          <label>Category <input name="category" data-admin-opportunity-field="category" value="${A(t.category)}" /></label>
          <label>Type <input name="type" data-admin-opportunity-field="type" value="${A(t.type)}" /></label>
          <label>Deadline <input type="date" name="deadline" data-admin-opportunity-field="deadline" value="${A(t.deadline)}" /></label>
          <label>Published date <input type="date" name="published_date" data-admin-opportunity-field="published_date" value="${A(t.published_date)}" /></label>
          <label>Location <input name="location" data-admin-opportunity-field="location" value="${A(t.location)}" /></label>
          <label>Estimated value <input type="number" min="0" step="1" name="estimated_value" data-admin-opportunity-field="estimated_value" value="${A(t.estimated_value)}" /></label>
          <label>URL <input type="url" name="url" data-admin-opportunity-field="url" value="${A(t.url)}" /></label>
          <label>CPV code <input name="cpv_code" data-admin-opportunity-field="cpv_code" value="${A(t.cpv_code)}" /></label>
          <label>Difficulty <input name="difficulty" data-admin-opportunity-field="difficulty" value="${A(t.difficulty)}" /></label>
          <label>Status <input name="status" data-admin-opportunity-field="status" value="${A(t.status)}" /></label>
        </div>
        <label>Description <textarea name="description" data-admin-opportunity-field="description" rows="4">${A(t.description)}</textarea></label>
        <label>Requirements comma-separated <textarea name="requirements" data-admin-opportunity-field="requirements" rows="3">${A(t.requirements)}</textarea></label>
        <label>Keywords comma-separated <textarea name="keywords" data-admin-opportunity-field="keywords" rows="3">${A(t.keywords)}</textarea></label>
      </div>

      <div class="form-actions">
        <button class="btn btn-primary btn-large" type="submit" ${M.adminSubmitting?`disabled`:``}>
          ${M.adminSubmitting?`Saving...`:`Add opportunity`}
        </button>
      </div>
    </form>

    ${pl()}
  `}function Tu(e){let t=[e.minProjectValue?Vs(e.minProjectValue):`No minimum`,e.maxProjectValue?Vs(e.maxProjectValue):`No maximum`].join(` - `),n=nr(e.website);return`
    <div class="modal-backdrop">
      <div class="modal admin-company-modal" role="dialog" aria-modal="true">
        <div class="modal-header">
          <div>
            <span class="status-pill ${e.profileStatus===`Complete`?`is-success`:`is-running`}">${A(e.profileStatus)}</span>
            <h2>${A(e.companyName)}</h2>
            <p>${A(e.contactEmail||`No contact email`)} · ${A(e.industry||`Unknown industry`)}</p>
          </div>
          <button type="button" class="icon-btn modal-close-btn" data-action="close-admin-company" aria-label="Close company details">×</button>
        </div>
        <div class="modal-body">
          <div class="admin-detail-grid">
            <section class="side-panel">
              <h3>Company basics</h3>
              <p><strong>Email:</strong> ${A(e.contactEmail||`Unknown`)}</p>
              <p><strong>Contact name:</strong> ${A(e.contactName||`Not listed`)}</p>
              <p><strong>Phone:</strong> ${A(e.phone||`Not listed`)}</p>
              <p><strong>Kennitala:</strong> ${A(e.kennitala||`Not listed`)}</p>
              <p><strong>Address:</strong> ${A(e.address||`Not listed`)}</p>
              <p><strong>Website:</strong> ${n?`<a href="${A(n)}" target="_blank" rel="noreferrer">${A(e.website)}</a>`:A(e.website||`Not listed`)}</p>
              <p><strong>Industry:</strong> ${A(e.industry||`Unknown`)}</p>
              <p><strong>Created:</strong> ${A(E(e.createdAt))}</p>

              <h3>Billing</h3>
              <p><strong>Selected plan:</strong> ${A(e.selectedPlan||e.plan||`Not selected`)}</p>
              <p><strong>Billing status:</strong> ${A(e.billingStatus||`Not set`)}</p>
              <p><strong>Billing email:</strong> ${A(e.billingEmail||e.contactEmail||`Not listed`)}</p>
              <p><strong>Trial started:</strong> ${e.trialStartedAt?A(E(e.trialStartedAt)):`Not set`}</p>
              <p><strong>Trial ends:</strong> ${e.trialEndsAt?A(E(e.trialEndsAt)):`Not set`}</p>

              <h3>Project preferences</h3>
              <p><strong>Project size:</strong> ${A(t)}</p>
              <p><strong>Unknown value:</strong> ${e.allowUnknownValue?`Allowed`:`Not preferred`}</p>
              <p><strong>Travel:</strong> ${e.willingToTravel?`Yes`:`No`}</p>
              <p><strong>National:</strong> ${e.nationalProjects?`Yes`:`No`}</p>
              <p><strong>Remote:</strong> ${e.remoteProjects?`Yes`:`No`}</p>
            </section>

            <section class="side-panel">
              <h3>Services</h3>
              ${Eu(e.services,`No services saved.`)}
              <h3>Include keywords</h3>
              ${Eu(e.includeKeywords,`No include keywords saved.`)}
              <h3>Exclude keywords</h3>
              ${Eu(e.excludeKeywords,`No exclude keywords saved.`)}
            </section>

            <section class="side-panel">
              <h3>Locations and service areas</h3>
              <p><strong>Base:</strong> ${A(e.baseLocation||`Not set`)}</p>
              ${Eu([...e.locations,...e.serviceAreas],`No locations saved.`)}
              <h3>Reports</h3>
              <p><strong>Frequency:</strong> ${A(e.reportFrequency)}</p>
              <p><strong>Day:</strong> ${A(e.reportDay)}</p>
              <p><strong>Deadline reminders:</strong> ${e.deadlineReminders?`On`:`Off`}</p>
            </section>

            ${ot(e,{escapeHtml:A,formatDateTime:E,inviteEmail:yi(e),inviteLink:M.adminCompanyInviteLinks?.[e.id]||``,inviteDebug:M.adminCompanyInviteDebug?.[e.id]||null,actionState:M.adminCompanyAccessActions?.[e.id]||``})}

            ${vt(e,{escapeHtml:A,actionState})}

            <section class="side-panel">
              <h3>Latest matches</h3>
              ${jt(e,{escapeHtml:A,renderMatchDecisionControls:yt})}
              <h3>Latest reports</h3>
              ${e.latestReports.length?`
                <ul class="admin-detail-list">
                  ${e.latestReports.map(e=>`
                    <li>
                      <strong>${A(e.title||`Report`)}</strong>
                      <span>${A(E(e.created_at))}</span>
                    </li>
                  `).join(``)}
                </ul>
              `:`<p>No reports generated yet.</p>`}
            </section>

            ${Mt(e,{escapeHtml:A,formatDateTime:E,actionState:M.adminCompanyAiReviewActions?.[e.id]?`running`:``,filter:M.adminCompanyAiReviewFilter,lastResult:M.adminCompanyAiReviewResults?.[e.id]||null,usageSummary:M.adminAiUsageSummary||null,formatAiUsageCost:Fe})}
          </div>
        </div>
      </div>
    </div>
  `}function Eu(e,t){let n=O(e);return n.length?`<div class="admin-tag-list">${n.map(e=>`<span>${A(e)}</span>`).join(``)}</div>`:`<p>${A(t)}</p>`}function Du(e){let t=M.adminUpdatingId===e.id,n=B(e),r=Bs(e),i=e.rawPayload?.hidden_from_reports===!0||[`hidden`,`noise`,`deleted`].includes(String(e.rawPayload?.admin_report_status||``).toLowerCase()),a=ad(e)?e.rawPayload?.duplicate_reason||`Duplicate of ${e.rawPayload?.canonical_opportunity_id||e.rawPayload?.duplicate_of||`canonical opportunity`}`:``,o=ea({title:e.title,description:e.description,content:`${e.category||``} ${e.source||``} ${Array.isArray(e.keywords)?e.keywords.join(` `):``}`,publishedDate:e.publishedDate,deadline:e.deadline,sourceName:e.source,sourceType:e.sourceType,connectorType:e.rawPayload?.connector_type}),s=e.rawPayload?.stale_reason||(o.isStale?o.reason:``),c=nr(e.url||e.rawPayload?.source_url||``);return`
    <div class="admin-row">
      <div>
        <h3>${A(e.title)}</h3>
        <div class="admin-opportunity-review-meta">
          ${Ou(e)}
          <span><strong>Bætt við:</strong> ${A(Au(e.createdAt))}</span>
          <span><strong>Síðast uppfært:</strong> ${A(Au(e.updatedAt))}</span>
          <span><strong>Source:</strong> ${A(e.source||`Unknown source`)}</span>
          <span><strong>Deadline:</strong> ${A(r.label||`Not listed`)}</span>
          <span><strong>External ID:</strong> ${A(e.externalId||`Not listed`)}</span>
        </div>
        <p><strong>Source:</strong> ${A(e.source||`Unknown source`)} · <strong>Buyer:</strong> ${A(su(e))} · <strong>Region:</strong> ${A(cu(e))} · <strong>Status:</strong> ${A(e.status)}</p>
        <p><strong>Source URL:</strong> ${c?`<a href="${A(c)}" target="_blank" rel="noreferrer">${A(c)}</a>`:`Not listed`} · <strong>External ID:</strong> ${A(e.externalId||`Not listed`)}</p>
        <p>Quality: ${A(Ll(e))} · Intent: ${A(Il(n))}${i?` · Hidden from reports`:``}${a?` · Duplicate: ${A(a)}`:``}${s?` · Stale / expired: ${A(s)}`:``}</p>
        <p>Debug: hidden_from_reports=${e.rawPayload?.hidden_from_reports===!0?`true`:`false`} · admin_report_status=${A(e.rawPayload?.admin_report_status||`none`)} · stale_status=${A(e.rawPayload?.stale_status||`none`)}</p>
        ${ju(e)}
      </div>
      <div class="admin-row-actions">
        <button class="btn btn-ghost btn-small" data-action="admin-report-override" data-override="confirmed_tender" data-id="${A(e.id)}" ${t?`disabled`:``}>Confirmed tender</button>
        <button class="btn btn-ghost btn-small" data-action="admin-report-override" data-override="early_opportunity" data-id="${A(e.id)}" ${t?`disabled`:``}>Early opportunity</button>
        <button class="btn btn-ghost btn-small" data-action="admin-report-override" data-override="include" data-id="${A(e.id)}" ${t?`disabled`:``}>Include in reports</button>
        <button class="btn btn-ghost btn-small" data-action="admin-report-override" data-override="noise" data-id="${A(e.id)}" ${t?`disabled`:``}>News/noise</button>
        <button class="btn btn-ghost btn-small" data-action="admin-report-override" data-override="hide" data-id="${A(e.id)}" ${t?`disabled`:``}>Hide from reports</button>
        <button
          class="btn btn-ghost btn-small"
          data-action="delete-opportunity"
          data-id="${A(e.id)}"
          ${M.adminDeletingId===e.id?`disabled`:``}
        >
          ${M.adminDeletingId===e.id?`Deleting...`:`Delete`}
        </button>
      </div>
    </div>
  `}function Ou(e){let t=ku(e);return t?`<span class="status-pill ${t===`new`?`is-success`:`is-warning`}">${A(t===`new`?`Nýtt`:`Uppfært`)}</span>`:``}function ku(e){let t=al(e.createdAt),n=al(e.updatedAt);return Number.isFinite(t)?!Number.isFinite(n)||Math.abs(n-t)<=120*1e3?`new`:n>t?`updated`:``:``}function Au(e){return e?E(e):`Not listed`}function ju(e){let t=M.adminOpportunityFilters?.debugCompanyId||``;if(!t)return``;let n=(M.adminCompanies||[]).find(e=>e.id===t);if(!n)return`<div class="admin-debug-panel">Match debug: selected company not loaded.</div>`;let r=ss(n,e),i=Fu(e,r),a=O(n.services).join(`, `)||`No services`,o=O(n.includeKeywords).join(`, `)||`No include keywords`,s=Mu(n,e),c=Nu(n,e),l=Pu(n,e,r),u=classifyMatchSafety(n,r);return`
    <div class="admin-debug-panel">
      <p><strong>Match debug for ${A(n.companyName)}:</strong> score ${Number(r.matchScore||0)} · ${A(pu(r.matchLabel))}</p>
      <p><strong>Services:</strong> ${A(a)}</p>
      <p><strong>Keywords:</strong> ${A(o)}</p>
      <p><strong>Matched terms:</strong> ${s.length?s.map(e=>`<span class="admin-chip">${A(e)}</span>`).join(` `):`None`}</p>
      <p><strong>Missing profile terms:</strong> ${c.length?c.map(e=>`<span class="admin-chip">${A(e)}</span>`).join(` `):`None`}</p>
      <p><strong>Score contribution:</strong> ${l.map(e=>`<span class="admin-chip">${A(e)}</span>`).join(` `)}</p>
      <p><strong>Matched terms/reasons:</strong> ${(r.matchReasons||[]).map(e=>`<span class="admin-chip">${A(mu(e))}</span>`).join(` `)||`None`}</p>
      <p><strong>Risks:</strong> ${(r.risks||[]).map(e=>`<span class="admin-chip">${A(hu(e))}</span>`).join(` `)||`None`}</p>
      <p><strong>Safety:</strong> <span class="admin-chip">${A(uu(u.safetyStatus))}</span> <span class="admin-chip">${A(du(u.alertEligible))}</span> ${(u.safetyReasons||[]).map(e=>`<span class="admin-chip">${A(e)}</span>`).join(` `)}</p>
      <p><strong>Excluded by:</strong> ${i.length?i.map(e=>`<span class="admin-chip">${A(e)}</span>`).join(` `):`<span class="admin-chip">Not excluded by local dashboard/report filters</span>`}</p>
    </div>
  `}function Mu(e,t){let n=ko(t);return Bo(Qn([...O(e.services).filter(e=>Oo(n,e)),...O(e.includeKeywords).filter(e=>Oo(n,e)),...Vo(n),...Go(e)?Ho(n):[]]))}function Nu(e,t){let n=ko(t);return Bo(Qn([...O(e.services),...O(e.includeKeywords)].filter(e=>e&&!Oo(n,e)))).slice(0,12)}function Pu(e,t,n){let r=[],i=(n.matchReasons||[]).filter(e=>/^Mentions your service:/i.test(e)).length,a=(n.matchReasons||[]).filter(e=>/^Contains your keyword:/i.test(e)).length;os(e,t)&&r.push(`+35 industry/category`),i&&r.push(`+${Math.min(35,i*10)} services`),a&&r.push(`+${Math.min(25,a*8)} keywords`);let o=$o(e,t);return o===`local_match`?r.push(`+22 local`):o===`national_match`?r.push(`+16 national`):o===`remote_match`?r.push(`+14 remote`):o===`outside_area_possible`?r.push(`+4 travel possible`):r.push(`-8 low-confidence location`),t.deadline&&T(t.deadline)>=0&&T(t.deadline)<=30&&r.push(`+8 closing soon`),(n.risks||[]).some(e=>/broad construction/i.test(e))&&r.push(`capped broad fit`),(n.risks||[]).some(e=>/winter|snow/i.test(e))&&r.push(`capped winter fit`),(n.risks||[]).some(e=>/indoor|finishing/i.test(e))&&r.push(`downgraded indoor mismatch`),r.length?r:[`No positive score contribution`]}function Fu(e,t){let n=[];return Number(t.matchScore||0)<50&&n.push(`score_below_50 (${Number(t.matchScore||0)})`),vd(e)||n.push(`customer_match_ineligible`),qi(e)||n.push(`dashboard_not_visible`),ms(e)===`hidden`&&n.push(`safety_status_hidden`),md(M.adminCompanies?.find(e=>e.id===M.adminOpportunityFilters?.debugCompanyId)||{},e)&&n.push(`needs_review_wrong_type_for_company`),hd(M.adminCompanies?.find(e=>e.id===M.adminOpportunityFilters?.debugCompanyId)||{},e)&&n.push(`design_consulting_or_supervision_only`),e.rawPayload?.hidden_from_reports===!0&&n.push(`hidden_from_reports`),ad(e)&&n.push(`duplicate_secondary`),$i(e)&&n.push(`stale_or_expired`),Ji(e)&&n.push(`demo_or_test`),n}function Iu(){if(!M.user)return Pa();if(!M.profile)return dc(j(`setupCompanyFirst`),j(`reportNeedsProfile`));let e=M.profile,t=Zu(e,Yu()),n=M.reports.find(e=>e.id===M.selectedReportId),r=M.reportArchiveLoading?j(`loadingSavedReports`):M.language===`is`?`${M.reports.length} vistuð yfirlit.`:`${M.reports.length} saved report${M.reports.length===1?``:`s`}.`,i=M.reportArchiveLoading?`<div class="empty-card">${A(j(`loadingSavedReports`))}</div>`:M.reportsLoadError?`<div class="admin-message is-error">Failed to load reports. ${A(M.reportsLoadError)}</div>`:M.reportsLoaded&&M.reports.length===0?`<div class="empty-card">${A(j(`noSavedReports`))}</div>`:M.reports.map(Lu).join(``);return Z(`
    <section class="dashboard-head">
      <div>
        <p class="eyebrow">${A(j(`weeklyReport`))}</p>
        <h1>${A(j(`reportTitle`))}</h1>
        <p>${A(e.companyName||`Your company`)} · ${A(Qu(t.periodStart,t.periodEnd))}</p>
        <p class="muted-copy">${A(M.language===`is`?`Sýnir öll núverandi viðeigandi tækifæri, ekki aðeins ný frá síðasta vistaða yfirliti.`:`Showing all current eligible matches, not only new items since the last saved report.`)}</p>
      </div>
      <div class="dashboard-actions">
        <button class="btn btn-primary" data-action="save-report" ${M.reportSaveLoading?`disabled`:``}>
          ${M.reportSaveLoading?A(j(`savingReport`)):A(j(`saveReport`))}
        </button>
        <button class="btn btn-secondary" data-action="download-report-pdf">${A(j(`downloadPdf`))}</button>
        <button class="btn btn-secondary" data-action="copy-report">${A(j(`copyReport`))}</button>
      </div>
    </section>

    ${M.reportMessage?`
      <div class="admin-message ${M.reportMessage.type===`error`?`is-error`:`is-success`}">
        ${A(M.reportMessage.text)}
      </div>
    `:``}

    ${zu(t,{id:`report-preview`,contactEmail:e.contactEmail,companyName:e.companyName})}

    <section class="report-archive">
      <div class="card-header">
        <div>
          <p class="eyebrow">${A(j(`reportArchive`))}</p>
          <h2>${A(j(`savedReports`))}</h2>
          <p>${r}</p>
        </div>
      </div>
      ${i}
    </section>

    ${n?Bu(n,e):``}
  `)}function Lu(e){let t=Array.isArray(e.report_items)?e.report_items.length:Number(e.itemCount||0),n=M.profile?.companyName||e.companies?.company_name||`Company`,r=M.language===`is`?$u(e.created_at):Zn(e.created_at),i=M.language===`is`?`${t} tækifæri`:`${t} item${t===1?``:`s`}`;return an({report:e,title:Wu(e,n),created:r,itemLabel:i,statusLabel:Ru(e.status),hideLabel:M.language===`is`?`Fela yfirlit`:`Hide report`,viewLabel:j(`viewReport`),escapeHtml:A})}function Ru(e){let t=String(e||`draft`);return M.language===`is`?{generated_all_current:`Heildaryfirlit`,generated_new_only:`Ný tækifæri`,draft:`Vistað yfirlit`}[t]||t:{generated_all_current:`All current`,generated_new_only:`New opportunities`,draft:`Saved report`}[t]||t}function zu(e,t={}){return on({report:e,options:t,companyName:t.companyName||M.profile?.companyName||`Company`,dateRange:Qu(e.periodStart,e.periodEnd),generatedByLabel:j(`generatedBy`),reportTitleLabel:j(`reportTitle`),closeLabel:j(`closeReport`),escapeHtml:A})}function Bu(e,t,n={}){let r=e.period_start||e.created_at?.slice(0,10)||new Date().toISOString().slice(0,10),i=e.period_end||e.created_at?.slice(0,10)||new Date().toISOString().slice(0,10),a=t.companyName||e.companies?.company_name||`Company`,o=Gu(e),s=o.length?Ku(o):Vu(e),c=o.length?Pd(e,a,o):Uu(e.text_content||``);return zu({title:Wu(e,a),periodStart:r,periodEnd:i,htmlContent:s,textContent:c},{companyName:a,closeButton:n.closeButton===void 0?!0:n.closeButton,includeTextArea:n.includeTextArea===void 0?!1:n.includeTextArea,id:n.id||``})}function Vu(e){if(e.html_content&&e.html_content.includes(`report-cover`))return Hu(Ju(e.html_content));let t=e.period_start||e.created_at?.slice(0,10)||new Date().toISOString().slice(0,10),n=e.period_end||e.created_at?.slice(0,10)||new Date().toISOString().slice(0,10),r=e.html_content?Hu(Ju(e.html_content)):`<pre>${A(e.text_content||`Ekkert efni var vistað fyrir þetta yfirlit.`)}</pre>`;return`
    <div class="report-cover">
      <div class="report-kicker">Útbúið af VerkRadar</div>
      <p class="eyebrow">Vistað yfirlit</p>
      <h2>${A(e.title||`Vistað yfirlit`)}</h2>
      <p>${A(Qu(t,n))}</p>
      <p>${A(e.summary||`Þetta eldra vistaða yfirlit er birt í nýju skýrslusniði.`)}</p>
    </div>
    <div class="report-legacy-content">
      ${r}
    </div>
  `}function Hu(e){return kn(e,M.language)}function Uu(e){return kn(e,M.language)}function Wu(e,t){return j(`reportForCompany`,{company:String(t||e?.companies?.company_name||`Company`).trim()})}function Gu(e){return(Array.isArray(e?.report_items)?[...e.report_items]:[]).sort((e,t)=>Number(e.sort_order||0)-Number(t.sort_order||0)).map(e=>{if(!e.opportunities)return null;let t=zi(e.opportunities);return{...t,matchScore:Number(e.match_score||0),matchLabel:ls(Number(e.match_score||0)),matchReasons:fa(t,Array.isArray(e.match_reasons)?e.match_reasons:[]),risks:Array.isArray(e.risks)&&e.risks.length?e.risks:Array.isArray(t.rawPayload?.risks)?t.rawPayload.risks:[],nextSteps:[]}}).filter(Boolean)}function Ku(e){let t=qu(e);return`
    ${t.confirmed.length?bd(w(`openActiveTitle`,M.language),w(`openActiveDescription`,M.language),t.confirmed):``}
    ${t.possible.length?bd(w(`possibleTitle`,M.language),w(`possibleDescription`,M.language),t.possible):``}
    ${t.early.length?bd(w(`earlyTitle`,M.language),w(`earlyDescription`,M.language),t.early):``}
    <p class="report-footer-note">${A(j(`reportFooter`))}</p>
  `}function qu(e){let t={confirmed:[],possible:[],early:[],review:[]};return e.forEach(e=>{let n=td(e);n===`confirmed`?t.confirmed.push(e):n===`possible`?t.possible.push(e):n===`early`?t.early.push(e):n!==`excluded`&&t.review.push(e)}),t}function Ju(e){let t=new DOMParser().parseFromString(String(e||``),`text/html`),n=new Set([`A`,`ARTICLE`,`DIV`,`EM`,`H2`,`H3`,`H4`,`H5`,`LI`,`OL`,`P`,`PRE`,`SECTION`,`SPAN`,`STRONG`,`UL`]),r=new Set([`aria-hidden`,`class`,`href`,`rel`,`target`]);return t.body.querySelectorAll(`*`).forEach(e=>{if(!n.has(e.tagName)){e.replaceWith(...Array.from(e.childNodes));return}Array.from(e.attributes).forEach(t=>{if(!r.has(t.name)){e.removeAttribute(t.name);return}if(t.name===`href`){let n=nr(t.value);n?e.setAttribute(`href`,n):e.removeAttribute(`href`)}})}),t.body.innerHTML}function Yu(e=`all_current`,t=new Set){return Xu({mode:e,previouslyReportedIds:t})}function Xu({mode:e=`all_current`,previouslyReportedIds:t=new Set}={}){let n=us().filter(e=>e.matchScore>=50).filter(e=>nd(e,`all_current`));return Xn(e===`new_only`?n.filter(e=>!t.has(e.id)):n).slice(0,8)}function Zu(e,t){let n=new Date,r=n.toISOString().slice(0,10),i=new Date(n);i.setDate(i.getDate()-7);let a=i.toISOString().slice(0,10),o=j(`reportForCompany`,{company:e.companyName}),s=ed(t),c=s.confirmed.length+s.possible.length+s.early.length,l=M.language===`is`?`${c} viðeigandi útboðs- eða verðfyrirspurnaratriði fundust fyrir ${e.companyName}.`:`${c} relevant tender/quote-request ${c===1?`item`:`items`} found for ${e.companyName}.`;return{title:o,periodStart:a,periodEnd:r,summary:l,textContent:Nd(e,t),htmlContent:`
    <div class="report-cover">
      <div class="report-kicker">${A(j(`generatedBy`))}</div>
      <p class="eyebrow">${A(j(`reportTitle`))}</p>
      <h2>${A(o)}</h2>
      <p>${A(Qu(a,r))}</p>
      <p>${A(l)} ${t[0]?A(M.language===`is`?`Sterkasta sýnilega atriðið er ${t[0].title}.`:`The strongest visible item is ${t[0].title}.`):A(M.language===`is`?`Engin skýr útboð eða verðfyrirspurnir fundust fyrir þetta tímabil.`:`No strict report-ready tenders or quote requests were found for this period.`)}</p>
    </div>

    <div class="report-summary-grid">
      ${yd(w(`openActiveTitle`,M.language),s.confirmed.length)}
      ${yd(w(`possibleTitle`,M.language),s.possible.length)}
    </div>

    ${bd(w(`openActiveTitle`,M.language),w(`openActiveDescription`,M.language),s.confirmed)}
    ${s.possible.length?bd(w(`possibleTitle`,M.language),w(`possibleDescription`,M.language),s.possible):``}
    ${s.early.length?bd(w(`earlyTitle`,M.language),w(`earlyDescription`,M.language),s.early):``}

    <p class="report-footer-note">${A(j(`reportFooter`))}</p>
  `}}function Qu(e,t){return`${$u(e)} – ${$u(t)}`}function $u(e){if(!e)return`Engin dagsetning`;let t=new Date(`${String(e).slice(0,10)}T00:00:00`);return Number.isNaN(t.getTime())?String(e):M.language===`en`?new Intl.DateTimeFormat(`en-GB`,{year:`numeric`,month:`short`,day:`2-digit`}).format(t):`${t.getDate()}. ${[`janúar`,`febrúar`,`mars`,`apríl`,`maí`,`júní`,`júlí`,`ágúst`,`september`,`október`,`nóvember`,`desember`][t.getMonth()]} ${t.getFullYear()}`}function ed(e){let t={confirmed:[],possible:[],early:[]},n=new Set,r=Xn(e);(r.length?r:od(e)).forEach(e=>{let r=td(e);r!==`excluded`&&(n.has(e.id)||(n.add(e.id),r===`confirmed`?t.confirmed.push(e):r===`possible`?t.possible.push(e):r===`early`&&t.early.push(e)))});let i=8;for(let e of[`confirmed`,`possible`,`early`]){let n=t[e].slice(0,i);t[e]=n,i=Math.max(0,i-n.length)}return t}function td(e){let t=Jn(e);if(t!==`excluded`||e?.aiReviewFit||e?.ai_review_fit)return t;if(!rd(e))return`excluded`;if(Yn(e))return`confirmed`;let n=B(e);if(n===`confirmed_tender`)return`confirmed`;if(n===`early_opportunity`)return`early`;let r=z(e.qualityStatus,e);return r===`confirmed_tender`?`confirmed`:r===`early_signal`?`early`:`excluded`}function nd(e,t=`all_current`){return rd(e)?t===`new_only`?ms(e)===`auto_approved`&&e.alertEligible!==!1:ms(e)!==`hidden`:!1}function rd(e){if(!e||Ji(e)||ms(e)===`hidden`||!qi(e)||id(e)||cd(e)||fd(e)||pd(e)||ca(e.title||``)&&!ld(e))return!1;let t=B(e);if(t===`confirmed_tender`)return ld(e)||dd(e);if(t===`early_opportunity`)return ud(e);let n=z(e.qualityStatus,e);return n===`confirmed_tender`?ld(e)||dd(e):n===`early_signal`?ud(e):!1}function id(e){let t=e?.rawPayload||{},n=String(t.admin_report_status||``).toLowerCase();if(n===`include`)return!1;if(t.hidden_from_reports===!0||[`hidden`,`hide`,`noise`,`deleted`].includes(n)||ad(e)||$i(e))return!0;let r=B(e);return r===`news_context`||r===`not_opportunity`}function ad(e={}){let t=e.rawPayload||{},n=String(t.canonical_opportunity_id||``);return t.is_duplicate===!0||!!t.duplicate_of||!!n&&!!e.id&&n!==String(e.id)}function od(e){return[...e].sort((e,t)=>sd(e)-sd(t)||Number(dd(t))-Number(dd(e))||Number(ld(t))-Number(ld(e))||t.matchScore-e.matchScore||T(e.deadline)-T(t.deadline))}function sd(e){if(cd(e))return 99;let t=B(e);return t===`confirmed_tender`?0:t===`early_opportunity`?1:10}function cd(e){let t=V(e)?Xi(e):String(e?.rawPayload?.tender_state||``).toLowerCase();return[`tender_awarded`,`awarded`,`already_tendered`].includes(t)?!0:U(H(e),[`lægstbjóðandi`,`laegstbjodandi`,`samningur gerður`,`samningur gerdur`,`samningur var`,`samið var`,`samid var`,`útboð hefur farið fram`,`utbod hefur farid fram`,`útboð var auglýst`,`utbod var auglyst`])}function ld(e){return U(H(e),[`útboð`,`utbod`,`útboðsauglýsing`,`utbodsauglysing`,`tilboð`,`tilbod`,`tilboðum`,`tilbodum`,`óskað eftir tilboðum`,`oskad eftir tilbodum`,`verðfyrirspurn`,`verdfyrirspurn`,`forval`,`skilafrestur`,`útboðsgögn`,`utbodsgogn`,`quote request`,`request for quote`,`tender`,`procurement`])}function ud(e){return U(H(e),[`senn í útboð`,`senn i utbod`,`áætlað útboð`,`aaetlad utbod`,`áætlað er að bjóða út`,`aaetlad er ad bjoda ut`,`fyrirhugað útboð`,`fyrirhugad utbod`])}function dd(e){let t=k(e?.source||``);return[`rikiskaup`,`ríkiskaup`,`utbodsvefur`,`útboðsvefur`,`ted`,`tenders electronic daily`,`procurement`,`tender portal`].some(e=>t.includes(k(e)))}function fd(e){return hd(M.profile||{},e)}function pd(e){return md(M.profile||{},e)}function md(e,t){return ms(t)!==`needs_review`||!_d([...Array.isArray(t?.safetyReasons)?t.safetyReasons:[],...Array.isArray(t?.risks)?t.risks:[],...Array.isArray(t?.rawPayload?.safety_reasons)?t.rawPayload.safety_reasons:[],...Array.isArray(t?.rawPayload?.risks)?t.rawPayload.risks:[]].filter(Boolean).join(` `))?!1:!gd(e)}function hd(e,t){let n=H(t),r=U(n,[`for og verkhönnun`,`for og verkhonnun`,`verkhönnun`,`verkhonnun`,`forhönnun`,`forhonnun`,`verkfræðiráðgjöf`,`verkfraediradgjof`,`ráðgjöf`,`radgjof`,`umsjón`,`umsjon`,`verkefnastjórn`,`verkefnastjorn`,`útboðsgögn hönnun`,`utbodsgogn honnun`]),i=U(n,[`hönnun`,`honnun`]),a=U(n,[`lóðarframkvæmdir`,`lodarframkvaemdir`,`gatnagerð`,`gatnagerd`,`stígagerð`,`stigagerd`,`lagnir`,`regnvatnslagnir`,`jarðvinna`,`jardvinna`,`jarðvegsskipti`,`jardvegsskipti`,`fyllingar`,`grjóthleðsla`,`grjothledsla`,`malbikun`,`hellulögn`,`hellulogn`,`kantsteinar`,`landmótun`,`landmotun`,`yfirborðsfrágangur`,`yfirbordsfragangur`,`bílastæði`,`bilastaedi`]),o=U(n,[`eftirlit`,`umsjón`,`umsjon`,`verkefnastjórn`,`verkefnastjorn`])&&!a;return!r&&!(i&&!a)&&!o?!1:!gd(e)}function gd(e={}){return U([e.industry,...Array.isArray(e.services)?e.services:[],...Array.isArray(e.includeKeywords)?e.includeKeywords:[]].filter(Boolean).join(` `),[`hönnun`,`honnun`,`ráðgjöf`,`radgjof`,`verkfræðiráðgjöf`,`verkfraediradgjof`,`verkfræði`,`verkfraedi`,`eftirlit`,`verkefnastjórnun`,`verkefnastjornun`,`útboðsgögn`,`utbodsgogn`,`engineering`,`design`,`consulting`,`project management`,`supervision`])}function _d(e){return U(String(e||``),[`hönnun`,`honnun`,`ráðgjöf`,`radgjof`,`verkfræðiráðgjöf`,`verkfraediradgjof`,`eftirlit`,`umsjón`,`umsjon`,`verkefnastjórn`,`verkefnastjorn`,`design`,`consulting`,`supervision`,`inspection`,`project management`])}function vd(e){if(!e)return!1;let t=e.rawPayload||{};if(String(t.admin_report_status||``).toLowerCase()===`include`)return!0;if(id(e))return!1;let n=String(t.tender_state||``).toLowerCase();return!([`tender_awarded`,`awarded`,`already_tendered`].includes(n)||$i(e)||ca(e.title||``)&&!Qi(H(e)))}function yd(e,t){return sn({label:e,value:t,escapeHtml:A})}function bd(e,t,n){return cn({title:e,description:t,opportunities:n,emptyText:M.language===`is`?`Engin atriði í þessum hluta.`:`No items in this section.`,renderOpportunityItem:xd,escapeHtml:A})}function xd(e){let t=!!e.estimatedValue,n={...e,matchReasons:In(e.matchReasons,M.language)},r=Md(e).map(e=>Ln(e,M.language)).filter(Boolean),i=e.deadline?$u(e.deadline):j(`notFound`);return ln({opp:n,valueText:t?Vs(e.estimatedValue):j(`notListed`),deadlineText:i,sourceUrl:nr(e.url),risks:r,fallbackReason:M.language===`is`?`Passar við fyrirtækjaprófílinn.`:`Matches your company profile.`,qualityBadgeHtml:Sd(n),matchBadgeClass:Gs(e.matchLabel),matchLabel:Nn(e,M.language),statusText:Mn(M.language),buyerLabel:j(`buyer`),buyerValue:Ed(e),sourceLabel:j(`source`),sourceValue:Td(`source`,e.source),areaLabel:j(`area`),areaValue:Dd(e),deadlineLabel:j(`deadline`),valueLabel:j(`estimatedValue`),whyLabel:j(`whyThisMatters`),risksLabel:j(`risksToCheck`),openSourceLabel:j(`openSource`),sourceMissingLabel:j(`sourceLinkMissing`),formatReason:Ad,formatRisk:$,escapeHtml:A})}function Sd(e){return un({status:`verify`,label:Fn(e,M.language),escapeHtml:A})}function Cd(e){return ir(e,j)}function wd(e){return ar(e,j)}function Td(e,t){return or(e,t,j)}function Ed(e){let t=e?.source||e?.rawPayload?.source_name||``;return Td(`buyer`,lr(e?.buyer,t,e?.rawPayload||{}))}function Dd(e){return ur(e?.source||e?.rawPayload?.source_name||``)||Td(`location`,e?.location)}function Od(e,t){return fr(e,t,{language:M.language,translate:j})}function kd(e){return dr(e,M.language,j)}function Ad(e){return In([pr(e,{language:M.language,translate:j})],M.language)[0]||``}function $(e){return Ln(mr(e,M.language),M.language)}function jd(e){return hr(e,M.language)}function Md(e){let t=Array.isArray(e.risks)&&e.risks.length?[...e.risks]:[`Open the source page and confirm mandatory requirements.`];return e.deadline||t.unshift(zs(e)),e.estimatedValue||t.push(`Estimated value is not listed in the imported data.`),z(e.qualityStatus,e)===`needs_review`&&t.push(V(e)?`Extracted project signal — verify tender timing in the source article.`:`Imported from broad feed — verify that this is a real tender or business opportunity.`),[...new Set(t.map(e=>String(e||``).trim()).filter(Boolean))]}function Nd(e,t){let n=ed(t),r=[...n.confirmed,...n.possible,...n.early];return`${j(`reportForCompany`,{company:e.companyName})}
${M.language===`is`?`Tímabil`:`Date range`}: ${Qu(new Date(Date.now()-10080*60*1e3).toISOString().slice(0,10),new Date().toISOString().slice(0,10))}

${M.language===`is`?`Samantekt`:`Summary`}:
- ${w(`openActiveTitle`,M.language)}: ${n.confirmed.length}
- ${w(`possibleTitle`,M.language)}: ${n.possible.length}
- ${w(`earlyTitle`,M.language)}: ${n.early.length}

${r.length?r.map((e,t)=>`${t+1}. ${e.title}
${M.language===`is`?`Staða`:`Status`}: ${Pn(e,M.language)}
${j(`buyer`)}: ${Ed(e)}
${j(`source`)}: ${Td(`source`,e.source)}
${j(`area`)}: ${Dd(e)}
${j(`deadline`)}: ${Rs(e)}
${j(`estimatedValue`)}: ${e.estimatedValue?Vs(e.estimatedValue):j(`notListed`)}
${j(`whyThisMatters`)}:
${In(e.matchReasons.length?e.matchReasons:[`Matched to your company profile.`],M.language).map(e=>`- ${e}`).join(`
`)}
${j(`risksToCheck`)}:
${Md(e).map(e=>`- ${Ln($(e),M.language)}`).join(`
`)}
${M.language===`is`?`Næsta skref`:`Next step`}:
${e.url?`${j(`openSource`)}: ${e.url}`:M.language===`is`?`Finnið og staðfestið upprunalega heimild áður en brugðist er við.`:`Find and verify the original source page before acting.`}
`).join(`
`):M.language===`is`?`Engin skýr útboð eða verðfyrirspurnir fundust fyrir þetta tímabil.`:`No report-ready matches were found for this period.`}

VerkRadar`}function Pd(e,t,n){let r=e.period_start||e.created_at?.slice(0,10)||new Date().toISOString().slice(0,10),i=e.period_end||e.created_at?.slice(0,10)||new Date().toISOString().slice(0,10),a=Wu(e,t),o=qu(n),s=[...o.confirmed,...o.possible,...o.early,...o.review];return`${a}
${M.language===`is`?`Tímabil`:`Date range`}: ${Qu(r,i)}

${s.length?s.map((e,t)=>`${t+1}. ${e.title}
${M.language===`is`?`Staða`:`Status`}: ${Pn(e,M.language)}
${j(`buyer`)}: ${Ed(e)}
${j(`source`)}: ${Td(`source`,e.source)}
${j(`area`)}: ${Dd(e)}
${j(`deadline`)}: ${Rs(e)}
${j(`estimatedValue`)}: ${e.estimatedValue?Vs(e.estimatedValue):j(`notListed`)}
${j(`whyThisMatters`)}:
${In(e.matchReasons.length?e.matchReasons:[`Matched to your company profile.`],M.language).map(e=>`- ${e}`).join(`
`)}
${j(`risksToCheck`)}:
${Md(e).map(e=>`- ${Ln($(e),M.language)}`).join(`
`)}
${e.url?`${j(`openSource`)}: ${e.url}`:``}
`).join(`
`):M.language===`is`?`Engin atriði eru vistuð í þessu yfirliti.`:`No items are saved in this report.`}

${j(`reportFooter`)}`}async function Fd(){let e=Nd(M.profile||Sr(),Yu());try{await navigator.clipboard.writeText(e),G(`Report copied`,`success`)}catch(e){console.error(`Failed to copy report:`,e),G(`Could not copy report`,`error`)}}function Id(e=`report-preview`,t=``){let n=document.getElementById(e);if(!n){G(`No report available to export`,`error`);return}let r=M.profile||Sr(),i=n.cloneNode(!0);i.classList.add(`pdf-compact-report`),i.querySelectorAll(`textarea, .report-close-btn`).forEach(e=>e.remove());let a=i.querySelector(`.report-meta-bar`);if(a){let e=a.querySelector(`div:first-child strong`)?.textContent?.trim()||j(`reportForCompany`,{company:t||r.companyName||`Company`}),n=a.querySelector(`div:last-child span`)?.textContent?.trim()||t||r.companyName||`Company`,i=a.querySelector(`div:last-child strong`)?.textContent?.trim()||``,o=document.querySelector(`.brand-logo`)?.src||document.querySelector(`link[rel="icon"]`)?.href||``;a.innerHTML=``;let s=document.createElement(`div`);s.className=`pdf-report-header-text`;let c=document.createElement(`span`);c.textContent=j(`generatedBy`);let l=document.createElement(`strong`);l.textContent=e||j(`reportForCompany`,{company:n});let u=document.createElement(`em`);if(u.textContent=i,s.append(c,l,u),a.appendChild(s),o){let e=document.createElement(`img`);e.className=`pdf-report-logo`,e.src=o,e.alt=`VerkRadar`,a.appendChild(e)}}let o=i.querySelector(`.report-summary-grid`);o&&o.remove();let s=n.querySelector(`.report-meta-bar div:last-child strong`)?.textContent||new Date().toISOString().slice(0,10),c=Rd(t||r.companyName||`company`,s),l=Array.from(document.querySelectorAll(`link[rel="stylesheet"]`)).map(e=>`<link rel="stylesheet" href="${A(e.href)}">`).join(``),u=window.open(``,`_blank`,`width=1100,height=900`);if(!u){G(`Allow popups to download the report PDF`,`error`);return}u.document.open(),u.document.write(`<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${A(c)}</title>
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
</html>`),u.document.close()}function Ld(){Id(`admin-report-preview`,(M.selectedAdminReport?.id===M.selectedAdminReportId?M.selectedAdminReport:(M.adminReports||[]).find(e=>e.id===M.selectedAdminReportId))?.companies?.company_name||`Company`)}function Rd(e,t){return`VerkRadar-report-${zd(e)||`company`}-${zd(String(t||``).replace(/\s+to\s+/i,`-`))||new Date().toISOString().slice(0,10)}.pdf`}function zd(e){return String(e||``).normalize(`NFD`).replace(/[\u0300-\u036f]/g,``).replace(/[^a-z0-9]+/gi,`-`).replace(/^-+|-+$/g,``).toLowerCase()}function Bd(){return Z(Kt({t:j,escapeHtml:A,trialHref:`/trial`}))}function Vd(){return Z(Jt({t:j,escapeHtml:A,submitted:M.trialRequestSubmitted,error:M.trialRequestError}))}function Hd(){return M.user?M.profileLoading&&!M.profile&&!M.profileDraft?Z(`
      <section class="empty-state">
        <div class="loader-mark" aria-label="${A(M.language===`is`?`Hleð fyrirtækjaprófíl`:`Loading company profile`)}"></div>
        <h1>${A(M.language===`is`?`Hleð fyrirtækjaprófíl...`:`Loading company profile...`)}</h1>
        <p>${A(M.language===`is`?`Sæki vistaðan fyrirtækjaprófíl.`:`Checking your saved company profile.`)}</p>
        <button class="btn btn-secondary" type="button" data-action="retry-settings-profile">${A(M.language===`is`?`Reyna aftur`:`Retry`)}</button>
      </section>
    `):M.profileLoadError&&!M.profile&&!M.profileDraft?Z(`
      <section class="empty-state">
        <h1>${A(M.language===`is`?`Gat ekki hlaðið stillingum`:`Could not load Settings`)}</h1>
        <p>${A(M.profileLoadError)}</p>
        <button class="btn btn-primary" type="button" data-action="retry-settings-profile">${A(M.language===`is`?`Reyna aftur`:`Retry`)}</button>
      </section>
    `):!M.profile&&!M.profileDraft?dc(j(`setupCompanyFirst`),M.language===`is`?`Stillingar eru tiltækar eftir að fyrirtækið hefur verið sett upp.`:`Settings are available after you set up your company.`):Z(dn({t:j,escapeHtml:A,language:M.language,profileDraftDirty:M.profileDraftDirty,profileLoadError:M.profileLoadError,showDemoReset:Ud(),profileFormHtml:yl()})):Pa()}function Ud(){return!!(M.isAdmin||[`localhost`,`127.0.0.1`,``].includes(window.location.hostname))}Wa(),ai();