let tela = 'Home';
let subTela = 'Controle Biológico';
let subAbas = ['Controle Biológico', 'Agroecologia', 'Hortas no Pará'];

function setup() {
  createCanvas(1200, 700);
  textFont('Georgia');
  textSize(16);
}

function draw() {
  background('#f0fdf4');
  desenhaMenu();
  desenhaConteudo();
}

function desenhaMenu() {
  fill('#065f46');
  rect(0, 0, width, 60);
  fill(255);
  textSize(20);
  textAlign(CENTER, CENTER);
  let labels = ['Home', 'Catálogo', 'Tutoriais', 'Cartilhas', 'Sobre'];
  for (let i = 0; i < labels.length; i++) {
    let x = 140 + i * 200;
    let hover = dist(mouseX, mouseY, x, 30) < 80;
    fill(hover || tela === labels[i] ? '#bbf7d0' : '#d1fae5');
    rect(x - 75, 15, 150, 30, 10);
    fill('#065f46');
    text(labels[i], x, 30);
    if (hover && mouseIsPressed) {
      tela = labels[i];
      if (tela === 'Cartilhas') subTela = 'Controle Biológico';
    }
  }
}
function desenhaConteudo() {
  fill(30);
  textSize(18);
  textAlign(LEFT, TOP);
  let margem = 50;
  let y = 80;

  if (tela === 'Home') {
    textSize(24);
    fill('#064e3b');
    text('Projeto Agrinho 2025', margem, y);
    textSize(16);
    fill(30);
    text('O Projeto Agrinho é uma iniciativa educacional que promove a sustentabilidade no campo.\n' +
         'Ele incentiva o uso consciente dos recursos naturais, práticas agrícolas sustentáveis\n' +
         'e a educação ambiental em escolas e comunidades.\n\n' +
         'Importância:\n' +
         '- Conscientização de alunos e agricultores\n' +
         '- Redução do uso de produtos tóxicos\n' +
         '- Estímulo à criatividade e ao reaproveitamento de materiais\n\n' +
         'Como funciona:\n' +
         'Por meio de cartilhas, tutoriais, práticas de campo e recursos educativos, os participantes\n' +
         'aprendem maneiras de cultivar de forma mais limpa, segura e ecológica.', margem, y + 50);
  }

  else if (tela === 'Catálogo') {
    textSize(24);
    fill('#064e3b');
    text('Catálogo de Soluções Sustentáveis', margem, y);
    textSize(16);
    fill(30);
    text('- Plantas repelentes: citronela, manjericão, arruda\n' +
         '- Insetos aliados: joaninhas, vespas, libélulas\n' +
         '- Armadilhas com garrafas PET e iscas naturais\n' +
         '- Compostagem com restos de comida e folhas\n' +
         '- Hortas verticais com garrafas e caixotes\n' +
         '- Estufas feitas com materiais recicláveis\n' +
         '- Irrigação com gotejamento usando PETs\n' +
         '- Adubação verde com leguminosas e palhada', margem, y + 50);
  }
  else if (tela === 'Tutoriais') {
    textSize(24);
    fill('#064e3b');
    text('Tutoriais com Materiais Recicláveis', margem, y);
    textSize(16);
    fill(30);
    text('- Como fazer composteira com baldes velhos\n' +
         '- Montagem de horta vertical com PETs\n' +
         '- Criar estufa com janelas antigas e plásticos\n' +
         '- Sistema de irrigação por gotejamento com PET\n' +
         '- Armadilha contra mosquitos com garrafa, água e açúcar\n' +
         '- Como fazer biofertilizante com restos de alimentos\n' +
         '- Reaproveitamento de pneus para vasos decorativos\n' +
         '- Estação de coleta de água da chuva com galões reutilizados', margem, y + 50);
  }

  else if (tela === 'Cartilhas') {
    textSize(22);
    fill('#064e3b');
    text('Cartilhas Educativas', margem, y);
    textSize(16);
    fill(30);

    // Mini-abas
    for (let i = 0; i < subAbas.length; i++) {
      let x = 200 + i * 250;
      let hover = dist(mouseX, mouseY, x, 120) < 100;
      fill(hover || subTela === subAbas[i] ? '#caffbf' : '#e6ffe6');
      rect(x - 100, 110, 200, 30, 10);
      fill('#065f46');
      textAlign(CENTER, CENTER);
      text(subAbas[i], x, 125);
      if (hover && mouseIsPressed) subTela = subAbas[i];
    }

    textAlign(LEFT, TOP);
    let textoY = 160;

    if (subTela === 'Controle Biológico') {
      text('O controle biológico utiliza predadores naturais para combater pragas:\n\n' +
           '- Joaninhas contra pulgões\n' +
           '- Vespas contra lagartas\n' +
           '- Fungos como Beauveria bassiana contra insetos\n\n' +
           'Tipos de controle:\n' +
           '- Natural (já existente na natureza)\n' +
           '- Aumentativo (introdução planejada)\n' +
           '- Inundativo (uso intenso por curto período)\n\n' +
           'Benefícios:\n' +
           '- Reduz agrotóxicos\n' +
           '- Preserva o meio ambiente\n' +
           '- Garante alimentos mais seguros', margem, textoY);
    } else if (subTela === 'Agroecologia') {
      text('A agroecologia promove uma agricultura sustentável com base no equilíbrio ecológico:\n\n' +
           'Princípios:\n' +
           '- Diversidade de culturas\n' +
           '- Aproveitamento de recursos locais\n' +
           '- Produção integrada com o ambiente\n\n' +
           'Técnicas:\n' +
           '- Adubação verde com leguminosas\n' +
           '- Policultura e rotação de culturas\n' +
           '- Agroflorestas\n' +
           '- Captação e uso consciente da água\n\n' +
           'Resultados:\n' +
           '- Solo fértil e vivo\n' +
           '- Menos erosão e degradação\n' +
           '- Produção sustentável e comunitária', margem, textoY);
    } else if (subTela === 'Hortas no Pará') {
      text('As hortas são fundamentais para alimentação saudável e geração de renda:\n\n' +
           'Etapas:\n' +
           '- Escolha do local (sol e acesso à água)\n' +
           '- Preparo do solo com adubo natural\n' +
           '- Plantio de hortaliças: alface, couve, coentro, etc.\n' +
           '- Irrigação diária pela manhã\n\n' +
           'Ferramentas:\n' +
           '- Regador, enxada, rastelo, baldes\n\n' +
           'Benefícios:\n' +
           '- Melhora na alimentação\n' +
           '- Ensino de práticas sustentáveis\n' +
           '- Geração de renda em casa ou escola', margem, textoY);
    }
  }
  else if (tela === 'Sobre') {
    textSize(24);
    fill('#064e3b');
    text('Sobre o Projeto', margem, y);
    textSize(16);
    fill(30);
    text('O Projeto Agrinho tem como missão promover a educação ambiental e o pensamento crítico\n' +
         'por meio da agricultura consciente. A proposta é unir teoria e prática para estimular\n' +
         'o cuidado com o meio ambiente e o uso inteligente dos recursos naturais.\n\n' +
         'Ações como o uso de materiais reciclados, compostagem, controle biológico\n' +
         'e produção de alimentos orgânicos são incentivadas através de cartilhas e tutoriais educativos.', margem, y + 50);
}
}
