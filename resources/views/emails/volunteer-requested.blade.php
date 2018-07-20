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
                                                    <h2 class="submission-title">Volunteer Request</h2>
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

                                            <tr>
                                                <td>Name: </td>
                                                <td><?php echo $volunteer->name; ?></td>
                                            </tr>

                                            <tr>
                                                <td>Street Address: </td>
                                                <td><?php echo $volunteer->street_address; ?></td>
                                            </tr>

                                            <tr>
                                                <td>Contact: </td>
                                                <td><?php echo $volunteer->contact; ?></td>
                                            </tr>

                                            <tr>
                                                <td>Helping By: </td>
                                                <td><?php echo $volunteer->helping_by; ?></td>
                                            </tr>

                                            <tr>
                                                <td>&nbsp;</td>
                                            </tr>

                                            </tbody>
                                        </table>

                                        <table>
                                            <tbody>
                                                <tr> <td>Submitted: {{ $volunteer->created_at }}</td></tr>
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