import  { useState } from "react";

interface Question {
  id: number;
  text: string;
  type: string; // "yes" or "no"
  idealAnswer: string; // "yes" or "no"
  mustHave: boolean;
}

const ScreeningQuestions = () => {
  const [questions, setQuestions] = useState<Question[]>([
    {
      id: Date.now(),
      text: "",
      type: "yes",
      idealAnswer: "yes",
      mustHave: false,
    },
  ]);

  const handleAddQuestion = () => {
    if (questions.length >= 3) {
      alert("You can only add up to 3 questions.");
      return;
    }

    setQuestions((prev) => [
      ...prev,
      { id: Date.now(), text: "", type: "yes", idealAnswer: "yes", mustHave: false },
    ]);
  };

  const handleRemoveQuestion = (id: number) => {
    if (questions.length === 1) {
      alert("At least one question is required.");
      return;
    }

    setQuestions((prev) => prev.filter((question) => question.id !== id));
  };

  const handleQuestionChange = (
    id: number,
    field: keyof Question,
    value: string | boolean
  ) => {
    setQuestions((prev) =>
      prev.map((question) =>
        question.id === id ? { ...question, [field]: value } : question
      )
    );
  };

  return (
    <div className="w-full grid gap-3">
      {/* Additional questions */}
      <div className="flex flex-col space-y-2">
        <div className="flex">
          <label htmlFor="" className="text-sm font-[500]">
            Additional Screening Questions
          </label>
        </div>

        {questions.map((question, index) => (
          <div key={question.id} className="w-full grid gap-3 border p-3 rounded-md">
            <div className="flex flex-col space-y-2">
              <div className="flex">
                <label htmlFor="" className="text-xs">
                  {index + 1}. Question
                </label>
              </div>
              <input
                type="text"
                placeholder="Add question"
                value={question.text}
                onChange={(e) => handleQuestionChange(question.id, "text", e.target.value)}
                className="p-2 border border-[#EBEBF0] rounded-md placeholder:text-[10px]"
              />
            </div>

            <div className="w-full grid grid-cols-2 gap-2">
              {/* Question Type */}
              <div className="flex flex-col space-y-2">
                <div className="flex">
                  <label htmlFor="" className="text-xs">
                    Question Type
                  </label>
                </div>
                <select
                  value={question.type}
                  onChange={(e) => handleQuestionChange(question.id, "type", e.target.value)}
                  className="p-2 border border-[#EBEBF0] rounded-md text-xs"
                >
                  <option value="yes">yes</option>
                  <option value="no">no</option>
                </select>
              </div>

              {/* Ideal Answer */}
              <div className="flex flex-col space-y-2">
                <div className="flex">
                  <label htmlFor="" className="text-xs">
                    Ideal Answer
                  </label>
                  <span className="text-red-500">*</span>
                </div>
                <select
                  value={question.idealAnswer}
                  onChange={(e) =>
                    handleQuestionChange(question.id, "idealAnswer", e.target.value)
                  }
                  className="p-2 border border-[#EBEBF0] rounded-md text-xs"
                >
                  <option value="yes">yes</option>
                  <option value="no">no</option>
                </select>
              </div>
            </div>

            {/* Must Have Qualification */}
            <div className="flex items-center space-x-4">
              <input
                type="checkbox"
                checked={question.mustHave}
                onChange={(e) =>
                  handleQuestionChange(question.id, "mustHave", e.target.checked)
                }
                className="w-7 h-7"
                name="qualification"
              />
              <label htmlFor="qualification" className="text-sm font-[400]">
                Must have qualification
              </label>
            </div>

            {/* Remove Question Button */}
            <button
              onClick={() => handleRemoveQuestion(question.id)}
              className="text-red-500 text-xs mt-2"
            >
              Remove Question
            </button>
          </div>
        ))}

        {/* Add Question Button */}
        <button
          onClick={handleAddQuestion}
          disabled={questions.length >= 3}
          className={`mt-4  text-xs  text-start px-4 py-2 rounded text-[#104B53] ${
            questions.length >= 3 ? "text-[#104B53] text-start cursor-not-allowed" : ""
          }`}
        >
          Add More Question
        </button>
      </div>
    </div>
  );
};

export default ScreeningQuestions;
