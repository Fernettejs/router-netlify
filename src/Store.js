import Vue from "vue";
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    shirts: [
      {
        name: 'T-shirt',
        price: 25.00,
        image: '../assets/images/white-t-shirt.png',
        stars: 5,
        totalReviews: 230,
        details: 'Good shirt.',
      },
      {
        name: 'Notebook Dell Inspiron i15-3567-A30P Intel Core 7ª i5 4GB',
        price: 2284,
        image: 'https://images-americanas.b2w.io/produtos/01/00/item/133280/7/133280747G1.jpg',
        stars: 3.4,
        totalReviews: 20,
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      },
    ],

    cups: [
      {
        name: 'America Cup',
        price: 9.99,
        image: '../assets/images/white-t-shirt.png',
        stars: 5,
        totalReviews: 20,
        details: 'Will hold your drink!',
      },
    ],

    cartProducts: [],
    currentProduct: {},
    showModal: false,
    showPopupCart: false,
  },

  getters: {
    getNotebooks: state => state.shirts,
    getSmartphones: state => state.cups,
    getAllProducts: state => state.notebooks.concat(state.cups),
    getProductsInCart: state => state.cartProducts,
    getCurrentProduct: state => state.currentProduct,
    getShowModal: state => state.showModal,
    getPopupCart: state => state.showPopupCart,
  },

  mutations: {
    ADD_PRODUCT: (state, product) => {
      state.cartProducts.push(product);
    },
    REMOVE_PRODUCT: (state, index) => {
      state.cartProducts.splice(index, 1);
    },
    CURRENT_PRODUCT: (state, product) => {
      state.currentProduct = product;
    },
    SHOW_MODAL: (state) => {
      state.showModal = !state.showModal;
    },
    SHOW_POPUP_CART: (state) => {
      state.showPopupCart = !state.showPopupCart;
    },
  },

  actions: {
    addProduct: (context, product) => {
      context.commit('ADD_PRODUCT', product);
    },
    removeProduct: (context, index) => {
      context.commit('REMOVE_PRODUCT', index);
    },
    currentProduct: (context, product) => {
      context.commit('CURRENT_PRODUCT', product);
    },
    showOrHiddenModal: (context) => {
      context.commit('SHOW_MODAL');
    },
    showOrHiddenPopupCart: (context) => {
      context.commit('SHOW_POPUP_CART');
    },
  },
});

// save our state (isPanel open or not) 
export const store = Vue.observable({
    isNavOpen: false
});

// We call toggleNav anywhere we need it in our app
export const mutations = {
    toggleNav() {
        store.isNavOpen = !store.isNavOpen
    }
};