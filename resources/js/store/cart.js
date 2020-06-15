
let cart = window.localStorage.getItem('cart');

export default {
    namespaced: true,

    state: {
        cart: cart ? JSON.parse(cart) : [],
    },

    getters: {
        cartItemCount(state) {
            return state.cart.length;
        },

        cartTotalPrice(state) {
            let total = 0;
            state.cart.forEach(item => {
                total += item.price * item.quantity;
            })
            return total;
        }
    },

    mutations: {

        ADD_TO_CART(state, { product, quantity, price, type, size, customSize }) {

            let productInCart = state.cart.find(item => {
                return item.product.id === product.id;
            });

            if (productInCart) {
                productInCart.quantity += quantity;
                window.localStorage.setItem('cart', JSON.stringify(state.cart));
                return;
            }

            state.cart.push({
                product,
                quantity,
                price,
                type,
                size,
                customSize
            })

            window.localStorage.setItem('cart', JSON.stringify(state.cart));
        },

        REMOVE_PRODUCT_FROM_CART(state, product) {
            state.cart = state.cart.filter(item => {
                return item.product.id !== product.id;
            })
            window.localStorage.setItem('cart', JSON.stringify(state.cart));
        },

        CLEAR_CART_ITEMS(state) {
            state.cart = [];
            window.localStorage.setItem('cart', JSON.stringify(state.cart));
        },

       DECREASE_QTY (state, product) {

         let  productInCart = state.cart.find(item => {
           return item.product.id === product.id;
         });

         if (productInCart) {
             productInCart.quantity--;
             window.localStorage.setItem('cart', JSON.stringify(state.cart));
             return;
         }

       },

       INCREASE_QTY (state, product) {

         let  productInCart = state.cart.find(item => {
           return item.product.id === product.id;
         });

         if (productInCart) {
             productInCart.quantity++;
             window.localStorage.setItem('cart', JSON.stringify(state.cart));
             return;
         }

       }
    },

    actions: {

        addProductToCart({ commit }, { product, quantity, price, type, size, customSize }) {
            commit('ADD_TO_CART', { product, quantity, price, type, size, customSize });
        },

        removeProductFromCart({ commit }, product) {
            commit('REMOVE_PRODUCT_FROM_CART', product);
        },

        clearCartItems({ commit }) {
            commit('CLEAR_CART_ITEMS');
        },

        decreaseProductQty ({ commit }, product) {
        commit('DECREASE_QTY', product)
        },

        increaseProductQty ({ commit }, product) {
        commit('INCREASE_QTY', product)
        }

    }

}
