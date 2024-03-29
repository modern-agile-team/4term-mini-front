import styled from "@emotion/styled";

export const Container = styled.div`
  position: relative;
  display: flex;
  height: 100%;
`;

export const SelectedImg = styled.img`
  width: 550px;
  border-bottom-left-radius: 12px; ;
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 339px;
  height: 100%;
  margin: 0px 10px;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
`;

export const UserImage = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50px;
  object-fit: cover;
`;

export const Nickname = styled.div`
  font-weight: bold;
  margin: 0px 10px;
`;

export const Content = styled.div`
  width: 100%;
  height: 200px;
`;

export const Input = styled.textarea`
  width: 100%;
  height: 100%;
`;

export const SubmitBtn = styled.button`
  ${({ theme }) => `
  background: ${theme.palette.backgroundWhite};
  color: ${theme.palette.btn};
  `}
  position: absolute;
  bottom: 5px;
  right: 10px;
  height: 20px;
  margin: 10px 5px;
  font-weight: bold;
  font-size: 1em;
`;
