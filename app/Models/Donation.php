<?php
/**
 * Created by PhpStorm.
 * User: trevor
 * Date: 22/07/18
 * Time: 12:41 AM
 */

namespace DAngelaCampaign\Models;


use Illuminate\Database\Eloquent\Model;

class Donation extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'address',
        'contact'
    ];

    protected $name;

    protected $address;

    protected $contact;
}