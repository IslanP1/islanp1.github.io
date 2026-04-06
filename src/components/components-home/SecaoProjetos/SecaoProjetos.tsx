import Conteudo from "../../props/Conteudo/Conteudo";
import Subtitulo from "../../props/Subtitulo/Subtitulo";

function SecaoProjetos() {
  const experiencias = [
    {
      periodo: "2025 - Presente",
      cargo: "Engenheiro de Software Backend & DevOps",
      empresa: "CMAX (Ecossistema Inteligente)",
      tecnologia: "NestJS, Apache, Nginx, Servidores Próprios",
      descricao:
        "Arquitetura e desenvolvimento backend de um ecossistema integrando dashboard administrativo, painel de saúde e dois aplicativos mobile. Projetou módulos de monitoramento em tempo real de frotas, prontuário médico eletrônico e filas de atendimento. Atuação direta em DevOps, garantindo alta disponibilidade, segurança e escalabilidade da infraestrutura em servidores web próprios.",
    },
    {
      periodo: "2025 - Presente",
      cargo: "Desenvolvedor Backend",
      empresa: "Central Lab / AverisQ",
      tecnologia: "PHP, Adianti, RabbitMQ, IoT",
      descricao:
        "Desenvolvimento de plataforma para telemetria em tempo real de freezers via sensores. Implementação de mensageria com RabbitMQ para lidar com alto volume de dados, criação de dashboards, sistema de alertas automatizados e relatórios em PDF, eliminando o acompanhamento manual e mitigando riscos de perda de material.",
    },
    {
      periodo: "2025",
      cargo: "Desenvolvedor Full Stack",
      empresa: "Pesquisa Acadêmica (ODS 11)",
      tecnologia: "NestJS, React, PostgreSQL",
      descricao:
        "Construção de uma solução end-to-end para consolidação de dados públicos. Desenvolvimento de pipelines de dados extraídos de portais de transparência de 5 municípios, armazenados em banco de dados próprio e servidos via API escalável para um painel web interativo de fácil visualização.",
    },
    {
      periodo: "2025",
      cargo: "Desenvolvedor Mobile & Co-criador",
      empresa: "Campus Mobile (13ª Edição)",
      tecnologia: "React Native, Gamificação",
      descricao:
        "Criação de um aplicativo gamificado focado na substituição de hábitos prejudiciais (combate ao vício em jogos). Implementou mecânicas de retenção e sistema de progressão. A viabilidade técnica e de produto do projeto garantiu seleção e validação no Campus Mobile (USP/Claro) em São Paulo.",
    },
    {
      periodo: "Início de 2025",
      cargo: "Desenvolvedor Backend",
      empresa: "MaisMed",
      tecnologia: "Python e Django",
      descricao:
        "Desenvolvimento de plataforma SaaS educacional para geração de simulados do ENEM. Implementou algoritmos de randomização de questões baseados em níveis de dificuldade, criando portais específicos para professores, corretores e administradores, otimizando diretamente a operação da instituição.",
    },
    {
      periodo: "2023 - 2024",
      cargo: "Vice-Presidente & Consultor Comercial",
      empresa: "Empresa Júnior do IFPB",
      tecnologia: "Estratégia de Produto, Gestão e Liderança",
      descricao:
        "Liderança executiva atuando na gestão e precificação de produtos de tecnologia. Tomada de decisões estratégicas de vendas, estruturação comercial e liderança de equipe, desenvolvendo forte visão de negócios e alinhamento entre desenvolvimento e cliente final.",
    },
    {
      periodo: "2022",
      cargo: "Desenvolvedor Mobile",
      empresa: "Projeto Autoral de Educação",
      tecnologia: "React Native",
      descricao:
        "Idealização e desenvolvimento de um aplicativo interativo para auxiliar estudantes iniciantes em informática a aprender lógica de programação com Python de maneira intuitiva e acessível.",
    },
  ];

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:px-8" id="experience">
      <Subtitulo subtitulo="Experiência" className="text-center" />
      <Conteudo
        titulo="Experiência profissional com foco em produto, arquitetura e entrega real"
        texto="Atuação no desenvolvimento de ecossistemas digitais escaláveis, integrações complexas e liderança estratégica, combinando visão de negócios com engenharia de software de ponta."
        className="mx-auto mb-10 max-w-2xl text-center"
      />

      <div className="grid gap-4">
        {experiencias.map((experiencia, index) => (
          <article
            key={`${experiencia.empresa}-${experiencia.periodo}`}
            className="group rounded-2xl border border-white/10 bg-surface p-6 transition duration-300 hover:border-mint/40 hover:bg-surface-soft"
          >
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between md:gap-8">
              <div className="max-w-3xl">
                <div className="mb-3 flex flex-wrap items-center gap-3 text-sm text-muted">
                  <span className="rounded-full border border-white/10 bg-base/60 px-3 py-1 font-medium text-text">
                    {String(experiencias.length - index).padStart(2, "0")}
                  </span>
                  <span>{experiencia.periodo}</span>
                </div>
                <h3 className="font-title text-xl font-semibold text-text transition group-hover:text-mint">
                  {experiencia.cargo}
                </h3>
                <p className="mt-1 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                  {experiencia.empresa}
                </p>
                <p className="mt-4 text-sm leading-7 text-muted md:text-base">
                  {experiencia.descricao}
                </p>
              </div>

              <div className="min-w-[12rem] rounded-xl border border-white/10 bg-base/50 px-4 py-3 md:text-right">
                <p className="text-xs uppercase tracking-[0.22em] text-muted">Tecnologias / Skills</p>
                <p className="mt-2 text-sm font-semibold text-text">{experiencia.tecnologia}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default SecaoProjetos;