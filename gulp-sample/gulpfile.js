// gulp 入口文件

const { series, parallel } = require('gulp')

exports.foo = done => {
  console.log('gulp foo')
  done() // 标识任务完成
}

exports.default = done => {
  console.log('default task working')
  done()
}

const task1 = done => {
  setTimeout(() => {
    console.log('task1 working')
    done()
  }, 1000);
}

const task2 = done => {
  setTimeout(() => {
    console.log('task2 working')
    done()
  }, 1000);
}

const task3 = done => {
  setTimeout(() => {
    console.log('task3 working')
    done()
  }, 1000);
}

// exports.task = series(task1, task2, task3)
exports.task = parallel(task1, task2, task3)