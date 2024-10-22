import React from "react";

export const Test = () => {
  const [data, setData] = React.useState({ test: "" });

  React.useEffect(() => {
    const getTest = async () => {
      const testData = await fetch("/api/test");
      const response = await testData.json();
      setData(response);
    };

    getTest();
  }, []);

  return <p>hello {data.test}</p>;
};
