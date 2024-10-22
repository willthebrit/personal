import React from "react";

export const Test = () => {
  const [data, setData] = React.useState("");

  React.useEffect(() => {
    const getAi = async () => {
      const testData = await fetch("/api/ai");
      const response = await testData.json();
      setData(response);
    };

    getAi();
  }, []);

  return <p>hello {data}</p>;
};
