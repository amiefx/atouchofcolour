<template>
    <div id="printable">
        <div class="mt-3">
            <div class="d-flex ">
                <h3 class="my-2 float-left">View Order</h3>
                <v-spacer></v-spacer>
            <!-- <v-btn icon class="hidden-print-only float-right" color="" target="_blank" :to="`/admin/orders/print/${order.id}`">
                <v-icon>
                    mdi-printer
                </v-icon>
            </v-btn> -->
            </div>
            <v-divider></v-divider>
            <v-col cols="12" sm="6" md="6" lg="6">
                <h4 class="my-2">Order Details</h4>
                    <tbody>
                        <tr>
                            <td>Telephone:</td>
                            <td class="pl-5">{{order.customer_phone}}</td>
                        </tr>
                        <tr>
                            <td>Email:</td>
                            <td class="pl-5">{{order.customer_email}}</td>
                        </tr>
                        <tr>
                            <td>Date:</td>
                            <td class="pl-5">{{order.created_at | formatDate}}</td>
                        </tr>
                        <tr>
                            <td class="">Payment Method:</td>
                            <td class="pl-5">{{order.payment_method}}</td>
                        </tr>
                    </tbody>
            </v-col>
        </div>
        <div class="">
            <v-col class="float-left" cols="12" sm="6" md="6" lg="6">
                <h4 class="my-2">Billing Address</h4>
                <tr>{{order.billing_first_name}} {{order.billing_last_name}}</tr>
                <tr>{{order.billing_address}}</tr>
                <tr>{{order.billing_appartment}}</tr>
                <tr>{{order.billing_city}} {{order.billing_postal_code}}</tr>
                <tr>{{order.billing_country_region}}</tr>
            </v-col>
            <v-col class="float-right" cols="12" sm="6" md="6" lg="6">
                <h4 class="my-2">Shipping Address</h4>
                <tr>{{order.shipping_first_name}} {{order.shipping_last_name}}</tr>
                <tr>{{order.shipping_address}}</tr>
                <tr>{{order.shipping_appartment}}</tr>
                <tr>{{order.shipping_city}} {{order.shipping_postal_code}}</tr>
                <tr>{{order.shipping_country_region}}</tr>
            </v-col>
        </div>
        <div >
            <v-col cols="12" class="mt-6">
                <h4 class="my-2">Items Ordered</h4>
                <v-divider></v-divider>
                <v-simple-table>
                    <template v-slot:default>
                    <thead>
                        <tr>
                        <th class="text-left">Product</th>
                        <th class="text-left">Type</th>
                        <th class="text-left">Size</th>
                        <th class="text-left">Unit Price</th>
                        <th class="text-left">Quantity</th>
                        <th class="text-left">Line Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in order.order_items" :key="item.id">
                        <td>{{ item.product_name }}</td>
                        <td>{{ item.type }}</td>
                        <td>{{ item.size }}</td>
                        <td>{{item.currency_symbol}}{{ item.unit_price }}</td>
                        <td>{{ item.qty }}</td>
                        <td>{{item.currency_symbol}}{{ item.line_total }}</td>
                        </tr>
                    </tbody>
                    </template>
                </v-simple-table>
            </v-col>
            <v-col class="float-right" cols="12" sm="5" md="5" lg="5">
                <v-simple-table>
                    <tbody class="">
                        <tr>
                            <td>Subtotal:</td>
                            <td  class="pl-5 text-right">{{order.currency_symbol}}{{order.total}}</td>
                        </tr>
                        <tr v-if="order.discount >0">
                            <td>Discount:</td>
                            <td  class="pl-5 text-right">{{order.currency_symbol}}{{order.discount}}</td>
                        </tr>
                        <tr v-if="order.shipping_cost >0">
                            <td>Shipping Cost:</td>
                            <td  class="pl-5 text-right">{{order.currency_symbol}}{{order.shipping_cost}}</td>
                        </tr>
                        <tr>
                            <td><strong>Total:</strong></td>
                            <td  class="pl-5 text-right"><strong>{{order.currency_symbol}}{{(finalTotal).toFixed(2)}}</strong></td>
                        </tr>
                    </tbody>
                </v-simple-table>
            </v-col>
        </div>
    </div>
</template>

<script>
var moment = require('moment');
export default {
  layout: 'khod',
  middleware: ['auth'],
    metaInfo: {
        // title will be injected into parent titleTemplate
        title: 'Orders' ,
        titleTemplate: '%s | Khodgi'
        },

    data: () => {
    return {
        order: [],

        }
    },

    filters: {
      formatDate: function (value) {
          return moment(value).format('MMMM D, YYYY');
      }
  },

    created() {
    axios
      .get(`/api/admin/orders/single-order/${this.$route.params.id}`)
      .then(res => {
        this.order = res.data.order;
      })
      .catch(err => {
        console.log();
      });
    },

    methods: {
        printme(el) {
            // let restorepage = document.body.innerHTML;
            // let printcontent = document.getElementById(el).innerHTML;
            // document.body.innerHTML = restorepage;
            window.print();
            // document.body.innerHTML = restorepage;
        }
    },

    computed: {
        finalTotal() {
            return parseFloat(this.order.total)
            - parseFloat(this.order.discount ? this.order.discount : 0)
            + parseFloat(this.order.shipping_cost ? this.order.shipping_cost : 0);
        }
    }
}
</script>

<style>

</style>
