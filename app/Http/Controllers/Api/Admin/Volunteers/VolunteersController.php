<?php
/**
 * Created by PhpStorm.
 * User: trevor
 * Date: 24/06/18
 * Time: 9:43 PM
 */

namespace DAngelaCampaign\Http\Controllers\Api;

use DAngelaCampaign\Http\Controllers\Controller;
use DAngelaCampaign\Models\Volunteer;

class VolunteersController extends Controller
{

    /**
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {

        $volunteers = Volunteer::all();

        $response['volunteers'] = $volunteers;

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
        $page = Volunteer::find($id);

        $response['volunteer'] = $page;

        $status = 200;

        return response()->json($response, $status);
    }

    /**
     * @return \Illuminate\Http\JsonResponse
     */
    public function getLatestVolunteers() {
        $volunteers = Volunteer::orderBy('created_at', 'desc')->take(4)->get();

        $response['volunteers'] = $volunteers;

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
        $volunteers = Volunteer::find($id);

        $success = $volunteers->delete();

        $response['volunteer'] = $volunteers;

        if ($success) {
            $status = 200;
        } else {
            $response['message'] = 'There was an error. Check the activity log.';
            $status = 422;
        }

        return response()->json($response, $status);
    }
}