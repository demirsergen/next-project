import React from "react";
import Image from "next/image";
import Link from "next/link";

const Results = ({ results }) => {
  console.log(results);
  return (
    <div className="container flex flex-wrap align-center justify-between">
      {results.map((result) => (
        <div key={result.property_id} className="p-2 mx-auto border-2 w-64">
          <Image
            src={result.photos ? result.photos[0].href : result.thumbnail}
            alt="home-image"
            width={200}
            height={200}
          />
          <h4>
            {result.prop_status === "for_sale" ? "$" + result.price : null}
          </h4>
          <a href={result.rdc_web_url} target="_blank" rel="noreferrer">
            Check out property
          </a>

          <p>{`${result.beds} beds ${result.baths} baths`}</p>
          <p>{result.address.line}</p>
        </div>
      ))}
    </div>
  );
};

export default Results;
