let expenses = [
  { desc: "Groceries", amount: 50, category: "Food" },
  { desc: "Electricity Bill", amount: 100, category: "Utilities" },
  { desc: "Dinner", amount: 30, category: "Food" },
  { desc: "Internet Bill", amount: 50, category: "Utilities" },
];

// let expenseReport = expenses.reduce((report, expense) => {
//     report[expense.category] += expense.amount;
//     return report;
// }, { "Food": 0, "Utilities": 0 })


let expenseReport = expenses.reduce(
  (report, expense) => {
    report[expense.category] = (report[expense.category || 0]) + expense.amount;
    return report;
  },
  { Food: 0, Utilities: 0 }
);

// console.log(expenseReport)

let tasks = [
  { description: "Write report", completed: false, priority: 2 },
  { description: "Send email", completed: true, priority: 3 },
  { description: "Prepare presentation", completed: false, priority: 1 },
];

let pendingSortedTasks = tasks.
    filter((task) => !task.completed)
    .sort((a, b) => a.priority - b.priority);

// console.log(pendingSortedTasks)

let movieRatings = [
  { title: "Movie A", ratings: [4, 5, 3] },
  { title: "Movie B", ratings: [5, 5, 4] },
  { title: "Movie C", ratings: [3, 4, 2] },
];

//original array will be mutated i.e. original array will be changed

// let averageRatings = movieRatings.map((movie) => {
//     let avg = movie.ratings.reduce((sum, rating) => {
//       return  sum += rating;
//     },0)
//     movie.ratings = (avg/movie.ratings.length).toFixed(2)
//     return movie;
// })

let averageRatings1 = movieRatings.map((movie) => {
    let avg = movie.ratings.reduce((sum, rating) => {
        return (sum += rating);
    }, 0);
    return {title:movie.title,ratings:(avg / movie.ratings.length).toFixed(2)
};
});

console.log(averageRatings1);
console.log(movieRatings);

