const questions = [
  {
    title: "How many team members can I invite?",
    answer:
      "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
  },
  {
    title: "What is the maximum file upload size?",
    answer:
      "No more than 2GB. All files in your account must fit your allotted storage space.",
  },
  {
    title: "How do I reset my password?",
    answer:
      "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.",
  },
  {
    title: "Can I cancel my subscription?",
    answer:
      "Yes! Send us a message and we’ll process your request no questions asked.",
  },
  {
    title: "Do you provide additional support?",
    answer:
      "Chat and email support is available 24/7. Phone lines are open during normal business hours.",
  },
];

const questionsContainer = document.querySelector(".question-container");

window.onload = () => {
  questions.forEach((question) => {
    const singleQuestion = createElementDynamically("div");
    singleQuestion.className = "question";

    const questionDivision = createElementDynamically("div");
    const questionTitle = createElementDynamically("h2");
    questionTitle.innerText = question.title;

    const questionArrow = createElementDynamically("img");
    questionArrow.src = "./images/icon-arrow-down.svg";

    questionDivision.append(questionTitle, questionArrow);

    const questionAnswer = createElementDynamically("p");
    questionAnswer.innerText = question.answer;

    singleQuestion.append(questionDivision, questionAnswer);
    singleQuestion.addEventListener("click", showQuestionAnswer);

    questionsContainer.appendChild(singleQuestion);
  });
};

createElementDynamically = (element) => {
  return document.createElement(element);
};

showQuestionAnswer = (event) => {

  if (event.target.nodeName !== "DIV") {
    const questionTitle =
      event.target.parentNode.parentNode.querySelector("h2");
    const questionArrow =
      event.target.parentNode.parentNode.querySelector("img");
    const questionAnswer =
      event.target.parentNode.parentNode.querySelector("p");

    questionTitle.classList.toggle("text-bold");
    questionArrow.classList.toggle("rotate-vertical");
    questionAnswer.classList.toggle("display-block");

    const questionsAvailable = document.querySelectorAll(".question");
    questionsAvailable.forEach((question) => {
      const title = question.querySelector("h2");
      const arrow = question.querySelector("img");
      const answer = question.querySelector("p");
      if (questionTitle != title) {
        title.classList.remove("text-bold");
      }

      if (questionArrow != arrow) {
        arrow.classList.remove("rotate-vertical");
      }

      if (questionAnswer != answer) {
        answer.classList.remove("display-block");
      }
    });
  }
};
