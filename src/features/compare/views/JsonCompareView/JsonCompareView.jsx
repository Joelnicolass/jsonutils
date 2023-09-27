import React, { useState } from "react";
import TextArea from "../../../../common/components/TextArea/TextArea";
import { Button } from "@nextui-org/react";
import {
  diff,
  addedDiff,
  deletedDiff,
  updatedDiff,
  detailedDiff,
} from "deep-object-diff";
import Title from "../../../../common/components/Title/Title";

const JsonCompareView = () => {
  const [rawJsons, setRawJsons] = useState({
    rawJsonA: "",
    rawJsonB: "",
  });

  const [result, setResult] = useState({
    areEquivalent: false,
    jsonMap: "",
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

    const { added, deleted, updated } = detailedDiff(jsonA, jsonB);

    const diferences = [];

    if (Object.keys(added).length > 0) {
      diferences.push("ADDED");
      diferences.push(JSON.stringify(added, null, 2));
    }

    if (Object.keys(deleted).length > 0) {
      diferences.push("DELETED");
      diferences.push(JSON.stringify(deleted, null, 2));
    }

    if (Object.keys(updated).length > 0) {
      diferences.push("UPDATED");
      diferences.push(JSON.stringify(updated, null, 2));
    }

    const diferencesFormatted = diferences.map((line) => {
      if (line.includes("ADDED")) {
        return `<span id="$dif$" style="color: green">${line}</span>`;
      }

      if (line.includes("DELETED")) {
        return `<span id="$dif$" style="color: red">${line}</span>`;
      }

      if (line.includes("UPDATED")) {
        return `<span id="$dif$" style="color: blue">${line}</span>`;
      }

      return line;
    });

    return {
      areEquivalent: a === b,
      jsonMap: diferencesFormatted.join("\n"),
      diferences: diferencesFormatted,
    };
  }

  const toTextPlain = (text) => text.replace(/<[^>]*>?/gm, "");

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
    <div className="min-h-full min-w-full p-5 flex flex-col align-center">
      <div
        style={{
          display: "flex",
          width: "100%",
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
      <Button onClick={handleFormat}>FORMATEAR Y COMPARAR</Button>

      <section>
        <div>
          {result.areEquivalent ? (
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
          <div
            dangerouslySetInnerHTML={{
              __html: result.diferences.join("\n"),
            }}
            style={{
              width: "100%",
              height: "100%",
              overflow: "scroll",
            }}
          />
        </div>
      </section>
    </div>
  );
};

export default JsonCompareView;
