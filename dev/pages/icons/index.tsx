import { CIcon } from "@/components/CIcon";
import { Component } from "solid-js";

const icons: Component<{}> = (props) => {
  return (
    <div>
      <CIcon>mdi:home</CIcon>
      <CIcon width="48" height="48">mdi:search</CIcon>
    </div>
  );
};

export default icons;
