<?php
/**
 * Created by PhpStorm.
 * User: trevor
 * Date: 24/06/18
 * Time: 9:09 PM
 */

namespace DAngelaCampaign\Models;


use Illuminate\Database\Eloquent\Model;

class SurveySubmission extends Model
{

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'survey_data',
        'source'
    ];

    protected $survey_data;

    protected $source;

    /**
     * @param $value
     * @return mixed
     */
    public function getSurveyDataAttribute($value) {
        return json_decode($value);
    }
}