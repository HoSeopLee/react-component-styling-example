import styled from 'styled-components';

const StyledA = styled.a.attrs((props) => ({
  target: '_BLACK',
}))`
  color: ${(props) => props.color};
`;

export default StyledA;
