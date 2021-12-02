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
        input={{
          placeholder: '请输入名称',
        }}
        show={show}
        onDismiss={(_text, isConfirm) => {
          // console.log('_text: ', _text, ', isConfirm: ', isConfirm);
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
