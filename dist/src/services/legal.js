export function getLegalPageData(key, language = "is") {
  const is = language === "is";
  const pages = {
    privacy: is ? {
      eyebrow: "Lög og traust",
      title: "Persónuvernd",
      intro: "Hér er útskýrt á einföldu máli hvaða gögn VerkRadar vistar og hvernig þau eru notuð til að veita þjónustuna.",
      sections: [
        ["Persónuvernd", ["VerkRadar er vöktunar- og yfirlitskerfi fyrir fyrirtæki. Kerfið notar gögn sem notandi setur inn og opinber gögn um útboð og verkefni til að hjálpa fyrirtækjum að finna það sem gæti passað."]],
        ["Hvaða gögn eru vistuð", ["VerkRadar getur vistað fyrirtækjaheiti, tengiliðanetfang, vefslóð, atvinnugrein, þjónustuflokka, staðsetningar, leitarorð, stillingar, vistuð og hunsuð verkefni, samsvaranir og yfirlit.", "Kerfið vistar einnig innskráningar- og lotugögn sem þarf til að halda notendum innskráðum og vernda aðgang."]],
        ["Innskráning og aðgangur", ["Notendur skrá sig inn með auðkenndum aðgangi. Aðgangur að mælaborði, stillingum og skýrslum er tengdur við notanda og fyrirtæki eftir því sem við á."]],
        ["Fyrirtækjaprófíll og stillingar", ["Fyrirtækjaprófíllinn er notaður til að bera opinber verkefni saman við þjónustu, svæði, lykilorð og óskir fyrirtækisins. Betri prófíll gefur yfirleitt betri samsvörun."]],
        ["Vistuð og hunsuð tækifæri", ["VerkRadar getur vistað hvaða verkefni notandi vistar, fylgist með eða hunsar. Þetta er notað til að bæta upplifun, síur og yfirlit."]],
        ["Vafrakökur og vafrageymsla", ["VerkRadar notar nauðsynlega vafrageymslu, lotugeymslu og sambærilega virkni fyrir innskráningu, Supabase Auth lotur, tungumál, stillingar og grunnvirkni appsins.", "Við gerum ekki ráð fyrir auglýsinga- eða rekjanlegri markaðssetningargeymslu í þessari útgáfu. Ef greiningar eða auglýsingatól verða síðar bætt við þarf að uppfæra þessa lýsingu."]],
        ["Hafa samband", ["Spurningar um persónuvernd eða gögn má senda á info@verkradar.is."]]
      ]
    } : {
      eyebrow: "Legal and trust",
      title: "Privacy",
      intro: "This page explains in practical terms what VerkRadar stores and how that data is used to provide the service.",
      sections: [
        ["Privacy", ["VerkRadar is a monitoring and reporting tool for businesses. It uses user-entered company data and public tender/project data to help companies find relevant opportunities."]],
        ["What data is stored", ["VerkRadar may store company name, contact email, website, industry, service categories, locations, keywords, settings, saved and ignored opportunities, matches, and reports.", "The system also stores login and session data needed to keep users signed in and protect account access."]],
        ["Login and access", ["Users log in with authenticated accounts. Access to dashboards, settings, and reports is connected to the user and company where applicable."]],
        ["Company profile and settings", ["The company profile is used to compare public opportunities against services, locations, keywords, and company preferences. A better profile usually creates better matches."]],
        ["Saved and ignored opportunities", ["VerkRadar may store which opportunities a user saves, watches, or ignores. This is used to improve the experience, filters, and reports."]],
        ["Cookies and browser storage", ["VerkRadar uses essential browser storage, session storage, and similar functionality for login, Supabase Auth sessions, language, preferences, and core app functionality.", "We do not currently claim to use advertising or marketing tracking storage in this version. If analytics or advertising tools are added later, this section should be updated."]],
        ["Contact", ["Questions about privacy or data can be sent to info@verkradar.is."]]
      ]
    },
    terms: is ? {
      eyebrow: "Lög og traust",
      title: "Skilmálar",
      intro: "Þessir skilmálar lýsa notkun VerkRadar á einföldu máli. Þeir eru ekki endanleg lögfræðiráðgjöf.",
      sections: [
        ["Skilmálar", ["Með því að nota VerkRadar samþykkir notandi að nota þjónustuna á ábyrgan hátt og staðfesta alltaf upplýsingar á upprunalegri heimild áður en brugðist er við."]],
        ["Þjónustan", ["VerkRadar vaktar opinberar heimildir, útboðsvefi, sveitarfélagssíður og aðrar heimildir þar sem það er heimilt og tæknilega mögulegt. Kerfið raðar verkefnum eftir fyrirtækjaprófíl og býr til mælaborð eða yfirlit."]],
        ["Upprunaleg gögn eru endanleg heimild", ["VerkRadar hjálpar til við að forgangsraða yfirferð opinberra tækifæra. Upprunaleg útboðsgögn, skilafrestir, kröfur og hæfisskilyrði á upprunalegri heimild eru alltaf endanleg heimild."]],
        ["Engin trygging um fullkomna vöktun", ["VerkRadar tryggir ekki að öll útboð finnist, að öll gögn séu fullkomin, að samsvörun sé alltaf rétt eða að fyrirtæki uppfylli skilyrði eða vinni verk."]],
        ["Prufuaðgangur og verð", ["Prufuaðgangur, verð, greiðslur og uppsagnir ráðast af verðsíðu, pöntunarsíðu eða skriflegu samkomulagi hverju sinni."]],
        ["Uppsögn", ["Notandi getur óskað eftir lokun eða breytingu á aðgangi. VerkRadar getur takmarkað aðgang ef þjónustan er misnotuð, greiðslur vantar eða öryggisáhætta kemur upp."]],
        ["Ábyrgðartakmörkun", ["VerkRadar ber ekki ábyrgð á töpuðum skilafrestum, röngum upplýsingum á upprunalegum heimildum, viðskiptatapi eða ákvörðunum sem teknar eru út frá yfirlitum án staðfestingar á frumgögnum."]],
        ["Hafa samband", ["Spurningar um skilmála má senda á info@verkradar.is."]]
      ]
    } : {
      eyebrow: "Legal and trust",
      title: "Terms",
      intro: "These terms describe VerkRadar use in plain language. They are not final legal advice.",
      sections: [
        ["Terms", ["By using VerkRadar, users agree to use the service responsibly and always verify information at the original source before acting."]],
        ["The service", ["VerkRadar monitors public sources, procurement portals, municipal pages, and other sources where allowed and technically feasible. The system ranks opportunities against company profiles and creates dashboards or reports."]],
        ["Original data is the final authority", ["VerkRadar helps prioritize review of public opportunities. Original tender documents, deadlines, requirements, and eligibility criteria at the original source are always the final authority."]],
        ["No guarantee of complete monitoring", ["VerkRadar does not guarantee that every tender is found, that all data is complete, that matching is always correct, or that a company is eligible for or will win any contract."]],
        ["Trial access and pricing", ["Trial access, pricing, billing, and cancellation are governed by the pricing page, order page, or written agreement in effect at the time."]],
        ["Cancellation", ["A user may request account changes or cancellation. VerkRadar may restrict access if the service is misused, payment is missing, or a security risk arises."]],
        ["Limitation of liability", ["VerkRadar is not responsible for missed deadlines, incorrect information at original sources, business losses, or decisions made from reports without checking source documents."]],
        ["Contact", ["Questions about these terms can be sent to info@verkradar.is."]]
      ]
    },
    data: is ? {
      eyebrow: "Gagnaheimildir",
      title: "Gagnaheimildir",
      intro: "VerkRadar notar opinberar heimildir til að hjálpa fyrirtækjum að finna verkefni sem gætu skipt máli.",
      sections: [
        ["Gagnaheimildir", ["Kerfið safnar og samræmir opinberar upplýsingar þar sem slíkt er heimilt og tæknilega mögulegt."]],
        ["Opinberar heimildir", ["Heimildir geta verið útboðsvefir, opinberar stofnanir, RSS straumar, sveitarfélagssíður og aðrar opinberar síður."]],
        ["Sveitarfélög og útboðsvefir", ["VerkRadar getur vaktað sveitarfélög, innkaupa- og útboðsvefi og sértækar síður fyrir framkvæmdir, þjónustu eða innkaup."]],
        ["Evrópsk útboð ef við á", ["Evrópsk útboð geta verið sótt úr TED eða sambærilegum heimildum þegar þau eiga við markaðinn og fyrirtækjaprófíla."]],
        ["Takmarkanir gagna", ["Sumar heimildir veita ekki fulla skilafresti, verðmæti, kaupanda eða útboðsgögn í véllesanlegu formi. Gögn geta verið seinkuð, ófullkomin, tvítekin eða breytt á upprunalegri síðu."]],
        ["Leiðréttingar", ["Ef þú sérð rangar eða úreltar upplýsingar má senda ábendingu á info@verkradar.is. Opnið alltaf upprunalega heimild áður en brugðist er við."]]
      ]
    } : {
      eyebrow: "Data sources",
      title: "Data sources",
      intro: "VerkRadar uses public sources to help businesses find projects that may matter.",
      sections: [
        ["Data sources", ["The system collects and normalizes public information where allowed and technically feasible."]],
        ["Public sources", ["Sources can include procurement portals, public institutions, RSS feeds, municipal pages, and other official public pages."]],
        ["Municipalities and procurement portals", ["VerkRadar may monitor municipalities, procurement/tender portals, and specific pages for construction, services, or purchasing."]],
        ["European tenders where applicable", ["European tenders may be imported from TED or similar sources when relevant to the market and company profiles."]],
        ["Data limitations", ["Some sources do not provide full deadlines, values, buyer data, or tender documents in machine-readable form. Data may be delayed, incomplete, duplicated, or changed at the original source."]],
        ["Corrections", ["If you see incorrect or outdated information, send a correction to info@verkradar.is. Always open the original source before acting."]]
      ]
    },
    security: is ? {
      eyebrow: "Öryggi",
      title: "Öryggi",
      intro: "VerkRadar notar innskráningu, aðgangsstýringu og aðskilnað gagna til að vernda fyrirtækjaupplýsingar.",
      sections: [
        ["Öryggi", ["Við reynum að halda öryggisupplýsingum hagnýtum og heiðarlegum. VerkRadar fullyrðir ekki um vottanir sem hafa ekki verið fengnar."]],
        ["Innskráning", ["Notendur skrá sig inn með auðkenndum aðgangi. Innskráning og lotur eru hluti af grunnvirkni appsins."]],
        ["Aðgangsstýring", ["Aðgangur að fyrirtækjagögnum, samsvörunum og skýrslum er aðgreindur eftir notanda og fyrirtæki þar sem það á við."]],
        ["Fyrirtækjagögn", ["Fyrirtækjaprófílar, stillingar og vistuð/hunsuð verkefni eru notuð til að veita þjónustuna og ættu ekki að vera sýnileg öðrum viðskiptavinum."]],
        ["Admin aðgangur", ["Admin verkfæri eru takmörkuð við skilgreinda stjórnendur og eru notuð til að fylgjast með heimildum, innflutningi, fyrirtækjum og handvirkri yfirferð."]],
        ["Tilkynna vandamál", ["Öryggisspurningar eða ábendingar má senda á info@verkradar.is."]]
      ]
    } : {
      eyebrow: "Security",
      title: "Security",
      intro: "VerkRadar uses authentication, access control, and data separation to protect company information.",
      sections: [
        ["Security", ["We try to keep security information practical and honest. VerkRadar does not claim certifications it has not obtained."]],
        ["Login", ["Users log in with authenticated accounts. Login and sessions are part of the app’s core functionality."]],
        ["Access control", ["Access to company data, matches, and reports is separated by user and company where applicable."]],
        ["Company data", ["Company profiles, settings, and saved/ignored opportunities are used to provide the service and should not be visible to other customers."]],
        ["Admin access", ["Admin tools are restricted to defined administrators and are used to monitor sources, imports, companies, and manual review."]],
        ["Report an issue", ["Security questions or reports can be sent to info@verkradar.is."]]
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
