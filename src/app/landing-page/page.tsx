import Image from "next/image";
import { Dropdown } from "@/app/components/Dropdown/Dropdown";

import { Layout } from "@/app/components/Layout/Layout";
import { Typography } from "@/app/components/Typography/Typography";
import MotorizaLogo from "@/app/assets/motoriza-logo.svg";

import styles from "./page.module.css";
import { TextInput } from "../components/TextInput/TextInput";

const LandingPage = () => {
  return (
    <Layout>
      <Layout.Navbar />

      <Layout.Section
        className={`${styles.hero} flex flex-col justify-center gap-y-4 `}
      >
        <div className="flex flex-col">
          <Typography variant="h2" color="white" block>
            Seu próximo carro,
            <Typography variant="h2" color="white" block>
              sua melhor escolha.
            </Typography>
          </Typography>
          <Typography variant="subtitle2" color="white">
            Compare e economize{" "}
            <Typography variant="subtitle2" color="white" block>
              com a <span className="font-bold">Motoriza.</span>
            </Typography>
          </Typography>
        </div>
      </Layout.Section>

      <Layout.Section bgColor="black" className="flex flex-col gap-y-2.5 py-24">
        <Typography variant="h3" color="white" block>
          direto ao ponto
        </Typography>
        <Typography variant="paragraph" color="white" block>
          Encontre seu carro ideal, sem perder o controle do seu orçamento.
          <Typography variant="paragraph" color="white" block>
            Conta pra gente o carro que você tá querendo comprar e a gente te
          </Typography>
          <Typography variant="paragraph" color="white" block>
            conta a variação do preço de acordo com o histórico da tabela FIPE.
          </Typography>
        </Typography>
      </Layout.Section>

      <Layout.Section className="flex flex-col gap-y-10 py-24">
        <div className="flex flex-col gap-y-8">
          <Typography variant="paragraph">
            Quero saber a variação de preço de um
          </Typography>

          <div className="flex gap-6 flex-wrap">
            <Dropdown placeholder="selecione o fabricante" />
            <Dropdown placeholder="escolha o modelo" />
            <Dropdown placeholder="defina o ano" />
          </div>
        </div>

        <div className="flex flex-col gap-y-8">
          <Typography variant="subtitle2">e comparar no período</Typography>

          <div className="flex gap-6 flex-wrap">
            <Dropdown placeholder="dd/mm/aaaa" />
            <Dropdown placeholder="dd/mm/aaaa" />
            <Dropdown placeholder="dd/mm/aaaa" />
          </div>

          <div className="flex flex-col gap-y-2">
            <Typography variant="paragraph" block>
              se liga
            </Typography>

            <Typography variant="caption" block>
              Nosso serviço é gratuito e a gente só vai te mostrar os preços dos
              carros de acordo com os registros históricos na tabela FIPE,
              <Typography variant="caption" block>
                ok? A Motoriza não garante o preço de nenhum carro em nenhuma
                loja, concessionária ou vendedor particular.
              </Typography>
            </Typography>
          </div>
        </div>
      </Layout.Section>

      <Layout.Section className="flex flex-col gap-y-10 py-24" bgColor="black">
        <div className="flex flex-col gap-6">
          <Image
            src={MotorizaLogo}
            alt="Motoriza Logo"
            width={198}
            height={48}
          />

          <Typography variant="paragraph" color="white" block>
            A Motoriza é uma plataforma inteligente para você anunciar, comprar
            <Typography variant="paragraph" color="white" block>
              e vender seu carro. Quer ser o primeiro a saber do lançamento?
            </Typography>
          </Typography>
        </div>

        <div className="flex gap-x-16 flex-wrap">
          <div className="flex flex-col gap-y-4">
            <Typography variant="subtitle2" color="white">
              nome
            </Typography>
            <TextInput placeholder="seu nome" />
          </div>

          <div className="flex flex-col gap-y-4">
            <Typography variant="subtitle2" color="white">
              seu melhor e-mail
            </Typography>
            <TextInput placeholder="seu@email.com" />
          </div>
        </div>

        <div className="flex flex-col gap-y-2">
          <Typography variant="paragraph" color="white" block>
            se liga
          </Typography>

          <div>
            <Typography variant="caption" color="white" block>
              Nós não enviamos SPAM. Ao se cadastrar você concorda em
              compartilhar seu nome e e-mail com a gente e também topa que a
              gente te mande comunicações sobre o
              <Typography variant="caption" color="white" block>
                lançamento da plataforma e outros informativos que achamos que
                você pode achar interessante. Mas fica tranquilo(a) que seus
                dados estão seguros com a gente.
              </Typography>
            </Typography>
          </div>
        </div>
      </Layout.Section>

      <Layout.Section className="flex flex-col gap-y-10 py-24">
        <div className="flex flex-col gap-y-2">
          <Image
            src={MotorizaLogo}
            alt="Motoriza Logo"
            width={145}
            height={35}
          />
          <Typography variant="paragraph" color="black" block>
            © {new Date().getFullYear()} Motoriza FIPE é uma plataforma de
            comparação de preços de veículos através da tabela FIPE.
            <Typography variant="paragraph" color="black" block>
              FIPE é marca registrada da Fundação Instituto de Pesquisas
              Econômicas.
            </Typography>
          </Typography>
        </div>
      </Layout.Section>
    </Layout>
  );
};

export default LandingPage;
