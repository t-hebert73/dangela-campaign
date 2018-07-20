<?php
/**
 * Created by PhpStorm.
 * User: trevor
 * Date: 19/07/18
 * Time: 11:05 PM
 */

namespace DAngelaCampaign\Models;


use Illuminate\Database\Eloquent\Model;

class SignRequest extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'street_number',
        'street_address',
        'contact'
    ];

    protected $name;

    protected $street_number;

    protected $street_address;

    protected $contact;


}