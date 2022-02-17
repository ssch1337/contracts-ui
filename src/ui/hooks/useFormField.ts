// Copyright 2021 @paritytech/contracts-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { useCallback, useMemo, useRef, useState } from 'react';

import { isNull, isUndefined } from '@polkadot/util';
import type { ValidFormField, ValidateFn, Validation } from 'types';

export function useFormField<T>(
  defaultValue: T,
  validate: ValidateFn<T> = value => ({ isValid: !isNull(value), message: null })
): ValidFormField<T> {
  const [value, setValue] = useState<T>(defaultValue);
  const [validation, setValidation] = useState<Omit<Validation, 'isError'>>(validate(value));
  const isTouched = useRef(false);

  const isError = useMemo(() => {
    if (!isTouched.current) {
      return false;
    }

    return !validation.isValid;
  }, [validation.isValid]);

  const onChange = useCallback(
    (value?: T | null) => {
      if (!isUndefined(value) && !isNull(value)) {
        setValue(value);
        setValidation(validate(value));
        isTouched.current = true;
      }
    },
    [validate]
  );

  return useMemo(
    () => ({
      value,
      onChange,
      isValid: validation.isValid,
      isTouched: isTouched.current,
      isWarning: validation.isWarning || false,
      message: validation.message,
      isError,
    }),
    [value, onChange, isError, validation.isValid, validation.isWarning, validation.message]
  );
}
