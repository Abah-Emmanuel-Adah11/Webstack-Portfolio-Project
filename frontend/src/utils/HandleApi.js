import axios from 'axios'

const baseUrl = "http://localhost:5000"

const getAllPlan = (setPlan) => {
    axios
    .get(baseUrl)
    .then(({data}) => {
        console.log('data --->', data);
        setPlan(data)
    })
}

const addPlan = (text, setText, setPlan) => {

    axios
    .post(`${baseUrl}/save`, {text})
    .then((data) => {
        console.log(data);
        setText("")
        getAllPlan(setPlan)
    })
    .catch((err) => console.log(err))


}

const updatePlan = (planId, text,setPlan, setText, setIsUpdating) => {

    axios
    .post(`${baseUrl}/update`, {_id: planId, text})
    .then((data) => {
        console.log(data);
        setText("")
        setIsUpdating(false)
        getAllPlan(setPlan)
    })
    .catch((err) => console.log(err))

}

const deletePlan = (_id, setPlan) => {

    axios
    .post(`${baseUrl}/delete`, { _id })
    .then((data) => {
        console.log(data)
        getAllPlan(setPlan)
    })
    .catch((err) => console.log(err))

}

export {getAllPlan, addPlan, updatePlan, deletePlan}