<?php

namespace App\Repositories\ClassSubject;

use App\Models\ClassSubject;
use Illuminate\Support\Collection;

class ClassSubjectRepository implements IClassSubjectRepository
{
    public function all(): Collection
    {
        return ClassSubject::all();
    }    
}
