<template>
  <transition name="fade">
    <div class="Home" :id="currentWeather.imgUrl">
      <div class="cover">
        <div class="left">
          <h3 class="brand">The Weather</h3>
          <div class="info">
            <div class="l">{{ currentWeather.current.temp_c }}°</div>
            <div class="m">
              <div class="city">{{ currentWeather.location.name }}</div>
              <div class="time">{{ currentWeather.location.localtime }}</div>
            </div>
            <div class="r">
              <div class="icon">
                <img :src="currentWeather.current.condition.icon" alt="" />
              </div>
              <div class="weatherState">
                {{ currentWeather.current.condition.text }}
              </div>
            </div>
          </div>
        </div>
        <div class="right">
          <div class="search">
            <input
              type="text"
              @keydown.13="viewWeather"
              v-model="city"
              placeholder="Search Location..."
            />
            <div
              class="searchButton"
              @click="viewWeather"
              :id="
                currentWeather.current.is_day === 1 ? 'btn-day' : 'btn-night'
              "
            >
              <i class="icon iconfont icon-Search"></i>
            </div>
          </div>
          <div class="hotCity">
            <ul>
              <li @click="getWeather('Beijing')">Beijing</li>
              <li @click="getWeather('Washington')">Washington</li>
              <li @click="getWeather('New York')" city="New York">New York</li>
              <li @click="getWeather('Shanghai')">Shanghai</li>
            </ul>
          </div>
          <div class="weatherDetails">
            <ul>
              <li><div class="title">Weather Details</div></li>
              <li>
                <div class="title">Cloudy</div>
                <div class="value">{{ currentWeather.current.cloud }}%</div>
              </li>
              <li>
                <div class="title">Humidity</div>
                <div class="value">{{ currentWeather.current.humidity }}%</div>
              </li>
              <li>
                <div class="title">Wind</div>
                <div class="value">
                  {{ currentWeather.current.wind_kph }}km/h
                </div>
              </li>
              <li>
                <div class="title">Feels Like</div>
                <div class="value">
                  {{ currentWeather.current.feelslike_c }}°
                </div>
              </li>
              <li>
                <div class="title">Visibility</div>
                <div class="value">{{ currentWeather.current.vis_km }}km</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { formattedTime, chooseImg } from '@/utils/index.js'
import { mapActions } from 'vuex'
import { getcurrentWeather } from '@/request/api.js'
export default {
  data() {
    return {
      city: '',
      currentWeather: {
        current: {
          cloud: '',
          condition: {
            icon: '',
            text: ''
          },
          feelslike_c: '',
          humidity: '',
          is_day: '',
          temp_c: '',
          wind_kph: '',
          vis_km: ''
        },
        location: {
          localtime: '',
          name: ''
        },
        imgUrl: ''
      }
    }
  },
  async created() {
    this.getWeather('beijing')
  },
  methods: {
    // alert
    ...mapActions('ToastState', ['asyncChangeToastState']),
    async getWeather(city) {
      let res = await getcurrentWeather({
        q: city ? city : this.city // get weather info by clicking or typing
      })
      if (!res) return
      res.location.localtime = formattedTime(res.location.localtime)
      chooseImg(res) // choose background images
      this.currentWeather = res
      this.city = ''
    },
    // get weather info by typing
    async viewWeather() {
      if (!this.city) {
        this.asyncChangeToastState({
          msg: 'Please enter a city',
          classType: 'warning'
        })
        return
      }
      this.getWeather()
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/css/globalStyle';
@media screen and (max-width: 500px) {
  .cover {
    flex-direction: column;
    justify-content: flex-start !important;
    .info {
      margin-left: 0 !important;
      justify-content: center;
      text-align: center;
      .r {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }
  }
}
.Home {
  color: #fff;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  transition: 500ms;
  &#day-clear {
    @include bg-img(day-clear);
  }
  &#day-cloudy {
    @include bg-img(day-cloudy);
  }
  &#day-rainy {
    @include bg-img(day-rainy);
  }
  &#day-snowy {
    @include bg-img(day-snowy);
  }
  &#night-clear {
    @include bg-img(night-clear);
  }
  &#night-cloudy {
    @include bg-img(night-cloudy);
  }
  &#night-rainy {
    @include bg-img(night-rainy);
  }
  &#night-snowy {
    @include bg-img(night-snowy);
  }
  .cover {
    min-height: 100vh;
    background: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: space-between;
    .left {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .brand {
        font-size: 2rem;
        margin-left: 4rem;
      }
      .info {
        display: flex;
        align-items: center;
        margin-bottom: 2rem;
        margin-left: 4rem;
        .l {
          font-size: 6rem;
        }
        .m {
          margin: 0 2rem;
          .city {
            font-size: 3rem;
          }
          .time {
            font-size: 1rem;
          }
        }
        .r {
          .icon {
            img {
              display: block;
              width: 3.5rem;
            }
          }
          .weatherState {
            font-size: 1rem;
          }
        }
      }
    }
    .right {
      display: flex;
      flex-direction: column;
      align-items: center;
      background: rgba(110, 110, 110, 0.25);
      box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3);
      backdrop-filter: blur(10px);
      padding: 0 2rem;
      .search {
        display: flex;
        margin-top: 1.5rem;
        input {
          height: 3rem;
          width: 20rem;
          background-color: rgba(0, 0, 0, 0);
          color: #fff;
          border: none;
          border-bottom: 1px solid #fff;
          margin-right: 2rem;
        }
        input::placeholder {
          color: #fff;
          font-size: 1rem;
        }
        input:focus {
          outline: none;
        }
        .searchButton {
          background-color: orange;
          width: 3rem;
          height: 3rem;
          border: 1.5px solid orange;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          cursor: pointer;
          &#btn-day {
            @include search-btn-color(day);
          }
          &#btn-night {
            @include search-btn-color(night);
          }
        }
      }
      .hotCity {
        ul {
          padding: 2rem 0;
          border-bottom: 1px solid #fff;
          li {
            margin: 2rem 0;
            width: 25rem;
            font-size: 1.2rem;
            font-weight: bold;
            cursor: pointer;
            color: #cebdb8;
            &:hover {
              color: #fff;
            }
          }
        }
      }
      .weatherDetails {
        ul {
          padding: 2rem 0;
          li {
            margin: 2rem 0;
            width: 25rem;
            font-size: 1.2rem;
            font-weight: bold;
            display: flex;
            justify-content: space-between;
          }
        }
      }
    }
  }
}
.fade-enter {
  opacity: 0; /** 插入的新元素最开始是透明的 **/
}
.fade-enter-active {
  transition: opacity 0.5s; /**然后用动画过渡慢慢显示出来**/
}
.fade-leave {
  opacity: 1; /**离开的元素开始是不透明的**/
}
.fade-leave-active {
  opacity: 0;
  transition: opacity 0.5s; /**然后离开的时候慢慢变透明**/
}
</style>
