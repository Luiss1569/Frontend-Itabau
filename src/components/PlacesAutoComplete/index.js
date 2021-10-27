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
import { useEffect } from "react";

function PlacesAutocomplete(props) {
    const [value, setValue] = useState("");
    const [data, setData] = useState([]);

    useEffect(()=>{

        if(value === "") return;

        async function getLocation(){
            const response = await fetch(`${api}/php/cliente/like_city.php?city=${value}`, {
                method: 'get'
            }).then(function (response) {
                return response.json();
            }).catch(function (error) {
                console.log('There has been a problem with your fetch operation: ' + error.message);
                return []
            });
            console.log(response)
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
        async function getLocation(){
            const response = await fetch(`${api}/php/cliente/like_city.php?name=${val}`, {
                method: 'get'
            }).then(function (response) {
                return response.json();
            }).catch(function (error) {
                console.log('There has been a problem with your fetch operation: ' + error.message);
                return []
            });
            console.log(response)

            //props.setLat(selected[0].lat)
            //props.setLong(selected[0].long)
            props.setLocation(val)
        }
        getLocation()
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