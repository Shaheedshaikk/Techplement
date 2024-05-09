let x = document.getElementById("location-input2");
let y = document.getElementById("temp-value2");
let z = document.getElementById("location2");
let p = document.getElementById("wea-desc2");
let q =document.getElementById("butn2");
let r = document.getElementById("humi");
let s = document.getElementById("pre");
let t = document.getElementById("mint");
let u = document.getElementById("maxt");
let v = document.getElementById("ws");
let w = document.getElementById("img");

q.onclick = function(){
    if(x.value == "")
        {
            alert("please enter a location")
        }
        else{
            loc = x.value;

            if (!isNaN(loc)) {
                // If input is a number (zipcode)
                url = "https://api.openweathermap.org/data/2.5/weather?id="+loc+"&appid=d82fc51c5b1119c6dcbe7bb337c12f0c";
              } else {
                // If input is a string (city name)
                url = "https://api.openweathermap.org/data/2.5/weather?q="+loc+"&appid=d82fc51c5b1119c6dcbe7bb337c12f0c";
              }
            fetch(url).then(res => res.json())
            .then(data => {
                console.log(url)
                console.log(data)
                const{name} = data
                const{feels_like} = data.main
                const{description} = data.weather[0]
                const{icon} = data.weather[0]
                const{humidity} = data.main
                const{pressure} = data.main
                const{temp_min} = data.main
                const{temp_max} = data.main
                const{speed} = data.wind
                
                y.innerText = Math.floor(feels_like-273)
                z.innerText = name;
                p.innerText = description
                r.innerText = humidity
                s.innerText = pressure
                t.innerHTML = Math.floor(temp_min-273)
                u.innerText = Math.floor(temp_max-273)
                v.innerText = speed
                w.innerText = icon

                w.src = "https://openweathermap.org/img/wn/" + icon + ".png";
               

                document.getElementById("dis").style.display="block"
              
              
           
            })
            .catch(()=>{
                alert("Enter a valid location")

            })
            
        }
        
}