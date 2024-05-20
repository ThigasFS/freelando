import styled from "@emotion/styled/macro";
import Logo from "../ProvedorTema/assets/Logo branco.svg";
import { Tipografia } from "../Tipografia";
import wppLogo from "../ProvedorTema/assets/Whatsapp.svg";
import twitchLogo from "../ProvedorTema/assets/Twitch.svg";
import instaLogo from "../ProvedorTema/assets/Instagram.svg";
import twtLogo from "../ProvedorTema/assets/Twiter.svg";

const SecaoEstilizada = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${(props) => props.theme.cores.primarias.a};
  color: ${(props) => props.theme.cores.branco};
`;

const DivEstilizada = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ImagemEstilizada = styled.img`
  height: 40px;
`;

const ListaEstilizada = styled.ul`
  display: flex;
  gap: ${(props) => props.theme.espacamentos.xs};
  list-style: none;
  padding: 0;
`;

export const Rodape = () => {
  return (
    <footer>
      <SecaoEstilizada>
        <DivEstilizada>
          <ImagemEstilizada src={Logo} alt="Logo do Freelando" />
          <Tipografia componente="body2" variante="body2">
            Desenvolvido por Alura. Projeto fictício sem fins comerciais.
          </Tipografia>
        </DivEstilizada>

        <DivEstilizada>
          <Tipografia componente="body2" variante="body2">
            Acesse nossas redes:
          </Tipografia>
          <ListaEstilizada>
            <li>
              <img src={wppLogo} alt="Logo do Whatsapp" />
            </li>
            <li>
              <img src={twitchLogo} alt="Logo da Twitch" />
            </li>
            <li>
              <img src={instaLogo} alt="Logo do Instagram" />
            </li>
            <li>
              <img src={twtLogo} alt="Logo do Twitter" />
            </li>
          </ListaEstilizada>
        </DivEstilizada>
      </SecaoEstilizada>
    </footer>
  );
};
