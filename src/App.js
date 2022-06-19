import styled from 'styled-components';

const Flexer = styled.div`
  display: flex;
`;

const Box = styled.div`
  background-color: ${(props) => props.backgroundColor};
  width: 100px;
  height: 100px;
`;

// 컴포넌트끼리 스타일 상속
const Circle = styled(Box)`
  border-radius: 50%;
`;

function App() {
  return (
    <Flexer>
      <Box backgroundColor="teal" />
      <Circle backgroundColor="tomato" />
    </Flexer>
  );
}

export default App;
