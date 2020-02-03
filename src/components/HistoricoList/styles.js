import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #FFF;
  margin-bottom: 12px;
  padding: 7px;
  border-radius: 5px;
  z-index: 3;
  box-shadow: 2px 2px rgba(0,0,0, 0.4);
`;

export const TipoText = styled.Text`
  color: ${props => props.tipo === 'despesa' ? '#ef473a' : '#049301' };
  font-size: 15px;
`;

export const ValorText = styled.Text`
  color: #222;
  font-size: 20px;
  font-weight: bold;
`;