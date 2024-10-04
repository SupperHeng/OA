import React from 'react';
import { View, Text } from 'reshaped';

const NotFound: React.FC = () => {
  return (
    <View width="100vw" height="100vh" backgroundColor='primary' justify='center' align='center'>
      <Text variant="title-1">404 Not Found</Text>
    </View>
  );
}

export default NotFound;