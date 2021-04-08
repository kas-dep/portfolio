import { Project } from './projects-data-model';
export const projects: Project[] = [
  {
    id: 'myHaircarePlace',
    name: 'My Haircare Place',
    description:
      'My haircare place jest moim głównym, najbardziej rozbudowanym i innowacyjnym projektem. Frontend aplikacji został napisany w Angular 10. W celu optymalizacji i bezpieczeństwa wykorzystałam lazy loading. Layout powstał z wykorzystaniem biblioteki Angular Material i preprocesora Less. Do backendu wykorzystałam ExpressJs i NodeJs oraz bazę danych mySQL. Frontend komunikuje się z backendem za pomocą REST API. Aplikacja umożliwia użytkownikowi rejestrację i logowanie, dodawanie, opisywanie i odczytywanie produktów, zdjęć, planowanie zabiegów pielęgnacyjncyh (FullCalendar).',
    picture: '../../../assets/images/haircarePlaceInMonitor.png',
    url: 'http://derta.eu/gsap_animation/',
    githubLink: 'https://github.com/kas-dep/gsap_animation ',
    areLinks: true,
  },
  {
    id: 'kasdepGame',
    name: 'Kasdep Game',
    description:
      'Kasdep game jest grą napisaną z użyciem frameworka Angular 10. W pisaniu styli wykorzystałam Less, który pomaga tworzyć... . Logika aplikacji jest inspirowana zadaniem rekrutacyjnym. Wymogi jakie gra musi spełniać zostały opisane w instrukcji gry. Projekt ten realizowałam na początku mojej nauki Angulara, a niedawno napisałam taką samą grę z wykorzystaniem Reacta.',
    picture: '../../assets/images/kasdepGameMonitor.png',
    url: 'http://derta.eu/gsap_animation/',
    githubLink: 'https://github.com/kas-dep/gsap_animation',
    areLinks: true,
  },
  {
    id: 'kasdepGameReact',
    name: 'Kasdep Game',
    description:
      'Kasdep game jest aplikacją napisaną z użyciem biblioteki React. Logika aplikacji jest inspirowana zadaniem rekrutacyjnym. Wymogi jakie gra musi spełniać zostały opisane w instrukcji gry. Już kiedyś realizowałam ten projekt w Angularze i chciałam również napisać go w Reacie w ramach nauki biblioteki. Context, hooki',
    picture: '../../assets/images/kasdepGameMonitor.png',
    url: 'http://derta.eu/gsap_animation/',
    githubLink: 'https://github.com/kas-dep/gsap_animation',
    areLinks: true,
  },
  {
    id: 'portfolio',
    name: 'Portfolio',
    description:
      'UX portfolia zaprojektowałam w programie Adobe XD, a następnie zaprogramowałam aplikację w Angular 11 z wykorzystaniem preprocesora SCSS. Widok strony jest responsywny - zastosowałam zasadę Mobile First. Portfolio ma na celu przedstawienie moich umiejętności programistycznych oraz zaprezentowanie kilku moich aplikacji.',
    picture: '../../assets/images/portfolioInMonitor.png',
    url: 'http://derta.eu/gsap_animation/',
    githubLink: 'https://github.com/kas-dep/gsap_animation',
    areLinks: true,
  },
  {
    id: 'animation',
    name: 'Animacja Flower for you',
    description:
      'Prosta aplikacja stworzona w celu praktycznej nauki GSAP Animations. Do jej zaprogramowania wykorzystałam HTML5, CSS3 oraz Javascript ES6. Projekt jest na tyle mały, że nie wymagał użycia innych bibliotek czy frameworków. ',
    picture: '../../assets/images/flowerForYouMonitor.png',
    url: 'https://simple-gsap-animation.herokuapp.com/',
    githubLink: 'https://github.com/kas-dep/gsap_animation',
    areLinks: true,
  },
  {
    id: 'uxDesign',
    name: 'UX Design',
    description:
      'Na studiach poznałam techniki oraz dobre praktyki zarówno UX jak i UI design. Bardzo zainteresował mnie ten temat, dlatego często przeglądam blogi poświęcone tej tematyce np. UX planet. Do projektowania UX wykorzystuę program Adobe XD. Do tej pory zrobilam projekt tego portfolio oraz aplikacji Green Spa, którą będęw przyszłości programować w React.',
    picture: '../../assets/images/design.png',
    url: '../../assets/pdfs/uxDesignPrototypes.pdf',
    areLinks: true,
  },
  {
    id: 'inProgress',
    name: 'Nad czym obecnie pracuję',
    description:
      'Cały czas poszerzam swoją wiedzę teoretyczną oraz praktyczną. Aktualnie pracuję nad projektemi pisanymi w React. Programuję grę Kasdep game, którą już kiedyś napisałam w Angularze. Drugi projekt to aplikacja w ramach projektu na studia wyświetlająca memy. ',
    picture: '../../assets/images/progress.png',
    url: '',
    areLinks: false,
  },
];
