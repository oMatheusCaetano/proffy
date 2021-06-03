<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateClassesTable extends Migration
{
    public const TABLE_NAME = 'classes';
    public const PRIMARY_KEY = 'id';

    public function up()
    {
        Schema::create(self::TABLE_NAME, function (Blueprint $table) {
            $table->id();
            $table->string('proffy_name');
            $table->string('proffy_image')->nullable();
            $table->string('proffy_number');
            $table->string('description')->nullable();
            $table->decimal('price', 10, 2)->unsigned();
            $table->bigInteger('subject_id')->unsigned();
            $table->timestamps();

            $table
                ->foreign('subject_id')
                ->references(CreateClassSubjectsTable::PRIMARY_KEY)
                ->on(CreateClassSubjectsTable::TABLE_NAME);
        });
    }

    public function down()
    {
        Schema::dropIfExists(self::TABLE_NAME);
    }
}
