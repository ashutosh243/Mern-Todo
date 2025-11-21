import { Container } from "@mui/material";
import { TaskManager } from "./components/TaskManager";
import { Nav } from "./components/Nav";
import './App.css';

const App = () => {
  return (
    <>
      <Nav />
      <Container maxWidth="lg">
        <TaskManager />
      </Container>
    </>
  );
};

export default App;