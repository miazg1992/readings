import monster1S from 'assets/img/monster1_640.png';
import { Wrapper } from './Monster.styles';

const Monster = () => {
  return (
    <Wrapper>
      <h1>Czytaj razem z nami</h1>
      <img src={monster1S}></img>
    </Wrapper>
  );
};

export default Monster;
