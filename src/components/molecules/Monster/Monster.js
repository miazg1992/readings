import monster1S from 'assets/img/monster1_640.png';
import { Wrapper } from './Monster.styles';

const Monster = () => {
  return (
    <Wrapper>
      {/* <h2>Czytaj razem z nami...</h2> */}
      <img src={monster1S}></img>
    </Wrapper>
  );
};

export default Monster;
