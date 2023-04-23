console.log('Olá pessoas!');
console.log('#ConstruindoCRUDS');

// [CRUD] JavaScript BÁSICO
const miniTwitter = {
    usuario: [
        {
            username: 'omariosouto'
        }
    ],
    posts: [
        {
            id: 1,
            owner: 'omariosouto',
            content: 'Meu premeiro tweet'
        }
    ],
};
//CREATE
function criaPost(dados) {
    miniTwitter.posts.push({
        id: miniTwitter.posts.length + 1,
        owner: dados.owner,
        content: dados.content
    })
}
criaPost({ owner: 'omariosouto', content: 'Segundo tweet'});
criaPost({ owner: 'omariosouto', content: 'Terceiro tweet'});
// console.log(miniTwitter.posts)

//READ 
function pegarPost() {
    return miniTwitter.posts
}