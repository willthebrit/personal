import "@mantine/core/styles.css";

import { MantineProvider, Title } from "@mantine/core";
import { Ai } from "./components/Ai";

export default function App() {
  return (
    <MantineProvider>
      <>
        <Title>WTB</Title>
        <Ai />
      </>
    </MantineProvider>
  );
}
