import { useState } from "react";
import PostAfterSelect from "../components/Post/PostAfterSelect";
import PostBeforeSelect from "../components/Post/PostBeforeSelect";
import { ReactComponent as ExitBtn } from "../assets/exitButton.svg";
import {
  ExitBtnWrap,
  Background,
  Wrap,
  Header,
  H1,
} from "../styles/Post/PostModalStyle";

function PostModal({ setShowModal }) {
  const [imgSrc, setImgSrc] = useState({ files: [], URLForShow: "" });

  // const [imgSrc, setImgSrc] = useState("");
  const [selected, setSelected] = useState(false);
  const onClose = () => setShowModal(false);
  const stopBubble = (e) => e.stopPropagation();

  const Container = ({ children }) => (
    <Background onClick={onClose}>
      <ExitBtnWrap>
        <ExitBtn />
      </ExitBtnWrap>
      <Wrap onClick={stopBubble}>
        <Header>
          <H1> 새 게시물 만들기</H1>
        </Header>
        {children}
      </Wrap>
    </Background>
  );

  return (
    <>
      {selected ? (
        <Container>
          <PostAfterSelect imgSrc={imgSrc} setShowModal={setShowModal} />
        </Container>
      ) : (
        <Container>
          <PostBeforeSelect setImgSrc={setImgSrc} setSelected={setSelected} />
        </Container>
      )}
    </>
  );
}

export default PostModal;
