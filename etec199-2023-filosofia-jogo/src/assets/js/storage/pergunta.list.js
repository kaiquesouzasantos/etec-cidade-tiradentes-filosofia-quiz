import {
    Pergunta
} from "../model/pergunta.model.js"

let PERGUNTAS = [
    // CONTEXTO HISTORICO

    new Pergunta(
        "Qual era a era em que Sócrates viveu?",
        "Idade Média",
        "Era Moderna",
        "Antiguidade Clássica",
        "Renascimento",
        "c"
    ),
    new Pergunta(
        "Sócrates nasceu em qual cidade-Estado grega?",
        "Esparta",
        "Atenas",
        "Corinto",
        "Tebas",
        "b"
    ),
    new Pergunta(
        "Quem foi o mentor filosófico de Sócrates?",
        "Platão",
        "Aristóteles",
        "Tales de Mileto",
        "Pitágoras",
        "d"
    ),
    new Pergunta(
        "O período histórico em que Sócrates foi condenado à morte foi conhecido como:",
        "Era Helenística",
        "Período Clássico",
        "Idade Média",
        "Atenas Dourada",
        "d"
    ),
    new Pergunta(
        "Sócrates tinha profissão de:",
        "Político",
        "Filósofo",
        "Soldado",
        "Comerciante",
        "d"
    ),
    new Pergunta(
        "A principal atividade filosófica de Sócrates era:",
        "A escrita de tratados filosóficos",
        "O ensino em escolas filosóficas",
        "O diálogo e a reflexão com os cidadãos nas ruas",
        "A meditação solitária",
        "c"
    ),
    new Pergunta(
        "A 'maiêutica' era o método socrático de:",
        "Argumentação retórica",
        "Autoconhecimento por meio de questionamentos",
        "Meditação e contemplação",
        "Escrita de diálogos filosóficos",
        "b"
    ),
    new Pergunta(
        "Sócrates acreditava que a busca pelo conhecimento deveria levar ao:",
        "Hedonismo",
        "Conhecimento dos mitos gregos",
        "Conhecimento do mundo natural",
        "Aperfeiçoamento moral e ético",
        "d"
    ),
    new Pergunta(
        "Qual foi o crime pelo qual Sócrates foi condenado à morte?",
        "Corrupção",
        "Impiedade e corrupção da juventude",
        "Homicídio",
        "Traição à cidade-Estado",
        "b"
    ),
    new Pergunta(
        "Sócrates foi condenado a beber cicuta, uma forma de:",
        "Veneno",
        "Vinho envenenado",
        "Substância alucinógena",
        "Óleo essencial",
        "a"
    ),
    new Pergunta(
        "Quem foi o discípulo mais conhecido de Sócrates, que se tornou um importante filósofo posteriormente?",
        "Platão",
        "Aristóteles",
        "Heráclito",
        "Pitágoras",
        "a"
    ),
    new Pergunta(
        "Qual era o sistema político predominante em Atenas durante o tempo de Sócrates?",
        "Monarquia absolutista",
        "Ditadura militar",
        "Oligarquia",
        "Democracia direta",
        "d"
    ),
    new Pergunta(
        "Como Sócrates foi influenciado pelas ações e eventos da Guerra do Peloponeso?",
        "Tornou-se um general na guerra",
        "Foi acusado de traição durante a guerra",
        "Se opôs à guerra e aos conflitos armados",
        "Tornou-se um mercenário a serviço de Esparta",
        "c"
    ),
    new Pergunta(
        "Qual foi a principal preocupação filosófica de Sócrates?",
        "Metafísica e ontologia",
        "Ética e virtude",
        "Política e organização social",
        "Matemática e ciências naturais",
        "b"
    ),
    new Pergunta(
        "Qual foi a principal acusação feita contra Sócrates em seu julgamento?",
        "Conluio com inimigos de Atenas",
        "Negligência na defesa de Atenas contra invasões",
        "Corrupção e suborno",
        "Desrespeito aos deuses da cidade e corrupção da juventude",
        "d"
    ),
    new Pergunta(
        "Qual foi o resultado final do julgamento de Sócrates?",
        "Exílio voluntário",
        "Prisão perpétua",
        "Pena de morte",
        "Absolvição",
        "c"
    ),
    new Pergunta(
        "Sócrates considerava-se sábio porque:",
        "Tinha conhecimento sobre todas as ciências",
        "Sabia que não sabia nada",
        "Era considerado o homem mais inteligente de Atenas",
        "Tinha acesso a informações divinas",
        "b"
    ),
    new Pergunta(
        "Qual filósofo grego anterior a Sócrates influenciou fortemente o pensamento socrático?",
        "Heráclito",
        "Tales de Mileto",
        "Parmênides",
        "Anaxágoras",
        "d"
    ),
    new Pergunta(
        "Em que século Sócrates viveu?",
        "Século V a.C.",
        "Século I a.C.",
        "Século V d.C.",
        "Século I d.C.",
        "a"
    ),
    new Pergunta(
        "O pensamento socrático influenciou significativamente o desenvolvimento posterior da filosofia através de seu discípulo mais famoso, que foi:",
        "Aristóteles",
        "Platão",
        "Heráclito",
        "Parmênides",
        "b"
    ),

    // BIOGRAFIA

    new Pergunta(
        "Qual é o nome completo de Sócrates?",
        "Sócrates de Atenas",
        "Sócrates de Mileto",
        "Sócrates de Esparta",
        "Sócrates de Corinto",
        "a"
    ),
    new Pergunta(
        "Qual foi a data aproximada do nascimento de Sócrates?",
        "480 a.C.",
        "399 a.C.",
        "350 a.C.",
        "300 a.C.",
        "a"
    ),
    new Pergunta(
        "Qual foi a profissão de Sócrates antes de se dedicar à filosofia?",
        "Soldado",
        "Político",
        "Comerciante",
        "Médico",
        "c"
    ),
    new Pergunta(
        "Sócrates foi casado e teve filhos?",
        "Sim, casado e com dois filhos",
        "Sim, casado e com três filhos",
        "Não, era solteiro e não teve filhos",
        "Não, era viúvo e não teve filhos",
        "c"
    ),
    new Pergunta(
        "Como Sócrates costumava se referir ao Oráculo de Delfos, que o chamou de 'o homem mais sábio'?",
        "Como um elogio merecido",
        "Como uma ironia divina",
        "Como um equívoco da sacerdotisa",
        "Como uma profecia a ser cumprida",
        "b"
    ),
    new Pergunta(
        "Qual era o método filosófico utilizado por Sócrates?",
        "Lógica formal",
        "Dialética",
        "Empirismo",
        "Materialismo",
        "b"
    ),
    new Pergunta(
        "Por que Sócrates ficou conhecido como 'o irritante'?",
        "Por sua personalidade excêntrica",
        "Por sua habilidade retórica",
        "Por fazer perguntas incômodas",
        "Por sua resistência à autoridade",
        "c"
    ),
    new Pergunta(
        "Quais eram os temas principais das conversas de Sócrates com os cidadãos de Atenas?",
        "Política e leis",
        "Artes e poesia",
        "Comércio e economia",
        "Ética e virtude",
        "d"
    ),
    new Pergunta(
        "Como Sócrates se sentiu em relação à acusação de corromper a juventude de Atenas?",
        "Surpreso e negando as acusações",
        "Despreocupado e indiferente",
        "Arrependido e culpado",
        "Justificando-se e defendendo-se",
        "a"
    ),
    new Pergunta(
        "Qual foi o resultado do julgamento de Sócrates?",
        "Absolvição",
        "Exílio voluntário",
        "Prisão perpétua",
        "Pena de morte",
        "d"
    ),
    new Pergunta(
        "Qual foi o método de execução utilizado para condenar Sócrates à morte?",
        "Enforcamento",
        "Decapitação",
        "Apedrejamento",
        "Ingestão de cicuta",
        "d"
    ),
    new Pergunta(
        "Quem foi o discípulo mais conhecido de Sócrates?",
        "Aristóteles",
        "Platão",
        "Heráclito",
        "Parmênides",
        "b"
    ),
    new Pergunta(
        "Como Sócrates reagiu à sua sentença de morte?",
        "Aceitou serenamente seu destino",
        "Fugiu de Atenas para evitar a execução",
        "Pediu clemência ao júri",
        "Planejou um plano de fuga ousado",
        "a"
    ),
    new Pergunta(
        "Qual foi o principal legado de Sócrates para a filosofia?",
        "Seus escritos filosóficos",
        "Sua academia filosófica",
        "Seu método de diálogo e questionamento",
        "Suas descobertas científicas",
        "c"
    ),
    new Pergunta(
        "Quais foram as principais crenças religiosas de Sócrates?",
        "Politeísmo grego",
        "Ateísmo",
        "Monoteísmo judaico",
        "Dualismo zoroastrista",
        "a"
    ),
    new Pergunta(
        "Qual foi a idade aproximada de Sócrates quando ele morreu?",
        "30 anos",
        "50 anos",
        "70 anos",
        "90 anos",
        "b"
    ),
    new Pergunta(
        "Sócrates escreveu seus pensamentos e filosofia em livros?",
        "Sim, ele escreveu vários livros",
        "Não, ele não escreveu nenhum livro",
        "Sim, ele escreveu um único livro",
        "Não, ele ditava seus pensamentos a Platão",
        "b"
    ),
    new Pergunta(
        "Qual foi a principal preocupação filosófica de Sócrates?",
        "Metafísica e ontologia",
        "Ética e virtude",
        "Política e organização social",
        "Matemática e ciências naturais",
        "b"
    ),
    new Pergunta(
        "Quais foram as principais influências filosóficas que moldaram o pensamento de Sócrates?",
        "Filosofia persa",
        "Filosofia chinesa",
        "Filosofia egípcia",
        "Filosofia pré-socrática",
        "d"
    ),
    new Pergunta(
        "Qual foi a principal crítica feita a Sócrates por seus contemporâneos?",
        "Sua falta de conhecimento em ciências naturais",
        "Sua aparência física desagradável",
        "Seu método de diálogo e questionamento",
        "Sua recusa em aceitar a existência dos deuses",
        "c"
    ),

    // CONCEITO ETICO

    new Pergunta(
        "Qual era a principal preocupação ética de Sócrates?",
        "A busca pelo prazer máximo",
        "A virtude e o conhecimento",
        "A obediência às autoridades",
        "A riqueza material",
        "b"
    ),
    new Pergunta(
        "Como Sócrates abordava a busca pelo conhecimento?",
        "Através da fé cega nos deuses",
        "Por meio da introspecção e do autoconhecimento",
        "Ignorando completamente a filosofia",
        "Dependendo unicamente da experiência sensorial",
        "b"
    ),
    new Pergunta(
        "Qual era a famosa frase de Sócrates relacionada à sabedoria?",
        "Conhece-te a ti mesmo",
        "Seja forte e corajoso",
        "O dinheiro é a chave para a felicidade",
        "Nada em excesso",
        "a"
    ),
    new Pergunta(
        "Como Sócrates via a relação entre virtude e conhecimento?",
        "A virtude depende exclusivamente da fé religiosa",
        "O conhecimento é inútil na busca pela virtude",
        "Virtude e conhecimento são inseparáveis",
        "A virtude é mais importante do que o conhecimento",
        "c"
    ),
    new Pergunta(
        "Qual era o método de ensino característico de Sócrates?",
        "Lectures longas e monólogos",
        "Escrita de tratados filosóficos",
        "Diálogo e questionamento com os alunos",
        "Testes e exames rigorosos",
        "c"
    ),
    new Pergunta(
        "Como Sócrates acreditava que as pessoas alcançariam a virtude?",
        "Através de rituais religiosos",
        "Pela submissão às autoridades",
        "Por meio do autoconhecimento e questionamento constante",
        "Mediante a posse de bens materiais",
        "c"
    ),
    new Pergunta(
        "O que Sócrates quis dizer com 'Só sei que nada sei'?",
        "Ele era um filósofo cético que duvidava de tudo",
        "Ele não tinha confiança em sua própria inteligência",
        "Ele reconhecia os limites do conhecimento humano",
        "Ele estava sendo modesto sobre sua sabedoria",
        "c"
    ),
    new Pergunta(
        "Qual foi a principal crítica feita a Sócrates por seus contemporâneos?",
        "Sua falta de conhecimento em ciências naturais",
        "Sua aparência física desagradável",
        "Seu método de diálogo e questionamento",
        "Sua recusa em aceitar a existência dos deuses",
        "c"
    ),
    new Pergunta(
        "Como a abordagem socrática influenciou o pensamento filosófico subsequente?",
        "Teve pouco impacto e foi esquecida rapidamente",
        "Inspirou o desenvolvimento da filosofia cínica",
        "Criou uma ênfase na fé religiosa",
        "Estabeleceu a importância do questionamento e da busca pela verdade",
        "d"
    ),
    new Pergunta(
        "Qual foi o destino de Sócrates devido a suas crenças e ensinamentos?",
        "Tornou-se o governante de Atenas",
        "Foi condenado à morte por envenenamento",
        "Viveu uma vida longa e próspera",
        "Tornou-se um pregador itinerante",
        "b"
    ),
    new Pergunta(
        "Qual foi a contribuição de Sócrates para a ética?",
        "Desenvolveu um sistema moral rígido baseado em regras divinas",
        "Enfatizou a importância da virtude e do autoconhecimento",
        "Negou a existência de qualquer padrão ético",
        "Defendeu que a ética não era relevante para a filosofia",
        "b"
    ),
    new Pergunta(
        "O que é a ironia socrática?",
        "Uma técnica de persuasão agressiva",
        "A negação completa da importância da razão",
        "Uma forma de diálogo em que o interlocutor finge ignorância para estimular a reflexão",
        "Um método de ensino exclusivamente por meio de palestras",
        "c"
    ),
    new Pergunta(
        "Qual foi o impacto da morte de Sócrates sobre Platão?",
        "Platão abandonou a filosofia após a morte de Sócrates",
        "Platão ficou traumatizado e não escreveu mais",
        "Platão aprofundou suas próprias ideias filosóficas, influenciadas por Sócrates",
        "Platão tornou-se um crítico ferrenho das crenças de Sócrates",
        "c"
    ),
    new Pergunta(
        "O que é a maiêutica, método frequentemente associado a Sócrates?",
        "Uma técnica de meditação profunda",
        "Um método de cura através da medicação",
        "Um processo de parto intelectual, ajudando os outros a dar à luz suas próprias ideias",
        "Um método de adivinhação utilizado em rituais religiosos",
        "c"
    ),
    new Pergunta(
        "Como Sócrates se relacionava com os sofistas?",
        "Ele era um seguidor leal dos sofistas",
        "Ele era um crítico feroz dos sofistas, considerando-os enganadores",
        "Ele compartilhava suas crenças e métodos em sua totalidade",
        "Ele ocasionalmente concordava com algumas ideias dos sofistas",
        "b"
    ),
    new Pergunta(
        "Qual foi o papel da filosofia de Sócrates na educação dos jovens?",
        "Ele acreditava que a filosofia não tinha relevância na educação",
        "Ele ensinava apenas conteúdo acadêmico convencional",
        "Ele enfatizava a importância do autoconhecimento e do questionamento para a educação",
        "Ele ensinava apenas por meio de métodos autoritários",
        "c"
    ),
    new Pergunta(
        "Como Sócrates enfrentou sua condenação à morte?",
        "Ele fugiu de Atenas para evitar a execução",
        "Ele se submeteu às autoridades e aceitou a execução por envenenamento",
        "Ele incitou seus seguidores a rebelarem-se contra a sentença",
        "Ele renunciou publicamente às suas crenças filosóficas",
        "b"
    ),
    new Pergunta(
        "Qual é o conceito de 'ironia' na filosofia socrática?",
        "Uma crença firme e inabalável",
        "Uma abordagem sarcástica e cínica",
        "Um método de ensino que busca expor contradições nas ideias",
        "Uma demonstração de arrogância intelectual",
        "c"
    ),
    new Pergunta(
        "Quais são os três principais elementos da filosofia socrática?",
        "Lógica, retórica e política",
        "Religião, moralidade e política",
        "Conhecimento, virtude e diálogo",
        "Prazer, riqueza e fama",
        "c"
    ),
    new Pergunta(
        "O que é o 'Maiêutica' no contexto da filosofia de Sócrates?",
        "Um tipo de dança ritual praticada pelos seguidores de Sócrates",
        "Uma técnica de meditação profunda",
        "Um método de argumentação sofisticado",
        "Uma técnica de questionamento para revelar o conhecimento interno",
        "d"
    ),

    // PENSAR NA REALIDADE

    new Pergunta(
        "Como Sócrates acreditava que o pensamento crítico estava relacionado à busca pela verdade?",
        "Ele acreditava que o pensamento crítico era inútil na busca pela verdade",
        "Ele via o pensamento crítico como uma forma de evasão da realidade",
        "Ele acreditava que o pensamento crítico era essencial para a busca pela verdade",
        "Ele considerava que o pensamento crítico era prejudicial à mente",
        "c"
    ),
    new Pergunta(
        "Segundo Sócrates, qual é o propósito do pensamento profundo e reflexivo?",
        "Evitar confrontar as próprias crenças",
        "Estimular a imaginação e a fantasia",
        "Questionar as autoridades",
        "Alcançar um entendimento mais claro da realidade e da verdade",
        "d"
    ),
    new Pergunta(
        "Como Sócrates via o papel dos sentidos na compreensão da realidade?",
        "Ele acreditava que os sentidos eram a única fonte confiável de conhecimento",
        "Ele via os sentidos como a única fonte de ilusão",
        "Ele acreditava que os sentidos eram irrelevantes para a compreensão da realidade",
        "Ele via os sentidos como falíveis e enganosos, requerendo questionamento",
        "d"
    ),
    new Pergunta(
        "Qual é a importância do questionamento na abordagem socrática à realidade?",
        "O questionamento é evitado para manter a harmonia social",
        "O questionamento é usado para confundir os outros",
        "O questionamento é essencial para analisar e compreender a realidade",
        "O questionamento é prejudicial para a mente humana",
        "c"
    ),
    new Pergunta(
        "Por que Sócrates considerava o pensamento e a reflexão como uma forma de autoconhecimento?",
        "Ele acreditava que o pensamento afastava as pessoas do autoconhecimento",
        "Ele acreditava que o pensamento não tinha relação com o autoconhecimento",
        "Ele acreditava que o pensamento levava ao autoengano",
        "Ele acreditava que o pensamento permitia que as pessoas explorassem suas próprias crenças e limitações",
        "d"
    ),
    new Pergunta(
        "Qual é a diferença entre o pensamento filosófico de Sócrates e o pensamento mítico tradicional?",
        "O pensamento filosófico rejeita qualquer forma de questionamento",
        "O pensamento filosófico se baseia exclusivamente em crenças religiosas",
        "O pensamento filosófico busca entender a realidade através do questionamento e da razão",
        "O pensamento filosófico promove a aceitação inquestionável das tradições",
        "c"
    ),
    new Pergunta(
        "Por que Sócrates afirmava que o não saber era preferível ao pensamento simplista?",
        "Ele acreditava que o não saber não tinha relação com o pensamento",
        "Ele acreditava que o não saber era uma forma de humildade",
        "Ele considerava o não saber uma forma de preguiça mental",
        "Ele acreditava que o não saber estimulava o questionamento e o pensamento mais profundo",
        "d"
    ),
    new Pergunta(
        "Como Sócrates via a relação entre o pensamento e a virtude?",
        "Ele acreditava que o pensamento era prejudicial para a virtude",
        "Ele acreditava que a virtude podia ser alcançada apenas através de rituais religiosos",
        "Ele acreditava que o pensamento crítico era a base da virtude",
        "Ele via a virtude como algo inalcançável para a mente humana",
        "c"
    ),
    new Pergunta(
        "Qual é o termo grego usado por Sócrates para descrever o exame contínuo e o questionamento da vida?",
        "Dogmatismo",
        "Elenchus",
        "Eufemismo",
        "Logos",
        "b"
    ),
    new Pergunta(
        "Como Sócrates acreditava que o pensamento poderia levar à transformação pessoal?",
        "Ele acreditava que o pensamento só levava à alienação",
        "Ele acreditava que o pensamento não tinha impacto sobre a transformação pessoal",
        "Ele acreditava que o pensamento estimulava o autoengano",
        "Ele acreditava que o pensamento levava à consciência de nossas próprias crenças e à busca por um melhor entendimento",
        "d"
    ),
    new Pergunta(
        "Segundo Sócrates, como o pensamento crítico pode ajudar a superar as ilusões?",
        "O pensamento crítico não tem relação com a superação de ilusões",
        "O pensamento crítico pode reforçar as ilusões",
        "O pensamento crítico pode expor as ilusões e levar à compreensão da realidade",
        "O pensamento crítico apenas cria mais ilusões",
        "c"
    ),
    new Pergunta(
        "Como o pensamento reflexivo de Sócrates difere da aceitação passiva das crenças?",
        "O pensamento reflexivo e a aceitação passiva têm o mesmo objetivo",
        "O pensamento reflexivo é uma forma de evasão das crenças",
        "A aceitação passiva não envolve questionamento ou análise",
        "A aceitação passiva é uma forma mais profunda de pensamento",
        "c"
    ),
    new Pergunta(
        "Por que Sócrates enfatizava a importância do autoexame em relação ao pensamento sobre a realidade?",
        "Ele acreditava que o autoexame não tinha relação com o pensamento",
        "Ele acreditava que o autoexame levava ao autoengano",
        "Ele considerava o autoexame uma forma de narcisismo",
        "Ele acreditava que o autoexame ajudava a reconhecer nossas próprias limitações e crenças",
        "d"
    ),
    new Pergunta(
        "Como o pensamento socrático difere da mera opinião?",
        "O pensamento socrático não envolve questionamento",
        "O pensamento socrático se baseia exclusivamente em intuição",
        "O pensamento socrático busca entender a realidade por meio do questionamento e da razão",
        "O pensamento socrático é apenas uma forma de opinião",
        "c"
    ),
    new Pergunta(
        "Como o método de problematização de Sócrates pode ajudar na compreensão da realidade?",
        "Ele não tem relação com a compreensão da realidade",
        "Ele ajuda a criar ilusões",
        "Ele estimula a reflexão e a análise crítica, levando a uma compreensão mais profunda da realidade",
        "Ele promove a aceitação cega das crenças tradicionais",
        "c"
    ),
    new Pergunta(
        "Qual é a relação entre a curiosidade intelectual e o pensamento socrático?",
        "A curiosidade é desencorajada no pensamento socrático",
        "A curiosidade não tem relação com o pensamento socrático",
        "A curiosidade é essencial para estimular o questionamento e o pensamento reflexivo",
        "A curiosidade não tem importância no pensamento socrático",
        "c"
    ),
    new Pergunta(
        "Como Sócrates acreditava que o pensamento sobre a realidade poderia levar à sabedoria?",
        "Ele acreditava que o pensamento não tinha relação com a sabedoria",
        "Ele acreditava que a sabedoria podia ser obtida apenas através dos rituais religiosos",
        "Ele acreditava que o pensamento crítico era um obstáculo à sabedoria",
        "Ele acreditava que o pensamento crítico levaria à consciência de nossas próprias crenças e limitações, promovendo uma forma de sabedoria",
        "d"
    ),
    new Pergunta(
        "Qual é a importância da autocrítica no pensamento socrático?",
        "A autocrítica é vista como desnecessária no pensamento socrático",
        "A autocrítica é usada para atacar a autoestima",
        "A autocrítica é essencial para reconhecer e superar nossas próprias limitações e erros",
        "A autocrítica não tem relação com o pensamento socrático",
        "c"
    ),
    new Pergunta(
        "Como o pensamento profundo e reflexivo pode influenciar a tomada de decisões?",
        "O pensamento profundo leva a decisões impulsivas",
        "O pensamento profundo não tem influência nas decisões",
        "O pensamento profundo e reflexivo pode levar a decisões mais informadas e fundamentadas",
        "O pensamento profundo não é relevante para a tomada de decisões",
        "c"
    ),
    new Pergunta(
        "Qual é a relação entre a busca pela verdade e o pensamento na realidade segundo Sócrates?",
        "A busca pela verdade não tem relação com o pensamento socrático",
        "O pensamento na realidade é uma forma de evitar a busca pela verdade",
        "O pensamento na realidade envolve questionamento constante e reflexão para alcançar a verdade",
        "A busca pela verdade é alcançada apenas através de revelações divinas",
        "c"
    ),

    // PROBLEMATIZACAO

    new Pergunta(
        "O que Sócrates entende por problematização?",
        "A resolução de problemas matemáticos complexos",
        "A prática de questionar a natureza dos deuses",
        "A investigação e o questionamento constante para alcançar a verdade",
        "A aceitação passiva das crenças tradicionais",
        "c"
    ),
    new Pergunta(
        "Qual é o objetivo da problematização socrática?",
        "Defender a tradição e os valores estabelecidos",
        "Desafiar qualquer forma de conhecimento estabelecido",
        "Buscar a verdade e o conhecimento através do questionamento",
        "Promover o relativismo cultural",
        "c"
    ),
    new Pergunta(
        "Como Sócrates acreditava que a problematização poderia levar à sabedoria?",
        "Questionando apenas questões superficiais",
        "Através do estudo aprofundado de textos sagrados",
        "Questionando as crenças e investigando-as até alcançar um entendimento mais profundo",
        "Dependendo exclusivamente da intuição",
        "c"
    ),
    new Pergunta(
        "Qual é a relação entre a ironia socrática e a problematização?",
        "A ironia socrática é um método de evitar o questionamento",
        "A ironia socrática é um método para impor crenças aos outros",
        "A ironia socrática é um método de diálogo que estimula a reflexão e a problematização",
        "A ironia socrática é um método de imitar outros filósofos",
        "c"
    ),
    new Pergunta(
        "Qual é o papel do conhecimento prévio na problematização socrática?",
        "Deve ser aceito inquestionavelmente",
        "Deve ser rejeitado para buscar novas crenças",
        "Deve ser criticamente examinado e questionado",
        "Deve ser transmitido sem questionamento",
        "c"
    ),
    new Pergunta(
        "Por que a problematização socrática muitas vezes envolvia fazer perguntas a outras pessoas?",
        "Para demonstrar superioridade intelectual",
        "Para constranger e envergonhar os outros",
        "Para criar uma atmosfera de competição",
        "Para incentivar a reflexão e a investigação conjunta",
        "d"
    ),
    new Pergunta(
        "Como Sócrates usava a problematização para explorar questões morais?",
        "Ele enfatizava a obediência cega às tradições",
        "Ele questionava a validade das leis e normas sociais",
        "Ele evitava completamente a discussão de questões morais",
        "Ele encorajava as pessoas a aceitar os valores morais sem questionamento",
        "b"
    ),
    new Pergunta(
        "Qual é a diferença entre um diálogo socrático e um debate tradicional?",
        "Um diálogo socrático envolve apenas uma pessoa falando",
        "Um diálogo socrático não envolve questionamento ou investigação",
        "Um diálogo socrático busca a verdade por meio do questionamento conjunto",
        "Um diálogo socrático é uma forma de persuasão agressiva",
        "c"
    ),
    new Pergunta(
        "Qual é a importância do método maiêutico na problematização socrática?",
        "É um método de meditação profunda",
        "É um método para expor contradições nos argumentos dos outros",
        "É um método para doutrinação",
        "É um método de questionamento que ajuda a pessoa a dar à luz suas próprias ideias",
        "d"
    ),
    new Pergunta(
        "Como Sócrates via a relação entre o conhecimento e a virtude na problematização?",
        "Ele acreditava que a virtude estava além do alcance humano",
        "Ele acreditava que o conhecimento era desnecessário para a virtude",
        "Ele acreditava que o conhecimento era essencial para a virtude",
        "Ele acreditava que a virtude era alcançada através da adoração aos deuses",
        "c"
    ),
    new Pergunta(
        "Quais são os principais aspectos do método maiêutico de Sócrates?",
        "É um método de persuasão baseado em retórica",
        "É um método de introspecção profunda",
        "É um método de questionamento que busca extrair conhecimento interno",
        "É um método de meditação para atingir a iluminação",
        "c"
    ),
    new Pergunta(
        "Qual é a relação entre a humildade e a problematização socrática?",
        "A humildade é vista como um sinal de fraqueza na abordagem socrática",
        "A humildade não tem relação com a problematização",
        "A humildade é essencial para admitir a própria ignorância e buscar conhecimento",
        "A humildade é uma característica dos ignorantes",
        "c"
    ),
    new Pergunta(
        "Qual é o termo grego usado para descrever o questionamento constante e incisivo de Sócrates?",
        "Dogmatismo",
        "Eufemismo",
        "Sofisma",
        "Elenchus",
        "d"
    ),
    new Pergunta(
        "Por que Sócrates afirmava que sua sabedoria estava limitada ao fato de que ele sabia que nada sabia?",
        "Ele estava sendo modesto sobre sua ignorância",
        "Ele queria mostrar que os outros também não sabiam nada",
        "Ele estava afirmando que não tinha conhecimento algum",
        "Ele estava fazendo uma piada para entreter seus seguidores",
        "a"
    ),
    new Pergunta(
        "Qual é a importância do diálogo e do questionamento na filosofia socrática?",
        "Eles são usados para impor crenças",
        "Eles servem apenas para entreter os seguidores",
        "Eles são ferramentas para alcançar a verdade e o autoconhecimento",
        "Eles são métodos para evitar o pensamento crítico",
        "c"
    ),
    new Pergunta(
        "O que Sócrates acreditava ser o papel do filósofo em relação à sociedade?",
        "O filósofo deve impor suas crenças aos outros",
        "O filósofo deve permanecer isolado da sociedade",
        "O filósofo deve influenciar a política e a liderança",
        "O filósofo deve estimular a reflexão e o questionamento na sociedade",
        "d"
    ),
    new Pergunta(
        "Como a problematização socrática difere da mera crítica?",
        "A problematização socrática não envolve questionamento crítico",
        "A problematização socrática é um tipo de ironia",
        "A problematização socrática busca estimular a reflexão e a busca por respostas",
        "A problematização socrática não é diferente da crítica",
        "c"
    ),
    new Pergunta(
        "Por que Sócrates costumava dizer que era um 'parasita' de Atenas?",
        "Ele se referia a si mesmo como um parasita porque vivia às custas dos outros",
        "Ele se considerava uma ameaça à cidade",
        "Ele estava criticando os valores da sociedade ateniense",
        "Ele estava se gabando de sua riqueza",
        "a"
    ),
    new Pergunta(
        "O que Sócrates acreditava que aconteceria quando alguém reconhecesse sua própria ignorância?",
        "A pessoa se tornaria arrogante e fechada para o aprendizado",
        "A pessoa se afastaria da filosofia",
        "A pessoa teria uma crise existencial",
        "A pessoa estaria aberta para o questionamento e o aprendizado",
        "d"
    ),
    new Pergunta(
        "Qual é a relação entre a educação e a problematização na filosofia socrática?",
        "Educação não tem relação com a problematização",
        "A educação envolve apenas memorização de fatos",
        "A educação envolve o questionamento constante e a busca pela verdade",
        "A educação é uma forma de doutrinação",
        "c"
    )
]

export default PERGUNTAS
    .map(value => ({value, sort: Math.random()}))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)