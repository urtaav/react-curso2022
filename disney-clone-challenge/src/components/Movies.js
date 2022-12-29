import React from "react";
import styled from "styled-components";

const Movies = () => {
  return (
    <Container>
      <h4>Recommended for You</h4>
      <Content>
        <Wrap>
          <img
            src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6EA416AD3B15FCC1BADC817A932A57FFF707556DB2233FFCB4CFEB7C8EEDE23C/scale?width=400&aspectRatio=1.78&format=jpeg"
            alt="img"
          />
        </Wrap>
        <Wrap>
          <img
            src="https://cnbl-cdn.bamgrid.com/assets/1742d878d2d5475eae2afba94902b3b41b313fe1f0897579c3293c5b82c70693/original"
            alt="img"
          />
        </Wrap>

        <Wrap>
          <img
            src="https://cnbl-cdn.bamgrid.com/assets/3b3873e224ad242c3881403e14bac752101fe4658900f5bb23b0eaab77313797/original"
            alt="img"
          />
        </Wrap>
        <Wrap>
          <img
            src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6EA416AD3B15FCC1BADC817A932A57FFF707556DB2233FFCB4CFEB7C8EEDE23C/scale?width=400&aspectRatio=1.78&format=jpeg"
            alt=""
          />
        </Wrap>
        <Wrap>
          <img
            src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6EA416AD3B15FCC1BADC817A932A57FFF707556DB2233FFCB4CFEB7C8EEDE23C/scale?width=400&aspectRatio=1.78&format=jpeg"
            alt=""
          />
        </Wrap>
        <Wrap>
          <img
            src="https://cnbl-cdn.bamgrid.com/assets/a9e8fe82e3d2a81fa793d646a0807bf8a676cf2e44fd373967b79ba6ac4fac52/original"
            alt=""
          />
        </Wrap>
        <Wrap>
          <img
            src="https://cnbl-cdn.bamgrid.com/assets/24069b782e1b1531b7197153b6ac1819191ca448aa4576cdd3767fa47270aae3/original"
            alt=""
          />
        </Wrap>
        <Wrap>
          <img
            src="https://cnbl-cdn.bamgrid.com/assets/ac915426b021288c04f8908ce12d080dcd70953fe0fac328383c7d5e3a253843/original"
            alt=""
          />
        </Wrap>
      </Content>
    </Container>
  );
};

export default Movies;

const Container = styled.div``;

const Content = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
`;

const Wrap = styled.div`
  border-radius: 10px;
  cursor: pointer;
  overflow: hidden;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &:hover {
    transform: scale(1.05);
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    border-color: rgba(249, 249, 249, 0.8);
  }
`;
