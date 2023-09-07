import styled from "@emotion/styled";

function HomePage() {
  return (
    <HomePageStyled>
      <div className="gravityButton">
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="48"
            viewBox="0 -960 960 960"
            width="48"
          >
            <path d="M480.156-255.846q-63.925 0-123.359 22.201-59.435 22.202-112.951 65.908 1.539 8.102 8.077 13.804t15.769 6.164h424.616q8.461-.462 15-6.164 6.538-5.702 8.846-14.569-52.656-42.941-112.422-65.143-59.767-22.201-123.576-22.201Zm-.141-43.769q72.368 0 135.439 24.086Q678.525-251.442 731.231-212v-575.616q0-9.23-7.692-16.923-7.693-7.692-16.923-7.692H253.384q-9.23 0-16.923 7.692-7.692 7.693-7.692 16.923V-212q52.715-39.442 115.796-63.529 63.081-24.086 135.45-24.086Zm1.098-114.077q-35.998 0-59.824-23.945-23.827-23.945-23.827-59.558t23.944-59.44q23.945-23.827 59.558-23.827t59.44 24.105q23.827 24.105 23.827 59.013 0 35.998-24.105 59.825-24.105 23.827-59.013 23.827ZM253.384-104q-27.782 0-48.083-20.301T185-172.384v-615.232q0-27.782 20.301-48.083T253.384-856h453.232q27.782 0 48.083 20.301T775-787.616v615.232q0 27.782-20.301 48.083T706.616-104H253.384Zm227.947-265.923q53.037 0 89.853-37.301Q608-444.525 608-497.562q0-53.036-36.816-89.853-36.816-36.816-89.853-36.816-53.037 0-90.338 36.816-37.301 36.817-37.301 89.853 0 53.037 37.301 90.338 37.301 37.301 90.338 37.301ZM480-497.462Z" />
          </svg>
        </button>
      </div>{" "}
      <button>B</button>
      <button>C</button>
    </HomePageStyled>
  );
}

const HomePageStyled = styled.div`
  box-sizing: border-box;
  margin: 0;
  background-color: #111;
  color: #fff;
  min-height: 100vh;
  display: flex;
  place-items: center;
  justify-content: center;

  .gravityButton {
    display: grid;
    place-items: center; //Cette propriété est un raccourci pour align-items et justify-items dans le contexte d'une grille. Elle centre les éléments enfants de la grille à la fois horizontalement et verticalemen
    width: 192px;
    aspect-ratio: 1; //Cette propriété définit le rapport d'aspect de l'élément, c'est-à-dire le rapport entre sa largeur et sa hauteur. Un aspect-ratio de 1 signifie que la largeur et la hauteur seront toujours égales, ce qui donnera une forme carrée. C'est une propriété relativement nouvelle et pourrait ne pas être prise en charge dans tous les navigateurs (en particulier les anciennes versions).
    border-radius: 50%;
  }
`;

export default HomePage;
