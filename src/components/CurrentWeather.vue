<template>
  <div class="container current-weather">
    <div class="row">
      <div class="col current-temp">
        <span class = "temperature temperature--big">{{currentWeather.temp_C }}</span>
        <span class="weather-desc">{{ currentWeather.weatherDesc[0]?.value }}</span>
        
      </div>
      <div class="col">
        <img src="img/cloudy.png" alt="" srcset="" />
      </div>
    </div>
    <div class="row">
      <div class="col"><span class='address'>{{getAddress}}</span></div>
      <div class="col"></div>
    </div>
    <div class="row">
      <div class="col">
        <span class="param">{{currentWeather.humidity +'%'}}</span>
        <span class="des-param">Humidity</span>
      </div>
      <div class="col">
        <span class="param">{{currentWeather.uvIndex}}</span>
        <span class="des-param">UV Index</span>
      </div>
      <div class="col">
        <span class="param">{{currentWeather.windspeedKmph + ' km/h'}}</span>
        <span class="des-param">Wind</span>
      </div>
    </div>
    <div>{{getDesCurrentWeather}}</div>
  </div>
</template>

<script>

export default {
  name: "CurrentWeather",
  props:{
    currentWeather: {
      type: Object,
      default: () => {}
    },
    address: {
      type: Object,
      default: () => {}
    }
  },
  computed:{
    getAddress(){
      return this.address.type+' '+ this.address.query;
    },
    getDesCurrentWeather(){
      return this.weatherDesc;
    }
  },
}
</script>

<style>
</style>
