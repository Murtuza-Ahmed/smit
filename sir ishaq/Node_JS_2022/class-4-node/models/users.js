const path = require('path')
const fs = require('fs')

const userJsonFile = path.join(__dirname, '..', 'data', 'users.json')

const readFile = () => {
    fs.readFile(userJsonFile, (err, data) => {
        return new Promise((resolve, reject) => {
            if (err) {
                return reject(err)
            }
            const dataString = data.toString()

            dataString ? resolve(JSON.parse(dataString)) : resolve([])
        })
    })
}

const writeFile = (dataToWrite) => {
    fs.writeFile(userJsonFile, dataToWrite, (err, data) => {
        return new Promise((resolve, reject) => {
            if (err) {
                return reject(err)
            }
            resolve()
        })
    })
}

const storeAUsers = async (user) => {
    try {
        let data = await readFile()
        data ? data.push(user) : data = [user]
        await writeFile(data)
        return true
    } catch (err) {
        console.error(err)
    }
}