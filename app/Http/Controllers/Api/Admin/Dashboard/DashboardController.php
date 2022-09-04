<?php
/**
 * Created by PhpStorm.
 * User: trevor
 * Date: 19/08/18
 * Time: 8:26 PM
 */

namespace DAngelaCampaign\Http\Controllers\Api\Admin\Dashboard;


use DAngelaCampaign\Http\Controllers\Controller;
use DAngelaCampaign\Models\SiteView;

class DashboardController extends Controller
{

    /**
     * @return \Illuminate\Http\JsonResponse
     */
    public function getDashboardStats()
    {

        $siteViews = SiteView::count();
        $uniqueSiteViews = SiteView::distinct('ip')->count('ip');

        $response = [
            'siteViews' => $siteViews,
            'uniqueSiteViews' => $uniqueSiteViews
        ];

        return response()->json($response, 200);
    }
}