<?php
/**
 * Created by PhpStorm.
 * User: trevor
 * Date: 19/08/18
 * Time: 8:08 PM
 */

namespace DAngelaCampaign\Models;


use Illuminate\Database\Eloquent\Model;

class SiteView extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'ip',
        'source',
        'referrer'
    ];

    protected $ip;

    protected $source;

    protected $referrer;
}