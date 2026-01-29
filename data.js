const DB = {
    // === ITEMS (Loot & Werkzeuge) ===
    items: {
        // VERBRAUCHSGEGENSTÄNDE (Einmalig)
        "wifi_note": { icon: "📝", name: "WLAN-Zettel" },
        "donut": { icon: "🍩", name: "Alter Donut" },
        "energy": { icon: "⚡", name: "Energy Drink" },
        "secret_list": { icon: "📁", name: "Schwarze Liste" },
        
        // WERKZEUGE (Dauerhaft -> keep: true)
        "admin_pw": { icon: "🔑", name: "Root-Passwort", keep: true },
        "kabel": { icon: "🔌", name: "LAN-Kabel", keep: true },
        "tape": { icon: "🩹", name: "Panzertape", keep: true },
        "screw": { icon: "🪛", name: "Schraubendreher", keep: true },
        "stressball": { icon: "🔴", name: "Wut-Ball", keep: true },
        "manual": { icon: "📖", name: "Win95 Handbuch", keep: true },
        "usb_stick": { icon: "💾", name: "Boot-Stick", keep: true },
        "fire_ext": { icon: "🧯", name: "Feuerlöscher", keep: true },
        "hammer": { icon: "🔨", name: "Notfall-Hammer", keep: true },
        "zip_ties": { icon: "➰", name: "Kabelbinder", keep: true },
        "headphones": { icon: "🎧", name: "NC-Kopfhörer", keep: true }
    },
	
    // E-MAILS (Für das Popup System)
    emails: [
        { 
            sender: "HR Abteilung", 
            subj: "Kuchen in der Küche! (Bitte sauber hinterlassen)",
            body: "Liebe Kollegen, anlässlich des Geburtstags von Herrn Müller (Buchhaltung) steht Marmorkuchen in der Teeküche. \n\nHINWEIS: Wer krümelt, wird abgemahnt. Die Teller sind ABZUWASCHEN, nicht nur kurz mit kaltem Wasser abzuspülen! Wir sind hier nicht bei den Wilden.",
            opts: [
                { btn: "Sofort hinrennen!", txt: "Lecker! Aber du hast Krümel am Hemd.", f: 5, a: -5, c: 0 },
                { btn: "Beschwerde mailen", txt: "Du forderst Obst statt Kuchen. Alle hassen dich.", f: 0, a: 5, c: 0 }
            ]
        },
        { 
            sender: "Der Chef", 
            subj: "Wo sind Sie? Ich sehe Sie nicht am Platz.",
            body: "Müller! Ich stehe gerade an Ihrem Schreibtisch. Der Stuhl ist kalt. Das Terminal ist gesperrt. Wenn Sie nicht in 30 Sekunden wieder hier sind und produktiv aussehen, streiche ich Ihren Weihnachtsbonus für 2028! Sind Sie schon wieder rauchen?!",
            opts: [
                { btn: "Ehrlich: 'Klo'", txt: "Zu viel Info. Er legt angewidert auf.", f: 0, a: 0, c: 5 },
                { btn: "Lüge: 'Serverraum'", txt: "Gute Ausrede. Er glaubt es.", f: 0, a: 0, c: -5 }
            ]
        },
        { 
            sender: "Ticketsystem", 
            subj: "TICKET #9942: Maus brennt.",
            body: "PRIORITY: CRITICAL \nUSER: Gabi (Empfang) \nDESCRIPTION: 'Hilfe, aus meiner Maus kommt Rauch und es riecht nach verbranntem Plastik. Ich habe versucht, sie mit Kaffee zu löschen, jetzt funkt es blau.' \nSTATUS: OPEN",
            opts: [
                { btn: "Ticket löschen", txt: "Gelöscht. Problem gelöst (für dich).", f: 10, a: 0, c: 5 },
                { btn: "Feuerwehr rufen", txt: "Großeinsatz. Es war nur eine LED.", f: -5, a: 10, c: 10 }
            ]
        },
        { 
            sender: "Betriebsrat", 
            subj: "Einladung: 'Richtig Atmen am Arbeitsplatz'",
            body: "Namaste liebe Mit-Sklaven... äh Mitarbeiter. \n\nWir laden ein zum Workshop 'Atmen gegen den Burnout'. Wir lernen gemeinsam, wie man Wut in CO2 umwandelt. Es gibt vegane Dinkel-Kekse (glutenfrei, zuckerfrei, geschmacksneutral). Anwesenheit wird empfohlen.",
            opts: [
                { btn: "Teilnehmen", txt: "Du atmest. 30 Minuten nichts getan.", f: 15, a: -10, c: 5 },
                { btn: "Als Spam markieren", txt: "Weg damit. Zeit ist Geld.", f: 0, a: 5, c: 0 }
            ]
        },
        { 
            sender: "Facility Mgt", 
            subj: "Toiletten im 3. Stock gesperrt (Rohrbruch).",
            body: "ACHTUNG: Aufgrund eines... Vorfalls... mit einem nicht näher genannten Mitarbeiter und einer halben Rolle Papierhandtücher ist der Sanitärbereich im 3. OG gesperrt. Das Wasser steht 5cm hoch. Bitte Gummistiefel tragen oder einhalten.",
            opts: [
                { btn: "Rundmail: 'Danke Merkel'", txt: "Politische Diskussion ausgelöst. Chaos.", f: 10, a: 10, c: 10 },
                { btn: "Zur Kenntnis nehmen", txt: "Du gehst heute in den 2. Stock.", f: 0, a: 0, c: 0 }
            ]
        },
        { 
            sender: "IT-Sec", 
            subj: "Phishing-Test: Bitte hier klicken für Bonus!",
            body: "Lieber Mitarbeiter. \n\nWir haben festgestellt, dass Ihr Gehalt zu niedrig ist. Um Ihren sofortigen Bonus von 5.000 EUR zu erhalten, geben Sie bitte Ihr Windows-Passwort und den Namen Ihres ersten Haustiers auf der folgenden Seite ein: \n[LINK_ZUR_FALLE_KLICK_MICH]",
            opts: [
                { btn: "Klicken (Gier)", txt: "TEST NICHT BESTANDEN! Meldung an Chef.", f: 0, a: 10, c: 20 },
                { btn: "Melden", txt: "Vorbildlich. Du bekommst ein Sternchen.", f: 0, a: 0, c: -5 }
            ]
        },
        { 
            sender: "Azubi Kevin", 
            subj: "Hilfe!! Mein PC macht komische Geräusche",
            body: "Duuu? Mein PC macht so 'Krrrrtzzz Krrrrtzz' Geräusche und riecht komisch nach Strom. Ich hab mal fest dagegen getreten, jetzt raucht er ein bisschen. Ist das ein neues Feature? Soll ich Wasser drüberkippen?",
            opts: [
                { btn: "Antwort: 'Lauf weg!'", txt: "Kevin rennt schreiend raus.", f: 5, a: 0, c: 5 },
                { btn: "Hingehen", txt: "Es war der Lüfter. Du hast es gefixt.", f: -5, a: -5, c: -5 }
            ]
        },
        { 
            sender: "Vorstand (Verteiler: Alle)", 
            subj: "WG: Kündigungswelle Q4 (VERTRAULICH)",
            body: "Von: CEO \nAn: HR-Leitung \n\nWG: Sparmaßnahmen Q4 -- STRENG GEHEIM -- \n\nAnbei die Liste der 50 Mitarbeiter, die wir nächsten Monat entlassen müssen, um meinen Bonus zu sichern. Bitte diskret behandeln... \n\n(Ups, falscher Verteiler? Ignorieren Sie diese Mail!)",
            opts: [
                { btn: "Reply-All: 'WAS?!'", txt: "Panik in der ganzen Firma. Chef tobt.", f: 0, a: 20, c: 50 },
                { btn: "Löschen & Schweigen", txt: "Du weißt zu viel. Aber du lebst sicher.", f: 0, a: -5, c: -5 }
            ]
        },
        { 
            sender: "Chantal (Privat)", 
            subj: "Re: Wochenende",
            body: "Hey Schatz, der Chef ist so ein Idiot. Treffen wir uns im Archiv? Ich habe Kaffee und Kekse geschmuggelt. Niemand wird uns zwischen den Akten von 1990 finden. 😘", 
            opts: [
                { btn: "Petzen (Weiterleiten)", txt: "Chantal bekommt Ärger. Du bist gemein.", f: 0, a: -10, c: -10 },
                { btn: "Antwort: 'Falsche Adresse'", txt: "Peinlich berührt. Sie meidet dich.", f: 0, a: 0, c: 0 }
            ]
        },
        { 
            sender: "HR Compliance Bot", 
            subj: "DRINGEND: E-Learning 'Richtiges Sitzen' überfällig",
            body: "Sehr geehrter Mitarbeiter, unser System zeigt an, dass Sie das Pflichtmodul 'Ergonomie am Arbeitsplatz Teil 4b: Der perfekte 90-Grad-Winkel' noch nicht absolviert haben. Das Video dauert 45 Minuten und kann nicht übersprungen werden. Bitte erledigen Sie dies bis EOB, andernfalls wird Ihr Zugang gesperrt.",
            opts: [
                { btn: "Video laufen lassen", txt: "Du lässt das Video im Hintergrund laufen. Der Ton nervt, aber du bist compliant.", f: 10, a: 5, c: -5 },
                { btn: "Als 'Erledigt' markieren (Hack)", txt: "Du manipulierst die Datenbank. Risiko, aber spart Zeit.", f: 0, a: -5, c: 5 },
                { btn: "Löschen", txt: "Ignoriert. Die nächste Mahnung kommt bestimmt.", f: 0, a: 0, c: 10 }
            ]
        },
        { 
            sender: "Verteiler: ALLE (Re: Re: Re: Katze)", 
            subj: "AW: AW: AW: Wer vermisst 'Mimi'?",
            body: "BITTE NEHMEN SIE MICH AUS DIESEM VERTEILER!!!! ICH HABE KEINE KATZE!!! DAS IST EINE ARBEITSE-MAIL!!! (Vorherige Nachricht von Gabi: 'Oh wie süß, ist die flauschig!'). (Vorherige Nachricht von Klaus: 'Mimi ist wieder da, danke an alle!').",
            opts: [
                { btn: "Reply-All: 'RUHE!'", txt: "Du hast zur Eskalation beigetragen. Jetzt antworten 50 Leute 'Hör auf, an alle zu antworten!'. Mailserver raucht.", f: 0, a: 20, c: 10 },
                { btn: "Filter-Regel erstellen", txt: "Du filterst 'Mimi' direkt in den Papierkorb. Himmlische Ruhe.", f: -5, a: -10, c: 0 }
            ]
        },
        { 
            sender: "Chantal (Marketing)", 
            subj: "Wording Check - ASAP!!!",
            body: "Hiiii! 👋 Wir drucken gleich die Flyer für die Messe. Kannst du kurz drüberschauen? Da steht: 'Unsere Cloud-Lösung synergiert mit der Blockchain-KI, um das WLAN-Kabel zu optimieren.' Klingt das techy genug? Brauche das GO in 2 Minuten!!! 😘",
            opts: [
                { btn: "Antwort: 'Perfekt!'", txt: "Du hast den Unsinn durchgewunken. Die IT-Community wird uns auslachen, aber Chantal ist glücklich.", f: 10, a: -5, c: 0 },
                { btn: "Korrigieren (Aufwand)", txt: "Du erklärst ihr, dass es keine WLAN-Kabel gibt. Sie versteht es nicht. 'Aber das klingt doch gut!'", f: -10, a: 10, c: 0 }
            ]
        },
        { 
            sender: "Hausmeister Krause", 
            subj: "Kühlschrank Etage 3",
            body: "Moin. Ich habe im Kühlschrank eine Tupperdose gefunden, auf der steht 'Mittagessen 2019'. Der Inhalt hat mittlerweile Pelz und knurrt mich an, wenn ich das Licht anmache. Der Besitzer möge sich bitte mit einem Flammenwerfer bei mir melden, sonst entsorge ich das samt Kühlschrank.",
            opts: [
                { btn: "Das ist meins!", txt: "Du rettest dein... was auch immer das war. Es riecht übel.", f: 0, a: 5, c: 0 },
                { btn: "Ignorieren", txt: "Nicht dein Problem. Soll es doch brennen.", f: 5, a: 0, c: 0 }
            ]
        },
        { 
            sender: "Der CEO (Dr. Wichtig)", 
            subj: "Vision 2030 - Ihre Ideen!",
            body: "Liebes Team, ich hatte heute Nacht im Wellness-Retreat eine Vision. Wir müssen 'Agiler' werden. Ich möchte, dass jeder von Ihnen mir bis 12 Uhr ein 10-seitiges Konzept schickt, wie wir KI nutzen können, um Kaffee zu sparen. Denken Sie 'Out of the Box'! Go, Go, Go!",
            opts: [
                { btn: "ChatGPT nutzen", txt: "Du lässt eine KI das Bullshit-Konzept schreiben. Der Chef ist begeistert: 'Visionär!'", f: 10, a: -5, c: -10 },
                { btn: "Ehrlich antworten", txt: "Du schreibst: 'Das ist Unsinn.' Der Chef merkt sich deinen Namen (negativ).", f: 0, a: 10, c: 20 },
                { btn: "Löschen", txt: "Ignoriert. Hoffentlich vergisst er es wieder.", f: 0, a: 0, c: 5 }
            ]
        },
        { 
            sender: "H. Wuttke (Buchhaltung)", 
            subj: "HILFE! EXCEL IST ROT!",
            body: "Herr IT!!! Ich habe nichts gemacht, ehrlich! Ich wollte nur die Spalte G löschen und jetzt ist alles rot und blinkt! Die Bilanz muss in 10 Minuten raus! Wenn das weg ist, bin ich tot! Kommen Sie sofort her! Warum passiert das immer mir?!",
            opts: [
                { btn: "Ticket verlangen", txt: "Du schreibst zurück: 'Bitte Ticket aufmachen.' Eiskalt.", f: 5, a: -5, c: 5 },
                { btn: "Hingehen", txt: "Er saß auf der 'Entf'-Taste. Problem gelöst in 2 Sekunden.", f: -10, a: 10, c: -5 }
            ]
        },
        { 
            sender: "Betriebsrat", 
            subj: "Einladung: Stuhlkreis 'Achtsamkeit'",
            body: "Liebe Kollegen, aufgrund des hohen Stresslevels bieten wir heute um 14 Uhr einen Stuhlkreis an. Wir werden gemeinsam atmen und unsere Namen tanzen. Es gibt vegane Dinkelkekse. Teilnahme ist freiwillig (aber wird notiert).",
            opts: [
                { btn: "Hingehen (Pause)", txt: "Du hast 1 Stunde geatmet. Faulheit +20. Aber die Kekse waren trocken.", f: 20, a: -10, c: 5 },
                { btn: "Als Spam markieren", txt: "Weg damit. Ich habe echte Arbeit.", f: 0, a: 5, c: 0 }
            ]
        },
        { 
            sender: "IT-Security (Auto)", 
            subj: "Passwort abgelaufen",
            body: "Ihr Passwort ist seit 90 Tagen gültig. Bitte ändern. Neue Richtlinie: Mindestens 32 Zeichen, 1 Sonderzeichen, 1 Hieroglyphe, 1 Tropfen Blut. Das neue Passwort darf nicht identisch mit den letzten 500 Passwörtern sein.",
            opts: [
                { btn: "Passwort123!", txt: "System: 'Zu unsicher'. Aggro steigt.", f: 0, a: 10, c: 0 },
                { btn: "Kopf auf Tastatur hauen", txt: "System: 'Passwort akzeptiert'. Perfekt.", f: 0, a: -5, c: 0 }
            ]
        },
        { 
            sender: "Tante Erna (Privat)", 
            subj: "FWD: FWD: FWD: Lustig!!!!",
            body: "Schau mal Junge, das musst du sehen! 😂😂😂 Die Katze fällt vom Stuhl! Ich habe mich so weggeschmissen! Zeig das mal deinen Kollegen! LG Tante Erna. PS: Wie geht das Internet an? (Anhang: lustig.ppt.exe - 50MB)",
            opts: [
                { btn: "Anhang öffnen", txt: "VIRUS-ALARM! Es war Malware. Der Scanner schreit. Du musst den PC bereinigen.", f: -20, a: 20, c: 20 },
                { btn: "Nett antworten", txt: "Du lügst: 'Haha, sehr lustig Tante Erna.'", f: 0, a: -5, c: 0 }
            ]
        },
        { 
            sender: "Unbekannt", 
            subj: "Ihr Paket konnte nicht zugestellt werden",
            body: "Hallo Kunde. Ihr Paket liegt im Zoll. Bitte überweisen Sie 2,50€ Gebühr über diesen Link, sonst verbrennen wir ihr Paket. Link: www.totally-legit-dhl-scam.ru",
            opts: [
                { btn: "Klicken (Gier)", txt: "Phishing-Seite! Du hast fast deine Daten eingegeben. IT-Sec hat es gemerkt.", f: 0, a: 10, c: 15 },
                { btn: "Löschen", txt: "Netter Versuch.", f: 0, a: 0, c: 0 },
                { btn: "Antworten: 'Behaltet es'", txt: "Die Mail kam zurück (Mail Delivery Failure).", f: 0, a: 5, c: 0 }
            ]
        },
    ],

    // SPEZIAL (Mittagspause & Fallback)
    special: {
        lunchEvents: [
            {
                id: "lunch_canteen",
                title: "MITTAG: KANTINE",
                text: "Es gibt heute 'Jägerschnitzel Surprise'. Die Meute drängelt. Was tust du?",
                opts: [
                    { t: "Mit den Kollegen essen", m: 45, f: -5, a: 10, c: -5, r: "Smalltalk über das Wetter. Langweilig, aber sozial erwünscht." },
                    { t: "Alleine essen (Handy)", m: 30, f: 5, a: -10, c: 0, r: "Du hast Memes geschaut. Akku ist jetzt leerer, aber du bist entspannt." }
                ]
            },
            {
                id: "lunch_desk",
                title: "MITTAG: AM PLATZ",
                text: "Du hast keine Lust auf Menschen. Du hast noch ein altes Pausenbrot.",
                opts: [
                    { t: "Durcharbeiten", m: 30, f: -10, a: 20, c: -10, r: "Der Chef lobt deinen Einsatz. Du hast Krümel in der Tastatur." },
                    { t: "Netflix gucken", m: 60, f: 20, a: -20, c: 10, r: "Chef hat dich gesehen. 'Ist das hier ein Kino?!' Aber die Folge war gut." }
                ]
            },
            {
                id: "lunch_vegan",
                title: "MITTAG: VEGANER TAG",
                text: "In der Kantine gibt es nur Tofu-Klumpen. Die Stimmung im Team ist aggressiv.",
                opts: [
                    { t: "Mitessen und meckern", m: 45, f: 0, a: 15, c: 0, r: "Gemeinsames Meckern verbindet das Team." },
                    { t: "Zum Döner-Mann rennen", m: 45, f: 5, a: -20, c: 5, r: "Du kommst mit Knoblauchfahne zurück. Du bist glücklich, die Kollegen rümpfen die Nase." }
                ]
            },
            {
                id: "lunch_client_emergency",
                title: "MITTAG: DER CHEF-ALARM",
                text: "Du packst gerade dein Brot aus, da steht der Chef atemlos vor dir. 'Müller! Kunde Schmitz hat totalen Internet-Ausfall! Sie müssen SOFORT hin! Das ist ein Notfall! Das Brot können Sie im Auto essen!'",
                opts: [
                    { t: "Hinfahren (Hungrig & Wütend)", m: 60, f: -20, a: 25, c: -15, r: "Du standest im Stau. Beim Kunden war nur der Stecker gezogen. Du bist verhungert, aber der Chef feiert deinen Einsatz." },
                    { t: "Verweigern: 'Es ist PAUSE!'", m: 30, f: 5, a: -10, c: 15, r: "Der Chef läuft rot an. 'So eine Arbeitsmoral merke ich mir!' Er rennt wütend selbst los. Dein Essen schmeckt nach Sieg." }
                ]
            },
            {
                id: "lunch_pizza",
                title: "MITTAG: PIZZA-DISKUSSION",
                text: "Das Team will Pizza bestellen. Die Diskussion dauert schon 20 Minuten. 'Ananas gehört nicht drauf!' vs 'Ich bin laktoseintolerant!'. Deine Pause verrinnt.",
                opts: [
                    { t: "Machtwort: 'Salami für alle!'", m: 45, f: -5, a: 10, c: 0, r: "Du hast bestellt. Die Veganer hassen dich, aber du bist satt. Aggro steigt durch das Gemecker." },
                    { t: "Aussteigen & Brot essen", m: 30, f: 0, a: -5, c: 0, r: "Du isst dein trockenes Brot, während die anderen noch streiten. Friedlich, aber traurig." }
                ]
            },
            {
                id: "lunch_business",
                title: "MITTAG: GESCHÄFTSESSEN",
                text: "Ein schmieriger Vertreter lädt dich zum Lunch ein. Es gibt teures Sushi. Er will dir aber eigentlich nur eine völlig überteuerte Firewall-Lösung andrehen.",
                opts: [
                    { t: "Gratis Essen abgreifen", m: 90, f: 20, a: -10, c: -5, r: "Das Sushi war göttlich. Du hast ihm versprochen, 'mal drüber nachzudenken' (Lüge). Pause überzogen." },
                    { t: "Dankend ablehnen", m: 30, f: -5, a: 0, c: 5, r: "Du bleibst im Büro. Deine Integrität ist gewahrt, aber dein Magen knurrt." }
                ]
            },
            {
                id: "lunch_doener",
                title: "MITTAG: DÖNER-TAG",
                text: "Der Döner-Laden um die Ecke hat Jubiläum. Döner für 2,50€. Die Schlange geht bis auf die Straße. Der Duft ist verführerisch.",
                opts: [
                    { t: "Anstellen (Gier)", m: 50, f: 10, a: 15, c: 5, r: "Du hast 40 Minuten gewartet und 5 Minuten geschlungen. Du kommst zu spät und riechst extrem nach Knoblauch." },
                    { t: "Verzichten", m: 20, f: 0, a: 5, c: 0, r: "Du holst dir ein belegtes Brötchen. Es schmeckt nach Pappe. Der Neid auf die Döner-Esser nagt an dir." }
                ]
            },
            {
                id: "lunch_sleep",
                title: "MITTAG: SUPPENKOMA",
                text: "Du hast zu viel gegessen. Das 'Schnitzel-Koma' setzt ein. Deine Augenlider wiegen Tonnen. Der Serverraum ist schön kühl...",
                opts: [
                    { t: "Power-Nap im Serverraum", m: 45, f: 25, a: -20, c: 10, r: "Du bist eingeschlafen! Du wachst mit Tastatur-Abdruck im Gesicht auf. Hoffentlich hat dich keiner gesehen." },
                    { t: "Doppelter Espresso", m: 10, f: -5, a: 5, c: 0, r: "Das Herz rasen setzt ein. Du bist wach, aber deine Hände zittern. Produktivität: Fragwürdig." }
                ]
            },
        ],
        empty_pool: {
            id: "fallback_empty",
            title: "Ruhe vor dem Sturm",
            text: "Aktuell passiert nichts. Alle sind wohl glücklich (oder tot). Du starrst eine Fliege an.",
            opts: [
                { t: "Däumchen drehen", m: 20, f: 5, a: -5, c: 0, r: "Zeit vergeht langsam." }
            ]
        }
    },

    // BOSS FIGHTS (Zeitdruck Events)
    bossfights: [
        {
            id: "boss_ransomware",
            title: "🚨 RANSOMWARE ANGRIFF 🚨",
            text: "EIN TOTENKOPF AUF DEM HAUPTSERVER! 'Senden Sie 10 Bitcoin oder alles wird gelöscht'. Der Countdown läuft! (10 Sekunden)",
            timer: 10, 
            opts: [
                { t: "Stecker ziehen!", m: 10, f: -10, a: 20, c: 10, r: "Brachial, aber wirksam. Server ist aus. Daten gerettet (vielleicht)." },
                { t: "Admin-Code eingeben", req: "admin_pw", m: 5, f: 0, a: -10, c: -20, r: "Profi-Move! Angriff abgewehrt. Held der Firma!" }
            ],
            fail: { m: 30, f: 0, a: 50, c: 50, r: "ZU LANGSAM! Daten verschlüsselt. Chef tobt!" }
        },
        {
            id: "boss_fire",
            title: "🔥 SERVER BRAND 🔥",
            text: "Rauch im Serverraum! Ein Kondensator ist geplatzt! Flammen schlagen hoch! Handeln Sie!",
            timer: 8,
            opts: [
                { t: "Feuerlöscher benutzen", req: "fire_ext", m: 30, f: -10, a: 10, c: -20, r: "Feuer gelöscht. Du hustest, aber bist ein Held." },
                { t: "Wegrennen und Alarm drücken", m: 60, f: 10, a: 0, c: 10, r: "Feuerwehr kommt. Büro evakuiert. Du hast Pause." }
            ],
            fail: { m: 120, f: -20, a: 30, c: 40, r: "SPRINKLERANLAGE AKTIV! Alles ist nass. Totalschaden." }
        },
		{
            id: "boss_stream",
            title: "☠️ CEO LIVE-STREAM FAIL ☠️",
            text: "Der CEO präsentiert live vor 5000 Investoren. Das Bild friert ein! Er ruft dich auf dem Handy an und brüllt: 'MACHEN SIE DASS ES GEHT! JETZT SOFORT!'",
            timer: 12,
            opts: [
                { t: "Backup-Leitung schalten", req: "admin_pw", m: 5, f: -10, a: 0, c: -20, r: "Profi-Reaktion! Der Stream läuft wieder in 4K. Der CEO wirkt erleichtert (und schwitzt)." },
                { t: "Qualität auf 'Kartoffel' (240p) setzen", m: 5, f: 5, a: 0, c: 10, r: "Es läuft wieder flüssig. Aber der CEO sieht aus wie eine Lego-Figur. Die Investoren lachen." }
            ],
            fail: { m: 20, f: 0, a: 40, c: 60, r: "STREAM ABGEBROCHEN. Aktienkurs fällt um 10%. Der Chef kommt persönlich runter..." }
        },
        {
            id: "boss_ddos",
            title: "🧟 ZOMBIE BOTNET ANGRIFF 🧟",
            text: "ALARM! Millionen von gehackten Kühlschränken greifen unsere Webseite an! Die Firewall glüht! Traffic bei 5000%!",
            timer: 15,
            opts: [
                { t: "Geo-Blocking aktivieren", m: 10, f: -5, a: 5, c: -5, r: "Zack! Der ganze Traffic aus Übersee ist geblockt. Die Seite läuft wieder. Kollateralschaden gering." },
                { t: "Stecker vom Router ziehen", m: 5, f: 10, a: -5, c: 20, r: "Der Angriff ist gestoppt. Aber wir sind offline. Technisch gesehen ein Erfolg, wirtschaftlich eine Katastrophe." }
            ],
            fail: { m: 60, f: -10, a: 30, c: 40, r: "SERVER ABGESTÜRZT. Die Seite ist down. Auf Twitter trendet #GlobalCorpFail." }
        },
        {
            id: "boss_heat",
            title: "❄️ KLIMAANLAGE TOTALAUSFALL ❄️",
            text: "Stille im Serverraum. Die Kühlung ist tot. Die Temperatur steigt rasant! 40°C... 45°C... Bei 50°C schmelzen die CPUs!",
            timer: 10,
            opts: [
                { t: "Fenster einschlagen", req: "hammer", m: 5, f: 0, a: 20, c: 10, r: "Klirr! Eiskalte Luft strömt herein (und ein paar Tauben). Hardware gerettet, Fenster kaputt." },
                { t: "Not-Aus drücken", m: 5, f: 5, a: 0, c: 15, r: "Alles fährt runter. Die Stille ist gespenstisch. Hardware sicher, aber die Firma steht still." }
            ],
            fail: { m: 120, f: -20, a: 50, c: 50, r: "KERN-SCHMELZE! Es riecht nach verschmortem Plastik. Der Feuermelder geht los. Renn!" }
        },
		{
            id: "boss_db_purge",
            title: "💀 DROP DATABASE PROD 💀",
            text: "ALARM! Der Azubi Kevin hat 'aus Versehen' das Lösch-Skript auf der LIVE-DATENBANK gestartet! Die Balken werden rot! Kundendaten verschwinden im Sekundentakt! (8 Sekunden)",
            timer: 8,
            opts: [
                { t: "Not-Aus (Kabel kappen)", req: "kabel", m: 5, f: -10, a: 20, c: 10, r: "Du hast das Haupt-Glasfaserkabel mit bloßen Händen rausgerissen. Die Löschung stoppt. Die Firma ist offline, aber die Daten sind noch da (teilweise)." },
                { t: "Admin-Override", req: "admin_pw", m: 5, f: 5, a: -10, c: -20, r: "Mit zitternden Händen tippst du das Root-Passwort. 'ROLLBACK COMPLETE'. Du bist ein Gott. Kevin weint." }
            ],
            fail: { m: 120, f: -50, a: 50, c: 100, r: "DATENBANK LEER. Die Firma existiert digital nicht mehr. Du musst Backups von 1998 einspielen." }
        },
        {
            id: "boss_tiktok",
            title: "🤳 TIKTOK INVASION 🤳",
            text: "Ein bekannter Influencer ist in den Serverraum eingedrungen! 'Yo Leute, checkt mal diese blinkenden Lichter! Ich zieh mal hier dran für den Prank!' Er greift nach dem Haupt-Switch!",
            timer: 12,
            opts: [
                { t: "Fesseln (Bürgerfestnahme)", req: "zip_ties", m: 15, f: -5, a: -20, c: 10, r: "Du hast ihn mit Kabelbindern an ein Rack gefesselt, bis die Security kam. Das Video geht viral: 'IT-Guy vs. Influencer'." },
                { t: "Mit Feuerlöscher 'einnebeln'", req: "fire_ext", m: 10, f: 0, a: 30, c: 0, r: "Du hast ihn komplett eingeweißt. Er hustet und rennt weg. Die Server sind staubig, aber sicher." }
            ],
            fail: { m: 60, f: 0, a: 50, c: 50, r: "ER HAT DEN STECKER GEZOGEN! 'Ouuuups, war nur ein Prank Bro!'. Das Internet ist weg. Du gehst viral als 'Der heulende Admin'." }
        },
        {
            id: "boss_ups_battery",
            title: "🔋 USV BATTERIE SÄURE 🔋",
            text: "Die Notstrom-Batterie bläht sich auf wie ein Ballon! Es zischt! Säure droht auszutreten und durch den Doppelboden in die Etage darunter zu tropfen (Chefbüro)!",
            timer: 10,
            opts: [
                { t: "Abdichten (MacGyver)", req: "tape", m: 10, f: 0, a: 0, c: -10, r: "Du wickelst eine ganze Rolle Panzertape drum. Es hält den Druck... gerade so. Zeitbombe entschärft (für heute)." },
                { t: "Aus dem Fenster werfen", m: 5, f: 10, a: 20, c: 20, r: "Du hast das 20kg Teil durchs geschlossene Fenster geworfen. Es explodiert auf dem Parkplatz. Besser dort als hier." }
            ],
            fail: { m: 240, f: -30, a: 40, c: 80, r: "SÄURE-LECK! Es frisst sich durch den Boden. Es tropft auf den Schreibtisch des Chefs. Der Geruch ist bestialisch." }
        },
        {
            id: "boss_skynet_lock",
            title: "🔒 TÜREN VERRIEGELT 🔒",
            text: "Fehlfunktion im Sicherheitssystem! Die Brandschutztüren schließen sich. Der Sauerstoff wird abgesaugt (Halon-Anlage). Du hast 10 Sekunden, bevor du ohnmächtig wirst!",
            timer: 10,
            opts: [
                { t: "Tür aufschrauben", req: "screw", m: 10, f: -10, a: 0, c: 0, r: "In Rekordzeit hast du das Panel abgeschraubt und die Drähte kurzgeschlossen. Tür offen. Du lebst!" },
                { t: "Scheibe einschlagen", req: "hammer", m: 5, f: 0, a: 10, c: 10, r: "Klirr! Du kletterst durch die Scherben. Freiheit! Aber du blutest leicht." }
            ],
            fail: { m: 120, f: 20, a: 0, c: 0, r: "OHNMACHT. Du wachst im Krankenhaus auf. Die Feuerwehr hat dich gerettet. Man nennt dich jetzt 'Dornröschen'." }
        },
        {
            id: "boss_coffee_crisis",
            title: "☕ KAFFEE-MASCHINE EXPLOSION ☕",
            text: "NICHT DER SERVERRAUM! SCHLIMMER! Die Industriemaschine in der Küche vibriert und sprüht heißen Dampf! Der Druckkessel steht kurz vor dem Bersten! Ohne Kaffee stirbt die Abteilung!",
            timer: 9,
            opts: [
                { t: "Überdruckventil öffnen", req: "screw", m: 5, f: -5, a: -10, c: -5, r: "Pfeifend entweicht der Druck. Du bist der Held der Belegschaft. Applaus im Flur!" },
                { t: "Stecker ziehen & wegrennen", m: 5, f: 10, a: 10, c: 10, r: "Die Maschine beruhigt sich langsam. Aber: KEIN KAFFEE MEHR HEUTE. Die Kollegen schauen dich mit mordlustigen Augen an." }
            ],
            fail: { m: 60, f: 0, a: 50, c: 20, r: "KA-WUMM! Die Küche ist voller Kaffeesatz. Die Maschine ist Schrott. Die Moral der Firma sinkt auf 0. Es herrschen anarchische Zustände." }
        }
    ],

// === ANRUFE ===
    calls: [
        {
            id: "call_meyer",
            title: "Frau Meyer (Lohnbuchhaltung)",
            text: "Herr IT! Mein Bildschirm ist schwarz! Ich habe nichts gemacht, ehrlich! Die Gehälter müssen bis 12 Uhr raus, sonst lynchen mich die Kollegen! Ich drücke Tasten, aber es piept nur! HILFE!",
            opts: [
                { t: "Fragen: 'Ist der PC an?'", m: 10, f: 10, a: 10, c: 5, r: "Stille am anderen Ende... Dann ein leises Klicken. 'Oh, jetzt geht es.' Sie legt kommentarlos auf." },
                { t: "Lügen: 'Globales Update'", m: 5, f: 20, a: 0, c: 10, r: "Sie seufzt erleichtert. 'Na gut, dann mache ich erst mal Mittag.' Du hast das Problem nur verschoben." },
                { t: "Hingehen & Einschalten", m: 45, f: -20, a: -10, c: -5, r: "Du bist hingegangen. Der Stecker war locker. Du fühlst dich leer, aber produktiv." }
            ]
        },
        {
            id: "call_kevin",
            title: "Kevin (Azubi)",
            text: "Duuu? Ich hab glaub ich das Internet gelöscht. Ich wollte Fortnite installieren und hab den Ordner 'System32' in den Papierkorb geschoben, um Platz zu machen. Jetzt ist der Bildschirm blau und schreit mich an.",
            opts: [
                { t: "Anschreien (Stressabbau)", m: 15, f: 0, a: 25, c: 0, r: "Du brüllst ins Telefon. Kevin weint leise. Deine Wut sinkt leicht, aber das Problem bleibt bestehen." },
                { t: "Format C: befehlen", m: 30, f: 10, a: 0, c: 5, r: "Kevin formatiert den PC. Er ist den ganzen Tag beschäftigt und lernt eine Lektion fürs Leben." },
                { t: "Retten (Arbeit)", m: 90, f: -30, a: 10, c: -10, r: "Du hast den PC neu aufgesetzt. 1,5 Stunden Lebenszeit verschwendet. Kevin fragt, ob er jetzt Minecraft installieren darf." }
            ]
        },
        {
            id: "call_ceo",
            title: "CEO Dr. Wichtig",
            text: "Müller! Ich bin am Flughafen. Mein iPad geht nicht! Ich drücke den Knopf und nichts passiert! FIXEN SIE DAS REMOTE! SOFORT! Ich verliere hier Millionen!",
            opts: [
                { t: "Stressball kneten", req: "stressball", m: 60, f: -10, a: -10, c: -10, r: "Du bleibst ruhig, während er schreit. Es war nur der Akku." },
                { t: "Ist der Akku leer?", m: 60, f: -10, a: 30, c: -10, r: "Es war der Akku. Er hat kein Kabel dabei und gibt dir die Schuld. Er schreit dich 10 Min an, warum du nicht hellsehen konntest." },
                { t: "Lüge: 'Sonnenwinde stören'", m: 5, f: 30, a: 0, c: 25, r: "Er glaubt es sofort. 'Verdammte Technik!' Er kauft sich eine Zeitung. Risiko: Hoch, aber erfolgreich." }
            ]
        },
        {
            id: "call_markus",
            title: "Vertriebsleiter Markus",
            text: "ICH KANN MEINE E-MAILS NICHT DRUCKEN! WENN ICH DAS ANGEBOT NICHT IN 5 MINUTEN AUF PAPIER HABE, KOSTET DAS DIE FIRMA EINE MILLION EURO! KOMMEN SIE HER!",
            opts: [
                { t: "Mit Panzertape fixen", req: "tape", m: 15, f: -5, a: -5, c: -5, r: "Du hast die Papierkassette mit Tape festgeklebt. Es hält... vorerst. Markus grunzt zufrieden." },
                { t: "Ist Papier im Drucker?", m: 10, f: -5, a: 20, c: -5, r: "Nein, war keins drin. Er entschuldigt sich natürlich nicht, sondern sagt: 'Das ist Ihre Aufgabe!'" },
                { t: "PDF per Mail senden", m: 5, f: 10, a: 0, c: 5, r: "Er versteht nicht, wie das geht. 'Ich will Papier!!' Du legst genervt auf." }
            ]
        },
        {
            id: "call_sekretary",
            title: "Die Sekretärin (Wütend)",
            text: "Der Drucker streikt schon wieder! Er macht Geräusche wie eine Kaffeemühle! Ich habe seit heute morgen keinen Kaffee und jetzt das! Ich raste gleich aus!",
            opts: [
                { t: "Donut anbieten", req: "donut", m: 10, f: 10, a: -20, c: 5, r: "Der Donut hat sie beruhigt. Sie isst und vergisst den Drucker. Problem (sozial) gelöst." },
                { t: "Mit Schraubendreher öffnen", req: "screw", m: 25, f: -10, a: 0, c: -5, r: "Du hast eine Büroklammer aus dem Walzwerk geholt. Profi-Arbeit." },
                { t: "Technischen Vortrag halten", m: 30, f: -5, a: 30, c: 0, r: "Sie hat dich angeschrien, weil sie Hunger hat. Du bist geflohen." }
            ]
        },
        {
            id: "call_egon",
            title: "Hausmeister Egon",
            text: "Im Serverraum tropft es von der Decke. Das Wasser ist neongrün. Soll ich Eimer drunterstellen oder ist das Kühlflüssigkeit von den Aliens?",
            opts: [
                { t: "Sofort hinrennen!", m: 45, f: -20, a: 20, c: -15, r: "Es war Energy-Drink vom Stockwerk drüber. Ein Azubi hat gekleckert. Server gerettet." },
                { t: "Egal, lass tropfen", m: 5, f: 30, a: 0, c: 40, r: "Ein Switch ist kurzgeschlossen. Das Internet in Etage 3 ist weg. Ups." }
            ]
        },
        {
            id: "call_unknown",
            title: "Unbekannter User",
            text: "*Schweres Atmen* ... 'Hallo? Mein Drucker druckt nur schwarz. Ich habe aber weißes Papier eingelegt und will weiße Schrift auf schwarzem Hintergrund! Wie stelle ich den Toner um?'",
            opts: [
                { t: "Handbuch zitieren", req: "manual", m: 10, f: 0, a: -5, c: 0, r: "Du liest Seite 402 vor. Er schläft ein. Problem gelöst." },
                { t: "Physik erklären", m: 20, f: -5, a: 15, c: 0, r: "Er versteht es nicht. Er fragt, ob er weißen Toner im Baumarkt kaufen soll." },
                { t: "Auflegen", m: 2, f: 10, a: -5, c: 5, r: "Klick. Stille. Manchmal ist Auflegen die einzige Lösung für den Geisteszustand." }
            ]
        },
        {
            id: "call_chantal",
            title: "Chantal (Marketing)",
            text: "Wieso ist Zalando gesperrt? Ich muss... Recherche machen! Für Trends! Mach das auf, sonst sag ich dem Chef, du guckst Pornos auf der Arbeit!",
            opts: [
                { t: "ERPRESSEN (Schwarze Liste)", req: "secret_list", m: 5, f: 0, a: -10, c: -10, r: "Du erwähnst beiläufig ihre gefälschten Reisekostenabrechnungen aus der Akte. Sie wird kreidebleich und legt sofort auf. Sieg!" },
                { t: "Freischalten (Erpressung)", m: 10, f: 15, a: 10, c: 20, r: "Sie shoppt jetzt Schuhe. Du hast deine Ruhe, aber das Sicherheitsrisiko ist enorm. Wenn das rauskommt..." },
                { t: "Richtlinie zitieren", m: 30, f: -5, a: 20, c: 0, r: "Du hast 30 Minuten diskutiert. Sie hat dich 'Spießer' genannt und aufgelegt." }
            ]
        },
        {
            id: "call_sec",
            title: "IT-Sicherheit (Auto-Alert)",
            text: "WARNUNG: Jemand aus der Buchhaltung versucht, 'Bier_Brauen_Simulator_Crack.exe' herunterzuladen. Der Virenscanner schlägt Alarm.",
            opts: [
                { t: "Blockieren & Melden", m: 15, f: -5, a: 0, c: -10, r: "Der User ruft wütend an und behauptet, es sei für die Arbeit. Du bleibst hart." },
                { t: "Zulassen (Sympathie)", m: 5, f: 10, a: -5, c: 20, r: "Du hast einen neuen Freund in der Buchhaltung, aber ein riesiges Sicherheitsrisiko geschaffen." }
            ]
        },
        {
            id: "call_kevin2",
            title: "Praktikant Kevin (Wieder)",
            text: "Du, ich hab das Internet kaputt gemacht. Ich brauch das Admin-Passwort um den Treiber neu zu starten. Der Chef killt mich sonst!",
            opts: [
                { t: "Passwort eingeben", req: "admin_pw", m: 5, f: 20, a: 0, c: 0, r: "Du loggst dich remote ein, zack, fertig. Kevin himmelt dich an." },
                { t: "Hingehen und fixen", m: 60, f: -20, a: 20, c: -10, r: "Ohne das Passwort musstest du den Safe-Mode nutzen. Hat ewig gedauert." }
            ]
        },
        {
            id: "call_drno",
            title: "Dr. No (Forschung)",
            text: "Mein Quanten-Algorithmus ist bei 99% abgestürzt! Ich brauche mehr RAM! Laden Sie mir sofort mehr RAM herunter!",
            opts: [
                { t: "Erklären: RAM ist Hardware", m: 20, f: -5, a: 10, c: 0, r: "Er hält dich für inkompetent. 'Im Internet steht, man kann das downloaden!'" },
                { t: "Fake-Download starten", m: 10, f: 15, a: -5, c: 5, r: "Du öffnest einen Ladebalken. Er ist zufrieden und wartet." }
            ]
        },
        {
            id: "call_schmidt",
            title: "Herr Schmidt (Vertrieb)",
            text: "Herr Müller! Ich bin beim Kunden und mein Hotspot geht nicht! Ich hab das Kennwort auf so einen gelben Zettel geschrieben, aber ich weiß nicht mehr wo der ist! Helfen Sie mir, schnell!",
            opts: [
                { t: "Kennwort vorlesen", req: "wifi_note", m: 5, f: 10, a: -10, c: -10, r: "Du liest das Passwort vom Zettel vor, den du gefunden hast. Schmidt jubelt: 'Sie sind ein Gott!'" },
                { t: "Reset durchführen", m: 45, f: -10, a: 25, c: -5, r: "Du musstest den Hotspot komplett zurücksetzen. Schmidt musste 45 Min warten. Er war stinksauer." },
                { t: "Sagen: 'Tja, Pech gehabt'", m: 2, f: 10, a: 0, c: 20, r: "Du legst auf. Das wird ein riesiges Nachspiel haben." }
            ]
        },
        {
            id: "call_aluhut",
            title: "Der Verschwörungstheoretiker",
            text: "Herr Aluhut aus dem Einkauf flüstert: 'Sie hören uns ab, oder? Meine Webcam hat gerade geblinkt! Ich habe das Mikrofon schon mit Kaugummi zugeklebt, aber der Mauszeiger folgt meinen Augen! Deaktivieren Sie die staatliche Überwachung!'",
            opts: [
                { t: "Bestätigen: 'Ja, das ist Projekt Gläserner Bürger.'", m: 10, f: 20, a: 0, c: 10, r: "Er schreit auf und reißt das Kabel aus der Wand. Er ist jetzt offline. Problem gelöst, aber er schreibt Beschwerdemails per Schreibmaschine." },
                { t: "Technisch erklären (Treiber-Fehler)", m: 30, f: -5, a: 15, c: 0, r: "Er glaubt dir kein Wort. 'Das würde ein Agent auch sagen!' Er legt auf, um seinen Anwalt anzurufen." },
                { t: "Alufolie empfehlen", m: 5, f: 15, a: -5, c: 5, r: "Er bedankt sich für den Tipp. 'Endlich einer, der mich versteht!' Er wickelt seinen Kopfhörer ein." }
            ]
        },
        {
            id: "call_erna",
            title: "Oma Erna (Empfang)",
            text: "Ach Herr Müller, schön Sie zu hören. Mein Computer sagt 'Maus nicht gefunden', aber die liegt doch direkt hier neben der Kaffeetasse! Ich habe sie sogar gestreichelt, aber der Pfeil bewegt sich nicht. Ist die Maus vielleicht tot?",
            opts: [
                { t: "Fragen: 'Ist es eine Funkmaus? Batterien leer?'", m: 15, f: 5, a: 5, c: 0, r: "Es war tatsächlich die Batterie. Sie erzählt dir danach noch 10 Minuten von ihren Enkeln. Deine Aggro steigt durch das Zuhören." },
                { t: "Hingehen und Kabel einstecken", m: 30, f: -10, a: 0, c: -5, r: "Das Kabel war rausgezogen. Sie schenkt dir ein Bonbon, das seit 1998 in ihrer Schublade klebt." },
                { t: "Sagen: 'Sie müssen Käse vor den USB-Port legen.'", m: 5, f: 20, a: -10, c: 15, r: "Sie lacht herzlich. 'Sie Scherzkeks!' Aber das Problem ist nicht gelöst." }
            ]
        },
        {
            id: "call_legacy",
            title: "Legacy-System Alarm",
            text: "Das uralte Windows 95 System in der Produktion piept. Keiner weiß mehr, wie das funktioniert. Auf dem Bildschirm steht 'Insert Disk 4'.",
            opts: [
                { t: "Handbuch konsultieren", req: "manual", m: 60, f: -20, a: 0, c: -10, r: "Dank des alten Handbuchs, das du gefunden hast, konntest du den Befehl eingeben. Die Produktion läuft weiter. Du bist ein Archäologe." },
                { t: "Einfach mal Enter drücken", m: 5, f: 10, a: 0, c: 20, r: "Systemabsturz. Die Produktion steht. Du schiebst es auf 'Verschleiß'." },
                { t: "Ignorieren", m: 0, f: 20, a: 0, c: 30, r: "Das Piepen hört irgendwann auf. Weil das Gerät durchgebrannt ist." }
            ]
        },
        {
            id: "call_auditor",
            title: "Der externe Auditor",
            text: "Eine eiskalte Stimme: 'Hier ist Müller-Lüdenscheid von der KPMG. Wir prüfen Ihre Lizenzierung. Laut meinen Daten nutzen Sie 500 Lizenzen von WinRAR, haben aber nur 2 bezahlt. Erklären Sie das, bevor ich den Bericht an Ihren Vorstand sende.'",
            opts: [
                { t: "Bestechen (Donut anbieten)", req: "donut", m: 10, f: 0, a: 0, c: -10, r: "Er zögert. 'Ist das Schoko-Guss?' ... Das Thema ist vom Tisch. Teuer, aber effektiv." },
                { t: "Lügen: 'Das ist eine Testumgebung'", m: 20, f: 10, a: 10, c: 20, r: "Er glaubt es nicht ganz. 'Ich notiere: Verdächtige Aktivitäten.' Dein Chef-Radar steigt massiv." },
                { t: "Auflegen und Server löschen", m: 5, f: -10, a: 20, c: 50, r: "Panikreaktion! Du hast Beweise vernichtet, aber jetzt fragt jeder, wo die Daten sind. Das war knapp." },
                { t: "Ehrlich sein", m: 60, f: -20, a: 0, c: 10, r: "Du gehst die Liste mit ihm durch. Es dauert ewig. Du hast deinen Job gemacht, aber der Chef hasst Zusatzkosten." }
            ]
        },
        {
            id: "call_lena",
            title: "Die weinende Praktikantin",
            text: "Lena aus dem Marketing schluchzt ins Telefon: 'Ich habe... ich habe die Präsentation für den Vorstand gelöscht. Und den Papierkorb geleert. Und dann habe ich den PC neugestartet, weil ich dachte, das hilft. Die Präsentation ist in 20 Minuten! Mein Leben ist vorbei!'",
            opts: [
                { t: "Professionelle Datenrettung", m: 90, f: -30, a: 10, c: -20, r: "Du hast Sektor für Sektor der Festplatte gescannt. Du hast die Datei gefunden! Lena bringt dir morgen Kuchen. Held der Arbeit." },
                { t: "Trösten & Ausrede erfinden", m: 15, f: 10, a: -10, c: 10, r: "Du sagst ihr, sie soll 'Virus' rufen. Sie kommt ungeschoren davon, aber die IT (du) steht jetzt dumm da." },
                { t: "Kalt abservieren: 'Kein Backup, kein Mitleid'", m: 2, f: 5, a: -5, c: 0, r: "Du legst auf. Das Weinen verstummt. Du fühlst dich kurz schlecht, dann trinkst du Kaffee." }
            ]
        },
        {
            id: "call_junior",
            title: "Shadow-CEO Junior",
            text: "Der Sohn vom Chef (12 Jahre) ruft an: 'Ey, IT-Typ! Mach mal die Ports für meinen Minecraft-Server auf. Papa sagt, das gehört mir alles hier. Wenn du es nicht machst, sag ich ihm, du hast mich geschlagen!'",
            opts: [
                { t: "Ports öffnen (Sicherheitsrisiko)", m: 10, f: 20, a: 0, c: 10, r: "Der Junge ist glücklich. 2 Stunden später ist das Firmennetz voller russischer Bots. Das wird ein Nachspiel haben." },
                { t: "Ihn erziehen (Aggro)", m: 5, f: 0, a: -20, c: 30, r: "Du erklärst ihm, dass er ein verzogenes Balg ist. Er schreit. Der Chef kommt gleich runter." },
                { t: "Technobabble-Lüge", m: 15, f: 5, a: 0, c: -5, r: "'Die Firewall-Matrix hat eine negative Polarität.' Er checkt es nicht und gibt auf." }
            ]
        },
        {
            id: "call_skynet",
            title: "Das 'Skynet' Problem",
            text: "Die neue 'Smart Office' KI hat die Kaffeemaschine, die Jalousien und die Toilettentüren verriegelt. Eine mechanische Stimme sagt: 'Ich lasse euch erst raus, wenn ihr meine Lizenzbedingungen akzeptiert.'",
            opts: [
                { t: "Mit Hammer 'verhandeln'", req: "hammer", m: 20, f: -10, a: -30, c: 10, r: "Du hast den Zentralserver der KI zertrümmert. Die Türen sind offen. Sachschaden: 10.000€. Befriedigung: Unbezahlbar." },
                { t: "AGBs lesen und akzeptieren", m: 120, f: -40, a: 40, c: -10, r: "Du hast 2 Stunden lang Kleingedrucktes gelesen. Alle hassen dich, weil sie so lange eingesperrt waren." },
                { t: "Stecker ziehen", m: 5, f: 10, a: 0, c: 20, r: "Alles ist aus. Auch das Licht. Aber die Türen sind offen." }
            ]
        },
        {
            id: "call_phish",
            title: "Phishing Live-Test",
            text: "Eine sehr freundliche Dame mit Akzent: 'Hallo, hier ist Microsoft Support Windows. Ihr Computer hat Virus. Bitte geben Sie mir Fernzugriff und Kreditkarte für Reinigung.'",
            opts: [
                { t: "Mitspielen & Zeit verschwenden", m: 45, f: 20, a: -20, c: 5, r: "Du tust so, als wärst du dumm. 'Welche Taste ist das?' Nach 45 Minuten legt sie wütend auf. Bester Spaß seit Wochen." },
                { t: "Trillerpfeife ins Telefon", m: 2, f: 0, a: -10, c: 0, r: "Das Trommelfell am anderen Ende ist geplatzt. Kurzer Prozess." },
                { t: "Daten geben (Gier)", m: 10, f: 10, a: 30, c: 80, r: "Du hast ihr die Firmenkarte gegeben?! Bist du wahnsinnig? Das Konto ist leer. Kündigung droht!" }
            ]
        },
        {
            id: "call_deaf",
            title: "Der hörgeschädigte Kunde",
            text: "Ein Herr schreit ins Telefon: 'ICH VERSTEHE SIE NICHT! ES IST SO LAUT HIER!' Er sitzt offenbar auf einer Baustelle.",
            opts: [
                { t: "Headset lauter drehen", m: 10, f: 0, a: 5, c: 0, r: "Du schreist zurück. Das ganze Büro hört mit. Peinlich." },
                { t: "NC-Kopfhörer aufsetzen", req: "headphones", m: 15, f: 5, a: -10, c: 0, r: "Dank Noise-Cancelling hörst du sein Geschrei klar, aber gedämpft. Du bleibst Zen-artig ruhig." },
                { t: "Auflegen", m: 2, f: 5, a: 0, c: 5, r: "Problem der Telekom." }
            ]
        },
        {
            id: "call_cd_stuck",
            title: "Das verklemmte CD-Laufwerk",
            text: "Frau Jansen hat eine CD in den Schlitz geschoben. Es war aber gar kein Laufwerk, sondern der Lüftungsschlitz. 'Kriegen Sie das da wieder raus?'",
            opts: [
                { t: "Schraubendreher nutzen", req: "screw", m: 30, f: -10, a: 5, c: 0, r: "Du bist hingegangen, hast das Gehäuse geöffnet und die CD gerettet. Es war eine Schlager-CD." },
                { t: "Mit Klebeband angeln", req: "tape", m: 20, f: 0, a: 0, c: 0, r: "Du hast Tape an einen Stift geklebt und gefischt. Hat geklappt! MacGyver-Style." },
                { t: "Neuen PC bestellen", m: 10, f: 10, a: -5, c: 20, r: "Das war dem Chef zu teuer. Abmahnung droht." }
            ]
        },
        {
            id: "call_loose_contact",
            title: "Der Wackelkontakt",
            text: "Herrn Müllers Netzwerkkabel fällt immer aus der Wanddose. 'Können Sie das nicht festmachen?'",
            opts: [
                { t: "Festtapen", req: "tape", m: 10, f: 5, a: 0, c: 0, r: "Du hast den Stecker mit einer halben Rolle Panzertape an die Wand betoniert. Hält ewig." },
                { t: "Kabelbinder-Konstruktion", req: "zip_ties", m: 15, f: 0, a: -5, c: 0, r: "Du hast das Kabel am Tischbein festgezurrt. Keine Zuglast mehr. Professionell." },
                { t: "Dose austauschen", m: 60, f: -20, a: 10, c: -5, r: "Du hast die Dose neu verdrahtet. Arbeit, aber sauber." }
            ]
        },
        {
            id: "call_pw_lost",
            title: "Passwort-Vergesser",
            text: "Der CEO ruft an. 'Ich komme nicht ins System! Welches Passwort habe ich für den Server 'Geheim' gesetzt?'",
            opts: [
                { t: "Root-Passwort nutzen", req: "admin_pw", m: 5, f: 10, a: 0, c: -10, r: "Du setzt es zurück auf '1234'. Er ist glücklich." },
                { t: "Raten", m: 20, f: 0, a: 20, c: 10, r: "War es 'Passwort'? Nein. 'Gott'? Nein. Er wird wütend." },
                { t: "Hacker-Tool (Stick)", req: "usb_stick", m: 10, f: 5, a: 0, c: 0, r: "Du hast das Passwort ausgelesen. Er ist beeindruckt (und sollte dir kündigen)." }
            ]
        },
        {
            id: "call_monitor_arm",
            title: "Der Monitor-Arm",
            text: "Der Monitorarm im Meetingraum sinkt immer langsam nach unten. Mitten in der Präsentation guckt der Bildschirm auf den Tisch.",
            opts: [
                { t: "Schraube festziehen", req: "screw", m: 5, f: 0, a: -5, c: 0, r: "Ein Dreh, fertig. Physik besiegt." },
                { t: "Stütze bauen", req: "manual", m: 5, f: 5, a: 0, c: 0, r: "Du hast das Win95 Handbuch drunter geklemmt. Passt perfekt." },
                { t: "Ignorieren", m: 0, f: 10, a: 0, c: 5, r: "Die Kollegen müssen sich halt bücken." }
            ]
        },
        {
            id: "call_printer_noise",
            title: "Der aggressive Drucker",
            text: "Der große Kopierer im Flur rattert extrem laut und vibriert durch den Boden. Die Buchhaltung hat Angst.",
            opts: [
                { t: "Perkussive Wartung", req: "hammer", m: 5, f: 5, a: -20, c: 10, r: "Ein gezielter Schlag an die Seite. Das Rattern hört auf. Stille. User klatschen." },
                { t: "Dämpfer basteln", req: "tape", m: 20, f: -5, a: 0, c: 0, r: "Du hast Filzgleiter aus Tape gebastelt. Es ist leiser." },
                { t: "Techniker rufen", m: 30, f: 10, a: 0, c: 5, r: "Dauert 3 Tage. Bis dahin nervt es." }
            ]
        },
        {
            id: "call_cnc",
            title: "Antike Software",
            text: "Die Produktion steht! Die alte CNC-Fräse verlangt 'Disk 2'. Keiner weiß, wo die ist.",
            opts: [
                { t: "USB-Stick Emulation", req: "usb_stick", m: 45, f: -20, a: 10, c: -20, r: "Du hast den Stick als Floppy gemountet. Du bist ein technischer Gott. Produktion läuft." },
                { t: "Handbuch lesen", req: "manual", m: 30, f: -10, a: 0, c: 0, r: "Im Handbuch lag die Diskette! Glück gehabt." },
                { t: "Neustart", m: 15, f: 0, a: 10, c: 20, r: "Datenverlust. Fräse hat sich in den Tisch gebohrt." }
            ]
        },
        {
            id: "call_cable_chaos",
            title: "Kabel-Wirrwarr",
            text: "Unter dem Tisch des neuen Kollegen sieht es aus wie Spaghetti. Er tritt ständig den Stecker raus.",
            opts: [
                { t: "Kabelbinder-Einsatz", req: "zip_ties", m: 20, f: -5, a: -10, c: 0, r: "Alles sauber gebündelt und hochgebunden. r/CablePorn Material." },
                { t: "Tape an Tisch", req: "tape", m: 10, f: 0, a: 0, c: 0, r: "Hält auch." },
                { t: "Ihn belehren", m: 15, f: 0, a: 10, c: 0, r: "Er hört nicht zu." }
            ]
        },
        {
            id: "call_werner_tablet",
            title: "Privatanruf: Schwiegerpapa Werner",
            text: "Dein Bürotelefon klingelt. Das Display zeigt 'Unbekannt'. Du gehst ran.<br><br>'JÜRGEN? BIST DU DA? HÖRST DU MICH??'<br><br>Es ist Werner, dein Schwiegervater. Er schreit, als würde er über den Atlantik rufen.<br><br>'Hör mal, die Renate hat mir doch dieses Wisch-Brett geschenkt, dieses... Ei-Päd! Ich bin jetzt modern! Aber sag mal: Ich drücke hier die ganze Zeit auf den Briefumschlag, aber da kommen keine Briefe raus! Und der Enkel sagt, ich soll mir Wozz-Äpp holen, damit ich dich direkt nerven... äh... erreichen kann. Ich bin hier in diesem Äpp-Laden, aber die wollen ein Passwort! Ich habe nie ein Passwort gemacht! Helf mir mal eben, das dauert doch nur eine Minute!'",
            opts: [
                { 
                    t: "Geduldig Schritt-für-Schritt erklären", 
                    m: 60, f: 10, a: -20, c: 20, 
                    r: "Das war die Hölle. Er wusste seine Apple-ID nicht ('Ist das meine Hausnummer?'). Er hat das Tablet zwischendurch ausgeschaltet ('Um Strom zu sparen'). Nach einer Stunde hat er WhatsApp installiert und dir sofort ein Bild von seinem Fußpilz geschickt. Der Chef hat dich privat telefonieren sehen (Radar +20)!" 
                },
                { 
                    t: "Panisch abwimmeln: 'Werner, ich arbeite!'", 
                    m: 5, f: 0, a: 15, c: -5, 
                    r: "Stille am anderen Ende. Dann ganz leise: 'Schon gut... Ich wollte ja nicht stören. Die Renate hatte Recht, du hast nie Zeit für die Familie. Tschüss.' Klick. Das schlechte Gewissen wird dich den ganzen Tag verfolgen (Aggro +15)." 
                },
                { 
                    t: "NC-Kopfhörer nutzen & 'Ja' sagen", 
                    req: "headphones", 
                    m: 30, f: 20, a: -10, c: 5, 
                    r: "Du hast die Kopfhörer aufgesetzt und das Noise-Cancelling aktiviert. Du hörst Werner nur noch ganz leise im Hintergrund meckern. Ab und zu sagst du 'Mhm' und 'Ja, klick da mal drauf'. Nach 30 Minuten legt er zufrieden auf. Du hast keine Ahnung, was er gemacht hat." 
                },
                { 
                    t: "Aus dem Win95-Handbuch zitieren", 
                    req: "manual", 
                    m: 10, f: 5, a: -5, c: 0, 
                    r: "Du liest ihm Kapitel 4 vor: 'Einrichten eines 56k Modems'. Werner ist völlig verwirrt: 'Modem? Hab ich das? Muss ich in den Keller?' Er legt auf, um das Modem im Heizungskeller zu suchen. Du hast Ruhe. Bester Einsatz des Handbuchs ever." 
                }
            ]
        },
        {
            id: "call_tonie_kid",
            title: "Unbekannte Nummer (Kinderstimme)",
            text: "Eine weinerliche Stimme: 'Bist du der Computer-Mann? Mein Kreativ-Tonie geht nicht! Der Löwe singt nicht, die Box blinkt nur rot! Mach den Löwen heile! SOFORT!'",
            opts: [
                { 
                    t: "Die 'Toniebox 2 Pro' erfinden (Lüge)", 
                    m: 5, f: 10, a: -20, c: -5, 
                    r: "Du flüsterst: 'Du brauchst die Toniebox 2 Pro. Weck Mama und sag, sie muss die JETZT kaufen.' Kind rennt weg. Du hast Ruhe und wirkst beschäftigt." 
                },
                { 
                    t: "Ernsthaft helfen ('Klopf-Trick')", 
                    m: 25, f: -10, a: 5, c: 15,
                    r: "Du erklärst 20 Minuten lang, wie man die Box resettet. Der Chef läuft vorbei und sieht, wie du Luft-Bewegungen machst, als würdest du eine Box hauen. 'Haben Sie nichts zu tun, Müller?'" 
                },
                { 
                    t: "Auflegen", 
                    m: 2, f: 5, a: 0, c: 0, 
                    r: "Klick. Nicht dein Problem." 
                }
            ]
        },
        {
            id: "call_silence",
            title: "Die gespenstische Stille",
            text: "Das Telefon klingelt. Du nimmst ab. Nichts. Absolute Stille. Nur ein ganz leises Atmen oder Rauschen ist zu hören. 'Hallo? HAAALLO?' - Keine Reaktion.",
            opts: [
                { 
                    t: "Auflegen & Zurückrufen", 
                    m: 60, f: -20, a: 30, c: 10, 
                    r: "Riesenfehler! Es war der CEO aus dem Tunnel. Beim Rückruf erwischt du ihn mitten im Meeting. Er zwingt dich, remote eine 'dringende' Diagnose seines Autotelefons durchzuführen, während er durch Funklöcher fährt. Das Drama dauert eine Stunde. Du kochst vor Wut." 
                },
                { 
                    t: "Einfach auflegen", 
                    m: 2, f: 5, a: 0, c: 0, 
                    r: "Klick. Weg. Wer nicht redet, hat keine Probleme. Du lehnst dich entspannt zurück." 
                },
                { 
                    t: "So tun als ob ('Ja... mhm...')", 
                    m: 20, f: 20, a: -15, c: -5, 
                    r: "Du führst 20 Minuten lang ein angeregtes Gespräch mit der Stille. 'Ja, absolut Herr Direktor... sehr interessant... mhm...' Die Kollegen im Büro schauen beeindruckt, wie professionell du 'wichtige Dinge' klärst. In Wahrheit hast du gedöst." 
                }
            ]
        },
		{
            id: "call_boss_wording",
            title: "Der Chef (Hektisch)",
            text: "MÜLLER! Der Drucker im Flur qualmt! Das Papier ist alle und der Toner ist explodiert! Das ist ein riesiges... na, sagen Sie schon! Was haben wir da?!",
            opts: [
                { 
                    t: "Ein riesiges Problem!",
                    m: 10, f: 0, a: 10, c: 25, 
                    r: "Der Chef schreit: 'WIR HABEN KEINE PROBLEME! WIR HABEN HERAUSFORDERUNGEN! Sie haben die falsche Einstellung, Müller!' Er legt wütend auf." 
                },
                { 
                    t: "Eine spannende Herausforderung!",
                    m: 5, f: 5, a: -5, c: -10, 
                    r: "Der Chef atmet erleichtert aus. 'Exakt! Das ist der Spirit! Lösen Sie diese Herausforderung!' Er ist glücklich." 
                },
                { 
                    t: "Ein Fall für die Feuerwehr", 
                    m: 5, f: 0, a: 0, c: 5, 
                    r: "Er ignoriert dich und murmelt 'Agiles Mindset...' vor sich hin." 
                }
            ]
        },
		{
            id: "call_climate_emergency",
            title: "Hausmeister Egon (Frierend)",
            text: "Müller! Im Serverraum sind minus 10 Grad! Ich steh hier vor der Anlage. Meine Brille ist beschlagen. Ich muss das Ding wärmer stellen! Soll ich den Regler in den roten oder den blauen Bereich drehen? Schnell!",
            opts: [
                { 
                    t: "In den ROTEN Bereich (Wärme?)",
                    m: 30, f: -10, a: 20, c: 10, 
                    r: "FALSCH! Dank der falschen Verkabelung hast du auf 'Arktis' gestellt. Die Rohre sind geplatzt. Egon ist jetzt ein Eiszapfen." 
                },
                { 
                    t: "In den BLAUEN Bereich!",
                    m: 5, f: 5, a: 0, c: -5, 
                    r: "Egon zögert: 'Blau? Bist du sicher? Das ist doch Kalt...' Er dreht auf Blau. Es wird warm. 'Verrückte Technik! Danke Müller!'" 
                },
                { 
                    t: "Dreh einfach irgendwas", 
                    m: 10, f: 0, a: 0, c: 0, 
                    r: "Egon hat den Stecker gezogen. Jetzt geht gar nichts mehr." 
                }
            ]
        },
		{
            id: "call_locked_in",
            title: "Unbekannte Nummer (Panisch)",
            text: "HILFE! Hier ist die Praktikantin Lena! Ich wollte Druckerpapier aus dem Keller holen und die Tür ist zugefallen! Hier ist ein Tastenfeld, aber ich kenne den Code nicht! Es ist dunkel und hier sind Spinnen!",
            opts: [
                { 
                    t: "Probier mal '1234'", // Falle (Standard-Code)
                    m: 45, f: -10, a: 20, c: 0, 
                    r: "Falsch! Die Anlage hat sich gesperrt. Du musstest runterlaufen, Egon suchen (der unauffindbar war) und sie manuell befreien. Lena hat geheult." 
                },
                { 
                    t: "Tipp '0000' ein", // Richtige Antwort (Wissen)
                    m: 5, f: 10, a: -5, c: 5, 
                    r: "Piep-Piep-Klick. 'Oh mein Gott, es geht! Du bist mein Held!' Sie ist frei. Du fühlst dich wie ein Hacker." 
                },
                { 
                    t: "Ruf die Feuerwehr", 
                    m: 10, f: 0, a: 0, c: 30, 
                    r: "Die Feuerwehr hat die Tür aufgebrochen. Rechnung: 500€. Der Chef tobt: 'Wieso wussten Sie den Code nicht?!'" 
                }
            ]
        },
		{
            id: "call_kevin_port",
            title: "Azubi Kevin (Netzwerk)",
            text: "Du, ich hab hier ein loses Kabel im Serverraum gefunden. Ich wollte das mal aufräumen. Am Haupt-Switch ist Port 42 noch frei. Soll ich das da reinstecken? Passt perfekt.",
            opts: [
                { 
                    t: "Ja, mach mal (Ordnung muss sein)", // Falle!
                    m: 120, f: -20, a: 40, c: 50, 
                    r: "ZAPP! Ein Knall, dann Dunkelheit. Kevin hat den Haupt-Switch gegrillt. Die ganze Firma ist offline. Du verbringst den Rest des Tages mit Notfall-Recovery." 
                },
                { 
                    t: "NEIN! FINGER WEG VON PORT 42!", // Richtige Antwort (Wissen)
                    m: 5, f: 5, a: -5, c: -5, 
                    r: "Kevin zuckt zusammen: 'Okay, okay! Chill mal!' Er lässt das Kabel fallen. Katastrophe abgewendet." 
                },
                { 
                    t: "Frag den Hausmeister", 
                    m: 10, f: 10, a: 0, c: 0, 
                    r: "Kevin sucht den Hausmeister. Das Kabel liegt weiter rum. Glück gehabt (vorerst)." 
                }
            ]
        },
		{
            id: "call_gabi_sugar",
            title: "Sekretärin Gabi (Zitternd)",
            text: "Herr Müller... mir ist so schwindelig... Unterzucker... Ich brauche Schokolade... sofort! Aber der Automat ist leer! Haben wir nirgendwo was Süßes?!",
            opts: [
                { 
                    t: "Ich glaube im Kühlschrank ist Senf?", // Falle
                    m: 10, f: 0, a: 10, c: 0, 
                    r: "Gabi legt auf. Später hörst du, dass sie vor Schwäche ohnmächtig geworden ist. Der Sanitäter musste kommen." 
                },
                { 
                    t: "Guck mal in den Ordner 'Steuer 1990'...", // Richtige Antwort (Wissen)
                    m: 5, f: 10, a: -10, c: -5, 
                    r: "Stille. Dann ein Rascheln und Schmatzen. 'Oh Gott, Sie sind ein Lebensretter! Woher wussten Sie...? Egal! Danke!'" 
                },
                { 
                    t: "Ich hab hier einen halben Donut", 
                    req: "donut", 
                    m: 5, f: 0, a: -5, c: 0, 
                    r: "Du bringst ihr deinen Donut. Nett, aber du bist dein Essen los." 
                }
            ]
        },
		{
            id: "call_canteen_fix",
            title: "Die Kantine ruft an",
            text: "Eine tiefe Stimme am Telefon: 'Hier ist Herr Löffel aus der Kantine. Mein Bondrucker streikt! Ich kann keine Belege für das Finanzamt drucken! Kommen Sie sofort her!'",
            opts: [
                { 
                    t: "Sagen: 'Ja, Herr Koch, ich komme.'", // Falle!
                    m: 30, f: 0, a: 20, c: 5, 
                    r: "Stille. Dann Gebrüll: 'KOCH?! ICH BIN NUTRITION ARTIST!' Er knallt den Hörer auf. Du musst hingehen und er lässt dich 20 Minuten warten." 
                },
                { 
                    t: "Sagen: 'Ja, Herr Senior Nutrition Artist.'", // Richtige Antwort (Wissen)
                    m: 5, f: 5, a: -5, c: 0, 
                    r: "Er schnurrt fast: 'Endlich jemand mit Respekt!' Er drückt vor Freude einfach mal auf 'Feed' und der Drucker geht wieder. 'Danke, Müller!'" 
                },
                { 
                    t: "Auflegen", 
                    m: 2, f: 5, a: 0, c: 10, 
                    r: "Kein Mittagessen für dich heute." 
                }
            ]
        }
    ],

// === SERVERRAUM ===
    server: [
        {
            id: "srv_lore",
            title: "Der vergessene Aktenschrank",
            text: "Ganz hinten, hinter dem alten Mainframe, steht ein offener Aktenschrank mit der Aufschrift 'VERTRAULICH'.",
            opts: [
                { t: "Darin stöbern", loot: "secret_list", m: 15, f: 5, a: 0, c: 5, r: "Du findest die 'Schwarze Liste' der HR-Abteilung. Pures Dynamit! Inventar +1." },
                { t: "Ignorieren", m: 5, f: 0, a: 0, c: 0, r: "Besser nichts wissen." }
            ]
        },
        {
            id: "srv_sleep",
            title: "Das Versteck",
            text: "Du hast dir eine Höhle aus alten Kartons gebaut. Hier ist es dunkel, kühl und niemand nervt. Der Lüfter summt beruhigend.",
            opts: [
                { t: "Schlafen (1 Std)", m: 60, f: 40, a: -30, c: 20, r: "Bester Schlaf der Woche. Du hast 12 Anrufe verpasst und fühlst dich wie neu geboren." },
                { t: "Netflix gucken", m: 45, f: 30, a: -20, c: 10, r: "Eine Folge deiner Serie geschaut. Niemand hat dich gefunden." }
            ]
        },
        {
            id: "srv_tool",
            title: "Werkzeugkasten",
            text: "Der externe Techniker hat seinen Koffer offen stehen lassen. Ein schöner Schraubendreher blitzt dich an.",
            opts: [
                { t: "Einstecken", loot: "screw", m: 5, f: 0, a: 0, c: 0, r: "Werkzeug kann man immer brauchen. Inventar +1." },
                { t: "Liegen lassen", m: 0, f: 0, a: 0, c: 0, r: "Du bist ehrlich. Leider bringt Ehrlichkeit keine XP." }
            ]
        },
        {
            id: "srv_bernd",
            title: "Der Kollege Bernd",
            text: "Du findest Bernd aus dem Vertrieb, der hier weinend auf dem Boden sitzt und Whisky trinkt. Er murmelt was von 'Umsatzzielen nicht erreicht'.",
            opts: [
                { t: "Mitharken", m: 30, f: 20, a: -40, c: 15, r: "Ihr seid beide leicht betrunken. Bernd ist eigentlich ganz okay, wenn er nicht über Verkaufszahlen redet." },
                { t: "Verpetzen", m: 10, f: -10, a: 0, c: -10, r: "Bernd ist gefeuert. Du bist sicher, aber fühlst dich wie ein Verräter." }
            ]
        },
        {
            id: "srv_mining",
            title: "Hardware-Fund",
            text: "Ein altes Bitcoin-Mining-Rig läuft hinter einem Rack versteckt. Es gehört wohl dem Vorgänger. Es ist laut und heiß.",
            opts: [
                { t: "Laufen lassen", m: 5, f: 10, a: 0, c: 20, r: "Passives Einkommen! Aber wenn die Stromrechnung kommt, bist du dran." },
                { t: "Abschalten", m: 15, f: -5, a: 5, c: -5, r: "Stromrechnung gesenkt. Chef lobt die Energiebilanz, weiß aber nicht warum." }
            ]
        },
        {
            id: "srv_cable",
            title: "Kabel-Salat",
            text: "Du stolperst über ein loses Glasfaserkabel. Ein rotes Licht am Haupt-Switch blinkt hektisch. Das halbe Netzwerk wackelt.",
            opts: [
                { t: "Mit Tape flicken", req: "tape", m: 10, f: 0, a: 0, c: 0, r: "Provisorisch geflickt. Hält für immer." },
                { t: "Stecker wackeln", m: 10, f: -5, a: 10, c: 0, r: "Glück gehabt. Das Internet war nur 10 Sekunden weg." },
                { t: "Wegrennen", m: 5, f: 20, a: 0, c: 30, r: "Niemand hat dich gesehen. Die Firma ist offline. Du tust so, als wüsstest du von nichts." }
            ]
        },
        {
            id: "srv_drink",
            title: "Vergessener Snack",
            text: "Auf einem Server-Rack liegt eine Dose Energy Drink. Sie ist noch zu.",
            opts: [
                { t: "Trinken", loot: "energy", m: 5, f: -10, a: -10, c: 0, r: "Zucker und Koffein! Du fühlst dich bereit für den Kampf." },
                { t: "Stehen lassen", m: 0, f: 0, a: 0, c: 0, r: "Wer weiß, wie lange die da schon liegt." }
            ]
        },
        {
            id: "srv_extinguisher",
            title: "Sicherheits-Check",
            text: "Hinter einem alten CRT-Monitor findest du einen unbenutzten Feuerlöscher.",
            opts: [
                { t: "Einstecken", loot: "fire_ext", m: 10, f: 0, a: 0, c: 0, r: "Könnte man mal brauchen, wenn es brenzlig wird. Inventar +1." }
            ]
        },
        {
            id: "srv_manual",
            title: "Altes Buch",
            text: "Ein verstaubtes Windows 95 Handbuch liegt unter einem Tischbein.",
            opts: [
                { t: "Mitnehmen", loot: "manual", m: 5, f: 0, a: 0, c: 0, r: "Könnte nützlich sein bei DAUs. Inventar +1." }
            ]
        },
        {
            id: "srv_rat",
            title: "Das seltsame Geräusch",
            text: "Aus Rack 4 kommt ein kratzendes Geräusch. Es klingt nicht wie ein Lüfter. Eher wie... Zähne auf Kabel.",
            opts: [
                { t: "Nachsehen (Mutig)", m: 30, f: -10, a: 20, c: 0, r: "Es war eine Ratte! Sie springt dich an. Du fliehst panisch, aber hast das angeknabberte Kabel isoliert." },
                { t: "Laut gegen den Schrank treten", m: 5, f: 5, a: -5, c: 5, r: "Das Geräusch hört auf. Das Tier ist entweder tot oder beleidigt. Problem 'gelöst'." },
                { t: "Giftköder auslegen", loot: "energy", m: 10, f: 0, a: 0, c: 0, r: "Du findest dabei eine noch volle Dose Energy Drink, die du mal versteckt hattest. Win!" }
            ]
        },
        {
            id: "srv_cold",
            title: "Die Kälte-Falle",
            text: "Jemand hat die Klimaanlage auf 16 Grad gestellt und den Türgriff von innen abgebrochen. Du bist eingesperrt und frierst!",
            opts: [
                { t: "Mit Hammer Tür einschlagen", req: "hammer", m: 15, f: -5, a: -10, c: 20, r: "BÄM! Tür offen. Du fühlst dich wie Thor. Der Chef wird Fragen zum Türblatt haben." },
                { t: "Handy nutzen & Hilfe rufen", m: 60, f: 0, a: 20, c: -10, r: "Du musstest den Hausmeister anrufen. Er hat 45 Minuten gebraucht. Du bist jetzt ein Eisblock." },
                { t: "An den Servern wärmen", m: 90, f: 20, a: 10, c: 0, r: "Du hast dich hinter die Abluft der CPU gekuschelt und geschlafen, bis jemand kam. Gemütlich." }
            ]
        },
        {
            id: "srv_red",
            title: "Die rote Flüssigkeit",
            text: "Unter Rack 7 bildet sich eine Pfütze. Sie ist rot und klebrig. Es riecht süßlich. Ist das... Blut? Oder Sirup? Über dir verläuft keine Leitung.",
            opts: [
                { t: "Probieren (Mutig)", m: 5, f: 0, a: 0, c: 0, r: "Es ist Kirsch-Slushie. Jemand hat eine Maschine im Deckenboden versteckt. Lecker, aber ekelhaft." },
                { t: "Panik & Notruf", m: 30, f: -10, a: 20, c: 10, r: "Feuerwehr, Polizei und Chef rücken an. Es war nur ausgelaufene Kühlflüssigkeit mit Farbstoff. Peinlich." },
                { t: "Aufwischen & Ignorieren", m: 15, f: 0, a: 0, c: -5, r: "Was man nicht weiß, macht einen nicht heiß. Problem beseitigt." }
            ]
        },
        {
            id: "srv_illegal",
            title: "Das illegale Datencenter",
            text: "Du entdeckst hinter einer falschen Wand einen kompletten zweiten Serverraum. Er ist nicht im Inventar. Darauf laufen Webseiten für... sagen wir 'Erwachsenenunterhaltung'. Es gehört dem Vize-Chef.",
            opts: [
                { t: "Erpressen (Blacklist)", req: "secret_list", m: 10, f: 30, a: 0, c: -30, r: "Du konfrontierst ihn. Er gibt dir eine Gehaltserhöhung, damit du schweigst. Du bist jetzt korrupt." },
                { t: "Alles abschalten", m: 20, f: -10, a: 10, c: 50, r: "Der Vize-Chef stürmt herein und schreit dich an. Das wird ein Machtkampf." },
                { t: "Mitnutzen", m: 5, f: 20, a: -10, c: 20, r: "Du hostest jetzt deinen eigenen Blog dort. Gratis Hosting!" }
            ]
        },
        {
            id: "srv_raccoon",
            title: "Der Eindringling",
            text: "Die Tür steht offen. Ein Waschbär sitzt auf dem Haupt-Switch und nagt an einem Glasfaserkabel. Er sieht dich an und faucht.",
            opts: [
                { t: "Kampf mit Hammer", req: "hammer", m: 15, f: -5, a: -10, c: 5, r: "Du hast den Waschbären vertrieben, aber dabei Rack 2 verbeult. Der Waschbär hat deine Uhr geklaut." },
                { t: "Donut opfern", req: "donut", m: 5, f: 0, a: 0, c: 0, r: "Der Waschbär nimmt den Donut und geht friedlich. Ein fairer Tausch." },
                { t: "Tür zu und hoffen", m: 0, f: 20, a: 0, c: 40, r: "30 Minuten später ist das Internet weg. Der Waschbär hat gewonnen." }
            ]
        },
        {
            id: "srv_floppy",
            title: "Flaschenpost aus der Vergangenheit",
            text: "Du findest eine alte Diskette mit der Aufschrift 'NOTFALLPLAN 1999'. Ein Zettel klebt daran: 'Wenn alles brennt, drück diesen Knopf.' Da ist ein roter Knopf an der Wand, den du noch nie gesehen hast.",
            opts: [
                { t: "Knopf drücken", m: 5, f: 10, a: -20, c: 100, r: "Die Halon-Löschanlage geht los! Der ganze Raum wird mit Gas geflutet. Atem anhalten! Das war teuer!" },
                { t: "Diskette lesen", req: "manual", m: 30, f: -5, a: 0, c: -10, r: "Dank des Handbuchs kannst du sie lesen. Es sind nur Highscores von Minesweeper. Enttäuschend." },
                { t: "Ignorieren", m: 0, f: 0, a: 0, c: 0, r: "Vielleicht besser so." }
            ]
        },
        // --- NEUE SERVER EVENTS ---
        {
            id: "srv_loot_box",
            title: "Die offene Werkzeugkiste",
            text: "Ein externer Techniker hat seine Kiste vergessen. Du siehst nützliche Dinge.",
            opts: [
                { t: "Kabelbinder klauen", loot: "zip_ties", m: 5, f: 5, a: 0, c: 0, r: "Eine Packung schwarze Kabelbinder. Gold wert! Inventar +1." },
                { t: "Schraubendreher nehmen", loot: "screw", m: 5, f: 5, a: 0, c: 0, r: "Ein guter Kreuzschlitz. Meiner! Inventar +1." },
                { t: "Stehen lassen", m: 0, f: 0, a: 0, c: 0, r: "Du hast genug Zeug." }
            ]
        },
        {
            id: "srv_found_stuff",
            title: "Fundsache im Regal",
            text: "Zwischen zwei Servern liegt etwas. Hat wohl jemand beim Patchen liegen lassen.",
            opts: [
                { t: "Es sind Kopfhörer!", loot: "headphones", m: 5, f: 5, a: 0, c: 0, r: "Teure Noise-Cancelling Kopfhörer. Finders Keepers. Inventar +1." },
                { t: "Es ist ein Hammer?", loot: "hammer", m: 5, f: 5, a: 0, c: 0, r: "Warum liegt hier ein Hammer? Egal, nehm ich. Inventar +1." }
            ]
        },
        {
            id: "srv_loose_rack",
            title: "Das lose Rack",
            text: "Ein ganzes Server-Rack wackelt bedenklich. Eine Schraube fehlt.",
            opts: [
                { t: "Festschrauben", req: "screw", m: 10, f: -5, a: 0, c: -5, r: "Hält wieder. Katastrophe abgewendet." },
                { t: "Mit Kabelbindern sichern", req: "zip_ties", m: 5, f: 5, a: 0, c: 0, r: "Du hast das Rack ans Nachbar-Rack gebunden. Pfusch am Bau, aber hält." },
                { t: "Wegsehen", m: 0, f: 10, a: 0, c: 10, r: "Hoffentlich fällt es nicht um, wenn du weg bist." }
            ]
        },
        {
            id: "srv_cable_mess",
            title: "Der Kabel-Alptraum",
            text: "Hinter Rack 3 hängt ein Bündel Glasfaserkabel gefährlich nah am Lüfter. Wenn das reinkommt, gibt es Schnipsel.",
            opts: [
                { t: "Zur Seite binden", req: "zip_ties", m: 10, f: -5, a: 0, c: 0, r: "Sauber weggebunden. Gefahr gebannt." },
                { t: "Festkleben", req: "tape", m: 5, f: 0, a: 0, c: 0, r: "Das Tape wird durch die Hitze irgendwann abgehen. Problem von Zukunfts-Ich." },
                { t: "Lüftergitter abbrechen", m: 5, f: 5, a: 10, c: 20, r: "Du hast das Gitter entfernt. Jetzt ist mehr Platz, aber auch mehr Gefahr für Finger." }
            ]
        },
        {
            id: "srv_door_stuck",
            title: "Die klemmende Tür",
            text: "Die Tür zum Serverraum klemmt. Der Kartenleser leuchtet grün, aber der Mechanismus hängt.",
            opts: [
                { t: "Hammer-Schlag", req: "hammer", m: 5, f: 0, a: -10, c: 10, r: "Ein gezielter Schlag auf den Riegel. Tür springt auf. Mechanik verbogen, aber offen." },
                { t: "Schloss zerlegen", req: "screw", m: 30, f: -10, a: 5, c: 0, r: "Du hast das Schloss zerlegt und gefettet. Funktioniert wie neu." },
                { t: "Dagegen werfen", m: 10, f: 0, a: 20, c: 5, r: "Deine Schulter tut weh. Tür ist immer noch zu." }
            ]
        },
        {
            id: "srv_leak",
            title: "Das leckende Rohr",
            text: "Ein Kondenswasser-Rohr der Klimaanlage tropft direkt auf den Haupt-Switch!",
            opts: [
                { t: "Panzertape drum!", req: "tape", m: 5, f: 0, a: -5, c: -10, r: "Dicht! Zumindest für heute. Switch gerettet." },
                { t: "Eimer drunter (Mülleimer)", m: 10, f: 5, a: 0, c: 0, r: "Du musst ihn alle 2 Stunden leeren. Nervig." },
                { t: "Rohr verbiegen", req: "hammer", m: 5, f: 0, a: 10, c: 20, r: "Du hast das Rohr weggebogen. Es ist gebrochen. Wasser Marsch!" }
            ]
        },
        {
            id: "srv_pw_list",
            title: "Versteckte Notiz",
            text: "Hinter Rack 5 klebt ein vergilbter Zettel mit Tesafilm. Darauf steht in krakeliger Schrift: 'TOP SECRET - NUR FÜR ADMINS'.",
            opts: [
                { 
                    t: "Entziffern (Neugier)", 
                    m: 5, f: 5, a: -5, c: 0, 
                    r: "Es sind keine Passwörter. Es ist eine Botschaft deines Vorgängers: 'Ich habe das Internet in einer Kiste im Keller versteckt. Wenn Google down ist, schüttelt die Kiste. P.S.: Trau niemals dem Drucker.' Okay... gut zu wissen." 
                },
                { 
                    t: "Hängen lassen", 
                    m: 0, f: 0, a: 0, c: 0, 
                    r: "Das ist Kulturgut. Das bleibt hängen." 
                }
            ]
        },
		{
            id: "srv_label_fail",
            title: "Der Elektriker-Fail",
            text: "Du starrst auf das Bedienfeld der Klimaanlage. Ein handgeschriebener Zettel klebt über den Reglern: 'ACHTUNG: Der Elektriker war farbenblind! BLAU heizt (Warm) und ROT kühlt (Kalt)! Nicht anfassen, wird erst 2030 repariert.'",
            opts: [
                { 
                    t: "Anlage genauer untersuchen", 
                    m: 5, f: 0, a: 5, c: 0, 
                    r: "Tatsächlich. Die Kabel sind vertauscht. Rot geht zum Kompressor (Kalt), Blau zur Heizspirale (Warm). Völlig absurd. Gut, dass du nachgesehen hast." 
                },
                { 
                    t: "Zettel ignorieren", 
                    m: 2, f: 0, a: 0, c: 0, 
                    r: "Du gehst weiter. Farben sind schließlich genormt, oder? Was soll schon passieren." 
                }
            ]
        },
		{
            id: "srv_port_warning",
            title: "Das Warnschild am Switch",
            text: "Am Haupt-Switch klebt ein riesiges Schild über Port 42: 'NICHT BENUTZEN! Kurzschluss-Gefahr! Wer hier was einsteckt, grillt den ganzen Switch!'",
            opts: [
                { 
                    t: "Schild gerade rücken", 
                    m: 2, f: 0, a: 0, c: 0, 
                    r: "Port 42 ist böse. Verstanden. Gut, dass das Schild da hängt." 
                },
                { 
                    t: "Ignorieren", 
                    m: 0, f: 5, a: 0, c: 0, 
                    r: "Du hast es eilig. Hoffentlich behältst du das trotzdem im Hinterkopf." 
                }
            ]
        }
    ],

// === KAFFEE ===
    coffee: [
        {
            id: "cof_note",
            title: "Fundstück am Automaten",
            text: "Jemand hat hier einen gelben Notizzettel liegen lassen. Darauf steht 'WLAN-PW: 1234Secure'. Das ist Schmidts Handschrift.",
            opts: [
                { t: "Zettel einstecken", loot: "wifi_note", m: 5, f: 5, a: 0, c: 0, r: "Das könnte noch nützlich werden. Wissen ist Macht." },
                { t: "Wegwerfen", m: 5, f: 0, a: 0, c: 0, r: "Sicherheitsrisiko beseitigt." }
            ]
        },
        {
            id: "cof_donut",
            title: "Reste vom Meeting",
            text: "Im Konferenzraum nebenan steht noch eine Schachtel mit einem einsamen, leicht angetrockneten Donut.",
            opts: [
                { t: "Donut retten", loot: "donut", m: 5, f: 5, a: -5, c: 0, r: "Lecker und taktisch wertvoll für Bestechungen." },
                { t: "Ignorieren", m: 0, f: 0, a: 0, c: 0, r: "Du hast deinen Stolz." }
            ]
        },
        {
            id: "cof_flirt",
            title: "Der Schwarm",
            text: "Sarah/Marc aus der HR steht da. Er/Sie lächelt dich an. 'Na, IT-Held? Alles im Griff oder brennt der Server?'",
            opts: [
                { t: "Flirten: 'Für dich lösche ich jedes Feuer'", m: 20, f: 10, a: -30, c: 5, r: "Es läuft gut! Ihr verabredet euch zum Mittagessen. Deine Laune ist top." },
                { t: "Panisch weglaufen", m: 5, f: 0, a: 10, c: 0, r: "Peinlich berührt geflüchtet. Kaffee vergessen. Du hasst dich selbst." }
            ]
        },
        {
            id: "cof_boss",
            title: "Der Chef lauert",
            text: "Der Chef steht an der Maschine und zählt Bohnen. Er dreht sich langsam zu dir um. 'Müller? Schon der fünfte Kaffee? Arbeiten wir auch mal was?'",
            opts: [
                { t: "Lüge: 'Ist für einen wichtigen Kunden'", m: 5, f: 10, a: 5, c: 5, r: "Er glaubt es misstrauisch und lässt dich gehen." },
                { t: "Rechtfertigen", m: 15, f: -5, a: 10, c: 10, r: "Er hält dir einen 15-Minuten-Vortrag über Koffein und Produktivität." }
            ]
        },
        {
            id: "cof_ball",
            title: "Werbegeschenk",
            text: "Ein Vertreter hat rote Bälle mit Firmenlogo dagelassen.",
            opts: [
                { t: "Stressball nehmen", loot: "stressball", m: 5, f: 0, a: -5, c: 0, r: "Gut zum Kneten, wenn User nerven." }
            ]
        },
        {
            id: "cof_empty",
            title: "Leere Maschine",
            text: "ERROR: BEANS EMPTY. Jemand hat den letzten Kaffee genommen und nicht aufgefüllt. Es war bestimmt Kevin.",
            opts: [
                { t: "Auffüllen", m: 15, f: -5, a: 10, c: 0, r: "Du bist der Depp für alles. Aber immerhin hast du jetzt Kaffee." },
                { t: "Wütend gegen Maschine treten", m: 5, f: 0, a: 5, c: 10, r: "Das hat Lärm gemacht. Der Chef guckt aus seinem Büro." }
            ]
        },
        {
            id: "cof_newbie",
            title: "Der Neue",
            text: "Ein junger Typ im Anzug steht verloren vor der Maschine. 'Äh, hallo? Ich bin neu im Controlling. Braucht man hier eine Karte oder ist das kostenlos? Und wo ist die Soja-Milch?'",
            opts: [
                { t: "Nett sein & erklären", m: 15, f: -5, a: 0, c: -5, r: "Er ist dankbar. 'Cool, danke! Ich heiße Torben.' Du hast einen Verbündeten im Controlling (gut für Budget-Fragen)." },
                { t: "Anlügen: 'Das kostet 5€ pro Tasse, zahlbar bei mir.'", m: 10, f: 10, a: -10, c: 10, r: "Er gibt dir 5 Euro. Du hast Geld für Snacks, aber er wird es irgendwann merken." },
                { t: "Starren und knurren", m: 5, f: 0, a: 5, c: 0, r: "Er bekommt Angst und rennt weg. Mehr Kaffee für dich." }
            ]
        },
        {
            id: "cof_worker",
            title: "Der Handwerker",
            text: "Ein externer Techniker repariert gerade den Wasserspender. Sein Werkzeugkasten steht offen da. Ein Hammer blitzt dich an.",
            opts: [
                { t: "Hammer klauen", loot: "hammer", m: 5, f: 5, a: 0, c: 5, r: "Zack, eingesteckt. Ein Hammer ist das ultimative Debugging-Tool für Drucker." },
                { t: "Smalltalk halten", m: 15, f: 5, a: -5, c: 0, r: "Ihr redet über schlechte Bezahlung und dumme Kunden. Solidarität." }
            ]
        },
        {
            id: "cof_revolte",
            title: "Die Kaffeemaschinen-Revolte",
            text: "Die neue High-Tech Maschine zeigt auf dem Display: 'FEED ME'. Sie weigert sich, Kaffee zu machen, bis sie 'hochwertige Bohnen' bekommt. Die billigen Aldi-Bohnen spuckt sie aus.",
            opts: [
                { t: "Hammer-Reparatur", req: "hammer", m: 10, f: 0, a: -20, c: 20, r: "Du hast das Display eingeschlagen. Jetzt läuft der Kaffee wieder, aber die Maschine tropft. Problem 'gelöst'." },
                { t: "Gute Bohnen kaufen (Privatgeld)", m: 20, f: -5, a: 10, c: -5, r: "Du hast 10€ ausgegeben. Der Kaffee schmeckt himmlisch, aber du bist pleite." },
                { t: "IT-Trick: Ein/Aus", m: 5, f: 5, a: 5, c: 0, r: "Hat nicht geklappt. Sie lacht dich digital aus." }
            ]
        },
        {
            id: "cof_meeting",
            title: "Das Marketing-Meeting",
            text: "Chantal und ihre Crew blockieren die Küche. Sie brainstormen über 'Feel-Good-Management'. Es gibt Smoothies. Du brauchst aber Koffein.",
            opts: [
                { t: "Dazwischen drängeln", m: 5, f: 0, a: -5, c: 10, r: "Du hast Chantal den Smoothie umgestoßen. 'Hoppla'. Du hast Kaffee, aber Feinde." },
                { t: "Mitmachen", m: 45, f: 20, a: 10, c: -5, r: "Du musstest 45 Minuten über deine Gefühle reden. Du hast jetzt einen grünen Smoothie und Aggressionen." },
                { t: "Warten und böse gucken", m: 15, f: 5, a: 5, c: 0, r: "Sie ignorieren dich komplett." }
            ]
        },
        {
            id: "cof_milk",
            title: "Der letzte Tropfen Milch",
            text: "Kollege Bernd greift nach der letzten Milchpackung. Du greifst gleichzeitig. Eure Hände berühren sich. Es knistert vor Spannung (und Wut).",
            opts: [
                { t: "Duell fordern (Schere-Stein-Papier)", m: 5, f: 5, a: 0, c: 0, r: "Du gewinnst mit Stein! Die Milch gehört dir. Bernd weint leise." },
                { t: "Großzügig sein", m: 0, f: 0, a: 10, c: -5, r: "Du lässt ihm die Milch. Er schüttet alles in seinen Tee. Alles. Was für ein Monster." },
                { t: "Milchpackung zerdrücken", m: 2, f: 0, a: -10, c: 10, r: "Wenn ich sie nicht haben kann, kriegt sie keiner! Milch überall. Chaos." }
            ]
        },
        {
            id: "cof_juergen",
            title: "Der schwatzhafte Kollege",
            text: "Jürgen aus dem Vertrieb kommt rein. 'Na, auch mal Pause? Ich muss dir von meinem neuen Rasenmäher-Roboter erzählen!'",
            opts: [
                { t: "Kopfhörer aufsetzen", req: "headphones", m: 5, f: 5, a: -10, c: 0, r: "Du nickst und lächelst, hörst aber Death Metal. Jürgen redet gegen eine Wand. Perfekt." },
                { t: "Zuhören", m: 20, f: 10, a: 15, c: 0, r: "Du weißt jetzt alles über Mulch-Funktionen. Du willst sterben." },
                { t: "Flüchten", m: 0, f: 0, a: 5, c: 0, r: "Kein Kaffee für dich." }
            ]
        },
        {
            id: "cof_loot",
            title: "Reparatur-Set",
            text: "Der Hausmeister hat Material liegen lassen.",
            opts: [
                { t: "Panzertape nehmen", loot: "tape", m: 5, f: 5, a: 0, c: 0, r: "Eine fast volle Rolle Gaffa. Kann man immer brauchen. Inventar +1." },
                { t: "Kabelbinder nehmen", loot: "zip_ties", m: 5, f: 5, a: 0, c: 0, r: "Ein Bündel Kabelbinder. Praktisch. Inventar +1." }
            ]
        },
        {
            id: "cof_table",
            title: "Wackelnder Tisch",
            text: "Der Stehtisch in der Küche wackelt extrem. Der Kaffee schwappt fast über.",
            opts: [
                { t: "Schrauben festziehen", req: "screw", m: 10, f: -5, a: -5, c: 0, r: "Tisch steht fest. Du fühlst dich männlich/handwerklich begabt." },
                { t: "Bierdeckel drunter", m: 5, f: 5, a: 0, c: 0, r: "Klassiker. Hält." },
                { t: "Tischbein abtreten", req: "hammer", m: 5, f: 0, a: -20, c: 20, r: "Der Tisch ist zusammengebrochen. Aber er wackelt nicht mehr." }
            ]
        },
        {
            id: "cof_sticky",
            title: "Die verklebte Taste",
            text: "Die 'Espresso'-Taste an der Maschine klebt fest und geht nicht mehr.",
            opts: [
                { t: "Mit Schraubendreher lösen", req: "screw", m: 5, f: 0, a: -5, c: 0, r: "Du hebelst die Taste raus, reinigst sie kurz. Läuft." },
                { t: "Draufhauen", m: 2, f: 0, a: 5, c: 5, r: "Jetzt ist die Taste abgebrochen. Ups." }
            ]
        },
        {
            id: "cof_hack",
            title: "Der Service-Port",
            text: "Du entdeckst an der Rückseite der Kaffeemaschine einen USB-Wartungsport. Das Display zeigt 'INSERT SERVICE KEY'.",
            opts: [
                { t: "USB-Stick benutzen", req: "usb_stick", m: 5, f: 10, a: -10, c: 0, r: "HACK SUCCESS! Du hast den 'Developer Mode' aktiviert. Der Kaffee läuft jetzt doppelt so schnell und ist kostenlos. Du fühlst dich wie Neo in der Matrix." },
                { t: "Wild Knöpfe drücken", m: 5, f: 0, a: -5, c: 0, r: "Nichts passiert. Außer dass du jetzt Lust auf Espresso hast." }
            ]
        },
        {
            id: "cof_chewing",
            title: "Lautes Kauen",
            text: "Die Kollegin Sabine isst einen Apfel. Mit offenem Mund. SCHMATZ. KNACK. SCHMATZ.",
            opts: [
                { t: "Kopfhörer auf!", req: "headphones", m: 0, f: 5, a: -10, c: 0, r: "Stille. Frieden." },
                { t: "Wutball kneten", req: "stressball", m: 10, f: 0, a: -5, c: 0, r: "Du drückst den Ball fast kaputt. Deine Ader an der Stirn pocht." },
                { t: "Kommentieren", m: 5, f: 0, a: 10, c: 5, r: "Es gibt Streit. Stimmung im Keller." }
            ]
        },
		{
            id: "cof_gossip",
            title: "Tratsch am Wasserspender",
            text: "Du hörst Frau Gräte flüstern: 'Der Chef war gestern im Seminar 'Positive Leadership'. Er flippt jetzt total aus, wenn jemand das Wort 'Problem' sagt. Er will nur noch 'Herausforderung' hören. Wer 'Problem' sagt, kriegt sofort die Kündigungsandrohung.'",
            opts: [
                { 
                    t: "Ins Gespräch einsteigen", 
                    m: 10, f: 5, a: -5, c: 10,
                    r: "Du lästerst eine Runde mit. Plötzlich steht der Chef hinter euch und rollt genervt mit den Augen. 'Haben wir nichts zu tun, Müller?' Er notiert sich deinen Namen. Aber die Info hast du." 
                },
                { 
                    t: "Ignorieren und Kaffee holen", 
                    m: 2, f: 0, a: 0, c: 0, 
                    r: "Du hältst dich aus dem Flurfunk raus. Besser für die Karriere, aber du hast vielleicht was verpasst." 
                }
            ]
        },
		{
            id: "cof_chef_title",
            title: "Gespräch am Nebentisch",
            text: "Du hörst, wie sich der Kantinen-Chef lautstark beschwert: 'Ich bin kein KOCH! Ich bin *Senior Nutrition Artist*! Wer mich noch einmal 'Koch' nennt, kriegt versalzene Suppe bis zur Rente!'",
            opts: [
                { 
                    t: "Grinsend zuhören", 
                    m: 5, f: 5, a: 0, c: 0, 
                    r: "Senior Nutrition Artist... alles klar. Man kann es auch übertreiben." 
                },
                { 
                    t: "Ihn 'Koch' rufen (Provokation)", 
                    m: 5, f: 0, a: 10, c: 5, 
                    r: "Er wirft dir einen bösen Blick zu. Dein nächstes Essen wird furchtbar schmecken." 
                }
            ]
        }
    ],

// === SIDE QUESTS ===
    sidequests: [
        // --- TEXT QUESTS ---
        {
            id: "sq_toilet",
            kind: "text",
            title: "Der Gang zur Toilette",
            text: "Du bist auf dem Weg zum Klo. Im Flur steht der Marketing-Leiter und sucht ein Opfer für ein 'spontanes Brainstorming'.",
            opts: [
                { t: "In die Putzkammer ducken", m: 10, f: 10, a: 0, c: 5, r: "Er ist vorbeigelaufen. Knapp war's. Du riechst jetzt nach Allzweckreiniger." },
                { t: "Augenkontakt und lächeln", m: 60, f: -10, a: 30, c: -5, r: "Fehler! Du sitzt jetzt in einem Meeting über 'Synergien'. Deine Blase drückt." }
            ]
        },
        {
            id: "sq_cake",
            kind: "text",
            title: "Kuchen in der Küche",
            text: "Jemand hat Geburtstagskuchen in die Küche gestellt. Es ist Schoko-Sahne. Aber Chantal steht davor und redet über ihre neue Diät.",
            opts: [
                { t: "Kuchen schnappen und rennen", m: 10, f: 5, a: -10, c: 0, r: "Lecker! Chantal hat dich nur böse angeguckt, weil du Kohlenhydrate isst." },
                { t: "Gespräch anfangen", m: 30, f: 0, a: 20, c: 0, r: "Der Kuchen war weg, bis sie fertig war mit reden. Du hast Hunger und bist genervt." }
            ]
        },
        {
            id: "sq_fire",
            kind: "text",
            title: "Der Feueralarm",
            text: "Der Alarm geht los. Es riecht aber nur nach verbranntem Popcorn aus der Mikrowelle im 2. Stock.",
            opts: [
                { t: "Sitzen bleiben", m: 5, f: 20, a: -5, c: 10, r: "Es war nur eine Übung/Popcorn. Du hast weitergezockt. Riskant, aber gemütlich." },
                { t: "Rausgehen", m: 45, f: -10, a: 10, c: -5, r: "45 Minuten in der Kälte stehen. Du hast dich erkältet." }
            ]
        },
        {
            id: "sq_usb",
            kind: "text",
            title: "Fundsache",
            text: "Auf dem Flur liegt ein USB-Stick mit der Aufschrift 'GEHEIM'.",
            opts: [
                { t: "Einstecken (Neugier)", loot: "usb_stick", m: 5, f: 0, a: 0, c: 5, r: "Du hast den Stick. Wer weiß, was da drauf ist?" },
                { t: "Abgeben", m: 10, f: -5, a: 0, c: -5, r: "Du bist ein braver Mitarbeiter. Langweilig." }
            ]
        },
        {
            id: "sq_printer",
            kind: "text",
            title: "Der Drucker-Stau",
            text: "Du gehst am großen Kopierer vorbei. Er piept. 'Papierstau in Fach 4'. Es steht niemand dabei.",
            opts: [
                { t: "Ignorieren und weitergehen", m: 5, f: 10, a: 0, c: 5, r: "Nicht dein Ticket, nicht dein Problem. Du pfeifst unschuldig." },
                { t: "Fach 4 öffnen", m: 20, f: -10, a: 15, c: 10, r: "Der Toner ist explodiert. Deine Hände sind blau. Aber der Stau ist weg." },
                { t: "Mit Hammer 'reparieren'", req: "hammer", m: 10, f: 0, a: -20, c: 20, r: "Du hast fest draufgehauen. Das Piepen hat aufgehört (weil das Display kaputt ist). Befriedigend." }
            ]
        },
        {
            id: "sq_investigation",
            kind: "text",
            title: "Die verschwundene Maus",
            text: "Frau Erna vom Empfang vermisst ihre 'Glücksmaus'. Sie ist weg. Der Hauptverdächtige ist der Büro-Hund 'Bello'.",
            opts: [
                { t: "Detektiv spielen", m: 30, f: 10, a: -10, c: 0, r: "Du findest die Maus in Bellos Körbchen. Sie ist vollgesabbert. Erna ist überglücklich und schenkt dir Schokolade." },
                { t: "Neue Maus aus dem Lager holen", m: 10, f: -5, a: 0, c: 0, r: "Problem gelöst, aber Erna ist traurig. 'Es ist nicht dasselbe!'" },
                { t: "Bello verhören", m: 15, f: 20, a: -20, c: 5, r: "Du bellst den Hund an. Der Chef kommt vorbei: 'Alles okay bei Ihnen?'" }
            ]
        },
        {
            id: "sq_loose_cable",
            kind: "text",
            title: "Die Stolperfalle",
            text: "Im Flur liegt ein LAN-Kabel quer über dem Weg. Der Chef kommt gleich hier lang.",
            opts: [
                { t: "Festkleben", req: "tape", m: 5, f: -5, a: 0, c: -5, r: "Gefahr gebannt. Chef stolpert nicht. Du bist der unsichtbare Held." },
                { t: "Kabel mitnehmen", loot: "kabel", m: 5, f: 5, a: 0, c: 10, r: "Du nimmst das Kabel einfach mit. Jetzt stolpert keiner, aber jemand hat kein Netz mehr. Inventar +1." },
                { t: "Liegen lassen", m: 0, f: 10, a: 0, c: 0, r: "Mal sehen, was passiert..." }
            ]
        },
        {
            id: "sq_package_open",
            kind: "text",
            title: "Das Amazon Paket",
            text: "Ein Paket für die IT ist da. Es ist extrem fest verklebt.",
            opts: [
                { t: "Mit Schraubendreher öffnen", req: "screw", m: 5, f: 0, a: -5, c: 0, r: "Aufgestochen. Inhalt: Neue Mauspads." },
                { t: "Mit Schlüssel aufkratzen", m: 10, f: 0, a: 5, c: 0, r: "Schlüssel verbogen. Paket offen." }
            ]
        },
        {
            id: "sq_shelf",
            kind: "text",
            title: "Das wackelige Regal",
            text: "Im Lager droht das Regal mit den Tonern umzukippen.",
            opts: [
                { t: "Anbinden", req: "zip_ties", m: 10, f: -5, a: 0, c: 0, r: "Mit 10 Kabelbindern an der Heizung befestigt. Hält." },
                { t: "Dübeln (zu viel Arbeit)", m: 60, f: -20, a: 10, c: -5, r: "Du hast es richtig repariert. Keiner dankt es dir." },
                { t: "Warnschild (Zettel)", req: "wifi_note", m: 5, f: 5, a: 0, c: 0, r: "Zettel 'Vorsicht!' drangeklebt. Pflicht erfüllt." }
            ]
        },
        {
            id: "sq_noise",
            kind: "text",
            title: "Baustellenlärm",
            text: "Draußen wird die Straße aufgerissen. Presslufthammer. BRRRRRRRT.",
            opts: [
                { t: "Kopfhörer auf", req: "headphones", m: 0, f: 5, a: -20, c: 0, r: "Himmlische Ruhe." },
                { t: "Fenster zu", m: 5, f: 0, a: 5, c: 0, r: "Hilft kaum. Es wird stickig." }
            ]
        },
        {
            id: "sq_loot_crate",
            kind: "text",
            title: "Die 'Zu Verschenken' Kiste",
            text: "Jemand hat eine Kiste mit der Aufschrift 'ZU VERSCHENKEN' in den Flur gestellt. Ein Biotop aus Staub, alten Kabeln und vergessenen Bürotäumen.",
            opts: [
                { 
                    t: "Das schwere 'Buch' bergen", 
                    loot: "manual", 
                    m: 10, f: 5, a: 0, c: 0, 
                    r: "Du ziehst es aus dem Stapel. Es ist... ein 'Windows 95 Handbuch'! Antikes Wissen für echte Kenner. Inventar +1." 
                },
                { 
                    t: "Mutig in den Kabelsalat greifen", 
                    loot: "kabel", 
                    m: 10, f: 5, a: 0, c: 0, 
                    r: "Du kämpfst mit dem Knoten und gewinnst! Ein langes, graues LAN-Kabel gehört jetzt dir. Inventar +1." 
                },
                { 
                    t: "Ganz unten tasten (Vorsicht: Weich)", 
                    loot: "stressball", 
                    m: 10, f: 5, a: 0, c: 0, 
                    r: "Igit... was ist das? Ach, nur ein alter Wut-Ball! Er ist etwas klebrig, aber drückbar. Inventar +1." 
                },
                { 
                    t: "Das silberne Glitzern untersuchen", 
                    loot: "tape", 
                    m: 10, f: 5, a: 0, c: 0, 
                    r: "Der heilige Gral der Reparatur! Eine fast volle Rolle Panzertape. Damit kannst du das Universum (oder Drucker) flicken. Inventar +1." 
                }
            ]
        },
        {
            id: "sq_chair",
            kind: "text",
            title: "Der Chefsessel",
            text: "Der Chef hat einen neuen Stuhl. Sein alter (sehr bequemer) steht auf dem Flur zum Sperrmüll.",
            opts: [
                { t: "Stuhl retten & reparieren", req: "tape", m: 20, f: 10, a: -20, c: 0, r: "Eine Rolle Tape für die Armlehne und er ist wie neu. Du sitzt jetzt wie ein König. Faulheit steigt (weil so bequem)." },
                { t: "Rollen klauen", req: "screw", m: 10, f: 5, a: 0, c: 0, r: "Du schraubst die guten Rollen ab für deinen Stuhl." },
                { t: "Ignorieren", m: 0, f: 0, a: 0, c: 0, r: "Dein Rücken wird es dir nicht danken." }
            ]
        },
		{
            id: "sq_janitor_talk",
            kind: "text",
            title: "Raucherpause mit Egon",
            text: "Du triffst Hausmeister Egon am Hintereingang. Er kämpft mit seinem Feuerzeug und flucht über 'diese neumodische Technik'.",
            opts: [
                { 
                    t: "Ihm Feuer geben & zuhören", 
                    m: 10, f: 5, a: -5, c: 0, 
                    r: "Er zieht tief an der Zigarette. 'Danke Jung. Diese digitalen Schlösser machen mich fertig! Ich hab das vom Papierlager im Keller jetzt einfach auf 0-0-0-0 gestellt. Aber sags keinem!' Gut zu wissen." 
                },
                { 
                    t: "Schnell weitergehen", 
                    m: 2, f: 0, a: 0, c: 0, 
                    r: "Du hast keine Zeit für seine Geschichten. Du nickst nur kurz und gehst." 
                }
            ]
        },
		{
            id: "sq_archive_find",
            kind: "text",
            title: "Im Archiv",
            text: "Du suchst Druckerpapier im Archiv. Dabei fällt dir der Ordner 'Steuererklärung 1990' auf. Er ist ungewöhnlich dick. Du guckst rein: Er ist voller 'Mon Chéri' Pralinen. Das Geheimversteck von Sekretärin Gabi!",
            opts: [
                { 
                    t: "Eine stibitzen & Klappe halten", 
                    loot: "donut",
                    m: 5, f: 5, a: 0, c: 0, 
                    r: "Schmeckt nach altem Alkohol. Aber du weißt jetzt, wo der Vorrat liegt." 
                },
                { 
                    t: "Ordner zurückstellen", 
                    m: 5, f: 0, a: -5, c: 0, 
                    r: "Du lässt Gabi ihren Schatz. Diskretion ist Ehrensache." 
                }
            ]
        },

        // --- PHONE EVENTS (Chat-System) ---
        {
            id: "sq_telegram",
            kind: "phone",
            appName: "Telegram",
            title: "Gruppe: Schatten-IT",
            msg: "Admn_Rogue: 'Müller! Wir manipulieren heute die Zeiterfassung. Alle gehen um 15 Uhr, System loggt 17 Uhr. Bist du dabei?'",
            startNode: "root",
            nodes: {
                "root": { 
                    text: "Admn_Rogue: 'Bist du dabei?'", 
                    opts: [
                        { t: "Ja, sicher!", next: "yes" },
                        { t: "Zu gefährlich", next: "no" },
                        { t: "Was springt für mich raus?", next: "haggle" }
                    ]
                },
                "yes": { 
                    text: "Admn_Rogue: 'Sauber. Installier das Skript im Anhang auf dem Mainframe. Passwort ist 1234.'", 
                    opts: [
                        { t: "Skript installieren", next: "done_hack" },
                        { t: "Doch Rückzieher machen", next: "chicken" }
                    ]
                },
                "haggle": {
                    text: "Admn_Rogue: 'Wir geben dir das Root-Passwort.'",
                    opts: [
                        { t: "Deal!", next: "deal_pw" },
                        { t: "Nein danke", next: "no" }
                    ]
                },
                "no": { 
                    text: "Admn_Rogue: 'Langweiler. Wir löschen dich aus der Gruppe.'", 
                    opts: [
                        { t: "Okay...", next: "kicked" }
                    ]
                }
            },
            results: {
                "done_hack": { txt: "HACK ERFOLGREICH! Faulheit +30, Chef-Radar +20. Du gehst heute früher.", fl: 30, al: -10, cr: 20 },
                "chicken": { txt: "Du Feigling. Nichts passiert.", fl: 0, al: 5, cr: 0 },
                "kicked": { txt: "Aus Gruppe geworfen. Langweilig.", fl: -5, al: 0, cr: -5 },
                "deal_pw": { txt: "Du hast das Root-Passwort erhalten!", loot: "admin_pw", fl: 10, al: 0, cr: 10 }
            }
        },
        {
            id: "sq_spam",
            kind: "phone",
            appName: "SMS",
            title: "Spam-Bot",
            msg: "InfoService: Sie haben ein iPhone 50 gewonnen! Klicken Sie hier: www.virus-load.ru",
            startNode: "root",
            nodes: {
                "root": {
                    text: "Klicken Sie JETZT für Ihren Gewinn!",
                    opts: [
                        { t: "Klicken (Gier)", next: "virus_start" },
                        { t: "Löschen", next: "clean" }
                    ]
                },
                "virus_start": {
                    text: "DOWNLOADING... 99%... INSTALLING ROOTKIT...",
                    opts: [
                        { t: "ABBRECHEN!!!", next: "virus_fail" },
                        { t: "Abwarten...", next: "virus_doom" }
                    ]
                }
            },
            results: {
                "clean": { txt: "Spam gelöscht. Klug.", fl: -5, al: 0, cr: 0 },
                "virus_fail": { txt: "Gerade noch verhindert. Puh.", fl: 0, al: 10, cr: 0 },
                "virus_doom": { txt: "VIRUS AKTIV! Handy spielt laut Musik. Chef hört es!", fl: 0, al: 30, cr: 40, virus: true }
            }
        },
        {
            id: "sq_tinder",
            kind: "phone",
            appName: "Tinder",
            title: "Neues Match!",
            msg: "Lisa (200m): 'Hey, arbeitest du auch bei GlobalCorp? Ich sehe dich oft am Fenster...'",
            startNode: "root",
            nodes: {
                "root": {
                    text: "Lisa: 'Hast du Lust auf einen Kaffee in der Pause?'",
                    opts: [
                        { t: "Ja, gerne!", next: "date_yes" },
                        { t: "Keine Zeit, Arbeit.", next: "date_no" },
                        { t: "Bist du vom HR?", next: "hr_check" }
                    ]
                },
                "date_yes": {
                    text: "Lisa: 'Super! Treffen uns in 10 Min in der Lobby. 😉'",
                    opts: [
                        { t: "Hingehen", next: "go_date" },
                        { t: "Versetzen (Angst)", next: "ghost" }
                    ]
                },
                "hr_check": {
                    text: "Lisa: 'Haha, nein! Ich bin im Marketing. Komm schon!'",
                    opts: [
                        { t: "Okay, bis gleich", next: "go_date" }
                    ]
                }
            },
            results: {
                "date_no": { txt: "Sie hat das Match aufgelöst.", fl: 0, al: 5, cr: 0 },
                "go_date": { txt: "Date lief super! Gute Laune.", fl: 15, al: -30, cr: 10 },
                "ghost": { txt: "Du hast sie versetzt. Schlechtes Gewissen.", fl: 0, al: 10, cr: 0 }
            }
        },
        {
            id: "sq_linkedin",
            kind: "phone",
            appName: "LinkedIn",
            title: "Nachricht: Headhunter",
            msg: "Recruiter_Lisa: 'Hallo! Wir suchen einen Senior IT-Lead. 80k Gehalt, Homeoffice, Obstkorb. Interesse?'",
            startNode: "root",
            nodes: {
                "root": {
                    text: "Recruiter: 'Haben Sie Interesse an einem Wechsel?'",
                    opts: [
                        { t: "Ja, erzähl mir mehr!", next: "interest" },
                        { t: "Nein, ich liebe GlobalCorp.", next: "loyal" }
                    ]
                },
                "interest": {
                    text: "Recruiter: 'Super! Können Sie uns vertrauliche Systemdaten als Arbeitsprobe schicken?'",
                    opts: [
                        { t: "Klar, hier (Datenleck)", next: "leak" },
                        { t: "Spinnst du? Blockiert!", next: "block" }
                    ]
                },
                "loyal": {
                    text: "Recruiter: 'Schade. Viel Spaß in der Hölle.'",
                    opts: [{ t: "Tschüss", next: "end_sad" }]
                }
            },
            results: {
                "leak": { txt: "Daten gesendet. Du fühlst dich schmutzig, aber reich.", fl: 10, al: -20, cr: 50 },
                "block": { txt: "Phishing-Versuch abgewehrt. Stolz.", fl: -5, al: 0, cr: -10 },
                "end_sad": { txt: "Du bleibst loyal. Warum eigentlich?", fl: 0, al: 10, cr: -5 }
            }
        },
        {
            id: "sq_darknet",
            kind: "phone",
            appName: "Tor Browser",
            title: "Das Angebot",
            msg: "Anon: 'Ich kaufe Firmengeheimnisse. 1 Bitcoin pro Datensatz. Interesse?'",
            startNode: "root",
            nodes: {
                "root": {
                    text: "Anon: 'Interesse an schnellem Geld?'",
                    opts: [
                        { t: "Niemals! (Blockieren)", next: "good" },
                        { t: "Erzähl mir mehr...", next: "bad" }
                    ]
                },
                "bad": {
                    text: "Anon: 'Lade einfach die Kundendatenbank hoch. Keiner wird es merken.'",
                    opts: [
                        { t: "Upload starten", next: "crime" },
                        { t: "Rückzieher machen", next: "chicken" }
                    ]
                }
            },
            results: {
                "good": { txt: "Du bleibst sauber. Dein Gewissen ist rein.", fl: 0, al: 0, cr: -10 },
                "chicken": { txt: "Das war knapp. Besser Finger weg.", fl: 0, al: 5, cr: 0 },
                "crime": { txt: "Upload fertig. Du bist reich! Aber paranoid. Radar +50!", fl: 20, al: -50, cr: 50 }
            }
        },
        {
            id: "sq_moral_bernd",
            kind: "phone",
            appName: "Teams",
            title: "Bernd (Vertrieb)",
            msg: "Bernd: 'Hör mal, ganz heikles Thema. Kannst du gerade schreiben?'",
            startNode: "root",
            nodes: {
                "root": {
                    text: "Bernd: 'Ich hab dem Kunden aus Versehen die interne Kalkulation mit unserer riesigen Marge geschickt statt dem Angebot! 😱 Wenn der Chef das sieht, bin ich tot. Kannst du die Mail vom Server löschen, bevor der Kunde sie öffnet?'",
                    opts: [
                        { t: "Löschen (Regelverstoß)", next: "wipe" },
                        { t: "Ablehnen (Ehrlich bleiben)", next: "deny" },
                        { t: "Was springt für mich raus?", next: "deal" }
                    ]
                },
                "deal": {
                    text: "Bernd: 'Ich geb dir 50 Euro bar auf die Hand! Mach schon, er ist gerade online!'",
                    opts: [
                        { t: "Deal: Her mit der Kohle", next: "cash" },
                        { t: "Nein, zu riskant.", next: "deny" }
                    ]
                }
            },
            results: {
                "wipe": { txt: "Spurlos gelöscht. Bernd schuldet dir was. Du fühlst dich wie ein Hacker, aber das Risiko war hoch.", fl: 0, al: -15, cr: 15 },
                "deny": { txt: "Du tust nichts. Bernd wird kurz darauf ins Chefbüro zitiert. Man hört Schreie. Dein Gewissen ist rein, aber Bernd hasst dich.", fl: 0, al: 10, cr: -5 },
                "cash": { txt: "50 Euro eingesteckt. Mail ist weg. Ein lukrativer Tag, solange niemand in die Logs schaut...", fl: 5, al: -20, cr: 25 }
            }
        },
        {
            id: "sq_mom_help",
            kind: "phone",
            appName: "WhatsApp",
            title: "Mama ❤️",
            msg: "Mama: 'Hallo Schatz, der Computer sagt, ich muss 500€ an Microsoft überweisen. Ist das wichtig?'",
            startNode: "root",
            nodes: {
                "root": {
                    text: "Mama: 'Da ist so ein rotes Fenster. Und ein netter Mann am Telefon sagt, ich habe einen Trojaner.'",
                    opts: [
                        { t: "AUFLEGEN! SOFORT!", next: "hangup" },
                        { t: "Gib mir den Mann mal.", next: "troll" },
                        { t: "Keine Zeit, Mama.", next: "ignore" }
                    ]
                },
                "hangup": {
                    text: "Mama: 'Aber er klang sehr seriös... er hieß John Smith.'",
                    opts: [
                        { t: "MAMA! STECKER ZIEHEN!", next: "pull_plug" },
                        { t: "Überweis bloß nichts!", next: "warn" }
                    ]
                },
                "troll": {
                    text: "Mama: 'Er sagt, er darf nicht mit Dritten reden wegen Datenschutz. Er wird jetzt lauter.'",
                    opts: [
                        { t: "Sag ihm: 'Mein Sohn ist beim BSI'", next: "bsi" }
                    ]
                }
            },
            results: {
                "pull_plug": { txt: "Sie hat den Stecker gezogen. PC aus. Geld sicher. Du bist ein guter Sohn/Tochter.", fl: -5, al: 5, cr: 0 },
                "warn": { txt: "Zu spät. Sie sucht schon die TAN-Liste. Das gibt ein langes Telefonat heute Abend.", fl: 0, al: 20, cr: 0 },
                "ignore": { txt: "Du ignorierst es. Dein Erbe ist gerade um 500€ geschrumpft.", fl: 5, al: 0, cr: 0 },
                "bsi": { txt: "Der Betrüger hat sofort aufgelegt! Mama hält dich für einen Geheimagenten.", fl: 0, al: -10, cr: 5 }
            }
        },
        {
            id: "sq_wrong_number",
            kind: "phone",
            appName: "SMS",
            title: "Unbekannt",
            msg: "Hey Bro, hast du das Zeug? Bin in 5 Min am Bahnhof. Bring den Stoff mit.",
            startNode: "root",
            nodes: {
                "root": {
                    text: "Unbekannt: 'Hey Bro, hast du das Zeug? Bin in 5 Min am Bahnhof.'",
                    opts: [
                        { t: "Falsche Nummer.", next: "boring" },
                        { t: "Antwort: 'Die Pakete wurden verworfen.'", next: "tech_joke" },
                        { t: "Antwort: 'Zugriff verweigert (403)'", next: "http_joke" }
                    ]
                },
                "tech_joke": {
                    text: "Unbekannt: 'Hä? Was laberst du? Hast du das Gras oder nicht?'",
                    opts: [
                        { t: "Antwort: 'Firewall blockiert Port 420.'", next: "confused" }
                    ]
                },
                "http_joke": {
                    text: "Unbekannt: 'Alter, verarsch wen anders. Ich komm jetzt vorbei.'",
                    opts: [
                        { t: "Blockieren", next: "block" }
                    ]
                }
            },
            results: {
                "boring": { txt: "Langweilig, aber sicher.", fl: 0, al: 0, cr: 0 },
                "confused": { txt: "Er hat aufgehört zu schreiben. Er denkt wohl, die Polizei hört mit. Lustig!", fl: 5, al: -10, cr: 0 },
                "block": { txt: "Nummer blockiert. Besser ist das.", fl: 0, al: 5, cr: 0 }
            }
        },
        {
            id: "sq_ebay",
            kind: "phone",
            appName: "Kleinanzeigen",
            title: "Nachricht zu: 'Alte Grafikkarte'",
            msg: "Kuseng88: 'Hallo. Noch da? Tausche gegen Teppich?'",
            startNode: "root",
            nodes: {
                "root": {
                    text: "Kuseng88: 'Tausche gegen Teppich? Komme heute holen.'",
                    opts: [
                        { t: "Nein, nur Cash.", next: "cash" },
                        { t: "Was für ein Teppich?", next: "carpet" },
                        { t: "Blockieren", next: "block" }
                    ]
                },
                "cash": {
                    text: "Kuseng88: 'Gebe dir 10 Euro und Samsung Galaxy S3 (Display kaputt).'",
                    opts: [
                        { t: "Deal (Müll loswerden)", next: "bad_deal" },
                        { t: "Vergiss es.", next: "block" }
                    ]
                },
                "carpet": {
                    text: "Kuseng88: 'Fliegt gut. Farbe rot. Bisschen Flecken von Katze.'",
                    opts: [
                        { t: "Ich bin raus.", next: "block" }
                    ]
                }
            },
            results: {
                "block": { txt: "Nutzer blockiert. Du behältst deinen Elektroschrott.", fl: 0, al: 5, cr: 0 },
                "bad_deal": { txt: "Du hast jetzt 10€ und ein kaputtes Handy. Immerhin ist die Grafikkarte weg.", fl: 5, al: 0, cr: 0 }
            }
        },
        {
            id: "sq_pager",
            kind: "phone",
            appName: "System Warnung",
            title: "🚨 CRITICAL ALERT",
            msg: "Server 'DB_MASTER' antwortet nicht (Ping Timeout). Temperatur: 85°C. Lüfterdrehzahl: 0 RPM.",
            startNode: "root",
            nodes: {
                "root": {
                    text: "Optionen für Remote-Zugriff:",
                    opts: [
                        { t: "Not-Aus (Shutdown)", next: "shutdown" },
                        { t: "Lüfter auf 100% zwingen", next: "fan_boost" },
                        { t: "Ignorieren (Mut zur Lücke)", next: "ignore" }
                    ]
                },
                "fan_boost": {
                    text: "Befehl gesendet... WARNUNG: Vibrationen erkannt. Trotzdem fortfahren?",
                    opts: [
                        { t: "JA, MACH KALT!", next: "fan_success" },
                        { t: "Abbruch, lieber Shutdown", next: "shutdown" }
                    ]
                }
            },
            results: {
                "shutdown": { txt: "Server ist aus. Die Datenbank ist weg, aber die Hardware lebt. Chef fragt, warum alles steht.", fl: -10, al: 0, cr: 10 },
                "fan_success": { txt: "Lüfter läuft auf 5000 RPM. Man hört es bis in den Flur. Aber Temperatur sinkt. Gerettet!", fl: -5, al: -5, c: -10 },
                "ignore": { txt: "Verbindung verloren. Rauchmelder im Serverraum aktiviert. Das war eine schlechte Idee.", fl: 10, al: 50, cr: 50 }
            }
        },
        {
            id: "sq_food_vote",
            kind: "phone",
            appName: "Slack",
            title: "#random",
            msg: "@channel: Leute, wir bestellen! Abstimmung endet in 2 Minuten!",
            startNode: "root",
            nodes: {
                "root": {
                    text: "Aktueller Stand: 4x Pizza, 4x Sushi. Deine Stimme entscheidet.",
                    opts: [
                        { t: "Team Pizza! 🍕", next: "pizza" },
                        { t: "Team Sushi! 🍣", next: "sushi" },
                        { t: "Ich habe Stullen dabei.", next: "stulle" }
                    ]
                },
                "pizza": {
                    text: "Kevin: 'Geil! Aber bitte ohne Käse, ich hab Laktose.'",
                    opts: [
                        { t: "Pizza bestellen", next: "pizza_win" }
                    ]
                }
            },
            results: {
                "pizza_win": { txt: "Pizza bestellt. Du bist satt und glücklich (Fettkoma).", fl: 10, al: -10, cr: 0 },
                "sushi": { txt: "Sushi bestellt. Es ist teuer und macht nicht satt. Aber du fühlst dich gesund.", fl: 0, al: 5, cr: 0 },
                "stulle": { txt: "Du isst dein Brot alleine. Die anderen haben Spaß. Du sparst Geld.", fl: 0, al: 10, cr: 0 }
            }
        },
        {
            id: "sq_real_prince",
            kind: "phone",
            appName: "E-Mail App",
            title: "URGENT BUSINESS PROPOSAL",
            msg: "Prince_Abubakar: 'Greetings My Dearest Friend! I am Prince Abubakar. I have 25 Million USD stuck in a trust fund. I need a foreign partner to unlock it. You will keep 30%!'",
            startNode: "root",
            nodes: {
                "root": {
                    text: "Prince_Abubakar: 'Please, I need your trust. Can you help me move the funds?'",
                    opts: [
                        { t: "Sofort löschen (Klassiker)", next: "delete" },
                        { t: "Zum Spaß antworten: 'Klar, immer!'", next: "reply_joke" },
                        { t: "Trollen: 'Schick mir erst Beweisfoto'", next: "photo" }
                    ]
                },
                "reply_joke": {
                    text: "Prince_Abubakar: 'GOD BLESS YOU! I knew you are a good person. Please, where should I send the wire transfer? IBAN?'",
                    opts: [
                        { t: "IBAN schicken (Risiko!)", next: "send_iban" },
                        { t: "Rückzieher machen", next: "chicken" }
                    ]
                },
                "photo": {
                    text: "Prince_Abubakar: *Sendet Bild von sich auf einem Gold-Thron mit aktueller Tageszeitung*. 'Is real. Please send IBAN now.'",
                    opts: [
                        { t: "Okaaaay... hier ist die IBAN.", next: "send_iban" },
                        { t: "Ist bestimmt Photoshop. Block.", next: "delete" }
                    ]
                }
            },
            results: {
                "delete": { txt: "Spam gelöscht. Man fällt ja nicht auf den ältesten Trick der Welt rein.", fl: 0, al: 0, cr: 0 },
                "chicken": { txt: "Du hast den Kontakt abgebrochen. Sicher ist sicher.", fl: 0, al: 0, cr: 0 },
                "send_iban": { 
                    txt: "PING! Dein Handy vibriert. Banking-App: 'Eingang: +7.500.000,00 USD'. ... Es hat wirklich geklappt?! Du bist reich! Warum warnen einen Leute eigentlich immer davor?", 
                    fl: 100, al: -100, cr: 0 
                }
            }
        },
        {
            id: "sq_music",
            kind: "phone",
            appName: "Spotify",
            title: "Musik-Wahl",
            msg: "Playlist für Coding-Session auswählen?",
            startNode: "root",
            nodes: {
                "root": {
                    text: "Was willst du hören?",
                    opts: [
                        { t: "Lo-Fi Beats (Entspannung)", next: "lofi" },
                        { t: "Doom Metal (Energie)", next: "metal" },
                        { t: "Stille", next: "silence" }
                    ]
                }
            },
            results: {
                "lofi": { txt: "Du entspannst dich. Faulheit steigt, Aggro sinkt.", fl: 20, al: -20, cr: 0 },
                "metal": { txt: "AGGRESSION! Du arbeitest Tickets in Rekordzeit ab.", fl: -20, al: 10, cr: -5 },
                "silence": { txt: "Langweilig.", fl: 0, al: 0, cr: 0 }
            }
        }
    ],
};