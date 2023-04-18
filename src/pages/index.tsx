import Image from "next/image";

import { HomeContainer, Product } from "../styles/pages/home";

import camiseta1 from '../assets/camisetas/camiseta1.png';
import camiseta2 from '../assets/camisetas/camiseta2.png';
import camiseta3 from '../assets/camisetas/camiseta3.png';

export default function Home() {
  return (
    <HomeContainer>
      <Product>
        <Image src={camiseta1} width={520} height={480} alt="imagem do produto"/> 

        <footer>
          <strong>Camiseta x</strong>
          <span>R$ 79,00</span>
        </footer>
      </Product>
      <Product>
        <Image src={camiseta2} width={520} height={480} alt="imagem do produto"/> 

        <footer>
          <strong>Camiseta x</strong>
          <span>R$ 79,00</span>
        </footer>
      </Product>
      <Product>
        <Image src={camiseta3} width={520} height={480} alt="imagem do produto"/> 

        <footer>
          <strong>Camiseta x</strong>
          <span>R$ 79,00</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}
