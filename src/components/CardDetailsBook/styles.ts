import styled from "styled-components/native";

export const ContainerBook = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
  border-radius: 4px;
`;
export const ContainerText = styled.View`
  z-index: 99;
  top: 450px;
  position: absolute;
  border-top-right-radius: 50px;
  border-top-left-radius: 50px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};

`;
export const ImageBook = styled.Image`
  width: 100%;
  height: 500px;
`;
export const ContainerInfo = styled.View`
  height: 350px;
  margin: 5%;
  justify-content: space-between;

`;
export const TitleBook = styled.Text`
  margin: 2% 0;
  color: ${({ theme }) => theme.COLORS.BLACK};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;
export const ScrollDescription = styled.ScrollView`
`;
export const DescriptionBook = styled.Text`
  margin: 2% 0;
  color: ${({ theme }) => theme.COLORS.BLACK};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;
export const PriceBook = styled.Text`
  padding: 3% 0;
  color: ${({ theme }) => theme.COLORS.BLACK};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;
export const ButtonCart = styled.TouchableOpacity`
  padding: 3%;
  margin: 2% 0;
  border-radius: 4px;
  align-items: center;
  font-size: ${({ theme }) => theme.FONT_SIZE.SM};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  background-color: ${({ theme }) => theme.COLORS.YELLOW};
`;