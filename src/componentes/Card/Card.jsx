import styled from "@emotion/styled/macro";

const DivEstilizada = styled.div`
  padding: 32px;
  background: ${(props) => props.theme.cores.secundarias.a};
  border: 1px solid ${(props) => props.theme.cores.primarias.a};
  border-radius: 16px;
`;

export const Card = ({ children }) => {
  return <DivEstilizada>{children}</DivEstilizada>;
};
