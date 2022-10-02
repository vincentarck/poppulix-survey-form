import React, { useState } from "react";
import { questionExist } from "../utils";
import Respondent from "./Respondent";

function QuestionsList() {
  const question = questionExist && questionExist.questions;
  const respondent = questionExist && questionExist.respondents;
  return (
    <div className="flex-[3] text-slate-600 min-h-[40vh] lg:min-h-[60vh] lg:border-l border-[#e6cfb6] my-12 lg:ml-10 lg:my-0 lg:pl-10 flex flex-col justify-between">
      <h1 className="text-[#FF8A00] font-semibold text-xl md:text-2xl xl:text-3xl mb-6">
        List Of Questions
      </h1>
      <div className="space-y-10 h-[60vh] overflow-y-scroll pr-6 lg:pr-14 ">
        {questionExist &&
          question.map((q, i) => {
            return (
              <div className="space-y-3 border-b-1 border-slate-400" key={i}>
                <h1 className="text-lg font-semibold text-slate-500">{q}</h1>
                <Respondent data={respondent} key={i} selectedRespondent={i}/>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default QuestionsList;
