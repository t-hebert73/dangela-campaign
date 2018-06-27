<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <meta name="csrf-token" content="{{ csrf_token() }}"/>

        <title>Vote Henry D'Angela for Mayor of Thorold</title>

        <meta name="description" content="Thorold Regional Councillor Henry D’Angela is officially running for Mayor of Thorold. D’Angela is well aware of the responsibilities that come with the position as Mayor. D’Angela has been currently serving as Regional Councillor for the past eight years and was Mayor of Thorold from 2006-2010."/>
        <meta name="keywords" content="Henry, D'Angela, mayor, thorold, vote, 2018"/>

        <link href="/css/app.css" rel="stylesheet"/>

        <link href="https://fonts.googleapis.com/css?family=Heebo:400,500,700" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Varela" rel="stylesheet">

    </head>
    <body>
        <div id="main_app">
            <main-app>
                <div style="height: 0px; overflow: hidden;">

                    <header>
                        <nav>
                            <ul class="nav">
                                <li class="nav-item"><a href="/" class="nav-link" title="Home">Home</a></li>
                                <li class="nav-item"><a href="/about" class="nav-link" title="About">About</a></li>
                                <li class="nav-item"><a href="/survey" class="nav-link" title="Survey">Survey</a></li>
                            </ul>
                        </nav>
                    </header>

                    <h1>Vote Henry D'Angela For Mayor</h1>

                    <p>Planning Thorold's Future Together.</p>

                    <footer>
                        ©2018 Henry D'Angela. All Rights Reserved
                    </footer>
                </div>
            </main-app>
        </div>

        <footer>
            <script src="/js/app.js"></script>
        </footer>
    </body>
</html>
