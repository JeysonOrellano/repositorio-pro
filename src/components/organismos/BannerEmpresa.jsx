import styled from "styled-components";
import { v, CardDatosEmpresa } from "../../index";
export const BannerEmpresa = () => {
  return (
    <Container>
      <div className="content-weapper-context">
        <span className="titulo">
          {<v.iconoempresa></v.iconoempresa>}Nombreee
        </span>
        <div className="contet-text">
          Siempre informado sobre la disponibilidad de productos.
        </div>
        <ContentCards>
          <CardDatosEmpresa titulo="Modeda" valor="S/." />
          <CardDatosEmpresa titulo="Modeda" valor="S/." />
        </ContentCards>
      </div>
      <div className="contentsvg">
        <svg
          className="opacity-0 group-hover:opacity-100 transform-gpu transition-all will-change-auto duration-600 ease-in-out"
          viewBox="0 0 492 253"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_f_934_1718)">
            <path
              d="M436.631 215.884C513.562 314.19 490.786 459.853 385.76 541.232C280.733 622.611 133.227 608.889 56.2961 510.583C-20.6352 412.277 2.14047 266.613 107.167 185.234C212.193 103.855 359.699 117.578 436.631 215.884Z"
              fill="#C300E2"
            ></path>
            <path
              d="M436.631 285.2C513.562 383.506 490.786 529.169 385.76 610.548C280.733 691.927 133.227 678.205 56.2961 579.899C-20.6352 481.593 2.14047 335.93 107.167 254.551C212.193 173.172 359.699 186.894 436.631 285.2Z"
              fill="white"
            ></path>
          </g>
          <defs>
            <filter
              id="filter0_f_934_1718"
              x="-120.728"
              y="0.703659"
              width="734.383"
              height="794.376"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              ></feBlend>
              <feGaussianBlur
                stdDeviation="65.7243"
                result="effect1_foregroundBlur_934_1718"
              ></feGaussianBlur>
            </filter>
          </defs>
        </svg>
      </div>
      <svg
        className="opacity-0 group-hover:opacity-100 transform-gpu transition-all will-change-auto duration-600 ease-in-out"
        viewBox="0 0 492 253"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f_934_1718)">
          <path
            d="M436.631 215.884C513.562 314.19 490.786 459.853 385.76 541.232C280.733 622.611 133.227 608.889 56.2961 510.583C-20.6352 412.277 2.14047 266.613 107.167 185.234C212.193 103.855 359.699 117.578 436.631 215.884Z"
            fill="#C300E2"
          ></path>
          <path
            d="M436.631 285.2C513.562 383.506 490.786 529.169 385.76 610.548C280.733 691.927 133.227 678.205 56.2961 579.899C-20.6352 481.593 2.14047 335.93 107.167 254.551C212.193 173.172 359.699 186.894 436.631 285.2Z"
            fill="white"
          ></path>
        </g>
        <defs>
          <filter
            id="filter0_f_934_1718"
            x="-120.728"
            y="0.703659"
            width="734.383"
            height="794.376"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            ></feBlend>
            <feGaussianBlur
              stdDeviation="65.7243"
              result="effect1_foregroundBlur_934_1718"
            ></feGaussianBlur>
          </filter>
        </defs>
      </svg>
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  border: 0 solid #6b6b6b;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat, repeat;
  border-radius: 14px;
  overflow: hidden;
  .cuadros {
    transition: cubic-bezier(0.4, 0, 0.2, 1) 0.6s;
    position: absolute;
    height: 100%;
    width: 100%;
    svg {
      width: 100%;
      height: 100%;
    }
  }
  .contentsvg {
    transition: cubic-bezier(0.4, 0, 0.2, 1) 0.6s;
    position: absolute;
    height: 100%;
    width: 100%;
    bottom: -500px;
    opacity: 0;
    svg {
      width: 100%;
      height: 100%;
    }
  }
  &:hover {
    .cuadros {
      transform: rotate(37deg) rotateX(5deg) rotateY(12deg) rotate(3deg)
        skew(2deg) skewY(1deg) scaleX(1.2) scaleY(1.2);
    }
    .contentsvg {
      bottom: -100px;
      opacity: 1;
    }
  }
  .content-wrapper-context {
    padding: 20px;
    gap: 10px;
    display: flex;
    flex-direction: column;
    .titulo {
      font-size: 30px;
      font-weight: 700;
      gap: 10px;
      display: flex;
      align-items: center;
    }
    .content-text {
      font-weight: 400;
      font-size: 14px;
      line-height: 1.7em;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`;
const ContentCards = styled.div`
  display: flex;
  gap: 10px;
  padding-top: 15px;
  cursor: pointer;
`;
