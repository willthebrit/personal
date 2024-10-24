import React from "react";

export const useAiChat = () => {
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

  return {
    data,
    fetching,
    handleOnClick,
    question,
    setQuestion
  };
};
