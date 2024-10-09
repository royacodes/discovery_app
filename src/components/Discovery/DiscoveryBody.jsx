import React from "react";
import CardItem from "./CardItem";
import SearchBar from "../SearchBar/SearchBar";

const DiscoveryBody = () => {
  return (
    <>
      <SearchBar />
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:mt-4 sm:pt-4 pt-4 justify-center">
        <CardItem
          id={1}
          title="test"
          description="this is a description test"
          price="10"
          handleClick={() => {}}
        />
        <CardItem
          id={1}
          title="test"
          description="this is a description test"
          price="10"
          handleClick={() => {}}
        />
        <CardItem
          id={1}
          title="test"
          description="this is a description test"
          price="10"
          handleClick={() => {}}
        />
        <CardItem
          id={1}
          title="test"
          description="this is a description test"
          price="10"
          handleClick={() => {}}
        />
        <CardItem
          id={1}
          title="test"
          description="this is a description test"
          price="10"
          handleClick={() => {}}
        />
        <CardItem
          id={1}
          title="test"
          description="this is a description test"
          price="10"
          handleClick={() => {}}
        />
      </div>
    </>
  );
};

export default DiscoveryBody;
