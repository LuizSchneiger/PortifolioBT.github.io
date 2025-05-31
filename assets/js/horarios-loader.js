/**
 * Script para carregar dinamicamente os dados de horários na página
 */

document.addEventListener('DOMContentLoaded', function() {
  // Função para criar a tabela de horários
  function criarTabelaHorarios() {
    const container = document.querySelector('.horarios__container');
    if (!container) return;
    
    // Limpar o container
    container.innerHTML = '';
    
    // Criar o título e subtítulo
    const titulo = document.createElement('h2');
    titulo.className = 'section__title';
    titulo.textContent = 'Horários de Aula';
    container.appendChild(titulo);
    
    const subtitulo = document.createElement('span');
    subtitulo.className = 'section__subtitle';
    subtitulo.textContent = horariosData.contato.instrucoes;
    container.appendChild(subtitulo);
    
    // Criar a legenda de categorias
    const legenda = document.createElement('div');
    legenda.className = 'horarios__legenda';
    
    Object.values(horariosData.configGrid.categorias).forEach(categoria => {
      const itemLegenda = document.createElement('div');
      itemLegenda.className = 'horarios__legenda-item';
      
      const cor = document.createElement('span');
      cor.className = 'horarios__legenda-cor';
      cor.style.backgroundColor = categoria.cor;
      
      const nome = document.createElement('span');
      nome.className = 'horarios__legenda-nome';
      nome.textContent = categoria.nome;
      
      itemLegenda.appendChild(cor);
      itemLegenda.appendChild(nome);
      legenda.appendChild(itemLegenda);
    });
    
    container.appendChild(legenda);
    
    // Criar a tabela
    const tabela = document.createElement('div');
    tabela.className = 'horarios__tabela';
    
    // Criar cabeçalho da tabela
    const cabecalho = document.createElement('div');
    cabecalho.className = 'horarios__cabecalho';
    
    // Célula vazia no canto superior esquerdo
    const celulaVazia = document.createElement('div');
    celulaVazia.className = 'horarios__celula horarios__celula-cabecalho';
    cabecalho.appendChild(celulaVazia);
    
    // Dias da semana
    horariosData.configGrid.diasSemana.forEach(dia => {
      const celulaDia = document.createElement('div');
      celulaDia.className = 'horarios__celula horarios__celula-cabecalho';
      celulaDia.textContent = dia;
      cabecalho.appendChild(celulaDia);
    });
    
    tabela.appendChild(cabecalho);
    
    // Criar linhas de horários
    horariosData.configGrid.horarios.forEach(horario => {
      const linha = document.createElement('div');
      linha.className = 'horarios__linha';
      
      // Célula de horário
      const celulaHorario = document.createElement('div');
      celulaHorario.className = 'horarios__celula horarios__celula-horario';
      celulaHorario.textContent = horario;
      linha.appendChild(celulaHorario);
      
      // Células para cada dia da semana
      horariosData.configGrid.diasSemana.forEach(dia => {
        const celula = document.createElement('div');
        celula.className = 'horarios__celula';
        
        // Encontrar aula para este dia e horário
        const diaDados = horariosData.horarios.find(d => d.dia === dia);
        if (diaDados) {
          const aula = diaDados.aulas.find(a => a.horario === horario);
          if (aula) {
            const categoria = horariosData.configGrid.categorias[aula.categoria];
            
            celula.style.backgroundColor = categoria.cor;
            celula.classList.add('horarios__celula-aula');
            
            if (aula.disponivel) {
              celula.classList.add('horarios__celula-disponivel');
              
              // Criar link para WhatsApp
              const link = document.createElement('a');
              link.href = `https://wa.me/${horariosData.contato.whatsapp}?text=${encodeURIComponent(horariosData.contato.mensagemPadrao + ' ' + dia + ' às ' + horario)}`;
              link.target = '_blank';
              link.className = 'horarios__link';
              
              const info = document.createElement('div');
              info.className = 'horarios__info';
              info.innerHTML = `
                <span class="horarios__categoria">${categoria.nome}</span>
                ${aula.observacao ? `<span class="horarios__obs">${aula.observacao}</span>` : ''}
                <span class="horarios__whatsapp"><i class="fab fa-whatsapp"></i> Agendar</span>
              `;
              
              link.appendChild(info);
              celula.appendChild(link);
            } else {
              celula.classList.add('horarios__celula-indisponivel');
              
              const info = document.createElement('div');
              info.className = 'horarios__info';
              info.innerHTML = `
                <span class="horarios__categoria">${categoria.nome}</span>
                ${aula.observacao ? `<span class="horarios__obs">${aula.observacao}</span>` : ''}
              `;
              
              celula.appendChild(info);
            }
          }
        }
        
        linha.appendChild(celula);
      });
      
      tabela.appendChild(linha);
    });
    
    container.appendChild(tabela);
    
    // Adicionar informações adicionais
    if (horariosData.informacoesAdicionais && horariosData.informacoesAdicionais.length > 0) {
      const infoContainer = document.createElement('div');
      infoContainer.className = 'horarios__info-adicionais';
      
      const infoTitulo = document.createElement('h3');
      infoTitulo.textContent = 'Informações Adicionais';
      infoContainer.appendChild(infoTitulo);
      
      const infoLista = document.createElement('ul');
      horariosData.informacoesAdicionais.forEach(info => {
        const item = document.createElement('li');
        item.textContent = info;
        infoLista.appendChild(item);
      });
      
      infoContainer.appendChild(infoLista);
      container.appendChild(infoContainer);
    }
  }
  
  // Inicializar a tabela de horários
  criarTabelaHorarios();
});
