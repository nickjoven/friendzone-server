import express from 'express'

const FRIENDS = [
    {
        id: 1,
        name: 'Sam Samson',
        email: 'sam@example.com'
    },
    {
        id: 2,
        name: 'Julie Juleson',
        email: 'julie@example.com'
    },
    {
        id: 3,
        name: 'Son Sonson',
        email: 'son@example.com'
    },
]

const PENDING_REQUESTS = [
    {
        from: 1,
        senderName: 'Sam Samson'
    },
    {
        from: 3,
        senderName: 'Sam Samson'
    },
]

const app = express()

app.get('/', (req, res) => {
    res.json({message: 'You successfully created your own server'})
})

app.get('/friends', (req, res) => {
    res.json(FRIENDS)
})

app.get('/blocked', (req, res) => {
    res.json({})
})

app.get('/friend_requests', (req, res) => {
    res.json(PENDING_REQUESTS)
})

app.listen(3005, () => {
    console.log('Friendzone server is running on PORT 3005')
})