<!doctype html>
<html lang="{{ app()->getLocale() }}">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <meta name="csrf-token" content="{{ csrf_token() }}" />

    <?php

    $currentPath = \Illuminate\Support\Facades\Request::path();

    $metaInfo = [
        '/' => [
            'title' => "Vote Henry D'Angela For Thorold Council",
            'desc' => "Thorold Regional Councillor Henry D’Angela is officially running for Thorold Council. Planning Thorold's Future Together."
        ],
        'survey' => [
            'title' => "Important Issues Survey | Henry D'Angela",
            'desc' => 'We are gathering data on what the people of Thorold want. Please fill out the questions below so we can better serve you.'
        ],
        'bio' => [
            'title' => "Bio | Henry D'Angela",
            'desc' => "Henry was born and raised in Thorold and graduated from Wilfrid Laurier University in 1989 with a degree in economics. He is the President and CEO of D'Angela Financial Services, which has been providing personal and corporate tax planning for the past 31 years."
        ],
        'sign-request' => [
            'title' => "Sign Request | Henry D'Angela",
            'desc' => 'Request a sign.'
        ],
        'volunteer' => [
            'title' => "Volunteer | Henry D'Angela",
            'desc' => "Request to volunteer for the Henry D'Angela Campaign."
        ],
        'donate' => [
            'title' => "Donation | Henry D'Angela",
            'desc' => "Request to make a donation to the Henry D'Angela Campaign."
        ],
        'community-involvement' => [
            'title' => "Community Involvement | Henry D'Angela",
            'desc' => 'Being part of a community means more than just calling Thorold “home”.  For Henry being a real part of Thorold means giving back to the people who helped raise and influence you.  It means sharing your neighbours’ burdens, joys, sorrows and successes.  It means serving your fellow citizens in ways that benefit the whole community.'
        ],
        'political-experience' => [
            'title' => "Political Experience | Henry D'Angela",
            'desc' => 'Henry has long believed he could make a difference by taking an active role in municipal governance. At the age of 31, he won his first electoral victory – becoming a member of the Thorold Hydro Electric Commission for the 1997-2000 term. '
        ],
        'accomplishments/mayor' => [
            'title' => "Accomplishments As Mayor | Henry D'Angela",
            'desc' => 'Henry’s active participation, exemplary attendance and experience has lead to the following accomplishments. 100% attendance at Thorold city council meeting during the four-year term. constructed a new outdoor aquatic centre at Richmond Street Park. constructed a new splash pad in Port Robinson'
        ],
        'accomplishments/regional-councillor' => [
            'title' => "Accomplishments As Regional Councillor | Henry D'Angela",
            'desc' => 'Henry’s active participation, exemplary attendance and experience has lead to the following accomplishments. uploading of Collier road to the Region of Niagara. the city of Thorold receiving funding for Collier/Richmond intersection upgrades. the arterial road review with three more city roads being uploaded to the Region of Niagara'
        ],
        'supports' => [
            'title' => "Supports | Henry D'Angela",
            'desc' => 'Henry supports a wide variety of issues listed below. Local government being open and transparent. Stable, responsible taxes reflect real needs, not political wish lists. Council remaining accountable throughout its term of office'
        ],
        'fundraiser' => [
            'title' => "Fundraiser | Henry D'Angela",
            'desc' => 'Thorold Mayoral Candidate Henry D’Angela is inviting constituents to join him at a Wine and Cheese Fundraiser on September 20 in Thorold.'
        ],
        'login' => [
            'title' => "Login | Henry D'Angela",
            'desc' => ''
        ],
        'default' => [
            'title' => "Page Not Found | Henry D'Angela",
            'desc' => ''
        ],
        'admin' => [
            'title' => "Admin | Henry D'Angela",
            'desc' => ''
        ],
        
    ];

    if (isset($metaInfo[$currentPath])) {
        $title = $metaInfo[$currentPath]['title'];
        $description = $metaInfo[$currentPath]['desc'];
    } else {
        $title = $metaInfo['default']['title'];
        $description = $metaInfo['default']['desc'];
    }

    if (strpos($currentPath, 'admin') !== false) {
        $title = $metaInfo['admin']['title'];
        $description = $metaInfo['admin']['desc'];
    }
    ?>

    <title><?php echo $title; ?></title>

    <!--<meta name="description" content="<?php //echo $description; ?>" />-->
    <meta name="keywords" content="Henry, D'Angela, Dangela, DAngela, council, councillor, mayor, thorold, vote, 2022, survey" />

    <link href="/css/app.css" rel="stylesheet" />

    <link href="https://fonts.googleapis.com/css?family=Heebo:400,500,700" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Varela" rel="stylesheet">

    <meta property="og:title" content="<?php echo $title; ?>">
    <meta property="og:description" content="<?php echo $description; ?>">
    <meta property="og:site_name" content="Henry D'Angela">
    <meta property="og:url" content="<?php echo url()->full(); ?>">
    <meta property="og:type" content="website">
    <meta property="og:image" content="https://henrydangela.ca/images/main.jpg">

    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-59455628-3"></script>
    <script>
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }
        gtag('js', new Date());

        gtag('config', 'UA-59455628-3');
    </script>

    <script>
        window.metaInfo = <?php echo json_encode($metaInfo); ?>
    </script>

    <script async src="/js/app.js"></script>
</head>

<body>
    <div id="main_app">
        <main-app></main-app>
    </div>
</body>

</html>