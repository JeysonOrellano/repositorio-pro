import styled, { ThemeProvider } from "styled-components";
import { AuthContextProvider, Dark, Light,Sidebar} from "./index";
import { MyRoutes } from "./routes/routes";
import { createContext, useState } from "react";
import { Device } from "./styles/breackpoints";

export const ThemeContext = createContext();

function App() {
  const [themeuse, setTheme] = useState("dark");
  const theme = themeuse === "light" ? "light" : "dark";
  const themaStyle = theme === "light" ? Light : Dark;
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <ThemeProvider theme={themaStyle}>
          <AuthContextProvider>
            <Container className={sidebarOpen ? "active" : ""}>
              <section className="ContentSidebar"><Sidebar state={sidebarOpen}/></section>
              <section className="ContentMenuAmbur">Menu</section>
              <section className="ContentRoutes">
                <MyRoutes />
              </section>
            </Container>
          </AuthContextProvider>
        </ThemeProvider>
      </ThemeContext.Provider>
    </>
  );
}

const Container = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  background-color: ${({ theme }) => theme.bgtotal};

  .ContentSidebar {
    display: none;
  }

  .ContentMenuAmbur {
    display: block;
    position: absolute;
    left: 20px;
  }

  @media ${Device.tablet} {
    grid-template-columns: 65px 1fr;
    &.active {
      grid-template-columns: 220px 1fr;
    }
    .ContentSidebar {
      display: initial;
    }
    .ContentMenuAmbur {
      display: none;
    }
    .ContentRoutes {
      grid-column: 1;
      width: 100%;

      @media${Device.table} {
        grid-column: 2;
      }
    }
  }
`;

export default App;
