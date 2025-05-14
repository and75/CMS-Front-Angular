import { TeamMember, TeamMemberStatus } from "../models/team.model";

export const mockTeamMembers: TeamMember[] = [
  {
    id: "0",
    status: TeamMemberStatus.ACTIVE,
    slug: "fausto-fraisopi",
    img: "/assets/img/team/fraisopi_fausto.png",
    alt: "Fausto Fraisopi",
    name: "Fausto Fraisopi",
    role: "Chair-holder",
    project: "Transdisciplinarity and Complexity Research",
    projectDesc: "",
    bio: "After my Degree at the University \"La Sapienza\" of Rome (2001) and my Doctoral and post-doctoral studies in Paris (2002-2010), I landed to Freiburg as Fellow of the Alexander von Humboldt Foundation. After my Habilitation, I've been Professor at the University of Freiburg (2017-2024) and Senior Research Fellow at the Institute for Advanced Study of Aix-Marseille University (2022-2024). I'm currently holder of the AMIDEX Excellence Chair 't-co.re@AMU' - Transdisciplinarity and Complexity Research at Aix-Marseille University and Member of the Center Gilles Gaston Granger (UMR 7304) . My research and teaching activity are in theoretical philosophy, history and theory of science, history of philosophy and ideas. My activity is more precisely oriented to ask newly the question about rationality in relation to complexity of phenomenal world (emerging from the ongoing scientific revolution of complex systems). Such questioning is situated at the crossroad between history of philosophy and ideas, ontology and theory of science.",
    book: [
      "Fraisopi F., with B. Balschun [submitted]: Topoi der Erfahrung. Noema, Horizont, Eidos aus der gegenwärtigen Perspektive [2026]",
      "Fraisopi F., Philosophie und Frage, Freiburg i.B. - München, Alber-Verlag, 2016. Vol. I. Über Metaphilosophie; Vol. II. Untersuchungen über die Formen der Mathesis.",
      "Fraisopi F., La complexité et les phénomènes. Nouvelles ouvertures entre science et philosophie, Paris, Hermann (coll. Vision des sciences), Mars 2012, 580 pp. (with a preface of Jocelyn Benoist).",
      "Fraisopi F., with Neri M., Brovelli A., Castro S., et al.,: Taxonomy of Neuroscientific Strategies Based on Interaction Orders. European Journal of  Neurosciences, 61, 3,  2025.  doi: 10.1111/ejn.16676. PMID: 39906974.",
      "Fraisopi F., The Mystery of Cosmos. Negative Issues of Scientific Holism in Quantum Mechanics and Wittgenstein, in P. Allen - F. Marcacci (eds.), Divined Explanations. The Theological and Philosophical Context for the Development of the Sciences, Leiden, Brill-De Gruyter, 2024, 232-254."
    ],
    resources: [
      {
        name: "ORCID",
        url: "https://orcid.org/0000-0001-7874-6628",
        icon: "bi-link-45deg"
      },
      {
        name: "CGGG - UMR 7304 (Institutional)",
        url: "https://www.cggg.fr/membres/fraisopi-fausto",
        icon: "bi-link-45deg"
      },
      {
        name: "Academia",
        url: "https://univ-amu.academia.edu/FaustoFraisopi",
        icon: "bi-bank"
      },
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/fausto-fraisopi-9b461a5",
        icon: "bi-linkedin"
      }
    ],
    externalLink: "",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "1",
    slug: "erica-onnis",
    status: TeamMemberStatus.ACTIVE,
    img: "/assets/img/team/erica_onnis.png",
    alt: "Erica Onnis",
    name: "Erica Onnis",
    role: "Guest Professor",
    project: "Which Metaphysics of Emergence for a Metaphysics of (Biological) Complexity?",
    projectDesc: "The project aims to formulate a metaphysics of emergence appropriate for the understanding of complex biological systems. It will develop a structuro-functional theory of ontological emergence capable of explaining emergent causal properties, emergent qualitative properties, and the relationships holding between them. In doing so, the project will foster a fruitful dialogue between metaphysicians, biologists, and complexity scientists, providing a coherent framework for understanding biological complexity.",
    bio: "Erica Onnis is an Associate Professor in Theoretical Philosophy at Cusano University, Rome. She's been an alumna fellow at the Käte Hamburger Kolleg “Cultures of Research (RWTH Aachen University) since 2022 and a member of the Labont – Center for Ontology at the University of Turin since 2015. During her doctoral studies she was a visiting scholar at the University College Cork, the University of Lisbon and Wuhan University. Her research interests lie in metaphysics and philosophy of science. In particular, she studies the nature of emergent phenomena and the relationships between the notion of emergence and those of reduction, novelty, complexity, and causation. On the topic, she wrote a book (Metafisica dell’emergenza, 2021) and several papers.",
    book: [
      "Ferraris, M., Hernández Marcelo J., Onnis E. (2024). Realismo y Emergencia. Madrid, Dykinson.",
      "Onnis, E. (2021). Metafisica dell’emergenza. Torino, Rosenberg & Sellier.",
      "Onnis, E, Paolini Paoletti, M. (eds.) (forthcoming). New Philosophical Approaches to Emergence: Towards Pluralism. Synthese Topical Collection."
    ],
    resources: [
      {
        name: "www.ericaonnis.it",
        url: "http://www.ericaonnis.it/",
        icon: "bi-link-45deg"
      },
      {
        name: "Philpeople",
        url: "https://philpeople.org/profiles/erica-onnis",
        icon: "bi-link-45deg"
      }
    ],
    externalLink: "",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: "2",
    slug: "ahmed-benabadji",
    status: TeamMemberStatus.ACTIVE,
    img: "/assets/img/team/ahmed-benabadji.png",
    alt: "Ahmed Benabadji",
    name: "Ahmed Benabadji",
    role: "PhD Researcher",
    project: "Towards Learning Territories: Integrating Dialogical, Systemic, and Forward-Looking Approaches for Sustainable Community Development",
    projectDesc: "This doctoral research explores how rural communities in developing countries can become learning territories to support sustainable local development. By integrating dialogical, systemic, and forward-looking (prospective) approaches, the study seeks to understand the collective learning processes, governance dynamics, and participatory practices that enable communities to co-construct their futures.",
    bio: "Ahmed Benabadji is a practitioner and researcher in human and territorial development, with a particular focus on rural resilience and inclusive innovation. In 2015–2016, he undertook a year-long journey across four continents with his family to study community development in remote villages. He later founded Open Village, an NGO supporting a network of Moroccan villages engaged in peer learning and sustainable local development. A founding member of the think tank Les Citoyens, he also contributes to public debate on rural issues and social cohesion. Ahmed is a member of the scientific committee of the École Centrale Casablanca’s chair on “Collective Emergence and Inclusive Development” and teaches at École Centrale Casablanca, Université Paris Dauphine–PSL, and Université Mohammed VI Polytechnique. He lives with his family near Marrakech on a permaculture olive farm.",
    book: [],
    resources: [],
    externalLink: "",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "3",
    slug: "arantzazu-saraxaga-arregi",
    status: TeamMemberStatus.ACTIVE,
    img: "/assets/img/team/ARANTZAZU_SARAXTAGA_ARREGI.png",
    alt: "Arantzazu S. Arregi",
    name: "Arantzazu Saraxtaga Arregi",
    role: "Post-doc Researcher",
    project: "Paradoxes of Complexity: Philosophical and Scientific Discourse Analysis of the Concept of Order & Epistemologies of Uncertainty.",
    projectDesc: "From the perspectives of the history of science, philosophy, and epistemology, I examine the double discourse paradox that underlies complexity science and complexity theories. 1 - the emergence of orders from unstable and critical processes, and 2 - uncertainty as a source of knowledge. My research is dedicated to a philosophical investigation of the ontological and epistemological paradoxes inherent in complexity. This inquiry unfolds in two phases. First, through a critical discourse analysis of the notion of order and disorder - entropy and neg-entropy - in complex systems, and second, by examining uncertainty as the epistemic foundation of complexity science. I am currently working on my habilitation thesis 'An Epistemology of Complexity: Irreversibility, Contingency and Uncertainty'.",
    bio: "Arantzazu Saratxaga Arregi PhD, born 1982, is a university lecturer and philosopher. From 2000 to 2004 she studied Philosophy at the University of Deusto in Bilbao. In 2008 she wrote her Master’s thesis on “The Mothers in Goethe’s Faust II” under the supervision of the philosopher Eugenio Trias Sagnier. In 2018 she completed her doctorate with Peter Sloterdijk on “A systematic introduction to a matrixial philosophy. Mother-World-Womb. Towards a multivalent ontology”.",
    book: [
      "Saratxaga Arregi, Arantzazu (2019): Matrixiale Philosophie: Mutter-Welt-Gebärmutter: Zu einer dreiwertigen Ontologie. Bielefeld. Transcript, 330 pp. DOI: 10.14361/9783839445907-012.",
    ],
    resources: [
      {
        name: "ORCID",
        url: "https://orcid.org/0000-0002-1696-1098",
        icon: "bi-link-45deg",
      },
    ],
    externalLink: "",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "4",
    slug: "roberto-carlos-abrego-martinez",
    status: TeamMemberStatus.ACTIVE,
    img: "/assets/img/team/roberto_carlos_abrego_martinez.png",
    alt: "Roberto C. A. Martinez",
    name: "Roberto Carlos Abrego Martinez",
    role: "Associate Phd Researcher",
    project: "Phenomenological analysis of Benacerraf's epistemological problem",
    projectDesc: "My research project will in two specific articles - What numbers could not be? and The mathematical truth, the Benacerraf dilemma: 'either we postulate that mathematical language refers to abstract objects -such as classes, numbers, etc.- or we refuse such a postulation'. I will frame the problem in the following Husserlian works for their relevance for the phenomenological method and for the philosophical attempts regarding the relation between philosophy and science.",
    bio: "I'm a doctoral candidate in the Philosophy of Mathematics at the Albert-Ludwig University in Freiburg, Germany. I earned a Bachelor’s degree in Physics and Mathematics (UMSNH) and a Master's degree in Philosophy and Social Sciences (ITESO). Merging these disciplines, I focused on phenomenological approaches to foundational questions in mathematics—particularly exploring Benacerraf's epistemological dilemma and how abstract objects might be reconciled with human cognition. I taught philosophy, mathematics, and sciences in Mexico—including at the Canadian School (Guadalajara)—and I served as a spiritual director and workshop facilitator, emphasizing the interplay between contemplative practices and intellectual inquiry. A committed polyglot, Roberto is fluent in Spanish (native), French (DALF C1), English (CAE C1), and Portuguese (C1), with intermediate German (B2) and working knowledge of Greek and Italian. His current research seeks to illuminate the ontological and epistemic status of mathematical entities from an intercultural and multilingual perspective.",
    book: [],
    resources: [
      {
        name: "Academia",
        url: "https://umich-mx.academia.edu/robertocarlosabrego",
        icon: "bi-bank",
      },
      {
        name: "Linkedin",
        url: "http://www.linkedin.com/in/roberto-carlos-abrego-manr%25C3%25ADquez-869078222",
        icon: "bi-linkedin",
      },
    ],
    externalLink: "",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "5",
    slug: "benedikt-balschun",
    status: TeamMemberStatus.ACTIVE,
    img: "/assets/img/team/benedikt_balschun.png",
    alt: "Benedikt Balschun",
    name: "Benedikt Balschun",
    role: "Associate Phd Researcher",
    project: "Inter-disciplinarity and meta-ontology: an epistemic structural approach",
    projectDesc: "The project is aimed at analyzing and ultimately modeling the behavioral characteristics and fundamental properties of ontologies from an metaontologic viewpoint, taking into consideration the epistemic structures guiding the constitution of objects ascribed to these regional ontologies and the possibility of their complexification.",
    bio: "My name is Benedikt Balschun and currently I am a Ph.D. student at the Department of Philosophy of the University of Freiburg (Germany) under the supervision of Prof. Dr. Fausto Fraisopi. Prior to this I finished my bachelors in philosophy, history and political sciences (2016-19) at the University of Göttingen, subsequently starting my masters in philosophy (2019-21) in Freiburg, graduating with a thesis regarding the intimate connection between epistemological and ontological structures operating inside the „Noema“, a terminus prominently coined by German philosopher Edmund Husserl. Followed by an almost 3 year lasting study of mathematics, once again at the Unversity of Freiburg, I decided to pursue a Ph.D. degree in philosophy/theory of science. My recent work is concerned in developing a framework to analyze the behaviour and constitution of „theories“ and „ontologies“ as genetic and complex systems of sense from a meta-ontological standpoint of view, especially aiming at their modeling and the therein involved mathematical tool-sets (e.g. category theory, network modeling).",
    book: [
      "Benedikt Balschun, with F. Fraisopi [submitted]: Topoi der Erfahrung. Noema, Horizont, Eidos aus der gegenwärtigen Perspektive "
    ],
    resources: [],
    externalLink: "",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "6",
    slug: "jeremy-attard",
    status: TeamMemberStatus.ACTIVE,
    img: "/assets/img/team/jeremy_attard.png",
    alt: "Jeremy Attard",
    name: "Jeremy Attard",
    role: "Post-doc Researcher",
    project: "Complexity, transdisciplinarity and epistemological unity",
    projectDesc: "This project aims to highlight some structural epistemological features common to complexity sciences, given that a minimal epistemological unity of science seems necessary to foster discussion between different scientific fields and to enable fruitful transdisciplinarity.",
    bio: "Theoretical physicist by training (PhD in Theoretical Physics, 2018), I defended in 2024 a PhD thesis in philosophy of science and epistemology under the supervision of Anne Staquet (University of Mons) and Dominique Lambert and Olivier Sartenaer (University of Namur). My work focuses on comparative aspects between natural and social sciences in a unitary epistemological perspective. My topics of interest include (but are not limited to): epistemology of models and modelling, transdisciplinary epistemological structures of scientific theories, the scientific demarcation problem and its links to scientificity and pseudo-scientificity issues.",
    book: [
      "J. Attard, Epistemological status of rationality principles in the social sciences: a structural invariance criterion. In: Michal Oleksowicz (ed.), Proceedings of the Hypothesis in science International Conference, The 550th anniversary of the birth of Nicolaus Copernicus, Torun, Oct. 2022. Springer.",
      "J. Attard, Vers un mod`ele unitaire de la scientificité, Paris, Editions Mat´eriologiques."
    ],
    resources: [
      {
        name: "Philpeople",
        url: "https://philpeople.org/profiles/jeremy-attard",
        icon: "bi-link-45deg"
      }
    ],
    externalLink: "",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "7",
    slug : "audrey-vermeulen",
    status: TeamMemberStatus.ACTIVE,  
    img: "/assets/img/team/AUDREY_VERMEULEN.png",
    alt: "Audrey Vermeulen",
    name: "Audrey Vermeulen",
    role: "Associate PhD",
    project: "Dynamic Ethics of Artificial Intelligence Based on Collective Intelligence Methods",
    projectDesc: "",
    bio: "Audrey Vermeulen is a second-year doctoral candidate in Philosophy at the Centre Gilles Gaston Granger (CGGG) of Aix-Marseille University. Her research project, “Dynamic Ethics of Artificial Intelligence Based on Collective Intelligence Methods“ is co-supervised by Prof. Pascal Taranto (CGGG) and Prof. Amandine Pascal (LEST), with funding from the Aix-Marseille Institute of Innovation and Creativity (InCIAM). Her interdisciplinary work combines field philosophy, Design Science, collective intelligence, and AI to propose “by design” ethical governance models for AI systems. She conducts field studies within an ethics committee and a startup developing an AI system. Audrey has presented her research at academic conferences, including the AIM Workshop in Nantes and the JUST-AI Colloquium in Brussels in 2024. She is co-organizing the HUMACO conference (2025) and a seminar on AI ethics (2026). With a background in design and interior architecture, she founded ARCANDY (2012), co-created LICA (2017), and the École des Vivants (2021). She facilitates collective intelligence, particularly for interdisciplinary research, and has given numerous lectures and courses on collective intelligence and AI ethics, including a TED talk in 2018 on “Being Human in the Age of Artificial Intelligence.”",
    book: [],
    resources: [
      {
        name: "CGGG",
        url: "https://www.cggg.fr/membres/vermeulen-audrey",
        icon: "bi-link-45deg"
      },
      {
        name: "Linkedin",
        url: "https://fr.linkedin.com/in/audrey-v",
        icon: "bi-linkedin"
      }
    ],
    externalLink: "",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "8",
    slug : "pascal-taranto",
    status: TeamMemberStatus.ACTIVE,  
    img: "/assets/img/team/pascal_taranto.png",
    alt: "Pascal Taranto",
    name: "Pascal Taranto",
    role: "Budget execution manager",
    project: "",
    projectDesc: "",
    bio: "",
    book: [],
    resources: [],
    externalLink: "https://www.cggg.fr/membres/taranto-pascal",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "9",
    slug:"julie-humeau",
    status: TeamMemberStatus.ACTIVE,  
    img: "/assets/img/team/Julie_Humeau.png",
    alt: "Julie Humeau",
    name: "Julie Humeau",
    role: "Administrator",
    project: "",
    projectDesc: "",
    bio: "",
    book: [],
    resources: [],
    externalLink: "https://www.cggg.fr/membres/humeau-julie",
    createdAt: new Date(),
    updatedAt: new Date(),
  }
];
