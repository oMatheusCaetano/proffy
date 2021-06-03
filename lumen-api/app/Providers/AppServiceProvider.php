<?php

namespace App\Providers;

use App\Repositories\ClassSubject\ClassSubjectRepository;
use App\Repositories\ClassSubject\IClassSubjectRepository;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    public function register()
    {
        $this->app->singleton(IClassSubjectRepository::class, ClassSubjectRepository::class);
    }
}
