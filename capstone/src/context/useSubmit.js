import React, { useState } from "react";

export default function useSubmit() {
  const [isLoading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const submit = async (data) => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setResponse({
      type: "success",
      message: `Thanks for your reservation`,
    });
    setLoading(false);
  };

  return { isLoading, response, submit };
}
