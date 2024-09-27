// /src/pages/Themes.tsx

import React from "react";
import { Button, Theme, View, useToast } from "reshaped";
import type { ToastProps } from "reshaped";
import { Check } from 'react-feather';

const Themes: React.FC = () => {
  const { show } = useToast();
  const toast = () => {
    show({
      text: '天下无敌',
      size: 'large',
      icon: Check,
      position: 'bottom-end'
    }) as ToastProps;
  }

  return (
    <View direction="column" gap={10}>
      <View direction="row" gap={5}>
        <Theme name="figma">
          <Button color="primary">Figma</Button>
        </Theme>
        <Theme name="twitter">
          <Button color="primary">Twitter</Button>
        </Theme>
        <Button color="primary">Reshaped</Button>
        <Theme name="slate">
          <Button color="primary">Slate</Button>
        </Theme>
      </View>
      <View direction="row" gap={5}>
        <Theme name="figma">
          <Button color="primary" rounded>Figma</Button>
        </Theme>
        <Theme name="twitter">
          <Button color="primary" rounded>Twitter</Button>
        </Theme>
        <Button color="primary" rounded>Reshaped</Button>
        <Theme name="slate">
          <Button color="primary" rounded>Slate</Button>
        </Theme>
      </View>
      <Button color="primary" size="small" onClick={toast}>Toast</Button>
    </View>
  );
};

export default Themes;
