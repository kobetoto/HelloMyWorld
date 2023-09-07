import styled from "@emotion/styled";
import { gsap } from "gsap";
import { useEffect } from "react";

function Presentation() {
  useEffect(() => {
    // votre code qui manipule le DOM ici
    const items = document.querySelectorAll(".item");

    const expand = (item, i) => {
      items.forEach((it, ind) => {
        if (i === ind) return;
        it.clicked = false;
      });
      gsap.to(items, {
        width: item.clicked ? "15vw" : "8vw",
        duration: 2,
        ease: "elastic(1, .6)",
      });

      item.clicked = !item.clicked;
      gsap.to(item, {
        width: item.clicked ? "42vw" : "15vw",
        duration: 2.5,
        ease: "elastic(1, .3)",
      });
    };

    items.forEach((item, i) => {
      item.clicked = false;
      item.addEventListener("click", () => expand(item, i));
    });
  }, []);

  return (
    <PresentationStyled>
      <h1>My Work</h1>
      <div className="group">
        <div
          className="item"
          style={{
            backgroundImage:
              "url(https://cdn.discordapp.com/attachments/1084937735581741116/1149282289772154921/Screenshot_2023-09-07_at_11.48.53_AM.png)",
          }}
        ></div>
        <div
          className="item"
          style={{
            backgroundImage:
              "url(https://cdn.discordapp.com/attachments/1084937735581741116/1149282342855245865/Screenshot_2023-09-01_at_2.12.20_PM.png)",
          }}
        ></div>
        <div
          className="item"
          style={{
            backgroundImage:
              "url(https://cdn.discordapp.com/attachments/1084937735581741116/1149282467577081936/Screenshot_2023-09-07_at_11.50.51_AM.png)",
          }}
        ></div>
      </div>
    </PresentationStyled>
  );
}

const PresentationStyled = styled.div`
  body {
    height: 100%;
    display: flex;
    margin: 0;
    background: linear-gradient(135deg, #295fd5, #9d8ce0);
    align-items: center;
    justify-content: center;
    user-select: none;
  }

  h1 {
    color: white;
    font-family: sans-serif;
  }

  .group {
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
  }

  .item {
    width: 15vw;
    height: 75vh;
    background-position: center;
    background-repeat: no-repeat;

    background-size: 75vh;
    margin: 1vw;
    border-radius: 3vw;
    display: inline-block;
    cursor: pointer;
  }
`;
export default Presentation;
