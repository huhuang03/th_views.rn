import React, {useState} from 'react';
import {View, Text, Button, Modal, TextInput, TextInputProps} from 'react-native';
import SizedBox from '../SizedBox';
import {gDp} from 'th_comm.rn';

export interface PromptModalProps {
  show: boolean;
  onDismiss: (value: string, isConfirm: boolean) => void;
  input?: TextInputProps;
}

const PromptModal: React.FC<PromptModalProps> = props => {
  const [text, setText] = useState<string>('')

  return (
    <Modal
      transparent={true}
      style={{
        flex: 1,
        width: '100%',
        height: '100%',
      }}
      onDismiss={() => props.onDismiss("", false)}
      visible={props.show}>
      <View
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          flex: 1,
          paddingHorizontal: gDp(100),
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            paddingVertical: gDp(10),
            paddingHorizontal: gDp(20),
            borderRadius: gDp(20),
            backgroundColor: 'white',
          }}>
          <View
            style={{
              width: '100%',
            }}>
            <TextInput
              style={{
                borderColor: 'gray',
                borderWidth: gDp(1),
              }}
              onChangeText={setText}
              {...props.input} />
          </View>
          <View
            style={{
              marginTop: gDp(20),
              width: '100%',

              flexDirection: 'row',
            }}>
            <View
              style={{
                flex: 1,
              }}>
              <Button
                title={'取消'} onPress={() => {
                props.onDismiss('', false);
              }} />
            </View>

            <SizedBox width={gDp(20)} />

            <View
              style={{
                flex: 1
              }}>
              <Button title={'确定'} onPress={() => {
                props.onDismiss(text?.trim()?? '', true);
              }} />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default PromptModal;
