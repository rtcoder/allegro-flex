const supportedLanguages = ["en", "pl", "cs", "sk", "uk"];

const translations = {
  en: {
    documentTitle: "Allegro Flex - better Allegro offer pages",
    metaDescription: "Allegro Flex is a Chrome extension that makes Allegro offer pages easier to use by linking seller names, coloring links, and wrapping gallery thumbnails.",
    navLabel: "Navigation",
    navFeatures: "Features",
    navPrivacy: "Privacy",
    languageLabel: "Language",
    sellerExample: "Top seller",
    heroEyebrow: "Chrome extension for Allegro",
    heroLead: "Customize Allegro offer pages so seller names, thumbnails, and links are faster to use during everyday shopping.",
    heroActionsLabel: "Main actions",
    primaryCta: "Get it on Chrome Web Store",
    secondaryCta: "View options",
    proofLabel: "Highlights",
    proofManifestTitle: "Manifest V3",
    proofManifestText: "Ready for current Chrome versions",
    proofMarketsTitle: "4 Allegro markets",
    proofMarketsText: "PL, COM, SK, and CZ",
    proofSettingsTitle: "Local settings",
    proofSettingsText: "Preferences saved in your browser",
    introEyebrow: "Why it exists",
    introTitle: "Less hunting, more control over the offer view.",
    introText: "Allegro Flex does not try to rebuild the whole service. It focuses on small places that often get in the way: seller names that are not clickable, long thumbnail columns, and links that are easier to recognize with your own color.",
    featuresEyebrow: "Features",
    featuresTitle: "Improvements you can see right away on a product page.",
    featureSellerTitle: "Seller link",
    featureSellerText: "The seller name can lead directly to the seller profile or offer list, without extra clicks through Allegro panels.",
    featureColorTitle: "Custom link color",
    featureColorText: "Choose a color that makes added links stand out from the rest of the interface.",
    featureTabTitle: "New tab",
    featureTabText: "Seller profiles can open in a new tab, so the current offer stays within reach.",
    featureThumbsTitle: "Wrapped thumbnails",
    featureThumbsText: "Product galleries can wrap thumbnails into multiple rows when an offer has many photos.",
    settingsPreviewLabel: "Settings preview",
    optionsTitle: "Allegro Flex Options",
    optionsSubtitle: "Example setup",
    settingSeller: "Seller name as a link",
    settingColor: "Link color",
    settingNewTab: "Open in new tab",
    settingThumbs: "Wrap thumbnails",
    experienceEyebrow: "Configuration",
    experienceTitle: "The options panel stays simple, and changes go straight to Allegro.",
    experienceText: "The extension uses preferences saved in your browser. Enable the features you want, choose a color, and refresh the offer page to see the result.",
    privacyEyebrow: "Privacy",
    privacyTitle: "A minimal operating scope.",
    privacyText: "Allegro Flex does not collect, sell, or send any user data. It only saves your extension preferences in the browser, so your settings can stay active between visits.",
  },
  pl: {
    documentTitle: "Allegro Flex - wygodniejsze karty ofert Allegro",
    metaDescription: "Allegro Flex to rozszerzenie Chrome, które porządkuje karty ofert Allegro: linkuje sprzedawcę, ustawia kolor linków i zawija miniaturki galerii.",
    navLabel: "Nawigacja",
    navFeatures: "Funkcje",
    navPrivacy: "Prywatność",
    languageLabel: "Język",
    sellerExample: "SuperSprzedawca",
    heroEyebrow: "Rozszerzenie Chrome dla Allegro",
    heroLead: "Dostosowuje karty ofert Allegro tak, żeby nazwa sprzedawcy, miniaturki i linki były szybsze w obsłudze podczas codziennych zakupów.",
    heroActionsLabel: "Główne akcje",
    primaryCta: "Pobierz z Chrome Web Store",
    secondaryCta: "Zobacz opcje",
    proofLabel: "Najważniejsze informacje",
    proofManifestTitle: "Manifest V3",
    proofManifestText: "Gotowe dla aktualnych wersji Chrome",
    proofMarketsTitle: "4 rynki Allegro",
    proofMarketsText: "PL, COM, SK i CZ",
    proofSettingsTitle: "Ustawienia lokalne",
    proofSettingsText: "Preferencje zapisane w przeglądarce",
    introEyebrow: "Po co to jest",
    introTitle: "Mniej szukania, więcej kontroli nad widokiem oferty.",
    introText: "Allegro Flex nie próbuje przebudować całego serwisu. Skupia się na małych miejscach, które często przeszkadzają: nieklikalnej nazwie sprzedawcy, zbyt długiej kolumnie miniaturek i linkach, które łatwiej rozpoznać po własnym kolorze.",
    featuresEyebrow: "Funkcje",
    featuresTitle: "Usprawnienia, które widać od razu na karcie produktu.",
    featureSellerTitle: "Link do sprzedawcy",
    featureSellerText: "Nazwa sprzedawcy może prowadzić bezpośrednio do profilu lub listy ofert, bez dodatkowego klikania po panelach Allegro.",
    featureColorTitle: "Własny kolor linku",
    featureColorText: "Ustaw kolor, który od razu odróżnia dodane linki od pozostałych elementów interfejsu.",
    featureTabTitle: "Nowa karta",
    featureTabText: "Profile sprzedawców mogą otwierać się w nowej karcie, dzięki czemu oferta zostaje pod ręką.",
    featureThumbsTitle: "Zawijane miniaturki",
    featureThumbsText: "Galeria produktu może układać miniaturki w wiele wierszy, gdy oferta ma dużo zdjęć.",
    settingsPreviewLabel: "Podgląd ustawień",
    optionsTitle: "Opcje Allegro Flex",
    optionsSubtitle: "Przykładowa konfiguracja",
    settingSeller: "Nazwa sprzedawcy jako link",
    settingColor: "Kolor linku",
    settingNewTab: "Otwieraj w nowej karcie",
    settingThumbs: "Zawijaj miniaturki",
    experienceEyebrow: "Konfiguracja",
    experienceTitle: "Panel opcji zostaje prosty, a zmiany trafiają prosto na Allegro.",
    experienceText: "Rozszerzenie korzysta z zapisanych preferencji przeglądarki. Włącz wybrane funkcje, wybierz kolor i odśwież kartę oferty, aby zobaczyć efekt.",
    privacyEyebrow: "Prywatność",
    privacyTitle: "Minimalny zakres działania.",
    privacyText: "Allegro Flex nie zbiera, nie sprzedaje ani nie wysyła żadnych danych użytkownika. Zapisuje tylko preferencje dodatku w przeglądarce, żeby ustawienia działały między kolejnymi wizytami.",
  },
  cs: {
    documentTitle: "Allegro Flex - pohodlnější stránky nabídek Allegro",
    metaDescription: "Allegro Flex je rozšíření pro Chrome, které zpřehledňuje stránky nabídek Allegro: přidává odkaz na prodejce, nastavuje barvu odkazů a zalamuje miniatury galerie.",
    navLabel: "Navigace",
    navFeatures: "Funkce",
    navPrivacy: "Soukromí",
    languageLabel: "Jazyk",
    sellerExample: "Top prodejce",
    heroEyebrow: "Rozšíření Chrome pro Allegro",
    heroLead: "Upravuje stránky nabídek Allegro tak, aby se názvy prodejců, miniatury a odkazy používaly rychleji při běžném nakupování.",
    heroActionsLabel: "Hlavní akce",
    primaryCta: "Získat v Chrome Web Store",
    secondaryCta: "Zobrazit možnosti",
    proofLabel: "Hlavní informace",
    proofManifestTitle: "Manifest V3",
    proofManifestText: "Připraveno pro aktuální verze Chromu",
    proofMarketsTitle: "4 trhy Allegro",
    proofMarketsText: "PL, COM, SK a CZ",
    proofSettingsTitle: "Lokální nastavení",
    proofSettingsText: "Předvolby uložené v prohlížeči",
    introEyebrow: "Proč existuje",
    introTitle: "Méně hledání, více kontroly nad zobrazením nabídky.",
    introText: "Allegro Flex se nesnaží přestavět celou službu. Zaměřuje se na drobná místa, která často překážejí: neklikatelné názvy prodejců, dlouhé sloupce miniatur a odkazy, které snáze poznáte podle vlastní barvy.",
    featuresEyebrow: "Funkce",
    featuresTitle: "Vylepšení, která uvidíte na stránce produktu hned.",
    featureSellerTitle: "Odkaz na prodejce",
    featureSellerText: "Název prodejce může vést přímo na profil nebo seznam nabídek bez dalšího klikání v panelech Allegro.",
    featureColorTitle: "Vlastní barva odkazu",
    featureColorText: "Zvolte barvu, díky které přidané odkazy v rozhraní okamžitě vyniknou.",
    featureTabTitle: "Nová karta",
    featureTabText: "Profily prodejců se mohou otevírat na nové kartě, takže aktuální nabídka zůstane po ruce.",
    featureThumbsTitle: "Zalomené miniatury",
    featureThumbsText: "Galerie produktu může zalomit miniatury do více řádků, když má nabídka mnoho fotografií.",
    settingsPreviewLabel: "Náhled nastavení",
    optionsTitle: "Možnosti Allegro Flex",
    optionsSubtitle: "Ukázkové nastavení",
    settingSeller: "Název prodejce jako odkaz",
    settingColor: "Barva odkazu",
    settingNewTab: "Otevřít na nové kartě",
    settingThumbs: "Zalomení miniatur",
    experienceEyebrow: "Konfigurace",
    experienceTitle: "Panel možností zůstává jednoduchý a změny míří rovnou na Allegro.",
    experienceText: "Rozšíření používá předvolby uložené v prohlížeči. Zapněte požadované funkce, vyberte barvu a obnovte stránku nabídky.",
    privacyEyebrow: "Soukromí",
    privacyTitle: "Minimální rozsah fungování.",
    privacyText: "Allegro Flex neshromažďuje, neprodává ani neodesílá žádná uživatelská data. Ukládá pouze předvolby rozšíření v prohlížeči, aby nastavení zůstala aktivní mezi návštěvami.",
  },
  sk: {
    documentTitle: "Allegro Flex - pohodlnejšie stránky ponúk Allegro",
    metaDescription: "Allegro Flex je rozšírenie pre Chrome, ktoré sprehľadňuje stránky ponúk Allegro: pridáva odkaz na predajcu, nastavuje farbu odkazov a zalamuje miniatúry galérie.",
    navLabel: "Navigácia",
    navFeatures: "Funkcie",
    navPrivacy: "Súkromie",
    languageLabel: "Jazyk",
    sellerExample: "Top predajca",
    heroEyebrow: "Rozšírenie Chrome pre Allegro",
    heroLead: "Upravuje stránky ponúk Allegro tak, aby sa názvy predajcov, miniatúry a odkazy používali rýchlejšie pri bežnom nakupovaní.",
    heroActionsLabel: "Hlavné akcie",
    primaryCta: "Získať v Chrome Web Store",
    secondaryCta: "Zobraziť možnosti",
    proofLabel: "Hlavné informácie",
    proofManifestTitle: "Manifest V3",
    proofManifestText: "Pripravené pre aktuálne verzie Chromu",
    proofMarketsTitle: "4 trhy Allegro",
    proofMarketsText: "PL, COM, SK a CZ",
    proofSettingsTitle: "Lokálne nastavenia",
    proofSettingsText: "Predvoľby uložené v prehliadači",
    introEyebrow: "Prečo existuje",
    introTitle: "Menej hľadania, viac kontroly nad zobrazením ponuky.",
    introText: "Allegro Flex sa nesnaží prestavať celú službu. Zameriava sa na drobné miesta, ktoré často prekážajú: neklikateľné názvy predajcov, dlhé stĺpce miniatúr a odkazy, ktoré ľahšie spoznáte podľa vlastnej farby.",
    featuresEyebrow: "Funkcie",
    featuresTitle: "Vylepšenia, ktoré uvidíte na stránke produktu hneď.",
    featureSellerTitle: "Odkaz na predajcu",
    featureSellerText: "Názov predajcu môže viesť priamo na profil alebo zoznam ponúk bez ďalšieho klikania v paneloch Allegro.",
    featureColorTitle: "Vlastná farba odkazu",
    featureColorText: "Vyberte farbu, vďaka ktorej pridané odkazy v rozhraní okamžite vyniknú.",
    featureTabTitle: "Nová karta",
    featureTabText: "Profily predajcov sa môžu otvárať na novej karte, takže aktuálna ponuka zostane poruke.",
    featureThumbsTitle: "Zalomené miniatúry",
    featureThumbsText: "Galéria produktu môže zalomiť miniatúry do viacerých riadkov, keď má ponuka veľa fotografií.",
    settingsPreviewLabel: "Náhľad nastavení",
    optionsTitle: "Možnosti Allegro Flex",
    optionsSubtitle: "Ukážkové nastavenie",
    settingSeller: "Názov predajcu ako odkaz",
    settingColor: "Farba odkazu",
    settingNewTab: "Otvoriť na novej karte",
    settingThumbs: "Zalomiť miniatúry",
    experienceEyebrow: "Konfigurácia",
    experienceTitle: "Panel možností zostáva jednoduchý a zmeny mieria rovno na Allegro.",
    experienceText: "Rozšírenie používa predvoľby uložené v prehliadači. Zapnite požadované funkcie, vyberte farbu a obnovte stránku ponuky.",
    privacyEyebrow: "Súkromie",
    privacyTitle: "Minimálny rozsah fungovania.",
    privacyText: "Allegro Flex nezhromažďuje, nepredáva ani neodosiela žiadne údaje používateľa. Ukladá iba predvoľby rozšírenia v prehliadači, aby nastavenia zostali aktívne medzi návštevami.",
  },
  uk: {
    documentTitle: "Allegro Flex - зручніші сторінки пропозицій Allegro",
    metaDescription: "Allegro Flex — це розширення Chrome, яке робить сторінки пропозицій Allegro зручнішими: додає посилання на продавця, налаштовує колір посилань і переносить мініатюри галереї.",
    navLabel: "Навігація",
    navFeatures: "Функції",
    navPrivacy: "Приватність",
    languageLabel: "Мова",
    sellerExample: "Топ продавець",
    heroEyebrow: "Розширення Chrome для Allegro",
    heroLead: "Налаштовує сторінки пропозицій Allegro так, щоб імена продавців, мініатюри та посилання було швидше використовувати під час щоденних покупок.",
    heroActionsLabel: "Основні дії",
    primaryCta: "Отримати в Chrome Web Store",
    secondaryCta: "Переглянути параметри",
    proofLabel: "Головне",
    proofManifestTitle: "Manifest V3",
    proofManifestText: "Готово для актуальних версій Chrome",
    proofMarketsTitle: "4 ринки Allegro",
    proofMarketsText: "PL, COM, SK і CZ",
    proofSettingsTitle: "Локальні налаштування",
    proofSettingsText: "Параметри зберігаються у браузері",
    introEyebrow: "Навіщо це",
    introTitle: "Менше пошуку, більше контролю над виглядом пропозиції.",
    introText: "Allegro Flex не намагається перебудувати весь сервіс. Він зосереджується на невеликих місцях, які часто заважають: неклікабельних іменах продавців, довгих колонках мініатюр і посиланнях, які легше впізнати за власним кольором.",
    featuresEyebrow: "Функції",
    featuresTitle: "Покращення, які видно одразу на сторінці товару.",
    featureSellerTitle: "Посилання на продавця",
    featureSellerText: "Ім'я продавця може вести прямо до профілю або списку пропозицій без додаткових кліків у панелях Allegro.",
    featureColorTitle: "Власний колір посилання",
    featureColorText: "Виберіть колір, завдяки якому додані посилання одразу вирізнятимуться в інтерфейсі.",
    featureTabTitle: "Нова вкладка",
    featureTabText: "Профілі продавців можуть відкриватися в новій вкладці, тож поточна пропозиція залишиться під рукою.",
    featureThumbsTitle: "Перенесені мініатюри",
    featureThumbsText: "Галерея товару може переносити мініатюри в кілька рядків, коли пропозиція має багато фото.",
    settingsPreviewLabel: "Попередній перегляд налаштувань",
    optionsTitle: "Налаштування Allegro Flex",
    optionsSubtitle: "Приклад конфігурації",
    settingSeller: "Ім'я продавця як посилання",
    settingColor: "Колір посилання",
    settingNewTab: "Відкривати в новій вкладці",
    settingThumbs: "Переносити мініатюри",
    experienceEyebrow: "Конфігурація",
    experienceTitle: "Панель параметрів залишається простою, а зміни одразу працюють на Allegro.",
    experienceText: "Розширення використовує параметри, збережені у браузері. Увімкніть потрібні функції, виберіть колір і оновіть сторінку пропозиції.",
    privacyEyebrow: "Приватність",
    privacyTitle: "Мінімальна область роботи.",
    privacyText: "Allegro Flex не збирає, не продає і не надсилає жодних даних користувача. Він лише зберігає параметри розширення у браузері, щоб налаштування залишалися активними між відвідуваннями.",
  }
};

function normalizeLanguage(language) {
  return language.toLowerCase().split("-")[0];
}

function getInitialLanguage() {
  const urlLanguage = new URLSearchParams(window.location.search).get("lang");
  if (urlLanguage && supportedLanguages.includes(normalizeLanguage(urlLanguage))) {
    return normalizeLanguage(urlLanguage);
  }

  const storedLanguage = window.localStorage.getItem("allegro-flex-language");
  if (storedLanguage && supportedLanguages.includes(storedLanguage)) {
    return storedLanguage;
  }

  const browserLanguage = navigator.languages
    .map(normalizeLanguage)
    .find((language) => supportedLanguages.includes(language));

  return browserLanguage || "en";
}

function applyLanguage(language) {
  const dictionary = translations[language] || translations.en;
  document.documentElement.lang = language;
  document.title = dictionary.documentTitle;
  document.querySelector('meta[name="description"]')?.setAttribute("content", dictionary.metaDescription);

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (dictionary[key]) {
      element.textContent = dictionary[key];
    }
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    const key = element.dataset.i18nAriaLabel;
    if (dictionary[key]) {
      element.setAttribute("aria-label", dictionary[key]);
    }
  });

  const languageSelect = document.querySelector("#languageSelect");
  if (languageSelect) {
    languageSelect.value = language;
  }
}

const initialLanguage = getInitialLanguage();
applyLanguage(initialLanguage);

document.querySelector("#languageSelect")?.addEventListener("change", (event) => {
  const language = event.target.value;
  window.localStorage.setItem("allegro-flex-language", language);
  applyLanguage(language);
});
