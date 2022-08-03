import React from "react";
import styled from "@emotion/styled";
import Navigation from "../components/Navigation";

function ProfileEditPage() {
  return (
    <Container>
      <Navigation />
      <MainContainer>
        <EditMenu>
          <MenuList>프로필 편집</MenuList>
        </EditMenu>
        <EditContent>
          <PictureId>
            <UserPic />
            <UserIdEditPic>
              <Nickname>modernAgile_4기</Nickname>
              <PicEditBtn>프로필 사진 바꾸기</PicEditBtn>
            </UserIdEditPic>
          </PictureId>
          <DetailsForm>
            <DetailItem itemName={"이름"} />
            <DetailItem itemName={"사용자 이름"} />
            <DetailItem itemName={"웹 사이트"} />
            <DetailItem itemName={"소개"} />
            <DetailItem itemName={"이메일"} />
            <DetailItem itemName={"전화번호"} />
            <DetailItem itemName={"성별"} />
            <SubmitBtn>제출</SubmitBtn>
          </DetailsForm>
        </EditContent>
      </MainContainer>
    </Container>
  );
}

function DetailItem({ itemName }) {
  return (
    <ItemBox>
      <ItemName>
        <Item htmlFor={itemName}>{itemName}</Item>
      </ItemName>
      <InputBox>
        <ItemInput
          maxLength={itemName === "소개" ? 55 : 25}
          id={itemName}
          className={itemName === "소개" ? "higher" : "default"}
        ></ItemInput>
      </InputBox>
    </ItemBox>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100%;
  background-color: ${({ theme }) => theme.palette.backgroundGrey};
  padding-bottom: 80px;
`;

const MainContainer = styled.div`
  display: flex;
  border: 1px solid ${({ theme }) => theme.palette.borderGrey};
  border-radius: 3px;
  background-color: ${({ theme }) => theme.palette.backgroundWhite};
  margin: 60px auto 0px;
  width: 935px;
  height: 600px;
`;

const EditMenu = styled.ul`
  width: 235px;
  height: 597px;
  background-color: ${({ theme }) => theme.palette.backgroundWhite};
  border-right: 1px solid ${({ theme }) => theme.palette.borderGrey};
`;

const MenuList = styled.li`
  width: 235px;
  height: 52px;
  padding: 16px 16px 16px 30px;
  border-left: 2px solid #262626;
  display: flex;
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.palette.fontBlack};
`;

const EditContent = styled.article`
  width: 698px;
  height: 597px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.palette.backgroundWhite};
`;

const PictureId = styled.div`
  width: 698px;
  height: 42px;
  margin: 33px 0 0;
  display: flex;
`;

const UserPic = styled.div`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  margin: 2px 32px 0 124px;
  background-color: lightgray;
`;

const UserIdEditPic = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const Nickname = styled.h1`
  font-size: 20px;
  font-weight: 400;
`;

const PicEditBtn = styled.button`
  color: ${({ theme }) => theme.palette.btn};
  font-size: 14px;
  font-weight: 700;
`;

const DetailsForm = styled.form`
  width: 700px;
  height: 597px;
  margin: 16px 0;
`;

const ItemBox = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const InputBox = styled.div`
  width: 355px;
`;

const ItemName = styled.aside`
  width: 194px;
  display: flex;
  justify-content: center;
`;

const Item = styled.label`
  width: 130px;
  font-size: 16px;
  font-weight: 600;
  display: flex;
  justify-content: flex-end;
`;

const ItemInput = styled.textarea`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.palette.borderGrey};
  border-radius: 3px;
  padding: 5px 10px;
  line-height: 20px;
  font-size: 16px;

  &:focus {
    border: 2px solid #262626;
  }
  &.default {
    height: 32px;
  }
  &.higher {
    height: 75px;
    vertical-align: top;
  }
`;

const SubmitBtn = styled.div`
  width: 48px;
  height: 30px;
  margin-left: 194px;
  background-color: ${({ theme }) => theme.palette.btn};
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
  &:active {
    background-color: ${({ theme }) => theme.palette.btnHover};
  }
`;

export default ProfileEditPage;
