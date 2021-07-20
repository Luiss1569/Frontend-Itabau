import React from "react";
import api from "axios"
import {
    Combobox,
    ComboboxInput,
    ComboboxPopover,
    ComboboxList,
    ComboboxOption,
} from "@reach/combobox";

import "@reach/combobox/styles.css"
import './style.css'
import { useState } from "react";
import { useMemo } from "react";

function PlacesAutocomplete(props) {
    const [value, setValue] = useState("");
    const [data, setData] = useState([]);

    useMemo(()=>{
        async function getLocation(){
            const {data: response} = await api.get(`https://nominatim.openstreetmap.org/search?format=json&city=${value}&&limit=5`)
            const citys = response.map(city=>{
                return { 
                    lat: city.lat, 
                    long: city.lon,
                    description: city.display_name.split(",")[0]
                }
            })
            setData(citys)
        }
        getLocation()
        
    }, [value])

    const handleInput = (e) => {
        setValue(e.target.value);
    };

    const handleSelect = (val) => {
        const selected = data.filter(as => as.description === val)
        props.setLat(selected[0].lat)
        props.setLong(selected[0].long)
        props.setLocation(val)
    };

    return (
        <div classname='combobox-responsive'>
            <Combobox onSelect={handleSelect} aria-labelledby="demo">
            <ComboboxInput value={value} onChange={handleInput} placeholder={"Digite sua cidade, estado ou pais ..."} disabled={false} style={{ borderColor: '#135749', fontFamily: "Philosopher", width: '100%', height: 30, fontSize: 20, borderRadius: 10, textAlign: 'center'}} />
            <ComboboxPopover>
                <ComboboxList>
                    {data.length !== 0 &&
                        data.map((city, id) => (
                            <ComboboxOption key={id} value={city.description} style={{
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
        </div>
    );
};

export default PlacesAutocomplete;