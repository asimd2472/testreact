<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Article;

class ArticleController extends Controller
{
    public function get_data(Request $request){
        // echo "asdasdas";exit;
        $per_page=10;
        if($request->has('per_page'))  $per_page=$request->per_page;

        $json['code']=200;
        $articles = Article::paginate($per_page);
        $json['articles']=$articles;
        return response()->json($articles);
    }

    public function get_dataupdate($id){
        $articles = Article::where('id', $id)->first();
        return response()->json($articles);
    }
}
