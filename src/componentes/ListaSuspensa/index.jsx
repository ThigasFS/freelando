import styled from "@emotion/styled";
import { useState } from "react";

const ItemListaSuspensaEstilizado = styled.li`
  padding: ${(props) => props.theme.espacamentos.xs} 0;
  text-align: center;
  border-bottom: 1px solid ${(props) => props.theme.cores.neutras.c};
  cursor: pointer;
  &:last-child {
    border: none;
  }
  color: ${(props) => (props.focoAtivo ? props.theme.cores.focus : "inherit")};
  &:hover {
    color: ${(props) => props.theme.cores.focus};
  }
`;

const ListaSuspensaEstilizada = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: ${(props) => props.theme.cores.branco};
  z-index: 1;
  border: 1px solid ${(props) => props.theme.cores.neutras.a};
  border-bottom-left-radius: 18px;
  border-bottom-right-radius: 18px;
  border-top: none;
  margin: 0;
  padding: 0 ${(props) => props.theme.espacamentos.m};
  list-style: none;
`;

const LabelEstilizada = styled.label`
  display: block;
  width: 100%;
  box-sizing: border-box;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  position: relative;
`;

const BotaoEstilizado = styled.button`
  cursor: pointer;
  display: block;
  height: 40px;
  width: 100%;
  font-size: 18px;
  outline: none;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 400;
  border-radius: 18px;
  border-bottom-left-radius: ${(props) => (props.estaAberta ? "0" : "18px")};
  border-bottom-right-radius: ${(props) => (props.estaAberta ? "0" : "18px")};
  margin-top: ${(props) => props.theme.espacamentos.xs};
  padding: ${(props) => props.theme.espacamentos.s};
  background: ${(props) => props.theme.cores.branco};
  border: 1px solid ${(props) => props.theme.cores.neutras.a};
  &:focus {
    border-color: ${(props) => props.theme.cores.focus};
  }
`;

export const ListaSuspensa = ({ titulo, opcoes }) => {
  const [estaAberta, alternarVisibilidade] = useState(false);

  const [opcaoFoco, setOpcaoFoco] = useState(null);
  const [opcaoSelecionada, setOpcaoSelecionada] = useState(null);

  const manipularLista = (e) => {
    alternarVisibilidade(true);
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setOpcaoFoco((focoAntigo) => {
          if (focoAntigo === null) {
            return 0;
          }
          if (focoAntigo === opcoes.lenght - 1) {
            return opcoes.lenght - 1;
          } else {
            return (focoAntigo += 1);
          }
        });
        break;

      case "ArrowUp":
        e.preventDefault();
        setOpcaoFoco((focoAntigo) => {
          if (!focoAntigo) {
            return 0;
          } else {
            return (focoAntigo -= 1);
          }
        });
        break;

      case "Enter":
        e.preventDefault();
        setOpcaoFoco(null);
        alternarVisibilidade(false);
        setOpcaoSelecionada(opcoes[opcaoFoco]);
        break;

      case "Tab":
        e.preventDefault();
        setOpcaoFoco(null);
        alternarVisibilidade(false);
        break;

      case "Escape":
        e.preventDefault();
        setOpcaoFoco(null);
        alternarVisibilidade(false);
        break;
      default:
        break;
    }
  };

  return (
    <LabelEstilizada>
      {titulo}
      <BotaoEstilizado
        estaAberta={estaAberta}
        onClick={() => alternarVisibilidade(!estaAberta)}
        onKeyDown={manipularLista}
      >
        <div>{opcaoSelecionada ? opcaoSelecionada.text : "Selecione"}</div>
        <div>
          <span>{estaAberta ? "▲" : "▼"}</span>
        </div>
      </BotaoEstilizado>
      {estaAberta && (
        <ListaSuspensaEstilizada>
          {opcoes.map((opcao, index) => (
            <ItemListaSuspensaEstilizado
              key={opcao.value}
              focoAtivo={index === opcaoFoco}
            >
              {opcao.text}
            </ItemListaSuspensaEstilizado>
          ))}
        </ListaSuspensaEstilizada>
      )}
    </LabelEstilizada>
  );
};
