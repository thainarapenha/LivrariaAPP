import LottieView from 'lottie-react-native';
import { Container, Title } from './styles';
import { useContext } from 'react';
import { LoadingTimeSplashContext } from '@contexts/LoadingTimeSplash';

export const Splash = () => {
  const { setFinishSplash } = useContext(LoadingTimeSplashContext);

  const onAnimationFinish = () => {
    setFinishSplash(true);
  };

  return (
    <Container>
      <Title>Meu Livro | Livraria Online</Title>

      <LottieView
        source={require('@assets/json/AnimationSplash.json')}
        autoPlay
        loop={false}
        speed={0.7}
        onAnimationFinish={onAnimationFinish}
      />
    </Container>
  )
}