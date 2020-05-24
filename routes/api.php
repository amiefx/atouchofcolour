<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


//public routes
Route::get('me', 'User\MeController@getMe');
Route::get('categories/home-section', 'Categories\CategoryController@homeSection');
Route::resource('categories', 'Categories\CategoryController');

Route::group(['namespace' => 'Front'], function () {
    // Home slide show
    Route::resource('home-slides', 'HomeSlidesController');

    // Products
    Route::get('products/categories/{slug}', 'ProductsController@categories');
    Route::get('products/get-related-products/{id}', 'ProductsController@getRelatedProducts');
    Route::get('products/get-home-products', 'ProductsController@getHomeProducts');
    Route::resource('products', 'ProductsController');

    // Product sizes
    Route::resource('product-sizes', 'ProductSizeController');

    // Ratings
    Route::resource('ratings', 'RatingController');

    // Other Pages
    Route::get('about', 'AboutController@index');
    Route::get('delivery', 'DeliveryController@index');
    Route::get('faq', 'FaqsController@index');
    Route::get('privacy', 'PrivacyController@index');
    Route::get('order-return', 'OrderReturnsController@index');

    // Social Media link
    Route::get('social', 'SocialController@index');

    // Search
    Route::post('search', 'SearchController@index');

    // Shipping Methods
    Route::get('shipping', 'ShippingController@index');

    // Coupons
    Route::get('/coupons/get-coupon', 'CouponsController@getCoupon');

    // Orders
    Route::resource('/orders', 'OrdersController');

});

// Route group for authenticated users only
Route::group(['middleware' => ['auth:api']], function () {
     Route::post('logout', 'Auth\LoginController@logout');
     Route::put('settings/profile', 'User\SettingsController@updateProfile');
     Route::put('settings/password', 'User\SettingsController@updatePassword');

     Route::get('my-reviews', 'Front\RatingController@myReviews');
     Route::get('my-orders', 'Front\OrdersController@myOrders');

     //Wishlist
     Route::resource('wishlist', 'Front\WishListController');

    Route::group(['namespace' => 'Admin', 'middleware' => 'admin'], function () {
        // Usere management
        Route::resource('roles', 'RolesController');
        Route::post('email/verify', 'UsersController@verifyEmail');
        Route::post('change-role', 'UsersController@changeRole');
        Route::post('change-status', 'UsersController@changeStatus');
        Route::post('change-photo', 'UsersController@changePhoto');
        Route::post('users/delete', 'UsersController@deleteAll');
        Route::resource('users', 'UsersController');

        //categories
        Route::post('admin/categories/change-active', 'CategoriesController@changeActiveStatus');
        Route::post('admin/categories/change-menu', 'CategoriesController@changeMenuStatus');
        Route::post('admin/categories/change-home-section', 'CategoriesController@changeHsectionStatus');
        Route::post('admin/categories/change-photo', 'CategoriesController@changePhoto');
        Route::resource('admin/categories', 'CategoriesController');

        // Home Slides
        Route::post('admin/home-slides/change-photoL', 'HomeSlideController@changePhotoL');
        Route::post('admin/home-slides/change-photoS', 'HomeSlideController@changePhotoS');
        Route::resource('admin/home-slides', 'HomeSlideController');

        // Ratings
        Route::put('admin/ratings/approve/{id}', 'RatingsController@approve');
        Route::resource('admin/ratings', 'RatingsController');

        // Attribute_Sets
        Route::resource('admin/attribute-sets', 'AttributeSetsController');

        // Attributes
        Route::resource('admin/attributes', 'AttributesController');

        // Product sizes
        Route::resource('admin/product-sizes', 'ProductSizesController');

        // Products
        Route::post('admin/products/change-photo1', 'ProductsController@changePhoto1');
        Route::post('admin/products/change-photo2', 'ProductsController@changePhoto2');
        Route::post('admin/products/change-photo3', 'ProductsController@changePhoto3');
        Route::post('admin/products/change-photo4', 'ProductsController@changePhoto4');
        Route::post('admin/products/change-photo5', 'ProductsController@changePhoto5');
        Route::post('admin/products/change-photo6', 'ProductsController@changePhoto6');
        Route::resource('admin/products', 'ProductsController');

        // Product sizes
        Route::post('admin/product-sizes/multiupdate', 'ProductSizesController@multiUpdate');
        Route::resource('admin/product-sizes', 'ProductSizesController');

        // Other Pages
        Route::resource('admin/about', 'AboutController');
        Route::resource('admin/delivery', 'DeliveryController');
        Route::resource('admin/faq', 'FaqsController');
        Route::resource('admin/privacy', 'PrivacyController');
        Route::resource('admin/order-return', 'OrderReturnsController');

        // Social Media link
        Route::resource('admin/social', 'SocialController');

        // Shipping Methods
        Route::resource('admin/shipping', 'ShippingController');

        // Coupons
        Route::post('admin/orders/change-status', 'OrdersController@changeStatus');
        Route::resource('admin/coupons', 'CouponsController');

        // Orders
        Route::get('admin/orders/single-order/{id}', 'OrdersController@singleOrder');
        Route::post('admin/orders/change-status', 'OrdersController@changeStatus');
        Route::resource('admin/orders', 'OrdersController');

    });

});

// Route group for guests only
Route::group(['middleware' => ['guest:api']], function () {
     Route::post('register', 'Auth\RegisterController@register');
     Route::post('login', 'Auth\LoginController@login');
     Route::post('password/email', 'Auth\ForgotPasswordController@sendResetLinkEmail');
     Route::post('password/reset', 'Auth\ResetPasswordController@reset');
});
