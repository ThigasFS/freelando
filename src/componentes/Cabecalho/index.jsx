import styled from "@emotion/styled/macro";
import Logo from "../ProvedorTema/assets/Logo branco.svg";

const HeaderEstilizado = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${(props) => props.theme.cores.primarias.a};
  padding: ${(props) => props.theme.espacamentos.m};
  color: ${(props) => props.theme.cores.branco};
`;

export const Cabecalho = () => {
  return (
    <HeaderEstilizado>
      <img src={Logo} alt="Logo da Freelando" />
      <span>Login</span>
    </HeaderEstilizado>
  );
};
