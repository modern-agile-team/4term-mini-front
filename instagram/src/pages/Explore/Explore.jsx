import Navigation from "../../components/Navigation";
import { Body, Container, Image, ImageBox } from "./style";

function Explore() {
  return (
    <>
      <Navigation />
      <Body>
        <Container>
          <ImageBox>
            <Image></Image>
            <Image></Image>
            <Image></Image>
          </ImageBox>
          <ImageBox>
            <Image></Image>
            <Image></Image>
            <Image></Image>
          </ImageBox>
          <ImageBox>
            <Image></Image>
            <Image></Image>
          </ImageBox>
        </Container>
      </Body>
    </>
  );
}

export default Explore;
