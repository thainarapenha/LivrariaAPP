import styled from "styled-components/native";

export const ContainerFooter = styled.View`
  width: 100%;
  height: 80px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;
export const Copy = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SSM};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;