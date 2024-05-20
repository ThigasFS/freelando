import { Col, Container, Row } from "react-grid-system";
import { Cabecalho } from "./componentes/Cabecalho";
import { CampoTexto } from "./componentes/CampoTexto";
import { Card } from "./componentes/Card";
import { Estilos } from "./componentes/EstilosGlobais";
import { ProvedorTema } from "./componentes/ProvedorTema";
import { Rodape } from "./componentes/Rodape";
import { Tipografia } from "./componentes/Tipografia";
import { Botao } from "./componentes/Botoes";

function App() {
  return (
    <ProvedorTema>
      <Cabecalho />
      <Estilos />
      <Container style={{ margin: "80px 0" }}>
        <Card>
          <Row justify="center">
            <Col lg={6} md={8} sm={12}>
              <Tipografia variante="h1" componente="h1">
                Freelando
              </Tipografia>
              <Tipografia variante="body" componente="body">
                Crie seu perfil gratuitamente para começar a trabalhar com os
                melhores freelancers. Em seguida, você poderá dar mais detalhes
                sobre suas demandas e sobre sua forma de trabalho.
              </Tipografia>
              <Row>
                <Col lg={12} md={12} sm={12}>
                  <CampoTexto titulo="Nome Completo" />
                </Col>
              </Row>
              <Row>
                <Col lg={4} md={4} sm={4}>
                  <CampoTexto titulo="Estado" />
                </Col>
                <Col lg={8} md={8} sm={8}>
                  <CampoTexto titulo="Cidade" />
                </Col>
              </Row>
              <Row>
                <Col>
                  <CampoTexto titulo="Email" />
                </Col>
              </Row>
              <Row>
                <Col>
                  <CampoTexto titulo="Senha" />
                </Col>
                <Col>
                  <CampoTexto titulo="Repita a senha" />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Botao variante="secundaria">Anterior</Botao>
                </Col>
                <Col>
                  <div style={{ textAlign: "right" }}>
                    <Botao variante="primaria">Próximo</Botao>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Card>
      </Container>
      <Rodape />
    </ProvedorTema>
  );
}

export default App;
