import styled from 'styled-components';

export const VideoCardContainer = styled.a`
  border: 0;
  
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 298px;
  width: 298px;
  height: 197px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
 
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 16px;
  --moz-transition: all 0.3s;
  --webkit-transition: all 0.3s;;

  transition: all .3s;
  &:hover,
  &:focus {
    
    margin-left: 16px;
    margin-right: 16px;
    --moz-transform: scale(1.1);
    --webkit-transform: scale(1.1);
    transform: scale(1.1);
    opacity: .5s;
    
  }
  
  &:not(:first-child) {
    margin-left: 20px;
  }
`;
