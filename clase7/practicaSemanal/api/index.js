const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

app.use(cors())
app.use(bodyParser.json())

let posts = [
    {
        "id": 1,
        "title": "Publicación 1",
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "userId": 1
    },
    {
        "id": 2,
        "title": "Publicación 2",
        "body": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
        "userId": 1
    },
    {
        "id": 3,
        "title": "Publicación 3",
        "body": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
        "userId": 2
    },
    {
        "id": 4,
        "title": "Publicación 4",
        "body": "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
        "userId": 2
    },
    {
        "id": 5,
        "title": "Publicación 5",
        "body": "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat",
        "userId": 3
    },
    {
        "id": 6,
        "title": "Publicación 6",
        "body": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
        "userId": 3
    },
]

let users = [
    { "id": 1, "name": "María Perez", "email": "maria.perez@elblog.com" },
    { "id": 2, "name": "Ana Perez", "email": "ana.perez@elblog.com" },
    { "id": 3, "name": "Pedro Perez", "email": "pedro.perez@elblog.com" }
]

app.get('/', (request, response) => {
    return response.send(posts.sort(post => post.id))
})

app.get('/:id', (request, response) => response.send(posts.find(post => post.id == request.params.id)))

app.post('/', (request, response) => {
    let postToAdd = request.body;
    postToAdd.id = posts.sort(post => post.id)[posts.length - 1].id + 1;
    posts.push(postToAdd)
    response.send(JSON.parse(`{"id" : "${postToAdd.id}"}`))
})

app.put('/:id', (request, response) => {

    const id = request.params.id
    const post = request.body

    if (id != post.id) {
        return response.sendStatus(500)
    }

    posts = posts.filter(post => post.id != id)
    posts.push(post)
    response.sendStatus(200)

    // posts = posts.filter(post => post.id != request.params.id)
    // const post = request.body
    // posts.push(post)
    // response.sendStatus(200)
})

app.delete('/:id', (request, response) => {
    posts = posts.filter(post => post.id != request.params.id)
    response.sendStatus(200)
})

app.listen(3002)

