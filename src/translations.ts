export type Language = 'en' | 'pl'

const en = {
  seo: { title: 'SVANTOVID — Independent computer vision validation', description: 'Independent computer vision validation in hidden, controlled scenarios for safety-critical autonomous systems.' },
  skip: 'Skip to content',
  nav: { home: 'SVANTOVID home', menu: 'Open navigation', close: 'Close navigation', navigation: 'Main navigation', method: 'Method', evidence: 'Evidence', why: 'Why SVANTOVID', founder: 'Founder', contact: 'Contact', language: 'Select language' },
  hero: { alt: 'Raw input from a controlled computer vision test', label: 'Early-stage validation platform', tagline: 'Reality vs. Digital Brain.', title: 'A digital crash test for autonomous systems.', body: 'Independent computer vision validation in hidden, controlled scenarios - before deployment in safety-critical environments.', primary: 'See how the test works', secondary: 'Talk to the founder' },
  problem: { eyebrow: 'The problem', title: 'A model can pass the benchmark. And still miss a person.', body: 'In safety-critical systems, an average score is not enough. You need to know who was missed, when the model failed and under which conditions the failure may return.', questions: ['How many people were missed?', 'Who was not detected?', 'When did the model fail?', 'Does the next build repeat the same error?'] },
  evidence: { eyebrow: 'Evidence sequence', title: 'One scene. Three layers of truth.', note: 'Demonstration material - illustrative audit logic.', fallback: 'Visual evidence will appear here once the controlled material is available.', items: [
    { label: '01 - Raw input', text: 'The unaltered scene is the input: no answer is exposed to the model.', alt: 'Raw input frame from a controlled test' },
    { label: '02 - Verified ground truth', text: 'A manually verified reference establishes what is actually present.', alt: 'Verified ground truth for the controlled test frame' },
    { label: '03 - Model output and audit', text: 'Output is compared with the reference to reveal misses, false positives and regressions.', alt: 'Model output compared in an independent audit' }
  ] },
  method: { eyebrow: 'Independent method', title: 'The model does not watch a presentation. It faces a test.', steps: [
    ['HIDE', 'The scenario remains unknown to the team developing the model.'],
    ['DESCRIBE', 'A manually verified ground truth is defined.'],
    ['TEST', 'The model analyses material without prior tuning to the specific test.'],
    ['PROVE', 'The result shows detections, misses, false positives and regressions.']
  ] },
  decision: { eyebrow: 'Deployment decision', title: 'DEPLOY / IMPROVE / STOP', body: 'The outcome is not another impressive dashboard. The outcome is a better decision: deploy, improve or stop.' },
  why: { eyebrow: 'Why SVANTOVID', title: 'Code can be copied. Independent methodology and credible scenarios are much harder to replicate.', acronym: {
    title: 'The name describes the method.',
    full: 'SVANTOVID - Safety Validation of AI in Non-disclosed Tests: Outputs Versus Independently Verified Data.',
    terms: [['S', 'Safety'], ['V', 'Validation'], ['A', 'AI'], ['N', 'Non-disclosed'], ['T', 'Tests'], ['O', 'Outputs'], ['V', 'Versus'], ['I', 'Independently'], ['D', 'Data']],
    description: 'The name encodes the method: non-disclosed tests, model outputs and independently verified reference data.'
  }, items: [
    ['Independent by design', 'Evaluation is separated from the model producer and its development assumptions.'],
    ['Controlled evidence', 'Controlled scenarios meet manually verified ground truth before any conclusion is drawn.'],
    ['Human-relevant errors', 'Reporting focuses on failures that matter to people and deployment decisions.']
  ] },
  uses: { eyebrow: 'Potential applications', title: 'Built for vision where failure has consequences.', note: 'The platform is being developed for validation work across:', items: ['UAV and unmanned systems', 'Robotics', 'Emergency response', 'Critical infrastructure'] },
  founder: { eyebrow: 'Founder', title: 'Karol Huzarski - Founder', bio: 'Paramedic and public health specialist with experience in emergency medicine, international high-risk environments and financial and technology analysis. STOP THE BLEED® instructor, UAV pilot and founder of the Civil Resilience Foundation.', status: 'Building the methodology and early demonstrator.' },
  final: { eyebrow: 'Start with evidence', title: 'Before a model enters the field, let it face SVANTOVID.', cta: 'Let’s talk about validation', alt: 'SVANTOVID brand lockup' },
  footer: { line: 'Independent computer vision validation' }
}

const pl: typeof en = {
  seo: { title: 'SVANTOVID — Niezależna walidacja computer vision', description: 'Niezależna walidacja modeli computer vision w ukrytych, kontrolowanych scenariuszach dla autonomicznych systemów krytycznych.' },
  skip: 'Przejdź do treści',
  nav: { home: 'Strona główna SVANTOVID', menu: 'Otwórz nawigację', close: 'Zamknij nawigację', navigation: 'Nawigacja główna', method: 'Metoda', evidence: 'Dowód', why: 'Dlaczego SVANTOVID', founder: 'Założyciel', contact: 'Kontakt', language: 'Wybierz język' },
  hero: { alt: 'Surowy obraz z kontrolowanego testu computer vision', label: 'Platforma na etapie rozwoju', tagline: 'Reality vs. Digital Brain.', title: 'Cyfrowy test zderzeniowy dla systemów autonomicznych.', body: 'Niezależna walidacja modeli computer vision w ukrytych, kontrolowanych scenariuszach - zanim trafią do środowisk krytycznych dla bezpieczeństwa.', primary: 'Zobacz, jak działa test', secondary: 'Porozmawiaj z założycielem' },
  problem: { eyebrow: 'Problem', title: 'Model może zdać benchmark. I nadal przeoczyć człowieka.', body: 'W systemach krytycznych nie wystarczy wiedzieć, jak model wypada średnio. Trzeba wiedzieć, kogo przeoczył, kiedy zawiódł i w jakich warunkach błąd może się powtórzyć.', questions: ['Ilu ludzi model przeoczył?', 'Kogo nie rozpoznał?', 'W którym momencie zawiódł?', 'Czy nowa wersja powtarza ten sam błąd?'] },
  evidence: { eyebrow: 'Sekwencja dowodu', title: 'Jedna scena. Trzy warstwy prawdy.', note: 'Materiał demonstracyjny - przykładowa logika audytu.', fallback: 'Materiał dowodowy pojawi się tutaj po udostępnieniu kontrolowanych zasobów.', items: [
    { label: '01 - Surowy obraz', text: 'Niezmieniona scena jest wejściem: model nie otrzymuje prawidłowej odpowiedzi.', alt: 'Surowa klatka z kontrolowanego testu' },
    { label: '02 - Zweryfikowany ground truth', text: 'Ręcznie zweryfikowany punkt odniesienia określa, co rzeczywiście znajduje się w scenie.', alt: 'Zweryfikowany ground truth kontrolowanej klatki testowej' },
    { label: '03 - Wynik modelu i audyt', text: 'Wynik jest porównywany z referencją, ujawniając przeoczenia, false positives i regresje.', alt: 'Wynik modelu porównany w niezależnym audycie' }
  ] },
  method: { eyebrow: 'Niezależna metoda', title: 'Model nie ogląda prezentacji. Model przechodzi test.', steps: [
    ['UKRYJ', 'Scenariusz pozostaje nieznany dla zespołu rozwijającego model.'],
    ['OPISZ', 'Definiowany jest ręcznie zweryfikowany ground truth.'],
    ['TESTUJ', 'Model analizuje materiał bez wcześniejszego dopasowania do konkretnego testu.'],
    ['UDOWODNIJ', 'Wynik pokazuje trafienia, przeoczenia, false positives i regresje.']
  ] },
  decision: { eyebrow: 'Decyzja wdrożeniowa', title: 'WDROŻYĆ / POPRAWIĆ / ZATRZYMAĆ', body: 'Wynikiem nie jest kolejny efektowny dashboard. Wynikiem ma być lepsza decyzja: wdrożyć, poprawić albo zatrzymać.' },
  why: { eyebrow: 'Dlaczego SVANTOVID', title: 'Kod można skopiować. Niezależną metodologię i wiarygodne scenariusze znacznie trudniej.', acronym: {
    title: 'Nazwa opisuje metodę.',
    full: 'SVANTOVID - Safety Validation of AI in Non-disclosed Tests: Outputs Versus Independently Verified Data.',
    terms: [['S', 'Safety'], ['V', 'Validation'], ['A', 'AI'], ['N', 'Non-disclosed'], ['T', 'Tests'], ['O', 'Outputs'], ['V', 'Versus'], ['I', 'Independently'], ['D', 'Data']],
    description: 'Walidacja bezpieczeństwa AI w nieujawnionych testach - wyniki modelu kontra niezależnie zweryfikowane dane.'
  }, items: [
    ['Niezależność z założenia', 'Ocena pozostaje oddzielona od producenta modelu i założeń jego zespołu.'],
    ['Kontrolowany dowód', 'Kontrolowane scenariusze łączą się z ręcznie zweryfikowanym ground truth.'],
    ['Błędy istotne dla człowieka', 'Raport skupia się na błędach ważnych dla ludzi i decyzji wdrożeniowej.']
  ] },
  uses: { eyebrow: 'Potencjalne zastosowania', title: 'Dla systemów wizyjnych, w których błąd ma konsekwencje.', note: 'Platforma jest rozwijana z myślą o walidacji w obszarach:', items: ['UAV i systemy bezzałogowe', 'Robotyka', 'Ratownictwo i reagowanie kryzysowe', 'Infrastruktura krytyczna'] },
  founder: { eyebrow: 'Założyciel', title: 'Karol Huzarski - Founder', bio: 'Ratownik medyczny i specjalista zdrowia publicznego. Doświadczenie w medycynie ratunkowej, środowiskach międzynarodowych wysokiego ryzyka oraz analizie finansowej i technologicznej. Instruktor STOP THE BLEED®, pilot UAV i założyciel Fundacji Odporności Cywilnej.', status: 'Rozwija metodologię i wczesny demonstrator.' },
  final: { eyebrow: 'Zacznij od dowodu', title: 'Zanim model trafi w teren, niech najpierw przejdzie SVANTOVID.', cta: 'Porozmawiajmy o walidacji', alt: 'Lockup marki SVANTOVID' },
  footer: { line: 'Niezależna walidacja systemów computer vision' }
}

export const translations = { en, pl }
