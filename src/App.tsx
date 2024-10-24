import "@mantine/core/styles.css";

import { MantineProvider, Title } from "@mantine/core";
import { AiChat } from "./components";

export default function App() {
  return (
    <MantineProvider>
      <>
        <Title>Play</Title>
        <AiChat />
      </>
    </MantineProvider>
  );
}
