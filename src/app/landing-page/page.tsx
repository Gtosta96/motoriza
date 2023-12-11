import Dropdown from "@/app/components/Dropdown/Dropdown";

import { Layout } from "@/app/components/Layout/Layout";
import { Typography } from "@/app/components/Typography/Typography";

import styles from "./page.module.css";

const LandingPage = () => {
  return (
    <Layout>
      <Layout.Navbar />
      <Layout.Section className={`${styles.hero} flex flex-col gap-y-4`}>
        <Typography variant="h2">
          Seu próximo carro, sua melhor escolha.
        </Typography>
        <Typography variant="subtitle2">
          Compare e economize com a <span className="font-bold">Motoriza.</span>
        </Typography>
      </Layout.Section>
      <Layout.Section className="flex gap-y-2.5">
        <Typography variant="h3">direto ao ponto</Typography>
        <Typography variant="paragraph">
          Encontre seu carro ideal, sem perder o controle do seu orçamento.
          Conta pra gente o carro que você tá querendo comprar e a gente te
          conta a variação do preço de acordo com o histórico da tabela FIPE.
        </Typography>
      </Layout.Section>
      <Layout.Section className="flex gap-y-2.5">
        <Typography variant="h2">
          Quero saber a variação de preço de um
        </Typography>
        <Dropdown />
      </Layout.Section>
    </Layout>
  );
};

export default LandingPage;
