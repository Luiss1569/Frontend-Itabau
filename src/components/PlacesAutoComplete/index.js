import React from "react";
import api from "../../services/api"
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
import axios from "axios";

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
                return {
                    data: true
                }
            });

            if(response.data){
                getLocationOutherAPI()
                return;
            }

            const citys = response.map(({CIDADE})=>{
                return { 
                    description: CIDADE
                }
            })
            setData(citys)
        }
        getLocation();
        
    }, [value]); // eslint-disable-next-line

    async function getLocationOutherAPI(){
        const response = await axios
            .get(`https://nominatim.openstreetmap.org/search?format=json&city=${value}&&limit=5`)
            .then(({data}) => data)
            .catch(e=> console.log(e.message));

        const citys = response.map(city=>{
            return { 
                LATITUDE: city.lat, 
                LONGITUDE: city.lon,
                description: city.display_name.split(",")[0]
            }
        })

        const reduced =[]
        citys.forEach((item) => {
            var duplicated  = reduced.findIndex(redItem => {
                return item.a === redItem.a;
            }) > -1;
        
            if(!duplicated) {
                reduced.push(item);
            }
        });

        setData(reduced)
    }

    const handleInput = (e) => {
        setValue(e.target.value);
    };

    const handleSelect = (val) => {
        console.log(data)
        if(data[0].LATITUDE && data[0].LONGITUDE){
            const selected = data.filter(as => as.description === val)
            props.setLat(selected[0].LATITUDE)
            props.setLong(selected[0].LONGITUDE)
            props.setLocation(val)

            return;
        }

        async function getLocation(){
            const response = await fetch(`${api}/php/cliente/like_city.php?name=${val}`, {
                method: 'get'
            }).then(function (response) {
                return response.json();
            }).catch(function (error) {
                console.log('There has been a problem with your fetch operation: ' + error.message);
                return []
            });
             

            if(response?.length === 0) return

            props.setLat(response[0].LATITUDE)
            props.setLong(response[0].LONGITUDE)
            props.setLocation(val)
            setValue(val)
        }
        getLocation()
    };

    return (
        <div classname='combobox-responsive'>
            <Combobox onSelect={handleSelect} aria-labelledby="demo">
            <ComboboxInput value={value} onChange={handleInput} placeholder={"Digite sua cidade, estado ou pais ..."} disabled={false} 
                style={{ borderColor: '#135749', fontFamily: "Philosopher", width: '100%', height: 30, fontSize: 20, borderRadius: 10, textAlign: 'center'}} 
            />
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