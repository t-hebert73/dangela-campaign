<?php
/**
 * Created by PhpStorm.
 * User: trevor
 * Date: 24/06/18
 * Time: 9:43 PM
 */

namespace DAngelaCampaign\Http\Controllers\Api;

use DAngelaCampaign\Http\Controllers\Controller;
use DAngelaCampaign\Models\Donation;

class DonationsController extends Controller
{

    /**
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {

        $donations = Donation::orderBy('created_at', 'desc')->get();

        $response['donations'] = $donations;

        return response()->json($response);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function retrieve($id)
    {
        $page = Donation::find($id);

        $response['donation'] = $page;

        $status = 200;

        return response()->json($response, $status);
    }

    /**
     * @return \Illuminate\Http\JsonResponse
     */
    public function getLatestDonations() {
        $donations = Donation::orderBy('created_at', 'desc')->take(4)->get();

        $response['donations'] = $donations;

        return response()->json($response);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $donations = Donation::find($id);

        $success = $donations->delete();

        $response['donation'] = $donations;

        if ($success) {
            $status = 200;
        } else {
            $response['message'] = 'There was an error. Check the activity log.';
            $status = 422;
        }

        return response()->json($response, $status);
    }
}