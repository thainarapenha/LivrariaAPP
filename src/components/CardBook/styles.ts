import styled from "styled-components/native";

// exporto o estilo de uma tag personalizada com as caracteristicas
// herdadas da tag original da linguagem
export const ContainerBook = styled.View`
  width: 150px;
  height: 370px;
  align-items: center;
  border-radius: 8px;
  border-width: 1px;
  border-color: ${({theme}) => theme.COLORS.GRAY_100};
  background-color: ${({theme}) => theme.COLORS.WHITE};
`;
export const ImageBook = styled.Image`
  width: 95%;
  height: 200px;
`;
export const TitleBook = styled.Text`
  font-size: ${({theme}) => theme.FONT_SIZE.MD};
  font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
`;
export const DescriptionBook = styled.Text`
  font-size: ${({theme}) => theme.FONT_SIZE.SM};
  font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
`;
export const PriceBook = styled.Text`
  font-size: ${({theme}) => theme.FONT_SIZE.SSM};
  font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
`;
export const ContainerInfo = styled.View`
  width: 145px;
  margin: 5%;
  height: 150px;
  justify-content: space-between;
`;