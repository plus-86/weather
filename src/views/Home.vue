<template>
  <div class="Home">
    <div class="cover">
      <div class="left">
        <h3 class="brand">The Weather</h3>
        <div class="info">
          <div class="l">16°</div>
          <div class="m">
            <div class="city">Shanghai</div>
            <div class="time">15:44-Monday 6.6 2022</div>
          </div>
          <div class="r">
            <div class="icon">
              <img
                src="//cdn.weatherapi.com/weather/64x64/day/113.png"
                alt=""
              />
            </div>
            <div class="weatherState">Partly Cloudy</div>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="search">
          <input type="text" placeholder="Search Location..." />
          <div class="searchButton">1</div>
        </div>
        <div class="hotCity">
          <ul>
            <li>New York</li>
            <li>Paris</li>
            <li>Beijing</li>
            <li>Tokyo</li>
          </ul>
        </div>
        <div class="weatherDetails">
          <ul>
            <li><div class="title">Weather Details</div></li>
            <li>
              <div class="title">Cloudy</div>
              <div class="value">75%</div>
            </li>
            <li>
              <div class="title">Humidity</div>
              <div class="value">95%</div>
            </li>
            <li>
              <div class="title">Wind</div>
              <div class="value">11.2km/h</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
.Home {
  color: #fff;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url('@/assets/img/day/day-clear.jpg');
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
      width: 30vw;
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
</style>
