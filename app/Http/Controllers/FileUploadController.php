<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class FileUploadController extends Controller
{
  public function upload(Request $request)
  {
    $request->validate([
      'file' => 'required|file|mimes:csv,txt|max:2048', // 2MBまで
    ]);
  
    $filename = $request->file->store('uploads', 'public');

    return response()->json(['path' => $filename]);
  }
}
