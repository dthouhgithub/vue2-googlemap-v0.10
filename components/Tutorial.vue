<!-- Please remove this file from your project -->
<template>
  <div>
    <GmapMap
      ref="mapRef"
      :center="startLocation"
      :zoom="zoom"
      map-type-id="roadmap"
      :options="mapOptions"
      class="map"
      style="width: 1000px; height: 1000px"
    >
      <GmapMarker
        v-for="item in mapMarkers"
        :key="item.id"
        :position="getMarkerPosition(item.location)"
        :icon="getIcon(1)"
        :clickable="true"
        :draggable="false"
        @click="markUpParking(item.location)"
      />
    </GmapMap>
  </div>    
</template>

<script>
export default {
  name: 'NuxtTutorial',
  data() {
    return {
      startLocation: {
        lat: 21.0245,
        lng: 105.84117,
      },
      mapMarkers: [
        {
          id: 1,
          location: {
            lat: 21.0222,
            lng: 105.84517,
          },
        },
        {
          id: 2,
          location: { lat: 21.2122, lng: 105.83117 },
        },
        {
          id: 3,
          location: {
            lat: 21.0202,
            lng: 105.84217,
          },
        },
      ],
      zoom: 15,
      mapOptions: {
        zoomControl: false,
        clickableIcons: true,
        zoomControlOptions: {
          position: 1,
        },
        navigationControl: false,
        panControl: false,
        streetViewControl: true,
        mapTypeControl: false,
        overviewMapControl: false,
        scaleControl: true,
        rotateControl: true,
        fullscreenControl: false,
        disableDefaultUI: true,
      },
    }
  },
  methods: {
    getIcon(number) {
      return {
        url: `https://static.carparking.jp/img/map/number-${number}.svg`,
        scaledSize: { width: 48, height: 48 },
      }
    },
    getMarkerPosition(item) {
      return {
        lat: item.lat,
        lng: item.lng,
      }
    },
    async markUpParking(marker, key) {
      const map = await this.$refs.mapRef.$mapPromise
      console.log(224, map)
    },
  }
}
</script>
