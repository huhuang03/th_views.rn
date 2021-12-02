import React, {useEffect, useRef, useState} from 'react';
import {View, Button, Modal, TextInput, TextInputProps, ViewStyle} from 'react-native';
import SizedBox from '../SizedBox';
import {gDp} from 'th_comm.rn';

export interface PromptModalProps {
  show: boolean;
  onDismiss: (value: string, isConfirm: boolean) => void;
  input?: TextInputProps;
  style?: ViewStyle;
}

const PromptModal: React.FC<PromptModalProps> = props => {
  const [text, setText] = useState<string>('')
  const ref = useRef<TextInput>();

  useEffect(() => {
    if (props.show)  {
      // clear the text when show changed.
      setText('')
    }
  }, [props.show])

  return (
    <Modal
      onShow={() => {
        ref.current?.blur();
        ref.current?.focus();
      }}
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
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          flex: 1,
          paddingHorizontal: gDp(100),
          alignItems: 'center',
          justifyContent: 'center',
          ...props.style,
        }}>
        <View
          style={{
            paddingVertical: gDp(30),
            paddingHorizontal: gDp(30),
            borderRadius: gDp(20),
            backgroundColor: 'white',
            width: '100%',
          }}>
          <TextInput
            ref={_ref => ref.current = (_ref || undefined)}
            showSoftInputOnFocus={true}
            autoFocus={true}
            style={{
              fontSize: gDp(30),
              borderColor: 'gray',
              borderWidth: gDp(1),
            }}
            onChangeText={setText}
            {...props.input} />
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
