<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <meta name="csrf-token" content="{{ csrf_token() }}"/>

        <?php

           $currentPath = \Illuminate\Support\Facades\Request::path();

            // this is horrendous, but time constraints so...
           switch($currentPath) {

               case '/':
                   $title = "Vote Henry D'Angela For Mayor Of Thorold";
                   $description = "Thorold Regional Councillor Henry D’Angela is officially running for Mayor of Thorold. Planning Thorold's Future Together.";
                   break;

               case 'survey':
                   $title = "Important Issues Survey | Henry D'Angela";
                   $description = 'We are gathering data on what the people of Thorold want. Please fill out the questions below so we can better serve you. ';
                   break;

               case 'bio':
                   $title = "Bio | Henry D'Angela";
                   $description = "Henry was born and raised in Thorold and graduated from Wilfrid Laurier University in 1989 with a degree in economics. He is the President and CEO of D'Angela Financial Services, which has been providing personal and corporate tax planning for the past 27 years.";
                   break;

               case 'sign-request':
                   $title = "Sign Request | Henry D'Angela";
                   $description = 'Request a sign. Please note, signs are not permitted until Sept 18, 2018. ';
                   break;

               case 'volunteer':
                   $title = "Volunteer | Henry D'Angela";
                   $description = "Request to volunteer for the Henry D'Angela Campaign. ";
                   break;

               case 'donate':
                   $title = "Donation | Henry D'Angela";
                   $description = "Request to make a donation to the Henry D'Angela Campaign. ";
                   break;

               case 'community-involvement':
                   $title = "Community Involvement | Henry D'Angela";
                   $description = 'Being part of a community means more than just calling Thorold “home”.  For Henry being a real part of Thorold means giving back to the people who helped raise and influence you.  It means sharing your neighbours’ burdens, joys, sorrows and successes.  It means serving your fellow citizens in ways that benefit the whole community.';
                   break;

               case 'political-experience':
                   $title = "Political Experience | Henry D'Angela";
                   $description = 'Henry has long believed he could make a difference by taking an active role in municipal governance. At the age of 31, he won his first electoral victory – becoming a member of the Thorold Hydro Electric Commission for the 1997-2000 term. ';
                   break;

               case 'accomplishments/mayor':
                   $title = "Accomplishments As Mayor | Henry D'Angela";
                   $description = 'Henry’s active participation, exemplary attendance and experience has lead to the following accomplishments. 100% attendance at Thorold city council meeting during the four-year term. constructed a new outdoor aquatic centre at Richmond Street Park. constructed a new splash pad in Port Robinson';
                   break;

               case 'accomplishments/regional-councillor':
                   $title = "Accomplishments As Regional Councillor | Henry D'Angela";
                   $description = 'Henry’s active participation, exemplary attendance and experience has lead to the following accomplishments. uploading of Collier road to the Region of Niagara. the city of Thorold receiving funding for Collier/Richmond intersection upgrades. the arterial road review with three more city roads being uploaded to the Region of Niagara';
                   break;

               case 'supports':
                   $title = "Supports | Henry D'Angela";
                   $description = 'Henry supports a wide variety of issues listed below. Local government being open and transparent. Stable, responsible taxes reflect real needs, not political wish lists. Council remaining accountable throughout its term of office';
                   break;

               case 'fundraiser':
                   $title = "Fundraiser | Henry D'Angela";
                   $description = 'Thorold Mayoral Candidate Henry D’Angela is inviting constituents to join him at a Wine and Cheese Fundraiser on September 20 in Thorold.';
                   break;

               default:
                   $title = 'Page Not Found';
                   $description = '';
           }

            if (strpos($currentPath, 'admin') !== false) {
                $title = "Admin | Henry D'Angela";
                $description = '';
            }

       ?>

        <title><?php echo $title; ?></title>

        <meta name="description" content="<?php echo $description; ?>"/>
        <meta name="keywords" content="Henry, D'Angela, Dangela, DAngela, mayor, thorold, vote, 2018, survey"/>

        <link href="/css/app.css" rel="stylesheet"/>

        <link href="https://fonts.googleapis.com/css?family=Heebo:400,500,700" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Varela" rel="stylesheet">

        <meta property="og:title" content="<?php echo $title; ?>">
        <meta property="og:description" content="<?php echo $description; ?>">
        <meta property="og:site_name" content="Henry D'Angela">
        <meta property="og:url" content="<?php echo url()->full(); ?>">
        <meta property="og:type" content="website">
        <meta property="og:image" content="https://henrydangela.ca/images/main.jpg">

    </head>
    <body>
        <div id="main_app">
            <main-app>
                <div style="height: 0px; overflow: hidden;">

                    <header>
                        <nav>
                            <ul class="nav">
                                <li class="nav-item"><a href="/" class="nav-link" title="Home">Home</a></li>
                                <li class="nav-item"><a href="/bio" class="nav-link" title="Bio">Bio</a></li>
                                <li class="nav-item"><a href="/community-involvement" class="nav-link" title="Community Involvement">Community Involvement</a></li>
                                <li class="nav-item"><a href="/political-experience" class="nav-link" title="Political Experience">Political Experience</a></li>
                                <li class="nav-item"><a href="/accomplishments/mayor" class="nav-link" title="Accomplishments As Mayor">Accomplishments As Mayor</a></li>
                                <li class="nav-item"><a href="/accomplishments/regional-councillor" class="nav-link" title="Accomplishments As Regional Councillor">Accomplishments As Regional Councillor</a></li>
                                <li class="nav-item"><a href="/supports" class="nav-link" title="Supports">Supports</a></li>
                                <li class="nav-item"><a href="/fundraiser" class="nav-link" title="Fundraiser">Fundraiser</a></li>
                                <li class="nav-item"><a href="/survey" class="nav-link" title="Survey">Survey</a></li>
                                <li class="nav-item"><a href="/sign-request" class="nav-link" title="Survey">Sign Request</a></li>
                                <li class="nav-item"><a href="/volunteer" class="nav-link" title="Survey">Volunteer</a></li>
                                <li class="nav-item"><a href="/donate" class="nav-link" title="Survey">Donate</a></li>
                            </ul>
                        </nav>
                    </header>

                    <?php

                        if($currentPath === '/') {

                            echo '<h1>' . "Vote Henry D'Angela For Mayor" . '</h1>';

                            echo '<p>' . "Planning Thorold's Future Together." . '</p>';

                        } elseif($currentPath === 'bio') {

                            echo '<h1>' . "Biography" . '</h1>';

                            echo '<p>' . "For Thorold native Henry D’Angela, there has been so much more to life than just personal and financial achievement….much more." . '</p>';

                            echo '<p>' . "Henry was born and raised in Thorold and graduated from Wilfrid Laurier University in 1989 with a degree in economics. He is the President and CEO of D'Angela Financial Services, which has been providing personal and corporate tax planning for the past 27 years." . '</p>';

                            echo '<p>' . "He and his wife of 21 years, Rina, have two children, Julie and Kyle." . '</p>';

                            echo '<p>' . 'His business expertise and dedication earned him the 2006 Niagara "Top 40 Under 40" business award. For Henry, success can only be realized when those around you succeed as well. This philosophy has launched a lifetime of community involvement, sharing and public service.' . '</p>';

                        } elseif ($currentPath === 'survey') {

                            echo '<h1>' . "Please fill out the survey below" . '</h1>';

                            echo '<p>' . "We are gathering data on what the people of Thorold want. Please fill out the questions below so we can better serve you." . '</p>';

                        } elseif($currentPath === 'sign-request') {

                            echo '<h1>' . "Sign Request" . '</h1>';

                            echo '<p>' . "Please note, signs are not permitted until Sept 18, 2018." . '</p>';

                        } elseif($currentPath === 'volunteer') {

                            echo '<h1>' . "Volunteer For The Henry D'Angela Campaign" . '</h1>';

                            echo '<p>' . "Become a volunteer for the Henry D'Angela campaign for Thorold mayor." . '</p>';

                        } elseif($currentPath === 'donate') {

                            echo '<h1>' . "Donate To The Henry D'Angela Campaign" . '</h1>';

                            echo '<p>' . "Make a donation to the Henry D'Angela campaign for Thorold mayor." . '</p>';

                        } else {

                            echo '<h1> Page Not Found </h1>';

                        }

                        if (strpos($currentPath, 'admin') !== false) {
                            echo '<h1> Admin Section </h1>';
                        }
                    ?>

                    <footer>
                        ©2018 Henry D'Angela. All Rights Reserved
                    </footer>
                </div>
            </main-app>
        </div>

        <footer style="height: 0px; overflow: hidden;">

            <p>Henry D'Angela is endorsed by <a target="_blank" href="https://www.abetterniagara.com/endorsements">A Better Niagara</a> </p>

            <p><a target="_blank" href="https://www.facebook.com/people/Henry-DAngela/100010470600081">Henry's Facebook</a></p>

            <p>Authorized and paid for by Henry D’Angela, © 2018 Henry D'Angela. All Rights Reserved</p>

            <script async src="/js/app.js"></script>

            <!-- Global site tag (gtag.js) - Google Analytics -->
            <script async src="https://www.googletagmanager.com/gtag/js?id=UA-59455628-3"></script>
            <script>
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'UA-59455628-3');
            </script>

        </footer>
    </body>
</html>
