import { Pressable, Text, TouchableOpacity } from 'react-native';

export const Button = ({styles, title, onPress}) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={onPress}>
      <Text style={styles.title} >
        {title}
      </Text>
    </TouchableOpacity>
  );
};
