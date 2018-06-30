<?php
/**
 * Created by PhpStorm.
 * User: trevor
 * Date: 27/01/18
 * Time: 10:28 AM
 */

namespace DAngelaCampaign\Http\Controllers;


class AppController extends Controller
{

    public function index()
    {
        return view('app');
    }
}