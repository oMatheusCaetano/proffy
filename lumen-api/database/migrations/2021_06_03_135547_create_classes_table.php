<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateClassesTable extends Migration
{
    public function up(): void
    {
        Schema::create('classes', function (Blueprint $table) {
            $table->id();
            $table->string('proffy_name');
            $table->string('proffy_image')->nullable();
            $table->string('proffy_number');
            $table->string('description')->nullable();
            $table->decimal('price', 10, 2)->unsigned();
            $table->bigInteger('subject_id')->unsigned();
            $table->timestamps();

            $table->foreign('subject_id')->references('id')->on('classes_subjects');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('classes');
    }
}
