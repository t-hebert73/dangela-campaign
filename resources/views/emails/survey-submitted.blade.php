<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en" xml:lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width">
    <link rel="stylesheet" type="text/css" href="<?php echo public_path('css/emails.css'); ?>">
</head>
<body>
<span class="preheader"></span>
<table class="body">
    <tr>
        <td class="center" align="center" valign="top">
            <center data-parsed="">

                <table align="center" class="wrapper header float-center">
                    <tr>
                        <td class="wrapper-inner">
                            <table align="center" class="container">
                                <tbody>
                                <tr>
                                    <td>
                                        <table class="row collapse">
                                            <tbody>
                                            <tr>
                                                <th class="small-6 large-6 columns first">
                                                    <table>
                                                        <tr>
                                                            <th>
                                                                <h1 class="email-heading">Henry D'Angela Campaign</h1>
                                                            </th>
                                                        </tr>
                                                    </table>
                                                </th>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                </table>

                <table align="center" class="container float-center">
                    <tbody>
                    <tr>
                        <td>

                            <table class="row">
                                <tbody>
                                <tr>
                                    <th class="small-12 large-12 columns first last">
                                        <table>
                                            <tr>
                                                <th>
                                                    <h2 class="submission-title">Survey Submission</h2>
                                                </th>
                                            </tr>
                                        </table>
                                    </th>
                                </tr>
                                </tbody>
                            </table>

                            <table class="row">
                                <tbody>
                                <tr>
                                    <th class="small-12 large-12 columns first last">

                                        <table class="form-data">
                                            <tbody>
                                                <?php
                                                if($surveySubmission->survey_data) {
                                                    foreach($surveySubmission->survey_data as $surveyData) { ?>
                                                        <tr class="question">
                                                            <td><?php echo $surveyData->question; ?></td>
                                                        </tr>
                                                        <?php
                                                        if($surveyData->type === 'ranked') { ?>
                                                        <?php if($surveyData->availableOptions) {

                                                            usort($surveyData->availableOptions, function($a, $b)
                                                            {
                                                                return strcmp($a->rank, $b->rank);
                                                            });

                                                            foreach($surveyData->availableOptions as $option) {
                                                                if(isset($option->rank)) { ?>
                                                                    <tr>
                                                                        <td>
                                                                            <?php echo '<span class="rank">' . $option->rank . '</span> ' . $option->option; ?>
                                                                            <?php if(isset($option->extra)) { echo ' - ' . $option->extraValue; } ?>
                                                                        </td>
                                                                    </tr>
                                                            <?php }
                                                            }
                                                        }
                                                    } else { ?>
                                                        <?php if(isset($surveyData->hasYesNo)) { ?>
                                                            <tr class="yes-no">
                                                                <td><?php echo $surveyData->yesNoAnswer; ?></td>
                                                            </tr>
                                                        <?php } ?>
                                                        <tr>
                                                            <td>
                                                                <?php if(isset($surveyData->answer)) {
                                                                    echo $surveyData->answer;
                                                                } else {
                                                                    echo 'No answer provided.';
                                                                } ?>
                                                            </td>
                                                        </tr>
                                                    <?php } ?>

                                                    <tr>
                                                        <td>&nbsp;</td>
                                                    </tr>
                                                    <?php }
                                                    }
                                                ?>

                                                <tr> <td>Source: {{ $surveySubmission->source }}</td></tr>
                                                <tr> <td>Submitted: {{ $surveySubmission->created_at }}</td></tr>
                                            </tbody>
                                        </table>
                                    </th>
                                </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    </tbody>
                </table>

            </center>
        </td>
    </tr>
</table>
<!-- prevent Gmail on iOS font size manipulation -->
<div style="display:none; white-space:nowrap; font:15px courier; line-height:0;"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
</div>
</body>
</html>