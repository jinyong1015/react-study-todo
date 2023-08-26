import React from 'react'

export default function List({todoData, setTodoData}) {

  const btnStyle = {
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right",
  };

      // 체크를 눌렀을 때 ---- 줄 그이게 만드는 함수
  const handleCompleteChange = (id) => {
    let newTodoData = todoData.map(data => {
      if(data.id === id) {
        data.completed = !data.completed;
      }
      return data;
      })
    setTodoData(newTodoData);
  };

    const handleClick = (id) => {
    let newTodoData = todoData.filter(data => data.id !== id);
    console.log('newTodoData', newTodoData);
    setTodoData(newTodoData);
    };

    const getStyle = (completed) => {
    return {
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: completed ? "line-through" : "none",
    }
  };
  

  return (
    <div>
{todoData.map(data => (
      <div style={getStyle(data.completed)} key={data.id}>
      <input type="checkbox" defaultChecked={false} onChange={() => handleCompleteChange(data.id)}/>
      {" "}{data.title}
      <button style={btnStyle} onClick={() => handleClick(data.id)}>x</button>
      </div>
    ))}

    </div>
  )
}


