<?php
/**
 * Created by PhpStorm.
 * User: trevor
 * Date: 19/07/18
 * Time: 11:17 PM
 */

namespace DAngelaCampaign\Models;


use Illuminate\Database\Eloquent\Model;

class Volunteer extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'street_address',
        'contact',
        'helping_by'
    ];

    protected $name;

    protected $street_address;

    protected $contact;

    protected $helping_by;

}