import Branding from "src/assets/svgs/possibilities-use/Branding.svg";
import Engagement from "src/assets/svgs/possibilities-use/Engagement.svg";
import Loyalty from "src/assets/svgs/possibilities-use/Loyalty.svg";
import Events from "src/assets/svgs/possibilities-use/Events.svg";
import Marketing from "src/assets/svgs/possibilities-use/Marketing.svg";
import Sales from "src/assets/svgs/possibilities-use/Sales.svg";

export const card_brand = {
  card_select: {
    icon: Branding,
    text: `Branding`,
  },
  title: `Amplificando presença e valor de marca`,
  subtitle: `Marcas de sucesso se destacam com identidades fortes, e os colecionáveis digitais são opções inovadoras para reforçar o vínculo com o público. A Pegaê facilita essa conexão, permitindo uma interação direta e eficaz entre a marca e seus consumidores.`,
  tags: [
    `Reconhecimento ampliado de identidade de marca no mundo digital;`,
    `Coleta de insights para aprimoramento contínuo das campanhas;`,
    `Aprofundamento do entendimento sobre as preferências do consumidor;`,
    `Inovação e criatividade em ações de marketing digital.`,
  ],
};

export const card_engagement = {
  card_select: {
    icon: Engagement,
    text: `Engajamento`,
  },
  title: `Criando cultura e conexão na era digital`,
  subtitle: `Marcas fortes são marcas que têm, além da identidade, uma cultura - e é das comunidades que a cultura emerge. Ativos digitais podem funcionais como ferramentas que fortalecem essa narrativa de marca, transformando consumidores em embaixadores.`,
  tags: [
    `Comunidade engajada e ativa;`,
    `Feedback direto e valioso dos usuários;`,
    `Construção de lealdade e confiança.`,
  ],
};

export const card_loyalty = {
  card_select: {
    icon: Loyalty,
    text: `Loyalty`,
  },
  title: `Experiências exclusivas, clientes apaixonados`,
  subtitle: `Conquistar a preferência do cliente em uma única ocasião é um feito notável. No entanto, garantir a lealdade contínua é o verdadeiro triunfo. Com NFTs exclusivos e experiências singulares, as marcas oferecem motivos concretos para que os clientes persistam na sua escolha e promovam a marca no universo digital.`,
  tags: [
    `Aumento da retenção e recorrência de clientes;`,
    `Fortalecimento da relação marca-cliente;`,
    `Maior participação em campanhas promocionais.`,
  ],
};

export const card_events = {
  card_select: {
    icon: Events,
    text: `Eventos`,
  },
  title: `Revolucionando o cenário esportivo e cultural`,
  subtitle: `Eventos são excelentes ferramentas de engajamento para marcas. Ao transformar ingressos em ativos digitais, que não só garantem o acesso, mas também funcionam como memorabilia digital, a emoção dos eventos se funde com a permanência e segurança da blockchain.`,
  tags: [
    `Maior controle sobre a distribuição de ingressos;`,
    `Engajamento ampliado antes, durante e após o evento;`,
    `Monetização adicional através de merchandise digital.`,
  ],
};

export const card_marketing = {
  card_select: {
    icon: Marketing,
    text: `Marketing`,
  },
  title: `Otimizando a captação de leads com ativos digitais`,
  subtitle: `Capturar e reter leads é essencial no marketing. Ao utilizar ativos digitais como recompensas por interações, colaborações e inscrições, as marcas não apenas estabelecem parcerias com influenciadores, mas também expandem seu alcance em campanhas, tornando-as mais efetivas e marcantes.`,
  tags: [
    `Maior engajamento em campanhas promocionais;`,
    `Geração de leads mais qualificados;`,
    `Diferenciação em um mercado saturado.`,
  ],
};

export const card_sales = {
  card_select: {
    icon: Sales,
    text: `Vendas`,
  },
  title: `Ativos digitais na jornada 
  de compra
  `,
  subtitle: `Ao oferecer ativos digitais exclusivos como incentivos para compras, lançando coleções ou promoções especiais, as marcas não só estimulam a venda, mas também proporcionam uma experiência única ao cliente, reforçando a percepção positiva no mercado.`,
  tags: [
    `Aumento nas vendas e receita;`,
    `Maior visibilidade e interesse nas promoções;`,
    `Clientes mais satisfeitos e engajados.`,
  ],
};

export const possibilities_of_use = {
  default: {
    title: `Possibilidades de uso`,
    subtitle: `A Pegaê é uma ferramenta pensada para ajudar marcas a inovar em ações de marketing, pois simplifica o processo de distribuição de ativos digitais.`,
  },
  content: [
    {
      ...card_brand,
    },
    {
      ...card_engagement,
    },
    {
      ...card_loyalty,
    },
    {
      ...card_events,
    },
    {
      ...card_marketing,
    },
    {
      ...card_sales,
    },
  ],
};
