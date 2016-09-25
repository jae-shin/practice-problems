/**
 * Write a function that when given an array of tasks and an positive integer n,
 * executes a maximum of 'n' tasks at a time.
 */

/**
 * Write a function that when given an array of tasks and an positive integer n,
 * executes a maximum of 'n' tasks at a time.
 *
 * @param  {array} tasks [array of tasks]
 * @param  {number} limit [maximum number of tasks that can be executed simultaneously]
 * @return {undefined}
 */
function taskRunner(tasks, limit) {
  let i;

  for(i = 0; i < limit; i++) {
    new Promise((resolve, reject) => {
      tasks[i]((err, res) => {
        if (err) {
          reject (err);
        } else {
          resolve(res);
        }
      });
    });
  }
}