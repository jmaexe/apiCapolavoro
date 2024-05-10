const getAll = async (req, res) => {
  const response = await fetch("https://api.jikan.moe/v4/anime/21"); //q=One%20Piece
  const json = await response.json();
  res.json(json.data);
  //synopsis,aired.from,studios.(name,type,url),genres.(array che contiene(type,name,url)),demographics.(name,rtpe,url),images.(jpg(image_url,small_image_url,large...)),trailer...,
  //title,source,status,score,producers.(array(type,name,url))
};

const getMoreInfo = async (req, res) => { 
  const response = await  fetch('https://api.jikan.moe/v4/anime/21/moreinfo')
  const json = await response.json();
  console.log(json.data);
  res.json(json.data);
}

const getCharacterById = async (req, res) => {
  const params = req.params;
  const { id } = params;
  const response = await fetch("https://api.jikan.moe/v4/characters/" + id);
  const json = await response.json();
  console.log(json);
  res.json(json.data);
  //images.jpg.image_url,name,name_kanji,nicknames,about
};

const getAllCharactersCrew = async (req, res) => {
  const response = await fetch("https://api.jikan.moe/v4/anime/21/characters");
  const json = await response.json();
  var list = [];
  console.log(json)
  if(json.data != null && json.data != undefined) {
    Object.keys(json.data).forEach(function (key) {
        if (
          [40, 62, 305, 309, 18938, 64, 5627, 724, 723,61].includes(
            json.data[key].character.mal_id
          )
        ) {
            list[key] = json.data[key];
        }
      });
   
  }
  res.json(list);
  // const newData = data.filter(item => {
  //     return  [40,62,305,309,18938,64,5627,724,723].includes(item.character.mal_id)
  // })
  // for(let character of newData) {
  //     console.log(character);
  // }
  // res.json(newData);
};

module.exports = {
  getAll,
  getCharacterById,
  getAllCharactersCrew,
  getMoreInfo
};
