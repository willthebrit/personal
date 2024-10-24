import { Button, Center, Stack, TextInput } from "@mantine/core";
import { useAiChat } from "./useAiChat";

export const AiChat = () => {
  const { data, fetching, handleOnClick, question, setQuestion } = useAiChat();

  return (
    <Center>
      <Stack m={"md"} justify="center" w={"50%"}>
        <TextInput
          autoFocus
          disabled={fetching}
          maxLength={100}
          placeholder="Ask a question..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <Button loading={fetching} onClick={handleOnClick}>
          Ask AI
        </Button>
        <p>{data}</p>
      </Stack>
    </Center>
  );
};
