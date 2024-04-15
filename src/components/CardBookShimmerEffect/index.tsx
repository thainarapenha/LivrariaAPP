import React from "react";
import { ContainerBook, ContainerInfo } from "./styles";
import { Image } from "react-native"


export const CardBookShimmerEffect = () => {
  return (
    <ContainerBook>
      <Image
          source={require('@assets/gif/shimmer.gif')}
          style={{ width: 140, height: 200, marginVertical: 5, borderBottomRightRadius: 4, borderBottomLeftRadius: 4, overlayColor: '#FFF' }}
        />

      <ContainerInfo>
        <Image
          source={require('@assets/gif/shimmer.gif')}
          style={{ width: 140, height: 20, marginVertical: 5, borderRadius: 4, overlayColor: '#FFF' }}
        />

        <Image
          source={require('@assets/gif/shimmer.gif')}
          style={{ width: 140, height: 40, marginVertical: 5, borderRadius: 4,  overlayColor: '#FFF' }}
        />
        
        <Image
          source={require('@assets/gif/shimmer.gif')}
          style={{ width: 40, height: 20, marginVertical: 5, borderRadius: 4,  overlayColor: '#FFF' }}
        />

        <Image
          source={require('@assets/gif/shimmer.gif')}
          style={{ width: 140, height: 20, marginVertical: 5, borderRadius: 4,  overlayColor: '#FFF' }}
        />
      </ContainerInfo>
    </ContainerBook>
  );
}