<script >
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'HomeView',
  data() {
    return {
      series: [
        {
          name: 'Series 1',
          data: [31, 40, 28, 51, 42, 109, 100]
        },
        {
          name: 'Series 2',
          data: [11, 32, 45, 32, 34, 52, 41]
        }
      ],
      chartOptions: {
        chart: {
          height: 350,
          type: 'area'
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        xaxis: {
          type: 'datetime',
          categories: [
            '2018-09-19T00:00:00.000Z',
            '2018-09-19T01:30:00.000Z',
            '2018-09-19T02:30:00.000Z',
            '2018-09-19T03:30:00.000Z',
            '2018-09-19T04:30:00.000Z',
            '2018-09-19T05:30:00.000Z',
            '2018-09-19T06:30:00.000Z'
          ]
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm'
          }
        }
      }
    };
  }
});
</script>

<template>
   <div class="bodywrapper__inner">
      <div class="row gy-4">
          <div class="col-xl-12">
              <div class="row gy-2">
                  <div class="col-lg-3">
                      <div class="shadow-lg mb-5 bg-light rounded">
                          <a href="">
                          <div class="row">
                              <div class="col-lg-3 mx-auto bg--primary d-flex align-items-center justify-content-center">
                                  <i class="las la-utensils" style="font-size: 2rem;"></i>
                              </div>
                              <div class="col-lg-9 justify-content-center p-3">
                                  <h6 class="m-b-5">Total Order</h6>
                                  <h3 class="m-b-0">15</h3>
        
                              </div>
                          </div>
                          </a>
                      </div>
                  </div>
                  <div class="col-lg-3">
                      <div class="shadow-lg mb-5 bg-light rounded">
                          <a href="">
                          <div class="row">
                              <div class="col-lg-3 mx-auto bg--primary d-flex align-items-center justify-content-center">
                                  <i class="las la-user-friends" style="font-size: 2rem;"></i>
                              </div>
                              <div class="col-lg-9 justify-content-center p-3">
                                  <h6 class="m-b-5">Customer Today</h6>
                                  <h3 class="m-b-0 ">20</h3>
        
                              </div>
                          </div>
                          </a>
                      </div>
                  </div>
                  <div class="col-lg-3">
                      <div class="shadow-lg mb-5 bg-light rounded">
                          <a href="">
                          <div class="row">
                              <div class="col-lg-3 mx-auto bg--primary d-flex align-items-center justify-content-center">
                                  <i class="las la-hamburger" style="font-size: 2rem;"></i>
                              </div>
                              <div class="col-lg-9 justify-content-center p-3">
                                  <h6 class="m-b-5 ">Total Menu</h6>
                                  <h3 class="m-b-0">12</h3>
        
                              </div>
                          </div>
                          </a>
                      </div>
                  </div>
                  <div class="col-lg-3">
                      <div class="shadow-lg mb-5 bg-light rounded">
                          <a href="">
                          <div class="row">
                              <div class="col-lg-3 mx-auto bg--primary d-flex align-items-center justify-content-center">
                                  <i class="las la-money-bill-wave" style="font-size: 2rem;"></i>
                              </div>
                              <div class="col-lg-9 justify-content-center p-3">
                                  <h6 class="m-b-5">Today Revenue</h6>
                                  <h3 class="m-b-0">4</h3>
        
                              </div>
                          </div>
                          </a>
                      </div>
                  </div>
              </div>
          </div>
          <div class="col-xl-12">
              <div class="row gy-4">
                  <div class="col-sm-12">
                      <div class="card p-3 rounded-3">
                          <div class="row g-0">
                              <div class="col-sm-4 col-6 col-xl-6 col-xxl-4">
                                  <div class="dashboard-widget">
                                      <div class="dashboard-widget__icon">
                                          <i class="dashboard-card-icon las la-users"></i>
                                      </div>
                                      <div class="dashboard-widget__content">
                                      <router-link to="/customer" class="dashboard-widget-link" title="View All"></router-link>
                                         
                                          <h5>50</h5>
                                          <span>Total Users</span>
                                      </div>
                                  </div>
                              </div>
                              <div class="col-sm-4 col-6 col-xl-6 col-xxl-4 ">
                                  <div class="dashboard-widget">
                                      <div class="dashboard-widget__icon">
                                          <i class="dashboard-card-icon las la-user-check"></i>
                                      </div>
                                      <div class="dashboard-widget__content">
                                      <router-link to="/customer" class="dashboard-widget-link" title="View All"></router-link>
                                         
                                          <h5>50</h5>
                                          
                                          <span>Active Users</span>
                                      </div>
                                  </div>
                              </div>
                              <div class="col-sm-4 col-6 col-xl-6 col-xxl-4">
                                  <div class="dashboard-widget">
                                      <div class="dashboard-widget__icon">
                                          <i class="dashboard-card-icon las la-envelope"></i>
                                      </div>
                                      <div class="dashboard-widget__content">
                                      <router-link to="/customer" class="dashboard-widget-link" title="View All"></router-link>
                                         
                                          <h5>50</h5>
                                          <span>Email Unverified</span>
                                      </div>
        
                                  </div>
                              </div>
                              <div class="col-sm-4 col-6 col-xl-6 col-xxl-4">
                                  <div class="dashboard-widget">
                                      <div class="dashboard-widget__icon">
                                          <i class="dashboard-card-icon las la-credit-card"></i>
                                      </div>
                                     <div class="dashboard-widget__content">
                                      <router-link to="/customer" class="dashboard-widget-link" title="View All"></router-link>
                                         
                                          <h5>50</h5>
                                          <span>Pending Payouts</span>
                                      </div>
                                  </div>
                              </div>
                              <div class="col-sm-4 col-6 col-xl-6 col-xxl-4">
                                  <div class="dashboard-widget">
                                      <div class="dashboard-widget__icon">
                                          <i class="dashboard-card-icon las la-spinner"></i>
                                      </div>
                                      <div class="dashboard-widget__content">
                                      <router-link to="/customer" class="dashboard-widget-link" title="View All"></router-link>
                                         
                                          <h5>50</h5>
                                          <span>Pending Funds</span>
                                      </div>
                                  </div>
                              </div>
                              <div class="col-sm-4 col-6 col-xl-6 col-xxl-4">
                                  <div class="dashboard-widget">
                                      <div class="dashboard-widget__icon">
                                          <i class="dashboard-card-icon las la-ban"></i>
                                      </div>
                                      <div class="dashboard-widget__content">
                                      <router-link to="/customer" class="dashboard-widget-link" title="View All"></router-link>
                                         
                                          <h5>50</h5>
                                          <span>Rejected Funds</span>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
         
          <div class="col-xl-6">
              <div class="card">
                  <div class="card-body">
                      <h5 class="card-title">Daily Logins for the Past 10 Days</h5>
                      <div id="login-chart">
                        <apexchart type="area" :options="chartOptions" :series="series"></apexchart>
                      </div>
                  </div>
              </div>
          </div>
          <div class="col-xl-6">
              <div class="card">
                  <div class="card-body">
                      <h5 class="card-title">Login Browser History</h5>
                      <div id="os-chart"></div>
                  </div>
              </div>
          </div>

        </div>
  </div>
</template>