export function getLegalPageData(key, language = "is") {
  const is = language === "is";
  const pages = {
    privacy: is ? {
      eyebrow: "Lög og traust",
      title: "Persónuvernd",
      intro: "Hér er útskýrt hvaða upplýsingar VerkRadar vinnur með, hvers vegna og hvaða réttindi þú hefur.",
      sections: [
        ["Ábyrgð og samskipti", ["VerkRadar er þjónusta fyrir fyrirtæki. Sá lögaðili sem tilgreindur er í tilboði eða samningi við viðskiptavin er rekstraraðili þjónustunnar og ábyrgðaraðili persónuupplýsinga. Fyrirspurnir um persónuvernd má senda á info@verkradar.is."]],
        ["Upplýsingar sem við vinnum með", ["VerkRadar vinnur með upplýsingar sem berast í prufu- og tengiliðabeiðnum, svo sem nafn, netfang, símanúmer, fyrirtæki og skilaboð. Við vinnum einnig með innskráningar- og lotugögn, fyrirtækjaprófíla, þjónustu, leitarorð, svæði og stillingar.", "Við vistum upplýsingar um samsvörun og notkun þjónustunnar, þar á meðal vistuð, vöktuð, hunsuð og falin tækifæri, samsvörunarsögu, AI-yfirferðir, skýrslur og nauðsynlegar rekstrarskrár. Opinber gögn um útboð og verkefni geta innihaldið upplýsingar um tengiliði hjá útgefendum."]],
        ["Tilgangur og lagagrundvöllur", ["Upplýsingar eru notaðar til að svara fyrirspurnum, stofna og reka aðgang, veita prufu og áskrift, útbúa samsvaranir og handvirkt sendar skýrslur og tryggja rekstur og öryggi þjónustunnar.", "Vinnslan byggist eftir atvikum á samningi eða ráðstöfunum fyrir samningsgerð, lögmætum hagsmunum af rekstri, öryggi og umbótum þjónustunnar og lagaskyldum, meðal annars vegna bókhalds. Samþykki er aðeins notað þegar þess er sérstaklega óskað og það á við."]],
        ["Samsvörun og AI-aðstoð", ["VerkRadar notar sjálfvirka samsvörun og OpenAI við AI-aðstoð við yfirferð tækifæra. Við slíka yfirferð geta farið upplýsingar sem tengjast fyrirtækjaprófíl, samsvörun og viðkomandi tækifæri, þar á meðal frjáls texti sem getur innihaldið persónuupplýsingar.", "Niðurstöður eru leiðbeinandi og þarf að yfirfara þær með frumgögnum. Þær fela ekki í sér sjálfvirka ákvörðun sem hefur lagaleg eða sambærilega mikil áhrif á einstakling."]],
        ["Þjónustuaðilar", ["VerkRadar notar Supabase fyrir gagnageymslu, auðkenningu og innskráningu, Vercel fyrir hýsingu, OpenAI fyrir AI-yfirferð tækifæra og Resend fyrir innri tilkynningar um prufubeiðnir. Tengiliðabeiðnir eru vistaðar í þjónustunni en ekki sendar með Resend.", "Vinnsla getur farið fram utan Evrópska efnahagssvæðisins eftir staðsetningu og skilmálum þjónustuaðila. Þá er stuðst við þær heimildir og verndarráðstafanir sem við eiga samkvæmt persónuverndarlögum."]],
        ["Varðveisla", ["Varðveisla er nú framkvæmd samkvæmt stjórnsýslulegu ferli. Prufu- og tengiliðabeiðnir sem leiða ekki til viðskipta eru yfirfarnar og hreinsaðar þannig að þær séu ekki varðveittar lengur en í 12 mánuði. Gögn lokaðra viðskiptavina, svo sem prófílar, samsvaranir og skýrslur, eru eydd eða gerð ópersónugreinanleg innan 24 mánaða.", "AI-yfirferðir og rekstrarskrár eru yfirfarnar og hreinsaðar innan 12 mánaða nema lengri varðveisla sé nauðsynleg vegna öryggis eða ágreinings. Bókhaldsgögn eru varðveitt eins lengi og íslensk lög krefjast. Gögn geta varðveist tímabundið í öryggisafritum þar til þau renna út samkvæmt varðveislufyrirkomulagi hýsingaraðila."]],
        ["Vafrageymsla", ["VerkRadar notar nauðsynlega vafra- og lotugeymslu fyrir innskráningu, tungumál, stillingar og grunnvirkni. Engin greiningartól, auglýsingapixlar eða markaðsrekjarar eru notuð sem stendur."]],
        ["Réttindi þín", ["Þú getur eftir atvikum óskað eftir aðgangi, leiðréttingu, eyðingu, takmörkun vinnslu eða afhendingu gagna og mótmælt vinnslu sem byggist á lögmætum hagsmunum. Beiðnir má senda á info@verkradar.is. Einnig má leggja fram kvörtun hjá Persónuvernd."]]
      ]
    } : {
      eyebrow: "Legal and trust",
      title: "Privacy",
      intro: "This notice explains what information VerkRadar processes, why it is used, and your rights.",
      sections: [
        ["Responsibility and contact", ["VerkRadar is a service for businesses. The legal entity named in the customer's quote or agreement operates the service and is the controller of personal data. Privacy questions can be sent to info@verkradar.is."]],
        ["Information we process", ["VerkRadar processes information submitted through trial and contact requests, such as names, email addresses, phone numbers, company details, and messages. We also process login and session data, company profiles, services, keywords, regions, and preferences.", "We store information about matching and service use, including saved, watched, ignored, and hidden opportunities, match history, AI reviews, reports, and necessary operational logs. Public tender and project data may include contact details published by source organisations."]],
        ["Purpose and legal basis", ["Information is used to respond to requests, create and operate accounts, provide trials and subscriptions, prepare matches and manually delivered reports, and maintain the operation and security of the service.", "Processing is based, as applicable, on a contract or steps before entering a contract, legitimate interests in operating, securing, and improving the service, and legal obligations such as accounting. Consent is used only where it is specifically requested and appropriate."]],
        ["Matching and AI assistance", ["VerkRadar uses automated matching and OpenAI for AI-assisted opportunity review. Information connected to the company profile, match, and opportunity may be sent for this review, including free text that may contain personal data.", "Results are advisory and must be checked against source documents. They are not automated decisions with legal or similarly significant effects on individuals."]],
        ["Service providers", ["VerkRadar uses Supabase for data storage and authentication, Vercel for hosting, OpenAI for AI opportunity review, and Resend for internal trial-request notifications. Contact requests are stored in the service but are not sent through Resend.", "Processing may take place outside the EEA depending on a provider's location and terms. Where applicable, transfers rely on the legal mechanisms and safeguards required by data protection law."]],
        ["Retention", ["Retention is currently managed through an administrative process. Trial and contact requests that do not lead to a customer relationship are reviewed and removed within 12 months. Closed-customer profiles, matches, and reports are deleted or anonymised within 24 months.", "AI reviews and operational logs are reviewed and removed within 12 months unless longer retention is needed for security or dispute handling. Accounting records are retained as required by Icelandic law. Data may remain temporarily in backups until those backups expire under the hosting provider's retention arrangements."]],
        ["Browser storage", ["VerkRadar uses necessary browser and session storage for login, language, preferences, and core functionality. No analytics tools, advertising pixels, or marketing trackers are currently used."]],
        ["Your rights", ["Depending on the circumstances, you may request access, correction, deletion, restriction, or portability and object to processing based on legitimate interests. Requests can be sent to info@verkradar.is. You may also complain to the Icelandic Data Protection Authority."]]
      ]
    },
    terms: is ? {
      eyebrow: "Lög og traust",
      title: "Skilmálar",
      intro: "Þessir skilmálar gilda um prufuaðgang og áskrift að VerkRadar.",
      sections: [
        ["Aðilar og samningur", ["VerkRadar er veitt af þeim lögaðila sem tilgreindur er í tilboði eða skriflegum samningi við viðskiptavin. Sá sem stofnar eða samþykkir aðgang fyrir hönd fyrirtækis staðfestir að hann hafi heimild til þess.", "Samningur tekur gildi þegar prufuaðgangur eða áskrift er samþykkt eða annað er staðfest skriflega."]],
        ["Þjónustan", ["VerkRadar vaktar virkar opinberar heimildir og ber birt tækifæri saman við fyrirtækjaprófíl viðskiptavinar. Þjónustan getur innihaldið mælaborð, síur, samsvörun, AI-aðstoð og handvirkt sendar skýrslur.", "Upprunaleg heimild og útboðsgögn eru alltaf endanleg heimild um innihald, fresti og skilyrði."]],
        ["Takmarkanir þjónustunnar", ["VerkRadar tryggir ekki að öll tækifæri finnist, að upplýsingar séu alltaf fullkomnar eða nýjustu, að sérhver samsvörun eigi við eða að viðskiptavinur uppfylli skilyrði eða vinni verk."]],
        ["Prufa, áskrift og reikningar", ["Ókeypis prufa getur varað í allt að 14 daga. Að henni lokinni er áskrift almennt mánaðarleg og án bindingartíma nema annað sé sérstaklega samið skriflega.", "Áskriftir, reikningagerð og greiðslustaða eru nú afgreidd samkvæmt skriflegu samkomulagi og stjórnsýslulegu ferli. Reikningar eru gefnir út mánaðarlega fyrirfram. Verð kemur fram í gildandi verðskrá, tilboði eða samningi og skattar eða lögbundin gjöld bætast við þar sem það á við. Gjalddagi og eindagi koma fram á reikningi og dráttarvextir reiknast samkvæmt íslenskum lögum."]],
        ["Uppsögn og verðbreytingar", ["Uppsögn er afgreidd samkvæmt skriflegri beiðni og tekur gildi við lok yfirstandandi greidds tímabils. Greitt tímabil sem þegar er hafið er ekki endurgreitt nema um annað sé samið eða lög krefjist þess.", "Verðbreytingar eru tilkynntar með að minnsta kosti 30 daga fyrirvara samkvæmt skráðum samskiptaleiðum viðskiptavinar. Þessi atriði eru nú framkvæmd með stjórnsýslulegu ferli en ekki sjálfvirkri greiðslu- eða uppsagnarvirkni."]],
        ["Takmörkuð vöktun", ["Ef skriflega er samið um takmarkaða vöktun gildir hún aðeins um tilgreindan þjónustuflokk og landsvæði. VerkRadar heldur utan um slíkt fyrirkomulag með stjórnsýslulegu ferli og getur samþykkt að hámarki tvö fyrirtæki fyrir sama skriflega umfang. Þetta er ekki fullur einkaréttur nema um það sé sérstaklega samið skriflega."]],
        ["Skyldur viðskiptavinar", ["Viðskiptavinur skal yfirfara frumgögn áður en ákvörðun er tekin, veita réttar upplýsingar um fyrirtækið, vernda innskráningarupplýsingar og nota þjónustuna með lögmætum hætti."]],
        ["Breytingar og takmörkun aðgangs", ["VerkRadar getur breytt þjónustunni eða gert tímabundin hlé vegna viðhalds, bilana eða öryggis. Aðgangur getur verið takmarkaður vegna vanskila, misnotkunar, brota á skilmálum eða öryggisáhættu. Slík ákvörðun og framkvæmd hennar er nú afgreidd stjórnsýslulega."]],
        ["Hugverkaréttur og ábyrgð", ["Viðskiptavinur fær takmarkaðan rétt til að nota þjónustuna í eigin atvinnustarfsemi á meðan samningur er í gildi. Réttindi að frumgögnum og útboðsgögnum eru áfram hjá viðkomandi útgefendum og rétthöfum.", "Að því marki sem lög heimila ber VerkRadar ekki ábyrgð á óbeinu tjóni, rekstrartapi, töpuðum frestum eða ákvörðunum sem teknar eru án yfirferðar frumgagna. Samanlögð ábyrgð takmarkast við þjónustugjöld síðustu 12 mánaða vegna viðkomandi atviks. Takmörkunin skerðir ekki réttindi sem ekki má takmarka samkvæmt lögum."]],
        ["Lög og samskipti", ["Um skilmálana gilda íslensk lög. Aðilar skulu fyrst leitast við að leysa ágreining með samkomulagi, en annars fyrir íslenskum dómstólum. Fyrirspurnir má senda á info@verkradar.is."]]
      ]
    } : {
      eyebrow: "Legal and trust",
      title: "Terms",
      intro: "These terms apply to trials and subscriptions for VerkRadar.",
      sections: [
        ["Parties and agreement", ["VerkRadar is provided by the legal entity named in the customer's quote or written agreement. A person creating or accepting access for a company confirms that they are authorised to do so.", "An agreement begins when trial access or a subscription is accepted, or otherwise confirmed in writing."]],
        ["The service", ["VerkRadar monitors active public sources and compares published opportunities with the customer's company profile. The service may include a dashboard, filters, matching, AI assistance, and manually delivered reports.", "The original source and tender documents are always authoritative for content, deadlines, and requirements."]],
        ["Service limitations", ["VerkRadar does not guarantee that every opportunity will be found, that information is always complete or current, that every match is relevant, or that a customer qualifies for or wins any contract."]],
        ["Trial, subscription, and invoicing", ["A free trial may last up to 14 days. After the trial, subscriptions are generally month-to-month with no binding period unless otherwise agreed in writing.", "Subscriptions, invoicing, and payment status are currently handled under the written agreement and an administrative process. Invoices are issued monthly in advance. Pricing is stated in the current price list, quote, or agreement, with taxes or statutory charges added where applicable. Due dates are shown on the invoice and late interest is charged under Icelandic law."]],
        ["Cancellation and price changes", ["Cancellation is processed from a written request and takes effect at the end of the current paid billing period. A billing period that has already begun is not refunded unless agreed otherwise or required by law.", "Price changes are notified at least 30 days in advance through the customer's registered contact details. These matters are currently handled administratively rather than by automated billing or cancellation controls."]],
        ["Limited monitoring", ["Where limited monitoring is agreed in writing, it applies only to the stated service category and region. VerkRadar administers this arrangement and may agree to a maximum of two companies for the same written scope. It is not full exclusivity unless separately agreed in writing."]],
        ["Customer responsibilities", ["Customers must review source documents before acting, keep company-profile information accurate, protect login credentials, and use the service lawfully."]],
        ["Changes and access restrictions", ["VerkRadar may change the service or interrupt it temporarily for maintenance, failures, or security. Access may be restricted for non-payment, misuse, breach of these terms, or a security risk. Such decisions and their implementation are currently handled administratively."]],
        ["Intellectual property and liability", ["Customers receive a limited right to use the service for their own business while the agreement remains in force. Rights in source documents and tender data remain with their publishers and owners.", "To the extent permitted by law, VerkRadar is not liable for indirect loss, business loss, missed deadlines, or decisions made without checking source documents. Total liability is limited to the service fees paid during the preceding 12 months for the relevant event. This does not limit rights that cannot lawfully be excluded."]],
        ["Law and contact", ["Icelandic law applies. The parties should first try to resolve disputes by agreement; otherwise disputes are heard by Icelandic courts. Questions can be sent to info@verkradar.is."]]
      ]
    },
    data: is ? {
      eyebrow: "Gagnaheimildir",
      title: "Gagnaheimildir",
      intro: "VerkRadar vinnur með opinberlega birt gögn um útboð, innkaup og önnur verkefni.",
      sections: [
        ["Virka heimildaskráin", ["VerkRadar sækir aðeins gögn úr þeim opinberu útboðs-, verkefna- og sveitarfélagaheimildum sem eru virkjaðar hverju sinni. Heimild og tengill á frumgögn eru birt með hverju tækifæri þegar þau liggja fyrir.", "Heimildir sem eru í skoðun, bíða leyfis eða eru ekki tæknilega virkar eru ekki kynntar sem virkar gagnaheimildir."]],
        ["Sjálfstæð þjónusta", ["VerkRadar er sjálfstæð þjónusta. Tilvísun til stofnunar, sveitarfélags eða útboðsvefs felur ekki í sér samstarf, samþykki eða opinbera tengingu við viðkomandi útgefanda."]],
        ["Takmarkanir gagna", ["Gögn geta verið seinkuð, ófullkomin, tvítekin eða breyst eftir að þau eru sótt. Sumar heimildir birta ekki alla fresti, fjárhæðir, kaupendur eða skjöl á véllesanlegu formi.", "Upprunaleg heimild og útboðsgögn eru alltaf endanleg heimild um innihald, fresti og skilyrði. Réttindi að frumgögnum og skjölum eru áfram hjá viðkomandi útgefendum og rétthöfum."]],
        ["Leiðréttingar", ["Ábendingar um rangar, úreltar eða tvíteknar upplýsingar má senda á info@verkradar.is. Láttu tengil á upprunalega heimild fylgja þegar það er mögulegt."]]
      ]
    } : {
      eyebrow: "Data sources",
      title: "Data sources",
      intro: "VerkRadar works with publicly available data about tenders, procurement, and other projects.",
      sections: [
        ["Active sources", ["VerkRadar imports data only from public tender, project, and municipal sources that are active at the relevant time. The source and a link to the original material are shown with each opportunity where available.", "Sources under review, awaiting permission, or not technically active are not presented as active data sources."]],
        ["Independent service", ["VerkRadar is an independent service. Referring to an institution, municipality, or procurement portal does not imply a partnership, endorsement, or official connection with that publisher."]],
        ["Data limitations", ["Data may be delayed, incomplete, duplicated, or changed after collection. Some sources do not publish every deadline, value, buyer, or document in a machine-readable form.", "The original source and tender documents are always authoritative for content, deadlines, and requirements. Rights in source data and documents remain with their respective publishers and owners."]],
        ["Corrections", ["Reports of incorrect, outdated, or duplicated information can be sent to info@verkradar.is. Include a link to the original source where possible."]]
      ]
    },
    security: is ? {
      eyebrow: "Öryggi",
      title: "Öryggi",
      intro: "VerkRadar lýsir hér þeim öryggisráðstöfunum sem eru staðfestar í núverandi þjónustu.",
      sections: [
        ["Tenging og hýsing", ["VerkRadar er afhent um dulkóðað HTTPS-samband og notar HSTS til að beina studdum vöfrum að öruggri tengingu. Þjónustan er hýst hjá sérhæfðum þjónustuaðilum."]],
        ["Innskráning og lotur", ["Aðgangur að viðskiptavinahluta krefst innskráningar. Auðkenning og innskráningarlotur eru notaðar til að staðfesta notanda og viðhalda aðgangi hans."]],
        ["Óinnskráður aðgangur", ["Óinnskráðir notendur hafa ekki lesaðgang að fyrirtækjagögnum, samsvörunum, skýrslum eða innsendum prufu- og tengiliðabeiðnum. Opinberar síður og innsending eyðublaða eru aðskilin frá þessum gögnum."]],
        ["Stjórnandahluti", ["Stjórnandahluti viðmótsins krefst innskráningar og er aðeins sýndur notendum sem þjónustan þekkir sem stjórnendur. Slóðin ein veitir ekki stjórnandaaðgang."]],
        ["Raunhæf öryggislýsing", ["Engin netþjónusta getur tryggt fullkomið öryggi. VerkRadar fullyrðir ekki um öryggisvottanir sem hafa ekki verið fengnar eða um varnir sem hafa ekki verið teknar í notkun."]],
        ["Tilkynna öryggisvandamál", ["Öryggisábendingar má senda á info@verkradar.is. Ekki skal senda lykilorð eða aðrar viðkvæmar innskráningarupplýsingar með tölvupósti."]]
      ]
    } : {
      eyebrow: "Security",
      title: "Security",
      intro: "This page describes security measures verified in the current service.",
      sections: [
        ["Connection and hosting", ["VerkRadar is delivered over encrypted HTTPS and uses HSTS to direct supported browsers to a secure connection. The service is hosted by specialist service providers."]],
        ["Login and sessions", ["The customer area requires login. Authentication and login sessions are used to identify users and maintain their access."]],
        ["Unauthenticated access", ["Unauthenticated users do not have read access to company data, matches, reports, or submitted trial and contact requests. Public pages and form submission are separate from those records."]],
        ["Admin area", ["The admin interface requires login and is shown only to users the service recognises as administrators. Knowing the route alone does not grant admin access."]],
        ["Realistic security statements", ["No online service can guarantee perfect security. VerkRadar does not claim certifications it has not obtained or controls that have not been put into use."]],
        ["Report a security issue", ["Security reports can be sent to info@verkradar.is. Do not send passwords or other sensitive login information by email."]]
      ]
    },
    contact: is ? {
      eyebrow: "Hafa samband",
      title: "Hafa samband",
      intro: "Viltu prófa VerkRadar, spyrja um vöktun eða senda okkur ábendingu?",
      sections: []
    } : {
      eyebrow: "Contact",
      title: "Contact",
      intro: "Want to try VerkRadar, ask about monitoring, or send us a note?",
      sections: []
    }
  };
  return pages[key];
}
