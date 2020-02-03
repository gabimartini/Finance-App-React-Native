import styled from 'styled-components/native';

export const Container = styled.View`
  flex:1;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 30px;
  color: #222;
  margin-bottom: 20px;
`;

export const Name = styled.Text`
  font-size: 20px;
  color: #222;
  margin-bottom: 20px;
`;

export const LogoutButton = styled.TouchableOpacity`
  width: 30%;
  height: 35px;
  background-color: #ef473a;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`;

export const LogoutText = styled.Text`
  color: #FFF
`;
