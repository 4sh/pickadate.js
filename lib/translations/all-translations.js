// Arabic

(function (global, factory) {
   return typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('../picker')) :
   typeof define === 'function' && define.amd ? define(['picker'], factory) : factory(global.Picker)
}(this, function (Picker) {
    'use strict';
Picker.defineDateLocale('ar', {
    monthsFull: [ 'يناير', 'فبراير', 'مارس', 'ابريل', 'مايو', 'يونيو', 'يوليو', 'اغسطس', 'سبتمبر', 'اكتوبر', 'نوفمبر', 'ديسمبر' ],
    monthsShort: [ 'يناير', 'فبراير', 'مارس', 'ابريل', 'مايو', 'يونيو', 'يوليو', 'اغسطس', 'سبتمبر', 'اكتوبر', 'نوفمبر', 'ديسمبر' ],
    weekdaysFull: [ 'الاحد', 'الاثنين', 'الثلاثاء', 'الاربعاء', 'الخميس', 'الجمعة', 'السبت' ],
    weekdaysShort: [ 'الاحد', 'الاثنين', 'الثلاثاء', 'الاربعاء', 'الخميس', 'الجمعة', 'السبت' ],
    today: 'اليوم',
    clear: 'مسح',
    format: 'yyyy mmmm dd',
    formatSubmit: 'yyyy/mm/dd'
});

Picker.defineTimeLocale('ar', {
    clear: 'مسح'
});

}));
// Bulgarian

(function (global, factory) {
   return typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('../picker')) :
   typeof define === 'function' && define.amd ? define(['picker'], factory) : factory(global.Picker)
}(this, function (Picker) {
Picker.defineDateLocale('bg_BG', {
    monthsFull: [ 'януари','февруари','март','април','май','юни','юли','август','септември','октомври','ноември','декември' ],
    monthsShort: [ 'янр','фев','мар','апр','май','юни','юли','авг','сеп','окт','ное','дек' ],
    weekdaysFull: [ 'неделя', 'понеделник', 'вторник', 'сряда', 'четвъртък', 'петък', 'събота' ],
    weekdaysShort: [ 'нд', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб' ],
    today: 'днес',
    clear: 'изтривам',
    firstDay: 1,
    format: 'd mmmm yyyy г.',
    formatSubmit: 'yyyy/mm/dd'
});

Picker.defineTimeLocale('bg_BG', {
    clear: 'изтривам'
});
}));
// Bosnian

(function (global, factory) {
   return typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('../picker')) :
   typeof define === 'function' && define.amd ? define(['picker'], factory) : factory(global.Picker)
}(this, function (Picker) {

Picker.defineDateLocale('bs_BA', {
    monthsFull: [ 'januar', 'februar', 'mart', 'april', 'maj', 'juni', 'juli', 'august', 'septembar', 'oktobar', 'novembar', 'decembar' ],
    monthsShort: [ 'jan', 'feb', 'mar', 'apr', 'maj', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec' ],
    weekdaysFull: [ 'nedjelja', 'ponedjeljak', 'utorak', 'srijeda', 'cetvrtak', 'petak', 'subota' ],
    weekdaysShort: [ 'ne', 'po', 'ut', 'sr', 'če', 'pe', 'su' ],
    today: 'danas',
    clear: 'izbrisati',
    firstDay: 1,
    format: 'dd. mmmm yyyy.',
    formatSubmit: 'yyyy/mm/dd'
});

Picker.defineTimeLocale('bs_BA', {
    clear: 'izbrisati'
});

}));
// Catalan

(function (global, factory) {
   return typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('../picker')) :
   typeof define === 'function' && define.amd ? define(['picker'], factory) : factory(global.Picker)
}(this, function (Picker) {

Picker.defineDateLocale('ca_ES', {
    monthsFull: [ 'Gener', 'Febrer', 'Març', 'Abril', 'Maig', 'juny', 'Juliol', 'Agost', 'Setembre', 'Octubre', 'Novembre', 'Desembre' ],
    monthsShort: [ 'Gen', 'Feb', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Oct', 'Nov', 'Des' ],
    weekdaysFull: [ 'diumenge', 'dilluns', 'dimarts', 'dimecres', 'dijous', 'divendres', 'dissabte' ],
    weekdaysShort: [ 'diu', 'dil', 'dim', 'dmc', 'dij', 'div', 'dis' ],
    today: 'avui',
    clear: 'esborrar',
    close: 'tancar',
    firstDay: 1,
    format: 'dddd d !de mmmm !de yyyy',
    formatSubmit: 'yyyy/mm/dd'
});

Picker.defineTimeLocale('ca_ES', {
    clear: 'esborrar'
});
}));
// Czech

(function (global, factory) {
   return typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('../picker')) :
   typeof define === 'function' && define.amd ? define(['picker'], factory) : factory(global.Picker)
}(this, function (Picker) {

Picker.defineDateLocale('cs_CZ', {
    monthsFull: [ 'leden', 'únor', 'březen', 'duben', 'květen', 'červen', 'červenec', 'srpen', 'září', 'říjen', 'listopad', 'prosinec' ],
    monthsShort: [ 'led', 'úno', 'bře', 'dub', 'kvě', 'čer', 'čvc', 'srp', 'zář', 'říj', 'lis', 'pro' ],
    weekdaysFull: [ 'neděle', 'pondělí', 'úterý', 'středa', 'čtvrtek', 'pátek', 'sobota' ],
    weekdaysShort: [ 'ne', 'po', 'út', 'st', 'čt', 'pá', 'so' ],
    today: 'dnes',
    clear: 'vymazat',
    firstDay: 1,
    format: 'd. mmmm yyyy',
    formatSubmit: 'yyyy/mm/dd'
});

Picker.defineTimeLocale('cs_CZ', {
    clear: 'vymazat'
});
}));
// Danish

(function (global, factory) {
   return typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('../picker')) :
   typeof define === 'function' && define.amd ? define(['picker'], factory) : factory(global.Picker)
}(this, function (Picker) {

Picker.defineDateLocale('da_DK', {
    monthsFull: [ 'januar', 'februar', 'marts', 'april', 'maj', 'juni', 'juli', 'august', 'september', 'oktober', 'november', 'december' ],
    monthsShort: [ 'jan', 'feb', 'mar', 'apr', 'maj', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec' ],
    weekdaysFull: [ 'søndag', 'mandag', 'tirsdag', 'onsdag', 'torsdag', 'fredag', 'lørdag' ],
    weekdaysShort: [ 'søn', 'man', 'tir', 'ons', 'tor', 'fre', 'lør' ],
    today: 'i dag',
    clear: 'slet',
    close: 'luk',
    firstDay: 1,
    format: 'd. mmmm yyyy',
    formatSubmit: 'yyyy/mm/dd'
});

Picker.defineTimeLocale('da_DK', {
    clear: 'slet'
});
}));
// German

(function (global, factory) {
   return typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('../picker')) :
   typeof define === 'function' && define.amd ? define(['picker'], factory) : factory(global.Picker)
}(this, function (Picker) {

Picker.defineDateLocale('de_DE', {
    monthsFull: [ 'Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember' ],
    monthsShort: [ 'Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez' ],
    weekdaysFull: [ 'Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag' ],
    weekdaysShort: [ 'So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa' ],
    today: 'Heute',
    clear: 'Löschen',
    close: 'Schließen',
    firstDay: 1,
    format: 'dddd, dd. mmmm yyyy',
    formatSubmit: 'yyyy/mm/dd'
});

Picker.defineTimeLocale('de_DE', {
    clear: 'Löschen'
});
}));
// Greek

(function (global, factory) {
   return typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('../picker')) :
   typeof define === 'function' && define.amd ? define(['picker'], factory) : factory(global.Picker)
}(this, function (Picker) {
Picker.defineDateLocale('el_GR', {
    monthsFull: [ 'Ιανουάριος', 'Φεβρουάριος', 'Μάρτιος', 'Απρίλιος', 'Μάιος', 'Ιούνιος', 'Ιούλιος', 'Αύγουστος', 'Σεπτέμβριος', 'Οκτώβριος', 'Νοέμβριος', 'Δεκέμβριος' ],
    monthsShort: [ 'Ιαν', 'Φεβ', 'Μαρ', 'Απρ', 'Μαι', 'Ιουν', 'Ιουλ', 'Αυγ', 'Σεπ', 'Οκτ', 'Νοε', 'Δεκ' ],
    weekdaysFull: [ 'Κυριακή', 'Δευτέρα', 'Τρίτη', 'Τετάρτη', 'Πέμπτη', 'Παρασκευή', 'Σάββατο' ],
    weekdaysShort: [ 'Κυρ', 'Δευ', 'Τρι', 'Τετ', 'Πεμ', 'Παρ', 'Σαβ' ],
    today: 'σήμερα',
    clear: 'Διαγραφή',
    firstDay: 1,
    format: 'd mmmm yyyy',
    formatSubmit: 'yyyy/mm/dd'
});

Picker.defineTimeLocale('el_GR', {
    clear: 'Διαγραφή'
});
}));
// Spanish

(function (global, factory) {
   return typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('../picker')) :
   typeof define === 'function' && define.amd ? define(['picker'], factory) : factory(global.Picker)
}(this, function (Picker) {

Picker.defineDateLocale('es_ES', {
    monthsFull: [ 'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre' ],
    monthsShort: [ 'ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic' ],
    weekdaysFull: [ 'domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado' ],
    weekdaysShort: [ 'dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb' ],
    today: 'hoy',
    clear: 'borrar',
    close: 'cerrar',
    firstDay: 1,
    format: 'dddd d !de mmmm !de yyyy',
    formatSubmit: 'yyyy/mm/dd'
});

Picker.defineTimeLocale('es_ES', {
    clear: 'borrar'
});
}));
// Estonian

(function (global, factory) {
   return typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('../picker')) :
   typeof define === 'function' && define.amd ? define(['picker'], factory) : factory(global.Picker)
}(this, function (Picker) {

Picker.defineDateLocale('et_EE', {
    monthsFull: [ 'jaanuar', 'veebruar', 'märts', 'aprill', 'mai', 'juuni', 'juuli', 'august', 'september', 'oktoober', 'november', 'detsember' ],
    monthsShort: [ 'jaan', 'veebr', 'märts', 'apr', 'mai', 'juuni', 'juuli', 'aug', 'sept', 'okt', 'nov', 'dets' ],
    weekdaysFull: [ 'pühapäev', 'esmaspäev', 'teisipäev', 'kolmapäev', 'neljapäev', 'reede', 'laupäev' ],
    weekdaysShort: [ 'püh', 'esm', 'tei', 'kol', 'nel', 'ree', 'lau' ],
    today: 'täna',
    clear: 'kustutama',
    firstDay: 1,
    format: 'd. mmmm yyyy. a',
    formatSubmit: 'yyyy/mm/dd'
});

Picker.defineTimeLocale('et_EE', {
    clear: 'kustutama'
});
}));
// Basque

(function (global, factory) {
   return typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('../picker')) :
   typeof define === 'function' && define.amd ? define(['picker'], factory) : factory(global.Picker)
}(this, function (Picker) {
Picker.defineDateLocale('eu_ES', {
    monthsFull: [ 'urtarrila', 'otsaila', 'martxoa', 'apirila', 'maiatza', 'ekaina', 'uztaila', 'abuztua', 'iraila', 'urria', 'azaroa', 'abendua' ],
    monthsShort: [ 'urt', 'ots', 'mar', 'api', 'mai', 'eka', 'uzt', 'abu', 'ira', 'urr', 'aza', 'abe' ],
    weekdaysFull: [ 'igandea', 'astelehena', 'asteartea', 'asteazkena', 'osteguna', 'ostirala', 'larunbata' ],
    weekdaysShort: [ 'ig.', 'al.', 'ar.', 'az.', 'og.', 'or.', 'lr.' ],
    today: 'gaur',
    clear: 'garbitu',
    firstDay: 1,
    format: 'dddd, yyyy(e)ko mmmmren da',
    formatSubmit: 'yyyy/mm/dd'
});

    Picker.defineTimeLocale('eu_ES', {
    clear: 'garbitu'
});
}));
// Farsi

(function (global, factory) {
   return typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('../picker')) :
   typeof define === 'function' && define.amd ? define(['picker'], factory) : factory(global.Picker)
}(this, function (Picker) {

Picker.defineDateLocale('fa_ir', {
    monthsFull: [ 'ژانویه', 'فوریه', 'مارس', 'آوریل', 'مه', 'ژوئن', 'ژوئیه', 'اوت', 'سپتامبر', 'اکتبر', 'نوامبر', 'دسامبر'],
    monthsShort: [ 'ژانویه', 'فوریه', 'مارس', 'آوریل', 'مه', 'ژوئن', 'ژوئیه', 'اوت', 'سپتامبر', 'اکتبر', 'نوامبر', 'دسامبر' ],
    weekdaysFull: [ 'یکشنبه', 'دوشنبه', 'سه شنبه', 'چهارشنبه', 'پنجشنبه', 'جمعه', 'شنبه' ],
    weekdaysShort: [ 'یکشنبه', 'دوشنبه', 'سه شنبه', 'چهارشنبه', 'پنجشنبه', 'جمعه', 'شنبه' ],
    today: 'امروز',
    clear: 'پاک کردن',
    close: 'بستن',
    format: 'yyyy mmmm dd',
    formatSubmit: 'yyyy/mm/dd',
    labelMonthNext: 'ماه بعدی',
	labelMonthPrev: 'ماه قبلی'
});

    Picker.defineTimeLocale('fa_ir', {
    clear: 'پاک کردن'
});
}));
// Finnish

(function (global, factory) {
   return typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('../picker')) :
   typeof define === 'function' && define.amd ? define(['picker'], factory) : factory(global.Picker)
}(this, function (Picker) {

Picker.defineDateLocale('fi_FI', {
    monthsFull: [ 'tammikuu', 'helmikuu', 'maaliskuu', 'huhtikuu', 'toukokuu', 'kesäkuu', 'heinäkuu', 'elokuu', 'syyskuu', 'lokakuu', 'marraskuu', 'joulukuu' ],
    monthsShort: [ 'tammi', 'helmi', 'maalis', 'huhti', 'touko', 'kesä', 'heinä', 'elo', 'syys', 'loka', 'marras', 'joulu' ],
    weekdaysFull: [ 'sunnuntai', 'maanantai', 'tiistai', 'keskiviikko', 'torstai', 'perjantai', 'lauantai' ],
    weekdaysShort: [ 'su', 'ma', 'ti', 'ke', 'to', 'pe', 'la' ],
    today: 'tänään',
    clear: 'tyhjennä',
    firstDay: 1,
    format: 'd.m.yyyy',
    formatSubmit: 'yyyy/mm/dd'
});

Picker.defineTimeLocale('fi_FI', {
    clear: 'tyhjennä'
});
}));
// French

(function (global, factory) {
   return typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('../picker')) :
   typeof define === 'function' && define.amd ? define(['picker'], factory) : factory(global.Picker)
}(this, function (Picker) {
Picker.defineDateLocale('fr_FR', {
    monthsFull: [ 'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre' ],
    monthsShort: [ 'Jan', 'Fev', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Aou', 'Sep', 'Oct', 'Nov', 'Dec' ],
    weekdaysFull: [ 'Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi' ],
    weekdaysShort: [ 'Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam' ],
    today: 'Aujourd\'hui',
    clear: 'Effacer',
    close: 'Fermer',
    firstDay: 1,
    format: 'dd mmmm yyyy',
    formatSubmit: 'yyyy/mm/dd',
    labelMonthNext:"Mois suivant",
    labelMonthPrev:"Mois précédent",
    labelMonthSelect:"Sélectionner un mois",
    labelYearSelect:"Sélectionner une année"
});

    Picker.defineTimeLocale('fr_FR', {
    clear: 'Effacer'
});
}));
// Galician

(function (global, factory) {
   return typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('../picker')) :
   typeof define === 'function' && define.amd ? define(['picker'], factory) : factory(global.Picker)
}(this, function (Picker) {
Picker.defineDateLocale('gl_ES', {
    monthsFull: [ 'Xaneiro', 'Febreiro', 'Marzo', 'Abril', 'Maio', 'Xuño', 'Xullo', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Decembro' ],
    monthsShort: [ 'xan', 'feb', 'mar', 'abr', 'mai', 'xun', 'xul', 'ago', 'sep', 'out', 'nov', 'dec' ],
    weekdaysFull: [ 'domingo', 'luns', 'martes', 'mércores', 'xoves', 'venres', 'sábado' ],
    weekdaysShort: [ 'dom', 'lun', 'mar', 'mér', 'xov', 'ven', 'sab' ],
    today: 'hoxe',
    clear: 'borrar',
    firstDay: 1,
    format: 'dddd d !de mmmm !de yyyy',
    formatSubmit: 'yyyy/mm/dd'
});

    Picker.defineTimeLocale('gl_ES', {
    clear: 'borrar'
});
}));
// Hebrew

(function (global, factory) {
   return typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('../picker')) :
   typeof define === 'function' && define.amd ? define(['picker'], factory) : factory(global.Picker)
}(this, function (Picker) {
Picker.defineDateLocale('he_IL', {
    monthsFull: [ 'ינואר', 'פברואר', 'מרץ', 'אפריל', 'מאי', 'יוני', 'יולי', 'אוגוסט', 'ספטמבר', 'אוקטובר', 'נובמבר', 'דצמבר' ],
    monthsShort: [ 'ינו', 'פבר', 'מרץ', 'אפר', 'מאי', 'יונ', 'יול', 'אוג', 'ספט', 'אוק', 'נוב', 'דצמ' ],
    weekdaysFull: [ 'יום ראשון', 'יום שני', 'יום שלישי', 'יום רביעי', 'יום חמישי', 'יום ששי', 'יום שבת' ],
    weekdaysShort: [ 'א', 'ב', 'ג', 'ד', 'ה', 'ו', 'ש' ],
    today: 'היום',
    clear: 'למחוק',
    format: 'yyyy mmmmב d dddd',
    formatSubmit: 'yyyy/mm/dd'
});

Picker.defineTimeLocale('he_IL', {
    clear: 'למחוק'
});
}));
(function (global, factory) {
   return typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('../picker')) :
   typeof define === 'function' && define.amd ? define(['picker'], factory) : factory(global.Picker)

}(this, function (Picker) {
Picker.defineDateLocale('hi_IN', {
    monthsFull: [ 'जनवरी', 'फरवरी', 'मार्च', 'अप्रैल', 'मई', 'जून', 'जुलाई', 'अगस्त', 'सितम्बर', 'अक्टूबर', 'नवम्बर', 'दिसम्बर' ],
    monthsShort: [ 'जन', 'फर', 'मार्च', 'अप्रैल', 'मई', 'जून', 'जु', 'अग', 'सित', 'अक्टू', 'नव', 'दिस' ],
    weekdaysFull: [ 'रविवार', 'सोमवार', 'मंगलवार', 'बुधवार', 'गुरुवार', 'शुक्रवार', 'शनिवार' ],
    weekdaysShort: [ 'रवि', 'सोम', 'मंगल', 'बुध', 'गुरु', 'शुक्र','शनि' ],
    today: 'आज की तारीख चयन करें',
    clear: 'चुनी हुई तारीख को मिटाएँ',
    close: 'विंडो बंद करे',
    firstDay: 1,
    format: 'dd/mm/yyyy',
    formatSubmit: 'yyyy/mm/dd',
    labelMonthNext: 'अगले माह का चयन करें',
    labelMonthPrev: 'पिछले माह का चयन करें',
    labelMonthSelect: 'किसि एक महीने का चयन करें',
    labelYearSelect: 'किसि एक वर्ष का चयन करें'
});

Picker.defineTimeLocale('hi_IN', {
    clear: 'चुनी हुई तारीख को मिटाएँ'
});
}));
// Croatian

(function (global, factory) {
   return typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('../picker')) :
   typeof define === 'function' && define.amd ? define(['picker'], factory) : factory(global.Picker)
}(this, function (Picker) {

Picker.defineDateLocale('hr_HR', {
    monthsFull: [ 'sijećanj', 'veljača', 'ožujak', 'travanj', 'svibanj', 'lipanj', 'srpanj', 'kolovoz', 'rujan', 'listopad', 'studeni', 'prosinac' ],
    monthsShort: [ 'sij', 'velj', 'ožu', 'tra', 'svi', 'lip', 'srp', 'kol', 'ruj', 'lis', 'stu', 'pro' ],
    weekdaysFull: [ 'nedjelja', 'ponedjeljak', 'utorak', 'srijeda', 'četvrtak', 'petak', 'subota' ],
    weekdaysShort: [ 'ned', 'pon', 'uto', 'sri', 'čet', 'pet', 'sub' ],
    today: 'danas',
    clear: 'izbrisati',
    firstDay: 1,
    format: 'd. mmmm yyyy.',
    formatSubmit: 'yyyy/mm/dd'
});

Picker.defineTimeLocale('hr_HR', {
    clear: 'izbrisati'
});
}));
// Hungarian

(function (global, factory) {
   return typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('../picker')) :
   typeof define === 'function' && define.amd ? define(['picker'], factory) : factory(global.Picker)
}(this, function (Picker) {
Picker.defineDateLocale('hu_HU', {
    monthsFull: [ 'január', 'február', 'március', 'április', 'május', 'június', 'július', 'augusztus', 'szeptember', 'október', 'november', 'december' ],
    monthsShort: [ 'jan', 'febr', 'márc', 'ápr', 'máj', 'jún', 'júl', 'aug', 'szept', 'okt', 'nov', 'dec' ],
    weekdaysFull: [ 'vasárnap', 'hétfő', 'kedd', 'szerda', 'csütörtök', 'péntek', 'szombat' ],
    weekdaysShort: [ 'V', 'H', 'K', 'SZe', 'CS', 'P', 'SZo' ],
    today: 'Ma',
    clear: 'Törlés',
    firstDay: 1,
    format: 'yyyy. mmmm dd.',
    formatSubmit: 'yyyy/mm/dd'
});

Picker.defineTimeLocale('hu_HU', {
    clear: 'Törlés'
});
}));
// Indonesian

(function (global, factory) {
   return typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('../picker')) :
   typeof define === 'function' && define.amd ? define(['picker'], factory) : factory(global.Picker)
}(this, function (Picker) {
Picker.defineDateLocale('id_ID', {
    monthsFull: [ 'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember' ],
    monthsShort: [ 'Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des' ],
    weekdaysFull: [ 'Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu' ],
    weekdaysShort: [ 'Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab' ],
    today: 'hari ini',
    clear: 'menghapus',
    firstDay: 1,
    format: 'd mmmm yyyy',
    formatSubmit: 'yyyy/mm/dd'
});

Picker.defineTimeLocale('id_ID', {
    clear: 'menghapus'
});
}));
// Icelandic

(function (global, factory) {
   return typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('../picker')) :
   typeof define === 'function' && define.amd ? define(['picker'], factory) : factory(global.Picker)
}(this, function (Picker) {
Picker.defineDateLocale('is_IS', {
    monthsFull: [ 'janúar', 'febrúar', 'mars', 'apríl', 'maí', 'júní', 'júlí', 'ágúst', 'september', 'október', 'nóvember', 'desember' ],
    monthsShort: [ 'jan', 'feb', 'mar', 'apr', 'maí', 'jún', 'júl', 'ágú', 'sep', 'okt', 'nóv', 'des' ],
    weekdaysFull: [ 'sunnudagur', 'mánudagur', 'þriðjudagur', 'miðvikudagur', 'fimmtudagur', 'föstudagur', 'laugardagur' ],
    weekdaysShort: [ 'sun', 'mán', 'þri', 'mið', 'fim', 'fös', 'lau' ],
    today: 'Í dag',
    clear: 'Hreinsa',
    firstDay: 1,
    format: 'dd. mmmm yyyy',
    formatSubmit: 'yyyy/mm/dd'
});

Picker.defineTimeLocale('is_IS', {
    clear: 'Hreinsa'
});
}));
// Italian

(function (global, factory) {
   return typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('../picker')) :
   typeof define === 'function' && define.amd ? define(['picker'], factory) : factory(global.Picker)

}(this, function (Picker) {

Picker.defineDateLocale('it_IT', {
    monthsFull: [ 'gennaio', 'febbraio', 'marzo', 'aprile', 'maggio', 'giugno', 'luglio', 'agosto', 'settembre', 'ottobre', 'novembre', 'dicembre' ],
    monthsShort: [ 'gen', 'feb', 'mar', 'apr', 'mag', 'giu', 'lug', 'ago', 'set', 'ott', 'nov', 'dic' ],
    weekdaysFull: [ 'domenica', 'lunedì', 'martedì', 'mercoledì', 'giovedì', 'venerdì', 'sabato' ],
    weekdaysShort: [ 'dom', 'lun', 'mar', 'mer', 'gio', 'ven', 'sab' ],
    today: 'Oggi',
    clear: 'Cancella',
    close: 'Chiudi',
    firstDay: 1,
    format: 'dddd d mmmm yyyy',
    formatSubmit: 'yyyy/mm/dd',
    labelMonthNext: 'Mese successivo',
    labelMonthPrev: 'Mese precedente',
    labelMonthSelect: 'Seleziona un mese',
    labelYearSelect: 'Seleziona un anno'
});
Picker.defineTimeLocale('it_IT', {
    clear: 'Cancella',
    format: 'HH:i',
    formatSubmit: 'HH:i'
});

}));
// Japanese

(function (global, factory) {
   return typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('../picker')) :
   typeof define === 'function' && define.amd ? define(['picker'], factory) : factory(global.Picker)

}(this, function (Picker) {
Picker.defineDateLocale('ja_JP', {
    monthsFull: [ '1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月' ],
    monthsShort: [ '1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月' ],
    weekdaysFull: [ '日曜日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日' ],
    weekdaysShort: [ '日', '月', '火', '水', '木', '金', '土' ],
    today: '今日',
    clear: '消去',
    firstDay: 1,
    format: 'yyyy mm dd',
    formatSubmit: 'yyyy/mm/dd'
});
Picker.defineTimeLocale('ja_JP', {
    clear: '消去'
});
}));
// Korean

(function (global, factory) {
   return typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('../picker')) :
   typeof define === 'function' && define.amd ? define(['picker'], factory) : factory(global.Picker)

}(this, function (Picker) {
Picker.defineDateLocale( 'ko_KR', {
    monthsFull: [ '1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월' ],
    monthsShort: [ '1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월' ],
    weekdaysFull: [ '일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일' ],
    weekdaysShort: [ '일', '월', '화', '수', '목', '금', '토' ],
    today: '오늘',
    clear: '취소',
    firstDay: 1,
    format: 'yyyy 년 mm 월 dd 일',
    formatSubmit: 'yyyy/mm/dd'
});
Picker.defineTimeLocale('ko_KR', {
    clear: '취소'
});
}));
// Lietuviškai

(function (global, factory) {
   return typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('../picker')) :
   typeof define === 'function' && define.amd ? define(['picker'], factory) : factory(global.Picker)

}(this, function (Picker) {

Picker.defineDateLocale('lt_LT', {
    labelMonthNext: 'Sekantis mėnuo',
    labelMonthPrev: 'Ankstesnis mėnuo',
    labelMonthSelect: 'Pasirinkite mėnesį',
    labelYearSelect: 'Pasirinkite metus',
    monthsFull: ['Sausis', 'Vasaris', 'Kovas', 'Balandis', 'Gegužė', 'Birželis', 'Liepa', 'Rugpjūtis', 'Rugsėjis', 'Spalis', 'Lapkritis', 'Gruodis'],
    monthsShort: ['Sau', 'Vas', 'Kov', 'Bal', 'Geg', 'Bir', 'Lie', 'Rgp', 'Rgs', 'Spa', 'Lap', 'Grd'],
    weekdaysFull: ['Sekmadienis', 'Pirmadienis', 'Antradienis', 'Trečiadienis', 'Ketvirtadienis', 'Penktadienis', 'Šeštadienis'],
    weekdaysShort: ['Sk', 'Pr', 'An', 'Tr', 'Kt', 'Pn', 'Št'],
    today: 'Šiandien',
    clear: 'Išvalyti',
    close: 'Uždaryti',
    firstDay: 1,
    //format: 'yyyy !m. mmmm d !d.', // need to have diffrent case of full months name
    format: 'yyyy-mm-dd',
    formatSubmit: 'yyyy/mm/dd'
});
Picker.defineTimeLocale('lt_LT', {
    clear: 'Išvalyti',
    format: 'HH:i'
});

}));
// Latvian

(function (global, factory) {
   return typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('../picker')) :
   typeof define === 'function' && define.amd ? define(['picker'], factory) : factory(global.Picker)

}(this, function (Picker) {

Picker.defineDateLocale('lv_LV', {
    monthsFull: [ 'Janvāris', 'Februāris', 'Marts', 'Aprīlis', 'Maijs', 'Jūnijs', 'Jūlijs', 'Augusts', 'Septembris', 'Oktobris', 'Novembris', 'Decembris' ],
    monthsShort: [ 'Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jūn', 'Jūl', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec' ],
    weekdaysFull: [ 'Svētdiena', 'Pirmdiena', 'Otrdiena', 'Trešdiena', 'Ceturtdiena', 'Piektdiena', 'Sestdiena' ],
    weekdaysShort: [ 'Sv', 'P', 'O', 'T', 'C', 'Pk', 'S' ],
    today: 'Šodiena',
    clear: 'Atcelt',
    firstDay: 1,
    format: 'yyyy.mm.dd. dddd',
    formatSubmit: 'yyyy/mm/dd'
});

}));
// Norwegian

(function (global, factory) {
   return typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('../picker')) :
   typeof define === 'function' && define.amd ? define(['picker'], factory) : factory(global.Picker)
}(this, function (Picker) {
Picker.defineDateLocale('nb_NO', {
    monthsFull: [ 'januar', 'februar', 'mars', 'april', 'mai', 'juni', 'juli', 'august', 'september', 'oktober', 'november', 'desember' ],
    monthsShort: [ 'jan', 'feb', 'mar', 'apr', 'mai', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'des' ],
    weekdaysFull: [ 'søndag', 'mandag', 'tirsdag', 'onsdag', 'torsdag', 'fredag', 'lørdag' ],
    weekdaysShort: [ 'søn','man','tir', 'ons', 'tor', 'fre', 'lør' ],
    today: 'i dag',
    clear: 'nullstill',
    close: 'lukk',
    firstDay: 1,
    format: 'dd. mmm. yyyy',
    formatSubmit: 'yyyy/mm/dd'
});
Picker.defineTimeLocale('nb_NO', {
    clear: 'nullstill'
});
}));
// Nepali

(function (global, factory) {
   return typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('../picker')) :
   typeof define === 'function' && define.amd ? define(['picker'], factory) : factory(global.Picker)
}(this, function (Picker) {
Picker.defineDateLocale('ne_NP', {
    monthsFull: [ 'जनवरी', 'फेब्रुअरी', 'मार्च', 'अप्रिल', 'मे', 'जुन', 'जुलाई', 'अगस्त', 'सेप्टेम्बर', 'अक्टोबर', 'नोवेम्बर', 'डिसेम्बर' ],
    monthsShort: [ 'जन', 'फेब्रु', 'मार्च', 'अप्रिल', 'मे', 'जुन', 'जुल', 'अग', 'सेप्टे', 'अक्टो', 'नोभे', 'डिसे' ],
    weekdaysFull: [ 'सोमबार', 'मङ्लबार', 'बुधबार', 'बिहीबार', 'शुक्रबार', 'शनिबार', 'आईतबार' ],
    weekdaysShort: [ 'सोम', 'मंगल्', 'बुध', 'बिही', 'शुक्र', 'शनि', 'आईत' ],
    numbers: [ '०', '१', '२', '३', '४', '५', '६', '७', '८', '९' ],
    today: 'आज',
    clear: 'मेटाउनुहोस्',
    format: 'dddd, dd mmmm, yyyy',
    formatSubmit: 'yyyy/mm/dd'
});
Picker.defineTimeLocale('ne_NP', {
    clear: 'मेटाउनुहोस्'
});
}));
// Dutch

(function (global, factory) {
   return typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('../picker')) :
   typeof define === 'function' && define.amd ? define(['picker'], factory) : factory(global.Picker)

}(this, function (Picker) {
Picker.defineDateLocale('nl_NL', {
    monthsFull: [ 'januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december' ],
    monthsShort: [ 'jan', 'feb', 'maa', 'apr', 'mei', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec' ],
    weekdaysFull: [ 'zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag' ],
    weekdaysShort: [ 'zo', 'ma', 'di', 'wo', 'do', 'vr', 'za' ],
    today: 'vandaag',
    clear: 'verwijderen',
    close: 'sluiten',
    firstDay: 1,
    format: 'dddd d mmmm yyyy',
    formatSubmit: 'yyyy/mm/dd'
});
Picker.defineTimeLocale('nl_NL', {
    clear: 'verwijderen'
});
}));
// Polish

(function (global, factory) {
   return typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('../picker')) :
   typeof define === 'function' && define.amd ? define(['picker'], factory) : factory(global.Picker)

}(this, function (Picker) {
Picker.defineDateLocale('pl_PL', {
    monthsFull: [ 'styczeń', 'luty', 'marzec', 'kwiecień', 'maj', 'czerwiec', 'lipiec', 'sierpień', 'wrzesień', 'październik', 'listopad', 'grudzień' ],
    monthsShort: [ 'sty', 'lut', 'mar', 'kwi', 'maj', 'cze', 'lip', 'sie', 'wrz', 'paź', 'lis', 'gru' ],
    weekdaysFull: [ 'niedziela', 'poniedziałek', 'wtorek', 'środa', 'czwartek', 'piątek', 'sobota' ],
    weekdaysShort: [ 'niedz.', 'pn.', 'wt.', 'śr.', 'cz.', 'pt.', 'sob.' ],
    today: 'Dzisiaj',
    clear: 'Usuń',
    close: 'Zamknij',
    firstDay: 1,
    format: 'd mmmm yyyy',
    formatSubmit: 'yyyy/mm/dd'
});
Picker.defineTimeLocale('pl_PL', {
    clear: 'usunąć'
});
}));
// Brazilian Portuguese

(function (global, factory) {
   return typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('../picker')) :
   typeof define === 'function' && define.amd ? define(['picker'], factory) : factory(global.Picker)

}(this, function (Picker) {
Picker.defineDateLocale('pt_BR', {
    monthsFull: [ 'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro' ],
    monthsShort: [ 'jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez' ],
    weekdaysFull: [ 'domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado' ],
    weekdaysShort: [ 'dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sab' ],
    today: 'hoje',
    clear: 'limpar',
    close: 'fechar',
    format: 'dddd, d !de mmmm !de yyyy',
    formatSubmit: 'yyyy/mm/dd'
});
Picker.defineTimeLocale('pt_BR', {
    clear: 'limpar'
});
}));
// Portuguese

(function (global, factory) {
   return typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('../picker')) :
   typeof define === 'function' && define.amd ? define(['picker'], factory) : factory(global.Picker)

}(this, function (Picker) {
Picker.defineDateLocale('pt_PT', {
    monthsFull: [ 'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro' ],
    monthsShort: [ 'jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez' ],
    weekdaysFull: [ 'Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado' ],
    weekdaysShort: [ 'dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sab' ],
    today: 'Hoje',
    clear: 'Limpar',
    close: 'Fechar',
    format: 'd !de mmmm !de yyyy',
    formatSubmit: 'yyyy/mm/dd'
});
Picker.defineTimeLocale('pt_PT', {
    clear: 'Limpar'
});
}));
// Romanian

(function (global, factory) {
   return typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('../picker')) :
   typeof define === 'function' && define.amd ? define(['picker'], factory) : factory(global.Picker)

}(this, function (Picker) {
Picker.defineDateLocale('ro_RO', {
    monthsFull: [ 'ianuarie', 'februarie', 'martie', 'aprilie', 'mai', 'iunie', 'iulie', 'august', 'septembrie', 'octombrie', 'noiembrie', 'decembrie' ],
    monthsShort: [ 'ian', 'feb', 'mar', 'apr', 'mai', 'iun', 'iul', 'aug', 'sep', 'oct', 'noi', 'dec' ],
    weekdaysFull: [ 'duminică', 'luni', 'marţi', 'miercuri', 'joi', 'vineri', 'sâmbătă' ],
    weekdaysShort: [ 'D', 'L', 'Ma', 'Mi', 'J', 'V', 'S' ],
    today: 'azi',
    clear: 'șterge',
    firstDay: 1,
    format: 'dd mmmm yyyy',
    formatSubmit: 'yyyy/mm/dd'
});
Picker.defineTimeLocale('ro_RO', {
    clear: 'șterge'
});
}));
// Russian

(function (global, factory) {
   return typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('../picker')) :
   typeof define === 'function' && define.amd ? define(['picker'], factory) : factory(global.Picker)

}(this, function (Picker) {
Picker.defineDateLocale('ru_RU', {
    monthsFull: [ 'января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря' ],
    monthsShort: [ 'янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек' ],
    weekdaysFull: [ 'воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота' ],
    weekdaysShort: [ 'вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб' ],
    today: 'сегодня',
    clear: 'удалить',
    close: 'закрыть',
    firstDay: 1,
    format: 'd mmmm yyyy г.',
    formatSubmit: 'yyyy/mm/dd'
});
Picker.defineTimeLocale('ru_RU', {
    clear: 'удалить'
});
}));
// Slovak

(function (global, factory) {
   return typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('../picker')) :
   typeof define === 'function' && define.amd ? define(['picker'], factory) : factory(global.Picker)

}(this, function (Picker) {
Picker.defineDateLocale('sk_SK', {
    monthsFull: [ 'január', 'február', 'marec', 'apríl', 'máj', 'jún', 'júl', 'august', 'september', 'október', 'november', 'december' ],
    monthsShort: [ 'jan', 'feb', 'mar', 'apr', 'máj', 'jún', 'júl', 'aug', 'sep', 'okt', 'nov', 'dec' ],
    weekdaysFull: [ 'nedeľa', 'pondelok', 'utorok', 'streda', 'štvrtok', 'piatok', 'sobota' ],
    weekdaysShort: [ 'Ne', 'Po', 'Ut', 'St', 'Št', 'Pi', 'So' ],
    today: 'dnes',
    clear: 'vymazať',
    close: 'zavrieť',
    firstDay: 1,
    format: 'd. mmmm yyyy',
    formatSubmit: 'yyyy/mm/dd'
});
Picker.defineTimeLocale('sk_SK', {
    clear: 'vymazať'
});
}));
// Slovenian

(function (global, factory) {
   return typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('../picker')) :
   typeof define === 'function' && define.amd ? define(['picker'], factory) : factory(global.Picker)

}(this, function (Picker) {
Picker.defineDateLocale('sl_SI', {
    monthsFull: [ 'januar', 'februar', 'marec', 'april', 'maj', 'junij', 'julij', 'avgust', 'september', 'oktober', 'november', 'december' ],
    monthsShort: [ 'jan', 'feb', 'mar', 'apr', 'maj', 'jun', 'jul', 'avg', 'sep', 'okt', 'nov', 'dec' ],
    weekdaysFull: [ 'nedelja', 'ponedeljek', 'torek', 'sreda', 'četrtek', 'petek', 'sobota' ],
    weekdaysShort: [ 'ned', 'pon', 'tor', 'sre', 'čet', 'pet', 'sob' ],
    today: 'danes',
    clear: 'izbriši',
    close: 'zapri',
    firstDay: 1,
    format: 'd. mmmm yyyy',
    formatSubmit: 'yyyy/mm/dd'
});
Picker.defineTimeLocale('sl_SI', {
    clear: 'izbriši'
});
}));
// Swedish

(function (global, factory) {
   return typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('../picker')) :
   typeof define === 'function' && define.amd ? define(['picker'], factory) : factory(global.Picker)

}(this, function (Picker) {
Picker.defineDateLocale('sv_SE', {
    monthsFull: [ 'januari', 'februari', 'mars', 'april', 'maj', 'juni', 'juli', 'augusti', 'september', 'oktober', 'november', 'december' ],
    monthsShort: [ 'jan', 'feb', 'mar', 'apr', 'maj', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec' ],
    weekdaysFull: [ 'söndag', 'måndag', 'tisdag', 'onsdag', 'torsdag', 'fredag', 'lördag' ],
    weekdaysShort: [ 'sön', 'mån', 'tis', 'ons', 'tor', 'fre', 'lör' ],
    today: 'Idag',
    clear: 'Rensa',
    close: 'Stäng',
    firstDay: 1,
    format: 'yyyy-mm-dd',
    formatSubmit: 'yyyy/mm/dd',
    labelMonthNext: 'Nästa månad',
    labelMonthPrev: 'Föregående månad',
    labelMonthSelect: 'Välj månad',
    labelYearSelect: 'Välj år'
});
Picker.defineTimeLocale('sv_SE', {
    clear: 'Rensa'
});
}));
// Thai

(function (global, factory) {
   return typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('../picker')) :
   typeof define === 'function' && define.amd ? define(['picker'], factory) : factory(global.Picker)

}(this, function (Picker) {
Picker.defineDateLocale('th_TH', {
    monthsFull: [ 'มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม' ],
    monthsShort: [ 'ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.' ],
    weekdaysFull: [ 'อาทติย', 'จันทร', 'องัคาร', 'พุธ', 'พฤหสั บดี', 'ศกุร', 'เสาร' ],
    weekdaysShort: [ 'อ.', 'จ.', 'อ.', 'พ.', 'พฤ.', 'ศ.', 'ส.' ],
    today: 'วันนี้',
    clear: 'ลบ',
    format: 'd mmmm yyyy',
    formatSubmit: 'yyyy/mm/dd'
});
Picker.defineTimeLocale('th_TH', {
    clear: 'ลบ'
});
}));
// Turkish

(function (global, factory) {
   return typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('../picker')) :
   typeof define === 'function' && define.amd ? define(['picker'], factory) : factory(global.Picker)

}(this, function (Picker) {
Picker.defineDateLocale('tr_TR', {
    monthsFull: [ 'Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık' ],
    monthsShort: [ 'Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz', 'Tem', 'Ağu', 'Eyl', 'Eki', 'Kas', 'Ara' ],
    weekdaysFull: [ 'Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi' ],
    weekdaysShort: [ 'Pzr', 'Pzt', 'Sal', 'Çrş', 'Prş', 'Cum', 'Cmt' ],
    today: 'Bugün',
    clear: 'Sil',
    close: 'Kapat',
    firstDay: 1,
    format: 'dd mmmm yyyy dddd',
    formatSubmit: 'yyyy/mm/dd'
});
Picker.defineTimeLocale('tr_TR', {
    clear: 'sil'
});
}));
// Ukrainian

(function (global, factory) {
   return typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('../picker')) :
   typeof define === 'function' && define.amd ? define(['picker'], factory) : factory(global.Picker)

}(this, function (Picker) {
Picker.defineDateLocale('uk_UA', {
    monthsFull: [ 'січень', 'лютий', 'березень', 'квітень', 'травень', 'червень', 'липень', 'серпень', 'вересень', 'жовтень', 'листопад', 'грудень' ],
    monthsShort: [ 'січ', 'лют', 'бер', 'кві', 'тра', 'чер', 'лип', 'сер', 'вер', 'жов', 'лис', 'гру' ],
    weekdaysFull: [ 'неділя', 'понеділок', 'вівторок', 'середа', 'четвер', 'п‘ятниця', 'субота' ],
    weekdaysShort: [ 'нд', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб' ],
    today: 'сьогодні',
    clear: 'викреслити',
    firstDay: 1,
    format: 'dd mmmm yyyy p.',
    formatSubmit: 'yyyy/mm/dd'
});
Picker.defineTimeLocale('uk_UA', {
    clear: 'викреслити'
});
}));
// Vietnamese

(function (global, factory) {
   return typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('../picker')) :
   typeof define === 'function' && define.amd ? define(['picker'], factory) : factory(global.Picker)

}(this, function (Picker) {
Picker.defineDateLocale('vi_VN', {
    monthsFull: [ 'Tháng Một', 'Tháng Hai', 'Tháng Ba', 'Tháng Tư', 'Tháng Năm', 'Tháng Sáu', 'Tháng Bảy', 'Tháng Tám', 'Tháng Chín', 'Tháng Mười', 'Tháng Mười Một', 'Tháng Mười Hai' ],
    monthsShort: [ 'Một', 'Hai', 'Ba', 'Tư', 'Năm', 'Sáu', 'Bảy', 'Tám', 'Chín', 'Mưới', 'Mười Một', 'Mười Hai' ],
    weekdaysFull: [ 'Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy' ],
    weekdaysShort: [ 'C.Nhật', 'T.Hai', 'T.Ba', 'T.Tư', 'T.Năm', 'T.Sáu', 'T.Bảy' ],
    today: 'Hôm Nay',
    clear: 'Xoá',
    firstDay: 1
});
Picker.defineTimeLocale('vi_VN', {
    clear: 'Xoá'
});
}));
// Simplified Chinese

(function (global, factory) {
   return typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('../picker')) :
   typeof define === 'function' && define.amd ? define(['picker'], factory) : factory(global.Picker)

}(this, function (Picker) {
Picker.defineDateLocale('zh_CN', {
    monthsFull: [ '一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月' ],
    monthsShort: [ '一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二' ],
    weekdaysFull: [ '星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六' ],
    weekdaysShort: [ '日', '一', '二', '三', '四', '五', '六' ],
    today: '今日',
    clear: '清除',
    close: '关闭',
    firstDay: 1,
    format: 'yyyy 年 mm 月 dd 日',
    formatSubmit: 'yyyy/mm/dd'
});
Picker.defineTimeLocale('zh_CN', {
    clear: '清除'
});
}));
// Traditional Chinese

(function (global, factory) {
   return typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('../picker')) :
   typeof define === 'function' && define.amd ? define(['picker'], factory) : factory(global.Picker)

}(this, function (Picker) {
Picker.defineDateLocale('zh_TW', {
    monthsFull: [ '一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月' ],
    monthsShort: [ '一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二' ],
    weekdaysFull: [ '星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六' ],
    weekdaysShort: [ '日', '一', '二', '三', '四', '五', '六' ],
    today: '今天',
    clear: '清除',
    close: '关闭',
    firstDay: 1,
    format: 'yyyy 年 mm 月 dd 日',
    formatSubmit: 'yyyy/mm/dd'
});
Picker.defineTimeLocale('zh_TW', {
    clear: '清除'
});
}));