import React from 'react';

import {Container, TipoText, ValorText} from './styles';

export default function HistoricoList({ data }){
  return(
    <Container>
      <TipoText tipo={data.tipo}>{data.tipo}</TipoText>
      <ValorText>R$ {data.valor}</ValorText>
    </Container>
  )
}