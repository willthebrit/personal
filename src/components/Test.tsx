import React from "react";

export const Test = () => {
  React.useEffect(() => {
    const getTest = async () => {
      const testData = await fetch("/api/test");
      const testJson = await testData.json();
      console.log(testJson);
    };

    getTest();
  }, []);

  return <p>hello</p>;
};
