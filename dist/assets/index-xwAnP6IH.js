(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={profile:`verkradar_profile`,saved:`verkradar_saved_opportunities`,ignored:`verkradar_ignored_opportunities`,language:`verkradar_language`,selectedPlan:`verkradar_selected_plan`},t={is:{navDashboard:`Mælaborð`,navReport:`Yfirlit`,navPricing:`Verðskrá`,navSettings:`Stillingar`,navHowItWorks:`Hvernig virkar þetta`,navSampleReport:`Sýnishorn`,login:`Innskráning`,logout:`Skrá út`,getStarted:`Fá prufu`,setupCompany:`Setja upp fyrirtæki`,createProfile:`Stofna prófíl`,companyProfile:`Fyrirtækjaprófíll`,noCompanyProfile:`Ekkert fyrirtæki`,openMenu:`Opna valmynd`,closeMenu:`Loka valmynd`,privacyPolicy:`Persónuvernd`,termsOfService:`Skilmálar`,dataSources:`Gagnaheimildir`,cookies:`Vafrakökur`,security:`Öryggi`,contact:`Hafa samband`,footerText:`Vöktun útboða og viðskiptatækifæra fyrir fyrirtæki. VerkRadar hjálpar ykkur að finna og yfirfara opinber tækifæri, en frumgögn eru alltaf endanleg heimild.`,loadingLabel:`Hleð VerkRadar`,heroEyebrow:`Útboðsgreind fyrir verktaka og þjónustufyrirtæki`,heroTitle:`Finnið verðmæt útboð áður en skilafresturinn rennur út.`,heroText:`VerkRadar vaktar opinberar heimildir og skilar stuttu yfirliti yfir tækifæri sem gætu passað við ykkar verkflokka og svæði.`,createFreeDemoProfile:`Fá prufuyfirlit`,viewSampleReport:`Skoða sýnishorn`,proofStrong:`Fyrir verktaka, iðnfyrirtæki og þjónustuaðila.`,proofText:`Vöktun á opinberum heimildum, sveitarfélögum og útboðsvefjum - sett fram sem forgangsraðað yfirlit.`,bestOpenMatch:`Stutt yfirlit`,tender:`Útboð`,deadlineRisk:`Rennur út fljótlega`,daysLeft:`{count} dagar eftir`,problemEyebrow:`Vandinn`,problemTitle:`Útboð tapast oft áður en tilboðsgerðin byrjar.`,problemOneTitle:`Útboð birtast á mörgum mismunandi stöðum.`,problemOneText:`Sveitarfélög, stofnanir og útboðsvefir birta tækifæri á ólíkum síðum og í ólíkum sniðum.`,problemTwoTitle:`Skilafrestir geta verið stuttir.`,problemTwoText:`Það tekur tíma að finna hvað passar við ykkar verkflokka, svæði og stærð verkefna.`,targetEyebrow:`Fyrir hverja?`,targetTitle:`Byggt fyrir íslensk fyrirtæki sem þurfa að finna rétt verkefni fyrr.`,targetText:`VerkRadar hentar fyrirtækjum sem vilja vakta útboð, verðfyrirspurnir og verkefnavísbendingar án þess að opna sömu vefi handvirkt á hverjum degi.`,solutionEyebrow:`Lausnin`,solutionTitle:`Eitt skýrt yfirlit í stað dreifðrar leitar.`,solutionText:`VerkRadar breytir útboðshávaða í forgangsraðaðan lista yfir möguleg tækifæri sem fyrirtækið ætti að skoða.`,createProfileStep:`1. Við setjum upp prófíl`,createProfileStepText:`Við skráum þjónustu, svæði, lykilorð og verkefnastærðir sem henta ykkur.`,matchProjectsStep:`2. Finna tækifæri`,matchProjectsStepText:`Kerfið metur hvaða tækifæri gætu passað við fyrirtækjaprófílinn.`,getReportStep:`3. Fáið yfirlit`,getReportStepText:`Fáið skýrt yfirlit með frestum, ástæðum samsvörunar og næstu skrefum.`,sampleReportEyebrow:`Sýnishorn`,sampleReportTitle:`Stuttlisti sem sýnir hvað er þess virði að skoða.`,sampleReportText:`Sýnishornið sýnir hvernig VerkRadar raðar útboðum og mögulegum tækifærum eftir þjónustu, svæði, fresti og ástæðum.`,sourceDisclaimer:`VerkRadar hjálpar til við að forgangsraða tækifærum. Upprunaleg útboðsgögn eru alltaf endanleg heimild.`,pricingEyebrow:`VERÐSKRÁ`,pricingHeadline:`Einföld verðskrá fyrir útboðsvöktun`,pricingSubtitle:`Byrjaðu í prufu. Við setjum upp prófíl fyrir fyrirtækið og sendum yfirlit ef viðeigandi tækifæri finnast.`,pricingTrialPlan:`Ókeypis prufa`,pricingTrialPrice:`0 kr.`,pricingTrialSubtext:`í prufu`,pricingMonitoringPlan:`Grunnur`,pricingMonitoringPrice:`9.900 kr/mán.`,pricingMonitoringSubtext:`fyrir fyrstu fyrirtækin`,pricingCustomPlan:`Sérsniðið`,pricingCustomPrice:`Hafa samband`,pricingBadge:`Hentar flestum fyrirtækjum`,pricingTrialCta:`Fá prufuyfirlit`,pricingMonitoringCta:`Fá prufu`,pricingCustomCta:`Hafa samband`,pricingTrialManualProfile:`Fyrirtækjaprófíll settur upp handvirkt`,pricingTrialFiltering:`Síun eftir þjónustu og svæði`,pricingTrialReportIfRelevant:`Prufuyfirlit sent ef viðeigandi tækifæri finnast`,pricingTrialNoCommitment:`Engin binding`,pricingTrialNoCard:`Engin greiðslukort`,pricingMonitoringSources:`Vöktun á opinberum útboðum og tækifærum`,pricingMonitoringEmail:`Stutt yfirlit sent í tölvupósti`,pricingMonitoringFilters:`Síun eftir þjónustu, svæði og leitarorðum`,pricingMonitoringReminders:`Áminningar um mikilvæg skilafresti`,pricingMonitoringFeedback:`Prófíll uppfærður eftir endurgjöf`,pricingOneProfile:`1 fyrirtækjaprófíll`,pricingCustomProfiles:`Fleiri fyrirtækjaprófílar`,pricingCustomServices:`Fleiri þjónustusvið eða svæði`,pricingCustomMonitoring:`Sérstillt vöktun`,pricingCustomPriorityReview:`Forgangsyfirferð`,pricingCustomAudience:`Fyrir stærri verktaka eða þjónustufyrirtæki`,trialRequestEyebrow:`PRUFA`,trialRequestTitle:`Fá prufuyfirlit`,trialRequestSubtitle:`Segðu okkur aðeins frá fyrirtækinu. Við skoðum upplýsingarnar og setjum upp prufuprófíl ef þetta passar.`,trialCompany:`Fyrirtæki`,trialContact:`Tengiliður`,trialEmail:`Netfang`,trialPhone:`Sími`,trialServices:`Hvaða þjónustu bjóðið þið?`,trialRegions:`Hvaða svæði viljið þið fylgjast með?`,trialNotes:`Athugasemd`,trialRequestHelper:`Við skoðum upplýsingarnar og setjum upp prufuprófíl ef þetta passar.`,trialRequestSubmit:`Senda beiðni`,trialRequestSuccess:`Takk fyrir. Við skoðum upplýsingarnar og höfum samband ef VerkRadar passar við ykkar þjónustu.`,trialRequestError:`Gat ekki sent beiðni. Reynið aftur eða sendið okkur tölvupóst.`,publicSignupUnavailableTitle:`Aðgangur er stofnaður í gegnum boð`,publicSignupUnavailableText:`Viltu fá prufu? Fylltu út formið hér.`,publicSignupUnavailableHelp:`VerkRadar er sett upp handvirkt fyrir prufufyrirtæki. Við stofnum aðgang þegar fyrirtækjaprófíllinn er tilbúinn.`,tryDemoTitle:`Prófið sýnimælaborðið.`,tryDemoText:`Hlaðið sýnifyrirtæki og sjáið hvernig tækifærin raðast.`,loadDemoCompany:`Hlaða sýnifyrirtæki`,authLoginTitle:`Skrá inn í VerkRadar`,authLoginSubtitle:`Fáið aðgang að mælaborði, vistuðum tækifærum og vikuyfirlitum.`,email:`Netfang`,password:`Lykilorð`,forgotPassword:`Gleymt lykilorð?`,loggingIn:`Skrái inn...`,newToVerkRadar:`Ný hjá VerkRadar?`,createAccount:`Stofna aðgang`,createAccountTitle:`Stofna VerkRadar aðgang`,createAccountSubtitle:`Byrjið á að stofna aðgang. Síðan stofnið þið fyrirtækjaprófíl.`,authRequiredTitle:`Skráðu þig inn til að halda áfram`,authRequiredText:`Þessi síða er aðgengileg eftir innskráningu.`,alreadyLoggedInTitle:`Þú ert þegar skráð(ur) inn`,alreadyLoggedInText:`Beini þér á næsta skref.`,signupCreatedConfirm:`Aðgangur stofnaður. Athugaðu tölvupóstinn þinn til að staðfesta aðganginn.`,inviteSignupCreatedConfirm:`Staðfestu netfangið í tölvupósti og komdu svo aftur til að virkja aðganginn.`,inviteSignupEmailHelp:`Notaðu boðna netfangið til að tengja aðganginn við rétt fyrirtæki.`,signupExistingAccount:`Þetta netfang er þegar með aðgang. Skráðu þig inn eða endurstilltu lykilorð.`,signupNeutralNextSteps:`Ef aðgangur er til fyrir þetta netfang færðu tölvupóst með næstu skrefum. Annars hefur nýr aðgangur verið stofnaður.`,emailOrPasswordIncorrect:`Netfang eða lykilorð er rangt.`,confirmEmailBeforeLogin:`Staðfestu netfangið þitt áður en þú skráir þig inn.`,passwordTooShort:`Lykilorð þarf að vera að minnsta kosti 6 stafir.`,tooManyAttempts:`Of margar tilraunir. Bíddu aðeins og reyndu aftur.`,couldNotCreateAccount:`Gat ekki stofnað aðgang. Athugaðu netfang og lykilorð.`,couldNotLogin:`Gat ekki skráð þig inn. Reyndu aftur.`,creating:`Stofna...`,alreadyHaveAccount:`Ertu þegar með aðgang?`,passwordReset:`Endurstilla lykilorð`,resetPasswordTitle:`Endurstilla lykilorð`,resetPasswordSubtitle:`Sláið inn netfang og VerkRadar sendir öruggan hlekk ef aðgangur er til.`,sending:`Sendi...`,sendResetLink:`Senda hlekk`,rememberedPassword:`Manstu lykilorðið?`,backToLogin:`Til baka í innskráningu`,newPassword:`Nýtt lykilorð`,chooseNewPassword:`Veldu nýtt lykilorð`,resetPasswordHelp:`Settu nýtt lykilorð fyrir VerkRadar aðganginn. Ef hlekkurinn er útrunninn skaltu biðja um nýjan.`,confirmNewPassword:`Staðfesta nýtt lykilorð`,updating:`Uppfæri...`,updatePassword:`Uppfæra lykilorð`,needNewLink:`Þarftu nýjan hlekk?`,sendAnotherResetLink:`Senda annan hlekk`,onboarding:`UPPSETNING`,onboardingTitle:`Settu upp fyrirtækið`,onboardingText:`Segðu okkur hvað fyrirtækið gerir svo VerkRadar geti fundið viðeigandi tækifæri.`,companyBasics:`1. Grunnupplýsingar`,companyName:`Fyrirtækisnafn`,kennitala:`Kennitala`,contactEmail:`Tengiliðanetfang`,billingEmail:`Netfang fyrir reikninga`,contactName:`Nafn tengiliðar`,phone:`Sími`,address:`Heimilisfang`,website:`Vefsíða`,industry:`Atvinnugrein`,selectIndustry:`Veldu atvinnugrein`,selectedPlan:`Valin áskrift`,plan_basic:`Grunnur`,plan_pro:`Pro`,plan_priority:`Forgangur`,servicesAndKeywords:`2. Þjónustur og leitarorð`,servicesHint:`Bætið við þjónustu sem þið bjóðið raunverulega upp á. Veldu mikilvægustu atriðin fyrst.`,servicesLabel:`Þjónustur`,servicesHelper:`Skráið þjónustuna sem fyrirtækið selur. Nákvæmari þjónusta gefur betri samsvaranir.`,extraWords:`Leitarorð`,includeKeywordsHelper:`Notið orð sem birtast oft í tækifærum sem þið viljið fá.`,excludeWords:`Orð sem ættu að lækka eða fjarlægja slæmar samsvaranir.`,excludeKeywordsHelper:`Orð sem ættu að lækka eða fjarlægja slæmar samsvaranir.`,suggestedServicesFor:`Tillögur að þjónustu fyrir {industry}`,suggestedKeywordsFor:`Tillögur að leitarorðum fyrir {industry}`,selectIndustryForServices:`Veljið atvinnugrein til að sjá þjónustutillögur`,selectIndustryForKeywords:`Veljið atvinnugrein til að sjá leitarorðatillögur`,locationsTitle:`3. Svæði`,locationsHint:`Notið Allt landið fyrir landsdekkandi útboð. Notið ferðastillingar ef þið getið boðið utan heimasvæðis fyrir rétt verkefni.`,baseLocation:`Heimasvæði`,baseLocationPlaceholder:`Dæmi: Austurland`,serviceAreas:`Þjónustusvæði, aðskilin með kommu`,serviceAreasPlaceholder:`Dæmi: Austurland, Allt landið`,travelScope:`Ferðir og umfang`,willingToTravel:`Tilbúin að ferðast fyrir rétt verkefni`,includeNational:`Sýna landsdekkandi tækifæri`,includeRemote:`Sýna fjarvinnu / netverkefni`,minimumTravelValue:`Lágmarksverðmæti fyrir ferðalög`,projectSize:`4. Stillingar`,minimumValue:`Lágmarksverðmæti`,maximumValue:`Hámarksverðmæti`,showUnknownValue:`Sýna tækifæri þó verðmæti vanti`,reportPreferences:`Yfirlitsstillingar`,frequency:`Tíðni`,weekly:`Vikulega`,daily:`Daglega`,reportDay:`Dagur yfirlits`,deadlineReminders:`Áminningar um skilafresti`,includeLowConfidence:`Sýna óvissar samsvaranir`,saveProfile:`Vista prófíl`,saving:`Vista...`,saved:`Vistað`,dashboard:`Mælaborð`,welcomeCompany:`Velkomin, {company}`,dashboardIntro:`Forgangsraðaðar tækifærasamsvaranir út frá þjónustu, svæðum og leitarorðum. {refresh}`,matchesLastRefreshed:`Síðast uppfært {time}.`,matchesAutoRefresh:`Samsvaranir uppfærast sjálfkrafa eftir vistun prófíls.`,refreshMatches:`Uppfæra samsvaranir`,refreshing:`Uppfæri...`,viewWeeklyReport:`Skoða yfirlit`,strongMatches:`Sterkar samsvaranir`,closingSoon:`Rennur út fljótlega`,savedLabel:`Vistað`,totalPotentialValue:`Áætlað heildarverðmæti`,searchOpportunities:`Leita í tækifærum...`,savedOnly:`Aðeins vistað`,improveProfile:`Bæta prófíl`,includeNationalOpportunities:`Sýna landsdekkandi tækifæri`,showAllStoredMatches:`Sýna allar samsvaranir`,inspectAllOpportunities:`Skoða öll tækifæri`,details:`Nánar`,save:`Vista`,ignore:`Hunsa`,originalLanguage:`Upprunalegt tungumál`,extractedProject:`Útdregið verkefni`,reportTitle:`Útboðs- og verkefnayfirlit`,setupCompanyFirst:`Settu fyrst upp fyrirtækið`,reportNeedsProfile:`Yfirlitið þarf fyrirtækjaprófíl til að geta fundið viðeigandi tækifæri.`,dashboardNeedsProfile:`Mælaborðið þarf fyrirtækjaprófíl til að reikna viðeigandi samsvaranir.`,weeklyReport:`Yfirlit`,saveReport:`Vista yfirlit`,savingReport:`Vista...`,downloadPdf:`Sækja PDF`,copyReport:`Afrita yfirlit`,reportArchive:`Yfirlitssafn`,savedReports:`Vistuð yfirlit`,loadingSavedReports:`Hleð vistuð yfirlit...`,noSavedReports:`Engin vistuð yfirlit enn.`,viewReport:`Skoða yfirlit`,closeReport:`Loka yfirliti`,generatedBy:`Útbúið af VerkRadar`,reportForCompany:`Útboðs- og verkefnayfirlit fyrir {company}`,openTenders:`Opin útboð / verðfyrirspurnir`,upcomingOpportunities:`Möguleg væntanleg tækifæri`,openTendersDescription:`Skýr útboðs- eða verðfyrirspurnarmerki. Yfirfarið frumgögn áður en brugðist er við.`,upcomingDescription:`Væntanleg útboðs- eða verkefnamerki með skýrum vísbendingum.`,reportFooter:`VerkRadar hjálpar til við að forgangsraða yfirferð opinberra tækifæra. Staðfestið alltaf útboðsgögn, skilafresti, kröfur og hæfi á upprunalegri heimild áður en brugðist er við.`,buyer:`Kaupandi`,source:`Heimild`,description:`Lýsing`,requirements:`Kröfur`,noSpecificRequirements:`Engar sérstakar kröfur skráðar.`,noDescription:`Engin lýsing tiltæk.`,noMatchReasons:`Engar ástæður samsvörunar tiltækar.`,matchReasons:`Ástæður samsvörunar`,opportunityInfo:`Upplýsingar um tækifæri`,extraction:`Útdráttur`,sourceArticle:`Heimildargrein`,parentArticle:`Upprunagrein`,openSourceArticle:`Opna heimildargrein`,extractedRegion:`Útdregið svæði`,projectNumber:`Verknúmer`,tenderState:`Staða útboðs`,quality:`Gæði`,category:`Flokkur`,type:`Tegund`,published:`Birt`,cpv:`CPV`,recommendedNextSteps:`Ráðlögð næstu skref`,noMajorRisks:`Engar stórar áhættur greindar í þessum gögnum.`,openSourceAndConfirm:`Opnið upprunalega heimild og staðfestið hæfi.`,removeFromSaved:`Fjarlægja úr vistuðum`,saveOpportunity:`Vista tækifæri`,markNotRelevant:`Merkja sem ekki viðeigandi`,publicProcurement:`Opinbert útboð`,area:`Svæði`,deadline:`Skilafrestur`,estimatedValue:`Áætlað verðmæti`,notFound:`Fannst ekki`,notListed:`Ekki gefið upp`,unknownBuyer:`Óþekktur kaupandi`,allIceland:`Allt landið`,whyThisMatters:`Af hverju þetta gæti skipt máli`,risksToCheck:`Atriði til að staðfesta`,openSource:`Opna heimild`,sourceLinkMissing:`Heimildartengil vantar`,strongMatch:`Sterk samsvörun`,goodMatch:`Góð samsvörun`,possibleMatch:`Möguleg samsvörun`,weakMatch:`Veik samsvörun`,confirmedTender:`Staðfest útboð`,likelyOpportunity:`Líklegt tækifæri`,earlySignal:`Væntanlegt tækifæri`,needsReview:`Þarfnast staðfestingar`,tenderAwarded:`Útboði lokið / samið`,tenderAlreadyAnnounced:`Útboð þegar auglýst`,upcomingTender:`Væntanlegt útboð`,projectSignal:`Verkefnavísbending`,nationalOpportunity:`Landsdekkandi tækifæri`,localMatch:`Staðbundin samsvörun`,mentionsService:`Nefnir þjónustu ykkar: {value}`,containsKeyword:`Inniheldur leitarorð: {value}`,procurement:`innkaup`},en:{navDashboard:`Dashboard`,navReport:`Report`,navPricing:`Pricing`,navSettings:`Settings`,navHowItWorks:`How it works`,navSampleReport:`Sample report`,login:`Login`,logout:`Logout`,getStarted:`Get a trial`,setupCompany:`Set up company`,createProfile:`Create profile`,companyProfile:`Company profile`,noCompanyProfile:`No company`,openMenu:`Open menu`,closeMenu:`Close menu`,privacyPolicy:`Privacy`,termsOfService:`Terms`,dataSources:`Data sources`,cookies:`Cookies`,security:`Security`,contact:`Contact`,footerText:`Tender and opportunity monitoring for businesses. VerkRadar helps you find and review public opportunities, but source documents remain the authority.`,loadingLabel:`Loading VerkRadar`,heroEyebrow:`Tender intelligence for working contractors`,heroTitle:`Stop losing valuable jobs to tabs you never opened.`,heroText:`VerkRadar monitors public sources and returns a short report of opportunities that may fit your trades and service areas.`,createFreeDemoProfile:`Get a trial report`,viewSampleReport:`View sample report`,proofStrong:`Contractors find relevant opportunities faster.`,proofText:`Top matches often include tenders outside the main databases.`,bestOpenMatch:`Shortlist`,tender:`Tender`,deadlineRisk:`Deadline risk`,daysLeft:`{count} days left`,problemEyebrow:`The problem`,problemTitle:`Opportunities are often lost before bidding starts.`,problemOneTitle:`Deadlines show up after your crew is already booked.`,problemOneText:`A short response window becomes a scramble, or a valuable contract never gets priced.`,problemTwoTitle:`The search takes longer than the go/no-go call.`,problemTwoText:`Owners spend hours opening low-fit tenders instead of seeing value, location, requirements and match reasons in one view.`,targetEyebrow:`Who it is for`,targetTitle:`Built for Icelandic companies that need to find the right jobs earlier.`,targetText:`VerkRadar is for teams that want to monitor tenders, quote requests and project signals without checking the same websites manually every day.`,solutionEyebrow:`The solution`,solutionTitle:`One clear report instead of scattered searching.`,solutionText:`VerkRadar turns tender noise into a ranked list of possible opportunities your business should review.`,createProfileStep:`1. We set up a profile`,createProfileStepText:`We register the services, regions, keywords and project sizes that fit your company.`,matchProjectsStep:`2. Find opportunities`,matchProjectsStepText:`The system checks which opportunities may fit the company profile.`,getReportStep:`3. Get report`,getReportStepText:`Receive a clear weekly report with deadlines and next steps.`,sampleReportEyebrow:`Sample report`,sampleReportTitle:`A shortlist that shows what is worth checking.`,sampleReportText:`Preview how VerkRadar ranks tenders and possible opportunities by service, region, deadline and reasons.`,sourceDisclaimer:`VerkRadar helps prioritize opportunity review. Original tender documents are always the final authority.`,pricingEyebrow:`PRICING`,pricingHeadline:`Simple pricing for tender monitoring`,pricingSubtitle:`Start with a trial. We set up a company profile and send a report if relevant opportunities are found.`,pricingTrialPlan:`Free trial`,pricingTrialPrice:`0 kr.`,pricingTrialSubtext:`during trial`,pricingMonitoringPlan:`VerkRadar Monitoring`,pricingMonitoringPrice:`9,900 kr/month`,pricingMonitoringSubtext:`for the first companies`,pricingCustomPlan:`Custom`,pricingCustomPrice:`Contact us`,pricingBadge:`Best for most businesses`,pricingTrialCta:`Get trial report`,pricingMonitoringCta:`Get a trial`,pricingCustomCta:`Contact us`,pricingTrialManualProfile:`Company profile set up manually`,pricingTrialFiltering:`Filtering by services and regions`,pricingTrialReportIfRelevant:`Trial report sent if relevant opportunities are found`,pricingTrialNoCommitment:`No commitment`,pricingTrialNoCard:`No credit card`,pricingMonitoringSources:`Monitoring of public tenders and opportunities`,pricingMonitoringEmail:`Short report sent by email`,pricingMonitoringFilters:`Filtering by services, regions and keywords`,pricingMonitoringReminders:`Reminders for important deadlines`,pricingMonitoringFeedback:`Profile updated based on feedback`,pricingOneProfile:`1 company profile`,pricingCustomProfiles:`More company profiles`,pricingCustomServices:`More service areas or regions`,pricingCustomMonitoring:`Custom monitoring`,pricingCustomPriorityReview:`Priority review`,pricingCustomAudience:`For larger contractors or service companies`,trialRequestEyebrow:`TRIAL`,trialRequestTitle:`Get a trial report`,trialRequestSubtitle:`Tell us a little about your company. We will review the information and set up a trial profile if this fits.`,trialCompany:`Company`,trialContact:`Contact person`,trialEmail:`Email`,trialPhone:`Phone`,trialServices:`What services do you provide?`,trialRegions:`Which regions do you want to monitor?`,trialNotes:`Notes`,trialRequestHelper:`We will review the information and set up a trial profile if this fits.`,trialRequestSubmit:`Send request`,trialRequestSuccess:`Thanks. We will review the information and follow up if VerkRadar fits your services.`,trialRequestError:`Could not submit the request. Please try again or email us.`,publicSignupUnavailableTitle:`Accounts are created through an invite`,publicSignupUnavailableText:`Want a trial? Fill out the form here.`,publicSignupUnavailableHelp:`VerkRadar is set up manually for trial companies. We create access when the company profile is ready.`,tryDemoTitle:`Try the demo dashboard now.`,tryDemoText:`Load a sample company profile and see how the matching works.`,loadDemoCompany:`Load demo company`,authLoginTitle:`Login to VerkRadar`,authLoginSubtitle:`Access your company dashboard, saved opportunities and weekly reports.`,email:`Email`,password:`Password`,forgotPassword:`Forgot password?`,loggingIn:`Logging in...`,newToVerkRadar:`New to VerkRadar?`,createAccount:`Create account`,createAccountTitle:`Create your VerkRadar account`,createAccountSubtitle:`Start by creating an account. Then you’ll create your company profile.`,authRequiredTitle:`Log in to continue`,authRequiredText:`This page is available after you sign in.`,alreadyLoggedInTitle:`Already logged in`,alreadyLoggedInText:`Redirecting you to the next step.`,signupCreatedConfirm:`Account created. Check your email to confirm your account.`,inviteSignupCreatedConfirm:`Confirm your email, then return here to activate company access.`,inviteSignupEmailHelp:`Use the invited email to connect your login to the right company.`,signupExistingAccount:`This email already has an account. Log in or reset your password.`,signupNeutralNextSteps:`If an account exists for this email, you’ll receive an email with next steps. Otherwise, a new account has been created.`,emailOrPasswordIncorrect:`Email or password is incorrect.`,confirmEmailBeforeLogin:`Please confirm your email before logging in.`,passwordTooShort:`Password must be at least 6 characters.`,tooManyAttempts:`Too many attempts. Please wait a moment and try again.`,couldNotCreateAccount:`Could not create account. Please check your email and password.`,couldNotLogin:`Could not log in. Please try again.`,creating:`Creating...`,alreadyHaveAccount:`Already have an account?`,passwordReset:`Password reset`,resetPasswordTitle:`Reset your password`,resetPasswordSubtitle:`Enter your email and VerkRadar will send a secure reset link if the account exists.`,sending:`Sending...`,sendResetLink:`Send reset link`,rememberedPassword:`Remembered your password?`,backToLogin:`Back to login`,newPassword:`New password`,chooseNewPassword:`Choose a new password`,resetPasswordHelp:`Set a new password for your VerkRadar account. If the link has expired, request a new reset link.`,confirmNewPassword:`Confirm new password`,updating:`Updating...`,updatePassword:`Update password`,needNewLink:`Need a new link?`,sendAnotherResetLink:`Send another reset link`,onboarding:`SETUP`,onboardingTitle:`Set up your company`,onboardingText:`Tell us what your company does so VerkRadar can find relevant opportunities.`,companyBasics:`1. Basic information`,companyName:`Company name`,kennitala:`Kennitala`,contactEmail:`Contact email`,billingEmail:`Billing email`,contactName:`Contact name`,phone:`Phone`,address:`Address`,website:`Website`,industry:`Industry`,selectIndustry:`Select industry`,selectedPlan:`Selected plan`,plan_basic:`Basic`,plan_pro:`Pro`,plan_priority:`Priority`,servicesAndKeywords:`2. Services and keywords`,servicesHint:`Add services you actually provide. Start with the most important ones.`,servicesLabel:`Services`,servicesHelper:`Add the services your company actually sells. More specific services create better matches.`,extraWords:`Keywords`,includeKeywordsHelper:`Use words that often appear in opportunities you want.`,excludeWords:`Words that should lower or remove bad matches.`,excludeKeywordsHelper:`Words that should lower or remove bad matches.`,suggestedServicesFor:`Suggested services for {industry}`,suggestedKeywordsFor:`Suggested keywords for {industry}`,selectIndustryForServices:`Select an industry to see service suggestions`,selectIndustryForKeywords:`Select an industry to see keyword suggestions`,locationsTitle:`3. Locations`,locationsHint:`Use All Iceland for national tenders. Use travel settings when you can bid outside your base area for the right project size.`,baseLocation:`Base location`,baseLocationPlaceholder:`Example: East Iceland`,serviceAreas:`Service areas, comma separated`,serviceAreasPlaceholder:`Example: East Iceland, All Iceland`,travelScope:`Travel and scope`,willingToTravel:`Willing to travel for the right project`,includeNational:`Include national / All Iceland opportunities`,includeRemote:`Include remote / online opportunities`,minimumTravelValue:`Minimum project value for travel`,projectSize:`4. Settings`,minimumValue:`Minimum value`,maximumValue:`Maximum value`,showUnknownValue:`Show opportunities even if value is unknown`,reportPreferences:`Report preferences`,frequency:`Frequency`,weekly:`Weekly`,daily:`Daily`,reportDay:`Report day`,deadlineReminders:`Deadline reminders`,includeLowConfidence:`Include low-confidence matches`,saveProfile:`Save profile`,saving:`Saving...`,saved:`Saved`,dashboard:`Dashboard`,welcomeCompany:`Welcome, {company}`,dashboardIntro:`Ranked project opportunities based on your services, locations and keywords. {refresh}`,matchesLastRefreshed:`Last refreshed {time}.`,matchesAutoRefresh:`Matches refresh automatically after profile saves.`,refreshMatches:`Refresh matches`,refreshing:`Refreshing...`,viewWeeklyReport:`View report`,strongMatches:`Strong matches`,closingSoon:`Closing soon`,savedLabel:`Saved`,totalPotentialValue:`Total potential value`,searchOpportunities:`Search opportunities...`,savedOnly:`Saved only`,improveProfile:`Improve profile`,includeNationalOpportunities:`Include national opportunities`,showAllStoredMatches:`Show all matches`,inspectAllOpportunities:`Inspect all opportunities`,details:`Details`,save:`Save`,ignore:`Ignore`,originalLanguage:`Original language`,extractedProject:`Extracted project`,reportTitle:`Tender and opportunity report`,setupCompanyFirst:`Set up your company first`,reportNeedsProfile:`The report needs a company profile before it can generate relevant opportunity matches.`,dashboardNeedsProfile:`The dashboard needs a company profile so it can calculate relevant opportunity matches.`,weeklyReport:`Report`,saveReport:`Save report`,savingReport:`Saving...`,downloadPdf:`Download PDF`,copyReport:`Copy report`,reportArchive:`Report archive`,savedReports:`Saved reports`,loadingSavedReports:`Loading saved reports...`,noSavedReports:`No saved reports yet.`,viewReport:`View report`,closeReport:`Close report`,generatedBy:`Generated by VerkRadar`,reportForCompany:`Tender and opportunity report for {company}`,openTenders:`Open tenders / quote requests`,upcomingOpportunities:`Possible upcoming opportunities`,openTendersDescription:`Clear procurement intent. Review source documents before acting.`,upcomingDescription:`Upcoming procurement or project signals with clear evidence.`,reportFooter:`VerkRadar helps prioritise public opportunity review. Always check the original source documents, deadlines, requirements and eligibility before acting.`,buyer:`Buyer`,source:`Source`,description:`Description`,requirements:`Requirements`,noSpecificRequirements:`No specific requirements listed.`,noDescription:`No description available.`,noMatchReasons:`No match reasons available.`,matchReasons:`Match reasons`,opportunityInfo:`Opportunity info`,extraction:`Extraction`,sourceArticle:`Source article`,parentArticle:`Parent article`,openSourceArticle:`Open source article`,extractedRegion:`Extracted region`,projectNumber:`Project number`,tenderState:`Tender state`,quality:`Quality`,category:`Category`,type:`Type`,published:`Published`,cpv:`CPV`,recommendedNextSteps:`Recommended next steps`,noMajorRisks:`No major risks detected in this data.`,openSourceAndConfirm:`Open the source notice and confirm eligibility.`,removeFromSaved:`Remove from saved`,saveOpportunity:`Save opportunity`,markNotRelevant:`Mark not relevant`,publicProcurement:`Public procurement`,area:`Location`,deadline:`Deadline`,estimatedValue:`Estimated value`,notFound:`Not found`,notListed:`Not listed`,unknownBuyer:`Unknown buyer`,allIceland:`All Iceland`,whyThisMatters:`Why this matters`,risksToCheck:`Risks / things to check`,openSource:`Open source`,sourceLinkMissing:`Source link missing`,strongMatch:`Strong match`,goodMatch:`Good match`,possibleMatch:`Possible match`,weakMatch:`Weak match`,confirmedTender:`Confirmed tender`,likelyOpportunity:`Likely opportunity`,earlySignal:`Early signal`,needsReview:`Needs review`,tenderAwarded:`Tender awarded`,tenderAlreadyAnnounced:`Tender already announced`,upcomingTender:`Upcoming tender`,projectSignal:`Project signal`,nationalOpportunity:`National opportunity`,localMatch:`Local match`,mentionsService:`Mentions your service: {value}`,containsKeyword:`Contains your keyword: {value}`,procurement:`procurement`}};function n(e){let t=localStorage.getItem(e.language);return t===`en`||t===`is`?t:`is`}function r(e,n,r={}){let i=t[e||`is`]||t.is,a=t.en[n]||t.is[n]||n;return String(i[n]||a).replace(/\{(\w+)\}/g,(e,t)=>r[t]??``)}var i={services:{Electrical:[`raflagnir`,`rafvirki`,`brunakerfi`,`öryggiskerfi`,`lýsing`,`viðhald`,`þjónusta`,`hleðslustöðvar`,`töflusmíði`,`rafmagnseftirlit`],"IT / Web / Software":[`vefsíðugerð`,`vefhönnun`,`hugbúnaðarþróun`,`kerfisþróun`,`vefverslun`,`aðgengi`,`CMS`,`gagnagrunnar`,`viðhald`,`ráðgjöf`],Cleaning:[`Office cleaning`,`School cleaning`,`Facility cleaning`,`Window cleaning`,`Deep cleaning`,`Floor care`,`Municipal cleaning`,`Regular cleaning contracts`],Transport:[`Passenger transport`,`Goods transport`,`Healthcare transport`,`School transport`,`Shuttle services`,`Delivery services`,`Framework transport services`],Construction:[`jarðvinna`,`gatnagerð`,`vegagerð`,`malbikun`,`brúargerð`,`lagnavinna`,`framkvæmdir`,`viðhald`,`steypa`,`húsbyggingar`,`þakvinna`]},includeKeywords:{Electrical:[`rafmagn`,`rafvirki`,`brunakerfi`,`hleðslustöð`,`öryggiskerfi`,`myndavélakerfi`,`lýsing`,`viðhald`,`lagnir`,`neyðarlýsing`]}},a={companyName:`RafFix ehf.`,contactEmail:`owner@raffix.is`,website:`https://raffix.is`,industry:`Electrical`,services:[`electrical installation`,`maintenance`,`fire alarm systems`,`EV chargers`],includeKeywords:[`charging`,`inspection`,`public buildings`],excludeKeywords:[`telecom`,`snow removal`],locations:[`Reykjavík`,`Capital Area`,`Suðurnes`,`Remote / Online`],minProjectValue:5e5,maxProjectValue:3e7,allowUnknownValue:!0,reportFrequency:`weekly`,reportDay:`monday`,deadlineReminders:!0,includeLowConfidence:!1,autoAlertMode:`auto_safe_only`};function o(e=``){return{companyName:``,kennitala:``,contactEmail:e||``,billingEmail:e||``,contactName:``,phone:``,address:``,website:``,industry:``,selectedPlan:`basic`,billingStatus:`trial`,trialStartedAt:``,trialEndsAt:``,services:[],includeKeywords:[],excludeKeywords:[],locations:[],baseLocation:``,serviceAreas:[],willingToTravel:!1,nationalProjects:!1,remoteProjects:!1,minimumProjectValueForTravel:``,minProjectValue:``,maxProjectValue:``,allowUnknownValue:!0,reportFrequency:`weekly`,reportDay:`monday`,deadlineReminders:!0,includeLowConfidence:!1,autoAlertMode:`auto_safe_only`}}function s(e,t=`is`){let n=t===`is`;return{privacy:n?{eyebrow:`Lög og traust`,title:`Persónuvernd`,intro:`Hér er útskýrt á einföldu máli hvaða gögn VerkRadar vistar og hvernig þau eru notuð til að veita þjónustuna.`,sections:[[`Persónuvernd`,[`VerkRadar er vöktunar- og yfirlitskerfi fyrir fyrirtæki. Kerfið notar gögn sem notandi setur inn og opinber gögn um útboð og verkefni til að hjálpa fyrirtækjum að finna það sem gæti passað.`]],[`Hvaða gögn eru vistuð`,[`VerkRadar getur vistað fyrirtækjaheiti, tengiliðanetfang, vefslóð, atvinnugrein, þjónustuflokka, staðsetningar, leitarorð, stillingar, vistuð og hunsuð verkefni, samsvaranir og yfirlit.`,`Kerfið vistar einnig innskráningar- og lotugögn sem þarf til að halda notendum innskráðum og vernda aðgang.`]],[`Innskráning og aðgangur`,[`Notendur skrá sig inn með auðkenndum aðgangi. Aðgangur að mælaborði, stillingum og skýrslum er tengdur við notanda og fyrirtæki eftir því sem við á.`]],[`Fyrirtækjaprófíll og stillingar`,[`Fyrirtækjaprófíllinn er notaður til að bera opinber verkefni saman við þjónustu, svæði, lykilorð og óskir fyrirtækisins. Betri prófíll gefur yfirleitt betri samsvörun.`]],[`Vistuð og hunsuð tækifæri`,[`VerkRadar getur vistað hvaða verkefni notandi vistar, fylgist með eða hunsar. Þetta er notað til að bæta upplifun, síur og yfirlit.`]],[`Vafrakökur og vafrageymsla`,[`VerkRadar notar nauðsynlega vafrageymslu, lotugeymslu og sambærilega virkni fyrir innskráningu, Supabase Auth lotur, tungumál, stillingar og grunnvirkni appsins.`,`Við gerum ekki ráð fyrir auglýsinga- eða rekjanlegri markaðssetningargeymslu í þessari útgáfu. Ef greiningar eða auglýsingatól verða síðar bætt við þarf að uppfæra þessa lýsingu.`]],[`Hafa samband`,[`Spurningar um persónuvernd eða gögn má senda á info@froststudio.net.`]]]}:{eyebrow:`Legal and trust`,title:`Privacy`,intro:`This page explains in practical terms what VerkRadar stores and how that data is used to provide the service.`,sections:[[`Privacy`,[`VerkRadar is a monitoring and reporting tool for businesses. It uses user-entered company data and public tender/project data to help companies find relevant opportunities.`]],[`What data is stored`,[`VerkRadar may store company name, contact email, website, industry, service categories, locations, keywords, settings, saved and ignored opportunities, matches, and reports.`,`The system also stores login and session data needed to keep users signed in and protect account access.`]],[`Login and access`,[`Users log in with authenticated accounts. Access to dashboards, settings, and reports is connected to the user and company where applicable.`]],[`Company profile and settings`,[`The company profile is used to compare public opportunities against services, locations, keywords, and company preferences. A better profile usually creates better matches.`]],[`Saved and ignored opportunities`,[`VerkRadar may store which opportunities a user saves, watches, or ignores. This is used to improve the experience, filters, and reports.`]],[`Cookies and browser storage`,[`VerkRadar uses essential browser storage, session storage, and similar functionality for login, Supabase Auth sessions, language, preferences, and core app functionality.`,`We do not currently claim to use advertising or marketing tracking storage in this version. If analytics or advertising tools are added later, this section should be updated.`]],[`Contact`,[`Questions about privacy or data can be sent to info@froststudio.net.`]]]},terms:n?{eyebrow:`Lög og traust`,title:`Skilmálar`,intro:`Þessir skilmálar lýsa notkun VerkRadar á einföldu máli. Þeir eru ekki endanleg lögfræðiráðgjöf.`,sections:[[`Skilmálar`,[`Með því að nota VerkRadar samþykkir notandi að nota þjónustuna á ábyrgan hátt og staðfesta alltaf upplýsingar á upprunalegri heimild áður en brugðist er við.`]],[`Þjónustan`,[`VerkRadar vaktar opinberar heimildir, útboðsvefi, sveitarfélagssíður og aðrar heimildir þar sem það er heimilt og tæknilega mögulegt. Kerfið raðar verkefnum eftir fyrirtækjaprófíl og býr til mælaborð eða yfirlit.`]],[`Upprunaleg gögn eru endanleg heimild`,[`VerkRadar hjálpar til við að forgangsraða yfirferð opinberra tækifæra. Upprunaleg útboðsgögn, skilafrestir, kröfur og hæfisskilyrði á upprunalegri heimild eru alltaf endanleg heimild.`]],[`Engin trygging um fullkomna vöktun`,[`VerkRadar tryggir ekki að öll útboð finnist, að öll gögn séu fullkomin, að samsvörun sé alltaf rétt eða að fyrirtæki uppfylli skilyrði eða vinni verk.`]],[`Prufuaðgangur og verð`,[`Prufuaðgangur, verð, greiðslur og uppsagnir ráðast af verðsíðu, pöntunarsíðu eða skriflegu samkomulagi hverju sinni.`]],[`Uppsögn`,[`Notandi getur óskað eftir lokun eða breytingu á aðgangi. VerkRadar getur takmarkað aðgang ef þjónustan er misnotuð, greiðslur vantar eða öryggisáhætta kemur upp.`]],[`Ábyrgðartakmörkun`,[`VerkRadar ber ekki ábyrgð á töpuðum skilafrestum, röngum upplýsingum á upprunalegum heimildum, viðskiptatapi eða ákvörðunum sem teknar eru út frá yfirlitum án staðfestingar á frumgögnum.`]],[`Hafa samband`,[`Spurningar um skilmála má senda á info@froststudio.net.`]]]}:{eyebrow:`Legal and trust`,title:`Terms`,intro:`These terms describe VerkRadar use in plain language. They are not final legal advice.`,sections:[[`Terms`,[`By using VerkRadar, users agree to use the service responsibly and always verify information at the original source before acting.`]],[`The service`,[`VerkRadar monitors public sources, procurement portals, municipal pages, and other sources where allowed and technically feasible. The system ranks opportunities against company profiles and creates dashboards or reports.`]],[`Original data is the final authority`,[`VerkRadar helps prioritize review of public opportunities. Original tender documents, deadlines, requirements, and eligibility criteria at the original source are always the final authority.`]],[`No guarantee of complete monitoring`,[`VerkRadar does not guarantee that every tender is found, that all data is complete, that matching is always correct, or that a company is eligible for or will win any contract.`]],[`Trial access and pricing`,[`Trial access, pricing, billing, and cancellation are governed by the pricing page, order page, or written agreement in effect at the time.`]],[`Cancellation`,[`A user may request account changes or cancellation. VerkRadar may restrict access if the service is misused, payment is missing, or a security risk arises.`]],[`Limitation of liability`,[`VerkRadar is not responsible for missed deadlines, incorrect information at original sources, business losses, or decisions made from reports without checking source documents.`]],[`Contact`,[`Questions about these terms can be sent to info@froststudio.net.`]]]},data:n?{eyebrow:`Gagnaheimildir`,title:`Gagnaheimildir`,intro:`VerkRadar notar opinberar heimildir til að hjálpa fyrirtækjum að finna verkefni sem gætu skipt máli.`,sections:[[`Gagnaheimildir`,[`Kerfið safnar og samræmir opinberar upplýsingar þar sem slíkt er heimilt og tæknilega mögulegt.`]],[`Opinberar heimildir`,[`Heimildir geta verið útboðsvefir, opinberar stofnanir, RSS straumar, sveitarfélagssíður og aðrar opinberar síður.`]],[`Sveitarfélög og útboðsvefir`,[`VerkRadar getur vaktað sveitarfélög, innkaupa- og útboðsvefi og sértækar síður fyrir framkvæmdir, þjónustu eða innkaup.`]],[`Evrópsk útboð ef við á`,[`Evrópsk útboð geta verið sótt úr TED eða sambærilegum heimildum þegar þau eiga við markaðinn og fyrirtækjaprófíla.`]],[`Takmarkanir gagna`,[`Sumar heimildir veita ekki fulla skilafresti, verðmæti, kaupanda eða útboðsgögn í véllesanlegu formi. Gögn geta verið seinkuð, ófullkomin, tvítekin eða breytt á upprunalegri síðu.`]],[`Leiðréttingar`,[`Ef þú sérð rangar eða úreltar upplýsingar má senda ábendingu á info@froststudio.net. Opnið alltaf upprunalega heimild áður en brugðist er við.`]]]}:{eyebrow:`Data sources`,title:`Data sources`,intro:`VerkRadar uses public sources to help businesses find projects that may matter.`,sections:[[`Data sources`,[`The system collects and normalizes public information where allowed and technically feasible.`]],[`Public sources`,[`Sources can include procurement portals, public institutions, RSS feeds, municipal pages, and other official public pages.`]],[`Municipalities and procurement portals`,[`VerkRadar may monitor municipalities, procurement/tender portals, and specific pages for construction, services, or purchasing.`]],[`European tenders where applicable`,[`European tenders may be imported from TED or similar sources when relevant to the market and company profiles.`]],[`Data limitations`,[`Some sources do not provide full deadlines, values, buyer data, or tender documents in machine-readable form. Data may be delayed, incomplete, duplicated, or changed at the original source.`]],[`Corrections`,[`If you see incorrect or outdated information, send a correction to info@froststudio.net. Always open the original source before acting.`]]]},security:n?{eyebrow:`Öryggi`,title:`Öryggi`,intro:`VerkRadar notar innskráningu, aðgangsstýringu og aðskilnað gagna til að vernda fyrirtækjaupplýsingar.`,sections:[[`Öryggi`,[`Við reynum að halda öryggisupplýsingum hagnýtum og heiðarlegum. VerkRadar fullyrðir ekki um vottanir sem hafa ekki verið fengnar.`]],[`Innskráning`,[`Notendur skrá sig inn með auðkenndum aðgangi. Innskráning og lotur eru hluti af grunnvirkni appsins.`]],[`Aðgangsstýring`,[`Aðgangur að fyrirtækjagögnum, samsvörunum og skýrslum er aðgreindur eftir notanda og fyrirtæki þar sem það á við.`]],[`Fyrirtækjagögn`,[`Fyrirtækjaprófílar, stillingar og vistuð/hunsuð verkefni eru notuð til að veita þjónustuna og ættu ekki að vera sýnileg öðrum viðskiptavinum.`]],[`Admin aðgangur`,[`Admin verkfæri eru takmörkuð við skilgreinda stjórnendur og eru notuð til að fylgjast með heimildum, innflutningi, fyrirtækjum og handvirkri yfirferð.`]],[`Tilkynna vandamál`,[`Öryggisspurningar eða ábendingar má senda á info@froststudio.net.`]]]}:{eyebrow:`Security`,title:`Security`,intro:`VerkRadar uses authentication, access control, and data separation to protect company information.`,sections:[[`Security`,[`We try to keep security information practical and honest. VerkRadar does not claim certifications it has not obtained.`]],[`Login`,[`Users log in with authenticated accounts. Login and sessions are part of the app’s core functionality.`]],[`Access control`,[`Access to company data, matches, and reports is separated by user and company where applicable.`]],[`Company data`,[`Company profiles, settings, and saved/ignored opportunities are used to provide the service and should not be visible to other customers.`]],[`Admin access`,[`Admin tools are restricted to defined administrators and are used to monitor sources, imports, companies, and manual review.`]],[`Report an issue`,[`Security questions or reports can be sent to info@froststudio.net.`]]]},contact:n?{eyebrow:`Hafa samband`,title:`Hafa samband`,intro:`Viltu prófa VerkRadar, spyrja um vöktun eða benda á leiðréttingu?`,sections:[[`VerkRadar / Frost Studio`,[`Netfang: info@froststudio.net`,`Tengiliður: Kristján Jakob`]]]}:{eyebrow:`Contact`,title:`Contact`,intro:`Want to try VerkRadar, ask about monitoring, or report a correction?`,sections:[[`VerkRadar / Frost Studio`,[`Email: info@froststudio.net`,`Contact person: Kristján Jakob`]]]}}[e]}var c=`https://asojxjbsgqbfpbepojzh.supabase.co`,l=window.supabase?window.supabase.createClient(c,`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFzb2p4amJzZ3FiZnBiZXBvanpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAwNTU2NjgsImV4cCI6MjA5NTYzMTY2OH0.yPA34VbqWqKrBPespmHr5AojYzjhy3kGRxswO9XdAd0`):null,u=`verkradar_pending_invite_token`,d=`verkradar_pending_invite_flow`,f=`verkradar_legacy_pending_invite_token`,p=`vr_debug_invite`,m=1e3*60*60*24*7;function h(e){return String(e||``).trim().toLowerCase()}function ee(){return window.VERKRADAR_COMPANY_INVITE_URL?window.VERKRADAR_COMPANY_INVITE_URL:window.VERKRADAR_SUPABASE_URL?`${window.VERKRADAR_SUPABASE_URL}/functions/v1/company-invite`:`${c}/functions/v1/company-invite`}function g(e){let t=String(e||``),n=t.includes(`?`)?t.slice(t.indexOf(`?`)+1):``;return new URLSearchParams(n).get(`token`)||new URLSearchParams(n).get(`invite`)||``}function te(){try{return localStorage.getItem(p)===`1`}catch{return!1}}function _(e){let t=g(e),n=pe(),r=t?`url`:n.sessionToken?`sessionStorage`:n.localToken?`localStorage`:`missing`,i=t||n.sessionToken||n.localToken||``;return{current_url:me(window.location.href),current_hash:me(window.location.hash||``),token_source:r,token_present:!!i,token_length:i.length,localStorage_pending_token_present:!!n.localToken,sessionStorage_pending_token_present:!!n.sessionToken}}async function ne(e=``){try{let{data:t,error:n}=l?await l.auth.getSession():{data:{session:null},error:null},r=t?.session?.user||null;return{auth_session_present:!!(t?.session&&!n),auth_user_id_present:!!r?.id,auth_user_email:r?.email||``,email_confirmed_at_present:!!(r?.email_confirmed_at||r?.confirmed_at),auth_event_received:e||``,access_token_present:!!t?.session?.access_token}}catch(t){return{auth_session_present:!1,auth_user_id_present:!1,auth_user_email:``,email_confirmed_at_present:!1,auth_event_received:e||``,access_token_present:!1,auth_error:t instanceof Error?t.message:String(t||`Unknown auth error`)}}}function re(e){return ve(e)===`/accept-invite`}function ie(e){let t=ve(e);return[`/login`,`/signup`,`/forgot-password`].includes(t)&&!!g(e)}function v(e){return re(e)||ie(e)||ye(e)&&!!b()}function y(e){return v(e)?g(e)||b():(oe(),``)}function b(){try{localStorage.removeItem(f)}catch{}try{let e=sessionStorage.getItem(u)||``;if(e)return e;let t=JSON.parse(localStorage.getItem(d)||`null`);return!t?.token||!t?.expires_at||new Date(t.expires_at).getTime()<Date.now()?(localStorage.removeItem(d),``):String(t.token||``).trim()}catch{return``}}function x(e){if(g(e))return`url`;let t=pe();return t.sessionToken?`sessionStorage`:t.localToken?`localStorage`:`missing`}function ae(e){let t=String(e||``).trim();try{t&&(sessionStorage.setItem(u,t),localStorage.setItem(d,JSON.stringify({token:t,created_at:new Date().toISOString(),expires_at:new Date(Date.now()+m).toISOString()})))}catch{}return t}function oe(){try{sessionStorage.removeItem(u),localStorage.removeItem(d),localStorage.removeItem(f)}catch{}}function se(e){let t=String(e||``).trim();return t?`${window.location.origin}/#/accept-invite?token=${encodeURIComponent(t)}`:``}async function ce(e){let t=ee();if(!t)throw Error(`Company invite function is not configured.`);let n=await fetch(t,{method:`POST`,headers:fe(),body:JSON.stringify({action:`preview`,token:e})}),r=await _e(n),i={preview_request_sent:!0,preview_status:n.status,preview_response_body:he(r)};if(!n.ok){let e=Error(r.error||r.message||`Invite preview failed with status ${n.status}`);throw e.details={...r,__http_status:n.status,__debug:i},e}return{...r,__debug:i}}async function le(e){let t=ee();if(!t)throw Error(`Company invite function is not configured.`);let n;try{n=await ge()}catch(e){let t=Error(e instanceof Error?e.message:`You must be logged in to accept this invite.`);throw t.details={code:`no_session`,diagnostics:{accept_request_sent:!1,authorization_header_included:!1,accept_error_reason:`no_session`}},t}let r=await fetch(t,{method:`POST`,headers:n,body:JSON.stringify({action:`accept`,token:e})}),i=await _e(r),a={accept_request_sent:!0,authorization_header_included:!!n.authorization,accept_http_status:r.status,accept_response_body:he(i)};if(!r.ok){let e=Error(i.error||i.message||`Invite acceptance failed with status ${r.status}`);throw e.details={...i,__http_status:r.status,__debug:a},e}return{...i,__debug:a}}async function ue(e,t,n={}){let r=String(n.token||``).trim();if(r)return[await le(r)];let i=h(t?.email);if(!e||!t?.id||!i||n.allowEmailClaim!==!0)return[];let{data:a,error:o}=await e.from(`company_members`).select(`id, company_id, email, role, status`).eq(`email_normalized`,i).eq(`status`,`invited`);if(o)throw o;let s=a||[];if(!s.length)return[];let c=[];for(let n of s){let{data:r,error:a}=await e.from(`company_members`).update({user_id:t.id,status:`active`,accepted_at:new Date().toISOString(),revoked_at:null,updated_at:new Date().toISOString()}).eq(`id`,n.id).eq(`email_normalized`,i).eq(`status`,`invited`).select(`id, company_id, email, role, status, accepted_at`).maybeSingle();if(a)throw a;r&&c.push(r)}return c}async function de(e,t){if(!e||!t?.id)return[];let{data:n,error:r}=await e.from(`company_members`).select(`id, company_id, email, role, status, accepted_at`).eq(`user_id`,t.id).eq(`status`,`active`).order(`accepted_at`,{ascending:!0});if(r)throw r;return n||[]}function fe(){let e={"content-type":`application/json`},t=window.VERKRADAR_SUPABASE_ANON_KEY||`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFzb2p4amJzZ3FiZnBiZXBvanpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAwNTU2NjgsImV4cCI6MjA5NTYzMTY2OH0.yPA34VbqWqKrBPespmHr5AojYzjhy3kGRxswO9XdAd0`;return t&&(e.apikey=t),e}function pe(){let e={sessionToken:``,localToken:``};try{e.sessionToken=String(sessionStorage.getItem(u)||``).trim()}catch{}try{let t=JSON.parse(localStorage.getItem(d)||`null`);t?.token&&t?.expires_at&&new Date(t.expires_at).getTime()>=Date.now()&&(e.localToken=String(t.token||``).trim())}catch{}return e}function me(e){return String(e||``).replace(/([?&](?:token|invite)=)[^&#]+/gi,`$1[redacted]`)}function he(e){if(!e||typeof e!=`object`)return e||null;let{diagnostics:t,ok:n,status:r,code:i,error:a,message:o,company_name:s,invited_email:c,role:l,expires_at:u,company_id:d}=e;return{ok:n,status:r,code:i,error:a,message:o,company_name:s,invited_email:c,role:l,expires_at:u,company_id:d,diagnostics:t}}async function ge(){let e=fe(),{data:t,error:n}=l?await l.auth.getSession():{data:{session:null},error:null};if(n)throw n;let r=t.session?.access_token;if(!r)throw Error(`You must be logged in to accept this invite.`);return e.authorization=`Bearer ${r}`,e}async function _e(e){let t=await e.text();if(!t)return{};try{return JSON.parse(t)}catch{return{error:t}}}function ve(e){let t=String(e||`/`);return(t.startsWith(`/`)?t:`/${t}`).split(`?`)[0]||`/`}function ye(e){let t=String(e||``);return t.startsWith(`access_token=`)||t.startsWith(`code=`)||t.includes(`access_token=`)||t.includes(`code=`)||t.includes(`type=signup`)||t.includes(`type=email_change`)}function be(){return window.VERKRADAR_DAILY_PIPELINE_URL?window.VERKRADAR_DAILY_PIPELINE_URL:window.VERKRADAR_SUPABASE_URL?`${window.VERKRADAR_SUPABASE_URL}/functions/v1/daily-pipeline`:`${c}/functions/v1/daily-pipeline`}async function xe(){let e=be();if(!e)throw Error(`Daily pipeline function is not configured. Set window.VERKRADAR_DAILY_PIPELINE_URL or window.VERKRADAR_SUPABASE_URL.`);let t=await Se(),n=await fetch(e,{method:`POST`,headers:t,body:JSON.stringify({runDailyPipeline:!0})}),r=await Ce(n);if(!n.ok&&n.status!==207)throw Error(r.error||r.message||`Daily pipeline failed with status ${n.status}`);return r}async function Se(){let e={"content-type":`application/json`},t=window.VERKRADAR_SUPABASE_ANON_KEY||`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFzb2p4amJzZ3FiZnBiZXBvanpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAwNTU2NjgsImV4cCI6MjA5NTYzMTY2OH0.yPA34VbqWqKrBPespmHr5AojYzjhy3kGRxswO9XdAd0`;t&&(e.apikey=t);let{data:n,error:r}=l?await l.auth.getSession():{data:{session:null},error:null};if(r)throw r;let i=n.session?.access_token;if(!i)throw Error(`You must be logged in as an admin to run the daily pipeline.`);return e.authorization=`Bearer ${i}`,e}async function Ce(e){let t=await e.text();if(!t)return{};try{return JSON.parse(t)}catch{return{error:t}}}function we(){return window.VERKRADAR_AI_REVIEW_MATCH_URL?window.VERKRADAR_AI_REVIEW_MATCH_URL:window.VERKRADAR_SUPABASE_URL?`${window.VERKRADAR_SUPABASE_URL}/functions/v1/ai-review-match`:`${c}/functions/v1/ai-review-match`}async function Te(e,t={}){let n=we();if(!n)throw Error(`AI review function is not configured. Set window.VERKRADAR_AI_REVIEW_MATCH_URL or window.VERKRADAR_SUPABASE_URL.`);let r=await je(),i=await fetch(n,{method:`POST`,headers:r,body:JSON.stringify({matchId:e,force:t.force===!0})}),a=await Me(i);if(!i.ok)throw Error(a.error||a.message||`AI review failed with status ${i.status}`);return a}async function Ee(e,t={}){let n=we();if(!n)throw Error(`AI review function is not configured. Set window.VERKRADAR_AI_REVIEW_MATCH_URL or window.VERKRADAR_SUPABASE_URL.`);let r=await je(),i=await fetch(n,{method:`POST`,headers:r,body:JSON.stringify({batch:!0,companyId:e,limit:Math.max(1,Math.min(20,Number(t.limit||10))),force:t.force===!0,revalidate:t.revalidate===!0})}),a=await Me(i);if(!i.ok)throw Error(a.error||a.message||`AI review batch failed with status ${i.status}`);return a}async function De(e={}){let t=we();if(!t)throw Error(`AI review function is not configured. Set window.VERKRADAR_AI_REVIEW_MATCH_URL or window.VERKRADAR_SUPABASE_URL.`);let n=await je(),r=await fetch(t,{method:`POST`,headers:n,body:JSON.stringify({auto:!0,limit:Math.max(1,Math.min(10,Number(e.limit||10)))})}),i=await Me(r);if(!r.ok)throw Error(i.error||i.message||`Automatic AI review failed with status ${r.status}`);return i}async function Oe(e,t){let n=we();if(!n)throw Error(`AI review function is not configured. Set window.VERKRADAR_AI_REVIEW_MATCH_URL or window.VERKRADAR_SUPABASE_URL.`);let r=await je(),i=await fetch(n,{method:`POST`,headers:r,body:JSON.stringify({setCompanyAutoAiReviewEnabled:!0,company_id:e,enabled:t===!0})}),a=await Me(i);if(!i.ok)throw Error(a.error||a.message||`Auto AI toggle failed with status ${i.status}`);return a}async function ke(){if(!l)return{reviewsToday:0,estimatedCostToday:0,remainingReviewsToday:50};let e=new Date;e.setUTCHours(0,0,0,0);let{data:t,error:n}=await l.from(`ai_usage_log`).select(`opportunity_id, estimated_cost`).gte(`created_at`,e.toISOString());if(n)throw n;let r=t||[],i=r.filter(e=>e.opportunity_id).length;return{reviewsToday:i,estimatedCostToday:r.reduce((e,t)=>e+Number(t.estimated_cost||0),0),remainingReviewsToday:Math.max(0,50-i)}}function Ae(e){let t=Number(e||0);return`$${t.toFixed(t>=1?2:4)}`}async function je(){let e={"content-type":`application/json`},t=window.VERKRADAR_SUPABASE_ANON_KEY||`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFzb2p4amJzZ3FiZnBiZXBvanpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAwNTU2NjgsImV4cCI6MjA5NTYzMTY2OH0.yPA34VbqWqKrBPespmHr5AojYzjhy3kGRxswO9XdAd0`;t&&(e.apikey=t);let{data:n,error:r}=l?await l.auth.getSession():{data:{session:null},error:null};if(r)throw r;let i=n.session?.access_token;if(!i)throw Error(`You must be logged in as an admin to run AI review.`);return e.authorization=`Bearer ${i}`,e}async function Me(e){let t=await e.text();if(!t)return{};try{return JSON.parse(t)}catch{return{error:t}}}function Ne(e){let t=String(e?.fit||``),n=Number(e?.confidence||0),r=e?.send_to_client===!0||e?.sendToClient===!0;return n<.65?`needs_review`:t===`strong`&&r?`ready_for_admin`:t===`possible`&&r?`possible`:t===`weak`||t===`no_fit`?`low_priority`:`needs_review`}function Pe(e,t,n=null){let r=new Map,i=new Map;for(let e of t||[]){let t=String(e.company_id||``),n=String(e.opportunity_id||``),a=String(e.match_id||``);t&&n&&r.set(`${t}:${n}`,e),a&&i.set(a,e)}return(e||[]).map(e=>{let t=`${String(e.company_id||``)}:${String(e.opportunity_id||``)}`,a=r.get(t)||i.get(String(e.id||``));return a?{...e,ai_review_status:Ne(a),ai_review_fit:a.fit||e.ai_review_fit,ai_review_confidence:a.confidence??e.ai_review_confidence,ai_reviewed_at:a.updated_at||a.created_at||e.ai_reviewed_at,ai_review_send_to_client:a.send_to_client===!0,ai_review_reason:a.reason||``,ai_review_profile_hash:a.reviewed_profile_hash||``,ai_review_profile_stale:Be(a,n),ai_review_found:!0,ai_review_saved:!0}:{...e,ai_review_found:!1}})}function Fe(e,t=null){let n=Ve(t,e);if(n.outsideServiceArea)return{bucket:`outside_service_area`,label:`Outside service area`,tone:`warning`,clientReady:!1,reason:n.reason||`Outside current service area.`};let r=ze(e?.ai_review_skipped_reason),i=String(e?.ai_review_fit||``),a=Number(e?.ai_review_confidence||0),o=e?.ai_review_found===!0||e?.ai_review_saved===!0||!!i,s=String(e?.ai_review_status||`not_reviewed`);return r===`outside_service_area`?{bucket:`outside_service_area`,label:`Outside service area`,tone:`warning`,clientReady:!1,reason:`Skipped by batch review because the opportunity is outside the company service area.`}:o?e?.ai_review_profile_stale===!0?{bucket:`needs_review`,label:`AI review may be stale`,tone:`warning`,clientReady:!1,confidence:a}:i===`strong`&&e?.ai_review_send_to_client===!0?{bucket:`ai_recommended`,label:`AI recommended`,tone:`success`,clientReady:!0,confidence:a}:i===`possible`?{bucket:`ai_possible`,label:`AI possible`,tone:`notice`,clientReady:e?.ai_review_send_to_client===!0,confidence:a}:i===`weak`||i===`no_fit`||s===`low_priority`?{bucket:`low_priority`,label:i===`no_fit`?`AI: no fit`:`AI: weak fit`,tone:`muted`,clientReady:!1,confidence:a}:{bucket:`needs_review`,label:`Needs review`,tone:`warning`,clientReady:!1,confidence:a}:r?{bucket:r,label:Re(r),tone:r===`already_reviewed`?`notice`:`warning`,clientReady:!1,reason:Re(r)}:s===`needs_review`||String(e?.safety_status||``)===`needs_review`?{bucket:`needs_review`,label:`Needs review`,tone:`warning`,clientReady:!1}:{bucket:`not_reviewed`,label:`Not AI reviewed`,tone:`muted`,clientReady:!1}}function Ie(e,t,n=null){return(e||[]).filter(e=>{let r=Fe(e,n);return t===`ai_recommended`?r.bucket===`ai_recommended`:t===`ai_possible`?r.bucket===`ai_possible`:t===`needs_review`?r.bucket===`needs_review`:t===`outside_service_area`?r.bucket===`outside_service_area`:t===`not_reviewed`?r.bucket===`not_reviewed`:!0})}function Le(e){let t=JSON.stringify({services:Ue([...e?.services||[],...e?.includeKeywords||[],...(e?.excludeKeywords||[]).map(e=>`exclude:${e}`)]),locations:Ue([e?.baseLocation,...e?.locations||[],...e?.serviceAreas||[],e?.willingToTravel?`willing_to_travel:true`:`willing_to_travel:false`,e?.nationalProjects?`national_projects:true`:`national_projects:false`])}),n=5381;for(let e=0;e<t.length;e+=1)n=(n<<5)+n+t.charCodeAt(e),n|=0;return`profile_${Math.abs(n)}`}function Re(e){return{outside_service_area:`Outside service area`,already_reviewed:`Already reviewed`,expired:`Expired`,missing_deadline:`Missing deadline`,expired_or_missing_deadline:`Expired or missing deadline`,score_too_low:`Score too low`,manually_rejected:`Manually rejected`}[ze(e)]||`Skipped`}function ze(e){return String(e||``).trim().toLowerCase().replace(/[\s-]+/g,`_`)}function Be(e,t){if(!e||!t)return!1;let n=String(e.reviewed_profile_hash||``);return!!(n&&n!==Le(t))}function Ve(e,t){if(!e||e.nationalProjects===!0||e.willingToTravel===!0)return{outsideServiceArea:!1,reason:``};let n=We([e.baseLocation,...e.serviceAreas||[],...e.locations||[]].join(` `));if(!n||/all iceland|allt land|national|landsdekkandi/.test(n))return{outsideServiceArea:!1,reason:``};let r=t?.opportunities||{},i=r.raw_payload&&typeof r.raw_payload==`object`?r.raw_payload:{},a=We([r.title,r.location,i.region,i.extracted_location].join(` `));if(!a)return{outsideServiceArea:!1,reason:`Opportunity location unclear`};if(/(dalvik|akureyri|boggvisbraut|birkiholar|north iceland|nordurland)/.test(a)&&!/(dalvik|akureyri|north iceland|nordurland)/.test(n)||/(olafsvik|snaefellsnes|stykkisholmur|grundarfjordur)/.test(a)&&!/(olafsvik|snaefellsnes|stykkisholmur|grundarfjordur)/.test(n))return{outsideServiceArea:!0,reason:`Outside current service area`};let o=He(n),s=He(a);return!o.length||!s.length?{outsideServiceArea:!1,reason:``}:{outsideServiceArea:!s.some(e=>o.includes(e)),reason:`Outside current service area`}}function He(e){return[[`capital_area`,/reykjavik|capital area|hofudborg|gardabaer|kopavogur|seltjarnarnes|mosfellsbaer/],[`south`,/selfoss|arborg|sudurland|hveragerdi|olfus|rangarthing/],[`west_corridor`,/akranes|borgarnes|borgarbyggd|hvalfjordur/],[`north`,/dalvik|akureyri|nordurland|birkiholar|boggvisbraut/],[`snaefellsnes`,/olafsvik|snaefellsnes|stykkisholmur|grundarfjordur/]].filter(([,t])=>t.test(e)).map(([e])=>e)}function Ue(e){return Array.from(new Set((e||[]).map(e=>We(e)).filter(Boolean))).sort()}function We(e){return String(e||``).toLowerCase().normalize(`NFD`).replace(/[\u0300-\u036f]/g,``).replace(/þ/g,`th`).replace(/ð/g,`d`).replace(/æ/g,`ae`).replace(/ö/g,`o`).replace(/[^a-z0-9\s/-]/g,` `).replace(/\s+/g,` `).trim()}function Ge(e){let{escapeHtml:t,isRunning:n=!1,result:r=null}=e;return`
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
      ${r?Ke(r,t):``}
    </section>
  `}function Ke(e,t){let n=Array.isArray(e.company_summaries)?e.company_summaries:[],r=Array.isArray(e.match_details)?e.match_details:[];return`
    <div class="daily-pipeline-result">
      <div class="daily-pipeline-section">
        <h3>Yfirlit</h3>
        <div class="daily-pipeline-kpis">
          ${S(`Ný tækifæri`,e.opportunities_inserted,t)}
          ${S(`Uppfært`,e.opportunities_updated,t)}
          ${S(`Fyrirtæki uppfærð`,e.companies_refreshed,t)}
          ${S(`AI yfirferðir`,e.ai_reviews_created,t)}
          ${S(`Þegar yfirfarið`,e.skipped_already_reviewed,t)}
          ${S(`Utan þjónustusvæðis`,e.skipped_outside_service_area,t)}
          ${S(`Vantar skilafrest`,e.skipped_missing_deadline,t)}
          ${S(`Útrunnið`,e.skipped_expired,t)}
        </div>
      </div>

      <div class="daily-pipeline-section">
        <div class="daily-pipeline-heading">
          <h3>Fyrirtæki</h3>
          <span>${n.length} fyrirtæki í niðurstöðu</span>
        </div>
        ${n.length?`
          <div class="daily-company-grid">
            ${n.map(e=>qe(e,t)).join(``)}
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
            ${r.map(e=>Ye(e,t)).join(``)}
          </div>
        `:`<div class="empty-card">Engin ný AI-yfirfarin tækifæri í þessari keyrslu.</div>`}
      </div>

      ${Xe(e.errors,t)}
      ${Ze(e,t)}
    </div>
  `}function S(e,t,n){return`
    <div class="daily-kpi">
      <strong>${Number(t||0)}</strong>
      <span>${n(e)}</span>
    </div>
  `}function qe(e,t){let n=Array.isArray(e.match_details)?e.match_details:[];return`
    <article class="daily-company-card">
      <div class="daily-company-header">
        <h4>${t(e.company_name||`Óþekkt fyrirtæki`)}</h4>
        ${e.company_id?`<button class="btn btn-ghost btn-small" type="button" data-action="view-admin-company" data-id="${t(e.company_id)}">Open company</button>`:``}
      </div>
      <div class="daily-company-stats">
        ${Je(`Ný tækifæri`,e.new_matches_count,t)}
        ${Je(`Mælt með`,e.ai_recommended_count,t)}
        ${Je(`Mögulegt`,e.ai_possible_count,t)}
        ${Je(`Passar ekki`,e.ai_rejected_count,t)}
        ${Je(`Þegar yfirfarið`,e.already_reviewed_count,t)}
        ${Je(`Þarf yfirferð`,e.needs_manual_review_count,t)}
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
  `}function Je(e,t,n){return`
    <span>
      <strong>${Number(t||0)}</strong>
      ${n(e)}
    </span>
  `}function Ye(e,t){let n=Array.isArray(e.top_reasons)?e.top_reasons.filter(Boolean).slice(0,3):[],r=String(e.source_url||``).trim();return`
    <article class="daily-match-card">
      <div class="daily-match-top">
        <div>
          <h4>${t(e.opportunity_title||`Tækifæri`)}</h4>
          <p>${t(e.company_name||`Óþekkt fyrirtæki`)} · ${t(e.buyer||`Óþekktur kaupandi`)} · ${t(e.source||`Óþekkt heimild`)}</p>
        </div>
        <div class="daily-match-badges">
          <span>${t(Qe(e.ai_fit))}</span>
          <span>${Math.round(Number(e.ai_confidence||0)*100)}%</span>
          <span>${e.send_to_client?`Hæft til sendingar`:`Ekki senda`}</span>
          ${e.ai_review_is_stale?`<span class="is-warning">AI gæti verið úrelt</span>`:``}
        </div>
      </div>
      <div class="daily-match-meta">
        <span>Skilafrestur: ${t($e(e.deadline))}</span>
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
  `}function Xe(e,t){return!Array.isArray(e)||!e.length?``:`
    <div class="admin-message is-error">
      ${e.map(e=>`<div>${t(e)}</div>`).join(``)}
    </div>
  `}function Ze(e,t){return`
    <details class="daily-pipeline-diagnostics">
      <summary>Technical diagnostics</summary>
      <pre>${t(JSON.stringify(e,null,2))}</pre>
    </details>
  `}function Qe(e){let t=String(e||``).toLowerCase();return t===`strong`?`Mælt með`:t===`possible`?`Mögulegt`:t===`weak`||t===`no_fit`?`Passar ekki`:`Þarf yfirferð`}function $e(e){return String(e||``).trim()||`Ekki skráð`}function et(e,t){let{escapeHtml:n,formatDateTime:r,inviteEmail:i=``,inviteLink:a=``,inviteDebug:o=null,actionState:s=``}=t,c=Array.isArray(e.members)?e.members:[],l=c.filter(e=>e.status===`active`),u=c.filter(e=>e.status===`invited`),d=l.length?`Active`:u.length?`Invited`:`Not invited`,f=!!s;return`
    <section class="side-panel admin-company-access-panel">
      <h3>Customer access</h3>
      <p><strong>Access status:</strong> ${n(d)}</p>
      <p class="muted-text">Create an invite link, copy it, and send it manually. VerkRadar does not send invite emails yet.</p>
      ${c.length?`
        <ul class="admin-detail-list admin-company-access-list">
          ${c.map(e=>nt(e,{escapeHtml:n,formatDateTime:r,busy:f})).join(``)}
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
          ${tt(o,n)}
        `:u.length?`
          <p class="muted-text">No raw invite token is available in this browser session. Regenerate invite link before copying.</p>
        `:``}
      </div>
      <p class="muted-text">Aðgangur að fyrirtæki er afturkallaður, en innskráningaraðgangi notandans er ekki eytt.</p>
    </section>
  `}function tt(e,t){return e?`
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
  `:``}function nt(e,t){let{escapeHtml:n,formatDateTime:r,busy:i}=t,a=e.status===`revoked`,o=e.status===`active`?`is-success`:e.status===`invited`?`is-running`:``;return`
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
  `}function rt(e){let{escapeHtml:t,invite:n=null,loading:r=!1,error:i=``,debugInfo:a=null,showDebug:o=!1,user:s=null,accepting:c=!1,signupHref:l=`/signup`,loginHref:u=`/login`,language:d=`is`}=e,f=d===`is`,p=f?`Aðgangsboð í VerkRadar`:`VerkRadar invite`,m=f?`Sæki aðgangsboð...`:`Loading invite...`,h=f?`Fyrirtæki`:`Company`,ee=f?`Boðið netfang`:`Invited email`,g=f?`Innskráning`:`Login`,te=f?`Stofna aðgang`:`Create account`,_=f?`Ertu þegar með aðgang?`:`Already have an account?`,ne=f?`Tengja aðgang`:`Accept invite`,re=f?`Fara í innskráningu`:`Go to login`,ie=f?`Fara á forsíðu`:`Go to homepage`,v=f?`Aðgangsboðið tengir innskráninguna við fyrirtækjaprófíl sem hefur þegar verið settur upp.`:`This invite connects your login to an existing company profile.`;return`
    <section class="auth-page">
      <div class="auth-layout">
        <div class="auth-copy">
          <p class="eyebrow">${t(f?`AÐGANGUR`:`ACCESS`)}</p>
          <h1>${t(p)}</h1>
          <p>${t(v)}</p>
        </div>
        <div class="auth-form-column">
          <div class="auth-card invite-card">
            ${r?`<p>${t(m)}</p>`:``}
            ${i?`<div class="admin-message is-error">${t(i)}</div>`:``}
            ${o&&a?it(a,t):``}
            ${i&&!n?`
              <div class="auth-actions">
                <button class="btn btn-primary btn-large" type="button" data-action="go" data-href="/login">${t(re)}</button>
                <button class="btn btn-secondary btn-large" type="button" data-action="go" data-href="/">${t(ie)}</button>
              </div>
            `:``}
            ${n?`
              <div class="invite-summary">
                <p>${t(f?`Þér hefur verið boðið að fá aðgang að ${n.company_name||`fyrirtæki`}.`:`You have been invited to access ${n.company_name||`a company`}.`)}</p>
                <p><strong>${t(h)}:</strong> ${t(n.company_name||``)}</p>
                <p><strong>${t(ee)}:</strong> ${t(n.invited_email||n.email||``)}</p>
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
                <p class="auth-switch">${t(_)} <button type="button" data-action="go" data-href="${t(u)}">${t(g)}</button></p>
              `}
            `:``}
          </div>
        </div>
      </div>
    </section>
  `}function it(e,t){return`
    <details class="admin-invite-debug">
      <summary>Invite diagnostics</summary>
      ${[{title:`Route/token`,fields:[`current_url`,`current_hash`,`token_source`,`token_present`,`token_length`,`localStorage_pending_token_present`,`sessionStorage_pending_token_present`]},{title:`Auth`,fields:[`auth_session_present`,`auth_user_id_present`,`auth_user_email`,`email_confirmed_at_present`,`auth_event_received`,`access_token_present`]},{title:`Preview`,fields:[`preview_request_sent`,`preview_status`,`preview_response_body`]},{title:`Accept`,fields:[`accept_request_sent`,`authorization_header_included`,`accept_http_status`,`accept_response_body`,`accept_error_reason`]},{title:`Backend lookup`,fields:[`action`,`token_received`,`token_length`,`computed_hash_prefix`,`lookup_found`,`matching_rows_count`,`invite_status`,`invite_expires_at`,`latest_invite_status`,`latest_invite_expires_at`,`invited_email`,`auth_user_id_present`,`auth_user_email`,`email_match`,`authorization_header_present`,`invalid_reason`,`update_attempted`,`update_succeeded`]}].map(n=>`
        <div class="admin-invite-debug-group">
          <strong>${t(n.title)}</strong>
          ${n.fields.map(n=>at(n,e[n],t)).join(``)}
        </div>
      `).join(``)}
    </details>
  `}function at(e,t,n){let r=typeof t==`object`&&t?JSON.stringify(t,null,2):String(t??``);return`
    <div class="admin-invite-debug-row">
      <span>${n(e)}</span>
      <code>${n(r||`—`)}</code>
    </div>
  `}function ot({authMessage:e,escapeHtml:t}){if(!e)return``;let n=Array.isArray(e.actions)?e.actions:[];return`
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
  `}function st({t:e,escapeHtml:t,authForm:n,authSubmitting:r,authMessage:i,signupHref:a=`/signup`,signupLabel:o=``,forgotPasswordHref:s=`/forgot-password`}){let c=o||e(`createAccount`);return`
    <section class="auth-page">
      <div class="auth-layout">
        <div class="auth-copy">
          <p class="eyebrow">${t(e(`login`))}</p>
          <h1>${t(e(`authLoginTitle`))}</h1>
          <p>${t(e(`authLoginSubtitle`))}</p>
        </div>

        <div class="auth-form-column">
          ${ot({authMessage:i,escapeHtml:t})}
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
  `}function ct({t:e,escapeHtml:t,authForm:n,authSubmitting:r,authMessage:i}){return`
    <section class="auth-page">
      <div class="auth-layout">
        <div class="auth-copy">
          <p class="eyebrow">${t(e(`passwordReset`))}</p>
          <h1>${t(e(`resetPasswordTitle`))}</h1>
          <p>${t(e(`resetPasswordSubtitle`))}</p>
        </div>

        <div class="auth-form-column">
          ${ot({authMessage:i,escapeHtml:t})}
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
  `}function lt({t:e,escapeHtml:t,authForm:n,authSubmitting:r,authMessage:i}){return`
    <section class="auth-page">
      <div class="auth-layout">
        <div class="auth-copy">
          <p class="eyebrow">${t(e(`newPassword`))}</p>
          <h1>${t(e(`chooseNewPassword`))}</h1>
          <p>${t(e(`resetPasswordHelp`))}</p>
        </div>

        <div class="auth-form-column">
          ${ot({authMessage:i,escapeHtml:t})}
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
  `}function ut({t:e,escapeHtml:t,authForm:n,authSubmitting:r,authMessage:i,loginHref:a=`/login`,inviteEmail:o=``,isInviteSignup:s=!1}){let c=o||n.email;return`
    <section class="auth-page">
      <div class="auth-layout">
        <div class="auth-copy">
          <p class="eyebrow">${t(e(`createAccount`))}</p>
          <h1>${t(e(`createAccountTitle`))}</h1>
          <p>${t(e(`createAccountSubtitle`))}</p>
        </div>

        <div class="auth-form-column">
          ${ot({authMessage:i,escapeHtml:t})}
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
  `}function dt({t:e,escapeHtml:t,trialHref:n=`/trial`}){return`
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
  `}function ft(e){let{escapeHtml:t,usageSummary:n=null,lastResult:r=null,isRunning:i=!1,formatAiUsageCost:a=e=>`$${Number(e||0).toFixed(4)}`}=e;return`
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
      ${n?ht(n,{escapeHtml:t,formatAiUsageCost:a}):``}
      ${r?_t(r,t):``}
    </section>
  `}function pt(e,t){let{escapeHtml:n}=t,r=e.latestMatches||[];return r.length?`
    <ul class="admin-detail-list admin-ai-aware-match-list">
      ${r.map(t=>yt(t,{escapeHtml:n,company:e})).join(``)}
    </ul>
  `:`<p>No stored matches yet.</p>`}function mt(e,t){let{escapeHtml:n,formatDateTime:r,formatAiUsageCost:i=e=>`$${Number(e||0).toFixed(4)}`,actionState:a=``,filter:o=`not_reviewed`,lastResult:s=null,usageSummary:c=null}=t,l=Ie(e.latestMatches||[],o,e);return`
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

      ${c?ht(c,{escapeHtml:n,formatAiUsageCost:i}):``}
      ${s?gt(s,n):``}

      <label class="admin-inline-control admin-company-ai-filter">
        <span>AI review filter</span>
        <select data-admin-company-ai-filter>
          ${[[`ai_recommended`,`AI recommended`],[`ai_possible`,`AI possible`],[`needs_review`,`Needs review`],[`outside_service_area`,`Outside service area`],[`not_reviewed`,`Not AI reviewed`]].map(([e,t])=>`<option value="${e}" ${o===e?`selected`:``}>${t}</option>`).join(``)}
        </select>
      </label>

      ${l.length?`
        <ul class="admin-detail-list admin-ai-match-list">
          ${l.map(t=>bt(t,{escapeHtml:n,formatDateTime:r,company:e})).join(``)}
        </ul>
      `:`<p class="muted-text">No matches for this AI review filter.</p>`}
    </section>
  `}function ht(e,{escapeHtml:t,formatAiUsageCost:n}){return`
    <div class="admin-ai-usage-summary">
      <span><strong>AI usage today</strong></span>
      <span>${Number(e.reviewsToday||0)} reviews today</span>
      <span>${t(n(e.estimatedCostToday||0))} estimated cost</span>
      <span>${Number(e.remainingReviewsToday||0)} reviews remaining</span>
    </div>
  `}function gt(e,t){return`
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
  `}function _t(e,t){return`
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
    ${vt(e.company_diagnostics||[],t)}
  `}function vt(e,t){return e.length?`
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
  `:``}function yt(e,{escapeHtml:t,company:n}){let r=e.opportunities||{},i=Fe(e,n),a=Number(e.match_score||0);return`
    <li class="admin-ai-aware-match ${t(i.tone||`muted`)}">
      <strong>${t(r.title||`Opportunity`)}</strong>
      <span>
        <b>${t(i.label)}</b>
        ${i.confidence?` · ${Math.round(i.confidence*100)}%`:``}
        · Rule score ${a}
        ${i.bucket===`outside_service_area`?` · Rule label suppressed`:` · ${t(e.match_label||`Match`)}`}
      </span>
      ${e.ai_review_skipped_reason?`<small>Skipped: ${t(Re(e.ai_review_skipped_reason))}</small>`:``}
      ${e.ai_review_profile_stale?`<small>AI review may be stale because the company profile changed.</small>`:``}
    </li>
  `}function bt(e,{escapeHtml:t,formatDateTime:n,company:r}){let i=e.opportunities||{},a=Fe(e,r),o=a.confidence?` · ${Math.round(a.confidence*100)}%`:``,s=e.ai_reviewed_at?` · ${n(e.ai_reviewed_at)}`:``,c=e.ai_review_skipped_reason?` · Skipped: ${Re(e.ai_review_skipped_reason)}`:``;return`
    <li class="admin-ai-match-row ${t(a.tone||`muted`)}">
      <strong>${t(i.title||`Opportunity`)}</strong>
      <span>${t(a.label)}${t(o)}${t(s)}${t(c)}</span>
      ${e.ai_review_profile_stale?`<span>AI review may be stale because the company profile changed.</span>`:``}
      <span>Rule score ${Number(e.match_score||0)} · ${t(e.match_label||`Match`)}</span>
      <span class="admin-ai-debug">company_id=${t(e.company_id||``)} · opportunity_id=${t(e.opportunity_id||``)} · ai_review_found=${e.ai_review_found===!0?`true`:`false`}</span>
    </li>
  `}function xt({copy:e,suggestions:t,labels:n,escapeHtml:r}){return`
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
  `}function St({profile:e,matches:t,stats:n,filters:r,filterSummary:i,matchStatus:a,opportunityLoadError:o,isAdmin:s,matchingLoading:c,labels:l,renderFilterDropdown:u,renderOpportunityCard:d,renderEmptyState:f,escapeHtml:p}){return`
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
  `}function Ct({opp:e,saved:t,deadline:n,sourceBadgeHtml:r,qualityBadgeHtml:i,safetyBadgeHtml:a,extractedBadgeHtml:o,originalLanguageBadgeHtml:s,matchBadgeClass:c,matchLabel:l,buyer:u,location:d,value:f,reasons:p,labels:m,escapeHtml:h}){return`
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
  `}function wt({opp:e,saved:t,deadline:n,requirements:r,matchReasons:i,risks:a,safetyReasons:o,nextSteps:s,matchBadgeClass:c,matchLabel:l,qualityBadgeHtml:u,safetyBadgeHtml:d,extractedBadgeHtml:f,qualityWarningHtml:p,buyerSummary:m,location:h,value:ee,sourceUrl:g,extractedDetails:te,qualityLabel:_,safetyStatusLine:ne,category:re,type:ie,publishedDate:v,cpvCode:y,labels:b,escapeHtml:x}){return`
    <div class="modal-backdrop">
      <div class="modal" role="dialog" aria-modal="true">
        <div class="modal-header">
          <div>
            <div class="opportunity-badges">
              <span class="${c}">${x(l)} · ${e.matchScore}</span>
              ${u}
              ${d}
              ${f}
            </div>
            <h2>${x(e.title)}</h2>
            <p>${x(m)} · ${x(h)} · ${ee}</p>
          </div>
          <button type="button" class="icon-btn modal-close-btn" data-action="close-modal" aria-label="Close details">×</button>
        </div>

        <div class="modal-body">
          <div class="modal-grid">
            <section>
              ${p}
              <h3>${x(b.description)}</h3>
              <p>${x(e.description||b.noDescription)}</p>
              <h3>${x(b.requirements)}</h3>
              <ul class="check-list">
                ${(r.length?r:[b.noSpecificRequirements]).map(e=>`<li>${x(e)}</li>`).join(``)}
              </ul>
              <h3>${x(b.matchReasons)}</h3>
              <ul class="check-list">
                ${(i.length?i:[b.noMatchReasons]).map(e=>`<li>${x(e)}</li>`).join(``)}
              </ul>
            </section>

            <aside class="side-panel">
              <h3>${x(b.opportunityInfo)}</h3>
              <p><strong>${x(b.source)}:</strong> ${x(b.sourceValue)}</p>
              ${te}
              <p><strong>${x(b.quality)}:</strong> ${x(_)}</p>
              ${ne}
              <p><strong>${x(b.category)}:</strong> ${x(re)}</p>
              <p><strong>${x(b.type)}:</strong> ${x(ie)}</p>
              <p><strong>${x(b.deadline)}:</strong> <span class="${n.className}">${x(b.deadlineLabel)}</span></p>
              <p><strong>${x(b.published)}:</strong> ${x(v)}</p>
              <p><strong>${x(b.cpv)}:</strong> ${x(y||`—`)}</p>

              <h3>${x(b.risksToCheck)}</h3>
              <ul class="risk-list">
                ${(o.length?o:a).map(e=>`<li>${x(e)}</li>`).join(``)}
              </ul>

              <h3>${x(b.recommendedNextSteps)}</h3>
              <ol class="steps-list">
                ${(s.length?s:[b.openSourceAndConfirm]).map(e=>`<li>${x(e)}</li>`).join(``)}
              </ol>

              <div class="button-stack">
                <button class="btn btn-primary" data-action="save" data-id="${e.id}">${x(t?b.removeFromSaved:b.saveOpportunity)}</button>
                <a class="btn btn-secondary" href="${x(g)}" target="_blank" rel="noreferrer">${x(b.openSource)}</a>
                <button class="btn btn-ghost" data-action="ignore" data-id="${e.id}">${x(b.markNotRelevant)}</button>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  `}function Tt(e,t){return e.map(e=>`<p>${t(e)}</p>`).join(``)}function Et({language:e,escapeHtml:t,eyebrow:n,title:r,intro:i,sections:a}){let o=e===`is`?`Síðast uppfært`:`Last updated`,s=e===`is`?`4. júní 2026`:`June 4, 2026`;return`
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
            <div class="legal-content">${Tt(n,t)}</div>
          </section>
        `).join(``)}
      </div>
    </section>
  `}function Dt({t:e,escapeHtml:t,language:n,trialHref:r}){let i=n===`is`,a=i?[{title:`Gatnagerð og lagnir við nýtt hverfi`,type:`1`,score:`Mælt með · Skilafrestur eftir 10 daga`},{title:`Lóðarframkvæmdir við skóla`,type:`2`,score:`Passar við lóðarvinnu · Staðfesta gögn`},{title:`Bílastæði og yfirborðsfrágangur`,type:`3`,score:`Mögulegt tækifæri · Opna heimild`}]:[{title:`Roadworks and utilities for a new neighborhood`,type:`1`,score:`Strong match · Deadline in 10 days`},{title:`Site works at a school`,type:`2`,score:`Fits site work · Verify documents`},{title:`Parking area and surface finishing`,type:`3`,score:`Possible match · Open source`}],o=i?[[`Jarðvinna og gatnagerð`,`Útboð um vegi, lóðir, bílastæði, stíga og jarðvegsvinnu.`],[`Lagnavinna og fráveita`,`Verkefni um lagnir, dælustöðvar, fráveitu, vatn og hitaveitu.`],[`Malbikun og lóðarframkvæmdir`,`Gatnagerð, yfirborðsfrágangur, gangstéttir og viðhald.`],[`Rafverktakar`,`Raflagnir, brunakerfi, lýsing, öryggiskerfi og hleðslustöðvar.`],[`Ræstingar og þjónusta`,`Reglulegir þjónustusamningar, húsþjónusta og rekstrarverkefni.`],[`Verkfræðistofur og ráðgjafar`,`Hönnun, eftirlit, ráðgjöf og verkefnastjórnun þegar það á við.`]]:[[`Earthworks and roadworks`,`Tenders for roads, plots, parking areas, paths and earthworks.`],[`Utilities and drainage`,`Projects for pipes, pumping stations, drainage, water and heating utilities.`],[`Paving and site works`,`Road construction, surface finishing, sidewalks and maintenance.`],[`Electrical contractors`,`Wiring, fire alarms, lighting, security systems and chargers.`],[`Cleaning and services`,`Recurring service contracts, facility services and operations work.`],[`Engineering and advisors`,`Design, supervision, consulting and project management where relevant.`]];return`
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
  `}function Ot({t:e,escapeHtml:t,trialHref:n}){let r=[{key:`trial`,name:e(`pricingTrialPlan`),price:e(`pricingTrialPrice`),subtext:e(`pricingTrialSubtext`),items:[e(`pricingTrialManualProfile`),e(`pricingTrialFiltering`),e(`pricingTrialReportIfRelevant`),e(`pricingTrialNoCommitment`),e(`pricingTrialNoCard`)],cta:e(`pricingTrialCta`)},{key:`monitoring`,name:e(`pricingMonitoringPlan`),price:e(`pricingMonitoringPrice`),subtext:e(`pricingMonitoringSubtext`),highlighted:!0,items:[e(`pricingMonitoringSources`),e(`pricingMonitoringEmail`),e(`pricingMonitoringFilters`),e(`pricingMonitoringReminders`),e(`pricingMonitoringFeedback`),e(`pricingOneProfile`)],cta:e(`pricingMonitoringCta`)},{key:`custom`,name:e(`pricingCustomPlan`),price:e(`pricingCustomPrice`),items:[e(`pricingCustomProfiles`),e(`pricingCustomServices`),e(`pricingCustomMonitoring`),e(`pricingCustomPriorityReview`),e(`pricingCustomAudience`)],cta:e(`pricingCustomCta`)}];return`
    <section class="page-head">
      <p class="eyebrow">${t(e(`pricingEyebrow`))}</p>
      <h1>${t(e(`pricingHeadline`))}</h1>
      <p>${t(e(`pricingSubtitle`))}</p>
    </section>

    <section class="pricing-grid">
      ${r.map(r=>kt(r,{t:e,escapeHtml:t,trialHref:n})).join(``)}
    </section>
  `}function kt(e,{t,escapeHtml:n,trialHref:r}){let i=!!e.highlighted,a=`${r}${String(r).includes(`?`)?`&`:`?`}plan=${encodeURIComponent(e.key||`trial`)}`;return`
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
  `}function At({t:e,escapeHtml:t,submitted:n=!1,error:r=``}){return`
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
  `}var jt=[`Reykjavík`,`Capital Area`,`Suðurnes`,`South Iceland`,`West Iceland`,`North Iceland`,`East Iceland`,`Westfjords`,`All Iceland`,`Remote / Online`];function Mt(e){let{t,escapeHtml:n,profileDraft:r,renderCustomDropdown:i,getFilterOptions:a}=e,o=r.industry||``;return`
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
  `}function Nt(e){let{t,escapeHtml:n,profileDraft:r,arrayFieldText:i,getProfileSuggestions:a,renderSuggestionChips:o}=e,s=r.industry||``,c=a(`services`,s),l=a(`includeKeywords`,s);return`
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
  `}function Pt(e){let{t,escapeHtml:n,profileDraft:r,arrayFieldText:i,formatCustomerLocation:a}=e;return`
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
        ${jt.map(e=>`
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
  `}function Ft(e){let{t,escapeHtml:n,profileDraft:r}=e;return`
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
  `}function It(e){let{t,escapeHtml:n,capitalize:r,profileDraft:i}=e;return`
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
  `}function Lt(e){let{t,escapeHtml:n,hasProfile:r,isSavingProfile:i,profileSaved:a,profileSaveMessage:o,profileSaveError:s}=e,c=t(r?`saveProfile`:`createProfile`);return`
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
  `}function Rt(e){return`
    <form id="profile-form" class="form-card settings-profile-form">
      ${Mt(e)}
      ${Nt(e)}
      ${Pt(e)}
      ${Ft(e)}
      ${It(e)}
      ${Lt(e)}
    </form>
  `}function zt({report:e,title:t,created:n,itemLabel:r,statusLabel:i,hideLabel:a,viewLabel:o,escapeHtml:s}){return`
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
  `}function Bt({report:e,options:t={},companyName:n,dateRange:r,generatedByLabel:i,reportTitleLabel:a,closeLabel:o,escapeHtml:s}){return`
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
  `}function Vt({label:e,value:t,escapeHtml:n}){return`
    <div class="report-summary-card">
      <span>${n(e)}</span>
      <strong>${t}</strong>
    </div>
  `}function Ht({title:e,description:t,opportunities:n,emptyText:r,renderOpportunityItem:i,escapeHtml:a}){return`
    <section class="report-section">
      <div class="report-section-head">
        <h3>${a(e)}</h3>
        <p>${a(t)}</p>
      </div>
      ${n.length?n.map(i).join(``):`<div class="report-empty">${a(r)}</div>`}
    </section>
  `}function Ut({opp:e,valueText:t,deadlineText:n,sourceUrl:r,risks:i,fallbackReason:a,qualityBadgeHtml:o,matchBadgeClass:s,matchLabel:c,statusText:l,buyerLabel:u,buyerValue:d,sourceLabel:f,sourceValue:p,areaLabel:m,areaValue:h,deadlineLabel:ee,valueLabel:g,whyLabel:te,risksLabel:_,openSourceLabel:ne,sourceMissingLabel:re,formatReason:ie,formatRisk:v,escapeHtml:y}){let b=(e.matchReasons.length?e.matchReasons:[a]).slice(0,4);return`
    <article class="report-item">
      <div class="report-item-top">
        ${o}
        <span class="${s}">${y(c)} ${e.matchScore}</span>
      </div>
      <h4>${y(e.title)}</h4>
      ${l?`<p class="report-item-status">${y(l)}</p>`:``}
      <div class="report-facts">
        <span><strong>${y(u)}</strong>${y(d)}</span>
        <span><strong>${y(f)}</strong>${y(p)}</span>
        <span><strong>${y(m)}</strong>${y(h)}</span>
        <span><strong>${y(ee)}</strong><em>${y(n)}</em></span>
        <span><strong>${y(g)}</strong><em>${y(t)}</em></span>
      </div>
      <div class="report-detail-grid">
        <div>
          <h5>${y(te)}</h5>
          <ul>${b.map(e=>`<li>${y(ie(e))}</li>`).join(``)}</ul>
        </div>
        <div>
          <h5>${y(_)}</h5>
          <ul>${i.slice(0,5).map(e=>`<li>${y(v(e))}</li>`).join(``)}</ul>
        </div>
      </div>
      ${r?`<a class="report-source-link" href="${y(r)}" target="_blank" rel="noopener">${y(ne)} <span aria-hidden="true">↗</span></a>`:`<span class="report-source-link is-disabled">${y(re)}</span>`}
    </article>
  `}function Wt({status:e,label:t,escapeHtml:n}){return`<span class="report-quality ${n(e)}">${n(t)}</span>`}function Gt({t:e,escapeHtml:t,language:n,profileDraftDirty:r,profileLoadError:i,showDemoReset:a,profileFormHtml:o}){return`
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
  `}async function Kt(e){if(!l)throw Error(`Trial request storage is not configured.`);let t=qt(e),{error:n}=await l.from(`trial_requests`).insert(t);if(n)throw n;return{ok:!0,request:null,stored:!0}}function qt(e){let t=t=>String(e.get(t)||``).trim();return{company_name:t(`company`),contact_name:t(`contact`),email:t(`email`),phone:t(`phone`),services:t(`services`),locations:t(`regions`),message:t(`notes`),status:`new`}}var Jt=[[`Tender and opportunity report`,`Útboðs- og verkefnayfirlit`],[`Weekly Opportunity Report`,`Útboðs- og verkefnayfirlit`],[`Open tenders / quote requests`,`Opin útboð / verðfyrirspurnir`],[`Possible upcoming opportunities`,`Möguleg væntanleg tækifæri`],[`Needs review`,`Þarfnast staðfestingar`],[`Strong match`,`Sterk samsvörun`],[`Good match`,`Góð samsvörun`],[`Possible match`,`Möguleg samsvörun`],[`Weak match`,`Veik samsvörun`],[`Quality`,`Gæði`],[`Buyer`,`Kaupandi`],[`Source`,`Heimild`],[`Location`,`Svæði`],[`Deadline`,`Skilafrestur`],[`Estimated value`,`Áætlað verðmæti`],[`Value`,`Áætlað verðmæti`],[`Why this matters`,`Af hverju þetta gæti skipt máli`],[`Why this fits`,`Af hverju þetta gæti skipt máli`],[`Risks / things to check`,`Atriði til að staðfesta`],[`Open source`,`Opna heimild`],[`Unknown buyer`,`Óþekktur kaupandi`],[`All Iceland`,`Allt landið`],[`Not found`,`Fannst ekki`],[`Not listed`,`Ekki gefið upp`]];function Yt(e,t){return t===`is`?Jt.reduce((e,[t,n])=>e.replaceAll(t,n),String(e||``)):e}function Xt(e){return Array.from(new Set((e||[]).map(e=>String(e||``).trim()).filter(Boolean)))}function Zt(e){return String(e||``).replace(/^mentions your service:\s*/i,``).replace(/^contains your keyword:\s*/i,``).replace(/^mentions core service:\s*/i,``).replace(/^nefnir þjónustu ykkar:\s*/i,``).replace(/^inniheldur leitarorð:\s*/i,``).replace(/^nefnir lykilþjónustu:\s*/i,``).trim()}function C(e,t=`is`){let n=t!==`en`;return{downloadPdf:n?`Sækja PDF`:`Download PDF`,copyReportEmail:n?`Afrita skýrslupóst`:`Copy report email`,markAsSent:n?`Merkja sem sent`:`Mark as sent`,marking:n?`Merkir...`:`Marking...`,close:n?`Loka`:`Close`,sentStatus:n?`Sendingarstaða`:`Sent status`,notSent:n?`Ekki sent`:`Not sent`,sentOn:n?`Sent`:`Sent on`,company:n?`Fyrirtæki`:`Company`,period:n?`Tímabil`:`Period`,generatedAt:n?`Útbúið`:`Generated at`,mode:n?`Gerð`:`Mode`,items:n?`Fjöldi`:`Items`,currentActive:n?`Núverandi virk tækifæri`:`Current active opportunities`,newOpportunities:n?`Ný tækifæri`:`New opportunities`,reasons:n?`Ástæður`:`Reasons`,openSource:n?`Opna heimild`:`Open source`,verifyBadge:n?`Staðfesta gögn`:`Verify documents`,verifyTenderDocs:n?`Staðfesta útboðsgögn`:`Verify tender documents`,verificationSentence:n?`Staðfesta þarf útboðsgögn áður en brugðist er við.`:`Tender documents should be verified before taking action.`,matchScore:n?`Samsvörun`:`Match`,strongMatchScore:n?`Sterk samsvörun`:`Strong match`,openActiveTitle:n?`Opin útboð / virk tækifæri`:`Open tenders / active opportunities`,openActiveDescription:n?`Opin útboð eða virk verðfyrirspurnaratriði með skilafresti. Yfirfarið frumgögn áður en brugðist er við.`:`Open tenders or active quote-request items with deadlines. Review source documents before acting.`,possibleTitle:n?`Möguleg tækifæri til skoðunar`:`Possible opportunities to review`,possibleDescription:n?`Tækifæri sem gætu átt við, en þar sem þarf að staðfesta umfang, kröfur eða hlutverk fyrirtækisins.`:`Opportunities that may fit, but where scope, requirements, or company role should be verified.`,earlyTitle:n?`Væntanleg verkefni / early signals`:`Upcoming projects / early signals`,earlyDescription:n?`Vísbendingar um möguleg framtíðarverkefni sem eru ekki endilega formleg útboð ennþá.`:`Signals for possible future projects that may not be formal tenders yet.`}[e]||e}function Qt(e=`is`){return C(`verificationSentence`,e)}function $t(e,t=`is`){let n=Number(e?.matchScore||e?.match_score||0)>=85;return t===`en`?n?`Strong match`:`Match`:n?`Sterk samsvörun`:`Samsvörun`}function en(e,t=`is`){let n=String(e?.aiReviewFit||e?.ai_review_fit||``).toLowerCase()===`strong`||Number(e?.matchScore||e?.match_score||0)>=85;return t===`en`?n?`Recommended — tender documents should be verified`:`Possible opportunity — tender documents should be verified`:n?`Mælt með — staðfesta þarf útboðsgögn`:`Mögulegt tækifæri — staðfesta þarf útboðsgögn`}function tn(e,t=`is`){let n=String(e?.aiReviewFit||e?.ai_review_fit||``).toLowerCase();return t===`en`?n===`strong`||Number(e?.matchScore||0)>=85?`Recommended`:n===`possible`?`Possible opportunity`:String(e?.reportSection||``)===`early`?`Upcoming signal`:`Verify documents`:n===`strong`||Number(e?.matchScore||0)>=85?`Mælt með`:n===`possible`?`Mögulegt tækifæri`:String(e?.reportSection||``)===`early`?`Væntanlegt / merki`:`Staðfesta útboðsgögn`}function nn(e=[],t=`is`){let n=[],r=new Set;for(let i of e||[]){let e=String(i||``).trim();if(!e)continue;let a=e.toLowerCase();if(a.includes(`winter/snow service fit`)){n.push(t===`is`?`Passar við vetrarþjónustu/snjómokstur; staðfestið umfang og getu.`:`Winter/snow service fit; verify capacity and scope.`);continue}if(a.includes(`deadline is valid and in the future`)){n.push(t===`is`?`Skilafrestur er í framtíðinni.`:`Deadline is valid and in the future.`);continue}if(a.includes(`location matches company service areas`)){n.push(t===`is`?`Staðsetning passar við þjónustusvæði.`:`Location matches company service areas.`);continue}if(a.includes(`verify capacity and scope`)){n.push(t===`is`?`Staðfestið umfang og getu.`:`Verify capacity and scope.`);continue}let o=Zt(e),s=o.toLowerCase();if(!o||r.has(s))continue;r.add(s);let c=t===`is`&&/passar|nefnir|stað|skilafrestur|þjónustu|umfang/i.test(o);n.push(t===`is`?c?o:`Passar við þjónustu eða leitarorð: ${o}`:/matches|mentions|deadline|location|verify/i.test(o)?o:`Matches service or keyword: ${o}`)}return Xt(n).slice(0,4)}function rn(e,t=`is`){let n=String(e||``).trim();if(!n)return``;let r=n.toLowerCase();if(t!==`en`){if(r.includes(`deadline not available`))return`Skilafrestur fannst ekki í innfluttum gögnum — staðfestið á upprunasíðu.`;if(r.includes(`open the source documents`))return`Opna útboðsgögn.`;if(r.includes(`confirm mandatory requirements`))return`Staðfesta kröfur og hæfisskilyrði.`;if(r.includes(`check capacity and profitability`))return`Meta getu og arðsemi.`;if(r.includes(`prepare questions before the deadline`))return`Undirbúa fyrirspurnir fyrir skilafrest.`;if(r.includes(`verify capacity and scope`))return`Staðfestið umfang og getu.`}return n}function an({companyName:e,matches:t,language:n=`is`}){let r=n!==`en`,i=r?`Sæll/Sæl,

VerkRadar fann eftirfarandi tækifæri sem gætu passað við ykkar þjónustu:`:`Hi,

VerkRadar found the following opportunities that may fit your services:`,a=r?`Staðfestið alltaf útboðsgögn, skilafresti og kröfur á upprunalegri heimild áður en brugðist er við.

Kv.
Kristján`:`Always verify the tender documents, deadlines, requirements, and eligibility on the original source before taking action.

Best,
Kristján`;return`${i}\n\n${(t||[]).map(e=>{let t=nn(e.matchReasons||e.reasons||[],n),i=t.length?t.map(e=>`- ${e}`).join(`
`):`- ${r?`Passar við fyrirtækjaprófílinn.`:`Matches the company profile.`}`;return r?`${e.title}
Útboðsaðili: ${e.buyer||`Óþekktur kaupandi`}
Skilafrestur: ${e.deadline||`Fannst ekki`}
Staða: ${en(e,n)}

Af hverju þetta gæti passað:
${i}

Heimild:
${e.url||`Engin heimild skráð`}`:`${e.title}
Buyer: ${e.buyer||`Unknown buyer`}
Deadline: ${e.deadline||`Not found`}
Status: ${en(e,n)}

Why this may fit:
${i}

Source:
${e.url||`No source URL listed`}`}).join(`

`)||(r?`Engin atriði eru í þessu yfirliti.`:`No items are included in this report.`)}\n\n${a}`}function on(e){return String(e||``).toLowerCase()}function sn(e){return Array.isArray(e)?e.map(e=>String(e||``).trim()).filter(Boolean):[]}function cn(e){return Array.from(new Set((e||[]).map(e=>String(e||``).trim()).filter(Boolean)))}function ln(e){return e?new Date(e).getTime():NaN}function un(e){let t=ln(e);if(Number.isNaN(t))return!0;let n=new Date;return n.setHours(0,0,0,0),t<n.getTime()}function dn(e={}){return{aiReviewFit:on(e.fit),aiReviewConfidence:Number(e.confidence||0),aiReviewSendToClient:e.send_to_client===!0||e.sendToClient===!0,aiReviewReason:String(e.reason||``),aiFitReasons:sn(e.fit_reasons||e.fitReasons),aiRisksOrQuestions:sn(e.risks_or_questions||e.risksOrQuestions),aiSuggestedClientSummary:String(e.suggested_client_summary||e.suggestedClientSummary||``),aiReviewedAt:e.updated_at||e.created_at||``}}function fn(e,t){let n=new Map;for(let e of t||[]){let t=String(e.opportunity_id||e.opportunityId||``);t&&n.set(t,dn(e))}return(e||[]).map(e=>{let t=n.get(String(e.id||e.opportunity_id||``));return t?{...e,...t,matchReasons:cn([t.aiSuggestedClientSummary,...t.aiFitReasons,...Array.isArray(e.matchReasons)?e.matchReasons:[]]),risks:cn([...t.aiRisksOrQuestions,...Array.isArray(e.risks)?e.risks:[]])}:e})}function pn(e){return mn(e)!==`excluded`}function mn(e){let t=on(e?.aiReviewFit||e?.ai_review_fit);if(!e?.deadline||un(e.deadline))return`excluded`;let n=e?.aiReviewSendToClient===!0||e?.ai_review_send_to_client===!0;if(String(e?.aiReviewSkippedReason||e?.ai_review_skipped_reason||``).toLowerCase()===`outside_service_area`||[e?.aiReviewReason,...sn(e?.aiRisksOrQuestions||e?.risks_or_questions)].join(` `).toLowerCase().includes(`outside service area`))return`excluded`;if(t)return[`weak`,`no_fit`].includes(t)?`excluded`:t===`strong`&&n?`ai_strong`:t===`possible`&&n?`ai_possible`:`excluded`;let r=String(e?.safetyStatus||e?.safety_status||`auto_approved`).toLowerCase();if(r===`hidden`||r===`needs_review`)return`excluded`;let i=Number(e?.matchScore||e?.match_score||0),a=String(e?.matchLabel||e?.match_label||``).toLowerCase();return i>=75||a.includes(`strong`)||a.includes(`good`)?`rule_fallback`:`excluded`}function hn(e){let t=mn(e);return gn(e)&&(t===`ai_strong`||t===`ai_possible`||t===`rule_fallback`)?`confirmed`:t===`ai_possible`||t===`rule_fallback`?`early`:`excluded`}function gn(e){return!!e?.deadline&&!un(e.deadline)}function _n(e){return[...e||[]].filter(pn).sort((e,t)=>{let n={ai_strong:0,ai_possible:1,rule_fallback:2},r=mn(e),i=mn(t);return(n[r]??9)-(n[i]??9)||Number(t.aiReviewConfidence||t.ai_review_confidence||0)-Number(e.aiReviewConfidence||e.ai_review_confidence||0)||Number(t.matchScore||t.match_score||0)-Number(e.matchScore||e.match_score||0)||ln(e.deadline)-ln(t.deadline)})}function w(e){if(!e)return 999;let t=new Date,n=new Date(`${e}T00:00:00`);if(Number.isNaN(n.getTime()))return 999;let r=n-new Date(t.getFullYear(),t.getMonth(),t.getDate());return Math.ceil(r/(1e3*60*60*24))}function vn(e){if(!e)return`No deadline`;let t=new Date(`${e}T00:00:00`);return Number.isNaN(t.getTime())?String(e):new Intl.DateTimeFormat(`en-GB`,{year:`numeric`,month:`short`,day:`2-digit`}).format(t)}function T(e){return e?new Intl.DateTimeFormat(`en-GB`,{year:`numeric`,month:`short`,day:`2-digit`}).format(new Date(e)):`Unknown date`}function yn(e){return Array.from(new Set((e||[]).map(e=>String(e||``).trim()).filter(Boolean)))}function bn(e){return String(e||``).split(`,`).map(e=>e.trim()).filter(Boolean)}function E(e){return yn(Array.isArray(e)?e:bn(e))}function xn(e){return bn(e)}function D(e){return String(e||``).toLowerCase().normalize(`NFD`).replace(/[\u0300-\u036f]/g,``).replace(/æ/g,`ae`).replace(/[ðþ]/g,e=>e===`ð`?`d`:`th`).replace(/[^a-z0-9]+/g,` `).trim()}function O(e){return String(e??``).replaceAll(`&`,`&amp;`).replaceAll(`<`,`&lt;`).replaceAll(`>`,`&gt;`).replaceAll(`"`,`&quot;`).replaceAll(`'`,`&#039;`)}function Sn(e){return String(e||``).charAt(0).toUpperCase()+String(e||``).slice(1)}function Cn(e){return/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(String(e||``))}function wn(e){let t=String(e||``).trim();return/^https?:\/\//i.test(t)?t:``}function Tn(e,t=`ISK`){if(!e)return``;let n=t||`ISK`,r=n===`ISK`?`kr`:n;return`${new Intl.NumberFormat(`is-IS`).format(e)} ${r}`}function En(e,t){let n=t||(e=>e);return{"Confirmed tender":n(`confirmedTender`),"Likely opportunity":n(`likelyOpportunity`),"Early signal":n(`earlySignal`),"Needs review":n(`needsReview`),"Tender awarded":n(`tenderAwarded`),"Tender already announced":n(`tenderAlreadyAnnounced`),"Upcoming tender":n(`upcomingTender`),"Project signal":n(`projectSignal`),"Original language":n(`originalLanguage`)}[e]||e||``}function Dn(e,t){let n=t||(e=>e);return{"Strong match":n(`strongMatch`),"Good match":n(`goodMatch`),"Possible match":n(`possibleMatch`),"Weak match":n(`weakMatch`)}[e]||e||``}function On(e,t,n){let r=n||(e=>e),i=String(t||``).trim();return i?e===`buyer`&&(kn(i)||i.toLowerCase()===`unknown buyer`)?r(`unknownBuyer`):e===`location`&&i.toLowerCase()===`all iceland`?r(`allIceland`):e===`source`?i.replace(/\bprocurement\b/gi,r(`procurement`)):i:r(e===`buyer`?`unknownBuyer`:`notListed`)}function kn(e){let t=D(e);return!!(!t||[`admin`,`administrator`,`ritstjori`,`editor`,`noreply`,`no reply`,`wordpress`,`wp admin`,`user`,`test`].includes(t)||t.includes(`noreply`)||/^wp\s*[-_]?\s*\d+$/.test(t))}function An(e){let t=D(e);return t?t.includes(`borgarbyggd`)?`Borgarbyggð`:t.includes(`akranes`)?`Akraneskaupstaður`:t.includes(`faxafloahafnir`)?`Faxaflóahafnir`:t.includes(`gardabaer`)?`Garðabær`:t.includes(`reykjanesbaer`)?`Reykjanesbær`:t.includes(`kopavogur`)?`Kópavogur`:t.includes(`hafnarfjordur`)?`Hafnarfjarðarbær`:t.includes(`mosfellsbaer`)?`Mosfellsbær`:t.includes(`arborg`)?`Sveitarfélagið Árborg`:t.includes(`fjardabyggd`)?`Fjarðabyggð`:t.includes(`mulathing`)?`Múlaþing`:t.includes(`garðabaer`)?`Garðabær`:(t.includes(`rikiskaup`)||t.includes(`utbodsvefur`),``):``}function jn(e,t,n={}){let r=String(e||``).trim();if(/reykjavíkurborg/i.test(r))return`Reykjavíkurborg`;if(r&&!kn(r)&&r.toLowerCase()!==`unknown buyer`)return r;let i=String(n.extracted_buyer||n.buyer||``).trim();return/reykjavíkurborg/i.test(i)?`Reykjavíkurborg`:i&&!kn(i)&&i.toLowerCase()!==`unknown buyer`?i:An(t)||`Unknown buyer`}function Mn(e){let t=D(e);return t?t.includes(`borgarbyggd`)?`Borgarbyggð / Vesturland`:t.includes(`akranes`)?`Akranes / Vesturland`:t.includes(`faxafloahafnir`)?`Höfuðborgarsvæðið`:t.includes(`arborg`)?`Árborg / Suðurland`:``:``}function Nn(e,t,n){let r=String(e||``).trim();return t===`is`&&{"Capital Area":`Höfuðborgarsvæðið`,"South Iceland":`Suðurland`,"West Iceland":`Vesturland`,"North Iceland":`Norðurland`,"East Iceland":`Austurland`,Westfjords:`Vestfirðir`,"All Iceland":(n||(e=>e))(`allIceland`),"Remote / Online":`Fjarvinna / netverkefni`}[r]||r}function Pn(e,t,{language:n=`en`,translate:r}={}){let i=r||(e=>e),a=On(e,t,i);if(n!==`is`)return a;let o=String(a||``).trim().toLowerCase();return{"public procurement":i(`publicProcurement`),procurement:i(`procurement`),tender:i(`tender`)}[o]||a.replace(/\bpublic procurement\b/gi,i(`publicProcurement`)).replace(/\btender\b/gi,i(`tender`))}function Fn(e,{language:t=`en`,translate:n}={}){let r=n||((e,t={})=>t.value?`${e}: ${t.value}`:e),i=String(e||``);return i.startsWith(`Mentions your service:`)?r(`mentionsService`,{value:i.slice(22).trim()}):i.startsWith(`Contains your keyword:`)?r(`containsKeyword`,{value:i.slice(22).trim()}):{"National opportunity":r(`nationalOpportunity`),"Local match":r(`localMatch`),"Located in your selected region":r(`localMatch`),"Project value is inside your preferred range":t===`is`?`Áætlað verðmæti er innan óskaðs bils`:`Project value is inside your preferred range`,"Deadline is coming up soon":t===`is`?`Skilafrestur nálgast`:`Deadline is coming up soon`,"Matched to your company profile.":t===`is`?`Passar við fyrirtækjaprófílinn.`:`Matched to your company profile.`,"Matched to your profile by service, location or keyword overlap.":t===`is`?`Passar við þjónustu, svæði eða lykilorð í prófílnum.`:`Matched to your profile by service, location or keyword overlap.`}[i]||i||``}function In(e,t=`en`){return t===`is`?{"Deadline not available in feed — verify on source page.":`Skilafrestur fannst ekki í innfluttum gögnum — staðfestið á upprunasíðu.`,"Deadline not available in imported data — verify on source page.":`Skilafrestur fannst ekki í innfluttum gögnum — staðfestið á upprunasíðu.`,"Deadline not available in source — verify page.":`Skilafrestur fannst ekki í heimild - staðfestið á upprunalegri síðu.`,"No formal tender deadline extracted — verify source article.":`Formlegur skilafrestur fannst ekki - staðfestið í heimildargrein.`,"Formal tender deadline not found yet — monitor source article.":`Formlegur skilafrestur fannst ekki enn - fylgist með heimildargrein.`,"Tender appears already announced/awarded — verify source article.":`Útboð virðist þegar auglýst eða afgreitt - staðfestið í heimildargrein.`,"Estimated value is not listed in the imported data.":`Áætlað verðmæti er ekki gefið upp í innfluttum gögnum.`,"Open the source page and confirm mandatory requirements.":`Opnið upprunalega heimild og staðfestið skyldukröfur.`,"Extracted project signal — verify tender timing in the source article.":`Útdregin verkefnavísbending - staðfestið útboðstímasetningu í heimildargrein.`,"Imported from broad feed — verify that this is a real tender or business opportunity.":`Innflutt úr breiðum fréttastraumi - staðfestið að þetta sé raunverulegt útboð eða viðskiptatækifæri.`}[e]||e||``:e||``}function Ln(e,t=`en`){return t===`is`?{"Open the source documents":`Opna útboðsgögn`,"Confirm mandatory requirements":`Staðfesta kröfur og hæfisskilyrði`,"Check capacity and profitability":`Meta getu og arðsemi`,"Prepare questions before the deadline":`Undirbúa fyrirspurnir fyrir skilafrest`,"Open source documents and confirm requirements.":`Opna útboðsgögn og staðfesta kröfur.`}[e]||e||``:e||``}var Rn=`Deadline not available in imported data — verify on source page.`,zn=`No formal tender deadline extracted — verify source article.`;function Bn(){return n(e)}function k(e,t={}){return r(A?.language||`is`,e,t)}function Vn(t){A.language=t===`en`?`en`:`is`,localStorage.setItem(e.language,A.language),Z()}var Hn=a,Un=12e3;function Wn(){return o(A.user?.email||``)}var A={route:location.hash.replace(`#`,``)||`/`,language:Bn(),pendingSignupPlan:Zn(location.hash.replace(`#`,``)||`/`)||Jn(),pendingInviteToken:y(location.hash.replace(`#`,``)||`/`),invitePreview:null,invitePreviewLoading:!1,invitePreviewError:null,invitePreviewErrorToken:``,invitePreviewDebug:null,inviteAccepting:!1,inviteAuthEvent:``,trialRequestSubmitted:!1,trialRequestError:``,user:null,currentUser:null,isAdmin:!1,authLoading:!0,isBooting:!0,authLoaded:!1,profileLoaded:!1,adminLoaded:!1,bootError:null,authMessage:null,authForm:{email:``,password:``,newPassword:``,confirmPassword:``},authSubmitting:!1,isSavingProfile:!1,profileSaved:!1,profileSaveMessage:null,profileSaveError:null,profile:null,companyMembership:null,profileDraft:null,profileDraftDirty:!1,profileLoading:!1,profileLoadError:null,companyId:null,opportunities:[],storedMatches:[],opportunityActions:[],saved:ya(e.saved),ignored:ya(e.ignored),filters:{search:``,label:`recommended`,category:`all`,location:`all`,type:`all`,savedOnly:!1},tedImportMode:`nordic`,dropdown:{openKey:null,focusedIndex:0},importStatus:null,importLoading:!1,connectorImportStatus:null,connectorImportLoading:!1,connectorTestingSourceId:null,importedTedOpportunities:[],importedTedOpportunitiesLoading:!1,importedTedOpportunitiesLoaded:!1,importedTedOpportunitiesError:null,importRuns:[],importRunsLoading:!1,importRunsLoaded:!1,importRunsError:null,adminReports:[],adminReportsLoading:!1,adminReportsLoaded:!1,adminReportsError:null,selectedAdminReport:null,selectedAdminReportLoading:!1,selectedAdminReportError:null,sourceCoverage:[],sourceCoverageLoading:!1,sourceCoverageLoaded:!1,sourceCoverageError:null,expandedSourceId:null,adminCompanies:[],adminCompaniesLoading:!1,adminCompaniesLoaded:!1,adminCompaniesError:null,adminReviewMatches:[],adminReviewLoading:!1,adminReviewLoaded:!1,adminReviewError:null,adminReviewActions:{},adminAiReviewActions:{},adminAiReviewError:null,adminCompanyAiReviewActions:{},adminCompanyAiReviewResults:{},adminCompanyAiReviewFilter:`not_reviewed`,adminCompanyActions:{},adminCompanyAccessActions:{},adminCompanyInviteDrafts:{},adminCompanyInviteLinks:{},adminCompanyInviteDebug:{},adminReportDeliveryActions:{},selectedAdminCompanyId:null,adminActiveTab:`overview`,adminCompanyFilters:{search:``,industry:`all`,profileStatus:`all`,plan:`all`},adminReportMode:`all_current`,adminOpportunityFilters:{source:`all`,missingDeadlineSource:`all`,status:`all`,country:`all`,search:``,debugCompanyId:``,tedOnly:!1,manualOnly:!1,showDemoTest:!1},adminOpportunityDraft:ar(),matchStatus:null,matchingLoading:!1,lastMatchedAt:null,reports:[],reportsLoaded:!1,reportsLoadError:null,reportArchiveLoading:!1,reportSaveLoading:!1,reportMessage:null,selectedReportId:null,selectedAdminReportId:null,adminMessage:null,adminSubmitting:!1,adminDeletingId:null,adminUpdatingId:null,isLoadingOpportunities:!1,opportunityLoadError:null,isMobileMenuOpen:!1,profileMenuOpen:!1,selectedOpportunityId:null,toast:null};function Gn(e=A.route){return String(e||`/`).split(`?`)[0]||`/`}function Kn(e=A.route){let t=String(e||``).split(`?`)[1]||``;return new URLSearchParams(t)}function qn(e){let t=String(e||``).trim().toLowerCase();return[`basic`,`pro`,`priority`].includes(t)?t:``}function Jn(){try{return qn(localStorage.getItem(e.selectedPlan))}catch{return``}}function Yn(t){let n=qn(t);try{n&&localStorage.setItem(e.selectedPlan,n)}catch{}return n}function Xn(){try{localStorage.removeItem(e.selectedPlan)}catch{}}function Zn(e=A.route){return qn(Kn(e).get(`plan`))}function Qn(e=A.route){let t=Zn(e);t&&(A.pendingSignupPlan=Yn(t))}function $n(e=A.route){let t=g(e);if(v(e)&&!t){let e=b();if(e){A.pendingInviteToken=e;return}er();return}if(v(e)&&t&&t!==A.pendingInviteToken){A.pendingInviteToken=ae(t),A.invitePreview=null,A.invitePreviewError=null,A.invitePreviewErrorToken=``;return}v(e)||er()}function er(){oe(),A.pendingInviteToken=``,A.invitePreview=null,A.invitePreviewError=null,A.invitePreviewErrorToken=``,A.invitePreviewDebug=null,A.inviteAccepting=!1}async function tr(e={}){if(!te())return;let t=await ne(A.inviteAuthEvent);A.invitePreviewDebug={..._(A.route),...t,...A.invitePreviewDebug||{},...e}}function nr(e){return[`expired`,`revoked`].includes(String(e||``))}function rr(e){let t=A.pendingInviteToken||g(A.route);return t&&v(A.route)?`${e}?invite=${encodeURIComponent(t)}`:e}`scrollRestoration`in history&&(history.scrollRestoration=`manual`);function ir(){localStorage.removeItem(`verkradar_profile`),localStorage.removeItem(`verkradar_local_user_id`),localStorage.removeItem(`verkradar_saved_opportunities`),localStorage.removeItem(`verkradar_ignored_opportunities`),A.profile=null,A.profileDraft=null,A.profileDraftDirty=!1,A.currentUser=null,A.companyId=null,A.storedMatches=[],A.opportunityActions=[],A.reports=[],A.reportsLoaded=!1,A.reportsLoadError=null,A.reportMessage=null,A.selectedReportId=null,A.profileSaved=!1,A.profileSaveMessage=null,A.profileSaveError=null,A.saved=[],A.ignored=[],A.importRuns=[],A.importRunsLoading=!1,A.importRunsLoaded=!1,A.importRunsError=null,A.importedTedOpportunities=[],A.importedTedOpportunitiesLoading=!1,A.importedTedOpportunitiesLoaded=!1,A.importedTedOpportunitiesError=null,A.adminReports=[],A.adminReportsLoading=!1,A.adminReportsLoaded=!1,A.adminReportsError=null,A.selectedAdminReport=null,A.selectedAdminReportLoading=!1,A.selectedAdminReportError=null,A.sourceCoverage=[],A.sourceCoverageLoading=!1,A.sourceCoverageLoaded=!1,A.sourceCoverageError=null,A.adminCompanies=[],A.adminCompaniesLoading=!1,A.adminCompaniesLoaded=!1,A.adminCompaniesError=null,A.selectedAdminCompanyId=null,A.lastMatchedAt=null}function ar(){return{title:``,buyer:``,sourceName:``,category:``,type:`tender`,deadline:``,published_date:``,location:``,estimated_value:``,url:``,cpv_code:``,difficulty:`medium`,status:`open`,description:``,requirements:``,keywords:``}}function or(e){let t=ar();Object.keys(t).forEach(n=>{t[n]=String(e.get(n)||``)}),A.adminOpportunityDraft=t}var sr=!1;window.addEventListener(`hashchange`,()=>{let e=location.hash.replace(`#`,``)||`/`,t=Gn(e),n=e!==A.route;if(sr&&e===A.route){sr=!1;return}sr=!1,[`/login`,`/signup`,`/forgot-password`,`/reset-password`].includes(t)&&e!==A.route&&(A.authMessage=null,A.authSubmitting=!1),A.route=e,Qn(e),$n(e),A.isMobileMenuOpen=!1,A.profileMenuOpen=!1,n&&Io(),document.body.classList.remove(`mobile-menu-active`),Z(),xr(),M()}),document.addEventListener(`click`,e=>{if(A.dropdown.openKey&&!e.target.closest?.(`.custom-select`)&&_c(),A.profileMenuOpen&&!e.target.closest?.(`.profile-menu`)&&(A.profileMenuOpen=!1,Z()),e.target.classList?.contains(`modal-backdrop`)){if(e.preventDefault(),A.selectedAdminCompanyId){A.selectedAdminCompanyId=null,Z();return}Fo();return}if(A.isMobileMenuOpen&&!e.target.closest?.(`.site-header`)){ur();return}let t=e.target.closest?.(`[data-action]`);if(!t)return;let n=t.dataset.action,r=t.dataset.id;if(n===`close-modal`){if(e.preventDefault(),e.stopPropagation(),A.selectedAdminCompanyId){A.selectedAdminCompanyId=null,Z();return}Fo();return}if(n===`toggle-mobile-menu`){e.preventDefault(),A.isMobileMenuOpen?ur():lr();return}if(n===`mobile-nav`){e.preventDefault(),dr(t.dataset.href);return}if(n===`mobile-scroll-to`){e.preventDefault(),fr(t.dataset.target);return}if(n===`toggle-profile-menu`){if(e.preventDefault(),A.isMobileMenuOpen||pr()){A.profileMenuOpen=!1,Z();return}A.profileMenuOpen=!A.profileMenuOpen,Z();return}if(n===`toggle-language`){e.preventDefault(),Vn(A.language===`is`?`en`:`is`);return}if(n===`toggle-dropdown`){e.preventDefault();let n=t.dataset.key,r=A.dropdown.openKey===n;A.dropdown.openKey=r?null:n,A.dropdown.focusedIndex=mc(n),Z(),r||vc();return}if(n===`select-filter`){e.preventDefault();let n=t.dataset.key,r=t.dataset.value;t.dataset.profileField?(W(),A.profileDraft[t.dataset.profileField]=r,G()):A.filters[n]=r,A.dropdown.openKey=null,A.dropdown.focusedIndex=0,Z();return}if(n===`toggle-profile-suggestion`){e.preventDefault(),Ta(t.dataset.field,t.dataset.value);return}if(n===`scroll-to`){e.preventDefault(),A.isMobileMenuOpen=!1,A.profileMenuOpen=!1,document.body.classList.remove(`mobile-menu-active`);let n=t.dataset.target;if(!n)return;A.route===`/`?(Z(),setTimeout(()=>Sr(n),0)):(j(`/`),setTimeout(()=>Sr(n),50));return}if(n===`go`){e.preventDefault(),A.isMobileMenuOpen=!1,A.profileMenuOpen=!1,document.body.classList.remove(`mobile-menu-active`),j(t.dataset.href);return}if(n===`accept-company-invite`){ys();return}if(n===`save`&&jo(r),n===`ignore`&&Mo(r),n===`unignore`&&No(r),n===`details`&&Po(r),n===`admin-report-override`){ma(r,t.dataset.override||``);return}if(n===`copy-report`&&_u(),n===`download-report-pdf`&&vu(),n===`download-admin-report-pdf`){yu();return}if(n===`save-report`&&ca(),n===`archive-report`){la(r);return}if(n===`view-report`&&(A.selectedReportId=r,Z()),n===`close-archive-report`&&(A.selectedReportId=null,Z()),n===`view-admin-report`){A.selectedAdminReportId=r,A.selectedAdminReport=null,A.selectedAdminReportError=null,A.adminActiveTab=`reports`,Z(),Er(r);return}if(n===`close-admin-report`){A.selectedAdminReportId=null,A.selectedAdminReport=null,A.selectedAdminReportError=null,Z();return}if(n===`copy-admin-report`){Xs(r);return}if(n===`mark-admin-report-sent`){Zs(r);return}if(n===`admin-tab`&&(A.adminActiveTab=t.dataset.tab||`overview`,A.selectedAdminCompanyId=null,A.selectedAdminReportId=null,Z()),n===`view-admin-company`&&(A.selectedAdminCompanyId=r,Z()),n===`close-admin-company`&&(A.selectedAdminCompanyId=null,Z()),n===`admin-refresh-company-matches`){Br(r);return}if(n===`admin-generate-company-report`){Vr(r);return}if(n===`admin-review-match`){Hr(r,t.dataset.companyId||``,t.dataset.reviewAction||``);return}if(n===`admin-ai-review-match`){Ur(r,{force:t.dataset.force===`true`});return}if(n===`admin-ai-review-company`){Wr(r,{force:t.dataset.force===`true`});return}if(n===`admin-run-auto-ai-review`){Gr();return}if(n===`admin-run-daily-pipeline`){Kr();return}if(n===`admin-toggle-company-auto-ai`){qr(r,t.dataset.enabled===`true`);return}if(n===`admin-invite-company-customer`){Lr(r);return}if(n===`admin-revoke-company-access`){Rr(r,t.dataset.memberId||``);return}if(n===`admin-copy-company-invite-link`){zr(r);return}if(n===`import-ted`&&ji(),n===`import-source-connectors`&&Mi(),n===`test-source-connector`&&Mi(r),n===`toggle-source-items`&&(A.expandedSourceId=A.expandedSourceId===r?null:r,Z()),n===`refresh-admin-status`&&Zr(),n===`hide-imported-opportunity`&&pa(r,`hidden`),n===`mark-imported-relevant`&&pa(r,`open`),n===`run-matching`&&ua(),n===`retry-settings-profile`&&$i(),n===`show-all-matches`&&(A.filters.label=`all`,Z()),n===`show-all-opportunities`&&(A.filters.label=`all_opportunities`,Z()),n===`include-national-opportunities`&&(W(),A.profileDraft.nationalProjects=!0,A.profileDraft.locations.includes(`All Iceland`)||(A.profileDraft.locations=[...A.profileDraft.locations,`All Iceland`]),G(),j(`/settings`)),n===`delete-opportunity`&&fa(r),n===`logout`){if(A.profileMenuOpen=!1,A.isMobileMenuOpen){ur(()=>Ui());return}Ui()}n===`load-demo`&&(A.user?ia(Hn).then(()=>j(`/dashboard`)).catch(e=>{console.error(`Failed to load demo profile:`,e),A.profileSaveError=H(e),Z()}):(va(Hn),A.profile=Hn,j(`/dashboard`))),n===`reset`&&(ir(),j(`/`))}),document.addEventListener(`keydown`,e=>{if(e.key===`Escape`&&A.isMobileMenuOpen){e.preventDefault(),ur();return}if(e.key===`Escape`&&A.profileMenuOpen){e.preventDefault(),A.profileMenuOpen=!1,Z();return}if(e.key===`Escape`&&A.selectedOpportunityId){e.preventDefault(),Fo();return}if(e.key===`Escape`&&A.selectedAdminCompanyId){e.preventDefault(),A.selectedAdminCompanyId=null,Z();return}let t=e.target.closest?.(`.custom-select`),n=t?.dataset.key||A.dropdown.openKey;if(!n)return;let r=pc(n),i=A.dropdown.openKey===n;if(e.key===`Escape`&&i){e.preventDefault(),_c(),yc(n);return}if((e.key===`ArrowDown`||e.key===`ArrowUp`)&&!i){e.preventDefault(),A.dropdown.openKey=n,A.dropdown.focusedIndex=mc(n),Z(),vc();return}if(i){if(e.key===`ArrowDown`||e.key===`ArrowUp`){e.preventDefault();let t=e.key===`ArrowDown`?1:-1;A.dropdown.focusedIndex=(A.dropdown.focusedIndex+t+r.length)%r.length,Z(),vc();return}if(e.key===`Enter`||e.key===` `){e.preventDefault();let i=r[A.dropdown.focusedIndex];if(!i)return;let a=t?.querySelector?.(`[data-profile-field]`)?.dataset.profileField;a?(W(),A.profileDraft[a]=i.value,G()):A.filters[n]=i.value,A.dropdown.openKey=null,A.dropdown.focusedIndex=0,Z(),yc(n)}}}),document.addEventListener(`input`,e=>{let t=e.target.closest?.(`[data-auth-field]`);if(t){A.authForm[t.dataset.authField]=t.value;return}let n=e.target.closest?.(`[data-profile-field]`);if(n){W();let e=n.dataset.profileField;n.type===`checkbox`?A.profileDraft[e]=n.checked:n.dataset.profileArray===`true`?A.profileDraft[e]=bn(n.value):(n.dataset.profileNumber,A.profileDraft[e]=n.value),G();return}if(e.target.matches(`[data-filter]`)){let t=e.target.dataset.filter;e.target.type===`checkbox`?A.filters[t]=e.target.checked:A.filters[t]=e.target.value,Z()}if(e.target.matches(`[data-admin-filter]`)){let t=e.target.dataset.adminFilter;e.target.type===`checkbox`?(A.adminOpportunityFilters[t]=e.target.checked,t===`tedOnly`&&e.target.checked&&(A.adminOpportunityFilters.manualOnly=!1),t===`manualOnly`&&e.target.checked&&(A.adminOpportunityFilters.tedOnly=!1)):A.adminOpportunityFilters[t]=e.target.value,Jo(e.target);return}if(e.target.matches(`[data-admin-opportunity-field]`)){let t=e.target.dataset.adminOpportunityField;A.adminOpportunityDraft={...ar(),...A.adminOpportunityDraft||{},[t]:e.target.value};return}if(e.target.matches(`[data-admin-company-filter]`)){let t=e.target.dataset.adminCompanyFilter;A.adminCompanyFilters[t]=e.target.value,Jo(e.target);return}if(e.target.matches(`[data-admin-company-invite-email]`)){let t=e.target.dataset.id||``;t&&(A.adminCompanyInviteDrafts={...A.adminCompanyInviteDrafts||{},[t]:e.target.value});return}e.target.matches(`[data-admin-report-mode]`)&&(A.adminReportMode=e.target.value===`all_current`?`all_current`:`new_only`,Z()),e.target.matches(`[data-admin-company-ai-filter]`)&&(A.adminCompanyAiReviewFilter=e.target.value||`not_reviewed`,Jo(e.target))}),document.addEventListener(`change`,e=>{if(e.target.matches(`[data-admin-filter]`)){let t=e.target.dataset.adminFilter;e.target.type===`checkbox`?(A.adminOpportunityFilters[t]=e.target.checked,t===`tedOnly`&&e.target.checked&&(A.adminOpportunityFilters.manualOnly=!1),t===`manualOnly`&&e.target.checked&&(A.adminOpportunityFilters.tedOnly=!1)):A.adminOpportunityFilters[t]=e.target.value,Jo(e.target);return}if(e.target.matches(`[data-import-mode]`)){A.tedImportMode=e.target.value,Z();return}if(e.target.matches(`[data-admin-company-ai-filter]`)){A.adminCompanyAiReviewFilter=e.target.value||`not_reviewed`,Jo(e.target);return}if(e.target.matches(`[data-profile-location]`)){W(),A.profileDraft.locations=Array.from(document.querySelectorAll(`[data-profile-location]:checked`)).map(e=>e.value),G();return}let t=e.target.closest?.(`[data-profile-field]`);if(!t)return;W();let n=t.dataset.profileField;A.profileDraft[n]=t.type===`checkbox`?t.checked:t.value,G()}),document.addEventListener(`submit`,async e=>{if(e.target.id===`login-form`){e.preventDefault();let t=new FormData(e.target);Bi(t.get(`email`),t.get(`password`));return}if(e.target.id===`signup-form`){e.preventDefault();let t=new FormData(e.target);zi(t.get(`email`),t.get(`password`));return}if(e.target.id===`trial-request-form`){e.preventDefault(),A.trialRequestError=``;try{await Kt(new FormData(e.target)),A.trialRequestSubmitted=!0,Z(),xr()}catch(e){console.error(`Trial request failed:`,e),A.trialRequestSubmitted=!1,A.trialRequestError=k(`trialRequestError`),Z(),U(k(`trialRequestError`),`error`)}return}if(e.target.id===`forgot-password-form`){e.preventDefault(),Vi(new FormData(e.target).get(`email`));return}if(e.target.id===`reset-password-form`){e.preventDefault();let t=new FormData(e.target);Hi(t.get(`newPassword`),t.get(`confirmPassword`));return}if(e.target.id===`admin-opportunity-form`){e.preventDefault();let t=new FormData(e.target);or(t),da(t,e.target);return}if(e.target.id===`profile-form`){e.preventDefault(),A.profileSaved=!1,ka(e.target);let t=Aa();if(!t.companyName||!t.kennitala||!t.contactEmail||!t.billingEmail||!t.contactName||!t.phone||!t.address||!t.industry){U(A.language===`is`?`Fylltu út fyrirtækisnafn, kennitölu, reikningsupplýsingar, tengilið og atvinnugrein.`:`Please fill in company name, kennitala, billing details, contact details and industry.`,`error`);return}A.isSavingProfile=!0,A.profileSaved=!1,A.profileSaveMessage=null,A.profileSaveError=null,Z();let n=A.route!==`/settings`;try{if(await ia(t),await Zi({overwriteDraft:!0}),A.profileLoadError)throw Error(`Profile saved, but the saved profile could not be reloaded. ${A.profileLoadError}`);A.profileSaveMessage=`Refreshing matches...`,A.profileSaveError=null,Z();let e=await ua();if(A.matchStatus?.type===`error`)A.profileSaveMessage=`Profile saved, but matching could not be refreshed. Try Run matching.`;else{let t=e===1?`opportunity`:`opportunities`;A.profileSaveMessage=n?`Profile saved — ${e} relevant ${t} found. Redirecting...`:`Profile saved — ${e} relevant ${t} found.`}A.profileSaved=!0,Z(),clearTimeout(window.__profileSavedTimeout),window.__profileSavedTimeout=setTimeout(()=>{A.profileSaved=!1,Z()},1800),n&&setTimeout(()=>j(`/dashboard`),800)}catch(e){console.error(`Failed to save company profile:`,e),A.profileSaveError=H(e),A.profileSaveMessage=null,A.profileSaved=!1}finally{A.isSavingProfile=!1,Z()}}}),window.addEventListener(`focus`,cr),document.addEventListener(`visibilitychange`,()=>{document.visibilityState===`visible`&&cr()});function cr(){A.route===`/settings`&&A.profileDraftDirty&&(A.profileLoading=!1,A.profileLoaded=!0,Z())}function lr(){mr(),A.isMobileMenuOpen=!0,A.profileMenuOpen=!1,document.body.classList.add(`mobile-menu-active`),Z()}function ur(e){if(!A.isMobileMenuOpen){typeof e==`function`&&e();return}A.isMobileMenuOpen=!1,A.profileMenuOpen=!1,document.body.classList.remove(`mobile-menu-active`),Z(),typeof e==`function`&&setTimeout(e,260)}function dr(e){if(e){if(!A.isMobileMenuOpen){j(e);return}ur(()=>j(e))}}function fr(e){if(!e)return;let t=()=>{A.route===`/`?(Z(),setTimeout(()=>Sr(e),0)):(j(`/`),setTimeout(()=>Sr(e),50))};if(!A.isMobileMenuOpen){t();return}ur(t)}function pr(){return typeof window<`u`&&window.matchMedia?.(`(max-width: 920px)`).matches}function mr(){let e=document.querySelector(`.site-header`);e&&document.documentElement.style.setProperty(`--header-height`,`${Math.ceil(e.getBoundingClientRect().height)}px`)}function j(e){e||=`/`;let t=[`/login`,`/signup`,`/forgot-password`,`/reset-password`],n=Gn(e);if(t.includes(n)&&e!==A.route&&(A.authMessage=null,A.authSubmitting=!1),A.isMobileMenuOpen=!1,A.profileMenuOpen=!1,document.body.classList.remove(`mobile-menu-active`),A.route===e){Z(),xr(),M();return}Io(),A.route=e,Qn(e),$n(e),sr=!0,location.hash=e,Z(),xr(),M()}function hr(){return!A.user&&!A.currentUser?`/`:A.pendingInviteToken&&v(A.route)?`/accept-invite?token=${encodeURIComponent(A.pendingInviteToken)}`:A.profile?`/dashboard`:`/onboarding`}function gr(){return!A.user&&!A.currentUser?`/trial`:A.profile?`/dashboard`:`/onboarding`}function _r(e=A.route){let t=String(e||``);if(vr(t))return!1;let n=Gn(t);return[`/`,`/login`,`/signup`,`/forgot-password`].includes(n)||t.startsWith(`access_token=`)||t.startsWith(`code=`)||t.includes(`type=signup`)||t.includes(`type=email_change`)}function vr(e=A.route){let t=String(e||``);return t===`/reset-password`||t.startsWith(`/reset-password`)||t.includes(`type=recovery`)}function yr(e){A.route=e,location.hash.replace(`#`,``)!==e&&history.replaceState(null,``,`#${e}`)}function br({replace:e=!1}={}){if(!A.user&&!A.currentUser||!_r())return!1;let t=hr();return A.authMessage=null,e?yr(t):j(t),!0}function M(){Gn(A.route)===`/accept-invite`&&(vs(),A.user&&!A.inviteAccepting&&!A.invitePreviewError&&ys()),A.route===`/report`&&A.companyId&&!A.reportsLoaded&&!A.reportArchiveLoading&&sa(),A.route===`/admin`&&A.isAdmin&&(!A.importRunsLoaded&&!A.importRunsLoading&&wr(),!A.adminReportsLoaded&&!A.adminReportsLoading&&Tr(),!A.sourceCoverageLoaded&&!A.sourceCoverageLoading&&Or(),!A.adminCompaniesLoaded&&!A.adminCompaniesLoading&&N(),!A.adminReviewLoaded&&!A.adminReviewLoading&&P(),!A.importedTedOpportunitiesLoaded&&!A.importedTedOpportunitiesLoading&&Ni().then(Z).catch(e=>{console.error(`Failed to load latest TED opportunities:`,e)}))}function xr(){window.scrollTo(0,0)}function Sr(e){let t=document.getElementById(e);t&&t.scrollIntoView({behavior:`smooth`,block:`start`})}async function Cr(){A.isLoadingOpportunities=!0,A.opportunityLoadError=null,Z();try{if(!l)throw Error(`Supabase client not configured`);let{data:e,error:t}=await l.from(`opportunities`).select(`*, sources(name, source_type)`).eq(`status`,`open`).order(`deadline`,{ascending:!0});if(t)throw t;!e||e.length===0?(A.opportunities=window.VERKRADAR_OPPORTUNITIES||[],A.storedMatches=[],A.opportunityLoadError=`Using demo data. Supabase has no opportunities yet.`):(A.opportunities=e.map(Qr),A.opportunityLoadError=null,A.companyId&&(await Oo(),await oa()))}catch(e){console.error(`Failed to load Supabase opportunities:`,e),A.opportunities=window.VERKRADAR_OPPORTUNITIES||[],A.storedMatches=[],A.opportunityLoadError=`Using demo data. Supabase connection failed.`}finally{A.isLoadingOpportunities=!1,Z()}}async function wr(){if(!l||!A.isAdmin){A.importRuns=[],A.importRunsLoaded=!0;return}A.importRunsLoading=!0,A.importRunsError=null,Z();try{let{data:e,error:t}=await l.from(`import_runs`).select(`*`).order(`started_at`,{ascending:!1}).limit(10);if(t)throw t;A.importRuns=e||[],A.importRunsLoaded=!0}catch(e){console.error(`Failed to load import runs:`,e),A.importRuns=[],A.importRunsError=H(e)}finally{A.importRunsLoading=!1,A.importRunsLoaded=!0,Z()}}async function Tr(){if(!l||!A.isAdmin){A.adminReports=[],A.adminReportsLoaded=!0;return}A.adminReportsLoading=!0,A.adminReportsError=null,Z();try{let{data:e,error:t}=await l.from(`reports`).select(`
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
      `).order(`created_at`,{ascending:!1}).limit(10);if(t)throw t;A.adminReports=e||[],A.adminReportsLoaded=!0}catch(e){console.error(`Failed to load admin reports:`,e),A.adminReports=[],A.adminReportsError=H(e)}finally{A.adminReportsLoading=!1,A.adminReportsLoaded=!0,Z()}}async function Er(e){if(!(!l||!A.isAdmin||!e)){A.selectedAdminReportLoading=!0,A.selectedAdminReportError=null,Z();try{let{data:t,error:n}=await l.from(`reports`).select(`
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
      `).eq(`id`,e).single();if(n)throw n;await Dr(t),A.selectedAdminReportId===e&&(A.selectedAdminReport=t)}catch(t){console.error(`Failed to load admin report details:`,t),A.selectedAdminReportId===e&&(A.selectedAdminReport=null,A.selectedAdminReportError=H(t))}finally{A.selectedAdminReportId===e&&(A.selectedAdminReportLoading=!1,Z())}}}async function Dr(e){let t=Array.isArray(e?.report_items)?e.report_items:[],n=t.map(e=>e.opportunity_id).filter(Boolean);if(!l||!e?.company_id||!n.length)return;let{data:r,error:i}=await l.from(`company_opportunity_sends`).select(`opportunity_id, sent_at, created_at, channel`).eq(`company_id`,e.company_id).in(`opportunity_id`,n).in(`channel`,[`manual_email`,`automated_email`]);if(i){console.warn(`Failed to load report sent status:`,i);return}let a=new Map((r||[]).map(e=>[String(e.opportunity_id),e]));t.forEach(e=>{let t=a.get(String(e.opportunity_id));e.sent_at=t?.sent_at||t?.created_at||``,e.delivery_type=t?.channel||``})}async function Or(){if(!l||!A.isAdmin){A.sourceCoverage=[],A.sourceCoverageLoaded=!0;return}A.sourceCoverageLoading=!0,A.sourceCoverageError=null,Z();try{let{data:e,error:t}=await l.from(`sources`).select(`
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
      `).order(`name`,{ascending:!0});if(t)throw t;let n=(e||[]).map(e=>({...e,source_status:Array.isArray(e.source_status)?e.source_status[0]:e.source_status,source_connectors:Array.isArray(e.source_connectors)?e.source_connectors[0]:e.source_connectors})),r=n.map(e=>e.id).filter(Boolean),i={};if(r.length){let{data:e,error:t}=await l.from(`opportunities`).select(`id, source_id, title, buyer, deadline, status, url, raw_payload, created_at, published_date`).in(`source_id`,r).eq(`status`,`open`).order(`created_at`,{ascending:!1}).limit(500);if(t)throw t;i=(e||[]).reduce((e,t)=>(e[t.source_id]||(e[t.source_id]=[]),e[t.source_id].push(t),e),{})}A.sourceCoverage=n.map(e=>{let t=i[e.id]||[];return{...e,opportunityStats:Bs(t),latestOpportunities:t.slice(0,8)}}),A.sourceCoverageLoaded=!0}catch(e){console.error(`Failed to load source coverage:`,e),A.sourceCoverage=[],A.sourceCoverageError=H(e)}finally{A.sourceCoverageLoading=!1,A.sourceCoverageLoaded=!0,Z()}}async function N(){if(!l||!A.isAdmin){A.adminCompanies=[],A.adminCompaniesLoaded=!0;return}A.adminCompaniesLoading=!0,A.adminCompaniesError=null,Z();try{A.adminAiUsageSummary=await ke().catch(e=>(console.warn(`Failed to load AI usage summary:`,e),null));let{data:e,error:t}=await l.from(`companies`).select(`*`).order(`created_at`,{ascending:!1});if(t)throw t;let n=e||[],r=n.map(e=>e.id).filter(Boolean),i=[],a=[],o=[],s=[],c=[],u=[],d=[];if(r.length){let[e,t,n,f,p,m,h]=await Promise.all([l.from(`company_services`).select(`company_id, service`).in(`company_id`,r),l.from(`company_locations`).select(`company_id, location`).in(`company_id`,r),l.from(`company_keywords`).select(`company_id, keyword, type`).in(`company_id`,r),l.from(`opportunity_matches`).select(`id, company_id, opportunity_id, match_score, match_label, safety_status, ai_review_status, ai_review_fit, ai_review_confidence, ai_reviewed_at, ai_review_skipped_reason, opportunities(title, buyer, location, raw_payload, source_id, sources(name))`).in(`company_id`,r),l.from(`reports`).select(`id, company_id, title, created_at, period_start, period_end, status`).in(`company_id`,r).order(`created_at`,{ascending:!1}),l.from(`ai_match_reviews`).select(`id, company_id, opportunity_id, match_id, fit, confidence, send_to_client, reason, reviewed_profile_hash, profile_updated_at, company_services_snapshot, company_locations_snapshot, created_at, updated_at`).in(`company_id`,r),l.from(`company_members`).select(`id, company_id, user_id, email, role, status, invited_at, accepted_at, revoked_at, expires_at`).in(`company_id`,r).order(`created_at`,{ascending:!1})]);i=e.error?[]:e.data||[],a=t.error?[]:t.data||[],o=n.error?[]:n.data||[],s=f.error?[]:f.data||[],c=p.error?[]:p.data||[],u=m.error?[]:m.data||[],d=h.error?[]:h.data||[]}A.adminCompanies=n.map(e=>{let t=i.filter(t=>t.company_id===e.id),n=a.filter(t=>t.company_id===e.id),r=o.filter(t=>t.company_id===e.id),l={services:E(t.map(e=>e.service)),locations:E(n.map(e=>e.location)),includeKeywords:E(r.filter(e=>e.type===`include`).map(e=>e.keyword)),excludeKeywords:E(r.filter(e=>e.type===`exclude`).map(e=>e.keyword)),baseLocation:e.base_location||``,serviceAreas:E(e.service_areas),willingToTravel:!!e.willing_to_travel,nationalProjects:!!e.national_projects};return jr(e,{services:t,locations:n,keywords:r,matches:Pe(s.filter(t=>t.company_id===e.id),u.filter(t=>t.company_id===e.id),l),reports:c.filter(t=>t.company_id===e.id),members:d.filter(t=>t.company_id===e.id)})}),A.adminCompaniesLoaded=!0}catch(e){console.error(`Failed to load admin companies:`,e),A.adminCompanies=[],A.adminCompaniesError=H(e)}finally{A.adminCompaniesLoading=!1,A.adminCompaniesLoaded=!0,Z()}}async function P(){if(!l||!A.isAdmin){A.adminReviewMatches=[],A.adminReviewLoaded=!0;return}A.adminReviewLoading=!0,A.adminReviewError=null,Z();try{let{data:e,error:t}=await l.from(`opportunity_matches`).select(`
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
      `).eq(`safety_status`,`needs_review`).eq(`review_required`,!0).order(`calculated_at`,{ascending:!1}).limit(100);if(t)throw t;let n=e||[],r=yn(n.map(e=>e.company_id)),i=yn(n.map(e=>e.opportunity_id)),a=[];if(r.length&&i.length){let{data:e,error:t}=await l.from(`ai_match_reviews`).select(`*`).in(`company_id`,r).in(`opportunity_id`,i);if(t)throw t;a=e||[]}let o=new Map(a.map(e=>[`${e.company_id}:${e.opportunity_id}`,e]));A.adminReviewMatches=n.map(e=>kr(e,o.get(`${e.company_id}:${e.opportunity_id}`))),A.adminReviewLoaded=!0}catch(e){console.error(`Failed to load admin review queue:`,e),A.adminReviewMatches=[],A.adminReviewError=H(e)}finally{A.adminReviewLoading=!1,A.adminReviewLoaded=!0,Z()}}function kr(e,t=null){let n=Qr(e.opportunities||{});return{id:e.id,companyId:e.company_id,opportunityId:e.opportunity_id,companyName:e.companies?.company_name||`Unknown company`,opportunity:n,matchScore:Number(e.match_score||0),matchLabel:e.match_label||fo(Number(e.match_score||0)),matchReasons:wi(n,Array.isArray(e.match_reasons)?e.match_reasons:[]),risks:Array.isArray(e.risks)?e.risks:[],safetyStatus:e.safety_status||`needs_review`,safetyReasons:Array.isArray(e.safety_reasons)?e.safety_reasons:[],alertEligible:!!e.alert_eligible,reviewRequired:!!e.review_required,calculatedAt:e.calculated_at,aiReview:t?Ar(t):null}}function Ar(e){return{id:e.id,fit:e.fit||`weak`,confidence:Number(e.confidence||0),sendToClient:!!e.send_to_client,reason:e.reason||``,fitReasons:Array.isArray(e.fit_reasons)?e.fit_reasons.map(String):[],risksOrQuestions:Array.isArray(e.risks_or_questions)?e.risks_or_questions.map(String):[],suggestedClientSummary:e.suggested_client_summary||``,model:e.model||``,createdAt:e.created_at||``,updatedAt:e.updated_at||``}}function jr(e,t){let n=E((t.services||[]).map(e=>e.service)),r=E((t.locations||[]).map(e=>e.location)),i=E((t.keywords||[]).filter(e=>e.type===`include`).map(e=>e.keyword)),a=E((t.keywords||[]).filter(e=>e.type===`exclude`).map(e=>e.keyword)),o=t.reports||[],s=(t.matches||[]).filter(e=>e.safety_status!==`hidden`),c=(t.members||[]).map(e=>({id:e.id,company_id:e.company_id,user_id:e.user_id||``,email:e.email||``,role:e.role||`member`,status:e.status||`invited`,invited_at:e.invited_at||``,accepted_at:e.accepted_at||``,revoked_at:e.revoked_at||``,expires_at:e.expires_at||``})),l=!!(e.company_name&&e.contact_email&&e.industry&&n.length&&(r.length||e.base_location||E(e.service_areas).length));return{id:e.id,ownerId:e.owner_id||``,companyName:e.company_name||`Unnamed company`,contactEmail:e.contact_email||``,kennitala:e.kennitala||``,billingEmail:e.billing_email||``,contactName:e.contact_name||``,phone:e.phone||``,address:e.address||``,website:e.website||``,industry:e.industry||``,plan:e.selected_plan||e.plan||e.subscription_plan||`Demo`,selectedPlan:e.selected_plan||e.plan||``,billingStatus:e.billing_status||``,trialStartedAt:e.trial_started_at||``,trialEndsAt:e.trial_ends_at||``,profileStatus:l?`Complete`:`Incomplete`,createdAt:e.created_at,services:n,locations:r,includeKeywords:i,excludeKeywords:a,baseLocation:e.base_location||``,serviceAreas:E(e.service_areas),willingToTravel:!!e.willing_to_travel,nationalProjects:!!e.national_projects,remoteProjects:!!e.remote_projects,minimumProjectValueForTravel:e.minimum_project_value_for_travel,minProjectValue:e.min_project_value,maxProjectValue:e.max_project_value,allowUnknownValue:!!e.allow_unknown_value,includeLowConfidence:!!e.include_low_confidence,autoAlertMode:e.auto_alert_mode||`auto_safe_only`,reportFrequency:e.report_frequency||`weekly`,reportDay:e.report_day||`monday`,deadlineReminders:!!e.deadline_reminders,autoAiReviewEnabled:!!e.auto_ai_review_enabled,members:c,matchCount:s.length,savedCount:0,latestReportDate:o[0]?.created_at||``,latestMatches:s.slice(0,30),latestReports:o.slice(0,5)}}function Mr(e,t){A.adminCompanyActions={...A.adminCompanyActions||{},[e]:t}}function Nr(e){let t={...A.adminCompanyActions||{}};delete t[e],A.adminCompanyActions=t}function Pr(e){return A.adminCompanyInviteDrafts?.[e.id]??(e.billingEmail||e.contactEmail||``)}function Fr(e,t){A.adminCompanyAccessActions={...A.adminCompanyAccessActions||{},[e]:t}}function Ir(e){let t={...A.adminCompanyAccessActions||{}};delete t[e],A.adminCompanyAccessActions=t}async function Lr(e){if(!A.isAdmin||!e)return;let t=h(Pr((A.adminCompanies||[]).find(t=>t.id===e)||{id:e}));if(!t){A.adminMessage={type:`error`,text:`Enter a customer email before inviting access.`},Z();return}Fr(e,`invite`),A.adminMessage=null,Z();try{let n=await Jr(e,`invite_customer`,{email:t}),r=se(n.invite_token||``);await N(),A.adminCompanyInviteLinks={...A.adminCompanyInviteLinks||{},[e]:r},A.adminCompanyInviteDebug={...A.adminCompanyInviteDebug||{},[e]:n.debug?{...n.debug,copied_url_token_length:String(n.invite_token||``).length,copied_invite_url_present:!!r}:null},A.adminCompanyInviteDrafts={...A.adminCompanyInviteDrafts||{},[e]:``},A.adminMessage={type:`success`,text:`Invite link created for ${n.member?.email||t}. Copy it and send it manually.`},U(`Invite link created`,`success`)}catch(e){console.error(`Failed to invite company customer:`,e),A.adminMessage={type:`error`,text:`Failed to invite customer access. ${H(e)}`}}finally{Ir(e),Z()}}async function Rr(e,t){if(!(!A.isAdmin||!e||!t)){Fr(e,`revoke`),A.adminMessage=null,Z();try{await Jr(e,`revoke_customer_access`,{memberId:t}),await N(),A.adminMessage={type:`success`,text:`Customer access revoked.`},U(`Customer access revoked`,`success`)}catch(e){console.error(`Failed to revoke company access:`,e),A.adminMessage={type:`error`,text:`Failed to revoke customer access. ${H(e)}`}}finally{Ir(e),Z()}}}async function zr(e){let t=A.adminCompanyInviteLinks?.[e]||``;if(!t){U(`Create or regenerate an invite link first.`,`error`);return}try{await navigator.clipboard.writeText(t),U(`Invite link copied`,`success`)}catch(e){console.error(`Failed to copy invite link:`,e),U(`Could not copy invite link`,`error`)}}async function Br(e,t={}){if(!A.isAdmin)return A.adminMessage={type:`error`,text:`You do not have access to this action.`},Z(),[];let n=(A.adminCompanies||[]).find(t=>t.id===e);if(!n)return A.adminMessage={type:`error`,text:`Company not found. Refresh Admin companies and try again.`},Z(),[];t.skipAction||Mr(e,`refresh`),t.silent||(A.adminMessage=null,Z());try{let r=await Jr(e,`refresh_matches`),i=Number(r.matches_refreshed||0);return await Promise.all([N(),P()]),A.companyId===e&&await oa(),t.silent||(A.adminMessage={type:`success`,text:`Refreshed ${i} eligible matches for ${n.companyName}.`},U(`Company matches refreshed`,`success`),Z()),r}catch(e){if(console.error(`Failed to refresh admin company matches:`,e),A.adminMessage={type:`error`,text:`Failed to refresh matches for ${n.companyName}. ${H(e)}`},Z(),t.throwOnError)throw e;return[]}finally{t.skipAction||(Nr(e),Z())}}async function Vr(e){if(!A.isAdmin){A.adminMessage={type:`error`,text:`You do not have access to this action.`},Z();return}let t=(A.adminCompanies||[]).find(t=>t.id===e);if(!t){A.adminMessage={type:`error`,text:`Company not found. Refresh Admin companies and try again.`},Z();return}Mr(e,`report`),A.adminMessage=null,Z();try{let n=await Jr(e,`generate_report`,{reportMode:A.adminReportMode||`all_current`});if(!n.report_created){A.adminMessage={type:`error`,text:Xr(n,t.companyName)},Z();return}await Promise.all([Tr(),N(),P()]),A.companyId===e&&await sa(),A.adminMessage={type:`success`,text:`Generated ${Yr(n.report_mode||A.adminReportMode)} report for ${t.companyName} with ${Number(n.report_items||0)} item${Number(n.report_items||0)===1?``:`s`}. Open the Reports tab to review it.`},U(`Company report generated`,`success`)}catch(e){console.error(`Failed to generate admin company report:`,e),A.adminMessage={type:`error`,text:`Failed to generate report for ${t.companyName}. ${H(e)}`}}finally{Nr(e),Z()}}async function Hr(e,t,n){if(!A.isAdmin){A.adminMessage={type:`error`,text:`You do not have access to this action.`},Z();return}if(!e||!t||![`approve`,`reject`].includes(n)){A.adminMessage={type:`error`,text:`Missing review action details.`},Z();return}A.adminReviewActions={...A.adminReviewActions||{},[e]:n},A.adminMessage=null,Z();try{let r=await Jr(t,`review_match`,{matchId:e,reviewAction:n});await Promise.all([P(),N()]),A.companyId===t&&await oa(),A.adminMessage={type:`success`,text:r.message||(n===`approve`?`Match approved for customer reports.`:`Match rejected and hidden.`)},U(n===`approve`?`Match approved`:`Match rejected`,`success`)}catch(e){console.error(`Failed to review admin match:`,e),A.adminMessage={type:`error`,text:`Failed to ${n} match. ${H(e)}`}}finally{let t={...A.adminReviewActions||{}};delete t[e],A.adminReviewActions=t,Z()}}async function Ur(e,t={}){if(!A.isAdmin){A.adminMessage={type:`error`,text:`You do not have access to this action.`},Z();return}if(!e){A.adminMessage={type:`error`,text:`Missing match ID for AI review.`},Z();return}A.adminAiReviewActions={...A.adminAiReviewActions||{},[e]:!0},A.adminAiReviewError=null,A.adminMessage=null,Z();try{let n=await Te(e,{force:t.force===!0});await P(),await N(),A.adminMessage={type:`success`,text:n.cached?`Loaded cached AI review.`:t.force?`AI review re-run completed.`:`AI review completed.`},U(n.cached?`AI review loaded`:t.force?`AI review re-run completed`:`AI review completed`,`success`)}catch(e){console.error(`Failed to run AI match review:`,e),A.adminAiReviewError=H(e),A.adminMessage={type:`error`,text:`AI review failed. ${H(e)}`}}finally{let t={...A.adminAiReviewActions||{}};delete t[e],A.adminAiReviewActions=t,Z()}}async function Wr(e,t={}){if(!A.isAdmin){A.adminMessage={type:`error`,text:`You do not have access to this action.`},Z();return}if(!e){A.adminMessage={type:`error`,text:`Missing company ID for AI review batch.`},Z();return}A.adminCompanyAiReviewActions={...A.adminCompanyAiReviewActions||{},[e]:!0},A.adminMessage=null,Z();try{let n=await Ee(e,{limit:10,force:t.force===!0,revalidate:t.force===!0});A.adminCompanyAiReviewResults={...A.adminCompanyAiReviewResults||{},[e]:n},await Promise.all([N(),P()]),A.companyId===e&&await oa(),A.adminMessage={type:`success`,text:`${t.force?`AI revalidation`:`AI batch`} reviewed ${Number(n.reviewed||0)} matches. ${Number(n.skipped||0)} skipped.`},U(t.force?`AI company revalidation completed`:`AI company review completed`,`success`)}catch(e){console.error(`Failed to run company AI review batch:`,e),A.adminMessage={type:`error`,text:`AI company review failed. ${H(e)}`}}finally{let t={...A.adminCompanyAiReviewActions||{}};delete t[e],A.adminCompanyAiReviewActions=t,Z()}}async function Gr(){if(!A.isAdmin){A.adminMessage={type:`error`,text:`You do not have access to this action.`},Z();return}A.adminAutomaticAiReviewLoading=!0,A.adminMessage=null,Z();try{let e=await De({limit:10});A.adminAutomaticAiReviewResult=e,await Promise.all([N(),P()]),A.adminMessage={type:`success`,text:`Automatic AI review created ${Number(e.ai_reviews_created||0)} reviews across ${Number(e.companies_checked||0)} companies.`},U(`Automatic AI review completed`,`success`)}catch(e){console.error(`Failed to run automatic AI review:`,e),A.adminMessage={type:`error`,text:`Automatic AI review failed. ${H(e)}`}}finally{A.adminAutomaticAiReviewLoading=!1,Z()}}async function Kr(){if(A.isAdmin){A.adminDailyPipelineLoading=!0,A.adminMessage=null,Z();try{let e=await xe();A.adminDailyPipelineResult=e,await Promise.all([Zr(),N(),P()]),A.adminMessage={type:e.errors?.length?`error`:`success`,text:`Daily pipeline finished: ${Number(e.sources_imported||0)} sources, ${Number(e.companies_refreshed||0)} companies, ${Number(e.ai_reviews_created||0)} AI reviews.`}}catch(e){console.error(`Failed to run daily pipeline:`,e),A.adminMessage={type:`error`,text:`Daily pipeline failed. ${H(e)}`}}finally{A.adminDailyPipelineLoading=!1,Z()}}}async function qr(e,t){if(!A.isAdmin||!e)return;let n=(A.adminCompanies||[]).find(t=>t.id===e);A.adminMessage=null,Z();try{await Oe(e,t),A.adminCompanies=(A.adminCompanies||[]).map(n=>n.id===e?{...n,autoAiReviewEnabled:t}:n),await N(),A.adminMessage={type:`success`,text:`Automatic AI review ${t?`enabled`:`disabled`} for company.`},Z()}catch(t){console.error(`Failed to toggle company automatic AI review:`,t);let r=t?.details||{};A.adminMessage={type:`error`,text:`Failed to update automatic AI review setting. ${H(t)} Debug: company_id=${e}; company=${n?.companyName||`unknown`}; email=${n?.contactEmail||`unknown`}; returned_rows=${r.rowCount??`unknown`}; returned_data=${r.dataReturned===!1?`false`:`unknown`}.`},Z()}}async function Jr(e,t,n={}){let r=ki();if(!r)throw Error(`Admin company actions are not configured. Set window.VERKRADAR_ADMIN_COMPANY_ACTIONS_URL or window.VERKRADAR_SUPABASE_URL.`);let i=await fetch(r,{method:`POST`,headers:await Pi(),body:JSON.stringify({companyId:e,action:t,...n})}),a=await i.json().catch(()=>({}));if(!i.ok)throw Error(a.error||`Admin company action failed with status ${i.status}`);return a}function Yr(e){return e===`all_current`?`current active opportunities`:`new opportunities`}function Xr(e,t){let n=e?.report_mode||A.adminReportMode||`all_current`;return e?.message||(n===`new_only`?`No new eligible opportunities found since the previous report.`:`No customer-report-ready matches found for ${t}.`)}async function Zr(){A.isAdmin&&(await Promise.all([wr(),Ni(),Tr(),Or(),N(),P()]),U(`Automation status refreshed`,`success`),Z())}function Qr(e){let t=e.raw_payload&&typeof e.raw_payload==`object`?e.raw_payload:{},n=e.sources?.name||t.source_name||``,r=I(t.quality_status||t.qualityStatus,{source:n,sourceType:e.sources?.source_type||``,title:e.title||``,description:ei(e.description||``,t,n,e.title||``),rawPayload:t}),i=L({source:n,sourceType:e.sources?.source_type||``,title:e.title||``,description:e.description||``,category:e.category||``,keywords:Array.isArray(e.keywords)?e.keywords:[],qualityStatus:r,rawPayload:t});return{id:e.id,externalId:e.external_id||``,countryCode:e.country_code||``,title:e.title,buyer:jn(e.buyer,n,t),source:n||`Supabase`,sourceType:e.sources?.source_type||``,category:e.category||`Other`,type:e.type||`tender`,description:e.description||``,deadline:e.deadline,deadlineAt:t.deadline_at||``,publishedDate:e.published_date,createdAt:e.created_at,location:ii(e.location||`Unknown`,t,n,e.title||``,e.description||``),estimatedValue:e.estimated_value,currency:e.currency||`ISK`,url:e.url||``,cpvCode:e.cpv_code||``,requirements:Array.isArray(e.requirements)?e.requirements:[],keywords:Array.isArray(e.keywords)?e.keywords:[],difficulty:e.difficulty||`medium`,status:e.status||`open`,qualityStatus:r,intent:i,rawPayload:t}}function $r(e){let t=Qr(e.opportunities||{});return{...t,matchScore:Number(e.match_score||0),matchLabel:e.match_label||fo(Number(e.match_score||0)),matchReasons:wi(t,Array.isArray(e.match_reasons)?e.match_reasons:[]),risks:Array.isArray(e.risks)?e.risks:[],nextSteps:Array.isArray(e.next_steps)?e.next_steps:[],safetyStatus:e.safety_status||`needs_review`,safetyReasons:Array.isArray(e.safety_reasons)?e.safety_reasons:[],alertEligible:!!e.alert_eligible,reviewRequired:!!e.review_required,reviewedAt:e.reviewed_at||``,reviewNote:e.review_note||``}}function ei(e,t={},n=``,r=``){t=t&&typeof t==`object`?t:{};let i=String(e||``).replace(/\s+/g,` `).trim(),a=D(n);if(!i)return``;if(a.includes(`rikiskaup`)||a.includes(`utbodsvefur`)){let e=ti(i,t,r);if(e)return e;if(ni(i)||ri(i))return A.language===`is`?`Útboðstilkynning flutt inn af Útboðsvef. Opnið upprunasíðuna til að staðfesta kaupanda, skilafrest, kröfur og útboðsgögn.`:`Procurement notice imported from Útboðsvefur. Open the source page to confirm buyer, deadline, requirements and tender documents.`}return i}function ti(e,t={},n=``){t=t&&typeof t==`object`?t:{};let r=String(e||``).replace(/\s+/g,` `).trim();if(!r)return``;let i=[r.search(/F\.h\.[^.]{0,280}ósk(?:að|ar) eftir tilboðum/i),r.search(/(?:Reykjavíkurborg|sveitarfélag|bærinn|kaupandi)[^.]{0,280}ósk(?:að|ar) eftir tilboðum/i),r.search(/óskar eftir tilboðum|óskað eftir tilboðum|oskar eftir tilbodum|oskad eftir tilbodum/i),r.search(/verkefnið felst|verkið felst|verkið felur|gatna-|gatnagerð|stígagerð/i)].filter(e=>e>=0);if(!i.length)return``;let a=Math.min(...i),o=r.slice(a).search(/\s+(Nánari upplýsingar|Útboðsgögn afhent|Opnun tilboða|Opnun tilboda|Auglýsandi|Flokkar|Tengdar fréttir|Fjöldi útboð)\b/i),s=o>120?a+o:a+1200,c=[r.slice(a,s).trim()],l=t.extracted_deadline_text||t.deadline_text||``;l&&!c[0].includes(String(l))&&c.push(`Skilafrestur: ${l}`);let u=yn(c).join(` `).replace(/^(Útboðsvefur\s*){1,}/i,``).replace(/\s+/g,` `).trim();return ri(u)?``:u||n}function ni(e){return/Procurement notice imported from Útboðsvefur|Open the source page for full buyer details/i.test(String(e||``))}function ri(e){let t=String(e||``);return[`Framkvæmdasýslan`,`Ríkiseignir`,`Garðabær`,`Grímsnes`,`Fjöldi útboð`,`Útboðsvefur.is - Opinber útboð`].filter(e=>t.includes(e)).length>=3||/^Útboðsvefur\s+Útboðsvefur\.is/i.test(t)}function ii(e,t={},n=``,r=``,i=``){let a=ai(`${r} ${i} ${JSON.stringify(t||{})}`),o=String(e||``).trim();return a&&(!o||/unknown|all iceland|iceland/i.test(o))?a:o||a||`Unknown`}function ai(e){let t=D(e);return t.includes(`vogabyggd`)||t.includes(`reykjavikurborg`)||t.includes(`strandstigur`)?`Reykjavík / Höfuðborgarsvæðið`:``}function F(e){if(!e||e.status!==`open`||!e.url||e.url===`#`||w(e.deadline)<0||oi(e)||e.rawPayload?.extraction_method===`parent_article_with_child_opportunities`||Vl(e)||di(e))return!1;if(!Dc(e))return!0;let t=Si(e);return[`IS`,`NO`,`DK`,`SE`,`FI`].includes(t)}function oi(e){let t=D(e?.source||``),n=D(e?.title||``),r=D(e?.externalId||``),i=D(e?.sourceType||``),a=e?.rawPayload||{},o=`${t} ${n} ${r} ${i}`;return!!(a.is_demo===!0||a.demo===!0||t===`private lead`||t.includes(`private lead`)||t===`grant portal`||t.includes(`grant portal`)||t===`manual test`||t.includes(`manual test`)||[`demo`,`test`,`sample`,`mock`,`fake`].some(e=>i.includes(e))||/\b(demo|test|sample|mock|fake|manual)\b/.test(o)||n.includes(`manual test`)||n.includes(`municipal websites example`)||r.includes(`demo`)||r.includes(`test`))}function I(e,t={}){let n=String(e||``).toLowerCase(),r=si(t?.rawPayload?.opportunity_intent||t?.rawPayload?.intent);if(r===`confirmed_tender`)return`confirmed_tender`;if(r===`early_opportunity`||r===`market_signal`)return`early_signal`;if(r===`news_context`||r===`not_opportunity`)return`needs_review`;if(Dc(t))return`confirmed_tender`;if(R(t)){let e=ci(t);return[`tender_awarded`,`awarded`,`already_tendered`,`announced`].includes(e)?`confirmed_tender`:e===`upcoming_tender`?`early_signal`:`needs_review`}if(n===`early_signal`||n===`needs_review`)return n;let i=z(t);return B(i,[`senn í útboð`,`senn i utbod`])?`early_signal`:ui(i)?`confirmed_tender`:bi(t?.title||``)&&!ui(i)?`needs_review`:vi(i)?`early_signal`:(xi(i),`needs_review`)}function si(e){return{confirmed:`confirmed_tender`,confirmed_tender:`confirmed_tender`,likely_opportunity:`confirmed_tender`,verified:`confirmed_tender`,early_signal:`early_opportunity`,early_opportunity:`early_opportunity`,upcoming_tender:`early_opportunity`,market_signal:`market_signal`,project_signal:`market_signal`,needs_review:`market_signal`,news_context:`news_context`,news:`news_context`,noise:`not_opportunity`,not_opportunity:`not_opportunity`,stale_opportunity:`not_opportunity`,stale:`not_opportunity`,expired:`not_opportunity`}[String(e||``).toLowerCase().trim()]||``}function L(e={}){let t=si(e?.rawPayload?.opportunity_intent||e?.rawPayload?.intent),n=String(e?.rawPayload?.admin_report_status||``).toLowerCase();if(n===`include`)return`confirmed_tender`;if([`hidden`,`hide`,`noise`,`deleted`].includes(n))return t||`not_opportunity`;if(t)return t;if(Dc(e))return`confirmed_tender`;let r=z(e),i=e?.title||``;if(R(e)){let t=ci(e);return[`tender_awarded`,`awarded`,`already_tendered`,`announced`].includes(t)?`confirmed_tender`:t===`upcoming_tender`?`early_opportunity`:`market_signal`}return ui(r)?`confirmed_tender`:bi(i)||xi(r)?`news_context`:_i(r)?`early_opportunity`:(yi(r),`market_signal`)}function R(e){return e?.rawPayload?.extraction_method===`vegagerdin_article_project_parser`}function ci(e){let t=String(e?.rawPayload?.tender_state||``).trim(),n=li(e),r={awarded:`tender_awarded`,open_or_published:`announced`,planned_tender:`upcoming_tender`,unclear:`project_signal`}[t]||t;return n===`tender_awarded`?`tender_awarded`:n===`already_tendered`&&![`tender_awarded`,`announced`].includes(r)?`already_tendered`:n===`announced`&&![`tender_awarded`,`already_tendered`].includes(r)?`announced`:n===`upcoming_tender`&&[``,`project_signal`,`needs_review`,`unclear`].includes(r)?`upcoming_tender`:r||n}function li(e){let t=z(e);return B(t,[`lægstbjóðandi`,`laegstbjodandi`,`samningur var`,`samið var`,`samid var`,`skrifað var undir verksamning`,`skrifad var undir verksamning`])?`tender_awarded`:B(t,[`útboð var auglýst`,`utbod var auglyst`,`útboðið var auglýst`,`utbodid var auglyst`,`útboð hefur farið fram`,`utbod hefur farid fram`,`útboðið hefur farið fram`,`utbodid hefur farid fram`,`boðið út`,`bodid ut`,`verkið var boðið út`,`verkid var bodid ut`,`útboð var opnað`,`utbod var opnad`,`tilboð opnuð`,`tilbod opnud`])?`already_tendered`:B(t,[`óskað eftir tilboðum`,`oskad eftir tilbodum`,`tilboðsfrestur`,`tilbodsfrestur`,`skilafrestur`,`verðfyrirspurn`,`verdfyrirspurn`,`rammasamningur`,`forval`])?`announced`:B(t,[`áætlað útboð`,`aaetlad utbod`,`áætlað er að bjóða út`,`aaetlad er ad bjoda ut`,`fyrirhugað útboð`,`fyrirhugad utbod`,`senn í útboð`,`senn i utbod`,`útboð verður`,`utbod verdur`])?`upcoming_tender`:`project_signal`}function z(e){return D([e?.title,e?.description,e?.category,e?.source,...Array.isArray(e?.keywords)?e.keywords:[]].filter(Boolean).join(` `))}function B(e,t){let n=D(e);return t.some(e=>n.includes(D(e)))}function ui(e){return B(e,[`útboð`,`utbod`,`útboðsauglýsing`,`utbodsauglysing`,`tilboð`,`tilboðum`,`tilbod`,`tilbodum`,`óskað eftir tilboðum`,`oskad eftir tilbodum`,`verðfyrirspurn`,`verdfyrirspurn`,`innkaup`,`rammasamningur`,`forval`,`tender`,`procurement`,`skilafrestur`,`útboðsgögn`,`utbodsgogn`])}function di(e={}){let t=e.rawPayload||{};return t.stale_status===`stale_or_expired`||t.opportunity_intent===`stale_opportunity`?!0:fi({title:e.title,description:e.description,content:[e.category,e.source,Array.isArray(e.keywords)?e.keywords.join(` `):``].filter(Boolean).join(` `),publishedDate:e.publishedDate,deadline:e.deadline,sourceName:e.source,sourceType:e.sourceType,connectorType:t.connector_type}).isStale}function fi(e={}){let t=String(e.deadline||``).slice(0,10);if(t&&w(t)>=0)return{isStale:!1,reason:``,thresholdDays:null,ageDays:null,oldYears:[],expiredKeywords:[]};let n=D([e.title,e.description,e.content].filter(Boolean).join(` `)),r=mi(n),i=hi(n),a=gi(e.publishedDate),o=a?Math.floor((Date.now()-new Date(`${a}T00:00:00Z`).getTime())/864e5):null,s=pi(e)?45:60;return r.length?{isStale:!0,reason:`Old year detected (${r.join(`, `)}) and no future deadline found.`,thresholdDays:s,ageDays:o,oldYears:r,expiredKeywords:i}:i.length?{isStale:!0,reason:`Expired/result wording detected (${i.slice(0,3).join(`, `)}) and no future deadline found.`,thresholdDays:s,ageDays:o,oldYears:r,expiredKeywords:i}:o!==null&&o>s?{isStale:!0,reason:`Published ${o} days ago with no current deadline.`,thresholdDays:s,ageDays:o,oldYears:r,expiredKeywords:i}:{isStale:!1,reason:``,thresholdDays:s,ageDays:o,oldYears:r,expiredKeywords:i}}function pi(e={}){let t=D(`${e.sourceName||``} ${e.sourceType||``} ${e.connectorType||``}`);return String(e.connectorType||``)===`rss_feed`&&[`municipal`,`sveitarfelag`,`akranes`,`borgarbyggd`,`arborg`,`selfoss`,`gardabaer`,`reykjanesbaer`,`hafnarfjordur`,`mosfellsbaer`,`kopavogur`,`mulathing`,`fjardabyggd`].some(e=>t.includes(D(e)))}function mi(e){let t=new Date().getUTCFullYear(),n=new Set;return String(e||``).replace(/\b(20[0-9]{2})\b/g,(e,r)=>{let i=Number(r);return i>=2020&&i<t&&n.add(i),r}),Array.from(n).sort()}function hi(e){return`niðurstaða útboðs.nidurstada utbods.niðurstöður útboðs.nidurstodur utbods.opnun tilboða.opnun tilboda.tilboð opnuð.tilbod opnud.lokið.lokid.lokið útboði.lokid utbodi.búið.buid.útrunnið.ut runnid.eldri útboð.eldri utbod.útboðssaga.utbodssaga.samningur gerður.samningur gerdur.verksamningur.awarded.tender results.contract awarded.expired`.split(`.`).filter(t=>B(e,[t]))}function gi(e){if(!e)return``;let t=new Date(e);return Number.isNaN(t.getTime())?``:t.toISOString().slice(0,10)}function _i(e){return B(e,[`senn í útboð`,`senn i utbod`,`áætlað útboð`,`aaetlad utbod`,`áætlað er að bjóða út`,`aaetlad er ad bjoda ut`,`fyrirhugað útboð`,`fyrirhugad utbod`,`markaðskönnun`,`markadskonnun`,`rfi`])}function vi(e){return _i(e)?!0:B(e,[`áætlaðar framkvæmdir`,`aaetladar framkvaemdir`,`fyrirhugaðar framkvæmdir`,`fyrirhugadar framkvaemdir`,`framkvæmdir hefjast`,`framkvaemdir hefjast`,`malbikunarframkvæmdir`,`malbikunarframkvaemdir`,`vegaframkvæmdir`,`vegaframkvaemdir`,`brúargerð`,`bruargerd`,`jarðvinna`,`jardvinna`,`gatnagerð`,`gatnagerd`])}function yi(e){return B(e,[`áætlaðar framkvæmdir`,`aaetladar framkvaemdir`,`fyrirhugaðar framkvæmdir`,`fyrirhugadar framkvaemdir`,`framkvæmdir hefjast`,`framkvaemdir hefjast`,`malbikunarframkvæmdir`,`malbikunarframkvaemdir`,`vegaframkvæmdir`,`vegaframkvaemdir`,`brúargerð`,`bruargerd`,`jarðvinna`,`jardvinna`,`gatnagerð`,`gatnagerd`,`fræsing`,`fraesing`])}function bi(e){return B(e,[`lokun`,`lokað`,`lokad`,`lokanir`,`umferð`,`umferd`,`tafir`,`hjáleið`,`hjaleid`,`akstursleið`,`akstursleid`,`vegfarendur`,`frétt`,`frett`,`myndband`,`tekur á sig mynd`,`tekur a sig mynd`,`opið aftur`,`opid aftur`])}function xi(e){return B(e,[`lokun`,`lokanir`,`umferð`,`umferd`,`dagskrá`,`dagskra`,`skráning`,`skraning`,`myndband`,`ráðstefna`,`radstefna`,`kynningarfundur`,`tilkynning`,`fundur`,`fjölskylduganga`,`fjolskylduganga`,`tafir`,`kynnt`,`styrkur`,`frétt`,`frett`,`viðburður`,`vidburdur`])}function Si(e){let t=Ci(e.countryCode);if(t)return t;let n=D(io(e));return n.includes(`iceland`)||n.includes(`island`)||n.includes(`reykjavik`)||n.includes(`capital area`)||n.includes(`hofudborgarsvaedid`)||n.includes(`east iceland`)||n.includes(`west iceland`)||n.includes(`north iceland`)||n.includes(`south iceland`)||n.includes(`sudurnes`)?`IS`:n.includes(`norway`)?`NO`:n.includes(`denmark`)?`DK`:n.includes(`sweden`)?`SE`:n.includes(`finland`)?`FI`:``}function Ci(e){return{IS:`IS`,ISL:`IS`,ICELAND:`IS`,ÍSLAND:`IS`,NO:`NO`,NOR:`NO`,NORWAY:`NO`,DK:`DK`,DNK:`DK`,DENMARK:`DK`,SE:`SE`,SWE:`SE`,SWEDEN:`SE`,FI:`FI`,FIN:`FI`,FINLAND:`FI`}[String(e||``).trim().toUpperCase()]||``}function wi(e,t){return ro(e)?t:t.filter(e=>!/^Located in your selected region:/i.test(String(e||``)))}function Ti(){A.authForm={email:``,password:``,newPassword:``,confirmPassword:``}}function Ei(){A.authForm.newPassword=``,A.authForm.confirmPassword=``}function Di(){return window.VERKRADAR_TED_IMPORT_URL?window.VERKRADAR_TED_IMPORT_URL:window.VERKRADAR_SUPABASE_URL?`${window.VERKRADAR_SUPABASE_URL}/functions/v1/import-ted`:`${c}/functions/v1/import-ted`}function Oi(){return window.VERKRADAR_SOURCE_CONNECTOR_IMPORT_URL?window.VERKRADAR_SOURCE_CONNECTOR_IMPORT_URL:window.VERKRADAR_SUPABASE_URL?`${window.VERKRADAR_SUPABASE_URL}/functions/v1/import-source-connectors`:`${c}/functions/v1/import-source-connectors`}function ki(){return window.VERKRADAR_ADMIN_COMPANY_ACTIONS_URL?window.VERKRADAR_ADMIN_COMPANY_ACTIONS_URL:window.VERKRADAR_SUPABASE_URL?`${window.VERKRADAR_SUPABASE_URL}/functions/v1/admin-company-actions`:`${c}/functions/v1/admin-company-actions`}async function Ai(e){let t=await e.text();if(!t)return{};try{return JSON.parse(t)}catch{return{errors:[t]}}}async function ji(){if(!A.isAdmin){A.importStatus={errors:[`You do not have access to import TED notices.`]},Z();return}let e=Di();if(!e){A.importStatus={errors:[`TED importer is not configured. Set window.VERKRADAR_TED_IMPORT_URL or window.VERKRADAR_SUPABASE_URL for this environment.`]},Z();return}A.importLoading=!0,A.importStatus=null,A.importedTedOpportunities=[],Z();try{let t=await fetch(e,{method:`POST`,headers:await Pi(),body:JSON.stringify({limit:50,importMode:A.tedImportMode})}),n=await Ai(t);if(A.importStatus=t.ok?n:{...n,errors:n.errors||[`Import failed with status ${t.status}`]},t.ok){await Cr();let e=A.companyId?await ua():Number(n.matched||0);await Ni(),A.isAdmin&&(await wr(),await Tr()),A.importStatus={...A.importStatus,matched:e},U(`TED import completed`,`success`)}}catch(e){A.importStatus={errors:[e instanceof Error?e.message:String(e)]}}finally{A.importLoading=!1,Z()}}async function Mi(e=``){if(!A.isAdmin){A.connectorImportStatus={errors:[`You do not have access to run source imports.`]},Z();return}let t=Oi();if(!t){A.connectorImportStatus={errors:[`Source connector importer is not configured. Set window.VERKRADAR_SOURCE_CONNECTOR_IMPORT_URL or window.VERKRADAR_SUPABASE_URL for this environment.`]},Z();return}A.connectorImportLoading=!e,A.connectorTestingSourceId=e||null,A.connectorImportStatus=null,Z();try{let n=await fetch(t,{method:`POST`,headers:await Pi(),body:JSON.stringify({limit:e?50:20,maxSources:e?1:6,sourceId:e||void 0,refreshMatches:!!e,generateReports:!1})}),r=await Ai(n),i=Array.isArray(r.errors)?r.errors:[],a=Array.isArray(r.failedSources)?r.failedSources:[];A.connectorImportStatus=n.ok?{...r,failedSources:a}:{...r,failedSources:a,errors:i.length?i:[`Source import failed with status ${n.status}${n.statusText?` ${n.statusText}`:``}`]},n.ok&&(await Cr(),await Zr(),U(e?`Source test completed`:`Automatic source imports completed`,`success`))}catch(e){A.connectorImportStatus={errors:[e instanceof Error?e.message:String(e)]}}finally{A.connectorImportLoading=!1,A.connectorTestingSourceId=null,Z()}}async function Ni(){if(!l){A.importedTedOpportunities=[],A.importedTedOpportunitiesLoaded=!0;return}A.importedTedOpportunitiesLoading=!0,A.importedTedOpportunitiesError=null;try{let{data:e,error:t}=await l.from(`sources`).select(`id, name`).in(`name`,[`TED Iceland/Nordic`,`EU TED`,`Tenders Electronic Daily`]);if(t)throw t;let n=(e||[]).map(e=>e.id).filter(Boolean);if(!n.length){A.importedTedOpportunities=[];return}let{data:r,error:i}=await l.from(`opportunities`).select(`*, sources(name, source_type)`).in(`source_id`,n).order(`created_at`,{ascending:!1}).limit(10);if(i)throw i;A.importedTedOpportunities=(r||[]).map(Qr)}catch(e){console.error(`Failed to load latest TED opportunities:`,e),A.importedTedOpportunities=[],A.importedTedOpportunitiesError=H(e)}finally{A.importedTedOpportunitiesLoading=!1,A.importedTedOpportunitiesLoaded=!0}}async function Pi(){let e={"content-type":`application/json`},t=window.VERKRADAR_SUPABASE_ANON_KEY||`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFzb2p4amJzZ3FiZnBiZXBvanpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAwNTU2NjgsImV4cCI6MjA5NTYzMTY2OH0.yPA34VbqWqKrBPespmHr5AojYzjhy3kGRxswO9XdAd0`;t&&t!==`PASTE_MY_ANON_PUBLIC_KEY_HERE`&&(e.apikey=t);let{data:n,error:r}=l?await l.auth.getSession():{data:{session:null},error:null};if(r)throw r;let i=n.session?.access_token;if(!i)throw Error(`You must be logged in to run this admin action.`);return e.authorization=`Bearer ${i}`,e}function Fi(){let e=A.pendingInviteToken||b();return e&&v(A.route)?`${window.location.origin}/#/accept-invite?token=${encodeURIComponent(e)}`:`${window.location.origin}/#/onboarding`}function Ii(){return`${window.location.origin}/#/reset-password`}function Li(e){let t=e?.user?.identities;return Array.isArray(t)&&t.length===0}function Ri(){return[{label:k(`login`),href:rr(`/login`),variant:`primary`},{label:k(`forgotPassword`),href:rr(`/forgot-password`),variant:`secondary`}]}async function zi(e,t){Qn(),A.authSubmitting=!0,A.authMessage=null,Z();try{if(!l)throw Error(`Supabase client is not configured.`);let{data:n,error:r}=await l.auth.signUp({email:String(e||``).trim(),password:String(t||``),options:{emailRedirectTo:Fi()}});if(r)throw r;if(ir(),Li(n)){A.user=null,A.currentUser=null,A.authMessage={type:`error`,text:k(`signupExistingAccount`),actions:Ri()},A.authForm.password=``,Z();return}if(!n.session?.user){A.user=null,A.currentUser=null;let e=Array.isArray(n?.user?.identities)&&n.user.identities.length>0;A.authMessage={type:`success`,text:A.pendingInviteToken?k(`inviteSignupCreatedConfirm`):k(e?`signupCreatedConfirm`:`signupNeutralNextSteps`)},A.authForm.password=``,Z();return}A.user=n.session.user,A.currentUser=A.user,A.profileDraft=null,A.profileDraftDirty=!1,await Gi(A.user),A.authMessage={type:`success`,text:k(`signupCreatedConfirm`)},await Zi({overwriteDraft:!0}),Ti(),j(hr())}catch(e){console.error(`Signup failed:`,e);let t=_a(e);A.authMessage={type:`error`,text:ga(e,`signup`),actions:t?Ri():[]},Z()}finally{A.authSubmitting=!1,Z()}}async function Bi(e,t){A.authSubmitting=!0,A.authMessage=null,Z();try{if(!l)throw Error(`Supabase client is not configured.`);let{data:n,error:r}=await l.auth.signInWithPassword({email:String(e||``).trim(),password:String(t||``)});if(r)throw r;A.user=n.user||await Wi(),A.currentUser=A.user,A.profileDraft=null,A.profileDraftDirty=!1,await Gi(A.user),await Zi({overwriteDraft:!0}),Ti(),j(hr())}catch(e){console.error(`Login failed:`,e),A.authMessage={type:`error`,text:ga(e,`login`)},Z()}finally{A.authSubmitting=!1,Z()}}async function Vi(e){A.authSubmitting=!0,A.authMessage=null,Z();try{if(!l)throw Error(`Supabase client is not configured.`);let{error:t}=await l.auth.resetPasswordForEmail(String(e||``).trim(),{redirectTo:Ii()});if(t)throw t;A.authMessage={type:`success`,text:`If an account exists for this email, a reset link has been sent.`}}catch(e){console.error(`Password reset request failed:`,e),A.authMessage={type:`error`,text:`We could not send a reset link right now. Please try again.`}}finally{A.authSubmitting=!1,Z()}}async function Hi(e,t){let n=String(e||``),r=String(t||``);if(!n){A.authMessage={type:`error`,text:`Enter a new password.`},Z();return}if(n.length<8){A.authMessage={type:`error`,text:`Password must be at least 8 characters.`},Z();return}if(n!==r){A.authMessage={type:`error`,text:`Passwords do not match.`},Z();return}A.authSubmitting=!0,A.authMessage=null,Z();try{if(!l)throw Error(`Supabase client is not configured.`);let{error:e}=await l.auth.updateUser({password:n});if(e)throw e;Ei(),j(`/login`),A.authMessage={type:`success`,text:`Password updated. You can now log in.`},Z()}catch(e){console.error(`Password update failed:`,e),A.authMessage={type:`error`,text:`This reset link may be expired or invalid. Request a new reset link and try again.`},Z()}finally{A.authSubmitting=!1,Z()}}async function Ui(){try{if(l){let{error:e}=await l.auth.signOut();if(e)throw e}}catch(e){console.error(`Logout failed:`,e)}finally{A.user=null,A.currentUser=null,A.isAdmin=!1,A.authLoaded=!0,A.adminLoaded=!0,A.profileLoaded=!0,er(),ir(),j(`/`),Z()}}async function Wi(){if(!l)return null;let{data:e,error:t}=await l.auth.getUser();return t?(console.error(`Failed to get current user:`,t),null):e.user||null}async function Gi(e=A.user){if(!l||!e)return A.isAdmin=!1,!1;try{let{data:t,error:n}=await l.from(`admin_users`).select(`user_id`).eq(`user_id`,e.id).maybeSingle();if(n)throw n;return A.isAdmin=!!t?.user_id,A.isAdmin}catch(e){return console.error(`Failed to check admin access:`,e),A.isAdmin=!1,!1}}function V(){return Q(`
    <section class="empty-state">
      <h1>${O(k(`authRequiredTitle`))}</h1>
      <p>${O(k(`authRequiredText`))}</p>
      <button class="btn btn-primary" data-action="go" data-href="/login">${O(k(`login`))}</button>
      <button class="btn btn-secondary" data-action="go" data-href="/trial">${O(k(`createFreeDemoProfile`))}</button>
    </section>
  `)}function Ki(){return Q(`
    <section class="empty-state">
      <h1>You do not have access to this page.</h1>
      <p>Admin access is limited to approved VerkRadar admin users.</p>
    </section>
  `)}var qi=!1,Ji=!1;async function Yi(){if(!l)return A.user=null,A.currentUser=null,null;let{data:e,error:t}=await l.auth.getSession();if(t)throw t;return A.user=e.session?.user||null,A.currentUser=A.user,A.user}async function Xi(){A.adminLoaded=!1,await Gi(A.currentUser||A.user),A.adminLoaded=!0}async function Zi(e={}){let{overwriteDraft:t=!1,showGlobalLoading:n=!1}=e;(n||!A.profile&&!A.profileDraftDirty)&&(A.profileLoaded=!1),A.profileLoading=!0,A.profileLoadError=null;try{await Qi(ra({overwriteDraft:t}),Un,`Profile loading took too long. Please retry.`)}catch(e){console.error(`Failed to load profile from Supabase:`,e),A.profileLoadError=H(e)}finally{A.profileLoading=!1,A.profileLoaded=!0}}function Qi(e,t,n){let r,i=new Promise((e,i)=>{r=setTimeout(()=>i(Error(n)),t)});return Promise.race([e,i]).finally(()=>clearTimeout(r))}async function $i(){if(!A.isSavingProfile){A.profileLoadError=null,A.profileLoading=!0,Z();try{await Zi({overwriteDraft:!0})}catch(e){console.error(`Settings profile retry failed:`,e),A.profileLoadError=H(e)}finally{A.profileLoading=!1,A.profileLoaded=!0,Z(),M()}}}function ea(){!l||Ji||(Ji=!0,l.auth.onAuthStateChange(async(e,t)=>{if(qi){if(A.inviteAuthEvent=e||``,A.user=t?.user||null,A.currentUser=A.user,A.user){if(e===`PASSWORD_RECOVERY`){A.authLoaded=!0,A.adminLoaded=!0,A.profileLoaded=!0,A.authMessage=null,j(`/reset-password`);return}try{await Xi(),A.route===`/settings`&&A.profileDraftDirty?A.profileLoaded=!0:await Zi()}catch(e){console.error(`Auth profile refresh failed:`,e),A.profileLoadError=H(e),A.adminLoaded=!0,A.profileLoaded=!0}if(br())return;Z(),M();return}A.isAdmin=!1,A.profile=null,A.companyMembership=null,A.profileDraft=null,A.profileDraftDirty=!1,A.profileLoading=!1,A.profileLoadError=null,A.companyId=null,A.storedMatches=[],A.reports=[],A.reportsLoaded=!1,A.reportsLoadError=null,A.selectedReportId=null,A.authLoaded=!0,A.adminLoaded=!0,A.profileLoaded=!0,e===`SIGNED_OUT`&&j(`/`),Z(),M()}}))}async function ta(){A.isBooting=!0,A.authLoaded=!1,A.profileLoaded=!1,A.adminLoaded=!1,A.bootError=null,Z();try{ea(),await Yi(),A.authLoaded=!0,A.currentUser?(await Xi(),await Zi({overwriteDraft:!0,showGlobalLoading:!0})):(A.profile=null,A.companyMembership=null,A.profileDraft=null,A.profileDraftDirty=!1,A.profileLoading=!1,A.profileLoadError=null,A.companyId=null,A.isAdmin=!1,A.adminLoaded=!0,A.profileLoaded=!0)}catch(e){console.error(`Boot failed:`,e),A.bootError=H(e),A.authLoaded=!0,A.adminLoaded=!0,A.profileLoaded=!0}finally{A.authLoading=!1,A.isBooting=!1,qi=!0,vr()?yr(`/reset-password`):br({replace:!0}),Z(),M()}}async function na(){if(!l||!A.user)return{company:null,membership:null};let{data:e,error:t}=await l.from(`companies`).select(`*`).eq(`owner_id`,A.user.id).maybeSingle();if(t)throw t;if(e)return{company:e,membership:null};let n=(await de(l,A.user))[0]||null;if(!n?.company_id)return{company:null,membership:null};let{data:r,error:i}=await l.from(`companies`).select(`*`).eq(`id`,n.company_id).maybeSingle();if(i)throw i;return{company:r||null,membership:n}}async function ra(e={}){let{overwriteDraft:t=!1}=e;if(!l||!A.user){A.profile=null,A.companyMembership=null,(t||!A.profileDraftDirty)&&(A.profileDraft=null),Z();return}try{await ue(l,A.user).catch(e=>(console.warn(`Failed to claim invited company memberships:`,e),[]));let{company:e,membership:n}=await na();if(!e){A.companyId=null,A.companyMembership=null,A.storedMatches=[],A.reports=[],A.reportsLoaded=!1,A.reportsLoadError=null,A.selectedReportId=null,A.profile=null,(t||!A.profileDraftDirty)&&(A.profileDraft=null),A.profileLoadError=null,Z(),M();return}if(A.profileDraftDirty&&A.companyId&&A.companyId!==e.id&&!t){if(!window.confirm(`You have unsaved profile changes. Switch company profile and discard those edits?`)){A.profileLoadError=`Unsaved changes were kept. Save or reload before switching company profiles.`,Z(),M();return}A.profileDraftDirty=!1}let[r,i,a]=await Promise.all([l.from(`company_services`).select(`service`).eq(`company_id`,e.id),l.from(`company_locations`).select(`location`).eq(`company_id`,e.id),l.from(`company_keywords`).select(`keyword, type`).eq(`company_id`,e.id)]);if(r.error)throw r.error;if(i.error)throw i.error;if(a.error)throw a.error;A.companyId!==e.id&&(A.reports=[],A.reportsLoaded=!1,A.reportsLoadError=null,A.selectedReportId=null),A.companyId=e.id,A.companyMembership=n||null;let o=aa(e,r.data||[],i.data||[],a.data||[]);A.profile=o,(t||!A.profileDraftDirty)&&Oa(o),A.profileLoadError=null,va(A.profile),await Oo(),await oa(),Z(),M()}catch(e){console.error(`Failed to load Supabase company profile:`,e),A.profileLoadError=H(e),A.profileDraftDirty||(A.companyId=null,A.companyMembership=null,A.storedMatches=[],A.reports=[],A.reportsLoaded=!1,A.reportsLoadError=null,A.selectedReportId=null,A.profile=null),A.profileDraftDirty||(A.profileDraft=null),Z(),M()}}async function ia(e){if(!l)throw Error(`Supabase client is not configured.`);let t={...e,companyName:String(e.companyName||``).trim(),kennitala:String(e.kennitala||``).trim(),contactEmail:String(e.contactEmail||``).trim(),billingEmail:String(e.billingEmail||``).trim(),contactName:String(e.contactName||``).trim(),phone:String(e.phone||``).trim(),address:String(e.address||``).trim(),website:String(e.website||``).trim(),industry:String(e.industry||``).trim(),selectedPlan:qn(e.selectedPlan||A.pendingSignupPlan||A.profile?.selectedPlan||A.profile?.plan)||`basic`,billingStatus:e.billingStatus||A.profile?.billingStatus||`trial`,trialStartedAt:e.trialStartedAt||A.profile?.trialStartedAt||new Date().toISOString(),trialEndsAt:e.trialEndsAt||A.profile?.trialEndsAt||new Date(Date.now()+336*60*60*1e3).toISOString(),services:E(e.services),locations:E(e.locations),includeKeywords:E(e.includeKeywords),excludeKeywords:E(e.excludeKeywords),baseLocation:String(e.baseLocation||``).trim(),serviceAreas:E(e.serviceAreas),willingToTravel:!!e.willingToTravel,nationalProjects:!!e.nationalProjects,remoteProjects:!!e.remoteProjects,minimumProjectValueForTravel:Sa(e.minimumProjectValueForTravel),minProjectValue:Sa(e.minProjectValue),maxProjectValue:Sa(e.maxProjectValue),allowUnknownValue:!!e.allowUnknownValue,reportFrequency:e.reportFrequency||`weekly`,reportDay:e.reportDay||`monday`,deadlineReminders:!!e.deadlineReminders,includeLowConfidence:!!e.includeLowConfidence,autoAlertMode:e.autoAlertMode||`auto_safe_only`},{data:{user:n},error:r}=await l.auth.getUser();if(r)throw r;if(!n)throw Error(`You must be logged in to save a company profile.`);A.user=n;let i={company_name:t.companyName,contact_email:t.contactEmail||n.email,kennitala:t.kennitala||null,billing_email:t.billingEmail||t.contactEmail||n.email,contact_name:t.contactName||null,phone:t.phone||null,address:t.address||null,website:t.website||null,industry:t.industry,plan:t.selectedPlan,selected_plan:t.selectedPlan,billing_status:t.billingStatus,trial_started_at:t.trialStartedAt,trial_ends_at:t.trialEndsAt,base_location:t.baseLocation||null,service_areas:t.serviceAreas,willing_to_travel:t.willingToTravel,national_projects:t.nationalProjects,remote_projects:t.remoteProjects,minimum_project_value_for_travel:t.minimumProjectValueForTravel,min_project_value:t.minProjectValue,max_project_value:t.maxProjectValue,allow_unknown_value:t.allowUnknownValue,report_frequency:t.reportFrequency,report_day:t.reportDay,deadline_reminders:t.deadlineReminders,include_low_confidence:t.includeLowConfidence,auto_alert_mode:t.autoAlertMode},{data:a,error:o}=await(A.companyId?l.from(`companies`).update(i).eq(`id`,A.companyId).select().single():l.from(`companies`).upsert({...i,owner_id:n.id},{onConflict:`owner_id`}).select().single());if(o)throw console.error(`Company upsert error:`,o),o;A.companyId!==a.id&&(A.reports=[],A.reportsLoaded=!1,A.reportsLoadError=null,A.selectedReportId=null),A.companyId=a.id;let s=(await Promise.all([l.from(`company_services`).delete().eq(`company_id`,a.id),l.from(`company_locations`).delete().eq(`company_id`,a.id),l.from(`company_keywords`).delete().eq(`company_id`,a.id)])).find(e=>e.error)?.error;if(s)throw s;let c=t.services.map(e=>({company_id:a.id,service:e})),u=t.locations.map(e=>({company_id:a.id,location:e})),d=[...t.includeKeywords.map(e=>({company_id:a.id,keyword:e,type:`include`})),...t.excludeKeywords.map(e=>({company_id:a.id,keyword:e,type:`exclude`}))];if(c.length){let{error:e}=await l.from(`company_services`).insert(c);if(e)throw e}if(u.length){let{error:e}=await l.from(`company_locations`).insert(u);if(e)throw e}if(d.length){let{error:e}=await l.from(`company_keywords`).insert(d);if(e)throw e}A.profile=t,A.pendingSignupPlan=``,Xn(),va(t)}function aa(e,t,n,r){return{id:e.id||``,ownerId:e.owner_id||``,companyName:e.company_name||``,kennitala:e.kennitala||``,contactEmail:e.contact_email||``,billingEmail:e.billing_email||e.contact_email||``,contactName:e.contact_name||``,phone:e.phone||``,address:e.address||``,website:e.website||``,industry:e.industry||``,plan:e.plan||e.selected_plan||`basic`,selectedPlan:e.selected_plan||e.plan||`basic`,billingStatus:e.billing_status||`trial`,trialStartedAt:e.trial_started_at||``,trialEndsAt:e.trial_ends_at||``,services:E(t.map(e=>e.service)),includeKeywords:E(r.filter(e=>e.type===`include`).map(e=>e.keyword)),excludeKeywords:E(r.filter(e=>e.type===`exclude`).map(e=>e.keyword)),locations:E(n.map(e=>e.location)),baseLocation:e.base_location||``,serviceAreas:E(e.service_areas),willingToTravel:!!e.willing_to_travel,nationalProjects:!!e.national_projects,remoteProjects:!!e.remote_projects,minimumProjectValueForTravel:e.minimum_project_value_for_travel==null?null:Number(e.minimum_project_value_for_travel),minProjectValue:e.min_project_value==null?null:Number(e.min_project_value),maxProjectValue:e.max_project_value==null?null:Number(e.max_project_value),allowUnknownValue:!!e.allow_unknown_value,reportFrequency:e.report_frequency||`weekly`,reportDay:e.report_day||`monday`,deadlineReminders:!!e.deadline_reminders,includeLowConfidence:!!e.include_low_confidence,autoAlertMode:e.auto_alert_mode||`auto_safe_only`}}async function oa(){if(!l||!A.companyId){A.storedMatches=[];return}try{let{data:e,error:t}=await l.from(`opportunity_matches`).select(`*, opportunities(*, sources(name, source_type))`).eq(`company_id`,A.companyId).order(`match_score`,{ascending:!1});if(t)throw t;let n=(e||[]).map(e=>e.calculated_at||e.updated_at||e.created_at).filter(Boolean).map(e=>new Date(e).getTime()).filter(e=>!Number.isNaN(e));A.lastMatchedAt=n.length?new Date(Math.max(...n)).toISOString():null;let r=(e||[]).filter(e=>e.opportunities).map($r).filter(eu).filter(F),i=r.map(e=>e.id).filter(Boolean),a=[];if(i.length){let{data:e,error:t}=await l.from(`ai_match_reviews`).select(`company_id, opportunity_id, fit, confidence, send_to_client, reason, fit_reasons, risks_or_questions, suggested_client_summary, created_at, updated_at`).eq(`company_id`,A.companyId).in(`opportunity_id`,i);t&&console.warn(`Failed to load AI reviews for report ranking:`,t),a=e||[]}A.storedMatches=fn(r,a)}catch(e){console.error(`Failed to load stored opportunity matches. Falling back to frontend matching:`,e),A.storedMatches=[],A.lastMatchedAt=null}}async function sa(){if(A.companyId&&!A.reportArchiveLoading){A.reportArchiveLoading=!0,A.reportsLoadError=null,Z();try{if(!l)throw Error(`Supabase client is not configured.`);let{data:e,error:t}=await l.from(`reports`).select(`
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
      `).eq(`company_id`,A.companyId).is(`archived_at`,null).order(`created_at`,{ascending:!1});if(t)throw t;A.reports=e||[],A.reportsLoaded=!0}catch(e){console.error(`Failed to load reports:`,e),A.reportsLoadError=H(e),A.reports=[],A.reportsLoaded=!0}finally{A.reportArchiveLoading=!1,Z()}}}async function ca(){if(!A.user){A.reportMessage={type:`error`,text:`Log in to save reports.`},Z();return}if(!A.companyId){A.reportMessage={type:`error`,text:`Create a company profile before saving reports.`},Z();return}let e=jl();if(!e.length){A.reportMessage={type:`error`,text:`No useful matches above the report threshold yet.`},Z();return}let t=Nl(A.profile,e);A.reportSaveLoading=!0,A.reportMessage=null,Z();try{let{data:n,error:r}=await l.from(`reports`).insert({company_id:A.companyId,title:t.title,period_start:t.periodStart,period_end:t.periodEnd,summary:t.summary,text_content:t.textContent,html_content:t.htmlContent,status:`draft`}).select(`id`).single();if(r)throw r;let i=e.filter(e=>Cn(e.id)).map((e,t)=>({report_id:n.id,opportunity_id:e.id,match_score:e.matchScore,match_reasons:e.matchReasons||[],risks:e.risks||[],sort_order:t+1}));if(i.length){let{error:e}=await l.from(`report_items`).insert(i);if(e)throw e}A.reportMessage={type:`success`,text:`Report saved`},await sa(),U(`Report saved`,`success`)}catch(e){console.error(`Failed to save report:`,e),A.reportMessage={type:`error`,text:`Failed to save report. ${H(e)}`}}finally{A.reportSaveLoading=!1,Z()}}async function la(e){if(!(!e||!l||!A.user)&&window.confirm(A.language===`is`?`Ertu viss um að þú viljir fela þetta yfirlit? Þetta er ekki hægt að afturkalla í mælaborðinu.`:`Are you sure you want to hide this report? This cannot be undone from the dashboard.`)){A.reportArchiveLoading=!0,A.reportMessage=null,Z();try{let{error:t}=await l.from(`reports`).update({archived_at:new Date().toISOString(),archived_by:A.user.id}).eq(`id`,e).eq(`company_id`,A.companyId);if(t)throw t;A.selectedReportId===e&&(A.selectedReportId=null),A.reports=A.reports.filter(t=>t.id!==e),A.reportMessage={type:`success`,text:A.language===`is`?`Yfirlitið var falið.`:`Report hidden.`},U(A.language===`is`?`Yfirlit falið`:`Report hidden`,`success`)}catch(e){console.error(`Failed to archive report:`,e),A.reportMessage={type:`error`,text:A.language===`is`?`Gat ekki falið yfirlitið. ${H(e)}`:`Could not hide report. ${H(e)}`}}finally{A.reportArchiveLoading=!1,Z()}}}async function ua(){A.matchingLoading=!0,A.matchStatus=null,Z();try{if(!l)throw Error(`Supabase client is not configured.`);let e=A.user||await Wi();if(!e)throw Error(`You must be logged in to run matching.`);A.user=e;let{company:t}=await na();if(!t)throw Error(`No Supabase company profile found. Save onboarding first.`);A.companyId=t.id;let[n,r,i,a]=await Promise.all([l.from(`company_services`).select(`service`).eq(`company_id`,t.id),l.from(`company_locations`).select(`location`).eq(`company_id`,t.id),l.from(`company_keywords`).select(`keyword, type`).eq(`company_id`,t.id),l.from(`opportunities`).select(`*, sources(name, source_type)`).eq(`status`,`open`)]);if(n.error)throw n.error;if(r.error)throw r.error;if(i.error)throw i.error;if(a.error)throw a.error;let o=aa(t,n.data||[],r.data||[],i.data||[]),s=A.profileDraftDirty,c=(a.data||[]).map(Qr).filter(F).map(e=>lo(o,e)).filter(e=>e.matchScore>=50).map(e=>({company_id:t.id,opportunity_id:e.id,match_score:e.matchScore,match_label:e.matchLabel,match_reasons:e.matchReasons,risks:e.risks,next_steps:e.nextSteps,calculated_at:new Date().toISOString()})),{error:u}=await l.from(`opportunity_matches`).delete().eq(`company_id`,t.id);if(u)throw u;if(c.length){let{error:e}=await l.from(`opportunity_matches`).insert(c);if(e)throw e}A.profile=o,va(o),s||Oa(o);let d=c.length===1?`match`:`matches`;return A.matchStatus={type:`success`,text:`Matching complete — ${c.length} stored ${d} found.`},await Cr(),await Oo(),await oa(),c.length}catch(e){return console.error(`Failed to run matching:`,e),A.matchStatus={type:`error`,text:`Failed to run matching. ${H(e)}`},0}finally{A.matchingLoading=!1,Z()}}async function da(e,t){if(!A.isAdmin){A.adminMessage={type:`error`,text:`You do not have access to this page.`},Z();return}A.adminSubmitting=!0,A.adminMessage=null,Z();try{if(!l)throw Error(`Supabase client is not configured.`);let n=Object.fromEntries(e.entries()),r=String(n.sourceName||n.source||`Manual`).trim()||`Manual`,i=String(n.title||``).trim();if(!i)throw Error(`Title is required.`);let a=String(n.description||``).trim()||`Manual opportunity: ${i}`,o={source_id:await ha(r),external_id:`manual-${Date.now()}`,title:i,buyer:String(n.buyer||``).trim()||null,category:String(n.category||``).trim()||null,type:String(n.type||``).trim()||`tender`,description:a,deadline:n.deadline||null,published_date:n.publishedDate||n.published_date||null,location:String(n.location||``).trim()||null,estimated_value:n.estimatedValue||n.estimated_value?Number(n.estimatedValue||n.estimated_value):null,currency:`ISK`,url:n.url||null,cpv_code:n.cpvCode||n.cpv_code||null,requirements:xn(n.requirements),keywords:xn(n.keywords),difficulty:String(n.difficulty||``).trim()||`medium`,status:String(n.status||``).trim()||`open`,raw_payload:{created_from:`admin`,source_name:r}},{error:s}=await l.from(`opportunities`).insert(o).select().single();if(s)throw console.error(`Supabase insert error:`,s),Error(`${s.message} (${s.code})`);A.adminMessage={type:`success`,text:`Opportunity saved to Supabase.`},A.adminOpportunityDraft=ar(),t?.reset(),await Cr(),A.companyId&&await ua(),U(`Opportunity added`,`success`)}catch(e){let t=H(e);console.error(`Failed to add opportunity. If this is an RLS error, allow anon insert/select during development:`,e),A.adminMessage={type:`error`,text:`Failed to save opportunity. ${t}`},Z()}finally{A.adminSubmitting=!1,Z()}}async function fa(t){if(!A.isAdmin){A.adminMessage={type:`error`,text:`You do not have access to this page.`},Z();return}A.adminDeletingId=t,A.adminMessage=null,Z();try{if(!l)throw Error(`Supabase client is not configured.`);let{error:n}=await l.from(`opportunities`).delete().eq(`id`,t);if(n)throw n;A.saved=A.saved.filter(e=>e!==t),A.ignored=A.ignored.filter(e=>e!==t),ba(e.saved,A.saved),ba(e.ignored,A.ignored),A.adminMessage={type:`success`,text:`Opportunity deleted from Supabase.`},await Cr(),await Ni(),U(`Opportunity deleted`,`success`)}catch(e){let t=H(e);console.error(`Failed to delete opportunity. If this is an RLS error, allow anon delete/select during development:`,e),A.adminMessage={type:`error`,text:`Failed to delete opportunity. ${t}`},Z()}finally{A.adminDeletingId=null,Z()}}async function pa(e,t){if(!A.isAdmin){A.adminMessage={type:`error`,text:`You do not have access to this page.`},Z();return}A.adminUpdatingId=e,A.adminMessage=null,Z();try{if(!l)throw Error(`Supabase client is not configured.`);let{error:n}=await l.from(`opportunities`).update({status:t}).eq(`id`,e);if(n)throw n;A.adminMessage={type:`success`,text:t===`open`?`Opportunity marked relevant.`:`Opportunity hidden.`},await Cr(),await Ni(),U(t===`open`?`Marked relevant`:`Opportunity hidden`,`success`)}catch(e){let t=H(e);console.error(`Failed to update opportunity status:`,e),A.adminMessage={type:`error`,text:`Failed to update opportunity. ${t}`},Z()}finally{A.adminUpdatingId=null,Z()}}async function ma(e,t){if(!A.isAdmin){A.adminMessage={type:`error`,text:`You do not have access to this page.`},Z();return}let n=A.opportunities.find(t=>t.id===e);if(!n)return;let r={include:{opportunity_intent:`confirmed_tender`,quality_status:`confirmed_tender`,hidden_from_reports:!1,admin_report_status:`include`},hide:{hidden_from_reports:!0,admin_report_status:`hidden`},noise:{opportunity_intent:`not_opportunity`,quality_status:`needs_review`,hidden_from_reports:!0,admin_report_status:`noise`},confirmed_tender:{opportunity_intent:`confirmed_tender`,quality_status:`confirmed_tender`,hidden_from_reports:!1,admin_report_status:`include`},early_opportunity:{opportunity_intent:`early_opportunity`,quality_status:`early_signal`,hidden_from_reports:!1,admin_report_status:`include`}}[t];if(r){A.adminUpdatingId=e,A.adminMessage=null,Z();try{if(!l)throw Error(`Supabase client is not configured.`);let t={...n.rawPayload||{},...r,admin_reviewed_at:new Date().toISOString()},{error:i}=await l.from(`opportunities`).update({raw_payload:t}).eq(`id`,e);if(i)throw i;A.adminMessage={type:`success`,text:`Report visibility updated.`},await Cr(),U(`Report visibility updated`,`success`)}catch(e){let t=H(e);console.error(`Failed to update report visibility:`,e),A.adminMessage={type:`error`,text:`Failed to update report visibility. ${t}`},Z()}finally{A.adminUpdatingId=null,Z()}}}async function ha(e){if(!l)throw Error(`Supabase client is not configured`);let t=e&&e.trim()?e.trim():`Manual`,{data:n,error:r}=await l.from(`sources`).select(`id`).eq(`name`,t).maybeSingle();if(r)throw console.error(`Source select error:`,r),r;if(n&&n.id)return n.id;let{data:i,error:a}=await l.from(`sources`).insert({name:t,source_type:`manual`,is_active:!0,notes:`Created from VerkRadar admin page`}).select(`id`).single();if(a)throw console.error(`Source insert error:`,a),a;return i.id}function H(e){return e?typeof e==`string`?e:[e.message,e.details,e.hint,e.code].filter(Boolean).join(` `):`Unknown error`}function ga(e,t=`login`){let n=String(e?.message||e||``).toLowerCase(),r=String(e?.code||e?.status||``).toLowerCase();return n.includes(`invalid login credentials`)||n.includes(`invalid_credentials`)||r.includes(`invalid_credentials`)?k(`emailOrPasswordIncorrect`):n.includes(`email not confirmed`)?k(`confirmEmailBeforeLogin`):_a(e)?k(`signupExistingAccount`):n.includes(`password`)&&n.includes(`characters`)?k(`passwordTooShort`):n.includes(`rate limit`)||n.includes(`too many`)?k(`tooManyAttempts`):k(t===`signup`?`couldNotCreateAccount`:`couldNotLogin`)}function _a(e){let t=String(e?.message||e||``).toLowerCase(),n=String(e?.code||e?.status||``).toLowerCase();return t.includes(`user already registered`)||t.includes(`already registered`)||t.includes(`already exists`)||n.includes(`user_already_exists`)||n.includes(`email_exists`)}function U(e,t=`success`){A.toast={message:e,type:t},Z(),clearTimeout(window.__toastTimeout),window.__toastTimeout=setTimeout(()=>{A.toast=null,Z()},2500)}function va(t){localStorage.setItem(e.profile,JSON.stringify(t))}function ya(e){try{let t=localStorage.getItem(e);return t?JSON.parse(t):[]}catch{return[]}}function ba(e,t){localStorage.setItem(e,JSON.stringify(t))}function xa(e){return E(e).join(`, `)}function Sa(e){if(e==null||e===``)return null;let t=Number(e);return Number.isFinite(t)?t:null}function Ca(e){return String(e||``).trim().toLowerCase()}function wa(e,t=A.profileDraft?.industry){return i[e]?.[t]||[]}function Ta(e,t){if(![`services`,`includeKeywords`,`excludeKeywords`].includes(e)||!t)return;W();let n=Array.isArray(A.profileDraft[e])?A.profileDraft[e]:[],r=Ca(t),i=n.some(e=>Ca(e)===r);A.profileDraft[e]=i?n.filter(e=>Ca(e)!==r):[...n,t],G(),Z()}function Ea({field:e,title:t,values:n,selectedValues:r}){if(!n.length)return``;let i=Array.isArray(r)?r:[];return`
    <div class="suggestion-group">
      <div class="suggestion-group-head">
        <span>${O(t)}</span>
      </div>
      <div class="suggestion-chips">
        ${n.map(t=>{let n=i.some(e=>Ca(e)===Ca(t));return`
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
  `}function W(){if(!A.profileDraft){if(A.profile){A.profileDraft=Da(A.profile);return}A.profileDraft=Wn(),A.pendingSignupPlan&&(A.profileDraft.selectedPlan=A.pendingSignupPlan)}}function Da(e){return{...e,services:E(e.services),includeKeywords:E(e.includeKeywords),excludeKeywords:E(e.excludeKeywords),locations:E(e.locations),serviceAreas:E(e.serviceAreas)}}function G(){A.profileDraftDirty=!0,A.profileSaved=!1,A.profileSaveMessage=null,A.profileSaveError=null}function Oa(e){A.profileDraft=Da(e||Wn()),A.profileDraftDirty=!1}function ka(e){W();let t=new FormData(e),n={...A.profileDraft};K(e,`companyName`)&&(n.companyName=String(t.get(`companyName`)||``).trim()),K(e,`kennitala`)&&(n.kennitala=String(t.get(`kennitala`)||``).trim()),K(e,`contactEmail`)&&(n.contactEmail=String(t.get(`contactEmail`)||``).trim()),K(e,`billingEmail`)&&(n.billingEmail=String(t.get(`billingEmail`)||``).trim()),K(e,`contactName`)&&(n.contactName=String(t.get(`contactName`)||``).trim()),K(e,`phone`)&&(n.phone=String(t.get(`phone`)||``).trim()),K(e,`address`)&&(n.address=String(t.get(`address`)||``).trim()),K(e,`website`)&&(n.website=String(t.get(`website`)||``).trim()),K(e,`selectedPlan`)&&(n.selectedPlan=qn(t.get(`selectedPlan`))||`basic`),K(e,`industry`)&&(n.industry=String(t.get(`industry`)||``)),K(e,`services`)&&(n.services=bn(t.get(`services`))),K(e,`includeKeywords`)&&(n.includeKeywords=bn(t.get(`includeKeywords`))),K(e,`excludeKeywords`)&&(n.excludeKeywords=bn(t.get(`excludeKeywords`))),K(e,`locations`)&&(n.locations=t.getAll(`locations`)),K(e,`baseLocation`)&&(n.baseLocation=String(t.get(`baseLocation`)||``)),K(e,`serviceAreas`)&&(n.serviceAreas=bn(t.get(`serviceAreas`))),K(e,`willingToTravel`)&&(n.willingToTravel=t.get(`willingToTravel`)===`on`),K(e,`nationalProjects`)&&(n.nationalProjects=t.get(`nationalProjects`)===`on`),K(e,`remoteProjects`)&&(n.remoteProjects=t.get(`remoteProjects`)===`on`),K(e,`minimumProjectValueForTravel`)&&(n.minimumProjectValueForTravel=String(t.get(`minimumProjectValueForTravel`)||``)),K(e,`minProjectValue`)&&(n.minProjectValue=String(t.get(`minProjectValue`)||``)),K(e,`maxProjectValue`)&&(n.maxProjectValue=String(t.get(`maxProjectValue`)||``)),K(e,`allowUnknownValue`)&&(n.allowUnknownValue=t.get(`allowUnknownValue`)===`on`),K(e,`reportFrequency`)&&(n.reportFrequency=String(t.get(`reportFrequency`)||`weekly`)),K(e,`reportDay`)&&(n.reportDay=String(t.get(`reportDay`)||`monday`)),K(e,`deadlineReminders`)&&(n.deadlineReminders=t.get(`deadlineReminders`)===`on`),K(e,`includeLowConfidence`)&&(n.includeLowConfidence=t.get(`includeLowConfidence`)===`on`),A.profileDraft=n,G()}function K(e,t){return!!e.querySelector(`[name="${CSS.escape(t)}"]`)}function Aa(){return W(),{...A.profileDraft,companyName:String(A.profileDraft.companyName||``).trim(),kennitala:String(A.profileDraft.kennitala||``).trim(),contactEmail:String(A.profileDraft.contactEmail||``).trim(),billingEmail:String(A.profileDraft.billingEmail||``).trim(),contactName:String(A.profileDraft.contactName||``).trim(),phone:String(A.profileDraft.phone||``).trim(),address:String(A.profileDraft.address||``).trim(),website:String(A.profileDraft.website||``).trim(),selectedPlan:qn(A.profileDraft.selectedPlan||A.pendingSignupPlan)||`basic`,industry:String(A.profileDraft.industry||``),services:E(A.profileDraft.services),includeKeywords:E(A.profileDraft.includeKeywords),excludeKeywords:E(A.profileDraft.excludeKeywords),locations:E(A.profileDraft.locations),baseLocation:String(A.profileDraft.baseLocation||``),serviceAreas:E(A.profileDraft.serviceAreas),willingToTravel:!!A.profileDraft.willingToTravel,nationalProjects:!!A.profileDraft.nationalProjects,remoteProjects:!!A.profileDraft.remoteProjects,minimumProjectValueForTravel:Sa(A.profileDraft.minimumProjectValueForTravel),minProjectValue:Sa(A.profileDraft.minProjectValue),maxProjectValue:Sa(A.profileDraft.maxProjectValue)}}function ja(e,t){return String(e||``).toLowerCase().includes(String(t||``).toLowerCase())}function Ma(e){return[e.title,e.description,e.category,e.location,...e.keywords||[]].join(` `).toLowerCase()}var Na=`jarðvinna.gatnagerð.gatna- og stígagerð.gatna og stígagerð.stígagerð.lóðarframkvæmdir.lagnavinna.lagnir.fráveita.fráveitulagnir.vatnsveita.hitaveita.vatnslagnir.regnvatnslagnir.drenlagnir.endurnýjun lagna.brunnar.dælubrunnar.malbikun.gangstétt.gangstéttir.stígar.bílastæði.vegagerð.gröftur.fyllingar.grjóthleðsla.jarðvegsskipti.undirbygging.yfirborðsfrágangur.hellulögn.hellulagnir.kantsteinn.kantsteinar.landmótun.afvötnun.jarðvegsvinna.útiframkvæmdir.gatnaframkvæmdir`.split(`.`),Pa=[`snjómokstur`,`snjóruðningur`,`hálkuvarnir`,`vetrarþjónusta`,`gangstéttir`,`stofnanalóðir`],Fa=[`framkvæmdir`,`framkvæmd`,`útboð`,`verðfyrirspurn`,`tilboð`,`viðhald`,`verktaki`,`verk`],Ia=[`innanhússfrágangur`,`innanhúss`,`smíði`,`smíðavinna`,`málun`,`gólfefni`,`innréttingar`,`raflagnir`,`pípulagnir`,`leikskóli`,`skóli`,`húsnæði`,`byggingarvinna`],La=[`innanhússfrágangur`,`innanhúss`,`smíði`,`smíðavinna`,`málun`,`gólfefni`,`innréttingar`,`raflagnir`,`pípulagnir`,`byggingarvinna`],Ra=[`for- og verkhönnun`,`verkhönnun`,`forhönnun`,`hönnun`,`ráðgjöf`,`verkfræðiráðgjöf`,`eftirlit`,`umsjón`,`verkefnastjórn`,`verkefnastjórnun`],za=[`hönnun`,`for- og verkhönnun`,`verkhönnun`,`forhönnun`,`ráðgjöf`,`verkfræðiráðgjöf`,`eftirlit`,`umsjón`,`verkefnastjórn`,`verkefnastjórnun`],Ba=[`jarðvinna`,`jarðvegsvinna`,`gatnagerð`,`gatna- og stígagerð`,`stígagerð`,`vegagerð`,`lóðarframkvæmdir`,`gröftur`,`jarðvegsskipti`,`fyllingar`,`afvötnun`,`landmótun`,`yfirborðsfrágangur`,`malbikun`,`útiframkvæmdir`];function q(e){return D(e)}function J(e,t){let n=q(e);return t.some(e=>n.includes(q(e)))}function Y(e){let t=q(e);return Fa.some(e=>t===q(e))}function Va(e){let t=q(e);return Na.some(e=>t===q(e))?0:Na.some(e=>t.includes(q(e))||q(e).includes(t))?1:Pa.some(e=>t===q(e))?2:Y(e)?10:3}function Ha(e){return[...e].sort((e,t)=>Va(e)-Va(t)||String(t).length-String(e).length||String(e).localeCompare(String(t)))}function Ua(e){let t=q(e);return Na.filter(e=>t.includes(q(e)))}function Wa(e){let t=q(e);return Pa.filter(e=>t.includes(q(e)))}function Ga(e,t){let n=Ua(t);if(!n.length||!e.some(Y))return e;let r=e.filter(e=>!Y(e));return[...new Set([...n,...r])]}function Ka(e={}){return J([e.industry,...Array.isArray(e.services)?e.services:[],...Array.isArray(e.includeKeywords)?e.includeKeywords:[]].filter(Boolean).join(` `),[...Na,...Pa,`construction`,`contractor`,`verktaki`,`mannvirki`,`jarðtækni`])}function qa(e={}){return J([...Array.isArray(e.services)?e.services:[],...Array.isArray(e.includeKeywords)?e.includeKeywords:[]].filter(Boolean).join(` `),Pa)}function Ja(e={}){return J([...Array.isArray(e.services)?e.services:[],...Array.isArray(e.includeKeywords)?e.includeKeywords:[]].filter(Boolean).join(` `),La)}function Ya(e={}){return J([...Array.isArray(e.services)?e.services:[],...Array.isArray(e.includeKeywords)?e.includeKeywords:[]].filter(Boolean).join(` `),za)}function Xa(e={}){return J([e.industry,...Array.isArray(e.services)?e.services:[],...Array.isArray(e.includeKeywords)?e.includeKeywords:[]].filter(Boolean).join(` `),Ba)}function Za(e,t,n,r){if(!Ka(e))return{isCivilProfile:!1,serviceHits:n,keywordHits:r,hasWeakOnlyFit:!1,hasIndoorMismatch:!1,hasConsultingMismatch:!1,hasSecondaryOnlyFit:!1,hasPromotedBroadFit:!1,hasWinterOnlyFit:!1};let i=Ma(t),a=J(i,Na),o=J(i,Pa),s=qa(e),c=o&&s,l=J(i,Ia),u=Ja(e),d=J(i,Ra),f=Ya(e),p=Ua(i),m=c?Wa(i):[],h=n.length>0&&n.every(Y),ee=r.length>0&&r.every(Y),g=[...n,...r].some(e=>!Y(e)),te=[...n,...r].some(Y),_=!g&&te&&a,ne=_||c?[...new Set([...n,..._?p:[],...m])]:n,re=a||c||g,ie=re&&_?Ga(ne,i):ne.filter(e=>!Y(e)),v=re&&_?Ga(r,i):r.filter(e=>!Y(e)),y=[...new Set([...ie,...v].filter(e=>!Y(e)))],b=!Xa(e);return{isCivilProfile:!0,serviceHits:Ha(ie),keywordHits:Ha(v),hasWeakOnlyFit:!a&&!c&&!g&&(h||ee),hasIndoorMismatch:l&&!a&&!u,hasConsultingMismatch:d&&!f,hasWinterOnlyFit:c&&!a,hasSecondaryOnlyFit:g&&b&&y.length<=2&&p.length>=3,hasPromotedBroadFit:_}}function Qa(e){let t=D(e.location);if(ao(t)&&oo(e))return!1;let n=D(`${e.title} ${e.description} ${e.location}`);return[`all iceland`,`iceland`,`island`].some(e=>t.includes(e))?!0:[`national`,`landsvist`,`nationwide`].some(e=>n.includes(e))}function $a(e){return[...e.locations||[],...e.serviceAreas||[],e.baseLocation].filter(Boolean)}function eo(e,t){let n=$a(e);if(!n.length)return!1;let r=Si(t);if(n.includes(`All Iceland`)){let e=D(io(t));return r===`IS`||e.includes(`iceland`)||e.includes(`island`)}if(n.includes(`Remote / Online`)&&io(t)===`Remote / Online`)return!0;if(!r||r!==`IS`&&n.some(e=>D(e).includes(`iceland`)))return!1;let i=D(io(t));return n.some(e=>{let t=D(e);return t?t===i||t===`reykjavik`&&[`reykjavik`,`capital area`,`hofudborgarsvaedid`].includes(i)||t===`capital area`&&[`reykjavik`,`capital area`,`hofudborgarsvaedid`].includes(i)?!0:i.includes(t)||t.includes(i):!1})}function to(e,t){return e?eo(e,t)?`local_match`:e.locations?.includes(`Remote / Online`)&&io(t)===`Remote / Online`?`remote_match`:Qa(t)&&(ro(t)||Si(t)===`IS`)?`national_match`:io(t)===`Remote / Online`&&e.remoteProjects?`remote_match`:ro(t)&&(e.nationalProjects||e.willingToTravel)?`outside_area_possible`:`outside_area_low_confidence`:`outside_area_low_confidence`}function no(e,t){let n=to(e,t);return n===`local_match`?`Local match`:n===`national_match`?`National opportunity`:n===`remote_match`?`Remote opportunity`:n===`outside_area_possible`?`Outside base area but travel allowed`:n===`outside_area_low_confidence`?`Outside selected area; low-confidence location match`:null}function ro(e){if(Si(e)===`IS`)return!0;let t=D(io(e));return[`iceland`,`island`,`all iceland`,`reykjavik`,`capital area`,`hofudborgarsvaedid`,`east iceland`,`west iceland`,`north iceland`,`south iceland`,`sudurnes`].some(e=>t.includes(e))}function io(e={}){let t=String(e.location||``).trim(),n=D(t);return t&&!ao(n)?t:oo(e)||t}function ao(e){return!e||e===`unknown`||e===`all iceland`||e===`iceland`||e===`island`}function oo(e={}){let t=e.rawPayload&&typeof e.rawPayload==`object`?e.rawPayload:{},n=D([e.title,e.description,e.buyer,t.buyer,t.extracted_buyer,t.source_name,t.extracted_location,t.location].filter(Boolean).join(` `));return n.includes(`reykjavik`)||n.includes(`reykjavikurborg`)||n.includes(`hofudborgarsvaedid`)?`Reykjavík / Höfuðborgarsvæðið`:``}function so(e,t){return t.estimatedValue?!(e.minProjectValue&&t.estimatedValue<e.minProjectValue||e.maxProjectValue&&t.estimatedValue>e.maxProjectValue):!!e.allowUnknownValue}function co(e,t){let n=String(e.industry||``).toLowerCase(),r=String(t.category||``).toLowerCase();return r.includes(n)||n.includes(r)}function lo(e,t){if(!e)return{...t,matchScore:0,matchLabel:`Weak match`,matchReasons:[],risks:[],nextSteps:[]};let n=Ma(t),r=0,i=[],a=[];co(e,t)&&(r+=35,i.push(`Matches your ${e.industry} industry`));let o=Za(e,t,(e.services||[]).filter(e=>ja(n,e)),(e.includeKeywords||[]).filter(e=>ja(n,e)));for(let e of o.serviceHits)r+=10,i.push(`Mentions your service: ${e}`);for(let e of o.keywordHits)r+=8,i.push(`Contains your keyword: ${e}`);let s=to(e,t),c=no(e,t);if(s===`local_match`)r+=22,i.push(c);else if(s===`national_match`)r+=16,i.push(c);else if(s===`remote_match`)r+=14,i.push(c);else if(s===`outside_area_possible`){let n=Number(e.minimumProjectValueForTravel||0),o=n&&t.estimatedValue&&Number(t.estimatedValue)<n;r+=o?-4:4,i.push(c),a.push(o?`Outside base area and below your preferred travel project value`:`Check travel cost, project size and delivery capacity`)}else r-=8,a.push(`Outside selected area; location match is low confidence`);o.hasWinterOnlyFit&&s===`local_match`&&(r+=12,i.push(`Local winter service fit`)),so(e,t)?(r+=10,t.estimatedValue&&i.push(`Project value is inside your preferred range`)):(r-=25,a.push(`Estimated project value is outside your preferred range`));let l=w(t.deadline);t.deadline?l>=0&&l<=30?(r+=8,i.push(`Deadline is coming up soon`)):l<0&&(r-=50,a.push(`Deadline has passed`)):a.push(Ho(t));for(let t of e.excludeKeywords||[])ja(n,t)&&(r-=18,a.push(`Contains exclude keyword: ${t}`));return(t.requirements||[]).some(e=>ja(e,`certification`)||ja(e,`license`))&&a.push(`May require certification or license documentation`),t.difficulty===`high`&&a.push(`This appears to be a higher-complexity opportunity`),o.hasWeakOnlyFit&&(r=Math.min(r,40),a.push(`Only broad construction/procurement terms matched; verify fit`)),o.hasIndoorMismatch&&(r=Math.min(r-20,40),a.push(`Appears to be indoor/building finishing work outside your core civil services`)),o.hasConsultingMismatch&&(r=Math.min(r-30,35),a.push(`Appears to be design, consulting, supervision, or project management work outside your execution services`)),o.hasSecondaryOnlyFit&&(r=Math.min(r,84),a.push(`Secondary service match in a broader infrastructure tender; verify scope`)),o.hasPromotedBroadFit&&(r=Math.min(r,72),a.push(`Broad construction terms matched; verify the specific work type`)),o.hasWinterOnlyFit&&(r=Math.min(r,68),a.push(`Winter/snow service fit; verify capacity and scope`)),r=Math.max(0,Math.min(100,Math.round(r))),{...t,matchScore:r,matchLabel:fo(r),matchReasons:i.slice(0,5),risks:[...new Set(a)].slice(0,4),nextSteps:[`Open the source documents`,`Confirm mandatory requirements`,`Check capacity and profitability`,`Prepare questions before the deadline`]}}function uo(e){if(!A.profile||!Ka(A.profile))return e;let t=lo(A.profile,e);return Number(t.matchScore||0)>=Number(e.matchScore||0)?e:{...e,matchScore:t.matchScore,matchLabel:t.matchLabel,matchReasons:t.matchReasons,risks:t.risks,nextSteps:t.nextSteps}}function fo(e){return e>=85?`Strong match`:e>=65?`Good match`:e>=45?`Possible match`:`Weak match`}function po(){if(A.storedMatches.length)return A.storedMatches.filter(eu).filter(go).filter(F).filter(e=>!A.ignored.includes(e.id)).map(uo).sort((e,t)=>t.matchScore-e.matchScore||w(e.deadline)-w(t.deadline));let e=A.profile||(A.user?null:Hn);return e?A.opportunities.filter(eu).map(t=>lo(e,t)).filter(go).filter(F).filter(e=>!A.ignored.includes(e.id)).sort((e,t)=>t.matchScore-e.matchScore||w(e.deadline)-w(t.deadline)):[]}function mo(){return A.storedMatches.filter(eu).filter(go).filter(F).filter(e=>!A.ignored.includes(e.id)).sort((e,t)=>t.matchScore-e.matchScore||w(e.deadline)-w(t.deadline))}function ho(){let e=A.profile||(A.user?null:Hn);return e?A.opportunities.filter(eu).map(t=>lo(e,t)).filter(go).filter(F).filter(e=>!A.ignored.includes(e.id)).sort((e,t)=>Eo(e)-Eo(t)||t.matchScore-e.matchScore||w(e.deadline)-w(t.deadline)):[]}function go(e){return A.isAdmin&&A.filters.label===`all_opportunities`?!0:zl(e)}function _o(e={}){return String(e.safetyStatus||e.safety_status||`auto_approved`)}function vo(e){return[...mo(),...ho()].find(t=>t.id===e)}function yo(){let e=bo([`all_opportunities`,`needs_review`].includes(A.filters.label)?ho():mo());if(A.filters.label===`recommended`){let t=e.filter(So),n=e.filter(Co);return To(t.length?t:n)}return To(e.filter(xo))}function bo(e){return e.filter(e=>{let t=A.filters.search.toLowerCase();return!(t&&!Ma(e).includes(t)||A.filters.category!==`all`&&e.category!==A.filters.category||A.filters.location!==`all`&&e.location!==A.filters.location||A.filters.type!==`all`&&e.type!==A.filters.type||A.filters.savedOnly&&!A.saved.includes(e.id))})}function xo(e){let t=A.filters.label;return t===`all`||t===`all_opportunities`?!0:t===`needs_review`?I(e.qualityStatus,e)===`needs_review`:t===`recommended`?So(e):t===`strong`?e.matchLabel===`Strong match`||e.matchScore>=85:t===`possible`?[`Possible match`,`Weak match`].includes(e.matchLabel)||e.matchScore<65:e.matchLabel===t}function So(e){return!wo(e)||Bl(e)?!1:e.matchScore>=85||e.matchLabel===`Strong match`?!0:!(I(e.qualityStatus,e)===`needs_review`||xi(z(e)))}function Co(e){return!wo(e)||Bl(e)?!1:e.matchScore>=85||e.matchLabel===`Strong match`?!0:!(I(e.qualityStatus,e)===`needs_review`||xi(z(e)))}function wo(e){return[`Strong match`,`Good match`,`Possible match`].includes(e.matchLabel)||e.matchScore>=45}function To(e){return[...e].sort((e,t)=>Eo(e)-Eo(t)||t.matchScore-e.matchScore||w(e.deadline)-w(t.deadline))}function Eo(e){let t=L(e);if(t===`confirmed_tender`)return 0;if(t===`early_opportunity`)return 1;if(t===`market_signal`)return 2;if(t===`news_context`)return 8;if(t===`not_opportunity`)return 9;let n=I(e.qualityStatus,e);return n===`confirmed_tender`?0:n===`early_signal`?1:2}function Do({visibleCount:e,storedMatchCount:t,filteredStoredCount:n,availableCount:r,recommendedCount:i,strongCount:a,companyName:o}){let s=A.filters.label;return A.language===`is`?s===`all_opportunities`?`${r} tækifæri eru til í kerfinu. Sýni ${e} sýnileg tækifæri til yfirferðar.`:s===`needs_review`?`${r} tækifæri eru til í kerfinu. Sýni ${e} atriði sem þarf að staðfesta.`:s===`all`?`${t} tækifæri fundust sem gætu passað við ${o}. Sýni ${e}.`:s===`strong`?`${t} tækifæri fundust sem gætu passað við ${o}. Sýni ${e} sterkar samsvaranir.`:s===`recommended`?e?`${t} tækifæri fundust sem gætu passað við ${o}. Sýni ${e} ráðlögð eða möguleg tækifæri.`:a>0?`${a} sterkar samsvaranir eru til fyrir ${o}, en þær eru faldar af núverandi síum.`:n>0?`${n} tækifæri eru falin af gæðasíum. Notið Allar samsvaranir eða Þarfnast staðfestingar til að skoða þau.`:`Engar ráðlagðar samsvaranir fyrir ${o} enn. ${r} tækifæri eru til í kerfinu, en ekkert passar nógu sterkt við þennan prófíl.`:s===`possible`?`${t} tækifæri fundust sem gætu passað við ${o}. Sýni ${e} mögulegar eða veikar samsvaranir.`:`${t} tækifæri fundust sem gætu passað við ${o}. Sýni ${e} tækifæri.`:s===`all_opportunities`?`${r} opportunities are available in the system. Showing ${e} visible opportunities for inspection.`:s===`needs_review`?`${r} opportunities are available in the system. Showing ${e} needs-review opportunities.`:s===`all`?`${t} opportunities may fit ${o}. Showing all ${e}.`:s===`strong`?`${t} opportunities may fit ${o}. Showing ${e} strong matches.`:s===`recommended`?e?`${t} opportunities may fit ${o}. Showing ${e} recommended or possible matches.`:a>0?`${a} strong ${a===1?`match exists`:`matches exist`} for ${o}, but ${a===1?`it is`:`they are`} hidden by your current filters.`:n>0?`${n} ${n===1?`opportunity is`:`opportunities are`} hidden from Recommended by quality checks. Use All matches or Needs review to inspect them.`:`No recommended matches for ${o} yet. ${r} opportunities are available in the system, but none match this profile strongly enough.`:s===`possible`?`${t} opportunities may fit ${o}. Showing ${e} possible or weak matches.`:`${t} opportunities may fit ${o}. Showing ${e} ${s.toLowerCase()} opportunities.`}async function Oo(){if(!l||!A.companyId){A.opportunityActions=[];return}try{let{data:e,error:t}=await l.from(`company_opportunity_actions`).select(`id, company_id, opportunity_id, action_type, note, created_at, updated_at`).eq(`company_id`,A.companyId);if(t)throw t;A.opportunityActions=e||[],A.saved=A.opportunityActions.filter(e=>[`saved`,`watched`].includes(e.action_type)).map(e=>e.opportunity_id),A.ignored=A.opportunityActions.filter(e=>e.action_type===`ignored`).map(e=>e.opportunity_id)}catch(e){console.error(`Failed to load company opportunity actions:`,e),A.opportunityActions=[],A.saved=[],A.ignored=[]}}async function ko(t,n){if(!l||!A.companyId){(n===`saved`||n===`watched`)&&(A.saved=Array.from(new Set([...A.saved,t])),A.ignored=A.ignored.filter(e=>e!==t)),n===`ignored`&&(A.ignored=Array.from(new Set([...A.ignored,t])),A.saved=A.saved.filter(e=>e!==t)),ba(e.saved,A.saved),ba(e.ignored,A.ignored);return}let{error:r}=await l.from(`company_opportunity_actions`).upsert({company_id:A.companyId,opportunity_id:t,action_type:n,updated_at:new Date().toISOString()},{onConflict:`company_id,opportunity_id`});if(r)throw r;await Oo()}async function Ao(t){if(!l||!A.companyId){A.saved=A.saved.filter(e=>e!==t),A.ignored=A.ignored.filter(e=>e!==t),ba(e.saved,A.saved),ba(e.ignored,A.ignored);return}let{error:n}=await l.from(`company_opportunity_actions`).delete().eq(`company_id`,A.companyId).eq(`opportunity_id`,t);if(n)throw n;await Oo()}async function jo(e){let t=`Opportunity saved`;try{A.saved.includes(e)?(await Ao(e),t=`Removed from saved`):await ko(e,`saved`),U(t,`success`),Z()}catch(e){console.error(`Failed to update saved opportunity:`,e),U(`Could not update saved opportunity`,`error`)}}async function Mo(e){try{await ko(e,`ignored`),A.selectedOpportunityId===e&&(A.selectedOpportunityId=null),U(`Opportunity hidden`,`success`),Z()}catch(e){console.error(`Failed to ignore opportunity:`,e),U(`Could not hide opportunity`,`error`)}}async function No(e){try{await Ao(e),Z()}catch(e){console.error(`Failed to unignore opportunity:`,e),U(`Could not restore opportunity`,`error`)}}function Po(e){A.selectedOpportunityId=e,document.body.classList.add(`modal-open`),Z()}function Fo(){Io(),Z()}function Io(){A.selectedOpportunityId=null,document.body.classList.remove(`modal-open`)}function Lo(){if(!A.selectedOpportunityId){document.body.classList.remove(`modal-open`);return}if(!vo(A.selectedOpportunityId)){A.selectedOpportunityId=null,document.body.classList.remove(`modal-open`);return}document.body.classList.add(`modal-open`)}function Ro(e){if(!e)return{label:$(Rn),className:`deadline danger`};let t=w(e);return t===999?{label:$(Rn),className:`deadline danger`}:{label:k(`daysLeft`,{count:t}),className:t<=14?`deadline danger`:`deadline`}}function zo(e){let t=String(e||``).trim().match(/^(\d{4}-\d{2}-\d{2})T(\d{2}):(\d{2})/);return t?`${Fl(t[1])} kl. ${t[2]}:${t[3]}`:``}function Bo(e){return e?vn(e):$(Rn)}function Vo(e){return e?.deadlineAt?zo(e.deadlineAt):e?.deadline?Fl(e.deadline):$(Ho(e))}function Ho(e){if(R(e)){let t=ci(e);return[`tender_awarded`,`awarded`,`already_tendered`,`announced`].includes(t)?`Tender appears already announced/awarded — verify source article.`:t===`upcoming_tender`?`Formal tender deadline not found yet — monitor source article.`:zn}return String(e?.rawPayload?.deadline_warning||``).trim()||Rn}function Uo(e){if(!e?.deadline)return{label:$(Ho(e)),className:`deadline danger`};let t=zo(e.deadlineAt);return t?{label:t,className:w(e.deadline)<=14?`deadline danger`:`deadline`}:Ro(e.deadline)}function X(e){return e?Tn(e,`ISK`):A.language===`is`?`Ekki gefið upp`:`Value unknown`}function Wo(){return[...new Set(A.opportunities.map(e=>e.category))].sort()}function Go(){return[...new Set(A.opportunities.map(e=>e.location))].sort()}function Ko(){return[...new Set(A.opportunities.map(e=>e.type))].sort()}function qo(e){return e===`Strong match`?`badge strong`:e===`Good match`?`badge good`:e===`Possible match`?`badge possible`:`badge weak`}function Z(){let e=document.getElementById(`app`),t=Gn(A.route),n=``;if(n=A.isBooting||!A.authLoaded||!A.profileLoaded||!A.adminLoaded?Zo():t===`/`?uc():t===`/login`?ms():t===`/signup`?Ss():t===`/forgot-password`?hs():t===`/reset-password`?gs():t===`/accept-invite`?_s():t===`/onboarding`?dc():t===`/dashboard`?A.user?bc():V():t===`/report`?A.user?vl():V():t===`/pricing`?Su():t===`/trial`?Cu():t===`/privacy`?ns():t===`/terms`?rs():t===`/data-sources`?is():t===`/cookies`?as():t===`/security`?os():t===`/contact`?ss():t===`/settings`?A.user?wu():V():t===`/admin`?A.user?A.isAdmin?Bc():Ki():V():uc(),e.innerHTML=n,A.selectedOpportunityId){let t=vo(A.selectedOpportunityId);t?(document.body.classList.add(`modal-open`),e.insertAdjacentHTML(`beforeend`,zc(t))):Lo()}else Lo()}function Jo(e){let t=window.scrollX,n=window.scrollY,r=Yo(e),i=typeof e.selectionStart==`number`?e.selectionStart:null,a=typeof e.selectionEnd==`number`?e.selectionEnd:null;Z(),requestAnimationFrame(()=>{if(window.scrollTo(t,n),!r)return;let e=document.querySelector(r);e&&(e.focus({preventScroll:!0}),i!==null&&a!==null&&typeof e.setSelectionRange==`function`&&[`text`,`search`,`email`,`url`,`tel`,`password`,``].includes(e.type||``)&&e.setSelectionRange(i,a))})}function Yo(e){return e?.dataset?e.dataset.adminFilter?`[data-admin-filter="${Xo(e.dataset.adminFilter)}"]`:e.dataset.adminCompanyFilter?`[data-admin-company-filter="${Xo(e.dataset.adminCompanyFilter)}"]`:``:``}function Xo(e){return window.CSS?.escape?window.CSS.escape(String(e)):String(e).replace(/["\\]/g,`\\$&`)}function Zo(){return Q(`
    <div class="app-loader">
      <div class="loader-mark" aria-label="${O(k(`loadingLabel`))}">
        <span></span>
      </div>
    </div>
  `)}function Q(e){let t=!!A.user,n=!!A.profile,r=Qo(t,n),i=us(t,n);return`
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
          ${t&&!A.isMobileMenuOpen?ds():``}
        </div>
      </div>
      ${cs(r,i,t)}
    </header>
    <main>${e}</main>
    ${$o()}
    ${A.toast?`
      <div class="toast toast-${A.toast.type}">
        <span class="toast-dot"></span>
        <span>${O(A.toast.message)}</span>
      </div>
    `:``}
  `}function Qo(e=!!A.user,t=!!A.profile){let n=e?t?[[k(`navDashboard`),`/dashboard`],[k(`navReport`),`/report`],[k(`navSettings`),`/settings`]]:[[k(`setupCompany`),`/onboarding`],[k(`navSettings`),`/settings`]]:[[k(`navHowItWorks`),`#how-it-works`],[k(`navSampleReport`),`#sample-report`],[k(`navPricing`),`/pricing`]];return e&&A.isAdmin&&n.push([`Admin`,`/admin`]),n}function $o(){let e=[[k(`privacyPolicy`),`/privacy`],[k(`termsOfService`),`/terms`],[k(`dataSources`),`/data-sources`],[k(`security`),`/security`],[k(`contact`),`/contact`]];return`
    <footer class="site-footer">
      <div>
        <strong>VerkRadar</strong>
        <p>${O(k(`footerText`))}</p>
      </div>
      <nav aria-label="Legal and trust pages">
        ${e.map(([e,t])=>`<button type="button" data-action="go" data-href="${t}">${e}</button>`).join(``)}
      </nav>
    </footer>
  `}function es(e){return s(e,A.language)}function ts(e){let t=es(e);return Q(Et({language:A.language,escapeHtml:O,eyebrow:t.eyebrow,title:t.title,intro:t.intro,sections:t.sections}))}function ns(){return ts(`privacy`)}function rs(){return ts(`terms`)}function is(){return ts(`data`)}function as(){return ns()}function os(){return ts(`security`)}function ss(){return ts(`contact`)}function cs(e,t,n){return`
    <nav class="mobile-menu-panel" id="mobile-menu">
      <div class="mobile-menu-scroll">
      <div class="mobile-menu-links">
        ${e.map(([e,t])=>t.startsWith(`#`)?`<button type="button" data-action="mobile-scroll-to" data-target="${t.slice(1)}">${e}</button>`:`<button type="button" data-action="mobile-nav" data-href="${t}">${e}</button>`).join(``)}
      </div>
      ${ls(t,n)}
      </div>
    </nav>
  `}function ls(e,t){if(!t)return`
      <div class="mobile-account-section">
        ${e?`<button class="btn btn-primary mobile-cta" type="button" data-action="mobile-nav" data-href="${e.href}">${e.label}</button>`:``}
        <button class="btn btn-secondary" type="button" data-action="mobile-nav" data-href="/login">${k(`login`)}</button>
      </div>
    `;let n=A.profile?.companyName||k(`noCompanyProfile`),r=A.user?.email||``;return`
    <div class="mobile-account-section">
      <div class="mobile-account-header">
        <span class="profile-avatar">${O(fs(n,r))}</span>
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
  `}function us(e,t){return e?t?null:{href:`/onboarding`,label:k(`createProfile`)}:{href:`/trial`,label:k(`getStarted`)}}function ds(){let e=A.profile?.companyName||k(`noCompanyProfile`),t=A.user?.email||``,n=fs(e,t);return`
    <div class="profile-menu">
      <button type="button" class="profile-pill" data-action="toggle-profile-menu" aria-haspopup="menu" aria-expanded="${A.profileMenuOpen?`true`:`false`}">
        <span class="profile-avatar">${O(n)}</span>
        <span class="profile-name">${O(e)}</span>
        <span class="profile-chevron" aria-hidden="true"></span>
      </button>

      ${A.profileMenuOpen&&!A.isMobileMenuOpen&&!pr()?`
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
  `}function fs(e,t){return(e&&![`No company profile`,k(`noCompanyProfile`)].includes(e)?e:t||`VR`).split(/[^a-zA-Z0-9áéíóúýþæöðÁÉÍÓÚÝÞÆÖÐ]+/).filter(Boolean).slice(0,2).map(e=>e[0]).join(``).toUpperCase()||`VR`}function ps(e,t){return Q(`
    <section class="empty-state">
      <h1>${O(e)}</h1>
      <p>${O(t)}</p>
      <button class="btn btn-primary" data-action="go" data-href="/onboarding">${O(k(`createProfile`))}</button>
      <button class="btn btn-secondary" data-action="load-demo">${O(k(`loadDemoCompany`))}</button>
    </section>
  `)}function ms(){return A.user?ps(A.language===`is`?`Þú ert þegar skráð(ur) inn`:`Already logged in`,A.language===`is`?`Opnaðu mælaborðið eða breyttu fyrirtækjaprófílnum.`:`Open your dashboard or edit your company profile.`):Q(st({t:k,escapeHtml:O,authForm:A.authForm,authSubmitting:A.authSubmitting,authMessage:A.authMessage,signupHref:A.pendingInviteToken?rr(`/signup`):`/trial`,signupLabel:A.pendingInviteToken?k(`createAccount`):k(`createFreeDemoProfile`),forgotPasswordHref:rr(`/forgot-password`)}))}function hs(){return A.user?ps(A.language===`is`?`Þú ert þegar skráð(ur) inn`:`Already logged in`,A.language===`is`?`Opnaðu mælaborðið eða breyttu fyrirtækjaprófílnum.`:`Open your dashboard or edit your company profile.`):Q(ct({t:k,escapeHtml:O,authForm:A.authForm,authSubmitting:A.authSubmitting,authMessage:A.authMessage}))}function gs(){return Q(lt({t:k,escapeHtml:O,authForm:A.authForm,authSubmitting:A.authSubmitting,authMessage:A.authMessage}))}function _s(){let e=g(A.route),t=e||(A.invitePreviewErrorToken===e?``:A.pendingInviteToken);return t&&t!==A.pendingInviteToken&&A.invitePreviewErrorToken!==t&&(A.pendingInviteToken=ae(t)),Q(rt({escapeHtml:O,invite:A.invitePreview,loading:A.invitePreviewLoading,error:A.invitePreviewError,debugInfo:A.invitePreviewDebug,showDebug:te(),user:A.user,accepting:A.inviteAccepting,signupHref:rr(`/signup`),loginHref:rr(`/login`),language:A.language}))}async function vs(){let e=g(A.route)||A.pendingInviteToken||b();if(!(!e||A.invitePreviewLoading)&&!(A.invitePreview?.token===e||A.invitePreviewErrorToken===e)){A.pendingInviteToken=ae(e),A.invitePreviewLoading=!0,A.invitePreviewError=null,await tr({preview_request_sent:!0}),Z();try{let t=await ce(e);if(await tr({...t.__debug||{},...t.diagnostics||{}}),t.status&&t.status!==`valid`){let e=Error(`Invite is not valid.`);throw e.details=t,e}A.invitePreview={...t,token:e},A.authForm.email=t.invited_email||t.email||A.authForm.email}catch(t){console.error(`Failed to preview company invite:`,t),t?.details?.diagnostics&&console.warn(`Invite preview diagnostics:`,t.details.diagnostics);let n={...t?.details?.__debug||{},...t?.details?.diagnostics||{}};A.invitePreview=null,await tr(n);let r=n.invalid_reason||t?.details?.status||t?.details?.code;nr(r)&&(oe(),A.pendingInviteToken=``),A.invitePreviewErrorToken=e,A.invitePreviewError=bs(r)}finally{A.invitePreviewLoading=!1,Z()}}}async function ys(){let e=g(A.route),t=b(),n=e||A.pendingInviteToken||t,r=x(A.route);if(n){if(!A.user){j(rr(`/login`));return}A.inviteAccepting=!0,A.invitePreviewError=null,await tr({accept_request_sent:!0,token_source:r}),Z();try{let e=await le(n);await tr({...e.__debug||{},...e.diagnostics||{},token_source:r}),oe(),A.pendingInviteToken=``,A.invitePreview=null,A.invitePreviewError=null,await Zi({overwriteDraft:!0}),j(`/dashboard`)}catch(e){console.error(`Failed to accept company invite:`,e);let t=e?.details?.invited_email||A.invitePreview?.invited_email||A.invitePreview?.email||``;await tr({...e?.details?.__debug||{},...e?.details?.diagnostics||{},token_source:r,user_email:A.user?.email||``,invited_email:t,accept_error_reason:e?.details?.code||e?.details?.diagnostics?.accept_error_reason||errorMessage(e)}),console.warn(`Invite accept diagnostics:`,A.invitePreviewDebug),A.invitePreviewError=xs(e,t)}finally{A.inviteAccepting=!1,Z()}}}function bs(e){let t=String(e||``).toLowerCase();return t===`expired`?A.language===`is`?`Aðgangsboðið er útrunnið.`:`This invite has expired.`:t===`revoked`?A.language===`is`?`Aðgangsboðið hefur verið afturkallað.`:`This invite has been revoked.`:t===`already_accepted`?A.language===`is`?`Aðgangsboðið hefur þegar verið samþykkt. Skráðu þig inn með rétta netfanginu.`:`This invite has already been accepted. Log in with the correct email address.`:t===`no_hash_match`||t===`invite_invalid`?A.language===`is`?`Aðgangsboðið fannst ekki.`:`The invite was not found.`:t===`query_error`?A.language===`is`?`Villa kom upp við að staðfesta aðgangsboðið. Reyndu aftur eða hafðu samband.`:`There was a problem validating the invite. Try again or contact support.`:A.language===`is`?`Aðgangsboðið fannst ekki, er útrunnið eða hefur verið afturkallað.`:`The invite was not found, has expired, or has been revoked.`}function xs(e,t=``){let n=String(e?.details?.code||``).toLowerCase(),r=String(e?.details?.diagnostics?.invalid_reason||e?.details?.diagnostics?.accept_error_reason||``).toLowerCase(),i=n||r;return i===`no_session`?A.language===`is`?`Bíð eftir innskráningu til að virkja aðganginn. Ef þú varst að staðfesta netfangið skaltu skrá þig inn og opna boðið aftur.`:`Waiting for login to activate the invite. If you just confirmed your email, log in and open the invite again.`:(i===`email_mismatch`||n===`email_mismatch`)&&t?A.language===`is`?`Þetta boð var sent á ${t}. Skráðu þig inn með því netfangi.`:`This invite was sent to ${t}. Log in with that email address.`:r===`expired`?A.language===`is`?`Aðgangsboðið er útrunnið.`:`This invite has expired.`:r===`revoked`?A.language===`is`?`Aðgangsboðið hefur verið afturkallað.`:`This invite has been revoked.`:n===`invite_already_accepted`||r===`already_accepted`?A.language===`is`?`Aðgangsboðið hefur þegar verið samþykkt.`:`This invite has already been accepted.`:H(e)}function Ss(){if(A.user){let e=hr();return setTimeout(()=>j(e),0),Q(`
      <section class="empty-state">
        <h1>${O(k(`alreadyLoggedInTitle`))}</h1>
        <p>${O(k(`alreadyLoggedInText`))}</p>
      </section>
    `)}return A.pendingInviteToken||g(A.route)?Q(ut({t:k,escapeHtml:O,authForm:A.authForm,authSubmitting:A.authSubmitting,authMessage:A.authMessage,loginHref:rr(`/login`),inviteEmail:A.invitePreview?.invited_email||A.invitePreview?.email||``,isInviteSignup:!!(A.pendingInviteToken&&(A.invitePreview?.invited_email||A.invitePreview?.email))})):Q(dt({t:k,escapeHtml:O,trialHref:`/trial`}))}function Cs(){if(!A.importLoading&&!A.importStatus)return``;if(A.importLoading)return`<section class="import-panel"><strong>Importing TED notices...</strong><p>Fetching recent TED notices and refreshing matches.</p></section>`;let e=A.importStatus||{},t=Array.isArray(e.errors)?e.errors:[],n=A.importedTedOpportunities||[];return`
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
              ${n.map(Ts).join(``)}
            </div>
          `:`<div class="empty-card">No imported TED opportunities were returned by the latest-results query.</div>`}
        `}
      `:``}
    </section>
  `}function ws(){if(!A.connectorImportLoading&&!A.connectorTestingSourceId&&!A.connectorImportStatus)return``;if(A.connectorImportLoading||A.connectorTestingSourceId)return`<section class="import-panel"><strong>Running automatic source imports...</strong><p>Fetching enabled source connectors in a limited batch. Refresh matches separately after imports finish.</p></section>`;let e=A.connectorImportStatus||{},t=Array.isArray(e.errors)?e.errors:[],n=Array.isArray(e.failedSources)?e.failedSources:[],r=Array.isArray(e.timedOutSources)?e.timedOutSources:[],i=t.length||n.length||r.length,a=Number.isFinite(Number(e.sources_processed))?`<p>${Number(e.sources_processed||0)} source${Number(e.sources_processed||0)===1?``:`s`} processed${Number(e.sources_remaining||0)?` · ${Number(e.sources_remaining||0)} remaining for next run`:``}.</p>`:``;return`
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
  `}function Ts(e){let t=e.url&&e.url!==`#`,n=A.adminUpdatingId===e.id,r=A.adminDeletingId===e.id;return`
    <div class="imported-opportunity-row">
      <div class="imported-opportunity-main">
        <h4>${O(e.title)}</h4>
        <span class="source-pill language-pill">Original language</span>
        <p>${O(cu(e))}</p>
      </div>
      <dl>
        <div>
          <dt>Country / location</dt>
          <dd>${O([e.countryCode,e.location].filter(Boolean).join(` / `)||`Unknown`)}</dd>
        </div>
        <div>
          <dt>Deadline</dt>
          <dd>${O(vn(e.deadline))}</dd>
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
  `}function Es(){return(A.importRuns||[])[0]||null}function Ds(e){let t=String(e||``).toLowerCase();return[`success`,`completed`,`complete`,`connected`].includes(t)?`is-success`:[`running`,`started`,`pending`,`planned`].includes(t)?`is-running`:[`error`,`failed`,`failure`].includes(t)?`is-error`:``}function Os(){let e=Es();return A.importRunsLoading&&!e?`
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
        <span class="status-pill ${Ds(e.status)}">${O(e.status||`unknown`)}</span>
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
      ${Ps(e)}
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
    `}function ks(){let e=window.VERKRADAR_SUPABASE_URL||`https://asojxjbsgqbfpbepojzh.supabase.co`,t=String(e).match(/^https:\/\/([^.]+)\.supabase\.co/i);return t?`https://supabase.com/dashboard/project/${t[1]}/functions/import-ted/logs`:``}function As(){let e=ks();return`
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
      ${Cs()}
      ${ws()}
    </section>
  `}function js(){let e=A.importRuns||[];return`
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
              ${e.map(Ms).join(``)}
            </tbody>
          </table>
        </div>
      `:`<div class="empty-card">No automation runs yet.</div>`}
    </section>
  `}function Ms(e){let t=Ps(e,{compact:!0});return`
    <tr>
      <td>${O(T(e.started_at||e.finished_at))}</td>
      <td>${O(e.run_type||`ted-import`)}</td>
      <td><span class="status-pill ${Ds(e.status)}">${O(e.status||`unknown`)}</span></td>
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
  `}function Ns(e){let t=e?.details;if(!t)return{};if(typeof t==`string`)try{return JSON.parse(t)||{}}catch{return{}}return typeof t==`object`?t:{}}function Ps(e,t={}){let n=Ns(e),r=n.skip_reasons&&typeof n.skip_reasons==`object`?n.skip_reasons:{},i=Array.isArray(n.skipped_samples)?n.skipped_samples:[],a=Array.isArray(n.per_source)?n.per_source:[],o=Object.entries(r).filter(([,e])=>Number(e)>0).sort((e,t)=>Number(t[1])-Number(e[1])).slice(0,5);return!o.length&&!i.length&&!a.length?``:`
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
            <span><strong>${Number(t)}</strong> ${O(Fs(e))}</span>
          `).join(``)}
        </div>
      `:``}
      ${i.length?`
        <div class="import-skip-samples">
          ${i.slice(0,10).map(e=>`
            <div>
              <strong>${O(e.source_name||e.source||`Unknown source`)}</strong>
              <span>${O(e.title||`Untitled item`)}</span>
              <em>${O(Fs(e.reason||`skipped`))}${e.matchedKeyword?`: ${O(e.matchedKeyword)}`:``}${e.final_quality_status?` · ${O(Oc(e.final_quality_status))}`:``}</em>
            </div>
          `).join(``)}
        </div>
      `:``}
    </div>
  `}function Fs(e){return{missing_title:`missing title`,missing_url:`missing URL`,duplicate_existing_opportunity:`duplicate existing opportunity`,no_include_keyword_match:`no include keyword match`,matched_exclude_keyword:`matched exclude keyword`,low_quality_needs_review:`low quality needs review`,unsupported_connector:`unsupported connector`,parse_failed:`parse failed`,fetch_failed:`fetch failed`}[e]||String(e||`skipped`).replaceAll(`_`,` `)}function Is(){let e=A.importedTedOpportunities||[];return`
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
          ${e.map(Ts).join(``)}
        </div>
      `:`<div class="empty-card">No TED opportunities loaded yet.</div>`}
    </section>
  `}function Ls(){let e=A.adminReports||[];return`
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
              ${e.map(Gs).join(``)}
            </tbody>
          </table>
        </div>
      `:`<div class="empty-card">No generated reports yet.</div>`}
      ${A.selectedAdminReportId?Ks():``}
    </section>
  `}function Rs(e){return{eu_ted:`EU TED`,ted:`EU TED`,api:`EU TED`,utbodsvefur:`Útboðsvefur`,municipal_website:`Municipal websites`,public_institution_page:`Public institution pages`,private_manual:`Private/manual leads`,manual:`Private/manual leads`,tender_portal:`Tender portals`}[e]||e||`Unknown`}function zs(e){return{ted_api:`TED API`,rss_feed:`RSS feed`,wordpress_rest:`WordPress REST`,official_api:`Official API`,page_monitor_allowed:`Allowed page monitor`,manual_fallback:`Manual fallback`,planned:`Planned`,permission_required:`Permission required`}[e]||e||`Planned`}function Bs(e=[]){return e.reduce((e,t)=>{let n=t.raw_payload&&typeof t.raw_payload==`object`?t.raw_payload:{},r=I(n.quality_status||n.qualityStatus,t);return e.active+=1,r===`confirmed_tender`?e.confirmed+=1:r===`early_signal`?e.early+=1:e.needsReview+=1,e},{active:0,confirmed:0,early:0,needsReview:0})}function Vs(e){let t=e.source_status||{},n=e.source_connectors||{},r=String(n.status||t.status||``).toLowerCase(),i=String(n.connector_type||``).toLowerCase();return r.includes(`error`)?{label:`Error`,className:`is-error`,tone:`error`}:r===`permission_required`||i===`permission_required`?{label:`Permission required`,className:`is-permission`,tone:`planned`}:n.enabled&&[`connected`,`success`,`completed`,`complete`].includes(r)||n.enabled&&[`rss_feed`,`wordpress_rest`,`ted_api`].includes(i)?{label:`Connected`,className:`is-success`,tone:`connected`}:r===`planned`||i===`planned`?{label:`Planned`,className:`is-planned`,tone:`planned`}:{label:`Disabled`,className:`is-disabled`,tone:`disabled`}}function Hs(){let e=A.sourceCoverage||[];return`
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
              ${e.map(Us).join(``)}
            </tbody>
          </table>
        </div>
      `:`<div class="empty-card">No sources configured yet.</div>`}
    </section>
  `}function Us(e){let t=e.source_status||{},n=e.source_connectors||{},r=Vs(e),i=n.enabled&&[`rss_feed`,`wordpress_rest`].includes(n.connector_type),a=A.connectorTestingSourceId===e.id,o=e.opportunityStats||{active:Number(t.active_opportunities_count||0),confirmed:0,early:0,needsReview:0},s=e.latestOpportunities||[],c=A.expandedSourceId===e.id,l=n.last_error||t.last_error||``;return`
    <tr class="${r.tone===`connected`?`source-row-connected`:`source-row-muted`}">
      <td>
        <strong>${O(e.name||`Unknown source`)}</strong>
        ${n.endpoint_url||e.base_url?`<br><a href="${O(n.endpoint_url||e.base_url)}" target="_blank" rel="noreferrer">${O(n.endpoint_url||e.base_url)}</a>`:``}
      </td>
      <td>${O(Rs(e.source_type))}</td>
      <td>
        <strong>${O(zs(n.connector_type))}</strong>
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
    ${c?Ws(e):``}
  `}function Ws(e){let t=e.latestOpportunities||[];return`
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
                      <span>${O(su(`buyer`,jn(t.buyer,e.name)))} · ${O(Bo(t.deadline))}</span>
                    </div>
                    <span class="quality-badge ${O(r)}">${O(Oc(r))}</span>
                    ${t.url?`<a class="btn btn-ghost btn-small" href="${O(t.url)}" target="_blank" rel="noreferrer">Open</a>`:``}
                  </div>
                `}).join(``)}
            </div>
          `:`<div class="empty-card">No active items for this source.</div>`}
        </div>
      </td>
    </tr>
  `}function Gs(e){let t=e.companies?.company_name||`Unknown company`,n=Array.isArray(e.report_items)?e.report_items.length:0;return`
    <tr>
      <td>${O(El(e,t))}</td>
      <td>${O(t)}</td>
      <td>${O(T(e.created_at))}</td>
      <td>${O(`${vn(e.period_start)} - ${vn(e.period_end)}`)}</td>
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
  `}function Ks(){let e=(A.adminReports||[]).find(e=>e.id===A.selectedAdminReportId),t=A.selectedAdminReport?.id===A.selectedAdminReportId?A.selectedAdminReport:e;if(!t&&!A.selectedAdminReportLoading&&!A.selectedAdminReportError)return``;if(!t)return`
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
    `;let n=t.companies?.company_name||`Unknown company`,r=Array.isArray(t.report_items)?t.report_items.length:0,i=El(t,n);return`
    <div class="modal-backdrop">
      <div class="modal admin-report-modal" role="dialog" aria-modal="true">
        <div class="modal-header">
          <div>
            <span class="status-pill is-success">${O(bl(t.status))}</span>
            <h2>${O(i)}</h2>
            <p>${O(n)} · ${O(Pl(t.period_start,t.period_end))} · ${O(T(t.created_at))}</p>
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
          ${A.selectedAdminReportLoading?``:qs(t,r,n)}

          ${!A.selectedAdminReportLoading&&r?Sl(t,{companyName:n},{id:`admin-report-preview`,closeButton:!1,includeTextArea:!1}):A.selectedAdminReportLoading?``:`
            <div class="empty-card">${O(A.language===`is`?`Engin virk tækifæri eru í þessu yfirliti.`:`No active eligible opportunities in this report.`)}</div>
          `}

          ${!A.selectedAdminReportLoading&&r?Js(t):``}
        </div>
      </div>
    </div>
  `}function qs(e,t,n){let r=e.status===`generated_all_current`?`all_current`:e.status===`generated_new_only`?`new_only`:e.status||`draft`;return`
    <div class="admin-report-meta-strip">
      <span><strong>${O(C(`company`,A.language))}:</strong> ${O(n||`Unknown company`)}</span>
      <span><strong>${O(C(`period`,A.language))}:</strong> ${O(Pl(e.period_start,e.period_end))}</span>
      <span><strong>${O(C(`generatedAt`,A.language))}:</strong> ${O(T(e.created_at))}</span>
      <span><strong>${O(C(`mode`,A.language))}:</strong> ${O(C(r===`all_current`?`currentActive`:`newOpportunities`,A.language))}</span>
      <span><strong>${O(C(`items`,A.language))}:</strong> ${Number(t||0)}</span>
    </div>
  `}function Js(e){let t=(Array.isArray(e.report_items)?[...e.report_items]:[]).sort((e,t)=>Number(e.sort_order||0)-Number(t.sort_order||0));return`
    <section class="admin-report-items">
      <h3>${O(A.language===`is`?`Atriði í yfirliti`:`Report items`)}</h3>
      <div class="admin-report-item-list">
        ${t.map(e=>Ys(e)).join(``)}
      </div>
    </section>
  `}function Ys(e){let t=e.opportunities?Qr(e.opportunities):null;if(!t)return`<article class="admin-report-item"><p>${O(A.language===`is`?`Gögn um tækifæri eru ekki lengur aðgengileg.`:`Opportunity data is no longer available.`)}</p></article>`;let n=wn(t.url),r=Uo(t),i=nn(Array.isArray(e.match_reasons)?e.match_reasons:[],A.language);return`
    <article class="admin-report-item">
      <div class="opportunity-badges">
        <span class="source-pill source-badge">${O(tn({matchScore:Number(e.match_score||0)},A.language))}</span>
        <span class="${qo(fo(Number(e.match_score||0)))}">${O(`${$t({matchScore:Number(e.match_score||0)},A.language)} ${Number(e.match_score||0)}`)}</span>
      </div>
      <h4>${O(t.title)}</h4>
      <p><strong>${O(A.language===`is`?`Staða`:`Status`)}:</strong> ${O(tn({matchScore:Number(e.match_score||0)},A.language))}</p>
      <p>${O(Qt(A.language))}</p>
      <div class="admin-report-meta-grid">
        <span><strong>${O(k(`buyer`))}</strong>${O(cu(t))}</span>
        <span><strong>${O(k(`source`))}</strong>${O(su(`source`,t.source))}</span>
        <span><strong>${O(k(`area`))}</strong>${O(lu(t))}</span>
        <span><strong>${O(k(`deadline`))}</strong>${O(r.label)}</span>
        <span><strong>${O(k(`estimatedValue`))}</strong>${O(t.estimatedValue?X(t.estimatedValue):k(`notListed`))}</span>
        <span><strong>${O(C(`sentStatus`,A.language))}</strong>${O(e.sent_at?`${C(`sentOn`,A.language)} ${T(e.sent_at)}`:C(`notSent`,A.language))}</span>
      </div>
      ${i.length?`<div><strong>${O(C(`reasons`,A.language))}</strong><ul>${i.map(e=>`<li>${O(e)}</li>`).join(``)}</ul></div>`:``}
      <p>${O(t.description||``)}</p>
      ${n?`<a class="btn btn-secondary btn-small" href="${O(n)}" target="_blank" rel="noreferrer">${O(C(`openSource`,A.language))}</a>`:``}
    </article>
  `}async function Xs(e){let t=A.selectedAdminReport?.id===e?A.selectedAdminReport:(A.adminReports||[]).find(t=>t.id===e);if(!t){U(`Report not found`,`error`);return}let n=t.companies?.company_name||`Company`,r=Dl(t),i=an({companyName:n,language:A.language,matches:r.map(e=>({...e,buyer:cu(e),deadline:Vo(e),matchReasons:nn(e.matchReasons,A.language)}))});try{await navigator.clipboard.writeText(i),U(`Report email copied`,`success`)}catch(e){console.error(`Failed to copy admin report:`,e),U(`Could not copy report email`,`error`)}}async function Zs(e){let t=A.selectedAdminReport?.id===e?A.selectedAdminReport:(A.adminReports||[]).find(t=>t.id===e);if(!t?.company_id){U(`Report not found`,`error`);return}A.adminReportDeliveryActions[e]=`sent`,Z();try{let n=await Jr(t.company_id,`mark_report_sent`,{reportId:e});await Er(e),U(`Marked ${Number(n.marked_sent||0)} report item${Number(n.marked_sent||0)===1?``:`s`} as sent`,`success`)}catch(e){console.error(`Failed to mark report as sent:`,e),U(`Could not mark report as sent. ${H(e)}`,`error`)}finally{delete A.adminReportDeliveryActions[e],Z()}}function Qs(){let e=A.adminOpportunityFilters;return(A.opportunities||[]).filter(t=>{let n=Dc(t);if(e.tedOnly&&!n||e.manualOnly&&n||!e.showDemoTest&&oi(t)||e.source!==`all`&&t.source!==e.source||e.status!==`all`&&t.status!==e.status)return!1;let r=Si(t)||t.countryCode||`Unknown`;if(e.country!==`all`&&r!==e.country)return!1;let i=D(e.search);return!(i&&!D(`${t.title} ${t.buyer} ${t.externalId} ${t.location}`).includes(i))})}function $s(e,t){return Array.from(new Set(e.map(t).filter(Boolean))).sort((e,t)=>String(e).localeCompare(String(t)))}function ec(e){let t=A.adminOpportunityFilters,n=$s(A.opportunities||[],e=>e.source||`Unknown`),r=$s(A.opportunities||[],e=>e.status||`Unknown`),i=$s(A.opportunities||[],e=>Si(e)||e.countryCode||`Unknown`),a=A.adminCompanies||[];return`
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
  `}function tc(e){return!!(e?.deadline||e?.deadlineAt||e?.rawPayload?.deadline_at||e?.rawPayload?.deadlineAt)}function nc(){let e=A.adminOpportunityFilters?.missingDeadlineSource||`all`;return(A.opportunities||[]).filter(e=>!tc(e)).filter(e=>!oi(e)).filter(t=>e===`all`||t.source===e).sort((e,t)=>String(e.source||``).localeCompare(String(t.source||``))||String(e.title||``).localeCompare(String(t.title||``)))}function rc(){let e=[`Ríkiskaup / island.is procurement`,`Vegagerðin`,`Akranes útboð`,`Garðabær Municipality`],t=$s((A.opportunities||[]).filter(e=>!tc(e)),e=>e.source||`Unknown`);return yn([...e,...t])}function ic(e){let t=e?.rawPayload||{},n=String(e?.url||t.source_url||t.link||``).trim();if(!n)return{label:`No source URL`,isSafe:!1};let r;try{r=new URL(n)}catch{return{label:`Invalid URL`,isSafe:!1}}if(![`http:`,`https:`].includes(r.protocol))return{label:`Unsupported protocol: ${r.protocol}`,isSafe:!1};let i=r.hostname.replace(/^www\./i,``).toLowerCase(),a=[`utbodsvefur.is`,`vegagerdin.is`,`akranes.is`,`gardabaer.is`,`borgarbyggd.is`,`arborg.is`,`faxafloahafnir.is`,`reykjavik.is`,`hafnarfjordur.is`,`reykjanesbaer.is`,`mulathing.is`,`akureyri.is`].some(e=>i===e||i.endsWith(`.${e}`));return{label:a?`Yes (${i})`:`Unknown host (${i})`,isSafe:a}}function ac(e){let t=e?.rawPayload||{},n=t.deadline_debug&&typeof t.deadline_debug==`object`?t.deadline_debug:{},r=[t.deadline_debug_reason,t.deadline_reenrichment_error,n.source?`debug source: ${n.source}`:``,n.extractedText?`extracted: ${n.extractedText}`:``,n.parserVersion?`parser: ${n.parserVersion}`:``,t.stale_reason?`stale: ${t.stale_reason}`:``].filter(Boolean);return r.length?r.join(` · `):`Still missing after import/re-enrichment, or no debug reason stored yet.`}function oc(){let e=nc(),t=sc(e),n=e.reduce((e,t)=>{let n=t.source||`Unknown`;return e[n]||(e[n]=[]),e[n].push(t),e},{}),r=Object.keys(n).sort((e,t)=>e.localeCompare(t)),i=A.adminOpportunityFilters?.missingDeadlineSource||`all`,a=rc();return`
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
      ${r.length?r.map(e=>cc(e,n[e])).join(``):`<div class="empty-card">No missing-deadline opportunities for this filter.</div>`}
    </section>
  `}function sc(e){return(e||[]).reduce((e,t)=>{let n=t?.rawPayload||{},r=String(n.alert_eligible??``).toLowerCase(),i=String(n.quality_status||``).toLowerCase();return e.total+=1,r===`false`?e.alertFalse+=1:e.alertNotFalse+=1,i===`confirmed_tender`&&(e.confirmedTender+=1),i===`needs_review`&&(e.needsReview+=1),e},{total:0,alertFalse:0,alertNotFalse:0,confirmedTender:0,needsReview:0})}function cc(e,t){return`
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
            ${t.map(lc).join(``)}
          </tbody>
        </table>
      </div>
    </div>
  `}function lc(e){let t=ic(e),n=wn(e.url||e.rawPayload?.source_url||``),r=e.rawPayload?.safety_status||e.rawPayload?.quality_status||Ac(e),i=e.rawPayload?.alert_eligible,a=i===!0?`true`:`false`,o=String(i??``).toLowerCase()===`false`?``:`<br><span class="status-pill is-warning">Missing deadline alert flag needs fix</span>`,s=ac(e);return`
    <tr>
      <td><code>${O(String(e.id||``))}</code><br><span>${O(e.externalId||`No external ID`)}</span></td>
      <td><strong>${O(e.title||`Untitled`)}</strong><br><span>${O(e.source||`Unknown source`)}</span></td>
      <td>${n?`<a href="${O(n)}" target="_blank" rel="noreferrer" title="${O(n)}">${O(n)}</a>`:`No source URL`}</td>
      <td>${e.publishedDate?O(T(e.publishedDate)):`Not listed`}</td>
      <td>${O(r||`unknown`)}<br><span>alert_eligible=${O(a)}</span>${o}</td>
      <td><span class="status-pill ${t.isSafe?`is-success`:`is-running`}">${O(t.label)}</span></td>
      <td title="${O(s)}">${O(s)}</td>
    </tr>
  `}function uc(){return Q(Dt({t:k,escapeHtml:O,language:A.language,trialHref:gr()}))}function dc(){return A.user?(W(),Q(`
    <section class="page-head pricing-head">
      <p class="eyebrow">${O(k(`onboarding`))}</p>
      <h1>${O(k(`onboardingTitle`))}</h1>
      <p>${O(k(`onboardingText`))}</p>
    </section>

    ${fc()}
  `)):V()}function fc(){return W(),Rt({t:k,escapeHtml:O,capitalize:Sn,arrayFieldText:xa,formatCustomerLocation:du,getFilterOptions:pc,getProfileSuggestions:wa,renderCustomDropdown:gc,renderSuggestionChips:Ea,profileDraft:A.profileDraft||Wn(),hasProfile:!!A.profile,isSavingProfile:A.isSavingProfile,profileSaved:A.profileSaved,profileSaveMessage:A.profileSaveMessage,profileSaveError:A.profileSaveError})}function pc(e){return e===`industry`?[`Construction`,`Electrical`,`Cleaning`,`IT / Web / Software`,`Architecture / Engineering`,`Consulting`,`Transport`,`Equipment / Machinery`,`Landscaping`,`Security`,`Other`].map(e=>({value:e,label:e})):e===`label`?[{value:`strong`,label:A.language===`is`?`Aðeins sterkar`:`Strong only`},{value:`recommended`,label:A.language===`is`?`Mælt með`:`Recommended`},{value:`all`,label:A.language===`is`?`Allar samsvaranir`:`All matches`},{value:`all_opportunities`,label:A.language===`is`?`Öll tækifæri`:`All opportunities`},{value:`needs_review`,label:k(`needsReview`)},{value:`possible`,label:A.language===`is`?`Mögulegar samsvaranir`:`Possible matches`},{value:`Good match`,label:k(`goodMatch`)},{value:`Weak match`,label:k(`weakMatch`)}]:e===`category`?[{value:`all`,label:A.language===`is`?`Allir flokkar`:`All categories`},...Wo().map(e=>({value:e,label:e}))]:e===`location`?[{value:`all`,label:A.language===`is`?`Öll svæði`:`All locations`},...Go().map(e=>({value:e,label:du(e)}))]:e===`type`?[{value:`all`,label:A.language===`is`?`Allar tegundir`:`All types`},...Ko().map(e=>({value:e,label:Sn(e.replace(`-`,` `))}))]:[]}function mc(e){let t=pc(e),n=e===`industry`?A.profileDraft?.industry||A.profile?.industry||``:A.filters[e],r=t.findIndex(e=>e.value===n);return Math.max(0,r)}function hc(e){return gc({key:e,value:A.filters[e],options:pc(e)})}function gc({key:e,value:t,options:n,profileField:r=``}){let i=A.dropdown.openKey===e,a=t,o=Math.max(0,n.findIndex(e=>e.value===a)),s=i?A.dropdown.focusedIndex:o,c=`filter-${e}-trigger`,l=`filter-${e}-list`,u=n.find(e=>e.value===a)?.label||(e===`industry`?k(`selectIndustry`):n[0]?.label)||``;return`
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
  `}function _c(){A.dropdown.openKey=null,A.dropdown.focusedIndex=0,Z()}function vc(){requestAnimationFrame(()=>{document.querySelector(`.custom-select-option.is-focused`)?.focus()})}function yc(e){requestAnimationFrame(()=>{document.querySelector(`[data-action="toggle-dropdown"][data-key="${e}"]`)?.focus()})}function bc(){if(!A.user)return V();if(!A.profile)return ps(k(`setupCompanyFirst`),k(`dashboardNeedsProfile`));let e=yo(),t=mo(),n=bo(t),r=ho(),i=n.filter(e=>e.matchScore>=85).length,a=n.filter(e=>w(e.deadline)<=14&&w(e.deadline)>=0).length,o=A.saved.length,s=n.filter(e=>e.matchScore>=65).reduce((e,t)=>e+(t.estimatedValue||0),0),c=n.filter(So).length,l=Do({visibleCount:e.length,storedMatchCount:t.length,filteredStoredCount:n.length,availableCount:r.length,recommendedCount:c,strongCount:i,companyName:A.profile.companyName}),u=A.lastMatchedAt?k(`matchesLastRefreshed`,{time:T(A.lastMatchedAt)}):k(`matchesAutoRefresh`);return Q(St({profile:A.profile,matches:e,stats:{strong:i,closingSoon:a,savedCount:o,totalValue:X(s)},filters:A.filters,filterSummary:l,matchStatus:A.matchStatus,opportunityLoadError:A.opportunityLoadError,isAdmin:A.isAdmin,matchingLoading:A.matchingLoading,labels:{dashboard:k(`dashboard`),welcomeCompany:k(`welcomeCompany`,{company:A.profile.companyName}),dashboardIntro:k(`dashboardIntro`,{refresh:u}),refreshing:k(`refreshing`),refreshMatches:k(`refreshMatches`),viewWeeklyReport:k(`viewWeeklyReport`),strongMatches:k(`strongMatches`),closingSoon:k(`closingSoon`),savedLabel:k(`savedLabel`),totalPotentialValue:k(`totalPotentialValue`),searchOpportunities:k(`searchOpportunities`),savedOnly:k(`savedOnly`)},renderFilterDropdown:hc,renderOpportunityCard:Ec,renderEmptyState:()=>Tc(A.profile,A.filters.label,{availableCount:r.length,storedMatchCount:t.length,filteredStoredCount:n.length,recommendedCount:c,strongCount:i}),escapeHtml:O}))}function xc(e){let t=[],n=Array.isArray(e?.locations)?e.locations:[],r=Array.isArray(e?.services)?e.services:[],i=Array.isArray(e?.includeKeywords)?e.includeKeywords:[],a=Array.isArray(e?.excludeKeywords)?e.excludeKeywords:[],o=n.some(e=>D(e)===`all iceland`),s=a.some(e=>{let t=D(e);return t.includes(`reykjavik`)||t.includes(`capital area`)});return o||t.push(A.language===`is`?`Bætið við Allt landið til að ná landsdekkandi útboðum og rammasamningum.`:`Add All Iceland to catch national tenders and framework agreements.`),e?.nationalProjects||t.push(A.language===`is`?`Kveikið á landsdekkandi verkefnum svo slík tækifæri birtist sem mögulegar samsvaranir.`:`Enable national projects so All Iceland opportunities appear as possible matches.`),r.length<5&&t.push(A.language===`is`?`Bætið við nákvæmari þjónustu svo VerkRadar þekki betur útboð sem passa við ykkar vinnu.`:`Add more specific services so VerkRadar can recognize notices that fit your work.`),s&&t.push(A.language===`is`?`Yfirfarið útilokunarorð fyrir Reykjavík eða höfuðborgarsvæðið. Þau geta falið útboð sem fyrirtæki utan svæðisins geta samt boðið í.`:`Review exclude keywords for Reykjavík or Capital Area. They may hide tenders that companies outside Reykjavík can still bid on.`),i.length<4&&t.push(A.language===`is`?`Bætið við fleiri leitarorðum, sérstaklega íslenskum hugtökum sem kaupendur nota í útboðum.`:`Add more include keywords, including Icelandic terms buyers may use in notices.`),t.length||t.push(A.language===`is`?`Yfirfarið þjónustu, svæði og leitarorð svo þau lýsi verkefnunum sem þið viljið raunverulega bjóða í.`:`Review services, locations and keywords to make sure they describe the work you actually want to bid on.`),t}function Sc(e,t={}){return A.language===`is`?e===`all`?{eyebrow:`Engar samsvaranir`,title:`Engin tækifæri fundust fyrir þennan prófíl enn.`,body:`Víkkið þjónustu, svæði eða leitarorð til að finna fleiri tækifæri.`}:e===`all_opportunities`?{eyebrow:`Engin tækifæri`,title:`Engin tiltæk tækifæri enn.`,body:`Flytjið inn fleiri heimildir eða skoðið heimildayfirlit í Admin.`}:e===`needs_review`?{eyebrow:`Ekkert þarf staðfestingu`,title:`Engin tækifæri þarfnast staðfestingar núna.`,body:`Tækifæri úr breiðum heimildum sem þarf að yfirfara birtast hér.`}:e===`strong`?{eyebrow:`Engar sterkar samsvaranir`,title:`Engar sterkar samsvaranir enn.`,body:`Þið gætuð samt átt gagnlegar mögulegar samsvaranir. Prófið Mælt með eða Allar samsvaranir.`}:e===`possible`||e===`Possible match`||e===`Weak match`?{eyebrow:`Engar mögulegar samsvaranir`,title:`Engar mögulegar samsvaranir enn.`,body:`Prófið að víkka þjónustu, svæði eða leitarorð til að finna óvissari tækifæri.`}:{eyebrow:`Engar ráðlagðar samsvaranir`,title:Cc(t),body:wc(t)}:e===`all`?{eyebrow:`No matches`,title:`No opportunities found for this profile yet.`,body:`Broaden your services, locations or keywords to find more opportunities.`}:e===`all_opportunities`?{eyebrow:`No opportunities`,title:`No available opportunities yet.`,body:`Import more sources or check Admin source coverage.`}:e===`needs_review`?{eyebrow:`No needs-review items`,title:`No needs-review opportunities right now.`,body:`Broad-feed opportunities that need manual verification will appear here.`}:e===`strong`?{eyebrow:`No strong matches`,title:`No strong matches yet.`,body:`You may still have useful possible matches. Switch to Recommended or All matches to review them.`}:e===`possible`||e===`Possible match`||e===`Weak match`?{eyebrow:`No possible matches`,title:`No possible matches yet.`,body:`Try broadening your services, locations or keywords to find lower-confidence opportunities.`}:{eyebrow:`No recommended matches`,title:Cc(t),body:wc(t)}}function Cc(e={}){let t=e.companyName||(A.language===`is`?`þennan prófíl`:`this profile`);return Number(e.strongCount||0)>0?A.language===`is`?`${e.strongCount} sterkar samsvaranir eru faldar af síum.`:`${e.strongCount} strong ${Number(e.strongCount)===1?`match is`:`matches are`} hidden by filters.`:A.language===`is`?`Engar ráðlagðar samsvaranir fyrir ${t} enn.`:`No recommended matches for ${t} yet.`}function wc(e={}){let t=Number(e.strongCount||0),n=Number(e.filteredStoredCount||0),r=Number(e.availableCount||0);return t>0?A.language===`is`?`Hreinsið leit/flokka/svæðissíur eða slökkvið á Aðeins vistað til að sjá sterku samsvaranirnar.`:`Clear search/category/location filters or turn off Saved only to see the strong matches.`:n>0?A.language===`is`?`${n} tækifæri eru til, en falin af gæðasíum. Notið Allar samsvaranir eða Þarfnast staðfestingar til að skoða þau.`:`${n} ${n===1?`opportunity is`:`opportunities are`} available, but hidden from Recommended by quality checks. Use All matches or Needs review to inspect them.`:A.language===`is`?`${r} tækifæri eru til í kerfinu, en ekkert passar nógu sterkt við þennan prófíl.`:`${r} opportunities are available in the system, but none match this profile strongly enough.`}function Tc(e,t=A.filters.label,n={}){let r=xc(e);return xt({copy:Sc(t,{...n,companyName:e?.companyName}),suggestions:r,labels:{improveProfile:k(`improveProfile`),includeNationalOpportunities:k(`includeNationalOpportunities`),showAllStoredMatches:k(`showAllStoredMatches`),inspectAllOpportunities:k(`inspectAllOpportunities`)},escapeHtml:O})}function Ec(e){return Ct({opp:e,saved:A.saved.includes(e.id),deadline:Uo(e),sourceBadgeHtml:`<span class="source-pill source-badge">${O(e.source)}</span>`,qualityBadgeHtml:jc(e),safetyBadgeHtml:Mc(e),extractedBadgeHtml:Ic(e),originalLanguageBadgeHtml:Dc(e)?`<span class="source-pill source-badge muted-badge">${O(k(`originalLanguage`))}</span>`:``,matchBadgeClass:qo(e.matchLabel),matchLabel:ou(e.matchLabel),buyer:cu(e),location:lu(e),value:X(e.estimatedValue),reasons:e.matchReasons.slice(0,3).map(fu),labels:{details:k(`details`),saved:k(`saved`),save:k(`save`),ignore:k(`ignore`)},escapeHtml:O})}function Dc(e){return/ted|tenders electronic daily/i.test(String(e.source||``))}function Oc(e){let t=I(e);return{confirmed_tender:`Confirmed tender`,early_signal:`Early signal`,needs_review:`Needs review`}[t]||Sn(t.replace(/_/g,` `))}function kc(e){return{confirmed_tender:`Confirmed tender`,early_opportunity:`Early opportunity`,market_signal:`Market signal`,news_context:`News context`,not_opportunity:`Not an opportunity`}[si(e)||e]||Sn(String(e||`market_signal`).replace(/_/g,` `))}function Ac(e){let t=L(e);return t===`news_context`||t===`not_opportunity`||t===`market_signal`?kc(t):R(e)?Lc(ci(e)):Oc(I(e.qualityStatus,e))}function jc(e){return`<span class="source-pill source-badge quality-badge ${O(L(e)||I(e.qualityStatus,e))}">${O(au(Ac(e)))}</span>`}function Mc(e){if(!e||!e.safetyStatus)return``;let t=_o(e);return`<span class="source-pill source-badge safety-badge ${O(t)}">${O(Nc(t))}</span>`}function Nc(e){let t=String(e||``).toLowerCase();return(A.language===`is`?{auto_approved:`Sjálfkrafa samþykkt`,needs_review:`Þarfnast yfirferðar`,hidden:`Falið`}:{auto_approved:`Auto-approved`,needs_review:`Needs review`,hidden:`Hidden`})[t]||Sn(t.replace(/_/g,` `))}function Pc(e){return e?A.language===`is`?`Hæft í tilkynningu`:`Alert eligible`:A.language===`is`?`Ekki hæft í tilkynningu`:`Not alert eligible`}function Fc(e){let t=String(e||``);return A.language===`is`?{"Valid future deadline found":`Gildur framtíðarskilafrestur fannst`,"Recent high-intent procurement signal":`Nýlegt merki frá sterkri útboðsheimild`,"Strong service/work-type fit":`Sterk samsvörun við þjónustu eða verkflokk`,"No reliable deadline was found":`Áreiðanlegur skilafrestur fannst ekki`,"Buyer is missing or generic":`Kaupandi vantar eða er of almennur`,"Match depends on broad or low-confidence terms":`Samsvörun byggir á breiðum eða óvissum orðum`,"Possible service mismatch for this company profile":`Mögulegt ósamræmi við þjónustu fyrirtækisins`,"Mentions design, consulting, supervision, or project management terms":`Inniheldur orð tengd hönnun, ráðgjöf, eftirliti eða verkefnastjórnun`,"Tender appears already awarded or already tendered":`Útboð virðist þegar auglýst eða útboði lokið`,"Stale or expired opportunity signal":`Gamalt eða útrunnið tækifæri`,"Current opportunity is plausible but needs review before customer alerts":`Tækifærið gæti átt við en þarf yfirferð áður en það fer í tilkynningu`,"Admin override includes this opportunity in customer reports":`Admin hefur samþykkt birtingu í viðskiptavinayfirlitum`,"Excluded by customer eligibility, duplicate, stale, hidden, demo, or expired filters":`Falið vegna reglna um birtingu, afrit, aldur, prófunargögn eða útrunnið tækifæri`}[t]||$(t):t}function Ic(e){if(e?.rawPayload?.extraction_method!==`vegagerdin_article_project_parser`)return``;let t=e.rawPayload?.region?` · ${e.rawPayload.region}`:``;return`<span class="source-pill source-badge muted-badge">${O(k(`extractedProject`))}${O(t)}</span>`}function Lc(e){return{tender_awarded:k(`tenderAwarded`),awarded:k(`tenderAwarded`),already_tendered:k(`tenderAlreadyAnnounced`),announced:k(`tenderAlreadyAnnounced`),upcoming_tender:k(`upcomingTender`),project_signal:k(`projectSignal`),open_or_published:k(`tenderAlreadyAnnounced`),planned_tender:k(`upcomingTender`),unclear:k(`projectSignal`)}[String(e||``)]||Sn(String(e||``).replace(/_/g,` `))}function Rc(e){let t=L(e);return t===`news_context`||t===`not_opportunity`?`<div class="note-panel quality-warning">${O(A.language===`is`?`Þetta lítur út eins og frétta- eða umferðarefni, ekki tækifæri fyrir viðskiptavin.`:`This looks like news or traffic context, not a customer-facing opportunity.`)}</div>`:I(e.qualityStatus,e)===`needs_review`?R(e)?`<div class="note-panel quality-warning">${O(A.language===`is`?`Útdregin verkefnavísbending — staðfestið útboðstímasetningu í heimildargrein.`:`Extracted project signal — verify tender timing in the source article.`)}</div>`:`<div class="note-panel quality-warning">${O(A.language===`is`?`Innflutt úr breiðum straumi — staðfestið á upprunasíðu.`:`Imported from broad feed — verify source page.`)}</div>`:``}function zc(e){let t=A.saved.includes(e.id),n=Uo(e),r=Array.isArray(e.requirements)?e.requirements:[],i=Array.isArray(e.matchReasons)?e.matchReasons:[],a=Array.isArray(e.risks)?e.risks:[],o=Array.isArray(e.nextSteps)?e.nextSteps:[],s=[R(e)?`<p><strong>${O(k(`extraction`))}:</strong> ${O(A.language===`is`?`Útdregið úr grein Vegagerðarinnar`:`Extracted from Vegagerðin article`)}</p>`:``,e.rawPayload?.parent_article_title?`<p><strong>${O(k(`sourceArticle`))}:</strong> ${O(e.rawPayload.parent_article_title)}</p>`:``,e.rawPayload?.parent_url?`<p><strong>${O(k(`parentArticle`))}:</strong> <a href="${O(e.rawPayload.parent_url)}" target="_blank" rel="noreferrer">${O(k(`openSourceArticle`))}</a></p>`:``,e.rawPayload?.region?`<p><strong>${O(k(`extractedRegion`))}:</strong> ${O(e.rawPayload.region)}</p>`:``,e.rawPayload?.project_number?`<p><strong>${O(k(`projectNumber`))}:</strong> ${O(e.rawPayload.project_number)}</p>`:``,R(e)?`<p><strong>${O(k(`tenderState`))}:</strong> ${O(Lc(ci(e)))}</p>`:``].join(``);return wt({opp:e,saved:t,deadline:n,requirements:r,matchReasons:i.length?i.map(fu):[],risks:a.length?a.map($):[k(`noMajorRisks`)],safetyReasons:[...Array.isArray(e.safetyReasons)?e.safetyReasons:[],...a.length?a.map($):[k(`noMajorRisks`)]].map(Fc),nextSteps:o.map(pu),matchBadgeClass:qo(e.matchLabel),matchLabel:ou(e.matchLabel),qualityBadgeHtml:jc(e),safetyBadgeHtml:Mc(e),extractedBadgeHtml:Ic(e),qualityWarningHtml:Rc(e),buyerSummary:uu(`buyer`,e.buyer),location:lu(e),value:e.estimatedValue?X(e.estimatedValue):k(`notListed`),sourceUrl:e.url,extractedDetails:s,qualityLabel:au(Ac(e)),safetyStatusLine:e.safetyStatus?`<p><strong>${O(A.language===`is`?`Öryggisflokkun`:`Safety status`)}:</strong> ${O(Nc(e.safetyStatus))} · ${O(Pc(e.alertEligible))}</p>`:``,category:uu(`category`,e.category),type:uu(`type`,e.type),publishedDate:e.publishedDate,cpvCode:e.cpvCode,labels:{description:k(`description`),noDescription:k(`noDescription`),requirements:k(`requirements`),noSpecificRequirements:k(`noSpecificRequirements`),matchReasons:k(`matchReasons`),noMatchReasons:k(`noMatchReasons`),opportunityInfo:k(`opportunityInfo`),source:k(`source`),sourceValue:uu(`source`,e.source),quality:k(`quality`),category:k(`category`),type:k(`type`),deadline:k(`deadline`),deadlineLabel:$(n.label),published:k(`published`),cpv:k(`cpv`),risksToCheck:k(`risksToCheck`),recommendedNextSteps:k(`recommendedNextSteps`),openSourceAndConfirm:k(`openSourceAndConfirm`),removeFromSaved:k(`removeFromSaved`),saveOpportunity:k(`saveOpportunity`),openSource:k(`openSource`),markNotRelevant:k(`markNotRelevant`)},escapeHtml:O})}function Bc(){if(!A.user)return V();if(!A.isAdmin)return Ki();let e=Qs(),t=A.adminCompanies.find(e=>e.id===A.selectedAdminCompanyId);return Q(`
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

    ${Vc()}
    ${Hc(e)}
    ${t?ul(t):``}
  `)}function Vc(){return`
    <div class="admin-tabs" role="tablist" aria-label="Admin sections">
      ${[[`overview`,`Overview`],[`companies`,`Companies`],[`review`,`Review Queue`],[`sources`,`Sources/imports`],[`opportunities`,`Opportunities`],[`reports`,`Reports`]].map(([e,t])=>`
        <button type="button" class="${A.adminActiveTab===e?`is-active`:``}" data-action="admin-tab" data-tab="${e}">
          ${O(t)}
        </button>
      `).join(``)}
    </div>
  `}function Hc(e){return A.adminActiveTab===`companies`?ol():A.adminActiveTab===`review`?Wc():A.adminActiveTab===`sources`?`
      ${Os()}
      ${As()}
      ${Hs()}
      ${js()}
      ${Is()}
    `:A.adminActiveTab===`opportunities`?ll(e):A.adminActiveTab===`reports`?Ls():`
    ${Uc()}
    ${Ge({escapeHtml:O,isRunning:!!A.adminDailyPipelineLoading,result:A.adminDailyPipelineResult||null})}
    ${ft({escapeHtml:O,usageSummary:A.adminAiUsageSummary||null,lastResult:A.adminAutomaticAiReviewResult||null,isRunning:!!A.adminAutomaticAiReviewLoading,formatAiUsageCost:Ae})}
    ${Os()}
    ${ol(!0)}
  `}function Uc(){let e=A.adminCompanies||[],t=A.opportunities||[],n=Es(),r=e.filter(e=>e.profileStatus===`Complete`).length,i=Math.max(0,e.length-r);return`
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
  `}function Wc(){let e=A.adminReviewMatches||[],t=Gc();return`
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
          ${e.map(tl).join(``)}
        </div>
      `:`<div class="empty-card">${O(t.empty)}</div>`}
    </section>
  `}function Gc(){return{title:`Review Queue`,loading:`Loading review queue...`,empty:`No uncertain matches need review.`,count:e=>`${e} uncertain match${e===1?``:`es`} need review.`,opportunity:`Opportunity`,company:`Company`,source:`Source`,buyer:`Buyer`,region:`Region`,deadline:`Deadline`,score:`Score`,safety:`Safety`,alert:`Alert`,safetyReasons:`Safety reasons`,matchReasons:`Match reasons`,aiReview:`AI review`,aiReviewButton:`AI review`,aiReviewing:`Reviewing...`,aiFit:`Fit`,aiConfidence:`Confidence`,aiSend:`Send to client`,aiSummary:`Suggested client summary`,aiNoReview:`No AI review saved yet.`,approve:`Approve`,approving:`Approving...`,reject:`Reject`,rejecting:`Rejecting...`,noSource:`No source URL`,hidden:`Hidden from reports`,notHidden:`Not hidden from reports`,sourceUrl:`Source URL`}}function Kc(e){let t=e?.source||e?.rawPayload?.source_name||``;return jn(e?.buyer,t,e?.rawPayload||{})||`Unknown buyer`}function qc(e){return Mn(e?.source||e?.rawPayload?.source_name||``)||e?.location||`Unknown`}function Jc(e){let t=String(e?.deadlineAt||e?.rawPayload?.deadline_at||``).trim().match(/^(\d{4}-\d{2}-\d{2})[T\s](\d{2}):(\d{2})/);return t?`${t[1]} ${t[2]}:${t[3]}`:e?.deadline?vn(e.deadline):`Deadline not available in imported data — verify on source page.`}function Yc(e){let t=String(e||``).toLowerCase();return{auto_approved:`Auto-approved`,needs_review:`Needs review`,hidden:`Hidden`}[t]||Sn(t.replace(/_/g,` `))}function Xc(e){return e?`Alert eligible`:`Not alert eligible`}function Zc(e){return e?`Review required`:`Review not required`}function Qc(e){let t=String(e||``).trim();return{"Strong match":`Strong match`,"Good match":`Good match`,"Possible match":`Possible match`,"Weak match":`Weak match`}[t]||t||`Possible match`}function $c(e){return String(e||``).trim()}function el(e){return String(e||``).trim()}function tl(e){let t=e.opportunity||{},n=A.adminReviewActions?.[e.id]||``,r=!!A.adminAiReviewActions?.[e.id],i=wn(t.url),a=Gc(),o=e.safetyReasons.length?e.safetyReasons:[`Needs admin review`],s=e.matchReasons.length?e.matchReasons:[`Profile match`];return`
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
        ${il(a.buyer,Kc(t))}
        ${il(a.region,qc(t))}
        ${il(a.deadline,Jc(t))}
        ${il(a.score,`${Qc(e.matchLabel)} · ${Number(e.matchScore||0)}`)}
        ${il(a.safety,Yc(e.safetyStatus))}
        ${il(a.alert,`${Xc(e.alertEligible)} · ${Zc(e.reviewRequired)}`)}
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

      ${nl(e,a)}

      <div class="admin-review-actions">
        <span class="admin-review-hidden-state">${O(t.rawPayload?.hidden_from_reports===!0?a.hidden:a.notHidden)}</span>
        <div class="admin-row-actions">
          <button class="btn btn-secondary btn-small" data-action="admin-ai-review-match" data-id="${O(e.id)}" data-force="${e.aiReview?`true`:`false`}" ${n||r?`disabled`:``}>${O(r?a.aiReviewing:e.aiReview?`Re-run AI review`:a.aiReviewButton)}</button>
          <button class="btn btn-ghost btn-small" data-action="admin-review-match" data-review-action="approve" data-id="${O(e.id)}" data-company-id="${O(e.companyId)}" ${n||r?`disabled`:``}>${O(n===`approve`?a.approving:a.approve)}</button>
          <button class="btn btn-ghost btn-small" data-action="admin-review-match" data-review-action="reject" data-id="${O(e.id)}" data-company-id="${O(e.companyId)}" ${n||r?`disabled`:``}>${O(n===`reject`?a.rejecting:a.reject)}</button>
        </div>
      </div>
    </article>
  `}function nl(e,t){let n=e.aiReview;return n?`
    <section class="admin-ai-review-box">
      <div class="admin-ai-review-header">
        <h4>${O(t.aiReview)}</h4>
        <span>${O(n.model||`model not listed`)} · ${n.updatedAt?O(T(n.updatedAt)):``}</span>
      </div>
      <div class="admin-ai-review-meta">
        <span><strong>${O(t.aiFit)}</strong>${O(rl(n.fit))}</span>
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
    `}function rl(e){return{strong:`Strong`,possible:`Possible`,weak:`Weak`,no_fit:`No fit`}[String(e||``)]||`Weak`}function il(e,t){return`
    <div class="admin-review-meta-item">
      <span>${O(e)}</span>
      <strong>${O(t||`—`)}</strong>
    </div>
  `}function al(){let e=A.adminCompanyFilters;return(A.adminCompanies||[]).filter(t=>{let n=D(e.search);return!(n&&!D(`${t.companyName} ${t.contactEmail} ${t.industry}`).includes(n)||e.industry!==`all`&&t.industry!==e.industry||e.profileStatus!==`all`&&t.profileStatus!==e.profileStatus||e.plan!==`all`&&t.plan!==e.plan)})}function ol(e=!1){let t=e?(A.adminCompanies||[]).slice(0,5):al();return`
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
      ${e?``:sl()}
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
              ${t.map(cl).join(``)}
            </tbody>
          </table>
        </div>
      `:`<div class="empty-card">No companies found.</div>`}
    </section>
  `}function sl(){let e=A.adminCompanies||[],t=$s(e,e=>e.industry),n=$s(e,e=>e.plan),r=A.adminCompanyFilters;return`
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
  `}function cl(e){let t=A.adminCompanyActions?.[e.id]||``,n=t===`refresh`,r=t===`report`,i=!!t;return`
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
  `}function ll(e){let t={...ar(),...A.adminOpportunityDraft||{}};return`
    <section class="admin-list">
      <div class="card-header">
        <div>
          <h2>Existing opportunities</h2>
          <p>${(A.opportunities||[]).length} loaded ${A.opportunityLoadError?`from fallback data`:`from Supabase`}.</p>
        </div>
      </div>
      ${ec(e)}
      ${e.length?e.map(fl).join(``):`<div class="empty-card">No opportunities loaded.</div>`}
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

    ${oc()}
  `}function ul(e){let t=[e.minProjectValue?X(e.minProjectValue):`No minimum`,e.maxProjectValue?X(e.maxProjectValue):`No maximum`].join(` - `),n=wn(e.website);return`
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
              ${dl(e.services,`No services saved.`)}
              <h3>Include keywords</h3>
              ${dl(e.includeKeywords,`No include keywords saved.`)}
              <h3>Exclude keywords</h3>
              ${dl(e.excludeKeywords,`No exclude keywords saved.`)}
            </section>

            <section class="side-panel">
              <h3>Locations and service areas</h3>
              <p><strong>Base:</strong> ${O(e.baseLocation||`Not set`)}</p>
              ${dl([...e.locations,...e.serviceAreas],`No locations saved.`)}
              <h3>Reports</h3>
              <p><strong>Frequency:</strong> ${O(e.reportFrequency)}</p>
              <p><strong>Day:</strong> ${O(e.reportDay)}</p>
              <p><strong>Deadline reminders:</strong> ${e.deadlineReminders?`On`:`Off`}</p>
            </section>

            ${et(e,{escapeHtml:O,formatDateTime:T,inviteEmail:Pr(e),inviteLink:A.adminCompanyInviteLinks?.[e.id]||``,inviteDebug:A.adminCompanyInviteDebug?.[e.id]||null,actionState:A.adminCompanyAccessActions?.[e.id]||``})}

            <section class="side-panel">
              <h3>Latest matches</h3>
              ${pt(e,{escapeHtml:O})}
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

            ${mt(e,{escapeHtml:O,formatDateTime:T,actionState:A.adminCompanyAiReviewActions?.[e.id]?`running`:``,filter:A.adminCompanyAiReviewFilter,lastResult:A.adminCompanyAiReviewResults?.[e.id]||null,usageSummary:A.adminAiUsageSummary||null,formatAiUsageCost:Ae})}
          </div>
        </div>
      </div>
    </div>
  `}function dl(e,t){let n=E(e);return n.length?`<div class="admin-tag-list">${n.map(e=>`<span>${O(e)}</span>`).join(``)}</div>`:`<p>${O(t)}</p>`}function fl(e){let t=A.adminUpdatingId===e.id,n=L(e),r=e.rawPayload?.hidden_from_reports===!0||[`hidden`,`noise`,`deleted`].includes(String(e.rawPayload?.admin_report_status||``).toLowerCase()),i=Vl(e)?e.rawPayload?.duplicate_reason||`Duplicate of ${e.rawPayload?.canonical_opportunity_id||e.rawPayload?.duplicate_of||`canonical opportunity`}`:``,a=fi({title:e.title,description:e.description,content:`${e.category||``} ${e.source||``} ${Array.isArray(e.keywords)?e.keywords.join(` `):``}`,publishedDate:e.publishedDate,deadline:e.deadline,sourceName:e.source,sourceType:e.sourceType,connectorType:e.rawPayload?.connector_type}),o=e.rawPayload?.stale_reason||(a.isStale?a.reason:``),s=wn(e.url||e.rawPayload?.source_url||``);return`
    <div class="admin-row">
      <div>
        <h3>${O(e.title)}</h3>
        <p><strong>Source:</strong> ${O(e.source||`Unknown source`)} · <strong>Buyer:</strong> ${O(Kc(e))} · <strong>Region:</strong> ${O(qc(e))} · <strong>Status:</strong> ${O(e.status)}</p>
        <p><strong>Source URL:</strong> ${s?`<a href="${O(s)}" target="_blank" rel="noreferrer">${O(s)}</a>`:`Not listed`} · <strong>External ID:</strong> ${O(e.externalId||`Not listed`)}</p>
        <p>Quality: ${O(Ac(e))} · Intent: ${O(kc(n))}${r?` · Hidden from reports`:``}${i?` · Duplicate: ${O(i)}`:``}${o?` · Stale / expired: ${O(o)}`:``}</p>
        <p>Debug: hidden_from_reports=${e.rawPayload?.hidden_from_reports===!0?`true`:`false`} · admin_report_status=${O(e.rawPayload?.admin_report_status||`none`)} · stale_status=${O(e.rawPayload?.stale_status||`none`)}</p>
        ${pl(e)}
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
  `}function pl(e){let t=A.adminOpportunityFilters?.debugCompanyId||``;if(!t)return``;let n=(A.adminCompanies||[]).find(e=>e.id===t);if(!n)return`<div class="admin-debug-panel">Match debug: selected company not loaded.</div>`;let r=lo(n,e),i=_l(e,r),a=E(n.services).join(`, `)||`No services`,o=E(n.includeKeywords).join(`, `)||`No include keywords`,s=ml(n,e),c=hl(n,e),l=gl(n,e,r),u=classifyMatchSafety(n,r);return`
    <div class="admin-debug-panel">
      <p><strong>Match debug for ${O(n.companyName)}:</strong> score ${Number(r.matchScore||0)} · ${O(Qc(r.matchLabel))}</p>
      <p><strong>Services:</strong> ${O(a)}</p>
      <p><strong>Keywords:</strong> ${O(o)}</p>
      <p><strong>Matched terms:</strong> ${s.length?s.map(e=>`<span class="admin-chip">${O(e)}</span>`).join(` `):`None`}</p>
      <p><strong>Missing profile terms:</strong> ${c.length?c.map(e=>`<span class="admin-chip">${O(e)}</span>`).join(` `):`None`}</p>
      <p><strong>Score contribution:</strong> ${l.map(e=>`<span class="admin-chip">${O(e)}</span>`).join(` `)}</p>
      <p><strong>Matched terms/reasons:</strong> ${(r.matchReasons||[]).map(e=>`<span class="admin-chip">${O($c(e))}</span>`).join(` `)||`None`}</p>
      <p><strong>Risks:</strong> ${(r.risks||[]).map(e=>`<span class="admin-chip">${O(el(e))}</span>`).join(` `)||`None`}</p>
      <p><strong>Safety:</strong> <span class="admin-chip">${O(Yc(u.safetyStatus))}</span> <span class="admin-chip">${O(Xc(u.alertEligible))}</span> ${(u.safetyReasons||[]).map(e=>`<span class="admin-chip">${O(e)}</span>`).join(` `)}</p>
      <p><strong>Excluded by:</strong> ${i.length?i.map(e=>`<span class="admin-chip">${O(e)}</span>`).join(` `):`<span class="admin-chip">Not excluded by local dashboard/report filters</span>`}</p>
    </div>
  `}function ml(e,t){let n=Ma(t);return Ha(yn([...E(e.services).filter(e=>ja(n,e)),...E(e.includeKeywords).filter(e=>ja(n,e)),...Ua(n),...qa(e)?Wa(n):[]]))}function hl(e,t){let n=Ma(t);return Ha(yn([...E(e.services),...E(e.includeKeywords)].filter(e=>e&&!ja(n,e)))).slice(0,12)}function gl(e,t,n){let r=[],i=(n.matchReasons||[]).filter(e=>/^Mentions your service:/i.test(e)).length,a=(n.matchReasons||[]).filter(e=>/^Contains your keyword:/i.test(e)).length;co(e,t)&&r.push(`+35 industry/category`),i&&r.push(`+${Math.min(35,i*10)} services`),a&&r.push(`+${Math.min(25,a*8)} keywords`);let o=to(e,t);return o===`local_match`?r.push(`+22 local`):o===`national_match`?r.push(`+16 national`):o===`remote_match`?r.push(`+14 remote`):o===`outside_area_possible`?r.push(`+4 travel possible`):r.push(`-8 low-confidence location`),t.deadline&&w(t.deadline)>=0&&w(t.deadline)<=30&&r.push(`+8 closing soon`),(n.risks||[]).some(e=>/broad construction/i.test(e))&&r.push(`capped broad fit`),(n.risks||[]).some(e=>/winter|snow/i.test(e))&&r.push(`capped winter fit`),(n.risks||[]).some(e=>/indoor|finishing/i.test(e))&&r.push(`downgraded indoor mismatch`),r.length?r:[`No positive score contribution`]}function _l(e,t){let n=[];return Number(t.matchScore||0)<50&&n.push(`score_below_50 (${Number(t.matchScore||0)})`),eu(e)||n.push(`customer_match_ineligible`),F(e)||n.push(`dashboard_not_visible`),_o(e)===`hidden`&&n.push(`safety_status_hidden`),Xl(A.adminCompanies?.find(e=>e.id===A.adminOpportunityFilters?.debugCompanyId)||{},e)&&n.push(`needs_review_wrong_type_for_company`),Zl(A.adminCompanies?.find(e=>e.id===A.adminOpportunityFilters?.debugCompanyId)||{},e)&&n.push(`design_consulting_or_supervision_only`),e.rawPayload?.hidden_from_reports===!0&&n.push(`hidden_from_reports`),Vl(e)&&n.push(`duplicate_secondary`),di(e)&&n.push(`stale_or_expired`),oi(e)&&n.push(`demo_or_test`),n}function vl(){if(!A.user)return V();if(!A.profile)return ps(k(`setupCompanyFirst`),k(`reportNeedsProfile`));let e=A.profile,t=Nl(e,jl()),n=A.reports.find(e=>e.id===A.selectedReportId),r=A.reportArchiveLoading?k(`loadingSavedReports`):A.language===`is`?`${A.reports.length} vistuð yfirlit.`:`${A.reports.length} saved report${A.reports.length===1?``:`s`}.`,i=A.reportArchiveLoading?`<div class="empty-card">${O(k(`loadingSavedReports`))}</div>`:A.reportsLoadError?`<div class="admin-message is-error">Failed to load reports. ${O(A.reportsLoadError)}</div>`:A.reportsLoaded&&A.reports.length===0?`<div class="empty-card">${O(k(`noSavedReports`))}</div>`:A.reports.map(yl).join(``);return Q(`
    <section class="dashboard-head">
      <div>
        <p class="eyebrow">${O(k(`weeklyReport`))}</p>
        <h1>${O(k(`reportTitle`))}</h1>
        <p>${O(e.companyName||`Your company`)} · ${O(Pl(t.periodStart,t.periodEnd))}</p>
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

    ${xl(t,{id:`report-preview`,contactEmail:e.contactEmail,companyName:e.companyName})}

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

    ${n?Sl(n,e):``}
  `)}function yl(e){let t=Array.isArray(e.report_items)?e.report_items.length:Number(e.itemCount||0),n=A.profile?.companyName||e.companies?.company_name||`Company`,r=A.language===`is`?Fl(e.created_at):vn(e.created_at),i=A.language===`is`?`${t} tækifæri`:`${t} item${t===1?``:`s`}`;return zt({report:e,title:El(e,n),created:r,itemLabel:i,statusLabel:bl(e.status),hideLabel:A.language===`is`?`Fela yfirlit`:`Hide report`,viewLabel:k(`viewReport`),escapeHtml:O})}function bl(e){let t=String(e||`draft`);return A.language===`is`?{generated_all_current:`Heildaryfirlit`,generated_new_only:`Ný tækifæri`,draft:`Vistað yfirlit`}[t]||t:{generated_all_current:`All current`,generated_new_only:`New opportunities`,draft:`Saved report`}[t]||t}function xl(e,t={}){return Bt({report:e,options:t,companyName:t.companyName||A.profile?.companyName||`Company`,dateRange:Pl(e.periodStart,e.periodEnd),generatedByLabel:k(`generatedBy`),reportTitleLabel:k(`reportTitle`),closeLabel:k(`closeReport`),escapeHtml:O})}function Sl(e,t,n={}){let r=e.period_start||e.created_at?.slice(0,10)||new Date().toISOString().slice(0,10),i=e.period_end||e.created_at?.slice(0,10)||new Date().toISOString().slice(0,10),a=t.companyName||e.companies?.company_name||`Company`,o=Dl(e),s=o.length?Ol(o):Cl(e),c=o.length?gu(e,a,o):Tl(e.text_content||``);return xl({title:El(e,a),periodStart:r,periodEnd:i,htmlContent:s,textContent:c},{companyName:a,closeButton:n.closeButton===void 0?!0:n.closeButton,includeTextArea:n.includeTextArea===void 0?!1:n.includeTextArea,id:n.id||``})}function Cl(e){if(e.html_content&&e.html_content.includes(`report-cover`))return wl(Al(e.html_content));let t=e.period_start||e.created_at?.slice(0,10)||new Date().toISOString().slice(0,10),n=e.period_end||e.created_at?.slice(0,10)||new Date().toISOString().slice(0,10),r=e.html_content?wl(Al(e.html_content)):`<pre>${O(e.text_content||`Ekkert efni var vistað fyrir þetta yfirlit.`)}</pre>`;return`
    <div class="report-cover">
      <div class="report-kicker">Útbúið af VerkRadar</div>
      <p class="eyebrow">Vistað yfirlit</p>
      <h2>${O(e.title||`Vistað yfirlit`)}</h2>
      <p>${O(Pl(t,n))}</p>
      <p>${O(e.summary||`Þetta eldra vistaða yfirlit er birt í nýju skýrslusniði.`)}</p>
    </div>
    <div class="report-legacy-content">
      ${r}
    </div>
  `}function wl(e){return Yt(e,A.language)}function Tl(e){return Yt(e,A.language)}function El(e,t){return k(`reportForCompany`,{company:String(t||e?.companies?.company_name||`Company`).trim()})}function Dl(e){return(Array.isArray(e?.report_items)?[...e.report_items]:[]).sort((e,t)=>Number(e.sort_order||0)-Number(t.sort_order||0)).map(e=>{if(!e.opportunities)return null;let t=Qr(e.opportunities);return{...t,matchScore:Number(e.match_score||0),matchLabel:fo(Number(e.match_score||0)),matchReasons:wi(t,Array.isArray(e.match_reasons)?e.match_reasons:[]),risks:Array.isArray(e.risks)&&e.risks.length?e.risks:Array.isArray(t.rawPayload?.risks)?t.rawPayload.risks:[],nextSteps:[]}}).filter(Boolean)}function Ol(e){let t=kl(e);return`
    ${t.confirmed.length?nu(C(`openActiveTitle`,A.language),C(`openActiveDescription`,A.language),t.confirmed):``}
    ${t.possible.length?nu(C(`possibleTitle`,A.language),C(`possibleDescription`,A.language),t.possible):``}
    ${t.early.length?nu(C(`earlyTitle`,A.language),C(`earlyDescription`,A.language),t.early):``}
    <p class="report-footer-note">${O(k(`reportFooter`))}</p>
  `}function kl(e){let t={confirmed:[],possible:[],early:[],review:[]};return e.forEach(e=>{let n=Ll(e);n===`confirmed`?t.confirmed.push(e):n===`possible`?t.possible.push(e):n===`early`?t.early.push(e):n!==`excluded`&&t.review.push(e)}),t}function Al(e){let t=new DOMParser().parseFromString(String(e||``),`text/html`),n=new Set([`A`,`ARTICLE`,`DIV`,`EM`,`H2`,`H3`,`H4`,`H5`,`LI`,`OL`,`P`,`PRE`,`SECTION`,`SPAN`,`STRONG`,`UL`]),r=new Set([`aria-hidden`,`class`,`href`,`rel`,`target`]);return t.body.querySelectorAll(`*`).forEach(e=>{if(!n.has(e.tagName)){e.replaceWith(...Array.from(e.childNodes));return}Array.from(e.attributes).forEach(t=>{if(!r.has(t.name)){e.removeAttribute(t.name);return}if(t.name===`href`){let n=wn(t.value);n?e.setAttribute(`href`,n):e.removeAttribute(`href`)}})}),t.body.innerHTML}function jl(e=`all_current`,t=new Set){return Ml({mode:e,previouslyReportedIds:t})}function Ml({mode:e=`all_current`,previouslyReportedIds:t=new Set}={}){let n=po().filter(e=>e.matchScore>=50).filter(e=>Rl(e,`all_current`));return _n(e===`new_only`?n.filter(e=>!t.has(e.id)):n).slice(0,8)}function Nl(e,t){let n=new Date,r=n.toISOString().slice(0,10),i=new Date(n);i.setDate(i.getDate()-7);let a=i.toISOString().slice(0,10),o=k(`reportForCompany`,{company:e.companyName}),s=Il(t),c=s.confirmed.length+s.possible.length+s.early.length,l=A.language===`is`?`${c} viðeigandi útboðs- eða verðfyrirspurnaratriði fundust fyrir ${e.companyName}.`:`${c} relevant tender/quote-request ${c===1?`item`:`items`} found for ${e.companyName}.`;return{title:o,periodStart:a,periodEnd:r,summary:l,textContent:hu(e,t),htmlContent:`
    <div class="report-cover">
      <div class="report-kicker">${O(k(`generatedBy`))}</div>
      <p class="eyebrow">${O(k(`reportTitle`))}</p>
      <h2>${O(o)}</h2>
      <p>${O(Pl(a,r))}</p>
      <p>${O(l)} ${t[0]?O(A.language===`is`?`Sterkasta sýnilega atriðið er ${t[0].title}.`:`The strongest visible item is ${t[0].title}.`):O(A.language===`is`?`Engin skýr útboð eða verðfyrirspurnir fundust fyrir þetta tímabil.`:`No strict report-ready tenders or quote requests were found for this period.`)}</p>
    </div>

    <div class="report-summary-grid">
      ${tu(C(`openActiveTitle`,A.language),s.confirmed.length)}
      ${tu(C(`possibleTitle`,A.language),s.possible.length)}
    </div>

    ${nu(C(`openActiveTitle`,A.language),C(`openActiveDescription`,A.language),s.confirmed)}
    ${s.possible.length?nu(C(`possibleTitle`,A.language),C(`possibleDescription`,A.language),s.possible):``}
    ${s.early.length?nu(C(`earlyTitle`,A.language),C(`earlyDescription`,A.language),s.early):``}

    <p class="report-footer-note">${O(k(`reportFooter`))}</p>
  `}}function Pl(e,t){return`${Fl(e)} – ${Fl(t)}`}function Fl(e){if(!e)return`Engin dagsetning`;let t=new Date(`${String(e).slice(0,10)}T00:00:00`);return Number.isNaN(t.getTime())?String(e):A.language===`en`?new Intl.DateTimeFormat(`en-GB`,{year:`numeric`,month:`short`,day:`2-digit`}).format(t):`${t.getDate()}. ${[`janúar`,`febrúar`,`mars`,`apríl`,`maí`,`júní`,`júlí`,`ágúst`,`september`,`október`,`nóvember`,`desember`][t.getMonth()]} ${t.getFullYear()}`}function Il(e){let t={confirmed:[],possible:[],early:[]},n=new Set,r=_n(e);(r.length?r:Hl(e)).forEach(e=>{let r=Ll(e);r!==`excluded`&&(n.has(e.id)||(n.add(e.id),r===`confirmed`?t.confirmed.push(e):r===`possible`?t.possible.push(e):r===`early`&&t.early.push(e)))});let i=8;for(let e of[`confirmed`,`possible`,`early`]){let n=t[e].slice(0,i);t[e]=n,i=Math.max(0,i-n.length)}return t}function Ll(e){let t=hn(e);if(t!==`excluded`||e?.aiReviewFit||e?.ai_review_fit)return t;if(!zl(e))return`excluded`;if(gn(e))return`confirmed`;let n=L(e);if(n===`confirmed_tender`)return`confirmed`;if(n===`early_opportunity`)return`early`;let r=I(e.qualityStatus,e);return r===`confirmed_tender`?`confirmed`:r===`early_signal`?`early`:`excluded`}function Rl(e,t=`all_current`){return zl(e)?t===`new_only`?_o(e)===`auto_approved`&&e.alertEligible!==!1:_o(e)!==`hidden`:!1}function zl(e){if(!e||oi(e)||_o(e)===`hidden`||!F(e)||Bl(e)||Wl(e)||Jl(e)||Yl(e)||bi(e.title||``)&&!Gl(e))return!1;let t=L(e);if(t===`confirmed_tender`)return Gl(e)||ql(e);if(t===`early_opportunity`)return Kl(e);let n=I(e.qualityStatus,e);return n===`confirmed_tender`?Gl(e)||ql(e):n===`early_signal`?Kl(e):!1}function Bl(e){let t=e?.rawPayload||{},n=String(t.admin_report_status||``).toLowerCase();if(n===`include`)return!1;if(t.hidden_from_reports===!0||[`hidden`,`hide`,`noise`,`deleted`].includes(n)||Vl(e)||di(e))return!0;let r=L(e);return r===`news_context`||r===`not_opportunity`}function Vl(e={}){let t=e.rawPayload||{},n=String(t.canonical_opportunity_id||``);return t.is_duplicate===!0||!!t.duplicate_of||!!n&&!!e.id&&n!==String(e.id)}function Hl(e){return[...e].sort((e,t)=>Ul(e)-Ul(t)||Number(ql(t))-Number(ql(e))||Number(Gl(t))-Number(Gl(e))||t.matchScore-e.matchScore||w(e.deadline)-w(t.deadline))}function Ul(e){if(Wl(e))return 99;let t=L(e);return t===`confirmed_tender`?0:t===`early_opportunity`?1:10}function Wl(e){let t=R(e)?ci(e):String(e?.rawPayload?.tender_state||``).toLowerCase();return[`tender_awarded`,`awarded`,`already_tendered`].includes(t)?!0:B(z(e),[`lægstbjóðandi`,`laegstbjodandi`,`samningur gerður`,`samningur gerdur`,`samningur var`,`samið var`,`samid var`,`útboð hefur farið fram`,`utbod hefur farid fram`,`útboð var auglýst`,`utbod var auglyst`])}function Gl(e){return B(z(e),[`útboð`,`utbod`,`útboðsauglýsing`,`utbodsauglysing`,`tilboð`,`tilbod`,`tilboðum`,`tilbodum`,`óskað eftir tilboðum`,`oskad eftir tilbodum`,`verðfyrirspurn`,`verdfyrirspurn`,`forval`,`skilafrestur`,`útboðsgögn`,`utbodsgogn`,`quote request`,`request for quote`,`tender`,`procurement`])}function Kl(e){return B(z(e),[`senn í útboð`,`senn i utbod`,`áætlað útboð`,`aaetlad utbod`,`áætlað er að bjóða út`,`aaetlad er ad bjoda ut`,`fyrirhugað útboð`,`fyrirhugad utbod`])}function ql(e){let t=D(e?.source||``);return[`rikiskaup`,`ríkiskaup`,`utbodsvefur`,`útboðsvefur`,`ted`,`tenders electronic daily`,`procurement`,`tender portal`].some(e=>t.includes(D(e)))}function Jl(e){return Zl(A.profile||{},e)}function Yl(e){return Xl(A.profile||{},e)}function Xl(e,t){return _o(t)!==`needs_review`||!$l([...Array.isArray(t?.safetyReasons)?t.safetyReasons:[],...Array.isArray(t?.risks)?t.risks:[],...Array.isArray(t?.rawPayload?.safety_reasons)?t.rawPayload.safety_reasons:[],...Array.isArray(t?.rawPayload?.risks)?t.rawPayload.risks:[]].filter(Boolean).join(` `))?!1:!Ql(e)}function Zl(e,t){let n=z(t),r=B(n,[`for og verkhönnun`,`for og verkhonnun`,`verkhönnun`,`verkhonnun`,`forhönnun`,`forhonnun`,`verkfræðiráðgjöf`,`verkfraediradgjof`,`ráðgjöf`,`radgjof`,`umsjón`,`umsjon`,`verkefnastjórn`,`verkefnastjorn`,`útboðsgögn hönnun`,`utbodsgogn honnun`]),i=B(n,[`hönnun`,`honnun`]),a=B(n,[`lóðarframkvæmdir`,`lodarframkvaemdir`,`gatnagerð`,`gatnagerd`,`stígagerð`,`stigagerd`,`lagnir`,`regnvatnslagnir`,`jarðvinna`,`jardvinna`,`jarðvegsskipti`,`jardvegsskipti`,`fyllingar`,`grjóthleðsla`,`grjothledsla`,`malbikun`,`hellulögn`,`hellulogn`,`kantsteinar`,`landmótun`,`landmotun`,`yfirborðsfrágangur`,`yfirbordsfragangur`,`bílastæði`,`bilastaedi`]),o=B(n,[`eftirlit`,`umsjón`,`umsjon`,`verkefnastjórn`,`verkefnastjorn`])&&!a;return!r&&!(i&&!a)&&!o?!1:!Ql(e)}function Ql(e={}){return B([e.industry,...Array.isArray(e.services)?e.services:[],...Array.isArray(e.includeKeywords)?e.includeKeywords:[]].filter(Boolean).join(` `),[`hönnun`,`honnun`,`ráðgjöf`,`radgjof`,`verkfræðiráðgjöf`,`verkfraediradgjof`,`verkfræði`,`verkfraedi`,`eftirlit`,`verkefnastjórnun`,`verkefnastjornun`,`útboðsgögn`,`utbodsgogn`,`engineering`,`design`,`consulting`,`project management`,`supervision`])}function $l(e){return B(String(e||``),[`hönnun`,`honnun`,`ráðgjöf`,`radgjof`,`verkfræðiráðgjöf`,`verkfraediradgjof`,`eftirlit`,`umsjón`,`umsjon`,`verkefnastjórn`,`verkefnastjorn`,`design`,`consulting`,`supervision`,`inspection`,`project management`])}function eu(e){if(!e)return!1;let t=e.rawPayload||{};if(String(t.admin_report_status||``).toLowerCase()===`include`)return!0;if(Bl(e))return!1;let n=String(t.tender_state||``).toLowerCase();return!([`tender_awarded`,`awarded`,`already_tendered`].includes(n)||di(e)||bi(e.title||``)&&!ui(z(e)))}function tu(e,t){return Vt({label:e,value:t,escapeHtml:O})}function nu(e,t,n){return Ht({title:e,description:t,opportunities:n,emptyText:A.language===`is`?`Engin atriði í þessum hluta.`:`No items in this section.`,renderOpportunityItem:ru,escapeHtml:O})}function ru(e){let t=!!e.estimatedValue,n={...e,matchReasons:nn(e.matchReasons,A.language)},r=mu(e).map(e=>rn(e,A.language)).filter(Boolean),i=e.deadline?Fl(e.deadline):k(`notFound`);return Ut({opp:n,valueText:t?X(e.estimatedValue):k(`notListed`),deadlineText:i,sourceUrl:wn(e.url),risks:r,fallbackReason:A.language===`is`?`Passar við fyrirtækjaprófílinn.`:`Matches your company profile.`,qualityBadgeHtml:iu(n),matchBadgeClass:qo(e.matchLabel),matchLabel:$t(e,A.language),statusText:Qt(A.language),buyerLabel:k(`buyer`),buyerValue:cu(e),sourceLabel:k(`source`),sourceValue:su(`source`,e.source),areaLabel:k(`area`),areaValue:lu(e),deadlineLabel:k(`deadline`),valueLabel:k(`estimatedValue`),whyLabel:k(`whyThisMatters`),risksLabel:k(`risksToCheck`),openSourceLabel:k(`openSource`),sourceMissingLabel:k(`sourceLinkMissing`),formatReason:fu,formatRisk:$,escapeHtml:O})}function iu(e){return Wt({status:`verify`,label:tn(e,A.language),escapeHtml:O})}function au(e){return En(e,k)}function ou(e){return Dn(e,k)}function su(e,t){return On(e,t,k)}function cu(e){let t=e?.source||e?.rawPayload?.source_name||``;return su(`buyer`,jn(e?.buyer,t,e?.rawPayload||{}))}function lu(e){return Mn(e?.source||e?.rawPayload?.source_name||``)||su(`location`,e?.location)}function uu(e,t){return Pn(e,t,{language:A.language,translate:k})}function du(e){return Nn(e,A.language,k)}function fu(e){return nn([Fn(e,{language:A.language,translate:k})],A.language)[0]||``}function $(e){return rn(In(e,A.language),A.language)}function pu(e){return Ln(e,A.language)}function mu(e){let t=Array.isArray(e.risks)&&e.risks.length?[...e.risks]:[`Open the source page and confirm mandatory requirements.`];return e.deadline||t.unshift(Ho(e)),e.estimatedValue||t.push(`Estimated value is not listed in the imported data.`),I(e.qualityStatus,e)===`needs_review`&&t.push(R(e)?`Extracted project signal — verify tender timing in the source article.`:`Imported from broad feed — verify that this is a real tender or business opportunity.`),[...new Set(t.map(e=>String(e||``).trim()).filter(Boolean))]}function hu(e,t){let n=Il(t),r=[...n.confirmed,...n.possible,...n.early];return`${k(`reportForCompany`,{company:e.companyName})}
${A.language===`is`?`Tímabil`:`Date range`}: ${Pl(new Date(Date.now()-10080*60*1e3).toISOString().slice(0,10),new Date().toISOString().slice(0,10))}

${A.language===`is`?`Samantekt`:`Summary`}:
- ${C(`openActiveTitle`,A.language)}: ${n.confirmed.length}
- ${C(`possibleTitle`,A.language)}: ${n.possible.length}
- ${C(`earlyTitle`,A.language)}: ${n.early.length}

${r.length?r.map((e,t)=>`${t+1}. ${e.title}
${A.language===`is`?`Staða`:`Status`}: ${en(e,A.language)}
${k(`buyer`)}: ${cu(e)}
${k(`source`)}: ${su(`source`,e.source)}
${k(`area`)}: ${lu(e)}
${k(`deadline`)}: ${Vo(e)}
${k(`estimatedValue`)}: ${e.estimatedValue?X(e.estimatedValue):k(`notListed`)}
${k(`whyThisMatters`)}:
${nn(e.matchReasons.length?e.matchReasons:[`Matched to your company profile.`],A.language).map(e=>`- ${e}`).join(`
`)}
${k(`risksToCheck`)}:
${mu(e).map(e=>`- ${rn($(e),A.language)}`).join(`
`)}
${A.language===`is`?`Næsta skref`:`Next step`}:
${e.url?`${k(`openSource`)}: ${e.url}`:A.language===`is`?`Finnið og staðfestið upprunalega heimild áður en brugðist er við.`:`Find and verify the original source page before acting.`}
`).join(`
`):A.language===`is`?`Engin skýr útboð eða verðfyrirspurnir fundust fyrir þetta tímabil.`:`No report-ready matches were found for this period.`}

VerkRadar`}function gu(e,t,n){let r=e.period_start||e.created_at?.slice(0,10)||new Date().toISOString().slice(0,10),i=e.period_end||e.created_at?.slice(0,10)||new Date().toISOString().slice(0,10),a=El(e,t),o=kl(n),s=[...o.confirmed,...o.possible,...o.early,...o.review];return`${a}
${A.language===`is`?`Tímabil`:`Date range`}: ${Pl(r,i)}

${s.length?s.map((e,t)=>`${t+1}. ${e.title}
${A.language===`is`?`Staða`:`Status`}: ${en(e,A.language)}
${k(`buyer`)}: ${cu(e)}
${k(`source`)}: ${su(`source`,e.source)}
${k(`area`)}: ${lu(e)}
${k(`deadline`)}: ${Vo(e)}
${k(`estimatedValue`)}: ${e.estimatedValue?X(e.estimatedValue):k(`notListed`)}
${k(`whyThisMatters`)}:
${nn(e.matchReasons.length?e.matchReasons:[`Matched to your company profile.`],A.language).map(e=>`- ${e}`).join(`
`)}
${k(`risksToCheck`)}:
${mu(e).map(e=>`- ${rn($(e),A.language)}`).join(`
`)}
${e.url?`${k(`openSource`)}: ${e.url}`:``}
`).join(`
`):A.language===`is`?`Engin atriði eru vistuð í þessu yfirliti.`:`No items are saved in this report.`}

${k(`reportFooter`)}`}async function _u(){let e=hu(A.profile||Wn(),jl());try{await navigator.clipboard.writeText(e),U(`Report copied`,`success`)}catch(e){console.error(`Failed to copy report:`,e),U(`Could not copy report`,`error`)}}function vu(e=`report-preview`,t=``){let n=document.getElementById(e);if(!n){U(`No report available to export`,`error`);return}let r=A.profile||Wn(),i=n.cloneNode(!0);i.classList.add(`pdf-compact-report`),i.querySelectorAll(`textarea, .report-close-btn`).forEach(e=>e.remove());let a=i.querySelector(`.report-meta-bar`);if(a){let e=a.querySelector(`div:first-child strong`)?.textContent?.trim()||k(`reportForCompany`,{company:t||r.companyName||`Company`}),n=a.querySelector(`div:last-child span`)?.textContent?.trim()||t||r.companyName||`Company`,i=a.querySelector(`div:last-child strong`)?.textContent?.trim()||``,o=document.querySelector(`.brand-logo`)?.src||document.querySelector(`link[rel="icon"]`)?.href||``;a.innerHTML=``;let s=document.createElement(`div`);s.className=`pdf-report-header-text`;let c=document.createElement(`span`);c.textContent=k(`generatedBy`);let l=document.createElement(`strong`);l.textContent=e||k(`reportForCompany`,{company:n});let u=document.createElement(`em`);if(u.textContent=i,s.append(c,l,u),a.appendChild(s),o){let e=document.createElement(`img`);e.className=`pdf-report-logo`,e.src=o,e.alt=`VerkRadar`,a.appendChild(e)}}let o=i.querySelector(`.report-summary-grid`);o&&o.remove();let s=n.querySelector(`.report-meta-bar div:last-child strong`)?.textContent||new Date().toISOString().slice(0,10),c=bu(t||r.companyName||`company`,s),l=Array.from(document.querySelectorAll(`link[rel="stylesheet"]`)).map(e=>`<link rel="stylesheet" href="${O(e.href)}">`).join(``),u=window.open(``,`_blank`,`width=1100,height=900`);if(!u){U(`Allow popups to download the report PDF`,`error`);return}u.document.open(),u.document.write(`<!doctype html>
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
</html>`),u.document.close()}function yu(){vu(`admin-report-preview`,(A.selectedAdminReport?.id===A.selectedAdminReportId?A.selectedAdminReport:(A.adminReports||[]).find(e=>e.id===A.selectedAdminReportId))?.companies?.company_name||`Company`)}function bu(e,t){return`VerkRadar-report-${xu(e)||`company`}-${xu(String(t||``).replace(/\s+to\s+/i,`-`))||new Date().toISOString().slice(0,10)}.pdf`}function xu(e){return String(e||``).normalize(`NFD`).replace(/[\u0300-\u036f]/g,``).replace(/[^a-z0-9]+/gi,`-`).replace(/^-+|-+$/g,``).toLowerCase()}function Su(){return Q(Ot({t:k,escapeHtml:O,trialHref:`/trial`}))}function Cu(){return Q(At({t:k,escapeHtml:O,submitted:A.trialRequestSubmitted,error:A.trialRequestError}))}function wu(){return A.user?A.profileLoading&&!A.profile&&!A.profileDraft?Q(`
      <section class="empty-state">
        <div class="loader-mark" aria-label="${O(A.language===`is`?`Hleð fyrirtækjaprófíl`:`Loading company profile`)}"></div>
        <h1>${O(A.language===`is`?`Hleð fyrirtækjaprófíl...`:`Loading company profile...`)}</h1>
        <p>${O(A.language===`is`?`Sæki vistaðan fyrirtækjaprófíl.`:`Checking your saved company profile.`)}</p>
        <button class="btn btn-secondary" type="button" data-action="retry-settings-profile">${O(A.language===`is`?`Reyna aftur`:`Retry`)}</button>
      </section>
    `):A.profileLoadError&&!A.profile&&!A.profileDraft?Q(`
      <section class="empty-state">
        <h1>${O(A.language===`is`?`Gat ekki hlaðið stillingum`:`Could not load Settings`)}</h1>
        <p>${O(A.profileLoadError)}</p>
        <button class="btn btn-primary" type="button" data-action="retry-settings-profile">${O(A.language===`is`?`Reyna aftur`:`Retry`)}</button>
      </section>
    `):!A.profile&&!A.profileDraft?ps(k(`setupCompanyFirst`),A.language===`is`?`Stillingar eru tiltækar eftir að fyrirtækið hefur verið sett upp.`:`Settings are available after you set up your company.`):Q(Gt({t:k,escapeHtml:O,language:A.language,profileDraftDirty:A.profileDraftDirty,profileLoadError:A.profileLoadError,showDemoReset:Tu(),profileFormHtml:fc()})):V()}function Tu(){return!!(A.isAdmin||[`localhost`,`127.0.0.1`,``].includes(window.location.hostname))}ta(),Cr();