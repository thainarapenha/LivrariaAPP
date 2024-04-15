import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;
export const Text = styled.Text`
  margin: 15% 5% 0 5%;
  color: ${({ theme }) => theme.COLORS.BLACK};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL};
  font-family: ${({ theme }) => theme.FONT_FAMILY.MEDIUM};
`;
export const SearchContainer = styled.View`
  width: 100%;
  height: 50px;
  padding: 0 14px;
  flex-direction: row;
  align-items: center;
  margin-bottom: 8px;
`;
export const InputBook = styled.TextInput`
  width: 85%;
  height: 50px;
  border-radius: 16px;
  padding: 15px;
  margin-bottom: 2%;
  border-width: 1px;
  color: ${({ theme }) => theme.COLORS.BLACK};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM};
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
`;
export const SearchButton = styled.TouchableOpacity`
  width: 15%;
  height: 50px;
  align-items: center;
  justify-content: center;
`;
export const BannerApp = styled.Image`
  height: 130px;
  margin: 0 5%;
  border-radius: 8px;
`;
export const ScrollContainer = styled.ScrollView`
`;
export const Title = styled.Text`
  margin: 3% 6% 2% 6%;
  font-size: ${({ theme }) => theme.FONT_SIZE.LG};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;
export const DivShimmerEffect = styled.View`
  flex-direction: row;
  margin: 5% 0 50% 5%;
`;