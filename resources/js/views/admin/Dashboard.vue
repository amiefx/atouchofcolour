<template>
  <div class="container">
    <h1>Welcome to A Touch of Colour</h1>
  </div>
</template>

<script>
var moment = require("moment");
export default {
  data: () => ({
    values: [],
    presets: [
      {
        label: "Today",
        range: [moment().subtract(0, "day"), moment()]
      },
      {
        label: "Yesterday",
        range: [moment().subtract(1, "day"), moment().subtract(1, "day")]
      },
      {
        label: "Last 7 Days",
        range: [moment().subtract(6, 'days'), moment()]
      },
      {
        label: "This Week",
        range: [moment().startOf("week"), moment().endOf("week")]
      },
      {
        label: "Last Week",
        range: [
          moment()
            .subtract(1, "week")
            .startOf("week"),
          moment()
            .subtract(1, "week")
            .endOf("week")
        ]
      },
      {
        label: "This Month",
        range: [moment().startOf("month"), moment().endOf("month")]
      },
      {
        label: "Last Month",
        range: [
          moment()
            .subtract(1, "month")
            .startOf("month"),
          moment()
            .subtract(1, "month")
            .endOf("month")
        ]
      },
      {
        label: "This Year",
        range: [moment().startOf("year"), moment().endOf("year")]
      }
    ],
    total_products: '',
    total_sales: '',
    total_customers: '',
    total_orders: '',
    sales_monthly: '',
    monthly_sales: [
        {name: 'PKR', data: {} },
        {name: 'AUD', data: {} },
        {name: 'USD', data: {} },
        {name: 'EUR', data: {} },
        {name: 'GBP', data: {} },
    ],
    orders_monthly: []
  }),

  created() {
      this.getData()
  },

  methods: {
    handleChange(values) {
      this.values = values;
      this.getData()
    },

    getData() {
        axios.post('/api/admin/dashboard', this.values)
                .then(res => {
                    this.total_sales = res.data.total_sales
                    this.total_products = res.data.total_products
                    this.total_customers = res.data.total_customers
                    this.total_orders = res.data.total_orders
                    this.sales_monthly = res.data.sales_monthly

                    this.monthly_sales[0].data = res.data.sales_pkr
                    this.monthly_sales[1].data = res.data.sales_aud
                    this.monthly_sales[2].data = res.data.sales_usd
                    this.monthly_sales[3].data = res.data.sales_eur
                    this.monthly_sales[4].data = res.data.sales_gbp

                    this.orders_monthly = res.data.orders_monthly
                    this.TopTenProducts = res.data.TopTenProducts

                })
                .catch(err => console.dir(err.response))
    }
  },

  computed: {
    start() {
      return this.startText;
    }
  }
};
</script>

<style scoped>

</style>
