<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <link rel="apple-touch-icon" sizes="180x180" href="{{ URL::asset('/favicon/apple-touch-icon.png') }}">
        <link rel="icon" type="image/png" sizes="32x32" href="{{ URL::asset('/favicon/favicon-32x32.png') }}">
        <link rel="icon" type="image/png" sizes="16x16" href="{{ URL::asset('/favicon/favicon-16x16.png') }}">
        <link rel="manifest" href="{{ URL::asset('/favicon/site.webmanifest') }}">

        <title>Khodgi</title>
        <link rel="stylesheet" href="{{asset('css/app.css')}}">
        <script src="https://www.google.com/recaptcha/api.js?onload=vueRecaptchaApiLoaded&render=explicit" async defer>
</script>
    </head>
    <body>
        <div id="app">
            <App />
        </div>

        <script src="{{asset('js/app.js')}}"></script>

    </body>
</html>
