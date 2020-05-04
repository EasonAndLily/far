import React from 'react';
import growth from './growth.svg';
import gradfather from './gradfather.svg';
import baby from './baby.svg';
import teenager from './teenager.svg';
import student from './student.svg';

function Growth({ course }) {
  let id = 0;
  return (
    <div className="container">
      <h5 className="card-title ml-2">
        <img src={growth} alt="" className="chapter-img"></img>
        成长路径：
      </h5>
      <div className="card-group row row-cols-2">
        {course.growth
          .map((grow) => {
            return { id: ++id, ...grow };
          })
          .map((item) => (
            <div key={item.id} className="card text-center bg-white border-0">
              <div className="card-header bg-white border-0 font-weight-bold p-1">
                {item.title}
              </div>
              <img
                src={
                  item.image === 'gradfather'
                    ? gradfather
                    : item.image === 'baby'
                    ? baby
                    : item.image === 'teenager'
                    ? teenager
                    : item.image === 'student'
                    ? student
                    : ''
                }
                alt="..."
              />
              <div className="card-body pt-2">
                <h6 className="card-title">{item.name}</h6>
                <p className="card-text font-12">{item.brief}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Growth;
