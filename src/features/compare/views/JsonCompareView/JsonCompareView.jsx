import React, { useState } from "react";
import TextArea from "../../../../common/components/TextArea/TextArea";
import {
  diff,
  addedDiff,
  deletedDiff,
  updatedDiff,
  detailedDiff,
} from "deep-object-diff";
import Title from "../../../../common/components/Title/Title";
import Btn from "../../../../common/components/Button/Button";

const JsonCompareView = () => {
  const [rawJsons, setRawJsons] = useState({
    rawJsonA: "",
    rawJsonB: "",
  });

  const [result, setResult] = useState({
    areEquivalent: false,
    diferences: [],
  });

  const [error, setError] = useState({
    message: "",
    element: "",
  });

  const validateJson = (json, name) => {
    try {
      JSON.parse(json);
      setError({
        message: "",
        element: "",
      });
    } catch (error) {
      console.log(error);
      setError({
        message: error.message,
        element: name,
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setRawJsons({
      ...rawJsons,
      [name]: value,
    });

    validateJson(value, name);
  };

  function processJsons(a, b) {
    const jsonA = JSON.parse(a);
    const jsonB = JSON.parse(b);

    console.log(diff(jsonA, jsonB));

    return {
      areEquivalent: a === b,
      diferences: [diff(jsonA, jsonB)],
    };
  }

  const handleFormat = () => {
    const { rawJsonA, rawJsonB } = rawJsons;

    validateJson(rawJsonA, "rawJsonA");
    validateJson(rawJsonB, "rawJsonB");

    const jsonA = JSON.parse(rawJsonA);
    const jsonB = JSON.parse(rawJsonB);

    const jsonAFormatted = JSON.stringify(jsonA, null, 2);
    const jsonBFormatted = JSON.stringify(jsonB, null, 2);

    const process = processJsons(jsonAFormatted, jsonBFormatted);

    const areEquivalent = process.areEquivalent;

    setRawJsons({
      rawJsonA: jsonAFormatted,
      rawJsonB: jsonBFormatted,
    });

    setResult({
      areEquivalent,
      jsonMap: process.jsonMap,
      diferences: process.diferences,
    });
  };

  return (
    <div
      className="
      h-[calc(100vh-4rem)] max-w-3xl mx-auto
      p-5 flex flex-col align-center"
    >
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100vh",
          justifyContent: "space-between",
        }}
      >
        <section
          style={{
            width: "45%",
            height: "50vh",
          }}
        >
          <TextArea
            name="rawJsonA"
            onChange={handleChange}
            value={rawJsons.rawJsonA}
            error={error.element === "rawJsonA"}
          />
        </section>

        <section
          style={{
            width: "45%",
            height: "50vh",
          }}
        >
          <TextArea
            name="rawJsonB"
            onChange={handleChange}
            value={rawJsons.rawJsonB}
            error={error.element === "rawJsonB"}
          />
        </section>
      </div>

      <Btn onClick={handleFormat}>FORMATEAR Y COMPARAR</Btn>

      <section>
        <div>
          {rawJsons.rawJsonA === "" ||
          rawJsons.rawJsonB === "" ? null : result.areEquivalent ? (
            <span>Los JSON son iguales</span>
          ) : (
            <span>Los JSON son diferentes</span>
          )}
        </div>

        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          {result.diferences.map((diference, index) => (
            <div
              key={index}
              style={{
                height: "100vh",
              }}
            >
              <TextArea
                name={`diference-${index}`}
                value={JSON.stringify(diference, null, 2)}
                error={false}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default JsonCompareView;
