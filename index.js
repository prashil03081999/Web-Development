function updateMap() {
    fetch("/data.json")
        .then(Response => Response.json())
        .then(rsp => { 
            // console.log(rsp.data)
            rsp.data.forEach(element => {
                latitude = element.latitude
                longitude = element.longitude


                cases=element.infected;
                if (cases>255){
                    color="rgb(255,0,0)";
                }
                else{
                    color=`rgb(${cases}, 0, 0)`;
                }

                // Recover ppl

                // recov=element.recovered;
                // if(recov>300){
                //     color="rgb(0,100,0)";
                // }
                // else{
                //     color=`rgb(0,${recov},0)`;
                // }
                // Mark on the map
                new mapboxgl.Marker({
                    draggable: false,
                    color: color
                })


                    .setLngLat([longitude, latitude])
                    .addTo(map);
            });
        })
}
updateMap();