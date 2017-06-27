<?php

Route::get('/', 'TaskController@index');


Route::resource('tasks', 'TaskController');