import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import {PromptModal} from 'th_views.rn';

export interface ExamplePromptModalProps {}

const ExamplePromptModal: React.FC<ExamplePromptModalProps> = props => {
  const [text, setText] = useState<string>('');
  const [show, setShow] = useState<boolean>(false);

  return (
    <View
      style={{
        flex: 1,
      }}>
      <Text>input: {text}</Text>
      <Button title={'show'} onPress={() => setShow(true)} />
      <PromptModal
        show={show}
        onDismiss={(_text, isConfirm) => {
          setShow(false);
          if (isConfirm) {
            setText(_text);
          }
        }}
      />
    </View>
  );
};

export default ExamplePromptModal;
