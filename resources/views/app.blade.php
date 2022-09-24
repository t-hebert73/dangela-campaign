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
            'desc' => "Henry D’Angela is officially running for Thorold Council. Planning Thorold's Future Together. Leadership and Experience working for you!"
        ],
        'survey' => [
            'title' => "Important Issues Survey | Henry D'Angela For Thorold Council",
            'desc' => 'We are gathering data on what the people of Thorold want. Please fill out the questions below so we can better serve you.'
        ],
        'bio' => [
            'title' => "Bio | Henry D'Angela For Thorold Council",
            'desc' => "Henry was born and raised in Thorold and graduated from Wilfrid Laurier University in 1989. He is the President and CEO of D'Angela Financial Services."
        ],
        'sign-request' => [
            'title' => "Sign Request | Henry D'Angela For Thorold Council",
            'desc' => 'Request a sign.'
        ],
        'volunteer' => [
            'title' => "Volunteer | Henry D'Angela For Thorold Council",
            'desc' => "Request to volunteer for the Henry D'Angela Campaign."
        ],
        'donate' => [
            'title' => "Donation | Henry D'Angela For Thorold Council",
            'desc' => "Request to make a donation to the Henry D'Angela Campaign."
        ],
        'community-involvement' => [
            'title' => "Community Involvement | Henry D'Angela For Thorold Council",
            'desc' => 'Being part of a community means more than just calling Thorold “home”. For Henry being a real part of Thorold means giving back to the people who helped raise and influence you.'
        ],
        'political-experience' => [
            'title' => "Political Experience | Henry D'Angela For Thorold Council",
            'desc' => 'Henry has long believed he could make a difference by taking an active role in municipal governance.'
        ],
        'accomplishments/mayor' => [
            'title' => "Accomplishments As Mayor | Henry D'Angela For Thorold Council",
            'desc' => 'Henry’s experience has lead to many accomplishments such as constructing a new outdoor aquatic centre at Richmond Street Park, a new splash pad in Port Robinson and much more.'
        ],
        'accomplishments/regional-councillor' => [
            'title' => "Accomplishments As Regional Councillor | Henry D'Angela For Thorold Council",
            'desc' => 'Henry’s experience has lead to many accomplishments such as the city of Thorold receiving funding for Collier/Richmond intersection upgrades, uploading of Collier road to the Region of Niagara and much more.'
        ],
        'supports' => [
            'title' => "Supports | Henry D'Angela For Thorold Council",
            'desc' => 'Henry supports a wide variety of issues listed below. Local government being open and transparent. Stable, responsible taxes reflect real needs, not political wish lists.'
        ],
        'fundraiser' => [
            'title' => "Fundraiser | Henry D'Angela For Thorold Council",
            'desc' => 'Thorold Mayoral Candidate Henry D’Angela is inviting constituents to join him at a Wine and Cheese Fundraiser on September 20 in Thorold.'
        ],
        'login' => [
            'title' => "Login | Henry D'Angela For Thorold Council",
            'desc' => ''
        ],
        'default' => [
            'title' => "Page Not Found | Henry D'Angela For Thorold Council",
            'desc' => "Oops, page not found.. click around to find out more about Henry D'Angela."
        ],
        'admin' => [
            'title' => "Admin | Henry D'Angela For Thorold Council",
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
    <link rel="preload" fetchpriority="high" as="image" href="/images/main.jpg" type="image/jpeg">

    <link href="https://fonts.googleapis.com/css?family=Heebo:400,700" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Varela" rel="stylesheet">

    <meta property="og:title" content="<?php echo $title; ?>">
    <meta property="og:description" content="<?php echo $description; ?>">
    <meta property="og:site_name" content="Henry D'Angela For Thorold Council">
    <meta property="og:url" content="<?php echo url()->full(); ?>">
    <meta property="og:type" content="website">
    <meta property="og:image" content="https://henrydangela.ca/images/main.jpg">

    <?php if(env('APP_ENV') === 'production') {?>
        <!-- Google tag (gtag.js) -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-8ZH2646R9G"></script>
        <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-8ZH2646R9G');
        </script>
    <?php } ?>

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