(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={profile:`verkradar_profile`,saved:`verkradar_saved_opportunities`,ignored:`verkradar_ignored_opportunities`,language:`verkradar_language`,selectedPlan:`verkradar_selected_plan`},t={is:{navDashboard:`Mælaborð`,navReport:`Yfirlit`,navPricing:`Verðskrá`,navSettings:`Stillingar`,navHowItWorks:`Hvernig virkar þetta`,navSampleReport:`Sýnishorn`,login:`Innskráning`,logout:`Skrá út`,getStarted:`Fá prufu`,setupCompany:`Setja upp fyrirtæki`,createProfile:`Stofna prófíl`,companyProfile:`Fyrirtækjaprófíll`,noCompanyProfile:`Ekkert fyrirtæki`,openMenu:`Opna valmynd`,closeMenu:`Loka valmynd`,privacyPolicy:`Persónuvernd`,termsOfService:`Skilmálar`,dataSources:`Gagnaheimildir`,cookies:`Vafrakökur`,security:`Öryggi`,contact:`Hafa samband`,footerText:`Vöktun útboða og viðskiptatækifæra fyrir fyrirtæki. VerkRadar hjálpar ykkur að finna og yfirfara opinber tækifæri, en frumgögn eru alltaf endanleg heimild.`,loadingLabel:`Hleð VerkRadar`,heroEyebrow:`Útboðsgreind fyrir verktaka og þjónustufyrirtæki`,heroTitle:`Finnið verðmæt útboð áður en skilafresturinn rennur út.`,heroText:`VerkRadar vaktar opinberar heimildir og skilar stuttu yfirliti yfir tækifæri sem gætu passað við ykkar verkflokka og svæði.`,createFreeDemoProfile:`Fá prufuyfirlit`,viewSampleReport:`Skoða sýnishorn`,proofStrong:`Fyrir verktaka, iðnfyrirtæki og þjónustuaðila.`,proofText:`Vöktun á opinberum heimildum, sveitarfélögum og útboðsvefjum - sett fram sem forgangsraðað yfirlit.`,bestOpenMatch:`Stutt yfirlit`,tender:`Útboð`,deadlineRisk:`Rennur út fljótlega`,daysLeft:`{count} dagar eftir`,problemEyebrow:`Vandinn`,problemTitle:`Útboð tapast oft áður en tilboðsgerðin byrjar.`,problemOneTitle:`Útboð birtast á mörgum mismunandi stöðum.`,problemOneText:`Sveitarfélög, stofnanir og útboðsvefir birta tækifæri á ólíkum síðum og í ólíkum sniðum.`,problemTwoTitle:`Skilafrestir geta verið stuttir.`,problemTwoText:`Það tekur tíma að finna hvað passar við ykkar verkflokka, svæði og stærð verkefna.`,targetEyebrow:`Fyrir hverja?`,targetTitle:`Byggt fyrir íslensk fyrirtæki sem þurfa að finna rétt verkefni fyrr.`,targetText:`VerkRadar hentar fyrirtækjum sem vilja vakta útboð, verðfyrirspurnir og verkefnavísbendingar án þess að opna sömu vefi handvirkt á hverjum degi.`,solutionEyebrow:`Lausnin`,solutionTitle:`Eitt skýrt yfirlit í stað dreifðrar leitar.`,solutionText:`VerkRadar breytir útboðshávaða í forgangsraðaðan lista yfir möguleg tækifæri sem fyrirtækið ætti að skoða.`,createProfileStep:`1. Við setjum upp prófíl`,createProfileStepText:`Við skráum þjónustu, svæði, lykilorð og verkefnastærðir sem henta ykkur.`,matchProjectsStep:`2. Finna tækifæri`,matchProjectsStepText:`Kerfið metur hvaða tækifæri gætu passað við fyrirtækjaprófílinn.`,getReportStep:`3. Fáið yfirlit`,getReportStepText:`Fáið skýrt yfirlit með frestum, ástæðum samsvörunar og næstu skrefum.`,sampleReportEyebrow:`Sýnishorn`,sampleReportTitle:`Stuttlisti sem sýnir hvað er þess virði að skoða.`,sampleReportText:`Sýnishornið sýnir hvernig VerkRadar raðar útboðum og mögulegum tækifærum eftir þjónustu, svæði, fresti og ástæðum.`,sourceDisclaimer:`VerkRadar hjálpar til við að forgangsraða tækifærum. Upprunaleg útboðsgögn eru alltaf endanleg heimild.`,pricingEyebrow:`VERÐSKRÁ`,pricingHeadline:`Einföld verðskrá fyrir útboðsvöktun`,pricingSubtitle:`Byrjaðu í prufu. Við setjum upp prófíl fyrir fyrirtækið og sendum yfirlit ef viðeigandi tækifæri finnast.`,pricingTrialPlan:`Ókeypis prufa`,pricingTrialPrice:`0 kr.`,pricingTrialSubtext:`í prufu`,pricingMonitoringPlan:`Grunnur`,pricingMonitoringPrice:`9.900 kr/mán.`,pricingMonitoringSubtext:`fyrir fyrstu fyrirtækin`,pricingCustomPlan:`Sérsniðið`,pricingCustomPrice:`Hafa samband`,pricingBadge:`Hentar flestum fyrirtækjum`,pricingTrialCta:`Fá prufuyfirlit`,pricingMonitoringCta:`Fá prufu`,pricingCustomCta:`Hafa samband`,pricingTrialManualProfile:`Fyrirtækjaprófíll settur upp handvirkt`,pricingTrialFiltering:`Síun eftir þjónustu og svæði`,pricingTrialReportIfRelevant:`Prufuyfirlit sent ef viðeigandi tækifæri finnast`,pricingTrialNoCommitment:`Engin binding`,pricingTrialNoCard:`Engin greiðslukort`,pricingMonitoringSources:`Vöktun á opinberum útboðum og tækifærum`,pricingMonitoringEmail:`Stutt yfirlit sent í tölvupósti`,pricingMonitoringFilters:`Síun eftir þjónustu, svæði og leitarorðum`,pricingMonitoringReminders:`Áminningar um mikilvæg skilafresti`,pricingMonitoringFeedback:`Prófíll uppfærður eftir endurgjöf`,pricingOneProfile:`1 fyrirtækjaprófíll`,pricingCustomProfiles:`Fleiri fyrirtækjaprófílar`,pricingCustomServices:`Fleiri þjónustusvið eða svæði`,pricingCustomMonitoring:`Sérstillt vöktun`,pricingCustomPriorityReview:`Forgangsyfirferð`,pricingCustomAudience:`Fyrir stærri verktaka eða þjónustufyrirtæki`,trialRequestEyebrow:`PRUFA`,trialRequestTitle:`Fá prufuyfirlit`,trialRequestSubtitle:`Segðu okkur aðeins frá fyrirtækinu. Við skoðum upplýsingarnar og setjum upp prufuprófíl ef þetta passar.`,trialCompany:`Fyrirtæki`,trialContact:`Tengiliður`,trialEmail:`Netfang`,trialPhone:`Sími`,trialServices:`Hvaða þjónustu bjóðið þið?`,trialRegions:`Hvaða svæði viljið þið fylgjast með?`,trialNotes:`Athugasemd`,trialCompanyPlaceholder:`Nafn fyrirtækis`,trialContactPlaceholder:`Nafn tengiliðar`,trialEmailPlaceholder:`nafn@fyrirtaeki.is`,trialPhonePlaceholder:`555 1234`,trialServicesPlaceholder:`Dæmi: jarðvinna, pípulagnir, rafmagn, vetrarþjónusta...`,trialRegionsPlaceholder:`Dæmi: Reykjavík, Suðurland eða allt landið`,trialNotesPlaceholder:`Annað sem gæti hjálpað okkur að setja upp réttan prófíl`,trialRequestIntro:`Fyllið út grunnupplýsingar um fyrirtækið. Við skoðum beiðnina og höfum samband ef VerkRadar hentar ykkur.`,trialRequestHelper:`Við skoðum upplýsingarnar og setjum upp prufuprófíl ef þetta passar.`,trialRequestSubmit:`Senda beiðni`,trialRequestSubmitting:`Sendi beiðni...`,optionalField:`valfrjálst`,trialCompanyRequired:`Vinsamlegast skráið fyrirtæki.`,trialContactRequired:`Vinsamlegast skráið tengilið.`,trialEmailRequired:`Vinsamlegast skráið gilt netfang.`,trialEmailInvalid:`Vinsamlegast skráið gilt netfang.`,trialServicesRequired:`Vinsamlegast lýsið þjónustunni sem fyrirtækið býður upp á.`,trialRequestSuccess:`Takk fyrir. Við skoðum upplýsingarnar og höfum samband ef VerkRadar passar við ykkar þjónustu.`,trialRequestError:`Gat ekki sent beiðni. Reynið aftur eða sendið okkur tölvupóst.`,publicSignupUnavailableTitle:`Aðgangur er stofnaður í gegnum boð`,publicSignupUnavailableText:`Viltu fá prufu? Fylltu út formið hér.`,publicSignupUnavailableHelp:`VerkRadar er sett upp handvirkt fyrir prufufyrirtæki. Við stofnum aðgang þegar fyrirtækjaprófíllinn er tilbúinn.`,authLoginTitle:`Skrá inn í VerkRadar`,authLoginSubtitle:`Fáið aðgang að mælaborði, vistuðum tækifærum og vikuyfirlitum.`,email:`Netfang`,password:`Lykilorð`,forgotPassword:`Gleymt lykilorð?`,loggingIn:`Skrái inn...`,newToVerkRadar:`Ný hjá VerkRadar?`,createAccount:`Stofna aðgang`,createAccountTitle:`Stofna VerkRadar aðgang`,createAccountSubtitle:`Byrjið á að stofna aðgang. Síðan stofnið þið fyrirtækjaprófíl.`,inviteCreateAccountSubtitle:`Stofnaðu aðgang til að tengjast fyrirtækjaprófílnum sem hefur þegar verið settur upp.`,authRequiredTitle:`Skráðu þig inn til að halda áfram`,authRequiredText:`Þessi síða er aðgengileg eftir innskráningu.`,alreadyLoggedInTitle:`Þú ert þegar skráð(ur) inn`,alreadyLoggedInText:`Beini þér á næsta skref.`,signupCreatedConfirm:`Aðgangur stofnaður. Athugaðu tölvupóstinn þinn til að staðfesta aðganginn.`,inviteSignupCreatedConfirm:`Staðfestu netfangið í tölvupósti og komdu svo aftur til að virkja aðganginn.`,inviteSignupEmailHelp:`Notaðu boðna netfangið til að tengja aðganginn við rétt fyrirtæki.`,signupExistingAccount:`Þetta netfang er þegar með aðgang. Skráðu þig inn eða endurstilltu lykilorð.`,signupNeutralNextSteps:`Ef aðgangur er til fyrir þetta netfang færðu tölvupóst með næstu skrefum. Annars hefur nýr aðgangur verið stofnaður.`,emailOrPasswordIncorrect:`Netfang eða lykilorð er rangt.`,confirmEmailBeforeLogin:`Staðfestu netfangið þitt áður en þú skráir þig inn.`,passwordTooShort:`Lykilorð þarf að vera að minnsta kosti 6 stafir.`,tooManyAttempts:`Of margar tilraunir. Bíddu aðeins og reyndu aftur.`,couldNotCreateAccount:`Gat ekki stofnað aðgang. Athugaðu netfang og lykilorð.`,couldNotLogin:`Gat ekki skráð þig inn. Reyndu aftur.`,creating:`Stofna...`,alreadyHaveAccount:`Ertu þegar með aðgang?`,passwordReset:`Endurstilla lykilorð`,resetPasswordTitle:`Endurstilla lykilorð`,resetPasswordSubtitle:`Sláið inn netfang og VerkRadar sendir öruggan hlekk ef aðgangur er til.`,sending:`Sendi...`,sendResetLink:`Senda hlekk`,rememberedPassword:`Manstu lykilorðið?`,backToLogin:`Til baka í innskráningu`,newPassword:`Nýtt lykilorð`,chooseNewPassword:`Veldu nýtt lykilorð`,resetPasswordHelp:`Settu nýtt lykilorð fyrir VerkRadar aðganginn. Ef hlekkurinn er útrunninn skaltu biðja um nýjan.`,confirmNewPassword:`Staðfesta nýtt lykilorð`,updating:`Uppfæri...`,updatePassword:`Uppfæra lykilorð`,needNewLink:`Þarftu nýjan hlekk?`,sendAnotherResetLink:`Senda annan hlekk`,onboarding:`UPPSETNING`,onboardingTitle:`Settu upp fyrirtækið`,onboardingText:`Segðu okkur hvað fyrirtækið gerir svo VerkRadar geti fundið viðeigandi tækifæri.`,companyBasics:`1. Grunnupplýsingar`,accountAccess:`Aðgangur`,loginEmail:`Innskráningarnetfang`,loginEmailHelper:`Innskráningarnetfangið er tengt notandaaðganginum og getur verið annað en tengiliðanetfang eða netfang fyrir reikninga fyrirtækisins.`,companyName:`Fyrirtækisnafn`,kennitala:`Kennitala`,contactEmail:`Tengiliðanetfang`,billingEmail:`Netfang fyrir reikninga`,contactName:`Nafn tengiliðar`,phone:`Sími`,address:`Heimilisfang`,website:`Vefsíða`,industry:`Atvinnugrein`,selectIndustry:`Veldu atvinnugrein`,selectedPlan:`Valin áskrift`,plan_basic:`Grunnur`,plan_pro:`Pro`,plan_priority:`Forgangur`,servicesAndKeywords:`2. Þjónustur og leitarorð`,servicesHint:`Bætið við þjónustu sem þið bjóðið raunverulega upp á. Veldu mikilvægustu atriðin fyrst.`,servicesLabel:`Þjónustur`,servicesHelper:`Skráið þjónustuna sem fyrirtækið selur. Nákvæmari þjónusta gefur betri samsvaranir.`,extraWords:`Leitarorð`,includeKeywordsHelper:`Notið orð sem birtast oft í tækifærum sem þið viljið fá.`,excludeWords:`Orð sem ættu að lækka eða fjarlægja slæmar samsvaranir.`,excludeKeywordsHelper:`Orð sem ættu að lækka eða fjarlægja slæmar samsvaranir.`,suggestedServicesFor:`Tillögur að þjónustu fyrir {industry}`,suggestedKeywordsFor:`Tillögur að leitarorðum fyrir {industry}`,selectIndustryForServices:`Veljið atvinnugrein til að sjá þjónustutillögur`,selectIndustryForKeywords:`Veljið atvinnugrein til að sjá leitarorðatillögur`,locationsTitle:`3. Svæði`,locationsHint:`Notið Allt landið fyrir landsdekkandi útboð. Notið ferðastillingar ef þið getið boðið utan heimasvæðis fyrir rétt verkefni.`,baseLocation:`Heimasvæði`,baseLocationPlaceholder:`Dæmi: Austurland`,serviceAreas:`Þjónustusvæði, aðskilin með kommu`,serviceAreasPlaceholder:`Dæmi: Austurland, Allt landið`,selectServiceAreas:`Veldu þjónustusvæði`,noServiceAreasSelected:`Engin svæði valin`,serviceAreasSelected:`{count} svæði valin`,done:`Lokið`,resetTrialTitle:`Endurstilla prufuaðgang`,resetTrialText:`Þetta hreinsar prófílinn þinn ásamt vistuðum og hunsuðum tækifærum og færir aðganginn aftur í upphafsstöðu.`,resetTrialButton:`Endurstilla prufugögn`,resetTrialConfirm:`Ertu viss um að þú viljir endurstilla prufugögnin?`,travelScope:`Ferðir og umfang`,willingToTravel:`Tilbúin að ferðast fyrir rétt verkefni`,includeNational:`Sýna landsdekkandi tækifæri`,includeRemote:`Sýna fjarvinnu / netverkefni`,minimumTravelValue:`Lágmarksverðmæti fyrir ferðalög`,projectSize:`4. Stillingar`,minimumValue:`Lágmarksverðmæti`,maximumValue:`Hámarksverðmæti`,showUnknownValue:`Sýna tækifæri þó verðmæti vanti`,reportPreferences:`Yfirlitsstillingar`,frequency:`Tíðni`,weekly:`Vikulega`,daily:`Daglega`,reportDay:`Dagur yfirlits`,deadlineReminders:`Áminningar um skilafresti`,includeLowConfidence:`Sýna óvissar samsvaranir`,saveProfile:`Vista prófíl`,saving:`Vista...`,saved:`Vistað`,dashboard:`Mælaborð`,welcomeCompany:`Velkomin, {company}`,dashboardIntro:`Forgangsraðaðar tækifærasamsvaranir út frá þjónustu, svæðum og leitarorðum. {refresh}`,matchesLastRefreshed:`Síðast uppfært {time}.`,matchesAutoRefresh:`Samsvaranir uppfærast sjálfkrafa eftir vistun prófíls.`,refreshMatches:`Uppfæra samsvaranir`,refreshing:`Uppfæri...`,viewWeeklyReport:`Skoða yfirlit`,strongMatches:`Sterkar samsvaranir`,closingSoon:`Rennur út fljótlega`,savedLabel:`Vistað`,totalPotentialValue:`Áætlað heildarverðmæti`,searchOpportunities:`Leita í tækifærum...`,savedOnly:`Aðeins vistað`,improveProfile:`Bæta prófíl`,includeNationalOpportunities:`Sýna landsdekkandi tækifæri`,showAllStoredMatches:`Sýna allar samsvaranir`,inspectAllOpportunities:`Skoða öll tækifæri`,details:`Nánar`,save:`Vista`,ignore:`Hunsa`,originalLanguage:`Upprunalegt tungumál`,extractedProject:`Útdregið verkefni`,reportTitle:`Útboðs- og verkefnayfirlit`,setupCompanyFirst:`Settu fyrst upp fyrirtækið`,reportNeedsProfile:`Yfirlitið þarf fyrirtækjaprófíl til að geta fundið viðeigandi tækifæri.`,dashboardNeedsProfile:`Mælaborðið þarf fyrirtækjaprófíl til að reikna viðeigandi samsvaranir.`,weeklyReport:`Yfirlit`,saveReport:`Vista yfirlit`,savingReport:`Vista...`,downloadPdf:`Sækja PDF`,copyReport:`Afrita yfirlit`,reportArchive:`Yfirlitssafn`,savedReports:`Vistuð yfirlit`,loadingSavedReports:`Hleð vistuð yfirlit...`,noSavedReports:`Engin vistuð yfirlit enn.`,viewReport:`Skoða yfirlit`,closeReport:`Loka yfirliti`,generatedBy:`Útbúið af VerkRadar`,reportForCompany:`Útboðs- og verkefnayfirlit fyrir {company}`,openTenders:`Opin útboð / verðfyrirspurnir`,upcomingOpportunities:`Möguleg væntanleg tækifæri`,openTendersDescription:`Skýr útboðs- eða verðfyrirspurnarmerki. Yfirfarið frumgögn áður en brugðist er við.`,upcomingDescription:`Væntanleg útboðs- eða verkefnamerki með skýrum vísbendingum.`,reportFooter:`VerkRadar hjálpar til við að forgangsraða yfirferð opinberra tækifæra. Staðfestið alltaf útboðsgögn, skilafresti, kröfur og hæfi á upprunalegri heimild áður en brugðist er við.`,buyer:`Kaupandi`,source:`Heimild`,description:`Lýsing`,requirements:`Kröfur`,noSpecificRequirements:`Engar sérstakar kröfur skráðar.`,noDescription:`Engin lýsing tiltæk.`,noMatchReasons:`Engar ástæður samsvörunar tiltækar.`,matchReasons:`Ástæður samsvörunar`,opportunityInfo:`Upplýsingar um tækifæri`,extraction:`Útdráttur`,sourceArticle:`Heimildargrein`,parentArticle:`Upprunagrein`,openSourceArticle:`Opna heimildargrein`,extractedRegion:`Útdregið svæði`,projectNumber:`Verknúmer`,tenderState:`Staða útboðs`,quality:`Gæði`,category:`Flokkur`,type:`Tegund`,published:`Birt`,cpv:`CPV`,recommendedNextSteps:`Ráðlögð næstu skref`,noMajorRisks:`Engar stórar áhættur greindar í þessum gögnum.`,openSourceAndConfirm:`Opnið upprunalega heimild og staðfestið hæfi.`,removeFromSaved:`Fjarlægja úr vistuðum`,saveOpportunity:`Vista tækifæri`,markNotRelevant:`Merkja sem ekki viðeigandi`,publicProcurement:`Opinbert útboð`,area:`Svæði`,deadline:`Skilafrestur`,estimatedValue:`Áætlað verðmæti`,notFound:`Fannst ekki`,notListed:`Ekki gefið upp`,unknownBuyer:`Óþekktur kaupandi`,allIceland:`Allt landið`,whyThisMatters:`Af hverju þetta gæti skipt máli`,risksToCheck:`Atriði til að staðfesta`,openSource:`Opna heimild`,sourceLinkMissing:`Heimildartengil vantar`,strongMatch:`Sterk samsvörun`,goodMatch:`Góð samsvörun`,possibleMatch:`Möguleg samsvörun`,weakMatch:`Veik samsvörun`,confirmedTender:`Staðfest útboð`,likelyOpportunity:`Líklegt tækifæri`,earlySignal:`Væntanlegt tækifæri`,needsReview:`Þarfnast staðfestingar`,tenderAwarded:`Útboði lokið / samið`,tenderAlreadyAnnounced:`Útboð þegar auglýst`,upcomingTender:`Væntanlegt útboð`,projectSignal:`Verkefnavísbending`,nationalOpportunity:`Landsdekkandi tækifæri`,localMatch:`Staðbundin samsvörun`,mentionsService:`Nefnir þjónustu ykkar: {value}`,containsKeyword:`Inniheldur leitarorð: {value}`,procurement:`innkaup`},en:{navDashboard:`Dashboard`,navReport:`Report`,navPricing:`Pricing`,navSettings:`Settings`,navHowItWorks:`How it works`,navSampleReport:`Sample report`,login:`Login`,logout:`Logout`,getStarted:`Get a trial`,setupCompany:`Set up company`,createProfile:`Create profile`,companyProfile:`Company profile`,noCompanyProfile:`No company`,openMenu:`Open menu`,closeMenu:`Close menu`,privacyPolicy:`Privacy`,termsOfService:`Terms`,dataSources:`Data sources`,cookies:`Cookies`,security:`Security`,contact:`Contact`,footerText:`Tender and opportunity monitoring for businesses. VerkRadar helps you find and review public opportunities, but source documents remain the authority.`,loadingLabel:`Loading VerkRadar`,heroEyebrow:`Tender intelligence for working contractors`,heroTitle:`Stop losing valuable jobs to tabs you never opened.`,heroText:`VerkRadar monitors public sources and returns a short report of opportunities that may fit your trades and service areas.`,createFreeDemoProfile:`Get a trial report`,viewSampleReport:`View sample report`,proofStrong:`Contractors find relevant opportunities faster.`,proofText:`Top matches often include tenders outside the main databases.`,bestOpenMatch:`Shortlist`,tender:`Tender`,deadlineRisk:`Deadline risk`,daysLeft:`{count} days left`,problemEyebrow:`The problem`,problemTitle:`Opportunities are often lost before bidding starts.`,problemOneTitle:`Deadlines show up after your crew is already booked.`,problemOneText:`A short response window becomes a scramble, or a valuable contract never gets priced.`,problemTwoTitle:`The search takes longer than the go/no-go call.`,problemTwoText:`Owners spend hours opening low-fit tenders instead of seeing value, location, requirements and match reasons in one view.`,targetEyebrow:`Who it is for`,targetTitle:`Built for Icelandic companies that need to find the right jobs earlier.`,targetText:`VerkRadar is for teams that want to monitor tenders, quote requests and project signals without checking the same websites manually every day.`,solutionEyebrow:`The solution`,solutionTitle:`One clear report instead of scattered searching.`,solutionText:`VerkRadar turns tender noise into a ranked list of possible opportunities your business should review.`,createProfileStep:`1. We set up a profile`,createProfileStepText:`We register the services, regions, keywords and project sizes that fit your company.`,matchProjectsStep:`2. Find opportunities`,matchProjectsStepText:`The system checks which opportunities may fit the company profile.`,getReportStep:`3. Get report`,getReportStepText:`Receive a clear weekly report with deadlines and next steps.`,sampleReportEyebrow:`Sample report`,sampleReportTitle:`A shortlist that shows what is worth checking.`,sampleReportText:`Preview how VerkRadar ranks tenders and possible opportunities by service, region, deadline and reasons.`,sourceDisclaimer:`VerkRadar helps prioritize opportunity review. Original tender documents are always the final authority.`,pricingEyebrow:`PRICING`,pricingHeadline:`Simple pricing for tender monitoring`,pricingSubtitle:`Start with a trial. We set up a company profile and send a report if relevant opportunities are found.`,pricingTrialPlan:`Free trial`,pricingTrialPrice:`0 kr.`,pricingTrialSubtext:`during trial`,pricingMonitoringPlan:`VerkRadar Monitoring`,pricingMonitoringPrice:`9,900 kr/month`,pricingMonitoringSubtext:`for the first companies`,pricingCustomPlan:`Custom`,pricingCustomPrice:`Contact us`,pricingBadge:`Best for most businesses`,pricingTrialCta:`Get trial report`,pricingMonitoringCta:`Get a trial`,pricingCustomCta:`Contact us`,pricingTrialManualProfile:`Company profile set up manually`,pricingTrialFiltering:`Filtering by services and regions`,pricingTrialReportIfRelevant:`Trial report sent if relevant opportunities are found`,pricingTrialNoCommitment:`No commitment`,pricingTrialNoCard:`No credit card`,pricingMonitoringSources:`Monitoring of public tenders and opportunities`,pricingMonitoringEmail:`Short report sent by email`,pricingMonitoringFilters:`Filtering by services, regions and keywords`,pricingMonitoringReminders:`Reminders for important deadlines`,pricingMonitoringFeedback:`Profile updated based on feedback`,pricingOneProfile:`1 company profile`,pricingCustomProfiles:`More company profiles`,pricingCustomServices:`More service areas or regions`,pricingCustomMonitoring:`Custom monitoring`,pricingCustomPriorityReview:`Priority review`,pricingCustomAudience:`For larger contractors or service companies`,trialRequestEyebrow:`TRIAL`,trialRequestTitle:`Get a trial report`,trialRequestSubtitle:`Tell us a little about your company. We will review the information and set up a trial profile if this fits.`,trialCompany:`Company`,trialContact:`Contact person`,trialEmail:`Email`,trialPhone:`Phone`,trialServices:`What services do you provide?`,trialRegions:`Which regions do you want to monitor?`,trialNotes:`Notes`,trialCompanyPlaceholder:`Company name`,trialContactPlaceholder:`Contact name`,trialEmailPlaceholder:`name@company.is`,trialPhonePlaceholder:`555 1234`,trialServicesPlaceholder:`Example: earthworks, plumbing, electrical work, winter service...`,trialRegionsPlaceholder:`Example: Reykjavík, South Iceland or nationwide`,trialNotesPlaceholder:`Anything else that helps us set up the right profile`,trialRequestIntro:`Fill in the basic company details. We will review the request and follow up if VerkRadar is a good fit.`,trialRequestHelper:`We will review the information and set up a trial profile if this fits.`,trialRequestSubmit:`Send request`,trialRequestSubmitting:`Sending request...`,optionalField:`optional`,trialCompanyRequired:`Please enter the company name.`,trialContactRequired:`Please enter a contact person.`,trialEmailRequired:`Please enter a valid email address.`,trialEmailInvalid:`Please enter a valid email address.`,trialServicesRequired:`Please describe the services your company provides.`,trialRequestSuccess:`Thanks. We will review the information and follow up if VerkRadar fits your services.`,trialRequestError:`Could not submit the request. Please try again or email us.`,publicSignupUnavailableTitle:`Accounts are created through an invite`,publicSignupUnavailableText:`Want a trial? Fill out the form here.`,publicSignupUnavailableHelp:`VerkRadar is set up manually for trial companies. We create access when the company profile is ready.`,authLoginTitle:`Login to VerkRadar`,authLoginSubtitle:`Access your company dashboard, saved opportunities and weekly reports.`,email:`Email`,password:`Password`,forgotPassword:`Forgot password?`,loggingIn:`Logging in...`,newToVerkRadar:`New to VerkRadar?`,createAccount:`Create account`,createAccountTitle:`Create your VerkRadar account`,createAccountSubtitle:`Start by creating an account. Then you’ll create your company profile.`,inviteCreateAccountSubtitle:`Create an account to connect to the company profile that has already been set up.`,authRequiredTitle:`Log in to continue`,authRequiredText:`This page is available after you sign in.`,alreadyLoggedInTitle:`Already logged in`,alreadyLoggedInText:`Redirecting you to the next step.`,signupCreatedConfirm:`Account created. Check your email to confirm your account.`,inviteSignupCreatedConfirm:`Confirm your email, then return here to activate company access.`,inviteSignupEmailHelp:`Use the invited email to connect your login to the right company.`,signupExistingAccount:`This email already has an account. Log in or reset your password.`,signupNeutralNextSteps:`If an account exists for this email, you’ll receive an email with next steps. Otherwise, a new account has been created.`,emailOrPasswordIncorrect:`Email or password is incorrect.`,confirmEmailBeforeLogin:`Please confirm your email before logging in.`,passwordTooShort:`Password must be at least 6 characters.`,tooManyAttempts:`Too many attempts. Please wait a moment and try again.`,couldNotCreateAccount:`Could not create account. Please check your email and password.`,couldNotLogin:`Could not log in. Please try again.`,creating:`Creating...`,alreadyHaveAccount:`Already have an account?`,passwordReset:`Password reset`,resetPasswordTitle:`Reset your password`,resetPasswordSubtitle:`Enter your email and VerkRadar will send a secure reset link if the account exists.`,sending:`Sending...`,sendResetLink:`Send reset link`,rememberedPassword:`Remembered your password?`,backToLogin:`Back to login`,newPassword:`New password`,chooseNewPassword:`Choose a new password`,resetPasswordHelp:`Set a new password for your VerkRadar account. If the link has expired, request a new reset link.`,confirmNewPassword:`Confirm new password`,updating:`Updating...`,updatePassword:`Update password`,needNewLink:`Need a new link?`,sendAnotherResetLink:`Send another reset link`,onboarding:`SETUP`,onboardingTitle:`Set up your company`,onboardingText:`Tell us what your company does so VerkRadar can find relevant opportunities.`,companyBasics:`1. Basic information`,accountAccess:`Account access`,loginEmail:`Login email`,loginEmailHelper:`The login email is tied to the user account and may differ from the company contact or billing email.`,companyName:`Company name`,kennitala:`Kennitala`,contactEmail:`Contact email`,billingEmail:`Billing email`,contactName:`Contact name`,phone:`Phone`,address:`Address`,website:`Website`,industry:`Industry`,selectIndustry:`Select industry`,selectedPlan:`Selected plan`,plan_basic:`Basic`,plan_pro:`Pro`,plan_priority:`Priority`,servicesAndKeywords:`2. Services and keywords`,servicesHint:`Add services you actually provide. Start with the most important ones.`,servicesLabel:`Services`,servicesHelper:`Add the services your company actually sells. More specific services create better matches.`,extraWords:`Keywords`,includeKeywordsHelper:`Use words that often appear in opportunities you want.`,excludeWords:`Words that should lower or remove bad matches.`,excludeKeywordsHelper:`Words that should lower or remove bad matches.`,suggestedServicesFor:`Suggested services for {industry}`,suggestedKeywordsFor:`Suggested keywords for {industry}`,selectIndustryForServices:`Select an industry to see service suggestions`,selectIndustryForKeywords:`Select an industry to see keyword suggestions`,locationsTitle:`3. Locations`,locationsHint:`Use All Iceland for national tenders. Use travel settings when you can bid outside your base area for the right project size.`,baseLocation:`Base location`,baseLocationPlaceholder:`Example: East Iceland`,serviceAreas:`Service areas, comma separated`,serviceAreasPlaceholder:`Example: East Iceland, All Iceland`,selectServiceAreas:`Select service areas`,noServiceAreasSelected:`No areas selected`,serviceAreasSelected:`{count} areas selected`,done:`Done`,resetTrialTitle:`Reset trial account`,resetTrialText:`This clears your profile, saved opportunities and ignored opportunities, and returns the trial account to its original state.`,resetTrialButton:`Reset trial data`,resetTrialConfirm:`Are you sure you want to reset the trial data?`,travelScope:`Travel and scope`,willingToTravel:`Willing to travel for the right project`,includeNational:`Include national / All Iceland opportunities`,includeRemote:`Include remote / online opportunities`,minimumTravelValue:`Minimum project value for travel`,projectSize:`4. Settings`,minimumValue:`Minimum value`,maximumValue:`Maximum value`,showUnknownValue:`Show opportunities even if value is unknown`,reportPreferences:`Report preferences`,frequency:`Frequency`,weekly:`Weekly`,daily:`Daily`,reportDay:`Report day`,deadlineReminders:`Deadline reminders`,includeLowConfidence:`Include low-confidence matches`,saveProfile:`Save profile`,saving:`Saving...`,saved:`Saved`,dashboard:`Dashboard`,welcomeCompany:`Welcome, {company}`,dashboardIntro:`Ranked project opportunities based on your services, locations and keywords. {refresh}`,matchesLastRefreshed:`Last refreshed {time}.`,matchesAutoRefresh:`Matches refresh automatically after profile saves.`,refreshMatches:`Refresh matches`,refreshing:`Refreshing...`,viewWeeklyReport:`View report`,strongMatches:`Strong matches`,closingSoon:`Closing soon`,savedLabel:`Saved`,totalPotentialValue:`Total potential value`,searchOpportunities:`Search opportunities...`,savedOnly:`Saved only`,improveProfile:`Improve profile`,includeNationalOpportunities:`Include national opportunities`,showAllStoredMatches:`Show all matches`,inspectAllOpportunities:`Inspect all opportunities`,details:`Details`,save:`Save`,ignore:`Ignore`,originalLanguage:`Original language`,extractedProject:`Extracted project`,reportTitle:`Tender and opportunity report`,setupCompanyFirst:`Set up your company first`,reportNeedsProfile:`The report needs a company profile before it can generate relevant opportunity matches.`,dashboardNeedsProfile:`The dashboard needs a company profile so it can calculate relevant opportunity matches.`,weeklyReport:`Report`,saveReport:`Save report`,savingReport:`Saving...`,downloadPdf:`Download PDF`,copyReport:`Copy report`,reportArchive:`Report archive`,savedReports:`Saved reports`,loadingSavedReports:`Loading saved reports...`,noSavedReports:`No saved reports yet.`,viewReport:`View report`,closeReport:`Close report`,generatedBy:`Generated by VerkRadar`,reportForCompany:`Tender and opportunity report for {company}`,openTenders:`Open tenders / quote requests`,upcomingOpportunities:`Possible upcoming opportunities`,openTendersDescription:`Clear procurement intent. Review source documents before acting.`,upcomingDescription:`Upcoming procurement or project signals with clear evidence.`,reportFooter:`VerkRadar helps prioritise public opportunity review. Always check the original source documents, deadlines, requirements and eligibility before acting.`,buyer:`Buyer`,source:`Source`,description:`Description`,requirements:`Requirements`,noSpecificRequirements:`No specific requirements listed.`,noDescription:`No description available.`,noMatchReasons:`No match reasons available.`,matchReasons:`Match reasons`,opportunityInfo:`Opportunity info`,extraction:`Extraction`,sourceArticle:`Source article`,parentArticle:`Parent article`,openSourceArticle:`Open source article`,extractedRegion:`Extracted region`,projectNumber:`Project number`,tenderState:`Tender state`,quality:`Quality`,category:`Category`,type:`Type`,published:`Published`,cpv:`CPV`,recommendedNextSteps:`Recommended next steps`,noMajorRisks:`No major risks detected in this data.`,openSourceAndConfirm:`Open the source notice and confirm eligibility.`,removeFromSaved:`Remove from saved`,saveOpportunity:`Save opportunity`,markNotRelevant:`Mark not relevant`,publicProcurement:`Public procurement`,area:`Location`,deadline:`Deadline`,estimatedValue:`Estimated value`,notFound:`Not found`,notListed:`Not listed`,unknownBuyer:`Unknown buyer`,allIceland:`All Iceland`,whyThisMatters:`Why this matters`,risksToCheck:`Risks / things to check`,openSource:`Open source`,sourceLinkMissing:`Source link missing`,strongMatch:`Strong match`,goodMatch:`Good match`,possibleMatch:`Possible match`,weakMatch:`Weak match`,confirmedTender:`Confirmed tender`,likelyOpportunity:`Likely opportunity`,earlySignal:`Early signal`,needsReview:`Needs review`,tenderAwarded:`Tender awarded`,tenderAlreadyAnnounced:`Tender already announced`,upcomingTender:`Upcoming tender`,projectSignal:`Project signal`,nationalOpportunity:`National opportunity`,localMatch:`Local match`,mentionsService:`Mentions your service: {value}`,containsKeyword:`Contains your keyword: {value}`,procurement:`procurement`}};function n(e){let t=localStorage.getItem(e.language);return t===`en`||t===`is`?t:`is`}function r(e,n,r={}){let i=t[e||`is`]||t.is,a=t.en[n]||t.is[n]||n;return String(i[n]||a).replace(/\{(\w+)\}/g,(e,t)=>r[t]??``)}var i=`https://verkradar.is`;function a(){if(typeof window>`u`)return i;let e=c(window.VERKRADAR_APP_URL);if(e)return e;let t=window.location?.origin||`https://verkradar.is`,n=window.location?.hostname||``;return l(n)?t:n===`verkradar.is`||n===`www.verkradar.is`||n.endsWith(`.vercel.app`)?i:t}function o(e=`/`){let t=String(e||`/`).startsWith(`/`)?String(e||`/`):`/${e}`;return`${a()}${t}`}function s(e=`/`){let t=String(e||`/`).startsWith(`/`)?String(e||`/`):`/${e}`;return`${a()}/#${t}`}function c(e){let t=String(e||``).trim();if(!t)return``;try{return new URL(t).origin}catch{return``}}function l(e){return[`localhost`,`127.0.0.1`,`::1`].includes(String(e||``).toLowerCase())}var u={services:{Electrical:[`raflagnir`,`rafvirki`,`brunakerfi`,`öryggiskerfi`,`lýsing`,`viðhald`,`þjónusta`,`hleðslustöðvar`,`töflusmíði`,`rafmagnseftirlit`],"IT / Web / Software":[`vefsíðugerð`,`vefhönnun`,`hugbúnaðarþróun`,`kerfisþróun`,`vefverslun`,`aðgengi`,`CMS`,`gagnagrunnar`,`viðhald`,`ráðgjöf`],Cleaning:[`Office cleaning`,`School cleaning`,`Facility cleaning`,`Window cleaning`,`Deep cleaning`,`Floor care`,`Municipal cleaning`,`Regular cleaning contracts`],Transport:[`Passenger transport`,`Goods transport`,`Healthcare transport`,`School transport`,`Shuttle services`,`Delivery services`,`Framework transport services`],Construction:[`jarðvinna`,`gatnagerð`,`vegagerð`,`malbikun`,`brúargerð`,`lagnavinna`,`framkvæmdir`,`viðhald`,`steypa`,`húsbyggingar`,`þakvinna`]},includeKeywords:{Electrical:[`rafmagn`,`rafvirki`,`brunakerfi`,`hleðslustöð`,`öryggiskerfi`,`myndavélakerfi`,`lýsing`,`viðhald`,`lagnir`,`neyðarlýsing`]}},d={companyName:`RafFix ehf.`,contactEmail:`owner@raffix.is`,website:`https://raffix.is`,industry:`Electrical`,services:[`electrical installation`,`maintenance`,`fire alarm systems`,`EV chargers`],includeKeywords:[`charging`,`inspection`,`public buildings`],excludeKeywords:[`telecom`,`snow removal`],locations:[`Reykjavík`,`Capital Area`,`Suðurnes`,`Remote / Online`],minProjectValue:5e5,maxProjectValue:3e7,allowUnknownValue:!0,reportFrequency:`weekly`,reportDay:`monday`,deadlineReminders:!0,includeLowConfidence:!1,autoAlertMode:`auto_safe_only`};function f(e=``){return{companyName:``,kennitala:``,contactEmail:e||``,billingEmail:e||``,contactName:``,phone:``,address:``,website:``,industry:``,selectedPlan:`basic`,billingStatus:`trial`,trialStartedAt:``,trialEndsAt:``,services:[],includeKeywords:[],excludeKeywords:[],locations:[],baseLocation:``,serviceAreas:[],willingToTravel:!1,nationalProjects:!1,remoteProjects:!1,minimumProjectValueForTravel:``,minProjectValue:``,maxProjectValue:``,allowUnknownValue:!0,reportFrequency:`weekly`,reportDay:`monday`,deadlineReminders:!0,includeLowConfidence:!1,autoAlertMode:`auto_safe_only`}}var p=`companyName.kennitala.contactEmail.billingEmail.contactName.phone.address.website.industry.selectedPlan.billingStatus.services.includeKeywords.excludeKeywords.locations.baseLocation.serviceAreas.willingToTravel.nationalProjects.remoteProjects.minimumProjectValueForTravel.minProjectValue.maxProjectValue.allowUnknownValue.reportFrequency.reportDay.deadlineReminders.includeLowConfidence.autoAlertMode`.split(`.`);async function m(e,t,n,r,i){if(!e||!t||!i?.id)return{changedFields:[],inserted:!1};let a=h(n||{}),o=h(r||{}),s=p.filter(e=>JSON.stringify(a[e]??null)!==JSON.stringify(o[e]??null));if(!s.length)return{changedFields:s,inserted:!1};let{error:c}=await e.from(`company_profile_change_log`).insert({company_id:t,changed_by:i.id,changed_by_email:i.email||null,source:`client`,changed_fields:s,previous_values:g(a,s),new_values:g(o,s)});if(c)throw c;return{changedFields:s,inserted:!0}}function h(e){return p.reduce((t,n)=>{let r=e[n];return t[n]=Array.isArray(r)?[...r].map(String).filter(Boolean).sort():ee(r),t},{})}function ee(e){return e==null?``:typeof e==`boolean`?e:typeof e==`number`?Number.isFinite(e)?e:null:String(e).trim()}function g(e,t){return t.reduce((t,n)=>(t[n]=e[n]??null,t),{})}function te(e,t=`is`){let n=t===`is`;return{privacy:n?{eyebrow:`Lög og traust`,title:`Persónuvernd`,intro:`Hér er útskýrt á einföldu máli hvaða gögn VerkRadar vistar og hvernig þau eru notuð til að veita þjónustuna.`,sections:[[`Persónuvernd`,[`VerkRadar er vöktunar- og yfirlitskerfi fyrir fyrirtæki. Kerfið notar gögn sem notandi setur inn og opinber gögn um útboð og verkefni til að hjálpa fyrirtækjum að finna það sem gæti passað.`]],[`Hvaða gögn eru vistuð`,[`VerkRadar getur vistað fyrirtækjaheiti, tengiliðanetfang, vefslóð, atvinnugrein, þjónustuflokka, staðsetningar, leitarorð, stillingar, vistuð og hunsuð verkefni, samsvaranir og yfirlit.`,`Kerfið vistar einnig innskráningar- og lotugögn sem þarf til að halda notendum innskráðum og vernda aðgang.`]],[`Innskráning og aðgangur`,[`Notendur skrá sig inn með auðkenndum aðgangi. Aðgangur að mælaborði, stillingum og skýrslum er tengdur við notanda og fyrirtæki eftir því sem við á.`]],[`Fyrirtækjaprófíll og stillingar`,[`Fyrirtækjaprófíllinn er notaður til að bera opinber verkefni saman við þjónustu, svæði, lykilorð og óskir fyrirtækisins. Betri prófíll gefur yfirleitt betri samsvörun.`]],[`Vistuð og hunsuð tækifæri`,[`VerkRadar getur vistað hvaða verkefni notandi vistar, fylgist með eða hunsar. Þetta er notað til að bæta upplifun, síur og yfirlit.`]],[`Vafrakökur og vafrageymsla`,[`VerkRadar notar nauðsynlega vafrageymslu, lotugeymslu og sambærilega virkni fyrir innskráningu, Supabase Auth lotur, tungumál, stillingar og grunnvirkni appsins.`,`Við gerum ekki ráð fyrir auglýsinga- eða rekjanlegri markaðssetningargeymslu í þessari útgáfu. Ef greiningar eða auglýsingatól verða síðar bætt við þarf að uppfæra þessa lýsingu.`]],[`Hafa samband`,[`Spurningar um persónuvernd eða gögn má senda á info@verkradar.is.`]]]}:{eyebrow:`Legal and trust`,title:`Privacy`,intro:`This page explains in practical terms what VerkRadar stores and how that data is used to provide the service.`,sections:[[`Privacy`,[`VerkRadar is a monitoring and reporting tool for businesses. It uses user-entered company data and public tender/project data to help companies find relevant opportunities.`]],[`What data is stored`,[`VerkRadar may store company name, contact email, website, industry, service categories, locations, keywords, settings, saved and ignored opportunities, matches, and reports.`,`The system also stores login and session data needed to keep users signed in and protect account access.`]],[`Login and access`,[`Users log in with authenticated accounts. Access to dashboards, settings, and reports is connected to the user and company where applicable.`]],[`Company profile and settings`,[`The company profile is used to compare public opportunities against services, locations, keywords, and company preferences. A better profile usually creates better matches.`]],[`Saved and ignored opportunities`,[`VerkRadar may store which opportunities a user saves, watches, or ignores. This is used to improve the experience, filters, and reports.`]],[`Cookies and browser storage`,[`VerkRadar uses essential browser storage, session storage, and similar functionality for login, Supabase Auth sessions, language, preferences, and core app functionality.`,`We do not currently claim to use advertising or marketing tracking storage in this version. If analytics or advertising tools are added later, this section should be updated.`]],[`Contact`,[`Questions about privacy or data can be sent to info@verkradar.is.`]]]},terms:n?{eyebrow:`Lög og traust`,title:`Skilmálar`,intro:`Þessir skilmálar lýsa notkun VerkRadar á einföldu máli. Þeir eru ekki endanleg lögfræðiráðgjöf.`,sections:[[`Skilmálar`,[`Með því að nota VerkRadar samþykkir notandi að nota þjónustuna á ábyrgan hátt og staðfesta alltaf upplýsingar á upprunalegri heimild áður en brugðist er við.`]],[`Þjónustan`,[`VerkRadar vaktar opinberar heimildir, útboðsvefi, sveitarfélagssíður og aðrar heimildir þar sem það er heimilt og tæknilega mögulegt. Kerfið raðar verkefnum eftir fyrirtækjaprófíl og býr til mælaborð eða yfirlit.`]],[`Upprunaleg gögn eru endanleg heimild`,[`VerkRadar hjálpar til við að forgangsraða yfirferð opinberra tækifæra. Upprunaleg útboðsgögn, skilafrestir, kröfur og hæfisskilyrði á upprunalegri heimild eru alltaf endanleg heimild.`]],[`Engin trygging um fullkomna vöktun`,[`VerkRadar tryggir ekki að öll útboð finnist, að öll gögn séu fullkomin, að samsvörun sé alltaf rétt eða að fyrirtæki uppfylli skilyrði eða vinni verk.`]],[`Prufuaðgangur og verð`,[`Prufuaðgangur, verð, greiðslur og uppsagnir ráðast af verðsíðu, pöntunarsíðu eða skriflegu samkomulagi hverju sinni.`]],[`Uppsögn`,[`Notandi getur óskað eftir lokun eða breytingu á aðgangi. VerkRadar getur takmarkað aðgang ef þjónustan er misnotuð, greiðslur vantar eða öryggisáhætta kemur upp.`]],[`Ábyrgðartakmörkun`,[`VerkRadar ber ekki ábyrgð á töpuðum skilafrestum, röngum upplýsingum á upprunalegum heimildum, viðskiptatapi eða ákvörðunum sem teknar eru út frá yfirlitum án staðfestingar á frumgögnum.`]],[`Hafa samband`,[`Spurningar um skilmála má senda á info@verkradar.is.`]]]}:{eyebrow:`Legal and trust`,title:`Terms`,intro:`These terms describe VerkRadar use in plain language. They are not final legal advice.`,sections:[[`Terms`,[`By using VerkRadar, users agree to use the service responsibly and always verify information at the original source before acting.`]],[`The service`,[`VerkRadar monitors public sources, procurement portals, municipal pages, and other sources where allowed and technically feasible. The system ranks opportunities against company profiles and creates dashboards or reports.`]],[`Original data is the final authority`,[`VerkRadar helps prioritize review of public opportunities. Original tender documents, deadlines, requirements, and eligibility criteria at the original source are always the final authority.`]],[`No guarantee of complete monitoring`,[`VerkRadar does not guarantee that every tender is found, that all data is complete, that matching is always correct, or that a company is eligible for or will win any contract.`]],[`Trial access and pricing`,[`Trial access, pricing, billing, and cancellation are governed by the pricing page, order page, or written agreement in effect at the time.`]],[`Cancellation`,[`A user may request account changes or cancellation. VerkRadar may restrict access if the service is misused, payment is missing, or a security risk arises.`]],[`Limitation of liability`,[`VerkRadar is not responsible for missed deadlines, incorrect information at original sources, business losses, or decisions made from reports without checking source documents.`]],[`Contact`,[`Questions about these terms can be sent to info@verkradar.is.`]]]},data:n?{eyebrow:`Gagnaheimildir`,title:`Gagnaheimildir`,intro:`VerkRadar notar opinberar heimildir til að hjálpa fyrirtækjum að finna verkefni sem gætu skipt máli.`,sections:[[`Gagnaheimildir`,[`Kerfið safnar og samræmir opinberar upplýsingar þar sem slíkt er heimilt og tæknilega mögulegt.`]],[`Opinberar heimildir`,[`Heimildir geta verið útboðsvefir, opinberar stofnanir, RSS straumar, sveitarfélagssíður og aðrar opinberar síður.`]],[`Sveitarfélög og útboðsvefir`,[`VerkRadar getur vaktað sveitarfélög, innkaupa- og útboðsvefi og sértækar síður fyrir framkvæmdir, þjónustu eða innkaup.`]],[`Evrópsk útboð ef við á`,[`Evrópsk útboð geta verið sótt úr TED eða sambærilegum heimildum þegar þau eiga við markaðinn og fyrirtækjaprófíla.`]],[`Takmarkanir gagna`,[`Sumar heimildir veita ekki fulla skilafresti, verðmæti, kaupanda eða útboðsgögn í véllesanlegu formi. Gögn geta verið seinkuð, ófullkomin, tvítekin eða breytt á upprunalegri síðu.`]],[`Leiðréttingar`,[`Ef þú sérð rangar eða úreltar upplýsingar má senda ábendingu á info@verkradar.is. Opnið alltaf upprunalega heimild áður en brugðist er við.`]]]}:{eyebrow:`Data sources`,title:`Data sources`,intro:`VerkRadar uses public sources to help businesses find projects that may matter.`,sections:[[`Data sources`,[`The system collects and normalizes public information where allowed and technically feasible.`]],[`Public sources`,[`Sources can include procurement portals, public institutions, RSS feeds, municipal pages, and other official public pages.`]],[`Municipalities and procurement portals`,[`VerkRadar may monitor municipalities, procurement/tender portals, and specific pages for construction, services, or purchasing.`]],[`European tenders where applicable`,[`European tenders may be imported from TED or similar sources when relevant to the market and company profiles.`]],[`Data limitations`,[`Some sources do not provide full deadlines, values, buyer data, or tender documents in machine-readable form. Data may be delayed, incomplete, duplicated, or changed at the original source.`]],[`Corrections`,[`If you see incorrect or outdated information, send a correction to info@verkradar.is. Always open the original source before acting.`]]]},security:n?{eyebrow:`Öryggi`,title:`Öryggi`,intro:`VerkRadar notar innskráningu, aðgangsstýringu og aðskilnað gagna til að vernda fyrirtækjaupplýsingar.`,sections:[[`Öryggi`,[`Við reynum að halda öryggisupplýsingum hagnýtum og heiðarlegum. VerkRadar fullyrðir ekki um vottanir sem hafa ekki verið fengnar.`]],[`Innskráning`,[`Notendur skrá sig inn með auðkenndum aðgangi. Innskráning og lotur eru hluti af grunnvirkni appsins.`]],[`Aðgangsstýring`,[`Aðgangur að fyrirtækjagögnum, samsvörunum og skýrslum er aðgreindur eftir notanda og fyrirtæki þar sem það á við.`]],[`Fyrirtækjagögn`,[`Fyrirtækjaprófílar, stillingar og vistuð/hunsuð verkefni eru notuð til að veita þjónustuna og ættu ekki að vera sýnileg öðrum viðskiptavinum.`]],[`Admin aðgangur`,[`Admin verkfæri eru takmörkuð við skilgreinda stjórnendur og eru notuð til að fylgjast með heimildum, innflutningi, fyrirtækjum og handvirkri yfirferð.`]],[`Tilkynna vandamál`,[`Öryggisspurningar eða ábendingar má senda á info@verkradar.is.`]]]}:{eyebrow:`Security`,title:`Security`,intro:`VerkRadar uses authentication, access control, and data separation to protect company information.`,sections:[[`Security`,[`We try to keep security information practical and honest. VerkRadar does not claim certifications it has not obtained.`]],[`Login`,[`Users log in with authenticated accounts. Login and sessions are part of the app’s core functionality.`]],[`Access control`,[`Access to company data, matches, and reports is separated by user and company where applicable.`]],[`Company data`,[`Company profiles, settings, and saved/ignored opportunities are used to provide the service and should not be visible to other customers.`]],[`Admin access`,[`Admin tools are restricted to defined administrators and are used to monitor sources, imports, companies, and manual review.`]],[`Report an issue`,[`Security questions or reports can be sent to info@verkradar.is.`]]]},contact:n?{eyebrow:`Hafa samband`,title:`Hafa samband`,intro:`Viltu prófa VerkRadar, spyrja um vöktun eða senda okkur ábendingu?`,sections:[]}:{eyebrow:`Contact`,title:`Contact`,intro:`Want to try VerkRadar, ask about monitoring, or send us a note?`,sections:[]}}[e]}var _=`https://asojxjbsgqbfpbepojzh.supabase.co`,v=`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFzb2p4amJzZ3FiZnBiZXBvanpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAwNTU2NjgsImV4cCI6MjA5NTYzMTY2OH0.yPA34VbqWqKrBPespmHr5AojYzjhy3kGRxswO9XdAd0`,y=window.supabase?window.supabase.createClient(_,v,{auth:{flowType:`pkce`,detectSessionInUrl:!0,persistSession:!0,autoRefreshToken:!0}}):null,b=`verkradar_pending_invite_token`,ne=`verkradar_pending_invite_flow`,x=`verkradar_legacy_pending_invite_token`,S=`vr_debug_invite`,C=1e3*60*60*24*7;function re(e){return String(e||``).trim().toLowerCase()}function ie(){return window.VERKRADAR_COMPANY_INVITE_URL?window.VERKRADAR_COMPANY_INVITE_URL:window.VERKRADAR_SUPABASE_URL?`${window.VERKRADAR_SUPABASE_URL}/functions/v1/company-invite`:`${_}/functions/v1/company-invite`}function w(e){let t=String(e||``),n=t.includes(`?`)?t.slice(t.indexOf(`?`)+1):``,r=new URLSearchParams(n);return T(r.get(`token`)||r.get(`invite`)||``)}function T(e){return String(e||``).split(`#`)[0].trim()}function ae(){let e=new URL(window.location.href),t=e.searchParams,n=window.location.hash||``,r=n.indexOf(`#`,1),i=r>=0?n.slice(r+1):``,a=new URLSearchParams(i||n.replace(/^#/,``)),o=n.replace(/^#/,``)||``,s=o.includes(`?`)?o.slice(o.indexOf(`?`)+1):``,c=new URLSearchParams(s),l=t.get(`invite`)||t.get(`token`)||c.get(`token`)||c.get(`invite`)||``,u=T(l||he()),d=t.get(`code`)||``,f=a.get(`access_token`)||``,p=a.get(`refresh_token`)||``;return{isCallbackPath:e.pathname===`/auth/callback`,invite:u,code:d,accessToken:f,refreshToken:p,hasImplicitTokens:!!(f&&p),rawTokenHadFragment:String(l||``).includes(`#`)}}function oe(e=``){let t=new URL(o(`/auth/callback`)),n=T(e);return n&&t.searchParams.set(`invite`,n),t.toString()}function se(e=``){let t=T(e),n=t?`/#/accept-invite?token=${encodeURIComponent(t)}`:`/#/`;return window.history.replaceState(null,``,`${a()}${n}`),t?`/accept-invite?token=${encodeURIComponent(t)}`:`/`}function ce(){try{return localStorage.getItem(S)===`1`}catch{return!1}}function le(e){let t=w(e),n=Te(),r=t?`url`:n.sessionToken?`sessionStorage`:n.localToken?`localStorage`:`missing`,i=t||n.sessionToken||n.localToken||``;return{current_url:Ee(window.location.href),current_hash:Ee(window.location.hash||``),token_source:r,token_present:!!i,token_length:i.length,localStorage_pending_token_present:!!n.localToken,sessionStorage_pending_token_present:!!n.sessionToken}}async function ue(e=``){try{let{data:t,error:n}=y?await y.auth.getSession():{data:{session:null},error:null},r=t?.session?.user||null;return{auth_session_present:!!(t?.session&&!n),auth_user_id_present:!!r?.id,auth_user_email:r?.email||``,email_confirmed_at_present:!!(r?.email_confirmed_at||r?.confirmed_at),auth_event_received:e||``,access_token_present:!!t?.session?.access_token}}catch(t){return{auth_session_present:!1,auth_user_id_present:!1,auth_user_email:``,email_confirmed_at_present:!1,auth_event_received:e||``,access_token_present:!1,auth_error:t instanceof Error?t.message:String(t||`Unknown auth error`)}}}function de(e){return je(e)===`/accept-invite`}function fe(e){let t=je(e);return[`/login`,`/signup`,`/forgot-password`].includes(t)&&!!w(e)}function pe(e){return de(e)||fe(e)||Me(e)&&!!he()}function me(e){return pe(e)?w(e)||he():(ve(),``)}function he(){try{localStorage.removeItem(x)}catch{}try{let e=sessionStorage.getItem(b)||``;if(e)return e;let t=JSON.parse(localStorage.getItem(ne)||`null`);return!t?.token||!t?.expires_at||new Date(t.expires_at).getTime()<Date.now()?(localStorage.removeItem(ne),``):T(t.token||``)}catch{return``}}function ge(e){if(w(e))return`url`;let t=Te();return t.sessionToken?`sessionStorage`:t.localToken?`localStorage`:`missing`}function _e(e){let t=T(e);try{t&&(sessionStorage.setItem(b,t),localStorage.setItem(ne,JSON.stringify({token:t,created_at:new Date().toISOString(),expires_at:new Date(Date.now()+C).toISOString()})))}catch{}return t}function ve(){try{sessionStorage.removeItem(b),localStorage.removeItem(ne),localStorage.removeItem(x)}catch{}}function ye(e){let t=T(e);return t?s(`/accept-invite?token=${encodeURIComponent(t)}`):``}async function be(e){let t=ie();if(!t)throw Error(`Company invite function is not configured.`);let n=await fetch(t,{method:`POST`,headers:we(),body:JSON.stringify({action:`preview`,token:e})}),r=await ke(n),i={preview_request_sent:!0,preview_status:n.status,preview_response_body:De(r)};if(!n.ok){let e=Error(r.error||r.message||`Invite preview failed with status ${n.status}`);throw e.details={...r,__http_status:n.status,__debug:i},e}return{...r,__debug:i}}async function xe(e){let t=ie();if(!t)throw Error(`Company invite function is not configured.`);let n;try{n=await Oe()}catch(e){let t=Error(e instanceof Error?e.message:`You must be logged in to accept this invite.`);throw t.details={code:`no_session`,diagnostics:{accept_request_sent:!1,authorization_header_included:!1,accept_error_reason:`no_session`}},t}let r=await fetch(t,{method:`POST`,headers:n.headers,body:JSON.stringify({action:`accept`,token:e})}),i=await ke(r),a={...n.diagnostics,accept_request_sent:!0,authorization_header_included:!!n.headers.authorization,accept_http_status:r.status,accept_response_body:De(i)};if(!r.ok){let e=Error(i.error||i.message||`Invite acceptance failed with status ${r.status}`);throw e.details={...i,__http_status:r.status,__debug:a},e}return{...i,__debug:a}}async function Se(e,t,n={}){let r=String(n.token||``).trim();if(r)return[await xe(r)];let i=re(t?.email);if(!e||!t?.id||!i||n.allowEmailClaim!==!0)return[];let{data:a,error:o}=await e.from(`company_members`).select(`id, company_id, email, role, status`).eq(`email_normalized`,i).eq(`status`,`invited`);if(o)throw o;let s=a||[];if(!s.length)return[];let c=[];for(let n of s){let{data:r,error:a}=await e.from(`company_members`).update({user_id:t.id,status:`active`,accepted_at:new Date().toISOString(),revoked_at:null,updated_at:new Date().toISOString()}).eq(`id`,n.id).eq(`email_normalized`,i).eq(`status`,`invited`).select(`id, company_id, email, role, status, accepted_at`).maybeSingle();if(a)throw a;r&&c.push(r)}return c}async function Ce(e,t){if(!e||!t?.id)return[];let{data:n,error:r}=await e.from(`company_members`).select(`id, company_id, email, role, status, accepted_at`).eq(`user_id`,t.id).eq(`status`,`active`).order(`accepted_at`,{ascending:!0});if(r)throw r;return n||[]}function we(){let e={"content-type":`application/json`},t=window.VERKRADAR_SUPABASE_ANON_KEY||`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFzb2p4amJzZ3FiZnBiZXBvanpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAwNTU2NjgsImV4cCI6MjA5NTYzMTY2OH0.yPA34VbqWqKrBPespmHr5AojYzjhy3kGRxswO9XdAd0`;return t&&(e.apikey=t),e}function Te(){let e={sessionToken:``,localToken:``};try{e.sessionToken=T(sessionStorage.getItem(b)||``)}catch{}try{let t=JSON.parse(localStorage.getItem(ne)||`null`);t?.token&&t?.expires_at&&new Date(t.expires_at).getTime()>=Date.now()&&(e.localToken=T(t.token||``))}catch{}return e}function Ee(e){return String(e||``).replace(/([?&](?:token|invite)=)[^&#]+/gi,`$1[redacted]`)}function De(e){if(!e||typeof e!=`object`)return e||null;let{diagnostics:t,ok:n,status:r,code:i,error:a,message:o,company_name:s,invited_email:c,role:l,expires_at:u,company_id:d}=e;return{ok:n,status:r,code:i,error:a,message:o,company_name:s,invited_email:c,role:l,expires_at:u,company_id:d,diagnostics:t}}async function Oe(){let e=we(),{data:t,error:n}=y?await y.auth.getSession():{data:{session:null},error:null};if(n)throw n;let r=t.session?.access_token;if(!r)throw Error(`You must be logged in to accept this invite.`);e.authorization=`Bearer ${r}`;let i=Ae(r);return{headers:e,diagnostics:{session_user_id:t.session?.user?.id||``,session_user_email:t.session?.user?.email||``,bearer_jwt_sub:i.sub||``,bearer_jwt_email:i.email||``,bearer_jwt_iss:i.iss||``,bearer_jwt_exp:i.exp||``,session_user_matches_bearer_sub:!!(t.session?.user?.id&&i.sub&&t.session.user.id===i.sub),session_email_matches_bearer_email:!!(t.session?.user?.email&&i.email&&re(t.session.user.email)===re(i.email))}}}async function ke(e){let t=await e.text();if(!t)return{};try{return JSON.parse(t)}catch{return{error:t}}}function Ae(e){try{let t=String(e||``).split(`.`)[1]||``;if(!t)return{};let n=t.replace(/-/g,`+`).replace(/_/g,`/`),r=n.padEnd(Math.ceil(n.length/4)*4,`=`),i=decodeURIComponent(Array.from(atob(r)).map(e=>`%${e.charCodeAt(0).toString(16).padStart(2,`0`)}`).join(``));return JSON.parse(i)}catch{return{}}}function je(e){let t=String(e||`/`);return(t.startsWith(`/`)?t:`/${t}`).split(`?`)[0]||`/`}function Me(e){let t=String(e||``);return t.startsWith(`access_token=`)||t.startsWith(`code=`)||t.includes(`access_token=`)||t.includes(`code=`)||t.includes(`type=signup`)||t.includes(`type=email_change`)}function Ne(){return window.VERKRADAR_DAILY_PIPELINE_URL?window.VERKRADAR_DAILY_PIPELINE_URL:window.VERKRADAR_SUPABASE_URL?`${window.VERKRADAR_SUPABASE_URL}/functions/v1/daily-pipeline`:`${_}/functions/v1/daily-pipeline`}async function Pe(){let e=Ne();if(!e)throw Error(`Daily pipeline function is not configured. Set window.VERKRADAR_DAILY_PIPELINE_URL or window.VERKRADAR_SUPABASE_URL.`);let t=await Fe(),n=await fetch(e,{method:`POST`,headers:t,body:JSON.stringify({runDailyPipeline:!0})}),r=await Ie(n);if(!n.ok&&n.status!==207)throw Error(r.error||r.message||`Daily pipeline failed with status ${n.status}`);return r}async function Fe(){let e={"content-type":`application/json`},t=window.VERKRADAR_SUPABASE_ANON_KEY||`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFzb2p4amJzZ3FiZnBiZXBvanpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAwNTU2NjgsImV4cCI6MjA5NTYzMTY2OH0.yPA34VbqWqKrBPespmHr5AojYzjhy3kGRxswO9XdAd0`;t&&(e.apikey=t);let{data:n,error:r}=y?await y.auth.getSession():{data:{session:null},error:null};if(r)throw r;let i=n.session?.access_token;if(!i)throw Error(`You must be logged in as an admin to run the daily pipeline.`);return e.authorization=`Bearer ${i}`,e}async function Ie(e){let t=await e.text();if(!t)return{};try{return JSON.parse(t)}catch{return{error:t}}}function Le(e){let t=new FormData(e);return{companyName:E(t.get(`companyName`)),kennitala:E(t.get(`kennitala`)),contactName:E(t.get(`contactName`)),contactEmail:E(t.get(`contactEmail`)),notificationEmail:E(t.get(`notificationEmail`)),billingEmail:E(t.get(`billingEmail`)),services:D(t.get(`services`)),includeKeywords:D(t.get(`includeKeywords`)),excludeKeywords:D(t.get(`excludeKeywords`)),locations:D(t.get(`locations`)),serviceAreas:D(t.get(`serviceAreas`)),baseLocation:E(t.get(`baseLocation`)),opportunityCategories:D(t.get(`opportunityCategories`)),opportunityTypes:D(t.get(`opportunityTypes`)),preferredProjectTypes:D(t.get(`preferredProjectTypes`)),excludedProjectTypes:D(t.get(`excludedProjectTypes`)),subcontractingRelevant:t.get(`subcontractingRelevant`)===`on`,minimumRelevanceThreshold:Ve(t.get(`minimumRelevanceThreshold`),50),reportFrequency:E(t.get(`reportFrequency`))||`weekly`,reportDay:E(t.get(`reportDay`))||`monday`,deadlineReminders:t.get(`deadlineReminders`)===`on`,includeLowConfidence:t.get(`includeLowConfidence`)===`on`,billingStatus:E(t.get(`billingStatus`))||`trial`,selectedPlan:E(t.get(`selectedPlan`))||`basic`,coreServices:D(t.get(`coreServices`)),secondaryServices:D(t.get(`secondaryServices`)),excludedServices:D(t.get(`excludedServices`)),equipment:D(t.get(`equipment`)),certifications:D(t.get(`certifications`)),preferredBuyers:D(t.get(`preferredBuyers`)),maxTravelDistanceKm:He(t.get(`maxTravelDistanceKm`)),typicalProjectSize:E(t.get(`typicalProjectSize`)),profileNotesForAi:E(t.get(`profileNotesForAi`)),internalAdminNotes:E(t.get(`internalAdminNotes`))}}async function Re(e,t,n={}){let r=ze();if(!r)throw Error(`Admin company actions are not configured.`);let i=await Be(),a=await fetch(r,{method:`POST`,headers:i,body:JSON.stringify({companyId:e,action:`update_company_profile`,companyProfile:t,refreshMatches:!!n.refreshMatches})}),o=await a.json().catch(()=>({}));if(!a.ok||o?.success===!1||o?.error){let e=Error(o?.error||`Admin company profile update failed with status ${a.status}`);throw e.code=o?.code||`HTTP_${a.status}`,e.status=a.status,e.payload=o,e}return o}function ze(){return window.VERKRADAR_ADMIN_COMPANY_ACTIONS_URL?window.VERKRADAR_ADMIN_COMPANY_ACTIONS_URL:window.VERKRADAR_SUPABASE_URL?`${window.VERKRADAR_SUPABASE_URL}/functions/v1/admin-company-actions`:`${_}/functions/v1/admin-company-actions`}async function Be(){let e={"content-type":`application/json`},t=window.VERKRADAR_SUPABASE_ANON_KEY||`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFzb2p4amJzZ3FiZnBiZXBvanpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAwNTU2NjgsImV4cCI6MjA5NTYzMTY2OH0.yPA34VbqWqKrBPespmHr5AojYzjhy3kGRxswO9XdAd0`;t&&(e.apikey=t);let{data:n,error:r}=y?await y.auth.getSession():{data:{session:null},error:null};if(r)throw r;let i=n.session?.access_token;if(!i)throw Error(`You must be logged in as an admin to update a company profile.`);return e.authorization=`Bearer ${i}`,e}function E(e){return String(e||``).trim()}function D(e){return E(e).split(/[\n,;]+/).map(e=>e.trim()).filter(Boolean)}function Ve(e,t){let n=Number(e);return Number.isFinite(n)?n:t}function He(e){if(e==null||e===``)return null;let t=Number(e);return Number.isFinite(t)?t:null}function Ue(){return window.VERKRADAR_AI_REVIEW_MATCH_URL?window.VERKRADAR_AI_REVIEW_MATCH_URL:window.VERKRADAR_SUPABASE_URL?`${window.VERKRADAR_SUPABASE_URL}/functions/v1/ai-review-match`:`${_}/functions/v1/ai-review-match`}async function We(e,t={}){let n=Ue();if(!n)throw Error(`AI review function is not configured. Set window.VERKRADAR_AI_REVIEW_MATCH_URL or window.VERKRADAR_SUPABASE_URL.`);let r=await Xe(),i=await fetch(n,{method:`POST`,headers:r,body:JSON.stringify({matchId:e,force:t.force===!0})}),a=await Ze(i);if(!i.ok)throw Error(a.error||a.message||`AI review failed with status ${i.status}`);return a}async function Ge(e,t={}){let n=Ue();if(!n)throw Error(`AI review function is not configured. Set window.VERKRADAR_AI_REVIEW_MATCH_URL or window.VERKRADAR_SUPABASE_URL.`);let r=await Xe(),i=await fetch(n,{method:`POST`,headers:r,body:JSON.stringify({batch:!0,companyId:e,limit:Math.max(1,Math.min(20,Number(t.limit||10))),force:t.force===!0,revalidate:t.revalidate===!0})}),a=await Ze(i);if(!i.ok)throw Error(a.error||a.message||`AI review batch failed with status ${i.status}`);return a}async function Ke(e={}){let t=Ue();if(!t)throw Error(`AI review function is not configured. Set window.VERKRADAR_AI_REVIEW_MATCH_URL or window.VERKRADAR_SUPABASE_URL.`);let n=await Xe(),r=await fetch(t,{method:`POST`,headers:n,body:JSON.stringify({auto:!0,limit:Math.max(1,Math.min(10,Number(e.limit||10)))})}),i=await Ze(r);if(!r.ok)throw Error(i.error||i.message||`Automatic AI review failed with status ${r.status}`);return i}async function qe(e,t){let n=Ue();if(!n)throw Error(`AI review function is not configured. Set window.VERKRADAR_AI_REVIEW_MATCH_URL or window.VERKRADAR_SUPABASE_URL.`);let r=await Xe(),i=await fetch(n,{method:`POST`,headers:r,body:JSON.stringify({setCompanyAutoAiReviewEnabled:!0,company_id:e,enabled:t===!0})}),a=await Ze(i);if(!i.ok)throw Error(a.error||a.message||`Auto AI toggle failed with status ${i.status}`);return a}async function Je(){if(!y)return{reviewsToday:0,estimatedCostToday:0,remainingReviewsToday:50};let e=new Date;e.setUTCHours(0,0,0,0);let{data:t,error:n}=await y.from(`ai_usage_log`).select(`opportunity_id, estimated_cost`).gte(`created_at`,e.toISOString());if(n)throw n;let r=t||[],i=r.filter(e=>e.opportunity_id).length;return{reviewsToday:i,estimatedCostToday:r.reduce((e,t)=>e+Number(t.estimated_cost||0),0),remainingReviewsToday:Math.max(0,50-i)}}function Ye(e){let t=Number(e||0);return`$${t.toFixed(t>=1?2:4)}`}async function Xe(){let e={"content-type":`application/json`},t=window.VERKRADAR_SUPABASE_ANON_KEY||`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFzb2p4amJzZ3FiZnBiZXBvanpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAwNTU2NjgsImV4cCI6MjA5NTYzMTY2OH0.yPA34VbqWqKrBPespmHr5AojYzjhy3kGRxswO9XdAd0`;t&&(e.apikey=t);let{data:n,error:r}=y?await y.auth.getSession():{data:{session:null},error:null};if(r)throw r;let i=n.session?.access_token;if(!i)throw Error(`You must be logged in as an admin to run AI review.`);return e.authorization=`Bearer ${i}`,e}async function Ze(e){let t=await e.text();if(!t)return{};try{return JSON.parse(t)}catch{return{error:t}}}function Qe(e){let t=String(e?.fit||``),n=Number(e?.confidence||0),r=e?.send_to_client===!0||e?.sendToClient===!0;return n<.65?`needs_review`:t===`strong`&&r?`ready_for_admin`:t===`possible`&&r?`possible`:t===`weak`||t===`no_fit`?`low_priority`:`needs_review`}function $e(e,t,n=null){let r=new Map,i=new Map;for(let e of t||[]){let t=String(e.company_id||``),n=String(e.opportunity_id||``),a=String(e.match_id||``);t&&n&&r.set(`${t}:${n}`,e),a&&i.set(a,e)}return(e||[]).map(e=>{let t=`${String(e.company_id||``)}:${String(e.opportunity_id||``)}`,a=r.get(t)||i.get(String(e.id||``));return a?{...e,ai_review_status:Qe(a),ai_review_fit:a.fit||e.ai_review_fit,ai_review_confidence:a.confidence??e.ai_review_confidence,ai_reviewed_at:a.updated_at||a.created_at||e.ai_reviewed_at,ai_review_send_to_client:a.send_to_client===!0,ai_review_reason:a.reason||``,ai_review_profile_hash:a.reviewed_profile_hash||``,ai_review_profile_stale:at(a,n),ai_review_found:!0,ai_review_saved:!0}:{...e,ai_review_found:!1}})}function et(e,t=null){let n=ot(t,e);if(n.outsideServiceArea)return{bucket:`outside_service_area`,label:`Outside service area`,tone:`warning`,clientReady:!1,reason:n.reason||`Outside current service area.`};let r=it(e?.ai_review_skipped_reason),i=String(e?.ai_review_fit||``),a=Number(e?.ai_review_confidence||0),o=e?.ai_review_found===!0||e?.ai_review_saved===!0||!!i,s=String(e?.ai_review_status||`not_reviewed`);return r===`outside_service_area`?{bucket:`outside_service_area`,label:`Outside service area`,tone:`warning`,clientReady:!1,reason:`Skipped by batch review because the opportunity is outside the company service area.`}:o?e?.ai_review_profile_stale===!0?{bucket:`needs_review`,label:`AI review may be stale`,tone:`warning`,clientReady:!1,confidence:a}:i===`strong`&&e?.ai_review_send_to_client===!0?{bucket:`ai_recommended`,label:`AI recommended`,tone:`success`,clientReady:!0,confidence:a}:i===`possible`?{bucket:`ai_possible`,label:`AI possible`,tone:`notice`,clientReady:e?.ai_review_send_to_client===!0,confidence:a}:i===`weak`||i===`no_fit`||s===`low_priority`?{bucket:`low_priority`,label:i===`no_fit`?`AI: no fit`:`AI: weak fit`,tone:`muted`,clientReady:!1,confidence:a}:{bucket:`needs_review`,label:`Needs review`,tone:`warning`,clientReady:!1,confidence:a}:r?{bucket:r,label:rt(r),tone:r===`already_reviewed`?`notice`:`warning`,clientReady:!1,reason:rt(r)}:s===`needs_review`||String(e?.safety_status||``)===`needs_review`?{bucket:`needs_review`,label:`Needs review`,tone:`warning`,clientReady:!1}:{bucket:`not_reviewed`,label:`Not AI reviewed`,tone:`muted`,clientReady:!1}}function tt(e,t,n=null){return(e||[]).filter(e=>{let r=et(e,n);return t===`ai_recommended`?r.bucket===`ai_recommended`:t===`ai_possible`?r.bucket===`ai_possible`:t===`needs_review`?r.bucket===`needs_review`:t===`outside_service_area`?r.bucket===`outside_service_area`:t===`not_reviewed`?r.bucket===`not_reviewed`:!0})}function nt(e){let t=JSON.stringify({services:ct([...e?.services||[],...e?.includeKeywords||[],...(e?.excludeKeywords||[]).map(e=>`exclude:${e}`)]),locations:ct([e?.baseLocation,...e?.locations||[],...e?.serviceAreas||[],e?.willingToTravel?`willing_to_travel:true`:`willing_to_travel:false`,e?.nationalProjects?`national_projects:true`:`national_projects:false`])}),n=5381;for(let e=0;e<t.length;e+=1)n=(n<<5)+n+t.charCodeAt(e),n|=0;return`profile_${Math.abs(n)}`}function rt(e){return{outside_service_area:`Outside service area`,already_reviewed:`Already reviewed`,expired:`Expired`,missing_deadline:`Missing deadline`,expired_or_missing_deadline:`Expired or missing deadline`,score_too_low:`Score too low`,manually_rejected:`Manually rejected`}[it(e)]||`Skipped`}function it(e){return String(e||``).trim().toLowerCase().replace(/[\s-]+/g,`_`)}function at(e,t){if(!e||!t)return!1;let n=String(e.reviewed_profile_hash||``);return!!(n&&n!==nt(t))}function ot(e,t){if(!e||e.nationalProjects===!0||e.willingToTravel===!0)return{outsideServiceArea:!1,reason:``};let n=lt([e.baseLocation,...e.serviceAreas||[],...e.locations||[]].join(` `));if(!n||/all iceland|allt land|national|landsdekkandi/.test(n))return{outsideServiceArea:!1,reason:``};let r=t?.opportunities||{},i=r.raw_payload&&typeof r.raw_payload==`object`?r.raw_payload:{},a=lt([r.title,r.location,i.region,i.extracted_location].join(` `));if(!a)return{outsideServiceArea:!1,reason:`Opportunity location unclear`};if(/(dalvik|akureyri|boggvisbraut|birkiholar|north iceland|nordurland)/.test(a)&&!/(dalvik|akureyri|north iceland|nordurland)/.test(n)||/(olafsvik|snaefellsnes|stykkisholmur|grundarfjordur)/.test(a)&&!/(olafsvik|snaefellsnes|stykkisholmur|grundarfjordur)/.test(n))return{outsideServiceArea:!0,reason:`Outside current service area`};let o=st(n),s=st(a);return!o.length||!s.length?{outsideServiceArea:!1,reason:``}:{outsideServiceArea:!s.some(e=>o.includes(e)),reason:`Outside current service area`}}function st(e){return[[`capital_area`,/reykjavik|capital area|hofudborg|gardabaer|kopavogur|seltjarnarnes|mosfellsbaer/],[`south`,/selfoss|arborg|sudurland|hveragerdi|olfus|rangarthing/],[`west_corridor`,/akranes|borgarnes|borgarbyggd|hvalfjordur/],[`north`,/dalvik|akureyri|nordurland|birkiholar|boggvisbraut/],[`snaefellsnes`,/olafsvik|snaefellsnes|stykkisholmur|grundarfjordur/]].filter(([,t])=>t.test(e)).map(([e])=>e)}function ct(e){return Array.from(new Set((e||[]).map(e=>lt(e)).filter(Boolean))).sort()}function lt(e){return String(e||``).toLowerCase().normalize(`NFD`).replace(/[\u0300-\u036f]/g,``).replace(/þ/g,`th`).replace(/ð/g,`d`).replace(/æ/g,`ae`).replace(/ö/g,`o`).replace(/[^a-z0-9\s/-]/g,` `).replace(/\s+/g,` `).trim()}function ut(e){let{escapeHtml:t,isRunning:n=!1,result:r=null}=e;return`
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
      ${r?dt(r,t):``}
    </section>
  `}function dt(e,t){let n=Array.isArray(e.company_summaries)?e.company_summaries:[],r=Array.isArray(e.match_details)?e.match_details:[];return`
    <div class="daily-pipeline-result">
      <div class="daily-pipeline-section">
        <h3>Yfirlit</h3>
        <div class="daily-pipeline-kpis">
          ${ft(`Ný tækifæri`,e.opportunities_inserted,t)}
          ${ft(`Uppfært`,e.opportunities_updated,t)}
          ${ft(`Fyrirtæki uppfærð`,e.companies_refreshed,t)}
          ${ft(`AI yfirferðir`,e.ai_reviews_created,t)}
          ${ft(`Þegar yfirfarið`,e.skipped_already_reviewed,t)}
          ${ft(`Utan þjónustusvæðis`,e.skipped_outside_service_area,t)}
          ${ft(`Vantar skilafrest`,e.skipped_missing_deadline,t)}
          ${ft(`Útrunnið`,e.skipped_expired,t)}
        </div>
      </div>

      <div class="daily-pipeline-section">
        <div class="daily-pipeline-heading">
          <h3>Fyrirtæki</h3>
          <span>${n.length} fyrirtæki í niðurstöðu</span>
        </div>
        ${n.length?`
          <div class="daily-company-grid">
            ${n.map(e=>pt(e,t)).join(``)}
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
            ${r.map(e=>ht(e,t)).join(``)}
          </div>
        `:`<div class="empty-card">Engin ný AI-yfirfarin tækifæri í þessari keyrslu.</div>`}
      </div>

      ${gt(e.errors,t)}
      ${_t(e,t)}
    </div>
  `}function ft(e,t,n){return`
    <div class="daily-kpi">
      <strong>${Number(t||0)}</strong>
      <span>${n(e)}</span>
    </div>
  `}function pt(e,t){let n=Array.isArray(e.match_details)?e.match_details:[];return`
    <article class="daily-company-card">
      <div class="daily-company-header">
        <h4>${t(e.company_name||`Óþekkt fyrirtæki`)}</h4>
        ${e.company_id?`<button class="btn btn-ghost btn-small" type="button" data-action="view-admin-company" data-id="${t(e.company_id)}">Open company</button>`:``}
      </div>
      <div class="daily-company-stats">
        ${mt(`Ný tækifæri`,e.new_matches_count,t)}
        ${mt(`Mælt með`,e.ai_recommended_count,t)}
        ${mt(`Mögulegt`,e.ai_possible_count,t)}
        ${mt(`Passar ekki`,e.ai_rejected_count,t)}
        ${mt(`Þegar yfirfarið`,e.already_reviewed_count,t)}
        ${mt(`Þarf yfirferð`,e.needs_manual_review_count,t)}
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
  `}function mt(e,t,n){return`
    <span>
      <strong>${Number(t||0)}</strong>
      ${n(e)}
    </span>
  `}function ht(e,t){let n=Array.isArray(e.top_reasons)?e.top_reasons.filter(Boolean).slice(0,3):[],r=String(e.source_url||``).trim();return`
    <article class="daily-match-card">
      <div class="daily-match-top">
        <div>
          <h4>${t(e.opportunity_title||`Tækifæri`)}</h4>
          <p>${t(e.company_name||`Óþekkt fyrirtæki`)} · ${t(e.buyer||`Óþekktur kaupandi`)} · ${t(e.source||`Óþekkt heimild`)}</p>
        </div>
        <div class="daily-match-badges">
          <span>${t(vt(e.ai_fit))}</span>
          <span>${Math.round(Number(e.ai_confidence||0)*100)}%</span>
          <span>${e.send_to_client?`Hæft til sendingar`:`Ekki senda`}</span>
          ${e.ai_review_is_stale?`<span class="is-warning">AI gæti verið úrelt</span>`:``}
        </div>
      </div>
      <div class="daily-match-meta">
        <span>Skilafrestur: ${t(yt(e.deadline))}</span>
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
  `}function gt(e,t){return!Array.isArray(e)||!e.length?``:`
    <div class="admin-message is-error">
      ${e.map(e=>`<div>${t(e)}</div>`).join(``)}
    </div>
  `}function _t(e,t){return`
    <details class="daily-pipeline-diagnostics">
      <summary>Technical diagnostics</summary>
      <pre>${t(JSON.stringify(e,null,2))}</pre>
    </details>
  `}function vt(e){let t=String(e||``).toLowerCase();return t===`strong`?`Mælt með`:t===`possible`?`Mögulegt`:t===`weak`||t===`no_fit`?`Passar ekki`:`Þarf yfirferð`}function yt(e){return String(e||``).trim()||`Ekki skráð`}function bt(e,t){let{escapeHtml:n,formatDateTime:r,inviteEmail:i=``,inviteLink:a=``,inviteDebug:o=null,actionState:s=``}=t,c=Array.isArray(e.members)?e.members:[],l=c.filter(e=>e.status===`active`),u=c.filter(e=>e.status===`invited`),d=l.length?`Active`:u.length?`Invited`:`Not invited`,f=!!s;return`
    <section class="side-panel admin-company-access-panel">
      <h3>Customer access</h3>
      <p><strong>Access status:</strong> ${n(d)}</p>
      <p class="muted-text">Create an invite link, copy it, and send it manually. VerkRadar does not send invite emails yet.</p>
      ${c.length?`
        <ul class="admin-detail-list admin-company-access-list">
          ${c.map(e=>St(e,{escapeHtml:n,formatDateTime:r,busy:f})).join(``)}
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
          ${xt(o,n)}
        `:u.length?`
          <p class="muted-text">No raw invite token is available in this browser session. Regenerate invite link before copying.</p>
        `:``}
      </div>
      <p class="muted-text">Aðgangur að fyrirtæki er afturkallaður, en innskráningaraðgangi notandans er ekki eytt.</p>
    </section>
  `}function xt(e,t){return e?`
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
  `:``}function St(e,t){let{escapeHtml:n,formatDateTime:r,busy:i}=t,a=e.status===`revoked`,o=e.status===`active`?`is-success`:e.status===`invited`?`is-running`:``;return`
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
  `}var Ct=[[`basic`,`Grunnur`],[`pro`,`Pro`],[`priority`,`Forgangur`]],wt=[[`trial`,`Trial`],[`active`,`Active`],[`paused`,`Paused`],[`cancelled`,`Cancelled`]],Tt=[[`weekly`,`Vikulega`],[`daily`,`Daglega`]],Et=[[`monday`,`Monday`],[`tuesday`,`Tuesday`],[`wednesday`,`Wednesday`],[`thursday`,`Thursday`],[`friday`,`Friday`]];function Dt(e,t){let{escapeHtml:n,actionState:r=``,lastResult:i=null,changes:a=[],formatDateTime:o=e=>e||``}=t,s=r===`profile_save`,c=r===`profile_refresh`,l=s||c;return`
    <section class="side-panel admin-company-profile-editor">
      <div class="admin-company-ai-header">
        <div>
          <h3>Vöktunarprófíll</h3>
          <p>Fullur admin-prófíll sem stjórnar leit, síun, samsvörun og tilkynningum.</p>
        </div>
      </div>
      <form data-admin-company-profile-form data-company-id="${n(e.id)}">
        ${kt(`Grunnupplýsingar`,`
          <div class="form-grid">
            ${O(`Company name`,`companyName`,e.companyName,n,!0)}
            ${O(`Kennitala`,`kennitala`,e.kennitala,n)}
            ${O(`Contact person`,`contactName`,e.contactName,n)}
            ${O(`Contact email`,`contactEmail`,e.contactEmail,n,!0,`email`)}
            ${O(`Notification email`,`notificationEmail`,e.notificationEmail||e.billingEmail||e.contactEmail,n,!1,`email`)}
            ${O(`Selected plan`,`selectedPlan`,e.selectedPlan||`basic`,n,!1,`select`,Ct)}
          </div>
        `)}
        ${kt(`Þjónusta og leitarorð`,`
          ${k(`Services`,`services`,e.services,n)}
          ${k(`Keywords`,`includeKeywords`,e.includeKeywords,n)}
          ${k(`Excluded keywords`,`excludeKeywords`,e.excludeKeywords,n)}
          ${k(`Core services`,`coreServices`,e.coreServices,n)}
          ${k(`Secondary services`,`secondaryServices`,e.secondaryServices,n)}
          ${k(`Excluded services`,`excludedServices`,e.excludedServices,n)}
        `)}
        ${kt(`Svæði og tækifærategundir`,`
          <div class="form-grid">
            ${O(`Base location`,`baseLocation`,e.baseLocation,n)}
            ${O(`Operating areas / locations`,`locations`,e.locations,n)}
          </div>
          ${k(`Service areas`,`serviceAreas`,e.serviceAreas,n)}
          ${k(`Opportunity categories`,`opportunityCategories`,e.opportunityCategories,n)}
          ${k(`Opportunity types`,`opportunityTypes`,e.opportunityTypes||e.preferredProjectTypes,n)}
          ${k(`Preferred project types`,`preferredProjectTypes`,e.preferredProjectTypes,n)}
          ${k(`Excluded project types`,`excludedProjectTypes`,e.excludedProjectTypes,n)}
          <label class="checkbox inline"><input type="checkbox" name="subcontractingRelevant" ${e.subcontractingRelevant?`checked`:``} /><span>Subcontracting opportunities are relevant</span></label>
        `)}
        ${kt(`Samsvörunarstillingar`,`
          <div class="form-grid">
            ${O(`Minimum relevance threshold`,`minimumRelevanceThreshold`,e.minimumRelevanceThreshold??50,n,!1,`number`)}
            ${O(`Max travel distance (km)`,`maxTravelDistanceKm`,e.maxTravelDistanceKm,n,!1,`number`)}
            ${O(`Typical project size`,`typicalProjectSize`,e.typicalProjectSize,n)}
          </div>
          ${k(`Equipment`,`equipment`,e.equipment,n)}
          ${k(`Certifications`,`certifications`,e.certifications,n)}
          ${k(`Preferred buyers`,`preferredBuyers`,e.preferredBuyers,n)}
          ${k(`Notes for AI`,`profileNotesForAi`,e.profileNotesForAi,n)}
        `)}
        ${kt(`Tilkynningar og staða`,`
          <div class="form-grid">
            ${O(`Notification frequency`,`reportFrequency`,e.reportFrequency||`weekly`,n,!1,`select`,Tt)}
            ${O(`Report day`,`reportDay`,e.reportDay||`monday`,n,!1,`select`,Et)}
            ${O(`Trial / active / paused / cancelled status`,`billingStatus`,e.billingStatus||`trial`,n,!1,`select`,wt)}
          </div>
          <label class="checkbox inline"><input type="checkbox" name="deadlineReminders" ${e.deadlineReminders?`checked`:``} /><span>Deadline reminders</span></label>
          <label class="checkbox inline"><input type="checkbox" name="includeLowConfidence" ${e.includeLowConfidence?`checked`:``} /><span>Include lower-confidence matches</span></label>
        `)}
        ${kt(`Innri athugasemdir`,`
          <label>Internal admin notes
            <textarea name="internalAdminNotes" rows="5" placeholder="Only interested in Reykjavík projects\nDoes not want equipment purchases\nOpen to larger projects as subcontractor">${n(e.internalAdminNotes||``)}</textarea>
          </label>
        `)}
        <div class="admin-profile-actions">
          <button class="btn btn-secondary" type="submit" data-admin-profile-submit="save" ${l?`disabled`:``}>${s?`Vista...`:`Vista breytingar`}</button>
          <button class="btn btn-primary" type="submit" data-admin-profile-submit="refresh" ${l?`disabled`:``}>${c?`Vista og endurreikna...`:`Vista og endurreikna samsvaranir`}</button>
        </div>
        ${i?At(i,n):``}
      </form>
      ${Ot(a,{escapeHtml:n,formatDateTime:o})}
    </section>
  `}function Ot(e,t){let{escapeHtml:n,formatDateTime:r}=t,i=Array.isArray(e)?e.slice(0,6):[];return`
    <div class="admin-profile-history">
      <h3>Breytingasaga</h3>
      ${i.length?`
        <ul class="admin-detail-list">
          ${i.map(e=>`
            <li>
              <strong>${n(r(e.changed_at))}</strong>
              <span>${n(e.changed_by_email||`Admin`)} · ${n((e.changed_fields||[]).join(`, `)||`Profile updated`)}</span>
            </li>
          `).join(``)}
        </ul>
      `:`<p>No profile changes logged yet.</p>`}
    </div>
  `}function kt(e,t){return`<div class="admin-profile-group"><h4>${e}</h4>${t}</div>`}function O(e,t,n,r,i=!1,a=`text`,o=[]){return Array.isArray(n)&&(n=n.join(`, `)),a===`select`?`<label>${r(e)}<select name="${r(t)}">${o.map(([e,t])=>`<option value="${r(e)}" ${String(n||``)===e?`selected`:``}>${r(t)}</option>`).join(``)}</select></label>`:`<label>${r(e)}<input name="${r(t)}" type="${r(a)}" value="${r(n??``)}" ${i?`required`:``} /></label>`}function k(e,t,n,r){let i=Array.isArray(n)?n.join(`, `):String(n||``);return`<label>${r(e)}<textarea name="${r(t)}" rows="2">${r(i)}</textarea></label>`}function At(e,t){if(!e?.refresh)return``;let n=e.refresh;return`
    <div class="form-message success">
      ${t(`Samsvaranir endurreiknaðar: ${Number(n.matches_refreshed||0)} alls, ${Number(n.matches_created||0)} nýjar, ${Number(n.matches_updated||0)} uppfærðar, ${Number(n.matches_removed||0)} fjarlægðar.`)}
    </div>
  `}var jt=[[``,`Ástæða valfrjáls`],[`wrong_service`,`Röng þjónusta`],[`wrong_location`,`Rangt svæði`],[`too_large`,`Of stórt`],[`too_small`,`Of lítið`],[`missing_equipment_or_certification`,`Vantar tæki eða vottun`],[`consultancy_not_execution`,`Ráðgjöf/eftirlit, ekki framkvæmd`],[`not_interested`,`Ekki áhugavert`],[`duplicate_or_already_known`,`Tvítekið eða þegar þekkt`],[`other`,`Annað`]];function Mt(e){let t=new FormData(e);return{opportunityId:String(t.get(`opportunityId`)||``).trim(),decision:String(t.get(`decision`)||``).trim(),reason:String(t.get(`reason`)||``).trim(),comment:String(t.get(`comment`)||``).trim()}}function Nt(e){let t=new FormData(e);return{opportunityId:String(t.get(`opportunityId`)||``).trim(),label:String(t.get(`label`)||``).trim(),reason:String(t.get(`reason`)||``).trim(),notes:String(t.get(`notes`)||``).trim()}}function Pt(e,t){let{escapeHtml:n}=t,r=e.adminDecision||{},i=e.evaluationLabel||{},a=e.opportunity_id||e.opportunities?.id||``;return`
    <div class="admin-match-learning-controls">
      <form data-admin-match-decision-form data-company-id="${n(e.company_id||``)}">
        <input type="hidden" name="opportunityId" value="${n(a)}" />
        <select name="decision">
          ${[[``,`Ákvörðun`],[`send`,`Senda`],[`possible`,`Mögulegt`],[`reject`,`Hafna`]].map(([e,t])=>`<option value="${e}" ${r.decision===e?`selected`:``}>${n(t)}</option>`).join(``)}
        </select>
        <select name="reason">
          ${jt.map(([e,t])=>`<option value="${e}" ${r.reason===e?`selected`:``}>${n(t)}</option>`).join(``)}
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
  `}function Ft(e){let{escapeHtml:t,invite:n=null,loading:r=!1,error:i=``,debugInfo:a=null,showDebug:o=!1,user:s=null,accepting:c=!1,signupHref:l=`/signup`,loginHref:u=`/login`,language:d=`is`}=e,f=d===`is`,p=f?`Aðgangsboð í VerkRadar`:`VerkRadar invite`,m=f?`Sæki aðgangsboð...`:`Loading invite...`,h=f?`Fyrirtæki`:`Company`,ee=f?`Boðið netfang`:`Invited email`,g=f?`Innskráning`:`Login`,te=f?`Stofna aðgang`:`Create account`,_=f?`Ertu þegar með aðgang?`:`Already have an account?`,v=f?`Tengja aðgang`:`Accept invite`,y=f?`Fara í innskráningu`:`Go to login`,b=f?`Fara á forsíðu`:`Go to homepage`,ne=f?`Aðgangsboðið tengir innskráninguna við fyrirtækjaprófíl sem hefur þegar verið settur upp.`:`This invite connects your login to an existing company profile.`;return`
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
            ${o&&a?It(a,t):``}
            ${i&&!n?`
              <div class="auth-actions">
                <button class="btn btn-primary btn-large" type="button" data-action="go" data-href="/login">${t(y)}</button>
                <button class="btn btn-secondary btn-large" type="button" data-action="go" data-href="/">${t(b)}</button>
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
                  ${t(c?f?`Tengi...`:`Accepting...`:v)}
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
  `}function It(e,t){return`
    <details class="admin-invite-debug">
      <summary>Invite diagnostics</summary>
      ${[{title:`Route/token`,fields:[`current_url`,`current_hash`,`token_source`,`token_present`,`token_length`,`localStorage_pending_token_present`,`sessionStorage_pending_token_present`,`auth_flow`,`raw_token_had_fragment`,`sanitized_token_length`,`code_present`,`exchange_code_attempted`,`exchange_code_succeeded`,`session_present`,`auth_callback_error`]},{title:`Auth`,fields:[`auth_session_present`,`auth_user_id_present`,`auth_user_email`,`email_confirmed_at_present`,`auth_event_received`,`access_token_present`]},{title:`Preview`,fields:[`preview_request_sent`,`preview_status`,`preview_response_body`]},{title:`Accept`,fields:[`accept_request_sent`,`authorization_header_included`,`accept_http_status`,`accept_response_body`,`accept_error_reason`,`session_user_id`,`session_user_email`,`bearer_jwt_sub`,`bearer_jwt_email`,`bearer_jwt_iss`,`bearer_jwt_exp`,`session_user_matches_bearer_sub`,`session_email_matches_bearer_email`]},{title:`Backend lookup`,fields:`action.token_received.token_length.computed_hash_prefix.lookup_found.matching_rows_count.invite_status.invite_expires_at.latest_invite_status.latest_invite_expires_at.invited_email.auth_user_id_present.auth_user_email.email_match.authorization_header_present.bearer_token_present.bearer_token_length.expected_project_ref.get_user_attempted.get_user_succeeded.get_user_error_code.get_user_error_message.admin_get_user_attempted.admin_get_user_exists.admin_get_user_error_code.admin_get_user_error_message.invalid_reason.update_attempted.update_succeeded`.split(`.`)}].map(n=>`
        <div class="admin-invite-debug-group">
          <strong>${t(n.title)}</strong>
          ${n.fields.map(n=>Lt(n,e[n],t)).join(``)}
        </div>
      `).join(``)}
    </details>
  `}function Lt(e,t,n){let r=typeof t==`object`&&t?JSON.stringify(t,null,2):String(t??``);return`
    <div class="admin-invite-debug-row">
      <span>${n(e)}</span>
      <code>${n(r||`—`)}</code>
    </div>
  `}function Rt({authMessage:e,escapeHtml:t}){if(!e)return``;let n=Array.isArray(e.actions)?e.actions:[];return`
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
  `}function zt({t:e,escapeHtml:t,authForm:n,authSubmitting:r,authMessage:i,signupHref:a=`/signup`,signupLabel:o=``,forgotPasswordHref:s=`/forgot-password`}){let c=o||e(`createAccount`);return`
    <section class="auth-page">
      <div class="auth-layout">
        <div class="auth-copy">
          <p class="eyebrow">${t(e(`login`))}</p>
          <h1>${t(e(`authLoginTitle`))}</h1>
          <p>${t(e(`authLoginSubtitle`))}</p>
        </div>

        <div class="auth-form-column">
          ${Rt({authMessage:i,escapeHtml:t})}
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
  `}function Bt({t:e,escapeHtml:t,authForm:n,authSubmitting:r,authMessage:i}){return`
    <section class="auth-page">
      <div class="auth-layout">
        <div class="auth-copy">
          <p class="eyebrow">${t(e(`passwordReset`))}</p>
          <h1>${t(e(`resetPasswordTitle`))}</h1>
          <p>${t(e(`resetPasswordSubtitle`))}</p>
        </div>

        <div class="auth-form-column">
          ${Rt({authMessage:i,escapeHtml:t})}
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
  `}function Vt({t:e,escapeHtml:t,authForm:n,authSubmitting:r,authMessage:i}){return`
    <section class="auth-page">
      <div class="auth-layout">
        <div class="auth-copy">
          <p class="eyebrow">${t(e(`newPassword`))}</p>
          <h1>${t(e(`chooseNewPassword`))}</h1>
          <p>${t(e(`resetPasswordHelp`))}</p>
        </div>

        <div class="auth-form-column">
          ${Rt({authMessage:i,escapeHtml:t})}
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
  `}function Ht({t:e,escapeHtml:t,authForm:n,authSubmitting:r,authMessage:i,loginHref:a=`/login`,inviteEmail:o=``,isInviteSignup:s=!1}){let c=o||n.email,l=e(s?`inviteCreateAccountSubtitle`:`createAccountSubtitle`);return`
    <section class="auth-page">
      <div class="auth-layout">
        <div class="auth-copy">
          <p class="eyebrow">${t(e(`createAccount`))}</p>
          <h1>${t(e(`createAccountTitle`))}</h1>
          <p>${t(l)}</p>
        </div>

        <div class="auth-form-column">
          ${Rt({authMessage:i,escapeHtml:t})}
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
  `}function Ut({t:e,escapeHtml:t,trialHref:n=`/trial`}){return`
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
  `}function Wt(e){let{escapeHtml:t,usageSummary:n=null,lastResult:r=null,isRunning:i=!1,formatAiUsageCost:a=e=>`$${Number(e||0).toFixed(4)}`}=e;return`
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
      ${n?qt(n,{escapeHtml:t,formatAiUsageCost:a}):``}
      ${r?Yt(r,t):``}
    </section>
  `}function Gt(e,t){let{escapeHtml:n,renderMatchDecisionControls:r=null}=t,i=e.latestMatches||[];return i.length?`
    <ul class="admin-detail-list admin-ai-aware-match-list">
      ${i.map(t=>Zt(t,{escapeHtml:n,company:e,renderMatchDecisionControls:r})).join(``)}
    </ul>
  `:`<p>No stored matches yet.</p>`}function Kt(e,t){let{escapeHtml:n,formatDateTime:r,formatAiUsageCost:i=e=>`$${Number(e||0).toFixed(4)}`,actionState:a=``,filter:o=`not_reviewed`,lastResult:s=null,usageSummary:c=null}=t,l=tt(e.latestMatches||[],o,e);return`
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

      ${c?qt(c,{escapeHtml:n,formatAiUsageCost:i}):``}
      ${s?Jt(s,n):``}

      <label class="admin-inline-control admin-company-ai-filter">
        <span>AI review filter</span>
        <select data-admin-company-ai-filter>
          ${[[`ai_recommended`,`AI recommended`],[`ai_possible`,`AI possible`],[`needs_review`,`Needs review`],[`outside_service_area`,`Outside service area`],[`not_reviewed`,`Not AI reviewed`]].map(([e,t])=>`<option value="${e}" ${o===e?`selected`:``}>${t}</option>`).join(``)}
        </select>
      </label>

      ${l.length?`
        <ul class="admin-detail-list admin-ai-match-list">
          ${l.map(t=>Qt(t,{escapeHtml:n,formatDateTime:r,company:e})).join(``)}
        </ul>
      `:`<p class="muted-text">No matches for this AI review filter.</p>`}
    </section>
  `}function qt(e,{escapeHtml:t,formatAiUsageCost:n}){return`
    <div class="admin-ai-usage-summary">
      <span><strong>AI usage today</strong></span>
      <span>${Number(e.reviewsToday||0)} reviews today</span>
      <span>${t(n(e.estimatedCostToday||0))} estimated cost</span>
      <span>${Number(e.remainingReviewsToday||0)} reviews remaining</span>
    </div>
  `}function Jt(e,t){return`
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
  `}function Yt(e,t){return`
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
    ${Xt(e.company_diagnostics||[],t)}
  `}function Xt(e,t){return e.length?`
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
  `:``}function Zt(e,{escapeHtml:t,company:n,renderMatchDecisionControls:r}){let i=e.opportunities||{},a=et(e,n),o=Number(e.match_score||0);return`
    <li class="admin-ai-aware-match ${t(a.tone||`muted`)}">
      <strong>${t(i.title||`Opportunity`)}</strong>
      <span>
        <b>${t(a.label)}</b>
        ${a.confidence?` · ${Math.round(a.confidence*100)}%`:``}
        · Rule score ${o}
        ${a.bucket===`outside_service_area`?` · Rule label suppressed`:` · ${t(e.match_label||`Match`)}`}
      </span>
      ${e.ai_review_skipped_reason?`<small>Skipped: ${t(rt(e.ai_review_skipped_reason))}</small>`:``}
      ${e.ai_review_profile_stale?`<small>AI review may be stale because the company profile changed.</small>`:``}
      ${e.adminDecision?`<small>Decision: ${t(e.adminDecision.decision||``)}${e.adminDecision.reason?` · ${t(e.adminDecision.reason)}`:``}</small>`:``}
      ${e.evaluationLabel?`<small>Evaluation: ${t(e.evaluationLabel.label||``)}${e.evaluationLabel.reason?` · ${t(e.evaluationLabel.reason)}`:``}</small>`:``}
      ${r?r(e,{escapeHtml:t}):``}
    </li>
  `}function Qt(e,{escapeHtml:t,formatDateTime:n,company:r}){let i=e.opportunities||{},a=et(e,r),o=a.confidence?` · ${Math.round(a.confidence*100)}%`:``,s=e.ai_reviewed_at?` · ${n(e.ai_reviewed_at)}`:``,c=e.ai_review_skipped_reason?` · Skipped: ${rt(e.ai_review_skipped_reason)}`:``;return`
    <li class="admin-ai-match-row ${t(a.tone||`muted`)}">
      <strong>${t(i.title||`Opportunity`)}</strong>
      <span>${t(a.label)}${t(o)}${t(s)}${t(c)}</span>
      ${e.ai_review_profile_stale?`<span>AI review may be stale because the company profile changed.</span>`:``}
      <span>Rule score ${Number(e.match_score||0)} · ${t(e.match_label||`Match`)}</span>
      <span class="admin-ai-debug">company_id=${t(e.company_id||``)} · opportunity_id=${t(e.opportunity_id||``)} · ai_review_found=${e.ai_review_found===!0?`true`:`false`}</span>
    </li>
  `}function $t({copy:e,suggestions:t,labels:n,escapeHtml:r}){return`
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
  `}function en({profile:e,matches:t,stats:n,filters:r,filterSummary:i,matchStatus:a,opportunityLoadError:o,isAdmin:s,matchingLoading:c,labels:l,renderFilterDropdown:u,renderOpportunityCard:d,renderEmptyState:f,escapeHtml:p}){let m=String(e?.companyName||``),h=String(l.welcomeCompany||``),ee=m?h.indexOf(m):-1,g=ee>=0?`${p(h.slice(0,ee))}<span class="dashboard-company-name">${p(m)}</span>${p(h.slice(ee+m.length))}`:p(h);return`
    <section class="dashboard-head">
      <div>
        <p class="eyebrow">${p(l.dashboard)}</p>
        <h1>${g}</h1>
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
  `}function tn({opp:e,saved:t,deadline:n,sourceBadgeHtml:r,qualityBadgeHtml:i,safetyBadgeHtml:a,extractedBadgeHtml:o,originalLanguageBadgeHtml:s,matchBadgeClass:c,matchLabel:l,buyer:u,location:d,value:f,reasons:p,labels:m,escapeHtml:h}){return`
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
  `}function nn({opp:e,saved:t,deadline:n,requirements:r,matchReasons:i,risks:a,safetyReasons:o,nextSteps:s,matchBadgeClass:c,matchLabel:l,qualityBadgeHtml:u,safetyBadgeHtml:d,extractedBadgeHtml:f,qualityWarningHtml:p,buyerSummary:m,location:h,value:ee,sourceUrl:g,extractedDetails:te,qualityLabel:_,safetyStatusLine:v,category:y,type:b,publishedDate:ne,cpvCode:x,labels:S,escapeHtml:C}){return`
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
            <p>${C(m)} · ${C(h)} · ${ee}</p>
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
              ${te}
              <p><strong>${C(S.quality)}:</strong> ${C(_)}</p>
              ${v}
              <p><strong>${C(S.category)}:</strong> ${C(y)}</p>
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
                <a class="btn btn-secondary" href="${C(g)}" target="_blank" rel="noreferrer">${C(S.openSource)}</a>
                <button class="btn btn-ghost" data-action="ignore" data-id="${e.id}">${C(S.markNotRelevant)}</button>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  `}function rn(e,t){return e.map(e=>`<p>${t(e)}</p>`).join(``)}function an({language:e,escapeHtml:t,eyebrow:n,title:r,intro:i,sections:a}){let o=e===`is`?`Síðast uppfært`:`Last updated`,s=e===`is`?`4. júní 2026`:`June 4, 2026`;return`
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
            <div class="legal-content">${rn(n,t)}</div>
          </section>
        `).join(``)}
      </div>
    </section>
  `}function on({escapeHtml:e,submitted:t=!1,error:n=``,submitting:r=!1}){return`
    <section class="page-head pricing-head">
      <p class="eyebrow">Hafa samband</p>
      <h1>Hafa samband</h1>
      <p>Viltu prófa VerkRadar, spyrja um vöktun eða senda okkur ábendingu?</p>
    </section>

    <section class="trial-request-layout contact-request-layout">
      <form id="contact-request-form" class="form-card trial-request-card contact-request-card" novalidate>
        ${t?`
          <div class="admin-message is-success" role="status">
            <span>Skilaboðin hafa verið send. Við höfum samband eins fljótt og auðið er.</span>
          </div>
        `:``}
        ${n?`
          <div class="admin-message is-error" role="alert">
            <span>${e(n)}</span>
          </div>
        `:``}
        <div class="form-honeypot" aria-hidden="true">
          <label for="contact-website">Website</label>
          <input id="contact-website" name="website" type="text" tabindex="-1" autocomplete="off" />
        </div>
        <div class="form-grid two">
          ${un({id:`contact-name`,name:`name`,label:`Nafn`,autocomplete:`name`,required:!0})}
          ${un({id:`contact-company`,name:`company`,label:`Fyrirtæki`,autocomplete:`organization`})}
          ${un({id:`contact-email`,name:`email`,label:`Netfang`,type:`email`,autocomplete:`email`,required:!0})}
          ${un({id:`contact-phone`,name:`phone`,label:`Sími`,type:`tel`,autocomplete:`tel`})}
        </div>
        <div class="form-group custom-select-field">
          <span class="contact-field-label" id="contact-subject-label">Efni <span class="required-mark" aria-hidden="true">*</span></span>
          <input type="hidden" name="subject" value="" required aria-required="true" />
          <div class="custom-select" data-contact-subject-select>
            <button
              type="button"
              id="contact-subject-trigger"
              class="custom-select-trigger"
              data-action="toggle-contact-subject"
              aria-haspopup="listbox"
              aria-expanded="false"
              aria-controls="contact-subject-list"
              aria-labelledby="contact-subject-label contact-subject-value"
              aria-describedby="contact-subject-error"
              aria-required="true"
            >
              <span id="contact-subject-value" data-contact-subject-label>Veldu efni</span>
              <span class="custom-select-arrow" aria-hidden="true"></span>
            </button>
            <div
              id="contact-subject-list"
              class="custom-select-menu"
              role="listbox"
              aria-labelledby="contact-subject-trigger"
              hidden
            >
              ${[`Spurning um VerkRadar`,`Áhugi á prufu`,`Ábending um útboð eða heimild`,`Tæknileg aðstoð`,`Annað`].map(t=>`
                <button
                  type="button"
                  class="custom-select-option"
                  data-action="select-contact-subject"
                  data-value="${e(t)}"
                  role="option"
                  aria-selected="false"
                >
                  <span>${e(t)}</span>
                  <span class="custom-select-check" aria-hidden="true"></span>
                </button>
              `).join(``)}
            </div>
          </div>
          <span class="field-error" id="contact-subject-error" aria-live="polite"></span>
        </div>
        <label class="form-group" for="contact-message">
          <span class="contact-field-label">Skilaboð <span class="required-mark" aria-hidden="true">*</span></span>
          <textarea id="contact-message" name="message" rows="6" required aria-required="true" aria-describedby="contact-message-error"></textarea>
          <span class="field-error" id="contact-message-error" aria-live="polite"></span>
        </label>
        <button class="btn btn-primary btn-large trial-request-submit" type="submit" ${r?`disabled`:``}>${r?`Sendi...`:`Senda skilaboð`}</button>
      </form>
    </section>
  `}function sn(e){if(!e)return!0;let t=[{name:`name`,message:`Nafn vantar.`},{name:`email`,message:`Netfang vantar.`,invalidMessage:`Skráðu gilt netfang.`},{name:`subject`,message:`Veldu efni.`,focusSelector:`#contact-subject-trigger`},{name:`message`,message:`Skilaboð vantar.`}],n=[];for(let r of t){let t=e.elements[r.name],i=r.focusSelector?e.querySelector(r.focusSelector):t;cn(i);let a=String(t?.value||``).trim()?r.invalidMessage&&!t.validity.valid?r.invalidMessage:``:r.message;!a||!i||(ln(i,a),n.push(i))}return n.length?(n[0].focus({preventScroll:!0}),n[0].scrollIntoView({behavior:`smooth`,block:`center`}),!1):!0}function cn(e){if(!e)return;e.removeAttribute(`aria-invalid`);let t=e.getAttribute(`aria-describedby`),n=t?document.getElementById(t):null;n&&(n.textContent=``)}function ln(e,t){e.setAttribute(`aria-invalid`,`true`);let n=e.getAttribute(`aria-describedby`),r=n?document.getElementById(n):null;r&&(r.textContent=t)}function un({id:e,name:t,label:n,type:r=`text`,autocomplete:i=``,required:a=!1}){let o=`${e}-error`;return`
    <label class="form-group" for="${e}">
      <span class="contact-field-label">${n}${a?` <span class="required-mark" aria-hidden="true">*</span>`:``}</span>
      <input
        id="${e}"
        type="${r}"
        name="${t}"
        ${i?`autocomplete="${i}"`:``}
        ${a?`required aria-required="true" aria-describedby="${o}"`:``}
      />
      ${a?`<span class="field-error" id="${o}" aria-live="polite"></span>`:``}
    </label>
  `}function dn({t:e,escapeHtml:t,language:n,trialHref:r}){let i=n===`is`,a=i?[{title:`Gatnagerð og lagnir við nýtt hverfi`,type:`1`,score:`Mælt með · Skilafrestur eftir 10 daga`},{title:`Lóðarframkvæmdir við skóla`,type:`2`,score:`Passar við lóðarvinnu · Staðfesta gögn`},{title:`Bílastæði og yfirborðsfrágangur`,type:`3`,score:`Mögulegt tækifæri · Opna heimild`}]:[{title:`Roadworks and utilities for a new neighborhood`,type:`1`,score:`Strong match · Deadline in 10 days`},{title:`Site works at a school`,type:`2`,score:`Fits site work · Verify documents`},{title:`Parking area and surface finishing`,type:`3`,score:`Possible match · Open source`}],o=i?[[`Jarðvinna og gatnagerð`,`Útboð um vegi, lóðir, bílastæði, stíga og jarðvegsvinnu.`],[`Lagnavinna og fráveita`,`Verkefni um lagnir, dælustöðvar, fráveitu, vatn og hitaveitu.`],[`Malbikun og lóðarframkvæmdir`,`Gatnagerð, yfirborðsfrágangur, gangstéttir og viðhald.`],[`Rafverktakar`,`Raflagnir, brunakerfi, lýsing, öryggiskerfi og hleðslustöðvar.`],[`Ræstingar og þjónusta`,`Reglulegir þjónustusamningar, húsþjónusta og rekstrarverkefni.`],[`Verkfræðistofur og ráðgjafar`,`Hönnun, eftirlit, ráðgjöf og verkefnastjórnun þegar það á við.`]]:[[`Earthworks and roadworks`,`Tenders for roads, plots, parking areas, paths and earthworks.`],[`Utilities and drainage`,`Projects for pipes, pumping stations, drainage, water and heating utilities.`],[`Paving and site works`,`Road construction, surface finishing, sidewalks and maintenance.`],[`Electrical contractors`,`Wiring, fire alarms, lighting, security systems and chargers.`],[`Cleaning and services`,`Recurring service contracts, facility services and operations work.`],[`Engineering and advisors`,`Design, supervision, consulting and project management where relevant.`]];return`
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
  `}function fn({t:e,escapeHtml:t,trialHref:n}){let r=[{key:`trial`,name:e(`pricingTrialPlan`),price:e(`pricingTrialPrice`),subtext:e(`pricingTrialSubtext`),items:[e(`pricingTrialManualProfile`),e(`pricingTrialFiltering`),e(`pricingTrialReportIfRelevant`),e(`pricingTrialNoCommitment`),e(`pricingTrialNoCard`)],cta:e(`pricingTrialCta`)},{key:`monitoring`,name:e(`pricingMonitoringPlan`),price:e(`pricingMonitoringPrice`),subtext:e(`pricingMonitoringSubtext`),highlighted:!0,items:[e(`pricingMonitoringSources`),e(`pricingMonitoringEmail`),e(`pricingMonitoringFilters`),e(`pricingMonitoringReminders`),e(`pricingMonitoringFeedback`),e(`pricingOneProfile`)],cta:e(`pricingMonitoringCta`)},{key:`custom`,name:e(`pricingCustomPlan`),price:e(`pricingCustomPrice`),items:[e(`pricingCustomProfiles`),e(`pricingCustomServices`),e(`pricingCustomMonitoring`),e(`pricingCustomPriorityReview`),e(`pricingCustomAudience`)],cta:e(`pricingCustomCta`)}];return`
    <section class="page-head">
      <p class="eyebrow">${t(e(`pricingEyebrow`))}</p>
      <h1>${t(e(`pricingHeadline`))}</h1>
      <p>${t(e(`pricingSubtitle`))}</p>
    </section>

    <section class="pricing-grid">
      ${r.map(r=>pn(r,{t:e,escapeHtml:t,trialHref:n})).join(``)}
    </section>
  `}function pn(e,{t,escapeHtml:n,trialHref:r}){let i=!!e.highlighted,a=`${r}${String(r).includes(`?`)?`&`:`?`}plan=${encodeURIComponent(e.key||`trial`)}`;return`
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
  `}var mn=[{name:`company`,label:`trialCompany`,type:`text`,autocomplete:`organization`,placeholder:`trialCompanyPlaceholder`,required:!0,error:`trialCompanyRequired`,width:`half`},{name:`contact`,label:`trialContact`,type:`text`,autocomplete:`name`,placeholder:`trialContactPlaceholder`,required:!0,error:`trialContactRequired`,width:`half`},{name:`email`,label:`trialEmail`,type:`email`,autocomplete:`email`,placeholder:`trialEmailPlaceholder`,required:!0,error:`trialEmailRequired`,width:`half`},{name:`phone`,label:`trialPhone`,type:`tel`,autocomplete:`tel`,placeholder:`trialPhonePlaceholder`,optional:!0,width:`half`,attrs:`inputmode="tel" maxlength="24"`},{name:`services`,label:`trialServices`,placeholder:`trialServicesPlaceholder`,required:!0,error:`trialServicesRequired`,textarea:!0,className:`is-services`},{name:`regions`,label:`trialRegions`,placeholder:`trialRegionsPlaceholder`,optional:!0,textarea:!0,className:`is-compact`},{name:`notes`,label:`trialNotes`,placeholder:`trialNotesPlaceholder`,optional:!0,textarea:!0,className:`is-compact`}];function hn({t:e,escapeHtml:t,submitted:n=!1,error:r=``,submitting:i=!1}){return`
    <section class="page-head pricing-head">
      <p class="eyebrow">${t(e(`trialRequestEyebrow`))}</p>
      <h1>${t(e(`trialRequestTitle`))}</h1>
      <p>${t(e(`trialRequestSubtitle`))}</p>
    </section>

    <section class="trial-request-layout">
      <form id="trial-request-form" class="form-card trial-request-card" novalidate>
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
        <p class="trial-request-intro">${t(e(`trialRequestIntro`))}</p>
        <div class="form-honeypot" aria-hidden="true">
          <label for="trial-website">Website</label>
          <input id="trial-website" name="website" type="text" tabindex="-1" autocomplete="off" />
        </div>
        <div class="trial-request-grid">
          ${mn.map(n=>vn(n,{t:e,escapeHtml:t})).join(``)}
        </div>
        <p class="muted-text">${t(e(`trialRequestHelper`))}</p>
        <button class="btn btn-primary btn-large trial-request-submit" type="submit" ${i?`disabled`:``}>
          ${t(e(i?`trialRequestSubmitting`:`trialRequestSubmit`))}
        </button>
      </form>
    </section>
  `}function gn(e,{t}={}){if(!e)return!0;yn(e);let n=typeof t==`function`?t:e=>e,r=[];for(let t of mn){let i=e.elements[t.name];if(!i)continue;let a=String(i.value||``).trim(),o=``;t.required&&!a?o=n(t.error):t.name===`email`&&a&&!i.validity.valid&&(o=n(`trialEmailInvalid`)),o&&(bn(i,o),r.push(i))}return r.length?(r[0].focus({preventScroll:!0}),r[0].scrollIntoView({behavior:`smooth`,block:`center`}),!1):!0}function _n(e){if(!e)return;e.removeAttribute(`aria-invalid`);let t=e.getAttribute(`aria-describedby`);if(!t)return;let n=document.getElementById(t);n&&(n.textContent=``)}function vn(e,{t,escapeHtml:n}){let r=`trial-${e.name}`,i=`${r}-error`,a=[`form-group`,`trial-request-field`,e.width===`half`?`is-half`:`is-full`,e.className||``].filter(Boolean).join(` `),o=e.required?` <span class="required-mark" aria-hidden="true">*</span>`:``,s=`
    <span class="trial-request-label">
      <span>${n(t(e.label))}${o}</span>
    </span>
  `,c=[`id="${r}"`,`name="${e.name}"`,`placeholder="${n(t(e.placeholder))}"`,`aria-describedby="${i}"`,e.required?`required aria-required="true"`:``,e.autocomplete?`autocomplete="${e.autocomplete}"`:``,e.attrs||``].filter(Boolean).join(` `);return`
    <label class="${a}" for="${r}">
      ${s}
      ${e.textarea?`<textarea ${c}></textarea>`:`<input type="${e.type||`text`}" ${c} />`}
      <span class="field-error" id="${i}" aria-live="polite"></span>
    </label>
  `}function yn(e){for(let t of e.querySelectorAll(`input, textarea`))_n(t)}function bn(e,t){e.setAttribute(`aria-invalid`,`true`);let n=e.getAttribute(`aria-describedby`),r=n?document.getElementById(n):null;r&&(r.textContent=t)}var xn=[`Reykjavík`,`Capital Area`,`Suðurnes`,`South Iceland`,`West Iceland`,`North Iceland`,`East Iceland`,`Westfjords`,`All Iceland`,`Remote / Online`];function Sn(e){let{t,escapeHtml:n,profileDraft:r,renderCustomDropdown:i,getFilterOptions:a}=e,o=r.industry||``;return`
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
        <label class="custom-select-field">${n(t(`selectedPlan`))}
          <input type="hidden" name="selectedPlan" value="${n(r.selectedPlan||`basic`)}" data-profile-field="selectedPlan" />
          ${i({key:`selectedPlan`,value:r.selectedPlan||`basic`,options:a(`selectedPlan`),profileField:`selectedPlan`})}
        </label>
        <label class="custom-select-field">${n(t(`industry`))}
          <input id="industry-input" type="hidden" name="industry" value="${n(o)}" required />
          ${i({key:`industry`,value:o,options:a(`industry`),profileField:`industry`})}
        </label>
      </div>
    </div>
  `}function Cn(e){let{t,escapeHtml:n,accountEmail:r}=e;return r?`
    <div class="form-section account-access-section">
      <h2>${n(t(`accountAccess`))}</h2>
      <div class="readonly-field">
        <span>${n(t(`loginEmail`))}</span>
        <strong>${n(r)}</strong>
      </div>
      <p class="field-helper">${n(t(`loginEmailHelper`))}</p>
    </div>
  `:``}function wn(e){let{t,escapeHtml:n,profileDraft:r,arrayFieldText:i,getProfileSuggestions:a,renderSuggestionChips:o}=e,s=r.industry||``,c=a(`services`,s),l=a(`includeKeywords`,s);return`
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
  `}function Tn(e){let{t,escapeHtml:n,profileDraft:r,arrayFieldText:i,formatCustomerLocation:a}=e;return`
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
      <div class="location-multiselect" data-location-selector>
        <button class="location-selector-toggle" type="button" data-action="toggle-location-selector" aria-expanded="false" aria-haspopup="listbox">
          <span class="location-selector-label">${n(t(`selectServiceAreas`))}</span>
          <span class="location-selector-summary">
            <strong>${n(En(r.locations||[],t,a))}</strong>
            <span class="location-selector-chevron" aria-hidden="true"></span>
          </span>
        </button>
        <div class="location-options-panel">
          <div class="checkbox-grid location-checkbox-grid">
            ${xn.map(e=>`
              <label class="checkbox">
                <input type="checkbox" name="locations" value="${e}" data-profile-location ${(r.locations||[]).includes(e)?`checked`:``} />
                <span>${n(a(e))}</span>
              </label>
            `).join(``)}
          </div>
          <button class="btn btn-secondary btn-small location-selector-done" type="button" data-action="close-location-selector">${n(t(`done`))}</button>
        </div>
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
  `}function En(e,t,n){let r=Array.isArray(e)?e.filter(Boolean):[];return r.length?r.length>3?t(`serviceAreasSelected`,{count:r.length}):r.map(e=>n(e)).join(`, `):t(`noServiceAreasSelected`)}function Dn(e){let{t,escapeHtml:n,profileDraft:r}=e;return`
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
  `}function On(e){let{t,escapeHtml:n,capitalize:r,profileDraft:i}=e;return`
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
  `}function kn(e){let{t,escapeHtml:n,hasProfile:r,isSavingProfile:i,profileSaved:a,profileSaveMessage:o,profileSaveError:s}=e,c=t(r?`saveProfile`:`createProfile`);return`
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
  `}function An(e){let t=e.formId||`profile-form`;return`
    <form id="${e.escapeHtml(t)}" class="form-card settings-profile-form">
      ${Cn(e)}
      ${Sn(e)}
      ${wn(e)}
      ${Tn(e)}
      ${Dn(e)}
      ${On(e)}
      ${kn(e)}
    </form>
  `}function jn({report:e,title:t,created:n,itemLabel:r,statusLabel:i,hideLabel:a,viewLabel:o,escapeHtml:s}){return`
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
  `}function Mn({report:e,options:t={},companyName:n,dateRange:r,generatedByLabel:i,reportTitleLabel:a,closeLabel:o,escapeHtml:s}){return`
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
  `}function Nn({label:e,value:t,escapeHtml:n}){return`
    <div class="report-summary-card">
      <span>${n(e)}</span>
      <strong>${t}</strong>
    </div>
  `}function Pn({title:e,description:t,opportunities:n,emptyText:r,renderOpportunityItem:i,escapeHtml:a}){return`
    <section class="report-section">
      <div class="report-section-head">
        <h3>${a(e)}</h3>
        <p>${a(t)}</p>
      </div>
      ${n.length?n.map(i).join(``):`<div class="report-empty">${a(r)}</div>`}
    </section>
  `}function Fn({opp:e,valueText:t,deadlineText:n,sourceUrl:r,risks:i,fallbackReason:a,qualityBadgeHtml:o,matchBadgeClass:s,matchLabel:c,statusText:l,buyerLabel:u,buyerValue:d,sourceLabel:f,sourceValue:p,areaLabel:m,areaValue:h,deadlineLabel:ee,valueLabel:g,whyLabel:te,risksLabel:_,openSourceLabel:v,sourceMissingLabel:y,formatReason:b,formatRisk:ne,escapeHtml:x}){let S=(e.matchReasons.length?e.matchReasons:[a]).slice(0,4);return`
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
        <span><strong>${x(ee)}</strong><em>${x(n)}</em></span>
        <span><strong>${x(g)}</strong><em>${x(t)}</em></span>
      </div>
      <div class="report-detail-grid">
        <div>
          <h5>${x(te)}</h5>
          <ul>${S.map(e=>`<li>${x(b(e))}</li>`).join(``)}</ul>
        </div>
        <div>
          <h5>${x(_)}</h5>
          <ul>${i.slice(0,5).map(e=>`<li>${x(ne(e))}</li>`).join(``)}</ul>
        </div>
      </div>
      ${r?`<a class="report-source-link" href="${x(r)}" target="_blank" rel="noopener">${x(v)} <span aria-hidden="true">↗</span></a>`:`<span class="report-source-link is-disabled">${x(y)}</span>`}
    </article>
  `}function In({status:e,label:t,escapeHtml:n}){return`<span class="report-quality ${n(e)}">${n(t)}</span>`}function Ln({t:e,escapeHtml:t,language:n,profileDraftDirty:r,profileLoadError:i,showTrialReset:a,profileFormHtml:o}){return`
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
    ${a?`<section class="danger-zone trial-reset-card">
      <h2>${t(e(`resetTrialTitle`))}</h2>
      <p>${t(e(`resetTrialText`))}</p>
      <button class="btn btn-ghost" data-action="reset-trial-data">${t(e(`resetTrialButton`))}</button>
    </section>`:``}
  `}async function Rn(e){if(!y)throw Error(`Trial request storage is not configured.`);Yn(e);let t=Kn(e);Jn(t);let n=qn(),{error:r}=await y.from(`trial_requests`).insert({id:n,...t});if(r)throw r;let i=await Bn(n).catch(e=>(console.warn(`Trial request was saved, but notification failed:`,e),{ok:!1,error:e instanceof Error?e.message:String(e)}));return{ok:!0,request:{id:n},stored:!0,notification:i}}async function zn(){if(!y)throw Error(`Trial request storage is not configured.`);let{data:e,error:t}=await y.from(`trial_requests`).select(`id, company_name, contact_name, email, phone, services, locations, message, status, created_at, converted_company_id, notification_sent_at, notification_started_at, notification_error`).order(`created_at`,{ascending:!1});if(t)throw t;return e||[]}async function Bn(e){let t=$n();if(!t)return{ok:!1,skipped:!0,reason:`notification_endpoint_not_configured`};let n=await fetch(t,{method:`POST`,headers:er(),body:JSON.stringify({requestId:e})}),r=await n.json().catch(()=>({}));if(!n.ok||r?.error)throw Error(r?.error||`Trial notification failed with status ${n.status}`);return r}async function Vn(e,t){if(!y)throw Error(`Trial request storage is not configured.`);let n=Xn(t);if(!e||![`contacted`,`rejected`].includes(n))throw Error(`Unsupported trial request status update.`);let{data:r,error:i}=await y.from(`trial_requests`).update({status:n}).eq(`id`,e).is(`converted_company_id`,null).select(`id, status, converted_company_id`).maybeSingle();if(i)throw i;if(!r)throw Error(`Trial request was not updated. It may already be converted.`);return r}async function Hn(e,t){let n=Qn();if(!n)throw Error(`Admin company action endpoint is not configured.`);let r=await tr(),i=await fetch(n,{method:`POST`,headers:r,body:JSON.stringify({action:`create_company_from_trial_request`,trialRequestId:e,company:t})}),a=await i.json().catch(()=>({}));if(!i.ok||a?.error)throw Error(a?.error||`Company creation failed with status ${i.status}`);return a}async function Un(e){let t=Qn();if(!t)throw Error(`Admin company action endpoint is not configured.`);if(!e)throw Error(`A trial request id is required.`);let n=await tr(),r=await fetch(t,{method:`POST`,headers:n,body:JSON.stringify({action:`delete_trial_request`,trialRequestId:e})}),i=await r.json().catch(()=>({}));if(!r.ok||i?.error)throw Error(i?.error||`Trial request deletion failed with status ${r.status}`);return i}function Wn(e,t){let n=t?t():{},r=Zn(e?.services),i=Zn(e?.locations);return{...n,companyName:String(e?.company_name||``).trim(),contactName:String(e?.contact_name||``).trim(),contactEmail:String(e?.email||``).trim(),billingEmail:String(e?.email||``).trim(),phone:String(e?.phone||``).trim(),services:r,includeKeywords:r,locations:i,serviceAreas:i,selectedPlan:n.selectedPlan||`basic`,billingStatus:n.billingStatus||`trial`,reportFrequency:n.reportFrequency||`weekly`,reportDay:n.reportDay||`monday`,deadlineReminders:n.deadlineReminders??!0,includeLowConfidence:n.includeLowConfidence??!1}}function Gn(e){let t={new:`Ný`,contacted:`Haft samband`,rejected:`Hafnað`,converted:`Umbreytt`};return t[Xn(e)]||t.new}function Kn(e){let t=t=>String(e.get(t)||``).trim();return{company_name:t(`company`),contact_name:t(`contact`),email:t(`email`),phone:t(`phone`),services:t(`services`),locations:t(`regions`),message:t(`notes`),status:`new`}}function qn(){return globalThis.crypto?.randomUUID?globalThis.crypto.randomUUID():`10000000-1000-4000-8000-100000000000`.replace(/[018]/g,e=>{let t=globalThis.crypto?.getRandomValues?globalThis.crypto.getRandomValues(new Uint8Array(1))[0]:Math.floor(Math.random()*256);return(Number(e)^t&15>>Number(e)/4).toString(16)})}function Jn(e){let t=[`company_name`,`contact_name`,`email`,`services`].filter(t=>!String(e[t]||``).trim());if(t.length)throw Error(`Missing required trial request fields: ${t.join(`, `)}`);if(!/^\S+@\S+\.\S+$/.test(String(e.email||``).trim()))throw Error(`A valid email address is required.`);if(String(e.phone||``).length>24)throw Error(`Phone number is too long.`)}function Yn(e){if(String(e.get(`website`)||``).trim())throw Error(`Request rejected.`)}function Xn(e){let t=String(e||`new`).trim().toLowerCase();return[`new`,`contacted`,`rejected`,`converted`].includes(t)?t:`new`}function Zn(e){return String(e||``).split(/[\n,;]+/).map(e=>e.trim()).filter(Boolean)}function Qn(){return window.VERKRADAR_ADMIN_COMPANY_ACTIONS_URL?window.VERKRADAR_ADMIN_COMPANY_ACTIONS_URL:window.VERKRADAR_SUPABASE_URL?`${window.VERKRADAR_SUPABASE_URL}/functions/v1/admin-company-actions`:`${_}/functions/v1/admin-company-actions`}function $n(){return window.VERKRADAR_NOTIFY_TRIAL_REQUEST_URL?window.VERKRADAR_NOTIFY_TRIAL_REQUEST_URL:window.VERKRADAR_SUPABASE_URL?`${window.VERKRADAR_SUPABASE_URL}/functions/v1/notify-trial-request`:`${_}/functions/v1/notify-trial-request`}function er(){return{"Content-Type":`application/json`,apikey:v,Authorization:`Bearer ${v}`}}async function tr(){let e={"Content-Type":`application/json`,apikey:v};if(!y)return e;let{data:t,error:n}=await y.auth.getSession();if(n)throw n;let r=t?.session?.access_token;if(!r)throw Error(`Admin authentication is required.`);return{...e,Authorization:`Bearer ${r}`}}async function nr(e){if(!y)throw Error(`Contact request storage is not configured.`);or(e);let t=ir(e);ar(t);let{error:n}=await y.from(`contact_requests`).insert(t);if(n)throw n;return{ok:!0,stored:!0}}async function rr(){if(!y)throw Error(`Contact request storage is not configured.`);let{data:e,error:t}=await y.from(`contact_requests`).select(`id, name, company_name, email, phone, subject, message, status, created_at`).order(`created_at`,{ascending:!1});if(t)throw t;return e||[]}function ir(e){let t=t=>String(e.get(t)||``).trim();return{name:t(`name`),company_name:t(`company`),email:t(`email`),phone:t(`phone`),subject:t(`subject`),message:t(`message`),status:`new`}}function ar(e){let t=Object.entries({name:`Nafn vantar.`,email:`Netfang vantar.`,subject:`Veldu efni.`,message:`Skilaboð vantar.`}).filter(([t])=>!String(e[t]||``).trim()).map(([,e])=>e);if(t.length)throw Error(t[0]);if(!/^\S+@\S+\.\S+$/.test(String(e.email||``).trim()))throw Error(`Skráðu gilt netfang.`)}function or(e){if(String(e.get(`website`)||``).trim())throw Error(`Request rejected.`)}var sr=[[`Tender and opportunity report`,`Útboðs- og verkefnayfirlit`],[`Weekly Opportunity Report`,`Útboðs- og verkefnayfirlit`],[`Open tenders / quote requests`,`Opin útboð / verðfyrirspurnir`],[`Possible upcoming opportunities`,`Möguleg væntanleg tækifæri`],[`Needs review`,`Þarfnast staðfestingar`],[`Strong match`,`Sterk samsvörun`],[`Good match`,`Góð samsvörun`],[`Possible match`,`Möguleg samsvörun`],[`Weak match`,`Veik samsvörun`],[`Quality`,`Gæði`],[`Buyer`,`Kaupandi`],[`Source`,`Heimild`],[`Location`,`Svæði`],[`Deadline`,`Skilafrestur`],[`Estimated value`,`Áætlað verðmæti`],[`Value`,`Áætlað verðmæti`],[`Why this matters`,`Af hverju þetta gæti skipt máli`],[`Why this fits`,`Af hverju þetta gæti skipt máli`],[`Risks / things to check`,`Atriði til að staðfesta`],[`Open source`,`Opna heimild`],[`Unknown buyer`,`Óþekktur kaupandi`],[`All Iceland`,`Allt landið`],[`Not found`,`Fannst ekki`],[`Not listed`,`Ekki gefið upp`]];function cr(e,t){return t===`is`?sr.reduce((e,[t,n])=>e.replaceAll(t,n),String(e||``)):e}function lr(e){return Array.from(new Set((e||[]).map(e=>String(e||``).trim()).filter(Boolean)))}function ur(e){return String(e||``).replace(/^mentions your service:\s*/i,``).replace(/^contains your keyword:\s*/i,``).replace(/^mentions core service:\s*/i,``).replace(/^nefnir þjónustu ykkar:\s*/i,``).replace(/^inniheldur leitarorð:\s*/i,``).replace(/^nefnir lykilþjónustu:\s*/i,``).trim()}function A(e,t=`is`){let n=t!==`en`;return{downloadPdf:n?`Sækja PDF`:`Download PDF`,copyReportEmail:n?`Afrita skýrslupóst`:`Copy report email`,markAsSent:n?`Merkja sem sent`:`Mark as sent`,marking:n?`Merkir...`:`Marking...`,close:n?`Loka`:`Close`,sentStatus:n?`Sendingarstaða`:`Sent status`,notSent:n?`Ekki sent`:`Not sent`,sentOn:n?`Sent`:`Sent on`,company:n?`Fyrirtæki`:`Company`,period:n?`Tímabil`:`Period`,generatedAt:n?`Útbúið`:`Generated at`,mode:n?`Gerð`:`Mode`,items:n?`Fjöldi`:`Items`,currentActive:n?`Núverandi virk tækifæri`:`Current active opportunities`,newOpportunities:n?`Ný tækifæri`:`New opportunities`,reasons:n?`Ástæður`:`Reasons`,openSource:n?`Opna heimild`:`Open source`,verifyBadge:n?`Staðfesta gögn`:`Verify documents`,verifyTenderDocs:n?`Staðfesta útboðsgögn`:`Verify tender documents`,verificationSentence:n?`Staðfesta þarf útboðsgögn áður en brugðist er við.`:`Tender documents should be verified before taking action.`,matchScore:n?`Samsvörun`:`Match`,strongMatchScore:n?`Sterk samsvörun`:`Strong match`,openActiveTitle:n?`Opin útboð / virk tækifæri`:`Open tenders / active opportunities`,openActiveDescription:n?`Opin útboð eða virk verðfyrirspurnaratriði með skilafresti. Yfirfarið frumgögn áður en brugðist er við.`:`Open tenders or active quote-request items with deadlines. Review source documents before acting.`,possibleTitle:n?`Möguleg tækifæri til skoðunar`:`Possible opportunities to review`,possibleDescription:n?`Tækifæri sem gætu átt við, en þar sem þarf að staðfesta umfang, kröfur eða hlutverk fyrirtækisins.`:`Opportunities that may fit, but where scope, requirements, or company role should be verified.`,earlyTitle:n?`Væntanleg verkefni / early signals`:`Upcoming projects / early signals`,earlyDescription:n?`Vísbendingar um möguleg framtíðarverkefni sem eru ekki endilega formleg útboð ennþá.`:`Signals for possible future projects that may not be formal tenders yet.`}[e]||e}function dr(e=`is`){return A(`verificationSentence`,e)}function fr(e,t=`is`){let n=Number(e?.matchScore||e?.match_score||0)>=85;return t===`en`?n?`Strong match`:`Match`:n?`Sterk samsvörun`:`Samsvörun`}function pr(e,t=`is`){let n=String(e?.aiReviewFit||e?.ai_review_fit||``).toLowerCase()===`strong`||Number(e?.matchScore||e?.match_score||0)>=85;return t===`en`?n?`Recommended — tender documents should be verified`:`Possible opportunity — tender documents should be verified`:n?`Mælt með — staðfesta þarf útboðsgögn`:`Mögulegt tækifæri — staðfesta þarf útboðsgögn`}function mr(e,t=`is`){let n=String(e?.aiReviewFit||e?.ai_review_fit||``).toLowerCase();return t===`en`?n===`strong`||Number(e?.matchScore||0)>=85?`Recommended`:n===`possible`?`Possible opportunity`:String(e?.reportSection||``)===`early`?`Upcoming signal`:`Verify documents`:n===`strong`||Number(e?.matchScore||0)>=85?`Mælt með`:n===`possible`?`Mögulegt tækifæri`:String(e?.reportSection||``)===`early`?`Væntanlegt / merki`:`Staðfesta útboðsgögn`}function hr(e=[],t=`is`){let n=[],r=new Set;for(let i of e||[]){let e=String(i||``).trim();if(!e)continue;let a=e.toLowerCase();if(a.includes(`winter/snow service fit`)){n.push(t===`is`?`Passar við vetrarþjónustu/snjómokstur; staðfestið umfang og getu.`:`Winter/snow service fit; verify capacity and scope.`);continue}if(a.includes(`deadline is valid and in the future`)){n.push(t===`is`?`Skilafrestur er í framtíðinni.`:`Deadline is valid and in the future.`);continue}if(a.includes(`location matches company service areas`)){n.push(t===`is`?`Staðsetning passar við þjónustusvæði.`:`Location matches company service areas.`);continue}if(a.includes(`verify capacity and scope`)){n.push(t===`is`?`Staðfestið umfang og getu.`:`Verify capacity and scope.`);continue}let o=ur(e),s=o.toLowerCase();if(!o||r.has(s))continue;r.add(s);let c=t===`is`&&/passar|nefnir|stað|skilafrestur|þjónustu|umfang/i.test(o);n.push(t===`is`?c?o:`Passar við þjónustu eða leitarorð: ${o}`:/matches|mentions|deadline|location|verify/i.test(o)?o:`Matches service or keyword: ${o}`)}return lr(n).slice(0,4)}function gr(e,t=`is`){let n=String(e||``).trim();if(!n)return``;let r=n.toLowerCase();if(t!==`en`){if(r.includes(`deadline not available`))return`Skilafrestur fannst ekki í innfluttum gögnum — staðfestið á upprunasíðu.`;if(r.includes(`open the source documents`))return`Opna útboðsgögn.`;if(r.includes(`confirm mandatory requirements`))return`Staðfesta kröfur og hæfisskilyrði.`;if(r.includes(`check capacity and profitability`))return`Meta getu og arðsemi.`;if(r.includes(`prepare questions before the deadline`))return`Undirbúa fyrirspurnir fyrir skilafrest.`;if(r.includes(`verify capacity and scope`))return`Staðfestið umfang og getu.`}return n}function _r({companyName:e,matches:t,language:n=`is`}){let r=n!==`en`,i=r?`Sæll/Sæl,

VerkRadar fann eftirfarandi tækifæri sem gætu passað við ykkar þjónustu:`:`Hi,

VerkRadar found the following opportunities that may fit your services:`,a=r?`Staðfestið alltaf útboðsgögn, skilafresti og kröfur á upprunalegri heimild áður en brugðist er við.

Kv.
Kristján`:`Always verify the tender documents, deadlines, requirements, and eligibility on the original source before taking action.

Best,
Kristján`;return`${i}\n\n${(t||[]).map(e=>{let t=hr(e.matchReasons||e.reasons||[],n),i=t.length?t.map(e=>`- ${e}`).join(`
`):`- ${r?`Passar við fyrirtækjaprófílinn.`:`Matches the company profile.`}`;return r?`${e.title}
Útboðsaðili: ${e.buyer||`Óþekktur kaupandi`}
Skilafrestur: ${e.deadline||`Fannst ekki`}
Staða: ${pr(e,n)}

Af hverju þetta gæti passað:
${i}

Heimild:
${e.url||`Engin heimild skráð`}`:`${e.title}
Buyer: ${e.buyer||`Unknown buyer`}
Deadline: ${e.deadline||`Not found`}
Status: ${pr(e,n)}

Why this may fit:
${i}

Source:
${e.url||`No source URL listed`}`}).join(`

`)||(r?`Engin atriði eru í þessu yfirliti.`:`No items are included in this report.`)}\n\n${a}`}function vr(e){return String(e||``).toLowerCase()}function yr(e){return Array.isArray(e)?e.map(e=>String(e||``).trim()).filter(Boolean):[]}function br(e){return Array.from(new Set((e||[]).map(e=>String(e||``).trim()).filter(Boolean)))}function xr(e){return e?new Date(e).getTime():NaN}function Sr(e){let t=xr(e);if(Number.isNaN(t))return!0;let n=new Date;return n.setHours(0,0,0,0),t<n.getTime()}function Cr(e={}){return{aiReviewFit:vr(e.fit),aiReviewConfidence:Number(e.confidence||0),aiReviewSendToClient:e.send_to_client===!0||e.sendToClient===!0,aiReviewReason:String(e.reason||``),aiFitReasons:yr(e.fit_reasons||e.fitReasons),aiRisksOrQuestions:yr(e.risks_or_questions||e.risksOrQuestions),aiSuggestedClientSummary:String(e.suggested_client_summary||e.suggestedClientSummary||``),aiReviewedAt:e.updated_at||e.created_at||``}}function wr(e,t){let n=new Map;for(let e of t||[]){let t=String(e.opportunity_id||e.opportunityId||``);t&&n.set(t,Cr(e))}return(e||[]).map(e=>{let t=n.get(String(e.id||e.opportunity_id||``));return t?{...e,...t,matchReasons:br([t.aiSuggestedClientSummary,...t.aiFitReasons,...Array.isArray(e.matchReasons)?e.matchReasons:[]]),risks:br([...t.aiRisksOrQuestions,...Array.isArray(e.risks)?e.risks:[]])}:e})}function Tr(e){return Er(e)!==`excluded`}function Er(e){let t=vr(e?.aiReviewFit||e?.ai_review_fit);if(!e?.deadline||Sr(e.deadline))return`excluded`;let n=e?.aiReviewSendToClient===!0||e?.ai_review_send_to_client===!0;if(String(e?.aiReviewSkippedReason||e?.ai_review_skipped_reason||``).toLowerCase()===`outside_service_area`||[e?.aiReviewReason,...yr(e?.aiRisksOrQuestions||e?.risks_or_questions)].join(` `).toLowerCase().includes(`outside service area`))return`excluded`;if(t)return[`weak`,`no_fit`].includes(t)?`excluded`:t===`strong`&&n?`ai_strong`:t===`possible`&&n?`ai_possible`:`excluded`;let r=String(e?.safetyStatus||e?.safety_status||`auto_approved`).toLowerCase();if(r===`hidden`||r===`needs_review`)return`excluded`;let i=Number(e?.matchScore||e?.match_score||0),a=String(e?.matchLabel||e?.match_label||``).toLowerCase();return i>=75||a.includes(`strong`)||a.includes(`good`)?`rule_fallback`:`excluded`}function Dr(e){let t=Er(e);return Or(e)&&(t===`ai_strong`||t===`ai_possible`||t===`rule_fallback`)?`confirmed`:t===`ai_possible`||t===`rule_fallback`?`early`:`excluded`}function Or(e){return!!e?.deadline&&!Sr(e.deadline)}function kr(e){return[...e||[]].filter(Tr).sort((e,t)=>{let n={ai_strong:0,ai_possible:1,rule_fallback:2},r=Er(e),i=Er(t);return(n[r]??9)-(n[i]??9)||Number(t.aiReviewConfidence||t.ai_review_confidence||0)-Number(e.aiReviewConfidence||e.ai_review_confidence||0)||Number(t.matchScore||t.match_score||0)-Number(e.matchScore||e.match_score||0)||xr(e.deadline)-xr(t.deadline)})}function j(e){if(!e)return 999;let t=new Date,n=new Date(`${e}T00:00:00`);if(Number.isNaN(n.getTime()))return 999;let r=n-new Date(t.getFullYear(),t.getMonth(),t.getDate());return Math.ceil(r/(1e3*60*60*24))}function Ar(e){if(!e)return`No deadline`;let t=new Date(`${e}T00:00:00`);return Number.isNaN(t.getTime())?String(e):new Intl.DateTimeFormat(`en-GB`,{year:`numeric`,month:`short`,day:`2-digit`}).format(t)}function M(e){return e?new Intl.DateTimeFormat(`en-GB`,{year:`numeric`,month:`short`,day:`2-digit`}).format(new Date(e)):`Unknown date`}function jr(e){return Array.from(new Set((e||[]).map(e=>String(e||``).trim()).filter(Boolean)))}function N(e){return String(e||``).split(`,`).map(e=>e.trim()).filter(Boolean)}function P(e){return jr(Array.isArray(e)?e:N(e))}function Mr(e){return N(e)}function F(e){return String(e||``).toLowerCase().normalize(`NFD`).replace(/[\u0300-\u036f]/g,``).replace(/æ/g,`ae`).replace(/[ðþ]/g,e=>e===`ð`?`d`:`th`).replace(/[^a-z0-9]+/g,` `).trim()}function I(e){return String(e??``).replaceAll(`&`,`&amp;`).replaceAll(`<`,`&lt;`).replaceAll(`>`,`&gt;`).replaceAll(`"`,`&quot;`).replaceAll(`'`,`&#039;`)}function Nr(e){return String(e||``).charAt(0).toUpperCase()+String(e||``).slice(1)}function Pr(e){return/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(String(e||``))}function Fr(e){let t=String(e||``).trim();return/^https?:\/\//i.test(t)?t:``}function Ir(e,t=`ISK`){if(!e)return``;let n=t||`ISK`,r=n===`ISK`?`kr`:n;return`${new Intl.NumberFormat(`is-IS`).format(e)} ${r}`}function Lr(e,t){let n=t||(e=>e);return{"Confirmed tender":n(`confirmedTender`),"Likely opportunity":n(`likelyOpportunity`),"Early signal":n(`earlySignal`),"Needs review":n(`needsReview`),"Tender awarded":n(`tenderAwarded`),"Tender already announced":n(`tenderAlreadyAnnounced`),"Upcoming tender":n(`upcomingTender`),"Project signal":n(`projectSignal`),"Original language":n(`originalLanguage`)}[e]||e||``}function Rr(e,t){let n=t||(e=>e);return{"Strong match":n(`strongMatch`),"Good match":n(`goodMatch`),"Possible match":n(`possibleMatch`),"Weak match":n(`weakMatch`)}[e]||e||``}function zr(e,t,n){let r=n||(e=>e),i=String(t||``).trim();return i?e===`buyer`&&(Br(i)||i.toLowerCase()===`unknown buyer`)?r(`unknownBuyer`):e===`location`&&i.toLowerCase()===`all iceland`?r(`allIceland`):e===`source`?i.replace(/\bprocurement\b/gi,r(`procurement`)):i:r(e===`buyer`?`unknownBuyer`:`notListed`)}function Br(e){let t=F(e);return!!(!t||[`admin`,`administrator`,`ritstjori`,`editor`,`noreply`,`no reply`,`wordpress`,`wp admin`,`user`,`test`].includes(t)||t.includes(`noreply`)||/^wp\s*[-_]?\s*\d+$/.test(t))}function Vr(e){let t=F(e);return t?t.includes(`borgarbyggd`)?`Borgarbyggð`:t.includes(`akranes`)?`Akraneskaupstaður`:t.includes(`faxafloahafnir`)?`Faxaflóahafnir`:t.includes(`gardabaer`)?`Garðabær`:t.includes(`reykjanesbaer`)?`Reykjanesbær`:t.includes(`kopavogur`)?`Kópavogur`:t.includes(`hafnarfjordur`)?`Hafnarfjarðarbær`:t.includes(`mosfellsbaer`)?`Mosfellsbær`:t.includes(`arborg`)?`Sveitarfélagið Árborg`:t.includes(`fjardabyggd`)?`Fjarðabyggð`:t.includes(`mulathing`)?`Múlaþing`:t.includes(`garðabaer`)?`Garðabær`:(t.includes(`rikiskaup`)||t.includes(`utbodsvefur`),``):``}function Hr(e,t,n={}){let r=String(e||``).trim();if(/reykjavíkurborg/i.test(r))return`Reykjavíkurborg`;if(r&&!Br(r)&&r.toLowerCase()!==`unknown buyer`)return r;let i=String(n.extracted_buyer||n.buyer||``).trim();return/reykjavíkurborg/i.test(i)?`Reykjavíkurborg`:i&&!Br(i)&&i.toLowerCase()!==`unknown buyer`?i:Vr(t)||`Unknown buyer`}function Ur(e){let t=F(e);return t?t.includes(`borgarbyggd`)?`Borgarbyggð / Vesturland`:t.includes(`akranes`)?`Akranes / Vesturland`:t.includes(`faxafloahafnir`)?`Höfuðborgarsvæðið`:t.includes(`arborg`)?`Árborg / Suðurland`:``:``}function Wr(e,t,n){let r=String(e||``).trim();return t===`is`&&{"Capital Area":`Höfuðborgarsvæðið`,"South Iceland":`Suðurland`,"West Iceland":`Vesturland`,"North Iceland":`Norðurland`,"East Iceland":`Austurland`,Westfjords:`Vestfirðir`,"All Iceland":(n||(e=>e))(`allIceland`),"Remote / Online":`Fjarvinna / netverkefni`}[r]||r}function Gr(e,t,{language:n=`en`,translate:r}={}){let i=r||(e=>e),a=zr(e,t,i);if(n!==`is`)return a;let o=String(a||``).trim().toLowerCase();return{"public procurement":i(`publicProcurement`),procurement:i(`procurement`),tender:i(`tender`)}[o]||a.replace(/\bpublic procurement\b/gi,i(`publicProcurement`)).replace(/\btender\b/gi,i(`tender`))}function Kr(e,{language:t=`en`,translate:n}={}){let r=n||((e,t={})=>t.value?`${e}: ${t.value}`:e),i=String(e||``);return i.startsWith(`Mentions your service:`)?r(`mentionsService`,{value:i.slice(22).trim()}):i.startsWith(`Contains your keyword:`)?r(`containsKeyword`,{value:i.slice(22).trim()}):{"National opportunity":r(`nationalOpportunity`),"Local match":r(`localMatch`),"Located in your selected region":r(`localMatch`),"Project value is inside your preferred range":t===`is`?`Áætlað verðmæti er innan óskaðs bils`:`Project value is inside your preferred range`,"Deadline is coming up soon":t===`is`?`Skilafrestur nálgast`:`Deadline is coming up soon`,"Matched to your company profile.":t===`is`?`Passar við fyrirtækjaprófílinn.`:`Matched to your company profile.`,"Matched to your profile by service, location or keyword overlap.":t===`is`?`Passar við þjónustu, svæði eða lykilorð í prófílnum.`:`Matched to your profile by service, location or keyword overlap.`}[i]||i||``}function qr(e,t=`en`){return t===`is`?{"Deadline not available in feed — verify on source page.":`Skilafrestur fannst ekki í innfluttum gögnum — staðfestið á upprunasíðu.`,"Deadline not available in imported data — verify on source page.":`Skilafrestur fannst ekki í innfluttum gögnum — staðfestið á upprunasíðu.`,"Deadline not available in source — verify page.":`Skilafrestur fannst ekki í heimild - staðfestið á upprunalegri síðu.`,"No formal tender deadline extracted — verify source article.":`Formlegur skilafrestur fannst ekki - staðfestið í heimildargrein.`,"Formal tender deadline not found yet — monitor source article.":`Formlegur skilafrestur fannst ekki enn - fylgist með heimildargrein.`,"Tender appears already announced/awarded — verify source article.":`Útboð virðist þegar auglýst eða afgreitt - staðfestið í heimildargrein.`,"Estimated value is not listed in the imported data.":`Áætlað verðmæti er ekki gefið upp í innfluttum gögnum.`,"Open the source page and confirm mandatory requirements.":`Opnið upprunalega heimild og staðfestið skyldukröfur.`,"Extracted project signal — verify tender timing in the source article.":`Útdregin verkefnavísbending - staðfestið útboðstímasetningu í heimildargrein.`,"Imported from broad feed — verify that this is a real tender or business opportunity.":`Innflutt úr breiðum fréttastraumi - staðfestið að þetta sé raunverulegt útboð eða viðskiptatækifæri.`}[e]||e||``:e||``}function Jr(e,t=`en`){return t===`is`?{"Open the source documents":`Opna útboðsgögn`,"Confirm mandatory requirements":`Staðfesta kröfur og hæfisskilyrði`,"Check capacity and profitability":`Meta getu og arðsemi`,"Prepare questions before the deadline":`Undirbúa fyrirspurnir fyrir skilafrest`,"Open source documents and confirm requirements.":`Opna útboðsgögn og staðfesta kröfur.`}[e]||e||``:e||``}var Yr=`Deadline not available in imported data — verify on source page.`,Xr=`No formal tender deadline extracted — verify source article.`,Zr=`id, owner_id, company_name, kennitala, contact_email, billing_email, contact_name, phone, address, website, industry, plan, selected_plan, billing_status, trial_started_at, trial_ends_at, base_location, service_areas, willing_to_travel, national_projects, remote_projects, minimum_project_value_for_travel, min_project_value, max_project_value, allow_unknown_value, report_frequency, report_day, deadline_reminders, include_low_confidence, auto_alert_mode`;function Qr(){return n(e)}function L(e,t={}){return r(R?.language||`is`,e,t)}function $r(t){R.language=t===`en`?`en`:`is`,localStorage.setItem(e.language,R.language),Z()}var ei=d,ti=12e3;function ni(){return f(R.user?.email||``)}var R={route:location.hash.replace(`#`,``)||`/`,language:Qr(),pendingSignupPlan:ui(location.hash.replace(`#`,``)||`/`)||ai(),pendingInviteToken:me(location.hash.replace(`#`,``)||`/`),invitePreview:null,invitePreviewLoading:!1,invitePreviewError:null,invitePreviewErrorToken:``,invitePreviewDebug:null,inviteAccepting:!1,inviteAuthEvent:``,inviteCallbackHandled:!1,trialRequestSubmitted:!1,trialRequestSubmitting:!1,trialRequestError:``,contactRequestSubmitted:!1,contactRequestSubmitting:!1,contactRequestError:``,user:null,currentUser:null,isAdmin:!1,authLoading:!0,isBooting:!0,authLoaded:!1,profileLoaded:!1,adminLoaded:!1,bootError:null,authMessage:null,authForm:{email:``,password:``,newPassword:``,confirmPassword:``},authSubmitting:!1,isSavingProfile:!1,profileSaved:!1,profileSaveMessage:null,profileSaveError:null,profile:null,companyMembership:null,profileDraft:null,profileDraftDirty:!1,profileLoading:!1,profileLoadError:null,companyId:null,opportunities:[],opportunitiesLoaded:!1,storedMatches:[],opportunityActions:[],saved:as(e.saved),ignored:as(e.ignored),filters:{search:``,label:`recommended`,category:`all`,location:`all`,type:`all`,savedOnly:!1},tedImportMode:`nordic`,dropdown:{openKey:null,focusedIndex:0},importStatus:null,importLoading:!1,connectorImportStatus:null,connectorImportLoading:!1,connectorTestingSourceId:null,importedTedOpportunities:[],importedTedOpportunitiesLoading:!1,importedTedOpportunitiesLoaded:!1,importedTedOpportunitiesError:null,importRuns:[],importRunsLoading:!1,importRunsLoaded:!1,importRunsError:null,adminReports:[],adminReportsLoading:!1,adminReportsLoaded:!1,adminReportsError:null,adminTrialRequests:[],adminTrialRequestsLoading:!1,adminTrialRequestsLoaded:!1,adminTrialRequestsError:null,adminContactRequests:[],adminContactRequestsLoading:!1,adminContactRequestsLoaded:!1,adminContactRequestsError:null,selectedAdminTrialRequestId:null,adminTrialRequestActions:{},adminTrialCompanyDraft:null,adminTrialCompanySaving:!1,adminTrialCompanyMessage:``,adminTrialCompanyError:``,selectedAdminReport:null,selectedAdminReportLoading:!1,selectedAdminReportError:null,sourceCoverage:[],sourceCoverageLoading:!1,sourceCoverageLoaded:!1,sourceCoverageError:null,expandedSourceId:null,adminCompanies:[],adminCompaniesLoading:!1,adminCompaniesLoaded:!1,adminCompaniesError:null,adminReviewMatches:[],adminReviewLoading:!1,adminReviewLoaded:!1,adminReviewError:null,adminReviewActions:{},adminAiReviewActions:{},adminAiReviewError:null,adminCompanyAiReviewActions:{},adminCompanyAiReviewResults:{},adminCompanyAiReviewFilter:`not_reviewed`,adminCompanyActions:{},adminCompanyAccessActions:{},adminCompanyInviteDrafts:{},adminCompanyInviteLinks:{},adminCompanyInviteDebug:{},adminCompanyProfileDirty:{},adminCompanyProfileResults:{},adminReportDeliveryActions:{},selectedAdminCompanyId:null,adminActiveTab:`overview`,adminCompanyFilters:{search:``,industry:`all`,profileStatus:`all`,plan:`all`},adminReportMode:`all_current`,adminOpportunityFilters:{source:`all`,missingDeadlineSource:`all`,status:`all`,country:`all`,search:``,debugCompanyId:``,tedOnly:!1,manualOnly:!1,showDemoTest:!1,...ci()},adminOpportunityDraft:yi(),matchStatus:null,matchingLoading:!1,lastMatchedAt:null,reports:[],reportsLoaded:!1,reportsLoadError:null,reportArchiveLoading:!1,reportSaveLoading:!1,reportMessage:null,selectedReportId:null,selectedAdminReportId:null,adminTrialDeleteConfirmId:null,adminMessage:null,adminSubmitting:!1,adminDeletingId:null,adminUpdatingId:null,isLoadingOpportunities:!1,opportunityLoadError:null,isMobileMenuOpen:!1,isMobileMenuClosing:!1,profileMenuOpen:!1,selectedOpportunityId:null,toast:null};function ri(e=R.route){return String(e||`/`).split(`?`)[0]||`/`}function ii(e=R.route){let t=String(e||``).split(`?`)[1]||``;return new URLSearchParams(t)}function z(e){let t=String(e||``).trim().toLowerCase();return[`basic`,`pro`,`priority`].includes(t)?t:``}function ai(){try{return z(localStorage.getItem(e.selectedPlan))}catch{return``}}function oi(t){let n=z(t);try{n&&localStorage.setItem(e.selectedPlan,n)}catch{}return n}function si(){try{localStorage.removeItem(e.selectedPlan)}catch{}}function ci(){try{let e=sessionStorage.getItem(`verkradar_admin_opportunity_view`),t=e?JSON.parse(e):{};return{sortBy:Xl(t.sortBy),addedWindow:Zl(t.addedWindow)}}catch{return{sortBy:`created_desc`,addedWindow:`all`}}}function li(){try{sessionStorage.setItem(`verkradar_admin_opportunity_view`,JSON.stringify({sortBy:Xl(R.adminOpportunityFilters?.sortBy),addedWindow:Zl(R.adminOpportunityFilters?.addedWindow)}))}catch{}}function ui(e=R.route){return z(ii(e).get(`plan`))}function di(e=R.route){let t=ui(e);t&&(R.pendingSignupPlan=oi(t))}function fi(e=R.route){let t=w(e);if(pe(e)&&!t){let e=he();if(e){R.pendingInviteToken=e;return}pi();return}if(pe(e)&&t&&t!==R.pendingInviteToken){R.pendingInviteToken=_e(t),R.invitePreview=null,R.invitePreviewError=null,R.invitePreviewErrorToken=``;return}pe(e)||pi()}function pi(){ve(),R.pendingInviteToken=``,R.invitePreview=null,R.invitePreviewError=null,R.invitePreviewErrorToken=``,R.invitePreviewDebug=null,R.inviteAccepting=!1}async function B(e={}){if(!ce())return;let t=await ue(R.inviteAuthEvent);R.invitePreviewDebug={...le(R.route),...t,...R.invitePreviewDebug||{},...e}}function mi(e){return[`expired`,`revoked`].includes(String(e||``))}function hi(){return window.location.pathname===`/auth/callback`}async function gi(){let e=ae();if(!y||R.inviteCallbackHandled||!hi()&&!e.hasImplicitTokens)return!1;R.inviteCallbackHandled=!0;let t=T(e.invite||he());t&&(R.pendingInviteToken=_e(t)),await B({auth_flow:e.code?`pkce`:e.hasImplicitTokens?`implicit_fallback`:`unknown`,raw_token_had_fragment:e.rawTokenHadFragment,sanitized_token_length:t.length,code_present:!!e.code,exchange_code_attempted:!1,exchange_code_succeeded:!1,session_present:!1});try{if(e.code){await B({exchange_code_attempted:!0});let{data:t,error:n}=await y.auth.exchangeCodeForSession(e.code);if(n)throw n;await B({exchange_code_succeeded:!0,session_present:!!t?.session})}else if(e.hasImplicitTokens){let{data:t,error:n}=await y.auth.setSession({access_token:e.accessToken,refresh_token:e.refreshToken});if(n)throw n;await B({auth_flow:`implicit_fallback`,session_present:!!t?.session})}}catch(e){console.error(`Auth callback handling failed:`,e),await B({auth_callback_error:errorMessage(e),exchange_code_succeeded:!1})}let n=se(t);return rs(),R.route=n,!0}function _i(e){let t=R.pendingInviteToken||w(R.route);return t&&pe(R.route)?`${e}?invite=${encodeURIComponent(t)}`:e}`scrollRestoration`in history&&(history.scrollRestoration=`manual`);function vi(){localStorage.removeItem(`verkradar_profile`),localStorage.removeItem(`verkradar_local_user_id`),localStorage.removeItem(`verkradar_saved_opportunities`),localStorage.removeItem(`verkradar_ignored_opportunities`),Ac(),R.profile=null,R.profileDraft=null,R.profileDraftDirty=!1,R.currentUser=null,R.companyId=null,R.storedMatches=[],R.opportunityActions=[],R.reports=[],R.reportsLoaded=!1,R.reportsLoadError=null,R.reportMessage=null,R.selectedReportId=null,R.profileSaved=!1,R.profileSaveMessage=null,R.profileSaveError=null,R.saved=[],R.ignored=[],R.importRuns=[],R.importRunsLoading=!1,R.importRunsLoaded=!1,R.importRunsError=null,R.importedTedOpportunities=[],R.importedTedOpportunitiesLoading=!1,R.importedTedOpportunitiesLoaded=!1,R.importedTedOpportunitiesError=null,R.adminReports=[],R.adminReportsLoading=!1,R.adminReportsLoaded=!1,R.adminReportsError=null,R.selectedAdminReport=null,R.selectedAdminReportLoading=!1,R.selectedAdminReportError=null,R.sourceCoverage=[],R.sourceCoverageLoading=!1,R.sourceCoverageLoaded=!1,R.sourceCoverageError=null,R.adminCompanies=[],R.adminCompaniesLoading=!1,R.adminCompaniesLoaded=!1,R.adminCompaniesError=null,R.selectedAdminCompanyId=null,R.lastMatchedAt=null}function yi(){return{title:``,buyer:``,sourceName:``,category:``,type:`tender`,deadline:``,published_date:``,location:``,estimated_value:``,url:``,cpv_code:``,difficulty:`medium`,status:`open`,description:``,requirements:``,keywords:``}}function bi(e){let t=yi();Object.keys(t).forEach(n=>{t[n]=String(e.get(n)||``)}),R.adminOpportunityDraft=t}var xi=!1,Si=null,Ci=220;window.addEventListener(`hashchange`,()=>{let e=location.hash.replace(`#`,``)||`/`,t=ri(e),n=e!==R.route;if(xi&&e===R.route){xi=!1;return}xi=!1,[`/login`,`/signup`,`/forgot-password`,`/reset-password`].includes(t)&&e!==R.route&&(R.authMessage=null,R.authSubmitting=!1),R.route=e,n&&rs(),di(e),fi(e),Di(),R.profileMenuOpen=!1,n&&Ac(),Z(),zi(),H()}),document.addEventListener(`click`,e=>{R.dropdown.openKey&&!e.target.closest?.(`.custom-select`)&&wu();let t=document.querySelector(`[data-contact-subject-select].is-open`);if(t&&!e.target.closest?.(`[data-contact-subject-select]`)&&Eu(t),e.target.closest?.(`[data-location-selector]`)||document.querySelectorAll(`[data-location-selector].is-open`).forEach(e=>{e.classList.remove(`is-open`),e.querySelector(`[data-action='toggle-location-selector']`)?.setAttribute(`aria-expanded`,`false`)}),R.profileMenuOpen&&!e.target.closest?.(`.profile-menu`)&&(R.profileMenuOpen=!1,Z()),e.target.classList?.contains(`modal-backdrop`)){if(e.preventDefault(),R.selectedAdminCompanyId){R.selectedAdminCompanyId=null,Z();return}kc();return}if((R.isMobileMenuOpen||R.isMobileMenuClosing)&&!e.target.closest?.(`.site-header`)){Ei();return}let n=e.target.closest?.(`[data-action]`);if(!n)return;let r=n.dataset.action,i=n.dataset.id;if(r===`close-modal`){if(e.preventDefault(),e.stopPropagation(),R.selectedAdminCompanyId){R.selectedAdminCompanyId=null,Z();return}kc();return}if(r===`toggle-mobile-menu`){e.preventDefault(),R.isMobileMenuOpen||R.isMobileMenuClosing?Ei():Ti();return}if(r===`close-mobile-menu`){e.preventDefault(),Ei();return}if(r===`mobile-nav`){e.preventDefault(),Oi(n.dataset.href);return}if(r===`mobile-scroll-to`){e.preventDefault(),ki(n.dataset.target);return}if(r===`toggle-profile-menu`){if(e.preventDefault(),R.isMobileMenuOpen||Ai()){R.profileMenuOpen=!1,Z();return}R.profileMenuOpen=!R.profileMenuOpen,Z();return}if(r===`toggle-language`){e.preventDefault(),$r(R.language===`is`?`en`:`is`);return}if(r===`toggle-dropdown`){e.preventDefault();let t=n.dataset.key,r=R.dropdown.openKey===t;R.dropdown.openKey=r?null:t,R.dropdown.focusedIndex=xu(t),Z(),r||ju();return}if(r===`toggle-contact-subject`){e.preventDefault();let t=n.closest(`[data-contact-subject-select]`);if(!t)return;let r=!t.classList.contains(`is-open`);Tu(t,r),r&&Ou(t);return}if(r===`select-contact-subject`){e.preventDefault();let t=n.closest(`[data-contact-subject-select]`);if(!t)return;ku(t,n);return}if(r===`select-filter`){e.preventDefault();let t=n.dataset.key,r=n.dataset.value;if(n.dataset.profileField){let e=n.dataset.profileField,t=e===`selectedPlan`?z(r)||`basic`:r;n.closest?.(`#admin-trial-company-form`)?(fs(),R.adminTrialCompanyDraft[e]=t):(J(),R.profileDraft[e]=t,_s())}else R.filters[t]=r;R.dropdown.openKey=null,R.dropdown.focusedIndex=0,Z();return}if(r===`toggle-profile-suggestion`){e.preventDefault(),n.closest?.(`#admin-trial-company-form`)?ms(n.dataset.field,n.dataset.value):ds(n.dataset.field,n.dataset.value);return}if(r===`scroll-to`){e.preventDefault();let t=n.dataset.target;if(!t)return;let r=()=>{R.route===`/`?(Z(),setTimeout(()=>Bi(t),0)):(V(`/`),setTimeout(()=>Bi(t),50))};R.isMobileMenuOpen||R.isMobileMenuClosing?Ei(r):r();return}if(r===`close-toast`){e.preventDefault(),ns();return}if(r===`go`){e.preventDefault(),R.profileMenuOpen=!1,R.isMobileMenuOpen||R.isMobileMenuClosing?Ei(()=>V(n.dataset.href)):V(n.dataset.href);return}if(r===`accept-company-invite`){hl();return}if(r===`save`&&Tc(i),r===`ignore`&&Ec(i),r===`unignore`&&Dc(i),r===`details`&&Oc(i),r===`admin-report-override`){Zo(i,n.dataset.override||``);return}if(r===`copy-report`&&Xf(),r===`download-report-pdf`&&Zf(),r===`download-admin-report-pdf`){Qf();return}if(r===`save-report`&&Go(),r===`archive-report`){Ko(i);return}if(r===`view-report`&&(R.selectedReportId=i,Z()),r===`close-archive-report`&&(R.selectedReportId=null,Z()),r===`view-admin-report`){rs(),R.selectedAdminReportId=i,R.selectedAdminReport=null,R.selectedAdminReportError=null,R.adminActiveTab=`reports`,Z(),Xi(i);return}if(r===`close-admin-report`){R.selectedAdminReportId=null,R.selectedAdminReport=null,R.selectedAdminReportError=null,Z();return}if(r===`copy-admin-report`){Kl(i);return}if(r===`mark-admin-report-sent`){ql(i);return}if(r===`admin-tab`){if(!oa())return;rs(),R.adminActiveTab=n.dataset.tab||`overview`,R.selectedAdminCompanyId=null,R.selectedAdminReportId=null,R.selectedAdminTrialRequestId=null,R.adminTrialDeleteConfirmId=null,R.adminTrialCompanyDraft=null,Z(),Wc()}if(r===`view-admin-company`){if(R.selectedAdminCompanyId&&R.selectedAdminCompanyId!==i&&!oa())return;R.selectedAdminCompanyId=i,Z()}if(r===`close-admin-company`){if(!oa())return;R.selectedAdminCompanyId=null,Z()}if(r===`view-admin-trial-request`){R.selectedAdminTrialRequestId=i,R.adminTrialCompanyDraft=null,R.adminTrialCompanyMessage=``,R.adminTrialCompanyError=``,Z();return}if(r===`close-admin-trial-request`){R.selectedAdminTrialRequestId=null,R.adminTrialCompanyDraft=null,R.adminTrialDeleteConfirmId=null,R.adminTrialCompanyMessage=``,R.adminTrialCompanyError=``,Z();return}if(r===`admin-trial-request-status`){qi(i,n.dataset.status||``);return}if(r===`delete-admin-trial-request`){R.adminTrialDeleteConfirmId=i,R.adminTrialRequestsError=null,Z();return}if(r===`cancel-admin-trial-delete`){R.adminTrialDeleteConfirmId=null,Z();return}if(r===`confirm-admin-trial-delete`){Ji(R.adminTrialDeleteConfirmId);return}if(r===`admin-start-trial-company`){ps(i);return}if(r===`admin-refresh-company-matches`){_a(i);return}if(r===`admin-generate-company-report`){va(i);return}if(r===`admin-review-match`){ya(i,n.dataset.companyId||``,n.dataset.reviewAction||``);return}if(r===`admin-ai-review-match`){ba(i,{force:n.dataset.force===`true`});return}if(r===`admin-ai-review-company`){xa(i,{force:n.dataset.force===`true`});return}if(r===`admin-run-auto-ai-review`){Sa();return}if(r===`admin-run-daily-pipeline`){Ca();return}if(r===`admin-toggle-company-auto-ai`){wa(i,n.dataset.enabled===`true`);return}if(r===`admin-invite-company-customer`){da(i);return}if(r===`admin-revoke-company-access`){fa(i,n.dataset.memberId||``);return}if(r===`admin-copy-company-invite-link`){ga(i);return}if(r===`import-ted`&&po(),r===`import-source-connectors`&&mo(),r===`test-source-connector`&&mo(i),r===`toggle-source-items`&&(R.expandedSourceId=R.expandedSourceId===i?null:i,Z()),r===`refresh-admin-status`&&Oa(),r===`hide-imported-opportunity`&&Xo(i,`hidden`),r===`mark-imported-relevant`&&Xo(i,`open`),r===`run-matching`&&qo(),r===`retry-settings-profile`&&Io(),r===`show-all-matches`&&(R.filters.label=`all`,Z()),r===`show-all-opportunities`&&(R.filters.label=`all_opportunities`,Z()),r===`include-national-opportunities`&&(J(),R.profileDraft.nationalProjects=!0,R.profileDraft.locations.includes(`All Iceland`)||(R.profileDraft.locations=[...R.profileDraft.locations,`All Iceland`]),_s(),V(`/settings`)),r===`toggle-location-selector`){e.preventDefault();let t=(n.closest?.(`[data-location-selector]`))?.classList.toggle(`is-open`);n.setAttribute(`aria-expanded`,t?`true`:`false`);return}if(r===`close-location-selector`){e.preventDefault();let t=n.closest?.(`[data-location-selector]`);t?.classList.remove(`is-open`),t?.querySelector?.(`[data-action='toggle-location-selector']`)?.setAttribute(`aria-expanded`,`false`),Z();return}if(r===`reset-trial-data`){if(!window.confirm(L(`resetTrialConfirm`)))return;vi(),V(`/`);return}if(r===`delete-opportunity`&&Yo(i),r===`logout`){if(R.profileMenuOpen=!1,Ac(),R.isMobileMenuOpen||R.isMobileMenuClosing){Ei(()=>To());return}To()}}),document.addEventListener(`keydown`,e=>{if(e.key===`Escape`&&(R.isMobileMenuOpen||R.isMobileMenuClosing)){e.preventDefault(),Ei();return}if(e.key===`Escape`&&R.profileMenuOpen){e.preventDefault(),R.profileMenuOpen=!1,Z();return}if(e.key===`Escape`&&R.selectedOpportunityId){e.preventDefault(),kc();return}if(e.key===`Escape`&&R.selectedAdminCompanyId){if(e.preventDefault(),!oa())return;R.selectedAdminCompanyId=null,Z();return}let t=e.target.closest?.(`[data-contact-subject-select]`);if(t&&Au(e,t))return;let n=e.target.closest?.(`.custom-select`),r=n?.dataset.key||R.dropdown.openKey;if(!r)return;let i=yu(r),a=R.dropdown.openKey===r;if(e.key===`Escape`&&a){e.preventDefault(),wu(),Mu(r);return}if((e.key===`ArrowDown`||e.key===`ArrowUp`)&&!a){e.preventDefault(),R.dropdown.openKey=r,R.dropdown.focusedIndex=xu(r),Z(),ju();return}if(a){if(e.key===`ArrowDown`||e.key===`ArrowUp`){e.preventDefault();let t=e.key===`ArrowDown`?1:-1;R.dropdown.focusedIndex=(R.dropdown.focusedIndex+t+i.length)%i.length,Z(),ju();return}if(e.key===`Enter`||e.key===` `){e.preventDefault();let t=i[R.dropdown.focusedIndex];if(!t)return;let a=n?.querySelector?.(`[data-profile-field]`)?.dataset.profileField;a?(J(),R.profileDraft[a]=a===`selectedPlan`?z(t.value)||`basic`:t.value,_s()):R.filters[r]=t.value,R.dropdown.openKey=null,R.dropdown.focusedIndex=0,Z(),Mu(r)}}}),document.addEventListener(`input`,e=>{let t=e.target?.closest?.(`[data-admin-company-profile-form]`);if(t){let e=t.dataset.companyId||``;R.adminCompanyProfileDirty={...R.adminCompanyProfileDirty||{},[e]:!0}}let n=e.target.closest?.(`[data-auth-field]`);if(n){R.authForm[n.dataset.authField]=n.value;return}let r=e.target.closest?.(`[data-profile-field]`);if(r){let t=e.target.closest?.(`#admin-trial-company-form`);if(t){bs(t);return}J();let n=r.dataset.profileField;r.type===`checkbox`?R.profileDraft[n]=r.checked:r.dataset.profileArray===`true`?R.profileDraft[n]=N(r.value):(r.dataset.profileNumber,R.profileDraft[n]=r.value),_s();return}if(e.target.matches(`[data-filter]`)){let t=e.target.dataset.filter;e.target.type===`checkbox`?R.filters[t]=e.target.checked:R.filters[t]=e.target.value,Z()}if(e.target.matches(`[data-admin-filter]`)){let t=e.target.dataset.adminFilter;R.adminOpportunityFilters=Yl(),e.target.type===`checkbox`?(R.adminOpportunityFilters[t]=e.target.checked,t===`tedOnly`&&e.target.checked&&(R.adminOpportunityFilters.manualOnly=!1),t===`manualOnly`&&e.target.checked&&(R.adminOpportunityFilters.tedOnly=!1)):R.adminOpportunityFilters[t]=e.target.value,(t===`sortBy`||t===`addedWindow`)&&li(),Uc(e.target);return}if(e.target.matches(`[data-admin-opportunity-field]`)){let t=e.target.dataset.adminOpportunityField;R.adminOpportunityDraft={...yi(),...R.adminOpportunityDraft||{},[t]:e.target.value};return}if(e.target.matches(`[data-admin-company-filter]`)){let t=e.target.dataset.adminCompanyFilter;R.adminCompanyFilters[t]=e.target.value,Uc(e.target);return}if(e.target.matches(`[data-admin-company-invite-email]`)){let t=e.target.dataset.id||``;t&&(R.adminCompanyInviteDrafts={...R.adminCompanyInviteDrafts||{},[t]:e.target.value});return}e.target.matches(`[data-admin-report-mode]`)&&(R.adminReportMode=e.target.value===`all_current`?`all_current`:`new_only`,Z()),e.target.matches(`[data-admin-company-ai-filter]`)&&(R.adminCompanyAiReviewFilter=e.target.value||`not_reviewed`,Uc(e.target))}),document.addEventListener(`change`,e=>{if(e.target.matches(`[data-admin-filter]`)){let t=e.target.dataset.adminFilter;R.adminOpportunityFilters=Yl(),e.target.type===`checkbox`?(R.adminOpportunityFilters[t]=e.target.checked,t===`tedOnly`&&e.target.checked&&(R.adminOpportunityFilters.manualOnly=!1),t===`manualOnly`&&e.target.checked&&(R.adminOpportunityFilters.tedOnly=!1)):R.adminOpportunityFilters[t]=e.target.value,(t===`sortBy`||t===`addedWindow`)&&li(),Uc(e.target);return}if(e.target.matches(`[data-import-mode]`)){R.tedImportMode=e.target.value,Z();return}if(e.target.matches(`[data-admin-company-ai-filter]`)){R.adminCompanyAiReviewFilter=e.target.value||`not_reviewed`,Uc(e.target);return}if(e.target.matches(`[data-profile-location]`)){let t=e.target.closest?.(`#admin-trial-company-form`);if(t){bs(t);return}J(),R.profileDraft.locations=Array.from(document.querySelectorAll(`[data-profile-location]:checked`)).map(e=>e.value),_s();return}let t=e.target.closest?.(`[data-profile-field]`);if(!t)return;let n=e.target.closest?.(`#admin-trial-company-form`);if(n){bs(n);return}J();let r=t.dataset.profileField;R.profileDraft[r]=t.type===`checkbox`?t.checked:t.value,_s()}),document.addEventListener(`input`,e=>{e.target?.closest?.(`#trial-request-form`)&&_n(e.target),e.target?.closest?.(`#contact-request-form`)&&cn(e.target)}),document.addEventListener(`submit`,async e=>{if(e.target.id===`login-form`){e.preventDefault();let t=new FormData(e.target);So(t.get(`email`),t.get(`password`));return}if(e.target.id===`signup-form`){e.preventDefault();let t=new FormData(e.target);xo(t.get(`email`),t.get(`password`));return}if(e.target.id===`trial-request-form`){if(e.preventDefault(),R.trialRequestSubmitting||(R.trialRequestError=``,!gn(e.target,{t:L})))return;let t=e.target,n=t.querySelector(`button[type="submit"]`),r=n?.textContent||``,i=new FormData(t);R.trialRequestSubmitting=!0,n&&(n.disabled=!0,n.textContent=L(`trialRequestSubmitting`));try{await Rn(i),R.trialRequestSubmitted=!0,Z(),zi()}catch(e){console.error(`Trial request failed:`,e),R.trialRequestSubmitted=!1,R.trialRequestError=L(`trialRequestError`),q(L(`trialRequestError`),`error`);let n=t.querySelector(`.admin-message.is-error`);n&&n.remove(),t.insertAdjacentHTML(`afterbegin`,`<div class="admin-message is-error"><span>`+I(L(`trialRequestError`))+`</span></div>`)}finally{R.trialRequestSubmitting=!1,n&&!R.trialRequestSubmitted&&(n.disabled=!1,n.textContent=r||L(`trialRequestSubmit`))}return}if(e.target.id===`contact-request-form`){if(e.preventDefault(),R.contactRequestSubmitting||(R.contactRequestError=``,!sn(e.target)))return;let t=e.target,n=new FormData(t),r=t.querySelector(`button[type="submit"]`),i=r?.textContent||``;R.contactRequestSubmitting=!0,r&&(r.disabled=!0,r.textContent=`Sendi...`);try{await nr(n),R.contactRequestSubmitted=!0,Z(),zi()}catch(e){console.error(`Contact request failed:`,e),R.contactRequestSubmitted=!1,R.contactRequestError=K(e)||`Gat ekki sent skilaboð. Reyndu aftur.`,q(R.contactRequestError,`error`);let n=t.querySelector(`.admin-message.is-error`);n&&n.remove(),t.insertAdjacentHTML(`afterbegin`,`<div class="admin-message is-error" role="alert"><span>${I(R.contactRequestError)}</span></div>`)}finally{R.contactRequestSubmitting=!1,r&&!R.contactRequestSubmitted&&(r.disabled=!1,r.textContent=i||`Senda skilaboð`)}return}if(e.target.id===`forgot-password-form`){e.preventDefault(),Co(new FormData(e.target).get(`email`));return}if(e.target.id===`reset-password-form`){e.preventDefault();let t=new FormData(e.target);wo(t.get(`newPassword`),t.get(`confirmPassword`));return}if(e.target.id===`admin-opportunity-form`){e.preventDefault();let t=new FormData(e.target);bi(t),Jo(t,e.target);return}if(e.target.id===`admin-trial-company-form`){e.preventDefault(),await Yi(e.target);return}if(e.target.matches(`[data-admin-company-profile-form]`)){e.preventDefault();let t=e.submitter?.dataset?.adminProfileSubmit===`refresh`?`refresh`:`save`;await pa(e.target.dataset.companyId||``,e.target,{refreshMatches:t===`refresh`});return}if(e.target.matches(`[data-admin-match-decision-form]`)){e.preventDefault(),await ma(e.target.dataset.companyId||``,e.target);return}if(e.target.matches(`[data-admin-evaluation-label-form]`)){e.preventDefault(),await ha(e.target.dataset.companyId||``,e.target);return}if(e.target.id===`profile-form`){e.preventDefault(),R.profileSaved=!1,ys(e.target);let t=Ss();if(!t.companyName||!t.kennitala||!t.contactEmail||!t.billingEmail||!t.contactName||!t.phone||!t.address||!t.industry){q(R.language===`is`?`Fylltu út fyrirtækisnafn, kennitölu, reikningsupplýsingar, tengilið og atvinnugrein.`:`Please fill in company name, kennitala, billing details, contact details and industry.`,`error`);return}R.isSavingProfile=!0,R.profileSaved=!1,R.profileSaveMessage=null,R.profileSaveError=null,Z();let n=R.route!==`/settings`;try{if(await Vo(t),await Po({overwriteDraft:!0}),R.profileLoadError)throw Error(`Profile saved, but the saved profile could not be reloaded. ${R.profileLoadError}`);R.profileSaveMessage=`Refreshing matches...`,R.profileSaveError=null,Z();let e=await qo();if(R.matchStatus?.type===`error`)R.profileSaveMessage=`Profile saved, but matching could not be refreshed. Try Run matching.`;else{let t=e===1?`opportunity`:`opportunities`;R.profileSaveMessage=n?`Profile saved — ${e} relevant ${t} found. Redirecting...`:`Profile saved — ${e} relevant ${t} found.`}R.profileSaved=!0,Z(),clearTimeout(window.__profileSavedTimeout),window.__profileSavedTimeout=setTimeout(()=>{R.profileSaved=!1,Z()},1800),n&&setTimeout(()=>V(`/dashboard`),800)}catch(e){console.error(`Failed to save company profile:`,e),R.profileSaveError=K(e),R.profileSaveMessage=null,R.profileSaved=!1}finally{R.isSavingProfile=!1,Z()}}}),window.addEventListener(`focus`,wi),document.addEventListener(`visibilitychange`,()=>{document.visibilityState===`visible`&&wi()});function wi(){R.route===`/settings`&&R.profileDraftDirty&&(R.profileLoading=!1,R.profileLoaded=!0,Z())}function Ti(){Si&&=(clearTimeout(Si),null),ji(),R.isMobileMenuOpen=!0,R.isMobileMenuClosing=!1,R.profileMenuOpen=!1,document.body.classList.add(`mobile-menu-active`),Z()}function Ei(e){let t=()=>{typeof e==`function`&&e()};if(!R.isMobileMenuOpen&&!R.isMobileMenuClosing){t();return}R.isMobileMenuOpen=!1,R.isMobileMenuClosing=!0,R.profileMenuOpen=!1,Z(),Si&&clearTimeout(Si);let n=window.matchMedia?.(`(prefers-reduced-motion: reduce)`).matches?0:Ci;Si=setTimeout(()=>{Si=null,R.isMobileMenuClosing=!1,document.body.classList.remove(`mobile-menu-active`),Z(),t()},n)}function Di(){Si&&=(clearTimeout(Si),null),R.isMobileMenuOpen=!1,R.isMobileMenuClosing=!1,document.body.classList.remove(`mobile-menu-active`)}function Oi(e){if(e){if(!R.isMobileMenuOpen&&!R.isMobileMenuClosing){V(e);return}Ei(()=>V(e))}}function ki(e){if(!e)return;let t=()=>{R.route===`/`?(Z(),setTimeout(()=>Bi(e),0)):(V(`/`),setTimeout(()=>Bi(e),50))};if(!R.isMobileMenuOpen&&!R.isMobileMenuClosing){t();return}Ei(t)}function Ai(){return typeof window<`u`&&window.matchMedia?.(`(max-width: 920px)`).matches}function ji(){let e=document.querySelector(`.site-header`);e&&document.documentElement.style.setProperty(`--header-height`,`${Math.ceil(e.getBoundingClientRect().height)}px`)}window.addEventListener(`resize`,()=>{ji(),!Ai()&&(R.isMobileMenuOpen||R.isMobileMenuClosing)&&(Di(),Z())});function V(e){e||=`/`;let t=[`/login`,`/signup`,`/forgot-password`,`/reset-password`],n=ri(e);if(t.includes(n)&&e!==R.route&&(R.authMessage=null,R.authSubmitting=!1),Di(),R.profileMenuOpen=!1,R.route===e){Z(),zi(),H();return}rs(),Ac(),R.route=e,di(e),fi(e),xi=!0,location.hash=e,Z(),zi(),H()}function Mi(){if(!R.user&&!R.currentUser)return`/`;let e=Ni();return e?`/accept-invite?token=${encodeURIComponent(e)}`:R.profile?`/dashboard`:`/onboarding`}function Ni(){return T(w(R.route)||R.pendingInviteToken||he())}function Pi(){return!R.user&&!R.currentUser?`/trial`:R.profile?`/dashboard`:`/onboarding`}function Fi(e=R.route){let t=String(e||``);if(Ii(t))return!1;let n=ri(t);return[`/`,`/login`,`/signup`,`/forgot-password`].includes(n)||t.startsWith(`access_token=`)||t.startsWith(`code=`)||t.includes(`type=signup`)||t.includes(`type=email_change`)}function Ii(e=R.route){let t=String(e||``);return t===`/reset-password`||t.startsWith(`/reset-password`)||t.includes(`type=recovery`)}function Li(e){R.route=e,location.hash.replace(`#`,``)!==e&&history.replaceState(null,``,`#${e}`)}function Ri({replace:e=!1}={}){if(!R.user&&!R.currentUser||!Fi())return!1;let t=Mi();return R.authMessage=null,e?Li(t):V(t),!0}function H(){let e=Ni();if(R.user&&e&&ri(R.route)!==`/accept-invite`){R.pendingInviteToken=_e(e),B({pending_invite_present:!0,onboarding_redirect_blocked:!0,final_route:`/accept-invite?token=${encodeURIComponent(e)}`}),Li(`/accept-invite?token=${encodeURIComponent(e)}`),Z();return}if(ri(R.route)===`/accept-invite`&&(ml(),R.user&&!R.inviteAccepting&&!R.invitePreviewError&&hl()),ri(R.route)===`/onboarding`&&R.user&&R.profile){Li(`/dashboard`),Z();return}R.route===`/report`&&R.companyId&&!R.reportsLoaded&&!R.reportArchiveLoading&&Wo(),R.route===`/admin`&&R.isAdmin&&(Wc(),!R.opportunitiesLoaded&&!R.isLoadingOpportunities&&Hi(),!R.importRunsLoaded&&!R.importRunsLoading&&Ui(),!R.adminReportsLoaded&&!R.adminReportsLoading&&Wi(),!R.adminTrialRequestsLoaded&&!R.adminTrialRequestsLoading&&Gi(),!R.adminContactRequestsLoaded&&!R.adminContactRequestsLoading&&Ki(),!R.sourceCoverageLoaded&&!R.sourceCoverageLoading&&Qi(),!R.adminCompaniesLoaded&&!R.adminCompaniesLoading&&U(),!R.adminReviewLoaded&&!R.adminReviewLoading&&$i(),!R.importedTedOpportunitiesLoaded&&!R.importedTedOpportunitiesLoading&&ho().then(Z).catch(e=>{console.error(`Failed to load latest TED opportunities:`,e)}))}function zi(){window.scrollTo(0,0)}function Bi(e){let t=document.getElementById(e);t&&t.scrollIntoView({behavior:`smooth`,block:`start`})}function Vi(){return!!(R.authLoaded&&R.user&&R.isAdmin)}async function Hi(){if(!Vi()){R.opportunities=[],R.opportunitiesLoaded=!1,R.opportunityLoadError=null;return}R.isLoadingOpportunities=!0,R.opportunityLoadError=null,Z();try{if(!y)throw Error(`Supabase client not configured`);let{data:e,error:t}=await y.from(`opportunities`).select(`*, sources(name, source_type)`).eq(`status`,`open`).order(`deadline`,{ascending:!0});if(t)throw t;R.opportunities=(e||[]).map(ka),R.opportunitiesLoaded=!0,R.opportunityLoadError=null,R.companyId&&(await Sc(),await Uo())}catch(e){console.error(`Failed to load Supabase opportunities:`,e),R.opportunities=[],R.opportunitiesLoaded=!0,R.companyId?(await Sc(),await Uo()):R.storedMatches=[],R.opportunityLoadError=K(e)}finally{R.isLoadingOpportunities=!1,Z()}}async function Ui(){if(!y||!R.isAdmin){R.importRuns=[],R.importRunsLoaded=!0;return}R.importRunsLoading=!0,R.importRunsError=null,Z();try{let{data:e,error:t}=await y.from(`import_runs`).select(`*`).order(`started_at`,{ascending:!1}).limit(10);if(t)throw t;R.importRuns=e||[],R.importRunsLoaded=!0}catch(e){console.error(`Failed to load import runs:`,e),R.importRuns=[],R.importRunsError=K(e)}finally{R.importRunsLoading=!1,R.importRunsLoaded=!0,Z()}}async function Wi(){if(!y||!R.isAdmin){R.adminReports=[],R.adminReportsLoaded=!0;return}R.adminReportsLoading=!0,R.adminReportsError=null,Z();try{let{data:e,error:t}=await y.from(`reports`).select(`
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
      `).order(`created_at`,{ascending:!1}).limit(10);if(t)throw t;R.adminReports=e||[],R.adminReportsLoaded=!0}catch(e){console.error(`Failed to load admin reports:`,e),R.adminReports=[],R.adminReportsError=K(e)}finally{R.adminReportsLoading=!1,R.adminReportsLoaded=!0,Z()}}async function Gi(){if(!y||!R.isAdmin){R.adminTrialRequests=[],R.adminTrialRequestsLoaded=!0;return}R.adminTrialRequestsLoading=!0,R.adminTrialRequestsError=null,Z();try{R.adminTrialRequests=await zn()}catch(e){console.error(`Failed to load trial requests:`,e),R.adminTrialRequests=[],R.adminTrialRequestsError=K(e)}finally{R.adminTrialRequestsLoading=!1,R.adminTrialRequestsLoaded=!0,Z()}}async function Ki(){if(!y||!R.isAdmin){R.adminContactRequests=[],R.adminContactRequestsLoaded=!0;return}R.adminContactRequestsLoading=!0,R.adminContactRequestsError=null,Z();try{R.adminContactRequests=await rr()}catch(e){R.adminContactRequests=[],Ud(e)?R.adminContactRequestsError=`Contact request storage is not available. Run the contact_requests migration to enable this admin tab.`:(console.error(`Failed to load contact requests:`,e),R.adminContactRequestsError=K(e))}finally{R.adminContactRequestsLoading=!1,R.adminContactRequestsLoaded=!0,Z()}}async function qi(e,t){if(e){R.adminTrialRequestActions={...R.adminTrialRequestActions||{},[e]:t},R.adminTrialCompanyError=``,R.adminTrialCompanyMessage=``,Z();try{await Vn(e,t),await Gi(),q(t===`contacted`?`Beiðni merkt sem haft samband.`:`Beiðni hafnað.`,`success`)}catch(e){console.error(`Failed to update trial request:`,e),R.adminTrialCompanyError=K(e),q(R.adminTrialCompanyError,`error`),Z()}finally{R.adminTrialRequestActions={...R.adminTrialRequestActions||{},[e]:null},Z()}}}async function Ji(e){if(e){R.adminTrialRequestActions={...R.adminTrialRequestActions||{},[e]:`delete`},R.adminTrialRequestsError=null,Z();try{let t=await Un(e);R.adminTrialRequests=(R.adminTrialRequests||[]).filter(t=>t.id!==e),R.selectedAdminTrialRequestId===e&&(R.selectedAdminTrialRequestId=null,R.adminTrialCompanyDraft=null,R.adminTrialCompanyMessage=``,R.adminTrialCompanyError=``),R.adminTrialDeleteConfirmId=null,q(t?.was_converted||t?.converted_company_id?`Prufubeiðni eytt. Fyrirtækið var ekki fjarlægt.`:`Prufubeiðni eytt.`,`success`)}catch(e){console.error(`Failed to delete trial request:`,e),R.adminTrialRequestsError=K(e),q(R.adminTrialRequestsError,`error`)}finally{R.adminTrialRequestActions={...R.adminTrialRequestActions||{},[e]:null},Z()}}}async function Yi(e){let t=_d();if(!t)return;if(t.converted_company_id||t.status===`converted`){R.adminTrialCompanyError=`Þessi beiðni hefur þegar verið umbreytt.`,Z();return}bs(e);let n=Cs();if(!n.companyName||!n.kennitala||!n.contactEmail||!n.billingEmail||!n.contactName||!n.phone||!n.address||!n.industry){R.adminTrialCompanyError=`Fylltu út fyrirtækisnafn, kennitölu, tengilið, reikningsnetfang, síma, heimilisfang og atvinnugrein áður en fyrirtæki er stofnað.`,R.adminTrialCompanyMessage=``,Z(),q(R.adminTrialCompanyError,`error`);return}R.adminTrialCompanySaving=!0,R.adminTrialCompanyError=``,R.adminTrialCompanyMessage=``,Z();try{let e=await Hn(t.id,n);R.adminTrialCompanyMessage=`Fyrirtæki stofnað: ${e.company_name||n.companyName}`,R.adminTrialCompanyDraft=null,R.selectedAdminCompanyId=e.company_id||null,await Promise.all([Gi(),U()]),q(`Fyrirtæki stofnað úr prufubeiðni.`,`success`)}catch(e){console.error(`Failed to create company from trial request:`,e),R.adminTrialCompanyError=K(e),q(R.adminTrialCompanyError,`error`)}finally{R.adminTrialCompanySaving=!1,Z()}}async function Xi(e){if(!(!y||!R.isAdmin||!e)){R.selectedAdminReportLoading=!0,R.selectedAdminReportError=null,Z();try{let{data:t,error:n}=await y.from(`reports`).select(`
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
      `).eq(`id`,e).single();if(n)throw n;await Zi(t),R.selectedAdminReportId===e&&(R.selectedAdminReport=t)}catch(t){console.error(`Failed to load admin report details:`,t),R.selectedAdminReportId===e&&(R.selectedAdminReport=null,R.selectedAdminReportError=K(t))}finally{R.selectedAdminReportId===e&&(R.selectedAdminReportLoading=!1,Z())}}}async function Zi(e){let t=Array.isArray(e?.report_items)?e.report_items:[],n=t.map(e=>e.opportunity_id).filter(Boolean);if(!y||!e?.company_id||!n.length)return;let{data:r,error:i}=await y.from(`company_opportunity_sends`).select(`opportunity_id, sent_at, created_at, channel`).eq(`company_id`,e.company_id).in(`opportunity_id`,n).in(`channel`,[`manual_email`,`automated_email`]);if(i){console.warn(`Failed to load report sent status:`,i);return}let a=new Map((r||[]).map(e=>[String(e.opportunity_id),e]));t.forEach(e=>{let t=a.get(String(e.opportunity_id));e.sent_at=t?.sent_at||t?.created_at||``,e.delivery_type=t?.channel||``})}async function Qi(){if(!y||!R.isAdmin){R.sourceCoverage=[],R.sourceCoverageLoaded=!0;return}R.sourceCoverageLoading=!0,R.sourceCoverageError=null,Z();try{let{data:e,error:t}=await y.from(`sources`).select(`
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
      `).order(`name`,{ascending:!0});if(t)throw t;let n=(e||[]).map(e=>({...e,source_status:Array.isArray(e.source_status)?e.source_status[0]:e.source_status,source_connectors:Array.isArray(e.source_connectors)?e.source_connectors[0]:e.source_connectors})),r=n.map(e=>e.id).filter(Boolean),i={};if(r.length){let{data:e,error:t}=await y.from(`opportunities`).select(`id, source_id, title, buyer, deadline, status, url, raw_payload, created_at, published_date`).in(`source_id`,r).eq(`status`,`open`).order(`created_at`,{ascending:!1}).limit(500);if(t)throw t;i=(e||[]).reduce((e,t)=>(e[t.source_id]||(e[t.source_id]=[]),e[t.source_id].push(t),e),{})}R.sourceCoverage=n.map(e=>{let t=i[e.id]||[];return{...e,opportunityStats:Il(t),latestOpportunities:t.slice(0,8)}}),R.sourceCoverageLoaded=!0}catch(e){console.error(`Failed to load source coverage:`,e),R.sourceCoverage=[],R.sourceCoverageError=K(e)}finally{R.sourceCoverageLoading=!1,R.sourceCoverageLoaded=!0,Z()}}async function U(){if(!y||!R.isAdmin){R.adminCompanies=[],R.adminCompaniesLoaded=!0;return}R.adminCompaniesLoading=!0,R.adminCompaniesError=null,Z();try{R.adminAiUsageSummary=await Je().catch(e=>(console.warn(`Failed to load AI usage summary:`,e),null));let{data:e,error:t}=await y.from(`companies`).select(`*`).order(`created_at`,{ascending:!1});if(t)throw t;let n=e||[],r=n.map(e=>e.id).filter(Boolean),i=[],a=[],o=[],s=[],c=[],l=[],u=[],d=[],f=[],p=[];if(r.length){let[e,t,n,m,h,ee,g,te,_,v]=await Promise.all([y.from(`company_services`).select(`company_id, service`).in(`company_id`,r),y.from(`company_locations`).select(`company_id, location`).in(`company_id`,r),y.from(`company_keywords`).select(`company_id, keyword, type`).in(`company_id`,r),y.from(`opportunity_matches`).select(`id, company_id, opportunity_id, match_score, match_label, safety_status, ai_review_status, ai_review_fit, ai_review_confidence, ai_reviewed_at, ai_review_skipped_reason, opportunities(title, buyer, location, raw_payload, source_id, sources(name))`).in(`company_id`,r),y.from(`reports`).select(`id, company_id, title, created_at, period_start, period_end, status`).in(`company_id`,r).order(`created_at`,{ascending:!1}),y.from(`ai_match_reviews`).select(`id, company_id, opportunity_id, match_id, fit, confidence, send_to_client, reason, reviewed_profile_hash, profile_updated_at, company_services_snapshot, company_locations_snapshot, created_at, updated_at`).in(`company_id`,r),y.from(`company_members`).select(`id, company_id, user_id, email, role, status, invited_at, accepted_at, revoked_at, expires_at`).in(`company_id`,r).order(`created_at`,{ascending:!1}),y.from(`admin_match_decisions`).select(`id, company_id, opportunity_id, decision, reason, comment, decided_at, decided_by`).in(`company_id`,r),y.from(`match_evaluation_labels`).select(`id, company_id, opportunity_id, label, reason, notes, labeled_at, labeled_by`).in(`company_id`,r),y.from(`company_profile_change_log`).select(`id, company_id, changed_by, changed_by_email, changed_at, source, changed_fields, previous_values, new_values`).in(`company_id`,r).order(`changed_at`,{ascending:!1})]),b=[[`company services`,e],[`company locations`,t],[`company keywords`,n],[`opportunity matches`,m],[`reports`,h],[`AI match reviews`,ee],[`company members`,g],[`match decisions`,te],[`evaluation labels`,_],[`company profile changes`,v]].find(([,e])=>e.error);if(b)throw Error(`Failed to load ${b[0]}: ${K(b[1].error)}`);i=e.data||[],a=t.data||[],o=n.data||[],s=m.data||[],c=h.data||[],l=ee.data||[],u=g.data||[],d=te.data||[],f=_.data||[],p=v.data||[]}R.adminCompanies=n.map(e=>{let t=i.filter(t=>t.company_id===e.id),n=a.filter(t=>t.company_id===e.id),r=o.filter(t=>t.company_id===e.id),m={services:P(t.map(e=>e.service)),locations:P(n.map(e=>e.location)),includeKeywords:P(r.filter(e=>e.type===`include`).map(e=>e.keyword)),excludeKeywords:P(r.filter(e=>e.type===`exclude`).map(e=>e.keyword)),baseLocation:e.base_location||``,serviceAreas:P(e.service_areas),willingToTravel:!!e.willing_to_travel,nationalProjects:!!e.national_projects};return na(e,{services:t,locations:n,keywords:r,matches:$e(s.filter(t=>t.company_id===e.id),l.filter(t=>t.company_id===e.id),m),reports:c.filter(t=>t.company_id===e.id),members:u.filter(t=>t.company_id===e.id),decisions:d.filter(t=>t.company_id===e.id),evaluationLabels:f.filter(t=>t.company_id===e.id),profileChanges:p.filter(t=>t.company_id===e.id)})}),R.adminCompaniesLoaded=!0}catch(e){console.error(`Failed to load admin companies:`,e),R.adminCompanies=[],R.adminCompaniesError=K(e)}finally{R.adminCompaniesLoading=!1,R.adminCompaniesLoaded=!0,Z()}}async function $i(){if(!y||!R.isAdmin){R.adminReviewMatches=[],R.adminReviewLoaded=!0;return}R.adminReviewLoading=!0,R.adminReviewError=null,Z();try{let{data:e,error:t}=await y.from(`opportunity_matches`).select(`
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
      `).eq(`safety_status`,`needs_review`).eq(`review_required`,!0).order(`calculated_at`,{ascending:!1}).limit(100);if(t)throw t;let n=e||[],r=jr(n.map(e=>e.company_id)),i=jr(n.map(e=>e.opportunity_id)),a=[];if(r.length&&i.length){let{data:e,error:t}=await y.from(`ai_match_reviews`).select(`*`).in(`company_id`,r).in(`opportunity_id`,i);if(t)throw t;a=e||[]}let o=new Map(a.map(e=>[`${e.company_id}:${e.opportunity_id}`,e]));R.adminReviewMatches=n.map(e=>ea(e,o.get(`${e.company_id}:${e.opportunity_id}`))),R.adminReviewLoaded=!0}catch(e){console.error(`Failed to load admin review queue:`,e),R.adminReviewMatches=[],R.adminReviewError=K(e)}finally{R.adminReviewLoading=!1,R.adminReviewLoaded=!0,Z()}}function ea(e,t=null){let n=ka(e.opportunities||{});return{id:e.id,companyId:e.company_id,opportunityId:e.opportunity_id,companyName:e.companies?.company_name||`Unknown company`,opportunity:n,matchScore:Number(e.match_score||0),matchLabel:e.match_label||oc(Number(e.match_score||0)),matchReasons:ao(n,Array.isArray(e.match_reasons)?e.match_reasons:[]),risks:Array.isArray(e.risks)?e.risks:[],safetyStatus:e.safety_status||`needs_review`,safetyReasons:Array.isArray(e.safety_reasons)?e.safety_reasons:[],alertEligible:!!e.alert_eligible,reviewRequired:!!e.review_required,calculatedAt:e.calculated_at,aiReview:t?ta(t):null}}function ta(e){return{id:e.id,fit:e.fit||`weak`,confidence:Number(e.confidence||0),sendToClient:!!e.send_to_client,reason:e.reason||``,fitReasons:Array.isArray(e.fit_reasons)?e.fit_reasons.map(String):[],risksOrQuestions:Array.isArray(e.risks_or_questions)?e.risks_or_questions.map(String):[],suggestedClientSummary:e.suggested_client_summary||``,model:e.model||``,createdAt:e.created_at||``,updatedAt:e.updated_at||``}}function na(e,t){let n=P((t.services||[]).map(e=>e.service)),r=P((t.locations||[]).map(e=>e.location)),i=P((t.keywords||[]).filter(e=>e.type===`include`).map(e=>e.keyword)),a=P((t.keywords||[]).filter(e=>e.type===`exclude`).map(e=>e.keyword)),o=t.reports||[],s=new Map((t.decisions||[]).map(e=>[String(e.opportunity_id),e])),c=new Map((t.evaluationLabels||[]).map(e=>[String(e.opportunity_id),e])),l=(t.matches||[]).filter(e=>e.safety_status!==`hidden`).map(e=>({...e,adminDecision:s.get(String(e.opportunity_id))||null,evaluationLabel:c.get(String(e.opportunity_id))||null})),u=(t.members||[]).map(e=>({id:e.id,company_id:e.company_id,user_id:e.user_id||``,email:e.email||``,role:e.role||`member`,status:e.status||`invited`,invited_at:e.invited_at||``,accepted_at:e.accepted_at||``,revoked_at:e.revoked_at||``,expires_at:e.expires_at||``})),d=!!(e.company_name&&e.contact_email&&e.industry&&n.length&&(r.length||e.base_location||P(e.service_areas).length));return{id:e.id,ownerId:e.owner_id||``,companyName:e.company_name||`Unnamed company`,contactEmail:e.contact_email||``,notificationEmail:e.notification_email||``,kennitala:e.kennitala||``,billingEmail:e.billing_email||``,contactName:e.contact_name||``,phone:e.phone||``,address:e.address||``,website:e.website||``,industry:e.industry||``,plan:e.selected_plan||e.plan||e.subscription_plan||`Demo`,selectedPlan:e.selected_plan||e.plan||``,billingStatus:e.billing_status||``,trialStartedAt:e.trial_started_at||``,trialEndsAt:e.trial_ends_at||``,profileStatus:d?`Complete`:`Incomplete`,createdAt:e.created_at,services:n,locations:r,includeKeywords:i,excludeKeywords:a,baseLocation:e.base_location||``,serviceAreas:P(e.service_areas),willingToTravel:!!e.willing_to_travel,nationalProjects:!!e.national_projects,remoteProjects:!!e.remote_projects,minimumProjectValueForTravel:e.minimum_project_value_for_travel,minProjectValue:e.min_project_value,maxProjectValue:e.max_project_value,allowUnknownValue:!!e.allow_unknown_value,includeLowConfidence:!!e.include_low_confidence,autoAlertMode:e.auto_alert_mode||`auto_safe_only`,reportFrequency:e.report_frequency||`weekly`,reportDay:e.report_day||`monday`,deadlineReminders:!!e.deadline_reminders,autoAiReviewEnabled:!!e.auto_ai_review_enabled,opportunityCategories:P(e.opportunity_categories),opportunityTypes:P(e.opportunity_types),subcontractingRelevant:!!e.subcontracting_relevant,minimumRelevanceThreshold:e.minimum_relevance_threshold??50,internalAdminNotes:e.internal_admin_notes||``,coreServices:P(e.core_services),secondaryServices:P(e.secondary_services),excludedServices:P(e.excluded_services),preferredProjectTypes:P(e.preferred_project_types),excludedProjectTypes:P(e.excluded_project_types),equipment:P(e.equipment),certifications:P(e.certifications),preferredBuyers:P(e.preferred_buyers),maxTravelDistanceKm:e.max_travel_distance_km,typicalProjectSize:e.typical_project_size||``,profileNotesForAi:e.profile_notes_for_ai||``,matchingProfileUpdatedAt:e.matching_profile_updated_at||``,matchingProfileHash:e.matching_profile_hash||``,profileChanges:t.profileChanges||[],members:u,matchCount:l.length,savedCount:0,latestReportDate:o[0]?.created_at||``,latestMatches:l.slice(0,30),latestReports:o.slice(0,5)}}function ra(e,t){R.adminCompanyActions={...R.adminCompanyActions||{},[e]:t}}function ia(e){let t={...R.adminCompanyActions||{}};delete t[e],R.adminCompanyActions=t}function aa(e=R.selectedAdminCompanyId){return!!(e&&R.adminCompanyProfileDirty?.[e])}function oa(e=R.selectedAdminCompanyId){return aa(e)?window.confirm(`Það eru óvistaðar breytingar í vöktunarprófíl. Viltu halda áfram án þess að vista?`):!0}function sa(e){let t={...R.adminCompanyProfileDirty||{}};delete t[e],R.adminCompanyProfileDirty=t}function ca(e){return R.adminCompanyInviteDrafts?.[e.id]??(e.billingEmail||e.contactEmail||``)}function la(e,t){R.adminCompanyAccessActions={...R.adminCompanyAccessActions||{},[e]:t}}function ua(e){let t={...R.adminCompanyAccessActions||{}};delete t[e],R.adminCompanyAccessActions=t}async function da(e){if(!R.isAdmin||!e)return;let t=re(ca((R.adminCompanies||[]).find(t=>t.id===e)||{id:e}));if(!t){R.adminMessage={type:`error`,text:`Enter a customer email before inviting access.`},Z();return}la(e,`invite`),R.adminMessage=null,Z();try{let n=await Ta(e,`invite_customer`,{email:t}),r=ye(n.invite_token||``);await U(),R.adminCompanyInviteLinks={...R.adminCompanyInviteLinks||{},[e]:r},R.adminCompanyInviteDebug={...R.adminCompanyInviteDebug||{},[e]:n.debug?{...n.debug,copied_url_token_length:String(n.invite_token||``).length,copied_invite_url_present:!!r}:null},R.adminCompanyInviteDrafts={...R.adminCompanyInviteDrafts||{},[e]:``},R.adminMessage={type:`success`,text:`Invite link created for ${n.member?.email||t}. Copy it and send it manually.`},q(`Invite link created`,`success`)}catch(e){console.error(`Failed to invite company customer:`,e),R.adminMessage={type:`error`,text:`Failed to invite customer access. ${K(e)}`}}finally{ua(e),Z()}}async function fa(e,t){if(!(!R.isAdmin||!e||!t)){la(e,`revoke`),R.adminMessage=null,Z();try{await Ta(e,`revoke_customer_access`,{memberId:t}),await U(),R.adminMessage={type:`success`,text:`Customer access revoked.`},q(`Customer access revoked`,`success`)}catch(e){console.error(`Failed to revoke company access:`,e),R.adminMessage={type:`error`,text:`Failed to revoke customer access. ${K(e)}`}}finally{ua(e),Z()}}}async function pa(e,t,n={}){if(!R.isAdmin||!e)return;let r=!!n.refreshMatches;ra(e,r?`profile_refresh`:`profile_save`),R.adminMessage=null,Z();try{let n=await Re(e,Le(t),{refreshMatches:r});await Promise.all([U(),r?$i():Promise.resolve()]),sa(e),R.adminCompanyProfileResults={...R.adminCompanyProfileResults||{},[e]:n};let i=n.refresh||{};q(r?`Vöktunarprófíll vistaður og samsvaranir endurreiknaðar: ${Number(i.matches_created||0)} nýjar, ${Number(i.matches_updated||0)} uppfærðar, ${Number(i.matches_removed||0)} fjarlægðar.`:`Vöktunarprófíll vistaður.`,`success`,{key:`admin-profile:${e}`})}catch(t){console.error(`Failed to save admin company profile:`,t),q(`Ekki tókst að vista vöktunarprófílinn. Reyndu aftur.`,`error`,{key:`admin-profile:${e}`})}finally{ia(e),Z()}}async function ma(e,t){if(!(!R.isAdmin||!e))try{await Ta(e,`upsert_match_decision`,Mt(t)),await U(),q(`Match decision saved`,`success`)}catch(e){console.error(`Failed to save match decision:`,e),q(`Could not save decision. ${K(e)}`,`error`)}}async function ha(e,t){if(!(!R.isAdmin||!e))try{await Ta(e,`upsert_evaluation_label`,Nt(t)),await U(),q(`Evaluation label saved`,`success`)}catch(e){console.error(`Failed to save evaluation label:`,e),q(`Could not save evaluation label. ${K(e)}`,`error`)}}async function ga(e){let t=R.adminCompanyInviteLinks?.[e]||``;if(!t){q(`Create or regenerate an invite link first.`,`error`);return}try{await navigator.clipboard.writeText(t),q(`Invite link copied`,`success`)}catch(e){console.error(`Failed to copy invite link:`,e),q(`Could not copy invite link`,`error`)}}async function _a(e,t={}){if(!R.isAdmin)return R.adminMessage={type:`error`,text:`You do not have access to this action.`},Z(),[];let n=(R.adminCompanies||[]).find(t=>t.id===e);if(!n)return R.adminMessage={type:`error`,text:`Company not found. Refresh Admin companies and try again.`},Z(),[];t.skipAction||ra(e,`refresh`),t.silent||(R.adminMessage=null,Z());try{let r=await Ta(e,`refresh_matches`),i=Number(r.matches_refreshed||0);return await Promise.all([U(),$i()]),R.companyId===e&&await Uo(),t.silent||(R.adminMessage={type:`success`,text:`Refreshed ${i} eligible matches for ${n.companyName}.`},q(`Company matches refreshed`,`success`),Z()),r}catch(e){if(console.error(`Failed to refresh admin company matches:`,e),R.adminMessage={type:`error`,text:`Failed to refresh matches for ${n.companyName}. ${K(e)}`},Z(),t.throwOnError)throw e;return[]}finally{t.skipAction||(ia(e),Z())}}async function va(e){if(!R.isAdmin){R.adminMessage={type:`error`,text:`You do not have access to this action.`},Z();return}let t=(R.adminCompanies||[]).find(t=>t.id===e);if(!t){R.adminMessage={type:`error`,text:`Company not found. Refresh Admin companies and try again.`},Z();return}ra(e,`report`),R.adminMessage=null,Z();try{let n=await Ta(e,`generate_report`,{reportMode:R.adminReportMode||`all_current`});if(!n.report_created){R.adminMessage={type:`error`,text:Da(n,t.companyName)},Z();return}await Promise.all([Wi(),U(),$i()]),R.companyId===e&&await Wo(),R.adminMessage={type:`success`,text:`Generated ${Ea(n.report_mode||R.adminReportMode)} report for ${t.companyName} with ${Number(n.report_items||0)} item${Number(n.report_items||0)===1?``:`s`}. Open the Reports tab to review it.`},q(`Company report generated`,`success`)}catch(e){console.error(`Failed to generate admin company report:`,e),R.adminMessage={type:`error`,text:`Failed to generate report for ${t.companyName}. ${K(e)}`}}finally{ia(e),Z()}}async function ya(e,t,n){if(!R.isAdmin){R.adminMessage={type:`error`,text:`You do not have access to this action.`},Z();return}if(!e||!t||![`approve`,`reject`].includes(n)){R.adminMessage={type:`error`,text:`Missing review action details.`},Z();return}R.adminReviewActions={...R.adminReviewActions||{},[e]:n},R.adminMessage=null,Z();try{let r=await Ta(t,`review_match`,{matchId:e,reviewAction:n});await Promise.all([$i(),U()]),R.companyId===t&&await Uo(),R.adminMessage={type:`success`,text:r.message||(n===`approve`?`Match approved for customer reports.`:`Match rejected and hidden.`)},q(n===`approve`?`Match approved`:`Match rejected`,`success`)}catch(e){console.error(`Failed to review admin match:`,e),R.adminMessage={type:`error`,text:`Failed to ${n} match. ${K(e)}`}}finally{let t={...R.adminReviewActions||{}};delete t[e],R.adminReviewActions=t,Z()}}async function ba(e,t={}){if(!R.isAdmin){R.adminMessage={type:`error`,text:`You do not have access to this action.`},Z();return}if(!e){R.adminMessage={type:`error`,text:`Missing match ID for AI review.`},Z();return}R.adminAiReviewActions={...R.adminAiReviewActions||{},[e]:!0},R.adminAiReviewError=null,R.adminMessage=null,Z();try{let n=await We(e,{force:t.force===!0});await $i(),await U(),R.adminMessage={type:`success`,text:n.cached?`Loaded cached AI review.`:t.force?`AI review re-run completed.`:`AI review completed.`},q(n.cached?`AI review loaded`:t.force?`AI review re-run completed`:`AI review completed`,`success`)}catch(e){console.error(`Failed to run AI match review:`,e),R.adminAiReviewError=K(e),R.adminMessage={type:`error`,text:`AI review failed. ${K(e)}`}}finally{let t={...R.adminAiReviewActions||{}};delete t[e],R.adminAiReviewActions=t,Z()}}async function xa(e,t={}){if(!R.isAdmin){R.adminMessage={type:`error`,text:`You do not have access to this action.`},Z();return}if(!e){R.adminMessage={type:`error`,text:`Missing company ID for AI review batch.`},Z();return}R.adminCompanyAiReviewActions={...R.adminCompanyAiReviewActions||{},[e]:!0},R.adminMessage=null,Z();try{let n=await Ge(e,{limit:10,force:t.force===!0,revalidate:t.force===!0});R.adminCompanyAiReviewResults={...R.adminCompanyAiReviewResults||{},[e]:n},await Promise.all([U(),$i()]),R.companyId===e&&await Uo(),R.adminMessage={type:`success`,text:`${t.force?`AI revalidation`:`AI batch`} reviewed ${Number(n.reviewed||0)} matches. ${Number(n.skipped||0)} skipped.`},q(t.force?`AI company revalidation completed`:`AI company review completed`,`success`)}catch(e){console.error(`Failed to run company AI review batch:`,e),R.adminMessage={type:`error`,text:`AI company review failed. ${K(e)}`}}finally{let t={...R.adminCompanyAiReviewActions||{}};delete t[e],R.adminCompanyAiReviewActions=t,Z()}}async function Sa(){if(!R.isAdmin){R.adminMessage={type:`error`,text:`You do not have access to this action.`},Z();return}R.adminAutomaticAiReviewLoading=!0,R.adminMessage=null,Z();try{let e=await Ke({limit:10});R.adminAutomaticAiReviewResult=e,await Promise.all([U(),$i()]),R.adminMessage={type:`success`,text:`Automatic AI review created ${Number(e.ai_reviews_created||0)} reviews across ${Number(e.companies_checked||0)} companies.`},q(`Automatic AI review completed`,`success`)}catch(e){console.error(`Failed to run automatic AI review:`,e),R.adminMessage={type:`error`,text:`Automatic AI review failed. ${K(e)}`}}finally{R.adminAutomaticAiReviewLoading=!1,Z()}}async function Ca(){if(R.isAdmin){rs(),R.adminDailyPipelineLoading=!0,R.adminMessage=null,Z();try{let e=await Pe();R.adminDailyPipelineResult=e,await Promise.all([Oa({notify:!1}),U(),$i()]);let t=`Daily pipeline finished: ${Number(e.sources_imported||0)} sources, ${Number(e.companies_refreshed||0)} companies, ${Number(e.ai_reviews_created||0)} AI reviews.`;e.errors?.length?q(`${t} ${e.errors.length} error${e.errors.length===1?``:`s`} reported.`,`error`,{key:`admin-daily-pipeline`,duration:8e3,placement:`admin`}):q(t,`success`,{key:`admin-daily-pipeline`,duration:5e3,placement:`admin`})}catch(e){console.error(`Failed to run daily pipeline:`,e),q(`Daily pipeline failed. ${K(e)}`,`error`,{key:`admin-daily-pipeline`,duration:8e3,placement:`admin`})}finally{R.adminDailyPipelineLoading=!1,Z()}}}async function wa(e,t){if(!R.isAdmin||!e)return;let n=(R.adminCompanies||[]).find(t=>t.id===e);R.adminMessage=null,Z();try{await qe(e,t),R.adminCompanies=(R.adminCompanies||[]).map(n=>n.id===e?{...n,autoAiReviewEnabled:t}:n),await U(),R.adminMessage={type:`success`,text:`Automatic AI review ${t?`enabled`:`disabled`} for company.`},Z()}catch(t){console.error(`Failed to toggle company automatic AI review:`,t);let r=t?.details||{};R.adminMessage={type:`error`,text:`Failed to update automatic AI review setting. ${K(t)} Debug: company_id=${e}; company=${n?.companyName||`unknown`}; email=${n?.contactEmail||`unknown`}; returned_rows=${r.rowCount??`unknown`}; returned_data=${r.dataReturned===!1?`false`:`unknown`}.`},Z()}}async function Ta(e,t,n={}){let r=uo();if(!r)throw Error(`Admin company actions are not configured. Set window.VERKRADAR_ADMIN_COMPANY_ACTIONS_URL or window.VERKRADAR_SUPABASE_URL.`);let i=await fetch(r,{method:`POST`,headers:await go(),body:JSON.stringify({companyId:e,action:t,...n})}),a=await i.json().catch(()=>({}));if(!i.ok)throw Error(a.error||`Admin company action failed with status ${i.status}`);return a}function Ea(e){return e===`all_current`?`current active opportunities`:`new opportunities`}function Da(e,t){let n=e?.report_mode||R.adminReportMode||`all_current`;return e?.message||(n===`new_only`?`No new eligible opportunities found since the previous report.`:`No customer-report-ready matches found for ${t}.`)}async function Oa({notify:e=!0}={}){R.isAdmin&&(await Promise.all([Ui(),ho(),Wi(),Gi(),Ki(),Qi(),U(),$i()]),e&&q(`Automation status refreshed`,`success`),Z())}function ka(e){let t=e.raw_payload&&typeof e.raw_payload==`object`?e.raw_payload:{},n=e.sources?.name||t.source_name||``,r=W(t.quality_status||t.qualityStatus,{source:n,sourceType:e.sources?.source_type||``,title:e.title||``,description:ja(e.description||``,t,n,e.title||``),rawPayload:t}),i=Ba({source:n,sourceType:e.sources?.source_type||``,title:e.title||``,description:e.description||``,category:e.category||``,keywords:Array.isArray(e.keywords)?e.keywords:[],qualityStatus:r,rawPayload:t});return{id:e.id,externalId:e.external_id||``,countryCode:e.country_code||``,title:e.title,buyer:Hr(e.buyer,n,t),source:n||`Supabase`,sourceType:e.sources?.source_type||``,category:e.category||`Other`,type:e.type||`tender`,description:e.description||``,deadline:e.deadline,deadlineAt:t.deadline_at||``,publishedDate:e.published_date,createdAt:e.created_at,updatedAt:e.updated_at||``,location:Fa(e.location||`Unknown`,t,n,e.title||``,e.description||``),estimatedValue:e.estimated_value,currency:e.currency||`ISK`,url:e.url||``,cpvCode:e.cpv_code||``,requirements:Array.isArray(e.requirements)?e.requirements:[],keywords:Array.isArray(e.keywords)?e.keywords:[],difficulty:e.difficulty||`medium`,status:e.status||`open`,qualityStatus:r,intent:i,rawPayload:t}}function Aa(e){let t=ka(e.opportunities||{});return{...t,matchScore:Number(e.match_score||0),matchLabel:e.match_label||oc(Number(e.match_score||0)),matchReasons:ao(t,Array.isArray(e.match_reasons)?e.match_reasons:[]),risks:Array.isArray(e.risks)?e.risks:[],nextSteps:Array.isArray(e.next_steps)?e.next_steps:[],safetyStatus:e.safety_status||`needs_review`,safetyReasons:Array.isArray(e.safety_reasons)?e.safety_reasons:[],alertEligible:!!e.alert_eligible,reviewRequired:!!e.review_required,reviewedAt:e.reviewed_at||``,reviewNote:e.review_note||``}}function ja(e,t={},n=``,r=``){t=t&&typeof t==`object`?t:{};let i=String(e||``).replace(/\s+/g,` `).trim(),a=F(n);if(!i)return``;if(a.includes(`rikiskaup`)||a.includes(`utbodsvefur`)){let e=Ma(i,t,r);if(e)return e;if(Na(i)||Pa(i))return R.language===`is`?`Útboðstilkynning flutt inn af Útboðsvef. Opnið upprunasíðuna til að staðfesta kaupanda, skilafrest, kröfur og útboðsgögn.`:`Procurement notice imported from Útboðsvefur. Open the source page to confirm buyer, deadline, requirements and tender documents.`}return i}function Ma(e,t={},n=``){t=t&&typeof t==`object`?t:{};let r=String(e||``).replace(/\s+/g,` `).trim();if(!r)return``;let i=[r.search(/F\.h\.[^.]{0,280}ósk(?:að|ar) eftir tilboðum/i),r.search(/(?:Reykjavíkurborg|sveitarfélag|bærinn|kaupandi)[^.]{0,280}ósk(?:að|ar) eftir tilboðum/i),r.search(/óskar eftir tilboðum|óskað eftir tilboðum|oskar eftir tilbodum|oskad eftir tilbodum/i),r.search(/verkefnið felst|verkið felst|verkið felur|gatna-|gatnagerð|stígagerð/i)].filter(e=>e>=0);if(!i.length)return``;let a=Math.min(...i),o=r.slice(a).search(/\s+(Nánari upplýsingar|Útboðsgögn afhent|Opnun tilboða|Opnun tilboda|Auglýsandi|Flokkar|Tengdar fréttir|Fjöldi útboð)\b/i),s=o>120?a+o:a+1200,c=[r.slice(a,s).trim()],l=t.extracted_deadline_text||t.deadline_text||``;l&&!c[0].includes(String(l))&&c.push(`Skilafrestur: ${l}`);let u=jr(c).join(` `).replace(/^(Útboðsvefur\s*){1,}/i,``).replace(/\s+/g,` `).trim();return Pa(u)?``:u||n}function Na(e){return/Procurement notice imported from Útboðsvefur|Open the source page for full buyer details/i.test(String(e||``))}function Pa(e){let t=String(e||``);return[`Framkvæmdasýslan`,`Ríkiseignir`,`Garðabær`,`Grímsnes`,`Fjöldi útboð`,`Útboðsvefur.is - Opinber útboð`].filter(e=>t.includes(e)).length>=3||/^Útboðsvefur\s+Útboðsvefur\.is/i.test(t)}function Fa(e,t={},n=``,r=``,i=``){let a=Ia(`${r} ${i} ${JSON.stringify(t||{})}`),o=String(e||``).trim();return a&&(!o||/unknown|all iceland|iceland/i.test(o))?a:o||a||`Unknown`}function Ia(e){let t=F(e);return t.includes(`vogabyggd`)||t.includes(`reykjavikurborg`)||t.includes(`strandstigur`)?`Reykjavík / Höfuðborgarsvæðið`:``}function La(e){if(!e||e.status!==`open`||!e.url||e.url===`#`||j(e.deadline)<0||Ra(e)||e.rawPayload?.extraction_method===`parent_article_with_child_opportunities`||bf(e)||Ka(e))return!1;if(!Bu(e))return!0;let t=ro(e);return[`IS`,`NO`,`DK`,`SE`,`FI`].includes(t)}function Ra(e){let t=F(e?.source||``),n=F(e?.title||``),r=F(e?.externalId||``),i=F(e?.sourceType||``),a=e?.rawPayload||{},o=`${t} ${n} ${r} ${i}`;return!!(a.is_demo===!0||a.demo===!0||t===`private lead`||t.includes(`private lead`)||t===`grant portal`||t.includes(`grant portal`)||t===`manual test`||t.includes(`manual test`)||[`demo`,`test`,`sample`,`mock`,`fake`].some(e=>i.includes(e))||/\b(demo|test|sample|mock|fake|manual)\b/.test(o)||n.includes(`manual test`)||n.includes(`municipal websites example`)||r.includes(`demo`)||r.includes(`test`))}function W(e,t={}){let n=String(e||``).toLowerCase(),r=za(t?.rawPayload?.opportunity_intent||t?.rawPayload?.intent);if(r===`confirmed_tender`)return`confirmed_tender`;if(r===`early_opportunity`||r===`market_signal`)return`early_signal`;if(r===`news_context`||r===`not_opportunity`)return`needs_review`;if(Bu(t))return`confirmed_tender`;if(Va(t)){let e=Ha(t);return[`tender_awarded`,`awarded`,`already_tendered`,`announced`].includes(e)?`confirmed_tender`:e===`upcoming_tender`?`early_signal`:`needs_review`}if(n===`early_signal`||n===`needs_review`)return n;let i=Wa(t);return G(i,[`senn í útboð`,`senn i utbod`])?`early_signal`:Ga(i)?`confirmed_tender`:to(t?.title||``)&&!Ga(i)?`needs_review`:$a(i)?`early_signal`:(no(i),`needs_review`)}function za(e){return{confirmed:`confirmed_tender`,confirmed_tender:`confirmed_tender`,likely_opportunity:`confirmed_tender`,verified:`confirmed_tender`,early_signal:`early_opportunity`,early_opportunity:`early_opportunity`,upcoming_tender:`early_opportunity`,market_signal:`market_signal`,project_signal:`market_signal`,needs_review:`market_signal`,news_context:`news_context`,news:`news_context`,noise:`not_opportunity`,not_opportunity:`not_opportunity`,stale_opportunity:`not_opportunity`,stale:`not_opportunity`,expired:`not_opportunity`}[String(e||``).toLowerCase().trim()]||``}function Ba(e={}){let t=za(e?.rawPayload?.opportunity_intent||e?.rawPayload?.intent),n=String(e?.rawPayload?.admin_report_status||``).toLowerCase();if(n===`include`)return`confirmed_tender`;if([`hidden`,`hide`,`noise`,`deleted`].includes(n))return t||`not_opportunity`;if(t)return t;if(Bu(e))return`confirmed_tender`;let r=Wa(e),i=e?.title||``;if(Va(e)){let t=Ha(e);return[`tender_awarded`,`awarded`,`already_tendered`,`announced`].includes(t)?`confirmed_tender`:t===`upcoming_tender`?`early_opportunity`:`market_signal`}return Ga(r)?`confirmed_tender`:to(i)||no(r)?`news_context`:Qa(r)?`early_opportunity`:(eo(r),`market_signal`)}function Va(e){return e?.rawPayload?.extraction_method===`vegagerdin_article_project_parser`}function Ha(e){let t=String(e?.rawPayload?.tender_state||``).trim(),n=Ua(e),r={awarded:`tender_awarded`,open_or_published:`announced`,planned_tender:`upcoming_tender`,unclear:`project_signal`}[t]||t;return n===`tender_awarded`?`tender_awarded`:n===`already_tendered`&&![`tender_awarded`,`announced`].includes(r)?`already_tendered`:n===`announced`&&![`tender_awarded`,`already_tendered`].includes(r)?`announced`:n===`upcoming_tender`&&[``,`project_signal`,`needs_review`,`unclear`].includes(r)?`upcoming_tender`:r||n}function Ua(e){let t=Wa(e);return G(t,[`lægstbjóðandi`,`laegstbjodandi`,`samningur var`,`samið var`,`samid var`,`skrifað var undir verksamning`,`skrifad var undir verksamning`])?`tender_awarded`:G(t,[`útboð var auglýst`,`utbod var auglyst`,`útboðið var auglýst`,`utbodid var auglyst`,`útboð hefur farið fram`,`utbod hefur farid fram`,`útboðið hefur farið fram`,`utbodid hefur farid fram`,`boðið út`,`bodid ut`,`verkið var boðið út`,`verkid var bodid ut`,`útboð var opnað`,`utbod var opnad`,`tilboð opnuð`,`tilbod opnud`])?`already_tendered`:G(t,[`óskað eftir tilboðum`,`oskad eftir tilbodum`,`tilboðsfrestur`,`tilbodsfrestur`,`skilafrestur`,`verðfyrirspurn`,`verdfyrirspurn`,`rammasamningur`,`forval`])?`announced`:G(t,[`áætlað útboð`,`aaetlad utbod`,`áætlað er að bjóða út`,`aaetlad er ad bjoda ut`,`fyrirhugað útboð`,`fyrirhugad utbod`,`senn í útboð`,`senn i utbod`,`útboð verður`,`utbod verdur`])?`upcoming_tender`:`project_signal`}function Wa(e){return F([e?.title,e?.description,e?.category,e?.source,...Array.isArray(e?.keywords)?e.keywords:[]].filter(Boolean).join(` `))}function G(e,t){let n=F(e);return t.some(e=>n.includes(F(e)))}function Ga(e){return G(e,[`útboð`,`utbod`,`útboðsauglýsing`,`utbodsauglysing`,`tilboð`,`tilboðum`,`tilbod`,`tilbodum`,`óskað eftir tilboðum`,`oskad eftir tilbodum`,`verðfyrirspurn`,`verdfyrirspurn`,`innkaup`,`rammasamningur`,`forval`,`tender`,`procurement`,`skilafrestur`,`útboðsgögn`,`utbodsgogn`])}function Ka(e={}){let t=e.rawPayload||{};return t.stale_status===`stale_or_expired`||t.opportunity_intent===`stale_opportunity`?!0:qa({title:e.title,description:e.description,content:[e.category,e.source,Array.isArray(e.keywords)?e.keywords.join(` `):``].filter(Boolean).join(` `),publishedDate:e.publishedDate,deadline:e.deadline,sourceName:e.source,sourceType:e.sourceType,connectorType:t.connector_type}).isStale}function qa(e={}){let t=String(e.deadline||``).slice(0,10);if(t&&j(t)>=0)return{isStale:!1,reason:``,thresholdDays:null,ageDays:null,oldYears:[],expiredKeywords:[]};let n=F([e.title,e.description,e.content].filter(Boolean).join(` `)),r=Ya(n),i=Xa(n),a=Za(e.publishedDate),o=a?Math.floor((Date.now()-new Date(`${a}T00:00:00Z`).getTime())/864e5):null,s=Ja(e)?45:60;return r.length?{isStale:!0,reason:`Old year detected (${r.join(`, `)}) and no future deadline found.`,thresholdDays:s,ageDays:o,oldYears:r,expiredKeywords:i}:i.length?{isStale:!0,reason:`Expired/result wording detected (${i.slice(0,3).join(`, `)}) and no future deadline found.`,thresholdDays:s,ageDays:o,oldYears:r,expiredKeywords:i}:o!==null&&o>s?{isStale:!0,reason:`Published ${o} days ago with no current deadline.`,thresholdDays:s,ageDays:o,oldYears:r,expiredKeywords:i}:{isStale:!1,reason:``,thresholdDays:s,ageDays:o,oldYears:r,expiredKeywords:i}}function Ja(e={}){let t=F(`${e.sourceName||``} ${e.sourceType||``} ${e.connectorType||``}`);return String(e.connectorType||``)===`rss_feed`&&[`municipal`,`sveitarfelag`,`akranes`,`borgarbyggd`,`arborg`,`selfoss`,`gardabaer`,`reykjanesbaer`,`hafnarfjordur`,`mosfellsbaer`,`kopavogur`,`mulathing`,`fjardabyggd`].some(e=>t.includes(F(e)))}function Ya(e){let t=new Date().getUTCFullYear(),n=new Set;return String(e||``).replace(/\b(20[0-9]{2})\b/g,(e,r)=>{let i=Number(r);return i>=2020&&i<t&&n.add(i),r}),Array.from(n).sort()}function Xa(e){return`niðurstaða útboðs.nidurstada utbods.niðurstöður útboðs.nidurstodur utbods.opnun tilboða.opnun tilboda.tilboð opnuð.tilbod opnud.lokið.lokid.lokið útboði.lokid utbodi.búið.buid.útrunnið.ut runnid.eldri útboð.eldri utbod.útboðssaga.utbodssaga.samningur gerður.samningur gerdur.verksamningur.awarded.tender results.contract awarded.expired`.split(`.`).filter(t=>G(e,[t]))}function Za(e){if(!e)return``;let t=new Date(e);return Number.isNaN(t.getTime())?``:t.toISOString().slice(0,10)}function Qa(e){return G(e,[`senn í útboð`,`senn i utbod`,`áætlað útboð`,`aaetlad utbod`,`áætlað er að bjóða út`,`aaetlad er ad bjoda ut`,`fyrirhugað útboð`,`fyrirhugad utbod`,`markaðskönnun`,`markadskonnun`,`rfi`])}function $a(e){return Qa(e)?!0:G(e,[`áætlaðar framkvæmdir`,`aaetladar framkvaemdir`,`fyrirhugaðar framkvæmdir`,`fyrirhugadar framkvaemdir`,`framkvæmdir hefjast`,`framkvaemdir hefjast`,`malbikunarframkvæmdir`,`malbikunarframkvaemdir`,`vegaframkvæmdir`,`vegaframkvaemdir`,`brúargerð`,`bruargerd`,`jarðvinna`,`jardvinna`,`gatnagerð`,`gatnagerd`])}function eo(e){return G(e,[`áætlaðar framkvæmdir`,`aaetladar framkvaemdir`,`fyrirhugaðar framkvæmdir`,`fyrirhugadar framkvaemdir`,`framkvæmdir hefjast`,`framkvaemdir hefjast`,`malbikunarframkvæmdir`,`malbikunarframkvaemdir`,`vegaframkvæmdir`,`vegaframkvaemdir`,`brúargerð`,`bruargerd`,`jarðvinna`,`jardvinna`,`gatnagerð`,`gatnagerd`,`fræsing`,`fraesing`])}function to(e){return G(e,[`lokun`,`lokað`,`lokad`,`lokanir`,`umferð`,`umferd`,`tafir`,`hjáleið`,`hjaleid`,`akstursleið`,`akstursleid`,`vegfarendur`,`frétt`,`frett`,`myndband`,`tekur á sig mynd`,`tekur a sig mynd`,`opið aftur`,`opid aftur`])}function no(e){return G(e,[`lokun`,`lokanir`,`umferð`,`umferd`,`dagskrá`,`dagskra`,`skráning`,`skraning`,`myndband`,`ráðstefna`,`radstefna`,`kynningarfundur`,`tilkynning`,`fundur`,`fjölskylduganga`,`fjolskylduganga`,`tafir`,`kynnt`,`styrkur`,`frétt`,`frett`,`viðburður`,`vidburdur`])}function ro(e){let t=io(e.countryCode);if(t)return t;let n=F($s(e));return n.includes(`iceland`)||n.includes(`island`)||n.includes(`reykjavik`)||n.includes(`capital area`)||n.includes(`hofudborgarsvaedid`)||n.includes(`east iceland`)||n.includes(`west iceland`)||n.includes(`north iceland`)||n.includes(`south iceland`)||n.includes(`sudurnes`)?`IS`:n.includes(`norway`)?`NO`:n.includes(`denmark`)?`DK`:n.includes(`sweden`)?`SE`:n.includes(`finland`)?`FI`:``}function io(e){return{IS:`IS`,ISL:`IS`,ICELAND:`IS`,ÍSLAND:`IS`,NO:`NO`,NOR:`NO`,NORWAY:`NO`,DK:`DK`,DNK:`DK`,DENMARK:`DK`,SE:`SE`,SWE:`SE`,SWEDEN:`SE`,FI:`FI`,FIN:`FI`,FINLAND:`FI`}[String(e||``).trim().toUpperCase()]||``}function ao(e,t){return Qs(e)?t:t.filter(e=>!/^Located in your selected region:/i.test(String(e||``)))}function oo(){R.authForm={email:``,password:``,newPassword:``,confirmPassword:``}}function so(){R.authForm.newPassword=``,R.authForm.confirmPassword=``}function co(){return window.VERKRADAR_TED_IMPORT_URL?window.VERKRADAR_TED_IMPORT_URL:window.VERKRADAR_SUPABASE_URL?`${window.VERKRADAR_SUPABASE_URL}/functions/v1/import-ted`:`${_}/functions/v1/import-ted`}function lo(){return window.VERKRADAR_SOURCE_CONNECTOR_IMPORT_URL?window.VERKRADAR_SOURCE_CONNECTOR_IMPORT_URL:window.VERKRADAR_SUPABASE_URL?`${window.VERKRADAR_SUPABASE_URL}/functions/v1/import-source-connectors`:`${_}/functions/v1/import-source-connectors`}function uo(){return window.VERKRADAR_ADMIN_COMPANY_ACTIONS_URL?window.VERKRADAR_ADMIN_COMPANY_ACTIONS_URL:window.VERKRADAR_SUPABASE_URL?`${window.VERKRADAR_SUPABASE_URL}/functions/v1/admin-company-actions`:`${_}/functions/v1/admin-company-actions`}async function fo(e){let t=await e.text();if(!t)return{};try{return JSON.parse(t)}catch{return{errors:[t]}}}async function po(){if(!R.isAdmin){R.importStatus={errors:[`You do not have access to import TED notices.`]},Z();return}let e=co();if(!e){R.importStatus={errors:[`TED importer is not configured. Set window.VERKRADAR_TED_IMPORT_URL or window.VERKRADAR_SUPABASE_URL for this environment.`]},Z();return}R.importLoading=!0,R.importStatus=null,R.importedTedOpportunities=[],Z();try{let t=await fetch(e,{method:`POST`,headers:await go(),body:JSON.stringify({limit:50,importMode:R.tedImportMode})}),n=await fo(t);if(R.importStatus=t.ok?n:{...n,errors:n.errors||[`Import failed with status ${t.status}`]},t.ok){await Hi();let e=R.companyId?await qo():Number(n.matched||0);await ho(),R.isAdmin&&(await Ui(),await Wi()),R.importStatus={...R.importStatus,matched:e},q(`TED import completed`,`success`)}}catch(e){R.importStatus={errors:[e instanceof Error?e.message:String(e)]}}finally{R.importLoading=!1,Z()}}async function mo(e=``){if(!R.isAdmin){R.connectorImportStatus={errors:[`You do not have access to run source imports.`]},Z();return}let t=lo();if(!t){R.connectorImportStatus={errors:[`Source connector importer is not configured. Set window.VERKRADAR_SOURCE_CONNECTOR_IMPORT_URL or window.VERKRADAR_SUPABASE_URL for this environment.`]},Z();return}R.connectorImportLoading=!e,R.connectorTestingSourceId=e||null,R.connectorImportStatus=null,Z();try{let n=await fetch(t,{method:`POST`,headers:await go(),body:JSON.stringify({limit:e?50:20,maxSources:e?1:6,sourceId:e||void 0,refreshMatches:!!e,generateReports:!1})}),r=await fo(n),i=Array.isArray(r.errors)?r.errors:[],a=Array.isArray(r.failedSources)?r.failedSources:[];R.connectorImportStatus=n.ok?{...r,failedSources:a}:{...r,failedSources:a,errors:i.length?i:[`Source import failed with status ${n.status}${n.statusText?` ${n.statusText}`:``}`]},n.ok&&(await Hi(),await Oa(),q(e?`Source test completed`:`Automatic source imports completed`,`success`))}catch(e){R.connectorImportStatus={errors:[e instanceof Error?e.message:String(e)]}}finally{R.connectorImportLoading=!1,R.connectorTestingSourceId=null,Z()}}async function ho(){if(!y){R.importedTedOpportunities=[],R.importedTedOpportunitiesLoaded=!0;return}R.importedTedOpportunitiesLoading=!0,R.importedTedOpportunitiesError=null;try{let{data:e,error:t}=await y.from(`sources`).select(`id, name`).in(`name`,[`TED Iceland/Nordic`,`EU TED`,`Tenders Electronic Daily`]);if(t)throw t;let n=(e||[]).map(e=>e.id).filter(Boolean);if(!n.length){R.importedTedOpportunities=[];return}let{data:r,error:i}=await y.from(`opportunities`).select(`*, sources(name, source_type)`).in(`source_id`,n).order(`created_at`,{ascending:!1}).limit(10);if(i)throw i;R.importedTedOpportunities=(r||[]).map(ka)}catch(e){console.error(`Failed to load latest TED opportunities:`,e),R.importedTedOpportunities=[],R.importedTedOpportunitiesError=K(e)}finally{R.importedTedOpportunitiesLoading=!1,R.importedTedOpportunitiesLoaded=!0}}async function go(){let e={"content-type":`application/json`},t=window.VERKRADAR_SUPABASE_ANON_KEY||`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFzb2p4amJzZ3FiZnBiZXBvanpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAwNTU2NjgsImV4cCI6MjA5NTYzMTY2OH0.yPA34VbqWqKrBPespmHr5AojYzjhy3kGRxswO9XdAd0`;t&&t!==`PASTE_MY_ANON_PUBLIC_KEY_HERE`&&(e.apikey=t);let{data:n,error:r}=y?await y.auth.getSession():{data:{session:null},error:null};if(r)throw r;let i=n.session?.access_token;if(!i)throw Error(`You must be logged in to run this admin action.`);return e.authorization=`Bearer ${i}`,e}function _o(){let e=R.pendingInviteToken||he();return e&&pe(R.route)?oe(e):oe()}function vo(){return s(`/reset-password`)}function yo(e){let t=e?.user?.identities;return Array.isArray(t)&&t.length===0}function bo(){return[{label:L(`login`),href:_i(`/login`),variant:`primary`},{label:L(`forgotPassword`),href:_i(`/forgot-password`),variant:`secondary`}]}async function xo(e,t){di(),R.authSubmitting=!0,R.authMessage=null,Z();try{if(!y)throw Error(`Supabase client is not configured.`);let{data:n,error:r}=await y.auth.signUp({email:String(e||``).trim(),password:String(t||``),options:{emailRedirectTo:_o()}});if(r)throw r;if(vi(),yo(n)){R.user=null,R.currentUser=null,R.authMessage={type:`error`,text:L(`signupExistingAccount`),actions:bo()},R.authForm.password=``,Z();return}if(!n.session?.user){R.user=null,R.currentUser=null;let e=Array.isArray(n?.user?.identities)&&n.user.identities.length>0;R.authMessage={type:`success`,text:R.pendingInviteToken?L(`inviteSignupCreatedConfirm`):L(e?`signupCreatedConfirm`:`signupNeutralNextSteps`)},R.authForm.password=``,Z();return}R.user=n.session.user,R.currentUser=R.user,R.profileDraft=null,R.profileDraftDirty=!1,await Do(R.user),R.authMessage={type:`success`,text:L(`signupCreatedConfirm`)},await Po({overwriteDraft:!0}),oo(),V(Mi())}catch(e){console.error(`Signup failed:`,e);let t=es(e);R.authMessage={type:`error`,text:$o(e,`signup`),actions:t?bo():[]},Z()}finally{R.authSubmitting=!1,Z()}}async function So(e,t){R.authSubmitting=!0,R.authMessage=null,Z();try{if(!y)throw Error(`Supabase client is not configured.`);let{data:n,error:r}=await y.auth.signInWithPassword({email:String(e||``).trim(),password:String(t||``)});if(r)throw r;R.user=n.user||await Eo(),R.currentUser=R.user,R.profileDraft=null,R.profileDraftDirty=!1,await Do(R.user),await Po({overwriteDraft:!0}),oo(),V(Mi())}catch(e){console.error(`Login failed:`,e),R.authMessage={type:`error`,text:$o(e,`login`)},Z()}finally{R.authSubmitting=!1,Z()}}async function Co(e){R.authSubmitting=!0,R.authMessage=null,Z();try{if(!y)throw Error(`Supabase client is not configured.`);let{error:t}=await y.auth.resetPasswordForEmail(String(e||``).trim(),{redirectTo:vo()});if(t)throw t;R.authMessage={type:`success`,text:`If an account exists for this email, a reset link has been sent.`}}catch(e){console.error(`Password reset request failed:`,e),R.authMessage={type:`error`,text:`We could not send a reset link right now. Please try again.`}}finally{R.authSubmitting=!1,Z()}}async function wo(e,t){let n=String(e||``),r=String(t||``);if(!n){R.authMessage={type:`error`,text:`Enter a new password.`},Z();return}if(n.length<8){R.authMessage={type:`error`,text:`Password must be at least 8 characters.`},Z();return}if(n!==r){R.authMessage={type:`error`,text:`Passwords do not match.`},Z();return}R.authSubmitting=!0,R.authMessage=null,Z();try{if(!y)throw Error(`Supabase client is not configured.`);let{error:e}=await y.auth.updateUser({password:n});if(e)throw e;so(),V(`/login`),R.authMessage={type:`success`,text:`Password updated. You can now log in.`},Z()}catch(e){console.error(`Password update failed:`,e),R.authMessage={type:`error`,text:`This reset link may be expired or invalid. Request a new reset link and try again.`},Z()}finally{R.authSubmitting=!1,Z()}}async function To(){try{if(y){let{error:e}=await y.auth.signOut();if(e)throw e}}catch(e){console.error(`Logout failed:`,e)}finally{R.user=null,R.currentUser=null,R.isAdmin=!1,R.opportunities=[],R.opportunitiesLoaded=!1,R.authLoaded=!0,R.adminLoaded=!0,R.profileLoaded=!0,pi(),vi(),V(`/`),Z()}}async function Eo(){if(!y)return null;let{data:e,error:t}=await y.auth.getUser();return t?(console.error(`Failed to get current user:`,t),null):e.user||null}async function Do(e=R.user){if(!y||!e)return R.isAdmin=!1,!1;try{let{data:t,error:n}=await y.from(`admin_users`).select(`user_id`).eq(`user_id`,e.id).maybeSingle();if(n)throw n;return R.isAdmin=!!t?.user_id,R.isAdmin}catch(e){return console.error(`Failed to check admin access:`,e),R.isAdmin=!1,!1}}function Oo(){return Q(`
    <section class="empty-state">
      <h1>${I(L(`authRequiredTitle`))}</h1>
      <p>${I(L(`authRequiredText`))}</p>
      <button class="btn btn-primary" data-action="go" data-href="/login">${I(L(`login`))}</button>
      <button class="btn btn-secondary" data-action="go" data-href="/trial">${I(L(`createFreeDemoProfile`))}</button>
    </section>
  `)}function ko(){return Q(`
    <section class="empty-state">
      <h1>You do not have access to this page.</h1>
      <p>Admin access is limited to approved VerkRadar admin users.</p>
    </section>
  `)}var Ao=!1,jo=!1;async function Mo(){if(!y)return R.user=null,R.currentUser=null,null;let{data:e,error:t}=await y.auth.getSession();if(t)throw t;return R.user=e.session?.user||null,R.currentUser=R.user,R.user}async function No(){R.adminLoaded=!1,await Do(R.currentUser||R.user),R.adminLoaded=!0}async function Po(e={}){let{overwriteDraft:t=!1,showGlobalLoading:n=!1}=e;(n||!R.profile&&!R.profileDraftDirty)&&(R.profileLoaded=!1),R.profileLoading=!0,R.profileLoadError=null;try{await Fo(Bo({overwriteDraft:t}),ti,`Profile loading took too long. Please retry.`)}catch(e){console.error(`Failed to load profile from Supabase:`,e),R.profileLoadError=K(e)}finally{R.profileLoading=!1,R.profileLoaded=!0}}function Fo(e,t,n){let r,i=new Promise((e,i)=>{r=setTimeout(()=>i(Error(n)),t)});return Promise.race([e,i]).finally(()=>clearTimeout(r))}async function Io(){if(!R.isSavingProfile){R.profileLoadError=null,R.profileLoading=!0,Z();try{await Po({overwriteDraft:!0})}catch(e){console.error(`Settings profile retry failed:`,e),R.profileLoadError=K(e)}finally{R.profileLoading=!1,R.profileLoaded=!0,Z(),H()}}}function Lo(){!y||jo||(jo=!0,y.auth.onAuthStateChange(async(e,t)=>{if(Ao){if(R.inviteAuthEvent=e||``,R.user=t?.user||null,R.currentUser=R.user,R.user){if(e===`PASSWORD_RECOVERY`){R.authLoaded=!0,R.adminLoaded=!0,R.profileLoaded=!0,R.authMessage=null,V(`/reset-password`);return}try{await No(),R.route===`/settings`&&R.profileDraftDirty?R.profileLoaded=!0:await Po()}catch(e){console.error(`Auth profile refresh failed:`,e),R.profileLoadError=K(e),R.adminLoaded=!0,R.profileLoaded=!0}if(Ri())return;Z(),H();return}R.isAdmin=!1,R.opportunities=[],R.opportunitiesLoaded=!1,R.profile=null,R.companyMembership=null,R.profileDraft=null,R.profileDraftDirty=!1,R.profileLoading=!1,R.profileLoadError=null,R.companyId=null,R.storedMatches=[],Ac(),R.reports=[],R.reportsLoaded=!1,R.reportsLoadError=null,R.selectedReportId=null,R.authLoaded=!0,R.adminLoaded=!0,R.profileLoaded=!0,e===`SIGNED_OUT`&&V(`/`),Z(),H()}}))}async function Ro(){R.isBooting=!0,R.authLoaded=!1,R.profileLoaded=!1,R.adminLoaded=!1,R.bootError=null,Z();try{if(Lo(),await gi(),await Mo(),R.authLoaded=!0,R.currentUser&&Ni()){let e=Ni();R.pendingInviteToken=_e(e),R.adminLoaded=!0,R.profileLoaded=!0,Li(`/accept-invite?token=${encodeURIComponent(e)}`),await B({callback_invite_present:!!w(R.route),pending_invite_present:!0,onboarding_redirect_blocked:!0,accept_started_from_callback:!0,final_route:`/accept-invite?token=${encodeURIComponent(e)}`})}else R.currentUser?(await No(),await Po({overwriteDraft:!0,showGlobalLoading:!0})):(R.profile=null,R.companyMembership=null,R.profileDraft=null,R.profileDraftDirty=!1,R.profileLoading=!1,R.profileLoadError=null,R.companyId=null,Ac(),R.isAdmin=!1,R.adminLoaded=!0,R.profileLoaded=!0)}catch(e){console.error(`Boot failed:`,e),R.bootError=K(e),R.authLoaded=!0,R.adminLoaded=!0,R.profileLoaded=!0}finally{R.authLoading=!1,R.isBooting=!1,Ao=!0,Ii()?Li(`/reset-password`):Ri({replace:!0}),Z(),H()}}async function zo(){if(!y||!R.user)return{company:null,membership:null};let{data:e,error:t}=await y.from(`companies`).select(Zr).eq(`owner_id`,R.user.id).maybeSingle();if(t)throw t;if(e)return{company:e,membership:null};let n=(await Ce(y,R.user))[0]||null;if(!n?.company_id)return{company:null,membership:null};let{data:r,error:i}=await y.from(`companies`).select(Zr).eq(`id`,n.company_id).maybeSingle();if(i)throw i;return{company:r||null,membership:n}}async function Bo(e={}){let{overwriteDraft:t=!1}=e;if(!y||!R.user){R.profile=null,R.companyMembership=null,(t||!R.profileDraftDirty)&&(R.profileDraft=null),Z();return}try{await Se(y,R.user,{allowEmailClaim:!0}).catch(e=>(console.warn(`Failed to claim invited company memberships:`,e),[]));let{company:e,membership:n}=await zo();if(!e){R.companyId=null,R.companyMembership=null,R.storedMatches=[],Ac(),R.reports=[],R.reportsLoaded=!1,R.reportsLoadError=null,R.selectedReportId=null,R.profile=null,(t||!R.profileDraftDirty)&&(R.profileDraft=null),R.profileLoadError=null,Z(),H();return}if(R.profileDraftDirty&&R.companyId&&R.companyId!==e.id&&!t){if(!window.confirm(`You have unsaved profile changes. Switch company profile and discard those edits?`)){R.profileLoadError=`Unsaved changes were kept. Save or reload before switching company profiles.`,Z(),H();return}R.profileDraftDirty=!1}let[r,i,a]=await Promise.all([y.from(`company_services`).select(`service`).eq(`company_id`,e.id),y.from(`company_locations`).select(`location`).eq(`company_id`,e.id),y.from(`company_keywords`).select(`keyword, type`).eq(`company_id`,e.id)]);if(r.error)throw r.error;if(i.error)throw i.error;if(a.error)throw a.error;R.companyId!==e.id&&(Ac(),R.reports=[],R.reportsLoaded=!1,R.reportsLoadError=null,R.selectedReportId=null),R.companyId=e.id,R.companyMembership=n||null;let o=Ho(e,r.data||[],i.data||[],a.data||[]);R.profile=o,(t||!R.profileDraftDirty)&&vs(o),R.profileLoadError=null,is(R.profile),await Sc(),await Uo(),Z(),H()}catch(e){console.error(`Failed to load Supabase company profile:`,e),R.profileLoadError=K(e),R.profileDraftDirty||(R.companyId=null,R.companyMembership=null,R.storedMatches=[],Ac(),R.reports=[],R.reportsLoaded=!1,R.reportsLoadError=null,R.selectedReportId=null,R.profile=null),R.profileDraftDirty||(R.profileDraft=null),Z(),H()}}async function Vo(e){if(!y)throw Error(`Supabase client is not configured.`);let t={...e,companyName:String(e.companyName||``).trim(),kennitala:String(e.kennitala||``).trim(),contactEmail:String(e.contactEmail||``).trim(),billingEmail:String(e.billingEmail||``).trim(),contactName:String(e.contactName||``).trim(),phone:String(e.phone||``).trim(),address:String(e.address||``).trim(),website:String(e.website||``).trim(),industry:String(e.industry||``).trim(),selectedPlan:z(e.selectedPlan||R.pendingSignupPlan||R.profile?.selectedPlan||R.profile?.plan)||`basic`,billingStatus:e.billingStatus||R.profile?.billingStatus||`trial`,trialStartedAt:e.trialStartedAt||R.profile?.trialStartedAt||new Date().toISOString(),trialEndsAt:e.trialEndsAt||R.profile?.trialEndsAt||new Date(Date.now()+336*60*60*1e3).toISOString(),services:P(e.services),locations:P(e.locations),includeKeywords:P(e.includeKeywords),excludeKeywords:P(e.excludeKeywords),baseLocation:String(e.baseLocation||``).trim(),serviceAreas:P(e.serviceAreas),willingToTravel:!!e.willingToTravel,nationalProjects:!!e.nationalProjects,remoteProjects:!!e.remoteProjects,minimumProjectValueForTravel:cs(e.minimumProjectValueForTravel),minProjectValue:cs(e.minProjectValue),maxProjectValue:cs(e.maxProjectValue),allowUnknownValue:!!e.allowUnknownValue,reportFrequency:e.reportFrequency||`weekly`,reportDay:e.reportDay||`monday`,deadlineReminders:!!e.deadlineReminders,includeLowConfidence:!!e.includeLowConfidence,autoAlertMode:e.autoAlertMode||`auto_safe_only`},{data:{user:n},error:r}=await y.auth.getUser();if(r)throw r;if(!n)throw Error(`You must be logged in to save a company profile.`);R.user=n;let i={company_name:t.companyName,contact_email:t.contactEmail||n.email,kennitala:t.kennitala||null,billing_email:t.billingEmail||t.contactEmail||n.email,contact_name:t.contactName||null,phone:t.phone||null,address:t.address||null,website:t.website||null,industry:t.industry,plan:t.selectedPlan,selected_plan:t.selectedPlan,billing_status:t.billingStatus,trial_started_at:t.trialStartedAt,trial_ends_at:t.trialEndsAt,base_location:t.baseLocation||null,service_areas:t.serviceAreas,willing_to_travel:t.willingToTravel,national_projects:t.nationalProjects,remote_projects:t.remoteProjects,minimum_project_value_for_travel:t.minimumProjectValueForTravel,min_project_value:t.minProjectValue,max_project_value:t.maxProjectValue,allow_unknown_value:t.allowUnknownValue,report_frequency:t.reportFrequency,report_day:t.reportDay,deadline_reminders:t.deadlineReminders,include_low_confidence:t.includeLowConfidence,auto_alert_mode:t.autoAlertMode},{data:a,error:o}=await(R.companyId?y.from(`companies`).update(i).eq(`id`,R.companyId).select(`id`).single():y.from(`companies`).upsert({...i,owner_id:n.id},{onConflict:`owner_id`}).select(`id`).single());if(o)throw console.error(`Company upsert error:`,o),o;R.companyId!==a.id&&(R.reports=[],R.reportsLoaded=!1,R.reportsLoadError=null,R.selectedReportId=null),R.companyId=a.id;let s=(await Promise.all([y.from(`company_services`).delete().eq(`company_id`,a.id),y.from(`company_locations`).delete().eq(`company_id`,a.id),y.from(`company_keywords`).delete().eq(`company_id`,a.id)])).find(e=>e.error)?.error;if(s)throw s;let c=t.services.map(e=>({company_id:a.id,service:e})),l=t.locations.map(e=>({company_id:a.id,location:e})),u=[...t.includeKeywords.map(e=>({company_id:a.id,keyword:e,type:`include`})),...t.excludeKeywords.map(e=>({company_id:a.id,keyword:e,type:`exclude`}))];if(c.length){let{error:e}=await y.from(`company_services`).insert(c);if(e)throw e}if(l.length){let{error:e}=await y.from(`company_locations`).insert(l);if(e)throw e}if(u.length){let{error:e}=await y.from(`company_keywords`).insert(u);if(e)throw e}await m(y,a.id,R.profile,t,n),R.profile=t,R.pendingSignupPlan=``,si(),is(t)}function Ho(e,t,n,r){return{id:e.id||``,ownerId:e.owner_id||``,companyName:e.company_name||``,kennitala:e.kennitala||``,contactEmail:e.contact_email||``,billingEmail:e.billing_email||e.contact_email||``,contactName:e.contact_name||``,phone:e.phone||``,address:e.address||``,website:e.website||``,industry:e.industry||``,plan:e.plan||e.selected_plan||`basic`,selectedPlan:e.selected_plan||e.plan||`basic`,billingStatus:e.billing_status||`trial`,trialStartedAt:e.trial_started_at||``,trialEndsAt:e.trial_ends_at||``,services:P(t.map(e=>e.service)),includeKeywords:P(r.filter(e=>e.type===`include`).map(e=>e.keyword)),excludeKeywords:P(r.filter(e=>e.type===`exclude`).map(e=>e.keyword)),locations:P(n.map(e=>e.location)),baseLocation:e.base_location||``,serviceAreas:P(e.service_areas),willingToTravel:!!e.willing_to_travel,nationalProjects:!!e.national_projects,remoteProjects:!!e.remote_projects,minimumProjectValueForTravel:e.minimum_project_value_for_travel==null?null:Number(e.minimum_project_value_for_travel),minProjectValue:e.min_project_value==null?null:Number(e.min_project_value),maxProjectValue:e.max_project_value==null?null:Number(e.max_project_value),allowUnknownValue:!!e.allow_unknown_value,reportFrequency:e.report_frequency||`weekly`,reportDay:e.report_day||`monday`,deadlineReminders:!!e.deadline_reminders,includeLowConfidence:!!e.include_low_confidence,autoAlertMode:e.auto_alert_mode||`auto_safe_only`}}async function Uo(){if(!y||!R.companyId){R.storedMatches=[];return}try{let{data:e,error:t}=await y.from(`opportunity_matches`).select(`*, opportunities(*, sources(name, source_type))`).eq(`company_id`,R.companyId).order(`match_score`,{ascending:!1});if(t)throw t;let n=(e||[]).map(e=>e.calculated_at||e.updated_at||e.created_at).filter(Boolean).map(e=>new Date(e).getTime()).filter(e=>!Number.isNaN(e));R.lastMatchedAt=n.length?new Date(Math.max(...n)).toISOString():null;let r=(e||[]).filter(e=>e.opportunities).map(Aa).filter(Nf).filter(La),i=r.map(e=>e.id).filter(Boolean),a=[];if(i.length){let{data:e,error:t}=await y.from(`ai_match_reviews`).select(`company_id, opportunity_id, fit, confidence, send_to_client, reason, fit_reasons, risks_or_questions, suggested_client_summary, created_at, updated_at`).eq(`company_id`,R.companyId).in(`opportunity_id`,i);t&&console.warn(`Failed to load AI reviews for report ranking:`,t),a=e||[]}R.storedMatches=wr(r,a)}catch(e){console.error(`Failed to load stored opportunity matches. Falling back to frontend matching:`,e),R.storedMatches=[],R.lastMatchedAt=null}}async function Wo(){if(R.companyId&&!R.reportArchiveLoading){R.reportArchiveLoading=!0,R.reportsLoadError=null,Z();try{if(!y)throw Error(`Supabase client is not configured.`);let{data:e,error:t}=await y.from(`reports`).select(`
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
      `).eq(`company_id`,R.companyId).is(`archived_at`,null).order(`created_at`,{ascending:!1});if(t)throw t;R.reports=e||[],R.reportsLoaded=!0}catch(e){console.error(`Failed to load reports:`,e),R.reportsLoadError=K(e),R.reports=[],R.reportsLoaded=!0}finally{R.reportArchiveLoading=!1,Z()}}}async function Go(){if(!R.user){R.reportMessage={type:`error`,text:`Log in to save reports.`},Z();return}if(!R.companyId){R.reportMessage={type:`error`,text:`Create a company profile before saving reports.`},Z();return}let e=uf();if(!e.length){R.reportMessage={type:`error`,text:`No useful matches above the report threshold yet.`},Z();return}let t=ff(R.profile,e);R.reportSaveLoading=!0,R.reportMessage=null,Z();try{let{data:n,error:r}=await y.from(`reports`).insert({company_id:R.companyId,title:t.title,period_start:t.periodStart,period_end:t.periodEnd,summary:t.summary,text_content:t.textContent,html_content:t.htmlContent,status:`draft`}).select(`id`).single();if(r)throw r;let i=e.filter(e=>Pr(e.id)).map((e,t)=>({report_id:n.id,opportunity_id:e.id,match_score:e.matchScore,match_reasons:e.matchReasons||[],risks:e.risks||[],sort_order:t+1}));if(i.length){let{error:e}=await y.from(`report_items`).insert(i);if(e)throw e}R.reportMessage={type:`success`,text:`Report saved`},await Wo(),q(`Report saved`,`success`)}catch(e){console.error(`Failed to save report:`,e),R.reportMessage={type:`error`,text:`Failed to save report. ${K(e)}`}}finally{R.reportSaveLoading=!1,Z()}}async function Ko(e){if(!(!e||!y||!R.user)&&window.confirm(R.language===`is`?`Ertu viss um að þú viljir fela þetta yfirlit? Þetta er ekki hægt að afturkalla í mælaborðinu.`:`Are you sure you want to hide this report? This cannot be undone from the dashboard.`)){R.reportArchiveLoading=!0,R.reportMessage=null,Z();try{let{error:t}=await y.from(`reports`).update({archived_at:new Date().toISOString(),archived_by:R.user.id}).eq(`id`,e).eq(`company_id`,R.companyId);if(t)throw t;R.selectedReportId===e&&(R.selectedReportId=null),R.reports=R.reports.filter(t=>t.id!==e),R.reportMessage={type:`success`,text:R.language===`is`?`Yfirlitið var falið.`:`Report hidden.`},q(R.language===`is`?`Yfirlit falið`:`Report hidden`,`success`)}catch(e){console.error(`Failed to archive report:`,e),R.reportMessage={type:`error`,text:R.language===`is`?`Gat ekki falið yfirlitið. ${K(e)}`:`Could not hide report. ${K(e)}`}}finally{R.reportArchiveLoading=!1,Z()}}}async function qo(){R.matchingLoading=!0,R.matchStatus=null,Z();try{if(!y)throw Error(`Supabase client is not configured.`);let e=R.user||await Eo();if(!e)throw Error(`You must be logged in to run matching.`);R.user=e;let{company:t}=await zo();if(!t)throw Error(`No Supabase company profile found. Save onboarding first.`);R.companyId=t.id;let[n,r,i,a]=await Promise.all([y.from(`company_services`).select(`service`).eq(`company_id`,t.id),y.from(`company_locations`).select(`location`).eq(`company_id`,t.id),y.from(`company_keywords`).select(`keyword, type`).eq(`company_id`,t.id),y.from(`opportunities`).select(`*, sources(name, source_type)`).eq(`status`,`open`)]);if(n.error)throw n.error;if(r.error)throw r.error;if(i.error)throw i.error;if(a.error)throw a.error;let o=Ho(t,n.data||[],r.data||[],i.data||[]),s=R.profileDraftDirty,c=(a.data||[]).map(ka).filter(La).map(e=>ic(o,e)).filter(e=>e.matchScore>=50).map(e=>({company_id:t.id,opportunity_id:e.id,match_score:e.matchScore,match_label:e.matchLabel,match_reasons:e.matchReasons,risks:e.risks,next_steps:e.nextSteps,calculated_at:new Date().toISOString()})),{error:l}=await y.from(`opportunity_matches`).delete().eq(`company_id`,t.id);if(l)throw l;if(c.length){let{error:e}=await y.from(`opportunity_matches`).insert(c);if(e)throw e}R.profile=o,is(o),s||vs(o);let u=c.length===1?`match`:`matches`;return R.matchStatus={type:`success`,text:`Matching complete — ${c.length} stored ${u} found.`},await Hi(),await Sc(),await Uo(),c.length}catch(e){return console.error(`Failed to run matching:`,e),R.matchStatus={type:`error`,text:`Failed to run matching. ${K(e)}`},0}finally{R.matchingLoading=!1,Z()}}async function Jo(e,t){if(!R.isAdmin){R.adminMessage={type:`error`,text:`You do not have access to this page.`},Z();return}R.adminSubmitting=!0,R.adminMessage=null,Z();try{if(!y)throw Error(`Supabase client is not configured.`);let n=Object.fromEntries(e.entries()),r=String(n.sourceName||n.source||`Manual`).trim()||`Manual`,i=String(n.title||``).trim();if(!i)throw Error(`Title is required.`);let a=String(n.description||``).trim()||`Manual opportunity: ${i}`,o={source_id:await Qo(r),external_id:`manual-${Date.now()}`,title:i,buyer:String(n.buyer||``).trim()||null,category:String(n.category||``).trim()||null,type:String(n.type||``).trim()||`tender`,description:a,deadline:n.deadline||null,published_date:n.publishedDate||n.published_date||null,location:String(n.location||``).trim()||null,estimated_value:n.estimatedValue||n.estimated_value?Number(n.estimatedValue||n.estimated_value):null,currency:`ISK`,url:n.url||null,cpv_code:n.cpvCode||n.cpv_code||null,requirements:Mr(n.requirements),keywords:Mr(n.keywords),difficulty:String(n.difficulty||``).trim()||`medium`,status:String(n.status||``).trim()||`open`,raw_payload:{created_from:`admin`,source_name:r}},{error:s}=await y.from(`opportunities`).insert(o).select().single();if(s)throw console.error(`Supabase insert error:`,s),Error(`${s.message} (${s.code})`);R.adminMessage={type:`success`,text:`Opportunity saved to Supabase.`},R.adminOpportunityDraft=yi(),t?.reset(),await Hi(),R.companyId&&await qo(),q(`Opportunity added`,`success`)}catch(e){let t=K(e);console.error(`Failed to add opportunity. If this is an RLS error, allow anon insert/select during development:`,e),R.adminMessage={type:`error`,text:`Failed to save opportunity. ${t}`},Z()}finally{R.adminSubmitting=!1,Z()}}async function Yo(t){if(!R.isAdmin){R.adminMessage={type:`error`,text:`You do not have access to this page.`},Z();return}R.adminDeletingId=t,R.adminMessage=null,Z();try{if(!y)throw Error(`Supabase client is not configured.`);let{error:n}=await y.from(`opportunities`).delete().eq(`id`,t);if(n)throw n;R.saved=R.saved.filter(e=>e!==t),R.ignored=R.ignored.filter(e=>e!==t),os(e.saved,R.saved),os(e.ignored,R.ignored),R.adminMessage={type:`success`,text:`Opportunity deleted from Supabase.`},await Hi(),await ho(),q(`Opportunity deleted`,`success`)}catch(e){let t=K(e);console.error(`Failed to delete opportunity. If this is an RLS error, allow anon delete/select during development:`,e),R.adminMessage={type:`error`,text:`Failed to delete opportunity. ${t}`},Z()}finally{R.adminDeletingId=null,Z()}}async function Xo(e,t){if(!R.isAdmin){R.adminMessage={type:`error`,text:`You do not have access to this page.`},Z();return}R.adminUpdatingId=e,R.adminMessage=null,Z();try{if(!y)throw Error(`Supabase client is not configured.`);let{error:n}=await y.from(`opportunities`).update({status:t}).eq(`id`,e);if(n)throw n;R.adminMessage={type:`success`,text:t===`open`?`Opportunity marked relevant.`:`Opportunity hidden.`},await Hi(),await ho(),q(t===`open`?`Marked relevant`:`Opportunity hidden`,`success`)}catch(e){let t=K(e);console.error(`Failed to update opportunity status:`,e),R.adminMessage={type:`error`,text:`Failed to update opportunity. ${t}`},Z()}finally{R.adminUpdatingId=null,Z()}}async function Zo(e,t){if(!R.isAdmin){R.adminMessage={type:`error`,text:`You do not have access to this page.`},Z();return}let n=R.opportunities.find(t=>t.id===e);if(!n)return;let r={include:{opportunity_intent:`confirmed_tender`,quality_status:`confirmed_tender`,hidden_from_reports:!1,admin_report_status:`include`},hide:{hidden_from_reports:!0,admin_report_status:`hidden`},noise:{opportunity_intent:`not_opportunity`,quality_status:`needs_review`,hidden_from_reports:!0,admin_report_status:`noise`},confirmed_tender:{opportunity_intent:`confirmed_tender`,quality_status:`confirmed_tender`,hidden_from_reports:!1,admin_report_status:`include`},early_opportunity:{opportunity_intent:`early_opportunity`,quality_status:`early_signal`,hidden_from_reports:!1,admin_report_status:`include`}}[t];if(r){R.adminUpdatingId=e,R.adminMessage=null,Z();try{if(!y)throw Error(`Supabase client is not configured.`);let t={...n.rawPayload||{},...r,admin_reviewed_at:new Date().toISOString()},{error:i}=await y.from(`opportunities`).update({raw_payload:t}).eq(`id`,e);if(i)throw i;R.adminMessage={type:`success`,text:`Report visibility updated.`},await Hi(),q(`Report visibility updated`,`success`)}catch(e){let t=K(e);console.error(`Failed to update report visibility:`,e),R.adminMessage={type:`error`,text:`Failed to update report visibility. ${t}`},Z()}finally{R.adminUpdatingId=null,Z()}}}async function Qo(e){if(!y)throw Error(`Supabase client is not configured`);let t=e&&e.trim()?e.trim():`Manual`,{data:n,error:r}=await y.from(`sources`).select(`id`).eq(`name`,t).maybeSingle();if(r)throw console.error(`Source select error:`,r),r;if(n&&n.id)return n.id;let{data:i,error:a}=await y.from(`sources`).insert({name:t,source_type:`manual`,is_active:!0,notes:`Created from VerkRadar admin page`}).select(`id`).single();if(a)throw console.error(`Source insert error:`,a),a;return i.id}function K(e){return e?typeof e==`string`?e:[e.message,e.details,e.hint,e.code].filter(Boolean).join(` `):`Unknown error`}function $o(e,t=`login`){let n=String(e?.message||e||``).toLowerCase(),r=String(e?.code||e?.status||``).toLowerCase();return n.includes(`invalid login credentials`)||n.includes(`invalid_credentials`)||r.includes(`invalid_credentials`)?L(`emailOrPasswordIncorrect`):n.includes(`email not confirmed`)?L(`confirmEmailBeforeLogin`):es(e)?L(`signupExistingAccount`):n.includes(`password`)&&n.includes(`characters`)?L(`passwordTooShort`):n.includes(`rate limit`)||n.includes(`too many`)?L(`tooManyAttempts`):L(t===`signup`?`couldNotCreateAccount`:`couldNotLogin`)}function es(e){let t=String(e?.message||e||``).toLowerCase(),n=String(e?.code||e?.status||``).toLowerCase();return t.includes(`user already registered`)||t.includes(`already registered`)||t.includes(`already exists`)||n.includes(`user_already_exists`)||n.includes(`email_exists`)}var ts={success:3e3,info:4e3,warning:5e3,error:6e3};function q(e,t=`success`,n={}){let r=ts[t]?t:`info`,i=n.key||`${r}:${e}`;R.toast?.key===i&&R.toast.message===e&&clearTimeout(window.__toastTimeout),R.toast={message:e,type:r,key:i,persistent:!!n.persistent,placement:n.placement||`default`,isClosing:!1},Z(),clearTimeout(window.__toastTimeout),clearTimeout(window.__toastExitTimeout),R.toast.persistent||(window.__toastTimeout=setTimeout(()=>{R.toast?.key===i&&ns(i)},n.duration??ts[r]))}function ns(e=R.toast?.key){!R.toast||R.toast.key!==e||R.toast.isClosing||(clearTimeout(window.__toastTimeout),R.toast={...R.toast,isClosing:!0},Z(),clearTimeout(window.__toastExitTimeout),window.__toastExitTimeout=setTimeout(()=>{R.toast?.key===e&&(R.toast=null,Z())},180))}function rs(){clearTimeout(window.__toastTimeout),clearTimeout(window.__toastExitTimeout),R.toast=null}function is(t){localStorage.setItem(e.profile,JSON.stringify(t))}function as(e){try{let t=localStorage.getItem(e);return t?JSON.parse(t):[]}catch{return[]}}function os(e,t){localStorage.setItem(e,JSON.stringify(t))}function ss(e){return P(e).join(`, `)}function cs(e){if(e==null||e===``)return null;let t=Number(e);return Number.isFinite(t)?t:null}function ls(e){return String(e||``).trim().toLowerCase()}function us(e,t=R.profileDraft?.industry){return u[e]?.[t]||[]}function ds(e,t){if(![`services`,`includeKeywords`,`excludeKeywords`].includes(e)||!t)return;J();let n=Array.isArray(R.profileDraft[e])?R.profileDraft[e]:[],r=ls(t),i=n.some(e=>ls(e)===r);R.profileDraft[e]=i?n.filter(e=>ls(e)!==r):[...n,t],_s(),Z()}function fs(){R.adminTrialCompanyDraft||=Wn(_d(),()=>f(``))}function ps(e){let t=gd(e);!t||t.converted_company_id||t.status===`converted`||(R.selectedAdminTrialRequestId=t.id,R.adminTrialCompanyDraft=Wn(t,()=>f(``)),R.adminTrialCompanyMessage=``,R.adminTrialCompanyError=``,Z())}function ms(e,t){if(![`services`,`includeKeywords`,`excludeKeywords`].includes(e)||!t)return;fs();let n=Array.isArray(R.adminTrialCompanyDraft[e])?R.adminTrialCompanyDraft[e]:[],r=ls(t),i=n.some(e=>ls(e)===r);R.adminTrialCompanyDraft[e]=i?n.filter(e=>ls(e)!==r):[...n,t],Z()}function hs({field:e,title:t,values:n,selectedValues:r}){if(!n.length)return``;let i=Array.isArray(r)?r:[];return`
    <div class="suggestion-group">
      <div class="suggestion-group-head">
        <span>${I(t)}</span>
      </div>
      <div class="suggestion-chips">
        ${n.map(t=>{let n=i.some(e=>ls(e)===ls(t));return`
            <button
              type="button"
              class="suggestion-chip ${n?`is-selected`:``}"
              data-action="toggle-profile-suggestion"
              data-field="${I(e)}"
              data-value="${I(t)}"
              aria-pressed="${n?`true`:`false`}"
            >${I(t)}</button>
          `}).join(``)}
      </div>
    </div>
  `}function J(){if(!R.profileDraft){if(R.profile){R.profileDraft=gs(R.profile);return}R.profileDraft=ni(),R.pendingSignupPlan&&(R.profileDraft.selectedPlan=R.pendingSignupPlan)}}function gs(e){return{...e,services:P(e.services),includeKeywords:P(e.includeKeywords),excludeKeywords:P(e.excludeKeywords),locations:P(e.locations),serviceAreas:P(e.serviceAreas)}}function _s(){R.profileDraftDirty=!0,R.profileSaved=!1,R.profileSaveMessage=null,R.profileSaveError=null}function vs(e){R.profileDraft=gs(e||ni()),R.profileDraftDirty=!1}function ys(e){J();let t=new FormData(e),n={...R.profileDraft};Y(e,`companyName`)&&(n.companyName=String(t.get(`companyName`)||``).trim()),Y(e,`kennitala`)&&(n.kennitala=String(t.get(`kennitala`)||``).trim()),Y(e,`contactEmail`)&&(n.contactEmail=String(t.get(`contactEmail`)||``).trim()),Y(e,`billingEmail`)&&(n.billingEmail=String(t.get(`billingEmail`)||``).trim()),Y(e,`contactName`)&&(n.contactName=String(t.get(`contactName`)||``).trim()),Y(e,`phone`)&&(n.phone=String(t.get(`phone`)||``).trim()),Y(e,`address`)&&(n.address=String(t.get(`address`)||``).trim()),Y(e,`website`)&&(n.website=String(t.get(`website`)||``).trim()),Y(e,`selectedPlan`)&&(n.selectedPlan=z(t.get(`selectedPlan`))||`basic`),Y(e,`industry`)&&(n.industry=String(t.get(`industry`)||``)),Y(e,`services`)&&(n.services=N(t.get(`services`))),Y(e,`includeKeywords`)&&(n.includeKeywords=N(t.get(`includeKeywords`))),Y(e,`excludeKeywords`)&&(n.excludeKeywords=N(t.get(`excludeKeywords`))),Y(e,`locations`)&&(n.locations=t.getAll(`locations`)),Y(e,`baseLocation`)&&(n.baseLocation=String(t.get(`baseLocation`)||``)),Y(e,`serviceAreas`)&&(n.serviceAreas=N(t.get(`serviceAreas`))),Y(e,`willingToTravel`)&&(n.willingToTravel=t.get(`willingToTravel`)===`on`),Y(e,`nationalProjects`)&&(n.nationalProjects=t.get(`nationalProjects`)===`on`),Y(e,`remoteProjects`)&&(n.remoteProjects=t.get(`remoteProjects`)===`on`),Y(e,`minimumProjectValueForTravel`)&&(n.minimumProjectValueForTravel=String(t.get(`minimumProjectValueForTravel`)||``)),Y(e,`minProjectValue`)&&(n.minProjectValue=String(t.get(`minProjectValue`)||``)),Y(e,`maxProjectValue`)&&(n.maxProjectValue=String(t.get(`maxProjectValue`)||``)),Y(e,`allowUnknownValue`)&&(n.allowUnknownValue=t.get(`allowUnknownValue`)===`on`),Y(e,`reportFrequency`)&&(n.reportFrequency=String(t.get(`reportFrequency`)||`weekly`)),Y(e,`reportDay`)&&(n.reportDay=String(t.get(`reportDay`)||`monday`)),Y(e,`deadlineReminders`)&&(n.deadlineReminders=t.get(`deadlineReminders`)===`on`),Y(e,`includeLowConfidence`)&&(n.includeLowConfidence=t.get(`includeLowConfidence`)===`on`),R.profileDraft=n,_s()}function bs(e){fs(),R.adminTrialCompanyDraft=xs(e,R.adminTrialCompanyDraft)}function xs(e,t={}){let n=new FormData(e),r={...t};return Y(e,`companyName`)&&(r.companyName=String(n.get(`companyName`)||``).trim()),Y(e,`kennitala`)&&(r.kennitala=String(n.get(`kennitala`)||``).trim()),Y(e,`contactEmail`)&&(r.contactEmail=String(n.get(`contactEmail`)||``).trim()),Y(e,`billingEmail`)&&(r.billingEmail=String(n.get(`billingEmail`)||``).trim()),Y(e,`contactName`)&&(r.contactName=String(n.get(`contactName`)||``).trim()),Y(e,`phone`)&&(r.phone=String(n.get(`phone`)||``).trim()),Y(e,`address`)&&(r.address=String(n.get(`address`)||``).trim()),Y(e,`website`)&&(r.website=String(n.get(`website`)||``).trim()),Y(e,`selectedPlan`)&&(r.selectedPlan=z(n.get(`selectedPlan`))||`basic`),Y(e,`industry`)&&(r.industry=String(n.get(`industry`)||``)),Y(e,`services`)&&(r.services=N(n.get(`services`))),Y(e,`includeKeywords`)&&(r.includeKeywords=N(n.get(`includeKeywords`))),Y(e,`excludeKeywords`)&&(r.excludeKeywords=N(n.get(`excludeKeywords`))),Y(e,`locations`)&&(r.locations=n.getAll(`locations`)),Y(e,`baseLocation`)&&(r.baseLocation=String(n.get(`baseLocation`)||``)),Y(e,`serviceAreas`)&&(r.serviceAreas=N(n.get(`serviceAreas`))),Y(e,`willingToTravel`)&&(r.willingToTravel=n.get(`willingToTravel`)===`on`),Y(e,`nationalProjects`)&&(r.nationalProjects=n.get(`nationalProjects`)===`on`),Y(e,`remoteProjects`)&&(r.remoteProjects=n.get(`remoteProjects`)===`on`),Y(e,`minimumProjectValueForTravel`)&&(r.minimumProjectValueForTravel=String(n.get(`minimumProjectValueForTravel`)||``)),Y(e,`minProjectValue`)&&(r.minProjectValue=String(n.get(`minProjectValue`)||``)),Y(e,`maxProjectValue`)&&(r.maxProjectValue=String(n.get(`maxProjectValue`)||``)),Y(e,`allowUnknownValue`)&&(r.allowUnknownValue=n.get(`allowUnknownValue`)===`on`),Y(e,`reportFrequency`)&&(r.reportFrequency=String(n.get(`reportFrequency`)||`weekly`)),Y(e,`reportDay`)&&(r.reportDay=String(n.get(`reportDay`)||`monday`)),Y(e,`deadlineReminders`)&&(r.deadlineReminders=n.get(`deadlineReminders`)===`on`),Y(e,`includeLowConfidence`)&&(r.includeLowConfidence=n.get(`includeLowConfidence`)===`on`),r}function Y(e,t){return!!e.querySelector(`[name="${CSS.escape(t)}"]`)}function Ss(){return J(),{...R.profileDraft,companyName:String(R.profileDraft.companyName||``).trim(),kennitala:String(R.profileDraft.kennitala||``).trim(),contactEmail:String(R.profileDraft.contactEmail||``).trim(),billingEmail:String(R.profileDraft.billingEmail||``).trim(),contactName:String(R.profileDraft.contactName||``).trim(),phone:String(R.profileDraft.phone||``).trim(),address:String(R.profileDraft.address||``).trim(),website:String(R.profileDraft.website||``).trim(),selectedPlan:z(R.profileDraft.selectedPlan||R.pendingSignupPlan)||`basic`,industry:String(R.profileDraft.industry||``),services:P(R.profileDraft.services),includeKeywords:P(R.profileDraft.includeKeywords),excludeKeywords:P(R.profileDraft.excludeKeywords),locations:P(R.profileDraft.locations),baseLocation:String(R.profileDraft.baseLocation||``),serviceAreas:P(R.profileDraft.serviceAreas),willingToTravel:!!R.profileDraft.willingToTravel,nationalProjects:!!R.profileDraft.nationalProjects,remoteProjects:!!R.profileDraft.remoteProjects,minimumProjectValueForTravel:cs(R.profileDraft.minimumProjectValueForTravel),minProjectValue:cs(R.profileDraft.minProjectValue),maxProjectValue:cs(R.profileDraft.maxProjectValue)}}function Cs(){fs();let e=R.adminTrialCompanyDraft||{};return{...e,companyName:String(e.companyName||``).trim(),kennitala:String(e.kennitala||``).trim(),contactEmail:String(e.contactEmail||``).trim(),billingEmail:String(e.billingEmail||``).trim(),contactName:String(e.contactName||``).trim(),phone:String(e.phone||``).trim(),address:String(e.address||``).trim(),website:String(e.website||``).trim(),selectedPlan:z(e.selectedPlan)||`basic`,billingStatus:e.billingStatus||`trial`,trialStartedAt:e.trialStartedAt||new Date().toISOString(),trialEndsAt:e.trialEndsAt||new Date(Date.now()+336*60*60*1e3).toISOString(),industry:String(e.industry||``),services:P(e.services),includeKeywords:P(e.includeKeywords),excludeKeywords:P(e.excludeKeywords),locations:P(e.locations),baseLocation:String(e.baseLocation||``),serviceAreas:P(e.serviceAreas),willingToTravel:!!e.willingToTravel,nationalProjects:!!e.nationalProjects,remoteProjects:!!e.remoteProjects,minimumProjectValueForTravel:cs(e.minimumProjectValueForTravel),minProjectValue:cs(e.minProjectValue),maxProjectValue:cs(e.maxProjectValue),allowUnknownValue:!!e.allowUnknownValue,reportFrequency:e.reportFrequency||`weekly`,reportDay:e.reportDay||`monday`,deadlineReminders:!!e.deadlineReminders,includeLowConfidence:!!e.includeLowConfidence,autoAlertMode:e.autoAlertMode||`auto_safe_only`}}function ws(e,t){return String(e||``).toLowerCase().includes(String(t||``).toLowerCase())}function Ts(e){return[e.title,e.description,e.category,e.location,...e.keywords||[]].join(` `).toLowerCase()}var Es=`jarðvinna.gatnagerð.gatna- og stígagerð.gatna og stígagerð.stígagerð.lóðarframkvæmdir.lagnavinna.lagnir.fráveita.fráveitulagnir.vatnsveita.hitaveita.vatnslagnir.regnvatnslagnir.drenlagnir.endurnýjun lagna.brunnar.dælubrunnar.malbikun.gangstétt.gangstéttir.stígar.bílastæði.vegagerð.gröftur.fyllingar.grjóthleðsla.jarðvegsskipti.undirbygging.yfirborðsfrágangur.hellulögn.hellulagnir.kantsteinn.kantsteinar.landmótun.afvötnun.jarðvegsvinna.útiframkvæmdir.gatnaframkvæmdir`.split(`.`),Ds=[`snjómokstur`,`snjóruðningur`,`hálkuvarnir`,`vetrarþjónusta`,`gangstéttir`,`stofnanalóðir`],Os=[`framkvæmdir`,`framkvæmd`,`útboð`,`verðfyrirspurn`,`tilboð`,`viðhald`,`verktaki`,`verk`],ks=[`innanhússfrágangur`,`innanhúss`,`smíði`,`smíðavinna`,`málun`,`gólfefni`,`innréttingar`,`raflagnir`,`pípulagnir`,`leikskóli`,`skóli`,`húsnæði`,`byggingarvinna`],As=[`innanhússfrágangur`,`innanhúss`,`smíði`,`smíðavinna`,`málun`,`gólfefni`,`innréttingar`,`raflagnir`,`pípulagnir`,`byggingarvinna`],js=[`for- og verkhönnun`,`verkhönnun`,`forhönnun`,`hönnun`,`ráðgjöf`,`verkfræðiráðgjöf`,`eftirlit`,`umsjón`,`verkefnastjórn`,`verkefnastjórnun`],Ms=[`hönnun`,`for- og verkhönnun`,`verkhönnun`,`forhönnun`,`ráðgjöf`,`verkfræðiráðgjöf`,`eftirlit`,`umsjón`,`verkefnastjórn`,`verkefnastjórnun`],Ns=[`jarðvinna`,`jarðvegsvinna`,`gatnagerð`,`gatna- og stígagerð`,`stígagerð`,`vegagerð`,`lóðarframkvæmdir`,`gröftur`,`jarðvegsskipti`,`fyllingar`,`afvötnun`,`landmótun`,`yfirborðsfrágangur`,`malbikun`,`útiframkvæmdir`];function X(e){return F(e)}function Ps(e,t){let n=X(e);return t.some(e=>n.includes(X(e)))}function Fs(e){let t=X(e);return Os.some(e=>t===X(e))}function Is(e){let t=X(e);return Es.some(e=>t===X(e))?0:Es.some(e=>t.includes(X(e))||X(e).includes(t))?1:Ds.some(e=>t===X(e))?2:Fs(e)?10:3}function Ls(e){return[...e].sort((e,t)=>Is(e)-Is(t)||String(t).length-String(e).length||String(e).localeCompare(String(t)))}function Rs(e){let t=X(e);return Es.filter(e=>t.includes(X(e)))}function zs(e){let t=X(e);return Ds.filter(e=>t.includes(X(e)))}function Bs(e,t){let n=Rs(t);if(!n.length||!e.some(Fs))return e;let r=e.filter(e=>!Fs(e));return[...new Set([...n,...r])]}function Vs(e={}){return Ps([e.industry,...Array.isArray(e.services)?e.services:[],...Array.isArray(e.includeKeywords)?e.includeKeywords:[]].filter(Boolean).join(` `),[...Es,...Ds,`construction`,`contractor`,`verktaki`,`mannvirki`,`jarðtækni`])}function Hs(e={}){return Ps([...Array.isArray(e.services)?e.services:[],...Array.isArray(e.includeKeywords)?e.includeKeywords:[]].filter(Boolean).join(` `),Ds)}function Us(e={}){return Ps([...Array.isArray(e.services)?e.services:[],...Array.isArray(e.includeKeywords)?e.includeKeywords:[]].filter(Boolean).join(` `),As)}function Ws(e={}){return Ps([...Array.isArray(e.services)?e.services:[],...Array.isArray(e.includeKeywords)?e.includeKeywords:[]].filter(Boolean).join(` `),Ms)}function Gs(e={}){return Ps([e.industry,...Array.isArray(e.services)?e.services:[],...Array.isArray(e.includeKeywords)?e.includeKeywords:[]].filter(Boolean).join(` `),Ns)}function Ks(e,t,n,r){if(!Vs(e))return{isCivilProfile:!1,serviceHits:n,keywordHits:r,hasWeakOnlyFit:!1,hasIndoorMismatch:!1,hasConsultingMismatch:!1,hasSecondaryOnlyFit:!1,hasPromotedBroadFit:!1,hasWinterOnlyFit:!1};let i=Ts(t),a=Ps(i,Es),o=Ps(i,Ds),s=Hs(e),c=o&&s,l=Ps(i,ks),u=Us(e),d=Ps(i,js),f=Ws(e),p=Rs(i),m=c?zs(i):[],h=n.length>0&&n.every(Fs),ee=r.length>0&&r.every(Fs),g=[...n,...r].some(e=>!Fs(e)),te=[...n,...r].some(Fs),_=!g&&te&&a,v=_||c?[...new Set([...n,..._?p:[],...m])]:n,y=a||c||g,b=y&&_?Bs(v,i):v.filter(e=>!Fs(e)),ne=y&&_?Bs(r,i):r.filter(e=>!Fs(e)),x=[...new Set([...b,...ne].filter(e=>!Fs(e)))],S=!Gs(e);return{isCivilProfile:!0,serviceHits:Ls(b),keywordHits:Ls(ne),hasWeakOnlyFit:!a&&!c&&!g&&(h||ee),hasIndoorMismatch:l&&!a&&!u,hasConsultingMismatch:d&&!f,hasWinterOnlyFit:c&&!a,hasSecondaryOnlyFit:g&&S&&x.length<=2&&p.length>=3,hasPromotedBroadFit:_}}function qs(e){let t=F(e.location);if(ec(t)&&tc(e))return!1;let n=F(`${e.title} ${e.description} ${e.location}`);return[`all iceland`,`iceland`,`island`].some(e=>t.includes(e))?!0:[`national`,`landsvist`,`nationwide`].some(e=>n.includes(e))}function Js(e){return[...e.locations||[],...e.serviceAreas||[],e.baseLocation].filter(Boolean)}function Ys(e,t){let n=Js(e);if(!n.length)return!1;let r=ro(t);if(n.includes(`All Iceland`)){let e=F($s(t));return r===`IS`||e.includes(`iceland`)||e.includes(`island`)}if(n.includes(`Remote / Online`)&&$s(t)===`Remote / Online`)return!0;if(!r||r!==`IS`&&n.some(e=>F(e).includes(`iceland`)))return!1;let i=F($s(t));return n.some(e=>{let t=F(e);return t?t===i||t===`reykjavik`&&[`reykjavik`,`capital area`,`hofudborgarsvaedid`].includes(i)||t===`capital area`&&[`reykjavik`,`capital area`,`hofudborgarsvaedid`].includes(i)?!0:i.includes(t)||t.includes(i):!1})}function Xs(e,t){return e?Ys(e,t)?`local_match`:e.locations?.includes(`Remote / Online`)&&$s(t)===`Remote / Online`?`remote_match`:qs(t)&&(Qs(t)||ro(t)===`IS`)?`national_match`:$s(t)===`Remote / Online`&&e.remoteProjects?`remote_match`:Qs(t)&&(e.nationalProjects||e.willingToTravel)?`outside_area_possible`:`outside_area_low_confidence`:`outside_area_low_confidence`}function Zs(e,t){let n=Xs(e,t);return n===`local_match`?`Local match`:n===`national_match`?`National opportunity`:n===`remote_match`?`Remote opportunity`:n===`outside_area_possible`?`Outside base area but travel allowed`:n===`outside_area_low_confidence`?`Outside selected area; low-confidence location match`:null}function Qs(e){if(ro(e)===`IS`)return!0;let t=F($s(e));return[`iceland`,`island`,`all iceland`,`reykjavik`,`capital area`,`hofudborgarsvaedid`,`east iceland`,`west iceland`,`north iceland`,`south iceland`,`sudurnes`].some(e=>t.includes(e))}function $s(e={}){let t=String(e.location||``).trim(),n=F(t);return t&&!ec(n)?t:tc(e)||t}function ec(e){return!e||e===`unknown`||e===`all iceland`||e===`iceland`||e===`island`}function tc(e={}){let t=e.rawPayload&&typeof e.rawPayload==`object`?e.rawPayload:{},n=F([e.title,e.description,e.buyer,t.buyer,t.extracted_buyer,t.source_name,t.extracted_location,t.location].filter(Boolean).join(` `));return n.includes(`reykjavik`)||n.includes(`reykjavikurborg`)||n.includes(`hofudborgarsvaedid`)?`Reykjavík / Höfuðborgarsvæðið`:``}function nc(e,t){return t.estimatedValue?!(e.minProjectValue&&t.estimatedValue<e.minProjectValue||e.maxProjectValue&&t.estimatedValue>e.maxProjectValue):!!e.allowUnknownValue}function rc(e,t){let n=String(e.industry||``).toLowerCase(),r=String(t.category||``).toLowerCase();return r.includes(n)||n.includes(r)}function ic(e,t){if(!e)return{...t,matchScore:0,matchLabel:`Weak match`,matchReasons:[],risks:[],nextSteps:[]};let n=Ts(t),r=0,i=[],a=[];rc(e,t)&&(r+=35,i.push(`Matches your ${e.industry} industry`));let o=Ks(e,t,(e.services||[]).filter(e=>ws(n,e)),(e.includeKeywords||[]).filter(e=>ws(n,e)));for(let e of o.serviceHits)r+=10,i.push(`Mentions your service: ${e}`);for(let e of o.keywordHits)r+=8,i.push(`Contains your keyword: ${e}`);let s=Xs(e,t),c=Zs(e,t);if(s===`local_match`)r+=22,i.push(c);else if(s===`national_match`)r+=16,i.push(c);else if(s===`remote_match`)r+=14,i.push(c);else if(s===`outside_area_possible`){let n=Number(e.minimumProjectValueForTravel||0),o=n&&t.estimatedValue&&Number(t.estimatedValue)<n;r+=o?-4:4,i.push(c),a.push(o?`Outside base area and below your preferred travel project value`:`Check travel cost, project size and delivery capacity`)}else r-=8,a.push(`Outside selected area; location match is low confidence`);o.hasWinterOnlyFit&&s===`local_match`&&(r+=12,i.push(`Local winter service fit`)),nc(e,t)?(r+=10,t.estimatedValue&&i.push(`Project value is inside your preferred range`)):(r-=25,a.push(`Estimated project value is outside your preferred range`));let l=j(t.deadline);t.deadline?l>=0&&l<=30?(r+=8,i.push(`Deadline is coming up soon`)):l<0&&(r-=50,a.push(`Deadline has passed`)):a.push(Ic(t));for(let t of e.excludeKeywords||[])ws(n,t)&&(r-=18,a.push(`Contains exclude keyword: ${t}`));return(t.requirements||[]).some(e=>ws(e,`certification`)||ws(e,`license`))&&a.push(`May require certification or license documentation`),t.difficulty===`high`&&a.push(`This appears to be a higher-complexity opportunity`),o.hasWeakOnlyFit&&(r=Math.min(r,40),a.push(`Only broad construction/procurement terms matched; verify fit`)),o.hasIndoorMismatch&&(r=Math.min(r-20,40),a.push(`Appears to be indoor/building finishing work outside your core civil services`)),o.hasConsultingMismatch&&(r=Math.min(r-30,35),a.push(`Appears to be design, consulting, supervision, or project management work outside your execution services`)),o.hasSecondaryOnlyFit&&(r=Math.min(r,84),a.push(`Secondary service match in a broader infrastructure tender; verify scope`)),o.hasPromotedBroadFit&&(r=Math.min(r,72),a.push(`Broad construction terms matched; verify the specific work type`)),o.hasWinterOnlyFit&&(r=Math.min(r,68),a.push(`Winter/snow service fit; verify capacity and scope`)),r=Math.max(0,Math.min(100,Math.round(r))),{...t,matchScore:r,matchLabel:oc(r),matchReasons:i.slice(0,5),risks:[...new Set(a)].slice(0,4),nextSteps:[`Open the source documents`,`Confirm mandatory requirements`,`Check capacity and profitability`,`Prepare questions before the deadline`]}}function ac(e){if(!R.profile||!Vs(R.profile))return e;let t=ic(R.profile,e);return Number(t.matchScore||0)>=Number(e.matchScore||0)?e:{...e,matchScore:t.matchScore,matchLabel:t.matchLabel,matchReasons:t.matchReasons,risks:t.risks,nextSteps:t.nextSteps}}function oc(e){return e>=85?`Strong match`:e>=65?`Good match`:e>=45?`Possible match`:`Weak match`}function sc(){if(R.storedMatches.length)return R.storedMatches.filter(Nf).filter(uc).filter(La).filter(e=>!R.ignored.includes(e.id)).map(ac).sort((e,t)=>t.matchScore-e.matchScore||j(e.deadline)-j(t.deadline));let e=R.profile||(R.user?null:ei);return e?R.opportunities.filter(Nf).map(t=>ic(e,t)).filter(uc).filter(La).filter(e=>!R.ignored.includes(e.id)).sort((e,t)=>t.matchScore-e.matchScore||j(e.deadline)-j(t.deadline)):[]}function cc(){return R.storedMatches.filter(Nf).filter(uc).filter(La).filter(e=>!R.ignored.includes(e.id)).sort((e,t)=>t.matchScore-e.matchScore||j(e.deadline)-j(t.deadline))}function lc(){let e=R.profile||(R.user?null:ei);return e?R.opportunities.filter(Nf).map(t=>ic(e,t)).filter(uc).filter(La).filter(e=>!R.ignored.includes(e.id)).sort((e,t)=>bc(e)-bc(t)||t.matchScore-e.matchScore||j(e.deadline)-j(t.deadline)):[]}function uc(e){return R.isAdmin&&R.filters.label===`all_opportunities`?!0:vf(e)}function dc(e={}){return String(e.safetyStatus||e.safety_status||`auto_approved`)}function fc(e){return[...cc(),...lc()].find(t=>t.id===e)}function pc(){let e=mc([`all_opportunities`,`needs_review`].includes(R.filters.label)?lc():cc());if(R.filters.label===`recommended`){let t=e.filter(gc),n=e.filter(_c);return yc(t.length?t:n)}return yc(e.filter(hc))}function mc(e){return e.filter(e=>{let t=R.filters.search.toLowerCase();return!(t&&!Ts(e).includes(t)||R.filters.category!==`all`&&e.category!==R.filters.category||R.filters.location!==`all`&&e.location!==R.filters.location||R.filters.type!==`all`&&e.type!==R.filters.type||R.filters.savedOnly&&!R.saved.includes(e.id))})}function hc(e){let t=R.filters.label;return t===`all`||t===`all_opportunities`?!0:t===`needs_review`?W(e.qualityStatus,e)===`needs_review`:t===`recommended`?gc(e):t===`strong`?e.matchLabel===`Strong match`||e.matchScore>=85:t===`possible`?[`Possible match`,`Weak match`].includes(e.matchLabel)||e.matchScore<65:e.matchLabel===t}function gc(e){return!vc(e)||yf(e)?!1:e.matchScore>=85||e.matchLabel===`Strong match`?!0:!(W(e.qualityStatus,e)===`needs_review`||no(Wa(e)))}function _c(e){return!vc(e)||yf(e)?!1:e.matchScore>=85||e.matchLabel===`Strong match`?!0:!(W(e.qualityStatus,e)===`needs_review`||no(Wa(e)))}function vc(e){return[`Strong match`,`Good match`,`Possible match`].includes(e.matchLabel)||e.matchScore>=45}function yc(e){return[...e].sort((e,t)=>bc(e)-bc(t)||t.matchScore-e.matchScore||j(e.deadline)-j(t.deadline))}function bc(e){let t=Ba(e);if(t===`confirmed_tender`)return 0;if(t===`early_opportunity`)return 1;if(t===`market_signal`)return 2;if(t===`news_context`)return 8;if(t===`not_opportunity`)return 9;let n=W(e.qualityStatus,e);return n===`confirmed_tender`?0:n===`early_signal`?1:2}function xc({visibleCount:e,storedMatchCount:t,filteredStoredCount:n,availableCount:r,recommendedCount:i,strongCount:a,companyName:o}){let s=R.filters.label;return R.language===`is`?s===`all_opportunities`?`${r} tækifæri eru til í kerfinu. Sýni ${e} sýnileg tækifæri til yfirferðar.`:s===`needs_review`?`${r} tækifæri eru til í kerfinu. Sýni ${e} atriði sem þarf að staðfesta.`:s===`all`?`${t} tækifæri fundust sem gætu passað við ${o}. Sýni ${e}.`:s===`strong`?`${t} tækifæri fundust sem gætu passað við ${o}. Sýni ${e} sterkar samsvaranir.`:s===`recommended`?e?`${t} tækifæri fundust sem gætu passað við ${o}. Sýni ${e} ráðlögð eða möguleg tækifæri.`:a>0?`${a} sterkar samsvaranir eru til fyrir ${o}, en þær eru faldar af núverandi síum.`:n>0?`${n} tækifæri eru falin af gæðasíum. Notið Allar samsvaranir eða Þarfnast staðfestingar til að skoða þau.`:`Engar ráðlagðar samsvaranir fyrir ${o} enn. ${r} tækifæri eru til í kerfinu, en ekkert passar nógu sterkt við þennan prófíl.`:s===`possible`?`${t} tækifæri fundust sem gætu passað við ${o}. Sýni ${e} mögulegar eða veikar samsvaranir.`:`${t} tækifæri fundust sem gætu passað við ${o}. Sýni ${e} tækifæri.`:s===`all_opportunities`?`${r} opportunities are available in the system. Showing ${e} visible opportunities for inspection.`:s===`needs_review`?`${r} opportunities are available in the system. Showing ${e} needs-review opportunities.`:s===`all`?`${t} opportunities may fit ${o}. Showing all ${e}.`:s===`strong`?`${t} opportunities may fit ${o}. Showing ${e} strong matches.`:s===`recommended`?e?`${t} opportunities may fit ${o}. Showing ${e} recommended or possible matches.`:a>0?`${a} strong ${a===1?`match exists`:`matches exist`} for ${o}, but ${a===1?`it is`:`they are`} hidden by your current filters.`:n>0?`${n} ${n===1?`opportunity is`:`opportunities are`} hidden from Recommended by quality checks. Use All matches or Needs review to inspect them.`:`No recommended matches for ${o} yet. ${r} opportunities are available in the system, but none match this profile strongly enough.`:s===`possible`?`${t} opportunities may fit ${o}. Showing ${e} possible or weak matches.`:`${t} opportunities may fit ${o}. Showing ${e} ${s.toLowerCase()} opportunities.`}async function Sc(){if(!y||!R.companyId){R.opportunityActions=[];return}try{let{data:e,error:t}=await y.from(`company_opportunity_actions`).select(`id, company_id, opportunity_id, action_type, note, created_at, updated_at`).eq(`company_id`,R.companyId);if(t)throw t;R.opportunityActions=e||[],R.saved=R.opportunityActions.filter(e=>[`saved`,`watched`].includes(e.action_type)).map(e=>e.opportunity_id),R.ignored=R.opportunityActions.filter(e=>e.action_type===`ignored`).map(e=>e.opportunity_id)}catch(e){console.error(`Failed to load company opportunity actions:`,e),R.opportunityActions=[],R.saved=[],R.ignored=[]}}async function Cc(t,n){if(!y||!R.companyId){(n===`saved`||n===`watched`)&&(R.saved=Array.from(new Set([...R.saved,t])),R.ignored=R.ignored.filter(e=>e!==t)),n===`ignored`&&(R.ignored=Array.from(new Set([...R.ignored,t])),R.saved=R.saved.filter(e=>e!==t)),os(e.saved,R.saved),os(e.ignored,R.ignored);return}let{error:r}=await y.from(`company_opportunity_actions`).upsert({company_id:R.companyId,opportunity_id:t,action_type:n,updated_at:new Date().toISOString()},{onConflict:`company_id,opportunity_id`});if(r)throw r;await Sc()}async function wc(t){if(!y||!R.companyId){R.saved=R.saved.filter(e=>e!==t),R.ignored=R.ignored.filter(e=>e!==t),os(e.saved,R.saved),os(e.ignored,R.ignored);return}let{error:n}=await y.from(`company_opportunity_actions`).delete().eq(`company_id`,R.companyId).eq(`opportunity_id`,t);if(n)throw n;await Sc()}async function Tc(e){let t=`Opportunity saved`;try{R.saved.includes(e)?(await wc(e),t=`Removed from saved`):await Cc(e,`saved`),q(t,`success`),Z()}catch(e){console.error(`Failed to update saved opportunity:`,e),q(`Could not update saved opportunity`,`error`)}}async function Ec(e){try{await Cc(e,`ignored`),R.selectedOpportunityId===e&&(R.selectedOpportunityId=null),q(`Opportunity hidden`,`success`),Z()}catch(e){console.error(`Failed to ignore opportunity:`,e),q(`Could not hide opportunity`,`error`)}}async function Dc(e){try{await wc(e),Z()}catch(e){console.error(`Failed to unignore opportunity:`,e),q(`Could not restore opportunity`,`error`)}}function Oc(e){R.selectedOpportunityId=e,document.body.classList.add(`modal-open`),Z()}function kc(){Ac(),Z()}function Ac(){R.selectedOpportunityId=null,document.body.classList.remove(`modal-open`)}function jc(){if(!R.selectedOpportunityId){document.body.classList.remove(`modal-open`);return}if(!fc(R.selectedOpportunityId)){R.selectedOpportunityId=null,document.body.classList.remove(`modal-open`);return}document.body.classList.add(`modal-open`)}function Mc(e){if(!e)return{label:$(Yr),className:`deadline danger`};let t=j(e);return t===999?{label:$(Yr),className:`deadline danger`}:{label:L(`daysLeft`,{count:t}),className:t<=14?`deadline danger`:`deadline`}}function Nc(e){let t=String(e||``).trim().match(/^(\d{4}-\d{2}-\d{2})T(\d{2}):(\d{2})/);return t?`${mf(t[1])} kl. ${t[2]}:${t[3]}`:``}function Pc(e){return e?Ar(e):$(Yr)}function Fc(e){return e?.deadlineAt?Nc(e.deadlineAt):e?.deadline?mf(e.deadline):$(Ic(e))}function Ic(e){if(Va(e)){let t=Ha(e);return[`tender_awarded`,`awarded`,`already_tendered`,`announced`].includes(t)?`Tender appears already announced/awarded — verify source article.`:t===`upcoming_tender`?`Formal tender deadline not found yet — monitor source article.`:Xr}return String(e?.rawPayload?.deadline_warning||``).trim()||Yr}function Lc(e){if(!e?.deadline)return{label:$(Ic(e)),className:`deadline danger`};let t=Nc(e.deadlineAt);return t?{label:t,className:j(e.deadline)<=14?`deadline danger`:`deadline`}:Mc(e.deadline)}function Rc(e){return e?Ir(e,`ISK`):R.language===`is`?`Ekki gefið upp`:`Value unknown`}function zc(){return[...new Set(R.opportunities.map(e=>e.category))].sort()}function Bc(){return[...new Set(R.opportunities.map(e=>e.location))].sort()}function Vc(){return[...new Set(R.opportunities.map(e=>e.type))].sort()}function Hc(e){return e===`Strong match`?`badge strong`:e===`Good match`?`badge good`:e===`Possible match`?`badge possible`:`badge weak`}function Z(){let e=document.getElementById(`app`),t=ri(R.route),n=``;if(n=R.isBooting||!R.authLoaded||!R.profileLoaded||!R.adminLoaded?qc():t===`/`?gu():t===`/login`?ul():t===`/signup`?vl():t===`/forgot-password`?dl():t===`/reset-password`?fl():t===`/accept-invite`?pl():t===`/onboarding`?_u():t===`/dashboard`?R.user?Nu():Oo():t===`/report`?R.user?Xd():Oo():t===`/pricing`?tp():t===`/trial`?np():t===`/privacy`?Qc():t===`/terms`?$c():t===`/data-sources`?el():t===`/cookies`?tl():t===`/security`?nl():t===`/contact`?rl():t===`/settings`?R.user?rp():Oo():t===`/admin`?R.user?R.isAdmin?$u():ko():Oo():gu(),e.innerHTML=n,R.selectedOpportunityId){let t=fc(R.selectedOpportunityId);t?(document.body.classList.add(`modal-open`),e.insertAdjacentHTML(`beforeend`,Qu(t))):jc()}else jc()}function Uc(e){if(!e||!document.body.contains(e)){Z();return}let t=window.scrollX,n=window.scrollY,r=Gc(e),i=typeof e.selectionStart==`number`?e.selectionStart:null,a=typeof e.selectionEnd==`number`?e.selectionEnd:null;Z(),requestAnimationFrame(()=>{if(window.scrollTo(t,n),!r)return;let e=document.querySelector(r);e&&(e.focus({preventScroll:!0}),i!==null&&a!==null&&typeof e.setSelectionRange==`function`&&[`text`,`search`,`email`,`url`,`tel`,`password`,``].includes(e.type||``)&&e.setSelectionRange(i,a))})}function Wc(){requestAnimationFrame(()=>{document.querySelector(`.admin-tabs button.is-active`)?.scrollIntoView?.({block:`nearest`,inline:`nearest`})})}function Gc(e){return e?.dataset?e.dataset.adminFilter?`[data-admin-filter="${Kc(e.dataset.adminFilter)}"]`:e.dataset.adminCompanyFilter?`[data-admin-company-filter="${Kc(e.dataset.adminCompanyFilter)}"]`:``:``}function Kc(e){return window.CSS?.escape?window.CSS.escape(String(e)):String(e).replace(/["\\]/g,`\\$&`)}function qc(){return Q(`
    <div class="app-loader">
      <div class="loader-mark" aria-label="${I(L(`loadingLabel`))}">
        <span></span>
      </div>
    </div>
  `)}function Q(e){let t=!!R.user,n=!!R.profile,r=Jc(t,n),i=ol(t,n),a=[`app-main`,t?`is-authenticated`:`is-public`,`route-${String(R.route||`/`).replace(/^\/+/,``).replace(/[^a-z0-9]+/gi,`-`)||`home`}`].join(` `);return`
    <header class="site-header ${R.isMobileMenuOpen?`is-menu-open`:``} ${R.isMobileMenuClosing?`is-menu-closing`:``}">
      <div class="header-top">
        <button class="brand" data-action="go" data-href="/">
          <img class="brand-logo" src="/logo.png" alt="VerkRadar" />
        </button>
        <div class="mobile-header-actions">
          <button class="language-toggle mobile-header-language-toggle" type="button" data-action="toggle-language" aria-label="Switch language">
            <span class="${R.language===`is`?`active`:``}">IS</span>
            <span class="${R.language===`en`?`active`:``}">EN</span>
          </button>
          <button
            class="menu-toggle"
            type="button"
            data-action="toggle-mobile-menu"
            aria-label="${R.isMobileMenuOpen?L(`closeMenu`):L(`openMenu`)}"
            aria-expanded="${R.isMobileMenuOpen?`true`:`false`}"
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
          ${r.map(([e,t])=>t.startsWith(`#`)?`<button data-action="scroll-to" data-target="${t.slice(1)}">${e}</button>`:`<button data-action="go" data-href="${t}" ${R.route===t?`class="active"`:``}>${e}</button>`).join(``)}
        </nav>
        <div class="header-actions">
          <button class="language-toggle" type="button" data-action="toggle-language" aria-label="Switch language">
            <span class="${R.language===`is`?`active`:``}">IS</span>
            <span class="${R.language===`en`?`active`:``}">EN</span>
          </button>
          ${t?``:`<button class="btn btn-secondary header-login-btn btn-login" data-action="go" data-href="/login">${L(`login`)}</button>`}
          ${i?`<button class="btn btn-primary" data-action="go" data-href="${i.href}">${i.label}</button>`:``}
          ${t&&!R.isMobileMenuOpen?sl():``}
        </div>
      </div>
      ${il(r,i,t)}
    </header>
    <main class="${a}">${e}</main>
    ${Yc()}
    ${R.toast?`
      <div class="toast toast-${R.toast.type} toast-${R.toast.placement} ${R.toast.isClosing?`is-closing`:``}" role="${R.toast.type===`error`?`alert`:`status`}" aria-live="${R.toast.type===`error`?`assertive`:`polite`}">
        <span class="toast-dot"></span>
        <span>${I(R.toast.message)}</span>
        <button class="toast-close" type="button" data-action="close-toast" aria-label="Close notification">×</button>
      </div>
    `:``}
  `}function Jc(e=!!R.user,t=!!R.profile){let n=e?t?[[L(`navDashboard`),`/dashboard`],[L(`navReport`),`/report`],[L(`navSettings`),`/settings`]]:[[L(`setupCompany`),`/onboarding`],[L(`navSettings`),`/settings`]]:[[L(`navHowItWorks`),`#how-it-works`],[L(`navSampleReport`),`#sample-report`],[L(`navPricing`),`/pricing`]];return e&&R.isAdmin&&n.push([`Admin`,`/admin`]),n}function Yc(){let e=[[L(`privacyPolicy`),`/privacy`],[L(`termsOfService`),`/terms`],[L(`dataSources`),`/data-sources`],[L(`security`),`/security`],[L(`contact`),`/contact`]];return`
    <footer class="site-footer">
      <div>
        <strong>VerkRadar</strong>
        <p>${I(L(`footerText`))}</p>
      </div>
      <nav aria-label="Legal and trust pages">
        ${e.map(([e,t])=>`<button type="button" data-action="go" data-href="${t}">${e}</button>`).join(``)}
      </nav>
    </footer>
  `}function Xc(e){return te(e,R.language)}function Zc(e){let t=Xc(e);return Q(an({language:R.language,escapeHtml:I,eyebrow:t.eyebrow,title:t.title,intro:t.intro,sections:t.sections}))}function Qc(){return Zc(`privacy`)}function $c(){return Zc(`terms`)}function el(){return Zc(`data`)}function tl(){return Qc()}function nl(){return Zc(`security`)}function rl(){return Q(on({escapeHtml:I,submitted:R.contactRequestSubmitted,error:R.contactRequestError,submitting:R.contactRequestSubmitting}))}function il(e,t,n){return`
    <nav class="mobile-menu-panel" id="mobile-menu" data-action="close-mobile-menu">
      <div class="mobile-menu-scroll">
      <div class="mobile-menu-links">
        ${e.map(([e,t])=>t.startsWith(`#`)?`<button type="button" data-action="mobile-scroll-to" data-target="${t.slice(1)}">${e}</button>`:`<button type="button" data-action="mobile-nav" data-href="${t}">${e}</button>`).join(``)}
      </div>
      ${al(t,n)}
      </div>
    </nav>
  `}function al(e,t){if(!t)return`
      <div class="mobile-account-section">
        ${e?`<button class="btn btn-primary mobile-cta" type="button" data-action="mobile-nav" data-href="${e.href}">${e.label}</button>`:``}
        <button class="btn btn-secondary" type="button" data-action="mobile-nav" data-href="/login">${L(`login`)}</button>
      </div>
    `;let n=R.profile?.companyName||L(`noCompanyProfile`),r=R.user?.email||``;return`
    <div class="mobile-account-section">
      <div class="mobile-account-header">
        <span class="profile-avatar">${I(cl(n,r))}</span>
        <div>
          <strong>${I(n)}</strong>
          <small>${I(r)}</small>
        </div>
      </div>
      <div class="mobile-account-actions">
        ${R.profile?`<button type="button" data-action="mobile-nav" data-href="/dashboard">${L(`navDashboard`)}</button>
             <button type="button" data-action="mobile-nav" data-href="/settings">${L(`navSettings`)}</button>`:`<button type="button" data-action="mobile-nav" data-href="/onboarding">${L(`setupCompany`)}</button>
             <button type="button" data-action="mobile-nav" data-href="/settings">${L(`navSettings`)}</button>`}
        <button type="button" class="mobile-logout" data-action="logout">${L(`logout`)}</button>
      </div>
    </div>
  `}function ol(e,t){return e?t?null:{href:`/onboarding`,label:L(`createProfile`)}:{href:`/trial`,label:L(`getStarted`)}}function sl(){let e=R.profile?.companyName||L(`noCompanyProfile`),t=R.user?.email||``,n=cl(e,t);return`
    <div class="profile-menu">
      <button type="button" class="profile-pill" data-action="toggle-profile-menu" aria-haspopup="menu" aria-expanded="${R.profileMenuOpen?`true`:`false`}">
        <span class="profile-avatar">${I(n)}</span>
        <span class="profile-name">${I(e)}</span>
        <span class="profile-chevron" aria-hidden="true"></span>
      </button>

      ${R.profileMenuOpen&&!R.isMobileMenuOpen&&!Ai()?`
        <div class="profile-dropdown" role="menu">
          <div class="profile-dropdown-header">
            <strong>${I(e)}</strong>
            <small>${I(t)}</small>
          </div>
          <div class="profile-dropdown-divider"></div>
          ${R.profile?`
            <button type="button" data-action="go" data-href="/dashboard" role="menuitem">${L(`navDashboard`)}</button>
            <button type="button" data-action="go" data-href="/settings" role="menuitem">${L(`navSettings`)}</button>
            ${R.isAdmin?`<button type="button" data-action="go" data-href="/admin" role="menuitem">Admin</button>`:``}
          `:`
            <button type="button" data-action="go" data-href="/onboarding" role="menuitem">${L(`createProfile`)}</button>
            ${R.isAdmin?`<button type="button" data-action="go" data-href="/admin" role="menuitem">Admin</button>`:``}
          `}
          <div class="profile-dropdown-divider"></div>
          <button type="button" class="danger" data-action="logout" role="menuitem">${L(`logout`)}</button>
        </div>
      `:``}
    </div>
  `}function cl(e,t){return(e&&![`No company profile`,L(`noCompanyProfile`)].includes(e)?e:t||`VR`).split(/[^a-zA-Z0-9áéíóúýþæöðÁÉÍÓÚÝÞÆÖÐ]+/).filter(Boolean).slice(0,2).map(e=>e[0]).join(``).toUpperCase()||`VR`}function ll(e,t){return Q(`
    <section class="empty-state">
      <h1>${I(e)}</h1>
      <p>${I(t)}</p>
      <button class="btn btn-primary" data-action="go" data-href="/onboarding">${I(L(`createProfile`))}</button>
    </section>
  `)}function ul(){return R.user?ll(R.language===`is`?`Þú ert þegar skráð(ur) inn`:`Already logged in`,R.language===`is`?`Opnaðu mælaborðið eða breyttu fyrirtækjaprófílnum.`:`Open your dashboard or edit your company profile.`):Q(zt({t:L,escapeHtml:I,authForm:R.authForm,authSubmitting:R.authSubmitting,authMessage:R.authMessage,signupHref:R.pendingInviteToken?_i(`/signup`):`/trial`,signupLabel:R.pendingInviteToken?L(`createAccount`):L(`createFreeDemoProfile`),forgotPasswordHref:_i(`/forgot-password`)}))}function dl(){return R.user?ll(R.language===`is`?`Þú ert þegar skráð(ur) inn`:`Already logged in`,R.language===`is`?`Opnaðu mælaborðið eða breyttu fyrirtækjaprófílnum.`:`Open your dashboard or edit your company profile.`):Q(Bt({t:L,escapeHtml:I,authForm:R.authForm,authSubmitting:R.authSubmitting,authMessage:R.authMessage}))}function fl(){return Q(Vt({t:L,escapeHtml:I,authForm:R.authForm,authSubmitting:R.authSubmitting,authMessage:R.authMessage}))}function pl(){let e=w(R.route),t=e||(R.invitePreviewErrorToken===e?``:R.pendingInviteToken);return t&&t!==R.pendingInviteToken&&R.invitePreviewErrorToken!==t&&(R.pendingInviteToken=_e(t)),Q(Ft({escapeHtml:I,invite:R.invitePreview,loading:R.invitePreviewLoading,error:R.invitePreviewError,debugInfo:R.invitePreviewDebug,showDebug:ce(),user:R.user,accepting:R.inviteAccepting,signupHref:_i(`/signup`),loginHref:_i(`/login`),language:R.language}))}async function ml(){let e=w(R.route)||R.pendingInviteToken||he();if(!(!e||R.invitePreviewLoading)&&!(R.invitePreview?.token===e||R.invitePreviewErrorToken===e)){R.pendingInviteToken=_e(e),R.invitePreviewLoading=!0,R.invitePreviewError=null,await B({preview_request_sent:!0}),Z();try{let t=await be(e);if(await B({...t.__debug||{},...t.diagnostics||{}}),t.status&&t.status!==`valid`){let e=Error(`Invite is not valid.`);throw e.details=t,e}R.invitePreview={...t,token:e},R.authForm.email=t.invited_email||t.email||R.authForm.email}catch(t){console.error(`Failed to preview company invite:`,t),t?.details?.diagnostics&&console.warn(`Invite preview diagnostics:`,t.details.diagnostics);let n={...t?.details?.__debug||{},...t?.details?.diagnostics||{}};R.invitePreview=null,await B(n);let r=n.invalid_reason||t?.details?.status||t?.details?.code;mi(r)&&(ve(),R.pendingInviteToken=``),R.invitePreviewErrorToken=e,R.invitePreviewError=gl(r)}finally{R.invitePreviewLoading=!1,Z()}}}async function hl(){let e=w(R.route),t=he(),n=e||R.pendingInviteToken||t,r=ge(R.route);if(n){if(!R.user){V(_i(`/login`));return}R.inviteAccepting=!0,R.invitePreviewError=null,await B({accept_request_sent:!0,token_source:r}),Z();try{let e=await xe(n);await B({...e.__debug||{},...e.diagnostics||{},token_source:r}),ve(),R.pendingInviteToken=``,R.invitePreview=null,R.invitePreviewError=null,await B({membership_refresh_attempted:!0}),await Po({overwriteDraft:!0}),await B({membership_refresh_succeeded:!!R.companyId,final_route:`/dashboard`}),V(`/dashboard`)}catch(e){console.error(`Failed to accept company invite:`,e);let t=e?.details?.invited_email||R.invitePreview?.invited_email||R.invitePreview?.email||``;await B({...e?.details?.__debug||{},...e?.details?.diagnostics||{},token_source:r,user_email:R.user?.email||``,invited_email:t,accept_error_reason:e?.details?.code||e?.details?.diagnostics?.accept_error_reason||errorMessage(e)}),console.warn(`Invite accept diagnostics:`,R.invitePreviewDebug),R.invitePreviewError=_l(e,t)}finally{R.inviteAccepting=!1,Z()}}}function gl(e){let t=String(e||``).toLowerCase();return t===`expired`?R.language===`is`?`Aðgangsboðið er útrunnið.`:`This invite has expired.`:t===`revoked`?R.language===`is`?`Aðgangsboðið hefur verið afturkallað.`:`This invite has been revoked.`:t===`already_accepted`?R.language===`is`?`Aðgangsboðið hefur þegar verið samþykkt. Skráðu þig inn með rétta netfanginu.`:`This invite has already been accepted. Log in with the correct email address.`:t===`no_hash_match`||t===`invite_invalid`?R.language===`is`?`Aðgangsboðið fannst ekki.`:`The invite was not found.`:t===`query_error`?R.language===`is`?`Villa kom upp við að staðfesta aðgangsboðið. Reyndu aftur eða hafðu samband.`:`There was a problem validating the invite. Try again or contact support.`:R.language===`is`?`Aðgangsboðið fannst ekki, er útrunnið eða hefur verið afturkallað.`:`The invite was not found, has expired, or has been revoked.`}function _l(e,t=``){let n=String(e?.details?.code||``).toLowerCase(),r=String(e?.details?.diagnostics?.invalid_reason||e?.details?.diagnostics?.accept_error_reason||``).toLowerCase(),i=n||r;return i===`no_session`?R.language===`is`?`Bíð eftir innskráningu til að virkja aðganginn. Ef þú varst að staðfesta netfangið skaltu skrá þig inn og opna boðið aftur.`:`Waiting for login to activate the invite. If you just confirmed your email, log in and open the invite again.`:(i===`email_mismatch`||n===`email_mismatch`)&&t?R.language===`is`?`Þetta boð var sent á ${t}. Skráðu þig inn með því netfangi.`:`This invite was sent to ${t}. Log in with that email address.`:r===`expired`?R.language===`is`?`Aðgangsboðið er útrunnið.`:`This invite has expired.`:r===`revoked`?R.language===`is`?`Aðgangsboðið hefur verið afturkallað.`:`This invite has been revoked.`:n===`invite_already_accepted`||r===`already_accepted`?R.language===`is`?`Aðgangsboðið hefur þegar verið samþykkt.`:`This invite has already been accepted.`:K(e)}function vl(){if(R.user){let e=Mi();return setTimeout(()=>V(e),0),Q(`
      <section class="empty-state">
        <h1>${I(L(`alreadyLoggedInTitle`))}</h1>
        <p>${I(L(`alreadyLoggedInText`))}</p>
      </section>
    `)}return R.pendingInviteToken||w(R.route)?Q(Ht({t:L,escapeHtml:I,authForm:R.authForm,authSubmitting:R.authSubmitting,authMessage:R.authMessage,loginHref:_i(`/login`),inviteEmail:R.invitePreview?.invited_email||R.invitePreview?.email||``,isInviteSignup:!!(R.pendingInviteToken&&(R.invitePreview?.invited_email||R.invitePreview?.email))})):Q(Ut({t:L,escapeHtml:I,trialHref:`/trial`}))}function yl(){if(!R.importLoading&&!R.importStatus)return``;if(R.importLoading)return`<section class="import-panel"><strong>Importing TED notices...</strong><p>Fetching recent TED notices and refreshing matches.</p></section>`;let e=R.importStatus||{},t=Array.isArray(e.errors)?e.errors:[],n=R.importedTedOpportunities||[];return`
    <section class="import-panel">
      ${R.importStatus?`
        <div class="import-stats">
          <span><strong>${Number(e.fetched||0)}</strong> fetched</span>
          <span><strong>${Number(e.inserted||0)}</strong> inserted</span>
          <span><strong>${Number(e.updated||0)}</strong> updated</span>
          <span><strong>${Number(e.skipped||0)}</strong> skipped</span>
          <span><strong>${Number(e.matched||0)}</strong> matches</span>
          <span><strong>${Number(e.reports_generated||0)}</strong> reports</span>
        </div>
        ${t.length?`<ul class="risk-list">${t.map(e=>`<li>${I(e)}</li>`).join(``)}</ul>`:`<p>TED import completed.</p>`}
        ${t.length?``:`
          <div class="import-result-head">
            <h3>Newest imported TED opportunities</h3>
            <button class="btn btn-secondary" type="button" data-action="go" data-href="/dashboard">View imported opportunities on dashboard</button>
          </div>
          ${n.length?`
            <div class="imported-opportunities">
              ${n.map(xl).join(``)}
            </div>
          `:`<div class="empty-card">No imported TED opportunities were returned by the latest-results query.</div>`}
        `}
      `:``}
    </section>
  `}function bl(){if(!R.connectorImportLoading&&!R.connectorTestingSourceId&&!R.connectorImportStatus)return``;if(R.connectorImportLoading||R.connectorTestingSourceId)return`<section class="import-panel"><strong>Running automatic source imports...</strong><p>Fetching enabled source connectors in a limited batch. Refresh matches separately after imports finish.</p></section>`;let e=R.connectorImportStatus||{},t=Array.isArray(e.errors)?e.errors:[],n=Array.isArray(e.failedSources)?e.failedSources:[],r=Array.isArray(e.timedOutSources)?e.timedOutSources:[],i=t.length||n.length||r.length,a=Number.isFinite(Number(e.sources_processed))?`<p>${Number(e.sources_processed||0)} source${Number(e.sources_processed||0)===1?``:`s`} processed${Number(e.sources_remaining||0)?` · ${Number(e.sources_remaining||0)} remaining for next run`:``}.</p>`:``;return`
    <section class="import-panel">
      <div class="import-stats">
        <span><strong>${Number(e.fetched||0)}</strong> fetched</span>
        <span><strong>${Number(e.inserted||0)}</strong> inserted</span>
        <span><strong>${Number(e.updated||0)}</strong> updated</span>
        <span><strong>${Number(e.skipped||0)}</strong> skipped</span>
        <span><strong>${Number(e.matched||0)}</strong> matches</span>
        <span><strong>${Number(e.reports_generated||0)}</strong> reports</span>
      </div>
      ${e.message?`<p>${I(e.message)}</p>`:a}
      ${e.matching_skipped?`<p>Matching was skipped for this batch to stay within Edge Function CPU limits. Refresh company matches from Admin after imports finish.</p>`:``}
      ${e.reports_skipped?`<p>Report generation was skipped for this batch.</p>`:``}
      ${n.length?`
        <div class="import-failure-list">
          <h3>${n.length} source${n.length===1?``:`s`} failed</h3>
          ${n.map(e=>`
            <div class="import-failure-row">
              <strong>${I(e.source||`Unknown source`)}</strong>
              <p>${I(e.message||e.error||`Unknown source import error`)}</p>
              ${e.endpoint_url?`<small>${I(e.endpoint_url)}</small>`:``}
            </div>
          `).join(``)}
        </div>
      `:``}
      ${r.length?`
        <div class="import-failure-list">
          <h3>${r.length} source${r.length===1?``:`s`} timed out or were skipped</h3>
          ${r.map(e=>`
            <div class="import-failure-row">
              <strong>${I(e.source||`Unknown source`)}</strong>
              <p>${I(e.message||e.reason||`Skipped because the source import was close to the runtime limit`)}</p>
              ${e.endpoint_url?`<small>${I(e.endpoint_url)}</small>`:``}
            </div>
          `).join(``)}
        </div>
      `:``}
      ${t.length?`<ul class="risk-list">${t.map(e=>`<li>${I(e)}</li>`).join(``)}</ul>`:``}
      ${i?`<p>Automatic source import completed with source-level failures. Successful sources were still imported.</p>`:`<p>Automatic source import completed.</p>`}
    </section>
  `}function xl(e){let t=e.url&&e.url!==`#`,n=R.adminUpdatingId===e.id,r=R.adminDeletingId===e.id;return`
    <div class="imported-opportunity-row">
      <div class="imported-opportunity-main">
        <h4>${I(e.title)}</h4>
        <span class="source-pill language-pill">Original language</span>
        <p>${I(Vf(e))}</p>
      </div>
      <dl>
        <div>
          <dt>Country / location</dt>
          <dd>${I([e.countryCode,e.location].filter(Boolean).join(` / `)||`Unknown`)}</dd>
        </div>
        <div>
          <dt>Deadline</dt>
          <dd>${I(Ar(e.deadline))}</dd>
        </div>
        <div>
          <dt>URL</dt>
          <dd>${t?`<a href="${I(e.url)}" target="_blank" rel="noreferrer">Open TED</a>`:`No URL`}</dd>
        </div>
        <div>
          <dt>Status</dt>
          <dd>${I(e.status||`Unknown`)}</dd>
        </div>
        <div>
          <dt>Imported source</dt>
          <dd>${I(e.source||`Unknown`)}</dd>
        </div>
        <div>
          <dt>External ID</dt>
          <dd>${I(e.externalId||`Unknown`)}</dd>
        </div>
      </dl>
      <div class="imported-opportunity-actions">
        <button class="btn btn-secondary" type="button" data-action="hide-imported-opportunity" data-id="${I(e.id)}" ${n||e.status===`hidden`?`disabled`:``}>
          ${n?`Updating...`:`Hide`}
        </button>
        <button class="btn btn-secondary" type="button" data-action="mark-imported-relevant" data-id="${I(e.id)}" ${n||e.status===`open`?`disabled`:``}>
          ${n?`Updating...`:`Mark relevant`}
        </button>
        <button class="btn btn-ghost" type="button" data-action="delete-opportunity" data-id="${I(e.id)}" ${r?`disabled`:``}>
          ${r?`Deleting...`:`Delete`}
        </button>
      </div>
    </div>
  `}function Sl(){return(R.importRuns||[])[0]||null}function Cl(e){let t=String(e||``).toLowerCase();return[`success`,`completed`,`complete`,`connected`].includes(t)?`is-success`:[`running`,`started`,`pending`,`planned`].includes(t)?`is-running`:[`error`,`failed`,`failure`].includes(t)?`is-error`:``}function wl(){let e=Sl();return R.importRunsLoading&&!e?`
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
        <span class="status-pill ${Cl(e.status)}">${I(e.status||`unknown`)}</span>
      </div>
      <div class="ops-metrics">
        <div><span>Type</span><strong>${I(e.run_type||`ted-import`)}</strong></div>
        <div><span>Mode</span><strong>${I(e.import_mode||`unknown`)}</strong></div>
        <div><span>Fetched</span><strong>${Number(e.fetched||0)}</strong></div>
        <div><span>Inserted</span><strong>${Number(e.inserted||0)}</strong></div>
        <div><span>Updated</span><strong>${Number(e.updated||0)}</strong></div>
        <div><span>Skipped</span><strong>${Number(e.skipped||0)}</strong></div>
        <div><span>Matched</span><strong>${Number(e.matched||0)}</strong></div>
        <div><span>Reports</span><strong>${Number(e.reports_generated||0)}</strong></div>
        <div><span>Started</span><strong>${I(M(e.started_at))}</strong></div>
        <div><span>Finished</span><strong>${I(M(e.finished_at))}</strong></div>
      </div>
      ${e.error?`<div class="admin-message is-error">${I(e.error)}</div>`:``}
      ${Al(e)}
    </section>
  `:`
      <section class="ops-card automation-status-card">
        <div class="card-header">
          <div>
            <h2>Automation status</h2>
            <p>No automation runs yet.</p>
          </div>
        </div>
        ${R.importRunsError?`<div class="admin-message is-error">${I(R.importRunsError)}</div>`:``}
      </section>
    `}function Tl(){let e=window.VERKRADAR_SUPABASE_URL||`https://asojxjbsgqbfpbepojzh.supabase.co`,t=String(e).match(/^https:\/\/([^.]+)\.supabase\.co/i);return t?`https://supabase.com/dashboard/project/${t[1]}/functions/import-ted/logs`:``}function El(){let e=Tl();return`
    <section class="ops-card">
      <div class="card-header">
        <div>
          <h2>Automation actions</h2>
          <p>Run the pipeline manually or refresh the operations view.</p>
        </div>
      </div>
      <div class="automation-actions">
        <button class="btn btn-primary" type="button" data-action="import-ted" ${R.importLoading?`disabled`:``}>
          ${R.importLoading?`Running TED import...`:`Run TED import now`}
        </button>
        <button class="btn btn-secondary" type="button" data-action="import-source-connectors" ${R.connectorImportLoading?`disabled`:``}>
          ${R.connectorImportLoading?`Running source imports...`:`Run automatic source imports now`}
        </button>
        <button class="btn btn-secondary" type="button" data-action="refresh-admin-status" ${R.importRunsLoading||R.adminReportsLoading?`disabled`:``}>
          ${R.importRunsLoading||R.adminReportsLoading?`Refreshing...`:`Refresh status`}
        </button>
        ${e?`<a class="btn btn-secondary" href="${I(e)}" target="_blank" rel="noreferrer">View Edge Function logs</a>`:``}
      </div>
      <label class="import-mode-control">
        Import mode
        <select data-import-mode ${R.importLoading?`disabled`:``}>
          <option value="nordic" ${R.tedImportMode===`nordic`?`selected`:``}>Nordic only</option>
          <option value="iceland" ${R.tedImportMode===`iceland`?`selected`:``}>Iceland only</option>
          <option value="eu-broad" ${R.tedImportMode===`eu-broad`?`selected`:``}>EU broad test</option>
        </select>
      </label>
      ${yl()}
      ${bl()}
    </section>
  `}function Dl(){let e=R.importRuns||[];return`
    <section class="ops-card">
      <div class="card-header">
        <div>
          <h2>Latest import runs</h2>
          <p>Last ${e.length||0} recorded automation runs.</p>
        </div>
      </div>
      ${R.importRunsError?`<div class="admin-message is-error">${I(R.importRunsError)}</div>`:``}
      ${R.importRunsLoading&&!e.length?`<div class="empty-card">Loading import runs...</div>`:e.length?`
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
              ${e.map(Ol).join(``)}
            </tbody>
          </table>
        </div>
      `:`<div class="empty-card">No automation runs yet.</div>`}
    </section>
  `}function Ol(e){let t=Al(e,{compact:!0});return`
    <tr>
      <td>${I(M(e.started_at||e.finished_at))}</td>
      <td>${I(e.run_type||`ted-import`)}</td>
      <td><span class="status-pill ${Cl(e.status)}">${I(e.status||`unknown`)}</span></td>
      <td>${Number(e.fetched||0)}</td>
      <td>${Number(e.inserted||0)}</td>
      <td>${Number(e.updated||0)}</td>
      <td>${Number(e.skipped||0)}</td>
      <td>${Number(e.matched||0)}</td>
      <td>${Number(e.reports_generated||0)}</td>
      <td>${e.error?I(e.error):``}</td>
    </tr>
    ${t?`
      <tr class="import-run-debug-row">
        <td colspan="10">${t}</td>
      </tr>
    `:``}
  `}function kl(e){let t=e?.details;if(!t)return{};if(typeof t==`string`)try{return JSON.parse(t)||{}}catch{return{}}return typeof t==`object`?t:{}}function Al(e,t={}){let n=kl(e),r=n.skip_reasons&&typeof n.skip_reasons==`object`?n.skip_reasons:{},i=Array.isArray(n.skipped_samples)?n.skipped_samples:[],a=Array.isArray(n.per_source)?n.per_source:[],o=Object.entries(r).filter(([,e])=>Number(e)>0).sort((e,t)=>Number(t[1])-Number(e[1])).slice(0,5);return!o.length&&!i.length&&!a.length?``:`
    <div class="import-debug ${t.compact?`is-compact`:``}">
      <div class="import-debug-header">
        <strong>Skip diagnostics</strong>
        <span>${Number(e.skipped||0)} skipped · ${Number(n.connectors_checked||a.length||0)} connector${Number(n.connectors_checked||a.length||0)===1?``:`s`}</span>
      </div>
      ${a.length?`
        <div class="import-per-source">
          ${a.slice(0,8).map(e=>`
            <div>
              <strong>${I(e.source_name||`Unknown source`)}</strong>
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
            <span><strong>${Number(t)}</strong> ${I(jl(e))}</span>
          `).join(``)}
        </div>
      `:``}
      ${i.length?`
        <div class="import-skip-samples">
          ${i.slice(0,10).map(e=>`
            <div>
              <strong>${I(e.source_name||e.source||`Unknown source`)}</strong>
              <span>${I(e.title||`Untitled item`)}</span>
              <em>${I(jl(e.reason||`skipped`))}${e.matchedKeyword?`: ${I(e.matchedKeyword)}`:``}${e.final_quality_status?` · ${I(Vu(e.final_quality_status))}`:``}</em>
            </div>
          `).join(``)}
        </div>
      `:``}
    </div>
  `}function jl(e){return{missing_title:`missing title`,missing_url:`missing URL`,duplicate_existing_opportunity:`duplicate existing opportunity`,no_include_keyword_match:`no include keyword match`,matched_exclude_keyword:`matched exclude keyword`,low_quality_needs_review:`low quality needs review`,unsupported_connector:`unsupported connector`,parse_failed:`parse failed`,fetch_failed:`fetch failed`}[e]||String(e||`skipped`).replaceAll(`_`,` `)}function Ml(){let e=R.importedTedOpportunities||[];return`
    <section class="ops-card">
      <div class="card-header">
        <div>
          <h2>Latest TED opportunities</h2>
          <p>Newest imported EU TED rows for review.</p>
        </div>
      </div>
      ${R.importedTedOpportunitiesError?`<div class="admin-message is-error">Ekki tókst að sækja nýjustu TED tækifæri. ${I(R.importedTedOpportunitiesError)}</div>`:``}
      ${R.importedTedOpportunitiesError?``:R.importedTedOpportunitiesLoading&&!e.length?`<div class="empty-card">Loading TED opportunities...</div>`:e.length?`
        <div class="imported-opportunities">
          ${e.map(xl).join(``)}
        </div>
      `:`<div class="empty-card">No TED opportunities loaded yet.</div>`}
    </section>
  `}function Nl(){let e=R.adminReports||[];return`
    <section class="ops-card">
      <div class="card-header">
        <div>
          <h2>Latest reports generated</h2>
          <p>Newest saved weekly report records.</p>
        </div>
      </div>
      ${R.adminReportsError?`<div class="admin-message is-error">Ekki tókst að sækja yfirlit. ${I(R.adminReportsError)}</div>`:``}
      ${R.adminReportsError?``:R.adminReportsLoading&&!e.length?`<div class="empty-card">Loading reports...</div>`:e.length?`
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
              ${e.map(Vl).join(``)}
            </tbody>
          </table>
        </div>
      `:`<div class="empty-card">No generated reports yet.</div>`}
      ${R.selectedAdminReportId?Hl():``}
    </section>
  `}function Pl(e){return{eu_ted:`EU TED`,ted:`EU TED`,api:`EU TED`,utbodsvefur:`Útboðsvefur`,municipal_website:`Municipal websites`,public_institution_page:`Public institution pages`,private_manual:`Private/manual leads`,manual:`Private/manual leads`,tender_portal:`Tender portals`}[e]||e||`Unknown`}function Fl(e){return{ted_api:`TED API`,rss_feed:`RSS feed`,wordpress_rest:`WordPress REST`,official_api:`Official API`,page_monitor_allowed:`Allowed page monitor`,manual_fallback:`Manual fallback`,planned:`Planned`,permission_required:`Permission required`}[e]||e||`Planned`}function Il(e=[]){return e.reduce((e,t)=>{let n=t.raw_payload&&typeof t.raw_payload==`object`?t.raw_payload:{},r=W(n.quality_status||n.qualityStatus,t);return e.active+=1,r===`confirmed_tender`?e.confirmed+=1:r===`early_signal`?e.early+=1:e.needsReview+=1,e},{active:0,confirmed:0,early:0,needsReview:0})}function Ll(e){let t=e.source_status||{},n=e.source_connectors||{},r=String(n.status||t.status||``).toLowerCase(),i=String(n.connector_type||``).toLowerCase();return r.includes(`error`)?{label:`Error`,className:`is-error`,tone:`error`}:r===`permission_required`||i===`permission_required`?{label:`Permission required`,className:`is-permission`,tone:`planned`}:n.enabled&&[`connected`,`success`,`completed`,`complete`].includes(r)||n.enabled&&[`rss_feed`,`wordpress_rest`,`ted_api`].includes(i)?{label:`Connected`,className:`is-success`,tone:`connected`}:r===`planned`||i===`planned`?{label:`Planned`,className:`is-planned`,tone:`planned`}:{label:`Disabled`,className:`is-disabled`,tone:`disabled`}}function Rl(){let e=R.sourceCoverage||[];return`
    <section class="ops-card">
      <div class="card-header">
        <div>
          <h2>Source coverage</h2>
          <p>Connected and planned lead sources for Icelandic opportunity coverage.</p>
        </div>
      </div>
      ${R.sourceCoverageError?`<div class="admin-message is-error">Ekki tókst að sækja heimildayfirlit. ${I(R.sourceCoverageError)}</div>`:``}
      ${R.sourceCoverageError?``:R.sourceCoverageLoading&&!e.length?`<div class="empty-card">Loading source coverage...</div>`:e.length?`
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
              ${e.map(zl).join(``)}
            </tbody>
          </table>
        </div>
      `:`<div class="empty-card">No sources configured yet.</div>`}
    </section>
  `}function zl(e){let t=e.source_status||{},n=e.source_connectors||{},r=Ll(e),i=n.enabled&&[`rss_feed`,`wordpress_rest`].includes(n.connector_type),a=R.connectorTestingSourceId===e.id,o=e.opportunityStats||{active:Number(t.active_opportunities_count||0),confirmed:0,early:0,needsReview:0},s=e.latestOpportunities||[],c=R.expandedSourceId===e.id,l=n.last_error||t.last_error||``;return`
    <tr class="${r.tone===`connected`?`source-row-connected`:`source-row-muted`}">
      <td>
        <strong>${I(e.name||`Unknown source`)}</strong>
        ${n.endpoint_url||e.base_url?`<br><a href="${I(n.endpoint_url||e.base_url)}" target="_blank" rel="noreferrer">${I(n.endpoint_url||e.base_url)}</a>`:``}
      </td>
      <td>${I(Pl(e.source_type))}</td>
      <td>
        <strong>${I(Fl(n.connector_type))}</strong>
        ${n.require_any_keyword===!1?`<br><span>Keyword match optional</span>`:`<br><span>Requires keyword match</span>`}
        ${Array.isArray(n.include_keywords)&&n.include_keywords.length?`<br><span>Includes: ${I(n.include_keywords.slice(0,5).join(`, `))}${n.include_keywords.length>5?`...`:``}</span>`:``}
        ${Array.isArray(n.exclude_keywords)&&n.exclude_keywords.length?`<br><span>Excludes: ${I(n.exclude_keywords.slice(0,5).join(`, `))}${n.exclude_keywords.length>5?`...`:``}</span>`:``}
      </td>
      <td>
        <span class="status-pill ${n.enabled?`is-success`:`is-disabled`}">${n.enabled?`Enabled`:`Disabled`}</span>
      </td>
      <td><span class="status-pill ${r.className}">${I(r.label)}</span></td>
      <td>${I(M(n.last_success_at||t.last_success_at))}</td>
      <td>${l?I(l):`<span class="muted-text">None</span>`}</td>
      <td>${Number(o.active||0)}</td>
      <td>${Number(o.confirmed||0)}</td>
      <td>${Number(o.early||0)}</td>
      <td>${Number(o.needsReview||0)}</td>
      <td>
        <button class="btn btn-secondary btn-small" type="button" data-action="test-source-connector" data-id="${I(e.id)}" ${!i||a||R.connectorImportLoading?`disabled`:``}>
          ${a?`Testing...`:`Test source`}
        </button>
        <button class="btn btn-ghost btn-small" type="button" data-action="toggle-source-items" data-id="${I(e.id)}" ${s.length?``:`disabled`}>
          ${c?`Hide items`:`View latest items`}
        </button>
      </td>
    </tr>
    ${c?Bl(e):``}
  `}function Bl(e){let t=e.latestOpportunities||[];return`
    <tr class="source-items-row">
      <td colspan="12">
        <div class="source-items-panel">
          <div class="source-items-header">
            <strong>Latest active items</strong>
            <span>${t.length} shown</span>
          </div>
          ${t.length?`
            <div class="source-items-list">
              ${t.map(t=>{let n=t.raw_payload&&typeof t.raw_payload==`object`?t.raw_payload:{},r=W(n.quality_status||n.qualityStatus,t);return`
                  <div class="source-item">
                    <div>
                      <strong>${I(t.title||`Untitled opportunity`)}</strong>
                      <span>${I(Bf(`buyer`,Hr(t.buyer,e.name)))} · ${I(Pc(t.deadline))}</span>
                    </div>
                    <span class="quality-badge ${I(r)}">${I(Vu(r))}</span>
                    ${t.url?`<a class="btn btn-ghost btn-small" href="${I(t.url)}" target="_blank" rel="noreferrer">Open</a>`:``}
                  </div>
                `}).join(``)}
            </div>
          `:`<div class="empty-card">No active items for this source.</div>`}
        </div>
      </td>
    </tr>
  `}function Vl(e){let t=e.companies?.company_name||`Unknown company`,n=Array.isArray(e.report_items)?e.report_items.length:0;return`
    <tr>
      <td>${I(af(e,t))}</td>
      <td>${I(t)}</td>
      <td>${I(M(e.created_at))}</td>
      <td>${I(`${Ar(e.period_start)} - ${Ar(e.period_end)}`)}</td>
      <td>${I(e.status||`draft`)}</td>
      <td>${n}</td>
      <td>
        <div class="admin-row-actions">
          <button class="btn btn-secondary btn-small" type="button" data-action="view-admin-report" data-id="${I(e.id)}">${I(R.language===`is`?`Skoða yfirlit`:`View report`)}</button>
          <button class="btn btn-ghost btn-small" type="button" data-action="copy-admin-report" data-id="${I(e.id)}">${I(A(`copyReportEmail`,R.language))}</button>
          <button class="btn btn-ghost btn-small" type="button" data-action="view-admin-report" data-id="${I(e.id)}">${I(R.language===`is`?`Opna fyrir PDF`:`Open for PDF`)}</button>
        </div>
      </td>
    </tr>
  `}function Hl(){let e=(R.adminReports||[]).find(e=>e.id===R.selectedAdminReportId),t=R.selectedAdminReport?.id===R.selectedAdminReportId?R.selectedAdminReport:e;if(!t&&!R.selectedAdminReportLoading&&!R.selectedAdminReportError)return``;if(!t)return`
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
            ${R.selectedAdminReportError?`<div class="admin-message is-error">${I(R.selectedAdminReportError)}</div>`:`<div class="empty-card">Loading saved report items...</div>`}
          </div>
        </div>
      </div>
    `;let n=t.companies?.company_name||`Unknown company`,r=Array.isArray(t.report_items)?t.report_items.length:0,i=af(t,n);return`
    <div class="modal-backdrop">
      <div class="modal admin-report-modal" role="dialog" aria-modal="true">
        <div class="modal-header">
          <div>
            <span class="status-pill is-success">${I(Qd(t.status))}</span>
            <h2>${I(i)}</h2>
            <p>${I(n)} · ${I(pf(t.period_start,t.period_end))} · ${I(M(t.created_at))}</p>
          </div>
          <button type="button" class="icon-btn modal-close-btn" data-action="close-admin-report" aria-label="Close report">×</button>
        </div>
        <div class="modal-body">
          <div class="admin-report-actions">
            <button class="btn btn-primary" type="button" data-action="download-admin-report-pdf" ${R.selectedAdminReportLoading?`disabled`:``}>${I(A(`downloadPdf`,R.language))}</button>
            <button class="btn btn-secondary" type="button" data-action="copy-admin-report" data-id="${I(t.id)}">${I(A(`copyReportEmail`,R.language))}</button>
            <button class="btn btn-secondary" type="button" data-action="mark-admin-report-sent" data-id="${I(t.id)}" ${R.adminReportDeliveryActions[t.id]===`sent`?`disabled`:``}>${I(R.adminReportDeliveryActions[t.id]===`sent`?A(`marking`,R.language):A(`markAsSent`,R.language))}</button>
            <button class="btn btn-ghost" type="button" data-action="close-admin-report">${I(A(`close`,R.language))}</button>
          </div>

          ${R.selectedAdminReportLoading?`<div class="empty-card">Loading saved report items...</div>`:``}
          ${R.selectedAdminReportError?`<div class="admin-message is-error">${I(R.selectedAdminReportError)}</div>`:``}
          ${R.selectedAdminReportLoading?``:Ul(t,r,n)}

          ${!R.selectedAdminReportLoading&&r?ef(t,{companyName:n},{id:`admin-report-preview`,closeButton:!1,includeTextArea:!1}):R.selectedAdminReportLoading?``:`
            <div class="empty-card">${I(R.language===`is`?`Engin virk tækifæri eru í þessu yfirliti.`:`No active eligible opportunities in this report.`)}</div>
          `}

          ${!R.selectedAdminReportLoading&&r?Wl(t):``}
        </div>
      </div>
    </div>
  `}function Ul(e,t,n){let r=e.status===`generated_all_current`?`all_current`:e.status===`generated_new_only`?`new_only`:e.status||`draft`;return`
    <div class="admin-report-meta-strip">
      <span><strong>${I(A(`company`,R.language))}:</strong> ${I(n||`Unknown company`)}</span>
      <span><strong>${I(A(`period`,R.language))}:</strong> ${I(pf(e.period_start,e.period_end))}</span>
      <span><strong>${I(A(`generatedAt`,R.language))}:</strong> ${I(M(e.created_at))}</span>
      <span><strong>${I(A(`mode`,R.language))}:</strong> ${I(A(r===`all_current`?`currentActive`:`newOpportunities`,R.language))}</span>
      <span><strong>${I(A(`items`,R.language))}:</strong> ${Number(t||0)}</span>
    </div>
  `}function Wl(e){let t=(Array.isArray(e.report_items)?[...e.report_items]:[]).sort((e,t)=>Number(e.sort_order||0)-Number(t.sort_order||0));return`
    <section class="admin-report-items">
      <h3>${I(R.language===`is`?`Atriði í yfirliti`:`Report items`)}</h3>
      <div class="admin-report-item-list">
        ${t.map(e=>Gl(e)).join(``)}
      </div>
    </section>
  `}function Gl(e){let t=e.opportunities?ka(e.opportunities):null;if(!t)return`<article class="admin-report-item"><p>${I(R.language===`is`?`Gögn um tækifæri eru ekki lengur aðgengileg.`:`Opportunity data is no longer available.`)}</p></article>`;let n=Fr(t.url),r=Lc(t),i=hr(Array.isArray(e.match_reasons)?e.match_reasons:[],R.language);return`
    <article class="admin-report-item">
      <div class="opportunity-badges">
        <span class="source-pill source-badge">${I(mr({matchScore:Number(e.match_score||0)},R.language))}</span>
        <span class="${Hc(oc(Number(e.match_score||0)))}">${I(`${fr({matchScore:Number(e.match_score||0)},R.language)} ${Number(e.match_score||0)}`)}</span>
      </div>
      <h4>${I(t.title)}</h4>
      <p><strong>${I(R.language===`is`?`Staða`:`Status`)}:</strong> ${I(mr({matchScore:Number(e.match_score||0)},R.language))}</p>
      <p>${I(dr(R.language))}</p>
      <div class="admin-report-meta-grid">
        <span><strong>${I(L(`buyer`))}</strong>${I(Vf(t))}</span>
        <span><strong>${I(L(`source`))}</strong>${I(Bf(`source`,t.source))}</span>
        <span><strong>${I(L(`area`))}</strong>${I(Hf(t))}</span>
        <span><strong>${I(L(`deadline`))}</strong>${I(r.label)}</span>
        <span><strong>${I(L(`estimatedValue`))}</strong>${I(t.estimatedValue?Rc(t.estimatedValue):L(`notListed`))}</span>
        <span><strong>${I(A(`sentStatus`,R.language))}</strong>${I(e.sent_at?`${A(`sentOn`,R.language)} ${M(e.sent_at)}`:A(`notSent`,R.language))}</span>
      </div>
      ${i.length?`<div><strong>${I(A(`reasons`,R.language))}</strong><ul>${i.map(e=>`<li>${I(e)}</li>`).join(``)}</ul></div>`:``}
      <p>${I(t.description||``)}</p>
      ${n?`<a class="btn btn-secondary btn-small" href="${I(n)}" target="_blank" rel="noreferrer">${I(A(`openSource`,R.language))}</a>`:``}
    </article>
  `}async function Kl(e){let t=R.selectedAdminReport?.id===e?R.selectedAdminReport:(R.adminReports||[]).find(t=>t.id===e);if(!t){q(`Report not found`,`error`);return}let n=t.companies?.company_name||`Company`,r=of(t),i=_r({companyName:n,language:R.language,matches:r.map(e=>({...e,buyer:Vf(e),deadline:Fc(e),matchReasons:hr(e.matchReasons,R.language)}))});try{await navigator.clipboard.writeText(i),q(`Report email copied`,`success`)}catch(e){console.error(`Failed to copy admin report:`,e),q(`Could not copy report email`,`error`)}}async function ql(e){let t=R.selectedAdminReport?.id===e?R.selectedAdminReport:(R.adminReports||[]).find(t=>t.id===e);if(!t?.company_id){q(`Report not found`,`error`);return}R.adminReportDeliveryActions[e]=`sent`,Z();try{let n=await Ta(t.company_id,`mark_report_sent`,{reportId:e});await Xi(e),q(`Marked ${Number(n.marked_sent||0)} report item${Number(n.marked_sent||0)===1?``:`s`} as sent`,`success`)}catch(e){console.error(`Failed to mark report as sent:`,e),q(`Could not mark report as sent. ${K(e)}`,`error`)}finally{delete R.adminReportDeliveryActions[e],Z()}}function Jl(){let e=Yl();return tu((R.opportunities||[]).filter(t=>{let n=Bu(t);if(e.tedOnly&&!n||e.manualOnly&&n||!e.showDemoTest&&Ra(t)||!eu(t,e.addedWindow)||e.source!==`all`&&t.source!==e.source||e.status!==`all`&&t.status!==e.status)return!1;let r=ro(t)||t.countryCode||`Unknown`;if(e.country!==`all`&&r!==e.country)return!1;let i=F(e.search);return!(i&&!F(`${t.title} ${t.buyer} ${t.externalId} ${t.location}`).includes(i))}),e.sortBy)}function Yl(){return{source:`all`,missingDeadlineSource:`all`,status:`all`,country:`all`,search:``,debugCompanyId:``,tedOnly:!1,manualOnly:!1,showDemoTest:!1,sortBy:`created_desc`,addedWindow:`all`,...R.adminOpportunityFilters||{}}}function Xl(e){return[`created_desc`,`created_asc`,`deadline_asc`,`deadline_desc`,`updated_desc`].includes(e)?e:`created_desc`}function Zl(e){return[`today`,`3d`,`7d`,`all`].includes(e)?e:`all`}function Ql(){return[[`created_desc`,`Nýjast bætt við`],[`created_asc`,`Elst bætt við`],[`deadline_asc`,`Skilafrestur næst`],[`deadline_desc`,`Skilafrestur lengst frá`],[`updated_desc`,`Nýjast uppfært`]]}function $l(){return[[`today`,`Bætt við í dag`],[`3d`,`Síðustu 3 dagar`],[`7d`,`Síðustu 7 dagar`],[`all`,`Allt`]]}function eu(e,t){let n=Zl(t);if(n===`all`)return!0;let r=iu(e.createdAt);if(!Number.isFinite(r))return!1;let i=new Date;if(n===`today`)return r>=new Date(i.getFullYear(),i.getMonth(),i.getDate()).getTime();let a=n===`3d`?3:7;return r>=i.getTime()-a*24*60*60*1e3}function tu(e,t){let n=Xl(t);return[...e].sort((e,t)=>n===`created_asc`?ru(e.createdAt,t.createdAt,`asc`):n===`deadline_asc`?ru(nu(e),nu(t),`asc`,{nullsLast:!0}):n===`deadline_desc`?ru(nu(e),nu(t),`desc`,{nullsLast:!0}):n===`updated_desc`?ru(e.updatedAt||e.createdAt,t.updatedAt||t.createdAt,`desc`):ru(e.createdAt,t.createdAt,`desc`))}function nu(e){return e.deadlineAt||e.rawPayload?.deadline_at||e.deadline||``}function ru(e,t,n=`desc`,r={}){let i=iu(e),a=iu(t),o=Number.isFinite(i),s=Number.isFinite(a);return!o&&!s?0:o?s?n===`asc`?i-a:a-i:r.nullsLast?-1:n===`asc`?1:-1:r.nullsLast?1:n===`asc`?-1:1}function iu(e){if(!e)return NaN;let t=new Date(e).getTime();if(!Number.isNaN(t))return t;let n=String(e).match(/^(\d{4}-\d{2}-\d{2})$/);return n?new Date(`${n[1]}T00:00:00Z`).getTime():NaN}function au(e,t){return Array.from(new Set(e.map(t).filter(Boolean))).sort((e,t)=>String(e).localeCompare(String(t)))}function ou(e){let t=Yl(),n=au(R.opportunities||[],e=>e.source||`Unknown`),r=au(R.opportunities||[],e=>e.status||`Unknown`),i=au(R.opportunities||[],e=>ro(e)||e.countryCode||`Unknown`),a=R.adminCompanies||[];return`
    <div class="admin-filters">
      <input data-admin-filter="search" value="${I(t.search)}" placeholder="Search title, buyer, external ID..." />
      <select data-admin-filter="source">
        <option value="all">All sources</option>
        ${n.map(e=>`<option value="${I(e)}" ${t.source===e?`selected`:``}>${I(e)}</option>`).join(``)}
      </select>
      <select data-admin-filter="status">
        <option value="all">All statuses</option>
        ${r.map(e=>`<option value="${I(e)}" ${t.status===e?`selected`:``}>${I(e)}</option>`).join(``)}
      </select>
      <select data-admin-filter="country">
        <option value="all">All countries</option>
        ${i.map(e=>`<option value="${I(e)}" ${t.country===e?`selected`:``}>${I(e)}</option>`).join(``)}
      </select>
      <select data-admin-filter="sortBy" aria-label="Röðun">
        ${Ql().map(([e,n])=>`<option value="${I(e)}" ${Xl(t.sortBy)===e?`selected`:``}>${I(n)}</option>`).join(``)}
      </select>
      <select data-admin-filter="addedWindow" aria-label="Bætt við">
        ${$l().map(([e,n])=>`<option value="${I(e)}" ${Zl(t.addedWindow)===e?`selected`:``}>${I(n)}</option>`).join(``)}
      </select>
      <select data-admin-filter="debugCompanyId">
        <option value="">Match debug company...</option>
        ${a.map(e=>`<option value="${I(e.id)}" ${t.debugCompanyId===e.id?`selected`:``}>${I(e.companyName)}</option>`).join(``)}
      </select>
      <label class="checkbox compact"><input type="checkbox" data-admin-filter="tedOnly" ${t.tedOnly?`checked`:``}/><span>TED only</span></label>
      <label class="checkbox compact"><input type="checkbox" data-admin-filter="manualOnly" ${t.manualOnly?`checked`:``}/><span>Manual only</span></label>
      <label class="checkbox compact"><input type="checkbox" data-admin-filter="showDemoTest" ${t.showDemoTest?`checked`:``}/><span>Show demo/test opportunities</span></label>
    </div>
    <p class="admin-filter-count">${e.length} of ${(R.opportunities||[]).length} opportunities shown.</p>
  `}function su(e){return!!(e?.deadline||e?.deadlineAt||e?.rawPayload?.deadline_at||e?.rawPayload?.deadlineAt)}function cu(){let e=Yl().missingDeadlineSource||`all`;return(R.opportunities||[]).filter(e=>!su(e)).filter(e=>!Ra(e)).filter(t=>e===`all`||t.source===e).sort((e,t)=>String(e.source||``).localeCompare(String(t.source||``))||String(e.title||``).localeCompare(String(t.title||``)))}function lu(){let e=[`Ríkiskaup / island.is procurement`,`Vegagerðin`,`Akranes útboð`,`Garðabær Municipality`],t=au((R.opportunities||[]).filter(e=>!su(e)),e=>e.source||`Unknown`);return jr([...e,...t])}function uu(e){let t=e?.rawPayload||{},n=String(e?.url||t.source_url||t.link||``).trim();if(!n)return{label:`No source URL`,isSafe:!1};let r;try{r=new URL(n)}catch{return{label:`Invalid URL`,isSafe:!1}}if(![`http:`,`https:`].includes(r.protocol))return{label:`Unsupported protocol: ${r.protocol}`,isSafe:!1};let i=r.hostname.replace(/^www\./i,``).toLowerCase(),a=[`utbodsvefur.is`,`vegagerdin.is`,`akranes.is`,`gardabaer.is`,`borgarbyggd.is`,`arborg.is`,`faxafloahafnir.is`,`reykjavik.is`,`hafnarfjordur.is`,`reykjanesbaer.is`,`mulathing.is`,`akureyri.is`].some(e=>i===e||i.endsWith(`.${e}`));return{label:a?`Yes (${i})`:`Unknown host (${i})`,isSafe:a}}function du(e){let t=e?.rawPayload||{},n=t.deadline_debug&&typeof t.deadline_debug==`object`?t.deadline_debug:{},r=[t.deadline_debug_reason,t.deadline_reenrichment_error,n.source?`debug source: ${n.source}`:``,n.extractedText?`extracted: ${n.extractedText}`:``,n.parserVersion?`parser: ${n.parserVersion}`:``,t.stale_reason?`stale: ${t.stale_reason}`:``].filter(Boolean);return r.length?r.join(` · `):`Still missing after import/re-enrichment, or no debug reason stored yet.`}function fu(){let e=cu(),t=pu(e),n=e.reduce((e,t)=>{let n=t.source||`Unknown`;return e[n]||(e[n]=[]),e[n].push(t),e},{}),r=Object.keys(n).sort((e,t)=>e.localeCompare(t)),i=Yl().missingDeadlineSource||`all`,a=lu();return`
    <section class="ops-card admin-debug-card">
      <div class="card-header">
        <div>
          <h2>Missing deadline debug</h2>
          <p>${e.length} opportunities missing deadlines${i===`all`?``:` for ${I(i)}`}. Grouped by source.</p>
          <p class="admin-filter-count">
            total=${t.total} · alert_eligible=false=${t.alertFalse} · alert_eligible not false=${t.alertNotFalse} · confirmed_tender=${t.confirmedTender} · needs_review=${t.needsReview}
          </p>
        </div>
        <label class="admin-inline-control">
          <span>Source</span>
          <select data-admin-filter="missingDeadlineSource">
            <option value="all">All sources</option>
            ${a.map(e=>`<option value="${I(e)}" ${i===e?`selected`:``}>${I(e)}</option>`).join(``)}
          </select>
        </label>
      </div>
      ${r.length?r.map(e=>mu(e,n[e])).join(``):`<div class="empty-card">No missing-deadline opportunities for this filter.</div>`}
    </section>
  `}function pu(e){return(e||[]).reduce((e,t)=>{let n=t?.rawPayload||{},r=String(n.alert_eligible??``).toLowerCase(),i=String(n.quality_status||``).toLowerCase();return e.total+=1,r===`false`?e.alertFalse+=1:e.alertNotFalse+=1,i===`confirmed_tender`&&(e.confirmedTender+=1),i===`needs_review`&&(e.needsReview+=1),e},{total:0,alertFalse:0,alertNotFalse:0,confirmedTender:0,needsReview:0})}function mu(e,t){return`
    <div class="missing-deadline-source-group">
      <h3>${I(e)} <span class="muted">(${t.length})</span></h3>
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
            ${t.map(hu).join(``)}
          </tbody>
        </table>
      </div>
    </div>
  `}function hu(e){let t=uu(e),n=Fr(e.url||e.rawPayload?.source_url||``),r=e.rawPayload?.safety_status||e.rawPayload?.quality_status||Uu(e),i=e.rawPayload?.alert_eligible,a=i===!0?`true`:`false`,o=String(i??``).toLowerCase()===`false`?``:`<br><span class="status-pill is-warning">Missing deadline alert flag needs fix</span>`,s=du(e);return`
    <tr>
      <td><code>${I(String(e.id||``))}</code><br><span>${I(e.externalId||`No external ID`)}</span></td>
      <td><strong>${I(e.title||`Untitled`)}</strong><br><span>${I(e.source||`Unknown source`)}</span></td>
      <td>${n?`<a href="${I(n)}" target="_blank" rel="noreferrer" title="${I(n)}">${I(n)}</a>`:`No source URL`}</td>
      <td>${e.publishedDate?I(M(e.publishedDate)):`Not listed`}</td>
      <td>${I(r||`unknown`)}<br><span>alert_eligible=${I(a)}</span>${o}</td>
      <td><span class="status-pill ${t.isSafe?`is-success`:`is-running`}">${I(t.label)}</span></td>
      <td title="${I(s)}">${I(s)}</td>
    </tr>
  `}function gu(){return Q(dn({t:L,escapeHtml:I,language:R.language,trialHref:Pi()}))}function _u(){return R.user?(J(),Q(`
    <section class="page-head pricing-head">
      <p class="eyebrow">${I(L(`onboarding`))}</p>
      <h1>${I(L(`onboardingTitle`))}</h1>
      <p>${I(L(`onboardingText`))}</p>
    </section>

    ${vu()}
  `)):Oo()}function vu(){return J(),An({t:L,escapeHtml:I,capitalize:Nr,arrayFieldText:ss,formatCustomerLocation:Wf,getFilterOptions:yu,getProfileSuggestions:us,renderCustomDropdown:Cu,renderSuggestionChips:hs,profileDraft:R.profileDraft||ni(),accountEmail:R.user?.email||``,hasProfile:!!R.profile,isSavingProfile:R.isSavingProfile,profileSaved:R.profileSaved,profileSaveMessage:R.profileSaveMessage,profileSaveError:R.profileSaveError})}function yu(e){return e===`industry`?[`Construction`,`Electrical`,`Cleaning`,`IT / Web / Software`,`Architecture / Engineering`,`Consulting`,`Transport`,`Equipment / Machinery`,`Landscaping`,`Security`,`Other`].map(e=>({value:e,label:e})):e===`label`?[{value:`strong`,label:R.language===`is`?`Aðeins sterkar`:`Strong only`},{value:`recommended`,label:R.language===`is`?`Mælt með`:`Recommended`},{value:`all`,label:R.language===`is`?`Allar samsvaranir`:`All matches`},{value:`all_opportunities`,label:R.language===`is`?`Öll tækifæri`:`All opportunities`},{value:`needs_review`,label:L(`needsReview`)},{value:`possible`,label:R.language===`is`?`Mögulegar samsvaranir`:`Possible matches`},{value:`Good match`,label:L(`goodMatch`)},{value:`Weak match`,label:L(`weakMatch`)}]:e===`category`?[{value:`all`,label:R.language===`is`?`Allir flokkar`:`All categories`},...zc().map(e=>({value:e,label:e}))]:e===`location`?[{value:`all`,label:R.language===`is`?`Öll svæði`:`All locations`},...Bc().map(e=>({value:e,label:Wf(e)}))]:e===`type`?[{value:`all`,label:R.language===`is`?`Allar tegundir`:`All types`},...Vc().map(e=>({value:e,label:Nr(e.replace(`-`,` `))}))]:e===`selectedPlan`?[`basic`,`pro`,`priority`].map(e=>({value:e,label:L(`plan_${e}`)})):[]}function bu(e){return e===`industry`?R.profileDraft?.industry||R.profile?.industry||``:e===`selectedPlan`?z(R.profileDraft?.selectedPlan||R.profile?.selectedPlan)||`basic`:R.filters[e]}function xu(e){let t=yu(e),n=bu(e),r=t.findIndex(e=>e.value===n);return Math.max(0,r)}function Su(e){return Cu({key:e,value:R.filters[e],options:yu(e)})}function Cu({key:e,value:t,options:n,profileField:r=``}){let i=R.dropdown.openKey===e,a=t,o=Math.max(0,n.findIndex(e=>e.value===a)),s=i?R.dropdown.focusedIndex:o,c=`filter-${e}-trigger`,l=`filter-${e}-list`,u=n.find(e=>e.value===a)?.label||(e===`industry`?L(`selectIndustry`):n[0]?.label)||``;return`
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
        <span>${I(u)}</span>
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
                data-value="${I(t.value)}"
                ${r?`data-profile-field="${I(r)}"`:``}
                role="option"
                aria-selected="${i}"
              >
                <span>${I(t.label)}</span>
                ${i?`<span class="custom-select-check" aria-hidden="true">✓</span>`:``}
              </button>
            `}).join(``)}
        </div>
      `:``}
    </div>
  `}function wu(){R.dropdown.openKey=null,R.dropdown.focusedIndex=0,Z()}function Tu(e,t){e.classList.toggle(`is-open`,t),e.querySelector(`.custom-select-trigger`)?.setAttribute(`aria-expanded`,String(t));let n=e.querySelector(`.custom-select-menu`);n&&(n.hidden=!t)}function Eu(e){Tu(e,!1)}function Du(e){return Array.from(e.querySelectorAll(`.custom-select-option`))}function Ou(e,t=1){let n=Du(e);if(!n.length)return;let r=n.findIndex(e=>e.getAttribute(`aria-selected`)===`true`);n[r>=0?r:t>0?0:n.length-1].focus()}function ku(e,t){let n=t.dataset.value||``,r=e.parentElement?.querySelector(`input[name="subject"]`);r&&(r.value=n),cn(e.querySelector(`.custom-select-trigger`));let i=e.querySelector(`[data-contact-subject-label]`);i&&(i.textContent=t.textContent.trim()),Du(e).forEach(e=>{let n=e===t;e.classList.toggle(`is-selected`,n),e.setAttribute(`aria-selected`,String(n));let r=e.querySelector(`.custom-select-check`);r&&(r.textContent=n?`✓`:``)}),Eu(e),e.querySelector(`.custom-select-trigger`)?.focus()}function Au(e,t){let n=t.classList.contains(`is-open`),r=Du(t);if(e.key===`Escape`&&n)return e.preventDefault(),Eu(t),t.querySelector(`.custom-select-trigger`)?.focus(),!0;if((e.key===`ArrowDown`||e.key===`ArrowUp`)&&!n)return e.preventDefault(),Tu(t,!0),Ou(t,e.key===`ArrowDown`?1:-1),!0;if(n&&(e.key===`Enter`||e.key===` `)){let n=r.find(e=>e===document.activeElement);return n?(e.preventDefault(),ku(t,n),!0):!1}if(!n||![`ArrowDown`,`ArrowUp`].includes(e.key))return!1;e.preventDefault();let i=r.indexOf(document.activeElement),a=e.key===`ArrowDown`?1:-1;return r[(Math.max(0,i)+a+r.length)%r.length]?.focus(),!0}function ju(){requestAnimationFrame(()=>{document.querySelector(`.custom-select-option.is-focused`)?.focus()})}function Mu(e){requestAnimationFrame(()=>{document.querySelector(`[data-action="toggle-dropdown"][data-key="${e}"]`)?.focus()})}function Nu(){if(!R.user)return Oo();if(!R.profile)return ll(L(`setupCompanyFirst`),L(`dashboardNeedsProfile`));let e=pc(),t=cc(),n=mc(t),r=lc(),i=n.filter(e=>e.matchScore>=85).length,a=n.filter(e=>j(e.deadline)<=14&&j(e.deadline)>=0).length,o=R.saved.length,s=n.filter(e=>e.matchScore>=65).reduce((e,t)=>e+(t.estimatedValue||0),0),c=n.filter(gc).length,l=xc({visibleCount:e.length,storedMatchCount:t.length,filteredStoredCount:n.length,availableCount:r.length,recommendedCount:c,strongCount:i,companyName:R.profile.companyName}),u=R.lastMatchedAt?L(`matchesLastRefreshed`,{time:M(R.lastMatchedAt)}):L(`matchesAutoRefresh`);return Q(en({profile:R.profile,matches:e,stats:{strong:i,closingSoon:a,savedCount:o,totalValue:Rc(s)},filters:R.filters,filterSummary:l,matchStatus:R.matchStatus,opportunityLoadError:R.opportunityLoadError,isAdmin:R.isAdmin,matchingLoading:R.matchingLoading,labels:{dashboard:L(`dashboard`),welcomeCompany:L(`welcomeCompany`,{company:R.profile.companyName}),dashboardIntro:L(`dashboardIntro`,{refresh:u}),refreshing:L(`refreshing`),refreshMatches:L(`refreshMatches`),viewWeeklyReport:L(`viewWeeklyReport`),strongMatches:L(`strongMatches`),closingSoon:L(`closingSoon`),savedLabel:L(`savedLabel`),totalPotentialValue:L(`totalPotentialValue`),searchOpportunities:L(`searchOpportunities`),savedOnly:L(`savedOnly`)},renderFilterDropdown:Su,renderOpportunityCard:zu,renderEmptyState:()=>Ru(R.profile,R.filters.label,{availableCount:r.length,storedMatchCount:t.length,filteredStoredCount:n.length,recommendedCount:c,strongCount:i}),escapeHtml:I}))}function Pu(e){let t=[],n=Array.isArray(e?.locations)?e.locations:[],r=Array.isArray(e?.services)?e.services:[],i=Array.isArray(e?.includeKeywords)?e.includeKeywords:[],a=Array.isArray(e?.excludeKeywords)?e.excludeKeywords:[],o=n.some(e=>F(e)===`all iceland`),s=a.some(e=>{let t=F(e);return t.includes(`reykjavik`)||t.includes(`capital area`)});return o||t.push(R.language===`is`?`Bætið við Allt landið til að ná landsdekkandi útboðum og rammasamningum.`:`Add All Iceland to catch national tenders and framework agreements.`),e?.nationalProjects||t.push(R.language===`is`?`Kveikið á landsdekkandi verkefnum svo slík tækifæri birtist sem mögulegar samsvaranir.`:`Enable national projects so All Iceland opportunities appear as possible matches.`),r.length<5&&t.push(R.language===`is`?`Bætið við nákvæmari þjónustu svo VerkRadar þekki betur útboð sem passa við ykkar vinnu.`:`Add more specific services so VerkRadar can recognize notices that fit your work.`),s&&t.push(R.language===`is`?`Yfirfarið útilokunarorð fyrir Reykjavík eða höfuðborgarsvæðið. Þau geta falið útboð sem fyrirtæki utan svæðisins geta samt boðið í.`:`Review exclude keywords for Reykjavík or Capital Area. They may hide tenders that companies outside Reykjavík can still bid on.`),i.length<4&&t.push(R.language===`is`?`Bætið við fleiri leitarorðum, sérstaklega íslenskum hugtökum sem kaupendur nota í útboðum.`:`Add more include keywords, including Icelandic terms buyers may use in notices.`),t.length||t.push(R.language===`is`?`Yfirfarið þjónustu, svæði og leitarorð svo þau lýsi verkefnunum sem þið viljið raunverulega bjóða í.`:`Review services, locations and keywords to make sure they describe the work you actually want to bid on.`),t}function Fu(e,t={}){return R.language===`is`?e===`all`?{eyebrow:`Engar samsvaranir`,title:`Engin tækifæri fundust fyrir þennan prófíl enn.`,body:`Víkkið þjónustu, svæði eða leitarorð til að finna fleiri tækifæri.`}:e===`all_opportunities`?{eyebrow:`Engin tækifæri`,title:`Engin tiltæk tækifæri enn.`,body:`Flytjið inn fleiri heimildir eða skoðið heimildayfirlit í Admin.`}:e===`needs_review`?{eyebrow:`Ekkert þarf staðfestingu`,title:`Engin tækifæri þarfnast staðfestingar núna.`,body:`Tækifæri úr breiðum heimildum sem þarf að yfirfara birtast hér.`}:e===`strong`?{eyebrow:`Engar sterkar samsvaranir`,title:`Engar sterkar samsvaranir enn.`,body:`Þið gætuð samt átt gagnlegar mögulegar samsvaranir. Prófið Mælt með eða Allar samsvaranir.`}:e===`possible`||e===`Possible match`||e===`Weak match`?{eyebrow:`Engar mögulegar samsvaranir`,title:`Engar mögulegar samsvaranir enn.`,body:`Prófið að víkka þjónustu, svæði eða leitarorð til að finna óvissari tækifæri.`}:{eyebrow:`Engar ráðlagðar samsvaranir`,title:Iu(t),body:Lu(t)}:e===`all`?{eyebrow:`No matches`,title:`No opportunities found for this profile yet.`,body:`Broaden your services, locations or keywords to find more opportunities.`}:e===`all_opportunities`?{eyebrow:`No opportunities`,title:`No available opportunities yet.`,body:`Import more sources or check Admin source coverage.`}:e===`needs_review`?{eyebrow:`No needs-review items`,title:`No needs-review opportunities right now.`,body:`Broad-feed opportunities that need manual verification will appear here.`}:e===`strong`?{eyebrow:`No strong matches`,title:`No strong matches yet.`,body:`You may still have useful possible matches. Switch to Recommended or All matches to review them.`}:e===`possible`||e===`Possible match`||e===`Weak match`?{eyebrow:`No possible matches`,title:`No possible matches yet.`,body:`Try broadening your services, locations or keywords to find lower-confidence opportunities.`}:{eyebrow:`No recommended matches`,title:Iu(t),body:Lu(t)}}function Iu(e={}){let t=e.companyName||(R.language===`is`?`þennan prófíl`:`this profile`);return Number(e.strongCount||0)>0?R.language===`is`?`${e.strongCount} sterkar samsvaranir eru faldar af síum.`:`${e.strongCount} strong ${Number(e.strongCount)===1?`match is`:`matches are`} hidden by filters.`:R.language===`is`?`Engar ráðlagðar samsvaranir fyrir ${t} enn.`:`No recommended matches for ${t} yet.`}function Lu(e={}){let t=Number(e.strongCount||0),n=Number(e.filteredStoredCount||0),r=Number(e.availableCount||0);return t>0?R.language===`is`?`Hreinsið leit/flokka/svæðissíur eða slökkvið á Aðeins vistað til að sjá sterku samsvaranirnar.`:`Clear search/category/location filters or turn off Saved only to see the strong matches.`:n>0?R.language===`is`?`${n} tækifæri eru til, en falin af gæðasíum. Notið Allar samsvaranir eða Þarfnast staðfestingar til að skoða þau.`:`${n} ${n===1?`opportunity is`:`opportunities are`} available, but hidden from Recommended by quality checks. Use All matches or Needs review to inspect them.`:R.language===`is`?`${r} tækifæri eru til í kerfinu, en ekkert passar nógu sterkt við þennan prófíl.`:`${r} opportunities are available in the system, but none match this profile strongly enough.`}function Ru(e,t=R.filters.label,n={}){let r=Pu(e);return $t({copy:Fu(t,{...n,companyName:e?.companyName}),suggestions:r,labels:{improveProfile:L(`improveProfile`),includeNationalOpportunities:L(`includeNationalOpportunities`),showAllStoredMatches:L(`showAllStoredMatches`),inspectAllOpportunities:L(`inspectAllOpportunities`)},escapeHtml:I})}function zu(e){return tn({opp:e,saved:R.saved.includes(e.id),deadline:Lc(e),sourceBadgeHtml:`<span class="source-pill source-badge">${I(e.source)}</span>`,qualityBadgeHtml:Wu(e),safetyBadgeHtml:Gu(e),extractedBadgeHtml:Yu(e),originalLanguageBadgeHtml:Bu(e)?`<span class="source-pill source-badge muted-badge">${I(L(`originalLanguage`))}</span>`:``,matchBadgeClass:Hc(e.matchLabel),matchLabel:zf(e.matchLabel),buyer:Vf(e),location:Hf(e),value:Rc(e.estimatedValue),reasons:e.matchReasons.slice(0,3).map(Gf),labels:{details:L(`details`),saved:L(`saved`),save:L(`save`),ignore:L(`ignore`)},escapeHtml:I})}function Bu(e){return/ted|tenders electronic daily/i.test(String(e.source||``))}function Vu(e){let t=W(e);return{confirmed_tender:`Confirmed tender`,early_signal:`Early signal`,needs_review:`Needs review`}[t]||Nr(t.replace(/_/g,` `))}function Hu(e){return{confirmed_tender:`Confirmed tender`,early_opportunity:`Early opportunity`,market_signal:`Market signal`,news_context:`News context`,not_opportunity:`Not an opportunity`}[za(e)||e]||Nr(String(e||`market_signal`).replace(/_/g,` `))}function Uu(e){let t=Ba(e);return t===`news_context`||t===`not_opportunity`||t===`market_signal`?Hu(t):Va(e)?Xu(Ha(e)):Vu(W(e.qualityStatus,e))}function Wu(e){return`<span class="source-pill source-badge quality-badge ${I(Ba(e)||W(e.qualityStatus,e))}">${I(Rf(Uu(e)))}</span>`}function Gu(e){if(!e||!e.safetyStatus)return``;let t=dc(e);return`<span class="source-pill source-badge safety-badge ${I(t)}">${I(Ku(t))}</span>`}function Ku(e){let t=String(e||``).toLowerCase();return(R.language===`is`?{auto_approved:`Sjálfkrafa samþykkt`,needs_review:`Þarfnast yfirferðar`,hidden:`Falið`}:{auto_approved:`Auto-approved`,needs_review:`Needs review`,hidden:`Hidden`})[t]||Nr(t.replace(/_/g,` `))}function qu(e){return e?R.language===`is`?`Hæft í tilkynningu`:`Alert eligible`:R.language===`is`?`Ekki hæft í tilkynningu`:`Not alert eligible`}function Ju(e){let t=String(e||``);return R.language===`is`?{"Valid future deadline found":`Gildur framtíðarskilafrestur fannst`,"Recent high-intent procurement signal":`Nýlegt merki frá sterkri útboðsheimild`,"Strong service/work-type fit":`Sterk samsvörun við þjónustu eða verkflokk`,"No reliable deadline was found":`Áreiðanlegur skilafrestur fannst ekki`,"Buyer is missing or generic":`Kaupandi vantar eða er of almennur`,"Match depends on broad or low-confidence terms":`Samsvörun byggir á breiðum eða óvissum orðum`,"Possible service mismatch for this company profile":`Mögulegt ósamræmi við þjónustu fyrirtækisins`,"Mentions design, consulting, supervision, or project management terms":`Inniheldur orð tengd hönnun, ráðgjöf, eftirliti eða verkefnastjórnun`,"Tender appears already awarded or already tendered":`Útboð virðist þegar auglýst eða útboði lokið`,"Stale or expired opportunity signal":`Gamalt eða útrunnið tækifæri`,"Current opportunity is plausible but needs review before customer alerts":`Tækifærið gæti átt við en þarf yfirferð áður en það fer í tilkynningu`,"Admin override includes this opportunity in customer reports":`Admin hefur samþykkt birtingu í viðskiptavinayfirlitum`,"Excluded by customer eligibility, duplicate, stale, hidden, demo, or expired filters":`Falið vegna reglna um birtingu, afrit, aldur, prófunargögn eða útrunnið tækifæri`}[t]||$(t):t}function Yu(e){if(e?.rawPayload?.extraction_method!==`vegagerdin_article_project_parser`)return``;let t=e.rawPayload?.region?` · ${e.rawPayload.region}`:``;return`<span class="source-pill source-badge muted-badge">${I(L(`extractedProject`))}${I(t)}</span>`}function Xu(e){return{tender_awarded:L(`tenderAwarded`),awarded:L(`tenderAwarded`),already_tendered:L(`tenderAlreadyAnnounced`),announced:L(`tenderAlreadyAnnounced`),upcoming_tender:L(`upcomingTender`),project_signal:L(`projectSignal`),open_or_published:L(`tenderAlreadyAnnounced`),planned_tender:L(`upcomingTender`),unclear:L(`projectSignal`)}[String(e||``)]||Nr(String(e||``).replace(/_/g,` `))}function Zu(e){let t=Ba(e);return t===`news_context`||t===`not_opportunity`?`<div class="note-panel quality-warning">${I(R.language===`is`?`Þetta lítur út eins og frétta- eða umferðarefni, ekki tækifæri fyrir viðskiptavin.`:`This looks like news or traffic context, not a customer-facing opportunity.`)}</div>`:W(e.qualityStatus,e)===`needs_review`?Va(e)?`<div class="note-panel quality-warning">${I(R.language===`is`?`Útdregin verkefnavísbending — staðfestið útboðstímasetningu í heimildargrein.`:`Extracted project signal — verify tender timing in the source article.`)}</div>`:`<div class="note-panel quality-warning">${I(R.language===`is`?`Innflutt úr breiðum straumi — staðfestið á upprunasíðu.`:`Imported from broad feed — verify source page.`)}</div>`:``}function Qu(e){let t=R.saved.includes(e.id),n=Lc(e),r=Array.isArray(e.requirements)?e.requirements:[],i=Array.isArray(e.matchReasons)?e.matchReasons:[],a=Array.isArray(e.risks)?e.risks:[],o=Array.isArray(e.nextSteps)?e.nextSteps:[],s=[Va(e)?`<p><strong>${I(L(`extraction`))}:</strong> ${I(R.language===`is`?`Útdregið úr grein Vegagerðarinnar`:`Extracted from Vegagerðin article`)}</p>`:``,e.rawPayload?.parent_article_title?`<p><strong>${I(L(`sourceArticle`))}:</strong> ${I(e.rawPayload.parent_article_title)}</p>`:``,e.rawPayload?.parent_url?`<p><strong>${I(L(`parentArticle`))}:</strong> <a href="${I(e.rawPayload.parent_url)}" target="_blank" rel="noreferrer">${I(L(`openSourceArticle`))}</a></p>`:``,e.rawPayload?.region?`<p><strong>${I(L(`extractedRegion`))}:</strong> ${I(e.rawPayload.region)}</p>`:``,e.rawPayload?.project_number?`<p><strong>${I(L(`projectNumber`))}:</strong> ${I(e.rawPayload.project_number)}</p>`:``,Va(e)?`<p><strong>${I(L(`tenderState`))}:</strong> ${I(Xu(Ha(e)))}</p>`:``].join(``);return nn({opp:e,saved:t,deadline:n,requirements:r,matchReasons:i.length?i.map(Gf):[],risks:a.length?a.map($):[L(`noMajorRisks`)],safetyReasons:[...Array.isArray(e.safetyReasons)?e.safetyReasons:[],...a.length?a.map($):[L(`noMajorRisks`)]].map(Ju),nextSteps:o.map(Kf),matchBadgeClass:Hc(e.matchLabel),matchLabel:zf(e.matchLabel),qualityBadgeHtml:Wu(e),safetyBadgeHtml:Gu(e),extractedBadgeHtml:Yu(e),qualityWarningHtml:Zu(e),buyerSummary:Uf(`buyer`,e.buyer),location:Hf(e),value:e.estimatedValue?Rc(e.estimatedValue):L(`notListed`),sourceUrl:e.url,extractedDetails:s,qualityLabel:Rf(Uu(e)),safetyStatusLine:e.safetyStatus?`<p><strong>${I(R.language===`is`?`Öryggisflokkun`:`Safety status`)}:</strong> ${I(Ku(e.safetyStatus))} · ${I(qu(e.alertEligible))}</p>`:``,category:Uf(`category`,e.category),type:Uf(`type`,e.type),publishedDate:e.publishedDate,cpvCode:e.cpvCode,labels:{description:L(`description`),noDescription:L(`noDescription`),requirements:L(`requirements`),noSpecificRequirements:L(`noSpecificRequirements`),matchReasons:L(`matchReasons`),noMatchReasons:L(`noMatchReasons`),opportunityInfo:L(`opportunityInfo`),source:L(`source`),sourceValue:Uf(`source`,e.source),quality:L(`quality`),category:L(`category`),type:L(`type`),deadline:L(`deadline`),deadlineLabel:$(n.label),published:L(`published`),cpv:L(`cpv`),risksToCheck:L(`risksToCheck`),recommendedNextSteps:L(`recommendedNextSteps`),openSourceAndConfirm:L(`openSourceAndConfirm`),removeFromSaved:L(`removeFromSaved`),saveOpportunity:L(`saveOpportunity`),openSource:L(`openSource`),markNotRelevant:L(`markNotRelevant`)},escapeHtml:I})}function $u(){if(!R.user)return Oo();if(!R.isAdmin)return ko();let e=Jl(),t=R.adminCompanies.find(e=>e.id===R.selectedAdminCompanyId);return Q(`
    <section class="page-head">
      <p class="eyebrow">Admin</p>
      <h1>Operations dashboard</h1>
      <p>Admin tools for monitoring imports, reviewing customers, managing sources and handling manual entries.</p>
    </section>

    ${R.adminMessage?`
      <div class="admin-message admin-global-message ${R.adminMessage.type===`error`?`is-error`:`is-success`}" role="status" aria-live="polite">
        ${I(R.adminMessage.text)}
      </div>
    `:``}

    ${R.opportunityLoadError?`
      <div class="note-panel">
        ${I(R.opportunityLoadError)}
      </div>
    `:``}

    ${ed()}
    ${td(e)}
    ${t?Ld(t):``}
  `)}function ed(){return`
    <div class="admin-tabs" role="tablist" aria-label="Admin sections">
      ${[[`overview`,`Overview`],[`companies`,`Companies`],[`review`,`Review Queue`],[`trial-requests`,`Trial Requests`],[`contact-requests`,`Contact Requests`],[`sources`,`Sources/imports`],[`opportunities`,`Opportunities`],[`reports`,`Reports`]].map(([e,t])=>`
        <button type="button" class="${R.adminActiveTab===e?`is-active`:``}" data-action="admin-tab" data-tab="${e}">
          ${I(t)}
        </button>
      `).join(``)}
    </div>
  `}function td(e){return R.adminActiveTab===`companies`?Nd():R.adminActiveTab===`review`?rd():R.adminActiveTab===`trial-requests`?sd():R.adminActiveTab===`contact-requests`?id():R.adminActiveTab===`sources`?`
      ${wl()}
      ${El()}
      ${Rl()}
      ${Dl()}
      ${Ml()}
    `:R.adminActiveTab===`opportunities`?Id(e):R.adminActiveTab===`reports`?Nl():`
    ${nd()}
    ${ut({escapeHtml:I,isRunning:!!R.adminDailyPipelineLoading,result:R.adminDailyPipelineResult||null})}
    ${Wt({escapeHtml:I,usageSummary:R.adminAiUsageSummary||null,lastResult:R.adminAutomaticAiReviewResult||null,isRunning:!!R.adminAutomaticAiReviewLoading,formatAiUsageCost:Ye})}
    ${wl()}
    ${Nd(!0)}
  `}function nd(){let e=R.adminCompanies||[],t=R.opportunities||[],n=Sl(),r=e.filter(e=>e.profileStatus===`Complete`).length,i=Math.max(0,e.length-r);return`
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
        <div><span>Confirmed tenders</span><strong>${t.filter(e=>W(e.qualityStatus,e)===`confirmed_tender`).length}</strong></div>
        <div><span>Early signals</span><strong>${t.filter(e=>W(e.qualityStatus,e)===`early_signal`).length}</strong></div>
        <div><span>Needs review</span><strong>${t.filter(e=>W(e.qualityStatus,e)===`needs_review`).length}</strong></div>
        <div><span>Latest import status</span><strong>${I(n?.status||`No runs`)}</strong></div>
      </div>
    </section>
  `}function rd(){let e=R.adminReviewMatches||[],t=vd();return`
    <section class="ops-card">
      <div class="card-header">
        <div>
          <h2>${I(t.title)}</h2>
          <p>${R.adminReviewLoading?I(t.loading):I(t.count(e.length))}</p>
        </div>
        <button class="btn btn-ghost btn-small" type="button" data-action="refresh-admin-status">Refresh</button>
      </div>
      ${R.adminReviewError?`<div class="admin-message is-error">Ekki tókst að sækja yfirferðarröð. ${I(R.adminReviewError)}</div>`:``}
      ${R.adminReviewError?``:R.adminReviewLoading&&!e.length?`<div class="empty-card">${I(t.loading)}</div>`:e.length?`
        <div class="admin-review-list">
          ${e.map(Od).join(``)}
        </div>
      `:`<div class="empty-card">${I(t.empty)}</div>`}
    </section>
  `}function id(){let e=R.adminContactRequests||[],t=R.adminContactRequestsLoading?`Loading contact requests...`:`${e.length} message${e.length===1?``:`s`} received.`,n=R.adminContactRequestsLoading&&!e.length?`<div class="empty-card">Loading contact requests...</div>`:e.length?`
        <div class="ops-table-wrap">
          <table class="ops-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Company</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Subject</th>
                <th>Message</th>
                <th>Status</th>
                <th>Created at</th>
              </tr>
            </thead>
            <tbody>
              ${e.map(ad).join(``)}
            </tbody>
          </table>
        </div>
      `:`<div class="empty-card">No contact requests yet.</div>`;return`
    <section class="ops-card">
      <div class="card-header">
        <div>
          <h2>Contact Requests</h2>
          <p>${I(t)}</p>
        </div>
        <button class="btn btn-ghost btn-small" type="button" data-action="refresh-admin-status">Refresh</button>
      </div>
      ${R.adminContactRequestsError?`<div class="admin-message is-error">${I(R.adminContactRequestsError)}</div>`:``}
      ${n}
    </section>
  `}function ad(e){return`
    <tr>
      <td><strong>${I(e.name||`—`)}</strong></td>
      <td>${I(e.company_name||`—`)}</td>
      <td>${I(e.email||`—`)}</td>
      <td>${I(e.phone||`—`)}</td>
      <td>${I(e.subject||`—`)}</td>
      <td>${I(e.message||`—`)}</td>
      <td>${od(e.status)}</td>
      <td>${I(e.created_at?M(e.created_at):`—`)}</td>
    </tr>
  `}function od(e){let t=String(e||`new`).toLowerCase();return`<span class="status-pill is-running">${I(t===`new`?`Ný`:t)}</span>`}function sd(){let e=R.adminTrialRequests||[],t=_d();return`
    <section class="ops-card">
      <div class="card-header">
        <div>
          <h2>Trial Requests</h2>
          <p>${R.adminTrialRequestsLoading?`Loading trial requests...`:`${e.length} request${e.length===1?``:`s`} received.`}</p>
        </div>
        <button class="btn btn-ghost btn-small" type="button" data-action="refresh-admin-status">Refresh</button>
      </div>
      ${R.adminTrialRequestsError?`<div class="admin-message is-error">${I(R.adminTrialRequestsError)}</div>`:``}
      ${R.adminTrialRequestsLoading&&!e.length?`<div class="empty-card">Loading trial requests...</div>`:e.length?`
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
              ${e.map(ud).join(``)}
            </tbody>
          </table>
        </div>
      `:`<div class="empty-card">No trial requests yet.</div>`}
    </section>
    ${t?dd(t):``}
    ${R.adminTrialDeleteConfirmId?ld():``}
  `}function cd(e){let t=R.language===`en`,n=!!(e?.converted_company_id||e?.status===`converted`);return{title:t?`Delete trial request?`:`Eyða prufubeiðni?`,body:t?`This permanently deletes the trial request. This action cannot be undone.`:`Þessi aðgerð eyðir prufubeiðninni varanlega. Ekki er hægt að afturkalla aðgerðina.`,convertedNote:n?t?`The converted company and its data will remain unchanged.`:`Fyrirtækið sem var stofnað úr beiðninni verður áfram óbreytt.`:``,cancel:t?`Cancel`:`Hætta við`,confirm:t?`Delete`:`Eyða`,deleting:t?`Deleting...`:`Eyði...`,deleteAction:t?`Delete`:`Eyða`}}function ld(){let e=(R.adminTrialRequests||[]).find(e=>e.id===R.adminTrialDeleteConfirmId);if(!e)return``;let t=cd(e),n=R.adminTrialRequestActions?.[e.id]===`delete`;return`
    <div class="modal-backdrop admin-confirm-backdrop" role="presentation">
      <section class="admin-confirm-dialog" role="dialog" aria-modal="true" aria-labelledby="admin-trial-delete-title">
        <div>
          <p class="eyebrow">Trial Requests</p>
          <h2 id="admin-trial-delete-title">${I(t.title)}</h2>
          <p>${I(t.body)}</p>
          ${t.convertedNote?`<p class="admin-confirm-note">${I(t.convertedNote)}</p>`:``}
        </div>
        <div class="admin-confirm-actions">
          <button class="btn btn-ghost" type="button" data-action="cancel-admin-trial-delete" ${n?`disabled`:``}>${I(t.cancel)}</button>
          <button class="btn btn-danger" type="button" data-action="confirm-admin-trial-delete" data-id="${I(e.id)}" ${n?`disabled`:``}>${I(n?t.deleting:t.confirm)}</button>
        </div>
      </section>
    </div>
  `}function ud(e){let t=R.selectedAdminTrialRequestId===e.id,n=R.adminTrialRequestActions?.[e.id],r=cd(e);return`
    <tr class="${t?`is-selected`:``}">
      <td><strong>${I(e.company_name||`—`)}</strong></td>
      <td>${I(e.contact_name||`—`)}</td>
      <td>${I(e.email||`—`)}</td>
      <td>${I(e.phone||`—`)}</td>
      <td>${I(e.services||`—`)}</td>
      <td>${I(e.locations||`—`)}</td>
      <td>${md(e.status)}</td>
      <td>${I(e.created_at?M(e.created_at):`—`)}</td>
      <td>
        <div class="admin-row-actions">
          <button class="btn btn-secondary btn-small" type="button" data-action="view-admin-trial-request" data-id="${I(e.id)}" ${n===`delete`?`disabled`:``}>Opna</button>
          <button class="btn btn-danger btn-small" type="button" data-action="delete-admin-trial-request" data-id="${I(e.id)}" ${n?`disabled`:``}>${I(n===`delete`?r.deleting:r.deleteAction)}</button>
        </div>
      </td>
    </tr>
  `}function dd(e){let t=R.adminTrialRequestActions?.[e.id],n=e.status===`converted`||!!e.converted_company_id;return`
    <section class="ops-card admin-trial-detail-card">
      <div class="card-header">
        <div>
          <h2>${I(e.company_name||`Trial request`)}</h2>
          <p>${md(e.status)} · ${I(e.created_at?M(e.created_at):`—`)}</p>
        </div>
        <button class="btn btn-ghost btn-small" type="button" data-action="close-admin-trial-request">Close</button>
      </div>
      ${R.adminTrialCompanyError?`<div class="admin-message is-error">${I(R.adminTrialCompanyError)}</div>`:``}
      ${R.adminTrialCompanyMessage?`<div class="admin-message is-success">${I(R.adminTrialCompanyMessage)}</div>`:``}
      <div class="admin-trial-detail-grid">
        ${pd(`Fyrirtæki`,e.company_name)}
        ${pd(`Tengiliður`,e.contact_name)}
        ${pd(`Netfang`,e.email)}
        ${pd(`Sími`,e.phone)}
        ${pd(`Þjónusta`,e.services,!0)}
        ${pd(`Svæði`,e.locations,!0)}
        ${pd(`Athugasemd`,e.message,!0)}
        ${pd(`Staða`,Gn(e.status))}
        ${pd(`Tilkynning`,hd(e),!0)}
        ${pd(`Stofnað`,e.created_at?M(e.created_at):``)}
      </div>
      <div class="admin-trial-actions">
        <button class="btn btn-secondary" type="button" data-action="admin-trial-request-status" data-id="${I(e.id)}" data-status="contacted" ${t||n?`disabled`:``}>${t===`contacted`?`Vista...`:`Merkja haft samband`}</button>
        <button class="btn btn-ghost" type="button" data-action="admin-trial-request-status" data-id="${I(e.id)}" data-status="rejected" ${t||n?`disabled`:``}>${t===`rejected`?`Vista...`:`Hafna`}</button>
        <button class="btn btn-primary" type="button" data-action="admin-start-trial-company" data-id="${I(e.id)}" ${n?`disabled`:``}>Stofna fyrirtæki</button>
        ${e.converted_company_id?`<button class="btn btn-secondary" type="button" data-action="view-admin-company" data-id="${I(e.converted_company_id)}">Opna fyrirtæki</button>`:``}
      </div>
      ${R.adminTrialCompanyDraft?fd(e):``}
    </section>
  `}function fd(e){return`
    <div class="admin-trial-company-form-wrap">
      <div class="section-heading">
        <p class="eyebrow">Company profile</p>
        <h3>Stofna fyrirtæki úr prufubeiðni</h3>
        <p>Yfirfarðu og kláraðu venjulega fyrirtækjaprófílinn áður en hann er vistaður. Enginn innskráningaraðgangur eða boð er stofnað sjálfkrafa.</p>
      </div>
      ${An({t:L,escapeHtml:I,capitalize:Nr,arrayFieldText:ss,formatCustomerLocation:Wf,getFilterOptions:yu,getProfileSuggestions:us,renderCustomDropdown:Cu,renderSuggestionChips:hs,formId:`admin-trial-company-form`,profileDraft:R.adminTrialCompanyDraft||Wn(e,()=>f(``)),accountEmail:``,hasProfile:!1,isSavingProfile:R.adminTrialCompanySaving,profileSaved:!1,profileSaveMessage:null,profileSaveError:R.adminTrialCompanyError})}
    </div>
  `}function pd(e,t,n=!1){return`
    <div class="admin-trial-detail-field ${n?`is-wide`:``}">
      <span>${I(e)}</span>
      <strong>${I(t||`—`)}</strong>
    </div>
  `}function md(e){let t=String(e||`new`).toLowerCase();return`<span class="status-pill ${t===`converted`?`is-success`:t===`rejected`?`is-danger`:t===`contacted`?`is-warning`:`is-running`}">${I(Gn(e))}</span>`}function hd(e){return e.notification_sent_at?`Tilkynning send ${M(e.notification_sent_at)}`:e.notification_started_at?`Tilkynning í vinnslu`:e.notification_error?`Tilkynning mistókst: ${e.notification_error}`:`Tilkynning ekki send`}function gd(e){return(R.adminTrialRequests||[]).find(t=>t.id===e)||null}function _d(){return gd(R.selectedAdminTrialRequestId)}function vd(){return{title:`Review Queue`,loading:`Loading review queue...`,empty:`No uncertain matches need review.`,count:e=>`${e} uncertain match${e===1?``:`es`} need review.`,opportunity:`Opportunity`,company:`Company`,source:`Source`,buyer:`Buyer`,region:`Region`,deadline:`Deadline`,score:`Score`,safety:`Safety`,alert:`Alert`,safetyReasons:`Safety reasons`,matchReasons:`Match reasons`,aiReview:`AI review`,aiReviewButton:`AI review`,aiReviewing:`Reviewing...`,aiFit:`Fit`,aiConfidence:`Confidence`,aiSend:`Send to client`,aiSummary:`Suggested client summary`,aiNoReview:`No AI review saved yet.`,approve:`Approve`,approving:`Approving...`,reject:`Reject`,rejecting:`Rejecting...`,noSource:`No source URL`,hidden:`Hidden from reports`,notHidden:`Not hidden from reports`,sourceUrl:`Source URL`}}function yd(e){let t=e?.source||e?.rawPayload?.source_name||``;return Hr(e?.buyer,t,e?.rawPayload||{})||`Unknown buyer`}function bd(e){return Ur(e?.source||e?.rawPayload?.source_name||``)||e?.location||`Unknown`}function xd(e){let t=String(e?.deadlineAt||e?.rawPayload?.deadline_at||``).trim().match(/^(\d{4}-\d{2}-\d{2})[T\s](\d{2}):(\d{2})/);return t?`${t[1]} ${t[2]}:${t[3]}`:e?.deadline?Ar(e.deadline):`Deadline not available in imported data — verify on source page.`}function Sd(e){let t=String(e||``).toLowerCase();return{auto_approved:`Auto-approved`,needs_review:`Needs review`,hidden:`Hidden`}[t]||Nr(t.replace(/_/g,` `))}function Cd(e){return e?`Alert eligible`:`Not alert eligible`}function wd(e){return e?`Review required`:`Review not required`}function Td(e){let t=String(e||``).trim();return{"Strong match":`Strong match`,"Good match":`Good match`,"Possible match":`Possible match`,"Weak match":`Weak match`}[t]||t||`Possible match`}function Ed(e){return String(e||``).trim()}function Dd(e){return String(e||``).trim()}function Od(e){let t=e.opportunity||{},n=R.adminReviewActions?.[e.id]||``,r=!!R.adminAiReviewActions?.[e.id],i=Fr(t.url),a=vd(),o=e.safetyReasons.length?e.safetyReasons:[`Needs admin review`],s=e.matchReasons.length?e.matchReasons:[`Profile match`];return`
    <article class="admin-review-card">
      <div class="admin-review-card-top">
        <div class="admin-review-title-block">
          <span class="eyebrow">${I(a.opportunity)}</span>
          <h3>${I(t.title||`Untitled opportunity`)}</h3>
          <p>${I(a.company)}: <strong>${I(e.companyName)}</strong></p>
          <p>${I(a.source)}: <strong>${I(t.source||`Unknown source`)}</strong></p>
          ${i?`<p class="admin-source-url"><span>${I(a.sourceUrl)}:</span> ${I(i)}</p>`:``}
        </div>
        <div class="admin-review-source-action">
          ${i?`<a class="btn btn-secondary btn-small" href="${I(i)}" target="_blank" rel="noopener">Open source ↗</a>`:`<span class="admin-chip">${I(a.noSource)}</span>`}
        </div>
      </div>

      <div class="admin-review-meta-grid">
        ${jd(a.buyer,yd(t))}
        ${jd(a.region,bd(t))}
        ${jd(a.deadline,xd(t))}
        ${jd(a.score,`${Td(e.matchLabel)} · ${Number(e.matchScore||0)}`)}
        ${jd(a.safety,Sd(e.safetyStatus))}
        ${jd(a.alert,`${Cd(e.alertEligible)} · ${wd(e.reviewRequired)}`)}
      </div>

      <div class="admin-review-reasons">
        <section class="admin-review-reason-box is-warning">
          <h4>${I(a.safetyReasons)}</h4>
          <ul>
            ${o.map(e=>`<li>${I(e)}</li>`).join(``)}
          </ul>
        </section>
        <section class="admin-review-reason-box">
          <h4>${I(a.matchReasons)}</h4>
          <ul>
            ${s.map(e=>`<li>${I(e)}</li>`).join(``)}
          </ul>
        </section>
      </div>

      ${kd(e,a)}

      <div class="admin-review-actions">
        <span class="admin-review-hidden-state">${I(t.rawPayload?.hidden_from_reports===!0?a.hidden:a.notHidden)}</span>
        <div class="admin-row-actions">
          <button class="btn btn-secondary btn-small" data-action="admin-ai-review-match" data-id="${I(e.id)}" data-force="${e.aiReview?`true`:`false`}" ${n||r?`disabled`:``}>${I(r?a.aiReviewing:e.aiReview?`Re-run AI review`:a.aiReviewButton)}</button>
          <button class="btn btn-ghost btn-small" data-action="admin-review-match" data-review-action="approve" data-id="${I(e.id)}" data-company-id="${I(e.companyId)}" ${n||r?`disabled`:``}>${I(n===`approve`?a.approving:a.approve)}</button>
          <button class="btn btn-ghost btn-small" data-action="admin-review-match" data-review-action="reject" data-id="${I(e.id)}" data-company-id="${I(e.companyId)}" ${n||r?`disabled`:``}>${I(n===`reject`?a.rejecting:a.reject)}</button>
        </div>
      </div>
    </article>
  `}function kd(e,t){let n=e.aiReview;return n?`
    <section class="admin-ai-review-box">
      <div class="admin-ai-review-header">
        <h4>${I(t.aiReview)}</h4>
        <span>${I(n.model||`model not listed`)} · ${n.updatedAt?I(M(n.updatedAt)):``}</span>
      </div>
      <div class="admin-ai-review-meta">
        <span><strong>${I(t.aiFit)}</strong>${I(Ad(n.fit))}</span>
        <span><strong>${I(t.aiConfidence)}</strong>${Math.round(Number(n.confidence||0)*100)}%</span>
        <span><strong>${I(t.aiSend)}</strong>${n.sendToClient?`Yes`:`No`}</span>
      </div>
      <p>${I(n.reason||``)}</p>
      ${n.fitReasons.length?`<p><strong>Fit reasons:</strong> ${n.fitReasons.map(e=>`<span class="admin-chip">${I(e)}</span>`).join(` `)}</p>`:``}
      ${n.risksOrQuestions.length?`<p><strong>Risks/questions:</strong> ${n.risksOrQuestions.map(e=>`<span class="admin-chip">${I(e)}</span>`).join(` `)}</p>`:``}
      ${n.suggestedClientSummary?`<p><strong>${I(t.aiSummary)}:</strong> ${I(n.suggestedClientSummary)}</p>`:``}
    </section>
  `:`
      <section class="admin-ai-review-box is-empty">
        <div class="admin-ai-review-header">
          <h4>${I(t.aiReview)}</h4>
          <span>${I(t.aiNoReview)}</span>
        </div>
      </section>
    `}function Ad(e){return{strong:`Strong`,possible:`Possible`,weak:`Weak`,no_fit:`No fit`}[String(e||``)]||`Weak`}function jd(e,t){return`
    <div class="admin-review-meta-item">
      <span>${I(e)}</span>
      <strong>${I(t||`—`)}</strong>
    </div>
  `}function Md(){let e=R.adminCompanyFilters;return(R.adminCompanies||[]).filter(t=>{let n=F(e.search);return!(n&&!F(`${t.companyName} ${t.contactEmail} ${t.industry}`).includes(n)||e.industry!==`all`&&t.industry!==e.industry||e.profileStatus!==`all`&&t.profileStatus!==e.profileStatus||e.plan!==`all`&&t.plan!==e.plan)})}function Nd(e=!1){let t=e?(R.adminCompanies||[]).slice(0,5):Md();return`
    <section class="ops-card">
      <div class="card-header">
        <div>
          <h2>Companies / users</h2>
          <p>${R.adminCompaniesLoading?`Loading companies...`:`${t.length} shown from ${(R.adminCompanies||[]).length} total companies.`}</p>
        </div>
        ${e?``:`
          <label class="admin-inline-control">
            <span>Report mode</span>
            <select data-admin-report-mode>
              <option value="new_only" ${R.adminReportMode===`new_only`?`selected`:``}>New opportunities report</option>
              <option value="all_current" ${R.adminReportMode===`all_current`?`selected`:``}>Current active opportunities report</option>
            </select>
          </label>
        `}
      </div>
      ${R.adminCompaniesError?`<div class="admin-message is-error">${I(R.adminCompaniesError)}</div>`:``}
      ${e?``:Pd()}
      ${R.adminCompaniesLoading&&!t.length?`<div class="empty-card">Loading companies...</div>`:t.length?`
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
              ${t.map(Fd).join(``)}
            </tbody>
          </table>
        </div>
      `:`<div class="empty-card">No companies found.</div>`}
    </section>
  `}function Pd(){let e=R.adminCompanies||[],t=au(e,e=>e.industry),n=au(e,e=>e.plan),r=R.adminCompanyFilters;return`
    <div class="admin-filters admin-company-filters">
      <input data-admin-company-filter="search" value="${I(r.search)}" placeholder="Search company or email..." />
      <select data-admin-company-filter="industry">
        <option value="all">All industries</option>
        ${t.map(e=>`<option value="${I(e)}" ${r.industry===e?`selected`:``}>${I(e)}</option>`).join(``)}
      </select>
      <select data-admin-company-filter="profileStatus">
        <option value="all">All profiles</option>
        ${[`Complete`,`Incomplete`].map(e=>`<option value="${e}" ${r.profileStatus===e?`selected`:``}>${e}</option>`).join(``)}
      </select>
      <select data-admin-company-filter="plan">
        <option value="all">All plans</option>
        ${n.map(e=>`<option value="${I(e)}" ${r.plan===e?`selected`:``}>${I(e)}</option>`).join(``)}
      </select>
    </div>
  `}function Fd(e){let t=R.adminCompanyActions?.[e.id]||``,n=t===`refresh`,r=t===`report`,i=!!t;return`
    <tr>
      <td><strong>${I(e.companyName)}</strong><br><span>${I(e.contactEmail||`No email`)}</span></td>
      <td>${I(e.industry||`Unknown`)}</td>
      <td>${I(e.plan||`Demo`)}</td>
      <td><span class="status-pill ${e.profileStatus===`Complete`?`is-success`:`is-running`}">${I(e.profileStatus)}</span></td>
      <td>${I(M(e.createdAt))}</td>
      <td>${e.matchCount}</td>
      <td>${e.savedCount?e.savedCount:`Not tracked`}</td>
      <td>${e.latestReportDate?I(M(e.latestReportDate)):`No reports`}</td>
      <td>
        <div class="admin-row-actions">
          <button class="btn btn-secondary btn-small" type="button" data-action="view-admin-company" data-id="${I(e.id)}" ${i?`disabled`:``}>View details</button>
          <button class="btn btn-ghost btn-small" type="button" data-action="admin-refresh-company-matches" data-id="${I(e.id)}" ${i?`disabled`:``}>${n?`Refreshing...`:`Refresh matches`}</button>
          <button class="btn btn-ghost btn-small" type="button" data-action="admin-generate-company-report" data-id="${I(e.id)}" ${i?`disabled`:``}>${r?`Generating...`:`Generate report`}</button>
        </div>
      </td>
    </tr>
  `}function Id(e){let t={...yi(),...R.adminOpportunityDraft||{}},n=!!R.opportunityLoadError;return`
    <section class="admin-list">
      <div class="card-header">
        <div>
          <h2>Existing opportunities</h2>
          <p>${n?`Ekki tókst að sækja tækifæri.`:`${(R.opportunities||[]).length} loaded from Supabase.`}</p>
        </div>
      </div>
      ${n?`<div class="admin-message is-error">Ekki tókst að sækja tækifæri. ${I(R.opportunityLoadError)}</div>`:``}
      ${n?``:ou(e)}
      ${n?``:e.length?e.map(zd).join(``):`<div class="empty-card">No opportunities loaded.</div>`}
    </section>

    <form class="form-card admin-form" id="admin-opportunity-form">
      <div class="form-section">
        <h2>Add opportunity</h2>
        <div class="form-grid">
          <label>Title <input name="title" data-admin-opportunity-field="title" value="${I(t.title)}" required /></label>
          <label>Buyer <input name="buyer" data-admin-opportunity-field="buyer" value="${I(t.buyer)}" /></label>
          <label>Source name <input name="sourceName" data-admin-opportunity-field="sourceName" value="${I(t.sourceName)}" required /></label>
          <label>Category <input name="category" data-admin-opportunity-field="category" value="${I(t.category)}" /></label>
          <label>Type <input name="type" data-admin-opportunity-field="type" value="${I(t.type)}" /></label>
          <label>Deadline <input type="date" name="deadline" data-admin-opportunity-field="deadline" value="${I(t.deadline)}" /></label>
          <label>Published date <input type="date" name="published_date" data-admin-opportunity-field="published_date" value="${I(t.published_date)}" /></label>
          <label>Location <input name="location" data-admin-opportunity-field="location" value="${I(t.location)}" /></label>
          <label>Estimated value <input type="number" min="0" step="1" name="estimated_value" data-admin-opportunity-field="estimated_value" value="${I(t.estimated_value)}" /></label>
          <label>URL <input type="url" name="url" data-admin-opportunity-field="url" value="${I(t.url)}" /></label>
          <label>CPV code <input name="cpv_code" data-admin-opportunity-field="cpv_code" value="${I(t.cpv_code)}" /></label>
          <label>Difficulty <input name="difficulty" data-admin-opportunity-field="difficulty" value="${I(t.difficulty)}" /></label>
          <label>Status <input name="status" data-admin-opportunity-field="status" value="${I(t.status)}" /></label>
        </div>
        <label>Description <textarea name="description" data-admin-opportunity-field="description" rows="4">${I(t.description)}</textarea></label>
        <label>Requirements comma-separated <textarea name="requirements" data-admin-opportunity-field="requirements" rows="3">${I(t.requirements)}</textarea></label>
        <label>Keywords comma-separated <textarea name="keywords" data-admin-opportunity-field="keywords" rows="3">${I(t.keywords)}</textarea></label>
      </div>

      <div class="form-actions">
        <button class="btn btn-primary btn-large" type="submit" ${R.adminSubmitting?`disabled`:``}>
          ${R.adminSubmitting?`Saving...`:`Add opportunity`}
        </button>
      </div>
    </form>

    ${fu()}
  `}function Ld(e){let t=R.adminCompanyActions?.[e.id]||``,n=[e.minProjectValue?Rc(e.minProjectValue):`No minimum`,e.maxProjectValue?Rc(e.maxProjectValue):`No maximum`].join(` - `),r=Fr(e.website);return`
    <div class="modal-backdrop">
      <div class="modal admin-company-modal" role="dialog" aria-modal="true">
        <div class="modal-header">
          <div>
            <span class="status-pill ${e.profileStatus===`Complete`?`is-success`:`is-running`}">${I(e.profileStatus)}</span>
            <h2>${I(e.companyName)}</h2>
            <p>${I(e.contactEmail||`No contact email`)} · ${I(e.industry||`Unknown industry`)}</p>
          </div>
          <button type="button" class="icon-btn modal-close-btn" data-action="close-admin-company" aria-label="Close company details">×</button>
        </div>
        <div class="modal-body">
          <div class="admin-detail-grid">
            <section class="side-panel">
              <h3>Company basics</h3>
              <p><strong>Email:</strong> ${I(e.contactEmail||`Unknown`)}</p>
              <p><strong>Contact name:</strong> ${I(e.contactName||`Not listed`)}</p>
              <p><strong>Phone:</strong> ${I(e.phone||`Not listed`)}</p>
              <p><strong>Kennitala:</strong> ${I(e.kennitala||`Not listed`)}</p>
              <p><strong>Address:</strong> ${I(e.address||`Not listed`)}</p>
              <p><strong>Website:</strong> ${r?`<a href="${I(r)}" target="_blank" rel="noreferrer">${I(e.website)}</a>`:I(e.website||`Not listed`)}</p>
              <p><strong>Industry:</strong> ${I(e.industry||`Unknown`)}</p>
              <p><strong>Created:</strong> ${I(M(e.createdAt))}</p>

              <h3>Billing</h3>
              <p><strong>Selected plan:</strong> ${I(e.selectedPlan||e.plan||`Not selected`)}</p>
              <p><strong>Billing status:</strong> ${I(e.billingStatus||`Not set`)}</p>
              <p><strong>Billing email:</strong> ${I(e.billingEmail||e.contactEmail||`Not listed`)}</p>
              <p><strong>Trial started:</strong> ${e.trialStartedAt?I(M(e.trialStartedAt)):`Not set`}</p>
              <p><strong>Trial ends:</strong> ${e.trialEndsAt?I(M(e.trialEndsAt)):`Not set`}</p>

              <h3>Project preferences</h3>
              <p><strong>Project size:</strong> ${I(n)}</p>
              <p><strong>Unknown value:</strong> ${e.allowUnknownValue?`Allowed`:`Not preferred`}</p>
              <p><strong>Travel:</strong> ${e.willingToTravel?`Yes`:`No`}</p>
              <p><strong>National:</strong> ${e.nationalProjects?`Yes`:`No`}</p>
              <p><strong>Remote:</strong> ${e.remoteProjects?`Yes`:`No`}</p>
            </section>

            <section class="side-panel">
              <h3>Services</h3>
              ${Rd(e.services,`No services saved.`)}
              <h3>Include keywords</h3>
              ${Rd(e.includeKeywords,`No include keywords saved.`)}
              <h3>Exclude keywords</h3>
              ${Rd(e.excludeKeywords,`No exclude keywords saved.`)}
            </section>

            <section class="side-panel">
              <h3>Locations and service areas</h3>
              <p><strong>Base:</strong> ${I(e.baseLocation||`Not set`)}</p>
              ${Rd([...e.locations,...e.serviceAreas],`No locations saved.`)}
              <h3>Reports</h3>
              <p><strong>Frequency:</strong> ${I(e.reportFrequency)}</p>
              <p><strong>Day:</strong> ${I(e.reportDay)}</p>
              <p><strong>Deadline reminders:</strong> ${e.deadlineReminders?`On`:`Off`}</p>
            </section>

            ${bt(e,{escapeHtml:I,formatDateTime:M,inviteEmail:ca(e),inviteLink:R.adminCompanyInviteLinks?.[e.id]||``,inviteDebug:R.adminCompanyInviteDebug?.[e.id]||null,actionState:R.adminCompanyAccessActions?.[e.id]||``})}

            ${Dt(e,{escapeHtml:I,formatDateTime:M,actionState:t,lastResult:R.adminCompanyProfileResults?.[e.id]||null,changes:e.profileChanges||[]})}

            <section class="side-panel">
              <h3>Latest matches</h3>
              ${Gt(e,{escapeHtml:I,renderMatchDecisionControls:Pt})}
              <h3>Latest reports</h3>
              ${e.latestReports.length?`
                <ul class="admin-detail-list">
                  ${e.latestReports.map(e=>`
                    <li>
                      <strong>${I(e.title||`Report`)}</strong>
                      <span>${I(M(e.created_at))}</span>
                    </li>
                  `).join(``)}
                </ul>
              `:`<p>No reports generated yet.</p>`}
            </section>

            ${Kt(e,{escapeHtml:I,formatDateTime:M,actionState:R.adminCompanyAiReviewActions?.[e.id]?`running`:``,filter:R.adminCompanyAiReviewFilter,lastResult:R.adminCompanyAiReviewResults?.[e.id]||null,usageSummary:R.adminAiUsageSummary||null,formatAiUsageCost:Ye})}
          </div>
        </div>
      </div>
    </div>
  `}function Rd(e,t){let n=P(e);return n.length?`<div class="admin-tag-list">${n.map(e=>`<span>${I(e)}</span>`).join(``)}</div>`:`<p>${I(t)}</p>`}function zd(e){let t=R.adminUpdatingId===e.id,n=Ba(e),r=Lc(e),i=e.rawPayload?.hidden_from_reports===!0||[`hidden`,`noise`,`deleted`].includes(String(e.rawPayload?.admin_report_status||``).toLowerCase()),a=bf(e)?e.rawPayload?.duplicate_reason||`Duplicate of ${e.rawPayload?.canonical_opportunity_id||e.rawPayload?.duplicate_of||`canonical opportunity`}`:``,o=qa({title:e.title,description:e.description,content:`${e.category||``} ${e.source||``} ${Array.isArray(e.keywords)?e.keywords.join(` `):``}`,publishedDate:e.publishedDate,deadline:e.deadline,sourceName:e.source,sourceType:e.sourceType,connectorType:e.rawPayload?.connector_type}),s=e.rawPayload?.stale_reason||(o.isStale?o.reason:``),c=Fr(e.url||e.rawPayload?.source_url||``);return`
    <div class="admin-row">
      <div>
        <h3>${I(e.title)}</h3>
        <div class="admin-opportunity-review-meta">
          ${Bd(e)}
          <span><strong>Bætt við:</strong> ${I(Wd(e.createdAt))}</span>
          <span><strong>Síðast uppfært:</strong> ${I(Wd(e.updatedAt))}</span>
          <span><strong>Source:</strong> ${I(e.source||`Unknown source`)}</span>
          <span><strong>Deadline:</strong> ${I(r.label||`Not listed`)}</span>
          <span><strong>External ID:</strong> ${I(e.externalId||`Not listed`)}</span>
        </div>
        <p><strong>Source:</strong> ${I(e.source||`Unknown source`)} · <strong>Buyer:</strong> ${I(yd(e))} · <strong>Region:</strong> ${I(bd(e))} · <strong>Status:</strong> ${I(e.status)}</p>
        <p><strong>Source URL:</strong> ${c?`<a href="${I(c)}" target="_blank" rel="noreferrer">${I(c)}</a>`:`Not listed`} · <strong>External ID:</strong> ${I(e.externalId||`Not listed`)}</p>
        <p>Quality: ${I(Uu(e))} · Intent: ${I(Hu(n))}${i?` · Hidden from reports`:``}${a?` · Duplicate: ${I(a)}`:``}${s?` · Stale / expired: ${I(s)}`:``}</p>
        <p>Debug: hidden_from_reports=${e.rawPayload?.hidden_from_reports===!0?`true`:`false`} · admin_report_status=${I(e.rawPayload?.admin_report_status||`none`)} · stale_status=${I(e.rawPayload?.stale_status||`none`)}</p>
        ${Gd(e)}
      </div>
      <div class="admin-row-actions">
        <button class="btn btn-ghost btn-small" data-action="admin-report-override" data-override="confirmed_tender" data-id="${I(e.id)}" ${t?`disabled`:``}>Confirmed tender</button>
        <button class="btn btn-ghost btn-small" data-action="admin-report-override" data-override="early_opportunity" data-id="${I(e.id)}" ${t?`disabled`:``}>Early opportunity</button>
        <button class="btn btn-ghost btn-small" data-action="admin-report-override" data-override="include" data-id="${I(e.id)}" ${t?`disabled`:``}>Include in reports</button>
        <button class="btn btn-ghost btn-small" data-action="admin-report-override" data-override="noise" data-id="${I(e.id)}" ${t?`disabled`:``}>News/noise</button>
        <button class="btn btn-ghost btn-small" data-action="admin-report-override" data-override="hide" data-id="${I(e.id)}" ${t?`disabled`:``}>Hide from reports</button>
        <button
          class="btn btn-ghost btn-small"
          data-action="delete-opportunity"
          data-id="${I(e.id)}"
          ${R.adminDeletingId===e.id?`disabled`:``}
        >
          ${R.adminDeletingId===e.id?`Deleting...`:`Delete`}
        </button>
      </div>
    </div>
  `}function Bd(e){let t=Vd(e);return t?`<span class="status-pill ${t===`new`?`is-success`:`is-warning`}">${I(t===`new`?`Nýtt`:`Uppfært`)}</span>`:``}function Vd(e){let t=Hd(),n=e.rawPayload?.first_import_run_id||e.rawPayload?.firstImportRunId||``;return t&&n&&String(n)===String(t)?`new`:``}function Hd(){let e=new Set([`success`,`completed`,`complete`]);return(R.importRuns||[]).filter(t=>{let n=String(t.run_type||t.import_mode||t.details?.run_type||``).toLowerCase(),r=String(t.status||``).toLowerCase();return t.id&&n.includes(`daily`)&&n.includes(`pipeline`)&&e.has(r)})[0]?.id||``}function Ud(e){let t=String(e?.code||``).toUpperCase(),n=Number(e?.status||e?.statusCode||0),r=String(e?.message||e?.details||``).toLowerCase();return t===`42P01`||t===`PGRST205`||n===404&&r.includes(`contact_requests`)||r.includes(`contact_requests`)&&(r.includes(`schema cache`)||r.includes(`does not exist`))}function Wd(e){return e?M(e):`Not listed`}function Gd(e){let t=R.adminOpportunityFilters?.debugCompanyId||``;if(!t)return``;let n=(R.adminCompanies||[]).find(e=>e.id===t);if(!n)return`<div class="admin-debug-panel">Match debug: selected company not loaded.</div>`;let r=ic(n,e),i=Yd(e,r),a=P(n.services).join(`, `)||`No services`,o=P(n.includeKeywords).join(`, `)||`No include keywords`,s=Kd(n,e),c=qd(n,e),l=Jd(n,e,r),u=classifyMatchSafety(n,r);return`
    <div class="admin-debug-panel">
      <p><strong>Match debug for ${I(n.companyName)}:</strong> score ${Number(r.matchScore||0)} · ${I(Td(r.matchLabel))}</p>
      <p><strong>Services:</strong> ${I(a)}</p>
      <p><strong>Keywords:</strong> ${I(o)}</p>
      <p><strong>Matched terms:</strong> ${s.length?s.map(e=>`<span class="admin-chip">${I(e)}</span>`).join(` `):`None`}</p>
      <p><strong>Missing profile terms:</strong> ${c.length?c.map(e=>`<span class="admin-chip">${I(e)}</span>`).join(` `):`None`}</p>
      <p><strong>Score contribution:</strong> ${l.map(e=>`<span class="admin-chip">${I(e)}</span>`).join(` `)}</p>
      <p><strong>Matched terms/reasons:</strong> ${(r.matchReasons||[]).map(e=>`<span class="admin-chip">${I(Ed(e))}</span>`).join(` `)||`None`}</p>
      <p><strong>Risks:</strong> ${(r.risks||[]).map(e=>`<span class="admin-chip">${I(Dd(e))}</span>`).join(` `)||`None`}</p>
      <p><strong>Safety:</strong> <span class="admin-chip">${I(Sd(u.safetyStatus))}</span> <span class="admin-chip">${I(Cd(u.alertEligible))}</span> ${(u.safetyReasons||[]).map(e=>`<span class="admin-chip">${I(e)}</span>`).join(` `)}</p>
      <p><strong>Excluded by:</strong> ${i.length?i.map(e=>`<span class="admin-chip">${I(e)}</span>`).join(` `):`<span class="admin-chip">Not excluded by local dashboard/report filters</span>`}</p>
    </div>
  `}function Kd(e,t){let n=Ts(t);return Ls(jr([...P(e.services).filter(e=>ws(n,e)),...P(e.includeKeywords).filter(e=>ws(n,e)),...Rs(n),...Hs(e)?zs(n):[]]))}function qd(e,t){let n=Ts(t);return Ls(jr([...P(e.services),...P(e.includeKeywords)].filter(e=>e&&!ws(n,e)))).slice(0,12)}function Jd(e,t,n){let r=[],i=(n.matchReasons||[]).filter(e=>/^Mentions your service:/i.test(e)).length,a=(n.matchReasons||[]).filter(e=>/^Contains your keyword:/i.test(e)).length;rc(e,t)&&r.push(`+35 industry/category`),i&&r.push(`+${Math.min(35,i*10)} services`),a&&r.push(`+${Math.min(25,a*8)} keywords`);let o=Xs(e,t);return o===`local_match`?r.push(`+22 local`):o===`national_match`?r.push(`+16 national`):o===`remote_match`?r.push(`+14 remote`):o===`outside_area_possible`?r.push(`+4 travel possible`):r.push(`-8 low-confidence location`),t.deadline&&j(t.deadline)>=0&&j(t.deadline)<=30&&r.push(`+8 closing soon`),(n.risks||[]).some(e=>/broad construction/i.test(e))&&r.push(`capped broad fit`),(n.risks||[]).some(e=>/winter|snow/i.test(e))&&r.push(`capped winter fit`),(n.risks||[]).some(e=>/indoor|finishing/i.test(e))&&r.push(`downgraded indoor mismatch`),r.length?r:[`No positive score contribution`]}function Yd(e,t){let n=[];return Number(t.matchScore||0)<50&&n.push(`score_below_50 (${Number(t.matchScore||0)})`),Nf(e)||n.push(`customer_match_ineligible`),La(e)||n.push(`dashboard_not_visible`),dc(e)===`hidden`&&n.push(`safety_status_hidden`),kf(R.adminCompanies?.find(e=>e.id===R.adminOpportunityFilters?.debugCompanyId)||{},e)&&n.push(`needs_review_wrong_type_for_company`),Af(R.adminCompanies?.find(e=>e.id===R.adminOpportunityFilters?.debugCompanyId)||{},e)&&n.push(`design_consulting_or_supervision_only`),e.rawPayload?.hidden_from_reports===!0&&n.push(`hidden_from_reports`),bf(e)&&n.push(`duplicate_secondary`),Ka(e)&&n.push(`stale_or_expired`),Ra(e)&&n.push(`demo_or_test`),n}function Xd(){if(!R.user)return Oo();if(!R.profile)return ll(L(`setupCompanyFirst`),L(`reportNeedsProfile`));let e=R.profile,t=ff(e,uf()),n=R.reports.find(e=>e.id===R.selectedReportId),r=R.reportArchiveLoading?L(`loadingSavedReports`):R.language===`is`?`${R.reports.length} vistuð yfirlit.`:`${R.reports.length} saved report${R.reports.length===1?``:`s`}.`,i=R.reportArchiveLoading?`<div class="empty-card">${I(L(`loadingSavedReports`))}</div>`:R.reportsLoadError?`<div class="admin-message is-error">Failed to load reports. ${I(R.reportsLoadError)}</div>`:R.reportsLoaded&&R.reports.length===0?`<div class="empty-card">${I(L(`noSavedReports`))}</div>`:R.reports.map(Zd).join(``);return Q(`
    <section class="dashboard-head">
      <div>
        <p class="eyebrow">${I(L(`weeklyReport`))}</p>
        <h1>${I(L(`reportTitle`))}</h1>
        <p>${I(e.companyName||`Your company`)} · ${I(pf(t.periodStart,t.periodEnd))}</p>
        <p class="muted-copy">${I(R.language===`is`?`Sýnir öll núverandi viðeigandi tækifæri, ekki aðeins ný frá síðasta vistaða yfirliti.`:`Showing all current eligible matches, not only new items since the last saved report.`)}</p>
      </div>
      <div class="dashboard-actions">
        <button class="btn btn-primary" data-action="save-report" ${R.reportSaveLoading?`disabled`:``}>
          ${R.reportSaveLoading?I(L(`savingReport`)):I(L(`saveReport`))}
        </button>
        <button class="btn btn-secondary" data-action="download-report-pdf">${I(L(`downloadPdf`))}</button>
        <button class="btn btn-secondary" data-action="copy-report">${I(L(`copyReport`))}</button>
      </div>
    </section>

    ${R.reportMessage?`
      <div class="admin-message ${R.reportMessage.type===`error`?`is-error`:`is-success`}">
        ${I(R.reportMessage.text)}
      </div>
    `:``}

    ${$d(t,{id:`report-preview`,contactEmail:e.contactEmail,companyName:e.companyName})}

    <section class="report-archive">
      <div class="card-header">
        <div>
          <p class="eyebrow">${I(L(`reportArchive`))}</p>
          <h2>${I(L(`savedReports`))}</h2>
          <p>${r}</p>
        </div>
      </div>
      ${i}
    </section>

    ${n?ef(n,e):``}
  `)}function Zd(e){let t=Array.isArray(e.report_items)?e.report_items.length:Number(e.itemCount||0),n=R.profile?.companyName||e.companies?.company_name||`Company`,r=R.language===`is`?mf(e.created_at):Ar(e.created_at),i=R.language===`is`?`${t} tækifæri`:`${t} item${t===1?``:`s`}`;return jn({report:e,title:af(e,n),created:r,itemLabel:i,statusLabel:Qd(e.status),hideLabel:R.language===`is`?`Fela yfirlit`:`Hide report`,viewLabel:L(`viewReport`),escapeHtml:I})}function Qd(e){let t=String(e||`draft`);return R.language===`is`?{generated_all_current:`Heildaryfirlit`,generated_new_only:`Ný tækifæri`,draft:`Vistað yfirlit`}[t]||t:{generated_all_current:`All current`,generated_new_only:`New opportunities`,draft:`Saved report`}[t]||t}function $d(e,t={}){return Mn({report:e,options:t,companyName:t.companyName||R.profile?.companyName||`Company`,dateRange:pf(e.periodStart,e.periodEnd),generatedByLabel:L(`generatedBy`),reportTitleLabel:L(`reportTitle`),closeLabel:L(`closeReport`),escapeHtml:I})}function ef(e,t,n={}){let r=e.period_start||e.created_at?.slice(0,10)||new Date().toISOString().slice(0,10),i=e.period_end||e.created_at?.slice(0,10)||new Date().toISOString().slice(0,10),a=t.companyName||e.companies?.company_name||`Company`,o=of(e),s=o.length?sf(o):tf(e),c=o.length?Yf(e,a,o):rf(e.text_content||``);return $d({title:af(e,a),periodStart:r,periodEnd:i,htmlContent:s,textContent:c},{companyName:a,closeButton:n.closeButton===void 0?!0:n.closeButton,includeTextArea:n.includeTextArea===void 0?!1:n.includeTextArea,id:n.id||``})}function tf(e){if(e.html_content&&e.html_content.includes(`report-cover`))return nf(lf(e.html_content));let t=e.period_start||e.created_at?.slice(0,10)||new Date().toISOString().slice(0,10),n=e.period_end||e.created_at?.slice(0,10)||new Date().toISOString().slice(0,10),r=e.html_content?nf(lf(e.html_content)):`<pre>${I(e.text_content||`Ekkert efni var vistað fyrir þetta yfirlit.`)}</pre>`;return`
    <div class="report-cover">
      <div class="report-kicker">Útbúið af VerkRadar</div>
      <p class="eyebrow">Vistað yfirlit</p>
      <h2>${I(e.title||`Vistað yfirlit`)}</h2>
      <p>${I(pf(t,n))}</p>
      <p>${I(e.summary||`Þetta eldra vistaða yfirlit er birt í nýju skýrslusniði.`)}</p>
    </div>
    <div class="report-legacy-content">
      ${r}
    </div>
  `}function nf(e){return cr(e,R.language)}function rf(e){return cr(e,R.language)}function af(e,t){return L(`reportForCompany`,{company:String(t||e?.companies?.company_name||`Company`).trim()})}function of(e){return(Array.isArray(e?.report_items)?[...e.report_items]:[]).sort((e,t)=>Number(e.sort_order||0)-Number(t.sort_order||0)).map(e=>{if(!e.opportunities)return null;let t=ka(e.opportunities);return{...t,matchScore:Number(e.match_score||0),matchLabel:oc(Number(e.match_score||0)),matchReasons:ao(t,Array.isArray(e.match_reasons)?e.match_reasons:[]),risks:Array.isArray(e.risks)&&e.risks.length?e.risks:Array.isArray(t.rawPayload?.risks)?t.rawPayload.risks:[],nextSteps:[]}}).filter(Boolean)}function sf(e){let t=cf(e);return`
    ${t.confirmed.length?Ff(A(`openActiveTitle`,R.language),A(`openActiveDescription`,R.language),t.confirmed):``}
    ${t.possible.length?Ff(A(`possibleTitle`,R.language),A(`possibleDescription`,R.language),t.possible):``}
    ${t.early.length?Ff(A(`earlyTitle`,R.language),A(`earlyDescription`,R.language),t.early):``}
    <p class="report-footer-note">${I(L(`reportFooter`))}</p>
  `}function cf(e){let t={confirmed:[],possible:[],early:[],review:[]};return e.forEach(e=>{let n=gf(e);n===`confirmed`?t.confirmed.push(e):n===`possible`?t.possible.push(e):n===`early`?t.early.push(e):n!==`excluded`&&t.review.push(e)}),t}function lf(e){let t=new DOMParser().parseFromString(String(e||``),`text/html`),n=new Set([`A`,`ARTICLE`,`DIV`,`EM`,`H2`,`H3`,`H4`,`H5`,`LI`,`OL`,`P`,`PRE`,`SECTION`,`SPAN`,`STRONG`,`UL`]),r=new Set([`aria-hidden`,`class`,`href`,`rel`,`target`]);return t.body.querySelectorAll(`*`).forEach(e=>{if(!n.has(e.tagName)){e.replaceWith(...Array.from(e.childNodes));return}Array.from(e.attributes).forEach(t=>{if(!r.has(t.name)){e.removeAttribute(t.name);return}if(t.name===`href`){let n=Fr(t.value);n?e.setAttribute(`href`,n):e.removeAttribute(`href`)}})}),t.body.innerHTML}function uf(e=`all_current`,t=new Set){return df({mode:e,previouslyReportedIds:t})}function df({mode:e=`all_current`,previouslyReportedIds:t=new Set}={}){let n=sc().filter(e=>e.matchScore>=50).filter(e=>_f(e,`all_current`));return kr(e===`new_only`?n.filter(e=>!t.has(e.id)):n).slice(0,8)}function ff(e,t){let n=new Date,r=n.toISOString().slice(0,10),i=new Date(n);i.setDate(i.getDate()-7);let a=i.toISOString().slice(0,10),o=L(`reportForCompany`,{company:e.companyName}),s=hf(t),c=s.confirmed.length+s.possible.length+s.early.length,l=R.language===`is`?`${c} viðeigandi útboðs- eða verðfyrirspurnaratriði fundust fyrir ${e.companyName}.`:`${c} relevant tender/quote-request ${c===1?`item`:`items`} found for ${e.companyName}.`;return{title:o,periodStart:a,periodEnd:r,summary:l,textContent:Jf(e,t),htmlContent:`
    <div class="report-cover">
      <div class="report-kicker">${I(L(`generatedBy`))}</div>
      <p class="eyebrow">${I(L(`reportTitle`))}</p>
      <h2>${I(o)}</h2>
      <p>${I(pf(a,r))}</p>
      <p>${I(l)} ${t[0]?I(R.language===`is`?`Sterkasta sýnilega atriðið er ${t[0].title}.`:`The strongest visible item is ${t[0].title}.`):I(R.language===`is`?`Engin skýr útboð eða verðfyrirspurnir fundust fyrir þetta tímabil.`:`No strict report-ready tenders or quote requests were found for this period.`)}</p>
    </div>

    <div class="report-summary-grid">
      ${Pf(A(`openActiveTitle`,R.language),s.confirmed.length)}
      ${Pf(A(`possibleTitle`,R.language),s.possible.length)}
    </div>

    ${Ff(A(`openActiveTitle`,R.language),A(`openActiveDescription`,R.language),s.confirmed)}
    ${s.possible.length?Ff(A(`possibleTitle`,R.language),A(`possibleDescription`,R.language),s.possible):``}
    ${s.early.length?Ff(A(`earlyTitle`,R.language),A(`earlyDescription`,R.language),s.early):``}

    <p class="report-footer-note">${I(L(`reportFooter`))}</p>
  `}}function pf(e,t){return`${mf(e)} – ${mf(t)}`}function mf(e){if(!e)return`Engin dagsetning`;let t=new Date(`${String(e).slice(0,10)}T00:00:00`);return Number.isNaN(t.getTime())?String(e):R.language===`en`?new Intl.DateTimeFormat(`en-GB`,{year:`numeric`,month:`short`,day:`2-digit`}).format(t):`${t.getDate()}. ${[`janúar`,`febrúar`,`mars`,`apríl`,`maí`,`júní`,`júlí`,`ágúst`,`september`,`október`,`nóvember`,`desember`][t.getMonth()]} ${t.getFullYear()}`}function hf(e){let t={confirmed:[],possible:[],early:[]},n=new Set,r=kr(e);(r.length?r:xf(e)).forEach(e=>{let r=gf(e);r!==`excluded`&&(n.has(e.id)||(n.add(e.id),r===`confirmed`?t.confirmed.push(e):r===`possible`?t.possible.push(e):r===`early`&&t.early.push(e)))});let i=8;for(let e of[`confirmed`,`possible`,`early`]){let n=t[e].slice(0,i);t[e]=n,i=Math.max(0,i-n.length)}return t}function gf(e){let t=Dr(e);if(t!==`excluded`||e?.aiReviewFit||e?.ai_review_fit)return t;if(!vf(e))return`excluded`;if(Or(e))return`confirmed`;let n=Ba(e);if(n===`confirmed_tender`)return`confirmed`;if(n===`early_opportunity`)return`early`;let r=W(e.qualityStatus,e);return r===`confirmed_tender`?`confirmed`:r===`early_signal`?`early`:`excluded`}function _f(e,t=`all_current`){return vf(e)?t===`new_only`?dc(e)===`auto_approved`&&e.alertEligible!==!1:dc(e)!==`hidden`:!1}function vf(e){if(!e||Ra(e)||dc(e)===`hidden`||!La(e)||yf(e)||Cf(e)||Df(e)||Of(e)||to(e.title||``)&&!wf(e))return!1;let t=Ba(e);if(t===`confirmed_tender`)return wf(e)||Ef(e);if(t===`early_opportunity`)return Tf(e);let n=W(e.qualityStatus,e);return n===`confirmed_tender`?wf(e)||Ef(e):n===`early_signal`?Tf(e):!1}function yf(e){let t=e?.rawPayload||{},n=String(t.admin_report_status||``).toLowerCase();if(n===`include`)return!1;if(t.hidden_from_reports===!0||[`hidden`,`hide`,`noise`,`deleted`].includes(n)||bf(e)||Ka(e))return!0;let r=Ba(e);return r===`news_context`||r===`not_opportunity`}function bf(e={}){let t=e.rawPayload||{},n=String(t.canonical_opportunity_id||``);return t.is_duplicate===!0||!!t.duplicate_of||!!n&&!!e.id&&n!==String(e.id)}function xf(e){return[...e].sort((e,t)=>Sf(e)-Sf(t)||Number(Ef(t))-Number(Ef(e))||Number(wf(t))-Number(wf(e))||t.matchScore-e.matchScore||j(e.deadline)-j(t.deadline))}function Sf(e){if(Cf(e))return 99;let t=Ba(e);return t===`confirmed_tender`?0:t===`early_opportunity`?1:10}function Cf(e){let t=Va(e)?Ha(e):String(e?.rawPayload?.tender_state||``).toLowerCase();return[`tender_awarded`,`awarded`,`already_tendered`].includes(t)?!0:G(Wa(e),[`lægstbjóðandi`,`laegstbjodandi`,`samningur gerður`,`samningur gerdur`,`samningur var`,`samið var`,`samid var`,`útboð hefur farið fram`,`utbod hefur farid fram`,`útboð var auglýst`,`utbod var auglyst`])}function wf(e){return G(Wa(e),[`útboð`,`utbod`,`útboðsauglýsing`,`utbodsauglysing`,`tilboð`,`tilbod`,`tilboðum`,`tilbodum`,`óskað eftir tilboðum`,`oskad eftir tilbodum`,`verðfyrirspurn`,`verdfyrirspurn`,`forval`,`skilafrestur`,`útboðsgögn`,`utbodsgogn`,`quote request`,`request for quote`,`tender`,`procurement`])}function Tf(e){return G(Wa(e),[`senn í útboð`,`senn i utbod`,`áætlað útboð`,`aaetlad utbod`,`áætlað er að bjóða út`,`aaetlad er ad bjoda ut`,`fyrirhugað útboð`,`fyrirhugad utbod`])}function Ef(e){let t=F(e?.source||``);return[`rikiskaup`,`ríkiskaup`,`utbodsvefur`,`útboðsvefur`,`ted`,`tenders electronic daily`,`procurement`,`tender portal`].some(e=>t.includes(F(e)))}function Df(e){return Af(R.profile||{},e)}function Of(e){return kf(R.profile||{},e)}function kf(e,t){return dc(t)!==`needs_review`||!Mf([...Array.isArray(t?.safetyReasons)?t.safetyReasons:[],...Array.isArray(t?.risks)?t.risks:[],...Array.isArray(t?.rawPayload?.safety_reasons)?t.rawPayload.safety_reasons:[],...Array.isArray(t?.rawPayload?.risks)?t.rawPayload.risks:[]].filter(Boolean).join(` `))?!1:!jf(e)}function Af(e,t){let n=Wa(t),r=G(n,[`for og verkhönnun`,`for og verkhonnun`,`verkhönnun`,`verkhonnun`,`forhönnun`,`forhonnun`,`verkfræðiráðgjöf`,`verkfraediradgjof`,`ráðgjöf`,`radgjof`,`umsjón`,`umsjon`,`verkefnastjórn`,`verkefnastjorn`,`útboðsgögn hönnun`,`utbodsgogn honnun`]),i=G(n,[`hönnun`,`honnun`]),a=G(n,[`lóðarframkvæmdir`,`lodarframkvaemdir`,`gatnagerð`,`gatnagerd`,`stígagerð`,`stigagerd`,`lagnir`,`regnvatnslagnir`,`jarðvinna`,`jardvinna`,`jarðvegsskipti`,`jardvegsskipti`,`fyllingar`,`grjóthleðsla`,`grjothledsla`,`malbikun`,`hellulögn`,`hellulogn`,`kantsteinar`,`landmótun`,`landmotun`,`yfirborðsfrágangur`,`yfirbordsfragangur`,`bílastæði`,`bilastaedi`]),o=G(n,[`eftirlit`,`umsjón`,`umsjon`,`verkefnastjórn`,`verkefnastjorn`])&&!a;return!r&&!(i&&!a)&&!o?!1:!jf(e)}function jf(e={}){return G([e.industry,...Array.isArray(e.services)?e.services:[],...Array.isArray(e.includeKeywords)?e.includeKeywords:[]].filter(Boolean).join(` `),[`hönnun`,`honnun`,`ráðgjöf`,`radgjof`,`verkfræðiráðgjöf`,`verkfraediradgjof`,`verkfræði`,`verkfraedi`,`eftirlit`,`verkefnastjórnun`,`verkefnastjornun`,`útboðsgögn`,`utbodsgogn`,`engineering`,`design`,`consulting`,`project management`,`supervision`])}function Mf(e){return G(String(e||``),[`hönnun`,`honnun`,`ráðgjöf`,`radgjof`,`verkfræðiráðgjöf`,`verkfraediradgjof`,`eftirlit`,`umsjón`,`umsjon`,`verkefnastjórn`,`verkefnastjorn`,`design`,`consulting`,`supervision`,`inspection`,`project management`])}function Nf(e){if(!e)return!1;let t=e.rawPayload||{};if(String(t.admin_report_status||``).toLowerCase()===`include`)return!0;if(yf(e))return!1;let n=String(t.tender_state||``).toLowerCase();return!([`tender_awarded`,`awarded`,`already_tendered`].includes(n)||Ka(e)||to(e.title||``)&&!Ga(Wa(e)))}function Pf(e,t){return Nn({label:e,value:t,escapeHtml:I})}function Ff(e,t,n){return Pn({title:e,description:t,opportunities:n,emptyText:R.language===`is`?`Engin atriði í þessum hluta.`:`No items in this section.`,renderOpportunityItem:If,escapeHtml:I})}function If(e){let t=!!e.estimatedValue,n={...e,matchReasons:hr(e.matchReasons,R.language)},r=qf(e).map(e=>gr(e,R.language)).filter(Boolean),i=e.deadline?mf(e.deadline):L(`notFound`);return Fn({opp:n,valueText:t?Rc(e.estimatedValue):L(`notListed`),deadlineText:i,sourceUrl:Fr(e.url),risks:r,fallbackReason:R.language===`is`?`Passar við fyrirtækjaprófílinn.`:`Matches your company profile.`,qualityBadgeHtml:Lf(n),matchBadgeClass:Hc(e.matchLabel),matchLabel:fr(e,R.language),statusText:dr(R.language),buyerLabel:L(`buyer`),buyerValue:Vf(e),sourceLabel:L(`source`),sourceValue:Bf(`source`,e.source),areaLabel:L(`area`),areaValue:Hf(e),deadlineLabel:L(`deadline`),valueLabel:L(`estimatedValue`),whyLabel:L(`whyThisMatters`),risksLabel:L(`risksToCheck`),openSourceLabel:L(`openSource`),sourceMissingLabel:L(`sourceLinkMissing`),formatReason:Gf,formatRisk:$,escapeHtml:I})}function Lf(e){return In({status:`verify`,label:mr(e,R.language),escapeHtml:I})}function Rf(e){return Lr(e,L)}function zf(e){return Rr(e,L)}function Bf(e,t){return zr(e,t,L)}function Vf(e){let t=e?.source||e?.rawPayload?.source_name||``;return Bf(`buyer`,Hr(e?.buyer,t,e?.rawPayload||{}))}function Hf(e){return Ur(e?.source||e?.rawPayload?.source_name||``)||Bf(`location`,e?.location)}function Uf(e,t){return Gr(e,t,{language:R.language,translate:L})}function Wf(e){return Wr(e,R.language,L)}function Gf(e){return hr([Kr(e,{language:R.language,translate:L})],R.language)[0]||``}function $(e){return gr(qr(e,R.language),R.language)}function Kf(e){return Jr(e,R.language)}function qf(e){let t=Array.isArray(e.risks)&&e.risks.length?[...e.risks]:[`Open the source page and confirm mandatory requirements.`];return e.deadline||t.unshift(Ic(e)),e.estimatedValue||t.push(`Estimated value is not listed in the imported data.`),W(e.qualityStatus,e)===`needs_review`&&t.push(Va(e)?`Extracted project signal — verify tender timing in the source article.`:`Imported from broad feed — verify that this is a real tender or business opportunity.`),[...new Set(t.map(e=>String(e||``).trim()).filter(Boolean))]}function Jf(e,t){let n=hf(t),r=[...n.confirmed,...n.possible,...n.early];return`${L(`reportForCompany`,{company:e.companyName})}
${R.language===`is`?`Tímabil`:`Date range`}: ${pf(new Date(Date.now()-10080*60*1e3).toISOString().slice(0,10),new Date().toISOString().slice(0,10))}

${R.language===`is`?`Samantekt`:`Summary`}:
- ${A(`openActiveTitle`,R.language)}: ${n.confirmed.length}
- ${A(`possibleTitle`,R.language)}: ${n.possible.length}
- ${A(`earlyTitle`,R.language)}: ${n.early.length}

${r.length?r.map((e,t)=>`${t+1}. ${e.title}
${R.language===`is`?`Staða`:`Status`}: ${pr(e,R.language)}
${L(`buyer`)}: ${Vf(e)}
${L(`source`)}: ${Bf(`source`,e.source)}
${L(`area`)}: ${Hf(e)}
${L(`deadline`)}: ${Fc(e)}
${L(`estimatedValue`)}: ${e.estimatedValue?Rc(e.estimatedValue):L(`notListed`)}
${L(`whyThisMatters`)}:
${hr(e.matchReasons.length?e.matchReasons:[`Matched to your company profile.`],R.language).map(e=>`- ${e}`).join(`
`)}
${L(`risksToCheck`)}:
${qf(e).map(e=>`- ${gr($(e),R.language)}`).join(`
`)}
${R.language===`is`?`Næsta skref`:`Next step`}:
${e.url?`${L(`openSource`)}: ${e.url}`:R.language===`is`?`Finnið og staðfestið upprunalega heimild áður en brugðist er við.`:`Find and verify the original source page before acting.`}
`).join(`
`):R.language===`is`?`Engin skýr útboð eða verðfyrirspurnir fundust fyrir þetta tímabil.`:`No report-ready matches were found for this period.`}

VerkRadar`}function Yf(e,t,n){let r=e.period_start||e.created_at?.slice(0,10)||new Date().toISOString().slice(0,10),i=e.period_end||e.created_at?.slice(0,10)||new Date().toISOString().slice(0,10),a=af(e,t),o=cf(n),s=[...o.confirmed,...o.possible,...o.early,...o.review];return`${a}
${R.language===`is`?`Tímabil`:`Date range`}: ${pf(r,i)}

${s.length?s.map((e,t)=>`${t+1}. ${e.title}
${R.language===`is`?`Staða`:`Status`}: ${pr(e,R.language)}
${L(`buyer`)}: ${Vf(e)}
${L(`source`)}: ${Bf(`source`,e.source)}
${L(`area`)}: ${Hf(e)}
${L(`deadline`)}: ${Fc(e)}
${L(`estimatedValue`)}: ${e.estimatedValue?Rc(e.estimatedValue):L(`notListed`)}
${L(`whyThisMatters`)}:
${hr(e.matchReasons.length?e.matchReasons:[`Matched to your company profile.`],R.language).map(e=>`- ${e}`).join(`
`)}
${L(`risksToCheck`)}:
${qf(e).map(e=>`- ${gr($(e),R.language)}`).join(`
`)}
${e.url?`${L(`openSource`)}: ${e.url}`:``}
`).join(`
`):R.language===`is`?`Engin atriði eru vistuð í þessu yfirliti.`:`No items are saved in this report.`}

${L(`reportFooter`)}`}async function Xf(){let e=Jf(R.profile||ni(),uf());try{await navigator.clipboard.writeText(e),q(`Report copied`,`success`)}catch(e){console.error(`Failed to copy report:`,e),q(`Could not copy report`,`error`)}}function Zf(e=`report-preview`,t=``){let n=document.getElementById(e);if(!n){q(`No report available to export`,`error`);return}let r=R.profile||ni(),i=n.cloneNode(!0);i.classList.add(`pdf-compact-report`),i.querySelectorAll(`textarea, .report-close-btn`).forEach(e=>e.remove());let a=i.querySelector(`.report-meta-bar`);if(a){let e=a.querySelector(`div:first-child strong`)?.textContent?.trim()||L(`reportForCompany`,{company:t||r.companyName||`Company`}),n=a.querySelector(`div:last-child span`)?.textContent?.trim()||t||r.companyName||`Company`,i=a.querySelector(`div:last-child strong`)?.textContent?.trim()||``,o=document.querySelector(`.brand-logo`)?.src||document.querySelector(`link[rel="icon"]`)?.href||``;a.innerHTML=``;let s=document.createElement(`div`);s.className=`pdf-report-header-text`;let c=document.createElement(`span`);c.textContent=L(`generatedBy`);let l=document.createElement(`strong`);l.textContent=e||L(`reportForCompany`,{company:n});let u=document.createElement(`em`);if(u.textContent=i,s.append(c,l,u),a.appendChild(s),o){let e=document.createElement(`img`);e.className=`pdf-report-logo`,e.src=o,e.alt=`VerkRadar`,a.appendChild(e)}}let o=i.querySelector(`.report-summary-grid`);o&&o.remove();let s=n.querySelector(`.report-meta-bar div:last-child strong`)?.textContent||new Date().toISOString().slice(0,10),c=$f(t||r.companyName||`company`,s),l=Array.from(document.querySelectorAll(`link[rel="stylesheet"]`)).map(e=>`<link rel="stylesheet" href="${I(e.href)}">`).join(``),u=window.open(``,`_blank`,`width=1100,height=900`);if(!u){q(`Allow popups to download the report PDF`,`error`);return}u.document.open(),u.document.write(`<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${I(c)}</title>
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
</html>`),u.document.close()}function Qf(){Zf(`admin-report-preview`,(R.selectedAdminReport?.id===R.selectedAdminReportId?R.selectedAdminReport:(R.adminReports||[]).find(e=>e.id===R.selectedAdminReportId))?.companies?.company_name||`Company`)}function $f(e,t){return`VerkRadar-report-${ep(e)||`company`}-${ep(String(t||``).replace(/\s+to\s+/i,`-`))||new Date().toISOString().slice(0,10)}.pdf`}function ep(e){return String(e||``).normalize(`NFD`).replace(/[\u0300-\u036f]/g,``).replace(/[^a-z0-9]+/gi,`-`).replace(/^-+|-+$/g,``).toLowerCase()}function tp(){return Q(fn({t:L,escapeHtml:I,trialHref:`/trial`}))}function np(){return Q(hn({t:L,escapeHtml:I,submitted:R.trialRequestSubmitted,error:R.trialRequestError,submitting:R.trialRequestSubmitting}))}function rp(){return R.user?R.profileLoading&&!R.profile&&!R.profileDraft?Q(`
      <section class="empty-state">
        <div class="loader-mark" aria-label="${I(R.language===`is`?`Hleð fyrirtækjaprófíl`:`Loading company profile`)}"></div>
        <h1>${I(R.language===`is`?`Hleð fyrirtækjaprófíl...`:`Loading company profile...`)}</h1>
        <p>${I(R.language===`is`?`Sæki vistaðan fyrirtækjaprófíl.`:`Checking your saved company profile.`)}</p>
        <button class="btn btn-secondary" type="button" data-action="retry-settings-profile">${I(R.language===`is`?`Reyna aftur`:`Retry`)}</button>
      </section>
    `):R.profileLoadError&&!R.profile&&!R.profileDraft?Q(`
      <section class="empty-state">
        <h1>${I(R.language===`is`?`Gat ekki hlaðið stillingum`:`Could not load Settings`)}</h1>
        <p>${I(R.profileLoadError)}</p>
        <button class="btn btn-primary" type="button" data-action="retry-settings-profile">${I(R.language===`is`?`Reyna aftur`:`Retry`)}</button>
      </section>
    `):!R.profile&&!R.profileDraft?ll(L(`setupCompanyFirst`),R.language===`is`?`Stillingar eru tiltækar eftir að fyrirtækið hefur verið sett upp.`:`Settings are available after you set up your company.`):Q(Ln({t:L,escapeHtml:I,language:R.language,profileDraftDirty:R.profileDraftDirty,profileLoadError:R.profileLoadError,showTrialReset:ip(),profileFormHtml:vu()})):Oo()}function ip(){return!!(R.isAdmin||[`localhost`,`127.0.0.1`,``].includes(window.location.hostname))}Ro();