import React from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import List from './List';

export default function Lists({todoData, setTodoData}) {

    const handleEnd = (result) => {
      console.log('result', result);

      if(!result.destination) return;

      // 리액트의 불변성을 지켜주기 위해 새로운 todoData 생성
      const newTodoData = todoData;

      // 1. 변경시키는 아이템을 배열에서 지워줍니다.
      // 2. return 값으로 지워진 아이템을 잡아줍니다.
      const [reorderedItem] = newTodoData.splice(result.source.index, 1);

      // 원하는 자리에 reorderedItem을 insert 해줍니다.
      newTodoData.splice(result.destination.index, 0, reorderedItem);
      setTodoData(newTodoData);
    };

  return (
    <div>
      <DragDropContext onDragEnd={handleEnd}>
        <Droppable droppableId='todo'>
          {(provided) => ( 
            <div {...provided.droppableProps} ref={provided.innerRef}>
      {todoData.map((data, index) => (
      <Draggable key={data.id} draggableId={data.id.toString()} index={index}>
        {(provided, snapshot) => (
          <List key={data.id} id={data.id} title={data.title} completed={data.completed} todoData={todoData} setTodoData={setTodoData} provided={provided}
          snapshot={snapshot} />
      )}
      </Draggable>
    ))}
    {/* 드래그 작업에 자연스러움을 추가 하기 위해 placeholder를 넣어줌 */}
    {provided.placeholder}
    </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  )
}


