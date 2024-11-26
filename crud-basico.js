const miniTwitter = {
  usuarios: [
    {
      username: 'anthony'
    }
  ],
  posts: [
    {
      id: 1,
      owner: 'anthony',
      content: 'Meu primeiro tweet'
    }
  ]
}

// create

function criaPost(dados){
  miniTwitter.posts.push({
    id: miniTwitter.posts.length + 1,
    owner: dados.owner,
    content: dados.content
  });
}
criaPost({owner: 'anthony', content: 'segundo post'})
criaPost({owner: 'anthony', content: 'terceiro post'})

//console.log(miniTwitter.posts)

//read
function pegaPosts(){
  return miniTwitter.posts;
}
//

function atualizaContentDoPost(id, novoConteudo){
  const postQueVaiSerAtualizado = pegaPosts().find((post) =>{
    return post.id === id
  });
  postQueVaiSerAtualizado.content = novoConteudo
}

atualizaContentDoPost(1, 'Novo conteudo do post')

//console.log(pegaPosts())


function apagaPost(id){
 const listaDePostsAtualizada = pegaPosts().filter((postAtual) =>{
    return postAtual.id !== id;
  });
  miniTwitter.posts = listaDePostsAtualizada;
}

apagaPost(2);
console.log(pegaPosts())
