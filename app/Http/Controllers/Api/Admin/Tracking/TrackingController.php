<?php

namespace DAngelaCampaign\Http\Controllers\Api\Admin\Tracking;

use DAngelaCampaign\Http\Controllers\Controller;
use DAngelaCampaign\Models\SiteView;
use Illuminate\Http\Request;

/**
 * Class TrackingController
 * @package DAngelaCampaign\Http\Controllers\Api
 */
class TrackingController extends Controller
{

    /**
     * @param Request $request
     */
    public function trackSiteView(Request $request)
    {

        $siteViewData['referrer'] = $request->get('externalReferrer');
        $siteViewData['source'] = $request->get('source');
        $siteViewData['ip'] = request()->getClientIp();

        $siteView = new SiteView($siteViewData);

        $siteView->save();

    }
}