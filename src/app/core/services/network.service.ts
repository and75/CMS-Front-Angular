import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { NetworkData } from '../models/network.model';

@Injectable({
  providedIn: 'root'
})
export class NetworkService {
  private mockData: NetworkData = {
    cggg: [
      {
        label: "Julien Bernard - Associate Professor in Philosophy of Science",
        url: "https://www.cggg.fr/membres/bernard-julien"
      },
      {
        label: "Paola Cantù - Research Director CNRS",
        url: "https://www.cggg.fr/membres/cantu-paola"
      },
      {
        label: "Gabriella Crocco - Full Professor in Logic, History and Philosophy of Mathematics, Philosophy of Science",
        url: "https://www.cggg.fr/membres/crocco-gabriella"
      },
      {
        label: "Valérie Debuiche - Associate Professor in History of Modern Philosophy, History and Philosophy of Mathematics in the Modern Age",
        url: "https://www.cggg.fr/membres/debuiche-valerie"
      },
      {
        label: "Sebastien Dutreuil - CNRS Researcher in History and Philosophy of Earth Sciences, Environmental Humanities, Philosophy of Modelling",
        url: "https://www.cggg.fr/membres/dutreuil-sebastien"
      },
      {
        label: "Frédéric Jaëck - Associate Professor in History and Philosophy of Mathematics, Theory of Science",
        url: "https://www.cggg.fr/membres/jaeck-frederic"
      },
      {
        label: "Yves Meinard - CNRS Researcher in Philosophy of Biodiversity, Epistemology of Decision Making",
        url: "https://www.cggg.fr/membres/meinard-yves"
      }
    ],
    axe: [
      {
        label: "Centuri - Turing Center For Living Systems",
        url: "https://centuri-livingsystems.org/"
      },
      {
        label: "Ias - Institute For Advanced Studies",
        url: "https://www.imera.fr/En/"
      },
      {
        label: "Ins - Institute For Systems Neuroscience",
        url: "https://ins-amu.fr/"
      },
      {
        label: "Interdisciplinary Mission Amu",
        url: "https://www.univ-amu.fr/en/public/interdisciplinary-mission"
      },
      {
        label: "Ecocomplex Initiative",
        url: "https://dipee-sud.cnrs.fr/ecocomplex/"
      },
      {
        label: "Ird - Institute For Research On Development",
        url: "https://en.ird.fr/"
      },
      {
        label: "Inciam - Institute For Creativity And Innovation",
        url: "https://institut-inciam.univ-amu.fr/fr"
      },
      {
        label: "Amidex Foundation",
        url: "https://www.univ-amu.fr/en/public/amidex-foundation"
      }
    ],
    france: [
      {
        label: "Institut des Systèmes Complexes de Paris IdF (ISC - PIF)",
        url: "http://css-fr.org/"
      },
      {
        label: "Société Française Systèmes Complexes",
        url: "http://css-fr.org/"
      },
      {
        label: "IHPST - PSU",
        url: "https://ihpst.pantheonsorbonne.fr/"
      },
      {
        label: "FONDATION EDGAR MORIN",
        url: "https://fondationedgarmorin.org/"
      },
      {
        label: "République des savoirs: Lettres, Sciences, Philosophie",
        url: "https://republique-des-savoirs.fr/equipes/centre-cavailles/"
      },
      {
        label: "Centre de Recherche en histoire des Idées (Côte d'Azur University)",
        url: "http://crhi-unice.fr/"
      },
      {
        label: "Laboratoire J.A.Dieudonné UMR CNRS-UNS 7351 (Côte d'Azur University)",
        url: "https://math.univ-cotedazur.fr/laboratoire/pr%c3%a9sentation-du-laboratoire"
      },
      {
        label: "IRHIM (Prof. Sara Franceschelli)",
        url: "https://ihrim.ens-lyon.fr/auteur/franceschelli-sara"
      },
      {
        label: "ESSEC (Prof. Laurent Bibard)",
        url: "https://faculty.essec.edu/en/cv/bibard-laurent/"
      }
    ],
    international: [
      {
        label: "Santa Fe Institute (USA)",
        url: "https://www.santafe.edu/"
      },
      {
        label: "Kate Hamburger Kolleg \"Cultures of Research\" - TU Aachen",
        url: "https://khk.rwth-aachen.de/"
      },
      {
        label: "SNS Pisa",
        url: "https://www.sns.it/it/disciplinacorso-di-laurea/corso-ordinario/filosofia"
      },
      {
        label: "University of Pisa - Scuola Superiore Sant'Anna, Interdepartmental Center for Complex Systems Studies",
        url: "https://www.cissc.unipi.it/"
      },
      {
        label: "Ecole Centrale de Casablanca (J.-P. Llored) ",
        url: "#"
      },
      {
        label: "Knowledge Lab - University of Chicago",
        url: "https://knowledgelab.org/"
      },
      {
        label: "Université de Freiburg i.B., Exzellenz Cluster \"Living, Adaptive and Energy-autonomous Materials Systems\" (Prof. Oliver Müller)",
        url: "https://www.livmats.uni-freiburg.de/en"
      },
      {
        label: "Indiana University Bloomington, Center for Complex Networks and System Research (Prof. Santo Fortunato)",
        url: "https://luddy.indiana.edu/research/research-areas/complex-networks-systems.html"
      },
      {
        label: "IZWT - Interdisziplinäre Zentrum für Wissenschaft und Technikforschung an der Bergischen Universität Wuppertal",
        url: "https://www.izwt.uni-wuppertal.de/de/"
      },
      {
        label: "Complexity Hub (Radboud University Nijmegen)",
        url: "https://www.ru.nl/en/departments/behavioural-science-institute/complex-systems-group"
      },
      {
        label: "Network Science Institute at Northeastern University - MA (Prof. Albert-Lazlo Barabási)",
        url: "https://www.networkscienceinstitute.org/"
      },
      {
        label: "Centre for Complex Systems Javalharian Nehru University (New Delhi)",
        url: "https://www.jnu.ac.in/scis-ccss"
      },
      {
        label: "Linköpings Universitet (Prof. Harald Wiltsche)",
        url: "https://liu.se/en/employee/harwi67"
      },
      {
        label: "Queen Mary College (Prof. Ginestra Bianconi)",
        url: "https://www.qmul.ac.uk/maths/profiles/bianconig.html"
      },
      {
        label: "Center for Philosophy at the University of Lisbon",
        url: "https://cful.letras.ulisboa.pt/"
      },
      {
        label: "Bristol Centre for Complexity Science (Prof. James Ladyman)",
        url: "#"
      },
      {
        label: "Universität Potsdam, Prof. Caroline Wiesner - Chair for Complexity",
        url: "https://www.karowiesner.org/"
      },
      {
        label: "LMU München (Prof. Stephan Hartmann)",
        url: "https://www.mcmp.philosophie.uni-muenchen.de/index.html"
      },
      {
        label: "A.r.t.e.s. University of Cologne (Prof. Thiemo Breyer)",
        url: "https://artes.phil-fak.uni-koeln.de/"
      },
      {
        label: "Institute for transcendental Philosophy and Phenomenology",
        url: "https://itp-buw.de/"
      },
      {
        label: "Notre Dame University, Department of Political Science (Prof. Vittorio Hösle)",
        url: "https://germanandslavic.nd.edu/people/vittorio-hosle/?utm_campaign=redirect&utm_medium=web&utm_source=germanandrussian.nd.edu"
      },
      {
        label: "Department of pure and applied sciences, Urbino University (DiSPeA)",
        url: "https://www.uniurb.it/ateneo/persone-e-strutture/dipartimenti/dipartimento-di-scienze-pure-e-applicate-dispea"
      },
      {
        label: "University College of Dublin - School of Philosophy",
        url: "https://www.ucd.ie/philosophy/"
      },
      {
        label: "C.H.A.O.S",
        url: "https://www.chaoshumanresearch.com/index.php"
      }
    ]
  };

  getNetworkData(): Observable<NetworkData> {
    return of(this.mockData);
  }
}