<template>
    <v-card>
        <v-md-date-range-picker
            class="ma-2 pt-5"
            @change="handleChange"
            :presets="presets"
        ></v-md-date-range-picker>
        <v-tabs vertical>
            <v-tab>
                <v-icon left>mdi-chart-bar</v-icon>
                Product Sales
            </v-tab>
            <v-tab>
                <v-icon left>mdi-chart-timeline-variant</v-icon>
                Customers Sales
            </v-tab>
            <v-tab>
                <v-icon left>mdi-chart-arc</v-icon>
                Coupon Sales
            </v-tab>
            <v-tab>
                <v-icon left>mdi-chart-line</v-icon>
                Countries Sales
            </v-tab>

            <v-tab-item>
                <v-card flat>
                    <v-card-text>
                        <ProductSales :product="product" />
                    </v-card-text>
                </v-card>
            </v-tab-item>
            <v-tab-item>
                <v-card flat>
                    <v-card-text>
                        <Customers :customers="customers" />
                    </v-card-text>
                </v-card>
            </v-tab-item>
            <v-tab-item>
                <v-card flat>
                    <v-card-text>
                        <Coupons :coupons="coupons"/>
                    </v-card-text>
                </v-card>
            </v-tab-item>
            <v-tab-item>
                <v-card flat>
                    <v-card-text>
                        <Countries :countries="countries" />
                    </v-card-text>
                </v-card>
            </v-tab-item>
        </v-tabs>
    </v-card>
</template>
<script>
var moment = require("moment");
import ProductSales from '../../components/reports/ProductSales.vue'
import Coupons from '../../components/reports/Coupons.vue'
import Countries from '../../components/reports/Countries.vue'
import Customers from '../../components/reports/Customers.vue'
export default {
    components: {
        ProductSales,
        Coupons,
        Countries,
        Customers
    },

    data: () => ({
        values: [],
        product: [],
        coupons: [],
        countries: [],
        customers: [],
        presets: [
            {
                label: "Today",
                range: [moment().subtract(0, "day"), moment()]
            },
            {
                label: "Yesterday",
                range: [
                    moment().subtract(1, "day"),
                    moment().subtract(1, "day")
                ]
            },
            {
                label: "Last 7 Days",
                range: [moment().subtract(6, "days"), moment()]
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
        ]
    }),

    created() {
        this.getData();
    },

    methods: {
        handleChange(values) {
            this.values = values;
            this.getData();
        },

        getData() {
            axios
                .post("/api/admin/report", this.values)
                .then(res => {
                    this.product = res.data.prod_sales;
                    this.coupons = res.data.coupons;
                    this.countries = res.data.countries;
                    this.customers = res.data.customers;
                })
                .catch(err => console.dir(err.response));
        }
    }
};
</script>

<style></style>
