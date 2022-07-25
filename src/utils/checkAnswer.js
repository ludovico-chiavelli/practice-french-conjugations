const checkAnswer = (ans, res) => {
    if (ans.includes("/")) {
        return ans.toLowerCase().includes(res.toLowerCase())
    } else {
        return ans.toLowerCase() === res.toLowerCase()
    }
}

export default checkAnswer