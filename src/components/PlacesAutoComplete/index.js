import React from "react";
import usePlacesAutocomplete from "use-places-autocomplete";
import {
    Combobox,
    ComboboxInput,
    ComboboxPopover,
    ComboboxList,
    ComboboxOption,
} from "@reach/combobox";

import "@reach/combobox/styles.css";

function PlacesAutocomplete(props) {
    const {
        ready,
        value,
        suggestions: { status, data },
        setValue,
    } = usePlacesAutocomplete();

    const handleInput = (e) => {
        setValue(e.target.value);
    };

    const handleSelect = (val) => {
        setValue(val, false);
        props.setLocation(val)
    };

    return (
        <Combobox onSelect={handleSelect} aria-labelledby="demo">
            <ComboboxInput value={value} onChange={handleInput} placeholder={"Digite sua cidade, estado ou pais ..."} disabled={!ready} style={{ borderColor: '#135749', fontFamily: "Philosopher", width: '100%', height: 30, fontSize: 20, borderRadius: 10, textAlign: 'center'}} />
            <ComboboxPopover>
                <ComboboxList>
                    {status === "OK" &&
                        data.map(({ description }, id) => (
                            <ComboboxOption key={id} value={description} style={{
                                fontSize: 20,
                                fontFamily: "Philosopher",
                                color: '#135749',
                                textAlign: 'center',
                                borderBottom: 1,
                                borderTop: 0,
                                borderRight: 0,
                                borderLeft: 0,
                                borderStyle: 'solid',
                                padding: 10
                            }
                            } />
                        ))}
                </ComboboxList>
            </ComboboxPopover>
        </Combobox>
    );
};

export default PlacesAutocomplete;