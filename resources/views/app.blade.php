<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <meta name="csrf-token" content="{{ csrf_token() }}"/>

        <title>Vote Henry D'Angela for Mayor of Thorold</title>

        <meta name="description" content="Thorold Regional Councillor Henry D’Angela is officially running for Mayor of Thorold. D’Angela is well aware of the responsibilities that come with the position as Mayor. D’Angela has been currently serving as Regional Councillor for the past eight years and was Mayor of Thorold from 2006-2010."/>
        <meta name="keywords" content="Henry, D'Angela, Dangela, mayor, thorold, vote, 2018"/>

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

                    <?php

                        $currentPath = \Illuminate\Support\Facades\Request::path();

                        if($currentPath === '/') {

                            echo '<h1>' . "Vote Henry D'Angela For Mayor" . '</h1>';

                            echo '<p>' . "Planning Thorold's Future Together." . '</p>';

                        } elseif ($currentPath === 'survey') {

                            echo '<h1>' . "Please fill out the survey below" . '</h1>';

                            echo '<p>' . "We are gathering data on what the people of Thorold want. Please fill out the questions below so we can better serve you." . '</p>';

                        } elseif($currentPath === 'about') {

                            echo '<h1>' . "Media Release" . '</h1>';

                            echo '<p>' . "Henry D’Angela officially registered to run for Mayor of Thorold, May 16, 2018. Thorold Regional Councillor Henry D’Angela is officially running for Mayor of Thorold. D’Angela filed his campaign papers at Thorold City Hall today. D’Angela is well aware of the responsibilities that come with the position as Mayor. D’Angela has been currently serving as Regional Councillor for the past eight years and was Mayor of Thorold from 2006-2010." . '</p>';

                            echo '<p>' . "In addition to being elected to represent Thorold as its Regional Councillor in 2010, D’Angela was elected to Thorold Hydro Electric Commission in 1997 and elected to Thorold City Councillor in 2000 before becoming Mayor in 2006. Henry has served as treasurer on the Welland Canal Foundation, chair of the Niagara Sports Commission and chaired numerous regional committees. He is currently Chair of the Niagara Regional Housing (NRH) Board and last term served as the Niagara Regional Police Board Chair." . '</p>';

                            echo '<p>' . "&quot;I am familiar with the challenges and opportunities facing our city through my work at the City, at the Region and in the community”, said D’Angela, “but I think it’s essential to take direction from my constituents. I will be talking to Thorold residents and businesses to find out what’s important to them. As Mayor, one of the most important roles, is to listen and advocate for Thorold. I want to ensure that we are meeting Thorold’s needs.&quot;" . '</p>';

                            echo '<p>' . "Henry D’Angela was born and raised in Thorold. He is married to Rina, has two children and has run his own accounting firm, D’Angela Financial Services for the past 25 years." . '</p>';

                        } else {

                            echo '<h1> Page Not Found </h1>';

                        }
                    ?>

                    <footer>
                        ©2018 Henry D'Angela. All Rights Reserved
                    </footer>
                </div>
            </main-app>
        </div>

        <footer>
            <script async src="/js/app.js"></script>
        </footer>
    </body>
</html>
