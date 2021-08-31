/* eslint-disable no-param-reassign */
import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import { Textarea } from '@chakra-ui/react';

export default function InputMail({ name, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField } = useField(name);
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: (ref) => ref.current.value,
      setValue: (ref, value) => {
        ref.current.value = value;
      },
      clearValue: (ref) => {
        ref.current.value = '';
      },
    });
  }, [fieldName, registerField]);
  return <Textarea ref={inputRef} defaultValue={defaultValue} {...rest} />;
}
