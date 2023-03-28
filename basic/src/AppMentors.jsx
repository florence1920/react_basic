import React, { useState } from 'react';

export default function AppMentor() {
  const [person, setPerson] = useState(initialPerson);
  const handleUpdate = () => {
    const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
    const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
    setPerson((person)=>({
      ...person,
      mentors: person.mentors.map((mentor) => {
        if(mentor.name === prev){
          return {...mentor, name: current}
        }
        return mentor
      })
    }))
  }
  const handleAdd = ()=>{
    const name = prompt(`멘토 이름!`);
    const title = prompt(`멘토 title!`);
    setPerson((person)=>({
      ...person,
      mentors:[{name,title},...person.mentors]
    }));
  }
  const handleDel = ()=>{
    const name = prompt(`이름은 무엇인가요?`);
    setPerson((person)=>({
      ...person,
      mentors: person.mentors.filter((m)=> m.name !== name)
    }))
  }
  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>{person.name}의 멘토는:</p>
      <ul>
        {person.mentors.map((mentor, index) => (
          <li key={index}>
            {mentor.name} ({mentor.title})
          </li>
        ))}
      </ul>
      <button
        onClick={handleUpdate}
      >
        멘토의 이름을 바꾸기
      </button>
      <button
        onClick={handleAdd}
      >
        멘토 추가하기
      </button>
      <button
        onClick={handleDel}
      >
        멘토 삭제하기
      </button>
    </div>
  );
}

const initialPerson = {
    name: '엘리',
    title: '개발자',
    mentors: [
      {
        name: '밥',
        title: '시니어개발자',
      },
      {
        name: '제임스',
        title: '시니어개발자',
      },
    ],
}