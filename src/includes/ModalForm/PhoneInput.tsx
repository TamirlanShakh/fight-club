import React, { useRef, useEffect } from 'react';
import Inputmask from 'inputmask';
// import 'inputmask/dist/inputmask.css';
// import '@types/inputmask';

const PhoneInput = ({ formValuePhone, onChange }) => {
    const inputRef = useRef(null);

    useEffect(() => {
        const mask = '+7((4|9)00)-000-00-00';
        const inputmask = new Inputmask({
            mask: mask,
            greedy: false,
            onBeforeMask: function (value, opts) {
                value = value.replace(/[^\d\+\+]/g, '');
                if (value.length < 2) {
                    return value;
                }
                if (value[0] !== '+' && value[1] !== '7') {
                    return '+7';
                }
                return value;
            },
            definitions: {
                '0': {
                    validator: '[0-9]',
                    cardinality: 1,
                },
            },
        });
        inputmask.mask(inputRef.current);
    }, []);

    const handleChange = event => {
        // console.log(event.target.value);
    };

    return (
        <div>
            <input
                type="tel"
                name="phone"
                value={formValuePhone?.name}
                onChange={onChange}
                ref={inputRef}
                placeholder="+7(___)-___-__-__"
                // onChange={handleChange}
            />
        </div>
    );
};

export default PhoneInput;
