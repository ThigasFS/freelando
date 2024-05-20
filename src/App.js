import { Cabecalho } from "./componentes/Cabecalho";
import { CampoTexto } from "./componentes/CampoTexto";
import { Card } from "./componentes/Card";
import { Estilos } from "./componentes/EstilosGlobais";
import { ProvedorTema } from "./componentes/ProvedorTema";
import { Rodape } from "./componentes/Rodape";
import { Tipografia } from "./componentes/Tipografia";

function App() {
  return (
    <ProvedorTema>
      <Cabecalho />
      <Estilos />
      <Card>
        <Tipografia variante="h1" componente="h1">
          Freelando
        </Tipografia>
        <Tipografia variante="body" componente="body">
          Crie seu perfil gratuitamente para começar a trabalhar com os melhores
          freelancers. Em seguida, você poderá dar mais detalhes sobre suas
          demandas e sobre sua forma de trabalho.
        </Tipografia>

        <CampoTexto titulo="Nome Completo" />
      </Card>
      <Rodape />
    </ProvedorTema>
  );
}

export default App;
