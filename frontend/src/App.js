import React, { useEffect, useState } from 'react';
import Plan from './components/plan';
import { addPlan, getAllPlan, updatePlan, deletePlan } from './utils/HandleApi';

function App() {

const [plan, setPlan] = useState([])
const [text, setText] = useState("")
const [isUpdating, setIsUpdating] = useState(false)
const [planId, setPlanId] = useState("")

useEffect(() => {
  getAllPlan(setPlan)
}, {})

const updateMode = (_id, text) => {
  setIsUpdating(true)
  setText(text)
  setPlanId(_id)
}

  return (
    <div className="App">
      
      <div className="container">

        <h1>PlanGenius-Objective App</h1>

        <div className="top">
          <input 
          type="text"
          placeholder="Add Plans...."
          value={text}
          onChange={(e) => setText(e.target.value)} 
          />

          <div
            className="add"
            onClick={isUpdating ?
              () =>updatePlan(planId, text, setPlan, setText, setIsUpdating) 
              : () => addPlan(text, setText, setPlan)}>
            {isUpdating ? "update" : "Add"}
          </div>
        </div>

        <div className="list">

          {plan.map((item) => <Plan
          key={item._id}
          text={item.text}
          updateMode = {() => updateMode(item._id, item.text)}
          deletePlan= {() => deletePlan(item._id, setPlan)} />)}
          
        </div>

      </div>

    </div>
  );
}

export default App;
