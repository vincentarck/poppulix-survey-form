import React from "react";
import notFound from "../assets/notFound.jpg"
function Respondent({ data, selectedRespondent }) {

    const responsExist = data[selectedRespondent]
  return (
    <div className="space-y-3">
      <p className="text-slate-500 text-sm">{responsExist.length ? "Jawaban Respondent" : "Jawaban Respondent Tidak Disediakan"}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-6">
        {responsExist.length ? data[selectedRespondent].map((r, i) => (
          <input
            type="text"
            placeholder={r}
            key={i}
            className="w-full px-5 py-2 outline-none border border-slate-500 rounded-lg"
          />
        )) : <img src={notFound} className="w-full h-auto"/>}
      </div>
    </div>
  );
}

export default Respondent;
