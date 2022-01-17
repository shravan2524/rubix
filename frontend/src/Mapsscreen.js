import React from 'react';
import { useState, useEffect } from 'react';
import axios from "axios";
import Card from './components/Card';


const Mapsscreen = () => {
    const [slatitude, setslatitude] = useState("19.0760");
    const [slongitude, setslongitude] = useState("72.8777");

    const latandlong = [
        {
            city: "Tamil Nadu",
            latitude: "11.059821",
            longitude: "78.387451",
        },
        {
            city: "Telangana",
            latitude: "17.123184",
            longitude: "79.208824",
        },
        {
            city: "Madhya Pradesh",
            latitude: "23.473324",
            longitude: "77.947998",
        },
        {
            city: "Haryana",
            latitude: "29.238478",
            longitude: "76.431885",
        },
        {
            city: "Chhattisgarh",
            latitude: "21.295132",
            longitude: "81.828232",
        },
        {
            city: "Maharashtra",
            latitude: "19.601194",
            longitude: "75.552979",
        },
        {
            city: "Tripura",
            latitude: "23.745127",
            longitude: "91.746826",
        },
        {
            city: "Telangana",
            latitude: "17.874857",
            longitude: "78.100815",
        },
        {
            city: "Chhattisgarh",
            latitude: "21.295132",
            longitude: "81.828232",
        },
        {
            city: "Karnataka",
            latitude: "15.317277",
            longitude: "75.713890",
        },
        {
            city: "Kerala",
            latitude: "10.850516",
            longitude: "76.271080",
        },
        {
            city: "Uttar Pradesh",
            latitude: "28.207609",
            longitude: "79.826660",
        },
        {
            city: "Karnataka",
            latitude: "15.317277",
            longitude: "75.713890",
        },
        {
            city: "Assam",
            latitude: "26.244156",
            longitude: "92.537842",
        },
        {
            city: "Rajasthan",
            latitude: "27.391277",
            longitude: "73.432617",
        },
        {
            city: "Himachal Pradesh",
            latitude: "32.084206",
            longitude: "77.571167",
        },

    ]


    const options = {
        method: 'GET',
        url: 'https://travel-advisor.p.rapidapi.com/hotels/list-by-latlng',
        params: {
            latitude: slatitude,
            longitude: slongitude,
        },
        headers: {
            'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
            'x-rapidapi-key': '3b81e705bamsh2d7a4f7577f3dedp199406jsn7ce04b9879c0'
        }
    };
    const [nearby, setnearby] = useState([]);
    useEffect(() => {
        let temp = [];
        axios.request(options).then(function (response) {
            setnearby(response.data.data);
            temp = nearby;
            // let short = [];
            // for(var i=0;i<(temp.size);i++){
            //     console.log(temp[i].photo.images.medium);
            //     if(!temp[i].photo.images.medium){
            //         short.push(temp[i]);
            //     }
            // }
            // setnearby(short);
            console.log(nearby, "nearby");
        }).catch(function (error) {
            console.error(error);
        });
    }, [])

    return (
        <div>
            <div>
                Attractions near by you!
            </div>
            <div style={{display:"grid", gridTemplateColumns:"auto auto auto auto"}}>
            {   nearby
                ?nearby.map((e) => {
                    if(e.photo){
                    return <Card name={e.name}  address={e.address_obj} photo={e.photo}  website={e.web_url} review={e.write_review}  />
                    }
                })
                : null
            }
            </div>

        </div>
    );
}

export default Mapsscreen;
