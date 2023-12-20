import Image from "next/image";
import { Dropdown } from "@/app/components/Dropdown/Dropdown";

import { Layout } from "@/app/components/Layout/Layout";
import { Typography } from "@/app/components/Typography/Typography";
import MotorizaLogo from "@/app/assets/motoriza-logo.svg";
import MotorizaWhiteLogo from "@/app/assets/motoriza-white.svg";
import CarIcon from "@/app/assets/icons/Fabricante.svg";
import ModelIcon from "@/app/assets/icons/Modelo.svg";
import CalendarIcon from "@/app/assets/icons/Calendar.svg";

import styles from "./page.module.css";
import { TextInput } from "../components/TextInput/TextInput";

const LandingPage = () => {
  return (
    <Layout>
      <Layout.Navbar />

      <Layout.Section className={`${styles.hero} justify-center gap-y-4`}>
        <Typography variant="h2" color="text-white" block>
          Seu próximo carro,
          <Typography variant="h2" color="text-white" block>
            sua melhor escolha.
          </Typography>
        </Typography>
        <Typography variant="subtitle2" color="text-white">
          Compare e economize{" "}
          <Typography variant="subtitle2" color="text-white" block>
            com a <span className="font-bold">Motoriza.</span>
          </Typography>
        </Typography>
      </Layout.Section>

      <Layout.Section className="bg-black">
        <Typography variant="h3" color="text-white" block>
          direto ao ponto
        </Typography>
        <Typography variant="paragraph" color="text-white" block>
          Encontre seu carro ideal, sem perder o controle do seu orçamento.
          <Typography variant="paragraph" color="text-white" block>
            Conta pra gente o carro que você tá querendo comprar e a gente te
          </Typography>
          <Typography variant="paragraph" color="text-white" block>
            conta a variação do preço de acordo com o histórico da tabela FIPE.
          </Typography>
        </Typography>
      </Layout.Section>

      <Layout.Section className="bg-light-silver gap-y-10">
        <div className="flex flex-col gap-y-8">
          <Typography variant="subtitle2">
            comece escolhendo um carro para analisar
          </Typography>

          <div className="flex flex-wrap gap-6">
            <Dropdown icon={CarIcon} placeholder="selecione o fabricante" />
            <Dropdown icon={ModelIcon} placeholder="escolha o modelo" />
            <Dropdown icon={CalendarIcon} placeholder="defina o ano" />
          </div>
        </div>

        <div className="flex flex-col gap-y-8">
          <Typography variant="subtitle2">
            escolha o período para análise
          </Typography>

          <div className="flex flex-wrap gap-6">
            <Dropdown icon={CalendarIcon} placeholder="dd/mm/aaaa" />
            <Dropdown icon={CalendarIcon} placeholder="dd/mm/aaaa" />
            <Dropdown icon={CalendarIcon} placeholder="dd/mm/aaaa" />
          </div>
        </div>
        <div className="flex flex-col gap-y-2">
          <Typography variant="overline" color="text-dark-grey" block>
            SE LIGA
          </Typography>

          <Typography variant="caption" color="text-dark-grey" block>
            Nosso serviço é gratuito e a gente só vai te mostrar os preços dos
            carros de acordo com os registros históricos na tabela FIPE,
            <Typography variant="caption" color="text-dark-grey" block>
              ok? A Motoriza não garante o preço de nenhum carro em nenhuma
              loja, concessionária ou vendedor particular.
            </Typography>
          </Typography>
        </div>
      </Layout.Section>

      <Layout.Section className="gap-y-8 bg-black">
        <div className="flex flex-col gap-6">
          <Image
            src={MotorizaWhiteLogo}
            alt="Motoriza Logo"
            width={198}
            height={48}
          />

          <Typography variant="paragraph" color="text-white" block>
            A Motoriza é uma plataforma inteligente para você anunciar, comprar
            <Typography variant="paragraph" color="text-white" block>
              e vender seu carro. Quer ser o primeiro a saber do lançamento?
            </Typography>
          </Typography>
        </div>

        <div className="flex flex-wrap gap-x-16">
          <div className="flex flex-col gap-y-4">
            <Typography variant="subtitle2" color="text-white">
              nome
            </Typography>
            <TextInput placeholder="seu nome" />
          </div>

          <div className="flex flex-col gap-y-4">
            <Typography variant="subtitle2" color="text-white">
              seu melhor e-mail
            </Typography>
            <TextInput placeholder="seu@email.com" />
          </div>
        </div>

        <div className="flex flex-col gap-y-2">
          <Typography variant="overline" color="text-dark-grey" block>
            SE LIGA
          </Typography>

          <div>
            <Typography variant="caption" color="text-dark-grey" block>
              Nós não enviamos SPAM. Ao se cadastrar você concorda em
              compartilhar seu nome e e-mail com a gente e também topa que a
              gente te mande comunicações sobre o
              <Typography variant="caption" color="text-dark-grey" block>
                lançamento da plataforma e outros informativos que achamos que
                você pode achar interessante. Mas fica tranquilo(a) que seus
                dados estão seguros com a gente.
              </Typography>
            </Typography>
          </div>
        </div>
      </Layout.Section>

      <Layout.Section className="bg-light-silver py-16">
        <div className="flex flex-col gap-y-2">
          <Image
            src={MotorizaLogo}
            alt="Motoriza Logo"
            width={145}
            height={35}
          />
          <Typography variant="paragraph" color="text-black">
            © {new Date().getFullYear()} Motoriza FIPE{" "}
            <Typography variant="paragraph" color="text-dark-grey">
              é uma plataforma de comparação de preços de veículos através da
              tabela FIPE.
            </Typography>
            <Typography variant="paragraph" color="text-dark-grey" block>
              <Typography variant="paragraph" color="text-black">
                FIPE
              </Typography>{" "}
              é marca registrada da Fundação Instituto de Pesquisas Econômicas.
            </Typography>
          </Typography>
        </div>
      </Layout.Section>
    </Layout>
  );
};

export default LandingPage;
