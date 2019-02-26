import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
    const res = await axios.get(baseUrl)
    return res.data
}

const createNew = async anecdote => {
    const obj = { content: anecdote, votes: 0 }
    const res = await axios.post(baseUrl, obj)
    return res.data
}

export default { getAll, createNew }