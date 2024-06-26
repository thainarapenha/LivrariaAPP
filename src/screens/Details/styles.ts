import styled from "styled-components/native";

export const ContainerDetails = styled.View`
  flex: 1;
  align-items: center;
`;

export const Header = styled.View`
  z-index: 99;
  position: absolute;
  top: 4%;
  width: 100%;
  padding: 0 5%;
  flex-direction: row;
  justify-content: space-between;
`;
export const HeaderButton = styled.TouchableOpacity`
  width: 46px;
  height: 46px;
  border-radius: 24px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.BLACK};
`;