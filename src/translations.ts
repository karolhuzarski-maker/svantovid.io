export type Language = 'en' | 'pl'

const en = {
  seo: { title: 'SVANTOVID — Independent computer vision validation', description: 'Independent validation of computer-vision models in hidden, controlled scenarios for safety-critical environments.' },
  nav: { method: 'Method', evidence: 'Evidence', why: 'Why SVANTOVID', founder: 'Founder', contact: 'Contact', label: 'Select language', menu: 'Navigation' },
  hero: { kicker: 'Reality vs. Digital Brain.', lead: 'A digital crash test for autonomous systems.', body: 'Independent validation of computer-vision models in hidden, controlled scenarios before deployment in safety-critical environments.', primary: 'See how the test works', secondary: 'Talk to the founder', label: 'Illustrative controlled-test visualization', alt: 'Illustrative raw input for a controlled computer-vision test', fallback: 'RAW INPUT ASSET' },
  problem: { label: 'THE HUMAN CONSEQUENCE', title: 'A model can pass the benchmark. And still miss a person.', body: 'A critical miss is not merely a lower score. In the field, it is a person the system did not see.', baseline: 'A benchmark asks', audit: 'An independent audit asks', questions: ['HOW MANY?', 'WHO WAS MISSED?', 'WHEN?', 'UNDER WHAT CONDITIONS?', 'DID BUILD B CREATE A REGRESSION?'] },
  evidence: { label: 'EVIDENCE / 01—03', title: 'From raw input to evidence.', note: 'Illustrative concept. It does not represent a completed commercial validation.', items: [
    { title: 'RAW INPUT', caption: 'The model does not know the answer before the test.', alt: 'Illustrative raw input test frame', fallback: 'RAW INPUT ASSET' },
    { title: 'EXPERT GROUND TRUTH', caption: 'Reference data is created and versioned before evaluation.', alt: 'Illustrative expert ground-truth layer', fallback: 'GROUND TRUTH ASSET' },
    { title: 'MODEL OUTPUT / SVANTOVID AUDIT', caption: 'Every miss is connected to time, conditions and criticality.', alt: 'Illustrative model output with SVANTOVID audit', fallback: 'AUDIT OUTPUT ASSET' }
  ] },
  method: { label: 'METHOD / CONTROLLED & HIDDEN', title: 'We do not build another model. We build an independent test it has never seen.', steps: [ ['HIDE','controlled scenario and conditions'], ['DESCRIBE','versioned expert ground truth'], ['TEST','model through API or output file'], ['PROVE','audit, retest and A/B regression control'] ] },
  decision: { label: 'AUDIT / DECISION', title: 'Evidence for a deployment decision.', states: ['DEPLOY','IMPROVE','STOP'], intro: 'The report can identify:', points: ['critical false negatives','error signature','visibility and scale','occlusion and conditions','evidence frame or short clip','A/B retest','regression control'], hidden: 'Full recordings and complete annotations remain hidden. The client receives evidence needed to diagnose and retest the failure.' },
  why: { label: 'DEFENSIBILITY', title: 'Code can be copied. Test methodology is much harder.', pillars: ['Controlled scenarios','Hidden and rotating test sets','Versioned expert ground truth','Error criticality, not only detection count'] },
  uses: { label: 'DESIGNED FOR', title: 'Designed for safety-critical vision.', items: ['UAV and aerial vision','Autonomous and remotely operated robots','Emergency response','Critical infrastructure and security systems'] },
  founder: { label: 'FOUNDER / FIELD EXPERIENCE', title: 'Built from field reality, not from a desk.', name: 'Karol Huzarski', bio: ['Paramedic and public-health specialist','Operational experience at Kandahar Airfield','OSCE SMM mission experience','STOP THE BLEED and CLS instructor','UAV pilot','Former Shell Finance and Digital Force experience'], status: 'Early demonstrator in development. Open to pilot and technical partnerships.' },
  final: { label: 'PILOT & TECHNICAL PARTNERSHIPS', title: 'Before a model enters the field, let it face SVANTOVID.', cta: 'Start a conversation', email: 'hello@svantovid.io' },
  footer: 'Independent computer vision validation', skip: 'Skip to content'
}

const pl: typeof en = {
  seo: { title: 'SVANTOVID — Niezależna walidacja computer vision', description: 'Niezależna walidacja modeli computer vision w ukrytych, kontrolowanych scenariuszach dla środowisk krytycznych.' },
  nav: { method: 'Metoda', evidence: 'Dowód', why: 'Dlaczego SVANTOVID', founder: 'Założyciel', contact: 'Kontakt', label: 'Wybierz język', menu: 'Nawigacja' },
  hero: { kicker: 'Reality vs. Digital Brain.', lead: 'Cyfrowy test zderzeniowy dla systemów autonomicznych.', body: 'Niezależna walidacja modeli computer vision w ukrytych, kontrolowanych scenariuszach przed wdrożeniem w środowiskach krytycznych dla bezpieczeństwa.', primary: 'Zobacz, jak działa test', secondary: 'Porozmawiaj z założycielem', label: 'Ilustracyjna wizualizacja kontrolowanego testu', alt: 'Ilustracyjny surowy obraz kontrolowanego testu computer vision', fallback: 'ZASÓB: SUROWY OBRAZ' },
  problem: { label: 'LUDZKA KONSEKWENCJA', title: 'Model może zdać benchmark. I nadal przeoczyć człowieka.', body: 'Krytyczne pominięcie to nie tylko niższy wynik. W terenie oznacza człowieka, którego system nie zobaczył.', baseline: 'Benchmark pyta', audit: 'Niezależny audyt pyta', questions: ['ILE?', 'KOGO POMINIĘTO?', 'KIEDY?', 'W JAKICH WARUNKACH?', 'CZY BUILD B WYWOŁAŁ REGRESJĘ?'] },
  evidence: { label: 'DOWÓD / 01—03', title: 'Od surowego obrazu do dowodu.', note: 'Wizualizacja koncepcji. Nie przedstawia zakończonej walidacji komercyjnej.', items: [
    { title: 'SUROWY OBRAZ', caption: 'Model nie zna odpowiedzi przed testem.', alt: 'Ilustracyjna surowa klatka testowa', fallback: 'ZASÓB: SUROWY OBRAZ' },
    { title: 'EKSPERCKI GROUND TRUTH', caption: 'Dane referencyjne powstają i są wersjonowane przed oceną.', alt: 'Ilustracyjna warstwa eksperckiego ground truth', fallback: 'ZASÓB: GROUND TRUTH' },
    { title: 'WYNIK MODELU / AUDYT SVANTOVID', caption: 'Każdy błąd łączymy z czasem, warunkami i krytycznością.', alt: 'Ilustracyjny wynik modelu z audytem SVANTOVID', fallback: 'ZASÓB: WYNIK AUDYTU' }
  ] },
  method: { label: 'METODA / KONTROLOWANA I UKRYTA', title: 'Nie budujemy kolejnego modelu. Budujemy niezależny test, którego model wcześniej nie widział.', steps: [ ['UKRYJ','scenariusz i warunki'], ['OPISZ','wersjonowane dane referencyjne eksperta'], ['TESTUJ','model przez API albo plik wynikowy'], ['UDOWODNIJ','audyt, retest i kontrola regresji A/B'] ] },
  decision: { label: 'AUDYT / DECYZJA', title: 'Dowód do decyzji o wdrożeniu.', states: ['WDROŻYĆ','POPRAWIĆ','ZATRZYMAĆ'], intro: 'Raport może wskazywać:', points: ['krytyczne false negatives','sygnaturę błędu','widoczność i skalę','okluzję i warunki','klatkę dowodową lub krótki klip','retest A/B','kontrolę regresji'], hidden: 'Pełne nagrania i komplet anotacji pozostają ukryte. Klient otrzymuje materiał potrzebny do diagnozy błędu i retestu.' },
  why: { label: 'TRUDNOŚĆ ODTWORZENIA', title: 'Kod można odtworzyć. Metodologię testu — znacznie trudniej.', pillars: ['Kontrolowane scenariusze','Ukryte i rotowane zestawy testowe','Wersjonowane dane referencyjne eksperta','Krytyczność błędu, nie tylko liczba detekcji'] },
  uses: { label: 'PROJEKTOWANY DLA', title: 'Projektowany dla systemów wizyjnych krytycznych dla bezpieczeństwa.', items: ['UAV i obserwacja z powietrza','Roboty autonomiczne i zdalnie sterowane','Ratownictwo i reagowanie kryzysowe','Infrastruktura krytyczna i systemy bezpieczeństwa'] },
  founder: { label: 'ZAŁOŻYCIEL / DOŚWIADCZENIE TERENOWE', title: 'Problem nie powstał przy biurku.', name: 'Karol Huzarski', bio: ['Ratownik medyczny i specjalista zdrowia publicznego','Doświadczenie operacyjne w Kandahar Airfield','Doświadczenie w misji OSCE SMM','Instruktor STOP THE BLEED i CLS','Pilot UAV','Doświadczenie w Shell Finance i Digital Force'], status: 'Wczesny demonstrator w budowie. Projekt otwarty na partnerstwa pilotażowe i techniczne.' },
  final: { label: 'PARTNERSTWA PILOTAŻOWE I TECHNICZNE', title: 'Zanim model trafi w teren, niech najpierw przejdzie SVANTOVID.', cta: 'Rozpocznij rozmowę', email: 'hello@svantovid.io' },
  footer: 'Niezależna walidacja computer vision', skip: 'Przejdź do treści'
}

export const translations = { en, pl }
