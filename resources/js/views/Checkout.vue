<template>
  <div class="mx-0 my-0 px-0 py-0">
    <v-row class="my-0 py-0">
      <v-col cols="12" sm="7" md="7" lg="7" xl="7">
        <v-stepper v-model="e1">
          <v-stepper-header>
            <v-stepper-step editable :complete="e1 > 1" step="1">Infromation</v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step editable :complete="e1 > 2" step="2">Shipping</v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step editable step="3">Payment</v-stepper-step>
          </v-stepper-header>

          <v-stepper-items>
            <v-stepper-content step="1">
              <v-card class="mb-3" color height flat>
                <v-card-subtitle class="d-flex">
                  <h4>Contact Infromation</h4>
                  <v-spacer></v-spacer>

                  <v-dialog v-model="dialog" max-width="500px" v-if="!authenticated">
                    <template v-slot:activator="{ on }">
                      <a class="mb-2" v-on="on">login</a> Already have account? .
                    </template>
                    <v-card>
                      <v-card-title>
                        <span class="headline">Login</span>
                      </v-card-title>

                      <v-card-text>
                        <v-form v-model="valid" method="post" v-on:submit.stop.prevent="login">
                          <v-text-field
                            label="Login"
                            v-model="login.email"
                            :rules="login.emailRules"
                            name="login"
                            prepend-icon="mdi-account-circle"
                            type="text"
                            required
                          />

                          <v-text-field
                            id="password"
                            label="Password"
                            v-model="login.password"
                            :rules="login.passwordRules"
                            name="password"
                            prepend-icon="mdi-lock"
                            type="password"
                            required
                          />
                        </v-form>
                      </v-card-text>
                      <v-card-actions>
                        <v-spacer />
                        <v-btn
                          color="primary"
                          block
                          :disabled="!valid"
                          @click.prevent="loginfx"
                        >Login</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </v-card-subtitle>
                <v-card-text class="pb-0">
                  <v-text-field
                    v-if="user"
                    v-model="ordersData.customersData.email"
                    class
                    label="Email"
                    outlined
                    disabled
                    dense
                  ></v-text-field>
                  <v-text-field
                    v-else
                    v-model="ordersData.customersData.email"
                    class
                    label="Email"
                    outlined
                    dense
                  ></v-text-field>
                </v-card-text>
                <v-card-text class="d-flex py-0">
                  <h4>Shipping Address</h4>
                </v-card-text>
                <v-card-text>
                  <div class="d-flex pb-n12">
                    <v-text-field
                      v-model="ordersData.customersData.first_name"
                      class="col-6 pr-1"
                      label="First Name"
                      outlined
                      dense
                    ></v-text-field>
                    <v-text-field
                      v-model="ordersData.customersData.last_name"
                      class="col-6 pl-1"
                      label="Last Name"
                      outlined
                      dense
                    ></v-text-field>
                  </div>
                  <v-text-field
                    v-model="ordersData.customersData.address"
                    class
                    label="Address"
                    outlined
                    dense
                  ></v-text-field>
                  <v-text-field
                    v-model="ordersData.customersData.appartment"
                    class
                    label="Appartment"
                    outlined
                    dense
                  ></v-text-field>
                  <v-text-field
                    v-model="ordersData.customersData.city"
                    class
                    label="City"
                    outlined
                    dense
                  ></v-text-field>
                  <div class="d-flex pb-n12">
                    <v-autocomplete
                      class="col-6 pr-1"
                      :items="countries"
                      v-model="ordersData.customersData.country_region"
                      item-text="name"
                      label="Country/Region"
                      outlined
                      dense
                    ></v-autocomplete>
                    <v-text-field
                      v-model="ordersData.customersData.postal_code"
                      class="col-6 pl-1"
                      label="Postal Code"
                      outlined
                      dense
                    ></v-text-field>
                  </div>
                  <v-text-field
                    v-model="ordersData.customersData.phone"
                    class
                    label="Phone"
                    outlined
                    dense
                  ></v-text-field>
                </v-card-text>
              </v-card>

              <!-- <v-btn class="float-left" to="/cart" text>Return to Cart</v-btn> -->
              <v-btn class="float-right" color="primary" @click="e1 = 2">Continue</v-btn>

            </v-stepper-content>

            <v-stepper-content step="2">
              <v-card outlined class="mb-2">
                <v-simple-table>
                  <template v-slot:default>
                    <tbody>
                      <tr>
                        <td>Contact</td>
                        <td>{{ordersData.customersData.email}}</td>
                        <td>
                          <span @click="e1 = 1" class="blue--text" style="cursor: pointer;">change</span>
                        </td>
                      </tr>
                      <tr>
                        <td>Ship to</td>
                        <td>
                          {{ordersData.customersData.address}}, {{ordersData.customersData.appartment}},
                          {{ordersData.customersData.city}} {{ordersData.customersData.postal_code}}, {{ordersData.customersData.country_region}}
                        </td>
                        <td>
                          <span @click="e1 = 1" class="blue--text" style="cursor: pointer;">change</span>
                        </td>
                      </tr>
                    </tbody>
                  </template>
                </v-simple-table>
              </v-card>

              <div class="pb-2 pt-3">
                <h4>Shipping Method</h4>
              </div>

              <v-card outlined class="mb-2 d-flex">
                  <select v-model="shippingCost" class="my-2 mx-2">
                    <option disabled value="">Select a Shipping mehtod</option>
                    <option v-for="ship in shipping" :key="ship.id" :value="ship">{{ ship.shipping_method }}</option>
                  </select>

              </v-card>

              <v-btn class="float-left" text  @click="e1 = 1">Back to Information</v-btn>
              <v-btn class="float-right" color="primary" @click="e1 = 3">Continue</v-btn>

            </v-stepper-content>

            <v-stepper-content step="3">
              <v-card outlined class="mb-2">
                <v-simple-table>
                  <template v-slot:default>
                    <tbody>
                      <tr>
                        <td>Contact</td>
                        <td>{{ordersData.customersData.email}}</td>
                        <td>
                          <span @click="e1 = 1" class="blue--text" style="cursor: pointer;">change</span>
                        </td>
                      </tr>
                      <tr>
                        <td>Ship to</td>
                        <td>
                          {{ordersData.customersData.address}}, {{ordersData.customersData.appartment}},
                          {{ordersData.customersData.city}} {{ordersData.customersData.postal_code}}, {{ordersData.customersData.country_region}}
                        </td>
                        <td>
                          <span @click="e1 = 1" class="blue--text" style="cursor: pointer;">change</span>
                        </td>
                      </tr>
                      <tr>
                        <td>Shipping</td>
                        <td>{{ordersData.customersData.shipping_method}}</td>
                        <td>
                          <span @click="e1 = 2" class="blue--text" style="cursor: pointer;">change</span>
                        </td>
                      </tr>
                    </tbody>
                  </template>
                </v-simple-table>
              </v-card>

              <div class="pb-2 pt-3">
                <h4>Payment Method</h4>
              </div>

              <v-card outlined class="mb-2 d-flex">
                <v-radio-group
                  v-model="ordersData.customersData.payment_method"
                  :mandatory="false"
                  class="mx-3"
                >
                  <v-radio label="Cash on dilivery (COD)" value="COD"></v-radio>
                  <v-radio label="Bank Transfer" value="Bank Transfer"></v-radio>
                </v-radio-group>
              </v-card>

              <div class="pb-2 pt-3">
                <h4>Billing Address</h4>
              </div>

              <v-card outlined class="mb-2 d-flex">
                <v-radio-group
                  v-model="ordersData.billing_add_type"
                  :mandatory="false"
                  class="mx-3"
                >
                  <v-radio label="Same as shipping address" value="Same as shipping address"></v-radio>
                  <v-radio
                    label="Use a different billing address"
                    value="Use a different billing address"
                  ></v-radio>
                </v-radio-group>
              </v-card>

              <v-card
                outlined
                class="mb-2 d-flex"
                v-if="ordersData.billing_add_type == 'Use a different billing address'"
              >
                <v-card-text>
                  <div class="d-flex pb-n12">
                    <v-text-field
                      v-model="ordersData.customersData.b_first_name"
                      class="col-6 pr-1"
                      label="First Name"
                      outlined
                      dense
                    ></v-text-field>
                    <v-text-field
                      v-model="ordersData.customersData.b_last_name"
                      class="col-6 pl-1"
                      label="Last Name"
                      outlined
                      dense
                    ></v-text-field>
                  </div>
                  <v-text-field
                    v-model="ordersData.customersData.b_address"
                    class
                    label="Address"
                    outlined
                    dense
                  ></v-text-field>
                  <v-text-field
                    v-model="ordersData.customersData.b_appartment"
                    class
                    label="Appartment"
                    outlined
                    dense
                  ></v-text-field>
                  <v-text-field
                    v-model="ordersData.customersData.b_city"
                    class
                    label="City"
                    outlined
                    dense
                  ></v-text-field>
                  <div class="d-flex pb-n12">
                    <v-autocomplete
                      class="col-6 pr-1"
                      :items="countries"
                      v-model="ordersData.customersData.b_country_region"
                      item-text="name"
                      label="Country/Region"
                      outlined
                      dense
                    ></v-autocomplete>
                    <v-text-field
                      v-model="ordersData.customersData.b_postal_code"
                      class="col-6 pl-1"
                      label="Postal Code"
                      outlined
                      dense
                    ></v-text-field>
                  </div>
                  <v-text-field
                    v-model="ordersData.customersData.b_phone"
                    class
                    label="Phone"
                    outlined
                    dense
                  ></v-text-field>
                </v-card-text>
              </v-card>

              <v-btn class="float-left" text @click="e1 = 2">Back to Shipping</v-btn>
              <v-btn class="float-right" color="primary" :loading="loading" @click="saveOrder">Complete Order</v-btn>

            </v-stepper-content>
          </v-stepper-items>
        </v-stepper>
      </v-col>

      <v-col cols="12" sm="5" md="5" lg="5" xl="5">
        <v-simple-table height>
          <template v-slot:default>
            <!-- <thead>
              <tr>
                <th class="text-left"></th>
                <th class="text-left"></th>
                <th class="text-left"></th>
              </tr>
            </thead>-->
            <tbody>
              <tr v-for="item in cart" :key="item.name">
                <td>
                  <v-list-item-avatar horizontal size="100">
                    <v-img :src="item.product.image1" contain class="ml-2"></v-img>
                  </v-list-item-avatar>
                </td>
                <td>
                  <strong>{{ item.product.name }}</strong>
                  <br />
                  {{item.type}} / {{item.size}}
                  <br />
                  {{item.quantity}} X {{item.product.symbol}}{{ item.product.price }}
                </td>
                <td>{{item.product.symbol}}{{ item.product.price * item.quantity }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
        <v-divider></v-divider>
        <v-row class="mt-3 mr-auto">
          <v-text-field
            v-model="coupon_apply"
            class="mt-2 mx-3"
            label="Discount Code"
            outlined
            dense
          ></v-text-field>
          <v-btn @click="getCoupon" dark class="mt-2">Apply</v-btn>
        </v-row>
        <v-divider></v-divider>
        <v-row class="mr-auto">
          <v-col cols="12" class="d-flex">
            Subtotal:
            <v-spacer></v-spacer>
            {{ shippingCost.symbol }} {{ cartTotalPrice }}
            <!-- {{cart[0].product.symbol}}{{subtotal}} -->
          </v-col>
          <v-col v-if="this.discount != ''" cols="12" class="d-flex mt-n4">
            Coupon({{ shippingCost.symbol }} {{coupon}}):
            <v-spacer></v-spacer>
            {{ shippingCost.symbol }} -{{ (discount).toFixed(2) }}
          </v-col>
          <v-col v-if="this.shippingCost.amount" cols="12" class="d-flex mt-n4">
            Shipping:
            <v-spacer></v-spacer>
           {{ shippingCost.symbol }} {{ (shippingCost.amount).toFixed(2) }}
          </v-col>
        </v-row>
        <v-divider></v-divider>
        <v-row class="mr-auto">
          <v-col cols="12" class="d-flex">
            <strong>Total</strong>
            <v-spacer></v-spacer>
           <strong>
             {{ shippingCost.symbol }} {{ (cartTotalPrice - discount + (shippingCost.amount ? shippingCost.amount : 0)).toFixed(2) }}
           </strong>

          </v-col>
        </v-row>
        <p class="mx-2 red--text body-2 mt-5">
            Please note that a confirmation will be made to local order placed on COD, in case the call won't be attended and confirmed then local order won't be dispatched or might be cancelled.
        </p>
      </v-col>
    </v-row>

    <div hidden>{{discount}}{{billingAdd}} {{finalTotal}} {{userID}}</div>
    <div hidden >{{shippingMethodCost}}</div>
    <div hidden>{{customerEmail}}</div>
    <v-snackbar v-model="snackbar">
      {{ text }}
      <v-btn color="white" text @click="snackbar = false">Close</v-btn>
    </v-snackbar>
  </div>
</template>

<script>
import _ from "lodash";
import { mapState, mapGetters, mapActions } from "vuex"
export default {
  layout: 'mardom',
    metaInfo: {
        // title will be injected into parent titleTemplate
        title: 'Checkout' ,
        titleTemplate: '%s | Khodgi'
        },

  data: () => ({
    menu: false,
    dialog: false,
    loading: false,
    snackbar: false,
    text: "",
    total: null,
    subtotal: null,
    e1: 1,
    radios: "radio-1",
    coupon_apply: "",
    coupon: "",
    discount: "",
    valid: true,
    userid:'',
    login: {
      email: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ],
      password: "",
      passwordRules: [v => !!v || "Password is required"]
    },
    ordersData: {
      customersData: {
        email: "",
        first_name: "",
        last_name: "",
        address: "",
        appartment: "",
        city: "",
        country_region: "",
        postal_code: "",
        phone: "",
        shipping_method: "",
        payment_method: "",
        b_email: "",
        b_first_name: "",
        b_last_name: "",
        b_address: "",
        b_appartment: "",
        b_city: "",
        b_country_region: "",
        b_postal_code: "",
        b_phone: ""
      },
      billing_add_type: "",

    },
    countries: [
      {
        name: "Afghanistan",
        code: "AF"
      },
      {
        name: "Åland Islands",
        code: "AX"
      },
      {
        name: "Albania",
        code: "AL"
      },
      {
        name: "Algeria",
        code: "DZ"
      },
      {
        name: "American Samoa",
        code: "AS"
      },
      {
        name: "AndorrA",
        code: "AD"
      },
      {
        name: "Angola",
        code: "AO"
      },
      {
        name: "Anguilla",
        code: "AI"
      },
      {
        name: "Antarctica",
        code: "AQ"
      },
      {
        name: "Antigua and Barbuda",
        code: "AG"
      },
      {
        name: "Argentina",
        code: "AR"
      },
      {
        name: "Armenia",
        code: "AM"
      },
      {
        name: "Aruba",
        code: "AW"
      },
      {
        name: "Australia",
        code: "AU"
      },
      {
        name: "Austria",
        code: "AT"
      },
      {
        name: "Azerbaijan",
        code: "AZ"
      },
      {
        name: "Bahamas",
        code: "BS"
      },
      {
        name: "Bahrain",
        code: "BH"
      },
      {
        name: "Bangladesh",
        code: "BD"
      },
      {
        name: "Barbados",
        code: "BB"
      },
      {
        name: "Belarus",
        code: "BY"
      },
      {
        name: "Belgium",
        code: "BE"
      },
      {
        name: "Belize",
        code: "BZ"
      },
      {
        name: "Benin",
        code: "BJ"
      },
      {
        name: "Bermuda",
        code: "BM"
      },
      {
        name: "Bhutan",
        code: "BT"
      },
      {
        name: "Bolivia",
        code: "BO"
      },
      {
        name: "Bosnia and Herzegovina",
        code: "BA"
      },
      {
        name: "Botswana",
        code: "BW"
      },
      {
        name: "Bouvet Island",
        code: "BV"
      },
      {
        name: "Brazil",
        code: "BR"
      },
      {
        name: "British Indian Ocean Territory",
        code: "IO"
      },
      {
        name: "Brunei Darussalam",
        code: "BN"
      },
      {
        name: "Bulgaria",
        code: "BG"
      },
      {
        name: "Burkina Faso",
        code: "BF"
      },
      {
        name: "Burundi",
        code: "BI"
      },
      {
        name: "Cambodia",
        code: "KH"
      },
      {
        name: "Cameroon",
        code: "CM"
      },
      {
        name: "Canada",
        code: "CA"
      },
      {
        name: "Cape Verde",
        code: "CV"
      },
      {
        name: "Cayman Islands",
        code: "KY"
      },
      {
        name: "Central African Republic",
        code: "CF"
      },
      {
        name: "Chad",
        code: "TD"
      },
      {
        name: "Chile",
        code: "CL"
      },
      {
        name: "China",
        code: "CN"
      },
      {
        name: "Christmas Island",
        code: "CX"
      },
      {
        name: "Cocos (Keeling) Islands",
        code: "CC"
      },
      {
        name: "Colombia",
        code: "CO"
      },
      {
        name: "Comoros",
        code: "KM"
      },
      {
        name: "Congo",
        code: "CG"
      },
      {
        name: "Congo, The Democratic Republic of the",
        code: "CD"
      },
      {
        name: "Cook Islands",
        code: "CK"
      },
      {
        name: "Costa Rica",
        code: "CR"
      },
      {
        name: 'Cote D"Ivoire',
        code: "CI"
      },
      {
        name: "Croatia",
        code: "HR"
      },
      {
        name: "Cuba",
        code: "CU"
      },
      {
        name: "Cyprus",
        code: "CY"
      },
      {
        name: "Czech Republic",
        code: "CZ"
      },
      {
        name: "Denmark",
        code: "DK"
      },
      {
        name: "Djibouti",
        code: "DJ"
      },
      {
        name: "Dominica",
        code: "DM"
      },
      {
        name: "Dominican Republic",
        code: "DO"
      },
      {
        name: "Ecuador",
        code: "EC"
      },
      {
        name: "Egypt",
        code: "EG"
      },
      {
        name: "El Salvador",
        code: "SV"
      },
      {
        name: "Equatorial Guinea",
        code: "GQ"
      },
      {
        name: "Eritrea",
        code: "ER"
      },
      {
        name: "Estonia",
        code: "EE"
      },
      {
        name: "Ethiopia",
        code: "ET"
      },
      {
        name: "Falkland Islands (Malvinas)",
        code: "FK"
      },
      {
        name: "Faroe Islands",
        code: "FO"
      },
      {
        name: "Fiji",
        code: "FJ"
      },
      {
        name: "Finland",
        code: "FI"
      },
      {
        name: "France",
        code: "FR"
      },
      {
        name: "French Guiana",
        code: "GF"
      },
      {
        name: "French Polynesia",
        code: "PF"
      },
      {
        name: "French Southern Territories",
        code: "TF"
      },
      {
        name: "Gabon",
        code: "GA"
      },
      {
        name: "Gambia",
        code: "GM"
      },
      {
        name: "Georgia",
        code: "GE"
      },
      {
        name: "Germany",
        code: "DE"
      },
      {
        name: "Ghana",
        code: "GH"
      },
      {
        name: "Gibraltar",
        code: "GI"
      },
      {
        name: "Greece",
        code: "GR"
      },
      {
        name: "Greenland",
        code: "GL"
      },
      {
        name: "Grenada",
        code: "GD"
      },
      {
        name: "Guadeloupe",
        code: "GP"
      },
      {
        name: "Guam",
        code: "GU"
      },
      {
        name: "Guatemala",
        code: "GT"
      },
      {
        name: "Guernsey",
        code: "GG"
      },
      {
        name: "Guinea",
        code: "GN"
      },
      {
        name: "Guinea-Bissau",
        code: "GW"
      },
      {
        name: "Guyana",
        code: "GY"
      },
      {
        name: "Haiti",
        code: "HT"
      },
      {
        name: "Heard Island and Mcdonald Islands",
        code: "HM"
      },
      {
        name: "Holy See (Vatican City State)",
        code: "VA"
      },
      {
        name: "Honduras",
        code: "HN"
      },
      {
        name: "Hong Kong",
        code: "HK"
      },
      {
        name: "Hungary",
        code: "HU"
      },
      {
        name: "Iceland",
        code: "IS"
      },
      {
        name: "India",
        code: "IN"
      },
      {
        name: "Indonesia",
        code: "ID"
      },
      {
        name: "Iran, Islamic Republic Of",
        code: "IR"
      },
      {
        name: "Iraq",
        code: "IQ"
      },
      {
        name: "Ireland",
        code: "IE"
      },
      {
        name: "Isle of Man",
        code: "IM"
      },
      {
        name: "Israel",
        code: "IL"
      },
      {
        name: "Italy",
        code: "IT"
      },
      {
        name: "Jamaica",
        code: "JM"
      },
      {
        name: "Japan",
        code: "JP"
      },
      {
        name: "Jersey",
        code: "JE"
      },
      {
        name: "Jordan",
        code: "JO"
      },
      {
        name: "Kazakhstan",
        code: "KZ"
      },
      {
        name: "Kenya",
        code: "KE"
      },
      {
        name: "Kiribati",
        code: "KI"
      },
      {
        name: 'Korea, Democratic People"S Republic of',
        code: "KP"
      },
      {
        name: "Korea, Republic of",
        code: "KR"
      },
      {
        name: "Kuwait",
        code: "KW"
      },
      {
        name: "Kyrgyzstan",
        code: "KG"
      },
      {
        name: 'Lao People"S Democratic Republic',
        code: "LA"
      },
      {
        name: "Latvia",
        code: "LV"
      },
      {
        name: "Lebanon",
        code: "LB"
      },
      {
        name: "Lesotho",
        code: "LS"
      },
      {
        name: "Liberia",
        code: "LR"
      },
      {
        name: "Libyan Arab Jamahiriya",
        code: "LY"
      },
      {
        name: "Liechtenstein",
        code: "LI"
      },
      {
        name: "Lithuania",
        code: "LT"
      },
      {
        name: "Luxembourg",
        code: "LU"
      },
      {
        name: "Macao",
        code: "MO"
      },
      {
        name: "Macedonia, The Former Yugoslav Republic of",
        code: "MK"
      },
      {
        name: "Madagascar",
        code: "MG"
      },
      {
        name: "Malawi",
        code: "MW"
      },
      {
        name: "Malaysia",
        code: "MY"
      },
      {
        name: "Maldives",
        code: "MV"
      },
      {
        name: "Mali",
        code: "ML"
      },
      {
        name: "Malta",
        code: "MT"
      },
      {
        name: "Marshall Islands",
        code: "MH"
      },
      {
        name: "Martinique",
        code: "MQ"
      },
      {
        name: "Mauritania",
        code: "MR"
      },
      {
        name: "Mauritius",
        code: "MU"
      },
      {
        name: "Mayotte",
        code: "YT"
      },
      {
        name: "Mexico",
        code: "MX"
      },
      {
        name: "Micronesia, Federated States of",
        code: "FM"
      },
      {
        name: "Moldova, Republic of",
        code: "MD"
      },
      {
        name: "Monaco",
        code: "MC"
      },
      {
        name: "Mongolia",
        code: "MN"
      },
      {
        name: "Montserrat",
        code: "MS"
      },
      {
        name: "Morocco",
        code: "MA"
      },
      {
        name: "Mozambique",
        code: "MZ"
      },
      {
        name: "Myanmar",
        code: "MM"
      },
      {
        name: "Namibia",
        code: "NA"
      },
      {
        name: "Nauru",
        code: "NR"
      },
      {
        name: "Nepal",
        code: "NP"
      },
      {
        name: "Netherlands",
        code: "NL"
      },
      {
        name: "Netherlands Antilles",
        code: "AN"
      },
      {
        name: "New Caledonia",
        code: "NC"
      },
      {
        name: "New Zealand",
        code: "NZ"
      },
      {
        name: "Nicaragua",
        code: "NI"
      },
      {
        name: "Niger",
        code: "NE"
      },
      {
        name: "Nigeria",
        code: "NG"
      },
      {
        name: "Niue",
        code: "NU"
      },
      {
        name: "Norfolk Island",
        code: "NF"
      },
      {
        name: "Northern Mariana Islands",
        code: "MP"
      },
      {
        name: "Norway",
        code: "NO"
      },
      {
        name: "Oman",
        code: "OM"
      },
      {
        name: "Pakistan",
        code: "PK"
      },
      {
        name: "Palau",
        code: "PW"
      },
      {
        name: "Palestinian Territory, Occupied",
        code: "PS"
      },
      {
        name: "Panama",
        code: "PA"
      },
      {
        name: "Papua New Guinea",
        code: "PG"
      },
      {
        name: "Paraguay",
        code: "PY"
      },
      {
        name: "Peru",
        code: "PE"
      },
      {
        name: "Philippines",
        code: "PH"
      },
      {
        name: "Pitcairn",
        code: "PN"
      },
      {
        name: "Poland",
        code: "PL"
      },
      {
        name: "Portugal",
        code: "PT"
      },
      {
        name: "Puerto Rico",
        code: "PR"
      },
      {
        name: "Qatar",
        code: "QA"
      },
      {
        name: "Reunion",
        code: "RE"
      },
      {
        name: "Romania",
        code: "RO"
      },
      {
        name: "Russian Federation",
        code: "RU"
      },
      {
        name: "RWANDA",
        code: "RW"
      },
      {
        name: "Saint Helena",
        code: "SH"
      },
      {
        name: "Saint Kitts and Nevis",
        code: "KN"
      },
      {
        name: "Saint Lucia",
        code: "LC"
      },
      {
        name: "Saint Pierre and Miquelon",
        code: "PM"
      },
      {
        name: "Saint Vincent and the Grenadines",
        code: "VC"
      },
      {
        name: "Samoa",
        code: "WS"
      },
      {
        name: "San Marino",
        code: "SM"
      },
      {
        name: "Sao Tome and Principe",
        code: "ST"
      },
      {
        name: "Saudi Arabia",
        code: "SA"
      },
      {
        name: "Senegal",
        code: "SN"
      },
      {
        name: "Serbia and Montenegro",
        code: "CS"
      },
      {
        name: "Seychelles",
        code: "SC"
      },
      {
        name: "Sierra Leone",
        code: "SL"
      },
      {
        name: "Singapore",
        code: "SG"
      },
      {
        name: "Slovakia",
        code: "SK"
      },
      {
        name: "Slovenia",
        code: "SI"
      },
      {
        name: "Solomon Islands",
        code: "SB"
      },
      {
        name: "Somalia",
        code: "SO"
      },
      {
        name: "South Africa",
        code: "ZA"
      },
      {
        name: "South Georgia and the South Sandwich Islands",
        code: "GS"
      },
      {
        name: "Spain",
        code: "ES"
      },
      {
        name: "Sri Lanka",
        code: "LK"
      },
      {
        name: "Sudan",
        code: "SD"
      },
      {
        name: "Suriname",
        code: "SR"
      },
      {
        name: "Svalbard and Jan Mayen",
        code: "SJ"
      },
      {
        name: "Swaziland",
        code: "SZ"
      },
      {
        name: "Sweden",
        code: "SE"
      },
      {
        name: "Switzerland",
        code: "CH"
      },
      {
        name: "Syrian Arab Republic",
        code: "SY"
      },
      {
        name: "Taiwan, Province of China",
        code: "TW"
      },
      {
        name: "Tajikistan",
        code: "TJ"
      },
      {
        name: "Tanzania, United Republic of",
        code: "TZ"
      },
      {
        name: "Thailand",
        code: "TH"
      },
      {
        name: "Timor-Leste",
        code: "TL"
      },
      {
        name: "Togo",
        code: "TG"
      },
      {
        name: "Tokelau",
        code: "TK"
      },
      {
        name: "Tonga",
        code: "TO"
      },
      {
        name: "Trinidad and Tobago",
        code: "TT"
      },
      {
        name: "Tunisia",
        code: "TN"
      },
      {
        name: "Turkey",
        code: "TR"
      },
      {
        name: "Turkmenistan",
        code: "TM"
      },
      {
        name: "Turks and Caicos Islands",
        code: "TC"
      },
      {
        name: "Tuvalu",
        code: "TV"
      },
      {
        name: "Uganda",
        code: "UG"
      },
      {
        name: "Ukraine",
        code: "UA"
      },
      {
        name: "United Arab Emirates",
        code: "AE"
      },
      {
        name: "United Kingdom",
        code: "GB"
      },
      {
        name: "United States",
        code: "US"
      },
      {
        name: "United States Minor Outlying Islands",
        code: "UM"
      },
      {
        name: "Uruguay",
        code: "UY"
      },
      {
        name: "Uzbekistan",
        code: "UZ"
      },
      {
        name: "Vanuatu",
        code: "VU"
      },
      {
        name: "Venezuela",
        code: "VE"
      },
      {
        name: "Viet Nam",
        code: "VN"
      },
      {
        name: "Virgin Islands, British",
        code: "VG"
      },
      {
        name: "Virgin Islands, U.S.",
        code: "VI"
      },
      {
        name: "Wallis and Futuna",
        code: "WF"
      },
      {
        name: "Western Sahara",
        code: "EH"
      },
      {
        name: "Yemen",
        code: "YE"
      },
      {
        name: "Zambia",
        code: "ZM"
      },
      {
        name: "Zimbabwe",
        code: "ZW"
      }
    ],
    shipping: {},
    shippingCost: "",
    shipping_cost: ""
  }),

  computed: {
    ...mapState({
        cart: state => state.cart.cart,
    }),

    ...mapGetters({
      authenticated: "auth/authenticated",
      user: "auth/user"
    }),

    cartItemCount() {
      return this.$store.getters['cart/cartItemCount'];
    },
    cartTotalPrice() {
      return this.$store.getters['cart/cartTotalPrice'];
    },
    total2() {
      let total = 0;
      this.cart.forEach(item => {
        total += item.product.price * item.quantity;
      });
      this.subtotal = total;
    },
    finalTotal() {
      this.total = this.cartTotalPrice - this.discount - this.shipping_cost;
    },
    currencySymbol() {
        return this.cart[0].product.symbol;
    },

    billingAdd() {
        if (this.ordersData.billing_add_type == "Same as shipping address") {
            this.ordersData.customersData.b_email = this.ordersData.customersData.email;
            this.ordersData.customersData.b_first_name = this.ordersData.customersData.first_name;
            this.ordersData.customersData.b_last_name = this.ordersData.customersData.last_name;
            this.ordersData.customersData.b_address = this.ordersData.customersData.address;
            this.ordersData.customersData.b_appartment = this.ordersData.customersData.appartment;
            this.ordersData.customersData.b_city = this.ordersData.customersData.city;
            this.ordersData.customersData.b_country_region = this.ordersData.customersData.country_region;
            this.ordersData.customersData.b_postal_code = this.ordersData.customersData.postal_code;
            this.ordersData.customersData.b_phone = this.ordersData.customersData.phone;
        }
    },

    shippingMethodCost() {
      return  [
        this.ordersData.customersData.shipping_method = this.shippingCost.name,
        this.shipping_cost = this.shippingCost.amount
        ]
      },

    customerEmail() {
      if (this.user) {
        this.ordersData.customersData.email = this.user.email;
      }
    },

    userID() {
      if (this.user) {
        this.userid = this.user.id;
      }
    }

  },

  methods: {
      ...mapActions({
                signIn: 'auth/signIn'
            }),

    removeProductFromCart(product) {
      this.$store.dispatch("removeProductFromCart", product);
    },

    clearCartItems() {
      this.$store.dispatch("cart/clearCartItems");
    },

    saveCart() {
      window.localStorage.setItem("cart", JSON.stringify(this.cart));
    },

    getCoupon() {
      axios
        .get("/api/coupons/get-coupon", {
          params: { coupon_apply: this.coupon_apply, total: this.cartTotalPrice }
        })
        .then(res => {
          this.coupon = res.data.coupon_name;
          this.discount = res.data.discount;
        })
        .catch(err => {
          console.log(err);
          this.text = "Invalid coupon!";
          this.snackbar = true;
        });
    },
    loginfx: function() {

        this.signIn(this.login)
                .then(res => {
                   //-------
                })
                .catch( err => {
                    this.text = err.response.data.errors.email[0]
                    this.snackbar = true
                })

    },
    saveOrder() {
        let orderData = {
            orderDetails: {
                customer_id: this.userid,
                customer_email: this.ordersData.customersData.email,
                customer_phone: this.ordersData.customersData.phone,
                shipping_first_name: this.ordersData.customersData.first_name,
                shipping_last_name: this.ordersData.customersData.last_name,
                shipping_address: this.ordersData.customersData.address,
                shipping_appartment: this.ordersData.customersData.appartment,
                shipping_city: this.ordersData.customersData.city,
                shipping_country_region: this.ordersData.customersData.country_region,
                shipping_postal_code: this.ordersData.customersData.postal_code,
                shipping_method: this.ordersData.customersData.shipping_method,
                shipping_cost: this.shipping_cost,
                billing_first_name: this.ordersData.customersData.b_first_name,
                billing_last_name: this.ordersData.customersData.b_last_name,
                billing_address: this.ordersData.customersData.b_address,
                billing_appartment: this.ordersData.customersData.b_appartment,
                billing_city: this.ordersData.customersData.b_city,
                billing_country_region: this.ordersData.customersData.b_country_region,
                billing_postal_code: this.ordersData.customersData.b_postal_code,
                payment_method: this.ordersData.customersData.payment_method,
                coupon: this.coupon,
                currency_symbol: this.currencySymbol,
                discount: this.discount,
                total: this.cartTotalPrice,
            },
            orderedItems: this.cart,
        }

        // Add a request interceptor
        axios.interceptors.request.use((config) => {
            this.loading = true
            return config;
        },  (error) => {
            this.loading = false
            return Promise.reject(error);
        });

        // Add a response interceptor
        axios.interceptors.response.use((response) => {
            this.loading = false
            return response;
        }, (error) => {
            this.loading = false
            return Promise.reject(error);
        });

        axios.post('/api/orders', orderData)
            .then(res => {
                this.$router.push(`/checkout/${res.data.id}`)
                this.clearCartItems()
            })
    }
  },


  created() {

    // axios
    //   .get("/api/my-account")
    //   .then(res => {
    //     this.user = res.data.users;
    //     this.ordersData.customersData.email = res.data.users.email;
    //     this.dialogPhoto = false;
    //   })
    //   .catch(err => console.dir(err.response));

  },

  mounted() {
     axios.get('/api/shipping')
        .then(res => {
          this.shipping = res.data.data
        })
        .catch (err => {
          console.log(err)
        })
  },

  watch: {}
};
</script>

<style scoped>

 select {
  border: 1px solid #ccc;
  height: 40px;
  line-height: 18px;
  margin: 0;
  padding: 3px;
  background: transparent none no-repeat;
  cursor: pointer;
  width: 50%;
}

@media screen and (min-width:0) {
  /* for relatively modern browsers including IE 8+ */
  select {
    border-radius: 4px;
    background-image: url("data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAaCAYAAACkVDyJAAAAlElEQVRIx+2VwQ3AIAhFwTiFi7KC7uYGHo1z0Et7MWkjaEiaQOJBDzy/wgdqrXwHWKyAiGAZDnSgHBhC+IfCUgqbKXxgGqhY4QyRQkUK35KLoK01iZd+xZKXRuEfbvdQPPGkAABEhMeLhohE5yfaAufk93791r13zQDmnLNqcOMYg1NKmoJgTRHtmDeaWZvPQweaAi8PXSmZJU3QRAAAAABJRU5ErkJggg==");
    background-position: -50px -50px;
  }
}

@media screen and (-webkit-min-device-pixel-ratio:0) {
  /* for Webkit */
  select {
    -webkit-appearance: none;
    background-position: right center;
    padding: 3px 32px 3px 5px;
  }
}

@-moz-document url-prefix() {
  /* for Firefox */
  select {
    -moz-appearance: none;
    text-indent: 0.01px;
    text-overflow: "";
    background-position: right center;
    padding-right: 16px;
  }

  /* hides the dotted outline on focus in FF (See SO#3773430) */
  select:-moz-focusring {
    color: transparent;
    text-shadow: 0 0 0 #000;
  }
}

@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
  /* for IE10+ */
  select::-ms-expand {
    display: none;
  }
  select {
    background-position: right center;
    padding-right: 30px;
  }
}

</style>
