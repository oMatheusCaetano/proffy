<?php

namespace App\Repositories\ClassSubject;

use Illuminate\Support\Collection;

interface IClassSubjectRepository
{
    public function all(): Collection;
}
