import "@mantine/core/styles.css";

import { MantineProvider, Title } from "@mantine/core";
import { Test } from "./components/Test";

export default function App() {
  return (
    <MantineProvider>
      <>
        <Title>WTB</Title>
        <Test />
      </>
    </MantineProvider>
  );
}
