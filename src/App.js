import React, { useState } from 'react';
import styled from '@emotion/styled';

import Header from './componentes/Header';
import Formulario from './componentes/Formulario';
import Resumen from './componentes/Resumen.js';
import Resultado from './componentes/Resultado';
import Spinner from './componentes/Spinner';

const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ContenedorFormulario = styled.div`
  background-color: #FFF;
  padding: 3rem;
`;

function App() {

  const [ resumen, guardarResumen ] = useState({
    cotizacion: 0,
    datos: {
      marca: "",
      year: "",
      plan: ""
    }
  });

  const [ cargando, guardarCargando ] = useState(false);

  // extraer datos
  const { cotizacion, datos } = resumen;

  return (
    <Contenedor>
      <Header 
        titulo="Cotizador de seguros"
      />

      <ContenedorFormulario>
        <Formulario
          guardarResumen={guardarResumen}
          guardarCargando={guardarCargando}
        />
        
        { cargando ? <Spinner /> : null }

        <Resumen 
          datos={datos}
        />

        { !cargando ? 
          <Resultado 
            cotizacion={cotizacion}
          /> : null
        }
        
      </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;
