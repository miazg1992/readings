import { Images, Wrapper } from './TaskStatus.styles';
import running from 'assets/img/running.png';
import monster from 'assets/img/running-monster.png';
import correctMonster from 'assets/img/running-monster.png';
export const TaskStatus = ({ taskStatus }) => {
  //   const imgMonster = `${taskStatus}Monster`;

  const createImgName = () => {
    switch (taskStatus) {
      case 'INPROGRESS':
        return 'inprogress';
      case 'TODO':
        return 'inprogress';
      case 'CORRECTANSWER':
        return 'correct';
      case 'INCORRECTANSWER':
        return 'incorrect';
    }
  };
  const imgName = createImgName();
  return (
    <Wrapper>
      {/* {() => {
        switch (taskStatus) {
          case 'CORRECTANSWER':
            return <img src={monster} alt="" />;
          case 'INCORRECTANSWER':
            return <img src={monster} alt="" />;
          default:
            return <img src={monster} alt="" />;
        }
      }} */}
      <Images>
        <img
          src={`${process.env.PUBLIC_URL}assets/img/${imgName}-monster.gif`}
        ></img>
        <img src={`${process.env.PUBLIC_URL}assets/img/${imgName}.png`}></img>
      </Images>
    </Wrapper>
  );
};
