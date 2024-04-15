import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.YELLOW};
`;
export const Title = styled.Text`
  margin: 5% 0;
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;
export const TextRecoveryPass = styled.Text`
  margin: 5% 0;
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: ${({ theme }) => theme.FONT_SIZE.SSM};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  text-decoration-line: underline;
`;
export const InputName = styled.TextInput`
  width: 90%;
  height: 56px;
  margin: 2% 0;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};;
`;
export const InputPassword = styled.TextInput`
  width: 90%;
  height: 56px;
  margin: 2% 0;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};;
`;
export const TextButton = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.MEDIUM};
`;
export const ButtonLogin = styled.TouchableOpacity`
  width: 90%;
  height: 56px;
  margin: 2% 0;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.COLORS.BLACK};
`;