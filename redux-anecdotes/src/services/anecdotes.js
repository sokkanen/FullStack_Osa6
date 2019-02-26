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

const update = async (id) => { 
    const obj = await axios.get(baseUrl)
    const anec = obj.data.find(a => a.id === id)
    anec.votes = anec.votes +1
    const res = await axios.put(`${baseUrl}/${id}`, anec)
    return res.data
}

export default { getAll, createNew, update }