import { Button, Center, Stack, TextInput } from "@mantine/core";
import React from "react";

export const Ai = () => {
  const [data, setData] = React.useState("");
  const [question, setQuestion] = React.useState("");
  const [fetching, setFetching] = React.useState(false);

  const handleOnClick = async () => {
    setFetching(true);
    const body = { question };
    const aiResponse = await fetch("/api/ai", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    }).finally(() => setFetching(false));

    const data = await aiResponse.json();
    setData(data.response);
  };

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
        <div>{data}</div>
      </Stack>
    </Center>
  );
};
