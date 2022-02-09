import React from "react";

const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        console.log(person);
        const { id, name, age, image } = person;
        return (
          <div key={id}>
            <ul>
              <li>
                <article className='person'>
                  <img src={image}></img>
                  <div>
                    {name}
                    <p>{age} years old</p>
                  </div>
                </article>
              </li>
            </ul>
          </div>
        );
      })}
    </>
  );
};

export default List;
