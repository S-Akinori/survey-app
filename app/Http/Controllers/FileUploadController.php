<?php

namespace App\Http\Controllers;

use App\Models\Client;
use Illuminate\Http\Request;

class FileUploadController extends Controller
{
  public function upload(Request $request)
  {
      $request->validate([
          'file' => 'required|file|mimes:csv,txt|max:2048',
      ]);
  
      $path = $request->file->store('uploads', 'public');
      $this->importToDatabase(storage_path("app/public/" . $path));
  
      return response()->json(['message' => 'File uploaded and imported successfully!']);
  }
  
  private function importToDatabase($path)
  {
      $handle = fopen($path, 'r');
      fgetcsv($handle, 1000, ",");  // headerをスキップ
  
      while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) {
          $clientId = $data[0];
  
          // client_idが既に存在するかチェック
          $existingClient = Client::where('client_id', $clientId)->first();
  
          if (!$existingClient) {
              // 存在しない場合のみ、新しいレコードを作成
              $client = new Client();
              $client->client_id = $clientId;
  
              $client->save();
          }
      }
  
      fclose($handle);
  }
  
}
