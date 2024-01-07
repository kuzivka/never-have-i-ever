import { useState } from 'react';
import { Text, View } from 'react-native';
import { Button } from '../elements/Button/Button';
import { styles } from './MainPage.style';

export const MainPage = () => {
  const [text, setText] = useState();
  const getStatement = async () => {
    const response = await fetch('https://api.nhie.io/v2/statements/next');
    const statement = await response.json();
    setText(statement.statement);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.statement}>{text}</Text>
      <Button
        styles={styles}
        title={text ? 'Next' : 'Go'}
        onPress={getStatement}
      />
    </View>
  );
};
