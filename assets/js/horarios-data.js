/**
 * Arquivo de configuração de horários de aula de Beach Tennis
 * Este arquivo contém a configuração da grid e os horários com suas características
 * Edite este arquivo para atualizar os horários no site
 */

const horariosData = {
  // Configurações da grid
  configGrid: {
    diasSemana: ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"],
    horarios: ["08:00", "09:00", "10:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00"],
    categorias: {
      experimental: {
        nome: "Experimental",
        cor: "#4CAF50", // Verde
        descricao: "Aula experimental para novos alunos"
      },
      iniciante: {
        nome: "Iniciante",
        cor: "#FFC107", // Amarelo
        descricao: "Para alunos que estão começando no esporte"
      },
      categoriaE: {
        nome: "Categoria E",
        cor: "#2196F3", // Azul
        descricao: "Para alunos de nível básico"
      },
      categoriaD: {
        nome: "Categoria D",
        cor: "#03A9F4", // Azul claro
        descricao: "Para alunos de nível intermediário-básico"
      },
      categoriaC: {
        nome: "Categoria C",
        cor: "#00BCD4", // Ciano
        descricao: "Para alunos de nível intermediário"
      },
      categoriaB: {
        nome: "Categoria B",
        cor: "#FF9800", // Laranja
        descricao: "Para alunos de nível intermediário-avançado"
      },
      categoriaA: {
        nome: "Categoria A",
        cor: "#FF5722", // Laranja escuro
        descricao: "Para alunos de nível avançado"
      },
      profissional: {
        nome: "Profissional",
        cor: "#F44336", // Vermelho
        descricao: "Para atletas profissionais"
      }
    }
  },
  
  // Dados dos horários
  // Formato: [dia da semana, horário, categoria, disponível (true/false), observação]
  horarios: [
    // Segunda-feira
    {
      dia: "Segunda",
      aulas: [
        {
          horario: "18:00",
          categoria: "iniciante",
          disponivel: true,
          observacao: "Aula em grupo"
        },
        {
          horario: "19:00",
          categoria: "categoriaE",
          disponivel: true,
          observacao: ""
        },
        {
          horario: "20:00",
          categoria: "categoriaD",
          disponivel: false,
          observacao: "Turma completa"
        }
      ]
    },
    
    // Terça-feira
    {
      dia: "Terça",
      aulas: [
        {
          horario: "18:00",
          categoria: "experimental",
          disponivel: true,
          observacao: "Aula gratuita para iniciantes"
        },
        {
          horario: "19:00",
          categoria: "categoriaC",
          disponivel: true,
          observacao: ""
        },
        {
          horario: "20:00",
          categoria: "categoriaB",
          disponivel: true,
          observacao: ""
        }
      ]
    },
    
    // Quarta-feira
    {
      dia: "Quarta",
      aulas: [
        {
          horario: "18:00",
          categoria: "iniciante",
          disponivel: true,
          observacao: ""
        },
        {
          horario: "19:00",
          categoria: "categoriaE",
          disponivel: true,
          observacao: ""
        },
        {
          horario: "20:00",
          categoria: "categoriaC",
          disponivel: true,
          observacao: ""
        }
      ]
    },
    
    // Quinta-feira
    {
      dia: "Quinta",
      aulas: [
        {
          horario: "18:00",
          categoria: "experimental",
          disponivel: true,
          observacao: "Aula gratuita para iniciantes"
        },
        {
          horario: "19:00",
          categoria: "categoriaD",
          disponivel: true,
          observacao: ""
        },
        {
          horario: "20:00",
          categoria: "categoriaA",
          disponivel: true,
          observacao: "Aula avançada"
        }
      ]
    },
    
    // Sexta-feira
    {
      dia: "Sexta",
      aulas: [
        {
          horario: "17:00",
          categoria: "iniciante",
          disponivel: true,
          observacao: ""
        },
        {
          horario: "18:00",
          categoria: "categoriaE",
          disponivel: true,
          observacao: ""
        },
        {
          horario: "19:00",
          categoria: "categoriaC",
          disponivel: true,
          observacao: ""
        },
        {
          horario: "20:00",
          categoria: "profissional",
          disponivel: false,
          observacao: "Treino de atletas"
        }
      ]
    },
    
    // Sábado
    {
      dia: "Sábado",
      aulas: [
        {
          horario: "09:00",
          categoria: "iniciante",
          disponivel: true,
          observacao: "Aula em grupo"
        },
        {
          horario: "10:00",
          categoria: "categoriaD",
          disponivel: true,
          observacao: ""
        },
        {
          horario: "14:00",
          categoria: "categoriaC",
          disponivel: true,
          observacao: ""
        },
        {
          horario: "15:00",
          categoria: "categoriaB",
          disponivel: true,
          observacao: ""
        },
        {
          horario: "16:00",
          categoria: "categoriaA",
          disponivel: true,
          observacao: ""
        }
      ]
    },
    
    // Domingo
    {
      dia: "Domingo",
      aulas: [
        {
          horario: "09:00",
          categoria: "experimental",
          disponivel: true,
          observacao: "Aula gratuita para iniciantes"
        },
        {
          horario: "10:00",
          categoria: "iniciante",
          disponivel: true,
          observacao: ""
        }
      ]
    }
  ],
  
  // Informações de contato para agendamento
  contato: {
    whatsapp: "5546991155082",
    mensagemPadrao: "Olá, gostaria de agendar uma aula de Beach Tennis!",
    instrucoes: "Clique no horário desejado para entrar em contato via WhatsApp e agendar sua aula."
  },
  
  // Informações adicionais
  informacoesAdicionais: [
    "As aulas têm duração de 1 hora.",
    "É recomendável chegar 10 minutos antes do horário marcado.",
    "Traga sua própria raquete ou alugue no local.",
    "Use roupas leves e confortáveis.",
    "Protetor solar é recomendado para aulas ao ar livre."
  ]
};
