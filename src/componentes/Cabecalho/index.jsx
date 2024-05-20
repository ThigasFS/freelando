import styled from "@emotion/styled/macro";
import Logo from "../ProvedorTema/assets/Logo cinza.png";

const HeaderEstilizado = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${(props) => props.theme.cores.primarias.a};
  padding: ${(props) => props.theme.espacamentos.m};
`;

export const Cabecalho = () => {
  return (
    <HeaderEstilizado>
      <img src={Logo} alt="Logo da Freelando" />
      <span>Login</span>
    </HeaderEstilizado>
  );
};
