<?php

namespace App\Http\Controllers;

use App\Repositories\ClassSubject\IClassSubjectRepository;
use Illuminate\Http\JsonResponse;

class ClassSubjectController extends Controller
{
    private IClassSubjectRepository $repository;

    public function __construct(IClassSubjectRepository $repository)
    {
        $this->repository = $repository;
    }

    public function index(): JsonResponse
    {
        return response()->json($this->repository->all());
    }
}
