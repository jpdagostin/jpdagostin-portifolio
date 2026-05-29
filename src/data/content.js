export const translations = {
  en: {
    nav: { about: 'About', skills: 'Skills', experience: 'Experience', education: 'Education' },
    hero: {
      title: "João Pedro D'Agostin",
      subtitle: 'Back-End Developer | AI & Data Engineering | Python · GCP · AWS',
      location: 'Brazil',
      downloadCV: 'Download CV (PDF)',
    },
    about: {
      heading: 'About Me',
      paragraphs: [
        "I'm João D'Agostin, a Back-End Developer with experience in Applied AI and Data Engineering. I focus on building systems that process data and turn it into something useful, whether that's an API, a pipeline, or an intelligent feature.",
        "I have a degree in Software Engineering, a postgraduate degree in Data Science, and a technical background in IT. I started my career in data analysis and moved into back-end development, which gives me a practical view of how data flows through a system from end to end.",
        "A big part of my work has been AI applied to vehicle telematics. I've worked on projects that process telemetry data from fleet vehicles to analyze driver behavior, identifying patterns that point to safe or risky driving. It's a combination of data engineering, analysis, and applied AI that has a direct impact on fleet safety and operations.",
        { bullets: [
          'Development of scalable APIs and back-end systems',
          'Applied AI projects for driver behavior analysis using vehicle telemetry data',
          'Building and maintaining data pipelines (ETLs) supporting intelligent systems',
          'CI/CD practices and automated workflows for software delivery',
          'Process automation and system integrations',
          'Data modeling and governance',
          'Development and customization of modules on the Odoo.sh platform',
        ]},
        "I primarily use Python and SQL, with experience in cloud environments such as GCP and AWS. Advanced English.",
      ],
    },
    skills: {
      heading: 'Technical Skills',
      categories: [
        { title: 'Languages', items: ['Python', 'SQL', 'JavaScript', 'Java', 'C/C++', 'C#'] },
        { title: 'Cloud & Data', items: ['GCP', 'AWS', 'ETL Pipelines', 'PostgreSQL', 'Cassandra'] },
        { title: 'Dev & Tools', items: ['REST APIs', 'Odoo.sh', 'Airflow', 'Git', 'React Native', 'Arduino'] },
      ],
    },
    experience: {
      heading: 'Experience',
      jobs: [
        {
          role: 'Back-End Developer',
          company: 'Gobrax',
          period: 'Sep 2025 – Present',
          bullets: [
            'Promoted after strong performance as a Data Analyst, transitioning into back-end development',
            'Building scalable and robust back-end systems in Python',
            'Applying data engineering background to bring intelligence and value to applications',
            'Developing solutions that connect data pipelines, APIs, and business logic in an integrated way',
          ],
        },
        {
          role: 'Mid-Level Data Analyst',
          company: 'Gobrax',
          period: 'Feb 2025 – Sep 2025',
          bullets: [
            'Promoted for outstanding performance in data engineering and analysis projects',
            'Built and optimized ETL pipelines ensuring scalability, quality and real-time data delivery',
            'Developed data integrations and small data products connecting internal systems',
            'Worked on AI and automation initiatives, orchestrating data to support business decisions',
            'Part of the Odoo implementation team, contributing with Python development on Odoo.sh',
          ],
        },
        {
          role: 'Junior Data Analyst',
          company: 'Gobrax',
          period: 'Jul 2024 – Feb 2025',
          bullets: [
            'Joined the newly formed data team after demonstrated skills in data extraction, Python and SQL',
            'Built data pipelines and transformed operational data into strategic business insights',
            'Developed analytical dashboards for fleet performance monitoring (vehicle availability, battery faults, active schedules)',
            'Strengthened data infrastructure governance and automated analytical processes',
          ],
        },
        {
          role: 'Support Analyst N1',
          company: 'Gobrax',
          period: 'May 2023 – Jul 2024',
          bullets: [
            'Front-line support for a fleet management platform, analysing telemetry and operational truck data',
            'Main point of contact between clients and the technical team, proposing data-driven solutions',
            'With no dedicated data team yet, independently ran Python and SQL extractions and delivered custom analytical reports',
          ],
        },
        {
          role: 'IT Support',
          company: 'Brazilian Air Force',
          period: '2020 – 2023',
          bullets: [
            '3 years in the IT sector providing HelpDesk support and system maintenance',
            'Developed internal tools in Python and JavaScript',
          ],
        },
      ],
    },
    education: {
      heading: 'Education',
      list: [
        { degree: 'Postgraduate — Data Science', institution: 'UNICURITIBA', period: 'Jul 2024 – Jul 2025' },
        { degree: "Bachelor's — Software Engineering", institution: 'UniBrasil Centro Universitário', period: '2020 – 2023' },
        { degree: 'English — Advanced', institution: 'Cultura Inglesa', period: 'Dec 2023 – Jul 2026' },
        { degree: 'English', institution: 'Fisk', period: 'Feb 2016 – Dec 2019' },
        { degree: 'Technical Degree — Information Technology', institution: 'IFPR – Instituto Federal do Paraná', period: '2016 – 2019' },
      ],
    },
    footer: "© 2025 João Pedro D'Agostin. All rights reserved.",
  },

  pt: {
    nav: { about: 'Sobre', skills: 'Habilidades', experience: 'Experiência', education: 'Educação' },
    hero: {
      title: "João Pedro D'Agostin",
      subtitle: 'Desenvolvedor Back-End | IA & Engenharia de Dados | Python · GCP · AWS',
      location: 'Brasil',
      downloadCV: 'Baixar CV (PDF)',
    },
    about: {
      heading: 'Sobre Mim',
      paragraphs: [
        "Sou João D'Agostin, Desenvolvedor Back-End com experiência em IA Aplicada e Engenharia de Dados. Trabalho construindo sistemas que processam dados e transformam isso em algo útil, seja uma API, um pipeline ou uma funcionalidade inteligente.",
        "Tenho graduação em Engenharia de Software, pós-graduação em Data Science e formação técnica em TI. Comecei na área de dados e fui migrando para o desenvolvimento back-end, o que me dá uma visão prática de como os dados fluem por um sistema do começo ao fim.",
        "Boa parte do meu trabalho tem sido com IA aplicada à telemetria veicular. Trabalhei em projetos que processam dados de telemetria de frotas para analisar o comportamento dos motoristas, identificando padrões que indicam uma condução segura ou arriscada. É uma combinação de engenharia de dados, análise e IA aplicada com impacto direto na segurança e operação das frotas.",
        { bullets: [
          'Desenvolvimento de APIs e sistemas back-end escaláveis',
          'Projetos de IA aplicada à análise de comportamento de condutores via telemetria veicular',
          'Construção e manutenção de pipelines de dados (ETLs) como suporte a sistemas inteligentes',
          'Práticas de CI/CD e fluxos automatizados de entrega de software',
          'Automação de processos e integrações entre sistemas',
          'Modelagem e governança de dados',
          'Desenvolvimento e customização de módulos na plataforma Odoo.sh',
        ]},
        "Uso principalmente Python e SQL, com familiaridade em ambientes de nuvem como GCP e AWS. Inglês avançado.",
      ],
    },
    skills: {
      heading: 'Habilidades Técnicas',
      categories: [
        { title: 'Linguagens', items: ['Python', 'SQL', 'JavaScript', 'Java', 'C/C++', 'C#'] },
        { title: 'Cloud & Dados', items: ['GCP', 'AWS', 'Pipelines ETL', 'PostgreSQL', 'Cassandra'] },
        { title: 'Dev & Ferramentas', items: ['REST APIs', 'Odoo.sh', 'Airflow', 'Git', 'React Native', 'Arduino'] },
      ],
    },
    experience: {
      heading: 'Experiência',
      jobs: [
        {
          role: 'Desenvolvedor Back-End',
          company: 'Gobrax',
          period: 'Set 2025 – Presente',
          bullets: [
            'Promovido após atuação destacada como Analista de Dados Pleno, transitando para o desenvolvimento back-end',
            'Desenvolvimento de sistemas back-end escaláveis e robustos em Python',
            'Aplicação do background em dados para trazer mais inteligência e valor às aplicações',
            'Criação de soluções que integram pipelines de dados, APIs e lógica de negócio de forma coesa',
          ],
        },
        {
          role: 'Analista de Dados Pleno',
          company: 'Gobrax',
          period: 'Fev 2025 – Set 2025',
          bullets: [
            'Promovido por atuação destacada em projetos de engenharia e análise de dados',
            'Implementação e otimização de pipelines ETL garantindo escalabilidade, qualidade e eficiência na entrega de dados',
            'Desenvolvimento de integrações e pequenos produtos de dados conectando sistemas internos',
            'Atuação em iniciativas de IA e automação, orquestrando dados para suportar decisões de negócio',
            'Integrante da equipe de implantação do Odoo, contribuindo com desenvolvimento Python na plataforma Odoo.sh',
          ],
        },
        {
          role: 'Analista de Dados Jr',
          company: 'Gobrax',
          period: 'Jul 2024 – Fev 2025',
          bullets: [
            'Selecionado para integrar o novo time de dados graças à experiência em Python, SQL e extração de dados',
            'Construção de pipelines e transformação de dados operacionais em insights estratégicos para o negócio',
            'Desenvolvimento de dashboards analíticos para monitoramento de frotas (disponibilidade de veículos, falhas de bateria, agendamentos ativos)',
            'Fortalecimento da governança de dados e automação de processos analíticos',
          ],
        },
        {
          role: 'Analista de Suporte N1',
          company: 'Gobrax',
          period: 'Mai 2023 – Jul 2024',
          bullets: [
            'Atendimento e resolução de problemas na plataforma de gestão de frotas, analisando dados de telemetria e desempenho',
            'Principal elo entre clientes e equipe técnica, propondo soluções baseadas na interpretação de dados',
            'Sem um setor de dados estruturado, realizou extrações e análises com Python e SQL, entregando relatórios sob demanda',
          ],
        },
        {
          role: 'Suporte de TI',
          company: 'Força Aérea Brasileira',
          period: '2020 – 2023',
          bullets: [
            '3 anos no setor de TI com suporte HelpDesk e manutenção de sistemas',
            'Desenvolvimento de ferramentas internas em Python e JavaScript',
          ],
        },
      ],
    },
    education: {
      heading: 'Educação',
      list: [
        { degree: 'Pós-Graduação — Data Science', institution: 'UNICURITIBA', period: 'Jul 2024 – Jul 2025' },
        { degree: 'Graduação — Engenharia de Software', institution: 'UniBrasil Centro Universitário', period: '2020 – 2023' },
        { degree: 'Inglês — Avançado', institution: 'Cultura Inglesa', period: 'Dez 2023 – Jul 2026' },
        { degree: 'Inglês', institution: 'Fisk', period: 'Fev 2016 – Dez 2019' },
        { degree: 'Ensino Médio Técnico — Informática', institution: 'IFPR – Instituto Federal do Paraná', period: '2016 – 2019' },
      ],
    },
    footer: "© 2026 João Pedro D'Agostin. Todos os direitos reservados.",
  },
}
