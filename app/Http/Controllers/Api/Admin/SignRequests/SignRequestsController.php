<?php
/**
 * Created by PhpStorm.
 * User: trevor
 * Date: 24/06/18
 * Time: 9:43 PM
 */

namespace DAngelaCampaign\Http\Controllers\Api\Admin\SignRequests;

use DAngelaCampaign\Http\Controllers\Controller;
use DAngelaCampaign\Models\SignRequest;

class SignRequestsController extends Controller
{

    /**
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {

        $signRequests = SignRequest::orderBy('created_at', 'desc')->get();

        $response['signRequests'] = $signRequests;

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
        $page = SignRequest::find($id);

        $response['signRequest'] = $page;

        $status = 200;

        return response()->json($response, $status);
    }

    /**
     * @return \Illuminate\Http\JsonResponse
     */
    public function getLatestSignRequests() {
        $signRequests = SignRequest::orderBy('created_at', 'desc')->take(4)->get();

        $response['signRequests'] = $signRequests;

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
        $signRequests = SignRequest::find($id);

        $success = $signRequests->delete();

        $response['signRequest'] = $signRequests;

        if ($success) {
            $status = 200;
        } else {
            $response['message'] = 'There was an error. Check the activity log.';
            $status = 422;
        }

        return response()->json($response, $status);
    }
}