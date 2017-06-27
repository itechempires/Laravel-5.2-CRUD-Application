@extends('layouts.master')

@section('content')

    <div class="panel panel-default">
        <div class="panel-heading">
            View Task
        </div>
        <div class="panel-body">
            <div class="pull-right">
                <a class="btn btn-default" href="{{ route('tasks.index')  }}">Go Back</a>
            </div>
            <div class="form-group">
                <strong>Name: </strong> {{ $task->name  }}
            </div>
            <div class="form-group">
                <strong>Description: </strong> {{ $task->description  }}
            </div>
        </div>
    </div>

@endsection