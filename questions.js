var questions = [
    {
        title: "1. Commonly used data type DO NOT include:",
        options: ["string", "booleans", "numbers", "alerts"],
        answer: "alerts"
    },
    {
        title: "2. The condition in an if/else statement is enclosed within:",
        options: ["''", "{}", "()", "[]"],
        answer: "()"
    },
    {
        title: "3. JavaScript Code can be called by using",
        options: ["RMI", "Triggering Event", "Preprocessor", "Function/Method"],
        answer: "Function/Method"
    },
    {
        title: "4. Which of the following is not considered as an error in JavaScript?",
        options: ["Syntax error", "Missing of semicolons", "Division by zero", "All of the mentioned"],
        answer: "Division by zero"
    },
    {
        title: "5. Among the following, which one is a ternary operator?",
        options: ["+", ":", "-", "?:"],
        answer: "?:"
    }
];

//Questions taken from https://muksat.semanticwebsolutions.com/2018/07/16/javascript-multiple-choice-questions-and-answers/

localStorage.setItem("questions", JSON.stringify(questions));