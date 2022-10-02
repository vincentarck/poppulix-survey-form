import QuestionForm from "./components/QuestionForm";
import QuestionsList from "./components/QuestionsList";
import { useState } from "react";
export default function App() {
  return (
    <div>
      <h1 className="text-[#FF8A00] font-semibold text-xl md:text-2xl xl:text-3xl absolute z-10 left-0 right-0 mx-auto pb-3 lg:pb-7 w-3/5 md:w-3/5 xl:w-2/5 bg-[#FFFAE6] top-32 md:top-28 rounded-b-xl text-center">Survey Questions</h1>
      <div className="flex items-center justify-center h-screen">
        <main className="w-[80vw] min-h-fit mt-32 m-auto flex flex-col lg:flex-row justify-between pt-20 bg-white p-7 lg:pt-28 lg:px-18">
          <QuestionForm/>
          <QuestionsList/>
        </main>
      </div>
    </div>
  );
}
