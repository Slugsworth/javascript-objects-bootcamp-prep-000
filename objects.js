var playlist = {'Alicia Keys':'Fallin'}

function updatePlaylist(obj, string, title){
  obj[string] = title;
  return obj;
}

function removeFromPlaylist(obj, name){
  delete obj[name];
  return obj;
}