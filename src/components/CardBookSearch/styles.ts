import styled from "styled-components/native";

export const ContainerBook = styled.TouchableOpacity`
  width: 95%;
  height: 170px;
  margin: 5px 0;
  padding: 0 1%;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  border-radius: 4px;
  border-width: 2px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_100};
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;
export const ImageBook = styled.Image`
  width: 30%;
  height: 150px;
  border-radius: 4px;
`;
export const ContainerInfo = styled.View`
  width: 65%;
  height: 150px;
  justify-content: space-between;
`;
export const TitleBook = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;
export const DescriptionBook = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SSM};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;
export const PriceBook = styled.Text`
  margin: 3% 0;
  font-size: ${({ theme }) => theme.FONT_SIZE.SSM};
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