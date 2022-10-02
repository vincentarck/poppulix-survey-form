import React, { useState } from "react";
import { questionExist } from "../utils";

function QuestionForm( ) {
  const [question, setQuestion] = useState("");
  const [respondentOptions, setRespondentOptions] = useState([]);
  const handleQuestion = (e) => {
    setQuestion(e.target.value);
  };
  const handleRespondent = (e) => {
    const respondent = e.target.value;
    if (respondent === "Respondent Options") return;
    setRespondentOptions((prevRespon) => [...prevRespon, respondent]);
  };
  const handleSubmit = () => {
    if(questionExist){
      const {questions, respondents} = questionExist
      questions.push(question)
      localStorage.setItem(`question`, JSON.stringify({
        questions,
        respondents:[
          ...respondents,
          respondentOptions]
      }))
    }else{
      localStorage.setItem(`question`, JSON.stringify({
        questions:[question],
        respondents:[
          respondentOptions]
      }))
    }
    
    setQuestion("")
    setRespondentOptions([])
  };
  console.log(JSON.parse(localStorage.getItem("question")))
  return (
    <div className="flex-[3]">
      <h1 className="text-[#FF8A00] font-semibold text-xl md:text-2xl xl:text-3xl mb-6">
        Question
      </h1>

      <form className="w-full space-y-10" onSubmit={handleSubmit}>
        <div className="">
          <label
            htmlFor="base-input"
            className="block mb-2 font-medium text-slate-500 text-base sm:text-xl"
          >
            Question
          </label>
          <input
            type="text"
            id="base-input"
            className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400 dark:text-black"
            onChange={handleQuestion}
            value={question}
            required
          />
        </div>
        <div>
          <label
            htmlFor="countries"
            className="block mb-2 font-medium text-slate-500 text-base sm:text-xl"
          >
            Select an option
          </label>
          <select
            id="countries"
            className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400 dark:text-black"
            onChange={handleRespondent}
            defaultValue="Respondent Options"
            required
          >
            <option>Respondent Options</option>
            <option value="May Select">May Select</option>
            <option value="Must Select">Must Select</option>
          </select>
        </div>
        {!(respondentOptions.length === 0) && (
          <h1 className="my-3 text-sm text-[#FF8A00]">
            Total Respondent Field: {respondentOptions.length}
          </h1>
        )}
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default QuestionForm;
