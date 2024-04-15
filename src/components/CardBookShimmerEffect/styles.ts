import styled from "styled-components/native";

export const ContainerBook = styled.TouchableOpacity`
  width: 150px;
  height: 370px;
  margin: 0 5px;
  align-items: center;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;
export const ContainerInfo = styled.View`
  height: 150px;
  margin: 5%;
  justify-content: space-between;
`;