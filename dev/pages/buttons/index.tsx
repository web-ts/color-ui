import { CButton } from "@/components/CButton/CButton";
import { Component } from "solid-js";

const buttons: Component<{}> = (props) => {
  return (
    <div class="flex flex-col gap-4 p-2">
      <h1>Buttons</h1>
      <div class="flex gap-4">
        <CButton>Test</CButton>
        <CButton variant="outline">Test</CButton>
        <CButton variant="text">Test</CButton>
      </div>
      <div class="flex gap-4">
        <CButton color="secondary">Test</CButton>
        <CButton color="secondary" variant="outline">
          Test
        </CButton>
        <CButton color="secondary" variant="text">
          Test
        </CButton>
      </div>
      <div class="flex gap-4">
        <CButton color="tertiary">Test</CButton>
        <CButton color="tertiary" variant="outline">
          Test
        </CButton>
        <CButton color="tertiary" variant="text">
          Test
        </CButton>
      </div>
      <div class="flex gap-4">
        <CButton color="success">Test</CButton>
        <CButton color="success" variant="outline">
          Test
        </CButton>
        <CButton color="success" variant="text">
          Test
        </CButton>
      </div>
      <div class="flex gap-4">
        <CButton color="info">Test</CButton>
        <CButton color="info" variant="outline">
          Test
        </CButton>
        <CButton color="info" variant="text">
          Test
        </CButton>
      </div>
      <div class="flex gap-4">
        <CButton color="warning">Test</CButton>
        <CButton color="warning" variant="outline">
          Test
        </CButton>
        <CButton color="warning" variant="text">
          Test
        </CButton>
      </div>
      <div class="flex gap-4">
        <CButton color="danger">Test</CButton>
        <CButton color="danger" variant="outline">
          Test
        </CButton>
        <CButton color="danger" variant="text">
          Test
        </CButton>
      </div>

      <div class="flex gap-4 items-baseline">
        <CButton size="xs">Test</CButton>
        <CButton size="sm">Test</CButton>
        <CButton size="md">Test</CButton>
        <CButton size="lg">Test</CButton>
        <CButton size="xl">Test</CButton>
      </div>

      <div class="flex gap-4 items-baseline">
        <CButton color="danger" size="sm" variant="outline">
          Test
        </CButton>
        <CButton color="tertiary" size="lg" variant="text">
          Test
        </CButton>
      </div>
    </div>
  );
};

export default buttons;
